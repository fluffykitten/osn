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
