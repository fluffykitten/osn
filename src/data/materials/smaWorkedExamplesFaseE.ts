/**
 * smaWorkedExamplesFaseE.ts
 * Bank Pembahasan Contoh Soal Terbimbing Kimia SMA Fase E (Topik 101 - 105)
 * Standar: Kurikulum Merdeka, Asesmen Nasional, UTBK-SNBT & Ujian Sekolah SMA
 * Tingkat Kesulitan: Sedang dan Sulit (HOTS)
 * Jumlah: Tepat 5 Soal per Topik (Total 25 Contoh Soal Bervariasi)
 */

import type { ConceptBlock } from '../materialsData.ts';

// ============================================================================
// TOPIK 101: Hakikat Kimia, Metode Ilmiah & Keselamatan Kerja Lab
// ============================================================================
export const WORKED_EXAMPLES_TOPIC_101: ConceptBlock[] = [
  {
    tag: 'soal-desain-eksperimen-h2o2',
    tags: ['metode-ilmiah', 'variabel-eksperimen', 'kontrol-negatif', 'laju-reaksi-sma'],
    title: 'Contoh Soal 1: Desain Eksperimen Uji Adil & Pengendalian Triad Variabel (Level: Sedang)',
    summary: 'Metodologi perancangan uji adil (fair test), penentuan variabel bebas/terikat/kontrol, perumusan hipotesis operasional, serta fungsi esensial kontrol negatif.',
    content: `### 📋 Skenario & Data Eksperimen:
Sekelompok siswa kelas X melakukan investigasi ilmiah untuk menguji faktor-faktor yang memengaruhi laju penguraian hidrogen peroksida:
$$\\ce{2 H2O2(aq) -> 2 H2O(l) + O2(g)^}$$
Dengan menambahkan larutan katalis besi(III) klorida ($\\ce{FeCl3}$), diperoleh data volume gas oksigen yang tertampung:

| Tabung Uji | Volume $\\ce{H2O2}$ $3\\%$ | Suhu Larutan | Konsentrasi $\\ce{FeCl3}$ | Volume Gas $\\ce{O2}$ (60 detik) |
| :---: | :---: | :---: | :---: | :---: |
| **Tabung 1** | $20.0\\text{ mL}$ | $25^\\circ\\text{C}$ | $0.0\\text{ M}$ (tanpa katalis) | $0.5\\text{ mL}$ |
| **Tabung 2** | $20.0\\text{ mL}$ | $25^\\circ\\text{C}$ | $0.1\\text{ M}$ ($2.0\\text{ mL}$) | $18.4\\text{ mL}$ |
| **Tabung 3** | $20.0\\text{ mL}$ | $25^\\circ\\text{C}$ | $0.2\\text{ M}$ ($2.0\\text{ mL}$) | $36.2\\text{ mL}$ |
| **Tabung 4** | $20.0\\text{ mL}$ | $45^\\circ\\text{C}$ | $0.1\\text{ M}$ ($2.0\\text{ mL}$) | $42.8\\text{ mL}$ |

---

### 🎯 Pertanyaan:
1. Berdasarkan pembandingan **Tabung 1, 2, dan 3**, tentukan variabel bebas, variabel terikat, dan 3 variabel kontrol!
2. Apakah fungsi ilmiah dari **Tabung 1** dalam eksperimen ini?
3. Rumuskan hipotesis ilmiah teruji untuk pembandingan antara **Tabung 2 dan Tabung 4**!
4. Buat simpulan kuantitatif hubungan konsentrasi katalis terhadap laju pembentukan gas $\\ce{O2}$!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Identifikasi Triad Variabel (Tabung 1, 2, 3)
- **Variabel Bebas (Manipulasi):** Konsentrasi larutan katalis $\\ce{FeCl3}$ ($0.0\\text{ M}$, $0.1\\text{ M}$, $0.2\\text{ M}$).
- **Variabel Terikat (Respons):** Laju pembentukan gas oksigen, diukur dari volume gas $\\ce{O2}$ yang tertampung dalam 60 detik.
- **Variabel Kontrol (Dijaga Konstan):**
  1. Suhu sistem percobaan (dijaga tepat $25^\\circ\\text{C}$).
  2. Volume dan konsentrasi awal hidrogen peroksida ($20.0\\text{ mL}$ larutan $3\\%$).
  3. Volume larutan katalis yang ditambahkan ($2.0\\text{ mL}$).
  4. Durasi waktu pengukuran (tepat 60 detik).

#### Langkah 2: Fungsi Ilmiah Tabung 1 (Kontrol Negatif)
Tabung 1 berfungsi sebagai **Kelompok Kontrol Negatif (*Negative Control*)**. Tabung ini membuktikan bahwa tanpa kehadiran katalis, laju penguraian hidrogen peroksida pada suhu kamar berlangsung sangat lambat ($0.5\\text{ mL/menit}$). Dengan demikian, lonjakan volume gas $\\ce{O2}$ pada Tabung 2 dan 3 sahih disebabkan oleh kerja katalis $\\ce{FeCl3}$, bukan akibat dekomposisi spontan lingkungan.

#### Langkah 3: Perumusan Hipotesis Teruji (Tabung 2 vs 4)
Pada Tabung 2 dan 4, konsentrasi katalis dibuat identik ($0.1\\text{ M}$), namun suhu dinaikkan dari $25^\\circ\\text{C}$ menjadi $45^\\circ\\text{C}$.  
> *"Peningkatan suhu larutan dari $25^\\circ\\text{C}$ ke $45^\\circ\\text{C}$ akan meningkatkan energi kinetik partikel sehingga memperbesar frekuensi tumbukan efektif dan mempercepat laju dekomposisi $\\ce{H2O2}$, dibuktikan dengan volume gas $\\ce{O2}$ yang tertampung lebih banyak dalam waktu 60 detik."*

#### Langkah 4: Simpulan Kuantitatif
Rasio volume $\\ce{O2}$ pada Tabung 3 terhadap Tabung 2:
$$\\frac{36.2\\text{ mL}}{18.4\\text{ mL}} \\approx 1.97 \\approx 2$$
Ketika konsentrasi katalis dinaikkan 2 kali lipat (dari $0.1\\text{ M}$ ke $0.2\\text{ M}$), volume gas $\\ce{O2}$ yang dihasilkan meningkat tepat 2 kali lipat. Laju reaksi berbanding lurus linier dengan konsentrasi katalis.

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Pembeda Utama Variabel Kontrol vs Kelompok Kontrol:** Variabel kontrol adalah *parameter fisik* yang sengaja disamakan (suhu, volume, wadah), sedangkan kelompok kontrol adalah *sampel eksperimen pembanding* tanpa perlakuan (misal: tabung tanpa katalis). Di soal Asesmen Kompetensi Minimum (AKM) dan UTBK, kelompok kontrol negatif selalu berfungsi sebagai tolok ukur validitas data.`,
    keyFormulas: [
      { name: 'Laju Pembentukan Gas Rata-rata', formula: 'r = \\frac{\\Delta V}{\\Delta t} \\quad (\\text{mL/detik})' },
    ],
  },
  {
    tag: 'soal-pengukuran-dan-angka-penting',
    tags: ['angka-penting', 'pengukuran-presisi', 'meniskus-buret', 'bankers-rounding'],
    title: 'Contoh Soal 2: Pengukuran Presisi Densitas & Propagasi Angka Penting (Level: Sedang)',
    summary: 'Penerapan 4 kaidah angka penting, pembacaan meniskus buret analitik, kalkulasi densitas, dan konvensi pembulatan genap (Banker\'s Rounding).',
    content: `### 📋 Skenario & Data Pengukuran:
Seorang siswa kelas X melakukan penentuan massa jenis (*densitas*) larutan etanol murni di laboratorium menggunakan neraca analitik dan buret $50.00\\text{ mL}$:
- Massa botol timbang kosong bertutup: $28.450\\text{ g}$
- Massa botol timbang + larutan etanol: $45.175\\text{ g}$
- Pembacaan skala awal buret: $2.10\\text{ mL}$
- Pembacaan skala akhir buret: $23.35\\text{ mL}$
- Nilai densitas literatur etanol murni pada $20^\\circ\\text{C}$: $\\rho_{\\text{lit}} = 0.789\\text{ g/mL}$

---

### 🎯 Pertanyaan:
1. Hitung massa bersih larutan etanol dengan kaidah angka penting yang tepat!
2. Hitung volume cairan etanol yang dikeluarkan dari buret sesuai aturan angka penting!
3. Hitung massa jenis cairan ($\\rho$) dan laporkan hasilnya dengan jumlah angka penting yang benar!
4. Tentukan nilai persentase galat relatif (*relative error*) pengukuran siswa terhadap nilai literatur!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Menghitung Massa Bersih Larutan
$$m_{\\text{etanol}} = 45.175\\text{ g} - 28.450\\text{ g} = \\mathbf{16.725\\text{ gram}}$$
*Kaidah Operasi Penjumlahan/Pengurangan:* Kedua data pengukuran memiliki 3 angka di belakang koma (3 desimal). Maka hasil pengurangannya wajib mempertahankan 3 angka di belakang koma, yaitu **$16.725\\text{ g}$ (memiliki 5 angka penting)**.

#### Langkah 2: Menghitung Volume Cairan dari Buret
$$V_{\\text{etanol}} = 23.35\\text{ mL} - 2.10\\text{ mL} = \\mathbf{21.25\\text{ mL}}$$
Kedua pembacaan skala buret memiliki 2 angka di belakang koma (ketelitian buret $\\pm 0.01\\text{ mL}$). Hasil pengurangan mempertahankan 2 desimal, yaitu **$21.25\\text{ mL}$ (memiliki 4 angka penting)**.

#### Langkah 3: Menghitung Massa Jenis ($\\rho$)
$$\\rho = \\frac{m}{V} = \\frac{16.725\\text{ g (5 AP)}}{21.25\\text{ mL (4 AP)}} = 0.7870588\\dots\\text{ g/mL}$$
*Kaidah Operasi Pembagian:* Hasil bagi dibatasi oleh faktor dengan jumlah angka penting paling sedikit, yaitu volume ($21.25\\text{ mL}$, memiliki 4 AP).  
Maka hasil dibulatkan menjadi 4 angka penting:
$$\\rho = \\mathbf{0.7871\\text{ g/mL}}$$

#### Langkah 4: Menghitung Persen Galat Relatif
$$\\% \\text{ Galat} = \\left| \\frac{\\rho_{\\text{hitung}} - \\rho_{\\text{lit}}}{\\rho_{\\text{lit}}} \\right| \\times 100\\% = \\left| \\frac{0.7871 - 0.789}{0.789} \\right| \\times 100\\% = \\frac{0.0019}{0.789} \\times 100\\% = \\mathbf{0.24\\%}$$

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Kaidah Emas Angka Penting di Ujian:**  
> - **Penjumlahan/Pengurangan:** Ikuti jumlah *desimal paling sedikit* (bukan jumlah AP terbanyak).  
> - **Perkalian/Pembagian:** Ikuti jumlah *angka penting paling sedikit*.  
> Angka nol di antara angka bukan nol selalu penting ($20.05$ = 4 AP), dan angka nol di belakang desimal pada hasil ukur adalah penting ($2.10$ = 3 AP).`,
    keyFormulas: [
      { name: 'Rumus Kerapatan Massa', formula: '\\rho = \\frac{m}{V}' },
      { name: 'Rumus Persen Galat Relatif', formula: '\\% \\text{Galat} = \\left| \\frac{\\text{Hasil Ukur} - \\text{Nilai Literatur}}{\\text{Nilai Literatur}} \\right| \\times 100\\%' },
    ],
  },
  {
    tag: 'soal-kuantitatif-ekonomi-atom',
    tags: ['kimia-hijau', 'ekonomi-atom', 'limbah-industri', 'hots-sma'],
    title: 'Contoh Soal 3: Kuantifikasi Ekonomi Atom & Efisiensi Kimia Hijau (Level: HOTS)',
    summary: 'Evaluasi kuantitatif dua rute sintesis industri berdasarkan prinsip ekonomi atom, kalkulasi produk samping limbah, serta pemahaman E-factor.',
    content: `### 📋 Skenario & Data Industri:
Senyawa etilena oksida ($\\ce{C2H4O}$, $M_r = 44.05\\text{ g/mol}$) merupakan bahan baku poliester dan etilen glikol. Di industri kimia, senyawa ini dapat disintesis melalui dua metode berbeda:

- **Metode A (Rute Klorohidrin Konvensional):**
  $$\\ce{C2H4 + Cl2 + Ca(OH)2 -> C2H4O + CaCl2 + H2O}$$
- **Metode B (Oksidasi Hijau dengan Katalis Perak):**
  $$\\ce{C2H4 + 1/2 O2 ->[\\text{katalis } \\ce{Ag}] C2H4O}$$

*(Massa molar atom: $\\ce{C} = 12.01$, $\\ce{H} = 1.008$, $\\ce{O} = 16.00$, $\\ce{Cl} = 35.45$, $\\ce{Ca} = 40.08\\text{ g/mol}$)*

---

### 🎯 Pertanyaan:
1. Hitung total massa molar reaktan untuk Metode A dan Metode B!
2. Tentukan persentase Ekonomi Atom ($\\% \\text{AE}$) masing-masing metode!
3. Jika sebuah pabrik menghasilkan $88.1\\text{ ton}$ etilena oksida menggunakan Metode A, berapakah massa limbah garam kalsium klorida ($\\ce{CaCl2}$) yang terbentuk?
4. Berdasarkan 12 Prinsip Kimia Hijau (*Green Chemistry*), jelaskan mengapa Metode B jauh lebih unggul dan ramah lingkungan!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Menghitung Massa Molar Reaktan
- **Metode A:**
  $$\\begin{aligned}
  M_r(\\ce{C2H4}) &= (2 \\times 12.01) + (4 \\times 1.008) = 28.05\\text{ g/mol} \\\\
  M_r(\\ce{Cl2}) &= 2 \\times 35.45 = 70.90\\text{ g/mol} \\\\
  M_r(\\ce{Ca(OH)2}) &= 40.08 + 2(16.00 + 1.008) = 74.10\\text{ g/mol} \\\\
  \\sum M_r(\\text{Reaktan A}) &= 28.05 + 70.90 + 74.10 = \\mathbf{173.05\\text{ g/mol}}
  \\end{aligned}$$
- **Metode B:**
  $$\\sum M_r(\\text{Reaktan B}) = M_r(\\ce{C2H4}) + \\frac{1}{2} M_r(\\ce{O2}) = 28.05 + 16.00 = \\mathbf{44.05\\text{ g/mol}}$$

#### Langkah 2: Menghitung Persentase Ekonomi Atom (% AE)
Produk yang diinginkan adalah etilena oksida ($\\ce{C2H4O}$, $M_r = 44.05\\text{ g/mol}$):
- **Metode A:**
  $$\\% \\text{AE}_{\\text{Metode A}} = \\frac{M_r(\\ce{C2H4O})}{\\sum M_r(\\text{Reaktan A})} \\times 100\\% = \\frac{44.05}{173.05} \\times 100\\% = \\mathbf{25.45\\%}$$
- **Metode B:**
  $$\\% \\text{AE}_{\\text{Metode B}} = \\frac{M_r(\\ce{C2H4O})}{\\sum M_r(\\text{Reaktan B})} \\times 100\\% = \\frac{44.05}{44.05} \\times 100\\% = \\mathbf{100.00\\%}$$

#### Langkah 3: Menghitung Limbah Garam $\\ce{CaCl2}$ pada Metode A
Koefisien reaksi: $1\\text{ mol } \\ce{C2H4O} \\equiv 1\\text{ mol } \\ce{CaCl2}$ ($M_r\\,\\ce{CaCl2} = 40.08 + 70.90 = 110.98\\text{ g/mol}$).
- Mol $\\ce{C2H4O}$ yang dihasilkan $= \\frac{88.1 \\times 10^6\\text{ g}}{44.05\\text{ g/mol}} = 2.00 \\times 10^6\\text{ mol}$.
- Massa limbah $\\ce{CaCl2} = (2.00 \\times 10^6\\text{ mol}) \\times 110.98\\text{ g/mol} = 221.96 \\times 10^6\\text{ g} = \\mathbf{221.96\\text{ ton}}$!

#### Langkah 4: Evaluasi Prinsip Kimia Hijau
Metode B jauh lebih ramah lingkungan karena:
1. **Prinsip 2 (Ekonomi Atom):** Memiliki ekonomi atom $100\\%$, artinya seluruh atom pereaksi masuk ke produk tanpa limbah. Pada Metode A, ekonomi atom hanya $25.45\\%$, menghasilkan limbah $\\ce{CaCl2}$ seberat $2.5$ kali lipat massa produk target.
2. **Prinsip 3 & 12 (Sintesis Aman & Pencegahan Kecelakaan):** Metode B tidak menggunakan gas klorin ($\\ce{Cl2}$) yang sangat beracun dan korosif.
3. **Prinsip 9 (Katalisis):** Menggunakan katalis heterogen perak ($\\ce{Ag}$) yang selektif dan dapat digunakan berulang kali.

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Beda Persen Hasil vs Persen Ekonomi Atom:**  
> - **Persen Hasil (*Yield*):** Mengukur efisiensi kerja di laboratorium (seberapa banyak target berhasil disintesis dibanding hitungan teoritis).  
> - **Persen Ekonomi Atom (*Atom Economy*):** Mengukur desain reaksi di atas kertas (berapa persen massa atom pereaksi yang terpakai menjadi produk target vs terbuang jadi limbah). Reaksi dengan yield 99% tetap bisa mencemari lingkungan jika ekonomi atomnya kecil!`,
    keyFormulas: [
      { name: 'Rumus Persentase Ekonomi Atom', formula: '\\% \\text{AE} = \\frac{M_r(\\text{Produk Target})}{\\sum M_r(\\text{Semua Reaktan})} \\times 100\\%' },
    ],
  },
  {
    tag: 'soal-keselamatan-tumpahan-asam',
    tags: ['keselamatan-kerja-lab', 'simbol-ghs', 'netralisasi-asam', 'protokol-k3'],
    title: 'Contoh Soal 4: Protokol K3 Laboratorium & Penanganan Bahan Korosif (Level: Sedang)',
    summary: 'Identifikasi piktogram bahaya GHS, tata cara tanggap darurat tumpahan asam pekat, kaidah Always Add Acid, dan kalkulasi stoikiometri zat penetral.',
    content: `### 📋 Skenario Kasus K3 Lab:
Di laboratorium sekolah, sebuah botol berisi $25.0\\text{ mL}$ asam sulfat pekat $98.0\\%\\text{ (b/b)}$ tersenggol dan tumpah ke atas meja praktikum.  
*(Data fisik: kerapatan $\\rho = 1.84\\text{ g/mL}$, massa molar $\\ce{H2SO4} = 98.08\\text{ g/mol}$, massa molar $\\ce{NaHCO3} = 84.01\\text{ g/mol}$)*.

---

### 🎯 Pertanyaan:
1. Sebutkan piktogram bahaya GHS yang wajib tercantum pada botol asam sulfat pekat!
2. Mengapa petugas laboratorium **dilarang keras** menetralkan tumpahan asam sulfat pekat menggunakan larutan atau pelet $\\ce{NaOH}$ pekat?
3. Tuliskan persamaan reaksi netralisasi yang aman menggunakan serbuk natrium bikarbonat (soda kue, $\\ce{NaHCO3}$)!
4. Hitung massa minimal serbuk $\\ce{NaHCO3}$ padat yang harus ditaburkan agar seluruh asam sulfat yang tumpah ternetralkan sempurna!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Piktogram GHS Asam Sulfat Pekat
Botol asam sulfat pekat wajib memuat piktogram:
- **Korosif (*Corrosion*):** Simbol cairan menetes ke tangan dan pelat logam (karena menyebabkan luka bakar kimiawi parah pada kulit dan merusak logam).
- **Toksisitas Akut / Bahaya Kesehatan:** Simbol korosi jaringan mukosa saluran pernapasan.

#### Langkah 2: Alasan Dilarang Menggunakan $\\ce{NaOH}$ Pekat
Reaksi antara asam kuat pekat dan basa kuat pekat bersifat **sangat eksotermik dahsyat**:
$$\\ce{H+(aq) + OH-(aq) -> H2O(l)} \\quad \\Delta H = -57.3\\text{ kJ/mol}$$
Kalor yang dilepaskan seketika akan mendidihkan cairan dan menimbulkan **semburan percikan asam-basa panas mendidih** ke arah wajah/tubuh petugas. Sebaliknya, serbuk $\\ce{NaHCO3}$ bersifat amfoter lemah, reaksinya menghasilkan buih gas $\\ce{CO2}$ yang menyerap panas, dan buih gelembung berhenti otomatis saat asam sudah netral (indikator visual alami).

#### Langkah 3: Persamaan Reaksi Netralisasi
$$\\ce{H2SO4(aq) + 2 NaHCO3(s) -> Na2SO4(aq) + 2 CO2(g)^ + 2 H2O(l)}$$

#### Langkah 4: Perhitungan Massa Serbuk Penetral $\\ce{NaHCO3}$
1. **Massa total tumpahan larutan:**
   $$m = \\rho \\times V = 1.84\\text{ g/mL} \\times 25.0\\text{ mL} = 46.0\\text{ gram}$$
2. **Massa murni $\\ce{H2SO4}$ ($98\\%$):**
   $$m_{\\ce{H2SO4}} = 0.980 \\times 46.0\\text{ g} = 45.08\\text{ gram}$$
3. **Jumlah mol $\\ce{H2SO4}$:**
   $$n_{\\ce{H2SO4}} = \\frac{45.08\\text{ g}}{98.08\\text{ g/mol}} = 0.4596\\text{ mol}$$
4. **Mol $\\ce{NaHCO3}$ yang dibutuhkan (rasio $1 : 2$):**
   $$n_{\\ce{NaHCO3}} = 2 \\times 0.4596\\text{ mol} = 0.9192\\text{ mol}$$
5. **Massa serbuk $\\ce{NaHCO3}$ yang wajib ditaburkan:**
   $$m_{\\ce{NaHCO3}} = 0.9192\\text{ mol} \\times 84.01\\text{ g/mol} = \\mathbf{77.22\\text{ gram}}$$

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Kaidah Emas Pengenceran Asam (AAA - Always Add Acid):**  
> Tuangkan selalu asam pekat ke dalam air melalui dinding gelas sambil diaduk perlahan, **JANGAN PERNAH menuangkan air ke dalam asam pekat**. Air bermassa jenis lebih kecil sehingga akan mengapung di permukaan asam, mendidih mendadak akibat kalor pelarutan, dan memercikkan asam ke mata!`,
    keyFormulas: [
      { name: 'Kerapatan Massa', formula: 'm = \\rho \\times V' },
      { name: 'Mol Zat', formula: 'n = \\frac{m}{M_r}' },
    ],
  },
  {
    tag: 'soal-pemisahan-campuran-johnstone',
    tags: ['pemisahan-campuran', 'segitiga-johnstone', 'sub-mikroskopis', 'hots-sma'],
    title: 'Contoh Soal 5: Analisis Pemisahan Campuran & Dekonstruksi Segitiga Johnstone (Level: HOTS)',
    summary: 'Rancangan alur pemisahan campuran heterogen multikomponen, analisis proses pada level makroskopis, sub-mikroskopis, dan representasi simbolik.',
    content: `### 📋 Skenario Masalah:
Di laboratorium sekolah tersedia $50.0\\text{ gram}$ sampel campuran heterogen padat yang terdiri atas: serbuk besi ($\\ce{Fe}$), garam dapur ($\\ce{NaCl}$), dan pasir silika ($\\ce{SiO2}$). Siswa ditugaskan memisahkan ketiga zat tersebut hingga masing-masing diperoleh dalam kondisi murni dan kering.

---

### 🎯 Pertanyaan:
1. Rancanglah bagan alur metode pemisahan bertahap yang paling efektif dan sebutkan prinsip fisika pemisahan pada setiap langkah!
2. Jelaskan apa yang terjadi pada **tingkat sub-mikroskopis (partikulat)** saat air ditambahkan ke dalam campuran garam dan pasir!
3. Tuliskan representasi simbolik proses pelarutan garam dapur dalam air!
4. Mengapa seluruh tahapan pemisahan ini tergolong ke dalam **perubahan fisika**, bukan perubahan kimia?

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Desain Alur Pemisahan Bertahap
1. **Tahap 1 (Pemisahan Magnetik):**
   Gunakan magnet batang yang dibungkus plastik untuk menarik serbuk besi dari campuran padat.
   - *Prinsip:* Perbedaan sifat magnetik (besi feromagnetik tertarik magnet, garam dan pasir tidak). Serbuk besi tertahan di magnet.
2. **Tahap 2 (Pelarutan Air & Filtrasi):**
   Tambahkan akuades ke dalam sisa campuran pasir dan garam, aduk hingga garam larut sempurna, lalu saring menggunakan corong dan kertas saring.
   - *Prinsip:* Perbedaan kelarutan dalam pelarut air (garam larut membentuk larutan homogen, pasir silika tidak larut).
   - *Hasil:* Pasir tertahan di kertas saring sebagai **residu**, sedangkan larutan garam lolos sebagai **filtrat**. Bilas pasir dengan sedikit air dan keringkan di oven.
3. **Tahap 3 (Evaporasi / Kristalisasi):**
   Panaskan cairan filtrat di dalam cawan penguap hingga seluruh air menguap.
   - *Prinsip:* Perbedaan titik didih (air mendidih pada $100^\\circ\\text{C}$ dan menguap, sedangkan $\\ce{NaCl}$ memiliki titik didih $> 1400^\\circ\\text{C}$ sehingga tertinggal sebagai kristal garam murni).

#### Langkah 2: Analisis Tingkat Sub-mikroskopis (Partikulat)
Ketika air ditambahkan:
- Molekul air ($\\ce{H2O}$) yang bersifat polar mendekati kisi kristal garam $\\ce{NaCl}$.
- Kutub negatif parsial ($\\delta^-$ pada atom oksigen) menarik kation $\\ce{Na+}$, sedangkan kutub positif parsial ($\\delta^+$ pada atom hidrogen) menarik anion $\\ce{Cl-}$.
- Tarikan gaya **ion-dipol** ini mengatasi energi kisi kristal garam, melepaskan ion-ion dari kisi dan menyelubunginya dengan molekul air (**proses hidrasi ion**).
- Sebaliknya, molekul air tidak mampu memutus ikatan kovalen jaringan raksasa pada kristal silika ($\\ce{SiO2}$), sehingga pasir tetap berupa gumpalan padat yang tidak larut.

#### Langkah 3: Representasi Simbolik Reaksi
$$\\ce{NaCl(s) ->[\\ce{H2O}] Na+(aq) + Cl-(aq)}$$
Simbol $(s)$ menunjukkan kisi kristal padat, dan simbol $(aq)$ menyatakan ion terlarut yang terbungkus mantel hidrasi molekul air.

#### Langkah 4: Evaluasi Perubahan Fisika vs Kimia
Proses ini tergolong **perubahan fisika murni** karena:
- Tidak ada pembentukan ikatan kimia kovalen baru atau zat jenis baru.
- Sifat kimia masing-masing komponen tetap utuh (besi tetap bersifat magnetik, garam tetap terasa asin dan memiliki rumus $\\ce{NaCl}$, silika tetap $\\ce{SiO2}$).
- Komponen dapat dipisahkan kembali ke bentuk aslinya murni melalui metode fisika (magnet, filtrasi, dan evaporasi).

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Pembeda Residu vs Filtrat:**  
> - **Residu:** Zat padat yang *tertahan* di atas kertas saring (karena ukuran partikelnya lebih besar dari pori-pori kertas saring, misal: pasir $\\ce{SiO2}$).  
> - **Filtrat:** Cairan atau larutan yang *lolos menembus* kertas saring (partikel terlarut berukuran ionik $< 1\\text{ nm}$, misal: larutan $\\ce{NaCl(aq)}$).  
> Jangan sampai tertukar istilah residu dan filtrat pada soal ujian praktikum kimia!`,
    keyFormulas: [
      { name: 'Simbol Pelarutan Fisika', formula: '\\ce{NaCl(s) ->[\\ce{H2O}] Na+(aq) + Cl-(aq)}' },
    ],
  },
];

