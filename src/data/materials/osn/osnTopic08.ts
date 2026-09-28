/**
 * osnTopic08.ts
 * Topik 8: Kimia Anorganik & Senyawa Koordinasi
 * Jenjang: OSN / IChO
 */

import type { MaterialItem } from '../../materialsData.ts';
import { CHECKPOINTS_TOPIC_OSN_08 } from '../../checkpoints/checkpointBankTopicOsn08.ts';

export const OSN_TOPIC_8: MaterialItem = {
  id: 8,
  topic_number: 8,
  title: 'Kimia Anorganik & Senyawa Koordinasi',
  slug: 'anorganik-senyawa-koordinasi',
  category: 'Kimia Anorganik',
  level: 'OSN',
  readTimeMinutes: 45,
  summary: 'Kajian komprehensif kimia koordinasi modern: struktur atom pusat & klasifikasi ligan (dentisitas, efek kelat), tata nama IUPAC resmi, Teori Ikatan Valensi (VBT), Teori Medan Kristal (CFT) geometri oktahedral, tetrahedral, dan bujur sangkar, Energi Penstabilan Medan Kristal (CFSE), deret spektrokimia & ligan pi-akseptor/pi-donor, konfigurasi high-spin vs low-spin, efek Jahn-Teller distorsi tetragonal, spektra elektronik d-d & warna kompleks, kemagnetan (momen magnetik spin-only mu_eff), isomerisme struktural & stereoisomerisme (cis-trans, fac-mer, kiralitas optis), kinetika substitusi ligan (efek trans), aturan Wade-Mingos PSEPT kluster borana, parameter Racah, dan siklus katalisis organologam.',
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
      checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_08['prasyarat-struktur-senyawa-koordinasi-kelat'],
      content: `### 🐙 Tentakel Gurita Pengikat Ligan & Perangkap Sangkar Kelat Termodinamika

Bayangkan kation logam transisi sebagai bola magnet di pusat ruangan. Ligan monodentat seperti molekul air ($\\ce{H2O}$) atau amonia ($\\ce{NH3}$) bertindak seperti bola tenis magnetik tunggal: masing-masing menempel secara individual, dan jika satu bola terlepas akibat agitasi termal, ia langsung hanyut bebas ke larutan. Sebaliknya, ligan pengkelat polidentat (seperti etilendiamin atau $\\ce{EDTA^4-}$) bertindak seperti **sarung tangan gurita berlengan banyak**: meskipun salah satu atom donornya terlepas sesaat, lengan-lengan lainnya masih mencengkeram erat kation pusat sehingga atom donor yang lepas tadi segera terikat kembali sebelum sempat hanyut!

Fenomena pengikatan multidentat ini menghasilkan peningkatan kestabilan termodinamika yang spektakuler yang dikenal sebagai **Efek Kelat (*The Chelate Effect*)**.

---

### 🧭 Anatomi Senyawa Kompleks & Bilangan Koordinasi:

Senyawa koordinasi terbentuk dari interaksi asam-basa Lewis:
1. **Asam Lewis (Kation Logam Pusat):** Logam transisi blok $d$ dengan orbital valensi kosong berenergi rendah yang siap menerima pasangan elektron bebas.
2. **Basa Lewis (Ligan):** Molekul netral atau anion dengan setidaknya satu pasangan elektron bebas (PEB) yang didonorkan ke orbital kosong kation logam.
3. **Bilangan Koordinasi (BK):** Jumlah ikatan koordinasi langsung antara atom donor ligan dengan kation pusat (paling umum $\\text{BK} = 6$ oktahedral dan $\\text{BK} = 4$ tetrahedral/bujur sangkar).
4. **Bola Koordinasi ($[...]$):** Entitas kation logam beserta ligan yang terikat langsung secara koordinatif. Ion di luar kurung siku bertindak sebagai ion lawan (*counter-ion*) penyeimbang muatan:
   $$\\ce{[Co(NH3)5Cl]Cl2 -> [Co(NH3)5Cl]^2+ (Bola Koordinasi Kationik) + 2Cl- (Ion Lawan)}$$

---

### 📊 Matriks Klasifikasi Dentisitas Ligan

| Dentisitas Ligan | Definisi Donor | Contoh Ligan Netral | Contoh Ligan Anionik | Cincin Kelat Terbentuk |
| :--- | :--- | :--- | :--- | :---: |
| **Monodentat** | 1 atom donor per molekul | $\\ce{H2O}$ (aqua), $\\ce{NH3}$ (ammina), $\\ce{CO}$ (karbonil), $\\ce{py}$ | $\\ce{Cl-}, \\ce{F-}, \\ce{CN-}, \\ce{OH-}, \\ce{SCN-}$ | Tidak ada (terbuka) |
| **Bidentat** | 2 atom donor simultan | Etilendiamin ($\\ce{en}$), $2,2'$-bipiridin ($\\ce{bpy}$), fenantrolin | Oksalat ($\\ce{ox^2-}$), Glisinat ($\\ce{gly-}$ ambifungsional) | Cincin 5-anggota stabil |
| **Tridentat / Tetradentat** | 3 atau 4 atom donor | Dietilentriamin ($\\ce{dien}$), trietilentetramin ($\\ce{trien}$) | Porfirin (cincin heme, klorofil) | Cincin makrosiklik planar |
| **Heksadentat** | 6 atom donor simultan | - | $\\ce{EDTA^4-}$ (2 donor N + 4 donor $\\ce{O^-}$) | Sangkar oktahedral 3D rapat |
| **Ambidentat** | Mengikat bergantian via 2 atom | - | $\\ce{NO2-}$ (nitro $\\ce{M-NO2}$ / nitrito $\\ce{M-ONO}$), $\\ce{SCN-}$ | Isomerisme ikatan (*linkage*) |

---

### 🔬 Asal Usul Termodinamika Efek Kelat: Lonjakan Entropi Translasi

Perhatikan komparasi kuantitatif tetapan pembentukan kumulatif pembentukan kompleks ion $\\ce{Ni^2+}$:
$$\\ce{[Ni(H2O)6]^2+ + 6NH3 <=> [Ni(NH3)6]^2+ + 6H2O} \\quad \\log \\beta_6 = 8.61$$
$$\\ce{[Ni(H2O)6]^2+ + 3en <=> [Ni(en)3]^2+ + 6H2O} \\quad \\log \\beta_3 = 18.28$$

Kestabilan $[\\ce{Ni(en)3}]^{2+}$ lebih tinggi hampir **$10^{10}$ kali lipat** dibanding $[\\ce{Ni(NH3)6}]^{2+}$!
Kunci termodinamikanya terletak pada persamaan energi bebas Gibbs:
$$\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$$
- **Faktor Entalpi ($\\Delta H^\\circ$):** Pembentukan 6 ikatan koordinasi $\\ce{Ni-N}$ pada kedua reaksi memiliki entalpi pemutusan dan pembentukan ikatan yang hampir persis setara ($\\Delta H_1^\\circ \\approx \\Delta H_2^\\circ$).
- **Faktor Entropi ($\\Delta S^\\circ$):**
  - Pada reaksi 1: $1 \\text{ ion kompleks} + 6\\ce{NH3} \\implies 7 \\text{ partikel pereaksi}$ menghasilkan $1 \\text{ kompleks} + 6\\ce{H2O} \\implies 7 \\text{ partikel produk}$ ($\\Delta n_{\\text{partikel}} = 0$). Perubahan entropi mendekati nol.
  - Pada reaksi 2: $1 \\text{ ion kompleks} + 3\\ce{en} \\implies 4 \\text{ partikel pereaksi}$ menghasilkan $1 \\text{ kompleks} + 6\\ce{H2O} \\implies 7 \\text{ partikel produk}$ ($\\Delta n_{\\text{partikel}} = +3$).
- Peningkatan jumlah molekul bebas terlarut dari 4 menjadi 7 melepaskan derajat kebebasan translasi dan rotasi air yang masif ($\\Delta S^\\circ \\gg 0$). Suku $-T\\Delta S^\\circ$ bernilai luar biasa negatif, mendorong $\\Delta G^\\circ$ menuju nilai negatif raksasa secara spontan!

---

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Entalpi vs Entropi pada Efek Kelat
> - **Miskonsepsi Umum**: Siswa sering menjawab bahwa kompleks kelat jauh lebih stabil karena ikatan kovalen koordinasi ligan bidentat secara intrinsik "dua kali lebih kuat" (faktor ikatan entalpi eksotermik).
> - **Kaidah yang Benar**: Entalpi ikatan $\\ce{Ni-N}$ dari ligan etilendiamin hampir identik dengan entalpi ikatan $\\ce{Ni-N}$ dari amonia. Pendorong utama efek kelat adalah **faktor entropik murni ($\\Delta S^\\circ > 0$)** akibat bertambahnya jumlah molekul bebas terlarut dalam medium larutan air.

---

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Ukuran Cincin Kelat Paling Stabil
> - Cincin kelat beranggotakan **5 atom** (misal ikatan $\\ce{M-N-C-C-N}$ pada etilendiamin) dan **6 atom** (misal $\\ce{M-O-C-C-C-O}$ pada asetilasetonato/acac) adalah cincin yang paling stabil secara termodinamika karena sudut ikatannya bebas dari regangan sudut (*angle strain*) Baeyer dan tolakan sterik. Cincin 3 atau 4 anggota sangat tidak stabil akibat regangan sudut tajam.`,
      keyFormulas: [
        { name: 'Persamaan Energi Bebas Efek Kelat', formula: '\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ \\quad (\\Delta S^\\circ \\gg 0 \\implies K_f \\gg 1)' },
        { name: 'Kaidah Bilangan Koordinasi Netral', formula: 'q_{\\text{kompleks}} = z_{\\text{logam}} + \\sum q_{\\text{ligan}}' },
      ],
    },
    {
      tag: 'prasyarat-tatanama-iupac-senyawa-koordinasi',
      tags: ['tatanama-kompleks', 'tatanama-iupac', 'bilangan-oksidasi-logam', 'aturan-penamaan-ligan'],
      title: 'Prasyarat 2: Tata Nama Resmi IUPAC Senyawa Koordinasi & Penentuan Bilangan Oksidasi Logam',
      summary: 'Aturan nomenklatur sistematis IUPAC untuk ligan netral/anionik, awalan multiplikatif bis/tris, akhiran kation vs anion kompleks, dan muatan formal.',
      checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_08['prasyarat-tatanama-iupac-senyawa-koordinasi'],
      content: `### 📖 Kamus Tata Bahasa Formal IUPAC & Neraca Akuntansi Muatan Logam

Di dalam kompetisi OSN dan IChO internasional, kesalahan penulisan satu huruf pada tata nama senyawa kompleks dapat menggugurkan seluruh poin soal. IUPAC (*International Union of Pure and Applied Chemistry*) menetapkan sistem tata nama baku yang mencerminkan secara presisi bola koordinasi, dentisitas ligan, dan bilangan oksidasi kation logam.

---

### 🧭 Algoritma 4 Langkah Nomenklatur IUPAC:

1. **Langkah 1: Pisahkan Kation dan Anion Lawan**
   - Seperti garam biner dapur ($\\ce{NaCl} = \\text{natrium klorida}$), spesi **kation selalu dinamai lebih dahulu**, baru kemudian spesi **anion**.
   - Contoh pada $\\ce{K4[Fe(CN)6]}$: kation adalah kalium, anion kompleks adalah $[\\ce{Fe(CN)6}]^{4-}$.
   - Contoh pada $[\\ce{Co(NH3)5Cl}]\\ce{Cl2}$: kation kompleks adalah $[\\ce{Co(NH3)5Cl}]^{2+}$, anion lawan adalah klorida.

2. **Langkah 2: Susun Urutan Ligan Secara Alfabetis Murni**
   - Di dalam entitas kompleks, **ligan ditulis terlebih dahulu mendahului nama logam**.
   - Urutan penulisan ligan didasarkan pada **abjad nama ligan**, mengabaikan awalan jumlah (di-, tri-, tetra-, penta-, heksa-).
   - *Ligan Anionik berakhiran -o:* $\\ce{Cl-}$ (kloro), $\\ce{F-}$ (fluoro), $\\ce{CN-}$ (siano), $\\ce{OH-}$ (hidrokso), $\\ce{ox^2-}$ (oksalato), $\\ce{SO4^2-}$ (sulfato).
   - *Ligan Netral berakhiran nama molekul:* $\\ce{H2O}$ (aqua), $\\ce{NH3}$ (ammina, 'm' ganda), $\\ce{CO}$ (karbonil), $\\ce{NO}$ (nitrosil).
   - *Contoh Alfabet:* Pada $[\\ce{Co(NH3)5Cl}]^{2+}$, ammina (A) mendahului kloro (K) $\\implies$ **pentaamminakloro**.

3. **Langkah 3: Aturan Awalan Jumlah (Sederhana vs Kelat Poliatomik)**
   - Untuk ligan monodentat sederhana: gunakan awalan Yunani baku (*di-, tri-, tetra-, penta-, heksa-*).
   - Untuk ligan pengkelat yang sudah mengandung numeral dalam namanya (seperti etilendiamin) atau ligan organik poliatomik: gunakan awalan **bis-** ($2$), **tris-** ($3$), **tetrakis-** ($4$), **pentakis-** ($5$), dan nama ligan wajib ditaruh di dalam kurung:
     $$\\ce{[Co(en)3]^3+ ->} \\text{tris(etilendiamin)kobalt(III)}$$

4. **Langkah 4: Tetapkan Nama Logam Pusat & Akhiran Muatan**
   - **Kation Kompleks atau Kompleks Netral:** Gunakan nama umum bahasa Indonesia diikuti biloks Romawi di dalam tanda kurung tanpa spasi:
     $$[\\ce{Cr(H2O)6}]^{3+} \\implies \\text{ion heksaaquakromium(III)}$$
   - **Anion Kompleks (Bermuatan Negatif):** Nama logam menggunakan akar kata bahasa Latin dan wajib diakhiri dengan akhiran **-at**:
     - Besi (Ferrum) $\\implies$ **ferat**
     - Tembaga (Cuprum) $\\implies$ **kuprat**
     - Emas (Aurum) $\\implies$ **aurat**
     - Perak (Argentum) $\\implies$ **argentat**
     - Timbal (Plumbum) $\\implies$ **plumbat**
     - Timah (Stannum) $\\implies$ **stanat**
     - Platina $\\implies$ **platinat**, Nikel $\\implies$ **nikelat**, Kobalt $\\implies$ **kobaltat**

---

### 📊 Matriks Kasus Uji Nomenklatur IUPAC Resmi OSN

| Rumus Senyawa | Kation | Anion | Perhitungan Biloks Logam Pusat | Nama Resmi IUPAC |
| :--- | :--- | :--- | :--- | :--- |
| $\\ce{[Co(NH3)5Cl]Cl2}$ | $[\\ce{Co(NH3)5Cl}]^{2+}$ | $2\\ce{Cl-}$ | $x + 5(0) + 1(-1) = +2 \\implies x = +3$ | **Pentaamminaklorokobalt(III) klorida** |
| $\\ce{K4[Fe(CN)6]}$ | $4\\ce{K+}$ | $[\\ce{Fe(CN)6}]^{4-}$ | $x + 6(-1) = -4 \\implies x = +2$ | **Kalium heksasianoferat(II)** |
| $\\ce{Na[Au(CN)2]}$ | $\\ce{Na+}$ | $[\\ce{Au(CN)2}]^{-}$ | $x + 2(-1) = -1 \\implies x = +1$ | **Natrium disianoaurat(I)** |
| $\\ce{[Pt(en)2(NO2)2](SO4)}$ | $[\\ce{Pt(en)2(NO2)2}]^{2+}$ | $\\ce{SO4^2-}$ | $x + 2(0) + 2(-1) = +2 \\implies x = +4$ | **Bis(etilendiamin)dinitroplatina(IV) sulfat** |
| $\\ce{[Ni(CO)4]}$ | Kompleks netral | - | $x + 4(0) = 0 \\implies x = 0$ | **Tetrakarbonilnikel(0)** |

---

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Ammina vs Amina & Akhiran -at
> - **Miskonsepsi Umum**: Siswa menulis "amina" dengan satu huruf 'm' untuk ligan $\\ce{NH3}$, atau memberi akhiran "-at" pada kation kompleks bermuatan positif (misal: pentaamminaklorokobaltat(III) klorida).
> - **Kaidah yang Benar**: Dalam nomenklatur koordinasi, ligan $\\ce{NH3}$ wajib dieja **ammina** (*double m*) untuk membedakannya secara tegas dari amina organik ($\\ce{R-NH2}$). Akhiran **-at** mutlak HANYA untuk kompleks yang berada di posisi **anion bermuatan negatif**.

---

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Cek Muatan Bersih Cepat
> Hitung muatan bola koordinasi dengan neraca aljabar kilat:
> $$q_{\\text{bola}} = z_{\\text{logam}} + \\sum q_{\\text{ligan}}$$
> Jika $q_{\\text{bola}} < 0$, refleks pertama Anda adalah mengubah nama logam ke bentuk Latin berakhiran **-at**!`,
      keyFormulas: [
        { name: 'Neraca Biloks Logam Pusat', formula: 'z_{\\text{logam}} = q_{\\text{bola}} - \\sum q_{\\text{ligan}}' },
      ],
    },
    {
      tag: 'prasyarat-teori-ikatan-valensi-vbt-hibridisasi',
      tags: ['teori-ikatan-valensi-vbt', 'hibridisasi-kompleks', 'orbital-dalam-luar', 'geometri-koordinasi'],
      title: 'Prasyarat 3: Teori Ikatan Valensi (VBT) Linus Pauling: Hibridisasi Orbital, Kompleks Orbital Dalam vs Luar',
      summary: 'Model tumpang-tindih orbital hibrida kation logam dengan PEB ligan, geometri sp3, dsp2, sp3d2, dan d2sp3 serta keterbatasannya.',
      checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_08['prasyarat-teori-ikatan-valensi-vbt-hibridisasi'],
      content: `### 🎭 Topeng Cetakan Orbital Hibrida Pauling: Kotak Hibridisasi Dalam $d^2sp^3$ vs Luar $sp^3d^2$

Sebelum lahirnya mekanika kuantum spektroskopi modern, Linus Pauling (1930-an) merumuskan **Teori Ikatan Valensi (*Valence Bond Theory* / VBT)**. Dalam kerangka berpikir VBT, pembentukan senyawa kompleks dianalogikan seperti menyusun lemari kabinet: kation logam menyediakan orbital-orbital kosong yang dicampur (dihibridisasi) membentuk ruang simetris setara, dan ligan datang menaruh pasangan elektron bebasnya ke dalam rak-rak kosong tersebut.

---

### 🧭 Klasifikasi Hibridisasi Berdasarkan Bilangan Koordinasi:

1. **Bilangan Koordinasi 4:**
   - **Hibridisasi $sp^3$ (Tetrahedral, Sudut $109.5^\\circ$):**
     Terbentuk apabila ligan tidak memiliki kekuatan untuk mendesak elektron subkulit $(n-1)d$ berpasangan. Orbital $4s$ dan ketiga orbital $4p$ bercampur.
     *Contoh:* Ion $[\\ce{NiCl4}]^{2-}$ (konfigurasi $\\ce{Ni^2+} = 3d^8$). Dua elektron $3d$ tetap tak berpasangan $\\implies$ **Paramagnetik** ($n = 2, \\mu_{\\text{eff}} \\approx 2.83\\ \\mu_B$).
   - **Hibridisasi $dsp^2$ (Bujur Sangkar / Square Planar, Sudut $90^\\circ$):**
     Terbentuk apabila ligan kuat mendesak elektron-elektron tak berpasangan pada subkulit $(n-1)d$ untuk berpasangan, mengosongkan satu orbital $3d_{x^2-y^2}$. Satu orbital $3d$ kosong ini bercampur dengan $4s$ dan dua $4p$.
     *Contoh:* Ion $[\\ce{Ni(CN)4}]^{2-}$. Delapan elektron $3d$ berpasangan sempurna dalam empat orbital $3d$, orbital kelima kosong untuk hibridisasi $dsp^2 \\implies$ **Diamagnetik murni** ($n = 0, \\mu_{\\text{eff}} = 0$).

2. **Bilangan Koordinasi 6 (Geometri Oktahedral):**
   - **Kompleks Orbital Dalam (*Inner Orbital Complex*, $d^2sp^3$):**
     Menggunakan dua orbital $(n-1)d$ dari kulit dalam (yaitu $d_{x^2-y^2}$ dan $d_{z^2}$) bersama orbital $ns$ dan $np$. Terjadi saat ligan mendesak elektron $d$ berpasangan. Karakteristik: bersifat **spin rendah (*low-spin*)** dengan elektron tak berpasangan minimum.
     *Contoh:* $[\\ce{Fe(CN)6}]^{4-}$ ($3d^6$ spin rendah, diamagnetik).
   - **Kompleks Orbital Luar (*Outer Orbital Complex*, $sp^3d^2$):**
     Menggunakan dua orbital $nd$ dari kulit terluar karena orbital $(n-1)d$ terisi penuh atau ligan tidak sanggup mendesak perpasangan elektron. Karakteristik: bersifat **spin tinggi (*high-spin*)** dan paramagnetik kuat.
     *Contoh:* $[\\ce{Fe(H2O)6}]^{2+}$ ($3d^6$ spin tinggi, paramagnetik dengan 4 elektron tak berpasangan).

---

### 📊 Matriks Komparasi Hibridisasi VBT Pauling

| Bilangan Koordinasi | Geometri Ruang | Tipe Hibridisasi | Tipe Kompleks | Konfigurasi Logam Contoh | Sifat Kemagnetan |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **4** | Tetrahedral | $sp^3$ | Orbital Luar | $[\\ce{NiCl4}]^{2-} (d^8), [\\ce{Zn(NH3)4}]^{2+} (d^{10})$ | Paramagnetik ($n=2$) / Diamagnetik |
| **4** | Bujur Sangkar | $dsp^2$ | Orbital Dalam | $[\\ce{Ni(CN)4}]^{2-} (d^8), [\\ce{Pt(NH3)4}]^{2+} (d^8)$ | Diamagnetik ($n=0$) |
| **6** | Oktahedral | $d^2sp^3$ | Orbital Dalam (*Inner*) | $[\\ce{Co(NH3)6}]^{3+} (d^6), [\\ce{Fe(CN)6}]^{3-} (d^5)$ | Low-Spin (Diamagnetik / Paramagnetik Lemah) |
| **6** | Oktahedral | $sp^3d^2$ | Orbital Luar (*Outer*) | $[\\ce{CoF6}]^{3-} (d^6), [\\ce{Fe(H2O)6}]^{3+} (d^5)$ | High-Spin (Paramagnetik Kuat, $n=4, 5$) |

---

### ❌ Mengapa VBT Runtuh dan Harus Digantikan CFT?

Meskipun model VBT Pauling sangat intuitif secara geometri, teori ini gagal total pada 3 pertanyaan krusial OSN/IChO:
1. **Kegagalan Eksplanasi Kekuatan Ligan:** Mengapa ion sianida $\\ce{CN-}$ mampu memaksa perpasangan elektron pada $\\ce{Ni^2+}$, sedangkan ion klorida $\\ce{Cl-}$ tidak mampu? VBT tidak memiliki dasar mekanika kuantum untuk menjelaskan hal ini.
2. **Kegagalan Eksplanasi Warna & Spektra:** Senyawa kompleks terkenal dengan warnanya yang menyala dan memukau (ungu ti(III), biru tembaga(II), hijau nikel(II)). VBT sama sekali tidak dapat memprediksi warna atau menghitung panjang gelombang serapan foton.
3. **Ketergantungan Magnetik terhadap Suhu:** Pengukuran suseptibilitas Curie-Weiss menunjukkan momen magnetik berubah terhadap temperatur, sesuatu yang mustahil dijelaskan oleh model ikatan kovalen statis VBT.

Kegagalan inilah yang melahirkan teori revolusioner berikutnya: **Teori Medan Kristal (*Crystal Field Theory* / CFT)**.

---

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Bujur Sangkar Logam 4d dan 5d
> - **Miskonsepsi Umum**: Siswa mengira ion logam berkonfigurasi $d^8$ selalu membentuk geometri tetrahedral jika ligannya ligan halogen lemah seperti $\\ce{Cl-}$.
> - **Kaidah yang Benar**: Untuk kation logam transisi periode ke-5 ($4d$, misal $\\ce{Pd^2+}$) dan periode ke-6 ($5d$, misal $\\ce{Pt^2+}, \\ce{Au^3+}$), pemisahan orbital $d$ begitu masif sehingga ion $d^8$ **selalu membentuk geometri bujur sangkar ($dsp^2$, diamagnetik)**, bahkan saat berikatan dengan ligan medan paling lemah sekalipun seperti $[\\ce{PtCl4}]^{2-}$!

---

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Indikator Kilat Inner vs Outer
> - Jika kation logam adalah ion $3d$ dengan ligan $\\pi$-akseptor kuat ($\ce{CN-}, \\ce{CO}, \\ce{NO2-}$): gunakan $d^2sp^3$ (orbital dalam, low-spin).
> - Jika kation logam $3d$ berikatan dengan ligan halogen atau air ($\ce{F-}, \\ce{Cl-}, \\ce{H2O}$): gunakan $sp^3d^2$ (orbital luar, high-spin).`,
      keyFormulas: [
        { name: 'Hibridisasi Bujur Sangkar', formula: 'dsp^2 \\implies \\text{Bujur Sangkar (Square Planar, Diamagnetik pada } d^8)' },
        { name: 'Hibridisasi Oktahedral Orbital Dalam', formula: 'd^2sp^3 \\implies \\text{Oktahedral Spin Rendah (Inner Orbital)}' },
      ],
    },
  ],
  core_concepts: [
    {
      tag: 'konsep-teori-medan-kristal-cft-oktahedral-tetrahedral',
      tags: ['teori-medan-kristal-cft', 'splitting-orbital-d', 'medan-oktahedral', 'medan-tetrahedral', 'medan-bujur-sangkar'],
      title: 'Konsep Inti 1: Teori Medan Kristal (CFT): Pemisahan Orbital d Geometri Oktahedral, Tetrahedral, & Bujur Sangkar',
      summary: 'Model elektrostatik pemecahan degenerasi 5 orbital d kation logam menjadi himpunan t2g-eg, e-t2, dan deret energi bujur sangkar.',
      checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_08['konsep-teori-medan-kristal-cft-oktahedral-tetrahedral'],
      content: `### ⚡ Medan Gaya Elektrostatik Bethe: Belahan Garpu Tala Orbital $d$ Oktahedral, Tetrahedral, & Bujur Sangkar

Teori Medan Kristal (*Crystal Field Theory* / CFT) yang dirumuskan oleh Hans Bethe (1929) dan J.H. van Vleck (1935) melakukan lompatan paradigma radikal: ligan tidak lagi dipandang sebagai penyedia pasangan elektron kovalen, melainkan sebagai **muatan titik negatif murni (*negative point charges*)** yang mendekati kation logam dari arah koordinat ruang tertentu.

Pada atom logam gas bebas, kelima orbital $d$ ($d_{xy}, d_{yz}, d_{xz}, d_{x^2-y^2}, d_{z^2}$) memiliki tingkat energi yang persis sama (**degenerasi rangkap lima**). Ketika ligan-ligan bermuatan negatif mendekat, medan elektrostatik ligan merusak kesetaraan simetri bola ini dan membelah energi orbital $d$!

---

### 🧭 1. Pemisahan Medan Oktahedral ($O_h$): Himpunan $t_{2g}$ dan $e_g$

Pada geometri oktahedral, 6 ligan mendekati ion logam pusat tepat di sepanjang sumbu kartesius $\\pm x, \\pm y,$ dan $\\pm z$:
- **Orbital Aksial $e_g$ ($d_{x^2-y^2}$ dan $d_{z^2}$):**
  Cuping orbital mengarah tepat di sepanjang sumbu kartesius. Karena berhadapan frontal langsung dengan muatan titik negatif ligan, elektron pada orbital ini mengalami tolakan elektrostatik maksimum. Energinya melonjak terdestabilkan sebesar:
  $$E(e_g) = +0.6 \\Delta_o \\quad \\left(+\\frac{3}{5}\\Delta_o \\text{ di atas barisentrum}\\right)$$
- **Orbital Non-Aksial $t_{2g}$ ($d_{xy}, d_{yz}, d_{xz}$):**
  Cuping orbital berada pada sudut $45^\\circ$ di antara sumbu kartesius, menyelinap di celah-celah kosong kedatangan ligan. Tolakan elektrostatik yang dialami jauh lebih lemah, sehingga energinya terstabilkan turun sebesar:
  $$E(t_{2g}) = -0.4 \\Delta_o \\quad \\left(-\\frac{2}{5}\\Delta_o \\text{ di bawah barisentrum}\\right)$$

Parameter pemisahan medan kristal oktahedral didefinisikan sebagai:
$$\\Delta_o = 10\\ Dq = E(e_g) - E(t_{2g})$$

*Kekekalan Barisentrum:*
$$3(-0.4\\Delta_o) + 2(+0.6\\Delta_o) = -1.2\\Delta_o + 1.2\\Delta_o = 0$$

---

### 🧭 2. Pemisahan Medan Tetrahedral ($T_d$): Pola Terbalik Inversi

Pada geometri tetrahedral, 4 ligan menempati sudut-sudut kubus berselang-seling. Tidak ada satu pun orbital $d$ yang mengarah tepat ke ligan. Namun, orbital non-aksial ($d_{xy}, d_{yz}, d_{xz}$) posisinya jauh lebih dekat ke arah datangnya ligan dibanding orbital aksial:
- **Orbital $t_2$ ($d_{xy}, d_{yz}, d_{xz}$):** Terangkat ke atas sebesar $+0.4 \\Delta_t$.
- **Orbital $e$ ($d_{x^2-y^2}, d_{z^2}$):** Turun ke bawah sebesar $-0.6 \\Delta_t$.
*(Catatan: label simetri pada medan tetrahedral tidak menggunakan subskrip '$g$' karena tetrahedral tidak memiliki pusat inversi centrosimetrik $i$)*.

**Hubungan Kuantitatif Fundamental:**
Karena hanya ada 4 ligan dan tidak ada tabrakan frontal segaris:
$$\\Delta_t = \\frac{4}{9} \\Delta_o \\approx 0.44 \\Delta_o$$

> [!IMPORTANT]
> Karena nilai $\\Delta_t$ selalu kurang dari separuh $\\Delta_o$, nilai pemisahan ini praktis **tidak pernah melampaui energi perpasangan elektron ($P$)**. Akibatnya: **Seluruh kompleks tetrahedral hampir selalu berkonfigurasi Spin Tinggi (*High-Spin*) murni!**

---

### 🧭 3. Pemisahan Medan Bujur Sangkar (*Square Planar*, $D_{4h}$)

Geometri bujur sangkar diturunkan secara teoretis dari geometri oktahedral dengan menarik kedua ligan aksial pada sumbu $z$ menjauh hingga tak hingga ($z$-elongasi ekstrem). Akibat hilangnya muatan negatif di sepanjang sumbu $z$:
- Seluruh orbital yang mengandung komponen $z$ ($d_{z^2}, d_{xz}, d_{yz}$) mengalami penurunan energi elektrostatik yang sangat drastis.
- Sebaliknya, empat ligan di bidang $xy$ merapat lebih dekat ke inti logam, menyebabkan orbital $d_{x^2-y^2}$ tertolak secara luar biasa hebat.

Urutan tingkat energi orbital $d$ bujur sangkar dari yang terendah ke yang tertinggi:
$$(d_{xz}, d_{yz}) < d_{z^2} < d_{xy} \\ll d_{x^2-y^2}$$

Celah energi antara $d_{xy}$ dan $d_{x^2-y^2}$ bernilai sangat besar ($\\Delta_{\\text{sp}} \\approx 1.3 \\Delta_o$). Hal ini menjelaskan secara gamblang mengapa kation $d^8$ (seperti $\\ce{Pt^2+}, \\ce{Pd^2+}, \\ce{Au^3+}$, dan $\\ce{Ni(CN)4^2-}$) sangat menyukai geometri bujur sangkar: delapan elektron mengisi penuh keempat orbital bawah dan menyisakan orbital berenergi tinggi $d_{x^2-y^2}$ kosong sempurna!

---

### 📊 Matriks Komparasi Pemisahan Orbital $d$ Antar-Geometri

| Parameter Pemisahan | Medan Oktahedral ($O_h$) | Medan Tetrahedral ($T_d$) | Medan Bujur Sangkar ($D_{4h}$) |
| :--- | :--- | :--- | :--- |
| **Jumlah Ligan** | 6 ligan aksial | 4 ligan sudut kubus | 4 ligan pada bidang $xy$ |
| **Orbital Energi Tertinggi** | $e_g$ ($d_{x^2-y^2}, d_{z^2}$) | $t_2$ ($d_{xy}, d_{yz}, d_{xz}$) | $d_{x^2-y^2}$ (destabilisasi masif) |
| **Orbital Energi Terendah** | $t_{2g}$ ($d_{xy}, d_{yz}, d_{xz}$) | $e$ ($d_{x^2-y^2}, d_{z^2}$) | $d_{xz}, d_{yz}$ (terstabilkan) |
| **Besar Pemisahan Energi** | $\\Delta_o$ ($10\\ Dq$) | $\\Delta_t = \\frac{4}{9}\\Delta_o$ | $\\Delta_{\\text{sp}} \\approx 1.3 \\Delta_o$ |
| **Karakter Spin** | High-Spin atau Low-Spin | Selalu High-Spin murni | Hampir selalu Low-Spin (Diamagnetik $d^8$) |

---

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Subskrip Paritas 'g'
> - **Miskonsepsi Umum**: Siswa menulis orbital tetrahedral sebagai $t_{2g}$ dan $e_g$.
> - **Kaidah yang Benar**: Geometri tetrahedral ($T_d$) tidak memiliki pusat inversi simetri ($i$). Huruf '$g$' (*gerade*, simetris terhadap inversi) dilarang digunakan pada tetrahedral. Gunakan label **$t_2$** dan **$e$** murni tanpa subskrip $g$.

---

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Mengingat Urutan Bujur Sangkar
> Gunakan mnemonik spasial: "Ligan ada di $xy$ murni!". Karena ligan bertumpu di sumbu $x$ dan $y$:
> - Orbital yang sejajar sumbu ligan ($d_{x^2-y^2}$) terlempar ke puncak energi paling atas.
> - Orbital $d_{xy}$ menyusul di bawahnya.
> - Orbital yang memiliki komponen sumbu $z$ ($d_{z^2}$ lalu $d_{xz}/d_{yz}$) jatuh ke dasar karena kedua ligan aksial telah dicabut!`,
      keyFormulas: [
        { name: 'Pemisahan Medan Oktahedral', formula: '\\Delta_o = E(e_g) - E(t_{2g}) = 10\\ Dq' },
        { name: 'Relasi Medan Tetrahedral & Oktahedral', formula: '\\Delta_t = \\frac{4}{9}\\Delta_o \\approx 0.44\\Delta_o' },
        { name: 'Pemisahan Bujur Sangkar', formula: '\\Delta_{\\text{sp}} \\approx 1.3\\Delta_o \\quad (d_{x^2-y^2} \\gg d_{xy})' },
      ],
    },
    {
      tag: 'konsep-cfse-spin-tinggi-rendah-deret-spektrokimia',
      tags: ['energi-penstabilan-cfse', 'spin-tinggi-rendah', 'deret-spektrokimia', 'energi-perpasangan-p', 'pi-donor-pi-akseptor'],
      title: 'Konsep Inti 2: Energi Penstabilan Medan Kristal (CFSE), Deret Spektrokimia, & Konfigurasi High-Spin vs Low-Spin',
      summary: 'Kalkulasi neraca kuantitatif CFSE, persaingan Delta dan energi perpasangan P, sifat ikatan pi-backbonding ligan kuat, dan konfigurasi d4-d7.',
      checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_08['konsep-cfse-spin-tinggi-rendah-deret-spektrokimia'],
      content: `### ⚖️ Neraca Energi Bank CFSE: Persaingan Celah $\\Delta_o$ vs Pajak Perpasangan $P$, & Trik Ikatan Balik $\\pi$

Energi Penstabilan Medan Kristal (*Crystal Field Stabilization Energy* / CFSE) adalah keuntungan termodinamika netto yang diraih kation logam ketika elektron-elektronnya menempati orbital $d$ yang telah terbelah dibandingkan dengan keadaan bola hipotetis tanpa pemisahan.

---

### 🧭 1. Formulasi Matematis Neraca CFSE Oktahedral:

$$\\text{CFSE} = \\left( -0.4 \\cdot n_{t_{2g}} + 0.6 \\cdot n_{e_g} \\right) \\Delta_o + m \\cdot P$$

di mana:
- $n_{t_{2g}}$: Jumlah elektron pada orbital $t_{2g}$ (masing-masing menyumbang stabilitas $-0.4\\Delta_o$).
- $n_{e_g}$: Jumlah elektron pada orbital $e_g$ (masing-masing menyumbang destabilisasi $+0.6\\Delta_o$).
- $P$: Energi perpasangan elektron (*pairing energy*), yaitu ongkos tolakan Coulombik dan pertukaran kuantum yang harus dibayar saat dua elektron dipaksa tinggal dalam satu orbital yang sama.
- $m$: Jumlah pasangan elektron **tambahan** yang terbentuk pada kompleks dibandingkan dengan konfigurasi ion gas bebas menurut Aturan Hund.

---

### 🧭 2. Persaingan $\\Delta_o$ vs $P$: Kapan Terjadi Ambiguitas Spin?

Perhatikan tabel konfigurasi elektron berikut. Pilihan antara spin tinggi (*high-spin*) dan spin rendah (*low-spin*) **hanya eksis pada ion $d^4, d^5, d^6,$ dan $d^7$**:

| Konfigurasi $d^n$ | High-Spin (Medan Lemah: $\\Delta_o < P$) | CFSE (HS) | Low-Spin (Medan Kuat: $\\Delta_o > P$) | CFSE (LS) |
| :---: | :---: | :---: | :---: | :---: |
| $d^1$ | $t_{2g}^1 e_g^0$ ($n=1$) | $-0.4\\Delta_o$ | Sama dengan HS | $-0.4\\Delta_o$ |
| $d^2$ | $t_{2g}^2 e_g^0$ ($n=2$) | $-0.8\\Delta_o$ | Sama dengan HS | $-0.8\\Delta_o$ |
| $d^3$ | $t_{2g}^3 e_g^0$ ($n=3$) | $-1.2\\Delta_o$ | Sama dengan HS | $-1.2\\Delta_o$ |
| **$d^4$** | $t_{2g}^3 e_g^1$ ($n=4$) | **$-0.6\\Delta_o$** | $t_{2g}^4 e_g^0$ ($n=2$) | **$-1.6\\Delta_o + 1P$** |
| **$d^5$** | $t_{2g}^3 e_g^2$ ($n=5$) | **$0.0\\Delta_o$** | $t_{2g}^5 e_g^0$ ($n=1$) | **$-2.0\\Delta_o + 2P$** |
| **$d^6$** | $t_{2g}^4 e_g^2$ ($n=4$) | **$-0.4\\Delta_o$** | $t_{2g}^6 e_g^0$ ($n=0$) | **$-2.4\\Delta_o + 2P$** |
| **$d^7$** | $t_{2g}^5 e_g^2$ ($n=3$) | **$-0.8\\Delta_o$** | $t_{2g}^6 e_g^1$ ($n=1$) | **$-1.8\\Delta_o + 1P$** |
| $d^8$ | $t_{2g}^6 e_g^2$ ($n=2$) | $-1.2\\Delta_o$ | Sama dengan HS | $-1.2\\Delta_o$ |
| $d^9$ | $t_{2g}^6 e_g^3$ ($n=1$) | $-0.6\\Delta_o$ | Sama dengan HS | $-0.6\\Delta_o$ |
| $d^{10}$ | $t_{2g}^6 e_g^4$ ($n=0$) | $0.0\\Delta_o$ | Sama dengan HS | $0.0\\Delta_o$ |

---

### 🧭 3. Deret Spektrokimia Ligan (*The Spectrochemical Series*)

Urutan kekuatan ligan dalam memperlebar celah energi $\\Delta_o$:
$$\\ce{I- < Br- < S^2- < SCN- < Cl- < NO3- < F- < OH- < ox^2- < H2O < NCS- < edta^4- < NH3 < en < bpy < phen < NO2- < PPh3 < CN- < CO}$$

**Mengapa urutannya demikian? Teori Medan Ligan (LFT) Berbasis Orbital Molekul:**
1. **Ligan $\\pi$-Donor (Medan Lemah):**
   Halogen ($\\ce{I^-, Br^-, Cl^-, F-}$), $\\ce{OH^-}, \\ce{S^2-}$ memiliki orbital $p$ penuh yang mendonorkan elektron ke orbital $t_{2g}$ logam melalui ikatan $\\pi$. Interaksi antibonding ini mengangkat energi orbital $t_{2g}$ ke atas mendekati $e_g$, sehingga celah $\\Delta_o$ menyempit (*weak field*).
2. **Ligan $\\sigma$-Only (Medan Sedang):**
   Ligan seperti $\\ce{NH3}$ dan etilendiamin hanya memiliki ikatan $\\sigma$ tanpa orbital $\\pi$ yang sesuai.
3. **Ligan $\\pi$-Akseptor (Medan Kuat):**
   Ligan seperti $\\ce{CO}, \\ce{CN-}, \\ce{NO2-}$ memiliki orbital molekul $\\pi^*$ kosong berenergi rendah yang menerima balik pasangan elektron dari orbital $t_{2g}$ logam (**ikatan balik $\\pi$ / $\\pi$-backbonding**). Interaksi bonding ini menstabilkan orbital $t_{2g}$ jatuh ke energi sangat rendah, sehingga celah $\\Delta_o$ melebar menjadi raksasa (*strong field*)!

---

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Menghitung Pasangan Elektron Tambahan ($m$)
> - **Miskonsepsi Umum**: Pada ion $d^6$ spin rendah ($t_{2g}^6 e_g^0$), siswa sering menulis suku perpasangan sebagai $+3P$ karena melihat ada 3 pasang elektron di $t_{2g}$.
> - **Kaidah yang Benar**: Pada ion gas bebas $\\ce{Fe^2+}$ ($d^6$), penataan alami menurut Aturan Hund sudah memiliki **1 pasang elektron**. Ketika membentuk kompleks low-spin dengan 3 pasang elektron, pasangan baru yang dibentuk secara paksa hanyalah $3 - 1 = 2$ pasang. Maka suku energinya adalah **$+2P$**, bukan $+3P$!

---

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Efek Baris Periode pada $\\Delta_o$
> - Nilai $\\Delta_o$ meningkat pesat saat menuruni golongan: $\\text{Logam } 3d < 4d < 5d$.
> - Untuk ion logam $4d$ (misal $\\ce{Rh^3+}, \\ce{Pd^2+}$) dan $5d$ (misal $\\ce{Ir^3+}, \\ce{Pt^2+}$), nilai $\\Delta_o$ meningkat sekitar $50\\%$ dibanding analog $3d$-nya. Akibatnya, kompleks logam $4d$ dan $5d$ **hampir selalu berkonfigurasi Spin Rendah (*Low-Spin*)**, terlepas apakah ligannya medan lemah atau kuat!`,
      keyFormulas: [
        { name: 'Rumus CFSE Oktahedral Lengkap', formula: '\\text{CFSE} = (-0.4 n_{t_{2g}} + 0.6 n_{e_g})\\Delta_o + mP' },
        { name: 'Kriteria Low-Spin vs High-Spin', formula: '\\Delta_o > P \\implies \\text{Low-Spin}, \\quad \\Delta_o < P \\implies \\text{High-Spin}' },
      ],
    },
    {
      tag: 'konsep-efek-jahn-teller-distorsi-tetragonal',
      tags: ['efek-jahn-teller', 'distorsi-tetragonal', 'elongasi-z', 'kompleks-cu2-d9', 'orbital-degenerasi'],
      title: 'Konsep Inti 3: Teorema Efek Jahn-Teller: Distorsi Tetragonal & Kinetika Kompleks Tembaga(II) (d9)',
      summary: 'Kajian kestabilan distorsi geometri spontan untuk menghilangkan degenerasi orbital molekul, elongasi aksial z, dan anomalitas struktur tembaga(II).',
      checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_08['konsep-efek-jahn-teller-distorsi-tetragonal'],
      content: `### 🕺 Goyangan Asimetris Jahn-Teller: Pemanjangan Kaki Aksial ($z$-Elongation) Penyelamat Kestabilan Tembaga(II) $d^9$

Pada tahun 1937, Hermann Arthur Jahn dan Edward Teller membuktikan sebuah teorema mekanika kuantum yang sangat elegan:
> *"Setiap molekul atau ion poliatomik non-linier yang berada dalam keadaan dasar elektronik terdegenerasi (memiliki orbital setara yang terisi elektron secara asimetris) bersifat tidak stabil dan **pasti akan mengalami distorsi geometris spontan** untuk menurunkan simetri molekul, menghilangkan degenerasi tersebut, dan mencapai tingkat energi yang lebih rendah."*

---

### 🧭 1. Kriteria Distorsi Jahn-Teller: Kapan Teramati Nyata?

Pengisian orbital tidak simetris dapat terjadi pada himpunan $t_{2g}$ atau $e_g$:
- **Distorsi Kuat (Dapat Diamati Nyata Secara Eksperimental via Difraksi Sinar-X):**
  Terjadi bila asimetri pengisian berada pada **orbital $e_g$** ($d_{x^2-y^2}$ dan $d_{z^2}$). Karena cuping $e_g$ mengarah tepat ke ligan, ketidaksamaan jumlah elektron langsung mengubah panjang ikatan secara drastis!
  - **$d^9$** ($t_{2g}^6 e_g^3$): Contoh utama ion $\\ce{Cu^2+}$.
  - **$d^4$ High-Spin** ($t_{2g}^3 e_g^1$): Contoh ion $\\ce{Cr^2+}, \\ce{Mn^3+}$.
  - **$d^7$ Low-Spin** ($t_{2g}^6 e_g^1$): Contoh ion $\\ce{Co^2+}$ medan kuat, $\\ce{Ni^3+}$.
- **Distorsi Sangat Lemah (Hampir Tidak Terdeteksi):**
  Terjadi bila asimetri pengisian hanya berada pada orbital $t_{2g}$ ($d^1, d^2$, low-spin $d^4, d^5$) karena cuping $t_{2g}$ berada di sela-sela sumbu sehingga pengaruhnya terhadap posisi ligan sangat teredam.
- **Nol Distorsi (Simetris Sempurna, Oktahedral Murni):**
  $d^3$ ($t_{2g}^3$), $d^5$ HS ($t_{2g}^3 e_g^2$), $d^6$ LS ($t_{2g}^6$), $d^8$ ($t_{2g}^6 e_g^2$, misal $\\ce{Ni^2+}$), $d^{10}$ ($t_{2g}^6 e_g^4$).

---

### 🧭 2. Mekanisme Distorsi Tetragonal Elongasi-$z$ (*Z-Out*) pada $\\ce{Cu^2+}$ ($d^9$)

Pada ion $[\\ce{Cu(H2O)6}]^{2+}$, konfigurasi elektronnya adalah $t_{2g}^6 e_g^3$.
Dua elektron $e_g$ dapat menempati $d_{z^2}$ sementara satu elektron menempati $d_{x^2-y^2}$:
1. Dua elektron pada orbital $d_{z^2}$ memberikan kerapatan muatan negatif yang lebih besar di sepanjang sumbu $z$.
2. Kedua ligan air pada sumbu $z$ terdorong menjauh (**elongasi-$z$**), sehingga jarak ikatan $\\ce{Cu-O}$ aksial memanjang drastis menjadi **$2.38\\text{ \\AA}$**.
3. Sebaliknya, empat ligan di bidang ekuatorial ditarik lebih dekat ke inti logam, memendek menjadi **$1.96\\text{ \\AA}$**.
4. Simetri molekul turun dari oktahedral reguler ($O_h$) menjadi tetragonal ($D_{4h}$).

**Pemecahan Tingkat Energi & Keuntungan Stabilisasi Jahn-Teller ($\\Delta E_{\\text{JT}}$):**
- Orbital $e_g$ terbelah menjadi $d_{x^2-y^2}$ (naik sebesar $+\\frac{1}{2}\\delta_1$) dan $d_{z^2}$ (turun sebesar $-\\frac{1}{2}\\delta_1$).
- Karena orbital berenergi rendah $d_{z^2}$ dihuni oleh **2 elektron** sedangkan orbital yang naik $d_{x^2-y^2}$ hanya dihuni oleh **1 elektron**:
  $$\\Delta E_{\\text{JT}} = 2\\left(-\\frac{1}{2}\\delta_1\\right) + 1\\left(+\\frac{1}{2}\\delta_1\\right) = -\\delta_1 + \\frac{1}{2}\\delta_1 = -\\frac{1}{2}\\delta_1$$
Sistem meraih penurunan energi termodinamika netto spontan sebesar **$\\frac{1}{2}\\delta_1$**!

---

### 📊 Matriks Analisis Kerentanan Efek Jahn-Teller

| Konfigurasi Ion | Pengisian $t_{2g}$ | Pengisian $e_g$ | Derajat Distorsi Jahn-Teller | Contoh Kation Logam Kompleks |
| :---: | :---: | :---: | :--- | :--- |
| **$d^3$** | Terisi simetris ($t_{2g}^3$) | Kosong ($e_g^0$) | **Nol (Tidak Ada)** | $[\\ce{Cr(H2O)6}]^{3+}$ (Oktahedral sempurna) |
| **$d^4$ HS** | Terisi simetris ($t_{2g}^3$) | **Asimetris ($e_g^1$)** | **Sangat Kuat (Elongasi-$z$)** | $[\\ce{Cr(H2O)6}]^{2+}, [\\ce{Mn(H2O)6}]^{3+}$ |
| **$d^6$ LS** | Terisi penuh ($t_{2g}^6$) | Kosong ($e_g^0$) | **Nol (Tidak Ada)** | $[\\ce{Fe(CN)6}]^{4-}, [\\ce{Co(NH3)6}]^{3+}$ |
| **$d^8$** | Terisi penuh ($t_{2g}^6$) | Terisi simetris ($e_g^2$) | **Nol (Tidak Ada)** | $[\\ce{Ni(H2O)6}]^{2+}$ (6 ikatan identik $2.05\\text{ \\AA}$) |
| **$d^9$** | Terisi penuh ($t_{2g}^6$) | **Asimetris ($e_g^3$)** | **Sangat Kuat (Elongasi-$z$)** | $[\\ce{Cu(H2O)6}]^{2+}$ (4 pendek $1.96\\text{ \\AA}$, 2 panjang $2.38\\text{ \\AA}$) |

---

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Mengapa $d^8$ $[\\ce{Ni(H2O)6}]^{2+}$ Bebas Jahn-Teller?
> - **Miskonsepsi Umum**: Siswa sering menyimpulkan bahwa semua kompleks logam transisi akhir ($d^7, d^8, d^9$) mengalami distorsi Jahn-Teller.
> - **Kaidah yang Benar**: Pada ion $d^8$ ($t_{2g}^6 e_g^2$), kedua elektron $e_g$ menempati masing-masing satu orbital secara paralel ($d_{z^2}^1 d_{x^2-y^2}^1$) menurut Aturan Hund. Karena kedua orbital $e_g$ terisi sama rata dan simetris, kerapatan elektron ke arah sumbu $z$ dan sumbu $xy$ adalah identik. Tidak ada degenerasi orbital, sehingga $[\\ce{Ni(H2O)6}]^{2+}$ memiliki 6 ikatan yang persis sama panjang ($O_h$ sejati)!

---

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Dinamika Jahn-Teller pada Larutan
> Pada fase larutan encer, kompleks $[\\ce{Cu(H2O)6}]^{2+}$ mengalami **Efek Jahn-Teller Dinamis**: sumbu elongasi berganti-ganti secara acak dan sangat cepat antara sumbu $x, y,$ dan $z$ ($> 10^9\\text{ kali/detik}$). Distorsi statis 4 pendek-2 panjang baru teramati beku sempurna saat dianalisis dalam kisi kristal padat melalui difraksi sinar-X atau spektroskopi EPR pada suhu rendah.`,
      keyFormulas: [
        { name: 'Energi Penstabilan Jahn-Teller d9', formula: '\\Delta E_{\\text{JT}} = -\\frac{1}{2}\\delta_1 < 0' },
        { name: 'Konfigurasi Jahn-Teller Terkuat', formula: 'd^9 \\ (t_{2g}^6 e_g^3), \\quad d^4 \\text{ HS } (t_{2g}^3 e_g^1), \\quad d^7 \\text{ LS } (t_{2g}^6 e_g^1)' },
      ],
    },
    {
      tag: 'konsep-kemagnetan-warna-spektra-elektronik',
      tags: ['momen-magnetik-spin-only', 'paramagnetik-diamagnetik', 'spektra-elektronik-d-d', 'warna-senyawa-kompleks', 'aturan-laporte'],
      title: 'Konsep Inti 4: Sifat Kemagnetan (Momen Magnetik Spin-Only) & Asal Usul Warna Kompleks (Transisi d-d & CT)',
      summary: 'Formula momen magnetik spin-only mu_eff, spektroskopi absorpsi transisi d-d, aturan seleksi Laporte dan spin, serta transfer muatan (LMCT/MLCT).',
      checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_08['konsep-kemagnetan-warna-spektra-elektronik'],
      content: `### 🧲 Kompas Kuantum Spin $\\mu_{\\text{eff}}$ & Pelangi Fotometrik Transisi $d-d$ vs Ledakan Warna Transfer Muatan (CT)

Dua manifestasi fisik paling spektakuler dari senyawa koordinasi adalah respons kemagnetannya dalam medan magnet eksternal dan warnanya yang memikat.

---

### 🧭 1. Momen Magnetik Spin Murni (*Spin-Only Magnetic Moment* $\\mu_{\\text{eff}}$):

Dalam ion logam transisi baris pertama ($3d$), kontribusi momentum sudut orbital teredam (*quenched*) oleh medan ligan sekitar. Momen magnetik efektif praktis hanya ditentukan oleh spin elektron tak berpasangan ($n$):
$$\\mu_{\\text{eff}} = \\sqrt{n(n + 2)} \\ \\mu_B$$
di mana $\\mu_B$ adalah Magneton Bohr ($e\\hbar / 2m_e = 9.274 \\times 10^{-24}\\text{ J/T}$).

**Tabel Cepat Nilai $\\mu_{\\text{eff}}$ vs Jumlah Elektron Tak Berpasangan:**
- $n = 0 \\implies \\mu_{\\text{eff}} = 0.00\\ \\mu_B$ (**Diamagnetik**, ditolak lemah oleh medan magnet).
- $n = 1 \\implies \\mu_{\\text{eff}} = \\sqrt{3} \\approx 1.73\\ \\mu_B$ ($[\\ce{Ti(H2O)6}]^{3+}, [\\ce{Cu(H2O)6}]^{2+}$).
- $n = 2 \\implies \\mu_{\\text{eff}} = \\sqrt{8} \\approx 2.83\\ \\mu_B$ ($[\\ce{Ni(H2O)6}]^{2+}, [\\ce{V(H2O)6}]^{3+}$).
- $n = 3 \\implies \\mu_{\\text{eff}} = \\sqrt{15} \\approx 3.87\\ \\mu_B$ ($[\\ce{Cr(H2O)6}]^{3+}$).
- $n = 4 \\implies \\mu_{\\text{eff}} = \\sqrt{24} \\approx 4.90\\ \\mu_B$ ($[\\ce{Fe(H2O)6}]^{2+}$ HS).
- $n = 5 \\implies \\mu_{\\text{eff}} = \\sqrt{35} \\approx 5.92\\ \\mu_B$ ($[\\ce{Mn(H2O)6}]^{2+}, [\\ce{Fe(H2O)6}]^{3+}$ HS).

---

### 🧭 2. Asal Usul Warna: Eksitasi Transisi Elektronik $d-d$

Ketika foton cahaya polikromatik tampak melewati larutan kompleks, molekul menyerap panjang gelombang foton tertentu yang energinya persis sama dengan celah pemisahan medan kristal ($\\Delta_o$):
$$\\Delta_o = h \\nu = \\frac{h c}{\\lambda_{\\text{serap}}}$$

Mata manusia melihat **warna komplementer** dari panjang gelombang yang diserap:
- Menyerap foton Merah ($~700\\text{ nm}$) $\\implies$ tampak Hijau-Biru.
- Menyerap foton Hijau-Kuning ($~500\\text{ nm}$) $\\implies$ tampak **Ungu / Violet** (contoh klasik $[\\ce{Ti(H2O)6}]^{3+}$).
- Menyerap foton Biru ($~450\\text{ nm}$) $\\implies$ tampak Kuning-Jingga.

---

### 🧭 3. Dua Aturan Seleksi Spektroskopi (Intensitas Warna):

1. **Aturan Seleksi Laporte (Paritas):**
   Pada molekul yang memiliki pusat simetri inversi ($i$, seperti oktahedral reguler), transisi optis hanya diizinkan jika terjadi perubahan paritas ($\\Delta l = \\pm 1$, misal $s \\to p$ atau $p \\to d$). Karena seluruh orbital $d$ berparitas *gerade* ($g$), transisi $d \\to d$ ($g \\to g$) sebenarnya **terlarang oleh Laporte**. Namun, getaran vibrasi molekul merusak pusat simetri sesaat (*vibronic coupling*), sehingga transisi $d-d$ tetap terjadi dengan intensitas sedang (koefisien ekstingsi molar $\\varepsilon \\approx 1 - 100\\text{ M}^{-1}\\text{cm}^{-1}$).
2. **Aturan Seleksi Spin:**
   Transisi optis terlarang jika melibatkan perubahan jumlah spin total elektron ($\\Delta S = 0$).
   *Contoh:* Ion $\\ce{Mn^2+}$ ($d^5$ spin tinggi, $S = 5/2$). Seluruh 5 orbital $d$ terisi 1 elektron paralel. Eksitasi ke orbital lain mengharuskan pembalikan spin ($\\Delta S \\neq 0$). Karena terlarang Laporte dan terlarang Spin ganda, larutan $\\ce{Mn^2+}$ berwarna **merah muda sangat pucat** hampir tak terlihat ($\\varepsilon < 1\\text{ M}^{-1}\\text{cm}^{-1}$).

---

### 🧭 4. Pita Transfer Muatan (*Charge Transfer* / CT Bands): Warna Paling Menyala

Jika Anda melihat senyawa kompleks yang warnanya luar biasa pekat, gelap, dan menyala seperti ion permanganat ($\\ce{MnO4-}$ ungu pekat) atau ion dikromat ($\\ce{Cr2O7^2-}$ jingga terang), warna tersebut **BUKAN transisi $d-d$** (karena $\\ce{Mn(VII)}$ dan $\\ce{Cr(VI)}$ adalah ion $d^0$ tanpa elektron $d$!).
- Warna menyala ini disebabkan oleh **Transfer Muatan Ligan-ke-Logam (*Ligand-to-Metal Charge Transfer* / LMCT)**: foton mengeksitasi elektron dari orbital molekul berbasis ligan oksigen ke orbital kosong kation logam.
- Transisi CT diizinkan penuh oleh Laporte dan Spin, menghasilkan intensitas raksasa ($\\varepsilon > 10,000\\text{ M}^{-1}\\text{cm}^{-1}$).

---

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Mengapa $KMnO_4$ Berwarna Walaupun $d^0$?
> - **Miskonsepsi Umum**: Siswa menulis bahwa warna ungu kalium permanganat dihasilkan oleh eksitasi elektron $d-d$ kation mangan.
> - **Kaidah yang Benar**: Mangan pada $\\ce{MnO4-}$ memiliki bilangan oksidasi $+7$ dengan konfigurasi elektron $[\\ce{Ar}] 3d^0$. Karena tidak memiliki satu pun elektron pada subkulit $d$, transisi $d-d$ mutlak mustahil terjadi. Warna ungu tua dihasilkan oleh **pita transfer muatan LMCT** dari orbital molekul terisi ligan $\\ce{O^2-}$ ke orbital kosong logam $\\ce{Mn^7+}$.

---

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Lingkaran Warna Komplementer Newton
> Ingat roda warna berseberangan:
> - Merah $\\leftrightarrow$ Hijau
> - Jingga $\\leftrightarrow$ Biru
> - Kuning $\\leftrightarrow$ Ungu (Violet)
> Jika kompleks menyerap panjang gelombang $500\\text{ nm}$ (wilayah hijau), larutan akan meneruskan warna berseberangannya yaitu **merah-ungu (violet)**!`,
      keyFormulas: [
        { name: 'Momen Magnetik Spin Murni', formula: '\\mu_{\\text{eff}} = \\sqrt{n(n+2)}\\ \\mu_B' },
        { name: 'Energi Absorbsi Transisi d-d', formula: '\\Delta_o = \\frac{hc}{\\lambda_{\\text{serap}}} = h c \\tilde{\\nu}' },
      ],
    },
    {
      tag: 'konsep-isomerisme-kinetika-efek-trans',
      tags: ['isomer-geometri', 'isomer-optis', 'cis-trans-fac-mer', 'kinetika-substitusi-ligan', 'efek-trans'],
      title: 'Konsep Inti 5: Isomerisme Struktural & Stereoisomerisme Kompleks, Kinetika Substitusi, & Efek Trans',
      summary: 'Analisis geometri cis-trans, fac-mer, kiralitas optis enantiomer khelat, serta kontrol kinetika efek trans pada sintesis platina bujur sangkar.',
      checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_08['konsep-isomerisme-kinetika-efek-trans'],
      content: `### ♟️ Papan Catur Isomer Geometri-Optis & Pistol Kinetika Efek Trans dalam Sintesis Cisplatin

Struktur senyawa koordinasi kaya akan variasi tata ruang tiga dimensi. Pemahaman stereokimia ini menjadi sangat krusial dalam dunia medis, di mana satu isomer dapat menjadi obat penyelamat jiwa sedangkan isomernya tidak aktif atau bahkan beracun.

---

### 🧭 1. Klasifikasi Stereoisomerisme Senyawa Koordinasi:

1. **Isomerisme Geometris (*Cis-Trans* & *Fac-Mer*):**
   - **Bujur Sangkar $[\\ce{MA2B2}]$:**
     - *cis*: Dua ligan identik bersebelahan (sudut $\\angle \\ce{A-M-A} = 90^\\circ$). Contoh: **Cisplatin** (*cis*-$[\\ce{Pt(NH3)2Cl2}]$), obat kemoterapi kanker aktif dengan momen dipol polar ($\\mu > 0$).
     - *trans*: Dua ligan identik berseberangan (sudut $\\angle \\ce{A-M-A} = 180^\\circ$). Contoh: **Transplatin**, non-polar ($\\mu = 0$) dan tidak aktif sebagai antikanker.
   - **Oktahedral $[\\ce{MA4B2}]$:** Memiliki isomer *cis* ($90^\\circ$) dan *trans* ($180^\\circ$).
   - **Oktahedral $[\\ce{MA3B3}]$:**
     - *Facial* (*fac*): Tiga ligan identik menempati tiga sudut dari satu muka bidang segitiga oktahedron yang sama (seluruh sudut $\\angle \\ce{A-M-A} = 90^\\circ$).
     - *Meridional* (*mer*): Tiga ligan identik berada pada satu bidang meridian keliling yang membelah pusat oktahedron (dua sudut $90^\\circ$ dan satu sudut $180^\\circ$).

2. **Isomerisme Optis (Kiralitas & Enantiomer):**
   Kompleks bersifat **kiral (aktif optis)** jika tidak memiliki bidang simetri internal ($\\sigma$) maupun pusat inversi ($i$):
   - Kompleks tris-kelat $[\\ce{M(AA)3}]^{n+}$ (seperti $[\\ce{Co(en)3}]^{3+}$): Memiliki struktur menyerupai baling-baling tiga bilah kiral dengan sepasang enantiomer non-superimposabel, dilabeli **$\\Delta$ (delta, putar kanan)** dan **$\\Lambda$ (lambda, putar kiri)**.
   - Kompleks bis-kelat $[\\ce{M(AA)2B2}]$:
     - Isomer *trans*: Memiliki pusat inversi ($i$) dan bidang cermin $\\sigma_h \\implies$ **Akiral (optis tidak aktif)**.
     - Isomer *cis*: Tidak memiliki bidang cermin maupun pusat inversi $\\implies$ **Kiral (aktif optis)**, eksis sebagai sepasang enantiomer $\\Delta$ dan $\\Lambda$.

---

### 🧭 2. Kinetika Substitusi Ligan & Efek Trans (*The Trans Effect*)

Pada kompleks bujur sangkar Platina(II), laju substitusi ligan yang berada pada posisi *trans* terhadap ligan pengarah ($T$) dipengaruhi secara dramatis oleh identitas ligan $T$ tersebut.
$$\\text{Deret Kekuatan Pengarah Trans:}$$
$$\\ce{H2O < OH- < NH3 < py < Cl- < Br- < I- < CH3- < H- < NO2- < PPh3 < C2H4 \\approx CN- \\approx CO}$$

**Dua Pilar Mekanisme Efek Trans:**
1. **Pengaruh Keadaan Dasar (*Trans Influence*, Termodinamika):** Ligan donor-$\\sigma$ kuat mempolarisasi kerapatan elektron kation logam, melemahkan ikatan $\\ce{M-L}$ tepat di seberangnya sehingga ikatan tersebut menjadi labil dan mudah putus.
2. **Pengaruh Keadaan Transisi (*Trans Effect Kinetik*):** Ligan akseptor-$\\pi$ kuat ($\ce{CO}, \\ce{C2H4}, \\ce{CN-}$) menstabilkan keadaan transisi bipiramida trigonal bersimetri 5 via delokalisasi elektron ikatan balik $\\pi$, menurunkan energi aktivasi reaksi secara masif.

---

### 🎯 Sintesis Terarah: Cisplatin vs Transplatin via Efek Trans

Berdasarkan deret: $\\mathbf{\\ce{Cl- > NH3}}$. Ligan kloro memiliki efek trans yang jauh lebih unggul dibandingkan amonia.

1. **Sintesis Selektif Cisplatin (*cis*-$[\\ce{Pt(NH3)2Cl2}]$):**
   - *Bahan Awal:* $[\\ce{PtCl4}]^{2-}$.
   - *Tahap 1:* Reaksikan dengan $1\\ce{NH3} \\implies [\\ce{PtCl3(NH3)}]-$.
   - *Tahap 2:* Masukkan molekul $\\ce{NH3}$ kedua. Ligan $\\ce{Cl-}$ memiliki efek trans lebih kuat dibanding $\\ce{NH3}$. Maka ligan $\\ce{Cl-}$ mengarahkan $\\ce{NH3}$ kedua masuk menggantikan $\\ce{Cl-}$ yang berada di seberang $\\ce{Cl-}$ lainnya (posisi *trans* terhadap klorida, yang otomatis berada pada posisi *cis* terhadap $\\ce{NH3}$ pertama).
   - *Produk Akhir:* Murni **Cisplatin**!

2. **Sintesis Selektif Transplatin (*trans*-$[\\ce{Pt(NH3)2Cl2}]$):**
   - *Bahan Awal:* $[\\ce{Pt(NH3)4}]^{2+}$.
   - *Tahap 1:* Reaksikan dengan $1\\ce{Cl-} \\implies [\\ce{Pt(NH3)3Cl}]+$.
   - *Tahap 2:* Masukkan ion $\\ce{Cl-}$ kedua. Ligan $\\ce{Cl-}$ yang baru masuk memiliki efek trans jauh melampaui ketiga ligan $\\ce{NH3}$. Ligan $\\ce{Cl-}$ tersebut langsung melabilkan ligan $\\ce{NH3}$ yang tepat berada di seberangnya, sehingga ion $\\ce{Cl-}$ kedua masuk tepat di posisi *trans*.
   - *Produk Akhir:* Murni **Transplatin**!

---

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Efek Trans vs Trans Influence
> - **Miskonsepsi Umum**: Siswa menyamakan *Trans Effect* dengan *Trans Influence*.
> - **Kaidah yang Benar**:
>   - *Trans Influence* adalah fenomena **termodinamika keadaan dasar** (diukur dari pemanjangan ikatan pada kristalografi XRD atau pergeseran frekuensi vibrasi FTIR ikatan $\\ce{M-L}$ trans).
>   - *Trans Effect* adalah fenomena **kinetika laju reaksi** (diukur dari laju konstanta penggantian ligan trans pada reaksi substitusi).

---

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Formula Cepat Isomer Kiral Oktahedral
> Untuk kompleks tipe $[\\ce{M(AA)2B2}]$:
> - Bentuk *trans* selalu simetris (akiral).
> - Bentuk *cis* selalu asimetris baling-baling (kiral, sepasang enantiomer).
> - Total stereoisomer $= 1\\text{ (trans)} + 2\\text{ (enantiomer cis)} = 3\\text{ stereoisomer}$.`,
      keyFormulas: [
        { name: 'Deret Pengarah Trans', formula: '\\ce{CO \\approx CN- \\approx C2H4 > PPh3 > NO2- > I- > Br- > Cl- > NH3 > H2O}' },
        { name: 'Kriteria Kiralitas Kompleks', formula: '\\text{Kiral} \\iff \\text{Tidak memiliki } \\sigma \\text{ (bidang cermin) dan } i \\text{ (pusat inversi)}' },
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
      summary: 'Kajian kuantitatif struktur kluster polihedral: Aturan Wade-Mingos (PSEPT) menghitung pasangan elektron kerangka (SEP) closo, nido, arachno, dan hypho, derajat kovalensi ikatan via deret nefelauxetik parameter Racah (B), serta mekanisme tahapan siklus katalisis organologam homogen.',
      checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_08['kluster-boran-wade-mingos-organologam'],
      content: `### 🏗️ Arsitektur Sangkar Borana Wade-Mingos (PSEPT), Balon Elektron Nefelauxetik Racah, & Siklus Mesin Katalisis Wilkinson

Pada tingkat kompetisi nasional dan internasional (OSN/IChO), kimia anorganik meluas melampaui kompleks koordinasi klasik menuju kimia kluster polihedral, derajat kovalensi spektroskopi interelektronik, dan siklus katalisis organologam homogen modern.

---

### 🧭 1. Aturan Wade-Mingos (Polyhedral Skeletal Electron Pair Theory / PSEPT):

Senyawa kluster borana bersifat **kekurangan elektron (*electron-deficient*)**, di mana atom-atom boron diikat oleh ikatan terdelokalisasi multisentris (seperti ikatan 3-pusat 2-elektron, 3c-2e). Geometri sangkarnya dikendalikan oleh jumlah **Pasangan Elektron Kerangka (*Skeletal Electron Pairs*, SEP)**.

**Metode Menghitung Elektron Kerangka (Skeletal Electrons):**
- Setiap unit verteks $\\ce{B-H}$ menyumbangkan **2 elektron kerangka** (dari 3 elektron valensi boron, 1 dipakai untuk ikatan terminal $\\ce{B-H}$, menyisakan 2 untuk kerangka sangkar).
- Setiap atom hidrogen jembatan ($\\ce{H_{bridge}}$) menyumbangkan **1 elektron kerangka**.
- Setiap muatan negatif bersih menyumbangkan **1 elektron kerangka per muatan**.
- Setiap fragmen isoelektronik $\\ce{C-H}$ (pada karborana) menyumbangkan **3 elektron kerangka**.

**Klasifikasi Polihedron Kluster Berdasarkan Verteks ($n$):**
1. **Kluster *Closo* ($n + 1$ pasang elektron kerangka / $2n + 2$ elektron):**
   Membentuk deltahedron tertutup sempurna dengan $n$ verteks. Rumus umum: $\\ce{[B_n H_n]^2-}$ atau karborana $\\ce{C2B_{n-2}H_n}$.
   *Contoh:* $\\ce{[B6H6]^2-}$ ($n=6, \\text{SEP} = 7 \\implies$ Oktahedron tertutup).
2. **Kluster *Nido* ($n + 2$ pasang elektron kerangka / $2n + 4$ elektron):**
   Struktur sangkar sarang burung terbuka, diturunkan dari deltahedron *closo* berverteks $(n+1)$ yang **kehilangan 1 verteks**. Rumus umum: $\\ce{B_n H_{n+4}}$.
   *Contoh:* Pentaborana(9) $\\ce{B5H9}$ ($n=5, \\text{SEP} = 7 \\implies$ oktahedron minus 1 puncak = piramida bujur sangkar).
3. **Kluster *Arachno* ($n + 3$ pasang elektron kerangka / $2n + 6$ elektron):**
   Struktur sangkar jaring laba-laba sangat terbuka, diturunkan dari deltahedron *closo* berverteks $(n+2)$ yang **kehilangan 2 verteks**. Rumus umum: $\\ce{B_n H_{n+6}}$.
   *Contoh:* Tetraborana(10) $\\ce{B4H10}$ ($n=4, \\text{SEP} = 7 \\implies$ oktahedron minus 2 puncak).
4. **Kluster *Hypho* ($n + 4$ pasang elektron kerangka / $2n + 8$ elektron):**
   Kluster jaring ekstra terbuka, kehilangan 3 verteks dari deltahedron induk.

---

### 🧭 2. Parameter Racah ($B$) & Efek Nefelauxetik:

Repulsi antar-elektron dalam subkulit $d$ kation logam transisi dirumuskan secara spektroskopis oleh Giulio Racah melalui parameter interelektronik $A, B, C$.
- Parameter Racah $B$ mengukur besarnya tolakan elektrostatik antar-elektron dalam orbital $d$.
- Pada ion logam gas bebas murni, parameter ini bernilai $B_0$.
- Ketika ligan membentuk ikatan kovalen koordinasi dengan logam, tumpang tindih orbital menyebabkan awan elektron $d$ berekspansi ke arah ligan. Fenomena pemekaran awan elektron ini disebut **Efek Nefelauxetik (*cloud-expanding effect*)**.
- **Rasio Nefelauxetik ($\\beta$):**
  $$\\beta = \\frac{B_{\\text{kompleks}}}{B_0} < 1$$
Semakin kecil nilai $\\beta$, semakin masif ekspansi awan elektron, menandakan **derajat kovalensi ikatan yang semakin tinggi**!

$$\\text{Deret Nefelauxetik Ligan (Kovalensi Meningkat):}$$
$$\\ce{F- < H2O < NH3 < en < ox^2- < NCS- < Cl- < CN- < Br- < I-}$$
Ligan iodida dan bromida sangat terpolarisasi, menghasilkan derajat kovalensi ikatan paling kuat dan nilai $\\beta$ terkecil.

---

### 🧭 3. Tahapan Siklus 4-Tak Katalisis Organologam Homogen:

Katalis organologam modern (seperti Katalis Wilkinson $[\\ce{RhCl(PPh3)3}]$ untuk hidrogenasi alkena) beroperasi melalui siklus 4 reaksi elementer mandiri:
1. **Adisi Oksidatif (*Oxidative Addition*):**
   Molekul substrat kovalen non-polar $\\ce{X-Y}$ (misal $\\ce{H2}$) berikatan ke pusat logam koordinatif tak jenuh.
   $$\\ce{L_n M^{m} + X-Y -> L_n M^{m+2}(X)(Y)}$$
   *Karakteristik:* Biloks logam naik $+2$, bilangan koordinasi naik $+2$, elektron valensi naik $+2e^-$.
2. **Insersi Migrasi (*Migratory Insertion*):**
   Ligan tak jenuh terkoordinasi (seperti alkena $\\ce{H2C=CH2}$) menyusup ke dalam ikatan tetangganya $\\ce{M-H}$ atau $\\ce{M-R}$.
   *Karakteristik:* Biloks logam tetap konstan, bilangan koordinasi turun $-1$, membuka situs koordinasi kosong baru.
3. **Eliminasi $\\beta$-Hidrida (*$\\beta$-Hydride Elimination*):**
   Atom hidrogen pada karbon-$\\beta$ dari rantai alkil ditransfer ke pusat logam, melepaskan alkena dan membentuk ligan hidrida baru (kebalikan dari insersi migrasi).
4. **Eliminasi Reduktif (*Reductive Elimination*):**
   Dua ligan cis (misal alkil dan hidrida membentuk alkana $\\ce{R-H}$) bergabung membentuk ikatan tunggal baru dan lepas dari kompleks logam.
   $$\\ce{L_n M^{m+2}(R)(H) -> L_n M^{m} + R-H}$$
   *Karakteristik:* Biloks logam turun $-2$, bilangan koordinasi turun $-2$, elektron valensi turun $-2e^-$, meregenerasi spesi katalis aktif awal untuk siklus berikutnya!

---

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN: Biloks pada Insersi Migrasi
> - **Miskonsepsi Umum**: Siswa sering mengira bahwa tahap insersi migrasi mengubah bilangan oksidasi pusat logam.
> - **Kaidah yang Benar**: Tahap insersi migrasi murni merupakan penataan ulang intramolekular ligan: **bilangan oksidasi logam tidak berubah sama sekali!** Perubahan biloks ($\pm 2$) hanya terjadi pada tahap adisi oksidatif ($+2$) dan eliminasi reduktif ($-2$).

---

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Formula Kilat Menghitung SEP Wade
> Hitung total elektron valensi kerangka:
> 1. Jumlahkan: $(\\text{Jumlah atom B} \\times 3) + (\\text{Jumlah atom H} \\times 1) + (\\text{Muatan negatif bersih})$.
> 2. Kurangkan $2e^-$ untuk setiap ikatan terminal $\\ce{B-H}$ (yaitu $2 \\times n$).
> 3. Bagi sisa elektron dengan 2 untuk mendapatkan **SEP**.
> 4. Bandingkan dengan jumlah verteks $n$: jika $\\text{SEP} = n+1$ (*closo*), $n+2$ (*nido*), $n+3$ (*arachno*).`,
      keyFormulas: [
        { name: 'SEP Aturan Wade-Mingos', formula: '\\text{SEP} = n + 1 \\text{ (closo)}, \\quad n + 2 \\text{ (nido)}, \\quad n + 3 \\text{ (arachno)}' },
        { name: 'Rasio Nefelauxetik Racah', formula: '\\beta = \\frac{B_{\\text{kompleks}}}{B_{\\text{ion gas bebas}}} < 1' },
      ],
    },
  ],
  worked_examples: [
    {
      tag: 'soal-cft-fe-d6-spin-tinggi-rendah',
      tags: ['soal-osk', 'soal-cft-d6', 'cfse-stabilisasi', 'spin-tinggi-rendah', 'deret-spektrokimia'],
      title: 'Contoh Soal OSK 1: Analisis Medan Kristal d6 Kompleks Besi(II): CFSE, Momen Magnetik, & Deret Spektrokimia',
      summary: 'Kalkulasi energi penstabilan medan kristal CFSE, konfigurasi t2g-eg, momen magnetik spin murni, dan komparasi sifat magnetik kompleks d6.',
      checkpointQuizzes: undefined,
      content: `### 📋 Skenario & Data Eksperimen:
Ion besi(II) ($\\ce{Fe^2+}$, nomor atom $Z = 26$) memiliki konfigurasi elektron kulit valensi $3d^6$. Diketahui data spektroskopis:
- Energi perpasangan elektron rata-rata untuk $\\ce{Fe^2+}$: $P = 17,600\\text{ cm}^{-1}$.
- Parameter pemisahan medan oktahedral untuk $[\\ce{Fe(H2O)6}]^{2+}$: $\\Delta_o = 10,400\\text{ cm}^{-1}$.
- Parameter pemisahan medan oktahedral untuk $[\\ce{Fe(CN)6}]^{4-}$: $\\Delta_o = 32,800\\text{ cm}^{-1}$.
*(Faktor konversi energi: $1\\text{ cm}^{-1} = 0.01196\\text{ kJ/mol}$).*

---

### 🎯 Pertanyaan:
1. Tentukan apakah $[\\ce{Fe(H2O)6}]^{2+}$ dan $[\\ce{Fe(CN)6}]^{4-}$ membentuk kompleks spin tinggi (*high-spin*) atau spin rendah (*low-spin*) dengan membandingkan nilai $\\Delta_o$ terhadap $P$!
2. Gambarkan diagram pengisian elektron pada orbital $t_{2g}$ dan $e_g$ serta tentukan jumlah elektron tak berpasangan ($n$) untuk masing-masing kompleks!
3. Hitung momen magnetik spin murni ($\\mu_{\\text{eff}}$) dalam satuan Magneton Bohr ($\\mu_B$) dan nyatakan sifat kemagnetannya (paramagnetik atau diamagnetik)!
4. Hitung nilai Energi Penstabilan Medan Kristal (CFSE) untuk kedua ion kompleks dalam satuan $\\text{cm}^{-1}$ dan $\\text{kJ/mol}$, dengan memperhitungkan kontribusi energi perpasangan elektron ($P$)!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Evaluasi Spin Tinggi vs Spin Rendah
Bandingkan celah medan kristal $\\Delta_o$ terhadap energi perpasangan elektron $P$:
- Untuk $[\\ce{Fe(H2O)6}]^{2+}$:
  $$\\Delta_o = 10,400\\text{ cm}^{-1} < P = 17,600\\text{ cm}^{-1}$$
  Karena $\\Delta_o < P$, biaya melompati celah ke $e_g$ lebih murah dibanding ongkos perpasangan elektron. Kompleks mengadopsi konfigurasi **Spin Tinggi (*High-Spin*)**.
- Untuk $[\\ce{Fe(CN)6}]^{4-}$:
  $$\\Delta_o = 32,800\\text{ cm}^{-1} > P = 17,600\\text{ cm}^{-1}$$
  Karena $\\Delta_o > P$, celah energi sangat lebar sehingga elektron dipaksa berpasangan di orbital bawah $t_{2g}$. Kompleks mengadopsi konfigurasi **Spin Rendah (*Low-Spin*)**.

#### Langkah 2: Konfigurasi Elektron & Jumlah Elektron Tak Berpasangan ($n$)
- **$[\\ce{Fe(H2O)6}]^{2+}$ (Spin Tinggi):**
  Elektron mengisi orbital mematuhi Aturan Hund sebelum berpasangan:
  $$t_{2g}^4 e_g^2 \\implies \\text{Jumlah elektron tak berpasangan } n = 4$$
- **$[\\ce{Fe(CN)6}]^{4-}$ (Spin Rendah):**
  Seluruh 6 elektron valensi berpasangan sempurna di orbital berenergi rendah:
  $$t_{2g}^6 e_g^0 \\implies \\text{Jumlah elektron tak berpasangan } n = 0$$

#### Langkah 3: Menghitung Momen Magnetik Spin Murni ($\\mu_{\\text{eff}}$)
Gunakan formula: $\\mu_{\\text{eff}} = \\sqrt{n(n + 2)} \\ \\mu_B$.
- Untuk $[\\ce{Fe(H2O)6}]^{2+}$ ($n = 4$):
  $$\\mu_{\\text{eff}} = \\sqrt{4(4 + 2)} = \\sqrt{24} \\approx 4.90 \\ \\mu_B \\implies \\text{\\textbf{Paramagnetik kuat}}$$
- Untuk $[\\ce{Fe(CN)6}]^{4-}$ ($n = 0$):
  $$\\mu_{\\text{eff}} = \\sqrt{0(0 + 2)} = 0.00 \\ \\mu_B \\implies \\text{\\textbf{Diamagnetik murni}}$$

#### Langkah 4: Kalkulasi CFSE Kompleks
Formula umum: $\\text{CFSE} = (-0.4 n_{t_{2g}} + 0.6 n_{e_g})\\Delta_o + mP$.
Pada ion gas bebas $\\ce{Fe^2+}$ ($d^6$), penataan alami Aturan Hund sudah memiliki $1$ pasang elektron ($m_0 = 1$).

1. **CFSE $[\\ce{Fe(H2O)6}]^{2+}$ ($t_{2g}^4 e_g^2$):**
   Terdapat 1 pasang elektron di $t_{2g}$, sehingga pasangan tambahan $m = 1 - 1 = 0$:
   $$\\text{CFSE} = [4(-0.4) + 2(+0.6)] \\Delta_o + 0 \\cdot P = -0.4 \\Delta_o$$
   $$\\text{CFSE} = -0.4 \\times (10,400\\text{ cm}^{-1}) = -4,160\\text{ cm}^{-1}$$
   Dalam $\\text{kJ/mol}$:
   $$\\text{CFSE} = -4,160\\text{ cm}^{-1} \\times 0.01196\\text{ kJ/mol per cm}^{-1} = -49.75\\text{ kJ/mol}$$

2. **CFSE $[\\ce{Fe(CN)6}]^{4-}$ ($t_{2g}^6 e_g^0$):**
   Terdapat 3 pasang elektron di $t_{2g}$, sehingga pasangan tambahan $m = 3 - 1 = 2$:
   $$\\text{CFSE} = [6(-0.4) + 0]\\Delta_o + 2P = -2.4 \\Delta_o + 2P$$
   $$\\text{CFSE} = -2.4(32,800\\text{ cm}^{-1}) + 2(17,600\\text{ cm}^{-1}) = -78,720 + 35,200 = -43,520\\text{ cm}^{-1}$$
   Dalam $\\text{kJ/mol}$:
   $$\\text{CFSE} = -43,520\\text{ cm}^{-1} \\times 0.01196\\text{ kJ/mol per cm}^{-1} = -520.50\\text{ kJ/mol}$$

---

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Mengapa Kestabilan Sianida Sangat Raksasa?
> Perhatikan bahwa kestabilan termodinamika $[\\ce{Fe(CN)6}]^{4-}$ ($-520.50\\text{ kJ/mol}$) lebih dari **10 kali lipat** dibanding aqua-kompleksnya ($-49.75\\text{ kJ/mol}$). Inilah dasar biokimia mengapa ion sianida bersifat racun mematikan: ion $\\ce{CN-}$ mengikat erat enzim sitokrom oksidase $c$ mitokondria membentuk kompleks spin rendah yang luar biasa stabil dan tidak dapat diputus oleh transfer elektron pernapasan seluler!`,
    },
    {
      tag: 'soal-isomerisme-kompleks-kobalt-kiralitas',
      tags: ['soal-osk', 'soal-isomer-kompleks', 'isomer-geometri', 'isomer-optis', 'cis-trans'],
      title: 'Contoh Soal OSK 2: Stereoisomerisme Senyawa Kompleks Oktahedral [Co(en)2Cl2]+ & Uji Kiralitas Optis',
      summary: 'Analisis geometri cis-trans kompleks kobalt(III), identifikasi elemen simetri bidang dan pusat inversi, serta pemisahan bayangan cermin enantiomer.',
      checkpointQuizzes: undefined,
      content: `### 📋 Skenario & Masalah:
Senyawa koordinasi diklorobis(etilendiamin)kobalt(III) klorida memiliki rumus kimia:
$$\\ce{[Co(en)2Cl2]Cl}$$
di mana etilendiamin ($\\ce{en} = \\ce{NH2-CH2-CH2-NH2}$) bertindak sebagai ligan bidentat kelat netral.

---

### 🎯 Pertanyaan:
1. Tuliskan nama resmi IUPAC lengkap untuk senyawa koordinasi tersebut!
2. Tentukan seluruh kemungkinan stereoisomer geometris (*cis-trans*) dari kation kompleks $[\\ce{Co(en)2Cl2}]^+$, dan gambarkan representasi geometri spasial tiga dimensinya!
3. Ujilah keberadaan elemen simetri (bidang simetri $\\sigma$ dan pusat inversi $i$) pada masing-masing isomer geometris tersebut!
4. Berdasarkan analisis simetri, tentukan isomer manakah yang bersifat kiral (aktif optis) serta nyatakan hubungan stereokimianya!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Menentukan Nama IUPAC Resmi
- Kation kompleks: $[\\ce{Co(en)2Cl2}]^+$, Anion lawan: $\\ce{Cl-}$.
- Ligan: 2 kloro (anionik) $+ 2$ etilendiamin (netral kelat).
- Urutan alfabet IUPAC: kloro (K) mendahului bis(etilendiamin) (B).
- Bilangan oksidasi $\\ce{Co}$: $x + 2(0) + 2(-1) = +1 \\implies x = +3$.
- Nama IUPAC Resmi: **Diklorobis(etilendiamin)kobalt(III) klorida**.

#### Langkah 2: Isomer Geometris Cis dan Trans
1. **Isomer *trans*-$[\\ce{Co(en)2Cl2}]^+$:**
   Kedua ligan kloro ($\\ce{Cl-}$) berada pada posisi aksial berseberangan dengan sudut ikatan $\\angle \\ce{Cl-Co-Cl} = 180^\\circ$. Dua ligan etilendiamin mengelilingi posisi ekuatorial pada satu bidang datar. Isomer trans ini berwarna hijau terang.
2. **Isomer *cis*-$[\\ce{Co(en)2Cl2}]^+$:**
   Kedua ligan kloro berada bersebelahan dengan sudut ikatan $\\angle \\ce{Cl-Co-Cl} = 90^\\circ$. Kedua cincin kelat etilendiamin menempati empat situs koordinasi tersisa. Isomer cis ini berwarna ungu kemerahan (*violet*).

#### Langkah 3: Uji Elemen Simetri Kiralitas
- **Pada Isomer *trans*:**
  - Memiliki **pusat inversi ($i$)** tepat pada atom kobalt pusat (setiap ligan memiliki pasangan identik yang berjarak sama di seberang pusat).
  - Memiliki **bidang simetri cermin horizontal ($\\sigma_h$)** pada bidang ekuatorial cincin etilendiamin.
  - *Kesimpulan:* Karena memiliki elemen simetri inversi ($i$) dan bidang cermin, isomer trans bersifat **akiral (optis tidak aktif)**.
- **Pada Isomer *cis*:**
  - Tidak memiliki pusat inversi ($i$).
  - Tidak memiliki bidang simetri cermin ($\\sigma$).
  - *Kesimpulan:* Isomer cis bersifat **kiral (aktif optis)**!

#### Langkah 4: Pasangan Enantiomer Isomer Cis
Karena bersifat kiral, isomer cis eksis sebagai sepasang enantiomer non-superimposabel (bayangan cermin yang tidak dapat diimpitkan):
- Bentuk baling-baling putar kanan: **$\\Delta$-*cis*-$[\\ce{Co(en)2Cl2}]^+$**.
- Bentuk baling-baling putar kiri: **$\\Lambda$-*cis*-$[\\ce{Co(en)2Cl2}]^+$**.
Total stereoisomer yang ada pada senyawa ini berjumlah **3 spesi stereoisomer** (1 isomer trans akiral + 2 enantiomer cis kiral).

---

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Cara Cepat Mengidentifikasi Enantiomer $\\Delta$ vs $\\Lambda$
> Arahkan pandangan tegak lurus ke salah satu muka segitiga oktahedral yang dibatasi oleh ligan kelat:
> - Jika putaran dari cincin kelat depan ke cincin kelat belakang searah jarum jam (kanan), ia adalah enantiomer **$\\Delta$ (Delta)**.
> - Jika putarannya berlawanan arah jarum jam (kiri), ia adalah enantiomer **$\\Lambda$ (Lambda)**!`,
    },
    {
      tag: 'soal-efek-jahn-teller-distorsi-tembaga',
      tags: ['soal-osp', 'soal-jahn-teller', 'efek-jahn-teller', 'distorsi-tetragonal', 'kompleks-cu2-d9'],
      title: 'Contoh Soal OSP 3: Teorema Jahn-Teller & Distorsi Tetragonal Kompleks [Cu(H2O)6]2+ vs [Ni(H2O)6]2+',
      summary: 'Eksplanasi kristalografi elongasi ikatan aksial z pada tembaga(II), penurunan simetri Oh ke D4h, dan kalkulasi energi stabilisasi.',
      checkpointQuizzes: undefined,
      content: `### 📋 Skenario & Data Difraksi Kristal:
Data difraksi sinar-X kristal tunggal menunjukkan bahwa ion heksaakuanikel(II) ($[\\ce{Ni(H2O)6}]^{2+}$) memiliki enam ikatan $\\ce{Ni-O}$ yang identik sempurna dengan panjang ikatan $2.05\\text{ \\AA}$ (simetri oktahedral reguler $O_h$).
Sebaliknya, ion heksaakuatembaga(II) ($[\\ce{Cu(H2O)6}]^{2+}$) menunjukkan distorsi geometris mencolok dengan empat ikatan ekuatorial $\\ce{Cu-O}$ berjarak $1.96\\text{ \\AA}$ dan dua ikatan aksial $\\ce{Cu-O}$ yang jauh lebih panjang yaitu $2.38\\text{ \\AA}$.

---

### 🎯 Pertanyaan:
1. Tuliskan konfigurasi elektron ion bebas dan konfigurasi orbital medan oktahedral untuk $\\ce{Ni^2+}$ ($Z = 28$) dan $\\ce{Cu^2+}$ ($Z = 29$)!
2. Berdasarkan Teorema Jahn-Teller, jelaskan secara mendasar mengapa $[\\ce{Cu(H2O)6}]^{2+}$ mengalami distorsi tetragonal kuat sementara $[\\ce{Ni(H2O)6}]^{2+}$ mempertahankan simetri oktahedral murni!
3. Gambarkan diagram pemecahan tingkat energi orbital $d$ akibat distorsi elongasi-$z$ dari simetri $O_h$ menjadi $D_{4h}$!
4. Buktikan secara matematis bahwa elongasi-$z$ pada $\\ce{Cu^2+}$ ($d^9$) menghasilkan penurunan energi bersih sistem (energi stabilisasi Jahn-Teller $\\Delta E_{\\text{JT}}$) sebesar $\\frac{1}{2}\\delta_1$!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Konfigurasi Elektron Ion Pusat
- **Ion Nikel(II) ($\\ce{Ni^2+}$, $3d^8$):**
  Konfigurasi medan oktahedral: $t_{2g}^6 e_g^2$.
  Orbital $t_{2g}$ terisi penuh simetris ($d_{xy}^2 d_{yz}^2 d_{xz}^2$), dan orbital $e_g$ terisi setengah penuh secara simetris ($d_{z^2}^1 d_{x^2-y^2}^1$).
- **Ion Tembaga(II) ($\\ce{Cu^2+}$, $3d^9$):**
  Konfigurasi medan oktahedral: $t_{2g}^6 e_g^3$.
  Orbital $t_{2g}$ terisi penuh ($t_{2g}^6$), tetapi himpunan orbital $e_g$ terisi tidak simetris ($e_g^3$: satu orbital terisi sepasang elektron, satu orbital terisi satu elektron).

#### Langkah 2: Aplikasi Teorema Jahn-Teller
- Pada $[\\ce{Ni(H2O)6}]^{2+}$, himpunan orbital $e_g$ terisi secara simetris (masing-masing 1 elektron). Keadaan dasar elektroniknya tidak terdegenerasi ($^3A_{2g}$), sehingga tidak ada dorongan untuk mengalami distorsi (stabil dalam simetri $O_h$).
- Pada $[\\ce{Cu(H2O)6}]^{2+}$, konfigurasi $e_g^3$ terdegenerasi rangkap dua ($^2E_g$): pasangan elektron dapat berada di $d_{z^2}$ atau di $d_{x^2-y^2}$.
- Teorema Jahn-Teller menyatakan bahwa keadaan terdegenerasi orbital tidak stabil: molekul wajib mengalami distorsi spontan untuk menghilangkan degenerasi dan menurunkan energi sistem.

#### Langkah 3: Pemecahan Tingkat Energi akibat Elongasi-$z$ (Simetri $D_{4h}$)
Bila 2 ligan aksial sepanjang sumbu $z$ ditarik menjauh (elongasi-$z$):
- Tolakan elektrostatik pada sumbu $z$ berkurang drastis.
- Orbital $d_{z^2}$ turun energinya sebesar $\\frac{1}{2}\\delta_1$, sedangkan orbital $d_{x^2-y^2}$ naik energinya sebesar $\\frac{1}{2}\\delta_1$.
- Pada himpunan $t_{2g}$, orbital $d_{xz}$ dan $d_{yz}$ terstabilkan turun sebesar $\\frac{1}{3}\\delta_2$, sedangkan orbital $d_{xy}$ naik sebesar $\\frac{2}{3}\\delta_2$.
Urutan tingkat energi orbital dari bawah ke atas:
$$(d_{xz}, d_{yz}) < d_{xy} < d_{z^2} < d_{x^2-y^2}$$

#### Langkah 4: Pembuktian Kuantitatif Energi Stabilisasi Jahn-Teller $\\Delta E_{\\text{JT}}$
Pada konfigurasi $d^9$:
- Orbital $t_{2g}$ terisi penuh oleh 6 elektron:
  $$4\\left(-\\frac{1}{3}\\delta_2\\right) + 2\\left(+\\frac{2}{3}\\delta_2\\right) = -\\frac{4}{3}\\delta_2 + \\frac{4}{3}\\delta_2 = 0 \\quad (\\text{Netto nol})$$
- Pada orbital $e_g$, pasangan 2 elektron menempati orbital berenergi rendah $d_{z^2}$, dan 1 elektron tunggal menempati orbital berenergi tinggi $d_{x^2-y^2}$:
  $$\\Delta E_{\\text{JT}} = 2\\left(-\\frac{1}{2}\\delta_1\\right) + 1\\left(+\\frac{1}{2}\\delta_1\\right) = -\\delta_1 + \\frac{1}{2}\\delta_1 = -\\frac{1}{2}\\delta_1$$
Nilai $\\Delta E_{\\text{JT}} = -\\frac{1}{2}\\delta_1 < 0$ membuktikan bahwa sistem meraih penstabilan termodinamika spontan sebesar $\\frac{1}{2}\\delta_1$ melalui pemanjangan kedua ikatan aksial $\\ce{Cu-O}$ ($2.38\\text{ \\AA}$).

---

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Mengapa Elongasi-z Lebih Disukai dibanding Kompresi-z?
> Secara teoretis, distorsi kompresi-$z$ (2 ikatan aksial memendek dan 4 ekuatorial memanjang) juga menghasilkan keuntungan energi $-\\frac{1}{2}\\delta_1$. Namun di alam, **elongasi-$z$ jauh lebih disukai secara termodinamika** karena menjauhkan 2 ligan aksial hanya mengurangi tolakan terhadap 2 ligan, sedangkan kompresi-$z$ akan memaksa 2 ligan mendekat terlalu intim ke inti logam menimbulkan tolakan antar-inti yang sangat destruktif!`,
    },
    {
      tag: 'soal-sintesis-cisplatin-efek-trans',
      tags: ['soal-osn', 'soal-sintesis-cisplatin', 'efek-trans', 'platina-bujur-sangkar', 'kinetika-substitusi-ligan'],
      title: 'Contoh Soal OSN 4: Sintesis Selektif Cisplatin vs Transplatin Berdasarkan Prinsip Efek Trans Platina(II)',
      summary: 'Desain rute reaksi bertahap pembentukan kompleks antikanker bujur sangkar Pt(II) melalui pemanfaatan deret ligan pengarah trans.',
      checkpointQuizzes: undefined,
      content: `### 📋 Skenario & Masalah Sintesis:
Senyawa kompleks bujur sangkar platina(II) diklorodiamminaplatina(II) eksis sebagai dua isomer geometris:
- **Cisplatin** (*cis*-$[\\ce{Pt(NH3)2Cl2}]$): Obat kemoterapi kanker testis dan ovarium yang sangat mujarab.
- **Transplatin** (*trans*-$[\\ce{Pt(NH3)2Cl2}]$): Senyawa yang sama sekali tidak aktif sebagai obat kanker.
Kekuatan ligan pengarah trans (*trans-directing ability*) diketahui memiliki urutan:
$$\\ce{Cl- > NH3}$$

---

### 🎯 Pertanyaan:
1. Rancanglah rute sintesis dua tahap untuk membuat **Cisplatin** dengan kemurnian stereokimia tinggi menggunakan reagen awal garam tetrakloroplatinat(II) ($[\\ce{PtCl4}]^{2-}$) dan larutan amonia ($\\ce{NH3}$)! Jelaskan peran efek trans pada penentuan posisi substitusi tahap kedua!
2. Rancanglah rute sintesis dua tahap untuk membuat **Transplatin** menggunakan reagen awal garam tetraamminaplatina(II) ($[\\ce{Pt(NH3)4}]^{2+}$) dan asam klorida ($\\ce{HCl}$)! Jelaskan peran efek trans pada tahap kedua!
3. Mengapa reaksi antara $[\\ce{PtCl4}]^{2-}$ dengan $\\ce{NH3}$ tidak pernah menghasilkan isomer transplatin dalam jumlah signifikan?

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Rute Sintesis Selektif Cisplatin
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
  Berdasarkan deret efek trans: $\\ce{Cl- > NH3}$. Ligan $\\ce{Cl-}$ memiliki daya pengarah trans yang jauh lebih kuat dibanding $\\ce{NH3}$.
  Ligan yang berada di posisi *trans* terhadap $\\ce{Cl-}$ akan mengalami labilisasi dan digantikan jauh lebih cepat!
  Oleh karena itu, $\\ce{NH3}$ kedua masuk menggantikan ligan $\\ce{Cl-}$ yang berseberangan (*trans*) dengan $\\ce{Cl-}$ lainnya.
  Posisi ini otomatis berada pada posisi *cis* terhadap $\\ce{NH3}$ pertama!
  Hasil reaksi eksklusif: **Cisplatin (*cis*-$[\\ce{Pt(NH3)2Cl2}]$)**.

#### Langkah 2: Rute Sintesis Selektif Transplatin
Bahan awal: $[\\ce{Pt(NH3)4}]^{2+}$ (kation bujur sangkar dengan 4 ligan ammina identik).
- **Tahap 1 (Substitusi Pertama):**
  Reaksikan $[\\ce{Pt(NH3)4}]^{2+}$ dengan satu ekuivalen ion $\\ce{Cl-}$:
  $$[\\ce{Pt(NH3)4}]^{2+} + \\ce{Cl- -> [Pt(NH3)3Cl]+ + NH3}$$
  Terbentuk kloroamminaplatina(II).
- **Tahap 2 (Substitusi Kedua):**
  Reaksikan $[\\ce{Pt(NH3)3Cl}]+$ dengan ekuivalen ion $\\ce{Cl-}$ kedua:
  Pada intermediet ini, terdapat satu ligan $\\ce{Cl-}$ dan tiga ligan $\\ce{NH3}$.
  Berdasarkan deret efek trans: $\\ce{Cl- > NH3}$.
  Ligan $\\ce{Cl-}$ yang baru masuk memiliki daya labilisasi trans yang dominan. Ligan $\\ce{NH3}$ yang terletak tepat di seberang (*trans*) terhadap $\\ce{Cl-}$ tersebut mengalami pelemahan ikatan paling parah dan tersubstitusi paling cepat oleh ion $\\ce{Cl-}$ kedua!
  Hasil reaksi eksklusif: **Transplatin (*trans*-$[\\ce{Pt(NH3)2Cl2}]$)**.

#### Langkah 3: Alasan Mengapa $[PtCl4]^{2-}$ Tidak Menghasilkan Transplatin
Jika reaksi $[\\ce{PtCl4}]^{2-} + 2\\ce{NH3}$ ingin menghasilkan transplatin, molekul $\\ce{NH3}$ kedua harus menggantikan ligan $\\ce{Cl-}$ yang berada di seberang $\\ce{NH3}$ pertama. Namun karena efek trans $\\ce{NH3}$ sangat lemah dibandingkan $\\ce{Cl-}$, ikatan $\\ce{Pt-Cl}$ yang berseberangan dengan $\\ce{NH3}$ justru paling inert (paling kuat), sehingga laju substitusi di posisi trans praktis mendekati nol.

---

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Aksi Biologis Cisplatin
> Cisplatin bekerja dengan masuk ke dalam inti sel kanker, di mana kedua ligan $\\ce{Cl-}$ tersubstitusi oleh air, lalu kedua situs koordinasi *cis* yang terbuka mengikat dua basa guanin bersebelahan pada rantai ganda DNA (*intrastrand cross-linking*). Lengkungan DNA permanen ini menghentikan replikasi sel kanker dan memicu apoptosis seluler!`,
    },
    {
      tag: 'soal-spektra-absorbsi-dd-warna-kompleks',
      tags: ['soal-osn', 'soal-spektra-ti-d1', 'spektra-elektronik-d-d', 'warna-senyawa-kompleks', 'splitting-orbital-d'],
      title: 'Contoh Soal OSN 5: Analisis Spektra Elektronik d-d [Ti(H2O)6]3+ & Penentuan Parameter Pemisahan Medan Kristal (10 Dq)',
      summary: 'Kalkulasi energi pemisahan medan oktahedral Delta_o dari data spektroskopi absorpsi UV-Vis, interpretasi warna komplementer, dan bahu Jahn-Teller keadaan tereksitasi.',
      checkpointQuizzes: undefined,
      content: `### 📋 Skenario & Data Spektroskopi UV-Vis:
Ion heksaakuatitanium(III) ($[\\ce{Ti(H2O)6}]^{3+}$) merupakan kompleks koordinasi logam transisi paling sederhana dengan konfigurasi elektron $3d^1$. Larutan berair dari garam titanium(III) ini menunjukkan warna ungu kemerahan (*violet*) yang khas.
Pengukuran spektroskopi serapan UV-Vis larutan menghasilkan pita serapan absorpsi lebar di daerah cahaya tampak dengan puncak absorbansi maksimum pada panjang gelombang:
$$\\lambda_{\\text{max}} = 500.0\\text{ nm}$$
Pada pita serapan tersebut teramati pula adanya bahu serapan (*absorption shoulder*) asimetris pada panjang gelombang sekitar $\\lambda \\approx 555\\text{ nm}$ ($18,000\\text{ cm}^{-1}$).  
*(Tetapan fisika: $h = 6.626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$, $c = 2.998 \\times 10^8\\text{ m/s}$, $N_A = 6.022 \\times 10^{23}\\text{ mol}^{-1}$).*

---

### 🎯 Pertanyaan:
1. Tuliskan konfigurasi elektron keadaan dasar (*ground state*) dan keadaan tereksitasi (*excited state*) dari kompleks $[\\ce{Ti(H2O)6}]^{3+}$, serta tuliskan simbol transisi spektroskopi yang bersesuaian!
2. Hitung nilai parameter pemisahan medan kristal ($\\Delta_o$ atau $10\\ Dq$) untuk kompleks tersebut dalam satuan Joule per ion ($\\text{J}$), bilangan gelombang ($\\text{cm}^{-1}$), dan kiloJoule per mol ($\\text{kJ/mol}$)!
3. Jelaskan berdasarkan lingkaran warna komplementer mengapa larutan $[\\ce{Ti(H2O)6}]^{3+}$ tampak berwarna ungu bagi mata manusia!
4. Jelaskan penyebab fisis mengapa pita serapan UV-Vis tidak berupa puncak tunggal Gauss yang simetris sempurna melainkan memiliki bahu serapan (*shoulder*) pada $555\\text{ nm}$!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Konfigurasi Elektron & Transisi Spektroskopi
Titanium memiliki nomor atom $Z = 22$ ($\\ce{Ti}: [\\ce{Ar}] 3d^2 4s^2$).
Kation $\\ce{Ti^3+}$ berkonfigurasi $d^1$: $[\\ce{Ar}] 3d^1$.
- **Keadaan Dasar (*Ground State*):** Elektron tunggal menempati salah satu orbital $t_{2g}$ berenergi rendah:
  $$t_{2g}^1 e_g^0 \\quad (\\text{Term simbol: } ^2T_{2g})$$
- **Keadaan Tereksitasi (*Excited State*):** Foton diserap mempromosikan elektron ke orbital $e_g$:
  $$t_{2g}^0 e_g^1 \\quad (\\text{Term simbol: } ^2E_g)$$
- **Transisi Spektroskopi:** $^2T_{2g} \\to ^2E_g$.

#### Langkah 2: Menghitung Nilai Parameter Pemisahan Medan Kristal $\\Delta_o$
Energi foton yang diserap pada puncak maksimum:
$$\\Delta_o = h \\nu = \\frac{h c}{\\lambda_{\\text{max}}}$$
1. **Dalam satuan Joule per ion:**
   $$\\Delta_o = \\frac{(6.626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}) \\times (2.998 \\times 10^8\\text{ m/s})}{500.0 \\times 10^{-9}\\text{ m}} = \\frac{1.9865 \\times 10^{-25}\\text{ J}\\cdot\\text{m}}{500.0 \\times 10^{-9}\\text{ m}} = 3.973 \\times 10^{-19}\\text{ Joule}$$
2. **Dalam satuan bilangan gelombang ($\\text{cm}^{-1}$):**
   $$\\tilde{\\nu} = \\frac{1}{\\lambda} = \\frac{1}{500.0 \\times 10^{-7}\\text{ cm}} = 20,000\\text{ cm}^{-1}$$
   $$\\Delta_o = 10\\ Dq = 20,000\\text{ cm}^{-1}$$
3. **Dalam satuan kiloJoule per mol:**
   $$\\Delta_o = (3.973 \\times 10^{-19}\\text{ J}) \\times (6.02214 \\times 10^{23}\\text{ mol}^{-1}) = 239,260\\text{ J/mol} = 239.26\\text{ kJ/mol}$$

#### Langkah 3: Interpretasi Warna Komplementer
Pita serapan berada pada $\\lambda_{\\text{max}} = 500\\text{ nm}$, yang berkorespondensi dengan spektrum cahaya tampak wilayah **hijau-kuning**.
Ketika cahaya putih polikromatik melewati larutan $[\\ce{Ti(H2O)6}]^{3+}$, komponen foton hijau-kuning diserap untuk mengeksitasi elektron $t_{2g} \\to e_g$. Komponen spektrum cahaya tampak yang tersisa (yaitu warna komplementernya di wilayah biru dan merah) diteruskan tanpa halangan menuju mata pengamat, menghasilkan persepsi visual warna **ungu kemerahan (*violet*)**.

#### Langkah 4: Analisis Bahu Serapan via Efek Jahn-Teller Keadaan Tereksitasi
Penyebab munculnya bahu serapan (*shoulder*) pada $555\\text{ nm}$:
- Pada keadaan dasar ($t_{2g}^1 e_g^0$), asimetri berada di $t_{2g}$ sehingga distorsi Jahn-Teller sangat lemah.
- Namun saat foton diserap, molekul melompat ke **keadaan tereksitasi ($t_{2g}^0 e_g^1$)**.
- Keadaan $e_g^1$ memiliki satu elektron tunggal pada orbital $e_g$ yang menghadap langsung ke ligan, memicu **Efek Jahn-Teller yang sangat kuat pada keadaan tereksitasi**!
- Akibat distorsi Jahn-Teller, orbital $e_g$ terbelah menjadi dua tingkat energi terpisah ($d_{z^2}$ dan $d_{x^2-y^2}$).
- Terjadi dua transisi elektronik yang sangat berdekatan: $t_{2g} \\to d_{z^2}$ (energi lebih rendah, $\\lambda \\approx 555\\text{ nm}$) dan $t_{2g} \\to d_{x^2-y^2}$ (energi lebih tinggi, $\\lambda = 500\\text{ nm}$), menghasilkan puncak utama dengan bahu serapan asimetris yang khas.

---

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO: Bahu Spektra Jahn-Teller
> Jika dalam soal olimpiade Anda menemukan pertanyaan: "Mengapa kompleks ion $d^1$ memiliki bahu serapan (*shoulder*) padahal hanya memiliki 1 elektron valensi?", jawaban kuncinya adalah: **Efek Jahn-Teller pada keadaan tereksitasi ($e_g^1$) membelah orbital $e_g$ menjadi dua tingkat energi terpisah**!`,
    },
  ],
};
