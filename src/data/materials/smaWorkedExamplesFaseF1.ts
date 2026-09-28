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

