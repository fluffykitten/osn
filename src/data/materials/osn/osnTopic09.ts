/**
 * osnTopic09.ts
 * Topik 9: Kimia Analitik & Dasar Spektroskopi
 * Jenjang: OSN / IChO
 */

import type { MaterialItem } from '../../materialsData.ts';
import { CHECKPOINTS_TOPIC_OSN_09 } from '../../checkpoints/checkpointBankTopicOsn09.ts';

export const OSN_TOPIC_9: MaterialItem = {
  id: 9,
  topic_number: 9,
  title: 'Kimia Analitik & Dasar Spektroskopi',
  slug: 'analitik-spektroskopi',
  category: 'Kimia Analitik',
  level: 'OSN',
  readTimeMinutes: 45,
  summary: 'Kajian komprehensif titrasi redoks (permanganometri, iodometri/iodimetri), gravimetri presipitasi & evaluasi statistik analitik, teori kromatografi (van Deemter, retensi, efisiensi & resolusi), spektrofotometri UV-Vis & Hukum Lambert-Beer multikomponen, spektroskopi inframerah (FT-IR) osilator harmonik, spektroskopi resonansi magnetik inti (1H & 13C-NMR), spektrometri massa (MS) pola isotop & fragmentasi, serta metode kalibrasi & validasi analitik.',
  allTags: [
    'titrasi-redoks',
    'permanganometri',
    'iodometri',
    'iodimetri',
    'titik-ekivalen-redoks',
    'indikator-amilum',
    'analisis-gravimetri',
    'faktor-gravimetri',
    'kopresipitasi',
    'evaluasi-statistik',
    'uji-t-student',
    'rentang-kepercayaan',
    'kromatografi',
    'faktor-retensi',
    'efisiensi-kolom',
    'pelat-teoritis',
    'persamaan-van-deemter',
    'resolusi-kromatografi',
    'spektrofotometri-uv-vis',
    'hukum-lambert-beer',
    'absorbansi',
    'koefisien-ekstingsi-molar',
    'analisis-multikomponen',
    'kromofor-auksokrom',
    'spektroskopi-ir',
    'osilator-harmonik',
    'hukum-hooke',
    'frekuensi-vibrasi',
    'gugus-fungsi',
    'efek-konjugasi-tegangan-cincin',
    'spektroskopi-nmr',
    'pergeseran-kimia',
    'aturan-n-plus-1',
    'konstanta-kopling-j',
    'c13-nmr',
    'dept-nmr',
    'spektrometri-massa',
    'ion-molekuler',
    'pola-isotop',
    'pemutusan-alfa',
    'penataan-ulang-mclafferty',
    'kation-tropilium',
    'kalibrasi-analitik',
    'adisi-standar',
    'standar-internal',
    'validasi-metode',
    'limit-of-detection-lod',
    'efek-matriks',
    'soal-osn',
    'analisis-kuantitatif',
    'kadar-tembaga',
    'matriks-spektrofotometri',
    'efek-isotop',
    'karbonil',
    'elusidasi-struktur',
  ],
  prerequisites: [
    {
      tag: 'prasyarat-titrasi-redoks-stoikiometri-ekivalensi',
      tags: ['titrasi-redoks', 'permanganometri', 'iodometri', 'iodimetri', 'titik-ekivalen-redoks', 'indikator-amilum'],
      title: 'Prasyarat 1: Prinsip Stoikiometri Titrasi Redoks, Permanganometri, & Iodometri',
      summary: 'Konsep transfer elektron, penyetaraan setengah reaksi ion-elektron, permanganometri sebagai autoindikator, dan iodometri tidak langsung berindikator amilum.',
      checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_09['prasyarat-titrasi-redoks-stoikiometri-ekivalensi'],
      content: `### ⚖️ Pertukaran Elektron Pasar Modal Redoks: Kacamata Autoindikator Permanganat & Detektif Amilum-Iodometri

Dalam titrasi asam-basa, mata uang yang dipertukarkan adalah proton ($\\ce{H+}$). Dalam **titrasi redoks**, mata uang fundamentalnya adalah **elektron ($e^-$)**. Pada titik ekivalen redoks, neraca perdagangan elektron harus seimbang mutlak: jumlah total mol elektron yang dilepaskan oleh reduktor tepat sama dengan jumlah total mol elektron yang diserap oleh oksidator:
$$n_{e1} \\cdot n_1 = n_{e2} \\cdot n_2 \\implies n_{e1} \\cdot M_1 \\cdot V_1 = n_{e2} \\cdot M_2 \\cdot V_2$$
dengan $n_e$ adalah jumlah elektron yang ditransfer per mol pereaksi dalam setengah reaksinya.

---

### 🧭 1. Permanganometri: Sang Autoindikator Alami

Kalium permanganat ($\\ce{KMnO4}$) adalah titran oksidator kuat primadona di laboratorium:
Dalam suasana asam kuat sulfat ($\\ce{H2SO4}$):
$$\\ce{MnO4- + 8H+ + 5e- -> Mn^2+ + 4H2O} \\quad (E^\\circ = +1.51\\text{ V})$$
- **Autoindikator:** Ion $\\ce{MnO4-}$ berwarna ungu pekat menyala, sedangkan produk reduksinya kation $\\ce{Mn^2+}$ berwarna merah muda sangat pucat (praktis tak berwarna).
- Selama analit reduktor masih ada, setiap tetes $\\ce{KMnO4}$ langsung tereduksi dan warnanya lenyap seketika.
- Tepat saat analit habis, satu tetes kelebihan $\\ce{KMnO4}$ ($\sim 0.02\\text{ mL}$) memberikan warna **merah muda stabil ($\ge 30\\text{ detik}$)** pada seluruh larutan tanpa perlu menambahkan indikator kimiawi luar!

**Baku Primer Standarisasi:**
Larutan $\\ce{KMnO4}$ tidak stabil murni (mengalami autodekomposisi oleh cahaya dan bekas $\\ce{MnO2}$), sehingga harus distandarisasi menggunakan natrium oksalat ($\\ce{Na2C2O4}$):
$$5\\ce{C2O4^2- + 2MnO4- + 16H+ -> 10CO2(g) + 2Mn^2+ + 8H2O}$$

---

### 🧭 2. Duel Redoks Iodin: Iodimetri Langsung vs Iodometri Tidak Langsung

Sistem redoks iodin berpusat pada kesetimbangan triiodida/iodida:
$$\\ce{I3- + 2e- <=> 3I-} \\quad (E^\\circ = +0.54\\text{ V})$$

1. **Iodimetri (Titrasi Redoks Langsung):**
   - Analit yang diuji adalah agen pereduksi kuat (reduktor), seperti vitamin C (asam askorbat $\\ce{C6H8O6}$), $\\ce{Sn^2+}$, atau $\\ce{AsO3^3-}$.
   - Analit langsung dititrasi dengan larutan baku standar iodin ($\\ce{I2}$ terlarut dalam $\\ce{KI}$ sebagai $\\ce{I3-}$).
2. **Iodometri (Titrasi Redoks Tidak Langsung):**
   - Analit yang diuji adalah agen pengoksidasi kuat (oksidator), seperti ion tembaga(II) ($\\ce{Cu^2+}$), klorin aktif pemutih ($\\ce{ClO-}$), atau kromat ($\\ce{Cr2O7^2-}$).
   - Analit direaksikan dengan ion iodida ($\\ce{I-}$) berlebih dalam jumlah melimpah untuk membebaskan iodin ekuivalen:
     $$2\\ce{Cu^2+ + 4I- -> 2CuI(s) + I2}$$
   - Iodin molekuler ($\\ce{I2}$) yang terbebas kemudian dititrasi secara sangat presisi dengan larutan standar **natrium tiosulfat ($\\ce{Na2S2O3}$)**:
     $$\\ce{I2 + 2S2O3^2- -> 2I- + S4O6^2-} \\quad (\\text{ion tetrationat})$$

---

### 🧭 3. Dinamika Detektif Indikator Amilum: Kapan Wajib Dimasukkan?

Indikator amilum (pati) membentuk kompleks inklusi heliks berwarna **biru tua intens** dengan poliodida ($\\ce{I3-}$ dan $\\ce{I5-}$).
- **Jebakan Fatal Waktu Penambahan:** Amilum **DILARANG KERAS** ditambahkan di awal titrasi saat larutan masih berwarna coklat gelap (konsentrasi $\\ce{I2}$ tinggi)!
- Pada konsentrasi tinggi, iodin terperangkap secara ireversibel di dalam rongga heliks amilosa. Akibatnya, titran tiosulfat kesulitan menarik kembali iodin, menyebabkan titik akhir titrasi terlambat dan pudar (*trailing*).
- **Prosedur Baku:** Titrasi larutan iodin terlebih dahulu hingga warnanya memudar dari coklat pekat menjadi **kuning jerami pucat**. Baru pada saat itulah beberapa tetes amilum ditambahkan (larutan seketika menjadi biru tua). Titrasi dilanjutkan tetes demi tetes hingga warna biru tepat lenyap menjadi tak berwarna atau putih susu stabil!

---

### 📊 Matriks Perbandingan Sistem Titrasi Redoks Utama

| Parameter Analitik | Permanganometri | Iodimetri (Langsung) | Iodometri (Tidak Langsung) |
| :--- | :--- | :--- | :--- |
| **Sifat Analit** | Reduktor ($\ce{Fe^2+}, \\ce{C2O4^2-}$) | Reduktor ($\ce{AsO3^3-}$, Vit C) | Oksidator ($\ce{Cu^2+}, \\ce{ClO-}, \\ce{Cr2O7^2-}$) |
| **Titran Baku** | $\\ce{KMnO4}$ ($5e^-$ transfer) | Larutan $\\ce{I2/I3-}$ ($2e^-$) | $\\ce{Na2S2O3}$ ($1e^-$ per tiosulfat) |
| **Indikator Visual** | Autoindikator (merah muda) | Amilum (tak berwarna $\\to$ biru) | Amilum (biru tua $\\to$ tak berwarna) |
| **Suasana Medium** | Asam sulfat kuat ($\\ce{H2SO4}$) | Netral hingga sedikit asam | Asam lemah (buffer asetat $\\text{pH } 3-5$) |

---

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Mengapa HCl Terlarang pada Permanganometri?
> - **Miskonsepsi Umum**: Siswa menggunakan larutan asam klorida ($\\ce{HCl}$) untuk mengasamkan larutan titrasi permanganat karena mengira semua asam kuat setara.
> - **Kaidah yang Benar**: Potensial reduksi $\\ce{MnO4-/Mn^2+} = +1.51\\text{ V}$ lebih tinggi daripada $\\ce{Cl2/Cl-} = +1.36\\text{ V}$. Dalam medium $\\ce{HCl}$, permanganat akan mengoksidasi $\\ce{Cl-}$ menjadi gas $\\ce{Cl2}$ beracun. Volume titran $\\ce{KMnO4}$ yang terbuang sia-sia menghasilkan perhitungan kadar analit yang salah tinggi (*false high*). Wajib gunakan **$\\ce{H2SO4}$**!

---

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Trik Penambahan KSCN pada Titrasi Tembaga
> Endapan putih tembaga(I) iodida ($\\ce{CuI}$) mengadsorpsi molekul $\\ce{I2}$ pada permukaannya. Tambahkan sedikit kristal **$\\ce{KSCN}$** tepat sebelum titik akhir titrasi tercapai!
> $$\\ce{CuI(s) + SCN- -> CuSCN(s) + I-}$$
> Karena $\\ce{CuSCN}$ memiliki $K_{sp}$ lebih kecil ($4.8 \\times 10^{-15}$) dibanding $\\ce{CuI}$ ($1.1 \\times 10^{-12}$), reaksi metatesis permukaan ini melepaskan seluruh sisa $\\ce{I2}$ yang terperangkap kembali ke larutan, menghasilkan lonjakan ketajaman titik akhir titrasi yang spektakuler!`,
      keyFormulas: [
        { name: 'Neraca Ekivalensi Redoks', formula: 'n_{e1} \\cdot M_1 \\cdot V_1 = n_{e2} \\cdot M_2 \\cdot V_2' },
        { name: 'Reduksi Permanganat Asam', formula: '\\ce{MnO4- + 8H+ + 5e- -> Mn^2+ + 4H2O} \\quad (n_e = 5)' },
        { name: 'Oksidasi Tiosulfat oleh Iodin', formula: '\\ce{I2 + 2S2O3^2- -> 2I- + S4O6^2-} \\quad (n_e = 1 \\text{ per } \\ce{S2O3^2-})' },
      ],
    },
    {
      tag: 'prasyarat-gravimetri-kesalahan-analisis-statistik',
      tags: ['analisis-gravimetri', 'faktor-gravimetri', 'kopresipitasi', 'evaluasi-statistik', 'uji-t-student', 'rentang-kepercayaan'],
      title: 'Prasyarat 2: Analisis Gravimetri Presipitasi & Evaluasi Data Statistik Kimia Analitik',
      summary: 'Tahapan kuantitatif gravimetri, faktor gravimetri GF, kondisi von Weimarn, penanganan kopresipitasi, serta evaluasi statistik mean, standar deviasi, dan uji signifikansi.',
      checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_09['prasyarat-gravimetri-kesalahan-analisis-statistik'],
      content: `### ⚖️ Neraca Presisi Pengendapan Gravimetri & Saringan Statistik Penyingkir Data Outlier

Analisis gravimetri presipitasi adalah salah satu metode tertua namun paling presisi dalam sejarah kimia: massa analit murni diisolasi sebagai endapan padat berstoikiometri tertentu melalui reaksi pengendapan, penyaringan cermat, pencucian, dan pemijaran/pengeringan konstan.

---

### 🧭 1. Faktor Gravimetri (Gravimetric Factor / GF)

Faktor Gravimetri ($GF$) menghubungkan massa endapan padat yang ditimbang pada neraca analitik dengan massa analit murni yang dicari:
$$GF = \\frac{a \\cdot M_r(\\text{analit dicari})}{b \\cdot M_r(\\text{endapan ditimbang})}$$
$$\\%\\text{ Analit} = \\frac{\\text{massa endapan ditimbang} \\times GF}{\\text{massa sampel analitis}} \\times 100\\%$$

*Contoh Perhitungan:*
Jika analit fosfor ($\\ce{P}$, $A_r = 30.974$) diendapkan dan ditimbang sebagai magnesium pirofosfat ($\\ce{Mg2P2O7}$, $M_r = 222.55$):
$$GF = \\frac{2 \\times 30.974}{1 \\times 222.55} = 0.27836$$

---

### 🧭 2. Kondisi Fisik Pengendapan & Rasio Supersaturasi von Weimarn

Karakter fisik endapan (apakah berupa kristal kasar yang mudah disaring atau suspensi koloid seperti susu yang menembus kertas saring) diatur oleh Rasio Kejenuhan Relatif (*Relative Supersaturation* / RSS) von Weimarn:
$$\\text{RSS} = \\frac{Q - S}{S}$$
di mana:
- $Q$: Konsentrasi sesaat reagen saat pencampuran.
- $S$: Kelarutan kesetimbangan endapan dalam medium.

**Dua Rezim Pertumbuhan Endapan:**
1. **Jika $\\text{RSS}$ Sangat Besar:** Laju pembentukan inti kristal baru (nukleasi) melonjak tak terkendali mendominasi laju pertumbuhan partikel. Terbentuk jutaan partikel koloid halus ($1-100\\text{ nm}$) yang sulit disaring dan mengotori analisis.
2. **Jika $\\text{RSS}$ Sangat Kecil:** Laju pertumbuhan kristal mendominasi nukleasi. Kristal tumbuh besar ($> 0.1\\text{ mm}$), murni, cepat mengendap, dan mudah disaring tanpa lolos pori.

**Prosedur Baku Meraih RSS Rendah:**
- Gunakan larutan analit dan pengendap yang encer (menurunkan $Q$).
- Teteskan pereaksi perlahan-lahan sambil diaduk kuat (mencegah akumulasi $Q$ lokal).
- Lakukan pengendapan pada suhu panas mendidih (menaikkan nilai kelarutan $S$).
- Lakukan **Pematangan Ostwald (*Digestion*)**: biarkan endapan terendam di larutan induk panas selama 1-2 jam agar kristal-kristal kecil yang tidak stabil larut dan mengkristal kembali di permukaan kristal besar yang lebih stabil secara termodinamika.

---

### 🧭 3. Evaluasi Statistik Data Analitik Laboratorium:

Dalam kimia analitik presisi tinggi, hasil akhir selalu dilaporkan sebagai nilai rata-rata beserta interval ketidakpastian statistiknya:
1. **Rata-rata Sampel (Mean, $\\bar{x}$):**
   $$\\bar{x} = \\frac{1}{N} \\sum_{i=1}^N x_i$$
2. **Standar Deviasi Sampel ($s$):**
   $$s = \\sqrt{\\frac{\\sum_{i=1}^N (x_i - \\bar{x})^2}{N - 1}}$$
3. **Rentang Kepercayaan (*Confidence Interval* / CI 95%):**
   $$\\mu = \\bar{x} \\pm \\frac{t_{\\text{tabel}} \\cdot s}{\\sqrt{N}}$$
   dengan $t_{\\text{tabel}}$ diperoleh dari distribusi $t$-Student pada derajat kebebasan $\\nu = N - 1$.
4. **Uji-$Q$ Dixon untuk Membuang Data Pencilan (*Outlier*):**
   $$Q_{\\text{hitung}} = \\frac{|x_{\\text{suspect}} - x_{\\text{nearest}}|}{|x_{\\text{max}} - x_{\\text{min}}|}$$
   Jika $Q_{\\text{hitung}} > Q_{\\text{tabel}}$, titik data pencilan tersebut dapat dibuang secara sah pada tingkat kepercayaan yang dipilih (misal $90\\%$ atau $95\\%$).

---

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Derajat Kebebasan $N - 1$
> - **Miskonsepsi Umum**: Siswa membagi dengan $N$ saat menghitung standar deviasi sampel laboratorium.
> - **Kaidah yang Benar**: Untuk data sampel analitik terbatas ($N < 30$), pembagi wajib menggunakan derajat kebebasan **$N - 1$** (koreksi Bessel). Pembagian dengan $N$ hanya berlaku untuk populasi tak hingga teoretis.

---

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Teknik Pencucian Endapan Koloid
> Jangan pernah mencuci endapan koloid yang telah terkoagulasi (seperti $\\ce{AgCl}$) dengan air murni! Air murni akan mengencerkan lapisan listrik ganda dan memicu **peptisasi** (endapan pecah kembali menjadi koloid halus yang menembus kertas saring). Selalu cuci dengan larutan elektrolit volatil seperti asam nitrat encer ($\\ce{HNO3}$) atau amonium nitrat ($\\ce{NH4NO3}$) yang akan menguap habis saat pemijaran.`,
      keyFormulas: [
        { name: 'Faktor Gravimetri GF', formula: 'GF = \\frac{a \\cdot M_r(\\text{analit})}{b \\cdot M_r(\\text{endapan})}' },
        { name: 'Rasio Supersaturasi von Weimarn', formula: '\\text{RSS} = \\frac{Q - S}{S}' },
        { name: 'Rentang Kepercayaan CI', formula: '\\mu = \\bar{x} \\pm \\frac{t \\cdot s}{\\sqrt{N}}' },
      ],
    },
    {
      tag: 'prasyarat-kromatografi-retensi-resolusi',
      tags: ['kromatografi', 'faktor-retensi', 'efisiensi-kolom', 'pelat-teoritis', 'persamaan-van-deemter', 'resolusi-kromatografi'],
      title: 'Prasyarat 3: Teori Kromatografi, Efisiensi Kolom, & Persamaan van Deemter',
      summary: 'Keseimbangan distribusi fase diam dan fase gerak, parameter waktu retensi, jumlah pelat teoritis N, tinggi pelat H, laju alir optimum van Deemter, dan resolusi Rs.',
      checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_09['prasyarat-kromatografi-retensi-resolusi'],
      content: `### 🏃 Lomba Lari Rintangan Kromatografi: Trik Pelat Teoritis & Jalan Tol Optimum van Deemter

Kromatografi adalah seni memisahkan campuran molekul yang kompleks melalui perbedaan afinitas partisi antara **fase diam (*stationary phase*)** yang terpancang di kolom dan **fase gerak (*mobile phase*)** yang mengalir melewatinya. Molekul yang berinteraksi erat dengan fase diam akan tertahan lebih lama di belakang, sementara molekul yang lebih menyukai fase gerak akan melesat keluar lebih dulu.

---

### 🧭 1. Parameter Kunci Kromatogram

1. **Waktu Retensi ($t_R$):** Waktu total yang dibutuhkan analit dari saat injeksi hingga puncaknya terdeteksi di ujung kolom.
2. **Waktu Mati ($t_M$ atau $t_0$):** Waktu transit fase gerak melintasi rongga kosong kolom (diukur menggunakan analit tak tertahan seperti $\\ce{NaNO3}$ atau urasil).
3. **Faktor Retensi / Kapasitas ($k'$):**
   $$k' = \\frac{t_R - t_M}{t_M} = \\frac{t'_R}{t_M}$$
   Nilai analitik ideal berada pada rentang $1 < k' < 10$.
4. **Faktor Selektivitas ($\\alpha$):**
   $$\\alpha = \\frac{k'_2}{k'_1} = \\frac{t'_{R2}}{t'_{R1}} > 1.0$$

---

### 🧭 2. Efisiensi Kolom: Teori Pelat Teoritis ($N$) & Tinggi Pelat ($H$)

Berdasarkan analogi menara fraksinasi distilasi bertingkat, efisiensi pemisahan dinyatakan oleh jumlah pelat teoritis ($N$): semakin banyak pelat teoritis dalam kolom, pita puncak analit semakin ramping dan daya pisahnya semakin tajam.
$$N = 16 \\left(\\frac{t_R}{W}\\right)^2 = 5.545 \\left(\\frac{t_R}{W_{1/2}}\\right)^2$$
di mana $W$ adalah lebar dasar puncak dan $W_{1/2}$ adalah lebar puncak pada setengah tinggi maksimum (*Full Width at Half Maximum* / FWHM).
- **Tinggi Setara Pelat Teoritis (*HETP*, $H$):**
  $$H = \\frac{L}{N}$$
  Kolom kromatografi berefisiensi tinggi memiliki nilai $H$ sekecil mungkin (panjang pelat mikro).

---

### 🧭 3. Persamaan Kinetika van Deemter: Tiga Sumber Pelebaran Puncak

Pelebaran zona pita analit saat merayap di dalam kolom dikendalikan oleh tiga proses fisik independen menurut persamaan van Deemter:
$$H = A + \\frac{B}{u} + C \\cdot u$$

1. **Suku $A$ (Difusi Eddy):** Variasi panjang lintasan yang ditempuh molekul karena berbelok-belok melewati butiran kemasan kolom berpori:
   $$A = 2\\lambda d_p$$
   (dengan $d_p$ diameter partikel kemasan; bernilai 0 pada kolom kapiler tubular terbuka).
2. **Suku $B/u$ (Difusi Longitudinal):** Molekul secara alami berdifusi maju-mundur sepanjang sumbu aksial kolom akibat gradien konsentrasi. Semakin lambat laju alir ($u$ kecil), semakin lama analit tertahan dan semakin melebar puncaknya.
3. **Suku $C \\cdot u$ (Resistensi Perpindahan Massa):** Waktu tunda yang dibutuhkan analit untuk keluar-masuk mencapai kesetimbangan partisi antara fase diam dan fase gerak. Semakin kencang laju alir ($u$ besar), molekul di fase gerak tertinggal jauh dari molekul yang terjebak di fase diam, memicu pelebaran puncak.

**Laju Alir Optimum ($u_{\\text{opt}}$):**
$$u_{\\text{opt}} = \\sqrt{\\frac{B}{C}} \\implies H_{\\text{min}} = A + 2\\sqrt{B \\cdot C}$$

---

### 🧭 4. Resolusi Pemisahan Kromatografi ($R_s$)

Kualitas keterpisahan antara dua puncak analit yang berdampingan diukur via nilai Resolusi ($R_s$):
$$R_s = \\frac{2(t_{R2} - t_{R1})}{W_1 + W_2} = \\frac{1.18(t_{R2} - t_{R1})}{W_{1/2,1} + W_{1/2,2}}$$

**Kriteria Analitik Batas Pemisahan:**
- $R_s = 1.0$: Terdapat tumpang-tindih puncak sebesar $\\sim 2\\%$.
- **$R_s \\ge 1.5$ (Baseline Resolution):** Pemisahan garis dasar sempurna dengan kemurnian kuantitatif $\\ge 99.7\\%$ (standar industri farmasi dan uji olimpiade).

---

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: FWHM vs Lebar Dasar Puncak
> - **Miskonsepsi Umum**: Siswa menggunakan koefisien 16 untuk FWHM atau koefisien 5.545 untuk lebar dasar $W$.
> - **Kaidah yang Benar**:
>   - Gunakan angka **16** jika yang diketahui adalah lebar dasar garis singgung $W$: $N = 16 (t_R/W)^2$.
>   - Gunakan angka **5.545** jika yang diketahui adalah lebar setengah tinggi $W_{1/2}$: $N = 5.545 (t_R/W_{1/2})^2$.

---

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Persamaan Master Resolusi Purnell
> $$R_s = \\frac{\\sqrt{N}}{4} \\left(\\frac{\\alpha - 1}{\\alpha}\\right) \\left(\\frac{k'_2}{1 + k'_2}\\right)$$
> Dari persamaan ini terlihat jelas bahwa untuk menggandakan resolusi ($2\\times R_s$), panjang kolom $L$ (dan jumlah pelat $N$) harus dilipatgandakan sebesar **$4\\times$**, yang berakibat waktu analisis melonjak 4 kali lebih lama! Cara yang jauh lebih cerdas adalah memodifikasi komposisi fase gerak untuk meningkatkan selektivitas $\\alpha$.`,
      keyFormulas: [
        { name: 'Jumlah Pelat Teoritis FWHM', formula: 'N = 5.545 \\left(\\frac{t_R}{W_{1/2}}\\right)^2' },
        { name: 'Persamaan van Deemter', formula: 'H = A + \\frac{B}{u} + C \\cdot u' },
        { name: 'Resolusi Garis Dasar Baseline', formula: 'R_s = \\frac{2(t_{R2} - t_{R1})}{W_1 + W_2} \\ge 1.5' },
      ],
    },
  ],
  core_concepts: [
    {
      tag: 'konsep-spektrofotometri-uv-vis-hukum-lambert-beer',
      tags: ['spektrofotometri-uv-vis', 'hukum-lambert-beer', 'absorbansi', 'koefisien-ekstingsi-molar', 'analisis-multikomponen', 'kromofor-auksokrom'],
      title: 'Konsep Inti 1: Spektrofotometri UV-Vis, Hukum Lambert-Beer & Analisis Multikomponen',
      summary: 'Penurunan hukum Lambert-Beer, batasan kimiawi & instrumental, klasifikasi kromofor/auksokrom, dan penyelesaian matriks simultan campuran multikomponen.',
      checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_09['konsep-spektrofotometri-uv-vis-hukum-lambert-beer'],
      content: `### 🌈 Saringan Cahaya Spektrofotometri Lambert-Beer & Solver Aljabar Matriks Multikomponen

Spektrofotometri UV-Vis mengukur penyerapan foton pada daerah ultraviolet ($200-400\\text{ nm}$) dan cahaya tampak ($400-800\\text{ nm}$). Foton yang diserap mempromosikan elektron valensi dari orbital terisi tertinggi (*HOMO*) menuju orbital kosong terendah (*LUMO*).

---

### 🧭 1. Hukum Lambert-Beer & Konversi Transmitansi-Absorbansi

Ketika seberkas sinar monokromatik dengan intensitas mula-mula $I_0$ menembus larutan penyerap sepanjang kuvet $b$, sebagian foton diserap sehingga intensitas yang keluar berkurang menjadi $I$.
Transmitansi ($T$) adalah fraksi intensitas yang lolos:
$$T = \\frac{I}{I_0} \\quad (\\%T = T \\times 100\\%)$$

Absorbansi ($A$) didefinisikan sebagai logaritma negatif transmitansi:
$$A = -\\log_{10} T = \\log_{10}\\left(\\frac{I_0}{I}\\right) = \\varepsilon \\cdot b \\cdot c$$
di mana:
- $A$: Absorbansi optik (tanpa satuan, bersifat aditif linier murni).
- $\\varepsilon$: Koefisien absorptivitas molar / ekstingsi molar (satuan $\\text{L}\\cdot\\text{mol}^{-1}\\cdot\\text{cm}^{-1}$ atau $\\text{M}^{-1}\\cdot\\text{cm}^{-1}$).
- $b$: Panjang jalur cahaya kuvet (standar $1.00\\text{ cm}$).
- $c$: Konsentrasi molar analit ($\\text{mol/L}$).

---

### 🧭 2. Kromofor, Auksokrom, & Nomenklatur Pergeseran Spektra

- **Kromofor:** Gugus molekul tak jenuh yang bertanggung jawab atas penyerapan radiasi elektromagnetik (seperti $\\ce{C=C}, \\ce{C=O}, \\ce{-NO2}, \\ce{-N=N-}, \\ce{C#N}$).
- **Auksokrom:** Gugus jenuh dengan pasangan elektron bebas yang terikat langsung pada kromofor (seperti $\\ce{-OH}, \\ce{-OCH3}, \\ce{-NH2}, \\ce{-Cl}$), yang mendonorkan elektron ke sistem $\\pi$, mempersempit celah HOMO-LUMO.
- **Pergeseran Batokromik (*Red Shift*):** Pergeseran $\\lambda_{\\text{max}}$ ke panjang gelombang lebih panjang (energi lebih rendah) akibat perpanjangan konjugasi atau substitusi auksokrom.
- **Pergeseran Hipsokromik (*Blue Shift*):** Pergeseran $\\lambda_{\\text{max}}$ ke panjang gelombang lebih pendek (energi lebih tinggi) akibat hilangnya resonansi (misal protonasi amina $\\ce{-NH2 -> -NH3+}$).
- **Efek Hiperkromik:** Peningkatan nilai absorptivitas molar $\\varepsilon_{\\text{max}}$ (puncak semakin tinggi).
- **Efek Hipokromik:** Penurunan nilai absorptivitas molar $\\varepsilon_{\\text{max}}$ (puncak semakin rendah).

---

### 🧭 3. Analisis Spektrofotometri Campuran Multikomponen Tanpa Pemisahan

Karena absorbansi bersifat aditif murni, dua zat $X$ dan $Y$ dalam satu larutan dapat ditentukan kadarnya secara simultan tanpa perlu dipisahkan terlebih dahulu.
Ukur absorbansi campuran pada dua panjang gelombang berbeda ($\\lambda_1$ dan $\\lambda_2$):
$$A_{\\lambda_1} = \\varepsilon_{X,1} \\cdot b \\cdot c_X + \\varepsilon_{Y,1} \\cdot b \\cdot c_Y$$
$$A_{\\lambda_2} = \\varepsilon_{X,2} \\cdot b \\cdot c_X + \\varepsilon_{Y,2} \\cdot b \\cdot c_Y$$

Dalam bentuk matriks dua persamaan linier ($b = 1.00\\text{ cm}$):
$$\\begin{pmatrix} \\varepsilon_{X,1} & \\varepsilon_{Y,1} \\\\ \\varepsilon_{X,2} & \\varepsilon_{Y,2} \\end{pmatrix} \\begin{pmatrix} c_X \\\\ c_Y \\end{pmatrix} = \\begin{pmatrix} A_{\\lambda_1} \\\\ A_{\\lambda_2} \\end{pmatrix}$$

Gunakan Aturan Cramer untuk menghitung konsentrasi eksak:
$$D = (\\varepsilon_{X,1} \\cdot \\varepsilon_{Y,2}) - (\\varepsilon_{Y,1} \\cdot \\varepsilon_{X,2})$$
$$c_X = \\frac{A_{\\lambda_1} \\varepsilon_{Y,2} - A_{\\lambda_2} \\varepsilon_{Y,1}}{D}, \\quad c_Y = \\frac{A_{\\lambda_2} \\varepsilon_{X,1} - A_{\\lambda_1} \\varepsilon_{X,2}}{D}$$

---

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Cahaya Sesat (Stray Light)
> - **Miskonsepsi Umum**: Siswa mengira instrumen spektrofotometer dapat mengukur absorbansi setinggi mungkin secara linier (misal $A = 3.0$ atau $4.0$).
> - **Kaidah yang Benar**: Pada absorbansi $A = 2.0$, transmitansi cahaya hanya $1\\%$. Pada $A = 3.0$, transmitansi hanya $0.1\\%$. Keberadaan cahaya sesat (*stray light*, fraksi $s$) yang memantul di dalam monokromator akan mendominasi detektor, menyebabkan kurva membengkok tajam. Rentang pengukuran analitik yang terpercaya adalah **$0.2 < A < 1.0$** (kesalahan fotometrik minimum pada $A \\approx 0.434$).

---

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Pemilihan Panjang Gelombang Multikomponen
> Saat memilih $\\lambda_1$ dan $\\lambda_2$ untuk analisis campuran dua komponen:
> - Pilihlah $\\lambda_1$ di mana zat $X$ mengabsorpsi kuat sedangkan zat $Y$ mengabsorpsi lemah.
> - Pilihlah $\\lambda_2$ di mana zat $Y$ mengabsorpsi kuat sedangkan zat $X$ mengabsorpsi lemah.
> Hal ini memaksimalkan nilai determinan $D$ dan meminimalkan perambatan galat fotometrik instrumen!`,
      keyFormulas: [
        { name: 'Hukum Lambert-Beer', formula: 'A = -\\log_{10} T = \\varepsilon \\cdot b \\cdot c' },
        { name: 'Determinan Multikomponen', formula: 'D = \\varepsilon_{X,1}\\varepsilon_{Y,2} - \\varepsilon_{Y,1}\\varepsilon_{X,2}' },
      ],
    },
    {
      tag: 'konsep-spektroskopi-inframerah-ftir-model-osilator',
      tags: ['spektroskopi-ir', 'osilator-harmonik', 'hukum-hooke', 'frekuensi-vibrasi', 'gugus-fungsi', 'efek-konjugasi-tegangan-cincin'],
      title: 'Konsep Inti 2: Spektroskopi Inframerah (FT-IR), Model Osilator Harmonik & Karakteristik Gugus Fungsi',
      summary: 'Teori vibrasi molekuler, hukum Hooke dan massa tereduksi mu, aturan seleksi momen dipol, pembagian daerah spektrum, dan efek resonansi/tegangan cincin pada karbonil.',
      checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_09['konsep-spektroskopi-inframerah-ftir-model-osilator'],
      content: `### 🎸 Ayunan Pegas Kuantum FT-IR: Frekuensi Vibrasi Harmonik Hooke & Pembacaan Sidik Jari Gugus Fungsi

Spektroskopi Inframerah Transformasi Fourier (FT-IR) menyelidiki penyerapan radiasi pada rentang bilangan gelombang $\\tilde{\\nu} = 4000 - 400\\text{ cm}^{-1}$ yang memicu eksitasi tingkat energi vibrasi ikatan kovalen molekul.

---

### 🧭 1. Model Osilator Harmonik & Hukum Hooke

Dua atom bermassa $m_1$ dan $m_2$ yang dihubungkan oleh ikatan kovalen dimodelkan secara mekanika kuantum sebagai dua bola yang dihubungkan oleh pegas dengan konstanta gaya $k$.
Bilangan gelombang vibrasi ulur fundamental dirumuskan oleh Hukum Hooke:
$$\\tilde{\\nu} = \\frac{1}{2\\pi c} \\sqrt{\\frac{k}{\\mu}}$$
di mana:
- $c$: Kecepatan cahaya ($2.998 \\times 10^{10}\\text{ cm/s}$).
- $k$: Konstanta gaya pegas ikatan (mengukur kekuatan ikatan kovalen):
  - Ikatan tunggal ($\\ce{C-C, C-O, C-N}$): $k \\approx 5 \\times 10^5\\text{ dyn/cm}$ ($500\\text{ N/m}$)
  - Ikatan rangkap dua ($\\ce{C=C, C=O}$): $k \\approx 10 \\times 10^5\\text{ dyn/cm}$ ($1000\\text{ N/m}$)
  - Ikatan rangkap tiga ($\\ce{C#C, C#N}$): $k \\approx 15 \\times 10^5\\text{ dyn/cm}$ ($1500\\text{ N/m}$)
- $\\mu$: Massa tereduksi sistem diatomik:
  $$\\mu = \\frac{m_1 \\cdot m_2}{m_1 + m_2} = \\frac{M_1 \\cdot M_2}{(M_1 + M_2) \\cdot N_A}$$

**Dua Kaidah Intuitif Hooke:**
1. **Ikatan lebih kuat $\\implies k$ lebih besar $\\implies \\tilde{\\nu}$ lebih tinggi:**
   $$\\tilde{\\nu}_{\\ce{C#C}} (\\sim 2200\\text{ cm}^{-1}) > \\tilde{\\nu}_{\\ce{C=C}} (\\sim 1650\\text{ cm}^{-1}) > \\tilde{\\nu}_{\\ce{C-C}} (\\sim 1100\\text{ cm}^{-1})$$
2. **Atom lebih ringan $\\implies \\mu$ lebih kecil $\\implies \\tilde{\\nu}$ melonjak jauh lebih tinggi:**
   Ikatan $\\ce{C-H}$ melibatkan atom hidrogen yang sangat ringan, berosilasi cepat pada frekuensi raksasa $\\sim 3000\\text{ cm}^{-1}$, sedangkan ikatan antar atom berat $\\ce{C-Cl}$ berosilasi lambat pada $\\sim 700\\text{ cm}^{-1}$.

---

### 🧭 2. Pemetaan 4 Zona Spektrum Karakteristik FT-IR

| Daerah Spektrum | Bilangan Gelombang | Gugus Fungsi Khas | Karakteristik Bentuk Pita |
| :--- | :---: | :--- | :--- |
| **Zona Ulur Ikatan dengan Hidrogen** | $4000 - 2500\\text{ cm}^{-1}$ | $\\ce{O-H}$ alkohol / fenol<br>$\\ce{O-H}$ asam karboksilat<br>$\\ce{N-H}$ amina primer<br>$\\ce{C(sp)-H}$ alkuna terminal<br>$\\ce{C(sp^2)-H}$ aromatik/alkena<br>$\\ce{C(sp^3)-H}$ alkana | $3200-3600\\text{ cm}^{-1}$ (membulat lebar kuat)<br>$2500-3300\\text{ cm}^{-1}$ (sangat lebar menutupi C-H)<br>$3300-3500\\text{ cm}^{-1}$ (puncak kembar *doublet*)<br>$3300\\text{ cm}^{-1}$ (tajam kuat)<br>$3000-3100\\text{ cm}^{-1}$ (di atas 3000)<br>$2850-2960\\text{ cm}^{-1}$ (di bawah 3000) |
| **Zona Ikatan Rangkap Tiga** | $2500 - 2000\\text{ cm}^{-1}$ | $\\ce{C#N}$ nitril<br>$\\ce{C#C}$ alkuna | $2220-2260\\text{ cm}^{-1}$ (tajam intens)<br>$2100-2250\\text{ cm}^{-1}$ (sedang, tidak aktif jika simetris) |
| **Zona Ikatan Rangkap Dua** | $2000 - 1500\\text{ cm}^{-1}$ | $\\ce{C=O}$ karbonil<br>$\\ce{C=C}$ alkena<br>Cincin aromatik | $1650-1850\\text{ cm}^{-1}$ (paling tajam & kuat di IR)<br>$1620-1680\\text{ cm}^{-1}$ (sedang)<br>$1450, 1500, 1600\\text{ cm}^{-1}$ (deret tajam) |
| **Zona Sidik Jari (*Fingerprint*)** | $1500 - 400\\text{ cm}^{-1}$ | Vibrasi rangka $\\ce{C-O, C-C}$, tekuk C-H | Pita kompleks spesifik untuk setiap molekul |

---

### 🧭 3. Modulasi Frekuensi Karbonil (C=O): Tiga Pengaruh Elektronik

Frekuensi dasar keton alifatik terbuka adalah $\\tilde{\\nu} \\approx 1715\\text{ cm}^{-1}$.
1. **Efek Induksi Penarik Elektron ($-I$):** Menarik densitas elektron dari karbon, meningkatkan karakter ikatan rangkap $\\ce{C=O} \\implies k$ naik $\\implies \\tilde{\\nu}$ naik:
   $$\\text{Asil klorida } (1800\\text{ cm}^{-1}) > \\text{Ester } (1740\\text{ cm}^{-1}) > \\text{Keton } (1715\\text{ cm}^{-1})$$
2. **Efek Resonansi / Konjugasi ($+R$):** Delokalisasi pasangan elektron bebas atau ikatan rangkap terkonjugasi ke gugus $\\ce{C=O}$ menurunkan orde ikatan dari 2 menjadi $\\sim 1.5 \\implies k$ turun $\\implies \\tilde{\\nu}$ turun sebesar $20-40\\text{ cm}^{-1}$:
   $$\\text{Amida } (\\sim 1680\\text{ cm}^{-1}) < \\text{Keton terkonjugasi } (\\sim 1685\\text{ cm}^{-1}) < \\text{Keton alifatik } (1715\\text{ cm}^{-1})$$
3. **Efek Tegangan Cincin (*Ring Strain*):** Pada sikloketon cincin kecil, sudut ikatan internal tertekan, memaksa orbital eksosiklik ikatan $\\ce{C=O}$ memiliki karakter orbital $s$ lebih tinggi $\\implies k$ naik $\\implies \\tilde{\\nu}$ melonjak:
   $$\\text{Sikloheksanon } (1715\\text{ cm}^{-1}) < \\text{Siklopentanon } (1745\\text{ cm}^{-1}) < \\text{Siklobutanon } (1780\\text{ cm}^{-1})$$

---

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Fermi Resonance pada Aldehid
> - **Miskonsepsi Umum**: Siswa mengira gugus aldehid hanya memunculkan satu puncak serapan $\\ce{C-H}$.
> - **Kaidah yang Benar**: Proton aldehid ($\\ce{-CHO}$) menghasilkan **dua puncak tajam kembar (*doublet*)** pada $2720\\text{ cm}^{-1}$ dan $2820\\text{ cm}^{-1}$. Ini adalah fenomena **Resonansi Fermi** akibat kopling kuantum antara vibrasi ulur fundamental $\\ce{C-H}$ dengan nada atas (*overtone*) dari vibrasi tekuk $\\ce{C-H}$!

---

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Batas Ajaib $3000\\text{ cm}^{-1}$
> Tarik garis vertikal tepat pada bilangan gelombang $3000\\text{ cm}^{-1}$:
> - Puncak serapan tepat di **sebelah kanan ($< 3000\\text{ cm}^{-1}$)** menandakan proton alifatik jenuh $\\ce{C(sp^3)-H}$.
> - Puncak serapan tepat di **sebelah kiri ($> 3000\\text{ cm}^{-1}$)** menandakan proton tak jenuh $\\ce{C(sp^2)-H}$ (alkena atau cincin benzena)!`,
      keyFormulas: [
        { name: 'Hukum Hooke Bilangan Gelombang', formula: '\\tilde{\\nu} = \\frac{1}{2\\pi c} \\sqrt{\\frac{k}{\\mu}}' },
        { name: 'Massa Tereduksi Diatomik', formula: '\\mu = \\frac{m_1 \\cdot m_2}{m_1 + m_2}' },
      ],
    },
    {
      tag: 'konsep-spektroskopi-nmr-1h-13c-kopling-spin',
      tags: ['spektroskopi-nmr', 'pergeseran-kimia', 'aturan-n-plus-1', 'konstanta-kopling-j', 'c13-nmr', 'dept-nmr'],
      title: 'Konsep Inti 3: Resonansi Magnetik Inti (1H & 13C-NMR), Pergeseran Kimia & Kopling Spin-Spin',
      summary: 'Prinsip resonansi spin nuklir dalam medan magnet, pergeseran kimia delta, anisotropi magnetik ikatan pi, multiplisitas n+1, konstanta kopling J, dan DEPT 13C-NMR.',
      checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_09['konsep-spektroskopi-nmr-1h-13c-kopling-spin'],
      content: `### 🧭 Gasing Magnetik Inti NMR: Anisotropi Cincin Benzena & Pembacaan Bahasa Tetangga $n+1$

Spektroskopi Resonansi Magnetik Inti (NMR) adalah instrumen paling berdaya guna dalam elusidasi struktur kimia organik modern, mengeksplorasi interaksi momen magnetik spin inti atom ($^1\\ce{H}$ dan $^{13}\\ce{C}$) dengan medan magnet eksternal $B_0$.

---

### 🧭 1. Dasar Fisika & Skala Pergeseran Kimia ($\\delta$, ppm)

Inti hidrogen ($^1\\ce{H}$, proton) memiliki spin $I = 1/2$. Di dalam medan magnet luar $B_0$, spin nuklir terbelah menjadi dua keadaan terkuantisasi (sejajar $\\alpha$ dan berlawanan $\\beta$).
Awan elektron di sekitar inti berotasi menghasilkan medan magnet sekunder terinduksi yang melawan $B_0$ (*diamagnetic shielding*):
$$B_{\\text{eff}} = B_0(1 - \\sigma)$$
- **Shielded (Terlindungi):** Kerapatan elektron tinggi $\\implies B_{\\text{eff}}$ kecil $\\implies$ beresonansi di frekuensi rendah (*upfield*, $\\delta$ kecil).
- **Deshielded (Terbuka):** Di dekat gugus elektronegatif penarik elektron $\\implies B_{\\text{eff}}$ besar $\\implies$ beresonansi di frekuensi tinggi (*downfield*, $\\delta$ besar).

Skala pergeseran kimia didefinisikan relatif terhadap tetrametilsilana ($\\ce{TMS}$, $\\ce{Si(CH3)4}$ ditetapkan $\\delta = 0.00\\text{ ppm}$):
$$\\delta = \\frac{\\nu_{\\text{sampel}} - \\nu_{\\text{TMS}}}{\\nu_{\\text{spektrometer}}} \\times 10^6\\text{ ppm}$$

---

### 🧭 2. Peta Wilayah Pergeseran Kimia $^1\\ce{H-NMR}$

- $\\delta\\ 0.8 - 1.5\\text{ ppm}$: Alkil alifatik jenuh $\\ce{-CH3, -CH2-, -CH-}$
- $\\delta\\ 2.0 - 2.5\\text{ ppm}$: Proton alilik ($\\ce{-CH2-C=C}$), karbonil ($\\ce{-CH2-C(=O)-}$), atau benzilik ($\\ce{Ar-CH2-}$)
- $\\delta\\ 2.0 - 3.0\\text{ ppm}$: Alkuna terminal ($\\ce{-C#C-H}$, anisotropi magnetik silinder terlindungi)
- $\\delta\\ 3.2 - 4.5\\text{ ppm}$: Proton terikat heteroatom elektronegatif ($\\ce{-CH2-O-}, \\ce{-CH2-Cl}, \\ce{-CH2-N-}$), termasuk gugus metoksi ester $\\ce{-COOCH3}$
- $\\delta\\ 4.5 - 6.5\\text{ ppm}$: Alkena vinylic ($\\ce{R-CH=CH2}$)
- $\\delta\\ 6.5 - 8.5\\text{ ppm}$: Proton cincin aromatik benzena (**anisotropi arus cincin $\\pi$ mendeshielding masif**)
- $\\delta\\ 9.0 - 10.0\\text{ ppm}$: Aldehid ($\\ce{R-CHO}$, singlet tajam)
- $\\delta\\ 10.5 - 13.0\\text{ ppm}$: Asam karboksilat ($\\ce{R-COOH}$, puncak lebar akibat ikatan hidrogen dimerik)

---

### 🧭 3. Kopling Spin-Spin & Aturan Multiplisitas $n + 1$

Proton yang terikat pada karbon bertetangga (terpisah melalui 3 ikatan kovalen, $^3J_{\\ce{H-C-C-H}}$) saling menginduksi orientasi spin medan magnetnya:
$$\\text{Jumlah Puncak Multiplet} = n + 1$$
di mana $n$ adalah jumlah proton tetangga yang ekuivalen:
- $n = 0 \\implies$ **Singlet** ($s$, rasio 1)
- $n = 1 \\implies$ **Doublet** ($d$, rasio 1 : 1)
- $n = 2 \\implies$ **Triplet** ($t$, rasio 1 : 2 : 1)
- $n = 3 \\implies$ **Quartet** ($q$, rasio 1 : 3 : 3 : 1)
- $n = 4 \\implies$ **Quintet** (rasio 1 : 4 : 6 : 4 : 1)

**Konstanta Kopling ($J$, dalam satuan Hz):**
Jarak antar garis puncak dalam multiplet ($J$) bersifat mutlak konstan dan tidak bergantung pada medan magnet spektrometer ($B_0$).
Berdasarkan Persamaan Karplus, konstanta kopling vicinal mencerminkan stereokimia geometri:
$$^3J_{\\text{trans}} (12 - 18\\text{ Hz}) > {^3J_{\\text{cis}}} (6 - 12\\text{ Hz})$$

---

### 🧭 4. Spektroskopi $^{13}\\ce{C-NMR}$ & Sub-spektra DEPT

Karena kelimpahan alami isotop $^{13}\\ce{C}$ hanya $1.1\\%$, spektra direkam secara *proton-decoupled* sehingga seluruh sinyal muncul sebagai garis *singlet*:
- $\\delta\\ 0 - 50\\text{ ppm}$: Karbon alkil $sp^3$ ($\\ce{C-C}$)
- $\\delta\\ 50 - 90\\text{ ppm}$: Karbon $sp^3$ terikat heteroatom ($\\ce{C-O, C-N, C-Cl}$)
- $\\delta\\ 100 - 160\\text{ ppm}$: Karbon alkena $sp^2$ dan aromatik benzena
- $\\delta\\ 160 - 185\\text{ ppm}$: Karbonil asam, ester, amida ($\\ce{-COO-}$)
- $\\delta\\ 190 - 220\\text{ ppm}$: Karbonil aldehid dan keton

**Filter Cerdas DEPT-135 (*Distortionless Enhancement by Polarization Transfer*):**
- Puncak mengarah ke atas (**+ / positif**): Gugus **$\\ce{CH3}$** dan **$\\ce{CH}$**.
- Puncak terbalik mengarah ke bawah (**- / negatif**): Gugus **$\\ce{CH2}$**.
- Puncak hilang total dari spektrum: Karbon kuaterner **$C_q$** (tanpa atom hidrogen langsung).

---

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Proton Tukar-Cepat (OH dan NH)
> - **Miskonsepsi Umum**: Siswa menerapkan aturan $n+1$ pada proton alkohol ($\\ce{-OH}$) dan amina ($\\ce{-NH2}$).
> - **Kaidah yang Benar**: Proton pada heteroatom ($\\ce{-OH}$ dan $\\ce{-NH-}$) mengalami pertukaran kimiawi sangat cepat (*fast proton exchange*) melalui jembatan ikatan hidrogen pelarut pada suhu kamar. Akibatnya, proton $\\ce{-OH}$ biasanya muncul sebagai **singlet lebar (*broad singlet*)** dan **tidak membelah proton metilen di sebelahnya**, kecuali jika diuji dalam pelarut kering bebas asam seperti $\\ce{DMSO-}d_6$.

---

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Pola Multiplet Khas Gugus Etil & Isopropil
> - **Gugus Etil ($\\ce{-CH2-CH3}$):** Selalu menghasilkan pasangan **triplet $3\\ce{H}$** (dari $\\ce{CH3}$) dan **quartet $2\\ce{H}$** (dari $\\ce{CH2}$).
> - **Gugus Isopropil ($\\ce{-CH(CH3)2}$):** Selalu menghasilkan pasangan **doublet $6\\ce{H}$** (dua $\\ce{CH3}$ ekuivalen) dan **septet $1\\ce{H}$** (satu $\\ce{CH}$ yang dibelah oleh 6 proton tetangga)!`,
      keyFormulas: [
        { name: 'Frekuensi Presesi Larmor', formula: '\\nu_0 = \\frac{\\gamma \\cdot B_0}{2\\pi}' },
        { name: 'Skala Pergeseran Kimia Delta', formula: '\\delta = \\frac{\\nu_{\\text{sampel}} - \\nu_{\\text{TMS}}}{\\nu_{\\text{instrumen}}} \\times 10^6\\text{ ppm}' },
        { name: 'Multiplisitas Aturan n+1', formula: '\\text{Garis Puncak} = n + 1' },
      ],
    },
    {
      tag: 'konsep-spektrometri-massa-fragmentasi-ion',
      tags: ['spektrometri-massa', 'ion-molekuler', 'pola-isotop', 'pemutusan-alfa', 'penataan-ulang-mclafferty', 'kation-tropilium'],
      title: 'Konsep Inti 4: Spektrometri Massa (MS), Pola Isotop Karakteristik & Mekanisme Fragmentasi',
      summary: 'Ionisasi tumbukan elektron EI, ion molekuler radikal kation, aturan nitrogen, pola rasio isotop halogen, dan pola fragmentasi karakteristik (pemutusan alfa & penataan ulang McLafferty).',
      checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_09['konsep-spektrometri-massa-fragmentasi-ion'],
      content: `### 🔨 Palu Pemecah Molekul Spektrometri Massa (MS): Timbangan Atom, Trik Pola Isotop Halogen, & Belahan Kation Tropilium

Spektrometri Massa (MS) menembak molekul analit dalam fase gas dengan seberkas elektron berkecepatan tinggi ($70\\text{ eV}$), mencabut elektron valensi menghasilkan radikal kation ion molekuler $[M]^{+\\bullet}$, yang kemudian pecah berkeping-keping menjadi fragmen kationik stabil:
$$\\ce{M + e- -> [M]^{+\\bullet} + 2e-}$$
Sumbu horizontal mengukur rasio massa terhadap muatan ($m/z$), dan sumbu vertikal menyatakan kelimpahan relatif terhadap Puncak Dasar (*Base Peak*, $100\\%$)!

---

### 🧭 1. Aturan Nitrogen (*The Nitrogen Rule*)

- Molekul organik yang hanya tersusun atas $\\ce{C, H, O, S, P, X}$ dengan massa molekul nominal **GENAP** pasti mengandung **nol atau sejumlah genap atom nitrogen** (0, 2, 4, dst.).
- Molekul organik dengan massa molekul nominal **GANJIL** pasti mengandung **sejumlah ganjil atom nitrogen** (1, 3, 5, dst.).

---

### 🧭 2. Deteksi Cepat Pola Sidik Jari Isotop

1. **Jumlah Atom Karbon dari Puncak $[M+1]$:**
   Kelimpahan alami isotop $^{13}\\ce{C}$ adalah $1.1\\%$ relatif terhadap $^{12}\\ce{C}$.
   $$n_C \\approx \\frac{I_{[M+1]}}{0.011 \\times I_{[M]}}$$
2. **Klorin ($^{35}\\ce{Cl}$ dan $^{37}\\ce{Cl}$):**
   Kelimpahan alami adalah $3 : 1$. Satu atom klorin menghasilkan sepasang puncak $[M]$ dan $[M+2]$ dengan rasio tinggi **$3 : 1$** (terpisah sejauh $2\\text{ m/z}$).
   Dua atom klorin menghasilkan triplet $[M] : [M+2] : [M+4] = 9 : 6 : 1$.
3. **Bromin ($^{79}\\ce{Br}$ dan $^{81}\\ce{Br}$):**
   Kelimpahan alami adalah $1 : 1$. Satu atom bromin menghasilkan sepasang **puncak kembar identik $[M]$ dan $[M+2]$ setinggi $1 : 1$**!
   Dua atom bromin menghasilkan rasio $[M] : [M+2] : [M+4] = 1 : 2 : 1$.

---

### 🧭 3. Tiga Pola Fragmentasi Karakteristik Utama OSN

1. **Pemutusan Alfa ($\\alpha$-Cleavage):**
   Pemutusan ikatan kovalen $\\ce{C-C}$ yang terletak tepat di sebelah atom heteroatom atau gugus karbonil, distabilkan oleh resonansi pasangan elektron bebas:
   - Alkohol dan Eter: menghasilkan ion oksonium $m/z = 31$ ($[\\ce{H2C=O^+H}]$).
   - Keton: melepaskan gugus alkil menghasilkan kation asilium stabil:
     $$[\\ce{R-CO-R'}]^{+\\bullet} \\to [\\ce{R-C#O^+}] + R'^{\\bullet} \\quad (m/z = 43 \\text{ untuk } [\\ce{CH3CO}]^+)$$
2. **Penataan Ulang McLafferty (*McLafferty Rearrangement*):**
   Fragmentasi khas senyawa karbonil yang memiliki **atom hidrogen pada posisi karbon-$\\gamma$ (gamma)**.
   Melibatkan keadaan transisi siklik 6-anggota yang sangat teratur: hidrogen-$\\gamma$ ditransfer ke oksigen karbonil, diikuti pemutusan ikatan $\\ce{C_\\alpha - C_\\beta}$, melepaskan molekul netral alkena dan menyisakan radikal kation alkenol beresonansi:
   $$[\\ce{R-CH(\\gamma)-CH2(\\beta)-CH2(\\alpha)-CO-CH3}]^{+\\bullet} \\to [\\ce{H2C=C(OH)CH3}]^{+\\bullet} (m/z = 58) + \\ce{R-CH=CH2}$$
3. **Pembentukan Kation Tropilium ($m/z = 91$):**
   Setiap senyawa yang mengandung gugus **benzil ($\\ce{C6H5-CH2-R}$)** akan terfragmentasi melepaskan ligan $R$, diikuti penataan ulang ekspansi cincin menjadi **kation tropilium (sikloheptatrienil $[\\ce{C7H7}]^+$)**.
   Kation tropilium memiliki 7 atom karbon dalam cincin planar dengan $6\\pi$ elektron terdelokalisasi, membentuk ion quasi-aromatik yang sangat stabil. Kation ini selanjutnya melepaskan molekul netral asetilen ($\\ce{C2H2}$, massa 26) menghasilkan puncak sekunder pada **$m/z = 65$**.

---

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Base Peak vs Molecular Ion Peak
> - **Miskonsepsi Umum**: Siswa mengira puncak paling kanan pada spektrum massa selalu merupakan Puncak Dasar (*Base Peak*).
> - **Kaidah yang Benar**: Puncak Dasar (*Base Peak*) adalah puncak dengan **kelimpahan tertinggi ($100\\%$)** di mana pun posisinya dalam spektrum. Puncak ion molekuler $[M]^{+\\bullet}$ berada di posisi massa tertinggi (paling kanan), dan kelimpahannya seringkali sangat kecil atau bahkan lenyap jika molekul sangat mudah terfragmentasi (misal alkohol tersier).

---

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Rumus Cepat DoU (Derajat Ketidakjenuhan)
> Hitung DoU sebelum menganalisis spektra:
> $$\\text{DoU} = C + 1 - \\frac{H}{2} - \\frac{X}{2} + \\frac{N}{2}$$
> - $\\text{DoU} = 4$ adalah indikator kuat keberadaan **cincin benzena aromatik** (1 cincin $+ 3$ ikatan rangkap dua).
> - $\\text{DoU} = 1$ menunjukkan adanya 1 ikatan rangkap dua (misal $\\ce{C=O}$ atau $\\ce{C=C}$) atau 1 cincin jenuh!`,
      keyFormulas: [
        { name: 'Derajat Ketidakjenuhan DoU', formula: '\\text{DoU} = C + 1 - \\frac{H}{2} - \\frac{X}{2} + \\frac{N}{2}' },
        { name: 'Kation Tropilium Aromatik', formula: '[\\ce{C7H7}]^+ \\implies m/z = 91 \\quad (\\xrightarrow{-\\ce{C2H2}} m/z = 65)' },
      ],
    },
    {
      tag: 'konsep-analisis-kuantitatif-multikomponen-validasi',
      tags: ['kalibrasi-analitik', 'adisi-standar', 'standar-internal', 'validasi-metode', 'limit-of-detection-lod', 'efek-matriks'],
      title: 'Konsep Inti 5: Metode Kalibrasi Analitik, Adisi Standar, Standar Internal & Validasi Metode',
      summary: 'Metode eliminasi efek matriks via adisi standar, normalisasi variasi instrumen via standar internal, serta parameter validasi analitik IUPAC (LOD, LOQ, linearitas, akurasi, presisi).',
      checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_09['konsep-analisis-kuantitatif-multikomponen-validasi'],
      content: `### 🎯 Jangkar Kalibrasi Analitik: Trik Adisi Standar Penakluk Efek Matriks & Kacamata Standar Internal

Dalam analisis kimia instrumen presisi tinggi, sinyal yang terdeteksi (luas puncak kromatografi, absorbansi spektrofotometer, arus voltametri) harus dikonversi menjadi konsentrasi analit murni secara akurat tanpa bias gangguan lingkungan sampel (*efek matriks*).

---

### 🧭 1. Kurva Kalibrasi Eksternal vs Gangguan Efek Matriks

Pada kalibrasi eksternal sederhana, instrumen mengukur serangkaian larutan baku analit murni dalam pelarut bersih:
$$S = m \\cdot c + b$$
- **Gangguan Efek Matriks (*Matrix Effect*):** Sampel lingkungan riil (seperti darah, air limbah tambang, lumpur tanah) mengandung ribuan komponen penyerta yang mengubah viskositas larutan, tegangan permukaan, atau efisiensi ionisasi. Akibatnya, kemiringan kalibrasi ($m$) pada sampel riil berbeda drastis dibanding standar murni, menghasilkan galat sistematis besar.

---

### 🧭 2. Metode Adisi Standar (*Standard Addition Method*)

Metode ini dirancang untuk **meniadakan efek matriks sepenuhnya**:
- Alikuot sampel bervolume sama ($V_{\\text{sampel}}$) dimasukkan ke dalam beberapa labu ukur identik ($V_T$).
- Ke dalam labu tersebut ditambahkan larutan standar analit pekat dengan volume bertingkat ($V_s = 0, V_1, V_2, V_3, \\dots$), lalu diencerkan hingga tanda batas.
- Matriks sampel hadir secara seragam di seluruh titik pengukuran.
- Sinyal instrumen diplotkan terhadap konsentrasi standar yang ditambahkan ($c_{\\text{added}}$):
  $$S = m \\cdot c_{\\text{added}} + S_0$$
  dengan $S_0$ adalah sinyal sampel asli tanpa penambahan standar.
- Ekstrapolasi garis lurus menuju perpotongan sumbu horizontal ($S = 0$):
  $$c_{\\text{analit, labu}} = \\frac{S_0}{m}$$
  Konsentrasi analit dalam sampel asal dihitung via faktor pengenceran:
  $$c_{\\text{sampel}} = c_{\\text{analit, labu}} \\times \\left(\\frac{V_T}{V_{\\text{sampel}}}\\right) = \\frac{S_0 \\cdot V_T}{m \\cdot V_{\\text{sampel}}}$$

---

### 🧭 3. Metode Standar Internal (*Internal Standard Method*)

Metode ini dirancang khusus untuk mengoreksi fluktuasi mekanis instrumen yang tidak terkontrol (seperti ketidaktepatan volume mikro-injeksi $1\\ \\mu\\text{L}$ pada GC/HPLC atau variasi laju alir pompa):
- Standar Internal ($IS$) adalah zat murni dengan sifat kimiawi sangat mirip analit, tetapi tidak ada dalam sampel alami dan puncaknya terelusi terpisah rapi.
- Konsentrasi $IS$ yang konstan ($c_{IS}$) ditambahkan ke seluruh labu kalibrasi dan sampel.
- Parameter yang diplotkan adalah **rasio sinyal analit terhadap sinyal standar internal**:
  $$\\frac{S_{\\text{analit}}}{S_{IS}} = F \\cdot \\left(\\frac{c_{\\text{analit}}}{c_{IS}}\\right)$$
  Segala variasi volume injeksi atau drift detektor akan memengaruhi $S_{\\text{analit}}$ dan $S_{IS}$ secara proporsional, sehingga nilai rasio sinyalnya tetap stabil dan akurat.

---

### 🧭 4. Parameter Validasi Kinerja Metode Analitik (Standar IUPAC / ICH)

1. **Linearitas ($R^2$):** Koefisien determinasi regresi kuadrat terkecil harus memenuhi $R^2 \\ge 0.995$.
2. **Batas Deteksi (*Limit of Detection* / LOD):**
   Konsentrasi analit terendah yang dapat dibedakan dari derau blanko secara statistik pada tingkat kepercayaan $99\\%$ (rasio $S/N = 3 : 1$):
   $$\\text{LOD} = \\frac{3.3 \\cdot s_{bl}}{m}$$
   di mana $s_{bl}$ adalah standar deviasi dari pengukuran blanko berulang ($n \\ge 7$) dan $m$ adalah kemiringan garis kalibrasi.
3. **Batas Kuantifikasi (*Limit of Quantitation* / LOQ):**
   Konsentrasi analit terendah yang dapat ditentukan secara kuantitatif dengan akurasi dan presisi yang dapat diterima (rasio $S/N = 10 : 1$):
   $$\\text{LOQ} = \\frac{10 \\cdot s_{bl}}{m}$$
4. **Presisi (Keterulangan):** Dinyatakan sebagai koefisien variasi $\\%\\text{RSD} = \\frac{s}{\\bar{x}} \\times 100\\%$.
5. **Akurasi (Ketepatan):** Dinyatakan sebagai persentase perolehan kembali:
   $$\\%\\text{Recovery} = \\frac{c_{\\text{terukur}}}{c_{\\text{sebenarnya}}} \\times 100\\%$$

---

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: LOD vs LOQ
> - **Miskonsepsi Umum**: Siswa mengira LOD adalah batas di mana analit sudah dapat dilaporkan kadarnya secara kuantitatif.
> - **Kaidah yang Benar**: Pada konsentrasi LOD ($S/N = 3$), instrumen hanya dapat memastikan bahwa analit **ada (terdeteksi secara kualitatif)**, tetapi ketidakpastian pengukurannya masih terlalu besar ($\sim 33\\%$) untuk pelaporan kuantitatif. Pelaporan kuantitatif yang sah hanya boleh dilakukan apabila konsentrasi analit berada pada atau di atas nilai **LOQ ($S/N = 10$)**.

---

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Kapan Wajib Menggunakan Adisi Standar?
> - Jika dalam soal disebutkan: *"Sampel memiliki matriks kompleks yang tidak dapat ditiru oleh larutan standar murni"* $\\implies$ gunakan **Metode Adisi Standar**.
> - Jika dalam soal disebutkan: *"Volume injeksi kromatografi mengalami variasi $\\pm 10\\%$ atau instrumen mengalami drift sensitivitas"* $\\implies$ gunakan **Metode Standar Internal**!`,
      keyFormulas: [
        { name: 'Konsentrasi Adisi Standar', formula: 'c_{\\text{analit, labu}} = \\frac{S_0}{m}' },
        { name: 'Batas Deteksi LOD', formula: '\\text{LOD} = \\frac{3.3 \\cdot s_{bl}}{m}' },
        { name: 'Batas Kuantifikasi LOQ', formula: '\\text{LOQ} = \\frac{10 \\cdot s_{bl}}{m}' },
      ],
    },
  ],
  worked_examples: [
    {
      tag: 'soal-titrasi-redoks-iodometri-tembaga',
      tags: ['soal-osn', 'titrasi-redoks', 'iodometri', 'analisis-kuantitatif', 'kadar-tembaga'],
      title: 'Contoh Soal OSN 1: Analisis Kadar Tembaga dalam Bijih Kalkopirit via Titrasi Iodometri Tidak Langsung',
      summary: 'Penentuan persentase massa tembaga dari bijih kalkopirit menggunakan titrasi tiosulfat dengan penambahan KSCN untuk desorpsi iodin.',
      checkpointQuizzes: undefined,
      content: `### 📋 Skenario & Data Eksperimen:
Sebuah sampel bijih kalkopirit seberat $0.6354\\text{ g}$ dilarutkan secara sempurna dalam campuran asam nitrat dan asam klorida pekat, lalu diuapkan hingga timbul asap putih belerang trioksida dengan asam sulfat pekat untuk menghilangkan seluruh ion nitrat. Larutan dinetralkan dengan amonia encer hingga terbentuk endapan biru pucat, diasamkan kembali secara hati-hati dengan asam asetat glasial, dan ditambahkan larutan kalium iodida ($\\ce{KI}$) berlebih ($3.0\\text{ g}$).

Iodin ($\\ce{I2}$) yang dibebaskan kemudian dititrasi dengan larutan standar natrium tiosulfat ($\\ce{Na2S2O3}$) berkonsentrasi $0.0500\\text{ M}$. Saat warna coklat pekat memudar menjadi kuning jerami pucat, sebanyak $2.0\\text{ mL}$ suspensi indikator amilum ditambahkan sehingga larutan berubah menjadi biru tua pekat. Menjelang titik akhir (warna biru hampir hilang), ditambahkan $1.5\\text{ g}$ kalium tiosianat ($\\ce{KSCN}$), menyebabkan warna biru tua muncul kembali secara tajam. Titrasi dilanjutkan tetes demi tetes hingga warna biru tepat lenyap menjadi suspensi putih susu yang stabil. Total volume larutan standar $\\ce{Na2S2O3}$ yang dihabiskan adalah $28.50\\text{ mL}$.
(Diketahui: $A_r\\ \\ce{Cu} = 63.546\\text{ g/mol}$, $A_r\\ \\ce{S} = 32.065\\text{ g/mol}$, $A_r\\ \\ce{Fe} = 55.845\\text{ g/mol}$).

---

### 🎯 Pertanyaan:
1. Tuliskan persamaan reaksi redoks yang setara untuk pembentukan iodin saat penambahan $\\ce{KI}$ dan reaksi titrasi iodin dengan tiosulfat!
2. Jelaskan fungsi kimiawi dari penambahan kalium tiosianat ($\\ce{KSCN}$) menjelang titik akhir titrasi!
3. Hitung jumlah milimol $\\ce{Cu^2+}$ yang terkandung dalam sampel bijih tersebut!
4. Tentukan persentase massa tembaga ($\\%\\text{ w/w}$) dalam sampel bijih kalkopirit tersebut!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Persamaan Reaksi Redoks Stoikiometris
1. Reaksi oksidasi-reduksi antara kation tembaga(II) dan kelebihan ion iodida menghasilkan endapan tembaga(I) iodida putih dan membebaskan iodin molekuler (sebagai triiodida):
   $$2\\ce{Cu^2+(aq) + 4I-(aq) -> 2CuI(s) + I2(aq)}$$
   Perhatikan bahwa $2\\text{ mol } \\ce{Cu^2+}$ menghasilkan $1\\text{ mol } \\ce{I2}$.
2. Reaksi titrasi reduksi iodin oleh larutan standar tiosulfat:
   $$\\ce{I2(aq) + 2S2O3^2-(aq) -> 2I-(aq) + S4O6^2-(aq)}$$
   Dari kedua persamaan reaksi berurutan tersebut, rasio stoikiometri mol total antara analit tembaga dan titran tiosulfat adalah tepat $1 : 1$:
   $$n_{\\ce{Cu^2+}} = 2 \\times n_{\\ce{I2}} = 2 \\times \\left(\\frac{1}{2} n_{\\ce{S2O3^2-}}\\right) = n_{\\ce{S2O3^2-}}$$

#### Langkah 2: Peran Mekanistis Penambahan KSCN
Endapan tembaga(I) iodida ($\\ce{CuI}$) yang terbentuk memiliki luas permukaan spesifik tinggi dan mengadsorpsi kuat iodin molekuler pada permukaannya.
- Adsorpsi ini menyebabkan sebagian $\\ce{I2}$ terperangkap di dalam matriks endapan sehingga tidak dapat bereaksi bebas dengan titran tiosulfat, memicu galat negatif volume titran dan titik akhir yang lambat (*trailing endpoint*).
- Penambahan $\\ce{KSCN}$ memicu reaksi metatesis permukaan karena $\\ce{CuSCN}$ memiliki hasil kali kelarutan ($K_{sp} \\approx 4.8 \\times 10^{-15}$) yang lebih kecil daripada $\\ce{CuI}$ ($K_{sp} \\approx 1.1 \\times 10^{-12}$):
  $$\\ce{CuI(s) + SCN-(aq) -> CuSCN(s) + I-(aq)}$$
- Konversi lapisan permukaan kristal menjadi $\\ce{CuSCN}$ mendesak dan melepaskan seluruh molekul $\\ce{I2}$ yang teradsorpsi kembali ke dalam larutan air, menghasilkan titik akhir titrasi yang luar biasa tajam dan akurat.

#### Langkah 3: Perhitungan Mol Tiosulfat & Tembaga
Volume titran standar natrium tiosulfat: $V = 28.50\\text{ mL} = 0.02850\\text{ L}$.
Konsentrasi standar: $M = 0.0500\\text{ M}$.
Jumlah milimol titran $\\ce{S2O3^2-}$ yang bereaksi:
$$n_{\\ce{S2O3^2-}} = M \\times V = 0.0500\\text{ mmol/mL} \\times 28.50\\text{ mL} = 1.425\\text{ mmol}$$
Berdasarkan stoikiometri $1 : 1$:
$$n_{\\ce{Cu^2+}} = n_{\\ce{S2O3^2-}} = 1.425\\text{ mmol} = 1.425 \\times 10^{-3}\\text{ mol}$$

#### Langkah 4: Perhitungan Massa & Persentase Tembaga dalam Bijih
Massa analit tembaga murni dalam sampel:
$$m_{\\ce{Cu}} = n_{\\ce{Cu^2+}} \\times A_r(\\ce{Cu}) = 1.425 \\times 10^{-3}\\text{ mol} \\times 63.546\\text{ g/mol} = 0.090553\\text{ g} = 90.553\\text{ mg}$$
Massa total sampel bijih kering: $m_{\\text{sampel}} = 0.6354\\text{ g}$.
Kadar tembaga ($\\%\\text{ w/w}$):
$$\\%\\ \\ce{Cu} = \\frac{m_{\\ce{Cu}}}{m_{\\text{sampel}}} \\times 100\\% = \\frac{0.090553\\text{ g}}{0.6354\\text{ g}} \\times 100\\% = 14.251\\% \\approx 14.25\\%$$

---

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Mengapa Perlu Menghilangkan Asam Nitrat?
> Penguapan dengan $\\ce{H2SO4}$ hingga keluar asap putih $\\ce{SO3}$ adalah langkah krusial untuk mengusir ion nitrat ($\\ce{NO3-}$). Jika ion nitrat tersisa, dalam suasana asam ia bertindak sebagai oksidator yang dapat mengoksidasi $\\ce{I-}$ menjadi $\\ce{I2}$ secara terus menerus, menghasilkan galat positif yang sangat fatal!`,
    },
    {
      tag: 'soal-hukum-lambert-beer-campuran-dua-komponen',
      tags: ['soal-osn', 'hukum-lambert-beer', 'analisis-multikomponen', 'absorbansi', 'matriks-spektrofotometri'],
      title: 'Contoh Soal OSN 2: Analisis Spektrofotometri UV-Vis Simultan Campuran Dua Pewarna Tanpa Pemisahan',
      summary: 'Menentukan konsentrasi senyawa X dan Y dalam larutan campuran homogen melalui penyusunan matriks sistem persamaan linier absorbansi aditif.',
      checkpointQuizzes: undefined,
      content: `### 📋 Skenario & Data Eksperimen:
Dua senyawa pewarna sintetis organik, Senyawa $X$ dan Senyawa $Y$, berada bersama-sama dalam suatu larutan sampel homogen air. Spektrofotometri UV-Vis menggunakan kuvet berpanjang jalur cahaya $b = 1.00\\text{ cm}$ menunjukkan bahwa kedua zat mengabsorpsi secara simultan pada panjang gelombang $\\lambda_1 = 440\\text{ nm}$ dan $\\lambda_2 = 540\\text{ nm}$.

Dari pengukuran larutan standar murni masing-masing zat pada instrumen yang sama, diperoleh data koefisien absorptivitas molar ($\\varepsilon$, dalam satuan $\\text{L}\\cdot\\text{mol}^{-1}\\cdot\\text{cm}^{-1}$):
- Pada $\\lambda_1 = 440\\text{ nm}$: $\\varepsilon_{X,1} = 1500\\text{ M}^{-1}\\text{cm}^{-1}$ dan $\\varepsilon_{Y,1} = 300\\text{ M}^{-1}\\text{cm}^{-1}$
- Pada $\\lambda_2 = 540\\text{ nm}$: $\\varepsilon_{X,2} = 200\\text{ M}^{-1}\\text{cm}^{-1}$ dan $\\varepsilon_{Y,2} = 1800\\text{ M}^{-1}\\text{cm}^{-1}$

Sampel larutan campuran yang tidak diketahui kadarnya menghasilkan nilai absorbansi terukur terhadap blanko air:
- $A_{440} = 0.510$
- $A_{540} = 0.580$

---

### 🎯 Pertanyaan:
1. Tuliskan sistem persamaan linier dua variabel untuk absorbansi total pada kedua panjang gelombang berdasarkan Hukum Lambert-Beer!
2. Hitung nilai determinan matriks koefisien absorptivitas molar sistem tersebut!
3. Tentukan konsentrasi molar Senyawa $X$ ($c_X$) dan Senyawa $Y$ ($c_Y$) dalam larutan campuran tersebut dalam satuan $\\text{mol/L}$ dan $\\text{mg/L}$ (diketahui $M_r(X) = 300.0\\text{ g/mol}$ dan $M_r(Y) = 450.0\\text{ g/mol}$)!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Formulasi Sistem Persamaan Aditifitas Absorbansi
Berdasarkan prinsip aditifitas absorbansi Hukum Lambert-Beer dengan kuvet $b = 1.00\\text{ cm}$:
$$A_{\\lambda} = A_X + A_Y = \\varepsilon_{X,\\lambda} \\cdot b \\cdot c_X + \\varepsilon_{Y,\\lambda} \\cdot b \\cdot c_Y$$
Substitusi nilai eksperimen pada $\\lambda_1 = 440\\text{ nm}$ dan $\\lambda_2 = 540\\text{ nm}$:
$$\\text{Persamaan (1): } 1500 \\cdot c_X + 300 \\cdot c_Y = 0.510$$
$$\\text{Persamaan (2): } 200 \\cdot c_X + 1800 \\cdot c_Y = 0.580$$

#### Langkah 2: Penyusunan & Perhitungan Determinan Matriks
Sistem persamaan dalam notasi matriks:
$$\\begin{pmatrix} 1500 & 300 \\\\ 200 & 1800 \\end{pmatrix} \\begin{pmatrix} c_X \\\\ c_Y \\end{pmatrix} = \\begin{pmatrix} 0.510 \\\\ 0.580 \\end{pmatrix}$$
Determinan matriks utama ($D$):
$$D = (1500 \\times 1800) - (300 \\times 200) = 2{,}700{,}000 - 60{,}000 = 2{,}640{,}000\\text{ M}^{-2}\\text{cm}^{-2}$$
Karena $D \\ne 0$, sistem persamaan memiliki solusi tunggal yang pasti.

#### Langkah 3: Penyelesaian Konsentrasi Molar via Aturan Cramer
1. Determinan untuk $c_X$ ($D_X$):
   $$D_X = \\det \\begin{pmatrix} 0.510 & 300 \\\\ 0.580 & 1800 \\end{pmatrix} = (0.510 \\times 1800) - (300 \\times 0.580) = 918.0 - 174.0 = 744.0$$
   Maka konsentrasi Senyawa $X$:
   $$c_X = \\frac{D_X}{D} = \\frac{744.0}{2{,}640{,}000} = 2.8182 \\times 10^{-4}\\text{ M} = 0.2818\\text{ mM}$$

2. Determinan untuk $c_Y$ ($D_Y$):
   $$D_Y = \\det \\begin{pmatrix} 1500 & 0.510 \\\\ 200 & 0.580 \\end{pmatrix} = (1500 \\times 0.580) - (0.510 \\times 200) = 870.0 - 102.0 = 768.0$$
   Maka konsentrasi Senyawa $Y$:
   $$c_Y = \\frac{D_Y}{D} = \\frac{768.0}{2{,}640{,}000} = 2.9091 \\times 10^{-4}\\text{ M} = 0.2909\\text{ mM}$$

#### Langkah 4: Konversi Konsentrasi ke Satuan mg/L & Verifikasi
- Konsentrasi massa Senyawa $X$:
  $$\\rho_X = c_X \\times M_r(X) \\times 1000\\text{ mg/g} = 2.8182 \\times 10^{-4}\\text{ mol/L} \\times 300.0\\text{ g/mol} \\times 1000 = 84.55\\text{ mg/L}$$
- Konsentrasi massa Senyawa $Y$:
  $$\\rho_Y = c_Y \\times M_r(Y) \\times 1000\\text{ mg/g} = 2.9091 \\times 10^{-4}\\text{ mol/L} \\times 450.0\\text{ g/mol} \\times 1000 = 130.91\\text{ mg/L}$$

Verifikasi nilai absorbansi:
- $A_{440} = (1500 \\times 2.8182 \\times 10^{-4}) + (300 \\times 2.9091 \\times 10^{-4}) = 0.4227 + 0.0873 = 0.5100$ (tepat).
- $A_{540} = (200 \\times 2.8182 \\times 10^{-4}) + (1800 \\times 2.9091 \\times 10^{-4}) = 0.05636 + 0.52364 = 0.5800$ (tepat).

---

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Mengapa Nilai Determinan Harus Besar?
> Jika kedua zat memiliki spektrum serapan yang hampir identik (misal $\\varepsilon_{X,1}/\\varepsilon_{X,2} \\approx \\varepsilon_{Y,1}/\\varepsilon_{Y,2}$), maka determinan $D$ akan mendekati nol (*ill-conditioned matrix*). Fluktuasi derau instrumen sekecil $\\pm 0.001$ pada absorbansi akan menyebabkan galat perhitungan konsentrasi membengkak hingga ratusan persen! Pilihlah selalu panjang gelombang dengan rasio serapan kontras tertinggi.`,
    },
    {
      tag: 'soal-kromatografi-efisiensi-kolom-van-deemter',
      tags: ['soal-osn', 'kromatografi', 'resolusi-kromatografi', 'pelat-teoritis', 'persamaan-van-deemter'],
      title: 'Contoh Soal OSN 3: Evaluasi Kromatografi HPLC, Parameter Pelat Teoritis & Resolusi Pemisahan Obat',
      summary: 'Perhitungan kuantitatif faktor retensi k prime, jumlah pelat teoritis N, tinggi pelat H, dan evaluasi resolusi baseline pemisahan analit parasetamol dan kafein.',
      checkpointQuizzes: undefined,
      content: `### 📋 Skenario & Data Kromatogram HPLC:
Pemisahan campuran dua senyawa analit obat, Parasetamol (Senyawa 1) dan Kafein (Senyawa 2), dilakukan menggunakan instrumen Kromatografi Cair Kinerja Tinggi (HPLC) fase terbalik dengan kolom $\\ce{C18}$ sepanjang $L = 15.0\\text{ cm}$ pada laju alir gerak $1.00\\text{ mL/min}$.
Waktu mati kolom yang diukur menggunakan analit tak tertahan natrium nitrat adalah $t_M = 1.20\\text{ menit}$.

Data kromatogram analitik yang terekam adalah sebagai berikut:
- **Puncak 1 (Parasetamol):** Waktu retensi $t_{R1} = 4.80\\text{ menit}$; lebar dasar puncak $W_1 = 0.32\\text{ menit}$; lebar pada setengah tinggi maksimum $W_{1/2,1} = 0.188\\text{ menit}$.
- **Puncak 2 (Kafein):** Waktu retensi $t_{R2} = 6.40\\text{ menit}$; lebar dasar puncak $W_2 = 0.44\\text{ menit}$; lebar pada setengah tinggi maksimum $W_{1/2,2} = 0.259\\text{ menit}$.

---

### 🎯 Pertanyaan:
1. Hitung faktor kapasitas/retensi ($k'_1$ dan $k'_2$) serta faktor selektivitas pemisahan ($\\alpha$)!
2. Hitung jumlah pelat teoritis ($N$) dan tinggi setara pelat teoritis ($H$, dalam satuan $\\mu\\text{m}$) untuk kedua puncak analit!
3. Hitung nilai resolusi pemisahan ($R_s$) antara Parasetamol dan Kafein menggunakan data lebar dasar puncak $W$ dan verifikasi menggunakan data $W_{1/2}$! Apakah pemisahan telah mencapai batas resolusi garis dasar (*baseline resolution*)?
4. Berdasarkan persamaan van Deemter $H = A + B/u + C \\cdot u$, jelaskan strategi penyesuaian laju alir jika diinginkan efisiensi pemisahan maksimum!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Perhitungan Faktor Retensi & Faktor Selektivitas
1. Faktor retensi ($k'$):
   $$k'_1 = \\frac{t_{R1} - t_M}{t_M} = \\frac{4.80 - 1.20}{1.20} = \\frac{3.60}{1.20} = 3.00$$
   $$k'_2 = \\frac{t_{R2} - t_M}{t_M} = \\frac{6.40 - 1.20}{1.20} = \\frac{5.20}{1.20} = 4.333$$
   Kedua nilai berada dalam rentang ideal analitik $1 < k' < 10$.
2. Faktor selektivitas ($\\alpha$):
   $$\\alpha = \\frac{k'_2}{k'_1} = \\frac{4.333}{3.00} = 1.444$$
   Karena $\\alpha > 1.0$, fase diam dan fase gerak menunjukkan selektivitas termodinamik yang sangat baik.

#### Langkah 2: Perhitungan Efisiensi Kolom (Jumlah & Tinggi Pelat)
Panjang kolom: $L = 15.0\\text{ cm} = 150{,}000\\ \\mu\\text{m}$.
1. Untuk Puncak 1 (Parasetamol):
   $$N_1 = 16 \\left(\\frac{t_{R1}}{W_1}\\right)^2 = 16 \\left(\\frac{4.80}{0.32}\\right)^2 = 16 \\times (15.0)^2 = 16 \\times 225 = 3600\\text{ pelat}$$
   Verifikasi dengan FWHM:
   $$N_1 = 5.545 \\left(\\frac{4.80}{0.188}\\right)^2 = 5.545 \\times (25.532)^2 = 5.545 \\times 651.88 = 3615\\text{ pelat}$$
   Tinggi pelat $H_1$:
   $$H_1 = \\frac{L}{N_1} = \\frac{150{,}000\\ \\mu\\text{m}}{3600} = 41.67\\ \\mu\\text{m}$$

2. Untuk Puncak 2 (Kafein):
   $$N_2 = 16 \\left(\\frac{t_{R2}}{W_2}\\right)^2 = 16 \\left(\\frac{6.40}{0.44}\\right)^2 = 16 \\times (14.545)^2 = 16 \\times 211.57 = 3385\\text{ pelat}$$
   Tinggi pelat $H_2$:
   $$H_2 = \\frac{L}{N_2} = \\frac{150{,}000\\ \\mu\\text{m}}{3385} = 44.31\\ \\mu\\text{m}$$

#### Langkah 3: Evaluasi Resolusi Pemisahan ($R_s$)
1. Menggunakan lebar dasar puncak ($W_1$ dan $W_2$):
   $$R_s = \\frac{2(t_{R2} - t_{R1})}{W_1 + W_2} = \\frac{2(6.40 - 4.80)}{0.32 + 0.44} = \\frac{2(1.60)}{0.76} = \\frac{3.20}{0.76} = 4.21$$
2. Verifikasi menggunakan lebar setengah tinggi ($W_{1/2}$):
   $$R_s = \\frac{1.18(t_{R2} - t_{R1})}{W_{1/2,1} + W_{1/2,2}} = \\frac{1.18(1.60)}{0.188 + 0.259} = \\frac{1.888}{0.447} = 4.22$$
3. Evaluasi Kelayakan:
   Syarat resolusi garis dasar (*baseline resolution*) sempurna adalah $R_s \\ge 1.5$. Nilai terhitung $R_s = 4.21$ melampaui batas ambang dengan kemurnian pemisahan puncak $> 99.99\\%$.

#### Langkah 4: Optimasi Laju Alir via Persamaan van Deemter
Kurva van Deemter menghubungkan tinggi pelat $H$ dengan laju alir linear $u$:
- Pada laju alir sangat rendah ($u < u_{\\text{opt}}$), suku difusi molekuler longitudinal ($B/u$) mendominasi, menyebabkan $H$ meningkat drastis (efisiensi turun).
- Pada laju alir sangat tinggi ($u > u_{\\text{opt}}$), suku transfer massa fase diam/gerak ($C \\cdot u$) mendominasi, menyebabkan $H$ naik linier terhadap $u$.
- Laju alir optimum diperoleh pada $u_{\\text{opt}} = \\sqrt{B/C}$ yang meminimalkan $H$ menjadi $H_{\\text{min}} = A + 2\\sqrt{BC}$. Karena $R_s = 4.21$ sudah sangat berlebih, laju alir dapat ditingkatkan secara moderat untuk mempersingkat total waktu analisis tanpa mengorbankan integritas pemisahan garis dasar ($R_s > 2.0$).

---

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Karakteristik Kolom C18 Fase Terbalik
> Pada HPLC fase terbalik (*reversed-phase*), fase diam bersifat non-polar (rantai alkil $\\ce{C18}$) dan fase gerak bersifat polar (air-metanol/asetonitril):
> - Zat yang lebih polar (Parasetamol) terelusi lebih cepat ($t_R = 4.80\\text{ min}$).
> - Zat yang lebih non-polar (Kafein) tertahan lebih lama di fase diam ($t_R = 6.40\\text{ min}$).`,
    },
    {
      tag: 'soal-spektroskopi-ir-osilator-harmonik-isotop',
      tags: ['soal-osn', 'spektroskopi-ir', 'osilator-harmonik', 'hukum-hooke', 'efek-isotop', 'karbonil'],
      title: 'Contoh Soal OSN 4: Perhitungan Frekuensi Vibrasi Ikatan C=O, Efek Isotop Karbon & Tren Rentang Karbonil',
      summary: 'Menghitung tetapan gaya k dan pergeseran bilangan gelombang vibrasi ulur akibat substitusi isotop 13C, serta merasionalisasi urutan frekuensi gugus asil klorida, ester, keton, dan amida.',
      checkpointQuizzes: undefined,
      content: `### 📋 Skenario & Data Eksperimen:
Vibrasi ulur fundamental ikatan karbonil $^{12}\\ce{C}=^{16}\\ce{O}$ pada molekul aseton menghasilkan serapan inframerah tajam pada bilangan gelombang $\\tilde{\\nu}_1 = 1715.0\\text{ cm}^{-1}$.
(Diketahui: massa atom relatif $^{12}\\ce{C} = 12.0000\\text{ g/mol}$, $^{13}\\ce{C} = 13.0034\\text{ g/mol}$, $^{16}\\ce{O} = 15.9949\\text{ g/mol}$, kecepatan cahaya $c = 2.9979 \\times 10^{10}\\text{ cm/s}$, dan bilangan Avogadro $N_A = 6.0221 \\times 10^{23}\\text{ mol}^{-1}$).

---

### 🎯 Pertanyaan:
1. Hitung massa tereduksi ($\\mu$) dari ikatan $^{12}\\ce{C}-^{16}\\ce{O}$ dalam satuan $\\text{kg/molekul}$!
2. Mengasumsikan ikatan berperilaku sebagai osilator harmonik kuantum, hitung nilai konstanta gaya ikatan ($k$) dari ikatan $^{12}\\ce{C}=^{16}\\ce{O}$ dalam satuan $\\text{N/m}$ (atau $\\text{dyn/cm}$)!
3. Jika atom karbon pada gugus karbonil disubstitusi dengan isotop $^{13}\\ce{C}$ (membentuk $^{13}\\ce{C}=^{16}\\ce{O}$), hitung massa tereduksi baru ($\\mu'$) dan tentukan prediksi bilangan gelombang serapan inframerah barunya ($\\tilde{\\nu}_2$) dengan asumsi konstanta gaya ikatan tidak berubah!
4. Urutkan senyawa-senyawa berikut berdasarkan kenaikan bilangan gelombang vibrasi ulur gugus $\\ce{C=O}$-nya dan jelaskan penyebab fisis/kimiawinya:
   - Asetil klorida ($\\ce{CH3-CO-Cl}$)
   - Etil asetat ($\\ce{CH3-CO-OCH2CH3}$)
   - Aseton ($\\ce{CH3-CO-CH3}$)
   - Asetamida ($\\ce{CH3-CO-NH2}$)

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Perhitungan Massa Tereduksi $^{12}\\ce{C}-^{16}\\ce{O}$
Massa tereduksi molar:
$$\\mu_{\\text{molar}} = \\frac{M_{\\ce{C}} \\cdot M_{\\ce{O}}}{M_{\\ce{C}} + M_{\\ce{O}}} = \\frac{12.0000 \\times 15.9949}{12.0000 + 15.9949} = \\frac{191.9388}{27.9949} = 6.8562\\text{ g/mol}$$
Massa tereduksi per molekul dalam satuan $\\text{kg}$:
$$\\mu = \\frac{6.8562 \\times 10^{-3}\\text{ kg/mol}}{6.0221 \\times 10^{23}\\text{ mol}^{-1}} = 1.1385 \\times 10^{-26}\\text{ kg/molekul}$$

#### Langkah 2: Perhitungan Konstanta Gaya Ikatan ($k$)
Rumus bilangan gelombang osilator harmonik:
$$\\tilde{\\nu} = \\frac{1}{2\\pi c} \\sqrt{\\frac{k}{\\mu}} \\implies k = 4\\pi^2 c^2 \\tilde{\\nu}^2 \\mu$$
Dengan memasukkan nilai dalam satuan SI ($c = 2.9979 \\times 10^8\\text{ m/s}$, $\\tilde{\\nu} = 1715.0\\text{ cm}^{-1} = 171{,}500\\text{ m}^{-1}$):
$$k = 4 \\pi^2 \\times (2.9979 \\times 10^8)^2 \\times (171{,}500)^2 \\times (1.1385 \\times 10^{-26})$$
$$4 \\pi^2 = 39.4784$$
$$c^2 = 8.9874 \\times 10^{16}\\text{ m}^2/\\text{s}^2$$
$$\\tilde{\\nu}^2 = 2.9412 \\times 10^{10}\\text{ m}^{-2}$$
$$k = 39.4784 \\times (8.9874 \\times 10^{16}) \\times (2.9412 \\times 10^{10}) \\times (1.1385 \\times 10^{-26}) = 1188.7\\text{ N/m}$$
Dalam satuan CGS: $k = 1.189 \\times 10^6\\text{ dyn/cm}$ (sangat khas untuk ikatan rangkap dua karbonil $\\ce{C=O}$).

#### Langkah 3: Efek Substitusi Isotop $^{13}\\ce{C}$
Massa tereduksi molar baru dengan $^{13}\\ce{C}$:
$$\\mu'_{\\text{molar}} = \\frac{13.0034 \\times 15.9949}{13.0034 + 15.9949} = \\frac{207.9881}{28.9983} = 7.1724\\text{ g/mol}$$
$$\\mu' = \\frac{7.1724 \\times 10^{-3}}{6.0221 \\times 10^{23}} = 1.1910 \\times 10^{-26}\\text{ kg}$$
Karena konstanta gaya pegas ikatan $k$ ditentukan oleh muatan inti dan susunan elektron valensi, nilai $k$ tidak terpengaruh oleh substitusi isotop ($k' = k$).
Rasio frekuensi vibrasi:
$$\\frac{\\tilde{\\nu}_2}{\\tilde{\\nu}_1} = \\sqrt{\\frac{\\mu}{\\mu'}} = \\sqrt{\\frac{6.8562}{7.1724}} = \\sqrt{0.95591} = 0.97771$$
Bilangan gelombang baru:
$$\\tilde{\\nu}_2 = 1715.0\\text{ cm}^{-1} \\times 0.97771 = 1676.8\\text{ cm}^{-1}$$
Pergeseran isotop menghasilkan pergeseran frekuensi ke arah lebih rendah sebesar $\\Delta \\tilde{\\nu} = 1715.0 - 1676.8 = 38.2\\text{ cm}^{-1}$ (*red shift* akibat bertambahnya massa inersia vibrator).

#### Langkah 4: Urutan & Rasionalisasi Frekuensi Karbonil Turunan Asil
Urutan kenaikan bilangan gelombang serapan $\\ce{C=O}$:
$$\\ce{CH3-CO-NH2} < \\ce{CH3-CO-CH3} < \\ce{CH3-CO-OCH2CH3} < \\ce{CH3-CO-Cl}$$
- **Asetamida ($\\sim 1680\\text{ cm}^{-1}$):** Pasangan elektron bebas nitrogen mendonorkan densitas elektron secara masif melalui resonansi ($+R$): $\\ce{-C(=O)-NH2 <-> -C(O^-)=N^+H2}$. Hal ini menurunkan orde ikatan $\\ce{C=O}$ dari 2 menjadi $\\sim 1.5$, memperlemah pegas ikatan ($k$ turun), sehingga serapan bergeser ke frekuensi paling rendah.
- **Aseton ($\\sim 1715\\text{ cm}^{-1}$):** Nilai dasar keton alifatik tanpa heteroatom penyumbang resonansi langsung pada karbonil.
- **Etil asetat ($\\sim 1740\\text{ cm}^{-1}$):** Atom oksigen eter memiliki keelektronegatifan tinggi ($3.44$) yang memberikan efek induksi penarik elektron ($-I$) kuat dari karbon karbonil, melebihi kemampuan sumbangan resonansi $+R$-nya. Karakter ikatan rangkap $\\ce{C=O}$ meningkat, menaikkan $k$ dan frekuensi vibrasi.
- **Asetil klorida ($\\sim 1800\\text{ cm}^{-1}$):** Klorin memiliki efek induksi penarik elektron ($-I$) sangat kuat, sedangkan tumpang tindih orbital $2p-3p$ untuk resonansi $+R$ sangat buruk. Kepadatan elektron ditarik kuat ke arah ikatan $\\ce{C=O}$, memaksimalkan konstanta gaya $k$ dan memunculkan serapan pada frekuensi tertinggi.

---

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Trik Rasio Hooke Cepat
> Jika konstanta pegas $k$ konstan, Anda tidak perlu menghitung konstanta pegas rumit secara manual! Cukup gunakan rasio sederhana:
> $$\\frac{\\tilde{\\nu}_1}{\\tilde{\\nu}_2} = \\sqrt{\\frac{\\mu_2}{\\mu_1}}$$
> Ini menghemat 5 menit waktu pengerjaan berharga di ruang ujian OSN/IChO!`,
    },
    {
      tag: 'soal-elusidasi-struktur-spektroskopi-gabungan',
      tags: ['soal-osn', 'elusidasi-struktur', 'spektroskopi-nmr', 'spektrometri-massa', 'spektroskopi-ir', 'c13-nmr'],
      title: 'Contoh Soal OSN 5: Elusidasi Struktur Komprehensif Senyawa C9H10O2 Berbasis Spektra Gabungan UV, IR, MS, & NMR',
      summary: 'Identifikasi struktur definitif ester aromatik metil 2-fenilasetat melalui integrasi derajat ketidakjenuhan, spektrometri massa, FT-IR, serta 1H dan 13C-NMR DEPT.',
      checkpointQuizzes: undefined,
      content: `### 📋 Skenario & Data Spektroskopi Multimodal:
Suatu senyawa organik tak dikenal $Z$ yang beraroma harum manis diisolasi dan dianalisis menggunakan rangkaian metode spektroskopi modern. Analisis unsur dan spektrometri massa resolusi tinggi (HR-MS) menetapkan rumus molekul senyawa adalah $\\ce{C9H10O2}$.

Kumpulan data spektroskopi eksperimental dari senyawa $Z$:
1. **Spektrometri Massa (EI-MS, $70\\text{ eV}$):**
   - $m/z = 150$ ($[M]^{+\\bullet}$, kelimpahan relatif $28\\%$)
   - $m/z = 151$ ($[M+1]^{+\\bullet}$, kelimpahan relatif $2.8\\%$)
   - $m/z = 91$ (Puncak dasar / *base peak*, kelimpahan $100\\%$)
   - $m/z = 65$ (kelimpahan $18\\%$)
   - $m/z = 59$ (kelimpahan $14\\%$)
2. **Spektroskopi Inframerah (FT-IR, film cair):**
   - Serapan tajam dan sangat kuat pada $1738\\text{ cm}^{-1}$
   - Serapan kuat pada $1200\\text{ cm}^{-1}$ dan $1155\\text{ cm}^{-1}$
   - Serapan tajam pada $3030\\text{ cm}^{-1}$, $2955\\text{ cm}^{-1}$, dan $2845\\text{ cm}^{-1}$
   - Serapan cincin aromatik pada $1602\\text{ cm}^{-1}$, $1496\\text{ cm}^{-1}$, serta serapan tekuk luar bidang (*out-of-plane*) pada $745\\text{ cm}^{-1}$ dan $695\\text{ cm}^{-1}$
   - Sama sekali tidak teramati serapan di daerah $3200 - 3600\\text{ cm}^{-1}$
3. **Spektroskopi Resonansi Magnetik Inti Proton ($^1\\ce{H-NMR}$, $400\\text{ MHz}$, pelarut $\\ce{CDCl3}$):**
   - $\\delta\\ 7.22 - 7.36\\text{ ppm}$ ($5\\ce{H}$, multiplet terintegrasi)
   - $\\delta\\ 3.68\\text{ ppm}$ ($3\\ce{H}$, singlet tajam)
   - $\\delta\\ 3.63\\text{ ppm}$ ($2\\ce{H}$, singlet tajam)
4. **Spektroskopi Karbon-13 ($^{13}\\ce{C-NMR}$ & Sub-spektra DEPT):**
   - Menampilkan 7 puncak garis pergeseran kimia: $\\delta\\ 172.0\\text{ ppm}$, $134.1\\text{ ppm}$, $129.3\\text{ ppm}$, $128.6\\text{ ppm}$, $127.1\\text{ ppm}$, $52.0\\text{ ppm}$, dan $41.2\\text{ ppm}$.
   - Data DEPT-135: puncak $\\delta\\ 52.0$ muncul ke atas (fase positif); puncak $\\delta\\ 41.2$ terbalik ke arah bawah (fase negatif); puncak $\\delta\\ 129.3, 128.6, 127.1$ muncul ke atas; sedangkan puncak $\\delta\\ 172.0$ dan $134.1$ hilang sama sekali.

---

### 🎯 Pertanyaan:
1. Hitung derajat ketidakjenuhan (*Degree of Unsaturation* / DoU) dari senyawa $Z$!
2. Interpretasikan data spektroskopi IR untuk mengidentifikasi seluruh gugus fungsi utama!
3. Analisis pola fragmentasi pada spektrum massa ($m/z = 150, 91, 65, 59$) dan gambarkan struktur fragmen kation yang bersesuaian!
4. Berdasarkan data $^1\\ce{H-NMR}$ dan $^{13}\\ce{C-NMR}$, terdapat dua kandidat isomer konstitusional utama: **Metil 2-fenilasetat** ($\\ce{PhCH2COOCH3}$) dan **Benzil asetat** ($\\ce{CH3COOCH2Ph}$). Lakukan analisis diskriminatif pergeseran kimia secara mendalam untuk menentukan struktur molekul senyawa $Z$ yang definitif!
5. Tuliskan penugasan lengkap (*signal assignment*) seluruh atom hidrogen dan karbon terhadap struktur final tersebut!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Derajat Ketidakjenuhan (DoU)
Rumus molekul: $\\ce{C9H10O2}$.
$$\\text{DoU} = C + 1 - \\frac{H}{2} + \\frac{N}{2} = 9 + 1 - \\frac{10}{2} + 0 = 10 - 5 = 5$$
Nilai $\\text{DoU} = 5$ menunjukkan adanya 1 cincin benzena aromatik (mengonsumsi $\\text{DoU} = 4$, yaitu 1 cincin $+ 3$ ikatan rangkap dua terkonjugasi) ditambah 1 ikatan rangkap dua lain (seperti $\\ce{C=O}$ karbonil).

#### Langkah 2: Analisis Spektrum FT-IR
- Pita tajam kuat pada $1738\\text{ cm}^{-1}$: karakteristik vibrasi ulur gugus **ester alifatik** ($\\ce{-C(=O)-O-}$).
- Pita kuat pada $1200\\text{ cm}^{-1}$ dan $1155\\text{ cm}^{-1}$: vibrasi ulur $\\ce{C-O}$ ester.
- Tidak adanya pita lebar di atas $3200\\text{ cm}^{-1}$: mengeliminasi gugus alkohol dan asam karboksilat.
- Pita $3030\\text{ cm}^{-1}$: ulur $\\ce{C(sp^2)-H}$ aromatik; pita $2955$ dan $2845\\text{ cm}^{-1}$: ulur $\\ce{C(sp^3)-H}$ alifatik.
- Dua pita tekuk kuat pada $745\\text{ cm}^{-1}$ dan $695\\text{ cm}^{-1}$: karakteristik diagnostik mutlak untuk cincin benzena **monosubstitusi** ($\\ce{C6H5-}$).

#### Langkah 3: Analisis Pola Fragmentasi Spektrometri Massa
1. $m/z = 150$: Puncak ion molekuler radikal kation $[M]^{+\\bullet}$ (sesuai $M_r = 9(12) + 10(1) + 2(16) = 150$).
   Rasio $[M+1]/[M] = 2.8 / 28 = 0.10 = 10\\% \\implies n_C \\approx 10 / 1.1 = 9$ atom karbon.
2. $m/z = 91$ ($100\\%$, *base peak*): Puncak karakteristik ion tropilium (kation sikloheptatrienil $[\ce{C7H7}]^+$).
   Terbentuk melalui pemutusan ikatan benzylic:
   $$\\ce{[C6H5-CH2-COOCH3]^{+\\bullet} -> [C6H5-CH2]+ + ^\\bullet COOCH3} \\implies [\\ce{C7H7}]^+ \\quad (m/z = 91)$$
3. $m/z = 65$ ($18\\%$): Kehilangan molekul netral asetilen ($\\ce{HC#CH}$, massa 26) dari kation tropilium:
   $$[\\ce{C7H7}]^+ (m/z = 91) \\xrightarrow{-\\ce{C2H2}} [\\ce{C5H5}]^+ (m/z = 65)$$
4. $m/z = 59$ ($14\\%$): Kation karboksimetoksi (fragmen ester metil):
   $$[\\ce{O=C-OCH3}]^+ \\quad (m/z = 12 + 16 + 16 + 15 = 59)$$

#### Langkah 4: Diskriminasi Isomer Metil 2-Fenilasetat vs Benzil Asetat
Dua kandidat isomer konstitusional ester monosubstitusi $\\ce{C9H10O2}$:
- Isomer A: **Metil 2-fenilasetat** ($\\ce{Ph-CH2-C(=O)-OCH3}$)
- Isomer B: **Benzil asetat** ($\\ce{Ph-CH2-O-C(=O)-CH3}$)

Uji pergeseran kimia proton alifatik pada $^1\\ce{H-NMR}$:
1. Pada Isomer A (Metil 2-fenilasetat):
   - Proton $\\ce{-OCH3}$ terikat langsung ke atom oksigen ester: muncul pada rentang khas $\\delta \\approx 3.65 - 3.70\\text{ ppm}$.
   - Proton metilen benzylic $\\ce{Ph-CH2-C(=O)-}$ diapit oleh cincin fenil dan gugus karbonil: pergeseran kimia terhitung $\\delta \\approx 3.60 - 3.65\\text{ ppm}$.
   - Kedua puncak alifatik muncul berdampingan di sekitar $\\delta \\sim 3.6\\text{ ppm}$!
2. Pada Isomer B (Benzil asetat):
   - Proton metil karbonil $\\ce{CH3-C(=O)-O-}$ adalah metil keton/asetat sederhana: harus muncul pada $\\delta \\approx 2.05 - 2.10\\text{ ppm}$ (singlet tajam).
   - Proton metilen benzylic $\\ce{Ph-CH2-O-C(=O)-}$ terikat langsung pada oksigen ester yang sangat elektronegatif: mengalami *deshielding* masif hingga $\\delta \\approx 5.10\\text{ ppm}$!
3. Data eksperimen: **Hanya ada puncak pada $\\delta\\ 3.68\\text{ ppm}$ ($3\\ce{H}$) dan $\\delta\\ 3.63\\text{ ppm}$ ($2\\ce{H}$)**, serta sama sekali **tidak ada sinyal pada $\\delta\\ 2.05\\text{ ppm}$ maupun $\\delta\\ 5.10\\text{ ppm}$**.
Fakta spektroskopi ini secara mutlak menyingkirkan Benzil asetat dan membuktikan bahwa senyawa $Z$ adalah **Metil 2-fenilasetat**.

#### Langkah 5: Penugasan Sinyal Lengkap ($^1\\ce{H}$ & $^{13}\\ce{C}$ DEPT-NMR)
Struktur definitif: $\\ce{C6H5-CH2-C(=O)-O-CH3}$ (Metil 2-fenilasetat).
1. **Penugasan $^1\\ce{H-NMR}$:**
   - $\\delta\\ 7.22 - 7.36\\text{ ppm}$ ($5\\ce{H}$, m): proton cincin aromatik $\\ce{C6H5-}$ (posisi *orto*, *meta*, *para*).
   - $\\delta\\ 3.68\\text{ ppm}$ ($3\\ce{H}$, s): proton metoksi $\\ce{-O-CH3}$.
   - $\\delta\\ 3.63\\text{ ppm}$ ($2\\ce{H}$, s): proton metilen benzylic $\\ce{Ph-CH2-CO-}$.
2. **Penugasan $^{13}\\ce{C-NMR}$ & DEPT:**
   - $\\delta\\ 172.0\\text{ ppm}$: karbon karbonil ester $\\ce{-C(=O)O-}$ (karbon kuaterner, hilang di DEPT-135).
   - $\\delta\\ 134.1\\text{ ppm}$: karbon aromatik *ipso* $\\ce{C_{ar}-CH2}$ (karbon kuaterner, hilang di DEPT-135).
   - $\\delta\\ 129.3\\text{ ppm}$ ($2\\ce{C}$, orto) & $\\delta\\ 128.6\\text{ ppm}$ ($2\\ce{C}$, meta): karbon aromatik $\\ce{CH}$ (muncul positif di DEPT-135).
   - $\\delta\\ 127.1\\text{ ppm}$ ($1\\ce{C}$, para): karbon aromatik $\\ce{CH}$ (muncul positif di DEPT-135).
   - $\\delta\\ 52.0\\text{ ppm}$: karbon metoksi $\\ce{-OCH3}$ ($\ce{CH3}$, muncul positif di DEPT-135).
   - $\\delta\\ 41.2\\text{ ppm}$: karbon metilen benzylic $\\ce{-CH2-}$ ($\ce{CH2}$, terbalik negatif di DEPT-135).

---

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Integrasi 4 Pilar Spektroskopi
> Dalam memecahkan soal elusidasi struktur olimpiade, selalu ikuti urutan 4 pilar ini:
> 1. **Rumus Molekul $\\to$ DoU** (menghitung jumlah ikatan rangkap dan cincin).
> 2. **IR $\\to$ Gugus Fungsi** (mendeteksi karbonil, alkohol, amina, ester, cincin aromatik).
> 3. **MS $\\to$ Massa Molekul & Fragmen Utama** (pola isotop halogen dan fragmen stabil seperti $m/z = 91$).
> 4. **NMR ($^1\\ce{H}$ & $^{13}\\ce{C}$) $\\to$ Konektivitas Ruang** (menghitung tetangga via multiplisitas dan lingkungan elektronik via pergeseran kimia)!`,
    },
  ],
};
