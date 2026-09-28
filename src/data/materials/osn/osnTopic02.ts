/**
 * osnTopic02.ts
 * Topik 2: Ikatan Kimia & Geometri Molekul
 * Jenjang: OSN / IChO
 * Standar Pedagogis: Tone Opsi A (Arsitektur 5 Lapis, Mental Model Hook, Scaffolded Logic, GitHub Callouts, & Checkpoint Quizzes)
 */

import type { MaterialItem } from '../../materialsData.ts';
import { CHECKPOINTS_TOPIC_OSN_02 } from '../../checkpoints/checkpointBankTopicOsn02.ts';

const RAW_OSN_TOPIC_2: MaterialItem = {
  id: 2,
  topic_number: 2,
  title: 'Ikatan Kimia & Geometri Molekul',
  slug: 'ikatan-kimia-geometri-molekul',
  category: 'Kimia Fisik & Ikatan',
  level: 'OSN',
  readTimeMinutes: 38,
  summary: 'Kajian komprehensif teori ikatan kimia dan geometri molekul: struktur Lewis, muatan formal, resonansi kanonikal, & momen dipol vektor; teori VSEPR lanjutan & formulasi Aturan Bent (Bent\'s Rule); teori orbital molekul (MOT) homonuklir/heteronuklir diatomik, pencampuran s-p, & magnetisme; termodinamika kisi kristal Born-Haber & persamaan Kapustinskii; teori pita zat padat tight-binding model Su-Schrieffer-Heeger (SSH), transisi distorsi Peierls 1D, & defek soliton; serta teori grup simetri Schoenflies, tabel karakter Mulliken, & pembentukan orbital SALC ligan.',
  allTags: [
    'ikatan-kovalen-lewis',
    'muatan-formal-resonansi',
    'kepolaran-momen-dipol',
    'vsepr-lanjutan-aturan-bent',
    'hibridisasi-orbital-valensi',
    'teori-orbital-molekul-mot',
    'gaya-antarmolekul-ikatan-hidrogen',
    'energi-kisi-born-haber',
    'teori-pita-ssh-peierls',
    'model-ssh',
    'su-schrieffer-heeger',
    'transisi-peierls',
    'poliasetilena',
    'celah-pita',
    'soliton',
    'tight-binding',
    'zona-brillouin',
    'teori-grup-simetri-salc',
    'teori-grup',
    'point-group',
    'schoenflies',
    'tabel-karakter',
    'salc',
    'operator-proyeksi',
    'mot-simetri',
    'efek-pseudo-jahn-teller',
    'diagram-walsh',
    'soal-lewis-muatan-formal-scn',
    'soal-vsepr-aturan-bent-sf4-clf3',
    'soal-mot-karbon-monoksida',
    'soal-born-haber-mgcl2',
    'soal-vsepr-eksotis-if7-xef5',
    'soal-teori-pita-ssh-peierls',
    'vsepr',
    'ikatan-kovalen',
    'muatan-formal',
    'hibridisasi',
    'mot',
    'orde-ikatan',
    'paramagnetik',
    'struktur-lewis',
    'pengecualian-oktet',
    'resonansi-struktur',
    'kepolaran-ikatan',
    'momen-dipol',
    'elektronegativitas',
    'aturan-bent',
    'geometri-molekul',
    'hibridisasi-orbital',
    'ikatan-sigma-pi',
    'karakter-s',
    'teori-mot',
    'orbital-molekul',
    'orde-ikatan-mot',
    'magnetisme',
    'gaya-antarmolekul',
    'ikatan-hidrogen',
    'gaya-van-der-waals',
    'energi-kisi',
    'siklus-born-haber',
    'persamaan-kapustinskii',
    'soal-osk',
    'resonansi-scn',
    'soal-osp',
    'geometri-sf4-clf3',
    'diagram-mot',
    'karbon-monoksida-co',
    'soal-osn',
    'energi-kisi-mgcl2',
    'vsepr-eksotis',
    'if7-bipiramida-pentagonal',
    'xef5-planar',
    'soal-icho',
  ],
  prerequisites: [
    {
      tag: 'ikatan-kovalen-lewis',
      tags: ['ikatan-kovalen', 'struktur-lewis', 'pengecualian-oktet'],
      title: 'Prasyarat 1: Struktur Lewis, Aturan Oktet, & Tiga Pengecualian Oktet',
      summary: 'Langkah sistematis penyusunan rumus titik elektron Lewis dan rasionalisasi ilmiah tiga golongan pengecualian oktet.',
      content: `### 🤝 Sistem Barter Elektron & Klub Eksklusif Aturan Oktet

Bayangkan dua orang petualang yang tersesat di gurun pasir dingin pada malam hari. Masing-masing hanya memiliki satu selimut tipis yang tidak cukup menghangatkan badan jika dipakai sendiri. Namun jika mereka duduk berdampingan dan berbagi kedua selimut bersama-sama, keduanya dapat bertahan hidup dengan nyaman!

Inilah hakikat **Ikatan Kovalen**: atom-atom non-logam saling meminjamkan dan menggunakan bersama pasangan elektron valensi agar keduanya dapat "merasakan" kestabilan konfigurasi gas mulia ($ns^2 np^6$ atau oktet 8 elektron).

---

### 🧭 4 Langkah Baku Menyusun Struktur Lewis Bebas Galat:

1. **Langkah 1 (Hitung Elektron Valensi Total, $N_{\\text{val}}$):**  
   Jumlahkan elektron valensi seluruh atom penyusun. Tambahkan muatan untuk anion (misal $+1$ untuk $\\ce{NO3-}$), dan kurangkan untuk kation (misal $-1$ untuk $\\ce{NH4+}$).
2. **Langkah 2 (Tentukan Kerangka Atom Pusat & Ikatan Tunggal):**  
   Pilih atom dengan keelektronegatifan paling rendah sebagai atom pusat (kecuali atom Hidrogen yang selalu menjadi ligan terminal). Hubungkan atom pusat dengan ligan melalui ikatan kovalen tunggal ($2\\,e^-$ per ikatan).
3. **Langkah 3 (Lengkapi Oktet Atom Terminal Terlebih Dahulu):**  
   Distribusikan sisa elektron sebagai pasangan elektron bebas (PEB) pada atom-atom terminal (luar) hingga memenuhi oktet (atau duplet untuk $\\ce{H}$).
4. **Langkah 4 (Alokasikan Sisa Elektron ke Atom Pusat & Bentuk Ikatan Rangkap):**  
   Jika masih ada sisa elektron, tempatkan pada atom pusat. Jika atom pusat belum memenuhi oktet, ubah pasangan elektron bebas dari atom ligan menjadi ikatan kovalen rangkap dua atau rangkap tiga.

---

### 📊 Tiga Kategori Pengecualian Kaidah Oktet:

| Golongan Pengecualian | Ciri Khas Elektronik | Contoh Senyawa Representatif | Perilaku Kimiawi Unik |
| :--- | :--- | :--- | :--- |
| **1. Oktet Tak Lengkap (Sub-oktet)** | Atom pusat dikelilingi $< 8$ elektron valensi (biasanya 4 atau 6 elektron) | $\\ce{BeCl2}$ (4 elektron), $\\ce{BF3}$ (6 elektron), $\\ce{AlCl3}$ monomer | Bertindak sebagai **Asam Lewis Kuat** (sangat lapar menerima donor PEB) |
| **2. Molekul Berelektron Ganjil (Radikal Bebas)** | Jumlah elektron valensi total ganjil, terdapat 1 elektron tak berpasangan | $\\ce{NO}$ (11 elektron), $\\ce{NO2}$ (17 elektron), $\\ce{ClO2}$ (19 elektron) | Bersifat paramagnetik murni dan sangat reaktif mengalami dimerisasi |
| **3. Oktet Berkembang (Hipervalen)** | Atom pusat dikelilingi $> 8$ elektron valensi (10, 12, atau 14 elektron) | $\\ce{PCl5}$ (10 elektron), $\\ce{SF6}$ (12 elektron), $\\ce{IF7}$ (14 elektron), $\\ce{XeF4}$ | Hanya terjadi pada unsur **Periode 3 ke bawah** yang memiliki volume atom lega |

---

> [!WARNING]
> ### ⚠️ Batasan Mutlak Periode 2: Mengapa $\\ce{NF5}$ Mustahil Ada?
> Sering kali dalam soal olimpiade ditanyakan mengapa $\\ce{PF5}$ stabil tetapi $\\ce{NF5}$ tidak pernah dapat disintesis!
> - **Miskonsepsi Umum**: Mengira nitrogen bisa membentuk 5 ikatan kovalen seperti fosfor karena berada dalam golongan yang sama (golongan 15).
> - **Kaidah Ilmiah yang Benar**: Unsur Periode 2 (seperti $\\ce{C, N, O, F}$) **TIDAK PERNAH BISA HIPERVALEN**. Kulit $n=2$ hanya memiliki orbital $2s$ dan tiga orbital $2p$ (total maksimal 4 orbital spasial $\\implies$ kapasitas ruang mutlak 8 elektron). Unsur periode 2 tidak memiliki subkulit $d$ berenergi rendah untuk menampung ekspansi elektron. Sebaliknya, fosfor berada pada Periode 3 yang memiliki orbital $3d$ kosong berenergi terjangkau.`,
      keyFormulas: [
        { name: 'Kaidah Elektron Valensi Total', formula: 'N_{\\text{val}} = \\sum V_i - q_{\\text{ion}}' },
      ],
    },
    {
      tag: 'muatan-formal-resonansi',
      tags: ['muatan-formal-resonansi', 'muatan-formal', 'resonansi-struktur', 'elektronegativitas'],
      title: 'Prasyarat 2: Kalkulasi Muatan Formal & Resonansi Struktur Lewis',
      summary: 'Neraca akuntansi elektron muatan formal dan pemilihan kontributor mayor hibrida resonansi.',
      content: `### ⚖️ Neraca Akuntansi Muatan Formal & Hakikat Hibrida Resonansi

Sering kali kita dapat menggambar lebih dari satu struktur Lewis yang sah untuk sebuah molekul. Bagaimana cara kimiawan menentukan struktur mana yang paling mendekati realitas fisik di laboratorium? Jawabannya adalah melalui **Muatan Formal (*Formal Charge*)**.

Muatan formal adalah neraca akuntansi hipotetis yang membandingkan jumlah elektron valensi atom bebas dengan jumlah elektron yang dialokasikan padanya dalam molekul kovalen.

---

### 🧭 Formula Muatan Formal ($FC$):
$$FC = V - N_{\\text{non-ikatan}} - \\frac{1}{2} N_{\\text{ikatan}} = V - LP - BP_{\\text{ikatan}}$$
di mana:
- $V$: Jumlah elektron valensi atom bebas netral.
- $LP$: Jumlah elektron non-ikatan (*Lone Pair electrons* yang dihitung per butir elektron).
- $BP_{\\text{ikatan}}$: Jumlah garis ikatan kovalen yang terikat pada atom tersebut (setiap garis ikatan menyumbang 1 elektron untuk atom yang bersangkutan).

---

### 📊 4 Kaidah Emas Menentukan Kontributor Resonansi Mayor:
1. **Aturan Oktet Penuh:** Struktur di mana seluruh atom (terutama $\\ce{C, N, O, F}$) memenuhi aturan oktet selalu lebih stabil daripada struktur yang menyisakan atom dengan oktet tak lengkap.
2. **Pemisahan Muatan Formal Minimal:** Struktur dengan muatan formal nol ($FC = 0$) sebanyak-banyaknya adalah kontributor utama. Struktur dengan pemisahan muatan besar (seperti $+2$ dan $-2$) diabaikan sebagai kontributor sangat minor.
3. **Kesesuaian Elektronegativitas:** Jika muatan formal negatif terpaksa harus ada, muatan negatif tersebut **wajib dialokasikan pada atom yang paling elektronegatif** (misal $\\ce{O}$ lebih disukai daripada $\\ce{C}$). Sebaliknya, muatan formal positif harus berada pada atom yang paling elektropositif.
4. **Muatan Sejenis Tidak Boleh Berdampingan:** Dua atom bertetangga langsung dilarang memiliki muatan formal bertanda sama (misal $+1$ berdampingan dengan $+1$) karena gaya tolak-menolak coulombik akan meruntuhkan kestabilan molekul.

---

> [!WARNING]
> ### ⚠️ Hakikat Fisis Resonansi: Bukan Berkedip Bolak-Balik!
> - **Miskonsepsi Fatal**: Membayangkan molekul ozon ($\\ce{O3}$) atau benzena bergetar melompat bolak-balik antara ikatan tunggal dan rangkap dua triliun kali per detik.
> - **Kaidah Ilmiah yang Benar**: Molekul nyata **tidak pernah berosilasi bolak-balik** di antara struktur kanonikalnya! Resonansi adalah keterbatasan pena kita yang tidak bisa menggambar elektron terdelokalisasi dalam satu gambar 2D sederhana. Struktur molekul nyata adalah satu kesatuan permanen berupa **Hibrida Resonansi** (analogi: seekor *mule* adalah anak campuran kuda dan keledai; mule tidak berubah menjadi kuda di pagi hari lalu menjadi keledai di malam hari!).`,
      keyFormulas: [
        { name: 'Rumus Muatan Formal', formula: 'FC = V - LP - \\frac{1}{2}BP' },
        { name: 'Konservasi Muatan Total', formula: '\\sum FC_i = q_{\\text{molekul/ion}}' },
      ],
    },
    {
      tag: 'kepolaran-momen-dipol',
      tags: ['kepolaran-momen-dipol', 'kepolaran-ikatan', 'momen-dipol', 'elektronegativitas'],
      title: 'Prasyarat 3: Kepolaran Ikatan & Resultan Vektor Momen Dipol',
      summary: 'Analisis vektor momen dipol ikatan, pengaruh pasangan elektron bebas, dan prediksi kepolaran makroskopis.',
      content: `### 🧲 Tarik Tambang Vektor 3D: Mengapa $\\ce{CO2}$ Nonpolar sedangkan $\\ce{H2O}$ Sangat Polar?

Kepolaran suatu molekul adalah fenomena tarik tambang muatan dalam ruang tiga dimensi. Dua atom dengan keelektronegatifan berbeda akan membentuk **ikatan kovalen polar** karena atom yang lebih elektronegatif menarik kerapatan elektron ikatan ke arah dirinya, menciptakan muatan parsial negatif ($\\delta^-$) dan muatan parsial positif ($\\delta^+$).

Namun, apakah keberadaan ikatan kovalen polar selalu menjadikan molekul tersebut polar secara keseluruhan? **TIDAK SELALU!**

---

### 🧭 Formula Kuantitatif Momen Dipol ($\\vec{\\mu}$):
Momen dipol listrik ($\\mu$) mengukur derajat pemisahan muatan positif dan negatif pada jarak $r$:
$$\\vec{\\mu} = q \\cdot \\vec{r}$$
- Satuan standar internasional kimia: **Debye (D)**, di mana $1\\text{ D} = 3.336 \\times 10^{-30}\\text{ C}\\cdot\\text{m}$.
- Momen dipol molekul total adalah **penjumlahan vektor sejati** dari seluruh momen dipol ikatan individual ($\\vec{\\mu}_{\\text{ikatan}}$) dan momen dipol pasangan elektron bebas ($\\vec{\\mu}_{\\text{PEB}}$):
  $$\\vec{\\mu}_{\\text{netto}} = \\sum \\vec{\\mu}_{\\text{ikatan}} + \\sum \\vec{\\mu}_{\\text{PEB}}$$

---

### 📊 Komparasi Simetri Geometri Penentu Polaritas:

| Molekul | Ikatan Polar? | Geometri Ruang | Penjumlahan Vektor Momen Dipol | Polaritas Makroskopis |
| :--- | :---: | :---: | :--- | :---: |
| **$\\ce{CO2}$** | Ya ($\\ce{C=O}$) | Linear ($180^\\circ$) | Dua vektor sama besar berlawanan arah $\\implies \\vec{\\mu}_{\\text{net}} = 0$ | **Nonpolar ($\\mu = 0\\text{ D}$)** |
| **$\\ce{H2O}$** | Ya ($\\ce{O-H}$) | Bengkok ($104.5^\\circ$) | Dua dipol ikatan dan dua dipol PEB saling memperkuat ke arah atas | **Sangat Polar ($\\mu = 1.85\\text{ D}$)** |
| **$\\ce{BF3}$** | Ya ($\\ce{B-F}$) | Trigonal Planar ($120^\\circ$) | Tiga vektor dipol bersudut $120^\\circ$ saling membatalkan di bidang datar | **Nonpolar ($\\mu = 0\\text{ D}$)** |
| **$\\ce{CCl4}$** | Ya ($\\ce{C-Cl}$) | Tetrahedral ($109.5^\\circ$) | Empat vektor dipol simetris bola sempurna saling meniadakan | **Nonpolar ($\\mu = 0\\text{ D}$)** |
| **$\\ce{CHCl3}$** | Ya ($\\ce{C-Cl}$ & $\\ce{C-H}$) | Tetrahedral terdistorsi | Tarikan tiga $\\ce{Cl}$ ke bawah tidak diimbangi oleh $\\ce{H}$ | **Polar ($\\mu = 1.04\\text{ D}$)** |

---

> [!WARNING]
> ### ⚠️ Peran Pasangan Elektron Bebas pada Paradoks $\\ce{NH3}$ vs $\\ce{NF3}$
> Fakta laboratorium yang mengejutkan: selisih elektronegativitas ikatan $\\ce{N-F}$ ($4.0 - 3.0 = 1.0$) jauh lebih besar daripada $\\ce{N-H}$ ($3.0 - 2.1 = 0.9$). Namun momen dipol $\\ce{NH3}$ ($1.47\\text{ D}$) melonjak **enam kali lipat** lebih besar daripada $\\ce{NF3}$ ($0.24\\text{ D}$)!
> - **Penyebab Fisis**: Pada $\\ce{NH3}$, arah dipol ketiga ikatan $\\ce{N-H}$ mengarah ke atom pusat $\\ce{N}$, **searah** dengan vektor dipol PEB di puncak piramida sehingga keduanya saling memperkuat. Sebaliknya pada $\\ce{NF3}$, atom $\\ce{F}$ menarik elektron ke bawah, sehingga vektor dipol ikatan **berlawanan arah** dengan vektor dipol PEB dan saling membatalkan!`,
      keyFormulas: [
        { name: 'Momen Dipol Listrik', formula: '\\vec{\\mu} = q \\cdot \\vec{r} \\quad (1\\text{ D} = 3.336 \\times 10^{-30}\\text{ C}\\cdot\\text{m})' },
        { name: 'Resultan Vektor Dipol', formula: '\\vec{\\mu}_{\\text{net}} = \\sum \\vec{\\mu}_i' },
      ],
    },
  ],
  core_concepts: [
    {
      tag: 'vsepr-lanjutan-aturan-bent',
      tags: ['vsepr-lanjutan-aturan-bent', 'vsepr', 'aturan-bent', 'geometri-molekul'],
      title: 'Konsep Inti 1: Teori VSEPR Lanjutan & Aturan Bent (Bent\'s Rule)',
      summary: 'Hirarki tolakan sterik pasangan elektron kulit valensi dan formulasi Henry Bent mengenai alokasi karakter s/p.',
      content: `### 🎈 Balon Udara Tolakan Sterik & Kebijaksanaan Aturan Bent

Bayangkan Anda mengikat beberapa buah balon karet pada satu simpul pusat. Balon-balon tersebut secara alami akan saling mendorong ke sudut terjauh yang paling lapang agar tidak saling berhimpitan. Inilah inti dari **Teori VSEPR (Valence Shell Electron Pair Repulsion)**.

Namun, tidak semua balon berukuran sama! Balon yang merepresentasikan **Pasangan Elektron Bebas (PEB)** hanya ditarik oleh satu inti atom, sehingga awan elektronnya membengkak besar dan egois, mendesak pasangan elektron ikatan (PEI) ke sudut yang lebih sempit!

---

### 🧭 Hierarki Tolakan Domain Elektron VSEPR:
$$\\text{Tolakan LP-LP} \\quad > \\quad \\text{Tolakan LP-BP} \\quad > \\quad \\text{Tolakan BP-BP}$$
- Efek pada sudut ikatan: Setiap kehadiran 1 buah PEB mereduksi sudut ikatan tetrahedral ideal ($109.5^\\circ$) sebesar sekitar $2^\\circ - 2.5^\\circ$ (contoh: $\\ce{CH4} = 109.5^\\circ \\to \\ce{NH3} = 107.0^\\circ \\to \\ce{H2O} = 104.5^\\circ$).

---

### 📐 Formulasi Aturan Bent (Bent\'s Rule, 1961):
Dalam molekul dengan ligan yang bervariasi atau pasangan elektron bebas, hibridisasi orbital atom pusat tidak harus berupa bilangan bulat kaku ($sp^3$ murni), melainkan dapat memiliki fraksi karakter-$s$ dan karakter-$p$ yang berbeda pada setiap ikatan:

> [!IMPORTANT]
> ### 📌 Kaidah Resmi Aturan Bent:
> **Atom pusat akan mengarahkan orbital dengan karakter-$p$ lebih tinggi (karakter-$s$ lebih rendah) ke arah ligan yang lebih elektronegatif, dan menyimpan orbital berkarakter-$s$ lebih tinggi untuk pasangan elektron bebas atau ligan yang lebih elektropositif.**

**Rasionalisasi Termodinamika Kuantum:**  
Orbital atom $s$ memiliki tingkat energi lebih rendah dan berada lebih dekat ke inti dibanding orbital $p$. Ligan yang sangat elektronegatif menarik densitas elektron menjauh dari inti atom pusat. Oleh karena itu, menempatkan elektron yang "ditarik menjauh" tersebut pada orbital berkarakter-$p$ adalah pilihan yang sangat hemat energi, sementara atom pusat mempertahankan orbital berkarakter-$s$ yang stabil dekat inti untuk dirinya sendiri atau untuk PEB!

---

### 💡 Aplikasi Fenomenal pada Bipiramida Trigonal ($SN = 5, sp^3d$):
Kerangka bipiramida trigonal terdiri atas dua jenis posisi yang tidak setara secara simetri:
1. **Tiga Posisi Ekuatorial ($sp^2$):** Memiliki karakter-$s$ tinggi ($33.3\\%$), sudut ikatan lebar $120^\\circ$.
2. **Dua Posisi Aksial ($pd$):** Memiliki karakter-$s$ nol ($0\\%$, murni $p_z-d_{z^2}$), sudut ikatan sempit $90^\\circ$ terhadap ekuator.

**Konsekuensi Aturan Bent:**
- **Pasangan Elektron Bebas (PEB)** selalu memilih posisi **ekuatorial** (karena membutuhkan ruang lapang $120^\\circ$ dan menyukai karakter-$s$ tinggi). Itulah sebabnya $\\ce{SF4}$ berbentuk jungkat-jungkit (*seesaw*), $\\ce{ClF3}$ berbentuk huruf-T (*T-shaped*), dan $\\ce{XeF2}$ berbentuk linear!
- **Ligan Paling Elektronegatif** (seperti $\\ce{F}$ dalam $\\ce{PCl3F2}$) selalu memprioritaskan posisi **aksial** karena posisi aksial memiliki karakter-$s$ paling rendah ($0\\%$).`,
      keyFormulas: [
        { name: 'Kaidah Sudut Coulson', formula: '1 + \\lambda_i \\lambda_j \\cos(\\theta_{ij}) = 0 \\quad (\\lambda^2 = \\text{rasio rasio } p/s)' },
      ],
    },
    {
      tag: 'hibridisasi-orbital-valensi',
      tags: ['hibridisasi-orbital-valensi', 'hibridisasi', 'ikatan-sigma-pi', 'karakter-s'],
      title: 'Konsep Inti 2: Hibridisasi Orbital Atom & Tinjauan Ikatan $\\sigma$ / $\\pi$',
      summary: 'Pencampuran mekanika gelombang orbital valensi Linus Pauling, geometri spasial, dan pemisahan kerangka sigma/pi.',
      content: `### 🥣 Blender Orbital Valensi: Menghaluskan $s$ dan $p$ Menjadi Cetakan Hibrida

Mengapa atom karbon dalam gas metana ($\\ce{CH4}$) dapat membentuk 4 ikatan $\\ce{C-H}$ yang identik sempurna dengan sudut ikatan $109.5^\\circ$, padahal konfigurasi elektron valensi karbon adalah $2s^2 2p_x^1 2p_y^1 2p_z^0$ (hanya memiliki 2 elektron tunggal pada orbital $p$ yang saling tegak lurus $90^\\circ$)?

Linus Pauling (1931) memecahkan paradoks ini dengan konsep **Hibridisasi**: fungsi gelombang orbital atom $2s$ dan ketiga orbital $2p$ "diblender" dan dikombinasikan secara linear menjadi 4 orbital hibrida baru yang setara energi (terdegenerasi), simetris, dan mengarah ke empat sudut tetrahedron beraturan!

---

### 🧭 Matriks Klasifikasi Hibridisasi & Bilangan Sterik:

| Bilangan Sterik ($SN$) | Orbital Hibrida | Geometri Domain Elektron | Karakter-$s$ | Sudut Ideal | Contoh Spesi |
| :---: | :---: | :--- | :---: | :---: | :--- |
| **2** | $sp$ | Linear | $50\\%$ | $180^\\circ$ | $\\ce{BeCl2}$, $\\ce{CO2}$, $\\ce{C2H2}$ |
| **3** | $sp^2$ | Trigonal Planar | $33.3\\%$ | $120^\\circ$ | $\\ce{BF3}$, $\\ce{SO3}$, $\\ce{C2H4}$ |
| **4** | $sp^3$ | Tetrahedral | $25\\%$ | $109.5^\\circ$ | $\\ce{CH4}$, $\\ce{NH3}$, $\\ce{H2O}$ |
| **5** | $sp^3d$ | Bipiramida Trigonal | $20\\%$ | $90^\\circ, 120^\\circ$ | $\\ce{PCl5}$, $\\ce{SF4}$, $\\ce{ClF3}$ |
| **6** | $sp^3d^2$ | Oktahedral | $16.7\\%$ | $90^\\circ, 180^\\circ$ | $\\ce{SF6}$, $\\ce{BrF5}$, $\\ce{XeF4}$ |
| **7** | $sp^3d^3$ | Bipiramida Pentagonal | $14.3\\%$ | $72^\\circ, 90^\\circ$ | $\\ce{IF7}$, $\\ce{XeF5-}$ |

---

### 📊 Perbedaan Fundamental Ikatan $\\sigma$ vs Ikatan $\\pi$:
1. **Ikatan Sigma ($\\sigma$):**
   - Terbentuk melalui tumpang-tindih orbital secara **aksial / ujung-ke-ujung (*head-on overlap*)**.
   - Memiliki **simetri silindris penuh** mengelilingi sumbu antar-inti atom.
   - Densitas elektron maksimum berada tepat di sepanjang garis poros antar-inti.
   - Mengizinkan rotasi bebas gugus di sekitar ikatan tanpa merusak ikatan kovalen.
2. **Ikatan Pi ($\\pi$):**
   - Terbentuk melalui tumpang-tindih orbital $p$ tak terhibridisasi secara **menyamping (*lateral / side-to-side overlap*)**.
   - Memiliki **bidang simpul nodal** tepat pada bidang poros antar-inti (densitas elektron berada di atas dan di bawah sumbu).
   - Menahan rotasi bebas $\\implies$ menjadi dasar munculnya **isomerisme geometri cis/trans**.

---

> [!TIP]
> ### 💡 Pengaruh Karakter-$s$ terhadap Panjang Ikatan & Keasaman
> Semakin tinggi persentase karakter-$s$ ($sp > sp^2 > sp^3$):
> 1. Orbital semakin dekat ke inti atom $\\implies$ panjang ikatan $\\ce{C-H}$ semakin **pendek dan kuat**.
> 2. Elektronegativitas efektif karbon meningkat $\\implies$ kestabilan karbanion meningkat, sehingga proton asetilena ($sp$, $pK_a \\approx 25$) jauh lebih asam dibanding etilena ($sp^2, pK_a \\approx 44$) dan etana ($sp^3, pK_a \\approx 50$).`,
      keyFormulas: [
        { name: 'Persentase Karakter-s', formula: '\\%s = \\frac{1}{1 + n} \\times 100\\% \\quad (sp^n)' },
      ],
    },
    {
      tag: 'teori-orbital-molekul-mot',
      tags: ['teori-orbital-molekul-mot', 'teori-mot', 'orbital-molekul', 'orde-ikatan-mot', 'magnetisme'],
      title: 'Konsep Inti 3: Teori Orbital Molekul (Molecular Orbital Theory / MOT)',
      summary: 'Interferensi LCAO fungsi gelombang atomik, diagram energi diatomik periode 2, pencampuran s-p, dan spektroskopi foton.',
      content: `### 🌊 Interferensi Gelombang LCAO: Misteri Magnetisme Oksigen Terbongkar

Ketika Anda menuangkan oksigen cair ($\\ce{O2}$) di antara kutub magnet superkonduktor laboratorium, cairan biru pucat tersebut **tertahan melayang di udara dan menempel kuat pada kutub magnet** (bersifat paramagnetik)!

Struktur Lewis klasik ($\\,\\ce{:\\ddot{O}=\\ddot{O}:}\,$) meramalkan seluruh elektron berpasangan (diamagnetik) dan gagal total menerangkan fenomena ini. Jawabannya hanya bisa diungkap melalui **Teori Orbital Molekul (Molecular Orbital Theory / MOT)** karya Robert Mulliken dan Friedrich Hund.

Dalam MOT, elektron tidak lagi menjadi milik atom individual, melainkan terdelokalisasi di seluruh molekul melalui **Kombinasi Linear Orbital-Orbital Atom (LCAO / Linear Combination of Atomic Orbitals)**:
$$\\psi_{\\text{MO}} = c_A \\phi_A \\pm c_B \\phi_B$$

---

### 🧭 Dua Jenis Orbital Molekul Fundamental:
1. **Orbital Ikatan (*Bonding MO*, $\\sigma / \\pi$):**
   - Terbentuk dari interferensi konstruktif (sefasa: $+ / +$).
   - Densitas elektron terakumulasi tinggi di antara kedua inti atom, menurunkan energi potensial sistem ($E_{\\text{ikatan}} < E_{\\text{atom}}$).
2. **Orbital Anti-Ikatan (*Antibonding MO*, $\\sigma^* / \\pi^*$):**
   - Terbentuk dari interferensi destruktif (berlawanan fasa: $+ / -$).
   - Memiliki bidang simpul nodal di antara kedua inti tempat densitas elektron nol, menaikkan energi sistem ($E_{\\text{anti-ikatan}} > E_{\\text{atom}}$).

---

### 📊 Diagram Tingkat Energi Molekul Diatomik Homonuklir Periode 2:

| Tingkat Energi | Molekul $\ce{B2, C2, N2}$ (Dengan $s-p\text{ mixing}$ Kuat) | Molekul $\ce{O2, F2}$ (Normal / Tanpa $s-p\text{ mixing}$) |
| :---: | :---: | :---: |
| **Energi Tertinggi (LUMO/Anti-ikatan)** | $\sigma^*_{2p_z}$ | $\sigma^*_{2p_z}$ |
| | $\pi^*_{2p_x} = \pi^*_{2p_y}$ | $\pi^*_{2p_x} = \pi^*_{2p_y}$ |
| | $\sigma_{2p_z}$ *(terdorong ke atas)* | $\pi_{2p_x} = \pi_{2p_y}$ |
| | $\pi_{2p_x} = \pi_{2p_y}$ | $\sigma_{2p_z}$ *(di bawah $\pi$)* |
| | $\sigma^*_{2s}$ | $\sigma^*_{2s}$ |
| **Energi Terendah (Ikatan)** | $\sigma_{2s}$ | $\sigma_{2s}$ |

**Kalkulasi Kuantitatif Orde Ikatan (*Bond Order*, $BO$):**
$$BO = \\frac{N_b - N_a}{2}$$
- Untuk $\\ce{N2}$ (10 elektron valensi): $BO = \\frac{8 - 2}{2} = 3$ (ikatan rangkap tiga terkuat, diamagnetik).
- Untuk $\\ce{O2}$ (12 elektron valensi): $BO = \\frac{8 - 4}{2} = 2$. Berdasarkan Aturan Hund, dua elektron terakhir menempati orbital anti-ikatan $\\pi^*_{2p_x}$ dan $\\pi^*_{2p_y}$ secara terpisah dengan spin sejajar $\\implies$ **Terbukti Paramagnetik Murni dengan 2 Elektron Bebas!**

---

> [!WARNING]
> ### ⚠️ Pembalikan Urutan $\\sigma_{2p_z}$ vs $\\pi_{2p}$ ($s-p\\text{ mixing}$)
> Jangan pernah menggunakan satu diagram MOT seragam untuk seluruh molekul diatomik!
> - Untuk molekul sebelum $\\ce{O2}$ (yaitu $\\ce{Li2, Be2, B2, C2, N2}$): selisih energi orbital $2s$ dan $2p$ kecil ($< 12\\text{ eV}$), memicu tolakan simetri $s-p\\text{ mixing}$ yang mendorong $\\sigma_{2p_z}$ berada **di atas** orbital $\\pi_{2p}$.
> - Untuk molekul $\\ce{O2}$ dan $\\ce{F2}$: muatan inti efektif yang tinggi memperlebar jarak energi $2s$ dan $2p$, sehingga $s-p\\text{ mixing}$ diabaikan dan $\\sigma_{2p_z}$ berada **di bawah** orbital $\\pi_{2p}$.`,
      keyFormulas: [
        { name: 'Rumus Orde Ikatan MOT', formula: 'BO = \\frac{N_b - N_a}{2}' },
        { name: 'Kombinasi Linear LCAO', formula: '\\psi_{\\text{MO}} = c_A \\phi_A \\pm c_B \\phi_B' },
      ],
    },
    {
      tag: 'gaya-antarmolekul-ikatan-hidrogen',
      tags: ['gaya-antarmolekul-ikatan-hidrogen', 'gaya-antarmolekul', 'ikatan-hidrogen', 'gaya-van-der-waals'],
      title: 'Konsep Inti 4: Gaya Antarmolekul & Fenomena Ikatan Hidrogen',
      summary: 'Interaksi Van der Waals (London, dipol-dipol, dipol-terimbas), anomali termodinamika ikatan hidrogen, dan ikatan simetris 3c-4e.',
      content: `### 💧 Jaring Gaib Kehidupan: Anomali Titik Didih Air & Ikatan Hidrogen Superkuat

Jika zat-zat kimia di bumi hanya mematuhi tren massa molekul sederhana, maka air ($\\ce{H2O}$, $M_r = 18$) seharusnya mendidih pada temperatur sekitar **$-80^\\circ\\text{C}$** dan berbentuk gas pada suhu kamar, mirip dengan tetangganya $\\ce{H2S}$ ($M_r = 34$, titik didih $-60^\\circ\\text{C}$). Seluruh samudera di bumi akan menguap habis dan kehidupan tidak akan pernah ada!

Faktor gaib yang menahan molekul-molekul air dalam fasa cair hingga $100^\\circ\\text{C}$ adalah **Ikatan Hidrogen**, gaya antarmolekul elektrostatik-kovalen terkuat di alam semesta.

---

### 🧭 Hierarki Spektrum Energi Gaya Antarmolekul:

1. **Gaya Dispersi London (Interaksi Dipol Sesaat - Dipol Terimbas):**
   - Hadir pada **SEMUA molekul materi**, baik polar maupun nonpolar.
   - Muncul akibat fluktuasi sesaat densitas awan elektron kuantum yang menginduksi dipol sesaat pada molekul tetangganya.
   - Kekuatannya berbanding lurus dengan **Polarisabilitas** awan elektron (semakin banyak elektron dan semakin besar massa atom, semakin kuat gaya London: $\\ce{He < Ne < Ar < Kr < Xe}$ dan $\\ce{F2 < Cl2 < Br2 < I2}$).
2. **Gaya Tarik Dipol-Dipol (Keesom):**
   - Bekerja antar-molekul polar permanen melalui interaksi elektrostatik kutub positif ($\\delta^+$) dengan kutub negatif ($\\delta^-$).
3. **Ikatan Hidrogen Konvensional ($10 - 40\\text{ kJ/mol}$):**
   - Terjadi ketika atom Hidrogen terikat secara kovalen pada atom yang sangat kecil dan sangat elektronegatif: **Fluorin ($\\ce{F}$), Oksigen ($\\ce{O}$), atau Nitrogen ($\\ce{N}$)**.
   - Atom $\\ce{F, O, N}$ menarik elektron sangat kuat sehingga proton hidrogen hampir telanjang tanpa awan pelindung, memungkinkan proton mendekati pasangan elektron bebas atom tetangga pada jarak yang sangat intim.
4. **Ikatan Hidrogen Kuat Simetris (Ikatan 3-Pusat 4-Elektron / 3c-4e, $> 100\\text{ kJ/mol}$):**
   - Contoh legendaris pada ion bifluorida $(\\ce{[F-H-F]-})$: jarak proton tepat di tengah kedua inti fluorin ($d = 1.14\\text{ \\AA}$) dengan energi ikatan mencapai $163\\text{ kJ/mol}$, mendekati kekuatan ikatan kovalen sejati!

---

> [!TIP]
> ### 💡 Mengapa Titik Didih Air ($\\ce{H2O}$) Lebih Tinggi daripada $\\ce{HF}$?
> Meskipun ikatan kovalen $\\ce{H-F}$ lebih polar daripada $\\ce{H-O}$, molekul $\\ce{HF}$ hanya memiliki 1 atom $\\ce{H}$ dan 3 PEB, sehingga setiap molekul hanya mampu membentuk rata-rata **2 ikatan hidrogen**. Sebaliknya, setiap molekul $\\ce{H2O}$ memiliki tepat 2 atom $\\ce{H}$ dan 2 PEB, memungkinkan pembentukan jejaring kristal 3 dimensi optimal dengan rata-rata **4 ikatan hidrogen per molekul**!`,
      keyFormulas: [
        { name: 'Potensial Dispersi London', formula: 'V_{\\text{London}} \\propto -\\frac{\\alpha_1 \\alpha_2}{r^6}' },
        { name: 'Energi Ikatan Hidrogen Simetris FHF-', formula: '\\Delta H_{\\text{ikatan}} \\approx -163\\text{ kJ/mol}' },
      ],
    },
    {
      tag: 'energi-kisi-born-haber',
      tags: ['energi-kisi-born-haber', 'energi-kisi', 'siklus-born-haber', 'persamaan-kapustinskii'],
      title: 'Konsep Inti 5: Termodinamika Senyawa Ionik & Siklus Born-Haber',
      summary: 'Analisis entalpi pembentukan kisi kristal ionik Kapustinskii dan hukum Hess termokimia siklus Born-Haber.',
      content: `### 🧱 Benteng Kristal Garam: Siklus Neraca Termodinamika Born-Haber

Garam dapur ($\\ce{NaCl}$) meleleh pada suhu yang luar biasa tinggi ($801^\\circ\\text{C}$). Jika kita telaah reaksi pembentukannya dari gas:
$$\\ce{Na(g) -> Na+(g) + e-} \\quad (IE_1 = +496\\text{ kJ/mol endotermik})$$
$$\\ce{Cl(g) + e- -> Cl-(g)} \\quad (EA_1 = -349\\text{ kJ/mol eksotermik})$$
Perpindahan satu elektron dari atom natrium ke atom klorin dalam fasa gas justru membutuhkan biaya energi sebesar $+147\\text{ kJ/mol}$! Mengapa senyawa ionik $\\ce{NaCl}$ justru terbentuk begitu spontan dan sangat stabil di alam?

Jawabannya adalah **Energi Kisi (*Lattice Energy*, $U_L$)**: ketika miliaran kation $\\ce{Na+}$ dan anion $\\ce{Cl-}$ gas saling mendekat dan memadat menyusun kisi kristal kubus tiga dimensi, tarikan elektrostatik coulombik raksasa melepaskan energi masif sebesar **$-787\\text{ kJ/mol}$** ke lingkungan!

---

### 🧭 Formula Analitik Persamaan Kapustinskii:
AF Kapustinskii (1956) merumuskan perkiraan energi kisi tanpa memerlukan pengetahuan struktur kristal rinci:
$$U_L = -\\frac{K \\cdot \\nu \\cdot |z_+ z_-|}{r_+ + r_-} \\left( 1 - \\frac{d}{r_+ + r_-} \\right)$$
di mana:
- $K = 1.202 \\times 10^5\\text{ kJ}\\cdot\\text{pm/mol}$
- $d = 34.5\\text{ pm}$
- $\\nu$: Jumlah ion per satuan rumus (misal untuk $\\ce{NaCl}, \\nu = 2$; untuk $\\ce{MgCl2}, \\nu = 3$).
- $z_+, z_-$: Muatan kation dan anion.
- $r_+, r_-$: Jari-jari ion kation dan anion dalam satuan pikometer (pm).

**Faktor Penentu Utama:** Energi kisi sebanding langsung dengan **hasil kali muatan kation-anion ($|z_+ z_-|$)** dan berbanding terbalik dengan jarak antar-inti ion ($r_+ + r_-$).

---

### 📊 Siklus Termokimia Born-Haber:
Berdasarkan Hukum Hess, entalpi pembentukan standar ($\\Delta H_f^\\circ$) adalah jumlahan dari seluruh tahapan siklus:
$$\\Delta H_f^\\circ = \\Delta H_{\\text{sub}} + \\sum IE + \\frac{1}{2} D(\\ce{X2}) + \\sum EA + U_L$$

---

> [!WARNING]
> ### ⚠️ Tanda Aljabar Energi Kisi: Pembentukan vs Disosiasi
> Berhati-hatilah membaca definisi soal ujian olimpiade:
> - Jika didefinisikan sebagai **Energi Pembentukan Kisi** (ion gas $\\to$ padatan kristal): $U_L$ selalu bernilai **negatif** (eksotermik, $\\Delta H < 0$).
> - Jika didefinisikan sebagai **Energi Disosiasi Kisi** (padatan kristal $\\to$ ion gas): $U_L$ bernilai **positif** (endotermik, $\\Delta H > 0$).`,
      keyFormulas: [
        { name: 'Persamaan Energi Kisi Kapustinskii', formula: 'U_L \\approx -120200 \\frac{\\nu |z_+ z_-|}{r_+ + r_-} \\left(1 - \\frac{34.5}{r_+ + r_-}\\right)' },
        { name: 'Hukum Hess Siklus Born-Haber', formula: '\\Delta H_f^\\circ = \\Delta H_{\\text{sub}} + IE + \\frac{1}{2}D - EA + U_L' },
      ],
    },
    {
      tag: 'teori-pita-ssh-peierls',
      tags: [
        'teori-pita-ssh-peierls',
        'model-ssh',
        'su-schrieffer-heeger',
        'transisi-peierls',
        'poliasetilena',
        'celah-pita',
        'soliton',
        'tight-binding',
        'zona-brillouin',
      ],
      title: 'Konsep Inti 6: Teori Pita Elektronik, Model Su-Schrieffer-Heeger (SSH) & Distorsi Peierls',
      summary: 'Kajian mekanika kuantum tight-binding polimer terkonjugasi 1D trans-poliasetilena, Hamiltonian SSH dalam ruang momentum, pembentukan celah pita (bandgap) pada batas Zona Brillouin via distorsi Peierls, dan fisika defek soliton topologis.',
      content: `### ⚡ Rantai Kawat Karbon 1D: Dari Logam Semu Menuju Semikonduktor Peierls & Soliton Eksotis

Sebuah rantai polimer satu-dimensi (1D) dengan sistem elektron $\\pi$ terkonjugasi ideal seperti *trans*-poliasetilena berjarak kisi seragam $[\\ce{-CH=}]_n$ memiliki satu elektron valensi per atom karbon. Menurut teori pita Bloch sederhana, pita energinya terisi tepat setengah (*half-filled band*), sehingga rantai poliasetilena seharusnya bersifat sebagai **kawat logam konduktor super**!

Namun, eksperimen menunjukkan poliasetilena murni justru merupakan **semikonduktor dengan celah pita terlarang sebesar $E_g \\approx 1.5 - 1.8\\text{ eV}$**. Mengapa logam satu dimensi tidak pernah bisa bertahan di alam?

---

### 🧭 Teorema Distorsi Peierls (1955):
Menurut Rudolf Peierls: **Sistem elektronik satu dimensi periodik dengan kisi berjarak seragam $a_0$ selalu tidak stabil secara termodinamika terhadap distorsi dimerisasi kisi spontan pada suhu rendah.**
1. Dimerisasi mengubah jarak ikatan seragam $a_0$ menjadi ikatan berselang-seling: ikatan tunggal yang lebih panjang ($r_1 = a_0 + \\delta$) dan ikatan rangkap yang lebih pendek ($r_2 = a_0 - \\delta$).
2. Periode sel satuan berlipat ganda menjadi $a = 2a_0$.
3. Penggandaan konstanta kisi memotong Zona Brillouin pertama menjadi separuhnya: $\\left[-\\frac{\\pi}{a}, \\frac{\\pi}{a}\\right]$.
4. Tingkat energi tepat pada tingkat Fermi ($k_F = \\pm \\frac{\\pi}{a}$) terbelah membentuk **celah pita energi (*bandgap*, $E_g$)**, menurunkan energi seluruh elektron pada pita valensi dan mengubah sistem menjadi semikonduktor!

---

### 📊 Formulasi Hamiltonian Su-Schrieffer-Heeger (SSH, 1979):
Dalam ruang momentum ($k$), Hamiltonian SSH ditransformasikan menjadi matriks Bloch $2 \\times 2$:
$$\\mathcal{H}(k) = \\begin{pmatrix} 0 & t_1 + t_2 e^{-ika} \\\\ t_1 + t_2 e^{ika} & 0 \\end{pmatrix}$$
dengan parameter integral transfer:
- $t_1 = t_0 - \\alpha\\delta$ (ikatan tunggal lebih panjang, intra-sel)
- $t_2 = t_0 + \\alpha\\delta$ (ikatan rangkap lebih pendek, inter-sel)

**Relasi Dispersi Energi & Celah Pita (Bandgap):**
$$E(k) = \\pm \\sqrt{t_1^2 + t_2^2 + 2t_1 t_2 \\cos(ka)}$$
Pada batas Zona Brillouin ($k = \\pm \\frac{\\pi}{a}$, di mana $\\cos(ka) = -1$):
$$E\\left(\\frac{\\pi}{a}\\right) = \\pm |t_2 - t_1|$$
Besar celah pita terlarang (*bandgap*):
$$E_g = E_+ - E_- = 2|t_2 - t_1| = 4\\alpha|\\delta|$$

---

### 💡 Defek Topologis Soliton & Pemisahan Muatan-Spin:
Rantai *trans*-poliasetilena memiliki dua konfigurasi dimerisasi berenergi setara (*degenerate ground states*): fasa A (tunggal-rangkap) dan fasa B (rangkap-tunggal).
- Pertemuan kedua fasa dalam satu rantai menciptakan batas dinding domain yang disebut **Soliton Topologis**.
- Soliton menghasilkan tingkat energi terikat kuantum tepat di tengah celah pita (**Mid-gap Bound State** pada $E = 0$).
- **Pemisahan Muatan-Spin (*Spin-Charge Separation*):**
  1. **Soliton Netral ($S^0$):** Mid-gap state terisi 1 elektron $\\implies$ Muatan $q = 0$, Spin $s = 1/2$ (radikal bebas).
  2. **Soliton Positif ($S^+$ / Doping Akseptor $\\ce{I2}$):** Mid-gap state kosong (0 elektron) $\\implies$ Muatan $q = +e$, Spin $s = 0$.
  3. **Soliton Negatif ($S^-$ / Doping Donor $\\ce{Na}$):** Mid-gap state terisi penuh (2 elektron) $\\implies$ Muatan $q = -e$, Spin $s = 0$.`,
      keyFormulas: [
        { name: 'Hamiltonian Matriks Bloch SSH', formula: '\\mathcal{H}(k) = \\begin{pmatrix} 0 & t_1 + t_2 e^{-ika} \\\\ t_1 + t_2 e^{ika} & 0 \\end{pmatrix}' },
        { name: 'Relasi Dispersi Energi SSH', formula: 'E(k) = \\pm \\sqrt{t_1^2 + t_2^2 + 2t_1 t_2 \\cos(ka)}' },
        { name: 'Lebar Celah Pita (Bandgap)', formula: 'E_g = 2|t_2 - t_1| = 4\\alpha|\\delta|' },
        { name: 'Tingkat Energi Mid-Gap Soliton', formula: 'E_{\\text{soliton}} = 0' },
      ],
    },
    {
      tag: 'teori-grup-simetri-salc',
      tags: [
        'teori-grup-simetri-salc',
        'teori-grup',
        'point-group',
        'schoenflies',
        'tabel-karakter',
        'salc',
        'operator-proyeksi',
        'mot-simetri',
      ],
      title: 'Konsep Inti 7: Teori Grup Simetri Molekul, Tabel Karakter & Pembentukan SALC Orbital Molekul',
      summary: 'Klasifikasi grup titik Schoenflies, operasi simetri, pembacaan tabel karakter Mulliken, Teorema Ortogonalitas Besar (GOT), dan teknik pembentukan SALC.',
      content: `### 💎 Bahasa Simetri Matematis Schoenflies: Menyusun Puzzle SALC Orbital Molekul

Bagaimana kimiawan kuantum membangun diagram orbital molekul untuk molekul kompleks poliatomik tanpa tersesat dalam hitungan matriks ribuan dimensi? Mereka menggunakan **Teori Grup Simetri Molekul**.

Simetri molekul adalah hukum kekekalan mekanika kuantum yang menetapkan aturan mutlak: dua orbital atom hanya boleh bertumpang tindih dan membentuk ikatan kovalen jika keduanya memiliki **simetri yang identik sempurna** di bawah grup titik molekul tersebut!

---

### 🧭 Lima Unsur & Operasi Simetri Ruang:
1. **Identitas ($E$):** Tidak mengubah apa pun ($E\\psi = \\psi$).
2. **Sumbu Rotasi Proper ($C_n$):** Rotasi sebesar sudut $\\theta = \\frac{360^\\circ}{n}$ mengelilingi sumbu rotasi utama.
3. **Bidang Refleksi Simetri ($\\sigma$):**
   - $\\sigma_h$ (*horizontal*): Tegak lurus terhadap sumbu rotasi utama ($C_n$).
   - $\\sigma_v$ (*vertical*): Mengandung sumbu rotasi utama $C_n$.
   - $\\sigma_d$ (*dihedral*): Bidang vertikal yang membagi dua sudut antara dua sumbu rotasi $C_2$ tegak lurus.
4. **Pusat Inversi ($i$):** Pembalikan koordinat melintasi titik pusat: $(x, y, z) \\to (-x, -y, -z)$.
5. **Sumbu Rotasi Improper ($S_n$):** Rotasi $C_n$ diikuti refleksi bidang horizontal $\\sigma_h$: $S_n = \\sigma_h \\cdot C_n$.

---

### 📊 Reduksi Representasi via Teorema Ortogonalitas Besar (GOT):
Sebuah himpunan basis orbital ligan menghasilkan representasi tereduksi $\\Gamma_{\\text{red}}$. Untuk mereduksinya menjadi representasi tak-tereduksi (*irreducible representations*):
$$a_i = \\frac{1}{h} \\sum_R g_R \\cdot \\chi(R) \\cdot \\chi_i(R)$$
di mana:
- $h$: Orde grup (total jumlah seluruh operasi simetri dalam grup titik).
- $g_R$: Jumlah operasi simetri dalam kelas $R$.
- $\\chi(R)$: Karakter representasi tereduksi untuk kelas operasi $R$.
- $\\chi_i(R)$: Karakter representasi tak-tereduksi $\\Gamma_i$ pada tabel karakter.

---

### 💡 Konstruksi SALC Ligan pada Molekul Air ($\\ce{H2O}$, Grup Titik $C_{2v}$):
Grup titik $C_{2v}$ memiliki 4 operasi simetri ($E, C_2, \\sigma_v(xz), \\sigma_v'(yz)$) dengan orde grup $h = 4$.
1. Basis ligan: Dua orbital hidrogen $1s$ ($\\phi_1$ dan $\\phi_2$).
2. Representasi redusibel: $\\Gamma_H = (2, 0, 0, 2) \\implies$ Reduksi menghasilkan:
   $$\\Gamma_H = A_1 + B_2$$
3. Operator Proyeksi membentuk **Symmetry Adapted Linear Combinations (SALC)**:
   - SALC Simetri $A_1$: $\\psi(A_1) = \\frac{1}{\\sqrt{2}}(\\phi_1 + \\phi_2)$ (kombinasi fase sefasa).
   - SALC Simetri $B_2$: $\\psi(B_2) = \\frac{1}{\\sqrt{2}}(\\phi_1 - \\phi_2)$ (kombinasi fase berlawanan).
4. Pencocokan Simetri dengan Orbital Atom Pusat Oksigen:
   - Orbital Oksigen $2s$ dan $2p_z$ memiliki simetri $A_1 \\implies$ bertumpang tindih membentuk ikatan $\\sigma$ dengan SALC $A_1$.
   - Orbital Oksigen $2p_y$ memiliki simetri $B_2 \\implies$ bertumpang tindih membentuk ikatan dengan SALC $B_2$.
   - Orbital Oksigen $2p_x$ memiliki simetri $B_1 \\implies$ tidak ada SALC ligan bersimetri $B_1$, sehingga menjadi **Orbital Non-Ikatan murni ($1b_1$)** penyimpan pasangan elektron bebas!`,
      keyFormulas: [
        { name: 'Formula Reduksi Representasi GOT', formula: 'a_i = \\frac{1}{h} \\sum_R g_R \\chi(R) \\chi_i(R)' },
        { name: 'Operator Proyeksi SALC', formula: '\\hat{P}^\\Gamma \\phi_1 = \\frac{l_\\Gamma}{h} \\sum_R \\chi^\\Gamma(R) \\hat{R} \\phi_1' },
      ],
    },
  ],
  worked_examples: [
    {
      tag: 'soal-lewis-muatan-formal-scn',
      tags: ['soal-osk', 'muatan-formal', 'resonansi-scn'],
      title: 'Contoh Soal OSK 1: Struktur Lewis & Analisis Resonansi Mayor Ion Tiosianat (SCN⁻)',
      summary: 'Analisis komparatif muatan formal tiga kontributor resonansi ion tiosianat dan prediksi sisi reaktif protonasi.',
      content: `### 📋 Skenario & Data Masalah:
Ion tiosianat ($\\ce{SCN-}$) merupakan ligan ambidentat penting dalam kimia koordinasi. Urutan kerangka atom adalah $\\ce{S-C-N}$.

---

### 🎯 Pertanyaan:
1. Gambarkan tiga kemungkinan struktur resonansi Lewis untuk ion $\\ce{SCN-}$!
2. Hitung muatan formal ($FC$) pada setiap atom untuk ketiga struktur tersebut!
3. Tentukan struktur manakah yang merupakan kontributor resonansi mayor (paling stabil) dan jelaskan alasannya berdasarkan konsep keelektronegatifan!
4. Jika ion $\\ce{SCN-}$ direaksikan dengan ion $\\ce{H+}$ dalam larutan encer, pada atom manakah protonasi terjadi secara dominan?

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Menghitung Elektron Valensi Total
- Belerang ($\\ce{S}$): $6\\, e^-$
- Karbon ($\\ce{C}$): $4\\, e^-$
- Nitrogen ($\\ce{N}$): $5\\, e^-$
- Muatan anion ($-1$): $1\\, e^-$
$$\\text{Total elektron valensi} = 6 + 4 + 5 + 1 = 16\\, e^- \\quad (8\\text{ pasang elektron})$$

#### Langkah 2: Menyusun Tiga Struktur Resonansi Lewis
Karena karbon adalah atom yang paling elektropositif ($\\chi = 2.55$), karbon bertindak sebagai atom pusat:
- **Struktur I (Ikatan Rangkap Dua-Dua):**  
  $$\\ce{[:\\ddot{S}=C=\\ddot{N}:]^-}$$
- **Struktur II (Ikatan Tunggal - Tiga):**  
  $$\\ce{[:\\underset{\\cdot\\cdot}{\\ddot{S}}-C#N:]^-}$$
- **Struktur III (Ikatan Tiga - Tunggal):**  
  $$\\ce{[:S#C-\\underset{\\cdot\\cdot}{\\ddot{N}}:]^-}$$

#### Langkah 3: Menghitung Muatan Formal Setiap Atom ($FC = V - LP - BP_{\\text{ikatan}}$)
- **Struktur I:**
  - $FC(\\ce{S}) = 6 - 4 - 2 = 0$
  - $FC(\\ce{C}) = 4 - 0 - 4 = 0$
  - $FC(\\ce{N}) = 5 - 4 - 2 = \\mathbf{-1}$
- **Struktur II:**
  - $FC(\\ce{S}) = 6 - 6 - 1 = \\mathbf{-1}$
  - $FC(\\ce{C}) = 4 - 0 - 4 = 0$
  - $FC(\\ce{N}) = 5 - 2 - 3 = 0$
- **Struktur III:**
  - $FC(\\ce{S}) = 6 - 2 - 3 = \\mathbf{+1}$
  - $FC(\\ce{C}) = 4 - 0 - 4 = 0$
  - $FC(\\ce{N}) = 5 - 6 - 1 = \\mathbf{-2}$

#### Langkah 4: Evaluasi Kontributor Resonansi Mayor
- **Struktur III** dieliminasi karena terjadi pemisahan muatan yang besar ($+1$ dan $-2$).
- Membandingkan **Struktur I** dan **Struktur II**: keduanya memiliki pemisahan muatan minimal ($0, 0, -1$).
- Berdasarkan skala Pauling, nilai keelektronegatifan adalah $\\chi(\\ce{N}) = 3.04$ sedangkan $\\chi(\\ce{S}) = 2.58$. Atom Nitrogen memiliki keelektronegatifan yang jauh lebih tinggi daripada atom Belerang.
- Sesuai kaidah resonansi, muatan formal negatif paling stabil berada pada atom yang paling elektronegatif.
- **Kesimpulan Juri:** **Struktur I ($\\ce{S=C=N-}$)** adalah kontributor **Mayor Utama**, diikuti oleh Struktur II sebagai kontributor minor signifikan.

#### Langkah 5: Prediksi Sisi Reaktif Protonasi
Karena Struktur I mendominasi hibrida resonansi, kerapatan muatan negatif tertinggi terakumulasi pada atom **Nitrogen**. Ion $\\ce{H+}$ menyerang pasangan elektron bebas pada atom $\\ce{N}$, menghasilkan produk termodinamika **asam isotiosianat ($\\ce{HNCS}$)** daripada asam tiosianat ($\\ce{HSCN}$).

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian Olimpiade (HOTS)
> Rumus cepat eliminasi resonansi: eliminasi dulu struktur yang melanggar oktet atau memiliki pemisahan muatan besar ($+2/-2$). Dari sisa struktur yang setara pemisahan muatannya, jatuhkan pilihan pada struktur yang menempatkan muatan negatif di atom paling elektronegatif!`,
      keyFormulas: [
        { name: 'Muatan Formal', formula: 'FC = V - LP - \\frac{1}{2}(BP)' },
      ],
    },
    {
      tag: 'soal-vsepr-aturan-bent-sf4-clf3',
      tags: ['soal-osp', 'aturan-bent', 'geometri-sf4-clf3'],
      title: 'Contoh Soal OSP 2: Prediksi Bentuk Molekul & Deviasi Sudut Ikatan dengan Aturan Bent',
      summary: 'Aplikasi bilangan sterik 5, pemilahan posisi ekuatorial vs aksial, dan rasionalisasi distorsi sudut ikatan.',
      content: `### 📋 Skenario & Data Masalah:
Dua molekul anorganik halida-belerang memiliki rumus molekul $\\ce{SF4}$ dan $\\ce{ClF3}$.

---

### 🎯 Pertanyaan:
1. Tentukan tipe VSEPR ($AX_mE_n$) dan bilangan sterik ($SN$) untuk atom pusat masing-masing molekul!
2. Jelaskan mengapa pada $\\ce{SF4}$, pasangan elektron bebas (PEB) memilih berada di posisi ekuatorial daripada posisi aksial!
3. Gambarkan geometri bentuk molekul nyata $\\ce{SF4}$ dan $\\ce{ClF3}$, serta jelaskan deviasi sudut ikatan dari nilai sudut ideal trigonal bipiramidal ($90^\\circ, 120^\\circ, 180^\\circ$)!
4. Apakah molekul $\\ce{ClF3}$ bersifat polar atau nonpolar? Jelaskan berdasarkan momen dipol resultan!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Menentukan Tipe VSEPR & Bilangan Sterik
- **Molekul $\\ce{SF4}$:**
  - Atom pusat $\\ce{S}$ ($6\\, e^-$ valensi), membentuk 4 ikatan tunggal dengan $\\ce{F}$ ($4\\text{ PEI}$), sisa $2\\, e^-$ ($1\\text{ PEB}$).
  - Tipe VSEPR: **$AX_4E_1$** $\\implies$ Bilangan sterik $SN = 4 + 1 = 5$ (hibridisasi $sp^3d$).
- **Molekul $\\ce{ClF3}$:**
  - Atom pusat $\\ce{Cl}$ ($7\\, e^-$ valensi), membentuk 3 ikatan tunggal dengan $\\ce{F}$ ($3\\text{ PEI}$), sisa $4\\, e^-$ ($2\\text{ PEB}$).
  - Tipe VSEPR: **$AX_3E_2$** $\\implies$ Bilangan sterik $SN = 3 + 2 = 5$ (hibridisasi $sp^3d$).

#### Langkah 2: Alokasi Posisi PEB Berdasarkan Teori VSEPR & Aturan Bent
Pada kerangka trigonal bipiramidal, posisi aksial memiliki 3 tetangga sudut $90^\\circ$, sedangkan posisi ekuatorial hanya memiliki 2 tetangga sudut $90^\\circ$ dan 2 tetangga sudut lapang $120^\\circ$:
- Jika PEB $\\ce{SF4}$ diletakkan di aksial: terdapat 3 tolakan $\\text{LP-BP}$ pada sudut sempit $90^\\circ$.
- Jika PEB $\\ce{SF4}$ diletakkan di ekuatorial: hanya terdapat 2 tolakan $\\text{LP-BP}$ pada sudut $90^\\circ$.
- Berdasarkan Aturan Bent, posisi ekuatorial memiliki karakter-$s$ tinggi ($33.3\\%$) yang sangat disukai oleh PEB untuk stabilisasi energi dekat inti. Oleh karena itu, **PEB selalu menempati posisi ekuatorial**.

#### Langkah 3: Geometri Bentuk Molekul & Deviasi Sudut Ikatan
- **Bentuk Molekul $\\ce{SF4}$:** **Jungkat-jungkit (*Seesaw*)**.
  Tolakan kuat dari PEB ekuatorial mendorong ikatan aksial dan ekuatorial menjauh:
  - Sudut ekuatorial $\\ce{F_{ek}-S-F_{ek}}$ terkompresi dari $120^\\circ$ menjadi **$102^\\circ$**.
  - Sudut aksial $\\ce{F_{aks}-S-F_{aks}}$ tertekuk dari $180^\\circ$ menjadi **$173^\\circ$**.
- **Bentuk Molekul $\\ce{ClF3}$:** **Bentuk Huruf-T (*T-shaped*)**.
  Kedua PEB menempati posisi ekuatorial. Tolakan dua PEB ekuatorial menekan kedua ikatan aksial membengkok ke arah dalam:
  - Sudut ikatan $\\ce{F_{aks}-Cl-F_{ek}}$ menyusut dari $90^\\circ$ menjadi **$87.5^\\circ$**.

#### Langkah 4: Evaluasi Kepolaran Molekul $\\ce{ClF3}$
Geometri bentuk huruf-T tidak simetris secara ruang tiga dimensi. Dua dipol ikatan aksial yang saling berlawanan sedikit miring dan tidak membatalkan tarikan dipol ikatan ekuatorial, ditambah momen dipol dari kedua PEB ekuatorial. Akibatnya, resultan momen dipol molekul **$\\mu \\ne 0$** ($\\mu = 0.56\\text{ D}$). Molekul $\\ce{ClF3}$ adalah **molekul polar**.

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian Olimpiade (HOTS)
> Pada bilangan sterik 5 ($sp^3d$): jumlah PEB menentukan bentuk molekul secara instan: 1 PEB = Seesaw ($AX_4E$), 2 PEB = T-shaped ($AX_3E_2$), 3 PEB = Linear ($AX_2E_3$, karena seluruh 3 PEB berkumpul di ekuator sehingga menyisakan 2 ligan aksial $180^\circ$).`,
      keyFormulas: [
        { name: 'Bilangan Sterik', formula: 'SN = \\text{PEI} + \\text{PEB}' },
      ],
    },
    {
      tag: 'soal-mot-karbon-monoksida',
      tags: ['soal-osp', 'diagram-mot', 'karbon-monoksida-co'],
      title: 'Contoh Soal OSP 3: Diagram Orbital Molekul (MOT) Heteronuklir CO & NO⁺',
      summary: 'Analisis orbital molekul heteronuklir diatomik isoelektronik, orde ikatan rangkap 3, dan peran orbital HOMO dalam koordinasi hemoglobin.',
      content: `### 📋 Skenario & Data Masalah:
Gas karbon monoksida ($\\ce{CO}$) dan ion nitrosonium ($\\ce{NO+}$) merupakan molekul diatomik heteronuklir penting.

---

### 🎯 Pertanyaan:
1. Hitung jumlah elektron valensi total $\\ce{CO}$ dan $\\ce{NO+}$!
2. Jelaskan asimetri tingkat energi orbital atom $\\ce{C}$ dan $\\ce{O}$ pada diagram orbital molekul $\\ce{CO}$!
3. Tuliskan konfigurasi orbital molekul $\\ce{CO}$ dan hitung orde ikatannya!
4. Jelaskan mengapa orbital HOMO molekul $\\ce{CO}$ didominasi oleh atom karbon dan bagaimana hal ini menerangkan afinitas toksik $\\ce{CO}$ terhadap hemoglobin!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Menghitung Elektron Valensi Total
- $\\ce{CO}$: $\\ce{C}\\,(4\\, e^-) + \\ce{O}\\,(6\\, e^-) = \\mathbf{10\\, e^-}$ valensi.
- $\\ce{NO+}$: $\\ce{N}\\,(5\\, e^-) + \\ce{O}\\,(6\\, e^-) - 1\\, e^-\\,(\\text{muatan }+1) = \\mathbf{10\\, e^-}$ valensi.
Kedua spesi isoelektronik dengan molekul gas nitrogen ($\\ce{N2}$).

#### Langkah 2: Asimetri Energi Orbital Atom (Efek Elektronegativitas)
Atom Oksigen jauh lebih elektronegatif dibanding Karbon ($\\chi_{\\ce{O}} = 3.44$ vs $\\chi_{\\ce{C}} = 2.55$). Muatan inti efektif Oksigen menarik elektron lebih kuat, sehingga orbital atom $2s$ dan $2p$ Oksigen berada pada tingkat energi yang jauh lebih rendah daripada Karbon:
- $E(2s_{\\ce{O}}) \\approx -32.3\\text{ eV}$ vs $E(2s_{\\ce{C}}) \\approx -19.4\\text{ eV}$
- $E(2p_{\\ce{O}}) \\approx -15.8\\text{ eV}$ vs $E(2p_{\\ce{C}}) \\approx -10.7\\text{ eV}$
Karena orbital $2s_{\\ce{C}}$ memiliki tingkat energi yang sangat dekat dengan orbital $2p_z$ Oksigen, terjadi **pencampuran $s-p$ (*mixing*) yang sangat kuat**.

#### Langkah 3: Konfigurasi Orbital Molekul & Orde Ikatan
Konfigurasi orbital molekul valensi $\\ce{CO}$ (dari energi terendah ke tertinggi):
$$(3\\sigma)^2 \\quad (4\\sigma^*)^2 \\quad (1\\pi)^4 \\quad (5\\sigma)^2$$
1. **Perhitungan Orde Ikatan ($BO$):**
   - Elektron bonding: $3\\sigma (2) + 1\\pi (4) + 5\\sigma (2) = 8\\, e^-$
   - Elektron antibonding: $4\\sigma^* (2) = 2\\, e^-$
   $$BO = \\frac{N_b - N_a}{2} = \\frac{8 - 2}{2} = \\mathbf{3}$$
   Terbentuk ikatan kovalen rangkap tiga sejati ($\\ce{C#O}$) dengan energi disosiasi raksasa ($D_0 = 1076\\text{ kJ/mol}$).
2. **Sifat Kemagnetan:** Seluruh elektron berpasangan $\\implies$ bersifat **diamagnetik**.

#### Langkah 4: Analisis Orbital HOMO & Toksisitas Hemoglobin
- Orbital terisi berenergi tertinggi (**HOMO / Highest Occupied Molecular Orbital**) pada $\\ce{CO}$ adalah orbital $5\\sigma$.
- Karena energi orbital atom $2p_z$ Karbon jauh lebih dekat ke orbital $5\\sigma$ dibanding orbital Oksigen, fungsi gelombang HOMO ini **didominasi oleh kontribusi atom Karbon ($> 80\\%$)**.
- Secara spasial, orbital $5\\sigma$ merupakan cuping pasangan elektron bebas yang menjulur keluar terarah dari atom Karbon (*carbon lone-pair lobe*).
- Atom Karbon mendonasikan pasangan elektron dari HOMO ini ke orbital $d$ kosong kation $\\ce{Fe^2+}$ pada kompleks heme (ikatan $\\sigma$), diperkuat oleh donasi balik elektron $d$ terisi $\\ce{Fe^2+}$ ke orbital kosong LUMO $\\pi^*$ milik $\\ce{CO}$ (ikatan $\\pi$-backbonding). Sinergi ini membuat afinitas $\\ce{CO}$ mengikat hemoglobin lebih dari **200 kali lebih kuat** dibanding $\\ce{O2}$.

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian Olimpiade (HOTS)
> Meskipun atom Oksigen lebih elektronegatif, ketika $\\ce{CO}$ bertindak sebagai ligan dalam kimia koordinasi, $\\ce{CO}$ **selalu berikatan melalui atom Karbon (ikatan M-C), bukan Oksigen!** Hal ini karena orbital HOMO $5\\sigma$ terkonsentrasi di cuping atom Karbon.`,
      keyFormulas: [
        { name: 'Orde Ikatan Diatomik', formula: 'BO = \\frac{N_b - N_a}{2}' },
      ],
    },
    {
      tag: 'soal-born-haber-mgcl2',
      tags: ['soal-osn', 'siklus-born-haber', 'energi-kisi-mgcl2'],
      title: 'Contoh Soal OSN 4: Termodinamika Siklus Born-Haber & Energi Kisi MgCl₂',
      summary: 'Perhitungan kuantitatif energi kisi kristal garam alkali tanah via siklus termokimia Hess bertahap.',
      content: `### 📋 Skenario & Data Masalah:
Magnesium klorida ($\\ce{MgCl2}$) merupakan kristal ionik alkali tanah yang sangat stabil pada suhu kamar. Data termodinamika standar pada $298\\text{ K}$:
- Entalpi pembentukan standar $\\ce{MgCl2(s)}$: $\\Delta H_f^\\circ = -641.8\\text{ kJ/mol}$
- Entalpi sublimasi magnesium padat: $\\Delta H_{\\text{sub}}(\\ce{Mg}) = +147.1\\text{ kJ/mol}$
- Energi ionisasi pertama magnesium: $IE_1(\\ce{Mg}) = +737.7\\text{ kJ/mol}$
- Energi ionisasi kedua magnesium: $IE_2(\\ce{Mg}) = +1450.7\\text{ kJ/mol}$
- Energi disosiasi ikatan klorin: $BE(\\ce{Cl2}) = +242.4\\text{ kJ/mol}$
- Afinitas elektron atom klorin: $EA_1(\\ce{Cl}) = -348.6\\text{ kJ/mol}$

---

### 🎯 Pertanyaan:
1. Tuliskan reaksi termokimia untuk masing-masing tahapan pembentukan $\\ce{MgCl2(s)}$ dalam Siklus Born-Haber!
2. Hitung nilai energi kisi ($U_L$) pembentukan kristal $\\ce{MgCl2(s)}$ dari ion-ion gasnya!
3. Mengapa magnesium tidak membentuk garam $\\ce{MgCl(s)}$ pada kondisi standar, padahal untuk membentuk $\\ce{Mg^2+}$ dibutuhkan energi ionisasi kedua yang sangat besar ($1450.7\\text{ kJ/mol}$)?

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Persamaan Termokimia Seluruh Tahapan
Reaksi pembentukan standar:
$$\\ce{Mg(s) + Cl2(g) -> MgCl2(s)} \\quad \\Delta H_f^\\circ = -641.8\\text{ kJ/mol}$$
Tahapan siklus Born-Haber:
1. Sublimasi: $\\ce{Mg(s) -> Mg(g)} \\quad \\Delta H_1 = +147.1\\text{ kJ/mol}$
2. Ionisasi pertama: $\\ce{Mg(g) -> Mg+(g) + e-} \\quad \\Delta H_2 = +737.7\\text{ kJ/mol}$
3. Ionisasi kedua: $\\ce{Mg+(g) -> Mg^2+(g) + e-} \\quad \\Delta H_3 = +1450.7\\text{ kJ/mol}$
4. Disosiasi ikatan: $\\ce{Cl2(g) -> 2Cl(g)} \\quad \\Delta H_4 = +242.4\\text{ kJ/mol}$
5. Afinitas elektron (2 mol Cl): $2\\ce{Cl(g) + 2e- -> 2Cl-(g)} \\quad \\Delta H_5 = 2 \\times (-348.6) = -697.2\\text{ kJ/mol}$
6. Pembentukan kisi kristal: $\\ce{Mg^2+(g) + 2Cl-(g) -> MgCl2(s)} \\quad \\Delta H_6 = U_L$

#### Langkah 2: Menghitung Energi Kisi Kristal ($U_L$)
Berdasarkan Hukum Hess:
$$\\Delta H_f^\\circ = \\Delta H_{\\text{sub}} + IE_1 + IE_2 + BE(\\ce{Cl2}) + 2 \\cdot EA_1 + U_L$$
$$-641.8 = 147.1 + 737.7 + 1450.7 + 242.4 - 697.2 + U_L$$
$$-641.8 = +1880.7 + U_L$$
$$U_L = -641.8 - 1880.7 = \\mathbf{-2522.5\\text{ kJ/mol}}$$

#### Langkah 3: Analisis Kestabilan Termodinamika $\\ce{MgCl2}$ vs $\\ce{MgCl}$
- Pada hipotesis $\\ce{MgCl(s)}$, kation bermuatan $+1$ ($\\ce{Mg+}$) hanya membutuhkan $IE_1 = 737.7\\text{ kJ/mol}$.
- Namun berdasarkan rumus Kapustinskii ($U_L \\propto \\frac{|z_+ z_-|}{r_+ + r_-}$), energi kisi kristal $\\ce{Mg+Cl-}$ (muatan $1 \\times 1$) hanya sekitar $-750\\text{ kJ/mol}$, sehingga $\\Delta H_f^\\circ(\\ce{MgCl}) \\approx -125\\text{ kJ/mol}$.
- Sebaliknya pada $\\ce{MgCl2(s)}$, kation $\\ce{Mg^2+}$ bermuatan ganda ($+2$) dan berukuran jauh lebih kecil ($72\\text{ pm}$). Faktor perkalian muatan $|z_+ z_-| = 2 \\times 1 = 2$ melipatgandakan pelepasan energi kisi menjadi **$-2522.5\\text{ kJ/mol}$**!
- Keuntungan energi kisi sebesar $> 1750\\text{ kJ/mol}$ ini jauh melampaui biaya $IE_2$ ($1450.7\\text{ kJ/mol}$). Akibatnya, $\\ce{MgCl2}$ jauh lebih stabil secara termodinamika dan $\\ce{MgCl}$ akan secara spontan terdisproporsionasi:
  $$2\\ce{MgCl(s) -> Mg(s) + MgCl2(s)} \\quad \\Delta H^\\circ \\approx -390\\text{ kJ/mol}$$

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian Olimpiade (HOTS)
> Kunci jawaban kestabilan senyawa ionik bervalensi tinggi: selalu sebutkan bahwa **pelepasan energi kisi ($U_L$) yang meningkat kuadratik terhadap muatan ion lebih dari cukup mengompensasi biaya ionisasi endotermik bertingkat ($IE_n$)!**`,
      keyFormulas: [
        { name: 'Siklus Born-Haber Garam MX2', formula: '\\Delta H_f^\\circ = \\Delta H_{\\text{sub}} + IE_1 + IE_2 + BE + 2 EA + U_L' },
      ],
    },
    {
      tag: 'soal-vsepr-eksotis-if7-xef5',
      tags: ['soal-osn', 'vsepr-eksotis', 'if7-bipiramida-pentagonal', 'xef5-planar'],
      title: 'Contoh Soal OSN 5: Geometri Hipervalen Sterik 7 (IF₇ & Anion Pentagonal Planar XeF₅⁻)',
      summary: 'Analisis struktur koordinasi bilangan sterik 7, simetri D5h, dan geometri anion pentagonal planar gas mulia.',
      content: `### 📋 Skenario & Data Masalah:
Dua spesi representatif dengan bilangan sterik 7 ($SN = 7$) dalam silabus olimpiade adalah molekul iodin heptafluorida ($\\ce{IF7}$) dan anion pentafluoroxenat(IV) ($\\ce{XeF5-}$).

---

### 🎯 Pertanyaan:
1. Tentukan tipe VSEPR ($AX_mE_n$), bilangan sterik, dan geometri bentuk molekul dari $\\ce{IF7}$! Sebutkan dua nilai sudut ikatan yang terdapat pada molekul tersebut!
2. Tentukan jumlah elektron valensi total, tipe VSEPR, dan susunan spasial pasangan elektron bebas pada anion $\\ce{XeF5-}$!
3. Mengapa pada anion $\\ce{XeF5-}$, kedua pasangan elektron bebas (PEB) lebih memilih posisi trans-aksial ($180^\\circ$) daripada posisi ekuatorial, menghasilkan bentuk molekul **pentagonal planar**?
4. Apakah anion $\\ce{XeF5-}$ memiliki momen dipol permanen (polar atau nonpolar)?

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Analisis Iodin Heptafluorida ($\ce{IF7}$)
- Atom pusat $\\ce{I}$ (golongan 17, $7\\,e^-$ valensi), terikat pada 7 atom $\\ce{F}$ ($7\\text{ PEI}$), sisa $0\\text{ PEB}$.
- Tipe VSEPR: **$AX_7$** ($SN = 7$, hibridisasi $sp^3d^3$).
- Geometri molekul: **Bipiramida Pentagonal** (grup titik simetri $D_{5h}$).
- Dua nilai sudut ikatan:
  1. Sudut ekuatorial $\\ce{F_{ek}-I-F_{ek}} = \\frac{360^\\circ}{5} = \\mathbf{72^\\circ}$.
  2. Sudut aksial $\\ce{F_{aks}-I-F_{ek}} = \\mathbf{90^\\circ}$ dan $\\ce{F_{aks}-I-F_{aks}} = \\mathbf{180^\\circ}$.

#### Langkah 2: Menghitung Domain Valensi Anion $\ce{XeF5-}$
- Atom pusat $\\ce{Xe}$ ($8\\,e^-$) $+$ muatan ion $-1$ ($1\\,e^-$) $= 9\\,e^-$ pada atom pusat.
- 5 elektron digunakan untuk 5 ikatan tunggal $\\ce{Xe-F}$ ($5\\text{ PEI}$).
- Sisa elektron non-ikatan: $9 - 5 = 4\\,e^- \\implies \\mathbf{2\\text{ PEB}}$.
- Tipe VSEPR: **$AX_5E_2$** $\\implies SN = 5 + 2 = \\mathbf{7}$.
- Kerangka domain elektron dasar: **Bipiramida Pentagonal**.

#### Langkah 3: Penempatan PEB & Terbentuknya Geometri Pentagonal Planar
Pada bipiramida pentagonal, sudut ekuatorial sangat sempit, yakni **$72^\\circ$**:
- Jika PEB diletakkan di ekuatorial: PEB akan mengalami tolakan $\\text{PEB-PEI}$ yang sangat kuat pada sudut sempit $72^\\circ$.
- Sebaliknya, jika kedua PEB diletakkan pada posisi **aksial** ($180^\\circ$ saling berhadapan):
  1. Kedua PEB terpisah sejauh $180^\\circ$, meminimalkan gaya tolak $\\text{PEB-PEB}$.
  2. Setiap PEB hanya membentuk interaksi sudut $90^\\circ$ dengan kelima ikatan $\\ce{Xe-F}$ di ekuator (sama sekali tidak ada tolakan $72^\\circ$).
- Kelima atom fluorin tersusun pada satu bidang datar segilima beraturan di sekeliling atom $\\ce{Xe}$. Bentuk molekul aktual adalah **Pentagonal Planar (Segilima Datar)** dengan sudut ikatan $\\mathbf{72^\\circ}$!

#### Langkah 4: Evaluasi Momen Dipol Anion $\ce{XeF5-}$
- Anion $\\ce{XeF5-}$ memiliki simetri $D_{5h}$ yang sangat tinggi.
- Kelima vektor momen dipol ikatan $\\ce{Xe-F}$ tersebar simetris $72^\\circ$ pada bidang datar, saling meniadakan sempurna ($\\sum \\vec{\\mu}_{\\text{ikatan}} = 0$).
- Dua PEB aksial berada tepat berseberangan $180^\\circ$, saling meniadakan ($\\sum \\vec{\\mu}_{\\text{PEB}} = 0$).
- Resultan momen dipol total: $\\vec{\\mu}_{\\text{net}} = \\mathbf{0} \\implies$ Bersifat **nonpolar**.

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian Olimpiade (HOTS)
> Jangan samakan $AX_5E_2$ (Pentagonal Planar, $SN=7$) dengan $AX_4E_2$ (Square Planar, $SN=6$). Pada $SN=7$, sudut ekuatorial adalah $72^\circ$ sehingga PEB justru dipaksa pindah ke aksial untuk menghindari sudut $72^\circ$ yang terlalu sempit!`,
      keyFormulas: [
        { name: 'Sudut Ekuatorial Pentagonal', formula: '\\theta = \\frac{360^\\circ}{5} = 72^\\circ' },
      ],
    },
    {
      tag: 'soal-teori-pita-ssh-peierls',
      tags: ['soal-icho', 'teori-pita-ssh-peierls', 'model-ssh', 'transisi-peierls', 'poliasetilena', 'celah-pita'],
      title: 'Contoh Soal IChO 6: Kuantisasi Model Tight-Binding SSH, Celah Pita Poliasetilena & Transisi Peierls',
      summary: 'Kalkulasi analitik dispersi energi pita Hamiltonian SSH, celah pita pada batas Zona Brillouin, dan fisika defek soliton topologis.',
      content: `### 📋 Skenario & Data Masalah:
Rantai konduktif polimer satu dimensi *trans*-poliasetilena $(\\ce{[CH]_n})$ dimodelkan menggunakan Hamiltonian tight-binding Su-Schrieffer-Heeger (SSH).
Dalam fasa terdimerisasi akibat distorsi Peierls, jarak antar-inti berselang-seling antara ikatan tunggal ($r_1 = a_0 + \\delta$) dan ikatan rangkap ($r_2 = a_0 - \\delta$) dengan tetapan kisi sel satuan $a = 2a_0 = 2.46\\text{ \\AA}$.
Parameter model bernilai:
- Integral transfer rata-rata elektron $\\pi$: $t_0 = 2.50\\text{ eV}$
- Konstanta kopling elektron-fonon: $\\alpha = 4.10\\text{ eV/\\AA}$
- Parameter pergeseran dimerisasi kisi: $\\delta = 0.040\\text{ \\AA}$

---

### 🎯 Pertanyaan:
1. Hitung nilai integral transfer hopping intra-sel ($t_1$) dan inter-sel ($t_2$)!
2. Turunkan relasi dispersi energi pita $E(k)$ dalam ruang momentum dan hitung besar celah pita energi (*bandgap*, $E_g$) pada batas Zona Brillouin ($k = \\pi/a$)!
3. Berikan argumentasi fisis mekanika kuantum mengapa distorsi Peierls menurunkan energi keadaan dasar sistem rantai 1D dibandingkan rantai berjarak kisi seragam ($\delta = 0$)!
4. Jelaskan karakteristik unik pemisahan muatan dan spin (*charge-spin separation*) dari defek soliton netral ($S^0$) dan soliton bermuatan positif ($S^+$)!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Menghitung Integral Transfer Hopping $t_1$ dan $t_2$
Berdasarkan formulasi linear SSH terhadap distorsi kisi $\\delta$:
- Integral hopping ikatan tunggal (intra-sel):
  $$t_1 = t_0 - \\alpha\\delta = 2.50\\text{ eV} - (4.10\\text{ eV/\\AA} \\times 0.040\\text{ \\AA}) = 2.50 - 0.164 = \\mathbf{2.336\\text{ eV}}$$
- Integral hopping ikatan rangkap (inter-sel):
  $$t_2 = t_0 + \\alpha\\delta = 2.50\\text{ eV} + (4.10\\text{ eV/\\AA} \\times 0.040\\text{ \\AA}) = 2.50 + 0.164 = \\mathbf{2.664\\text{ eV}}$$

#### Langkah 2: Dispersi Energi Pita & Perhitungan Celah Pita (Bandgap, $E_g$)
Hamiltonian elektronik SSH dalam ruang-$k$:
$$\\mathcal{H}(k) = \\begin{pmatrix} 0 & t_1 + t_2 e^{-ika} \\\\ t_1 + t_2 e^{ika} & 0 \\end{pmatrix}$$
Persamaan sekular $\\det[\\mathcal{H}(k) - E(k)\\mathbf{I}] = 0$ menghasilkan relasi dispersi:
$$E(k) = \\pm \\sqrt{t_1^2 + t_2^2 + 2t_1 t_2 \\cos(ka)}$$
Pada batas Zona Brillouin ($k = \\pm \\frac{\\pi}{a}$), nilai $\\cos(ka) = \\cos(\\pi) = -1$:
$$E\\left(\\frac{\\pi}{a}\\right) = \\pm \\sqrt{t_1^2 + t_2^2 - 2t_1 t_2} = \\pm |t_2 - t_1|$$
Besar celah pita terlarang (*bandgap*):
$$E_g = E_+ - E_- = 2|t_2 - t_1| = 4\\alpha\\delta$$
$$E_g = 2 \\times |2.664 - 2.336| = 2 \\times 0.328\\text{ eV} = \\mathbf{0.656\\text{ eV}}$$

#### Langkah 3: Argumentasi Kuantum Kestabilan Termodinamika Distorsi Peierls
- Pada rantai 1D ideal berjarak kisi seragam ($\\delta = 0$), pita energi terisi tepat setengahnya (*half-filled band*) dan tingkat Fermi ($E_F$) terletak tepat di titik kontak pita konduksi dan pita valensi ($E_g = 0$, bersifat logam konduktor).
- Ketika terjadi distorsi dimerisasi Peierls ($\\delta > 0$), celah pita terbuka tepat pada permukaan Fermi ($k_F = \\pi/a$). Seluruh keadaan elektronik pada pita valensi (di bawah tingkat Fermi) mengalami penurunan energi:
  $$\\Delta E_{\\text{elektronik}} \\propto -\\delta^2 \\ln(1/\\delta)$$
- Biaya energi elastis kisi fonon untuk meregangkan ikatan bernilai:
  $$\\Delta E_{\\text{elastis}} = +\\frac{1}{2} K \\delta^2$$
- Karena suku logaritmik $-\\delta^2 \\ln(1/\\delta)$ mendominasi untuk deformasi $\\delta$ yang kecil, penurunan energi elektronik selalu melampaui biaya elastis kisi fonon. Akibatnya, distorsi Peierls bersifat spontan pada suhu rendah!

#### Langkah 4: Karakteristik Pemisahan Muatan dan Spin Defek Soliton Topologis
Pada batas dinding domain antara dua fasa dimerisasi degenerate (A dan B), terbentuk defek soliton topologis dengan tingkat energi terikat tepat di tengah celah pita (*mid-gap state* pada $E = 0$):
1. **Soliton Netral ($S^0$):**
   - Keadaan mid-gap terisi tepat 1 elektron valensi tak berpasangan.
   - Muatan netto: $q = 0$.
   - Spin intrinsik: $s = 1/2$ (radikal bebas paramagnetik terdelokalisasi).
2. **Soliton Kationik Positif ($S^+$ / Doping Akseptor seperti $\\ce{I2}$):**
   - Satu elektron ditarik oleh dopan akseptor sehingga keadaan mid-gap kosong (0 elektron).
   - Muatan netto: $q = +e$.
   - Spin intrinsik: $s = 0$ (spesi bermuatan tanpa momen magnetik).
Fenomena ini memvalidasi konsep mutakhir fisika zat padat kuantum: pemisahan derajat kebebasan muatan dan spin (*spin-charge separation*).

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian Olimpiade (HOTS)
> Rumus cepat celah pita SSH: $E_g = 4\\alpha|\\delta|$. Jika pergeseran kisi $\\delta$ diketahui, celah pita langsung dapat dihitung dalam hitungan detik. Dan ingat paradoks soliton: soliton netral ($S^0$) membawa spin tanpa muatan, sedangkan soliton terionisasi ($S^+$ atau $S^-$) membawa muatan tanpa spin!`,
      keyFormulas: [
        { name: 'Celah Pita SSH Bandgap', formula: 'E_g = 2|t_2 - t_1| = 4\\alpha|\\delta|' },
        { name: 'Dispersi Energi Kisi 1D', formula: 'E(k) = \\pm \\sqrt{t_1^2 + t_2^2 + 2t_1 t_2\\cos(ka)}' },
        { name: 'Energi Mid-Gap Soliton', formula: 'E_{\\text{soliton}} = 0' },
      ],
    },
  ],
};

export const OSN_TOPIC_2: MaterialItem = {
  ...RAW_OSN_TOPIC_2,
  prerequisites: RAW_OSN_TOPIC_2.prerequisites.map((b) => ({
    ...b,
    checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_02[b.tag] || [],
  })),
  core_concepts: RAW_OSN_TOPIC_2.core_concepts.map((b) => ({
    ...b,
    checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_02[b.tag] || [],
  })),
  worked_examples: RAW_OSN_TOPIC_2.worked_examples.map((b) => ({
    ...b,
    checkpointQuizzes: undefined, // Contoh soal bebas kuis agar siswa fokus ke pembahasan
  })),
};
