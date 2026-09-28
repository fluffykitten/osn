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

// ============================================================================
// TOPIK 108: Kesetimbangan Kimia Dasar SMA (Dinamika, Kc, Kp & Le Chatelier)
// ============================================================================
export const WORKED_EXAMPLES_TOPIC_108: ConceptBlock[] = [
  {
    tag: 'contoh-perhitungan-kc-gas-homogen-mbs',
    tags: ['tetapan-kesetimbangan-kc', 'tabel-mbs', 'kesetimbangan-homogen', 'gas-so2-so3', 'kimia-sma'],
    title: 'Contoh Soal 1: Perhitungan Nilai Kc Sistem Gas Homogen via Tabel M-B-S & Analisis Volume Bejana (Level: Sedang)',
    summary: 'Penerapan tabel M-B-S kuantitatif pada sintesis belerang trioksida dalam Proses Kontak, perhitungan molaritas setimbang, dan evaluasi ketergantungan volume wadah.',
    content: `### 📋 Skenario Masalah & Data Eksperimen:
Dalam proses pembuatan asam sulfat komersial (Proses Kontak), salah satu tahapan krusial adalah oksidasi eksotermik gas belerang dioksida ($\\\\ce{SO2}$) menjadi gas belerang trioksida ($\\\\ce{SO3}$):
$$\\\\ce{2 SO2(g) + O2(g) <=> 2 SO3(g)}$$

Ke dalam sebuah bejana reaktor kaku bervolume tetap $2.00\\\\text{ Liter}$ pada temperatur $450^\\\\circ\\\\text{C}$, dimasukkan $0.600\\\\text{ mol}$ gas $\\\\ce{SO2}$ dan $0.400\\\\text{ mol}$ gas $\\\\ce{O2}$. Setelah campuran gas dibiarkan bereaksi hingga mencapai kesetimbangan kimia dinamis, hasil analisis spektroskopi menunjukkan terbentuk $0.400\\\\text{ mol}$ gas $\\\\ce{SO3}$.

---

### 🎯 Pertanyaan:
1. Susunlah tabel M-B-S (Mula-mula, Bereaksi, Setimbang) dan hitung jumlah mol masing-masing gas pada saat kesetimbangan!
2. Hitung konsentrasi molar ($[\\\\text{M}]$) dari setiap komponen gas pada keadaan setimbang!
3. Tentukan nilai tetapan kesetimbangan konsentrasi ($K_c$) reaksi tersebut pada temperatur $450^\\\\circ\\\\text{C}$!
4. Apakah untuk reaksi ini nilai $K_c$ dapat langsung dihitung menggunakan jumlah mol tanpa membaginya dengan volume bejana ($V$)? Buktikan secara analitis aljabar!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Menyusun Tabel Stoikiometri M-B-S
Persamaan reaksi setara: $\\\\ce{2 SO2(g) + O2(g) <=> 2 SO3(g)}$  
- Mol mula-mula: $n_0(\\\\ce{SO2}) = 0.600\\\\text{ mol}$, $n_0(\\\\ce{O2}) = 0.400\\\\text{ mol}$, $n_0(\\\\ce{SO3}) = 0\\\\text{ mol}$.
- Diketahui pada saat setimbang terbentuk $\\\\ce{SO3}$ sebesar $+0.400\\\\text{ mol}$.

Berdasarkan perbandingan koefisien reaksi ($2 : 1 : 2$):
- Mol $\\\\ce{SO2}$ yang bereaksi $= \\\\frac{2}{2} \\\\times 0.400\\\\text{ mol} = 0.400\\\\text{ mol}$.
- Mol $\\\\ce{O2}$ yang bereaksi $= \\\\frac{1}{2} \\\\times 0.400\\\\text{ mol} = 0.200\\\\text{ mol}$.

Tabel Stoikiometri Mol:
| Komponen | $\\\\ce{2 SO2(g)}$ | $\\\\ce{O2(g)}$ | $\\\\ce{2 SO3(g)}$ |
| :--- | :---: | :---: | :---: |
| **Mula-mula (M)** | $0.600\\\\text{ mol}$ | $0.400\\\\text{ mol}$ | $0\\\\text{ mol}$ |
| **Bereaksi (B)** | $-0.400\\\\text{ mol}$ | $-0.200\\\\text{ mol}$ | $+0.400\\\\text{ mol}$ |
| **Setimbang (S)** | $\\\\mathbf{0.200\\\\text{ mol}}$ | $\\\\mathbf{0.200\\\\text{ mol}}$ | $\\\\mathbf{0.400\\\\text{ mol}}$ |

#### Langkah 2: Menghitung Konsentrasi Molar Setimbang ($V = 2.00\\\\text{ L}$)
$$\\\\begin{aligned}
[\\\\ce{SO2}] &= \\\\frac{n}{V} = \\\\frac{0.200\\\\text{ mol}}{2.00\\\\text{ L}} = \\\\mathbf{0.100\\\\text{ M}} \\\\\\\\
[\\\\ce{O2}] &= \\\\frac{n}{V} = \\\\frac{0.200\\\\text{ mol}}{2.00\\\\text{ L}} = \\\\mathbf{0.100\\\\text{ M}} \\\\\\\\
[\\\\ce{SO3}] &= \\\\frac{n}{V} = \\\\frac{0.400\\\\text{ mol}}{2.00\\\\text{ L}} = \\\\mathbf{0.200\\\\text{ M}}
\\\\end{aligned}$$

#### Langkah 3: Menghitung Nilai Tetapan $K_c$
Tuliskan ekspresi hukum aksi massa:
$$K_c = \\\\frac{[\\\\ce{SO3}]^2}{[\\\\ce{SO2}]^2 [\\\\ce{O2}]}$$

Substitusikan nilai konsentrasi molar setimbang:
$$K_c = \\\\frac{(0.200)^2}{(0.100)^2 \\\\times (0.100)} = \\\\frac{0.0400}{0.0100 \\\\times 0.100} = \\\\frac{0.0400}{0.00100} = \\\\mathbf{40.0}$$

#### Langkah 4: Analisis Ketergantungan Volume Bejana
Hitung nilai $\\\\Delta n$:
$$\\\\Delta n = \\\\sum \\\\text{koef gas produk} - \\\\sum \\\\text{koef gas reaktan} = 2 - (2 + 1) = 2 - 3 = \\\\mathbf{-1}$$

Tinjau ekspresi aljabar berbasis mol ($n$) dan volume ($V$):
$$K_c = \\\\frac{\\\\left(\\\\frac{n_{\\\\ce{SO3}}}{V}\\\\right)^2}{\\\\left(\\\\frac{n_{\\\\ce{SO2}}}{V}\\\\right)^2 \\\\left(\\\\frac{n_{\\\\ce{O2}}}{V}\\\\right)} = \\\\frac{\\\\frac{(n_{\\\\ce{SO3}})^2}{V^2}}{\\\\frac{(n_{\\\\ce{SO2}})^2 \\\\cdot n_{\\\\ce{O2}}}{V^3}} = \\\\frac{(n_{\\\\ce{SO3}})^2}{(n_{\\\\ce{SO2}})^2 \\\\cdot n_{\\\\ce{O2}}} \\\\times \\\\mathbf{V}$$

Karena $\\\\Delta n \\\\ne 0$, faktor volume ($V$) **TIDAK SALING MENIADAKAN** (tersisa faktor pengali $V = 2.00$ di pembilang).  
Jika siswa langsung menghitung tanpa membagi volume:
$$K_{\\\\text{salah}} = \\\\frac{(0.400)^2}{(0.200)^2 \\\\times 0.200} = 20.0 \\\\quad (\\\\text{Galat 50%!})$$
**Kesimpulan:** Pembagian dengan volume bejana adalah langkah mutlak yang tidak boleh diabaikan kecuali pada reaksi dengan $\\\\Delta n = 0$.

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Trik Hemat Waktu Ujian (Kapan Volume Boleh Diabaikan?):**  
> - Jika $\\\\mathbf{\\\\Delta n = 0}$ (misal $\\\\ce{H2 + I2 <=> 2 HI}$ di mana $1+1 = 2$), volume bejana ($V$) pasti saling mencoret habis. Pada tipe soal ini, Anda boleh langsung memasukkan angka mol setimbang ke rumus $K_c$ tanpa membaginya dengan volume wadah!  
> - Jika $\\\\mathbf{\\\\Delta n \\\\ne 0}$ (seperti pada reaksi $\\\\ce{SO2 + O2 <=> SO3}$ atau sintesis amonia $\\\\ce{N2 + 3 H2 <=> 2 NH3}$), Anda **WAJIB** membagi setiap mol dengan volume bejana terlebih dahulu!`,
    keyFormulas: [
      { name: 'Rumus Kc Homogen', formula: 'K_c = \\frac{[\\ce{SO3}]^2}{[\\ce{SO2}]^2 [\\ce{O2}]}' },
      { name: 'Definisi Molaritas Setimbang', formula: '[M] = \\frac{n_{\\text{setimbang}}}{V_{\\text{wadah}}}' },
      { name: 'Kriteria Eliminasi Volume', formula: '\\Delta n = \\sum n_{\\text{kanan}} - \\sum n_{\\text{kiri}} = 0' },
    ],
  },
  {
    tag: 'contoh-kesetimbangan-heterogen-kp-nh4hs',
    tags: ['tetapan-kesetimbangan-kp', 'kesetimbangan-heterogen', 'relasi-kp-kc', 'tekanan-parsial', 'kimia-sma'],
    title: 'Contoh Soal 2: Kesetimbangan Heterogen Dekomposisi Padatan, Penentuan Kp & Relasi Kp = Kc(RT)^Δn (Level: Sedang)',
    summary: 'Perhitungan tekanan parsial gas amonia dan hidrogen sulfida dari tekanan total, penentuan Kp heterogen padat-gas, serta konversi akurat ke Kc.',
    content: `### 📋 Skenario Masalah & Data Eksperimen:
Amonium hidrogensulfida ($\\\\ce{NH4HS}$) merupakan padatan kristal putih yang mudah menyublim dan terurai secara reversibel membentuk gas amonia dan gas hidrogen sulfida menurut persamaan kesetimbangan heterogen:
$$\\\\ce{NH4HS(s) <=> NH3(g) + H2S(g)}$$

Pada temperatur kamar $25^\\\\circ\\\\text{C}$ ($298.15\\\\text{ K}$), sejumlah sampel padatan $\\\\ce{NH4HS}$ murni dimasukkan ke dalam suatu labu hampa udara tertutup. Setelah sistem mencapai keadaan setimbang, manometer mencatat tekanan total gas di dalam bejana sebesar $P_{\\\\text{total}} = 0.800\\\\text{ atm}$.

---

### 🎯 Pertanyaan:
1. Hitung tekanan parsial gas amonia ($P_{\\\\ce{NH3}}$) dan gas hidrogen sulfida ($P_{\\\\ce{H2S}}$) pada keadaan setimbang!
2. Tentukan nilai tetapan kesetimbangan tekanan ($K_p$) reaksi dekomposisi tersebut pada suhu $25^\\\\circ\\\\text{C}$!
3. Hitung nilai tetapan kesetimbangan konsentrasi ($K_c$) pada temperatur yang sama ($R = 0.08206\\\\text{ L}\\\\cdot\\\\text{atm}/(\\\\text{mol}\\\\cdot\\\\text{K})$)!
4. Jika ke dalam bejana tersebut ditambahkan lagi $5.00\\\\text{ gram}$ padatan kristal $\\\\ce{NH4HS(s)}$, apakah tekanan total gas di dalam bejana akan meningkat? Jelaskan berdasarkan konsep aktivitas zat padat murni!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Menghitung Tekanan Parsial Gas ($P_{\\\\ce{NH3}}$ dan $P_{\\\\ce{H2S}}$)
1. Karena bejana awalnya hampa udara, seluruh partikel gas yang berada di dalam bejana murni berasal dari dekomposisi padatan $\\\\ce{NH4HS(s)}$.
2. Menurut koefisien reaksi setara:
   $$\\\\ce{1 NH4HS(s) <=> 1 NH3(g) + 1 H2S(g)}$$
   Setiap $1\\\\text{ mol } \\\\ce{NH4HS}$ yang terurai menghasilkan jumlah mol gas $\\\\ce{NH3}$ dan gas $\\\\ce{H2S}$ yang tepat sama ($n_{\\\\ce{NH3}} = n_{\\\\ce{H2S}}$).
3. Berdasarkan **Hukum Tekanan Parsial Dalton**:
   $$P_{\\\\text{total}} = P_{\\\\ce{NH3}} + P_{\\\\ce{H2S}}$$
   Karena $P_{\\\\ce{NH3}} = P_{\\\\ce{H2S}} = P$, maka:
   $$2 P = 0.800\\\\text{ atm} \\\\implies P_{\\\\ce{NH3}} = P_{\\\\ce{H2S}} = \\\\frac{0.800\\\\text{ atm}}{2} = \\\\mathbf{0.400\\\\text{ atm}}$$

#### Langkah 2: Menghitung Nilai Tetapan $K_p$
Zat padat murni ($\\\\ce{NH4HS(s)}$) memiliki aktivitas konstan ($= 1$) sehingga tidak dimasukkan ke dalam ekspresi tetapan kesetimbangan:
$$K_p = P_{\\\\ce{NH3}} \\\\times P_{\\\\ce{H2S}}$$
$$K_p = (0.400) \\\\times (0.400) = \\\\mathbf{0.160}$$

#### Langkah 3: Menghitung Nilai $K_c$ via Formula Universal Relasi Termodinamika
Gunakan formula relasi:
$$K_p = K_c (R \\\\cdot T)^{\\\\Delta n} \\\\implies K_c = \\\\frac{K_p}{(R \\\\cdot T)^{\\\\Delta n}}$$

Identifikasi variabel:
- Selisih koefisien fasa gas: $\\\\Delta n = (1 + 1) - 0 = \\\\mathbf{2}$ (padatan $\\\\ce{NH4HS}$ tidak dihitung!).
- Temperatur mutlak: $T = 25 + 273.15 = \\\\mathbf{298.15\\\\text{ K}}$.
- Faktor $R T = (0.08206\\\\text{ L}\\\\cdot\\\\text{atm}/(\\\\text{mol}\\\\cdot\\\\text{K})) \\\\times 298.15\\\\text{ K} = 24.466\\\\text{ L}\\\\cdot\\\\text{atm/mol}$.
- $(R T)^2 = (24.466)^2 = 598.59$.

Substitusikan ke rumus:
$$K_c = \\\\frac{0.160}{598.59} = \\\\mathbf{2.67 \\\\times 10^{-4}}$$

#### Langkah 4: Evaluasi Penambahan Kristal Padatan $\\\\ce{NH4HS(s)}$
- Penambahan padatan kristal murni $\\\\ce{NH4HS(s)}$ **SAMA SEKALI TIDAK MENGUBAH tekanan total gas setimbang**.
- **Alasan Ilmiah:** Tetapan kesetimbangan $K_p = P_{\\\\ce{NH3}} \\\\times P_{\\\\ce{H2S}} = 0.160$ hanya bergantung pada temperatur. Selama suhu dijaga konstan pada $25^\\\\circ\\\\text{C}$, nilai hasil kali tekanan parsial kedua gas terkunci pada angka $0.160$. Karena padatan murni tidak memiliki konsentrasi molar bebas yang dapat menekan sistem, posisi kesetimbangan tidak bergeser sama sekali.

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Jebakan Fasa Zat Heterogen:**  
> - Ketika menghitung $\\\\Delta n$ untuk konversi $K_p \\\\iff K_c$, **hanya hitung koefisien spesi berfasa gas ($g$)**! Jangan pernah memasukkan koefisien padatan ($s$) atau cairan murni ($l$).  
> - Menambahkan atau mengurangi padatan murni ($s$) selama padatan tersebut masih ada di dalam wadah tidak akan pernah menggeser kesetimbangan kimia!`,
    keyFormulas: [
      { name: 'Rumus Kp Heterogen', formula: 'K_p = P_{\\ce{NH3}} \\times P_{\\ce{H2S}}' },
      { name: 'Relasi Kp dan Kc', formula: 'K_p = K_c (R \\cdot T)^{\\Delta n}' },
      { name: 'Hukum Tekanan Dalton', formula: 'P_{\\text{total}} = \\sum P_i' },
    ],
  },
  {
    tag: 'contoh-manipulasi-aljabar-kombinasi-k',
    tags: ['aljabar-kesetimbangan', 'pembalikan-reaksi-k', 'perkalian-koefisien-k', 'penjumlahan-reaksi-k', 'kimia-sma'],
    title: 'Contoh Soal 3: Manipulasi Aljabar Tetapan Kesetimbangan Multi-Tahap (Metode Kombinasi K) (Level: Sulit / HOTS)',
    summary: 'Penentuan nilai K reaksi target melalui pembalikan reaksi, perkalian faktor koefisien, dan penggabungan konstanta kesetimbangan bertahap.',
    content: `### 📋 Skenario Masalah & Data Eksperimen:
Dalam studi kinetika dan termodinamika gas industri pada temperatur tinggi $1000\\\\text{ K}$, diketahui data tetapan kesetimbangan untuk dua reaksi perantara berikut:

1. **Reaksi 1:**  
   $$\\\\ce{2 H2O(g) <=> 2 H2(g) + O2(g)} \\\\quad K_1 = 4.0 \\\\times 10^{-10}$$
2. **Reaksi 2:**  
   $$\\\\ce{2 CO2(g) <=> 2 CO(g) + O2(g)} \\\\quad K_2 = 1.6 \\\\times 10^{-11}$$

---

### 🎯 Pertanyaan:
1. Tentukan nilai tetapan kesetimbangan ($K_{\\\\text{target}}$) pada suhu $1000\\\\text{ K}$ untuk reaksi pergeseran gas air (*Water-Gas Shift Reaction*):
   $$\\\\ce{CO(g) + H2O(g) <=> CO2(g) + H2(g)}$$
2. Buktikan apakah untuk reaksi target tersebut nilai $K_p$ sama dengan $K_c$!
3. Jelaskan perbedaan prinsip fundamental antara manipulasi aljabar termokimia (Hukum Hess) dengan manipulasi aljabar tetapan kesetimbangan kimia ($K$)!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Merancang Aljabar Reaksi Menuju Reaksi Target
Target yang ingin dicapai:
$$\\\\ce{CO(g) + H2O(g) <=> CO2(g) + H2(g)} \\\\quad K_{\\\\text{target}} = ?$$

Mari kita analisis posisi dan koefisien zat target dari kedua reaksi perantara yang diketahui:

1. **Spesi $\\\\ce{H2O(g)}$ dan $\\\\ce{H2(g)}$:**  
   - Berasal dari **Reaksi 1**.  
   - Pada Reaksi 1, $\\\\ce{H2O}$ sudah berada di ruas kiri dan $\\\\ce{H2}$ di ruas kanan (arah sudah tepat).  
   - Namun koefisien pada Reaksi 1 adalah $2$, sedangkan pada reaksi target koefisiennya adalah $1$.  
   - Maka Reaksi 1 harus **dikalikan faktor $\\\\frac{1}{2}$ (dibagi 2)**:
     $$\\\\ce{H2O(g) <=> H2(g) + 1/2 O2(g)} \\\\quad K'_1 = (K_1)^{1/2} = \\\\sqrt{K_1}$$
     $$K'_1 = \\\\sqrt{4.0 \\\\times 10^{-10}} = \\\\mathbf{2.0 \\\\times 10^{-5}}$$

2. **Spesi $\\\\ce{CO(g)}$ dan $\\\\ce{CO2(g)}$:**  
   - Berasal dari **Reaksi 2**.  
   - Pada reaksi target, $\\\\ce{CO}$ berada di ruas kiri dan $\\\\ce{CO2}$ di ruas kanan (berlawanan dengan Reaksi 2).  
   - Maka Reaksi 2 harus **dibalik arahnya** dan **dikalikan faktor $\\\\frac{1}{2}$**:
     $$\\\\ce{CO(g) + 1/2 O2(g) <=> CO2(g)} \\\\quad K'_2 = \\\\left(\\\\frac{1}{K_2}\\\\right)^{1/2} = \\\\frac{1}{\\\\sqrt{K_2}}$$
     $$K'_2 = \\\\frac{1}{\\\\sqrt{1.6 \\\\times 10^{-11}}} = \\\\frac{1}{\\\\sqrt{16 \\\\times 10^{-12}}} = \\\\frac{1}{4.0 \\\\times 10^{-6}} = \\\\mathbf{2.5 \\\\times 10^5}$$

3. **Penjumlahan Kedua Reaksi:**
   $$\\\\begin{aligned}
   \\\\ce{H2O(g) &<=> H2(g) + 1/2 O2(g)} && K'_1 = 2.0 \\\\times 10^{-5} \\\\\\\\
   \\\\ce{CO(g) + 1/2 O2(g) &<=> CO2(g)} && K'_2 = 2.5 \\\\times 10^5 \\\\\\\\
   \\\\hline
   \\\\ce{CO(g) + H2O(g) &<=> CO2(g) + H2(g)} && K_{\\\\text{target}} = K'_1 \\\\times K'_2
   \\\\end{aligned}$$
   *(Spesi $\\\\ce{1/2 O2(g)}$ di kedua ruas saling menghilangkan).*

4. **Kalkulasi Nilai $K_{\\\\text{target}}$:**
   $$K_{\\\\text{target}} = K'_1 \\\\times K'_2 = (2.0 \\\\times 10^{-5}) \\\\times (2.5 \\\\times 10^5) = \\\\mathbf{5.0}$$

#### Langkah 2: Pembuktian Hubungan $K_p$ dan $K_c$ pada Reaksi Target
Tinjau jumlah koefisien fasa gas pada reaksi target:
$$\\\\Delta n = \\\\sum \\\\text{koef produk gas} - \\\\sum \\\\text{koef reaktan gas} = (1 + 1) - (1 + 1) = 2 - 2 = \\\\mathbf{0}$$
Gunakan relasi $K_p = K_c (R T)^{\\\\Delta n}$:
$$K_p = K_c (R T)^0 = K_c \\\\times 1 = \\\\mathbf{K_c = 5.0}$$
Terbukti bahwa nilai $K_p = K_c = 5.0$.

#### Langkah 3: Perbedaan Fundamental Hess vs Aljabar Kesetimbangan
- **Termokimia (Hukum Hess - $\\\\Delta H$):** Bersifat **aditif-linier**. Reaksi dibalik $\\\\implies$ tanda berubah ($- \\\\Delta H$). Reaksi dikali $n$ $\\\\implies$ nilai dikali ($n \\\\cdot \\\\Delta H$). Reaksi dijumlahkan $\\\\implies$ nilai dijumlahkan ($\\\\sum \\\\Delta H$).
- **Kesetimbangan Kimia (Tetapan $K$):** Bersifat **multiplikatif-eksponensial**. Reaksi dibalik $\\\\implies$ nilai diinverskan ($1/K$). Reaksi dikali $n$ $\\\\implies$ nilai dipangkatkan ($K^n$). Reaksi dijumlahkan $\\\\implies$ nilai dikalikan ($K_1 \\\\times K_2$).

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Trik Mencegah Tertukar:**  
> - Jangan pernah mengalikan nilai $K$ dengan angka koefisien! Jika reaksi dikali 2, nilai $K$ **BUKAN** menjadi $2K$, melainkan **$K^2$**!  
> - Jika reaksi dibagi 2, nilai $K$ menjadi **$\\\\sqrt{K}$**.  
> - Jika reaksi dijumlahkan, nilai $K$ **DIKALIKAN**, bukan ditambah!`,
    keyFormulas: [
      { name: 'Pembalikan Reaksi', formula: 'K_{\\text{baru}} = \\frac{1}{K_{\\text{lama}}}' },
      { name: 'Perkalian Koefisien n', formula: 'K_{\\text{baru}} = (K_{\\text{lama}})^n' },
      { name: 'Penjumlahan Reaksi Bertahap', formula: 'K_{\\text{total}} = K_1 \\times K_2' },
    ],
  },
  {
    tag: 'contoh-kuosien-reaksi-dan-le-chatelier-haber-bosch',
    tags: ['kuosien-reaksi-q', 'azas-le-chatelier', 'prediksi-arah-reaksi', 'faktor-pergeseran-kesetimbangan', 'proses-haber-bosch', 'kimia-sma'],
    title: 'Contoh Soal 4: Evaluasi Kuosien Reaksi (Q), Prediksi Arah Spontanitas & Asas Le Chatelier pada Sintesis Amonia (Level: Sulit / HOTS)',
    summary: 'Evaluasi kuantitatif kuosien reaksi Q vs Kc untuk memprediksi arah pergeseran spontan, serta analisis Asas Le Chatelier pada variasi temperatur, kompresi volume, dan gas inert.',
    content: `### 📋 Skenario Masalah & Data Eksperimen:
Proses sintesis gas amonia Haber-Bosch merupakan fondasi utama industri pupuk nitrogen dunia:
$$\\\\ce{N2(g) + 3 H2(g) <=> 2 NH3(g)} \\\\quad \\\\Delta H = -92.4\\\\text{ kJ}$$
Pada temperatur operasional $400^\\\\circ\\\\text{C}$, nilai tetapan kesetimbangan konsentrasi adalah $K_c = 0.500$.  
Ke dalam sebuah reaktor tertutup berkapasitas $2.00\\\\text{ Liter}$ pada suhu $400^\\\\circ\\\\text{C}$, diinjeksikan campuran gas dengan komposisi awal:
- Jumlah mol gas nitrogen ($n_{\\\\ce{N2}}$) $= 0.400\\\\text{ mol}$
- Jumlah mol gas hidrogen ($n_{\\\\ce{H2}}$) $= 0.200\\\\text{ mol}$
- Jumlah mol gas amonia ($n_{\\\\ce{NH3}}$) $= 0.400\\\\text{ mol}$

---

### 🎯 Pertanyaan:
1. Hitung konsentrasi molar masing-masing gas di dalam reaktor dan tentukan nilai kuosien reaksi ($Q_c$)!
2. Apakah campuran gas tersebut sudah berada dalam keadaan setimbang? Jika belum, ramalkan ke arah mana reaksi akan bergeser secara spontan untuk mencapai kesetimbangan dinamis!
3. Berdasarkan Asas Le Chatelier, ramalkan arah pergeseran kesetimbangan dan perubahan nilai $K_c$ jika:
   a) Temperatur reaktor dinaikkan menjadi $500^\\\\circ\\\\text{C}$.  
   b) Volume reaktor diperkecil dari $2.00\\\\text{ Liter}$ menjadi $1.00\\\\text{ Liter}$ (kompresi tekanan tinggi).  
   c) Ditambahkan gas Helium (gas mulia inert) pada volume wadah yang dijaga tetap.  
   d) Ditambahkan serbuk katalis besi ($\\\\ce{Fe}$) ke dalam reaktor.

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Menghitung Konsentrasi Molar Awal & Nilai $Q_c$
Volume reaktor $V = 2.00\\\\text{ Liter}$:
$$\\\\begin{aligned}
[\\\\ce{N2}] &= \\\\frac{0.400\\\\text{ mol}}{2.00\\\\text{ L}} = \\\\mathbf{0.200\\\\text{ M}} \\\\\\\\
[\\\\ce{H2}] &= \\\\frac{0.200\\\\text{ mol}}{2.00\\\\text{ L}} = \\\\mathbf{0.100\\\\text{ M}} \\\\\\\\
[\\\\ce{NH3}] &= \\\\frac{0.400\\\\text{ mol}}{2.00\\\\text{ L}} = \\\\mathbf{0.200\\\\text{ M}}
\\\\end{aligned}$$

Ekspresi kuosien reaksi:
$$Q_c = \\\\frac{[\\\\ce{NH3}]^2}{[\\\\ce{N2}] [\\\\ce{H2}]^3}$$
Substitusikan nilai konsentrasi sesaat:
$$Q_c = \\\\frac{(0.200)^2}{(0.200) \\\\times (0.100)^3} = \\\\frac{0.0400}{0.200 \\\\times 0.00100} = \\\\frac{0.0400}{0.000200} = \\\\mathbf{200}$$

#### Langkah 2: Membandingkan $Q_c$ dengan $K_c$ & Memprediksi Arah Pergeseran
Bandingkan nilai kuosien dengan tetapan kesetimbangan:
$$Q_c = 200 \\\\quad \\\\text{dan} \\\\quad K_c = 0.500 \\\\implies \\\\mathbf{Q_c \\\\gg K_c}$$
- Karena $Q_c > K_c$, campuran gas **BELUM SETIMBANG**.
- Nilai pembilang ($[\\\\ce{NH3}]$) saat ini **terlalu berlebih** dibandingkan rasio setimbangnya.
- Agar nilai $Q_c$ menurun hingga mencapai nilai $K_c = 0.500$, sebagian amonia ($\\\\ce{NH3}$) harus terurai kembali menjadi $\\\\ce{N2}$ dan $\\\\ce{H2}$.
- **Arah Pergeseran:** Reaksi akan bergeser secara spontan **KE ARAH KIRI (ke arah reaktan / pembentukan $\\\\ce{N2}$ dan $\\\\ce{H2}$)**.

#### Langkah 3: Analisis Asas Le Chatelier terhadap Gangguan Sistem

1. **Temperatur Dinaikkan Menjadi $500^\\\\circ\\\\text{C}$:**
   - Reaksi sintesis amonia ke kanan bersifat **eksotermik** ($\\\\Delta H = -92.4\\\\text{ kJ} < 0$).
   - Pemanasan memaksa sistem menyerap kalor dengan bergeser ke arah **endotermik (KE KIRI)**.
   - Dampak: Pembentukan amonia berkurang dan **nilai numerik $K_c$ MENURUN**.

2. **Volume Diperkecil Menjadi $1.00\\\\text{ L}$ (Tekanan Diperbesar):**
   - Hitung koefisien fasa gas: Ruas kiri $= 1 + 3 = 4\\\\text{ mol gas}$; Ruas kanan $= 2\\\\text{ mol gas}$.
   - Pengecilan volume meningkatkan kerapatan molekul. Sistem merespon dengan mengurangi tekanan partikel melalui pergeseran ke arah **koefisien gas terkecil (KE KANAN)**.
   - Dampak: Hasil rendemen amonia meningkat drastis. **Nilai $K_c$ TETAP** (tidak berubah karena suhu tetap).

3. **Penambahan Gas Helium pada Volume Tetap:**
   - Karena volume wadah konstan dan Helium tidak bereaksi, konsentrasi molar ($n/V$) maupun tekanan parsial dari gas $\\\\ce{N2}, \\\\ce{H2},$ dan $\\\\ce{NH3}$ sama sekali tidak berubah.
   - Dampak: **TIDAK MENGGESER KESETIMBANGAN SAMA SEKALI** dan **nilai $K_c$ TETAP**.

4. **Penambahan Serbuk Katalis Besi ($\\\\ce{Fe}$):**
   - Katalis menurunkan energi aktivasi reaksi maju dan balik sama besar.
   - Dampak: **TIDAK MENGGESER KESETIMBANGAN** dan **nilai $K_c$ TETAP**; katalis hanya mempercepat durasi waktu yang dibutuhkan untuk mencapai keadaan setimbang.

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Skala Logika Arah Pergeseran Q vs K:**  
> - Pikirkan angka $Q$ dan $K$ pada garis bilangan:  
>   - Jika $Q < K$ (Q di sebelah kiri K) $\\\\implies$ Reaksi bergeser **ke KANAN** (menuju K).  
>   - Jika $Q > K$ (Q di sebelah kanan K) $\\\\implies$ Reaksi bergeser **ke KIRI** (menuju K).  
>   - Jika $Q = K$ $\\\\implies$ Sistem **Tepat Setimbang**.  
> - Ingat: **Hanya Suhu** yang dapat mengubah nilai $K$! Volume, tekanan, konsentrasi, dan katalis tidak pernah dapat mengubah nilai $K$.`,
    keyFormulas: [
      { name: 'Rumus Kuosien Reaksi', formula: 'Q_c = \\frac{[\\ce{NH3}]^2}{[\\ce{N2}][\\ce{H2}]^3}' },
      { name: 'Kriteria Pergeseran Mundur', formula: 'Q_c > K_c \\implies \\text{Bergeser ke Kiri } (\\longleftarrow)' },
      { name: 'Asas Tekanan dan Volume', formula: 'V \\downarrow \\iff P \\uparrow \\implies \\text{Bergeser ke Koefisien Gas Terkecil}' },
    ],
  },
  {
    tag: 'contoh-derajat-disosiasi-dan-kp-pcl5',
    tags: ['derajat-disosiasi', 'kesetimbangan-disosiasi', 'tabel-mbs-gas', 'kp-disosiasi-alfa', 'gas-n2o4-no2', 'kimia-sma'],
    title: 'Contoh Soal 5: Kinetika Kesetimbangan Disosiasi Gas, Penentuan Derajat Disosiasi (α) & Formulasi Aljabar Kp (Level: Sulit / HOTS)',
    summary: 'Pemodelan disosiasi dimer dinitrogen tetraoksida via tabel M-B-S, kalkulasi fraksi mol, tekanan parsial, verifikasi formula cepat Kp, serta evaluasi pergeseran derajat disosiasi.',
    content: `### 📋 Skenario Masalah & Data Eksperimen:
Gas dinitrogen tetraoksida ($\\\\ce{N2O4}$) yang tidak berwarna mengalami kesetimbangan disosiasi termal menjadi gas nitrogen dioksida ($\\\\ce{NO2}$) yang berwarna cokelat kemerahan menurut reaksi endotermik:
$$\\\\ce{N2O4(g) <=> 2 NO2(g)} \\\\quad \\\\Delta H > 0$$

Ke dalam suatu wadah tertutup bervolume tetap, dimasukkan sampel murni gas $\\\\ce{N2O4}$ dan dipanaskan pada temperatur konstan $55^\\\\circ\\\\text{C}$ hingga tercapai kesetimbangan kimia dinamis.  
Pada keadaan setimbang tersebut, manometer mencatat tekanan total sistem sebesar $P_{\\\\text{total}} = 1.50\\\\text{ atm}$, dan derajat disosiasi gas $\\\\ce{N2O4}$ terukur sebesar $\\\\alpha = 0.400$ ($40.0\\\\%$ terurai).

---

### 🎯 Pertanyaan:
1. Susunlah tabel stoikiometri M-B-S berbasis variabel mol mula-mula $a$ dan tentukan jumlah total mol gas pada saat kesetimbangan!
2. Hitung fraksi mol ($X_i$) dan tekanan parsial ($P_i$) dari masing-masing gas ($\\\\ce{N2O4}$ dan $\\\\ce{NO2}$) pada keadaan setimbang!
3. Hitung nilai tetapan kesetimbangan tekanan ($K_p$) dan buktikan keabsahannya menggunakan formula cepat disosiasi dimer:
   $$K_p = \\\\frac{4\\\\alpha^2}{1 - \\\\alpha^2} \\\\cdot P_{\\\\text{total}}$$
4. Berdasarkan Asas Le Chatelier, apakah nilai derajat disosiasi ($\\\\alpha$) akan membesar atau mengecil jika volume wadah diperbesar dua kali lipat pada suhu konstan? Jelaskan secara matematis!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Menyusun Tabel M-B-S Berbasis Derajat Disosiasi $\\\\alpha$
Misalkan mol mula-mula gas $\\\\ce{N2O4} = a\\\\text{ mol}$.  
Diketahui $\\\\alpha = 0.400$:
- Mol $\\\\ce{N2O4}$ yang terurai (bereaksi) $= a \\\\times \\\\alpha = 0.400 a\\\\text{ mol}$.
- Sesuai koefisien reaksi ($1 : 2$), mol $\\\\ce{NO2}$ yang terbentuk $= 2 \\\\times (0.400 a) = 0.800 a\\\\text{ mol}$.

Tabel Stoikiometri Mol:
| Komponen | $\\\\ce{N2O4(g)}$ | $\\\\ce{2 NO2(g)}$ |
| :--- | :---: | :---: |
| **Mula-mula (M)** | $a\\\\text{ mol}$ | $0\\\\text{ mol}$ |
| **Bereaksi (B)** | $-0.400 a\\\\text{ mol}$ | $+0.800 a\\\\text{ mol}$ |
| **Setimbang (S)** | $\\\\mathbf{0.600 a\\\\text{ mol}}$ | $\\\\mathbf{0.800 a\\\\text{ mol}}$ |

Hitung jumlah total mol gas pada kesetimbangan:
$$n_{\\\\text{total}} = n_{\\\\ce{N2O4}} + n_{\\\\ce{NO2}} = 0.600 a + 0.800 a = \\\\mathbf{1.400 a\\\\text{ mol}}$$

#### Langkah 2: Menghitung Fraksi Mol & Tekanan Parsial
1. **Fraksi Mol Gas ($X_i$):**
   $$X_{\\\\ce{N2O4}} = \\\\frac{n_{\\\\ce{N2O4}}}{n_{\\\\text{total}}} = \\\\frac{0.600 a}{1.400 a} = \\\\frac{6}{14} = \\\\mathbf{\\\\frac{3}{7} \\\\approx 0.4286}$$
   $$X_{\\\\ce{NO2}} = \\\\frac{n_{\\\\ce{NO2}}}{n_{\\\\text{total}}} = \\\\frac{0.800 a}{1.400 a} = \\\\frac{8}{14} = \\\\mathbf{\\\\frac{4}{7} \\\\approx 0.5714}$$
   *(Verifikasi: $X_{\\\\ce{N2O4}} + X_{\\\\ce{NO2}} = 3/7 + 4/7 = 1.000$).*

2. **Tekanan Parsial Gas ($P_{\\\\text{total}} = 1.50\\\\text{ atm}$):**
   $$P_{\\\\ce{N2O4}} = X_{\\\\ce{N2O4}} \\\\times P_{\\\\text{total}} = \\\\frac{3}{7} \\\\times 1.50\\\\text{ atm} = \\\\frac{4.50}{7}\\\\text{ atm} = \\\\mathbf{0.643\\\\text{ atm}}$$
   $$P_{\\\\ce{NO2}} = X_{\\\\ce{NO2}} \\\\times P_{\\\\text{total}} = \\\\frac{4}{7} \\\\times 1.50\\\\text{ atm} = \\\\frac{6.00}{7}\\\\text{ atm} = \\\\mathbf{0.857\\\\text{ atm}}$$

#### Langkah 3: Menghitung Nilai $K_p$ & Pembuktian Formula Cepat
Ekspresi tetapan kesetimbangan tekanan:
$$K_p = \\\\frac{(P_{\\\\ce{NO2}})^2}{P_{\\\\ce{N2O4}}}$$
Substitusikan nilai pecahan eksak tekanan parsial:
$$K_p = \\\\frac{\\\\left(\\\\frac{6.00}{7}\\\\right)^2}{\\\\frac{4.50}{7}} = \\\\frac{\\\\frac{36.00}{49}}{\\\\frac{4.50}{7}} = \\\\frac{36.00}{49} \\\\times \\\\frac{7}{4.50} = \\\\frac{8}{7} = \\\\mathbf{1.143\\\\text{ atm}}$$

**Verifikasi dengan Formula Cepat Disosiasi Dimer:**
Untuk kesetimbangan tipe $\\\\ce{A <=> 2 B}$:
$$K_p = \\\\frac{4 \\\\alpha^2}{1 - \\\\alpha^2} \\\\times P_{\\\\text{total}}$$
Substitusikan $\\\\alpha = 0.40$ dan $P_{\\\\text{total}} = 1.50\\\\text{ atm}$:
$$K_p = \\\\frac{4 \\\\times (0.40)^2}{1 - (0.40)^2} \\\\times 1.50 = \\\\frac{4 \\\\times 0.160}{1 - 0.160} \\\\times 1.50 = \\\\frac{0.640}{0.840} \\\\times 1.50 = \\\\frac{16}{21} \\\\times \\\\frac{3}{2} = \\\\frac{48}{42} = \\\\frac{8}{7} = \\\\mathbf{1.143}$$
*(Formula cepat terbukti 100% konsisten, presisi, dan sangat efisien!)*

#### Langkah 4: Evaluasi Perubahan Volume terhadap Derajat Disosiasi $\\\\alpha$
1. **Analisis Asas Le Chatelier:**
   - Ruas kiri memiliki $1\\\\text{ mol gas}$, ruas kanan memiliki $2\\\\text{ mol gas}$.
   - Memperbesar volume wadah menurunkan tekanan parsial sistem.
   - Sistem akan merespon dengan bergeser ke ruas yang memiliki **jumlah koefisien gas lebih banyak (ke arah kanan / pembentukan $\\\\ce{NO2}$)**.
   - Akibatnya, lebih banyak gas $\\\\ce{N2O4}$ yang terurai, sehingga **nilai derajat disosiasi $\\\\alpha$ akan MEMBESAR (meningkat)**.
2. **Analisis Matematis Rumus:**
   $$K_p = \\\\frac{4 \\\\alpha^2}{1 - \\\\alpha^2} \\\\cdot P_{\\\\text{total}}$$
   Karena suhu konstan, nilai $K_p$ adalah bilangan tetap. Jika volume wadah diperbesar, $P_{\\\\text{total}}$ turun. Agar perkalian menghasilkan nilai $K_p$ yang tetap sama, maka faktor $\\\\frac{4 \\\\alpha^2}{1 - \\\\alpha^2}$ harus membesar, yang berarti nilai $\\\\alpha$ wajib meningkat!

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Formula Cepat Derajat Disosiasi untuk Ujian:**  
> Hafalkan dua pola disosiasi gas paling sering di ujian:  
> 1. Tipe Simetris $\\\\mathbf{\\\\ce{A <=> B + C}}$ (contoh: $\\\\ce{PCl5 <=> PCl3 + Cl2}$ atau $\\\\ce{NH4HS <=> NH3 + H2S}$):  
>    $$K_p = \\\\frac{\\\\alpha^2}{1 - \\\\alpha^2} \\\\cdot P_{\\\\text{total}}$$  
> 2. Tipe Dimer $\\\\mathbf{\\\\ce{A <=> 2 B}}$ (contoh: $\\\\ce{N2O4 <=> 2 NO2}$):  
>    $$K_p = \\\\frac{4\\\\alpha^2}{1 - \\\\alpha^2} \\\\cdot P_{\\\\text{total}}$$  
> Menggunakan rumus cepat ini menghemat 5-7 menit waktu pengerjaan di ujian UTBK/Sekolah tanpa harus membuat tabel fraksi mol dari nol!`,
    keyFormulas: [
      { name: 'Rumus Kp Disosiasi Dimer', formula: 'K_p = \\frac{4\\alpha^2}{1 - \\alpha^2} \\cdot P_{\\text{total}}' },
      { name: 'Definisi Derajat Disosiasi', formula: '\\alpha = \\frac{n_{\\text{terurai}}}{n_{\\text{mula-mula}}}' },
      { name: 'Hukum Tekanan Parsial Dalton', formula: 'P_i = X_i \\times P_{\\text{total}}' },
    ],
  },
];

