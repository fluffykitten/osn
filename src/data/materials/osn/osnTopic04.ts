/**
 * osnTopic04.ts
 * Topik 4: Termodinamika Kimia & Termokimia
 * Jenjang: OSN / IChO
 * Standar Pedagogis: Tone Opsi A (Arsitektur 5 Lapis, Mental Model Hook, Scaffolded Logic, GitHub Callouts, & Checkpoint Quizzes)
 */

import type { MaterialItem } from '../../materialsData.ts';
import { CHECKPOINTS_TOPIC_OSN_04 } from '../../checkpoints/checkpointBankTopicOsn04.ts';

const RAW_OSN_TOPIC_4: MaterialItem = {
  id: 4,
  topic_number: 4,
  title: 'Termodinamika Kimia & Termokimia',
  slug: 'termodinamika-kimia',
  category: 'Kimia Fisik',
  level: 'OSN',
  readTimeMinutes: 34,
  summary: 'Hukum I Termodinamika (kalor q, kerja w, energi dalam dU), Hukum Hess, Hukum Kirchhoff, Hukum II & III (entropi mutlak S, perumusan mikrokeadaan Boltzmann), energi bebas Gibbs, kespontanan reaksi, persamaan Van \'t Hoff, kerja reversibel vs ireversibel, dan kesetimbangan multi-fasa potensial kimia.',
  allTags: [
    'hukum-pertama-kalorimetri',
    'entalpi-reaksi-hukum-hess',
    'hukum-kedua-ketiga-entropi',
    'energi-bebas-gibbs-kespontanan',
    'energi-gibbs-tetapan-kesetimbangan',
    'persamaan-van-t-hoff',
    'proses-reversibel-ireversibel-kerja-maksimum',
    'potensial-kimia-termodinamika-larutan',
    'soal-disosiasi-n2o4',
    'soal-kirchhoff-amonia',
    'soal-van-t-hoff-caco3',
    'soal-ekspansi-gas-termodinamika',
    'soal-ellingham-metalurgi-kroll',
    'termodinamika',
    'entalpi',
    'entropi',
    'energi-gibbs',
    'kesetimbangan-kp',
    'van-t-hoff',
    'hukum-pertama',
    'kalorimetri',
    'energi-dalam',
    'kerja-pv',
    'entalpi-reaksi',
    'hukum-hess',
    'hukum-kirchhoff',
    'hukum-kedua',
    'hukum-ketiga',
    'mikrokeadaan-boltzmann',
    'energi-bebas-gibbs',
    'kespontanan-reaksi',
    'temperatur-transisi',
    'energi-gibbs-standar',
    'tetapan-kesetimbangan',
    'kuosien-reaksi',
    'plot-van-t-hoff',
    'kesetimbangan-termal',
    'proses-reversibel',
    'proses-ireversibel',
    'kerja-maksimum',
    'ekspansi-isotermal',
    'potensial-kimia',
    'fugositas',
    'aktivitas-larutan',
    'kesetimbangan-fasa',
    'soal-osp',
    'disosiasi-n2o4',
    'kesetimbangan-gas',
    'kapasitas-kalor-cp',
    'sintesis-amonia',
    'dekomposisi-caco3',
    'tekanan-dekomposisi',
    'soal-osn',
    'ekspansi-gas',
    'kerja-reversibel-ireversibel',
    'entropi-semesta',
    'diagram-ellingham',
    'metalurgi-kroll',
    'ekstraksi-titanium',
  ],
  prerequisites: [
    {
      tag: 'hukum-pertama-kalorimetri',
      tags: ['hukum-pertama', 'kalorimetri', 'energi-dalam', 'kerja-pv'],
      title: 'Prasyarat 1: Hukum I Termodinamika, Kalor ($q$), Kerja ($w$), & Kalorimetri',
      summary: 'Konservasi energi, fungsi keadaan vs jalur, kerja ekspansi tekanan-volume, dan kalorimetri bom vs tekanan tetap.',
      content: `Pernahkah Anda merenungkan ke mana perginya energi dari bensin yang meledak di dalam silinder mesin mobil? Sebagian energi mendorong piston menghasilkan gerak mekanik (*kerja*), sementara sebagian lainnya terbuang sebagai panas knalpot (*kalor*). Hukum I Termodinamika adalah hukum kekekalan mutlak: alam semesta adalah rekening bank energi raksasa di mana saldo total tidak pernah bertambah atau berkurang sepeser pun! Kalor ($q$) dan kerja ($w$) hanyalah dua cara berbeda bagi sistem kimia untuk mentransfer energi melintasi batas lingkungannya.

---

### 1. Sistem, Lingkungan, & Fungsi Keadaan:
- **Sistem:** Wilayah spesifik alam semesta yang menjadi fokus kajian termodinamika. Terbagi menjadi:
  - *Sistem Terbuka:* Dapat bertukar materi dan energi dengan lingkungan (misal: reaksi dalam gelas kimia terbuka).
  - *Sistem Tertutup:* Hanya dapat bertukar energi (kalor/kerja), tanpa pertukaran materi (misal: labu tertutup rapat).
  - *Sistem Terisolasi:* Tidak dapat bertukar materi maupun energi dengan lingkungan (misal: termos adiabatik ideal).
- **Fungsi Keadaan (*State Function*):** Besaran termodinamika yang nilainya hanya ditentukan oleh keadaan awal dan keadaan akhir sistem, sepenuhnya independen dari jalur proses yang ditempuh (contoh: energi dalam $U$, entalpi $H$, entropi $S$, energi bebas Gibbs $G$, tekanan $P$, volume $V$, temperatur $T$).
- **Fungsi Jalur (*Path Function*):** Besaran yang nilainya bergantung secara spesifik pada rute atau mekanisme proses yang dilalui (contoh: kalor $q$ dan kerja $w$).

---

### 2. Hukum I Termodinamika (Kekekalan Energi):
Energi total alam semesta bersifat kekal; energi tidak dapat diciptakan maupun dimusnahkan, hanya dapat ditransformasikan dari satu bentuk ke bentuk lainnya:
$$\\Delta U = q + w$$
di mana:
- $\\Delta U$ = perubahan energi dalam internal sistem (Joule).
- $q$ = kalor yang diserap sistem ($q > 0$ jika endotermik/menyerap kalor; $q < 0$ jika eksotermik/melepas kalor).
- $w$ = kerja yang dilakukan pada sistem ($w > 0$ jika lingkungan menekan sistem/kompresi; $w < 0$ jika sistem mendesak lingkungan/ekspansi).

**Kerja Ekspansi Tekanan-Volume ($P-V$):**
$$w = -\\int_{V_1}^{V_2} P_{\\text{ext}} \\, dV$$
Pada tekanan eksternal konstan ($P_{\\text{ext}}$):
$$w = -P_{\\text{ext}} \\Delta V = -P_{\\text{ext}} (V_2 - V_1)$$
*(Faktor Konversi Satuan: $1\\text{ L}\\cdot\\text{atm} = 101.325\\text{ J}$)*.

---

### 3. Kalorimetri: Kapasitas Kalor & Kalorimeter Bom vs Cawan Kopi:
Kalor yang dipindahkan selama perubahan temperatur $\\Delta T$:
$$q = m \\cdot c \\cdot \\Delta T = C \\cdot \\Delta T$$
di mana $c$ adalah kalor jenis ($\\text{J}/(\\text{g}\\cdot\\text{K})$) dan $C$ adalah kapasitas kalor total ($\\text{J/K}$).

1. **Kalorimeter Bom (Volume Tetap, $\\Delta V = 0$):**
   Karena dinding bejana baja kaku tidak memuai ($\\Delta V = 0$), kerja mekanik bernilai nol ($w = 0$). Maka kalor reaksi yang diukur persis sama dengan perubahan energi dalam:
   $$q_v = \\Delta U$$
2. **Kalorimeter Cawan Kopi (Tekanan Tetap, $\\Delta P = 0$):**
   Pada tekanan atmosfer konstan, kalor reaksi didefinisikan sebagai perubahan entalpi:
   $$q_p = \\Delta H$$

**Hubungan Antara $\\Delta H$ dan $\\Delta U$:**
$$\\Delta H = \\Delta U + \\Delta(PV) = \\Delta U + \\Delta n_g R T$$
di mana $\\Delta n_g = \\sum n_g(\\text{produk gas}) - \\sum n_g(\\text{reaktan gas})$ adalah selisih koefisien mol gas.

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Kalorimeter Bom vs Cawan Kopi & Fasa Air
> 1. **Jangan Tertukar $q_v$ dan $q_p$:** Kalorimeter bom kaku mengukur perubahan energi dalam $(\\Delta U = q_v)$, BUKAN entalpi! Untuk memperoleh $\\Delta H$, Anda wajib mengoreksi dengan rumus $\\Delta H = \\Delta U + \\Delta n_g RT$.
> 2. **Waspadai Fasa Air pada $298\\text{ K}$:** Pada pembakaran hidrokarbon di kalorimeter suhu ruang ($25^\\circ\\text{C}$), air yang terbentuk mengembun menjadi **cairan $(\\ce{H2O(l)})$**. Mol cairan air **TIDAK BOLEH dihitung ke dalam $\\Delta n_g$**! Hanya koefisien spesies fasa gas yang diperhitungkan.

> [!TIP]
> ### 💡 Strategi Kuantitatif: Estimasi Selisih $\\Delta H - \\Delta U$
> Pada suhu ruang $298.15\\text{ K}$, suku $RT$ bernilai:
> $$RT = 8.3145\\text{ J}/(\\text{mol}\\cdot\\text{K}) \\times 298.15\\text{ K} \\approx 2.479\\text{ kJ/mol}$$
> Setiap selisih $1\\text{ mol}$ gas ($\Delta n_g = 1$) menyumbang perbedaan entalpi sekitar $2.48\\text{ kJ/mol}$ dibanding energi dalamnya!`,
      keyFormulas: [
        { name: 'Hukum I Termodinamika', formula: '\\Delta U = q + w' },
        { name: 'Kerja Tekanan-Volume', formula: 'w = -P_{\\text{ext}}\\Delta V' },
        { name: 'Hubungan Entalpi dan Energi Dalam', formula: '\\Delta H = \\Delta U + \\Delta n_g RT' },
      ],
    },
    {
      tag: 'entalpi-reaksi-hukum-hess',
      tags: ['entalpi-reaksi', 'hukum-hess', 'hukum-kirchhoff'],
      title: 'Prasyarat 2: Entalpi Reaksi Standar, Hukum Hess, & Hukum Kirchhoff',
      summary: 'Aditivitas entalpi pembentukan, energi ikatan rata-rata, dan ketergantungan entalpi reaksi terhadap temperatur.',
      content: `Bayangkan Anda mendaki gunung dari pos pendakian di lembah menuju puncak. Baik Anda memilih jalur setapak curam langsung atau jalur memutar yang landai, perbedaan elevasi ketinggian vertikal antara puncak dan lembah tetap persis sama! Entalpi ($H = U + PV$) adalah fungsi ketinggian energi termal pada tekanan tetap. Germain Henri Hess merumuskan prinsip bahwa perubahan entalpi reaksi kimia murni hanya ditentukan oleh identitas reaktan dan produk akhir, bukan oleh rute jalan berliku yang dilalui molekul. Namun, apa yang terjadi jika temperatur gunung tersebut berubah? Gustav Kirchhoff memberikan lensa diferensial untuk menghitung bagaimana kapasitas kalor mengubah entalpi pada suhu ekstrem.

---

### 1. Entalpi Pembentukan Standar ($\\Delta H_f^\\circ$):
Perubahan entalpi pada pembentukan $1\\text{ mol}$ senyawa murni dari unsur-unsur penyusunnya dalam wujud alotrop paling stabil pada keadaan standar ($1\\text{ bar}$, umumnya pada $298.15\\text{ K}$).
- **Konvensi Nol Baku IUPAC:** $\\Delta H_f^\\circ$ untuk seluruh unsur stabil pada wujud standarnya bernilai tepat nol:
  $$\\Delta H_f^\\circ(\\ce{O2, g}) = \\Delta H_f^\\circ(\\ce{N2, g}) = \\Delta H_f^\\circ(\\ce{C, grafit}) = \\Delta H_f^\\circ(\\ce{Br2, l}) = \\Delta H_f^\\circ(\\ce{Fe, s}) = 0\\text{ kJ/mol}$$

---

### 2. Hukum Hess & Penentuan Entalpi Reaksi:
Karena entalpi merupakan fungsi keadaan murni, perubahan entalpi total reaksi kimia bersifat aditif:
$$\\Delta H^\\circ_{\\text{rxn}} = \\sum n \\Delta H_f^\\circ(\\text{produk}) - \\sum m \\Delta H_f^\\circ(\\text{reaktan})$$

**Estimasi Entalpi Melalui Energi Disosiasi Ikatan Fasa Gas ($D$):**
$$\\Delta H^\\circ_{\\text{rxn}} \\approx \\sum D(\\text{ikatan putus / reaktan}) - \\sum D(\\text{ikatan terbentuk / produk})$$

---

### 3. Ketergantungan Entalpi terhadap Suhu: Hukum Kirchhoff:
Bila suatu reaksi industri berlangsung pada temperatur tinggi ($T_2$) yang berbeda dari suhu acuan laboratorium ($T_1 = 298.15\\text{ K}$):
$$\\left(\\frac{\\partial \\Delta H}{\\partial T}\\right)_P = \\Delta C_p$$

Bentuk integral Gustav Kirchhoff:
$$\\Delta H_{T_2}^\\circ = \\Delta H_{T_1}^\\circ + \\int_{T_1}^{T_2} \\Delta C_p \\, dT$$
di mana selisih kapasitas kalor molar reaksi pada tekanan konstan adalah:
$$\\Delta C_p = \\sum n C_{p,\\text{m}}(\\text{produk}) - \\sum m C_{p,\\text{m}}(\\text{reaktan})$$

Jika kapasitas kalor $C_p$ diasumsikan independen terhadap suhu pada rentang sempit:
$$\\Delta H_{T_2}^\\circ = \\Delta H_{T_1}^\\circ + \\Delta C_p (T_2 - T_1)$$

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Entalpi Pembentukan Alotrop & Energi Ikatan
> 1. **Alotrop Non-Standar Memiliki $\\Delta H_f^\\circ \\ne 0$:** Jangan menganggap semua bentuk unsur bernilai nol! Contoh: karbon intan memiliki $\\Delta H_f^\\circ(\\ce{C, intan}) = +1.90\\text{ kJ/mol}$, gas ozon $\\Delta H_f^\\circ(\\ce{O3, g}) = +142.7\\text{ kJ/mol}$, dan uap bromin $\\Delta H_f^\\circ(\\ce{Br2, g}) = +30.9\\text{ kJ/mol}$!
> 2. **Keterbatasan Energi Ikatan:** Perhitungan entalpi via energi ikatan $(\\sum D_{\\text{putus}} - \\sum D_{\\text{bentuk}})$ **hanya berlaku untuk spesies fasa gas ideal**. Jika ada reaktan atau produk berbentuk cair atau padat, Anda wajib menambahkan entalpi penguapan atau entalpi peleburan ke dalam siklus Hess!

> [!TIP]
> ### 💡 Trik Praktis Kirchhoff: Pengaruh Tanda $\\Delta C_p$
> - Jika $\\Delta C_p > 0$: Reaksi menjadi **semakin endotermik** (atau kurang eksotermik) saat suhu dinaikkan.
> - Jika $\\Delta C_p < 0$: Reaksi menjadi **semakin eksotermik** (atau kurang endotermik) saat suhu dinaikkan.
> Selalu cek satuan: $\\Delta H^\circ$ umumnya dalam $\\text{kJ/mol}$, sedangkan $\\Delta C_p$ dalam $\\text{J}/(\\text{mol}\\cdot\\text{K})$. Jangan lupa mengalikan $10^{-3}$ saat menjumlahkan!`,
      keyFormulas: [
        { name: 'Hukum Hess', formula: '\\Delta H^\\circ_{\\text{rxn}} = \\sum n \\Delta H_f^\\circ(\\text{prod}) - \\sum m \\Delta H_f^\\circ(\\text{reak})' },
        { name: 'Estimasi Energi Ikatan', formula: '\\Delta H^\\circ \\approx \\sum D_{\\text{putus}} - \\sum D_{\\text{bentuk}}' },
        { name: 'Hukum Kirchhoff', formula: '\\Delta H_{T_2}^\\circ = \\Delta H_{T_1}^\\circ + \\Delta C_p (T_2 - T_1)' },
      ],
    },
    {
      tag: 'hukum-kedua-ketiga-entropi',
      tags: ['hukum-kedua', 'hukum-ketiga', 'entropi', 'mikrokeadaan-boltzmann'],
      title: 'Prasyarat 3: Hukum II & III Termodinamika, Entropi Mutlak, & Mikrokeadaan',
      summary: 'Arah kespontanan alami, konsep ketidakteraturan molekuler Boltzmann, dan entropi mutlak standar.',
      content: `Mengapa setetes tinta yang jatuh ke dalam air menyebar secara spontan hingga merata, namun molekul tinta tersebut tidak pernah secara spontan berkumpul kembali menjadi setetes tinta murni? Mengapa es mencair di atas meja hangat, tetapi air hangat tidak pernah secara spontan membeku sambil membuang panas ke udara? Jawaban dari seluruh misteri arah panah waktu (*arrow of time*) ini adalah **Entropi ($S$)**! Alam semesta memiliki kecenderungan statistik mutlak untuk menyebarkan energi termal ke sebanyak mungkin tingkat energi mikroskopis yang tersedia.

---

### 1. Definisi Termodinamika Makroskopis Entropi:
Untuk suatu proses reversibel pada temperatur mutlak $T$:
$$dS = \\frac{dq_{\\text{rev}}}{T}$$
Untuk perubahan fasa isotermal reversibel (misal peleburan atau penguapan):
$$\\Delta S_{\\text{trans}} = \\frac{\\Delta H_{\\text{trans}}}{T_{\\text{trans}}}$$

---

### 2. Formulasi Statistik Ludwig Boltzmann:
Secara mikroskopis kuantum, entropi mencerminkan kuantitas konfigurasi mikrokeadaan (*microstates*, $\\Omega$) yang dapat diakses oleh partikel:
$$S = k_B \\ln \\Omega$$
di mana $k_B = 1.38065 \\times 10^{-23}\\text{ J/K}$ adalah tetapan Boltzmann. Semakin banyak posisi spasial dan keadaan kuantum yang dapat ditempati partikel (misal saat es mencair atau gas memuai ke volume lebih besar), nilai $\\Omega$ melonjak drastis, meningkatkan entropi secara permanen.

---

### 3. Hukum II & Hukum III Termodinamika:
- **Hukum II Termodinamika:** Pada setiap proses yang berlangsung secara spontan di alam semesta, entropi total alam semesta selalu meningkat:
  $$\\Delta S_{\\text{semesta}} = \\Delta S_{\\text{sistem}} + \\Delta S_{\\text{lingkungan}} > 0$$
  Entropi lingkungan dipengaruhi oleh kalor yang dipindahkan oleh sistem ke tandon termal:
  $$\\Delta S_{\\text{lingkungan}} = -\\frac{\\Delta H_{\\text{sistem}}}{T}$$
- **Hukum III Termodinamika:** Entropi suatu kristal zat murni yang teratur sempurna pada temperatur nol mutlak ($0\\text{ K} = -273.15^\\circ\\text{C}$) bernilai tepat nol ($S = 0$, karena hanya ada 1 konfigurasi unik $\\Omega = 1 \\implies \\ln 1 = 0$).

Hal ini memungkinkan penentuan **Entropi Mutlak Standar ($S^\\circ$)** dari integrasi kapasitas kalor dari $0\\text{ K}$:
$$S_T^\\circ = \\int_0^T \\frac{C_p}{T}\\, dT + \\sum \\frac{\\Delta H_{\\text{trans}}}{T_{\\text{trans}}}$$

Perubahan entropi reaksi standar:
$$\\Delta S^\\circ_{\\text{rxn}} = \\sum n S^\\circ(\\text{produk}) - \\sum m S^\\circ(\\text{reaktan})$$

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Entropi Sistem Menurun Bukan Berarti Tidak Spontan
> Kriteria kespontanan universal menurut Hukum II adalah **$\\Delta S_{\\text{semesta}} > 0$**, BUKAN $\\Delta S_{\\text{sistem}} > 0$! Suatu proses di mana entropi sistem berkurang ($\Delta S_{\\text{sistem}} < 0$, seperti pembekuan air atau kondensasi uap) **tetap dapat berlangsung spontan**, asalkan proses tersebut melepaskan kalor eksotermik yang sangat besar sehingga kenaikan entropi lingkungan ($\Delta S_{\\text{lingk}} = -q/T > 0$) mengimbangi dan membuat total $\\Delta S_{\\text{semesta}} > 0$.

> [!TIP]
> ### 💡 Entropi Residu Zat Amorf & Molekul Heteroatomik
> Hukum III Termodinamika hanya berlaku untuk kristal zat murni sempurna. Zat amorf (kaca) atau molekul dengan momen dipol kecil yang mengkristal dengan orientasi kepala-ekor acak (seperti $\\ce{CO}$ atau $\\ce{N2O}$) memiliki entropi residu pada $0\\text{ K}$:
> $$S_0 = R \\ln(2) \\approx 5.76\\text{ J}/(\\text{mol}\\cdot\\text{K})$$`,
      keyFormulas: [
        { name: 'Definisi Entropi Reversibel', formula: '\\Delta S = \\frac{q_{\\text{rev}}}{T}' },
        { name: 'Entropi Boltzmann', formula: 'S = k_B \\ln \\Omega' },
        { name: 'Hukum II Termodinamika', formula: '\\Delta S_{\\text{semesta}} = \\Delta S_{\\text{sistem}} + \\Delta S_{\\text{lingkungan}} \\ge 0' },
        { name: 'Entropi Reaksi Standar', formula: '\\Delta S^\\circ_{\\text{rxn}} = \\sum n S^\\circ(\\text{prod}) - \\sum m S^\\circ(\\text{reak})' },
      ],
    },
  ],
  core_concepts: [
    {
      tag: 'energi-bebas-gibbs-kespontanan',
      tags: ['energi-bebas-gibbs', 'kespontanan-reaksi', 'temperatur-transisi'],
      title: 'Konsep Inti 1: Energi Bebas Gibbs, Kespontanan Reaksi, & Temperatur Transisi',
      summary: 'Kriteria kespontanan termodinamika pada T dan P tetap, analisis tabel 4 skenario tanda dH dan dS, serta crossover temperature.',
      content: `Menghitung perubahan entropi seluruh alam semesta ($\Delta S_{\\text{semesta}}$) setiap kali ingin mengetahui apakah suatu reaksi kimia akan berjalan spontan di laboratorium tentu sangat tidak praktis. Josiah Willard Gibbs memperkenalkan sebuah fungsi termodinamika yang sangat revolusioner: **Energi Bebas Gibbs ($G$)**! Fungsi potensial ini mengalihkan seluruh pengamatan ke dalam variabel keadaan sistem internal saja pada kondisi temperatur ($T$) dan tekanan ($P$) konstan yang lazim dijumpai di muka bumi.

---

### 1. Penurunan Fungsi Energi Bebas Gibbs:
Dari kriteria kespontanan Hukum II Termodinamika:
$$\\Delta S_{\\text{semesta}} = \\Delta S_{\\text{sistem}} + \\Delta S_{\\text{lingkungan}} = \\Delta S_{\\text{sistem}} - \\frac{\\Delta H_{\\text{sistem}}}{T} > 0$$

Kalikan seluruh ruas persamaan dengan $-T$ (ingat bahwa $T > 0\\text{ K}$):
$$-T \\Delta S_{\\text{semesta}} = \\Delta H_{\\text{sistem}} - T \\Delta S_{\\text{sistem}} < 0$$

Maka didefinisikan **Fungsi Energi Bebas Gibbs ($G$)**:
$$G = H - TS \\implies \\Delta G = \\Delta H - T\\Delta S$$

**Kriteria Kespontanan Termodinamika (pada $T$ dan $P$ tetap):**
- $\\Delta G < 0$: Reaksi berlangsung **spontan** ke arah produk (proses eksergonik).
- $\\Delta G = 0$: Sistem berada dalam keadaan **kesetimbangan dinamis** sejati.
- $\\Delta G > 0$: Reaksi **tidak spontan** ke arah maju, namun berlangsung spontan ke arah sebaliknya (proses endergonik).

---

### 2. Empat Skenario Termodinamika Tanda $\\Delta H$ dan $\\Delta S$:

| Skenario | Tanda $\\Delta H$ | Tanda $\\Delta S$ | Sifat Kespontanan $\\Delta G = \\Delta H - T\\Delta S$ | Ketergantungan terhadap Temperatur ($T$) | Contoh Nyata Reaksi |
| :--- | :---: | :---: | :--- | :--- | :--- |
| **Kasus 1** | **$-$** (Eksotermik) | **$+$** (Entropi naik) | **Selalu $\\Delta G < 0$ (Spontan)** | Spontan pada seluruh temperatur mutlak | Pembakaran hidrokarbon, dekomposisi $\\ce{2H2O2 -> 2H2O + O2}$ |
| **Kasus 2** | **$+$** (Endotermik) | **$-$** (Entropi turun) | **Selalu $\\Delta G > 0$ (Non-spontan)** | Tidak pernah spontan pada temperatur berapapun | Pembentukan ozon: $\\ce{3O2(g) -> 2O3(g)}$ |
| **Kasus 3** | **$+$** (Endotermik) | **$+$** (Entropi naik) | **Spontan pada Suhu Tinggi** ($T > T^*$) | *Driven by Entropy* (Didorong oleh suku $-T\\Delta S$) | Peleburan es, kalsinasi kapur $\\ce{CaCO3 -> CaO + CO2}$ |
| **Kasus 4** | **$-$** (Eksotermik) | **$-$** (Entropi turun) | **Spontan pada Suhu Rendah** ($T < T^*$) | *Driven by Enthalpy* (Didorong oleh suku $\\Delta H$) | Pembekuan air, sintesis amonia $\\ce{N2 + 3H2 -> 2NH3}$ |

---

### 3. Temperatur Ambang Batas Transisi (*Crossover Temperature*, $T^*$):
Pada Kasus 3 dan Kasus 4, terdapat satu temperatur kritis di mana sistem beralih dari keadaan non-spontan menjadi spontan (kondisi $\\Delta G^\\circ = 0$):
$$\\Delta H^\\circ - T^* \\Delta S^\\circ = 0 \\implies T^* = \\frac{\\Delta H^\\circ}{\\Delta S^\\circ}$$
- Untuk Kasus 3 ($\Delta H > 0, \Delta S > 0$): Reaksi menjadi spontan jika $T > T^*$.
- Untuk Kasus 4 ($\Delta H < 0, \Delta S < 0$): Reaksi menjadi spontan jika $T < T^*$.

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Satuan Entalpi vs Entropi saat Menghitung $T^*$
> Perhatikan dengan sangat teliti: $\\Delta H^\circ$ hampir selalu diberikan dalam satuan **kilojoule per mol ($\\text{kJ/mol}$)**, sedangkan $\\Delta S^\circ$ selalu diberikan dalam satuan **joule per mol kelvin ($\\text{J}/(\\text{mol}\\cdot\\text{K})$)**!
> Jika Anda langsung membagi tanpa mengubah $\\Delta H^\circ$ ke Joule ($1\\text{ kJ} = 1000\\text{ J}$), hasil temperatur transisi Anda akan salah dengan kelipatan 1000 kali!

> [!TIP]
> ### 💡 Makna Fisis $\\Delta G$ sebagai Kerja Non-$PV$ Maksimum
> Pada $T$ dan $P$ tetap, besarnya nilai $-\\Delta G$ menyatakan kerja non-ekspansi maksimum yang dapat diekstrak dari reaksi kimia:
> $$w_{\\text{non-}PV,\\text{max}} = -\\Delta G$$
> Inilah dasar termodinamika perancangan baterai lithium-ion dan sel bahan bakar hidrogen: efisiensi konversi energi kimia menjadi listrik dibatasi oleh nilai $\\Delta G$, bukan $\\Delta H$!`,
      keyFormulas: [
        { name: 'Persamaan Gibbs-Helmholtz', formula: '\\Delta G = \\Delta H - T\\Delta S' },
        { name: 'Temperatur Ambang Batas Spontanitas', formula: 'T^* = \\frac{\\Delta H^\\circ}{\\Delta S^\\circ}' },
        { name: 'Kerja Non-PV Maksimum', formula: 'w_{\\text{non-}PV,\\text{max}} = -\\Delta G' },
      ],
    },
    {
      tag: 'energi-gibbs-tetapan-kesetimbangan',
      tags: ['energi-gibbs-standar', 'tetapan-kesetimbangan', 'kuosien-reaksi'],
      title: 'Konsep Inti 2: Hubungan Termodinamika Energi Bebas Gibbs dengan Tetapan Kesetimbangan ($K$)',
      summary: 'Integrasi kuotien reaksi Q, penurunan persamaan fundamental dG° = -RT ln K, dan prediksi arah pergeseran campuran.',
      content: `Bagaimana data kalorimetri yang diukur dari pembakaran zat di laboratorium dapat meramalkan posisi kesetimbangan suatu reaksi kimia? Energi bebas Gibbs adalah jembatan matematis agung yang menghubungkan dunia termokimia murni dengan tetapan kesetimbangan kimia makroskopis ($K$)! Melalui kuotien reaksi ($Q$), kita dapat menentukan apakah suatu campuran reaksi sedang bergerak maju ke arah produk, mundur ke arah reaktan, atau telah diam dalam kedamaian kesetimbangan dinamis.

---

### 1. Ketergantungan Energi Bebas terhadap Komposisi Campuran Reaksi:
Untuk suatu gas ideal atau zat terlarut pada kondisi non-standar (tekanan atau konsentrasi sembarang):
$$G_i = G_i^\\circ + RT \\ln a_i$$
di mana $a_i$ adalah aktivitas termodinamika ($a_i = \\frac{P_i}{P^\\circ}$ untuk gas dengan $P^\\circ = 1\\text{ bar}$, dan $a_i = \\frac{[C_i]}{C^\\circ}$ untuk larutan dengan $C^\\circ = 1\\text{ M}$).

Untuk reaksi kimia umum:
$$a\\ce{A} + b\\ce{B} <=> c\\ce{C} + d\\ce{D}$$
Perubahan energi bebas Gibbs aktual pada komposisi sembarang dinyatakan oleh **Kuotien Reaksi ($Q$)**:
$$\\Delta G = \\Delta G^\\circ + RT \\ln Q$$
di mana:
$$Q = \\frac{(a_{\\ce{C}})^c (a_{\\ce{D}})^d}{(a_{\\ce{A}})^a (a_{\\ce{B}})^b}$$

---

### 2. Penurunan Persamaan Kesetimbangan Termodinamika:
Ketika reaksi mencapai kesetimbangan kimia sejati:
1. Perubahan energi bebas aktual sistem bernilai nol: $\\Delta G = 0$.
2. Komposisi campuran tidak lagi berubah seiring waktu, sehingga nilai kuotien reaksi tepat sama dengan tetapan kesetimbangan termodinamika: $Q = K$.

Substitusikan kondisi kesetimbangan ini:
$$0 = \\Delta G^\\circ + RT \\ln K \\implies \\Delta G^\\circ = -RT \\ln K$$

Bentuk eksponensial eksplisit untuk tetapan kesetimbangan:
$$K = \\exp\\left( -\\frac{\\Delta G^\\circ}{RT} \\right) = e^{-\\Delta G^\\circ / RT}$$

**Kriteria Arah Kespontanan Berdasarkan Perbandingan $Q$ dan $K$:**
- Jika $Q < K \\implies \\Delta G < 0$: Reaksi spontan bergeser ke arah kanan (pembentukan produk).
- Jika $Q = K \\implies \\Delta G = 0$: Sistem berada dalam kesetimbangan dinamis sejati.
- Jika $Q > K \\implies \\Delta G > 0$: Reaksi spontan bergeser ke arah kiri (reaktan terbentuk kembali).

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Perbedaan Mutlak $\\Delta G$ vs $\\Delta G^\\circ$
> - **$\\Delta G$ (Perubahan Energi Bebas Aktual):** Bergantung pada komposisi campuran setiap saat via $\\Delta G = \\Delta G^\circ + RT \\ln Q$. **Saat kesetimbangan tercapai, $\\Delta G = 0$!**
> - **$\\Delta G^\\circ$ (Perubahan Energi Bebas Standar):** Nilai tetap pada kondisi standar ($1\\text{ bar}, 1\\text{ M}$). **Pada kesetimbangan, $\\Delta G^\\circ$ TIDAK PERNAH bernilai nol** (kecuali secara kebetulan $K = 1$). Menyamakan $\\Delta G$ dan $\\Delta G^\circ$ adalah kekeliruan nomor satu di soal-soal teori OSN!

> [!TIP]
> ### 💡 Satuan Joule Wajib pada $\\Delta G^\\circ = -RT \\ln K$
> Tetapan gas universal bernilai $R = 8.31446\\text{ J}/(\\text{mol}\\cdot\\text{K})$. Oleh karena itu, sebelum menghitung $\\ln K = -\\frac{\\Delta G^\\circ}{RT}$, nilai $\\Delta G^\\circ$ **wajib dikonversi ke satuan Joule per mol ($\\text{J/mol}$)**! Jika menggunakan $\\text{kJ/mol}$, perhitungan $K$ akan menghasilkan angka yang salah secara masif.`,
      keyFormulas: [
        { name: 'Energi Gibbs Kondisi Non-Standar', formula: '\\Delta G = \\Delta G^\\circ + RT \\ln Q' },
        { name: 'Persamaan Fundamental Kesetimbangan', formula: '\\Delta G^\\circ = -RT \\ln K' },
        { name: 'Tetapan Kesetimbangan Termodinamika', formula: 'K = e^{-\\Delta G^\\circ / RT}' },
      ],
    },
    {
      tag: 'persamaan-van-t-hoff',
      tags: ['persamaan-van-t-hoff', 'plot-van-t-hoff', 'kesetimbangan-termal'],
      title: 'Konsep Inti 3: Persamaan Van \'t Hoff & Ketergantungan Suhu terhadap Tetapan Kesetimbangan',
      summary: 'Penurunan kalkulus Van \'t Hoff, kurva linier ln K vs 1/T, dan penentuan kalor reaksi serta perubahan entropi eksperimental.',
      content: `Bagaimana tetapan kesetimbangan kimia ($K$) merespons kenaikan temperatur? Kita semua tahu Asas Le Chatelier secara kualitatif: "reaksi endotermik bergeser ke produk saat dipanaskan". Namun, seberapa banyak produk baru yang terbentuk secara numerik? Jacobus Henricus van 't Hoff membuktikan bahwa respons temperatur terhadap kesetimbangan diatur secara eksak oleh kalkulus diferensial entalpi reaksi standar!

---

### 1. Penurunan Matematis Persamaan Van 't Hoff:
Mulai dari hubungan fundamental:
$$\\ln K = -\\frac{\\Delta G^\\circ}{RT} = -\\frac{\\Delta H^\\circ - T\\Delta S^\\circ}{RT} = -\\frac{\\Delta H^\\circ}{RT} + \\frac{\\Delta S^\\circ}{R}$$

Diferensialkan persamaan terhadap temperatur $T$ pada tekanan tetap:
$$\\frac{d(\\ln K)}{dT} = \\frac{d}{dT}\\left(-\\frac{\\Delta H^\\circ}{RT} + \\frac{\\Delta S^\\circ}{R}\\right)$$

Dengan menerapkan hubungan termodinamika Gibbs-Helmholtz, diperoleh **Bentuk Diferensial Persamaan Van 't Hoff**:
$$\\frac{d(\\ln K)}{dT} = \\frac{\\Delta H^\\circ}{R T^2}$$

Ubah variabel diferensial ke bentuk invers temperatur ($d(1/T) = -\\frac{1}{T^2} dT$):
$$\\frac{d(\\ln K)}{d(1/T)} = -\\frac{\\Delta H^\\circ}{R}$$

---

### 2. Bentuk Integral Dua Titik Persamaan Van 't Hoff:
Dengan mengasumsikan entalpi reaksi $\\Delta H^\\circ$ dan entropi reaksi $\\Delta S^\\circ$ relatif konstan sepanjang rentang temperatur dari $T_1$ ke $T_2$:
$$\\ln\\left(\\frac{K_2}{K_1}\\right) = -\\frac{\\Delta H^\\circ}{R} \\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right) = \\frac{\\Delta H^\\circ}{R} \\left(\\frac{T_2 - T_1}{T_1 \\cdot T_2}\\right)$$

---

### 3. Analisis Grafik Plot Linier Van 't Hoff:
Grafik $\\ln K$ pada sumbu vertikal terhadap $\\frac{1}{T}$ pada sumbu horizontal menghasilkan garis lurus ($y = m x + c$):
$$\\ln K = \\left(-\\frac{\\Delta H^\\circ}{R}\\right) \\frac{1}{T} + \\left(\\frac{\\Delta S^\\circ}{R}\\right)$$
- **Kemiringan Gradien (*Slope*, $m$):**
  $$m = -\\frac{\\Delta H^\\circ}{R} \\implies \\Delta H^\\circ = -m \\cdot R$$
- **Titik Potong Sumbu Vertikal (*Intercept*, $c$):**
  $$c = \\frac{\\Delta S^\\circ}{R} \\implies \\Delta S^\\circ = c \\cdot R$$

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Tanda Kemiringan Plot Van 't Hoff
> Perhatikan tanda minus pada gradien: $m = -\\frac{\\Delta H^\\circ}{R}$!
> - Untuk **Reaksi Eksotermik ($\\Delta H^\\circ < 0$):** Gradien garis bernilai **POSITIF** ($m > 0$). Saat suhu dinaikkan ($T \\uparrow \\implies 1/T \\downarrow$), nilai $\\ln K$ bergerak turun.
> - Untuk **Reaksi Endotermik ($\\Delta H^\\circ > 0$):** Gradien garis bernilai **NEGATIF** ($m < 0$). Saat suhu dinaikkan, nilai $\\ln K$ bergerak naik.
> Jangan terkecoh mengira reaksi eksoterm memiliki gradien negatif!

> [!TIP]
> ### 💡 Ekstraksi Kalor dan Entropi Tanpa Kalorimeter
> Plot Van 't Hoff adalah metode spektroskopi yang sangat ampuh: cukup dengan mengukur konsentrasi kesetimbangan ($K$) pada dua atau lebih temperatur berbeda, Anda dapat langsung menghitung entalpi reaksi ($\\Delta H^\circ$) dan entropi reaksi ($\\Delta S^\circ$) tanpa memerlukan kalorimeter!`,
      keyFormulas: [
        { name: 'Bentuk Diferensial Van \'t Hoff', formula: '\\frac{d(\\ln K)}{dT} = \\frac{\\Delta H^\\circ}{R T^2}' },
        { name: 'Persamaan Van \'t Hoff Dua Titik', formula: '\\ln\\left(\\frac{K_2}{K_1}\\right) = -\\frac{\\Delta H^\\circ}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)' },
        { name: 'Persamaan Garis Lurus Van \'t Hoff', formula: '\\ln K = -\\frac{\\Delta H^\\circ}{R}\\frac{1}{T} + \\frac{\\Delta S^\\circ}{R}' },
      ],
    },
    {
      tag: 'proses-reversibel-ireversibel-kerja-maksimum',
      tags: ['proses-reversibel', 'proses-ireversibel', 'kerja-maksimum', 'ekspansi-isotermal'],
      title: 'Konsep Inti 4: Termodinamika Gas: Proses Reversibel vs Ireversibel & Kerja Maksimum',
      summary: 'Ekspansi isotermal, isobarik, isokhorik, dan adiabatik gas ideal, komputasi kerja, serta perbandingan entropi semesta.',
      content: `Bayangkan sebuah silinder berisi gas bertekanan tinggi yang ditahan oleh tumpukan pasir halus di atas piston. Jika Anda membuang seluruh butir pasir sekaligus dalam satu sentakan, piston akan melesat liar menghantam pembatas atas, menimbulkan turbulensi dan disipasi energi tak terpulihkan (*ireversibel*). Namun, jika Anda menyingkirkan sebutir pasir demi sebutir pasir secara kuasistatis tak terhingga lambat, tekanan dalam gas selalu seimbang sempurna dengan tekanan luar di setiap infinitesimal langkah (*reversibel*). Teorema kerja maksimum membuktikan bahwa jalur reversibel mengekstrak kerja mekanik terbesar yang dapat dicapai di alam semesta!

---

### 1. Karakteristik 4 Proses Termodinamika Pokok Gas Ideal:

1. **Proses Isotermal ($T = \\text{konstan}, \\Delta T = 0$):**
   Karena energi dalam gas ideal hanya bergantung pada temperatur: $\\Delta U = 0$ dan $\\Delta H = 0$. Maka kalor $q = -w$.
   - *Kerja Ekspansi Reversibel (Sistem Selalu Seimbang dengan $P_{\\text{ext}} = P_{\\text{gas}}$):*
     $$w_{\\text{rev}} = -\\int_{V_1}^{V_2} \\frac{nRT}{V} dV = -nRT \\ln\\left(\\frac{V_2}{V_1}\\right) = -nRT \\ln\\left(\\frac{P_1}{P_2}\\right)$$
   - *Kerja Ekspansi Ireversibel 1 Tahap Melawan Tekanan Luar Konstan ($P_{\\text{ext}}$):*
     $$w_{\\text{irrev}} = -P_{\\text{ext}} (V_2 - V_1)$$
   - **Teorema Kerja Maksimum:** Kerja yang diekstrak pada proses reversibel selalu bernilai maksimum:
     $$|w_{\\text{rev}}| > |w_{\\text{irrev}}|$$

2. **Proses Isobarik ($P = \\text{konstan}, \\Delta P = 0$):**
   - Kerja: $w = -P \\Delta V = -nR\\Delta T$.
   - Kalor: $q_p = \\Delta H = n C_{p,\\text{m}} \\Delta T$.
   - Energi Dalam: $\\Delta U = n C_{v,\\text{m}} \\Delta T$.

3. **Proses Isokhorik ($V = \\text{konstan}, \\Delta V = 0$):**
   - Kerja: $w = 0$.
   - Kalor: $q_v = \\Delta U = n C_{v,\\text{m}} \\Delta T$.
   - Entalpi: $\\Delta H = n C_{p,\\text{m}} \\Delta T$.

4. **Proses Adiabatik ($q = 0$, Sistem Terisolasi Kalor):**
   Dari Hukum I: $\\Delta U = w = n C_{v,\\text{m}} (T_2 - T_1)$.
   - *Hubungan Reversibel Gas Ideal Adiabatik:*
     $$P V^\\gamma = \\text{konstan} \\iff T V^{\\gamma - 1} = \\text{konstan} \\iff T^\\gamma P^{1 - \\gamma} = \\text{konstan}$$
     di mana rasio kapasitas kalor $\\gamma = \\frac{C_p}{C_v} = \\frac{C_v + R}{C_v}$ ($5/3 \\approx 1.67$ untuk gas monoatomik; $7/5 = 1.40$ untuk gas diatomik).

---

### 2. Evaluasi Entropi Semesta pada Proses Reversibel vs Ireversibel:
- **Pada Proses Reversibel:**
  Perubahan entropi sistem dikompensasi secara sempurna oleh perubahan entropi lingkungan:
  $$\\Delta S_{\\text{lingkungan}} = -\\Delta S_{\\text{sistem}} \\implies \\Delta S_{\\text{semesta}} = 0$$
- **Pada Proses Ireversibel (Spontan):**
  Kerja yang hilang terdisipasi sebagai ketidakteraturan tak terpulihkan, menghasilkan entropi semesta positif:
  $$\\Delta S_{\\text{semesta}} = \\Delta S_{\\text{sistem}} + \\Delta S_{\\text{lingkungan}} > 0$$

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Ekspansi Bebas ke Ruang Hampa ($P_{\\text{ext}} = 0$)
> Jika gas ideal berekspansi ke dalam wadah hampa udara (*free expansion / Joule expansion*), tekanan luar penahan adalah nol ($P_{\\text{ext}} = 0$). Akibatnya:
> $$w = -P_{\\text{ext}}\\Delta V = 0\\text{ J}$$
> Gas sama sekali **tidak melakukan kerja**, meskipun volumenya bertambah drastis! Karena sistem terisolasi ($q = 0$), maka $\\Delta U = 0$ dan temperatur gas ideal tetap konstan ($\Delta T = 0$).

> [!TIP]
> ### 💡 Hubungan Mayer untuk Kapasitas Kalor Molar
> Untuk gas ideal apa pun, kapasitas kalor molar pada tekanan tetap selalu lebih besar dibanding kapasitas kalor pada volume tetap sebesar tetapan gas universal $R$:
> $$C_{p,\\text{m}} - C_{v,\\text{m}} = R$$
> Hal ini terjadi karena pada tekanan tetap, sebagian kalor yang masuk harus digunakan untuk melakukan kerja ekspansi $P\\Delta V$ terhadap atmosfer luar!`,
      keyFormulas: [
        { name: 'Kerja Isotermal Reversibel', formula: 'w_{\\text{rev}} = -nRT \\ln\\left(\\frac{V_2}{V_1}\\right)' },
        { name: 'Relasi Kapasitas Kalor Mayer', formula: 'C_{p,\\text{m}} - C_{v,\\text{m}} = R' },
        { name: 'Persamaan Gas Adiabatik Reversibel', formula: 'P V^\\gamma = \\text{konstan}' },
      ],
    },
    {
      tag: 'potensial-kimia-termodinamika-larutan',
      tags: ['potensial-kimia', 'fugositas', 'aktivitas-larutan', 'kesetimbangan-fasa'],
      title: 'Konsep Inti 5: Potensial Kimia ($\\mu$), Fugositas, & Kesetimbangan Multi-Fasa',
      summary: 'Besaran molar parsial, arah aliran partikel spontan antar-fasa, aktivitas larutan, dan kestabilan fasa.',
      content: `Sama halnya dengan air yang selalu mengalir dari tempat tinggi ke tempat rendah akibat perbedaan potensial gravitasi, atau arus listrik yang mengalir dari potensial tinggi ke potensial rendah, apa yang menggerakkan partikel-partikel materi untuk berpindah antar-fasa atau bereaksi membentuk ikatan baru? Jawabannya adalah **Potensial Kimia ($\\mu$)**! Potensial kimia adalah energi bebas Gibbs per mol partikel, besaran penggerak termodinamika tertinggi yang mengatur seluruh kesetimbangan fasa dan reaksi kimia di alam semesta.

---

### 1. Definisi Matematis Potensial Kimia:
Potensial kimia komponen ke-$i$ dalam suatu campuran didefinisikan sebagai energi bebas Gibbs molar parsial:
$$\\mu_i = \\left(\\frac{\\partial G}{\\partial n_i}\\right)_{T, P, n_{j \\ne i}}$$
Energi bebas Gibbs total sistem campuran multi-komponen:
$$G = \\sum_{i=1}^k n_i \\mu_i$$
Persamaan fundamental termodinamika untuk sistem berkomposisi terbuka:
$$dG = -S dT + V dP + \\sum_{i=1}^k \\mu_i \\, dn_i$$

---

### 2. Kriteria Kesetimbangan Fasa & Arah Aliran Materi Spontan:
Bayangkan suatu zat murni $A$ yang terdistribusi di antara dua fasa, Fasa $\\alpha$ dan Fasa $\\beta$ (misal cairan dan uap):
$$dG = (\\mu_A^\\beta - \\mu_A^\\alpha) dn_A$$
- Jika $\\mu_A^\\alpha > \\mu_A^\\beta$: Agar $dG < 0$ (spontan), $dn_A$ harus bernilai positif. Materi secara spontan berpindah dari fasa $\\alpha$ menuju fasa $\\beta$.
- **Hukum Aliran Termodinamika:** Materi selalu berpindah secara spontan dari daerah dengan **potensial kimia tinggi menuju potensial kimia rendah**.
- **Kondisi Kesetimbangan Fasa Sejati:**
  $$\\mu_i^\\alpha = \\mu_i^\\beta = \\mu_i^\\gamma = \\dots$$
  Ketiadaan selisih potensial kimia menandakan tercapainya kesetimbangan fasa termodinamika makroskopis.

---

### 3. Hubungan Potensial Kimia dengan Tekanan Parsial & Aktivitas:
1. **Untuk Gas Ideal Murni:**
   $$\\mu_i = \\mu_i^\\circ + RT \\ln\\left(\\frac{P_i}{P^\\circ}\\right)$$
2. **Untuk Larutan Nyata & Larutan Ideal:**
   $$\\mu_i = \\mu_i^\\circ + RT \\ln a_i$$
   di mana $a_i = \\gamma_i X_i$ ($\\gamma_i$ adalah koefisien aktivitas dan $X_i$ adalah fraksi mol). Untuk larutan ideal yang mematuhi Hukum Raoult, $\\gamma_i = 1 \\implies a_i = X_i$.

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Kesetimbangan Fasa Memerlukan $\\mu_A = \\mu_B$
> Pada titik didih normal air ($100^\\circ\\text{C}, 1\\text{ atm}$), apakah uap air memiliki energi bebas molar yang lebih besar dibanding air cair? **TIDAK!** Karena berada dalam kesetimbangan dinamis, potensial kimia keduanya bernilai persis sama:
> $$\\mu_{\\ce{H2O(l)}} = \\mu_{\\ce{H2O(g)}}$$
> Jangan pernah mengasumsikan fasa gas memiliki potensial kimia lebih tinggi saat sistem berada dalam kesetimbangan sejati!

> [!TIP]
> ### 💡 Limit Larutan Encer Tak Hingga
> Ketika konsentrasi zat terlarut mendekati nol ($X_i \\to 0$), interaksi antar-solut menjadi dapat diabaikan dibanding solut-solven. Koefisien aktivitas selalu mendekati satu:
> $$\\lim_{X_i \\to 0} \\gamma_i = 1 \\implies a_i = X_i$$
> Inilah mengapa larutan sangat encer selalu mematuhi hukum-hukum ideal termodinamika secara sempurna!`,
      keyFormulas: [
        { name: 'Definisi Potensial Kimia', formula: '\\mu_i = \\left(\\frac{\\partial G}{\\partial n_i}\\right)_{T, P, n_{j \\ne i}}' },
        { name: 'Kriteria Kesetimbangan Fasa', formula: '\\mu_i^\\alpha = \\mu_i^\\beta' },
        { name: 'Potensial Kimia Aktivitas', formula: '\\mu_i = \\mu_i^\\circ + RT \\ln a_i' },
      ],
    },
  ],
  worked_examples: [
    {
      tag: 'soal-disosiasi-n2o4',
      tags: ['soal-osp', 'disosiasi-n2o4', 'energi-gibbs', 'kesetimbangan-gas'],
      title: 'Contoh Soal OSP 1: Disosiasi Termal Gas Dinitrogen Tetroksida & Termodinamika Kesetimbangan Kimia',
      summary: 'Perhitungan kuantitatif perubahan entalpi standar, entropi standar, energi bebas Gibbs standar, tetapan kesetimbangan Kp, dan penentuan temperatur transisi kespontanan.',
      content: `### Masalah Soal:
Dinitrogen tetroksida ($\\ce{N2O4}$) merupakan gas tak berwarna yang mengalami disosiasi endotermik menghasilkan gas nitrogen dioksida ($\\ce{NO2}$) berwarna cokelat kemerahan sesuai reaksi kesetimbangan fasa gas:
$$\\ce{N2O4(g) <=> 2 NO2(g)}$$

Tabel termodinamika standar menyajikan data termokimia pada temperatur $298.15\\text{ K}$ ($25.0^\\circ\\text{C}$) sebagai berikut:
- $\\Delta H_f^\\circ(\\ce{N2O4(g)}) = +9.16\\text{ kJ/mol}$, $S^\\circ(\\ce{N2O4(g)}) = 304.4\\text{ J}/(\\text{mol}\\cdot\\text{K})$
- $\\Delta H_f^\\circ(\\ce{NO2(g)}) = +33.18\\text{ kJ/mol}$, $S^\\circ(\\ce{NO2(g)}) = 240.1\\text{ J}/(\\text{mol}\\cdot\\text{K})$
*(Tetapan gas universal $R = 8.3145\\text{ J}/(\\text{mol}\\cdot\\text{K})$)*.

**Pertanyaan:**
1. Hitung perubahan entalpi reaksi standar ($\\Delta H^\\circ_{\\text{rxn}}$) dan perubahan entropi reaksi standar ($\\Delta S^\\circ_{\\text{rxn}}$) pada $298.15\\text{ K}$!
2. Tentukan nilai perubahan energi bebas Gibbs standar ($\\Delta G^\\circ_{\\text{rxn}}$) pada $298.15\\text{ K}$! Apakah reaksi disosiasi ini berlangsung spontan pada keadaan standar suhu ruang?
3. Hitung nilai tetapan kesetimbangan gas ($K_p$) pada temperatur $298.15\\text{ K}$!
4. Tentukan temperatur ambang batas kespontanan (*crossover temperature*, $T^*$) di mana reaksi disosiasi $\\ce{N2O4}$ mulai beralih menjadi spontan ($\\Delta G^\\circ < 0$) pada tekanan standar $1\\text{ bar}$!

---

### Pembahasan & Langkah Kunci:

**Langkah 1: Menghitung Entalpi Reaksi Standar ($\\Delta H^\\circ_{\\text{rxn}}$)**  
Gunakan Hukum Hess berdasarkan entalpi pembentukan standar ($\\Delta H_f^\\circ$):
$$\\Delta H^\\circ_{\\text{rxn}} = \\sum n \\Delta H_f^\\circ(\\text{produk}) - \\sum m \\Delta H_f^\\circ(\\text{reaktan})$$
$$\\Delta H^\\circ_{\\text{rxn}} = 2 \\times \\Delta H_f^\\circ(\\ce{NO2}) - 1 \\times \\Delta H_f^\\circ(\\ce{N2O4})$$
$$\\Delta H^\\circ_{\\text{rxn}} = 2(33.18\\text{ kJ/mol}) - 9.16\\text{ kJ/mol} = 66.36 - 9.16 = +57.20\\text{ kJ/mol} = \\mathbf{+57200\\text{ J/mol}}$$
*(Nilai positif menandakan bahwa pemutusan ikatan $\\ce{N-N}$ bersifat endotermik)*.

**Langkah 2: Menghitung Entropi Reaksi Standar ($\\Delta S^\\circ_{\\text{rxn}}$)**  
Gunakan data entropi mutlak standar ($S^\\circ$):
$$\\Delta S^\\circ_{\\text{rxn}} = \\sum n S^\\circ(\\text{produk}) - \\sum m S^\\circ(\\text{reaktan})$$
$$\\Delta S^\\circ_{\\text{rxn}} = 2 \\times S^\\circ(\\ce{NO2}) - 1 \\times S^\\circ(\\ce{N2O4})$$
$$\\Delta S^\\circ_{\\text{rxn}} = 2(240.1\\text{ J}/(\\text{mol}\\cdot\\text{K})) - 304.4\\text{ J}/(\\text{mol}\\cdot\\text{K}) = 480.2 - 304.4 = \\mathbf{+175.8\\text{ J}/(\\text{mol}\\cdot\\text{K})}$$
*(Entropi sistem meningkat signifikan karena $1\\text{ mol}$ gas terdisosiasi menghasilkan $2\\text{ mol}$ partikel gas yang lebih bebas bergerak)*.

**Langkah 3: Menghitung Energi Bebas Gibbs Standar ($\\Delta G^\\circ_{\\text{rxn}}$) & Evaluasi Kespontanan**  
Gunakan persamaan fundamental Gibbs-Helmholtz pada $T = 298.15\\text{ K}$:
$$\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$$
$$\\Delta G^\\circ = 57200\\text{ J/mol} - (298.15\\text{ K} \\times 175.8\\text{ J}/(\\text{mol}\\cdot\\text{K}))$$
$$\\Delta G^\\circ = 57200\\text{ J/mol} - 52414.77\\text{ J/mol} = +4785.23\\text{ J/mol} = \\mathbf{+4.79\\text{ kJ/mol}}$$

*Analisis Kespontanan:*  
Karena $\\Delta G^\\circ > 0$ ($+4.79\\text{ kJ/mol}$), reaksi disosiasi $\\ce{N2O4}$ pada keadaan standar ($P = 1\\text{ bar}, T = 298.15\\text{ K}$) **tidak berlangsung spontan ke arah kanan**. Sebaliknya, pembentukan $\\ce{N2O4}$ dari $\\ce{NO2}$ yang berlangsung spontan.

**Langkah 4: Menghitung Tetapan Kesetimbangan $K_p$ dan Temperatur Transisi ($T^*$)**  
1. **Tetapan Kesetimbangan ($K_p$):**
   $$\\Delta G^\\circ = -RT \\ln K_p \\implies \\ln K_p = -\\frac{\\Delta G^\\circ}{RT}$$
   $$\\ln K_p = -\\frac{4785.23\\text{ J/mol}}{8.3145\\text{ J}/(\\text{mol}\\cdot\\text{K}) \\times 298.15\\text{ K}} = -\\frac{4785.23}{2478.97} = -1.9303$$
   $$K_p = e^{-1.9303} = \\mathbf{0.145}$$
   *(Nilai $K_p < 1$ menunjukkan bahwa pada kesetimbangan suhu ruang, reaktan $\\ce{N2O4}$ mendominasi campuran fasa gas).*

2. **Temperatur Ambang Batas Transisi ($T^*$):**
   Kondisi batas kespontanan tercapai saat $\\Delta G^\\circ = 0$:
   $$\\Delta H^\\circ - T^* \\Delta S^\\circ = 0 \\implies T^* = \\frac{\\Delta H^\\circ}{\\Delta S^\\circ}$$
   $$T^* = \\frac{57200\\text{ J/mol}}{175.8\\text{ J}/(\\text{mol}\\cdot\\text{K})} = \\mathbf{325.37\\text{ K}} \\quad (52.22^\\circ\\text{C})$$
   Pada temperatur $T > 325.4\\text{ K}$ ($> 52.2^\\circ\\text{C}$), kontribusi faktor entropi termal ($-T\\Delta S^\\circ$) melampaui defisit entalpi ($\\Delta H^\\circ$), sehingga $\\Delta G^\\circ$ bernilai negatif dan disosiasi $\\ce{N2O4}$ berlangsung spontan.

**Kesimpulan Evaluator Juri:**  
Pada $298.15\\text{ K}$, reaksi memiliki $\\Delta H^\\circ = +57.20\\text{ kJ/mol}$, $\\Delta S^\\circ = +175.8\\text{ J}/(\\text{mol}\\cdot\\text{K})$, $\\Delta G^\\circ = +4.79\\text{ kJ/mol}$, dan $K_p = 0.145$. Reaksi endotermik dengan peningkatan entropi ini mengalami pergeseran menjadi spontan pada temperatur di atas $325.4\\text{ K}$ ($52.2^\\circ\\text{C}$).`,
      keyFormulas: [
        { name: 'Hukum Hess Entalpi', formula: '\\Delta H^\\circ = \\sum n\\Delta H_f^\\circ(\\text{prod}) - \\sum m\\Delta H_f^\\circ(\\text{reak})' },
        { name: 'Energi Gibbs Standar', formula: '\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ' },
        { name: 'Hubungan Gibbs dan Kp', formula: 'K_p = e^{-\\Delta G^\\circ / RT}' },
        { name: 'Temperatur Crossover', formula: 'T^* = \\frac{\\Delta H^\\circ}{\\Delta S^\\circ}' },
      ],
    },
    {
      tag: 'soal-kirchhoff-amonia',
      tags: ['soal-osp', 'hukum-kirchhoff', 'kapasitas-kalor-cp', 'sintesis-amonia'],
      title: 'Contoh Soal OSP 2: Aplikasi Hukum Kirchhoff untuk Entalpi Sintesis Industri Amonia pada Temperatur Tinggi',
      summary: 'Perhitungan perubahan kapasitas kalor reaksi (ΔCp) dan integrasi persamaan Kirchhoff untuk menentukan kalor eksotermik sintesis amonia Haber-Bosch pada suhu 450 °C.',
      content: `### Masalah Soal:
Sintesis industri amonia melalui proses Haber-Bosch melibatkan reaksi fasa gas eksotermik:
$$\\ce{N2(g) + 3 H2(g) -> 2 NH3(g)}$$

Pada temperatur standar $298.15\\text{ K}$, entalpi reaksi standar bernilai $\\Delta H_{298}^\\circ = -92.22\\text{ kJ/mol}$.
Data kapasitas kalor molar pada tekanan tetap ($C_{p,\\text{m}}$) diasumsikan konstan pada rentang temperatur yang ditinjau:
- $C_{p,\\text{m}}(\\ce{N2(g)}) = 29.12\\text{ J}/(\\text{mol}\\cdot\\text{K})$
- $C_{p,\\text{m}}(\\ce{H2(g)}) = 28.82\\text{ J}/(\\text{mol}\\cdot\\text{K})$
- $C_{p,\\text{m}}(\\ce{NH3(g)}) = 35.06\\text{ J}/(\\text{mol}\\cdot\\text{K})$

**Pertanyaan:**
1. Hitung perubahan kapasitas kalor molar reaksi ($\\Delta C_p$) pada tekanan tetap!
2. Gunakan Hukum Kirchhoff untuk menghitung entalpi reaksi standar ($\\Delta H_{723}^\\circ$) pada temperatur kerja reaktor industri amonia yaitu $450.0^\\circ\\text{C}$ ($723.15\\text{ K}$)!
3. Berdasarkan hasil perhitungan tersebut, apakah reaksi sintesis amonia menjadi lebih eksotermik atau kurang eksotermik saat temperatur dinaikkan?
4. Mengapa industri kimia Haber-Bosch mengoperasikan reaktor pada suhu tinggi ($450^\\circ\\text{C}$) padahal secara termodinamika Le Chatelier suhu tinggi menurunkan perolehan amonia? Jelaskan kompromi termodinamika vs kinetika reaksi!

---

### Pembahasan & Langkah Kunci:

**Langkah 1: Menghitung Perubahan Kapasitas Kalor Reaksi ($\\Delta C_p$)**  
Berdasarkan koefisien stoikiometri reaksi:
$$\\Delta C_p = \\sum n C_{p,\\text{m}}(\\text{produk}) - \\sum m C_{p,\\text{m}}(\\text{reaktan})$$
$$\\Delta C_p = 2 \\times C_{p,\\text{m}}(\\ce{NH3}) - \\left[ 1 \\times C_{p,\\text{m}}(\\ce{N2}) + 3 \\times C_{p,\\text{m}}(\\ce{H2}) \\right]$$
$$\\Delta C_p = 2(35.06) - \\left[ 29.12 + 3(28.82) \\right]$$
$$\\Delta C_p = 70.12 - \\left[ 29.12 + 86.46 \\right] = 70.12 - 115.58 = \\mathbf{-45.46\\text{ J}/(\\text{mol}\\cdot\\text{K})}$$

**Langkah 2: Menghitung Entalpi Reaksi pada Suhu $723.15\\text{ K}$ via Hukum Kirchhoff**  
Persamaan Kirchhoff bentuk integral:
$$\\Delta H_{T_2}^\\circ = \\Delta H_{T_1}^\\circ + \\int_{T_1}^{T_2} \\Delta C_p \\, dT$$
Karena $\\Delta C_p$ bernilai konstan:
$$\\Delta H_{T_2}^\\circ = \\Delta H_{T_1}^\\circ + \\Delta C_p (T_2 - T_1)$$

Hitung selisih temperatur:
$$\\Delta T = T_2 - T_1 = 723.15\\text{ K} - 298.15\\text{ K} = 425.0\\text{ K}$$

Konversikan nilai $\\Delta H_{298}^\\circ$ ke Joule:
$$\\Delta H_{298}^\\circ = -92.22\\text{ kJ/mol} = -92220\\text{ J/mol}$$

Substitusikan nilai-nilai ke dalam persamaan:
$$\\Delta H_{723}^\\circ = -92220\\text{ J/mol} + \\left[ -45.46\\text{ J}/(\\text{mol}\\cdot\\text{K}) \\times 425.0\\text{ K} \\right]$$
$$\\Delta H_{723}^\\circ = -92220\\text{ J/mol} - 19320.5\\text{ J/mol} = -111540.5\\text{ J/mol} = \\mathbf{-111.54\\text{ kJ/mol}}$$

**Langkah 3: Analisis Perubahan Sifat Eksotermik Reaksi**  
Bandingkan nilai entalpi kedua temperatur:
- Pada $298.15\\text{ K}$: $\\Delta H^\\circ = -92.22\\text{ kJ/mol}$
- Pada $723.15\\text{ K}$: $\\Delta H^\\circ = -111.54\\text{ kJ/mol}$

Karena nilai $\\Delta H^\circ$ menjadi **lebih negatif** (pelepasan kalor meningkat sebesar $19.32\\text{ kJ/mol}$), reaksi sintesis amonia menjadi **semakin eksotermik** pada temperatur tinggi. Hal ini terjadi secara fisis karena kapasitas kalor reaktan ($115.58\\text{ J/K}$) lebih besar dibanding produk ($70.12\\text{ J/K}$), sehingga reaktan menyimpan lebih banyak energi termal yang kemudian dilepaskan saat bereaksi.

**Langkah 4: Kompromi Termodinamika vs Kinetika Reaksi dalam Industri Kimia**  
1. **Dilema Termodinamika (Le Chatelier):** Reaksi sintesis amonia bersifat eksotermik ($\\Delta H < 0$). Menurut Asas Le Chatelier dan Persamaan Van 't Hoff, kenaikan temperatur akan menggeser kesetimbangan ke arah reaktan (nilai $K_p$ turun drastis), sehingga persen perolehan amonia teoritis pada kesetimbangan justru menurun.
2. **Kebutuhan Kinetika Kimia (Persamaan Arrhenius):** Molekul $\\ce{N2}$ memiliki ikatan kovalen rangkap tiga ($\\ce{N#N}$) yang luar biasa kuat ($D = 945\\text{ kJ/mol}$), menghasilkan energi aktivasi ($E_a$) yang sangat tinggi. Pada suhu rendah, laju pemutusan ikatan $\\ce{N2}$ praktis mendekati nol meskipun dibantu katalis besi.
3. **Solusi Rekayasa:** Temperatur $400-450^\\circ\\text{C}$ dipilih sebagai kompromi optimal (*compromise temperature*): temperatur cukup tinggi agar laju reaksi berjalan cepat mencapai kesetimbangan dalam hitungan detik, sementara penurunan perolehan amonia dikompensasi dengan menerapkan **tekanan sangat tinggi ($150-250\\text{ atm}$)** yang secara termodinamika menggeser kesetimbangan ke arah koefisien gas lebih kecil ($4\\text{ mol gas} \\to 2\\text{ mol gas}$).

**Kesimpulan Evaluator Juri:**  
Perubahan kapasitas kalor reaksi adalah $\\Delta C_p = -45.46\\text{ J}/(\\text{mol}\\cdot\\text{K})$. Pada $450^\\circ\\text{C}$ ($723.15\\text{ K}$), entalpi reaksi menjadi semakin eksotermik mencapai $\\Delta H_{723}^\\circ = -111.54\\text{ kJ/mol}$. Temperatur $450^\\circ\\text{C}$ digunakan di industri untuk mengatasi tingginya energi aktivasi ikatan $\\ce{N#N}$ dengan tekanan tinggi sebagai penyeimbang perolehan produk.`,
      keyFormulas: [
        { name: 'Kapasitas Kalor Reaksi', formula: '\\Delta C_p = \\sum n C_p(\\text{prod}) - \\sum m C_p(\\text{reak})' },
        { name: 'Persamaan Kirchhoff', formula: '\\Delta H_{T_2}^\\circ = \\Delta H_{T_1}^\\circ + \\Delta C_p (T_2 - T_1)' },
      ],
    },
    {
      tag: 'soal-van-t-hoff-caco3',
      tags: ['soal-osp', 'van-t-hoff', 'dekomposisi-caco3', 'tekanan-dekomposisi'],
      title: 'Contoh Soal OSP 3: Analisis Dekomposisi Kalsium Karbonat via Persamaan Van \'t Hoff & Plot Termodinamika',
      summary: 'Aplikasi persamaan Van \'t Hoff dua titik untuk mengekstraksi entalpi reaksi kalsinasi, entropi reaksi standar, dan temperatur dekomposisi kapur tohor.',
      content: `### Masalah Soal:
Kalsinasi termal batu kapur ($\\ce{CaCO3}$) untuk memproduksi kapur tohor ($\\ce{CaO}$) merupakan salah satu proses termokimia tertua dalam industri metalurgi dan semen:
$$\\ce{CaCO3(s) <=> CaO(s) + CO2(g)}$$

Pengukuran tekanan disosiasi kesetimbangan gas karbon dioksida ($P_{\\ce{CO2}}$) pada dua temperatur tinggi di laboratorium menghasilkan data sebagai berikut:
- Pada temperatur $T_1 = 1000.0\\text{ K}$ ($726.85^\\circ\\text{C}$), tekanan kesetimbangan terukur sebesar $P_{\\ce{CO2}} = 0.0500\\text{ atm}$.
- Pada temperatur $T_2 = 1100.0\\text{ K}$ ($826.85^\\circ\\text{C}$), tekanan kesetimbangan terukur sebesar $P_{\\ce{CO2}} = 0.3500\\text{ atm}$.
*(Tetapan gas $R = 8.3145\\text{ J}/(\\text{mol}\\cdot\\text{K})$, tekanan standar $P^\\circ = 1.000\\text{ atm}$)*.

**Pertanyaan:**
1. Tuliskan ekspresi tetapan kesetimbangan $K_p$ untuk reaksi dekomposisi heterogen tersebut!
2. Hitung perubahan entalpi standar reaksi ($\\Delta H^\\circ_{\\text{rxn}}$) dengan menggunakan Persamaan Van 't Hoff dua titik!
3. Tentukan perubahan entropi standar reaksi ($\\Delta S^\\circ_{\\text{rxn}}$) pada rentang temperatur tersebut!
4. Hitung temperatur dekomposisi normal ($T_{\\text{decomp}}$), yaitu temperatur pada saat tekanan disosiasi $\\ce{CO2}$ tepat mencapai tekanan atmosfer lingkungan ($P_{\\ce{CO2}} = 1.000\\text{ atm}$)!

---

### Pembahasan & Langkah Kunci:

**Langkah 1: Menentukan Ekspresi Tetapan Kesetimbangan $K_p$**  
Pada kesetimbangan heterogen, fasa padat murni ($\\ce{CaCO3(s)}$ dan $\\ce{CaO(s)}$) memiliki aktivitas termodinamika bernilai tepat $1$ ($a_{\\text{padat}} = 1$). Maka tetapan kesetimbangan gas ideal dinyatakan secara murni oleh tekanan parsial $\\ce{CO2}$:
$$K_p = \\frac{a_{\\ce{CaO}} \\cdot P_{\\ce{CO2}}}{a_{\\ce{CaCO3}}} = \\frac{1 \\cdot P_{\\ce{CO2}}}{1} = P_{\\ce{CO2}}$$
Sehingga:
- Pada $T_1 = 1000.0\\text{ K} \\implies K_{p,1} = 0.0500$
- Pada $T_2 = 1100.0\\text{ K} \\implies K_{p,2} = 0.3500$

**Langkah 2: Menghitung Entalpi Reaksi Standar ($\\Delta H^\\circ_{\\text{rxn}}$) via Persamaan Van 't Hoff**  
Bentuk integral Persamaan Van 't Hoff dua titik:
$$\\ln\\left(\\frac{K_{p,2}}{K_{p,1}}\\right) = -\\frac{\\Delta H^\\circ}{R} \\left( \\frac{1}{T_2} - \\frac{1}{T_1} \\right)$$

Hitung rasio tetapan kesetimbangan:
$$\\ln\\left(\\frac{0.3500}{0.0500}\\right) = \\ln(7.000) = 1.94591$$

Hitung selisih invers temperatur:
$$\\frac{1}{T_2} - \\frac{1}{T_1} = \\frac{1}{1100.0} - \\frac{1}{1000.0} = 0.00090909 - 0.00100000 = -9.0909 \\times 10^{-5}\\text{ K}^{-1}$$

Selesaikan untuk mencari entalpi reaksi:
$$1.94591 = -\\frac{\\Delta H^\\circ}{8.3145} \\times (-9.0909 \\times 10^{-5})$$
$$\\Delta H^\\circ = \\frac{1.94591 \\times 8.3145}{9.0909 \\times 10^{-5}} = \\frac{16.1793}{9.0909 \\times 10^{-5}} = 177972\\text{ J/mol} = \\mathbf{+177.97\\text{ kJ/mol}} \\approx +178.0\\text{ kJ/mol}$$
*(Nilai positif menegaskan bahwa kalsinasi kapur merupakan proses endotermik kuat yang memerlukan pasokan kalor intensif).*

**Langkah 3: Menghitung Perubahan Entropi Standar Reaksi ($\\Delta S^\\circ_{\\text{rxn}}$)**  
Gunakan data pada kondisi $T_1 = 1000.0\\text{ K}$:
$$\\Delta G_{1000}^\\circ = -R T_1 \\ln K_{p,1}$$
$$\\Delta G_{1000}^\\circ = -8.3145\\text{ J}/(\\text{mol}\\cdot\\text{K}) \\times 1000.0\\text{ K} \\times \\ln(0.0500)$$
$$\\Delta G_{1000}^\\circ = -8314.5 \\times (-2.99573) = +24908\\text{ J/mol}$$

Dari relasi $\\Delta G^\\circ = \\Delta H^\\circ - T \\Delta S^\\circ$:
$$\\Delta S^\\circ = \\frac{\\Delta H^\\circ - \\Delta G_{1000}^\\circ}{T_1} = \\frac{177972\\text{ J/mol} - 24908\\text{ J/mol}}{1000.0\\text{ K}} = \\frac{153064}{1000.0} = \\mathbf{+153.06\\text{ J}/(\\text{mol}\\cdot\\text{K})}$$
*(Peningkatan entropi sebesar $+153\\text{ J/(mol}\\cdot\\text{K)}$ selaras dengan terlepasnya $1\\text{ mol}$ gas $\\ce{CO2}$ dari kisi kristal padat).*

**Langkah 4: Menghitung Temperatur Dekomposisi Normal ($T_{\\text{decomp}}$)**  
Dekomposisi berlangsung spontan ke atmosfer terbuka ketika tekanan uap $\\ce{CO2}$ mencapai $1.000\\text{ atm}$ ($K_p = 1.000$).
Karena $\\ln(1.000) = 0$, maka $\\Delta G^\\circ = -RT \\ln(1) = 0$:
$$\\Delta H^\\circ - T_{\\text{decomp}} \\Delta S^\\circ = 0$$
$$T_{\\text{decomp}} = \\frac{\\Delta H^\\circ}{\\Delta S^\\circ} = \\frac{177972\\text{ J/mol}}{153.064\\text{ J}/(\\text{mol}\\cdot\\text{K})} = \\mathbf{1162.7\\text{ K}} \\quad (889.6^\\circ\\text{C})$$
*(Hasil perhitungan analitis ini sangat presisi mencerminkan data teknik industri semen, di mana batu kapur mengalami kalsinasi spontan sempurna pada temperatur sekitar $890^\\circ\\text{C}$)*.

**Kesimpulan Evaluator Juri:**  
Dekomposisi batu kapur memiliki entalpi reaksi $\\Delta H^\\circ = +178.0\\text{ kJ/mol}$ dan entropi reaksi $\\Delta S^\\circ = +153.1\\text{ J}/(\\text{mol}\\cdot\\text{K})$. Temperatur kalsinasi normal pada tekanan atmosfer bebas terhitung sebesar $1162.7\\text{ K}$ ($889.6^\\circ\\text{C}$).`,
      keyFormulas: [
        { name: 'Tetapan Kesetimbangan Heterogen', formula: 'K_p = P_{\\ce{CO2}}' },
        { name: 'Persamaan Van \'t Hoff', formula: '\\ln\\left(\\frac{K_2}{K_1}\\right) = -\\frac{\\Delta H^\\circ}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)' },
        { name: 'Suhu Dekomposisi Normal', formula: 'T_{\\text{decomp}} = \\frac{\\Delta H^\\circ}{\\Delta S^\\circ}' },
      ],
    },
    {
      tag: 'soal-ekspansi-gas-termodinamika',
      tags: ['soal-osn', 'ekspansi-gas', 'kerja-reversibel-ireversibel', 'entropi-semesta'],
      title: 'Contoh Soal OSN 4: Perbandingan Kerja Reversibel vs Ireversibel & Bukti Termodinamika Kenaikan Entropi Semesta',
      summary: 'Komputasi komparatif kerja maksimum isotermal reversibel vs ekspansi bebas satu tahap, pembuktian teorema dS_semesta = 0 (reversibel) dan dS_semesta > 0 (ireversibel).',
      content: `### Masalah Soal:
Sebanyak $2.00\\text{ mol}$ gas ideal monoatomik ($C_{v,\\text{m}} = \\frac{3}{2}R$) mula-mula menempati volume $V_1 = 5.00\\text{ L}$ pada temperatur konstan $T = 300.0\\text{ K}$. Gas tersebut kemudian diekspansikan secara isotermal hingga mencapai volume akhir $V_2 = 20.0\\text{ L}$ melalui dua lintasan proses yang berbeda:
- **Jalur A:** Ekspansi isotermal dilakukan secara **reversibel** (kuasistatis bertahap lambat di mana tekanan dalam gas selalu seimbang dengan tekanan luar).
- **Jalur B:** Ekspansi isotermal dilakukan secara **ireversibel 1 tahap** melawan tekanan luar konstan $P_{\\text{ext}} = 1.00\\text{ atm}$ ($101325\\text{ Pa}$) hingga volume mencapai $20.0\\text{ L}$.
*(Tetapan gas universal $R = 8.3145\\text{ J}/(\\text{mol}\\cdot\\text{K})$, $1\\text{ L}\\cdot\\text{atm} = 101.325\\text{ J}$)*.

**Pertanyaan:**
1. Hitung kerja ($w_{\\text{rev}}$) dan kalor ($q_{\\text{rev}}$) pada Jalur A!
2. Hitung kerja ($w_{\\text{irrev}}$) dan kalor ($q_{\\text{irrev}}$) pada Jalur B!
3. Tentukan perubahan entropi sistem ($\\Delta S_{\\text{sistem}}$) untuk Jalur A dan Jalur B!
4. Hitung perubahan entropi lingkungan ($\\Delta S_{\\text{lingkungan}}$) dan entropi total semesta ($\\Delta S_{\\text{semesta}}$) untuk masing-masing jalur, serta buktikan secara termodinamika Hukum II Termodinamika!

---

### Pembahasan & Langkah Kunci:

**Langkah 1: Menghitung Kerja dan Kalor pada Jalur A (Isotermal Reversibel)**  
Karena gas ideal mengalami proses isotermal ($T = \\text{konstan} \\implies \\Delta T = 0$):
$$\\Delta U = n C_{v,\\text{m}} \\Delta T = 0$$
Berdasarkan Hukum I Termodinamika ($\\Delta U = q + w = 0 \\implies q = -w$).

Kerja ekspansi reversibel:
$$w_{\\text{rev}} = -n R T \\ln\\left(\\frac{V_2}{V_1}\\right)$$
$$w_{\\text{rev}} = -2.00\\text{ mol} \\times 8.3145\\text{ J}/(\\text{mol}\\cdot\\text{K}) \\times 300.0\\text{ K} \\times \\ln\\left(\\frac{20.0\\text{ L}}{5.00\\text{ L}}\\right)$$
$$w_{\\text{rev}} = -4988.7 \\times \\ln(4.000) = -4988.7 \\times 1.38629 = \\mathbf{-6915.8\\text{ J}} \\quad (-6.92\\text{ kJ})$$
*(Tanda negatif menunjukkan sistem melakukan kerja maksimum terhadap lingkungan)*.

Kalor yang diserap dari reservoir lingkungan:
$$q_{\\text{rev}} = -w_{\\text{rev}} = \\mathbf{+6915.8\\text{ J}} \\quad (+6.92\\text{ kJ})$$

**Langkah 2: Menghitung Kerja dan Kalor pada Jalur B (Isotermal Ireversibel 1 Tahap)**  
Pada ekspansi ireversibel melawan tekanan luar konstan $P_{\\text{ext}} = 1.00\\text{ atm}$:
$$w_{\\text{irrev}} = -P_{\\text{ext}} (V_2 - V_1)$$
$$\\Delta V = 20.0\\text{ L} - 5.00\\text{ L} = 15.0\\text{ L}$$
$$w_{\\text{irrev}} = -1.00\\text{ atm} \\times 15.0\\text{ L} = -15.0\\text{ L}\\cdot\\text{atm}$$
Konversikan ke Joule ($1\\text{ L}\\cdot\\text{atm} = 101.325\\text{ J}$):
$$w_{\\text{irrev}} = -15.0 \\times 101.325\\text{ J} = \\mathbf{-1519.9\\text{ J}} \\quad (-1.52\\text{ kJ})$$

Karena proses tetap berlangsung secara isotermal ($\\Delta U = 0$):
$$q_{\\text{irrev}} = -w_{\\text{irrev}} = \\mathbf{+1519.9\\text{ J}} \\quad (+1.52\\text{ kJ})$$

*Verifikasi Teorema Kerja Maksimum:*  
$$|w_{\\text{rev}}| = 6915.8\\text{ J} \\gg |w_{\\text{irrev}}| = 1519.9\\text{ J}$$
Kerja yang berhasil diekstrak pada ekspansi reversibel bernilai lebih dari $4.5$ kali lebih besar dibanding ekspansi spontan ireversibel!

**Langkah 3: Menghitung Perubahan Entropi Sistem ($\\Delta S_{\\text{sistem}}$)**  
Entropi ($S$) merupakan **fungsi keadaan** (*state function*). Karena keadaan awal ($T = 300\\text{ K}, V_1 = 5\\text{ L}$) dan keadaan akhir ($T = 300\\text{ K}, V_2 = 20\\text{ L}$) pada Jalur A dan Jalur B identik, maka nilai $\\Delta S_{\\text{sistem}}$ **harus sama persis** untuk kedua jalur!
Perhitungan $\\Delta S_{\\text{sistem}}$ wajib dievaluasi melalui lintasan reversibel:
$$\\Delta S_{\\text{sistem}} = \\frac{q_{\\text{rev}}}{T} = \\frac{+6915.8\\text{ J}}{300.0\\text{ K}} = \\mathbf{+23.05\\text{ J/K}}$$

**Langkah 4: Evaluasi Entropi Lingkungan dan Entropi Semesta**  
Lingkungan dianggap sebagai tandon kalor (*thermal reservoir*) raksasa yang menyerap/melepas kalor secara reversibel pada temperatur konstan $T_{\\text{lingk}} = 300.0\\text{ K}$:
$$\\Delta S_{\\text{lingkungan}} = -\\frac{q_{\\text{aktual}}}{T_{\\text{lingk}}}$$

1. **Untuk Jalur A (Proses Reversibel):**
   $$\\Delta S_{\\text{lingkungan}} = -\\frac{q_{\\text{rev}}}{300.0\\text{ K}} = -\\frac{+6915.8\\text{ J}}{300.0\\text{ K}} = -23.05\\text{ J/K}$$
   $$\\Delta S_{\\text{semesta}} = \\Delta S_{\\text{sistem}} + \\Delta S_{\\text{lingkungan}} = +23.05 - 23.05 = \\mathbf{0.00\\text{ J/K}}$$
   *(Terbukti: Proses reversibel tidak menghasilkan peningkatan entropi total semesta).*

2. **Untuk Jalur B (Proses Ireversibel):**
   $$\\Delta S_{\\text{lingkungan}} = -\\frac{q_{\\text{irrev}}}{300.0\\text{ K}} = -\\frac{+1519.9\\text{ J}}{300.0\\text{ K}} = -5.07\\text{ J/K}$$
   $$\\Delta S_{\\text{semesta}} = \\Delta S_{\\text{sistem}} + \\Delta S_{\\text{lingkungan}} = +23.05 - 5.07 = \\mathbf{+17.98\\text{ J/K}} > 0$$
   *(Terbukti secara matematis: Proses ireversibel alami selalu menghasilkan entropi semesta positif $\\Delta S_{\\text{semesta}} > 0$, memvalidasi Hukum II Termodinamika).*

**Kesimpulan Evaluator Juri:**  
Kerja ekspansi reversibel ($|w_{\\text{rev}}| = 6.92\\text{ kJ}$) terbukti menghasilkan kerja maksimum dibandingkan ekspansi ireversibel ($|w_{\\text{irrev}}| = 1.52\\text{ kJ}$). Perubahan entropi sistem identik bernilai $+23.05\\text{ J/K}$, namun entropi semesta bernilai nol pada proses reversibel ($\\Delta S_{\\text{univ}} = 0$) dan meningkat drastis pada proses ireversibel ($\\Delta S_{\\text{univ}} = +17.98\\text{ J/K}$).`,
      keyFormulas: [
        { name: 'Kerja Isotermal Reversibel Gas Ideal', formula: 'w_{\\text{rev}} = -nRT \\ln\\left(\\frac{V_2}{V_1}\\right)' },
        { name: 'Kerja Ekspansi Ireversibel', formula: 'w_{\\text{irrev}} = -P_{\\text{ext}}\\Delta V' },
        { name: 'Entropi Semesta Reversibel', formula: '\\Delta S_{\\text{semesta}} = 0' },
        { name: 'Entropi Semesta Ireversibel', formula: '\\Delta S_{\\text{semesta}} > 0' },
      ],
    },
    {
      tag: 'soal-ellingham-metalurgi-kroll',
      tags: ['soal-osn', 'diagram-ellingham', 'metalurgi-kroll', 'ekstraksi-titanium'],
      title: 'Contoh Soal OSN 5: Termodinamika Metalurgi Ekstraksi Titanium via Proses Kroll & Kopling Reaksi Ellingham',
      summary: 'Rasionalisasi termodinamika mengapa reduksi langsung TiO2 oleh karbon tidak fisibel pada temperatur wajar, dan penyelesaiannya melalui kopling karboklorinasi pembentukan TiCl4.',
      content: `### Masalah Soal:
Titanium ($\\ce{Ti}$) adalah logam struktural modern dengan rasio kekuatan terhadap massa yang sangat istimewa. Namun, bijih rutil titanium dioksida ($\\ce{TiO2}$) memiliki energi kisi yang sangat stabil sehingga reduksi langsung dengan reduktor karbon konvensional mengalami rintangan termodinamika berat.

Tabel termodinamika pada temperatur tinggi $T = 1000.0\\text{ K}$ menyajikan data reaksi berikut:
1. **Reduksi Langsung Karbotermal:**
   $$\\ce{TiO2(s) + C(s) -> Ti(s) + CO2(g)}$$
   Data pada $1000\\text{ K}$: $\\Delta H^\\circ = +534.5\\text{ kJ/mol}$, $\\Delta S^\\circ = +178.2\\text{ J}/(\\text{mol}\\cdot\\text{K})$.
2. **Tahap 1 Proses Kroll (Karboklorinasi Menghasilkan $\\ce{TiCl4}$):**
   $$\\ce{TiO2(s) + 2 C(s) + 2 Cl2(g) -> TiCl4(g) + 2 CO(g)}$$
   Data pada $1000\\text{ K}$: $\\Delta H^\\circ = -80.4\\text{ kJ/mol}$, $\\Delta S^\\circ = +142.5\\text{ J}/(\\text{mol}\\cdot\\text{K})$.
3. **Tahap 2 Proses Kroll (Reduksi Magnesiometrik $\\ce{TiCl4}$):**
   $$\\ce{TiCl4(g) + 2 Mg(l) -> Ti(s) + 2 MgCl2(l)}$$
   Data pada $1000\\text{ K}$: $\\Delta H^\\circ = -483.2\\text{ kJ/mol}$, $\\Delta S^\\circ = -135.8\\text{ J}/(\\text{mol}\\cdot\\text{K})$.
*(Tetapan gas $R = 8.3145\\text{ J}/(\\text{mol}\\cdot\\text{K})$)*.

**Pertanyaan:**
1. Hitung $\\Delta G^\\circ$ reduksi langsung karbotermal $\\ce{TiO2}$ pada $1000.0\\text{ K}$ dan tentukan temperatur teoritis minimum agar reaksi tersebut dapat berlangsung spontan!
2. Jelaskan bahaya metalurgi mengapa reduksi langsung dengan karbon pada temperatur ekstrem ($> 1500^\\circ\\text{C}$) tidak boleh dilakukan dalam produksi titanium murni!
3. Hitung $\\Delta G^\\circ$ untuk reaksi karboklorinasi (Tahap 1 Kroll) pada $1000.0\\text{ K}$ dan tentukan nilai tetapan kesetimbangannya ($K_p$)!
4. Hitung $\\Delta G^\\circ$ untuk reaksi reduksi dengan magnesium cair (Tahap 2 Kroll) pada $1000.0\\text{ K}$ dan jelaskan prinsip kopling termodinamika yang mendasari kesuksesan Proses Kroll!

---

### Pembahasan & Langkah Kunci:

**Langkah 1: Menghitung $\\Delta G^\\circ$ Reduksi Langsung Karbotermal & Suhu Ambang Batas**  
Gunakan persamaan Gibbs-Helmholtz pada $T = 1000.0\\text{ K}$:
$$\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$$
$$\\Delta G^\\circ = 534500\\text{ J/mol} - (1000.0\\text{ K} \\times 178.2\\text{ J}/(\\text{mol}\\cdot\\text{K}))$$
$$\\Delta G^\\circ = 534500 - 178200 = \\mathbf{+356300\\text{ J/mol}} = \\mathbf{+356.3\\text{ kJ/mol}} \\gg 0$$

*Temperatur Minimum Spontanitas ($T^*$):*  
Agar reaksi menjadi spontan ($\\Delta G^\\circ < 0$):
$$T^* = \\frac{\\Delta H^\\circ}{\\Delta S^\\circ} = \\frac{534500\\text{ J/mol}}{178.2\\text{ J}/(\\text{mol}\\cdot\\text{K})} = \\mathbf{2999.4\\text{ K}} \\approx 3000\\text{ K} \\quad (2726^\\circ\\text{C})$$
Temperatur $3000\\text{ K}$ sangat mustahil dicapai secara ekonomis pada tungku industri dan melampaui jauh titik leleh titanium murni ($1668^\\circ\\text{C}$ / $1941\\text{ K}$).

**Langkah 2: Bahaya Metalurgi Reduksi Karbotermal Bersuhu Tinggi**  
Bila campuran $\\ce{TiO2}$ dan kokas dipaksa dipanaskan pada suhu sangat tinggi ($> 1500^\\circ\\text{C}$), atom titanium yang terbentuk langsung bereaksi dengan karbon membentuk senyawa interstisial refraktori:
$$\\ce{TiO2(s) + 3 C(s) -> TiC(s) + 2 CO(g)}$$
Titanium karbida ($\\ce{TiC}$) membentuk larutan padat interstisial dalam kisi titanium yang menyebabkan logam menjadi sangat getas, rapuh, dan kehilangan sifat elastisitas mekaniknya, sehingga tidak dapat ditempa menjadi material kedirgantaraan.

**Langkah 3: Menghitung $\\Delta G^\circ$ dan $K_p$ Karboklorinasi (Tahap 1 Proses Kroll)**  
Pada $T = 1000.0\\text{ K}$:
$$\\Delta G^\\circ_{\\text{tahap 1}} = \\Delta H^\\circ - T\\Delta S^\\circ = -80400\\text{ J/mol} - (1000.0\\text{ K} \\times 142.5\\text{ J}/(\\text{mol}\\cdot\\text{K}))$$
$$\\Delta G^\\circ_{\\text{tahap 1}} = -80400 - 142500 = \\mathbf{-222900\\text{ J/mol}} = \\mathbf{-222.9\\text{ kJ/mol}} < 0$$
*(Reaksi berlangsung sangat spontan karena didorong oleh faktor entalpi eksotermik dan kenaikan entropi).*

Hitung nilai tetapan kesetimbangan $K_p$:
$$\\Delta G^\\circ = -RT \\ln K_p \\implies \\ln K_p = -\\frac{-222900}{8.3145 \\times 1000.0} = +\\frac{222900}{8314.5} = +26.8086$$
$$K_p = e^{+26.8086} = \\mathbf{4.39 \\times 10^{11}}$$
Nilai $K_p$ yang spektakuler membuktikan bahwa klorinasi dengan bantuan karbon mengonversi bijih $\\ce{TiO2}$ secara kuantitatif sempurna menjadi gas $\\ce{TiCl4}$ yang mudah dimurnikan melalui distilasi fraksional.

**Langkah 4: Menghitung $\\Delta G^\circ$ Reduksi Magnesiometrik (Tahap 2 Proses Kroll)**  
Pada $T = 1000.0\\text{ K}$:
$$\\Delta G^\\circ_{\\text{tahap 2}} = \\Delta H^\\circ - T\\Delta S^\\circ = -483200\\text{ J/mol} - (1000.0\\text{ K} \\times (-135.8\\text{ J}/(\\text{mol}\\cdot\\text{K})))$$
$$\\Delta G^\\circ_{\\text{tahap 2}} = -483200 - (-135800) = -483200 + 135800 = \\mathbf{-347400\\text{ J/mol}} = \\mathbf{-347.4\\text{ kJ/mol}} < 0$$

*Prinsip Kopling Termodinamika William J. Kroll:*  
- Reaksi reduksi langsung karbotermal memiliki defisit energi bebas raksasa ($\\Delta G^\\circ = +356.3\\text{ kJ/mol}$).
- Proses Kroll memecah rintangan ini menjadi dua tahap independen yang keduanya didorong oleh afinitas termodinamika yang sangat masif:
  - Tahap 1 (Karboklorinasi): $\\Delta G^\\circ = -222.9\\text{ kJ/mol}$
  - Tahap 2 (Reduksi Magnesiometrik): $\\Delta G^\\circ = -347.4\\text{ kJ/mol}$
- Akumulasi total kedua tahap menghasilkan dorongan termodinamika netto sebesar $\\Delta G^\\circ_{\\text{total}} = -570.3\\text{ kJ/mol}$, menghasilkan spons titanium murni berkualitas tinggi tanpa kontaminasi karbida.

**Kesimpulan Evaluator Juri:**  
Reduksi langsung $\\ce{TiO2}$ oleh karbon tidak fisibel pada temperatur wajar karena $\\Delta G^\\circ = +356.3\\text{ kJ/mol}$ (memerlukan $T > 3000\\text{ K}$). Proses Kroll memecahkan masalah ini dengan cerdas melalui kopling reaksi karboklorinasi ($\\Delta G^\\circ = -222.9\\text{ kJ/mol}, K_p = 4.39 \\times 10^{11}$) dan reduksi magnesiometrik ($\\Delta G^\\circ = -347.4\\text{ kJ/mol}$).`,
      keyFormulas: [
        { name: 'Kespontanan Gibbs Paduan', formula: '\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ' },
        { name: 'Tetapan Kesetimbangan Karboklorinasi', formula: 'K_p = e^{-\\Delta G^\\circ / RT}' },
        { name: 'Prinsip Kopling Termodinamika', formula: '\\Delta G_{\\text{netto}}^\\circ = \\sum \\Delta G_i^\\circ < 0' },
      ],
    },
  ],
};

export const OSN_TOPIC_4: MaterialItem = {
  ...RAW_OSN_TOPIC_4,
  prerequisites: RAW_OSN_TOPIC_4.prerequisites.map(p => ({
    ...p,
    checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_04[p.tag] || undefined,
  })),
  core_concepts: RAW_OSN_TOPIC_4.core_concepts.map(c => ({
    ...c,
    checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_04[c.tag] || undefined,
  })),
  worked_examples: RAW_OSN_TOPIC_4.worked_examples.map(w => ({
    ...w,
    checkpointQuizzes: undefined,
  })),
};
