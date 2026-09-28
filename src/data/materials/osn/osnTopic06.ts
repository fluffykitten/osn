/**
 * osnTopic06.ts
 * Topik 6: Kinetika Kimia & Mekanisme Reaksi
 * Jenjang: OSN / IChO
 */

import type { MaterialItem } from '../../materialsData.ts';

export const OSN_TOPIC_6: MaterialItem = {
  id: 6,
  topic_number: 6,
  title: 'Kinetika Kimia & Mekanisme Reaksi',
  slug: 'kinetika-kimia',
  category: 'Kimia Fisik',
  level: 'OSN',
  readTimeMinutes: 38,
  summary: 'Kajian komprehensif laju reaksi diferensial dan terintegrasi (orde 0, 1, 2, pseudo-orde), metode laju awal, waktu paruh, persamaan Arrhenius multitemperatur, energi aktivasi (Ea), teori tumbukan gas, teori keadaan transisi Eyring-Polanyi (ΔH‡, ΔS‡, ΔG‡), tahapan mekanisme elementer (RDS), pendekatan keadaan tunak (SSA), pra-kesetimbangan cepat, kinetika rantai beruntun, mekanisme Lindemann-Hinshelwood, katalisis heterogen, dan kinetika enzim Michaelis-Menten.',
  allTags: [
    'laju-reaksi-diferensial',
    'stoikiometri-laju',
    'hukum-laju-empiris',
    'metode-laju-awal',
    'orde-reaksi',
    'laju-terintegrasi',
    'orde-nol',
    'orde-satu',
    'orde-dua',
    'orde-pseudo-satu',
    'waktu-paruh',
    'grafik-linierisasi-kinetika',
    'teori-tumbukan',
    'teori-keadaan-transisi',
    'persamaan-eyring',
    'entalpi-aktivasi',
    'entropi-aktivasi',
    'persamaan-arrhenius',
    'energi-aktivasi',
    'faktor-frekuensi',
    'arrhenius-dua-suhu',
    'grafik-arrhenius',
    'mekanisme-reaksi',
    'tahap-elementer',
    'tahap-penentu-laju-rds',
    'pendekatan-pra-kesetimbangan',
    'molekularitas',
    'keadaan-tunak-ssa',
    'spesies-intermediet',
    'mekanisme-lindemann-hinshelwood',
    'kinetika-unimolekular',
    'tekanan-transisi',
    'reaksi-rantai-radikal',
    'tahap-inisiasi',
    'tahap-propagasi',
    'tahap-percabangan',
    'tahap-terminasi',
    'reaksi-h2-br2',
    'kinetika-katalisis',
    'katalisis-heterogen',
    'langmuir-hinshelwood',
    'eley-rideal',
    'kinetika-enzim-michaelis-menten',
    'plot-lineweaver-burk',
    'soal-waktu-paruh-c14',
    'soal-metode-laju-awal',
    'soal-arrhenius-eyring',
    'soal-kinetika-ssa-ozon',
    'soal-lindemann-hinshelwood',
    'soal-osk',
    'soal-osp',
    'soal-osn',
    'kinetika-ssa',
    'peluruhan-radioaktif',
    'tetapan-laju',
  ],
  prerequisites: [
    {
      tag: 'prasyarat-laju-diferensial-metode-awal',
      tags: ['laju-reaksi-diferensial', 'stoikiometri-laju', 'hukum-laju-empiris', 'metode-laju-awal', 'orde-reaksi'],
      title: 'Prasyarat 1: Definisi Laju Diferensial Stoikiometri, Hukum Laju Empiris, & Metode Laju Awal',
      summary: 'Konsep dasar laju perubahan konsentrasi per waktu, relasi koefisien stoikiometri, formulasi hukum laju diferensial, serta teknik isolasi metode laju awal.',
      content: `Kinetika kimia mengkaji kecepatan transformasi kimia dari reaktan menjadi produk serta lintasan mikroskopis (mekanisme) yang dilalui oleh molekul yang bereaksi.

### 1. Definisi Laju Reaksi Diferensial & Stoikiometri:
Untuk reaksi kimia umum dengan koefisien stoikiometri tertentu:
$$a\\ce{A} + b\\ce{B} -> c\\ce{C} + d\\ce{D}$$
Laju reaksi terdefinisi ($r$) adalah besaran intensif positif yang menunjukkan perubahan derajat kemajuan reaksi per satuan volume per satuan waktu:
$$r = -\\frac{1}{a}\\frac{d[\\ce{A}]}{dt} = -\\frac{1}{b}\\frac{d[\\ce{B}]}{dt} = +\\frac{1}{c}\\frac{d[\\ce{C}]}{dt} = +\\frac{1}{d}\\frac{d[\\ce{D}]}{dt}$$
Tanda negatif diberikan untuk reaktan karena konsentrasinya berkurang terhadap waktu ($d[\\ce{A}]/dt < 0$), sedangkan tanda positif diberikan untuk produk.

---

### 2. Formulasi Hukum Laju Reaksi Diferensial:
Secara eksperimental, laju reaksi sering kali sebanding dengan konsentrasi masing-masing reaktan yang dipangkatkan dengan nilai tertentu:
$$r = k [\\ce{A}]^m [\\ce{B}]^n$$
di mana:
- $k$: Tetapan laju reaksi (*rate constant*), nilainya spesifik untuk setiap reaksi dan sangat bergantung pada temperatur serta keberadaan katalis, namun **independen terhadap konsentrasi reaktan**.
- $m, n$: Orde reaksi parsial terhadap spesi $\\ce{A}$ dan $\\ce{B}$. Nilai orde reaksi bisa berupa bilangan bulat ($0, 1, 2$), pecahan ($1/2, 3/2$), atau bahkan negatif.
- Orde reaksi total: $n_{\\text{tot}} = m + n$.
- Satuan $k$: $\\text{M}^{1 - n_{\\text{tot}}} \\cdot \\text{s}^{-1}$ atau $(\\text{mol/L})^{1 - n_{\\text{tot}}} \\cdot \\text{s}^{-1}$.
  - Orde 0: $\\text{M} \\cdot \\text{s}^{-1}$
  - Orde 1: $\\text{s}^{-1}$
  - Orde 2: $\\text{M}^{-1} \\cdot \\text{s}^{-1}$

*Peringatan Penting:* Nilai orde reaksi $m$ dan $n$ **tidak dapat ditentukan dari koefisien stoikiometri reaksi keseluruhan** $a$ dan $b$. Orde reaksi murni merupakan besaran eksperimental empiris.

---

### 3. Penentuan Orde Parsial via Metode Laju Awal (*Initial Rates Method*):
Pada saat awal reaksi ($t = 0$), konsentrasi produk masih nol sehingga reaksi balik (*reverse reaction*) dapat diabaikan secara analitis.
Dengan memvariasikan konsentrasi awal reaktan secara sistematis:
$$\\frac{r_{0,2}}{r_{0,1}} = \\left(\\frac{[\\ce{A}]_{0,2}}{[\\ce{A}]_{0,1}}\\right)^m \\left(\\frac{[\\ce{B}]_{0,2}}{[\\ce{B}]_{0,1}}\\right)^n$$
Jika $[\\ce{B}]_0$ dijaga konstan:
$$\\frac{r_{0,2}}{r_{0,1}} = \\left(\\frac{[\\ce{A}]_{0,2}}{[\\ce{A}]_{0,1}}\\right)^m \\implies m = \\frac{\\log(r_{0,2} / r_{0,1})}{\\log([\\ce{A}]_{0,2} / [\\ce{A}]_{0,1})}$$`,
      keyFormulas: [
        { name: 'Laju Reaksi Stoikiometri', formula: 'r = -\\frac{1}{a}\\frac{d[A]}{dt} = +\\frac{1}{c}\\frac{d[C]}{dt}' },
        { name: 'Hukum Laju Diferensial', formula: 'r = k [A]^m [B]^n' },
        { name: 'Satuan Tetapan Laju k', formula: '\\text{Satuan } k = \\text{M}^{1 - n_{\\text{tot}}} \\cdot \\text{s}^{-1}' },
      ],
    },
    {
      tag: 'prasyarat-hukum-laju-terintegrasi-waktu-paruh',
      tags: ['laju-terintegrasi', 'orde-nol', 'orde-satu', 'orde-dua', 'orde-pseudo-satu', 'waktu-paruh', 'grafik-linierisasi-kinetika'],
      title: 'Prasyarat 2: Hukum Laju Terintegrasi (Orde 0, 1, 2, & Pseudo-Orde), Waktu Paruh ($t_{1/2}$), & Linierisasi Grafik',
      summary: 'Penurunan kalkulus integral konsentrasi terhadap waktu, formulas waktu paruh analitis, dan kriteria penentuan orde via regresi linear kurva kinetika.',
      content: `Hukum laju terintegrasi menghubungkan konsentrasi reaktan secara langsung sebagai fungsi dari waktu reaksi ($t$), memungkinkan prediksi konsentrasi analit pada waktu kapan pun.

### 1. Orde Nol ($r = -\\frac{d[\\ce{A}]}{dt} = k$):
- Integrasi: $\\int_{[\\ce{A}]_0}^{[\\ce{A}]_t} d[\\ce{A}] = -k \\int_0^t dt \\implies [\\ce{A}]_t = [\\ce{A}]_0 - kt$
- Plot Linear: Kurva $[\\ce{A}]_t$ terhadap $t$ menghasilkan garis lurus dengan kemiringan (*slope*) bernilai $-k$ dan intersep $[\\ce{A}]_0$.
- Waktu Paruh ($t_{1/2}$): Waktu yang diperlukan agar $[\\ce{A}]_{t_{1/2}} = \\frac{1}{2}[\\ce{A}]_0$:
  $$t_{1/2} = \\frac{[\\ce{A}]_0}{2k} \\quad (t_{1/2} \\text{ berbanding lurus dengan konsentrasi awal})$$

---

### 2. Orde Satu ($r = -\\frac{d[\\ce{A}]}{dt} = k[\\ce{A}]$):
- Integrasi: $\\int_{[\\ce{A}]_0}^{[\\ce{A}]_t} \\frac{d[\\ce{A}]}{[\\ce{A}]} = -k \\int_0^t dt \\implies \\ln\\left(\\frac{[\\ce{A}]_t}{[\\ce{A}]_0}\\right) = -kt$
- Bentuk Eksponensial: $[\\ce{A}]_t = [\\ce{A}]_0 e^{-kt}$
- Plot Linear: Kurva $\\ln[\\ce{A}]_t$ terhadap $t$ berupa garis lurus dengan kemiringan $-k$ dan intersep $\\ln[\\ce{A}]_0$.
- Waktu Paruh ($t_{1/2}$):
  $$\\ln\\left(\\frac{1}{2}\\right) = -k t_{1/2} \\implies t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.6931}{k}$$
  *Sifat Khusus Orde Satu:* Nilai $t_{1/2}$ **sama sekali tidak bergantung pada konsentrasi awal reaktan** $[\\ce{A}]_0$. Fenomena peluruhan radioaktif inti atom selalu mengikuti kinetika orde satu.

---

### 3. Orde Dua ($r = -\\frac{d[\\ce{A}]}{dt} = k[\\ce{A}]^2$):
- Integrasi: $-\\int_{[\\ce{A}]_0}^{[\\ce{A}]_t} \\frac{d[\\ce{A}]}{[\\ce{A}]^2} = k \\int_0^t dt \\implies \\frac{1}{[\\ce{A}]_t} = \\frac{1}{[\\ce{A}]_0} + kt$
- Plot Linear: Kurva $\\frac{1}{[\\ce{A}]_t}$ terhadap $t$ menghasilkan garis lurus dengan kemiringan positif $+k$ dan intersep $\\frac{1}{[\\ce{A}]_0}$.
- Waktu Paruh ($t_{1/2}$):
  $$\\frac{2}{[\\ce{A}]_0} = \\frac{1}{[\\ce{A}]_0} + k t_{1/2} \\implies t_{1/2} = \\frac{1}{k [\\ce{A}]_0}$$
  *Karakteristik:* Setiap kelipatan waktu paruh berikutnya berdurasi dua kali lebih lama dari waktu paruh sebelumnya ($t_{1/2}^{(2)} = 2 t_{1/2}^{(1)}$).

---

### 4. Metode Banjir (*Flooding Method*) & Kinetika Orde Pseudo-Satu:
Jika reaksi melibatkan dua reaktan $r = k[\\ce{A}][\\ce{B}]$ di mana salah satu reaktan dibuat berlebih dalam jumlah raksasa ($[\\ce{B}]_0 \\gg [\\ce{A}]_0$):
Konsentrasi $[\\ce{B}]$ praktis bernilai konstan sepanjang reaksi ($[\\ce{B}]_t \\approx [\\ce{B}]_0$).
$$r = k' [\\ce{A}] \\quad \\text{di mana } k' = k [\\ce{B}]_0$$
Sistem kinetika menyederhanakan diri menjadi orde pseudo-satu, sehingga memudahkan penentuan tetapan laju murni $k$ melalui variasi nilai $[\\ce{B}]_0$.`,
      keyFormulas: [
        { name: 'Terintegrasi Orde Nol', formula: '[A]_t = [A]_0 - kt, \\quad t_{1/2} = \\frac{[A]_0}{2k}' },
        { name: 'Terintegrasi Orde Satu', formula: '\\ln\\frac{[A]_t}{[A]_0} = -kt, \\quad t_{1/2} = \\frac{\\ln 2}{k}' },
        { name: 'Terintegrasi Orde Dua', formula: '\\frac{1}{[A]_t} = \\frac{1}{[A]_0} + kt, \\quad t_{1/2} = \\frac{1}{k[A]_0}' },
        { name: 'Hubungan Pseudo Orde 1', formula: 'k_{\\text{obs}} = k [B]_0^n' },
      ],
    },
    {
      tag: 'prasyarat-teori-tumbukan-keadaan-transisi',
      tags: ['teori-tumbukan', 'teori-keadaan-transisi', 'persamaan-eyring', 'entalpi-aktivasi', 'entropi-aktivasi'],
      title: 'Prasyarat 3: Teori Tumbukan Gas (Collision Theory) & Teori Keadaan Transisi (Eyring-Polanyi TST)',
      summary: 'Model mikroskopis frekuensi tumbukan, faktor sterik P, pembentukan kompleks teraktivasi berenergi tinggi, serta termodinamika aktivasi Eyring.',
      content: `Dua kerangka teoretis utama yang menjelaskan mengapa molekul bereaksi pada laju tertentu adalah Teori Tumbukan dan Teori Keadaan Transisi (*Transition State Theory* / TST).

### 1. Teori Tumbukan Gas Sederhana (*Simple Collision Theory*):
Reaksi kimia fasa gas hanya terjadi jika partikel reaktan saling bertumbukan. Namun, tidak semua tumbukan menghasilkan reaksi. Laju reaksi dinyatakan sebagai:
$$k = Z_{AB} \\cdot \\rho \\cdot e^{-E_a / RT}$$
1. **Frekuensi Tumbukan ($Z_{AB}$):** Jumlah total tumbukan antarmolekul per satuan volume per detik, sebanding dengan $\\sqrt{T}$.
2. **Faktor Energi Boltzmann ($e^{-E_a / RT}$):** Fraksi molekul yang memiliki energi kinetik relatif melampaui energi ambang batas aktivasi minimal ($E \\ge E_a$).
3. **Faktor Sterik / Orientasi ($\\rho$):** Fraksi tumbukan dengan geometri dan orientasi ruang spasial yang tepat agar orbital molekul yang bereaksi dapat saling tumpang-tindih (*overlap*).

---

### 2. Teori Keadaan Transisi (Transition State Theory / Eyring-Polanyi):
TST mempostulatkan bahwa molekul reaktan berada dalam kesetimbangan kuasi-termodinamika dengan suatu struktur berenergi tertinggi yang berumur sangat pendek ($~10^{-13}\\text{ s}$), disebut **kompleks teraktivasi** atau **keadaan transisi** ($[\\ce{X}]^\\ddagger$):
$$\\ce{A + B <=> [AB]^\\ddagger -> Produk}$$
Berdasarkan mekanika statistik dan termodinamika kimia, Henry Eyring menurunkan tetapan laju absolut:
$$k = \\frac{k_B T}{h} e^{-\\Delta G^\\ddagger / RT} = \\frac{k_B T}{h} e^{\\Delta S^\\ddagger / R} e^{-\\Delta H^\\ddagger / RT}$$
di mana:
- $k_B$: Tetapan Boltzmann ($1.3806 \\times 10^{-23}\\text{ J/K}$)
- $h$: Tetapan Planck ($6.626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$)
- $\\frac{k_B T}{h}$: Frekuensi getaran pembelahan ikatan keadaan transisi ($~6.21 \\times 10^{12}\\text{ s}^{-1}$ pada $298\\text{ K}$)
- $\\Delta H^\\ddagger$: Entalpi aktivasi (kalor yang diserap untuk meregangkan ikatan mencapai puncak penghalang)
- $\\Delta S^\\ddagger$: Entropi aktivasi (derajat keteraturan geometri pada keadaan transisi)

---

### 3. Hubungan Termodinamika Eyring dengan Energi Aktivasi Arrhenius ($E_a$):
Dari definisi matematis Arrhenius $E_a = R T^2 \\frac{d \\ln k}{dT}$:
- **Untuk reaksi dalam larutan cair:**
  $$E_a = \\Delta H^\\ddagger + RT$$
- **Untuk reaksi fasa gas bimolekular:**
  $$E_a = \\Delta H^\\ddagger + 2RT$$

*Signifikansi Fisik Entropi Aktivasi ($\\Delta S^\\ddagger$):*
- $\\Delta S^\\ddagger < 0$ (Negatif besar): Keadaan transisi memiliki struktur yang jauh lebih kaku dan teratur dibandingkan reaktan bebas (contoh: reaksi asosiasi dua molekul menjadi satu kompleks siklik, penataan ligan, atau restriksi solvasi).
- $\\Delta S^\\ddagger > 0$ (Positif): Keadaan transisi mengalami pelemahan/pemutusan ikatan yang signifikan (disosiasi), meningkatkan derajat kebebasan molekul.`,
      keyFormulas: [
        { name: 'Persamaan Eyring', formula: 'k = \\frac{k_B T}{h} e^{\\Delta S^\\ddagger / R} e^{-\\Delta H^\\ddagger / RT}' },
        { name: 'Relasi Ea dan Enthalpi Aktivasi Cairan', formula: 'E_a = \\Delta H^\\ddagger + RT' },
        { name: 'Relasi Ea Gas Bimolekular', formula: 'E_a = \\Delta H^\\ddagger + 2RT' },
      ],
    },
  ],
  core_concepts: [
    {
      tag: 'konsep-arrhenius-ketergantungan-suhu',
      tags: ['persamaan-arrhenius', 'energi-aktivasi', 'faktor-frekuensi', 'arrhenius-dua-suhu', 'grafik-arrhenius'],
      title: 'Konsep Inti 1: Persamaan Arrhenius, Energi Aktivasi Eksperimental, & Plot Arrhenius',
      summary: 'Kuantifikasi pengaruh temperatur terhadap tetapan laju k, energi ambang batas reaksi, dan penentuan parameter kinetika via grafik linear 1/T.',
      content: `Ketergantungan tetapan laju reaksi terhadap temperatur secara empiris dirumuskan oleh Svante Arrhenius pada tahun 1889 melalui persamaan eksponensial fundamental.

### 1. Formulasi Persamaan Arrhenius:
$$k = A e^{-E_a / RT}$$
di mana:
- $k$: Tetapan laju reaksi.
- $A$: Faktor pra-eksponensial atau faktor frekuensi, merepresentasikan frekuensi total tumbukan dengan orientasi yang tepat (satuan identik dengan $k$).
- $E_a$: Energi aktivasi empiris (satuan $\\text{J/mol}$ atau $\\text{kJ/mol}$), yaitu energi kinetik minimum yang harus dimiliki partikel pereaksi agar tumbukan menghasilkan reaksi kimia.
- $R$: Tetapan gas universal ($8.314\\text{ J}/(\\text{mol}\\cdot\\text{K})$).
- $T$: Temperatur termodinamika mutlak dalam Kelvin (K).

---

### 2. Bentuk Linear & Plot Arrhenius:
Mengambil logaritma natural ($\\ln$) pada kedua ruas persamaan Arrhenius:
$$\\ln k = \\ln A - \\frac{E_a}{R} \\left(\\frac{1}{T}\\right)$$
Bentuk ini ekuivalen dengan persamaan garis lurus $y = c + mx$:
- Sumbu $y$: $\\ln k$
- Sumbu $x$: $\\frac{1}{T}$ (dalam $\\text{K}^{-1}$)
- Kemiringan (*slope*): $m = -\\frac{E_a}{R} \\implies E_a = -R \\times m$
- Titik potong sumbu $y$ (*intercept*): $c = \\ln A \\implies A = e^c$

---

### 3. Persamaan Arrhenius Bentuk Dua Suhu:
Jika nilai tetapan laju diukur pada dua temperatur berbeda $T_1$ dan $T_2$ dengan asumsi $E_a$ dan $A$ konstan:
$$\\ln\\left(\\frac{k_2}{k_1}\\right) = -\\frac{E_a}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right) = \\frac{E_a}{R}\\left(\\frac{T_2 - T_1}{T_1 T_2}\\right)$$

*Kaidah Praktis Kinetika:*
Untuk reaksi tipikal dengan $E_a \\approx 50\\text{ kJ/mol}$ pada suhu kamar ($300\\text{ K}$), kenaikan suhu sebesar $10^\\circ\\text{C}$ akan melipatgandakan laju reaksi sekitar dua kali lipat ($k_{T+10} / k_T \\approx 2$). Semakin besar nilai $E_a$, semakin sensitif laju reaksi terhadap fluktuasi temperatur.`,
      keyFormulas: [
        { name: 'Persamaan Arrhenius Eksponensial', formula: 'k = A e^{-E_a / RT}' },
        { name: 'Bentuk Linear Plot Arrhenius', formula: '\\ln k = \\ln A - \\frac{E_a}{R}\\left(\\frac{1}{T}\\right)' },
        { name: 'Bentuk Dua Temperatur', formula: '\\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R}\\left(\\frac{T_2 - T_1}{T_1 T_2}\\right)' },
      ],
    },
    {
      tag: 'konsep-mekanisme-rds-pra-kesetimbangan',
      tags: ['mekanisme-reaksi', 'tahap-elementer', 'tahap-penentu-laju-rds', 'pendekatan-pra-kesetimbangan', 'molekularitas'],
      title: 'Konsep Inti 2: Tahapan Reaksi Elementer, Tahap Penentu Laju (RDS), & Pendekatan Pra-Kesetimbangan',
      summary: 'Korelasi molekularitas tahap elementer, penentuan hukum laju dari tahap paling lambat (RDS), dan eliminasi zat antara via pra-kesetimbangan dinamis cepat.',
      content: `Sebagian besar reaksi kimia tidak berlangsung dalam satu benturan tunggal melainkan melalui serangkaian tahapan mikroskopis berurutan yang disebut **mekanisme reaksi**.

### 1. Reaksi Elementer & Konsep Molekularitas:
Reaksi elementer adalah tahapan reaksi tunggal yang berlangsung persis seperti yang tertulis:
- **Unimolekular (Molekularitas 1):** $\\ce{A -> Produk} \\implies r = k[\\ce{A}]$ (Orde 1)
- **Bimolekular (Molekularitas 2):** $\\ce{A + B -> Produk} \\implies r = k[\\ce{A}][\\ce{B}]$ (Orde 2)
- **Termolekular (Molekularitas 3):** $\\ce{A + B + C -> Produk} \\implies r = k[\\ce{A}][\\ce{B}][\\ce{C}]$ (Sangat langka karena probabilitas tumbukan simultan tiga benda sangat rendah).

*Prinsip Fundamental:* **Hanya pada reaksi elementer, orde reaksi parsial sama persis dengan koefisien stoikiometrinya!**

---

### 2. Tahap Penentu Laju (*Rate-Determining Step* / RDS):
Jika salah satu tahap elementer memiliki energi aktivasi tertinggi dan berlangsung jauh lebih lambat dibanding tahap-tahap lainnya, tahap tersebut bertindak sebagai penghambat utama (*bottleneck*). Laju reaksi keseluruhan sepenuhnya ditentukan oleh laju tahap lambat ini:
$$r_{\\text{keseluruhan}} = r_{\\text{RDS}}$$

---

### 3. Pendekatan Pra-Kesetimbangan Cepat (*Rapid Pre-Equilibrium Approximation*):
Bila tahap lambat didahului oleh tahap reversibel yang berlangsung sangat cepat, tahap awal tersebut akan mencapai kesetimbangan dinamis kuasi-sempurna sebelum reaktan pada tahap kedua sempat terkonsumsi signifikan:
- Tahap 1 (Cepat, Bolak-balik): $\\ce{A + B <=> C} \\quad (k_1, k_{-1})$
- Tahap 2 (Lambat, RDS): $\\ce{C + D -> Produk} \\quad (k_2)$

Laju reaksi keseluruhan:
$$r = k_2 [\\ce{C}] [\\ce{D}]$$
Karena $[\\ce{C}]$ adalah zat antara (*intermediate*) yang konsentrasinya tidak dapat diukur langsung, terapkan kesetimbangan pada Tahap 1:
$$r_{\\text{fwd}} = r_{\\text{rev}} \\implies k_1 [\\ce{A}][\\ce{B}] = k_{-1} [\\ce{C}] \\implies [\\ce{C}] = \\frac{k_1}{k_{-1}} [\\ce{A}][\\ce{B}] = K_{eq} [\\ce{A}][\\ce{B}]$$
Substitusikan $[\\ce{C}]$ ke dalam persamaan laju RDS:
$$r = k_2 \\left(\\frac{k_1}{k_{-1}} [\\ce{A}][\\ce{B}]\\right) [\\ce{D}] = \\left(\\frac{k_1 k_2}{k_{-1}}\\right) [\\ce{A}][\\ce{B}][\\ce{D}] = k_{\\text{obs}} [\\ce{A}][\\ce{B}][\\ce{D}]$$

**Energi Aktivasi Efektif ($E_{a,\\text{obs}}$):**
$$E_{a,\\text{obs}} = E_{a1} - E_{a,-1} + E_{a2} = \\Delta H^\\circ_1 + E_{a2}$$
Jika tahap pra-kesetimbangan bersifat sangat eksotermik ($\\Delta H^\\circ_1 \\ll 0$) sedemikian sehingga $|\\Delta H^\\circ_1| > E_{a2}$, nilai $E_{a,\\text{obs}}$ dapat bernilai **negatif**! Pada kasus langka ini, kenaikan temperatur justru menyebabkan laju reaksi menurun karena kesetimbangan tahap 1 bergeser hebat ke arah kiri.`,
      keyFormulas: [
        { name: 'Laju Pra-Kesetimbangan', formula: 'r = \\frac{k_1 k_2}{k_{-1}} [A][B][D]' },
        { name: 'Energi Aktivasi Efektif Gabungan', formula: 'E_{a,\\text{obs}} = \\Delta H_1^\\circ + E_{a2}' },
      ],
    },
    {
      tag: 'konsep-keadaan-tunak-ssa-lindemann',
      tags: ['keadaan-tunak-ssa', 'spesies-intermediet', 'mekanisme-lindemann-hinshelwood', 'kinetika-unimolekular', 'tekanan-transisi'],
      title: 'Konsep Inti 3: Pendekatan Keadaan Tunak (Steady-State Approximation / SSA) & Mekanisme Lindemann-Hinshelwood',
      summary: 'Prinsip Bodenstein laju akumulasi zat antara reaktif bernilai nol, formulasi aljabar intermediet, dan transisi orde reaksi gas unimolekular.',
      content: `Pendekatan Keadaan Tunak (*Steady-State Approximation* / SSA) pertama kali diperkenalkan oleh Max Bodenstein pada tahun 1913. Metode ini jauh lebih umum daripada pendekatan pra-kesetimbangan karena tidak mensyaratkan tahap awal harus berada dalam kesetimbangan.

### 1. Prinsip Dasar Bodenstein SSA:
Zat antara (*reactive intermediate*) adalah spesi kimia berenergi tinggi (seperti atom radikal bebas, karbokation, atau kompleks teraktivasi) yang bereaksi segera setelah terbentuk.
Oleh karena itu, konsentrasinya di dalam reaktor selalu berada pada tingkat yang sangat rendah dan stasioner sepanjang sebagian besar jalannya reaksi:
$$\\frac{d[\\text{Intermediate}]}{dt} \\approx 0 \\iff \\sum r_{\\text{pembentukan}} = \\sum r_{\\text{konsumsi}}$$

---

### 2. Mekanisme Lindemann-Hinshelwood untuk Reaksi Unimolekular Gas:
Bagaimana suatu molekul gas $\\ce{A}$ dapat memperoleh energi aktivasi untuk mengalami dekomposisi atau isomerisasi unimolekular? Frederick Lindemann menjelaskan bahwa energi diperoleh melalui benturan bimolekular dengan molekul gas lain $\\ce{M}$ (bisa berupa molekul $\\ce{A}$ sendiri atau gas inert):
1. **Aktivasi Tumbukan:** $\\ce{A + M -> A^* + M} \\quad (k_1)$
2. **Deaktivasi Tumbukan:** $\\ce{A^* + M -> A + M} \\quad (k_{-1})$
3. **Dekomposisi Unimolekular:** $\\ce{A^* -> Produk} \\quad (k_2)$

Laju pembentukan produk:
$$r = \\frac{d[\\text{Produk}]}{dt} = k_2 [\\ce{A^*}]$$
Terapkan SSA pada spesi molekul tereksitasi $[\\ce{A^*}]$:
$$\\frac{d[\\ce{A^*}]}{dt} = k_1 [\\ce{A}][\\ce{M}] - k_{-1} [\\ce{A^*}][\\ce{M}] - k_2 [\\ce{A^*}] = 0$$
$$[\\ce{A^*}] (k_{-1}[\\ce{M}] + k_2) = k_1 [\\ce{A}][\\ce{M}] \\implies [\\ce{A^*}] = \\frac{k_1 [\\ce{A}][\\ce{M}]}{k_{-1}[\\ce{M}] + k_2}$$
Substitusikan konsentrasi $[\\ce{A^*}]$ ke persamaan laju produk:
$$r = \\frac{k_1 k_2 [\\ce{A}][\\ce{M}]}{k_{-1}[\\ce{M}] + k_2}$$

---

### 3. Dua Kasus Batas Tekanan (Transisi Orde Reaksi):
Hukum laju Lindemann dapat dituliskan dalam bentuk tetapan semu unimolekular $r = k_{\\text{uni}} [\\ce{A}]$:
$$k_{\\text{uni}} = \\frac{k_1 k_2 [\\ce{M}]}{k_{-1}[\\ce{M}] + k_2}$$

1. **Batas Tekanan Tinggi ($P \\to \\infty$, Konsentrasi $[\\ce{M}]$ Sangat Besar):**
   Laju deaktivasi tumbukan jauh melampaui laju penguraian ($k_{-1}[\\ce{M}] \\gg k_2$). Penyebut didominasi oleh $k_{-1}[\\ce{M}]$:
   $$k_{\\text{uni}} \\approx \\frac{k_1 k_2 [\\ce{M}]}{k_{-1}[\\ce{M}]} = \\frac{k_1 k_2}{k_{-1}} = k_\\infty \\implies r = k_\\infty [\\ce{A}] \\quad (\\mathbf{\\text{Orde Satu Murni}})$$
2. **Batas Tekanan Rendah ($P \\to 0$, Konsentrasi $[\\ce{M}]$ Sangat Kecil):**
   Molekul tereksitasi langsung terurai sebelum sempat terdeaktivasi ($k_2 \\gg k_{-1}[\\ce{M}]$):
   $$k_{\\text{uni}} \\approx \\frac{k_1 k_2 [\\ce{M}]}{k_2} = k_1 [\\ce{M}] \\implies r = k_1 [\\ce{A}][\\ce{M}] \\quad (\\mathbf{\\text{Orde Dua Total}})$$

**Plot Linierisasi Lindemann:**
$$\\frac{1}{k_{\\text{uni}}} = \\frac{k_{-1}}{k_1 k_2} + \\frac{1}{k_1} \\left(\\frac{1}{[\\ce{M}]}\\right) = \\frac{1}{k_\\infty} + \\frac{1}{k_1} \\left(\\frac{1}{[\\ce{M}]}\\right)$$
Grafik $\\frac{1}{k_{\\text{uni}}}$ terhadap $\\frac{1}{[\\ce{M}]}$ menghasilkan garis lurus dengan kemiringan $\\frac{1}{k_1}$ dan intersep $\\frac{1}{k_\\infty}$.`,
      keyFormulas: [
        { name: 'Kondisi Bodenstein SSA', formula: '\\frac{d[\\text{Intermediate}]}{dt} = 0' },
        { name: 'Laju Lindemann-Hinshelwood', formula: 'r = \\frac{k_1 k_2 [A][M]}{k_{-1}[M] + k_2}' },
        { name: 'Tetapan Laju Tekanan Tinggi', formula: 'k_\\infty = \\frac{k_1 k_2}{k_{-1}}' },
        { name: 'Plot Linear Lindemann', formula: '\\frac{1}{k_{\\text{uni}}} = \\frac{1}{k_\\infty} + \\frac{1}{k_1}\\left(\\frac{1}{[M]}\\right)' },
      ],
    },
    {
      tag: 'konsep-kinetika-rantai-radikal-eksplosi',
      tags: ['reaksi-rantai-radikal', 'tahap-inisiasi', 'tahap-propagasi', 'tahap-percabangan', 'tahap-terminasi', 'reaksi-h2-br2'],
      title: 'Konsep Inti 4: Kinetika Reaksi Rantai Radikal (Chain Reactions), Inhibisi Produk, & Batas Ledakan',
      summary: 'Empat tahapan kinetika rantai pembawa radikal, perlakuan SSA pada sistem multiradikal, hukum laju H2-Br2, dan mekanisme ledakan termal vs percabangan.',
      content: `Reaksi rantai (*chain reactions*) adalah proses kinetika berantai di mana satu partikel perantara reaktif (pembawa rantai / *chain carrier*, biasanya atom atau radikal bebas) dikonsumsi dan sekaligus dihasilkan kembali secara berulang-ulang melalui siklus propagasi.

### 1. Empat Tahap Utama Reaksi Rantai:
1. **Inisiasi:** Pembentukan radikal bebas aktif pertama dari molekul stabil (via termal atau fotokimia).
2. **Propagasi:** Radikal bereaksi dengan molekul stabil menghasilkan molekul produk dan radikal baru (jumlah radikal bersih tetap).
3. **Inhibisi / Retardasi:** Molekul produk bereaksi dengan radikal, membalikkan reaksi atau memperlambat akumulasi produk.
4. **Terminasi:** Penghilangan radikal aktif melalui rekombinasi dua radikal menjadi molekul netral atau tumbukan dengan dinding reaktor.

---

### 2. Mekanisme Klasik Reaksi Hidrogen-Bromida ($\\ce{H2 + Br2 -> 2HBr}$):
Reaksi pembentukan gas $\\ce{HBr}$ diteliti secara mendalam oleh Bodenstein, Lind, dan Christiansen:
1. Inisiasi: $\\ce{Br2 + M -> 2Br^\\bullet + M} \\quad (k_1)$
2. Propagasi 1: $\\ce{Br^\\bullet + H2 -> HBr + H^\\bullet} \\quad (k_2)$ (Endotermik, lambat)
3. Propagasi 2: $\\ce{H^\\bullet + Br2 -> HBr + Br^\\bullet} \\quad (k_3)$ (Eksotermik, sangat cepat)
4. Inhibisi: $\\ce{H^\\bullet + HBr -> H2 + Br^\\bullet} \\quad (k_4)$
5. Terminasi: $\\ce{2Br^\\bullet + M -> Br2 + M} \\quad (k_5)$

Laju pembentukan gas $\\ce{HBr}$:
$$\\frac{d[\\ce{HBr}]}{dt} = k_2 [\\ce{Br^\\bullet}][\\ce{H2}] + k_3 [\\ce{H^\\bullet}][\\ce{Br2}] - k_4 [\\ce{H^\\bullet}][\\ce{HBr}]$$
Menerapkan SSA pada kedua zat antara radikal $[\\ce{Br^\\bullet}]$ dan $[\\ce{H^\\bullet}]$:
- Neraca radikal $\\ce{H^\\bullet}$: $\\frac{d[\\ce{H^\\bullet}]}{dt} = k_2 [\\ce{Br^\\bullet}][\\ce{H2}] - k_3 [\\ce{H^\\bullet}][\\ce{Br2}] - k_4 [\\ce{H^\\bullet}][\\ce{HBr}] = 0$
  $$k_3 [\\ce{H^\\bullet}][\\ce{Br2}] + k_4 [\\ce{H^\\bullet}][\\ce{HBr}] = k_2 [\\ce{Br^\\bullet}][\\ce{H2}]$$
- Neraca radikal $\\ce{Br^\\bullet}$: $\\frac{d[\\ce{Br^\\bullet}]}{dt} = 2k_1 [\\ce{Br2}][\\ce{M}] - k_2 [\\ce{Br^\\bullet}][\\ce{H2}] + k_3 [\\ce{H^\\bullet}][\\ce{Br2}] + k_4 [\\ce{H^\\bullet}][\\ce{HBr}] - 2k_5 [\\ce{Br^\\bullet}]^2 [\\ce{M}] = 0$
Jumlahkan kedua persamaan neraca untuk mengeliminasi suku propagasi:
$$2k_1 [\\ce{Br2}][\\ce{M}] - 2k_5 [\\ce{Br^\\bullet}]^2 [\\ce{M}] = 0 \\implies [\\ce{Br^\\bullet}] = \\sqrt{\\frac{k_1}{k_5}} [\\ce{Br2}]^{1/2}$$
Substitusikan ke neraca $[\\ce{H^\\bullet}]$ menghasilkan hukum laju analitis:
$$r = \\frac{d[\\ce{HBr}]}{dt} = \\frac{2 k_2 \\sqrt{k_1 / k_5} [\\ce{H2}][\\ce{Br2}]^{1/2}}{1 + \\frac{k_4 [\\ce{HBr}]}{k_3 [\\ce{Br2}]}} = \\frac{k [\\ce{H2}][\\ce{Br2}]^{1/2}}{1 + m' \\frac{[\\ce{HBr}]}{[\\ce{Br2}]}}$$
*Wawasan Kinetika:* Keberadaan suku $[\\ce{HBr}]$ di penyebut menjelaskan secara matematis mengapa laju reaksi terhambat seiring terbentuknya produk (*product inhibition*).

---

### 3. Percabangan Rantai (*Branching Chains*) & Fenomena Ledakan (Explosion Limits):
Pada reaksi gas $\\ce{2H2 + O2 -> 2H2O}$, terjadi tahap percabangan rantai di mana satu radikal menghasilkan lebih dari satu radikal baru:
$$\\ce{H^\\bullet + O2 -> OH^\\bullet + O^{\\bullet\\bullet}} \\quad (1 \\text{ radikal} \\to 2 \\text{ radikal})$$
$$\\ce{O^{\\bullet\\bullet} + H2 -> OH^\\bullet + H^\\bullet} \\quad (1 \\text{ radikal} \\to 2 \\text{ radikal})$$
Jika faktor multiplikasi percabangan melampaui laju terminasi, konsentrasi radikal meningkat secara eksponensial terhadap waktu ($[\\text{radikal}] \\to \\infty$), memicu **ledakan rantai (*chain explosion*)**. Batas tekanan ledakan (Batas 1: terminasi dinding; Batas 2: terminasi fasa gas via $\\ce{HO2^\\bullet}$; Batas 3: ledakan termal) membentuk kurva semenanjung ledakan khas (*explosion peninsula*).`,
      keyFormulas: [
        { name: 'Hukum Laju Reaksi H2-Br2', formula: 'r = \\frac{k [H_2][Br_2]^{1/2}}{1 + m\\frac{[HBr]}{[Br_2]}}' },
        { name: 'Konsentrasi Radikal Tunak Br', formula: '[Br^\\bullet] = \\left(\\frac{k_1}{k_5}\\right)^{1/2} [Br_2]^{1/2}' },
      ],
    },
    {
      tag: 'konsep-katalisis-heterogen-enzim',
      tags: ['kinetika-katalisis', 'katalisis-heterogen', 'langmuir-hinshelwood', 'eley-rideal', 'kinetika-enzim-michaelis-menten', 'plot-lineweaver-burk'],
      title: 'Konsep Inti 5: Kinetika Katalisis Homogen-Heterogen (Langmuir-Hinshelwood) & Enzim Michaelis-Menten',
      summary: 'Kinetika adsorpsi isoterm Langmuir pada permukaan katalis padat, mekanisme Eley-Rideal, serta perlakuan SSA pada kinetika saturasi enzimatis.',
      content: `Katalisator mempercepat laju reaksi dengan menyediakan jalur reaksi alternatif yang memiliki energi aktivasi ($E_a$) lebih rendah tanpa mengubah posisi kesetimbangan termodinamika ($\\Delta G^\\circ, K_{eq}$ konstan).

### 1. Katalisis Heterogen & Isoterm Adsorpsi Langmuir:
Pada katalisis padat-gas, fraksi permukaan katalis yang tertutupi oleh molekul reaktan ($\\theta$) diatur oleh Isoterm Adsorpsi Langmuir:
$$\\theta = \\frac{K P}{1 + K P}$$
- **Mekanisme Langmuir-Hinshelwood:** Reaksi berlangsung antara dua molekul yang sama-sama teradsorpsi pada permukaan aktif katalis padat:
  $$r = k \\theta_A \\theta_B = \\frac{k K_A K_B P_A P_B}{(1 + K_A P_A + K_B P_B)^2}$$
- **Mekanisme Eley-Rideal:** Reaksi berlangsung antara molekul yang teradsorpsi pada permukaan ($\\ce{A_{(ads)}}$) dengan molekul gas yang bertumbukan langsung dari fasa ruah ($\\ce{B_{(g)}}$):
  $$r = k \\theta_A P_B = \\frac{k K_A P_A P_B}{1 + K_A P_A}$$

---

### 2. Kinetika Enzimatis Michaelis-Menten:
Enzim ($\\ce{E}$) mengkatalisis konversi substrat ($\\ce{S}$) menjadi produk ($\\ce{P}$) melalui pembentukan kompleks enzim-substrat intermediet ($\\ce{ES}$):
$$\\ce{E + S <=> ES -> E + P} \\quad (k_1, k_{-1}, k_2 = k_{\\text{cat}})$$
Laju pembentukan produk:
$$v = \\frac{d[\\ce{P}]}{dt} = k_2 [\\ce{ES}]$$
Neraca massa enzim total: $[\\ce{E}]_0 = [\\ce{E}] + [\\ce{ES}] \\implies [\\ce{E}] = [\\ce{E}]_0 - [\\ce{ES}]$.
Terapkan SSA pada $[\\ce{ES}]$:
$$\\frac{d[\\ce{ES}]}{dt} = k_1 [\\ce{E}][\\ce{S}] - (k_{-1} + k_2)[\\ce{ES}] = 0$$
$$k_1 ([\\ce{E}]_0 - [\\ce{ES}])[\\ce{S}] = (k_{-1} + k_2)[\\ce{ES}]$$
Kumpulkan suku $[\\ce{ES}]$ dan definisikan **Tetapan Michaelis ($K_M$)**:
$$K_M = \\frac{k_{-1} + k_2}{k_1}$$
$$[\\ce{ES}] = \\frac{[\\ce{E}]_0 [\\ce{S}]}{K_M + [\\ce{S}]}$$
Maka persamaan laju Michaelis-Menten diperoleh secara eksak:
$$v = \\frac{k_2 [\\ce{E}]_0 [\\ce{S}]}{K_M + [\\ce{S}]} = \\frac{V_{\\text{max}} [\\ce{S}]}{K_M + [\\ce{S}]}$$
di mana $V_{\\text{max}} = k_{\\text{cat}} [\\ce{E}]_0$ adalah laju reaksi maksimum ketika seluruh situs aktif enzim tersaturasi penuh oleh substrat.

**Dua Rezim Kinetika Batas:**
1. $[\\ce{S}] \\ll K_M$: $v \\approx \\frac{V_{\\text{max}}}{K_M} [\\ce{S}] = \\frac{k_{\\text{cat}}}{K_M} [\\ce{E}]_0 [\\ce{S}]$ (Kinetika orde satu terhadap substrat; $\\frac{k_{\\text{cat}}}{K_M}$ adalah efisiensi katalitik enzim).
2. $[\\ce{S}] \\gg K_M$: $v \\approx V_{\\text{max}}$ (Kinetika orde nol terhadap substrat, laju mencapai saturasi plateau independen dari $[\\ce{S}]$).

---

### 3. Plot Lineweaver-Burk (Grafik Dua Resiprokal):
Membalikkan persamaan Michaelis-Menten:
$$\\frac{1}{v} = \\frac{K_M + [\\ce{S}]}{V_{\\text{max}} [\\ce{S}]} = \\frac{K_M}{V_{\\text{max}}} \\left(\\frac{1}{[\\ce{S}]}\\right) + \\frac{1}{V_{\\text{max}}}$$
Plot $\\frac{1}{v}$ terhadap $\\frac{1}{[\\ce{S}]}$ menghasilkan garis lurus:
- Kemiringan (*slope*): $\\frac{K_M}{V_{\\text{max}}}$
- Intersep sumbu vertikal ($y$): $\\frac{1}{V_{\\text{max}}}$
- Intersep sumbu horizontal ($x$): $-\\frac{1}{K_M}$`,
      keyFormulas: [
        { name: 'Persamaan Michaelis-Menten', formula: 'v = \\frac{V_{\\text{max}} [S]}{K_M + [S]}' },
        { name: 'Tetapan Michaelis', formula: 'K_M = \\frac{k_{-1} + k_2}{k_1}' },
        { name: 'Lineweaver-Burk Dua Resiprokal', formula: '\\frac{1}{v} = \\frac{K_M}{V_{\\text{max}}}\\left(\\frac{1}{[S]}\\right) + \\frac{1}{V_{\\text{max}}}' },
      ],
    },
  ],
  worked_examples: [
    {
      tag: 'soal-kinetika-c14-peluruhan-radioaktif',
      tags: ['soal-osk', 'soal-waktu-paruh-c14', 'orde-satu', 'peluruhan-radioaktif', 'waktu-paruh'],
      title: 'Contoh Soal OSK 1: Analisis Kinetika Peluruhan Radioaktif Orde 1 & Penanggalan Karbon-14 Fosil Purbakala',
      summary: 'Kalkulasi tetapan peluruhan radioaktif k, penentuan umur mutlak artefak kayu purbakala via isotop C-14, dan batas deteksi instrumen.',
      content: `### Soal:
Isotop radioaktif karbon-14 ($^{14}\\ce{C}$) meluruh memancarkan partikel beta ($\\beta^-$) dengan kinetika orde satu dan memiliki waktu paruh $t_{1/2} = 5730\\text{ tahun}$. Pada makhluk hidup, aktivitas spesifik $^{14}\\ce{C}$ dijaga konstan oleh pertukaran metabolik biosfer sebesar $A_0 = 15.30\\text{ dpm/g C}$ (*disintegrations per minute per gram carbon*).
Sebuah fragmen kayu purbakala ditemukan di situs arkeologi prasejarah. Pengukuran spektrometri massa menunjukkan aktivitas $^{14}\\ce{C}$ sebesar $A_t = 3.85\\text{ dpm/g C}$.

**Pertanyaan:**
1. Hitung tetapan laju peluruhan radioaktif ($k$) dari isotop $^{14}\\ce{C}$ dalam satuan $\\text{tahun}^{-1}$!
2. Hitung estimasi umur mutlak dari artefak kayu purbakala tersebut!
3. Jika batas deteksi terendah instrumen pengukuran adalah $A_{\\text{limit}} = 0.10\\text{ dpm/g C}$, berapakah batas usia maksimum sampel yang masih dapat ditentukan umurnya secara andal menggunakan metode penanggalan karbon ini?

---

### Rincian Langkah Penyelesaian:

**Langkah 1: Menghitung Tetapan Laju Peluruhan Radioaktif k**
Karena peluruhan radioaktif mengikuti kinetika orde satu murni:
$$t_{1/2} = \\frac{\\ln 2}{k} \\implies k = \\frac{\\ln 2}{t_{1/2}}$$
$$k = \\frac{0.69315}{5730\\text{ tahun}} = 1.2097 \\times 10^{-4}\\text{ tahun}^{-1}$$

**Langkah 2: Menghitung Umur Sampel Kayu Purbakala**
Gunakan persamaan hukum laju terintegrasi orde satu:
$$\\ln\\left(\\frac{A_0}{A_t}\\right) = k \\cdot t \\implies t = \\frac{1}{k} \\ln\\left(\\frac{A_0}{A_t}\\right)$$
Rasio aktivitas:
$$\\frac{A_0}{A_t} = \\frac{15.30\\text{ dpm/g C}}{3.85\\text{ dpm/g C}} = 3.9740$$
$$\\ln(3.9740) = 1.3798$$
Maka umur kayu purbakala ($t$):
$$t = \\frac{1.3798}{1.2097 \\times 10^{-4}\\text{ tahun}^{-1}} = 11,406\\text{ tahun} \\approx 1.14 \\times 10^4\\text{ tahun}$$

**Langkah 3: Menghitung Batas Usia Maksimum Deteksi**
Dengan aktivitas batas deteksi $A_{\\text{limit}} = 0.10\\text{ dpm/g C}$:
$$\\frac{A_0}{A_{\\text{limit}}} = \\frac{15.30}{0.10} = 153.0$$
$$\\ln(153.0) = 5.0304$$
$$t_{\\text{max}} = \\frac{5.0304}{1.2097 \\times 10^{-4}\\text{ tahun}^{-1}} = 41,584\\text{ tahun} \\approx 4.16 \\times 10^4\\text{ tahun}$$

**Kesimpulan Evaluator Juri:**  
Tetapan peluruhan radioaktif $^{14}\\ce{C}$ adalah $k = 1.21 \\times 10^{-4}\\text{ tahun}^{-1}$. Umur fragmen kayu purbakala tersebut terhitung $11,406\\text{ tahun}$ yang lalu (berasal dari era akhir Pleistosen / awal Holosen). Batas analitis metode penanggalan $^{14}\\ce{C}$ standar adalah sekitar $41.600\\text{ tahun}$.`,
    },
    {
      tag: 'soal-kinetika-metode-laju-awal-kompleks',
      tags: ['soal-osk', 'soal-metode-laju-awal', 'orde-reaksi', 'tetapan-laju', 'waktu-paruh'],
      title: 'Contoh Soal OSK 2: Penentuan Orde Parsial, Tetapan Laju Spesifik, & Laju Awal Reaksi Redoks Halogen',
      summary: 'Analisis data kinetika metode laju awal eksperimental untuk reaksi persulfat-iodida, penentuan tetapan k beserta satuan dimensi, dan kondisi pseudo-orde.',
      content: `### Soal:
Reaksi redoks antara ion peroksodisulfat ($\\ce{S2O8^2-}$) dan ion iodida ($\\ce{I-}$) dalam larutan air:
$$\\ce{S2O8^2-(aq) + 3I-(aq) -> 2SO4^2-(aq) + I3-(aq)}$$
Tabel data kinetika eksperimen penentuan laju awal ($r_0 = -\\frac{d[\\ce{S2O8^2-}]}{dt}$) pada temperatur $25.0^\\circ\\text{C}$:

| Percobaan | $[\\ce{S2O8^2-}]_0\\text{ (M)}$ | $[\\ce{I-}]_0\\text{ (M)}$ | Laju Awal $r_0\\text{ (M/s)}$ |
| :---: | :---: | :---: | :---: |
| 1 | $0.080$ | $0.034$ | $2.20 \\times 10^{-4}$ |
| 2 | $0.080$ | $0.017$ | $1.10 \\times 10^{-4}$ |
| 3 | $0.160$ | $0.017$ | $2.20 \\times 10^{-4}$ |
| 4 | $0.040$ | $0.068$ | $r_{0,4} = ?$ |

**Pertanyaan:**
1. Tentukan orde reaksi parsial terhadap ion $\\ce{S2O8^2-}$ dan ion $\\ce{I-}$, serta tuliskan persamaan hukum laju diferensialnya!
2. Hitung nilai tetapan laju reaksi spesifik ($k$) lengkap dengan satuan dimensinya pada $25.0^\\circ\\text{C}$!
3. Prediksikan laju awal reaksi ($r_{0,4}$) pada Percobaan 4!
4. Jika reaksi dilangsungkan dalam kondisi pseudo-orde di mana $[\\ce{I-}]_0 = 1.50\\text{ M}$ dibuat berlebih terhadap $[\\ce{S2O8^2-}]_0 = 0.0050\\text{ M}$, hitung tetapan laju pseudo-orde satu ($k'$) dan waktu paruh ($t_{1/2}$) penghilangan ion persulfat!

---

### Rincian Langkah Penyelesaian:

**Langkah 1: Menentukan Orde Parsial Reaksi**
Bentuk hukum laju: $r = k [\\ce{S2O8^2-}]^m [\\ce{I-}]^n$.
- Bandingkan Percobaan 1 dan 2 (di mana $[\\ce{S2O8^2-}]_0$ konstan pada $0.080\\text{ M}$):
  $$\\frac{r_{0,1}}{r_{0,2}} = \\left(\\frac{[\\ce{I-}]_{0,1}}{[\\ce{I-}]_{0,2}}\\right)^n \\implies \\frac{2.20 \\times 10^{-4}}{1.10 \\times 10^{-4}} = \\left(\\frac{0.034}{0.017}\\right)^n \\implies 2.0 = (2.0)^n \\implies n = 1$$
- Bandingkan Percobaan 3 dan 2 (di mana $[\\ce{I-}]_0$ konstan pada $0.017\\text{ M}$):
  $$\\frac{r_{0,3}}{r_{0,2}} = \\left(\\frac{[\\ce{S2O8^2-}]_{0,3}}{[\\ce{S2O8^2-}]_{0,2}}\\right)^m \\implies \\frac{2.20 \\times 10^{-4}}{1.10 \\times 10^{-4}} = \\left(\\frac{0.160}{0.080}\\right)^m \\implies 2.0 = (2.0)^m \\implies m = 1$$
Hukum laju reaksi:
$$r = k [\\ce{S2O8^2-}] [\\ce{I-}] \\quad (\\text{Orde total } = 1 + 1 = 2)$$

**Langkah 2: Menghitung Tetapan Laju k**
Gunakan data Percobaan 1:
$$k = \\frac{r_{0,1}}{[\\ce{S2O8^2-}]_{0,1} [\\ce{I-}]_{0,1}} = \\frac{2.20 \\times 10^{-4}\\text{ M}\\cdot\\text{s}^{-1}}{(0.080\\text{ M})(0.034\\text{ M})} = \\frac{2.20 \\times 10^{-4}}{2.72 \\times 10^{-3}} = 8.088 \\times 10^{-2}\\text{ M}^{-1}\\cdot\\text{s}^{-1}$$

**Langkah 3: Menghitung Laju Awal Percobaan 4**
$$r_{0,4} = (8.088 \\times 10^{-2}\\text{ M}^{-1}\\cdot\\text{s}^{-1}) \\times (0.040\\text{ M}) \\times (0.068\\text{ M}) = 2.20 \\times 10^{-4}\\text{ M/s}$$

**Langkah 4: Kinetika Orde Pseudo-Satu**
Karena $[\\ce{I-}]_0 = 1.50\\text{ M} \\gg [\\ce{S2O8^2-}]_0 = 0.0050\\text{ M}$ (rasio $300:1$):
$$k' = k [\\ce{I-}]_0 = (8.088 \\times 10^{-2}\\text{ M}^{-1}\\cdot\\text{s}^{-1})(1.50\\text{ M}) = 0.1213\\text{ s}^{-1}$$
Waktu paruh persulfat:
$$t_{1/2} = \\frac{\\ln 2}{k'} = \\frac{0.69315}{0.1213\\text{ s}^{-1}} = 5.71\\text{ detik}$$

**Kesimpulan Evaluator Juri:**  
Reaksi berorde satu terhadap kedua reaktan ($r = k[\\ce{S2O8^2-}][\\ce{I-}]$) dengan tetapan laju spesifik $k = 8.09 \\times 10^{-2}\\text{ M}^{-1}\\text{s}^{-1}$. Laju awal Percobaan 4 adalah $2.20 \\times 10^{-4}\\text{ M/s}$. Di bawah kondisi pembanjiran reaktan iodida, reaksi tereduksi menjadi orde pseudo-satu dengan waktu paruh sangat singkat $5.71\\text{ detik}$.`,
    },
    {
      tag: 'soal-kinetika-arrhenius-eyring-suhu',
      tags: ['soal-osp', 'soal-arrhenius-eyring', 'persamaan-arrhenius', 'energi-aktivasi', 'persamaan-eyring'],
      title: 'Contoh Soal OSP 3: Analisis Parameter Arrhenius Dua Suhu & Termodinamika Aktivasi Eyring (ΔH‡, ΔS‡, ΔG‡)',
      summary: 'Perhitungan energi aktivasi Ea, faktor frekuensi A, ekstrapolasi tetapan laju pada suhu tubuh, dan penentuan fungsi termodinamika aktivasi TST.',
      content: `### Soal:
Reaksi penyabunan (*saponifikasi*) ester etil asetat oleh larutan natrium hidroksida dalam fasa cair:
$$\\ce{CH3COOCH2CH3(aq) + OH-(aq) -> CH3COO-(aq) + CH3CH2OH(aq)}$$
Data tetapan laju reaksi orde dua diukur pada dua temperatur laboratorium yang berbeda:
- Pada $T_1 = 20.0^\\circ\\text{C}$ ($293.15\\text{ K}$): $k_1 = 4.30 \\times 10^{-2}\\text{ M}^{-1}\\cdot\\text{s}^{-1}$
- Pada $T_2 = 40.0^\\circ\\text{C}$ ($313.15\\text{ K}$): $k_2 = 1.95 \\times 10^{-1}\\text{ M}^{-1}\\cdot\\text{s}^{-1}$

**Pertanyaan:**
1. Hitung energi aktivasi Arrhenius ($E_a$) dalam $\\text{kJ/mol}$ dan faktor pra-eksponensial ($A$) dalam $\\text{M}^{-1}\\cdot\\text{s}^{-1}$!
2. Prediksikan nilai tetapan laju reaksi ($k$) pada temperatur fisiologis tubuh manusia $37.0^\\circ\\text{C}$ ($310.15\\text{ K}$)!
3. Berdasarkan Teori Keadaan Transisi Eyring, hitung nilai entalpi aktivasi ($\\Delta H^\\ddagger$), entropi aktivasi ($\\Delta S^\\ddagger$), dan energi bebas Gibbs aktivasi ($\\Delta G^\\ddagger$) pada temperatur standar $298.15\\text{ K}$! Jelaskan interpretasi fisik dari tanda aljabar $\\Delta S^\\ddagger$!

---

### Rincian Langkah Penyelesaian:

**Langkah 1: Menghitung Energi Aktivasi Ea & Faktor Frekuensi A**
Gunakan persamaan Arrhenius bentuk dua titik suhu:
$$\\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R} \\left(\\frac{T_2 - T_1}{T_1 \\cdot T_2}\\right)$$
Rasio laju:
$$\\frac{k_2}{k_1} = \\frac{0.195}{0.0430} = 4.5349 \\implies \\ln(4.5349) = 1.5118$$
Selisih kebalikan temperatur:
$$\\frac{1}{T_1} - \\frac{1}{T_2} = \\frac{1}{293.15} - \\frac{1}{313.15} = 3.41122 \\times 10^{-3} - 3.19336 \\times 10^{-3} = 2.1786 \\times 10^{-4}\\text{ K}^{-1}$$
Hitung $E_a$:
$$E_a = \\frac{R \\cdot \\ln(k_2 / k_1)}{\\frac{1}{T_1} - \\frac{1}{T_2}} = \\frac{8.314\\text{ J}/(\\text{mol}\\cdot\\text{K}) \\times 1.5118}{2.1786 \\times 10^{-4}\\text{ K}^{-1}} = 57,698\\text{ J/mol} \\approx 57.70\\text{ kJ/mol}$$

Menghitung faktor frekuensi $A$:
$$A = k_1 \\cdot e^{E_a / RT_1} = 0.0430 \\cdot e^{57698 / (8.314 \\times 293.15)} = 0.0430 \\cdot e^{23.673}$$
$$A = 0.0430 \\times (1.910 \\times 10^{10}) = 8.21 \\times 10^8\\text{ M}^{-1}\\cdot\\text{s}^{-1}$$

**Langkah 2: Menghitung Tetapan Laju pada Suhu Tubuh (37.0°C / 310.15 K)**
$$\\ln\\left(\\frac{k_{37}}{k_1}\\right) = -\\frac{E_a}{R} \\left(\\frac{1}{310.15} - \\frac{1}{293.15}\\right) = -\\frac{57698}{8.314} (-1.8698 \\times 10^{-4}) = +1.2976$$
$$k_{37} = k_1 \\cdot e^{1.2976} = 0.0430 \\times 3.6606 = 0.1574\\text{ M}^{-1}\\cdot\\text{s}^{-1} \\approx 0.157\\text{ M}^{-1}\\cdot\\text{s}^{-1}$$

**Langkah 3: Menghitung Parameter Termodinamika Aktivasi Eyring pada 298.15 K**
1. **Entalpi Aktivasi ($\\Delta H^\\ddagger$):**
   Untuk reaksi fasa larutan cair:
   $$\\Delta H^\\ddagger = E_a - RT = 57698\\text{ J/mol} - (8.314 \\times 298.15)\\text{ J/mol} = 57698 - 2479 = 55,219\\text{ J/mol} = 55.22\\text{ kJ/mol}$$
2. **Entropi Aktivasi ($\\Delta S^\\ddagger$):**
   Tetapan laju pada $298.15\\text{ K}$:
   $$k_{298} = A e^{-E_a / RT} = (8.21 \\times 10^8) \\cdot e^{-57698 / 2478.8} = (8.21 \\times 10^8) \\times (7.647 \\times 10^{-11}) = 0.0628\\text{ M}^{-1}\\cdot\\text{s}^{-1}$$
   Dari Persamaan Eyring $k = \\frac{k_B T}{h} e^{\\Delta S^\\ddagger / R} e^{-\\Delta H^\\ddagger / RT}$:
   $$\\frac{k_B T}{h} = \\frac{1.3806 \\times 10^{-23} \\times 298.15}{6.626 \\times 10^{-34}} = 6.212 \\times 10^{12}\\text{ s}^{-1}$$
   $$e^{\\Delta S^\\ddagger / R} = \\frac{k_{298} \\cdot e^{\\Delta H^\\ddagger / RT}}{k_B T / h} = \\frac{0.0628 \\times e^{22.277}}{6.212 \\times 10^{12}} = \\frac{0.0628 \\times (4.729 \\times 10^9)}{6.212 \\times 10^{12}} = 4.781 \\times 10^{-5}$$
   $$\\Delta S^\\ddagger = R \\cdot \\ln(4.781 \\times 10^{-5}) = 8.314 \\times (-9.948) = -82.71\\text{ J}/(\\text{mol}\\cdot\\text{K})$$
3. **Energi Bebas Gibbs Aktivasi ($\\Delta G^\\ddagger$):**
   $$\\Delta G^\\ddagger = \\Delta H^\\ddagger - T\\Delta S^\\ddagger = 55219 - (298.15 \\times (-82.71)) = 55219 + 24660 = 79,879\\text{ J/mol} = 79.88\\text{ kJ/mol}$$

**Interpretasi Nilai Negatif $\\Delta S^\\ddagger$:**
Nilai $\\Delta S^\\ddagger = -82.7\\text{ J}/(\\text{mol}\\cdot\\text{K})$ bernilai negatif signifikan. Hal ini membuktikan secara fisik bahwa keadaan transisi melibatkan mekanisme **asosiatif bimolekular** di mana ion $\\ce{OH-}$ menyerang karbon karbonil membentuk intermediet tetrahedral terkoordinasi kaku $[\\ce{CH3-C(O^-)(OH)(OCH2CH3)}]^\\ddagger$, yang menyebabkan kehilangan kebebasan rotasi/translasi serta penataan dipol molekul air pelarut di sekitar muatan negatif terpusat (*solvation ordering*).

**Kesimpulan Evaluator Juri:**  
Energi aktivasi reaksi adalah $E_a = 57.70\\text{ kJ/mol}$ dengan faktor frekuensi $A = 8.21 \\times 10^8\\text{ M}^{-1}\\text{s}^{-1}$. Tetapan laju pada suhu tubuh adalah $k_{37} = 0.157\\text{ M}^{-1}\\text{s}^{-1}$. Parameter Eyring pada $298\\text{ K}$ bernilai $\\Delta H^\\ddagger = 55.22\\text{ kJ/mol}$, $\\Delta S^\\ddagger = -82.71\\text{ J}/(\\text{mol}\\cdot\\text{K})$, dan $\\Delta G^\\ddagger = 79.88\\text{ kJ/mol}$, memvalidasi pembentukan keadaan transisi siklik/tetrahedral yang sangat terorganisir.`,
    },
    {
      tag: 'soal-kinetika-dekomposisi-ozon-ssa',
      tags: ['soal-osn', 'soal-kinetika-ssa-ozon', 'keadaan-tunak-ssa', 'mekanisme-reaksi', 'kinetika-ssa'],
      title: 'Contoh Soal OSN 4: Penurunan Hukum Laju Dekomposisi Ozon Atmosfer via Steady-State Approximation (SSA)',
      summary: 'Aplikasi ketat Bodenstein SSA pada siklus Chapman atom oksigen radikal, pembuktian orde reaksi negatif inhibitor, dan estimasi energi aktivasi total.',
      content: `### Soal:
Dekomposisi termal dan fotokimia ozon di lapisan stratosfer atmosfer bumi berlangsung menurut persamaan stoikiometri bersih:
$$2\\ce{O3(g) -> 3O2(g)}$$
Mekanisme reaksi elementer yang diajukan oleh Chapman melibatkan zat antara atom radikal oksigen $\\ce{O(g)}$:
- Tahap 1 (Maju): $\\ce{O3(g) -> O2(g) + O(g)} \\quad (k_1)$
- Tahap 1 (Balik): $\\ce{O2(g) + O(g) -> O3(g)} \\quad (k_{-1})$
- Tahap 2: $\\ce{O(g) + O3(g) -> 2O2(g)} \\quad (k_2)$

**Pertanyaan:**
1. Tuliskan persamaan laju pembentukan/penguraian diferensial untuk spesi $\\ce{O3}$ dan zat antara $\\ce{O}$!
2. Terapkan Pendekatan Keadaan Tunak (*Steady-State Approximation* / SSA) pada spesi atom oksigen $[\\ce{O}]$ untuk menurunkan formula aljabar konsentrasinya!
3. Buktikan secara matematis bahwa laju konsumsi gas ozon ($-\\frac{d[\\ce{O3}]}{dt}$) memiliki bentuk:
   $$r = -\\frac{d[\\ce{O3}]}{dt} = \\frac{2 k_1 k_2 [\\ce{O3}]^2}{k_{-1}[\\ce{O2}] + k_2[\\ce{O3}]}$$
4. Tentukan bentuk hukum laju tereduksi dan orde reaksi parsial terhadap masing-masing spesi jika tahap balik reaksi 1 jauh lebih cepat daripada reaksi 2 ($k_{-1}[\\ce{O2}] \\gg k_2[\\ce{O3}]$)!
5. Jika diketahui data energi aktivasi tahap-tahap elementer: $E_{a1} = 105.0\\text{ kJ/mol}$, $E_{a,-1} = 10.0\\text{ kJ/mol}$, dan $E_{a2} = 15.0\\text{ kJ/mol}$, hitung nilai energi aktivasi teramati ($E_{a,\\text{obs}}$) pada kondisi pertanyaan 4!

---

### Rincian Langkah Penyelesaian:

**Langkah 1: Menyusun Persamaan Laju Diferensial Spesi**
Laju konsumsi bersih ozon (muncul pada tahap 1 maju dan tahap 2, terbentuk kembali pada tahap 1 balik):
$$-\\frac{d[\\ce{O3}]}{dt} = k_1 [\\ce{O3}] - k_{-1} [\\ce{O2}][\\ce{O}] + k_2 [\\ce{O}][\\ce{O3}]$$
Laju pembentukan bersih zat antara atom radikal oksigen $[\\ce{O}]$:
$$\\frac{d[\\ce{O}]}{dt} = k_1 [\\ce{O3}] - k_{-1} [\\ce{O2}][\\ce{O}] - k_2 [\\ce{O}][\\ce{O3}]$$

**Langkah 2: Menerapkan Bodenstein SSA pada [O]**
Karena atom radikal $\\ce{O}$ sangat reaktif dan konsentrasinya stasioner rendah:
$$\\frac{d[\\ce{O}]}{dt} = 0 \\implies k_1 [\\ce{O3}] - k_{-1} [\\ce{O2}][\\ce{O}] - k_2 [\\ce{O}][\\ce{O3}] = 0$$
Kumpulkan suku yang mengandung $[\\ce{O}]$:
$$[\\ce{O}] \\left(k_{-1}[\\ce{O2}] + k_2[\\ce{O3}]\\right) = k_1 [\\ce{O3}]$$
$$[\\ce{O}] = \\frac{k_1 [\\ce{O3}]}{k_{-1}[\\ce{O2}] + k_2[\\ce{O3}]}$$

**Langkah 3: Penurunan Hukum Laju Konsumsi Ozon**
Dari persamaan neraca SSA di Langkah 2, perhatikan bahwa:
$$k_1 [\\ce{O3}] - k_{-1} [\\ce{O2}][\\ce{O}] = k_2 [\\ce{O}][\\ce{O3}]$$
Substitusikan kesetaraan ini ke dalam ekspresi $-\\frac{d[\\ce{O3}]}{dt}$:
$$-\\frac{d[\\ce{O3}]}{dt} = \\left(k_2 [\\ce{O}][\\ce{O3}]\\right) + k_2 [\\ce{O}][\\ce{O3}] = 2 k_2 [\\ce{O}][\\ce{O3}]$$
Substitusikan nilai konsentrasi $[\\ce{O}]$ dari Langkah 2:
$$-\\frac{d[\\ce{O3}]}{dt} = 2 k_2 \\left(\\frac{k_1 [\\ce{O3}]}{k_{-1}[\\ce{O2}] + k_2[\\ce{O3}]}\\right) [\\ce{O3}] = \\frac{2 k_1 k_2 [\\ce{O3}]^2}{k_{-1}[\\ce{O2}] + k_2[\\ce{O3}]}$$
*(Terbukti).*

**Langkah 4: Evaluasi Kondisi Batas k_-1[O2] >> k_2[O3]**
Jika laju penggabungan kembali $\\ce{O + O2}$ mendominasi tahap dekomposisi bimolekular:
Penyebut dapat didekati sebagai $k_{-1}[\\ce{O2}] + k_2[\\ce{O3}] \\approx k_{-1}[\\ce{O2}]$:
$$r = \\frac{2 k_1 k_2 [\\ce{O3}]^2}{k_{-1}[\\ce{O2}]} = \\left(\\frac{2 k_1 k_2}{k_{-1}}\\right) \\frac{[\\ce{O3}]^2}{[\\ce{O2}]} = k_{\\text{obs}} [\\ce{O3}]^2 [\\ce{O2}]^{-1}$$
- Orde reaksi terhadap $\\ce{O3}$: $+2$ (Kuadratik)
- Orde reaksi terhadap $\\ce{O2}$: $-1$ (Orde negatif, menunjukkan bahwa gas oksigen bertindak sebagai **inhibitor / penghambat laju** dekomposisi ozon).

**Langkah 5: Menghitung Energi Aktivasi Teramati Ea,obs**
Tetapan laju teramati adalah:
$$k_{\\text{obs}} = \\frac{2 k_1 k_2}{k_{-1}}$$
Mengambil logaritma natural: $\\ln k_{\\text{obs}} = \\ln 2 + \\ln k_1 + \\ln k_2 - \\ln k_{-1}$.
Diferensialkan terhadap temperatur ($R T^2 \\frac{d}{dT}$):
$$E_{a,\\text{obs}} = E_{a1} + E_{a2} - E_{a,-1}$$
Substitusikan data numerik:
$$E_{a,\\text{obs}} = 105.0\\text{ kJ/mol} + 15.0\\text{ kJ/mol} - 10.0\\text{ kJ/mol} = 110.0\\text{ kJ/mol}$$

**Kesimpulan Evaluator Juri:**  
Pendekatan SSA membuktikan hukum laju eksak $r = \\frac{2 k_1 k_2 [\\ce{O3}]^2}{k_{-1}[\\ce{O2}] + k_2[\\ce{O3}]}$. Di bawah batas kinetika stratosfer normal, hukum laju tereduksi menjadi $r = k_{\\text{obs}} [\\ce{O3}]^2 [\\ce{O2}]^{-1}$ dengan orde negatif $-1$ terhadap $\\ce{O2}$ dan energi aktivasi teramati $E_{a,\\text{obs}} = 110.0\\text{ kJ/mol}$.`,
    },
    {
      tag: 'soal-kinetika-lindemann-isomerisasi-siklopropana',
      tags: ['soal-osn', 'soal-lindemann-hinshelwood', 'kinetika-unimolekular', 'keadaan-tunak-ssa', 'tekanan-transisi'],
      title: 'Contoh Soal OSN 5: Mekanisme Lindemann-Hinshelwood untuk Isomerisasi Siklopropana Menjadi Propena',
      summary: 'Penentuan tetapan laju batas tekanan tinggi k_inf, evaluasi tekanan transisi konsentrasi intermediet, dan pemodelan regresi dua resiprokal.',
      content: `### Soal:
Isomerisasi termal fasa gas siklopropana ($\\ce{c-C3H6}$, dilambangkan sebagai $\\ce{A}$) menjadi propena ($\\ce{CH3-CH=CH2}$, produk $\\ce{P}$) adalah reaksi unimolekular klasik:
$$\\ce{c-C3H6(g) -> CH3-CH=CH2(g)}$$
Mekanisme Lindemann-Hinshelwood yang berlangsung adalah:
1. Aktivasi: $\\ce{A + A -> A^* + A} \\quad (k_1)$
2. Deaktivasi: $\\ce{A^* + A -> A + A} \\quad (k_{-1})$
3. Reaksi Unimolekular: $\\ce{A^* -> P} \\quad (k_2)$

Laju reaksi diamati mengikuti hukum laju semu unimolekular: $r = k_{\\text{eff}} [\\ce{A}]$.
Data eksperimen pada temperatur $490^\\circ\\text{C}$ menunjukkan:
- Pada tekanan sangat tinggi ($[\\ce{A}] \\to \\infty$), tetapan laju mendekati nilai batas $k_\\infty = 4.00 \\times 10^{-4}\\text{ s}^{-1}$.
- Pada konsentrasi $[\\ce{A}] = 1.00 \\times 10^{-5}\\text{ M}$, nilai $k_{\\text{eff}}$ terukur persis setengah dari nilai batasnya ($k_{\\text{eff}} = 2.00 \\times 10^{-4}\\text{ s}^{-1}$).

**Pertanyaan:**
1. Turunkan persamaan untuk $k_{\\text{eff}}$ sebagai fungsi dari konsentrasi $[\\ce{A}]$ menggunakan Pendekatan Keadaan Tunak (SSA)!
2. Tunjukkan bagaimana data kinetika dapat diplot secara linear untuk menentukan tetapan elementer $k_1$ dan rasio $k_2 / k_{-1}$!
3. Hitung nilai rasio $k_2 / k_{-1}$ (konsentrasi transisi $[\\ce{A}]_{1/2}$) dan tentukan nilai tetapan aktivasi bimolekular $k_1$ (lengkap dengan satuan dimensinya)!
4. Hitung nilai tetapan laju efektif $k_{\\text{eff}}$ pada tekanan rendah di mana konsentrasi $[\\ce{A}] = 2.00 \\times 10^{-6}\\text{ M}$!

---

### Rincian Langkah Penyelesaian:

**Langkah 1: Penurunan k_eff via SSA pada [A*]**
Laju pembentukan produk $\\ce{P}$:
$$r = \\frac{d[\\ce{P}]}{dt} = k_2 [\\ce{A^*}]$$
Terapkan SSA pada molekul siklopropana tereksitasi $[\\ce{A^*}]$:
$$\\frac{d[\\ce{A^*}]}{dt} = k_1 [\\ce{A}]^2 - k_{-1} [\\ce{A^*}][\\ce{A}] - k_2 [\\ce{A^*}] = 0$$
$$[\\ce{A^*}] (k_{-1}[\\ce{A}] + k_2) = k_1 [\\ce{A}]^2 \\implies [\\ce{A^*}] = \\frac{k_1 [\\ce{A}]^2}{k_{-1}[\\ce{A}] + k_2}$$
Substitusikan ke persamaan laju:
$$r = \\frac{k_1 k_2 [\\ce{A}]^2}{k_{-1}[\\ce{A}] + k_2}$$
Karena laju didefinisikan sebagai $r = k_{\\text{eff}} [\\ce{A}]$:
$$k_{\\text{eff}} = \\frac{r}{[\\ce{A}]} = \\frac{k_1 k_2 [\\ce{A}]}{k_{-1}[\\ce{A}] + k_2}$$

**Langkah 2: Linierisasi Plot Lindemann**
Ambil kebalikan (resiprokal) dari $k_{\\text{eff}}$:
$$\\frac{1}{k_{\\text{eff}}} = \\frac{k_{-1}[\\ce{A}] + k_2}{k_1 k_2 [\\ce{A}]} = \\frac{k_{-1}[\\ce{A}]}{k_1 k_2 [\\ce{A}]} + \\frac{k_2}{k_1 k_2 [\\ce{A}]} = \\frac{k_{-1}}{k_1 k_2} + \\frac{1}{k_1} \\left(\\frac{1}{[\\ce{A}]}\\right)$$
Karena $k_\\infty = \\frac{k_1 k_2}{k_{-1}}$, maka:
$$\\frac{1}{k_{\\text{eff}}} = \\frac{1}{k_\\infty} + \\frac{1}{k_1} \\left(\\frac{1}{[\\ce{A}]}\\right)$$
Kurva $\\frac{1}{k_{\\text{eff}}}$ terhadap $\\frac{1}{[\\ce{A}]}$ berupa garis lurus dengan:
- Intersep $y = \\frac{1}{k_\\infty}$
- Kemiringan (*slope*) $m = \\frac{1}{k_1}$

**Langkah 3: Menghitung Rasio k2/k_-1 dan Tetapan k1**
Kondisi saat $k_{\\text{eff}} = \\frac{1}{2} k_\\infty$:
$$k_{\\text{eff}} = \\frac{k_1 k_2 [\\ce{A}]}{k_{-1}[\\ce{A}] + k_2} = \\frac{1}{2} \\left(\\frac{k_1 k_2}{k_{-1}}\\right)$$
$$2 k_{-1} [\\ce{A}] = k_{-1} [\\ce{A}] + k_2 \\implies k_{-1} [\\ce{A}]_{1/2} = k_2$$
$$[\\ce{A}]_{1/2} = \\frac{k_2}{k_{-1}} = 1.00 \\times 10^{-5}\\text{ M}$$
Rasio tetapan elementer:
$$\\frac{k_2}{k_{-1}} = 1.00 \\times 10^{-5}\\text{ M}$$

Sekarang tentukan $k_1$:
$$k_\\infty = \\frac{k_1 k_2}{k_{-1}} = k_1 \\left(\\frac{k_2}{k_{-1}}\\right) = k_1 \\cdot [\\ce{A}]_{1/2}$$
$$4.00 \\times 10^{-4}\\text{ s}^{-1} = k_1 \\times (1.00 \\times 10^{-5}\\text{ M})$$
$$k_1 = \\frac{4.00 \\times 10^{-4}\\text{ s}^{-1}}{1.00 \\times 10^{-5}\\text{ M}} = 40.0\\text{ M}^{-1}\\cdot\\text{s}^{-1}$$

**Langkah 4: Menghitung k_eff pada Konsentrasi Rendah ([A] = 2.00 x 10^-6 M)**
Gunakan formula $k_{\\text{eff}}$:
$$k_{\\text{eff}} = \\frac{k_1 [\\ce{A}]}{1 + \\frac{k_{-1}}{k_2}[\\ce{A}]} = \\frac{(40.0\\text{ M}^{-1}\\text{s}^{-1}) \\times (2.00 \\times 10^{-6}\\text{ M})}{1 + \\frac{2.00 \\times 10^{-6}\\text{ M}}{1.00 \\times 10^{-5}\\text{ M}}}$$
$$k_{\\text{eff}} = \\frac{8.00 \\times 10^{-5}\\text{ s}^{-1}}{1 + 0.20} = \\frac{8.00 \\times 10^{-5}}{1.20} = 6.667 \\times 10^{-5}\\text{ s}^{-1} \\approx 6.67 \\times 10^{-5}\\text{ s}^{-1}$$

**Kesimpulan Evaluator Juri:**  
Hukum laju terbukti mengalami transisi dari orde satu pada tekanan tinggi menuju orde dua pada tekanan rendah sesuai model Lindemann-Hinshelwood. Parameter kinetika elementer bernilai $k_\\infty = 4.00 \\times 10^{-4}\\text{ s}^{-1}$, konsentrasi transisi $[\\ce{A}]_{1/2} = \\frac{k_2}{k_{-1}} = 1.00 \\times 10^{-5}\\text{ M}$, dan tetapan aktivasi tumbukan $k_1 = 40.0\\text{ M}^{-1}\\text{s}^{-1}$. Pada konsentrasi rendah $2.00 \\times 10^{-6}\\text{ M}$, nilai $k_{\\text{eff}}$ turun drastis menjadi $6.67 \\times 10^{-5}\\text{ s}^{-1}$ (penurunan laju sebesar $83.3\\%$ dibanding batas tekanan tinggi).`,
    },
  ],
};