// ============================================================================
// TOPIK 109: LARUTAN ASAM-BASA & TITRASI NETRALISASI
// 5 CONTOH SOAL TERBIMBING LINGKUP MURNI KURIKULUM SMA (SEDANG & HOTS)
// ============================================================================
export const WORKED_EXAMPLES_TOPIC_109: ConceptBlock[] = [
  {
    tag: 'contoh-tiga-teori-asam-basa-komparasi',
    tags: ['teori-arrhenius', 'teori-bronsted-lowry', 'teori-lewis', 'pasangan-konjugasi', 'ikatan-kovalen-koordinasi', 'asam-basa-sma'],
    title: 'Contoh Soal 1: Komparasi Tiga Teori Asam-Basa (Arrhenius, Brønsted-Lowry & Lewis), Identifikasi Pasangan Konjugasi & Aduk Kovalen Koordinasi (Level: Sedang)',
    summary: 'Klasifikasi mendalam sifat asam-basa pada berbagai medium pelarut dan reaksi fasa gas, penentuan spesi asam, basa, pasangan konjugasi, serta pembentukan ikatan kovalen koordinasi aduk Lewis.',
    content: `### 📋 Skenario Masalah & Persamaan Reaksi:
Diberikan empat reaksi kimia berikut yang berlangsung di laboratorium kimia sekolah:
1. Reaksi I (dalam pelarut air):
   $$\\\\ce{HNO3(aq) + H2O(l) -> H3O+(aq) + NO3-(aq)}$$
2. Reaksi II (dalam pelarut air):
   $$\\\\ce{HCO3-(aq) + NH3(aq) <=> CO3^2-(aq) + NH4+(aq)}$$
3. Reaksi III (fasa gas tanpa pelarut air):
   $$\\\\ce{BF3(g) + NH3(g) -> F3B:NH3(s)}$$
4. Reaksi IV (pembentukan ion kompleks):
   $$\\\\ce{Cu^2+(aq) + 4 NH3(aq) <=> [Cu(NH3)4]^2+(aq)}$$

---

### 🎯 Pertanyaan:
1. Tunjukkan reaksi mana yang dapat dijelaskan secara tuntas oleh Teori Arrhenius, dan jelaskan mengapa Teori Arrhenius gagal menerangkan Reaksi II, III, dan IV!
2. Untuk Reaksi II, tentukan spesi yang bertindak sebagai asam, basa, asam konjugasi, dan basa konjugasi menurut Teori Brønsted-Lowry!
3. Tunjukkan bahwa ion bikarbonat ($\\\\ce{HCO3-}$) merupakan spesi amfiprotik dengan menuliskan reaksi saat ia bertindak sebagai basa Brønsted-Lowry ketika dilarutkan dalam asam klorida ($\\\\ce{HCl}$)!
4. Berdasarkan Teori Gilbert N. Lewis, tentukan spesi donor pasangan elektron bebas (basa Lewis) dan spesi akseptor pasangan elektron bebas (asam Lewis) pada Reaksi III dan Reaksi IV, serta jelaskan jenis ikatan yang terbentuk!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Analisis Lingkup Teori Arrhenius & Keterbatasannya
- **Reaksi I:** Dapat dijelaskan oleh Arrhenius karena asam nitrat ($\\\\ce{HNO3}$) dilarutkan dalam pelarut air dan melepaskan ion hidrogen/hidronium ($\\\\ce{H3O+}$ atau $\\\\ce{H+}$).
- **Keterbatasan Arrhenius:**
  1. *Pada Reaksi II:* Arrhenius tidak dapat menerangkan mengapa larutan amonia ($\\\\ce{NH3}$) dapat bersifat basa padahal rumus molekulnya tidak mengandung gugus hidroksida ($\\\\ce{OH-}$).
  2. *Pada Reaksi III:* Berlangsung di fasa gas murni tanpa kehadiran pelarut air ($\\\\ce{H2O}$), sedangkan Arrhenius mewajibkan pelarut air.
  3. *Pada Reaksi IV:* Melibatkan kation logam transisi ($\\\\ce{Cu^2+}$) yang mengikat molekul netral membentuk ion kompleks tanpa pelepasan ion $\\\\ce{H+}$ maupun $\\\\ce{OH-}$.

---

#### Langkah 2: Identifikasi Pasangan Asam-Basa Konjugasi Brønsted-Lowry (Reaksi II)
Menurut Brønsted-Lowry:
- **Asam:** Donor proton ($\\\\ce{H+}$).
- **Basa:** Akseptor proton ($\\\\ce{H+}$).

Tinjau perpindahan proton pada Reaksi II:
$$\\\\ce{HCO3-(aq) + NH3(aq) <=> CO3^2-(aq) + NH4+(aq)}$$
- Ion $\\\\ce{HCO3-}$ melepaskan satu proton ($\\\\ce{H+}$) menjadi $\\\\ce{CO3^2-}$. Maka, $\\\\mathbf{\\\\ce{HCO3-}}$ adalah **Asam**.
- Molekul $\\\\ce{NH3}$ menerima proton ($\\\\ce{H+}$) tersebut menjadi $\\\\ce{NH4+}$. Maka, $\\\\mathbf{\\\\ce{NH3}}$ adalah **Basa**.
- Setelah melepaskan proton, $\\\\ce{HCO3-}$ berubah menjadi $\\\\mathbf{\\\\ce{CO3^2-}}$, yang bertindak sebagai **Basa Konjugasi**.
- Setelah menerima proton, $\\\\ce{NH3}$ berubah menjadi $\\\\mathbf{\\\\ce{NH4+}}$, yang bertindak sebagai **Asam Konjugasi**.

Pasangan konjugasi yang terbentuk (berselisih tepat satu $\\\\ce{H+}$):
1. **Pasangan 1:** $\\\\ce{HCO3-}$ (asam) dan $\\\\ce{CO3^2-}$ (basa konjugasi).
2. **Pasangan 2:** $\\\\ce{NH4+}$ (asam konjugasi) dan $\\\\ce{NH3}$ (basa).

---

#### Langkah 3: Sifat Amfiprotik Ion Bikarbonat ($\\\\ce{HCO3-}$)
Spesi amfiprotik adalah spesi yang dapat bertindak sebagai asam (donor proton) maupun sebagai basa (akseptor proton) bergantung pada pasangannya:
- Pada Reaksi II di atas, $\\\\ce{HCO3-}$ bertindak sebagai **asam** karena berhadapan dengan basa $\\\\ce{NH3}$.
- Jika direaksikan dengan asam kuat seperti $\\\\ce{HCl}$, $\\\\ce{HCO3-}$ bertindak sebagai **basa** (akseptor proton):
  $$\\\\ce{HCO3-(aq) + HCl(aq) -> H2CO3(aq) + Cl-(aq)}$$
  Asam karbonat yang terbentuk segera terurai menjadi air dan gas karbon dioksida:
  $$\\\\ce{H2CO3(aq) <=> H2O(l) + CO2(g)}$$

---

#### Langkah 4: Analisis Teori Asam-Basa Lewis & Ikatan Kovalen Koordinasi
Menurut Gilbert N. Lewis:
- **Asam Lewis:** Akseptor pasangan elektron bebas (PEB) yang menyediakan orbital kosong.
- **Basa Lewis:** Donor pasangan elektron bebas (PEB).

1. **Reaksi III ($\\\\ce{BF3 + NH3 -> F3B:NH3}$):**
   - Atom Boron pada $\\\\ce{BF3}$ hanya memiliki 6 elektron valensi (belum oktet) dan memiliki sebuah orbital kosong $2p$. Maka, $\\\\mathbf{\\\\ce{BF3}}$ adalah **Asam Lewis**.
   - Atom Nitrogen pada $\\\\ce{NH3}$ memiliki 1 pasang elektron bebas (PEB) pada kulit terluarnya. Maka, $\\\\mathbf{\\\\ce{NH3}}$ adalah **Basa Lewis**.
   - Pasangan elektron bebas dari atom N didonasikan ke orbital kosong atom B membentuk **ikatan kovalen koordinasi (ikatan datif)** menghasilkan senyawa aduk Lewis $\\\\ce{F3B:NH3}$.

2. **Reaksi IV ($\\\\ce{Cu^2+ + 4 NH3 <=> [Cu(NH3)4]^2+}$):**
   - Kation $\\\\ce{Cu^2+}$ memiliki orbital $d$ dan $p$ yang kosong untuk menerima pasangan elektron. Maka, $\\\\mathbf{\\\\ce{Cu^2+}}$ adalah **Asam Lewis**.
   - Setiap molekul $\\\\ce{NH3}$ mendonasikan sepasang elektron bebasnya bertindak sebagai ligan (**Basa Lewis**).
   - Terbentuk 4 ikatan kovalen koordinasi menghasilkan ion kompleks tetraaminatembaga(II) $[\\\\ce{Cu(NH3)4}]^2+$.

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Hierarki 3 Teori Asam-Basa:**  
> Inklusivitas cakupan: **Arrhenius $\\\\subset$ Brønsted-Lowry $\\\\subset$ Lewis**.  
> - Semua asam/basa Arrhenius pasti merupakan asam/basa Brønsted-Lowry.  
> - Semua asam/basa Brønsted-Lowry pasti merupakan asam/basa Lewis.  
> - Namun sebaliknya, reaksi pembentukan senyawa kompleks ($\\\\ce{Cu^2+ + 4 NH3}$) dan reaksi fasa gas tanpa proton ($\\\\ce{BF3 + NH3}$) **hanya bisa dijelaskan oleh Teori Lewis** karena tidak ada serah-terima proton $\\\\ce{H+}$.  
> - **Aturan Cepat Pasangan Konjugasi:** Asam konjugasi selalu memiliki $1$ atom H lebih banyak dan muatan $+1$ lebih besar daripada basa asalnya!`,
    keyFormulas: [
      { name: 'Definisi Asam-Basa Arrhenius', formula: '\\text{Asam: } \\ce{H+} \\text{ dalam air}, \\quad \\text{Basa: } \\ce{OH-} \\text{ dalam air}' },
      { name: 'Definisi Brønsted-Lowry', formula: '\\text{Asam: Donor } \\ce{H+}, \\quad \\text{Basa: Akseptor } \\ce{H+}' },
      { name: 'Definisi Lewis', formula: '\\text{Asam: Akseptor PEB (orbital kosong)}, \\quad \\text{Basa: Donor PEB}' },
    ],
  },
  {
    tag: 'contoh-analisis-trayek-indikator-sampel',
    tags: ['trayek-indikator', 'irisan-garis-bilangan', 'btb-pp-mo-mr', 'uji-limbah', 'indikator-asam-basa', 'kimia-sma'],
    title: 'Contoh Soal 2: Penentuan Rentang pH Sampel Air Limbah Laboratorium via Analisis Multikriteria Irisan 4 Indikator Warna Sintetis (Level: Sedang)',
    summary: 'Pemodelan matematis irisan garis bilangan dari data uji metil jingga, metil merah, bromtimol biru, dan fenolftalein untuk estimasi presisi derajat keasaman limbah kimia.',
    content: `### 📋 Skenario Masalah & Data Eksperimen:
Dalam suatu pengujian mutu lingkungan sekolah, seorang analis kimia menguji tingkat keasaman sampel air limbah laboratorium menggunakan empat jenis larutan indikator sintetis. Hasil pengamatan perubahan warna dicatat pada tabel berikut:

| Indikator Asam-Basa | Trayek Rentang pH | Perubahan Warna Trayek | Warna Pengamatan Sampel |
| :--- | :---: | :---: | :---: |
| **Metil Jingga (MO)** | $3.1 - 4.4$ | Merah $\\\\to$ Kuning | **Kuning** |
| **Metil Merah (MR)** | $4.4 - 6.2$ | Merah $\\\\to$ Kuning | **Kuning** |
| **Bromtimol Biru (BTB)** | $6.0 - 7.6$ | Kuning $\\\\to$ Biru | **Biru** |
| **Fenolftalein (PP)** | $8.3 - 10.0$ | Tak Berwarna $\\\\to$ Merah Muda | **Tak Berwarna** |

---

### 🎯 Pertanyaan:
1. Terjemahkan hasil warna pengamatan masing-masing indikator menjadi pertidaksamaan nilai pH matematis!
2. Tentukan rentang perkiraan nilai pH sampel air limbah tersebut melalui analisis irisan himpunan garis bilangan!
3. Apakah air limbah tersebut tergolong bersifat asam, netral, atau basa pada temperatur kamar ($25^{\\circ}\\text{C}$)?
4. Jika air limbah tersebut kemudian diuji dengan indikator Alizarin Kuning (trayek pH $10.1 - 12.0$: kuning $\\\\to$ merah), ramalkan warna yang akan teramati!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Menerjemahkan Respon Warna Indikator ke Pertidaksamaan pH
Suatu indikator memberikan warna batas bawah jika $\\\\text{pH} \\\\le \\\\text{batas bawah}$, warna batas atas jika $\\\\text{pH} \\\\ge \\\\text{batas atas}$, dan warna kombinasi jika berada di dalam rentang trayek.
1. **Metil Jingga (Trayek $3.1 - 4.4$: Merah - Kuning):**
   - Menghasilkan warna **Kuning** (warna batas atas basa).
   - Pertidaksamaan 1: $\\\\mathbf{\\\\text{pH} \\\\ge 4.4}$.
2. **Metil Merah (Trayek $4.4 - 6.2$: Merah - Kuning):**
   - Menghasilkan warna **Kuning** (warna batas atas basa).
   - Pertidaksamaan 2: $\\\\mathbf{\\\\text{pH} \\\\ge 6.2}$.
3. **Bromtimol Biru (Trayek $6.0 - 7.6$: Kuning - Biru):**
   - Menghasilkan warna **Biru** (warna batas atas basa).
   - Pertidaksamaan 3: $\\\\mathbf{\\\\text{pH} \\\\ge 7.6}$.
4. **Fenolftalein (Trayek $8.3 - 10.0$: Tak Berwarna - Merah Muda):**
   - Menghasilkan warna **Tak Berwarna** (warna batas bawah asam).
   - Pertidaksamaan 4: $\\\\mathbf{\\\\text{pH} \\\\le 8.3}$.

---

#### Langkah 2: Analisis Irisan Garis Bilangan
Gabungkan keempat pertidaksamaan secara simultan pada garis bilangan:
- Batas bawah yang berlaku: $\\\\max(4.4, 6.2, 7.6) = \\\\mathbf{7.6}$.
- Batas atas yang berlaku: $\\\\min(8.3) = \\\\mathbf{8.3}$.

Irisan himpunan penyelesaian tunggal yang memenuhi seluruh data pengamatan adalah:
$$\\\\mathbf{7.6 \\\\le \\\\text{pH} \\\\le 8.3}$$

---

#### Langkah 3: Evaluasi Sifat Kimia Sampel
Pada temperatur standar $25^{\\circ}\\text{C}$, titik netral berada tepat pada $\\\\text{pH} = 7.00$:
- Karena interval nilai pH sampel berada pada rentang $7.6 - 8.3$ (seluruh interval berada di atas angka $7.00$), maka:
- **Air limbah laboratorium tersebut bersifat BASA LEMAH**.

---

#### Langkah 4: Prediksi Hasil Uji dengan Alizarin Kuning
- Indikator Alizarin Kuning memiliki trayek pH $10.1 - 12.0$ dengan warna kuning pada $\\\\text{pH} \\\\le 10.1$ dan merah pada $\\\\text{pH} \\\\ge 12.0$.
- Karena sampel limbah memiliki $\\\\text{pH} \\\\le 8.3$, yang berarti nilai pH sampel berada jauh di bawah batas bawah trayek Alizarin Kuning ($8.3 < 10.1$), maka:
- Indikator Alizarin Kuning akan menunjukkan warna **KUNING**.

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Trik Kilat Irisan Garis Bilangan Ujian:**  
> Untuk menyelesaikan soal trayek indikator dalam waktu kurang dari 60 detik:  
> 1. Kumpulkan seluruh batas nilai pH.  
> 2. Cari angka **terbesar** dari syarat bertanda $\\\\ge$ (batas bawah). Pada soal ini: $\\\\max(4.4, 6.2, 7.6) = 7.6$.  
> 3. Cari angka **terkecil** dari syarat bertanda $\\\\le$ (batas atas). Pada soal ini: $\\\\min(8.3) = 8.3$.  
> 4. Gabungkan keduanya: $7.6 \\\\le \\\\text{pH} \\\\le 8.3$.  
> *Peringatan Khusus:* Jika salah satu indikator menunjukkan warna transisi (misalnya BTB berwarna hijau), maka rentang nilai pH langsung terkunci pada interval tengah trayek indikator tersebut ($6.0 < \\\\text{pH} < 7.6$)!`,
    keyFormulas: [
      { name: 'Kriteria Batas Atas Indikator', formula: '\\text{Warna Basa} \\implies \\text{pH} \\ge \\text{Batas Atas Trayek}' },
      { name: 'Kriteria Batas Bawah Indikator', formula: '\\text{Warna Asam} \\implies \\text{pH} \\le \\text{Batas Bawah Trayek}' },
      { name: 'Irisan Himpunan Multikriteria', formula: '\\max(\\text{Batas Bawah}) \\le \\text{pH} \\le \\min(\\text{Batas Atas})' },
    ],
  },
  {
    tag: 'contoh-titrasi-alkalimetri-kadar-cuka',
    tags: ['titrasi-alkalimetri', 'faktor-pengenceran', 'kadar-persen', 'cuka-dapur', 'titrasi-asam-basa', 'kimia-sma'],
    title: 'Contoh Soal 3: Stoikiometri Volumetri Titrasi Alkalimetri Cuka Dapur Komersial, Analisis Pengenceran Labu Ukur & Penentuan Kadar Persen Massa (% w/w) (Level: Sedang)',
    summary: 'Kalkulasi stoikiometri netralisasi asam asetat dengan larutan baku NaOH 0.100 M, penerapan faktor pengenceran bertingkat, serta konversi molaritas ke persentase massa berbasis densitas larutan.',
    content: `### 📋 Skenario Masalah & Prosedur Analisis:
Untuk memverifikasi label kemasan produk cuka dapur komersial ($M_r\\\\ce{ CH3COOH} = 60.0\\\\text{ g/mol}$), seorang siswa melakukan analisis titrasi volumetri alkalimetri di laboratorium sekolah dengan tahapan berikut:
1. Sebanyak $10.0\\\\text{ mL}$ sampel cuka dapur pekat dipipet secara kuantitatif ke dalam labu ukur $100.0\\\\text{ mL}$, lalu diencerkan dengan menambahkan akuades hingga tanda batas dan dihomogenkan.
2. Dari labu ukur tersebut, diambil alikuot sebanyak $25.0\\\\text{ mL}$ larutan cuka encer menggunakan pipet volumetri dan dimasukkan ke dalam labu Erlenmeyer, lalu ditambahkan $3$ tetes indikator fenolftalein (PP).
3. Larutan dititrasi dengan larutan baku sekunder natrium hidroksida ($\\\\ce{NaOH}$) $0.100\\\\text{ M}$. Titik akhir titrasi tercapai saat larutan tepat berubah warna menjadi merah muda pucat yang stabil selama 30 detik.
4. Titrasi diulang sebanyak tiga kali (triplo) dengan volume $\\\\ce{NaOH}$ yang terpakai berturut-turut: $29.9\\\\text{ mL}$, $30.1\\\\text{ mL}$, dan $30.0\\\\text{ mL}$.

Diketahui massa jenis sampel cuka dapur pekat semula adalah $\\\\rho = 1.05\\\\text{ g/mL}$.

---

### 🎯 Pertanyaan:
1. Tuliskan persamaan reaksi ionik bersih netralisasi yang terjadi pada Erlenmeyer selama titrasi berlangsung!
2. Hitung volume rata-rata larutan $\\\\ce{NaOH}$ yang terpakai dan tentukan konsentrasi molaritas asam asetat di dalam larutan cuka encer!
3. Hitung konsentrasi molaritas asam asetat di dalam sampel cuka dapur pekat awal sebelum pengenceran!
4. Hitung kadar persentase massa ($\\\\%\\\\text{ b/b}$ atau $\\\\%\\\\text{ w/w}$) asam asetat dalam cuka dapur tersebut dan bandingkan dengan standar regulasi cuka makan SNI ($4\\\\% - 8\\\\%$)!
5. Jelaskan mengapa indikator fenolftalein (trayek pH $8.3 - 10.0$) dipilih untuk titrasi ini, dan mengapa indikator metil jingga (trayek pH $3.1 - 4.4$) tidak boleh digunakan!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Persamaan Reaksi Stoikiometri Netralisasi
Asam asetat adalah asam lemah monoprotik ($a = 1$) dan $\\\\ce{NaOH}$ adalah basa kuat monovalen ($b = 1$):
$$\\\\ce{CH3COOH(aq) + NaOH(aq) -> CH3COONa(aq) + H2O(l)}$$
Persamaan ionik bersih:
$$\\\\ce{CH3COOH(aq) + OH-(aq) -> CH3COO-(aq) + H2O(l)}$$

---

#### Langkah 2: Menghitung Molaritas Asam Asetat Encer
1. **Volume Rata-rata Titran $\\\\ce{NaOH}$:**
   $$\\\\bar{V}_{\\\\ce{NaOH}} = \\\\frac{29.9 + 30.1 + 30.0}{3} = \\\\mathbf{30.0\\\\text{ mL}}$$
2. **Mol $\\\\ce{NaOH}$ pada Titik Ekuivalen:**
   $$n_{\\\\ce{NaOH}} = V_{\\\\ce{NaOH}} \\\\times M_{\\\\ce{NaOH}} = 30.0\\\\text{ mL} \\\\times 0.100\\\\text{ mmol/mL} = \\\\mathbf{3.00\\\\text{ mmol}}$$
3. **Molaritas Asam Asetat Encer ($M_{\\\\text{encer}}$):**
   Sesuai rasio reaksi $1 : 1$:
   $$n_{\\\\ce{CH3COOH, alikuot}} = n_{\\\\ce{NaOH}} = 3.00\\\\text{ mmol}$$
   $$M_{\\\\text{encer}} = \\\\frac{n}{V_{\\\\text{alikuot}}} = \\\\frac{3.00\\\\text{ mmol}}{25.0\\\\text{ mL}} = \\\\mathbf{0.120\\\\text{ M}}$$

---

#### Langkah 3: Koreksi Faktor Pengenceran ke Sampel Cuka Pekat Asal
Faktor pengenceran ($f$) pada labu ukur:
$$f = \\\\frac{V_{\\\\text{labu ukur}}}{V_{\\\\text{sampel dipipet}}} = \\\\frac{100.0\\\\text{ mL}}{10.0\\\\text{ mL}} = \\\\mathbf{10}$$

Maka konsentrasi molaritas asam asetat dalam sampel cuka pekat asal adalah:
$$M_{\\\\text{pekat}} = M_{\\\\text{encer}} \\\\times f = 0.120\\\\text{ M} \\\\times 10 = \\\\mathbf{1.20\\\\text{ M}}$$

---

#### Langkah 4: Konversi Molaritas ke Persentase Kadar Massa ($\\\\%\\\\text{ w/w}$)
Tinjau basis volume $1.00\\\\text{ Liter}$ ($1000\\\\text{ mL}$) larutan cuka dapur pekat:
1. **Massa total $1000\\\\text{ mL}$ larutan:**
   $$m_{\\\\text{larutan}} = \\\\rho \\\\times V = 1.05\\\\text{ g/mL} \\\\times 1000\\\\text{ mL} = \\\\mathbf{1050\\\\text{ gram}}$$
2. **Massa zat terlarut $\\\\ce{CH3COOH}$ dalam $1000\\\\text{ mL}$:**
   $$n_{\\\\ce{CH3COOH}} = M_{\\\\text{pekat}} \\\\times V = 1.20\\\\text{ mol/L} \\\\times 1.00\\\\text{ L} = 1.20\\\\text{ mol}$$
   $$m_{\\\\ce{CH3COOH}} = n \\\\times M_r = 1.20\\\\text{ mol} \\\\times 60.0\\\\text{ g/mol} = \\\\mathbf{72.0\\\\text{ gram}}$$
3. **Kadar persentase massa ($\\\\%\\\\text{ w/w}$):**
   $$\\\\%\\\\text{ massa} = \\\\frac{m_{\\\\ce{CH3COOH}}}{m_{\\\\text{larutan}}} \\\\times 100\\\\% = \\\\frac{72.0\\\\text{ g}}{1050\\\\text{ g}} \\\\times 100\\\\% = \\\\mathbf{6.86\\\\%}$$

*(Verifikasi via Rumus Cepat Praktis):*
$$\\\\% = \\\\frac{M \\\\times M_r}{10 \\\\times \\\\rho} = \\\\frac{1.20 \\\\times 60.0}{10 \\\\times 1.05} = \\\\frac{72.0}{10.5} = \\\\mathbf{6.86\\\\%}$$

*Kesimpulan Regulasi:* Kadar asam asetat terukur sebesar $6.86\\\\%$, berada di dalam rentang legal baku mutu SNI untuk cuka makan konsumsi ($4\\\\% - 8\\\\%$).

---

#### Langkah 5: Rasionalisasi Pemilihan Indikator Fenolftalein
- Pada titik ekuivalen titrasi asam lemah ($\\\\ce{CH3COOH}$) dengan basa kuat ($\\\\ce{NaOH}$), seluruh reaktan habis bereaksi menghasilkan garam natrium asetat ($\\\\ce{CH3COONa}$).
- Anion asetat mengalami hidrolisis parsial menghasilkan ion $\\\\ce{OH-}$:
  $$\\\\ce{CH3COO-(aq) + H2O(l) <=> CH3COOH(aq) + OH-(aq)}$$
- Akibatnya, titik ekuivalen bersifat basa dengan $\\\\text{pH} \\\\approx 8.7 - 9.0$.
- **Indikator Fenolftalein (PP)** memiliki trayek perubahan warna pada rentang $\\\\text{pH } 8.3 - 10.0$, yang mencakup pH titik ekuivalen tersebut secara sempurna sehingga galat titrasi sangat minimal.
- Sebaliknya, **Metil Jingga (MO)** berubah warna pada $\\\\text{pH } 3.1 - 4.4$ (suasana asam). Jika digunakan, MO akan berubah warna jauh sebelum titik ekuivalen tercapai, menimbulkan galat titrasi negatif yang fatal.

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Dua Kunci Emas Perhitungan Volumetri Cuka:**  
> 1. **Perangkap Faktor Pengenceran:** Banyak siswa langsung mengalikan molaritas encer ($0.120\\\\text{ M}$) ke rumus persen massa. Selalu ingat: *larutan yang dianalisis di Erlenmeyer hanyalah cuplikan encer!* Konsentrasi sampel asli di botol wajib dikalikan faktor labu ukur ($f = 100/10 = 10$).  
> 2. **Rumus Kilat Kadar Persen Massa:**  
>    $$\\% = \\\\frac{M \\\\times M_r}{10 \\\\times \\\\rho} \\\\iff M = \\\\frac{10 \\\\times \\% \\\\times \\\\rho}{M_r}$$  
>    Rumus ini adalah turunan langsung dari definisi massa jenis dan molaritas, menghemat 3 menit waktu berharga Anda pada ujian UTBK!`,
    keyFormulas: [
      { name: 'Asas Ekuivalensi Titrasi', formula: 'V_a \\times M_a \\times a = V_b \\times M_b \\times b' },
      { name: 'Faktor Pengenceran Labu Ukur', formula: 'f = \\frac{V_{\\text{labu ukur}}}{V_{\\text{sampel dipipet}}}' },
      { name: 'Hubungan Molaritas & Persen Massa', formula: '\\% = \\frac{M \\times M_r}{10 \\times \\rho}' },
    ],
  },
  {
    tag: 'contoh-perhitungan-titik-titrasi-ph-step',
    tags: ['kurva-titrasi', 'perhitungan-ph', 'titik-ekuivalen', 'reaksi-netralisasi', 'campuran-asam-basa', 'hcl-naoh', 'kimia-sma'],
    title: 'Contoh Soal 4: Analisis Profil pH Komprehensif pada Empat Titik Kritis Kurva Titrasi Volumetri Netralisasi Asam-Basa (Level: Sulit / HOTS)',
    summary: 'Kalkulasi matematis komprehensif nilai pH sebelum titrasi, wilayah sisa asam (sebelum titik ekuivalen), titik ekuivalen sempurna (autoionisasi air), dan wilayah kelebihan basa kuat dengan koreksi volume total.',
    content: `### 📋 Skenario Masalah & Data Titrasi:
Di laboratorium kimia analitik, sebanyak $50.0\\\\text{ mL}$ larutan asam klorida ($\\\\ce{HCl}$) $0.100\\\\text{ M}$ dititrasi secara bertahap menggunakan titran larutan baku natrium hidroksida ($\\\\ce{NaOH}$) $0.100\\\\text{ M}$ pada temperatur konstan $25^{\\circ}\\text{C}$ ($K_w = 1.0 \\\\times 10^{-14}$).

---

### 🎯 Pertanyaan:
Hitunglah nilai pH larutan pada empat tahapan kritis titrasi berikut dengan memperhitungkan efek pengenceran volume total secara cermat:
1. **Titik 1:** Sebelum penambahan larutan $\\\\ce{NaOH}$ ($V_{\\\\ce{NaOH}} = 0.0\\\\text{ mL}$).
2. **Titik 2:** Setelah penambahan $40.0\\\\text{ mL}$ larutan $\\\\ce{NaOH}$ (kondisi sebelum titik ekuivalen).
3. **Titik 3:** Setelah penambahan $50.0\\\\text{ mL}$ larutan $\\\\ce{NaOH}$ (kondisi tepat pada titik ekuivalen).
4. **Titik 4:** Setelah penambahan $60.0\\\\text{ mL}$ larutan $\\\\ce{NaOH}$ (kondisi setelah titik ekuivalen).
5. Berdasarkan hasil perhitungan tersebut, jelaskan mengapa kurva titrasi asam kuat dengan basa kuat memperlihatkan lonjakan pH vertikal yang sangat terjal di sekitar titik ekuivalen!

---

### 💡 Pembahasan Langkah demi Langkah:

Jumlah mol asam klorida mula-mula di Erlenmeyer:
$$n_{\\\\ce{HCl, awal}} = V_a \\\\times M_a = 50.0\\\\text{ mL} \\\\times 0.100\\\\text{ mmol/mL} = \\\\mathbf{5.00\\\\text{ mmol}}$$

---

#### Langkah 1: Titik 1 — Sebelum Penambahan Basa ($V_{\\\\ce{NaOH}} = 0.0\\\\text{ mL}$)
Larutan hanya mengandung asam kuat monoprotik $\\\\ce{HCl } 0.100\\\\text{ M}$:
$$[\\\\ce{H+}] = a \\\\times M_a = 1 \\\\times 0.100\\\\text{ M} = 1.00 \\\\times 10^{-1}\\\\text{ M}$$
$$\\\\mathbf{\\\\text{pH} = -\\\\log[\\\\ce{H+}] = -\\\\log(1.00 \\\\times 10^{-1}) = \\\\mathbf{1.00}}$$

---

#### Langkah 2: Titik 2 — Penambahan $40.0\\\\text{ mL } \\\\ce{NaOH}$ (Sisa Asam Kuat)
1. **Mol $\\\\ce{NaOH}$ yang masuk:**
   $$n_{\\\\ce{NaOH}} = 40.0\\\\text{ mL} \\\\times 0.100\\\\text{ M} = 4.00\\\\text{ mmol}$$
2. **Tabel Stoikiometri Reaksi Netralisasi (mmol):**
   | Spesi | $\\\\ce{HCl(aq)}$ | $\\\\ce{NaOH(aq)}$ | $\\\\ce{NaCl(aq)}$ | $\\\\ce{H2O(l)}$ |
   | :--- | :---: | :---: | :---: | :---: |
   | **Mula-mula** | $5.00$ | $4.00$ | $0$ | $-$ |
   | **Bereaksi** | $-4.00$ | $-4.00$ | $+4.00$ | $+4.00$ |
   | **Sisa** | $\\\\mathbf{1.00}$ | $\\\\mathbf{0.00}$ | $4.00$ | $-$ |
3. **Volume Total Campuran Baru:**
   $$V_{\\\\text{total}} = 50.0\\\\text{ mL} + 40.0\\\\text{ mL} = \\\\mathbf{90.0\\\\text{ mL}}$$
4. **Konsentrasi Sisa Ion $[\\\\ce{H+}]$ dalam Larutan:**
   $$[\\\\ce{H+}] = \\\\frac{n_{\\\\ce{HCl, sisa}}}{V_{\\\\text{total}}} = \\\\frac{1.00\\\\text{ mmol}}{90.0\\\\text{ mL}} = 1.11 \\\\times 10^{-2}\\\\text{ M}$$
5. **Perhitungan pH:**
   $$\\\\text{pH} = -\\\\log(1.11 \\\\times 10^{-2}) = 2 - \\\\log(1.11) = 2 - 0.045 = \\\\mathbf{1.955 \\\\approx 1.96}$$

---

#### Langkah 3: Titik 3 — Penambahan $50.0\\\\text{ mL } \\\\ce{NaOH}$ (Titik Ekuivalen)
1. **Mol $\\\\ce{NaOH}$ yang masuk:**
   $$n_{\\\\ce{NaOH}} = 50.0\\\\text{ mL} \\\\times 0.100\\\\text{ M} = 5.00\\\\text{ mmol}$$
2. **Stoikiometri Reaksi:**
   Karena $n_{\\\\ce{HCl}} = n_{\\\\ce{NaOH}} = 5.00\\\\text{ mmol}$, kedua pereaksi tepat habis bereaksi membentuk $5.00\\\\text{ mmol } \\\\ce{NaCl(aq)}$.
3. **Karakteristik Garam $\\\\ce{NaCl}$:**
   - Kation $\\\\ce{Na+}$ berasal dari basa kuat $\\\\ce{NaOH}$ (tidak terhidrolisis).
   - Anion $\\\\ce{Cl-}$ berasal dari asam kuat $\\\\ce{HCl}$ (tidak terhidrolisis).
   - Larutan bersifat netral murni.
4. **Konsentrasi Ion $[\\\\ce{H+}]$:**
   Konsentrasi ion hidrogen murni bersumber dari kesetimbangan autoprotolisis air:
   $$[\\\\ce{H+}] = [\\\\ce{OH-}] = \\\\sqrt{K_w} = \\\\sqrt{1.00 \\\\times 10^{-14}} = 1.00 \\\\times 10^{-7}\\\\text{ M}$$
   $$\\\\mathbf{\\\\text{pH} = -\\\\log(1.00 \\\\times 10^{-7}) = \\\\mathbf{7.00}}$$

---

#### Langkah 4: Titik 4 — Penambahan $60.0\\\\text{ mL } \\\\ce{NaOH}$ (Kelebihan Basa Kuat)
1. **Mol $\\\\ce{NaOH}$ yang masuk:**
   $$n_{\\\\ce{NaOH}} = 60.0\\\\text{ mL} \\\\times 0.100\\\\text{ M} = 6.00\\\\text{ mmol}$$
2. **Stoikiometri Reaksi (mmol):**
   - Asam $\\\\ce{HCl}$ habis bereaksi ($5.00\\\\text{ mmol}$).
   - Kelebihan $\\\\ce{NaOH} = 6.00 - 5.00 = \\\\mathbf{1.00\\\\text{ mmol}}$.
3. **Volume Total Campuran Baru:**
   $$V_{\\\\text{total}} = 50.0\\\\text{ mL} + 60.0\\\\text{ mL} = \\\\mathbf{110.0\\\\text{ mL}}$$
4. **Konsentrasi Ion $[\\\\ce{OH-}]$ Kelebihan:**
   $$[\\\\ce{OH-}] = \\\\frac{n_{\\\\ce{NaOH, lebih}}}{V_{\\\\text{total}}} = \\\\frac{1.00\\\\text{ mmol}}{110.0\\\\text{ mL}} = 9.09 \\\\times 10^{-3}\\\\text{ M}$$
5. **Perhitungan pOH dan pH:**
   $$\\\\text{pOH} = -\\\\log(9.09 \\\\times 10^{-3}) = 3 - \\\\log(9.09) = 3 - 0.959 = 2.041$$
   $$\\\\mathbf{\\\\text{pH} = 14.000 - \\\\text{pOH} = 14.000 - 2.041 = \\\\mathbf{11.959 \\\\approx 11.96}}$$

---

#### Langkah 5: Mengapa Terjadi Lonjakan Vertikal Terjal?
Bandingkan perubahan nilai pH pada setiap tahapan:
- Penambahan $0\\\\text{ mL} \\\\to 40\\\\text{ mL } (\\\\Delta V = 40\\\\text{ mL})$: pH hanya naik dari $1.00$ ke $1.96$ ($\\\\Delta \\\\text{pH} = +0.96$).
- Penambahan $40\\\\text{ mL} \\\\to 50\\\\text{ mL } (\\\\Delta V = 10\\\\text{ mL})$: pH melompat dari $1.96$ ke $7.00$ ($\\\\Delta \\\\text{pH} = +5.04$).
- Penambahan $50\\\\text{ mL} \\\\to 60\\\\text{ mL } (\\\\Delta V = 10\\\\text{ mL})$: pH melonjak lagi dari $7.00$ ke $11.96$ ($\\\\Delta \\\\text{pH} = +4.96$).

**Penyebab Fisis-Matematis:**
Skala pH adalah fungsi logaritmik ($-\\\\log[\\\\ce{H+}]$). Ketika mendekati titik ekuivalen, konsentrasi sisa ion hidrogen anjlok dari orde $10^{-2}\\\\text{ M}$ menuju $10^{-7}\\\\text{ M}$ (penurunan 5 orde magnitudo / 100.000 kali lipat) hanya karena penambahan beberapa tetes basa penitrasi. Penurunan konsentrasi eksponensial inilah yang menghasilkan lonjakan kurva vertikal sigmoid yang sangat terjal!

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Strategi Menghindari Jebakan Volume Total:**  
> Kesalahan paling umum siswa dalam menghitung pH titrasi adalah membagi sisa mol asam/basa dengan volume asam mula-mula ($50\\\\text{ mL}$), padahal volume larutan terus bertambah!  
> - Pada $V_{\\\\ce{NaOH}} = 40\\\\text{ mL}$, pembagi adalah $V_{\\\\text{total}} = 50 + 40 = 90\\\\text{ mL}$.  
> - Pada $V_{\\\\ce{NaOH}} = 60\\\\text{ mL}$, pembagi adalah $V_{\\\\text{total}} = 50 + 60 = 110\\\\text{ mL}$.  
> **Konsekuensi Pemilihan Indikator:**  
> Karena lonjakan pH melintasi rentang yang sangat lebar (dari $\\\\approx 4$ hingga $\\\\approx 10$), maka indikator dengan trayek pH asam-netral (seperti Metil Merah $4.4 - 6.2$, Bromtimol Biru $6.0 - 7.6$) maupun basa (seperti Fenolftalein $8.3 - 10.0$) **sama-sama valid dan presisi** untuk titrasi asam kuat dengan basa kuat!`,
    keyFormulas: [
      { name: 'pH Sisa Asam Kuat', formula: '[\\ce{H+}] = \\frac{n_{\\text{asam awal}} - n_{\\text{basa masuk}}}{V_{\\text{asam}} + V_{\\text{basa}}}' },
      { name: 'pH Titik Ekuivalen Asam Kuat-Basa Kuat', formula: '[\\ce{H+}] = \\sqrt{K_w} = 10^{-7}\\text{ M} \\implies \\text{pH} = 7.00' },
      { name: 'pOH Kelebihan Basa Kuat', formula: '[\\ce{OH-}] = \\frac{n_{\\text{basa masuk}} - n_{\\text{asam awal}}}{V_{\\text{asam}} + V_{\\text{basa}}}' },
    ],
  },
  {
    tag: 'contoh-kuadratik-eksak-hsab-dan-leveling-effect',
    tags: ['leveling-effect', 'teori-hsab', 'persamaan-kuadrat', 'kegagalan-aproksimasi', 'asam-dikloroasetat', 'asam-basa-pearson', 'kimia-sma'],
    title: 'Contoh Soal 5: Analisis Kegagalan Aturan Aproksimasi 5%, Solusi Kuadratik Eksak pH Asam Lemah, serta Analisis Asas HSAB & Leveling Effect Pelarut (Level: Sulit / HOTS)',
    summary: 'Penyelesaian eksak kesetimbangan asam lemah saat rumus aproksimasi cepat gagal total, analisis termodinamika efek perataan pelarut air vs pelarut pembeda, serta prediksi afinitas ikatan koordinasi Asas HSAB Pearson.',
    content: `### 📋 Skenario Masalah:
Di kelas pengayaan olimpiade dan asesmen lanjut SMA, disajikan tiga fenomena kimia fisik larutan asam-basa yang menuntut ketelitian analisis konsep:

**Kasus A: Batas Keberlakuan Rumus Cepat Asam Lemah**  
Suatu asam dikloroasetat ($\\\\ce{CHCl2COOH}$) memiliki tetapan ionisasi asam yang cukup tinggi untuk ukuran asam lemah, yaitu $K_a = 5.50 \\\\times 10^{-2}$. Sebanyak sampel asam ini dilarutkan dalam air hingga diperoleh larutan dengan konsentrasi $C_a = 0.0200\\\\text{ M}$.

**Kasus B: Efek Perataan Pelarut (*Leveling Effect*)**  
Di dalam pelarut air murni, asam perklorat ($\\\\ce{HClO4}$) dan asam klorida ($\\\\ce{HCl}$) pada konsentrasi yang sama menunjukkan nilai pH yang persis identik seolah memiliki kekuatan asam setara. Namun, ketika keduanya dilarutkan ke dalam pelarut asam asetat glasial murni ($\\\\ce{CH3COOH}$), terbukti secara eksperimental bahwa $\\\\ce{HClO4}$ bersifat jauh lebih asam daripada $\\\\ce{HCl}$.

**Kasus C: Asas Asam-Basa Keras-Lunak (HSAB) Pearson**  
Larutan perak nitrat ($\\\\ce{AgNO3}$) bereaksi dengan berbagai halida membentuk endapan perak halida. Diketahui tetapan hasil kali kelarutan ($K_{sp}$) perak halida pada $25^{\\circ}\\text{C}$ adalah:
- $\\\\ce{AgF}$ : Sangat mudah larut dalam air (tidak mengendap)
- $\\\\ce{AgCl}$ : $K_{sp} = 1.8 \\\\times 10^{-10}$
- $\\\\ce{AgI}$ : $K_{sp} = 8.5 \\\\times 10^{-17}$

---

### 🎯 Pertanyaan:
1. Untuk Kasus A, hitung konsentrasi $[\\\\ce{H+}]$ jika menggunakan rumus aproksimasi cepat $[\\\\ce{H+}] = \\\\sqrt{K_a \\\\times C_a}$. Jelaskan mengapa hasil perhitungan tersebut menghasilkan anomali fisis yang mustahil secara kimia!
2. Selesaikan nilai $[\\\\ce{H+}]$, derajat ionisasi $\\\\alpha$, dan pH eksak larutan asam dikloroasetat tersebut menggunakan persamaan kuadrat rumus ABC! Berapa persen galat yang dihasilkan oleh rumus aproksimasi cepat?
3. Untuk Kasus B, jelaskan mekanisme kimia mengapa pelarut air memperlihatkan efek perataan (*leveling effect*) terhadap asam-asam kuat, dan mengapa asam asetat glasial mampu bertindak sebagai pelarut pembeda (*differentiating solvent*)!
4. Untuk Kasus C, gunakan Teori Asam-Basa Keras-Lunak (HSAB) Pearson untuk menjelaskan mengapa ikatan antara kation $\\\\ce{Ag+}$ dengan anion iodida ($\\\\ce{I-}$) jauh lebih stabil dan sukar larut dibandingkan ikatannya dengan anion fluorida ($\\\\ce{F-}$)!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Demonstrasi Kegagalan Rumus Cepat pada Kasus A
Gunakan rumus aproksimasi umum SMA:
$$[\\\\ce{H+}]_{\\\\text{aprok}} = \\\\sqrt{K_a \\\\times C_a} = \\\\sqrt{(5.50 \\\\times 10^{-2}) \\\\times (0.0200)} = \\\\sqrt{1.10 \\\\times 10^{-3}} = \\\\sqrt{11.0 \\\\times 10^{-4}} \\\\approx \\\\mathbf{3.32 \\\\times 10^{-2}\\\\text{ M}}$$

**Analisis Anomali Fisis:**
Perhatikan bahwa konsentrasi asam mula-mula yang dilarutkan adalah $C_a = 0.0200\\\\text{ M} = 2.00 \\\\times 10^{-2}\\\\text{ M}$.  
Hasil rumus aproksimasi menghasilkan $[\\\\ce{H+}] = 3.32 \\\\times 10^{-2}\\\\text{ M} > C_a$.  
Hal ini secara fisis **MUSTAHIL KARENA MELANGGAR HUKUM KEKEKALAN MASSA** (jumlah ion hidrogen yang terlepas tidak mungkin melampaui jumlah molekul asam yang dimasukkan semula, derajat ionisasi mustahil $\\\\alpha > 100\\\\%$)!

---

#### Langkah 2: Solusi Kuadratik Eksak Rumus ABC
Kesetimbangan disosiasi asam:
$$\\\\ce{CHCl2COOH <=> H+ + CHCl2COO-}$$
Persamaan aksi massa tanpa aproksimasi penyebut:
$$K_a = \\\\frac{[\\\\ce{H+}][\\\\ce{A-}]}{C_a - [\\\\ce{H+}]} = \\\\frac{x^2}{C_a - x}$$
$$x^2 + K_a x - K_a C_a = 0$$

Substitusikan nilai numerik $K_a = 0.0550$ dan $C_a = 0.0200$:
$$x^2 + 0.0550 x - (0.0550 \\\\times 0.0200) = 0$$
$$x^2 + 0.0550 x - 0.00110 = 0$$

Gunakan rumus ABC ($A = 1, B = 0.0550, C = -0.00110$):
$$\\\\begin{aligned}
x &= \\\\frac{-B + \\\\sqrt{B^2 - 4AC}}{2A} \\\\\\\\
&= \\\\frac{-0.0550 + \\\\sqrt{(0.0550)^2 - 4(1)(-0.00110)}}{2} \\\\\\\\
&= \\\\frac{-0.0550 + \\\\sqrt{0.003025 + 0.004400}}{2} \\\\\\\\
&= \\\\frac{-0.0550 + \\\\sqrt{0.007425}}{2} \\\\\\\\
&= \\\\frac{-0.0550 + 0.08617}{2} = \\\\frac{0.03117}{2} = \\\\mathbf{0.01558\\\\text{ M}}
\\\\end{aligned}$$

Didapatkan:
- Konsentrasi ion hidrogen eksak: $[\\\\ce{H+}] = \\\\mathbf{1.56 \\\\times 10^{-2}\\\\text{ M}}$.
- Derajat ionisasi eksak: $\\\\alpha = \\\\frac{[\\\\ce{H+}]}{C_a} = \\\\frac{0.01558}{0.0200} = \\\\mathbf{0.779} \\\\quad (77.9\\\\%)$.
- Nilai pH eksak: $\\\\text{pH} = -\\\\log(0.01558) = 2 - \\\\log(1.558) = 2 - 0.193 = \\\\mathbf{1.81}$.
- **Galat Rumus Aproksimasi:**
  $$\\\\text{Galat} = \\\\left|\\\\frac{0.0332 - 0.0156}{0.0156}\\\\right| \\\\times 100\\\\% = \\\\mathbf{112.8\\\\%} \\\\quad \\\\text{(Sangat Menyesatkan!)}$$

---

#### Langkah 3: Analisis Efek Perataan Pelarut (*Leveling Effect*) Kasus B
1. **Peran Air sebagai Pelarut Perata:**
   - Air memiliki sifat kebasaan yang cukup kuat untuk mendeprotonasi seluruh molekul asam mineral kuat ($\\\\ce{HClO4, HI, HBr, HCl, HNO3}$) secara kuantitatif ($100\\\\%$).
   - Reaksi: $\\\\ce{HA + H2O -> H3O+ + A-}$
   - Akibatnya, spesies asam terkuat yang dapat eksis secara termodinamika di dalam pelarut air hanyalah ion **hidronium ($\\\\ce{H3O+}$)**. Oleh karena itu, seluruh asam kuat "diratakan" kekuatannya hingga sama persis dengan kekuatan ion $\\\\ce{H3O+}$.
2. **Peran Asam Asetat Glasial sebagai Pelarut Pembeda (*Differentiating Solvent*):**
   - Asam asetat murni merupakan basa yang jauh lebih lemah daripada air, sehingga tidak mudah menerima proton.
   - Hanya asam yang benar-benar memiliki afinitas proton ekstrim ($\\\\ce{HClO4}$) yang mampu mendeprotonasi asam asetat secara optimal:
     $$\\\\ce{HClO4 + CH3COOH <=> CH3COOH2+ + ClO4-}$$
   - Karena protonasi asam asetat oleh $\\\\ce{HCl}$ berlangsung jauh lebih sedikit dibandingkan oleh $\\\\ce{HClO4}$, maka perbedaan kekuatan intrinsik kedua asam tersebut dapat terukur jelas.

---

#### Langkah 4: Analisis Teori Asam-Basa Keras-Lunak (HSAB) Pearson Kasus C
Ralph Pearson mengklasifikasikan spesies asam dan basa Lewis berdasarkan ukuran radius atom, kerapatan muatan, dan polarisabilitas:
1. **Klasifikasi Spesies:**
   - Kation $\\\\ce{Ag+}$: Memiliki radius ion relatif besar, muatan rendah ($+1$), dan kulit valensi elektron $d^{10}$ yang sangat mudah dideformasi awan elektronnya (polarisabilitas tinggi) $\\\\implies$ **Asam Lunak (*Soft Acid*)**.
   - Anion $\\\\ce{F-}$: Memiliki radius sangat kecil, kerapatan muatan elektron sangat tinggi, sukar terpolarisasi $\\\\implies$ **Basa Keras (*Hard Base*)**.
   - Anion $\\\\ce{I-}$: Memiliki radius ion sangat besar dengan awan elektron difus yang sangat mudah terpolarisasi $\\\\implies$ **Basa Lunak (*Soft Base*)**.
2. **Prinsip Utama HSAB (*Like Prefers Like*):**
   - **Interaksi Keras-Keras (Hard-Hard):** Didominasi oleh gaya elektrostatik ionik polar.
   - **Interaksi Lunak-Lunak (Soft-Soft):** Didominasi oleh tumpang-tindih orbital kovalen yang sangat kuat dan memiliki karakter kovalen tinggi.
3. **Kesimpulan Afinitas:**
   - Kation $\\\\ce{Ag+}$ (asam lunak) berinteraksi sangat kuat secara kovalen dengan $\\\\ce{I-}$ (basa lunak) membentuk ikatan $\\\\ce{Ag-I}$ yang sangat stabil di dalam kisi kristal, sehingga kelarutan $\\\\ce{AgI}$ luar biasa kecil ($K_{sp} \\\\approx 8.5 \\\\times 10^{-17}$).
   - Sebaliknya, interaksi antara $\\\\ce{Ag+}$ (asam lunak) dengan $\\\\ce{F-}$ (basa keras) tidak disukai secara energi kisi kovalen, sehingga garam $\\\\ce{AgF}$ sangat mudah larut di dalam air.

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Kapan Aturan 5% Gagal pada Soal Ujian Kimia?**  
> Rumus cepat $[\\\\ce{H+}] = \\\\sqrt{K_a \\\\times C_a}$ hanya valid jika derajat ionisasi $\\\\alpha \\\\le 0.05$ ($5\\\\%$) atau rasio $C_a / K_a \\\\ge 400$.  
> - Jika $C_a / K_a < 100$ (konsentrasi sangat encer atau nilai $K_a > 10^{-3}$), **penyederhanaan $C_a - x \\\\approx C_a$ haram digunakan** dan wajib diselesaikan via rumus kuadrat ABC.  
> **Mnemonic Asas HSAB Pearson:**  
> *"Yang Keras Suka yang Keras (Ionik), Yang Lunak Suka yang Lunak (Kovalen)."*  
> Logam-logam berat beracun (seperti $\\\\ce{Hg^2+, Pb^2+, Cd^2+, Ag+}$) adalah **Asam Lunak**, itulah sebabnya mereka sangat gemar mengikat gugus tiol/sulfhidril ($-SH$, **Basa Lunak**) pada enzim dan protein dalam tubuh manusia!`,
    keyFormulas: [
      { name: 'Kriteria Batas Aproksimasi 5%', formula: '\\alpha = \\frac{[\\ce{H+}]}{C_a} \\le 0.05 \\iff \\frac{C_a}{K_a} \\ge 400' },
      { name: 'Solusi Kuadratik Eksak Asam Lemah', formula: '[\\ce{H+}]^2 + K_a [\\ce{H+}] - K_a C_a = 0 \\implies [\\ce{H+}] = \\frac{-K_a + \\sqrt{K_a^2 + 4K_a C_a}}{2}' },
      { name: 'Prinsip Afinitas HSAB Pearson', formula: '\\text{Soft-Soft (Kovalen Polarisabel)} \\quad \\gg \\quad \\text{Soft-Hard (Mismatched)}' },
    ],
  },
];

