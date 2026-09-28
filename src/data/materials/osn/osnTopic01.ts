/**
 * osnTopic01.ts
 * Topik 1: Struktur Atom & Periodisitas Unsur
 * Jenjang: OSN / IChO
 * Standar Pedagogis: Tone Opsi A (Arsitektur 5 Lapis, Mental Model Hook, Scaffolded Logic, GitHub Callouts, & Checkpoint Quizzes)
 */

import type { MaterialItem } from '../../materialsData.ts';
import { CHECKPOINTS_TOPIC_OSN_01 } from '../../checkpoints/checkpointBankTopicOsn01.ts';

const RAW_OSN_TOPIC_1: MaterialItem = {
  id: 1,
  topic_number: 1,
  title: 'Struktur Atom & Periodisitas Unsur',
  slug: 'struktur-atom-periodisitas',
  category: 'Kimia Teori Dasar',
  level: 'OSN',
  readTimeMinutes: 35,
  summary: 'Kajian komprehensif mekanika kuantum atom: model kuantisasi Bohr & spektrum Rydberg hidrogenik; dualisme materi de Broglie & ketidakpastian Heisenberg; persamaan gelombang Schrödinger & dekomposisi 4 bilangan kuantum; topologi simpul radial & sudut serta kurva distribusi probabilitas; formulasi matematis aturan perisai Slater (Z_eff) penentu urutan ionisasi 4s vs 3d; tren periodisitas radius, deret isoelektronik & kontraksi lantanida; serta termodinamika energi ionisasi bertingkat, anomali periode 2-3, dan paradoks afinitas elektron halogen.',
  allTags: [
    'model-atom-bohr',
    'spektrum-hidrogen',
    'kuantisasi-energi',
    'de-broglie-heisenberg',
    'de-broglie',
    'ketidakpastian-heisenberg',
    'dualisme-partikel',
    'konfigurasi-elektron',
    'aufbau',
    'larangan-pauli',
    'aturan-hund',
    'bilangan-kuantum',
    'persamaan-schrodinger',
    'orbital-atom',
    'simpul-radial-sudut',
    'simpul-radial',
    'simpul-sudut',
    'densitas-probabilitas',
    'topologi-orbital',
    'aturan-slater',
    'zeff-slater',
    'muatan-inti-efektif',
    'pemerisaian-elektron',
    'deret-isoelektronik',
    'jari-jari-atom',
    'jari-jari-ion',
    'kontraksi-lantanida',
    'kontraksi-jari-jari',
    'anomali-energi-ionisasi',
    'energi-ionisasi',
    'anomali-ie',
    'afinitas-elektron',
    'elektronegativitas',
    'soal-osk',
    'simpul-orbital',
    'soal-simpul-orbital',
    'soal-deret-isoelektronik',
    'soal-osp',
    'lonjakan-ie',
    'valensi-unsur',
    'soal-lonjakan-ie',
    'soal-osn',
    'ionisasi-zn',
    'soal-slater-zn',
    'anomali-afinitas',
    'siklus-born-haber',
    'soal-anomali-afinitas-born-haber',
  ],
  prerequisites: [
    {
      tag: 'model-atom-bohr',
      tags: ['model-atom-bohr', 'spektrum-hidrogen', 'kuantisasi-energi'],
      title: 'Prasyarat 1: Model Atom Bohr, Kuantisasi Momentum Sudut, & Deret Spektrum Hidrogen',
      summary: 'Pondasi kuantisasi orbit elektron, postulat momentum sudut Bohr, dan kalkulasi panjang gelombang foton spektrum hidrogen.',
      content: `### 🪜 Tangga Kuantum Bohr & Spektrum Garis Cahaya Hidrogen

Bayangkan sebuah anak tangga di tebing curam. Anda hanya bisa menginjak anak tangga ke-1, ke-2, atau ke-3; Anda mustahil bisa berdiri melayang di antara anak tangga ke-1.5 atau ke-2.7! Inilah lompatan intuisi revolusioner Niels Bohr (1913): energi elektron di dalam atom tidak mengalir secara kontinu seperti lereng bukit, melainkan terkuantisasi kaku pada tingkat-tingkat orbit stasioner tertentu tanpa memancarkan radiasi saat berada di orbit tersebut.

Ketika elektron melompat turun dari anak tangga tinggi ke rendah, selisih energinya dilepaskan seketika sebagai sebuah paket foton cahaya dengan warna tunggal yang sangat spesifik!

---

### 🧭 Alur Matematis Model Atom Bohr untuk Spesies Hidrogenik:

1. **Langkah 1 (Kuantisasi Momentum Sudut Orbital):**  
   Momentum sudut elektron ($L$) diwajibkan merupakan kelipatan bilangan bulat dari tetapan Planck tereduksi $\\hbar = \\frac{h}{2\\pi}$:
   $$L = m_e v r = n \\hbar = n \\frac{h}{2\\pi} \\quad (n = 1, 2, 3, \\dots)$$

2. **Langkah 2 (Keseimbangan Gaya Sentripetal & Tarikan Coulomb):**  
   Menyetarakan gaya sentripetal mekanika gerak melingkar dengan gaya tarik coulomb antara inti bermuatan $+Ze$ dan elektron bermuatan $-e$:
   $$\\frac{m_e v^2}{r} = \\frac{1}{4\\pi \\epsilon_0} \\frac{Z e^2}{r^2}$$
   Substitusi kecepatan $v$ dari Langkah 1 menghasilkan radius orbit stasioner ke-$n$ (Jari-jari Bohr):
   $$r_n = \\frac{4\\pi \\epsilon_0 \\hbar^2}{m_e e^2} \\left(\\frac{n^2}{Z}\\right) = a_0 \\frac{n^2}{Z} \\quad (a_0 = 0.529\\text{ \\AA} = 52.9\\text{ pm})$$

3. **Langkah 3 (Energi Kuantum Total Elektron):**  
   Energi total merupakan jumlahan energi kinetik ($E_k$) dan energi potensial elektrostatik ($E_p$):
   $$E_n = E_k + E_p = \\frac{1}{2} m_e v^2 - \\frac{1}{4\\pi \\epsilon_0} \\frac{Z e^2}{r} = -\\frac{1}{8\\pi \\epsilon_0} \\frac{Z e^2}{r_n}$$
   Substitusi radius $r_n$ menghasilkan energi kuantum diskret:
   $$E_n = -R_H \\left(\\frac{Z^2}{n^2}\\right) = -13.6\\text{ eV} \\times \\frac{Z^2}{n^2} = -\\frac{2.179 \\times 10^{-18}\\text{ J} \\cdot Z^2}{n^2}$$

4. **Langkah 4 (Formulasi Persamaan Spektroskopi Rydberg):**  
   Ketika elektron bertransisi dari tingkat energi $n_2$ menuju $n_1$ ($n_2 > n_1$), foton dipancarkan dengan energi $\\Delta E = h\\nu = hc/\\lambda$:
   $$\\frac{1}{\\lambda} = R_\\infty Z^2 \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$$
   dengan tetapan Rydberg $R_\\infty = 1.09737 \\times 10^7\\text{ m}^{-1}$.

---

### 📊 Matriks Deret Garis Emisi Spektrum Hidrogen:

| Deret Spektrum | Kulit Tujuan ($n_1$) | Kulit Asal ($n_2$) | Wilayah Spektrum Foton | Energi Foton |
| :--- | :---: | :---: | :--- | :--- |
| **Lyman** | $n_1 = 1$ | $2, 3, 4, \\dots$ | Ultraviolet (UV) | Paling tinggi ($\\ge 10.2\\text{ eV}$) |
| **Balmer** | $n_1 = 2$ | $3, 4, 5, \\dots$ | Cahaya Tampak (Visible: 400–700 nm) | Menengah (1.89–3.40 eV) |
| **Paschen** | $n_1 = 3$ | $4, 5, 6, \\dots$ | Inframerah Dekat (Near-IR) | Rendah |
| **Brackett** | $n_1 = 4$ | $5, 6, 7, \\dots$ | Inframerah Tengah (Mid-IR) | Sangat Rendah |
| **Pfund** | $n_1 = 5$ | $6, 7, 8, \\dots$ | Inframerah Jauh (Far-IR) | Ekstrem Rendah |

---

> [!WARNING]
> ### ⚠️ Jebakan Fatal Lingkup Berlakunya Model Bohr
> Jangan pernah menggunakan persamaan Bohr atau formula Rydberg untuk atom berelektron banyak seperti $\\ce{He}$ netral, $\\ce{Li}$, atau $\\ce{C}$!
> - **Miskonsepsi Umum**: Mengira rumus Rydberg $E_n = -13.6\\text{ eV} \\times \\frac{Z^2}{n^2}$ bisa langsung dipakai menghitung spektrum emisi atom Helium netral dengan memasukkan $Z=2$.
> - **Kaidah Ilmiah yang Benar**: Model Bohr **hanya berlaku mutlak untuk sistem 1-elektron (spesies hidrogenik)**, yaitu $\\ce{H}$ ($Z=1$), $\\ce{He+}$ ($Z=2$), $\\ce{Li^2+}$ ($Z=3$), dan $\\ce{Be^3+}$ ($Z=4$). Pada atom berelektron banyak, timbul gaya tolak-menolak antar-elektron (*electron-electron repulsion*) yang meruntuhkan kesederhanaan orbit Bohr.

---

> [!TIP]
> ### 💡 Trik Cepat Menentukan Garis Pertama vs Garis Batas Deret
> - **Garis Pertama ($\\lambda_{\\text{maks}}$, energi terendah)**: Berasal dari kulit tepat di atasnya ($n_2 = n_1 + 1$).  
> - **Garis Batas Deret ($\\lambda_{\\text{min}}$, energi tertinggi / limit ionisasi)**: Berasal dari kulit tak terhingga ($n_2 = \\infty$), sehingga suku $1/n_2^2 = 0$ dan $\\lambda_{\\text{min}} = \\frac{n_1^2}{R_\\infty Z^2}$.`,
      keyFormulas: [
        { name: 'Kuantisasi Momentum Sudut Bohr', formula: 'L = m_e v r = n\\hbar = n \\frac{h}{2\\pi}' },
        { name: 'Radius Orbit Bohr', formula: 'r_n = a_0 \\frac{n^2}{Z} \\quad (a_0 = 52.9\\text{ pm})' },
        { name: 'Energi Kuantum Elektron Hidrogenik', formula: 'E_n = -13.6\\text{ eV} \\times \\frac{Z^2}{n^2}' },
        { name: 'Persamaan Rydberg Foton Transisi', formula: '\\frac{1}{\\lambda} = R_\\infty Z^2 \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)' },
      ],
    },
    {
      tag: 'de-broglie-heisenberg',
      tags: ['de-broglie-heisenberg', 'de-broglie', 'ketidakpastian-heisenberg', 'dualisme-partikel'],
      title: 'Prasyarat 2: Dualisme Gelombang-Partikel De Broglie & Prinsip Ketidakpastian Heisenberg',
      summary: 'Konsepsi gelombang materi partikel subatomik dan batasan fundamental pengukuran posisi-momentum.',
      content: `### 🌊 Riak Gelombang Materi & Kabut Ketidakpastian Kuantum

Bayangkan Anda ingin memotret sebuah bola bisbol yang meluncur di malam gelap gulita. Anda menyalakan lampu kilat (blitz kamera); cahaya menerangi bola tanpa mengubah lintasannya sedikit pun. Namun, bayangkan jika objek yang difoto adalah elektron bermassa mungil ($9.11 \\times 10^{-31}\\text{ kg}$)!

Foton cahaya yang ditembakkan membawa momentum yang sebanding dengan elektron itu sendiri. Begitu satu foton menabrak elektron untuk memberi tahu "di mana posisinya", tumbukan foton tersebut justru menendang elektron dan mengacaukan kecepatannya secara drastis! Di dunia kuantum, tindakan mengamati secara inheren mengubah objek yang diamati.

---

### 🧭 Dua Pilar Fondasi Fisika Kuantum Modern:

1. **Hipotesis Gelombang Materi Louis de Broglie (1924):**  
   Jika radiasi elektromagnetik (cahaya) yang klasik dianggap gelombang dapat berkarakter partikel (foton), maka partikel materi bermassa ($m$) yang bergerak dengan kecepatan ($v$) wajib memiliki panjang gelombang materi ($\\lambda$):
   $$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$$
   Jika elektron dipercepat dari keadaan diam oleh beda potensial listrik $V_a$, energi kinetiknya adalah $E_k = e V_a = \\frac{p^2}{2m_e}$, sehingga panjang gelombang de Broglie elektron menjadi:
   $$\\lambda = \\frac{h}{\\sqrt{2 m_e e V_a}}$$
   Karakter gelombang elektron ini dibuktikan secara eksperimental oleh fenomena difraksi elektron kristal nikel (Davisson-Germer, 1927), melahirkan teknologi Mikroskop Elektron (TEM/SEM) dengan resolusi sub-angstrom.

2. **Prinsip Ketidakpastian Werner Heisenberg (1927):**  
   Mustahil menentukan secara serempak posisi ($x$) dan momentum linear ($p_x$) suatu partikel kuantum dengan presisi tak terbatas:
   $$\\Delta x \\cdot \\Delta p_x \\ge \\frac{\\hbar}{2} = \\frac{h}{4\\pi}$$
   dengan $\\Delta x$ adalah ketidakpastian posisi dan $\\Delta p_x = m \\Delta v_x$ adalah ketidakpastian momentum linear.

---

> [!WARNING]
> ### ⚠️ Dari Orbit Lintasan Klasik Menuju Awan Orbital Probabilitas
> Jangan sekali-kali membayangkan elektron mengelilingi inti atom seperti planet mengitari matahari dalam orbit berbentuk lingkaran kawat!
> - **Miskonsepsi Umum**: Menganggap bahwa elektron berada pada lintasan edar melingkar planar berkecepatan konstan yang dapat dilacak jejaknya setiap detik.
> - **Kaidah Ilmiah yang Benar**: Menurut Heisenberg dan Schrödinger, konsep lintasan deterministik runtuh total di tingkat subatomik. Kita tidak pernah bisa mengatakan elektron "sedang berada di titik koordinat $(x,y,z)$ dan meluncur ke arah sana". Posisi elektron digantikan oleh **Fungsi Gelombang Probabilitas ($\\psi$)**, dan ruang 3D dengan kebolehjadian tertinggi ($\ge 90\\%$) menemukan elektron dinamakan **Orbital Atom**.

---

> [!TIP]
> ### 💡 Mengapa Benda Makroskopis Tidak Menunjukkan Sifat Gelombang?
> Substitusi massa bola tenis ($m = 0.05\\text{ kg}$) dengan kecepatan $v = 20\\text{ m/s}$ menghasilkan $\\lambda = \\frac{6.626 \\times 10^{-34}}{0.05 \\times 20} \\approx 6.6 \\times 10^{-34}\\text{ m}$. Nilai ini $10^{19}$ kali lebih kecil dari ukuran inti atom, sehingga efek interferensi gelombang materi pada benda makro lenyap dan fisika klasik Newton berlaku sempurna.`,
      keyFormulas: [
        { name: 'Panjang Gelombang De Broglie', formula: '\\lambda = \\frac{h}{p} = \\frac{h}{m v}' },
        { name: 'De Broglie Elektron Beda Potensial Va', formula: '\\lambda = \\frac{h}{\\sqrt{2 m_e e V_a}}' },
        { name: 'Prinsip Ketidakpastian Heisenberg', formula: '\\Delta x \\cdot \\Delta p_x \\ge \\frac{\\hbar}{2} = \\frac{h}{4\\pi}' },
      ],
    },
    {
      tag: 'konfigurasi-elektron',
      tags: ['konfigurasi-elektron', 'aufbau', 'larangan-pauli', 'aturan-hund'],
      title: 'Prasyarat 3: Asas Aufbau, Larangan Pauli, Aturan Hund, & Anomali Logam Transisi',
      summary: 'Aturan penataan elektron atom berelektron banyak, konfigurasi ionik, dan stabilisasi exchange energy.',
      content: `### 🏨 Kamar Hotel Kuantum & Bonus Kestabilan Simetri Pertukaran

Bayangkan sebuah hotel mewah di mana para tamu sangat menyukai privasi. Ketika sekelompok tamu memasuki lorong kamar dengan harga sewa sama (orbital terdegenerasi), setiap tamu pasti memilih masuk ke kamar kosongnya masing-masing terlebih dahulu dengan jendela menghadap arah yang sama (spin paralel), daripada harus langsung sekamar berdesakan dengan orang asing!

Inilah hakikat Aturan Hund. Dan ketika sebuah subkulit berhasil terisi tepat setengah penuh ($d^5$) atau penuh ($d^{10}$), atom mendapatkan hadiah stabilisasi termodinamika ekstra dari mekanika kuantum yang disebut **Energi Pertukaran (*Exchange Energy*)**.

---

### 🧭 Tiga Kaidah Baku Pengisian Elektron dalam Keadaan Dasar:

1. **Asas Aufbau ($n + l$):** Elektron menempati orbital dengan tingkat energi terendah terlebih dahulu. Energi orbital meningkat seiring nilai $(n + l)$. Jika terdapat dua orbital dengan nilai $(n + l)$ sama, orbital dengan nilai $n$ lebih kecil terisi terlebih dahulu:
   $$1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d < 5p < 6s < 4f < 5d < 6p \\dots$$

2. **Prinsip Larangan Pauli:** Tidak ada dua elektron dalam satu atom yang boleh memiliki keempat bilangan kuantum ($n, l, m_l, m_s$) yang identik. Konsekuensinya, satu kotak orbital spasial hanya mampu menampung maksimal 2 elektron dengan arah spin yang berlawanan (antiparalel: $\\uparrow\\downarrow$).

3. **Aturan Multiplisitas Hund:** Pada orbital-orbital yang terdegenerasi (setara energi, seperti $p_x, p_y, p_z$), elektron menempati masing-masing orbital secara terpisah dengan spin sejajar sebelum mulai berpasangan, guna meminimalkan tolakan coulombik antar-elektron.

---

### 💡 Anomali Subkulit Penuh & Setengah Penuh ($d^5$ dan $d^{10}$):

Eksperimen spektroskopi membuktikan anomali konfigurasi elektron pada beberapa logam transisi:
- **Kromium ($\\ce{Cr}, Z=24$):** $[\\ce{Ar}] 4s^1 3d^5$ (bukan $[\\ce{Ar}] 4s^2 3d^4$)
- **Tembaga ($\\ce{Cu}, Z=29$):** $[\\ce{Ar}] 4s^1 3d^{10}$ (bukan $[\\ce{Ar}] 4s^2 3d^9$)
- **Molibdenum ($\\ce{Mo}, Z=42$):** $[\\ce{Kr}] 5s^1 4d^5$
- **Perak ($\\ce{Ag}, Z=47$):** $[\\ce{Kr}] 5s^1 4d^{10}$

**Kalkulasi Kuantitatif Energi Pertukaran (*Exchange Energy*, $K_{\\text{ex}}$):**  
Elektron dengan spin sejajar dapat saling bertukar posisi secara kuantum tanpa melanggar larangan Pauli. Setiap kemungkinan pertukaran menyumbang energi stabilisasi negatif $-K$. Jumlah pasangan pertukaran dirumuskan oleh:
$$N_{\\text{pasangan}} = \\frac{n(n-1)}{2}$$
- Pada konfigurasi $3d^4$ (4 elektron spin sejajar): terdapat $\\frac{4 \\times 3}{2} = 6$ pasangan pertukaran ($E_{\\text{ex}} = -6K$).
- Pada konfigurasi $3d^5$ (5 elektron spin sejajar): terdapat $\\frac{5 \\times 4}{2} = 10$ pasangan pertukaran ($E_{\\text{ex}} = -10K$).  
Peningkatan drastis sebesar 4 pasangan pertukaran ($-4K$) memberikan keuntungan termodinamika yang jauh melampaui biaya energi promosi elektron dari $4s$ ke $3d$.

---

> [!WARNING]
> ### ⚠️ Urutan Pengisian vs Urutan Pelepasan Elektron Kation Logam Transisi
> Ini adalah perangkap paling mematikan dalam soal seleksi olimpiade dan ujian kimia lanjut!
> - **Miskonsepsi Fatal**: Menulis konfigurasi ion $\\ce{Fe^2+}$ ($Z=26$) sebagai $[\\ce{Ar}] 4s^2 3d^4$ dengan anggapan "karena $3d$ diisi paling akhir, maka saat ion terbentuk elektron $3d$ yang dibuang duluan".
> - **Kaidah Ilmiah yang Benar**: **Elektron pada orbital dengan bilangan kuantum utama terbesar ($4s$) SELALU dilepaskan terlebih dahulu sebelum elektron $3d$!**
>   $$\\ce{Fe} (Z=26): [\\ce{Ar}] 4s^2 3d^6 \\implies \\ce{Fe^2+}: [\\ce{Ar}] 3d^6 \\implies \\ce{Fe^3+}: [\\ce{Ar}] 3d^5$$
>   Hal ini dibuktikan secara matematis melalui Aturan Perisai Slater di mana elektron $3d$ merasakan muatan inti efektif yang jauh lebih kuat dibanding elektron $4s$.`,
      keyFormulas: [
        { name: 'Kaidah Energi Aufbau', formula: 'E \\propto n + l' },
        { name: 'Jumlah Pasangan Pertukaran Kuantum', formula: 'N_{\\text{exchange}} = \\frac{n(n-1)}{2}' },
      ],
    },
  ],
  core_concepts: [
    {
      tag: 'bilangan-kuantum',
      tags: ['bilangan-kuantum', 'persamaan-schrodinger', 'orbital-atom'],
      title: 'Konsep Inti 1: Persamaan Gelombang Schrödinger & Empat Bilangan Kuantum',
      summary: 'Dekomposisi fungsi gelombang spasial-radial dan interpretasi fisis 4 bilangan kuantum kuaterner.',
      content: `### 🎼 Harmoni Gelombang 3D & Kode Pos Empat Bilangan Kuantum

Jika senar gitar yang dipetik menghasilkan nada bergetar satu dimensi, dan kulit drum menghasilkan pola gelombang berdiri dua dimensi, maka elektron di sekitar inti atom adalah **gelombang berdiri tiga dimensi (*three-dimensional standing wave*)**.

Persamaan Diferensial Parsial Erwin Schrödinger (1926) mendeskripsikan osilasi gelombang ini di bawah medan potensial Coulomb inti:
$$\\hat{H}\\psi = E\\psi \\iff \\left( -\\frac{\\hbar^2}{2m_e} \\nabla^2 + V(r) \\right)\\psi = E\\psi$$

Agar fungsi gelombang $\\psi$ bernilai tunggal, kontinu, dan ternormalisasi di seluruh alam semesta, kondisi batas matematis menuntut munculnya **tiga bilangan kuantum spasial ($n, l, m_l$)**, yang kemudian disempurnakan oleh Dirac dengan **satu bilangan kuantum spin intrinsik ($m_s$)**.

---

### 🧭 Dekomposisi Fungsi Gelombang Bola Polar:
Dalam koordinat bola polar $(r, \\theta, \\phi)$, fungsi gelombang elektron hidrogenik dapat didekomposisi menjadi bagian radial murni dan bagian sudut (angular):
$$\\psi_{n,l,m_l}(r, \\theta, \\phi) = R_{n,l}(r) \\cdot Y_{l,m_l}(\\theta, \\phi) = R_{n,l}(r) \\cdot \\Theta_{l,m_l}(\\theta) \\cdot \\Phi_{m_l}(\\phi)$$
- **Fungsi Radial $R_{n,l}(r)$**: Mengontrol ukuran jarak orbital dari inti dan simpul radial.
- **Fungsi Sudut $Y_{l,m_l}(\\theta, \\phi)$**: Mengontrol bentuk geometri orbital dan simpul sudut.

---

### 📊 Karakteristik & Makna Fisis Empat Bilangan Kuantum:

| Bilangan Kuantum | Simbol | Nilai yang Diizinkan | Makna Fisik & Informasi Kuantum |
| :--- | :---: | :--- | :--- |
| **Utama (Principal)** | $n$ | $1, 2, 3, 4, \\dots$ | Menentukan tingkat energi utama dan ukuran rata-rata orbital ($r \\propto n^2$). |
| **Azimut (Angular Momentum)** | $l$ | $0, 1, 2, \\dots, n-1$ | Menentukan bentuk geometri orbital ($0=s, 1=p, 2=d, 3=f$) serta besar total momentum sudut orbital: $L = \\sqrt{l(l+1)}\\hbar$. |
| **Magnetik Spasial** | $m_l$ | $-l, \\dots, 0, \\dots, +l$ | Menentukan orientasi spasial orbital di dalam ruang 3D dan komponen momentum sudut pada sumbu kuantisasi-$z$: $L_z = m_l \\hbar$. |
| **Spin Intrinsik** | $m_s$ | $+1/2, -1/2$ | Menentukan momentum sudut spin intrinsik elektron: $S_z = m_s \\hbar$. |

---

> [!WARNING]
> ### ⚠️ Batasan Hubungan Hierarki Bilangan Kuantum
> Soal olimpiade kerap menguji kombinasi bilangan kuantum yang terlarang secara fisik!
> - **Miskonsepsi Umum**: Mengira himpunan $(n=3, l=3, m_l=0, m_s=+1/2)$ sah karena $n=3$ dan $m_l=0$.
> - **Kaidah Ilmiah yang Benar**: Nilai $l$ **wajib memenuhi $0 \\le l \\le n-1$**. Jika $n=3$, nilai $l$ maksimal hanyalah $2$ (orbital $s, p, d$). Tidak pernah ada orbital $3f$ di alam semesta! Selain itu, $|m_l|$ tidak boleh melebihi $l$.

---

> [!TIP]
> ### 💡 Rumus Cepat Menghitung Jumlah Orbital & Elektron Maksimum
> - Jumlah orbital dalam sebuah subkulit berazimut $l$ adalah $2l + 1$.
> - Jumlah total orbital dalam kulit ke-$n$ adalah $n^2$.
> - Kapasitas elektron maksimum dalam kulit ke-$n$ adalah $2n^2$.`,
      keyFormulas: [
        { name: 'Persamaan Schrödinger Independen-Waktu', formula: '\\hat{H}\\psi = E\\psi' },
        { name: 'Magnitudo Momentum Sudut Orbital', formula: 'L = \\sqrt{l(l+1)}\\hbar' },
        { name: 'Komponen Sumbu-z Momentum Sudut', formula: 'L_z = m_l \\hbar' },
        { name: 'Total Orbital dalam Kulit ke-n', formula: 'N_{\\text{orbital}} = n^2' },
      ],
    },
    {
      tag: 'simpul-radial-sudut',
      tags: ['simpul-radial-sudut', 'simpul-radial', 'simpul-sudut', 'densitas-probabilitas', 'topologi-orbital'],
      title: 'Konsep Inti 2: Probabilitas Elektron, Simpul Radial & Sudut, serta Fungsi Distribusi Radial',
      summary: 'Analisis kebolehjadian menemukan elektron, topologi permukaan simpul nodal bernilai nol, dan penetrasi orbital.',
      content: `### 🎯 Topologi Ruang Hampa Elektron: Simpul Bola Konsentris & Sayatan Sudut

Ketika Anda meniup gelembung sabun ganda atau memetik dawai, ada titik-titik simpul (*nodes*) tempat getaran bernilai nol mutlak. Dalam mekanika kuantum, probabilitas menemukan elektron pada suatu elemen volume ruang $dV$ dinyatakan oleh kuadrat magnitudo fungsi gelombang (Interpretasi Max Born):
$$dP = |\\psi|^2 dV$$

Daerah di mana fungsi gelombang melintasi nilai nol ($\\psi = 0$), sehingga kebolehjadian menemukan elektron lenyap total ($|\\psi|^2 = 0$), dinamakan **Simpul Orbital (*Nodal Surface*)**.

---

### 🧭 Klasifikasi Topologi Dua Jenis Simpul Kuantum:

1. **Simpul Radial (*Radial Nodes*, $N_r$):**
   - Merupakan permukaan kulit bola konsentris beradius konstan di sekitar inti tempat bagian fungsi radial bernilai nol: $R_{n,l}(r) = 0$.
   - Dirumuskan secara eksak oleh:
     $$N_r = n - l - 1$$

2. **Simpul Sudut (*Angular / Planar Nodes*, $N_a$):**
   - Merupakan bidang datar simpul yang memotong inti atau kerucut simetris tempat fungsi bagian sudut bernilai nol: $Y_{l,m_l}(\\theta, \\phi) = 0$.
   - Dirumuskan secara eksak oleh bilangan kuantum azimut:
     $$N_a = l$$

3. **Total Akumulasi Simpul ($N_{\\text{tot}}$):**
   $$N_{\\text{tot}} = N_r + N_a = (n - l - 1) + l = n - 1$$

---

### 📊 Kurva Fungsi Distribusi Probabilitas Radial ($P(r) = 4\\pi r^2 R_{n,l}^2(r)$):
Fungsi distribusi radial mengukur probabilitas menemukan elektron pada cangkang bola tipis berjarak $r$ dari inti:
- **Tepat pada Inti Atom ($r = 0$):** Meskipun densitas fungsi gelombang orbital $s$ ($|\\psi(0)|^2$) bernilai maksimum, probabilitas radial $P(0) = 4\\pi (0)^2 R^2(0) = 0$ karena volume cangkang bola pada titik pusat adalah nol!
- **Puncak Utama Kurva Terluar:** Menunjukkan jarak dari inti dengan kebolehjadian terbesar (pada atom hidrogen $1s$, puncak kurva terletak tepat pada jari-jari Bohr $a_0 = 52.9\\text{ pm}$).
- **Penetrasi Orbital (*Orbital Penetration*):**  
  Orbital $2s$ memiliki 1 simpul radial ($N_r = 2 - 0 - 1 = 1$), yang menghasilkan sebuah punuk kecil probabilitas yang berada sangat dekat dengan inti sebelum punuk utamanya. Punuk kecil ini memungkinkan elektron $s$ menembus awan elektron dalam lebih baik daripada elektron $p$. Akibatnya, pada kulit utama yang sama, kemampuan penetrasi ke inti mengikuti urutan:
  $$s > p > d > f$$

---

> [!WARNING]
> ### ⚠️ Anomali Simpul Sudut Orbital $d_{z^2}$
> - **Miskonsepsi Umum**: Mengira semua orbital $d$ ($l=2$) selalu memiliki 2 bidang simpul datar planar ortogonal.
> - **Kaidah Ilmiah yang Benar**: Empat orbital $d$ ($d_{xy}, d_{yz}, d_{xz}, d_{x^2-y^2}$) memang memiliki 2 bidang datar simpul planar. Namun khusus orbital $3d_{z^2}$, kedua simpul sudutnya ($N_a = 2$) bukan berbentuk bidang datar, melainkan **dua permukaan kerucut simetris (*conical nodal surfaces*)** yang berpuncak di inti dan mengapit cincin donat ekuatorial pada sudut $\\theta \\approx 54.7^\\circ$ terhadap sumbu-$z$.`,
      keyFormulas: [
        { name: 'Jumlah Simpul Radial', formula: 'N_r = n - l - 1' },
        { name: 'Jumlah Simpul Sudut', formula: 'N_a = l' },
        { name: 'Total Simpul Orbital', formula: 'N_{\\text{tot}} = n - 1' },
        { name: 'Fungsi Distribusi Radial', formula: 'P(r) = 4\\pi r^2 [R_{n,l}(r)]^2' },
      ],
    },
    {
      tag: 'aturan-slater',
      tags: ['aturan-slater', 'zeff-slater', 'muatan-inti-efektif', 'pemerisaian-elektron'],
      title: 'Konsep Inti 3: Muatan Inti Efektif ($Z_{\\text{eff}}$), Aturan Perisai Slater, & Penetrasi Orbital',
      summary: 'Formulasi matematis John C. Slater untuk menghitung medan inti efektif yang dirasakan elektron valensi.',
      content: `### 🛡️ Tarik Tambang Inti vs Mantel Pelindung Awan Elektron ($Z_{\\text{eff}}$)

Bayangkan seorang penyanyi bintang di atas panggung konser yang dikerumuni oleh ratusan penonton di barisan depan. Penonton di barisan paling belakang tidak bisa melihat dan mendengar suara sang bintang secara penuh karena terhalang oleh kepala dan badan penonton di depannya!

Dalam atom berelektron banyak, fenomena ini disebut **Efek Pemerisaian (*Shielding Effect*)**. Elektron-elektron di kulit dalam membentuk "mantel kabut muatan negatif" yang menolak elektron valensi terluar dan menetralisasi sebagian tarikan muatan positif inti ($+Ze$). Muatan bersih yang benar-benar dirasakan elektron disebut **Muatan Inti Efektif ($Z_{\\text{eff}}$)**:
$$Z_{\\text{eff}} = Z - S$$
dengan $Z$ adalah nomor atom dan $S$ adalah tetapan perisai (*shielding constant*).

---

### 🧭 Algoritma Perhitungan Aturan Slater (Slater\'s Rules):

1. **Langkah 1 (Pengelompokan Formal Kurung Kulit):**  
   Tuliskan konfigurasi elektron dan kelompokkan dalam urutan berikut:
   $$(1s) \\quad (2s, 2p) \\quad (3s, 3p) \\quad (3d) \\quad (4s, 4p) \\quad (4d) \\quad (4f) \\quad (5s, 5p) \\dots$$

2. **Langkah 2 (Nilai Kontribusi Perisai Elektron Penguji):**

| Posisi Elektron yang Diuji | Posisi Elektron Penyumbang Perisai | Kontribusi Per Elektron ($S_i$) |
| :--- | :--- | :---: |
| **Elektron dalam Kelompok $(ns, np)$** | Elektron lain dalam kelompok $(ns, np)$ yang sama | **$0.35$** (khusus kelompok $1s$: **$0.30$**) |
| | Seluruh elektron pada kulit $(n - 1)$ | **$0.85$** |
| | Seluruh elektron pada kulit $(n - 2)$ atau lebih dalam | **$1.00$** |
| **Elektron dalam Kelompok $(nd)$ atau $(nf)$** | Elektron lain dalam kelompok $(nd)$ atau $(nf)$ yang sama | **$0.35$** |
| | Seluruh elektron dalam semua kelompok di sebelah kirinya | **$1.00$** |

3. **Langkah 3 (Kaidah Nol untuk Sisi Kanan):**  
   Elektron pada kelompok di sebelah **kanan** elektron penguji sama sekali tidak menyumbang perisai ($S = 0.00$).

---

### 💡 Pembuktian Kuantitatif: Mengapa $4s$ Terionisasi Lebih Dulu daripada $3d$?

Mari kita hitung nilai $Z_{\\text{eff}}$ untuk atom Seng ($\\ce{Zn}, Z=30$):
Konfigurasi: $(1s)^2 (2s, 2p)^8 (3s, 3p)^8 (3d)^{10} (4s)^2$

- **Untuk Elektron Penguji $4s$:**
  $$S(4s) = (1 \\times 0.35) + (18 \\times 0.85) + (10 \\times 1.00) = 0.35 + 15.30 + 10.00 = 25.65$$
  $$Z_{\\text{eff}}(4s) = 30 - 25.65 = \\mathbf{+4.35}$$

- **Untuk Elektron Penguji $3d$:**
  $$S(3d) = (9 \\times 0.35) + (18 \\times 1.00) = 3.15 + 18.00 = 21.15$$
  $$Z_{\\text{eff}}(3d) = 30 - 21.15 = \\mathbf{+8.85}$$

**Kesimpulan Ilmiah Mutlak:**  
Nilai $Z_{\\text{eff}}(3d) = +8.85$ lebih dari dua kali lipat lebih besar dibanding $Z_{\\text{eff}}(4s) = +4.35$. Elektron $3d$ terikat luar biasa kuat ke inti, sedangkan elektron $4s$ mengalami tarikan netto yang jauh lebih lemah dan berada pada posisi spasial lebih luar, sehingga elektron $4s$ terlepas duluan saat pembentukan kation $\\ce{Zn^2+}$.

---

> [!WARNING]
> ### ⚠️ Perbedaan Perlakuan Kelompok $(ns, np)$ vs $(nd, nf)$
> Hati-hati saat menguji elektron pada subkulit $d$ atau $f$!
> - **Miskonsepsi Umum**: Mengalikan elektron kulit $(n-1)$ dengan faktor $0.85$ saat menguji elektron $3d$.
> - **Kaidah Ilmiah yang Benar**: Untuk elektron penguji $(nd)$ atau $(nf)$, **seluruh elektron di sebelah kirinya (baik kulit $n-1, n-2$, maupun $ns, np$ sesama kulit $n$) SEMUANYA dikalikan dengan bobot $1.00$!** Faktor $0.85$ hanya berlaku jika elektron yang diuji berada pada kelompok $(ns, np)$.`,
      keyFormulas: [
        { name: 'Rumus Muatan Inti Efektif', formula: 'Z_{\\text{eff}} = Z - S' },
        { name: 'Kontribusi Sesama ns/np', formula: 'S_i = 0.35 \\quad (1s: 0.30)' },
        { name: 'Kontribusi Kulit (n-1) untuk ns/np', formula: 'S_i = 0.85' },
        { name: 'Kontribusi Kiri untuk nd/nf', formula: 'S_i = 1.00' },
      ],
    },
    {
      tag: 'deret-isoelektronik',
      tags: ['deret-isoelektronik', 'jari-jari-atom', 'jari-jari-ion', 'kontraksi-lantanida'],
      title: 'Konsep Inti 4: Jari-Jari Atomik, Radius Ionik, Kontraksi Lantanida, & Deret Isoelektronik',
      summary: 'Analisis komparatif tren ukuran partikel materi, rasio muatan terhadap elektron, dan anomali kontraksi lantanida.',
      content: `### 🧲 Gravitasi Inti Rasio $Z/e$ & Fenomena Kembar Identik Zirkonium-Hafnium

Ukuran suatu atom bukanlah bola padat berkulit keras seperti kelereng, melainkan batas tepi difus awan probabilitas elektron. Ukuran ini dikendalikan oleh tarik-menarik antara muatan inti ($+Ze$) yang menarik elektron ke dalam versus tolakan antar-elektron yang memekarkan awan ke luar.

---

### 🧭 Tiga Ragam Definisi Eksperimental Radius Partikel:
1. **Jari-Jari Kovalen ($r_{\\text{kov}}$):** Separuh jarak antar-inti dua atom identik yang berikatan kovalen tunggal (misal pada $\\ce{Cl2}$, $r_{\\text{kov}} = \\frac{1}{2} d_{\\ce{Cl-Cl}} = 99\\text{ pm}$).
2. **Jari-Jari Van der Waals ($r_{\\text{vdW}}$):** Separuh jarak terdekat antar-inti dua atom non-ikatan ketika bersentuhan dalam kisi kristal padat ($r_{\\text{vdW}} > r_{\\text{kov}}$).
3. **Jari-Jari Logam ($r_{\\text{met}}$):** Separuh jarak terdekat antar-kation dalam kisi kristal logam murni berbilangan koordinasi 12.

---

### 📊 Logika Perbandingan Deret Isoelektronik 10 Elektron:
Perhatikan deret spesies dengan jumlah elektron sama ($N_e = 10$, konfigurasi $[\\ce{Ne}] = 1s^2 2s^2 2p^6$):
$$\\ce{O^2-} (Z=8) \\quad > \\quad \\ce{F-} (Z=9) \\quad > \\quad \\ce{Na+} (Z=11) \\quad > \\quad \\ce{Mg^2+} (Z=12) \\quad > \\quad \\ce{Al^3+} (Z=13)$$

Rasio muatan inti per elektron ($Z/e$) melonjak secara linier dari $0.80$ pada $\\ce{O^2-}$ hingga $1.30$ pada $\\ce{Al^3+}$. Dengan jumlah elektron dan tolakan interelektronik yang setara, tarikan 13 proton pada $\\ce{Al^3+}$ mencengkeram awan elektron begitu rapatnya sehingga radius ionnya ($53.5\\text{ pm}$) menyusut hampir sepertiga ukuran ion $\\ce{O^2-}$ ($140\\text{ pm}$)!

---

### 💡 Kontraksi Lantanida (*Lanthanide Contraction*):
Unsur-unsur deret lantanida ($_{57}\\ce{La}$ hingga $_{71}\\ce{Lu}$) melibatkan pengisian progresif subkulit $4f$. Karena orbital $f$ memiliki bentuk spasial yang sangat difus dan bercabang banyak, efisiensi perisai inti elektron $4f$ sangat buruk ($s > p > d > f$). Akibatnya, muatan inti efektif melonjak drastis sepanjang deret, menyebabkan jari-jari atomik unsur transisi periode 6 menyusut tajam hingga hampir identik dengan unsur sekelompoknya pada periode 5:
- Jari-jari kovalen $\\ce{Zr}$ (Periode 5, Golongan 4) $= 160\\text{ pm}$
- Jari-jari kovalen $\\ce{Hf}$ (Periode 6, Golongan 4) $= 159\\text{ pm}$

---

> [!WARNING]
> ### ⚠️ Perbandingan Ukuran Atom Netral vs Ioniknya
> - **Kation Selalu Lebih Kecil dari Atom Netralnya ($r(X^+) < r(X)$)**: Pelepasan elektron menurunkan tolakan antar-elektron, sering menghilangkan satu kulit terluar, dan meningkatkan $Z_{\\text{eff}}$ per elektron.
> - **Anion Selalu Lebih Besar dari Atom Netralnya ($r(X^-) > r(X)$)**: Penambahan elektron ke kulit yang sama memperbesar gaya tolak-menolak coulomb antar-elektron, sehingga awan elektron mengembang ke luar.
> - **Urutan Universal**: $r(X^+) < r(X) < r(X^-)$.`,
      keyFormulas: [
        { name: 'Korelasi Ukuran Deret Isoelektronik', formula: 'r_{\\text{ion}} \\propto \\frac{1}{Z/e}' },
      ],
    },
    {
      tag: 'anomali-energi-ionisasi',
      tags: ['anomali-energi-ionisasi', 'energi-ionisasi', 'anomali-ie', 'afinitas-elektron', 'elektronegativitas'],
      title: 'Konsep Inti 5: Energi Ionisasi Bertingkat, Anomali Periode 2 & 3, Afinitas Elektron, & Elektronegativitas',
      summary: 'Analisis termodinamika pelepasan/penangkapan elektron, penyimpangan orbital terisi penuh/setengah penuh, dan skala elektronegativitas.',
      content: `### ⚡ Energi Dobrak Elektron: Jebakan Lonjakan Kulit Gas Mulia & Paradoks Fluorin

Energi ionisasi ($IE$) mengukur energi minimum yang diserap untuk mencabut paksa satu elektron dari atom atau ion gas pada keadaan dasar:
$$\\ce{X(g) -> X+(g) + e-} \\quad (\\Delta H = IE_1 > 0)$$
$$\\ce{X+(g) -> X^2+(g) + e-} \\quad (\\Delta H = IE_2 > IE_1)$$

Nilai $IE$ bertingkat selalu bernilai positif (endotermik) dan selalu meningkat bertahap ($IE_1 < IE_2 < IE_3 < \\dots$) karena elektron berikutnya ditarik dari kation bermuatan positif yang kian terkonsentrasi.

---

### 🧭 Analisis Lonjakan Kuantum (*Big Jump*):
Lonjakan ekstrem harga $IE$ terjadi ketika seluruh elektron valensi telah habis dicabut, sehingga elektron berikutnya harus dibongkar paksa dari subkulit gas mulia kulit dalam ($n-1$) yang jaraknya ke inti jauh lebih dekat:
- Jika lonjakan terjadi pada $IE_2$ ($IE_2 \\gg IE_1$), unsur memiliki **1 elektron valensi** (Golongan 1 / Alkali).
- Jika lonjakan terjadi pada $IE_3$ ($IE_3 \\gg IE_2$), unsur memiliki **2 elektron valensi** (Golongan 2 / Alkali Tanah).
- Jika lonjakan terjadi pada $IE_4$ ($IE_4 \\gg IE_3$), unsur memiliki **3 elektron valensi** (Golongan 13 / Aluminium family).

---

### 📊 Dua Anomali Klasik Tren $IE_1$ Sepanjang Periode:

1. **Anomali Golongan 2 vs 13 (Berilium vs Boron, Magnesium vs Aluminium):**
   - $IE_1(\\ce{Be}: 1s^2 2s^2) = 899\\text{ kJ/mol} \\quad > \\quad IE_1(\\ce{B}: 1s^2 2s^2 2p^1) = 801\\text{ kJ/mol}$
   - *Rasionalisasi Kuantum:* Elektron terluar Boron menempati orbital $2p$ yang memiliki energi lebih tinggi dan terperisai efektif oleh sepasang elektron $2s^2$, sehingga elektron $2p$ Boron lebih mudah dilepaskan.

2. **Anomali Golongan 15 vs 16 (Nitrogen vs Oksigen, Fosfor vs Belerang):**
   - $IE_1(\\ce{N}: 2s^2 2p^3) = 1402\\text{ kJ/mol} \\quad > \\quad IE_1(\\ce{O}: 2s^2 2p^4) = 1314\\text{ kJ/mol}$
   - *Rasionalisasi Kuantum:* Nitrogen memiliki subkulit $2p$ setengah penuh yang sangat stabil dengan spin sejajar ($2p_x^1 2p_y^1 2p_z^1$). Pada atom Oksigen ($2p_x^2 2p_y^1 2p_z^1$), terdapat dua elektron yang berpasangan dalam satu orbital $p_x$. Tolakan elektrostatik pasangan elektron (*spin-pairing repulsion*) menaikkan energi elektron dan mempermudah pelepasan satu elektron dari Oksigen.

---

### 💡 Paradoks Afinitas Elektron ($EA$) Halogen: Mengapa Klorin Mengalahkan Fluorin?
Afinitas elektron mengukur perubahan entalpi saat atom gas menangkap satu elektron:
$$\\ce{X(g) + e- -> X-(g)} \\quad (\\Delta H = -EA_1)$$
Secara teori elektronegativitas, Fluorin diharapkan memiliki $EA$ paling eksotermik. Namun data termodinamika membuktikan:
- $EA_1(\\ce{Cl}) = 349\\text{ kJ/mol}$ (Paling eksotermik di seluruh tabel periodik!)
- $EA_1(\\ce{F}) = 328\\text{ kJ/mol}$

**Penjelasan Fisika Kuantum:**  
Atom Fluorin ($n=2$) memiliki volume orbital $2p$ yang luar biasa kecil dan padat. Memasukkan satu elektron tambahan ke dalam ruang sempit yang sudah dihuni 7 elektron valensi menimbulkan gaya tolak-menolak interelektronik yang sangat dahsyat, mengurangi energi stabilisasi bersih yang dilepaskan. Sebaliknya pada Klorin ($n=3$), orbital $3p$ berukuran jauh lebih lega dan difus, sehingga tolakan antar-elektron rendah dan pelepasan energi pembentukan ion $\\ce{Cl-}$ berlangsung lebih maksimal.

---

### 📐 Tiga Skala Elektronegativitas Modern:
1. **Skala Linus Pauling:** Berdasarkan selisih kelebihan energi ikatan kovalen heteronuklir terhadap ikatan homonuklir murni:
   $$|\\chi_{\\ce{A}} - \\chi_{\\ce{B}}| = 0.102 \\sqrt{\\Delta \\text{ (kJ/mol)}} \\quad \\text{dengan } \\Delta = D_{\\ce{A-B}} - \\sqrt{D_{\\ce{A-A}} \\cdot D_{\\ce{B-B}}}$$
2. **Skala Robert Mulliken:** Rerata aritmatika kemampuan atom menahan elektronnya ($IE$) dan menarik elektron baru ($EA$):
   $$\\chi_{\\text{Mulliken}} = \\frac{IE_1 + EA_1}{2}$$
3. **Skala Allred-Rochow:** Mengukur gaya elektrostatik muatan inti efektif Slater pada permukaan kovalen atom:
   $$\\chi_{\\text{AR}} = 0.359 \\left(\\frac{Z_{\\text{eff}}}{r_{\\text{kov}}^2 \\text{ (\\AA)}}\\right) + 0.744$$`,
      keyFormulas: [
        { name: 'Reaksi Energi Ionisasi Pertama', formula: '\\ce{X(g) -> X+(g) + e-} \\quad (\\Delta H = IE_1)' },
        { name: 'Skala Elektronegativitas Mulliken', formula: '\\chi_{\\text{Mulliken}} = \\frac{IE + EA}{2}' },
        { name: 'Skala Elektronegativitas Allred-Rochow', formula: '\\chi_{\\text{AR}} = 0.359 \\frac{Z_{\\text{eff}}}{r_{\\text{kov}}^2} + 0.744' },
      ],
    },
  ],
  worked_examples: [
    {
      tag: 'soal-simpul-orbital',
      tags: ['soal-osk', 'simpul-orbital', 'topologi-orbital'],
      title: 'Contoh Soal OSK 1: Analisis Kuantitatif Simpul Radial, Simpul Sudut, & Topologi Orbital Atom',
      summary: 'Metode sistematis menghitung jumlah bidang nodal planar dan permukaan bola simpul probabilitas elektron nol.',
      content: `### 📋 Skenario & Data Masalah:
Dalam mekanika kuantum atom hidrogenik, fungsi gelombang elektron $\\psi_{n,l,m_l}$ memiliki topologi simpul (*nodal surfaces*) di mana probabilitas menemukan elektron bernilai nol mutlak ($P(r) = 0$).

---

### 🎯 Pertanyaan:
1. Tentukan jumlah simpul radial ($N_r$), simpul sudut ($N_a$), dan total simpul ($N_{\\text{tot}}$) untuk orbital $3d_{z^2}$, $4p_x$, dan $5f_{xyz}$!
2. Jelaskan bentuk geometris spesifik dari simpul sudut pada orbital $3d_{z^2}$ dan $4p_x$!
3. Berapa banyak permukaan bola simpul konsentris yang dimiliki oleh orbital valensi $4s$ atom Kalium?

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Identifikasi Bilangan Kuantum Utama ($n$) dan Azimut ($l$)
- Orbital $3d_{z^2} \\implies n = 3, l = 2$
- Orbital $4p_x \\implies n = 4, l = 1$
- Orbital $5f_{xyz} \\implies n = 5, l = 3$
- Orbital $4s \\implies n = 4, l = 0$

#### Langkah 2: Menghitung Jumlah Bidang Simpul Sudut ($N_a = l$)
- Untuk $3d_{z^2}$: $N_a = 2$. Pada orbital $3d_{z^2}$, kedua simpul sudut ini bukan bidang datar, melainkan berbentuk **dua permukaan kerucut simetris (*conical nodal surfaces*)** yang mengapit donat ekuatorial.
- Untuk $4p_x$: $N_a = 1$, berupa satu bidang datar planar simpul $yz$ yang tegak lurus sumbu cuping $x$ di titik asal ($x = 0$).
- Untuk $5f_{xyz}$: $N_a = 3$, berupa tiga bidang simpul ortogonal ($xy, yz, xz$).
- Untuk $4s$: $N_a = 0$ (orbital $s$ simetris bola sempurna tanpa bidang sudut nodal).

#### Langkah 3: Menghitung Jumlah Permukaan Bola Simpul Radial ($N_r = n - l - 1$)
- Untuk $3d_{z^2}$: $N_r = 3 - 2 - 1 = 0$ (tidak memiliki simpul bola konsentris).
- Untuk $4p_x$: $N_r = 4 - 1 - 1 = 2$ simpul bola radial konsentris.
- Untuk $5f_{xyz}$: $N_r = 5 - 3 - 1 = 1$ simpul bola radial konsentris.
- Untuk $4s$: $N_r = 4 - 0 - 1 = 3$ permukaan bola simpul konsentris.

#### Langkah 4: Evaluasi Total Simpul ($N_{\\text{tot}} = n - 1$) & Tabulasi Hasil

| Orbital Atom | Kulit ($n$) | Azimut ($l$) | Simpul Radial ($N_r$) | Simpul Sudut ($N_a$) | Total Simpul ($N_{\\text{tot}}$) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| $3d_{z^2}$ | 3 | 2 | 0 | 2 (Kerucut simetris) | 2 |
| $4p_x$ | 4 | 1 | 2 | 1 (Bidang datar $yz$) | 3 |
| $5f_{xyz}$ | 5 | 3 | 1 | 3 (Bidang $xy, yz, xz$) | 4 |
| $4s$ | 4 | 0 | 3 | 0 | 3 |

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian Olimpiade (HOTS)
> Selalu ingat aturan emas: **Total simpul hanya bergantung pada $n$ ($N_{\\text{tot}} = n - 1$)**, sedangkan pembagiannya menjadi simpul sudut dikunci oleh $l$ ($N_a = l$). Jika soal menanyakan "berapa banyak simpul bola yang memotong jari-jari", yang dicari adalah $N_r = n - l - 1$.`,
      keyFormulas: [
        { name: 'Simpul Radial', formula: 'N_r = n - l - 1' },
        { name: 'Simpul Sudut', formula: 'N_a = l' },
        { name: 'Total Simpul', formula: 'N_{\\text{tot}} = n - 1' },
      ],
    },
    {
      tag: 'soal-deret-isoelektronik',
      tags: ['soal-osk', 'deret-isoelektronik', 'kontraksi-jari-jari'],
      title: 'Contoh Soal OSK 2: Analisis Rasio Z/e & Kontraksi Jari-Jari Deret Isoelektronik 10 Elektron',
      summary: 'Pengaruh tarikan muatan inti netto terhadap kompresi awan elektron pada kation dan anion isoelektronik.',
      content: `### 📋 Skenario & Data Masalah:
Diberikan lima spesies kimia ionik yang menyusun deret isoelektronik 10 elektron:
$$\\ce{O^2-}, \\ce{F-}, \\ce{Na+}, \\ce{Mg^2+}, \\ce{Al^3+}$$

---

### 🎯 Pertanyaan:
1. Tuliskan konfigurasi elektron keadaan dasar untuk seluruh spesies di atas!
2. Urutkan kelima spesies tersebut dari jari-jari terbesar hingga terkecil!
3. Berikan analisis kuantitatif berdasarkan rasio muatan inti terhadap elektron ($Z/e$) untuk menerangkan mengapa kation $\\ce{Al^3+}$ memiliki ukuran lebih dari $2.5$ kali lebih kecil dibanding anion $\\ce{O^2-}$!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Verifikasi Konfigurasi Elektron Seluruh Spesies
- $\\ce{O^2-} (Z = 8)$: $8 - (-2) = 10 e^- \\implies 1s^2 2s^2 2p^6$
- $\\ce{F-} (Z = 9)$: $9 - (-1) = 10 e^- \\implies 1s^2 2s^2 2p^6$
- $\\ce{Na+} (Z = 11)$: $11 - (+1) = 10 e^- \\implies 1s^2 2s^2 2p^6$
- $\\ce{Mg^2+} (Z = 12)$: $12 - (+2) = 10 e^- \\implies 1s^2 2s^2 2p^6$
- $\\ce{Al^3+} (Z = 13)$: $13 - (+3) = 10 e^- \\implies 1s^2 2s^2 2p^6$  
Seluruh spesies terbukti merupakan deret isoelektronik gas mulia Neon ($[\\ce{Ne}]$).

#### Langkah 2: Perhitungan Rasio Muatan Inti terhadap Elektron ($Z/e$)
Karena jumlah elektron sama ($N_e = 10$), gaya tolak-menolak antar-elektron pada kulit valensi relatif konstan. Faktor penentu ukuran radius adalah besarnya tarikan muatan inti ($+Ze$):
- $\\ce{O^2-}: Z = 8 \\implies Z/e = \\frac{8}{10} = 0.80$
- $\\ce{F-}: Z = 9 \\implies Z/e = \\frac{9}{10} = 0.90$
- $\\ce{Na+}: Z = 11 \\implies Z/e = \\frac{11}{10} = 1.10$
- $\\ce{Mg^2+}: Z = 12 \\implies Z/e = \\frac{12}{10} = 1.20$
- $\\ce{Al^3+}: Z = 13 \\implies Z/e = \\frac{13}{10} = 1.30$

#### Langkah 3: Analisis Medan Elektrostatik Coulombik Netto
Gaya tarik coulomb inti terhadap awan elektron kulit ke-$2$ berbanding lurus dengan muatan inti efektif:
$$F_{\\text{tarik}} \\propto \\frac{Z_{\\text{eff}} \\cdot e}{r^2}$$
- Pada $\\ce{Al^3+}$, sebanyak 13 proton menarik 10 elektron ($Z/e = 1.30$). Muatan positif yang berlebih ini menarik awan elektron $2s^2 2p^6$ sangat kuat ke arah inti, menyebabkan kompresi orbital yang drastis.
- Pada $\\ce{O^2-}$, hanya terdapat 8 proton untuk menarik 10 elektron ($Z/e = 0.80$). Muatan inti yang rendah tidak mampu menahan tolakan interelektronik dengan kuat, sehingga awan elektron mengembang ke luar.

#### Langkah 4: Penyusunan Urutan Radius Ionik Eksperimental
$$\\ce{O^2-} (140\\text{ pm}) > \\ce{F-} (133\\text{ pm}) > \\ce{Na+} (102\\text{ pm}) > \\ce{Mg^2+} (72\\text{ pm}) > \\ce{Al^3+} (53.5\\text{ pm})$$

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian Olimpiade (HOTS)
> Pada deret isoelektronik, semakin positif muatan kation, ukurannya semakin mengerut kerdil ($r \\propto \\frac{1}{Z}$). Rumus cepat eliminasi opsi: cari spesi dengan nomor atom tertinggi ($Z=13$) untuk ukuran terkecil, dan nomor atom terendah ($Z=8$) untuk ukuran terbesar!`,
      keyFormulas: [
        { name: 'Korelasi Ukuran Deret Isoelektronik', formula: 'r_{\\text{ion}} \\propto \\frac{1}{Z/e}' },
      ],
    },
    {
      tag: 'soal-lonjakan-ie',
      tags: ['soal-osp', 'lonjakan-ie', 'valensi-unsur'],
      title: 'Contoh Soal OSP 3: Analisis Lonjakan Energi Ionisasi Bertingkat & Penentuan Rumus Senyawa',
      summary: 'Identifikasi letak golongan unsur periode 3 dari rasio lonjakan kuantum IE1 hingga IE5 dan peramalan geometri kloridanya.',
      content: `### 📋 Skenario & Data Masalah:
Suatu unsur representatif $X$ yang terletak pada Periode 3 tabel periodik memiliki data energi ionisasi bertingkat ($IE_1$ hingga $IE_5$) sebagai berikut:
- $IE_1 = 578\\text{ kJ/mol}$
- $IE_2 = 1817\\text{ kJ/mol}$
- $IE_3 = 2745\\text{ kJ/mol}$
- $IE_4 = 11577\\text{ kJ/mol}$
- $IE_5 = 14842\\text{ kJ/mol}$

---

### 🎯 Pertanyaan:
1. Berapakah jumlah elektron valensi atom $X$? Tentukan golongan dan identitas unsur $X$!
2. Jelaskan penyebab fisis terjadinya lonjakan energi ionisasi yang sangat drastis pada data di atas!
3. Tuliskan rumus senyawa klorida stabil yang dibentuk oleh unsur $X$ dan ramalkan geometri molekulnya dalam fasa gas pada temperatur tinggi!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Tabulasi Data dan Perhitungan Rasio Peningkatan Energi Bertingkat
- Rasio $\\frac{IE_2}{IE_1} = \\frac{1817}{578} = 3.14$ (Kenaikan bertahap pelepasan elektron valensi)
- Rasio $\\frac{IE_3}{IE_2} = \\frac{2745}{1817} = 1.51$ (Kenaikan normal)
- Rasio $\\frac{IE_4}{IE_3} = \\frac{11577}{2745} = \\mathbf{4.22}$ (**Lonjakan Drastis / Big Jump $\\Delta E = +8832\\text{ kJ/mol}$**)
- Rasio $\\frac{IE_5}{IE_4} = \\frac{14842}{11577} = 1.28$ (Kenaikan normal pada kulit dalam)

#### Langkah 2: Deteksi Lokasi Lonjakan Ekstrem Penembusan Kulit Gas Mulia
Lonjakan energi raksasa terjadi antara $IE_3$ dan $IE_4$ (lonjakan lebih dari $8800\\text{ kJ/mol}$).  
Hal ini mengindikasikan bahwa tiga elektron pertama ($IE_1, IE_2, IE_3$) berada pada kulit terluar (kulit valensi $n=3$), sedangkan elektron ke-4 harus ditarik paksa dari kulit bagian dalam ($n=2$) yang memiliki konfigurasi oktet gas mulia stabil $[\\ce{Ne}]$ dengan jarak ke inti yang jauh lebih dekat.

#### Langkah 3: Menentukan Jumlah Elektron Valensi dan Identitas Unsur Periode 3
- Jumlah elektron valensi unsur $X = 3$.
- Golongan unsur: **Golongan 13 (IIIA)**.
- Karena unsur $X$ berada pada Periode 3, maka konfigurasi elektronnya adalah:
  $$[\\ce{Ne}] 3s^2 3p^1 \\implies Z = 13 \\implies \\text{Unsur } X \\text{ adalah Aluminium (}\\ce{Al}\\text{)}$$

#### Langkah 4: Peramalan Senyawa Klorida & Geometri Molekul
- Valensi utama Aluminium adalah $+3$, membentuk klorida biner $\\ce{AlCl3}$.
- Pada fasa gas temperatur tinggi ($T > 400^\\circ\\text{C}$), monomer $\\ce{AlCl3}$ memiliki 3 pasang elektron ikatan (PEI = 3) dan 0 pasang elektron bebas (PEB = 0) pada atom pusat $\\ce{Al}$ (hibridisasi $sp^2$).
- Geometri molekul monomer $\\ce{AlCl3}$ adalah **Trigonal Planar (Segitiga Datar)** dengan sudut ikatan $\\ce{Cl-Al-Cl} = 120^\\circ$.

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian Olimpiade (HOTS)
> Jumlah elektron valensi = Nomor indeks $IE$ tepat sebelum terjadi lonjakan terbesar. Jika lonjakan terjadi pada $IE_{k+1}$, maka elektron valensinya tepat berjumlah $k$.`,
      keyFormulas: [
        { name: 'Kaidah Big Jump IE', formula: '\\text{Jumlah elektron valensi } = k \\iff IE_{k+1} \\gg IE_k' },
      ],
    },
    {
      tag: 'soal-slater-zn',
      tags: ['soal-osn', 'ionisasi-zn', 'aturan-slater', 'zeff-slater'],
      title: 'Contoh Soal OSN 4: Perhitungan Muatan Inti Efektif Slater Zeff Logam Seng dan Ionisasi 4s vs 3d',
      summary: 'Kalkulasi analitik tetapan perisai S dan Zeff untuk membuktikan secara termodinamika pelepasan elektron 4s pada atom Zn.',
      content: `### 📋 Skenario & Data Masalah:
Seng ($\\ce{Zn}$) adalah unsur transisi dengan nomor atom $Z = 30$ dan konfigurasi elektron keadaan dasar $[\\ce{Ar}] 3d^{10} 4s^2$.

---

### 🎯 Pertanyaan:
1. Hitung nilai tetapan pemerisaian Slater ($S$) dan muatan inti efektif ($Z_{\\text{eff}}$) untuk satu elektron pada orbital $4s$ atom Seng!
2. Hitung nilai tetapan pemerisaian Slater ($S$) dan muatan inti efektif ($Z_{\\text{eff}}$) untuk satu elektron pada orbital $3d$ atom Seng!
3. Berdasarkan hasil perhitungan kuantitatif tersebut, berikan argumentasi teoretis mengapa ionisasi atom Seng membentuk kation $\\ce{Zn^2+}$ menghasilkan konfigurasi $[\\ce{Ar}] 3d^{10}$ dan bukan $[\\ce{Ar}] 3d^8 4s^2$!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Pengelompokan Formal Slater untuk Atom Seng ($Z = 30$)
Urutkan dalam kelompok kurung kulit dan orbital:
$$(1s)^2 \\quad (2s, 2p)^8 \\quad (3s, 3p)^8 \\quad (3d)^{10} \\quad (4s)^2$$

#### Langkah 2: Perhitungan $S$ dan $Z_{\\text{eff}}$ untuk Elektron Valensi $4s$
Elektron yang diuji berada pada kelompok $(4s, 4p)$.
- Sesama kelompok $(4s)$: terdapat $2 - 1 = 1$ elektron lain $\\implies 1 \\times 0.35 = 0.35$
- Kulit $(n-1) = 3$ (mencakup subkulit $3s, 3p, 3d$): terdapat $2 + 6 + 10 = 18$ elektron $\\implies 18 \\times 0.85 = 15.30$
- Kulit $(n-2)$ atau lebih dalam (kulit $n=1$ dan $n=2$): terdapat $2 + 8 = 10$ elektron $\\implies 10 \\times 1.00 = 10.00$
$$S(4s) = 0.35 + 15.30 + 10.00 = 25.65$$
$$Z_{\\text{eff}}(4s) = Z - S(4s) = 30 - 25.65 = \\mathbf{+4.35}$$

#### Langkah 3: Perhitungan $S$ dan $Z_{\\text{eff}}$ untuk Elektron $3d$
Elektron yang diuji berada pada kelompok $(3d)$.
- Sisi kanan $(4s)$: elektron $4s$ berada di sebelah kanan $(3d) \\implies$ kontribusi $= 0$
- Sesama kelompok $(3d)$: terdapat $10 - 1 = 9$ elektron lain $\\implies 9 \\times 0.35 = 3.15$
- Seluruh elektron di sebelah kirinya (kelompok $1s, 2s, 2p, 3s, 3p$): terdapat $2 + 8 + 8 = 18$ elektron $\\implies 18 \\times 1.00 = 18.00$
$$S(3d) = 3.15 + 18.00 = 21.15$$
$$Z_{\\text{eff}}(3d) = Z - S(3d) = 30 - 21.15 = \\mathbf{+8.85}$$

#### Langkah 4: Evaluasi Rasionalisasi Termodinamika Pembentukan $\\ce{Zn^2+}$
Energi ikatan elektron pada orbital atom hidrogenik/berelektron banyak sebanding dengan:
$$E_i \\propto -\\frac{Z_{\\text{eff}}^2}{n_{\\text{eff}}^2}$$
- Nilai $Z_{\\text{eff}}(3d) = +8.85$ jauh melampaui $Z_{\\text{eff}}(4s) = +4.35$.
- Tarikan elektrostatik inti terhadap elektron $3d$ lebih dari dua kali lipat lebih kuat dibanding terhadap elektron $4s$.
- Selain itu, jari-jari rata-rata orbital $4s$ ($n=4$) jauh lebih besar daripada orbital $3d$ ($n=3$). Oleh karena itu, elektron $4s$ berada pada potensial yang jauh lebih dangkal dan terikat lebih lemah.
- Saat atom Seng terionisasi menjadi kation $\\ce{Zn^2+}$, kedua elektron $4s$ lepas terlebih dahulu menghasilkan konfigurasi pseudo-gas mulia $[\\ce{Ar}] 3d^{10}$ yang sangat stabil.

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian Olimpiade (HOTS)
> Nilai $Z_{\\text{eff}}$ Slater untuk orbital $d$ selalu jauh lebih tinggi daripada orbital $s$ di kulit terluarnya pada logam transisi deret pertama. Fakta inilah fondasi mutlak mengapa seluruh logam transisi membentuk kation dengan melepaskan elektron $s$ terlebih dahulu!`,
      keyFormulas: [
        { name: 'Slater Zeff(4s) Zn', formula: 'Z_{\\text{eff}}(4s) = 30 - 25.65 = +4.35' },
        { name: 'Slater Zeff(3d) Zn', formula: 'Z_{\\text{eff}}(3d) = 30 - 21.15 = +8.85' },
      ],
    },
    {
      tag: 'soal-anomali-afinitas-born-haber',
      tags: ['soal-osn', 'anomali-afinitas', 'siklus-born-haber'],
      title: 'Contoh Soal IChO 5: Termodinamika Anomali Afinitas Elektron Halogen & Siklus Born-Haber',
      summary: 'Analisis entalpi pembentukan kisi kristal LiF vs LiCl untuk menerangkan mengapa senyawa fluorida lebih stabil meskipun afinitas elektron F lebih rendah.',
      content: `### 📋 Skenario & Data Masalah:
Data termodinamika standar untuk unsur halogen Fluorin dan Klorin adalah sebagai berikut:
- Afinitas Elektron Pertama ($EA_1$): $\\ce{F} = 328\\text{ kJ/mol}$, $\\ce{Cl} = 349\\text{ kJ/mol}$
- Energi Disosiasi Ikatan ($D_{\\ce{X2}}$): $\\ce{F2} = 158\\text{ kJ/mol}$, $\\ce{Cl2} = 242\\text{ kJ/mol}$
- Jari-jari ion halida ($r_{\\ce{X-}}$): $\\ce{F-} = 133\\text{ pm}$, $\\ce{Cl-} = 181\\text{ pm}$
- Jari-jari kation litium ($r_{\\ce{Li+}}$) $= 76\\text{ pm}$
- Entalpi sublimasi Litium: $\\Delta H_{\\text{sub}}(\\ce{Li}) = +159\\text{ kJ/mol}$
- Energi Ionisasi Pertama Litium: $IE_1(\\ce{Li}) = +520\\text{ kJ/mol}$

---

### 🎯 Pertanyaan:
1. Mengapa afinitas elektron Fluorin lebih rendah (kurang eksotermik) dibanding Klorin?
2. Gunakan persamaan Kapustinskii untuk memperkirakan perbandingan energi kisi ($U_L$) kristal $\\ce{LiF(s)}$ terhadap $\\ce{LiCl(s)}$!
3. Buktikan melalui Siklus Termodinamika Born-Haber bahwa senyawa litium fluorida ($\\ce{LiF}$) tetap jauh lebih stabil (memiliki $\\Delta H_f^\\circ$ jauh lebih negatif) dibanding litium klorida ($\\ce{LiCl}$)!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Analisis Kuantum Anomali Afinitas Elektron Halogen
Atom Fluorin berada pada periode 2 dengan orbital valensi $2p$ yang sangat kompak. Ketika elektron baru masuk ke dalam awan $2p$ yang sempit, gaya tolak-menolak interelektronik sangat intensif, mereduksi stabilitas termodinamika netto. Pada Klorin, orbital $3p$ berukuran lebih besar dan lebih difus, sehingga tolakan elektron baru jauh lebih kecil, menghasilkan nilai $EA_1$ yang lebih eksotermik ($349\\text{ kJ/mol}$ vs $328\\text{ kJ/mol}$).

#### Langkah 2: Perhitungan Jarak Antar-Inti Kristal Garam
Jarak antar-inti kation-anion ($d = r_+ + r_-$):
- Untuk $\\ce{LiF}$: $d = r_{\\ce{Li+}} + r_{\\ce{F-}} = 76\\text{ pm} + 133\\text{ pm} = 209\\text{ pm}$
- Untuk $\\ce{LiCl}$: $d = r_{\\ce{Li+}} + r_{\\ce{Cl-}} = 76\\text{ pm} + 181\\text{ pm} = 257\\text{ pm}$

#### Langkah 3: Estimasi Perbandingan Energi Kisi Kristal (Persamaan Kapustinskii)
Persamaan Kapustinskii menyatakan bahwa energi kisi kristal ionik berbanding terbalik dengan jarak antar-inti ion:
$$U_L \\propto \\frac{|z_+ z_-|}{r_+ + r_-}$$
$$\\frac{U_L(\\ce{LiF})}{U_L(\\ce{LiCl})} \\approx \\frac{d(\\ce{LiCl})}{d(\\ce{LiF})} = \\frac{257\\text{ pm}}{209\\text{ pm}} \\approx 1.23$$
Energi kisi kristal $\\ce{LiF}$ bernilai sekitar $-1036\\text{ kJ/mol}$, jauh lebih eksotermik sebesar **$183\\text{ kJ/mol}$** dibanding $\\ce{LiCl}$ ($-853\\text{ kJ/mol}$).

#### Langkah 4: Evaluasi Siklus Termodinamika Born-Haber
Siklus Born-Haber untuk pembentukan $\\ce{LiX(s)}$ dari unsur-unsurnya:
$$\\Delta H_f^\\circ = \\Delta H_{\\text{sub}}(\\ce{Li}) + IE_1(\\ce{Li}) + \\frac{1}{2} D(\\ce{X2}) - EA_1(\\ce{X}) + U_L(\\ce{LiX})$$
- Defisit energi dari afinitas elektron Fluorin yang lebih rendah hanyalah $21\\text{ kJ/mol}$ ($349 - 328$).
- Namun, keuntungan kestabilan dari energi disosiasi ikatan $\\ce{F2}$ yang lebih rendah adalah $\\frac{1}{2}(242 - 158) = +42\\text{ kJ/mol}$.
- Ditambah keunggulan energi kisi $\\ce{LiF}$ yang lebih eksotermik sebesar $+183\\text{ kJ/mol}$.
- Akibatnya, nilai $\\Delta H_f^\\circ(\\ce{LiF}) = -616\\text{ kJ/mol}$ jauh lebih eksotermik (jauh lebih stabil) daripada $\\Delta H_f^\\circ(\\ce{LiCl}) = -408.6\\text{ kJ/mol}$.

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian Olimpiade (HOTS)
> Meskipun afinitas elektron Fluorin lebih rendah dari Klorin akibat desakan awan elektron $2p$, senyawa ionik fluorida selalu memiliki entalpi pembentukan paling negatif di antara semua halida karena radius mungil $\\ce{F-}$ menghasilkan energi kisi kristal ($U_L$) yang dahsyat!`,
      keyFormulas: [
        { name: 'Persamaan Energi Kisi Kapustinskii', formula: 'U_L \\propto \\frac{|z_+ z_-|}{r_+ + r_-}' },
        { name: 'Siklus Termodinamika Born-Haber', formula: '\\Delta H_f^\\circ = \\Delta H_{\\text{sub}} + IE_1 + \\frac{1}{2}D - EA_1 + U_L' },
      ],
    },
  ],
};

export const OSN_TOPIC_1: MaterialItem = {
  ...RAW_OSN_TOPIC_1,
  prerequisites: RAW_OSN_TOPIC_1.prerequisites.map((b) => ({
    ...b,
    checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_01[b.tag] || [],
  })),
  core_concepts: RAW_OSN_TOPIC_1.core_concepts.map((b) => ({
    ...b,
    checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_01[b.tag] || [],
  })),
  worked_examples: RAW_OSN_TOPIC_1.worked_examples.map((b) => ({
    ...b,
    checkpointQuizzes: undefined, // Contoh soal bebas kuis agar siswa fokus ke pembahasan
  })),
};
