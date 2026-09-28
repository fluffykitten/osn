/**
 * osnTopic03.ts
 * Topik 3: Stoikiometri & Wujud Zat
 * Jenjang: OSN / IChO
 * Standar Pedagogis: Tone Opsi A (Arsitektur 5 Lapis, Mental Model Hook, Scaffolded Logic, GitHub Callouts, & Checkpoint Quizzes)
 */

import type { MaterialItem } from '../../materialsData.ts';
import { CHECKPOINTS_TOPIC_OSN_03 } from '../../checkpoints/checkpointBankTopicOsn03.ts';

const RAW_OSN_TOPIC_3: MaterialItem = {
  id: 3,
  topic_number: 3,
  title: 'Stoikiometri & Wujud Zat',
  slug: 'stoikiometri-wujud-zat',
  category: 'Stoikiometri Dasar',
  level: 'OSN-P',
  readTimeMinutes: 36,
  summary: 'Kajian mendalam kimia kuantitatif dan termofisika materi: konsep mol lanjutan, neraca massa pembakaran hidrokarbon, algoritma pereaksi pembatas & persen hasil; stoikiometri larutan, gravimetri, & faktor konversi konsentrasi; hukum gas ideal & teori kinetik gas Maxwell-Boltzmann; penyimpangan gas nyata Van der Waals, kompresibilitas Z, & temperatur Boyle; kinetika difusi-efusi Graham; termodinamika transisi fasa materi, diagram P-T, persamaan Clausius-Clapeyron; kristalografi sel satuan logam (SC, BCC, FCC); serta kristalografi material lanjutan mencakup struktur kisi perovskite ABO3, faktor toleransi Goldschmidt, kisi HCP, termodinamika cacat kristal, dan difraksi sinar-X (XRD) Bragg.',
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
    'soal-kristalografi-perovskite-xrd',
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
    'soal-icho',
    'kristal-fcc',
    'densitas-kristal',
    'tekanan-uap-jenuh',
  ],
  prerequisites: [
    {
      tag: 'konsep-mol-massa-molar',
      tags: ['konsep-mol', 'massa-molar', 'tetapan-avogadro', 'rumus-empiris-molekul'],
      title: 'Prasyarat 1: Konsep Mol, Massa Molar, Avogadro, & Rumus Empiris/Molekul',
      summary: 'Fondasi kuantitatif konversi massa, jumlah partikel, persen massa unsur, dan rumus molekul pembakaran.',
      content: `Pernahkah Anda membayangkan bagaimana Antoine Lavoisier dan John Dalton melacak triliunan partikel yang tak kasat mata hanya dengan timbangan analitik meja laboratorium? Stoikiometri bukanlah sekadar hitungan aritmatika hafalan rumus, melainkan sistem pembukuan (*akuntansi*) semesta di mana atom adalah mata uang riil yang kekal! Melalui tetapan Avogadro, konsep mol menjadi "ibu kota transit" atau jembatan penghubung antara dunia mikroskopis (massa atom relatif dan jumlah elektron) dengan dunia makroskopis (gram di timbangan analitik dan liter di labu ukur).

---

### 1. Definisi Mol & Tetapan Avogadro ($N_A$):
Satu mol didefinisikan sebagai kuantitas zat yang mengandung partikel elementer (atom, molekul, ion, atau elektron) sebanyak jumlah atom yang terdapat dalam persis $12\\text{ gram}$ isotop murni karbon-12 ($\\ce{^{12}C}$).
Bilangan fundamental ini dinamakan **Tetapan Avogadro ($N_A$)**:
$$N_A = 6.02214 \\times 10^{23}\\text{ partikel/mol}$$

Hubungan dasar kuantitas mol ($n$):
$$n = \\frac{m}{M_r} = \\frac{N}{N_A}$$
di mana:
- $m$ = massa sampel zat murni (dalam $\\text{gram}$)
- $M_r$ = massa molar zat (dalam $\\text{g/mol}$)
- $N$ = jumlah entitas partikel mikroskopis

---

### 2. Komposisi Persen Massa & Rumus Empiris vs Rumus Molekul:
1. **Persen Massa Unsur ($w_i$):**
   $$\\% w_i = \\frac{n_i \\cdot A_r(i)}{M_r(\\text{senyawa})} \\times 100\\%$$
2. **Rumus Empiris (RE):** Rumus perbandingan bilangan bulat terkecil antar-atom penyusun suatu senyawa kimia.
3. **Rumus Molekul (RM):** Rumus kimia aktual yang menunjukkan jumlah atom nyata dalam satu molekul tunggal:
   $$\\text{Rumus Molekul} = (\\text{Rumus Empiris})_k \\implies M_r(\\text{RM}) = k \\times M_r(\\text{RE})$$
   di mana $k$ adalah bilangan bulat positif ($k = 1, 2, 3, \\dots$).

---

### 3. Analisis Pembakaran Hidrokarbon & Senyawa Organik ($\\ce{C_x H_y O_z}$):
Pada analisis elemental kuantitatif melalui pembakaran sempurna dengan gas oksigen berlebih:
$$\\ce{C_x H_y O_z} + \\left(x + \\frac{y}{4} - \\frac{z}{2}\\right)\\ce{O2} -> x\\ce{CO2} + \\frac{y}{2}\\ce{H2O}$$

- **Konversi Karbon:** Seluruh atom karbon dalam sampel terkonversi kuantitatif menjadi gas $\\ce{CO2}$:
  $$m_{\\ce{C}} = m_{\\ce{CO2}} \\times \\frac{12.011}{44.01} \\implies n_{\\ce{C}} = \\frac{m_{\\ce{CO2}}}{44.01}$$
- **Konversi Hidrogen:** Seluruh atom hidrogen terkonversi kuantitatif menjadi molekul air $\\ce{H2O}$:
  $$m_{\\ce{H}} = m_{\\ce{H2O}} \\times \\frac{2.016}{18.015} \\implies n_{\\ce{H}} = 2 \\times \\frac{m_{\\ce{H2O}}}{18.015}$$
- **Konversi Oksigen Sampel:** Massa atom oksigen diperoleh melalui selisih massa sampel awal terhadap massa karbon dan hidrogen:
  $$m_{\\ce{O}} = m_{\\text{sampel}} - (m_{\\ce{C}} + m_{\\ce{H}}) \\implies n_{\\ce{O}} = \\frac{m_{\\ce{O}}}{16.00}$$

Perbandingan mol $n_{\\ce{C}} : n_{\\ce{H}} : n_{\\ce{O}}$ dinormalisasi ke bilangan bulat terkecil untuk menetapkan rumus empiris.

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Analisis Pembakaran & Air Kristal
> 1. **Faktor 2 pada Mol Atom Hidrogen:** Ingat bahwa $1\\text{ mol } \\ce{H2O}$ mengandung **$2\\text{ mol}$ atom $\\ce{H}$** ($n_{\\ce{H}} = 2 \\times n_{\\ce{H2O}}$). Kesalahan paling sering di babak OSK adalah langsung membagi massa $\\ce{H2O}$ dengan 18 lalu menganggap nilainya sebagai mol hidrogen!
> 2. **Menghitung Mol Oksigen Sampel:** Jangan sekali-kali menghitung mol oksigen dari massa $\\ce{CO2}$ atau $\\ce{H2O}$ jika sampel dibakar dengan gas $\\ce{O2}$ luar, karena sebagian besar atom oksigen pada produk berasal dari udara luar! Massa oksigen sampel murni **wajib dihitung melalui selisih massa**: $m_{\\ce{O}} = m_{\\text{sampel}} - (m_{\\ce{C}} + m_{\\ce{H}})$.

> [!TIP]
> ### 💡 Strategi Juara OSN: Penentuan Rumus Molekul via Rasio Gas
> Pada fasa gas pada $T$ dan $P$ yang sama (Hukum Gay-Lussac/Avogadro), rasio volume gas setara dengan rasio koefisien mol: $V_1 : V_2 = n_1 : n_2$. Untuk gas organik tak dikenal, kerapatan gas relatif terhadap udara atau gas pembanding ($\\rho_{\\text{rel}} = \\frac{M_x}{M_{\\text{pembanding}}}$) adalah jalan pintas tercepat untuk memperoleh massa molar tanpa perlu data $P$ dan $T$ eksplisit!`,
      keyFormulas: [
        { name: 'Rumus Konversi Mol', formula: 'n = \\frac{m}{M_r} = \\frac{N}{N_A}' },
        { name: 'Massa Molar Rumus Molekul', formula: 'M_r(\\text{RM}) = k \\cdot M_r(\\text{RE})' },
        { name: 'Mol Atom Hidrogen dari Air', formula: 'n_{\\ce{H}} = 2 \\times \\frac{m_{\\ce{H2O}}}{18.015}' },
      ],
    },
    {
      tag: 'pereaksi-pembatas-persen-hasil',
      tags: ['pereaksi-pembatas', 'persen-hasil', 'penyetaraan-reaksi'],
      title: 'Prasyarat 2: Penyetaraan Reaksi, Pereaksi Pembatas, & Persen Hasil Reaksi',
      summary: 'Algoritma penentuan pereaksi pembatas, kuantifikasi reaktan sisa, dan efisiensi konversi hasil teoritis.',
      content: `Bayangkan sebuah pabrik roti lapis (*sandwich*) keju yang membutuhkan 2 lembar roti dan 3 iris keju untuk setiap porsi. Jika Anda memiliki 10 lembar roti dan 9 iris keju, roti lapis maksimum yang bisa dibuat bukanlah ditentukan oleh bahan yang paling sedikit secara kasat mata, melainkan oleh rasio kebutuhan resep! Sembilan iris keju hanya cukup untuk 3 porsi sandwich (menghabiskan 6 lembar roti, menyisakan 4 lembar). Keju bertindak sebagai **pereaksi pembatas (*limiting reactant*)**. Dalam kimia olimpiade, mengabaikan koefisien reaksi saat menentukan pereaksi pembatas adalah kesalahan fatal pertama yang menjebak ribuan peserta setiap tahunnya.

---

### 1. Algoritma Penentuan Pereaksi Pembatas (*Limiting Reactant*):
Dalam praktik laboratorium olimpiade, reaktan-reaktan jarang dicampurkan dalam rasio stoikiometri yang persis setara. Salah satu reaktan akan habis terlebih dahulu dan membatasi jumlah produk maksimum yang dapat terbentuk.

Untuk reaksi kimia umum:
$$a\\ce{A} + b\\ce{B} -> c\\ce{C} + d\\ce{D}$$

Langkah sistematis:
1. Hitung jumlah mol awal masing-masing reaktan: $n_{\\ce{A}}$ dan $n_{\\ce{B}}$.
2. Bagi jumlah mol dengan koefisien reaksi masing-masing:
   $$\\text{Rasio A} = \\frac{n_{\\ce{A}}}{a} \\quad \\text{dan} \\quad \\text{Rasio B} = \\frac{n_{\\ce{B}}}{b}$$
3. **Pereaksi Pembatas:** Reaktan yang memiliki nilai rasio mol/koefisien **paling kecil** ($\\min(n_i / \\nu_i)$).
4. Jumlah mol produk yang terbentuk dan mol reaktan lain yang bereaksi sepenuhnya dikalkulasi berdasarkan pereaksi pembatas tersebut.
5. **Mol Zat Sisa:**
   $$n_{\\text{sisa}} = n_{\\text{awal}} - n_{\\text{bereaksi}}$$

---

### 2. Konsep Hasil Teoritis, Hasil Aktual, & Persen Hasil:
- **Hasil Teoritis (*Theoretical Yield*):** Kuantitas produk maksimum yang dihitung secara stoikiometri dari pereaksi pembatas, dengan asumsi reaksi berlangsung sempurna ($100\\%$ efisiensi tanpa reaksi samping atau kehilangan produk).
- **Hasil Aktual (*Actual Yield*):** Massa produk murni yang benar-benar diperoleh dari eksperimen nyata setelah proses isolasi, penyaringan, dan pemurnian kristal/distilasi.
- **Persen Hasil (*Percent Yield*):**
   $$\\%\\text{ Hasil} = \\frac{\\text{Hasil Aktual (gram)}}{\\text{Hasil Teoritis (gram)}} \\times 100\\%$$

---

### 3. Kemurnian Sampel (*Sample Purity*):
Bila suatu bijih mineral atau reagen teknis tidak murni mengalami reaksi kuantitatif:
$$\\%\\text{ Kemurnian} = \\frac{m_{\\text{zat murni reaktif}}}{m_{\\text{sampel kotor}}} \\times 100\\%$$

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Mol Awal vs Rasio Koefisien
> Reaktan pembatas **BUKAN** reaktan dengan jumlah mol paling sedikit, melainkan reaktan dengan nilai $\\frac{n_i}{\\nu_i}$ (rasio mol terhadap koefisien reaksi) paling kecil! Contoh: jika $3\\text{ mol } \\ce{A}$ bereaksi dengan $2\\text{ mol } \\ce{B}$ sesuai persamaan $\\ce{A + 2 B -> C}$, maka rasio $\\ce{A} = 3/1 = 3$, sedangkan rasio $\\ce{B} = 2/2 = 1$. Reaktan $\\ce{B}$ habis terlebih dahulu dan menjadi pembatas, meskipun mol mula-mulanya tampak lebih kecil!

> [!TIP]
> ### 💡 Trik Praktis Olimpiade: Tabulasi M-B-S (Mula-Mula, Bereaksi, Sisa)
> Selalu buat tabel M-B-S berdimensi kuantitatif mol. Pada baris "Bereaksi", seluruh entri reaktan bertanda minus ($-$) dan produk bertanda plus ($+$), di mana besaran mol bereaksi wajib tepat memenuhi rasio perbandingan koefisien reaksi yang telah disetarakan secara seksama!`,
      keyFormulas: [
        { name: 'Kriteria Pereaksi Pembatas', formula: '\\min\\left(\\frac{n_i}{\\nu_i}\\right)' },
        { name: 'Persen Hasil Reaksi', formula: '\\% \\text{Hasil} = \\frac{\\text{Hasil Aktual}}{\\text{Hasil Teoritis}} \\times 100\\%' },
        { name: 'Persen Kemurnian Sampel', formula: '\\% \\text{Kemurnian} = \\frac{m_{\\text{murni}}}{m_{\\text{kotor}}} \\times 100\\%' },
      ],
    },
    {
      tag: 'stoikiometri-larutan-konsentrasi',
      tags: ['stoikiometri-larutan', 'molaritas', 'molalitas', 'reaksi-pengendapan'],
      title: 'Prasyarat 3: Stoikiometri Larutan, Satuan Konsentrasi, & Reaksi Pengendapan',
      summary: 'Konsep molaritas, molalitas, fraksi mol, pengenceran, dan analisis gravimetri kuantitatif.',
      content: `Sebagian besar keajaiban kimia analitik berlangsung di dalam cairan pelarut. Di dalam larutan, molekul dan ion terdisosiasi bebas bergerak, saling bertumbukan ribuan kali lebih cepat dibanding fasa padat. Namun, bagaimana kita menghitung zat terlarut yang tersembunyi di dalam media cair? Molaritas ($M$) mencatat kerapatan partikel per ruang volume larutan, sementara molalitas ($m$) mengukur rasio partikel terhadap massa pelarut murni yang kebal terhadap kontraksi termal. Melalui analisis gravimetri, kita mengubah ion terlarut yang tak terlihat menjadi endapan padat stoikiometrik berbobot tetap yang dapat ditimbang hingga ketelitian sub-miligram.

---

### 1. Empat Satuan Konsentrasi Pokok:
1. **Molaritas ($M$):** Jumlah mol zat terlarut per liter larutan total:
   $$M = \\frac{n}{V_{\\text{larutan (L)}}} = \\frac{m}{M_r} \\times \\frac{1000}{V_{\\text{larutan (mL)}}}$$
2. **Molalitas ($m$):** Jumlah mol zat terlarut per kilogram pelarut murni:
   $$m = \\frac{n}{m_{\\text{pelarut (kg)}}}$$
3. **Fraksi Mol ($X_i$):** Perbandingan jumlah mol suatu komponen terhadap jumlah mol total seluruh komponen dalam larutan:
   $$X_A = \\frac{n_A}{n_A + n_B + \\dots} \\implies \\sum X_i = 1$$
4. **Persen Massa (\\% w/w):**
   $$\\% w/w = \\frac{m_{\\text{terlarut}}}{m_{\\text{larutan total}}} \\times 100\\%$$

---

### 2. Hukum Pengenceran:
Pada proses penambahan pelarut murni ke dalam larutan pekat, jumlah mol zat terlarut tidak berubah ($n_1 = n_2$):
$$V_1 \\cdot M_1 = V_2 \\cdot M_2$$

---

### 3. Stoikiometri Pengendapan & Analisis Gravimetri:
Analisis gravimetri mengukur massa endapan padat sukar larut yang terbentuk melalui reaksi metatesis ionik:
- Contoh pengendapan sulfat ($\\ce{SO4^2-}$) oleh barium:
  $$\\ce{Ba^2+(aq) + SO4^2-(aq) -> BaSO4(s)} \\quad (M_r = 233.39\\text{ g/mol})$$
- Pengendapan halida ($\\ce{Cl-}$) oleh perak:
  $$\\ce{Ag+(aq) + Cl-(aq) -> AgCl(s)} \\quad (M_r = 143.32\\text{ g/mol})$$

Massa analit dihitung menggunakan **Faktor Gravimetri (FG)**:
$$m_{\\text{analit}} = m_{\\text{endapan}} \\times \\text{FG} = m_{\\text{endapan}} \\times \\left(\\frac{a \\cdot A_r(\\text{analit})}{b \\cdot M_r(\\text{endapan})}\\right)$$

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Kontraksi Volume & Volume Total Campuran
> 1. **Bukan Penjumlahan Sederhana:** Ketika dua larutan berbeda dicampurkan (misal $100\\text{ mL}$ etanol $+ 100\\text{ mL}$ air), volume akhir sesungguhnya **tidak persis $200\\text{ mL}$** akibat kontraksi volume ikatan hidrogen. Dalam soal olimpiade, jika tidak ada keterangan kerapatan campuran, asumsikan volume aditif ($V_{\\text{tot}} = V_1 + V_2$), tetapi jangan pernah lupa membagi sisa mol dengan volume total campuran tersebut!
> 2. **Molaritas vs Molalitas:** Molaritas ($M$) bergantung pada temperatur karena cairan memuai saat dipanaskan ($V$ membesar $\\implies M$ turun). Molalitas ($m$) berbasis massa kilogram pelarut sehingga **bersifat invarian terhadap perubahan suhu**!

> [!TIP]
> ### 💡 Rumus Sakti Konversi Molaritas dari Persen Massa
> Untuk larutan pekat berkerapatan $\\rho$ ($\\text{g/mL}$) dan kadar $w/w$ ($\\&$):
> $$M = \\frac{\\% w/w \\times \\rho \\times 10}{M_r}$$
> Hubungan ini menghemat waktu pengerjaan soal hingga 60 detik di babak OSK/OSP!`,
      keyFormulas: [
        { name: 'Molaritas dari Persen Massa', formula: 'M = \\frac{\\% w/w \\times \\rho \\times 10}{M_r}' },
        { name: 'Hukum Pengenceran', formula: 'V_1 M_1 = V_2 M_2' },
        { name: 'Faktor Gravimetri', formula: '\\text{FG} = \\frac{a \\cdot A_r(\\text{analit})}{b \\cdot M_r(\\text{endapan})}' },
      ],
    },
  ],
  core_concepts: [
    {
      tag: 'gas-ideal-teori-kinetik',
      tags: ['gas-ideal', 'teori-kinetik-gas', 'tekanan-parsial-dalton', 'kecepatan-rms'],
      title: 'Konsep Inti 1: Hukum Gas Ideal, Tekanan Parsial Dalton, & Teori Kinetik Gas',
      summary: 'Persamaan keadaan gas ideal, densitas gas, fraksi mol campuran gas, dan kecepatan kuantum termal molekul gas.',
      content: `Bayangkan sebuah arena biliar raksasa di mana miliaran bola elastis sempurna bergerak liar ke segala penjuru tanpa gesekan, tanpa volume partikel, dan tanpa pernah saling tarik-menarik. Inilah model ideal yang dibangun oleh Robert Boyle, Jacques Charles, dan John Dalton! Tekanan gas yang kita rasakan bukanlah gaya statis, melainkan impak jutaan tumbukan momentum per detik yang menghantam dinding wadah. Namun, benarkah setiap molekul bergerak dengan kecepatan yang sama? Ludwig Boltzmann membuktikan bahwa di balik keteraturan makroskopis $PV = nRT$, bersembunyi kurva lonceng probabilitas di mana sebagian molekul merangkak lambat, sementara sebagian lainnya melesat melampaui kecepatan suara!

---

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
Pada campuran gas-gas ideal yang tidak saling bereaksi di dalam wadah bervolume tetap:
$$P_{\\text{tot}} = \\sum_{i=1}^k P_i = P_1 + P_2 + P_3 + \\dots$$

Tekanan parsial komponen ke-$i$ dinyatakan oleh fraksi molnya:
$$P_i = X_i \\cdot P_{\\text{tot}} = \\left(\\frac{n_i}{n_{\\text{tot}}}\\right) P_{\\text{tot}}$$

---

### 3. Teori Kinetik Gas (KMT) & Spektrum Kecepatan Molekuler:
Teori kinetik gas menghubungkan sifat makroskopis termodinamika dengan dinamika mikroskopis impuls gerak partikel:
$$P = \\frac{1}{3} \\frac{N m_p}{V} \\overline{v^2}$$

Energi kinetik translasi rata-rata per molekul gas **hanya bergantung pada temperatur mutlak ($T$)**:
$$\\overline{E}_k = \\frac{1}{2} m_p \\overline{v^2} = \\frac{3}{2} k_B T$$
di mana $k_B = \\frac{R}{N_A} = 1.38065 \\times 10^{-23}\\text{ J/K}$ adalah tetapan Boltzmann.

**Tiga Kecepatan Karakteristik Molekul Gas:**
1. **Kecepatan Akar Kuadrat Rata-Rata (*Root-Mean-Square Speed*, $v_{\\text{rms}}$):**
   $$v_{\\text{rms}} = \\sqrt{\\overline{v^2}} = \\sqrt{\\frac{3RT}{M}}$$
2. **Kecepatan Rata-Rata Aritmatika ($\\overline{v}$):**
   $$\\overline{v} = \\sqrt{\\frac{8RT}{\\pi M}}$$
3. **Kecepatan Paling Mungkin (*Most Probable Speed*, $v_{\\text{mp}}$):**
   $$v_{\\text{mp}} = \\sqrt{\\frac{2RT}{M}}$$

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Energi Kinetik vs Kecepatan Partikel
> 1. **Energi Kinetik Rata-rata Hanya Fungsi Suhu:** Pada suhu mutlak $T$ yang sama, molekul gas ringan ($\\ce{H2}$) dan gas berat ($\\ce{SF6}$) memiliki **energi kinetik translasi rata-rata yang PERSIS SAMA**: $\\overline{E}_k = \\frac{3}{2} k_B T$.
> 2. **Kecepatan Bukan Energi Kinetik:** Karena massanya jauh lebih kecil, molekul $\\ce{H2}$ bergerak jauh lebih cepat ($v_{\\text{rms}} \\propto 1/\\sqrt{M}$) agar menghasilkan $\\frac{1}{2} m \\overline{v^2}$ yang setara dengan $\\ce{SF6}$. Jangan terkecoh menyamakan laju gerak dengan energi kinetik!
> 3. **Penampungan Gas di Atas Air:** Ketika gas hasil reaksi ditampung melalui pemindahan air (*water displacement*), gas jenuh oleh uap air. Tekanan gas kering sesungguhnya adalah: $P_{\\text{gas kering}} = P_{\\text{barometer}} - P_{\\ce{H2O(g)}}^\\ast(T)$.

> [!TIP]
> ### 💡 Rasio Emas Tiga Kecepatan Molekuler
> Ingat perbandingan matematis ketiga kecepatan karakteristik dari kurva distribusi Maxwell-Boltzmann:
> $$v_{\\text{mp}} : \\overline{v} : v_{\\text{rms}} = \\sqrt{2} : \\sqrt{\\frac{8}{\\pi}} : \\sqrt{3} \\approx 1.000 : 1.128 : 1.225$$
> Di mana $v_{\\text{mp}}$ adalah puncak kurva (modus), $\\overline{v}$ adalah rata-rata aritmatika, dan $v_{\\text{rms}}$ adalah nilai rata-rata kuadrat yang merefleksikan temperatur termodinamika.`,
      keyFormulas: [
        { name: 'Persamaan Gas Ideal', formula: 'PV = nRT = \\frac{m}{M}RT' },
        { name: 'Massa Molar dari Densitas Gas', formula: 'M = \\frac{\\rho R T}{P}' },
        { name: 'Tekanan Parsial Dalton', formula: 'P_i = X_i \\cdot P_{\\text{tot}}' },
        { name: 'Kecepatan RMS Molekul Gas', formula: 'v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}' },
      ],
    },
    {
      tag: 'gas-nyata-van-der-waals',
      tags: ['gas-nyata', 'persamaan-van-der-waals', 'faktor-kompresibilitas-z', 'suhu-boyle'],
      title: 'Konsep Inti 2: Gas Nyata Van der Waals, Faktor Kompresibilitas, & Temperatur Boyle',
      summary: 'Koreksi matematis gaya tarik coulombik antar-molekul dan volume eksklusi ruang partikel riil.',
      content: `Dunia nyata bukanlah arena bola biliar titik hampa. Ketika gas dimampatkan hingga tekanan ratusan atmosfer atau didinginkan hingga mendekati titik embunnya, molekul-molekul gas mulai "menyadari" keberadaan tetangganya! Molekul gas bukanlah titik matematis tak bervolume; partikel memiliki ukuran fisik yang saling mendesak (volume eksklusi $b$). Lebih dari itu, awan elektron antar-molekul saling menginduksi gaya tarik dispersi Van der Waals yang saling mengerem sebelum membentur dinding wadah (kohesi $a$). Johannes Diderik van der Waals memformulasikan realitas ini menjadi salah satu persamaan paling elegan dalam sejarah fisika-kimia, membukakan gerbang menuju pencairan gas-gas mulia dan fluida superkritis.

---

### 1. Persamaan Keadaan Johannes Diderik van der Waals (1873):
Untuk $n$ mol gas nyata dalam wadah bervolume $V$:
$$\\left( P + \\frac{a n^2}{V^2} \\right)(V - nb) = nRT \\iff \\left( P + \\frac{a}{V_m^2} \\right)(V_m - b) = RT$$
di mana $V_m = \\frac{V}{n}$ adalah volume molar gas.

**Makna Fisik Parameter Van der Waals:**
- **Parameter $a$ (Koreksi Gaya Tarik Intermolekul / Kohesi):**
  Molekul-molekul gas saling tarik-menarik. Partikel di dekat dinding ditarik ke dalam oleh molekul di belakangnya, sehingga momentum tumbukan dinding berkurang. Tekanan terukur ($P$) lebih kecil dibanding gas ideal. Suku $\\frac{a n^2}{V^2}$ ditambahkan untuk mengoreksi reduksi tekanan ini. Satuan: $\\text{L}^2\\cdot\\text{atm}\\cdot\\text{mol}^{-2}$ (atau $\\text{Pa}\\cdot\\text{m}^6\\cdot\\text{mol}^{-2}$).
- **Parameter $b$ (Koreksi Volume Ruang Eksklusi Partikel):**
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
$$\\lim_{P \\to 0} \\left(\\frac{\\partial Z}{\\partial P}\\right)_T = 0 \\implies T_B = \\frac{a}{R \\cdot b}$$

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Interpretasi Faktor Kompresibilitas Z
> - **$Z < 1$ (Wilayah Tekanan Moderat):** Gaya tarik antar-molekul ($a$) mendominasi. Partikel saling menarik, memperlambat impuls ke dinding sehingga tekanan nyata lebih kecil dari ideal ($P_{\\text{vdW}} < P_{\\text{ideal}}$), dan volume molar terkontraksi ($V_m < V_m^{\\text{ideal}}$).
> - **$Z > 1$ (Wilayah Tekanan Sangat Tinggi):** Gaya tolak volume eksklusi molekul ($b$) mendominasi. Molekul terdesak rapat seperti kerikil keras padat, menolak dimampatkan lebih lanjut sehingga $V_m > V_m^{\\text{ideal}}$.
> Jangan terbalik mengasumsikan $Z < 1$ disebabkan oleh ukuran molekul!

> [!TIP]
> ### 💡 Kunci Penurunan Temperatur Boyle
> Pada limit tekanan $P \\to 0$, bentuk virial persamaan Van der Waals adalah:
> $$Z = 1 + \\left(b - \\frac{a}{RT}\\right)\\frac{1}{V_m} + \\dots$$
> Agar gas nyata berkarakteristik ideal ($Z = 1$), suku koefisien virial kedua harus bernilai nol:
> $$b - \\frac{a}{RT_B} = 0 \\implies T_B = \\frac{a}{Rb}$$`,
      keyFormulas: [
        { name: 'Persamaan Gas Van der Waals', formula: '\\left(P + \\frac{a n^2}{V^2}\\right)(V - nb) = nRT' },
        { name: 'Faktor Kompresibilitas Z', formula: 'Z = \\frac{P V_m}{RT}' },
        { name: 'Temperatur Boyle', formula: 'T_B = \\frac{a}{R \\cdot b}' },
      ],
    },
    {
      tag: 'hukum-efusi-difusi-graham',
      tags: ['hukum-graham', 'efusi-gas', 'difusi-gas', 'maxwell-boltzmann'],
      title: 'Konsep Inti 3: Hukum Difusi & Efusi Graham serta Distribusi Maxwell-Boltzmann',
      summary: 'Rasio kinetik pelolosan molekul gas melalui orifis mikro, pemisahan isotopik, dan kurva probabilitas termal.',
      content: `Jika sebuah parfum disemprotkan di sudut ruangan tertutup, mengapa aromanya membutuhkan waktu beberapa menit untuk tercium di sudut lainnya padahal kecepatan molekulnya mencapai 400 meter per detik? Jawabannya adalah labirin tabrakan! Pada difusi, molekul meliuk-liuk di tengah triliunan molekul udara lainnya melalui gerak acak (*random walk*). Sebaliknya, pada efusi, molekul meloloskan diri satu demi satu melewati celah mikro tanpa tabrakan. Fenomena sederhana yang dirumuskan Thomas Graham ini terbukti menjadi senjata ilmiah paling strategis dalam sejarah manusia: pemisahan isotop uranium pada skala industri.

---

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
2. **Pengaruh Massa Molar ($M$):** Gas yang lebih ringan (misal $\\ce{He}$ atau $\\ce{H2}$) memiliki kurva yang jauh lebih lebar dan bergeser ke kanan dibanding gas berat (seperti $\\ce{N2}$ atau $\\ce{Ar}$) pada suhu yang sama.

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Laju Efusi vs Waktu Efusi
> Perhatikan rumus perbandingan efusi dua gas:
> $$\\frac{r_1}{r_2} = \\sqrt{\\frac{M_2}{M_1}} \\quad \\text{tetapi} \\quad \\frac{t_1}{t_2} = \\sqrt{\\frac{M_1}{M_2}}$$
> Laju efusi ($r$) **berbanding terbalik** dengan akar massa molar, sedangkan waktu efusi ($t$) untuk volume gas yang sama **berbanding lurus** dengan akar massa molar! Gas yang lebih berat bergerak lebih lambat sehingga membutuhkan waktu pengosongan yang lebih lama.

> [!TIP]
> ### 💡 Rasio Efusi Gas Campuran Non-Ekuimolar
> Jika campuran gas terdiri dari fraksi mol $X_1$ dan $X_2$, laju efusi masing-masing gas tidak hanya bergantung pada massa molar, melainkan juga berbanding lurus dengan tekanan parsialnya (fraksi molnya):
> $$\\frac{r_1}{r_2} = \\frac{P_1}{P_2} \\sqrt{\\frac{M_2}{M_1}} = \\frac{X_1}{X_2} \\sqrt{\\frac{M_2}{M_1}}$$`,
      keyFormulas: [
        { name: 'Hukum Efusi Graham', formula: '\\frac{r_1}{r_2} = \\sqrt{\\frac{M_2}{M_1}} = \\frac{t_2}{t_1}' },
        { name: 'Faktor Pengayaan Efusi', formula: '\\alpha = \\sqrt{\\frac{M_{\\text{berat}}}{M_{\\text{ringan}}}}' },
        { name: 'Efusi Campuran Non-Ekuimolar', formula: '\\frac{r_1}{r_2} = \\frac{X_1}{X_2}\\sqrt{\\frac{M_2}{M_1}}' },
      ],
    },
    {
      tag: 'diagram-fasa-clausius-clapeyron',
      tags: ['diagram-fasa', 'clausius-clapeyron', 'titik-tripel', 'entalpi-penguapan'],
      title: 'Konsep Inti 4: Wujud Zat, Diagram Fasa P-T, & Persamaan Clausius-Clapeyron',
      summary: 'Termodinamika transisi fasa materi, titik tripel, titik kritis, anomali kurva peleburan air, dan entalpi penguapan.',
      content: `Pernahkah Anda memikirkan mengapa bilah sepatu roda seluncur es dapat meluncur begitu licin di atas lapisan es padat, atau mengapa air mendidih pada suhu $71^\\circ\\text{C}$ di puncak gunung Andes? Wujud zat adalah panggung perang termodinamika abadi antara energi termal yang mengacaukan partikel dan gaya kohesi intermolekul yang menertibkannya. Diagram fasa $P-T$ memetakan batas-batas gencatan senjata ketiga fasa materi. Melalui persamaan diferensial Clausius-Clapeyron, kita dapat menghitung persis kalor tersembunyi yang dibutuhkan molekul untuk melepaskan diri dari kisi cairan menuju kebebasan fasa uap.

---

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
di mana temperatur wajib dinyatakan dalam skala mutlak Kelvin (K) dan $R = 8.314\\text{ J}/(\\text{mol}\\cdot\\text{K})$.

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Anomali Es Air & Aturan Fasa Gibbs
> 1. **Kemiringan Negatif Kurva Peleburan Es:** Pada hampir semua zat di alam semesta, kurva padat-cair miring ke kanan ($\\frac{dP}{dT} > 0$). Hanya air dan beberapa zat langka (seperti $\\ce{Bi}$ dan $\\ce{Si}$) yang memiliki kurva peleburan miring ke kiri ($\\frac{dP}{dT} < 0$) karena es padat kurang rapat dibanding air cair ($\\Delta V_{\\text{fus}} < 0$).
> 2. **Derajat Kebebasan Titik Tripel:** Menurut Aturan Fasa Gibbs $F = C - P + 2 = 1 - 3 + 2 = 0$. Titik tripel memiliki derajat kebebasan nol (invarian). Eksperimenter tidak bisa memilih suhu atau tekanan sembarang pada titik tripel!

> [!TIP]
> ### 💡 Linearitas Plot Clausius-Clapeyron
> Bentuk linear Clausius-Clapeyron:
> $$\\ln P = -\\frac{\\Delta H_{\\text{vap}}}{R} \\left(\\frac{1}{T}\\right) + C$$
> Plot $\\ln P$ pada sumbu-$y$ terhadap $\\frac{1}{T}$ pada sumbu-$x$ menghasilkan garis lurus dengan kemiringan gradien $m = -\\frac{\\Delta H_{\\text{vap}}}{R}$. Kalor penguapan langsung dihitung: $\\Delta H_{\\text{vap}} = -m \\times R$.`,
      keyFormulas: [
        { name: 'Kemiringan Clapeyron', formula: '\\frac{dP}{dT} = \\frac{\\Delta H}{T \\Delta V}' },
        { name: 'Persamaan Clausius-Clapeyron Dua Titik', formula: '\\ln\\left(\\frac{P_2}{P_1}\\right) = -\\frac{\\Delta H_{\\text{vap}}}{R} \\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)' },
        { name: 'Plot Linear Clausius-Clapeyron', formula: '\\ln P = -\\frac{\\Delta H_{\\text{vap}}}{R}\\left(\\frac{1}{T}\\right) + C' },
      ],
    },
    {
      tag: 'struktur-kristal-padat-unit-cell',
      tags: ['struktur-kristal', 'sel-satuan-unit-cell', 'kisi-bravais-fcc-bcc', 'hukum-bragg'],
      title: 'Konsep Inti 5: Struktur Kristal Zat Padat, Sel Satuan (Unit Cell), & Kisi Bravais',
      summary: 'Geometri kisi kristal logam SC, BCC, FCC, densitas teoritis kristalografi, dan faktor penumpukan atom (APF).',
      content: `Jika Anda menuangkan ribuan kelereng ke dalam kotak, bagaimana kelereng-kelereng tersebut mengatur dirinya sendiri untuk menempati ruang sekecil mungkin? Kristalografi zat padat adalah arsitektur geometri semesta pada skala sub-angstrom. Dari kisi kubus sederhana (SC) yang longgar, kubus berpusat badan (BCC) tempat atom besi memikul beban peradaban, hingga penumpukan terpadat kubus berpusat muka (FCC) yang berkilau pada logam mulia emas dan perak. Menghitung densitas kristal berarti menimbang satu sel satuan kubus yang berukuran seperseratus nanometer menggunakan neraca makroskopis!

---

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
   - Kation $\\ce{Zn^2+}$ menempati separuh ($4$ dari $8$) lubang tetrahedral. Bilangan koordinasi $= 4:4$.

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Kontak Geometri FCC vs BCC
> - **Kisi FCC (Close-Packed):** Atom bersentuhan rapat di **diagonal muka kubus**:
>   $$a\\sqrt{2} = 4r \\implies r = \\frac{a\\sqrt{2}}{4} = \\frac{a}{2\\sqrt{2}}$$
> - **Kisi BCC (Body-Centered):** Atom bersentuhan rapat di **diagonal ruang kubus**:
>   $$a\\sqrt{3} = 4r \\implies r = \\frac{a\\sqrt{3}}{4}$$
> Menggunakan rumus diagonal yang salah akan menghasilkan galat radius dan densitas hingga puluhan persen!

> [!TIP]
> ### 💡 Konversi Satuan Densitas Kristalografi
> Rusuk sel satuan biasanya diberikan dalam pikometer ($\\text{pm}$) atau angstrom ($\\text{\\AA}$):
> $$1\\text{ pm} = 10^{-10}\\text{ cm} \\implies 1\\text{ pm}^3 = 10^{-30}\\text{ cm}^3$$
> $$1\\text{ \\AA} = 10^{-8}\\text{ cm} \\implies 1\\text{ \\AA}^3 = 10^{-24}\\text{ cm}^3$$
> Selalu konversi panjang rusuk ke satuan centimeter ($\\text{cm}$) sebelum memangkatkan tiga untuk menghitung volume sel dalam $\\text{g/cm}^3$!`,
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
      content: `Di era semikonduktor dan superkonduktor temperatur tinggi, pemahaman sel satuan sederhana saja tidak lagi cukup. Kristal modern seperti perovskite $\\ce{ABO3}$ menjadi fondasi sel surya generasi baru, sensor piezoelektrik, dan baterai solid-state canggih. Bagaimana ahli kimia meramalkan apakah campuran kation logam akan membentuk kisi kubus sempurna atau terdistorsi menjadi ortorombik? Victor Goldschmidt merumuskan faktor toleransi geometris yang elegan. Dan untuk melihat posisi atom-atom tersebut secara langsung tanpa mikroskop optik, William Henry Bragg dan William Lawrence Bragg memanfaatkan sinar-X berfrekuensi tinggi sebagai penggaris kristal.

---

### 1. Struktur Kristal Kisi Perovskite ($\\ce{ABO3}$):
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
   Pasangan kekosongan stoikiometri (*stoichiometric vacancy pair*) kation dan anion yang hilang bersamaan meninggalkan kisi menuju permukaan. Densitas kristal menurun secara terukur tanpa mengubah bilangan oksidasi rata-rata kation. Lazim terjadi pada kristal ionik dengan rasio ukuran ion seimbang dan bilangan koordinasi tinggi (misal: $\\ce{NaCl}, \\ce{KCl}, \\ce{CsCl}$).
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

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Dampak Termodinamika Cacat Schottky vs Frenkel
> - **Cacat Schottky:** Pasangan kation dan anion hilang bersamaan meninggalkan kisi kristal menuju permukaan. Jumlah atom berkurang pada volume kristal yang sama $\\implies$ **densitas kristal menurun secara terukur**!
> - **Cacat Frenkel:** Ion (biasanya kation kecil) berpindah ke rongga interstisial di dalam kristal yang sama. Tidak ada massa yang hilang dari kristal $\\implies$ **densitas kristal tetap konstan**!
> Mengira semua cacat kisi menurunkan kerapatan adalah salah satu jebakan paling populer di babak teori OSN.

> [!TIP]
> ### 💡 Aturan Seleksi Indeks Miller ($hkl$) XRD Kisi Kubus
> Perhatikan pola kuadrat indeks Miller $\\sum = h^2 + k^2 + l^2$:
> - **Kubus Primitif (SC):** Refleksi diizinkan untuk semua rasio: $1, 2, 3, 4, 5, 6, 8, \\dots$ (tidak ada 7).
> - **BCC:** Hanya jika $(h+k+l)$ bernilai genap: rasio $2, 4, 6, 8, 10, 12, \\dots$
> - **FCC:** Hanya jika indeks $h, k, l$ bersifat unmixed (semua ganjil atau semua genap): rasio $3, 4, 8, 11, 12, 16, \\dots$
> Menghitung rasio $\\sin^2\\theta$ puncak-puncak XRD adalah cara tercepat mengidentifikasi jenis kisi di IChO!`,
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
      tags: ['soal-osk', 'campuran-gas', 'stoikiometri-pembakaran', 'gas-ideal'],
      title: 'Contoh Soal OSK 1: Analisis Kuantitatif Pembakaran Campuran Metana & Propana via SPLDV Stoikiometri',
      summary: 'Penyusunan sistem persamaan linear dua variabel (SPLDV) untuk memecahkan fraksi mol dan persen volume campuran gas hidrokarbon dari data tekanan bejana dan massa endapan barium karbonat.',
      content: `### Masalah Soal:
Sebuah wadah tertutup bervolume $10.0\\text{ L}$ pada temperatur $25.0^\\circ\\text{C}$ ($298.15\\text{ K}$) berisi campuran gas metana ($\\ce{CH4}$) dan propana ($\\ce{C3H8}$). Tekanan total campuran gas tersebut terukur sebesar $2.45\\text{ atm}$.

Campuran gas tersebut kemudian dibakar sempurna dengan gas oksigen ($\\ce{O2}$) berlebih sesuai reaksi pembakaran hidrokarbon. Setelah pembakaran selesai dan suhu sistem dikembalikan ke $25.0^\\circ\\text{C}$, seluruh uap air mengembun sempurna. Seluruh gas karbon dioksida ($\\ce{CO2}$) yang dihasilkan dialirkan ke dalam larutan barium hidroksida ($\\ce{Ba(OH)2}$) berlebih hingga terbentuk endapan putih barium karbonat ($\\ce{BaCO3}$) seberat $394.7\\text{ g}$.

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
      tags: ['soal-osk', 'efusi-graham', 'hukum-graham', 'hukum-efusi-difusi-graham'],
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
      tags: ['soal-osp', 'gas-nyata', 'persamaan-van-der-waals', 'gas-nyata-van-der-waals'],
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
Tekanan nyata ($77.21\\text{ atm}$) ternyata jauh lebih rendah dibandingkan prediksi gas ideal ($131.35\\text{ atm}$).
- Deviasi relatif terhadap tekanan nyata: $\\frac{131.35 - 77.21}{77.21} \\times 100\\% = 70.1\\%$ (model ideal memperkirakan tekanan $70.1\\%$ lebih tinggi dari tekanan nyata).
- Reduksi tekanan dari perkiraan ideal: $\\frac{131.35 - 77.21}{131.35} \\times 100\\% = 41.2\\%$ (tekanan aktual tereduksi $41.2\\%$ akibat tarikan intermolekul).

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
      tags: [
        'soal-osn',
        'kristal-fcc',
        'tetapan-avogadro',
        'densitas-kristal',
        'struktur-kristal',
        'sel-satuan-unit-cell',
        'kisi-bravais-fcc-bcc',
        'struktur-kristal-padat-unit-cell',
      ],
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
      tags: ['soal-osn', 'clausius-clapeyron', 'tekanan-uap-jenuh', 'diagram-fasa-clausius-clapeyron'],
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
    {
      tag: 'soal-kristalografi-perovskite-xrd',
      tags: [
        'soal-icho',
        'kristalografi-lanjutan-perovskite-xrd',
        'perovskite',
        'faktor-toleransi-goldschmidt',
        'hukum-bragg-xrd',
        'indeks-miller',
        'cacat-kristal',
      ],
      title: 'Contoh Soal IChO 6: Sel Satuan Keramik Perovskite Barium Titanat (BaTiO3), Faktor Toleransi Goldschmidt, & Analisis Difraksi Sinar-X (XRD)',
      summary: 'Kajian komprehensif kristalografi material: analisis bilangan koordinasi kisi perovskite, komputasi faktor toleransi geometris Goldschmidt, penentuan densitas kristalografi, penurunan sudut refleksi Bragg XRD indeks Miller, dan mekanisme cacat titik non-stoikiometri.',
      content: `### Masalah Soal:
Barium titanat ($\\ce{BaTiO3}$, $M = 233.19\\text{ g/mol}$) merupakan material keramik feroelektrik berstruktur perovskite yang banyak diaplikasikan dalam kapasitor multilapis dan transduser ultrasonik. Pada temperatur di atas $120^\\circ\\text{C}$, $\\ce{BaTiO3}$ mengadopsi struktur kubus ideal dengan panjang rusuk sel satuan $a = 400.0\\text{ pm}$ ($4.000 \\times 10^{-8}\\text{ cm}$).

Diketahui jari-jari ionik Shannon untuk bilangan koordinasi yang relevan:
- $r(\\ce{Ba^2+}, \\text{BK}=12) = 161\\text{ pm}$
- $r(\\ce{Ti^4+}, \\text{BK}=6) = 60.5\\text{ pm}$
- $r(\\ce{O^2-}, \\text{BK}=6) = 140\\text{ pm}$
- Tetapan Avogadro: $N_A = 6.02214 \\times 10^{23}\\text{ mol}^{-1}$
- Panjang gelombang sinar-X radiasi $\\ce{Cu-}K\\alpha$: $\\lambda = 154.18\\text{ pm}$

**Pertanyaan:**
1. Gambarkan deskripsi posisi spasial dan tentukan bilangan koordinasi (BK) terhadap oksigen untuk kation $\\ce{Ba^2+}$, kation $\\ce{Ti^4+}$, dan anion $\\ce{O^2-}$ dalam sel satuan kubus perovskite ideal!
2. Hitung Faktor Toleransi Goldschmidt ($t$) untuk $\\ce{BaTiO3}$ dan simpulkan kecenderungan stabilitas strukturnya pada temperatur ruang!
3. Hitung kerapatan teoritis kristalografi (densitas $\\rho$) keramik $\\ce{BaTiO3}$ kubus dalam satuan $\\text{g/cm}^3$!
4. Tentukan jarak antar-bidang kisi ($d_{hkl}$) serta sudut difraksi Bragg ($2\\theta$) untuk refleksi bidang kristal $(100)$, $(110)$, dan $(111)$ pada pengukuran difraksi sinar-X (XRD) orde pertama ($n=1$)!
5. Pada pemanasan suhu tinggi di bawah atmosfer pereduksi hidrogen, kristal melepaskan sebagian kecil atom oksigen menghasilkan senyawa non-stoikiometri $\\ce{BaTiO_{3-\\delta}}$ yang berwarna biru kehitaman. Jelaskan tipe cacat kristal yang terbentuk dan bagaimana kenetralan muatan listrik kisi dipertahankan!

---

### Pembahasan & Langkah Kunci:

**Langkah 1: Analisis Posisi Spasial dan Bilangan Koordinasi Kisi Perovskite**  
Pada sel satuan kubus perovskite ideal $\\ce{ABO3}$ (dengan $\\ce{Ba}$ sebagai kation A dan $\\ce{Ti}$ sebagai kation B):
- **Kation $\\ce{Ba^2+}$ (Sudut Kubus):**
  Menempati 8 posisi sudut kubus: $8 \\times \\frac{1}{8} = 1\\text{ ion Ba}^{2+}$.
  Setiap kation $\\ce{Ba^2+}$ terkoordinasi langsung oleh 12 anion oksigen pada pusat-pusat rusuk terdekat (membentuk polihedron kuboktahedron), sehingga **Bilangan Koordinasi $\\text{BK} = 12$**.
- **Kation $\\ce{Ti^4+}$ (Pusat Badan Kubus):**
  Menempati tepat 1 posisi pusat sel: $1 \\times 1 = 1\\text{ ion Ti}^{4+}$.
  Ion $\\ce{Ti^4+}$ berada di tengah rongga oktahedral yang dibentuk oleh 6 anion oksigen pada pusat-pusat muka kubus, sehingga **Bilangan Koordinasi $\\text{BK} = 6$**.
- **Anion $\\ce{O^2-}$ (Pusat Rusuk / Pusat Muka Kubus):**
  Menempati 12 pusat rusuk: $12 \\times \\frac{1}{4} = 3\\text{ ion O}^{2-}$.
  Setiap anion $\\ce{O^2-}$ dijepit secara linear oleh 2 kation $\\ce{Ti^4+}$ dan 4 kation $\\ce{Ba^2+}$, sehingga koordinasi terhadap kation pembentuk kerangka adalah linear **$\\text{BK}(\\ce{O-Ti}) = 2$** (atau total koordinasi kation $= 6$).
- **Jumlah Stoikiometri Netto per Sel Satuan:** $1\\ce{Ba} : 1\\ce{Ti} : 3\\ce{O} \\implies Z = 1$ formula unit $\\ce{BaTiO3}$ per sel satuan.

**Langkah 2: Menghitung Faktor Toleransi Goldschmidt ($t$)**  
Rumus faktor toleransi Goldschmidt:
$$t = \\frac{r_A + r_O}{\\sqrt{2}(r_B + r_O)}$$

Substitusikan jari-jari ionik Shannon:
- $r_A = r(\\ce{Ba^2+}) = 161\\text{ pm}$
- $r_B = r(\\ce{Ti^4+}) = 60.5\\text{ pm}$
- $r_O = r(\\ce{O^2-}) = 140\\text{ pm}$

Hitung pembilang dan penyebut:
$$r_A + r_O = 161 + 140 = 301\\text{ pm}$$
$$r_B + r_O = 60.5 + 140 = 200.5\\text{ pm}$$
$$\\sqrt{2}(r_B + r_O) = 1.41421 \\times 200.5 = 283.55\\text{ pm}$$

Hitung nilai $t$:
$$t = \\frac{301}{283.55} = 1.0615 \\approx \\mathbf{1.06}$$

*Analisis Stabilitas Geometri:*  
Karena $t = 1.06 > 1.00$, kation $\\ce{Ba^2+}$ sedikit terlalu besar untuk rongga kubus ideal. Akibatnya, pada penurunan temperatur di bawah $120^\\circ\\text{C}$ (suhu Curie), kisi kubus mengalami pergeseran kation $\\ce{Ti^4+}$ dari pusat simetri menuju salah satu sumbu oktahedral, memicu distorsi fasa tetragonal feroelektrik non-sentrosimetris yang menghasilkan momen dipol spontan.

**Langkah 3: Menghitung Densitas Teoritis Kristalografi ($\\rho$)**  
Volume sel satuan kubus ($a = 400.0\\text{ pm} = 4.000 \\times 10^{-8}\\text{ cm}$):
$$V_{\\text{cell}} = a^3 = (4.000 \\times 10^{-8}\\text{ cm})^3 = 6.400 \\times 10^{-23}\\text{ cm}^3$$

Massa satu sel satuan:
$$m_{\\text{cell}} = \\frac{Z \\cdot M}{N_A} = \\frac{1 \\times 233.19\\text{ g/mol}}{6.02214 \\times 10^{23}\\text{ mol}^{-1}} = 3.8722 \\times 10^{-22}\\text{ g}$$

Kerapatan kristalografi:
$$\\rho = \\frac{m_{\\text{cell}}}{V_{\\text{cell}}} = \\frac{3.8722 \\times 10^{-22}\\text{ g}}{6.400 \\times 10^{-23}\\text{ cm}^3} = \\mathbf{6.050\\text{ g/cm}^3}$$

**Langkah 4: Analisis Difraksi Sinar-X (XRD) Bragg & Indeks Miller**  
Rumus jarak antar-bidang $(hkl)$ pada kisi kubus:
$$d_{hkl} = \\frac{a}{\\sqrt{h^2 + k^2 + l^2}}$$

Hukum Bragg untuk orde pertama ($n = 1$):
$$\\lambda = 2 d_{hkl} \\sin\\theta \\implies \\sin\\theta = \\frac{\\lambda}{2 d_{hkl}}$$
Sudut difraksi pada difraktometer dicatat sebagai $2\\theta$.

1. **Untuk Bidang $(100)$:**
   $$d_{100} = \\frac{400.0\\text{ pm}}{\\sqrt{1^2 + 0^2 + 0^2}} = 400.0\\text{ pm}$$
   $$\\sin\\theta = \\frac{154.18}{2 \\times 400.0} = \\frac{154.18}{800.0} = 0.19273$$
   $$\\theta = 11.11^\\circ \\implies 2\\theta = \\mathbf{22.22^\\circ}$$

2. **Untuk Bidang $(110)$:**
   $$d_{110} = \\frac{400.0\\text{ pm}}{\\sqrt{1^2 + 1^2 + 0^2}} = \\frac{400.0}{\\sqrt{2}} = 282.84\\text{ pm}$$
   $$\\sin\\theta = \\frac{154.18}{2 \\times 282.84} = \\frac{154.18}{565.68} = 0.27256$$
   $$\\theta = 15.82^\\circ \\implies 2\\theta = \\mathbf{31.64^\\circ}$$

3. **Untuk Bidang $(111)$:**
   $$d_{111} = \\frac{400.0\\text{ pm}}{\\sqrt{1^2 + 1^2 + 1^2}} = \\frac{400.0}{\\sqrt{3}} = 230.94\\text{ pm}$$
   $$\\sin\\theta = \\frac{154.18}{2 \\times 230.94} = \\frac{154.18}{461.88} = 0.33381$$
   $$\\theta = 19.50^\\circ \\implies 2\\theta = \\mathbf{39.00^\\circ}$$

*Catatan Aturan Seleksi:* Karena $\\ce{BaTiO3}$ memiliki atom-atom berbeda pada sudut, rusuk, dan pusat sel, faktor struktur $F_{hkl}$ tidak lenyap untuk bidang-bidang kubus primitif sehingga ketiga puncak di atas muncul secara terukur pada pola difraktogram XRD.

**Langkah 5: Mekanisme Cacat Titik Non-Stoikiometri & Kenetralan Muatan**  
Ketika $\\ce{BaTiO3}$ dipanaskan dalam atmosfer reduktif $\\ce{H2}$, atom oksigen lepas sebagai molekul uap air, meninggalkan **vakansi oksigen** dalam kisi kristal (notasi Kröger-Vink: $V_{\\ce{O}}^{\\bullet\\bullet}$):
$$\\ce{O_{O}^{\\times} -> V_{O}^{\\bullet\\bullet} + 2 e^- + \\frac{1}{2} O2(g)}$$

Untuk mempertahankan kenetralan muatan listrik makroskopis, dua elektron bebas yang ditinggalkan ($2e^-$) dapat:
1. Terperangkap pada situs kekosongan anion membentuk **Pusat Warna (F-Center)**, atau
2. Mereduksi kation tetangga dari $\\ce{Ti^4+}$ menjadi $\\ce{Ti^3+}$:
   $$\\ce{2 Ti^{4+} + 2 e^- -> 2 Ti^{3+}}$$
Transisi transfer muatan intervalensi $\\ce{Ti^3+ -> Ti^4+}$ (*polaronic conduction*) menyebabkan penyerapan spektrum cahaya tampak merah/kuning, menghasilkan perubahan warna keramik menjadi biru tua kehitaman dan mengubah material dari isolator menjadi semikonduktor tipe-$n$.

**Kesimpulan Evaluator Juri:**  
Keramik $\\ce{BaTiO3}$ memiliki koordinasi $\\ce{Ba}=12$ dan $\\ce{Ti}=6$ dengan faktor toleransi Goldschmidt $t = 1.06$ dan kerapatan teoritis $6.050\\text{ g/cm}^3$. Refleksi difraksi sinar-X $\\ce{Cu-}K\\alpha$ menghasilkan puncak karakteristik pada $2\\theta = 22.22^\\circ, 31.64^\\circ,$ dan $39.00^\\circ$. Reduksi suhu tinggi memicu pembentukan vakansi anion oksigen $V_{\\ce{O}}^{\\bullet\\bullet}$ terkompensasi reduksi $\\ce{Ti^4+} \\to \\ce{Ti^3+}$, memicu konduktivitas listrik polarik dan perubahan warna optis.`,
      keyFormulas: [
        { name: 'Faktor Toleransi Goldschmidt', formula: 't = \\frac{r_A + r_O}{\\sqrt{2}(r_B + r_O)}' },
        { name: 'Hukum Difraksi Bragg Orde Pertama', formula: '\\lambda = 2 d_{hkl} \\sin\\theta' },
        { name: 'Jarak Antar-Bidang Kisi Kubus', formula: 'd_{hkl} = \\frac{a}{\\sqrt{h^2 + k^2 + l^2}}' },
        { name: 'Densitas Teoritis Kisi Perovskite', formula: '\\rho = \\frac{M(\\ce{ABO3})}{N_A \\cdot a^3}' },
      ],
    },
  ],
};

export const OSN_TOPIC_3: MaterialItem = {
  ...RAW_OSN_TOPIC_3,
  prerequisites: RAW_OSN_TOPIC_3.prerequisites.map(p => ({
    ...p,
    checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_03[p.tag] || undefined,
  })),
  core_concepts: RAW_OSN_TOPIC_3.core_concepts.map(c => ({
    ...c,
    checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_03[c.tag] || undefined,
  })),
  worked_examples: RAW_OSN_TOPIC_3.worked_examples.map(w => ({
    ...w,
    checkpointQuizzes: undefined,
  })),
};
