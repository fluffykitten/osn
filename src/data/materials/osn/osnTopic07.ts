/**
 * osnTopic07.ts
 * Topik 7: Elektrokimia & Potensial Sel
 * Jenjang: OSN / IChO
 */

import type { MaterialItem } from '../../materialsData.ts';

export const OSN_TOPIC_7: MaterialItem = {
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
      content: `Reaksi reduksi-oksidasi (redoks) melibatkan perpindahan elektron dari spesi reduktor (mengalami oksidasi, biloks naik) ke spesi oksidator (mengalami reduksi, biloks turun).

### 1. Metode Setengah Reaksi (Ion-Elektron) dalam Suasana Asam:
Langkah sistematis penyetaraan:
1. **Pecah reaksi** menjadi dua setengah reaksi: oksidasi dan reduksi.
2. **Setarakan atom utama** selain oksigen ($\\ce{O}$) dan hidrogen ($\\ce{H}$).
3. **Setarakan atom $\\ce{O}$** dengan menambahkan molekul air ($\\ce{H2O}$) pada sisi yang kekurangan oksigen.
4. **Setarakan atom $\\ce{H}$** dengan menambahkan ion hidrogen ($\\ce{H+}$) pada sisi yang kekurangan hidrogen.
5. **Setarakan muatan listrik** pada kedua sisi dengan menambahkan elektron ($e^-$) pada sisi yang lebih positif.
6. **Kalikan kedua setengah reaksi** dengan faktor pengali bulat terkecil agar jumlah elektron yang dilepas sama persis dengan yang ditangkap.
7. **Jumlahkan kedua setengah reaksi** dan eliminasi spesi yang muncul di kedua sisi.

*Contoh:* Penyetaraan oksidasi etanol oleh ion dikromat:
- Oksidasi: $\\ce{CH3CH2OH + H2O -> CH3COOH + 4H+ + 4e-}$
- Reduksi: $\\ce{Cr2O7^2- + 14H+ + 6e- -> 2Cr^3+ + 7H2O}$
KPK elektron ($4$ dan $6$) adalah $12$:
$$3(\\ce{CH3CH2OH + H2O -> CH3COOH + 4H+ + 4e-})$$
$$2(\\ce{Cr2O7^2- + 14H+ + 6e- -> 2Cr^3+ + 7H2O})$$
Reaksi Bersih Setara:
$$\\ce{2Cr2O7^2- + 3CH3CH2OH + 16H+ -> 4Cr^3+ + 3CH3COOH + 11H2O}$$

---

### 2. Penyetaraan dalam Suasana Basa:
Lakukan langkah 1 sampai 5 persis seperti suasana asam. Kemudian:
- Tambahkan ion $\\ce{OH-}$ pada **kedua ruas** dalam jumlah yang sama persis dengan jumlah ion $\\ce{H+}$.
- Gabungkan ion $\\ce{H+}$ dan $\\ce{OH-}$ di ruas yang sama membentuk $\\ce{H2O}$ ($\\ce{H+ + OH- -> H2O}$).
- Sederhanakan molekul air yang muncul di kedua ruas.

---

### 3. Reaksi Disproporsionasi (*Autoredoks*) & Komproporsionasi:
- **Disproporsionasi:** Satu spesi dengan tingkat oksidasi intermediet bertindak sekaligus sebagai oksidator dan reduktor menghasilkan dua spesi dengan biloks lebih tinggi dan lebih rendah:
  $$\\ce{Cl2(g) + 2OH-(aq) -> Cl-(aq) + ClO-(aq) + H2O(l)}$$
- **Komproporsionasi (Simproporsionasi):** Dua spesi dengan biloks berbeda bereaksi menghasilkan satu spesi dengan tingkat oksidasi tunggal yang berada di antaranya:
  $$\\ce{IO3-(aq) + 5I-(aq) + 6H+(aq) -> 3I2(s) + 3H2O(l)}$$`,
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
      content: `Elektrolisis adalah proses pemanfaatan energi listrik eksternal untuk memaksa berlangsungnya reaksi redoks non-spontan ($\\Delta G > 0, E_{\\text{sel}} < 0$) dalam suatu sel elektrolisis.

### 1. Hukum Faraday I & II:
Michael Faraday merumuskan hubungan kuantitatif antara muatan listrik total ($Q$) dan kuantitas zat yang bereaksi pada elektroda:
1. **Muatan Listrik ($Q$):**
   $$Q = I \\cdot t$$
   di mana $I$ adalah kuat arus listrik (Ampere, A) dan $t$ adalah durasi waktu (detik, s).
2. **Konstanta Faraday ($F$):** Muatan listrik dari satu mol elektron:
   $$F = N_A \\cdot e = (6.02214 \\times 10^{23}\\text{ mol}^{-1}) \\times (1.60218 \\times 10^{-19}\\text{ C}) = 96,485.3\\text{ C/mol } e^- \\approx 96,485\\text{ C/mol } e^-$$
3. **Massa Zat Terendapkan ($m$):**
   $$n_{\\text{elektron}} = \\frac{I \\cdot t}{F} \\implies n_{\\text{zat}} = \\frac{I \\cdot t}{z \\cdot F}$$
   $$m = \\frac{M_r \\cdot I \\cdot t}{z \\cdot F}$$
   di mana $z$ adalah valensi elektron yang ditransfer per atom/molekul produk, dan $M_r$ adalah massa molar zat ($\\text{g/mol}$).

---

### 2. Efisiensi Arus (*Current Efficiency* $\\eta$):
Dalam praktik industri kimia dan elektroplating, tidak seluruh arus listrik digunakan untuk menghasilkan produk yang diinginkan akibat adanya reaksi samping (misalnya reduksi air menghasilkan gas hidrogen):
$$\\eta = \\frac{m_{\\text{aktual}}}{m_{\\text{teoretis}}} \\times 100\\% = \\frac{Q_{\\text{efektif}}}{Q_{\\text{total}}} \\times 100\\%$$

---

### 3. Persaingan Reaksi Elektroda dalam Larutan Berair:
Di dalam larutan air, molekul pelarut $\\ce{H2O}$ dapat ikut teroksidasi di anoda atau tereduksi di katoda:
- **Di Katoda (Reduksi):**
  Spesi dengan potensial reduksi lebih positif akan tereduksi terlebih dahulu:
  - Kation logam aktif golongan 1, 2, $\\ce{Al^3+}, \\ce{Mn^2+}$ ($E^\\circ < -1.18\\text{ V}$) tidak tereduksi; pelarut air yang tereduksi:
    $$\\ce{2H2O(l) + 2e- -> H2(g) + 2OH-(aq)} \\quad (E^\\circ = -0.828\\text{ V pada pH 7})$$
  - Kation logam transisi dengan potensial reduksi relatif tinggi (seperti $\\ce{Cu^2+}, \\ce{Ag+}, \\ce{Au^3+}, \\ce{Ni^2+}$) akan tereduksi menjadi endapan logam murni.
- **Di Anoda (Oksidasi):**
  - Anoda inert ($\\ce{Pt}, \\ce{C/grafit}, \\ce{Au}$): Anion sisa asam oksi berkadar oksidasi maksimum ($\\ce{SO4^2-}, \\ce{NO3-}, \\ce{ClO4-}$) tidak teroksidasi; pelarut air yang teroksidasi:
    $$\\ce{2H2O(l) -> O2(g) + 4H+(aq) + 4e-} \\quad (E^\\circ = +1.229\\text{ V pada pH 0, }+0.815\\text{ V pada pH 7})$$
  - Ion halida ($\\ce{I-}, \\ce{Br-}, \\ce{Cl-}$) teroksidasi menjadi halogen bebasnya.
  - Anoda aktif (non-inert seperti $\\ce{Cu}, \\ce{Ag}, \\ce{Zn}$): Logam anoda itu sendiri yang larut mengalami oksidasi.`,
      keyFormulas: [
        { name: 'Hukum Elektrolisis Faraday', formula: 'm = \\frac{M_r \\cdot I \\cdot t}{z \\cdot F}' },
        { name: 'Efisiensi Arus', formula: '\\eta = \\frac{m_{\\text{aktual}}}{m_{\\text{teoretis}}} \\times 100\\%' },
      ],
    },
    {
      tag: 'prasyarat-sel-galvani-standar-she',
      tags: ['sel-galvani', 'elektroda-hidrogen-standar-she', 'potensial-reduksi-standar', 'deret-volta', 'spontanitas-redoks'],
      title: 'Prasyarat 3: Desain Sel Galvani (Volta), Notasi Sel IUPAC, & Elektroda Hidrogen Standar (SHE)',
      summary: 'Anatomi sel galvani, jembatan garam, konvensi diagram garis IUPAC, penentuan potensial reduksi standar relatif terhadap SHE, dan Deret Volta.',
      content: `Sel Galvani (atau Sel Volta) mengubah energi bebas reaksi kimia spontan ($\\Delta G < 0$) menjadi energi listrik terukur secara efisien.

### 1. Anatomi & Komponen Sel Galvani:
1. **Anoda:** Elektroda tempat berlangsungnya reaksi **oksidasi** (melepas elektron). Pada sel galvani, anoda bermuatan **negatif** (sumber elektron yang mengalir ke sirkuit luar).
2. **Katoda:** Elektroda tempat berlangsungnya reaksi **reduksi** (menangkap elektron). Katoda bermuatan **positif**.
3. **Jembatan Garam (*Salt Bridge*):** Tabung berisi elektrolit inert (misal $\\ce{KNO3}$ atau $\\ce{KCl}$ dalam gel agar-agar) yang menghubungkan kedua kompartemen:
   - Menjaga kenetralan muatan listrik dengan mengalirkan anion ke kompartemen anoda dan kation ke kompartemen katoda.
   - Mencegah timbulnya potensial sambungan cair (*liquid junction potential*).

---

### 2. Konvensi Notasi Garis Sel IUPAC:
Ditulis dari anoda (kiri) ke katoda (kanan):
$$\\ce{Anoda | Fasa Larutan Anoda || Fasa Larutan Katoda | Katoda}$$
- Garis tunggal ($|$) melambangkan batas fasa (padat-cair atau cair-gas).
- Garis ganda ($||$) melambangkan jembatan garam.
- Contoh: $\\ce{Zn(s) | Zn^2+(aq, 1.0 M) || Cu^2+(aq, 1.0 M) | Cu(s)}$

---

### 3. Elektroda Hidrogen Standar (Standard Hydrogen Electrode / SHE):
Karena potensial elektroda tunggal mutlak tidak dapat diukur secara langsung, IUPAC menetapkan SHE sebagai referensi universal dengan nilai potensial nol volt pada semua temperatur:
$$\\ce{Pt(s) | H2(g, 1.0 bar) | H+(aq, a = 1.0)} \\implies E^\\circ = 0.000\\text{ V}$$

**Potensial Sel Standar ($E^\\circ_{\\text{sel}}$):**
$$E^\\circ_{\\text{sel}} = E^\\circ_{\\text{katoda}} - E^\\circ_{\\text{anoda}} = E^\\circ_{\\text{reduksi}} - E^\\circ_{\\text{oksidasi}}$$
di mana semua nilai $E^\\circ$ dilaporkan sebagai potensial reduksi standar.
- Jika $E^\\circ_{\\text{sel}} > 0$: Reaksi redoks berlangsung **spontan** pada kondisi standar.
- Jika $E^\\circ_{\\text{sel}} < 0$: Reaksi berlangsung non-spontan (spontan ke arah sebaliknya).

**Deret Volta (Urutan Daya Reduktor):**
$$\\ce{Li - K - Ba - Ca - Na - Mg - Al - Mn - Zn - Cr - Fe - Ni - Sn - Pb - (H) - Cu - Hg - Ag - Pt - Au}$$
Semakin ke kiri: $E^\\circ$ semakin negatif, semakin mudah teroksidasi (reduktor semakin kuat).
Semakin ke kanan: $E^\\circ$ semakin positif, semakin mudah tereduksi (oksidator semakin kuat).`,
      keyFormulas: [
        { name: 'Potensial Sel Standar', formula: 'E^\\circ_{\\text{sel}} = E^\\circ_{\\text{katoda}} - E^\\circ_{\\text{anoda}}' },
      ],
    },
  ],
  core_concepts: [
    {
      tag: 'konsep-termodinamika-elektrokimia-gibbs',
      tags: ['termodinamika-sel', 'energi-bebas-gibbs', 'tetapan-kesetimbangan-k', 'koefisien-temperatur-dE-dT', 'entalpi-entropi-sel'],
      title: 'Konsep Inti 1: Termodinamika Elektrokimia: Relasi Gibbs (ΔG°), Tetapan Kesetimbangan (K), & Koefisien Suhu (dE/dT)',
      summary: 'Koneksi fundamental potensial sel dengan fungsi termodinamika Gibbs, entropi reaksi elektrokimia dari koefisien temperatur, serta pertukaran kalor reversibel.',
      content: `Kekuatan gerak listrik (GGL / *electromotive force*) suatu sel elektrokimia adalah ukuran langsung dari perubahan energi bebas Gibbs reaksi kimia yang menggerakkannya.

### 1. Relasi Fundamental Energi Bebas Gibbs & Tetapan Kesetimbangan:
Kerja listrik non-ekspansi maksimum yang dapat dihasilkan oleh sistem elektrokimia reversibel sama dengan penurunan energi bebas Gibbs:
$$W_{\\text{elek, max}} = \\Delta G = -nFE_{\\text{sel}}$$
di mana:
- $n$: Jumlah mol elektron yang ditransfer dalam persamaan reaksi setara.
- $F$: Tetapan Faraday ($96,485\\text{ C/mol}$).
- $E_{\\text{sel}}$: Potensial sel reversibel (Volt, $\\text{V} = \\text{J/C}$).

Pada keadaan standar:
$$\\Delta G^\\circ = -nFE^\\circ_{\\text{sel}}$$
Karena $\\Delta G^\\circ = -RT \\ln K$:
$$-nFE^\\circ_{\\text{sel}} = -RT \\ln K \\implies E^\\circ_{\\text{sel}} = \\frac{RT}{nF} \\ln K$$
Pada temperatur standar $298.15\\text{ K}$ ($25.0^\\circ\\text{C}$):
$$E^\\circ_{\\text{sel}} = \\frac{2.302585 \\times 8.31446 \\times 298.15}{n \\times 96485.3} \\log_{10} K = \\frac{0.05916}{n} \\log_{10} K$$
$$K = 10^{\\frac{n E^\\circ_{\\text{sel}}}{0.05916}}$$

---

### 2. Koefisien Temperatur Potensial Sel & Entropi Reaksi ($\\Delta S$):
Berdasarkan termodinamika fundamental Maxwell:
$$\\left(\\frac{\\partial \\Delta G}{\\partial T}\\right)_P = -\\Delta S$$
Substitusi $\\Delta G = -nFE_{\\text{sel}}$:
$$-nF \\left(\\frac{\\partial E_{\\text{sel}}}{\\partial T}\\right)_P = -\\Delta S \\implies \\Delta S = nF \\left(\\frac{\\partial E_{\\text{sel}}}{\\partial T}\\right)_P$$
di mana $\\left(\\frac{\\partial E_{\\text{sel}}}{\\partial T}\\right)_P$ adalah **koefisien temperatur potensial sel** (satuan $\\text{V/K}$).

---

### 3. Entalpi Reaksi ($\\Delta H$) & Pertukaran Kalor Reversibel ($q_{\\text{rev}}$):
Menggunakan definisi energi bebas Gibbs $\\Delta G = \\Delta H - T\\Delta S$:
$$\\Delta H = \\Delta G + T\\Delta S = -nFE_{\\text{sel}} + nFT \\left(\\frac{\\partial E_{\\text{sel}}}{\\partial T}\\right)_P$$
$$\\Delta H = -nF \\left[ E_{\\text{sel}} - T \\left(\\frac{\\partial E_{\\text{sel}}}{\\partial T}\\right)_P \\right]$$

Kalor yang diserap atau dilepaskan secara reversibel oleh sel selama beroperasi secara isotermal:
$$q_{\\text{rev}} = T\\Delta S = nFT \\left(\\frac{\\partial E_{\\text{sel}}}{\\partial T}\\right)_P$$
- Jika $\\left(\\frac{\\partial E}{\\partial T}\\right)_P > 0$: $\\Delta S > 0 \\implies q_{\\text{rev}} > 0$. Sel menyerap kalor dari lingkungan untuk mempertahankan suhunya saat menghasilkan arus listrik!
- Jika $\\left(\\frac{\\partial E}{\\partial T}\\right)_P < 0$: $\\Delta S < 0 \\implies q_{\\text{rev}} < 0$. Sel membuang kalor ke lingkungan selain menghasilkan kerja listrik.`,
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
      content: `Persamaan Nernst yang diturunkan oleh Walther Nernst pada tahun 1889 menghubungkan potensial reduksi sel dengan konsentrasi (atau aktivitas) spesi kimia pereaksi pada keadaan non-standar.

### 1. Penurunan Persamaan Nernst:
Dari termodinamika kimia:
$$\\Delta G = \\Delta G^\\circ + RT \\ln Q$$
Substitusikan $\\Delta G = -nFE$ dan $\\Delta G^\\circ = -nFE^\\circ$:
$$-nFE = -nFE^\\circ + RT \\ln Q$$
Bagi kedua ruas dengan $-nF$:
$$E = E^\\circ - \\frac{RT}{nF} \\ln Q$$
Pada temperatur $298.15\\text{ K}$ ($25^\\circ\\text{C}$):
$$E = E^\\circ - \\frac{0.05916\\text{ V}}{n} \\log_{10} Q$$
di mana:
- $n$: Jumlah mol elektron yang terlibat dalam reaksi.
- $Q$: Kuosien reaksi (rasio aktivitas produk terhadap reaktan yang dipangkatkan koefisien stoikiometri).
- Aktivitas padatan murni ($s$) dan cairan murni ($l$) bernilai tepat satu ($a_i = 1$).
- Untuk gas, gunakan tekanan parsial dalam bar atau atm ($P_i$).

---

### 2. Ketergantungan Potensial Reduksi terhadap Keasaman Medium (pH):
Banyak pasangan redoks melibatkan ion hidrogen ($\\ce{H+}$) atau hidroksida ($\\ce{OH-}$), sehingga daya oksidasinya sangat dipengaruhi oleh derajat keasaman (pH).
*Contoh:* Reduksi ion permanganat menjadi ion mangan(II):
$$\\ce{MnO4-(aq) + 8H+(aq) + 5e- <=> Mn^2+(aq) + 4H2O(l)} \\quad (E^\\circ = +1.507\\text{ V})$$
Ekspresi Nernst:
$$E = E^\\circ - \\frac{0.05916}{5} \\log \\frac{[\\ce{Mn^2+}]}{[\\ce{MnO4-}][\\ce{H+}]^8}$$
$$E = E^\\circ - \\frac{0.05916}{5} \\log \\frac{[\\ce{Mn^2+}]}{[\\ce{MnO4-}]} + \\frac{0.05916 \\times 8}{5} \\log [\\ce{H+}]$$
Karena $\\text{pH} = -\\log[\\ce{H+}]$:
$$E = E^\\circ - \\left(\\frac{8 \\times 0.05916}{5}\\right) \\text{pH} - \\frac{0.05916}{5} \\log \\frac{[\\ce{Mn^2+}]}{[\\ce{MnO4-}]}$$
$$E = +1.507\\text{ V} - 0.0947 \\cdot \\text{pH} - 0.0118 \\log \\frac{[\\ce{Mn^2+}]}{[\\ce{MnO4-}]}$$
*Wawasan Kritis:* Setiap kenaikan satu unit pH menurunkan potensial reduksi permanganat sebesar $94.7\\text{ mV}$. Oleh karena itu, $\\ce{KMnO4}$ bertindak sebagai oksidator yang sangat perkasa dalam suasana asam kuat, namun kekuatannya menurun drastis dalam suasana netral atau basa.

---

### 3. Keadaan Kesetimbangan Dinamis ($E_{\\text{sel}} = 0$):
Saat baterai habis (sel mencapai kesetimbangan kimia sempurna), tidak ada lagi arus listrik yang dapat mengalir:
$$E_{\\text{sel}} = 0 \\implies Q = K_{eq} \\implies E^\\circ_{\\text{sel}} = \\frac{0.05916}{n} \\log K_{eq}$$`,
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
      content: `Sel konsentrasi adalah sel volta khusus di mana kedua kompartemen elektroda terbuat dari bahan kimia yang identik, tetapi memiliki konsentrasi ion analit (atau tekanan gas) yang berbeda.

### 1. Prinsip Kerja & Penurunan GGL Sel Konsentrasi:
Perhatikan sel perak berikut:
$$\\ce{Ag(s) | Ag+(aq, encer) || Ag+(aq, pekat) | Ag(s)}$$
- Anoda (Kompartemen Encer): $\\ce{Ag(s) -> Ag+(encer) + e-}$
- Katoda (Kompartemen Pekat): $\\ce{Ag+(pekat) + e- -> Ag(s)}$
Reaksi Sel Bersih:
$$\\ce{Ag+(pekat) -> Ag+(encer)}$$
Karena elektroda dan ion pada kedua kompartemen identik, potensial reduksi standarnya sama persis:
$$E^\\circ_{\\text{sel}} = E^\\circ(\\ce{Ag+/Ag}) - E^\\circ(\\ce{Ag+/Ag}) = 0.000\\text{ V}$$
Berdasarkan Persamaan Nernst:
$$E_{\\text{sel}} = 0 - \\frac{0.05916}{1} \\log \\frac{[\\ce{Ag+}]_{\\text{encer}}}{[\\ce{Ag+}]_{\\text{pekat}}} = +0.05916 \\log \\frac{[\\ce{Ag+}]_{\\text{pekat}}}{[\\ce{Ag+}]_{\\text{encer}}}$$
Karena $[\\ce{Ag+}]_{\\text{pekat}} > [\\ce{Ag+}]_{\\text{encer}}$, rasio konsentrasi $> 1$, menghasilkan nilai $E_{\\text{sel}} > 0$ (spontan). Aliran elektron berlangsung spontan hingga konsentrasi kedua kompartemen menjadi identik ($E_{\\text{sel}} \\to 0$).

---

### 2. Penentuan Tetapan Hasil Kali Kelarutan ($K_{sp}$) secara Potensiometri:
Jika kompartemen anoda diisi dengan larutan jenuh garam sangat sukar larut (misal $\\ce{AgCl}$), konsentrasi ion perak bebas sangat encer ($[\\ce{Ag+}]_{\\text{anoda}} = s$):
$$E_{\\text{sel}} = -0.05916 \\log \\frac{[\\ce{Ag+}]_{\\text{anoda}}}{[\\ce{Ag+}]_{\\text{katoda}}}$$
Dari voltase terukur $E_{\\text{sel}}$, nilai $[\\ce{Ag+}]_{\\text{anoda}}$ dapat dihitung hingga batas konsentrasi nanometrik ($10^{-10}\\text{ M}$) yang mustahil diukur secara gravimetri biasa. Selanjutnya:
$$K_{sp}(\\ce{AgCl}) = [\\ce{Ag+}][\\ce{Cl-}]$$

---

### 3. Penentuan Tetapan Pembentukan Kompleks ($K_f$):
Bila ke dalam kompartemen anoda ditambahkan ligan berlebih (seperti $\\ce{NH3}$), ion $\\ce{Ag+}$ terikat membentuk kompleks $\\ce{[Ag(NH3)2]+}$:
$$\\ce{Ag+ + 2NH3 <=> [Ag(NH3)2]+} \\quad K_f = \\frac{[\\ce{[Ag(NH3)2]+}]}{[\\ce{Ag+}][\\ce{NH3}]^2}$$
Penurunan drastis konsentrasi $[\\ce{Ag+}]$ bebas menyebabkan lonjakan voltase $E_{\\text{sel}}$, yang memberikan data termodinamika presisi untuk menghitung nilai $K_f$.`,
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
      content: `Dalam kimia anorganik dan olimpiade kimia tingkat lanjut, hubungan redoks antar spesi dari suatu unsur dengan banyak bilangan oksidasi dirangkum menggunakan Diagram Latimer dan Diagram Frost.

### 1. Diagram Latimer:
Diagram Latimer menampilkan bilangan oksidasi suatu unsur secara linier dari tingkat oksidasi tertinggi (paling kiri) ke tingkat oksidasi terendah (paling kanan), dengan nilai potensial reduksi standar ($E^\\circ$ dalam Volt) dituliskan di atas anak panah penghubung:
$$\\ce{A ->[E^\\circ_1] B ->[E^\\circ_2] C}$$
di mana tahap 1 melibatkan transfer $n_1$ elektron, dan tahap 2 melibatkan $n_2$ elektron.

**Aturan Penentuan Potensial Lompatan ($E^\\circ_{13}$ untuk $\\ce{A -> C}$):**
*Peringatan Kritis:* Nilai potensial elektroda **BUKAN besaran ekstensif sehingga TIDAK DAPAT dijumlahkan secara langsung** ($E^\\circ_{13} \\neq E^\\circ_1 + E^\\circ_2$)!
Penjumlahan yang valid harus melalui energi bebas Gibbs:
$$\\Delta G^\\circ_{13} = \\Delta G^\\circ_1 + \\Delta G^\\circ_2$$
$$-(n_1 + n_2)F E^\\circ_{13} = -n_1 F E^\\circ_1 - n_2 F E^\\circ_2$$
$$E^\\circ_{13} = \\frac{n_1 E^\\circ_1 + n_2 E^\\circ_2}{n_1 + n_2}$$

---

### 2. Kriteria Termodinamika Disproporsionasi pada Diagram Latimer:
Suatu spesi intermediet $\\ce{B}$ akan mengalami **disproporsionasi spontan** ($\\ce{2B -> A + C}$) jika dan hanya jika:
$$E^\\circ_{\\text{kanan}} > E^\\circ_{\\text{kiri}}$$
$$E^\\circ_{\\text{disprop}} = E^\\circ_{\\text{kanan}} - E^\\circ_{\\text{kiri}} > 0$$
- Jika $E^\\circ_{\\text{kanan}} > E^\\circ_{\\text{kiri}}$: Spesi intermediet bersifat termodinamis tidak stabil dalam larutan dan terurai spontan.
- Jika $E^\\circ_{\\text{kanan}} < E^\\circ_{\\text{kiri}}$: Spesi intermediet stabil; sebaliknya reaksi **komproporsionasi** antara $\\ce{A}$ dan $\\ce{C}$ akan berlangsung spontan membentuk $\\ce{B}$.

---

### 3. Diagram Frost ($nE^\\circ$ vs Bilangan Oksidasi $N$):
Diagram Frost memplot besaran energi bebas relatif $\\frac{\\Delta G^\\circ}{-F} = nE^\\circ$ (dalam Volt) terhadap bilangan oksidasi ($N$):
1. Titik terendah pada kurva diagram Frost adalah **spesi yang paling stabil secara termodinamika**.
2. Kemiringan (*slope*) garis yang menghubungkan dua titik sembarang merepresentasikan nilai potensial reduksi standar ($E^\\circ$) dari pasangan redoks tersebut.
3. **Kriteria Disproporsionasi Geometris:**
   - Jika suatu titik spesi terletak **di atas garis lurus** yang menghubungkan dua tetangganya (kurva cembung / *convex*), spesi tersebut **tidak stabil dan mengalami disproporsionasi**.
   - Jika suatu titik terletak **di bawah garis lurus** (kurva cekung / *concave*), spesi tersebut stabil terhadap disproporsionasi (komproporsionasi disukai).`,
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
      content: `Aplikasi paling vital dari prinsip elektrokimia meliputi perangkat penyimpanan energi elektrokimia (baterai) dan pencegahan degradasi material logam (korosi).

### 1. Klasifikasi Perangkat Sel Elektrokimia Komersial:
- **Sel Primer (Tidak Dapat Diisi Ulang):**
  Contoh: Sel Kering Seng-Karbon Leclanché dan Baterai Alkali ($\\ce{Zn-MnO2}$ dalam elektrolit $\\ce{KOH}$):
  Anoda: $\\ce{Zn(s) + 2OH-(aq) -> ZnO(s) + H2O(l) + 2e-}$
  Katoda: $\\ce{2MnO2(s) + H2O(l) + 2e- -> Mn2O3(s) + 2OH-(aq)}$
  Tegangan operasional stabil $1.5\\text{ V}$.
- **Sel Sekunder (Dapat Diisi Ulang / Reversible):**
  1. **Aki Asam Timbal (*Lead-Acid Accumulator*):**
     Discharge: $\\ce{Pb(s) + PbO2(s) + 2H2SO4(aq) -> 2PbSO4(s) + 2H2O(l)} \\quad (E_{\\text{sel}} \\approx 2.05\\text{ V/sel})$
     Massa jenis elektrolit $\\ce{H2SO4}$ menurun saat pengosongan ($1.28\\text{ g/cm}^3 \\to 1.15\\text{ g/cm}^3$), menjadi indikator status muatan.
  2. **Baterai Litium-Ion (*Li-ion Battery*):**
     Bekerja melalui mekanisme interkalasi/deinterkalasi kation $\\ce{Li+}$ bolak-balik:
     Anoda: $\\ce{Li_x C6 <=> x Li+ + x e- + 6C}$ (Grafit)
     Katoda: $\\ce{Li_{1-x}CoO2 + x Li+ + x e- <=> LiCoO2}$ (Oksida kobalt)
     Menghasilkan voltase tinggi ($3.7 - 4.2\\text{ V}$) dengan densitas energi gravimetri luar biasa.

---

### 2. Sel Bahan Bakar (*Fuel Cell*):
Sel galvani terbuka di mana reaktan terus dialirkan secara kontinu dari luar:
- Sel Bahan Bakar Hidrogen-Oksigen:
  Anoda: $\\ce{2H2(g) + 4OH-(aq) -> 4H2O(l) + 4e-}$
  Katoda: $\\ce{O2(g) + 2H2O(l) + 4e- -> 4OH-(aq)}$
  Reaksi Total: $\\ce{2H2(g) + O2(g) -> 2H2O(l)} \\quad (E^\\circ = +1.229\\text{ V})$
  Efisiensi termodinamika teoritis maksimum tidak dibatasi oleh siklus Carnot:
  $$\\eta_{\\text{teoritis}} = \\frac{\\Delta G^\\circ}{\\Delta H^\\circ} = \\frac{-237.13\\text{ kJ/mol}}{-285.83\\text{ kJ/mol}} = 82.96\\% \\approx 83\\%$$

---

### 3. Elektrokimia Korosi & Metode Proteksi Katodik:
Korosi besi adalah pembentukan sel galvani mikroskopis spontan pada permukaan logam yang terpapar kelembapan udara dan oksigen:
- **Anoda (Daerah Cekungan / Pit):** $\\ce{Fe(s) -> Fe^2+(aq) + 2e-} \\quad (E^\\circ = -0.44\\text{ V})$
- **Katoda (Tepi Tetesan Air):** $\\ce{O2(g) + 2H2O(l) + 4e- -> 4OH-(aq)} \\quad (E^\\circ = +0.40\\text{ V})$
- Ion $\\ce{Fe^2+}$ bereaksi dengan $\\ce{OH-}$ dan teroksidasi lebih lanjut membentuk karat hidrous $\\ce{Fe2O3 \\cdot x H2O}$.

**Metode Pencegahan Korosi:**
1. **Pelapisan Pelindung:** Pengecatan, pelapisan oli, atau pelapisan logam inert (misal pelapisan timah $\\ce{Sn}$ pada kaleng; namun jika lapisan timah tergores, besi terkorosi jauh lebih cepat karena $E^\\circ(\\ce{Fe}) < E^\\circ(\\ce{Sn})$).
2. **Proteksi Katodik Anoda Korban (*Sacrificial Anode*):** Menghubungkan pipa besi dengan logam yang memiliki $E^\\circ$ lebih negatif (seperti blok $\\ce{Mg}$ atau seng $\\ce{Zn}$, galvanisasi). Logam $\\ce{Zn}$ teroksidasi mengorbankan dirinya dan memaksa besi menjadi katoda yang terlindungi secara absolut.`,
      keyFormulas: [
        { name: 'Efisiensi Termodinamika Sel Bahan Bakar', formula: '\\eta = \\frac{\\Delta G^\\circ}{\\Delta H^\\circ}' },
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
$$\\ce{2Cr2O7^2- + 3CH3CH2OH + 16H+ -> 4Cr^3+ + 3CH3COOH + 11H2O}$$

**Langkah 2: Menghitung Stoikiometri Mol Dikromat yang Bereaksi**
1. Mol $\\ce{Cr2O7^2-}$ awal ditambahkan:
   $$n_{\\text{awal}} = 25.00\\text{ mL} \\times 0.0500\\text{ mmol/mL} = 1.250\\text{ mmol}$$
2. Reaksi titrasi balik dengan ion $\\ce{Fe^2+}$:
   $$\\ce{Cr2O7^2- + 6Fe^2+ + 14H+ -> 2Cr^3+ + 6Fe^3+ + 7H2O}$$
   $$\\text{Mol } \\ce{Fe^2+} = 16.50\\text{ mL} \\times 0.1000\\text{ mmol/mL} = 1.650\\text{ mmol}$$
   $$\\text{Mol } \\ce{Cr2O7^2-}_{\\text{sisa}} = \\frac{1}{6} \\times n_{\\ce{Fe^2+}} = \\frac{1.650\\text{ mmol}}{6} = 0.2750\\text{ mmol}$$
3. Mol $\\ce{Cr2O7^2-}$ yang bereaksi dengan etanol:
   $$n_{\\text{bereaksi}} = n_{\\text{awal}} - n_{\\text{sisa}} = 1.250\\text{ mmol} - 0.2750\\text{ mmol} = 0.9750\\text{ mmol}$$

**Langkah 3: Menghitung Kadar Etanol dalam Sampel Asli**
Berdasarkan rasio stoikiometri reaksi setara ($2\\ce{Cr2O7^2-} : 3\\ce{CH3CH2OH}$):
$$n_{\\text{etanol (20.0 mL)}} = \\frac{3}{2} \\times n_{\\text{bereaksi}} = \\frac{3}{2} \\times 0.9750\\text{ mmol} = 1.4625\\text{ mmol}$$
Jumlah mol etanol dalam seluruh labu takar ($500.0\\text{ mL}$):
$$n_{\\text{etanol (total)}} = 1.4625\\text{ mmol} \\times \\frac{500.0\\text{ mL}}{20.00\\text{ mL}} = 36.5625\\text{ mmol} = 0.03656\\text{ mol}$$

Massa etanol dalam $25.00\\text{ mL}$ sampel anggur asli:
$$m_{\\text{etanol}} = 0.0365625\\text{ mol} \\times 46.07\\text{ g/mol} = 1.6844\\text{ gram}$$
Volume etanol murni:
$$V_{\\text{etanol}} = \\frac{m_{\\text{etanol}}}{\\rho} = \\frac{1.6844\\text{ g}}{0.789\\text{ g/mL}} = 2.1349\\text{ mL}$$
Persentase volume per volume ($\\% \\text{ v/v}$):
$$\\% \\text{ v/v} = \\frac{V_{\\text{etanol}}}{V_{\\text{sampel}}} \\times 100\\% = \\frac{2.1349\\text{ mL}}{25.00\\text{ mL}} \\times 100\\% = 8.54\\% \\text{ v/v}$$

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
$$Q_{\\text{total}} = I \\cdot t = 2.50\\text{ A} \\times 2100\\text{ s} = 5250\\text{ Coulomb}$$
Muatan listrik efektif dengan efisiensi $\\eta = 92.0\\%$:
$$Q_{\\text{efektif}} = Q_{\\text{total}} \\times 0.920 = 5250\\text{ C} \\times 0.920 = 4830\\text{ Coulomb}$$

**Langkah 2: Menghitung Massa Emas yang Terdeposisi**
Jumlah mol elektron efektif:
$$n_{e^-} = \\frac{Q_{\\text{efektif}}}{F} = \\frac{4830\\text{ C}}{96,485\\text{ C/mol}} = 0.05006\\text{ mol}$$
Karena valensi reduksi emas(I) adalah $z = 1$ ($\\ce{Au+ + e- -> Au}$):
$$n_{\\ce{Au}} = n_{e^-} = 0.05006\\text{ mol}$$
Massa emas terdeposisi:
$$m_{\\ce{Au}} = 0.05006\\text{ mol} \\times 196.97\\text{ g/mol} = 9.860\\text{ gram}$$

**Langkah 3: Menghitung Ketebalan Lapisan Emas (d)**
Volume total lapisan emas:
$$V = \\frac{m_{\\ce{Au}}}{\\rho_{\\ce{Au}}} = \\frac{9.860\\text{ g}}{19.30\\text{ g/cm}^3} = 0.5109\\text{ cm}^3$$
Hubungan volume dengan luas permukaan dan ketebalan ($V = A \\cdot d$):
$$d = \\frac{V}{A} = \\frac{0.5109\\text{ cm}^3}{150.0\\text{ cm}^2} = 3.406 \\times 10^{-3}\\text{ cm}$$
Konversikan ke satuan mikrometer ($1\\text{ cm} = 10^4\\ \\mu\\text{m}$):
$$d = (3.406 \\times 10^{-3}\\text{ cm}) \\times 10^4\\ \\mu\\text{m/cm} = 34.06\\ \\mu\\text{m} \\approx 34.1\\ \\mu\\text{m}$$

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
$$\\Delta G^\\circ = -212,267\\text{ J/mol} = -212.27\\text{ kJ/mol}$$

**Langkah 2: Menghitung Entropi Reaksi Standar ΔS°**
Gunakan relasi termodinamika Maxwell:
$$\\Delta S^\\circ = n F \\left(\\frac{\\partial E}{\\partial T}\\right)_P$$
$$\\Delta S^\\circ = (2) \\times (96,485\\text{ C/mol}) \\times (-4.30 \\times 10^{-4}\\text{ V/K})$$
$$\\Delta S^\\circ = -82.98\\text{ J}/(\\text{mol}\\cdot\\text{K})$$

**Langkah 3: Menghitung Entalpi Reaksi Standar ΔH°**
Gunakan persamaan $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$:
$$\\Delta H^\\circ = \\Delta G^\\circ + T \\Delta S^\\circ$$
$$T \\Delta S^\\circ = 298.15\\text{ K} \\times (-82.98\\text{ J}/(\\text{mol}\\cdot\\text{K})) = -24,740.5\\text{ J/mol} = -24.74\\text{ kJ/mol}$$
$$\\Delta H^\\circ = -212.27\\text{ kJ/mol} + (-24.74\\text{ kJ/mol}) = -237.01\\text{ kJ/mol}$$

*Metode Alternatif Langsung:*
$$\\Delta H^\\circ = -nF \\left[ E^\\circ - T \\left(\\frac{\\partial E}{\\partial T}\\right)_P \\right] = -192,970 \\left[ 1.1000 - (298.15 \\times (-4.30 \\times 10^{-4})) \\right]$$
$$\\Delta H^\\circ = -192,970 \\left[ 1.1000 + 0.1282 \\right] = -192,970 \\times 1.2282 = -237,006\\text{ J/mol} = -237.01\\text{ kJ/mol} \\quad (\\text{Identik}).$$

**Langkah 4: Evaluasi Pertukaran Kalor Reversibel q_rev**
Berdasarkan hukum kedua termodinamika:
$$q_{\\text{rev}} = T \\Delta S^\\circ = -24.74\\text{ kJ/mol}$$
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
$$[\\ce{Ag+}]_{\\text{kanan}} = 0.0500 \\times (3.378 \\times 10^{-8}) = 1.689 \\times 10^{-9}\\text{ M}$$

**Langkah 3: Menghitung Nilai Ksp AgCl**
Konsentrasi ion klorida dalam kompartemen kanan berasal dari garam terdisosiasi sempurna $\\ce{KCl}$ ($0.100\\text{ M}$), sehingga $[\\ce{Cl-}] = 0.100\\text{ M}$:
$$K_{sp}(\\ce{AgCl}) = [\\ce{Ag+}][\\ce{Cl-}] = (1.689 \\times 10^{-9}\\text{ M}) \\times (0.100\\text{ M}) = 1.689 \\times 10^{-10} \\approx 1.69 \\times 10^{-10}$$

**Langkah 4: Menghitung Ksp AgBr**
Untuk sistem $\\ce{AgBr}$ dengan $E_{\\text{sel}} = 0.5890\\text{ V}$:
$$\\log\\left(\\frac{[\\ce{Ag+}]_{\\text{Br}}}{0.0500}\\right) = -\\frac{0.5890}{0.05916} = -9.9560$$
$$\\frac{[\\ce{Ag+}]_{\\text{Br}}}{0.0500} = 10^{-9.9560} = 1.1066 \\times 10^{-10}$$
$$[\\ce{Ag+}]_{\\text{Br}} = 0.0500 \\times (1.1066 \\times 10^{-10}) = 5.533 \\times 10^{-12}\\text{ M}$$
Konsentrasi ion bromida $[\\ce{Br-}] = 0.100\\text{ M}$:
$$K_{sp}(\\ce{AgBr}) = [\\ce{Ag+}][\\ce{Br-}] = (5.533 \\times 10^{-12}\\text{ M}) \\times (0.100\\text{ M}) = 5.533 \\times 10^{-13} \\approx 5.53 \\times 10^{-13}$$

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
$$E^\\circ(\\ce{MnO4- / Mn^2+}) = \\frac{7.546\\text{ V}}{5} = 1.5092\\text{ V} \\approx +1.51\\text{ V}$$

**Langkah 2: Evaluasi Kestabilan Disproporsionasi**
Spesi intermediet mengalami disproporsionasi jika $E^\\circ_{\\text{kanan}} > E^\\circ_{\\text{kiri}}$:
1. **Spesi $\\ce{MnO4^2-}$ ($+6$):**
   - $E^\\circ_{\\text{kiri}} = +0.564\\text{ V}$
   - $E^\\circ_{\\text{kanan}} = +2.261\\text{ V}$
   Karena $E^\\circ_{\\text{kanan}} (2.261) > E^\\circ_{\\text{kiri}} (0.564)$, ion manganat(VI) **TIDAK STABIL dan mengalami disproporsionasi spontan**:
   $$E^\\circ_{\\text{disprop}} = 2.261\\text{ V} - 0.564\\text{ V} = +1.697\\text{ V} > 0$$
   Reaksi setara:
   $$\\ce{3MnO4^2-(aq) + 4H+(aq) -> 2MnO4-(aq) + MnO2(s) + 2H2O(l)}$$

2. **Spesi $\\ce{MnO2}$ ($+4$):**
   - $E^\\circ_{\\text{kiri}} = +2.261\\text{ V}$
   - $E^\\circ_{\\text{kanan}} = +0.951\\text{ V}$
   Karena $E^\\circ_{\\text{kanan}} (0.951) < E^\\circ_{\\text{kiri}} (2.261)$, $\\ce{MnO2}$ **STABIL** terhadap disproporsionasi.

3. **Spesi $\\ce{Mn^3+}$ ($+3$):**
   - $E^\\circ_{\\text{kiri}} = +0.951\\text{ V}$
   - $E^\\circ_{\\text{kanan}} = +1.509\\text{ V}$
   Karena $E^\\circ_{\\text{kanan}} (1.509) > E^\\circ_{\\text{kiri}} (0.951)$, ion $\\ce{Mn^3+}$ **TIDAK STABIL dan mengalami disproporsionasi spontan**:
   $$E^\\circ_{\\text{disprop}} = 1.509\\text{ V} - 0.951\\text{ V} = +0.558\\text{ V} > 0$$
   Reaksi setara:
   $$\\ce{2Mn^3+(aq) + 2H2O(l) -> Mn^2+(aq) + MnO2(s) + 4H+(aq)}$$

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
