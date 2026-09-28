/**
 * osnTopic05.ts
 * Topik 5: Kesetimbangan Kimia & Larutan
 * Jenjang: OSN / IChO
 * Standar Pedagogis: Tone Opsi A (Arsitektur 5 Lapis, Mental Model Hook, Scaffolded Logic, GitHub Callouts, & Checkpoint Quizzes)
 */

import type { MaterialItem } from '../../materialsData.ts';
import { CHECKPOINTS_TOPIC_OSN_05 } from '../../checkpoints/checkpointBankTopicOsn05.ts';

const RAW_OSN_TOPIC_5: MaterialItem = {
  id: 5,
  topic_number: 5,
  title: 'Kesetimbangan Kimia & Larutan',
  slug: 'kesetimbangan-kimia-larutan',
  category: 'Kimia Larutan',
  level: 'OSN',
  readTimeMinutes: 38,
  summary: 'Kajian komprehensif termodinamika kesetimbangan kimia fasa gas dan larutan: hukum aksi massa, tetapan Kc-Kp-Kx, asas Le Chatelier multivariabel, autoionisasi air Kw, spesiasi asam poliprotik fraksi alfa (α), persamaan Henderson-Hasselbalch, indeks kapasitas buffer Van Slyke, titrimetri presisi, hasil kali kelarutan Ksp, efek ion sejenis, pengendapan bertingkat, dan kesetimbangan simultan pembentukan ion kompleks (Kf).',
  allTags: [
    'kesetimbangan-dinamis',
    'hukum-aksi-massa',
    'tetapan-kc-kp',
    'relasi-kp-kc',
    'kesetimbangan-heterogen',
    'asas-le-chatelier',
    'pergeseran-kesetimbangan',
    'faktor-reaksi',
    'penambahan-gas-inert',
    'derivat-van-t-hoff',
    'teori-bronsted-lowry',
    'asam-basa-lewis',
    'autoionisasi-air-kw',
    'skala-ph-poh',
    'kekuatan-asam-relatif',
    'asam-basa-poliprotik',
    'spesiasi-larutan',
    'fraksi-alfa-spesies',
    'garam-amfiprotik',
    'asam-diprotik-triprotik',
    'larutan-penyangga',
    'henderson-hasselbalch',
    'kapasitas-buffer',
    'indeks-van-slyke',
    'buffer-fisiologis',
    'kurva-titrasi-presisi',
    'titik-ekuivalen',
    'indikator-asam-basa',
    'hidrolisis-garam',
    'daerah-buffer-titrasi',
    'ksp-kelarutan',
    'hasil-kali-kelarutan',
    'pengaruh-ion-senama',
    'kuosien-pengendapan-qsp',
    'kelarutan-molar',
    'pengendapan-bertingkat',
    'kelarutan-bergantung-ph',
    'ion-kompleks-kf',
    'pemisahan-kation',
    'kelarutan-kondisional',
    'soal-buffer-karbonat',
    'soal-amfiprotik-glisin',
    'soal-kurva-titrasi',
    'soal-pengendapan-ksp',
    'soal-kompleksasi-agbr',
    'soal-osk',
    'soal-osp',
    'soal-osn',
  ],
  prerequisites: [
    {
      tag: 'kesetimbangan-dinamis-kc-kp',
      tags: ['kesetimbangan-dinamis', 'hukum-aksi-massa', 'tetapan-kc-kp', 'relasi-kp-kc', 'kesetimbangan-heterogen'],
      title: 'Prasyarat 1: Hukum Kesetimbangan Aksi Massa, Tetapan Kc - Kp - Kx, & Kesetimbangan Heterogen',
      summary: 'Dasar termodinamika keadaan setimbang dinamis, formulasi hukum aksi massa Guldberg-Waage, hubungan interkonversi Kc, Kp, dan Kx, serta perlakuan aktivitas fasa murni.',
      content: `### 1. Intuitive Mental Model Hook: Jembatan Tol Dua Arah & Kesetimbangan Dinamis
Bayangkan sebuah jembatan penghubung dua pulau metropolitan dengan volume lalu lintas yang padat. Pada jam sibuk, mobil melaju ke pulau seberang sebanyak 1.000 mobil per jam, dan pada saat yang bersamaan, mobil yang kembali dari arah berlawanan persis berjumlah 1.000 mobil per jam.

Apakah lalu lintas berhenti bergerak? Sama sekali tidak! Setiap detik partikel kendaraan berpindah melintasi batas. Namun, sensus penduduk di kedua pulau mencatat angka yang sama persis setiap menitnya. Inilah esensi mendasar dari **Kesetimbangan Kimia Dinamis**: laju reaksi pembentukan produk maju ($r_{\\text{fwd}}$) persis menyamai laju penguraian kembali reaktan ($r_{\\text{rev}}$). Secara makroskopis sistem tampak diam beku tanpa perubahan komposisi netto, namun secara mikroskopis terjadi pertukaran molekuler berkecepatan tinggi tanpa henti pada tingkat energi bebas minimum ($\\Delta G = 0$).

---

### 2. Scaffolded Step-by-Step Logic: Hukum Aksi Massa & Relasi Interkonversi $K_c, K_p, K_x$

Untuk reaksi umum reversibel yang melibatkan reaktan dan produk terdispersi homogen:
$$a\\ce{A} + b\\ce{B} <=> c\\ce{C} + d\\ce{D}$$

#### Langkah 1: Formulasi Hukum Aksi Massa Guldberg-Waage
Berdasarkan hukum aksi massa Cato Guldberg dan Peter Waage (1864) serta penurunan termodinamika potensial kimia Gibbs:
$$\\Delta G = \\Delta G^\\circ + RT \\ln Q$$
Pada kondisi setimbang dinamis sempurna, $\\Delta G = 0$ dan kuosien reaksi $Q$ menjadi tetapan kesetimbangan termodinamika $K$:
$$\\Delta G^\\circ = -RT \\ln K$$
Jika dinyatakan dalam konsentrasi molaritas analit (mol/L):
$$K_c = \\frac{[\\ce{C}]^c [\\ce{D}]^d}{[\\ce{A}]^a [\\ce{B}]^b}$$
Untuk reaksi gas ideal yang dinyatakan dalam tekanan parsial (atm atau bar):
$$K_p = \\frac{P_{\\ce{C}}^c \\cdot P_{\\ce{D}}^d}{P_{\\ce{A}}^a \\cdot P_{\\ce{B}}^b}$$

#### Langkah 2: Penurunan Interkonversi $K_p$ dan $K_c$
Berdasarkan persamaan gas ideal, tekanan parsial suatu gas $i$ berkorelasi dengan konsentrasi molaritasnya:
$$P_i = \\left(\\frac{n_i}{V}\\right)RT = [i]RT$$
Substitusikan hubungan ini ke dalam formulasi $K_p$:
$$K_p = \\frac{([\\ce{C}]RT)^c \\cdot ([\\ce{D}]RT)^d}{([\\ce{A}]RT)^a \\cdot ([\\ce{B}]RT)^b} = \\frac{[\\ce{C}]^c [\\ce{D}]^d}{[\\ce{A}]^a [\\ce{B}]^b} \\cdot \\frac{(RT)^{c+d}}{(RT)^{a+b}}$$
$$K_p = K_c (RT)^{\\Delta n_g}$$
di mana:
- $\\Delta n_g = (c + d) - (a + b)$ adalah selisih jumlah koefisien stoikiometri fasa gas produk dikurangi fasa gas reaktan.
- $R = 0.08206\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$ jika tekanan dalam atm, atau $R = 8.314\\text{ J}/(\\text{mol}\\cdot\\text{K})$ jika tekanan dalam Pa atau $\\text{m}^3$.
- $T$ adalah temperatur mutlak sistem dalam Kelvin ($K$).

#### Langkah 3: Relasi Fraksi Mol ($K_x$) dan Tekanan Total
Menurut Hukum Dalton mengenai tekanan parsial, $P_i = x_i P_{\\text{tot}}$, di mana $x_i$ adalah fraksi mol gas $i$:
$$K_p = \\frac{(x_{\\ce{C}} P_{\\text{tot}})^c \\cdot (x_{\\ce{D}} P_{\\text{tot}})^d}{(x_{\\ce{A}} P_{\\text{tot}})^a \\cdot (x_{\\ce{B}} P_{\\text{tot}})^b} = \\left(\\frac{x_{\\ce{C}}^c \\cdot x_{\\ce{D}}^d}{x_{\\ce{A}}^a \\cdot x_{\\ce{B}}^b}\\right) (P_{\\text{tot}})^{(c+d)-(a+b)}$$
$$K_p = K_x (P_{\\text{tot}})^{\\Delta n_g} \\iff K_x = K_p (P_{\\text{tot}})^{-\\Delta n_g}$$

#### Langkah 4: Kaidah Kesetimbangan Heterogen & Fasa Murni
Pada reaksi heterogen yang melibatkan fasa berbeda (padat, cair murni, gas, dan larutan), aktivitas termodinamika ($a_i$) zat padat murni ($s$) dan cairan murni ($l$) bernilai tepat satu ($a = 1$) karena konsentrasi molekuler internal zat murni tidak berubah:
$$\\ce{CaCO3(s) <=> CaO(s) + CO2(g)} \\implies K_p = P_{\\ce{CO2}}, \\quad K_c = [\\ce{CO2}]$$
$$\\ce{NH4HS(s) <=> NH3(g) + H2S(g)} \\implies K_p = P_{\\ce{NH3}} \\cdot P_{\\ce{H2S}}$$

---

### 3. High-Contrast Visual Matrix: Diagnostik Kuosien Reaksi (Q) vs Tetapan Kesetimbangan (K)

| Kondisi Rasio Kuosien ($Q$) | Status Termodinamika ($\\Delta G = RT \\ln(Q/K)$) | Arah Pergeseran Spontan Netto | Gambaran Mikroskopis Molekuler |
| :--- | :--- | :--- | :--- |
| **$Q < K$** | $\\Delta G < 0$ (Eksergonik Spontan) | **Maju ke Kanan ($\\to$)** | Konsentrasi reaktan berlebih; pembentukan produk lebih cepat dari dekomposisinya ($r_{\\text{fwd}} > r_{\\text{rev}}$). |
| **$Q = K$** | $\\Delta G = 0$ (Kesetimbangan Dinamis) | **Tidak Ada Pergeseran Netto ($<=>$)** | Laju pembentukan produk menyamai laju dekomposisi reaktan secara simetris ($r_{\\text{fwd}} = r_{\\text{rev}}$). |
| **$Q > K$** | $\\Delta G > 0$ (Endergonik Spontan Balik) | **Mundur ke Kiri ($\\leftarrow$)** | Produk terkumpul melampaui batas kestabilan; produk terurai menjadi reaktan ($r_{\\text{rev}} > r_{\\text{fwd}}$). |

---

### 4. Official GitHub Callouts

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Padatan Murni & Kesetimbangan Heterogen
> Banyak peserta keliru beranggapan bahwa menambahkan padatan reaktan ke dalam wadah kesetimbangan heterogen akan menggeser reaksi ke arah kanan sesuai asas Le Chatelier.
> **Koreksi Fundamental:** Pada sistem heterogen seperti $\\ce{CaCO3(s) <=> CaO(s) + CO2(g)}$, aktivitas zat padat murni adalah konstan ($a_{\\ce{CaCO3}} = 1$ dan $a_{\\ce{CaO}} = 1$). Penambahan padatan murni $\\ce{CaCO3(s)}$ atau $\\ce{CaO(s)}$ sama sekali **tidak mengubah tekanan parsial gas $\\ce{CO2}$ maupun kuosien reaksi $Q_p$**. Oleh karena itu, kesetimbangan **sama sekali tidak bergeser**, asalkan volume bejana dan temperatur tetap konstan!

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Matriks Manipulasi Aljabar Tetapan K
> Dalam soal bertingkat Olimpiade Kimia, Anda sering diminta merekayasa reaksi kesetimbangan gabungan:
> 1. **Reaksi Dibalik:** Nilai tetapan menjadi kebalikannya: $K' = \\frac{1}{K} = K^{-1}$.
> 2. **Reaksi Dikalikan Faktor Koefisien $n$:** Nilai tetapan dipangkatkan $n$: $K' = K^n$.
> 3. **Dua atau Lebih Reaksi Dijumlahkan:** Nilai tetapan kesetimbangan total adalah **hasil perkalian** seluruh tetapan tahapannya:
>    $$K_{\\text{total}} = K_1 \\times K_2 \\times K_3 \\times \\dots$$`,
      keyFormulas: [
        { name: 'Hubungan Kp dan Kc', formula: 'K_p = K_c (RT)^{\\Delta n_g}' },
        { name: 'Hubungan Kp dan Kx', formula: 'K_p = K_x (P_{\\text{tot}})^{\\Delta n_g}' },
        { name: 'Kespontanan via Kuosien', formula: '\\Delta G = RT \\ln(Q / K)' },
      ],
    },
    {
      tag: 'asas-le-chatelier-faktor-pergeseran',
      tags: ['asas-le-chatelier', 'pergeseran-kesetimbangan', 'faktor-reaksi', 'penambahan-gas-inert', 'derivat-van-t-hoff'],
      title: 'Prasyarat 2: Asas Le Chatelier & Respons Sistem Multivariabel (Konsentrasi, Tekanan, Suhu, Gas Inert)',
      summary: 'Prinsip respon perlawanan sistem kimia terhadap perturbasi eksternal, analisis efek penambahan gas inert volume tetap vs tekanan tetap, dan modulasi temperatur.',
      content: `### 1. Intuitive Mental Model Hook: Jungkat-Jungkit Termodinamika & Balon Bersirip Lentur
Bayangkan papan jungkat-jungkit yang seimbang di atas titik tumpunya. Ketika Anda menjatuhkan beban karung pasir di salah satu sisi, jungkat-jungkit miring seketika. Untuk mengembalikan keseimbangan, papan harus menggeser titik tumpu atau memindahkan sebagian muatan ke sisi yang berlawanan.

Henry Louis Le Chatelier (1884) merumuskan prinsip universal alamiah ini: *Bila suatu sistem kesetimbangan mengalami gangguan eksternal (aksi), sistem akan merespon secara spontan dengan cara melakukan pergeseran yang meminimalkan pengaruh gangguan tersebut (reaksi).* Namun, reaksi sistem kimia bukanlah sihir statis—melainkan konsekuensi matematis dari perubahan rasio konsentrasi atau modulasi termodinamika tetapan $K$.

---

### 2. Scaffolded Step-by-Step Logic: Analisis Multivariabel Perturbasi Sistem

#### Langkah 1: Perturbasi Konsentrasi Reaktan & Produk
- **Penambahan Reaktan:** Konsentrasi reaktan naik $\\implies Q < K \\implies$ Sistem bergeser ke kanan ($\\to$) mengonsumsi reaktan untuk menghasilkan produk tambahan.
- **Pengurangan Produk:** Menarik keluar produk yang terbentuk $\\implies Q < K \\implies$ Sistem terdorong terus-menerus ke kanan (teknik andalan industri kimia untuk memaksimumkan yield).
- **Catatan Krusial:** Perturbasi konsentrasi sama sekali **tidak mengubah nilai numerik tetapan kesetimbangan $K$**.

#### Langkah 2: Perturbasi Volume dan Tekanan Sistem Gas
Berdasarkan hukum gas ideal, penurunan volume wadah ($V \\downarrow$) melipatgandakan tekanan parsial seluruh komponen gas ($P_i \\uparrow$):
- Jika $\\Delta n_g > 0$ (mol produk gas lebih banyak): Penurunan volume menaikkan $Q_p$ melampaui $K_p$ ($Q_p > K_p$). Sistem bergeser ke kiri ($\\leftarrow$) ke arah koefisien gas terkecil.
- Jika $\\Delta n_g < 0$ (mol produk gas lebih sedikit): Penurunan volume menurunkan $Q_p$ di bawah $K_p$ ($Q_p < K_p$). Sistem bergeser ke kanan ($\\to$) ke arah koefisien gas terkecil.
- Jika $\\Delta n_g = 0$ (contoh: $\\ce{H2(g) + I2(g) <=> 2HI(g)}$): Tekanan total dan volume tidak mempengaruhi rasio kuosien $Q_p = Q_x$, sehingga **posisi kesetimbangan sama sekali tidak bergeser**.

#### Langkah 3: Analisis Mendalam Penambahan Gas Inert (Gas Mulia / $\\ce{Ar, He, N2}$)
Dampak penambahan gas inert merupakan topik ujian favorit OSN karena bergantung mutlak pada batasan termodinamika wadah:
1. **Penambahan Gas Inert pada Volume Tetap ($V$ konstan, Bejana Kaku):**
   Tekanan total wadah meningkat ($P_{\\text{tot}} = P_{\\text{reaktif}} + P_{\\text{inert}}$). Namun, karena volume wadah tidak berubah, konsentrasi analit $[i] = n_i / V$ dan tekanan parsial $P_i = [i]RT$ dari seluruh gas reaktan dan produk **tetap konstan tanpa perubahan sedikit pun**. Akibatnya, $Q_p = K_p$:
   $$\\mathbf{\\text{Tidak ada pergeseran kesetimbangan sama sekali!}}$$
2. **Penambahan Gas Inert pada Tekanan Tetap ($P$ konstan, Bejana Piston Bergerak):**
   Penambahan mol gas inert memaksa piston bergerak keluar memperbesar volume wadah ($V \\uparrow$) demi menjaga $P_{\\text{tot}}$ konstan. Pembesaran volume ini mengencerkan seluruh gas reaktif dan menurunkan tekanan parsialnya ($P_i = x_i P$).
   $$\\mathbf{\\text{Sistem merespon layaknya ekspansi volume: bergeser ke sisi koefisien mol gas lebih besar!}}$$

#### Langkah 4: Perturbasi Temperatur & Persamaan Isochor Van 't Hoff
Suhu ($T$) adalah **satu-satunya variabel fisika** yang sanggup merombak nilai numerik tetapan kesetimbangan $K$:
- **Reaksi Eksotermik ($\\Delta H^\\circ < 0$):** Panas bertindak sebagai produk reaksi. Kenaikan suhu ($T \\uparrow$) menggeser reaksi ke kiri $\\implies K$ menurun.
- **Reaksi Endotermik ($\\Delta H^\\circ > 0$):** Panas bertindak sebagai reaktan reaksi. Kenaikan suhu ($T \\uparrow$) menggeser reaksi ke kanan $\\implies K$ meningkat.

Kuantifikasi matematis respon $K$ terhadap temperatur dinyatakan secara eksak oleh Persamaan Isochor Van 't Hoff:
$$\\frac{d \\ln K}{dT} = \\frac{\\Delta H^\\circ}{RT^2} \\iff \\ln\\left(\\frac{K_2}{K_1}\\right) = -\\frac{\\Delta H^\\circ}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)$$

#### Langkah 5: Efek Katalisator terhadap Kesetimbangan
Katalisator mempercepat laju pembentukan produk ($r_{\\text{fwd}}$) dan laju penguraian reaktan ($r_{\\text{rev}}$) dalam proporsi yang identik dengan cara menurunkan energi aktivasi kedua jalur sebesar $\\Delta E_a$:
$$\\text{Katalis mempercepat laju pencapaian kesetimbangan, tetapi TIDAK MENGUBAH nilai } K \\text{ maupun yield produk!}$$

---

### 3. High-Contrast Visual Matrix: Respons Sistem Multivariabel Terhadap Perturbasi

| Jenis Perturbasi Eksternal | Perubahan Nilai Kuosien ($Q$) | Nilai Tetapan Kesetimbangan ($K$) | Arah Respon Sistem Menuju Kesetimbangan Baru |
| :--- | :--- | :--- | :--- |
| **Tambah Reaktan / Tarik Produk** | $Q < K$ | Tetap konstan | **Bergeser ke Kanan ($\\to$)** |
| **Tambah Produk / Tarik Reaktan** | $Q > K$ | Tetap konstan | **Bergeser ke Kiri ($\\leftarrow$)** |
| **Volume Dipangkas (Tekanan Naik)** | $Q \\neq K$ (jika $\\Delta n_g \\neq 0$) | Tetap konstan | **Ke arah sisi dengan koefisien mol gas lebih kecil** |
| **Gas Inert pada $V$ Konstan** | $Q = K$ (tekanan parsial tetap) | Tetap konstan | **Sama sekali TIDAK BERGESER** |
| **Gas Inert pada $P$ Konstan** | $Q \\neq K$ (terjadi ekspansi $V$) | Tetap konstan | **Ke arah sisi dengan koefisien mol gas lebih besar** |
| **Suhu Naik pada Reaksi Endoterm** | $Q < K$ (karena $K$ naik) | **$K$ meningkat ($K_2 > K_1$)** | **Bergeser ke Kanan ($\\to$)** |
| **Suhu Naik pada Reaksi Eksoterm** | $Q > K$ (karena $K$ turun) | **$K$ menurun ($K_2 < K_1$)** | **Bergeser ke Kiri ($\\leftarrow$)** |
| **Penambahan Katalisator** | $Q = K$ | Tetap konstan | **Tidak bergeser; kesetimbangan tercapai lebih cepat** |

---

### 4. Official GitHub Callouts

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Mitos Gas Inert & Modulasi Tekanan
> Sering kali siswa berasumsi bahwa penambahan gas inert (seperti gas argon) selalu menggeser kesetimbangan karena "tekanan sistem naik".
> **Hukum Fisis Pasti:** Reaksi kesetimbangan fasa gas hanya merespon perubahan tekanan parsial masing-masing reaktan ($P_i = [i]RT$). Pada bejana tertutup bervolume kaku, molekul gas argon tidak memengaruhi kerapatan molekul reaktan per liter wadah. Kuosien $Q_p$ identik dengan $K_p$, sehingga pergeseran nol!

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Plot Garis Lurus Persamaan Van 't Hoff
> Pada soal bertipe penentuan termodinamika eksperimen, buatlah plot garis lurus antara $\\ln K$ (sumbu $y$) terhadap $1/T$ (sumbu $x$):
> $$\\ln K = -\\frac{\\Delta H^\\circ}{R}\\left(\\frac{1}{T}\\right) + \\frac{\\Delta S^\\circ}{R}$$
> - **Kemiringan kurva (Slope $m$):** $m = -\\frac{\\Delta H^\\circ}{R}$.
> - Jika slope **negatif** ($m < 0$) $\\implies \\Delta H^\\circ > 0$ (Reaksi Endotermik).
> - Jika slope **positif** ($m > 0$) $\\implies \\Delta H^\\circ < 0$ (Reaksi Eksotermik).
> - Titik potong sumbu $y$ (Intercept $c$): $c = \\frac{\\Delta S^\\circ}{R}$.`,
      keyFormulas: [
        { name: 'Isochor Van t Hoff', formula: '\\ln\\left(\\frac{K_2}{K_1}\\right) = -\\frac{\\Delta H^\\circ}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)' },
        { name: 'Plot Garis Lurus Van t Hoff', formula: '\\ln K = -\\frac{\\Delta H^\\circ}{R}\\left(\\frac{1}{T}\\right) + \\frac{\\Delta S^\\circ}{R}' },
      ],
    },
    {
      tag: 'teori-asam-basa-autoionisasi-air',
      tags: ['teori-bronsted-lowry', 'asam-basa-lewis', 'autoionisasi-air-kw', 'skala-ph-poh', 'kekuatan-asam-relatif'],
      title: 'Prasyarat 3: Teori Asam-Basa (Brønsted-Lowry & Lewis), Autoionisasi Air (Kw), dan Skala pH-pOH Presisi',
      summary: 'Kajian konsep transfer proton Brønsted, donor pasangan elektron Lewis, tetapan autoionisasi air Kw terhadap temperatur, serta modulasi skala logaritmik pH.',
      content: `### 1. Intuitive Mental Model Hook: Permainan Tangkap Bola Proton & Orbital Donor-Akseptor
Bayangkan partikel proton ($\\ce{H+}$) adalah bola kriket bermuatan tinggi yang tidak pernah bisa melayang telanjang di udara terbuka karena kerapatan muatannya yang luar biasa padat. Dalam pelarut air, bola tersebut selalu harus berada di dalam sarung penangkap.

Dalam teori Brønsted-Lowry, asam adalah pelempar bola proton, sedangkan basa adalah sarung penangkapnya. Namun Gilbert N. Lewis melangkah lebih dalam ke inti mekanika kuantum: yang mengikat bola proton pada dasarnya adalah sepasang elektron bebas! Teori Lewis memperluas batas konsep asam-basa ke seluruh interaksi orbital koordinasi molekuler alam semesta: asam adalah wadah orbital kosong (LUMO), dan basa adalah pemilik awan elektron bebas berenergi tinggi (HOMO).

---

### 2. Scaffolded Step-by-Step Logic: Teori Asam-Basa, Autoionisasi Air, & Skala Logaritmik

#### Langkah 1: Teori Asam Basa Brønsted-Lowry & Pasangan Konjugasi
Setiap asam yang melepaskan satu proton membentuk basa konjugasi, dan basa yang menangkap proton membentuk asam konjugasi:
$$\\ce{\\underset{\\text{Asam 1}}{HA} + \\underset{\\text{Basa 2}}{B} <=> \\underset{\\text{Basa Konjugasi 1}}{A^-} + \\underset{\\text{Asam Konjugasi 2}}{BH+}}$$
*Kaidah Kestabilan Termodinamika:* Semakin kuat sifat keasaman spesi $\\ce{HA}$, semakin stabil dan lemah basa konjugasinya ($\\ce{A-}$). Asam sangat kuat seperti $\\ce{HClO4}, \\ce{HCl}$ memiliki basa konjugasi $\\ce{ClO4-}, \\ce{Cl-}$ yang luar biasa stabil dan tidak terhidrolisis dalam air.

#### Langkah 2: Teori Lewis (Interaksi Orbital HOMO - LUMO)
- **Asam Lewis:** Akseptor pasangan elektron bebas (memiliki orbital kosong), contoh: kation logam transisi ($\\ce{Fe^3+}, \\ce{Cu^2+}$), molekul defisien elektron ($\\ce{BF3}, \\ce{AlCl3}$), dan oksida asam ($\\ce{CO2}, \\ce{SO3}$).
- **Basa Lewis:** Donor pasangan elektron bebas, contoh: molekul netral berpasangan elektron bebas ($\\ce{:NH3}, \\ce{H2\\overset{..}{O}:}$) dan anion ($\\ce{OH-}, \\ce{CN-}, \\ce{F-}$).
$$\\ce{BF3 + :NH3 -> F3B<-NH3} \\quad (\\text{Ikatan Kovalen Koordinasi})$$

#### Langkah 3: Autoionisasi Air ($K_w$) & Sensitivitas Temperatur
Air murni secara spontan mengalami autoprotolisis endotermik dalam fraksi yang sangat kecil:
$$\\ce{2H2O(l) <=> H3O+(aq) + OH-(aq)} \\quad \\Delta H^\\circ = +55.84\\text{ kJ/mol}$$
Tetapan kesetimbangan autoionisasi air dinyatakan sebagai hasil kali ion air ($K_w$):
$$K_w = [\\ce{H3O+}][\\ce{OH-}] = [\\ce{H+}][\\ce{OH-}]$$
Karena proses autoionisasi bersifat endotermik ($\\Delta H^\\circ > 0$), kenaikan temperatur menggeser kesetimbangan ke arah kanan, menaikkan nilai numerik $K_w$ secara dramatis!

#### Langkah 4: Skala Logaritmik pH Sørensen & Relasi $K_a \\cdot K_b = K_w$
Definisi operasional pH yang diperkenalkan oleh S.P.L. Sørensen (1909):
$$\\text{pH} = -\\log_{10} [\\ce{H+}], \\quad \\text{pOH} = -\\log_{10} [\\ce{OH-}]$$
Mengambil logaritma negatif dari persamaan autoionisasi air:
$$-\\log K_w = -\\log[\\ce{H+}] + (-\\log[\\ce{OH-}]) \\iff \\text{pH} + \\text{pOH} = \\text{p}K_w$$
Untuk pasangan asam-basa konjugasi $\\ce{HA / A-}$ dalam medium air:
$$K_a = \\frac{[\\ce{H+}][\\ce{A-}]}{[\\ce{HA}]}, \\quad K_b = \\frac{[\\ce{HA}][\\ce{OH-}]}{[\\ce{A-}]}$$
Mengalikan kedua tetapan kesetimbangan menghasilkan relasi fundamental:
$$K_a \\times K_b = \\frac{[\\ce{H+}][\\ce{A-}]}{[\\ce{HA}]} \\times \\frac{[\\ce{HA}][\\ce{OH-}]}{[\\ce{A-}]} = [\\ce{H+}][\\ce{OH-}] = K_w$$
$$\\text{p}K_a + \\text{p}K_b = \\text{p}K_w$$

---

### 3. High-Contrast Visual Matrix: Variasi Parameter Autoprotolisis Air Terhadap Temperatur

| Temperatur ($T$) | Nilai Tetapan $K_w$ | Nilai $\\text{p}K_w$ | $[\ce{H+}]_{\\text{netral}} = \\sqrt{K_w}$ | Titik $\\text{pH Netral}$ Air Murni | Keterangan Fisis |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **$0.0^\\circ\\text{C}$ (273 K)** | $0.114 \\times 10^{-14}$ | 14.94 | $3.38 \\times 10^{-8}\\text{ M}$ | **7.47** | Netral sempurna; disosiasi air minimum |
| **$25.0^\\circ\\text{C}$ (298 K)** | $1.008 \\times 10^{-14}$ | **14.00** | $1.00 \\times 10^{-7}\\text{ M}$ | **7.00** | Standar laboratorium konvensional |
| **$37.0^\\circ\\text{C}$ (310 K)** | $2.400 \\times 10^{-14}$ | 13.62 | $1.55 \\times 10^{-7}\\text{ M}$ | **6.81** | Temperatur fisiologis tubuh manusia |
| **$100.0^\\circ\\text{C}$ (373 K)**| $5.130 \\times 10^{-13}$ | 12.29 | $7.16 \\times 10^{-7}\\text{ M}$ | **6.14** | Air mendidih; ionisasi meningkat 50 kali lipat |

---

### 4. Official GitHub Callouts

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Definisi Universal Netralitas Air
> "Larutan netral selalu memiliki $\\text{pH} = 7.00$." Ini adalah miskonsepsi paling fatal di babak seleksi OSN!
> **Koreksi Ilmiah:** Definisi netralitas termodinamika adalah kesetaraan konsentrasi ion hidronium dan ion hidroksida: $[\\ce{H+}] = [\\ce{OH-}]$. Pada temperatur tubuh manusia ($37^\\circ\\text{C}$), air murni memiliki $\\text{pH} = 6.81$. Larutan ini **netral sempurna**, bukan asam! Larutan baru bersifat asam jika $\\text{pH} < \\frac{1}{2}\\text{p}K_w$.

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Interaksi Asam-Basa Lewis Anorganik
> Saat menganalisis sifat asam kation logam transisi dalam larutan air:
> - Kation bervalensi tinggi dengan jari-jari kecil (kerapatan muatan tinggi seperti $\\ce{Fe^3+}, \\ce{Al^3+}, \\ce{Cr^3+}$) bertindak sebagai asam Lewis kuat yang mempolarisasi ikatan $\\ce{O-H}$ molekul air koordinasinya:
>   $$\\ce{[Fe(H2O)6]^3+(aq) + H2O(l) <=> [Fe(H2O)5(OH)]^2+(aq) + H3O+(aq)}$$
> - Larutan garam $\\ce{FeCl3}$ murni bersifat cukup asam dengan $\\text{pH} \\approx 2 - 3$ murni akibat hidrolisis asam Lewis ini.`,
      keyFormulas: [
        { name: 'Hasil Kali Ion Air', formula: 'K_w = [\\ce{H+}][\\ce{OH-}]' },
        { name: 'Hubungan Ka dan Kb Konjugasi', formula: 'K_a \\cdot K_b = K_w \\iff \\text{p}K_a + \\text{p}K_b = \\text{p}K_w' },
        { name: 'pH Netral Terhadap Suhu', formula: '\\text{pH}_{\\text{netral}} = \\frac{1}{2} \\text{p}K_w' },
      ],
    },
  ],
  core_concepts: [
    {
      tag: 'asam-basa-poliprotik-spesiasi-alpha',
      tags: ['asam-basa-poliprotik', 'spesiasi-larutan', 'fraksi-alfa-spesies', 'garam-amfiprotik', 'asam-diprotik-triprotik'],
      title: 'Konsep Inti 1: Spesiasi Asam-Basa Poliprotik, Fraksi Mol Spesies Alpha (α), & pH Garam Amfiprotik',
      summary: 'Penurunan fraksi distribusi spesies alfa (α), kurva spesiasi pH, neraca massa-muatan, dan formulasi eksak pH garam amfiprotik NaHA.',
      content: `### 1. Intuitive Mental Model Hook: Tangga Air Terjun Proton Tiga Tingkat
Bayangkan asam triprotik seperti asam fosfat ($\\ce{H3PO4}$) sebagai bendungan bertingkat tiga yang mengalirkan air ke bawah. Di tingkat teratas, melepaskan proton pertama ($K_{a1} = 7.1 \\times 10^{-3}$) berlangsung sangat mudah karena molekul awalnya netral tanpa hambatan elektrostatik.

Namun saat molekul hendak melepaskan proton kedua dari anion monovalen $\\ce{H2PO4-}$, gaya tarik Coulomb negatif menahan proton dengan jauh lebih kuat ($K_{a2} = 6.3 \\times 10^{-8}$, seratus ribu kali lebih sulit!). Melepaskan proton ketiga dari anion bivalen $\\ce{HPO4^2-}$ ($K_{a3} = 4.5 \\times 10^{-13}$) ibarat mendaki tebing vertikal. Akibat rentang perbedaan tetapan disosiasi yang spektakuler ini, spesies-spesies asam poliprotik terdistribusi secara spesifik pada rentang pH yang berbeda.

---

### 2. Scaffolded Step-by-Step Logic: Spesiasi Alpha & Penurunan pH Garam Amfiprotik

#### Langkah 1: Sistem Disosiasi Bertingkat Asam Diprotik ($\\ce{H2A}$)
$$\\text{Tahap 1: } \\ce{H2A <=> H+ + HA-} \\quad K_{a1} = \\frac{[\\ce{H+}][\\ce{HA-}]}{[\\ce{H2A}]}$$
$$\\text{Tahap 2: } \\ce{HA- <=> H+ + A^2-} \\quad K_{a2} = \\frac{[\\ce{H+}][\\ce{A^2-}]}{[\\ce{HA-}]}$$
Persamaan Neraca Massa Konsentrasi Analit Total ($C_{\\text{tot}}$):
$$C_{\\text{tot}} = [\\ce{H2A}] + [\\ce{HA-}] + [\\ce{A^2-}]$$

#### Langkah 2: Penurunan Fraksi Distribusi Spesies Alpha ($\\alpha$)
Nyatakan seluruh konsentrasi spesies sebagai fungsi konsentrasi $[\\ce{H+}]$ dan $[\\ce{H2A}]$:
$$[\\ce{HA-}] = \\frac{K_{a1}[\\ce{H2A}]}{[\\ce{H+}]}, \\quad [\\ce{A^2-}] = \\frac{K_{a2}[\\ce{HA-}]}{[\\ce{H+}]} = \\frac{K_{a1}K_{a2}[\\ce{H2A}]}{[\\ce{H+}]^2}$$
Substitusikan ke dalam persamaan neraca massa:
$$C_{\\text{tot}} = [\\ce{H2A}]\\left(1 + \\frac{K_{a1}}{[\\ce{H+}]} + \\frac{K_{a1}K_{a2}}{[\\ce{H+}]^2}\\right) = [\\ce{H2A}]\\left(\\frac{[\\ce{H+}]^2 + K_{a1}[\\ce{H+}] + K_{a1}K_{a2}}{[\\ce{H+}]^2}\\right)$$
Definisikan penyebut polinomial distribusi ($D$):
$$D = [\\ce{H+}]^2 + K_{a1}[\\ce{H+}] + K_{a1}K_{a2}$$
Maka fraksi mol masing-masing spesies alfa didefinisikan sebagai rasio konsentrasi spesies terhadap $C_{\\text{tot}}$:
$$\\alpha_0 = \\frac{[\\ce{H2A}]}{C_{\\text{tot}}} = \\frac{[\\ce{H+}]^2}{D}$$
$$\\alpha_1 = \\frac{[\\ce{HA-}]}{C_{\\text{tot}}} = \\frac{K_{a1}[\\ce{H+}]}{D}$$
$$\\alpha_2 = \\frac{[\\ce{A^2-}]}{C_{\\text{tot}}} = \\frac{K_{a1}K_{a2}}{D}$$
*Karakteristik Matematis Mutlak:* $\\alpha_0 + \\alpha_1 + \\alpha_2 = 1.00$. Fraksi spesies hanya ditentukan oleh $[\\ce{H+}]$ dan tetapan disosiasi, sepenuhnya independen dari kepekatan konsentrasi total analit $C_{\\text{tot}}$!

#### Langkah 3: Derivasi Eksak pH Garam Amfiprotik ($\\ce{NaHA}$)
Anion amfiprotik $\\ce{HA-}$ dapat bertindak sebagai asam (melepas $\\ce{H+}$ via $K_{a2}$) maupun sebagai basa (menangkap $\\ce{H+}$ via $K_b = K_w / K_{a1}$).
1. **Neraca Muatan Listrik Sistem (Charge Balance):**
   $$[\\ce{Na+}] + [\\ce{H+}] = [\\ce{HA-}] + 2[\\ce{A^2-}] + [\\ce{OH-}]$$
2. **Neraca Massa Analit (Mass Balance):**
   $$[\\ce{Na+}] = C = [\\ce{H2A}] + [\\ce{HA-}] + [\\ce{A^2-}]$$
3. **Eliminasi $[\\ce{Na+}]$ dan $[\\ce{HA-}]$:**
   Substitusikan persamaan neraca massa ke dalam neraca muatan:
   $$[\\ce{H2A}] + [\\ce{HA-}] + [\\ce{A^2-}] + [\\ce{H+}] = [\\ce{HA-}] + 2[\\ce{A^2-}] + [\\ce{OH-}]$$
   $$[\\ce{H2A}] + [\\ce{H+}] = [\\ce{A^2-}] + [\\ce{OH-}]$$
4. **Substitusi Kesetimbangan:**
   $$\\frac{[\\ce{H+}][\\ce{HA-}]}{K_{a1}} + [\\ce{H+}] = \\frac{K_{a2}[\\ce{HA-}]}{[\\ce{H+}]} + \\frac{K_w}{[\\ce{H+}]}$$
   Kalikan kedua sisi dengan $[\\ce{H+}]$:
   $$[\\ce{H+}]^2 \\left(1 + \\frac{[\\ce{HA-}]}{K_{a1}}\\right) = K_{a2}[\\ce{HA-}] + K_w$$
   $$[\\ce{H+}]^2 \\left(\\frac{K_{a1} + [\\ce{HA-}]}{K_{a1}}\\right) = K_{a2}[\\ce{HA-}] + K_w$$
   $$[\\ce{H+}] = \\sqrt{\\frac{K_{a1}(K_{a2}[\\ce{HA-}] + K_w)}{K_{a1} + [\\ce{HA-}]}}$$
5. **Aproksimasi Standar Konsentrasi Analit Wajar:**
   Jika konsentrasi garam $C$ cukup pekat ($C \\gg K_{a1}$ dan $K_{a2}C \\gg K_w$), maka $[\\ce{HA-}] \\approx C$:
   $$[\\ce{H+}] \\approx \\sqrt{\\frac{K_{a1}K_{a2}C}{C}} = \\sqrt{K_{a1}K_{a2}}$$
   $$\\text{pH} \\approx \\frac{\\text{p}K_{a1} + \\text{p}K_{a2}}{2}$$

---

### 3. High-Contrast Visual Matrix: Peta Dominansi Spesiasi Asam Diprotik (H2A)

| Rentang pH Larutan | Kondisi Konsentrasi $[\\ce{H+}]$ | Spesies Dominan Utama | Fraksi Alfa Dominan | Keterangan Kimiawi Analitis |
| :--- | :--- | :--- | :--- | :--- |
| **$\\text{pH} < \\text{p}K_{a1}$** | $[\\ce{H+}] \\gg K_{a1}$ | **Molekul Utuh $\\ce{H2A}$** | $\\alpha_0 \\to 1.0$ | Asam kuat menekan disosiasi; bentuk non-ionik mendominasi |
| **$\\text{pH} = \\text{p}K_{a1}$** | $[\\ce{H+}] = K_{a1}$ | **$\\ce{H2A}$ dan $\\ce{HA-}$** | $\\alpha_0 = \\alpha_1$ | Titik tengah buffer tahap pertama ($[\\ce{H2A}] = [\\ce{HA-}]$) |
| **$\\text{pH} = \\frac{\\text{p}K_{a1} + \\text{p}K_{a2}}{2}$** | $[\\ce{H+}] = \\sqrt{K_{a1}K_{a2}}$ | **Anion Amfiprotik $\\ce{HA-}$** | **$\\alpha_1$ Maksimum** | Titik puncak spesiasi garam $\\ce{NaHA}$ atau zwitterion asam amino |
| **$\\text{pH} = \\text{p}K_{a2}$** | $[\\ce{H+}] = K_{a2}$ | **$\\ce{HA-}$ dan $\\ce{A^2-}$** | $\\alpha_1 = \\alpha_2$ | Titik tengah buffer tahap kedua ($[\\ce{HA-}] = [\\ce{A^2-}]$) |
| **$\\text{pH} > \\text{p}K_{a2}$** | $[\\ce{H+}] \\ll K_{a2}$ | **Dianion Sempurna $\\ce{A^2-}$** | $\\alpha_2 \\to 1.0$ | Basa kuat mendeprotonasi seluruh proton analit |

---

### 4. Official GitHub Callouts

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Batas Runtuhnya Rumus Sederhana Garam Amfiprotik
> Rumus praktis $\\text{pH} = \\frac{\\text{p}K_{a1} + \\text{p}K_{a2}}{2}$ **hanya berlaku** jika dua syarat dipenuhi:
> 1. Konsentrasi analit jauh melampaui tetapan disosiasi pertama ($C \\gg K_{a1}$).
> 2. Hasil kali $K_{a2} \\cdot C$ jauh melampaui autoionisasi air ($K_{a2} C \\gg K_w$).
> Jika garam amfiprotik sangat encer ($C < 10^{-4}\\text{ M}$) atau jika asam memiliki $K_{a1}$ yang cukup besar (misal ion bisulfat $\\ce{HSO4-}$ dengan $K_{a1} \\approx \\infty$ dan $K_{a2} = 1.2 \\times 10^{-2}$), aproksimasi tersebut gagal total! Anda wajib kembali ke formula eksak kuadratik neraca muatan.

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Konsentrasi Ion Tahap Kedua $[A^{2-}]$
> Pada larutan asam diprotik murni $\\ce{H2A}$ (seperti $\\ce{H2S}$ atau $\\ce{H2CO3}$):
> Karena $K_{a1} \\gg K_{a2}$, seluruh ion $\\ce{H+}$ dalam larutan praktis disuplai oleh tahap ionisasi pertama, sehingga $[\\ce{H+}] \\approx [\\ce{HA-}]$.
> Substitusikan kesetaraan ini ke dalam ekspresi $K_{a2}$:
> $$K_{a2} = \\frac{[\\ce{H+}][\\ce{A^2-}]}{[\\ce{HA-}]} \\approx \\frac{[\\ce{HA-}][\\ce{A^2-}]}{[\\ce{HA-}]} = [\\ce{A^2-}]$$
> $$\\mathbf{[\\ce{A^2-}] \\approx K_{a2}}$$
> Konsentrasi ion diprotik terdeprotonasi penuh $[\\ce{A^2-}]$ dalam larutan asam diprotik murni selalu bernilai konstan mendekati nilai numerik $K_{a2}$, terlepas dari berapa pun konsentrasi awal analit asamnya!`,
      keyFormulas: [
        { name: 'Fraksi Alfa HA- Diprotik', formula: '\\alpha_1 = \\frac{K_{a1}[\\ce{H+}]}{[\\ce{H+}]^2 + K_{a1}[\\ce{H+}] + K_{a1}K_{a2}}' },
        { name: 'pH Spesi Amfiprotik Eksak', formula: '[\\ce{H+}] = \\sqrt{\\frac{K_{a1}(K_{a2}C + K_w)}{K_{a1} + C}}' },
        { name: 'Aproksimasi pH Amfiprotik', formula: '\\text{pH} \\approx \\frac{\\text{p}K_{a1} + \\text{p}K_{a2}}{2}' },
      ],
    },
    {
      tag: 'larutan-penyangga-kapasitas-van-slyke',
      tags: ['larutan-penyangga', 'henderson-hasselbalch', 'kapasitas-buffer', 'indeks-van-slyke', 'buffer-fisiologis'],
      title: 'Konsep Inti 2: Sistem Penyangga Kompleks, Persamaan Henderson-Hasselbalch, & Indeks Kapasitas Buffer Van Slyke',
      summary: 'Formulasi matematis larutan buffer, indeks kapasitas penyangga diferensial Van Slyke (β), batas operasional buffer, dan mekanisme penyangga terbuka.',
      content: `### 1. Intuitive Mental Model Hook: Shock Absorber Suspensi Mobil & Paru-Paru Manusia
Bayangkan suspensi peredam kejut hidrolik (*shock absorber*) pada mobil balap. Ketika roda menghantam lubang jalanan yang curam, fluida hidrolik menyerap energi tumbukan sehingga bodi mobil tetap stabil melaju mulus tanpa guncangan berarti.

Larutan penyangga (*buffer*) adalah peredam kejut kimiawi untuk ion hidronium. Ketika asam kuat eksternal menyusup, basa konjugasi menyerap ion $\\ce{H+}$. Sebaliknya ketika basa kuat masuk, molekul asam lemah segera melepaskan $\\ce{H+}$ untuk menetralkannya. Yang paling mengagumkan adalah sistem penyangga darah manusia: bukan sekadar tabung tertutup pasif, melainkan sebuah **sistem terbuka (*open system*)** dinamis yang terhubung langsung ke ventilasi paru-paru untuk menghembuskan kelebihan $\\ce{CO2}$ seketika!

---

### 2. Scaffolded Step-by-Step Logic: Henderson-Hasselbalch & Indeks Van Slyke

#### Langkah 1: Persamaan Henderson-Hasselbalch
Untuk campuran asam lemah $\\ce{HA}$ dan garam basa konjugasinya $\\ce{A-}$:
$$K_a = \\frac{[\\ce{H+}][\\ce{A-}]}{[\\ce{HA}]} \\iff [\\ce{H+}] = K_a \\cdot \\frac{[\\ce{HA}]}{[\\ce{A-}]}$$
Ambil $-\\log_{10}$ pada kedua sisi:
$$-\\log[\\ce{H+}] = -\\log K_a - \\log\\left(\\frac{[\\ce{HA}]}{[\\ce{A-}]}\\right)$$
$$\\text{pH} = \\text{p}K_a + \\log\\left(\\frac{[\\ce{A-}]}{[\\ce{HA}]}\\right) = \\text{p}K_a + \\log\\left(\\frac{n_{\\ce{A-}}}{n_{\\ce{HA}}}\\right)$$
Karena volume total larutan sama, rasio konsentrasi molar identik dengan rasio mol masing-masing komponen.

#### Langkah 2: Indeks Kapasitas Penyangga Donald Van Slyke ($\\beta$)
Kapasitas penyangga bukan sekadar konsep kualitatif. Donald Dexter Van Slyke (1922) mendefinisikan kapasitas buffer ($\\beta$) secara diferensial analitis sebagai jumlah mol basa kuat monobasa ($C_b$) atau asam kuat ($C_a$) per liter yang diperlukan untuk mengubah pH sistem sebesar satu satuan unit:
$$\\beta = \\frac{dC_b}{d\\text{pH}} = -\\frac{dC_a}{d\\text{pH}}$$
Berdasarkan neraca muatan larutan penyangga yang ditambah basa kuat $C_b$:
$$[\\ce{Na+}] + [\\ce{H+}] = [\\ce{A-}] + [\\ce{OH-}] \\implies C_b = [\\ce{A-}] + [\\ce{OH-}] - [\\ce{H+}]$$
Substitusikan $[\\ce{A-}] = C_{\\text{tot}} \\frac{K_a}{[\\ce{H+}] + K_a}$ dan diferensialkan terhadap pH (di mana $d\\text{pH} = -\\frac{d[\\ce{H+}]}{2.303 [\\ce{H+}]}$):
$$\\beta = 2.303 \\left( [\\ce{H+}] + [\\ce{OH-}] + \\frac{C_{\\text{tot}} K_a [\\ce{H+}]}{(K_a + [\\ce{H+}])^2} \\right)$$
di mana $C_{\\text{tot}} = [\\ce{HA}] + [\\ce{A-}]$.
- Suku $([\\ce{H+}] + [\\ce{OH-}])$ adalah kontribusi disosiasi pelarut air murni (dominan hanya pada pH ekstrem $< 2$ atau $> 12$).
- Suku $\\frac{C_{\\text{tot}} K_a [\\ce{H+}]}{(K_a + [\\ce{H+}])^2}$ adalah kapasitas penahanan spesifik pasangan dapar konjugasi.

#### Langkah 3: Kondisi Kapasitas Penyangga Maksimum ($\\beta_{\\text{max}}$)
Melalui diferensial kedua $\\frac{d\\beta}{d[\\ce{H+}]} = 0$, kapasitas penyangga mencapai puncak maksimum saat $[\\ce{H+}] = K_a$, yang berarti $[\\ce{A-}] = [\\ce{HA}]$ dan $\\mathbf{\\text{pH} = \\text{p}K_a}$:
$$\\beta_{\\text{max}} = 2.303 \\left( \\frac{C_{\\text{tot}} K_a^2}{(2K_a)^2} \\right) = \\frac{2.303}{4} C_{\\text{tot}} \\approx \\mathbf{0.576 \\cdot C_{\\text{tot}}}$$
*Rentang Kerja Operasional:* Buffer beroperasi efektif pada rentang $\\mathbf{\\text{pH} = \\text{p}K_a \\pm 1.0}$. Pada batas $\\text{p}K_a \\pm 1$, rasio konjugasi mencapai $10:1$ atau $1:10$, dan nilai $\\beta$ terdegradasi hingga tersisa sepertiga dari kapasitas puncaknya.

#### Langkah 4: Termodinamika Dapar Bikarbonat Darah (Open vs Closed System)
Dalam plasma darah mamalia ($37.0^\\circ\\text{C}$):
- $\\text{pH} = 7.40$, dengan pasangan dapar utama $\\ce{CO2(aq) / HCO3-(aq)}$ ($pK_a' = 6.10$).
- Rasio konsentrasi fisiologis: $\\frac{[\\ce{HCO3-}]}{[\\ce{CO2(aq)}]} = 10^{7.40 - 6.10} = 10^{1.30} \\approx 20 : 1$.
Meskipun rasio $20:1$ berada di luar batas $\\text{p}K_a \\pm 1$, darah merupakan **sistem terbuka**:
$$\\ce{H+ + HCO3- <=> H2CO3 <=> CO2(aq) <=> CO2(g, paru-paru)}$$
Kelebihan $\\ce{CO2}$ segera dieliminasi lewat pernapasan, menjaga $[\\ce{CO2(aq)}]$ konstan pada $1.2\\text{ mmol/L}$, melipatgandakan kapasitas dapar fisiologis melawan asidosis secara spektakuler!

---

### 3. High-Contrast Visual Matrix: Perbandingan Kapasitas Buffer Tertutup vs Terbuka

| Parameter Evaluasi | Sistem Penyangga Tertutup (Lab Beaker) | Sistem Penyangga Terbuka (Plasma Paru-Paru) |
| :--- | :--- | :--- |
| **Konsentrasi Total Dapar ($C_{\\text{tot}}$)** | Konstan mutlak ($[\\ce{HA}] + [\\ce{A-}] = \\text{tetap}$) | Dinamis bervariasi mengikuti tekanan parsial gas |
| **Akumulasi Produk Netralisasi** | Produk protonasi ($\\ce{HA}$) menumpuk di wadah | Produk $\\ce{CO2}$ langsung dibuang via pernapasan paru |
| **Kapasitas Maksimum Terjadi Pada** | Tepat pada $\\text{pH} = \\text{p}K_a$ ($[\\ce{HA}] = [\\ce{A-}]$) | Bergeser ke arah basa ($\text{pH} \\approx 7.40$, rasio $20:1$) |
| **Dampak Penambahan Asam Kuat** | pH turun signifikan akibat akumulasi $\\ce{HA}$ | pH turun sangat minim karena $[\\ce{CO2(aq)}]$ dipatok konstan |
| **Indeks Kapasitas Penyangga $\\beta$** | $\\beta = 2.303 \\cdot \\alpha_0 \\alpha_1 C_{\\text{tot}}$ | $\\beta_{\\text{open}} = 2.303 [\\ce{HCO3-}]$ (jauh lebih masif!) |

---

### 4. Official GitHub Callouts

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Efek Pengenceran pada Larutan Penyangga
> Apakah pengenceran larutan penyangga dengan air murni mengubah pH?
> - **Nilai pH:** Hampir tidak berubah, karena volume pembagi saling membatalkan: $\\text{pH} = \\text{p}K_a + \\log(n_{\\ce{A-}} / n_{\\ce{HA}})$.
> - **Kapasitas Penyangga ($\\beta$):** **ANJLOK SECARA LINIER!** Karena $\\beta_{\\text{max}} = 0.576 C_{\\text{tot}}$, pengenceran 10 kali lipat memangkas daya tahan larutan terhadap penambahan asam/basa eksternal sebesar 10 kali lipat pula. Jangan pernah menyamakan "pH tidak berubah" dengan "kapasitas buffer tidak berubah".

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Desain Formulasi Larutan Dapar Ideal
> Jika dalam soal olimpiade Anda diminta merancang buffer dengan pH target tertentu:
> 1. Pilih pasangan asam-basa konjugasi yang memiliki $\\mathbf{\\text{p}K_a \\text{ paling dekat dengan } \\text{pH}_{\\text{target}}}$ ($|\\text{pH} - \\text{p}K_a| \\le 0.5$).
> 2. Hitung rasio mol via Henderson-Hasselbalch: $\\frac{[\\ce{A-}]}{[\\ce{HA}]} = 10^{\\text{pH} - \\text{p}K_a}$.
> 3. Gunakan konsentrasi analit total setinggi mungkin ($C_{\\text{tot}} \\ge 0.1\\text{ M}$) untuk memastikan nilai indeks Van Slyke $\\beta$ memadai.`,
      keyFormulas: [
        { name: 'Henderson-Hasselbalch', formula: '\\text{pH} = \\text{p}K_a + \\log\\left(\\frac{[\\ce{A-}]}{[\\ce{HA}]}\\right)' },
        { name: 'Indeks Kapasitas Van Slyke', formula: '\\beta = 2.303 \\left( [\\ce{H+}] + [\\ce{OH-}] + \\frac{C_{\\text{tot}} K_a [\\ce{H+}]}{(K_a + [\\ce{H+}])^2} \\right)' },
        { name: 'Kapasitas Buffer Maksimum', formula: '\\beta_{\\text{max}} \\approx 0.576 \\cdot C_{\\text{tot}}' },
      ],
    },
    {
      tag: 'kurva-titrasi-titik-ekuivalen-indikator',
      tags: ['kurva-titrasi-presisi', 'titik-ekuivalen', 'indikator-asam-basa', 'hidrolisis-garam', 'daerah-buffer-titrasi'],
      title: 'Konsep Inti 3: Analisis Titrimetri Presisi, Titik Ekuivalensi vs Titik Akhir, & Teori Indikator pH',
      summary: 'Profil kurva titrasi asam lemah - basa kuat, perhitungan pH pada 4 segmen titrimetri, hidrolisis garam titik ekuivalen, dan kriteria pemilihan indikator.',
      content: `### 1. Intuitive Mental Model Hook: Profil Roller Coaster pH & Sensor Molekuler Indikator
Bayangkan Anda sedang menaiki wahana *roller coaster*. Di awal perjalanan, kereta melaju di lereng landai yang panjang dengan guncangan minimal. Namun tiba-tiba di depan Anda terbentang jurang vertikal 90 derajat yang menjulang tinggi, sebelum kembali mendatar di peron akhir stasiun.

Kurva titrasi asam-basa mencerminkan lintasan dramatis ini: daerah buffer adalah tanjakan landai tempat pH bertahan kokoh, titik ekuivalensi adalah tebing vertikal tempat penambahan setetes mikroliter titran memicu lonjakan eksponensial jutaan kali lipat konsentrasi ion hidrogen! Indikator visual adalah sensor foton molekuler yang harus memicu transisi warna tepat saat kereta meluncur di tengah-tengah tebing vertikal tersebut.

---

### 2. Scaffolded Step-by-Step Logic: Empat Wilayah Kurva Titrasi Asam Lemah - Basa Kuat

Misalkan $V_a\\text{ mL}$ asam lemah monoprotik $\\ce{HA}$ berkonsentrasi $C_a\\text{ M}$ dititrasi dengan larutan baku $\\ce{NaOH}$ berkonsentrasi $C_b\\text{ M}$.

#### Wilayah 1: Titik Awal Sebelum Titrasi ($V_b = 0.00\\text{ mL}$)
Larutan murni hanya mengandung asam lemah $\\ce{HA}$. Disosiasi dikendalikan oleh tetapan $K_a$:
$$\\ce{HA(aq) <=> H+(aq) + A-(aq)}$$
Jika derajat ionisasi $\\alpha < 5\\%$, gunakan aproksimasi standar:
$$[\\ce{H+}] \\approx \\sqrt{K_a \\cdot C_a} \\implies \\text{pH} = \\frac{1}{2}(\\text{p}K_a - \\log C_a)$$

#### Wilayah 2: Daerah Penyangga Pra-Ekuivalen ($0 < V_b < V_{eq}$)
Penambahan $\\ce{NaOH}$ menetralkan sebagian $\\ce{HA}$ menghasilkan garam konjugasi $\\ce{NaA}$:
- $\\text{Mol } \\ce{HA} \\text{ sisa} = V_a C_a - V_b C_b$
- $\\text{Mol } \\ce{A-} \\text{ terbentuk} = V_b C_b$
Sistem membentuk larutan penyangga sejati:
$$\\text{pH} = \\text{p}K_a + \\log\\left(\\frac{V_b C_b}{V_a C_a - V_b C_b}\\right)$$
*Titik Setengah Ekuivalensi ($V_b = \\frac{1}{2} V_{eq}$):*
Tepat separuh asam ternetralkan $\\implies [\\ce{HA}] = [\\ce{A-}] \\implies \\mathbf{\\text{pH} = \\text{p}K_a}$.

#### Wilayah 3: Titik Ekuivalensi Stoikiometri ($V_b = V_{eq} = \\frac{V_a C_a}{C_b}$)
Seluruh mol $\\ce{HA}$ habis bereaksi stoikiometris membentuk ion asetat $\\ce{A-}$ dalam volume total $V_{\\text{tot}} = V_a + V_{eq}$:
$$C_{\\text{garam}} = \\frac{V_a C_a}{V_a + V_{eq}}$$
Ion $\\ce{A-}$ mengalami hidrolisis parsial menghasilkan lingkungan basa:
$$\\ce{A-(aq) + H2O(l) <=> HA(aq) + OH-(aq)} \\quad K_b = \\frac{K_w}{K_a}$$
$$[\\ce{OH-}] = \\sqrt{K_b \\cdot C_{\\text{garam}}} = \\sqrt{\\frac{K_w}{K_a} \\cdot C_{\\text{garam}}}$$
$$\\text{pOH} = \\frac{1}{2}(\\text{p}K_w - \\text{p}K_a - \\log C_{\\text{garam}}) \\implies \\mathbf{\\text{pH} = 7 + \\frac{1}{2}\\text{p}K_a + \\frac{1}{2}\\log C_{\\text{garam}} > 7.00}$$

#### Wilayah 4: Daerah Pasca-Ekuivalen ($V_b > V_{eq}$)
Kelebihan ion hidroksida dari titran basa kuat mendominasi pH secara mutlak:
$$[\\ce{OH-}]_{\\text{kelebihan}} = \\frac{(V_b - V_{eq})C_b}{V_a + V_b}$$
$$\\text{pOH} = -\\log[\\ce{OH-}]_{\\text{kelebihan}} \\implies \\text{pH} = 14.00 - \\text{pOH}$$

#### Langkah 5: Teori Indikator pH & Galat Titrasi (Titration Error)
Indikator visual adalah asam organik lemah konjugasi ($\\ce{HIn}$):
$$\\ce{HIn(aq) <=> H+(aq) + In-(aq)} \\quad K_{\\text{In}} = \\frac{[\\ce{H+}][\\ce{In-}]}{[\\ce{HIn}]}$$
Mata manusia mengamati perubahan warna saat salah satu bentuk melebihi rasio $10:1$:
$$\\text{Trayek Transisi pH Indikator} = \\text{p}K_{\\text{In}} \\pm 1.0$$
- **Titik Ekuivalensi (TE):** Titik teoritis di mana reaktan tepat bereaksi sempurna secara stoikiometri.
- **Titik Akhir Titrasi (TA):** Titik eksperimental saat indikator visual berubah warna secara permanen.
- **Syarat Mutlak Presisi:** Nilai $\\text{p}K_{\\text{In}}$ harus berada di tengah rentang lonjakan vertikal kurva titrasi pada titik ekuivalen agar $\\text{TA} \\approx \\text{TE}$ dan kesalahan titrasi mendekati nol.

---

### 3. High-Contrast Visual Matrix: Diagnostik 4 Zona Kurva Titrasi Asam Lemah - Basa Kuat

| Zona Kurva Titrasi | Volume Titran Basa ($V_b$) | Komposisi Kimia Dominan | Persamaan Penentuan pH | Sifat Keasaman Larutan |
| :--- | :--- | :--- | :--- | :--- |
| **Zona 1: Awal** | $V_b = 0$ | Asam lemah bebas $\\ce{HA}$ | $[\\ce{H+}] = \\sqrt{K_a \\cdot C_a}$ | Asam ($\\text{pH} < 7$) |
| **Zona 2: Dapar** | $0 < V_b < V_{eq}$ | Pasangan buffer $\\ce{HA / A-}$ | $\\text{pH} = \\text{p}K_a + \\log\\left(\\frac{V_b C_b}{V_a C_a - V_b C_b}\\right)$ | Buffer asam ($\\text{pH} = \\text{p}K_a$ di $0.5 V_{eq}$) |
| **Zona 3: Ekuivalen**| $V_b = V_{eq}$ | Garam terhidrolisis $\\ce{A-}$ | $\\text{pH} = 7 + \\frac{1}{2}\\text{p}K_a + \\frac{1}{2}\\log C_{\\text{garam}}$ | **Basa Lemah ($\\text{pH } 8 - 9$)** |
| **Zona 4: Pasca** | $V_b > V_{eq}$ | Kelebihan basa kuat $\\ce{OH-}$ | $[\\ce{OH-}] = \\frac{(V_b - V_{eq})C_b}{V_a + V_b}$ | Basa Kuat ($\\text{pH } 11 - 13$) |

---

### 4. Official GitHub Callouts

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Mitos Titik Ekuivalen Selalu Ber-pH 7
> Banyak peserta keliru memilih indikator Bromtimol Biru (trayek $6.0 - 7.6$) untuk titrasi asam asetat dengan $\\ce{NaOH}$ karena meyakini titik ekuivalen berada di pH 7.00.
> **Koreksi Fatal:** Titik ekuivalensi titrasi asam lemah dengan basa kuat menghasilkan garam basa ($\text{pH} \\approx 8.7$). Penggunaan indikator dengan trayek di sekitar pH 7 atau metil jingga (trayek $3.1 - 4.4$) akan memicu perubahan warna prematur jauh sebelum titik ekuivalen tercapai, menghasilkan galat titrasi negatif masif! **Fenolftalein (trayek 8.2 - 10.0)** adalah pilihan tepat.

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Ekstraksi pKa Langsung dari Grafis Titrimetri
> Jika Anda disajikan grafik kurva titrasi asam monoprotik yang tidak diketahui identitasnya:
> 1. Cari titik belok vertikal maksimum untuk menentukan volume ekuivalen ($V_{eq}$).
> 2. Tarik garis ke sumbu $x$ pada volume setengahnya: $V_b = \\frac{1}{2} V_{eq}$.
> 3. Baca nilai pH pada titik setengah ekuivalen tersebut:
>    $$\\mathbf{\\text{pH}_{(0.5 V_{eq})} = \\text{p}K_a}$$
> Anda dapat menentukan tetapan disosiasi asam hanya dalam waktu 3 detik tanpa perhitungan rumit!`,
      keyFormulas: [
        { name: 'pH Titik Setengah Ekuivalen', formula: '\\text{pH} = \\text{p}K_a' },
        { name: 'pH Titik Ekuivalen Titrasi', formula: '\\text{pH} = 7 + \\frac{1}{2}\\text{p}K_a + \\frac{1}{2}\\log C_{\\text{garam}}' },
        { name: 'Trayek Transisi Indikator', formula: '\\text{Trayek pH} = \\text{p}K_{\\text{In}} \\pm 1.0' },
      ],
    },
    {
      tag: 'ksp-kelarutan-efek-ion-senama',
      tags: ['ksp-kelarutan', 'hasil-kali-kelarutan', 'pengaruh-ion-senama', 'kuosien-pengendapan-qsp', 'kelarutan-molar'],
      title: 'Konsep Inti 4: Termodinamika Kelarutan, Hasil Kali Kelarutan (Ksp), & Penekanan Efek Ion Senama',
      summary: 'Termodinamika disosiasi garam sukar larut, perbandingan kelarutan molar antar stoikiometri kisi, dan supresi kelarutan oleh keberadaan ion sejenis.',
      content: `### 1. Intuitive Mental Model Hook: Pintu Putar Kereta Komuter & Pertarungan Dua Energi
Bayangkan sebuah pintu putar di stasiun kereta komuter pada jam sibuk. Di dalam stasiun (kristal padat), partikel ion saling mengunci dalam formasi barisan kisi kristal yang sangat rapat karena gaya tarik elektrostatik energi kisi ($\\Delta H_{\\text{lattice}}$).

Di luar peron terbentang samudra molekul air yang siap membungkus dan memeluk setiap ion dengan energi hidrasi ($\\Delta H_{\\text{hydration}}$). Kelarutan garam sukar larut ($K_{sp}$) mencerminkan kesetimbangan dinamis di gerbang pintu putar tersebut: laju ion-ion yang lepas melompat larut ke air tepat menyamai laju ion-ion terlarut yang menabrak kembali kisi kristal untuk mengkristal ulang. Ketika ke dalam air ditambahkan ion yang sama dari luar, pintu putar macet terhalang oleh ion senama tersebut!

---

### 2. Scaffolded Step-by-Step Logic: Formulasi Ksp & Kelarutan Molar (s)

#### Langkah 1: Tetapan Hasil Kali Kelarutan ($K_{sp}$)
Untuk disosiasi garam sukar larut umum dalam air:
$$\\ce{A_x B_y(s) <=> x A^{y+}(aq) + y B^{x-}(aq)}$$
Aktivitas padatan murni adalah satu ($a_{\\ce{A_x B_y}} = 1$), sehingga tetapan kesetimbangan dinyatakan murni oleh hasil kali ion-ion terlarutnya:
$$K_{sp} = [\\ce{A^{y+}}]^x [\\ce{B^{x-}}]^y$$

#### Langkah 2: Pemetaan Kelarutan Molar ($s$) Terhadap Stoikiometri Kisi
Kelarutan molar ($s$) didefinisikan sebagai jumlah mol garam terlarut per liter larutan jenuh:
- **Tipe Garam $AB$ (contoh $\\ce{AgCl}, \\ce{BaSO4}, \\ce{CaCO3}$):**
  $$[\\ce{A+}] = s, \\quad [\\ce{B-}] = s \\implies K_{sp} = s^2 \\iff \\mathbf{s = \\sqrt{K_{sp}}}$$
- **Tipe Garam $AB_2$ atau $A_2B$ (contoh $\\ce{CaF2}, \\ce{PbCl2}, \\ce{Ag2CrO4}$):**
  $$[\\ce{A^2+}] = s, \\quad [\\ce{B-}] = 2s \\implies K_{sp} = (s)(2s)^2 = 4s^3 \\iff \\mathbf{s = \\sqrt[3]{\\frac{K_{sp}}{4}}}$$
- **Tipe Garam $AB_3$ atau $A_3B$ (contoh $\\ce{Fe(OH)3}, \\ce{Al(OH)3}$):**
  $$[\\ce{A^3+}] = s, \\quad [\\ce{B-}] = 3s \\implies K_{sp} = (s)(3s)^3 = 27s^4 \\iff \\mathbf{s = \\sqrt[4]{\\frac{K_{sp}}{27}}}$$
- **Tipe Garam $A_2B_3$ atau $A_3B_2$ (contoh $\\ce{Bi2S3}, \\ce{Ca3(PO4)2}$):**
  $$[\\ce{A^3+}] = 2s, \\quad [\\ce{B^2-}] = 3s \\implies K_{sp} = (2s)^2(3s)^3 = 108s^5 \\iff \\mathbf{s = \\sqrt[5]{\\frac{K_{sp}}{108}}}$$

#### Langkah 3: Penekanan Kelarutan oleh Efek Ion Senama (Common Ion Effect)
Bila garam sukar larut dilarutkan ke dalam larutan yang telah mengandung salah satu ion penyusunnya (misal dari elektrolit kuat), sesuai asas Le Chatelier kehadiran ion senama memaksa kesetimbangan bergeser ke kiri, memangkas kelarutan molar ($s'$) secara ekstrem.

*Contoh Rigor:* Kelarutan $\\ce{AgCl}$ ($K_{sp} = 1.8 \\times 10^{-10}$) dalam larutan $\\ce{NaCl}$ $0.10\\text{ M}$:
$$[\\ce{Cl-}] = 0.10 + s' \\approx 0.10\\text{ M} \\quad (\\text{karena } s' \\ll 0.10)$$
$$K_{sp} = [\\ce{Ag+}][\\ce{Cl-}] = (s')(0.10) = 1.8 \\times 10^{-10} \\implies \\mathbf{s' = 1.8 \\times 10^{-9}\\text{ M}}$$
Kelarutan $\\ce{AgCl}$ dalam air murni adalah $s = \\sqrt{1.8 \\times 10^{-10}} \\approx 1.34 \\times 10^{-5}\\text{ M}$.
Penambahan ion klorida senama $0.10\\text{ M}$ menekan kelarutan perak klorida hingga **hampir 10.000 kali lipat lebih sukar larut!**

---

### 3. High-Contrast Visual Matrix: Diagnostik Kuosien Pengendapan (Qsp) vs Ksp

| Nilai Kuosien Pengendapan ($Q_{sp}$) | Kondisi Kejenuhan Larutan | Respon Spontan Sistem | Konsekuensi Pengamatan Visual |
| :--- | :--- | :--- | :--- |
| **$Q_{sp} < K_{sp}$** | **Larutan Belum Jenuh (*Unsaturated*)** | Garam padat masih dapat larut lebih banyak | Tidak ada endapan terbentuk; larutan jernih sempurna |
| **$Q_{sp} = K_{sp}$** | **Larutan Tepat Jenuh (*Saturated*)** | Kesetimbangan dinamis tercapai ($\\Delta G = 0$) | Batas pembentukan kristal; belum ada endapan makroskopis |
| **$Q_{sp} > K_{sp}$** | **Larutan Lewat Jenuh (*Supersaturated*)** | Spontan bergeser ke kiri membentuk kisi padatan | **Terjadi presipitasi (pengendapan kristal padat)** |

---

### 4. Official GitHub Callouts

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Membandingkan Ksp Beda Stoikiometri
> Kesalahan paling lazim di OSN adalah mengurutkan kelarutan garam hanya dari besar-kecilnya angka $K_{sp}$.
> **Bukti Paradoks:**
> - $\\ce{AgCl}$ ($AB$): $K_{sp} = 1.8 \\times 10^{-10} \\implies s = \\sqrt{1.8 \\times 10^{-10}} = \\mathbf{1.34 \\times 10^{-5}\\text{ M}}$.
> - $\\ce{Ag2CrO4}$ ($A_2B$): $K_{sp} = 1.1 \\times 10^{-12} \\implies s = \\sqrt[3]{\\frac{1.1 \\times 10^{-12}}{4}} = \\mathbf{6.50 \\times 10^{-5}\\text{ M}}$.
> Meskipun nilai $K_{sp}$ perak kromat hampir 200 kali lipat **lebih kecil** daripada perak klorida, kelarutan molar $\\ce{Ag2CrO4}$ justru **hampir 5 kali lipat LEBIH BESAR!** Anda hanya boleh membandingkan $K_{sp}$ secara langsung jika tipe stoikiometrinya persis sama.

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Rumus Inversi Kelarutan Universal
> Untuk garam sembarang dengan formula umum $\\ce{A_x B_y}$:
> $$K_{sp} = x^x \\cdot y^y \\cdot s^{x+y} \\iff \\mathbf{s = \\left(\\frac{K_{sp}}{x^x \\cdot y^y}\\right)^{\\frac{1}{x+y}}}$$
> Hafalkan koefisien prapangkat ini:
> - $AB \\implies 1^1 \\cdot 1^1 = 1 \\implies K_{sp} = s^2$
> - $AB_2 \\implies 1^1 \\cdot 2^2 = 4 \\implies K_{sp} = 4s^3$
> - $AB_3 \\implies 1^1 \\cdot 3^3 = 27 \\implies K_{sp} = 27s^4$
> - $A_2B_3 \\implies 2^2 \\cdot 3^3 = 4 \\times 27 = 108 \\implies K_{sp} = 108s^5$`,
      keyFormulas: [
        { name: 'Ksp Tipe AB2', formula: 'K_{sp} = 4s^3 \\iff s = \\sqrt[3]{K_{sp}/4}' },
        { name: 'Ksp Tipe A2B3', formula: 'K_{sp} = 108s^5 \\iff s = \\sqrt[5]{K_{sp}/108}' },
        { name: 'Ksp Universal AxBy', formula: 'K_{sp} = x^x y^y s^{x+y}' },
      ],
    },
    {
      tag: 'pengendapan-bertingkat-kelarutan-ph-kompleks',
      tags: ['pengendapan-bertingkat', 'kelarutan-bergantung-ph', 'ion-kompleks-kf', 'pemisahan-kation', 'kelarutan-kondisional'],
      title: 'Konsep Inti 5: Pengendapan Bertingkat (Fraksional), Kelarutan Bergantung pH, & Kesetimbangan Ion Kompleks (Kf)',
      summary: 'Pemisahan kation selektif via pengendapan bertingkat, kelarutan garam basa/asam terhadap pH larutan, dan pelarutan endapan melalui pembentukan ligan koordinasi kompleks.',
      content: `### 1. Intuitive Mental Model Hook: Saringan Bertingkat Nanoscale & Kunci Gembok Koordinasi
Bayangkan Anda memiliki campuran kelereng emas murni dan kelereng tembaga yang tercebur di dalam lumpur. Bagaimana cara memisahkannya secara sempurna? Anda membutuhkan saringan bertingkat dengan ukuran jaring yang sangat presisi: reagen pengendap ditambahkan setetes demi setetes untuk menjebak kation yang paling sukar larut terlebih dahulu sebelum ion kedua sempat bereaksi.

Lalu bagaimana jika endapan tersebut ingin dilarutkan kembali tanpa pemanasan ekstrem? Kita dapat menggunakan dua "kunci pembuka": memanipulasi keasaman (pH) untuk merampok anion garam, atau menyodorkan ligan pengompleks kuat yang mampu "menculik" kation logam dari kisi kristalnya ke dalam kurungan senyawa koordinasi larut air!

---

### 2. Scaffolded Step-by-Step Logic: Pengendapan Selektif, Efek pH, & Ligan Kompleks

#### Langkah 1: Pengendapan Bertingkat (Fractional Precipitation)
Jika suatu larutan mengandung campuran kation berbeda yang sama-sama dapat mengendap dengan satu reagen anion titran, spesi yang mengendap pertama kali adalah spesi yang membutuhkan **konsentrasi titran paling rendah** untuk mencapai $Q_{sp} = K_{sp}$.
- **Kriteria Pemisahan Kuantitatif Analitis:** Pemisahan analitis dianggap sempurna secara kuantitatif jika konsentrasi ion pertama yang mengendap telah berkurang lebih dari **$99.9\\%$** ($< 0.1\\%$ tertinggal dalam larutan) tepat saat ion kedua mulai mengendap.

#### Langkah 2: Kelarutan yang Bergantung pada pH (Kelarutan Kondisional)
Jika anion dari garam sukar larut adalah basa konjugasi dari asam lemah (misalnya $\\ce{F-}, \\ce{CO3^2-}, \\ce{S^2-}, \\ce{C2O4^2-}, \\ce{OH-}$), penambahan asam kuat (penurunan pH) akan mengonsumsi anion tersebut via protonasi:
$$\\ce{CaF2(s) <=> Ca^2+(aq) + 2F-(aq)} \\quad (K_{sp})$$
$$\\ce{F-(aq) + H+(aq) <=> HF(aq)} \\quad (1/K_a)$$
Berdasarkan fraksi spesiasi alfa:
$$[\\ce{F-}]_{\\text{bebas}} = \\alpha_1 \\cdot [\\ce{F-}]_{\\text{total}} = \\left(\\frac{K_a}{[\\ce{H+}] + K_a}\\right) 2s$$
Substitusikan ke dalam ekspresi $K_{sp}$:
$$K_{sp} = [\\ce{Ca^2+}][\\ce{F-}]_{\\text{bebas}}^2 = (s)\\left(2s \\cdot \\alpha_1\\right)^2 = 4s^3 \\alpha_1^2$$
$$s = \\sqrt[3]{\\frac{K_{sp}}{4 \\alpha_1^2}} = \\sqrt[3]{\\frac{K_{sp}([\\ce{H+}] + K_a)^2}{4 K_a^2}}$$
Ketika larutan dibuat semakin asam ($[\\ce{H+}] \\uparrow \\implies \\alpha_1 \\downarrow$), kelarutan molar $s$ meningkat secara eksponensial!

Sebaliknya, garam dari asam kuat seperti $\\ce{AgCl}$ atau $\\ce{BaSO4}$ (di mana $\\ce{Cl-}$ adalah basa konjugasi dari asam sangat kuat $\\ce{HCl}$) **sama sekali tidak terpengaruh oleh pH asam** karena ion halida tidak terprotonasi dalam air.

#### Langkah 3: Pelarutan Endapan via Pembentukan Senyawa Kompleks Koordinasi ($K_f$)
Banyak endapan garam transisi yang membandel dapat dilarutkan secara elegan dengan menambahkan ligan donor Lewis (seperti $\\ce{NH3}, \\ce{CN-}, \\ce{S2O3^2-}, \\ce{EDTA^4-}$):
$$\\text{Disosiasi Kisi: } \\ce{AgCl(s) <=> Ag+(aq) + Cl-(aq)} \\quad K_{sp} = 1.8 \\times 10^{-10}$$
$$\\text{Kompleksasi Ligan: } \\ce{Ag+(aq) + 2NH3(aq) <=> [Ag(NH3)2]+(aq)} \\quad K_f = 1.7 \\times 10^7$$
Reaksi Pelarutan Gabungan Keseluruhan:
$$\\ce{AgCl(s) + 2NH3(aq) <=> [Ag(NH3)2]+(aq) + Cl-(aq)}$$
Tetapan kesetimbangan reaksi keseluruhan ($K$) merupakan **hasil perkalian** dari $K_{sp}$ dan $K_f$:
$$K = K_{sp} \\times K_f = (1.8 \\times 10^{-10}) \\times (1.7 \\times 10^7) = \\mathbf{3.06 \\times 10^{-3}}$$
Dengan nilai $K$ yang cukup besar, endapan putih $\\ce{AgCl}$ larut sempurna dalam amonia encer membentuk ion diamina perak(I).

---

### 3. High-Contrast Visual Matrix: Strategi Modulasi Kelarutan Garam Sukar Larut

| Strategi Kimiawi | Reagen Pemicu | Mekanisme Termodinamika | Aplikasi Analitik Olimpiade |
| :--- | :--- | :--- | :--- |
| **Pengendapan Bertingkat** | Titran presipitasi tetes demi tetes | Memanfaatkan disparitas rasio $K_{sp}$ yang ekstrem | Pemisahan fraksional campuran halida $\\ce{I-}, \\ce{Br-}, \\ce{Cl-}$ |
| **Pengasaman (Modulasi pH)** | Penambahan asam kuat ($\\ce{HNO3}, \\ce{HCl}$) | Protonasi anion basa lemah menggeser kesetimbangan ke kanan | Melarutkan batu kapur $\\ce{CaCO3}$, fluorit $\\ce{CaF2}$, fosfat $\\ce{Ca3(PO4)2}$ |
| **Kompleksasi Senyawa Koordinasi** | Penambahan ligan pengompleks ($\\ce{NH3}, \\ce{S2O3^2-}$)| Mengikat kation bebas ke dalam spesi kompleks stabil ($K_f$) | Proses *fixing* fotografi perak halida ($\\ce{AgBr} + \\ce{S2O3^2-}$) |
| **Oksidasi Anion Sulfida** | Penambahan oksidator kuat ($\\ce{HNO3}$ pekat) | Mengoksidasi ion $\\ce{S^2-}$ menjadi belerang bebas $\\ce{S(s)}$ | Melarutkan endapan sulfida sangat sukar larut ($\\ce{CuS}, \\ce{PbS}$) |

---

### 4. Official GitHub Callouts

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Kekuatan Asam Pembentuk & Respon terhadap pH
> Apakah semua endapan sukar larut dapat larut jika ditetesi asam kuat pekat?
> - **Dapat Larut:** Garam yang anionnya berasal dari asam lemah (misal $\\ce{CaCO3}, \\ce{BaC2O4}, \\ce{ZnS}, \\ce{Fe(OH)3}$). Anion bereaksi dengan ion $\\ce{H+}$.
> - **TIDAK DAPAT LARUT:** Garam yang anionnya berasal dari asam kuat (misal $\\ce{AgCl}, \\ce{AgBr}, \\ce{BaSO4}$). Ion klorida dan sulfat tidak memiliki afinitas terhadap proton dalam air encer, sehingga penambahan asam kuat sama sekali tidak meningkatkan kelarutan!

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Formulasi Simultan Pelarutan Ligan Kompleks
> Jika endapan $\\ce{MX(s)}$ dilarutkan ke dalam larutan ligan $\\ce{L}$ berkonsentrasi awal $C_L$:
> $$\\ce{MX(s) + n L(aq) <=> [ML_n](aq) + X-(aq)} \\quad K = K_{sp} \\times K_f$$
> Jika kelarutan molar endapan adalah $s$:
> $$[\\ce{X-}] = s, \\quad [\\ce{ML_n}] = s, \\quad [\\ce{L}]_{\\text{sisa}} = C_L - n s$$
> $$K = \\frac{s^2}{(C_L - n s)^n}$$
> Untuk kompleks dengan $n = 2$ (seperti $\\ce{[Ag(NH3)2]+}$ atau $\\ce{[Ag(S2O3)2]^3-}$):
> $$\\sqrt{K} = \\frac{s}{C_L - 2s} \\implies s = \\frac{\\sqrt{K}}{1 + 2\\sqrt{K}} \\cdot C_L$$
> Anda dapat menghitung kelarutan molar dalam ligan secara instan tanpa perlu menyusun tabel mula-mula-reaksi-setimbang yang berbelit!`,
      keyFormulas: [
        { name: 'Tetapan Pelarutan Kompleks', formula: 'K = K_{sp} \\times K_f' },
        { name: 'Kelarutan Bergantung pH', formula: 's = \\sqrt[x+y]{\\frac{K_{sp}}{x^x y^y \\cdot (\\alpha_{\\text{anion}})^y}}' },
        { name: 'Kelarutan Molar Kompleks Bidentat', formula: 's = \\frac{\\sqrt{K_{sp} K_f}}{1 + 2\\sqrt{K_{sp} K_f}} \\cdot C_L' },
      ],
    },
  ],
  worked_examples: [
    {
      tag: 'soal-buffer-karbonat-darah',
      tags: ['soal-osk', 'buffer-karbonat', 'kesetimbangan-asam-basa', 'fisiologi-darah', 'henderson-hasselbalch'],
      title: 'Contoh Soal OSK 1: Analisis Kuantitatif Buffer Bikarbonat Darah & Respon Terbuka Pulmonal',
      summary: 'Perhitungan rasio fisiologis penyangga bikarbonat pada pH 7.40 dan perbandingan kapasitas dapar sistem tertutup versus sistem terbuka.',
      content: `### Soal:
Plasma darah manusia normal memiliki pH fisiologis terukur sebesar $7.40$ pada temperatur tubuh $37.0^\\circ\\text{C}$. Sistem penyangga utama dalam plasma adalah pasangan asam-basa $\\ce{CO2(aq) / HCO3-(aq)}$, di mana gas $\\ce{CO2}$ terlarut berada dalam kesetimbangan dengan asam karbonat:
$$\\ce{CO2(aq) + H2O(l) <=> H2CO3(aq)}$$
Kombinasi kedua tahap kesetimbangan dinyatakan dengan $pK_a' = 6.10$. Konsentrasi bikarbonat $[\\ce{HCO3-}]$ dalam plasma adalah $24.0\\text{ mmol/L}$.

**Pertanyaan:**
1. Hitung rasio molar $[\\ce{HCO3-}] / [\\ce{CO2(aq)}]$ dan konsentrasi efektif $[\\ce{CO2(aq)}]$ dalam plasma!
2. Jika akibat aktivitas anaerobik otot dihasilkan asam laktat (asam kuat) yang melepaskan $5.0\\text{ mmol/L}$ ion $\\ce{H+}$ ke dalam darah, hitung pH darah akhir jika sistem dianggap sebagai **sistem tertutup** (tanpa ventilasi paru-paru)!
3. Hitung pH darah jika sistem bekerja sebagai **sistem terbuka**, di mana ventilasi paru-paru menjaga konsentrasi $[\\ce{CO2(aq)}]$ tetap konstan pada nilai awalnya!

---

### Rincian Langkah Penyelesaian:

**Langkah 1: Menghitung Rasio Fisiologis & Konsentrasi CO2 Terlarut Awal**  
Gunakan persamaan Henderson-Hasselbalch:
$$\\text{pH} = pK_a' + \\log\\left(\\frac{[\\ce{HCO3-}]}{[\\ce{CO2(aq)}]}\\right)$$
$$7.40 = 6.10 + \\log\\left(\\frac{[\\ce{HCO3-}]}{[\\ce{CO2(aq)}]}\\right) \\implies \\log\\left(\\frac{[\\ce{HCO3-}]}{[\\ce{CO2(aq)}]}\\right) = 1.30$$
$$\\frac{[\\ce{HCO3-}]}{[\\ce{CO2(aq)}]} = 10^{1.30} \\approx 19.95 \\approx \\mathbf{20.0}$$
Maka konsentrasi $\\ce{CO2(aq)}$ awal:
$$[\\ce{CO2(aq)}]_0 = \\frac{24.0\\text{ mmol/L}}{19.95} = \\mathbf{1.203\\text{ mmol/L}}$$

**Langkah 2: Perhitungan pH pada Sistem Tertutup**  
Reaksi netralisasi penambahan $5.0\\text{ mmol/L}$ ion $\\ce{H+}$:
$$\\ce{H+ + HCO3- -> CO2(aq) + H2O}$$
- Konsentrasi $[\\ce{HCO3-}]$ berkurang: $24.0 - 5.0 = 19.0\\text{ mmol/L}$.
- Dalam sistem tertutup, $\\ce{CO2}$ terakumulasi di dalam bejana: $[\\ce{CO2(aq)}] = 1.203 + 5.0 = 6.203\\text{ mmol/L}$.
Hitung pH baru:
$$\\text{pH} = 6.10 + \\log\\left(\\frac{19.0}{6.203}\\right) = 6.10 + \\log(3.063) = 6.10 + 0.486 = \\mathbf{6.59}$$
*(Catatan Medis: Penurunan pH dari 7.40 ke 6.59 akan memicu koma dan kematian akibat asidosis metabolik berat).*

**Langkah 3: Perhitungan pH pada Sistem Terbuka (Homeostasis Pulmonal)**  
Pada sistem fisiologis tubuh manusia, pernapasan hiperventilasi menghembuskan kelebihan $\\ce{CO2}$ ke atmosfer melalui paru-paru, sehingga konsentrasi $[\\ce{CO2(aq)}]$ dipertahankan konstan pada nilai awal $1.203\\text{ mmol/L}$:
- $[\\ce{HCO3-}] = 19.0\\text{ mmol/L}$
- $[\\ce{CO2(aq)}] = 1.203\\text{ mmol/L}$ (tetap konstan via hukum Henry gas alveolar)
Hitung pH akhir:
$$\\text{pH} = 6.10 + \\log\\left(\\frac{19.0}{1.203}\\right) = 6.10 + \\log(15.79) = 6.10 + 1.20 = \\mathbf{7.30}$$
Penurunan pH hanya dari $7.40$ menjadi $7.30$, masih berada dalam batas toleransi kelangsungan hidup manusia ($7.35 - 7.45$).

**Kesimpulan Evaluator Juri:**  
Rasio molar fisiologis normal adalah $20:1$ dengan $[\\ce{CO2(aq)}] = 1.20\\text{ mmol/L}$. Pada sistem tertutup tanpa respirasi, pH runtuh fatal ke $6.59$, sedangkan sistem dapar terbuka pulmonal mempertahankan kestabilan pH pada $7.30$, mendemonstrasikan keunggulan evolusi sistem dapar terbuka biokimia.`,
    },
    {
      tag: 'soal-amfiprotik-glisin-isoelektrik',
      tags: ['soal-osk', 'spesi-amfiprotik', 'titik-isoelektrik', 'glisin', 'asam-fosfat'],
      title: 'Contoh Soal OSK 2: Penentuan pH Spesi Amfiprotik Na2HPO4 & Titik Isoelektrik Asam Amino Glisin',
      summary: 'Kalkulasi kesetimbangan ion amfiprotik dari asam poliprotik dan penentuan titik isoelektrik (pI) asam amino glisin dalam larutan encer.',
      content: `### Soal:
Asam fosfat ($\\ce{H3PO4}$) adalah asam triprotik dengan $pK_{a1} = 2.15$, $pK_{a2} = 7.20$, dan $pK_{a3} = 12.35$ pada $25^\\circ\\text{C}$.
Asam amino paling sederhana, glisin ($\\ce{H2N-CH2-COOH}$), dalam larutan berair terprotonasi menjadi kation diprotik $\\ce{^+H3N-CH2-COOH}$ dengan $pK_{a1} = 2.34$ (gugus karboksilat $-\\ce{COOH}$) dan $pK_{a2} = 9.60$ (gugus amino terprotonasi $-\\ce{NH3+}$).

**Pertanyaan:**
1. Hitung pH larutan garam natrium hidrogen fosfat ($\\ce{Na2HPO4}$) $0.10\\text{ M}$ dalam air!
2. Turunkan dan hitung titik isoelektrik ($pI$) dari asam amino glisin, yaitu nilai pH saat konsentrasi bentuk zwitterion netral ($\\ce{^+H3N-CH2-COO-}$) mencapai fraksi maksimum dan muatan netto molekul sama dengan nol!

---

### Rincian Langkah Penyelesaian:

**Langkah 1: Menentukan Posisi Ion Amfiprotik HPO4^2-**  
Garam $\\ce{Na2HPO4}$ terdisosiasi sempurna menghasilkan ion amfiprotik $\\ce{HPO4^2-}$. Ion ini berada di antara tahap disosiasi kedua dan ketiga:
$$\\ce{H2PO4- <=> H+ + HPO4^2-} \\quad (K_{a2} = 10^{-7.20} = 6.31 \\times 10^{-8})$$
$$\\ce{HPO4^2- <=> H+ + PO4^3-} \\quad (K_{a3} = 10^{-12.35} = 4.47 \\times 10^{-13})$$

**Langkah 2: Menghitung pH Ion Amfiprotik HPO4^2-**  
Gunakan rumus eksak ion amfiprotik:
$$[\\ce{H+}] = \\sqrt{\\frac{K_{a2}K_{a3}C + K_{a2}K_w}{K_{a2} + C}}$$
Karena $C = 0.10\\text{ M} \\gg K_{a2}$ ($6.31 \\times 10^{-8}$) dan $K_{a3} C = 4.47 \\times 10^{-14} > K_w = 1.00 \\times 10^{-14}$, aproksimasi standar berlaku:
$$[\\ce{H+}] \\approx \\sqrt{K_{a2} \\cdot K_{a3}} \\implies \\text{pH} = \\frac{\\text{p}K_{a2} + \\text{p}K_{a3}}{2}$$
$$\\text{pH} = \\frac{7.20 + 12.35}{2} = \\frac{19.55}{2} = \\mathbf{9.78}$$

**Langkah 3: Penurunan Titik Isoelektrik (pI) Asam Amino Glisin**  
Tiga wujud protonasi asam amino glisin:
$$\\ce{\\underset{\\text{Kation (+1)}}{^+H3N-CH2-COOH} <=> H+ + \\underset{\\text{Zwitterion (0)}}{^+H3N-CH2-COO-} <=> H+ + \\underset{\\text{Anion (-1)}}{H2N-CH2-COO-}}$$
- Tahap 1: $K_{a1} = \\frac{[\\ce{H+}][\\ce{Gly^0}]}{[\\ce{Gly+}]}$
- Tahap 2: $K_{a2} = \\frac{[\\ce{H+}][\\ce{Gly-}]}{[\\ce{Gly^0}]}$

Pada titik isoelektrik ($pI$), muatan netto larutan sama dengan nol, yang berarti konsentrasi kation monovalen persis sama dengan anion monovalen:
$$[\\ce{Gly+}] = [\\ce{Gly-}]$$
Substitusikan ekspresi $K_{a1}$ dan $K_{a2}$:
$$\\frac{[\\ce{H+}][\\ce{Gly^0}]}{K_{a1}} = \\frac{K_{a2}[\\ce{Gly^0}]}{[\\ce{H+}]}$$
Eliminasi $[\\ce{Gly^0}]$ dari kedua ruas:
$$[\\ce{H+}]^2 = K_{a1} \\cdot K_{a2} \\implies [\\ce{H+}] = \\sqrt{K_{a1} K_{a2}}$$
$$\\text{p}I = \\frac{\\text{p}K_{a1} + \\text{p}K_{a2}}{2} = \\frac{2.34 + 9.60}{2} = \\frac{11.94}{2} = \\mathbf{5.97}$$

**Kesimpulan Evaluator Juri:**  
pH larutan $\\ce{Na2HPO4}$ $0.10\\text{ M}$ adalah $9.78$ (bersifat basa akibat dominansi $K_{a2}$ dibanding $K_{a3}$). Titik isoelektrik glisin adalah $pI = 5.97$, di mana kelarutan asam amino berada pada titik terendah dan molekul tidak bermigrasi di bawah medan listrik elektroforesis.`,
    },
    {
      tag: 'soal-kurva-titrasi-asetat-naoh',
      tags: ['soal-osp', 'kurva-titrasi', 'asam-asetat', 'hidrolisis-garam', 'kapasitas-buffer-van-slyke'],
      title: 'Contoh Soal OSP 3: Analisis Kuantitatif Kurva Titrasi Asam Asetat dengan NaOH & Kapasitas Penyangga',
      summary: 'Perhitungan pH presisi pada 4 segmen titrasi asam asetat 0.10 M dengan NaOH 0.10 M dan pembuktian kapasitas dapar maksimum.',
      content: `### Soal:
Sebanyak $25.00\\text{ mL}$ larutan asam asetat ($\\ce{CH3COOH}$, $K_a = 1.80 \\times 10^{-5}$, $pK_a = 4.74$) berkonsentrasi $0.100\\text{ M}$ dititrasi dengan larutan standar $\\ce{NaOH}$ $0.100\\text{ M}$ pada $25.0^\\circ\\text{C}$.

**Pertanyaan:**
1. Hitung pH larutan sebelum penambahan $\\ce{NaOH}$ ($V_b = 0.00\\text{ mL}$)!
2. Hitung pH larutan setelah penambahan $12.50\\text{ mL}$ $\\ce{NaOH}$ (titik setengah ekuivalen)!
3. Hitung volume $\\ce{NaOH}$ pada titik ekuivalen dan hitung pH larutan tepat pada titik ekuivalen tersebut!
4. Hitung pH larutan setelah penambahan $30.00\\text{ mL}$ $\\ce{NaOH}$!

---

### Rincian Langkah Penyelesaian:

**Langkah 1: pH Awal Sebelum Titrasi ($V_b = 0.00\\text{ mL}$)**  
Larutan asam lemah murni monoprotik:
$$[\\ce{H+}] = \\sqrt{K_a \\cdot C_a} = \\sqrt{(1.80 \\times 10^{-5})(0.100)} = \\sqrt{1.80 \\times 10^{-6}} = 1.342 \\times 10^{-3}\\text{ M}$$
$$\\text{pH} = -\\log(1.342 \\times 10^{-3}) = 3 - \\log(1.342) = \\mathbf{2.87}$$

**Langkah 2: Titik Setengah Ekuivalen ($V_b = 12.50\\text{ mL}$)**  
- $\\text{Mol } \\ce{CH3COOH} \\text{ awal} = 25.00\\text{ mL} \\times 0.100\\text{ M} = 2.500\\text{ mmol}$
- $\\text{Mol } \\ce{NaOH} \\text{ masuk} = 12.50\\text{ mL} \\times 0.100\\text{ M} = 1.250\\text{ mmol}$
- $\\text{Sisa } \\ce{CH3COOH} = 2.500 - 1.250 = 1.250\\text{ mmol}$
- $\\ce{CH3COO-} \\text{ terbentuk} = 1.250\\text{ mmol}$
Karena $[\\ce{CH3COOH}] = [\\ce{CH3COO-}]$:
$$\\text{pH} = \\text{p}K_a + \\log\\left(\\frac{1.250}{1.250}\\right) = \\text{p}K_a + 0 = \\mathbf{4.74}$$
*(Pada titik ini, indeks kapasitas dapar Van Slyke mencapai nilai maksimum $\\beta_{\\text{max}}$).*

**Langkah 3: Titik Ekuivalensi Stoikiometri ($V_b = V_{eq} = 25.00\\text{ mL}$)**  
Pada titik ini, seluruh $\\ce{CH3COOH}$ terkonversi menjadi garam natrium asetat $\\ce{CH3COONa}$ sebanyak $2.500\\text{ mmol}$.
Volume total larutan $= 25.00 + 25.00 = 50.00\\text{ mL}$.
Konsentrasi garam asetat:
$$C_{\\text{garam}} = \\frac{2.500\\text{ mmol}}{50.00\\text{ mL}} = 0.0500\\text{ M}$$
Hidrolisis anion asetat: $\\ce{CH3COO- + H2O <=> CH3COOH + OH-}$
$$K_b = \\frac{K_w}{K_a} = \\frac{1.00 \\times 10^{-14}}{1.80 \\times 10^{-5}} = 5.556 \\times 10^{-10}$$
$$[\\ce{OH-}] = \\sqrt{K_b \\cdot C_{\\text{garam}}} = \\sqrt{(5.556 \\times 10^{-10})(0.0500)} = \\sqrt{2.778 \\times 10^{-11}} = 5.271 \\times 10^{-6}\\text{ M}$$
$$\\text{pOH} = -\\log(5.271 \\times 10^{-6}) = 5.28 \\implies \\text{pH} = 14.00 - 5.28 = \\mathbf{8.72}$$

**Langkah 4: Pasca-Ekuivalen ($V_b = 30.00\\text{ mL}$)**  
- $\\text{Mol } \\ce{NaOH} \\text{ total} = 30.00 \\times 0.100 = 3.000\\text{ mmol}$
- $\\text{Kelebihan mol } \\ce{OH-} = 3.000 - 2.500 = 0.500\\text{ mmol}$
- Volume total $= 25.00 + 30.00 = 55.00\\text{ mL}$
$$[\\ce{OH-}]_{\\text{kelebihan}} = \\frac{0.500\\text{ mmol}}{55.00\\text{ mL}} = 9.091 \\times 10^{-3}\\text{ M}$$
$$\\text{pOH} = -\\log(9.091 \\times 10^{-3}) = 2.04 \\implies \\text{pH} = 14.00 - 2.04 = \\mathbf{11.96}$$

**Kesimpulan Evaluator Juri:**  
Profil pH pada empat titik krusial adalah: (1) Awal $= 2.87$, (2) Setengah ekuivalen $= 4.74$, (3) Ekuivalen $= 8.72$ (basa akibat hidrolisis asetat), dan (4) Pasca-ekuivalen $= 11.96$. Lonjakan tajam di sekitar pH 8.72 memvalidasi bahwa fenolftalein (PP) adalah indikator paling akurat dengan galat titrasi $< 0.1\\%$.`,
    },
    {
      tag: 'soal-pengendapan-bertingkat-halida',
      tags: ['soal-osn', 'pengendapan-bertingkat', 'ksp-agcl-agi', 'pemisahan-analitik', 'persen-pemisahan', 'soal-pengendapan-ksp'],
      title: 'Contoh Soal OSN 4: Pengendapan Bertingkat Ion Klorida & Iodida Menggunakan Perak Nitrat (AgNO3)',
      summary: 'Pemisahan fraksional kuantitatif campuran ion halida dengan reagen perak dan evaluasi persentase kemurnian analitis.',
      content: `### Soal:
Suatu larutan mengandung campuran ion klorida ($\\ce{Cl-}$) dan ion iodida ($\\ce{I-}$), masing-masing dengan konsentrasi awal $0.050\\text{ M}$. Ke dalam larutan tersebut diteteskan perlahan larutan encer perak nitrat ($\\ce{AgNO3}$).
Diketahui data tetapan hasil kali kelarutan pada $25^\\circ\\text{C}$:
- $K_{sp}(\\ce{AgI}) = 8.50 \\times 10^{-17}$
- $K_{sp}(\\ce{AgCl}) = 1.80 \\times 10^{-10}$

**Pertanyaan:**
1. Endapan manakah yang akan terbentuk terlebih dahulu? Hitung konsentrasi $[\\ce{Ag+}]$ minimum yang dibutuhkan untuk memulai pembentukan endapan pertama tersebut!
2. Berapakah konsentrasi $[\\ce{Ag+}]$ yang diperlukan tepat saat endapan kedua mulai terbentuk?
3. Hitung sisa konsentrasi ion pertama dalam larutan saat endapan kedua mulai terbentuk, dan hitung persentase pemisahan analitisnya! Apakah kedua ion tersebut dapat dipisahkan secara kuantitatif?

---

### Rincian Langkah Penyelesaian:

**Langkah 1: Menentukan Endapan Pertama & [Ag+] Inisiasi**  
Konsentrasi $[\\ce{Ag+}]$ yang dibutuhkan untuk memulai presipitasi ($Q_{sp} = K_{sp}$):
- Untuk $\\ce{AgI}$:
  $$[\\ce{Ag+}]_{\\ce{AgI}} = \\frac{K_{sp}(\\ce{AgI})}{[\\ce{I-}]} = \\frac{8.50 \\times 10^{-17}}{0.050} = \\mathbf{1.70 \\times 10^{-15}\\text{ M}}$$
- Untuk $\\ce{AgCl}$:
  $$[\\ce{Ag+}]_{\\ce{AgCl}} = \\frac{K_{sp}(\\ce{AgCl})}{[\\ce{Cl-}]} = \\frac{1.80 \\times 10^{-10}}{0.050} = \\mathbf{3.60 \\times 10^{-9}\\text{ M}}$$
Karena $1.70 \\times 10^{-15}\\text{ M} \\ll 3.60 \\times 10^{-9}\\text{ M}$, endapan kuning $\\mathbf{\\ce{AgI}}$ **mengendap jauh lebih dahulu**.

**Langkah 2: Konsentrasi [Ag+] Saat Endapan Kedua (AgCl) Mulai Terbentuk**  
Endapan $\\ce{AgCl}$ mulai terbentuk tepat saat konsentrasi ion perak mencapai:
$$[\\ce{Ag+}] = \\mathbf{3.60 \\times 10^{-9}\\text{ M}}$$

**Langkah 3: Menghitung Sisa Konsentrasi Ion Iodida & Persentase Pemisahan**  
Pada kondisi $[\\ce{Ag+}] = 3.60 \\times 10^{-9}\\text{ M}$, kesetimbangan $\\ce{AgI}$ tetap berlaku di larutan jenuh:
$$[\\ce{I-}]_{\\text{sisa}} = \\frac{K_{sp}(\\ce{AgI})}{[\\ce{Ag+}]} = \\frac{8.50 \\times 10^{-17}}{3.60 \\times 10^{-9}} = \\mathbf{2.361 \\times 10^{-8}\\text{ M}}$$
Persentase ion $\\ce{I-}$ yang masih tertinggal dalam larutan:
$$\\%\\text{ Sisa } \\ce{I-} = \\frac{[\\ce{I-}]_{\\text{sisa}}}{[\\ce{I-}]_{\\text{awal}}} \\times 100\\% = \\frac{2.361 \\times 10^{-8}\\text{ M}}{0.050\\text{ M}} \\times 100\\% = \\mathbf{4.72 \\times 10^{-5}\\%}$$
Persentase ion $\\ce{I-}$ yang telah mengendap sempurna:
$$\\%\\text{ Terendapkan } \\ce{I-} = 100\\% - 0.0000472\\% = \\mathbf{99.99995\\%}$$

**Kesimpulan Evaluator Juri:**  
Endapan $\\ce{AgI}$ terbentuk lebih awal pada $[\\ce{Ag+}] = 1.70 \\times 10^{-15}\\text{ M}$. Tepat saat $\\ce{AgCl}$ mulai mengendap ($[\\ce{Ag+}] = 3.60 \\times 10^{-9}\\text{ M}$), sisa konsentrasi ion iodida hanya tersisa $2.36 \\times 10^{-8}\\text{ M}$ ($99.99995\\%$ telah terendapkan). Kriteria pemisahan kuantitatif analitis terpenuhi secara sempurna (efisiensi jauh melampaui $99.9\\%$).`,
    },
    {
      tag: 'soal-kompleksasi-agbr-tiosulfat',
      tags: ['soal-osn', 'pembentukan-kompleks-kf', 'pelarutan-endapan', 'fotografi-tiosulfat', 'kesetimbangan-gabungan'],
      title: 'Contoh Soal OSN 5: Pelarutan Endapan AgBr dalam Larutan Tiosulfat (Na2S2O3) via Pembentukan Kompleks',
      summary: 'Kalkulasi kesetimbangan simultan kelarutan dan pembentukan ion kompleks bis(tiosulfato)argentat(I) pada proses pencucian film fotografi.',
      content: `### Soal:
Dalam industri fotografi analog klasik, butiran perak bromida ($\\ce{AgBr}$) yang tidak terpapar cahaya dihilangkan dari emulsi film melalui proses *fixing* (pencucian) menggunakan larutan natrium tiosulfat ($\\ce{Na2S2O3}$, "hipo"). Reaksi ini membentuk ion kompleks larut bis(tiosulfato)argentat(I), $[\\ce{Ag(S2O3)2}]^{3-}$.
Diketahui data pada $25^\\circ\\text{C}$:
- $K_{sp}(\\ce{AgBr}) = 5.00 \\times 10^{-13}$
- Tetapan pembentukan kompleks $[\\ce{Ag(S2O3)2}]^{3-}$: $K_f = 2.00 \\times 10^{13}$

**Pertanyaan:**
1. Tuliskan persamaan reaksi pelarutan $\\ce{AgBr}$ dalam larutan tiosulfat dan hitung tetapan kesetimbangan keseluruhan ($K$) dari reaksi tersebut!
2. Hitung kelarutan molar $\\ce{AgBr}$ dalam air murni!
3. Hitung kelarutan molar $\\ce{AgBr}$ dalam larutan $\\ce{Na2S2O3}$ berkonsentrasi $0.500\\text{ M}$! Berapa kali lipat peningkatan kelarutannya dibanding dalam air murni?

---

### Rincian Langkah Penyelesaian:

**Langkah 1: Menuliskan Reaksi Keseluruhan & Tetapan Kesetimbangan Gabungan K**  
- Tahap 1 (Disosiasi Endapan): $\\ce{AgBr(s) <=> Ag+(aq) + Br-(aq)} \\quad K_{sp} = 5.00 \\times 10^{-13}$
- Tahap 2 (Kompleksasi Koordinasi): $\\ce{Ag+(aq) + 2S2O3^2-(aq) <=> [Ag(S2O3)2]^3-(aq)} \\quad K_f = 2.00 \\times 10^{13}$

Jumlahkan kedua tahap reaksi:
$$\\ce{AgBr(s) + 2S2O3^2-(aq) <=> [Ag(S2O3)2]^3-(aq) + Br-(aq)}$$
Tetapan kesetimbangan keseluruhan ($K$):
$$K = K_{sp} \\times K_f = (5.00 \\times 10^{-13}) \\times (2.00 \\times 10^{13}) = \\mathbf{10.0}$$

**Langkah 2: Menghitung Kelarutan Molar AgBr dalam Air Murni**  
Dalam air murni:
$$s_{\\text{air}} = \\sqrt{K_{sp}} = \\sqrt{5.00 \\times 10^{-13}} = \\mathbf{7.071 \\times 10^{-7}\\text{ M}}$$
*(Hanya sekitar $0.133\\text{ mg}$ $\\ce{AgBr}$ yang sanggup larut per liter air murni).*

**Langkah 3: Menghitung Kelarutan Molar AgBr dalam Na2S2O3 0.500 M**  
Misalkan kelarutan molar $\\ce{AgBr}$ dalam medium tiosulfat adalah $s\\text{ mol/L}$:
- Mula-mula: $[\\ce{S2O3^2-}] = 0.500\\text{ M}$, $[\\ce{[Ag(S2O3)2]^3-}] = 0$, $[\\ce{Br-}] = 0$
- Bereaksi: $-2s$, $+s$, $+s$
- Setimbang: $[\\ce{S2O3^2-}] = 0.500 - 2s$, $[\\ce{[Ag(S2O3)2]^3-}] = s$, $[\\ce{Br-}] = s$

Ekspresi tetapan kesetimbangan $K$:
$$K = \\frac{[\\ce{[Ag(S2O3)2]^3-}][\\ce{Br-}]}{[\\ce{S2O3^2-}]^2} = \\frac{(s)(s)}{(0.500 - 2s)^2} = \\left(\\frac{s}{0.500 - 2s}\\right)^2 = 10.0$$
Ambil akar kuadrat pada kedua sisi:
$$\\frac{s}{0.500 - 2s} = \\sqrt{10.0} \\approx 3.1623$$
$$s = 3.1623(0.500 - 2s) = 1.5811 - 6.3246 s$$
$$7.3246 s = 1.5811 \\implies s = \\frac{1.5811}{7.3246} = \\mathbf{0.2159\\text{ M}} \\approx \\mathbf{0.216\\text{ M}}$$

Rasio faktor peningkatan kelarutan:
$$\\text{Faktor Peningkatan} = \\frac{s_{\\text{tiosulfat}}}{s_{\\text{air}}} = \\frac{0.2159\\text{ M}}{7.071 \\times 10^{-7}\\text{ M}} \\approx \\mathbf{305.300\\text{ kali lipat}}$$

**Kesimpulan Evaluator Juri:**  
Tetapan kesetimbangan pelarutan gabungan bernilai $K = 10.0$. Kelarutan molar $\\ce{AgBr}$ dalam larutan natrium tiosulfat $0.500\\text{ M}$ melonjak fantastis menjadi $0.216\\text{ M}$ ($40.56\\text{ gram}$ $\\ce{AgBr}$ per liter), meningkat lebih dari $300.000$ kali lipat dibandingkan dalam air murni, membuktikan efektivitas ligan tiosulfat dalam pencucian film fotografi.`,
    },
  ],
};

export const OSN_TOPIC_5: MaterialItem = {
  ...RAW_OSN_TOPIC_5,
  prerequisites: RAW_OSN_TOPIC_5.prerequisites.map(p => ({
    ...p,
    checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_05[p.tag] || undefined,
  })),
  core_concepts: RAW_OSN_TOPIC_5.core_concepts.map(c => ({
    ...c,
    checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_05[c.tag] || undefined,
  })),
  worked_examples: RAW_OSN_TOPIC_5.worked_examples.map(w => ({
    ...w,
    checkpointQuizzes: undefined,
  })),
};
