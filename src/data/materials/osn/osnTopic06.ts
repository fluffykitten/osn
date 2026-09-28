/**
 * osnTopic06.ts
 * Topik 6: Kinetika Kimia & Mekanisme Reaksi
 * Jenjang: OSN / IChO
 * Standar Pedagogis: Tone Opsi A (Arsitektur 5 Lapis, Mental Model Hook, Scaffolded Logic, GitHub Callouts, & Checkpoint Quizzes)
 */

import type { MaterialItem } from '../../materialsData.ts';
import { CHECKPOINTS_TOPIC_OSN_06 } from '../../checkpoints/checkpointBankTopicOsn06.ts';

const RAW_OSN_TOPIC_6: MaterialItem = {
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
      content: `### 1. Intuitive Mental Model Hook: Speedometer Mobil Balap F1 & Arloji Laju Kimiawi
Bayangkan sebuah mobil balap Formula 1 yang melaju kencang di sirkuit. Jarum speedometer digital menunjukkan angka kecepatan instan pada setiap milidetik lintasan ($v = ds/dt$). Pada detik pertama mobil berakselerasi eksplosif, namun mendekati garis finis saat bahan bakar menipis, laju konsumsi bensin melambat secara bertahap.

Kinetika kimia adalah speedometer dunia molekuler. Kita tidak sekadar bertanya "apakah reaksi ini dapat terjadi?" (ranah termodinamika $\\Delta G$), melainkan "seberapa cepat partikel bertransformasi dan lintasan tikungan mikroskopis mana yang dilaluinya?". Laju reaksi diferensial mengukur kecepatan hilangnya reaktan atau kemunculan produk pada setiap detik instan, diskalakan secara presisi terhadap koefisien stoikiometri molekulnya.

---

### 2. Scaffolded Step-by-Step Logic: Stoikiometri Laju & Hukum Laju Diferensial

#### Langkah 1: Definisi Laju Reaksi Diferensial Stoikiometri
Untuk reaksi kimia umum homogen:
$$a\\ce{A} + b\\ce{B} -> c\\ce{C} + d\\ce{D}$$
Laju reaksi terdefinisi ($r$) adalah besaran intensif positif yang menyatakan perubahan derajat kemajuan reaksi per satuan volume per satuan waktu ($t$):
$$r = -\\frac{1}{a}\\frac{d[\\ce{A}]}{dt} = -\\frac{1}{b}\\frac{d[\\ce{B}]}{dt} = +\\frac{1}{c}\\frac{d[\\ce{C}]}{dt} = +\\frac{1}{d}\\frac{d[\\ce{D}]}{dt}$$
- Tanda **negatif** wajib disematkan pada reaktan karena konsentrasinya berkurang terhadap waktu ($d[\\ce{A}]/dt < 0$).
- Pembagian dengan koefisien stoikiometri ($1/a, 1/b, \\dots$) memastikan bahwa nilai numerik laju reaksi terdefinisi bernilai identik, tidak peduli spesi mana yang dipantau oleh detektor laboratorium.

#### Langkah 2: Formulasi Hukum Laju Reaksi Diferensial
Secara empiris, laju reaksi sering kali berkorelasi langsung dengan konsentrasi molar reaktan yang dipangkatkan dengan orde reaksi tertentu:
$$r = k [\\ce{A}]^m [\\ce{B}]^n$$
di mana:
- $k$: Tetapan laju reaksi spesifik (*rate constant*). Nilai $k$ bersifat konstan pada temperatur tertentu, namun sangat sensitif terhadap suhu dan katalisator. Nilai $k$ sepenuhnya **independen terhadap konsentrasi reaktan**.
- $m, n$: Orde reaksi parsial terhadap reaktan $\\ce{A}$ dan $\\ce{B}$. Orde reaksi dapat berupa bilangan bulat ($0, 1, 2$), pecahan ($1/2, 3/2$), atau bilangan negatif.
- $n_{\\text{tot}} = m + n$: Orde reaksi total keseluruhan.

#### Langkah 3: Dimensi dan Satuan Tetapan Laju $k$
Karena satuan laju reaksi selalu $\\text{M} \\cdot \\text{s}^{-1}$ atau $\\text{mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$:
$$\\text{Satuan } k = \\frac{\\text{M}\\cdot\\text{s}^{-1}}{\\text{M}^{n_{\\text{tot}}}} = \\mathbf{\\text{M}^{1 - n_{\\text{tot}}} \\cdot \\text{s}^{-1}} = \\mathbf{(\\text{mol/L})^{1 - n_{\\text{tot}}} \\cdot \\text{s}^{-1}}$$
- Orde 0: $\\text{M} \\cdot \\text{s}^{-1}$
- Orde 1: $\\text{s}^{-1}$
- Orde 2: $\\text{M}^{-1} \\cdot \\text{s}^{-1} = \\text{L}\\cdot\\text{mol}^{-1}\\cdot\\text{s}^{-1}$
- Orde 3: $\\text{M}^{-2} \\cdot \\text{s}^{-1} = \\text{L}^2\\cdot\\text{mol}^{-2}\\cdot\\text{s}^{-1}$

#### Langkah 4: Penentuan Orde Parsial via Metode Laju Awal (Initial Rates Method)
Pada saat awal reaksi ($t = 0$), konsentrasi produk masih nol sehingga reaksi balik (*reverse reaction*) belum terjadi. Dengan mengisolasi salah satu reaktan:
$$\\frac{r_{0,2}}{r_{0,1}} = \\left(\\frac{[\\ce{A}]_{0,2}}{[\\ce{A}]_{0,1}}\\right)^m \\left(\\frac{[\\ce{B}]_{0,2}}{[\\ce{B}]_{0,1}}\\right)^n$$
Jika $[\\ce{B}]_0$ dijaga konstan:
$$\\frac{r_{0,2}}{r_{0,1}} = \\left(\\frac{[\\ce{A}]_{0,2}}{[\\ce{A}]_{0,1}}\\right)^m \\implies m = \\frac{\\log(r_{0,2} / r_{0,1})}{\\log([\\ce{A}]_{0,2} / [\\ce{A}]_{0,1})}$$

---

### 3. High-Contrast Visual Matrix: Diagnostik Orde Reaksi & Satuan Tetapan Kinetika

| Orde Reaksi Total ($n$) | Persamaan Hukum Laju Diferensial | Satuan Dimensi Tetapan $k$ | Dampak Penggandaan $[\\ce{A}]$ ($2\\times$) |
| :---: | :--- | :--- | :--- |
| **Orde 0** | $r = k$ | $\\text{mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$ ($\text{M}\\cdot\\text{s}^{-1}$) | Laju tidak berubah sama sekali ($1\\times$) |
| **Orde 1** | $r = k[\\ce{A}]$ | $\\text{s}^{-1}$ | Laju meningkat dua kali lipat ($2\\times$) |
| **Orde 2** | $r = k[\\ce{A}]^2$ atau $r = k[\\ce{A}][\\ce{B}]$ | $\\text{L}\\cdot\\text{mol}^{-1}\\cdot\\text{s}^{-1}$ ($\text{M}^{-1}\\cdot\\text{s}^{-1}$) | Laju meningkat empat kali lipat ($4\\times$) |
| **Orde Pecahan ($1/2$)** | $r = k[\\ce{A}]^{1/2}$ | $\\text{M}^{1/2}\\cdot\\text{s}^{-1}$ | Laju meningkat $\\sqrt{2} \\approx 1.41\\times$ lipat |
| **Orde Negatif ($-1$)** | $r = k[\\ce{A}]^{-1}$ | $\\text{M}^2\\cdot\\text{s}^{-1}$ | Laju anjlok menjadi setengahnya ($0.5\\times$, inhibitor!) |

---

### 4. Official GitHub Callouts

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Mitos Koefisien Stoikiometri Menjadi Orde
> "Untuk reaksi $2\\ce{NO} + \\ce{O2} \\to 2\\ce{NO2}$, hukum lajunya pasti $r = k[\\ce{NO}]^2[\\ce{O2}]$ karena koefisiennya 2 dan 1."
> **Koreksi Fatal:** Kesetaraan antara orde reaksi dan koefisien stoikiometri **HANYA BERLAKU** untuk reaksi elementer tunggal! Pada reaksi stoikiometri keseluruhan, orde reaksi adalah besaran eksperimen empiris murni. Banyak reaksi dengan stoikiometri $1:1$ ternyata memiliki orde pecahan atau orde nol terhadap salah satu reaktan. Jangan pernah menyimpulkan hukum laju dari koefisien reaksi setara sebelum memeriksa data eksperimen!

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Teknik Identifikasi Cepat dari Satuan k
> Jika soal olimpiade tidak menyebutkan orde reaksi secara eksplisit namun memberikan nilai numerik $k$ beserta satuannya:
> - Temukan pangkat molaritas $\\text{M}^p$.
> - Orde reaksi total langsung diperoleh dari formula inversi:
>   $$\\mathbf{n_{\\text{tot}} = 1 - p}$$
> - *Contoh:* Jika satuan $k = \\text{M}^{-0.5}\\cdot\\text{s}^{-1}$, maka $p = -0.5 \\implies n_{\\text{tot}} = 1 - (-0.5) = \\mathbf{1.5}$. Anda menghemat waktu analitis hingga 2 menit!`,
      keyFormulas: [
        { name: 'Laju Reaksi Stoikiometri', formula: 'r = -\\frac{1}{a}\\frac{d[A]}{dt} = +\\frac{1}{c}\\frac{d[C]}{dt}' },
        { name: 'Hukum Laju Diferensial', formula: 'r = k [A]^m [B]^n' },
        { name: 'Satuan Universal Tetapan k', formula: '\\text{Satuan } k = \\text{M}^{1 - n_{\\text{tot}}} \\cdot \\text{s}^{-1}' },
      ],
    },
    {
      tag: 'prasyarat-hukum-laju-terintegrasi-waktu-paruh',
      tags: ['laju-terintegrasi', 'orde-nol', 'orde-satu', 'orde-dua', 'orde-pseudo-satu', 'waktu-paruh', 'grafik-linierisasi-kinetika'],
      title: 'Prasyarat 2: Hukum Laju Terintegrasi (Orde 0, 1, 2, & Pseudo-Orde), Waktu Paruh ($t_{1/2}$), & Linierisasi Grafik',
      summary: 'Penurunan kalkulus integral konsentrasi terhadap waktu, formulasi waktu paruh analitis, dan kriteria penentuan orde via regresi linear kurva kinetika.',
      content: `### 1. Intuitive Mental Model Hook: Jam Pasir Radioaktif & Peluruhan Eksponensial
Bayangkan sebuah jam pasir kaca. Pada jam pasir biasa di meja Anda, pasir mengalir turun lewat corong sempit dengan kecepatan konstan tanpa peduli berapa banyak pasir yang tersisa di tabung atas. Ini adalah model fisik sempurna dari **Kinetika Orde Nol**: laju alir independen dari konsentrasi ($r = k$).

Namun, bayangkan jam pasir ajaib di mana lubang corongnya mengecil sebanding dengan berkurangnya tumpukan pasir di atasnya. Semakin sedikit pasir tersisa, semakin lambat ia menetes. Ini adalah hakikat dari **Kinetika Orde Satu**: peluruhan eksponensial alamiah seperti isotop radioaktif $^{14}\\ce{C}$. Butuh waktu yang persis sama ($t_{1/2}$) untuk menghabiskan separuh dari 1.000 atom maupun separuh dari 10 atom!

---

### 2. Scaffolded Step-by-Step Logic: Penurunan Kalkulus Integral Orde Reaksi

#### Kasus 1: Reaksi Kinetika Orde Nol ($r = -\\frac{d[\\ce{A}]}{dt} = k$)
1. **Pemisahan Variabel & Integrasi:**
   $$\\int_{[\\ce{A}]_0}^{[\\ce{A}]_t} d[\\ce{A}] = -k \\int_0^t dt \\implies \\mathbf{[\\ce{A}]_t = [\\ce{A}]_0 - kt}$$
2. **Plot Linear:** Kurva $[\\ce{A}]_t$ versus $t$ berupa garis lurus dengan kemiringan (*slope*) $-k$ dan intersep $[\\ce{A}]_0$.
3. **Waktu Paruh ($t_{1/2}$):** Saat $[\\ce{A}]_{t_{1/2}} = \\frac{1}{2}[\\ce{A}]_0$:
   $$\\frac{1}{2}[\\ce{A}]_0 = [\\ce{A}]_0 - k t_{1/2} \\implies \\mathbf{t_{1/2} = \\frac{[\\ce{A}]_0}{2k}}$$
   *Karakteristik:* Waktu paruh orde nol berbanding lurus dengan konsentrasi awal analit.

#### Kasus 2: Reaksi Kinetika Orde Satu ($r = -\\frac{d[\\ce{A}]}{dt} = k[\\ce{A}]$)
1. **Pemisahan Variabel & Integrasi:**
   $$\\int_{[\\ce{A}]_0}^{[\\ce{A}]_t} \\frac{d[\\ce{A}]}{[\\ce{A}]} = -k \\int_0^t dt \\implies \\mathbf{\\ln\\left(\\frac{[\\ce{A}]_t}{[\\ce{A}]_0}\\right) = -kt \\iff [\\ce{A}]_t = [\\ce{A}]_0 e^{-kt}}$$
2. **Plot Linear:** Kurva $\\ln[\\ce{A}]_t$ versus $t$ berupa garis lurus dengan kemiringan $-k$ dan intersep $\\ln[\\ce{A}]_0$.
3. **Waktu Paruh ($t_{1/2}$):**
   $$\\ln\\left(\\frac{1/2 [\\ce{A}]_0}{[\\ce{A}]_0}\\right) = -k t_{1/2} \\implies \\ln\\left(\\frac{1}{2}\\right) = -k t_{1/2} \\implies \\mathbf{t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.69315}{k}}$$
   *Sifat Mutlak Orde Satu:* Waktu paruh **sama sekali tidak bergantung pada konsentrasi awal $[\\ce{A}]_0$**!

#### Kasus 3: Reaksi Kinetika Orde Dua ($r = -\\frac{d[\\ce{A}]}{dt} = k[\\ce{A}]^2$)
1. **Pemisahan Variabel & Integrasi:**
   $$-\\int_{[\\ce{A}]_0}^{[\\ce{A}]_t} \\frac{d[\\ce{A}]}{[\\ce{A}]^2} = k \\int_0^t dt \\implies \\left[\\frac{1}{[\\ce{A}]}\\right]_{[\\ce{A}]_0}^{[\\ce{A}]_t} = kt \\implies \\mathbf{\\frac{1}{[\\ce{A}]_t} = \\frac{1}{[\\ce{A}]_0} + kt}$$
2. **Plot Linear:** Kurva $\\frac{1}{[\\ce{A}]_t}$ versus $t$ menghasilkan garis lurus dengan kemiringan **positif** $+k$ dan intersep $\\frac{1}{[\\ce{A}]_0}$.
3. **Waktu Paruh ($t_{1/2}$):**
   $$\\frac{1}{1/2 [\\ce{A}]_0} - \\frac{1}{[\\ce{A}]_0} = k t_{1/2} \\implies \\frac{2}{[\\ce{A}]_0} - \\frac{1}{[\\ce{A}]_0} = k t_{1/2} \\implies \\mathbf{t_{1/2} = \\frac{1}{k [\\ce{A}]_0}}$$
   *Karakteristik:* Waktu paruh berbanding terbalik dengan konsentrasi awal. Setiap paruh waktu berikutnya berlangsung dua kali lebih lama dari tahap sebelumnya ($t_{1/2}^{(2)} = 2 t_{1/2}^{(1)}$).

#### Kasus 4: Kinetika Orde Pseudo-Satu via Metode Isolasi Pembanjiran (Flooding)
Untuk reaksi bimolekular umum $r = k[\\ce{A}][\\ce{B}]$:
Jika reaktan $\\ce{B}$ ditambahkan dalam jumlah ekses raksasa ($[\\ce{B}]_0 \\gg [\\ce{A}]_0$, rasio $> 100:1$):
Konsentrasi $[\\ce{B}]$ bernilai konstan sepanjang durasi reaksi ($[\\ce{B}]_t \\approx [\\ce{B}]_0$).
$$r = k' [\\ce{A}] \\quad \\text{di mana } k' = k [\\ce{B}]_0$$
Kinetika teramati menyederhanakan diri menjadi orde pseudo-satu. Plot $\\ln[\\ce{A}]$ terhadap waktu menghasilkan garis lurus dengan kemiringan $-k'$. Melalui variasi konsentrasi $[\\ce{B}]_0$, tetapan laju murni $k$ dapat dihitung secara akurat.

---

### 3. High-Contrast Visual Matrix: Perbandingan Matriks Kinetika Terintegrasi

| Orde Reaksi | Persamaan Terintegrasi | Sumbu $y$ vs Sumbu $x$ Plot Linear | Kemiringan (*Slope*) | Nilai Intersep | Waktu Paruh ($t_{1/2}$) |
| :---: | :--- | :--- | :---: | :---: | :--- |
| **0** | $[\\ce{A}]_t = [\\ce{A}]_0 - kt$ | $[\\ce{A}]_t$ vs $t$ | $-k$ | $[\\ce{A}]_0$ | $t_{1/2} = \\frac{[\\ce{A}]_0}{2k}$ |
| **1** | $\\ln[\\ce{A}]_t = \\ln[\\ce{A}]_0 - kt$ | $\\ln[\\ce{A}]_t$ vs $t$ | $-k$ | $\\ln[\\ce{A}]_0$ | $t_{1/2} = \\frac{\\ln 2}{k} \\approx \\frac{0.693}{k}$ |
| **2** | $\\frac{1}{[\\ce{A}]_t} = \\frac{1}{[\\ce{A}]_0} + kt$ | $\\frac{1}{[\\ce{A}]_t}$ vs $t$ | **$+k$** | $\\frac{1}{[\\ce{A}]_0}$ | $t_{1/2} = \\frac{1}{k[\\ce{A}]_0}$ |
| **$n$ umum** | $\\frac{1}{[\\ce{A}]_t^{n-1}} = \\frac{1}{[\\ce{A}]_0^{n-1}} + (n-1)kt$ | $[\\ce{A}]_t^{1-n}$ vs $t$ | $(n-1)k$ | $[\\ce{A}]_0^{1-n}$ | $t_{1/2} \\propto [\\ce{A}]_0^{1-n}$ |

---

### 4. Official GitHub Callouts

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Pola Perubahan Waktu Paruh Beruntun
> Perhatikan pola waktu paruh berurutan ($t_{1/2}^{(1)}, t_{1/2}^{(2)}, t_{1/2}^{(3)}$) untuk membedakan orde reaksi secara instan:
> - **Orde 0:** Waktu paruh memendek secara linier ($40\\text{ s} \\to 20\\text{ s} \\to 10\\text{ s}$).
> - **Orde 1:** Waktu paruh **konstan mutlak** ($40\\text{ s} \\to 40\\text{ s} \\to 40\\text{ s}$).
> - **Orde 2:** Waktu paruh **melipat ganda** ($40\\text{ s} \\to 80\\text{ s} \\to 160\\text{ s}$).
> Jangan sampai tertukar antara kemiringan positif pada grafik orde dua ($+k$) dengan kemiringan negatif pada orde nol dan satu!

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Rumus Super Fraksi Sisa Orde Satu
> Pada kinetika orde satu dan peluruhan radioaktif inti, konsentrasi sisa setelah $N$ kali paruh waktu adalah:
> $$[\\ce{A}]_t = [\\ce{A}]_0 \\left(\\frac{1}{2}\\right)^N \\quad \\text{di mana } N = \\frac{t}{t_{1/2}}$$
> - Setelah $1 \\times t_{1/2}$: Sisa $50\\%$ (bereaksi $50\\%$)
> - Setelah $2 \\times t_{1/2}$: Sisa $25\\%$ (bereaksi $75\\%$)
> - Setelah $3 \\times t_{1/2}$: Sisa $12.5\\%$ (bereaksi $87.5\\%$)
> - Setelah $10 \\times t_{1/2}$: Sisa kurang dari $0.1\\%$ ($99.9\\%$ telah terurai sempurna).`,
      keyFormulas: [
        { name: 'Terintegrasi Orde Nol', formula: '[A]_t = [A]_0 - kt, \\quad t_{1/2} = \\frac{[A]_0}{2k}' },
        { name: 'Terintegrasi Orde Satu', formula: '\\ln\\frac{[A]_t}{[A]_0} = -kt, \\quad t_{1/2} = \\frac{\\ln 2}{k}' },
        { name: 'Terintegrasi Orde Dua', formula: '\\frac{1}{[A]_t} = \\frac{1}{[A]_0} + kt, \\quad t_{1/2} = \\frac{1}{k[A]_0}' },
        { name: 'Ketergantungan Waktu Paruh Universal', formula: 't_{1/2} \\propto [A]_0^{1-n}' },
      ],
    },
    {
      tag: 'prasyarat-teori-tumbukan-keadaan-transisi',
      tags: ['teori-tumbukan', 'teori-keadaan-transisi', 'persamaan-eyring', 'entalpi-aktivasi', 'entropi-aktivasi'],
      title: 'Prasyarat 3: Teori Tumbukan Gas (Collision Theory) & Teori Keadaan Transisi (Eyring-Polanyi TST)',
      summary: 'Model mikroskopis frekuensi tumbukan, faktor sterik P, pembentukan kompleks teraktivasi berenergi tinggi, serta termodinamika aktivasi Eyring.',
      content: `### 1. Intuitive Mental Model Hook: Meja Bilyar Molekuler & Tanjakan Roller Coaster Eyring
Bayangkan sebuah meja bilyar tempat bola-bola meluncur acak dengan kecepatan supersonik. Apakah setiap kali dua bola bertabrakan akan tercipta bola baru? Tentu tidak! Pertama, bola harus bertabrakan dengan energi kinetik yang cukup keras agar lapisan kulit luarnya pecah (energi ambang aktivasi $E_a$). Kedua, bola harus bertubrukan pada sudut sudut lubang yang tepat (*orientasi sterik*).

Teori Keadaan Transisi Henry Eyring membawa kita ke puncak tanjakan *roller coaster*. Sebelum meluncur bebas ke lembah produk, gerbong molekul harus didorong mendaki bukit penghalang energi bebas ($\\Delta G^\\ddagger$). Di puncak tertinggi bukit tersebut berada spesi kuasi-molekul berumur sepersekian femtidetik ($~10^{-13}\\text{ s}$) bernama **Kompleks Teraktivasi ($[\\ce{X}]^\\ddagger$)**: ikatan lama sedang meregang putus, dan ikatan baru sedang bersemi terbentuk!

---

### 2. Scaffolded Step-by-Step Logic: Teori Tumbukan vs Teori Keadaan Transisi (TST)

#### Langkah 1: Teori Tumbukan Gas Kinetik (Collision Theory)
Laju reaksi bimolekular fasa gas dinyatakan sebagai perkalian tiga faktor probabilitas fisik:
$$k = Z_{AB} \\cdot \\rho \\cdot e^{-E_a / RT}$$
1. **Frekuensi Tumbukan Murni ($Z_{AB}$):**
   $$Z_{AB} = \\sigma_{AB} \\sqrt{\\frac{8 k_B T}{\\pi \\mu}}$$
   di mana $\\sigma_{AB} = \\pi d_{AB}^2$ adalah penampang lintang tumbukan (*cross-section*), dan $\\mu = \\frac{m_A m_B}{m_A + m_B}$ adalah massa tereduksi. Nilai $Z_{AB}$ sebanding dengan $\\sqrt{T}$.
2. **Faktor Peluang Orientasi Sterik ($\\rho$):**
   Fraksi probabilitas spasial di mana molekul bertumbukan dengan orientasi orbital simetri yang tepat. Untuk molekul bulat sederhana seperti atom gas mulia $\\rho \\approx 1$, tetapi untuk makromolekul organik kompleks bernilai $\\rho \\ll 10^{-3}$.
3. **Faktor Eksponensial Energi Boltzmann ($e^{-E_a / RT}$):**
   Fraksi molekul yang memiliki energi kinetik relatif melampaui energi aktivasi minimal ($E \\ge E_a$).

#### Langkah 2: Teori Keadaan Transisi (Transition State Theory / Eyring-Polanyi)
Eyring dan Polanyi mempostulatkan kesetimbangan kuasi-termodinamika antara reaktan dan kompleks teraktivasi $[\\ce{AB}]^\\ddagger$:
$$\\ce{A + B <=> [AB]^\\ddagger -> Produk}$$
$$K^\\ddagger = \\frac{[\\ce{AB}^\\ddagger]}{[\\ce{A}][\\ce{B}]}$$
Laju pembentukan produk adalah laju dekomposisi ikatan vibrasi keadaan transisi menuju produk dengan frekuensi fundamental universal $\\nu = \\frac{k_B T}{h}$:
$$r = \\nu [\\ce{AB}^\\ddagger] = \\left(\\frac{k_B T}{h}\\right) K^\\ddagger [\\ce{A}][\\ce{B}]$$
Maka tetapan laju spesifik Eyring diturunkan secara eksak:
$$k = \\frac{k_B T}{h} K^\\ddagger = \\mathbf{\\frac{k_B T}{h} e^{-\\Delta G^\\ddagger / RT} = \\frac{k_B T}{h} e^{\\Delta S^\\ddagger / R} e^{-\\Delta H^\\ddagger / RT}}$$
di mana:
- $k_B$: Tetapan Boltzmann ($1.3806 \\times 10^{-23}\\text{ J/K}$)
- $h$: Tetapan Planck ($6.626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$)
- $\\frac{k_B T}{h}$: Faktor frekuensi universal ($6.21 \\times 10^{12}\\text{ s}^{-1}$ pada $298.15\\text{ K}$)
- $\\Delta H^\\ddagger$: Entalpi aktivasi (kalor pemutusan/peregangan ikatan)
- $\\Delta S^\\ddagger$: Entropi aktivasi (derajat kebebasan geometri keadaan transisi)
- $\\Delta G^\\ddagger = \\Delta H^\\ddagger - T\\Delta S^\\ddagger$: Energi bebas Gibbs aktivasi

#### Langkah 3: Interkoneksi Termodinamika Eyring dengan Parameter Arrhenius
Berdasarkan definisi matematis energi aktivasi Arrhenius $E_a = RT^2 \\frac{d\\ln k}{dT}$:
- **Untuk Reaksi dalam Larutan Cair (Fasa Terkondensasi):**
  $$E_a = \\Delta H^\\ddagger + RT \\iff \\mathbf{\\Delta H^\\ddagger = E_a - RT}$$
  $$A = e \\frac{k_B T}{h} e^{\\Delta S^\\ddagger / R} \\approx \\frac{k_B T}{h} e^{(\\Delta S^\\ddagger / R) + 1}$$
- **Untuk Reaksi Fasa Gas Bimolekular:**
  $$E_a = \\Delta H^\\ddagger + 2RT \\iff \\mathbf{\\Delta H^\\ddagger = E_a - 2RT}$$
  $$A = e^2 \\frac{k_B T}{h} e^{\\Delta S^\\ddagger / R}$$

---

### 3. High-Contrast Visual Matrix: Interpretasi Fisis Nilai Entropi Aktivasi (ΔS‡)

| Tanda Aljabar $\\Delta S^\\ddagger$ | Besaran Kuantitatif | Interpretasi Mikroskopis Geometri Kompleks | Contoh Reaksi Kimia |
| :--- | :--- | :--- | :--- |
| **$\\Delta S^\\ddagger < 0$ (Negatif Besar)** | $\\Delta S^\\ddagger < -40\\text{ J}/(\\text{mol}\\cdot\\text{K})$ | **Asosiasi Bimolekular Kaku:** Dua molekul bebas bergabung membentuk satu cincin terkoordinasi kaku; hilangnya translasi/rotasi & penataan pelarut | Sikloadisi Diels-Alder, Hidrolisis Ester ($S_N2$), Substitusi Anorganik Asosiatif ($A$) |
| **$\\Delta S^\\ddagger \\approx 0$ (Mendekati Nol)** | $-10 < \\Delta S^\\ddagger < +10$ | **Reorganisasi Elektronik Murni:** Geometri keadaan transisi tidak banyak berubah dibanding reaktan awal | Transfer elektron bola luar (*outer-sphere Marcus ET*), Isomerisasi geometri sederhana |
| **$\\Delta S^\\ddagger > 0$ (Positif Besar)** | $\\Delta S^\\ddagger > +40\\text{ J}/(\\text{mol}\\cdot\\text{K})$ | **Disosiasi Peregangan Ikatan:** Ikatan kimia melemah dan meregang putus, melepaskan fragmen partikel bebas & pelepasan molekul pelarut | Dekomposisi unimolekular, Substitusi Nukleofilik $S_N1$, Substitusi Disosiatif Logam ($D$) |

---

### 4. Official GitHub Callouts

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Perbedaan Nilai Koreksi RT Fasa Gas vs Larutan
> Hati-hati saat mengonversi nilai energi aktivasi Arrhenius ($E_a$) menjadi entalpi aktivasi Eyring ($\\Delta H^\\ddagger$):
> - Jangan gunakan formula tunggal untuk semua fasa zat!
> - Untuk reaksi fasa gas bimolekular: $\\Delta H^\\ddagger = E_a - 2RT$.
> - Untuk reaksi dalam larutan cair terkondensasi: $\\Delta H^\\ddagger = E_a - RT$.
> Kesalahan memilih faktor koreksi $RT$ ini sering kali memicu kesalahan berantai pada penghitungan entropi aktivasi $\\Delta S^\\ddagger$ di soal uraian OSN/IChO.

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Plot Linear Persamaan Eyring
> Persamaan Eyring dapat dilinierisasi menjadi grafik garis lurus:
> $$\\ln\\left(\\frac{k}{T}\\right) = \\ln\\left(\\frac{k_B}{h}\\right) + \\frac{\\Delta S^\\ddagger}{R} - \\frac{\\Delta H^\\ddagger}{R}\\left(\\frac{1}{T}\\right)$$
> - Sumbu $y$: $\\ln(k/T)$
> - Sumbu $x$: $1/T$
> - **Kemiringan (*slope*):** $m = -\\frac{\\Delta H^\\ddagger}{R} \\implies \\Delta H^\\ddagger = -R \\cdot m$.
> - **Intersep $y$:** $c = \\ln\\left(\\frac{k_B}{h}\\right) + \\frac{\\Delta S^\\ddagger}{R} \\implies \\Delta S^\\ddagger = R\\left(c - \\ln(k_B / h)\\right)$ di mana $\\ln(k_B/h) \\approx 23.76$.`,
      keyFormulas: [
        { name: 'Persamaan Eyring TST', formula: 'k = \\frac{k_B T}{h} e^{\\Delta S^\\ddagger / R} e^{-\\Delta H^\\ddagger / RT}' },
        { name: 'Relasi Ea Larutan Cair', formula: 'E_a = \\Delta H^\\ddagger + RT' },
        { name: 'Relasi Ea Gas Bimolekular', formula: 'E_a = \\Delta H^\\ddagger + 2RT' },
        { name: 'Plot Linear Eyring', formula: '\\ln(k/T) = \\left[\\ln(k_B/h) + \\frac{\\Delta S^\\ddagger}{R}\\right] - \\frac{\\Delta H^\\ddagger}{R}\\left(\\frac{1}{T}\\right)' },
      ],
    },
  ],
  core_concepts: [
    {
      tag: 'konsep-arrhenius-ketergantungan-suhu',
      tags: ['persamaan-arrhenius', 'energi-aktivasi', 'faktor-frekuensi', 'arrhenius-dua-suhu', 'grafik-arrhenius'],
      title: 'Konsep Inti 1: Persamaan Arrhenius, Energi Aktivasi Eksperimental, & Plot Arrhenius',
      summary: 'Kuantifikasi pengaruh temperatur terhadap tetapan laju k, energi ambang batas reaksi, dan penentuan parameter kinetika via grafik linear 1/T.',
      content: `### 1. Intuitive Mental Model Hook: Termometer Eksponensial Arrhenius & Api Pembakaran
Pernahkah Anda bertanya mengapa sepotong kayu kering dapat disimpan bertahun-tahun di udara terbuka pada suhu kamar tanpa terbakar, namun begitu terkena percikan api korek bersuhu $500^\\circ\\text{C}$, kayu tersebut langsung menyala membara dalam hitungan detik?

Svante Arrhenius (1889) memecahkan misteri ini melalui hukum ketergantungan eksponensial laju terhadap temperatur. Kenaikan temperatur tidak sekadar menghangatkan molekul; ia mengubah secara drastis distribusi energi kinetik Maxwell-Boltzmann. Bahkan kenaikan temperatur yang relatif kecil ($10^\\circ\\text{C}$) sanggup menggandakan populasi partikel yang energinya mampu melompati pagar pembatas energi aktivasi ($E_a$).

---

### 2. Scaffolded Step-by-Step Logic: Persamaan Arrhenius & Pemodelan Garis Lurus

#### Langkah 1: Formulasi Eksponensial Arrhenius
$$k = A e^{-E_a / RT}$$
di mana:
- $k$: Tetapan laju reaksi spesifik.
- $A$: Faktor pra-eksponensial atau faktor frekuensi (satuan sama persis dengan satuan $k$), mencerminkan frekuensi total tumbukan dengan orientasi tumpang-tindih orbital yang tepat.
- $E_a$: Energi aktivasi empiris (satuan $\\text{J/mol}$ atau $\\text{kJ/mol}$), yaitu energi kinetik ambang batas minimum yang harus dimiliki molekul pereaksi agar tumbukan dapat memutus ikatan reaktan.
- $R$: Tetapan gas universal ($8.314\\text{ J}/(\\text{mol}\\cdot\\text{K})$).
- $T$: Temperatur termodinamika mutlak dalam Kelvin ($K$).

#### Langkah 2: Bentuk Linierisasi Plot Arrhenius
Ambil logaritma natural ($\\ln$) pada kedua ruas persamaan:
$$\\ln k = \\ln\\left(A e^{-E_a / RT}\\right) = \\ln A - \\frac{E_a}{RT}$$
$$\\mathbf{\\ln k = -\\frac{E_a}{R}\\left(\\frac{1}{T}\\right) + \\ln A}$$
Bentuk ini identik dengan persamaan garis lurus $y = mx + c$:
- Sumbu vertikal ($y$): $\\ln k$
- Sumbu horizontal ($x$): $\\frac{1}{T}$ (dalam satuan $\\text{K}^{-1}$)
- **Kemiringan kurva (*slope* $m$):** $m = -\\frac{E_a}{R} \\implies \\mathbf{E_a = -m \\cdot R}$
- **Titik potong sumbu vertikal (*intercept* $c$):** $c = \\ln A \\implies \\mathbf{A = e^c}$

#### Langkah 3: Formulasi Dua Temperatur Arrhenius
Jika tetapan laju reaksi diukur pada dua temperatur berbeda $T_1$ dan $T_2$ dengan asumsi $E_a$ dan $A$ konstan:
$$\\ln k_1 = \\ln A - \\frac{E_a}{R T_1}$$
$$\\ln k_2 = \\ln A - \\frac{E_a}{R T_2}$$
Kurangkan persamaan kedua dengan persamaan pertama:
$$\\ln k_2 - \\ln k_1 = -\\frac{E_a}{R T_2} - \\left(-\\frac{E_a}{R T_1}\\right)$$
$$\\mathbf{\\ln\\left(\\frac{k_2}{k_1}\\right) = -\\frac{E_a}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right) = \\frac{E_a}{R}\\left(\\frac{T_2 - T_1}{T_1 T_2}\\right)}$$

---

### 3. High-Contrast Visual Matrix: Analisis Sensitivitas Laju Reaksi Terhadap Energi Aktivasi (Ea)

| Energi Aktivasi ($E_a$) | Nilai Faktor Boltzmann ($e^{-E_a/RT}$) pada 300 K | Rasio Laju Saat Suhu Naik 10 K ($k_{310} / k_{300}$) | Kecepatan Reaksi Teramati | Sensitivitas Terhadap Fluktuasi Suhu |
| :---: | :---: | :---: | :---: | :--- |
| **$20\\text{ kJ/mol}$** | $3.3 \times 10^{-4}$ | $\\approx 1.30\\times$ | Sangat Cepat (dalam milidetik) | Rendah |
| **$50\\text{ kJ/mol}$** | $1.9 \times 10^{-9}$ | $\\approx 1.96\\times \\approx 2.0\\times$ | Sedang (reaksi lab tipikal) | **Standar Kaidah Dua Kali Lipat** |
| **$100\\text{ kJ/mol}$**| $3.9 \times 10^{-18}$ | $\\approx 3.73\\times$ | Lambat (butuh pemanasan) | Tinggi |
| **$150\\text{ kJ/mol}$**| $7.5 \times 10^{-27}$ | $\\approx 7.08\\times$ | Sangat Lambat (stabil pada 300 K) | Sangat Ekstrem (meledak saat dipanaskan) |

---

### 4. Official GitHub Callouts

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Satuan Suhu Celcius vs Kelvin pada Arrhenius
> Jangan pernah memasukkan temperatur dalam derajat Celcius ($^\\circ\\text{C}$) ke dalam rumus $\\ln(k_2/k_1)$!
> - Selalu konversi suhu ke Kelvin ($T = ^\\circ\\text{C} + 273.15$).
> - Perhatikan bahwa rasio kelvin $\\frac{T_2 - T_1}{T_1 T_2}$ sangat sensitif terhadap pembulatan angka desimal. Gunakan minimal 4 sampai 5 angka penting pada nilai kebalikan temperatur ($1/T$) untuk mencegah pergeseran nilai $E_a$ hingga puluhan persen.

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Kaidah Penggandaan Suhu Kamar
> Untuk reaksi kimia dengan energi aktivasi sedang ($E_a \\approx 50 - 55\\text{ kJ/mol}$):
> $$\\frac{k_{T+10}}{k_T} \\approx 2.0$$
> Setiap kenaikan temperatur sebesar $10^\\circ\\text{C}$, laju reaksi melipat ganda sekitar 2 kali lipat. Jika temperatur dinaikkan sebesar $\\Delta T = 40^\\circ\\text{C}$, laju reaksi melonjak sekitar $2^{40/10} = 2^4 = 16\\text{ kali lipat}$!`,
      keyFormulas: [
        { name: 'Persamaan Arrhenius Eksponensial', formula: 'k = A e^{-E_a / RT}' },
        { name: 'Bentuk Linear Plot Arrhenius', formula: '\\ln k = -\\frac{E_a}{R}\\left(\\frac{1}{T}\\right) + \\ln A' },
        { name: 'Bentuk Dua Titik Temperatur', formula: '\\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R}\\left(\\frac{T_2 - T_1}{T_1 T_2}\\right)' },
      ],
    },
    {
      tag: 'konsep-mekanisme-rds-pra-kesetimbangan',
      tags: ['mekanisme-reaksi', 'tahap-elementer', 'tahap-penentu-laju-rds', 'pendekatan-pra-kesetimbangan', 'molekularitas'],
      title: 'Konsep Inti 2: Tahapan Reaksi Elementer, Tahap Penentu Laju (RDS), & Pendekatan Pra-Kesetimbangan',
      summary: 'Korelasi molekularitas tahap elementer, penentuan hukum laju dari tahap paling lambat (RDS), dan eliminasi zat antara via pra-kesetimbangan dinamis cepat.',
      content: `### 1. Intuitive Mental Model Hook: Jalur Perakitan Pabrik & Stasiun Paling Lambat (Leher Botol)
Bayangkan sebuah jalur perakitan mobil di pabrik otomotif modern. Stasiun 1 memasang rangka bodi dalam waktu 2 menit. Stasiun 2 mengecat bodi dengan robotik cepat dalam 3 menit. Namun Stasiun 3 memasang mesin dan transmisi secara manual dan membutuhkan waktu 45 menit! Stasiun 4 memasang roda dalam 2 menit.

Berapa jumlah mobil yang dapat keluar dari pabrik setiap jamnya? Jawabannya ditentukan secara mutlak oleh Stasiun 3! Tidak peduli seberapa cepat stasiun pengecatan bekerja, mobil akan menumpuk antre di depan Stasiun 3. Inilah hakikat dari **Tahap Penentu Laju (*Rate-Determining Step* / RDS)**: tahap elementer paling lambat dengan energi aktivasi tertinggi yang menjadi leher botol (*bottleneck*) bagi keseluruhan transformasi kimiawi.

---

### 2. Scaffolded Step-by-Step Logic: Reaksi Elementer & Pra-Kesetimbangan Cepat

#### Langkah 1: Karakteristik Khusus Reaksi Elementer
Reaksi elementer adalah peristiwa mikroskopis di mana reaktan bertransformasi langsung menjadi produk dalam satu benturan molekuler tunggal tanpa melalui intermediet terisolasi:
- **Unimolekular (Molekularitas 1):** $\\ce{A -> P} \\implies r = k[\\ce{A}]$ (Orde 1)
- **Bimolekular (Molekularitas 2):** $\\ce{A + B -> P} \\implies r = k[\\ce{A}][\\ce{B}]$ (Orde 2)
- **Termolekular (Molekularitas 3):** $\\ce{A + B + C -> P} \\implies r = k[\\ce{A}][\\ce{B}][\\ce{C}]$ (Orde 3, sangat langka karena probabilitas tumbukan simultan tiga benda sangat kecil).
$$\\mathbf{\\text{Hanya pada tahap elementer, orde reaksi parsial sama persis dengan koefisien stoikiometrinya!}}$$

#### Langkah 2: Prinsip Tahap Penentu Laju (RDS)
Jika mekanisme reaksi terdiri atas beberapa tahap berurutan dan salah satu tahap berlangsung jauh lebih lambat dibanding tahap lainnya:
$$r_{\\text{keseluruhan}} = r_{\\text{RDS}}$$
Hukum laju reaksi keseluruhan diturunkan langsung dari tahap RDS tersebut. Namun, jika tahap RDS melibatkan **zat antara (*intermediate*)**, konsentrasi zat antara tersebut tidak boleh muncul di dalam hukum laju akhir dan harus dieliminasi menjadi konsentrasi reaktan stabil!

#### Langkah 3: Pendekatan Pra-Kesetimbangan Cepat (Rapid Pre-Equilibrium)
Bila tahap lambat didahului oleh satu tahap bolak-balik yang berlangsung sangat cepat:
- **Tahap 1 (Cepat, Reversibel):** $\\ce{A + B <=> C} \\quad (k_1, k_{-1})$
- **Tahap 2 (Lambat, RDS):** $\\ce{C + D -> P} \\quad (k_2)$

1. **Hukum Laju RDS:**
   $$r = k_2 [\\ce{C}][\\ce{D}]$$
2. **Kondisi Kesetimbangan Tahap 1:**
   Karena tahap 1 mencapai kesetimbangan kuasi-sempurna ($r_{\\text{fwd}} = r_{\\text{rev}}$):
   $$k_1 [\\ce{A}][\\ce{B}] = k_{-1} [\\ce{C}] \\implies [\\ce{C}] = \\frac{k_1}{k_{-1}} [\\ce{A}][\\ce{B}] = K_1 [\\ce{A}][\\ce{B}]$$
3. **Substitusi Konsentrasi Zat Antara:**
   $$r = k_2 \\left(\\frac{k_1}{k_{-1}} [\\ce{A}][\\ce{B}]\\right) [\\ce{D}] = \\mathbf{\\left(\\frac{k_1 k_2}{k_{-1}}\\right) [\\ce{A}][\\ce{B}][\\ce{D}] = k_{\\text{obs}} [\\ce{A}][\\ce{B}][\\ce{D}]}$$

#### Langkah 4: Energi Aktivasi Efektif Teramati ($E_{a,\\text{obs}}$)
Dari tetapan gabungan $k_{\\text{obs}} = \\frac{k_1 k_2}{k_{-1}}$:
$$\\ln k_{\\text{obs}} = \\ln k_1 + \\ln k_2 - \\ln k_{-1}$$
Diferensialkan terhadap temperatur ($R T^2 \\frac{d}{dT}$):
$$E_{a,\\text{obs}} = E_{a1} + E_{a2} - E_{a,-1} = (E_{a1} - E_{a,-1}) + E_{a2} = \\mathbf{\\Delta H_1^\\circ + E_{a2}}$$
Jika tahap pra-kesetimbangan bersifat eksotermik kuat ($\\Delta H_1^\\circ \\ll 0$) sedemikian sehingga $|\\Delta H_1^\\circ| > E_{a2}$, nilai $E_{a,\\text{obs}}$ menjadi **negatif**!

---

### 3. High-Contrast Visual Matrix: Diagnostik Pendekatan Kinetika Multi-Tahap

| Kriteria Pembanding | Pendekatan Pra-Kesetimbangan Cepat | Pendekatan Keadaan Tunak (SSA) |
| :--- | :--- | :--- |
| **Syarat Keberlakuan Mekanistik** | Tahap awal harus bolak-balik sangat cepat ($k_{-1} \\gg k_2$) | Berlaku universal untuk rasio $k_{-1}$ dan $k_2$ berapa pun |
| **Perlakuan Terhadap Zat Antara** | Dianggap mencapai kesetimbangan termodinamika ($r_{\\text{fwd}} = r_{\\text{rev}}$) | Laju akumulasi bersih didekati nol ($d[I]/dt = 0$) |
| **Kompleksitas Aljabar** | Relatif ringkas dan sederhana | Menghasilkan bentuk pecahan rasional |
| **Rentang Validitas** | Terbatas (gagal jika $k_2$ sebanding dengan $k_{-1}$) | Sangat luas (mencakup kinetika Lindemann & Enzim) |

---

### 4. Official GitHub Callouts

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Zat Antara di Dalam Hukum Laju Akhir
> Menuliskan hukum laju reaksi akhir yang masih memuat konsentrasi zat antara (seperti $r = k_2[\\ce{NO3}][\\ce{NO}]$) adalah kesalahan mutlak dan diganjar nilai nol pada koreksi olimpiade!
> **Aturan Wajib:** Hukum laju reaksi empiris hanya boleh dinyatakan dalam spesi-spesi stabil yang konsentrasinya dapat diukur dan disiapkan secara makroskopis di laboratorium (reaktan awal, produk, katalis, atau ion pelarut $\\ce{H+}/\\ce{OH-}$). Seluruh zat antara reaktif wajib dieliminasi melalui aljabar pra-kesetimbangan atau SSA.

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Membaca Energi Aktivasi Negatif
> Jika dalam soal eksperimen ditemukan bahwa kenaikan temperatur menyebabkan laju reaksi melambat ($k$ mengecil $\\implies E_a < 0$):
> - Jangan panik mengira terjadi galat eksperimen!
> - Ini adalah bukti tak terbantahkan adanya **tahap pra-kesetimbangan eksotermik** ($\\Delta H_1^\\circ < 0$).
> - Kenaikan suhu menggeser kesetimbangan tahap 1 ke kiri secara masif, menguras populasi zat antara reaktif sehingga laju keseluruhan anjlok.`,
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
      content: `### 1. Intuitive Mental Model Hook: Pipa Bocor Seimbang Bodenstein & Tangga Tekanan Lindemann
Bayangkan sebuah ember air yang memiliki kran pengisi di bagian atas dan lubang bocor di bagian dasar. Pada menit-menit awal kran dibuka, ketinggian air naik sedikit. Namun dengan sangat cepat, debit air yang mengalir keluar dari lubang dasar persis menyamai debit air yang masuk dari kran. Ketinggian air di ember menjadi konstan dan diam stabil, meskipun air terus mengalir deras melewatinya!

Max Bodenstein (1913) memformulasikan prinsip brilian ini untuk kinetika kimia: **Pendekatan Keadaan Tunak (*Steady-State Approximation* / SSA)**. Zat antara reaktif ($I$) berenergi sangat tinggi diproduksi dan sekaligus dikonsumsi seketika dengan kecepatan yang persis berimbang, sehingga konsentrasinya di dalam bejana reaksi berada pada tingkat stasioner yang konstan ($d[I]/dt \\approx 0$).

---

### 2. Scaffolded Step-by-Step Logic: Prinsip Bodenstein SSA & Kinetika Lindemann

#### Langkah 1: Prinsip Keadaan Tunak Bodenstein (SSA)
Untuk setiap zat antara reaktif berumur pendek ($[\\text{Intermediate}]$):
$$\\mathbf{\\frac{d[\\text{Intermediate}]}{dt} = 0 \\iff \\sum r_{\\text{pembentukan}} = \\sum r_{\\text{konsumsi}}}$$
Prinsip ini memungkinkan kita mengubah persamaan diferensial kinetika yang rumit menjadi persamaan aljabar linier sederhana untuk menyelesaikan konsentrasi zat antara.

#### Langkah 2: Mekanisme Lindemann-Hinshelwood untuk Dekomposisi Unimolekular Gas
Bagaimana suatu molekul gas $\\ce{A}$ dapat memperoleh energi aktivasi untuk bereaksi tanpa bantuan reaktan lain? Lindemann mempostulatkan transfer energi melalui tumbukan dengan molekul penyangga $\\ce{M}$ (bisa molekul $\\ce{A}$ lain atau gas inert):
1. **Aktivasi Tumbukan:** $\\ce{A + M -> A^* + M} \\quad (k_1)$
2. **Deaktivasi Tumbukan:** $\\ce{A^* + M -> A + M} \\quad (k_{-1})$
3. **Dekomposisi Unimolekular:** $\\ce{A^* -> Produk} \\quad (k_2)$

Laju pembentukan produk bersih:
$$r = \\frac{d[\\text{Produk}]}{dt} = k_2 [\\ce{A^*}]$$
Terapkan Bodenstein SSA pada molekul tereksitasi $[\\ce{A^*}]$:
$$\\frac{d[\\ce{A^*}]}{dt} = k_1 [\\ce{A}][\\ce{M}] - k_{-1} [\\ce{A^*}][\\ce{M}] - k_2 [\\ce{A^*}] = 0$$
Faktorkan $[\\ce{A^*}]$:
$$[\\ce{A^*}] \\left(k_{-1}[\\ce{M}] + k_2\\right) = k_1 [\\ce{A}][\\ce{M}] \\implies \\mathbf{[\\ce{A^*}] = \\frac{k_1 [\\ce{A}][\\ce{M}]}{k_{-1}[\\ce{M}] + k_2}}$$
Substitusikan $[\\ce{A^*}]$ ke dalam persamaan laju produk:
$$\\mathbf{r = \\frac{k_1 k_2 [\\ce{A}][\\ce{M}]}{k_{-1}[\\ce{M}] + k_2} = k_{\\text{uni}} [\\ce{A}]}$$
di mana $k_{\\text{uni}} = \\frac{k_1 k_2 [\\ce{M}]}{k_{-1}[\\ce{M}] + k_2}$ adalah tetapan laju semu unimolekular.

#### Langkah 3: Dua Kasus Batas Tekanan (Transisi Orde Reaksi Lindemann)
1. **Batas Tekanan Sangat Tinggi ($P \\to \\infty$, Konsentrasi $[\\ce{M}] \\to \\infty$):**
   Laju deaktivasi tumbukan jauh melampaui dekomposisi ($k_{-1}[\\ce{M}] \\gg k_2$). Suku $k_2$ pada penyebut dapat diabaikan:
   $$k_{\\text{uni}} \\approx \\frac{k_1 k_2 [\\ce{M}]}{k_{-1}[\\ce{M}]} = \\frac{k_1 k_2}{k_{-1}} = \\mathbf{k_\\infty} \\implies \\mathbf{r = k_\\infty [\\ce{A}]} \\quad (\\mathbf{\\text{Orde Satu Murni}})$$
2. **Batas Tekanan Sangat Rendah ($P \\to 0$, Konsentrasi $[\\ce{M}] \\to 0$):**
   Molekul tereksitasi terurai seketika sebelum sempat terdeaktivasi ($k_2 \\gg k_{-1}[\\ce{M}]$). Suku $k_{-1}[\\ce{M}]$ diabaikan:
   $$k_{\\text{uni}} \\approx \\frac{k_1 k_2 [\\ce{M}]}{k_2} = k_1 [\\ce{M}] \\implies \\mathbf{r = k_1 [\\ce{A}][\\ce{M}]} \\quad (\\mathbf{\\text{Orde Dua Total}})$$

#### Langkah 4: Linierisasi Plot Lindemann (Regresi Dua Resiprokal)
Ambil kebalikan dari $k_{\\text{uni}}$:
$$\\frac{1}{k_{\\text{uni}}} = \\frac{k_{-1}[\\ce{M}] + k_2}{k_1 k_2 [\\ce{M}]} = \\frac{k_{-1}}{k_1 k_2} + \\frac{1}{k_1}\\left(\\frac{1}{[\\ce{M}]}\\right)$$
$$\\mathbf{\\frac{1}{k_{\\text{uni}}} = \\frac{1}{k_\\infty} + \\frac{1}{k_1}\\left(\\frac{1}{[\\ce{M}]}\\right)}$$
Plot $\\frac{1}{k_{\\text{uni}}}$ versus $\\frac{1}{[\\ce{M}]}$ menghasilkan garis lurus:
- **Intersep sumbu vertikal ($y$):** $c = \\frac{1}{k_\\infty} = \\frac{k_{-1}}{k_1 k_2}$
- **Kemiringan (*slope* $m$):** $m = \\frac{1}{k_1} \\implies k_1 = \\frac{1}{m}$

---

### 3. High-Contrast Visual Matrix: Karakteristik Batas Tekanan Mekanisme Lindemann

| Parameter Evaluasi | Batas Tekanan Rendah ($P \\to 0$) | Batas Tekanan Tinggi ($P \\to \\infty$) |
| :--- | :--- | :--- |
| **Kondisi Relatif Laju** | $k_2 \\gg k_{-1}[\\ce{M}]$ (dekomposisi mendominasi) | $k_{-1}[\\ce{M}] \\gg k_2$ (deaktivasi mendominasi) |
| **Tahap Penentu Laju (RDS)** | Tahap 1: Aktivasi Tumbukan Bimolekular | Tahap 3: Dekomposisi Unimolekular Intermediet |
| **Bentuk Hukum Laju** | $r = k_1 [\\ce{A}][\\ce{M}]$ | $r = k_\\infty [\\ce{A}]$ |
| **Orde Reaksi Teramati** | **Orde Dua Total** (Orde 1 thd $\\ce{A}$, Orde 1 thd $\\ce{M}$) | **Orde Satu Murni** (Independen dari gas penyangga $\\ce{M}$) |
| **Dampak Penambahan Gas Inert** | Mempercepat laju reaksi secara linier | Tidak memengaruhi laju reaksi sama sekali |

---

### 4. Official GitHub Callouts

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Arti Hakiki Rumus d[I]/dt = 0
> Jangan pernah mengartikan asumsi Bodenstein $d[I]/dt = 0$ sebagai "konsentrasi zat antara sama dengan nol ($[I] = 0$)".
> Jika $[I] = 0$, maka tidak ada reaksi kimia yang berlangsung sama sekali! Nilai $[I]$ selalu berupa bilangan positif kecil yang stasioner. Asumsi $d[I]/dt = 0$ semata-mata menyatakan bahwa laju perubahan konsentrasi zat antara bernilai amat kecil dibandingkan laju konsumsi reaktan utama ($|d[I]/dt| \\ll |d[\\ce{A}]/dt|$).

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Menentukan Konsentrasi Transisi [M]1/2
> Tekanan transisi atau konsentrasi transisi $[\\ce{M}]_{1/2}$ adalah konsentrasi gas saat tetapan semu terukur bernilai persis setengah dari nilai batasnya ($k_{\\text{uni}} = \\frac{1}{2} k_\\infty$):
> $$\\frac{k_1 k_2 [\\ce{M}]_{1/2}}{k_{-1}[\\ce{M}]_{1/2} + k_2} = \\frac{1}{2}\\left(\\frac{k_1 k_2}{k_{-1}}\\right) \\implies \\mathbf{[\\ce{M}]_{1/2} = \\frac{k_2}{k_{-1}}}$$
> Anda dapat menentukan rasio tetapan elementer $k_2 / k_{-1}$ secara instan hanya dengan membaca konsentrasi transisi pada kurva eksperimen!`,
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
      content: `### 1. Intuitive Mental Model Hook: Efek Domino Kembang Api & Petasan Percabangan Radikal
Bayangkan barisan kartu domino yang disusun berjejer. Ketika Anda menjentik kartu pertama (*inisiasi*), kartu tersebut menabrak kartu kedua, kartu kedua menabrak kartu ketiga, dan seterusnya (*propagasi rantai*). Satu jentikan jari kecil memicu keruntuhan jutaan kartu secara mandiri.

Lalu apa yang terjadi jika satu kartu domino didesain untuk menabrak DUA kartu sekaligus di depannya? Jumlah kartu yang roboh melonjak eksponensial: 1 menjadi 2, 2 menjadi 4, 4 menjadi 8, hingga dalam hitungan mikrodetik seluruh ruangan meledak! Ini adalah prinsip **Percabangan Rantai (*Branching Chains*)** pada pembakaran campuran hidrogen dan oksigen yang memicu ledakan dahsyat di mesin roket.

---

### 2. Scaffolded Step-by-Step Logic: Empat Tahap Rantai & Mekanisme H2-Br2

#### Langkah 1: Anatomi Empat Tahap Reaksi Rantai Radikal
1. **Inisiasi (Initiation):** Pembentukan spesi radikal bebas pertama dari molekul kovalen stabil melalui energi termal atau radiasi foton fotokimia ($h\\nu$):
   $$\\ce{Br2 + M -> 2Br^\\bullet + M} \\quad (k_1)$$
2. **Propagasi (Propagation):** Siklus tertutup di mana radikal aktif mengonsumsi reaktan menghasilkan molekul produk sekaligus meregenerasi radikal aktif baru (jumlah netto radikal konstan):
   $$\\ce{Br^\\bullet + H2 -> HBr + H^\\bullet} \\quad (k_2)$$
   $$\\ce{H^\\bullet + Br2 -> HBr + Br^\\bullet} \\quad (k_3)$$
3. **Inhibisi / Retardasi (Inhibition):** Molekul produk yang terbentuk bereaksi dengan radikal, membalikkan laju akumulasi produk (*product inhibition*):
   $$\\ce{H^\\bullet + HBr -> H2 + Br^\\bullet} \\quad (k_4)$$
4. **Terminasi (Termination):** Pemusnahan pembawa rantai melalui rekombinasi dua radikal menjadi molekul netral stabil atau tumbukan dinding reaktor:
   $$\\ce{2Br^\\bullet + M -> Br2 + M} \\quad (k_5)$$

#### Langkah 2: Penurunan Hukum Laju Reaksi H2 - Br2 via SSA Simultan
Laju pembentukan gas hidrogen bromida:
$$\\frac{d[\\ce{HBr}]}{dt} = k_2 [\\ce{Br^\\bullet}][\\ce{H2}] + k_3 [\\ce{H^\\bullet}][\\ce{Br2}] - k_4 [\\ce{H^\\bullet}][\\ce{HBr}]$$
Terapkan SSA pada kedua radikal bebas intermediet:
- **Neraca Radikal $[\\ce{H^\\bullet}]$:**
  $$\\frac{d[\\ce{H^\\bullet}]}{dt} = k_2 [\\ce{Br^\\bullet}][\\ce{H2}] - k_3 [\\ce{H^\\bullet}][\\ce{Br2}] - k_4 [\\ce{H^\\bullet}][\\ce{HBr}] = 0$$
  $$k_3 [\\ce{H^\\bullet}][\\ce{Br2}] + k_4 [\\ce{H^\\bullet}][\\ce{HBr}] = k_2 [\\ce{Br^\\bullet}][\\ce{H2}]$$
- **Neraca Radikal $[\\ce{Br^\\bullet}]$:**
  $$\\frac{d[\\ce{Br^\\bullet}]}{dt} = 2k_1 [\\ce{Br2}][\\ce{M}] - k_2 [\\ce{Br^\\bullet}][\\ce{H2}] + k_3 [\\ce{H^\\bullet}][\\ce{Br2}] + k_4 [\\ce{H^\\bullet}][\\ce{HBr}] - 2k_5 [\\ce{Br^\\bullet}]^2 [\\ce{M}] = 0$$
Jumlahkan kedua persamaan neraca radikal untuk mengeliminasi suku propagasi:
$$2k_1 [\\ce{Br2}][\\ce{M}] - 2k_5 [\\ce{Br^\\bullet}]^2 [\\ce{M}] = 0 \\implies [\\ce{Br^\\bullet}]^2 = \\frac{k_1}{k_5} [\\ce{Br2}]$$
$$\\mathbf{[\\ce{Br^\\bullet}] = \\sqrt{\\frac{k_1}{k_5}} [\\ce{Br2}]^{1/2}}$$
Substitusikan $[\\ce{Br^\\bullet}]$ dan neraca $[\\ce{H^\\bullet}]$ ke dalam persamaan laju pembentukan $\\ce{HBr}$:
$$\\frac{d[\\ce{HBr}]}{dt} = 2 k_3 [\\ce{H^\\bullet}][\\ce{Br2}]$$
Dari neraca $[\\ce{H^\\bullet}]$:
$$[\\ce{H^\\bullet}] = \\frac{k_2 [\\ce{Br^\\bullet}][\\ce{H2}]}{k_3 [\\ce{Br2}] + k_4 [\\ce{HBr}]} = \\frac{k_2 \\sqrt{k_1/k_5} [\\ce{H2}][\\ce{Br2}]^{1/2}}{k_3 [\\ce{Br2}] + k_4 [\\ce{HBr}]}$$
Substitusikan kembali menghasilkan hukum laju analitis Bodenstein-Lind:
$$\\mathbf{r = \\frac{d[\\ce{HBr}]}{dt} = \\frac{2 k_2 \\sqrt{k_1 / k_5} [\\ce{H2}][\\ce{Br2}]^{1/2}}{1 + \\frac{k_4 [\\ce{HBr}]}{k_3 [\\ce{Br2}]}} = \\frac{k [\\ce{H2}][\\ce{Br2}]^{1/2}}{1 + m' \\frac{[\\ce{HBr}]}{[\\ce{Br2}]}}}$$

#### Langkah 3: Percabangan Rantai & Semenanjung Ledakan (Explosion Peninsula)
Pada reaksi gas $\\ce{2H2 + O2 -> 2H2O}$, terjadi tahap percabangan rantai:
$$\\ce{H^\\bullet + O2 -> OH^\\bullet + O^{\\bullet\\bullet}} \\quad (1 \\text{ radikal} \\to 2 \\text{ radikal baru})$$
$$\\ce{O^{\\bullet\\bullet} + H2 -> OH^\\bullet + H^\\bullet} \\quad (1 \\text{ radikal} \\to 2 \\text{ radikal baru})$$
Laju pertumbuhan populasi radikal: $\\frac{d[R]}{dt} = r_{\\text{inisiasi}} + (f - g)[R]$
- $f$: Koefisien probabilitas percabangan rantai.
- $g$: Koefisien probabilitas terminasi rantai.
- **Kondisi Kritis Ledakan:** Jika $f > g$, laju menjadi tak terkendali ($[R] \\to \\infty$), memicu **ledakan rantai (*chain branching explosion*)** seketika. Tiga batas tekanan ledakan membentuk kurva semenanjung ledakan khas (*explosion peninsula*).

---

### 3. High-Contrast Visual Matrix: Tiga Batas Tekanan Semenanjung Ledakan H2 - O2

| Batas Tekanan | Rezim Tekanan Gas | Mekanisme Terminasi Dominan | Status Reaksi Kinetika |
| :---: | :--- | :--- | :--- |
| **Batas Pertama ($P_1$)** | Tekanan Sangat Rendah ($< 1\\text{ kPa}$) | Terminasi di dinding bejana reaktor ($g_{\\text{wall}} > f$) | Reaksi lambat tenang tanpa ledakan |
| **Di Antara $P_1$ dan $P_2$**| Tekanan Menengah ($1 - 10\\text{ kPa}$) | Percabangan fasa gas melampaui terminasi dinding ($f > g$) | **LEDAKAN RANTAI PERCABANGAN (Eksplosif)** |
| **Batas Kedua ($P_2$)** | Tekanan Agak Tinggi ($10 - 50\\text{ kPa}$) | Terminasi fasa gas via tumbukan badan ketiga: $\\ce{H^\\bullet + O2 + M -> HO2^\\bullet + M}$ | Reaksi stabil kembali (radikal $\\ce{HO2^\\bullet}$ tidak reaktif) |
| **Batas Ketiga ($P_3$)** | Tekanan Sangat Tinggi ($> 100\\text{ kPa}$) | Pelepasan kalor eksotermik melebihi konduksi dinding | **LEDAKAN TERMAL ADIABATIK** |

---

### 4. Official GitHub Callouts

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Orde Pecahan dan Inhibisi pada Reaksi H2-Br2
> Hukum laju reaksi pembentukan $\\ce{HBr}$ adalah salah satu topik paling sering diuji di IChO:
> - Orde terhadap reaktan $\\ce{Br2}$ bukanlah bilangan bulat, melainkan **orde setengah ($1/2$)** pada awal reaksi (karena disosiasi $\\ce{Br2} \\to 2\\ce{Br^\\bullet}$).
> - Orde terhadap produk $\\ce{HBr}$ bernilai negatif (penghambat laju).
> Jangan pernah mengasumsikan bahwa reaksi stoikiometri sederhana $\\ce{H2 + Br2 -> 2HBr}$ berorde dua ($r \\neq k[\\ce{H2}][\\ce{Br2}]$)!

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Peran Krusial Partikel Ketiga M pada Terminasi
> Rekombinasi dua atom bebas fasa gas $\\ce{2X^\\bullet -> X2}$ mustahil terjadi tanpa partikel ketiga $\\ce{M}$!
> Dua atom yang bertabrakan membawa energi kinetik tinggi. Jika tidak ada molekul ketiga $\\ce{M}$ yang menyerap energi eksotermik ikatan tersebut dalam waktu $10^{-13}\\text{ detik}$, molekul diatomik yang terbentuk akan langsung terdisosiasi kembali. Itulah sebabnya terminasi fasa gas selalu bersifat termolekular ($r_{\\text{term}} = 2k_5 [X^\\bullet]^2 [\\ce{M}]$).`,
      keyFormulas: [
        { name: 'Hukum Laju Reaksi H2-Br2', formula: 'r = \\frac{k [H_2][Br_2]^{1/2}}{1 + m\'\\frac{[HBr]}{[Br_2]}}' },
        { name: 'Konsentrasi Radikal Tunak Br', formula: '[Br^\\bullet] = \\sqrt{\\frac{k_1}{k_5}} [Br_2]^{1/2}' },
        { name: 'Kriteria Kritis Ledakan Rantai', formula: 'f > g \\iff \\frac{d[R]}{dt} \\to \\infty' },
      ],
    },
    {
      tag: 'konsep-katalisis-heterogen-enzim',
      tags: ['kinetika-katalisis', 'katalisis-heterogen', 'langmuir-hinshelwood', 'eley-rideal', 'kinetika-enzim-michaelis-menten', 'plot-lineweaver-burk'],
      title: 'Konsep Inti 5: Kinetika Katalisis Homogen-Heterogen (Langmuir-Hinshelwood) & Enzim Michaelis-Menten',
      summary: 'Kinetika adsorpsi isoterm Langmuir pada permukaan katalis padat, mekanisme Eley-Rideal, serta perlakuan SSA pada kinetika saturasi enzimatis.',
      content: `### 1. Intuitive Mental Model Hook: Pintu Masuk Bandara & Kunci Gembok Enzimatis
Bayangkan sebuah bandara internasional dengan 10 gerbang imigrasi (*situs aktif katalis*). Jika hanya ada 2 penumpang yang datang per menit, kecepatan pemrosesan penumpang berbanding lurus dengan jumlah penumpang yang datang (kinetika orde satu). Namun ketika pesawat berbadan lebar mendarat dan 500 penumpang membanjiri antrean, seluruh gerbang imigrasi bekerja pada kapasitas penuh 100%. Tidak peduli seberapa banyak penumpang menumpuk di belakang, kecepatan keluar tetap konstan pada batas maksimal (kinetika orde nol / *plateau saturasi*).

Inilah prinsip universal yang menyatukan **Katalisis Permukaan Padat Langmuir** pada konverter katalitik mobil dan **Kinetika Enzimatis Michaelis-Menten** di dalam sel biologis kita. Katalisator tidak dapat mengubah posisi kesetimbangan termodinamika ($\Delta G^\circ, K_{\text{eq}}$ tetap konstan), namun ia menyediakan "jalur pintas terowongan bawah tanah" dengan energi aktivasi ($E_a$) yang jauh lebih rendah!

---

### 2. Scaffolded Step-by-Step Logic: Katalisis Heterogen & Kinetika Michaelis-Menten

#### Langkah 1: Isoterm Adsorpsi Langmuir pada Permukaan Katalis
Fraksi luas permukaan katalis yang tertutupi oleh molekul gas yang teradsorpsi ($\\theta$, di mana $0 \\le \\theta \\le 1$):
$$\\theta = \\frac{K P}{1 + K P}$$
- **Mekanisme Langmuir-Hinshelwood:** Reaksi berlangsung antara dua spesi yang sama-sama telah teradsorpsi berdampingan pada permukaan aktif:
  $$\\ce{A_{(ads)} + B_{(ads)} -> Produk}$$
  $$\\mathbf{r = k \\theta_A \\theta_B = \\frac{k K_A K_B P_A P_B}{(1 + K_A P_A + K_B P_B)^2}}$$
- **Mekanisme Eley-Rideal:** Reaksi berlangsung antara molekul yang teradsorpsi dengan molekul gas bebas yang menabrak langsung dari fasa ruah:
  $$\\ce{A_{(ads)} + B_{(g)} -> Produk}$$
  $$\\mathbf{r = k \\theta_A P_B = \\frac{k K_A P_A P_B}{1 + K_A P_A}}$$

#### Langkah 2: Penurunan Persamaan Enzimatis Leonor Michaelis & Maud Menten
Reaksi enzimatik melibatkan pembentukan kompleks enzim-substrat intermediet ($[\\ce{ES}]$):
$$\\ce{E + S <=>[k_1][k_{-1}] ES ->[k_2] E + P}$$
di mana $k_2 = k_{\\text{cat}}$ adalah tetapan pergantian (*turnover number*).
1. **Laju Pembentukan Produk:**
   $$v = \\frac{d[\\ce{P}]}{dt} = k_2 [\\ce{ES}]$$
2. **Neraca Konsentrasi Enzim Total:**
   $$[\\ce{E}]_0 = [\\ce{E}] + [\\ce{ES}] \\implies [\\ce{E}] = [\\ce{E}]_0 - [\\ce{ES}]$$
3. **Penerapan SSA pada Kompleks $[\\ce{ES}]$:**
   $$\\frac{d[\\ce{ES}]}{dt} = k_1 [\\ce{E}][\\ce{S}] - k_{-1} [\\ce{ES}] - k_2 [\\ce{ES}] = 0$$
   $$k_1 ([\\ce{E}]_0 - [\\ce{ES}])[\\ce{S}] = (k_{-1} + k_2) [\\ce{ES}]$$
4. **Definisi Tetapan Michaelis ($K_M$):**
   $$K_M = \\frac{k_{-1} + k_2}{k_1}$$
   $$[\\ce{ES}] \\left(K_M + [\\ce{S}]\\right) = [\\ce{E}]_0 [\\ce{S}] \\implies [\\ce{ES}] = \\frac{[\\ce{E}]_0 [\\ce{S}]}{K_M + [\\ce{S}]}$$
5. **Persamaan Laju Michaelis-Menten Eksak:**
   $$\\mathbf{v = \\frac{k_2 [\\ce{E}]_0 [\\ce{S}]}{K_M + [\\ce{S}]} = \\frac{V_{\\text{max}} [\\ce{S}]}{K_M + [\\ce{S}]}}$$
   di mana $V_{\\text{max}} = k_2 [\\ce{E}]_0 = k_{\\text{cat}} [\\ce{E}]_0$ adalah laju reaksi maksimum saat seluruh situs aktif enzim tersaturasi penuh.

#### Langkah 3: Dua Batas Konsentrasi Substrat
- **Konsentrasi Substrat Sangat Rendah ($[\\ce{S}] \\ll K_M$):**
  Penyebut $K_M + [\\ce{S}] \\approx K_M$:
  $$v \\approx \\frac{V_{\\text{max}}}{K_M} [\\ce{S}] = \\left(\\frac{k_{\\text{cat}}}{K_M} [\\ce{E}]_0\\right) [\\ce{S}] \\quad (\\mathbf{\\text{Orde Satu Semu}})$$
  Besaran $\\frac{k_{\\text{cat}}}{K_M}$ disebut **efisiensi katalitik enzim** (maksimum dibatasi oleh laju difusi pelarut $~10^8 - 10^9\\text{ M}^{-1}\\cdot\\text{s}^{-1}$).
- **Konsentrasi Substrat Sangat Tinggi ($[\\ce{S}] \\gg K_M$):**
  Penyebut $K_M + [\\ce{S}] \\approx [\\ce{S}]$:
  $$v \\approx \\frac{V_{\\text{max}} [\\ce{S}]}{[\\ce{S}]} = \\mathbf{V_{\\text{max}}} \\quad (\\mathbf{\\text{Orde Nol Murni / Plateau Saturasi}})$$

#### Langkah 4: Linierisasi Plot Lineweaver-Burk (Dua Resiprokal)
Membalikkan persamaan Michaelis-Menten:
$$\\frac{1}{v} = \\frac{K_M + [\\ce{S}]}{V_{\\text{max}} [\\ce{S}]} = \\frac{K_M}{V_{\\text{max}}[\\ce{S}]} + \\frac{[\\ce{S}]}{V_{\\text{max}}[\\ce{S}]}$$
$$\\mathbf{\\frac{1}{v} = \\frac{K_M}{V_{\\text{max}}}\\left(\\frac{1}{[\\ce{S}]}\\right) + \\frac{1}{V_{\\text{max}}}}$$
Grafik linear $\\frac{1}{v}$ (sumbu $y$) versus $\\frac{1}{[\\ce{S}]}$ (sumbu $x$):
- **Kemiringan (*slope*):** $m = \\frac{K_M}{V_{\\text{max}}}$
- **Intersep vertikal ($y$):** $c = \\frac{1}{V_{\\text{max}}} \\implies V_{\\text{max}} = \\frac{1}{c}$
- **Intersep horizontal ($x$):** $-\\frac{1}{K_M} \\implies K_M = -\\frac{1}{x_{\\text{intercept}}}$

---

### 3. High-Contrast Visual Matrix: Diagnostik Grafik Lineweaver-Burk

| Parameter Grafis | Nilai Matematis pada Kurva Lineweaver-Burk | Cara Ekstraksi Parameter Biokimia |
| :--- | :--- | :--- |
| **Sumbu $y$** | $\\frac{1}{v}$ (Kebalikan laju reaksi) | Diukur dari data spektrofotometri |
| **Sumbu $x$** | $\\frac{1}{[\\ce{S}]}$ (Kebalikan konsentrasi substrat) | Konsentrasi substrat awal |
| **Kemiringan (*Slope*)** | $m = \\frac{K_M}{V_{\\text{max}}}$ | Nilai rasio afinitas terhadap kapasitas |
| **Titik Potong Sumbu $y$** | $c = \\frac{1}{V_{\\text{max}}}$ | $V_{\\text{max}} = \\frac{1}{c}$ |
| **Titik Potong Sumbu $x$** | $x_0 = -\\frac{1}{K_M}$ | $K_M = -\\frac{1}{x_0}$ |

---

### 4. Official GitHub Callouts

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Arti Fisis Tetapan Michaelis KM
> Banyak siswa salah mendefinisikan $K_M$ sebagai tetapan disosiasi murni substrat.
> **Definisi Presisi:** $K_M = \\frac{k_{-1} + k_2}{k_1} = K_D + \\frac{k_2}{k_1}$. Nilai $K_M$ hanya sama dengan tetapan disosiasi kesetimbangan $K_D$ jika laju pembentukan produk jauh lebih lambat dibanding disosiasi balik ($k_2 \\ll k_{-1}$, asumsi Briggs-Haldane). Secara operasional, **$K_M$ adalah konsentrasi substrat saat laju reaksi mencapai persis setengah dari laju maksimumnya ($v = \\frac{1}{2}V_{\\text{max}}$)**. Semakin kecil nilai $K_M$, semakin tinggi afinitas enzim terhadap substrat!

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Identifikasi Tipe Inhibisi Enzim
> Pada soal pengujian inhibitor enzim via plot Lineweaver-Burk:
> 1. **Inhibitor Kompetitif:** Bersaing di situs aktif yang sama $\\implies V_{\\text{max}}$ tetap (intersep $y$ sama), tetapi $K_M$ meningkat (garis berputar dengan titik tumpu di sumbu $y$).
> 2. **Inhibitor Non-Kompetitif Murni:** Mengikat di situs alosterik $\\implies K_M$ tetap (intersep $x$ sama), tetapi $V_{\\text{max}}$ turun (garis berputar dengan titik tumpu di sumbu $x$).
> 3. **Inhibitor Unkompetitif:** Hanya mengikat kompleks $\\ce{ES} \\implies$ Kemiringan sama, kurva bergeser paralel ke atas!`,
      keyFormulas: [
        { name: 'Persamaan Michaelis-Menten', formula: 'v = \\frac{V_{\\text{max}} [S]}{K_M + [S]}' },
        { name: 'Tetapan Michaelis', formula: 'K_M = \\frac{k_{-1} + k_2}{k_1}' },
        { name: 'Lineweaver-Burk Dua Resiprokal', formula: '\\frac{1}{v} = \\frac{K_M}{V_{\\text{max}}}\\left(\\frac{1}{[S]}\\right) + \\frac{1}{V_{\\text{max}}}' },
        { name: 'Laju Permukaan Langmuir-Hinshelwood', formula: 'r = \\frac{k K_A K_B P_A P_B}{(1 + K_A P_A + K_B P_B)^2}' },
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
$$k = \\frac{0.69315}{5730\\text{ tahun}} = \\mathbf{1.2097 \\times 10^{-4}\\text{ tahun}^{-1}}$$

**Langkah 2: Menghitung Umur Sampel Kayu Purbakala**  
Gunakan persamaan hukum laju terintegrasi orde satu:
$$\\ln\\left(\\frac{A_0}{A_t}\\right) = k \\cdot t \\implies t = \\frac{1}{k} \\ln\\left(\\frac{A_0}{A_t}\\right)$$
Rasio aktivitas:
$$\\frac{A_0}{A_t} = \\frac{15.30\\text{ dpm/g C}}{3.85\\text{ dpm/g C}} = 3.9740$$
$$\\ln(3.9740) = 1.3798$$
Maka umur kayu purbakala ($t$):
$$t = \\frac{1.3798}{1.2097 \\times 10^{-4}\\text{ tahun}^{-1}} = 11,406\\text{ tahun} \\approx \\mathbf{1.14 \\times 10^4\\text{ tahun}}$$

**Langkah 3: Menghitung Batas Usia Maksimum Deteksi**  
Dengan aktivitas batas deteksi $A_{\\text{limit}} = 0.10\\text{ dpm/g C}$:
$$\\frac{A_0}{A_{\\text{limit}}} = \\frac{15.30}{0.10} = 153.0$$
$$\\ln(153.0) = 5.0304$$
$$t_{\\text{max}} = \\frac{5.0304}{1.2097 \\times 10^{-4}\\text{ tahun}^{-1}} = 41,584\\text{ tahun} \\approx \\mathbf{4.16 \\times 10^4\\text{ tahun}}$$

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
  $$\\frac{r_{0,1}}{r_{0,2}} = \\left(\\frac{[\\ce{I-}]_{0,1}}{[\\ce{I-}]_{0,2}}\\right)^n \\implies \\frac{2.20 \\times 10^{-4}}{1.10 \\times 10^{-4}} = \\left(\\frac{0.034}{0.017}\\right)^n \\implies 2.0 = (2.0)^n \\implies \\mathbf{n = 1}$$
- Bandingkan Percobaan 3 dan 2 (di mana $[\\ce{I-}]_0$ konstan pada $0.017\\text{ M}$):
  $$\\frac{r_{0,3}}{r_{0,2}} = \\left(\\frac{[\\ce{S2O8^2-}]_{0,3}}{[\\ce{S2O8^2-}]_{0,2}}\\right)^m \\implies \\frac{2.20 \\times 10^{-4}}{1.10 \\times 10^{-4}} = \\left(\\frac{0.160}{0.080}\\right)^m \\implies 2.0 = (2.0)^m \\implies \\mathbf{m = 1}$$
Hukum laju reaksi:
$$\\mathbf{r = k [\\ce{S2O8^2-}] [\\ce{I-}]} \\quad (\\text{Orde total } = 1 + 1 = 2)$$

**Langkah 2: Menghitung Tetapan Laju k**  
Gunakan data Percobaan 1:
$$k = \\frac{r_{0,1}}{[\\ce{S2O8^2-}]_{0,1} [\\ce{I-}]_{0,1}} = \\frac{2.20 \\times 10^{-4}\\text{ M}\\cdot\\text{s}^{-1}}{(0.080\\text{ M})(0.034\\text{ M})} = \\frac{2.20 \\times 10^{-4}}{2.72 \\times 10^{-3}} = \\mathbf{8.088 \\times 10^{-2}\\text{ M}^{-1}\\cdot\\text{s}^{-1}}$$

**Langkah 3: Menghitung Laju Awal Percobaan 4**  
$$r_{0,4} = (8.088 \\times 10^{-2}\\text{ M}^{-1}\\cdot\\text{s}^{-1}) \\times (0.040\\text{ M}) \\times (0.068\\text{ M}) = \\mathbf{2.20 \\times 10^{-4}\\text{ M/s}}$$

**Langkah 4: Kinetika Orde Pseudo-Satu**  
Karena $[\\ce{I-}]_0 = 1.50\\text{ M} \\gg [\\ce{S2O8^2-}]_0 = 0.0050\\text{ M}$ (rasio $300:1$):
$$k' = k [\\ce{I-}]_0 = (8.088 \\times 10^{-2}\\text{ M}^{-1}\\cdot\\text{s}^{-1})(1.50\\text{ M}) = \\mathbf{0.1213\\text{ s}^{-1}}$$
Waktu paruh persulfat:
$$t_{1/2} = \\frac{\\ln 2}{k'} = \\frac{0.69315}{0.1213\\text{ s}^{-1}} = \\mathbf{5.71\\text{ detik}}$$

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
$$E_a = \\frac{R \\cdot \\ln(k_2 / k_1)}{\\frac{1}{T_1} - \\frac{1}{T_2}} = \\frac{8.314\\text{ J}/(\\text{mol}\\cdot\\text{K}) \\times 1.5118}{2.1786 \\times 10^{-4}\\text{ K}^{-1}} = 57,698\\text{ J/mol} \\approx \\mathbf{57.70\\text{ kJ/mol}}$$

Menghitung faktor frekuensi $A$:
$$A = k_1 \\cdot e^{E_a / RT_1} = 0.0430 \\cdot e^{57698 / (8.314 \\times 293.15)} = 0.0430 \\cdot e^{23.673}$$
$$A = 0.0430 \\times (1.910 \\times 10^{10}) = \\mathbf{8.21 \\times 10^8\\text{ M}^{-1}\\cdot\\text{s}^{-1}}$$

**Langkah 2: Menghitung Tetapan Laju pada Suhu Tubuh (37.0°C / 310.15 K)**  
$$\\ln\\left(\\frac{k_{37}}{k_1}\\right) = -\\frac{E_a}{R} \\left(\\frac{1}{310.15} - \\frac{1}{293.15}\\right) = -\\frac{57698}{8.314} (-1.8698 \\times 10^{-4}) = +1.2976$$
$$k_{37} = k_1 \\cdot e^{1.2976} = 0.0430 \\times 3.6606 = \\mathbf{0.1574\\text{ M}^{-1}\\cdot\\text{s}^{-1}} \\approx \\mathbf{0.157\\text{ M}^{-1}\\cdot\\text{s}^{-1}}$$

**Langkah 3: Menghitung Parameter Termodinamika Aktivasi Eyring pada 298.15 K**  
1. **Entalpi Aktivasi ($\\Delta H^\\ddagger$):**
   Untuk reaksi fasa larutan cair:
   $$\\Delta H^\\ddagger = E_a - RT = 57698\\text{ J/mol} - (8.314 \\times 298.15)\\text{ J/mol} = 57698 - 2479 = 55,219\\text{ J/mol} = \\mathbf{55.22\\text{ kJ/mol}}$$
2. **Entropi Aktivasi ($\\Delta S^\\ddagger$):**
   Tetapan laju pada $298.15\\text{ K}$:
   $$k_{298} = A e^{-E_a / RT} = (8.21 \\times 10^8) \\cdot e^{-57698 / 2478.8} = (8.21 \\times 10^8) \\times (7.647 \\times 10^{-11}) = 0.0628\\text{ M}^{-1}\\cdot\\text{s}^{-1}$$
   Dari Persamaan Eyring $k = \\frac{k_B T}{h} e^{\\Delta S^\\ddagger / R} e^{-\\Delta H^\\ddagger / RT}$:
   $$\\frac{k_B T}{h} = \\frac{1.3806 \\times 10^{-23} \\times 298.15}{6.626 \\times 10^{-34}} = 6.212 \\times 10^{12}\\text{ s}^{-1}$$
   $$e^{\\Delta S^\\ddagger / R} = \\frac{k_{298} \\cdot e^{\\Delta H^\\ddagger / RT}}{k_B T / h} = \\frac{0.0628 \\times e^{22.277}}{6.212 \\times 10^{12}} = \\frac{0.0628 \\times (4.729 \\times 10^9)}{6.212 \\times 10^{12}} = 4.781 \\times 10^{-5}$$
   $$\\Delta S^\\ddagger = R \\cdot \\ln(4.781 \\times 10^{-5}) = 8.314 \\times (-9.948) = \\mathbf{-82.71\\text{ J}/(\\text{mol}\\cdot\\text{K})}$$
3. **Energi Bebas Gibbs Aktivasi ($\\Delta G^\\ddagger$):**
   $$\\Delta G^\\ddagger = \\Delta H^\\ddagger - T\\Delta S^\\ddagger = 55219 - (298.15 \\times (-82.71)) = 55219 + 24660 = 79,879\\text{ J/mol} = \\mathbf{79.88\\text{ kJ/mol}}$$

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
$$-\\frac{d[\\ce{O3}]}{dt} = 2 k_2 \\left(\\frac{k_1 [\\ce{O3}]}{k_{-1}[\\ce{O2}] + k_2[\\ce{O3}]}\\right) [\\ce{O3}] = \\mathbf{\\frac{2 k_1 k_2 [\\ce{O3}]^2}{k_{-1}[\\ce{O2}] + k_2[\\ce{O3}]}}$$
*(Terbukti).*

**Langkah 4: Evaluasi Kondisi Batas k_-1[O2] >> k_2[O3]**  
Jika laju penggabungan kembali $\\ce{O + O2}$ mendominasi tahap dekomposisi bimolekular:
Penyebut dapat didekati sebagai $k_{-1}[\\ce{O2}] + k_2[\\ce{O3}] \\approx k_{-1}[\\ce{O2}]$:
$$r = \\frac{2 k_1 k_2 [\\ce{O3}]^2}{k_{-1}[\\ce{O2}]} = \\left(\\frac{2 k_1 k_2}{k_{-1}}\\right) \\frac{[\\ce{O3}]^2}{[\\ce{O2}]} = \\mathbf{k_{\\text{obs}} [\\ce{O3}]^2 [\\ce{O2}]^{-1}}$$
- Orde reaksi terhadap $\\ce{O3}$: $+2$ (Kuadratik)
- Orde reaksi terhadap $\\ce{O2}$: $-1$ (Orde negatif, menunjukkan bahwa gas oksigen bertindak sebagai **inhibitor / penghambat laju** dekomposisi ozon).

**Langkah 5: Menghitung Energi Aktivasi Teramati Ea,obs**  
Tetapan laju teramati adalah:
$$k_{\\text{obs}} = \\frac{2 k_1 k_2}{k_{-1}}$$
Mengambil logaritma natural: $\\ln k_{\\text{obs}} = \\ln 2 + \\ln k_1 + \\ln k_2 - \\ln k_{-1}$.
Diferensialkan terhadap temperatur ($R T^2 \\frac{d}{dT}$):
$$E_{a,\\text{obs}} = E_{a1} + E_{a2} - E_{a,-1}$$
Substitusikan data numerik:
$$E_{a,\\text{obs}} = 105.0\\text{ kJ/mol} + 15.0\\text{ kJ/mol} - 10.0\\text{ kJ/mol} = \\mathbf{110.0\\text{ kJ/mol}}$$

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
$$k_{\\text{eff}} = \\frac{r}{[\\ce{A}]} = \\mathbf{\\frac{k_1 k_2 [\\ce{A}]}{k_{-1}[\\ce{A}] + k_2}}$$

**Langkah 2: Linierisasi Plot Lindemann**  
Ambil kebalikan (resiprokal) dari $k_{\\text{eff}}$:
$$\\frac{1}{k_{\\text{eff}}} = \\frac{k_{-1}[\\ce{A}] + k_2}{k_1 k_2 [\\ce{A}]} = \\frac{k_{-1}[\\ce{A}]}{k_1 k_2 [\\ce{A}]} + \\frac{k_2}{k_1 k_2 [\\ce{A}]} = \\frac{k_{-1}}{k_1 k_2} + \\frac{1}{k_1} \\left(\\frac{1}{[\\ce{A}]}\\right)$$
Karena $k_\\infty = \\frac{k_1 k_2}{k_{-1}}$, maka:
$$\\mathbf{\\frac{1}{k_{\\text{eff}}} = \\frac{1}{k_\\infty} + \\frac{1}{k_1} \\left(\\frac{1}{[\\ce{A}]}\\right)}$$
Kurva $\\frac{1}{k_{\\text{eff}}}$ terhadap $\\frac{1}{[\\ce{A}]}$ berupa garis lurus dengan:
- Intersep $y = \\frac{1}{k_\\infty}$
- Kemiringan (*slope*) $m = \\frac{1}{k_1}$

**Langkah 3: Menghitung Rasio k2/k_-1 dan Tetapan k1**  
Kondisi saat $k_{\\text{eff}} = \\frac{1}{2} k_\\infty$:
$$k_{\\text{eff}} = \\frac{k_1 k_2 [\\ce{A}]}{k_{-1}[\\ce{A}] + k_2} = \\frac{1}{2} \\left(\\frac{k_1 k_2}{k_{-1}}\\right)$$
$$2 k_{-1} [\\ce{A}] = k_{-1} [\\ce{A}] + k_2 \\implies k_{-1} [\\ce{A}]_{1/2} = k_2$$
$$[\\ce{A}]_{1/2} = \\frac{k_2}{k_{-1}} = \\mathbf{1.00 \\times 10^{-5}\\text{ M}}$$
Rasio tetapan elementer:
$$\\mathbf{\\frac{k_2}{k_{-1}} = 1.00 \\times 10^{-5}\\text{ M}}$$

Sekarang tentukan $k_1$:
$$k_\\infty = \\frac{k_1 k_2}{k_{-1}} = k_1 \\left(\\frac{k_2}{k_{-1}}\\right) = k_1 \\cdot [\\ce{A}]_{1/2}$$
$$4.00 \\times 10^{-4}\\text{ s}^{-1} = k_1 \\times (1.00 \\times 10^{-5}\\text{ M})$$
$$k_1 = \\frac{4.00 \\times 10^{-4}\\text{ s}^{-1}}{1.00 \\times 10^{-5}\\text{ M}} = \\mathbf{40.0\\text{ M}^{-1}\\cdot\\text{s}^{-1}}$$

**Langkah 4: Menghitung k_eff pada Konsentrasi Rendah ([A] = 2.00 x 10^-6 M)**  
Gunakan formula $k_{\\text{eff}}$:
$$k_{\\text{eff}} = \\frac{k_1 [\\ce{A}]}{1 + \\frac{k_{-1}}{k_2}[\\ce{A}]} = \\frac{(40.0\\text{ M}^{-1}\\text{s}^{-1}) \\times (2.00 \\times 10^{-6}\\text{ M})}{1 + \\frac{2.00 \\times 10^{-6}\\text{ M}}{1.00 \\times 10^{-5}\\text{ M}}}$$
$$k_{\\text{eff}} = \\frac{8.00 \\times 10^{-5}\\text{ s}^{-1}}{1 + 0.20} = \\frac{8.00 \\times 10^{-5}}{1.20} = \\mathbf{6.667 \\times 10^{-5}\\text{ s}^{-1}} \\approx \\mathbf{6.67 \\times 10^{-5}\\text{ s}^{-1}}$$

**Kesimpulan Evaluator Juri:**  
Hukum laju terbukti mengalami transisi dari orde satu pada tekanan tinggi menuju orde dua pada tekanan rendah sesuai model Lindemann-Hinshelwood. Parameter kinetika elementer bernilai $k_\\infty = 4.00 \\times 10^{-4}\\text{ s}^{-1}$, konsentrasi transisi $[\\ce{A}]_{1/2} = \\frac{k_2}{k_{-1}} = 1.00 \\times 10^{-5}\\text{ M}$, dan tetapan aktivasi tumbukan $k_1 = 40.0\\text{ M}^{-1}\\text{s}^{-1}$. Pada konsentrasi rendah $2.00 \\times 10^{-6}\\text{ M}$, nilai $k_{\\text{eff}}$ turun drastis menjadi $6.67 \\times 10^{-5}\\text{ s}^{-1}$ (penurunan laju sebesar $83.3\\%$ dibanding batas tekanan tinggi).`,
    },
  ],
};

export const OSN_TOPIC_6: MaterialItem = {
  ...RAW_OSN_TOPIC_6,
  prerequisites: RAW_OSN_TOPIC_6.prerequisites.map(p => ({
    ...p,
    checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_06[p.tag] || undefined,
  })),
  core_concepts: RAW_OSN_TOPIC_6.core_concepts.map(c => ({
    ...c,
    checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_06[c.tag] || undefined,
  })),
  worked_examples: RAW_OSN_TOPIC_6.worked_examples.map(w => ({
    ...w,
    checkpointQuizzes: undefined,
  })),
};