// ============================================================================
// TOPIK 110: LARUTAN PENYANGGA (BUFFER) & HIDROLISIS GARAM SMA
// 5 CONTOH SOAL TERBIMBING LINGKUP MURNI KURIKULUM SMA (SEDANG & HOTS)
// ============================================================================
export const WORKED_EXAMPLES_TOPIC_110: ConceptBlock[] = [
  {
    tag: 'contoh-mekanisme-buffer-dan-henderson-hasselbalch',
    tags: ['larutan-penyangga', 'mekanisme-buffer', 'persamaan-henderson-hasselbalch', 'pertahanan-ph', 'buffer-asam', 'kimia-sma'],
    title: 'Contoh Soal 1: Mekanisme Pertahanan pH Larutan Penyangga terhadap Penambahan Asam Kuat, Basa Kuat & Pengenceran (Level: Sedang)',
    summary: 'Analisis kuantitatif aksi penyangga asam format dan natrium format (HCOOH/HCOONa), kalkulasi pergeseran pH akibat penambahan sedikit HCl dan NaOH, serta pembuktian stabilitas pH terhadap pengenceran air.',
    content: `### 📋 Skenario Masalah & Komposisi Sistem:
Di laboratorium kimia sekolah, disiapkan $500\\\\text{ mL}$ larutan penyangga (buffer) yang mengandung campuran asam format ($\\\\ce{HCOOH}$) $0.100\\\\text{ M}$ dan garam natrium format ($\\\\ce{HCOONa}$) $0.100\\\\text{ M}$.  
Diketahui tetapan ionisasi asam format $K_a = 1.80 \\\\times 10^{-4}$ (sehingga $\\\\text{p}K_a = -\\\\log(1.80 \\\\times 10^{-4}) = 3.745 \\\\approx 3.74$).

---

### 🎯 Pertanyaan:
1. Hitung nilai pH larutan penyangga mula-mula sebelum diberikan gangguan!
2. Jika ke dalam larutan penyangga tersebut ditambahkan $5.00\\\\text{ mL}$ larutan asam klorida ($\\\\ce{HCl}$) pekat $1.00\\\\text{ M}$, tuliskan reaksi penyerapan ion $\\\\ce{H+}$ yang terjadi dan hitung nilai pH akhir larutan!
3. Jika ke dalam larutan penyangga awal yang sama ditambahkan $5.00\\\\text{ mL}$ larutan natrium hidroksida ($\\\\ce{NaOH}$) $1.00\\\\text{ M}$, tuliskan reaksi penyerapan ion $\\\\ce{OH-}$ yang terjadi dan hitung nilai pH akhir larutan!
4. Buktikan secara matematis bahwa penambahan $500\\\\text{ mL}$ akuades murni (pengenceran $2\\\\times$) ke dalam larutan penyangga awal sama sekali tidak mengubah nilai pH larutan!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Menghitung Mol Komponen Mula-Mula & pH Awal
Hitung jumlah mol asam format dan ion format dalam $500\\\\text{ mL}$ larutan:
- Mol $\\\\ce{HCOOH} = V \\\\times M = 500\\\\text{ mL} \\\\times 0.100\\\\text{ mmol/mL} = \\\\mathbf{50.0\\\\text{ mmol}}$.
- Mol $\\\\ce{HCOO-} = V \\\\times M = 500\\\\text{ mL} \\\\times 0.100\\\\text{ mmol/mL} = \\\\mathbf{50.0\\\\text{ mmol}}$.

Gunakan Persamaan Henderson-Hasselbalch:
$$\\\\text{pH} = \\\\text{p}K_a + \\\\log\\\\left(\\\\frac{n_{\\\\ce{HCOO-}}}{n_{\\\\ce{HCOOH}}}\\\\right) = 3.745 + \\\\log\\\\left(\\\\frac{50.0}{50.0}\\\\right) = 3.745 + \\\\log(1) = \\\\mathbf{3.745 \\\\approx 3.74}$$

---

#### Langkah 2: Pengaruh Penambahan $5.00\\\\text{ mL } \\\\ce{HCl } 1.00\\\\text{ M}$
1. **Mol ion $\\\\ce{H+}$ yang masuk:**
   $$n_{\\\\ce{H+}} = 5.00\\\\text{ mL} \\\\times 1.00\\\\text{ mmol/mL} = \\\\mathbf{5.00\\\\text{ mmol}}$$
2. **Reaksi Penetralan oleh Komponen Basa Konjugasi:**
   Ion format bereaksi menangkap proton $\\\\ce{H+}$:
   $$\\\\ce{HCOO-(aq) + H+(aq) -> HCOOH(aq)}$$
3. **Tabel Stoikiometri Mol (mmol):**
   | Komponen | $\\\\ce{HCOO-}$ | $\\\\ce{H+}$ | $\\\\ce{HCOOH}$ |
   | :--- | :---: | :---: | :---: |
   | **Mula-mula** | $50.0$ | $5.00$ | $50.0$ |
   | **Bereaksi** | $-5.00$ | $-5.00$ | $+5.00$ |
   | **Sisa** | $\\\\mathbf{45.0}$ | $\\\\mathbf{0.00}$ | $\\\\mathbf{55.0}$ |
4. **Perhitungan pH Baru:**
   $$\\\\text{pH} = 3.745 + \\\\log\\\\left(\\\\frac{45.0}{55.0}\\\\right) = 3.745 + \\\\log(0.8182) = 3.745 - 0.087 = \\\\mathbf{3.658 \\\\approx 3.66}$$
   *(Perubahan pH hanya $\\\\Delta\\\\text{pH} = 3.66 - 3.74 = -0.08$, membuktikan resistensi buffer yang luar biasa! Bandingkan jika $5\\\\text{ mmol } \\\\ce{HCl}$ ditambahkan ke air murni, pH akan anjlok drastis dari $7.00$ ke $2.00$)*.

---

#### Langkah 3: Pengaruh Penambahan $5.00\\\\text{ mL } \\\\ce{NaOH } 1.00\\\\text{ M}$
1. **Mol ion $\\\\ce{OH-}$ yang masuk:**
   $$n_{\\\\ce{OH-}} = 5.00\\\\text{ mL} \\\\times 1.00\\\\text{ mmol/mL} = \\\\mathbf{5.00\\\\text{ mmol}}$$
2. **Reaksi Penetralan oleh Komponen Asam Lemah:**
   Asam format mendonorkan proton untuk menetralkan ion hidroksida:
   $$\\\\ce{HCOOH(aq) + OH-(aq) -> HCOO-(aq) + H2O(l)}$$
3. **Tabel Stoikiometri Mol (mmol):**
   | Komponen | $\\\\ce{HCOOH}$ | $\\\\ce{OH-}$ | $\\\\ce{HCOO-}$ |
   | :--- | :---: | :---: | :---: |
   | **Mula-mula** | $50.0$ | $5.00$ | $50.0$ |
   | **Bereaksi** | $-5.00$ | $-5.00$ | $+5.00$ |
   | **Sisa** | $\\\\mathbf{45.0}$ | $\\\\mathbf{0.00}$ | $\\\\mathbf{55.0}$ |
4. **Perhitungan pH Baru:**
   $$\\\\text{pH} = 3.745 + \\\\log\\\\left(\\\\frac{55.0}{45.0}\\\\right) = 3.745 + \\\\log(1.222) = 3.745 + 0.087 = \\\\mathbf{3.832 \\\\approx 3.83}$$
   *(Perubahan pH hanya $\\\\Delta\\\\text{pH} = +0.09$, sistem buffer berhasil menjaga kestabilan pH)*.

---

#### Langkah 4: Pembuktian Invariansi pH terhadap Pengenceran
Misalkan larutan diencerkan dengan menambah $500\\\\text{ mL}$ air sehingga volume total menjadi $V_{\\\\text{total}} = 1000\\\\text{ mL} = 1.00\\\\text{ L}$:
- Konsentrasi baru asam: $[\\\\ce{HCOOH}] = \\\\frac{50.0\\\\text{ mmol}}{1000\\\\text{ mL}} = 0.0500\\\\text{ M}$.
- Konsentrasi baru basa konjugasi: $[\\\\ce{HCOO-}] = \\\\frac{50.0\\\\text{ mmol}}{1000\\\\text{ mL}} = 0.0500\\\\text{ M}$.
- Nilai rasio konsentrasi:
  $$\\\\frac{[\\\\ce{HCOO-}]}{[\\\\ce{HCOOH}]} = \\\\frac{0.0500\\\\text{ M}}{0.0500\\\\text{ M}} = 1.00$$
- Nilai pH:
  $$\\\\text{pH} = \\\\text{p}K_a + \\\\log(1.00) = 3.745 + 0 = \\\\mathbf{3.745 \\\\approx 3.74}$$
Terbukti secara matematis bahwa pengenceran tidak mengubah rasio stoikiometri komponen, sehingga pH larutan penyangga tetap konstan.

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Trik Operasi Mol Henderson-Hasselbalch:**  
> Jangan membuang waktu menghitung molaritas baru setelah penambahan asam/basa!  
> Karena volume campuran terdapat di pembilang dan penyebut, Anda dapat langsung memasukkan kuantitas **mmol**:  
> $$\\mathbf{\\\\text{pH} = \\\\text{p}K_a + \\\\log\\\\left(\\\\frac{n_{\\\\text{basa konjugasi}}}{n_{\\\\text{asam lemah}}}\\\\right)}$$  
> - Jika ditambah asam kuat: kurangi mol basa konjugasi sebesar mol asam yang masuk, dan tambahkan nilai tersebut ke mol asam lemah ($n_{\\\\text{basa}} - x$, $n_{\\\\text{asam}} + x$).  
> - Jika ditambah basa kuat: kurangi mol asam lemah sebesar mol basa yang masuk, dan tambahkan nilai tersebut ke mol basa konjugasi ($n_{\\\\text{asam}} - y$, $n_{\\\\text{basa}} + y$).`,
    keyFormulas: [
      { name: 'Persamaan Henderson-Hasselbalch Asam', formula: '\\text{pH} = \\text{p}K_a + \\log\\frac{[\\ce{A-}]}{[\\ce{HA}]} = \\text{p}K_a + \\log\\frac{n_{\\ce{A-}}}{n_{\\ce{HA}}}' },
      { name: 'Aksi Penyerapan Asam Kuat', formula: '\\ce{A- + H+ -> HA} \\implies n_{\\ce{A-}} \\downarrow, \\, n_{\\ce{HA}} \\uparrow' },
      { name: 'Aksi Penyerapan Basa Kuat', formula: '\\ce{HA + OH- -> A- + H2O} \\implies n_{\\ce{HA}} \\downarrow, \\, n_{\\ce{A-}} \\uparrow' },
    ],
  },
  {
    tag: 'contoh-pembuatan-buffer-basa-stoikiometri-sisa',
    tags: ['larutan-penyangga', 'contoh-buffer-basa', 'stoikiometri-sisa', 'pembuatan-buffer', 'nh3-hcl', 'kimia-sma'],
    title: 'Contoh Soal 2: Pembuatan Sistem Penyangga Basa melalui Reaksi Asam Kuat dengan Basa Lemah Berlebih (Level: Sedang)',
    summary: 'Stoikiometri pencampuran larutan amonia (NH3) dengan larutan asam klorida (HCl) di mana basa lemah bersisa, penyusunan tabel M-B-S, serta kalkulasi pOH dan pH larutan buffer basa yang dihasilkan.',
    content: `### 📋 Skenario Masalah & Pencampuran Larutan:
Seorang siswa menyiapkan larutan penyangga basa di laboratorium dengan mencampurkan dua larutan berikut:
- **Larutan 1:** $200.0\\\\text{ mL}$ larutan amonia ($\\\\ce{NH3}$) $0.150\\\\text{ M}$ ($K_b = 1.80 \\\\times 10^{-5}$, $\\\\text{p}K_b = 4.74$).
- **Larutan 2:** $100.0\\\\text{ mL}$ larutan asam klorida ($\\\\ce{HCl}$) $0.100\\\\text{ M}$.

Temperatur larutan dipertahankan konstan pada $25^\\\\circ\\\\text{C}$ ($K_w = 1.00 \\\\times 10^{-14}$).

---

### 🎯 Pertanyaan:
1. Hitung jumlah mol (mmol) mula-mula dari amonia dan asam klorida sebelum dicampurkan!
2. Susunlah tabel stoikiometri reaksi M-B-S (Mula-mula, Bereaksi, Sisa) dan buktikan bahwa campuran akhir menghasilkan sistem larutan penyangga!
3. Hitung konsentrasi ion hidroksida $[\\\\ce{OH-}]$, nilai pOH, dan nilai pH akhir larutan campuran tersebut!
4. Berapa gram padatan amonium klorida murni ($\\\\ce{NH4Cl}$, $M_r = 53.5\\\\text{ g/mol}$) yang harus ditambahkan ke dalam campuran tersebut agar pH larutan berubah tepat menjadi $9.00$?

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Menghitung Mol Mula-Mula Reaktan
- Mol $\\\\ce{NH3} = V_1 \\\\times M_1 = 200.0\\\\text{ mL} \\\\times 0.150\\\\text{ mmol/mL} = \\\\mathbf{30.0\\\\text{ mmol}}$.
- Mol $\\\\ce{HCl} = V_2 \\\\times M_2 = 100.0\\\\text{ mL} \\\\times 0.100\\\\text{ mmol/mL} = \\\\mathbf{10.0\\\\text{ mmol}}$.

---

#### Langkah 2: Tabel Stoikiometri M-B-S Reaksi Netralisasi
Reaksi pembentukan garam amonium klorida:
$$\\\\ce{NH3(aq) + HCl(aq) -> NH4Cl(aq)}$$
Atau secara ionik:
$$\\\\ce{NH3(aq) + H+(aq) -> NH4+(aq)}$$

Tabel Stoikiometri (mmol):
| Komponen | $\\\\ce{NH3}$ (Basa Lemah) | $\\\\ce{HCl}$ (Asam Kuat) | $\\\\ce{NH4+}$ (Asam Konjugasi) |
| :--- | :---: | :---: | :---: |
| **Mula-mula (M)** | $30.0$ | $10.0$ | $0$ |
| **Bereaksi (B)** | $-10.0$ | $-10.0$ | $+10.0$ |
| **Sisa (S)** | $\\\\mathbf{20.0}$ | $\\\\mathbf{0.00}$ | $\\\\mathbf{10.0}$ |

**Kesimpulan Sistem:**
Karena asam kuat $\\\\ce{HCl}$ habis bereaksi sebagai pereaksi pembatas ($0.00\\\\text{ mmol}$), dan di dalam larutan tersisa basa lemah $\\\\ce{NH3}$ ($20.0\\\\text{ mmol}$) bersama asam konjugasinya $\\\\ce{NH4+}$ ($10.0\\\\text{ mmol}$), maka **campuran ini membentuk sistem larutan penyangga basa sejati**.

---

#### Langkah 3: Menghitung Konsentrasi $[\\\\ce{OH-}]$, pOH, dan pH
Gunakan rumus kesetimbangan larutan penyangga basa:
$$[\\\\ce{OH-}] = K_b \\\\times \\\\frac{n_{\\\\text{basa lemah}}}{n_{\\\\text{asam konjugasi}}} = (1.80 \\\\times 10^{-5}) \\\\times \\\\frac{20.0\\\\text{ mmol}}{10.0\\\\text{ mmol}} = (1.80 \\\\times 10^{-5}) \\\\times 2.00 = \\\\mathbf{3.60 \\\\times 10^{-5}\\\\text{ M}}$$

Hitung pOH:
$$\\\\text{pOH} = -\\\\log[\\\\ce{OH-}] = -\\\\log(3.60 \\\\times 10^{-5}) = 5 - \\\\log(3.60) = 5 - 0.556 = \\\\mathbf{4.444}$$

Hitung pH:
$$\\\\mathbf{\\\\text{pH} = 14.000 - \\\\text{pOH} = 14.000 - 4.444 = \\\\mathbf{9.556 \\\\approx 9.56}}$$

---

#### Langkah 4: Menghitung Massa Padatan $\\\\ce{NH4Cl}$ untuk Menghasilkan $\\\\text{pH} = 9.00$
1. **Target pOH:**
   $$\\\\text{pH} = 9.00 \\\\implies \\\\text{pOH} = 14.00 - 9.00 = 5.00 \\\\implies [\\\\ce{OH-}] = 1.00 \\\\times 10^{-5}\\\\text{ M}$$
2. **Menentukan Rasio Mol Baru:**
   $$[\\\\ce{OH-}] = K_b \\\\times \\\\frac{n_{\\\\ce{NH3}}}{n_{\\\\ce{NH4+, total}}}$$
   $$1.00 \\\\times 10^{-5} = (1.80 \\\\times 10^{-5}) \\\\times \\\\frac{20.0}{n_{\\\\ce{NH4+, total}}}$$
   $$n_{\\\\ce{NH4+, total}} = 1.80 \\\\times 20.0 = \\\\mathbf{36.0\\\\text{ mmol}}$$
3. **Mol $\\\\ce{NH4Cl}$ yang Harus Ditambahkan:**
   Dalam larutan sudah ada $10.0\\\\text{ mmol } \\\\ce{NH4+}$, maka:
   $$n_{\\\\text{tambahan}} = 36.0 - 10.0 = \\\\mathbf{26.0\\\\text{ mmol}} = 0.0260\\\\text{ mol}$$
4. **Massa Padatan $\\\\ce{NH4Cl}$:**
   $$m = n \\\\times M_r = 0.0260\\\\text{ mol} \\\\times 53.5\\\\text{ g/mol} = \\\\mathbf{1.391\\\\text{ gram}}$$

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Pohon Keputusan Ujian: Buffer vs Hidrolisis Garam:**  
> Saat menghadapi soal campuran asam dan basa:  
> 1. Jika **Asam Lemah + Basa Kuat**:  
>    - Mol Asam Lemah $>$ Mol Basa Kuat $\\\\implies$ **BUFFER ASAM** ($[\\\\ce{H+}] = K_a \\\\cdot \\\\frac{n_a}{n_g}$).  
>    - Mol Asam Lemah $=$ Mol Basa Kuat $\\\\implies$ **HIDROLISIS GARAM BASA** ($[\\\\ce{OH-}] = \\\\sqrt{\\\\frac{K_w}{K_a} \\\\cdot M_g}$).  
>    - Mol Asam Lemah $<$ Mol Basa Kuat $\\\\implies$ **SISA BASA KUAT** ($[\\\\ce{OH-}] = \\\\frac{n_{\\\\text{sisa}}}{V_{\\\\text{total}}}$).  
> 2. Hal yang sama berlaku simetris untuk Basa Lemah + Asam Kuat!`,
    keyFormulas: [
      { name: 'Persamaan Penyangga Basa', formula: '[\\ce{OH-}] = K_b \\times \\frac{n_{\\text{basa}}}{n_{\\text{garam}}}' },
      { name: 'Henderson-Hasselbalch Basa', formula: '\\text{pOH} = \\text{p}K_b + \\log\\frac{n_{\\text{konjugasi}}}{n_{\\text{basa}}}' },
      { name: 'Relasi pH dan pOH', formula: '\\text{pH} = 14 - \\text{pOH}' },
    ],
  },
  {
    tag: 'contoh-hidrolisis-garam-valensi-kation-anion',
    tags: ['hidrolisis-garam', 'tipe-hidrolisis', 'garam-polivalen', 'kalsium-asetat', 'valensi-anion', 'rumus-ph-hidrolisis', 'tetapan-hidrolisis-kh', 'kimia-sma'],
    title: 'Contoh Soal 3: Perhitungan pH Garam Terhidrolisis Parsial Polivalen Kalsium Asetat Ca(CH3COO)2 & Derivasi Kh (Level: Sedang)',
    summary: 'Analisis disosiasi garam polivalen kalsium asetat menghasilkan 2 ekuivalen anion asetat per satuan rumus, penentuan konsentrasi anion terhidrolisis, perumusan tetapan hidrolisis Kh, serta komputasi nilai pH larutan garam basa.',
    content: `### 📋 Skenario Masalah & Data Kristal Garam:
Sebanyak $1.58\\\\text{ gram}$ kristal anhidrat kalsium asetat ($\\\\ce{Ca(CH3COO)2}$, $M_r = 158.0\\\\text{ g/mol}$) dilarutkan ke dalam akuades hingga volume larutan tepat mencapai $500.0\\\\text{ mL}$.  
Diketahui tetapan ionisasi asam asetat $K_a = 2.00 \\\\times 10^{-5}$ dan tetapan ionisasi air $K_w = 1.00 \\\\times 10^{-14}$ pada temperatur $25^\\\\circ\\\\text{C}$.

---

### 🎯 Pertanyaan:
1. Tuliskan persamaan reaksi ionisasi garam kalsium asetat dalam air dan tentukan valensi anion garam tersebut!
2. Tuliskan reaksi hidrolisis yang terjadi dan turunkan formula tetapan hidrolisis ($K_h$) berbasis nilai $K_w$ dan $K_a$!
3. Hitung konsentrasi molaritas garam ($M_{\\\\text{garam}}$) dan konsentrasi anion asetat ($[\\\\ce{CH3COO-}]$) di dalam larutan!
4. Hitung nilai tetapan hidrolisis ($K_h$), konsentrasi ion $[\\\\ce{OH-}]$, pOH, dan nilai pH larutan kalsium asetat tersebut!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Reaksi Ionisasi Garam & Identifikasi Valensi
Garam kalsium asetat adalah senyawa ionik yang terdisosiasi $100\\\\%$ dalam air:
$$\\\\ce{Ca(CH3COO)2(s) ->[H2O] Ca^2+(aq) + 2 CH3COO-(aq)}$$
- Kation $\\\\ce{Ca^2+}$ berasal dari basa kuat $\\\\ce{Ca(OH)2}$ sehingga tidak mengalami hidrolisis (inert).
- Anion $\\\\ce{CH3COO-}$ berasal dari asam lemah $\\\\ce{CH3COOH}$ sehingga mengalami hidrolisis parsial.
- **Valensi anion ($x$):** Setiap $1\\\\text{ mol } \\\\ce{Ca(CH3COO)2}$ menghasilkan **$2\\\\text{ mol } \\\\ce{CH3COO-}$** ($x = 2$).

---

#### Langkah 2: Reaksi Hidrolisis & Derivasi Rumus $K_h$
Reaksi hidrolisis anion asetat:
$$\\\\ce{CH3COO-(aq) + H2O(l) <=> CH3COOH(aq) + OH-(aq)}$$
Ekspresi tetapan kesetimbangan hidrolisis ($K_h$):
$$K_h = \\\\frac{[\\\\ce{CH3COOH}][\\\\ce{OH-}]}{[\\\\ce{CH3COO-}]}$$

Kalikan pembilang dan penyebut dengan $[\\\\ce{H+}]$:
$$K_h = \\\\frac{[\\\\ce{CH3COOH}]}{[\\\\ce{H+}][\\\\ce{CH3COO-}]} \\\\times [\\\\ce{H+}][\\\\ce{OH-}] = \\\\frac{1}{K_a} \\\\times K_w = \\\\mathbf{\\\\frac{K_w}{K_a}}$$

Substitusikan nilai numerik:
$$K_h = \\\\frac{1.00 \\\\times 10^{-14}}{2.00 \\\\times 10^{-5}} = \\\\mathbf{5.00 \\\\times 10^{-10}}$$

---

#### Langkah 3: Menghitung Konsentrasi Molaritas Garam & Anion
1. **Mol garam $\\\\ce{Ca(CH3COO)2}$:**
   $$n = \\\\frac{\\\\text{massa}}{M_r} = \\\\frac{1.58\\\\text{ g}}{158.0\\\\text{ g/mol}} = 0.0100\\\\text{ mol}$$
2. **Molaritas garam ($M_g$):**
   $$M_g = \\\\frac{n}{V} = \\\\frac{0.0100\\\\text{ mol}}{0.500\\\\text{ L}} = \\\\mathbf{0.0200\\\\text{ M}}$$
3. **Konsentrasi anion asetat $[\\\\ce{CH3COO-}]$:**
   Karena valensi $x = 2$:
   $$[\\\\ce{CH3COO-}] = 2 \\\\times M_g = 2 \\\\times 0.0200\\\\text{ M} = \\\\mathbf{0.0400\\\\text{ M}}$$

---

#### Langkah 4: Menghitung Konsentrasi $[\\\\ce{OH-}]$, pOH, dan pH
Dari stoikiometri hidrolisis, $[\\\\ce{CH3COOH}] = [\\\\ce{OH-}]$:
$$K_h = \\\\frac{[\\\\ce{OH-}]^2}{[\\\\ce{CH3COO-}]} \\\\implies [\\\\ce{OH-}] = \\\\sqrt{K_h \\\\times [\\\\ce{CH3COO-}]}$$
$$[\\\\ce{OH-}] = \\\\sqrt{\\\\frac{K_w}{K_a} \\\\times (2 \\\\times M_g)}$$

Substitusikan nilai:
$$\\\\begin{aligned}
[\\\\ce{OH-}] &= \\\\sqrt{(5.00 \\\\times 10^{-10}) \\\\times (0.0400)} \\\\\\\\
&= \\\\sqrt{2.00 \\\\times 10^{-11}} = \\\\sqrt{20.0 \\\\times 10^{-12}} \\\\\\\\
&= \\\\mathbf{4.472 \\\\times 10^{-6}\\\\text{ M}}
\\\\end{aligned}$$

Hitung pOH dan pH:
$$\\\\text{pOH} = -\\\\log(4.472 \\\\times 10^{-6}) = 6 - \\\\log(4.472) = 6 - 0.650 = \\\\mathbf{5.350}$$
$$\\\\mathbf{\\\\text{pH} = 14.000 - 5.350 = \\\\mathbf{8.650 \\\\approx 8.65}}$$

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Jebakan Maut Valensi Garam Polivalen:**  
> Kesalahan nomor satu siswa pada soal hidrolisis garam adalah melupakan angka indeks kation/anion!  
> - Pada $\\\\ce{CH3COONa}$: valensi anion $= 1$, $[\\\\ce{CH3COO-}] = M_g$.  
> - Pada $\\\\ce{Ca(CH3COO)2}$ atau $\\\\ce{Ba(CH3COO)2}$: valensi anion $= 2$, $[\\\\ce{CH3COO-}] = \\\\mathbf{2 \\\\times M_g}$.  
> - Pada $\\\\ce{(NH4)2SO4}$: valensi kation $= 2$, $[\\\\ce{NH4+}] = \\\\mathbf{2 \\\\times M_g}$.  
> Selalu tuliskan reaksi disosiasi garam terlebih dahulu sebelum memasukkan konsentrasi ke rumus akar hidrolisis!`,
    keyFormulas: [
      { name: 'Tetapan Hidrolisis Anion', formula: 'K_h = \\frac{K_w}{K_a}' },
      { name: 'Rumus pH Garam Basa Polivalen', formula: '[\\ce{OH-}] = \\sqrt{\\frac{K_w}{K_a} \\times (x \\cdot M_g)}' },
      { name: 'Konsentrasi Anion Bervalensi x', formula: '[\\ce{A-}] = x \\times M_{\\text{garam}}' },
    ],
  },
  {
    tag: 'contoh-efek-ion-senama-dan-kurva-ph-titrasi-buffer',
    tags: ['efek-ion-senama', 'common-ion-effect', 'wilayah-buffer', 'kurva-titrasi-lemah', 'kapasitas-buffer', 'buffer-maksimum', 'kimia-sma'],
    title: 'Contoh Soal 4: Analisis Efek Ion Senama (Common-Ion Effect) terhadap Derajat Ionisasi Asam Lemah & Wilayah Kapasitas Buffer Maksimum pada Kurva Titrasi (Level: Sulit / HOTS)',
    summary: 'Investigasi pergeseran kesetimbangan ionisasi asam asetat akibat penambahan garam natrium asetat (efek ion senama), pembuktian anjloknya derajat ionisasi α, serta identifikasi titik setengah ekuivalen sebagai kapasitas penyangga maksimum pada kurva titrasi.',
    content: `### 📋 Skenario Masalah & Investigasi Kinetika-Kesetimbangan:
Di laboratorium sekolah dilakukan eksperimen komparasi kesetimbangan kimia larutan asam asetat ($\\\\ce{CH3COOH}$, $K_a = 1.80 \\\\times 10^{-5}$, $\\\\text{p}K_a = 4.745$) pada temperatur $25^\\\\circ\\\\text{C}$:

**Eksperimen I:**  
Sebanyak $1.00\\\\text{ Liter}$ larutan murni asam asetat $\\\\ce{CH3COOH } 0.100\\\\text{ M}$.

**Eksperimen II:**  
Ke dalam larutan Eksperimen I di atas, ditambahkan padatan natrium asetat murni ($\\\\ce{CH3COONa}$) hingga konsentrasi garam mencapai $0.100\\\\text{ M}$ (penambahan volume padatan diabaikan).

---

### 🎯 Pertanyaan:
1. Hitung konsentrasi $[\\\\ce{H+}]$, derajat ionisasi ($\\\\alpha_1$), dan nilai pH larutan pada Eksperimen I!
2. Hitung konsentrasi $[\\\\ce{H+}]$, derajat ionisasi baru ($\\\\alpha_2$), dan nilai pH larutan pada Eksperimen II! Bandingkan nilai $\\\\alpha_2$ dengan $\\\\alpha_1$ dan jelaskan fenomena penurunan derajat ionisasi tersebut menggunakan Asas Le Chatelier!
3. Jika $50.0\\\\text{ mL}$ larutan asam asetat $0.100\\\\text{ M}$ dititrasi dengan larutan $\\\\ce{NaOH } 0.100\\\\text{ M}$:
   a) Pada volume penambahan $\\\\ce{NaOH}$ berapakah tercapai titik setengah ekuivalen (*half-equivalence point*)?
   b) Jelaskan mengapa pada titik tersebut larutan memiliki kapasitas penyangga maksimum (*maximum buffer capacity*) dan kelandaian kurva titrasi ($d\\\\text{pH}/dV$) berada pada titik paling mendatar!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Analisis Eksperimen I (Asam Asetat Murni $0.100\\\\text{ M}$)
Asam asetat terionisasi sebagian di air:
$$\\\\ce{CH3COOH <=> H+ + CH3COO-}$$
1. **Konsentrasi $[\\\\ce{H+}]$:**
   $$[\\\\ce{H+}]_1 = \\\\sqrt{K_a \\\\times C_a} = \\\\sqrt{(1.80 \\\\times 10^{-5}) \\\\times (0.100)} = \\\\sqrt{1.80 \\\\times 10^{-6}} = \\\\mathbf{1.342 \\\\times 10^{-3}\\\\text{ M}}$$
2. **Derajat Ionisasi ($\\\\alpha_1$):**
   $$\\\\alpha_1 = \\\\frac{[\\\\ce{H+}]_1}{C_a} = \\\\frac{1.342 \\\\times 10^{-3}}{0.100} = 0.01342 \\\\quad (1.34\\\\%)$$
3. **Nilai pH:**
   $$\\\\text{pH}_1 = -\\\\log(1.342 \\\\times 10^{-3}) = 3 - \\\\log(1.342) = 3 - 0.128 = \\\\mathbf{2.872 \\\\approx 2.87}$$

---

#### Langkah 2: Analisis Eksperimen II (Efek Ion Senama Asetat)
Penambahan $\\\\ce{CH3COONa } 0.100\\\\text{ M}$ memasukkan ion asetat senama ($[\\\\ce{CH3COO-}] = 0.100\\\\text{ M}$):
1. **Konsentrasi $[\\\\ce{H+}]$ Baru:**
   Berdasarkan aksi massa kesetimbangan:
   $$K_a = \\\\frac{[\\\\ce{H+}][\\\\ce{CH3COO-}]}{[\\\\ce{CH3COOH}]} \\\\implies [\\\\ce{H+}]_2 = K_a \\\\times \\\\frac{[\\\\ce{CH3COOH}]}{[\\\\ce{CH3COO-}]}$$
   $$[\\\\ce{H+}]_2 = (1.80 \\\\times 10^{-5}) \\\\times \\\\frac{0.100}{0.100} = \\\\mathbf{1.80 \\\\times 10^{-5}\\\\text{ M}}$$
2. **Derajat Ionisasi Baru ($\\\\alpha_2$):**
   Molekul asam asetat yang terurai hanya menghasilkan ion $[\\\\ce{H+}] = 1.80 \\\\times 10^{-5}\\\\text{ M}$:
   $$\\\\alpha_2 = \\\\frac{[\\\\ce{H+}]_2}{C_a} = \\\\frac{1.80 \\\\times 10^{-5}}{0.100} = 1.80 \\\\times 10^{-4} \\\\quad (0.018\\\\%)$$
3. **Nilai pH Baru:**
   $$\\\\text{pH}_2 = -\\\\log(1.80 \\\\times 10^{-5}) = 5 - \\\\log(1.80) = 5 - 0.255 = \\\\mathbf{4.745 \\\\approx 4.74}$$
4. **Rasio Penurunan Derajat Ionisasi:**
   $$\\\\frac{\\\\alpha_1}{\\\\alpha_2} = \\\\frac{0.01342}{0.000180} \\\\approx \\\\mathbf{74.5\\text{ kali lipat!}}$$
   *Penjelasan Fisis Asas Le Chatelier:*  
   Kehadiran ion asetat berlebih dari garam mendesak kesetimbangan penguraian asam asetat ke kiri. Akibatnya, derajat ionisasi asam asetat anjlok drastis $74.5$ kali lipat lebih kecil, dan konsentrasi $[\\\\ce{H+}]$ turun sehingga pH melonjak dari $2.87$ ke $4.74$.

---

#### Langkah 3: Analisis Titik Setengah Ekuivalen pada Kurva Titrasi
1. **Volume Titik Setengah Ekuivalen:**
   - Volume titik ekuivalen total: $V_{eq} = \\\\frac{50.0\\\\text{ mL} \\\\times 0.100\\\\text{ M}}{0.100\\\\text{ M}} = 50.0\\\\text{ mL}$.
   - Titik setengah ekuivalen tercapai tepat pada:
     $$V_{1/2} = \\\\frac{1}{2} V_{eq} = \\\\frac{50.0\\\\text{ mL}}{2} = \\\\mathbf{25.0\\\\text{ mL}}$$
2. **Mengapa Kapasitas Buffer Maksimum pada Titik Ini?**
   - Pada $V_{\\\\ce{NaOH}} = 25.0\\\\text{ mL}$, tepat separuh molekul $\\\\ce{CH3COOH}$ terkonversi menjadi ion $\\\\ce{CH3COO-}$, sehingga $[\\\\ce{CH3COOH}] = [\\\\ce{CH3COO-}]$.
   - Rasio komponen buffer adalah $1 : 1$. Sesuai persamaan kapasitas penyangga Donald Van Slyke:
     $$\\\\beta = 2.303 \\\\times C_{\\\\text{total}} \\\\times \\\\frac{[\\\\ce{HA}][\\\\ce{A-}]}{([\\\\ce{HA}] + [\\\\ce{A-}])^2}$$
     Fungsi ini mencapai nilai maksimum absolut saat $[\\\\ce{HA}] = [\\\\ce{A-}]$.
   - Pada titik ini, resistensi larutan terhadap penambahan asam maupun penambahan basa berada pada puncaknya. Secara matematis pada kurva titrasi, gradien perubahan kurva $d\\\\text{pH}/dV$ mencapai nilai minimum lokal (kurva tampak paling mendatar).

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Dua Karakteristik Keramat Titik Setengah Ekuivalen:**  
> Pada titrasi asam lemah dengan basa kuat, saat volume titran tepat $\\\\frac{1}{2} V_{eq}$:  
> 1. $$\\mathbf{\\\\text{pH} = \\\\text{p}K_a}$$ (karena $\\\\log(1) = 0$). Anda bisa langsung membaca nilai $\\\\text{p}K_a$ asam lemah cukup dengan melihat nilai pH pada setengah volume titik ekuivalen di grafik kurva titrasi!  
> 2. **Kapasitas Penyangga Tertinggi:** Wilayah efektif buffer terbentang pada rentang $\\\\text{pH} = \\\\text{p}K_a \\\\pm 1$ (rasio komponen antara $1:10$ hingga $10:1$).`,
    keyFormulas: [
      { name: 'Derajat Ionisasi Asam Lemah Murni', formula: '\\alpha_1 = \\sqrt{\\frac{K_a}{C_a}}' },
      { name: 'Derajat Ionisasi Efek Ion Senama', formula: '\\alpha_2 = \\frac{K_a}{[\\ce{A-}]_{\\text{garam}}}' },
      { name: 'Kondisi Buffer Maksimum Titrasi', formula: 'V = \\frac{1}{2}V_{eq} \\implies [\\ce{HA}] = [\\ce{A-}] \\implies \\text{pH} = \\text{p}K_a' },
    ],
  },
  {
    tag: 'contoh-hidrolisis-total-dan-sistem-buffer-darah',
    tags: ['hidrolisis-total', 'nh4cn', 'asam-lemah-basa-lemah', 'sistem-penyangga-darah', 'asidosis-alkalosis', 'kapasitas-buffer', 'kimia-sma'],
    title: 'Contoh Soal 5: Komparasi Sifat pH Hidrolisis Total Garam NH4CN vs Sistem Penyangga Karbonat H2CO3/HCO3- dalam Mengatur pH Darah Fisiologis (Level: Sulit / HOTS)',
    summary: 'Kalkulasi pH hidrolisis total garam amonium sianida yang independen terhadap konsentrasi garam (hanya bergantung pada Ka dan Kb), serta aplikasi kuantitatif persamaan Henderson-Hasselbalch pada sistem buffer bikarbonat darah manusia (rasio 20:1) dalam mencegah asidosis dan alkalosis metabolik.',
    content: `### 📋 Skenario Masalah:

**Bagian A: Keunikan Hidrolisis Total Garam Amonium Sianida**  
Garam amonium sianida ($\\\\ce{NH4CN}$) terbentuk dari kation basa lemah amonia ($\\\\ce{NH3}$, $K_b = 1.80 \\\\times 10^{-5}$) dan anion asam lemah asam sianida ($\\\\ce{HCN}$, $K_a = 4.90 \\\\times 10^{-10}$). Sebanyak sampel garam $\\\\ce{NH4CN}$ dilarutkan ke dalam air pada temperatur $25^\\\\circ\\\\text{C}$ ($K_w = 1.00 \\\\times 10^{-14}$).

**Bagian B: Keseimbangan Asam-Basa Fisiologis Darah Manusia**  
Dalam tubuh manusia sehat pada temperatur fisiologis $37^\\\\circ\\\\text{C}$, nilai pH plasma darah dipertahankan secara luar biasa konstan pada angka $\\\\text{pH} = 7.40$. Sistem penyangga utama yang bekerja di dalam plasma darah adalah pasangan asam karbonat dan ion bikarbonat ($\\\\ce{H2CO3 / HCO3-}$), dengan nilai $\\\\text{p}K_{a1} \\\\ce{ H2CO3} = 6.10$.

---

### 🎯 Pertanyaan:
1. Untuk Bagian A:
   a) Tuliskan kedua persamaan reaksi hidrolisis kation dan anion yang berlangsung serempak dalam air!
   b) Hitung nilai tetapan hidrolisis total ($K_h$) garam $\\\\ce{NH4CN}$!
   c) Tentukan apakah larutan garam $\\\\ce{NH4CN}$ bersifat asam, netral, atau basa, dan hitung nilai pH larutan tersebut!
   d) Buktikan secara matematis bahwa nilai pH larutan garam $\\\\ce{NH4CN}$ tidak berubah sedikit pun jika larutan diencerkan $100\\\\times$ lipat!
2. Untuk Bagian B:
   a) Berdasarkan Persamaan Henderson-Hasselbalch, hitung rasio konsentrasi molaritas $[\\\\ce{HCO3-}] / [\\\\ce{H2CO3}]$ di dalam darah pada kondisi normal ($\\\\text{pH} = 7.40$)!
   b) Mengapa rasio komponen buffer darah ini tidak dibuat $1 : 1$ (yang secara teoretis memberikan kapasitas buffer maksimum)?
   c) Jelaskan respon fisiologis sistem pernapasan paru-paru dan sistem ekskresi ginjal ketika tubuh mengalami asidosis metabolik akibat penumpukan asam laktat saat berolahraga berat!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Analisis Hidrolisis Total Garam $\\\\ce{NH4CN}$
1. **Reaksi Hidrolisis Simultan:**
   - Hidrolisis kation: $\\\\ce{NH4+(aq) + H2O(l) <=> NH3(aq) + H3O+(aq)}$
   - Hidrolisis anion: $\\\\ce{CN-(aq) + H2O(l) <=> HCN(aq) + OH-(aq)}$
   - Reaksi hidrolisis total netto:
     $$\\\\ce{NH4+(aq) + CN-(aq) + H2O(l) <=> NH3(aq) + HCN(aq) + H3O+ + OH-}$$
     $$\\\\ce{NH4+(aq) + CN-(aq) <=> NH3(aq) + HCN(aq)}$$
2. **Perhitungan Tetapan Hidrolisis Total ($K_h$):**
   $$K_h = \\\\frac{K_w}{K_a \\\\times K_b} = \\\\frac{1.00 \\\\times 10^{-14}}{(4.90 \\\\times 10^{-10}) \\\\times (1.80 \\\\times 10^{-5})} = \\\\frac{1.00 \\\\times 10^{-14}}{8.82 \\\\times 10^{-15}} = \\\\mathbf{1.134}$$
3. **Penentuan Sifat Asam-Basa & Perhitungan pH:**
   Bandingkan nilai $K_a$ dan $K_b$:
   - $K_b \\ce{ NH3} = 1.80 \\\\times 10^{-5}$
   - $K_a \\ce{ HCN} = 4.90 \\\\times 10^{-10}$
   Karena $K_b > K_a$, anion sianida terhidrolisis lebih kuat menghasilkan ion $\\\\ce{OH-}$ daripada kation amonium menghasilkan ion $\\\\ce{H+}$. Maka:  
   **Larutan garam $\\\\ce{NH4CN}$ bersifat BASA ($\\\\text{pH} > 7$)**.

   Formula matematis konsentrasi ion $[\\\\ce{H+}]$ hidrolisis total:
   $$[\\\\ce{H+}] = \\\\sqrt{\\\\frac{K_w \\\\times K_a}{K_b}}$$
   $$[\\\\ce{H+}] = \\\\sqrt{\\\\frac{(1.00 \\\\times 10^{-14}) \\\\times (4.90 \\\\times 10^{-10})}{1.80 \\\\times 10^{-5}}} = \\\\sqrt{\\\\frac{4.90 \\\\times 10^{-24}}{1.80 \\\\times 10^{-5}}} = \\\\sqrt{2.722 \\\\times 10^{-19}} = \\\\sqrt{27.22 \\\\times 10^{-20}}$$
   $$[\\\\ce{H+}] = \\\\mathbf{5.217 \\\\times 10^{-10}\\\\text{ M}}$$

   Hitung pH:
   $$\\\\mathbf{\\\\text{pH} = -\\\\log(5.217 \\\\times 10^{-10}) = 10 - \\\\log(5.217) = 10 - 0.717 = \\\\mathbf{9.283 \\\\approx 9.28}}$$
4. **Bukti Independensi Konsentrasi:**
   Perhatikan bahwa variabel konsentrasi garam $M_g$ tidak muncul sama sekali dalam rumus $[\\\\ce{H+}] = \\\\sqrt{\\\\frac{K_w K_a}{K_b}}$. Oleh karena itu, berapapun pengenceran yang dilakukan, rasio disosiasi kation dan anion tetap saling menyeimbangkan sehingga nilai pH tetap tepat $9.28$.

---

#### Langkah 2: Analisis Sistem Penyangga Darah Manusia
1. **Menghitung Rasio $[\ce{HCO3-}] / [\ce{H2CO3}]$:**
   Gunakan Persamaan Henderson-Hasselbalch pada $\\\\text{pH} = 7.40$ dan $\\\\text{p}K_a = 6.10$:
   $$\\\\text{pH} = \\\\text{p}K_a + \\\\log\\\\left(\\\\frac{[\\\\ce{HCO3-}]}{[\\\\ce{H2CO3}]}\\\\right)$$
   $$7.40 = 6.10 + \\\\log\\\\left(\\\\frac{[\\\\ce{HCO3-}]}{[\\\\ce{H2CO3}]}\\\\right)$$
   $$\\\\log\\\\left(\\\\frac{[\\\\ce{HCO3-}]}{[\\\\ce{H2CO3}]}\\\\right) = 7.40 - 6.10 = 1.30$$
   $$\\\\frac{[\\\\ce{HCO3-}]}{[\\\\ce{H2CO3}]} = 10^{1.30} \\\\approx \\\\mathbf{20 : 1}$$
   *(Konsentrasi ion bikarbonat basa di dalam darah adalah 20 kali lebih pekat daripada asam karbonat!)*.

2. **Rasionalitas Fisiologis Rasio $20 : 1$:**
   Metabolisme seluler tubuh manusia secara konstan menghasilkan produk buangan yang bersifat asam (asam laktat, asam piruvat, asam keto, dan gas $\\\\ce{CO2}$ yang membentuk asam karbonat). Tubuh hampir tidak pernah memproduksi limbah yang bersifat basa. Oleh karena itu, sistem fisiologis manusia secara cerdas mendesain kapasitas penyerapan terhadap asam $20\\\\times$ lebih besar daripada terhadap basa untuk mencegah kematian akibat asidosis!

3. **Mekanisme Kompensasi Tubuh saat Asidosis Metabolik:**
   Saat asam laktat melonjak ke dalam darah:
   - **Kompensasi Paru-paru (Respiratorik Cepat):** Ion $\\\\ce{H+}$ dinetralkan oleh ion $\\\\ce{HCO3-}$ membentuk $\\\\ce{H2CO3} \\\\to \\\\ce{H2O + CO2}$. Kemoreseptor mendeteksi kenaikan $\\\\ce{CO2}$ dan memicu pusat pernapasan untuk bernapas lebih dalam dan cepat (hiperventilasi) demi membuang kelebihan gas $\\\\ce{CO2}$ keluar tubuh dalam hitungan menit.
   - **Kompensasi Ginjal (Renal Bertahap):** Nefron ginjal meningkatkan sekresi ion $\\\\ce{H+}$ ke dalam urine dan mereabsorpsi ion $\\\\ce{HCO3-}$ kembali ke sirkulasi darah dalam rentang beberapa jam hingga hari untuk memulihkan cadangan buffer bikarbonat.

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Tiga Aturan Emas Hidrolisis Total Garam Asam Lemah-Basa Lemah:**  
> 1. Jika $K_a > K_b \\implies$ Larutan bersifat **ASAM** ($\\text{pH} < 7$).  
> 2. Jika $K_b > K_a \\implies$ Larutan bersifat **BASA** ($\\text{pH} > 7$).  
> 3. Jika $K_a = K_b \\implies$ Larutan bersifat **NETRAL** ($\\text{pH} = 7.00$).  
> Rumus cepat $[\\\\ce{H+}] = \\\\sqrt{\\\\frac{K_w K_a}{K_b}}$ atau $[\\\\ce{OH-}] = \\\\sqrt{\\\\frac{K_w K_b}{K_a}}$ membuktikan bahwa pH hidrolisis total **sama sekali tidak bergantung pada konsentrasi garam**!`,
    keyFormulas: [
      { name: 'Tetapan Hidrolisis Total', formula: 'K_h = \\frac{K_w}{K_a \\times K_b}' },
      { name: 'Rumus Ion H+ Hidrolisis Total', formula: '[\\ce{H+}] = \\sqrt{\\frac{K_w \\times K_a}{K_b}}' },
      { name: 'Rasio Buffer Bikarbonat Darah', formula: '\\frac{[\\ce{HCO3-}]}{[\\ce{H2CO3}]} = 10^{\\text{pH} - \\text{p}K_a} = 10^{7.40 - 6.10} = 20' },
    ],
  },
];