// ============================================================================
// TOPIK 102: Struktur Atom Dasar & Sistem Periodik Unsur
// ============================================================================
export const WORKED_EXAMPLES_TOPIC_102: ConceptBlock[] = [
  {
    tag: 'soal-kelimpahan-isotop-dan-spektrometri',
    tags: ['spektrometri-massa', 'kelimpahan-isotop', 'massa-atom-relatif', 'kimia-sma'],
    title: 'Contoh Soal 1: Analisis Spektrometri Massa & Kelimpahan Fraksional Isotop (Level: Sedang)',
    summary: 'Penentuan massa atom relatif (Ar) galium dari data spektrometer massa serta penentuan persentase kelimpahan dua isotop boron dari nilai Ar rata-rata.',
    content: `### 📋 Kasus A: Kalkulasi $A_r$ dari Spektrum Massa
Unsur Galium ($\\ce{Ga}$, $Z = 31$) yang digunakan pada semikonduktor laser dianalisis dengan spektrometer massa. Hasil analisis menunjukkan dua puncak isotop stabil:
- Puncak 1: Isotop $\\ce{^{69}Ga}$ dengan massa $68.9256\\text{ sma}$ dan kelimpahan $60.11\\%$.
- Puncak 2: Isotop $\\ce{^{71}Ga}$ dengan massa $70.9247\\text{ sma}$ dan kelimpahan $39.89\\%$.

Hitunglah massa atom relatif ($A_r$) rata-rata unsur Galium berdasarkan data tersebut (bulatkan ke 2 desimal)!

---

### 📋 Kasus B: Menentukan Kelimpahan Alami dari $A_r$ Standar
Di alam bebas, unsur Boron ($\\ce{B}$, $Z = 5$) dengan massa atom relatif standar $A_r = 10.81$ hanya tersusun atas dua isotop stabil, yaitu $\\ce{^{10}B}$ (massa $= 10.01\\text{ sma}$) dan $\\ce{^{11}B}$ (massa $= 11.01\\text{ sma}$).  
Tentukan persentase kelimpahan masing-masing isotop boron tersebut di alam!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Kalkulasi Kasus A (Galium)
Massa atom relatif ($A_r$) adalah rata-rata tertimbang (*weighted average*) dari seluruh isotop stabil alami:
$$A_r = (f_1 \\times m_1) + (f_2 \\times m_2)$$
Substitusikan fraksi kelimpahan desimal ($f_1 = 0.6011$, $f_2 = 0.3989$):
$$\\begin{aligned}
A_r(\\ce{Ga}) &= (0.6011 \\times 68.9256) + (0.3989 \\times 70.9247) \\\\
&= 41.4312 + 28.2919 = \\mathbf{69.72\\text{ sma}}
\\end{aligned}$$

#### Langkah 2: Formulasi Aljabar Kasus B (Boron)
Misalkan fraksi kelimpahan isotop $\\ce{^{10}B} = x$.  
Karena jumlah total fraksi kelimpahan di alam adalah $100\\%$ ($1.00$), maka fraksi kelimpahan $\\ce{^{11}B} = (1 - x)$.

#### Langkah 3: Eksekusi Perhitungan Kasus B
$$\\begin{aligned}
A_r(\\ce{B}) &= [x \\times m(\\ce{^{10}B})] + [(1 - x) \\times m(\\ce{^{11}B})] \\\\
10.81 &= (x \\times 10.01) + [(1 - x) \\times 11.01] \\\\
10.81 &= 10.01x + 11.01 - 11.01x \\\\
10.81 - 11.01 &= (10.01 - 11.01)x \\\\
-0.20 &= -1.00x \\\\
x &= \\frac{-0.20}{-1.00} = 0.20
\\end{aligned}$$
- Persentase kelimpahan $\\ce{^{10}B} = 0.20 \\times 100\\% = \\mathbf{20.0\\%}$
- Persentase kelimpahan $\\ce{^{11}B} = (1 - 0.20) \\times 100\\% = \\mathbf{80.0\\%}$

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Trik Cepat Ujian Menghitung Kelimpahan 2 Isotop:**  
> Fraksi isotop yang lebih ringan selalu sama dengan:
> $$x = \\frac{\\text{Massa Isotop Berat} - A_r}{\\text{Selisih Massa Kedua Isotop}} = \\frac{11.01 - 10.81}{11.01 - 10.01} = \\frac{0.20}{1.00} = 0.20 \\implies 20\\%$$
> Rumus praktis ini menghemat waktu berharga pada soal pilihan ganda UTBK!`,
    keyFormulas: [
      { name: 'Rata-rata Tertimbang Ar', formula: 'A_r = \\sum (f_i \\times m_i)' },
    ],
  },
  {
    tag: 'soal-bilangan-kuantum-dan-spu',
    tags: ['bilangan-kuantum', 'sistem-periodik', 'golongan-periode', 'kimia-sma'],
    title: 'Contoh Soal 2: Penentuan Empat Bilangan Kuantum & Letak Unsur dalam SPU (Level: Sedang)',
    summary: 'Algoritma penentuan empat bilangan kuantum elektron terakhir, pengisian diagram orbital menurut aturan Hund, serta penentuan periode dan golongan SPU.',
    content: `### 📋 Skenario Masalah:
Unsur Germanium ($\\ce{_{32}Ge}$) merupakan metalloid penting yang digunakan pada komponen transistor dan serat optik.
1. Tuliskan konfigurasi elektron keadaan dasar (*ground state*) dari atom $\\ce{_{32}Ge}$ menggunakan notasi gas mulia singkat!
2. Gambarkan diagram orbital untuk subkulit yang dihuni oleh elektron valensi terakhirnya!
3. Tentukan nilai keempat bilangan kuantum ($n, l, m_l, m_s$) untuk elektron terakhir atom $\\ce{_{32}Ge}$!
4. Berdasarkan konfigurasi elektronnya, tentukan letak periode dan golongan unsur Germanium dalam Sistem Periodik Unsur modern!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Konfigurasi Elektron Gas Mulia Singkat
Nomor atom Germanium $Z = 32$. Gas mulia terdekat sebelum $Z=32$ adalah Argon ($\\ce{_{18}Ar}$):
$$\\ce{_{32}Ge}: [\\ce{Ar}]\\, 4s^2 3d^{10} 4p^2$$

#### Langkah 2: Diagram Orbital Subkulit $4p$
Elektron terakhir mengisi subkulit $4p$ yang memiliki 3 orbital ($m_l = -1, 0, +1$).
Berdasarkan **Aturan Hund**, kedua elektron mengisi orbital secara paralel tidak berpasangan terlebih dahulu:
- Kotak $m_l = -1$: $\\uparrow$ (elektron ke-1)
- Kotak $m_l = 0$: $\\uparrow$ (elektron ke-2, elektron terakhir!)
- Kotak $m_l = +1$: kosong

#### Langkah 3: Penentuan Empat Bilangan Kuantum Elektron Terakhir
- **Bilangan Kuantum Utama ($n$):** Kulit ke-$4 \\implies \\mathbf{n = 4}$
- **Bilangan Kuantum Azimut ($l$):** Subkulit $p \\implies \\mathbf{l = 1}$
- **Bilangan Kuantum Magnetik ($m_l$):** Elektron terakhir berada di kotak orbital kedua $\\implies \\mathbf{m_l = 0}$
- **Bilangan Kuantum Spin ($m_s$):** Tanda panah ke atas (spin positif) $\\implies \\mathbf{m_s = +\\frac{1}{2}}$  
Kombinasi kuantum: $\\mathbf{(4, 1, 0, +\\frac{1}{2})}$

#### Langkah 4: Penentuan Letak Periode dan Golongan SPU
- **Periode:** Nilai $n$ terbesar adalah $4 \\implies \\mathbf{\\text{Periode 4}}$.
- **Golongan:** Elektron valensi pada kulit terluar ($n=4$) adalah $4s^2 4p^2$. Karena elektron terakhir berada di blok $p$, nomor golongan ditentukan oleh jumlah elektron $(s + p) = 2 + 2 = 4 \\implies \\mathbf{\\text{Golongan 14 (IVA)}}$. Subkulit $3d^{10}$ yang sudah penuh tidak dihitung sebagai elektron valensi golongan utama.

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Jebakan Elektron Valensi Blok p:**  
> Jika konfigurasi berakhiran $ns^2 (n-1)d^{10} np^x$, elektron valensinya HANYA $2 + x$ (elektron pada kulit terluar $n$). Subkulit $(n-1)d^{10}$ yang sudah terisi penuh $10$ elektron berfungsi sebagai kulit dalam yang stabil, BUKAN elektron valensi golongan!`,
    keyFormulas: [
      { name: 'Kombinasi Kuantum Ge', formula: '(n, l, m_l, m_s) = (4, 1, 0, +\\frac{1}{2})' },
      { name: 'Elektron Valensi Blok p', formula: '\text{Golongan} = 10 + (s + p)' },
    ],
  },
  {
    tag: 'soal-konfigurasi-elektron-anomali',
    tags: ['konfigurasi-elektron', 'anomali-aufbau', 'kation-transisi', 'hots-sma'],
    title: 'Contoh Soal 3: Konfigurasi Kuantum, Anomali Subkulit d & Kation Logam (Level: HOTS)',
    summary: 'Penjelasan kestabilan konfigurasi setengah penuh dan penuh subkulit d, aturan pelepasan elektron 4s pada pembentukan kation transisi, serta sifat kemagnetan.',
    content: `### 📋 Skenario Masalah:
Diberikan tiga unsur logam transisi periode 4:
1. Kromium ($\\ce{_{24}Cr}$)
2. Tembaga ($\\ce{_{29}Cu}$)
3. Besi ($\\ce{_{26}Fe}$)

---

### 🎯 Pertanyaan:
1. Tuliskan konfigurasi elektron keadaan dasar $\\ce{_{24}Cr}$ dan $\\ce{_{29}Cu}$, serta jelaskan mengapa keduanya menyimpang dari aturan Aufbau baku!
2. Tuliskan konfigurasi elektron kation $\\ce{Fe^2+}$ dan $\\ce{Fe^3+}$, serta sebutkan orbital mana yang elektronnya terlepas terlebih dahulu!
3. Tentukan jumlah elektron tak berpasangan pada ion $\\ce{Fe^2+}$ dan $\\ce{Fe^3+}$, lalu tentukan ion manakah yang memiliki sifat paramagnetik lebih kuat!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Anomali Konfigurasi $\\ce{Cr}$ dan $\\ce{Cu}$
- Berdasarkan aturan Aufbau baku, $\\ce{_{24}Cr}$ diprediksi $[\\ce{Ar}]\\, 4s^2 3d^4$. Namun konfigurasi riil di alam adalah:
  $$\\ce{_{24}Cr}: [\\ce{Ar}]\\, 4s^1 3d^5$$
- Berdasarkan aturan Aufbau baku, $\\ce{_{29}Cu}$ diprediksi $[\\ce{Ar}]\\, 4s^2 3d^9$. Namun konfigurasi riil di alam adalah:
  $$\\ce{_{29}Cu}: [\\ce{Ar}]\\, 4s^1 3d^{10}$$
- **Alasan Ilmiah Kuantum:** Subkulit $d$ yang terisi setengah penuh ($d^5$) dan terisi penuh ($d^{10}$) memiliki simetri bola yang sangat stabil dan energi pertukaran kuantum (*exchange energy*) maksimal antar-elektron paralel. Hal ini mengompensasi sedikit energi yang diperlukan untuk mempromosikan satu elektron dari orbital $4s$ ke $3d$.

#### Langkah 2: Konfigurasi Kation $\\ce{Fe^2+}$ dan $\\ce{Fe^3+}$
Atom besi netral: $\\ce{_{26}Fe}: [\\ce{Ar}]\\, 4s^2 3d^6$.  
Saat membentuk kation, elektron yang dilepas pertama kali WAJIB berasal dari kulit terluar ($n=4$), yaitu subkulit $4s$, BUKAN $3d$!
- Pembentukan $\\ce{Fe^2+}$ (melepas 2 elektron dari $4s$):
  $$\\ce{Fe^2+}: [\\ce{Ar}]\\, 3d^6$$
- Pembentukan $\\ce{Fe^3+}$ (melepas 2 elektron dari $4s$ dan 1 elektron dari $3d$):
  $$\\ce{Fe^3+}: [\\ce{Ar}]\\, 3d^5$$

#### Langkah 3: Jumlah Elektron Tak Berpasangan & Sifat Magnetik
- **Pada $\\ce{Fe^2+}$ ($3d^6$):** Subkulit $d$ memiliki 5 kotak. Satu kotak terisi sepasang ($\\uparrow\\downarrow$) dan 4 kotak terisi tunggal ($\\uparrow$). Terdapat **4 elektron tak berpasangan**.
- **Pada $\\ce{Fe^3+}$ ($3d^5$):** Kelima kotak terisi tunggal ($\\uparrow$). Terdapat **5 elektron tak berpasangan**.
- **Sifat Kemagnetan:** Karena $\\ce{Fe^3+}$ memiliki lebih banyak elektron tak berpasangan ($5$ buah) dibanding $\\ce{Fe^2+}$ ($4$ buah), maka **ion $\\ce{Fe^3+}$ bersifat paramagnetik lebih kuat** (momen magnetik $\\mu = \\sqrt{n(n+2)}$ lebih besar).

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Aturan Emas Ionisasi Logam Transisi:**  
> *"Aufbau mengisi $4s$ duluan baru $3d$, TETAPI ionisasi membuang elektron $4s$ duluan baru $3d$!"*  
> Jangan pernah menuliskan $\\ce{Fe^2+}$ sebagai $[\\ce{Ar}]\\, 4s^2 3d^4$, karena itu adalah kesalahan paling sering pada lembar jawaban siswa SMA!`,
    keyFormulas: [
      { name: 'Konfigurasi Anomali Cr', formula: '\ce{_{24}Cr}: [\ce{Ar}]\, 4s^1 3d^5' },
      { name: 'Momen Magnetik Spin', formula: '\mu = \sqrt{n(n+2)} \quad \text{BM}' },
    ],
  },
  {
    tag: 'soal-energi-ionisasi-bertingkat',
    tags: ['energi-ionisasi', 'lonjakan-ie', 'elektron-valensi', 'hots-sma'],
    title: 'Contoh Soal 4: Analisis Grafik Lonjakan Energi Ionisasi Bertingkat (Level: HOTS)',
    summary: 'Menganalisis data energi ionisasi bertingkat untuk mengungkap elektron valensi, mengidentifikasi golongan SPU, serta merumuskan formula senyawa oksida.',
    content: `### 📋 Skenario & Data Eksperimen:
Suatu unsur logam representatif $X$ yang terletak pada Periode 3 tabel periodik diuji energi ionisasinya berturut-turut dari pelepasan elektron pertama hingga keenam. Diperoleh data energi ionisasi bertingkat ($IE_1$ s/d $IE_6$) dalam satuan $\\text{kJ/mol}$:

| $IE_1$ | $IE_2$ | $IE_3$ | $IE_4$ | $IE_5$ | $IE_6$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $578$ | $1817$ | $2745$ | **$11577$** | $14842$ | $18379$ |

---

### 🎯 Pertanyaan:
1. Hitung rasio kenaikan energi antara tiap tahap ionisasi berturutan!
2. Di antara tahap ionisasi manakah terjadi lonjakan energi (*energy jump*) paling drastis?
3. Berapakah jumlah elektron valensi unsur $X$ dan pada golongan berapakah unsur $X$ berada?
4. Tentukan identitas unsur $X$ dan tuliskan rumus kimia senyawa oksida serta klorida yang dibentuk oleh unsur $X$!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1 & 2: Analisis Rasio Kenaikan Energi Ionisasi
Hitung rasio kenaikan energi ionisasi:
- $\\frac{IE_2}{IE_1} = \\frac{1817}{578} \\approx 3.14$
- $\\frac{IE_3}{IE_2} = \\frac{2745}{1817} \\approx 1.51$
- $\\mathbf{\\frac{IE_4}{IE_3} = \\frac{11577}{2745} \\approx 4.22}$ (Kenaikan melonjak drastis lebih dari $4$ kali lipat / selisih $+8832\\text{ kJ/mol}$!)
- $\\frac{IE_5}{IE_4} = \\frac{14842}{11577} \\approx 1.28$
- $\\frac{IE_6}{IE_5} = \\frac{18379}{14842} \\approx 1.24$

#### Langkah 3: Penentuan Jumlah Elektron Valensi & Golongan
- Tiga elektron pertama ($IE_1, IE_2, IE_3$) dapat dilepaskan dengan energi yang relatif bertahap karena ketiganya berada pada kulit valensi terluar.
- Pelepasan elektron ke-4 ($IE_4$) membutuhkan energi yang melonjak teramat dahsyat ($11577\\text{ kJ/mol}$). Hal ini membuktikan bahwa elektron ke-4 berasal dari **kulit bagian dalam (*noble gas core*)** yang lebih dekat ke inti dan mengalami tarikan muatan inti efektif yang jauh lebih kuat.
- Maka, unsur $X$ memiliki **3 elektron valensi** dan terletak pada **Golongan 13 (IIIA)**.

#### Langkah 4: Identifikasi Unsur & Rumus Senyawa
- Unsur pada Periode 3 Golongan 13 adalah **Aluminium ($\\ce{Al}$, $Z = 13$)**.
- Karena memiliki 3 elektron valensi, ion stabil yang dibentuk adalah kation bervalensi $+3$ ($\\ce{X^3+}$).
- Rumus senyawa oksida (ion $\\ce{O^2-}$): $\\mathbf{\\ce{X2O3}}$ (Aluminium oksida, $\\ce{Al2O3}$).
- Rumus senyawa klorida (ion $\\ce{Cl-}$): $\\mathbf{\\ce{XCl3}}$ (Aluminium klorida, $\\ce{AlCl3}$).

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Kaidah Lonjakan Energi Ionisasi:**  
> Jika lonjakan energi terbesar terjadi saat beralih dari $IE_k$ ke $IE_{k+1}$, maka **jumlah elektron valensinya tepat sama dengan $k$**.  
> Pada soal ini: lonjakan terjadi dari $IE_3$ ke $IE_4$, maka elektron valensi $= 3 \\implies$ Golongan 13 / IIIA.`,
    keyFormulas: [
      { name: 'Kaidah Lonjakan IE', formula: '\\frac{IE_{k+1}}{IE_k} \\gg 1 \\implies \\text{Elektron Valensi} = k' },
    ],
  },
  {
    tag: 'soal-deret-isoelektronik-dan-zeff',
    tags: ['deret-isoelektronik', 'jari-jari-ion', 'muatan-inti-efektif', 'hots-sma'],
    title: 'Contoh Soal 5: Komparasi Jari-Jari Deret Isoelektronik & Muatan Inti Efektif (Level: HOTS)',
    summary: 'Komparasi ukuran jari-jari kation dan anion isoelektronik berdasarkan rasio proton terhadap elektron dan muatan inti efektif Zeff.',
    content: `### 📋 Skenario Masalah:
Perhatikan deret 6 spesi kimia berikut: $\\ce{N^3-}, \\ce{O^2-}, \\ce{F-}, \\ce{Na+}, \\ce{Mg^2+}, \\ce{Al^3+}$.  
Diketahui nomor atom: $\\ce{N} = 7$, $\\ce{O} = 8$, $\\ce{F} = 9$, $\\ce{Na} = 11$, $\\ce{Mg} = 12$, $\\ce{Al} = 13$.

---

### 🎯 Pertanyaan:
1. Buktikan bahwa keenam spesi di atas merupakan **deret isoelektronik** dan tuliskan konfigurasi elektronnya!
2. Urutkan keenam spesi tersebut berdasarkan kenaikan ukuran jari-jarinya (dari yang terkecil ke terbesar)!
3. Jelaskan secara mendalam mengapa kation $\\ce{Al^3+}$ memiliki ukuran jari-jari yang jauh lebih kerdil dibanding anion $\\ce{N^3-}$, padahal jumlah elektron pada keduanya persis sama!
4. Hubungkan fenomena ini dengan gaya elektrostatik Coulomb antara inti atom dan awan elektron!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Pembuktian Deret Isoelektronik
Hitung jumlah elektron masing-masing spesi:
- $\\ce{N^3-}$: $7$ proton, elektron $= 7 - (-3) = 10$
- $\\ce{O^2-}$: $8$ proton, elektron $= 8 - (-2) = 10$
- $\\ce{F-}$: $9$ proton, elektron $= 9 - (-1) = 10$
- $\\ce{Na+}$: $11$ proton, elektron $= 11 - (+1) = 10$
- $\\ce{Mg^2+}$: $12$ proton, elektron $= 12 - (+2) = 10$
- $\\ce{Al^3+}$: $13$ proton, elektron $= 13 - (+3) = 10$  
Seluruh spesi memiliki jumlah elektron yang sama ($10$ elektron) dengan konfigurasi gas mulia neon: **$1s^2 2s^2 2p^6$**. Terbukti deret isoelektronik.

#### Langkah 2: Urutan Kenaikan Jari-Jari
Urutan dari yang terkecil ke terbesar:
$$\\mathbf{\\ce{Al^3+} < \\ce{Mg^2+} < \\ce{Na+} < \\ce{F-} < \\ce{O^2-} < \\ce{N^3-}}$$

#### Langkah 3 & 4: Penjelasan Ilmiah Berbasis Muatan Inti Efektif
Karena jumlah elektron ($10$) dan jumlah kulit ($n=2$) pada semua spesi identik, faktor penentu ukuran spesi sepenuhnya dikendalikan oleh **jumlah proton di dalam inti ($Z$)**:
- **Pada kation $\\ce{Al^3+}$ ($Z = 13$):** Ada $13$ proton bermuatan positif yang menarik $10$ elektron. Rasio muatan inti terhadap elektron adalah $\\frac{13}{10} = 1.30$. Tarikan elektrostatik Coulomb inti sangat kuat, mencengkeram dan memampatkan awan elektron merapat ke pusat inti sehingga jari-jarinya sangat kerdil ($53.5\\text{ pm}$).
- **Pada anion $\\ce{N^3-}$ ($Z = 7$):** Hanya ada $7$ proton yang harus menahan $10$ elektron. Rasio muatan inti terhadap elektron hanya $\\frac{7}{10} = 0.70$. Tarikan inti relatif lemah sementara gaya tolak-menolak antar-elektron (*electron-electron repulsion*) pada kulit $2p$ dominan, menyebabkan awan elektron mengembang maksimal sehingga jari-jarinya paling raksasa ($146\\text{ pm}$).

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Kaidah Emas Deret Isoelektronik:**  
> *"Jumlah elektron sama, proton paling banyak ukurannya paling kerdil; proton paling sedikit ukurannya paling raksasa."*  
> Rumus praktis: Jari-jari ion isoelektronik berbanding terbalik dengan nomor atomnya: $r \\propto \\frac{1}{Z}$.`,
    keyFormulas: [
      { name: 'Kaidah Ukuran Isoelektronik', formula: 'r \\propto \\frac{1}{Z} \\quad (\\text{untuk jumlah elektron sama})' },
    ],
  },
];

