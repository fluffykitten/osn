/**
 * osnTopic07.ts
 * Topik 7: Elektrokimia & Potensial Sel
 * Jenjang: OSN / IChO
 * Standar Pedagogis: Tone Opsi A (Arsitektur 5 Lapis, Mental Model Hook, Scaffolded Logic, GitHub Callouts, & Checkpoint Quizzes)
 */

import type { MaterialItem } from '../../materialsData.ts';
import { CHECKPOINTS_TOPIC_OSN_07 } from '../../checkpoints/checkpointBankTopicOsn07.ts';

const RAW_OSN_TOPIC_7: MaterialItem = {
  id: 7,
  topic_number: 7,
  title: 'Elektrokimia & Potensial Sel',
  slug: 'elektrokimia-potensial-sel',
  category: 'Kimia Fisik',
  level: 'OSN',
  readTimeMinutes: 38,
  summary: 'Kajian komprehensif termodinamika elektrokimia: penyetaraan redoks metode ion-elektron suasana asam/basa, hukum elektrolisis Faraday & efisiensi arus, sel volta/galvani, konvensi potensial reduksi standar SHE, persamaan Nernst multivariabel, relasi termodinamika sel (ΔG°, K_eq, ΔH°, ΔS° via koefisien suhu dE/dT), sel konsentrasi, penentuan Ksp potensiometri, diagram Latimer, diagram Frost, serta baterai dan korosi.',
  allTags: [
    'reaksi-redoks',
    'penyetaraan-redoks',
    'metode-setengah-reaksi',
    'bilangan-oksidasi',
    'suasana-asam-basa',
    'hukum-faraday',
    'elektrolisis',
    'stoikiometri-elektron',
    'efisiensi-arus',
    'aspek-kuantitatif-elektrolisis',
    'sel-galvani',
    'elektroda-hidrogen-standar-she',
    'potensial-reduksi-standar',
    'deret-volta',
    'spontanitas-redoks',
    'termodinamika-sel',
    'energi-bebas-gibbs',
    'tetapan-kesetimbangan-k',
    'koefisien-temperatur-dE-dT',
    'entalpi-entropi-sel',
    'persamaan-nernst',
    'potensial-non-standar',
    'kuosien-reaksi-q',
    'ketergantungan-ph',
    'aktivitas-larutan',
    'sel-konsentrasi',
    'potensiometri-ksp',
    'elektroda-pemilih-ion',
    'penentuan-ph-potensiometri',
    'gradien-konsentrasi',
    'diagram-latimer',
    'diagram-frost',
    'disproporsionasi',
    'komproporsionasi',
    'stabilitas-redoks',
    'sel-primer-sekunder',
    'baterai-litium-ion',
    'lead-acid-accumulator',
    'korosi-elektrokimia',
    'proteksi-katodik',
    'soal-penyetaraan-redoks',
    'soal-hukum-faraday',
    'soal-termodinamika-sel',
    'soal-sel-agcl',
    'soal-diagram-latimer-frost',
    'soal-osk',
    'soal-osp',
    'soal-osn',
    'titrasi-redoks',
    'analisis-etanol',
    'spesies-mangan',
    'elektrokimia',
    'nernst',
    'ksp',
    'potensial-sel',
    'potensial-reduksi',
    'ggl-sel',
    'aktivitas-ion',
    'penentuan-ksp-potensiometri',
    'ksp-elektrokimia',
    'sel-galvani-agcl',
  ],
  prerequisites: [
    {
      tag: 'prasyarat-penyetaraan-redoks-ion-elektron',
      tags: ['reaksi-redoks', 'penyetaraan-redoks', 'metode-setengah-reaksi', 'bilangan-oksidasi', 'suasana-asam-basa'],
      title: 'Prasyarat 1: Penyetaraan Reaksi Redoks Kompleks Metode Ion-Elektron (Setengah Reaksi) Suasana Asam & Basa',
      summary: 'Prosedur sistematis penyeimbangan massa dan muatan melalui setengah reaksi oksidasi dan reduksi pada berbagai kondisi keasaman medium.',
      content: `### 1. Intuitive Mental Model Hook: Akuntansi Pajak Muatan Elektron & Permainan Neraca Redoks
Bayangkan sebuah transaksi perbankan internasional. Tidak ada sepeser uang pun yang boleh menguap hilang di udara: setiap dolar yang didebit dari rekening penjual (oksidasi, melepas elektron) harus tertera persis di rekening pembeli (reduksi, menerima elektron).

Dalam dunia reaksi redoks, elektron adalah mata uang semesta. Atom-atom saling bertukar elektron untuk mencapai konfigurasi kulit yang lebih stabil. Penyetaraan metode setengah reaksi (*ion-elektron*) adalah sistem pembukuan akuntansi ganda yang paling kokoh: kita memecah reaksi rumit menjadi dua buku kas terpisah—kas oksidasi dan kas reduksi—menyetarakan atom materi dan muatan listrik di masing-masing buku, lalu mengalikan kedua buku dengan faktor pengali KPK agar debit elektron persis mengimbangi kredit elektron!

---

### 2. Scaffolded Step-by-Step Logic: Prosedur Sistematis Metode Ion-Elektron

#### Langkah 1: Penyetaraan dalam Suasana Asam ($[\ce{H+}] > 0$)
1. **Identifikasi & Pemisahan:** Tentukan unsur yang mengalami perubahan bilangan oksidasi, lalu pisahkan reaksi menjadi dua setengah reaksi: oksidasi dan reduksi.
2. **Setarakan Atom Utama:** Setarakan jumlah atom unsur yang mengalami perubahan biloks (selain $\ce{O}$ dan $\ce{H}$).
3. **Setarakan Atom Oksigen ($\ce{O}$):** Tambahkan molekul air ($\\ce{H2O}$) pada sisi yang kekurangan atom oksigen.
4. **Setarakan Atom Hidrogen ($\ce{H}$):** Tambahkan ion hidronium ($\\ce{H+}$) pada sisi yang kekurangan atom hidrogen.
5. **Setarakan Muatan Listrik:** Hitung muatan netto di kedua ruas, lalu tambahkan elektron ($e^-$) pada sisi yang muatan aljabarnya lebih positif.
6. **Penyamaan Elektron (KPK):** Kalikan kedua setengah reaksi dengan bilangan bulat terkecil agar jumlah elektron yang dilepas sama persis dengan yang ditangkap.
7. **Penjumlahan & Reduksi:** Jumlahkan kedua reaksi dan eliminasi spesi yang muncul di kedua sisi (elektron saling meniadakan habis).

*Contoh Rigor:* Oksidasi etanol oleh ion dikromat:
- Oksidasi: $\\ce{CH3CH2OH + H2O -> CH3COOH + 4H+ + 4e-}$
- Reduksi: $\\ce{Cr2O7^2- + 14H+ + 6e- -> 2Cr^3+ + 7H2O}$
KPK elektron $4$ dan $6$ adalah $12$:
$$3(\\ce{CH3CH2OH + H2O -> CH3COOH + 4H+ + 4e-})$$
$$2(\\ce{Cr2O7^2- + 14H+ + 6e- -> 2Cr^3+ + 7H2O})$$
Reaksi Bersih Setara:
$$\\mathbf{\\ce{2Cr2O7^2- + 3CH3CH2OH + 16H+ -> 4Cr^3+ + 3CH3COOH + 11H2O}}$$

#### Langkah 2: Konversi ke Suasana Basa ($[\ce{OH-}] > 0$)
Lakukan penyetaraan lengkap menggunakan prosedur suasana asam di atas (Langkah 1). Setelah memperoleh persamaan setara yang memuat ion $\\ce{H+}$:
1. Tambahkan ion $\\ce{OH-}$ pada **KEDUA RUAS** dalam jumlah yang sama persis dengan jumlah ion $\\ce{H+}$.
2. Di ruas yang memiliki $\\ce{H+}$ dan $\\ce{OH-}$, gabungkan keduanya menjadi molekul air:
   $$\\ce{H+ + OH- -> H2O}$$
3. Eliminasi molekul $\\ce{H2O}$ yang muncul berlebih di kedua ruas.

#### Langkah 3: Reaksi Disproporsionasi (Autoredoks) vs Komproporsionasi
- **Disproporsionasi:** Satu spesi tunggal bertindak sekaligus sebagai oksidator dan reduktor menghasilkan dua spesi dengan bilangan oksidasi lebih tinggi dan lebih rendah:
  $$\\ce{Cl2(g) + 2OH-(aq) -> Cl-(aq) + ClO-(aq) + H2O(l)} \\quad (\\text{Biloks Cl: } 0 \\to -1 \\text{ dan } +1)$$
- **Komproporsionasi (Simproporsionasi):** Dua spesi dengan bilangan oksidasi berbeda bereaksi menghasilkan satu spesi dengan tingkat oksidasi menengah yang seragam:
  $$\\ce{IO3-(aq) + 5I-(aq) + 6H+(aq) -> 3I2(s) + 3H2O(l)} \\quad (\\text{Biloks I: } +5 \\text{ dan } -1 \\to 0)$$

---

### 3. High-Contrast Visual Matrix: Diagnostik Penyetaraan Redoks Asam vs Basa

| Parameter Penyetaraan | Suasana Asam ($\text{pH} < 7$) | Suasana Basa ($\text{pH} > 7$) |
| :--- | :--- | :--- |
| **Spesi Penyeimbang Oksigen** | Tambahkan $\\ce{H2O}$ di sisi kekurangan $\\ce{O}$ | Tambahkan $\\ce{H2O}$ di sisi kelebihan $\\ce{O}$ (atau via rute asam) |
| **Spesi Penyeimbang Hidrogen**| Tambahkan ion $\\ce{H+}$ | Tambahkan ion $\\ce{OH-}$ |
| **Penyeimbang Muatan Listrik**| Tambahkan elektron ($e^-$) di sisi lebih positif | Tambahkan elektron ($e^-$) di sisi lebih positif |
| **Spesi Terlarang Muncul** | Ion hidroksida $\\ce{OH-}$ tidak boleh muncul bebas | Ion hidronium $\\ce{H+}$ tidak boleh muncul bebas |

---

### 4. Official GitHub Callouts

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Kesalahan Fatal Penyetaraan Suasana Basa
> Banyak siswa mencoba menyetarakan suasana basa secara langsung dengan menambahkan ion oksida ($\\ce{O^2-}$) atau menebak-nebak posisi $\\ce{OH-}$.
> **Metode Anti-Gagal:** Selalu setarakan reaksi seolah-olah dalam suasana asam hingga selesai dan elektron saling membagi habis. Baru di langkah terakhir, netralkan seluruh ion $\\ce{H+}$ dengan menambahkan $\\ce{OH-}$ ke **kedua ruas**. Cara ini 100% bebas salah dan mencegah kekacauan neraca muatan!

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Trik KPK Transfer Elektron Cepat
> Pada soal ujian berbasis pilihan ganda berbatas waktu:
> - Hitung perubahan total biloks oksidasi ($\\Delta \\text{biloks}_{\\text{oks}}$) dan reduksi ($\\Delta \\text{biloks}_{\\text{red}}$).
> - Nilai $\\Delta \\text{biloks}$ ini langsung menjadi faktor pengali silang koefisien reaktan!
> - *Contoh:* $\\ce{Cr2O7^2-} (+12 \\to +6, \\Delta = 6)$ dan $\\ce{Fe^2+} (+2 \\to +3, \\Delta = 1)$. Rasio koefisien langsung $1 : 6$ tanpa perlu menulis setengah reaksi panjang.`,
      keyFormulas: [
        { name: 'Neraca Massa dan Muatan Redoks', formula: '\\sum e^-_{\\text{dilepas}} = \\sum e^-_{\\text{ditangkap}}' },
        { name: 'Konversi Asam ke Basa', formula: '\\ce{H+ + OH- -> H2O}' },
      ],
    },
    {
      tag: 'prasyarat-hukum-elektrolisis-faraday',
      tags: ['hukum-faraday', 'elektrolisis', 'stoikiometri-elektron', 'efisiensi-arus', 'aspek-kuantitatif-elektrolisis'],
      title: 'Prasyarat 2: Aspek Kuantitatif Elektrolisis, Hukum Faraday I & II, serta Efisiensi Arus',
      summary: 'Hubungan fundamental kuantitas muatan listrik dengan massa zat terendapkan, stoikiometri elektron, dan persaingan potensial elektroda dalam larutan.',
      content: `### 1. Intuitive Mental Model Hook: Gerbang Tol Elektron & Pabrik Pemurnian Logam Faraday
Bayangkan sebuah pabrik perakitan mobil listrik yang membutuhkan tepat 4 buah ban untuk setiap 1 unit mobil yang diproduksi. Jika seorang kurir mengantarkan 400 ban ke pabrik, Anda tahu pasti bahwa pabrik dapat menyelesaikan tepat 100 unit mobil.

Michael Faraday (1834) merumuskan bahwa elektron di dalam larutan elektrolisis bertindak persis seperti suku cadang kendaraan tersebut. Untuk mengendapkan 1 mol logam natrium monovalen ($\ce{Na+}$), dibutuhkan 1 mol elektron ($z=1$). Untuk mengendapkan 1 mol tembaga bivalen ($\ce{Cu^2+}$), dibutuhkan 2 mol elektron ($z=2$). Arus listrik yang mengalir melalui kawat adalah debit aliran elektron per detik, dan konstanta Faraday adalah jembatan konversi kuantum yang menghubungkan muatan listrik Coulomb dengan timbangan gram makroskopis!

---

### 2. Scaffolded Step-by-Step Logic: Hukum Faraday & Persaingan Reaksi Elektroda

#### Langkah 1: Formulasi Hukum Faraday I & II
1. **Kuantitas Muatan Listrik ($Q$):**
   $$Q = I \\cdot t$$
   di mana $I$ adalah kuat arus listrik (Ampere, $\text{A} = \text{C/s}$) dan $t$ adalah durasi waktu elektrolisis (detik, $\text{s}$).
2. **Konstanta Faraday ($F$):** Muatan listrik dari satu mol elektron:
   $$F = N_A \\cdot e = (6.02214 \\times 10^{23}\\text{ mol}^{-1}) \\times (1.60218 \\times 10^{-19}\\text{ C}) = \\mathbf{96,485.3\\text{ C/mol } e^-} \\approx 96,485\\text{ C/mol}$$
3. **Stoikiometri Mol Elektron ($n_{e^-}$):**
   $$n_{e^-} = \\frac{Q}{F} = \\frac{I \\cdot t}{F}$$
4. **Massa Zat Terdeposisi ($m$):**
   Jika reaksi elektroda membutuhkan transfer $z$ elektron per partikel produk:
   $$n_{\\text{zat}} = \\frac{n_{e^-}}{z} = \\frac{I \\cdot t}{z \\cdot F}$$
   $$\\mathbf{m = \\frac{M_r \\cdot I \\cdot t}{z \\cdot F}}$$
   di mana $M_r$ adalah massa molar zat ($\text{g/mol}$) dan $z$ adalah valensi transfer elektron.

#### Langkah 2: Efisiensi Arus Listrik (Current Efficiency $\eta$)
Dalam dunia industri nyata, sebagian arus listrik sering kali terbuang untuk reaksi samping yang tidak diinginkan (seperti reduksi proton pelarut menjadi gas hidrogen parasitik):
$$\\mathbf{\\eta = \\frac{m_{\\text{aktual}}}{m_{\\text{teoritis}}} \\times 100\\% = \\frac{Q_{\\text{efektif}}}{Q_{\\text{total}}} \\times 100\\%}$$

#### Langkah 3: Aturan Persaingan Termodinamika di Elektroda Larutan Berair
Di dalam medium air, molekul pelarut $\\ce{H2O}$ dapat ikut bersaing bereaksi:
- **Di Katoda (Kutub Negatif - Reaksi Reduksi):**
  Spesi dengan **potensial reduksi paling positif** akan tereduksi terlebih dahulu:
  - Kation logam sangat aktif (Golongan 1, Golongan 2, $\\ce{Al^3+}, \\ce{Mn^2+}$ dengan $E^\\circ < -1.18\\text{ V}$) **tidak tereduksi** dalam air; molekul airlah yang tereduksi:
    $$\\ce{2H2O(l) + 2e- -> H2(g) + 2OH-(aq)} \\quad (E = -0.828\\text{ V pada pH 7})$$
  - Kation asam hidrogen ($\\ce{H+}$) atau kation logam transisi ($\ce{Cu^2+}, \ce{Ag+}, \ce{Au^3+}, \ce{Ni^2+}$) memiliki potensial lebih positif dibanding air, sehingga kation tersebut tereduksi membentuk endapan logam murni.
- **Di Anoda (Kutub Positif - Reaksi Oksidasi):**
  - **Elektroda Inert ($\\ce{Pt, C/grafit, Au}$):** Anion sisa asam oksi berkadar oksidasi maksimum ($\\ce{SO4^2-}, \\ce{NO3-}, \\ce{ClO4-}$) **tidak teroksidasi**; molekul air yang teroksidasi:
    $$\\ce{2H2O(l) -> O2(g) + 4H+(aq) + 4e-} \\quad (E = +0.815\\text{ V pada pH 7})$$
  - Ion halida bebas ($\\ce{2I- -> I2 + 2e-}, \\ce{2Cl- -> Cl2 + 2e-}$) teroksidasi menjadi halogen bebasnya.
  - **Elektroda Non-Inert / Aktif ($\\ce{Cu, Ni, Ag, Zn}$):** Logam anoda itu sendiri yang larut teroksidasi:
    $$\\ce{M(s) -> M^{z+}(aq) + z e-}$$

---

### 3. High-Contrast Visual Matrix: Diagnostik Produk Elektrolisis Larutan Berair

| Jenis Elektrolit | Jenis Elektroda | Produk di Katoda (Reduksi) | Produk di Anoda (Oksidasi) | Perubahan pH Sekitar Elektroda |
| :--- | :--- | :--- | :--- | :--- |
| **$\\ce{NaCl(aq)}$ encer** | Inert (Pt/C) | **Gas $\\ce{H2}$** (Reduksi $\\ce{H2O}$) | **Gas $\\ce{Cl2}$** (Oksidasi $\\ce{Cl-}$) | Katoda basa ($\\ce{OH-}$), Anoda asam |
| **$\\ce{CuSO4(aq)}$** | Inert (Pt/C) | **Endapan Logam $\\ce{Cu}$** | **Gas $\\ce{O2}$** (Oksidasi $\\ce{H2O}$) | Anoda menjadi sangat asam ($\\ce{H+}$) |
| **$\\ce{Na2SO4(aq)}$** | Inert (Pt/C) | **Gas $\\ce{H2}$** (Reduksi $\\ce{H2O}$) | **Gas $\\ce{O2}$** (Oksidasi $\\ce{H2O}$) | Elektrolisis air murni bersih ($2\\ce{H2O} \\to 2\\ce{H2} + \\ce{O2}$) |
| **$\\ce{CuSO4(aq)}$** | Anoda Aktif (Cu) | **Endapan Logam $\\ce{Cu}$** | **Anoda $\\ce{Cu}$ larut ($\\ce{Cu^2+}$)** | pH konstan; proses elektrorefining |

---

### 4. Official GitHub Callouts

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Valensi Elektron per Mol Molekul Gas Diatomik
> Saat menghitung volume gas yang dibebaskan pada elektrolisis via hukum Faraday:
> - **Gas Hidrogen ($\\ce{H2}$):** $\\ce{2H+ + 2e- -> H2} \\implies z = \\mathbf{2\\text{ elektron per mol } \\ce{H2}}$.
> - **Gas Klorin ($\\ce{Cl2}$):** $\\ce{2Cl- -> Cl2 + 2e-} \\implies z = \\mathbf{2\\text{ elektron per mol } \\ce{Cl2}}$.
> - **Gas Oksigen ($\\ce{O2}$):** $\\ce{2H2O -> O2 + 4H+ + 4e-} \\implies z = \\mathbf{4\\text{ elektron per mol } \\ce{O2}}$!
> Peserta sering lupa menggunakan $z = 4$ untuk $\\ce{O2}$, sehingga volume oksigen terhitung melipat ganda dua kali lipat dari nilai riilnya.

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Rasio Volume Gas Elektrolisis Air
> Pada elektrolisis larutan garam dengan kation sukar tereduksi dan anion sisa asam oksi (seperti $\\ce{Na2SO4}$ atau $\\ce{KNO3}$):
> - Katoda: $\\ce{4H2O + 4e- -> 2H2 + 4OH-}$ ($2\\text{ mol } \\ce{H2}$)
> - Anoda: $\\ce{2H2O -> O2 + 4H+ + 4e-}$ ($1\\text{ mol } \\ce{O2}$)
> Karena arus dan waktu yang mengalir pada kedua elektroda identik:
> $$\\mathbf{\\frac{V_{\\ce{H2}}}{V_{\\ce{O2}}} = 2 : 1}$$
> Volume gas hidrogen di katoda selalu tepat dua kali lipat volume gas oksigen di anoda!`,
      keyFormulas: [
        { name: 'Hukum Elektrolisis Faraday', formula: 'm = \\frac{M_r \\cdot I \\cdot t}{z \\cdot F}' },
        { name: 'Efisiensi Arus Listrik', formula: '\\eta = \\frac{m_{\\text{aktual}}}{m_{\\text{teoritis}}} \\times 100\\%' },
        { name: 'Mol Gas Terbebas', formula: 'n_{\\text{gas}} = \\frac{I \\cdot t}{z \\cdot F}' },
      ],
    },
    {
      tag: 'prasyarat-sel-galvani-standar-she',
      tags: ['sel-galvani', 'elektroda-hidrogen-standar-she', 'potensial-reduksi-standar', 'deret-volta', 'spontanitas-redoks'],
      title: 'Prasyarat 3: Desain Sel Galvani (Volta), Notasi Sel IUPAC, & Elektroda Hidrogen Standar (SHE)',
      summary: 'Anatomi sel galvani, jembatan garam, konvensi diagram garis IUPAC, penentuan potensial reduksi standar relatif terhadap SHE, dan Deret Volta.',
      content: `### 1. Intuitive Mental Model Hook: Dua Wadah Air Terjun Gravitasi & Jembatan Garam
Bayangkan dua danau di ketinggian tebing yang berbeda. Danau atas memiliki energi potensial gravitasi tinggi, dan danau bawah memiliki energi potensial rendah. Jika Anda menghubungkan kedua danau dengan pipa air, air akan mengalir deras ke bawah memutar kincir turbin generator listrik.

Sel Galvani (Volta) adalah air terjun potensial kimia elektron. Di kompartemen anoda, logam yang mudah melepaskan elektron bertindak sebagai danau atas. Di kompartemen katoda, kation yang haus elektron bertindak sebagai danau bawah. Perbedaan "ketinggian" potensial listrik inilah yang kita baca pada voltmeter sebagai **Gaya Gerak Listrik (GGL / *Electromotive Force*)**. Jembatan garam bertindak sebagai kanal pengimbang muatan agar tidak terjadi penumpukan muatan lokal yang dapat menghentikan aliran elektron seketika.

---

### 2. Scaffolded Step-by-Step Logic: Notasi IUPAC, SHE, & Deret Volta

#### Langkah 1: Anatomi Sel Galvani & Kutub Elektroda
1. **Anoda (Kutub Negatif $-$):** Elektroda tempat berlangsungnya reaksi **oksidasi** (pelepasan elektron). Elektron mengalir keluar dari anoda menuju sirkuit kawat luar.
2. **Katoda (Kutub Positif $+$):** Elektroda tempat berlangsungnya reaksi **reduksi** (penangkapan elektron). Elektron dari sirkuit luar masuk ke katoda untuk mereduksi kation larutan.
3. **Jembatan Garam (*Salt Bridge*):** Tabung berisi elektrolit inert (misal $\\ce{KNO3}$ atau $\\ce{KCl}$ dalam gel agar-agar) yang menghubungkan kedua larutan:
   - Mengalirkan anion ke anoda untuk menetralkan kation baru yang larut.
   - Mengalirkan kation ke katoda untuk menggantikan kation yang telah mengendap.
   - Mencegah timbulnya potensial sambungan cair (*liquid junction potential*).

#### Langkah 2: Konvensi Notasi Diagram Garis Sel IUPAC
Diagram sel dituliskan berurutan dari kiri (anoda) ke kanan (katoda):
$$\\mathbf{\\ce{Anoda | Batas Fasa || Batas Fasa | Katoda}}$$
- Tanda garis vertikal tunggal ($|$) melambangkan batas antarfasa (misal padat/larutan: $\\ce{Zn(s) | Zn^2+(aq)}$).
- Tanda garis vertikal ganda ($||$) melambangkan jembatan garam pemisah kompartemen.
- *Contoh Sel Daniell Standar:*
  $$\\ce{Zn(s) | Zn^2+(aq, 1.0 M) || Cu^2+(aq, 1.0 M) | Cu(s)}$$

#### Langkah 3: Elektroda Hidrogen Standar (Standard Hydrogen Electrode / SHE)
Karena potensial elektroda tunggal mutlak tidak dapat diukur secara langsung, IUPAC menetapkan SHE sebagai patokan nol universal pada semua temperatur:
$$\\ce{Pt(s) | H2(g, 1.0 bar) | H+(aq, a = 1.0)} \\implies \\mathbf{E^\\circ \\equiv 0.000\\text{ V}}$$
Setiap elektroda logam yang dihubungkan dengan SHE akan menghasilkan nilai potensial sel terukur yang langsung didefinisikan sebagai **Potensial Reduksi Standar ($E^\\circ$)** dari logam tersebut.

#### Langkah 4: Potensial Sel Standar ($E^\\circ_{\\text{sel}}$) & Prediksi Kespontanan
$$E^\\circ_{\\text{sel}} = E^\\circ_{\\text{katoda}} - E^\\circ_{\\text{anoda}} = E^\\circ_{\\text{reduksi}} - E^\\circ_{\\text{oksidasi}}$$
di mana seluruh nilai $E^\\circ$ dilaporkan sebagai potensial reduksi standar IUPAC.
- **$E^\\circ_{\\text{sel}} > 0$ (Positif):** Reaksi redoks berlangsung **spontan** pada kondisi standar ($\\Delta G^\\circ < 0$).
- **$E^\\circ_{\\text{sel}} = 0$:** Sistem berada dalam kesetimbangan dinamis sempurna.
- **$E^\\circ_{\\text{sel}} < 0$ (Negatif):** Reaksi non-spontan (reaksi balik yang berlangsung spontan).

**Deret Volta (Urutan Daya Mereduksi Kuat $\\to$ Lemah):**
$$\\ce{Li - K - Ba - Ca - Na - Mg - Al - Mn - Zn - Cr - Fe - Ni - Sn - Pb - (H) - Cu - Hg - Ag - Pt - Au}$$
- Semakin ke kiri: $E^\\circ$ semakin negatif, semakin mudah teroksidasi (reduktor semakin perkasa).
- Semakin ke kanan: $E^\\circ$ semakin positif, semakin mudah tereduksi (oksidator semakin perkasa). Logam sebelah kiri dapat mendesak/mereduksi ion logam sebelah kanannya.

---

### 3. High-Contrast Visual Matrix: Perbandingan Sel Galvani vs Sel Elektrolisis

| Parameter Karakteristik | Sel Galvani (Volta) | Sel Elektrolisis |
| :--- | :--- | :--- |
| **Arah Transformasi Energi** | Energi Kimia $\\to$ Energi Listrik | Energi Listrik $\\to$ Energi Kimia |
| **Kespontanan Termodinamika** | Spontan ($\\Delta G < 0, E_{\\text{sel}} > 0$) | Non-spontan ($\\Delta G > 0, E_{\\text{sel}} < 0$) |
| **Kutub Anoda (Oksidasi)** | **Kutub Negatif ($-$)** | **Kutub Positif ($+$)** |
| **Kutub Katoda (Reduksi)** | **Kutub Positif ($+$)** | **Kutub Negatif ($-$)** |
| **Arah Aliran Elektron** | Mengalir spontan dari anoda ke katoda | Dipaksa pompa luar dari anoda ke katoda |

---

### 4. Official GitHub Callouts

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Potensial Sel adalah Besaran Intensif
> "Jika persamaan setengah reaksi dikalikan koefisien 2, apakah nilai $E^\\circ$ harus dikalikan 2?"
> **TIDAK PERNAH!** Potensial elektroda ($E^\\circ$) adalah besaran intensif (rasio energi bebas per satuan muatan, $\\text{J/C}$). Mengalikan koefisien reaksi setara dengan bilangan berapa pun **sama sekali tidak mengubah nilai $E^\\circ$**. Hanya besaran ekstensif seperti $\\Delta G^\\circ$ dan $\\Delta H^\\circ$ yang ikut dikalikan!

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Rumus Spontanitas Tanpa Menghafal Posisi
> Untuk menentukan apakah reaksi redoks sembarang berlangsung spontan:
> 1. Cari spesi yang mengalami reduksi $\\implies E^\\circ_{\\text{reduksi}}$.
> 2. Cari spesi yang mengalami oksidasi $\\implies E^\\circ_{\\text{oksidasi}}$.
> 3. Hitung langsung selisihnya:
>    $$\\mathbf{E^\\circ_{\\text{sel}} = E^\\circ_{\\text{reduksi}} - E^\\circ_{\\text{oksidasi}}}$$
> Jika hasilnya bernilai positif ($E^\\circ_{\\text{sel}} > 0$), reaksi dijamin pasti berlangsung spontan!`,
      keyFormulas: [
        { name: 'Potensial Sel Standar', formula: 'E^\\circ_{\\text{sel}} = E^\\circ_{\\text{katoda}} - E^\\circ_{\\text{anoda}}' },
        { name: 'Kespontanan Reaksi Elektrokimia', formula: '\\Delta G^\\circ = -nFE^\\circ_{\\text{sel}} < 0 \\iff E^\\circ_{\\text{sel}} > 0' },
      ],
    },
  ],
  core_concepts: [
    {
      tag: 'konsep-termodinamika-elektrokimia-gibbs',
      tags: ['termodinamika-sel', 'energi-bebas-gibbs', 'tetapan-kesetimbangan-k', 'koefisien-temperatur-dE-dT', 'entalpi-entropi-sel'],
      title: 'Konsep Inti 1: Termodinamika Elektrokimia: Relasi Gibbs (ΔG°), Tetapan Kesetimbangan (K), & Koefisien Suhu (dE/dT)',
      summary: 'Koneksi fundamental potensial sel dengan fungsi termodinamika Gibbs, entropi reaksi elektrokimia dari koefisien temperatur, serta pertukaran kalor reversibel.',
      content: `### 1. Intuitive Mental Model Hook: Baterai Reversibel Carnot & Termometer Entropi Maxwell
Bayangkan sebuah aki mobil canggih yang bekerja secara reversibel sempurna tanpa gesekan internal. Saat aki menghasilkan arus listrik memutar motor, voltasenya tidak hanya mencerminkan energi bebas reaksi kimia yang dilepaskan, melainkan juga berfluktuasi secara halus terhadap suhu lingkungan.

Hubungan Maxwell dalam termodinamika membuktikan sesuatu yang menakjubkan: dengan mengukur bagaimana voltase sel berubah terhadap temperatur ($\frac{dE}{dT}$), kita dapat "mengintip" secara langsung perubahan entropi ($\\Delta S$) dan perubahan entalpi ($\\Delta H$) reaksi kimia tanpa memerlukan kalorimeter! Potensial sel adalah jendela eksperimental paling jernih menuju seluruh fungsi termodinamika alam semesta.

---

### 2. Scaffolded Step-by-Step Logic: Relasi Fundamental Termodinamika Sel

#### Langkah 1: Koneksi Energi Bebas Gibbs & Tetapan Kesetimbangan
Kerja listrik non-ekspansi maksimum yang dapat dihasilkan oleh sel elektrokimia reversibel sama dengan penurunan energi bebas Gibbs:
$$W_{\\text{elek, max}} = \\Delta G = -nFE_{\\text{sel}}$$
Pada kondisi standar termodinamika ($T = 298.15\\text{ K}, P = 1\\text{ bar}, a = 1.0\\text{ M}$):
$$\\mathbf{\\Delta G^\\circ = -nFE^\\circ_{\\text{sel}}}$$
Karena $\\Delta G^\\circ = -RT \\ln K$:
$$-nFE^\\circ_{\\text{sel}} = -RT \\ln K \\iff \\mathbf{E^\\circ_{\\text{sel}} = \\frac{RT}{nF} \\ln K}$$
Pada temperatur laboratorium $25.0^\\circ\\text{C}$ ($298.15\\text{ K}$):
$$\\frac{2.302585 \\times R \\times T}{F} = \\frac{2.302585 \\times 8.31446 \\times 298.15}{96485.3} = 0.05916\\text{ V}$$
$$\\mathbf{E^\\circ_{\\text{sel}} = \\frac{0.05916}{n} \\log_{10} K \\iff K = 10^{\\frac{n E^\\circ_{\\text{sel}}}{0.05916}}}$$

#### Langkah 2: Koefisien Temperatur Potensial Sel & Entropi Reaksi ($\\Delta S$)
Berdasarkan hubungan diferensial fundamental Gibbs:
$$dG = -S dT + V dP \\implies \\left(\\frac{\\partial \\Delta G}{\\partial T}\\right)_P = -\\Delta S$$
Substitusikan $\\Delta G = -nFE_{\\text{sel}}$:
$$\\left(\\frac{\\partial (-nFE_{\\text{sel}})}{\\partial T}\\right)_P = -\\Delta S \\implies -nF \\left(\\frac{\\partial E_{\\text{sel}}}{\\partial T}\\right)_P = -\\Delta S$$
$$\\mathbf{\\Delta S = nF \\left(\\frac{\\partial E_{\\text{sel}}}{\\partial T}\\right)_P}$$
di mana $\\left(\\frac{\\partial E_{\\text{sel}}}{\\partial T}\\right)_P$ adalah **koefisien temperatur potensial sel** (satuan $\\text{V/K}$).

#### Langkah 3: Entalpi Reaksi Elektrokimia ($\\Delta H$) & Kalor Reversibel ($q_{\\text{rev}}$)
Dari definisi termodinamika $\\Delta G = \\Delta H - T\\Delta S$:
$$\\Delta H = \\Delta G + T\\Delta S = -nFE_{\\text{sel}} + nFT \\left(\\frac{\\partial E_{\\text{sel}}}{\\partial T}\\right)_P$$
$$\\mathbf{\\Delta H = -nF \\left[ E_{\\text{sel}} - T \\left(\\frac{\\partial E_{\\text{sel}}}{\\partial T}\\right)_P \\right]}$$

Kalor yang dipertukarkan secara reversibel antara sel dengan lingkungan selama operasi isotermal:
$$q_{\\text{rev}} = T \\Delta S = nFT \\left(\\frac{\\partial E_{\\text{sel}}}{\\partial T}\\right)_P$$
- Jika $\\left(\\frac{\\partial E}{\\partial T}\\right)_P > 0$: $\\Delta S > 0 \\implies q_{\\text{rev}} > 0$. **Sel menyerap kalor dari lingkungan saat beroperasi!**
- Jika $\\left(\\frac{\\partial E}{\\partial T}\\right)_P < 0$: $\\Delta S < 0 \\implies q_{\\text{rev}} < 0$. **Sel melepaskan kalor eksotermik ke lingkungan.**

---

### 3. High-Contrast Visual Matrix: Diagnostik Hubungan Besaran Termodinamika Elektrokimia

| Nilai Potensial Sel ($E^\circ_{\text{sel}}$) | Perubahan Energi Bebas ($\Delta G^\circ$) | Tetapan Kesetimbangan ($K$) | Status Spontanitas Reaksi Redoks |
| :---: | :---: | :---: | :--- |
| **$E^\circ_{\text{sel}} > 0$** | **$\\Delta G^\circ < 0$ (Eksergonik)** | **$K > 1$** | Reaksi berlangsung **spontan** ke arah produk |
| **$E^\circ_{\text{sel}} = 0$** | **$\\Delta G^\circ = 0$ (Kesetimbangan)** | **$K = 1$** | Sistem berada dalam **kesetimbangan dinamis sempurna** |
| **$E^\circ_{\text{sel}} < 0$** | **$\\Delta G^\circ > 0$ (Endergonik)** | **$K < 1$** | Reaksi maju **non-spontan**; reaksi balik yang spontan |

---

### 4. Official GitHub Callouts

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Tanda Kalor Reversibel Sel Elektrokimia
> Banyak siswa beranggapan keliru bahwa setiap baterai kimia yang menghasilkan arus listrik pasti menghasilkan pelepasan kalor (panas) ke lingkungan.
> **Koreksi Termodinamika:** Kalor yang dihasilkan oleh baterai riil terdiri atas dua komponen: kalor hambatan Joule ireversibel ($I^2 R$) dan kalor termodinamika reversibel ($q_{\\text{rev}} = T\\Delta S$). Pada sel elektrokimia reversibel dengan koefisien suhu positif $\\frac{\\partial E}{\\partial T} > 0$, perubahan entropinya positif ($\\Delta S > 0$), sehingga sel tersebut sebenarnya **menyerap kalor dari lingkungan** saat bekerja!

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Menghitung Tetapan K Super Raksasa
> Dalam reaksi kimia biasa, tetapan kesetimbangan bernilai $10^{30}$ atau $10^{-40}$ mustahil ditentukan secara langsung via titrasi atau spektrofotometri karena konsentrasi reaktan sisa berada di bawah batas deteksi instrumen.
> Namun melalui elektrokimia potensiometri, nilai $K = 10^{45}$ dapat dihitung dengan mudah dan akurat hanya dari pengukuran voltase voltmeter beberapa milivolt via formula $K = 10^{n E^\circ / 0.05916}$!`,
      keyFormulas: [
        { name: 'Relasi Energi Bebas Gibbs', formula: '\\Delta G^\\circ = -nFE^\\circ_{\\text{sel}}' },
        { name: 'Potensial Sel & Tetapan Kesetimbangan', formula: 'E^\\circ_{\\text{sel}} = \\frac{0.05916}{n}\\log K' },
        { name: 'Entropi Reaksi via Koefisien Suhu', formula: '\\Delta S = nF \\left(\\frac{\\partial E}{\\partial T}\\right)_P' },
        { name: 'Entalpi Reaksi Elektrokimia', formula: '\\Delta H = -nF \\left[ E - T \\left(\\frac{\\partial E}{\\partial T}\\right)_P \\right]' },
      ],
    },
    {
      tag: 'konsep-persamaan-nernst-multivariabel',
      tags: ['persamaan-nernst', 'potensial-non-standar', 'kuosien-reaksi-q', 'ketergantungan-ph', 'aktivitas-larutan'],
      title: 'Konsep Inti 2: Persamaan Nernst Non-Standar, Ketergantungan pH, & Potensial Reaksi Kompleks',
      summary: 'Formulasi voltase sel pada konsentrasi analit non-standar, modulasi potensial redoks oleh keasaman (pH), dan interpretasi diagram Pourbaix.',
      content: `### 1. Intuitive Mental Model Hook: Neraca Miring Nernst & Piston Tekanan Kimia Konsentrasi
Bayangkan sebuah balon gas yang dihubungkan dengan pompa. Ketika tekanan di dalam balon lebih tinggi daripada atmosfer luar, gas menyembur keluar secara spontan. Namun seiring keluarnya gas, tekanan internal merosot hingga akhirnya menyamai tekanan atmosfer luar, dan aliran udara pun berhenti total.

Persamaan Walther Nernst (1889) adalah termodinamika tekanan kimiawi tersebut. Potensial sel standar ($E^\circ$) hanyalah nilai referensi pada kondisi konsentrasi tiruan $1.0\text{ M}$. Di dunia nyata, voltase sel terus berubah secara dinamis seiring reaktan terkonsumsi dan produk menumpuk. Persamaan Nernst memprediksi dengan presisi bagaimana perubahan konsentrasi ion, tekanan parsial gas, dan keasaman larutan (pH) menggeser voltase sel menuju nol saat baterai habis!

---

### 2. Scaffolded Step-by-Step Logic: Penurunan Persamaan Nernst & Ketergantungan pH

#### Langkah 1: Penurunan Termodinamika Persamaan Nernst
Berdasarkan termodinamika potensial kimia:
$$\\Delta G = \\Delta G^\\circ + RT \\ln Q$$
Substitusikan relasi $\\Delta G = -nFE$ dan $\\Delta G^\\circ = -nFE^\\circ$:
$$-nFE = -nFE^\\circ + RT \\ln Q$$
Bagi seluruh suku dengan $-nF$:
$$\\mathbf{E = E^\\circ - \\frac{RT}{nF} \\ln Q}$$
Pada temperatur laboratorium standar $298.15\\text{ K}$ ($25.0^\\circ\\text{C}$):
$$\\mathbf{E = E^\\circ - \\frac{0.05916\\text{ V}}{n} \\log_{10} Q}$$
di mana:
- $n$: Jumlah mol elektron yang ditransfer dalam persamaan reaksi setara.
- $Q$: Kuosien reaksi redoks (rasio aktivitas produk terhadap reaktan).
- Padatan murni ($s$) dan cairan murni ($l$) memiliki aktivitas $a = 1$.
- Komponen gas dimasukkan dalam tekanan parsial (bar atau atm).

#### Langkah 2: Ketergantungan Potensial Reduksi Terhadap Keasaman (pH)
Jika suatu setengah reaksi reduksi melibatkan ion hidronium ($\\ce{H+}$):
$$\\ce{Ox + m H+ + n e- <=> Red + \\frac{m}{2} H2O}$$
Persamaan Nernst:
$$E = E^\\circ - \\frac{0.05916}{n} \\log\\left(\\frac{[\\ce{Red}]}{[\\ce{Ox}][\\ce{H+}]^m}\\right) = E^\\circ - \\frac{0.05916}{n} \\log\\left(\\frac{[\\ce{Red}]}{[\\ce{Ox}]}\\right) + \\frac{0.05916 \\cdot m}{n} \\log[\\ce{H+}]$$
Karena $\\text{pH} = -\\log[\\ce{H+}]$:
$$\\mathbf{E = E^\\circ - \\left(\\frac{0.05916 \\cdot m}{n}\\right) \\text{pH} - \\frac{0.05916}{n} \\log\\left(\\frac{[\\ce{Red}]}{[\\ce{Ox}]}\\right)}$$

*Analisis Kemiringan Kurva Potensial-pH:*
$$\\mathbf{\\frac{dE}{d\\text{pH}} = -0.05916 \\left(\\frac{m}{n}\\right) \\text{ V/pH}}$$
- Untuk reduksi $\\ce{O2(g) + 4H+ + 4e- -> 2H2O}$: $m/n = 4/4 = 1 \\implies \\frac{dE}{d\\text{pH}} = -59.2\\text{ mV/pH}$.
- Untuk reduksi permanganat $\\ce{MnO4- + 8H+ + 5e- -> Mn^2+ + 4H2O}$: $m/n = 8/5 = 1.6 \\implies \\frac{dE}{d\\text{pH}} = -94.7\\text{ mV/pH}$.
Potensial oksidasi permanganat anjlok drastis seiring kenaikan pH!

#### Langkah 3: Kondisi Mati Baterai (Kesetimbangan Dinamis $E_{\text{sel}} = 0$)
Saat baterai habis terpakai dan voltase voltmeter menunjukkan angka $0.000\text{ V}$:
$$E_{\\text{sel}} = 0 \\implies Q = K_{eq} \\implies \\Delta G = 0$$
Persamaan Nernst kembali ke bentuk kesetimbangan termodinamika standar:
$$0 = E^\\circ_{\\text{sel}} - \\frac{0.05916}{n}\\log K_{eq} \\iff E^\\circ_{\\text{sel}} = \\frac{0.05916}{n}\\log K_{eq}$$

---

### 3. High-Contrast Visual Matrix: Respons Potensial Reduksi Terhadap Keasaman Medium (pH)

| Pasangan Redoks Setengah Reaksi | Nilai $E^\circ$ (pada pH 0) | Kemiringan $\frac{dE}{d\text{pH}}$ | Nilai Potensial Riil pada pH Fisiologis (pH 7) | Sifat Oksidator |
| :--- | :---: | :---: | :---: | :--- |
| **$\\ce{MnO4- / Mn^2+}$** | $+1.51\\text{ V}$ | **$-94.7\\text{ mV/pH}$** | $+0.84\\text{ V}$ | Perkasa di asam kuat, sangat melemah di pH netral |
| **$\\ce{Cr2O7^2- / 2Cr^3+}$** | $+1.33\\text{ V}$ | **$-138.0\\text{ mV/pH}$** | $+0.36\\text{ V}$ | Kuat di asam pekat, tidak reaktif di suasana netral |
| **$\\ce{O2 / H2O}$** | $+1.23\\text{ V}$ | **$-59.2\\text{ mV/pH}$** | $+0.82\\text{ V}$ | Oksidator aerobik biologis standar |
| **$\\ce{Fe^3+ / Fe^2+}$** | $+0.77\\text{ V}$ | **$0.0\\text{ mV/pH}$** (independen) | $+0.77\\text{ V}$ | Tidak dipengaruhi oleh pH larutan |

---

### 4. Official GitHub Callouts

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Arti Hakiki Tegangan Baterai 0.00 V
> Jangan pernah mengasumsikan bahwa baterai yang voltasenya $0.00\\text{ V}$ berarti seluruh zat kimianya telah habis lenyap!
> Reaktan masih ada di dalam baterai, tetapi komposisinya telah mencapai kesetimbangan termodinamika ($Q = K$). Voltase nol berarti **energi bebas pendorong telah nol ($\\Delta G = 0$)**, bukan massa reaktan nol.

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Membaca Diagram Pourbaix (E vs pH)
> Pada diagram fasa elektrokimia Marcel Pourbaix:
> 1. **Garis Horizontal:** Reaksi murni transfer elektron tanpa melibatkan proton $\\ce{H+}$ (misal $\\ce{Fe^3+ + e- <=> Fe^2+}$).
> 2. **Garis Miring Turun:** Reaksi redoks yang melibatkan transfer elektron dan ion hidronium $\\ce{H+}$.
> 3. **Garis Vertikal:** Reaksi murni hidrolisis asam-basa tanpa transfer elektron (misal $\\ce{Fe^3+ + 3H2O <=> Fe(OH)3(s) + 3H+}$).`,
      keyFormulas: [
        { name: 'Persamaan Nernst Umum', formula: 'E = E^\\circ - \\frac{RT}{nF} \\ln Q' },
        { name: 'Persamaan Nernst pada 25°C', formula: 'E = E^\\circ - \\frac{0.05916}{n}\\log Q' },
        { name: 'Kemiringan Potensial terhadap pH', formula: '\\frac{dE}{d\\text{pH}} = -0.05916 \\left(\\frac{m}{n}\\right)' },
      ],
    },
    {
      tag: 'konsep-sel-konsentrasi-potensiometri',
      tags: ['sel-konsentrasi', 'potensiometri-ksp', 'elektroda-pemilih-ion', 'penentuan-ph-potensiometri', 'gradien-konsentrasi'],
      title: 'Konsep Inti 3: Sel Konsentrasi, Penentuan Ksp & Kf via Potensiometri, serta Elektroda Pemilih Ion (ISE)',
      summary: 'Prinsip sel konsentrasi tanpa beda potensial standar, aplikasi analisis kuantitatif ion trace, dan penentuan tetapan kesetimbangan kimia sangat kecil.',
      content: `### 1. Intuitive Mental Model Hook: Dua Bejana Berhubungan & Detektor Spionase Nanometrik
Bayangkan dua bejana air yang dihubungkan dengan pipa kapiler di dasarnya. Bejana kiri berisi air garam sangat pekat, sedangkan bejana kanan berisi air tawar encer. Secara spontan tanpa dorongan pompa luar, molekul garam akan berdifusi menembus membran kapiler dari tempat pekat ke tempat encer hingga kedua bejana memiliki salinitas yang sama persis.

Sel Konsentrasi adalah pemanen energi dari kecenderungan alamiah entropi difusi tersebut! Kedua kompartemen elektroda terbuat dari logam dan ion yang identik persis ($E^\circ_{\text{sel}} = 0$). Yang menggerakkan aliran elektron murni hanyalah gradien konsentrasi ion antara larutan encer dan larutan pekat. Karena voltmeter mampu membaca beda potensial hingga fraksi mikrovolt, kita dapat menggunakan sel konsentrasi sebagai detektor spionase untuk mengukur konsentrasi ion renik hingga batas $10^{-15}\text{ M}$!

---

### 2. Scaffolded Step-by-Step Logic: GGL Sel Konsentrasi & Potensiometri Ksp/Kf

#### Langkah 1: Prinsip Kerja Sel Konsentrasi
Perhatikan sel konsentrasi perak berikut:
$$\\ce{Ag(s) | Ag+(aq, encer) || Ag+(aq, pekat) | Ag(s)}$$
- **Anoda (Kompartemen Encer):** Berlangsung oksidasi untuk memproduksi lebih banyak ion perak:
  $$\\ce{Ag(s) -> Ag+(aq, encer) + e-}$$
- **Katoda (Kompartemen Pekat):** Berlangsung reduksi untuk mengonsumsi kelebihan ion perak:
  $$\\ce{Ag+(aq, pekat) + e- -> Ag(s)}$$
Reaksi Bersih Sel Konsentrasi:
$$\\ce{Ag+(aq, pekat) -> Ag+(aq, encer)}$$
Karena elektroda dan ion pada kedua kompartemen identik:
$$E^\\circ_{\\text{sel}} = E^\\circ(\\ce{Ag+/Ag}) - E^\\circ(\\ce{Ag+/Ag}) = \\mathbf{0.000\\text{ V}}$$
Berdasarkan Persamaan Nernst ($n = 1$):
$$E_{\\text{sel}} = 0 - \\frac{0.05916}{1} \\log\\left(\\frac{[\\ce{Ag+}]_{\\text{encer}}}{[\\ce{Ag+}]_{\\text{pekat}}}\\right) = \\mathbf{+0.05916 \\log\\left(\\frac{[\\ce{Ag+}]_{\\text{pekat}}}{[\\ce{Ag+}]_{\\text{encer}}}\\right)}$$
Karena $[\\ce{Ag+}]_{\\text{pekat}} > [\\ce{Ag+}]_{\\text{encer}}$, rasio konsentrasi $> 1$, menghasilkan voltase terukur positif ($E_{\\text{sel}} > 0$). Elektron mengalir spontan dari elektroda encer ke elektroda pekat hingga kedua konsentrasi sama ($E_{\\text{sel}} \\to 0$).

#### Langkah 2: Penentuan Tetapan Hasil Kali Kelarutan ($K_{sp}$) secara Potensiometri
Bila kompartemen anoda diisi larutan jenuh garam sangat sukar larut (misal $\\ce{AgCl}$) yang mengandung ion senama klorida $[\\ce{Cl-}]$ yang diketahui:
$$E_{\\text{sel}} = -0.05916 \\log\\left(\\frac{[\\ce{Ag+}]_{\\text{jenuh}}}{[\\ce{Ag+}]_{\\text{ref}}}\\right)$$
$$\\log[\\ce{Ag+}]_{\\text{jenuh}} = -\\frac{E_{\\text{sel}}}{0.05916} + \\log[\\ce{Ag+}]_{\\text{ref}}$$
Setelah konsentrasi ion perak bebas $[\\ce{Ag+}]_{\\text{jenuh}}$ diperoleh dari pembacaan voltmeter, nilai $K_{sp}$ langsung dihitung secara eksak:
$$\\mathbf{K_{sp}(\\ce{AgCl}) = [\\ce{Ag+}]_{\\text{jenuh}} \\cdot [\\ce{Cl-}]}$$

#### Langkah 3: Penentuan Tetapan Pembentukan Kompleks Koordinasi ($K_f$)
Bila ke dalam kompartemen anoda ditambahkan ligan pembentuk senyawa kompleks (seperti amonia $\\ce{NH3}$ atau tiosulfat $\\ce{S2O3^2-}$):
$$\\ce{Ag+ + 2NH3 <=> [Ag(NH3)2]+} \\quad K_f = \\frac{[\\ce{[Ag(NH3)2]+}]}{[\\ce{Ag+}][\\ce{NH3}]^2}$$
Reaksi kompleksasi mengikat ion $\\ce{Ag+}$ bebas hingga tersisa sangat sedikit ($10^{-8} - 10^{-12}\\text{ M}$), memicu lonjakan voltase $E_{\\text{sel}}$ yang terukur secara akurat pada potensiometer, memungkinkan penentuan nilai $K_f$ tanpa gangguan analitis.

---

### 3. High-Contrast Visual Matrix: Diagnostik Kompartemen Sel Konsentrasi

| Komponen Sel | Kompartemen Encer (Anoda, $-$) | Kompartemen Pekat (Katoda, $+$) |
| :--- | :--- | :--- |
| **Reaksi Elektroda** | **Oksidasi:** $\\ce{M(s) -> M^{z+}(aq) + z e-}$ | **Reduksi:** $\\ce{M^{z+}(aq) + z e- -> M(s)}$ |
| **Peran Kinetika Ion** | Memproduksi kation untuk menaikkan konsentrasi | Menghilangkan kation untuk menurunkan konsentrasi |
| **Arah Aliran Elektron** | Melepaskan elektron ke kawat luar | Menerima elektron dari kawat luar |
| **Migrasi Ion Jembatan Garam**| Anion jembatan garam bermigrasi ke sini | Kation jembatan garam bermigrasi ke sini |

---

### 4. Official GitHub Callouts

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Arah Aliran Elektron pada Sel Konsentrasi
> "Apakah elektron mengalir dari larutan pekat yang memiliki banyak ion menuju larutan encer?"
> **SALAH BESAR!** Ingat prinsip termodinamika pergeseran Le Chatelier:
> - Kompartemen encer harus **menghasilkan** lebih banyak ion $\\implies$ Oksidasi $\\implies$ Melepas elektron $\\implies$ **Anoda**.
> - Kompartemen pekat harus **mengurangi** ion $\\implies$ Reduksi $\\implies$ Menangkap elektron $\\implies$ **Katoda**.
> Elektron selalu mengalir dari elektroda di larutan encer menuju elektroda di larutan pekat!

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Rumus Cepat Voltmeter Penentuan Ksp
> Untuk sel konsentrasi kation monovalen $\\ce{Ag(s) | Ag+(sat, Cl-) || Ag+(1.0 M) | Ag(s)}$:
> $$\\mathbf{\\log K_{sp} = -\\frac{E_{\\text{sel}}}{0.05916} + \\log[\\ce{Cl-}]}$$
> Setiap kenaikan voltase sebesar $59.16\\text{ mV}$ menandakan bahwa nilai $[\\ce{Ag+}]$ di anoda turun tepat satu orde magnitudo ($10\\times$ lebih encer).`,
      keyFormulas: [
        { name: 'Potensial Sel Konsentrasi', formula: 'E_{\\text{sel}} = \\frac{0.05916}{z}\\log\\left(\\frac{[M^{z+}]_{\\text{pekat}}}{[M^{z+}]_{\\text{encer}}}\\right)' },
        { name: 'Hubungan Potensiometri Ksp', formula: '\\log [M^{z+}]_{\\text{jenuh}} = -\\frac{z \\cdot E_{\\text{sel}}}{0.05916} + \\log [M^{z+}]_{\\text{ref}}' },
      ],
    },
    {
      tag: 'konsep-diagram-latimer-frost-pourbaix',
      tags: ['diagram-latimer', 'diagram-frost', 'disproporsionasi', 'komproporsionasi', 'stabilitas-redoks'],
      title: 'Konsep Inti 4: Diagram Potensial Latimer, Diagram Keadaan Oksidasi Frost, & Reaksi Disproporsionasi',
      summary: 'Representasi grafis stabilitas redoks multibiloks, aturan aditivitas energi bebas Gibbs non-linear, dan prediksi kestabilan termodinamika spesi anorganik.',
      content: `### 1. Intuitive Mental Model Hook: Peta Lintasan Kereta Latimer & Lembah Termodinamika Gunung Frost
Bayangkan sebuah peta jalur kereta cepat yang menghubungkan kota-kota dari stasiun ketinggian paling puncak (+7) menuruni lereng gunung hingga ke tepi pantai (0). Di atas setiap rel tertera besaran gaya rem gravitasi ($E^\circ$).

Wendy M. Latimer dan Arthur A. Frost menciptakan dua mahakarya visual untuk membaca peta redoks anorganik unsur multibiloks. Di **Diagram Latimer**, kita dapat melompati stasiun dengan menghitung rata-rata tertimbang transfer elektron. Di **Diagram Frost**, kita melihat topografi permukaan tanah secara nyata: spesi yang berada di lembah jurang paling dalam adalah spesi paling stabil, sedangkan spesi yang bertengger di puncak bukit cembung rawan tergelincir jatuh hancur membelah dirinya menjadi dua (*disproporsionasi*)!

---

### 2. Scaffolded Step-by-Step Logic: Diagram Latimer, Kaidah Aditivitas, & Diagram Frost

#### Langkah 1: Struktur Diagram Latimer
Diagram Latimer menampilkan bilangan oksidasi suatu unsur dari tingkat oksidasi tertinggi (paling kiri) ke terendah (paling kanan), dengan nilai potensial reduksi standar ($E^\circ$ dalam Volt) dituliskan di atas anak panah penghubung:
$$\\ce{A ->[E^\circ_1 (n_1)] B ->[E^\circ_2 (n_2)] C}$$

#### Langkah 2: Kaidah Aditivitas Energi Bebas Gibbs (Potensial Lompatan)
Potensial elektroda **BUKAN besaran ekstensif**, sehingga **DILARANG MENJUMLAHKAN NILAI $E^\circ$ SECARA LANGSUNG** ($E^\circ_{13} \\neq E^\circ_1 + E^\circ_2$).
Penjumlahan yang valid secara termodinamika harus melalui energi bebas Gibbs:
$$\\Delta G^\circ_{13} = \\Delta G^\circ_1 + \\Delta G^\circ_2$$
$$-(n_1 + n_2) F E^\circ_{13} = -n_1 F E^\circ_1 - n_2 F E^\circ_2$$
$$\\mathbf{E^\circ_{13} = \\frac{n_1 E^\circ_1 + n_2 E^\circ_2}{n_1 + n_2} = \\frac{\\sum n_i E^\circ_i}{\\sum n_i}}$$
Potensial reduksi total adalah **rata-rata tertimbang (*weighted average*)** dari potensial masing-masing tahapan berurutan terhadap jumlah elektron yang ditransfer!

#### Langkah 3: Kriteria Termodinamika Reaksi Disproporsionasi pada Diagram Latimer
Suatu spesi intermediet $\\ce{B}$ akan mengalami **disproporsionasi spontan** ($\\ce{2B -> A + C}$) jika dan hanya jika:
$$\\mathbf{E^\circ_{\\text{kanan}} > E^\circ_{\\text{kiri}}}$$
$$E^\circ_{\\text{disprop}} = E^\circ_{\\text{reduksi}} - E^\circ_{\\text{oksidasi}} = E^\circ_{\\text{kanan}} - E^\circ_{\\text{kiri}} > 0 \\iff \\Delta G^\\circ < 0$$
- Jika $E^\circ_{\\text{kanan}} > E^\circ_{\\text{kiri}}$: Spesi $\\ce{B}$ termodinamis tidak stabil dan terurai menjadi $\\ce{A}$ dan $\\ce{C}$.
- Jika $E^\circ_{\\text{kanan}} < E^\circ_{\\text{kiri}}$: Spesi $\\ce{B}$ termodinamis stabil; sebaliknya reaksi **komproporsionasi** antara $\\ce{A}$ dan $\\ce{C}$ berlangsung spontan membentuk $\\ce{B}$.

#### Langkah 4: Konstruksi & Interpretasi Diagram Frost ($N$ vs $nE^\circ$)
Diagram Frost memplot nilai energi bebas pembentukan relatif:
$$\\frac{\\Delta G^\\circ}{-F} = n E^\\circ(\\ce{X(N) / X(0)})$$
pada sumbu vertikal ($y$) terhadap bilangan oksidasi ($N$) pada sumbu horizontal ($x$):
1. **Titik Acuan:** Logam unsur bebas $\\ce{X(0)}$ selalu berada pada titik koordinat asal $(0, 0)$.
2. **Lembah Termodinamika (*Thermodynamic Sink*):** Titik dengan posisi vertikal paling rendah pada kurva Frost adalah spesi kimia yang paling stabil secara termodinamika di alam.
3. **Kemiringan Garis Penghubung (*Slope*):** Kemiringan garis antara dua titik sembarang adalah potensial reduksi standar ($E^\circ$) pasangan redoks tersebut.
4. **Kriteria Geometri Disproporsionasi:**
   - **Titik Cembung (Convex Peak):** Jika suatu titik berada **di atas garis lurus** yang menghubungkan dua tetangganya, spesi tersebut tidak stabil dan mengalami disproporsionasi spontan!
   - **Titik Cekung (Concave Well):** Jika suatu titik berada **di bawah garis lurus** penghubung tetangganya, spesi tersebut stabil terhadap disproporsionasi (komproporsionasi disukai).

---

### 3. High-Contrast Visual Matrix: Evaluasi Kestabilan Redoks Diagram Latimer & Frost

| Uji Kestabilan Termodinamika | Tampilan pada Diagram Latimer | Tampilan pada Diagram Frost | Konsekuensi Reaksi Kimiawi |
| :--- | :--- | :--- | :--- |
| **Spesi Intermediet Labil** | $E^\circ_{\\text{kanan}} > E^\circ_{\\text{kiri}}$ | Titik berada di atas garis lurus (**Cembung**) | **Disproporsionasi Spontan** ($\ce{2B -> A + C}$) |
| **Spesi Intermediet Stabil** | $E^\circ_{\\text{kanan}} < E^\circ_{\\text{kiri}}$ | Titik berada di bawah garis lurus (**Cekung**) | **Komproporsionasi Spontan** ($\ce{A + C -> 2B}$) |
| **Spesi Paling Stabil Total** | Potensial reduksi ke spesi ini sangat positif, reduksi darinya sangat negatif | Titik koordinat vertikal paling rendah (**Lembah**) | Bertindak sebagai spesi produk akhir pembusukan redoks |
| **Oksidator Sangat Perkasa** | Terletak di paling kiri dengan $E^\circ$ sangat positif | Garis penghubung ke kiri memiliki kemiringan sangat curam | Mereduksi dirinya secara agresif untuk mengoksidasi spesi lain |

---

### 4. Official GitHub Callouts

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Kesalahan Menghitung Potensial Lompatan
> Jangan pernah tergoda menjumlahkan langsung angka-angka potensial di diagram Latimer:
> $$\\ce{A ->[+1.00\text{ V (1e)}] B ->[+0.50\text{ V (2e)}] C}$$
> - **SALAH FATAL:** $E^\circ_{\ce{A->C}} = 1.00 + 0.50 = 1.50\text{ V}$.
> - **BENAR MUTLAK:** $E^\circ_{\ce{A->C}} = \\frac{1(1.00) + 2(0.50)}{1 + 2} = \\frac{2.00}{3} = \\mathbf{+0.67\\text{ V}}$.
> Selalu kalikan potensial dengan jumlah elektronnya ($n_i$) sebelum menjumlahkan, lalu bagi dengan total elektron akumulatif!

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Deteksi 1 Detik Disproporsionasi
> Pada diagram Latimer berantai:
> $$\\ce{\\dots ->[E^\circ_L] X ->[E^\circ_R] \\dots}$$
> Lihat saja kedua angka di kiri dan kanan spesi $\\ce{X}$:
> - Jika **Angka Kanan $>$ Angka Kiri**, spesi $\\ce{X}$ **PASTI DISPROPORSIONASI**!
> - Anda tidak perlu menyusun setengah reaksi panjang atau menghitung $\\Delta G^\circ$ untuk menjawab soal pilihan ganda olimpiade!`,
      keyFormulas: [
        { name: 'Potensial Lompatan Latimer', formula: 'E^\\circ_{13} = \\frac{n_1 E^\\circ_1 + n_2 E^\\circ_2}{n_1 + n_2}' },
        { name: 'Kriteria Disproporsionasi Latimer', formula: 'E^\\circ_{\\text{disprop}} = E^\\circ_{\\text{kanan}} - E^\\circ_{\\text{kiri}} > 0' },
        { name: 'Sumbu Vertikal Diagram Frost', formula: '\\Delta G^\\circ / -F = n E^\\circ(\\ce{X(N) / X(0)})' },
      ],
    },
    {
      tag: 'konsep-sumber-arus-baterai-korosi',
      tags: ['sel-primer-sekunder', 'baterai-litium-ion', 'lead-acid-accumulator', 'korosi-elektrokimia', 'proteksi-katodik'],
      title: 'Konsep Inti 5: Sumber Arus Listrik Kimia (Baterai Primer & Sekunder), Sel Bahan Bakar, & Kinetika Korosi',
      summary: 'Kajian teknologi elektrokimia aplikatif, mekanisme interkalasi baterai Li-ion, efisiensi termodinamika sel bahan bakar, serta mekanisme proteksi korosi.',
      content: `### 1. Intuitive Mental Model Hook: Brankas Portabel Litium & Perisai Anoda Korban Korosi
Bayangkan Anda memiliki brankas yang dapat menyimpan bola-bola golf bermuatan di sela-sela lapisan rak buku tipis. Saat Anda mengisi daya (*charging*), bola-bola didorong menyelinap masuk ke sela-sela lapisan grafit. Saat digunakan (*discharging*), bola-bola meluncur keluar secara spontan menuju rak oksida kobalt menghasilkan listrik bertenaga tinggi.

Inilah prinsip revolusioner **Baterai Litium-Ion (Pemenang Nobel Kimia 2019)**: mekanisme *interkalasi* ion tanpa merusak struktur kisi inang! Di sisi lain, fenomena elektrokimia juga dapat bersifat merusak: korosi besi adalah sel volta mini parasitik di mana tetesan air hujan bertindak sebagai jembatan garam yang perlahan-lahan memakan rangka jembatan baja kita, kecuali kita memasang "perisai prajurit korban" (anoda seng) yang rela hancur demi menyelamatkan sang raja besi!

---

### 2. Scaffolded Step-by-Step Logic: Baterai, Sel Bahan Bakar, & Korosi Elektrokimia

#### Langkah 1: Klasifikasi Sumber Arus Baterai Komersial
1. **Sel Primer (Baterai Sekali Pakai - Non-Rechargeable):**
   - **Baterai Kering Seng-Karbon Leclanché & Baterai Alkali ($\\ce{Zn-MnO2}$):**
     - Anoda: $\\ce{Zn(s) + 2OH-(aq) -> ZnO(s) + H2O(l) + 2e-}$
     - Katoda: $\\ce{2MnO2(s) + H2O(l) + 2e- -> Mn2O3(s) + 2OH-(aq)}$
     - Menghasilkan voltase kerja stabil $1.5\\text{ V}$.
2. **Sel Sekunder (Baterai Isi Ulang - Rechargeable):**
   - **Aki Asam Timbal (*Lead-Acid Accumulator*):**
     - Pengosongan (*Discharge*):
       $$\\ce{Pb(s) + PbO2(s) + 2H2SO4(aq) -> 2PbSO4(s) + 2H2O(l)} \\quad (E_{\\text{sel}} \\approx 2.05\\text{ V/sel})$$
       Kedua elektroda terlapisi padatan putih timbal(II) sulfat ($\\ce{PbSO4}$) dan massa jenis elektrolit asam sulfat anjlok dari $1.28\\text{ g/cm}^3$ ke $1.15\\text{ g/cm}^3$.
   - **Baterai Litium-Ion (Li-ion Intercalation):**
     - Anoda: $\\ce{Li_x C6 <=> x Li+ + x e- + 6C}$ (Interkalasi pada lembaran kisi grafit)
     - Katoda: $\\ce{Li_{1-x}CoO2 + x Li+ + x e- <=> LiCoO2}$ (Interkalasi pada lapisan oksida logam transisi)
     - Menghasilkan voltase kerja tinggi ($3.7 - 4.2\\text{ V}$) dengan efisiensi siklus luar biasa tanpa memori efek.

#### Langkah 2: Termodinamika Sel Bahan Bakar (Fuel Cell)
Sel bahan bakar adalah sel galvani terbuka di mana bahan bakar (seperti gas $\\ce{H2}$) dan oksidator (gas $\\ce{O2}$) dialirkan secara kontinu dari luar:
- Anoda: $\\ce{2H2(g) + 4OH-(aq) -> 4H2O(l) + 4e-}$
- Katoda: $\\ce{O2(g) + 2H2O(l) + 4e- -> 4OH-(aq)}$
- Reaksi Total: $\\ce{2H2(g) + O2(g) -> 2H2O(l)} \\quad (E^\circ = +1.229\\text{ V})$

**Efisiensi Termodinamika Teoritis Maksimum ($\\eta$):**
Karena sel elektrokimia mengonversi energi bebas Gibbs langsung menjadi energi listrik tanpa melalui siklus panas pembakaran mekanik, efisiensinya tidak dibatasi oleh batas Siklus Carnot ($1 - T_C/T_H$):
$$\\mathbf{\\eta_{\\text{teoritis}} = \\frac{\\Delta G^\\circ}{\\Delta H^\\circ} = \\frac{-237.13\\text{ kJ/mol}}{-285.83\\text{ kJ/mol}} = \\mathbf{82.96\\% \\approx 83\\%}}$$
Efisiensi riil sel bahan bakar mencapai $60 - 70\\%$, jauh melampaui mesin pembakaran internal konvensional ($~25 - 35\\%$).

#### Langkah 3: Elektrokimia Korosi Besi & Metode Proteksi Katodik
Korosi besi adalah proses elektrokimia spontan di mana permukaan logam besi bertindak sebagai anoda dan katoda mikroskopis dengan tetesan air elektrolit sebagai jembatan garam:
- **Anoda (Cekungan Mikroskopis di Besi):** $\\ce{Fe(s) -> Fe^2+(aq) + 2e-} \\quad (E^\circ = -0.44\\text{ V})$
- **Katoda (Tepi Tetesan Air Kaya Oksigen):** $\\ce{O2(g) + 2H2O(l) + 4e- -> 4OH-(aq)} \\quad (E^\circ = +0.40\\text{ V})$
Ion $\\ce{Fe^2+}$ bereaksi dengan ion $\\ce{OH-}$ membentuk $\\ce{Fe(OH)2}$, yang teroksidasi lebih lanjut oleh udara menjadi karat hidrous coklat kemerahan $\\ce{Fe2O3 \\cdot x H2O}$.

**Metode Pencegahan Korosi:**
1. **Pelapisan Proteksi Fisik:** Pengecatan, pelapisan oli, atau pelapisan logam inert (tin plating pada kaleng makanan $\\ce{Sn}$). *Peringatan:* Jika lapisan timah tergores, besi terkorosi jauh lebih cepat karena $E^\circ(\\ce{Fe}) < E^\circ(\\ce{Sn})$.
2. **Proteksi Katodik Anoda Korban (*Sacrificial Anode*):** Menghubungkan besi dengan logam yang memiliki potensial reduksi jauh lebih negatif (seperti magnesium $\\ce{Mg}$ atau seng $\\ce{Zn}$, proses galvanisasi). Logam korban teroksidasi mengorbankan dirinya dan mengalirkan elektron ke besi, memaksa besi bertindak sebagai katoda terlindungi secara absolut!

---

### 3. High-Contrast Visual Matrix: Diagnostik Sumber Arus Listrik Elektrokimia

| Tipe Perangkat | Material Anoda | Material Katoda | Elektrolit | Tegangan Nominal | Karakteristik Utama |
| :--- | :--- | :--- | :--- | :---: | :--- |
| **Baterai Kering Seng-Karbon** | Seng $(\\ce{Zn})$ | Karbon grafit $+ \\ce{MnO2}$ | Pasta basah $\\ce{NH4Cl / ZnCl2}$ | $1.5\\text{ V}$ | Sel primer murah; rawan bocor |
| **Baterai Alkali** | Serbuk seng $(\\ce{Zn})$ | Mangan dioksida $(\\ce{MnO2})$ | Basa kuat $\\ce{KOH}$ | $1.5\\text{ V}$ | Kapasitas energi $3-5\\times$ lebih tinggi |
| **Aki Asam Timbal** | Timbal spons $(\\ce{Pb})$ | Timbal dioksida $(\\ce{PbO2})$ | Asam sulfat $\\ce{H2SO4 } (37\\%)$ | $2.05\\text{ V/sel}$ | Arus sentak tinggi; dapat diisi ulang |
| **Baterai Litium-Ion** | Grafit interkalasi $(\\ce{Li_x C6})$| Litium kobalt oksida $(\\ce{LiCoO2})$ | Garam litium dalam pelarut organik | $3.7\\text{ V}$ | Densitas energi tinggi; ringan |
| **Sel Bahan Bakar $\\ce{H2-O2}$** | Gas hidrogen $(\\ce{H2})$ pada Pt | Gas oksigen $(\\ce{O2})$ pada Pt | Membran proton (PEM) atau $\\ce{KOH}$| $1.23\\text{ V}$ | Emisi nol (hanya air); efisiensi $\\approx 83\\%$ |

---

### 4. Official GitHub Callouts

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Perbedaan Krusial Seng vs Timah pada Besi
> Sering kali siswa mengira pelapisan seng (galvanisasi) dan pelapisan timah (tin plating) memiliki cara kerja proteksi yang identik:
> - **Galvanisasi Seng ($\\ce{Zn}$):** $E^\circ(\\ce{Zn}) = -0.76\\text{ V} < E^\circ(\\ce{Fe}) = -0.44\\text{ V}$. Seng adalah anoda korban. Jika tergores, seng tetap teroksidasi melindungi besi!
> - **Pelapisan Timah ($\\ce{Sn}$):** $E^\circ(\\ce{Sn}) = -0.14\\text{ V} > E^\circ(\\ce{Fe}) = -0.44\\text{ V}$. Timah murni pelindung fisik. Jika tergores sedikit saja, **besi akan berkarat puluhan kali lebih cepat** karena besi menjadi anoda yang terkorosi ganas oleh katoda timah!

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Sel Bahan Bakar Melampaui Batas Siklus Carnot
> Ingat konsep fundamental ini untuk soal ujian termodinamika HOTS:
> Mesin termal pembakaran apapun (seperti mesin uap atau turbin gas) dibatasi oleh efisiensi Carnot:
> $$\\eta_{\\text{Carnot}} = 1 - \\frac{T_{\\text{dingin}}}{T_{\\text{panas}}}$$
> Sel bahan bakar bukan mesin pembakaran kalor! Sel bahan bakar mengonversi energi bebas Gibbs langsung menjadi muatan listrik, sehingga secara teoritis dapat mencapai efisiensi $\\Delta G^\circ / \\Delta H^\circ > 80\\%$ pada suhu kamar.`,
      keyFormulas: [
        { name: 'Efisiensi Termodinamika Sel Bahan Bakar', formula: '\\eta = \\frac{\\Delta G^\\circ}{\\Delta H^\\circ}' },
        { name: 'Reaksi Bersih Pengosongan Aki', formula: '\\ce{Pb + PbO2 + 2H2SO4 -> 2PbSO4 + 2H2O}' },
      ],
    },
  ],
  worked_examples: [
    {
      tag: 'soal-redoks-penyetaraan-dikromat-etanol',
      tags: ['soal-osk', 'soal-penyetaraan-redoks', 'metode-setengah-reaksi', 'titrasi-redoks', 'analisis-etanol'],
      title: 'Contoh Soal OSK 1: Penyetaraan Redoks Asam & Analisis Kuantitatif Kadar Etanol via Titrasi Dikromat',
      summary: 'Aplikasi metode ion-elektron dalam penentuan kadar alkohol pada sampel minuman anggur melalui titrasi balik dikromat-besi(II).',
      content: `### Soal:
Kadar alkohol (etanol, $\\ce{CH3CH2OH}$) dalam sampel minuman anggur (*wine*) dianalisis menggunakan metode oksidasi dikromat dalam suasana asam sulfat. Ion dikromat ($\\ce{Cr2O7^2-}$) mengoksidasi etanol menjadi asam asetat ($\\ce{CH3COOH}$) dan dirinya tereduksi menjadi ion kromium(III) ($\\ce{Cr^3+}$).
Sebanyak $25.00\\text{ mL}$ sampel minuman anggur diencerkan dengan air deionisasi di dalam labu takar hingga tepat $500.0\\text{ mL}$. Sebanyak $20.00\\text{ mL}$ alikuot dari larutan encer tersebut dipipet dan direaksikan dengan $25.00\\text{ mL}$ larutan standar kalium dikromat ($\\ce{K2Cr2O7}$) berkonsentrasi $0.0500\\text{ M}$ dalam suasana asam kuat.
Setelah oksidasi etanol berlangsung sempurna, kelebihan ion dikromat yang tidak bereaksi dititrasi balik (*back titration*) dengan larutan standar besi(II) amonium sulfat ($\\ce{Fe^2+}$) $0.1000\\text{ M}$, memerlukan volume titran sebanyak $16.50\\text{ mL}$ untuk mencapai titik akhir.

**Pertanyaan:**
1. Setarakan persamaan reaksi redoks antara ion dikromat dan etanol dalam suasana asam menggunakan metode setengah reaksi (ion-elektron)!
2. Hitung jumlah mol ion $\\ce{Cr2O7^2-}$ awal, mol yang bersisa, dan mol yang bereaksi dengan etanol!
3. Hitung kadar etanol dalam sampel minuman anggur asli dalam satuan persen volume per volume ($\\% \\text{ v/v}$)!  
*(Diketahui: Massa molar etanol = $46.07\\text{ g/mol}$, massa jenis etanol murni = $0.789\\text{ g/mL}$).*

---

### Rincian Langkah Penyelesaian:

**Langkah 1: Penyetaraan Reaksi Redoks Oksidasi Etanol oleh Dikromat**  
- Setengah reaksi oksidasi etanol menjadi asam asetat:
  $$\\ce{CH3CH2OH + H2O -> CH3COOH + 4H+ + 4e-}$$
- Setengah reaksi reduksi dikromat:
  $$\\ce{Cr2O7^2- + 14H+ + 6e- -> 2Cr^3+ + 7H2O}$$
KPK elektron adalah $12$: kalikan reaksi oksidasi dengan $3$, dan reaksi reduksi dengan $2$:
$$3\\ce{CH3CH2OH} + 3\\ce{H2O} -> 3\\ce{CH3COOH} + 12\\ce{H+} + 12e^-$$
$$2\\ce{Cr2O7^2-} + 28\\ce{H+} + 12e^- -> 4\\ce{Cr^3+} + 14\\ce{H2O}$$
Jumlahkan dan eliminasi $\\ce{H2O}$, $\\ce{H+}$, dan $e^-$:
$$\\mathbf{\\ce{2Cr2O7^2- + 3CH3CH2OH + 16H+ -> 4Cr^3+ + 3CH3COOH + 11H2O}}$$

**Langkah 2: Menghitung Stoikiometri Mol Dikromat yang Bereaksi**  
1. Mol $\\ce{Cr2O7^2-}$ awal ditambahkan:
   $$n_{\\text{awal}} = 25.00\\text{ mL} \\times 0.0500\\text{ mmol/mL} = \\mathbf{1.250\\text{ mmol}}$$
2. Reaksi titrasi balik dengan ion $\\ce{Fe^2+}$:
   $$\\ce{Cr2O7^2- + 6Fe^2+ + 14H+ -> 2Cr^3+ + 6Fe^3+ + 7H2O}$$
   $$\\text{Mol } \\ce{Fe^2+} = 16.50\\text{ mL} \\times 0.1000\\text{ mmol/mL} = 1.650\\text{ mmol}$$
   $$\\text{Mol } \\ce{Cr2O7^2-}_{\\text{sisa}} = \\frac{1}{6} \\times n_{\\ce{Fe^2+}} = \\frac{1.650\\text{ mmol}}{6} = \\mathbf{0.2750\\text{ mmol}}$$
3. Mol $\\ce{Cr2O7^2-}$ yang bereaksi dengan etanol:
   $$n_{\\text{bereaksi}} = n_{\\text{awal}} - n_{\\text{sisa}} = 1.250\\text{ mmol} - 0.2750\\text{ mmol} = \\mathbf{0.9750\\text{ mmol}}$$

**Langkah 3: Menghitung Kadar Etanol dalam Sampel Asli**  
Berdasarkan rasio stoikiometri reaksi setara ($2\\ce{Cr2O7^2-} : 3\\ce{CH3CH2OH}$):
$$n_{\\text{etanol (20.0 mL)}} = \\frac{3}{2} \\times n_{\\text{bereaksi}} = \\frac{3}{2} \\times 0.9750\\text{ mmol} = \\mathbf{1.4625\\text{ mmol}}$$
Jumlah mol etanol dalam seluruh labu takar ($500.0\\text{ mL}$):
$$n_{\\text{etanol (total)}} = 1.4625\\text{ mmol} \\times \\frac{500.0\\text{ mL}}{20.00\\text{ mL}} = 36.5625\\text{ mmol} = \\mathbf{0.03656\\text{ mol}}$$

Massa etanol dalam $25.00\\text{ mL}$ sampel anggur asli:
$$m_{\\text{etanol}} = 0.0365625\\text{ mol} \\times 46.07\\text{ g/mol} = \\mathbf{1.6844\\text{ gram}}$$
Volume etanol murni:
$$V_{\\text{etanol}} = \\frac{m_{\\text{etanol}}}{\\rho} = \\frac{1.6844\\text{ g}}{0.789\\text{ g/mL}} = \\mathbf{2.1349\\text{ mL}}$$
Persentase volume per volume ($\\% \\text{ v/v}$):
$$\\% \\text{ v/v} = \\frac{V_{\\text{etanol}}}{V_{\\text{sampel}}} \\times 100\\% = \\frac{2.1349\\text{ mL}}{25.00\\text{ mL}} \\times 100\\% = \\mathbf{8.54\\% \\text{ v/v}}$$

**Kesimpulan Evaluator Juri:**  
Persamaan reaksi redoks setara adalah $\\ce{2Cr2O7^2- + 3CH3CH2OH + 16H+ -> 4Cr^3+ + 3CH3COOH + 11H2O}$. Dari hasil titrasi balik, mol dikromat yang bereaksi adalah $0.975\\text{ mmol}$, menghasilkan kadar alkohol sebesar $8.54\\% \\text{ v/v}$ pada sampel minuman anggur tersebut.`,
    },
    {
      tag: 'soal-elektrokimia-hukum-faraday-pelapisan',
      tags: ['soal-osk', 'soal-hukum-faraday', 'elektrolisis', 'efisiensi-arus', 'aspek-kuantitatif-elektrolisis'],
      title: 'Contoh Soal OSK 2: Kuantitatif Elektrolisis Pelapisan Emas (Electroplating) & Ketebalan Lapisan',
      summary: 'Perhitungan kuantitas muatan Faraday, massa logam terdeposisi dengan efisiensi arus riil, serta konversi geometri ketebalan mikrometrik.',
      content: `### Soal:
Sebuah piala penghargaan logam dengan luas permukaan total $A = 150.0\\text{ cm}^2$ dilapisi emas murni melalui teknik elektroplating menggunakan bak elektrolit yang mengandung ion kompleks disianoaurat(I) ($[\\ce{Au(CN)2}]^-$). Reaksi reduksi katodik yang terjadi adalah:
$$\\ce{[Au(CN)2]-(aq) + e- -> Au(s) + 2CN-(aq)}$$
Proses elektrolisis dijalankan dengan arus listrik konstan $I = 2.50\\text{ A}$ selama durasi waktu $t = 35.0\\text{ menit}$. Diketahui bahwa efisiensi arus listrik katoda untuk deposisi emas adalah $\\eta = 92.0\\%$ (sebagian arus digunakan untuk reduksi samping air menghasilkan gas hidrogen).  
*(Data: $A_r(\\ce{Au}) = 196.97\\text{ g/mol}$, massa jenis emas padat $\\rho = 19.30\\text{ g/cm}^3$, $F = 96,485\\text{ C/mol}$).*

**Pertanyaan:**
1. Hitung muatan listrik total yang dialirkan dan muatan listrik efektif yang berguna untuk mengendapkan emas!
2. Hitung massa emas murni yang berhasil terdeposisi secara seragam pada piala tersebut!
3. Hitung ketebalan rata-rata lapisan emas ($d$) pada permukaan piala dalam satuan mikrometer ($\\mu\\text{m}$)!

---

### Rincian Langkah Penyelesaian:

**Langkah 1: Menghitung Muatan Listrik Total & Efektif**  
Konversi waktu ke dalam detik:
$$t = 35.0\\text{ menit} \\times 60\\text{ s/menit} = 2100\\text{ detik}$$
Muatan listrik total:
$$Q_{\\text{total}} = I \\cdot t = 2.50\\text{ A} \\times 2100\\text{ s} = \\mathbf{5250\\text{ Coulomb}}$$
Muatan listrik efektif dengan efisiensi $\\eta = 92.0\\%$:
$$Q_{\\text{efektif}} = Q_{\\text{total}} \\times 0.920 = 5250\\text{ C} \\times 0.920 = \\mathbf{4830\\text{ Coulomb}}$$

**Langkah 2: Menghitung Massa Emas yang Terdeposisi**  
Jumlah mol elektron efektif:
$$n_{e^-} = \\frac{Q_{\\text{efektif}}}{F} = \\frac{4830\\text{ C}}{96,485\\text{ C/mol}} = 0.05006\\text{ mol}$$
Karena valensi reduksi emas(I) adalah $z = 1$ ($\\ce{Au+ + e- -> Au}$):
$$n_{\\ce{Au}} = n_{e^-} = 0.05006\\text{ mol}$$
Massa emas terdeposisi:
$$m_{\\ce{Au}} = 0.05006\\text{ mol} \\times 196.97\\text{ g/mol} = \\mathbf{9.860\\text{ gram}}$$

**Langkah 3: Menghitung Ketebalan Lapisan Emas (d)**  
Volume total lapisan emas:
$$V = \\frac{m_{\\ce{Au}}}{\\rho_{\\ce{Au}}} = \\frac{9.860\\text{ g}}{19.30\\text{ g/cm}^3} = 0.5109\\text{ cm}^3$$
Hubungan volume dengan luas permukaan dan ketebalan ($V = A \\cdot d$):
$$d = \\frac{V}{A} = \\frac{0.5109\\text{ cm}^3}{150.0\\text{ cm}^2} = 3.406 \\times 10^{-3}\\text{ cm}$$
Konversikan ke satuan mikrometer ($1\\text{ cm} = 10^4\\ \\mu\\text{m}$):
$$d = (3.406 \\times 10^{-3}\\text{ cm}) \\times 10^4\\ \\mu\\text{m/cm} = \\mathbf{34.06\\ \\mu\\text{m}} \\approx \\mathbf{34.1\\ \\mu\\text{m}}$$

**Kesimpulan Evaluator Juri:**  
Muatan listrik efektif yang digunakan adalah $4830\\text{ C}$, menghasilkan massa endapan emas sebesar $9.86\\text{ gram}$. Lapisan emas menyelimuti permukaan piala secara seragam dengan ketebalan presisi $34.1\\ \\mu\\text{m}$.`,
    },
    {
      tag: 'soal-termodinamika-sel-koefisien-suhu',
      tags: ['soal-osp', 'soal-termodinamika-sel', 'koefisien-temperatur-dE-dT', 'entalpi-entropi-sel', 'termodinamika-sel'],
      title: 'Contoh Soal OSP 3: Evaluasi Termodinamika Lengkap (ΔG°, ΔS°, ΔH°) Sel Elektrokimia via Koefisien Suhu (dE/dT)',
      summary: 'Kalkulasi parameter termodinamika fundamental sistem sel Daniell dari pengukuran voltase reversibel terhadap modulasi temperatur.',
      content: `### Soal:
Suatu sel elektrokimia reversibel standar Daniell dirancang sebagai berikut:
$$\\ce{Zn(s) | Zn^2+(aq, 1.0 M) || Cu^2+(aq, 1.0 M) | Cu(s)}$$
Reaksi sel keseluruhan:
$$\\ce{Zn(s) + Cu^2+(aq) -> Zn^2+(aq) + Cu(s)}$$
Pengukuran potensiometri presisi menunjukkan nilai potensial sel pada temperatur $T = 298.15\\text{ K}$ ($25.0^\\circ\\text{C}$) adalah $E^\\circ_{\\text{sel}} = 1.1000\\text{ V}$.
Koefisien temperatur potensial sel pada tekanan tetap terukur sebesar:
$$\\left(\\frac{\\partial E}{\\partial T}\\right)_P = -4.30 \\times 10^{-4}\\text{ V/K}$$

**Pertanyaan:**
1. Hitung perubahan energi bebas Gibbs standar ($\\Delta G^\\circ$) reaksi sel dalam $\\text{kJ/mol}$!
2. Hitung perubahan entropi standar ($\\Delta S^\\circ$) reaksi sel dalam satuan $\\text{J}/(\\text{mol}\\cdot\\text{K})$!
3. Hitung perubahan entalpi standar ($\\Delta H^\\circ$) reaksi sel dalam satuan $\\text{kJ/mol}$!
4. Hitung jumlah kalor reversibel ($q_{\\text{rev}}$) yang dipertukarkan dengan lingkungan per mol seng yang bereaksi pada $298.15\\text{ K}$. Tentukan apakah sel menyerap atau melepaskan kalor ke lingkungan selama operasi reversibel isotermal tersebut!

---

### Rincian Langkah Penyelesaian:

**Langkah 1: Menghitung Energi Bebas Gibbs Standar ΔG°**  
Jumlah elektron yang ditransfer dalam reaksi setara: $n = 2$.
Tetapan Faraday: $F = 96,485\\text{ C/mol}$.
$$\\Delta G^\\circ = -n F E^\\circ_{\\text{sel}} = -(2) \\times (96,485\\text{ C/mol}) \\times (1.1000\\text{ J/C})$$
$$\\Delta G^\\circ = -212,267\\text{ J/mol} = \\mathbf{-212.27\\text{ kJ/mol}}$$

**Langkah 2: Menghitung Entropi Reaksi Standar ΔS°**  
Gunakan relasi termodinamika Maxwell:
$$\\Delta S^\\circ = n F \\left(\\frac{\\partial E}{\\partial T}\\right)_P$$
$$\\Delta S^\\circ = (2) \\times (96,485\\text{ C/mol}) \\times (-4.30 \\times 10^{-4}\\text{ V/K})$$
$$\\Delta S^\\circ = \\mathbf{-82.98\\text{ J}/(\\text{mol}\\cdot\\text{K})}$$

**Langkah 3: Menghitung Entalpi Reaksi Standar ΔH°**  
Gunakan persamaan $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$:
$$\\Delta H^\\circ = \\Delta G^\\circ + T \\Delta S^\\circ$$
$$T \\Delta S^\\circ = 298.15\\text{ K} \\times (-82.98\\text{ J}/(\\text{mol}\\cdot\\text{K})) = -24,740.5\\text{ J/mol} = -24.74\\text{ kJ/mol}$$
$$\\Delta H^\\circ = -212.27\\text{ kJ/mol} + (-24.74\\text{ kJ/mol}) = \\mathbf{-237.01\\text{ kJ/mol}}$$

*Metode Alternatif Langsung:*
$$\\Delta H^\\circ = -nF \\left[ E^\\circ - T \\left(\\frac{\\partial E}{\\partial T}\\right)_P \\right] = -192,970 \\left[ 1.1000 - (298.15 \\times (-4.30 \\times 10^{-4})) \\right]$$
$$\\Delta H^\\circ = -192,970 \\left[ 1.1000 + 0.1282 \\right] = -192,970 \\times 1.2282 = -237,006\\text{ J/mol} = -237.01\\text{ kJ/mol} \\quad (\\text{Identik}).$$

**Langkah 4: Evaluasi Pertukaran Kalor Reversibel q_rev**  
Berdasarkan hukum kedua termodinamika:
$$q_{\\text{rev}} = T \\Delta S^\\circ = \\mathbf{-24.74\\text{ kJ/mol}}$$
Karena nilai $q_{\\text{rev}} < 0$ (bertanda negatif), sel **melepaskan kalor sebesar $24.74\\text{ kJ}$ ke lingkungan** untuk setiap mol seng yang larut secara reversibel guna mempertahankan temperaturnya konstan pada $298.15\\text{ K}$.

**Kesimpulan Evaluator Juri:**  
Parameter termodinamika reaksi sel Daniell adalah $\\Delta G^\\circ = -212.27\\text{ kJ/mol}$, $\\Delta S^\\circ = -82.98\\text{ J}/(\\text{mol}\\cdot\\text{K})$, dan $\\Delta H^\\circ = -237.01\\text{ kJ/mol}$. Koefisien temperatur negatif membuktikan bahwa sebagian energi entalpi dilepaskan sebagai kalor reversibel ($q_{\\text{rev}} = -24.74\\text{ kJ/mol}$) ke lingkungan.`,
    },
    {
      tag: 'soal-sel-konsentrasi-ksp-agcl-potensiometri',
      tags: ['soal-osn', 'soal-sel-agcl', 'sel-konsentrasi', 'persamaan-nernst', 'penentuan-ksp-potensiometri'],
      title: 'Contoh Soal OSN 4: Penentuan Potensiometri Presisi Ksp AgCl & AgBr Menggunakan Sel Konsentrasi Perak',
      summary: 'Aplikasi persamaan Nernst pada sel konsentrasi elektroda identik untuk mengukur kelarutan ultrarandah dan membuktikan nilai tetapan Ksp.',
      content: `### Soal:
Suatu sel konsentrasi dirancang untuk menentukan tetapan hasil kali kelarutan garam halida perak yang sangat sukar larut pada temperatur $25.0^\\circ\\text{C}$ ($298.15\\text{ K}$):
$$\\ce{Ag(s) | Ag+(aq, 0.0500 M) || Ag+(aq, saturated AgCl + 0.100 M KCl) | Ag(s)}$$
Kompartemen sebelah kiri berisi larutan perak nitrat encer dengan konsentrasi ion $[\\ce{Ag+}] = 0.0500\\text{ M}$. Kompartemen sebelah kanan berisi larutan jenuh $\\ce{AgCl}$ dalam keberadaan ion klorida senama dari $\\ce{KCl}$ berkonsentrasi $0.100\\text{ M}$.
Voltase sel terukur pada potensiometer bernilai $E_{\\text{sel}} = 0.4420\\text{ V}$, dengan elektroda sebelah kiri bertindak sebagai katoda (kutub positif).

**Pertanyaan:**
1. Tuliskan persamaan setengah reaksi elektroda anoda dan katoda serta reaksi sel keseluruhan!
2. Hitung konsentrasi ion perak bebas $[\\ce{Ag+}]$ dalam kompartemen anoda sebelah kanan!
3. Hitung nilai tetapan hasil kali kelarutan ($K_{sp}$) dari $\\ce{AgCl}$ pada $25.0^\\circ\\text{C}$!
4. Jika larutan pada kompartemen kanan diganti dengan larutan jenuh perak bromida ($\\ce{AgBr}$) yang mengandung ion bromida senama $[\\ce{Br-}] = 0.100\\text{ M}$, potensial sel melonjak menjadi $E_{\\text{sel}} = 0.5890\\text{ V}$. Hitung nilai $K_{sp}(\\ce{AgBr})$!

---

### Rincian Langkah Penyelesaian:

**Langkah 1: Menuliskan Reaksi Sel**  
Karena elektroda kiri bertindak sebagai katoda:
- Katoda (Kiri, Reduksi): $\\ce{Ag+(aq, 0.0500 M) + e- -> Ag(s)}$
- Anoda (Kanan, Oksidasi): $\\ce{Ag(s) -> Ag+(aq, kanan) + e-}$
Reaksi Bersih Sel Konsentrasi:
$$\\ce{Ag+(aq, 0.0500 M) -> Ag+(aq, kanan)}$$
Karena elektroda dan ion identik: $E^\\circ_{\\text{sel}} = 0.000\\text{ V}$.

**Langkah 2: Menghitung Konsentrasi [Ag+] dalam Kompartemen Anoda (AgCl)**  
Gunakan Persamaan Nernst ($n = 1$):
$$E_{\\text{sel}} = E^\\circ_{\\text{sel}} - \\frac{0.05916}{1} \\log\\left(\\frac{[\\ce{Ag+}]_{\\text{kanan}}}{[\\ce{Ag+}]_{\\text{kiri}}}\\right)$$
$$0.4420 = 0 - 0.05916 \\log\\left(\\frac{[\\ce{Ag+}]_{\\text{kanan}}}{0.0500}\\right)$$
$$\\log\\left(\\frac{[\\ce{Ag+}]_{\\text{kanan}}}{0.0500}\\right) = -\\frac{0.4420}{0.05916} = -7.4713$$
Ambil antilogaritma:
$$\\frac{[\\ce{Ag+}]_{\\text{kanan}}}{0.0500} = 10^{-7.4713} = 3.378 \\times 10^{-8}$$
$$[\\ce{Ag+}]_{\\text{kanan}} = 0.0500 \\times (3.378 \\times 10^{-8}) = \\mathbf{1.689 \\times 10^{-9}\\text{ M}}$$

**Langkah 3: Menghitung Nilai Ksp AgCl**  
Konsentrasi ion klorida dalam kompartemen kanan berasal dari garam terdisosiasi sempurna $\\ce{KCl}$ ($0.100\\text{ M}$), sehingga $[\\ce{Cl-}] = 0.100\\text{ M}$:
$$K_{sp}(\\ce{AgCl}) = [\\ce{Ag+}][\\ce{Cl-}] = (1.689 \\times 10^{-9}\\text{ M}) \\times (0.100\\text{ M}) = \\mathbf{1.689 \\times 10^{-10}} \\approx \\mathbf{1.69 \\times 10^{-10}}$$

**Langkah 4: Menghitung Ksp AgBr**  
Untuk sistem $\\ce{AgBr}$ dengan $E_{\\text{sel}} = 0.5890\\text{ V}$:
$$\\log\\left(\\frac{[\\ce{Ag+}]_{\\text{Br}}}{0.0500}\\right) = -\\frac{0.5890}{0.05916} = -9.9560$$
$$\\frac{[\\ce{Ag+}]_{\\text{Br}}}{0.0500} = 10^{-9.9560} = 1.1066 \\times 10^{-10}$$
$$[\\ce{Ag+}]_{\\text{Br}} = 0.0500 \\times (1.1066 \\times 10^{-10}) = 5.533 \\times 10^{-12}\\text{ M}$$
Konsentrasi ion bromida $[\\ce{Br-}] = 0.100\\text{ M}$:
$$K_{sp}(\\ce{AgBr}) = [\\ce{Ag+}][\\ce{Br-}] = (5.533 \\times 10^{-12}\\text{ M}) \\times (0.100\\text{ M}) = \\mathbf{5.533 \\times 10^{-13}} \\approx \\mathbf{5.53 \\times 10^{-13}}$$

**Kesimpulan Evaluator Juri:**  
GGL sel konsentrasi membuktikan konsentrasi ion perak bebas dalam larutan jenuh klorida adalah $1.69 \\times 10^{-9}\\text{ M}$, menghasilkan nilai $K_{sp}(\\ce{AgCl}) = 1.69 \\times 10^{-10}$. Pada sistem bromida, konsentrasi ion perak ditekan hingga $5.53 \\times 10^{-12}\\text{ M}$, menghasilkan $K_{sp}(\\ce{AgBr}) = 5.53 \\times 10^{-13}$.`,
    },
    {
      tag: 'soal-diagram-latimer-frost-mangan',
      tags: ['soal-osn', 'diagram-latimer', 'diagram-frost', 'disproporsionasi', 'spesies-mangan'],
      title: 'Contoh Soal OSN 5: Analisis Diagram Latimer & Diagram Frost Spesiasi Mangan dalam Larutan Asam',
      summary: 'Kalkulasi potensial lompatan reduksi, evaluasi termodinamika kecenderungan disproporsionasi spontan, dan penyusunan koordinat diagram Frost.',
      content: `### Soal:
Diberikan diagram Latimer untuk berbagai spesi senyawa mangan dalam larutan berair pada suasana asam standar ($\\text{pH} = 0, [\\ce{H+}] = 1.0\\text{ M}$):
$$\\ce{\\underset{(+7)}{MnO4-} ->[+0.564\\text{ V}] \\underset{(+6)}{MnO4^2-} ->[+2.261\\text{ V}] \\underset{(+4)}{MnO2} ->[+0.951\\text{ V}] \\underset{(+3)}{Mn^3+} ->[+1.509\\text{ V}] \\underset{(+2)}{Mn^2+} ->[-1.185\\text{ V}] \\underset{(0)}{Mn}}$$

**Pertanyaan:**
1. Hitung potensial reduksi standar langsung dari ion permanganat ($\\ce{MnO4-}$) menjadi ion mangan(II) ($\\ce{Mn^2+}$), yaitu $E^\\circ(\\ce{MnO4- / Mn^2+})$!
2. Identifikasi spesi-spesi mangan manakah yang bersifat termodinamis tidak stabil dan mengalami reaksi **disproporsionasi spontan** dalam larutan asam! Tuliskan persamaan reaksi disproporsionasi setaranya serta hitung nilai $E^\\circ_{\\text{disprop}}$ masing-masing!
3. Susun tabel koordinat titik Frost $(N, nE^\\circ)$ untuk setiap tingkat oksidasi mangan relatif terhadap logam $\\ce{Mn(0)}$. Tentukan spesi manakah yang bertindak sebagai "lembah termodinamika" (*thermodynamic sink*) yang paling stabil!

---

### Rincian Langkah Penyelesaian:

**Langkah 1: Menghitung Potensial Reduksi Langsung E°(MnO4- / Mn2+)**  
Transformasi dari $\\ce{MnO4-}$ ($+7$) ke $\\ce{Mn^2+}$ ($+2$) melibatkan selisih elektron:
$$n = 7 - 2 = 5\\text{ elektron}$$
Gunakan hukum aditivitas energi bebas Gibbs ($\\Delta G^\\circ_{\\text{total}} = \\sum \\Delta G^\\circ_i$):
$$-5F E^\\circ(\\ce{MnO4- / Mn^2+}) = -F(0.564) - 2F(2.261) - F(0.951) - F(1.509)$$
Perhatikan jumlah elektron tiap tahap:
- Tahap $+7 \\to +6$: $n_1 = 1, E_1 = +0.564\\text{ V} \\implies n_1 E_1 = 0.564\\text{ V}$
- Tahap $+6 \\to +4$: $n_2 = 2, E_2 = +2.261\\text{ V} \\implies n_2 E_2 = 4.522\\text{ V}$
- Tahap $+4 \\to +3$: $n_3 = 1, E_3 = +0.951\\text{ V} \\implies n_3 E_3 = 0.951\\text{ V}$
- Tahap $+3 \\to +2$: $n_4 = 1, E_4 = +1.509\\text{ V} \\implies n_4 E_4 = 1.509\\text{ V}$
Jumlah total $\\sum n_i E_i$:
$$\\sum n_i E_i = 0.564 + 4.522 + 0.951 + 1.509 = 7.546\\text{ V}$$
$$E^\\circ(\\ce{MnO4- / Mn^2+}) = \\frac{7.546\\text{ V}}{5} = \\mathbf{1.5092\\text{ V}} \\approx \\mathbf{+1.51\\text{ V}}$$

**Langkah 2: Evaluasi Kestabilan Disproporsionasi**  
Spesi intermediet mengalami disproporsionasi jika $E^\\circ_{\\text{kanan}} > E^\\circ_{\\text{kiri}}$:
1. **Spesi $\\ce{MnO4^2-}$ ($+6$):**
   - $E^\\circ_{\\text{kiri}} = +0.564\\text{ V}$
   - $E^\\circ_{\\text{kanan}} = +2.261\\text{ V}$
   Karena $E^\\circ_{\\text{kanan}} (2.261) > E^\\circ_{\\text{kiri}} (0.564)$, ion manganat(VI) **TIDAK STABIL dan mengalami disproporsionasi spontan**:
   $$E^\\circ_{\\text{disprop}} = 2.261\\text{ V} - 0.564\\text{ V} = \\mathbf{+1.697\\text{ V} > 0}$$
   Reaksi setara:
   $$\\mathbf{\\ce{3MnO4^2-(aq) + 4H+(aq) -> 2MnO4-(aq) + MnO2(s) + 2H2O(l)}}$$

2. **Spesi $\\ce{MnO2}$ ($+4$):**
   - $E^\\circ_{\\text{kiri}} = +2.261\\text{ V}$
   - $E^\\circ_{\\text{kanan}} = +0.951\\text{ V}$
   Karena $E^\\circ_{\\text{kanan}} (0.951) < E^\\circ_{\\text{kiri}} (2.261)$, $\\ce{MnO2}$ **STABIL** terhadap disproporsionasi.

3. **Spesi $\\ce{Mn^3+}$ ($+3$):**
   - $E^\\circ_{\\text{kiri}} = +0.951\\text{ V}$
   - $E^\\circ_{\\text{kanan}} = +1.509\\text{ V}$
   Karena $E^\\circ_{\\text{kanan}} (1.509) > E^\\circ_{\\text{kiri}} (0.951)$, ion $\\ce{Mn^3+}$ **TIDAK STABIL dan mengalami disproporsionasi spontan**:
   $$E^\\circ_{\\text{disprop}} = 1.509\\text{ V} - 0.951\\text{ V} = \\mathbf{+0.558\\text{ V} > 0}$$
   Reaksi setara:
   $$\\mathbf{\\ce{2Mn^3+(aq) + 2H2O(l) -> Mn^2+(aq) + MnO2(s) + 4H+(aq)}}$$

**Langkah 3: Menyusun Koordinat Diagram Frost**  
Sumbu horizontal adalah bilangan oksidasi ($N$), sumbu vertikal adalah $nE^\\circ(\\ce{X(N) / Mn(0)})$:
- $N = 0$ (Logam $\\ce{Mn}$): $nE^\\circ = 0.000\\text{ V}$ (Titik acuan).
- $N = +2$ ($\\ce{Mn^2+}$): $\\ce{Mn^2+ + 2e- -> Mn} \\implies nE^\\circ = 2 \\times (-1.185) = -2.370\\text{ V}$.
- $N = +3$ ($\\ce{Mn^3+}$): $nE^\\circ = -2.370 + 1(1.509) = -0.861\\text{ V}$.
- $N = +4$ ($\\ce{MnO2}$): $nE^\\circ = -0.861 + 1(0.951) = +0.090\\text{ V}$.
- $N = +6$ ($\\ce{MnO4^2-}$): $nE^\\circ = +0.090 + 2(2.261) = +4.612\\text{ V}$.
- $N = +7$ ($\\ce{MnO4-}$): $nE^\\circ = +4.612 + 1(0.564) = +5.176\\text{ V}$.

| Biloks ($N$) | Spesi Mangan | Energi Bebas Relatif $nE^\\circ\\text{ (V)}$ | Status Kestabilan |
| :---: | :---: | :---: | :---: |
| $0$ | $\\ce{Mn}$ | $0.000$ | Reduktor kuat |
| $+2$ | $\\ce{Mn^2+}$ | $\\mathbf{-2.370}$ | **Lembah Termodinamika (Paling Stabil)** |
| $+3$ | $\\ce{Mn^3+}$ | $-0.861$ | Disproporsionasi (Cembung) |
| $+4$ | $\\ce{MnO2}$ | $+0.090$ | Stabil (Cekung) |
| $+6$ | $\\ce{MnO4^2-}$ | $+4.612$ | Disproporsionasi (Cembung) |
| $+7$ | $\\ce{MnO4-}$ | $+5.176$ | Oksidator kuat perkasa |

**Kesimpulan Evaluator Juri:**  
Potensial reduksi standar langsung $\\ce{MnO4- / Mn^2+}$ adalah $+1.51\\text{ V}$. Dua spesi yang terbukti tidak stabil dan mengalami disproporsionasi spontan dalam suasana asam adalah $\\ce{MnO4^2-}$ ($E^\\circ_{\\text{disprop}} = +1.70\\text{ V}$) dan $\\ce{Mn^3+}$ ($E^\\circ_{\\text{disprop}} = +0.56\\text{ V}$). Titik koordinat terendah pada diagram Frost adalah $\\ce{Mn^2+}$ ($-2.37\\text{ V}$), memvalidasi ion mangan(II) sebagai spesi termodinamika paling stabil di alam.`,
    },
  ],
};

export const OSN_TOPIC_7: MaterialItem = {
  ...RAW_OSN_TOPIC_7,
  prerequisites: RAW_OSN_TOPIC_7.prerequisites.map(p => ({
    ...p,
    checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_07[p.tag] || undefined,
  })),
  core_concepts: RAW_OSN_TOPIC_7.core_concepts.map(c => ({
    ...c,
    checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_07[c.tag] || undefined,
  })),
  worked_examples: RAW_OSN_TOPIC_7.worked_examples.map(w => ({
    ...w,
    checkpointQuizzes: undefined,
  })),
};