// ============================================================================
// TOPIK 111: Kelarutan & Hasil Kali Kelarutan (Ksp) SMA
// ============================================================================
// ============================================================================
// TOPIK 111: Kelarutan & Hasil Kali Kelarutan (Ksp) SMA
// ============================================================================
export const WORKED_EXAMPLES_TOPIC_111: ConceptBlock[] = [
  {
    tag: 'contoh-kalkulasi-kelarutan-dan-ksp-garam-polivalen',
    tags: ['kelarutan-molar-s', 'hasil-kali-kelarutan-ksp', 'garam-terner-ag2cro4', 'garam-pentamer-ca3po42', 'konversi-kelarutan-massa', 'kimia-sma'],
    title: 'Contoh Soal 1: Penentuan Nilai Ksp Perak Kromat Ag2CrO4 dari Data Kelarutan Massa & Analisis Garam Pentamer Ca3(PO4)2 (Level: Sedang)',
    summary: 'Konversi kelarutan massa (mg/100 mL dan g/L) ke kelarutan molar (s), formulasi kesetimbangan heterogen Ksp tipe terner 2:1 dan pentamer 3:2, serta evaluasi perbandingan nilai Ksp.',
    content: `### 📋 Skenario Masalah & Data Laboratorium:
Di laboratorium kimia analitik sekolah, siswa melakukan investigasi kuantitatif terhadap dua garam sukar larut: perak kromat ($\\ce{Ag2CrO4}$) dan kalsium fosfat ($\\ce{Ca3(PO4)2}$).

**Data Eksperimen 1 (Perak Kromat, $\\ce{Ag2CrO4}$):**
- Massa molar ($M_r$) $\\ce{Ag2CrO4} = 332.0\\text{ g/mol}$.
- Sebanyak $4.316\\text{ mg}$ padatan kristal $\\ce{Ag2CrO4}$ dilarutkan ke dalam air suling murni pada suhu $25^{\\circ}\\text{C}$ hingga diperoleh tepat $100.0\\text{ mL}$ larutan tepat jenuh.

**Data Eksperimen 2 (Kalsium Fosfat, $\\ce{Ca3(PO4)2}$):**
- Massa molar ($M_r$) $\\ce{Ca3(PO4)2} = 310.0\\text{ g/mol}$.
- Pada suhu $25^{\\circ}\\text{C}$, nilai kelarutan molar kalsium fosfat dalam air murni adalah $s = 1.00 \\times 10^{-6}\\text{ mol/L}$.

---

### 🎯 Pertanyaan:
1. Untuk $\\ce{Ag2CrO4}$:
   a) Hitung kelarutan molar ($s$) dalam satuan $\\text{mol/L (M)}$!
   b) Tuliskan persamaan kesetimbangan fasa heterogen dan turunkan hubungan matematis antara $K_{sp}$ dengan $s$!
   c) Hitung nilai tetapan hasil kali kelarutan ($K_{sp}$) $\\ce{Ag2CrO4}$ pada suhu $25^{\\circ}\\text{C}$!
2. Untuk $\\ce{Ca3(PO4)2}$:
   a) Tuliskan persamaan kesetimbangan ionisasi dan rumusan ekspresi $K_{sp}$ dalam variabel $s$!
   b) Hitung nilai tetapan $K_{sp}$ kalsium fosfat pada suhu tersebut!
   c) Hitung massa maksimum kristal $\\ce{Ca3(PO4)2}$ yang dapat larut dalam $2.0\\text{ Liter}$ air murni pada $25^{\\circ}\\text{C}$!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Analisis Kuantitatif Perak Kromat ($\\ce{Ag2CrO4}$)
1. **Menghitung Kelarutan Molar ($s$):**
   - Konversi massa zat terlarut:
     $$\\text{massa} = 4.316\\text{ mg} = 4.316 \\times 10^{-3}\\text{ gram}$$
   - Jumlah mol zat terlarut dalam $100.0\\text{ mL}$ ($0.100\\text{ L}$):
     $$n = \\frac{\\text{massa}}{M_r} = \\frac{4.316 \\times 10^{-3}\\text{ g}}{332.0\\text{ g/mol}} = 1.30 \\times 10^{-5}\\text{ mol}$$
   - Kelarutan molar ($s$) per Liter:
     $$s = \\frac{n}{V} = \\frac{1.30 \\times 10^{-5}\\text{ mol}}{0.100\\text{ L}} = \\mathbf{1.30 \\times 10^{-4}\\text{ mol/L (M)}}$$

2. **Persamaan Kesetimbangan dan Derivasi $K_{sp}$:**
   $$\\ce{Ag2CrO4(s) <=> 2 Ag+(aq) + CrO4^2-(aq)}$$
   Jika kelarutan garam adalah $s$, maka pada kondisi larutan tepat jenuh:
   - $[\\ce{Ag+}] = 2s$
   - $[\\ce{CrO4^2-}] = s$
   
   Ekspresi tetapan hasil kali kelarutan:
   $$K_{sp} = [\\ce{Ag+}]^2 [\\ce{CrO4^2-}] = (2s)^2 \\times (s) = 4s^2 \\times s = \\mathbf{4s^3}$$

3. **Menghitung Nilai $K_{sp}$:**
   Substitusikan nilai $s = 1.30 \\times 10^{-4}\\text{ M}$:
   $$K_{sp} = 4 \\times (1.30 \\times 10^{-4})^3 = 4 \\times (2.197 \\times 10^{-12}) = \\mathbf{8.79 \\times 10^{-12}}$$

---

#### Langkah 2: Analisis Kuantitatif Kalsium Fosfat ($\\ce{Ca3(PO4)2}$)
1. **Persamaan Kesetimbangan dan Derivasi $K_{sp}$ Garam Pentamer ($n = 5$):**
   $$\\ce{Ca3(PO4)2(s) <=> 3 Ca^2+(aq) + 2 PO4^3-(aq)}$$
   Pada kesetimbangan larutan jenuh:
   - $[\\ce{Ca^2+}] = 3s$
   - $[\\ce{PO4^3-}] = 2s$
   
   Ekspresi $K_{sp}$:
   $$K_{sp} = [\\ce{Ca^2+}]^3 [\\ce{PO4^3-}]^2 = (3s)^3 \\times (2s)^2 = 27s^3 \\times 4s^2 = \\mathbf{108s^5}$$

2. **Menghitung Nilai $K_{sp}$:**
   Substitusikan nilai $s = 1.00 \\times 10^{-6}\\text{ M}$:
   $$K_{sp} = 108 \\times (1.00 \\times 10^{-6})^5 = 108 \\times 1.00 \\times 10^{-30} = \\mathbf{1.08 \\times 10^{-28}}$$

3. **Massa Maksimum yang Dapat Larut dalam $2.0\\text{ Liter}$ Air:**
   - Jumlah mol maksimum dalam $2.0\\text{ L}$:
     $$n_{\\text{maks}} = s \\times V = (1.00 \\times 10^{-6}\\text{ mol/L}) \\times 2.0\\text{ L} = 2.00 \\times 10^{-6}\\text{ mol}$$
   - Massa maksimum terlarut:
     $$\\text{massa}_{\\text{maks}} = n_{\\text{maks}} \\times M_r = (2.00 \\times 10^{-6}\\text{ mol}) \\times 310.0\\text{ g/mol}$$
     $$\\text{massa}_{\\text{maks}} = 6.20 \\times 10^{-4}\\text{ gram} = \\mathbf{0.620\\text{ mg}}$$

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Formula Universal Menentukan Hubungan $K_{sp}$ dan $s$:**  
> Untuk senyawa ionik $\\ce{A_x B_y}$:
> $$\\mathbf{K_{sp} = x^x \\cdot y^y \\cdot s^{(x+y)}}$$
> - Garam biner 1:1 ($\\ce{AgCl, BaSO4}$) $\\implies K_{sp} = 1^1 \\cdot 1^1 \\cdot s^2 = \\mathbf{s^2}$
> - Garam terner 1:2 atau 2:1 ($\\ce{Ag2CrO4, PbI2}$) $\\implies K_{sp} = 2^2 \\cdot 1^1 \\cdot s^3 = \\mathbf{4s^3}$
> - Garam kuarterner 1:3 ($\\ce{Al(OH)3, Ag3PO4}$) $\\implies K_{sp} = 1^1 \\cdot 3^3 \\cdot s^4 = \\mathbf{27s^4}$
> - Garam pentamer 2:3 atau 3:2 ($\\ce{Ca3(PO4)2}$) $\\implies K_{sp} = 3^3 \\cdot 2^2 \\cdot s^5 = \\mathbf{108s^5}$  
> **Jebakan Ujian:** Jangan lupa bahwa volume pada kelarutan molar $s$ wajib dinyatakan dalam satuan **Liter**. Jika data soal memberikan volume $100\\text{ mL}$, ubah terlebih dahulu menjadi $0.100\\text{ L}$!`,
    keyFormulas: [
      { name: 'Hubungan Ksp Garam Terner 2:1', formula: 'K_{sp} = 4s^3 \\iff s = \\sqrt[3]{\\frac{K_{sp}}{4}}' },
      { name: 'Hubungan Ksp Garam Pentamer 3:2', formula: 'K_{sp} = 108s^5 \\iff s = \\sqrt[5]{\\frac{K_{sp}}{108}}' },
      { name: 'Formula Universal Ksp', formula: 'K_{sp} = x^x \\cdot y^y \\cdot s^{(x+y)}' },
      { name: 'Kelarutan Massa', formula: 'S (\\text{g/L}) = s (\\text{mol/L}) \\times M_r (\\text{g/mol})' },
    ],
  },
  {
    tag: 'contoh-efek-ion-senama-penurunan-kelarutan-pbi2-dan-baso4',
    tags: ['efek-ion-senama', 'common-ion-effect', 'penurunan-kelarutan', 'asas-le-chatelier', 'pbi2-ki', 'baso4-na2so4', 'kimia-sma'],
    title: 'Contoh Soal 2: Penurunan Kelarutan Akibat Efek Ion Senama pada Garam Biner BaSO4 dan Garam Terner PbI2 (Level: Sedang)',
    summary: 'Penerapan Asas Le Chatelier pada kesetimbangan kelarutan dalam larutan elektrolit yang mengandung ion senama kation maupun anion serta kalkulasi faktor kelipatan penurunannya.',
    content: `### 📋 Skenario Masalah:
Efek ion senama (*common-ion effect*) merupakan fenomena fundamental di mana kelarutan senyawa sukar larut turun drastis jika dilarutkan ke dalam larutan yang telah mengandung ion sejenis. Analisislah dua kasus laboratorium berikut pada temperatur $25^{\\circ}\\text{C}$:

**Kasus 1: Barium Sulfat ($\\ce{BaSO4}$) pada Larutan Natrium Sulfat**  
Diketahui $K_{sp}(\\ce{BaSO4}) = 1.10 \\times 10^{-10}$. Sebanyak padatan kristal $\\ce{BaSO4}$ dilarutkan ke dalam:
a) Air murni.
b) Larutan natrium sulfat ($\\ce{Na2SO4}$) $0.050\\text{ M}$.

**Kasus 2: Timbal(II) Iodida ($\\ce{PbI2}$) pada Dua Jenis Larutan Ion Senama**  
Diketahui $K_{sp}(\\ce{PbI2}) = 7.10 \\times 10^{-9}$. Garam $\\ce{PbI2}$ dilarutkan ke dalam:
a) Air murni.
b) Larutan kalium iodida ($\\ce{KI}$) $0.10\\text{ M}$ (ion senama anion $\\ce{I-}$).
c) Larutan timbal(II) nitrat ($\\ce{Pb(NO3)2}$) $0.10\\text{ M}$ (ion senama kation $\\ce{Pb^2+}$).

---

### 🎯 Pertanyaan:
1. Untuk Kasus 1, hitung kelarutan $\\ce{BaSO4}$ di dalam air murni dan di dalam larutan $\\ce{Na2SO4 } 0.050\\text{ M}$, serta tentukan berapa kali lipat kelarutan $\\ce{BaSO4}$ berkurang akibat kehadiran ion sulfat senama!
2. Untuk Kasus 2:
   a) Hitung kelarutan molar $\\ce{PbI2}$ di dalam air murni!
   b) Hitung kelarutan molar $\\ce{PbI2}$ di dalam larutan $\\ce{KI } 0.10\\text{ M}$!
   c) Hitung kelarutan molar $\\ce{PbI2}$ di dalam larutan $\\ce{Pb(NO3)2 } 0.10\\text{ M}$!
   d) Bandingkan hasil (b) dan (c), lalu jelaskan mengapa ion senama $\\ce{I-}$ menekan kelarutan $\\ce{PbI2}$ jauh lebih drastis daripada ion senama $\\ce{Pb^2+}$ pada konsentrasi molar yang sama!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Penyelesaian Kasus 1 ($\\ce{BaSO4}$)
1. **Kelarutan dalam Air Murni:**
   $$\\ce{BaSO4(s) <=> Ba^2+(aq) + SO4^2-(aq)}$$
   $$K_{sp} = s^2 \\implies s_{\\text{air}} = \\sqrt{K_{sp}} = \\sqrt{1.10 \\times 10^{-10}} = \\mathbf{1.05 \\times 10^{-5}\\text{ mol/L}}$$

2. **Kelarutan dalam Larutan $\\ce{Na2SO4 } 0.050\\text{ M}$:**
   Garam $\\ce{Na2SO4}$ terionisasi sempurna:
   $$\\ce{Na2SO4(aq) -> 2 Na+(aq) + SO4^2-(aq)} \\implies [\\ce{SO4^2-}]_{\\text{senama}} = 0.050\\text{ M}$$
   Misalkan kelarutan $\\ce{BaSO4}$ yang baru $= s'$.
   Pada kesetimbangan:
   - $[\\ce{Ba^2+}] = s'$
   - $[\\ce{SO4^2-}] = 0.050 + s' \\approx 0.050\\text{ M}$ *(karena $s' \\ll 0.050$)*.
   
   Substitusikan ke persamaan $K_{sp}$:
   $$K_{sp} = [\\ce{Ba^2+}][\\ce{SO4^2-}]$$
   $$1.10 \\times 10^{-10} = s' \\times 0.050$$
   $$s' = \\frac{1.10 \\times 10^{-10}}{0.050} = \\mathbf{2.20 \\times 10^{-9}\\text{ mol/L}}$$

3. **Faktor Penurunan Kelarutan:**
   $$\\text{Faktor Penurunan} = \\frac{s_{\\text{air}}}{s'} = \\frac{1.05 \\times 10^{-5}\\text{ M}}{2.20 \\times 10^{-9}\\text{ M}} \\approx \\mathbf{4772\\text{ kali lipat}}$$

---

#### Langkah 2: Penyelesaian Kasus 2 ($\\ce{PbI2}$)
1. **Kelarutan dalam Air Murni:**
   $$\\ce{PbI2(s) <=> Pb^2+(aq) + 2 I-(aq)}$$
   $$K_{sp} = (s)(2s)^2 = 4s^3$$
   $$4s^3 = 7.10 \\times 10^{-9} \\implies s^3 = 1.775 \\times 10^{-9}$$
   $$s_{\\text{air}} = \\sqrt[3]{1.775 \\times 10^{-9}} \\approx \\mathbf{1.21 \\times 10^{-3}\\text{ mol/L}}$$

2. **Kelarutan dalam $\\ce{KI } 0.10\\text{ M}$ (Ion Senama $\\ce{I-}$):**
   Ion $\\ce{I-}$ berasal dari $\\ce{KI}$: $[\\ce{I-}] = 0.10\\text{ M}$.
   Pada kesetimbangan: $[\\ce{Pb^2+}] = s_1$ dan $[\\ce{I-}] = 0.10 + 2s_1 \\approx 0.10\\text{ M}$.
   $$K_{sp} = [\\ce{Pb^2+}][\\ce{I-}]^2$$
   $$7.10 \\times 10^{-9} = s_1 \\times (0.10)^2 = s_1 \\times 1.0 \\times 10^{-2}$$
   $$s_1 = \\frac{7.10 \\times 10^{-9}}{1.0 \\times 10^{-2}} = \\mathbf{7.10 \\times 10^{-7}\\text{ mol/L}}$$
   *(Kelarutan turun $\\frac{1.21 \\times 10^{-3}}{7.10 \\times 10^{-7}} \\approx 1704\\text{ kali lipat}!$)*.

3. **Kelarutan dalam $\\ce{Pb(NO3)2 } 0.10\\text{ M}$ (Ion Senama $\\ce{Pb^2+}$):**
   Ion $\\ce{Pb^2+}$ berasal dari timbal nitrat: $[\\ce{Pb^2+}] = 0.10\\text{ M}$.
   Pada kesetimbangan: $[\\ce{Pb^2+}] = 0.10 + s_2 \\approx 0.10\\text{ M}$ dan $[\\ce{I-}] = 2s_2$.
   $$K_{sp} = [\\ce{Pb^2+}][\\ce{I-}]^2$$
   $$7.10 \\times 10^{-9} = (0.10) \\times (2s_2)^2 = 0.10 \\times 4s_2^2 = 0.40 s_2^2$$
   $$s_2^2 = \\frac{7.10 \\times 10^{-9}}{0.40} = 1.775 \\times 10^{-8}$$
   $$s_2 = \\sqrt{1.775 \\times 10^{-8}} \\approx \\mathbf{1.33 \\times 10^{-4}\\text{ mol/L}}$$
   *(Kelarutan hanya turun $\\frac{1.21 \\times 10^{-3}}{1.33 \\times 10^{-4}} \\approx 9.1\\text{ kali lipat}$)*.

4. **Analisis Komparasi Pengaruh Posisi Stoikiometri Ion Senama:**
   - Kelarutan dalam $\\ce{KI}$ ($s_1 = 7.10 \\times 10^{-7}\\text{ M}$) jauh lebih kecil daripada kelarutan dalam $\\ce{Pb(NO3)2}$ ($s_2 = 1.33 \\times 10^{-4}\\text{ M}$).
   - **Rasionalitas Matematika & Kimia:** Pada ekspresi $K_{sp} = [\\ce{Pb^2+}][\\ce{I-}]^2$, konsentrasi ion iodida dipangkatkan dua ($[\\ce{I-}]^2$), sedangkan ion timbal hanya berpangkat satu ($[\\ce{Pb^2+}]^1$). Kehadiran ion senama yang memiliki koefisien reaksi lebih tinggi memberikan efek penekanan kuadratik yang berlipat ganda jauh lebih kuat terhadap kelarutan!

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Aturan Aproksimasi Cepat Ion Senama:**  
> Ketika menambahkan garam ion senama dengan konsentrasi $C \\ge 10^{-3}\\text{ M}$ ke dalam sistem garam sukar larut ($K_{sp} \\le 10^{-8}$):
> 1. Abaikan selalu kontribusi ion senama dari disosiasi padatan ($C + x \\approx C$).
> 2. Jangan pernah mengabaikan pangkat stoikiometri! Jika ion senama adalah anion bervalensi 2 seperti $[\\ce{I-}]^2$, masukkan langsung $(C)^2$.
> 3. Trik Ujian UTBK: Jika ditanya *"larutan manakah yang kelarutannya paling kecil?"*, cari larutan yang menghasilkan konsentrasi ion senama tertinggi, terutama ion senama yang memiliki pangkat koefisien terbesar!`,
    keyFormulas: [
      { name: 'Kelarutan Biner dengan Ion Senama', formula: 's_{\\text{baru}} = \\frac{K_{sp}}{[\\text{Ion Senama}]}' },
      { name: 'Kelarutan Terner dengan Ion Senama Anion', formula: 's_{\\text{baru}} = \\frac{K_{sp}}{[\\text{Anion Senama}]^2}' },
      { name: 'Kelarutan Terner dengan Ion Senama Kation', formula: 's_{\\text{baru}} = \\sqrt{\\frac{K_{sp}}{4 \\times [\\text{Kation Senama}]}}' },
    ],
  },
  {
    tag: 'contoh-prediksi-pengendapan-qsp-dan-pengenceran-larutan',
    tags: ['kuosien-ion-qsp', 'kriteria-pengendapan', 'pengenceran-larutan', 'baso4', 'ag2cro4', 'kimia-sma'],
    title: 'Contoh Soal 3: Prediksi Pembentukan Endapan BaSO4 dan Ag2CrO4 Melalui Perhitungan Kuosien Ion Qsp dengan Koreksi Volume Pengenceran Total (Level: Sedang)',
    summary: 'Perhitungan konsentrasi ion sesaat setelah pencampuran dua larutan elektrolit bervolume berbeda, penentuan kuosien ion Qsp, dan komparasi terhadap Ksp untuk menetapkan status pengendapan.',
    content: `### 📋 Skenario Masalah:
Di laboratorium, pencampuran dua larutan elektrolit terlarut dapat memicu pembentukan endapan padat jika perkalian konsentrasi ion sesaatnya melampaui batas kelarutan termodinamika ($Q_{sp} > K_{sp}$). Tinjau dua uji reaksi presipitasi pada suhu $25^{\\circ}\\text{C}$:

**Percobaan A: Pencampuran Barium Klorida dan Kalium Sulfat**
Sebanyak $200.0\\text{ mL}$ larutan $\\ce{BaCl2 } 4.00 \\times 10^{-5}\\text{ M}$ dicampurkan dengan $300.0\\text{ mL}$ larutan $\\ce{K2SO4 } 6.00 \\times 10^{-5}\\text{ M}$.  
Diketahui $K_{sp}(\\ce{BaSO4}) = 1.10 \\times 10^{-10}$.

**Percobaan B: Pencampuran Perak Nitrat dan Kalium Kromat**
Sebanyak $100.0\\text{ mL}$ larutan $\\ce{AgNO3 } 2.00 \\times 10^{-4}\\text{ M}$ dicampurkan dengan $400.0\\text{ mL}$ larutan $\\ce{K2CrO4 } 1.00 \\times 10^{-4}\\text{ M}$.  
Diketahui $K_{sp}(\\ce{Ag2CrO4}) = 8.80 \\times 10^{-12}$.

---

### 🎯 Pertanyaan:
1. Untuk Percobaan A:
   a) Hitung volume total campuran dan konsentrasi molar ion $[\\ce{Ba^2+}]$ serta $[\\ce{SO4^2-}]$ tepat saat pencampuran berlangsung!
   b) Tentukan nilai kuosien ion ($Q_{sp}$) $\\ce{BaSO4}$!
   c) Prediksikan apakah terbentuk endapan padat $\\ce{BaSO4}$ atau larutan tetap jernih!
2. Untuk Percobaan B:
   a) Hitung konsentrasi ion $[\\ce{Ag+}]$ dan $[\\ce{CrO4^2-}]$ sesaat setelah pencampuran!
   b) Hitung nilai kuosien ion ($Q_{sp}$) $\\ce{Ag2CrO4}$!
   c) Berdasarkan kriteria $Q_{sp}$ vs $K_{sp}$, apakah pada Percobaan B terbentuk endapan merah bata $\\ce{Ag2CrO4}$?

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Evaluasi Percobaan A ($\\ce{BaSO4}$)
1. **Perhitungan Volume Total dan Konsentrasi Pengenceran:**
   $$V_{\\text{total}} = V_1 + V_2 = 200.0\\text{ mL} + 300.0\\text{ mL} = \\mathbf{500.0\\text{ mL}}$$
   Konsentrasi ion barium dalam campuran:
   $$[\\ce{Ba^2+}] = \\frac{M_1 \\times V_1}{V_{\\text{total}}} = \\frac{(4.00 \\times 10^{-5}\\text{ M}) \\times 200.0\\text{ mL}}{500.0\\text{ mL}} = \\mathbf{1.60 \\times 10^{-5}\\text{ M}}$$
   Konsentrasi ion sulfat dalam campuran:
   $$[\\ce{SO4^2-}] = \\frac{M_2 \\times V_2}{V_{\\text{total}}} = \\frac{(6.00 \\times 10^{-5}\\text{ M}) \\times 300.0\\text{ mL}}{500.0\\text{ mL}} = \\mathbf{3.60 \\times 10^{-5}\\text{ M}}$$

2. **Menghitung Kuosien Ion ($Q_{sp}$):**
   Reaksi pengendapan: $\\ce{Ba^2+(aq) + SO4^2-(aq) <=> BaSO4(s)}$
   $$Q_{sp} = [\\ce{Ba^2+}][\\ce{SO4^2-}] = (1.60 \\times 10^{-5}) \\times (3.60 \\times 10^{-5}) = \\mathbf{5.76 \\times 10^{-10}}$$

3. **Perbandingan $Q_{sp}$ dengan $K_{sp}$:**
   $$Q_{sp} = 5.76 \\times 10^{-10} \\quad \\text{vs} \\quad K_{sp} = 1.10 \\times 10^{-10}$$
   Karena $\\mathbf{Q_{sp} > K_{sp}}$, larutan berada dalam kondisi **lewat jenuh (*supersaturated*)**.
   **Kesimpulan Percobaan A:** **TERBENTUK ENDAPAN PUTIH $\\ce{BaSO4}$**.

---

#### Langkah 2: Evaluasi Percobaan B ($\\ce{Ag2CrO4}$)
1. **Perhitungan Volume Total dan Konsentrasi Pengenceran:**
   $$V_{\\text{total}} = 100.0\\text{ mL} + 400.0\\text{ mL} = \\mathbf{500.0\\text{ mL}}$$
   Konsentrasi ion perak dalam campuran:
   $$[\\ce{Ag+}] = \\frac{(2.00 \\times 10^{-4}\\text{ M}) \\times 100.0\\text{ mL}}{500.0\\text{ mL}} = \\mathbf{4.00 \\times 10^{-5}\\text{ M}}$$
   Konsentrasi ion kromat dalam campuran:
   $$[\\ce{CrO4^2-}] = \\frac{(1.00 \\times 10^{-4}\\text{ M}) \\times 400.0\\text{ mL}}{500.0\\text{ mL}} = \\mathbf{8.00 \\times 10^{-5}\\text{ M}}$$

2. **Menghitung Kuosien Ion ($Q_{sp}$):**
   Reaksi pengendapan: $\\ce{2 Ag+(aq) + CrO4^2-(aq) <=> Ag2CrO4(s)}$
   Perhatikan pangkat stoikiometri ion $\\ce{Ag+}$:
   $$Q_{sp} = [\\ce{Ag+}]^2 [\\ce{CrO4^2-}]$$
   $$Q_{sp} = (4.00 \\times 10^{-5})^2 \\times (8.00 \\times 10^{-5})$$
   $$Q_{sp} = (1.60 \\times 10^{-9}) \\times (8.00 \\times 10^{-5}) = \\mathbf{1.28 \\times 10^{-13}}$$

3. **Perbandingan $Q_{sp}$ dengan $K_{sp}$:**
   $$Q_{sp} = 1.28 \\times 10^{-13} \\quad \\text{vs} \\quad K_{sp} = 8.80 \\times 10^{-12}$$
   Karena $\\mathbf{Q_{sp} < K_{sp}}$, larutan berada dalam kondisi **belum jenuh (*unsaturated*)**.
   **Kesimpulan Percobaan B:** **TIDAK TERBENTUK ENDAPAN** (larutan tetap homogen jernih berwarna kuning kromat).

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Dua Kesalahan Fatal yang Paling Sering Terjadi pada Ujian Nasional & UTBK:**  
> 1. **Lupa Memperhitungkan Volume Total ($V_1 + V_2$):** Siswa sering langsung mengalikan konsentrasi awal larutan tanpa pengenceran ($4.0 \\times 10^{-5} \\times 6.0 \\times 10^{-5}$), padahal konsentrasi ion menurun begitu dicampurkan!  
> 2. **Lupa Memangkatkan Koefisien pada $Q_{sp}$:** Pada garam tipe terner seperti $\\ce{Ag2CrO4}$, ion $\\ce{Ag+}$ WAJIB dikuadratkan: $Q_{sp} = [\\ce{Ag+}]^2 [\\ce{CrO4^2-}]$. Jika lupa menguadratkan, nilai $Q_{sp}$ yang diperoleh akan salah total.`,
    keyFormulas: [
      { name: 'Rumus Pengenceran Konsentrasi Campuran', formula: 'M_{\\text{campuran}} = \\frac{M_1 V_1}{V_1 + V_2}' },
      { name: 'Rumus Kuosien Ion Qsp Terner', formula: 'Q_{sp} = [\\ce{A+}]^2 [\\ce{B^2-}]' },
      { name: 'Kriteria Terbentuk Endapan', formula: 'Q_{sp} > K_{sp} \\implies \\text{Terjadi Presipitasi (Mengendap)}' },
    ],
  },
  {
    tag: 'contoh-pengaruh-ph-dan-buffer-kelarutan-hidroksida-logam',
    tags: ['pengaruh-ph-ksp', 'kelarutan-hidroksida', 'ph-kritis-pengendapan', 'mgoh2-feoh3', 'sistem-buffer', 'kimia-sma'],
    title: 'Contoh Soal 4: Regulasi Derajat Keasaman (pH) dan Sistem Penyangga terhadap Pengendapan Selektif Magnesium Hidroksida Mg(OH)2 & Besi(III) Hidroksida Fe(OH)3 (Level: Sulit / HOTS)',
    summary: 'Penentuan batas pH kritis pengendapan hidroksida logam divalen dan trivalen, evaluasi kelarutan di dalam sistem larutan penyangga amonia-amonium klorida, serta pencegahan pengendapan menggunakan buffer pH.',
    content: `### 📋 Skenario Masalah:
Dalam proses pengolahan air limbah industri dan analisis pemisahan kation kualitatif di laboratorium, pengendalian derajat keasaman ($\\text{pH}$) menggunakan larutan penyangga (*buffer*) dimanfaatkan untuk mengendapkan ion logam berat beracun tanpa mengendapkan ion logam ramah lingkungan.

Tersedia suatu larutan yang mengandung campuran kation:
- Ion besi(III): $[\\ce{Fe^3+}] = 1.00 \\times 10^{-3}\\text{ M}$
- Ion magnesium: $[\\ce{Mg^2+}] = 1.00 \\times 10^{-2}\\text{ M}$

Diketahui data tetapan hasil kali kelarutan pada temperatur $25^{\\circ}\\text{C}$:
- $K_{sp}(\\ce{Fe(OH)3}) = 4.00 \\times 10^{-38}$
- $K_{sp}(\\ce{Mg(OH)2}) = 1.80 \\times 10^{-11}$
- $K_w = 1.00 \\times 10^{-14}$

---

### 🎯 Pertanyaan:
1. Tentukan nilai konsentrasi ion hidroksida minimum ($[\\ce{OH-}]_{\\text{kritis}}$) dan nilai $\\text{pH}$ saat endapan $\\ce{Fe(OH)3}$ tepat mulai terbentuk!
2. Tentukan nilai $[\\ce{OH-}]_{\\text{kritis}}$ dan nilai $\\text{pH}$ saat endapan $\\ce{Mg(OH)2}$ tepat mulai terbentuk!
3. Jika ke dalam campuran tersebut ditambahkan larutan penyangga $\\ce{NH3 / NH4Cl}$ sehingga $\\text{pH}$ larutan terkunci stabil pada $\\text{pH} = 8.00$:
   a) Apakah $\\ce{Fe(OH)3}$ akan mengendap?
   b) Apakah $\\ce{Mg(OH)2}$ akan mengendap?
   c) Hitung konsentrasi ion $\\ce{Fe^3+}$ yang masih tersisa di dalam larutan pada $\\text{pH} = 8.00$ tersebut, dan buktikan bahwa pemisahan ion besi dari ion magnesium berlangsung secara tuntas!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Batas pH Kritis Pengendapan $\\ce{Fe(OH)3}$
Kesetimbangan pengendapan besi(III) hidroksida:
$$\\ce{Fe(OH)3(s) <=> Fe^3+(aq) + 3 OH-(aq)} \\quad K_{sp} = [\\ce{Fe^3+}][\\ce{OH-}]^3$$
Endapan tepat mulai terbentuk pada saat $Q_{sp} = K_{sp}$:
$$(1.00 \\times 10^{-3}) \\times [\\ce{OH-}]^3 = 4.00 \\times 10^{-38}$$
$$[\\ce{OH-}]^3 = \\frac{4.00 \\times 10^{-38}}{1.00 \\times 10^{-3}} = 4.00 \\times 10^{-35} = 40.0 \\times 10^{-36}$$
$$[\\ce{OH-}]_{\\text{kritis}} = \\sqrt[3]{40.0 \\times 10^{-36}} \\approx \\mathbf{3.42 \\times 10^{-12}\\text{ M}}$$

Hitung pOH dan pH kritis:
$$\\text{pOH} = -\\log(3.42 \\times 10^{-12}) = 12 - \\log(3.42) = 12 - 0.534 = 11.466$$
$$\\mathbf{\\text{pH}_{\\text{kritis}}(\\ce{Fe(OH)3}) = 14.00 - 11.466 = 2.534 \\approx 2.53}$$
*(Artinya: Bahkan pada suasana asam sekalipun dengan $\\text{pH} \\ge 2.53$, ion $\\ce{Fe^3+}$ sudah mulai mengendap karena nilai $K_{sp}$-nya luar biasa kecil!).*

---

#### Langkah 2: Batas pH Kritis Pengendapan $\\ce{Mg(OH)2}$
Kesetimbangan pengendapan magnesium hidroksida:
$$\\ce{Mg(OH)2(s) <=> Mg^2+(aq) + 2 OH-(aq)} \\quad K_{sp} = [\\ce{Mg^2+}][\\ce{OH-}]^2$$
Endapan tepat mulai terbentuk pada saat $Q_{sp} = K_{sp}$:
$$(1.00 \\times 10^{-2}) \\times [\\ce{OH-}]^2 = 1.80 \\times 10^{-11}$$
$$[\\ce{OH-}]^2 = \\frac{1.80 \\times 10^{-11}}{1.00 \\times 10^{-2}} = 1.80 \\times 10^{-9} = 18.0 \\times 10^{-10}$$
$$[\\ce{OH-}]_{\\text{kritis}} = \\sqrt{18.0 \\times 10^{-10}} \\approx \\mathbf{4.24 \\times 10^{-5}\\text{ M}}$$

Hitung pOH dan pH kritis:
$$\\text{pOH} = -\\log(4.24 \\times 10^{-5}) = 5 - \\log(4.24) = 5 - 0.627 = 4.373$$
$$\\mathbf{\\text{pH}_{\\text{kritis}}(\\ce{Mg(OH)2}) = 14.00 - 4.373 = 9.627 \\approx 9.63}$$
*(Artinya: Endapan padat $\\ce{Mg(OH)2}$ baru dapat terbentuk jika larutan dibuat bersuasana basa cukup kuat dengan $\\text{pH} \\ge 9.63$).*

---

#### Langkah 3: Evaluasi Kondisi pada Sistem Buffer $\\text{pH} = 8.00$
Pada larutan dengan sistem penyangga $\\text{pH} = 8.00$:
$$\\text{pOH} = 14.00 - 8.00 = 6.00 \\implies [\\ce{OH-}] = 1.00 \\times 10^{-6}\\text{ M}$$

1. **Status Pengendapan $\\ce{Fe(OH)3}$:**
   Karena $\\text{pH} (8.00) \\gg \\text{pH}_{\\text{kritis}} (2.53)$, atau:
   $$Q_{sp} = [\\ce{Fe^3+}][\\ce{OH-}]^3 = (1.00 \\times 10^{-3}) \\times (1.00 \\times 10^{-6})^3 = 1.00 \\times 10^{-21} \\gg 4.00 \\times 10^{-38}$$
   Maka: **$\\ce{Fe(OH)3}$ MENGENDAP SEMPURNA** sebagai endapan gel cokelat kemerahan.

2. **Status Pengendapan $\\ce{Mg(OH)2}$:**
   Karena $\\text{pH} (8.00) < \\text{pH}_{\\text{kritis}} (9.63)$, atau:
   $$Q_{sp} = [\\ce{Mg^2+}][\\ce{OH-}]^2 = (1.00 \\times 10^{-2}) \\times (1.00 \\times 10^{-6})^2 = 1.00 \\times 10^{-14} < 1.80 \\times 10^{-11}$$
   Maka: **$\\ce{Mg(OH)2}$ TIDAK MENGENDAP** (seluruh ion $\\ce{Mg^2+}$ tetap larut dalam filtrat).

3. **Konsentrasi Sisa Ion $\\ce{Fe^3+}$ di Larutan pada $\\text{pH} = 8.00$:**
   Dalam filtrat yang berada dalam kesetimbangan dengan endapan $\\ce{Fe(OH)3}$:
   $$[\\ce{Fe^3+}]_{\\text{sisa}} = \\frac{K_{sp}(\\ce{Fe(OH)3})}{[\\ce{OH-}]^3} = \\frac{4.00 \\times 10^{-38}}{(1.00 \\times 10^{-6})^3} = \\frac{4.00 \\times 10^{-38}}{1.00 \\times 10^{-18}} = \\mathbf{4.00 \\times 10^{-20}\\text{ M}}$$
   - Persentase ion $\\ce{Fe^3+}$ yang masih tertinggal:
     $$\\% \\text{ sisa} = \\frac{4.00 \\times 10^{-20}\\text{ M}}{1.00 \\times 10^{-3}\\text{ M}} \\times 100\\% = 4.00 \\times 10^{-15}\\%$$
   - Persentase ion besi yang berhasil dipisahkan:
     $$\\% \\text{ terendap} \\approx \\mathbf{99.99999999999996\\%}$$
   Hal ini membuktikan bahwa penyesuaian pH pada rentang $3.0 - 9.0$ mampu memisahkan ion $\\ce{Fe^3+}$ dari $\\ce{Mg^2+}$ dengan efisiensi kuantitatif yang sempurna!

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Strategi Pemisahan Kation Logam Berdasarkan Regulasi pH:**  
> 1. Logam transisi bervalensi 3 ($\\ce{Fe^3+, Al^3+, Cr^3+}$) memiliki nilai $K_{sp}$ hidroksida yang sangat kecil ($10^{-30} \\text{ s.d. } 10^{-38}$), sehingga mengendap pada suasana asam/sedikit basa ($\\text{pH} \\approx 2.5 - 4.5$).  
> 2. Logam transisi bervalensi 2 ($\\ce{Fe^2+, Zn^2+, Ni^2+}$) mengendap pada pH netral/sedikit basa ($\\text{pH} \\approx 6.5 - 8.0$).  
> 3. Logam alkali tanah ($\\ce{Mg^2+, Ca^2+, Ba^2+}$) memiliki hidroksida yang jauh lebih mudah larut ($K_{sp} \\approx 10^{-11} \\text{ s.d. } 10^{-3}$), sehingga membutuhkan lingkungan sangat basa ($\\text{pH} > 9.6 - 12.0$) untuk mengendap.  
> Oleh karena itu, larutan buffer amonia ($\\ce{NH3 + NH4Cl}$, $\\text{pH} \\approx 8.5 - 9.0$) lazim digunakan pada pemisahan kualitatif kation golongan III dari kation golongan IV dan V!`,
    keyFormulas: [
      { name: '[OH-] Kritis Hidroksida Divalen', formula: '[\\ce{OH-}] = \\sqrt{\\frac{K_{sp}}{[\\ce{M^2+}]}}' },
      { name: '[OH-] Kritis Hidroksida Trivalen', formula: '[\\ce{OH-}] = \\sqrt[3]{\\frac{K_{sp}}{[\\ce{M^3+}]}}' },
      { name: 'Konsentrasi Sisa Kation pada pH Tertentu', formula: '[\\ce{M^{n+}}]_{\\text{sisa}} = \\frac{K_{sp}}{[\\ce{OH-}]^n}' },
    ],
  },
  {
    tag: 'contoh-pengendapan-selektif-fraksional-dan-argentometri-mohr',
    tags: ['pengendapan-selektif', 'fractional-precipitation', 'titrasi-mohr', 'pemisahan-klorida-iodida', 'argentometri', 'efisiensi-analitik', 'kimia-sma'],
    title: 'Contoh Soal 5: Analisis Pengendapan Fraksional Halida (Cl- vs I-) dengan Titran AgNO3 & Perhitungan Kuantitatif Efisiensi Pemisahan Analitik (Level: Sulit / HOTS)',
    summary: 'Kalkulasi stoikiometri pengendapan bertahap dua anion halogen oleh kation Ag+, evaluasi konsentrasi ion sisa saat endapan kedua tepat mulai muncul, serta penentuan persentase efisiensi analitik kuantitatif.',
    content: `### 📋 Skenario Masalah:
Dalam teknik kimia analitik kuantitatif dan metode titrasi Mohr/argentometri, pengendapan selektif (*fractional precipitation*) digunakan untuk memisahkan campuran anion halida dengan memanfaatkan disparitas nilai tetapan hasil kali kelarutannya yang sangat lebar.

Suatu sampel larutan air tanah analitik bervolume $500.0\\text{ mL}$ mengandung campuran ion:
- Ion klorida: $[\\ce{Cl-}] = 0.0200\\text{ M}$
- Ion iodida: $[\\ce{I-}] = 0.0200\\text{ M}$

Ke dalam larutan tersebut diteteskan larutan perak nitrat ($\\ce{AgNO3}$) standar $0.0500\\text{ M}$ setetes demi setetes dengan pengadukan konstan pada suhu $25^{\\circ}\\text{C}$.  
Diketahui data tetapan hasil kali kelarutan:
- $K_{sp}(\\ce{AgCl}) = 1.80 \\times 10^{-10}$
- $K_{sp}(\\ce{AgI}) = 8.50 \\times 10^{-17}$

---

### 🎯 Pertanyaan:
1. Hitung konsentrasi ion perak minimum ($[\\ce{Ag+}]_{\\text{kritis}}$) yang dibutuhkan untuk memicu pembentukan endapan masing-masing garam! Garam perak manakah yang akan mengendap terlebih dahulu sebagai fraksi padat pertama?
2. Berapakah konsentrasi ion iodida ($[\\ce{I-}]_{\\text{sisa}}$) yang masih tertinggal di dalam larutan tepat saat garam perak kedua ($\\ce{AgCl}$) mulai mengendap?
3. Hitung persentase ion iodida ($\\%$) yang telah berhasil diendapkan dari larutan sebelum perak klorida mulai terbentuk! Apakah proses pemisahan selektif ini dapat dikategorikan sebagai pemisahan kuantitatif yang tuntas ($> 99.9\\%$)?
4. Berapakah volume larutan $\\ce{AgNO3 } 0.0500\\text{ M}$ yang harus ditambahkan untuk mengendapkan seluruh ion iodida hingga titik tepat sebelum perak klorida mulai terbentuk?

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Menentukan Konsentrasi $[\\ce{Ag+}]$ Minimum dan Urutan Pengendapan
Garam akan mengendap jika $Q_{sp} \\ge K_{sp}$.
1. **Untuk Memulai Pengendapan Perak Iodida ($\\ce{AgI}$):**
   $$\\ce{AgI(s) <=> Ag+(aq) + I-(aq)} \\quad K_{sp} = [\\ce{Ag+}][\\ce{I-}]$$
   $$[\\ce{Ag+}]_{\\text{kritis}}(\\ce{AgI}) = \\frac{K_{sp}(\\ce{AgI})}{[\\ce{I-}]} = \\frac{8.50 \\times 10^{-17}}{0.0200\\text{ M}} = \\mathbf{4.25 \\times 10^{-15}\\text{ M}}$$

2. **Untuk Memulai Pengendapan Perak Klorida ($\\ce{AgCl}$):**
   $$\\ce{AgCl(s) <=> Ag+(aq) + Cl-(aq)} \\quad K_{sp} = [\\ce{Ag+}][\\ce{Cl-}]$$
   $$[\\ce{Ag+}]_{\\text{kritis}}(\\ce{AgCl}) = \\frac{K_{sp}(\\ce{AgCl})}{[\\ce{Cl-}]} = \\frac{1.80 \\times 10^{-10}}{0.0200\\text{ M}} = \\mathbf{9.00 \\times 10^{-9}\\text{ M}}$$

**Analisis Urutan:**
$$[\\ce{Ag+}]_{\\text{kritis}}(\\ce{AgI}) = 4.25 \\times 10^{-15}\\text{ M} \\ll [\\ce{Ag+}]_{\\text{kritis}}(\\ce{AgCl}) = 9.00 \\times 10^{-9}\\text{ M}$$
Karena ion iodida membutuhkan konsentrasi ion perak yang jauh lebih kecil (sekitar $2$ juta kali lebih sedikit!), maka:
**Endapan kuning pucat $\\ce{AgI}$ akan MENGENDAP TERLEBIH DAHULU**.

---

#### Langkah 2: Konsentrasi Sisa $[\\ce{I-}]$ Saat $\\ce{AgCl}$ Mulai Mengendap
Garam perak klorida ($\\ce{AgCl}$) tepat mulai terbentuk saat konsentrasi ion perak di larutan mencapai nilai ambang batasnya:
$$[\\ce{Ag+}] = 9.00 \\times 10^{-9}\\text{ M}$$

Pada saat titik kritis ini tercapai, kesetimbangan heterogen $\\ce{AgI}$ tetap berlaku di dalam larutan:
$$K_{sp}(\\ce{AgI}) = [\\ce{Ag+}][\\ce{I-}]_{\\text{sisa}} = 8.50 \\times 10^{-17}$$
$$[\\ce{I-}]_{\\text{sisa}} = \\frac{K_{sp}(\\ce{AgI})}{[\\ce{Ag+}]} = \\frac{8.50 \\times 10^{-17}}{9.00 \\times 10^{-9}\\text{ M}} \\approx \\mathbf{9.44 \\times 10^{-9}\\text{ mol/L}}$$

---

#### Langkah 3: Evaluasi Persentase Efisiensi Pemisahan Kuantitatif
- **Fraksi Sisa Ion Iodida:**
  $$\\% \\text{ sisa } \\ce{I-} = \\frac{[\\ce{I-}]_{\\text{sisa}}}{[\\ce{I-}]_{\\text{mula-mula}}} \\times 100\\% = \\frac{9.44 \\times 10^{-9}\\text{ M}}{0.0200\\text{ M}} \\times 100\\% \\approx 4.72 \\times 10^{-5}\\%$$
- **Persentase Ion Iodida yang Berhasil Diendapkan:**
  $$\\% \\text{ terendap} = 100\\% - 4.72 \\times 10^{-5}\\% = \\mathbf{99.99995\\%}$$

**Evaluasi Kuantitatif:**
Karena persentase ion iodida yang terendapkan ($99.99995\\%$) jauh melampaui batas standar kimia analitik ($> 99.9\\%$), maka pemisahan selektif ion $\\ce{I-}$ dari ion $\\ce{Cl-}$ berlangsung **sangat tuntas dan sempurna secara kuantitatif** tanpa terjadi kontaminasi silang.

---

#### Langkah 4: Menghitung Volume Titran $\\ce{AgNO3}$ yang Dibutuhkan
Untuk mengendapkan seluruh ion $\\ce{I-}$ dalam $500.0\\text{ mL}$ larutan:
- Jumlah mol ion $\\ce{I-}$ mula-mula:
  $$n(\\ce{I-}) = M \\times V = (0.0200\\text{ mmol/mL}) \\times 500.0\\text{ mL} = 10.0\\text{ mmol}$$
- Berdasarkan reaksi stoikiometri $1 : 1$:
  $$\\ce{Ag+(aq) + I-(aq) -> AgI(s)}$$
  Jumlah mol $\\ce{Ag+}$ yang dibutuhkan $= 10.0\\text{ mmol}$.
- Volume larutan $\\ce{AgNO3 } 0.0500\\text{ M}$ yang harus ditambahkan:
  $$V(\\ce{AgNO3}) = \\frac{n}{M} = \\frac{10.0\\text{ mmol}}{0.0500\\text{ mmol/mL}} = \\mathbf{200.0\\text{ mL}}$$

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Penerapan Prinsip Pengendapan Selektif pada Titrasi Mohr:**  
> Pada titrasi argentometri metode Mohr, ion kromat ($\\ce{CrO4^2-}$) ditambahkan sebagai indikator penentu titik akhir:
> 1. Nilai $K_{sp}(\\ce{AgCl}) = 1.8 \\times 10^{-10}$ dan $K_{sp}(\\ce{Ag2CrO4}) = 8.8 \\times 10^{-12}$. Meskipun nilai numerik $K_{sp}$ perak kromat lebih kecil, $\\ce{Ag2CrO4}$ merupakan garam terner sehingga membutuhkan $[\\ce{Ag+}] \\approx 10^{-5}\\text{ M}$ untuk mengendap, sedangkan $\\ce{AgCl}$ hanya butuh $[\\ce{Ag+}] \\approx 10^{-9}\\text{ M}$.
> 2. Akibatnya, selama ion klorida masih ada di larutan, hanya endapan putih $\\ce{AgCl}$ yang terbentuk. Tepat saat ion klorida habis, tetes berikutnya dari $\\ce{Ag+}$ langsung memicu pembentukan endapan merah bata $\\ce{Ag2CrO4}$, menandai tercapainya titik akhir titrasi secara visual dan tajam!`,
    keyFormulas: [
      { name: 'Konsentrasi Pengendap Minimum', formula: '[\\text{Pengendap}]_{\\text{min}} = \\frac{K_{sp}}{[\\text{Ion Analit}]}' },
      { name: 'Konsentrasi Sisa Ion Pertama', formula: '[\\text{Ion}_1]_{\\text{sisa}} = \\frac{K_{sp, 1}}{[\\text{Pengendap}]_{\\text{kedua}}}' },
      { name: 'Persentase Pemisahan Kuantitatif', formula: '\\% \\text{ Terendap} = \\left(1 - \\frac{[\\text{Ion}_1]_{\\text{sisa}}}{[\\text{Ion}_1]_{\\text{awal}}}\\right) \\times 100\\%' },
    ],
  },
];