// ============================================================================
// TOPIK 103: Ikatan Kimia, Geometri Molekul & Gaya Antarmolekul
// ============================================================================
export const WORKED_EXAMPLES_TOPIC_103: ConceptBlock[] = [
  {
    tag: 'contoh-lewis-muatan-formal-karbonat',
    tags: ['struktur-lewis', 'muatan-formal', 'resonansi', 'kimia-sma'],
    title: 'Contoh Soal 1: Struktur Lewis, Muatan Formal & Resonansi Ion Karbonat (Level: Sedang)',
    summary: 'Penentuan struktur Lewis ion poliatomik, kalkulasi muatan formal tiap atom, perumusan struktur resonansi, dan analisis kesetaraan panjang ikatan.',
    content: `### 📋 Skenario Masalah:
Ion karbonat ($\\ce{CO3^2-}$) merupakan anion penyusun batu kapur dan cangkang biota laut ($Z_{\\ce{C}} = 6, Z_{\\ce{O}} = 8$).
1. Hitung jumlah elektron valensi total pada ion $\\ce{CO3^2-}$!
2. Gambarkan struktur Lewis ion $\\ce{CO3^2-}$ yang mematuhi kaidah oktet, dan hitung muatan formal untuk setiap atom di dalamnya!
3. Tunjukkan ketiga struktur resonansi yang ekuivalen untuk ion karbonat!
4. Berdasarkan data eksperimen difraksi sinar-X, ketiga ikatan $\\ce{C-O}$ pada ion karbonat memiliki panjang yang persis sama ($128\\text{ pm}$). Jelaskan fenomena ini dan hitung orde ikatan rata-ratanya!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Menghitung Elektron Valensi Total
- Atom Karbon (Golongan 14): $1 \\times 4 = 4$ elektron
- Atom Oksigen (Golongan 16): $3 \\times 6 = 18$ elektron
- Muatan ion $-2$ (tambahan dari luar): $2$ elektron  
$$\\text{Total Elektron Valensi} = 4 + 18 + 2 = \\mathbf{24\\text{ elektron}} \\quad (12\\text{ pasang})$$

#### Langkah 2: Struktur Lewis & Muatan Formal
Atom $\\ce{C}$ sebagai atom pusat mengikat 3 atom $\\ce{O}$. Agar karbon mencapai oktet (8 elektron), karbon membentuk **1 ikatan rangkap dua ($\\ce{C=O}$)** dan **2 ikatan tunggal ($\\ce{C-O-}$)**.
- **Kalkulasi Muatan Formal Tiap Atom:**
  $$FC = \\text{EV} - \\text{PEB} - \\frac{1}{2}\\text{PEI}$$
  - **Atom Karbon Pusat:** $FC(\\ce{C}) = 4 - 0 - 4 = \\mathbf{0}$
  - **Atom Oksigen Ikatan Rangkap ($\\ce{=O}$):** $FC(\\ce{O}) = 6 - 4 - 2 = \\mathbf{0}$ (memiliki 2 PEB)
  - **Dua Atom Oksigen Ikatan Tunggal ($\\ce{-O-}$):** $FC(\\ce{O}) = 6 - 6 - 1 = \\mathbf{-1}$ (masing-masing memiliki 3 PEB)
- **Total Muatan Formal:** $0 + 0 + (-1) + (-1) = -2$ (Sesuai dengan muatan ion $\\ce{CO3^2-}$).

#### Langkah 3: Tiga Struktur Resonansi Ekuivalen
Ikatan rangkap dua tidak bersifat tetap pada satu atom oksigen tertentu, melainkan terdelokalisasi ke ketiga atom oksigen secara bergantian:
$$\\ce{[O=C(-O)2]^2- <-> [(-O)-C(=O)(-O)]^2- <-> [(-O)2C=O]^2-}$$

#### Langkah 4: Orde Ikatan Rata-rata & Panjang Ikatan
Karena terjadi resonansi sempurna, ikatan nyata ion karbonat adalah **hibrida resonansi**. Elektron ikatan $\\pi$ tersebar merata ke seluruh tiga ikatan $\\ce{C-O}$.
- Terdapat total $4$ pasang elektron ikatan yang dibagi rata ke $3$ posisi ikatan:
  $$\\text{Orde Ikatan} = \\frac{\\text{Jumlah Pasangan Ikatan}}{\\text{Jumlah Posisi Ikatan}} = \\frac{4}{3} = \\mathbf{1.33}$$
- Akibatnya, ketiga ikatan $\\ce{C-O}$ memiliki panjang ikatan yang identik ($128\\text{ pm}$), berada di antara ikatan tunggal murni $\\ce{C-O}$ ($143\\text{ pm}$) dan ikatan rangkap murni $\\ce{C=O}$ ($120\\text{ pm}$).

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Miskonsepsi Resonansi:**  
> Resonansi BUKAN berarti molekul berganti-ganti bentuk secara bolak-balik seperti bandul jam! Molekul nyata adalah campuran stabil seketika (*hibrida resonansi*). Bukti kuatnya: di laboratorium tidak pernah ditemukan dua panjang ikatan yang berbeda pada ion karbonat; ketiganya selalu terukur identik!`,
    keyFormulas: [
      { name: 'Rumus Muatan Formal', formula: 'FC = EV - PEB - \\frac{1}{2}PEI' },
      { name: 'Orde Ikatan Resonansi', formula: '\\text{Orde Ikatan} = \\frac{\\text{Total Ikatan}}{\\text{Jumlah Posisi}}' },
    ],
  },
  {
    tag: 'contoh-vsepr-geometri-h2o-nh3',
    tags: ['teori-vsepr', 'sudut-ikatan', 'domain-elektron', 'hots-sma'],
    title: 'Contoh Soal 2: Teori VSEPR & Distorsi Sudut Ikatan Hidrida Nonlogam (Level: HOTS)',
    summary: 'Rasionalisasi geometri molekul CH4, NH3, dan H2O menggunakan teori VSEPR, serta penjelasan ilmiah penyimpangan sudut ikatan akibat gaya tolak PEB.',
    content: `### 📋 Skenario Masalah:
Tiga molekul hidrida nonlogam: metana ($\\ce{CH4}$), amonia ($\\ce{NH3}$), dan air ($\\ce{H2O}$) semuanya memiliki atom pusat dengan 4 domain elektron di sekitarnya. Namun, hasil eksperimen spektroskopi menunjukkan sudut ikatan yang berbeda:
- Sudut ikatan $\\ce{H-C-H}$ pada $\\ce{CH4} = 109.5^\\circ$
- Sudut ikatan $\\ce{H-N-H}$ pada $\\ce{NH3} = 107.0^\\circ$
- Sudut ikatan $\\ce{H-O-H}$ pada $\\ce{H2O} = 104.5^\\circ$

---

### 🎯 Pertanyaan:
1. Tentukan jumlah Pasangan Elektron Ikatan (PEI) dan Pasangan Elektron Bebas (PEB) pada atom pusat masing-masing molekul!
2. Tuliskan rumus tipe VSEPR ($AX_n E_m$) dan nama bentuk geometri molekul ketiganya!
3. Jelaskan secara komparatif mengapa sudut ikatan semakin menyempit dari $\\ce{CH4}$ ke $\\ce{NH3}$ dan ke $\\ce{H2O}$!
4. Sebutkan urutan hierarki gaya tolak domain elektron menurut teori VSEPR!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1 & 2: Identifikasi PEI, PEB, Tipe VSEPR & Bentuk Molekul
1. **Metana ($\\ce{CH4}$):**
   - Atom pusat $\\ce{C}$ (4 EV), mengikat 4 atom H $\\implies 4$ PEI, $0$ PEB.
   - Tipe VSEPR: $\\mathbf{AX_4}$
   - Geometri Molekul: **Tetrahedral Simetris** (sudut ideal $109.5^\\circ$).
2. **Amonia ($\\ce{NH3}$):**
   - Atom pusat $\\ce{N}$ (5 EV), mengikat 3 atom H $\\implies 3$ PEI, $1$ PEB.
   - Tipe VSEPR: $\\mathbf{AX_3E_1}$
   - Geometri Molekul: **Piramida Trigonal (*Trigonal Pyramidal*)** (sudut $107.0^\\circ$).
3. **Air ($\\ce{H2O}$):**
   - Atom pusat $\\ce{O}$ (6 EV), mengikat 2 atom H $\\implies 2$ PEI, $2$ PEB.
   - Tipe VSEPR: $\\mathbf{AX_2E_2}$
   - Geometri Molekul: **Bengkok / Bentuk-V (*Bent / V-shaped*)** (sudut $104.5^\\circ$).

#### Langkah 3: Penjelasan Ilmiah Distorsi Sudut Ikatan
Penyimpangan sudut ikatan disebabkan oleh perbedaan volume ruang yang ditempati oleh pasangan elektron:
- **Pasangan Elektron Ikatan (PEI):** Ditarik oleh **dua inti atom** secara bersamaan, sehingga awan elektronnya terkonsentrasi ramping di ruang antar-inti.
- **Pasangan Elektron Bebas (PEB):** Hanya ditarik oleh **satu inti atom** (atom pusat), sehingga awan elektronnya lebih mengembang bebas, memakan ruang lebih besar, dan memberikan gaya tolak elektrostatik yang jauh lebih kuat.
- Pada $\\ce{CH4}$ ($AX_4$): Keempat domain adalah PEI yang saling tolak secara seimbang $\\implies$ sudut tepat $109.5^\\circ$.
- Pada $\\ce{NH3}$ ($AX_3E$): Terdapat $1$ PEB yang mendesak ketiga ikatan $\\ce{N-H}$, memperkecil sudut menjadi $107^\\circ$ (penyusutan $\\approx 2.5^\\circ$).
- Pada $\\ce{H2O}$ ($AX_2E_2$): Terdapat $2$ PEB yang saling tolak sangat kuat (PEB-PEB) dan bersama-sama mendesak kedua ikatan $\\ce{O-H}$ lebih rapat lagi, menyusutkan sudut ikatan hingga menjadi $104.5^\\circ$ (penyusutan total $5.0^\\circ$).

#### Langkah 4: Hierarki Kekuatan Tolakan VSEPR
$$\\mathbf{\\text{Tolakan PEB - PEB} > \\text{Tolakan PEB - PEI} > \\text{Tolakan PEI - PEI}}$$

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Rumus Praktis Penurunan Sudut Ikatan:**  
> Pada kerangka dasar tetrahedral ($4$ domain), **setiap penambahan 1 PEB menyempitkan sudut ikatan sebesar $\\approx 2.0^\\circ - 2.5^\\circ$**.  
> $AX_4$ ($109.5^\\circ$) $\\xrightarrow{-2.5^\\circ}$ $AX_3E$ ($107.0^\\circ$) $\\xrightarrow{-2.5^\\circ}$ $AX_2E_2$ ($104.5^\\circ$).`,
    keyFormulas: [
      { name: 'Hierarki Gaya Tolak VSEPR', formula: '\text{PEB-PEB} > \text{PEB-PEI} > \text{PEI-PEI}' },
    ],
  },
  {
    tag: 'contoh-momen-dipol-kepolaran-molekul',
    tags: ['kepolaran-molekul', 'momen-dipol', 'simetri-molekul', 'kimia-sma'],
    title: 'Contoh Soal 3: Vektor Momen Dipol & Analisis Kepolaran Bentuk Simetris (Level: Sedang)',
    summary: 'Analisis perambatan vektor momen dipol ikatan terhadap bentuk geometri molekul untuk menentukan kepolaran netto senyawa.',
    content: `### 📋 Skenario Masalah:
Perhatikan dua pasang molekul berikut:
- **Pasangan 1:** Karbon dioksida ($\\ce{CO2}$) dan Belerang dioksida ($\\ce{SO2}$)
- **Pasangan 2:** Boron trifluorida ($\\ce{BF3}$) dan Nitrogen trifluorida ($\\ce{NF3}$)

---

### 🎯 Pertanyaan:
1. Tentukan bentuk geometri molekul $\\ce{CO2}$ dan $\\ce{SO2}$, serta jelaskan mengapa $\\ce{CO2}$ bersifat nonpolar ($\\mu = 0$) sedangkan $\\ce{SO2}$ bersifat polar ($\\mu > 0$)!
2. Tentukan bentuk geometri molekul $\\ce{BF3}$ dan $\\ce{NF3}$, serta analisis resultan vektor momen dipolnya!
3. Simpulkan syarat mutlak agar suatu molekul yang memiliki ikatan kovalen polar dapat bersifat nonpolar secara keseluruhan!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Analisis Pasangan 1 ($\ce{CO2}$ vs $\ce{SO2}$)
1. **Molekul $\\ce{CO2}$:**
   - Atom pusat $\\ce{C}$ (4 EV), mengikat 2 atom $\\ce{O}$ dengan 2 ikatan rangkap dua $\\implies 2$ domain ($AX_2$).
   - Bentuk Geometri: **Linear ($180^\\circ$)**.
   - Analisis Vektor: Kedua ikatan $\\ce{C=O}$ bersifat polar karena $\\Delta EN > 0$. Namun karena bentuknya linear lurus, kedua vektor momen dipol memiliki besar yang sama dengan arah yang saling bertolak belakang ($180^\\circ$). Penjumlahan vektornya saling meniadakan:
     $$\\sum \\vec{\\mu} = \\vec{\\mu}_1 + \\vec{\\mu}_2 = 0 \\implies \\mathbf{\\text{NONPOLAR}}$$
2. **Molekul $\\ce{SO2}$:**
   - Atom pusat $\\ce{S}$ (6 EV), mengikat 2 atom $\\ce{O}$ dan memiliki $1$ PEB $\\implies 3$ domain ($AX_2E_1$).
   - Bentuk Geometri: **Bengkok / Bent ($119^\\circ$)**.
   - Analisis Vektor: Karena bentuk molekul bengkok asimetris, kedua vektor momen dipol ikatan $\\ce{S-O}$ tidak berada pada satu garis lurus. Penjumlahan vektor menghasilkan momen dipol neto ke arah bawah:
     $$\\sum \\vec{\\mu} \\ne 0 \\implies \\mathbf{\\text{POLAR}} \\quad (\\mu = 1.63\\text{ D})$$

#### Langkah 2: Analisis Pasangan 2 ($\ce{BF3}$ vs $\ce{NF3}$)
1. **Molekul $\\ce{BF3}$:**
   - Atom pusat $\\ce{B}$ (3 EV), mengikat 3 atom $\\ce{F} \\implies 3$ domain ($AX_3$).
   - Bentuk Geometri: **Segitiga Datar (*Trigonal Planar*, $120^\\circ$)**.
   - Ketiga vektor momen dipol ikatan $\\ce{B-F}$ yang sangat polar mengarah ke tiga sudut segitiga sama sisi simetris. Secara trigonometri vektor: $\\sum \\vec{\\mu} = 0 \\implies \\mathbf{\\text{NONPOLAR}}$.
2. **Molekul $\\ce{NF3}$:**
   - Atom pusat $\\ce{N}$ (5 EV), mengikat 3 atom $\\ce{F}$ dan memiliki $1$ PEB $\\implies 4$ domain ($AX_3E_1$).
   - Bentuk Geometri: **Piramida Trigonal (*Trigonal Pyramidal*)**.
   - Geometri piramida bersifat asimetris; resultan vektor momen dipol tidak saling meniadakan $\\implies \\mathbf{\\text{POLAR}}$.

#### Langkah 3: Syarat Molekul Polar vs Nonpolar
Suatu molekul bersifat **nonpolar** jika memenuhi salah satu kriteria:
1. Tersusun atas atom-atom sejenis tanpa selisih elektronegativitas (seperti $\\ce{O2, N2, Cl2}$).
2. Memiliki ikatan kovalen polar, tetapi memiliki **geometri ruang yang simetris sempurna** (tanpa PEB pada atom pusat, dan semua ligan identik, seperti linear $AX_2$, segitiga datar $AX_3$, tetrahedral $AX_4$).

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Trik Super Cepat Cek Kepolaran di UTBK:**  
> *"Lihat atom pusatnya! Jika TIDAK punya PEB dan semua atom yang diikat sama $\\implies$ PASTI NONPOLAR. Jika punya PEB (seperti $\\ce{H2O, NH3, SO2}$) $\\implies$ HAMPIR SELALU POLAR!"* (Pengecualian simetris hanya $AX_4E_2$ segiempat datar dan $AX_2E_3$ linear).`,
    keyFormulas: [
      { name: 'Momen Dipol Total', formula: '\\vec{\\mu}_{\\text{neto}} = \\sum \\vec{\\mu}_{\\text{ikatan}}' },
    ],
  },
  {
    tag: 'contoh-gaya-antarmolekul-titik-didih',
    tags: ['ikatan-hidrogen', 'gaya-van-der-waals', 'titik-didih', 'hots-sma'],
    title: 'Contoh Soal 4: Grafik Titik Didih Hidrida & Dekonstruksi Ikatan Hidrogen (Level: HOTS)',
    summary: 'Rasionalisasi anomali titik didih H2O, HF, dan NH3 pada kurva periodik hidrida serta komparasi titik didih isomer hidrokarbon.',
    content: `### 📋 Skenario Masalah:
Perhatikan kurva tren titik didih hidrida golongan 14, 15, 16, dan 17 pada tabel periodik berikut:
- **Golongan 14:** $\\ce{CH4} (-161^\\circ\\text{C}) < \\ce{SiH4} (-112^\\circ\\text{C}) < \\ce{GeH4} (-88^\\circ\\text{C}) < \\ce{SnH4} (-52^\\circ\\text{C})$
- **Golongan 16:** $\\ce{H2S} (-60^\\circ\\text{C}) < \\ce{H2Se} (-41^\\circ\\text{C}) < \\ce{H2Te} (-2^\\circ\\text{C})$, namun **$\\ce{H2O}$ melonjak drastis ke $+100^\\circ\\text{C}$**!
- **Golongan 17:** $\\ce{HCl} (-85^\\circ\\text{C}) < \\ce{HBr} (-66^\\circ\\text{C}) < \\ce{HI} (-35^\\circ\\text{C})$, namun **$\\ce{HF}$ melonjak ke $+19.5^\\circ\\text{C}$**!

---

### 🎯 Pertanyaan:
1. Mengapa titik didih hidrida Golongan 14 ($\\ce{CH4}$ s/d $\\ce{SnH4}$) naik secara teratur seiring bertambahnya periode?
2. Jelaskan faktor penyebab terjadinya lonjakan titik didih yang teramat ekstrem pada $\\ce{H2O, HF,}$ dan $\\ce{NH3}$ dibanding hidrida seperiodenya!
3. Mengapa titik didih air ($\\ce{H2O}$, $+100^\\circ\\text{C}$) jauh lebih tinggi daripada asam fluorida ($\\ce{HF}$, $+19.5^\\circ\\text{C}$), padahal ikatan $\\ce{H-F}$ secara individual lebih polar daripada $\\ce{H-O}$?
4. Berikan komparasi titik didih antara $n$-pentana ($36.1^\\circ\\text{C}$) dan neopentana ($9.5^\\circ\\text{C}$) berdasarkan bentuk molekulnya!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Kenaikan Teratur pada Golongan 14
Semua hidrida golongan 14 ($\\ce{CH4, SiH4, GeH4, SnH4}$) berbentuk tetrahedral simetris nonpolar murni ($AX_4$).  
Gaya tarik antarmolekul yang bekerja murni adalah **Gaya Dispersi London**:
- Dari $\\ce{CH4}$ ke $\\ce{SnH4}$, massa molekul ($M_r$) meningkat dan ukuran atom bertambah besar.
- Jumlah elektron semakin banyak sehingga awan elektron makin longgar dan **mudah terpolarisasi (*polarizability* tinggi)**.
- Akibatnya, gaya tarik London semakin kuat dan titik didih naik secara linier teratur.

#### Langkah 2: Penyebab Lonjakan Ekstrem pada $\\ce{H2O, HF, NH3}$
Atom **N, O, dan F** merupakan tiga unsur paling elektronegatif dengan ukuran jari-jari atom yang sangat mungil pada Periode 2:
- Ketika atom hidrogen terikat kovalen langsung pada atom N, O, atau F, terjadi polarisasi muatan yang sangat ekstrem. Atom hidrogen seolah menjadi "proton terbuka tanpa perisai elektron kulit dalam".
- Atom H bermuatan positif parsial pekat ($\\delta^+$) ini ditarik dengan sangat kuat oleh Pasangan Elektron Bebas (PEB) milik atom N, O, atau F dari molekul tetangga, menghasilkan gaya elektrostatik istimewa yang disebut **Ikatan Hidrogen**.
- Ikatan hidrogen ($10 - 40\\text{ kJ/mol}$) jauh lebih kuat dibanding gaya dispersi London atau dipol-dipol biasa ($1 - 5\\text{ kJ/mol}$), sehingga diperlukan energi kalor jauh lebih besar untuk menguapkannya.

#### Langkah 3: Mengapa Titik Didih $\\ce{H2O} > \\ce{HF}$?
Meskipun ikatan tunggal $\\ce{H-F}$ lebih polar dari $\\ce{H-O}$:
- Molekul $\\ce{HF}$ memiliki $1$ atom H dan $3$ PEB pada atom F. Karena jumlah atom H donor hanya satu, molekul $\\ce{HF}$ rata-rata hanya dapat membentuk **2 ikatan hidrogen per molekul** (membentuk rantai polimer linear zig-zag 1 dimensi).
- Molekul $\\ce{H2O}$ memiliki **$2$ atom H donor dan $2$ PEB akseptor** pada atom O (rasio stoikiometri $1:1$ sempurna!). Setiap molekul air dapat membentuk **4 ikatan hidrogen serentak** dalam jejaring kristal 3 dimensi yang sangat kompak.
- Energi kumulatif yang dibutuhkan untuk memutus 4 ikatan hidrogen per molekul pada air jauh melampaui energi untuk memutus 2 ikatan pada $\\ce{HF}$, sehingga titik didih air melonjak ke $+100^\\circ\\text{C}$.

#### Langkah 4: Komparasi Isomer Pentana
$n$-Pentana dan neopentana memiliki rumus molekul sama ($\\ce{C5H12}$, $M_r = 72$):
- **$n$-Pentana:** Rantai lurus panjang silindris, memiliki **luas permukaan kontak antarmolekul yang besar**, sehingga gaya dispersi London lebih kuat dan titik didih lebih tinggi ($36.1^\\circ\\text{C}$).
- **Neopentana:** Berbentuk bola sferis bercabang rapat, luas bidang kontak sangat kecil, sehingga gaya London lemah dan titik didih rendah ($9.5^\\circ\\text{C}$).

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Syarat Mutlak Ikatan Hidrogen:**  
> Ingat singkatan **FON**: Atom Hidrogen wajib terikat langsung pada **Fluorin, Oksigen, atau Nitrogen**.  
> Molekul seperti $\\ce{CH3Cl}$ atau $\\ce{PH3}$ TIDAK memiliki ikatan hidrogen karena H tidak terikat ke F/O/N!`,
    keyFormulas: [
      { name: 'Kapasitas Ikatan Hidrogen Air', formula: '4 \text{ Ikatan Hidrogen per Molekul } \ce{H2O}' },
    ],
  },
  {
    tag: 'contoh-identifikasi-senyawa-sifat-fisik',
    tags: ['ikatan-ion', 'ikatan-kovalen', 'ikatan-logam', 'sifat-fisik-padatan', 'hots-sma'],
    title: 'Contoh Soal 5: Identifikasi Jenis Ikatan Melalui Uji Karakteristik Fisik Padatan (Level: HOTS)',
    summary: 'Mendiagnosis jenis ikatan kimia dan struktur kisi zat berdasarkan data titik leleh, kelarutan dalam air, dan daya hantar listrik.',
    content: `### 📋 Skenario Masalah:
Di laboratorium sekolah dilakukan pengujian sifat fisik terhadap empat sampel zat padat tak dikenal ($P, Q, R, S$). Hasil uji laboratorium dicatat dalam tabel berikut:

| Sampel | Titik Leleh ($^\\circ\\text{C}$) | Kelarutan dalam Air | Daya Hantar Listrik Padatan | Daya Hantar Listrik Lelehan | Daya Hantar Listrik Larutan Air |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **$P$** | $801^\\circ\\text{C}$ | Larut Baik | Tidak Menghantar | Menghantar Baik | Menghantar Baik |
| **$Q$** | $1085^\\circ\\text{C}$ | Tidak Larut | Menghantar Sangat Baik | Menghantar Sangat Baik | Tidak Larut |
| **$R$** | $-95^\\circ\\text{C}$ | Tidak Larut | Tidak Menghantar | Tidak Menghantar | Tidak Larut |
| **$S$** | $>1700^\\circ\\text{C}$ | Tidak Larut | Tidak Menghantar | Tidak Menghantar | Tidak Larut |

---

### 🎯 Pertanyaan:
1. Berdasarkan data tabel di atas, tentukan jenis ikatan kimia dan tipe struktur kisi dari masing-masing sampel ($P, Q, R, S$)!
2. Jelaskan dengan model partikel mengapa sampel $P$ tidak menghantarkan arus listrik saat berwujud padat, namun menjadi konduktor yang baik saat dilelehkan atau dilarutkan dalam air!
3. Jelaskan mengapa sampel $Q$ dapat ditempa dan dibengkokkan tanpa pecah (*malleable*), sedangkan sampel $P$ rapuh dan pecah berkeping-keping saat dipukul!
4. Berikan contoh zat kimia riil dalam kehidupan sehari-hari untuk masing-masing sampel $P, Q, R,$ dan $S$!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Klasifikasi Jenis Ikatan & Tipe Kisi
1. **Sampel $P$ (Senyawa Ionik):**
   - Karakteristik: Titik leleh tinggi ($801^\\circ\\text{C}$), larut air, padatan isolator tetapi lelehan dan larutannya konduktor listrik. Ini adalah ciri khas **Senyawa Ionik Kristal**.
2. **Sampel $Q$ (Logam):**
   - Karakteristik: Titik leleh tinggi ($1085^\\circ\\text{C}$), padatan dan lelehan merupakan konduktor listrik sangat baik. Ini adalah ciri khas **Logam (Ikatan Logam)**.
3. **Sampel $R$ (Kovalen Molekuler Sederhana / Nonpolar):**
   - Karakteristik: Titik leleh sangat rendah ($-95^\\circ\\text{C}$, berwujud cair pada suhu kamar), tidak larut air, tidak menghantarkan listrik dalam fasa apa pun. Ciri khas **Senyawa Kovalen Molekuler Sederhana**.
4. **Sampel $S$ (Kovalen Jaringan Raksasa / *Covalent Network*):**
   - Karakteristik: Titik leleh sangat tinggi ($>1700^\\circ\\text{C}$), sangat keras, tidak larut air, dan tidak menghantar listrik. Ciri khas **Kovalen Jaringan Raksasa**.

#### Langkah 2: Mekanisme Konduktivitas Sampel $P$ (Ionik)
- Konduktivitas listrik membutuhkan partikel bermuatan yang **bebas bergerak (*mobile charge carriers*)**.
- Dalam fasa **padat**, ion-ion $\\ce{Na+}$ dan $\\ce{Cl-}$ terkunci kaku pada posisi kisi kristal tiga dimensi oleh gaya elektrostatik kuat, sehingga tidak dapat mengalir membawa muatan listrik (isolator).
- Saat **dilelehkan** oleh panas atau **dilarutkan** dalam air, kisi kristal runtuh. Ion-ion positif dan negatif terbebas dari ikatannya dan leluasa bergerak mengalir menuju anoda dan katoda saat dialiri arus listrik (konduktor).

#### Langkah 3: Malleable (Logam $Q$) vs Brittle (Ionik $P$)
- **Pada Logam ($Q$):** Ikatan logam tersusun atas kation-kation dalam "lautan elektron valensi terdelokalisasi". Ketika logam dipukul palu, lapisan kation bergeser, namun lautan elektron langsung menyesuaikan diri dan terus merekatkan kation-kation tersebut tanpa ada gaya tolak. Logam pipih dan dapat dibentuk (*malleable*).
- **Pada Kristal Ionik ($P$):** Kation dan anion tersusun selang-seling kaku. Ketika dipukul, lapisan ion bergeser satu tingkat, menyebabkan ion bermuatan sejenis berada saling berhadapan ($\\ce{+ \\leftrightarrow +}$ dan $\\ce{- \\leftrightarrow -}$). Gaya tolak elektrostatik yang dahsyat seketika membelah dan menghancurkan kristal (*brittle / rapuh*).

#### Langkah 4: Contoh Senyawa Riil
- Sampel $P$: Garam dapur ($\\ce{NaCl}$, titik leleh tepat $801^\\circ\\text{C}$)
- Sampel $Q$: Logam Tembaga ($\\ce{Cu}$, titik leleh tepat $1085^\\circ\\text{C}$)
- Sampel $R$: Toluena ($\\ce{C7H8}$) atau heksana
- Sampel $S$: Pasir Silika ($\\ce{SiO2}$, kuarsa) atau Intan (karbon)

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Tabel Kunci Identifikasi Zat pada Soal Ujian:**  
> - **Padatan menghantar listrik $\\implies$ PASTI LOGAM (atau grafit).**  
> - **Padatan isolator, tetapi lelehan & larutan menghantar $\\implies$ PASTI SENYAWA IONIK.**  
> - **Larutan menghantar, tetapi lelehan TIDAK menghantar $\\implies$ SENYAWA KOVALEN POLAR (seperti $\\ce{HCl(aq)}$).**  
> - **Tidak pernah menghantar sama sekali $\\implies$ KOVALEN NONPOLAR atau KOVALEN RAKSASA.**`,
    keyFormulas: [
      { name: 'Kriteria Konduktivitas', formula: '\text{Konduktivitas} \iff \text{Partikel Bermuatan Bebas Bergerak}' },
    ],
  },
];

