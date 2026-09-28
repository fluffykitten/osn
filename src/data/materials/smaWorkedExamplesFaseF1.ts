/**
 * smaWorkedExamplesFaseF1.ts
 * Bank Pembahasan Contoh Soal Terbimbing Kimia SMA Fase F1 (Kelas 11)
 * Standar: Kurikulum Merdeka, Asesmen Nasional, UTBK-SNBT & Ujian Sekolah SMA
 * Tingkat Kesulitan: Sedang dan Sulit (HOTS)
 * Jumlah: Tepat 5 Soal per Topik (Bervariasi, Bebas Jargon OSN)
 */

import type { ConceptBlock } from '../materialsData.ts';

// ============================================================================
// TOPIK 106: Termokimia SMA (Entalpi, Kalorimetri, Hukum Hess & Energi Ikatan)
// ============================================================================
export const WORKED_EXAMPLES_TOPIC_106: ConceptBlock[] = [
  {
    tag: 'contoh-kalorimeter-larutan-sma',
    tags: ['kalorimetri', 'entalpi-netralisasi', 'asas-black', 'kapasitas-kalor', 'kimia-sma'],
    title: 'Contoh Soal 1: Eksperimen Kalorimeter Cangkir & Penentuan Entalpi Netralisasi Molar (Level: Sedang)',
    summary: 'Analisis data kalorimeter larutan, perhitungan kalor serap larutan dan wadah (q = mcΔT + CΔT), serta penentuan nilai ΔHn° reaksi asam-basa kuat.',
    content: `### 📋 Skenario Masalah & Data Eksperimen:
Di laboratorium kimia sekolah, sekelompok siswa melakukan eksperimen penentuan perubahan entalpi netralisasi ($\\Delta H_n^\\circ$) menggunakan kalorimeter cangkir stirofoam. Ke dalam kalorimeter dimasukkan $50.0\\text{ mL}$ larutan $\\ce{HCl}$ $1.00\\text{ M}$ pada suhu $25.0^\\circ\\text{C}$. Kemudian ditambahkan $50.0\\text{ mL}$ larutan $\\ce{NaOH}$ $1.00\\text{ M}$ yang juga bersuhu $25.0^\\circ\\text{C}$.

Setelah kedua larutan diaduk secara merata, suhu campuran meningkat hingga mencapai titik maksimum pada $31.8^\\circ\\text{C}$.  
**Data Konstanta Fisis Diketahui:**
- Massa jenis larutan campuran ($\\rho$) $= 1.00\\text{ g/mL}$
- Kalor jenis larutan campuran ($c$) $= 4.18\\text{ J/(g}\\cdot^\\circ\\text{C)}$
- Kapasitas kalor wadah kalorimeter ($C_{\\text{kal}}$) $= 35.0\\text{ J/}^\\circ\\text{C}$

---

### 🎯 Pertanyaan:
1. Hitung jumlah mol pereaksi yang bereaksi dan tentukan jumlah mol $\\ce{H2O}$ yang terbentuk!
2. Hitung kalor total yang diserap oleh larutan dan wadah kalorimeter ($q_{\\text{reaksi}}$)!
3. Tentukan perubahan entalpi netralisasi molar ($\\Delta H_n^\\circ$) dalam satuan $\\text{kJ/mol}$ air yang terbentuk!
4. Apakah reaksi tersebut tergolong eksoterm atau endoterm? Jelaskan perpindahan energinya!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Stoikiometri Pereaksi & Pembentukan Air
Tuliskan persamaan reaksi netralisasi setara:
$$\\ce{HCl(aq) + NaOH(aq) -> NaCl(aq) + H2O(l)}$$

Hitung mol masing-masing larutan:
$$\\begin{aligned}
n(\\ce{HCl}) &= M \\times V = 1.00\\text{ M} \\times 0.050\\text{ L} = \\mathbf{0.050\\text{ mol}} \\\\
n(\\ce{NaOH}) &= M \\times V = 1.00\\text{ M} \\times 0.050\\text{ L} = \\mathbf{0.050\\text{ mol}}
\\end{aligned}$$

Karena perbandingan koefisien reaksi adalah $1 : 1$, kedua pereaksi habis bereaksi sempurna (*ekuivalen stoikiometris*):
$$n(\\ce{H2O})_{\\text{terbentuk}} = \\mathbf{0.050\\text{ mol}}$$

#### Langkah 2: Perhitungan Kenaikan Suhu ($\\Delta T$) & Massa Larutan
$$\\Delta T = T_{\\text{akhir}} - T_{\\text{awal}} = 31.8^\\circ\\text{C} - 25.0^\\circ\\text{C} = \\mathbf{+6.8^\\circ\\text{C}}$$
$$V_{\\text{total}} = 50.0\\text{ mL} + 50.0\\text{ mL} = 100.0\\text{ mL}$$
$$m_{\\text{larutan}} = \\rho \\times V_{\\text{total}} = 1.00\\text{ g/mL} \\times 100.0\\text{ mL} = \\mathbf{100.0\\text{ g}}$$

#### Langkah 3: Perhitungan Kalor Reaksi ($q_{\\text{reaksi}}$)
Sesuai Asas Kekekalan Energi (Hukum Asas Black):
$$q_{\\text{reaksi}} + q_{\\text{larutan}} + q_{\\text{kalorimeter}} = 0 \implies q_{\\text{reaksi}} = -(q_{\\text{larutan}} + q_{\\text{kalorimeter}})$$

1. Kalor yang diserap oleh larutan:
   $$q_{\\text{larutan}} = m \\cdot c \\cdot \\Delta T = 100.0\\text{ g} \\times 4.18\\text{ J/(g}\\cdot^\\circ\\text{C)} \\times 6.8^\\circ\\text{C} = \\mathbf{2842.4\\text{ J}}$$
2. Kalor yang diserap oleh wadah kalorimeter:
   $$q_{\\text{kalorimeter}} = C_{\\text{kal}} \\cdot \\Delta T = 35.0\\text{ J/}^\\circ\\text{C} \\times 6.8^\\circ\\text{C} = \\mathbf{238.0\\text{ J}}$$
3. Kalor total yang dibebaskan sistem:
   $$q_{\\text{reaksi}} = -(2842.4\\text{ J} + 238.0\\text{ J}) = -3080.4\\text{ J} = \\mathbf{-3.0804\\text{ kJ}}$$

#### Langkah 4: Kalkulasi Nilai Entalpi Netralisasi Standar ($\\Delta H_n^\\circ$)
$$\\Delta H_n^\\circ = \\frac{q_{\\text{reaksi}}}{n(\\ce{H2O})} = \\frac{-3.0804\\text{ kJ}}{0.050\\text{ mol}} = \\mathbf{-61.6\\text{ kJ/mol}}$$

#### Langkah 5: Identifikasi Jenis Reaksi
Tanda $\\Delta H$ bernilai negatif ($\\Delta H < 0$) dan suhu campuran naik, membuktikan bahwa reaksi netralisasi ini merupakan **reaksi eksoterm**. Energi kalor mengalir spontan dari **sistem (reaksi kimia)** menuju **lingkungan (larutan air & dinding wadah)**.

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Jebakan Satuan & Tanda Aljabar pada Kalorimetri:**  
> 1. Perhatikan bahwa $q$ yang dihitung dari rumus $mc\\Delta T$ bernilai positif (karena lingkungan mengalami pemanasan), namun $\\Delta H$ sistem bernilai **negatif** karena sistem kehilangan energi ke lingkungan. Jangan sampai tertukar tandanya!  
> 2. Pada soal ujian sekolah/UTBK, periksa apakah kapasitas kalorimeter ($C_{\\text{kal}}$) diabaikan atau diperhitungkan. Jika soal menyatakan *"kalorimeter stirofoam dianggap tidak menyerap kalor"*, maka suku $C_{\\text{kal}}\\Delta T$ bernilai nol.`,
    keyFormulas: [
      { name: 'Rumus Kalor Kalorimeter', formula: 'q_{\\text{reaksi}} = -(m \\cdot c \\cdot \\Delta T + C \\cdot \\Delta T)' },
      { name: 'Entalpi Netralisasi Molar', formula: '\\Delta H_n^\\circ = \\frac{q_{\\text{reaksi}}}{n_{\\ce{H2O}}}' },
    ],
  },
  {
    tag: 'contoh-persamaan-termokimia-dan-macam-dh',
    tags: [
      'persamaan-termokimia',
      'macam-macam-entalpi-standar',
      'entalpi-pembentukan-dhf',
      'entalpi-penguraian-dhd',
      'entalpi-pembakaran-dhc',
      'stoikiometri-entalpi',
      'kimia-sma',
    ],
    title: 'Contoh Soal 2: Persamaan Termokimia & Macam-Macam Entalpi Molar Standar (Level: Sedang)',
    summary: 'Dekonstruksi definisi baku 1 mol zat pada kondisi standar (ΔHf°, ΔHd°, ΔHc°), konversi nilai entalpi terbalik, dan perhitungan kalor pembakaran gas metana.',
    content: `### 📋 Skenario Masalah:
Perhatikan data termokimia pembakaran gas metana ($\\ce{CH4}$) dan pembentukan gas karbon dioksida serta air pada keadaan standar ($25^\\circ\\text{C}, 1\\text{ atm}$):
1. Persamaan Termokimia I (Pembentukan $\\ce{CO2}$):
   $$\\ce{C(s, grafit) + O2(g) -> CO2(g)} \\quad \\Delta H_f^\\circ = -393.5\\text{ kJ/mol}$$
2. Persamaan Termokimia II (Pembentukan $\\ce{H2O}$ cair):
   $$\\ce{H2(g) + 1/2 O2(g) -> H2O(l)} \\quad \\Delta H_f^\\circ = -285.8\\text{ kJ/mol}$$
3. Persamaan Termokimia III (Pembakaran Sempurna $\\ce{CH4}$):
   $$\\ce{CH4(g) + 2 O2(g) -> CO2(g) + 2 H2O(l)} \\quad \\Delta H_c^\\circ = -890.3\\text{ kJ/mol}$$

---

### 🎯 Pertanyaan:
1. Tuliskan persamaan termokimia untuk reaksi **penguraian standar ($\\Delta H_d^\\circ$)** dari gas $\\ce{CO2}$ dan air cair $\\ce{H2O}$!
2. Jika dibakar sempurna $3.20\\text{ gram}$ gas metana ($\\ce{CH4}$, $M_r = 16.0\\text{ g/mol}$), berapa kiloJoule kalor yang dibebaskan ke lingkungan?
3. Berapa volume gas $\\ce{O2}$ pada kondisi standar (STP) yang diperlukan agar reaksi pembakaran membebaskan kalor sebesar $445.15\\text{ kJ}$?

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Persamaan Termokimia Penguraian Standar ($\\Delta H_d^\\circ$)
Berdasarkan Hukum Laplace, entalpi penguraian adalah kebalikan eksak dari entalpi pembentukan ($\\Delta H_d^\\circ = -\\Delta H_f^\\circ$):
- **Penguraian 1 mol $\\ce{CO2}$:**
  $$\\mathbf{\\ce{CO2(g) -> C(s, grafit) + O2(g)}} \\quad \\Delta H_d^\\circ = \\mathbf{+393.5\\text{ kJ/mol}}$$
- **Penguraian 1 mol $\\ce{H2O(l)}$:**
  $$\\mathbf{\\ce{H2O(l) -> H2(g) + 1/2 O2(g)}} \\quad \\Delta H_d^\\circ = \\mathbf{+285.8\\text{ kJ/mol}}$$

#### Langkah 2: Kalor Pembakaran $3.20\\text{ gram}$ Gas Metana
Hitung jumlah mol gas metana:
$$n(\\ce{CH4}) = \\frac{\\text{massa}}{M_r} = \\frac{3.20\\text{ g}}{16.0\\text{ g/mol}} = \\mathbf{0.200\\text{ mol}}$$

Hitung kalor yang dibebaskan:
$$\\Delta H = n \\times \\Delta H_c^\\circ = 0.200\\text{ mol} \\times (-890.3\\text{ kJ/mol}) = \\mathbf{-178.06\\text{ kJ}}$$
Jadi, kalor yang dibebaskan ke lingkungan adalah sebesar **$178.06\\text{ kJ}$**.

#### Langkah 3: Volume Gas $\\ce{O2}$ (STP) untuk Membebaskan $445.15\\text{ kJ}$
Perhatikan bahwa target kalor yang dibebaskan adalah $q = 445.15\\text{ kJ} \\implies \\Delta H = -445.15\\text{ kJ}$.  
Hitung fraksi mol $\\ce{CH4}$ yang dibakar:
$$n(\\ce{CH4}) = \\frac{-445.15\\text{ kJ}}{-890.3\\text{ kJ/mol}} = \\mathbf{0.500\\text{ mol}}$$

Berdasarkan perbandingan koefisien reaksi:
$$\\ce{CH4(g) + 2 O2(g) -> CO2(g) + 2 H2O(l)}$$
$$n(\\ce{O2}) = 2 \\times n(\\ce{CH4}) = 2 \\times 0.500\\text{ mol} = \\mathbf{1.00\\text{ mol}}$$

Hitung volume $\\ce{O2}$ pada STP ($0^\\circ\\text{C}, 1\\text{ atm}$):
$$V(\\ce{O2}) = n \\times 22.4\\text{ L/mol} = 1.00\\text{ mol} \\times 22.4\\text{ L/mol} = \\mathbf{22.4\\text{ Liter}}$$

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Kaidah Definisi 1 Mol Standar:**  
> Definisi $\\Delta H_f^\\circ, \\Delta H_d^\\circ,$ dan $\\Delta H_c^\\circ$ **selalu terikat pada koefisien 1 mol zat yang dibicarakan**:  
> - $\\Delta H_f^\\circ$: koefisien produk senyawa harus tepat 1 mol.  
> - $\\Delta H_d^\\circ$: koefisien reaktan senyawa harus tepat 1 mol.  
> - $\\Delta H_c^\\circ$: koefisien bahan bakar yang dibakar harus tepat 1 mol.  
> Jika dalam persamaan tertulis koefisien 2 (misal $2\\ce{H2 + O2 -> 2H2O} \\; \\Delta H = -571.6\\text{ kJ}$), maka nilai $\\Delta H_f^\\circ$ adalah $-571.6 / 2 = -285.8\\text{ kJ/mol}$.`,
    keyFormulas: [
      { name: 'Kaidah Laplace', formula: '\\Delta H_d^\\circ = -\\Delta H_f^\\circ' },
      { name: 'Kalor Berdasarkan Mol', formula: 'q = n \\times \\Delta H^\\circ' },
    ],
  },
  {
    tag: 'contoh-hukum-hess-aljabar',
    tags: [
      'hukum-hess',
      'penjumlahan-reaksi',
      'asetilena',
      'hukum-hess-dan-siklus-energi',
      'fungsi-keadaan',
      'kimia-sma',
    ],
    title: 'Contoh Soal 3: Penerapan Hukum Hess Tiga Tahap & Penentuan Entalpi Pembentukan Gas Asetilena (Level: Sulit / HOTS)',
    summary: 'Aplikasi manipulasi aljabar termokimia (membalik reaksi, mengalikan koefisien, dan mengeliminasi zat antara) untuk mencari ΔHf° gas etuna/asetilena.',
    content: `### 📋 Skenario Masalah:
Gas asetilena / etuna ($\\ce{C2H2}$) merupakan gas yang digunakan pada proses pengelasan karbit karena memiliki suhu nyala api pembakaran yang sangat tinggi. Reaksi pembentukan gas asetilena dari unsur-unsurnya dalam wujud standar adalah:
$$\\mathbf{\\ce{2 C(s, grafit) + H2(g) -> C2H2(g)}} \\quad \\Delta H_f^\\circ = \\text{?}$$

Reaksi pembentukan langsung ini sangat sulit diukur secara kalorimetri karena asetilena mudah terdekomposisi. Namun, data entalpi pembakaran standar berikut dapat diukur dengan sangat akurat:
1. Reaksi (1): $\\ce{C(s, grafit) + O2(g) -> CO2(g)} \\quad \\Delta H_1 = -393.5\\text{ kJ}$
2. Reaksi (2): $\\ce{H2(g) + 1/2 O2(g) -> H2O(l)} \\quad \\Delta H_2 = -285.8\\text{ kJ}$
3. Reaksi (3): $\\ce{2 C2H2(g) + 5 O2(g) -> 4 CO2(g) + 2 H2O(l)} \\quad \\Delta H_3 = -2598.8\\text{ kJ}$

---

### 🎯 Pertanyaan:
1. Berdasarkan Hukum Hess, susun kembali ketiga persamaan reaksi di atas agar jika dijumlahkan menghasilkan reaksi pembentukan 1 mol $\\ce{C2H2(g)}$!
2. Hitung nilai perubahan entalpi pembentukan standar ($\\Delta H_f^\\circ$) dari gas asetilena!
3. Gambarkan diagram tingkat energi yang mengilustrasikan jalur langsung vs jalur pembakaran berputar tersebut!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Target Reaksi Analisis
Target kita adalah:
$$\\mathbf{\\ce{2 C(s, grafit) + H2(g) -> C2H2(g)}}$$

Mari kita cocokkan setiap komponen target dengan reaksi yang tersedia:
- **Atom Karbon ($\\ce{2 C(s)}$ di ruas kiri):**  
  Tersedia di Reaksi (1) di ruas kiri dengan koefisien 1.  
  $\\implies$ **Kalikan Reaksi (1) dengan faktor 2**:
  $$\\ce{2 C(s) + 2 O2(g) -> 2 CO2(g)} \\quad \\Delta H_A = 2 \\times (-393.5) = \\mathbf{-787.0\\text{ kJ}}$$

- **Gas Hidrogen ($\\ce{1 H2(g)}$ di ruas kiri):**  
  Tersedia di Reaksi (2) di ruas kiri dengan koefisien 1 (sudah pas!).  
  $\\implies$ **Pertahankan Reaksi (2) apa adanya**:
  $$\\ce{H2(g) + 1/2 O2(g) -> H2O(l)} \\quad \\Delta H_B = \\mathbf{-285.8\\text{ kJ}}$$

- **Gas Asetilena ($\\ce{1 C2H2(g)}$ di ruas kanan):**  
  Tersedia di Reaksi (3) di ruas kiri dengan koefisien 2.  
  $\\implies$ **Balik Reaksi (3) dan bagi dengan faktor 2** (tanda $\\Delta H$ berubah menjadi positif):
  $$\\ce{2 CO2(g) + H2O(l) -> C2H2(g) + 5/2 O2(g)} \\quad \\Delta H_C = \\frac{+2598.8\\text{ kJ}}{2} = \\mathbf{+1299.4\\text{ kJ}}$$

#### Langkah 2: Eliminasi Zat Perantara (Auditing Neraca Reaksi)
Jumlahkan ketiga persamaan reaksi modifikasi:
$$\\begin{aligned}
\\ce{2 C(s) + 2 O2(g)} &\\ce{-> 2 CO2(g)} &\\Delta H_A &= -787.0\\text{ kJ} \\\\
\\ce{H2(g) + 1/2 O2(g)} &\\ce{-> H2O(l)} &\\Delta H_B &= -285.8\\text{ kJ} \\\\
\\ce{2 CO2(g) + H2O(l)} &\\ce{-> C2H2(g) + 5/2 O2(g)} &\\Delta H_C &= +1299.4\\text{ kJ} \\\\
\\hline
\\mathbf{\\ce{2 C(s) + H2(g)}} &\\mathbf{\\ce{-> C2H2(g)}} &\\Delta H_{\\text{target}} &= \\text{?}
\\end{aligned}$$

**Periksa pencoretan zat perantara:**
- Ruas kiri memiliki $\\ce{O2}$: $2 + \\frac{1}{2} = \\frac{5}{2}\\ce{O2(g)}$. Ruas kanan memiliki $\\frac{5}{2}\\ce{O2(g)}$ $\\implies$ **Saling mencoret habis!**
- Ruas kanan memiliki $2\\ce{CO2(g)}$, ruas kiri memiliki $2\\ce{CO2(g)}$ $\\implies$ **Saling mencoret habis!**
- Ruas kanan memiliki $1\\ce{H2O(l)}$, ruas kiri memiliki $1\\ce{H2O(l)}$ $\\implies$ **Saling mencoret habis!**

#### Langkah 3: Penjumlahan Nilai Entalpi Target
$$\\begin{aligned}
\\Delta H_f^\\circ(\\ce{C2H2}) &= \\Delta H_A + \\Delta H_B + \\Delta H_C \\\\
&= (-787.0\\text{ kJ}) + (-285.8\\text{ kJ}) + (+1299.4\\text{ kJ}) \\\\
&= -1072.8\\text{ kJ} + 1299.4\\text{ kJ} \\\\
&= \\mathbf{+226.6\\text{ kJ/mol}}
\\end{aligned}$$

**Interpretasi Nilai:** $\\Delta H_f^\\circ$ bernilai positif ($+226.6\\text{ kJ/mol}$) menunjukkan bahwa gas asetilena adalah senyawa **endotermik**. Senyawa ini menyimpan energi kimia laten yang sangat tinggi, yang menjelaskan mengapa pembakarannya menghasilkan suhu luar biasa panas ($> 3000^\\circ\\text{C}$).

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Aturan 3 Jurus Manipulasi Hukum Hess:**  
> 1. **Dibalik** $\\implies$ Tanda $\\Delta H$ berubah lawan ($+ \\leftrightarrow -$).  
> 2. **Dikalikan $n$** $\\implies$ Nilai $\\Delta H$ dikalikan $n$.  
> 3. **Dibagi $m$** $\\implies$ Nilai $\\Delta H$ dibagi $m$.  
> Kunci ketenangan saat ujian: **Fokuslah hanya pada spesi unik** (spesi yang hanya muncul di satu persamaan saja, seperti $\\ce{C(s)}$ dan $\\ce{C2H2}$), jangan membuang waktu memikirkan oksigen karena $\\ce{O2}$ pasti akan otomatis saling mencoret jika spesi unik sudah tertata benar!`,
    keyFormulas: [
      { name: 'Prinsip Hukum Hess', formula: '\\Delta H_{\\text{reaksi}} = \\sum \\Delta H_{\\text{tahap}}' },
      { name: 'Kaidah Pembalikan Reaksi', formula: '\\Delta H_{\\text{balik}} = -\\Delta H_{\\text{maju}}' },
    ],
  },
  {
    tag: 'contoh-perhitungan-dhf-etanol-dan-efisiensi',
    tags: [
      'entalpi-pembentukan-standar',
      'hukum-hess',
      'pembakaran-etanol',
      'efisiensi-termal',
      'macam-macam-entalpi-standar',
      'kimia-sma',
    ],
    title: 'Contoh Soal 4: Kalkulasi ΔH° Pembakaran Menggunakan Data Entalpi Pembentukan Standar & Pemanasan Air (Level: Sulit / HOTS)',
    summary: 'Aplikasi rumus sigma ΔHf° (produk dikurangi reaktan), peringatan unsur bebas bernilai nol, serta perhitungan massa bahan bakar untuk menaikkan suhu air.',
    content: `### 📋 Skenario Masalah & Data Diketahui:
Etanol ($\\ce{C2H5OH}$) cair banyak digunakan sebagai bahan bakar bioetanol ramah lingkungan. Diketahui data perubahan entalpi pembentukan standar ($\\Delta H_f^\\circ$) pada suhu $25^\\circ\\text{C}$:
- $\\Delta H_f^\\circ(\\ce{C2H5OH(l)}) = -277.7\\text{ kJ/mol}$
- $\\Delta H_f^\\circ(\\ce{CO2(g)}) = -393.5\\text{ kJ/mol}$
- $\\Delta H_f^\\circ(\\ce{H2O(l)}) = -285.8\\text{ kJ/mol}$
- $\\Delta H_f^\\circ(\\ce{O2(g)}) = 0.0\\text{ kJ/mol}$ (unsur bebas)

Massa molar: $A_r\\;\\ce{C} = 12.0, \\ce{H} = 1.0, \\ce{O} = 16.0\\text{ g/mol} \\implies M_r(\\ce{C2H5OH}) = 46.0\\text{ g/mol}$.

---

### 🎯 Pertanyaan:
1. Tuliskan persamaan termokimia pembakaran sempurna 1 mol cairan etanol menghasilkan gas $\\ce{CO2}$ dan air cair $\\ce{H2O}$!
2. Menggunakan rumus $\\sum \\Delta H_f^\\circ$, hitung nilai kalor pembakaran standar ($\\Delta H_c^\\circ$) etanol!
3. Sebuah burner bioetanol digunakan untuk memanaskan $2.0\\text{ Liter}$ air dari suhu $25.0^\\circ\\text{C}$ hingga mendidih ($100.0^\\circ\\text{C}$). Jika efisiensi penyerapan kalor oleh air hanya sebesar $70\\%$, berapa gram etanol yang harus dibakar? (Kalor jenis air $c = 4.18\\text{ J/(g}\\cdot^\\circ\\text{C)}$, $\\rho_{\\text{air}} = 1.00\\text{ g/mL}$).

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Persamaan Reaksi Pembakaran Sempurna
$$\\mathbf{\\ce{C2H5OH(l) + 3 O2(g) -> 2 CO2(g) + 3 H2O(l)}}$$

#### Langkah 2: Perhitungan $\\Delta H_c^\\circ$ Berdasarkan Data $\\Delta H_f^\\circ$
Rumus umum Hukum Hess berbasis data pembentukan standar:
$$\\Delta H_{\\text{reaksi}}^\\circ = \\sum (n \\times \\Delta H_f^\\circ)_{{\\text{produk}}} - \\sum (m \\times \\Delta H_f^\\circ)_{{\\text{reaktan}}}$$

1. **Jumlah $\\Delta H_f^\\circ$ Produk:**
   $$\\begin{aligned}
   \\sum \\Delta H_f^\\circ(\\text{produk}) &= [2 \\times \\Delta H_f^\\circ(\\ce{CO2})] + [3 \\times \\Delta H_f^\\circ(\\ce{H2O})] \\\\
   &= [2 \\times (-393.5\\text{ kJ})] + [3 \\times (-285.8\\text{ kJ})] \\\\
   &= (-787.0\\text{ kJ}) + (-857.4\\text{ kJ}) = \\mathbf{-1644.4\\text{ kJ}}
   \\end{aligned}$$

2. **Jumlah $\\Delta H_f^\\circ$ Reaktan:**
   $$\\begin{aligned}
   \\sum \\Delta H_f^\\circ(\\text{reaktan}) &= [1 \\times \\Delta H_f^\\circ(\\ce{C2H5OH})] + [3 \\times \\Delta H_f^\\circ(\\ce{O2})] \\\\
   &= [1 \\times (-277.7\\text{ kJ})] + [3 \\times 0.0\\text{ kJ}] = \\mathbf{-277.7\\text{ kJ}}
   \\end{aligned}$$

3. **Nilai $\\Delta H_c^\\circ$ Etanol:**
   $$\\begin{aligned}
   \\Delta H_c^\\circ &= \\sum \\Delta H_f^\\circ(\\text{produk}) - \\sum \\Delta H_f^\\circ(\\text{reaktan}) \\\\
   &= (-1644.4\\text{ kJ}) - (-277.7\\text{ kJ}) \\\\
   &= -1644.4 + 277.7 = \\mathbf{-1366.7\\text{ kJ/mol}}
   \\end{aligned}$$

#### Langkah 3: Perhitungan Kebutuhan Massa Etanol untuk Pemanasan Air
1. **Kalor Teoretis yang Dibutuhkan Air ($q_{\\text{air}}$):**
   - Volume air $= 2.0\\text{ L} = 2000\\text{ mL} \\implies m = 2000\\text{ g}$
   - $\\Delta T = 100.0^\\circ\\text{C} - 25.0^\\circ\\text{C} = 75.0^\\circ\\text{C}$
   $$q_{\\text{air}} = m \\cdot c \\cdot \\Delta T = 2000\\text{ g} \\times 4.18\\text{ J/(g}\\cdot^\\circ\\text{C)} \\times 75.0^\\circ\\text{C} = 627000\\text{ J} = \\mathbf{627.0\\text{ kJ}}$$

2. **Kalor Nyata yang Harus Dihasilkan Burner ($q_{\\text{total}}$):**
   Karena efisiensi kalor $\\eta = 70\\% = 0.70$:
   $$q_{\\text{total}} = \\frac{q_{\\text{air}}}{\\eta} = \\frac{627.0\\text{ kJ}}{0.70} = \\mathbf{895.71\\text{ kJ}}$$

3. **Jumlah Mol dan Massa Etanol yang Diperlukan:**
   $$n(\\ce{C2H5OH}) = \\frac{q_{\\text{total}}}{|\\Delta H_c^\\circ|} = \\frac{895.71\\text{ kJ}}{1366.7\\text{ kJ/mol}} = \\mathbf{0.6554\\text{ mol}}$$
   $$\\text{Massa Etanol} = n \\times M_r = 0.6554\\text{ mol} \\times 46.0\\text{ g/mol} = \\mathbf{30.15\\text{ gram}}$$

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Miskonsepsi Unsur Bebas & Efisiensi Energi:**  
> 1. $\\Delta H_f^\\circ$ untuk setiap unsur bebas dalam bentuk alotrop paling stabilnya pada $25^\\circ\\text{C}, 1\\text{ atm}$ (seperti $\\ce{O2(g)}, \\ce{N2(g)}, \\ce{H2(g)}, \\ce{C(s, grafit)}$) bernilai **tepat nol**! Jangan pernah mencari nilai $\\Delta H_f^\\circ$ gas oksigen pada tabel data.  
> 2. Pada soal efisiensi $\\%$, kalor yang harus dilepaskan bahan bakar selalu **lebih besar** daripada kalor yang diserap air ($q_{\\text{lepas}} = q_{\\text{serap}} / \\text{efisiensi}$). Jangan terbalik mengalikannya!`,
    keyFormulas: [
      { name: 'Rumus Hess Sigma dHf', formula: '\\Delta H_{rxn}^\\circ = \\sum (n \\cdot \\Delta H_f^\\circ)_{\\text{produk}} - \\sum (m \\cdot \\Delta H_f^\\circ)_{\\text{reaktan}}' },
      { name: 'Efisiensi Termal', formula: '\\eta = \\frac{q_{\\text{terserap}}}{q_{\\text{dihasilkan}}} \\times 100\\%' },
    ],
  },
  {
    tag: 'contoh-energi-ikatan-hidrogenasi-etena',
    tags: [
      'energi-ikatan',
      'hidrogenasi',
      'etena-etana',
      'fasa-gas',
      'energi-ikatan-dan-entalpi-reaksi',
      'pengayaan-siklus-born-haber-dan-termodinamika-statistik',
      'kimia-sma',
    ],
    title: 'Contoh Soal 5: Energi Ikatan Rata-Rata pada Reaksi Adisi Hidrogenasi & Trik Pemotongan Ikatan Pasif (Level: Sulit / HOTS)',
    summary: 'Metode sistematis pemutusan ikatan reaktan vs pembentukan ikatan produk, analisis struktur Lewis 3D, dan trik efisiensi spectator bonds.',
    content: `### 📋 Skenario Masalah & Data Diketahui:
Reaksi hidrogenasi gas etena ($\\ce{C2H4}$) menjadi gas etana ($\\ce{C2H6}$) merupakan reaksi dasar dalam proses industri pembuatan margarin dan petrokimia:
$$\\ce{C2H4(g) + H2(g) -> C2H6(g)}$$

Tabel data energi disosiasi ikatan rata-rata ($D$) diketahui sebagai berikut:
| Jenis Ikatan Kovalen | Energi Ikatan Rata-Rata ($D$) |
| :---: | :---: |
| $\\ce{C=C}$ (rangkap dua) | $614\\text{ kJ/mol}$ |
| $\\ce{C-C}$ (tunggal) | $348\\text{ kJ/mol}$ |
| $\\ce{C-H}$ (tunggal) | $413\\text{ kJ/mol}$ |
| $\\ce{H-H}$ (tunggal) | $436\\text{ kJ/mol}$ |

---

### 🎯 Pertanyaan:
1. Gambarkan rumus struktur ikatan lengkap untuk seluruh molekul reaktan dan produk!
2. Menggunakan metode konvensional, hitung total energi pemutusan ikatan reaktan dan pembentukan ikatan produk, lalu cari $\\Delta H$ reaksi!
3. Gunakan **Metode Trik Cepat Pemotongan Ikatan Pasif (*Spectator Bonds*)** untuk mencari nilai $\\Delta H$ reaksi dalam waktu kurang dari 1 menit!
4. Jelaskan mengapa data energi ikatan rata-rata hanya berlaku secara akurat untuk zat-zat yang berada dalam **fasa gas**!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Struktur Ikatan Kovalen Molekul
Uraikan kerangka ikatan masing-masing molekul:
- **Etena ($\\ce{C2H4}$):** 1 ikatan rangkap dua $\\ce{C=C}$ dan 4 ikatan tunggal $\\ce{C-H}$.
- **Gas Hidrogen ($\\ce{H2}$):** 1 ikatan tunggal $\\ce{H-H}$.
- **Etana ($\\ce{C2H6}$):** 1 ikatan tunggal $\\ce{C-C}$ dan 6 ikatan tunggal $\\ce{C-H}$.

Persamaan struktur ikatan:
$$\\ce{H2C=CH2 + H-H -> H3C-CH3}$$

#### Langkah 2: Perhitungan Metode Konvensional Lengkap
Rumus entalpi berbasis energi ikatan rata-rata:
$$\\Delta H_{\\text{reaksi}} = \\sum D_{\\text{reaktan (putus)}} - \\sum D_{\\text{produk (bentuk)}}$$

1. **Energi Pemutusan Ikatan (Reaktan, Ruas Kiri):**
   $$\\begin{aligned}
   \\sum D_{\\text{putus}} &= [1 \\times D(\\ce{C=C})] + [4 \\times D(\\ce{C-H})] + [1 \\times D(\\ce{H-H})] \\\\
   &= [1 \\times 614] + [4 \\times 413] + [1 \\times 436] \\\\
   &= 614 + 1652 + 436 = \\mathbf{2702\\text{ kJ/mol}}
   \\end{aligned}$$

2. **Energi Pembentukan Ikatan (Produk, Ruas Kanan):**
   $$\\begin{aligned}
   \\sum D_{\\text{bentuk}} &= [1 \\times D(\\ce{C-C})] + [6 \\times D(\\ce{C-H})] \\\\
   &= [1 \\times 348] + [6 \\times 413] \\\\
   &= 348 + 2478 = \\mathbf{2826\\text{ kJ/mol}}
   \\end{aligned}$$

3. **Perhitungan $\\Delta H$ Reaksi:**
   $$\\Delta H = \\sum D_{\\text{putus}} - \\sum D_{\\text{bentuk}} = 2702\\text{ kJ} - 2826\\text{ kJ} = \\mathbf{-124\\text{ kJ/mol}}$$

#### Langkah 3: Metode Trik Cepat (*Spectator Bonds*)
Perhatikan bahwa 4 ikatan $\\ce{C-H}$ pada etena **tidak mengalami perubahan sama sekali** dan tetap ada pada molekul etana. Kita dapat mencoret 4 ikatan $\\ce{C-H}$ dari kedua ruas:
- **Ikatan yang benar-benar putus (kiri):**
  - $1 \\times \\ce{C=C} = 614\\text{ kJ}$
  - $1 \\times \\ce{H-H} = 436\\text{ kJ}$
  $$\\sum D_{\\text{netto putus}} = 614 + 436 = \\mathbf{1050\\text{ kJ}}$$
- **Ikatan yang benar-benar baru terbentuk (kanan):**
  - $1 \\times \\ce{C-C} = 348\\text{ kJ}$
  - $2 \\times \\ce{C-H} = 2 \\times 413 = 826\\text{ kJ}$
  $$\\sum D_{\\text{netto bentuk}} = 348 + 826 = \\mathbf{1174\\text{ kJ}}$$

$$\\Delta H = 1050\\text{ kJ} - 1174\\text{ kJ} = \\mathbf{-124\\text{ kJ/mol}}$$
*(Hasil persis identik, namun menghemat 70% waktu perhitungan dan meminimalkan galat aritmatika!)*

#### Langkah 4: Rasionalisasi Fasa Gas
Energi ikatan didefinisikan secara termodinamika murni sebagai energi yang dibutuhkan untuk memutuskan ikatan kovalen antar-atom dalam wujud **gas terisolasi** tanpa adanya gangguan gaya antarmolekul. Jika reaktan atau produk berwujud cair atau padat, maka terdapat kontribusi **kalor perubahan wujud (entalpi penguapan $\\Delta H_{\\text{vap}}$ atau peleburan $\\Delta H_{\\text{fus}}$)** yang harus diperhitungkan melalui siklus Hess.

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Hati-Hati Arah Pengurangan (Reaktan vs Produk):**  
> Siswa sering keliru membalik rumus:  
> - Jika menggunakan **Entalpi Pembentukan ($\\Delta H_f^\\circ$)** $\\implies \\mathbf{\\text{PRODUK} - \\text{REAKTAN}}$ (Kanan dikurang Kiri).  
> - Jika menggunakan **Energi Ikatan ($D$)** $\\implies \\mathbf{\\text{REAKTAN} - \\text{PRODUK}}$ (Kiri dikurang Kanan, karena pemutusan ikatan reaktan bersifat endoterm/positif).  
> **Jembatan Keledai:** *"Entalpi Pembentukan = Kanan - Kiri; Energi Ikatan = Kiri - Kanan (P-B: Putus di Kiri, Bentuk di Kanan)"*.`,
    keyFormulas: [
      { name: 'Rumus Energi Ikatan', formula: '\\Delta H = \\sum D_{\\text{reaktan (putus)}} - \\sum D_{\\text{produk (bentuk)}}' },
      { name: 'Trik Netto Adisi Alkena', formula: '\\Delta H = [D_{\\ce{C=C}} + D_{\\ce{H-H}}] - [D_{\\ce{C-C}} + 2D_{\\ce{C-H}}]' },
    ],
  },
];

