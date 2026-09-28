/**
 * osnTopic08.ts
 * Topik 8: Kimia Anorganik & Senyawa Koordinasi
 * Jenjang: OSN / IChO
 */

import type { MaterialItem } from '../../materialsData.ts';

export const OSN_TOPIC_8: MaterialItem = {
  id: 8,
  topic_number: 8,
  title: 'Kimia Anorganik & Senyawa Koordinasi',
  slug: 'anorganik-senyawa-koordinasi',
  category: 'Kimia Anorganik',
  level: 'OSN',
  readTimeMinutes: 38,
  summary: 'Kajian komprehensif kimia koordinasi modern: struktur atom pusat & klasifikasi ligan (dentisitas, efek kelat), tata nama IUPAC resmi, Teori Ikatan Valensi (VBT), Teori Medan Kristal (CFT) geometri oktahedral, tetrahedral, dan bujur sangkar, Energi Penstabilan Medan Kristal (CFSE), deret spektrokimia & ligan pi-akseptor/pi-donor, konfigurasi high-spin vs low-spin, efek Jahn-Teller distorsi tetragonal, spektra elektronik d-d & warna kompleks, kemagnetan (momen magnetik spin-only mu_eff), isomerisme struktural & stereoisomerisme (cis-trans, fac-mer, kiralitas optis), serta kinetika substitusi ligan (efek trans).',
  allTags: [
    'kluster-boran-wade-mingos-organologam',
    'aturan-wade',
    'psept',
    'boran',
    'closo-nido-arachno',
    'parameter-racah',
    'efek-nefelauxetik',
    'katalisis-wilkinson',
    'organologam',
    'senyawa-koordinasi',
    'ligan',
    'bilangan-koordinasi',
    'efek-kelat',
    'dentisitas-ligan',
    'tatanama-kompleks',
    'tatanama-iupac',
    'bilangan-oksidasi-logam',
    'aturan-penamaan-ligan',
    'teori-ikatan-valensi-vbt',
    'hibridisasi-kompleks',
    'orbital-dalam-luar',
    'geometri-koordinasi',
    'teori-medan-kristal-cft',
    'splitting-orbital-d',
    'medan-oktahedral',
    'medan-tetrahedral',
    'medan-bujur-sangkar',
    'energi-penstabilan-cfse',
    'spin-tinggi-rendah',
    'deret-spektrokimia',
    'energi-perpasangan-p',
    'pi-donor-pi-akseptor',
    'efek-jahn-teller',
    'distorsi-tetragonal',
    'elongasi-z',
    'kompleks-cu2-d9',
    'orbital-degenerasi',
    'momen-magnetik-spin-only',
    'paramagnetik-diamagnetik',
    'spektra-elektronik-d-d',
    'warna-senyawa-kompleks',
    'aturan-laporte',
    'isomer-geometri',
    'isomer-optis',
    'cis-trans-fac-mer',
    'kinetika-substitusi-ligan',
    'efek-trans',
    'soal-cft-d6',
    'soal-isomer-kompleks',
    'soal-jahn-teller',
    'soal-sintesis-cisplatin',
    'soal-spektra-ti-d1',
    'soal-osk',
    'soal-osp',
    'soal-osn',
    'teori-medan-kristal',
    'cft',
    'medan-ligan',
    'cfse-stabilisasi',
    'cft-d6',
    'isomer-kompleks',
    'cis-trans',
    'kiralitas-kompleks',
    'platina-bujur-sangkar',
  ],
  prerequisites: [
    {
      tag: 'prasyarat-struktur-senyawa-koordinasi-kelat',
      tags: ['senyawa-koordinasi', 'ligan', 'bilangan-koordinasi', 'efek-kelat', 'dentisitas-ligan'],
      title: 'Prasyarat 1: Struktur Senyawa Kompleks, Bilangan Koordinasi, Klasifikasi Ligan, & Efek Kelat Termodinamika',
      summary: 'Dasar ikatan kovalen koordinasi akseptor-donor, jenis dentisitas ligan monodentat hingga polidentat, dan dorongan entropik kestabilan kelat.',
      content: `Senyawa koordinasi (senyawa kompleks) terbentuk dari interaksi asam-basa Lewis antara kation/atom logam pusat sebagai akseptor pasangan elektron bebas (asam Lewis) dengan molekul netral atau anion yang disebut **ligan** sebagai donor pasangan elektron (basa Lewis).

### 1. Anatomi Senyawa Kompleks & Bilangan Koordinasi:
Suatu senyawa koordinasi umumnya terdiri atas:
- **Spesi Logam Pusat:** Logam transisi blok $d$ dengan orbital kosong berenergi rendah yang siap menerima pasangan elektron.
- **Ligan:** Spesi donor dengan setidaknya satu pasangan elektron bebas (PEB).
- **Bilangan Koordinasi (BK):** Jumlah ikatan koordinasi langsung yang terbentuk antara atom donor ligan dengan atom pusat. Nilai BK paling umum adalah $6$ (oktahedral) dan $4$ (tetrahedral atau bujur sangkar).
- **Bola Koordinasi (Dalam Tanda Kurung Siku $[...]$):** Entitas logam pusat beserta seluruh ligan yang terikat langsung secara koordinatif. Ion di luar kurung siku bertindak sebagai ion lawan (*counter-ion*) penyeimbang muatan.
  $$\\ce{[Co(NH3)5Cl]Cl2} \\implies [\\ce{Co(NH3)5Cl}]^{2+} \\text{ (Kation kompleks)} + 2\\ce{Cl-} \\text{ (Anion lawan)}$$

---

### 2. Klasifikasi Ligan Berdasarkan Dentisitas (*Denticity*):
Dentisitas menyatakan jumlah atom donor pada satu molekul ligan yang dapat mengikat logam pusat secara simultan:
1. **Ligan Monodentat (Bergigi Satu):** Mengikat logam melalui satu atom donor tunggal.
   - Netral: $\\ce{H2O}$ (aqua), $\\ce{NH3}$ (ammina), $\\ce{CO}$ (karbonil), $\\ce{NO}$ (nitrosil), $\\ce{C5H5N}$ (piridin / py).
   - Anionik: $\\ce{F-}, \\ce{Cl-}, \\ce{Br-}, \\ce{I-}, \\ce{OH-}, \\ce{CN-}, \\ce{N3-}$ (azida).
2. **Ligan Bidentat (Bergigi Dua):** Mengikat logam melalui dua atom donor secara bersamaan membentuk cincin kelat:
   - Etilendiamin ($\\ce{en}$, $\\ce{NH2-CH2-CH2-NH2}$): Netral, dua atom donor $\\ce{N}$.
   - Oksalat ($\\ce{ox^2-}$, $\\ce{C2O4^2-}$): Anionik, dua atom donor $\\ce{O}$.
   - $2,2'$-Bipiridin ($\\ce{bpy}$) dan $1,10$-Fenantrolin ($\\ce{phen}$).
   - Glisinat ($\\ce{gly-}$, $\\ce{NH2-CH2-COO-}$): Bidentat tak simetris (satu donor $\\ce{N}$ dan satu donor $\\ce{O}$).
3. **Ligan Polidentat & Ligan Khelat:**
   - Dietilentriamin ($\\ce{dien}$, tridentat, 3 donor $\\ce{N}$).
   - Etilendiamintetraasetat ($\\ce{EDTA^4-}$): Heksadentat (dua donor $\\ce{N}$ dan empat donor $\\ce{O^-}$), mampu membungkus kation logam oktahedral dalam satu sangkar molekul yang sangat rapat.
4. **Ligan Ambidentat:** Ligan yang memiliki lebih dari satu jenis atom donor potensial, tetapi hanya dapat berikatan melalui salah satu atom donor pada satu waktu:
   - $\\ce{NO2-}$: Mengikat via $\\ce{N}$ disebut **nitro** ($\\ce{M-NO2}$); mengikat via $\\ce{O}$ disebut **nitrito** ($\\ce{M-ONO}$).
   - $\\ce{SCN-}$: Mengikat via $\\ce{S}$ disebut **tiosianato** ($\\ce{M-SCN}$); mengikat via $\\ce{N}$ disebut **isotiosianato** ($\\ce{M-NCS}$).

---

### 3. Efek Kelat Termodinamika (*The Chelate Effect*):
Senyawa kompleks yang mengandung ligan khelat (bidentat atau polidentat) memiliki tetapan kestabilan pembentukan ($K_f$) yang **jutaan kali lebih besar** dibandingkan analog kompleksnya yang mengandung ligan monodentat sederhana.
*Contoh Perbandingan Kuantitatif pada Ion Nikel(II):*
$$\\ce{[Ni(H2O)6]^2+ + 6NH3 <=> [Ni(NH3)6]^2+ + 6H2O} \\quad \\log \\beta_6 = 8.61$$
$$\\ce{[Ni(H2O)6]^2+ + 3en <=> [Ni(en)3]^2+ + 6H2O} \\quad \\log \\beta_3 = 18.28$$
Kestabilan kompleks $[\\ce{Ni(en)3}]^{2+}$ lebih tinggi hampir $10^{10}$ kali lipat!
**Asal Usul Termodinamika:**
$$\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$$
- Kedua reaksi melibatkan pembentukan ikatan koordinasi $\\ce{Ni-N}$ dengan entalpi yang hampir serupa ($\\Delta H^\\circ \\approx$ konstan).
- Namun pada reaksi dengan etilendiamin, $4$ partikel pereaksi ($1$ ion nikel $+ 3$ molekul en) menghasilkan $7$ partikel produk ($1$ kompleks $+ 6$ molekul air bebas).
- Peningkatan jumlah partikel bebas terlarut menyebabkan **lonjakan entropi translasi yang masif** ($\\Delta S^\\circ \\gg 0$), yang secara termodinamika memberikan dorongan energi bebas negatif raksasa ($-T\\Delta S^\\circ \\ll 0$).`,
      keyFormulas: [
        { name: 'Entropi Efek Kelat', formula: '\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ \\quad (\\Delta S^\\circ \\gg 0)' },
      ],
    },
    {
      tag: 'prasyarat-tatanama-iupac-senyawa-koordinasi',
      tags: ['tatanama-kompleks', 'tatanama-iupac', 'bilangan-oksidasi-logam', 'aturan-penamaan-ligan'],
      title: 'Prasyarat 2: Tata Nama Resmi IUPAC Senyawa Koordinasi & Penentuan Bilangan Oksidasi Logam',
      summary: 'Aturan nomenklatur sistematis IUPAC untuk ligan netral/anionik, awalan multiplikatif bis/tris, akhiran kation vs anion kompleks, dan muatan formal.',
      content: `Aturan tata nama senyawa koordinasi ditetapkan secara universal oleh IUPAC (*International Union of Pure and Applied Chemistry*) agar struktur spasial dan muatan senyawa kompleks dapat dituliskan secara presisi.

### 1. Aturan Dasar Penamaan Senyawa Koordinasi:
1. **Urutan Kation & Anion:** Seperti garam sederhana, spesi kation selalu dinamai terlebih dahulu mendahului spesi anion.
2. **Penamaan Entitas Kompleks:**
   - Ligan ditulis terlebih dahulu dengan urutan alfabetis nama ligan (mengabaikan awalan jumlah seperti di-, tri-, tetra-), baru kemudian diikuti nama atom pusat logam.
   - Bilangan oksidasi logam ditulis dengan angka Romawi di dalam tanda kurung langsung setelah nama logam: $\\text{misal besi(III), kobalt(II)}$.
3. **Penamaan Ligan:**
   - **Ligan Anionik:** Berakhiran *-o*:
     - $\\ce{Cl-}$: kloro, $\\ce{F-}$: fluoro, $\\ce{Br-}$: bromo, $\\ce{I-}$: iodo
     - $\\ce{CN-}$: siano, $\\ce{OH-}$: hidrokso, $\\ce{O^2-}$: okso
     - $\\ce{C2O4^2-}$: oksalato, $\\ce{CO3^2-}$: karbonato, $\\ce{SO4^2-}$: sulfato
   - **Ligan Netral:** Menggunakan nama molekul aslinya, kecuali perkecualian khusus:
     - $\\ce{H2O}$: aqua
     - $\\ce{NH3}$: ammina (ditulis dengan huruf 'm' ganda untuk membedakan dari amina organik)
     - $\\ce{CO}$: karbonil
     - $\\ce{NO}$: nitrosil
4. **Awalan Jumlah Ligan:**
   - Untuk ligan sederhana: mono-, di-, tri-, tetra-, penta-, heksa-.
   - Untuk ligan yang namanya sudah mengandung awalan bilangan (seperti etilendiamin) atau ligan pengkelat poliatomik: gunakan awalan **bis-** ($2$), **tris-** ($3$), **tetrakis-** ($4$), **pentakis-** ($5$) dan nama ligan diletakkan di dalam kurung: misal $\\text{tris(etilendiamin)}$.

---

### 2. Penamaan Logam Pusat:
- **Jika Kompleks Bermuatan Kationik atau Netral:** Nama logam ditulis menggunakan nama umum bahasa Indonesia:
  - Kobalt $\\to$ kobalt(III)
  - Besi $\\to$ besi(II)
  - Tembaga $\\to$ tembaga(II)
- **Jika Kompleks Bermuatan Anionik (Bermuatan Negatif):** Nama logam menggunakan akar kata bahasa Latin dan diakhiri dengan akhiran **-at**:
  - Besi (Ferrum) $\\to$ ferat
  - Tembaga (Cuprum) $\\to$ kuprat
  - Emas (Aurum) $\\to$ aurat
  - Timbal (Plumbum) $\\to$ plumbat
  - Perak (Argentum) $\\to$ argentat
  - Timah (Stannum) $\\to$ stanat
  - Nikel $\\to$ nikelat, Seng $\\to$ zinkat, Kobalt $\\to$ kobaltat, Kromium $\\to$ kromat

---

### 3. Contoh Analisis Tata Nama Komprehensif:
1. $\\ce{[Co(NH3)5Cl]Cl2}$:
   - Kation kompleks: $[\\ce{Co(NH3)5Cl}]^{2+}$, Anion lawan: $2\\ce{Cl-}$.
   - Ligan: 5 ammina (A) $+ 1$ kloro (K) $\\implies$ urutan alfabetis: pentaamminakloro.
   - Biloks $\\ce{Co}$: $x + 5(0) + 1(-1) = +2 \\implies x = +3$.
   - Nama Resmi: **Pentaamminaklorokobalt(III) klorida**.
2. $\\ce{K4[Fe(CN)6]}$:
   - Kation: kalium, Anion kompleks: $[\\ce{Fe(CN)6}]^{4-}$.
   - Biloks $\\ce{Fe}$: $x + 6(-1) = -4 \\implies x = +2$.
   - Nama Resmi: **Kalium heksasianoferat(II)**.
3. $\\ce{[Pt(en)2(NO2)2](SO4)}$:
   - Ligan: bis(etilendiamin) dan dinitro.
   - Biloks $\\ce{Pt}$: $x + 2(0) + 2(-1) = +2 \\implies x = +4$.
   - Nama Resmi: **Bis(etilendiamin)dinitroplatina(IV) sulfat**.`,
      keyFormulas: [
        { name: 'Muatan Kompleks', formula: 'q_{\\text{kompleks}} = \\text{Biloks Logam} + \\sum q_{\\text{ligan}}' },
      ],
    },
    {
      tag: 'prasyarat-teori-ikatan-valensi-vbt-hibridisasi',
      tags: ['teori-ikatan-valensi-vbt', 'hibridisasi-kompleks', 'orbital-dalam-luar', 'geometri-koordinasi'],
      title: 'Prasyarat 3: Teori Ikatan Valensi (VBT) Linus Pauling: Hibridisasi Orbital, Kompleks Orbital Dalam vs Luar',
      summary: 'Model tumpang-tindih orbital hibrida kation logam dengan PEB ligan, geometri sp3, dsp2, sp3d2, dan d2sp3 serta keterbatasannya.',
      content: `Teori Ikatan Valensi (*Valence Bond Theory* / VBT) yang dikembangkan oleh Linus Pauling memandang ikatan koordinasi sebagai hasil tumpang-tindih (*overlap*) antara orbital kosong kation logam yang terhibridisasi dengan orbital terisi pasangan elektron bebas (PEB) dari ligan.

### 1. Hibridisasi & Geometri Ruang Kompleks:
Berdasarkan bilangan koordinasi dan tolakan orbital:
1. **Bilangan Koordinasi 4:**
   - **Hibridisasi $sp^3$ (Tetrahedral):**
     Terbentuk jika ligan tidak memaksa perpasangan elektron orbital $(n-1)d$ (sering terjadi pada ion $d^{10}$ seperti $\\ce{Zn^2+}$ atau ion $d^8$ dengan ligan medan lemah seperti $[\\ce{NiCl4}]^{2-}$). Sudut ikatan $109.5^\\circ$.
   - **Hibridisasi $dsp^2$ (Bujur Sangkar / Square Planar):**
     Terbentuk jika elektron $d$ dipaksa berpasangan mengosongkan satu orbital $(n-1)d_{x^2-y^2}$. Sangat lazim pada ion $d^8$ (misal $\\ce{Pt^2+}, \\ce{Pd^2+}, \\ce{Au^3+}, [\\ce{Ni(CN)4}]^{2-}$). Seluruh ligan berada pada satu bidang datar dengan sudut ikatan $90^\\circ$.
2. **Bilangan Koordinasi 6 (Geometri Oktahedral):**
   - **Kompleks Orbital Dalam (*Inner Orbital Complex*, $d^2sp^3$):**
     Menggunakan dua orbital $(n-1)d$ dari kulit dalam (yaitu $d_{x^2-y^2}$ dan $d_{z^2}$) bersama orbital $ns$ dan $np$. Terjadi saat ligan kuat memaksa elektron-elektron tak berpasangan pada orbital $d$ untuk berpasangan terlebih dahulu. Karakteristik: bersifat **spin rendah (*low-spin*)** atau diamagnetik.
   - **Kompleks Orbital Luar (*Outer Orbital Complex*, $sp^3d^2$):**
     Menggunakan dua orbital $nd$ dari kulit terluar karena orbital $(n-1)d$ terisi penuh atau ligan terlalu lemah untuk memaksa perpasangan elektron. Karakteristik: memiliki banyak elektron tak berpasangan sehingga bersifat **spin tinggi (*high-spin*)** dan paramagnetik kuat.

---

### 2. Contoh Komparasi VBT pada Kompleks Nikel(II) ($d^8$):
Konfigurasi ion bebas $\\ce{Ni^2+} = [\\ce{Ar}] 3d^8$:
- **$[\\ce{Ni(CN)4}]^{2-}$:** Ion $\\ce{CN-}$ memaksa dua elektron tak berpasangan pada orbital $3d$ untuk berpasangan membentuk orbital $3d$ kosong tunggal. Terjadi hibridisasi $dsp^2$ (bujur sangkar), seluruh elektron berpasangan $\implies$ bersifat **diamagnetik** ($n = 0$).
- **$[\\ce{NiCl4}]^{2-}$:** Ion $\\ce{Cl-}$ tidak mampu memaksa perpasangan elektron orbital $3d$. Hibridisasi melibatkan orbital $4s$ dan $4p$ membentuk $sp^3$ (tetrahedral), menyisakan 2 elektron tak berpasangan $\implies$ bersifat **paramagnetik** ($n = 2$).

---

### 3. Kelemahan Teori Ikatan Valensi:
Meskipun VBT berhasil memprediksi geometri kualitatif, teori ini memiliki kelemahan mendasar:
1. Tidak dapat menjelaskan mengapa ligan tertentu (seperti $\\ce{CN-}$) dapat memaksa perpasangan elektron sedangkan ligan lain (seperti $\\ce{Cl-}$) tidak dapat.
2. Tidak dapat memprediksi warna dan spektra serapan elektronik senyawa kompleks.
3. Mengabaikan ketergantungan kemagnetan terhadap temperatur.
Kelemahan inilah yang memicu lahirnya **Teori Medan Kristal (*Crystal Field Theory* / CFT)**.`,
      keyFormulas: [
        { name: 'Hibridisasi Bujur Sangkar', formula: 'dsp^2 \\implies \\text{Bujur Sangkar (Square Planar)}' },
        { name: 'Hibridisasi Oktahedral', formula: 'd^2sp^3 \\text{ (Orbital Dalam) vs } sp^3d^2 \\text{ (Orbital Luar)}' },
      ],
    },
  ],
  core_concepts: [
    {
      tag: 'konsep-teori-medan-kristal-cft-oktahedral-tetrahedral',
      tags: ['teori-medan-kristal-cft', 'splitting-orbital-d', 'medan-oktahedral', 'medan-tetrahedral', 'medan-bujur-sangkar'],
      title: 'Konsep Inti 1: Teori Medan Kristal (CFT): Pemisahan Orbital d Geometri Oktahedral, Tetrahedral, & Bujur Sangkar',
      summary: 'Model elektrostatik pemecahan degenerasi 5 orbital d kation logam menjadi himpunan t2g-eg, e-t2, dan deret energi bujur sangkar.',
      content: `Teori Medan Kristal (*Crystal Field Theory* / CFT) yang diperkenalkan oleh Hans Bethe dan J.H. van Vleck memperlakukan interaksi antara ion logam pusat dan ligan murni sebagai **interaksi elektrostatik ionik**, di mana ligan dipandang sebagai muatan titik negatif (*negative point charges*).

### 1. Pemisahan Orbital $d$ pada Medan Oktahedral ($O_h$):
Pada atom/ion logam gas bebas, kelima orbital $d$ ($d_{xy}, d_{yz}, d_{xz}, d_{x^2-y^2}, d_{z^2}$) memiliki tingkat energi yang persis sama (**degenerasi rangkap 5**).
Bila ion logam dikelilingi secara simetris oleh 6 ligan oktahedral yang mendekat sepanjang sumbu kartesius $\\pm x, \\pm y, \\pm z$:
- **Orbital $e_g$ ($d_{x^2-y^2}$ dan $d_{z^2}$):** Cuping orbital berada tepat di sepanjang sumbu kartesius, sehingga bertatapan langsung dengan ligan dan mengalami tolakan elektrostatik paling hebat. Energinya terangkat sebesar $+0.6\\Delta_o$ ($+\\frac{3}{5}\\Delta_o$) di atas pusat barisentrum (*barycenter*).
- **Orbital $t_{2g}$ ($d_{xy}, d_{yz}, d_{xz}$):** Cuping orbital terletak di antara sumbu kartesius (pada sudut $45^\\circ$ terhadap sumbu), sehingga mengalami tolakan elektrostatik yang jauh lebih lemah. Energinya turun terstabilkan sebesar $-0.4\\Delta_o$ ($-\\frac{2}{5}\\Delta_o$).

Besar selisih energi antara himpunan $e_g$ dan $t_{2g}$ didefinisikan sebagai parameter pemisahan medan oktahedral ($\\Delta_o$ atau $10\\ Dq$):
$$\\Delta_o = E(e_g) - E(t_{2g})$$
*Kaidah Barisentrum:* Kekekalan energi total mengharuskan:
$$3(-0.4\\Delta_o) + 2(+0.6\\Delta_o) = -1.2\\Delta_o + 1.2\\Delta_o = 0$$

---

### 2. Pemisahan Orbital $d$ pada Medan Tetrahedral ($T_d$):
Pada geometri tetrahedral, 4 ligan menempati sudut-sudut kubus berselang-seling. Tidak ada satu pun orbital $d$ yang menghadap langsung ke arah ligan, namun orbital yang berada di antara sumbu lebih dekat dengan arah datangnya ligan dibanding orbital aksial:
- **Orbital $t_2$ ($d_{xy}, d_{yz}, d_{xz}$):** Mengalami tolakan lebih kuat $\\implies$ terdestabilkan sebesar $+0.4\\Delta_t$.
- **Orbital $e$ ($d_{x^2-y^2}, d_{z^2}$):** Mengalami tolakan lebih lemah $\\implies$ terstabilkan sebesar $-0.6\\Delta_t$.
Pola pemisahan tetrahedral merupakan **kebalikan terbalik (*inversion*)** dari pola medan oktahedral!

**Hubungan Kuantitatif $\\Delta_t$ dan $\\Delta_o$:**
Karena hanya ada 4 ligan (bukan 6) dan ligan tidak bertatapan tepat di sumbu:
$$\\Delta_t = \\frac{4}{9} \\Delta_o \\approx 0.44 \\Delta_o$$
Karena nilai $\\Delta_t$ selalu jauh lebih kecil daripada energi perpasangan elektron ($P$), **seluruh kompleks tetrahedral selalu bersifat spin tinggi (*high-spin*) murni!**

---

### 3. Pemisahan Orbital $d$ pada Medan Bujur Sangkar (*Square Planar*, $D_{4h}$):
Geometri bujur sangkar dapat diturunkan secara konseptual dari geometri oktahedral dengan menarik kedua ligan aksial pada sumbu $z$ menjauh hingga tak hingga ($z$-elongasi ekstrem).
Akibat hilangnya ligan pada sumbu $z$, seluruh orbital yang mengandung komponen sumbu $z$ mengalami penurunan energi drastis:
Urutan tingkat energi orbital dari yang terendah ke yang tertinggi:
$$d_{xz}, d_{yz} < d_{z^2} < d_{xy} \\ll d_{x^2-y^2}$$
Pemisahan energi antara $d_{xy}$ dan $d_{x^2-y^2}$ bernilai sangat besar ($\\Delta_{\\text{sp}} \\approx 1.3 \\Delta_o$). Hal ini menjelaskan mengapa ion logam berkonfigurasi $d^8$ (seperti $\\ce{Pt^2+}, \\ce{Pd^2+}, \\ce{Au^3+}$, dan $\\ce{Ni^2+}$ medan kuat) hampir selalu mengadopsi geometri bujur sangkar yang terisi penuh hingga orbital $d_{xy}$, menyisakan orbital berenergi tinggi $d_{x^2-y^2}$ kosong sempurna.`,
      keyFormulas: [
        { name: 'Pemisahan Medan Oktahedral', formula: '\\Delta_o = E(e_g) - E(t_{2g})' },
        { name: 'Relasi Medan Tetrahedral & Oktahedral', formula: '\\Delta_t = \\frac{4}{9}\\Delta_o' },
      ],
    },
    {
      tag: 'konsep-cfse-spin-tinggi-rendah-deret-spektrokimia',
      tags: ['energi-penstabilan-cfse', 'spin-tinggi-rendah', 'deret-spektrokimia', 'energi-perpasangan-p', 'pi-donor-pi-akseptor'],
      title: 'Konsep Inti 2: Energi Penstabilan Medan Kristal (CFSE), Deret Spektrokimia, & Konfigurasi High-Spin vs Low-Spin',
      summary: 'Kalkulasi neraca kuantitatif CFSE, persaingan Delta dan energi perpasangan P, sifat ikatan pi-backbonding ligan kuat, dan konfigurasi d4-d7.',
      content: `Energi Penstabilan Medan Kristal (*Crystal Field Stabilization Energy* / CFSE) adalah stabilitas termodinamika netto yang diperoleh ion logam akibat penataan elektron-elektronnya ke dalam orbital $d$ yang telah terbelah dibandingkan dengan keadaan medan bola hipotetis.

### 1. Formulasi Matematis CFSE Oktahedral:
$$\\text{CFSE} = \\left( -0.4 \\cdot n_{t_{2g}} + 0.6 \\cdot n_{e_g} \\right) \\Delta_o + m \\cdot P$$
di mana:
- $n_{t_{2g}}$: Jumlah elektron yang menempati orbital $t_{2g}$.
- $n_{e_g}$: Jumlah elektron yang menempati orbital $e_g$.
- $P$: Energi perpasangan elektron (*pairing energy*), yaitu energi Coulombik tolakan dan pertukaran mekanika kuantum yang harus dikorbankan untuk memaksa dua elektron menempati satu orbital yang sama.
- $m$: Jumlah pasangan elektron **tambahan** yang terbentuk pada kompleks dibandingkan dengan ion gas bebas.

---

### 2. Persaingan $\\Delta_o$ vs $P$: Kompleks Spin Tinggi vs Spin Rendah:
Untuk konfigurasi $d^1, d^2, d^3$ (hanya mengisi $t_{2g}$) dan $d^8, d^9, d^{10}$, hanya ada satu cara penataan elektron.
Ambiguitas spin tinggi versus spin rendah **hanya muncul pada ion logam $d^4, d^5, d^6,$ dan $d^7$** dalam medan oktahedral:
1. **Ligan Medan Lemah ($\\Delta_o < P$):**
   Biaya energi untuk melompati celah $\\Delta_o$ lebih murah daripada energi perpasangan $P$. Elektron mematuhi Aturan Hund dengan mengisi orbital $e_g$ sebelum berpasangan di $t_{2g}$. Dihasilkan kompleks **Spin Tinggi (*High-Spin*)** dengan jumlah elektron tak berpasangan maksimum.
2. **Ligan Medan Kuat ($\\Delta_o > P$):**
   Celah energi $\\Delta_o$ sangat lebar sehingga elektron lebih memilih berpasangan di orbital $t_{2g}$ sebelum mengisi orbital $e_g$. Dihasilkan kompleks **Spin Rendah (*Low-Spin*)** dengan jumlah elektron tak berpasangan minimum.

---

### 3. Deret Spektrokimia Ligan (*Spectrochemical Series*):
Ligan diurutkan berdasarkan kemampuannya memperbesar nilai pemisahan $\\Delta_o$:
$$\\ce{I- < Br- < S^2- < SCN- < Cl- < NO3- < F- < OH- < ox^2- < H2O < NCS- < edta^4- < NH3 < en < bpy < phen < NO2- < PPh3 < CN- < CO}$$

**Dasar Orbital Molekul Teori Medan Ligan (LFT):**
- **Ligan $\\pi$-Donor (Medan Lemah):** Ligan halogen ($\\ce{I-, Br-, Cl-, F-}$), $\\ce{OH-}, \\ce{S^2-}$ memiliki orbital $p$ penuh yang mendonorkan densitas elektron ke orbital $t_{2g}$ logam melalui ikatan $\\pi$. Interaksi antibonding ini menaikkan tingkat energi $t_{2g}$, mempersempit celah $\\Delta_o$.
- **Ligan $\\sigma$-Only (Medan Sedang):** Ligan seperti $\\ce{NH3}$ dan $\\ce{en}$ tidak memiliki orbital $\\pi$ yang sesuai, hanya membentuk ikatan $\\sigma$ murni.
- **Ligan $\\pi$-Akseptor (Medan Kuat):** Ligan seperti $\\ce{CO}, \\ce{CN-}, \\ce{NO2-}$ memiliki orbital molekul $\\pi^*$ kosong berenergi rendah yang menerima balik pasangan elektron dari orbital $t_{2g}$ logam (**ikatan balik $\\pi$ / $\\pi$-backbonding**). Interaksi bonding ini menstabilkan orbital $t_{2g}$ secara masif ke energi yang sangat rendah, memperlebar nilai $\\Delta_o$ menjadi sangat raksasa.`,
      keyFormulas: [
        { name: 'Rumus CFSE Oktahedral', formula: '\\text{CFSE} = (-0.4 n_{t_{2g}} + 0.6 n_{e_g})\\Delta_o + mP' },
        { name: 'Kondisi Low-Spin', formula: '\\Delta_o > P \\implies \\text{Low-Spin (Spin Rendah)}' },
      ],
    },
    {
      tag: 'konsep-efek-jahn-teller-distorsi-tetragonal',
      tags: ['efek-jahn-teller', 'distorsi-tetragonal', 'elongasi-z', 'kompleks-cu2-d9', 'orbital-degenerasi'],
      title: 'Konsep Inti 3: Teorema Efek Jahn-Teller: Distorsi Tetragonal & Kinetika Kompleks Tembaga(II) (d9)',
      summary: 'Kajian kestabilan distorsi geometri spontan untuk menghilangkan degenerasi orbital molekul, elongasi aksial z, dan anomalitas struktur tembaga(II).',
      content: `Teorema Jahn-Teller (dirumuskan oleh Hermann Arthur Jahn dan Edward Teller pada tahun 1937) adalah prinsip fundamental dalam menjelaskan anomali struktur dan panjang ikatan senyawa koordinasi logam transisi.

### 1. Pernyataan Teorema Jahn-Teller:
*Setiap molekul atau ion poliatomik non-linier yang berada dalam keadaan dasar elektronik terdegenerasi (memiliki orbital berenergi sama yang terisi elektron secara tidak simetris) bersifat tidak stabil secara termodinamika dan akan mengalami distorsi geometris spontan untuk menurunkan simetri molekulnya serta menghilangkan degenerasi tersebut, sehingga energi sistem menjadi lebih rendah.*

---

### 2. Kriteria Distorsi Kuat vs Lemah:
- **Distorsi Kuat (Dapat Diamati Secara Eksperimental):** Terjadi jika asimetri pengisian elektron berada pada **orbital $e_g$**. Karena orbital $e_g$ ($d_{x^2-y^2}$ dan $d_{z^2}$) mengarah tepat ke ligan, ketidaksamaan tolakan langsung mengubah panjang ikatan secara mencolok:
  - Konfigurasi $d^9$ (misal $\\ce{Cu^2+}$): $t_{2g}^6 e_g^3$ (satu orbital terisi 2 elektron, satu orbital terisi 1 elektron).
  - Konfigurasi $d^4$ spin tinggi (misal $\\ce{Cr^2+}, \\ce{Mn^3+}$): $t_{2g}^3 e_g^1$.
  - Konfigurasi $d^7$ spin rendah (misal $\\ce{Co^2+}, \\ce{Ni^3+}$): $t_{2g}^6 e_g^1$.
- **Distorsi Sangat Lemah (Hampir Tidak Terdeteksi):** Terjadi jika asimetri pengisian berada pada orbital $t_{2g}$ ($d^1, d^2$, low-spin $d^4, d^5$) karena cuping $t_{2g}$ berada di antara sumbu ikatan sehingga pengaruhnya terhadap posisi ligan sangat teredam.

---

### 3. Distorsi Tetragonal Elongasi-$z$ (*Z-Out / Z-Elongation*):
Pada ion tembaga(II) $[\\ce{Cu(H2O)6}]^{2+}$ berkonsentrasi $d^9$:
Jika orbital $d_{z^2}$ terisi oleh $2$ elektron dan orbital $d_{x^2-y^2}$ terisi oleh $1$ elektron:
- Dua elektron pada $d_{z^2}$ memberikan tolakan elektrostatik yang lebih besar kepada kedua ligan yang berada di sepanjang sumbu $z$.
- Kedua ligan aksial bergerak menjauh (panjang ikatan memanjang, **elongasi-$z$**), menurunkan simetri dari oktahedral ($O_h$) menjadi tetragonal ($D_{4h}$).
- Akibat elongasi sumbu $z$, seluruh orbital dengan komponen $z$ terstabilkan ke energi lebih rendah: orbital $e_g$ terbelah menjadi $d_{x^2-y^2}$ (naik) dan $d_{z^2}$ (turun sebesar $\\delta_1$).
- Karena orbital $d_{z^2}$ terisi penuh oleh 2 elektron yang turun energinya sementara $d_{x^2-y^2}$ hanya terisi 1 elektron yang naik, diperoleh **penurunan energi bersih (stabilisasi Jahn-Teller)** sebesar $\\frac{1}{2}\\delta_1$.

*Bukti Kristalografi Sinar-X:*
Pada garam tembaga $[\\ce{Cu(H2O)6}]\\ce{SO4}$, ditemukan $4$ ikatan ekuatorial $\\ce{Cu-O}$ berjarak pendek ($1.96\\text{ \\AA}$) dan $2$ ikatan aksial $\\ce{Cu-O}$ berjarak sangat panjang ($2.38\\text{ \\AA}$), membuktikan distorsi tetragonal Jahn-Teller secara nyata.`,
      keyFormulas: [
        { name: 'Konfigurasi Jahn-Teller Kuat', formula: 'd^9 \\ (t_{2g}^6 e_g^3), \\quad d^4 \\text{ high-spin } (t_{2g}^3 e_g^1), \\quad d^7 \\text{ low-spin } (t_{2g}^6 e_g^1)' },
      ],
    },
    {
      tag: 'konsep-kemagnetan-warna-spektra-elektronik',
      tags: ['momen-magnetik-spin-only', 'paramagnetik-diamagnetik', 'spektra-elektronik-d-d', 'warna-senyawa-kompleks', 'aturan-laporte'],
      title: 'Konsep Inti 4: Sifat Kemagnetan (Momen Magnetik Spin-Only) & Asal Usul Warna Kompleks (Transisi d-d & CT)',
      summary: 'Formula momen magnetik spin-only mu_eff, spektroskopi absorpsi transisi d-d, aturan seleksi Laporte dan spin, serta transfer muatan (LMCT/MLCT).',
      content: `Dua sifat fisik paling spektakuler dari senyawa koordinasi logam transisi adalah warna larutannya yang tajam dan respons kemagnetannya terhadap medan magnet luar.

### 1. Momen Magnetik Spin Murni (*Spin-Only Magnetic Moment* $\\mu_{\\text{eff}}$):
Kation logam dengan elektron tak berpasangan bersifat **paramagnetik** (tertarik ke dalam medan magnet). Berdasarkan mekanika kuantum, jika kontribusi momentum sudut orbital teredam (*quenched*) oleh medan kristal, momen magnetik efektif dihitung via persamaan spin-only:
$$\\mu_{\\text{eff}} = \\sqrt{n(n + 2)} \\ \\mu_B$$
di mana:
- $n$: Jumlah elektron tak berpasangan pada orbital $d$.
- $\\mu_B$: Magneton Bohr ($9.274 \\times 10^{-24}\\text{ J/T}$).

| Jumlah Elektron Tak Berpasangan ($n$) | Nilai Teoretis $\\mu_{\\text{eff}} \\ (\\mu_B)$ | Contoh Spesi Senyawa Kompleks |
| :---: | :---: | :---: |
| $0$ | $0.00$ (Diamagnetik) | $[\\ce{Fe(CN)6}]^{4-}, [\\ce{Co(NH3)6}]^{3+}, [\\ce{Ni(CN)4}]^{2-}$ |
| $1$ | $\\sqrt{3} \\approx 1.73$ | $[\\ce{Ti(H2O)6}]^{3+} (d^1), [\\ce{Cu(H2O)6}]^{2+} (d^9)$ |
| $2$ | $\\sqrt{8} \\approx 2.83$ | $[\\ce{Ni(H2O)6}]^{2+} (d^8), [\\ce{V(H2O)6}]^{3+} (d^2)$ |
| $3$ | $\\sqrt{15} \\approx 3.87$ | $[\\ce{Cr(H2O)6}]^{3+} (d^3), [\\ce{Co(H2O)6}]^{2+} (d^7)$ |
| $4$ | $\\sqrt{24} \\approx 4.90$ | $[\\ce{Fe(H2O)6}]^{2+} (d^6 \\text{ HS}), [\\ce{Cr(H2O)6}]^{2+} (d^4 \\text{ HS})$ |
| $5$ | $\\sqrt{35} \\approx 5.92$ | $[\\ce{Mn(H2O)6}]^{2+} (d^5 \\text{ HS}), [\\ce{Fe(H2O)6}]^{3+} (d^5 \\text{ HS})$ |

---

### 2. Asal Usul Warna: Eksitasi Transisi Elektronik $d-d$:
Warna senyawa kompleks timbul karena absorbsi selektif foton cahaya tampak yang energinya persis sama dengan celah pemisahan medan kristal ($\\Delta_o$):
$$\\Delta_o = h \\nu = \\frac{h c}{\\lambda_{\\text{serap}}}$$
Senyawa akan memancarkan/mentransmisikan **warna komplementer** dari panjang gelombang cahaya yang diserapnya:
- Menyerap warna Merah ($~700\\text{ nm}$) $\\implies$ tampak berwarna Hijau-Kebiruan.
- Menyerap warna Hijau-Kuning ($~500\\text{ nm}$) $\\implies$ tampak berwarna Merah-Ungu / Violet (contoh: $[\\ce{Ti(H2O)6}]^{3+}$).

---

### 3. Aturan Seleksi Spektroskopi & Intensitas Warna:
1. **Aturan Seleksi Laporte:** Pada molekul centrosimetrik (memiliki pusat inversi $i$, seperti kompleks oktahedral), transisi antara orbital berparitas sama terlarang secara simetri ($g \\to g$ terlarang). Karena orbital $d$ berparitas *gerade* ($g$), transisi $d \\to d$ sebenarnya terlarang oleh Laporte. Namun karena getaran molekul merusak simetri sesaat (*vibronic coupling*), transisi $d-d$ tetap terjadi dengan intensitas serapan sedang (koefisien ekstingsi molar $\\varepsilon \\approx 1 - 100\\text{ M}^{-1}\\text{cm}^{-1}$).
2. **Aturan Seleksi Spin:** Transisi elektronik yang melibatkan perubahan spin total elektron terlarang ($\\Delta S = 0$). Contoh: ion $\\ce{Mn^2+}$ ($d^5$ spin tinggi) seluruh orbital $d$ terisi 1 elektron paralel. Eksitasi apa pun mengharuskan pembalikan spin ($\\Delta S \\neq 0$), sehingga transisi sangat terlarang dan larutan $\\ce{Mn^2+}$ berwarna merah muda pucat hampir tak terlihat ($\\varepsilon < 1\\text{ M}^{-1}\\text{cm}^{-1}$).

---

### 4. Pita Transfer Muatan (*Charge Transfer* / CT Bands):
Jika senyawa memiliki warna yang sangat pekat dan menyala luar biasa (seperti larutan ungu tua permanganat $\\ce{MnO4-}$ atau jingga pekat dikromat $\\ce{Cr2O7^2-}$), warna tersebut **BUKAN transisi $d-d$** (karena $\\ce{Mn(VII)}$ dan $\\ce{Cr(VI)}$ adalah ion $d^0$ tanpa elektron $d$!).
Warna intensitas tinggi tersebut dihasilkan oleh **Transfer Muatan Ligan-ke-Logam (*Ligand-to-Metal Charge Transfer* / LMCT)**, di mana elektron berpindah dari orbital molekul ligan berkarakter oksigen ke orbital kosong logam. Transisi ini diizinkan penuh oleh Laporte dan Spin, menghasilkan intensitas raksasa ($\\varepsilon > 10,000\\text{ M}^{-1}\\text{cm}^{-1}$).`,
      keyFormulas: [
        { name: 'Momen Magnetik Spin Murni', formula: '\\mu_{\\text{eff}} = \\sqrt{n(n+2)}\\ \\mu_B' },
        { name: 'Energi Absorbsi d-d', formula: '\\Delta_o = \\frac{hc}{\\lambda_{\\text{serap}}}' },
      ],
    },
    {
      tag: 'konsep-isomerisme-kinetika-efek-trans',
      tags: ['isomer-geometri', 'isomer-optis', 'cis-trans-fac-mer', 'kinetika-substitusi-ligan', 'efek-trans'],
      title: 'Konsep Inti 5: Isomerisme Struktural & Stereoisomerisme Kompleks, Kinetika Substitusi, & Efek Trans',
      summary: 'Analisis geometri cis-trans, fac-mer, kiralitas optis enantiomer khelat, serta kontrol kinetika efek trans pada sintesis platina bujur sangkar.',
      content: `Isomerisme pada senyawa koordinasi terbagi menjadi dua ranah utama: isomerisme struktural (perbedaan susunan ikatan) dan stereoisomerisme (perbedaan orientasi spasial dalam ruang).

### 1. Klasifikasi Stereoisomerisme:
1. **Isomerisme Geometris (*Cis-Trans* & *Fac-Mer*):**
   - **Kompleks Bujur Sangkar $[\\ce{MA2B2}]$:**
     - *cis*: Kedua ligan $\\ce{A}$ bersebelahan (sudut ikatan $\\angle \\ce{A-M-A} = 90^\\circ$). Contoh: *Cisplatin* (*cis*-$[\\ce{Pt(NH3)2Cl2}]$), obat kemoterapi kanker aktif dengan momen dipol permanen $\\mu > 0$.
     - *trans*: Kedua ligan $\\ce{A}$ berseberangan (sudut ikatan $\\angle \\ce{A-M-A} = 180^\\circ$). Contoh: *Transplatin*, tidak memiliki aktivitas antikanker, non-polar ($\\mu = 0$).
   - **Kompleks Oktahedral $[\\ce{MA4B2}]$:** Memiliki isomer *cis* ($90^\\circ$) dan *trans* ($180^\\circ$).
   - **Kompleks Oktahedral $[\\ce{MA3B3}]$:**
     - *Facial* (*fac*): Tiga ligan identik menempati tiga sudut dari satu muka bidang segitiga oktahedron yang sama (seluruh sudut $\\angle \\ce{A-M-A} = 90^\\circ$).
     - *Meridional* (*mer*): Tiga ligan identik terletak pada satu bidang meridian yang membelah pusat logam oktahedron (dua sudut $90^\\circ$ dan satu sudut $180^\\circ$).
2. **Isomerisme Optis (Kiralitas & Enantiomer):**
   Kompleks bersifat kiral dan memutar bidang polarisasi cahaya jika tidak memiliki bidang simetri internal ($\\sigma$) maupun pusat inversi ($i$).
   - Kompleks tris-khelat $[\\ce{M(AA)3}]^{n+}$ (seperti $[\\ce{Co(en)3}]^{3+}$): Memiliki geometri menyerupai baling-baling kiral dengan sepasang enantiomer yang tidak dapat diimpitkan, diberi label **$\\Delta$ (delta, putar kanan)** dan **$\\Lambda$ (lambda, putar kiri)**.
   - Kompleks $[\\ce{M(AA)2B2}]$: Isomer *cis* bersifat **kiral** (tidak memiliki bidang simetri), sedangkan isomer *trans* bersifat **akiral** karena memiliki bidang simetri dan pusat inversi.

---

### 2. Kinetika Substitusi Ligan & Efek Trans (*The Trans Effect*):
Pada kompleks bujur sangkar Platina(II), laju substitusi ligan yang berada pada posisi *trans* terhadap ligan pengarah ($T$) dipengaruhi secara dramatis oleh identitas ligan $T$ tersebut:
$$\\text{Deret Kekuatan Pengarah Trans:}$$
$$\\ce{H2O < OH- < NH3 < py < Cl- < Br- < I- < CH3- < H- < NO2- < PPh3 < C2H4 \\approx CN- \\approx CO}$$
- **Asal Usul Efek Trans:** Kombinasi pengaruh termodinamika keadaan dasar (*trans-influence*, pelemahan ikatan trans via polarisasi $\\sigma$) dan stabilisasi keadaan transisi bipiramida trigonal melalui ikatan balik $\\pi$ ligan kuat.

**Aplikasi Sintesis Stereoselektif Cisplatin vs Transplatin:**
1. **Sintesis Cisplatin (*cis*-$[\\ce{Pt(NH3)2Cl2}]$):**
   Mulai dari $[\\ce{PtCl4}]^{2-}$. Reaksikan dengan $\\ce{NH3}$ tahap 1 menghasilkan $[\\ce{PtCl3(NH3)}]-$.
   Pada tahap 2, substitusi molekul $\\ce{NH3}$ kedua diarahkan oleh ligan $\\ce{Cl-}$ (karena kekuatan trans $\\ce{Cl- > NH3}$). Ligan klorida mengarahkan $\\ce{NH3}$ baru masuk pada posisi *trans* terhadap klorida lain (yang berarti berada pada posisi *cis* terhadap $\\ce{NH3}$ pertama). Terbentuk produk murni **Cisplatin**.
2. **Sintesis Transplatin (*trans*-$[\\ce{Pt(NH3)2Cl2}]$):**
   Mulai dari $[\\ce{Pt(NH3)4}]^{2+}$. Reaksikan dengan ion $\\ce{Cl-}$ tahap 1 menghasilkan $[\\ce{Pt(NH3)3Cl}]+$.
   Pada tahap 2, ion $\\ce{Cl-}$ yang telah terikat memiliki kekuatan trans jauh melampaui $\\ce{NH3}$ ($\\ce{Cl- > NH3}$). Oleh karena itu, klorida kedua diarahkan masuk tepat pada posisi *trans* terhadap klorida pertama, menghasilkan produk eksklusif **Transplatin**.`,
      keyFormulas: [
        { name: 'Kekuatan Efek Trans', formula: '\\ce{CO \\approx CN- \\approx C2H4 > PPh3 > NO2- > I- > Br- > Cl- > NH3 > H2O}' },
      ],
    },
    {
      tag: 'kluster-boran-wade-mingos-organologam',
      tags: [
        'kluster-boran-wade-mingos-organologam',
        'aturan-wade',
        'psept',
        'boran',
        'closo-nido-arachno',
        'parameter-racah',
        'efek-nefelauxetik',
        'katalisis-wilkinson',
        'organologam',
      ],
      title: 'Konsep Inti 6: Aturan Wade-Mingos (PSEPT) Kluster Boran, Efek Nefelauxetik Racah & Katalisis Organologam',
      summary:
        'Kajian kuantitatif struktur kluster polihedral: Aturan Wade-Mingos (PSEPT) menghitung pasangan elektron kerangka (SEP) closo, nido, arachno, dan hypho, derajat kovalensi ikatan via deret nefelauxetik parameter Racah (B), serta mekanisme tahapan siklus katalisis organologam homogen.',
      content: `### 1. Aturan Wade-Mingos (Polyhedral Skeletal Electron Pair Theory / PSEPT):
Molekul kluster borana dan heteroborana tidak dapat dijelaskan oleh ikatan 2-pusat 2-elektron konvensional karena kekurangan elektron (*electron-deficient*). Struktur geometrinya diatur oleh jumlah **Pasangan Elektron Kerangka (*Skeletal Electron Pairs*, SEP)**.

**Metode Menghitung Elektron Kerangka (Skeletal Electrons):**
Setiap unit verteks menyumbangkan elektron kerangka sebagai berikut:
- Setiap unit $\\ce{B-H}$ menyumbang **2 elektron kerangka** (karena atom B memiliki 3 elektron valensi, 1 dipakai untuk ikatan terminal $\\ce{B-H}$, menyisakan 2 untuk kerangka kluster).
- Setiap atom Hidrogen jembatan ($\\ce{H_{bridge}}$) menyumbang **1 elektron kerangka**.
- Setiap muatan negatif net menyumbang **1 elektron kerangka per muatan**.
- Unit isoelektronik $\\ce{C-H}$ (pada karborana) menyumbang **3 elektron kerangka**.

**Klasifikasi Polihedron Kluster Berdasarkan Jumlah Verteks ($n$):**
1. **Kluster Closo ($n + 1$ pasang elektron kerangka / $2n + 2$ elektron):**
   Membentuk sangkar polihedron tertutup berwajah segitiga (*deltahedron*) lengkap dengan $n$ verteks. Rumus umum: $\\ce{[B_n H_n]^2-}$ atau karborana netral $\\ce{C2B_{n-2}H_n}$. Contoh: $\\ce{[B6H6]^2-}$ (oktahedron, $\\text{SEP} = 7$), $\\ce{C2B10H12}$ (ikosahedron, $\\text{SEP} = 13$).
2. **Kluster Nido ($n + 2$ pasang elektron kerangka / $2n + 4$ elektron):**
   Geometri sangkar terbuka sarang burung (*nest-like*), diturunkan dari polihedron closo dengan $(n+1)$ verteks yang kehilangan **1 verteks**. Rumus umum: $\\ce{B_n H_{n+4}}$. Contoh: pentaborana(9) $\\ce{B5H9}$ ($n=5, \\text{SEP} = 7 \\implies$ oktahedron minus 1 puncak = piramida tetragonal).
3. **Kluster Arachno ($n + 3$ pasang elektron kerangka / $2n + 6$ elektron):**
   Geometri sangkar jaring laba-laba (*spider-web-like*), diturunkan dari polihedron closo dengan $(n+2)$ verteks yang kehilangan **2 verteks**. Rumus umum: $\\ce{B_n H_{n+6}}$. Contoh: tetraborana(10) $\\ce{B4H10}$ ($n=4, \\text{SEP} = 7 \\implies$ oktahedron minus 2 verteks).
4. **Kluster Hypho ($n + 4$ pasang elektron kerangka / $2n + 8$ elektron):**
   Kluster jaring sangat terbuka, kehilangan **3 verteks** dari deltahedron induknya. Rumus umum: $\\ce{B_n H_{n+8}}$.

---

### 2. Parameter Racah ($B$) & Efek Nefelauxetik:
Spektra elektronik senyawa kompleks logam transisi dipengaruhi oleh repulsi antar-elektron dalam subkulit $d$. Repulsi elektrostatik ini dirumuskan oleh Giulio Racah melalui tiga parameter $A, B, C$.
- **Parameter Racah $B$:** Mengukur besarnya repulsi antar-elektron dalam orbital $d$.
- Dalam ion logam bebas berfase gas, parameter ini bernilai $B_0$.
- Ketika ion logam dikoordinasikan oleh ligan membentuk kompleks, awan elektron $d$ terdelokalisasi ke arah ligan (tumpang tindih orbital ikatan kovalen), menyebabkan ekspansi awan elektron logam. Fenomena ini disebut **Efek Nefelauxetik (*cloud-expanding effect*)**.
- **Rasio Nefelauxetik ($\\beta$):**
  $$\\beta = \\frac{B_{\\text{kompleks}}}{B_0} < 1$$
Nilai $\\beta$ yang semakin kecil mencerminkan derajat kovalensi ikatan koordinasi yang semakin tinggi dan delokalisasi muatan yang semakin kuat.
- **Deret Nefelauxetik Ligan:**
  $$\\ce{F- > H2O > NH3 > en > NCS- > Cl- > CN- > Br- > I-}$$
(Ligan iodida dan bromida sangat polarisabel dan menghasilkan kovalensi ikatan paling tinggi dengan nilai $\\beta$ terendah).

---

### 3. Tahapan Fundamental Siklus Katalisis Organologam:
Katalis organologam homogen logam transisi (seperti Katalis Wilkinson $\\ce{[RhCl(PPh3)3]}$ untuk hidrogenasi alkena) beroperasi melalui urutan siklus 4 reaksi elementer:
1. **Adisi Oksidatif (*Oxidative Addition*):**
   Molekul substrat non-polar $\\ce{X-Y}$ (misal $\\ce{H2}$) berikatan ke pusat logam koordinatif tak-jenuh, disertai kenaikan bilangan oksidasi logam sebesar $+2$, penambahan bilangan koordinasi sebesar $+2$, dan penambahan elektron valensi sebesar $+2e^-$.
   $$\\ce{L_n M^{m} + X-Y -> L_n M^{m+2}(X)(Y)}$$
2. **Insersi Migrasi (*Migratory Insertion*):**
   Ligan tak jenuh terkoordinasi (seperti alkena $\\ce{C2H4}$ atau karbon monoksida $\\ce{CO}$) bermigrasi dan menyusup ke dalam ikatan logam-alkil atau logam-hidrida tetangganya. Bilangan oksidasi logam tidak berubah, tetapi situs koordinasi kosong terbentuk kembali.
3. **Eliminasi $\\beta$-Hidrida (*$\\beta$-Hydride Elimination*):**
   Atom hidrogen pada posisi karbon-$\\beta$ dari ligan alkil ditransfer ke pusat logam, menghasilkan ligan hidrida baru dan melepaskan alkena terkoordinasi. Merupakan kebalikan dari insersi alkena ke ikatan $\\ce{M-H}$.
4. **Eliminasi Reduktif (*Reductive Elimination*):**
   Dua ligan cis (misal alkil dan hidrida membentuk alkana $\\ce{R-H}$) saling bergabung membentuk ikatan tunggal kovalen dan lepas dari pusat logam. Bilangan oksidasi logam turun $-2$, bilangan koordinasi turun $-2$, dan elektron valensi turun $-2e^-$, meregenerasi spesies katalis aktif awal untuk siklus berikutnya.`,
      keyFormulas: [
        { name: 'Pasangan Elektron Kerangka (SEP) Closo', formula: '\\text{SEP} = n + 1 \\implies [\\ce{B_n H_n}]^{2-}' },
        { name: 'Pasangan Elektron Kerangka (SEP) Nido', formula: '\\text{SEP} = n + 2 \\implies \\ce{B_n H_{n+4}}' },
        { name: 'Pasangan Elektron Kerangka (SEP) Arachno', formula: '\\text{SEP} = n + 3 \\implies \\ce{B_n H_{n+6}}' },
        { name: 'Parameter Efek Nefelauxetik', formula: '\\beta = \\frac{B_{\\text{kompleks}}}{B_{\\text{ion bebas}}} < 1' },
      ],
    },
  ],
  worked_examples: [
    {
      tag: 'soal-cft-fe-d6-spin-tinggi-rendah',
      tags: ['soal-osk', 'soal-cft-d6', 'cfse-stabilisasi', 'spin-tinggi-rendah', 'deret-spektrokimia'],
      title: 'Contoh Soal OSK 1: Analisis Medan Kristal d6 Kompleks Besi(II): CFSE, Momen Magnetik, & Deret Spektrokimia',
      summary: 'Kalkulasi energi penstabilan medan kristal CFSE, konfigurasi t2g-eg, momen magnetik spin murni, dan komparasi sifat magnetik kompleks d6.',
      content: `### Soal:
Ion besi(II) ($\\ce{Fe^2+}$, nomor atom $Z = 26$) memiliki konfigurasi elektron kulit valensi $3d^6$. Diketahui data spektroskopis:
- Energi perpasangan elektron rata-rata untuk $\\ce{Fe^2+}$: $P = 17,600\\text{ cm}^{-1}$.
- Parameter pemisahan medan oktahedral untuk $[\\ce{Fe(H2O)6}]^{2+}$: $\\Delta_o = 10,400\\text{ cm}^{-1}$.
- Parameter pemisahan medan oktahedral untuk $[\\ce{Fe(CN)6}]^{4-}$: $\\Delta_o = 32,800\\text{ cm}^{-1}$.
*(Konversi energi: $1\\text{ cm}^{-1} = 0.01196\\text{ kJ/mol}$).*

**Pertanyaan:**
1. Tentukan apakah $[\\ce{Fe(H2O)6}]^{2+}$ dan $[\\ce{Fe(CN)6}]^{4-}$ membentuk kompleks spin tinggi (*high-spin*) atau spin rendah (*low-spin*) dengan membandingkan nilai $\\Delta_o$ terhadap $P$!
2. Gambarkan diagram pengisian elektron pada orbital $t_{2g}$ dan $e_g$ serta tentukan jumlah elektron tak berpasangan ($n$) untuk masing-masing kompleks!
3. Hitung momen magnetik spin murni ($\\mu_{\\text{eff}}$) dalam satuan Magneton Bohr ($\\mu_B$) dan nyatakan sifat kemagnetannya (paramagnetik atau diamagnetik)!
4. Hitung nilai Energi Penstabilan Medan Kristal (CFSE) untuk kedua ion kompleks dalam satuan $\\text{cm}^{-1}$ dan $\\text{kJ/mol}$, dengan memperhitungkan kontribusi energi perpasangan elektron ($P$)!

---

### Rincian Langkah Penyelesaian:

**Langkah 1: [Evaluasi Spin Tinggi vs Spin Rendah]**
- Untuk $[\\ce{Fe(H2O)6}]^{2+}$:
  $$\\Delta_o = 10,400\\text{ cm}^{-1} < P = 17,600\\text{ cm}^{-1}$$
  Karena $\\Delta_o < P$, biaya eksitasi ke orbital $e_g$ lebih murah daripada energi tolak perpasangan elektron. Kompleks mengadopsi konfigurasi **Spin Tinggi (*High-Spin*)**.
- Untuk $[\\ce{Fe(CN)6}]^{4-}$:
  $$\\Delta_o = 32,800\\text{ cm}^{-1} > P = 17,600\\text{ cm}^{-1}$$
  Karena $\\Delta_o > P$, celah energi sangat lebar sehingga elektron dipaksa berpasangan di orbital bawah $t_{2g}$. Kompleks mengadopsi konfigurasi **Spin Rendah (*Low-Spin*)**.

**Langkah 2: [Konfigurasi Elektron & Jumlah Elektron Tak Berpasangan]**
- **$[\\ce{Fe(H2O)6}]^{2+}$ (Spin Tinggi):**
  Elektron mengisi orbital sesuai Aturan Hund: $t_{2g}^4 e_g^2$.
  Jumlah elektron tak berpasangan: $n = 4$.
- **$[\\ce{Fe(CN)6}]^{4-}$ (Spin Rendah):**
  Seluruh 6 elektron berpasangan di orbital berenergi rendah: $t_{2g}^6 e_g^0$.
  Jumlah elektron tak berpasangan: $n = 0$.

**Langkah 3: [Menghitung Momen Magnetik Spin Murni]**
Formula: $\\mu_{\\text{eff}} = \\sqrt{n(n + 2)} \\ \\mu_B$.
- Untuk $[\\ce{Fe(H2O)6}]^{2+}$ ($n = 4$):
  $$\\mu_{\\text{eff}} = \\sqrt{4(4 + 2)} = \\sqrt{24} = 4.899 \\ \\mu_B \\approx 4.90 \\ \\mu_B$$
  Bersifat **paramagnetik kuat**.
- Untuk $[\\ce{Fe(CN)6}]^{4-}$ ($n = 0$):
  $$\\mu_{\\text{eff}} = \\sqrt{0(0 + 2)} = 0.00 \\ \\mu_B$$
  Bersifat **diamagnetik**.

**Langkah 4: [Menghitung CFSE Kompleks]**
Formula umum: $\\text{CFSE} = (-0.4 n_{t_{2g}} + 0.6 n_{e_g})\\Delta_o + mP$.
Pada ion gas bebas $\\ce{Fe^2+}$ ($d^6$), penataan bebas memiliki 1 pasangan elektron ($m_0 = 1$).

1. **CFSE $[\\ce{Fe(H2O)6}]^{2+}$ ($t_{2g}^4 e_g^2$):**
   Jumlah pasangan elektron pada kompleks adalah 1 pasangan (pada salah satu orbital $t_{2g}$), sehingga pasangan ekstra $m = 1 - 1 = 0$:
   $$\\text{CFSE} = [4(-0.4) + 2(+0.6)] \\Delta_o + 0 \\cdot P = (-1.6 + 1.2)\\Delta_o = -0.4 \\Delta_o$$
   $$\\text{CFSE} = -0.4 \\times (10,400\\text{ cm}^{-1}) = -4,160\\text{ cm}^{-1}$$
   Dalam $\\text{kJ/mol}$:
   $$\\text{CFSE} = -4,160\\text{ cm}^{-1} \\times 0.01196\\text{ kJ/mol per cm}^{-1} = -49.75\\text{ kJ/mol}$$

2. **CFSE $[\\ce{Fe(CN)6}]^{4-}$ ($t_{2g}^6 e_g^0$):**
   Jumlah pasangan elektron pada kompleks adalah 3 pasangan (seluruh orbital $t_{2g}$ berpasangan), sehingga pasangan ekstra $m = 3 - 1 = 2$:
   $$\\text{CFSE} = [6(-0.4) + 0]\\Delta_o + 2P = -2.4 \\Delta_o + 2P$$
   $$\\text{CFSE} = -2.4(32,800\\text{ cm}^{-1}) + 2(17,600\\text{ cm}^{-1}) = -78,720 + 35,200 = -43,520\\text{ cm}^{-1}$$
   Dalam $\\text{kJ/mol}$:
   $$\\text{CFSE} = -43,520\\text{ cm}^{-1} \\times 0.01196\\text{ kJ/mol per cm}^{-1} = -520.50\\text{ kJ/mol}$$

**Kesimpulan Evaluator Juri:**  
$[\\ce{Fe(H2O)6}]^{2+}$ adalah kompleks spin tinggi dengan konfigurasi $t_{2g}^4 e_g^2$, memiliki $4$ elektron tak berpasangan ($\\mu_{\\text{eff}} = 4.90\\ \\mu_B$, paramagnetik) dan $\\text{CFSE} = -49.75\\text{ kJ/mol}$. Sebaliknya, $[\\ce{Fe(CN)6}]^{4-}$ adalah kompleks spin rendah dengan konfigurasi $t_{2g}^6 e_g^0$, bersifat diamagnetik sempurna ($\\mu_{\\text{eff}} = 0$) dan memiliki kestabilan CFSE raksasa sebesar $-520.50\\text{ kJ/mol}$.`,
    },
    {
      tag: 'soal-isomerisme-kompleks-kobalt-kiralitas',
      tags: ['soal-osk', 'soal-isomer-kompleks', 'isomer-geometri', 'isomer-optis', 'cis-trans'],
      title: 'Contoh Soal OSK 2: Stereoisomerisme Senyawa Kompleks Oktahedral [Co(en)2Cl2]+ & Uji Kiralitas Optis',
      summary: 'Analisis geometri cis-trans kompleks kobalt(III), identifikasi elemen simetri bidang dan pusat inversi, serta pemisahan bayangan cermin enantiomer.',
      content: `### Soal:
Senyawa koordinasi diklorobis(etilendiamin)kobalt(III) klorida memiliki rumus kimia:
$$\\ce{[Co(en)2Cl2]Cl}$$
di mana etilendiamin ($\\ce{en} = \\ce{NH2-CH2-CH2-NH2}$) bertindak sebagai ligan bidentat kelat netral.

**Pertanyaan:**
1. Tuliskan nama resmi IUPAC lengkap untuk senyawa koordinasi tersebut!
2. Tentukan seluruh kemungkinan stereoisomer geometris (*cis-trans*) dari kation kompleks $[\\ce{Co(en)2Cl2}]^+$, dan gambarkan representasi geometri spasial tiga dimensinya!
3. Ujilah keberadaan elemen simetri (bidang simetri $\\sigma$ dan pusat inversi $i$) pada masing-masing isomer geometris tersebut!
4. Berdasarkan analisis simetri, tentukan isomer manakah yang bersifat kiral (aktif optis) serta gambarkan sepasang enantiomernya (bentuk $\\Delta$ dan $\\Lambda$)!

---

### Rincian Langkah Penyelesaian:

**Langkah 1: [Menentukan Nama IUPAC Resmi]**
- Kation kompleks: $[\\ce{Co(en)2Cl2}]^+$, Anion lawan: $\\ce{Cl-}$.
- Ligan: $2$ kloro (anionik) $+ 2$ etilendiamin (netral kelat).
- Urutan alfabet: kloro (K) mendahului bis(etilendiamin) (B).
- Bilangan oksidasi $\\ce{Co}$: $x + 2(0) + 2(-1) = +1 \\implies x = +3$.
- Nama IUPAC Resmi: **Diklorobis(etilendiamin)kobalt(III) klorida**.

**Langkah 2: [Isomer Geometris Cis dan Trans]**
1. **Isomer *trans*-$[\\ce{Co(en)2Cl2}]^+$:**
   Kedua ligan kloro ($\\ce{Cl-}$) berada pada posisi aksial berseberangan dengan sudut ikatan $\\angle \\ce{Cl-Co-Cl} = 180^\\circ$. Dua ligan etilendiamin mengelilingi posisi ekuatorial pada satu bidang datar. Isomer ini berwarna hijau terang.
2. **Isomer *cis*-$[\\ce{Co(en)2Cl2}]^+$:**
   Kedua ligan kloro berada bersebelahan dengan sudut ikatan $\\angle \\ce{Cl-Co-Cl} = 90^\\circ$. Ligan etilendiamin menempati posisi yang tersisa. Isomer ini berwarna ungu kemerahan (*violet*).

**Langkah 3: [Uji Elemen Simetri Kiralitas]**
- **Pada Isomer *trans*:**
  - Memiliki **pusat inversi ($i$)** tepat pada atom kobalt pusat (setiap titik $(\\vec{r})$ memiliki pasangan identik pada $(-\\vec{r})$).
  - Memiliki **bidang simetri cermin ($\sigma_h$)** pada bidang ekuatorial cincin etilendiamin.
  - *Kesimpulan:* Karena memiliki elemen simetri inversi dan cermin, isomer *trans* bersifat **akiral (optis tidak aktif)** dan identik dengan bayangan cerminnya.
- **Pada Isomer *cis*:**
  - Tidak memiliki pusat inversi ($i$).
  - Tidak memiliki bidang simetri cermin ($\sigma$).
  - *Kesimpulan:* Isomer *cis* bersifat **kiral (aktif optis)** dan eksis sebagai sepasang enantiomer non-superimposabel.

**Langkah 4: [Pasangan Enantiomer Isomer Cis]**
Isomer *cis* memiliki sepasang bayangan cermin enantiomer:
- Bentuk Balap-Kanan / Putar Kanan ($\\Delta$-*cis*-$[\\ce{Co(en)2Cl2}]^+$).
- Bentuk Balap-Kiri / Putar Kiri ($\\Lambda$-*cis*-$[\\ce{Co(en)2Cl2}]^+$).
Keduanya memutar bidang cahaya terpolarisasi dengan sudut yang sama persis namun berlawanan arah ($+ / -$).

**Kesimpulan Evaluator Juri:**  
Senyawa memiliki dua isomer geometris: *trans* (akiral, hijau, memiliki pusat simetri $i$) dan *cis* (ungu). Isomer *cis* tidak memiliki bidang simetri maupun pusat inversi sehingga terbukti kiral dan eksis sebagai sepasang enantiomer optis aktif ($\\Delta$ dan $\\Lambda$). Total stereoisomer yang ada adalah 3 spesi (1 *trans* + 2 enantiomer *cis*).`,
    },
    {
      tag: 'soal-efek-jahn-teller-distorsi-tembaga',
      tags: ['soal-osp', 'soal-jahn-teller', 'efek-jahn-teller', 'distorsi-tetragonal', 'kompleks-cu2-d9'],
      title: 'Contoh Soal OSP 3: Teorema Jahn-Teller & Distorsi Tetragonal Kompleks [Cu(H2O)6]2+ vs [Ni(H2O)6]2+',
      summary: 'Eksplanasi kristalografi elongasi ikatan aksial z pada tembaga(II), penurunan simetri Oh ke D4h, dan kalkulasi energi stabilisasi.',
      content: `### Soal:
Data difraksi sinar-X kristal tunggal menunjukkan bahwa ion heksaakuanikel(II) ($[\\ce{Ni(H2O)6}]^{2+}$) memiliki enam ikatan $\\ce{Ni-O}$ yang identik sempurna dengan panjang ikatan $2.05\\text{ \\AA}$ (simetri oktahedral reguler $O_h$).
Sebaliknya, ion heksaakuatembaga(II) ($[\\ce{Cu(H2O)6}]^{2+}$) menunjukkan distorsi geometris mencolok dengan empat ikatan ekuatorial $\\ce{Cu-O}$ berjarak $1.96\\text{ \\AA}$ dan dua ikatan aksial $\\ce{Cu-O}$ yang jauh lebih panjang yaitu $2.38\\text{ \\AA}$.

**Pertanyaan:**
1. Tuliskan konfigurasi elektron ion bebas dan konfigurasi orbital medan oktahedral untuk $\\ce{Ni^2+}$ ($Z = 28$) dan $\\ce{Cu^2+}$ ($Z = 29$)!
2. Berdasarkan Teorema Jahn-Teller, jelaskan secara mendasar mengapa $[\\ce{Cu(H2O)6}]^{2+}$ mengalami distorsi tetragonal kuat sementara $[\\ce{Ni(H2O)6}]^{2+}$ mempertahankan simetri oktahedral murni!
3. Gambarkan diagram pemecahan tingkat energi orbital $d$ akibat distorsi elongasi-$z$ dari simetri $O_h$ menjadi $D_{4h}$!
4. Buktikan secara matematis bahwa elongasi-$z$ pada $\\ce{Cu^2+}$ ($d^9$) menghasilkan penurunan energi bersih sistem (energi stabilisasi Jahn-Teller $\\Delta E_{\\text{JT}}$) sebesar $\\frac{1}{2}\\delta_1$!

---

### Rincian Langkah Penyelesaian:

**Langkah 1: [Konfigurasi Elektron Ion Pusat]**
- **Ion Nikel(II) ($\\ce{Ni^2+}$):**
  Konfigurasi ion bebas: $[\\ce{Ar}] 3d^8$.
  Konfigurasi medan oktahedral: $t_{2g}^6 e_g^2$.
  Orbital $t_{2g}$ terisi penuh simetris ($d_{xy}^2 d_{yz}^2 d_{xz}^2$), dan orbital $e_g$ terisi setengah penuh secara simetris ($d_{z^2}^1 d_{x^2-y^2}^1$).
- **Ion Tembaga(II) ($\\ce{Cu^2+}$):**
  Konfigurasi ion bebas: $[\\ce{Ar}] 3d^9$.
  Konfigurasi medan oktahedral: $t_{2g}^6 e_g^3$.
  Orbital $t_{2g}$ terisi penuh ($t_{2g}^6$), tetapi orbital $e_g$ terisi tidak simetris ($e_g^3$: satu orbital terisi sepasang elektron, satu orbital terisi satu elektron).

**Langkah 2: [Aplikasi Teorema Jahn-Teller]**
- Pada $[\\ce{Ni(H2O)6}]^{2+}$, himpunan orbital $e_g$ terisi secara simetris (masing-masing 1 elektron). Keadaan dasar elektroniknya tidak terdegenerasi ($^3A_{2g}$), sehingga tidak ada dorongan untuk mengalami distorsi (stabil dalam simetri $O_h$).
- Pada $[\\ce{Cu(H2O)6}]^{2+}$, himpunan $e_g^3$ terdegenerasi rangkap dua ($^2E_g$): pasangan elektron dapat berada di $d_{z^2}$ atau di $d_{x^2-y^2}$.
- Karena orbital $e_g$ bertatapan langsung dengan ligan, ketidaksamaan kerapatan elektron menimbulkan gaya tolakan tak seimbang. Teorema Jahn-Teller menyatakan sistem harus berdistorsi spontan untuk menghilangkan degenerasi ini.

**Langkah 3: [Pemecahan Tingkat Energi akibat Elongasi-z (Simetri D4h)]**
Bila 2 ligan aksial sepanjang sumbu $z$ ditarik menjauh (elongasi-$z$):
- Tolakan elektrostatik pada sumbu $z$ berkurang drastis.
- Orbital $d_{z^2}$ turun energinya sebesar $\\frac{1}{2}\\delta_1$, sedangkan orbital $d_{x^2-y^2}$ naik energinya sebesar $\\frac{1}{2}\\delta_1$.
- Pada himpunan $t_{2g}$, orbital $d_{xz}$ dan $d_{yz}$ terstabilkan turun sebesar $\\frac{1}{3}\\delta_2$, sedangkan orbital $d_{xy}$ naik sebesar $\\frac{2}{3}\\delta_2$.
Tingkat energi dari bawah ke atas:
$$(d_{xz}, d_{yz}) < d_{xy} < d_{z^2} < d_{x^2-y^2}$$

**Langkah 4: [Pembuktian Energi Stabilisasi Jahn-Teller Delta E_JT]**
Pada konfigurasi $d^9$:
- Orbital $t_{2g}$ terisi penuh oleh 6 elektron:
  $$4\\left(-\\frac{1}{3}\\delta_2\\right) + 2\\left(+\\frac{2}{3}\\delta_2\\right) = -\\frac{4}{3}\\delta_2 + \\frac{4}{3}\\delta_2 = 0 \\quad (\\text{Netto nol})$$
- Pada orbital $e_g$, pasangan 2 elektron menempati orbital berenergi rendah $d_{z^2}$, dan 1 elektron tunggal menempati orbital berenergi tinggi $d_{x^2-y^2}$:
  $$\\Delta E_{\\text{JT}} = 2\\left(-\\frac{1}{2}\\delta_1\\right) + 1\\left(+\\frac{1}{2}\\delta_1\\right) = -\\delta_1 + \\frac{1}{2}\\delta_1 = -\\frac{1}{2}\\delta_1$$
Nilai $\\Delta E_{\\text{JT}} = -\\frac{1}{2}\\delta_1 < 0$ membuktikan bahwa sistem mengalami penstabilan energi termodinamika spontan sebesar $\\frac{1}{2}\\delta_1$ melalui pemanjangan kedua ikatan aksial $\\ce{Cu-O}$ ($2.38\\text{ \\AA}$).

**Kesimpulan Evaluator Juri:**  
Distorsi pada $[\\ce{Cu(H2O)6}]^{2+}$ merupakan manifestasi klasik Teorema Jahn-Teller akibat asimetri pengisian orbital $e_g^3$. Penurunan simetri dari $O_h$ ke $D_{4h}$ melalui elongasi-$z$ menghasilkan stabilisasi termodinamika sebesar $\\frac{1}{2}\\delta_1$, memvalidasi secara teoritis mengapa 2 ikatan aksial $\\ce{Cu-O}$ ($2.38\\text{ \\AA}$) jauh lebih panjang daripada 4 ikatan ekuatorial ($1.96\\text{ \\AA}$).`,
    },
    {
      tag: 'soal-sintesis-cisplatin-efek-trans',
      tags: ['soal-osn', 'soal-sintesis-cisplatin', 'efek-trans', 'platina-bujur-sangkar', 'kinetika-substitusi-ligan'],
      title: 'Contoh Soal OSN 4: Sintesis Selektif Cisplatin vs Transplatin Berdasarkan Prinsip Efek Trans Platina(II)',
      summary: 'Desain rute reaksi bertahap pembentukan kompleks antikanker bujur sangkar Pt(II) melalui pemanfaatan deret ligan pengarah trans.',
      content: `### Soal:
Senyawa kompleks bujur sangkar platina(II) diklorodiamminaplatina(II) eksis sebagai dua isomer geometris:
- **Cisplatin** (*cis*-$[\\ce{Pt(NH3)2Cl2}]$): Obat kemoterapi kanker testis dan ovarium yang sangat mujarab.
- **Transplatin** (*trans*-$[\\ce{Pt(NH3)2Cl2}]$): Senyawa yang sama sekali tidak aktif sebagai obat kanker.
Kekuatan ligan pengarah trans (*trans-directing ability*) diketahui memiliki urutan:
$$\\ce{Cl- > NH3}$$

**Pertanyaan:**
1. Rancanglah rute sintesis dua tahap untuk membuat **Cisplatin** dengan kemurnian stereokimia tinggi menggunakan reagen awal garam tetrakloroplatinat(II) ($[\\ce{PtCl4}]^{2-}$) dan larutan amonia ($\\ce{NH3}$)! Jelaskan peran efek trans pada penentuan posisi substitusi tahap kedua!
2. Rancanglah rute sintesis dua tahap untuk membuat **Transplatin** menggunakan reagen awal garam tetraamminaplatina(II) ($[\\ce{Pt(NH3)4}]^{2+}$) dan asam klorida ($\\ce{HCl}$)! Jelaskan peran efek trans pada tahap kedua!
3. Mengapa reaksi antara $[\\ce{PtCl4}]^{2-}$ dengan $\\ce{NH3}$ tidak pernah menghasilkan isomer transplatin dalam jumlah signifikan?

---

### Rincian Langkah Penyelesaian:

**Langkah 1: [Rute Sintesis Selektif Cisplatin]**
Bahan awal: $[\\ce{PtCl4}]^{2-}$ (anion bujur sangkar dengan 4 ligan kloro identik).
- **Tahap 1 (Substitusi Pertama):**
  Reaksikan $[\\ce{PtCl4}]^{2-}$ dengan satu ekuivalen $\\ce{NH3}$:
  $$[\\ce{PtCl4}]^{2-} + \\ce{NH3 -> [PtCl3(NH3)]- + Cl-}$$
  Karena keempat ligan kloro identik, molekul $\\ce{NH3}$ pertama dapat menggantikan ligan $\\ce{Cl-}$ mana saja. Terbentuk trikloroamminaplatinat(II).
- **Tahap 2 (Substitusi Kedua):**
  Reaksikan $[\\ce{PtCl3(NH3)}]-$ dengan ekuivalen $\\ce{NH3}$ kedua:
  Pada kompleks intermediet $[\\ce{PtCl3(NH3)}]-$, terdapat dua jenis ligan kloro:
  - Dua ligan $\\ce{Cl-}$ yang saling berposisi *trans* satu sama lain.
  - Satu ligan $\\ce{Cl-}$ yang berposisi *trans* terhadap $\\ce{NH3}$.
  Berdasarkan deret efek trans: $\\ce{Cl- > NH3}$.
  Ligan $\\ce{Cl-}$ memiliki efek trans yang jauh lebih kuat dibanding $\\ce{NH3}$. Artinya, ligan yang berada pada posisi *trans* terhadap $\\ce{Cl-}$ akan mengalami labilisasi dan digantikan jauh lebih cepat!
  Oleh karena itu, $\\ce{NH3}$ kedua masuk menggantikan ligan $\\ce{Cl-}$ yang berseberangan (*trans*) dengan $\\ce{Cl-}$ lainnya.
  Posisi ini otomatis berada pada posisi *cis* terhadap $\\ce{NH3}$ pertama!
  Hasil reaksi eksklusif: **Cisplatin (*cis*-$[\\ce{Pt(NH3)2Cl2}]$)**.

**Langkah 2: [Rute Sintesis Selektif Transplatin]**
Bahan awal: $[\\ce{Pt(NH3)4}]^{2+}$ (kation bujur sangkar dengan 4 ligan ammina identik).
- **Tahap 1 (Substitusi Pertama):**
  Reaksikan $[\\ce{Pt(NH3)4}]^{2+}$ dengan satu ekuivalen ion $\\ce{Cl-}$:
  $$[\\ce{Pt(NH3)4}]^{2+} + \\ce{Cl- -> [Pt(NH3)3Cl]+ + NH3}$$
  Terbentuk kloroamminaplatina(II).
- **Tahap 2 (Substitusi Kedua):**
  Reaksikan $[\\ce{Pt(NH3)3Cl}]+$ dengan ekuivalen ion $\\ce{Cl-}$ kedua:
  Pada intermediet ini, terdapat ligan $\\ce{Cl-}$ dan tiga ligan $\\ce{NH3}$.
  Berdasarkan deret efek trans: $\\ce{Cl- > NH3}$.
  Ligan $\\ce{Cl-}$ yang baru masuk memiliki daya labilisasi trans yang dominan. Ligan $\\ce{NH3}$ yang terletak tepat di seberang (*trans*) terhadap $\\ce{Cl-}$ tersebut mengalami pelemahan ikatan paling parah dan tersubstitusi paling cepat oleh ion $\\ce{Cl-}$ kedua!
  Hasil reaksi eksklusif: **Transplatin (*trans*-$[\\ce{Pt(NH3)2Cl2}]$)**.

**Langkah 3: [Alasan Mengapa [PtCl4]2- Tidak Menghasilkan Transplatin]**
Jika reaksi $[\\ce{PtCl4}]^{2-} + 2\\ce{NH3}$ ingin menghasilkan transplatin, molekul $\\ce{NH3}$ kedua harus menggantikan ligan $\\ce{Cl-}$ yang berada di seberang $\\ce{NH3}$ pertama. Namun karena efek trans $\\ce{NH3}$ sangat lemah dibandingkan $\\ce{Cl-}$, ikatan $\\ce{Pt-Cl}$ yang berseberangan dengan $\\ce{NH3}$ justru paling inert (paling kuat), sehingga probabilitas terbentuknya isomer trans praktis mendekati nol.

**Kesimpulan Evaluator Juri:**  
Efek trans mengontrol kinetika substitusi ligan bujur sangkar secara selektif. Sintesis Cisplatin harus dimulai dari $[\\ce{PtCl4}]^{2-}$ karena efek trans $\\ce{Cl- > NH3}$ mengarahkan ligan kedua ke posisi *cis*. Sebaliknya, sintesis Transplatin harus dimulai dari $[\\ce{Pt(NH3)4}]^{2-}$ di mana ion $\\ce{Cl-}$ pertama mengarahkan ion $\\ce{Cl-}$ kedua masuk tepat di posisi *trans*-nya.`,
    },
    {
      tag: 'soal-spektra-absorbsi-dd-warna-kompleks',
      tags: ['soal-osn', 'soal-spektra-ti-d1', 'spektra-elektronik-d-d', 'warna-senyawa-kompleks', 'splitting-orbital-d'],
      title: 'Contoh Soal OSN 5: Analisis Spektra Elektronik d-d [Ti(H2O)6]3+ & Penentuan Parameter Pemisahan Medan Kristal (10 Dq)',
      summary: 'Kalkulasi energi pemisahan medan oktahedral Delta_o dari data spektroskopi absorpsi UV-Vis, interpretasi warna komplementer, dan bahu Jahn-Teller keadaan tereksitasi.',
      content: `### Soal:
Ion heksaakuatitanium(III) ($[\\ce{Ti(H2O)6}]^{3+}$) merupakan kompleks koordinasi logam transisi paling sederhana dengan konfigurasi elektron $3d^1$. Larutan berair dari garam titanium(III) ini menunjukkan warna ungu kemerahan (*violet*) yang khas.
Pengukuran spektroskopi serapan UV-Vis larutan menghasilkan pita serapan absorpsi lebar di daerah cahaya tampak dengan puncak absorbansi maksimum pada panjang gelombang:
$$\\lambda_{\\text{max}} = 500.0\\text{ nm}$$
Pada pita serapan tersebut teramati pula adanya bahu serapan (*absorption shoulder*) asimetris pada panjang gelombang sekitar $\\lambda \\approx 555\\text{ nm}$ ($18,000\\text{ cm}^{-1}$).  
*(Tetapan fisika: $h = 6.626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$, $c = 2.998 \\times 10^8\\text{ m/s}$, $N_A = 6.022 \\times 10^{23}\\text{ mol}^{-1}$).*

**Pertanyaan:**
1. Tuliskan konfigurasi elektron keadaan dasar (*ground state*) dan keadaan tereksitasi (*excited state*) dari kompleks $[\\ce{Ti(H2O)6}]^{3+}$, serta tuliskan simbol transisi spektroskopi yang bersesuaian!
2. Hitung nilai parameter pemisahan medan kristal ($\\Delta_o$ atau $10\\ Dq$) untuk kompleks tersebut dalam satuan Joule per ion ($\\text{J}$), bilangan gelombang ($\\text{cm}^{-1}$), dan kiloJoule per mol ($\\text{kJ/mol}$)!
3. Jelaskan berdasarkan lingkaran warna komplementer mengapa larutan $[\\ce{Ti(H2O)6}]^{3+}$ tampak berwarna ungu bagi mata manusia!
4. Jelaskan penyebab fisis mengapa pita serapan UV-Vis tidak berupa puncak tunggal Gauss yang simetris sempurna melainkan memiliki bahu serapan (*shoulder*) pada $555\\text{ nm}$!

---

### Rincian Langkah Penyelesaian:

**Langkah 1: [Konfigurasi Elektron & Transisi Spektroskopi]**
Titanium memiliki nomor atom $Z = 22$ ($\\ce{Ti}: [\\ce{Ar}] 3d^2 4s^2$).
Kation $\\ce{Ti^3+}$ berkonfigurasi $d^1$: $[\\ce{Ar}] 3d^1$.
- **Keadaan Dasar (*Ground State*):** Elektron tunggal menempati salah satu orbital $t_{2g}$ berenergi rendah:
  $$t_{2g}^1 e_g^0 \\quad (\\text{Term simbol: } ^2T_{2g})$$
- **Keadaan Tereksitasi (*Excited State*):** Foton diserap mempromosikan elektron ke orbital $e_g$:
  $$t_{2g}^0 e_g^1 \\quad (\\text{Term simbol: } ^2E_g)$$
- **Transisi Spektroskopi:** $^2T_{2g} \\to ^2E_g$.

**Langkah 2: [Menghitung Nilai Parameter Pemisahan Medan Kristal Delta_o]**
Energi foton yang diserap pada puncak maksimum:
$$\\Delta_o = h \\nu = \\frac{h c}{\\lambda_{\\text{max}}}$$
1. **Dalam satuan Joule per ion:**
   $$\\Delta_o = \\frac{(6.626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}) \\times (2.998 \\times 10^8\\text{ m/s})}{500.0 \\times 10^{-9}\\text{ m}} = \\frac{1.9865 \\times 10^{-25}\\text{ J}\\cdot\\text{m}}{500.0 \\times 10^{-9}\\text{ m}} = 3.973 \\times 10^{-19}\\text{ Joule}$$
2. **Dalam satuan bilangan gelombang (cm^-1):**
   $$\\tilde{\\nu} = \\frac{1}{\\lambda} = \\frac{1}{500.0 \\times 10^{-7}\\text{ cm}} = 20,000\\text{ cm}^{-1}$$
   $$\\Delta_o = 10\\ Dq = 20,000\\text{ cm}^{-1}$$
3. **Dalam satuan kiloJoule per mol:**
   $$\\Delta_o = (3.973 \\times 10^{-19}\\text{ J}) \\times (6.02214 \\times 10^{23}\\text{ mol}^{-1}) = 239,260\\text{ J/mol} = 239.26\\text{ kJ/mol}$$

**Langkah 3: [Interpretasi Warna Komplementer]**
Pita serapan berada pada $\\lambda_{\\text{max}} = 500\\text{ nm}$, yang berkorespondensi dengan spektrum cahaya tampak wilayah **hijau-kuning**.
Ketika cahaya putih polikromatik melewati larutan $[\\ce{Ti(H2O)6}]^{3+}$, komponen foton hijau-kuning diserap untuk mengeksitasi elektron $t_{2g} \\to e_g$. Komponen spektrum cahaya tampak yang tersisa (yaitu warna komplementernya di wilayah biru dan merah) diteruskan tanpa halangan menuju mata pengamat, menghasilkan persepsi visual warna **ungu kemerahan (*violet*)**.

**Langkah 4: [Analisis Bahu Serapan via Efek Jahn-Teller Keadaan Tereksitasi]**
Jika kompleks mempertahankan simetri $O_h$ kaku sempurna pada kedua keadaan, pita serapan akan berupa puncak tunggal yang simetris.
Penyebab munculnya bahu serapan:
- Pada keadaan dasar ($t_{2g}^1 e_g^0$), asimetri berada di $t_{2g}$ sehingga distorsi Jahn-Teller sangat lemah.
- Namun saat foton diserap, molekul melompat ke **keadaan tereksitasi ($t_{2g}^0 e_g^1$)**.
- Keadaan $e_g^1$ memiliki satu elektron tunggal pada orbital $e_g$ yang menghadap langsung ke ligan, memicu **Efek Jahn-Teller yang sangat kuat pada keadaan tereksitasi**!
- Akibat distorsi Jahn-Teller, orbital $e_g$ terbelah menjadi dua tingkat energi terpisah ($d_{z^2}$ dan $d_{x^2-y^2}$).
- Akibatnya, terjadi dua transisi elektronik yang sangat berdekatan: $t_{2g} \\to d_{z^2}$ (energi lebih rendah, $\\lambda \\approx 555\\text{ nm}$) dan $t_{2g} \\to d_{x^2-y^2}$ (energi lebih tinggi, $\\lambda = 500\\text{ nm}$), menghasilkan puncak utama dengan bahu serapan (*shoulder*) asimetris yang khas.

**Kesimpulan Evaluator Juri:**  
Parameter medan kristal $[\\ce{Ti(H2O)6}]^{3+}$ terhitung presisi bernilai $\\Delta_o = 20,000\\text{ cm}^{-1}$ ($239.26\\text{ kJ/mol}$). Penyerapan foton hijau ($500\\text{ nm}$) meneruskan warna komplementer ungu. Keberadaan bahu serapan pada $555\\text{ nm}$ memvalidasi terjadinya Efek Jahn-Teller dinamis pada keadaan tereksitasi $e_g^1$.`,
    },
  ],
};