// ============================================================================
// TOPIK 104: Tata Nama Senyawa & Persamaan Reaksi Kimia
// ============================================================================
export const WORKED_EXAMPLES_TOPIC_104: ConceptBlock[] = [
  {
    tag: 'contoh-tatanama-komprehensif',
    tags: ['tata-nama-senyawa', 'tata-nama-biner', 'oksianion', 'senyawa-hidrat', 'kimia-sma'],
    title: 'Contoh Soal 1: Tata Nama Komprehensif Senyawa Biner, Poliatomik & Asam-Basa (Level: Sedang)',
    summary: 'Menerapkan aturan IUPAC baku dalam menamai senyawa ionik logam polivalen, kovalen nonlogam, asam oksianion, serta kristal hidrat.',
    content: `### 📋 Skenario Masalah:
Berikan nama IUPAC resmi dan rumus kimia yang benar untuk setiap zat kimia berikut berdasarkan kaidah nomenklatur anorganik:
1. Tuliskan nama IUPAC untuk senyawa ionik: $\\ce{Fe2O3}$ dan $\\ce{Cu2O}$!
2. Tuliskan nama IUPAC untuk senyawa kovalen biner: $\\ce{P2O5}$ dan $\\ce{N2O4}$!
3. Tuliskan nama IUPAC untuk senyawa asam dan basa: $\\ce{H2SO3}$, $\\ce{H3PO4}$, dan $\\ce{Ca(OH)2}$!
4. Tuliskan rumus kimia dari senyawa kristal: **Besi(II) sulfat heptahidrat** dan **Tembaga(II) sulfat pentahidrat**!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Tata Nama Senyawa Biner Ionik Logam Polivalen
Logam besi ($\\ce{Fe}$) dan tembaga ($\\ce{Cu}$) adalah logam transisi dengan lebih dari satu jenis bilangan oksidasi. Tingkat oksidasi kation dinyatakan dengan angka Romawi (sistem Stock).
- **$\\ce{Fe2O3}$:** Biloks oksigen $= -2 \\implies 2(\\text{Fe}) + 3(-2) = 0 \\implies 2\\text{Fe} = +6 \\implies \\text{Fe} = +3$.  
  Nama IUPAC: **Besi(III) oksida** *(bukan besi trioksida!)*.
- **$\\ce{Cu2O}$:** Biloks oksigen $= -2 \\implies 2(\\text{Cu}) + (-2) = 0 \\implies 2\\text{Cu} = +2 \\implies \\text{Cu} = +1$.  
  Nama IUPAC: **Tembaga(I) oksida** *(bukan tembaga oksida!)*.

#### Langkah 2: Tata Nama Senyawa Kovalen Nonlogam-Nonlogam
Senyawa antar-nonlogam menggunakan awalan bilangan Yunani (*mono, di, tri, tetra, penta, heksa, hepta, okta, nona, deka*).
- **$\\ce{P2O5}$:** $2$ atom fosfor dan $5$ atom oksigen $\\implies$ **Difosfor pentaoksida** (atau difosforus pentoksida).
- **$\\ce{N2O4}$:** $2$ atom nitrogen dan $4$ atom oksigen $\\implies$ **Dinitrogen tetraoksida**.

#### Langkah 3: Tata Nama Senyawa Asam & Basa
- **$\\ce{H2SO3}$:** Anionnya adalah $\\ce{SO3^2-}$ (sulfit, biloks S $= +4$) $\\implies$ **Asam sulfit** *(akhiran -it untuk biloks lebih rendah, berbeda dengan $\\ce{H2SO4}$ asam sulfat)*.
- **$\\ce{H3PO4}$:** Anionnya adalah $\\ce{PO4^3-}$ (fosfat) $\\implies$ **Asam fosfat**.
- **$\\ce{Ca(OH)2}$:** Kation kalsium $\\ce{Ca^2+}$ (golongan 2, biloks tunggal $+2$) dan anion hidroksida $\\ce{OH-}$ $\\implies$ **Kalsium hidroksida** *(tanpa angka Romawi dan tanpa awalan di-)*.

#### Langkah 4: Formulasi Rumus Senyawa Hidrat
- **Besi(II) sulfat heptahidrat:**  
  Kation $\\ce{Fe^2+}$ dan anion $\\ce{SO4^2-} \\implies \\ce{FeSO4}$. Tujuh molekul air kristal $\\implies \\mathbf{\\ce{FeSO4.7H2O}}$.
- **Tembaga(II) sulfat pentahidrat:**  
  Kation $\\ce{Cu^2+}$ dan anion $\\ce{SO4^2-} \\implies \\ce{CuSO4}$. Lima molekul air kristal $\\implies \\mathbf{\\ce{CuSO4.5H2O}}$.

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Aturan Emas Awalan Yunani:**  
> Dilarang keras menggunakan awalan Yunani (*mono, di, tri*) untuk senyawa ionik logam!  
> - $\\ce{FeCl3}$ = Besi(III) klorida (BENAR), BUKAN Besi triklorida (SALAH!).  
> - $\\ce{Al2O3}$ = Aluminium oksida (BENAR), BUKAN Dialuminium trioksida (SALAH!).`,
    keyFormulas: [
      { name: 'Rumus Kimia Hidrat', formula: '\ce{Garam} \cdot n\ce{H2O}' },
    ],
  },
  {
    tag: 'contoh-tatanama-hidrokarbon-isomer',
    tags: ['tata-nama-alkana', 'rantai-utama', 'alkil-cabang', 'isomer-sma'],
    title: 'Contoh Soal 2: Tata Nama IUPAC Alkana Bercabang & Penentuan Isomer (Level: Sedang)',
    summary: 'Algoritma pemilihan rantai induk terpanjang, penomoran cabang terendah, penulisan abjad cabang, serta komparasi sifat fisik isomer.',
    content: `### 📋 Skenario Masalah:
Bahan bakar bensin berstandar oktan tinggi menggunakan senyawa hidrokarbon "isooktana" sebagai standar nilai oktan 100. Rumus struktur senyawa isooktana adalah:
$$\\ce{CH3-C(CH3)2-CH2-CH(CH3)-CH3}$$

---

### 🎯 Pertanyaan:
1. Tentukan rantai karbon utama (induk) terpanjang pada struktur isooktana di atas!
2. Berikan nomor pada rantai induk dan sebutkan posisi serta nama seluruh gugus cabang alkil yang terikat!
3. Tuliskan nama resmi senyawa tersebut berdasarkan tata nama IUPAC!
4. Jelaskan mengapa isooktana memiliki titik didih ($99^\\circ\\text{C}$) yang lebih rendah dibanding isomernya, $n$-oktana ($125.7^\\circ\\text{C}$), padahal keduanya memiliki rumus molekul yang persis sama ($\\ce{C8H18}$)!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Menentukan Rantai Karbon Induk Terpanjang
Bila kita rentangkan rantai karbon terpanjang yang bersambungan lurus:
$$\\ce{\\overset{1}{C}H3 - \\overset{2}{C}(CH3)2 - \\overset{3}{C}H2 - \\overset{4}{C}H(CH3) - \\overset{5}{C}H3}$$
Rantai induk terpanjang terdiri atas **5 atom karbon** (nama induk: **pentana**).

#### Langkah 2: Penomoran Rantai Induk & Identifikasi Cabang
Penomoran rantai induk dimulai dari ujung yang memberikan nomor terendah bagi gugus cabang:
- Jika diberi nomor dari **kiri**: cabang berada di atom nomor $2, 2,$ dan $4$ (himpunan nomor: **$2, 2, 4$**).
- Jika diberi nomor dari **kanan**: cabang berada di nomor $2, 4,$ dan $4$ (himpunan nomor: **$2, 4, 4$**).
- Karena $2, 2, 4 < 2, 4, 4$, penomoran wajib dimulai dari **ujung kiri**:
  - Pada atom C nomor 2 terdapat dua gugus metil ($-CH_3$).
  - Pada atom C nomor 4 terdapat satu gugus metil ($-CH_3$).
  - Total cabang: 3 buah gugus metil $\\implies$ awalan **trimetil**.

#### Langkah 3: Penulisan Nama IUPAC Baku
Gabungkan nomor cabang, awalan cabang, dan nama rantai induk:
$$\\mathbf{\\text{2,2,4-trimetilpentana}}$$

#### Langkah 4: Rasionalisasi Perbedaan Titik Didih Isomer
Kedua senyawa berisomer molekul $\\ce{C8H18}$ ($M_r = 114\\text{ g/mol}$) dan bersifat nonpolar (gaya antarmolekul murni Gaya Dispersi London):
- **$n$-Oktana:** Memiliki rantai lurus terbuka tanpa cabang. Bentuk molekul yang memanjang menghasilkan **luas permukaan kontak antarmolekul yang sangat besar**, sehingga gaya tarik London antarmolekul kuat dan titik didihnya tinggi ($125.7^\\circ\\text{C}$).
- **2,2,4-Trimetilpentana (Isooktana):** Memiliki 3 cabang yang membuat bentuk molekulnya menjadi **hampir bulat (sferis) dan kompak**. Akibatnya, luas permukaan bidang kontak antarmolekul mengecil drastis, gaya tarik London melemah, dan titik didihnya turun menjadi $99^\\circ\\text{C}$.

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Hierarki Prioritas Tata Nama Alkana:**  
> 1. Rantai terpanjang.  
> 2. Penomoran dari ujung yang terdekat dengan cabang pertama.  
> 3. Jika jarak dari kedua ujung sama, pilih ujung yang memiliki cabang lebih banyak.  
> 4. Urutan penulisan cabang mengikuti **abjad huruf awal** (etil ditulis sebelum metil; awalan di-, tri-, tetra- tidak dihitung dalam urutan abjad!).`,
    keyFormulas: [
      { name: 'Rumus Umum Alkana', formula: '\ce{C_n H_{2n+2}}' },
    ],
  },
  {
    tag: 'contoh-penyetaraan-reaksi-aljabar',
    tags: ['penyetaraan-reaksi', 'metode-aljabar', 'pupuk-superfosfat', 'hots-sma'],
    title: 'Contoh Soal 3: Penyetaraan Reaksi Kimia Kompleks Metode Aljabar Matematis (Level: HOTS)',
    summary: 'Aplikasi sistem persamaan aljabar linear untuk menyetarakan reaksi kimia industri pembuatan pupuk superfosfat tunggal.',
    content: `### 📋 Skenario Masalah:
Pupuk superfosfat tunggal dibuat melalui reaksi antara batuan fosfat kalsium fosfat dengan larutan asam sulfat encer di industri pupuk:
$$\\ce{a Ca3(PO4)2 + b H2SO4 -> c Ca(H2PO4)2 + d CaSO4}$$
Setarakan persamaan reaksi kimia tersebut menggunakan **metode aljabar matematis** hingga diperoleh koefisien bilangan bulat terkecil!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Menetapkan Koefisien Salah Satu Senyawa $= 1$
Pilih senyawa dengan rumus kimia paling kompleks untuk diberi koefisien $1$.  
Tetapkan nilai **$a = 1$**:
$$\\ce{1 Ca3(PO4)2 + b H2SO4 -> c Ca(H2PO4)2 + d CaSO4}$$

#### Langkah 2: Menyusun Sistem Persamaan Neraca Atom
Hitung kesetaraan jumlah atom di ruas kiri dan ruas kanan untuk setiap unsur:
1. **Atom Kalsium ($\ce{Ca}$):**
   $$3(a) = c + d \\implies 3(1) = c + d \\implies \\mathbf{c + d = 3} \quad \text{--- (Persamaan 1)}$$
2. **Atom Fosfor ($\ce{P}$):**
   $$2(a) = 2(c) \\implies 2(1) = 2c \\implies \\mathbf{c = 1}$$
3. **Atom Hidrogen ($\ce{H}$):**
   $$2(b) = 4(c) \\implies 2b = 4(1) \\implies 2b = 4 \\implies \\mathbf{b = 2}$$
4. **Substitusi Nilai $c$ ke Persamaan 1:**
   $$c + d = 3 \\implies 1 + d = 3 \\implies \\mathbf{d = 2}$$

#### Langkah 3: Verifikasi Neraca Atom Oksigen ($\ce{O}$)
Periksa kesetaraan atom oksigen di kedua ruas dengan nilai $a=1, b=2, c=1, d=2$:
- **Ruas Kiri:** $(1 \\times 8) + (2 \\times 4) = 8 + 8 = \\mathbf{16\\text{ atom O}}$
- **Ruas Kanan:** $(1 \\times 8) + (2 \\times 4) = 8 + 8 = \\mathbf{16\\text{ atom O}}$  
*(Kedua ruas setara sempurna!)*

#### Langkah 4: Formulasi Persamaan Reaksi Setara
Koefisien bulat terkecil yang diperoleh adalah:  
$a = 1$, $b = 2$, $c = 1$, $d = 2$.
$$\\mathbf{\\ce{Ca3(PO4)2(s) + 2 H2SO4(aq) -> Ca(H2PO4)2(s) + 2 CaSO4(s)}}$$

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Trik Aljabar Grup Poliatomik:**  
> Jika gugus anion poliatomik (seperti ion sulfat $\\ce{SO4}$ dan fosfat $\\ce{PO4}$) tidak pecah/terurai selama reaksi, Anda dapat memperlakukan gugus tersebut sebagai satu variabel entitas utuh!  
> Neraca $\\ce{SO4}$: $b = d \\implies$ karena $b = 2$, maka $d = 2$ langsung selesai dalam 3 detik!`,
    keyFormulas: [
      { name: 'Neraca Atom Aljabar', formula: '\sum \text{Atom Kiri} = \sum \text{Atom Kanan}' },
    ],
  },
  {
    tag: 'contoh-persamaan-ionik-bersih-presipitasi',
    tags: ['persamaan-ionik-bersih', 'ion-penonton', 'reaksi-pengendapan', 'kimia-sma'],
    title: 'Contoh Soal 4: Formulasi Reaksi Ionik Lengkap & Bersih pada Pengendapan Barium Sulfat (Level: Sedang)',
    summary: 'Menuliskan persamaan molekuler, menguraikan elektrolit kuat terlarut menjadi ion, mengidentifikasi ion penonton, dan menyusun persamaan ionik bersih.',
    content: `### 📋 Skenario Masalah:
Di laboratorium analisis kimia lingkungan, limbah cair yang diduga mengandung ion sulfat diuji dengan menambahkan larutan barium klorida ($\\ce{BaCl2(aq)}$). Seketika terbentuk endapan putih halus barium sulfat ($\\ce{BaSO4(s)}$) yang tidak larut dalam air.

---

### 🎯 Pertanyaan:
1. Tuliskan persamaan reaksi molekuler setara lengkap beserta simbol wujud fasanya jika larutan uji yang digunakan adalah natrium sulfat ($\\ce{Na2SO4(aq)}$)!
2. Tuliskan persamaan reaksi ionik lengkap (*complete ionic equation*) yang menunjukkan spesi ion bebas di dalam larutan!
3. Identifikasi spesi manakah yang bertindak sebagai **ion penonton (*spectator ions*)** dan jelaskan alasannya!
4. Tuliskan persamaan reaksi ionik bersih (*net ionic equation*) dari reaksi pengendapan tersebut!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Persamaan Reaksi Molekuler Setara
$$\\ce{BaCl2(aq) + Na2SO4(aq) -> BaSO4(s) + 2 NaCl(aq)}$$

#### Langkah 2: Persamaan Reaksi Ionik Lengkap
Semua senyawa elektrolit kuat terlarut $(aq)$ terdisosiasi sempurna menjadi ion-ion bebas dalam air. Endapan padatan $(s)$ tidak terurai dan tetap ditulis utuh:
$$\\ce{Ba^2+(aq) + 2 Cl-(aq) + 2 Na+(aq) + SO4^2-(aq) -> BaSO4(s) + 2 Na+(aq) + 2 Cl-(aq)}$$

#### Langkah 3: Identifikasi Ion Penonton (*Spectator Ions*)
Perhatikan ion-ion yang muncul dalam bentuk identik di kedua ruas persamaan:
- Ion Natrium ($\\ce{Na+(aq)}$): hadir $2\\text{ mol}$ di kiri dan $2\\text{ mol}$ di kanan.
- Ion Klorida ($\\ce{Cl-(aq)}$): hadir $2\\text{ mol}$ di kiri dan $2\\text{ mol}$ di kanan.  
Kedua ion ini **tidak mengalami perubahan kimia maupun perubahan fasa**. Keduanya hanya melayang-layang di dalam larutan air sebelum dan sesudah reaksi terjadi. Maka, **ion penonton adalah $\\ce{Na+(aq)}$ dan $\\ce{Cl-(aq)}$**.

#### Langkah 4: Persamaan Reaksi Ionik Bersih
Coret/eliminasi seluruh ion penonton dari kedua ruas:
$$\\mathbf{\\ce{Ba^2+(aq) + SO4^2-(aq) -> BaSO4(s)}}$$

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Kaidah Penulisan Fasa Reaksi Ionik:**  
> - HANYA spesi berlabel **$(aq)$** dari elektrolit kuat (asam kuat, basa kuat, dan garam mudah larut) yang boleh dipecah menjadi ion-ion bebas.  
> - Spesi berfasa **padat $(s)$**, **cairan murni $(l)$** (seperti $\\ce{H2O}$), dan **gas $(g)$** (seperti $\\ce{CO2, H2}$) **TIDAK BOLEH DIURAIKAN MENJADI ION**, wajib ditulis utuh sebagai molekul netral!`,
    keyFormulas: [
      { name: 'Persamaan Ionik Bersih Presipitasi', formula: '\ce{Ba^2+(aq) + SO4^2-(aq) -> BaSO4(s)}' },
    ],
  },
  {
    tag: 'contoh-hukum-lavoisier-pembakaran-elpiji',
    tags: ['hukum-lavoisier', 'pembakaran-hidrokarbon', 'neraca-massa', 'hots-sma'],
    title: 'Contoh Soal 5: Pembakaran Gas Elpiji & Pembuktian Hukum Kekekalan Massa (Level: HOTS)',
    summary: 'Kalkulasi stoikiometri reaksi pembakaran sempurna campuran hidrokarbon elpiji dan pembuktian neraca massa kekekalan Lavoisier.',
    content: `### 📋 Skenario Masalah:
Sebuah tabung gas Elpiji berisi campuran $4.40\\text{ kg}$ gas propana ($\\ce{C3H8}$) dan $5.80\\text{ kg}$ gas butana ($\\ce{C4H10}$). Seluruh isi tabung dibakar sempurna di dalam ruang tertutup berventilasi terkontrol dengan gas oksigen berlebih.  
*(Massa atom standar: $\\ce{C} = 12.0$, $\\ce{H} = 1.0$, $\\ce{O} = 16.0\\text{ g/mol}$)*.

---

### 🎯 Pertanyaan:
1. Tuliskan persamaan reaksi pembakaran sempurna setara untuk propana dan butana secara terpisah!
2. Hitung massa total gas oksigen ($\\ce{O2}$) yang diperlukan untuk membakar habis seluruh campuran bahan bakar tersebut!
3. Hitung massa total gas karbon dioksida ($\\ce{CO2}$) dan uap air ($\\ce{H2O}$) yang terbentuk!
4. Buktikan secara kuantitatif bahwa Hukum Kekekalan Massa Lavoisier berlaku sempurna pada proses ini!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Persamaan Reaksi Pembakaran Setara
- **Propana:** $\\ce{C3H8(g) + 5 O2(g) -> 3 CO2(g) + 4 H2O(g)}$
- **Butana:** $\\ce{2 C4H10(g) + 13 O2(g) -> 8 CO2(g) + 10 H2O(g)}$

#### Langkah 2: Menghitung Mol Pereaksi
- $M_r(\\ce{C3H8}) = (3 \\times 12) + (8 \\times 1) = 44.0\\text{ g/mol}$  
  $$n_{\\ce{C3H8}} = \\frac{4400\\text{ g}}{44.0\\text{ g/mol}} = \\mathbf{100.0\\text{ mol}}$$
- $M_r(\\ce{C4H10}) = (4 \\times 12) + (10 \\times 1) = 58.0\\text{ g/mol}$  
  $$n_{\\ce{C4H10}} = \\frac{5800\\text{ g}}{58.0\\text{ g/mol}} = \\mathbf{100.0\\text{ mol}}$$

#### Langkah 3: Menghitung Kebutuhan Gas Oksigen ($\ce{O2}$)
- Dari pembakaran propana: $n_{\\ce{O2}} = 5 \\times 100.0\\text{ mol} = 500.0\\text{ mol}$
- Dari pembakaran butana: $n_{\\ce{O2}} = \\frac{13}{2} \\times 100.0\\text{ mol} = 650.0\\text{ mol}$
- Total mol $\\ce{O2} = 500.0 + 650.0 = 1150.0\\text{ mol}$ ($M_r\,\\ce{O2} = 32.0\\text{ g/mol}$).
- **Massa total $\\ce{O2}$:**
  $$m_{\\ce{O2}} = 1150.0\\text{ mol} \\times 32.0\\text{ g/mol} = 36800\\text{ gram} = \\mathbf{36.80\\text{ kg}}$$

#### Langkah 4: Menghitung Produk ($\\ce{CO2}$ dan $\\ce{H2O}$)
1. **Gas $\\ce{CO2}$ ($M_r = 44.0\\text{ g/mol}$):**
   - Dari propana: $n = 3 \\times 100.0 = 300.0\\text{ mol}$
   - Dari butana: $n = 4 \\times 100.0 = 400.0\\text{ mol}$
   - Total mol $\\ce{CO2} = 700.0\\text{ mol}$
   - **Massa $\\ce{CO2}$:** $700.0\\text{ mol} \\times 44.0\\text{ g/mol} = 30800\\text{ gram} = \\mathbf{30.80\\text{ kg}}$
2. **Uap Air $\\ce{H2O}$ ($M_r = 18.0\\text{ g/mol}$):**
   - Dari propana: $n = 4 \\times 100.0 = 400.0\\text{ mol}$
   - Dari butana: $n = 5 \\times 100.0 = 500.0\\text{ mol}$
   - Total mol $\\ce{H2O} = 900.0\\text{ mol}$
   - **Massa $\\ce{H2O}$:** $900.0\\text{ mol} \\times 18.0\\text{ g/mol} = 16200\\text{ gram} = \\mathbf{16.20\\text{ kg}}$

#### Langkah 5: Pembuktian Neraca Massa Lavoisier
- **Massa Total Pereaksi (Reaktan):**
  $$m_{\\text{reaktan}} = m_{\\text{elpiji}} + m_{\\ce{O2}} = (4.40 + 5.80)\\text{ kg} + 36.80\\text{ kg} = 10.20 + 36.80 = \\mathbf{47.00\\text{ kg}}$$
- **Massa Total Hasil Reaksi (Produk):**
  $$m_{\\text{produk}} = m_{\\ce{CO2}} + m_{\\ce{H2O}} = 30.80\\text{ kg} + 16.20\\text{ kg} = \\mathbf{47.00\\text{ kg}}$$
- Karena $m_{\\text{reaktan}} = m_{\\text{produk}} = \\mathbf{47.00\\text{ kg}}$, **Hukum Kekekalan Massa Lavoisier terbukti berlaku sahih 100%**.

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Mengapa Lilin Terbakar Massanya Tampak Berkurang?**  
> Pada sistem terbuka, gas $\\ce{CO2}$ dan $\\ce{H2O(g)}$ yang bermassa $47\\text{ kg}$ akan lepas melayang ke atmosfer, sehingga orang awam salah mengira massanya hilang. Hukum Lavoisier selalu berlaku mutlak jika seluruh gas hasil pembakaran ditampung dan ditimbang dalam sistem tertutup!`,
    keyFormulas: [
      { name: 'Hukum Kekekalan Massa Lavoisier', formula: '\sum m_{\text{reaktan}} = \sum m_{\text{produk}}' },
    ],
  },
];

