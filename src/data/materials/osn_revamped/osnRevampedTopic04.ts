/**
 * osnRevampedTopic04.ts
 * Topik 4: Termokimia (Termodinamika Kimia)
 * Jenjang: Persiapan Olimpiade Sains Nasional (OSN) & IChO
 * 
 * ARSITEKTUR PEDAGOGIS 4 TAHAP TERSTRUKTUR:
 * 1. Intuisi dan Formalisasi: Menanamkan konsep dasar melalui gambaran fisis mikroskopis dilanjutkan penurunan matematis eksak IUPAC.
 * 2. Taktik Soal: Bedah soal olimpiade terstruktur dengan kotak "Titik Rawan Kesalahan" (pitfalls) & alur penyelesaian sistematis.
 * 3. Pengayaan Inkuiri: Penalaran kritis tingkat lanjut melalui paradoks kimia nyata (analisis Born-Haber MgCl vs MgCl2 & Hukum Kirchhoff).
 * 4. Ringkasan Cepat: Matriks komparasi parameter termokimia dan daftar persamaan inti operasional.
 */

import type { MaterialItem } from '../../materialsData.ts';
import { CHECKPOINTS_TOPIC_OSN_04 } from '../../checkpoints/checkpointBankTopicOsn04.ts';

export const OSN_REVAMPED_TOPIC_4: MaterialItem = {
  id: 4,
  topic_number: 4,
  title: 'Termokimia',
  slug: 'termodinamika-kimia',
  category: 'Kimia Fisik',
  level: 'OSN',
  readTimeMinutes: 28,
  pedagogy_version: 'revamped',
  summary: 'Modul Persiapan Olimpiade Kimia berbasis 4 Pilar Pedagogis: Penurunan Hukum Pertama Termodinamika dU = dq + dw, konvensi IUPAC, entalpi pembentukan standar, taktik soal kalorimetri bom vs cawan kopi dengan eliminasi jebakan konseptual, analisis inkuiri kestabilan MgCl vs MgCl2 melalui energi kisi Kapustinskii & disproporsionasi, serta ekspansi suhu Hukum Kirchhoff.',
  allTags: [
    'hukum-pertama-kalorimetri',
    'entalpi-reaksi-hukum-hess',
    'energi-ikatan-transisi-fasa',
    'taktik-soal-kalorimetri-bom',
    'taktik-soal-bde-transisi-fasa',
    'inkuiri-born-haber-kestabilan-mgcl',
    'hukum-kirchhoff-suhu-non-standar',
    'ringkasan-cepat-termokimia',
    'termodinamika',
    'entalpi',
    'kalorimetri-bom',
    'hukum-hess',
    'siklus-born-haber',
    'hukum-kirchhoff',
    'kapustinskii',
    'disproporsionasi',
    'bde-ikatan',
  ],

  // PILAR 1: INTUISI DAN FORMALISASI
  prerequisites: [
    {
      tag: 'hukum-pertama-kalorimetri',
      tags: ['hukum-pertama', 'kalorimetri', 'energi-dalam', 'kerja-pv'],
      title: '1.1 Energi Dalam (\\Delta U), Entalpi (\\Delta H), dan Hukum Pertama Termodinamika',
      summary: 'Perbedaan mendasar proses volume konstan (isokhorik) dan tekanan konstan (isobarik) melalui interaksi kerja volume atmosfer.',
      content: `> [!NOTE]
> ### 🏛️ Arsitektur Pedagogis Modul
> Setiap konsep dalam bab ini dipelajari melalui dua lensa berurutan: **Intuisi** (membangun gambaran fisis dan logika mikroskopis) diikuti oleh **Formalisasi** (penurunan persamaan matematis eksak, standar IUPAC, dan batas keberlakuan rumus).

---

### Intuisi
Ketika reaksi kimia berlangsung di dalam wadah terbuka, campuran reaksi berinteraksi langsung dengan atmosfer yang memberikan tekanan konstan ($P_{\\text{eks}}$). Perbedaan antara reaksi pada volume tetap (wadah tertutup rapat) dan tekanan tetap (wadah terbuka) terletak pada adanya kerja volume ($P\\Delta V$) antara sistem dan lingkungan:

* **Reaksi yang menambah jumlah molekul gas ($\Delta n_{\\text{gas}} > 0$):**  
  Gas yang terbentuk harus mendorong atmosfer luar untuk menyediakan ruang bagi pertambahan volume sistem. Karena sebagian energi reaksi terpakai untuk melakukan kerja ekspansi tersebut, kalor yang dilepaskan ke lingkungan pada tekanan tetap ($\\Delta H$) menjadi lebih kecil dibandingkan kalor yang dilepaskan pada volume tetap ($\\Delta U$).

* **Reaksi yang mengurangi jumlah molekul gas ($\Delta n_{\\text{gas}} < 0$):**  
  Penyusutan volume gas menyebabkan atmosfer luar menekan sistem (melakukan kerja kompresi pada sistem). Tambahan energi dari kerja kompresi ini membuat kalor yang dilepaskan pada tekanan tetap ($\\Delta H$) bernilai lebih negatif (lebih eksoterm) dibandingkan perubahan energi dalam ($\\Delta U$).

---

### Formalisasi
Energi dalam ($U$) merupakan fungsi keadaan ekstensif yang perubahannya mengikuti Hukum Pertama Termodinamika:

$$dU = \\delta q + \\delta w \\tag{1}$$

Berdasarkan konvensi tanda resmi IUPAC:
* Kalor yang diserap sistem bernilai positif ($q > 0$).
* Kerja yang dilakukan pada sistem bernilai positif ($w > 0$).

Apabila kerja yang terlibat hanya berupa kerja ekspansi-kompresi reversibel ($\\delta w = -P_{\\text{eks}} dV$), maka persamaan diferensialnya menjadi:

$$dU = \\delta q - P_{\\text{eks}} dV \\tag{2}$$

#### 1. Proses Isokhorik / Volume Konstan ($dV = 0$, seperti pada Kalorimeter Bom):
Suku kerja mekanik bernilai nol ($\\delta w = 0$), sehingga kalor reaksi yang terukur sama persis dengan perubahan energi dalam:

$$q_V = \\Delta U \\tag{3}$$

#### 2. Proses Isobarik / Tekanan Konstan ($dP = 0$, seperti pada Kalorimeter Cawan Kopi / Coffee-Cup):
Didefinisikan fungsi keadaan **Entalpi ($H$)**:

$$H \\equiv U + PV \\implies dH = dU + P dV + V dP \\tag{4}$$

Pada tekanan konstan ($dP = 0$ dan $P_{\\text{eks}} = P$), substitusi $dU = \\delta q_P - P dV$ menghasilkan $dH = \\delta q_P$, atau dalam bentuk perubahan makroskopis:

$$\\Delta H = \\Delta U + \\Delta(PV) = q_P \\tag{5}$$

Mengingat volume molar fasa padat dan cair jauh lebih kecil daripada fasa gas ($V_m(\\text{gas}) \\gg V_m(\\text{kondensasi})$), perubahan $\\Delta(PV)$ didominasi oleh perubahan jumlah mol gas. Dengan menerapkan persamaan gas ideal ($PV = n_{\\text{gas}}RT$) pada temperatur konstan $T$, diperoleh hubungan fundamental:

$$\\Delta H = \\Delta U + \\Delta n_{\\text{gas}}RT \\quad \\text{dengan} \\quad \\Delta n_{\\text{gas}} = \\sum \\nu_{\\text{gas, produk}} - \\sum \\nu_{\\text{gas, reaktan}} \\tag{6}$$`,
      keyFormulas: [
        { name: 'Hukum Pertama Termodinamika', formula: 'dU = \\delta q + \\delta w' },
        { name: 'Kerja Ekspansi-Kompresi Reversibel', formula: '\\delta w = -P_{\\text{eks}} dV' },
        { name: 'Kalor Volume Konstan (Bom)', formula: 'q_V = \\Delta U' },
        { name: 'Definisi Entalpi', formula: 'H \\equiv U + PV' },
        { name: 'Relasi Entalpi - Energi Dalam Gas Ideal', formula: '\\Delta H = \\Delta U + \\Delta n_{\\text{gas}} RT' },
      ],
      checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_04['hukum-pertama-kalorimetri'],
    },
    {
      tag: 'entalpi-reaksi-hukum-hess',
      tags: ['hukum-hess', 'fungsi-keadaan', 'entalpi-standar', 'iupac'],
      title: '1.2 Fungsi Keadaan, Keadaan Standar, dan Hukum Hess',
      summary: 'Analogi ketinggian pendaki vs fungsi lintasan, keabsahan integral siklus nol entalpi, dan formulasi aljabar Hukum Hess.',
      content: `### Intuisi
Perubahan ketinggian seseorang yang mendaki dari titik A ke titik B hanya ditentukan oleh koordinat awal dan koordinat akhir, tanpa dipengaruhi oleh apakah pendaki tersebut menempuh jalur lurus yang curam atau jalur memutar yang landai.

Dalam termodinamika, jarak tempuh dan tenaga yang terkuras sepanjang perjalanan serupa dengan kalor ($q$) dan kerja ($w$) yang nilainya bergantung pada lintasan proses (*path function*).

Sebaliknya, energi dalam ($U$) dan entalpi ($H$) bersifat seperti ketinggian (*state function*): perubahan nilainya hanya bergantung pada keadaan awal (reaktan) dan keadaan akhir (produk). Oleh sebab itu, jika suatu reaksi kimia dapat dipecah menjadi beberapa tahap reaksi perantara, **penjumlahan $\\Delta H$ dari seluruh tahap tersebut pasti sama dengan $\\Delta H$ reaksi tunggalnya**.

---

### Formalisasi
Karena $H$ merupakan diferensial eksak, integral tertutupnya pada sembarang siklus termodinamika selalu bernilai nol:

$$\\oint dH = 0$$

Nilai mutlak entalpi suatu zat tidak dapat diukur secara langsung. Oleh karena itu, IUPAC menetapkan acuan relatif melalui **Entalpi Pembentukan Standar ($\\Delta H_f^\\circ$)**, yaitu:
> Perubahan entalpi pembentukan $1\\text{ mol}$ senyawa dari unsur-unsur penyusunnya pada keadaan standar ($P^\\circ = 1\\text{ bar} = 10^5\\text{ Pa}$ dan bentuk alotropi paling stabil pada suhu $T$, umumnya $298,15\\text{ K}$).

Dengan menetapkan $\\Delta H_f^\\circ = 0$ bagi unsur bebas dalam wujud paling stabilnya, perubahan entalpi standar untuk reaksi umum $\\sum \\nu_i A_i \\to \\sum \\nu_j B_j$ dinyatakan secara aljabar sebagai:

$$\\Delta H_{\\text{reaksi}}^\\circ = \\sum_{\\text{produk}} \\nu_j \\Delta H_f^\\circ(B_j) - \\sum_{\\text{reaktan}} \\nu_i \\Delta H_f^\\circ(A_i) \\tag{7}$$`,
      keyFormulas: [
        { name: 'Integral Diferensial Eksak Siklus', formula: '\\oint dH = 0' },
        { name: 'Hukum Hess Berbasis Entalpi Pembentukan', formula: '\\Delta H_{\\text{reaksi}}^\\circ = \\sum \\nu_P \\Delta H_f^\\circ(P) - \\sum \\nu_R \\Delta H_f^\\circ(R)' },
      ],
      checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_04['entalpi-reaksi-hukum-hess'],
    },
    {
      tag: 'energi-ikatan-transisi-fasa',
      tags: ['bde-ikatan', 'disosiasi-ikatan', 'siklus-fasa', 'atomisasi'],
      title: '1.3 Energi Disosiasi Ikatan dan Siklus Perubahan Fasa',
      summary: 'Rasionalitas mikroskopis arah pemutusan ikatan vs pembentukan ikatan serta koreksi entalpi penguapan/sublimasi.',
      content: `### Intuisi
Dalam perhitungan $\\Delta H_{\\text{reaksi}}^\\circ$, tanda operasi aljabar menggunakan selisih **produk dikurangi reaktan** ketika menggunakan data entalpi pembentukan standar ($\\Delta H_f^\\circ$), namun berbalik menjadi **reaktan dikurangi produk** ketika menggunakan data energi disosiasi ikatan ($D$).

Perbedaan arah ini berakar dari proses mikroskopisnya:
* **Pemutusan ikatan pada reaktan (Proses Endotermik, $\\Delta H > 0$):**  
  Atom-atom yang saling terikat berada pada sumur energi potensial minimum. Untuk memisahkan ikatan menjadi atom-atom bebas yang terisolasi, sistem memerlukan asupan energi sebesar $+\\sum D(\\text{ikatan putus})$.
* **Pembentukan ikatan pada produk (Proses Eksotermik, $\\Delta H < 0$):**  
  Penggabungan atom-atom bebas membentuk ikatan kimia baru menurunkan energi potensial sistem dan membebaskan kalor sebesar $-\\sum D(\\text{ikatan terbentuk})$.

---

### Formalisasi
Energi Disosiasi Ikatan ($D$ atau *Bond Dissociation Energy*, BDE) didefinisikan secara spesifik untuk **pemutusan homolitik $1\\text{ mol}$ ikatan kovalen dalam fasa gas**:

$$A-B(g) \\to A\\cdot(g) + B\\cdot(g) \\quad \\Delta H = D(A-B) > 0 \\tag{8}$$

Apabila reaktan atau produk pada kondisi standar berada dalam fasa padat atau cair, energi antarmolekul wajib diperhitungkan terlebih dahulu dengan menyertakan entalpi penguapan ($\\Delta H_{\\text{vap}}^\\circ$) atau entalpi sublimasi ($\\Delta H_{\\text{sub}}^\\circ$) guna membawa seluruh spesi ke fasa gas:

$$\\Delta H_{\\text{reaksi}}^\\circ = \\sum \\Delta H_{\\text{fasa}}(\\text{reaktan} \\to g) + \\sum D(\\text{ikatan putus}) - \\sum D(\\text{ikatan terbentuk}) + \\sum \\Delta H_{\\text{fasa}}(g \\to \\text{produk}) \\tag{9}$$`,
      keyFormulas: [
        { name: 'Definisi Energi Disosiasi Ikatan Homolitik Gas', formula: 'A-B(g) \\to A\\cdot(g) + B\\cdot(g), \\quad \\Delta H = D(A-B) > 0' },
        { name: 'Neraca Siklus Termodinamika Ikatan & Fasa', formula: '\\Delta H^\\circ = \\sum \\Delta H_{\\text{fasa}} + \\sum D_{\\text{putus}} - \\sum D_{\\text{bentuk}}' },
      ],
    },
  ],

  // PILAR 2: TAKTIK SOAL
  worked_examples: [
    {
      tag: 'taktik-soal-kalorimetri-bom',
      tags: ['soal-kalorimetri-bom', 'asam-benzoat', 'titik-rawan', 'taktik-olimpiade'],
      title: '2.1 Penentuan Entalpi Pembentukan Standar dari Data Kalorimetri Bom',
      summary: 'Analisis pembakaran asam benzoat: membedah perbedaan q_V vs q_P, fasa air pada 298 K, dan konsistensi satuan R.',
      content: `### 📝 Soal Contoh
Sebanyak $1,220\\text{ g}$ asam benzoat ($\\ce{C6H5COOH(s)}$, $M_r = 122,0\\text{ g mol}^{-1}$) dibakar sempurna di dalam kalorimeter bom bervolume tetap pada suhu $298\\text{ K}$. Suhu kalorimeter mengalami kenaikan sebesar $2,54^\\circ\\text{C}$. Kapasitas kalor total kalorimeter beserta air di dalamnya adalah $C_{\\text{kal}} = 10,36\\text{ kJ K}^{-1}$.

Diketahui data termodinamika pendukung:
* $\\Delta H_f^\\circ[\\ce{CO2(g)}] = -393,5\\text{ kJ mol}^{-1}$
* $\\Delta H_f^\\circ[\\ce{H2O(l)}] = -285,8\\text{ kJ mol}^{-1}$

**Tentukan:**
(a) $\\Delta U_c^\\circ$ dan $\\Delta H_c^\\circ$ pembakaran asam benzoat pada $298\\text{ K}$.  
(b) Entalpi pembentukan standar asam benzoat, $\\Delta H_f^\\circ[\\ce{C6H5COOH(s)}]$.

---

> [!WARNING]
> ### ⚠️ Titik Rawan Kesalahan (Common Pitfalls)
> 1. **Kondisi Alat Ukur:** Kalorimeter bom beroperasi pada volume tetap ($\\Delta V = 0$). Oleh karena itu, kalor per mol yang diperoleh dari $-C_{\\text{kal}}\\Delta T / n$ merupakan nilai **$\\Delta U_c^\\circ$, BUKAN $\\Delta H_c^\\circ$**!
> 2. **Fasa Air pada $298\\text{ K}$:** Pada keadaan standar $298\\text{ K}$, produk pembakaran hidrogen adalah air berwujud cair ($\\ce{H2O(l)}$). Koefisien air cair **TIDAK BOLEH** dimasukkan ke dalam perhitungan $\\Delta n_{\\text{gas}}$!
> 3. **Konsistensi Satuan $R$:** Nilai tetapan gas $R = 8,314\\text{ J mol}^{-1}\\text{K}^{-1}$ harus selalu dikonversi menjadi $8,314 \\times 10^{-3}\\text{ kJ mol}^{-1}\\text{K}^{-1}$ agar setara dengan satuan $\\Delta U_c^\\circ$ ($\\text{kJ mol}^{-1}$).

---

### Strategi Penyelesaian

#### Langkah 1: Menghitung jumlah mol sampel dan perubahan energi dalam pembakaran ($\\Delta U_c^\\circ$)
Karena suhu kalorimeter meningkat, reaksi melepaskan kalor ke lingkungan (eksotermik) sehingga $\\Delta U_c^\\circ$ bertanda negatif:

$$n = \\frac{1,220\\text{ g}}{122,0\\text{ g mol}^{-1}} = 0,0100\\text{ mol}$$

$$\\Delta U_c^\\circ = -\\frac{C_{\\text{kal}}\\Delta T}{n} = -\\frac{10,36\\text{ kJ K}^{-1} \\times 2,54\\text{ K}}{0,0100\\text{ mol}} = -2631,4\\text{ kJ mol}^{-1}$$

#### Langkah 2: Menentukan perubahan koefisien gas ($\\Delta n_{\\text{gas}}$) untuk $1\\text{ mol}$ asam benzoat
Reaksi pembakaran sempurna asam benzoat:

$$\\ce{C6H5COOH(s) + \\frac{15}{2} O2(g) -> 7 CO2(g) + 3 H2O(l)}$$

Perhatikan fasa zat:
$$\\Delta n_{\\text{gas}} = n(\\ce{CO2(g)}) - n(\\ce{O2(g)}) = 7 - 7,5 = -0,5\\text{ mol}$$

#### Langkah 3: Mengonversi $\\Delta U_c^\\circ$ menjadi entalpi pembakaran standar ($\\Delta H_c^\\circ$)

$$\\Delta H_c^\\circ = \\Delta U_c^\\circ + \\Delta n_{\\text{gas}}RT$$

$$\\Delta H_c^\\circ = -2631,4 + (-0,5)\\left(8,314 \\times 10^{-3}\\right)(298)$$

$$\\Delta H_c^\\circ = -2631,4 - 1,24 = -2632,6\\text{ kJ mol}^{-1}$$

#### Langkah 4: Menentukan $\\Delta H_f^\\circ[\\ce{C6H5COOH(s)}]$ melalui Hukum Hess

$$\\Delta H_c^\\circ = \\left[7\\Delta H_f^\\circ(\\ce{CO2}) + 3\\Delta H_f^\\circ(\\ce{H2O})\\right] - \\Delta H_f^\\circ(\\ce{C6H5COOH})$$

$$-2632,6 = [7(-393,5) + 3(-285,8)] - \\Delta H_f^\\circ(\\ce{C6H5COOH})$$

$$-2632,6 = [-2754,5 - 857,4] - \\Delta H_f^\\circ(\\ce{C6H5COOH})$$

$$-2632,6 = -3611,9 - \\Delta H_f^\\circ(\\ce{C6H5COOH})$$

$$\\Delta H_f^\\circ(\\ce{C6H5COOH}) = -3611,9 + 2632,6 = -979,3\\text{ kJ mol}^{-1}$$`,
      keyFormulas: [
        { name: 'Kalkulasi Energi Dalam Kalorimeter Bom', formula: '\\Delta U_c^\\circ = -\\frac{C_{\\text{kal}}\\Delta T}{n}' },
        { name: 'Koreksi Kerja Volume ke Entalpi', formula: '\\Delta H_c^\\circ = \\Delta U_c^\\circ + \\Delta n_{\\text{gas}} RT' },
      ],
    },
    {
      tag: 'taktik-soal-bde-transisi-fasa',
      tags: ['bde-etanol', 'sublimasi-grafit', 'penguapan', 'neraca-entalpi'],
      title: '2.2 Perhitungan Entalpi Reaksi dari Energi Disosiasi Ikatan dan Transisi Fasa',
      summary: 'Menggabungkan atomisasi grafit padat, disosiasi gas diatomik, pembentukan ikatan kovalen, dan kondensasi fasa cair.',
      content: `### 📝 Soal Contoh
Tentukan entalpi pembentukan standar etanol cair, $\\ce{CH3CH2OH(l)}$, pada suhu $298\\text{ K}$ berdasarkan data termodinamika berikut:
* $\\Delta H_{\\text{sub}}^\\circ[\\ce{C(grafit)}] = +717\\text{ kJ mol}^{-1}$
* $\\Delta H_{\\text{vap}}^\\circ[\\ce{CH3CH2OH(l)}] = +42,6\\text{ kJ mol}^{-1}$
* Energi ikatan rata-rata ($D$ dalam $\\text{kJ mol}^{-1}$):  
  $\\ce{H-H} = 436$, $\\ce{O=O} = 498$, $\\ce{C-C} = 348$, $\\ce{C-H} = 413$, $\\ce{C-O} = 358$, dan $\\ce{O-H} = 463$.

---

### Strategi Penyelesaian

#### Langkah 1: Menuliskan persamaan reaksi pembentukan standar target
Reaksi pembentukan standar $1\\text{ mol}$ $\\ce{CH3CH2OH(l)}$ dari unsur-unsurnya dalam wujud standar paling stabil:

$$2\\ce{C(grafit)} + 3\\ce{H2(g)} + \\frac{1}{2}\\ce{O2(g)} \\to \\ce{CH3CH2OH(l)}$$

#### Langkah 2: Mengidentifikasi jenis dan jumlah ikatan dalam struktur $\\ce{CH3CH2OH(g)}$
Satu molekul etanol dalam fasa gas memiliki rincian ikatan:
* $1$ ikatan tunggal $\\ce{C-C}$
* $5$ ikatan tunggal $\\ce{C-H}$
* $1$ ikatan tunggal $\\ce{C-O}$
* $1$ ikatan tunggal $\\ce{O-H}$

#### Langkah 3: Menyusun neraca entalpi tahapan siklus termodinamika
Alur siklus: **Atomisasi Reaktan $\\to$ Pembentukan Ikatan Molekul Gas $\\to$ Kondensasi Etanol Gas Menjadi Cair**:

1. **Atomisasi reaktan menjadi atom-atom gas:**
   $$\\Delta H_1 = 2\\Delta H_{\\text{sub}}^\\circ(\\ce{C}) + 3D(\\ce{H-H}) + \\frac{1}{2}D(\\ce{O=O})$$
   $$\\Delta H_1 = 2(717) + 3(436) + 0,5(498) = 1434 + 1308 + 249 = +2991\\text{ kJ}$$

2. **Pembentukan ikatan $\\ce{CH3CH2OH(g)}$ dari atom-atom gas (Eksoterm):**
   $$\\Delta H_2 = - [1D(\\ce{C-C}) + 5D(\\ce{C-H}) + 1D(\\ce{C-O}) + 1D(\\ce{O-H})]$$
   $$\\Delta H_2 = - [1(348) + 5(413) + 1(358) + 1(463)] = - [348 + 2065 + 358 + 463] = -3234\\text{ kJ}$$

3. **Kondensasi etanol dari fasa gas ke fasa cair:**
   $$\\Delta H_{\\text{kondensasi}}^\\circ = -\\Delta H_{\\text{vap}}^\\circ = -42,6\\text{ kJ}$$

**Total Entalpi Pembentukan Standar:**
$$\\Delta H_f^\\circ[\\ce{CH3CH2OH(l)}] = \\Delta H_1 + \\Delta H_2 + \\Delta H_{\\text{kondensasi}}^\\circ$$
$$\\Delta H_f^\\circ[\\ce{CH3CH2OH(l)}] = +2991 - 3234 - 42,6 = -285,6\\text{ kJ mol}^{-1}$$`,
      keyFormulas: [
        { name: 'Siklus Pembentukan Etanol Cair', formula: '\\Delta H_f^\\circ = \\Delta H_{\\text{atomisasi}} - \\sum D_{\\text{bentuk}} - \\Delta H_{\\text{vap}}^\\circ' },
      ],
    },
  ],

  // PILAR 3: PENGAYAAN INKUIRI & PILAR 4: RINGKASAN CEPAT
  core_concepts: [
    {
      tag: 'inkuiri-born-haber-kestabilan-mgcl',
      tags: ['born-haber', 'kapustinskii', 'disproporsionasi', 'kestabilan-ionik'],
      title: '3.1 Siklus Born-Haber dan Kestabilan Termodinamika Senyawa Ionik (MgCl vs MgCl2)',
      summary: 'Membedah paradoks mengapa MgCl2 yang stabil di alam meskipun IE1 jauh lebih kecil dari IE2 melalui termodinamika disproporsionasi.',
      content: `### 🔬 Latar Belakang & Paradoks Fenomena
Pelepasan elektron pertama dari atom magnesium ($IE_1 = +738\\text{ kJ mol}^{-1}$) memerlukan energi yang jauh lebih rendah dibandingkan pelepasan elektron kedua ($IE_2 = +1451\\text{ kJ mol}^{-1}$).

Namun, mengapa senyawa magnesium klorida yang ditemukan stabil pada kondisi kamar selalu memiliki rumus **$\\ce{MgCl2(s)}$**, dan **BUKAN $\\ce{MgCl(s)}$**?

Tabel berikut merangkum data eksperimen termokimia beserta estimasi energi kisi teoretis (melalui persamaan Kapustinskii) pada temperatur $298\\text{ K}$:

| Parameter Termokimia | Persamaan Proses | Nilai ($\\text{kJ mol}^{-1}$) |
| :--- | :--- | :--- |
| **Entalpi Sublimasi** ($\\Delta H_{\\text{sub}}^\\circ$) | $\\ce{Mg(s) -> Mg(g)}$ | $+148$ |
| **Energi Ionisasi Pertama** ($IE_1$) | $\\ce{Mg(g) -> Mg+(g) + e-}$ | $+738$ |
| **Energi Ionisasi Kedua** ($IE_2$) | $\\ce{Mg+(g) -> Mg^2+(g) + e-}$ | $+1451$ |
| **Entalpi Disosiasi Ikatan** ($\\Delta H_{\\text{dis}}^\\circ$) | $\\ce{Cl2(g) -> 2 Cl(g)}$ | $+243$ |
| **Afinitas Elektron** ($EA_1$) | $\\ce{Cl(g) + e- -> Cl-(g)}$ | $-349$ |
| **Energi Kisi** ($\\Delta H_{\\text{kisi}}^\\circ$) $\\ce{MgCl(s)}$ | $\\ce{Mg+(g) + Cl-(g) -> MgCl(s)}$ | $-783$ |
| **Energi Kisi** ($\\Delta H_{\\text{kisi}}^\\circ$) $\\ce{MgCl2(s)}$ | $\\ce{Mg^2+(g) + 2 Cl-(g) -> MgCl2(s)}$ | $-2526$ |

---

### Analisis Data dan Siklus Termodinamika

#### 1. Evaluasi Kestabilan $\\ce{MgCl(s)}$ terhadap Unsur Penyusunnya:
Melalui Siklus Born-Haber, entalpi pembentukan standar $\\ce{MgCl(s)}$ dapat dihitung:

$$\\Delta H_f^\\circ[\\ce{MgCl(s)}] = \\Delta H_{\\text{sub}}^\\circ + IE_1 + \\frac{1}{2}\\Delta H_{\\text{dis}}^\\circ + EA_1 + \\Delta H_{\\text{kisi}}^\\circ(\\ce{MgCl})$$

$$\\Delta H_f^\\circ[\\ce{MgCl(s)}] = 148 + 738 + 121,5 - 349 - 783 = -124,5\\text{ kJ mol}^{-1}$$

> [!NOTE]
> Nilai $\\Delta H_f^\\circ[\\ce{MgCl(s)}] = -124,5\\text{ kJ mol}^{-1}$ membuktikan bahwa pembentukan $\\ce{MgCl(s)}$ dari logam $\\ce{Mg(s)}$ dan gas $\\ce{Cl2(g)}$ sebenarnya **bersifat eksotermik**.
> Dengan demikian, anggapan populer bahwa $\\ce{MgCl(s)}$ tidak ada karena pembentukannya endotermik adalah **keliru secara termodinamika**!

#### 2. Evaluasi Kestabilan terhadap Reaksi Disproporsionasi:
Bandingkan nilai di atas dengan entalpi pembentukan standar $\\ce{MgCl2(s)}$:

$$\\Delta H_f^\\circ[\\ce{MgCl2(s)}] = 148 + (738 + 1451) + 243 + 2(-349) - 2526 = -644,0\\text{ kJ mol}^{-1}$$

Apabila padatan $\\ce{MgCl(s)}$ terbentuk, spesi ini akan mengalami **reaksi disproporsionasi** spontan menghasilkan $\\ce{Mg(s)}$ dan $\\ce{MgCl2(s)}$:

$$2\\ce{MgCl(s) -> Mg(s) + MgCl2(s)}$$

$$\\Delta H_{\\text{disprop}}^\\circ = [\\Delta H_f^\\circ(\\ce{Mg}) + \\Delta H_f^\\circ(\\ce{MgCl2})] - 2\\Delta H_f^\\circ(\\ce{MgCl})$$

$$\\Delta H_{\\text{disprop}}^\\circ = [0 + (-644,0)] - 2(-124,5) = -644,0 + 249,0 = -395,0\\text{ kJ mol}^{-1}$$

#### 💡 Kesimpulan Kunci Inkuiri:
Pelepasan kalor yang luar biasa besar ($\\Delta H_{\\text{disprop}}^\\circ = -395,0\\text{ kJ mol}^{-1}$) menjadi gaya pendorong termodinamika yang sangat kuat bagi $\\ce{MgCl(s)}$ untuk langsung terurai menjadi $\\ce{MgCl2(s)}$ dan $\\ce{Mg(s)}$.

Faktor pengendali utamanya adalah **peningkatan energi kisi yang drastis dari $-783\\text{ kJ mol}^{-1}$ menjadi $-2526\\text{ kJ mol}^{-1}$**. Muatan kation $\\ce{Mg^2+}$ yang dua kali lipat lebih besar ($+2$ vs $+1$) serta jari-jari ionnya yang menyusut jauh lebih dari cukup untuk mengompensasi biaya energi ionisasi kedua ($IE_2 = +1451\\text{ kJ mol}^{-1}$).`,
      keyFormulas: [
        { name: 'Entalpi Pembentukan MgCl', formula: '\\Delta H_f^\\circ[\\ce{MgCl}] = -124,5\\text{ kJ/mol}' },
        { name: 'Entalpi Pembentukan MgCl2', formula: '\\Delta H_f^\\circ[\\ce{MgCl2}] = -644,0\\text{ kJ/mol}' },
        { name: 'Entalpi Disproporsionasi MgCl', formula: '\\Delta H_{\\text{disprop}}^\\circ = -395,0\\text{ kJ/mol}' },
      ],
    },
    {
      tag: 'hukum-kirchhoff-suhu-non-standar',
      tags: ['kirchhoff', 'kapasitas-kalor', 'turunan-parsial', 'transisi-fasa'],
      title: '3.2 Ketergantungan Entalpi Reaksi terhadap Suhu (Hukum Kirchhoff)',
      summary: 'Penurunan kalkulus entalpi reaksi pada suhu non-standar melalui kapasitas kalor isobar dan perlakuan transisi fasa.',
      content: `### Penurunan Persamaan Kirchhoff
Data entalpi standar pada tabel acuan umumnya disajikan pada suhu referensi $T_1 = 298,15\\text{ K}$. Untuk menentukan entalpi reaksi pada suhu $T_2$ yang berbeda, digunakan definisi kapasitas kalor molar pada tekanan konstan:

$$C_{P,m} = \\left(\\frac{\\partial H_m}{\\partial T}\\right)_P$$

Turunan parsial perubahan entalpi reaksi terhadap suhu memenuhi hubungan:

$$\\left(\\frac{\\partial \\Delta H^\\circ}{\\partial T}\\right)_P = \\Delta C_P^\\circ = \\sum_{\\text{produk}} \\nu_j C_{P,m}^\\circ(B_j) - \\sum_{\\text{reaktan}} \\nu_i C_{P,m}^\\circ(A_i) \\tag{10}$$

Integrasi persamaan tersebut dari $T_1$ ke $T_2$ (dengan asumsi tidak terjadi transisi fasa pada rentang suhu tersebut dan $\\Delta C_P^\\circ$ konstan terhadap suhu) menghasilkan **Persamaan Kirchhoff**:

$$\\Delta H^\\circ(T_2) = \\Delta H^\\circ(T_1) + \\Delta C_P^\\circ(T_2 - T_1) \\tag{11}$$

---

### Perlakuan Transisi Fasa pada Rentang Suhu ($T_1 < T_{\\text{tr}} < T_2$)
Apabila salah satu reaktan atau produk mengalami perubahan fasa (misalnya meleleh atau menguap) pada suhu transisi $T_{\\text{tr}}$, integral harus dipecah menjadi dua interval suhu yang berkesinambungan:

$$\\Delta H^\\circ(T_2) = \\Delta H^\\circ(T_1) + \\int_{T_1}^{T_{\\text{tr}}} \\Delta C_P^\\circ(\\text{fasa awal}) \\, dT + \\sum (\\pm \\nu \\Delta H_{\\text{tr}}^\\circ) + \\int_{T_{\\text{tr}}}^{T_2} \\Delta C_P^\\circ(\\text{fasa baru}) \\, dT$$

di mana tanda $(\\pm)$ bernilai positif jika produk mengalami transisi fasa endotermik dan bernilai negatif jika reaktan yang mengalami transisi fasa.`,
      keyFormulas: [
        { name: 'Kapasitas Kalor Reaksi Standar', formula: '\\Delta C_P^\\circ = \\sum \\nu_P C_{P,m}^\\circ(P) - \\sum \\nu_R C_{P,m}^\\circ(R)' },
        { name: 'Persamaan Kirchhoff', formula: '\\Delta H^\\circ(T_2) = \\Delta H^\\circ(T_1) + \\Delta C_P^\\circ (T_2 - T_1)' },
      ],
    },
    {
      tag: 'ringkasan-cepat-termokimia',
      tags: ['ringkasan-cepat', 'matriks-parameter', 'cheat-sheet', 'persamaan-inti'],
      title: '4. Ringkasan Cepat & Persamaan Inti',
      summary: 'Tabel komparasi 4 parameter termokimia utama dan kumpulan formula operasional kalorimetri serta konversi termodinamika.',
      content: `### 📊 Tabel Komparasi Parameter Termokimia

| Parameter | Tanda | Persamaan $\\Delta H_{\\text{reaksi}}^\\circ$ | Kondisi Acuan & Catatan Penting ($298\\text{ K}, 1\\text{ bar}$) |
| :--- | :---: | :--- | :--- |
| **$\\Delta H_f^\\circ$ (Pembentukan)** | $+ / -$ | $\\sum \\nu_P \\Delta H_f^\\circ(P) - \\sum \\nu_R \\Delta H_f^\\circ(R)$ | $\\Delta H_f^\\circ = 0$ untuk unsur paling stabil: $\\ce{C(grafit)}$, $\\ce{S8(rombik)}$, $\\ce{P4(putih)}$, $\\ce{Br2(l)}$, $\\ce{Hg(l)}$, $\\ce{I2(s)}$, $\\ce{O2(g)}$. |
| **$\\Delta H_c^\\circ$ (Pembakaran)** | Selalu $-$ | $\\sum \\nu_R \\Delta H_c^\\circ(R) - \\sum \\nu_P \\Delta H_c^\\circ(P)$ | Produk pembakaran sempurna: $\\ce{C -> CO2(g)}$, $\\ce{H -> H2O(l)}$, $\\ce{S -> SO2(g)}$, $\\ce{N -> N2(g)}$. |
| **$D$ / BDE (Ikatan)** | Selalu $+$ | $\\sum D(\\text{putus}) - \\sum D(\\text{bentuk})$ | **Hanya berlaku pada fasa gas.** Sertakan $\\Delta H_{\\text{vap}}^\\circ$ atau $\\Delta H_{\\text{sub}}^\\circ$ jika melibatkan fasa cair atau padat. |
| **$\\Delta H_{\\text{kisi}}$ (Kisi Ion)** | $- / +$ | Siklus Born-Haber ($\\oint dH = 0$) | Pembentukan kisi dari ion gas bernilai **negatif**; penguraian kristal kisi menjadi ion gas bernilai **positif**. |

---

### ⚡ Persamaan Inti Kalorimetri dan Konversi Termodinamika

* **Kalorimetri Tekanan Konstan (Coffee-Cup):**  
  $$q_{\\text{reaksi}} = -\\left(m_{\\text{larutan}} c_{\\text{larutan}} \\Delta T + C_{\\text{kal}} \\Delta T\\right) \\quad \\text{dan} \\quad \\Delta H = \\frac{q_{\\text{reaksi}}}{n_{\\text{pembatas}}}$$

* **Kalorimetri Volume Konstan (Bom):**  
  $$q_{\\text{reaksi}} = -C_{\\text{bom}} \\Delta T \\quad \\text{dan} \\quad \\Delta U = \\frac{q_{\\text{reaksi}}}{n}$$

* **Konversi $\\Delta U$ dan $\\Delta H$ Reaksi Gas Ideal:**  
  $$\\Delta H = \\Delta U + \\Delta n_{\\text{gas}}RT \\quad \\text{dengan } R = 8,314 \\times 10^{-3}\\text{ kJ mol}^{-1}\\text{K}^{-1}$$

* **Persamaan Kirchhoff:**  
  $$\\Delta H_{T_2}^\\circ = \\Delta H_{T_1}^\\circ + \\Delta C_P^\\circ(T_2 - T_1) \\quad \\text{(pastikan satuan } \\Delta C_P^\\circ \\text{ telah disamakan ke dalam } \\text{kJ K}^{-1}\\text{mol}^{-1}\\text{)}$$`,
      keyFormulas: [
        { name: 'Kalorimeter Tekanan Konstan', formula: 'q_{\\text{reaksi}} = -(m c \\Delta T + C_{\\text{kal}}\\Delta T)' },
        { name: 'Kalorimeter Bom Volume Konstan', formula: 'q_{\\text{reaksi}} = -C_{\\text{bom}}\\Delta T, \\quad \\Delta U = \\frac{q}{n}' },
        { name: 'Konversi Entalpi - Energi Dalam', formula: '\\Delta H = \\Delta U + \\Delta n_{\\text{gas}} RT' },
        { name: 'Persamaan Kirchhoff', formula: '\\Delta H_{T_2}^\\circ = \\Delta H_{T_1}^\\circ + \\Delta C_P^\\circ (T_2 - T_1)' },
      ],
    },
  ],
};