// ============================================================================
// TOPIK 107: Laju Reaksi & Teori Tumbukan SMA (Kinetika Kimia & Orde Reaksi)
// ============================================================================
export const WORKED_EXAMPLES_TOPIC_107: ConceptBlock[] = [
  {
    tag: 'contoh-hukum-laju-multikomponen',
    tags: ['hukum-laju-reaksi', 'orde-reaksi', 'metode-laju-awal', 'tetapan-laju-k', 'satuan-tetapan-laju', 'kimia-sma'],
    title: 'Contoh Soal 1: Penentuan Orde Reaksi Multikomponen, Hukum Laju & Nilai Tetapan Laju k dari Data Eksperimen (Level: Sedang)',
    summary: 'Analisis tabel data laju awal multikomponen gas NO dan O2, penentuan orde masing-masing reaktan, formulasi hukum laju, serta kalkulasi nilai dan satuan tetapan laju k.',
    content: `### 📋 Skenario Masalah & Data Eksperimen:
Reaksi pembentukan gas nitrogen dioksida ($\\\\ce{NO2}$) dari gas nitrogen monoksida ($\\\\ce{NO}$) dan gas oksigen ($\\\\ce{O2}$) diselidiki di laboratorium pada temperatur $25^\\\\circ\\\\text{C}$:
$$\\\\ce{2 NO(g) + O2(g) -> 2 NO2(g)}$$

Untuk menentukan persamaan hukum lajunya, dilakukan serangkaian percobaan dengan mengukur laju awal pembentukan gas $\\\\ce{NO2}$ pada berbagai variasi konsentrasi awal reaktan:

| Percobaan | $[\\\\ce{NO}]\\\\text{ (M)}$ | $[\\\\ce{O2}]\\\\text{ (M)}$ | Laju Awal $v\\\\text{ (M/detik)}$ |
| :---: | :---: | :---: | :---: |
| 1 | $0.10$ | $0.10$ | $1.20 \\\\times 10^{-4}$ |
| 2 | $0.10$ | $0.30$ | $3.60 \\\\times 10^{-4}$ |
| 3 | $0.20$ | $0.10$ | $4.80 \\\\times 10^{-4}$ |
| 4 | $0.30$ | $0.20$ | $?$ |

---

### 🎯 Pertanyaan:
1. Tentukan orde reaksi terhadap gas $\\\\ce{O2}$ dan terhadap gas $\\\\ce{NO}$!
2. Tuliskan persamaan hukum laju reaksi dan tentukan orde reaksi totalnya!
3. Hitung nilai tetapan laju reaksi ($k$) lengkap beserta satuan kinetikanya!
4. Berapakah laju pembentukan $\\\\ce{NO2}$ pada kondisi Percobaan 4?

---

### 💡 Pembahasan Langkah demi Langkah:

Bentuk umum persamaan hukum laju reaksi:
$$v = k [\\\\ce{NO}]^m [\\\\ce{O2}]^n$$

#### Langkah 1: Menentukan Orde Reaksi terhadap $\\\\ce{O2}$ (Nilai $n$)
Pilihlah dua percobaan dengan konsentrasi $[\\\\ce{NO}]$ tetap agar pengaruh konsentrasi $\\\\ce{NO}$ tereliminasi, yaitu Percobaan 1 dan Percobaan 2 ($[\\\\ce{NO}] = 0.10\\\\text{ M}$):
$$\\\\frac{v_2}{v_1} = \\\\left(\\\\frac{[\\\\ce{NO}]_2}{[\\\\ce{NO}]_1}\\\\right)^m \\\\times \\\\left(\\\\frac{[\\\\ce{O2}]_2}{[\\\\ce{O2}]_1}\\\\right)^n$$
$$\\\\frac{3.60 \\\\times 10^{-4}}{1.20 \\\\times 10^{-4}} = \\\\left(\\\\frac{0.10}{0.10}\\\\right)^m \\\\times \\\\left(\\\\frac{0.30}{0.10}\\\\right)^n$$
$$3.0 = (1.0)^m \\\\times (3.0)^n \\\\implies 3.0 = 3.0^n \\\\implies \\\\mathbf{n = 1}$$
*(Reaksi berorde 1 terhadap gas $\\\\ce{O2}$).*

#### Langkah 2: Menentukan Orde Reaksi terhadap $\\\\ce{NO}$ (Nilai $m$)
Pilihlah dua percobaan dengan konsentrasi $[\\\\ce{O2}]$ tetap, yaitu Percobaan 1 dan Percobaan 3 ($[\\\\ce{O2}] = 0.10\\\\text{ M}$):
$$\\\\frac{v_3}{v_1} = \\\\left(\\\\frac{[\\\\ce{NO}]_3}{[\\\\ce{NO}]_1}\\\\right)^m \\\\times \\\\left(\\\\frac{[\\\\ce{O2}]_3}{[\\\\ce{O2}]_1}\\\\right)^n$$
$$\\\\frac{4.80 \\\\times 10^{-4}}{1.20 \\\\times 10^{-4}} = \\\\left(\\\\frac{0.20}{0.10}\\\\right)^m \\\\times \\\\left(\\\\frac{0.10}{0.10}\\\\right)^n$$
$$4.0 = (2.0)^m \\\\times (1.0)^n \\\\implies 4.0 = 2.0^m \\\\implies 2^2 = 2^m \\\\implies \\\\mathbf{m = 2}$$
*(Reaksi berorde 2 terhadap gas $\\\\ce{NO}$).*

#### Langkah 3: Persamaan Hukum Laju & Orde Total
Substitusikan nilai pangkat $m=2$ dan $n=1$:
$$\\\\mathbf{v = k [\\\\ce{NO}]^2 [\\\\ce{O2}]}$$
$$\\\\text{Orde Total} = m + n = 2 + 1 = \\\\mathbf{3}$$

#### Langkah 4: Menghitung Nilai Tetapan Laju ($k$) & Satuannya
Gunakan data Percobaan 1 ($[\\\\ce{NO}] = 0.10\\\\text{ M}$, $[\\\\ce{O2}] = 0.10\\\\text{ M}$, $v = 1.20 \\\\times 10^{-4}\\\\text{ M/s}$):
$$1.20 \\\\times 10^{-4}\\\\text{ M}\\\\cdot\\\\text{s}^{-1} = k \\\\times (0.10\\\\text{ M})^2 \\\\times (0.10\\\\text{ M})$$
$$1.20 \\\\times 10^{-4}\\\\text{ M}\\\\cdot\\\\text{s}^{-1} = k \\\\times (1.0 \\\\times 10^{-3}\\\\text{ M}^3)$$
$$k = \\\\frac{1.20 \\\\times 10^{-4}\\\\text{ M}\\\\cdot\\\\text{s}^{-1}}{1.0 \\\\times 10^{-3}\\\\text{ M}^3} = \\\\mathbf{0.12\\\\text{ M}^{-2}\\\\cdot\\\\text{s}^{-1}} \\\\quad (\\\\text{atau } 0.12\\\\text{ L}^2\\\\cdot\\\\text{mol}^{-2}\\\\cdot\\\\text{s}^{-1})$$

Formula umum satuan $k$:
$$\\\\text{Satuan } k = \\\\text{M}^{1 - \\\\text{orde total}} \\\\cdot \\\\text{s}^{-1} = \\\\text{M}^{1 - 3} \\\\cdot \\\\text{s}^{-1} = \\\\mathbf{\\\\text{M}^{-2}\\\\cdot\\\\text{s}^{-1}}$$

#### Langkah 5: Menghitung Laju pada Percobaan 4
Masukkan konsentrasi baru ke persamaan laju yang telah lengkap:
$$\\\\begin{aligned}
v_4 &= k [\\\\ce{NO}]^2 [\\\\ce{O2}] \\\\\\\\
&= (0.12\\\\text{ M}^{-2}\\\\cdot\\\\text{s}^{-1}) \\\\times (0.30\\\\text{ M})^2 \\\\times (0.20\\\\text{ M}) \\\\\\\\
&= 0.12 \\\\times 0.090 \\\\times 0.20 \\\\\\\\
&= \\\\mathbf{2.16 \\\\times 10^{-3}\\\\text{ M/detik}}
\\\\end{aligned}$$

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Mitos Koefisien Reaksi:** Kebetulan pada soal ini orde reaksi $\\\\ce{NO}$ bernilai $2$ dan $\\\\ce{O2}$ bernilai $1$, persis sama dengan koefisien stoikiometri reaksinya ($\\\\ce{2 NO + 1 O2 -> 2 NO2}$). Namun, **ini hanyalah kebetulan kinetik**!  
> Jangan pernah menuliskan persamaan laju langsung dari koefisien reaksi sebelum mengujinya dengan rasio data eksperimen, kecuali soal secara tegas menyebutkan *"reaksi berlangsung secara elementer satu tahap"*.`,
    keyFormulas: [
      { name: 'Persamaan Laju Reaksi', formula: 'v = k [\\ce{A}]^m [\\ce{B}]^n' },
      { name: 'Rumus Satuan Tetapan k', formula: '\\text{Satuan } k = \\text{M}^{1 - \\text{orde total}} \\cdot \\text{s}^{-1}' },
      { name: 'Metode Rasio Laju', formula: '\\frac{v_2}{v_1} = \\left(\\frac{[\\ce{A}]_2}{[\\ce{A}]_1}\\right)^m \\left(\\frac{[\\ce{B}]_2}{[\\ce{B}]_1}\\right)^n' },
    ],
  },
  {
    tag: 'contoh-kinetika-termal-laju-suhu',
    tags: ['faktor-suhu-arrhenius', 'aturan-suhu-laju', 'waktu-reaksi', 'kinetika-termal', 'kimia-sma'],
    title: 'Contoh Soal 2: Kinetika Termal SMA: Pengaruh Kenaikan Suhu terhadap Laju Reaksi & Durasi Waktu Reaksi (Level: Sedang)',
    summary: 'Penerapan formulasi kelipatan kenaikan temperatur terhadap laju reaksi dan waktu durasi reaksi, serta interpretasi sebaran kinetik Maxwell-Boltzmann.',
    content: `### 📋 Skenario Masalah & Data Eksperimen:
Dalam suatu pengujian kinetika reaksi kimia di laboratorium sekolah, diketahui bahwa laju reaksi meningkat menjadi $3$ kali lebih cepat setiap kenaikan temperatur sebesar $15^\\\\circ\\\\text{C}$.  
Pada temperatur awal $20^\\\\circ\\\\text{C}$, reaksi tersebut membutuhkan waktu $54\\\\text{ menit}$ untuk bereaksi tuntas dengan laju awal terukur $v_0 = 2.0 \\\\times 10^{-3}\\\\text{ M/menit}$.

---

### 🎯 Pertanyaan:
1. Hitung laju reaksi tersebut jika temperatur dinaikkan menjadi $65^\\\\circ\\\\text{C}$!
2. Berapa detik waktu yang diperlukan agar reaksi selesai sempurna jika dilangsungkan pada suhu $80^\\\\circ\\\\text{C}$?
3. Mengapa peningkatan suhu dapat mempercepat reaksi kimia secara drastis, padahal frekuensi tumbukan total antarmolekul hanya meningkat sangat sedikit? Jelaskan berdasarkan kurva distribusi Maxwell-Boltzmann!

---

### 💡 Pembahasan Langkah demi Langkah:

Diketahui data kinetika termal:
- Faktor pengali kelipatan laju ($n$) $= 3$
- Interval kenaikan temperatur ($\\\\Delta T_0$) $= 15^\\\\circ\\\\text{C}$
- Kondisi awal 1: $T_1 = 20^\\\\circ\\\\text{C}$, $v_1 = 2.0 \\\\times 10^{-3}\\\\text{ M/menit}$, $t_1 = 54\\\\text{ menit}$

#### Langkah 1: Menghitung Laju Reaksi pada Suhu $65^\\\\circ\\\\text{C}$
Hitung selisih temperatur:
$$\\\\Delta T = T_2 - T_1 = 65^\\\\circ\\\\text{C} - 20^\\\\circ\\\\text{C} = 45^\\\\circ\\\\text{C}$$
Jumlah kelipatan kenaikan:
$$\\\\frac{\\\\Delta T}{\\\\Delta T_0} = \\\\frac{45^\\\\circ\\\\text{C}}{15^\\\\circ\\\\text{C}} = 3\\\\text{ kali kenaikan}$$

Gunakan rumus empiris kelipatan laju reaksi SMA:
$$\\\\begin{aligned}
v_2 &= v_1 \\\\times n^{\\\\frac{\\\\Delta T}{\\\\Delta T_0}} \\\\\\\\
v_{65} &= (2.0 \\\\times 10^{-3}\\\\text{ M/menit}) \\\\times 3^3 \\\\\\\\
&= (2.0 \\\\times 10^{-3}) \\\\times 27 \\\\\\\\
&= \\\\mathbf{5.4 \\\\times 10^{-2}\\\\text{ M/menit}} \\\\quad (\\\\text{atau } 9.0 \\\\times 10^{-4}\\\\text{ M/detik})
\\\\end{aligned}$$

#### Langkah 2: Menghitung Waktu Reaksi pada Suhu $80^\\\\circ\\\\text{C}$
Hitung selisih temperatur dari kondisi awal:
$$\\\\Delta T = T_3 - T_1 = 80^\\\\circ\\\\text{C} - 20^\\\\circ\\\\text{C} = 60^\\\\circ\\\\text{C}$$
Jumlah kelipatan kenaikan:
$$\\\\frac{\\\\Delta T}{\\\\Delta T_0} = \\\\frac{60^\\\\circ\\\\text{C}}{15^\\\\circ\\\\text{C}} = 4\\\\text{ kali kenaikan}$$

Ingat bahwa laju reaksi berbanding terbalik dengan waktu reaksi ($v \\\\propto \\\\frac{1}{t}$). Oleh karena itu, rumusan waktu reaksi memiliki faktor invers $\\\\left(\\\\frac{1}{n}\\\\right)$:
$$\\\\begin{aligned}
t_3 &= t_1 \\\\times \\\\left(\\\\frac{1}{n}\\\\right)^{\\\\frac{\\\\Delta T}{\\\\Delta T_0}} \\\\\\\\
t_{80} &= 54\\\\text{ menit} \\\\times \\\\left(\\\\frac{1}{3}\\\\right)^4 \\\\\\\\
&= 54\\\\text{ menit} \\\\times \\\\frac{1}{81} \\\\\\\\
&= \\\\frac{54}{81}\\\\text{ menit} = \\\\frac{2}{3}\\\\text{ menit}
\\\\end{aligned}$$

Konversikan ke satuan detik:
$$t_{80} = \\\\frac{2}{3} \\\\times 60\\\\text{ detik} = \\\\mathbf{40\\\\text{ detik}}$$

#### Langkah 3: Penjelasan Fenomena Berdasarkan Teori Maxwell-Boltzmann
- Kenaikan temperatur $15^\\\\circ\\\\text{C}$ hanya meningkatkan energi kinetik translasi rata-rata partikel (dan frekuensi tumbukan) sebesar kira-kira $2\\text{--}3\\\\%$.
- Namun, menurut **Distribusi Maxwell-Boltzmann**, kenaikan suhu menggeser kurva sebaran energi ke arah kanan dan mendatar. Akibatnya, luasan daerah di bawah kurva yang melampaui batas energi aktivasi ($E_k \\\\ge E_a$) **melonjak hingga 300% (3 kali lipat)**.
- Jadi, peningkatan laju yang dahsyat bukan disebabkan oleh lebih seringnya partikel saling bertumbukan, melainkan karena **jauh lebih banyak partikel yang memiliki modal energi kinetik yang cukup untuk menembus bukit energi aktivasi**.

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Trik Menghindari Kesalahan Satuan:**  
> - Jika ditanya laju ($v$), kalikan dengan faktor kelipatan $n^x$.  
> - Jika ditanya durasi waktu ($t$), bagilah dengan faktor kelipatan $n^x$ (atau kalikan dengan $(1/n)^x$).  
> - Selalu perhatikan satuan akhir yang diminta pada soal: jika waktu awal dalam satuan *menit* sedangkan pilihan jawaban dalam *detik*, pastikan untuk mengalikan dengan $60$ di langkah paling akhir!`,
    keyFormulas: [
      { name: 'Rumus Laju Suhu', formula: 'v_2 = v_1 \\times n^{\\frac{T_2 - T_1}{\\Delta T_0}}' },
      { name: 'Rumus Waktu Suhu', formula: 't_2 = t_1 \\times \\left(\\frac{1}{n}\\right)^{\\frac{T_2 - T_1}{\\Delta T_0}}' },
      { name: 'Relasi Laju dan Waktu', formula: 'v \\propto \\frac{1}{t}' },
    ],
  },
  {
    tag: 'contoh-diagram-energi-tumbukan-ea',
    tags: ['teori-tumbukan-efektif', 'energi-aktivasi-ea', 'orientasi-tumbukan', 'keadaan-transisi-kompleks', 'diagram-tingkat-energi', 'kimia-sma'],
    title: 'Contoh Soal 3: Teori Tumbukan Efektif, Diagram Profil Energi Potensial & Penentuan Energi Aktivasi Ea (Level: Sulit / HOTS)',
    summary: 'Analisis profil kurva koordinat reaksi eksotermik/endotermik, kalkulasi Ea maju, Ea balik, dan ΔH reaksi, serta evaluasi dampak katalis pada kompleks teraktivasi.',
    content: `### 📋 Skenario Masalah & Data Eksperimen:
Reaksi hipotetis fasa gas berlangsung menurut persamaan berikut:
$$\\\\ce{A2(g) + B2(g) -> 2 AB(g)}$$

Dari hasil studi spektroskopi keadaan transisi dan termokimia, diperoleh data tingkat energi potensial sistem sebagai berikut:
- Energi potensial pereaksi awal ($\\\\ce{A2 + B2}$) $= +60\\\\text{ kJ/mol}$
- Energi potensial puncak kompleks teraktivasi $[\\\\ce{A2B2}]^\\\\ddagger$ tanpa katalis $= +175\\\\text{ kJ/mol}$
- Energi potensial produk akhir ($\\\\ce{2 AB}$) $= +25\\\\text{ kJ/mol}$
- Pada percobaan kedua, ditambahkan katalis homogen yang menurunkan energi potensial puncak kompleks teraktivasi menjadi $+115\\\\text{ kJ/mol}$.

---

### 🎯 Pertanyaan:
1. Hitung besar energi aktivasi reaksi maju ($E_{a,\\\\text{maju}}$) dan energi aktivasi reaksi balik ($E_{a,\\\\text{balik}}$) tanpa katalis!
2. Hitung nilai perubahan entalpi reaksi ($\\\\Delta H$) dan tentukan apakah reaksi ini tergolong eksotermik atau endotermik!
3. Hitung energi aktivasi reaksi maju dengan katalis ($E'_{a,\\\\text{maju}}$) dan energi aktivasi reaksi balik dengan katalis ($E'_{a,\\\\text{balik}}$)! Apakah penambahan katalis mengubah nilai $\\\\Delta H$ reaksi?
4. Mengapa dua molekul $\\\\ce{A2}$ dan $\\\\ce{B2}$ yang memiliki energi kinetik melampaui $E_a$ tetap dapat gagal menghasilkan reaksi bila orientasi sudut tabrakannya tidak tepat?

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Menghitung $E_a$ Reaksi Maju dan Balik Tanpa Katalis
Energi aktivasi ($E_a$) adalah selisih energi potensial antara puncak kompleks teraktivasi dengan energi zat awal:
- **Energi Aktivasi Reaksi Maju ($E_{a,\\\\text{maju}}$):**
  $$E_{a,\\\\text{maju}} = E_{\\\\text{kompleks}} - E_{\\\\text{reaktan}} = +175\\\\text{ kJ/mol} - (+60\\\\text{ kJ/mol}) = \\\\mathbf{+115\\\\text{ kJ/mol}}$$
- **Energi Aktivasi Reaksi Balik ($E_{a,\\\\text{balik}}$):**
  $$E_{a,\\\\text{balik}} = E_{\\\\text{kompleks}} - E_{\\\\text{produk}} = +175\\\\text{ kJ/mol} - (+25\\\\text{ kJ/mol}) = \\\\mathbf{+150\\\\text{ kJ/mol}}$$

#### Langkah 2: Menghitung Perubahan Entalpi Reaksi ($\\\\Delta H$)
Perubahan entalpi reaksi adalah selisih energi produk dikurangi reaktan:
$$\\\\Delta H = E_{\\\\text{produk}} - E_{\\\\text{reaktan}} = +25\\\\text{ kJ/mol} - (+60\\\\text{ kJ/mol}) = \\\\mathbf{-35\\\\text{ kJ/mol}}$$

*Verifikasi melalui selisih energi aktivasi:*
$$\\\\Delta H = E_{a,\\\\text{maju}} - E_{a,\\\\text{balik}} = +115\\\\text{ kJ/mol} - 150\\\\text{ kJ/mol} = \\\\mathbf{-35\\\\text{ kJ/mol}}$$
Karena nilai $\\\\Delta H$ bertanda negatif ($\\\\Delta H < 0$), maka reaksi berlangsung secara **eksotermik** (melepaskan kalor sebesar $35\\\\text{ kJ/mol}$ ke lingkungan).

#### Langkah 3: Dampak Penambahan Katalis terhadap $E_a$ dan $\\\\Delta H$
Dengan adanya katalis, energi puncak kompleks teraktivasi turun menjadi $+115\\\\text{ kJ/mol}$:
- **Energi Aktivasi Maju Terkatalisis ($E'_{a,\\\\text{maju}}$):**
  $$E'_{a,\\\\text{maju}} = E'_{\\\\text{kompleks}} - E_{\\\\text{reaktan}} = +115\\\\text{ kJ/mol} - 60\\\\text{ kJ/mol} = \\\\mathbf{+55\\\\text{ kJ/mol}}$$
  *(Turun sebesar $60\\\\text{ kJ/mol}$ dibandingkan tanpa katalis).*
- **Energi Aktivasi Balik Terkatalisis ($E'_{a,\\\\text{balik}}$):**
  $$E'_{a,\\\\text{balik}} = E'_{\\\\text{kompleks}} - E_{\\\\text{produk}} = +115\\\\text{ kJ/mol} - 25\\\\text{ kJ/mol} = \\\\mathbf{+90\\\\text{ kJ/mol}}$$
  *(Juga turun sebesar $60\\\\text{ kJ/mol}$).*
- **Perubahan Entalpi Terkatalisis ($\\\\Delta H'$):**
  $$\\\\Delta H' = E'_{a,\\\\text{maju}} - E'_{a,\\\\text{balik}} = 55\\\\text{ kJ/mol} - 90\\\\text{ kJ/mol} = \\\\mathbf{-35\\\\text{ kJ/mol}}$$
  **Kesimpulan Kritis:** Penambahan katalis **sama sekali TIDAK MENGUBAH nilai $\\\\Delta H$ reaksi**. Katalis menurunkan bukit aktivasi maju dan balik dalam jumlah yang persis sama.

#### Langkah 4: Rasionalisasi Teori Orientasi Tumbukan Spasial
Agar terjadi reaksi, ikatan lama $\\\\ce{A-A}$ dan $\\\\ce{B-B}$ harus putus bersamaan dengan terbentuknya ikatan baru $\\\\ce{A-B}$.  
Jika molekul $\\\\ce{A2}$ menabrak molekul $\\\\ce{B2}$ dari ujung yang salah (misalnya hanya satu atom A yang menyentuh satu atom B sementara atom A kedua berada terlalu jauh dari atom B kedua), kompleks teraktivasi empat pusat $[\\\\ce{A...B...B...A}]^\\\\ddagger$ tidak dapat terstabilkan. Akibatnya, meskipun energi kinetik kedua molekul sangat tinggi ($E_k \\\\ge E_a$), kedua molekul hanya akan terpental kembali secara elastis tanpa terjadi pertukaran atom.

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Dua Aturan Emas Profil Diagram Energi:**  
> 1. **Hubungan Fundamental:** Selalu berlaku formula $\\\\mathbf{\\\\Delta H = E_{a,\\\\text{maju}} - E_{a,\\\\text{balik}}}$. Jika bukit reaksi maju lebih rendah daripada bukit balik ($E_{a,\\\\text{maju}} < E_{a,\\\\text{balik}}$), reaksi pasti eksoterm ($\\\\Delta H < 0$).  
> 2. **Sifat Invarian Katalis:** Katalis hanya mengubah lintasan kinetik (menurunkan puncak keadaan transisi), namun tidak memiliki wewenang untuk mengubah tingkat energi keadaan awal (reaktan) maupun keadaan akhir (produk). Maka:  
>    - $E_a$ berubah $\\\\implies$ Laju reaksi melonjak drastis.  
>    - $\\\\Delta H$, $\\\\Delta G$, dan tetapan kesetimbangan $K$ **TETAP KONSTAN**!`,
    keyFormulas: [
      { name: 'Relasi Ea dan Entalpi Reaksi', formula: '\\Delta H = E_{a,\\text{maju}} - E_{a,\\text{balik}}' },
      { name: 'Definisi Energi Aktivasi Maju', formula: 'E_{a,\\text{maju}} = E_{\\text{kompleks}} - E_{\\text{reaktan}}' },
      { name: 'Definisi Energi Aktivasi Balik', formula: 'E_{a,\\text{balik}} = E_{\\text{kompleks}} - E_{\\text{produk}}' },
    ],
  },
  {
    tag: 'contoh-stoikiometri-laju-diferensial',
    tags: ['laju-reaksi-kimia', 'stoikiometri-laju', 'laju-sesaat-vs-rata-rata', 'kurva-konsentrasi-waktu', 'kimia-sma'],
    title: 'Contoh Soal 4: Stoikiometri Laju Reaksi Diferensial & Kinetika Penguraian Gas N2O5 (Level: Sulit / HOTS)',
    summary: 'Penentuan laju pengurangan reaktan, laju pertambahan produk berdasarkan koefisien stoikiometri diferensial, serta konversi volumetrik gas pada STP.',
    content: `### 📋 Skenario Masalah & Data Eksperimen:
Dinitrogen pentaoksida ($\\\\ce{N2O5}$) merupakan padatan putih yang mudah menyublim dan terurai menjadi gas nitrogen dioksida yang berwarna cokelat kemerahan serta gas oksigen yang tidak berwarna menurut persamaan:
$$\\\\ce{2 N2O5(g) -> 4 NO2(g) + O2(g)}$$

Eksperimen dekomposisi termal dilakukan dalam suatu bejana kaku bervolume tetap $4.00\\\\text{ Liter}$ pada suhu konstan $45^\\\\circ\\\\text{C}$.  
Pada saat awal ($t = 0$), bejana diisi dengan $0.800\\\\text{ mol}$ gas $\\\\ce{N2O5}$. Setelah reaksi berlangsung selama $200\\\\text{ detik}$, sampel dianalisis dan tersisa $0.320\\\\text{ mol}$ gas $\\\\ce{N2O5}$.

---

### 🎯 Pertanyaan:
1. Hitung konsentrasi awal dan konsentrasi akhir gas $\\\\ce{N2O5}$ di dalam bejana!
2. Tentukan laju rata-rata penguraian gas $\\\\ce{N2O5}$ ($v_{\\\\ce{N2O5}}$) dalam selang waktu $200\\\\text{ detik}$ tersebut!
3. Tentukan laju rata-rata pembentukan gas $\\\\ce{NO2}$ ($v_{\\\\ce{NO2}}$) dan gas $\\\\ce{O2}$ ($v_{\\\\ce{O2}}$) menggunakan prinsip stoikiometri laju diferensial!
4. Berapakah total volume gas hasil reaksi ($\\\\ce{NO2}$ dan $\\\\ce{O2}$) yang terbentuk pada akhir $200\\\\text{ detik}$ jika diukur pada keadaan standar (STP, $0^\\\\circ\\\\text{C}, 1\\\\text{ atm}$)?

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Menghitung Konsentrasi Molar Gas $\\\\ce{N2O5}$
Karena volume bejana adalah $V = 4.00\\\\text{ L}$:
$$\\\\begin{aligned}
[\\\\ce{N2O5}]_0 &= \\\\frac{n_0}{V} = \\\\frac{0.800\\\\text{ mol}}{4.00\\\\text{ L}} = \\\\mathbf{0.200\\\\text{ M}} \\\\\\\\
[\\\\ce{N2O5}]_{200} &= \\\\frac{n_{200}}{V} = \\\\frac{0.320\\\\text{ mol}}{4.00\\\\text{ L}} = \\\\mathbf{0.080\\\\text{ M}}
\\\\end{aligned}$$

Perubahan konsentrasi:
$$\\\\Delta[\\\\ce{N2O5}] = [\\\\ce{N2O5}]_{200} - [\\\\ce{N2O5}]_0 = 0.080\\\\text{ M} - 0.200\\\\text{ M} = -0.120\\\\text{ M}$$

#### Langkah 2: Menghitung Laju Penguraian Gas $\\\\ce{N2O5}$
Sesuai definisi laju pengurangan reaktan:
$$\\\\begin{aligned}
v_{\\\\ce{N2O5}} &= -\\\\frac{\\\\Delta[\\\\ce{N2O5}]}{\\\\Delta t} \\\\\\\\
&= -\\\\frac{-0.120\\\\text{ M}}{200\\\\text{ detik}} \\\\\\\\
&= \\\\mathbf{+6.00 \\\\times 10^{-4}\\\\text{ M/detik}}
\\\\end{aligned}$$

#### Langkah 3: Menghitung Laju Pembentukan Produk Berdasarkan Koefisien
Hubungan kesetaraan laju reaksi diferensial:
$$v = -\\\\frac{1}{2} \\\\frac{\\\\Delta[\\\\ce{N2O5}]}{\\\\Delta t} = +\\\\frac{1}{4} \\\\frac{\\\\Delta[\\\\ce{NO2}]}{\\\\Delta t} = +\\\\frac{1}{1} \\\\frac{\\\\Delta[\\\\ce{O2}]}{\\\\Delta t}$$
Maka berlaku relasi:
$$\\\\frac{v_{\\\\ce{N2O5}}}{2} = \\\\frac{v_{\\\\ce{NO2}}}{4} = \\\\frac{v_{\\\\ce{O2}}}{1}$$

- **Laju Pembentukan $\\\\ce{NO2}$ ($v_{\\\\ce{NO2}}$):**
  $$v_{\\\\ce{NO2}} = \\\\frac{4}{2} \\\\times v_{\\\\ce{N2O5}} = 2 \\\\times (6.00 \\\\times 10^{-4}\\\\text{ M/s}) = \\\\mathbf{1.20 \\\\times 10^{-3}\\\\text{ M/detik}}$$
- **Laju Pembentukan $\\\\ce{O2}$ ($v_{\\\\ce{O2}}$):**
  $$v_{\\\\ce{O2}} = \\\\frac{1}{2} \\\\times v_{\\\\ce{N2O5}} = \\\\frac{1}{2} \\\\times (6.00 \\\\times 10^{-4}\\\\text{ M/s}) = \\\\mathbf{3.00 \\\\times 10^{-4}\\\\text{ M/detik}}$$

#### Langkah 4: Menghitung Volume Gas Produk pada Kondisi STP
Hitung mol $\\\\ce{N2O5}$ yang telah bereaksi (terurai):
$$n(\\\\ce{N2O5})_{\\\\text{bereaksi}} = 0.800\\\\text{ mol} - 0.320\\\\text{ mol} = 0.480\\\\text{ mol}$$

Gunakan perbandingan koefisien reaksi:
$$\\\\ce{2 N2O5(g) -> 4 NO2(g) + O2(g)}$$
- Mol $\\\\ce{NO2}$ terbentuk $= \\\\frac{4}{2} \\\\times 0.480\\\\text{ mol} = \\\\mathbf{0.960\\\\text{ mol}}$
- Mol $\\\\ce{O2}$ terbentuk $= \\\\frac{1}{2} \\\\times 0.480\\\\text{ mol} = \\\\mathbf{0.240\\\\text{ mol}}$
- Total mol gas produk $= 0.960\\\\text{ mol} + 0.240\\\\text{ mol} = \\\\mathbf{1.200\\\\text{ mol}}$

Volume gas total pada STP ($V_m = 22.4\\\\text{ L/mol}$):
$$V_{\\\\text{total (STP)}} = n_{\\\\text{total}} \\\\times 22.4\\\\text{ L/mol} = 1.200\\\\text{ mol} \\\\times 22.4\\\\text{ L/mol} = \\\\mathbf{26.88\\\\text{ Liter}}$$

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Tanda Negatif vs Nilai Laju:**  
> Siswa sering bingung mengapa pada formula terdapat tanda minus ($-d[R]/dt$).  
> - Karena konsentrasi reaktan selalu menyusut, selisih $\\\\Delta[R]$ pasti bernilai negatif.  
> - Agar nilai besaran fisika laju reaksi ($v$) selalu bernilai positif riil, dikalikan dengan tanda minus di depan: $-(-0.120) = +0.120$.  
> - Jangan pernah menuliskan nilai laju reaksi bertanda negatif!`,
    keyFormulas: [
      { name: 'Kesetaraan Laju Diferensial', formula: 'v = -\\frac{1}{a}\\frac{\\Delta[\\ce{A}]}{\\Delta t} = +\\frac{1}{c}\\frac{\\Delta[\\ce{C}]}{\\Delta t}' },
      { name: 'Perbandingan Laju Stoikiometri', formula: '\\frac{v_{\\ce{A}}}{a} = \\frac{v_{\\ce{B}}}{b} = \\frac{v_{\\ce{C}}}{c}' },
      { name: 'Volume Gas Ideal STP', formula: 'V_{\\text{STP}} = n \\times 22.4\\text{ L/mol}' },
    ],
  },
  {
    tag: 'contoh-analisis-faktor-laju-eksperimen',
    tags: ['faktor-konsentrasi', 'faktor-luas-permukaan', 'katalis-homogen-heterogen', 'tahap-penentu-laju-rds', 'kimia-sma'],
    title: 'Contoh Soal 5: Analisis Eksperimen Faktor Laju Reaksi: Bentuk Padatan, Konsentrasi, Suhu & Katalis (Level: Sulit / HOTS)',
    summary: 'Studi komparasi 5 variabel eksperimen pelarutan batu pualam CaCO3 dalam asam klorida, penentuan variabel bebas/terikat, dan evaluasi mikroskopis pengenceran vs katalis.',
    content: `### 📋 Skenario Masalah & Data Eksperimen:
Sekelompok siswa kelas 11 melakukan investigasi laboratorium untuk mempelajari faktor-faktor yang memengaruhi laju reaksi antara kalsium karbonat ($\\\\ce{CaCO3}$) dengan larutan asam klorida ($\\\\ce{HCl}$):
$$\\\\ce{CaCO3(s) + 2 HCl(aq) -> CaCl2(aq) + H2O(l) + CO2(g)}$$

Pada setiap percobaan digunakan $2.00\\\\text{ gram } \\\\ce{CaCO3}$ dan $50.0\\\\text{ mL}$ larutan $\\\\ce{HCl}$. Waktu yang dicatat adalah durasi hingga seluruh padatan $\\\\ce{CaCO3}$ habis bereaksi dan pembentukan gelembung gas $\\\\ce{CO2}$ berhenti total:

| Tabung | Bentuk Fisik $\\\\ce{CaCO3}$ ($2.00\\\\text{ g}$) | Konsentrasi $\\\\ce{HCl}$ (M) | Suhu ($^\\\\circ\\\\text{C}$) | Tambahan Zat Lain | Waktu Reaksi $t\\\\text{ (detik)}$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | Bongkahan padat | $1.0$ | $25$ | Tidak ada | $120$ |
| 2 | Butiran kerikil kecil | $1.0$ | $25$ | Tidak ada | $60$ |
| 3 | Serbuk halus | $1.0$ | $25$ | Tidak ada | $25$ |
| 4 | Serbuk halus | $2.0$ | $25$ | Tidak ada | $10$ |
| 5 | Serbuk halus | $2.0$ | $35$ | $1\\\\text{ tetes } \\\\ce{CuSO4(aq)}$ | $3$ |

---

### 🎯 Pertanyaan:
1. Berdasarkan data Tabung 1, 2, dan 3, faktor apakah yang diselidiki sebagai variabel bebas dan bagaimanakah pengaruhnya terhadap laju reaksi? Jelaskan mekanisme mikroskopisnya!
2. Jika seorang siswa ingin membuktikan secara valid bahwa peningkatan konsentrasi mempercepat laju reaksi, pasangan tabung percobaan manakah yang harus dibandingkan? Jelaskan alasannya!
3. Urutkan kelima tabung percobaan tersebut mulai dari laju reaksi yang paling lambat hingga laju reaksi yang paling cepat!
4. Jika ke dalam campuran Tabung 4 ditambahkan $50.0\\\\text{ mL}$ air murni (akuades) sebelum padatan $\\\\ce{CaCO3}$ dimasukkan, prediksikan apakah waktu reaksi akan lebih singkat atau lebih lama dari $10\\\\text{ detik}$! Jelaskan alasannya!
5. Sebutkan perbedaan fundamental mekanisme mikroskopis antara percepatan laju akibat **memperluas permukaan padatan** dibandingkan dengan **penambahan katalis**!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Analisis Percobaan 1, 2, dan 3 (Faktor Luas Permukaan)
- **Variabel Bebas:** Bentuk fisik padatan $\\\\ce{CaCO3}$ (bongkahan $\\\\to$ butiran $\\\\to$ serbuk halus).  
- **Variabel Kontrol:** Konsentrasi $\\\\ce{HCl}$ ($1.0\\\\text{ M}$), suhu ($25^\\\\circ\\\\text{C}$), massa $\\\\ce{CaCO3}$ ($2.00\\\\text{ g}$), dan volume larutan ($50.0\\\\text{ mL}$).
- **Pengaruh:** Waktu reaksi memendek drastis dari $120\\\\text{ s} \\\\to 60\\\\text{ s} \\\\to 25\\\\text{ s}$, menandakan **laju reaksi meningkat secara signifikan**.
- **Mekanisme Mikroskopis:** Pada padatan berbentuk serbuk halus, total luas bidang permukaan kontak per gram zat jauh lebih luas dibandingkan bongkahan. Akibatnya, jauh lebih banyak partikel $\\\\ce{CaCO3}$ di lapisan permukaan luar yang terpapar langsung dan dapat bertumbukan dengan ion hidronium $\\\\ce{H3O+}$ dari asam dalam satu satuan waktu (frekuensi tumbukan total meningkat).

#### Langkah 2: Mengisolasi Variabel Konsentrasi
Untuk menguji pengaruh konsentrasi secara adil (*fair test*), hanya konsentrasi $\\\\ce{HCl}$ yang boleh berbeda, sedangkan semua parameter lain wajib seragam:
- Bandingkan **Tabung 3 dan Tabung 4**.
- Pada kedua tabung: bentuk padatan sama (keduanya serbuk halus), suhu sama ($25^\\\\circ\\\\text{C}$), dan tidak ada katalis.
- Satu-satunya variabel yang diubah adalah konsentrasi $\\\\ce{HCl}$, yaitu naik dari $1.0\\\\text{ M}$ (Tabung 3) menjadi $2.0\\\\text{ M}$ (Tabung 4), yang terbukti mempercepat reaksi dari $25\\\\text{ detik}$ menjadi $10\\\\text{ detik}$.

#### Langkah 3: Mengurutkan Laju Reaksi
Ingat bahwa laju reaksi berbanding terbalik dengan waktu reaksi:
$$v \\\\propto \\\\frac{1}{t}$$
Waktu terlama berarti laju paling lambat, dan waktu tersingkat berarti laju paling cepat:
- Tabung 1: $t = 120\\\\text{ s} \\\\implies v_1 \\\\propto \\\\frac{1}{120}$ (Paling Lambat)
- Tabung 2: $t = 60\\\\text{ s} \\\\implies v_2 \\\\propto \\\\frac{1}{60}$
- Tabung 3: $t = 25\\\\text{ s} \\\\implies v_3 \\\\propto \\\\frac{1}{25}$
- Tabung 4: $t = 10\\\\text{ s} \\\\implies v_4 \\\\propto \\\\frac{1}{10}$
- Tabung 5: $t = 3\\\\text{ s} \\\\implies v_5 \\\\propto \\\\frac{1}{3}$ (Paling Cepat)

$$\\\\mathbf{\\\\text{Urutan Laju: } \\\\text{Tabung 1} < \\\\text{Tabung 2} < \\\\text{Tabung 3} < \\\\text{Tabung 4} < \\\\text{Tabung 5}}$$

#### Langkah 4: Dampak Penambahan Air Murni (Pengenceran)
Penambahan $50.0\\\\text{ mL}$ akuades menyebabkan volume larutan meningkat menjadi $100.0\\\\text{ mL}$ (dua kali lipat):
$$M_2 = \\\\frac{M_1 \\\\times V_1}{V_2} = \\\\frac{2.0\\\\text{ M} \\\\times 50.0\\\\text{ mL}}{100.0\\\\text{ mL}} = 1.0\\\\text{ M}$$
- Molaritas ion $\\\\ce{H+}$ berkurang dari $2.0\\\\text{ M}$ menjadi $1.0\\\\text{ M}$.
- Kerapatan ion asam per satuan volume larutan menurun, sehingga frekuensi tumbukan efektif antara ion $\\\\ce{H+}$ dengan permukaan serbuk $\\\\ce{CaCO3}$ menurun.
- **Prediksi:** Laju reaksi melambat, sehingga waktu reaksi akan **LEBIH LAMA dari $10\\\\text{ detik}$** (mendekati waktu pada Tabung 3 yaitu sekitar $25\\\\text{ detik}$).

#### Langkah 5: Perbedaan Fundamental Luas Permukaan vs Katalis
1. **Luas Permukaan Bidang Sentuh:**  
   - Bekerja secara fisik murni dengan cara **memperbanyak jumlah titik kontak tumbukan** antarmolekul per detik.  
   - Nilai energi aktivasi ($E_a$) reaksi sama sekali **TIDAK BERUBAH**.
2. **Katalis Kimiawi:**  
   - Bekerja secara mekanistik kimiawi dengan cara **menurunkan ambang batas energi aktivasi ($E_a$)** melalui pembentukan spesi kompleks teraktivasi alternatif berenergi lebih rendah.  
   - Jumlah area kontak fisik tidak berubah, namun fraksi tumbukan yang berhasil melampaui $E_a$ meningkat drastis.

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Trik Mengendalikan Variabel Eksperimen:**  
> Ketika menjumpai tabel data eksperimen multi-tabung di ujian UTBK/Sekolah:  
> 1. Cari dua baris percobaan di mana **hanya ada TEPAT SATU kolom yang berbeda nilainya**. Baris itulah yang digunakan untuk menarik kesimpulan valid mengenai pengaruh faktor tersebut.  
> 2. Tabung 5 pada soal di atas mengubah dua faktor sekaligus dibandingkan Tabung 4 (suhu naik menjadi $35^\\\\circ\\\\text{C}$ DAN ditambahkan katalis $\\\\ce{CuSO4}$). Tabung 5 mendemonstrasikan laju tercepat ($3\\\\text{ s}$), tetapi tidak dapat digunakan secara mandiri untuk mengisolasi efek tunggal katalis tanpa adanya tabung kontrol bersuhu $35^\\\\circ\\\\text{C}$ tanpa katalis!`,
    keyFormulas: [
      { name: 'Relasi Laju dan Waktu', formula: 'v \\propto \\frac{1}{t}' },
      { name: 'Rumus Pengenceran', formula: 'M_1 \\times V_1 = M_2 \\times V_2' },
      { name: 'Prinsip Uji Terkontrol', formula: '\\text{Variabel Manipulasi tunggal, variabel lain konstan}' },
    ],
  },
];