// ============================================================================
// TOPIK 105: Hukum Dasar Kimia & Konsep Mol (Stoikiometri Dasar)
// ============================================================================
export const WORKED_EXAMPLES_TOPIC_105: ConceptBlock[] = [
  {
    tag: 'contoh-hukum-dalton-oksida-belerang',
    tags: ['hukum-dalton', 'hukum-proust', 'perbandingan-berganda', 'kimia-sma'],
    title: 'Contoh Soal 1: Pembuktian Hukum Dalton & Proust pada Oksida Belerang (Level: Sedang)',
    summary: 'Membuktikan Hukum Perbandingan Berganda Dalton melalui analisis persentase massa dua jenis senyawa oksida belerang.',
    content: `### 📋 Skenario & Data Eksperimen:
Belerang dan oksigen dapat bereaksi membentuk dua jenis gas oksida: Belerang dioksida (Senyawa I) dan Belerang trioksida (Senyawa II). Data analisis komposisi massa dari kedua gas tersebut tercatat sebagai berikut:
- **Senyawa I:** Mengandung $50.0\\%$ massa belerang dan $50.0\\%$ massa oksigen.
- **Senyawa II:** Mengandung $40.0\\%$ massa belerang dan $60.0\\%$ massa oksigen.

---

### 🎯 Pertanyaan:
1. Tetapkan massa belerang bernilai tetap ($1.00\\text{ gram}$) pada kedua senyawa, lalu hitung massa oksigen yang bergabung pada Senyawa I dan Senyawa II!
2. Hitung perbandingan massa oksigen pada Senyawa I terhadap Senyawa II untuk massa belerang yang tetap tersebut!
3. Apakah hasil perbandingan tersebut membuktikan **Hukum Perbandingan Berganda Dalton**? Jelaskan alasannya!
4. Jelaskan perbedaan mendasar antara **Hukum Proust** dan **Hukum Dalton**!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Normalisasi Massa Belerang Menjadi Tetap ($1.00\text{ g}$)
- **Pada Senyawa I:**
  $$\\text{Rasio } \\frac{m_{\\ce{O}}}{m_{\\ce{S}}} = \\frac{50.0\\text{ g}}{50.0\\text{ g}} = \\mathbf{1.00\\text{ g O / g S}}$$
- **Pada Senyawa II:**
  $$\\text{Rasio } \\frac{m_{\\ce{O}}}{m_{\\ce{S}}} = \\frac{60.0\\text{ g}}{40.0\\text{ g}} = \\mathbf{1.50\\text{ g O / g S}}$$

#### Langkah 2: Perbandingan Massa Oksigen
Bandingkan massa oksigen yang bereaksi dengan $1.00\\text{ g}$ belerang:
$$\\text{Massa O (Senyawa I)} : \\text{Massa O (Senyawa II)} = 1.00 : 1.50$$
Kalikan kedua angka dengan $2$ agar menjadi bilangan bulat terkecil:
$$\\mathbf{1.00 : 1.50 = 2 : 3}$$

#### Langkah 3: Evaluasi Hukum Dalton
Perbandingan massa oksigen adalah **$2 : 3$**, yang merupakan **bilangan bulat dan sederhana**.  
Fakta ini membuktikan kebenaran Hukum Perbandingan Berganda Dalton: *"Jika dua unsur dapat membentuk lebih dari satu senyawa, maka perbandingan massa unsur yang satu yang bergabung dengan massa unsur lain yang bernilai tetap merupakan bilangan bulat dan sederhana."* (Sesuai rumus molekulnya: $\\ce{SO2}$ dan $\\ce{SO3}$, rasio atom $\\ce{O} = 2 : 3$).

#### Langkah 4: Beda Hukum Proust vs Hukum Dalton
- **Hukum Proust (Perbandingan Tetap):** Berlaku untuk **SATU jenis senyawa tertentu** (misal: dalam air $\\ce{H2O}$ di mana pun di dunia, perbandingan massa H : O selalu tetap $1 : 8$).
- **Hukum Dalton (Perbandingan Berganda):** Berlaku saat dua unsur membentuk **DUA ATAU LEBIH senyawa berbeda** (misal: $\\ce{SO2}$ dan $\\ce{SO3}$, atau $\\ce{CO}$ dan $\\ce{CO2}$).

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Trik Super Cepat Ujian Hukum Dalton:**  
> Untuk membuktikan hukum Dalton pada soal tabel, cukup bagi persentase massa unsur kedua dengan persentase massa unsur pertama:
> $\\frac{50/50}{60/40} = \\frac{1.0}{1.5} = \\frac{2}{3} \\implies 2 : 3$`,
    keyFormulas: [
      { name: 'Hukum Dalton', formula: '\\frac{m_{\\ce{O(I)}}}{m_{\\ce{O(II)}}} = \\text{Bilangan Bulat Sederhana}' },
    ],
  },
  {
    tag: 'contoh-analisis-pembakaran-dan-rumus-molekul',
    tags: ['rumus-empiris', 'rumus-molekul', 'analisis-pembakaran', 'glukosa', 'hots-sma'],
    title: 'Contoh Soal 2: Penentuan Rumus Empiris & Rumus Molekul Melalui Analisis Pembakaran (Level: HOTS)',
    summary: 'Menentukan rumus empiris dan rumus molekul senyawa organik berdasarkan massa CO2 dan H2O hasil pembakaran serta massa molar Mr.',
    content: `### 📋 Skenario & Data Eksperimen:
Sebanyak $4.50\\text{ gram}$ sampel senyawa organik tak dikenal yang tersusun atas unsur Karbon ($\ce{C}$), Hidrogen ($\ce{H}$), dan Oksigen ($\ce{O}$) dibakar sempurna di dalam tungku pembakaran. Gas hasil pembakaran dialirkan ke dalam zat penyerap menghasilkan:
- $6.60\\text{ gram}$ gas karbon dioksida ($\\ce{CO2}$)
- $2.70\\text{ gram}$ uap air ($\\ce{H2O}$)
Dari pengujian spektrometri massa, diketahui massa molekul relatif senyawa tersebut adalah $M_r = 180.0\\text{ g/mol}$.  
*(Data $A_r$: $\\ce{C} = 12.0$, $\\ce{H} = 1.0$, $\\ce{O} = 16.0\\text{ g/mol}$)*.

---

### 🎯 Pertanyaan:
1. Hitung massa unsur Karbon dan Hidrogen di dalam sampel senyawa tersebut!
2. Hitung massa unsur Oksigen di dalam sampel!
3. Tentukan perbandingan mol paling sederhana dan rumuskan **Rumus Empiris (RE)** senyawa tersebut!
4. Tentukan **Rumus Molekul (RM)** definitif dari senyawa tersebut!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Menghitung Massa Karbon dan Hidrogen
Seluruh atom karbon pada senyawa berubah menjadi $\\ce{CO2}$, dan seluruh atom hidrogen berubah menjadi $\\ce{H2O}$:
- **Massa Karbon ($\\ce{C}$):**
  $$m_{\\ce{C}} = \\frac{A_r(\\ce{C})}{M_r(\\ce{CO2})} \\times m_{\\ce{CO2}} = \\frac{12.0}{44.0} \\times 6.60\\text{ g} = \\mathbf{1.80\\text{ gram}}$$
- **Massa Hidrogen ($\\ce{H}$):**
  $$m_{\\ce{H}} = \\frac{2 \\times A_r(\\ce{H})}{M_r(\\ce{H2O})} \\times m_{\\ce{H2O}} = \\frac{2.0}{18.0} \\times 2.70\\text{ g} = \\mathbf{0.30\\text{ gram}}$$

#### Langkah 2: Menghitung Massa Oksigen
Massa oksigen di dalam senyawa dihitung dari selisih massa sampel total dikurangi massa karbon dan hidrogen:
$$m_{\\ce{O}} = m_{\\text{sampel}} - (m_{\\ce{C}} + m_{\\ce{H}}) = 4.50\\text{ g} - (1.80\\text{ g} + 0.30\\text{ g}) = 4.50 - 2.10 = \\mathbf{2.40\\text{ gram}}$$

#### Langkah 3: Menentukan Rumus Empiris (RE)
Bagi massa masing-masing unsur dengan massa atom relatifnya ($A_r$) untuk memperoleh rasio mol:
$$\\begin{aligned}
n_{\\ce{C}} &= \\frac{1.80\\text{ g}}{12.0\\text{ g/mol}} = 0.150\\text{ mol} \\\\
n_{\\ce{H}} &= \\frac{0.30\\text{ g}}{1.0\\text{ g/mol}} = 0.300\\text{ mol} \\\\
n_{\\ce{O}} &= \\frac{2.40\\text{ g}}{16.0\\text{ g/mol}} = 0.150\\text{ mol}
\\end{aligned}$$
Bagi dengan nilai mol terkecil ($0.150$):
$$n_{\\ce{C}} : n_{\\ce{H}} : n_{\\ce{O}} = \\frac{0.150}{0.150} : \\frac{0.300}{0.150} : \\frac{0.150}{0.150} = \\mathbf{1 : 2 : 1}$$
Rumus Empiris (RE) senyawa adalah: **$\\mathbf{\\ce{CH2O}}$**.

#### Langkah 4: Menentukan Rumus Molekul (RM)
Massa molar rumus empiris: $M_r(\\ce{CH2O}) = 12.0 + (2 \\times 1.0) + 16.0 = 30.0\\text{ g/mol}$.  
Hubungan rumus molekul:
$$(\\text{RE})_n = \\text{RM} \\implies [M_r(\\text{RE})]_n = M_r(\\text{Senyawa})$$
$$(30.0)_n = 180.0 \\implies n = \\frac{180.0}{30.0} = \\mathbf{6}$$
Maka Rumus Molekulnya adalah $(\\ce{CH2O})_6 = \\mathbf{\\ce{C6H12O6}}$ (senyawa heksosa / glukosa).

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Jebakan Fatal Menghitung Oksigen:**  
> JANGAN PERNAH menghitung massa oksigen dari $\\ce{CO2}$ atau $\\ce{H2O}$! Sebagian besar atom oksigen pada $\\ce{CO2}$ dan $\\ce{H2O}$ berasal dari **gas oksigen luar yang ditiupkan untuk membakar**. Massa oksigen asli milik senyawa WAJIB dihitung dari selisih massa sampel total!`,
    keyFormulas: [
      { name: 'Massa C dari CO2', formula: 'm_{\\ce{C}} = \\frac{12}{44} \\times m_{\\ce{CO2}}' },
      { name: 'Massa H dari H2O', formula: 'm_{\\ce{H}} = \\frac{2}{18} \\times m_{\\ce{H2O}}' },
      { name: 'Hubungan RM dan RE', formula: 'M_r = n \times M_r(\text{RE})' },
    ],
  },
  {
    tag: 'contoh-stoikiometri-gas-non-stp-pv-nrt',
    tags: ['konsep-mol', 'jembatan-mol', 'gas-ideal', 'kondisi-rtp', 'kimia-sma'],
    title: 'Contoh Soal 3: Konversi Jembatan Mol pada Kondisi STP, RTP & Persamaan Gas Ideal (Level: Sedang)',
    summary: 'Navigasi komprehensif peta jembatan mol: konversi massa, jumlah partikel, volume pada STP, kondisi kamar RTP, dan gas ideal PV=nRT.',
    content: `### 📋 Skenario Masalah:
Sebuah tabung silinder tertutup berisi $11.0\\text{ gram}$ gas karbon dioksida murni ($\\ce{CO2}$, $M_r = 44.0\\text{ g/mol}$).  
Tetapan gas universal $R = 0.08206\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$, Bilangan Avogadro $N_A = 6.022 \\times 10^{23}\\text{ partikel/mol}$.

---

### 🎯 Pertanyaan:
1. Hitung jumlah mol gas $\\ce{CO2}$ di dalam tabung!
2. Hitung jumlah molekul $\\ce{CO2}$ dan jumlah total atom oksigen yang terkandung!
3. Hitung volume gas $\\ce{CO2}$ jika diukur pada kondisi standar **STP** ($0^\\circ\\text{C}, 1\\text{ atm}$)!
4. Hitung volume gas $\\ce{CO2}$ jika diukur pada kondisi ruang kamar **RTP** ($25^\\circ\\text{C}, 1\\text{ atm}$)!
5. Hitung volume gas $\\ce{CO2}$ jika dipanaskan pada suhu $27^\\circ\\text{C}$ dan tekanan $2.0\\text{ atm}$ menggunakan persamaan gas ideal $PV = nRT$!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Menghitung Mol Gas $\\ce{CO2}$
$$n = \\frac{m}{M_r} = \\frac{11.0\\text{ g}}{44.0\\text{ g/mol}} = \\mathbf{0.250\\text{ mol}}$$

#### Langkah 2: Menghitung Jumlah Partikel Molekul & Atom O
- **Jumlah Molekul $\\ce{CO2}$:**
  $$N = n \\times N_A = 0.250 \\times 6.022 \\times 10^{23} = \\mathbf{1.5055 \\times 10^{23}\\text{ molekul } \\ce{CO2}}$$
- **Jumlah Total Atom Oksigen:**
  Setiap molekul $\\ce{CO2}$ mengandung 2 atom oksigen:
  $$N_{\\ce{O}} = 2 \\times 1.5055 \\times 10^{23} = \\mathbf{3.011 \\times 10^{23}\\text{ atom oksigen}}$$

#### Langkah 3: Volume pada Kondisi Standar STP ($0^\circ\text{C}, 1\text{ atm}$)
Volume molar gas ideal pada STP adalah $22.4\\text{ L/mol}$:
$$V_{\\text{STP}} = n \\times 22.4\\text{ L/mol} = 0.250 \\times 22.4 = \\mathbf{5.60\\text{ Liter}}$$

#### Langkah 4: Volume pada Kondisi Ruang RTP ($25^\circ\text{C}, 1\text{ atm}$)
Volume molar gas ideal pada suhu kamar $25^\\circ\\text{C}$ adalah $\\approx 24.45\\text{ L/mol}$:
$$V_{\\text{RTP}} = n \\times 24.45\\text{ L/mol} = 0.250 \\times 24.45 = \\mathbf{6.11\\text{ Liter}}$$

#### Langkah 5: Volume pada $27^\circ\text{C}$ dan Tekanan $2.0\text{ atm}$
Konversikan suhu ke Kelvin: $T = 27 + 273 = 300\\text{ K}$.  
Gunakan hukum gas ideal $PV = nRT$:
$$V = \\frac{nRT}{P} = \\frac{0.250\\text{ mol} \\times 0.08206 \\times 300\\text{ K}}{2.0\\text{ atm}} = \\frac{6.1545}{2.0} = \\mathbf{3.08\\text{ Liter}}$$

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Pembeda Kondisi STP vs RTP:**  
> - **STP (*Standard Temperature & Pressure*):** Suhu $0^\\circ\\text{C}$ ($273\\text{ K}$), $1\\text{ atm} \\implies V_m = \\mathbf{22.4\\text{ L/mol}}$.  
> - **RTP (*Room Temperature & Pressure*):** Suhu $25^\\circ\\text{C}$ ($298\\text{ K}$), $1\\text{ atm} \\implies V_m = \\mathbf{24.4\\text{ L/mol}}$ (sering keluar di kurikulum Cambridge & UTBK!).  
> - **Non-STP/RTP:** Wajib gunakan $PV = nRT$ dengan suhu selalu dalam skala **Kelvin**.`,
    keyFormulas: [
      { name: 'Persamaan Gas Ideal', formula: 'PV = nRT' },
      { name: 'Volume Molar STP', formula: 'V_{\text{STP}} = n \times 22.4\text{ L/mol}' },
    ],
  },
  {
    tag: 'contoh-stoikiometri-reaksi-pereaksi-pembatas',
    tags: ['pereaksi-pembatas', 'tabel-mrs', 'stoikiometri-larutan', 'gas-hidrogen', 'hots-sma'],
    title: 'Contoh Soal 4: Stoikiometri Larutan, Tabel M-R-S & Mekanisme Pereaksi Pembatas (Level: HOTS)',
    summary: 'Penyusunan tabel Mula-mula, Reaksi, Sisa (M-R-S), identifikasi pereaksi pembatas larutan vs padatan, serta perhitungan volume gas hidrogen.',
    content: `### 📋 Skenario Masalah:
Sebanyak $6.54\\text{ gram}$ serbuk logam seng ($\\ce{Zn}$, $A_r = 65.4\\text{ g/mol}$) dimasukkan ke dalam $200.0\\text{ mL}$ larutan asam klorida ($\\ce{HCl}$) $1.50\\text{ M}$. Reaksi yang terjadi menghasilkan larutan seng klorida dan gelembung gas hidrogen:
$$\\ce{Zn(s) + 2 HCl(aq) -> ZnCl2(aq) + H2(g)^}$$

---

### 🎯 Pertanyaan:
1. Hitung jumlah mol mula-mula dari logam seng dan asam klorida!
2. Tentukan pereaksi manakah yang bertindak sebagai **pereaksi pembatas (*limiting reactant*)**!
3. Susunlah **Tabel M-R-S** (Mula-mula, Reaksi, Sisa) lengkap untuk reaksi tersebut!
4. Berapa massa pereaksi yang tersisa (dalam gram)?
5. Berapakah volume gas hidrogen ($\\ce{H2}$) yang terbentuk jika diukur pada kondisi standar STP?

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Menghitung Mol Mula-mula
- **Mol $\\ce{Zn}$:**
  $$n_{\\ce{Zn}} = \\frac{m}{A_r} = \\frac{6.54\\text{ g}}{65.4\\text{ g/mol}} = \\mathbf{0.100\\text{ mol}}$$
- **Mol $\\ce{HCl}$:**
  $$n_{\\ce{HCl}} = M \\times V = 1.50\\text{ M} \\times 0.200\\text{ L} = \\mathbf{0.300\\text{ mol}}$$

#### Langkah 2: Menentukan Pereaksi Pembatas
Bagi jumlah mol mula-mula dengan koefisien reaksi masing-masing:
- Untuk $\\ce{Zn}$: $\\frac{0.100\\text{ mol}}{1} = \\mathbf{0.100}$
- Untuk $\\ce{HCl}$: $\\frac{0.300\\text{ mol}}{2} = \\mathbf{0.150}$
Karena nilai rasio $\\ce{Zn}$ ($0.100$) lebih kecil daripada $\\ce{HCl}$ ($0.150$), maka **logam $\\ce{Zn}$ bertindak sebagai pereaksi pembatas** yang akan habis bereaksi seluruhnya.

#### Langkah 3: Menyusun Tabel M-R-S
Perubahan reaksi mengikuti stoikiometri koefisien $\\ce{Zn} : \\ce{HCl} : \\ce{ZnCl2} : \\ce{H2} = 1 : 2 : 1 : 1$:

| Reaksi Stoikiometri | $\\ce{Zn(s)}$ | $+$ | $\\ce{2 HCl(aq)}$ | $\\to$ | $\\ce{ZnCl2(aq)}$ | $+$ | $\\ce{H2(g)}$ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **M**ula-mula | $0.100\\text{ mol}$ | | $0.300\\text{ mol}$ | | $0.000\\text{ mol}$ | | $0.000\\text{ mol}$ |
| **R**eaksi | $-0.100\\text{ mol}$ | | $-0.200\\text{ mol}$ | | $+0.100\\text{ mol}$ | | $+0.100\\text{ mol}$ |
| **S**isa | $\\mathbf{0.000\\text{ mol}}$ | | $\\mathbf{0.100\\text{ mol}}$ | | $\\mathbf{0.100\\text{ mol}}$ | | $\\mathbf{0.100\\text{ mol}}$ |

#### Langkah 4: Menghitung Pereaksi yang Tersisa
Pereaksi yang tersisa adalah $\\ce{HCl}$ sebanyak $0.100\\text{ mol}$ ($M_r\,\\ce{HCl} = 1.0 + 35.5 = 36.5\\text{ g/mol}$):
$$m_{\\ce{HCl sisa}} = n \\times M_r = 0.100\\text{ mol} \\times 36.5\\text{ g/mol} = \\mathbf{3.65\\text{ gram}}$$

#### Langkah 5: Menghitung Volume Gas $\\ce{H2}$ pada STP
Gas $\\ce{H2}$ yang terbentuk $= 0.100\\text{ mol}$:
$$V_{\\ce{H2}} = n \\times 22.4\\text{ L/mol} = 0.100 \\times 22.4 = \\mathbf{2.24\\text{ Liter}}$$

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Miskonsepsi Fatal Pereaksi Pembatas:**  
> Jangan pernah mengira zat yang mol awalnya paling kecil selalu menjadi pembatas! Pereaksi pembatas adalah zat yang memiliki **rasio $\\frac{\\text{mol}}{\\text{koefisien}}$ paling kecil**. Jika perbandingan koefisiennya $1 : 2$, reagen dengan $0.30\\text{ mol}$ pun bisa bersisa jika reagen pasangannya hanya butuh $0.10\\text{ mol}$!`,
    keyFormulas: [
      { name: 'Uji Pereaksi Pembatas', formula: '\\text{Rasio} = \\frac{\\text{Mol Mula-mula}}{\\text{Koefisien Reaksi}}' },
    ],
  },
  {
    tag: 'contoh-kemurnian-sampel-dan-persen-hasil',
    tags: ['kemurnian-sampel', 'persen-hasil', 'rendemen', 'kalsium-karbonat', 'hots-sma'],
    title: 'Contoh Soal 5: Perhitungan Kemurnian Sampel Batu Kapur & Persen Hasil Reaksi (Level: HOTS)',
    summary: 'Menghitung persen kemurnian reaktan kotor dari volume gas yang terbentuk, menentukan massa teoretis produk, serta kalkulasi efisiensi persen hasil.',
    content: `### 📋 Skenario Masalah:
Sebanyak $25.00\\text{ gram}$ sampel batu kapur kotor yang mengandung kalsium karbonat ($\\ce{CaCO3}$) dipanaskan kuat di laboratorium hingga seluruh kalsium karbonatnya terurai sempurna menurut reaksi:
$$\\ce{CaCO3(s) ->[\\Delta] CaO(s) + CO2(g)^}$$
Zat pengotor di dalam batu kapur bersifat inert dan tidak terurai oleh pemanasan.  
Gas karbon dioksida ($\\ce{CO2}$) yang terbentuk dialirkan dan ditampung, menghasilkan volume tepat $4.48\\text{ Liter}$ pada kondisi STP ($0^\\circ\\text{C}, 1\\text{ atm}$).  
Di akhir percobaan, padatan kalsium oksida ($\\ce{CaO}$) murni yang berhasil diisolasi ditimbang dan diperoleh massa sebesar $10.08\\text{ gram}$.  
*(Data massa molar: $\\ce{Ca} = 40.0$, $\\ce{C} = 12.0$, $\\ce{O} = 16.0\\text{ g/mol}$)*.

---

### 🎯 Pertanyaan:
1. Hitung jumlah mol gas $\\ce{CO2}$ yang terbentuk pada kondisi STP!
2. Hitung massa $\\ce{CaCO3}$ murni yang terkandung di dalam sampel batu kapur tersebut!
3. Tentukan persentase kemurnian (*purity*) kalsium karbonat di dalam sampel batu kapur kotor!
4. Hitung massa teoretis kalsium oksida ($\\ce{CaO}$) yang seharusnya terbentuk berdasarkan hitungan stoikiometri!
5. Hitung persentase hasil (*percent yield* / rendemen) dari pembentukan kalsium oksida tersebut!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Menghitung Mol Gas $\\ce{CO2}$
$$n_{\\ce{CO2}} = \\frac{V_{\\text{STP}}}{22.4\\text{ L/mol}} = \\frac{4.48\\text{ L}}{22.4\\text{ L/mol}} = \\mathbf{0.200\\text{ mol}}$$

#### Langkah 2: Menghitung Massa $\\ce{CaCO3}$ Murni
Berdasarkan perbandingan koefisien reaksi setara ($1 : 1$):
$$n_{\\ce{CaCO3}} = n_{\\ce{CO2}} = 0.200\\text{ mol}$$
Massa molar $\\ce{CaCO3} = 40.0 + 12.0 + (3 \\times 16.0) = 100.0\\text{ g/mol}$.  
$$m_{\\ce{CaCO3 (murni)}} = n \\times M_r = 0.200\\text{ mol} \\times 100.0\\text{ g/mol} = \\mathbf{20.00\\text{ gram}}$$

#### Langkah 3: Menghitung Persen Kemurnian Batu Kapur
$$\\% \\text{ Kemurnian} = \\frac{m_{\\text{murni}}}{m_{\\text{sampel kotor}}} \\times 100\\% = \\frac{20.00\\text{ g}}{25.00\\text{ g}} \\times 100\\% = \\mathbf{80.00\\%}$$

#### Langkah 4: Menghitung Massa Teoretis $\\ce{CaO}$
Koefisien $\\ce{CaO} : \\ce{CaCO3} = 1 : 1$, sehingga $n_{\\ce{CaO}} = 0.200\\text{ mol}$.  
Massa molar $\\ce{CaO} = 40.0 + 16.0 = 56.0\\text{ g/mol}$.  
$$m_{\\ce{CaO (teoretis)}} = 0.200\\text{ mol} \\times 56.0\\text{ g/mol} = \\mathbf{11.20\\text{ gram}}$$

#### Langkah 5: Menghitung Persen Hasil (% Yield)
Produk aktual yang diperoleh di laboratorium adalah $10.08\\text{ gram}$:
$$\\% \\text{ Hasil} = \\frac{m_{\\text{aktual}}}{m_{\\text{teoretis}}} \\times 100\\% = \\frac{10.08\\text{ g}}{11.20\\text{ g}} \\times 100\\% = \\mathbf{90.00\\%}$$

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Beda Kemurnian Sampel vs Persen Hasil:**  
> - **Kemurnian Sampel:** Dihitung di **awal reaksi (pereaksi)** $\\implies$ berapa persen massa zat murni yang bereaksi dari bongkahan sampel kotor.  
> - **Persen Hasil (*Yield*):** Dihitung di **akhir reaksi (produk)** $\\implies$ perbandingan massa produk riil di laboratorium dibanding hitungan matematis di atas kertas (teoretis).`,
    keyFormulas: [
      { name: 'Rumus Persen Kemurnian', formula: '\\% \\text{ Kemurnian} = \\frac{m_{\\text{murni}}}{m_{\\text{sampel kotor}}} \\times 100\\%' },
      { name: 'Rumus Persen Hasil', formula: '\\% \\text{ Hasil} = \\frac{m_{\\text{aktual}}}{m_{\\text{teoretis}}} \\times 100\\%' },
    ],
  },
];