// ============================================================================
// TOPIK 112: Sistem Koloid & Kimia Permukaan SMA
// (Klasifikasi, Sifat Optik-Kinetik, Sifat Listrik, Koagulasi & Sintesis)
// ============================================================================
export const WORKED_EXAMPLES_TOPIC_112: ConceptBlock[] = [
  {
    tag: 'contoh-klasifikasi-koloid-dan-emulgator-sma',
    tags: ['klasifikasi-koloid', 'fase-terdispersi', 'medium-pendispersi', 'emulgator', 'lesitin', 'kimia-sma'],
    title: 'Contoh Soal 1: Identifikasi Matriks 8 Jenis Koloid & Analisis Mekanisme Aksi Emulgator (Level: Sedang)',
    summary: 'Klasifikasi sistem dispersi berdasarkan wujud fase terdispersi dan medium pendispersi, penjelasan mengapa gas dalam gas bukan koloid, serta mekanisme molekular aksi emulgator amfifilik.',
    content: `### 📋 Skenario Masalah & Data Produk Sehari-hari:
Dalam kehidupan sehari-hari dan industri manufaktur, kita sering berinteraksi dengan berbagai produk komersial yang memanfaatkan teknologi sistem koloid:
1. **Cat Dinding Lateks**
2. **Saus Mayones & Santan Kelapa**
3. **Busa Sabun & Batu Apung (*Pumice*)**
4. **Kabut di Pagi Hari & Asap Knalpot Kendaraan**
5. **Keju Olahan & Gel Agar-agar**

---

### 🎯 Pertanyaan:
1. Tentukan fase terdispersi, medium pendispersi, dan nama jenis koloid untuk masing-masing dari kelima kelompok produk di atas!
2. Di alam semesta terdapat 3 wujud utama materi (padat, cair, gas), yang secara matematis menghasilkan $3 \\times 3 = 9$ kemungkinan kombinasi campuran. Mengapa hanya dikenal **8 jenis sistem koloid**? Jelaskan mengapa campuran gas dalam gas tidak pernah membentuk sistem koloid!
3. Minyak nabati dan air murni tidak dapat saling bercampur dan akan memisah menjadi dua lapisan (*immiscible*). Namun, ketika minyak dikocok bersama air dengan penambahan sedikit kuning telur, terbentuk saus mayones yang kental, homogen, dan stabil bertahun-tahun. Jelaskan struktur molekular zat penstabil di dalam kuning telur (lesitin) dan bagaimana mekanisme aksinya mencegah pemisahan tetesan minyak (*koalesensi*)!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Klasifikasi Fase dan Nama Sistem Koloid
Berdasarkan wujud fasa terdispersi (zat yang terbagi halus) dan medium pendispersi (fasa kontinu pelarut):

1. **Cat Dinding Lateks:**
   - **Fase Terdispersi:** Padat (pigmen warna seperti $\\ce{TiO2}$ dan partikel polimer).
   - **Medium Pendispersi:** Cair (air atau pelarut organik).
   - **Nama Koloid:** **Sol (Sol Cair)**.
2. **Saus Mayones & Santan Kelapa:**
   - **Fase Terdispersi:** Cair (tetesan minyak nabati pada mayones / minyak kelapa pada santan).
   - **Medium Pendispersi:** Cair (air cuka pada mayones / air pada santan).
   - **Nama Koloid:** **Emulsi (Emulsi Cair / Minyak dalam Air, O/W)**.
3. **Busa Sabun & Batu Apung:**
   - *Busa Sabun:* Fase terdispersi **Gas** di dalam medium pendispersi **Cair** $\\implies$ **Buih / Busa Cair**.
   - *Batu Apung:* Fase terdispersi **Gas** di dalam medium pendispersi **Padat** (batuan silikat lava) $\\implies$ **Busa Padat**.
4. **Kabut & Asap Knalpot:**
   - *Kabut:* Fase terdispersi **Cair** (butiran air) di dalam medium pendispersi **Gas** (udara) $\\implies$ **Aerosol Cair**.
   - *Asap Knalpot:* Fase terdispersi **Padat** (partikel jelaga karbon) di dalam medium pendispersi **Gas** (udara pembakaran) $\\implies$ **Aerosol Padat**.
5. **Keju Olahan & Gel Agar-agar:**
   - **Fase Terdispersi:** Cair (air/minyak terperangkap).
   - **Medium Pendispersi:** Padat (jejaring protein kasein pada keju / rantai polisakarida pada agar-agar).
   - **Nama Koloid:** **Emulsi Padat (Gel)**.

---

#### Langkah 2: Mengapa Campuran Gas dalam Gas Bukan Koloid?
Campuran antara gas dengan gas **selalu menghasilkan Larutan Sejati (Campuran Homogen Satu Fasa)**, bukan koloid:
- Molekul-molekul gas memiliki ukuran yang sangat kecil ($< 1\\text{ nm}$, skala angstrom).
- Jarak antarmolekul gas sangat renggang dan gaya tarik antarmolekulnya sangat lemah, sehingga molekul-molekul gas selalu berdifusi secara spontan dan saling bercampur sempurna pada tingkat molekular (*fully miscible*) didorong oleh peningkatan entropi pencampuran yang sangat besar ($\\Delta S_{\\text{mix}} > 0$).
- Karena tidak pernah terbentuk agregat partikel berdimensi $1 - 100\\text{ nm}$ dan tidak terdapat batas antarmuka fasa (*phase boundary*), maka gas dalam gas selalu berupa satu fasa gas tunggal yang serba sama.

---

#### Langkah 3: Mekanisme Aksi Emulgator Lesitin pada Mayones
Minyak bersifat non-polar (hidrofobik/lipofilik), sedangkan air bersifat polar (hidrofilik). Keduanya memiliki tegangan antarmuka yang sangat tinggi sehingga secara termodinamika tetesan minyak cenderung menyatu kembali (*koalesensi*) membentuk lapisan terpisah.

**Mekanisme Penstabilan oleh Lesitin:**
1. **Struktur Amfifilik Lesitin:**
   Lesitin (fosfatidilkolina) memiliki dua kutub dengan sifat berlawanan dalam satu molekul:
   - **Kepala Polar (Hidrofilik):** Gugus fosfat dan kolina bermuatan listrik yang sangat menyukai air dan membentuk interaksi dipol-dipol kuat dengan molekul air.
   - **Ekor Non-polar (Lipofilik/Hidrofobik):** Dua rantai asam lemak panjang hidrokarbon yang larut dan menancap kuat ke dalam tetesan minyak.
2. **Pembentukan Lapisan Antarmuka Pelindung:**
   Molekul-molekul lesitin mengorientasikan diri tepat di batas antarmuka antara tetesan minyak dan air. Ekor lipofilik menancap ke bagian dalam tetesan minyak, sedangkan kepala polar mencuat ke arah medium air di sekitarnya.
3. **Pencegahan Koalesensi:**
   Lapisan kepala polar yang mengelilingi seluruh permukaan tetesan minyak menciptakan rintangan sterik (*steric hindrance*) dan tolakan elektrostatik. Ketika dua tetesan minyak saling mendekat, gaya tolak ini mencegah tetesan saling bersentuhan dan bergabung, sehingga emulsi mayones tetap homogen dan stabil.

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Trik Cepat Menghafal Matriks 8 Sistem Koloid di Soal Ujian SMA:**  
> Kunci utama menentukan nama koloid adalah melihat **Medium Pendispersinya (wadah/fase pembawa)** terlebih dahulu:
> 1. Jika mediumnya **Gas** $\\implies$ Namanya selalu **Aerosol** (Aerosol Cair jika zat terdispersinya cair; Aerosol Padat jika zat terdispersinya padat). *Ingat: Gas dalam Gas tidak ada!*
> 2. Jika zat terdispersinya **Gas** $\\implies$ Namanya selalu **Buih / Busa** (Buih jika mediumnya cair; Busa Padat jika mediumnya padat).
> 3. Jika pertemuannya **Cair dalam Cair** $\\implies$ Namanya **Emulsi**.
> 4. Jika pertemuannya **Padat dalam Cair** $\\implies$ Namanya **Sol**.
> 5. Jika pertemuannya **Cair dalam Padat** $\\implies$ Namanya **Emulsi Padat (Gel)**.`,
    keyFormulas: [
      { name: 'Kaidah Gas dalam Gas', formula: '\\text{Gas} + \\text{Gas} \\implies \\text{Larutan Sejati (Satu Fasa, Bukan Koloid)}' },
      { name: 'Definisi Emulsi', formula: '\\text{Cair (terdispersi)} + \\text{Cair (pendispersi)} + \\text{Emulgator} \\implies \\text{Emulsi Stabil}' },
      { name: 'Struktur Molekul Surfaktan/Emulgator', formula: '\\text{Molekul Amfifilik} = \\text{Kepala Polar (Hidrofilik)} + \\text{Ekor Non-polar (Lipofilik)}' },
    ],
  },
  {
    tag: 'contoh-efek-tyndall-dan-gerak-brown-sma',
    tags: ['efek-tyndall', 'gerak-brown', 'sifat-optik', 'sifat-kinetik', 'hamburan-rayleigh', 'kimia-sma'],
    title: 'Contoh Soal 2: Fenomena Hamburan Sinar Efek Tyndall & Gerak Brown Kinetik (Level: Sedang)',
    summary: 'Analisis optik pembeda larutan sejati vs koloid melalui Efek Tyndall, penjelasan fisika Gerak Brown dari benturan molekular pelarut, dan penerapan Hukum Hamburan Rayleigh pada fenomena langit biru.',
    content: `### 📋 Skenario Eksperimen Laboratorium:
Di laboratorium kimia sekolah, guru menyiapkan tiga bejana kaca transparan tak bertanda yang masing-masing berisi cairan jernih/keruh:
- **Bejana X:** Larutan garam dapur ($\\ce{NaCl}$) murni dalam air.
- **Bejana Y:** Larutan tepung kanji / pati encer yang telah dipanaskan dan didinginkan.
- **Bejana Z:** Campuran serbuk kapur tulis ($\\ce{CaCO3}$) dalam air yang baru diaduk.

Guru kemudian mengarahkan seberkas sinar laser pointer berwarna merah ($\\lambda = 650\\text{ nm}$) melintasi ketiga bejana tersebut di ruangan yang gelap, lalu meminta siswa mengamati lintasan cahaya dari samping serta mengamati setetes sampel di bawah mikroskop ultra.

---

### 🎯 Pertanyaan:
1. Deskripsikan penampakan berkas sinar laser saat melintasi Bejana X, Bejana Y, dan Bejana Z! Bejana manakah yang menunjukkan fenomena **Efek Tyndall**?
2. Mengapa partikel pada Bejana X sama sekali tidak menghamburkan sinar laser, sedangkan partikel pada Bejana Y menghamburkannya dengan sangat nyata? Jelaskan berdasarkan perbandingan ukuran partikel terhadap panjang gelombang sinar tampak!
3. Ketika setetes cairan dari Bejana Y diamati di bawah mikroskop ultra, tampak titik-titik cahaya yang terus-menerus bergerak lincah membentuk lintasan zig-zag tak beraturan.
   a. Apa nama fenomena kinetik tersebut?
   b. Apa penyebab mikroskopis terjadinya gerakan zig-zag tersebut?
   c. Mengapa fenomena ini menjadi faktor kunci kestabilan sistem koloid terhadap gaya gravitasi bumi?
4. Berdasarkan Hukum Hamburan Rayleigh ($I_{\\text{hambur}} \\propto \\frac{1}{\\lambda^4}$), jelaskan mengapa langit pada siang hari yang cerah tampak berwarna biru, sedangkan lampu kabut pada mobil dirancang memancarkan warna kuning!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Observasi Berkas Sinar Laser & Identifikasi Efek Tyndall
- **Bejana X (Larutan $\\ce{NaCl}$):** Berkas sinar laser **tidak terlihat sama sekali** di dalam cairan saat dilihat dari samping; cairan tetap tampak gelap dan cahaya hanya tampak berupa titik merah di dinding keluar bejana.
- **Bejana Y (Sol Kanji / Pati):** Berkas sinar laser **tampak sangat jelas dan berpendar membentuk kerucut cahaya merah terang** di sepanjang lintasan cairan di dalam bejana. Bejana Y menunjukkan fenomena **Efek Tyndall** (sifat optik khas koloid).
- **Bejana Z (Suspensi $\\ce{CaCO3}$):** Berkas sinar laser tertahan atau terhambur secara kasar membaur, dan setelah didiamkan beberapa menit, partikel kapur segera mengendap ke dasar bejana meninggalkan cairan bening di atasnya.

---

#### Langkah 2: Rasional Ukuran Partikel vs Panjang Gelombang Cahaya
Syarat terjadinya hamburan cahaya optik yang efektif bergantung pada dimensi ukuran partikel penghambur:
1. **Pada Larutan Sejati (Bejana X):**
   - Partikel terdispersi berupa ion $\\ce{Na+}$ dan $\\ce{Cl-}$ bebas terhidrasi dengan diameter $< 1\\text{ nm}$ ($0.1 - 0.3\\text{ nm}$).
   - Ukuran ini ribuan kali lebih kecil daripada panjang gelombang cahaya tampak ($\\lambda = 400 - 700\\text{ nm}$). Akibatnya, gelombang foton cahaya melintasi partikel tanpa mengalami hamburan yang terdeteksi (*transmitted directly*).
2. **Pada Koloid (Bejana Y):**
   - Partikel amilosa/amilopektin teragregasi membentuk partikel koloid dengan dimensi $1 - 100\\text{ nm}$.
   - Ukuran ini sebanding dengan panjang gelombang cahaya tampak, sehingga partikel koloid mampu bertindak sebagai **pusat hamburan sekunder (*secondary scattering centers*)** yang memancarkan foton cahaya ke segala arah. Berkas sinar yang dihamburkan ke arah samping inilah yang ditangkap oleh mata pengamat sebagai Efek Tyndall.

---

#### Langkah 3: Analisis Sifat Kinetik Gerak Brown
a. Fenomena kinetik lintasan patah-patah zig-zag tak beraturan tersebut dinamakan **Gerak Brown (*Brownian Motion*)**.  
b. **Penyebab Mikroskopis:**  
   Partikel koloid berukuran sangat kecil ($1 - 100\\text{ nm}$) sehingga pada setiap saat, jumlah molekul pelarut air ($\\ce{H2O}$) yang menumbuk sisi kiri, kanan, atas, dan bawah partikel tidaklah persis sama. Adanya **ketidakseimbangan impuls tumbukan kinetik termal molekul pelarut dari berbagai arah** menghasilkan resultan gaya sesaat yang melempar partikel koloid ke arah acak secara terus-menerus.  
c. **Peran terhadap Kestabilan Koloid:**  
   Gaya gravitasi bumi ($F_g = m \\cdot g$) terus-menerus menarik partikel ke bawah. Namun, energi kinetik tumbukan termal yang memicu Gerak Brown memiliki magnitudo yang cukup untuk melawan gaya berat partikel koloid yang sangat ringan tersebut. Selama partikel terus bergerak acak tak beraturan, partikel **tidak akan pernah mengendap ke dasar wadah (*menangkal sedimentasi*)**, sehingga koloid tetap stabil secara kinetik.

---

#### Langkah 4: Aplikasi Hukum Hamburan Rayleigh
Menurut Hukum Rayleigh:
$$I_{\\text{hambur}} \\propto \\frac{1}{\\lambda^4}$$
Intensitas hamburan berbanding terbalik dengan pangkat empat panjang gelombang sinar cahaya:
1. **Langit Biru di Siang Hari:**
   Cahaya matahari tersusun atas spektrum polikromatik (merah, jingga, kuning, hijau, biru, nila, ungu). Cahaya biru memiliki panjang gelombang pendek ($\\lambda \\approx 450\\text{ nm}$), sedangkan cahaya merah memiliki panjang gelombang panjang ($\\lambda \\approx 700\\text{ nm}$).
   $$\\frac{I_{\\text{biru}}}{I_{\\text{merah}}} \\approx \\left(\\frac{700}{450}\\right)^4 \\approx (1.556)^4 \\approx \\mathbf{5.86}$$
   Cahaya biru dihamburkan oleh molekul gas dan partikel aerosol koloid di atmosfer bumi hampir **6 kali lipat lebih intens** daripada cahaya merah, sehingga langit siang hari didominasi warna biru cemerlang yang dihamburkan ke seluruh penjuru langit.
2. **Lampu Kabut Mobil Berwarna Kuning:**
   Partikel tetesan air pada kabut (aerosol cair) menghamburkan cahaya dengan kuat. Jika menggunakan lampu putih atau biru ($\\lambda$ pendek), cahaya akan dihamburkan hebat ke segala arah menghasilkan silau (*glare*) yang membutakan pengemudi. Lampu kuning memiliki $\\lambda$ yang lebih panjang ($\\sim 580\\text{ nm}$) sehingga intensitas hamburannya jauh lebih kecil, memungkinkan berkas sinar **menembus kabut lebih jauh tanpa dihamburkan balik ke mata pengemudi**.

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Pembedaan Cepat Efek Tyndall vs Gerak Brown di Soal UTBK & Ujian Sekolah:**
> - **Efek Tyndall:** Sifat **OPTIK** (berhubungan dengan cahaya, hamburan foton, sorot lampu bioskop, berkas sinar matahari di celah pohon, langit biru).
> - **Gerak Brown:** Sifat **KINETIK** (berhubungan dengan gerak, tumbukan molekul pelarut tak seimbang, lintasan zig-zag, mikroskop ultra, pencegahan pengendapan gravitasi).
> - *Ingat:* Gerak Brown **TIDAK BISA** dilihat dengan mata telanjang atau mikroskop cahaya biasa di lab sekolah; harus menggunakan **mikroskop ultra**!`,
    keyFormulas: [
      { name: 'Hukum Hamburan Rayleigh', formula: 'I_{\\text{hambur}} \\propto \\frac{1}{\\lambda^4}' },
      { name: 'Kriteria Ukuran Koloid Efek Tyndall', formula: '1\\text{ nm} \\le d_{\\text{partikel}} \\le 100\\text{ nm} \\approx \\lambda_{\\text{cahaya}}' },
      { name: 'Keseimbangan Kinetik Gerak Brown', formula: 'E_{\\text{kinetik tumbukan}} > F_{\\text{gravitasi}} \\implies \\text{Partikel Tidak Mengendap}' },
    ],
  },
  {
    tag: 'contoh-muatan-koloid-dan-elektroforesis-sma',
    tags: ['muatan-koloid', 'adsorpsi-ion', 'elektroforesis', 'sol-fe-oh-3', 'sol-as-2-s-3', 'alat-cottrell', 'kimia-sma'],
    title: 'Contoh Soal 3: Penentuan Muatan Koloid melalui Adsorpsi Selektif & Perilaku Elektroforesis (Level: Sedang)',
    summary: 'Mekanisme adsorpsi selektif ion pembentuk muatan sol positif vs sol negatif, pergerakan partikel dalam medan listrik elektroforesis, serta aplikasi industri pengendap Cottrell.',
    content: `### 📋 Skenario Sintesis & Pengujian Laboratorium:
Di laboratorium kimia, seorang siswa membuat dua bejana sol koloid yang berbeda:
- **Sol 1:** Dibuat dengan menambahkan larutan $\\ce{FeCl3}$ encer berlebih ke dalam air suling yang sedang mendidih, menghasilkan cairan sol berwarna cokelat kemerahan (sol besi(III) hidroksida, $\\ce{Fe(OH)3}$).
- **Sol 2:** Dibuat dengan mengalirkan gas $\\ce{H2S}$ berlebih ke dalam larutan asam arsenit ($\\ce{H3AsO3}$) encer, menghasilkan cairan sol berwarna kuning cerah (sol arsen(III) sulfida, $\\ce{As2S3}$).

Masing-masing sol kemudian dimasukkan ke dalam tabung kaca berbentuk pipa U yang dilengkapi dengan sepasang elektroda platina dan dihubungkan ke sumber tegangan listrik searah (DC) $50\\text{ Volt}$.

---

### 🎯 Pertanyaan:
1. Tuliskan persamaan reaksi pembentukan sol $\\ce{Fe(OH)3}$ dan sol $\\ce{As2S3}$!
2. Jelaskan mekanisme bagaimana partikel $\\ce{Fe(OH)3}$ dan partikel $\\ce{As2S3}$ memperoleh muatan listrik pada permukaannya (proses adsorpsi selektif ion), serta tentukan tanda muatan listrik masing-masing sol tersebut!
3. Ketika arus listrik searah dinyalakan pada pipa U:
   a. Ke arah elektroda manakah (katoda atau anoda) partikel sol $\\ce{Fe(OH)3}$ akan bergerak? Jelaskan!
   b. Ke arah elektroda manakah partikel sol $\\ce{As2S3}$ akan bergerak? Jelaskan!
   c. Apa nama fenomena perpindahan partikel koloid bermuatan di bawah pengaruh medan listrik ini?
4. Mengapa istilah **adsorpsi** tidak boleh disamakan dengan **absorpsi**? Jelaskan perbedaan mendasarnya dan berikan contoh nyata masing-masing peristiwa dalam kehidupan sehari-hari!
5. Pada cerobong asap pabrik peleburan logam dan PLTU batu bara, dipasang instalasi elektroda tegangan tinggi yang dinamakan **Alat Pengendap Debu Cottrell (*Cottrell Precipitator*)**. Jelaskan prinsip kerja alat Cottrell dalam membersihkan asap gas buang pabrik berdasarkan konsep muatan koloid dan elektroforesis!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Persamaan Reaksi Pembuatan Sol
1. **Sol $\\ce{Fe(OH)3}$ (Reaksi Hidrolisis Garam Besi):**
   $$\\ce{FeCl3(aq) + 3H2O(l) -> Fe(OH)3(koloid) + 3HCl(aq)}$$
2. **Sol $\\ce{As2S3}$ (Reaksi Dekomposisi Ganda):**
   $$\\ce{2H3AsO3(aq) + 3H2S(g) -> As2S3(koloid) + 6H2O(l)}$$

---

#### Langkah 2: Mekanisme Adsorpsi Selektif Ion & Muatan Permukaan
Partikel koloid padatan memiliki kemampuan mengadsorpsi (menempelkan pada permukaan) ion-ion tertentu yang terdapat di dalam medium pendispersi:
- **Kaidah Adsorpsi Paneth-Fajans:** Suatu partikel kristal koloid cenderung mengadsorpsi ion yang sejenis dengan kisi kristalnya (*lattice-forming ions*) yang tersedia dalam konsentrasi berlebih di larutan.
- **Pada Sol $\\ce{Fe(OH)3}$:**
  Dalam larutan masih terdapat kelebihan kation $\\ce{Fe^3+}$ (dari $\\ce{FeCl3}$). Partikel padatan $\\ce{Fe(OH)3}$ secara selektif menyerap kation $\\ce{Fe^3+}$ pada permukaan luarnya.  
  Formula agregat koloid: $[\\ce{Fe(OH)3}]_m \\cdot n\\ce{Fe^3+} \\implies$ **Sol $\\ce{Fe(OH)3}$ Bermuatan POSITIF $(+)$**.
- **Pada Sol $\\ce{As2S3}$:**
  Dalam larutan terdapat kelebihan gas $\\ce{H2S}$ yang terionisasi sebagian menjadi ion sulfida $\\ce{S^2-}$ (dan $\\ce{HS-}$). Partikel padatan $\\ce{As2S3}$ secara selektif menyerap ion sulfida $\\ce{S^2-}$ pada permukaan luarnya.  
  Formula agregat koloid: $[\\ce{As2S3}]_m \\cdot n\\ce{S^2-} \\implies$ **Sol $\\ce{As2S3}$ Bermuatan NEGATIF $(-)$**.

---

#### Langkah 3: Perilaku Migrasi pada Elektroforesis
Fenomena pergerakan partikel koloid bermuatan di dalam medium fluida akibat pengaruh medan listrik luar dinamakan **Elektroforesis**.
- Dalam sistem elektrokimia arus searah (DC):
  - **Katoda:** Elektroda bermuatan **negatif $(-)$**.
  - **Anoda:** Elektroda bermuatan **positif $(+)$**.
- **Arah Pergerakan Sol 1 ($\\ce{Fe(OH)3}$):**
  Karena partikel sol $\\ce{Fe(OH)3}$ bermuatan **positif $(+)$**, partikel akan ditarik oleh gaya elektrostatik dan **bermigrasi menuju KATODA (kutub negatif)**. Di sekitar katoda, warna cairan cokelat kemerahan akan semakin pekat.
- **Arah Pergerakan Sol 2 ($\\ce{As2S3}$):**
  Karena partikel sol $\\ce{As2S3}$ bermuatan **negatif $(-)$**, partikel akan ditarik dan **bermigrasi menuju ANODA (kutub positif)**. Di sekitar anoda, cairan berwarna kuning cerah akan berkumpul pekat.

---

#### Langkah 4: Perbedaan Fundamental Adsorpsi vs Absorpsi
Sering terjadi kerancuan antara adsorpsi dengan absorpsi:

| Aspek Pembeda | Adsorpsi (*Adsorption*) | Absorpsi (*Absorption*) |
| :--- | :--- | :--- |
| **Lokasi Penyerapan** | **Hanya pada permukaan / antarmuka fasa** (*surface phenomenon*) | **Meresap masuk ke seluruh bagian dalam fasa** (*bulk phenomenon*) |
| **Laju Proses** | Mula-mula sangat cepat lalu melambat saat permukaan jenuh | Berlangsung dengan laju yang relatif seragam menembus volume |
| **Konsentrasi Zat** | Terkonsentrasi pekat di lapisan terluar | Terdistribusi merata di seluruh volume penyerap |
| **Contoh Nyata** | - Penyerapan racun di saluran pencernaan oleh norit (karbon aktif)<br>- Penyerapan zat warna pada industri gula oleh arang tulang<br>- Penempelan ion $\\ce{Fe^3+}$ pada sol $\\ce{Fe(OH)3}$ | - Busa spons menyerap air cucian<br>- Biskuit menyerap teh celup hangat<br>- Gas $\\ce{NH3}$ diserap masuk melarut ke dalam air |

---

#### Langkah 5: Prinsip Kerja Alat Pengendap Cottrell
Asap pabrik dan jelaga pembakaran merupakan sistem koloid jenis **Aerosol Padat** (partikel karbon, debu timbal, dan silika yang melayang di dalam gas buang udara).
1. Akibat gesekan di cerobong pabrik, partikel jelaga debu mengadsorpsi muatan listrik (umumnya bermuatan negatif).
2. Di dalam cerobong asap dipasang instalasi **Alat Cottrell**, yang terdiri atas silinder logam yang dihubungkan ke kutub positif (anoda) dan kawat elektroda tipis bertegangan sangat tinggi ($20.000 - 100.000\\text{ Volt}$) bermuatan negatif (katoda).
3. Medan listrik raksasa memicu ionisasi udara di sekitarnya. Ketika partikel jelaga asap melintasi alat ini:
   - Partikel debu yang bermuatan akan tertarik ke elektroda yang berlawanan muatan via prinsip **elektroforesis**.
   - Saat partikel debu menabrak dinding silinder elektroda, **muatannya dinetralkan seketika**.
   - Tanpa adanya muatan listrik penolak, partikel jelaga karbon kehilangan kestabilan, mengalami **koagulasi**, lalu jatuh ke dasar cerobong sebagai abu padat penampungan.
4. Gas yang keluar dari cerobong ke atmosfer menjadi bersih dan bebas dari polutan partikulat padat berbahaya.

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Daftar Pasangan Muatan Koloid Klasik yang Selalu Keluar di Ujian SMA:**
> - **Koloid Bermuatan POSITIF $(+)$:**
>   - Sol $\\ce{Fe(OH)3}$, Sol $\\ce{Al(OH)3}$, dan sol hidroksida/oksida basa logam lainnya.
>   - Hemoglobin darah pada pH fisiologis tubuh.
>   - Partikel kotoran yang telah dilapisi kation koagulan tawas.
> - **Koloid Bermuatan NEGATIF $(-):$**
>   - Sol $\\ce{As2S3}$, sol sulfida logam ($\\ce{CdS, Sb2S3}$).
>   - Sol logam murni (sol emas $\\ce{Au}$, perak $\\ce{Ag}$, platina $\\ce{Pt}$).
>   - Sol belerang, sol kanji/pati, sol silika gel, tanah liat/lumpur air keruh.
>   - Partikel jelaga asap knalpot dan cerobong pabrik.
> *Kunci Ingat Elektroforesis:* **K**atoda menarik kation/sol **positif**; **A**noda menarik anion/sol **negatif**!`,
    keyFormulas: [
      { name: 'Kaidah Muatan Sol Besi Hidroksida', formula: '\\ce{Fe(OH)3} + \\ce{Fe^3+(berlebih)} \\implies \\text{Sol Bermuatan Positif } (+)' },
      { name: 'Kaidah Muatan Sol Arsen Sulfida', formula: '\\ce{As2S3} + \\ce{S^2-(berlebih)} \\implies \\text{Sol Bermuatan Negatif } (-)' },
      { name: 'Arah Migrasi Elektroforesis', formula: '\\text{Sol } (+) \\to \\text{Katoda } (-); \\quad \\text{Sol } (-) \\to \\text{Anoda } (+)' },
    ],
  },
  {
    tag: 'contoh-aturan-schulze-hardy-dan-koagulasi-sma',
    tags: ['koagulasi-koloid', 'aturan-schulze-hardy', 'tawas', 'flokulasi', 'pdam', 'kimia-sma', 'hots-sma'],
    title: 'Contoh Soal 4: Evaluasi Daya Koagulasi Elektrolit Berdasarkan Aturan Schulze-Hardy & Penjernihan Air PDAM (Level: HOTS SMA)',
    summary: 'Analisis teoritis dan perhitungan rasio daya koagulasi ion elektrolit lawan berdasar Aturan Schulze-Hardy, serta mekanisme komprehensif penjernihan air oleh tawas.',
    content: `### 📋 Skenario Masalah di Instalasi Pengolahan Air Limbah:
Suatu laboratorium pengolahan limbah industri menguji metode koagulasi terhadap dua jenis sampel air limbah keruh:
- **Sampel A:** Air keruh sungai yang mengandung partikel koloid tanah liat/lumpur bermuatan **negatif $(-)$**.
- **Sampel B:** Limbah cair pewarna kain industri tekstil yang mengandung partikel koloid pewarna kationik bermuatan **positif $(+)$**.

Untuk mengendapkan partikel koloid tersebut, laboratorium menyediakan empat larutan garam elektrolit dengan konsentrasi yang sama, yaitu masing-masing $0.050\\text{ M}$:
1. **Natrium klorida ($\\ce{NaCl}$)**
2. **Kalsium klorida ($\\ce{CaCl2}$)**
3. **Aluminium sulfat / tawas ($\\ce{Al2(SO4)3}$)**
4. **Natrium fosfat ($\\ce{Na3PO4}$)**

---

### 🎯 Pertanyaan:
1. Berdasarkan **Aturan Schulze-Hardy**:
   a. Jenis ion manakah (kation atau anion) yang bertindak sebagai agen koagulan utama untuk mengendapkan partikel pada **Sampel A**? Tentukan ion aktif tersebut dari masing-masing keempat garam!
   b. Urutkan keempat larutan elektrolit tersebut dari yang paling efektif (membutuhkan volume paling sedikit) hingga yang paling tidak efektif dalam mengkoagulasikan **Sampel A**!
2. Untuk mengendapkan partikel koloid pada **Sampel B**:
   a. Jenis ion manakah yang bertindak sebagai agen koagulan aktif? Tentukan ion aktif tersebut dari masing-masing garam!
   b. Urutkan keempat larutan elektrolit dari yang paling efektif dalam mengkoagulasikan **Sampel B**!
3. Teori modern kestabilan koloid DLVO (*Deryagin-Landau-Verwey-Overbeek*) menyatakan bahwa konsentrasi koagulasi kritis (*Critical Coagulation Concentration* / CCC) berbanding terbalik dengan valensi ion lawan berpangkat enam:
   $$\\text{CCC} \\propto \\frac{1}{z^6} \\iff \\text{Daya Koagulasi} \\propto z^6$$
   Hitung perbandingan teoretis daya koagulasi antara kation $\\ce{Al^3+}$, kation $\\ce{Ca^2+}$, dan kation $\\ce{Na^+}$ terhadap Sampel A! Berapa kali lipat kation $\\ce{Al^3+}$ lebih kuat dibanding ion $\\ce{Na^+}$?
4. Perusahaan Daerah Air Minum (PDAM) secara universal menggunakan tawas ($\\ce{Al2(SO4)3 \\cdot 18H2O}$) sebagai zat penjernih utama air sungai keruh. Mengapa tawas memiliki efektivitas penjernihan yang jauh lebih superior dibandingkan garam dapur ($\\ce{NaCl}$)? Jelaskan dua mekanisme kerja tawas sekaligus (netralisasi muatan dan pembentukan flok gelatin)!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Evaluasi Koagulasi Sampel A (Sol Bermuatan Negatif)
Partikel koloid tanah liat/lumpur membawa muatan **negatif $(-)$**.
- Sesuai **Aturan Schulze-Hardy Bagian 1**: Partikel koloid bermuatan negatif akan dikoagulasikan secara efektif oleh ion lawan yang bertanda muatan berlawanan, yaitu **KATION BERMUATAN POSITIF $(+)$**.
- Identifikasi kation dan valensinya ($z$) pada keempat elektrolit:
  1. $\\ce{NaCl} \\implies$ kation $\\ce{Na+}$ dengan valensi $z = 1$.
  2. $\\ce{CaCl2} \\implies$ kation $\\ce{Ca^2+}$ dengan valensi $z = 2$.
  3. $\\ce{Al2(SO4)3} \\implies$ kation $\\ce{Al^3+}$ dengan valensi $z = 3$.
  4. $\\ce{Na3PO4} \\implies$ kation $\\ce{Na+}$ dengan valensi $z = 1$.
- Sesuai **Aturan Schulze-Hardy Bagian 2**: Semakin besar valensi muatan kation lawan, semakin kuat daya koagulasinya dan semakin sedikit konsentrasi/volume elektrolit yang dibutuhkan untuk memicu pengendapan:
  $$z(\\ce{Al^3+}) = 3 > z(\\ce{Ca^2+}) = 2 > z(\\ce{Na+}) = 1$$
- **Urutan Efektivitas Elektrolit terhadap Sampel A:**
  $$\\mathbf{\\ce{Al2(SO4)3} \\gg \\ce{CaCl2} \\gg \\ce{Na3PO4} \\approx \\ce{NaCl}}$$
  *Catatan:* Garam $\\ce{Al2(SO4)3}$ adalah yang paling efektif karena menghasilkan kation bervalensi tiga $\\ce{Al^3+}$.

---

#### Langkah 2: Evaluasi Koagulasi Sampel B (Sol Bermuatan Positif)
Partikel koloid pewarna kationik membawa muatan **positif $(+)$**.
- Ion lawan yang efektif menetralkan muatan sol positif adalah **ANION BERMUATAN NEGATIF $(-)$**.
- Identifikasi anion dan valensinya ($z$) pada keempat garam:
  1. $\\ce{Na3PO4} \\implies$ anion fosfat $\\ce{PO4^3-}$ dengan valensi $z = 3$.
  2. $\\ce{Al2(SO4)3} \\implies$ anion sulfat $\\ce{SO4^2-}$ dengan valensi $z = 2$.
  3. $\\ce{CaCl2} \\implies$ anion klorida $\\ce{Cl-}$ dengan valensi $z = 1$.
  4. $\\ce{NaCl} \\implies$ anion klorida $\\ce{Cl-}$ dengan valensi $z = 1$.
- Berdasarkan aturan valensi anion ($z = 3 > z = 2 > z = 1$):
- **Urutan Efektivitas Elektrolit terhadap Sampel B:**
  $$\\mathbf{\\ce{Na3PO4} \\gg \\ce{Al2(SO4)3} \\gg \\ce{CaCl2} \\approx \\ce{NaCl}}$$
  *Catatan:* Garam $\\ce{Na3PO4}$ adalah yang paling efektif karena menghasilkan anion bervalensi tiga $\\ce{PO4^3-}$.

---

#### Langkah 3: Kalkulasi Rasio Daya Koagulasi DLVO
Berdasarkan relasi $\\text{Daya Koagulasi} \\propto z^6$:
- Untuk kation $\\ce{Na+} (z = 1)$:
  $$\\text{Daya}(\\ce{Na+}) \\propto 1^6 = \\mathbf{1}$$
- Untuk kation $\\ce{Ca^2+} (z = 2)$:
  $$\\text{Daya}(\\ce{Ca^2+}) \\propto 2^6 = \\mathbf{64}$$
- Untuk kation $\\ce{Al^3+} (z = 3)$:
  $$\\text{Daya}(\\ce{Al^3+}) \\propto 3^6 = \\mathbf{729}$$

**Rasio Perbandingan Daya Koagulasi Teoretis:**
$$\\text{Daya}(\\ce{Al^3+}) : \\text{Daya}(\\ce{Ca^2+}) : \\text{Daya}(\\ce{Na+}) = \\mathbf{729 : 64 : 1}$$

**Kesimpulan Kuantitatif:**  
Kation $\\ce{Al^3+}$ memiliki kemampuan mengendapkan koloid negatif sekitar **$729$ kali lipat lebih kuat** dibandingkan ion $\\ce{Na+}$, dan lebih dari **$11$ kali lipat lebih kuat** dibanding ion $\\ce{Ca^2+}$. Inilah landasan matematis mengapa penambahan sedikit garam $\\ce{Al^3+}$ sudah sanggup menggumpalkan lumpur secara instan.

---

#### Langkah 4: Keunggulan Ganda Tawas pada Penjernihan Air PDAM
Tawas ($\\ce{Al2(SO4)3}$) bekerja melalui dua mekanisme sinergis sekaligus:
1. **Mekanisme Netralisasi Elektrostatik (Aturan Schulze-Hardy):**
   Partikel koloid lumpur air sungai bermuatan negatif. Kation $\\ce{Al^3+}$ yang bervalensi tiga menembus lapisan lapis ganda listrik partikel lumpur dan menetralkan muatan negatifnya secara drastis ($|\\zeta| \\to 0$). Tanpa adanya gaya tolak elektrostatik, partikel lumpur dapat saling bertumbukan dan bergabung.
2. **Mekanisme Penjeratan Flok Gelatin (Reaksi Hidrolisis):**
   Di dalam air, ion $\\ce{Al^3+}$ mengalami reaksi hidrolisis menghasilkan endapan koloid gelatin yang bermassa jenis besar:
   $$\\ce{Al^3+(aq) + 3H2O(l) <=> Al(OH)3(s) + 3H+(aq)}$$
   Endapan $\\ce{Al(OH)3}$ yang terbentuk berupa gumpalan-gumpalan seperti agar-agar (*flok*). Flok-flok gelatin ini bertindak sebagai jaring perangkap raksasa yang menyapu dan menjerat partikel debu, lumpur, dan mikroorganisme tersuspensi saat mengendap ke dasar tangki sedimentasi, menghasilkan air jernih di bagian atas.
   *(Sebaliknya, $\\ce{NaCl}$ selain daya koagulasinya $700$ kali lebih lemah, juga tidak dapat terhidrolisis membentuk endapan penjerap!)*

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Kaidah Emas Menghadapi Soal Koagulasi Schulze-Hardy di UTBK-SNBT:**
> 1. **Langkah 1: Identifikasi tanda muatan koloid yang mau diendapkan.**
>    - Koloid negatif? Fokus cari **KATION** dengan muatan positif terbesar! (Abaikan anionnya).
>    - Koloid positif? Fokus cari **ANION** dengan muatan negatif terbesar! (Abaikan kationnya).
> 2. **Langkah 2: Cek valensi muatan ion lawan.**
>    - Kation: $\\ce{Al^3+, Fe^3+} (z=3) > \\ce{Ba^2+, Ca^2+, Mg^2+} (z=2) > \\ce{K+, Na+, NH4+} (z=1)$.
>    - Anion: $\\ce{PO4^3-} (z=3) > \\ce{SO4^2-, CO3^2-} (z=2) > \\ce{Cl-, NO3-} (z=1)$.
> 3. **Perhatikan Jebakan Konsentrasi Elektrolit vs Volume:**
>    Elektrolit yang paling efektif adalah yang membutuhkan **VOLUME / KONSENTRASI PALING SEDIKIT (PALING KECIL)** untuk mengendapkan koloid!`,
    keyFormulas: [
      { name: 'Kaidah Schulze-Hardy Kation (Sol Negatif)', formula: '\\ce{Al^3+} \\gg \\ce{Ca^2+} \\gg \\ce{Na+} \\quad (\\text{Daya Koagulasi} \\propto z^6)' },
      { name: 'Kaidah Schulze-Hardy Anion (Sol Positif)', formula: '\\ce{PO4^3-} \\gg \\ce{SO4^2-} \\gg \\ce{Cl-} \\quad (\\text{Daya Koagulasi} \\propto z^6)' },
      { name: 'Reaksi Hidrolisis Flok Tawas', formula: '\\ce{Al^3+ + 3H2O <=> Al(OH)3(s) + 3H+}' },
    ],
  },
  {
    tag: 'contoh-sintesis-dialisis-dan-misil-koloid-sma',
    tags: ['sintesis-koloid', 'kondensasi', 'dispersi', 'peptisasi', 'dialisis', 'hemodialisis', 'misil-sabun', 'cmc', 'kimia-sma', 'hots-sma'],
    title: 'Contoh Soal 5: Komparasi Sintesis Koloid (Kondensasi vs Dispersi), Pemurnian Dialisis & Mekanisme Misil Sabun (Level: HOTS SMA)',
    summary: 'Klasifikasi metode pembuatan koloid kondensasi kimiawi vs dispersi fisik, analisis selektivitas pori membran pada dialisis dan cuci darah, serta fenomena miselisasi surfaktan sabun dalam air.',
    content: `### 📋 Skenario Prosedur Percobaan & Teknologi:
Di laboratorium kimia sekolah dan aplikasi industri medis, terdapat serangkaian prosedur yang melibatkan pembuatan dan pemurnian koloid:
- **Prosedur 1:** Reduksi larutan asam tetrakloroaurat ($\\ce{HAuCl4}$) encer menggunakan larutan formalin (formaldehida, $\\ce{HCHO}$) menghasilkan sol emas berwarna merah rubi.
- **Prosedur 2:** Pengaliran gas hidrogen sulfida ($\\ce{H2S}$) ke dalam larutan asam arsenit ($\\ce{H3AsO3}$) menghasilkan sol $\\ce{As2S3}$.
- **Prosedur 3:** Larutan jenuh belerang di dalam etanol dituangkan setetes demi setetes ke dalam beker berisi air murni, seketika cairan menjadi keruh seperti susu membentuk sol belerang.
- **Prosedur 4:** Endapan segar perak klorida ($\\ce{AgCl}$) yang baru disaring diaduk bersama sedikit larutan $\\ce{FeCl3}$ encer hingga kembali berubah menjadi suspensi koloid jernih.
- **Prosedur 5:** Pemurnian sol $\\ce{Fe(OH)3}$ yang masih bercampur asam klorida ($\\ce{HCl}$) menggunakan kantung membran selofan semipermeabel yang dicelupkan ke dalam air mengalir.
- **Prosedur 6:** Penambahan sabun cuci natrium palmitat ($\\ce{C15H31COONa}$) ke dalam air hingga mencapai Konsentrasi Misil Kritis (*CMC*).

---

### 🎯 Pertanyaan:
1. Kelompokkan Prosedur 1, 2, 3, dan 4 ke dalam metode **Kondensasi** atau **Dispersi**, serta sebutkan nama mekanisme reaksi/fisik spesifiknya (reaksi redoks, dekomposisi ganda, penggantian pelarut, atau peptisasi)!
2. Pada Prosedur 5 (proses dialisis):
   a. Partikel zat apakah yang dapat menembus pori-pori kantung membran selofan menuju air mengalir? Jelaskan alasannya berdasarkan ukuran partikel!
   b. Partikel zat apakah yang tertahan di dalam kantung membran?
   c. Bagaimana cara menguji bahwa ion pengotor klorida telah berhasil keluar dari kantung membran menuju cairan luar?
3. Prosedur dialisis menjadi prinsip operasional dari mesin **hemodialisis (cuci darah)** bagi pasien gagal ginjal kronis. Jelaskan secara analogis komponen darah apa yang tertahan di dalam tubuh dan limbah apa yang dikeluarkan menembus membran dialyzer!
4. Pada Prosedur 6:
   a. Apa yang dimaksud dengan **Konsentrasi Misil Kritis (*Critical Micelle Concentration* / CMC)**?
   b. Bagaimana perubahan wujud molekul sabun sebelum dan sesudah CMC tercapai?
   c. Jelaskan bagaimana bola misil sabun mampu melarutkan dan mengangkat noda lemak/minyak membandel dari serat pakaian saat mencuci dengan air!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Klasifikasi Metode Pembuatan Koloid
Dua pendekatan dasar pembuatan koloid:
- **Cara Kondensasi:** Menggabungkan partikel kecil berukuran molekul/ion ($< 1\\text{ nm}$) menjadi partikel berukuran koloid ($1 - 100\\text{ nm}$), biasanya melalui reaksi kimia larutan.
- **Cara Dispersi:** Memecah partikel kasar makroskopis ($> 100\\text{ nm}$) menjadi partikel berukuran koloid ($1 - 100\\text{ nm}$), baik secara mekanik, peptisasi, maupun listrik.

**Analisis Masing-Masing Prosedur:**
1. **Prosedur 1 (Sol Emas via Reduksi Formalin):**  
   Ion $\\ce{Au^3+}$ tereduksi menjadi atom-atom netral $\\ce{Au}$ yang kemudian berkumpul membentuk partikel nano koloid emas.  
   $\\implies$ **Cara Kondensasi via Reaksi Redoks**.
2. **Prosedur 2 (Sol $\\ce{As2S3}$ dari $\\ce{H3AsO3}$ dan $\\ce{H2S}$):**  
   Molekul asam arsenit dan gas $\\ce{H2S}$ saling bertukar pasangan ion membentuk molekul sukar larut $\\ce{As2S3}$ yang beragregasi menjadi partikel koloid.  
   $\\implies$ **Cara Kondensasi via Reaksi Dekomposisi Ganda**.
3. **Prosedur 3 (Sol Belerang dari Larutan Etanol ke Air):**  
   Belerang larut baik dalam etanol (larutan sejati). Ketika dituangkan ke dalam air, kelarutan belerang anjlok seketika karena air bersifat polar dan belerang non-polar, memicu penggumpalan molekul belerang menjadi koloid tanpa reaksi kimia.  
   $\\implies$ **Cara Kondensasi via Penggantian Pelarut (*Solvent Exchange*)**.
4. **Prosedur 4 (Dispersi Endapan $\\ce{AgCl}$ dengan Elektrolit):**  
   Endapan kasar padat $\\ce{AgCl}$ dipecah kembali menjadi partikel koloid tersuspensi dengan bantuan adsorpsi ion elektrolit pemecah.  
   $\\implies$ **Cara Dispersi via Peptisasi**.

---

#### Langkah 2: Analisis Pemurnian Dialisis (Prosedur 5)
Kantung selofan bertindak sebagai **membran semipermeabel** dengan diameter pori sekitar $1 - 2\\text{ nm}$:
a. **Partikel yang Menembus Membran:**
   Ion-ion elektrolit pengotor hasil samping reaksi, yaitu ion hidrogen $\\ce{H+}$ (atau ion $\\ce{H3O+}$) dan ion klorida $\\ce{Cl-}$, serta molekul pelarut air. Partikel ion ini memiliki ukuran diameter $< 1\\text{ nm}$ (skala angstrom, $0.1 - 0.3\\text{ nm}$), jauh lebih kecil dari pori membran sehingga dengan mudah berdifusi keluar menuju air yang terus mengalir.
b. **Partikel yang Tertahan di Dalam Kantung:**
   Partikel sol $\\ce{Fe(OH)3}$ yang telah beragregasi mencapai ukuran koloid ($1 - 100\\text{ nm}$). Karena diameter partikel koloid lebih besar daripada diameter pori membran semipermeabel, partikel koloid tertahan sempurna di dalam kantung, menghasilkan sol koloid murni yang bebas elektrolit pengotor.
c. **Uji Pengotor Ion Klorida:**
   Air bilasan yang mengalir keluar diuji dengan mengambil beberapa tetes lalu ditambahkan larutan perak nitrat ($\\ce{AgNO3}$). Jika terbentuk endapan putih perak klorida:
   $$\\ce{Ag+(aq) + Cl-(aq) -> AgCl(s) v (putih)}$$
   maka proses dialisis masih berlangsung. Dialisis selesai jika air bilasan luar sudah tidak lagi membentuk kekeruhan saat ditetesi $\\ce{AgNO3}$.

---

#### Langkah 3: Analogi Medis Dialisis pada Hemodialisis (Cuci Darah)
Pada pasien gagal ginjal, ginjal tidak mampu lagi menyaring zat sisa metabolisme dari aliran darah:
- **Darah Pasien Dialirkan Melalui Tabung Dialyzer:** Di dalam dialyzer, darah dipisahkan oleh membran semipermeabel buatan dari cairan dialisat yang terus mengalir.
- **Zat yang Berdifusi Keluar (Dibuang):** Racun metabolit kecil berukuran molekular ($< 1\\text{ nm}$), seperti urea ($\\ce{CO(NH2)2}$), kreatinin, asam urat, kelebihan ion kalium ($\\ce{K+}$), dan natrium ($\\ce{Na+}$).
- **Zat yang Tertahan Aman di Darah:** Komponen penting tubuh yang berukuran koloid dan makromolekul ($> 1\\text{ nm}$), seperti sel darah merah (eritrosit), sel darah putih (leukosit), keping darah (trombosit), serta protein darah esensial (seperti albumin dan imunoglobulin).

---

#### Langkah 4: Termodinamika Misil Sabun & Aksi Pembersihan
a. **Konsentrasi Misil Kritis (*CMC*):**  
   Konsentrasi batas minimum suatu surfaktan di mana molekul-molekul monomer surfaktan mulai berasosiasi secara spontan membentuk agregat partikel berukuran koloid yang dinamakan **misil (*micelles*)**.
b. **Perubahan Keadaan Sebelum vs Sesudah CMC:**
   - **Di Bawah CMC ($C < \\text{CMC}$):** Molekul sabun berada dalam bentuk ion/monomer bebas tunggal (rantai ion palmitat $\\ce{C15H31COO-}$ dan ion $\\ce{Na+}$) yang terlarut sempurna membentuk **Larutan Sejati**.
   - **Di Atas CMC ($C \\ge \\text{CMC}$):** Larutan telah jenuh dengan monomer pada permukaan. Molekul-molekul sabun kemudian berkumpul secara spontan membentuk bola misil yang terdiri atas $50 - 100$ molekul. Sistem bertransformasi menjadi **Koloid Asosiasi**.
c. **Mekanisme Pengangkatan Noda Lemak oleh Misil:**
   1. Struktur bola misil memiliki konfigurasi radial: ekor hidrokarbon non-polar menghadap ke bagian dalam membentuk **inti hidrofobik**, sedangkan kepala karboksilat bermuatan negatif ($-\\ce{COO-}$) mencuat keluar bersentuhan dengan pelarut air membentuk **kulit hidrofilik**.
   2. Noda minyak/lemak kotoran yang bersifat hidrofobik akan ditarik dan **terperangkap larut di dalam inti non-polar bola misil**.
   3. Karena bagian luar bola misil dipenuhi muatan negatif kepala polar, bola-bola misil saling tolak-menolak dan terdispersi stabil di dalam air. Ketika dibilas dengan air mengalir, noda minyak yang telah terkurung di dalam misil akan hanyut terbawa bersama air cucian!

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Peta Konsep Lengkap Cara Pembuatan Koloid (HOTS SMA):**
> 
> **A. CARA KONDENSASI (Partikel Larutan/Ion/Molekul ➜ Partikel Koloid):**
> 1. **Reaksi Hidrolisis:** $\\ce{FeCl3(aq) + 3H2O(l) -> Fe(OH)3(koloid) + 3HCl(aq)}$ (penetesan garam besi ke dalam air mendidih).
> 2. **Reaksi Redoks:** $\\ce{2HAuCl4 + 3HCHO + 3H2O -> 2Au(koloid) + 3HCOOH + 8HCl}$ (reduksi sol emas) atau $\\ce{2H2S + SO2 -> 3S(koloid) + 2H2O}$.
> 3. **Dekomposisi Ganda:** $\\ce{2H3AsO3 + 3H2S -> As2S3(koloid) + 6H2O}$.
> 4. **Penggantian Pelarut:** Belerang dilarutkan dalam etanol lalu dituangkan ke dalam air murni.
> 
> **B. CARA DISPERSI (Partikel Kasar/Makro/Endapan ➜ Partikel Koloid):**
> 1. **Cara Mekanik:** Penggilingan partikel padat kasar menggunakan *colloid mill* (pembuatan cat tembok, semir sepatu).
> 2. **Cara Peptisasi:** Endapan kasar dipecah kembali menjadi koloid dengan menambahkan elektrolit pemecah (contoh: endapan $\\ce{Fe(OH)3}$ dipeptisasi oleh $\\ce{FeCl3}$, endapan $\\ce{AgCl}$ dipeptisasi oleh elektrolit).
> 3. **Cara Busur Bredig:** Loncatan bunga api listrik tegangan tinggi menguapkan elektroda logam (emas/platina) dalam air es, yang seketika terkondensasi membentuk sol logam.`,
    keyFormulas: [
      { name: 'Kaidah Kondensasi Hidrolisis Besi(III)', formula: '\\ce{FeCl3(aq) + 3H2O(l) -> Fe(OH)3(koloid) + 3HCl(aq)}' },
      { name: 'Kaidah Kondensasi Redoks Belerang', formula: '\\ce{2H2S(g) + SO2(aq) -> 3S(koloid) + 2H2O(l)}' },
      { name: 'Prinsip Selektivitas Pori Dialisis', formula: 'd_{\\text{ion}} < d_{\\text{pori membran}} < d_{\\text{partikel koloid}}' },
      { name: 'Ambang Batas Pembentukan Misil', formula: 'C \\ge \\text{CMC} \\implies \\text{Terbentuk Koloid Asosiasi (Bola Misil)}' },
    ],
  },
];
