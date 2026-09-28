/**
 * osnTopic09.ts
 * Topik 9: Kimia Analitik & Dasar Spektroskopi
 * Jenjang: OSN / IChO
 */

import type { MaterialItem } from '../../materialsData.ts';

export const OSN_TOPIC_9: MaterialItem = {
  id: 9,
  topic_number: 9,
  title: 'Kimia Analitik & Dasar Spektroskopi',
  slug: 'analitik-spektroskopi',
  category: 'Kimia Analitik',
  level: 'OSN',
  readTimeMinutes: 35,
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
      content: `Titrasi redoks didasarkan pada reaksi transfer elektron stoikiometris antara analit dan titran standar. Pada titik ekivalen redoks, jumlah mol elektron yang dilepaskan oleh agen pereduksi (reduktor) tepat setara dengan jumlah mol elektron yang diterima oleh agen pengoksidasi (oksidator):
$$n_{e1} \\cdot n_1 = n_{e2} \\cdot n_2 \\implies n_{e1} \\cdot M_1 \\cdot V_1 = n_{e2} \\cdot M_2 \\cdot V_2$$
dengan $n_e$ menyatakan jumlah elektron yang ditransfer per mol reagen dalam setengah reaksinya.

### 1. Permanganometri (Autoindikator Alami)
Titrasi permanganometri memanfaatkan kalium permanganat ($\\ce{KMnO4}$) sebagai oksidator kuat. Dalam suasana asam kuat (umumnya $\\ce{H2SO4}$, hindari $\\ce{HCl}$ karena ion $\\ce{Cl-}$ dapat teroksidasi menjadi $\\ce{Cl2}$, dan hindari $\\ce{HNO3}$ karena merupakan oksidator pengganggu):
$$\\ce{MnO4- + 8H+ + 5e- -> Mn^2+ + 4H2O} \\quad (E^\\circ = +1.51\\text{ V})$$
- Ion $\\ce{MnO4-}$ berwarna ungu intens, sedangkan kation $\\ce{Mn^2+}$ hampir tidak berwarna (merah muda sangat pucat).
- Satu tetes kelebihan $\\ce{MnO4-}$ sebesar $\\sim 0.02\\text{ mL}$ ($c = 0.02\\text{ M}$) pada titik akhir memberikan warna merah muda stabil selama minimal 30 detik tanpa memerlukan indikator visual luar (*autoindikator*).
- Larutan baku primer yang digunakan untuk standarisasi $\\ce{KMnO4}$ meliputi natrium oksalat ($\\ce{Na2C2O4}$):
$$5\\ce{C2O4^2- + 2MnO4- + 16H+ -> 10CO2(g) + 2Mn^2+ + 8H2O}$$

### 2. Iodimetri vs Iodometri
- **Iodimetri (Titrasi Redoks Langsung):** Analit reduktor kuat dititrasi langsung dengan larutan standar iodin ($\\ce{I2}$ terlarut dalam $\\ce{KI}$ sebagai triiodida $\\ce{I3-}$):
$$\\ce{I3- + 2e- <=> 3I-} \\quad (E^\\circ = +0.54\\text{ V})$$
Digunakan untuk menentukan kadar analit seperti arsenit ($\\ce{AsO3^3-}$), timah(II) ($\\ce{Sn^2+}$), atau asam askorbat (Vitamin C, $\\ce{C6H8O6}$).

- **Iodometri (Titrasi Redoks Tidak Langsung):** Analit oksidator (seperti $\\ce{Cu^2+}$, $\\ce{Cr2O7^2-}$, $\\ce{IO3-}$, atau $\\ce{ClO-}$) direaksikan dengan ion iodida ($\\ce{I-}$) berlebih dalam suasana terkontrol, membebaskan iodin ekuivalen:
$$2\\ce{Cu^2+ + 4I- -> 2CuI(s) + I2}$$
Iodin ($\\ce{I2}$) yang terbebas kemudian dititrasi secara presisi dengan larutan standar natrium tiosulfat ($\\ce{Na2S2O3}$):
$$\\ce{I2 + 2S2O3^2- -> 2I- + S4O6^2-} \\quad (\\text{ion tetrationat})$$

### 3. Dinamika Indikator Amilum
Indikator amilum (pati) membentuk kompleks inklusi heliks berwarna biru tua intens dengan ion triiodida/poliodida ($\\ce{I3-}/\\ce{I5-}$).
- **Aturan Penambahan:** Indikator amilum **tidak boleh** ditambahkan di awal titrasi saat konsentrasi $\\ce{I2}$ masih tinggi, karena molekul iodin akan terperangkap secara ireversibel di dalam heliks amilosa sehingga titik akhir menjadi lambat dan tidak tajam.
- Amilum baru ditambahkan saat larutan titrasi berubah warna dari coklat tua menjadi kuning jerami pucat. Titrasi dilanjutkan tetes demi tetes hingga warna biru tua tepat hilang menjadi tak berwarna (atau putih susu endapan).`,
      keyFormulas: [
        { name: 'Ekivalensi Redoks', formula: 'n_{e1} \\cdot M_1 \\cdot V_1 = n_{e2} \\cdot M_2 \\cdot V_2' },
        { name: 'Setengah Reaksi Permanganat Asam', formula: '\\ce{MnO4- + 8H+ + 5e- -> Mn^2+ + 4H2O}' },
        { name: 'Reaksi Tiosulfat dengan Iodin', formula: '\\ce{I2 + 2S2O3^2- -> 2I- + S4O6^2-}' },
      ],
    },
    {
      tag: 'prasyarat-gravimetri-kesalahan-analisis-statistik',
      tags: ['analisis-gravimetri', 'faktor-gravimetri', 'kopresipitasi', 'evaluasi-statistik', 'uji-t-student', 'rentang-kepercayaan'],
      title: 'Prasyarat 2: Analisis Gravimetri Presipitasi & Evaluasi Data Statistik Kimia Analitik',
      summary: 'Tahapan kuantitatif gravimetri, faktor gravimetri GF, kondisi von Weimarn, penanganan kopresipitasi, serta evaluasi statistik mean, standar deviasi, dan uji signifikansi.',
      content: `Analisis gravimetri presipitasi mengukur massa analit yang diisolasi sebagai endapan murni berstoikiometri terdefinisi setelah proses pengendapan, penyaringan, pencucian, dan pemijaran/pengeringan.

### 1. Faktor Gravimetri (Gravimetric Factor / GF)
Hubungan stoikiometri antara massa endapan yang ditimbang dengan massa analit yang dicari dinyatakan melalui Faktor Gravimetri ($GF$):
$$GF = \\frac{a \\cdot M_r(\\text{analit})}{b \\cdot M_r(\\text{endapan ditimbang})}$$
$$\\%\\text{ Analit} = \\frac{\\text{massa endapan} \\times GF}{\\text{massa sampel kering}} \\times 100\\%$$
Contoh: jika barium sulfat ($\\ce{BaSO4}$) ditimbang untuk menentukan belerang ($\\ce{S}$), maka $GF = \\frac{1 \\times M_r(\\ce{S})}{1 \\times M_r(\\ce{BaSO4})} = \\frac{32.065}{233.39} = 0.13739$.

### 2. Kondisi Pembentukan Endapan & Rasio Supersaturasi von Weimarn
Karakteristik fisik endapan (apakah berupa kristal kasar yang mudah disaring atau koloid tersuspensi) dikendalikan oleh Rasio Kejenuhan Relatif (*Relative Supersaturation* / RSS) menurut von Weimarn:
$$\\text{RSS} = \\frac{Q - S}{S}$$
- $Q$: Konsentrasi sesaat reagen pencampur.
- $S$: Kelarutan kesetimbangan endapan dalam medium.
- Jika $\\text{RSS}$ sangat besar: laju nukleasi mendominasi laju pertumbuhan kristal, menghasilkan jutaan partikel koloid halus ($1-100\\text{ nm}$) yang sulit disaring.
- Jika $\\text{RSS}$ kecil: pertumbuhan kristal mendominasi nukleasi, menghasilkan partikel kristal besar ($> 0.1\\text{ mm}$) yang murni dan cepat mengendap.
- **Kondisi Optimal Pengendapan:** gunakan larutan encer (menurunkan $Q$), tambahkan reagen perlahan sambil diaduk kuat, lakukan pengendapan pada suhu tinggi (menaikkan $S$), dan lakukan *digestion* (pematangan Ostwald ripening, membiarkan endapan kontak dengan larutan induk panas agar kristal kecil larut dan mengkristal kembali pada permukaan kristal besar).

### 3. Fenomena Kopresipitasi
Pengotoran endapan oleh zat terlarut yang sebenarnya larut dalam kondisi tersebut:
1. **Adsorpsi Permukaan:** ion asing menempel pada lapisan ganda listrik partikel koloid (diatasi dengan koagulasi, pencucian dengan elektrolit volatil seperti $\\ce{NH4NO3}$).
2. **Inklusi (Isomorfis):** ion pengotor dengan ukuran dan muatan identik menggantikan ion kisi di dalam kisi kristal (misal $\\ce{K+}$ menggantikan $\\ce{Ba^2+}$ dalam $\\ce{BaSO4}$).
3. **Oklusi:** kantung pelarut atau pengotor terperangkap secara mekanis di dalam kristal saat kristal tumbuh terlalu cepat (diminimalkan dengan *digestion*).

### 4. Evaluasi Statistik Data Analitik
Dalam kimia analitik presisi, hasil pengukuran selalu dilaporkan beserta ketidakpastiannya:
- **Rata-rata Sampel (Mean):** $\\bar{x} = \\frac{1}{N}\\sum_{i=1}^N x_i$
- **Standar Deviasi Sampel ($s$):**
$$s = \\sqrt{\\frac{\\sum_{i=1}^N (x_i - \\bar{x})^2}{N - 1}}$$
- **Standar Deviasi Relatif (%RSD / Koefisien Variasi):** $\\text{RSD} = \\frac{s}{\\bar{x}} \\times 100\\%$
- **Rentang Kepercayaan (Confidence Interval / CI 95%):**
$$\\mu = \\bar{x} \\pm \\frac{t_{\\text{tabel}} \\cdot s}{\\sqrt{N}}$$
dengan $t_{\\text{tabel}}$ diperoleh dari distribusi $t$-Student pada derajat kebebasan $\\nu = N - 1$.
- **Uji-$Q$ Dixon untuk Data Pencilan (Outlier):**
$$Q_{\\text{hitung}} = \\frac{|x_{\\text{suspect}} - x_{\\text{nearest}}|}{|x_{\\text{max}} - x_{\\text{min}}|}$$
Jika $Q_{\\text{hitung}} > Q_{\\text{tabel}}$, maka data pencilan dapat dibuang dengan tingkat kepercayaan $90\\%$ atau $95\\%$.`,
      keyFormulas: [
        { name: 'Faktor Gravimetri', formula: 'GF = \\frac{a \\cdot M_r(\\text{analit})}{b \\cdot M_r(\\text{endapan})}' },
        { name: 'Rasio Supersaturasi von Weimarn', formula: '\\text{RSS} = \\frac{Q - S}{S}' },
        { name: 'Rentang Kepercayaan Student', formula: '\\mu = \\bar{x} \\pm \\frac{t \\cdot s}{\\sqrt{N}}' },
      ],
    },
    {
      tag: 'prasyarat-kromatografi-retensi-resolusi',
      tags: ['kromatografi', 'faktor-retensi', 'efisiensi-kolom', 'pelat-teoritis', 'persamaan-van-deemter', 'resolusi-kromatografi'],
      title: 'Prasyarat 3: Teori Kromatografi, Efisiensi Kolom, & Persamaan van Deemter',
      summary: 'Keseimbangan distribusi fase diam dan fase gerak, parameter waktu retensi, jumlah pelat teoritis N, tinggi pelat H, laju alir optimum van Deemter, dan resolusi Rs.',
      content: `Kromatografi adalah metode pemisahan fisik multikomponen berdasarkan perbedaan distribusi analit antara fase diam (*stationary phase*) dan fase gerak (*mobile phase*).

### 1. Parameter Retensi Kromatogram
- **Waktu Retensi ($t_R$):** waktu yang dibutuhkan analit dari saat injeksi hingga terdeteksi pada puncak maksimum kromatogram.
- **Waktu Mati ($t_M$ atau $t_0$):** waktu elusi senyawa tak tertahan (*unretained species*), merepresentasikan waktu transit fase gerak melintasi volume mati kolom.
- **Waktu Retensi Terkoreksi ($t'_R$):**
$$t'_R = t_R - t_M$$
- **Faktor Kapasitas / Faktor Retensi ($k'$):**
$$k' = \\frac{t_R - t_M}{t_M} = \\frac{t'_R}{t_M} = \\frac{K \\cdot V_S}{V_M}$$
dengan $K$ koefisien partisi analit, $V_S$ volume fase diam, dan $V_M$ volume fase gerak. Nilai optimal pemisahan berada pada rentang $1 < k' < 10$.
- **Faktor Selektivitas ($\\alpha$):**
$$\\alpha = \\frac{k'_2}{k'_1} = \\frac{t'_{R2}}{t'_{R1}} > 1$$

### 2. Efisiensi Kolom: Teori Pelat Teoritis
Efisiensi pemisahan kolom dinyatakan oleh jumlah pelat teoritis ($N$): semakin banyak pelat teoritis, semakin sempit puncak kromatogram dan semakin baik daya pisahnya.
$$N = 16 \\left(\\frac{t_R}{W}\\right)^2 = 5.545 \\left(\\frac{t_R}{W_{1/2}}\\right)^2$$
- $W$: lebar puncak pada garis dasar (*baseline width*, ditentukan dari perpotongan garis tangen).
- $W_{1/2}$: lebar puncak pada setengah tinggi maksimum (*Full Width at Half Maximum* / FWHM).
- **Tinggi Setara Pelat Teoritis (Height Equivalent to a Theoretical Plate / HETP, $H$):**
$$H = \\frac{L}{N}$$
dengan $L$ panjang kolom kromatografi. Kolom berefisiensi tinggi memiliki nilai $H$ sekecil mungkin.

### 3. Persamaan van Deemter untuk Pelebaran Puncak
Pelebaran zona analit saat melintasi kolom dikendalikan oleh tiga proses fisik kinetik sesuai persamaan van Deemter:
$$H = A + \\frac{B}{u} + C \\cdot u$$
- $A$ (Difusi Eddy): variasi panjang jalur yang ditempuh molekul melewati partikel kemasan kolom berpori: $A = 2\\lambda d_p$ (dengan $d_p$ diameter partikel kemasan; bernilai 0 pada kolom kapiler terbuka/tubular).
- $\\frac{B}{u}$ (Difusi Longitudinal Molekuler): kecenderungan molekul berdifusi dari pusat zona pekat ke arah depan dan belakang sepanjang sumbu kolom akibat gradien konsentrasi. Berbanding terbalik dengan laju alir linear $u$.
- $C \\cdot u$ (Resistensi Perpindahan Massa): keterlambatan molekul analit mencapai kesetimbangan partisi antara fase diam dan fase gerak. Berbanding lurus dengan laju alir $u$.
- **Laju Alir Optimum ($u_{\\text{opt}}$):**
$$u_{\\text{opt}} = \\sqrt{\\frac{B}{C}} \\implies H_{\\text{min}} = A + 2\\sqrt{B \\cdot C}$$

### 4. Resolusi Kromatografi ($R_s$)
Kualitas pemisahan dua puncak yang bersebelahan dievaluasi melalui nilai resolusi ($R_s$):
$$R_s = \\frac{2(t_{R2} - t_{R1})}{W_1 + W_2} = \\frac{1.18(t_{R2} - t_{R1})}{W_{1/2,1} + W_{1/2,2}}$$
- $R_s = 1.0$: terjadi tumpang-tindih (*overlap*) sebesar $\\sim 2\\%$ antar-puncak.
- $R_s \\ge 1.5$: batas pemisahan sempurna garis dasar (*baseline resolution*, kemurnian $\\ge 99.7\\%$, standar kuantitatif industri farmasi & OSN).
- **Persamaan Master Resolusi Purnell:**
$$R_s = \\frac{\\sqrt{N}}{4} \\left(\\frac{\\alpha - 1}{\\alpha}\\right) \\left(\\frac{k'_2}{1 + k'_2}\\right)$$`,
      keyFormulas: [
        { name: 'Jumlah Pelat Teoritis FWHM', formula: 'N = 5.545 \\left(\\frac{t_R}{W_{1/2}}\\right)^2' },
        { name: 'Persamaan van Deemter', formula: 'H = A + \\frac{B}{u} + C \\cdot u' },
        { name: 'Resolusi Pemisahan Kromatografi', formula: 'R_s = \\frac{2(t_{R2} - t_{R1})}{W_1 + W_2}' },
      ],
    },
  ],
  core_concepts: [
    {
      tag: 'konsep-spektrofotometri-uv-vis-hukum-lambert-beer',
      tags: ['spektrofotometri-uv-vis', 'hukum-lambert-beer', 'absorbansi', 'koefisien-ekstingsi-molar', 'analisis-multikomponen', 'kromofor-auksokrom'],
      title: 'Konsep Inti 1: Spektrofotometri UV-Vis, Hukum Lambert-Beer & Analisis Multikomponen',
      summary: 'Penurunan hukum Lambert-Beer, batasan kimiawi & instrumental, klasifikasi kromofor/auksokrom, dan penyelesaian matriks simultan campuran multikomponen.',
      content: `Spektrofotometri UV-Vis mengukur absorpsi radiasi elektromagnetik pada panjang gelombang $200-400\\text{ nm}$ (sinar ultraviolet) dan $400-800\\text{ nm}$ (cahaya tampak) yang memicu eksitasi elektron valensi dari keadaan dasar (*HOMO*) ke keadaan tereksitasi (*LUMO*).

### 1. Hukum Lambert-Beer & Transmitansi
Cahaya monokromatis dengan intensitas awal $I_0$ melewati medium penyerap berketebalan $b$ yang mengandung analit berkonsentrasi $c$. Fraksi intensitas yang diteruskan adalah transmitansi ($T = I / I_0$). Absorbansi ($A$) didefinisikan sebagai logaritma negatif transmitansi:
$$A = -\\log_{10} T = \\log_{10}\\left(\\frac{I_0}{I}\\right) = \\varepsilon \\cdot b \\cdot c$$
- $A$: Absorbansi (tanpa satuan, bersifat aditif linier).
- $\\varepsilon$: Koefisien absorptivitas molar / koefisien ekstingsi (satuan $\\text{L}\\cdot\\text{mol}^{-1}\\cdot\\text{cm}^{-1}$ atau $\\text{M}^{-1}\\cdot\\text{cm}^{-1}$). Karakteristik intrinsik analit pada $\\lambda$ tertentu.
- $b$: Panjang jalur cahaya kuvet (standar $1.00\\text{ cm}$).
- $c$: Konsentrasi molar analit ($\\text{mol/L}$).

### 2. Batasan & Penyimpangan Hukum Lambert-Beer
1. **Penyimpangan Kimiawi (Konsentrasi Tinggi):** Hukum Lambert-Beer adalah hukum pembatas yang hanya berlaku sempurna pada larutan encer ($c \\le 0.01\\text{ M}$). Pada konsentrasi tinggi, jarak antar molekul penyerap memendek sehingga terjadi interaksi elektrostatik yang mengubah struktur elektronik dan indeks bias medium ($n$). Terjadi pula potensi pergeseran kesetimbangan asosiasi, disosiasi, atau protonasi analit (misal kesetimbangan kromat-dikromat $2\\ce{CrO4^2- + 2H+ <=> Cr2O7^2- + H2O}$).
2. **Penyimpangan Instrumental (Polikromatis & Stray Light):**
   - Radiasi tidak monokromatis sempurna menghasilkan deviasi negatif.
   - Adanya cahaya sesat (*stray light*, fraksi $s = I_s / I_0$ yang sampai ke detektor tanpa melewati sampel) menyebabkan absorbansi terukur membelok tajam pada konsentrasi tinggi:
$$A_{\\text{terukur}} = \\log_{10}\\left(\\frac{1 + s}{T + s}\\right)$$
Hal ini membatasi rentang pengukuran linier terpercaya instrumen pada interval $0.2 < A < 1.0$ (kesalahan fotometrik minimum pada $A \\approx 0.434$).

### 3. Kromofor, Auksokrom, & Nomenklatur Pergeseran Spektra
- **Kromofor:** gugus fungsional tak jenuh pembawa serapan radiasi (misal $\\ce{C=C}, \\ce{C=O}, \\ce{-NO2}, \\ce{-N=N-}, \\ce{C#N}$).
  - Transisi $\\sigma \\to \\sigma^*$: vakum-UV ($< 185\\text{ nm}$, alkana jenuh).
  - Transisi $n \\to \\sigma^*$: UV jauh ($150-250\\text{ nm}$, eter, amina, tiol).
  - Transisi $\\pi \\to \\pi^*$: UV-Vis ($180-400\\text{ nm}$, alkena terkonjugasi, aromatik; $\\varepsilon \\approx 10^3 - 10^5$).
  - Transisi $n \\to \\pi^*$: UV-Vis ($270-350\\text{ nm}$, karbonil $\\ce{C=O}$; $\\varepsilon \\approx 10 - 100$, terlarang simetri).
- **Auksokrom:** gugus jenuh pembawa pasangan elektron bebas yang terikat langsung pada kromofor (misal $\\ce{-OH}, \\ce{-OR}, \\ce{-NH2}, \\ce{-NR2}, \\ce{-SH}, \\ce{-X}$), mendonorkan densitas elektron ke sistem $\\pi$ sehingga mengecilkan celah energi HOMO-LUMO.
- **Istilah Pergeseran:**
  - **Pergeseran Batokromik (Red Shift):** pergeseran $\\lambda_{\\text{max}}$ ke panjang gelombang lebih panjang (energi lebih rendah), dipicu oleh peningkatan derajat konjugasi atau substitusi auksokrom donor.
  - **Pergeseran Hipsokromik (Blue Shift):** pergeseran $\\lambda_{\\text{max}}$ ke panjang gelombang lebih pendek (energi lebih tinggi), dipicu oleh protonasi gugus amina (hilangnya resonansi PEB) atau efek pelarut polar pada transisi $n \\to \\pi^*$.
  - **Efek Hiperkromik:** peningkatan nilai absorptivitas molar $\\varepsilon_{\\text{max}}$.
  - **Efek Hipokromik:** penurunan nilai absorptivitas molar $\\varepsilon_{\\text{max}}$.

### 4. Analisis Spektrofotometri Campuran Multikomponen
Absorbansi bersifat aditif murni jika komponen dalam larutan tidak saling bereaksi. Untuk campuran dua zat $X$ dan $Y$ dalam kuvet berpanjang $b = 1.00\\text{ cm}$, absorbansi total diukur pada dua panjang gelombang berbeda ($\\lambda_1$ dan $\\lambda_2$):
$$A_{\\lambda_1} = \\varepsilon_{X,1} c_X + \\varepsilon_{Y,1} c_Y$$
$$A_{\\lambda_2} = \\varepsilon_{X,2} c_X + \\varepsilon_{Y,2} c_Y$$
Dengan mengukur koefisien ekstingsi molar keempat parameter dari larutan standar murni, konsentrasi $c_X$ dan $c_Y$ dapat dihitung secara eksak menggunakan Aturan Cramer:
$$c_X = \\frac{A_{\\lambda_1} \\varepsilon_{Y,2} - A_{\\lambda_2} \\varepsilon_{Y,1}}{\\varepsilon_{X,1} \\varepsilon_{Y,2} - \\varepsilon_{X,2} \\varepsilon_{Y,1}}, \\quad c_Y = \\frac{A_{\\lambda_2} \\varepsilon_{X,1} - A_{\\lambda_1} \\varepsilon_{X,2}}{\\varepsilon_{X,1} \\varepsilon_{Y,2} - \\varepsilon_{X,2} \\varepsilon_{Y,1}}$$`,
      keyFormulas: [
        { name: 'Hukum Lambert-Beer', formula: 'A = -\\log_{10} T = \\varepsilon \\cdot b \\cdot c' },
        { name: 'Aditifitas Absorbansi Multikomponen', formula: 'A_{\\lambda} = \\sum_{i} \\varepsilon_{i,\\lambda} \\cdot b \\cdot c_i' },
      ],
    },
    {
      tag: 'konsep-spektroskopi-inframerah-ftir-model-osilator',
      tags: ['spektroskopi-ir', 'osilator-harmonik', 'hukum-hooke', 'frekuensi-vibrasi', 'gugus-fungsi', 'efek-konjugasi-tegangan-cincin'],
      title: 'Konsep Inti 2: Spektroskopi Inframerah (FT-IR), Model Osilator Harmonik & Karakteristik Gugus Fungsi',
      summary: 'Teori vibrasi molekuler, hukum Hooke dan massa tereduksi mu, aturan seleksi momen dipol, pembagian daerah spektrum, dan efek resonansi/tegangan cincin pada karbonil.',
      content: `Spektroskopi inframerah (FT-IR) mengkaji penyerapan radiasi inframerah pada rentang bilangan gelombang $\\tilde{\nu} = 4000 - 400\\text{ cm}^{-1}$ yang menyebabkan transisi antar tingkat energi vibrasi ikatan kovalen.

### 1. Model Osilator Harmonik & Hukum Hooke
Dua atom bermassa $m_1$ dan $m_2$ yang terikat kovalen dimodelkan sebagai dua bola yang dihubungkan oleh pegas dengan konstanta gaya $k$. Menurut hukum Hooke kuantum, bilangan gelombang serapan vibrasi fundamental adalah:
$$\\tilde{\\nu} = \\frac{1}{2\\pi c} \\sqrt{\\frac{k}{\\mu}}$$
- $c$: Kecepatan cahaya ($2.998 \\times 10^{10}\\text{ cm/s}$).
- $k$: Konstanta gaya ikatan (dalam satuan $\\text{dyn/cm}$ atau $\\text{N/m}$):
  - Ikatan tunggal ($\\ce{C-C, C-O, C-N}$): $k \\approx 5 \\times 10^5\\text{ dyn/cm}$
  - Ikatan rangkap dua ($\\ce{C=C, C=O}$): $k \\approx 10 \\times 10^5\\text{ dyn/cm}$
  - Ikatan rangkap tiga ($\\ce{C#C, C#N}$): $k \\approx 15 \\times 10^5\\text{ dyn/cm}$
- $\\mu$: Massa tereduksi sistem diatomik (dalam gram per molekul):
$$\\mu = \\frac{m_1 \\cdot m_2}{m_1 + m_2} = \\frac{M_1 \\cdot M_2}{(M_1 + M_2) \\cdot N_A}$$
dengan $M_1, M_2$ adalah massa molar atom ($\\text{g/mol}$) dan $N_A = 6.022 \\times 10^{23}\\text{ mol}^{-1}$.
- **Konsekuensi Langsung:**
  - Ikatan lebih kuat ($k$ lebih besar) mengabsorpsi pada bilangan gelombang lebih tinggi: $\\tilde{\\nu}_{\\ce{C#C}} > \\tilde{\\nu}_{\\ce{C=C}} > \\tilde{\\nu}_{\\ce{C-C}}$.
  - Atom lebih ringan ($\mu$ lebih kecil) mengabsorpsi pada bilangan gelombang lebih tinggi: $\\tilde{\\nu}_{\\ce{C-H}} (\\sim 3000\\text{ cm}^{-1}) \\gg \\tilde{\\nu}_{\\ce{C-C}} (\\sim 1000\\text{ cm}^{-1})$.

### 2. Aturan Seleksi Vibrasi & Derajat Kebebasan
- **Syarat Aktif IR:** Transisi vibrasi hanya dapat menyerap radiasi inframerah jika terdapat **perubahan momen dipol transisi** selama getaran molekul ($\\frac{d\\mu_{\\text{dipol}}}{dq} \\ne 0$). Molekul diatomik homonuklear netral ($\\ce{O2, N2, Cl2}$) tidak aktif IR.
- **Derajat Kebebasan Vibrasi:**
  - Molekul non-linear ($N$ atom): memiliki $3N - 6$ modus vibrasi normal.
  - Molekul linear ($N$ atom): memiliki $3N - 5$ modus vibrasi normal.
- **Jenis Vibrasi:** Vibrasi ulur (*stretching*, simetris dan asimetris) serta vibrasi tekuk (*bending*: *scissoring*, *rocking*, *wagging*, *twisting*).

### 3. Pemetaan Daerah Spektrum Karakteristik FT-IR
1. **Daerah Ulur Ikatan dengan Hidrogen ($4000 - 2500\\text{ cm}^{-1}$):**
   - $\\ce{O-H}$ alkohol/fenol: $3200 - 3600\\text{ cm}^{-1}$ (pita sangat lebar/membulat akibat ikatan hidrogen intermolekul; $\\ce{O-H}$ bebas non-asosiasi muncul tajam pada $\\sim 3650\\text{ cm}^{-1}$).
   - $\\ce{O-H}$ asam karboksilat: $2500 - 3300\\text{ cm}^{-1}$ (pita sangat lebar dengan intensitas kuat yang menutupi puncak $\\ce{C-H}$).
   - $\\ce{N-H}$ amina/amida: $3300 - 3500\\text{ cm}^{-1}$ (amina primer $\\ce{-NH2}$ memunculkan dua puncak kembar/*doublet* dari ulur simetris dan asimetris; amina sekunder $\\ce{R2NH}$ satu puncak; amina tersier tidak memiliki puncak).
   - $\\ce{C(sp)-H}$ alkuna terminal: $3300\\text{ cm}^{-1}$ (tajam kuat).
   - $\\ce{C(sp^2)-H}$ alkena/aromatik: $3010 - 3100\\text{ cm}^{-1}$.
   - $\\ce{C(sp^3)-H}$ alkana jenuh: $2850 - 2960\\text{ cm}^{-1}$ (tepat di bawah $3000\\text{ cm}^{-1}$).
   - $\\ce{C(=O)-H}$ aldehid (Fermi Resonance): dua puncak khas pada $2720\\text{ cm}^{-1}$ dan $2820\\text{ cm}^{-1}$.
2. **Daerah Ikatan Rangkap Tiga ($2500 - 2000\\text{ cm}^{-1}$):**
   - $\\ce{C#N}$ nitril: $2220 - 2260\\text{ cm}^{-1}$ (tajam intens).
   - $\\ce{C#C}$ alkuna: $2100 - 2260\\text{ cm}^{-1}$ (intensitas sedang-lemah; simetris sempurna seperti $\\ce{2-butuna}$ tidak aktif IR).
3. **Daerah Ikatan Rangkap Dua ($2000 - 1500\\text{ cm}^{-1}$):**
   - $\\ce{C=O}$ karbonil: $1650 - 1850\\text{ cm}^{-1}$ (puncak tertajam dan terkuat dalam spektrum IR).
   - $\\ce{C=C}$ alkena: $1620 - 1680\\text{ cm}^{-1}$ (sedang).
   - Aromatik: deretan puncak medium pada $1450, 1500, 1600\\text{ cm}^{-1}$.
4. **Daerah Sidik Jari / Fingerprint ($1500 - 400\\text{ cm}^{-1}$):**
   - Pita serapan kompleks dari vibrasi rangka molekul dan $\\ce{C-O}$ ($1000 - 1300\\text{ cm}^{-1}$).

### 4. Modulasi Frekuensi Karbonil (C=O): Induksi, Resonansi, & Cincin
Frekuensi dasar keton alifatik terbuka adalah $\\tilde{\\nu} \\approx 1715\\text{ cm}^{-1}$. Modulasi terjadi karena:
- **Efek Induksi Penarik Elektron ($-I$):** atom elektronegatif menaikkan karakter ikatan rangkap $\\ce{C=O}$ $\\implies k$ naik $\\implies \\tilde{\\nu}$ naik.
  - Asil klorida ($\\ce{R-CO-Cl}$): $1800\\text{ cm}^{-1}$
  - Asam anhidrida: dua puncak kopling $1820\\text{ cm}^{-1}$ dan $1760\\text{ cm}^{-1}$
  - Ester ($\\ce{R-COO-R'}$): $1735 - 1750\\text{ cm}^{-1}$
- **Efek Resonansi / Konjugasi ($+R$):** delokalisasi elektron $\\pi$ ke gugus terkonjugasi menurunkan orde ikatan $\\ce{C=O}$ (karakter ikatan tunggal bertambah) $\\implies k$ turun $\\implies \\tilde{\\nu}$ turun sebesar $20-40\\text{ cm}^{-1}$.
  - Keton terkonjugasi $\\alpha,\\beta$ atau aril keton: $1685 - 1690\\text{ cm}^{-1}$
  - Amida ($\\ce{R-CO-NR2}$): $1650 - 1680\\text{ cm}^{-1}$ (resonansi kuat pasangan elektron bebas nitrogen $\\ce{-C(=O)-N <-> -C(O^-)=N^+}$).
- **Efek Tegangan Cincin (Ring Strain):** kompresi sudut ikatan cincin meningkatkan karakter orbital $s$ pada ikatan eksosiklik $\\ce{C=O}$ $\\implies k$ naik $\\implies \\tilde{\\nu}$ naik signifikan:
  - Sikloheksanon (cincin 6): $1715\\text{ cm}^{-1}$ (tanpa tegangan)
  - Siklopentanon (cincin 5): $1745\\text{ cm}^{-1}$
  - Siklobutanon (cincin 4): $1780\\text{ cm}^{-1}$`,
      keyFormulas: [
        { name: 'Hukum Hooke Bilangan Gelombang IR', formula: '\\tilde{\\nu} = \\frac{1}{2\\pi c} \\sqrt{\\frac{k}{\\mu}}' },
        { name: 'Massa Tereduksi Diatomik', formula: '\\mu = \\frac{m_1 \\cdot m_2}{m_1 + m_2}' },
      ],
    },
    {
      tag: 'konsep-spektroskopi-nmr-1h-13c-kopling-spin',
      tags: ['spektroskopi-nmr', 'pergeseran-kimia', 'aturan-n-plus-1', 'konstanta-kopling-j', 'c13-nmr', 'dept-nmr'],
      title: 'Konsep Inti 3: Resonansi Magnetik Inti (1H & 13C-NMR), Pergeseran Kimia & Kopling Spin-Spin',
      summary: 'Prinsip resonansi spin nuklir dalam medan magnet, pergeseran kimia delta, anisotropi magnetik ikatan pi, multiplisitas n+1, konstanta kopling J, dan DEPT 13C-NMR.',
      content: `Resonansi Magnetik Inti (NMR) adalah instrumen paling berdaya guna dalam elusidasi struktur kimia organik modern, mengeksplorasi interaksi momen magnetik spin inti atom dengan medan magnet eksternal $B_0$.

### 1. Dasar Fisika & Frekuensi Larmor
Inti dengan jumlah proton atau neutron ganjil memiliki spin nuklir bukan nol ($I \\ne 0$). Inti hidrogen ($^1\\ce{H}$) dan karbon-13 ($^{13}\\ce{C}$) memiliki spin $I = 1/2$.
Dalam medan magnet eksternal $B_0$, momentum sudut spin terpecah menjadi dua orientasi terkuantisasi ($m_I = +1/2$ sejajar medan, keadaan energi rendah $\\alpha$; dan $m_I = -1/2$ berlawanan arah medan, keadaan energi tinggi $\\beta$):
$$\\Delta E = h \\nu_0 = \\gamma \\left(\\frac{h}{2\\pi}\\right) B_0 \\implies \\nu_0 = \\frac{\\gamma \\cdot B_0}{2\\pi}$$
- $\\nu_0$: Frekuensi presesi Larmor (misal $500\\text{ MHz}$ pada medan $11.74\\text{ Tesla}$).
- $\\gamma$: Rasio giromagnetik intrinsik inti atom.

### 2. Perisai Elektronik & Pergeseran Kimia (Chemical Shift, $\\delta$)
Elektron yang mengelilingi inti atom berotasi akibat medan magnet $B_0$, menghasilkan medan magnet lokal terinduksi sekunder $B_{\\text{lokal}} = \\sigma B_0$ yang umumnya melawan $B_0$ (*diamagnetic shielding*):
$$B_{\\text{eff}} = B_0 (1 - \\sigma)$$
- Inti yang terlindungi (*shielded*, kerapatan elektron tinggi) merasakan $B_{\\text{eff}}$ lebih kecil $\\implies$ beresonansi pada frekuensi lebih rendah (*upfield*, $\\delta$ kecil).
- Inti yang terbuka dari perisai (*deshielded*, terikat ke gugus penarik elektron) merasakan $B_{\\text{eff}}$ lebih besar $\\implies$ beresonansi pada frekuensi lebih tinggi (*downfield*, $\\delta$ besar).
- **Skala Pergeseran Kimia ($\\delta$, ppm):**
$$\\delta = \\frac{\\nu_{\\text{sampel}} - \\nu_{\\text{TMS}}}{\\nu_{\\text{spektrometer}}} \\times 10^6\\text{ ppm}$$
Senyawa rujukan tetrametilsilana ($\\ce{TMS}$, $\\ce{Si(CH3)4}$) ditetapkan sebagai titik nol absolut $\\delta = 0.00\\text{ ppm}$.

### 3. Efek Anisotropi Magnetik Ikatan $\\pi$
Distribusi elektron $\\pi$ yang tidak simetris secara spasial menghasilkan medan magnet sekunder terinduksi yang bergantung pada orientasi molekul:
- **Cincin Benzena (Arus Cincin Aromatik):** sirkulasi elektron $\\pi$ menghasilkan medan terinduksi yang searah dengan $B_0$ pada posisi luar ekuatorial tempat proton berada $\\implies$ *deshielding* masif, proton aromatik muncul pada $\\delta = 6.5 - 8.5\\text{ ppm}$.
- **Alkena ($\\ce{R-CH=CH2}$):** proton pada bidang ikatan $\\pi$ terdeshielding $\\implies \\delta = 4.5 - 6.5\\text{ ppm}$.
- **Alkuna Terminal ($\\ce{R-C#C-H}$):** simetri silinder elektron $\\pi$ mengalir mengelilingi sumbu ikatan menghasilkan medan lokal yang berlawanan dengan $B_0$ di sepanjang sumbu ikatan tempat proton berada $\\implies$ proton alkuna terlindungi kuat secara anomali, muncul pada $\\delta = 2.0 - 3.0\\text{ ppm}$.
- **Aldehid ($\\ce{R-CHO}$):** kombinasi anisotropi karbonil dan elektronegativitas oksigen mendeshielding proton aldehid secara ekstrem $\\implies \\delta = 9.0 - 10.0\\text{ ppm}$.
- **Asam Karboksilat ($\\ce{R-COOH}$):** ikatan hidrogen dimerik yang sangat kuat mendeshielding proton hingga $\\delta = 10.5 - 13.0\\text{ ppm}$.

### 4. Kopling Spin-Spin, Aturan Multiplisitas $n+1$, & Konstanta Kopling ($J$)
- **Aturan Multiplisitas:** Inti proton yang bertetangga dengan $n$ proton ekuivalen (terpisah melalui $\\le 3$ ikatan kimia, $^3J$) akan terbelah menjadi multiplet dengan $(n + 1)$ puncak.
  - $n = 0$: Singlet (rasio 1)
  - $n = 1$: Doublet (rasio 1 : 1)
  - $n = 2$: Triplet (rasio 1 : 2 : 1)
  - $n = 3$: Quartet (rasio 1 : 3 : 3 : 1)
  - $n = 4$: Quintet (rasio 1 : 4 : 6 : 4 : 1)
- **Konstanta Kopling ($J$, Hz):** Jarak antar garis puncak dalam multiplet yang konstan dan sama sekali tidak bergantung pada kekuatan medan magnet spektrometer ($B_0$).
- **Hubungan Stereokimia via Persamaan Karplus:**
  Besar konstanta kopling vicinal $^3J_{\\ce{H-C-C-H}}$ bergantung langsung pada sudut dihedral ($\\phi$):
  - Alkena *trans* ($\\phi = 180^\\circ$): $^3J_{\\text{trans}} = 12 - 18\\text{ Hz}$.
  - Alkena *cis* ($\\phi = 0^\\circ$): $^3J_{\\text{cis}} = 6 - 12\\text{ Hz}$.
  - Sikloheksana diaksial ($\\phi = 180^\\circ$): $J_{aa} = 8 - 14\\text{ Hz}$; aksial-ekuatorial ($J_{ae}$) dan diekuatorial ($J_{ee}$): $2 - 5\\text{ Hz}$.

### 5. Spektroskopi $^{13}\\text{C-NMR}$ & Sub-spektra DEPT
- Inti $^{13}\\ce{C}$ memiliki kelimpahan alami hanya $1.1\\%$. Spektra $^{13}\\ce{C-NMR}$ standar direkam dengan teknik *Broadband Proton Decoupling* ($^{13}\\ce{C}\\{\\ce{^1H}\\}$) sehingga semua sinyal muncul sebagai garis *singlet* tanpa kopling $\\ce{C-H}$.
- Rentang pergeseran kimia sangat lebar ($0 - 220\\text{ ppm}$):
  - Alkil $sp^3$ ($\\ce{C-C}$): $0 - 50\\text{ ppm}$
  - Karbon terikat heteroatom ($\\ce{C-O, C-N, C-Cl}$): $50 - 90\\text{ ppm}$
  - Alkuna $sp$ ($\\ce{C#C}$): $70 - 90\\text{ ppm}$
  - Alkena $sp^2$ ($\\ce{C=C}$) & Aromatik: $100 - 160\\text{ ppm}$
  - Karbonil asam/ester/amida: $160 - 185\\text{ ppm}$
  - Karbonil aldehid/keton: $190 - 220\\text{ ppm}$
- **Teknik DEPT (Distortionless Enhancement by Polarization Transfer):**
  - **DEPT-45:** memunculkan semua karbon yang mengikat hidrogen ($\\ce{CH, CH2, CH3}$) dengan fase positif (ke atas).
  - **DEPT-90:** selektif hanya memunculkan karbon metina ($\\ce{CH}$) ke atas.
  - **DEPT-135:** memunculkan $\\ce{CH3}$ dan $\\ce{CH}$ ke arah positif (atas), membalik $\\ce{CH2}$ ke arah negatif (bawah), dan menghilangkan total karbon kuaterner ($C_q$, tanpa hidrogen).`,
      keyFormulas: [
        { name: 'Frekuensi Presesi Larmor', formula: '\\nu_0 = \\frac{\\gamma \\cdot B_0}{2\\pi}' },
        { name: 'Pergeseran Kimia Delta', formula: '\\delta = \\frac{\\nu_{\\text{sampel}} - \\nu_{\\text{TMS}}}{\\nu_{\\text{spektrometer}}} \\times 10^6\\text{ ppm}' },
        { name: 'Multiplisitas Kopling Spin', formula: '\\text{Jumlah Puncak} = n + 1' },
      ],
    },
    {
      tag: 'konsep-spektrometri-massa-fragmentasi-ion',
      tags: ['spektrometri-massa', 'ion-molekuler', 'pola-isotop', 'pemutusan-alfa', 'penataan-ulang-mclafferty', 'kation-tropilium'],
      title: 'Konsep Inti 4: Spektrometri Massa (MS), Pola Isotop Karakteristik & Mekanisme Fragmentasi',
      summary: 'Ionisasi tumbukan elektron EI, ion molekuler radikal kation, aturan nitrogen, pola rasio isotop halogen, dan pola fragmentasi karakteristik (pemutusan alfa & penataan ulang McLafferty).',
      content: `Spektrometri massa (MS) memisahkan ion fase gas berdasarkan rasio massa terhadap muatan ($m/z$). Berbeda dengan metode spektroskopi elektromagnetik, spektrometri massa adalah analisis destruktif stoikiometris.

### 1. Ionisasi Elektron (Electron Ionization / EI) & Ion Molekuler
Pada sumber ionisasi elektron ($EI$, energi kinetik standar $70\\text{ eV} \\approx 6700\\text{ kJ/mol}$), seberkas elektron berkecepatan tinggi menabrak molekul analit netral, mencabut satu elektron dari orbital terluar:
$$\\ce{M + e- -> [M]^{+\\bullet} + 2e-}$$
- $[M]^{+\\bullet}$: Radikal kation ion molekuler. Nilai $m/z$-nya merepresentasikan massa molekul nominal senyawa analit.
- Karena energi $70\\text{ eV}$ jauh melampaui energi ikatan kovalen ($\sim 3-5\\text{ eV}$), ion molekuler mengalami fragmentasi unimolekuler terarah menghasilkan kation stabil dan radikal bebas netral (hanya ion bermuatan positif yang terdeteksi oleh deflektor magnetik/analisator kuadrupol).
- Puncak dengan kelimpahan tertinggi dalam spektrum ditetapkan sebagai Puncak Dasar (*Base Peak*, kelimpahan relatif $100\\%$, tidak selalu identik dengan ion molekuler).

### 2. Aturan Nitrogen (Nitrogen Rule)
- Molekul organik netral yang hanya mengandung $\\ce{C, H, O, S, P, X}$ (halogen) dan memiliki berat molekul nominal **genap** pasti mengandung **nol atau sejumlah genap atom nitrogen**.
- Molekul organik netral dengan berat molekul nominal **ganjil** pasti mengandung **sejumlah ganjil atom nitrogen** (1, 3, 5, dst.).

### 3. Analisis Pola Isotop Karakteristik
Keberadaan elemen tertentu teridentifikasi secara langsung dari rasio intensitas puncak $[M]$ terhadap $[M+1]$ dan $[M+2]$:
1. **Perhitungan Jumlah Karbon ($^{13}\\ce{C}$):**
   Isotop $^{13}\\ce{C}$ memiliki kelimpahan alami $1.08\\% \\approx 1.1\\%$ relatif terhadap $^{12}\\ce{C}$. Jumlah atom karbon ($n_C$) dalam molekul dihitung dari rasio kelimpahan puncak $[M+1]$:
$$n_C \\approx \\frac{I_{[M+1]}}{0.011 \\times I_{[M]}}$$
2. **Klorin ($^{35}\\ce{Cl}$ dan $^{37}\\ce{Cl}$):**
   Kelimpahan alami $^{35}\\ce{Cl} : ^{37}\\ce{Cl} \\approx 75.8\\% : 24.2\\% \\approx 3 : 1$. Senyawa yang mengandung 1 atom klorin menampilkan sepasang puncak $[M]$ dan $[M+2]$ dengan rasio intensitas $3 : 1$.
   Jika mengandung 2 atom klorin, kombinasi binomial $(3a + b)^2$ menghasilkan rasio puncak $[M] : [M+2] : [M+4] = 9 : 6 : 1$.
3. **Bromin ($^{79}\\ce{Br}$ dan $^{81}\\ce{Br}$):**
   Kelimpahan alami $^{79}\\ce{Br} : ^{81}\\ce{Br} \\approx 50.7\\% : 49.3\\% \\approx 1 : 1$. Senyawa yang mengandung 1 atom bromin menampilkan sepasang puncak kembar $[M]$ dan $[M+2]$ berintensitas hampir identik ($1 : 1$, terpisah sejauh $2\\text{ m/z}$).
   Jika mengandung 2 atom bromin: rasio $[M] : [M+2] : [M+4] = 1 : 2 : 1$.
4. **Belerang ($^{34}\\ce{S}$):**
   Isotop $^{34}\\ce{S}$ memiliki kelimpahan $4.4\\%$, menghasilkan puncak $[M+2]$ setinggi $\\sim 4.4\\%$ relatif terhadap $[M]$.

### 4. Pola Fragmentasi Karakteristik
1. **Pemutusan Alfa ($\\alpha$-Cleavage):**
   Pemutusan ikatan kovalen $\\ce{C-C}$ yang berada tepat di posisi $\\alpha$ terhadap heteroatom atau gugus karbonil, distabilkan oleh resonansi pasangan elektron bebas heteroatom:
   - Alkohol dan Eter:
$$\\ce{[R-CH2-O-R']^{+\\bullet} -> [H2C=O^+-R'] + R^\\bullet} \\quad (m/z = 31 \\text{ untuk alkohol primer})$$
   - Senyawa Karbonil: pelepasan gugus alkil menghasilkan kation asilium beresonansi stabil:
$$\\ce{[R-C(=O)-R']^{+\\bullet} -> [R-C#O^+] + R'^{\\bullet}} \\quad (m/z = 43 \\text{ untuk asil } \\ce{CH3-CO^+})$$
2. **Penataan Ulang McLafferty (McLafferty Rearrangement):**
   Fragmentasi khas pada senyawa karbonil (keton, aldehid, ester, asam karboksilat) atau alkena yang memiliki **atom hidrogen pada posisi $\\gamma$ (gamma)**.
   Melibatkan keadaan transisi siklik 6-anggota: atom hidrogen-$\\gamma$ ditransfer ke oksigen karbonil diikuti oleh pemutusan ikatan $\\ce{C_\\alpha - C_\\beta}$, melepaskan molekul netral alkena dan menyisakan radikal kation alkenol stabil:
$$\\ce{[R-CH(\\gamma)-CH2(\\beta)-CH2(\\alpha)-C(=O)R']^{+\\bullet} -> [H2C=C(OH)R']^{+\\bullet} + R-CH=CH2}$$
Untuk keton metil alifatik tak bercabang ($\\ce{CH3-CO-CH2-CH2-CH2-R}$), penataan ulang McLafferty menghasilkan puncak karakteristik tajam pada $m/z = 58$.
3. **Pembentukan Kation Tropilium ($m/z = 91$):**
   Alkilbenzena (seperti toluena, benzil halida, benzil eter) terfragmentasi melepaskan radikal pada posisi benzylic diikuti penataan ulang cincin menjadi kation tropilium (sikloheptatrienil $[\ce{C7H7}]^+$) yang aromatik dengan $6\\pi$ elektron.
   Kation tropilium selanjutnya dapat melepaskan molekul netral asetilen ($\\ce{HC#CH}$, massa 26) menghasilkan kation siklopentadienil pada $m/z = 65$.`,
      keyFormulas: [
        { name: 'Estimasi Jumlah Karbon dari Puncak M+1', formula: 'n_C \\approx \\frac{I_{[M+1]}}{0.011 \\times I_{[M]}}' },
        { name: 'Rasio Isotop Klorin [M] : [M+2]', formula: '3 : 1' },
        { name: 'Rasio Isotop Bromin [M] : [M+2]', formula: '1 : 1' },
      ],
    },
    {
      tag: 'konsep-analisis-kuantitatif-multikomponen-validasi',
      tags: ['kalibrasi-analitik', 'adisi-standar', 'standar-internal', 'validasi-metode', 'limit-of-detection-lod', 'efek-matriks'],
      title: 'Konsep Inti 5: Metode Kalibrasi Analitik, Adisi Standar, Standar Internal & Validasi Metode',
      summary: 'Metode eliminasi efek matriks via adisi standar, normalisasi variasi instrumen via standar internal, serta parameter validasi analitik IUPAC (LOD, LOQ, linearitas, akurasi, presisi).',
      content: `Keberhasilan analisis kuantitatif instrumen (spektrofotometri, kromatografi, elektroforesis) bertumpu pada validitas kurva kalibrasi dan eliminasi gangguan analitik (*interferensi*).

### 1. Masalah Efek Matriks & Kurva Kalibrasi Eksternal
Kurva kalibrasi konvensional mengukur serangkaian larutan baku analit murni dalam pelarut sederhana: respon sinyal instrumen ($S$) diplotkan terhadap konsentrasi ($c$):
$$S = m \\cdot c + b$$
- **Efek Matriks:** matriks sampel (seperti protein dalam plasma darah, garam dalam air laut, atau silikat dalam batuan mineral) dapat mengubah viskositas, tegangan permukaan, efisiensi ionisasi, atau absorbansi optik sehingga sensitivitas instrumen ($m$) pada sampel riil berbeda dari standar murni.

### 2. Metode Adisi Standar (Standard Addition Method)
Metode adisi standar dirancang khusus untuk meniadakan efek matriks kompleks tanpa perlu memisahkan analit:
- Sejumlah volume yang sama dari larutan sampel dimasukkan ke dalam beberapa labu takar bervolume identik ($V_T$).
- Ke dalam labu tersebut ditambahkan larutan standar analit berkonsentrasi tinggi ($c_s$) dengan volume yang meningkat beraturan ($V_s = 0, V_1, V_2, V_3, \\dots$), lalu diencerkan hingga tanda batas.
- Respon instrumen diplotkan terhadap konsentrasi analit standar yang ditambahkan ($c_{\\text{added}}$):
$$S = m \\cdot c_{\\text{added}} + S_0$$
dengan $S_0$ adalah sinyal sampel asli tanpa penambahan standar.
- Ekstrapolasi garis linier menuju perpotongan sumbu-$x$ ($S = 0$) menghasilkan konsentrasi analit dalam labu ukur:
$$c_{\\text{analit, labu}} = \\frac{S_0}{m}$$
Konsentrasi analit dalam sampel asal ($c_{\\text{sampel}}$) diperoleh dengan mengalikan faktor pengenceran:
$$c_{\\text{sampel}} = c_{\\text{analit, labu}} \\times \\left(\\frac{V_T}{V_{\\text{sampel}}}\\right) = \\frac{S_0 \\cdot V_T}{m \\cdot V_{\\text{sampel}}}$$

### 3. Metode Standar Internal (Internal Standard Method)
Metode ini dirancang untuk mengoreksi fluktuasi instrumen yang tidak terkontrol (seperti ketidaktepatan volume injeksi mikro pada GC/HPLC, fluktuasi laju alir, atau drift sensitivitas detektor):
- Standar Internal ($IS$) adalah zat murni dengan sifat fisika-kimia sangat mirip analit, tetapi tidak ada dalam sampel alami dan puncaknya terelusi terpisah dari analit.
- Konsentrasi standar internal yang konstan ($c_{IS}$) ditambahkan ke semua larutan kalibrator dan sampel.
- Parameter yang diplotkan adalah **rasio sinyal analit terhadap sinyal standar internal** ($S_{\\text{analit}} / S_{IS}$) terhadap rasio konsentrasi:
$$\\frac{S_{\\text{analit}}}{S_{IS}} = F \\cdot \\left(\\frac{c_{\\text{analit}}}{c_{IS}}\\right)$$
dengan $F$ adalah faktor respon relatif. Segala fluktuasi volume injeksi atau suhu kolom akan memengaruhi $S_{\\text{analit}}$ dan $S_{IS}$ secara proporsional sehingga rasionya tetap stabil.

### 4. Parameter Validasi Kinerja Metode Analitik (Standar IUPAC/ICH)
1. **Linearitas & Rentang Dinamis:** ditentukan melalui koefisien determinasi regresi kuadrat terkecil ($R^2 \\ge 0.995$).
2. **Batas Deteksi (Limit of Detection / LOD):**
   Konsentrasi analit terendah yang dapat dibedakan dari sinyal derau blanko secara statistik pada tingkat kepercayaan $99\\%$ (rasio sinyal terhadap derau $S/N = 3 : 1$):
$$\\text{LOD} = \\frac{3.3 \\cdot s_{bl}}{m}$$
dengan $s_{bl}$ standar deviasi respon pengukuran blanko berulang ($n \\ge 7$) dan $m$ kemiringan (*slope*) garis kalibrasi.
3. **Batas Kuantifikasi (Limit of Quantitation / LOQ):**
   Konsentrasi analit terendah yang dapat ditentukan secara kuantitatif dengan akurasi dan presisi yang dapat diterima ($S/N = 10 : 1$):
$$\\text{LOQ} = \\frac{10 \\cdot s_{bl}}{m}$$
4. **Presisi (Keterulangan / Reproducibility):** derajat keterdekatan antara hasil uji individual saat prosedur diterapkan berulang kali, dinyatakan sebagai $\\%\\text{RSD} = \\frac{s}{\\bar{x}} \\times 100\\%$.
5. **Akurasi (Ketepatan):** kedekatan nilai rata-rata terukur dengan nilai acuan benar, dievaluasi melalui uji perolehan kembali (*%Recovery*):
$$\\%\\text{Recovery} = \\frac{c_{\\text{terukur}}}{c_{\\text{sebenarnya}}} \\times 100\\%$$`,
      keyFormulas: [
        { name: 'Konsentrasi Adisi Standar', formula: 'c_{\\text{analit, labu}} = \\frac{S_0}{m}' },
        { name: 'Limit of Detection IUPAC', formula: '\\text{LOD} = \\frac{3.3 \\cdot s_{bl}}{m}' },
        { name: 'Limit of Quantitation IUPAC', formula: '\\text{LOQ} = \\frac{10 \\cdot s_{bl}}{m}' },
      ],
    },
  ],
  worked_examples: [
    {
      tag: 'soal-titrasi-redoks-iodometri-tembaga',
      tags: ['soal-osn', 'titrasi-redoks', 'iodometri', 'analisis-kuantitatif', 'kadar-tembaga'],
      title: 'Contoh Soal OSN 1: Analisis Kadar Tembaga dalam Bijih Kalkopirit via Titrasi Iodometri Tidak Langsung',
      summary: 'Penentuan persentase massa tembaga dari bijih kalkopirit menggunakan titrasi tiosulfat dengan penambahan KSCN untuk desorpsi iodin.',
      content: `### Masalah:
Sebuah sampel bijih kalkopirit seberat $0.6354\\text{ g}$ dilarutkan secara sempurna dalam campuran asam nitrat dan asam klorida pekat, lalu diuapkan hingga timbul asap putih belerang trioksida dengan asam sulfat pekat untuk menghilangkan seluruh ion nitrat. Larutan dinetralkan dengan amonia encer hingga terbentuk endapan biru pucat, diasamkan kembali secara hati-hati dengan asam asetat glasial, dan ditambahkan larutan kalium iodida ($\\ce{KI}$) berlebih ($3.0\\text{ g}$).

Iodin ($\\ce{I2}$) yang dibebaskan kemudian dititrasi dengan larutan standar natrium tiosulfat ($\\ce{Na2S2O3}$) berkonsentrasi $0.0500\\text{ M}$. Saat warna coklat pekat memudar menjadi kuning jerami pucat, sebanyak $2.0\\text{ mL}$ suspensi indikator amilum ditambahkan sehingga larutan berubah menjadi biru tua pekat. Menjelang titik akhir (warna biru hampir hilang), ditambahkan $1.5\\text{ g}$ kalium tiosianat ($\\ce{KSCN}$), menyebabkan warna biru tua muncul kembali secara tajam. Titrasi dilanjutkan tetes demi tetes hingga warna biru tepat lenyap menjadi suspensi putih susu yang stabil. Total volume larutan standar $\\ce{Na2S2O3}$ yang dihabiskan adalah $28.50\\text{ mL}$.
(Diketahui: $A_r\\ \\ce{Cu} = 63.546\\text{ g/mol}$, $A_r\\ \\ce{S} = 32.065\\text{ g/mol}$, $A_r\\ \\ce{Fe} = 55.845\\text{ g/mol}$).

**Pertanyaan:**
1. Tuliskan persamaan reaksi redoks yang setara untuk pembentukan iodin saat penambahan $\\ce{KI}$ dan reaksi titrasi iodin dengan tiosulfat!
2. Jelaskan fungsi kimiawi dari penambahan kalium tiosianat ($\\ce{KSCN}$) menjelang titik akhir titrasi!
3. Hitung jumlah milimol $\\ce{Cu^2+}$ yang terkandung dalam sampel bijih tersebut!
4. Tentukan persentase massa tembaga ($\\%\\text{ w/w}$) dalam sampel bijih kalkopirit tersebut!

---

### Solusi Sistematis:

**Langkah 1: [Persamaan Reaksi Redoks Stoikiometris]**
1. Reaksi oksidasi-reduksi antara kation tembaga(II) dan kelebihan ion iodida menghasilkan endapan tembaga(I) iodida putih dan membebaskan iodin molekuler (sebagai triiodida):
$$2\\ce{Cu^2+(aq) + 4I-(aq) -> 2CuI(s) + I2(aq)}$$
Perhatikan bahwa $2\\text{ mol } \\ce{Cu^2+}$ menghasilkan $1\\text{ mol } \\ce{I2}$.
2. Reaksi titrasi reduksi iodin oleh larutan standar tiosulfat:
$$\\ce{I2(aq) + 2S2O3^2-(aq) -> 2I-(aq) + S4O6^2-(aq)}$$
Dari kedua persamaan reaksi berurutan tersebut, rasio stoikiometri mol total antara analit tembaga dan titran tiosulfat adalah tepat $1 : 1$:
$$n_{\\ce{Cu^2+}} = 2 \\times n_{\\ce{I2}} = 2 \\times \\left(\\frac{1}{2} n_{\\ce{S2O3^2-}}\\right) = n_{\\ce{S2O3^2-}}$$

**Langkah 2: [Peran Mekanistis Penambahan KSCN]**
Endapan tembaga(I) iodida ($\\ce{CuI}$) yang terbentuk memiliki luas permukaan spesifik tinggi dan sifat adsorpsi kuat terhadap iodin molekuler ($\\ce{I2}$ teradsorpsi kuat pada permukaan partikel $\\ce{CuI}$).
- Adsorpsi ini menyebabkan sebagian $\\ce{I2}$ terperangkap di dalam matriks endapan sehingga tidak dapat bereaksi bebas dengan titran tiosulfat, memicu galat negatif volume titran dan titik akhir yang lambat (*trailing endpoint*).
- Penambahan $\\ce{KSCN}$ memicu reaksi metatesis permukaan karena $\\ce{CuSCN}$ memiliki hasil kali kelarutan ($K_{sp} \\approx 4.8 \\times 10^{-15}$) yang lebih kecil daripada $\\ce{CuI}$ ($K_{sp} \\approx 1.1 \\times 10^{-12}$):
$$\\ce{CuI(s) + SCN-(aq) -> CuSCN(s) + I-(aq)}$$
Konversi lapisan permukaan kristal menjadi $\\ce{CuSCN}$ mendesak dan melepaskan seluruh molekul $\\ce{I2}$ yang teradsorpsi kembali ke dalam larutan air (dibuktikan dengan intensifikasi seketika warna biru amilum), menghasilkan titik akhir titrasi yang luar biasa tajam dan akurat.

**Langkah 3: [Perhitungan Mol Tiosulfat & Tembaga]**
Volume titran standar natrium tiosulfat: $V = 28.50\\text{ mL} = 0.02850\\text{ L}$.
Konsentrasi standar: $M = 0.0500\\text{ M}$.
Jumlah milimol titran $\\ce{S2O3^2-}$ yang bereaksi:
$$n_{\\ce{S2O3^2-}} = M \\times V = 0.0500\\text{ mmol/mL} \\times 28.50\\text{ mL} = 1.425\\text{ mmol}$$
Berdasarkan stoikiometri $1 : 1$:
$$n_{\\ce{Cu^2+}} = n_{\\ce{S2O3^2-}} = 1.425\\text{ mmol} = 1.425 \\times 10^{-3}\\text{ mol}$$

**Langkah 4: [Perhitungan Massa & Persentase Tembaga dalam Bijih]**
Massa analit tembaga murni dalam sampel:
$$m_{\\ce{Cu}} = n_{\\ce{Cu^2+}} \\times A_r(\\ce{Cu}) = 1.425 \\times 10^{-3}\\text{ mol} \\times 63.546\\text{ g/mol} = 0.090553\\text{ g} = 90.553\\text{ mg}$$
Massa total sampel bijih kering: $m_{\\text{sampel}} = 0.6354\\text{ g}$.
Kadar tembaga ($\\%\\text{ w/w}$):
$$\\%\\ \\ce{Cu} = \\frac{m_{\\ce{Cu}}}{m_{\\text{sampel}}} \\times 100\\% = \\frac{0.090553\\text{ g}}{0.6354\\text{ g}} \\times 100\\% = 14.251\\% \\approx 14.25\\%$$

---

**Kesimpulan Evaluator Juri:**
Rasio ekivalensi titrasi iodometri tembaga terbukti $1\\text{ mol } \\ce{Cu^2+} \\equiv 1\\text{ mol } \\ce{S2O3^2-}$. Peran ion tiosianat ($\\ce{SCN-}$) berhasil merasionalisasi desorpsi kimiawi $\\ce{I2}$ dari endapan $\\ce{CuI}$, menghasilkan kadar analit tembaga sebesar **$14.25\\%$ w/w** secara presisi analitik tinggi.`,
    },
    {
      tag: 'soal-hukum-lambert-beer-campuran-dua-komponen',
      tags: ['soal-osn', 'hukum-lambert-beer', 'analisis-multikomponen', 'absorbansi', 'matriks-spektrofotometri'],
      title: 'Contoh Soal OSN 2: Analisis Spektrofotometri UV-Vis Simultan Campuran Dua Pewarna Tanpa Pemisahan',
      summary: 'Menentukan konsentrasi senyawa X dan Y dalam larutan campuran homogen melalui penyusunan matriks sistem persamaan linier absorbansi aditif.',
      content: `### Masalah:
Dua senyawa pewarna sintetis organik, Senyawa $X$ dan Senyawa $Y$, berada bersama-sama dalam suatu larutan sampel homogen air. Spektrofotometri UV-Vis menggunakan kuvet berpanjang jalur cahaya $b = 1.00\\text{ cm}$ menunjukkan bahwa kedua zat mengabsorpsi secara simultan pada panjang gelombang $\\lambda_1 = 440\\text{ nm}$ dan $\\lambda_2 = 540\\text{ nm}$.

Dari pengukuran larutan standar murni masing-masing zat pada instrumen yang sama, diperoleh data koefisien absorptivitas molar ($\\varepsilon$, dalam satuan $\\text{L}\\cdot\\text{mol}^{-1}\\cdot\\text{cm}^{-1}$):
- Pada $\\lambda_1 = 440\\text{ nm}$: $\\varepsilon_{X,1} = 1500\\text{ M}^{-1}\\text{cm}^{-1}$ dan $\\varepsilon_{Y,1} = 300\\text{ M}^{-1}\\text{cm}^{-1}$
- Pada $\\lambda_2 = 540\\text{ nm}$: $\\varepsilon_{X,2} = 200\\text{ M}^{-1}\\text{cm}^{-1}$ dan $\\varepsilon_{Y,2} = 1800\\text{ M}^{-1}\\text{cm}^{-1}$

Sampel larutan campuran yang tidak diketahui kadarnya menghasilkan nilai absorbansi terukur terhadap blanko air:
- $A_{440} = 0.510$
- $A_{540} = 0.580$

**Pertanyaan:**
1. Tuliskan sistem persamaan linier dua variabel untuk absorbansi total pada kedua panjang gelombang berdasarkan Hukum Lambert-Beer!
2. Hitung nilai determinan matriks koefisien absorptivitas molar sistem tersebut!
3. Tentukan konsentrasi molar Senyawa $X$ ($c_X$) dan Senyawa $Y$ ($c_Y$) dalam larutan campuran tersebut dalam satuan $\\text{mol/L}$ dan $\\text{mg/L}$ (diketahui $M_r(X) = 300.0\\text{ g/mol}$ dan $M_r(Y) = 450.0\\text{ g/mol}$)!

---

### Solusi Sistematis:

**Langkah 1: [Formulasi Sistem Persamaan Aditifitas Absorbansi]**
Berdasarkan prinsip aditifitas absorbansi Hukum Lambert-Beer dengan kuvet $b = 1.00\\text{ cm}$:
$$A_{\\lambda} = A_X + A_Y = \\varepsilon_{X,\\lambda} \\cdot b \\cdot c_X + \\varepsilon_{Y,\\lambda} \\cdot b \\cdot c_Y$$
Substitusi nilai eksperimen pada $\\lambda_1 = 440\\text{ nm}$ dan $\\lambda_2 = 540\\text{ nm}$:
$$\\text{Persamaan (1): } 1500 \\cdot c_X + 300 \\cdot c_Y = 0.510$$
$$\\text{Persamaan (2): } 200 \\cdot c_X + 1800 \\cdot c_Y = 0.580$$

**Langkah 2: [Penyusunan & Perhitungan Determinan Matriks]**
Sistem persamaan dalam notasi matriks:
$$\\begin{pmatrix} 1500 & 300 \\\\ 200 & 1800 \\end{pmatrix} \\begin{pmatrix} c_X \\\\ c_Y \\end{pmatrix} = \\begin{pmatrix} 0.510 \\\\ 0.580 \\end{pmatrix}$$
Determinan matriks utama ($D$):
$$D = (1500 \\times 1800) - (300 \\times 200) = 2{,}700{,}000 - 60{,}000 = 2{,}640{,}000\\text{ M}^{-2}\\text{cm}^{-2}$$
Karena $D \\ne 0$, sistem persamaan memiliki solusi tunggal yang pasti.

**Langkah 3: [Penyelesaian Konsentrasi Molar via Aturan Cramer]**
1. Determinan untuk $c_X$ ($D_X$):
$$D_X = \\det \\begin{pmatrix} 0.510 & 300 \\\\ 0.580 & 1800 \\end{pmatrix} = (0.510 \\times 1800) - (300 \\times 0.580) = 918.0 - 174.0 = 744.0$$
Maka konsentrasi Senyawa $X$:
$$c_X = \\frac{D_X}{D} = \\frac{744.0}{2{,}640{,}000} = 2.8182 \\times 10^{-4}\\text{ M} = 0.2818\\text{ mM}$$

2. Determinan untuk $c_Y$ ($D_Y$):
$$D_Y = \\det \\begin{pmatrix} 1500 & 0.510 \\\\ 200 & 0.580 \\end{pmatrix} = (1500 \\times 0.580) - (0.510 \\times 200) = 870.0 - 102.0 = 768.0$$
Maka konsentrasi Senyawa $Y$:
$$c_Y = \\frac{D_Y}{D} = \\frac{768.0}{2{,}640{,}000} = 2.9091 \\times 10^{-4}\\text{ M} = 0.2909\\text{ mM}$$

**Langkah 4: [Konversi Konsentrasi ke Satuan mg/L & Verifikasi]**
- Konsentrasi massa Senyawa $X$:
$$\\rho_X = c_X \\times M_r(X) \\times 1000\\text{ mg/g} = 2.8182 \\times 10^{-4}\\text{ mol/L} \\times 300.0\\text{ g/mol} \\times 1000 = 84.55\\text{ mg/L}$$
- Konsentrasi massa Senyawa $Y$:
$$\\rho_Y = c_Y \\times M_r(Y) \\times 1000\\text{ mg/g} = 2.9091 \\times 10^{-4}\\text{ mol/L} \\times 450.0\\text{ g/mol} \\times 1000 = 130.91\\text{ mg/L}$$

Verifikasi nilai absorbansi:
- $A_{440} = (1500 \\times 2.8182 \\times 10^{-4}) + (300 \\times 2.9091 \\times 10^{-4}) = 0.4227 + 0.0873 = 0.5100$ (tepat).
- $A_{540} = (200 \\times 2.8182 \\times 10^{-4}) + (1800 \\times 2.9091 \\times 10^{-4}) = 0.05636 + 0.52364 = 0.5800$ (tepat).

---

**Kesimpulan Evaluator Juri:**
Penyelesaian matriks spektrofotometri dua komponen membuktikan konsentrasi analit dalam campuran homogen:
- Senyawa $X$: **$2.82 \\times 10^{-4}\\text{ M}$** ($84.55\\text{ mg/L}$)
- Senyawa $Y$: **$2.91 \\times 10^{-4}\\text{ M}$** ($130.91\\text{ mg/L}$)
Solusi matriks sepenuhnya memenuhi batasan optis Hukum Lambert-Beer tanpa deviasi.`,
    },
    {
      tag: 'soal-kromatografi-efisiensi-kolom-van-deemter',
      tags: ['soal-osn', 'kromatografi', 'resolusi-kromatografi', 'pelat-teoritis', 'persamaan-van-deemter'],
      title: 'Contoh Soal OSN 3: Evaluasi Kromatografi HPLC, Parameter Pelat Teoritis & Resolusi Pemisahan Obat',
      summary: 'Perhitungan kuantitatif faktor retensi k prime, jumlah pelat teoritis N, tinggi pelat H, dan evaluasi resolusi baseline pemisahan analit parasetamol dan kafein.',
      content: `### Masalah:
Pemisahan campuran dua senyawa analit obat, Parasetamol (Senyawa 1) dan Kafein (Senyawa 2), dilakukan menggunakan instrumen Kromatografi Cair Kinerja Tinggi (HPLC) fase terbalik dengan kolom $\\ce{C18}$ sepanjang $L = 15.0\\text{ cm}$ pada laju alir gerak $1.00\\text{ mL/min}$.
Waktu mati kolom yang diukur menggunakan analit tak tertahan natrium nitrat adalah $t_M = 1.20\\text{ menit}$.

Data kromatogram analitik yang terekam adalah sebagai berikut:
- **Puncak 1 (Parasetamol):** Waktu retensi $t_{R1} = 4.80\\text{ menit}$; lebar dasar puncak $W_1 = 0.32\\text{ menit}$; lebar pada setengah tinggi maksimum $W_{1/2,1} = 0.188\\text{ menit}$.
- **Puncak 2 (Kafein):** Waktu retensi $t_{R2} = 6.40\\text{ menit}$; lebar dasar puncak $W_2 = 0.44\\text{ menit}$; lebar pada setengah tinggi maksimum $W_{1/2,2} = 0.259\\text{ menit}$.

**Pertanyaan:**
1. Hitung faktor kapasitas/retensi ($k'_1$ dan $k'_2$) serta faktor selektivitas pemisahan ($\\alpha$)!
2. Hitung jumlah pelat teoritis ($N$) dan tinggi setara pelat teoritis ($H$, dalam satuan $\\mu\\text{m}$) untuk kedua puncak analit!
3. Hitung nilai resolusi pemisahan ($R_s$) antara Parasetamol dan Kafein menggunakan data lebar dasar puncak $W$ dan verifikasi menggunakan data $W_{1/2}$! Apakah pemisahan telah mencapai batas resolusi garis dasar (*baseline resolution*)?
4. Berdasarkan persamaan van Deemter $H = A + B/u + C \\cdot u$, jelaskan strategi penyesuaian laju alir jika diinginkan efisiensi pemisahan maksimum!

---

### Solusi Sistematis:

**Langkah 1: [Perhitungan Faktor Retensi & Faktor Selektivitas]**
1. Faktor retensi ($k'$):
$$k'_1 = \\frac{t_{R1} - t_M}{t_M} = \\frac{4.80 - 1.20}{1.20} = \\frac{3.60}{1.20} = 3.00$$
$$k'_2 = \\frac{t_{R2} - t_M}{t_M} = \\frac{6.40 - 1.20}{1.20} = \\frac{5.20}{1.20} = 4.333$$
Kedua nilai berada dalam rentang ideal analitik $1 < k' < 10$.
2. Faktor selektivitas ($\\alpha$):
$$\\alpha = \\frac{k'_2}{k'_1} = \\frac{4.333}{3.00} = 1.444$$
Karena $\\alpha > 1.0$, fase diam dan fase gerak menunjukkan selektivitas termodinamik yang sangat baik.

**Langkah 2: [Perhitungan Efisiensi Kolom (Jumlah & Tinggi Pelat)]**
Panjang kolom: $L = 15.0\\text{ cm} = 150{,}000\\ \\mu\\text{m}$.
1. Untuk Puncak 1 (Parasetamol):
$$N_1 = 16 \\left(\\frac{t_{R1}}{W_1}\\right)^2 = 16 \\left(\\frac{4.80}{0.32}\\right)^2 = 16 \\times (15.0)^2 = 16 \\times 225 = 3600\\text{ pelat}$$
Verifikasi dengan FWHM: $N_1 = 5.545 \\left(\\frac{4.80}{0.188}\\right)^2 = 5.545 \\times (25.53)^2 = 5.545 \\times 651.9 = 3615\\text{ pelat}$ (konsisten).
Tinggi pelat $H_1$:
$$H_1 = \\frac{L}{N_1} = \\frac{150{,}000\\ \\mu\\text{m}}{3600} = 41.67\\ \\mu\\text{m}$$

2. Untuk Puncak 2 (Kafein):
$$N_2 = 16 \\left(\\frac{t_{R2}}{W_2}\\right)^2 = 16 \\left(\\frac{6.40}{0.44}\\right)^2 = 16 \\times (14.545)^2 = 16 \\times 211.57 = 3385\\text{ pelat}$$
Tinggi pelat $H_2$:
$$H_2 = \\frac{L}{N_2} = \\frac{150{,}000\\ \\mu\\text{m}}{3385} = 44.31\\ \\mu\\text{m}$$

**Langkah 3: [Evaluasi Resolusi Pemisahan ($R_s$)]**
1. Menggunakan lebar dasar puncak ($W_1$ dan $W_2$):
$$R_s = \\frac{2(t_{R2} - t_{R1})}{W_1 + W_2} = \\frac{2(6.40 - 4.80)}{0.32 + 0.44} = \\frac{2(1.60)}{0.76} = \\frac{3.20}{0.76} = 4.21$$
2. Verifikasi menggunakan lebar setengah tinggi ($W_{1/2}$):
$$R_s = \\frac{1.18(t_{R2} - t_{R1})}{W_{1/2,1} + W_{1/2,2}} = \\frac{1.18(1.60)}{0.188 + 0.259} = \\frac{1.888}{0.447} = 4.22$$
3. Evaluasi Kelayakan:
Syarat resolusi garis dasar (*baseline resolution*) sempurna adalah $R_s \\ge 1.5$. Nilai terhitung $R_s = 4.21$ melampaui batas ambang dengan kemurnian pemisahan puncak $> 99.99\\%$.

**Langkah 4: [Optimasi Laju Alir via Persamaan van Deemter]**
Kurva van Deemter menghubungkan tinggi pelat $H$ dengan laju alir linear $u$:
- Pada laju alir sangat rendah ($u < u_{\\text{opt}}$), suku difusi molekuler longitudinal ($B/u$) mendominasi, menyebabkan $H$ meningkat drastis (efisiensi turun).
- Pada laju alir sangat tinggi ($u > u_{\\text{opt}}$), suku transfer massa fase diam/gerak ($C \\cdot u$) mendominasi, menyebabkan $H$ naik linier terhadap $u$.
- Laju alir optimum diperoleh pada $u_{\\text{opt}} = \\sqrt{B/C}$ yang meminimalkan $H$ menjadi $H_{\\text{min}} = A + 2\\sqrt{BC}$. Karena $R_s = 4.21$ sudah sangat berlebih, laju alir dapat ditingkatkan secara moderat untuk mempersingkat total waktu analisis tanpa mengorbankan integritas pemisahan garis dasar ($R_s > 2.0$).

---

**Kesimpulan Evaluator Juri:**
Pemisahan HPLC Parasetamol dan Kafein berlangsung sangat efisien dengan $k'_1 = 3.00$, $k'_2 = 4.33$, dan efisiensi kolom rata-rata $N \\approx 3500\\text{ pelat}$ ($H \\approx 43\\ \\mu\\text{m}$). Nilai resolusi **$R_s = 4.21$** menjamin pemisahan garis dasar sempurna tanpa interferensi tumpang-tindih analit.`,
    },
    {
      tag: 'soal-spektroskopi-ir-osilator-harmonik-isotop',
      tags: ['soal-osn', 'spektroskopi-ir', 'osilator-harmonik', 'hukum-hooke', 'efek-isotop', 'karbonil'],
      title: 'Contoh Soal OSN 4: Perhitungan Frekuensi Vibrasi Ikatan C=O, Efek Isotop Karbon & Tren Rentang Karbonil',
      summary: 'Menghitung tetapan gaya k dan pergeseran bilangan gelombang vibrasi ulur akibat substitusi isotop 13C, serta merasionalisasi urutan frekuensi gugus asil klorida, ester, keton, dan amida.',
      content: `### Masalah:
Vibrasi ulur fundamental ikatan karbonil $^{12}\\ce{C}=^{16}\\ce{O}$ pada molekul aseton menghasilkan serapan inframerah tajam pada bilangan gelombang $\\tilde{\\nu}_1 = 1715.0\\text{ cm}^{-1}$.
(Diketahui: massa atom relatif $^{12}\\ce{C} = 12.0000\\text{ g/mol}$, $^{13}\\ce{C} = 13.0034\\text{ g/mol}$, $^{16}\\ce{O} = 15.9949\\text{ g/mol}$, kecepatan cahaya $c = 2.9979 \\times 10^{10}\\text{ cm/s}$, dan bilangan Avogadro $N_A = 6.0221 \\times 10^{23}\\text{ mol}^{-1}$).

**Pertanyaan:**
1. Hitung massa tereduksi ($\\mu$) dari ikatan $^{12}\\ce{C}-^{16}\\ce{O}$ dalam satuan $\\text{kg/molekul}$!
2. Mengasumsikan ikatan berperilaku sebagai osilator harmonik kuantum, hitung nilai konstanta gaya ikatan ($k$) dari ikatan $^{12}\\ce{C}=^{16}\\ce{O}$ dalam satuan $\\text{N/m}$ (atau $\\text{dyn/cm}$)!
3. Jika atom karbon pada gugus karbonil disubstitusi dengan isotop $^{13}\\ce{C}$ (membentuk $^{13}\\ce{C}=^{16}\\ce{O}$), hitung massa tereduksi baru ($\\mu'$) dan tentukan prediksi bilangan gelombang serapan inframerah barunya ($\\tilde{\\nu}_2$) dengan asumsi konstanta gaya ikatan tidak berubah!
4. Urutkan senyawa-senyawa berikut berdasarkan kenaikan bilangan gelombang vibrasi ulur gugus $\\ce{C=O}$-nya dan jelaskan penyebab fisis/kimiawinya:
   - Asetil klorida ($\\ce{CH3-CO-Cl}$)
   - Etil asetat ($\\ce{CH3-CO-OCH2CH3}$)
   - Aseton ($\\ce{CH3-CO-CH3}$)
   - Asetamida ($\\ce{CH3-CO-NH2}$)

---

### Solusi Sistematis:

**Langkah 1: [Perhitungan Massa Tereduksi $^{12}\\ce{C}-^{16}\\ce{O}$]**
Massa tereduksi molar:
$$\\mu_{\\text{molar}} = \\frac{M_{\\ce{C}} \\cdot M_{\\ce{O}}}{M_{\\ce{C}} + M_{\\ce{O}}} = \\frac{12.0000 \\times 15.9949}{12.0000 + 15.9949} = \\frac{191.9388}{27.9949} = 6.8562\\text{ g/mol}$$
Massa tereduksi per molekul dalam satuan $\\text{kg}$:
$$\\mu = \\frac{6.8562 \\times 10^{-3}\\text{ kg/mol}}{6.0221 \\times 10^{23}\\text{ mol}^{-1}} = 1.1385 \\times 10^{-26}\\text{ kg/molekul}$$

**Langkah 2: [Perhitungan Konstanta Gaya Ikatan ($k$)]**
Rumus bilangan gelombang osilator harmonik:
$$\\tilde{\\nu} = \\frac{1}{2\\pi c} \\sqrt{\\frac{k}{\\mu}} \\implies k = 4\\pi^2 c^2 \\tilde{\\nu}^2 \\mu$$
Dengan memasukkan nilai dalam satuan SI ($c = 2.9979 \\times 10^8\\text{ m/s}$, $\\tilde{\\nu} = 1715.0\\text{ cm}^{-1} = 171{,}500\\text{ m}^{-1}$):
$$k = 4 \\pi^2 \\times (2.9979 \\times 10^8)^2 \\times (171{,}500)^2 \\times (1.1385 \\times 10^{-26})$$
$$4 \\pi^2 = 39.4784$$
$$c^2 = 8.9874 \\times 10^{16}\\text{ m}^2/\\text{s}^2$$
$$\\tilde{\\nu}^2 = 2.9412 \\times 10^{10}\\text{ m}^{-2}$$
$$k = 39.4784 \\times (8.9874 \\times 10^{16}) \\times (2.9412 \\times 10^{10}) \\times (1.1385 \\times 10^{-26}) = 1188.7\\text{ N/m}$$
Dalam satuan CGS: $k = 1.189 \\times 10^6\\text{ dyn/cm}$ (sangat khas untuk ikatan rangkap dua karbonil $\\ce{C=O}$).

**Langkah 3: [Efek Substitusi Isotop $^{13}\\ce{C}$]**
Massa tereduksi molar baru dengan $^{13}\\ce{C}$:
$$\\mu'_{\\text{molar}} = \\frac{13.0034 \\times 15.9949}{13.0034 + 15.9949} = \\frac{207.9881}{28.9983} = 7.1724\\text{ g/mol}$$
$$\\mu' = \\frac{7.1724 \\times 10^{-3}}{6.0221 \\times 10^{23}} = 1.1910 \\times 10^{-26}\\text{ kg}$$
Karena konstanta gaya pegas ikatan $k$ ditentukan oleh muatan inti dan susunan elektron valensi, nilai $k$ tidak terpengaruh oleh substitusi isotop ($k' = k$).
Rasio frekuensi vibrasi:
$$\\frac{\\tilde{\\nu}_2}{\\tilde{\\nu}_1} = \\sqrt{\\frac{\\mu}{\\mu'}} = \\sqrt{\\frac{6.8562}{7.1724}} = \\sqrt{0.95591} = 0.97771$$
Bilangan gelombang baru:
$$\\tilde{\\nu}_2 = 1715.0\\text{ cm}^{-1} \\times 0.97771 = 1676.8\\text{ cm}^{-1}$$
Pergeseran isotop menghasilkan pergeseran hipsokromik frekuensi ke arah lebih rendah sebesar $\\Delta \\tilde{\\nu} = 1715.0 - 1676.8 = 38.2\\text{ cm}^{-1}$ (*red shift* pada bilangan gelombang akibat bertambahnya massa inersia vibrator).

**Langkah 4: [Urutan & Rasionalisasi Frekuensi Karbonil Turunan Asil]**
Urutan kenaikan bilangan gelombang serapan $\\ce{C=O}$:
$$\\ce{CH3-CO-NH2} < \\ce{CH3-CO-CH3} < \\ce{CH3-CO-OCH2CH3} < \\ce{CH3-CO-Cl}$$
Rentang serapan khas:
- **Asetamida ($\\sim 1680\\text{ cm}^{-1}$):** Pasangan elektron bebas nitrogen mendonorkan densitas elektron secara masif melalui resonansi ($+R$): $\\ce{-C(=O)-NH2 <-> -C(O^-)=N^+H2}$. Hal ini menurunkan orde ikatan $\\ce{C=O}$ dari 2 menjadi $\\sim 1.5$, memperlemah pegas ikatan ($k$ turun), sehingga serapan bergeser ke frekuensi paling rendah.
- **Aseton ($\\sim 1715\\text{ cm}^{-1}$):** Nilai dasar keton alifatik tanpa heteroatom penyumbang resonansi langsung pada karbonil.
- **Etil asetat ($\\sim 1740\\text{ cm}^{-1}$):** Atom oksigen eter memiliki keelektronegatifan tinggi ($3.44$) yang memberikan efek induksi penarik elektron ($-I$) kuat dari karbon karbonil, melebihi kemampuan sumbangan resonansi $+R$-nya. Karakter ikatan rangkap $\\ce{C=O}$ meningkat, menaikkan $k$ dan frekuensi vibrasi.
- **Asetil klorida ($\\sim 1800\\text{ cm}^{-1}$):** Klorin memiliki efek induksi penarik elektron ($-I$) sangat kuat, sedangkan tumpang tindih orbital $2p-3p$ untuk resonansi $+R$ sangat buruk. Kepadatan elektron ditarik kuat ke arah ikatan $\\ce{C=O}$, memaksimalkan konstanta gaya $k$ dan memunculkan serapan pada frekuensi tertinggi.

---

**Kesimpulan Evaluator Juri:**
Konstanta gaya ikatan $\\ce{C=O}$ terhitung $k = 1189\\text{ N/m}$. Substitusi isotop $^{13}\\ce{C}$ menurunkan bilangan gelombang sebesar $38.2\\text{ cm}^{-1}$ menjadi **$1676.8\\text{ cm}^{-1}$**. Urutan frekuensi asetamida ($1680$) $<$ aseton ($1715$) $<$ etil asetat ($1740$) $<$ asetil klorida ($1800\\text{ cm}^{-1}$) sepenuhnya mencerminkan kompetisi efek induksi vs resonansi elektronik.`,
    },
    {
      tag: 'soal-elusidasi-struktur-spektroskopi-gabungan',
      tags: ['soal-osn', 'elusidasi-struktur', 'spektroskopi-nmr', 'spektrometri-massa', 'spektroskopi-ir', 'c13-nmr'],
      title: 'Contoh Soal OSN 5: Elusidasi Struktur Komprehensif Senyawa C9H10O2 Berbasis Spektra Gabungan UV, IR, MS, & NMR',
      summary: 'Identifikasi struktur definitif ester aromatik metil 2-fenilasetat melalui integrasi derajat ketidakjenuhan, spektrometri massa, FT-IR, serta 1H dan 13C-NMR DEPT.',
      content: `### Masalah:
Suatu senyawa organik tak dikenal $Z$ yang beraroma harum manis diisolasi dan dianalisis menggunakan rangkaian metode spektroskopi modern. Analisis unsur dan spektrometri massa resolusi tinggi (HR-MS) menetapkan rumus molekul senyawa adalah $\\ce{C9H10O2}$.

Berikut kumpulan data spektroskopi eksperimental dari senyawa $Z$:
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

**Pertanyaan:**
1. Hitung derajat ketidakjenuhan (*Degree of Unsaturation* / DoU) dari senyawa $Z$!
2. Interpretasikan data spektroskopi IR untuk mengidentifikasi seluruh gugus fungsi utama!
3. Analisis pola fragmentasi pada spektrum massa ($m/z = 150, 91, 65, 59$) dan gambarkan struktur fragmen kation yang bersesuaian!
4. Berdasarkan data $^1\\ce{H-NMR}$ dan $^{13}\\ce{C-NMR}$, terdapat dua kandidat isomer konstitusional utama: **Metil 2-fenilasetat** ($\\ce{PhCH2COOCH3}$) dan **Benzil asetat** ($\\ce{CH3COOCH2Ph}$). Lakukan analisis diskriminatif pergeseran kimia secara mendalam untuk menentukan struktur molekul senyawa $Z$ yang definitif!
5. Tuliskan penugasan lengkap (*signal assignment*) seluruh atom hidrogen dan karbon terhadap struktur final tersebut!

---

### Solusi Sistematis:

**Langkah 1: [Derajat Ketidakjenuhan / DoU]**
Rumus molekul: $\\ce{C9H10O2}$.
$$\\text{DoU} = C + 1 - \\frac{H}{2} + \\frac{N}{2} = 9 + 1 - \\frac{10}{2} + 0 = 10 - 5 = 5$$
Nilai $\\text{DoU} = 5$ menunjukkan adanya 1 cincin benzena aromatik (mengonsumsi $\\text{DoU} = 4$, yaitu 1 cincin + 3 ikatan rangkap dua terkonjugasi) ditambah 1 ikatan rangkap dua lain (seperti $\\ce{C=O}$ karbonil).

**Langkah 2: [Analisis Spektrum FT-IR]**
- Pita tajam kuat pada $1738\\text{ cm}^{-1}$: karakteristik vibrasi ulur gugus **ester alifatik** ($\\ce{-C(=O)-O-}$).
- Pita kuat pada $1200\\text{ cm}^{-1}$ dan $1155\\text{ cm}^{-1}$: vibrasi ulur $\\ce{C-O}$ ester.
- Tidak adanya pita lebar di atas $3200\\text{ cm}^{-1}$: mengeliminasi gugus alkohol dan asam karboksilat.
- Pita $3030\\text{ cm}^{-1}$: ulur $\\ce{C(sp^2)-H}$ aromatik; pita $2955$ dan $2845\\text{ cm}^{-1}$: ulur $\\ce{C(sp^3)-H}$ alifatik.
- Dua pita tekuk kuat pada $745\\text{ cm}^{-1}$ dan $695\\text{ cm}^{-1}$: karakteristik diagnostik mutlak untuk cincin benzena **monosubstitusi** ($\\ce{C6H5-}$).

**Langkah 3: [Analisis Pola Fragmentasi Spektrometri Massa]**
1. $m/z = 150$: Puncak ion molekuler radikal kation $[M]^{+\\bullet}$ (sesuai $M_r = 9(12) + 10(1) + 2(16) = 150$).
   Rasio $[M+1]/[M] = 2.8 / 28 = 0.10 = 10\\% \\implies n_C \\approx 10 / 1.1 = 9$ atom karbon.
2. $m/z = 91$ ($100\\%$, *base peak*): Puncak karakteristik ion tropilium (kation sikloheptatrienil $[\ce{C7H7}]^+$).
   Terbentuk melalui pemutusan ikatan benzylic:
$$\\ce{[C6H5-CH2-COOCH3]^{+\\bullet} -> [C6H5-CH2]+ + ^\\bullet COOCH3} \\implies [\\ce{C7H7}]^+ \\quad (m/z = 91)$$
3. $m/z = 65$ ($18\\%$): Kehilangan molekul netral asetilen ($\\ce{HC#CH}$, massa 26) dari kation tropilium:
$$[\\ce{C7H7}]^+ (m/z = 91) \\xrightarrow{-\\ce{C2H2}} [\\ce{C5H5}]^+ (m/z = 65)$$
4. $m/z = 59$ ($14\\%$): Kation karboksimetoksi (fragmen ester metil):
$$[\\ce{O=C-OCH3}]^+ \\quad (m/z = 12 + 16 + 16 + 15 = 59)$$

**Langkah 4: [Diskriminasi Isomer Metil 2-Fenilasetat vs Benzil Asetat]**
Dua kandidat isomer konstitusional ester monosubstitusi $\\ce{C9H10O2}$:
- Isomer A: **Metil 2-fenilasetat** ($\\ce{Ph-CH2-C(=O)-OCH3}$)
- Isomer B: **Benzil asetat** ($\\ce{Ph-CH2-O-C(=O)-CH3}$)

Mari uji pergeseran kimia proton alifatik pada $^1\\ce{H-NMR}$:
1. Pada Isomer A (Metil 2-fenilasetat):
   - Proton $\\ce{-OCH3}$ terikat langsung ke atom oksigen ester: muncul pada rentang khas $\\delta \\approx 3.65 - 3.70\\text{ ppm}$.
   - Proton metilen benzylic $\\ce{Ph-CH2-C(=O)-}$ diapit oleh cincin fenil dan gugus karbonil: pergeseran kimia terhitung $\\delta \\approx 3.60 - 3.65\\text{ ppm}$.
   - Kedua puncak alifatik muncul berdampingan di sekitar $\\delta \\sim 3.6\\text{ ppm}$!
2. Pada Isomer B (Benzil asetat):
   - Proton metil karbonil $\\ce{CH3-C(=O)-O-}$ adalah metil keton/asetat sederhana: harus muncul pada $\\delta \\approx 2.05 - 2.10\\text{ ppm}$ (singlet tajam).
   - Proton metilen benzylic $\\ce{Ph-CH2-O-C(=O)-}$ terikat langsung pada oksigen ester yang sangat elektronegatif: mengalami *deshielding* masif hingga $\\delta \\approx 5.10\\text{ ppm}$!
3. Data eksperimen: **Hanya ada puncak pada $\\delta\\ 3.68\\text{ ppm}$ ($3\\ce{H}$) dan $\\delta\\ 3.63\\text{ ppm}$ ($2\\ce{H}$)**, serta sama sekali **tidak ada sinyal pada $\\delta\\ 2.05\\text{ ppm}$ maupun $\\delta\\ 5.10\\text{ ppm}$**.
Fakta spektroskopi ini secara mutlak menyingkirkan Benzil asetat dan membuktikan bahwa senyawa $Z$ adalah **Metil 2-fenilasetat**.

**Langkah 5: [Penugasan Sinyal Lengkap ($^1\\ce{H}$ & $^{13}\\ce{C}$ DEPT-NMR)]**
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

**Kesimpulan Evaluator Juri:**
Integrasi data spektra MS ($[M]^{+\\bullet} = 150$, ion tropilium $m/z = 91$, karboksimetoksi $m/z = 59$), FT-IR (ester $1738\\text{ cm}^{-1}$, cincin monosubstitusi $745, 695\\text{ cm}^{-1}$), serta kesesuaian eksak pergeseran kimia $^1\\ce{H}$ dan $^{13}\\ce{C-NMR}$ DEPT membuktikan secara konklusif bahwa senyawa $Z$ adalah **Metil 2-fenilasetat** (Metil fenilasetat).`,
    },
  ],
};
