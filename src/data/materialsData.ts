/**
 * materialsData.ts
 * Database Materi Sains Kimia Terstruktur Standar Puspresnas & IChO
 * Alur Pembelajaran 3 Tahap:
 * 1. Konsep Prasyarat yang Dibutuhkan
 * 2. Konsep Materi Inti
 * 3. Contoh dan Penjelasan Soal OSN Berkaitan
 * Setiap konsep memiliki tag unik yang terhubung dengan soal pada Worksheet
 */

export interface ConceptBlock {
  tag: string; // Tag slug unik untuk id DOM ('concept-${block.tag}') dan URL anchor
  tags?: string[]; // Array tag-tag atomik spesifik (misal: ['entalpi-reaksi', 'hukum-hess', 'hukum-kirchhoff'])
  title: string;
  summary: string;
  content: string; // Penjelasan terperinci berformat KaTeX ($...$ dan $...$) serta mhchem
  keyFormulas?: { name: string; formula: string }[];
}

export interface MaterialItem {
  id: number;
  topic_number: number; // Nomor urut topik silabus 1 s.d. 10
  title: string;
  slug: string;
  category: string;
  level: 'OSN-K' | 'OSN-P' | 'OSN' | 'IChO' | 'SMA';
  readTimeMinutes: number;
  summary: string;
  allTags: string[];
  // 3 Tahap Alur Pedagogis:
  prerequisites: ConceptBlock[];
  core_concepts: ConceptBlock[];
  worked_examples: ConceptBlock[];
}

export const OSN_MATERIALS: MaterialItem[] = [
  // ==========================================
  // TOPIK 1: STRUKTUR ATOM & PERIODISITAS UNSUR
  // ==========================================
  {
    id: 1,
    topic_number: 1,
    title: 'Struktur Atom & Periodisitas Unsur',
    slug: 'struktur-atom-periodisitas',
    category: 'Kimia Teori Dasar',
    level: 'OSN',
    readTimeMinutes: 30,
    summary: 'Kajian komprehensif model atom Bohr, dualisme de Broglie, mekanika kuantum Schrödinger, 4 bilangan kuantum, topologi simpul radial & sudut, aturan perisai Slater (Z_eff), tren periodik, deret isoelektronik, anomali energi ionisasi, serta termodinamika afinitas elektron.',
    allTags: [
      'model-atom-bohr',
      'de-broglie-heisenberg',
      'konfigurasi-elektron',
      'bilangan-kuantum',
      'simpul-radial-sudut',
      'aturan-slater',
      'zeff-slater',
      'deret-isoelektronik',
      'anomali-energi-ionisasi',
      'anomali-afinitas-elektron',
      'soal-simpul-orbital',
      'soal-deret-isoelektronik',
      'soal-lonjakan-ie',
      'soal-slater-zn',
      'soal-anomali-afinitas-born-haber',
      'spektrum-hidrogen',
      'jari-jari-atom',
      'kontraksi-lantanida',
      'elektronegativitas',
      'kuantisasi-energi',
      'de-broglie',
      'ketidakpastian-heisenberg',
      'dualisme-partikel',
      'aufbau',
      'larangan-pauli',
      'aturan-hund',
      'persamaan-schrodinger',
      'orbital-atom',
      'simpul-radial',
      'simpul-sudut',
      'densitas-probabilitas',
      'muatan-inti-efektif',
      'pemerisaian-elektron',
      'jari-jari-ion',
      'energi-ionisasi',
      'anomali-ie',
      'afinitas-elektron',
      'soal-osk',
      'simpul-orbital',
      'topologi-orbital',
      'kontraksi-jari-jari',
      'soal-osp',
      'lonjakan-ie',
      'valensi-unsur',
      'soal-osn',
      'ionisasi-zn',
      'anomali-afinitas',
      'siklus-born-haber',
    ],
    prerequisites: [
      {
        tag: 'model-atom-bohr',
      tags: ["model-atom-bohr","spektrum-hidrogen","kuantisasi-energi"],
        title: 'Prasyarat 1: Model Atom Bohr, Kuantisasi Momentum Sudut, & Deret Spektrum Hidrogen',
        summary: 'Pondasi kuantisasi orbit elektron, postulat momentum sudut Bohr, dan kalkulasi panjang gelombang foton spektrum hidrogen.',
        content: `Sebelum melangkah ke mekanika gelombang Schrödinger kuantum modern, pemahaman mengenai model atom hidrogen Niels Bohr (1913) merupakan prasyarat mutlak. Bohr menggabungkan teori kuantum Planck dengan fisika klasik untuk merumuskan postulat bahwa elektron hanya dapat berputar mengelilingi inti pada orbit melingkar stasioner tertentu tanpa memancarkan radiasi.

### 1. Postulat Kuantisasi Momentum Sudut Bohr:
Momentum sudut orbital elektron ($L$) tidak kontinu, melainkan terkuantisasi dalam kelipatan bilangan bulat dari $\\hbar = \\frac{h}{2\\pi}$:
$$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar \\quad (n = 1, 2, 3, \\dots)$$

Dengan menyetarakan gaya sentripetal mekanika klasik dengan gaya tarik coulomb elektrostatik antara inti bermuatan $+Ze$ dan elektron $-e$:
$$\\frac{m_e v^2}{r} = \\frac{1}{4\\pi \\epsilon_0} \\frac{Z e^2}{r^2}$$

Diperoleh jari-jari orbit stasioner ke-$n$ (jari-jari Bohr):
$$r_n = \\frac{4\\pi \\epsilon_0 \\hbar^2}{m_e e^2} \\left(\\frac{n^2}{Z}\\right) = a_0 \\frac{n^2}{Z}$$
dengan jari-jari Bohr untuk hidrogen ($Z=1, n=1$) adalah $a_0 = 0.529\\text{ \\AA} = 52.9\\text{ pm}$.

### 2. Energi Total Elektron & Spektrum Rydberg:
Energi total elektron pada kulit ke-$n$ untuk spesies hidrogenik (spesies 1 elektron seperti $\\ce{H}$, $\\ce{He+}$, $\\ce{Li^2+}$, $\\ce{Be^3+}$) adalah:
$$E_n = -R_H \\left(\\frac{Z^2}{n^2}\\right) = -13.6\\text{ eV} \\times \\frac{Z^2}{n^2} = -\\frac{2.179 \\times 10^{-18}\\text{ J} \\cdot Z^2}{n^2}$$

Ketika elektron bertransisi dari tingkat energi tinggi ($n_2$) ke tingkat energi lebih rendah ($n_1$), foton dipancarkan dengan panjang gelombang yang dirumuskan oleh Persamaan Rydberg:
$$\\frac{1}{\\lambda} = R_\\infty Z^2 \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$$
dengan tetapan Rydberg $R_\\infty = 1.09737 \\times 10^7\\text{ m}^{-1}$.

### Deret Spektrum Garis Emisi Atom Hidrogen:

| Deret Spektrum | Kulit Tujuan ($n_1$) | Kulit Asal ($n_2$) | Wilayah Spektrum Foton |
| :--- | :---: | :---: | :--- |
| **Lyman** | $n_1 = 1$ | $2, 3, 4, \\dots$ | Ultraviolet (UV) |
| **Balmer** | $n_1 = 2$ | $3, 4, 5, \\dots$ | Cahaya Tampak (Visible: 400–700 nm) |
| **Paschen** | $n_1 = 3$ | $4, 5, 6, \\dots$ | Inframerah Dekat (Near-IR) |
| **Brackett** | $n_1 = 4$ | $5, 6, 7, \\dots$ | Inframerah Tengah (Mid-IR) |
| **Pfund** | $n_1 = 5$ | $6, 7, 8, \\dots$ | Inframerah Jauh (Far-IR) |

> **Keterbatasan Model Bohr dalam Analisis Olimpiade Kimia:**  
> 1. Hanya berlaku akurat untuk sistem berspesies satu elektron.  
> 2. Gagal menjelaskan spektrum atom berelektron banyak karena mengabaikan efek tolak-menolak antar-elektron (*electron-electron repulsion*).  
> 3. Mengasumsikan lintasan elektron berupa orbit planar melingkar pasti, yang secara mendasar bertentangan dengan Prinsip Ketidakpastian Heisenberg.`,
        keyFormulas: [
          { name: 'Kuantisasi Momentum Sudut Bohr', formula: 'L = m_e v r = n\\hbar = n \\frac{h}{2\\pi}' },
          { name: 'Radius Orbit Bohr', formula: 'r_n = a_0 \\frac{n^2}{Z} \\quad (a_0 = 52.9\\text{ pm})' },
          { name: 'Energi Kuantum Elektron Hidrogenik', formula: 'E_n = -13.6\\text{ eV} \\times \\frac{Z^2}{n^2}' },
          { name: 'Persamaan Rydberg Foton Transisi', formula: '\\frac{1}{\\lambda} = R_\\infty Z^2 \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)' },
        ],
      },
      {
        tag: 'de-broglie-heisenberg',
      tags: ["de-broglie","ketidakpastian-heisenberg","dualisme-partikel"],
        title: 'Prasyarat 2: Dualisme Gelombang-Partikel De Broglie & Prinsip Ketidakpastian Heisenberg',
        summary: 'Konsepsi gelombang materi partikel subatomik dan batasan fundamental pengukuran posisi-momentum.',
        content: `Kegagalan model Bohr memicu revolusi mekanika kuantum pada dekade 1920-an melalui dua prinsip ilmiah fundamental:

### 1. Hipotesis Gelombang Materi Louis de Broglie (1924):
Jika radiasi elektromagnetik (cahaya) yang secara historis dianggap gelombang dapat berperilaku sebagai partikel (foton Einstein), maka partikel bermassa seperti elektron juga harus memiliki sifat gelombang:
$$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$$
di mana $h = 6.626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ adalah tetapan Planck, $p$ adalah momentum, dan $v$ adalah kecepatan partikel.

Bila elektron dipercepat melalui beda potensial listrik $V_a$, energi kinetiknya adalah $E_k = e V_a = \\frac{p^2}{2m_e}$, sehingga panjang gelombang de Broglie elektron menjadi:
$$\\lambda = \\frac{h}{\\sqrt{2 m_e e V_a}}$$

Karakter gelombang elektron ini dibuktikan secara eksperimental oleh Clinton Davisson dan Lester Germer (1927) melalui fenomena difraksi berkas elektron saat ditembakkan ke kristal nikel, melahirkan teknologi Mikroskop Elektron (TEM/SEM) yang memiliki resolusi jauh melampaui mikroskop optik.

### 2. Prinsip Ketidakpastian Werner Heisenberg (1927):
Mustahil untuk menentukan secara serempak posisi ($x$) dan momentum linear ($p_x$) dari suatu partikel kuantum dengan tingkat kepastian tak terbatas:
$$\\Delta x \\cdot \\Delta p_x \\ge \\frac{\\hbar}{2} = \\frac{h}{4\\pi}$$
di mana $\\Delta x$ adalah ketidakpastian pengukuran posisi dan $\\Delta p_x = m \\Delta v_x$ adalah ketidakpastian pengukuran momentum.

> **Dampak Konseptual terhadap Model Atom Modern:**  
> Karena posisi dan lintasan elektron tidak pernah dapat ditentukan secara eksak sebagai garis orbit melingkar ala Bohr, deskripsi gerak elektron digantikan oleh **Fungsi Gelombang Probabilitas ($\\psi$)**. Ruang 3 dimensi dengan kebolehjadian terbesar ($\\ge 90\\%$) menemukan elektron inilah yang kita sebut sebagai **Orbital Atom**.`,
        keyFormulas: [
          { name: 'Panjang Gelombang De Broglie', formula: '\\lambda = \\frac{h}{p} = \\frac{h}{m v}' },
          { name: 'Prinsip Ketidakpastian Heisenberg', formula: '\\Delta x \\cdot \\Delta p_x \\ge \\frac{h}{4\\pi}' },
        ],
      },
      {
        tag: 'konfigurasi-elektron',
      tags: ["konfigurasi-elektron","aufbau","larangan-pauli","aturan-hund"],
        title: 'Prasyarat 3: Asas Aufbau, Larangan Pauli, Aturan Hund, & Anomali Logam Transisi',
        summary: 'Aturan penataan elektron atom berelektron banyak, konfigurasi ionik, dan stabilisasi exchange energy.',
        content: `Penataan elektron pada atom berelektron banyak dalam keadaan dasar (*ground state*) diatur oleh 3 prinsip baku mekanika kuantum:

### 1. Tiga Asas Utama Pengisian Orbital:
1. **Asas Aufbau ($n + l$):** Elektron menempati orbital dengan tingkat energi terendah terlebih dahulu. Energi orbital ditentukan oleh nilai $(n + l)$. Jika terdapat dua orbital dengan nilai $(n + l)$ sama, orbital dengan nilai $n$ lebih kecil memiliki energi lebih rendah.  
   *Urutan energi pengisian:* $1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d < 5p < 6s < 4f < 5d < 6p \\dots$
2. **Prinsip Larangan Pauli:** Tidak boleh ada dua elektron dalam satu atom yang memiliki keempat bilangan kuantum ($n, l, m_l, m_s$) yang identik. Oleh karena itu, satu orbital spasial maksimal menampung 2 elektron dengan arah spin yang berlawanan (antiparalel: $\\uparrow\\downarrow$).
3. **Aturan Hund:** Pada orbital-orbital yang terdegenerasi (setara energi, misal $2p_x, 2p_y, 2p_z$), elektron menempati orbital secara terpisah dengan arah spin sejajar (paralel) sebelum berpasangan, guna meminimalkan tolakan coulombik antar-elektron.

---

### 2. Anomali Kestabilan Subkulit Penuh & Setengah Penuh:
Eksperimen spektroskopi menunjukkan adanya deviasi dari asas Aufbau reguler pada beberapa logam transisi:
- **Kromium ($\\ce{Cr}, Z=24$):** $[\\ce{Ar}] 4s^1 3d^5$ (bukan $[\\ce{Ar}] 4s^2 3d^4$)
- **Tembaga ($\\ce{Cu}, Z=29$):** $[\\ce{Ar}] 4s^1 3d^{10}$ (bukan $[\\ce{Ar}] 4s^2 3d^9$)
- **Molibdenum ($\\ce{Mo}, Z=42$):** $[\\ce{Kr}] 5s^1 4d^5$
- **Perak ($\\ce{Ag}, Z=47$):** $[\\ce{Kr}] 5s^1 4d^{10}$

**Rasionalisasi Fisika Kuantum (*Exchange Energy*):**  
Kestabilan khusus konfigurasi setengah penuh ($d^5$) dan penuh ($d^{10}$) disebabkan oleh dua faktor:
1. **Simetri Ruang Orbital:** Distribusi muatan bola yang simetris meminimalkan interaksi gaya tolak-menolak antar-elektron.
2. **Energi Pertukaran (*Exchange Energy*, $K_{\\text{ex}}$):** Elektron-elektron dengan spin searah dapat bertukar orbital satu sama lain secara kuantum tanpa melanggar larangan Pauli. Energi stabilisasi pertukaran bernilai negatif dan sebanding dengan jumlah pasangan kemungkinan pertukaran:
   $$N_{\\text{pasangan}} = \\frac{n(n-1)}{2}$$
   Pada konfigurasi $d^5$ (5 elektron spin sejajar), terdapat $\\frac{5 \\times 4}{2} = 10$ pasangan pertukaran. Sedangkan pada $d^4$, hanya terdapat $\\frac{4 \\times 3}{2} = 6$ pasangan pertukaran. Peningkatan 4 pasangan pertukaran memberikan stabilisasi termodinamika yang cukup untuk mengompensasi promosi elektron dari $4s$ ke $3d$.

---

### 3. Konfigurasi Elektron Pembentukan Kation Logam Transisi:
> **Peringatan Penting Soal OSN:**  
> Meskipun orbital $4s$ terisi lebih dahulu daripada $3d$ saat atom netral dibentuk (karena $4s$ memiliki nilai $n+l=4$ sedangkan $3d$ bernilai $n+l=5$), **ketika logam transisi terionisasi menjadi kation, elektron $4s$ selalu dilepaskan terlebih dahulu sebelum elektron $3d$!**  
> - Besi netral ($\\ce{Fe}, Z=26$): $[\\ce{Ar}] 4s^2 3d^6$  
> - Ion $\\ce{Fe^2+}$: $[\\ce{Ar}] 3d^6$ (bukan $[\\ce{Ar}] 4s^2 3d^4$)  
> - Ion $\\ce{Fe^3+}$: $[\\ce{Ar}] 3d^5$  
> Hal ini dibuktikan secara matematis melalui Aturan Perisai Slater pada Konsep Inti 3.`,
        keyFormulas: [
          { name: 'Aturan Pengisian Aufbau', formula: '\\text{Energi berbanding lurus dengan } n + l' },
          { name: 'Energi Pertukaran Kuantum', formula: 'N_{\\text{exchange}} = \\frac{n(n-1)}{2}' },
        ],
      },
    ],
    core_concepts: [
      {
        tag: 'bilangan-kuantum',
      tags: ["bilangan-kuantum","persamaan-schrodinger","orbital-atom"],
        title: 'Konsep Inti 1: Persamaan Gelombang Schrödinger & Empat Bilangan Kuantum',
        summary: 'Dekomposisi fungsi gelombang spasial-radial dan interpretasi fisis 4 bilangan kuantum kuaterner.',
        content: `Model atom modern didasarkan pada penyelesaian Persamaan Gelombang Erwin Schrödinger independen-waktu (1926) untuk partikel elektron dalam potensial medan coulomb inti atom:
$$\\hat{H}\\psi = E\\psi \\iff \\left( -\\frac{\\hbar^2}{2m_e} \\nabla^2 + V(r) \\right)\\psi = E\\psi$$

Pada sistem koordinat polar bola $(r, \\theta, \\phi)$, fungsi gelombang elektron hidrogenik dapat dipisahkan (*separable*) menjadi bagian radial dan bagian angular (sudut):
$$\\psi_{n,l,m_l}(r, \\theta, \\phi) = R_{n,l}(r) \\cdot Y_{l,m_l}(\\theta, \\phi) = R_{n,l}(r) \\cdot \\Theta_{l,m_l}(\\theta) \\cdot \\Phi_{m_l}(\\phi)$$

Penyelesaian matematis persamaan diferensial ini menghasilkan tiga bilangan kuantum spasial ($n, l, m_l$), yang dilengkapi oleh satu bilangan kuantum spin intrinsik Dirac ($m_s$):

### Karakteristik Empat Bilangan Kuantum:

| Bilangan Kuantum | Simbol | Nilai yang Diizinkan | Makna Fisik & Informasi Kuantum |
| :--- | :---: | :--- | :--- |
| **Utama (Principal)** | $n$ | $1, 2, 3, 4, \\dots$ | Menentukan tingkat energi mayor, kulit atom ($K, L, M, N$), dan ukuran/radius orbital. |
| **Azimut (Orbital Angular)** | $l$ | $0, 1, 2, \\dots, n-1$ | Menentukan bentuk geometri orbital ($0=s, 1=p, 2=d, 3=f$) dan besar momentum sudut orbital: $L = \\sqrt{l(l+1)}\\hbar$. |
| **Magnetik Spasial** | $m_l$ | $-l, \\dots, 0, \\dots, +l$ | Menentukan orientasi spasial orbital dalam ruang 3D terhadap sumbu kuantisasi eksternal. Terdapat total $(2l+1)$ orientasi orbital dalam tiap subkulit. |
| **Spin Elektron** | $m_s$ | $+\\frac{1}{2}, -\\frac{1}{2}$ | Menentukan momentum sudut spin intrinsik elektron: $S_z = m_s \\hbar$, dengan orientasi medan magnet searah atau berlawanan sumbu kuantisasi. |

### Hubungan Kuantitas Orbital & Kapasitas Elektron:
- Jumlah subkulit dalam kulit ke-$n$: $n$ subkulit.
- Jumlah orbital dalam satu subkulit: $N_{\\text{orbital/subkulit}} = 2l + 1$.
- Jumlah total orbital dalam kulit ke-$n$:
  $$N_{\\text{tot orbital}} = \\sum_{l=0}^{n-1} (2l + 1) = n^2$$
- Kapasitas maksimum elektron dalam kulit ke-$n$ (berdasarkan larangan Pauli):
  $$N_{\\text{maks elektron}} = 2n^2$$`,
        keyFormulas: [
          { name: 'Besar Momentum Sudut Orbital', formula: 'L = \\sqrt{l(l+1)}\\hbar' },
          { name: 'Jumlah Orbital dalam Kulit n', formula: 'N_{\\text{orbital}} = n^2' },
          { name: 'Kapasitas Maksimum Elektron Kulit n', formula: 'N_{\\text{maks}} = 2n^2' },
        ],
      },
      {
        tag: 'simpul-radial-sudut',
      tags: ["simpul-radial","simpul-sudut","densitas-probabilitas"],
        title: 'Konsep Inti 2: Analisis Bidang Simpul (Radial & Angular Nodes) & Probabilitas Densitas',
        summary: 'Kalkulasi topologi daerah probabilitas elektron nol pada fungsi gelombang dan pemahaman kurva densitas radial.',
        content: `Probabilitas menemukan elektron pada suatu elemen volume ruang $dV$ dinyatakan oleh kuadrat mutlak fungsi gelombang:
$$dP = |\\psi|^2 dV$$

Daerah di mana nilai fungsi gelombang melintasi nol ($\\psi = 0$), sehingga kebolehjadian menemukan elektron bernilai nol mutlak ($|\\psi|^2 = 0$), dinamakan **Simpul (Node)**.

---

### Dua Kategori Bidang Simpul dalam Orbital:
1. **Simpul Radial (*Radial Nodes*, $N_r$):**
   - Merupakan permukaan bola berongga konsentris di sekitar inti atom tempat fungsi bagian radial bernilai nol: $R_{n,l}(r) = 0$.
   - Dirumuskan secara eksak oleh:
     $$N_r = n - l - 1$$
2. **Simpul Sudut (*Angular / Planar Nodes*, $N_a$):**
   - Merupakan bidang datar (seperti bidang $xy, yz, xz$) atau permukaan kerucut tempat fungsi bagian sudut bernilai nol: $Y_{l,m_l}(\\theta, \\phi) = 0$.
   - Dirumuskan oleh:
     $$N_a = l$$
3. **Total Simpul (*Total Nodes*, $N_{\\text{tot}}$):**
   - Jumlah akumulasi seluruh simpul radial dan sudut pada sebuah orbital:
     $$N_{\\text{tot}} = N_r + N_a = (n - l - 1) + l = n - 1$$

---

### Kurva Fungsi Distribusi Probabilitas Radial ($4\\pi r^2 R^2(r)$):
Fungsi distribusi probabilitas radial $P(r) = 4\\pi r^2 R^2(r)$ mengukur kebolehjadian menemukan elektron pada cangkang bola tipis berjarak $r$ dari inti:
- **Pada Inti Atom ($r = 0$):** Meskipun fungsi gelombang radial orbital $s$ ($R(0)$) bernilai maksimum, probabilitas radial $P(0) = 4\\pi (0)^2 R^2(0) = 0$ karena volume cangkang bola pada titik pusat adalah nol.
- **Puncak Kurva Terluar:** Menunjukkan jarak dari inti dengan kebolehjadian elektron paling tinggi (pada atom hidrogen $1s$, puncak kurva terletak tepat pada jari-jari Bohr $a_0 = 52.9\\text{ pm}$).
- **Penetrasi Orbital (*Orbital Penetration*):**  
  Orbital $2s$ memiliki 1 simpul radial ($N_r = 2 - 0 - 1 = 1$), yang menghasilkan sebuah punuk kecil probabilitas yang berada sangat dekat dengan inti sebelum punuk utamanya. Punuk kecil ini memungkinkan elektron $s$ menembus awan elektron dalam lebih baik daripada elektron $p$. Akibatnya, pada kulit yang sama, kemampuan penetrasi ke inti mengikuti urutan:
  $$s > p > d > f$$`,
        keyFormulas: [
          { name: 'Jumlah Simpul Radial', formula: 'N_r = n - l - 1' },
          { name: 'Jumlah Simpul Sudut', formula: 'N_a = l' },
          { name: 'Jumlah Total Simpul', formula: 'N_{\\text{tot}} = n - 1' },
          { name: 'Fungsi Distribusi Radial', formula: 'P(r) = 4\\pi r^2 [R_{n,l}(r)]^2' },
        ],
      },
      {
        tag: 'aturan-slater',
      tags: ["aturan-slater","zeff-slater","muatan-inti-efektif","pemerisaian-elektron"],
        title: 'Konsep Inti 3: Muatan Inti Efektif ($Z_{\\text{eff}}$), Aturan Perisai Slater, & Penetrasi Orbital',
        summary: 'Formulasi matematis John C. Slater untuk menghitung medan inti efektif yang dirasakan elektron valensi.',
        content: `Dalam atom berelektron banyak, setiap elektron tidak merasakan tarikan penuh dari seluruh muatan positif inti ($+Ze$). Elektron-elektron pada kulit bagian dalam maupun sesama kulit menyebarkan awan muatan negatif yang menolak elektron penguji dan menutupi sebagian tarikan inti (efek perisai / *shielding effect*).

Muatan inti bersih yang dialami elektron disebut **Muatan Inti Efektif ($Z_{\\text{eff}}$)**:
$$Z_{\\text{eff}} = Z - S$$
di mana $Z$ adalah nomor atom (muatan inti aktual) dan $S$ adalah tetapan pemerisaian (*shielding / screening constant*).

---

### Aturan Pengelompokan Formal Slater:
Elektron diurutkan dalam kelompok kurung menurut nomor kulit dan jenis orbital dari kiri ke kanan:
$$(1s) \\quad (2s, 2p) \\quad (3s, 3p) \\quad (3d) \\quad (4s, 4p) \\quad (4d) \\quad (4f) \\quad (5s, 5p) \\dots$$

---

### Aturan Perhitungan Tetapan Perisai ($S$):

| Posisi Elektron yang Diuji | Posisi Elektron Penyumbang Perisai | Nilai Kontribusi Per Elektron |
| :--- | :--- | :---: |
| **Elektron dalam Kelompok $(ns, np)$** | Elektron lain dalam kelompok $(ns, np)$ yang sama | **$0.35$** (khusus kelompok $1s$: **$0.30$**) |
| | Seluruh elektron pada kulit $(n - 1)$ | **$0.85$** |
| | Seluruh elektron pada kulit $(n - 2)$ atau lebih dalam | **$1.00$** |
| **Elektron dalam Kelompok $(nd)$ atau $(nf)$** | Elektron lain dalam kelompok $(nd)$ atau $(nf)$ yang sama | **$0.35$** |
| | Seluruh elektron dalam semua kelompok di sebelah kirinya | **$1.00$** |

> **Prinsip Arah Slater:**  
> Elektron pada kelompok di sebelah **kanan** elektron yang diuji tidak menyumbang perisai sama sekali ($S = 0.00$).

---

### Mengapa $4s$ Terionisasi Lebih Dulu daripada $3d$?
Pertanyaan klasik seleksi olimpiade ini dijawab secara kuantitatif oleh aturan Slater:
- Pada atom Seng ($\\ce{Zn}, Z=30$), elektron $3d$ memiliki $Z_{\\text{eff}} = +8.85$, sedangkan elektron $4s$ hanya memiliki $Z_{\\text{eff}} = +4.35$.
- Karena $Z_{\\text{eff}}(3d)$ jauh lebih besar, elektron $3d$ ditarik sangat kuat ke inti dan stabil secara termodinamika. Sebaliknya, elektron $4s$ merasakan tarikan netto yang jauh lebih lemah sehingga lebih mudah dilepaskan saat membentuk kation $\\ce{Zn^2+}$.`,
        keyFormulas: [
          { name: 'Rumus Muatan Inti Efektif', formula: 'Z_{\\text{eff}} = Z - S' },
          { name: 'Kontribusi Sesama ns/np', formula: 'S_i = 0.35 \\quad (1s: 0.30)' },
          { name: 'Kontribusi Kulit (n-1)', formula: 'S_i = 0.85' },
          { name: 'Kontribusi Kulit (n-2) atau Lebih Dalam', formula: 'S_i = 1.00' },
        ],
      },
      {
        tag: 'deret-isoelektronik',
      tags: ["deret-isoelektronik","jari-jari-atom","jari-jari-ion"],
        title: 'Konsep Inti 4: Jari-Jari Atomik, Radius Ionik, Kontraksi Lantanida, & Deret Isoelektronik',
        summary: 'Analisis komparatif tren ukuran partikel materi, rasio muatan terhadap elektron, dan anomali kontraksi lantanida.',
        content: `Ukuran suatu atom ditentukan oleh batas terluar densitas awan elektronnya. Karena awan elektron tidak memiliki batas tajam, didefinisikan berbagai parameter jari-jari eksperimental:

### 1. Definisi Tiga Jenis Radius:
1. **Jari-Jari Kovalen ($r_{\\text{kov}}$):** Separuh jarak antar-inti dua atom identik yang berikatan kovalen tunggal (misal pada molekul $\\ce{Cl-Cl}$, $r_{\\text{kov}} = \\frac{1}{2} d_{\\ce{Cl-Cl}} = 99\\text{ pm}$).
2. **Jari-Jari Van der Waals ($r_{\\text{vdW}}$):** Separuh jarak antar-inti dua atom yang tidak berikatan ketika keduanya berada dalam kontak terdekat kisi kristal gas mulia atau padatan molekular ($r_{\\text{vdW}} > r_{\\text{kov}}$).
3. **Jari-Jari Logam ($r_{\\text{met}}$):** Separuh jarak terdekat antar-kation dalam kisi kristal logam murni berkoordinasi 12.

---

### 2. Tren Periodisitas Jari-Jari Atom:
- **Sepanjang Periode (Kiri ke Kanan):** Jumlah kulit utama ($n$) tetap, namun nomor atom ($Z$) bertambah sehingga $Z_{\\text{eff}}$ meningkat signifikan. Tarikan inti elektrostatik yang semakin kuat menarik awan elektron lebih rapat ke inti $\\implies$ jari-jari atomik **mengecil**.
- **Sepanjang Golongan (Atas ke Bawah):** Jumlah kulit utama ($n$) bertambah satu lapis setiap turun periode, memperbesar jarak rata-rata elektron valensi dari inti $\\implies$ jari-jari atomik **membesar**.

---

### 3. Jari-Jari Kation vs Anion & Deret Isoelektronik:
- **Kation Selalu Lebih Kecil daripada Atom Netralnya:** Pelepasan elektron valensi mengurangi tolakan interelektronik dan sering kali menghilangkan satu kulit terluar (contoh: $r_{\\ce{Na}} = 186\\text{ pm} \\to r_{\\ce{Na+}} = 102\\text{ pm}$).
- **Anion Selalu Lebih Besar daripada Atom Netralnya:** Penambahan elektron ke dalam kulit yang sama memperbesar gaya tolak-menolak antar-elektron dan menurunkan muatan inti efektif per elektron, sehingga awan elektron mengembang (contoh: $r_{\\ce{Cl}} = 99\\text{ pm} \\to r_{\\ce{Cl-}} = 181\\text{ pm}$).
- **Deret Isoelektronik (Spesies dengan Jumlah Elektron Identik):**  
  Perhatikan deret 10 elektron ($1s^2 2s^2 2p^6$):
  $$\\ce{O^2- > F- > Na+ > Mg^2+ > Al^3+}$$
  Semua spesi memiliki 10 elektron, tetapi muatan intinya bertambah: $\\ce{O} (Z=8) \\to \\ce{F} (Z=9) \\to \\ce{Na} (Z=11) \\to \\ce{Mg} (Z=12) \\to \\ce{Al} (Z=13)$. Rasio muatan inti per elektron ($Z/e$) meningkat secara linier, sehingga awan elektron terkompresi secara dramatis ke arah inti.

---

### 4. Kontraksi Lantanida (*Lanthanide Contraction*):
Unsur-unsur deret lantanida ($\\ce{La}$ hingga $\\ce{Lu}$) melibatkan pengisian progresif subkulit $4f$. Subkulit $f$ memiliki bentuk orbital yang sangat difus dengan kemampuan perisai inti paling buruk ($s > p > d > f$). Akibatnya, muatan inti efektif melonjak drastis, menyebabkan jari-jari atomik unsur transisi periode 6 menyusut tajam sehingga ukurannya hampir identik dengan unsur sekelompoknya pada periode 5:
- Jari-jari $\\ce{Zr}$ (Periode 5, Golongan 4) $= 160\\text{ pm}$
- Jari-jari $\\ce{Hf}$ (Periode 6, Golongan 4) $= 159\\text{ pm}$
Hal ini menjelaskan mengapa pemisahan kimiawi $\\ce{Zr}$ dan $\\ce{Hf}$ di alam sangat sulit dilakukan.`,
        keyFormulas: [
          { name: 'Rasio Kompresi Deret Isoelektronik', formula: '\\text{Radius} \\propto \\frac{1}{Z/e}' },
        ],
      },
      {
        tag: 'anomali-energi-ionisasi',
      tags: ["energi-ionisasi","anomali-ie","afinitas-elektron","elektronegativitas"],
        title: 'Konsep Inti 5: Energi Ionisasi Bertingkat, Anomali Periode 2 & 3, Afinitas Elektron, & Elektronegativitas',
        summary: 'Analisis termodinamika pelepasan/penangkapan elektron, penyimpangan orbital terisi penuh/setengah penuh, dan skala elektronegativitas.',
        content: `Energi ionisasi dan afinitas elektron merupakan parameter termodinamika esensial penentu reaktivitas kimiawi unsur.

### 1. Energi Ionisasi ($IE$ / Potensial Ionisasi):
Energi minimum yang diserap untuk melepaskan satu elektron paling longgar dari atom atau ion dalam fasa gas pada keadaan dasar:
$$\\ce{X(g) -> X+(g) + e-} \\quad (\\Delta H = IE_1 > 0)$$
$$\\ce{X+(g) -> X^2+(g) + e-} \\quad (\\Delta H = IE_2 > IE_1)$$

Nilai $IE$ bertingkat selalu bernilai positif (endotermik) dan selalu meningkat: $IE_1 < IE_2 < IE_3 < \\dots$ karena pelepasan elektron berikutnya berlangsung dari kation dengan tarikan inti netto yang kian bertambah kuat.

> **Analisis Lonjakan Drastis (*Big Jump*):**  
> Lonjakan tajam harga $IE$ terjadi ketika elektron harus dilepaskan dari subkulit gas mulia bagian dalam ($n-1$). Sebagai contoh, jika suatu unsur $X$ menunjukkan lonjakan pada $IE_4$ ($IE_4 \\gg IE_3$), maka unsur tersebut memiliki tepat **3 elektron valensi** (Golongan 13).

---

### 2. Dua Anomali Klasik Tren Energi Ionisasi Pertama ($IE_1$):
Secara umum, $IE_1$ meningkat dari kiri ke kanan dalam satu periode seiring naiknya $Z_{\\text{eff}}$. Namun, terdapat 2 anomali pembalikan tren:
1. **Anomali Golongan 2 vs 13 (Berilium vs Boron, Magnesium vs Aluminium):**
   - $IE_1(\\ce{Be}) = 899\\text{ kJ/mol} > IE_1(\\ce{B}) = 801\\text{ kJ/mol}$
   - *Penjelasan Kuantum:* Konfigurasi elektron valensi $\\ce{Be}$ adalah $2s^2$ (subkulit penuh stabil dengan penetrasi inti tinggi). Pada atom $\\ce{B}$ ($2s^2 2p^1$), elektron terluar berada pada orbital $2p$ yang memiliki tingkat energi lebih tinggi dan terperisai oleh awan elektron $2s^2$. Akibatnya, elektron $2p$ Boron lebih mudah dilepaskan.
2. **Anomali Golongan 15 vs 16 (Nitrogen vs Oksigen, Fosfor vs Belerang):**
   - $IE_1(\\ce{N}) = 1402\\text{ kJ/mol} > IE_1(\\ce{O}) = 1314\\text{ kJ/mol}$
   - *Penjelasan Kuantum:* Konfigurasi elektron valensi Nitrogen adalah $2p_x^1 2p_y^1 2p_z^1$ (subkulit setengah penuh stabil dengan spin sejajar dan tolakan coulombik minimal). Pada atom Oksigen ($2p_x^2 2p_y^1 2p_z^1$), terdapat sepasang elektron dalam satu orbital $p_x$. Gaya tolak-menolak antar-elektron berpasangan (*spin-pairing repulsion*) membuat pelepasan satu elektron dari Oksigen membutuhkan energi yang lebih kecil dibanding Nitrogen.

---

### 3. Afinitas Elektron ($EA$) & Anomali Halogen Fluor vs Klor:
Afinitas elektron mengukur pelepasan energi ketika satu elektron ditangkap oleh atom netral dalam fasa gas:
$$\\ce{X(g) + e- -> X-(g)} \\quad (\\Delta H = -EA_1)$$

Secara teori tren keelektronegatifan, Fluorin diharapkan memiliki nilai $EA$ paling eksotermik. Namun data termodinamika menunjukkan:
- $EA_1(\\ce{Cl}) = 349\\text{ kJ/mol}$ (Paling eksotermik di tabel periodik)
- $EA_1(\\ce{F}) = 328\\text{ kJ/mol}$

**Rasionalisasi Ilmiah:**  
Atom Fluorin ($n=2$) memiliki volume orbital $2p$ yang sangat kecil dan padat. Masuknya elektron tambahan ke dalam ruang sempit yang sudah ditempati 7 elektron menimbulkan gaya tolak-menolak interelektronik (*electron-electron repulsion*) yang sangat kuat, mengurangi pelepasan energi netto. Sebaliknya pada Klorin ($n=3$), orbital $3p$ memiliki volume yang lebih besar dan difus, sehingga tolakan antar-elektron jauh lebih rendah dan pembentukan ion $\\ce{Cl-}$ melepaskan energi lebih besar.

---

### 4. Tiga Skala Elektronegativitas Populer:
1. **Skala Linus Pauling:** Berdasarkan kelebihan energi disosiasi ikatan heteronuklir $\\ce{A-B}$ terhadap rerata geometrik ikatan homonuklir:
   $$\\Delta = D_{\\ce{A-B}} - \\sqrt{D_{\\ce{A-A}} \\cdot D_{\\ce{B-B}}} \\implies |\\chi_{\\ce{A}} - \\chi_{\\ce{B}}| = 0.102 \\sqrt{\\Delta \\text{ (kJ/mol)}}$$
2. **Skala Robert Mulliken:** Rerata aritmatika kemampuan atom menahan elektronnya ($IE$) dan menarik elektron baru ($EA$):
   $$\\chi_{\\text{Mulliken}} = \\frac{IE_1 + EA_1}{2}$$
3. **Skala Allred-Rochow:** Mengukur gaya elektrostatik coulomb muatan inti efektif Slater pada permukaan kovalen atom:
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
      tags: ["soal-osk","simpul-orbital","topologi-orbital"],
        title: 'Contoh Soal OSK 1: Analisis Kuantitatif Simpul Radial, Simpul Sudut, & Topologi Orbital Atom',
        summary: 'Metode sistematis menghitung jumlah bidang nodal planar dan permukaan bola simpul probabilitas elektron nol.',
        content: `### Masalah Soal:
Tentukan jumlah simpul radial ($N_r$), simpul sudut ($N_a$), dan total simpul ($N_{\\text{tot}}$) untuk masing-masing orbital atom hidrogenik berikut:
1. Orbital $3d_{z^2}$
2. Orbital $4p_x$
3. Orbital $5f_{xyz}$
4. Tentukan pula berapa banyak permukaan bola simpul konsentris yang dimiliki oleh orbital valensi $4s$ atom Kalium!

---

### Pembahasan & Langkah Kunci:

**Langkah 1: Identifikasi Bilangan Kuantum Utama ($n$) dan Azimut ($l$)**  
Berdasarkan notasi subkulit kuantum:
- $3d_{z^2} \\implies n = 3, l = 2$ (subkulit $d$)
- $4p_x \\implies n = 4, l = 1$ (subkulit $p$)
- $5f_{xyz} \\implies n = 5, l = 3$ (subkulit $f$)
- $4s \\implies n = 4, l = 0$ (subkulit $s$)

**Langkah 2: Menghitung Jumlah Bidang Simpul Sudut (*Angular Nodes*, $N_a$)**  
Simpul sudut bernilai sama dengan bilangan kuantum azimut ($N_a = l$):
- Untuk $3d_{z^2}$: $N_a = 2$. Pada orbital $3d_{z^2}$, kedua simpul sudut ini bukan bidang datar, melainkan berbentuk dua permukaan kerucut simetris (*conical nodal surfaces*) yang mengapit donat ekuatorial.
- Untuk $4p_x$: $N_a = 1$, berupa bidang datar simpul $yz$ yang tegak lurus sumbu cuping $x$ di titik asal ($x = 0$).
- Untuk $5f_{xyz}$: $N_a = 3$, berupa tiga bidang simpul ortogonal ($xy, yz, xz$).
- Untuk $4s$: $N_a = 0$ (orbital $s$ simetris bola sempurna tanpa bidang sudut nodal).

**Langkah 3: Menghitung Jumlah Permukaan Bola Simpul Radial (*Radial Nodes*, $N_r$)**  
Gunakan formulasi mekanika kuantum fungsi gelombang radial $R_{n,l}(r) = 0$:
$$N_r = n - l - 1$$
- Untuk $3d_{z^2}$: $N_r = 3 - 2 - 1 = 0$ (tidak memiliki simpul bola konsentris).
- Untuk $4p_x$: $N_r = 4 - 1 - 1 = 2$ simpul bola radial konsentris.
- Untuk $5f_{xyz}$: $N_r = 5 - 3 - 1 = 1$ simpul bola radial konsentris.
- Untuk $4s$: $N_r = 4 - 0 - 1 = 3$ permukaan bola simpul konsentris.

**Langkah 4: Evaluasi Total Simpul ($N_{\\text{tot}}$) & Tabulasi Hasil Akhir**  
Total simpul dihitung dengan rumus $N_{\\text{tot}} = n - 1$:

| Orbital Atom | Kulit ($n$) | Azimut ($l$) | Simpul Radial ($N_r$) | Simpul Sudut ($N_a$) | Total Simpul ($N_{\\text{tot}}$) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| $3d_{z^2}$ | 3 | 2 | 0 | 2 (Kerucut) | 2 |
| $4p_x$ | 4 | 1 | 2 | 1 (Bidang $yz$) | 3 |
| $5f_{xyz}$ | 5 | 3 | 1 | 3 (Bidang $xy, yz, xz$) | 4 |
| $4s$ | 4 | 0 | 3 | 0 | 3 |

**Kesimpulan Evaluator Juri:**  
Orbital $4s$ memiliki 3 simpul bola radial konsentris di mana probabilitas menemukan elektron bernilai nol mutlak ($P(r) = 0$), namun tidak memiliki satu pun bidang simpul sudut karena orbital $s$ berdistribusi simetri bola sempurna.`,
        keyFormulas: [
          { name: 'Simpul Radial', formula: 'N_r = n - l - 1' },
          { name: 'Simpul Sudut', formula: 'N_a = l' },
          { name: 'Total Simpul', formula: 'N_{\\text{tot}} = n - 1' },
        ],
      },
      {
        tag: 'soal-deret-isoelektronik',
      tags: ["soal-osk","deret-isoelektronik","kontraksi-jari-jari"],
        title: 'Contoh Soal OSK 2: Analisis Rasio Z/e & Kontraksi Jari-Jari Deret Isoelektronik 10 Elektron',
        summary: 'Pengaruh tarikan muatan inti netto terhadap kompresi awan elektron pada kation dan anion isoelektronik.',
        content: `### Masalah Soal:
Diberikan lima spesies kimia ionik dan atom netral yang menyusun deret isoelektronik:
$$\\ce{O^2-}, \\ce{F-}, \\ce{Na+}, \\ce{Mg^2+}, \\ce{Al^3+}$$

1. Tuliskan konfigurasi elektron keadaan dasar untuk seluruh spesies di atas!
2. Urutkan kelima spesies tersebut dari jari-jari terbesar hingga terkecil!
3. Berikan analisis kuantitatif berdasarkan rasio muatan inti terhadap elektron ($Z/e$) untuk menerangkan mengapa kation $\\ce{Al^3+}$ memiliki ukuran lebih dari $2.5$ kali lebih kecil dibanding anion $\\ce{O^2-}$!

---

### Pembahasan & Langkah Kunci:

**Langkah 1: Verifikasi Konfigurasi Elektron Seluruh Spesies**  
Hitung jumlah elektron masing-masing spesi:
- $\\ce{O^2-} (Z = 8)$: $8 - (-2) = 10 e^- \\implies 1s^2 2s^2 2p^6$
- $\\ce{F-} (Z = 9)$: $9 - (-1) = 10 e^- \\implies 1s^2 2s^2 2p^6$
- $\\ce{Na+} (Z = 11)$: $11 - (+1) = 10 e^- \\implies 1s^2 2s^2 2p^6$
- $\\ce{Mg^2+} (Z = 12)$: $12 - (+2) = 10 e^- \\implies 1s^2 2s^2 2p^6$
- $\\ce{Al^3+} (Z = 13)$: $13 - (+3) = 10 e^- \\implies 1s^2 2s^2 2p^6$  
Seluruh spesies terbukti merupakan deret isoelektronik gas mulia Neon ($[\\ce{Ne}]$).

**Langkah 2: Perhitungan Rasio Muatan Inti terhadap Elektron ($Z/e$)**  
Karena jumlah elektron sama ($N_e = 10$), medan gaya tolak-menolak antar-elektron di dalam kulit $n=2$ relatif konstan. Faktor penentu jari-jari adalah besarnya muatan inti ($+Ze$):
- $\\ce{O^2-}: Z = 8 \\implies Z/e = \\frac{8}{10} = 0.80$
- $\\ce{F-}: Z = 9 \\implies Z/e = \\frac{9}{10} = 0.90$
- $\\ce{Na+}: Z = 11 \\implies Z/e = \\frac{11}{10} = 1.10$
- $\\ce{Mg^2+}: Z = 12 \\implies Z/e = \\frac{12}{10} = 1.20$
- $\\ce{Al^3+}: Z = 13 \\implies Z/e = \\frac{13}{10} = 1.30$

**Langkah 3: Analisis Medan Elektrostatik Coulombik Netto**  
Hukum Coulomb menyatakan bahwa gaya tarik inti terhadap awan elektron kulit ke-$2$ berbanding lurus dengan muatan inti efektif:
$$F_{\\text{tarik}} \\propto \\frac{Z_{\\text{eff}} \\cdot e}{r^2}$$
- Pada $\\ce{Al^3+}$, sebanyak 13 proton menarik hanya 10 elektron ($Z/e = 1.30$). Muatan positif yang berlebih ini menarik awan elektron $2s^2 2p^6$ sangat kuat ke arah inti, menyebabkan kompresi orbital yang drastis.
- Pada $\\ce{O^2-}$, hanya terdapat 8 proton untuk menarik 10 elektron ($Z/e = 0.80$). Muatan inti yang rendah tidak mampu menahan tolakan interelektronik dengan kuat, sehingga awan elektron mengembang ke luar.

**Langkah 4: Penyusunan Urutan Radius Ionik Eksperimental**  
Urutan jari-jari ionik dari terbesar ke terkecil:
$$\\ce{O^2-} (140\\text{ pm}) > \\ce{F-} (133\\text{ pm}) > \\ce{Na+} (102\\text{ pm}) > \\ce{Mg^2+} (72\\text{ pm}) > \\ce{Al^3+} (53.5\\text{ pm})$$

**Kesimpulan Evaluator Juri:**  
Pada deret isoelektronik, jari-jari partikel berbanding terbalik secara tegas dengan muatan inti ($Z$). Semakin tinggi nomor atom, semakin besar rasio $Z/e$, semakin kuat tarikan coulomb inti, dan semakin kecil jari-jari spesi. Kation $\\ce{Al^3+}$ memiliki ukuran paling kecil ($53.5\\text{ pm}$) sedangkan anion $\\ce{O^2-}$ paling besar ($140\\text{ pm}$).`,
        keyFormulas: [
          { name: 'Korelasi Ukuran Deret Isoelektronik', formula: 'r_{\\text{ion}} \\propto \\frac{1}{Z/e}' },
        ],
      },
      {
        tag: 'soal-lonjakan-ie',
      tags: ["soal-osp","lonjakan-ie","valensi-unsur"],
        title: 'Contoh Soal OSP 3: Analisis Lonjakan Energi Ionisasi Bertingkat & Penentuan Rumus Senyawa',
        summary: 'Identifikasi letak golongan unsur periode 3 dari rasio lonjakan kuantum IE1 hingga IE5 dan peramalan geometri kloridanya.',
        content: `### Masalah Soal:
Suatu unsur representatif $X$ yang terletak pada Periode 3 tabel periodik memiliki data energi ionisasi bertingkat ($IE_1$ hingga $IE_5$) sebagai berikut:
- $IE_1 = 578\\text{ kJ/mol}$
- $IE_2 = 1817\\text{ kJ/mol}$
- $IE_3 = 2745\\text{ kJ/mol}$
- $IE_4 = 11577\\text{ kJ/mol}$
- $IE_5 = 14842\\text{ kJ/mol}$

**Pertanyaan:**
1. Berapakah jumlah elektron valensi atom $X$? Tentukan golongan dan identitas unsur $X$!
2. Jelaskan penyebab fisis terjadinya lonjakan energi ionisasi yang sangat drastis pada data di atas!
3. Tuliskan rumus senyawa klorida stabil yang dibentuk oleh unsur $X$ dan ramalkan geometri molekulnya dalam fasa gas pada temperatur tinggi!

---

### Pembahasan & Langkah Kunci:

**Langkah 1: Tabulasi Data dan Perhitungan Rasio Peningkatan Energi Bertingkat**  
Hitung rasio kenaikan energi antar-tingkat berturutan:
- Rasio $\\frac{IE_2}{IE_1} = \\frac{1817}{578} = 3.14$ (Kenaikan bertahap pelepasan elektron valensi)
- Rasio $\\frac{IE_3}{IE_2} = \\frac{2745}{1817} = 1.51$ (Kenaikan normal)
- Rasio $\\frac{IE_4}{IE_3} = \\frac{11577}{2745} = 4.22$ (**Lonjakan Drastis / Big Jump $\\Delta E = +8832\\text{ kJ/mol}$**)
- Rasio $\\frac{IE_5}{IE_4} = \\frac{14842}{11577} = 1.28$ (Kenaikan normal pada kulit dalam)

**Langkah 2: Deteksi Lokasi Lonjakan Ekstrem (*Big Jump*) Penembusan Kulit Gas Mulia**  
Lonjakan energi raksasa terjadi antara $IE_3$ dan $IE_4$ (lonjakan lebih dari $8800\\text{ kJ/mol}$).  
Hal ini mengindikasikan bahwa tiga elektron pertama ($IE_1, IE_2, IE_3$) berada pada kulit terluar (kulit valensi $n=3$), sedangkan elektron ke-4 harus ditarik paksa dari kulit bagian dalam ($n=2$) yang memiliki konfigurasi oktet gas mulia stabil $[\\ce{Ne}]$ dengan jarak ke inti yang jauh lebih dekat.

**Langkah 3: Menentukan Jumlah Elektron Valensi dan Identitas Unsur Periode 3**  
- Jumlah elektron valensi unsur $X = 3$.
- Golongan unsur: **Golongan 13 (IIIA)**.
- Karena unsur $X$ berada pada Periode 3, maka konfigurasi elektronnya adalah:
  $$[\\ce{Ne}] 3s^2 3p^1$$
- Unsur $X$ dengan nomor atom $Z = 13$ adalah **Aluminium ($\\ce{Al}$)**.

**Langkah 4: Meramalkan Rumus Senyawa Klorida & Geometri Molekul Berdasarkan VSEPR**  
- Unsur $\\ce{Al}$ membentuk ion stabil $\\ce{Al^3+}$ dengan melepaskan ketiga elektron valensinya, sehingga membentuk senyawa klorida dengan rumus empiris:
  $$\\ce{AlCl3}$$
- **Dalam fasa gas pada temperatur tinggi ($T > 400^\\circ\\text{C}$):** $\\ce{AlCl3}$ berwujud monomerik dengan atom pusat $\\ce{Al}$ dikelilingi 3 domain ikatan tunggal $\\ce{Al-Cl}$ tanpa pasangan elektron bebas ($AX_3$). Geometrinya adalah **Trigonal Planar** dengan sudut ikatan persis $120^\\circ$ dan hibridisasi $sp^2$.
- **Pada suhu kamar fasa padat:** Karena atom pusat $\\ce{Al}$ pada monomer hanya memiliki 6 elektron (sub-oktet), ia bertindak sebagai asam Lewis dan membentuk dimer jembatan klorin kovalen koordinasi $\\ce{Al2Cl6}$ bergeometri tetrahedral lokal ($AX_4, sp^3$).

**Kesimpulan Evaluator Juri:**  
Unsur $X$ adalah Aluminium ($\\ce{Al}$, Golongan 13 Periode 3). Lonjakan ekstrem pada $IE_4$ membuktikan adanya 3 elektron valensi. Senyawa kloridanya adalah $\\ce{AlCl3}$ yang bergeometri trigonal planar monomerik pada fasa gas suhu tinggi.`,
        keyFormulas: [
          { name: 'Kriteria Penentuan Elektron Valensi', formula: '\\text{Elektron Valensi} = n \\iff \\text{Lonjakan terjadi pada } IE_{n+1}' },
        ],
      },
      {
        tag: 'soal-slater-zn',
      tags: ["soal-osn","aturan-slater","zeff-slater","ionisasi-zn"],
        title: 'Contoh Soal OSN 4: Penentuan Kuantitatif Zeff Slater & Bukti Pelepasan 4s Mendahului 3d pada Seng',
        summary: 'Perhitungan kuantitatif tetapan perisai S dan Zeff menurut aturan formal Slater untuk memvalidasi urutan ionisasi kation logam transisi.',
        content: `### Masalah Soal:
Atom seng ($\\ce{Zn}$) memiliki nomor atom $Z = 30$ dengan konfigurasi elektron keadaan dasar $[\\ce{Ar}] 4s^2 3d^{10}$.

**Pertanyaan:**
1. Tuliskan pengelompokan formal orbital atom $\\ce{Zn}$ menurut Aturan Slater!
2. Hitung tetapan perisai ($S$) dan muatan inti efektif ($Z_{\\text{eff}}$) untuk elektron valensi pada subkulit $4s$!
3. Hitung tetapan perisai ($S$) dan muatan inti efektif ($Z_{\\text{eff}}$) untuk elektron pada subkulit $3d$!
4. Berdasarkan perbandingan nilai $Z_{\\text{eff}}(4s)$ dan $Z_{\\text{eff}}(3d)$, buktikan secara teoritis mengapa atom Seng membentuk ion $\\ce{Zn^2+}$ dengan melepaskan sepasang elektron $4s$ terlebih dahulu dan bukan elektron $3d$!

---

### Pembahasan & Langkah Kunci:

**Langkah 1: Menuliskan Konfigurasi Elektron dan Pengelompokan Formal Aturan Slater**  
Urutkan elektron atom $\\ce{Zn} (Z=30)$ ke dalam kelompok kurung Slater:
$$(1s)^2 \\quad (2s, 2p)^8 \\quad (3s, 3p)^8 \\quad (3d)^{10} \\quad (4s)^2$$

**Langkah 2: Menghitung Tetapan Perisai ($S$) dan $Z_{\\text{eff}}$ untuk Elektron Valensi $4s$**  
Elektron yang diuji berada pada kelompok $(4s, 4p)$ dengan $n = 4$:
- **Sesama kelompok $(4s)$:** Terdapat $2 - 1 = 1$ elektron pasangan $\\implies 1 \\times 0.35 = 0.35$.
- **Kulit $(n-1) = 3$:** Terdiri dari 8 elektron $(3s, 3p)$ dan 10 elektron $(3d)$ = total 18 elektron $\\implies 18 \\times 0.85 = 15.30$.
- **Kulit $(n-2)$ dan $(n-3) = 1, 2$:** Terdiri dari 2 elektron $(1s)$ dan 8 elektron $(2s, 2p)$ = total 10 elektron $\\implies 10 \\times 1.00 = 10.00$.

Akumulasi total tetapan perisai $S(4s)$:
$$S(4s) = 0.35 + 15.30 + 10.00 = 25.65$$
Maka muatan inti efektif yang dirasakan elektron $4s$ adalah:
$$Z_{\\text{eff}}(4s) = Z - S = 30 - 25.65 = +4.35$$

**Langkah 3: Menghitung Tetapan Perisai ($S$) dan $Z_{\\text{eff}}$ untuk Elektron Subkulit $3d$**  
Elektron yang diuji berada pada kelompok $(3d)$ dengan $n = 3$:
- **Sesama kelompok $(3d)$:** Terdapat $10 - 1 = 9$ elektron lain $\\implies 9 \\times 0.35 = 3.15$.
- **Seluruh kelompok di sebelah kiri $(3d)$:** Terdiri dari 2 elektron $(1s)$, 8 elektron $(2s, 2p)$, dan 8 elektron $(3s, 3p)$ = total 18 elektron $\\implies 18 \\times 1.00 = 18.00$.
- **Kelompok di sebelah kanan $(4s)$:** Tidak menyumbang perisai $\\implies 0.00$.

Akumulasi total tetapan perisai $S(3d)$:
$$S(3d) = 3.15 + 18.00 = 21.15$$
Maka muatan inti efektif yang dirasakan elektron $3d$ adalah:
$$Z_{\\text{eff}}(3d) = Z - S = 30 - 21.15 = +8.85$$

**Langkah 4: Analisis Termodinamika Kuantum & Kesimpulan Urutan Ionisasi Seng**  
Bandingkan nilai muatan inti efektif kedua orbital:
$$Z_{\\text{eff}}(3d) = +8.85 \\gg Z_{\\text{eff}}(4s) = +4.35$$
- Elektron pada orbital $3d$ mengalami muatan inti efektif yang lebih dari dua kali lipat lebih besar ($+8.85$) dibanding elektron $4s$ ($+4.35$).
- Energi potensial coulombik elektron berbanding lurus dengan muatan inti efektif:
  $$E_{\\text{potensial}} \\approx -13.6\\text{ eV} \\times \\frac{(Z_{\\text{eff}})^2}{n^2}$$
- Karena $Z_{\\text{eff}}(3d)$ sangat besar, elektron $3d$ terikat sangat rapat dan stabil di lapisan dalam. Sebaliknya, elektron $4s$ terikat jauh lebih longgar dan berada pada jarak probabilitas rata-rata yang lebih luar, sehingga saat terjadi reaksi ionisasi, elektron $4s$ dieliminasi terlebih dahulu menghasilkan ion seng stabil:
  $$\\ce{Zn} ([\\ce{Ar}] 3d^{10} 4s^2) -> \\ce{Zn^2+} ([\\ce{Ar}] 3d^{10}) + 2e^-$$

**Kesimpulan Evaluator Juri:**  
Perhitungan Aturan Slater membuktikan secara analitis bahwa $Z_{\\text{eff}}(4s) = +4.35$ jauh lebih kecil dibanding $Z_{\\text{eff}}(3d) = +8.85$. Lemahnya tarikan inti pada elektron $4s$ menyebabkan elektron $4s$ lebih dulu diionisasi membentuk kation $\\ce{Zn^2+}$.`,
        keyFormulas: [
          { name: 'Zeff Elektron 4s Seng', formula: 'Z_{\\text{eff}}(4s) = 30 - 25.65 = +4.35' },
          { name: 'Zeff Elektron 3d Seng', formula: 'Z_{\\text{eff}}(3d) = 30 - 21.15 = +8.85' },
        ],
      },
      {
        tag: 'soal-anomali-afinitas-born-haber',
      tags: ["soal-osn","anomali-afinitas","siklus-born-haber"],
        title: 'Contoh Soal OSN 5: Anomali Afinitas Elektron Halogen & Siklus Termodinamika Born-Haber Kapustinskii',
        summary: 'Resolusi paradoks afinitas elektron Fluorin vs Klorin dan perbandingannya dengan kestabilan energi kisi kristal LiF vs LiCl.',
        content: `### Masalah Soal:
Tabel termodinamika menyajikan data eksperimental sebagai berikut:
- Afinitas elektron pertama Fluorin: $EA_1(\\ce{F}) = 328\\text{ kJ/mol}$
- Afinitas elektron pertama Klorin: $EA_1(\\ce{Cl}) = 349\\text{ kJ/mol}$
- Namun, entalpi pembentukan standar kristal litium fluorida ($\\ce{LiF}$) bernilai $\\Delta H_f^\\circ = -616\\text{ kJ/mol}$, jauh lebih eksotermik dibanding litium klorida ($\\ce{LiCl}, \\Delta H_f^\\circ = -408.6\\text{ kJ/mol}$).

**Pertanyaan:**
1. Mengapa nilai afinitas elektron Fluorin lebih rendah (kurang eksotermik) dibanding Klorin, padahal keelektronegatifan Fluorin adalah yang tertinggi di antara seluruh unsur?
2. Gunakan Persamaan Kapustinskii untuk menjelaskan mengapa energi kisi kristal $\\ce{LiF}$ ($\\Delta H_{\\text{kisi}} = -1036\\text{ kJ/mol}$) jauh lebih besar dibanding $\\ce{LiCl}$ ($\\Delta H_{\\text{kisi}} = -853\\text{ kJ/mol}$)!
3. Tunjukkan melalui Siklus Born-Haber faktor termodinamika penentu yang menyebabkan kristal $\\ce{LiF}$ jauh lebih stabil daripada $\\ce{LiCl}$!

---

### Pembahasan & Langkah Kunci:

**Langkah 1: Evaluasi Data Eksperimen Afinitas Elektron Fluorin vs Klorin**  
Reaksi penangkapan elektron fasa gas:
$$\\ce{F(g) + e- -> F-(g)} \\quad \\Delta H = -328\\text{ kJ/mol}$$
$$\\ce{Cl(g) + e- -> Cl-(g)} \\quad \\Delta H = -349\\text{ kJ/mol}$$
Klorin melepaskan energi $21\\text{ kJ/mol}$ lebih banyak dibanding Fluorin saat menangkap elektron.

**Langkah 2: Analisis Kerapatan Muatan dan Tolakan Interelektronik Awan $2p$**  
- Atom Fluorin berada pada periode 2 dengan konfigurasi $1s^2 2s^2 2p^5$ dan radius kovalen sangat mungil ($r_{\\ce{F}} = 71\\text{ pm}$).
- Tujuh elektron valensi Fluorin terkurung dalam volume bola orbital $2p$ yang sangat sempit dan padat muatan negatif.
- Ketika elektron bebas eksternal mendekat untuk masuk ke orbital $2p$ membentuk ion $\\ce{F-}$, elektron tersebut mengalami gaya tolak elektrostatik coulombik antar-elektron (*interelectronic repulsion*) yang sangat dahsyat dari 7 elektron valensi lainnya. Sebagian besar energi stabilisasi tarikan inti terserap untuk mengatasi gaya tolak ini.
- Pada atom Klorin (periode 3), orbital $3p$ memiliki volume yang jauh lebih besar dan difus ($r_{\\ce{Cl}} = 99\\text{ pm}$). Elektron baru dapat masuk dengan tolakan interelektronik yang jauh lebih minimal, sehingga entalpi penangkapan elektron Klorin menjadi yang paling eksotermik di seluruh tabel periodik.

**Langkah 3: Menghitung Kontribusi Energi Kisi Kristal $\\ce{LiF}$ vs $\\ce{LiCl}$ (Persamaan Kapustinskii)**  
Energi kisi kristal ionik dihitung menggunakan Persamaan Kapustinskii:
$$U_L = \\frac{1.202 \\times 10^5 \\cdot \\nu \\cdot |z_+ z_-|}{r_+ + r_-} \\left(1 - \\frac{34.5\\text{ pm}}{r_+ + r_-}\\right) \\text{ kJ/mol}$$
di mana $r_+$ dan $r_-$ adalah jari-jari ionik dalam satuan pikometer (pm):
- Jari-jari kation $\\ce{Li+}: 76\\text{ pm}$
- Jari-jari anion $\\ce{F-}: 133\\text{ pm} \\implies d_{\\ce{Li-F}} = 76 + 133 = 209\\text{ pm}$
- Jari-jari anion $\\ce{Cl-}: 181\\text{ pm} \\implies d_{\\ce{Li-Cl}} = 76 + 181 = 257\\text{ pm}$

Karena energi kisi berbanding terbalik dengan jarak antar-inti ion ($U_L \\propto \\frac{1}{r_+ + r_-}$):
$$\\frac{U_L(\\ce{LiF})}{U_L(\\ce{LiCl})} \\approx \\frac{257}{209} \\approx 1.23$$
Energi kisi kristal $\\ce{LiF}$ bernilai $-1036\\text{ kJ/mol}$, lebih eksotermik sebesar **$183\\text{ kJ/mol}$** dibanding $\\ce{LiCl}$ ($-853\\text{ kJ/mol}$).

**Langkah 4: Evaluasi Siklus Termodinamika Born-Haber dan Kesimpulan Kestabilan Senyawa**  
Siklus Born-Haber untuk pembentukan $\\ce{LiX(s)}$:
$$\\Delta H_f^\\circ = \\Delta H_{\\text{sub}}(\\ce{Li}) + IE_1(\\ce{Li}) + \\frac{1}{2} D(\\ce{X2}) - EA_1(\\ce{X}) + \\Delta H_{\\text{kisi}}(\\ce{LiX})$$
- Defisit energi dari afinitas elektron Fluorin yang lebih rendah hanyalah $21\\text{ kJ/mol}$.
- Keuntungan kestabilan energi kisi $\\ce{LiF}$ mencapai $+183\\text{ kJ/mol}$, ditambah energi disosiasi ikatan $\\ce{F2}$ yang lebih rendah ($D_{\\ce{F2}} = 158\\text{ kJ/mol}$ vs $D_{\\ce{Cl2}} = 242\\text{ kJ/mol}$).
- Akibatnya, nilai $\\Delta H_f^\\circ(\\ce{LiF}) = -616\\text{ kJ/mol}$ jauh melampaui $\\Delta H_f^\\circ(\\ce{LiCl}) = -408.6\\text{ kJ/mol}$.

**Kesimpulan Evaluator Juri:**  
Meskipun afinitas elektron Fluorin lebih rendah karena tolakan interelektronik volume kecil awan $2p$, senyawa kristal litium fluorida ($\\ce{LiF}$) tetap jauh lebih stabil dibanding $\\ce{LiCl}$ karena radius ionik $\\ce{F-}$ yang mungil menghasilkan energi kisi kristal Kapustinskii yang jauh lebih dahsyat ($-1036\\text{ kJ/mol}$).`,
        keyFormulas: [
          { name: 'Persamaan Energi Kisi Kapustinskii', formula: 'U_L \\propto \\frac{|z_+ z_-|}{r_+ + r_-}' },
          { name: 'Siklus Termodinamika Born-Haber', formula: '\\Delta H_f^\\circ = \\Delta H_{\\text{sub}} + IE_1 + \\frac{1}{2}D - EA_1 + U_L' },
        ],
      },
    ],
  },

  // ==========================================
  // TOPIK 2: IKATAN KIMIA & GEOMETRI MOLEKUL
  // ==========================================
  {
    id: 2,
    topic_number: 2,
    title: 'Ikatan Kimia & Geometri Molekul',
    slug: 'ikatan-kimia-geometri-molekul',
    category: 'Kimia Fisik & Ikatan',
    level: 'OSN',
    readTimeMinutes: 30,
    summary: 'Teori VSEPR komprehensif, Aturan Bent, hibridisasi orbital valensi, Teori Orbital Molekul (MOT), orde ikatan, termodinamika kisi kristal Born-Haber, dan gaya antarmolekul.',
    allTags: [
      'ikatan-kovalen-lewis',
      'muatan-formal-resonansi',
      'kepolaran-momen-dipol',
      'vsepr-lanjutan-aturan-bent',
      'hibridisasi-orbital-valensi',
      'teori-orbital-molekul-mot',
      'gaya-antarmolekul-ikatan-hidrogen',
      'energi-kisi-born-haber',
      'soal-lewis-muatan-formal-scn',
      'soal-vsepr-aturan-bent-sf4-clf3',
      'soal-mot-karbon-monoksida',
      'soal-born-haber-mgcl2',
      'soal-vsepr-eksotis-if7-xef5',
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
    ],
    prerequisites: [
      {
        tag: 'ikatan-kovalen-lewis',
      tags: ["ikatan-kovalen","struktur-lewis","pengecualian-oktet"],
        title: 'Prasyarat 1: Struktur Lewis, Aturan Oktet, & Tiga Pengecualian Oktet',
        summary: 'Langkah sistematis penyusunan rumus titik elektron Lewis dan rasionalisasi ilmiah tiga golongan pengecualian oktet.',
        content: `Ikatan kovalen terbentuk melalui penggunaan bersama pasangan elektron valensi antar-atom non-logam untuk mencapai konfigurasi elektron stabil gas mulia ($ns^2 np^6$, atau $1s^2$ untuk hidrogen).

### 4 Langkah Baku Menyusun Struktur Lewis:
1. **Hitung Elektron Valensi Total ($N_{\\text{val}}$):**
   Jumlahkan elektron valensi seluruh atom penyusun. Tambahkan elektron sesuai muatan anion (misal $-1 \\implies +1 e^-$) atau kurangi elektron sesuai muatan kation (misal $+1 \\implies -1 e^-$).
2. **Tentukan Atom Pusat:**
   Pilih atom dengan keelektronegatifan terendah (kecuali hidrogen $\\ce{H}$ yang selalu menjadi atom terminal/luar). Halogen juga umumnya menjadi atom terminal kecuali jika berikatan dengan oksigen atau halogen lain yang lebih elektronegatif.
3. **Bangun Kerangka Ikatan $\\sigma$ & Lengkapi Oktet Atom Terminal:**
   Hubungkan setiap atom terminal ke atom pusat dengan sepasang elektron (ikatan tunggal kovalen $\\sigma$). Lengkapi 8 elektron (oktet) pada semua atom terminal terlebih dahulu dengan menempatkan pasangan elektron bebas (PEB).
4. **Alokasikan Sisa Elektron ke Atom Pusat:**
   Hitung sisa elektron valensi. Tempatkan seluruh sisa elektron pada atom pusat sebagai PEB. Jika atom pusat belum memenuhi oktet dan bukan spesi sub-oktet, ubah PEB dari atom terminal menjadi ikatan rangkap dua atau tiga ke atom pusat.

---

### Tiga Kategori Pengecualian Aturan Oktet dalam Soal Olimpiade:
1. **Oktet Tidak Lengkap (Spesi Kurang Elektron / Sub-Oktet):**
   - Terjadi pada unsur berukuran sangat kecil dengan muatan inti rendah, khususnya Berilium (golongan 2) dan Boron/Aluminium (golongan 13).
   - Contoh: Pada $\\ce{BeCl2}$, Berilium hanya dikelilingi oleh 4 elektron valensi. Pada $\\ce{BF3}$, Boron hanya memiliki 6 elektron valensi.
   - *Karakteristik Reaktivitas:* Molekul sub-oktet memiliki orbital $p$ kosong berenergi rendah, sehingga bertindak sebagai **Asam Lewis Kuat** yang sangat reaktif menerima pasangan elektron bebas dari donor (Basa Lewis) membentuk senyawa koordinasi aduk (contoh: $\\ce{BF3 + :NH3 -> F3B-NH3}$).
2. **Spesi Radikal Bebas (Molekul Elektron Ganjil / Odd-Electron):**
   - Terjadi jika jumlah total elektron valensi bernilai ganjil, sehingga mustahil semua elektron berpasangan membentuk oktet.
   - Contoh: $\\ce{NO}$ (11 elektron valensi) dan $\\ce{NO2}$ (17 elektron valensi).
   - *Karakteristik Reaktivitas:* Memiliki 1 elektron tak berpasangan, bersifat **paramagnetik**, sangat reaktif, dan spontan mengalami dimerisasi membentuk ikatan kovalen baru ($2\\ce{NO2(g) <=> N2O4(g)}$).
3. **Oktet Diperluas (Spesi Hipervalen / Expanded Octet):**
   - Unsur-unsur non-logam pada **Periode 3 ke atas** (seperti $\\ce{P}, \\ce{S}, \\ce{Cl}, \\ce{Br}, \\ce{I}, \\ce{Xe}$) dapat menampung 10, 12, atau 14 elektron valensi di sekitar atom pusat.
   - *Alasan Ilmiah:* Atom periode 3 ke atas memiliki jari-jari atomik yang cukup besar untuk meminimalkan tolakan sterik ligan, serta memiliki orbital subkulit $d$ kosong berenergi relatif rendah yang dapat dilibatkan dalam ikatan valensi.
   - Contoh: $\\ce{PCl5}$ (10 elektron), $\\ce{SF6}$ (12 elektron), $\\ce{IF7}$ (14 elektron).`,
        keyFormulas: [
          { name: 'Total Elektron Valensi', formula: 'N_{\\text{val}} = \\sum V_{\\text{atom}} - q_{\\text{ion}}' },
        ],
      },
      {
        tag: 'muatan-formal-resonansi',
      tags: ["muatan-formal","resonansi-struktur","orde-ikatan"],
        title: 'Prasyarat 2: Kalkulasi Muatan Formal & Resonansi Struktur Lewis',
        summary: 'Metode matematis penentuan muatan semu atom dan hierarki kriteria kestabilan kontributor resonansi mayor.',
        content: `Muatan formal ($FC$) adalah muatan listrik hipotesis yang akan dimiliki suatu atom dalam molekul jika diasumsikan bahwa semua elektron ikatan terbagi sama rata secara murni kovalen nonpolar.

### Rumus Matematis Muatan Formal:
$$FC = V - LP - \\frac{1}{2}(BP)$$
di mana:
- $V$ = jumlah elektron valensi atom dalam wujud bebas terisolasi
- $LP$ = jumlah elektron non-ikatan / lone pair (setiap titik PEB bernilai 1 elektron)
- $BP$ = jumlah elektron ikatan / bonding pair (setiap garis ikatan bernilai 2 elektron)

*Metode Cepat OSN:*
$$FC = V - (\\text{jumlah titik PEB}) - (\\text{jumlah garis ikatan})$$

---

### Hierarki Kriteria Menentukan Kontributor Resonansi Mayor (Paling Stabil):
1. **Aturan Nol Bersih:** Struktur resonansi dengan muatan formal nol pada semua atom adalah yang paling stabil.
2. **Minimalisasi Pemisahan Muatan:** Struktur dengan nilai mutlak muatan formal terkecil ($0$ dan $\\pm 1$) lebih disukai daripada struktur dengan muatan $\\pm 2$ atau lebih.
3. **Aturan Elektronegativitas Pauling:** Jika terdapat muatan negatif formal, muatan tersebut **wajib** ditempatkan pada atom dengan keelektronegatifan paling tinggi. Sebaliknya, muatan formal positif harus berada pada atom yang lebih elektropositif.
4. **Larangan Muatan Sejenis Bersebelahan:** Dua atom yang terikat langsung tidak boleh memiliki muatan formal bertanda sama (misal $+1$ bersebelahan dengan $+1$) karena tolakan elektrostatik mendestabilkan molekul.

---

### Hibrida Resonansi & Orde Ikatan Parsial:
Molekul riil tidak berganti-ganti antar-struktur resonansi, melainkan merupakan hibrida terdelokalisasi permanen. Orde ikatan aktual antar dua atom dihitung melalui rata-rata:
$$BO = \\frac{\\text{Jumlah Pasangan Ikatan antar Dua Atom pada Seluruh Resonansi}}{\\text{Jumlah Posisi Resonansi Ekuivalen}}$$
*Contoh:* Pada ion nitrat ($\\ce{NO3-}$), 4 pasangan ikatan terdistribusi merata pada 3 ikatan $\\ce{N-O}$, menghasilkan orde ikatan parsial identik sebesar $BO = \\frac{4}{3} \\approx 1.33$ dan muatan parsial $-\\frac{2}{3}$ pada setiap atom oksigen.`,
        keyFormulas: [
          { name: 'Rumus Muatan Formal', formula: 'FC = V - LP - \\frac{1}{2}(BP)' },
          { name: 'Orde Ikatan Resonansi', formula: 'BO = \\frac{\\sum \\text{ikatan}}{\\text{posisi ekuivalen}}' },
        ],
      },
      {
        tag: 'kepolaran-momen-dipol',
      tags: ["kepolaran-ikatan","momen-dipol","elektronegativitas"],
        title: 'Prasyarat 3: Kepolaran Ikatan & Resultan Vektor Momen Dipol',
        summary: 'Korelasi selisih elektronegativitas ikatan terhadap vektor momen dipol netto dan simetri spasial molekul.',
        content: `Ikatan kovalen antara dua atom dengan perbedaan keelektronegatifan ($\\Delta \\chi > 0.4$) bersifat polar karena awan elektron ikatan tertarik lebih rapat ke arah atom yang lebih elektronegatif, menghasilkan muatan parsial $\\delta^+$ dan $\\delta^-$.

### Momen Dipol Ikatan (Bond Dipole Moment):
Momen dipol ($\\vec{\\mu}$) didefinisikan sebagai perkalian muatan parsial ($q$) dengan vektor jarak pemisahan muatan ($\\vec{r}$):
$$\\vec{\\mu} = q \\times \\vec{r}$$
- Satuan SI: Coulomb-meter ($\\text{C}\\cdot\\text{m}$), lazim dinyatakan dalam Debye ($\\text{D}$), di mana $1\\text{ D} = 3.336 \\times 10^{-30}\\text{ C}\\cdot\\text{m}$.
- Vektor momen dipol digambarkan dengan panah bertanda plus di pangkal: $\\mapsto$, mengarah dari kutub elektropositif ($\\delta^+$) menuju kutub elektronegatif ($\\delta^-$).

---

### Kepolaran Molekul Utuh (Dipol Resultan):
Sifat kepolaran molekul ditentukan oleh jumlah vektor (**resultan vektor**) dari seluruh momen dipol ikatan serta kontribusi momen dipol pasangan elektron bebas (PEB):
$$\\vec{\\mu}_{\\text{net}} = \\sum_{i} \\vec{\\mu}_i$$

1. **Molekul Nonpolar ($\\vec{\\mu}_{\\text{net}} = 0$):**
   Terjadi jika geometri molekul memiliki simetri spasial tinggi sehingga momen-momen dipol saling meniadakan secara vektor.
   - Contoh tanpa PEB: $\\ce{CO2}$ (linier $180^\\circ$), $\\ce{BF3}$ (trigonal planar $120^\\circ$), $\\ce{CH4}$ (tetrahedral $109.5^\\circ$), $\\ce{PCl5}$ (trigonal bipiramidal), $\\ce{SF6}$ (oktahedral).
   - Contoh dengan PEB tetapi simetris sentral: $\\ce{XeF2}$ (linier, 3 PEB ekuatorial saling meniadakan), $\\ce{XeF4}$ (bujursangkar, 2 PEB trans berlawanan arah).
2. **Molekul Polar ($\\vec{\\mu}_{\\text{net}} \\neq 0$):**
   Terjadi jika molekul asimetris atau memiliki PEB yang menghasilkan resultan vektor dipol tidak nol.
   - Contoh: $\\ce{H2O}$ (bengkok, $\\mu = 1.85\\text{ D}$), $\\ce{NH3}$ (piramida trigonal, $\\mu = 1.47\\text{ D}$), $\\ce{SO2}$ (bengkok, $\\mu = 1.63\\text{ D}$), $\\ce{ClF3}$ (bentuk T, $\\mu = 0.56\\text{ D}$).`,
        keyFormulas: [
          { name: 'Definisi Momen Dipol', formula: '\\vec{\\mu} = q \\times \\vec{r}' },
          { name: 'Momen Dipol Resultan', formula: '\\vec{\\mu}_{\\text{net}} = \\sum \\vec{\\mu}_i' },
        ],
      },
    ],
    core_concepts: [
      {
        tag: 'vsepr-lanjutan-aturan-bent',
      tags: ["vsepr","aturan-bent","geometri-molekul"],
        title: 'Konsep Inti 1: Teori VSEPR Lanjutan & Aturan Bent (Bent\'s Rule)',
        summary: 'Analisis geometri domain sterik 2 hingga 7, kompresi sudut ikatan non-ideal, dan alokasi energetika Aturan Bent.',
        content: `Teori Tolakan Pasangan Elektron Valensi (VSEPR) memprediksi susunan spasial domain elektron di sekitar atom pusat sedemikian rupa sehingga gaya tolak elektrostatik antar-awan elektron bernilai minimum.

### Formulasi Sterik $AX_mE_n$:
- $A$: Atom pusat
- $X$: Atom terminal terikat (ikatan tunggal, rangkap dua, maupun rangkap tiga dihitung sebagai **1 domain ikatan**)
- $E$: Pasangan Elektron Bebas (PEB) pada atom pusat
- **Bilangan Sterik ($SN$):** $SN = m + n$

---

### Tabel Master Bilangan Sterik, Hibridisasi, & Bentuk Molekul:

| Bilangan Sterik ($SN$) | Hibridisasi | Tipe $AX_mE_n$ | Bentuk Geometri Molekul | Sudut Ikatan Ideal | Contoh Spesi |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **2** | $sp$ | $AX_2$ | Linier | $180^\\circ$ | $\\ce{BeCl2}, \\ce{CO2}, \\ce{HCN}$ |
| **3** | $sp^2$ | $AX_3$ | Trigonal Planar (Segitiga Datar) | $120^\\circ$ | $\\ce{BF3}, \\ce{SO3}, \\ce{NO3-}$ |
| **3** | $sp^2$ | $AX_2E_1$ | Bengkok (Bent / V-shape) | $< 120^\\circ$ | $\\ce{SO2}, \\ce{NO2-}, \\ce{O3}$ |
| **4** | $sp^3$ | $AX_4$ | Tetrahedral | $109.5^\\circ$ | $\\ce{CH4}, \\ce{CCl4}, \\ce{NH4+}$ |
| **4** | $sp^3$ | $AX_3E_1$ | Piramida Trigonal | $< 109.5^\\circ$ | $\\ce{NH3}, \\ce{H3O+}, \\ce{PCl3}$ |
| **4** | $sp^3$ | $AX_2E_2$ | Bengkok (Bent / V-shape) | $\\ll 109.5^\\circ$ | $\\ce{H2O}, \\ce{OF2}, \\ce{SCl2}$ |
| **5** | $sp^3d$ | $AX_5$ | Trigonal Bipiramidal | $90^\\circ, 120^\\circ, 180^\\circ$ | $\\ce{PCl5}, \\ce{AsF5}$ |
| **5** | $sp^3d$ | $AX_4E_1$ | Jungkat-Jungkit (Seesaw) | $< 90^\\circ, < 120^\\circ$ | $\\ce{SF4}, \\ce{TeCl4}$ |
| **5** | $sp^3d$ | $AX_3E_2$ | Bentuk T (T-shaped) | $< 90^\\circ, < 180^\\circ$ | $\\ce{ClF3}, \\ce{BrF3}$ |
| **5** | $sp^3d$ | $AX_2E_3$ | Linier | $180^\\circ$ | $\\ce{XeF2}, \\ce{I3-}, \\ce{ICl2-}$ |
| **6** | $sp^3d^2$ | $AX_6$ | Oktahedral | $90^\\circ, 180^\\circ$ | $\\ce{SF6}, \\ce{PF6-}$ |
| **6** | $sp^3d^2$ | $AX_5E_1$ | Piramida Alas Bujursangkar | $< 90^\\circ$ | $\\ce{BrF5}, \\ce{IF5}, \\ce{XeOF4}$ |
| **6** | $sp^3d^2$ | $AX_4E_2$ | Bujursangkar (Square Planar) | $90^\\circ, 180^\\circ$ | $\\ce{XeF4}, \\ce{ICl4-}$ |
| **7** | $sp^3d^3$ | $AX_7$ | Pentagonal Bipiramidal | $72^\\circ, 90^\\circ$ | $\\ce{IF7}$ |
| **7** | $sp^3d^3$ | $AX_5E_2$ | Pentagonal Planar | $72^\\circ$ | $\\ce{XeF5-}$ |

---

### Hierarki Kekuatan Tolakan Elektron:
$$\\text{PEB-PEB} > \\text{PEB-Ikatan Rangkap} > \\text{PEB-Ikatan Tunggal} > \\text{Rangkap-Tunggal} > \\text{Tunggal-Tunggal}$$
- Pasangan elektron bebas (PEB) hanya terikat pada satu inti atom, sehingga awan elektronnya lebih mengembang dan menyita volume sudut yang lebih besar.
- Efek kompresi sudut pada deret isoelektronik tetrahedral:
  $$\\ce{CH4} (109.5^\\circ) \\longrightarrow \\ce{NH3} (107.3^\\circ) \\longrightarrow \\ce{H2O} (104.5^\\circ)$$

---

### Aturan Bent (*Bent\'s Rule*):
> **"Karakter orbital $s$ atom pusat cenderung terkonsentrasi pada orbital hibrida yang mengarah ke substituen yang lebih elektropositif atau PEB; sebaliknya, karakter orbital $p$ terkonsentrasi pada orbital yang mengarah ke substituen yang lebih elektronegatif."**

**Aplikasi Kritis pada Kerangka Trigonal Bipiramidal ($sp^3d$):**
- Posisi **Ekuatorial** tersusun dari orbital hibrida $sp^2$ ($33.3\\%$ karakter-$s$), ikatan lebih pendek dan stabil menampung elektron padat.
- Posisi **Aksial** tersusun dari orbital hibrida $dp$ ($0\\%$ karakter-$s$, $100\\%$ karakter-$p$), ikatan lebih panjang dan renggang.
- *Hukum Penempatan:* Pasangan elektron bebas (PEB) dan gugus yang kurang elektronegatif **pasti memilih posisi ekuatorial**, sedangkan ligan yang sangat elektronegatif (seperti $\\ce{-F}$ atau $\\ce{-Cl}$) **pasti menempati posisi aksial**.`,
        keyFormulas: [
          { name: 'Bilangan Sterik', formula: 'SN = \\text{PEI} + \\text{PEB}' },
        ],
      },
      {
        tag: 'hibridisasi-orbital-valensi',
      tags: ["hibridisasi-orbital","ikatan-sigma-pi","karakter-s"],
        title: 'Konsep Inti 2: Hibridisasi Orbital Atom & Tinjauan Ikatan $\\sigma$ / $\\pi$',
        summary: 'Pencampuran fungsi gelombang orbital atom membentuk orbital hibrida terarah serta komparasi overlap aksial vs lateral.',
        content: `Hibridisasi adalah konsep matematis penggabungan linier orbital atomik ($s, p, d$) yang memiliki energi setara membentuk himpunan orbital baru yang terarah dalam ruang dengan geometri yang bersesuaian dengan tolakan VSEPR.

### Ikatan $\\sigma$ (Sigma) vs Ikatan $\\pi$ (Pi):
1. **Ikatan $\\sigma$ (Overlap Koaksial / Head-On):**
   - Terbentuk dari tumpang tindih orbital secara langsung di sepanjang sumbu antar-inti atom.
   - Kerapatan awan elektron terkonsentrasi simetris silindris di antara kedua inti.
   - Mengizinkan rotasi bebas antar-atom tanpa merusak ikatan.
   - Setiap ikatan kovalen antar-dua atom selalu diawali oleh tepat **satu ikatan $\\sigma$**.
2. **Ikatan $\\pi$ (Overlap Lateral / Side-by-Side):**
   - Terbentuk dari tumpang tindih orbital $p$ (atau $d$) paralel yang tidak terhibridisasi di atas dan di bawah bidang sumbu antar-inti.
   - Memiliki bidang nodal (probabilitas elektron nol) tepat pada garis sumbu antar-inti.
   - **Mencegah rotasi bebas**, menghasilkan fenomena ketegaran molekul dan keisomeran geometris (*cis/trans* atau *E/Z*).
   - Ikatan rangkap dua = $1\\sigma + 1\\pi$; Ikatan rangkap tiga = $1\\sigma + 2\\pi$.

---

### Delokalisasi Elektron $\\pi$ & Resonansi Kuantum:
Pada molekul terkonjugasi datar (seperti benzena $\\ce{C6H6}$, ion karbonat $\\ce{CO3^2-}$, atau ion nitrat $\\ce{NO3-}$), orbital $p$ tak terhibridisasi mengalami overlap lateral kontinu membentuk awan elektron $\\pi$ terdelokalisasi di atas dan di bawah kerangka $\\sigma$. Delokalisasi ini menurunkan energi potensial sistem secara signifikan (dikenal sebagai **energi resonansi**).`,
        keyFormulas: [
          { name: 'Komposisi Ikatan Rangkap Dua', formula: '1\\sigma + 1\\pi' },
          { name: 'Komposisi Ikatan Rangkap Tiga', formula: '1\\sigma + 2\\pi' },
        ],
      },
      {
        tag: 'teori-orbital-molekul-mot',
      tags: ["teori-mot","orbital-molekul","orde-ikatan-mot","magnetisme"],
        title: 'Konsep Inti 3: Teori Orbital Molekul (Molecular Orbital Theory / MOT)',
        summary: 'Prinsip LCAO, fenomena s-p mixing, diagram energi diatomik homonuklir & heteronuklir, serta sifat kemagnetan.',
        content: `Teori Orbital Molekul (MOT) memperlakukan elektron dalam molekul terdelokalisasi di seluruh kerangka inti molekul, bukan hanya terlokalisasi di antara dua atom seperti pada Teori Lewis. Teori ini berhasil menjelaskan paramagnetisme molekul $\\ce{O2}$ cair yang gagal diterangkan oleh teori ikatan valensi klasik.

### Prinsip Kombinasi Linier Orbital Atom (LCAO):
Ketika dua orbital atom $\\psi_A$ dan $\\psi_B$ berinteraksi, terbentuk dua orbital molekul:
1. **Orbital Ikatan (Bonding, $\\sigma$ atau $\\pi$):**
   - Terbentuk dari interferensi konstruktif (fasa sefasa, $\\psi = \\psi_A + \\psi_B$).
   - Kerapatan elektron di antara kedua inti meningkat, menstabilkan molekul dengan tingkat energi lebih rendah dari orbital atom penyusun.
2. **Orbital Anti-Ikatan (Antibonding, $\\sigma^*$ atau $\\pi^*$):**
   - Terbentuk dari interferensi destruktif (beda fasa, $\\psi^* = \\psi_A - \\psi_B$).
   - Memiliki bidang simpul nodal antar-inti, mendestabilkan molekul dengan tingkat energi lebih tinggi dari orbital atom penyusun.

---

### Diagram Tingkat Energi Molekul Diatomik Periode 2:
Terdapat dua varian diagram energi yang sangat krusial dalam soal olimpiade kimia:

1. **Tanpa Pencampuran $s-p$ (Normal - untuk $\\ce{O2}$ dan $\\ce{F2}$):**
   Karena muatan inti efektif atom $\\ce{O}$ dan $\\ce{F}$ sangat besar, selisih energi orbital $2s$ dan $2p$ sangat lebar ($\\Delta E > 15\\text{ eV}$), sehingga tidak ada interaksi antara $\\sigma_{2s}$ dan $\\sigma_{2p}$.
   Urutan tingkat energi orbital:
   $$\\sigma_{2s} < \\sigma^*_{2s} < \\sigma_{2p_z} < (\\pi_{2p_x} = \\pi_{2p_y}) < (\\pi^*_{2p_x} = \\pi^*_{2p_y}) < \\sigma^*_{2p_z}$$

2. **Dengan Pencampuran $s-p$ (Terjadi Mixing - untuk $\\ce{Li2}, \\ce{Be2}, \\ce{B2}, \\ce{C2}, \\ce{N2}$):**
   Selisih energi $2s$ dan $2p$ relatif sempit ($\\Delta E < 12\\text{ eV}$). Terjadi interaksi kuantum simetri yang mendorong tingkat energi orbital $\\sigma_{2p_z}$ naik ke atas orbital degenerasi $\\pi_{2p}$!
   Urutan tingkat energi orbital:
   $$\\sigma_{2s} < \\sigma^*_{2s} < (\\pi_{2p_x} = \\pi_{2p_y}) < \\sigma_{2p_z} < (\\pi^*_{2p_x} = \\pi^*_{2p_y}) < \\sigma^*_{2p_z}$$

---

### Perhitungan Orde Ikatan (Bond Order) & Korelasi Fisis:
$$\\text{Bond Order} = \\frac{N_b - N_a}{2}$$
di mana:
- $N_b$: Jumlah elektron pada seluruh orbital ikatan (bonding)
- $N_a$: Jumlah elektron pada seluruh orbital anti-ikatan (antibonding)

**Aturan Sifat Fisis:**
- Jika $BO > 0$, molekul stabil secara termodinamika. Semakin tinggi orde ikatan, **energi disosiasi ikatan ($D_0$) semakin besar** dan **panjang ikatan semakin pendek**.
- Jika $BO = 0$, spesi tidak stabil dan tidak dapat eksis secara spontan (contoh: $\\ce{He2}, \\ce{Be2}$).
- **Paramagnetik:** Terdapat minimal satu elektron tak berpasangan pada diagram orbital molekul; ditarik oleh medan magnet luar.
- **Diamagnetik:** Seluruh elektron berpasangan sempurna; ditolak sangat lemah oleh medan magnet luar.`,
        keyFormulas: [
          { name: 'Orde Ikatan MOT', formula: 'BO = \\frac{N_{\\text{bonding}} - N_{\\text{antibonding}}}{2}' },
        ],
      },
      {
        tag: 'gaya-antarmolekul-ikatan-hidrogen',
      tags: ["gaya-antarmolekul","ikatan-hidrogen","gaya-van-der-waals"],
        title: 'Konsep Inti 4: Gaya Antarmolekul & Fenomena Ikatan Hidrogen',
        summary: 'Klasifikasi gaya dispersi London, dipol-dipol, komparasi ikatan hidrogen inter vs intramolekul, dan anomali air.',
        content: `Gaya antarmolekul adalah gaya tarik elektrostatik yang bekerja di antara molekul-molekul netral, menentukan wujud zat (padat, cair, gas), titik leleh, titik didih, dan viskositas.

### Tiga Komponen Gaya Van der Waals:
1. **Gaya Dispersi London (Dipol Sesaat - Dipol Terimbas):**
   - Bekerja pada seluruh molekul (baik nonpolar maupun polar).
   - Timbul dari fluktuasi sesaat distribusi probabilitas awan elektron yang menghasilkan dipol sesaat, yang kemudian menginduksi awan elektron molekul tetangganya.
   - *Faktor Kekuatan:* Meningkat seiring bertambahnya massa molar (jumlah total elektron) dan luas permukaan kontak molekul (bentuk rantai lurus memiliki gaya London lebih kuat dibanding isomer bercabang bola kompak).
2. **Gaya Dipol-Dipol (Keesom):**
   - Gaya tarik elektrostatik antarmolekul yang memiliki momen dipol permanen (molekul polar).
3. **Gaya Ion-Dipol:**
   - Gaya elektrostatik kuat antara ion dengan molekul polar pelarut (contoh: hidrasi kation $\\ce{Na+}$ oleh molekul $\\ce{H2O}$).

---

### Ikatan Hidrogen (Hydrogen Bond):
Interaksi dipol-dipol khusus berkekuatan tinggi ($10 - 40\\text{ kJ/mol}$, sekitar 10% kekuatan ikatan kovalen).
- **Syarat Mutlak:** Atom hidrogen terikat kovalen langsung pada atom berkeelektronegatifan sangat tinggi dengan jari-jari atomik sangat kecil: **Fluorin ($\\ce{F}$), Oksigen ($\\ce{O}$), atau Nitrogen ($\\ce{N}$)**, dan berinteraksi dengan PEB milik donor atom $\\ce{F, O, N}$ lainnya.

### Ikatan Hidrogen Intermolekul vs Intramolekul:
- **Intermolekul (Antar-Molekul Berbeda):**
  Menghubungkan molekul-molekul membentuk jejaring makroskopis kontinu. Menyebabkan **lonjakan titik didih dan titik leleh yang sangat drastis**.
  *Contoh:* Titik didih $\\ce{H2O}$ ($100^\\circ\\text{C}$) jauh melampaui hidrida segolongannya ($\\ce{H2S}$, $-60^\\circ\\text{C}$).
- **Intramolekul (Di Dalam Satu Molekul yang Sama):**
  Terjadi jika gugus donor dan akseptor berdekatan secara spasial membentuk cincin heliks kelat beranggota 5 atau 6. Ikatan ini "mengunci" PEB di dalam molekul sehingga **mencegah molekul berikatan dengan molekul tetangganya**.
  *Dampak:* Titik didih justru turun signifikan dan senyawa menjadi sangat volatil (mudah disuling uap / *steam volatile*).
  *Contoh Klasik:* *ortho*-nitrofenol (ikatan hidrogen intramolekul, titik didih $214^\\circ\\text{C}$) memiliki titik didih jauh lebih rendah daripada isomer *para*-nitrofenol (ikatan hidrogen intermolekul, titik didih $279^\\circ\\text{C}$).

---

### Anomali Fisika Air (Kerapatan Es vs Air Cair):
Pada kristal es padat, setiap molekul $\\ce{H2O}$ terikat hidrogen dengan 4 molekul tetangga dalam geometri tetrahedral terbuka berongga (struktur kisi seperti intan). Ketika es mencair pada rentang $0 - 4^\\circ\\text{C}$, sebagian ikatan hidrogen terputus dan molekul air yang bebas runtuh mengisi rongga-rongga kosong tersebut, sehingga volume mengecil dan densitas air meningkat hingga mencapai **densitas maksimum pada $3.98^\\circ\\text{C}$** ($1.000\\text{ g/cm}^3$). Inilah alasan mengapa danau membeku dari permukaan atas ke bawah pada musim dingin.`,
      },
      {
        tag: 'energi-kisi-born-haber',
      tags: ["energi-kisi","siklus-born-haber","persamaan-kapustinskii"],
        title: 'Konsep Inti 5: Termodinamika Senyawa Ionik & Siklus Born-Haber',
        summary: 'Siklus termokimia Born-Haber, penentuan energi kisi kristal, dan formulasi semi-empiris Kapustinskii.',
        content: `Pembentukan kristal padat ionik dari unsur-unsur bebasnya dalam wujud standar adalah proses multithap yang dikaji secara termodinamika menggunakan Hukum Hess dalam bentuk siklus tertutup: **Siklus Born-Haber**.

### Tahapan Siklus Born-Haber untuk Garam Biner $\\ce{MX_n(s)}$:
1. **Sublimasi Logam:** $\\ce{M(s) -> M(g)} \\quad (\\Delta H_{\\text{sub}} > 0)$
2. **Ionisasi Logam:** $\\ce{M(g) -> M^n+(g) + n e-} \\quad (\\sum IE > 0)$
3. **Disosiasi Ikatan Non-Logam:** $\\frac{n}{2}\\ce{X2(g) -> n X(g)} \\quad (\\frac{n}{2} BE > 0)$
4. **Afinitas Elektron Non-Logam:** $n\\ce{X(g) + n e- -> n X-(g)} \\quad (n \\cdot EA_1 < 0)$
5. **Pembentukan Kisi Kristal (Energi Kisi):** $\\ce{M^n+(g) + n X-(g) -> MX_n(s)} \\quad (U_L \\ll 0)$

### Persamaan Siklus Born-Haber:
$$\\Delta H_f^\\circ = \\Delta H_{\\text{sub}} + \\sum IE + \\frac{n}{2} BE + n \\cdot EA_1 + U_L$$

---

### Persamaan Kapustinskii:
Untuk senyawa ionik yang konstanta Madelung kristalnya ($A$) belum diketahui, energi kisi ($U_L$) dapat diprediksi secara akurat melalui rumus semi-empiris Kapustinskii:
$$U_L = -\\frac{1202 \\cdot \\nu \\cdot |z_+ z_-|}{r_+ + r_-} \\left(1 - \\frac{34.5}{r_+ + r_-}\\right) \\text{ kJ/mol}$$
di mana:
- $\\nu$: Jumlah ion per unit rumus (contoh: $\\ce{NaCl} \\implies \\nu=2$; $\\ce{MgCl2} \\implies \\nu=3$)
- $z_+, z_-$: Muatan kation dan anion
- $r_+, r_-$: Jari-jari ionik dalam satuan pikometer ($\\text{pm}$)

**Kesimpulan Evaluasi Energi Kisi:**
Energi kisi kristal ionik berbanding lurus dengan kuadrat perkalian muatan ion ($|z_+ z_-|$) dan berbanding terbalik dengan jarak antar-inti ion ($r_+ + r_-$). Kation bivalen atau trivalen berukuran kecil (seperti $\\ce{Mg^2+}, \\ce{Al^3+}$) menghasilkan energi kisi ribuan $\\text{kJ/mol}$ yang menstabilkan senyawa ionik.`,
        keyFormulas: [
          { name: 'Siklus Born-Haber', formula: '\\Delta H_f^\\circ = \\Delta H_{\\text{sub}} + \\sum IE + \\frac{n}{2} BE + \\sum EA + U_L' },
          { name: 'Persamaan Kapustinskii', formula: 'U_L = -\\frac{1202 \\nu |z_+ z_-|}{r_+ + r_-}\\left(1 - \\frac{34.5}{r_+ + r_-}\\right)' },
        ],
      },
    ],
    worked_examples: [
      {
        tag: 'soal-lewis-muatan-formal-scn',
      tags: ["soal-osk","muatan-formal","resonansi-scn"],
        title: 'Contoh Soal OSK 1: Struktur Lewis & Analisis Resonansi Mayor Ion Tiosianat (SCN⁻)',
        summary: 'Analisis komparatif muatan formal tiga kontributor resonansi ion tiosianat dan prediksi sisi reaktif protonasi.',
        content: `### Masalah Soal:
Ion tiosianat ($\\ce{SCN-}$) merupakan ligan ambidentat yang penting dalam reaksi kompleks kimia anorganik.
a. Gambarkan tiga kemungkinan struktur resonansi Lewis untuk ion $\\ce{SCN-}$ (urutan atom $\\ce{S-C-N}$)!  
b. Hitung muatan formal ($FC$) pada setiap atom untuk ketiga struktur tersebut!  
c. Tentukan struktur manakah yang merupakan kontributor resonansi mayor (paling stabil) dan jelaskan alasannya berdasarkan konsep keelektronegatifan!  
d. Jika ion $\\ce{SCN-}$ direaksikan dengan ion hidrogen ($\\ce{H+}$) dalam larutan berair encer, pada atom manakah protonasi terjadi secara dominan?

---

### Pembahasan & Langkah Kunci:

**Langkah 1: Menghitung Elektron Valensi Total**

- Belerang ($\\ce{S}$, golongan 16) = $6\\, e^-$
- Karbon ($\\ce{C}$, golongan 14) = $4\\, e^-$
- Nitrogen ($\\ce{N}$, golongan 15) = $5\\, e^-$
- Muatan anion ($-1$) = $1\\, e^-$
$$\\text{Total elektron valensi} = 6 + 4 + 5 + 1 = 16\\, e^- \\quad (8\\text{ pasang elektron})$$

**Langkah 2: Menyusun Tiga Struktur Resonansi Lewis**

Karena karbon adalah atom yang paling kurang elektronegatif ($\\chi = 2.55$), karbon bertindak sebagai atom pusat:
- **Struktur I (Ikatan Rangkap Dua-Dua):**  
  $$\\ce{[:\\ddot{S}=C=\\ddot{N}:]^-}$$  
  Atom $\\ce{S}$ memiliki 2 PEB (4 elektron) dan 2 ikatan; atom $\\ce{C}$ memiliki 4 ikatan (tanpa PEB); atom $\\ce{N}$ memiliki 2 PEB (4 elektron) dan 2 ikatan.
- **Struktur II (Ikatan Tunggal - Tiga):**  
  $$\\ce{[:\\underset{\\cdot\\cdot}{\\ddot{S}}-C#N:]^-}$$  
  Atom $\\ce{S}$ memiliki 3 PEB (6 elektron) dan 1 ikatan; atom $\\ce{C}$ memiliki 4 ikatan; atom $\\ce{N}$ memiliki 1 PEB (2 elektron) dan 3 ikatan.
- **Struktur III (Ikatan Tiga - Tunggal):**  
  $$\\ce{[:S#C-\\underset{\\cdot\\cdot}{\\ddot{N}}:]^-}$$  
  Atom $\\ce{S}$ memiliki 1 PEB (2 elektron) dan 3 ikatan; atom $\\ce{C}$ memiliki 4 ikatan; atom $\\ce{N}$ memiliki 3 PEB (6 elektron) dan 1 ikatan.

**Langkah 3: Menghitung Muatan Formal Setiap Atom**

Rumus: $FC = V - LP - \\frac{1}{2}BP$
- **Struktur I:**
  - $FC(\\ce{S}) = 6 - 4 - 2 = 0$
  - $FC(\\ce{C}) = 4 - 0 - 4 = 0$
  - $FC(\\ce{N}) = 5 - 4 - 2 = -1$
- **Struktur II:**
  - $FC(\\ce{S}) = 6 - 6 - 1 = -1$
  - $FC(\\ce{C}) = 4 - 0 - 4 = 0$
  - $FC(\\ce{N}) = 5 - 2 - 3 = 0$
- **Struktur III:**
  - $FC(\\ce{S}) = 6 - 2 - 3 = +1$
  - $FC(\\ce{C}) = 4 - 0 - 4 = 0$
  - $FC(\\ce{N}) = 5 - 6 - 1 = -2$

**Langkah 4: Evaluasi Kontributor Resonansi Mayor**

- **Struktur III** segera dieliminasi sebagai kontributor sangat minor karena terjadi pemisahan muatan yang besar ($+1$ dan $-2$).
- Membandingkan **Struktur I** dan **Struktur II**: Keduanya memiliki pemisahan muatan minimal ($0, 0, -1$).
  - Pada Struktur I, muatan $-1$ berada pada atom Nitrogen.
  - Pada Struktur II, muatan $-1$ berada pada atom Belerang.
  - Berdasarkan skala Pauling, nilai keelektronegatifan adalah $\\chi(\\ce{N}) = 3.04$ sedangkan $\\chi(\\ce{S}) = 2.58$. Atom Nitrogen memiliki keelektronegatifan yang jauh lebih tinggi daripada atom Belerang.
  - Sesuai prinsip kestabilan struktur Lewis, muatan formal negatif paling stabil ditempatkan pada atom yang **paling elektronegatif**.
- **Kesimpulan Juri:** **Struktur I ($\\ce{S=C=N-}$)** adalah kontributor **Mayor Utama**, diikuti oleh Struktur II sebagai kontributor minor signifikan.

**Langkah 5: Prediksi Sisi Reaktif Protonasi**

Karena Struktur I mendominasi hibrida resonansi, kerapatan muatan negatif tertinggi terakumulasi pada atom **Nitrogen**. Ion $\\ce{H+}$ bertindak sebagai elektrofil yang menyerang pasangan elektron bebas pada atom $\\ce{N}$, menghasilkan produk termodinamika **asam isotiosianat ($\\ce{HNCS}$)** daripada asam tiosianat ($\\ce{HSCN}$).`,
        keyFormulas: [
          { name: 'Muatan Formal', formula: 'FC = V - LP - \\frac{1}{2}(BP)' },
        ],
      },
      {
        tag: 'soal-vsepr-aturan-bent-sf4-clf3',
      tags: ["soal-osp","aturan-bent","geometri-sf4-clf3"],
        title: 'Contoh Soal OSP 2: Prediksi Bentuk Molekul & Deviasi Sudut Ikatan dengan Aturan Bent',
        summary: 'Aplikasi bilangan sterik 5, pemilahan posisi ekuatorial vs aksial, dan rasionalisasi distorsi sudut ikatan.',
        content: `### Masalah Soal:
Dua molekul anorganik halida-belerang memiliki rumus molekul $\\ce{SF4}$ dan $\\ce{ClF3}$.
a. Tentukan tipe VSEPR ($AX_mE_n$) dan bilangan sterik ($SN$) untuk atom pusat masing-masing molekul!  
b. Jelaskan mengapa pada $\\ce{SF4}$, pasangan elektron bebas (PEB) memilih berada di posisi ekuatorial daripada posisi aksial!  
c. Gambarkan geometri bentuk molekul nyata $\\ce{SF4}$ dan $\\ce{ClF3}$, serta jelaskan deviasi sudut ikatan dari nilai sudut ideal trigonal bipiramidal ($90^\\circ, 120^\\circ, 180^\\circ$)!  
d. Apakah molekul $\\ce{ClF3}$ bersifat polar atau nonpolar? Jelaskan berdasarkan momen dipol resultan!

---

### Pembahasan & Langkah Kunci:

**Langkah 1: Menentukan Tipe VSEPR & Bilangan Sterik**

- **Molekul $\\ce{SF4}$:**
  - Atom pusat $\\ce{S}$ (golongan 16) memiliki 6 elektron valensi.
  - Membentuk 4 ikatan tunggal $\\ce{S-F}$ ($4\\text{ PEI}$).
  - Sisa elektron pada $\\ce{S}$: $6 - 4 = 2$ elektron ($1\\text{ PEB}$).
  - Tipe VSEPR: **$AX_4E_1$** $\\implies$ Bilangan sterik $SN = 4 + 1 = 5$ (hibridisasi $sp^3d$).
- **Molekul $\\ce{ClF3}$:**
  - Atom pusat $\\ce{Cl}$ (golongan 17) memiliki 7 elektron valensi.
  - Membentuk 3 ikatan tunggal $\\ce{Cl-F}$ ($3\\text{ PEI}$).
  - Sisa elektron pada $\\ce{Cl}$: $7 - 3 = 4$ elektron ($2\\text{ PEB}$).
  - Tipe VSEPR: **$AX_3E_2$** $\\implies$ Bilangan sterik $SN = 3 + 2 = 5$ (hibridisasi $sp^3d$).

**Langkah 2: Rasionalisasi Posisi PEB Melalui Tolakan & Aturan Bent**

Pada geometri dasar Trigonal Bipiramidal ($SN = 5$), terdapat dua posisi ruang yang berbeda secara simetri:
- **Posisi Aksial:** Memiliki 3 tetangga pada sudut siku-siku $90^\\circ$.
- **Posisi Ekuatorial:** Hanya memiliki 2 tetangga pada sudut $90^\\circ$ dan 2 tetangga pada sudut lebar $120^\\circ$.
Karena gaya tolak elektrostatik elektron berkurang sangat tajam seiring bertambahnya sudut ikatan (tolakan pada $90^\\circ$ berorde magnitudo lebih kuat dibanding $120^\\circ$):
- Jika PEB ditaruh di posisi aksial: terjadi 3 tolakan keras $\\text{PEB-PEI}$ pada sudut $90^\\circ$.
- Jika PEB ditaruh di posisi ekuatorial: hanya terjadi 2 tolakan keras $\\text{PEB-PEI}$ pada sudut $90^\\circ$.
Dengan demikian, penempatan PEB pada posisi **ekuatorial** meminimalkan total energi potensial tolakan molekul. Berdasarkan Aturan Bent, orbital ekuatorial berkarakter $sp^2$ ($33\\%$ karakter-$s$) menahan PEB lebih erat ke inti atom pusat.

**Langkah 3: Geometri Molekul Nyata & Analisis Deviasi Sudut**

- **Geometri $\\ce{SF4}$ ($AX_4E_1$):**
  - Bentuk molekul: **Jungkat-Jungkit (Seesaw / Bisphenoid)**.
  - Deviasi sudut ikatan: PEB pada bidang ekuatorial mendorong kedua ikatan aksial dan ikatan ekuatorial menjauh.
  - Sudut ikatan aksial $\\ce{F_{aks}-S-F_{aks}}$ tertekan dari ideal $180^\\circ$ menjadi **$173^\\circ$** (membengkok ke arah menjauhi PEB).
  - Sudut ikatan ekuatorial $\\ce{F_{ek}-S-F_{ek}}$ terkompresi secara drastis dari ideal $120^\\circ$ menjadi **$101.6^\\circ$** (ditulis $\\approx 102^\\circ$).
- **Geometri $\\ce{ClF3}$ ($AX_3E_2$):**
  - Bentuk molekul: **Bentuk T (T-shaped)**.
  - Kedua PEB berada di posisi ekuatorial.
  - Deviasi sudut ikatan: Dua PEB ekuatorial memberikan tolakan ganda terhadap ikatan $\\ce{Cl-F}$ aksial. Sudut ikatan $\\ce{F_{aks}-Cl-F_{ek}}$ tertekan dari $90^\\circ$ menjadi **$87.5^\\circ$**, dan sudut $\\ce{F_{aks}-Cl-F_{aks}}$ melengkung menjadi **$175^\\circ$**.

**Langkah 4: Analisis Kepolaran Molekul $\\ce{ClF3}$**

Geometri Bentuk T pada $\\ce{ClF3}$ tidak memiliki pusat inversi simetri:
- Dua ikatan $\\ce{Cl-F}$ aksial yang melengkung ($175^\\circ$) menghasilkan komponen dipol resultan yang searah menjauhi kedua PEB.
- Ikatan $\\ce{Cl-F}$ ekuatorial yang sangat polar mengarah ke satu sisi bidang.
- Kedua PEB ekuatorial menyumbangkan momen dipol besar ke arah sebaliknya.
Akibatnya, resultan seluruh vektor momen dipol tidak saling meniadakan ($\\vec{\\mu}_{\\text{net}} \\approx 0.56\\text{ D} \\neq 0$). Molekul $\\ce{ClF3}$ bersifat **Polar**.`,
        keyFormulas: [
          { name: 'Tolakan Sudut', formula: '\\text{Tolakan}(90^\\circ) \\gg \\text{Tolakan}(120^\\circ)' },
        ],
      },
      {
        tag: 'soal-mot-karbon-monoksida',
      tags: ["soal-osp","diagram-mot","karbon-monoksida-co"],
        title: 'Contoh Soal OSP 3: Diagram Orbital Molekul (MOT) Heteronuklir CO & NO⁺',
        summary: 'Konstruksi diagram energi orbital molekul diatomik heteronuklir isoelektronik, orde ikatan, dan sifat kimia ligan karbonil.',
        content: `### Masalah Soal:
Molekul gas karbon monoksida ($\\ce{CO}$) dan kation nitrosonium ($\\ce{NO+}$) adalah spesi diatomik heteronuklir yang sangat reaktif dan saling isoelektronik.
a. Tentukan jumlah elektron valensi total dari $\\ce{CO}$ dan kation $\\ce{NO+}$!  
b. Gambarkan susunan diagram tingkat energi orbital molekul valensi untuk $\\ce{CO}$ (perhatikan perbedaan energi orbital atom $\\ce{C}$ dan $\\ce{O}$)!  
c. Tuliskan konfigurasi orbital molekul lengkap dari $\\ce{CO}$, hitung orde ikatannya, dan tentukan sifat kemagnetannya!  
d. Berdasarkan Teori Orbital Molekul, jelaskan mengapa gas $\\ce{CO}$ mengikat ion besi $\\ce{Fe^2+}$ dalam hemoglobin secara kuat melalui atom Karbon dan bukan melalui atom Oksigen!

---

### Pembahasan & Langkah Kunci:

**Langkah 1: Menghitung Elektron Valensi Total**

- $\\ce{CO}$: $\\ce{C}\\,(4\\, e^-) + \\ce{O}\\,(6\\, e^-) = \\mathbf{10\\, e^-}$ valensi.
- $\\ce{NO+}$: $\\ce{N}\\,(5\\, e^-) + \\ce{O}\\,(6\\, e^-) - 1\\, e^-\\,(\\text{muatan }+1) = \\mathbf{10\\, e^-}$ valensi.
Kedua spesi memiliki 10 elektron valensi dan saling isoelektronik dengan molekul gas nitrogen ($\\ce{N2}$).

**Langkah 2: Asimetri Energi Orbital Atom (Efek Elektronegativitas)**

Atom Oksigen jauh lebih elektronegatif dibanding Karbon ($\\chi_{\\ce{O}} = 3.44$ vs $\\chi_{\\ce{C}} = 2.55$). Muatan inti efektif Oksigen ($Z=8$) menarik elektron lebih kuat, sehingga orbital atom $2s$ dan $2p$ Oksigen berada pada tingkat energi yang jauh lebih rendah daripada Karbon:
- $E(2s_{\\ce{O}}) \\approx -32.3\\text{ eV}$ vs $E(2s_{\\ce{C}}) \\approx -19.4\\text{ eV}$
- $E(2p_{\\ce{O}}) \\approx -15.8\\text{ eV}$ vs $E(2p_{\\ce{C}}) \\approx -10.7\\text{ eV}$

Karena orbital $2s_{\\ce{O}}$ berenergi sangat rendah, ia hampir tidak bercampur dan bertindak mendekati non-bonding. Di sisi lain, orbital $2s_{\\ce{C}}$ memiliki tingkat energi yang sangat dekat dengan orbital $2p_z$ Oksigen, memicu fenomena **pencampuran $s-p$ (mixing) yang sangat kuat**.

**Langkah 3: Konfigurasi Orbital Molekul & Orde Ikatan**

Diagram orbital molekul valensi $\\ce{CO}$ tersusun sebagai berikut (dari energi terendah ke tertinggi):
$$\\sigma_1^2 \\quad \\sigma_2^{*2} \\quad (\\pi_{2p_x}^2 = \\pi_{2p_y}^2) \\quad \\sigma_3^2$$
*(Dalam notasi simetri spektroskopi anorganik: $(3\\sigma)^2 (4\\sigma^*)^2 (1\\pi)^4 (5\\sigma)^2$)*

1. **Perhitungan Orde Ikatan ($BO$):**
   - Elektron pada orbital bonding: $\\sigma_1 (2) + \\pi_{2p} (4) + \\sigma_3 (2) = 8\\, e^-$
   - Elektron pada orbital antibonding: $\\sigma_2^* (2) = 2\\, e^-$
   $$BO = \\frac{N_b - N_a}{2} = \\frac{8 - 2}{2} = 3$$
   Terbentuk **ikatan kovalen rangkap tiga sejati** ($\\ce{C#O}$), menjelaskan mengapa energi disosiasi ikatan $\\ce{CO}$ bernilai luar biasa tinggi ($D_0 = 1076\\text{ kJ/mol}$, salah satu ikatan terkuat di alam semesta).
2. **Sifat Kemagnetan:**
   Seluruh 10 elektron valensi berpasangan pada diagram orbital molekul, sehingga $\\ce{CO}$ bersifat **diamagnetik**.

**Langkah 4: Analisis Orbital HOMO & Toksisitas Hemoglobin**

- Orbital terisi dengan energi tertinggi (**HOMO / Highest Occupied Molecular Orbital**) pada molekul $\\ce{CO}$ adalah orbital $\\sigma_3$ ($5\\sigma$).
- Karena energi orbital atom $2p_z$ Karbon jauh lebih dekat ke orbital $\\sigma_3$ dibandingkan orbital atom Oksigen, fungsi gelombang orbital HOMO ini **didominasi oleh kontribusi atom Karbon ($> 80\\%$)**.
- Secara spasial, orbital $\\sigma_3$ merupakan pasangan elektron bebas yang menjulur keluar terarah dari atom Karbon (*carbon lone-pair lobe*).
- Ketika $\\ce{CO}$ berinteraksi dengan kompleks heme ($\\ce{Fe^2+}$), atom Karbon mendonasikan pasangan elektron bebas dari HOMO ini secara langsung ke orbital $d$ kosong dari ion $\\ce{Fe^2+}$ (ikatan kovalen koordinasi $\\sigma$). Kemudian orbital $d$ terisi $\\ce{Fe^2+}$ mendonasikan balik elektronnya ke orbital kosong LUMO $\\pi^*$ milik $\\ce{CO}$ (ikatan $\\pi$-backbonding). Sinergi ikatan ini membuat afinitas $\\ce{CO}$ mengikat hemoglobin lebih dari **200 kali lebih kuat** dibanding molekul oksigen $\\ce{O2}$.`,
        keyFormulas: [
          { name: 'Orde Ikatan Diatomik', formula: 'BO = \\frac{N_b - N_a}{2}' },
        ],
      },
      {
        tag: 'soal-born-haber-mgcl2',
      tags: ["soal-osn","siklus-born-haber","energi-kisi-mgcl2"],
        title: 'Contoh Soal OSN 4: Termodinamika Siklus Born-Haber & Energi Kisi MgCl₂',
        summary: 'Perhitungan kuantitatif energi kisi kristal garam alkali tanah via siklus termokimia Hess bertahap.',
        content: `### Masalah Soal:
Magnesium klorida ($\\ce{MgCl2}$) merupakan kristal ionik alkali tanah yang sangat stabil pada suhu kamar. Diketahui data termodinamika standar pada $298\\text{ K}$ berikut:
- Entalpi pembentukan standar $\\ce{MgCl2(s)}$: $\\Delta H_f^\\circ = -641.8\\text{ kJ/mol}$
- Entalpi sublimasi magnesium padat: $\\Delta H_{\\text{sub}}(\\ce{Mg}) = +147.1\\text{ kJ/mol}$
- Energi ionisasi pertama magnesium: $IE_1(\\ce{Mg}) = +737.7\\text{ kJ/mol}$
- Energi ionisasi kedua magnesium: $IE_2(\\ce{Mg}) = +1450.7\\text{ kJ/mol}$
- Energi disosiasi ikatan klorin: $BE(\\ce{Cl-Cl}) = +242.4\\text{ kJ/mol}$
- Afinitas elektron atom klorin: $EA_1(\\ce{Cl}) = -348.6\\text{ kJ/mol}$

a. Tuliskan reaksi termokimia untuk masing-masing tahapan pembentukan $\\ce{MgCl2(s)}$ dalam Siklus Born-Haber!  
b. Hitung nilai energi kisi ($U_L$) pembentukan kristal $\\ce{MgCl2(s)}$ dari ion-ion gasnya!  
c. Mengapa magnesium tidak membentuk garam $\\ce{MgCl(s)}$ pada kondisi standar, padahal untuk membentuk $\\ce{Mg^2+}$ dibutuhkan energi ionisasi kedua yang sangat besar ($1450.7\\text{ kJ/mol}$)?

---

### Pembahasan & Langkah Kunci:

**Langkah 1: Persamaan Termokimia Seluruh Tahapan**

Reaksi pembentukan standar:
$$\\ce{Mg(s) + Cl2(g) -> MgCl2(s)} \\quad \\Delta H_f^\\circ = -641.8\\text{ kJ/mol}$$

Rangkaian siklus Born-Haber bertahap:
1. **Sublimasi atom magnesium:**
   $$\\ce{Mg(s) -> Mg(g)} \\quad \\Delta H_1 = \\Delta H_{\\text{sub}} = +147.1\\text{ kJ/mol}$$
2. **Ionisasi pertama magnesium:**
   $$\\ce{Mg(g) -> Mg+(g) + e-} \\quad \\Delta H_2 = IE_1 = +737.7\\text{ kJ/mol}$$
3. **Ionisasi kedua magnesium:**
   $$\\ce{Mg+(g) -> Mg^2+(g) + e-} \\quad \\Delta H_3 = IE_2 = +1450.7\\text{ kJ/mol}$$
4. **Disosiasi ikatan gas klorin (membentuk 2 mol atom Cl):**
   $$\\ce{Cl2(g) -> 2Cl(g)} \\quad \\Delta H_4 = BE(\\ce{Cl2}) = +242.4\\text{ kJ/mol}$$
5. **Afinitas elektron 2 mol atom klorin:**
   $$2\\ce{Cl(g) + 2e- -> 2Cl-(g)} \\quad \\Delta H_5 = 2 \\times EA_1(\\ce{Cl}) = 2 \\times (-348.6) = -697.2\\text{ kJ/mol}$$
6. **Pembentukan kisi kristal dari ion gas (Energi Kisi, $U_L$):**
   $$\\ce{Mg^2+(g) + 2Cl-(g) -> MgCl2(s)} \\quad \\Delta H_6 = U_L$$

**Langkah 2: Menghitung Energi Kisi Kristal ($U_L$)**

Berdasarkan Hukum Hess, entalpi pembentukan standar sama dengan jumlah aljabar entalpi seluruh tahapan:
$$\\Delta H_f^\\circ = \\Delta H_{\\text{sub}} + IE_1 + IE_2 + BE(\\ce{Cl2}) + 2 \\cdot EA_1 + U_L$$

Substitusikan data numerik ke persamaan:
$$-641.8 = 147.1 + 737.7 + 1450.7 + 242.4 + (-697.2) + U_L$$

Jumlahkan suku-suku endotermik dan eksotermik di ruas kanan:
$$\\sum \\Delta H_{1-5} = 147.1 + 737.7 + 1450.7 + 242.4 - 697.2 = +1880.7\\text{ kJ/mol}$$

Maka nilai energi kisi pembentukan kristal adalah:
$$U_L = -641.8 - 1880.7 = \\mathbf{-2522.5\\text{ kJ/mol}}$$
*(Catatan: Jika soal mendefinisikan energi kisi sebagai energi pemecahan kristal menjadi ion gas, nilainya bertanda positif: $+2522.5\\text{ kJ/mol}$).*

**Langkah 3: Analisis Kestabilan Termodinamika $\\ce{MgCl2}$ vs $\\ce{MgCl}$**

- Pada hipotesis senyawa $\\ce{MgCl(s)}$, kation bermuatan $+1$ ($\\ce{Mg+}$) memang hanya membutuhkan $IE_1 = 737.7\\text{ kJ/mol}$.
- Namun, menurut rumus Kapustinskii ($U_L \\propto \\frac{|z_+ z_-|}{r_+ + r_-}$), energi kisi kristal $\\ce{Mg+Cl-}$ yang tersusun atas ion berpasangan muatan $1 \\times 1$ hanya menghasilkan energi kisi sekitar $-750\\text{ kJ/mol}$, sehingga $\\Delta H_f^\\circ(\\ce{MgCl}) \\approx -125\\text{ kJ/mol}$.
- Sebaliknya pada $\\ce{MgCl2(s)}$, kation $\\ce{Mg^2+}$ berukuran jauh lebih kecil ($72\\text{ pm}$ vs $\\approx 100\\text{ pm}$) dan memiliki muatan ganda ($+2$). Faktor perkalian muatan $|z_+ z_-| = 2 \\times 1 = 2$ menghasilkan pelepasan energi kisi yang sangat dahsyat: **$-2522.5\\text{ kJ/mol}$**!
- Pelepasan energi kisi masif ini mengkompensasi biaya energi ionisasi kedua ($1450.7\\text{ kJ/mol}$) dengan surplus kestabilan yang sangat besar. Akibatnya, $\\ce{MgCl2}$ jauh lebih eksotermik ($\\Delta H_f^\\circ = -641.8\\text{ kJ/mol}$), dan kristal $\\ce{MgCl}$ akan secara spontan terdisproporsionasi menjadi magnesium logam dan magnesium klorida:
  $$2\\ce{MgCl(s) -> Mg(s) + MgCl2(s)} \\quad \\Delta H^\\circ \\approx -390\\text{ kJ/mol}$$`,
        keyFormulas: [
          { name: 'Siklus Born-Haber Garam MX2', formula: '\\Delta H_f^\\circ = \\Delta H_{\\text{sub}} + IE_1 + IE_2 + BE + 2 EA + U_L' },
        ],
      },
      {
        tag: 'soal-vsepr-eksotis-if7-xef5',
      tags: ["soal-osn","vsepr-eksotis","if7-bipiramida-pentagonal","xef5-planar"],
        title: 'Contoh Soal OSN 5: Geometri Hipervalen Sterik 7 (IF₇ & Anion Pentagonal Planar XeF₅⁻)',
        summary: 'Analisis struktur koordinasi bilangan sterik 7, simetri D5h, dan geometri anion pentagonal planar gas mulia.',
        content: `### Masalah Soal:
Pada sistem hipervalen tingkat tinggi dalam silabus IChO / OSN Kimia, bilangan sterik 7 ($SN = 7$) memunculkan bentuk molekul yang sangat menarik.
Dua spesi representatif yang memiliki bilangan sterik 7 adalah molekul iodin heptafluorida ($\\ce{IF7}$) dan anion pentafluoroxenat(IV) ($\\ce{XeF5-}$).
a. Tentukan tipe VSEPR ($AX_mE_n$), bilangan sterik, dan geometri bentuk molekul dari $\\ce{IF7}$! Sebutkan dua nilai sudut ikatan yang terdapat pada molekul tersebut!  
b. Tentukan jumlah elektron valensi total, tipe VSEPR, dan susunan spasial pasangan elektron bebas pada anion $\\ce{XeF5-}$!  
c. Mengapa pada anion $\\ce{XeF5-}$, kedua pasangan elektron bebas (PEB) lebih memilih posisi trans-aksial ($180^\\circ$) daripada posisi ekuatorial, menghasilkan bentuk molekul **pentagonal planar**?  
d. Apakah anion $\\ce{XeF5-}$ memiliki momen dipol permanen (polar atau nonpolar)? Jelaskan berdasarkan simetri vektor dipol!

---

### Pembahasan & Langkah Kunci:

**Langkah 1: Analisis Iodin Heptafluorida ($\ce{IF7}$)**

- Atom pusat $\\ce{I}$ (golongan 17) memiliki 7 elektron valensi.
- Terikat pada 7 atom $\\ce{F}$ melalui 7 ikatan tunggal kovalen ($7\\text{ PEI}$).
- Sisa elektron bebas pada $\\ce{I}$: $7 - 7 = 0$ ($0\\text{ PEB}$).
- Tipe VSEPR: **$AX_7$** (Bilangan sterik $SN = 7$, hibridisasi $sp^3d^3$).
- Geometri molekul: **Pentagonal Bipiramidal** (grup titik simetri $D_{5h}$).
- Dua kelompok sudut ikatan:
  1. **Sudut Ekuatorial ($\\ce{F_{ek}-I-F_{ek}}$):** Kelima atom $\\ce{F}$ di bidang ekuatorial membentuk cincin segilima beraturan datar dengan sudut:
     $$\\theta_{\\text{ek}} = \\frac{360^\\circ}{5} = \\mathbf{72^\\circ}$$
  2. **Sudut Aksial ($\\ce{F_{aks}-I-F_{ek}}$ & $\\ce{F_{aks}-I-F_{aks}}$):** Dua atom $\\ce{F}$ berada di kutub atas dan bawah bidang ekuatorial, membentuk sudut siku-siku **$90^\\circ$** terhadap cincin ekuatorial dan sudut **$180^\\circ$** satu sama lain.

**Langkah 2: Menghitung Domain Valensi Anion $\ce{XeF5-}$**

- Atom pusat $\\ce{Xe}$ (gas mulia golongan 18) memiliki 8 elektron valensi.
- Muatan ion $(-1)$ menyumbang $1$ elektron tambahan:
  $$\\text{Total elektron pada atom pusat} = 8 + 1 = 9\\, e^-$$
- 5 elektron digunakan untuk membentuk ikatan kovalen tunggal dengan 5 atom fluorin ($5\\text{ PEI}$).
- Sisa elektron non-ikatan:
  $$9 - 5 = 4\\, e^- \\implies \\mathbf{2\\text{ Pasang Elektron Bebas (2 PEB)}}$$
- Tipe VSEPR: **$AX_5E_2$** $\\implies$ Bilangan sterik $SN = 5 + 2 = \\mathbf{7}$.
- Geometri domain elektron kerangka dasar: **Pentagonal Bipiramidal**.

**Langkah 3: Penempatan PEB & Terbentuknya Geometri Pentagonal Planar**

Pada kerangka pentagonal bipiramidal, sudut antar-posisi ekuatorial sangat sempit, yakni hanya **$72^\\circ$** (jauh lebih sempit dibanding sudut $120^\\circ$ pada trigonal bipiramidal):
- Jika PEB diletakkan pada posisi ekuatorial: PEB akan mengalami tolakan $\\text{PEB-PEI}$ yang luar biasa kuat pada sudut sempit $72^\\circ$ dengan ligan tetangga ekuatorial, serta tolakan $90^\\circ$ dengan ligan aksial.
- Sebaliknya, jika kedua PEB diletakkan pada posisi **aksial** (satu di kutub utara dan satu di kutub selatan):
  1. Kedua PEB terpisah sejauh **$180^\\circ$** satu sama lain, sehingga gaya tolak $\\text{PEB-PEB}$ bernilai minimum mutlak.
  2. Setiap PEB hanya membentuk interaksi sudut $90^\\circ$ dengan 5 ikatan $\\ce{Xe-F}$ di ekuator (sama sekali tidak ada tolakan pada sudut sempit $72^\\circ$).
- **Bentuk Molekul Nyata:** Karena kedua posisi aksial ditempati oleh PEB trans, kelima atom fluorin tersusun pada satu bidang datar segilima beraturan di sekeliling atom $\\ce{Xe}$. Bentuk molekul aktual yang dihasilkan adalah **Pentagonal Planar (Segilima Datar)** dengan sudut ikatan ideal $\\mathbf{72^\\circ}$!

**Langkah 4: Evaluasi Momen Dipol Anion $\ce{XeF5-}$**

- Anion $\\ce{XeF5-}$ memiliki simetri spasial $D_{5h}$ yang sangat tinggi dengan bidang cermin horizontal ($\\sigma_h$) dan sumbu rotasi $C_5$.
- Kelima vektor momen dipol ikatan $\\ce{Xe-F}$ yang identik tersebar simetris $72^\\circ$ pada satu bidang datar, sehingga jumlah vektorik dipol ikatan saling meniadakan sempurna: $\\sum \\vec{\\mu}_{\\text{ikatan}} = 0$.
- Dua PEB aksial berada tepat berseberangan $180^\\circ$ dengan orientasi muatan yang saling berlawanan arah, sehingga $\\sum \\vec{\\mu}_{\\text{PEB}} = 0$.
- Resultan momen dipol total molekul:
  $$\\vec{\\mu}_{\\text{net}} = \\mathbf{0} \\implies \\text{Nonpolar}$$
Anion $\\ce{XeF5-}$ secara intrinsik bersifat **nonpolar**.`,
        keyFormulas: [
          { name: 'Sudut Ekuatorial Pentagonal', formula: '\\theta = \\frac{360^\\circ}{5} = 72^\\circ' },
        ],
      },
    ],
  },

  // ==========================================
  // TOPIK 3: STOIKIOMETRI & WUJUD ZAT
  // ==========================================
  {
  id: 3,
  topic_number: 3,
  title: 'Stoikiometri & Wujud Zat',
  slug: 'stoikiometri-wujud-zat',
  category: 'Stoikiometri Dasar',
  level: 'OSN-P',
  readTimeMinutes: 30,
  summary: 'Konsep mol lanjutan, pereaksi pembatas, persen hasil, persamaan gas ideal, gas nyata Van der Waals, efusi Graham, diagram fasa Clausius-Clapeyron, dan kristalografi sel satuan.',
  allTags: [
      'konsep-mol-massa-molar',
      'pereaksi-pembatas-persen-hasil',
      'stoikiometri-larutan-konsentrasi',
      'gas-ideal-teori-kinetik',
      'gas-nyata-van-der-waals',
      'hukum-efusi-difusi-graham',
      'diagram-fasa-clausius-clapeyron',
      'struktur-kristal-padat-unit-cell',
      'soal-campuran-gas',
      'soal-efusi-graham',
      'soal-van-der-waals',
      'soal-kristal-fcc',
      'soal-clausius-clapeyron',
      'stoikiometri',
      'konsep-mol',
      'pereaksi-pembatas',
      'gas-ideal',
      'van-der-waals',
      'spldv',
      'fraksi-mol',
      'pembakaran',
      'massa-molar',
      'tetapan-avogadro',
      'rumus-empiris-molekul',
      'persen-hasil',
      'penyetaraan-reaksi',
      'stoikiometri-larutan',
      'molaritas',
      'molalitas',
      'reaksi-pengendapan',
      'teori-kinetik-gas',
      'tekanan-parsial-dalton',
      'kecepatan-rms',
      'gas-nyata',
      'persamaan-van-der-waals',
      'faktor-kompresibilitas-z',
      'suhu-boyle',
      'hukum-graham',
      'efusi-gas',
      'difusi-gas',
      'maxwell-boltzmann',
      'diagram-fasa',
      'clausius-clapeyron',
      'titik-tripel',
      'entalpi-penguapan',
      'struktur-kristal',
      'sel-satuan-unit-cell',
      'kisi-bravais-fcc-bcc',
      'hukum-bragg',
      'soal-osk',
      'campuran-gas',
      'stoikiometri-pembakaran',
      'efusi-graham',
      'soal-osp',
      'soal-osn',
      'kristal-fcc',
      'densitas-kristal',
      'tekanan-uap-jenuh',
    ],
  prerequisites: [
    {
      tag: 'konsep-mol-massa-molar',
      tags: ["konsep-mol","massa-molar","tetapan-avogadro","rumus-empiris-molekul"],
      title: 'Prasyarat 1: Konsep Mol, Massa Molar, Avogadro, & Rumus Empiris/Molekul',
      summary: 'Fondasi kuantitatif konversi massa, jumlah partikel, persen massa unsur, dan rumus molekul pembakaran.',
      content: `Stoikiometri merupakan cabang kimia kuantitatif yang mempelajari hubungan massa dan jumlah partikel reaktan serta produk dalam reaksi kimia.

### 1. Definisi Mol & Tetapan Avogadro:
Satu mol didefinisikan sebagai jumlah zat yang mengandung partikel elementer (atom, molekul, ion, atau elektron) sebanyak atom yang terdapat dalam persis $12\\text{ gram}$ isotop karbon-12 ($\\ce{^{12}C}$).
Bilangan ini dinamakan **Tetapan Avogadro ($N_A$)**:
$$N_A = 6.02214 \\times 10^{23}\\text{ partikel/mol}$$

Hubungan dasar kuantitas mol ($n$):
$$n = \\frac{m}{M_r} = \\frac{N}{N_A}$$
di mana $m$ adalah massa zat (dalam gram), $M_r$ adalah massa molar (dalam $\\text{g/mol}$), dan $N$ adalah jumlah partikel.

---

### 2. Komposisi Persen Massa & Rumus Empiris vs Rumus Molekul:
1. **Persen Massa Unsur ($w_i$):**
   $$\\% w_i = \\frac{n_i \\cdot A_r(i)}{M_r(\\text{senyawa})} \\times 100\\%$$
2. **Rumus Empiris (RE):** Rumus perbandingan bilangan bulat terkecil antar-atom penyusun suatu senyawa.
3. **Rumus Molekul (RM):** Rumus kimia aktual yang menunjukkan jumlah atom nyata dalam satu molekul senyawa:
   $$\\text{Rumus Molekul} = (\\text{Rumus Empiris})_k \\implies M_r(\\text{RM}) = k \\times M_r(\\text{RE})$$
   di mana $k$ adalah bilangan bulat positif ($k = 1, 2, 3, \\dots$).

---

### 3. Analisis Pembakaran Hidrokarbon & Senyawa Organik ($\\ce{C_x H_y O_z}$):
Pada analisis elemental melalui pembakaran sempurna dengan gas oksigen berlebih:
$$\\ce{C_x H_y O_z} + \\left(x + \\frac{y}{4} - \\frac{z}{2}\\right)\\ce{O2} -> x\\ce{CO2} + \\frac{y}{2}\\ce{H2O}$$
- Seluruh atom karbon terkonversi menjadi gas $\\ce{CO2}$:
  $$m_{\\ce{C}} = m_{\\ce{CO2}} \\times \\frac{12.011}{44.01} \\implies n_{\\ce{C}} = \\frac{m_{\\ce{CO2}}}{44.01}$$
- Seluruh atom hidrogen terkonversi menjadi uap air $\\ce{H2O}$:
  $$m_{\\ce{H}} = m_{\\ce{H2O}} \\times \\frac{2.016}{18.015} \\implies n_{\\ce{H}} = 2 \\times \\frac{m_{\\ce{H2O}}}{18.015}$$
- Massa atom oksigen diperoleh dari selisih massa sampel awal:
  $$m_{\\ce{O}} = m_{\\text{sampel}} - (m_{\\ce{C}} + m_{\\ce{H}})$$
Perbandingan mol $n_{\\ce{C}} : n_{\\ce{H}} : n_{\\ce{O}}$ disederhanakan ke bilangan bulat terkecil untuk mendapatkan rumus empiris.`,
      keyFormulas: [
        { name: 'Rumus Konversi Mol', formula: 'n = \\frac{m}{M_r} = \\frac{N}{N_A}' },
        { name: 'Massa Molar Rumus Molekul', formula: 'M_r(\\text{RM}) = k \\cdot M_r(\\text{RE})' },
      ],
    },
    {
      tag: 'pereaksi-pembatas-persen-hasil',
      tags: ["pereaksi-pembatas","persen-hasil","penyetaraan-reaksi"],
      title: 'Prasyarat 2: Penyetaraan Reaksi, Pereaksi Pembatas, & Persen Hasil Reaksi',
      summary: 'Algoritma penentuan pereaksi pembatas, kuantifikasi reaktan sisa, dan efisiensi konversi hasil teoritis.',
      content: `Reaksi kimia harus memenuhi **Hukum Kekekalan Massa Lavoisier**, yakni jumlah atom setiap unsur di ruas kiri (reaktan) harus persis sama dengan ruas kanan (produk).

### 1. Algoritma Penentuan Pereaksi Pembatas (*Limiting Reactant*):
Dalam praktik laboratorium olimpiade, reaktan-reaktan jarang dicampurkan dalam rasio stoikiometri yang persis setara. Salah satu reaktan akan habis terlebih dahulu dan membatasi jumlah produk maksimum yang dapat terbentuk.

Untuk reaksi umum:
$$a\\ce{A} + b\\ce{B} -> c\\ce{C} + d\\ce{D}$$
Langkah sistematis:
1. Hitung jumlah mol awal masing-masing reaktan: $n_{\\ce{A}}$ dan $n_{\\ce{B}}$.
2. Bagi jumlah mol dengan koefisien reaksi masing-masing:
   $$\\text{Rasio A} = \\frac{n_{\\ce{A}}}{a} \\quad \\text{dan} \\quad \\text{Rasio B} = \\frac{n_{\\ce{B}}}{b}$$
3. **Pereaksi Pembatas:** Reaktan yang memiliki nilai rasio mol/koefisien **paling kecil**.
4. Jumlah mol produk yang terbentuk dan mol reaktan yang bereaksi sepenuhnya dihitung berdasarkan pereaksi pembatas tersebut.
5. **Mol Zat Sisa:**
   $$n_{\\text{sisa}} = n_{\\text{awal}} - n_{\\text{bereaksi}}$$

---

### 2. Konsep Hasil Teoritis, Hasil Aktual, & Persen Hasil:
- **Hasil Teoritis (*Theoretical Yield*):** Kuantitas produk maksimum yang dihitung secara stoikiometri dari pereaksi pembatas, dengan asumsi reaksi berlangsung sempurna ($100\\%$ efisiensi tanpa reaksi samping).
- **Hasil Aktual (*Actual Yield*):** Massa produk murni yang benar-benar diperoleh dari eksperimen nyata setelah proses isolasi dan pemurnian kristal/distilasi.
- **Persen Hasil (*Percent Yield*):**
   $$\\%\\text{ Hasil} = \\frac{\\text{Hasil Aktual (gram)}}{\\text{Hasil Teoritis (gram)}} \\times 100\\%$$

---

### 3. Kemurnian Sampel (*Sample Purity*):
Bila suatu bijih mineral atau reagen teknis tidak murni mengalami reaksi kuantitatif:
$$\\%\\text{ Kemurnian} = \\frac{m_{\\text{zat murni reaktif}}}{m_{\\text{sampel kotor}}} \\times 100\\%$$`,
      keyFormulas: [
        { name: 'Kriteria Pereaksi Pembatas', formula: '\\min\\left(\\frac{n_i}{\\nu_i}\\right)' },
        { name: 'Persen Hasil Reaksi', formula: '\\% \\text{Hasil} = \\frac{\\text{Hasil Aktual}}{\\text{Hasil Teoritis}} \\times 100\\%' },
      ],
    },
    {
      tag: 'stoikiometri-larutan-konsentrasi',
      tags: ["stoikiometri-larutan","molaritas","molalitas","reaksi-pengendapan"],
      title: 'Prasyarat 3: Stoikiometri Larutan, Satuan Konsentrasi, & Reaksi Pengendapan',
      summary: 'Konsep molaritas, molalitas, fraksi mol, pengenceran, dan analisis gravimetri kuantitatif.',
      content: `Sebagian besar reaksi kimia dalam olimpiade sains berlangsung dalam media larutan berair (*aqueous*).

### 1. Empat Satuan Konsentrasi Pokok:
1. **Molaritas ($M$):** Jumlah mol zat terlarut per liter larutan:
   $$M = \\frac{n}{V_{\\text{larutan (L)}}} = \\frac{m}{M_r} \\times \\frac{1000}{V_{\\text{larutan (mL)}}}$$
2. **Molalitas ($m$):** Jumlah mol zat terlarut per kilogram pelarut murni:
   $$m = \\frac{n}{m_{\\text{pelarut (kg)}}}$$
3. **Fraksi Mol ($X_i$):** Perbandingan jumlah mol suatu komponen terhadap jumlah mol total seluruh komponen dalam larutan:
   $$X_A = \\frac{n_A}{n_A + n_B + \\dots} \\implies \\sum X_i = 1$$
4. **Persen Massa (\\% b/b):**
   $$\\% w/w = \\frac{m_{\\text{terlarut}}}{m_{\\text{larutan total}}} \\times 100\\%$$
   *Hubungan Molaritas dengan Persen Massa dan Kerapatan Larutan ($\\rho$ dalam $\\text{g/mL}$):*
   $$M = \\frac{\\% w/w \\times \\rho \\times 10}{M_r}$$

---

### 2. Hukum Pengenceran:
Pada proses penambahan pelarut murni ke dalam larutan pekat, jumlah mol zat terlarut tidak berubah ($n_1 = n_2$):
$$V_1 \\cdot M_1 = V_2 \\cdot M_2$$

---

### 3. Stoikiometri Pengendapan & Gravimetri:
Analisis gravimetri mengukur massa endapan padat sukar larut yang terbentuk melalui reaksi metatesis ionik:
- Contoh: Penentuan kadar sulfat ($\\ce{SO4^2-}$) melalui pengendapan $\\ce{BaSO4(s)}$:
  $$\\ce{Ba^2+(aq) + SO4^2-(aq) -> BaSO4(s)} \\quad (M_r = 233.39\\text{ g/mol})$$
- Penentuan kadar klorida ($\\ce{Cl-}$) melalui pengendapan $\\ce{AgCl(s)}$:
  $$\\ce{Ag+(aq) + Cl-(aq) -> AgCl(s)} \\quad (M_r = 143.32\\text{ g/mol})$$
Massa analit dihitung menggunakan **Faktor Gravimetri (FG)**:
$$m_{\\text{analit}} = m_{\\text{endapan}} \\times \\text{FG} = m_{\\text{endapan}} \\times \\left(\\frac{a \\cdot A_r(\\text{analit})}{b \\cdot M_r(\\text{endapan})}\\right)$$`,
      keyFormulas: [
        { name: 'Molaritas Larutan', formula: 'M = \\frac{n}{V} = \\frac{\\% \\times \\rho \\times 10}{M_r}' },
        { name: 'Hukum Pengenceran', formula: 'V_1 M_1 = V_2 M_2' },
        { name: 'Faktor Gravimetri', formula: '\\text{FG} = \\frac{a \\cdot A_r(\\text{analit})}{b \\cdot M_r(\\text{endapan})}' },
      ],
    },
  ],
  core_concepts: [
    {
      tag: 'gas-ideal-teori-kinetik',
      tags: ["gas-ideal","teori-kinetik-gas","tekanan-parsial-dalton","kecepatan-rms"],
      title: 'Konsep Inti 1: Hukum Gas Ideal, Tekanan Parsial Dalton, & Teori Kinetik Gas',
      summary: 'Persamaan keadaan gas ideal, densitas gas, fraksi mol campuran gas, dan kecepatan kuantum termal molekul gas.',
      content: `Gas ideal merupakan model termodinamika di mana partikel gas dianggap sebagai partikel titik tanpa volume bermassa yang tidak saling berinteraksi (tidak ada gaya tarik maupun tolak).

### 1. Persamaan Keadaan Gas Ideal:
Gabungan dari Hukum Boyle ($P \\propto \\frac{1}{V}$), Hukum Charles ($V \\propto T$), dan Hukum Avogadro ($V \\propto n$):
$$PV = nRT = \\left(\\frac{m}{M}\\right)RT$$

Nilai tetapan gas universal ($R$):
- $R = 0.082057\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$
- $R = 8.31446\\text{ J}/(\\text{mol}\\cdot\\text{K}) = 8.31446\\text{ Pa}\\cdot\\text{m}^3/(\\text{mol}\\cdot\\text{K})$
- $R = 62.364\\text{ L}\\cdot\\text{torr}/(\\text{mol}\\cdot\\text{K})$

Kerapatan (densitas) gas ideal ($\\rho$ dalam $\\text{g/L}$):
$$\\rho = \\frac{m}{V} = \\frac{P \\cdot M}{RT} \\implies M = \\frac{\\rho R T}{P}$$

---

### 2. Hukum Tekanan Parsial John Dalton:
Pada campuran gas ideal yang tidak saling bereaksi di dalam wadah bervolume tetap:
$$P_{\\text{tot}} = \\sum_{i=1}^k P_i = P_1 + P_2 + P_3 + \\dots$$
Tekanan parsial komponen ke-$i$ dinyatakan oleh fraksi molnya:
$$P_i = X_i \\cdot P_{\\text{tot}} = \\left(\\frac{n_i}{n_{\\text{tot}}}\\right) P_{\\text{tot}}$$

> **Aplikasi Eksperimental Penampungan Gas di Atas Air:**  
> Ketika gas hasil reaksi ditampung melalui pemindahan air (*water displacement*), gas yang terkumpul jenuh oleh uap air. Tekanan gas kering sesungguhnya adalah:
> $$P_{\\text{gas kering}} = P_{\\text{total (barometer)}} - P_{\\ce{H2O(g)}}^\\ast(T)$$
> di mana $P_{\\ce{H2O(g)}}^\\ast(T)$ adalah tekanan uap jenuh air pada temperatur eksperimen.

---

### 3. Teori Kinetik Gas (KMT) & Spektrum Kecepatan Molekuler:
Teori kinetik gas menghubungkan sifat makroskopis (tekanan dan suhu) dengan dinamika mikroskopis gerak partikel:
$$P = \\frac{1}{3} \\frac{N m_p}{V} \\overline{v^2}$$
Energi kinetik translasi rata-rata per molekul gas hanya bergantung pada temperatur mutlak:
$$\\overline{E}_k = \\frac{1}{2} m_p \\overline{v^2} = \\frac{3}{2} k_B T$$
di mana $k_B = \\frac{R}{N_A} = 1.38065 \\times 10^{-23}\\text{ J/K}$ adalah tetapan Boltzmann.

Tiga Kecepatan Karakteristik Molekul Gas:
1. **Kecepatan Akar Kuadrat Rata-Rata (*Root-Mean-Square Speed*, $v_{\\text{rms}}$):**
   $$v_{\\text{rms}} = \\sqrt{\\overline{v^2}} = \\sqrt{\\frac{3RT}{M}}$$
2. **Kecepatan Rata-Rata Aritmatika ($\\overline{v}$):**
   $$\\overline{v} = \\sqrt{\\frac{8RT}{\\pi M}}$$
3. **Kecepatan Paling Mungkin (*Most Probable Speed*, $v_{\\text{mp}}$):**
   $$v_{\\text{mp}} = \\sqrt{\\frac{2RT}{M}}$$
Perbandingan nilai kecepatan: $v_{\\text{mp}} < \\overline{v} < v_{\\text{rms}}$ dengan rasio $1.000 : 1.128 : 1.225$.`,
      keyFormulas: [
        { name: 'Persamaan Gas Ideal', formula: 'PV = nRT = \\frac{m}{M}RT' },
        { name: 'Massa Molar dari Densitas Gas', formula: 'M = \\frac{\\rho R T}{P}' },
        { name: 'Tekanan Parsial Dalton', formula: 'P_i = X_i \\cdot P_{\\text{tot}}' },
        { name: 'Kecepatan RMS Molekul Gas', formula: 'v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}' },
      ],
    },
    {
      tag: 'gas-nyata-van-der-waals',
      tags: ["gas-nyata","persamaan-van-der-waals","faktor-kompresibilitas-z","suhu-boyle"],
      title: 'Konsep Inti 2: Gas Nyata Van der Waals, Faktor Kompresibilitas, & Temperatur Boyle',
      summary: 'Koreksi matematis gaya tarik coulombik antar-molekul dan volume eksklusi ruang partikel riil.',
      content: `Pada kondisi ekstrem (tekanan sangat tinggi dan temperatur sangat rendah mendekati titik kondensasi), gas riil menyimpang secara signifikan dari hukum gas ideal karena dua alasan mendasar:
1. Molekul gas nyata memiliki volume fisik tertentu (bukan partikel titik nol).
2. Terdapat gaya tarik-menarik elektrostatik antar-molekul (*intermolecular attractions / Van der Waals forces*).

---

### 1. Persamaan Keadaan Johannes Diderik van der Waals (1873):
Untuk $n$ mol gas nyata dalam wadah bervolume $V$:
$$\\left( P + \\frac{a n^2}{V^2} \\right)(V - nb) = nRT \\iff \\left( P + \\frac{a}{V_m^2} \\right)(V_m - b) = RT$$
di mana $V_m = \\frac{V}{n}$ adalah volume molar gas.

**Makna Fisik Parameter Van der Waals:**
- **Parameter $a$ (Koreksi Gaya Tarik Intermolekul):**
  Molekul-molekul gas saling tarik-menarik, sehingga tumbukan molekul pada dinding wadah menjadi lebih lembut dibanding gas ideal. Tekanan terukur ($P$) lebih kecil daripada tekanan ideal. Suku $\\frac{a n^2}{V^2}$ ditambahkan untuk mengoreksi reduksi tekanan ini. Satuan: $\\text{L}^2\\cdot\\text{atm}\\cdot\\text{mol}^{-2}$ (atau $\\text{Pa}\\cdot\\text{m}^6\\cdot\\text{mol}^{-2}$).
- **Parameter $b$ (Koreksi Volume Ruang Eksklusi):**
  Molekul menempati ruang nyata sehingga volume bebas yang tersedia untuk pergerakan gas adalah $(V - nb)$, bukan $V$. Volume eksklusi untuk bola keras berjejari $r$ bernilai 4 kali volume fisik aktual partikel:
  $$b = 4 N_A \\left(\\frac{4}{3}\\pi r^3\\right)$$
  Satuan: $\\text{L}\\cdot\\text{mol}^{-1}$ (atau $\\text{m}^3\\cdot\\text{mol}^{-1}$).

---

### 2. Faktor Kompresibilitas ($Z$):
Penyimpangan gas nyata diukur secara kuantitatif melalui faktor kompresibilitas:
$$Z = \\frac{P V_m}{RT} = \\frac{P V}{nRT}$$
- **Untuk Gas Ideal:** $Z = 1$ pada semua temperatur dan tekanan.
- **Pada Tekanan Moderat ($Z < 1$):** Gaya tarik antar-molekul mendominasi ($a$), menarik molekul lebih dekat sehingga volume molar gas nyata lebih kecil dari ideal ($V_m < V_m^{\\text{ideal}}$).
- **Pada Tekanan Sangat Tinggi ($Z > 1$):** Molekul terdorong sangat rapat sehingga gaya tolak volume eksklusi molekul ($b$) mendominasi ($V_m > V_m^{\\text{ideal}}$). Gas menjadi sangat sukar dimampatkan.

---

### 3. Temperatur Boyle ($T_B$):
Temperatur khusus di mana gaya tarik intermolekul dan efek volume eksklusi saling meniadakan secara tepat pada limit tekanan mendekati nol, sehingga gas nyata mematuhi hukum gas ideal sepanjang rentang tekanan yang cukup lebar:
$$\\lim_{P \\to 0} \\left(\\frac{\\partial Z}{\\partial P}\\right)_T = 0 \\implies T_B = \\frac{a}{R \\cdot b}$$`,
      keyFormulas: [
        { name: 'Persamaan Gas Van der Waals', formula: '\\left(P + \\frac{a n^2}{V^2}\\right)(V - nb) = nRT' },
        { name: 'Faktor Kompresibilitas Z', formula: 'Z = \\frac{P V_m}{RT}' },
        { name: 'Temperatur Boyle', formula: 'T_B = \\frac{a}{R \\cdot b}' },
      ],
    },
    {
      tag: 'hukum-efusi-difusi-graham',
      tags: ["hukum-graham","efusi-gas","difusi-gas","maxwell-boltzmann"],
      title: 'Konsep Inti 3: Hukum Difusi & Efusi Graham serta Distribusi Maxwell-Boltzmann',
      summary: 'Rasio kinetik pelolosan molekul gas melalui orifis mikro, pemisahan isotopik, dan kurva probabilitas termal.',
      content: `Pergerakan molekul gas diatur oleh energi kinetik dan massa partikelnya. Dua fenomena kinetik yang sering diuji dalam olimpiade adalah difusi dan efusi.

### 1. Perbedaan Mendasar Difusi vs Efusi:
- **Difusi:** Proses perpindahan spontan molekul gas dari area konsentrasi tinggi ke area konsentrasi rendah melalui percampuran dengan molekul gas lain (terjadi tumbukan antar-partikel yang sangat sering).
- **Efusi:** Proses pelolosan molekul gas individual dari wadah bertekanan ke ruang hampa (*vacuum*) melalui sebuah lubang jarum / celah mikro (*pinhole orifice*) yang diameternya jauh lebih kecil daripada lintasan bebas rata-rata (*mean free path*) molekul gas, sehingga tidak terjadi tumbukan antar-molekul pada lubang tersebut.

---

### 2. Hukum Efusi Thomas Graham (1829):
Laju efusi suatu gas berbanding terbalik dengan akar kuadrat massa molarnya (atau kerapatannya pada suhu dan tekanan yang sama):
$$r \\propto \\frac{1}{\\sqrt{M}} \\propto \\frac{1}{\\sqrt{\\rho}}$$

Untuk perbandingan dua gas (Gas 1 dan Gas 2) pada kondisi $T$ dan $P$ identik:
$$\\frac{r_1}{r_2} = \\sqrt{\\frac{M_2}{M_1}} = \\sqrt{\\frac{\\rho_2}{\\rho_1}} = \\frac{t_2}{t_1} = \\frac{v_1}{v_2}$$
di mana:
- $r_1, r_2$ = laju efusi (dalam $\\text{mol/s}$ atau $\\text{mL/s}$)
- $t_1, t_2$ = waktu yang dibutuhkan untuk mengevakuasi volume gas yang sama (dalam detik)
- $M_1, M_2$ = massa molar masing-masing gas (dalam $\\text{g/mol}$)

> **Aplikasi Strategis Pemisahan Isotop Nuklir:**  
> Prinsip efusi Graham digunakan pada Proyek Manhattan untuk memisahkan isotop fisil $\\ce{^{235}U}$ dari $\\ce{^{238}U}$ melalui efusi berulang gas uranium heksafluorida ($\\ce{UF6}$):
> $$\\frac{r(\\ce{^{235}UF6})}{r(\\ce{^{238}UF6})} = \\sqrt{\\frac{238 + 6(19)}{235 + 6(19)}} = \\sqrt{\\frac{352}{349}} \\approx 1.0043$$
> Pengayaan sebesar $0.43\\%$ per tahap diulang dalam ribuan kaskade membran berpori untuk menghasilkan bahan bakar reaktor nuklir.

---

### 3. Distribusi Kecepatan Maxwell-Boltzmann:
Fungsi kerapatan probabilitas fraksi molekul yang memiliki kecepatan antara $v$ dan $v + dv$:
$$f(v) = 4\\pi \\left( \\frac{M}{2\\pi RT} \\right)^{3/2} v^2 \\exp\\left( -\\frac{M v^2}{2RT} \\right)$$
Karakteristik kurva:
1. **Pengaruh Temperatur ($T$):** Semakin tinggi suhu gas, kurva melebar dan mendatar ke arah kanan (fraksi molekul berkecepatan tinggi bertambah).
2. **Pengaruh Massa Molar ($M$):** Gas yang lebih ringan (misal $\\ce{He}$ atau $\\ce{H2}$) memiliki kurva yang jauh lebih lebar dan bergeser ke kanan dibanding gas berat (seperti $\\ce{N2}$ atau $\\ce{Ar}$) pada suhu yang sama.`,
      keyFormulas: [
        { name: 'Hukum Efusi Graham', formula: '\\frac{r_1}{r_2} = \\sqrt{\\frac{M_2}{M_1}} = \\frac{t_2}{t_1}' },
        { name: 'Faktor Pengayaan Efusi', formula: '\\alpha = \\sqrt{\\frac{M_{\\text{berat}}}{M_{\\text{ringan}}}}' },
      ],
    },
    {
      tag: 'diagram-fasa-clausius-clapeyron',
      tags: ["diagram-fasa","clausius-clapeyron","titik-tripel","entalpi-penguapan"],
      title: 'Konsep Inti 4: Wujud Zat, Diagram Fasa P-T, & Persamaan Clausius-Clapeyron',
      summary: 'Termodinamika transisi fasa materi, titik tripel, titik kritis, anomali kurva peleburan air, dan entalpi penguapan.',
      content: `Wujud fisik materi (padat, cair, atau gas) ditentukan oleh kompetisi antara energi kinetik termal partikel (yang cenderung mencerai-beraikan molekul) dan gaya tarik intermolekul (yang cenderung merapatkan molekul).

### 1. Diagram Fasa Tekanan-Temperatur ($P-T$):
Diagram fasa memetakan keadaan fasa stabil zat murni pada berbagai kombinasi tekanan ($P$) dan temperatur ($T$):
- **Garis Sublimasi:** Batas kesetimbangan padat $\\rightleftharpoons$ gas.
- **Garis Peleburan (*Melting Line*):** Batas kesetimbangan padat $\\rightleftharpoons$ cair.
- **Garis Penguapan (*Vaporization Line*):** Batas kesetimbangan cair $\\rightleftharpoons$ gas.
- **Titik Tripel ($T_{\\text{tp}}$):** Titik perpotongan unik ketiga garis kesetimbangan di mana ketiga fasa padat, cair, dan gas berada dalam kesetimbangan dinamis simultan ($F = 0$ menurut Aturan Fasa Gibbs $F = C - P + 2$). Untuk air: $T_{\\text{tp}} = 0.01^\\circ\\text{C}$ ($273.16\\text{ K}$) pada $P = 0.00603\\text{ atm}$ ($4.58\\text{ mmHg}$).
- **Titik Kritis ($T_c, P_c$):** Ujung atas kurva kesetimbangan cair-gas. Di atas titik kritis, densitas cairan dan gas menjadi identik sehingga antarmuka fasa lenyap membentuk **Fluida Superkritis**.

---

### 2. Anomali Kemiringan Kurva Peleburan Air vs Zat Normal:
Persamaan Clapeyron untuk kemiringan kurva kesetimbangan:
$$\\frac{dP}{dT} = \\frac{\\Delta H_{\\text{trans}}}{T \\cdot \\Delta V_{\\text{trans}}}$$
- **Pada Kebanyakan Zat Murni (misal $\\ce{CO2}$):** Fasa padat lebih rapat dibanding fasa cair ($\\Delta V_{\\text{fus}} = V_{\\text{cair}} - V_{\\text{padat}} > 0$). Kemiringan kurva peleburan bergradien **positif** (miring ke kanan). Peningkatan tekanan menaikkan titik leleh zat.
- **Pada Air ($\\ce{H2O}$):** Es padat memiliki struktur kisi kristal heksagonal berongga terbuka akibat ikatan hidrogen terarah, sehingga densitas es padat ($0.917\\text{ g/mL}$) lebih kecil daripada air cair ($1.000\\text{ g/mL}$). Akibatnya, $\\Delta V_{\\text{fus}} < 0$, menghasilkan kemiringan kurva peleburan bergradien **negatif** (miring ke kiri)! Peningkatan tekanan menyebabkan es meleleh pada suhu di bawah $0^\\circ\\text{C}$.

---

### 3. Persamaan Rudolf Clausius & Émile Clapeyron:
Untuk transisi kesetimbangan cair-uap atau padat-uap, dengan mengasumsikan uap berperilaku sebagai gas ideal ($V_m(\\text{gas}) \\gg V_m(\\text{cair})$) dan entalpi penguapan $\\Delta H_{\\text{vap}}$ konstan:
$$\\frac{d(\\ln P)}{dT} = \\frac{\\Delta H_{\\text{vap}}}{R T^2}$$

Bentuk integral dua titik yang sangat populer dalam soal olimpiade:
$$\\ln\\left(\\frac{P_2}{P_1}\\right) = -\\frac{\\Delta H_{\\text{vap}}}{R} \\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right) = \\frac{\\Delta H_{\\text{vap}}}{R} \\left(\\frac{T_2 - T_1}{T_1 \\cdot T_2}\\right)$$
di mana temperatur wajib dinyatakan dalam skala mutlak Kelvin (K) dan $R = 8.314\\text{ J}/(\\text{mol}\\cdot\\text{K})$.`,
      keyFormulas: [
        { name: 'Kemiringan Clapeyron', formula: '\\frac{dP}{dT} = \\frac{\\Delta H}{T \\Delta V}' },
        { name: 'Persamaan Clausius-Clapeyron Dua Titik', formula: '\\ln\\left(\\frac{P_2}{P_1}\\right) = -\\frac{\\Delta H_{\\text{vap}}}{R} \\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)' },
      ],
    },
    {
      tag: 'struktur-kristal-padat-unit-cell',
      tags: ["struktur-kristal","sel-satuan-unit-cell","kisi-bravais-fcc-bcc","hukum-bragg"],
      title: 'Konsep Inti 5: Struktur Kristal Zat Padat, Sel Satuan (Unit Cell), & Kisi Bravais',
      summary: 'Geometri kisi kristal logam SC, BCC, FCC, densitas teoritis kristalografi, dan faktor penumpukan atom (APF).',
      content: `Padatan kristalin tersusun dari partikel-partikel (atom, ion, atau molekul) yang berulang secara periodik dalam ruang 3 dimensi membentuk kisi kristal (*crystal lattice*). Unit terkecil yang merepresentasikan simetri keseluruhan kristal dinamakan **Sel Satuan (*Unit Cell*)**.

### 1. Tiga Tipe Sel Satuan Kubus Kristal Logam:

| Karakteristik Kristal | Kubus Sederhana (SC / Primitif) | Kubus Berpusat Badan (BCC) | Kubus Berpusat Muka (FCC / CCP) |
| :--- | :---: | :---: | :---: |
| **Posisi Atom** | 8 di sudut | 8 di sudut + 1 di pusat badan | 8 di sudut + 6 di pusat muka |
| **Jumlah Atom Netto per Sel Satuan ($n$)** | $8 \\times \\frac{1}{8} = \\mathbf{1}$ | $\\left(8 \\times \\frac{1}{8}\\right) + 1 = \\mathbf{2}$ | $\\left(8 \\times \\frac{1}{8}\\right) + \\left(6 \\times \\frac{1}{2}\\right) = \\mathbf{4}$ |
| **Bilangan Koordinasi (CN)** | $6$ | $8$ | $12$ (Penumpukan Terpadat) |
| **Hubungan Rusuk ($a$) dan Jari-Jari ($r$)** | $a = 2r$ | $a\\sqrt{3} = 4r \\implies a = \\frac{4r}{\\sqrt{3}}$ | $a\\sqrt{2} = 4r \\implies a = 2r\\sqrt{2}$ |
| **Faktor Penumpukan Atom (APF)** | $\\frac{\\pi}{6} \\approx \\mathbf{52.4\\%}$ | $\\frac{\\pi\\sqrt{3}}{8} \\approx \\mathbf{68.0\\%}$ | $\\frac{\\pi\\sqrt{2}}{6} \\approx \\mathbf{74.0\\%}$ |
| **Contoh Logam** | Polonium ($\\ce{Po}$) | $\\ce{Fe}(\\alpha), \\ce{Cr}, \\ce{Na}, \\ce{W}$ | $\\ce{Cu}, \\ce{Ag}, \\ce{Au}, \\ce{Al}, \\ce{Ni}$ |

---

### 2. Perhitungan Densitas Teoritis Kristal ($\\rho$):
Kerapatan massa kristal makroskopis identik dengan kerapatan satu sel satuan mikroskopis:
$$\\rho = \\frac{m_{\\text{sel satuan}}}{V_{\\text{sel satuan}}} = \\frac{n \\cdot M}{N_A \\cdot V_{\\text{cell}}} = \\frac{n \\cdot M}{N_A \\cdot a^3}$$
di mana:
- $n$ = jumlah atom netto dalam satu sel satuan ($1$ untuk SC, $2$ untuk BCC, $4$ untuk FCC)
- $M$ = massa molar zat (dalam $\\text{g/mol}$)
- $N_A$ = tetapan Avogadro ($6.022 \\times 10^{23}\\text{ mol}^{-1}$)
- $a$ = panjang rusuk sel satuan kubus (dalam $\\text{cm}$, dengan $1\\text{ pm} = 10^{-10}\\text{ cm}$ atau $1\\text{ \\AA} = 10^{-8}\\text{ cm}$)
- $\\rho$ = densitas kristal (dalam $\\text{g/cm}^3$)

---

### 3. Geometri Kisi Kristal Ionik Penting:
1. **Tipe $\\ce{NaCl}$ (Halit):**
   - Anion $\\ce{Cl-}$ membentuk kisi FCC ($n = 4$).
   - Kation $\\ce{Na+}$ menempati seluruh lubang oktahedral (1 di pusat badan $+ 12$ di rusuk $\\times \\frac{1}{4} = 4$).
   - Rasio stoikiometri $4:4 \\implies$ rumus $\\ce{NaCl}$. Bilangan koordinasi kation dan anion $= 6:6$.
   - Hubungan jarak antar-inti: $a = 2(r_+ + r_-)$.
2. **Tipe $\\ce{CsCl}$:**
   - Anion $\\ce{Cl-}$ berada di 8 sudut kubus primitif ($n=1$), kation $\\ce{Cs+}$ di pusat badan ($n=1$).
   - Bilangan koordinasi $= 8:8$.
   - Hubungan jarak: $a\\sqrt{3} = 2(r_+ + r_-)$.
3. **Tipe Zink Blende ($\\ce{ZnS}$):**
   - Anion $\\ce{S^2-}$ membentuk kisi FCC ($n=4$).
   - Kation $\\ce{Zn^2+}$ menempati separuh ($4$ dari $8$) lubang tetrahedral. Bilangan koordinasi $= 4:4$.`,
      keyFormulas: [
        { name: 'Densitas Sel Satuan Kristal', formula: '\\rho = \\frac{n \\cdot M}{N_A \\cdot a^3}' },
        { name: 'Hubungan Kisi FCC', formula: 'a\\sqrt{2} = 4r \\implies a = 2\\sqrt{2}r' },
        { name: 'Hubungan Kisi BCC', formula: 'a\\sqrt{3} = 4r \\implies a = \\frac{4r}{\\sqrt{3}}' },
        { name: 'Atomic Packing Factor', formula: '\\text{APF} = \\frac{n \\cdot \\frac{4}{3}\\pi r^3}{a^3}' },
      ],
    },
  ],
  worked_examples: [
    {
      tag: 'soal-campuran-gas',
      tags: ["soal-osk","campuran-gas","stoikiometri-pembakaran"],
      title: 'Contoh Soal OSK 1: Analisis Kuantitatif Pembakaran Campuran Metana & Propana via SPLDV Stoikiometri',
      summary: 'Penyusunan sistem persamaan linear dua variabel (SPLDV) untuk memecahkan fraksi mol dan persen volume campuran gas hidrokarbon dari data tekanan bejana dan massa endapan barium karbonat.',
      content: `### Masalah Soal:
Sebuah wadah tertutup bervolume $10.0\text{ L}$ pada temperatur $25.0^\circ\text{C}$ ($298.15\text{ K}$) berisi campuran gas metana ($\ce{CH4}$) dan propana ($\ce{C3H8}$). Tekanan total campuran gas tersebut terukur sebesar $2.45\text{ atm}$.

Campuran gas tersebut kemudian dibakar sempurna dengan gas oksigen ($\ce{O2}$) berlebih sesuai reaksi pembakaran hidrokarbon. Setelah pembakaran selesai dan suhu sistem dikembalikan ke $25.0^\circ\text{C}$, seluruh uap air mengembun sempurna. Seluruh gas karbon dioksida ($\ce{CO2}$) yang dihasilkan dialirkan ke dalam larutan barium hidroksida ($\ce{Ba(OH)2}$) berlebih hingga terbentuk endapan putih barium karbonat ($\ce{BaCO3}$) seberat $394.7\text{ g}$.

*(Diketahui: $R = 0.08206\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$, $A_r\\text{ Ba} = 137.33$, $A_r\\text{ C} = 12.01$, $A_r\\text{ O} = 16.00$, sehingga $M_r(\\ce{BaCO3}) = 197.34\\text{ g/mol}$)*.

**Pertanyaan:**
1. Tuliskan persamaan reaksi setara untuk pembakaran metana, pembakaran propana, dan reaksi pembentukan endapan barium karbonat!
2. Hitung jumlah mol total campuran gas metana dan propana mula-mula dalam bejana dengan menerapkan hukum gas ideal!
3. Hitung jumlah mol gas $\\ce{CO2}$ yang terbentuk berdasarkan massa endapan $\\ce{BaCO3}$!
4. Susunlah sistem persamaan linear dua variabel (SPLDV) neraca mol dan neraca atom karbon, lalu hitung mol masing-masing hidrokarbon serta fraksi mol gas metana ($\\ce{CH4}$)!

---

### Pembahasan & Langkah Kunci:

**Langkah 1: Menuliskan Persamaan Reaksi Setara dan Rasio Stoikiometri**  
Persamaan reaksi pembakaran sempurna hidrokarbon:
$$\\ce{CH4(g) + 2 O2(g) -> CO2(g) + 2 H2O(l)}$$
$$\\ce{C3H8(g) + 5 O2(g) -> 3 CO2(g) + 4 H2O(l)}$$

Reaksi pengendapan karbonat oleh barium hidroksida:
$$\\ce{CO2(g) + Ba(OH)2(aq) -> BaCO3(s) + H2O(l)}$$
Dari koefisien reaksi pengendapan, rasio mol $\\ce{CO2}$ terhadap endapan $\\ce{BaCO3}$ adalah $1 : 1$:
$$n_{\\ce{CO2}} = n_{\\ce{BaCO3}}$$

**Langkah 2: Menghitung Mol Campuran Gas Awal Menggunakan Hukum Gas Ideal**  
Gunakan persamaan keadaan gas ideal pada wadah mula-mula sebelum pembakaran:
$$P_{\\text{tot}} V = n_{\\text{tot}} R T$$
$$n_{\\text{tot}} = \\frac{P_{\\text{tot}} V}{R T} = \\frac{2.45\\text{ atm} \\times 10.0\\text{ L}}{0.08206\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K}) \\times 298.15\\text{ K}} = \\frac{24.5}{24.466} = 1.0014\\text{ mol} \\approx 1.00\\text{ mol}$$

**Langkah 3: Menghitung Mol Gas $\\ce{CO2}$ dari Analisis Gravimetri Endapan $\\ce{BaCO3}$**  
Kuantitas mol endapan $\\ce{BaCO3}$ yang tertimbang:
$$n_{\\ce{BaCO3}} = \\frac{m_{\\ce{BaCO3}}}{M_r(\\ce{BaCO3})} = \\frac{394.7\\text{ g}}{197.34\\text{ g/mol}} = 2.000\\text{ mol}$$
Karena $n_{\\ce{CO2}} = n_{\\ce{BaCO3}}$, maka jumlah mol total gas $\\ce{CO2}$ yang dihasilkan dari pembakaran campuran adalah:
$$n_{\\ce{CO2}} = 2.00\\text{ mol}$$

**Langkah 4: Penyusunan SPLDV Stoikiometri & Penentuan Fraksi Mol Metana**  
Misalkan:
- $x$ = jumlah mol gas metana ($\\ce{CH4}$) dalam campuran awal.
- $y$ = jumlah mol gas propana ($\\ce{C3H8}$) dalam campuran awal.

1. **Persamaan 1 (Neraca Mol Campuran Gas Awal):**
   $$x + y = n_{\\text{tot}} = 1.00\\text{ mol}$$

2. **Persamaan 2 (Neraca Mol Atom Karbon / $\\ce{CO2}$ Hasil Reaksi):**
   Setiap $1\\text{ mol } \\ce{CH4}$ menghasilkan $1\\text{ mol } \\ce{CO2}$, dan setiap $1\\text{ mol } \\ce{C3H8}$ menghasilkan $3\\text{ mol } \\ce{CO2}$:
   $$1x + 3y = n_{\\ce{CO2}} = 2.00\\text{ mol}$$

Selesaikan sistem persamaan dengan metode eliminasi:
$$\\begin{cases}
x + 3y = 2.00 \\\\
x + y = 1.00
\\end{cases}$$
Kurangkan persamaan pertama dengan persamaan kedua:
$$(x + 3y) - (x + y) = 2.00 - 1.00 \\implies 2y = 1.00 \\implies y = 0.50\\text{ mol } (\\ce{C3H8})$$

Substitusikan nilai $y$ ke Persamaan 1:
$$x = 1.00 - 0.50 = 0.50\\text{ mol } (\\ce{CH4})$$

Hitung fraksi mol gas metana ($X_{\\ce{CH4}}$):
$$X_{\\ce{CH4}} = \\frac{n_{\\ce{CH4}}}{n_{\\text{tot}}} = \\frac{0.50\\text{ mol}}{1.00\\text{ mol}} = 0.50 \\quad (50.0\\%)$$

**Kesimpulan Evaluator Juri:**  
Campuran awal tersusun atas $0.50\\text{ mol } \\ce{CH4}$ dan $0.50\\text{ mol } \\ce{C3H8}$. Fraksi mol gas metana adalah $0.50$ (atau $50.0\\%$ persen volume).`,
      keyFormulas: [
        { name: 'Mol Gas Ideal', formula: 'n_{\\text{tot}} = \\frac{PV}{RT}' },
        { name: 'Neraca Karbon Campuran', formula: 'n_{\\ce{CO2}} = 1\\cdot n_{\\ce{CH4}} + 3\\cdot n_{\\ce{C3H8}}' },
        { name: 'Fraksi Mol', formula: 'X_i = \\frac{n_i}{n_{\\text{tot}}}' },
      ],
    },
    {
      tag: 'soal-efusi-graham',
      tags: ["soal-osk","efusi-graham","hukum-graham"],
      title: 'Contoh Soal OSK 2: Penentuan Massa Molar Hidrokarbon Misterius via Hukum Efusi Graham & Distribusi Kinetik',
      summary: 'Aplikasi hukum efusi Graham untuk menentukan massa molar, rumus molekul alkana, serta kecepatan termal rms molekul gas.',
      content: `### Masalah Soal:
Suatu gas hidrokarbon murni tak dikenal ($X$) bervolume $150.0\\text{ mL}$ membutuhkan waktu $75.6\\text{ detik}$ untuk berefusi sempurna melalui suatu orifis mikro ke dalam ruang hampa. Pada kondisi temperatur dan tekanan yang persis sama, volume yang sama ($150.0\\text{ mL}$) gas oksigen murni ($\\ce{O2}$, $M_r = 32.00\\text{ g/mol}$) memerlukan waktu $56.1\\text{ detik}$ untuk berefusi melalui lubang mikro yang identik tersebut.

Analisis pembakaran terhadap $1.000\\text{ g}$ sampel hidrokarbon $X$ menghasilkan $3.029\\text{ g } \\ce{CO2}$ ($M_r = 44.01\\text{ g/mol}$) dan $1.550\\text{ g } \\ce{H2O}$ ($M_r = 18.02\\text{ g/mol}$).

**Pertanyaan:**
1. Tentukan massa molar ($M_r$) gas hidrokarbon $X$ berdasarkan data efusi Hukum Graham!
2. Tentukan rumus empiris dan rumus molekul dari senyawa hidrokarbon $X$!
3. Hitung kecepatan akar kuadrat rata-rata ($v_{\\text{rms}}$) molekul gas $X$ pada temperatur ruang $27.0^\\circ\\text{C}$ ($300.15\\text{ K}$)! ($R = 8.314\\text{ J}/(\\text{mol}\\cdot\\text{K})$).
4. Jelaskan secara teoritis mengapa waktu efusi berbanding lurus dengan akar massa molar ($t \\propto \\sqrt{M}$), sedangkan laju efusi berbanding terbalik ($r \\propto 1/\\sqrt{M}$)!

---

### Pembahasan & Langkah Kunci:

**Langkah 1: Menghitung Massa Molar Senyawa $X$ dari Rasio Waktu Efusi Graham**  
Laju efusi ($r$) berbanding terbalik dengan waktu efusi ($t$) untuk volume gas yang sama ($r = \\frac{V}{t}$). Berdasarkan Hukum Efusi Graham:
$$\\frac{r_1}{r_2} = \\frac{V/t_1}{V/t_2} = \\frac{t_2}{t_1} = \\sqrt{\\frac{M_2}{M_1}}$$

Terapkan untuk gas $X$ dan gas $\\ce{O2}$:
$$\\frac{t_X}{t_{\\ce{O2}}} = \\sqrt{\\frac{M_X}{M_{\\ce{O2}}}}$$
$$\\frac{75.6\\text{ s}}{56.1\\text{ s}} = 1.3476 = \\sqrt{\\frac{M_X}{32.00\\text{ g/mol}}}$$

Kuadratkan kedua ruas persamaan:
$$(1.3476)^2 = 1.8160 = \\frac{M_X}{32.00}$$
$$M_X = 1.8160 \\times 32.00\\text{ g/mol} = 58.11\\text{ g/mol} \\approx 58.1\\text{ g/mol}$$

**Langkah 2: Menentukan Rumus Empiris dan Rumus Molekul Senyawa $X$**  
Hitung mol atom $\\ce{C}$ dan atom $\\ce{H}$ dalam $1.000\\text{ g}$ sampel:
- Mol atom $\\ce{C}$:
  $$n_{\\ce{C}} = n_{\\ce{CO2}} = \\frac{3.029\\text{ g}}{44.01\\text{ g/mol}} = 0.06882\\text{ mol}$$
  $$m_{\\ce{C}} = 0.06882\\text{ mol} \\times 12.011\\text{ g/mol} = 0.8266\\text{ g}$$
- Mol atom $\\ce{H}$:
  $$n_{\\ce{H}} = 2 \\times n_{\\ce{H2O}} = 2 \\times \\frac{1.550\\text{ g}}{18.02\\text{ g/mol}} = 0.1720\\text{ mol}$$
  $$m_{\\ce{H}} = 0.1720\\text{ mol} \\times 1.008\\text{ g/mol} = 0.1734\\text{ g}$$

Verifikasi massa sampel hidrokarbon:
$$m_{\\ce{C}} + m_{\\ce{H}} = 0.8266 + 0.1734 = 1.000\\text{ g}$$
(Sampel murni hidrokarbon tanpa oksigen).

Perbandingan mol atom $\\ce{C} : \\ce{H}$:
$$\\frac{n_{\\ce{C}}}{n_{\\ce{H}}} = \\frac{0.06882}{0.1720} = \\frac{1}{2.499} \\approx \\frac{2}{5}$$
Rumus empiris senyawa adalah $(\\ce{C2H5})_k$ dengan massa molar empiris:
$$M_r(\\ce{C2H5}) = 2(12.011) + 5(1.008) = 29.06\\text{ g/mol}$$

Tentukan faktor pengali kelipatan ($k$):
$$k = \\frac{M_r(\\text{senyawa})}{M_r(\\text{RE})} = \\frac{58.11\\text{ g/mol}}{29.06\\text{ g/mol}} = 2.00 \\implies k = 2$$
Maka rumus molekul gas $X$ adalah:
$$(\\ce{C2H5})_2 = \\ce{C4H10} \\quad (\\text{Butana / Isobutana})$$

**Langkah 3: Menghitung Kecepatan RMS ($v_{\\text{rms}}$) pada Suhu $300.15\\text{ K}$**  
Gunakan persamaan Teori Kinetik Gas untuk kecepatan akar kuadrat rata-rata:
$$v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}$$
*Catatan Penting Satuan SI:* Massa molar $M$ wajib dinyatakan dalam $\\text{kg/mol}$ agar konsisten dengan satuan tetapan gas $R = 8.314\\text{ J}/(\\text{mol}\\cdot\\text{K}) = 8.314\\text{ kg}\\cdot\\text{m}^2\\cdot\\text{s}^{-2}/(\\text{mol}\\cdot\\text{K})$:
$$M = 58.11\\text{ g/mol} = 0.05811\\text{ kg/mol}$$

$$v_{\\text{rms}} = \\sqrt{\\frac{3 \\times 8.314 \\times 300.15}{0.05811}} = \\sqrt{\\frac{7486.34}{0.05811}} = \\sqrt{128830.5} = 358.9\\text{ m/s}$$

**Langkah 4: Rasionalisasi Fisis Hubungan Laju dan Waktu Efusi**  
Laju efusi didefinisikan sebagai jumlah molekul yang meloloskan diri per satuan waktu ($r = \\frac{dN}{dt}$). Karena partikel dengan massa molar lebih besar bergerak dengan kecepatan rata-rata yang lebih lambat ($v \\propto 1/\\sqrt{M}$), frekuensi tumbukan molekul pada lubang mikro menjadi lebih jarang, sehingga laju efusi lebih kecil ($r \\propto 1/\\sqrt{M}$). Akibatnya, waktu ($t$) yang dibutuhkan untuk mengosongkan sejumlah volume gas yang sama menjadi berbanding terbalik dengan laju efusi ($t = \\frac{V}{r} \\propto \\frac{1}{1/\\sqrt{M}} = \\sqrt{M}$).

**Kesimpulan Evaluator Juri:**  
Gas $X$ memiliki massa molar $58.11\\text{ g/mol}$ dengan rumus empiris $\\ce{C2H5}$ dan rumus molekul butana ($\\ce{C4H10}$). Kecepatan termal $v_{\\text{rms}}$ partikel butana pada $300.15\\text{ K}$ adalah $358.9\\text{ m/s}$.`,
      keyFormulas: [
        { name: 'Hukum Efusi Graham (Waktu)', formula: '\\frac{t_1}{t_2} = \\sqrt{\\frac{M_1}{M_2}}' },
        { name: 'Kecepatan Termal RMS', formula: 'v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}' },
        { name: 'Faktor Kelipatan Rumus Molekul', formula: 'k = \\frac{M_r(\\text{RM})}{M_r(\\text{RE})}' },
      ],
    },
    {
      tag: 'soal-van-der-waals',
      tags: ["soal-osp","gas-nyata","persamaan-van-der-waals"],
      title: 'Contoh Soal OSP 3: Penyimpangan Gas Nyata Karbon Dioksida & Evaluasi Kompresibilitas Van der Waals',
      summary: 'Perbandingan komputasi tekanan gas riil CO2 menggunakan persamaan Van der Waals vs Hukum Gas Ideal pada kondisi kompresi tinggi serta interpretasi faktor kompresibilitas Z.',
      content: `### Masalah Soal:
Sebanyak $10.0\\text{ mol}$ gas karbon dioksida ($\\ce{CO2}$) dimampatkan ke dalam sebuah tabung baja bertekanan bervolume $2.00\\text{ L}$ pada temperatur kerja $47.0^\\circ\\text{C}$ ($320.15\\text{ K}$).

Parameter Van der Waals untuk gas $\\ce{CO2}$:
- $a = 3.592\\text{ L}^2\\cdot\\text{atm}\\cdot\\text{mol}^{-2}$
- $b = 0.0427\\text{ L}\\cdot\\text{mol}^{-1}$
- $R = 0.082057\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$

**Pertanyaan:**
1. Hitung tekanan gas $\\ce{CO2}$ dalam bejana jika gas tersebut diasumsikan berperilaku ideal ($P_{\\text{ideal}}$)!
2. Hitung tekanan sesungguhnya dari gas $\\ce{CO2}$ dengan menggunakan Persamaan Keadaan Van der Waals ($P_{\\text{vdW}}$)!
3. Tentukan nilai faktor kompresibilitas ($Z$) gas pada kondisi tersebut dan jelaskan gaya intermolekuler apa yang mendominasi penyimpangan gas!
4. Tentukan temperatur Boyle ($T_B$) untuk gas $\\ce{CO2}$ dan jelaskan signifikansi fisiknya!

---

### Pembahasan & Langkah Kunci:

**Langkah 1: Menghitung Tekanan Berdasarkan Model Gas Ideal**  
Dari persamaan keadaan gas ideal:
$$P_{\\text{ideal}} = \\frac{n R T}{V} = \\frac{10.0\\text{ mol} \\times 0.082057\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K}) \\times 320.15\\text{ K}}{2.00\\text{ L}}$$
$$P_{\\text{ideal}} = \\frac{262.706\\text{ L}\\cdot\\text{atm}}{2.00\\text{ L}} = 131.35\\text{ atm}$$

**Langkah 2: Menghitung Tekanan Nyata Menggunakan Persamaan Van der Waals**  
Bentuk eksplisit tekanan dalam persamaan Van der Waals:
$$P_{\\text{vdW}} = \\frac{n R T}{V - n b} - \\frac{a n^2}{V^2}$$

Hitung masing-masing suku koreksi secara terpisah:
1. **Volume Bebas yang Tersedia ($V - n b$):**
   $$V - n b = 2.00\\text{ L} - (10.0\\text{ mol} \\times 0.0427\\text{ L/mol}) = 2.00 - 0.427 = 1.573\\text{ L}$$
2. **Suku Kinetik Terkoreksi Volume:**
   $$\\frac{n R T}{V - n b} = \\frac{262.706}{1.573\\text{ L}} = 167.01\\text{ atm}$$
3. **Suku Koreksi Kohesi Tarik-Menarik Antar-Molekul ($\\frac{a n^2}{V^2}$):**
   $$\\frac{a n^2}{V^2} = \\frac{3.592 \\times (10.0)^2}{(2.00)^2} = \\frac{3.592 \\times 100}{4.00} = \\frac{359.2}{4.00} = 89.80\\text{ atm}$$

Maka tekanan gas nyata Van der Waals adalah:
$$P_{\\text{vdW}} = 167.01\\text{ atm} - 89.80\\text{ atm} = 77.21\\text{ atm}$$

*Evaluasi Penyimpangan:*  
Tekanan nyata ($77.21\text{ atm}$) ternyata jauh lebih rendah dibandingkan prediksi gas ideal ($131.35\text{ atm}$).
- Deviasi relatif terhadap tekanan nyata: $\frac{131.35 - 77.21}{77.21} \times 100\% = 70.1\%$ (model ideal memperkirakan tekanan $70.1\%$ lebih tinggi dari tekanan nyata).
- Reduksi tekanan dari perkiraan ideal: $\frac{131.35 - 77.21}{131.35} \times 100\% = 41.2\%$ (tekanan aktual tereduksi $41.2\%$ akibat tarikan intermolekul).

**Langkah 3: Menghitung Faktor Kompresibilitas ($Z$) & Dominasi Gaya Antarmolekul**  
Faktor kompresibilitas $Z$ didefinisikan sebagai:
$$Z = \\frac{P_{\\text{vdW}} V}{n R T} = \\frac{77.21\\text{ atm} \\times 2.00\\text{ L}}{10.0\\text{ mol} \\times 0.082057 \\times 320.15\\text{ K}} = \\frac{154.42}{262.706} = 0.588$$

*Interpretasi Fisis Nilai $Z = 0.588 < 1$:*  
- Nilai $Z$ yang jauh lebih kecil dari $1$ mengindikasikan bahwa **gaya tarik-menarik intermolekuler (kohesi $a$) sangat mendominasi** dibandingkan efek volume eksklusi molekul ($b$).
- Molekul-molekul $\\ce{CO2}$ saling menarik saat berdekatan, memperlambat partikel saat mendekati dinding bejana sehingga impuls tumbukan dinding berkurang drastis ($89.80\\text{ atm}$ reduksi tekanan).

**Langkah 4: Menghitung Temperatur Boyle ($T_B$) Gas $\\ce{CO2}$**  
Temperatur Boyle adalah suhu di mana suku tarikan intermolekul dan tolakan volume eksklusi saling mengeliminasi pada kerapatan rendah:
$$T_B = \\frac{a}{R \\cdot b} = \\frac{3.592\\text{ L}^2\\cdot\\text{atm}\\cdot\\text{mol}^{-2}}{0.082057\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K}) \\times 0.0427\\text{ L}\\cdot\\text{mol}^{-1}}$$
$$T_B = \\frac{3.592}{0.0035038} = 1025.2\\text{ K} \\quad (752.0^\\circ\\text{C})$$

*Signifikansi Fisik:*  
Pada temperatur $1025\\text{ K}$, gas $\\ce{CO2}$ akan berperilaku persis seperti gas ideal ($Z \\approx 1$) pada rentang tekanan rendah hingga moderat karena efek gaya tarik dan volume eksklusi molekul saling meniadakan secara presisi.

**Kesimpulan Evaluator Juri:**  
Pada kondisi kompresi tinggi, gas nyata $\\ce{CO2}$ menghasilkan tekanan aktual $77.21\\text{ atm}$ (jauh lebih rendah dari model ideal $131.35\\text{ atm}$) dengan faktor kompresibilitas $Z = 0.588$, membuktikan dominasi masif gaya tarik dispersi Van der Waals. Temperatur Boyle gas $\\ce{CO2}$ adalah $1025.2\\text{ K}$.`,
      keyFormulas: [
        { name: 'Tekanan Van der Waals', formula: 'P = \\frac{nRT}{V - nb} - \\frac{an^2}{V^2}' },
        { name: 'Faktor Kompresibilitas', formula: 'Z = \\frac{PV}{nRT}' },
        { name: 'Temperatur Boyle', formula: 'T_B = \\frac{a}{Rb}' },
      ],
    },
    {
      tag: 'soal-kristal-fcc',
      tags: ["soal-osn","kristal-fcc","tetapan-avogadro","densitas-kristal"],
      title: 'Contoh Soal OSN 4: Kristalografi Logam Emas (Au) FCC, Pembuktian Densitas, & Nilai Eksperimental Tetapan Avogadro',
      summary: 'Penentuan jari-jari atomik emas, faktor penumpukan atom (APF), pembuktian densitas teoritis kristal, dan penurunan nilai eksperimental tetapan Avogadro dari data difraksi sinar-X (XRD).',
      content: `### Masalah Soal:
Logam emas murni ($\\ce{Au}$, $M = 196.97\\text{ g/mol}$) mengkristal dalam kisi kristal kubus berpusat muka (*Face-Centered Cubic* / FCC). Pengukuran difraksi sinar-X (XRD) pada temperatur ruang menetapkan bahwa panjang rusuk sel satuan kubus emas adalah $a = 407.8\\text{ pm}$ ($4.078 \\times 10^{-8}\\text{ cm}$). Kerapatan makroskopis logam emas terukur sebesar $\\rho = 19.30\\text{ g/cm}^3$.

**Pertanyaan:**
1. Hitung jumlah atom emas netto ($n$) yang termuat di dalam satu sel satuan FCC!
2. Tentukan jari-jari atomik emas ($r$) dalam satuan pikometer (pm)!
3. Buktikan secara matematis bahwa Faktor Penumpukan Atom (*Atomic Packing Factor* / APF) untuk kristal FCC bernilai $\\frac{\\pi\\sqrt{2}}{6} \\approx 74.0\\%$!
4. Berdasarkan data difraksi sinar-X dan kerapatan tersebut, hitung nilai eksperimental Tetapan Avogadro ($N_A$) serta persentase galatnya terhadap tetapan resmi CODATA ($6.02214 \\times 10^{23}\\text{ mol}^{-1}$)!

---

### Pembahasan & Langkah Kunci:

**Langkah 1: Menentukan Jumlah Atom Netto ($n$) dalam Sel Satuan FCC**  
Pada sel satuan kubus berpusat muka (FCC):
- **8 atom di sudut kubus:** Masing-masing sudut dibagi bersama oleh 8 sel satuan tetangga:
  $$8 \\times \\frac{1}{8} = 1\\text{ atom}$$
- **6 atom di pusat muka kubus:** Masing-masing atom di pusat muka dibagi bersama oleh 2 sel satuan yang berhimpitan:
  $$6 \\times \\frac{1}{2} = 3\\text{ atom}$$
Maka jumlah total atom emas netto dalam satu sel satuan adalah:
$$n = 1 + 3 = 4\\text{ atom/sel}$$

**Langkah 2: Menghitung Jari-Jari Atom Emas ($r$) dari Geometri Diagonal Muka**  
Pada kisi FCC, atom-atom berbentuk bola keras saling bersentuhan rapat di sepanjang diagonal muka kubus:
$$d_{\\text{muka}} = a\\sqrt{2} = 4r$$
Maka hubungan panjang rusuk sel satuan ($a$) dan jari-jari atom ($r$) adalah:
$$r = \\frac{a\\sqrt{2}}{4} = \\frac{a}{2\\sqrt{2}}$$

Substitusikan nilai rusuk $a = 407.8\\text{ pm}$:
$$r = \\frac{407.8\\text{ pm} \\times \\sqrt{2}}{4} = \\frac{407.8 \\times 1.41421}{4} = 144.18\\text{ pm} \\approx 144.2\\text{ pm}$$

**Langkah 3: Pembuktian Analitis Faktor Penumpukan Atom (APF) Kristal FCC**  
Faktor Penumpukan Atom didefinisikan sebagai rasio volume yang diisi oleh atom bola keras terhadap volume total sel satuan:
$$\\text{APF} = \\frac{V_{\\text{atom}}}{V_{\\text{cell}}} = \\frac{n \\times V_{\\text{bola}}}{a^3}$$

Karena terdapat $n = 4$ atom per sel satuan dan masing-masing bervolume $V_{\\text{bola}} = \\frac{4}{3}\\pi r^3$:
$$V_{\\text{atom}} = 4 \\times \\left(\\frac{4}{3}\\pi r^3\\right) = \\frac{16}{3}\\pi r^3$$

Dari hubungan $a = 2\\sqrt{2}r$, volume sel satuan kubus adalah:
$$V_{\\text{cell}} = a^3 = (2\\sqrt{2}r)^3 = 8 \\times 2\\sqrt{2} \\times r^3 = 16\\sqrt{2} r^3$$

Bagi kedua volume tersebut:
$$\\text{APF} = \\frac{\\frac{16}{3}\\pi r^3}{16\\sqrt{2} r^3} = \\frac{\\pi}{3\\sqrt{2}} = \\frac{\\pi\\sqrt{2}}{6}$$
Hitung nilai numeriknya:
$$\\text{APF} = \\frac{3.14159 \\times 1.41421}{6} = \\frac{4.44288}{6} = 0.7405 = \\mathbf{74.05\\%}$$
*(Terbukti secara matematis bahwa susunan FCC merupakan penumpukan terpadat maksimum/close-packed bersama dengan struktur HCP).*

**Langkah 4: Menghitung Nilai Eksperimental Tetapan Avogadro ($N_A$)**  
Hubungan kerapatan kristalografi:
$$\\rho = \\frac{m_{\\text{sel}}}{V_{\\text{cell}}} = \\frac{n \\cdot M}{N_A \\cdot a^3}$$

Hitung volume satu sel satuan dalam satuan $\\text{cm}^3$:
$$a = 407.8\\text{ pm} = 407.8 \\times 10^{-10}\\text{ cm} = 4.078 \\times 10^{-8}\\text{ cm}$$
$$V_{\\text{cell}} = a^3 = (4.078 \\times 10^{-8}\\text{ cm})^3 = 6.7820 \\times 10^{-23}\\text{ cm}^3$$

Susun persamaan untuk mencari $N_A$:
$$N_A = \\frac{n \\cdot M}{\\rho \\cdot V_{\\text{cell}}} = \\frac{4 \\times 196.97\\text{ g/mol}}{19.30\\text{ g/cm}^3 \\times 6.7820 \\times 10^{-23}\\text{ cm}^3}$$
$$N_A = \\frac{787.88}{1.30893 \\times 10^{-21}} = 6.0193 \\times 10^{23}\\text{ mol}^{-1}$$

Hitung persentase galat relatif terhadap standar CODATA ($6.02214 \\times 10^{23}\\text{ mol}^{-1}$):
$$\\%\\text{ Galat} = \\frac{|6.0193 \\times 10^{23} - 6.0221 \\times 10^{23}|}{6.0221 \\times 10^{23}} \\times 100\\% = \\frac{0.0028}{6.0221} \\times 100\\% = 0.046\\% \\approx \\mathbf{0.05\\%}$$

**Kesimpulan Evaluator Juri:**  
Kisi kristal emas FCC memiliki $n = 4$ atom per sel satuan dengan jari-jari atom $r = 144.2\\text{ pm}$ dan efisiensi ruang maksimum $\\text{APF} = 74.05\\%$. Perhitungan XRD dan kerapatan makroskopis menghasilkan nilai eksperimental Tetapan Avogadro $N_A = 6.019 \\times 10^{23}\\text{ mol}^{-1}$ dengan akurasi sangat tinggi (galat hanya $0.05\\%$).`,
      keyFormulas: [
        { name: 'Hubungan Rusuk dan Jari-Jari FCC', formula: 'a\\sqrt{2} = 4r \\iff r = \\frac{a\\sqrt{2}}{4}' },
        { name: 'APF Kristal FCC', formula: '\\text{APF} = \\frac{\\pi\\sqrt{2}}{6} \\approx 74.05\\%' },
        { name: 'Tetapan Avogadro dari XRD', formula: 'N_A = \\frac{n \\cdot M}{\\rho \\cdot a^3}' },
      ],
    },
    {
      tag: 'soal-clausius-clapeyron',
      tags: ["soal-osn","clausius-clapeyron","tekanan-uap-jenuh"],
      title: 'Contoh Soal OSN 5: Termodinamika Penguapan Etanol, Tekanan Uap, & Titik Didih Dataran Tinggi via Clausius-Clapeyron',
      summary: 'Aplikasi persamaan Clausius-Clapeyron dua titik untuk menentukan kalor penguapan molar (ΔHvap) dan meramalkan titik didih cairan di daerah dataran tinggi bertekanan rendah.',
      content: `### Masalah Soal:
Tekanan uap jenuh etanol murni ($\\ce{C2H5OH}$) terukur di laboratorium sebesar $100.0\\text{ mmHg}$ pada temperatur $34.9^\\circ\\text{C}$ ($308.05\\text{ K}$) dan sebesar $400.0\\text{ mmHg}$ pada temperatur $63.5^\\circ\\text{C}$ ($336.65\\text{ K}$).

*(Diketahui: $R = 8.3145\\text{ J}/(\\text{mol}\\cdot\\text{K})$, $1\\text{ atm} = 760.0\\text{ mmHg} = 101325\\text{ Pa}$)*.

**Pertanyaan:**
1. Hitung entalpi penguapan molar standar ($\\Delta H_{\\text{vap}}^\\circ$) etanol dengan mengasumsikan nilainya konstan sepanjang rentang temperatur tersebut!
2. Tentukan titik didih normal etanol pada tekanan atmosfer baku permukaan laut ($P = 1.000\\text{ atm} = 760.0\\text{ mmHg}$)!
3. Di suatu stasiun penelitian pegunungan Andes pada ketinggian $2500\\text{ meter}$, tekanan barometer udara terukur sebesar $0.750\\text{ atm}$ ($570.0\\text{ mmHg}$). Berapakah titik didih etanol di laboratorium pegunungan tersebut?
4. Mengapa makanan yang dimasak dalam air mendidih di wilayah dataran tinggi memerlukan waktu perebusan yang jauh lebih lama dibandingkan di daerah pesisir pantai? Jelaskan mekanisme termodinamika dan kinetika kimianya!

---

### Pembahasan & Langkah Kunci:

**Langkah 1: Menghitung Entalpi Penguapan Molar ($\\Delta H_{\\text{vap}}$) Etanol**  
Gunakan Persamaan Clausius-Clapeyron bentuk integral dua titik:
$$\\ln\\left(\\frac{P_2}{P_1}\\right) = -\\frac{\\Delta H_{\\text{vap}}}{R} \\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)$$

Substitusikan data eksperimen:
- $P_1 = 100.0\\text{ mmHg}$, $T_1 = 34.9 + 273.15 = 308.05\\text{ K}$
- $P_2 = 400.0\\text{ mmHg}$, $T_2 = 63.5 + 273.15 = 336.65\\text{ K}$

Hitung rasio tekanan uap:
$$\\ln\\left(\\frac{400.0}{100.0}\\right) = \\ln(4.000) = 1.38629$$

Hitung selisih invers temperatur:
$$\\frac{1}{T_2} - \\frac{1}{T_1} = \\frac{1}{336.65} - \\frac{1}{308.05} = 0.00297044 - 0.00324623 = -2.7579 \\times 10^{-4}\\text{ K}^{-1}$$

Selesaikan untuk mencari $\\Delta H_{\\text{vap}}$:
$$1.38629 = -\\frac{\\Delta H_{\\text{vap}}}{8.3145} \\times (-2.7579 \\times 10^{-4})$$
$$\\Delta H_{\\text{vap}} = \\frac{1.38629 \\times 8.3145}{2.7579 \\times 10^{-4}} = \\frac{11.5263}{2.7579 \\times 10^{-4}} = 41794\\text{ J/mol} = \\mathbf{41.79\\text{ kJ/mol}}$$

**Langkah 2: Menghitung Titik Didih Normal Etanol pada Tekanan $760.0\\text{ mmHg}$**  
Titik didih normal adalah suhu ketika tekanan uap jenuh zat cair tepat mencapai $1\\text{ atm} = 760.0\\text{ mmHg}$ ($P_3 = 760.0\\text{ mmHg}$).
Gunakan titik referensi kedua ($P_2 = 400.0\\text{ mmHg}, T_2 = 336.65\\text{ K}$):
$$\\ln\\left(\\frac{P_3}{P_2}\\right) = -\\frac{\\Delta H_{\\text{vap}}}{R} \\left(\\frac{1}{T_b} - \\frac{1}{T_2}\\right)$$
$$\\ln\\left(\\frac{760.0}{400.0}\\right) = \\ln(1.900) = 0.64185$$

$$\\frac{1}{T_b} - \\frac{1}{T_2} = -\\frac{R \\cdot \\ln(P_3/P_2)}{\\Delta H_{\\text{vap}}} = -\\frac{8.3145 \\times 0.64185}{41794} = -1.2770 \\times 10^{-4}\\text{ K}^{-1}$$
$$\\frac{1}{T_b} = \\frac{1}{336.65} - 1.2770 \\times 10^{-4} = 0.00297044 - 0.00012770 = 0.00284274\\text{ K}^{-1}$$

Hitung nilai temperatur mutlak dan Celsius:
$$T_b = \\frac{1}{0.00284274} = 351.77\\text{ K}$$
$$t_b = 351.77 - 273.15 = \\mathbf{78.62^\\circ\\text{C}} \\approx 78.6^\\circ\\text{C}$$
*(Sangat konsisten dengan nilai eksperimen literatur kimia analitik: $78.37^\\circ\\text{C}$)*.

**Langkah 3: Menghitung Titik Didih Etanol di Dataran Tinggi ($P = 570.0\\text{ mmHg}$)**  
Pada dataran tinggi berketinggian $2500\\text{ m}$, tekanan barometer adalah $P_4 = 570.0\\text{ mmHg}$. Gunakan titik didih normal sebagai acuan ($P_3 = 760.0\\text{ mmHg}, T_3 = 351.77\\text{ K}$):
$$\\ln\\left(\\frac{P_4}{P_3}\\right) = -\\frac{\\Delta H_{\\text{vap}}}{R} \\left(\\frac{1}{T_{\\text{alt}}} - \\frac{1}{T_b}\\right)$$
$$\\ln\\left(\\frac{570.0}{760.0}\\right) = \\ln(0.750) = -0.28768$$

$$\\frac{1}{T_{\\text{alt}}} - \\frac{1}{T_b} = -\\frac{8.3145 \\times (-0.28768)}{41794} = +5.7230 \\times 10^{-5}\\text{ K}^{-1}$$
$$\\frac{1}{T_{\\text{alt}}} = 0.00284274 + 0.00005723 = 0.00289997\\text{ K}^{-1}$$

Hitung titik didih di dataran tinggi:
$$T_{\\text{alt}} = \\frac{1}{0.00289997} = 344.83\\text{ K}$$
$$t_{\\text{alt}} = 344.83 - 273.15 = \\mathbf{71.68^\\circ\\text{C}} \\approx 71.7^\\circ\\text{C}$$
*Analisis:* Penurunan tekanan sebesar $25\\%$ di dataran tinggi menyebabkan penurunan titik didih etanol sebesar $6.9^\\circ\\text{C}$!

**Langkah 4: Analisis Kinetika Kimia Memasak di Dataran Tinggi**  
1. **Definisi Titik Didih:** Cairan mendidih ketika tekanan uap jenuhnya menyamai tekanan atmosfer eksternal ($P_{\\text{uap}} = P_{\\text{eksternal}}$). Selama mendidih, kalor yang diserap digunakan untuk transisi fasa laten tanpa menaikkan suhu cairan.
2. **Keterkaitan Kinetika Arrhenius:** Suhu air mendidih di dataran tinggi lebih rendah (misal air mendidih hanya pada $\\sim 91.5^\\circ\\text{C}$ di ketinggian $2500\\text{ m}$). Berdasarkan persamaan Arrhenius ($k = A e^{-E_a/RT}$), laju reaksi pematangan makanan (seperti pemutusan ikatan peptida, hidrolisis amilosa, dan denaturasi protein) menurun secara eksponensial dengan turunnya suhu. Akibatnya, waktu memasak yang diperlukan menjadi jauh lebih lama jika tidak menggunakan panci bertekanan (*autoclave/pressure cooker*).

**Kesimpulan Evaluator Juri:**  
Entalpi penguapan molar etanol adalah $41.79\\text{ kJ/mol}$ dengan titik didih normal $78.62^\\circ\\text{C}$. Di dataran tinggi bertekanan $0.750\\text{ atm}$, titik didih etanol terkoreksi turun menjadi $71.68^\\circ\\text{C}$ akibat rendahnya tekanan atmosfer penyeimbang tekanan uap jenuh.`,
      keyFormulas: [
        { name: 'Persamaan Clausius-Clapeyron Dua Titik', formula: '\\ln\\left(\\frac{P_2}{P_1}\\right) = -\\frac{\\Delta H_{\\text{vap}}}{R} \\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)' },
        { name: 'Koreksi Titik Didih', formula: '\\frac{1}{T_2} = \\frac{1}{T_1} - \\frac{R}{\\Delta H_{\\text{vap}}}\\ln\\left(\\frac{P_2}{P_1}\\right)' },
      ],
    },
  ],
},

  // ==========================================
  // TOPIK 4: TERMODINAMIKA KIMIA
  // ==========================================
  {
  id: 4,
  topic_number: 4,
  title: 'Termodinamika Kimia & Termokimia',
  slug: 'termodinamika-kimia',
  category: 'Kimia Fisik',
  level: 'OSN',
  readTimeMinutes: 30,
  summary: 'Hukum I Termodinamika (kalor q, kerja w, energi dalam dU), Hukum Hess, Hukum Kirchhoff, Hukum II & III (entropi mutlak S), energi bebas Gibbs, kespontanan reaksi, persamaan Van \'t Hoff, kerja reversibel vs ireversibel, dan kesetimbangan multi-fasa.',
  allTags: [
      'hukum-pertama-kalorimetri',
      'entalpi-reaksi-hukum-hess',
      'hukum-kedua-ketiga-entropi',
      'energi-bebas-gibbs-kespontanan',
      'energi-gibbs-tetapan-kesetimbangan',
      'persamaan-van-t-hoff',
      'proses-reversibel-ireversibel-kerja-maksimum',
      'potensial-kimia-termodinamika-larutan',
      'soal-disosiasi-n2o4',
      'soal-kirchhoff-amonia',
      'soal-van-t-hoff-caco3',
      'soal-ekspansi-gas-termodinamika',
      'soal-ellingham-metalurgi-kroll',
      'termodinamika',
      'entalpi',
      'entropi',
      'energi-gibbs',
      'kesetimbangan-kp',
      'van-t-hoff',
      'hukum-pertama',
      'kalorimetri',
      'energi-dalam',
      'kerja-pv',
      'entalpi-reaksi',
      'hukum-hess',
      'hukum-kirchhoff',
      'hukum-kedua',
      'hukum-ketiga',
      'mikrokeadaan-boltzmann',
      'energi-bebas-gibbs',
      'kespontanan-reaksi',
      'temperatur-transisi',
      'energi-gibbs-standar',
      'tetapan-kesetimbangan',
      'kuosien-reaksi',
      'plot-van-t-hoff',
      'kesetimbangan-termal',
      'proses-reversibel',
      'proses-ireversibel',
      'kerja-maksimum',
      'ekspansi-isotermal',
      'potensial-kimia',
      'fugositas',
      'aktivitas-larutan',
      'kesetimbangan-fasa',
      'soal-osp',
      'disosiasi-n2o4',
      'kesetimbangan-gas',
      'kapasitas-kalor-cp',
      'sintesis-amonia',
      'dekomposisi-caco3',
      'tekanan-dekomposisi',
      'soal-osn',
      'ekspansi-gas',
      'kerja-reversibel-ireversibel',
      'entropi-semesta',
      'diagram-ellingham',
      'metalurgi-kroll',
      'ekstraksi-titanium',
    ],
  prerequisites: [
    {
      tag: 'hukum-pertama-kalorimetri',
      tags: ["hukum-pertama","kalorimetri","energi-dalam","kerja-pv"],
      title: 'Prasyarat 1: Hukum I Termodinamika, Kalor ($q$), Kerja ($w$), & Kalorimetri',
      summary: 'Konservasi energi, fungsi keadaan vs jalur, kerja ekspansi tekanan-volume, dan kalorimetri bom vs tekanan tetap.',
      content: `Termodinamika kimia mempelajari transformasi energi antara kalor (*heat*), kerja (*work*), dan perubahan keadaan fasa atau reaksi kimia.

### 1. Sistem, Lingkungan, & Fungsi Keadaan:
- **Sistem:** Bagian dari alam semesta yang menjadi fokus pengamatan spesifik. Terbagi menjadi:
  - *Sistem Terbuka:* Dapat bertukar materi dan energi dengan lingkungan.
  - *Sistem Tertutup:* Hanya dapat bertukar energi (kalor/kerja), tanpa pertukaran materi.
  - *Sistem Terisolasi:* Tidak dapat bertukar materi maupun energi dengan lingkungan.
- **Fungsi Keadaan (*State Function*):** Besaran termodinamika yang nilainya hanya bergantung pada keadaan awal dan akhir sistem, bukan pada lintasan proses (contoh: energi dalam $U$, entalpi $H$, entropi $S$, energi bebas Gibbs $G$, tekanan $P$, volume $V$, temperatur $T$).
- **Fungsi Jalur (*Path Function*):** Besaran yang nilainya bergantung pada lintasan spesifik yang ditempuh (contoh: kalor $q$ dan kerja $w$).

---

### 2. Hukum I Termodinamika (Kekekalan Energi):
Energi total alam semesta bersifat kekal; energi tidak dapat diciptakan maupun dimusnahkan, hanya dapat ditransformasikan:
$$\\Delta U = q + w$$
di mana:
- $\\Delta U$ = perubahan energi dalam sistem (Joule).
- $q$ = kalor yang diserap sistem ($q > 0$ jika sistem menyerap kalor/endotermik; $q < 0$ jika sistem melepas kalor/eksotermik).
- $w$ = kerja yang dilakukan pada sistem ($w > 0$ jika lingkungan melakukan kerja pada sistem/kompresi; $w < 0$ jika sistem melakukan kerja terhadap lingkungan/ekspansi).

**Kerja Ekspansi Tekanan-Volume ($P-V$):**
$$w = -\\int_{V_1}^{V_2} P_{\\text{ext}} \\, dV$$
Pada tekanan eksternal konstan ($P_{\\text{ext}}$):
$$w = -P_{\\text{ext}} \\Delta V = -P_{\\text{ext}} (V_2 - V_1)$$
*(Konversi Satuan Berguna: $1\\text{ L}\\cdot\\text{atm} = 101.325\\text{ J}$)*.

---

### 3. Kalorimetri: Kapasitas Kalor & Kalorimeter Bom vs Cawan Kopi:
Kalor yang dipindahkan selama perubahan temperatur $\\Delta T$:
$$q = m \\cdot c \\cdot \\Delta T = C \\cdot \\Delta T$$
di mana $c$ adalah kalor jenis ($\\text{J}/(\\text{g}\\cdot\\text{K})$) dan $C$ adalah kapasitas kalor ($\\text{J/K}$).

1. **Kalorimeter Bom (Volume Tetap, $\\Delta V = 0$):**
   Karena $\\Delta V = 0$, maka kerja $w = 0$. Kalor reaksi yang diukur persis sama dengan perubahan energi dalam:
   $$q_v = \\Delta U$$
2. **Kalorimeter Cawan Kopi (Tekanan Tetap, $\\Delta P = 0$):**
   Kalor reaksi pada tekanan konstan didefinisikan sebagai perubahan entalpi:
   $$q_p = \\Delta H$$

**Hubungan Antara $\\Delta H$ dan $\\Delta U$:**
$$\\Delta H = \\Delta U + \\Delta(PV) = \\Delta U + \\Delta n_g R T$$
di mana $\\Delta n_g = \\sum n_g(\\text{produk}) - \\sum n_g(\\text{reaktan})$ adalah selisih koefisien mol gas.`,
      keyFormulas: [
        { name: 'Hukum I Termodinamika', formula: '\\Delta U = q + w' },
        { name: 'Kerja Tekanan-Volume', formula: 'w = -P_{\\text{ext}}\\Delta V' },
        { name: 'Hubungan Entalpi dan Energi Dalam', formula: '\\Delta H = \\Delta U + \\Delta n_g RT' },
      ],
    },
    {
      tag: 'entalpi-reaksi-hukum-hess',
      tags: ["entalpi-reaksi","hukum-hess","hukum-kirchhoff"],
      title: 'Prasyarat 2: Entalpi Reaksi Standar, Hukum Hess, & Hukum Kirchhoff',
      summary: 'Aditivitas entalpi pembentukan, energi ikatan rata-rata, dan ketergantungan entalpi reaksi terhadap temperatur.',
      content: `Entalpi ($H = U + PV$) merupakan ukuran kandungan kalor sistem pada tekanan tetap.

### 1. Entalpi Pembentukan Standar ($\\Delta H_f^\\circ$):
Perubahan entalpi pada pembentukan $1\\text{ mol}$ senyawa dari unsur-unsur penyusunnya dalam bentuk alotrop paling stabil pada kondisi standar ($1\\text{ bar}$ atau $1\\text{ atm}$, temperatur tertentu umumnya $298.15\\text{ K}$).
- Berdasarkan konvensi IUPAC: $\\Delta H_f^\\circ$ untuk seluruh unsur murni stabil bernilai tepat nol (contoh: $\\ce{O2(g)}, \\ce{N2(g)}, \\ce{C(grafit)}, \\ce{Br2(l)}, \\ce{Fe(s)} = 0\\text{ kJ/mol}$).

---

### 2. Hukum Hess & Penentuan Entalpi Reaksi:
Karena entalpi merupakan fungsi keadaan, perubahan entalpi keseluruhan suatu reaksi kimia bersifat aditif dan tidak bergantung pada tahapan reaksi:
$$\\Delta H^\\circ_{\\text{rxn}} = \\sum n \\Delta H_f^\\circ(\\text{produk}) - \\sum m \\Delta H_f^\\circ(\\text{reaktan})$$

**Estimasi Entalpi Melalui Energi Disosiasi Ikatan Fasa Gas ($D$):**
$$\\Delta H^\\circ_{\\text{rxn}} \\approx \\sum D(\\text{ikatan putus / reaktan}) - \\sum D(\\text{ikatan terbentuk / produk})$$

---

### 3. Ketergantungan Entalpi terhadap Suhu: Hukum Kirchhoff:
Bila suatu reaksi berlangsung pada temperatur non-standar ($T_2$) yang berbeda dari suhu acuan ($T_1 = 298.15\\text{ K}$):
$$\\left(\\frac{\\partial \\Delta H}{\\partial T}\\right)_P = \\Delta C_p$$
Bentuk integral Gustav Kirchhoff:
$$\\Delta H_{T_2}^\\circ = \\Delta H_{T_1}^\\circ + \\int_{T_1}^{T_2} \\Delta C_p \\, dT$$
di mana:
$$\\Delta C_p = \\sum n C_{p,\\text{m}}(\\text{produk}) - \\sum m C_{p,\\text{m}}(\\text{reaktan})$$
Jika kapasitas kalor molar $C_p$ diasumsikan independen terhadap suhu pada rentang sempit:
$$\\Delta H_{T_2}^\\circ = \\Delta H_{T_1}^\\circ + \\Delta C_p (T_2 - T_1)$$`,
      keyFormulas: [
        { name: 'Hukum Hess', formula: '\\Delta H^\\circ_{\\text{rxn}} = \\sum n \\Delta H_f^\\circ(\\text{prod}) - \\sum m \\Delta H_f^\\circ(\\text{reak})' },
        { name: 'Estimasi Energi Ikatan', formula: '\\Delta H^\\circ \\approx \\sum D_{\\text{putus}} - \\sum D_{\\text{bentuk}}' },
        { name: 'Hukum Kirchhoff', formula: '\\Delta H_{T_2}^\\circ = \\Delta H_{T_1}^\\circ + \\Delta C_p (T_2 - T_1)' },
      ],
    },
    {
      tag: 'hukum-kedua-ketiga-entropi',
      tags: ["hukum-kedua","hukum-ketiga","entropi","mikrokeadaan-boltzmann"],
      title: 'Prasyarat 3: Hukum II & III Termodinamika, Entropi Mutlak, & Mikrokeadaan',
      summary: 'Arah kespontanan alami, konsep ketidakteraturan molekuler Boltzmann, dan entropi mutlak standar.',
      content: `Entropi ($S$) adalah besaran termodinamika yang mengukur tingkat penyebaran energi termal dan derajat ketidakteraturan mikroskopis suatu sistem.

### 1. Definisi Termodinamika Entropi:
Untuk suatu proses reversibel pada temperatur $T$:
$$dS = \\frac{dq_{\\text{rev}}}{T}$$
Untuk perubahan fasa isothermal (misal peleburan atau penguapan):
$$\\Delta S_{\\text{trans}} = \\frac{\\Delta H_{\\text{trans}}}{T_{\\text{trans}}}$$

---

### 2. Formulasi Statistik Ludwig Boltzmann:
Secara mikroskopis, entropi mencerminkan jumlah konfigurasi mikrokeadaan (*microstates*, $\\Omega$) yang dapat diakses oleh partikel:
$$S = k_B \\ln \\Omega$$
di mana $k_B = 1.38065 \\times 10^{-23}\\text{ J/K}$ adalah tetapan Boltzmann. Semakin banyak posisi dan tingkat energi yang tersedia bagi molekul (misal saat gas berekspansi atau zat padat mencair), nilai $\\Omega$ melonjak drastis sehingga entropi meningkat.

---

### 3. Hukum II & Hukum III Termodinamika:
- **Hukum II Termodinamika:** Pada setiap proses yang berlangsung spontan di alam semesta, entropi total alam semesta selalu meningkat:
  $$\\Delta S_{\\text{semesta}} = \\Delta S_{\\text{sistem}} + \\Delta S_{\\text{lingkungan}} > 0$$
  Entropi lingkungan dipengaruhi oleh kalor yang dilepaskan/diserap sistem:
  $$\\Delta S_{\\text{lingkungan}} = -\\frac{\\Delta H_{\\text{sistem}}}{T}$$
- **Hukum III Termodinamika:** Entropi suatu kristal zat murni sempurna pada temperatur nol mutlak ($0\\text{ K} = -273.15^\\circ\\text{C}$) bernilai tepat nol ($S = 0$ karena hanya terdapat satu mikrokeadaan tunggal $\\Omega = 1 \\implies \\ln 1 = 0$).

Hal ini memungkinkan penentuan **Entropi Mutlak Standar ($S^\\circ$)** dari integrasi kapasitas kalor:
$$S_T^\\circ = \\int_0^T \\frac{C_p}{T}\\, dT + \\sum \\frac{\\Delta H_{\\text{trans}}}{T_{\\text{trans}}}$$

Entropi reaksi standar:
$$\\Delta S^\\circ_{\\text{rxn}} = \\sum n S^\\circ(\\text{produk}) - \\sum m S^\\circ(\\text{reaktan})$$`,
      keyFormulas: [
        { name: 'Definisi Entropi Reversibel', formula: '\\Delta S = \\frac{q_{\\text{rev}}}{T}' },
        { name: 'Entropi Boltzmann', formula: 'S = k_B \\ln \\Omega' },
        { name: 'Hukum II Termodinamika', formula: '\\Delta S_{\\text{semesta}} = \\Delta S_{\\text{sistem}} + \\Delta S_{\\text{lingkungan}} \\ge 0' },
        { name: 'Entropi Reaksi Standar', formula: '\\Delta S^\\circ_{\\text{rxn}} = \\sum n S^\\circ(\\text{prod}) - \\sum m S^\\circ(\\text{reak})' },
      ],
    },
  ],
  core_concepts: [
    {
      tag: 'energi-bebas-gibbs-kespontanan',
      tags: ["energi-bebas-gibbs","kespontanan-reaksi","temperatur-transisi"],
      title: 'Konsep Inti 1: Energi Bebas Gibbs, Kespontanan Reaksi, & Temperatur Transisi',
      summary: 'Kriteria kespontanan termodinamika pada T dan P tetap, analisis tabel 4 skenario tanda dH dan dS, serta crossover temperature.',
      content: `Kriteria kespontanan universal berdasarkan Hukum II Termodinamika ($\\Delta S_{\\text{semesta}} > 0$) memerlukan perhitungan perubahan entropi lingkungan. Josiah Willard Gibbs memperkenalkan fungsi potensial termodinamika yang beroperasi secara eksklusif pada variabel keadaan sistem internal pada temperatur ($T$) dan tekanan ($P$) konstan.

### 1. Penurunan Fungsi Energi Bebas Gibbs:
Dari hubungan Hukum II Termodinamika:
$$\\Delta S_{\\text{semesta}} = \\Delta S_{\\text{sistem}} + \\Delta S_{\\text{lingkungan}} = \\Delta S_{\\text{sistem}} - \\frac{\\Delta H_{\\text{sistem}}}{T} > 0$$
Kalikan seluruh ruas dengan $-T$ (ingat bahwa $T > 0\\text{ K}$):
$$-T \\Delta S_{\\text{semesta}} = \\Delta H_{\\text{sistem}} - T \\Delta S_{\\text{sistem}} < 0$$

Didefinisikan **Fungsi Energi Bebas Gibbs ($G$)**:
$$G = H - TS \\implies \\Delta G = \\Delta H - T\\Delta S$$

**Kriteria Kespontanan Termodinamika (pada $T$ dan $P$ tetap):**
- $\\Delta G < 0$: Reaksi berlangsung **spontan** ke arah produk (proses eksergonik).
- $\\Delta G = 0$: Sistem berada dalam keadaan **kesetimbangan dinamis** sejati.
- $\\Delta G > 0$: Reaksi **tidak spontan** ke arah maju, namun berlangsung spontan ke arah sebaliknya (proses endergonik).

---

### 2. Empat Skenario Termodinamika Tanda $\\Delta H$ dan $\\Delta S$:

| Skenario | Tanda $\\Delta H$ | Tanda $\\Delta S$ | Sifat Kespontanan $\\Delta G = \\Delta H - T\\Delta S$ | Ketergantungan terhadap Temperatur ($T$) | Contoh Nyata Reaksi |
| :--- | :---: | :---: | :--- | :--- | :--- |
| **Kasus 1** | **$-$** (Eksotermik) | **$+$** (Entropi naik) | **Selalu $\\Delta G < 0$ (Spontan)** | Spontan pada seluruh temperatur mutlak | Pembakaran hidrokarbon, dekomposisi $\\ce{2H2O2 -> 2H2O + O2}$ |
| **Kasus 2** | **$+$** (Endotermik) | **$-$** (Entropi turun) | **Selalu $\\Delta G > 0$ (Non-spontan)** | Tidak pernah spontan pada temperatur berapapun | Pembentukan ozon: $\\ce{3O2(g) -> 2O3(g)}$ |
| **Kasus 3** | **$+$** (Endotermik) | **$+$** (Entropi naik) | **Spontan pada Suhu Tinggi** ($T > T^*$) | *Driven by Entropy* (Didorong oleh suku $-T\\Delta S$) | Peleburan es, kalsinasi kapur $\\ce{CaCO3 -> CaO + CO2}$ |
| **Kasus 4** | **$-$** (Eksotermik) | **$-$** (Entropi turun) | **Spontan pada Suhu Rendah** ($T < T^*$) | *Driven by Enthalpy* (Didorong oleh suku $\\Delta H$) | Pembekuan air, sintesis amonia $\\ce{N2 + 3H2 -> 2NH3}$ |

---

### 3. Temperatur Transisi (*Crossover Temperature*, $T^*$):
Pada Kasus 3 dan Kasus 4, terdapat satu temperatur ambang batas kritis di mana sistem beralih dari non-spontan menjadi spontan (kondisi $\\Delta G^\\circ = 0$):
$$\\Delta H^\\circ - T^* \\Delta S^\\circ = 0 \\implies T^* = \\frac{\\Delta H^\\circ}{\\Delta S^\\circ}$$
- Untuk Kasus 3 ($\Delta H > 0, \Delta S > 0$): Reaksi menjadi spontan jika $T > T^*$.
- Untuk Kasus 4 ($\Delta H < 0, \Delta S < 0$): Reaksi menjadi spontan jika $T < T^*$.`,
      keyFormulas: [
        { name: 'Persamaan Gibbs-Helmholtz', formula: '\\Delta G = \\Delta H - T\\Delta S' },
        { name: 'Temperatur Ambang Batas Spontanitas', formula: 'T^* = \\frac{\\Delta H^\\circ}{\\Delta S^\\circ}' },
      ],
    },
    {
      tag: 'energi-gibbs-tetapan-kesetimbangan',
      tags: ["energi-gibbs-standar","tetapan-kesetimbangan","kuosien-reaksi"],
      title: 'Konsep Inti 2: Hubungan Termodinamika Energi Bebas Gibbs dengan Tetapan Kesetimbangan ($K$)',
      summary: 'Integrasi kuotien reaksi Q, penurunan persamaan fundamental dG° = -RT ln K, dan prediksi arah pergeseran campuran.',
      content: `Energi bebas Gibbs merupakan jembatan matematis paling fundamental yang menghubungkan data kalorimetri termodinamika murni dengan tetapan kesetimbangan kimia makroskopis ($K$).

### 1. Ketergantungan Energi Bebas terhadap Komposisi Campuran Reaksi:
Untuk suatu gas ideal atau zat terlarut pada kondisi non-standar (tekanan sembarang atau konsentrasi sembarang):
$$G_i = G_i^\\circ + RT \\ln a_i$$
di mana $a_i$ adalah aktivitas termodinamika ($a_i = \\frac{P_i}{P^\\circ}$ untuk gas dengan $P^\\circ = 1\\text{ bar}$, dan $a_i = \\frac{[C_i]}{C^\\circ}$ untuk larutan dengan $C^\\circ = 1\\text{ M}$).

Untuk reaksi kimia umum:
$$a\\ce{A} + b\\ce{B} <=> c\\ce{C} + d\\ce{D}$$
Perubahan energi bebas Gibbs aktual pada komposisi sembarang dinyatakan oleh **Kuotien Reaksi ($Q$)**:
$$\\Delta G = \\Delta G^\\circ + RT \\ln Q$$
di mana:
$$Q = \\frac{(a_{\\ce{C}})^c (a_{\\ce{D}})^d}{(a_{\\ce{A}})^a (a_{\\ce{B}})^b}$$

---

### 2. Penurunan Persamaan Kesetimbangan Termodinamika:
Ketika reaksi mencapai kesetimbangan kimia sejati:
1. Perubahan energi bebas aktual sistem bernilai nol: $\\Delta G = 0$.
2. Komposisi campuran tidak lagi berubah, sehingga kuotien reaksi bernilai persis sama dengan tetapan kesetimbangan: $Q = K$.

Substitusikan kondisi ini ke persamaan komposisi:
$$0 = \\Delta G^\\circ + RT \\ln K \\implies \\Delta G^\\circ = -RT \\ln K$$

Bentuk eksponensial eksplisit untuk tetapan kesetimbangan:
$$K = \\exp\\left( -\\frac{\\Delta G^\\circ}{RT} \\right) = e^{-\\Delta G^\\circ / RT}$$

**Kriteria Arah Kespontanan Berdasarkan Perbandingan $Q$ dan $K$:**
- Jika $Q < K \\implies \\Delta G < 0$: Reaksi spontan bergeser ke arah kanan (pembentukan produk).
- Jika $Q = K \\implies \\Delta G = 0$: Sistem berada dalam kesetimbangan dinamis.
- Jika $Q > K \\implies \\Delta G > 0$: Reaksi spontan bergeser ke arah kiri (pembentukan reaktan kembali).

> **Peringatan Penting Ujian Olimpiade:**  
> Pada perhitungan numerik $\\Delta G^\\circ = -RT \\ln K$, nilai $\\Delta G^\\circ$ wajib dinyatakan dalam satuan **Joule per mol ($\text{J/mol}$)**, bukan $\\text{kJ/mol}$, karena tetapan gas universal bernilai $R = 8.31446\\text{ J}/(\\text{mol}\\cdot\\text{K})$.`,
      keyFormulas: [
        { name: 'Energi Gibbs Kondisi Non-Standar', formula: '\\Delta G = \\Delta G^\\circ + RT \\ln Q' },
        { name: 'Persamaan Fundamental Kesetimbangan', formula: '\\Delta G^\\circ = -RT \\ln K' },
        { name: 'Tetapan Kesetimbangan Termodinamika', formula: 'K = e^{-\\Delta G^\\circ / RT}' },
      ],
    },
    {
      tag: 'persamaan-van-t-hoff',
      tags: ["persamaan-van-t-hoff","plot-van-t-hoff","kesetimbangan-termal"],
      title: 'Konsep Inti 3: Persamaan Van \'t Hoff & Ketergantungan Suhu terhadap Tetapan Kesetimbangan',
      summary: 'Penurunan kalkulus Van \'t Hoff, kurva linier ln K vs 1/T, dan penentuan kalor reaksi serta perubahan entropi eksperimental.',
      content: `Bagaimana tetapan kesetimbangan ($K$) merespons perubahan temperatur sistem? Jacobus Henricus van 't Hoff merumuskan persamaan diferensial eksak yang menghubungkan perubahan $K$ dengan entalpi standar reaksi.

### 1. Penurunan Matematis Persamaan Van 't Hoff:
Mulai dari hubungan dasar:
$$\\ln K = -\\frac{\\Delta G^\\circ}{RT} = -\\frac{\\Delta H^\\circ - T\\Delta S^\\circ}{RT} = -\\frac{\\Delta H^\\circ}{RT} + \\frac{\\Delta S^\\circ}{R}$$

Diferensialkan persamaan terhadap temperatur $T$ pada tekanan tetap:
$$\\frac{d(\\ln K)}{dT} = \\frac{d}{dT}\\left(-\\frac{\\Delta H^\\circ}{RT} + \\frac{\\Delta S^\\circ}{R}\\right)$$
Berdasarkan hubungan Gibbs-Helmholtz, $\\frac{d(\\Delta G^\\circ / T)}{dT} = -\\frac{\\Delta H^\\circ}{T^2}$, diperoleh:
$$\\frac{d(\\ln K)}{dT} = \\frac{\\Delta H^\\circ}{R T^2}$$

Ubah variabel diferensial ke dalam bentuk invers temperatur ($d(1/T) = -\\frac{1}{T^2} dT$):
$$\\frac{d(\\ln K)}{d(1/T)} = -\\frac{\\Delta H^\\circ}{R}$$

---

### 2. Bentuk Integral Dua Titik Persamaan Van 't Hoff:
Dengan mengasumsikan entalpi reaksi $\\Delta H^\\circ$ dan entropi reaksi $\\Delta S^\\circ$ relatif konstan sepanjang rentang temperatur dari $T_1$ ke $T_2$:
$$\\int_{K_1}^{K_2} d(\\ln K) = -\\frac{\\Delta H^\\circ}{R} \\int_{T_1}^{T_2} \\frac{1}{T^2} \\, dT$$

$$\\ln\\left(\\frac{K_2}{K_1}\\right) = -\\frac{\\Delta H^\\circ}{R} \\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right) = \\frac{\\Delta H^\\circ}{R} \\left(\\frac{T_2 - T_1}{T_1 \\cdot T_2}\\right)$$

---

### 3. Analisis Grafik Plot Linier Van 't Hoff:
Grafik $\\ln K$ terhadap sumbu-x $\\frac{1}{T}$ menghasilkan kurva garis lurus ($y = m x + c$):
$$\\ln K = \\left(-\\frac{\\Delta H^\\circ}{R}\\right) \\frac{1}{T} + \\left(\\frac{\\Delta S^\\circ}{R}\\right)$$
- **Kemiringan Gradien (*Slope*, $m$):**
  $$m = -\\frac{\\Delta H^\\circ}{R} \\implies \\Delta H^\\circ = -m \\cdot R$$
- **Titik Potong Sumbu Vertikal (*Intercept*, $c$):**
  $$c = \\frac{\\Delta S^\\circ}{R} \\implies \\Delta S^\\circ = c \\cdot R$$

**Verifikasi Asas Le Chatelier:**
1. **Reaksi Endotermik ($\\Delta H^\\circ > 0$):** Slope kurva bernilai negatif ($m < 0$). Saat suhu dinaikkan ($T_2 > T_1 \\implies 1/T_2 < 1/T_1$), nilai $\\ln K$ meningkat ($K_2 > K_1$). Sistem menyerap kalor dan bergeser ke arah produk.
2. **Reaksi Eksotermik ($\\Delta H^\\circ < 0$):** Slope kurva bernilai positif ($m > 0$). Saat suhu dinaikkan, nilai $\\ln K$ menurun ($K_2 < K_1$). Kesetimbangan terdorong ke arah reaktan.`,
      keyFormulas: [
        { name: 'Bentuk Diferensial Van \'t Hoff', formula: '\\frac{d(\\ln K)}{dT} = \\frac{\\Delta H^\\circ}{R T^2}' },
        { name: 'Persamaan Van \'t Hoff Dua Titik', formula: '\\ln\\left(\\frac{K_2}{K_1}\\right) = -\\frac{\\Delta H^\\circ}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)' },
        { name: 'Persamaan Garis Lurus Van \'t Hoff', formula: '\\ln K = -\\frac{\\Delta H^\\circ}{R}\\frac{1}{T} + \\frac{\\Delta S^\\circ}{R}' },
      ],
    },
    {
      tag: 'proses-reversibel-ireversibel-kerja-maksimum',
      tags: ["proses-reversibel","proses-ireversibel","kerja-maksimum","ekspansi-isotermal"],
      title: 'Konsep Inti 4: Termodinamika Gas: Proses Reversibel vs Ireversibel & Kerja Maksimum',
      summary: 'Ekspansi isotermal, isobarik, isokhorik, dan adiabatik gas ideal, komputasi kerja, serta perbandingan entropi semesta.',
      content: `Dalam termodinamika gas ideal, jalur operasional perubahan keadaan menentukan besarnya kalor ($q$), kerja ($w$), dan perubahan entropi semesta ($\\Delta S_{\\text{semesta}}$).

### 1. Karakteristik 4 Proses Termodinamika Pokok Gas Ideal:

1. **Proses Isotermal ($T = \\text{konstan}, \\Delta T = 0$):**
   Karena energi dalam gas ideal hanya bergantung pada temperatur: $\\Delta U = 0$ dan $\\Delta H = 0$. Maka $q = -w$.
   - *Kerja Ekspansi Reversibel (Sistem Selalu Seimbang dengan $P_{\\text{ext}} = P_{\\text{gas}}$):*
     $$w_{\\text{rev}} = -\\int_{V_1}^{V_2} \\frac{nRT}{V} dV = -nRT \\ln\\left(\\frac{V_2}{V_1}\\right) = -nRT \\ln\\left(\\frac{P_1}{P_2}\\right)$$
   - *Kerja Ekspansi Ireversibel 1 Tahap Melawan Tekanan Luar Konstan ($P_{\\text{ext}}$):*
     $$w_{\\text{irrev}} = -P_{\\text{ext}} (V_2 - V_1)$$
   - **Teorema Kerja Maksimum:** Kerja yang diekstrak pada proses reversibel selalu bernilai maksimum:
     $$|w_{\\text{rev}}| > |w_{\\text{irrev}}|$$

2. **Proses Isobarik ($P = \\text{konstan}, \\Delta P = 0$):**
   - Kerja: $w = -P \\Delta V = -nR\\Delta T$.
   - Kalor: $q_p = \\Delta H = n C_{p,\\text{m}} \\Delta T$.
   - Energi Dalam: $\\Delta U = n C_{v,\\text{m}} \\Delta T$.

3. **Proses Isokhorik ($V = \\text{konstan}, \\Delta V = 0$):**
   - Kerja: $w = 0$.
   - Kalor: $q_v = \\Delta U = n C_{v,\\text{m}} \\Delta T$.
   - Entalpi: $\\Delta H = n C_{p,\\text{m}} \\Delta T$.

4. **Proses Adiabatik ($q = 0$, Sistem Terisolasi Kalor):**
   Dari Hukum I: $\\Delta U = w = n C_{v,\\text{m}} (T_2 - T_1)$.
   - *Hubungan Reversibel Gas Ideal Adiabatik:*
     $$P V^\\gamma = \\text{konstan} \\iff T V^{\\gamma - 1} = \\text{konstan} \\iff T^\\gamma P^{1 - \\gamma} = \\text{konstan}$$
     di mana rasio kapasitas kalor $\\gamma = \\frac{C_p}{C_v} = \\frac{C_v + R}{C_v}$ ($5/3 \\approx 1.67$ untuk gas monoatomik; $7/5 = 1.40$ untuk gas diatomik).

---

### 2. Evaluasi Entropi Semesta pada Proses Reversibel vs Ireversibel:
- **Pada Proses Reversibel:**
  Perubahan entropi sistem dikompensasi secara sempurna oleh perubahan entropi lingkungan:
  $$\\Delta S_{\\text{lingkungan}} = -\\Delta S_{\\text{sistem}} \\implies \\Delta S_{\\text{semesta}} = 0$$
- **Pada Proses Ireversibel (Spontan):**
  Kerja yang hilang terdisipasi sebagai ketidakteraturan tak terpulihkan, menghasilkan entropi semesta positif:
  $$\\Delta S_{\\text{semesta}} = \\Delta S_{\\text{sistem}} + \\Delta S_{\\text{lingkungan}} > 0$$`,
      keyFormulas: [
        { name: 'Kerja Isotermal Reversibel', formula: 'w_{\\text{rev}} = -nRT \\ln\\left(\\frac{V_2}{V_1}\\right)' },
        { name: 'Relasi Kapasitas Kalor Mayer', formula: 'C_{p,\\text{m}} - C_{v,\\text{m}} = R' },
        { name: 'Persamaan Gas Adiabatik Reversibel', formula: 'P V^\\gamma = \\text{konstan}' },
      ],
    },
    {
      tag: 'potensial-kimia-termodinamika-larutan',
      tags: ["potensial-kimia","fugositas","aktivitas-larutan","kesetimbangan-fasa"],
      title: 'Konsep Inti 5: Potensial Kimia ($\\mu$), Fugositas, & Kesetimbangan Multi-Fasa',
      summary: 'Besaran molar parsial, arah aliran partikel spontan antar-fasa, aktivitas larutan, dan kestabilan fasa.',
      content: `Untuk sistem terbuka atau sistem dengan komposisi variabel (seperti reaksi kimia dan kesetimbangan fasa campuran), Gibbs mendefinisikan kuantitas termodinamika fundamental yang dikenal sebagai **Potensial Kimia ($\\mu$)**.

### 1. Definisi Matematis Potensial Kimia:
Potensial kimia komponen ke-$i$ dalam suatu campuran adalah energi bebas Gibbs molar parsial:
$$\\mu_i = \\left(\\frac{\\partial G}{\\partial n_i}\\right)_{T, P, n_{j \\ne i}}$$
Energi bebas Gibbs total sistem campuran multi-komponen:
$$G = \\sum_{i=1}^k n_i \\mu_i$$
Persamaan fundamental termodinamika untuk sistem berkomposisi terbuka:
$$dG = -S dT + V dP + \\sum_{i=1}^k \\mu_i \\, dn_i$$

---

### 2. Kriteria Kesetimbangan Fasa & Arah Aliran Materi Spontan:
Bayangkan suatu zat murni $A$ yang terdistribusi di antara dua fasa, Fasa $\\alpha$ dan Fasa $\\beta$ (misal cair dan uap):
$$dG = (\\mu_A^\\beta - \\mu_A^\\alpha) dn_A$$
- Jika $\\mu_A^\\alpha > \\mu_A^\\beta$: Agar $dG < 0$ (spontan), $dn_A$ harus bernilai positif. Materi secara spontan berpindah dari fasa $\\alpha$ menuju fasa $\\beta$.
- **Kesimpulan Prinsip Termodinamika:** Materi selalu mengalir spontan dari fasa atau daerah dengan **potensial kimia lebih tinggi menuju potensial kimia lebih rendah**.
- **Kondisi Kesetimbangan Fasa:**
  $$\\mu_i^\\alpha = \\mu_i^\\beta = \\mu_i^\\gamma = \\dots$$
  Ketiadaan gradien potensial kimia menandakan tercapainya kesetimbangan fasa termodinamika makroskopis.

---

### 3. Hubungan Potensial Kimia dengan Tekanan Parsial & Aktivitas:
1. **Untuk Gas Ideal Murni:**
   $$\\mu_i = \\mu_i^\\circ + RT \\ln\\left(\\frac{P_i}{P^\\circ}\\right)$$
2. **Untuk Larutan Nyata & Larutan Ideal:**
   $$\\mu_i = \\mu_i^\\circ + RT \\ln a_i$$
   di mana $a_i = \\gamma_i X_i$ ($\gamma_i$ adalah koefisien aktivitas dan $X_i$ adalah fraksi mol). Untuk larutan ideal yang mematuhi Hukum Raoult, $\gamma_i = 1 \\implies a_i = X_i$.`,
      keyFormulas: [
        { name: 'Definisi Potensial Kimia', formula: '\\mu_i = \\left(\\frac{\\partial G}{\\partial n_i}\\right)_{T, P, n_{j \\ne i}}' },
        { name: 'Kriteria Kesetimbangan Fasa', formula: '\\mu_i^\\alpha = \\mu_i^\\beta' },
        { name: 'Potensial Kimia Aktivitas', formula: '\\mu_i = \\mu_i^\\circ + RT \\ln a_i' },
      ],
    },
  ],
  worked_examples: [
    {
      tag: 'soal-disosiasi-n2o4',
      tags: ["soal-osp","disosiasi-n2o4","energi-gibbs","kesetimbangan-gas"],
      title: 'Contoh Soal OSP 1: Disosiasi Termal Gas Dinitrogen Tetroksida & Termodinamika Kesetimbangan Kimia',
      summary: 'Perhitungan kuantitatif perubahan entalpi standar, entropi standar, energi bebas Gibbs standar, tetapan kesetimbangan Kp, dan penentuan temperatur transisi kespontanan.',
      content: `### Masalah Soal:
Dinitrogen tetroksida ($\\ce{N2O4}$) merupakan gas tak berwarna yang mengalami disosiasi endotermik menghasilkan gas nitrogen dioksida ($\\ce{NO2}$) berwarna cokelat kemerahan sesuai reaksi kesetimbangan fasa gas:
$$\\ce{N2O4(g) <=> 2 NO2(g)}$$

Tabel termodinamika standar menyajikan data termokimia pada temperatur $298.15\\text{ K}$ ($25.0^\\circ\\text{C}$) sebagai berikut:
- $\\Delta H_f^\\circ(\\ce{N2O4(g)}) = +9.16\\text{ kJ/mol}$, $S^\\circ(\\ce{N2O4(g)}) = 304.4\\text{ J}/(\\text{mol}\\cdot\\text{K})$
- $\\Delta H_f^\\circ(\\ce{NO2(g)}) = +33.18\\text{ kJ/mol}$, $S^\\circ(\\ce{NO2(g)}) = 240.1\\text{ J}/(\\text{mol}\\cdot\\text{K})$
*(Tetapan gas universal $R = 8.3145\\text{ J}/(\\text{mol}\\cdot\\text{K})$)*.

**Pertanyaan:**
1. Hitung perubahan entalpi reaksi standar ($\\Delta H^\\circ_{\\text{rxn}}$) dan perubahan entropi reaksi standar ($\\Delta S^\\circ_{\\text{rxn}}$) pada $298.15\\text{ K}$!
2. Tentukan nilai perubahan energi bebas Gibbs standar ($\\Delta G^\\circ_{\\text{rxn}}$) pada $298.15\\text{ K}$! Apakah reaksi disosiasi ini berlangsung spontan pada keadaan standar suhu ruang?
3. Hitung nilai tetapan kesetimbangan gas ($K_p$) pada temperatur $298.15\\text{ K}$!
4. Tentukan temperatur ambang batas kespontanan (*crossover temperature*, $T^*$) di mana reaksi disosiasi $\\ce{N2O4}$ mulai beralih menjadi spontan ($\\Delta G^\\circ < 0$) pada tekanan standar $1\\text{ bar}$!

---

### Pembahasan & Langkah Kunci:

**Langkah 1: Menghitung Entalpi Reaksi Standar ($\\Delta H^\\circ_{\\text{rxn}}$)**  
Gunakan Hukum Hess berdasarkan entalpi pembentukan standar ($\\Delta H_f^\\circ$):
$$\\Delta H^\\circ_{\\text{rxn}} = \\sum n \\Delta H_f^\\circ(\\text{produk}) - \\sum m \\Delta H_f^\\circ(\\text{reaktan})$$
$$\\Delta H^\\circ_{\\text{rxn}} = 2 \\times \\Delta H_f^\\circ(\\ce{NO2}) - 1 \\times \\Delta H_f^\\circ(\\ce{N2O4})$$
$$\\Delta H^\\circ_{\\text{rxn}} = 2(33.18\\text{ kJ/mol}) - 9.16\\text{ kJ/mol} = 66.36 - 9.16 = +57.20\\text{ kJ/mol} = \\mathbf{+57200\\text{ J/mol}}$$
*(Nilai positif menandakan bahwa pemutusan ikatan $\\ce{N-N}$ bersifat endotermik)*.

**Langkah 2: Menghitung Entropi Reaksi Standar ($\\Delta S^\\circ_{\\text{rxn}}$)**  
Gunakan data entropi mutlak standar ($S^\\circ$):
$$\\Delta S^\\circ_{\\text{rxn}} = \\sum n S^\\circ(\\text{produk}) - \\sum m S^\\circ(\\text{reaktan})$$
$$\\Delta S^\\circ_{\\text{rxn}} = 2 \\times S^\\circ(\\ce{NO2}) - 1 \\times S^\\circ(\\ce{N2O4})$$
$$\\Delta S^\\circ_{\\text{rxn}} = 2(240.1\\text{ J}/(\\text{mol}\\cdot\\text{K})) - 304.4\\text{ J}/(\\text{mol}\\cdot\\text{K}) = 480.2 - 304.4 = \\mathbf{+175.8\\text{ J}/(\\text{mol}\\cdot\\text{K})}$$
*(Entropi sistem meningkat signifikan karena $1\\text{ mol}$ gas terdisosiasi menghasilkan $2\\text{ mol}$ partikel gas yang lebih bebas bergerak)*.

**Langkah 3: Menghitung Energi Bebas Gibbs Standar ($\\Delta G^\\circ_{\\text{rxn}}$) & Evaluasi Kespontanan**  
Gunakan persamaan fundamental Gibbs-Helmholtz pada $T = 298.15\\text{ K}$:
$$\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$$
$$\\Delta G^\\circ = 57200\\text{ J/mol} - (298.15\\text{ K} \\times 175.8\\text{ J}/(\\text{mol}\\cdot\\text{K}))$$
$$\\Delta G^\\circ = 57200\\text{ J/mol} - 52414.77\\text{ J/mol} = +4785.23\\text{ J/mol} = \\mathbf{+4.79\\text{ kJ/mol}}$$

*Analisis Kespontanan:*  
Karena $\\Delta G^\\circ > 0$ ($+4.79\\text{ kJ/mol}$), reaksi disosiasi $\\ce{N2O4}$ pada keadaan standar ($P = 1\\text{ bar}, T = 298.15\\text{ K}$) **tidak berlangsung spontan ke arah kanan**. Sebaliknya, pembentukan $\\ce{N2O4}$ dari $\\ce{NO2}$ yang berlangsung spontan.

**Langkah 4: Menghitung Tetapan Kesetimbangan $K_p$ dan Temperatur Transisi ($T^*$)**  
1. **Tetapan Kesetimbangan ($K_p$):**
   $$\\Delta G^\\circ = -RT \\ln K_p \\implies \\ln K_p = -\\frac{\\Delta G^\\circ}{RT}$$
   $$\\ln K_p = -\\frac{4785.23\\text{ J/mol}}{8.3145\\text{ J}/(\\text{mol}\\cdot\\text{K}) \\times 298.15\\text{ K}} = -\\frac{4785.23}{2478.97} = -1.9303$$
   $$K_p = e^{-1.9303} = \\mathbf{0.145}$$
   *(Nilai $K_p < 1$ menunjukkan bahwa pada kesetimbangan suhu ruang, reaktan $\\ce{N2O4}$ mendominasi campuran fasa gas).*

2. **Temperatur Ambang Batas Transisi ($T^*$):**
   Kondisi batas kespontanan tercapai saat $\\Delta G^\\circ = 0$:
   $$\\Delta H^\\circ - T^* \\Delta S^\\circ = 0 \\implies T^* = \\frac{\\Delta H^\\circ}{\\Delta S^\\circ}$$
   $$T^* = \\frac{57200\\text{ J/mol}}{175.8\\text{ J}/(\\text{mol}\\cdot\\text{K})} = \\mathbf{325.37\\text{ K}} \\quad (52.22^\\circ\\text{C})$$
   Pada temperatur $T > 325.4\\text{ K}$ ($> 52.2^\\circ\\text{C}$), kontribusi faktor entropi termal ($-T\\Delta S^\\circ$) melampaui defisit entalpi ($\\Delta H^\\circ$), sehingga $\\Delta G^\\circ$ bernilai negatif dan disosiasi $\\ce{N2O4}$ berlangsung spontan.

**Kesimpulan Evaluator Juri:**  
Pada $298.15\\text{ K}$, reaksi memiliki $\\Delta H^\\circ = +57.20\\text{ kJ/mol}$, $\\Delta S^\\circ = +175.8\\text{ J}/(\\text{mol}\\cdot\\text{K})$, $\\Delta G^\\circ = +4.79\\text{ kJ/mol}$, dan $K_p = 0.145$. Reaksi endotermik dengan peningkatan entropi ini mengalami pergeseran menjadi spontan pada temperatur di atas $325.4\\text{ K}$ ($52.2^\\circ\\text{C}$).`,
      keyFormulas: [
        { name: 'Hukum Hess Entalpi', formula: '\\Delta H^\\circ = \\sum n\\Delta H_f^\\circ(\\text{prod}) - \\sum m\\Delta H_f^\\circ(\\text{reak})' },
        { name: 'Energi Gibbs Standar', formula: '\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ' },
        { name: 'Hubungan Gibbs dan Kp', formula: 'K_p = e^{-\\Delta G^\\circ / RT}' },
        { name: 'Temperatur Crossover', formula: 'T^* = \\frac{\\Delta H^\\circ}{\\Delta S^\\circ}' },
      ],
    },
    {
      tag: 'soal-kirchhoff-amonia',
      tags: ["soal-osp","hukum-kirchhoff","kapasitas-kalor-cp","sintesis-amonia"],
      title: 'Contoh Soal OSP 2: Aplikasi Hukum Kirchhoff untuk Entalpi Sintesis Industri Amonia pada Temperatur Tinggi',
      summary: 'Perhitungan perubahan kapasitas kalor reaksi (ΔCp) dan integrasi persamaan Kirchhoff untuk menentukan kalor eksotermik sintesis amonia Haber-Bosch pada suhu 450 °C.',
      content: `### Masalah Soal:
Sintesis industri amonia melalui proses Haber-Bosch melibatkan reaksi fasa gas eksotermik:
$$\\ce{N2(g) + 3 H2(g) -> 2 NH3(g)}$$

Pada temperatur standar $298.15\\text{ K}$, entalpi reaksi standar bernilai $\\Delta H_{298}^\\circ = -92.22\\text{ kJ/mol}$.
Data kapasitas kalor molar pada tekanan tetap ($C_{p,\\text{m}}$) diasumsikan konstan pada rentang temperatur yang ditinjau:
- $C_{p,\\text{m}}(\\ce{N2(g)}) = 29.12\\text{ J}/(\\text{mol}\\cdot\\text{K})$
- $C_{p,\\text{m}}(\\ce{H2(g)}) = 28.82\\text{ J}/(\\text{mol}\\cdot\\text{K})$
- $C_{p,\\text{m}}(\\ce{NH3(g)}) = 35.06\\text{ J}/(\\text{mol}\\cdot\\text{K})$

**Pertanyaan:**
1. Hitung perubahan kapasitas kalor molar reaksi ($\\Delta C_p$) pada tekanan tetap!
2. Gunakan Hukum Kirchhoff untuk menghitung entalpi reaksi standar ($\\Delta H_{723}^\\circ$) pada temperatur kerja reaktor industri amonia yaitu $450.0^\\circ\\text{C}$ ($723.15\\text{ K}$)!
3. Berdasarkan hasil perhitungan tersebut, apakah reaksi sintesis amonia menjadi lebih eksotermik atau kurang eksotermik saat temperatur dinaikkan?
4. Mengapa industri kimia Haber-Bosch mengoperasikan reaktor pada suhu tinggi ($450^\\circ\\text{C}$) padahal secara termodinamika Le Chatelier suhu tinggi menurunkan perolehan amonia? Jelaskan kompromi termodinamika vs kinetika reaksi!

---

### Pembahasan & Langkah Kunci:

**Langkah 1: Menghitung Perubahan Kapasitas Kalor Reaksi ($\\Delta C_p$)**  
Berdasarkan koefisien stoikiometri reaksi:
$$\\Delta C_p = \\sum n C_{p,\\text{m}}(\\text{produk}) - \\sum m C_{p,\\text{m}}(\\text{reaktan})$$
$$\\Delta C_p = 2 \\times C_{p,\\text{m}}(\\ce{NH3}) - \\left[ 1 \\times C_{p,\\text{m}}(\\ce{N2}) + 3 \\times C_{p,\\text{m}}(\\ce{H2}) \\right]$$
$$\\Delta C_p = 2(35.06) - \\left[ 29.12 + 3(28.82) \\right]$$
$$\\Delta C_p = 70.12 - \\left[ 29.12 + 86.46 \\right] = 70.12 - 115.58 = \\mathbf{-45.46\\text{ J}/(\\text{mol}\\cdot\\text{K})}$$

**Langkah 2: Menghitung Entalpi Reaksi pada Suhu $723.15\\text{ K}$ via Hukum Kirchhoff**  
Persamaan Kirchhoff bentuk integral:
$$\\Delta H_{T_2}^\\circ = \\Delta H_{T_1}^\\circ + \\int_{T_1}^{T_2} \\Delta C_p \\, dT$$
Karena $\\Delta C_p$ bernilai konstan:
$$\\Delta H_{T_2}^\\circ = \\Delta H_{T_1}^\\circ + \\Delta C_p (T_2 - T_1)$$

Hitung selisih temperatur:
$$\\Delta T = T_2 - T_1 = 723.15\\text{ K} - 298.15\\text{ K} = 425.0\\text{ K}$$

Konversikan nilai $\\Delta H_{298}^\\circ$ ke Joule:
$$\\Delta H_{298}^\\circ = -92.22\\text{ kJ/mol} = -92220\\text{ J/mol}$$

Substitusikan nilai-nilai ke dalam persamaan:
$$\\Delta H_{723}^\\circ = -92220\\text{ J/mol} + \\left[ -45.46\\text{ J}/(\\text{mol}\\cdot\\text{K}) \\times 425.0\\text{ K} \\right]$$
$$\\Delta H_{723}^\\circ = -92220\\text{ J/mol} - 19320.5\\text{ J/mol} = -111540.5\\text{ J/mol} = \\mathbf{-111.54\\text{ kJ/mol}}$$

**Langkah 3: Analisis Perubahan Sifat Eksotermik Reaksi**  
Bandingkan nilai entalpi kedua temperatur:
- Pada $298.15\\text{ K}$: $\\Delta H^\\circ = -92.22\\text{ kJ/mol}$
- Pada $723.15\\text{ K}$: $\\Delta H^\\circ = -111.54\\text{ kJ/mol}$

Karena nilai $\\Delta H^\circ$ menjadi **lebih negatif** (pelepasan kalor meningkat sebesar $19.32\\text{ kJ/mol}$), reaksi sintesis amonia menjadi **semakin eksotermik** pada temperatur tinggi. Hal ini terjadi secara fisis karena kapasitas kalor reaktan ($115.58\\text{ J/K}$) lebih besar dibanding produk ($70.12\\text{ J/K}$), sehingga reaktan menyimpan lebih banyak energi termal yang kemudian dilepaskan saat bereaksi.

**Langkah 4: Kompromi Termodinamika vs Kinetika Reaksi dalam Industri Kimia**  
1. **Dilema Termodinamika (Le Chatelier):** Reaksi sintesis amonia bersifat eksotermik ($\\Delta H < 0$). Menurut Asas Le Chatelier dan Persamaan Van 't Hoff, kenaikan temperatur akan menggeser kesetimbangan ke arah reaktan (nilai $K_p$ turun drastis), sehingga persen perolehan amonia teoritis pada kesetimbangan justru menurun.
2. **Kebutuhan Kinetika Kimia (Persamaan Arrhenius):** Molekul $\\ce{N2}$ memiliki ikatan kovalen rangkap tiga ($\\ce{N#N}$) yang luar biasa kuat ($D = 945\\text{ kJ/mol}$), menghasilkan energi aktivasi ($E_a$) yang sangat tinggi. Pada suhu rendah, laju pemutusan ikatan $\\ce{N2}$ praktis mendekati nol meskipun dibantu katalis besi.
3. **Solusi Rekayasa:** Temperatur $400-450^\\circ\\text{C}$ dipilih sebagai kompromi optimal (*compromise temperature*): temperatur cukup tinggi agar laju reaksi berjalan cepat mencapai kesetimbangan dalam hitungan detik, sementara penurunan perolehan amonia dikompensasi dengan menerapkan **tekanan sangat tinggi ($150-250\\text{ atm}$)** yang secara termodinamika menggeser kesetimbangan ke arah koefisien gas lebih kecil ($4\\text{ mol gas} \\to 2\\text{ mol gas}$).

**Kesimpulan Evaluator Juri:**  
Perubahan kapasitas kalor reaksi adalah $\\Delta C_p = -45.46\\text{ J}/(\\text{mol}\\cdot\\text{K})$. Pada $450^\\circ\\text{C}$ ($723.15\\text{ K}$), entalpi reaksi menjadi semakin eksotermik mencapai $\\Delta H_{723}^\\circ = -111.54\\text{ kJ/mol}$. Temperatur $450^\\circ\\text{C}$ digunakan di industri untuk mengatasi tingginya energi aktivasi ikatan $\\ce{N#N}$ dengan tekanan tinggi sebagai penyeimbang perolehan produk.`,
    keyFormulas: [
      { name: 'Kapasitas Kalor Reaksi', formula: '\\Delta C_p = \\sum n C_p(\\text{prod}) - \\sum m C_p(\\text{reak})' },
      { name: 'Persamaan Kirchhoff', formula: '\\Delta H_{T_2}^\\circ = \\Delta H_{T_1}^\\circ + \\Delta C_p (T_2 - T_1)' },
    ],
  },
  {
    tag: 'soal-van-t-hoff-caco3',
      tags: ["soal-osp","van-t-hoff","dekomposisi-caco3","tekanan-dekomposisi"],
    title: 'Contoh Soal OSP 3: Analisis Dekomposisi Kalsium Karbonat via Persamaan Van \'t Hoff & Plot Termodinamika',
    summary: 'Aplikasi persamaan Van \'t Hoff dua titik untuk mengekstraksi entalpi reaksi kalsinasi, entropi reaksi standar, dan temperatur dekomposisi kapur tohor.',
    content: `### Masalah Soal:
Kalsinasi termal batu kapur ($\\ce{CaCO3}$) untuk memproduksi kapur tohor ($\\ce{CaO}$) merupakan salah satu proses termokimia tertua dalam industri metalurgi dan semen:
$$\\ce{CaCO3(s) <=> CaO(s) + CO2(g)}$$

Pengukuran tekanan disosiasi kesetimbangan gas karbon dioksida ($P_{\\ce{CO2}}$) pada dua temperatur tinggi di laboratorium menghasilkan data sebagai berikut:
- Pada temperatur $T_1 = 1000.0\\text{ K}$ ($726.85^\\circ\\text{C}$), tekanan kesetimbangan terukur sebesar $P_{\\ce{CO2}} = 0.0500\\text{ atm}$.
- Pada temperatur $T_2 = 1100.0\\text{ K}$ ($826.85^\\circ\\text{C}$), tekanan kesetimbangan terukur sebesar $P_{\\ce{CO2}} = 0.3500\\text{ atm}$.
*(Tetapan gas $R = 8.3145\\text{ J}/(\\text{mol}\\cdot\\text{K})$, tekanan standar $P^\\circ = 1.000\\text{ atm}$)*.

**Pertanyaan:**
1. Tuliskan ekspresi tetapan kesetimbangan $K_p$ untuk reaksi dekomposisi heterogen tersebut!
2. Hitung perubahan entalpi standar reaksi ($\\Delta H^\\circ_{\\text{rxn}}$) dengan menggunakan Persamaan Van 't Hoff dua titik!
3. Tentukan perubahan entropi standar reaksi ($\\Delta S^\\circ_{\\text{rxn}}$) pada rentang temperatur tersebut!
4. Hitung temperatur dekomposisi normal ($T_{\\text{decomp}}$), yaitu temperatur pada saat tekanan disosiasi $\\ce{CO2}$ tepat mencapai tekanan atmosfer lingkungan ($P_{\\ce{CO2}} = 1.000\\text{ atm}$)!

---

### Pembahasan & Langkah Kunci:

**Langkah 1: Menentukan Ekspresi Tetapan Kesetimbangan $K_p$**  
Pada kesetimbangan heterogen, fasa padat murni ($\\ce{CaCO3(s)}$ dan $\\ce{CaO(s)}$) memiliki aktivitas termodinamika bernilai tepat $1$ ($a_{\\text{padat}} = 1$). Maka tetapan kesetimbangan gas ideal dinyatakan secara murni oleh tekanan parsial $\\ce{CO2}$:
$$K_p = \\frac{a_{\\ce{CaO}} \\cdot P_{\\ce{CO2}}}{a_{\\ce{CaCO3}}} = \\frac{1 \\cdot P_{\\ce{CO2}}}{1} = P_{\\ce{CO2}}$$
Sehingga:
- Pada $T_1 = 1000.0\\text{ K} \\implies K_{p,1} = 0.0500$
- Pada $T_2 = 1100.0\\text{ K} \\implies K_{p,2} = 0.3500$

**Langkah 2: Menghitung Entalpi Reaksi Standar ($\\Delta H^\\circ_{\\text{rxn}}$) via Persamaan Van 't Hoff**  
Bentuk integral Persamaan Van 't Hoff dua titik:
$$\\ln\\left(\\frac{K_{p,2}}{K_{p,1}}\\right) = -\\frac{\\Delta H^\\circ}{R} \\left( \\frac{1}{T_2} - \\frac{1}{T_1} \\right)$$

Hitung rasio tetapan kesetimbangan:
$$\\ln\\left(\\frac{0.3500}{0.0500}\\right) = \\ln(7.000) = 1.94591$$

Hitung selisih invers temperatur:
$$\\frac{1}{T_2} - \\frac{1}{T_1} = \\frac{1}{1100.0} - \\frac{1}{1000.0} = 0.00090909 - 0.00100000 = -9.0909 \\times 10^{-5}\\text{ K}^{-1}$$

Selesaikan untuk mencari entalpi reaksi:
$$1.94591 = -\\frac{\\Delta H^\\circ}{8.3145} \\times (-9.0909 \\times 10^{-5})$$
$$\\Delta H^\\circ = \\frac{1.94591 \\times 8.3145}{9.0909 \\times 10^{-5}} = \\frac{16.1793}{9.0909 \\times 10^{-5}} = 177972\\text{ J/mol} = \\mathbf{+177.97\\text{ kJ/mol}} \\approx +178.0\\text{ kJ/mol}$$
*(Nilai positif menegaskan bahwa kalsinasi kapur merupakan proses endotermik kuat yang memerlukan pasokan kalor intensif).*

**Langkah 3: Menghitung Perubahan Entropi Standar Reaksi ($\\Delta S^\\circ_{\\text{rxn}}$)**  
Gunakan data pada kondisi $T_1 = 1000.0\\text{ K}$:
$$\\Delta G_{1000}^\\circ = -R T_1 \\ln K_{p,1}$$
$$\\Delta G_{1000}^\\circ = -8.3145\\text{ J}/(\\text{mol}\\cdot\\text{K}) \\times 1000.0\\text{ K} \\times \\ln(0.0500)$$
$$\\Delta G_{1000}^\\circ = -8314.5 \\times (-2.99573) = +24908\\text{ J/mol}$$

Dari relasi $\\Delta G^\\circ = \\Delta H^\\circ - T \\Delta S^\\circ$:
$$\\Delta S^\\circ = \\frac{\\Delta H^\\circ - \\Delta G_{1000}^\\circ}{T_1} = \\frac{177972\\text{ J/mol} - 24908\\text{ J/mol}}{1000.0\\text{ K}} = \\frac{153064}{1000.0} = \\mathbf{+153.06\\text{ J}/(\\text{mol}\\cdot\\text{K})}$$
*(Peningkatan entropi sebesar $+153\\text{ J/(mol}\\cdot\\text{K)}$ selaras dengan terlepasnya $1\\text{ mol}$ gas $\\ce{CO2}$ dari kisi kristal padat).*

**Langkah 4: Menghitung Temperatur Dekomposisi Normal ($T_{\\text{decomp}}$)**  
Dekomposisi berlangsung spontan ke atmosfer terbuka ketika tekanan uap $\\ce{CO2}$ mencapai $1.000\\text{ atm}$ ($K_p = 1.000$).
Karena $\\ln(1.000) = 0$, maka $\\Delta G^\\circ = -RT \\ln(1) = 0$:
$$\\Delta H^\\circ - T_{\\text{decomp}} \\Delta S^\\circ = 0$$
$$T_{\\text{decomp}} = \\frac{\\Delta H^\\circ}{\\Delta S^\\circ} = \\frac{177972\\text{ J/mol}}{153.064\\text{ J}/(\\text{mol}\\cdot\\text{K})} = \\mathbf{1162.7\\text{ K}} \\quad (889.6^\\circ\\text{C})$$
*(Hasil perhitungan analitis ini sangat presisi mencerminkan data teknik industri semen, di mana batu kapur mengalami kalsinasi spontan sempurna pada temperatur sekitar $890^\\circ\\text{C}$)*.

**Kesimpulan Evaluator Juri:**  
Dekomposisi batu kapur memiliki entalpi reaksi $\\Delta H^\\circ = +178.0\\text{ kJ/mol}$ dan entropi reaksi $\\Delta S^\\circ = +153.1\\text{ J}/(\\text{mol}\\cdot\\text{K})$. Temperatur kalsinasi normal pada tekanan atmosfer bebas terhitung sebesar $1162.7\\text{ K}$ ($889.6^\\circ\\text{C}$).`,
      keyFormulas: [
        { name: 'Tetapan Kesetimbangan Heterogen', formula: 'K_p = P_{\\ce{CO2}}' },
        { name: 'Persamaan Van \'t Hoff', formula: '\\ln\\left(\\frac{K_2}{K_1}\\right) = -\\frac{\\Delta H^\\circ}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)' },
        { name: 'Suhu Dekomposisi Normal', formula: 'T_{\\text{decomp}} = \\frac{\\Delta H^\\circ}{\\Delta S^\\circ}' },
      ],
    },
    {
      tag: 'soal-ekspansi-gas-termodinamika',
      tags: ["soal-osn","ekspansi-gas","kerja-reversibel-ireversibel","entropi-semesta"],
      title: 'Contoh Soal OSN 4: Perbandingan Kerja Reversibel vs Ireversibel & Bukti Termodinamika Kenaikan Entropi Semesta',
      summary: 'Komputasi komparatif kerja maksimum isotermal reversibel vs ekspansi bebas satu tahap, pembuktian teorema dS_semesta = 0 (reversibel) dan dS_semesta > 0 (ireversibel).',
      content: `### Masalah Soal:
Sebanyak $2.00\\text{ mol}$ gas ideal monoatomik ($C_{v,\\text{m}} = \\frac{3}{2}R$) mula-mula menempati volume $V_1 = 5.00\\text{ L}$ pada temperatur konstan $T = 300.0\\text{ K}$. Gas tersebut kemudian diekspansikan secara isotermal hingga mencapai volume akhir $V_2 = 20.0\\text{ L}$ melalui dua lintasan proses yang berbeda:
- **Jalur A:** Ekspansi isotermal dilakukan secara **reversibel** (kuasistatis bertahap lambat di mana tekanan dalam gas selalu seimbang dengan tekanan luar).
- **Jalur B:** Ekspansi isotermal dilakukan secara **ireversibel 1 tahap** melawan tekanan luar konstan $P_{\\text{ext}} = 1.00\\text{ atm}$ ($101325\\text{ Pa}$) hingga volume mencapai $20.0\\text{ L}$.
*(Tetapan gas universal $R = 8.3145\\text{ J}/(\\text{mol}\\cdot\\text{K})$, $1\\text{ L}\\cdot\\text{atm} = 101.325\\text{ J}$)*.

**Pertanyaan:**
1. Hitung kerja ($w_{\\text{rev}}$) dan kalor ($q_{\\text{rev}}$) pada Jalur A!
2. Hitung kerja ($w_{\\text{irrev}}$) dan kalor ($q_{\\text{irrev}}$) pada Jalur B!
3. Tentukan perubahan entropi sistem ($\\Delta S_{\\text{sistem}}$) untuk Jalur A dan Jalur B!
4. Hitung perubahan entropi lingkungan ($\\Delta S_{\\text{lingkungan}}$) dan entropi total semesta ($\\Delta S_{\\text{semesta}}$) untuk masing-masing jalur, serta buktikan secara termodinamika Hukum II Termodinamika!

---

### Pembahasan & Langkah Kunci:

**Langkah 1: Menghitung Kerja dan Kalor pada Jalur A (Isotermal Reversibel)**  
Karena gas ideal mengalami proses isotermal ($T = \\text{konstan} \\implies \\Delta T = 0$):
$$\\Delta U = n C_{v,\\text{m}} \\Delta T = 0$$
Berdasarkan Hukum I Termodinamika ($\\Delta U = q + w = 0 \\implies q = -w$).

Kerja ekspansi reversibel:
$$w_{\\text{rev}} = -n R T \\ln\\left(\\frac{V_2}{V_1}\\right)$$
$$w_{\\text{rev}} = -2.00\\text{ mol} \\times 8.3145\\text{ J}/(\\text{mol}\\cdot\\text{K}) \\times 300.0\\text{ K} \\times \\ln\\left(\\frac{20.0\\text{ L}}{5.00\\text{ L}}\\right)$$
$$w_{\\text{rev}} = -4988.7 \\times \\ln(4.000) = -4988.7 \\times 1.38629 = \\mathbf{-6915.8\\text{ J}} \\quad (-6.92\\text{ kJ})$$
*(Tanda negatif menunjukkan sistem melakukan kerja maksimum terhadap lingkungan)*.

Kalor yang diserap dari reservoir lingkungan:
$$q_{\\text{rev}} = -w_{\\text{rev}} = \\mathbf{+6915.8\\text{ J}} \\quad (+6.92\\text{ kJ})$$

**Langkah 2: Menghitung Kerja dan Kalor pada Jalur B (Isotermal Ireversibel 1 Tahap)**  
Pada ekspansi ireversibel melawan tekanan luar konstan $P_{\\text{ext}} = 1.00\\text{ atm}$:
$$w_{\\text{irrev}} = -P_{\\text{ext}} (V_2 - V_1)$$
$$\\Delta V = 20.0\\text{ L} - 5.00\\text{ L} = 15.0\\text{ L}$$
$$w_{\\text{irrev}} = -1.00\\text{ atm} \\times 15.0\\text{ L} = -15.0\\text{ L}\\cdot\\text{atm}$$
Konversikan ke Joule ($1\\text{ L}\\cdot\\text{atm} = 101.325\\text{ J}$):
$$w_{\\text{irrev}} = -15.0 \\times 101.325\\text{ J} = \\mathbf{-1519.9\\text{ J}} \\quad (-1.52\\text{ kJ})$$

Karena proses tetap berlangsung secara isotermal ($\\Delta U = 0$):
$$q_{\\text{irrev}} = -w_{\\text{irrev}} = \\mathbf{+1519.9\\text{ J}} \\quad (+1.52\\text{ kJ})$$

*Verifikasi Teorema Kerja Maksimum:*  
$$|w_{\\text{rev}}| = 6915.8\\text{ J} \\gg |w_{\\text{irrev}}| = 1519.9\\text{ J}$$
Kerja yang berhasil diekstrak pada ekspansi reversibel bernilai lebih dari $4.5$ kali lebih besar dibanding ekspansi spontan ireversibel!

**Langkah 3: Menghitung Perubahan Entropi Sistem ($\\Delta S_{\\text{sistem}}$)**  
Entropi ($S$) merupakan **fungsi keadaan** (*state function*). Karena keadaan awal ($T = 300\\text{ K}, V_1 = 5\\text{ L}$) dan keadaan akhir ($T = 300\\text{ K}, V_2 = 20\\text{ L}$) pada Jalur A dan Jalur B identik, maka nilai $\\Delta S_{\\text{sistem}}$ **harus sama persis** untuk kedua jalur!
Perhitungan $\\Delta S_{\\text{sistem}}$ wajib dievaluasi melalui lintasan reversibel:
$$\\Delta S_{\\text{sistem}} = \\frac{q_{\\text{rev}}}{T} = \\frac{+6915.8\\text{ J}}{300.0\\text{ K}} = \\mathbf{+23.05\\text{ J/K}}$$

**Langkah 4: Evaluasi Entropi Lingkungan dan Entropi Semesta**  
Lingkungan dianggap sebagai tandon kalor (*thermal reservoir*) raksasa yang menyerap/melepas kalor secara reversibel pada temperatur konstan $T_{\\text{lingk}} = 300.0\\text{ K}$:
$$\\Delta S_{\\text{lingkungan}} = -\\frac{q_{\\text{aktual}}}{T_{\\text{lingk}}}$$

1. **Untuk Jalur A (Proses Reversibel):**
   $$\\Delta S_{\\text{lingkungan}} = -\\frac{q_{\\text{rev}}}{300.0\\text{ K}} = -\\frac{+6915.8\\text{ J}}{300.0\\text{ K}} = -23.05\\text{ J/K}$$
   $$\\Delta S_{\\text{semesta}} = \\Delta S_{\\text{sistem}} + \\Delta S_{\\text{lingkungan}} = +23.05 - 23.05 = \\mathbf{0.00\\text{ J/K}}$$
   *(Terbukti: Proses reversibel tidak menghasilkan peningkatan entropi total semesta).*

2. **Untuk Jalur B (Proses Ireversibel):**
   $$\\Delta S_{\\text{lingkungan}} = -\\frac{q_{\\text{irrev}}}{300.0\\text{ K}} = -\\frac{+1519.9\\text{ J}}{300.0\\text{ K}} = -5.07\\text{ J/K}$$
   $$\\Delta S_{\\text{semesta}} = \\Delta S_{\\text{sistem}} + \\Delta S_{\\text{lingkungan}} = +23.05 - 5.07 = \\mathbf{+17.98\\text{ J/K}} > 0$$
   *(Terbukti secara matematis: Proses ireversibel alami selalu menghasilkan entropi semesta positif $\\Delta S_{\\text{semesta}} > 0$, memvalidasi Hukum II Termodinamika).*

**Kesimpulan Evaluator Juri:**  
Kerja ekspansi reversibel ($|w_{\\text{rev}}| = 6.92\\text{ kJ}$) terbukti menghasilkan kerja maksimum dibandingkan ekspansi ireversibel ($|w_{\\text{irrev}}| = 1.52\\text{ kJ}$). Perubahan entropi sistem identik bernilai $+23.05\\text{ J/K}$, namun entropi semesta bernilai nol pada proses reversibel ($\\Delta S_{\\text{univ}} = 0$) dan meningkat drastis pada proses ireversibel ($\\Delta S_{\\text{univ}} = +17.98\\text{ J/K}$).`,
    keyFormulas: [
      { name: 'Kerja Isotermal Reversibel Gas Ideal', formula: 'w_{\\text{rev}} = -nRT \\ln\\left(\\frac{V_2}{V_1}\\right)' },
      { name: 'Kerja Ekspansi Ireversibel', formula: 'w_{\\text{irrev}} = -P_{\\text{ext}}\\Delta V' },
      { name: 'Entropi Semesta Reversibel', formula: '\\Delta S_{\\text{semesta}} = 0' },
      { name: 'Entropi Semesta Ireversibel', formula: '\\Delta S_{\\text{semesta}} > 0' },
    ],
  },
  {
    tag: 'soal-ellingham-metalurgi-kroll',
      tags: ["soal-osn","diagram-ellingham","metalurgi-kroll","ekstraksi-titanium"],
    title: 'Contoh Soal OSN 5: Termodinamika Metalurgi Ekstraksi Titanium via Proses Kroll & Kopling Reaksi Ellingham',
    summary: 'Rasionalisasi termodinamika mengapa reduksi langsung TiO2 oleh karbon tidak fisibel pada temperatur wajar, dan penyelesaiannya melalui kopling karboklorinasi pembentukan TiCl4.',
    content: `### Masalah Soal:
Titanium ($\\ce{Ti}$) adalah logam struktural modern dengan rasio kekuatan terhadap massa yang sangat istimewa. Namun, bijih rutil titanium dioksida ($\\ce{TiO2}$) memiliki energi kisi yang sangat stabil sehingga reduksi langsung dengan reduktor karbon konvensional mengalami rintangan termodinamika berat.

Tabel termodinamika pada temperatur tinggi $T = 1000.0\\text{ K}$ menyajikan data reaksi berikut:
1. **Reduksi Langsung Karbotermal:**
   $$\\ce{TiO2(s) + C(s) -> Ti(s) + CO2(g)}$$
   Data pada $1000\\text{ K}$: $\\Delta H^\\circ = +534.5\\text{ kJ/mol}$, $\\Delta S^\\circ = +178.2\\text{ J}/(\\text{mol}\\cdot\\text{K})$.
2. **Tahap 1 Proses Kroll (Karboklorinasi Menghasilkan $\\ce{TiCl4}$):**
   $$\\ce{TiO2(s) + 2 C(s) + 2 Cl2(g) -> TiCl4(g) + 2 CO(g)}$$
   Data pada $1000\\text{ K}$: $\\Delta H^\\circ = -80.4\\text{ kJ/mol}$, $\\Delta S^\\circ = +142.5\\text{ J}/(\\text{mol}\\cdot\\text{K})$.
3. **Tahap 2 Proses Kroll (Reduksi Magnesiometrik $\\ce{TiCl4}$):**
   $$\\ce{TiCl4(g) + 2 Mg(l) -> Ti(s) + 2 MgCl2(l)}$$
   Data pada $1000\\text{ K}$: $\\Delta H^\\circ = -483.2\\text{ kJ/mol}$, $\\Delta S^\\circ = -135.8\\text{ J}/(\\text{mol}\\cdot\\text{K})$.
*(Tetapan gas $R = 8.3145\\text{ J}/(\\text{mol}\\cdot\\text{K})$)*.

**Pertanyaan:**
1. Hitung $\\Delta G^\\circ$ reduksi langsung karbotermal $\\ce{TiO2}$ pada $1000.0\\text{ K}$ dan tentukan temperatur teoritis minimum agar reaksi tersebut dapat berlangsung spontan!
2. Jelaskan bahaya metalurgi mengapa reduksi langsung dengan karbon pada temperatur ekstrem ($> 1500^\\circ\\text{C}$) tidak boleh dilakukan dalam produksi titanium murni!
3. Hitung $\\Delta G^\\circ$ untuk reaksi karboklorinasi (Tahap 1 Kroll) pada $1000.0\\text{ K}$ dan tentukan nilai tetapan kesetimbangannya ($K_p$)!
4. Hitung $\\Delta G^\\circ$ untuk reaksi reduksi dengan magnesium cair (Tahap 2 Kroll) pada $1000.0\\text{ K}$ dan jelaskan prinsip kopling termodinamika yang mendasari kesuksesan Proses Kroll!

---

### Pembahasan & Langkah Kunci:

**Langkah 1: Menghitung $\\Delta G^\\circ$ Reduksi Langsung Karbotermal & Suhu Ambang Batas**  
Gunakan persamaan Gibbs-Helmholtz pada $T = 1000.0\\text{ K}$:
$$\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$$
$$\\Delta G^\\circ = 534500\\text{ J/mol} - (1000.0\\text{ K} \\times 178.2\\text{ J}/(\\text{mol}\\cdot\\text{K}))$$
$$\\Delta G^\\circ = 534500 - 178200 = \\mathbf{+356300\\text{ J/mol}} = \\mathbf{+356.3\\text{ kJ/mol}} \\gg 0$$

*Temperatur Minimum Spontanitas ($T^*$):*  
Agar reaksi menjadi spontan ($\\Delta G^\\circ < 0$):
$$T^* = \\frac{\\Delta H^\\circ}{\\Delta S^\\circ} = \\frac{534500\\text{ J/mol}}{178.2\\text{ J}/(\\text{mol}\\cdot\\text{K})} = \\mathbf{2999.4\\text{ K}} \\approx 3000\\text{ K} \\quad (2726^\\circ\\text{C})$$
Temperatur $3000\\text{ K}$ sangat mustahil dicapai secara ekonomis pada tungku industri dan melampaui jauh titik leleh titanium murni ($1668^\\circ\\text{C}$ / $1941\\text{ K}$).

**Langkah 2: Bahaya Metalurgi Reduksi Karbotermal Bersuhu Tinggi**  
Bila campuran $\\ce{TiO2}$ dan kokas dipaksa dipanaskan pada suhu sangat tinggi ($> 1500^\\circ\\text{C}$), atom titanium yang terbentuk langsung bereaksi dengan karbon membentuk senyawa interstisial refraktori:
$$\\ce{TiO2(s) + 3 C(s) -> TiC(s) + 2 CO(g)}$$
Titanium karbida ($\\ce{TiC}$) membentuk larutan padat interstisial dalam kisi titanium yang menyebabkan logam menjadi sangat getas, rapuh, dan kehilangan sifat elastisitas mekaniknya, sehingga tidak dapat ditempa menjadi material kedirgantaraan.

**Langkah 3: Menghitung $\\Delta G^\circ$ dan $K_p$ Karboklorinasi (Tahap 1 Proses Kroll)**  
Pada $T = 1000.0\\text{ K}$:
$$\\Delta G^\\circ_{\\text{tahap 1}} = \\Delta H^\\circ - T\\Delta S^\\circ = -80400\\text{ J/mol} - (1000.0\\text{ K} \\times 142.5\\text{ J}/(\\text{mol}\\cdot\\text{K}))$$
$$\\Delta G^\\circ_{\\text{tahap 1}} = -80400 - 142500 = \\mathbf{-222900\\text{ J/mol}} = \\mathbf{-222.9\\text{ kJ/mol}} < 0$$
*(Reaksi berlangsung sangat spontan karena didorong oleh faktor entalpi eksotermik dan kenaikan entropi).*

Hitung nilai tetapan kesetimbangan $K_p$:
$$\\Delta G^\\circ = -RT \\ln K_p \\implies \\ln K_p = -\\frac{-222900}{8.3145 \\times 1000.0} = +\\frac{222900}{8314.5} = +26.8086$$
$$K_p = e^{+26.8086} = \\mathbf{4.39 \\times 10^{11}}$$
Nilai $K_p$ yang spektakuler membuktikan bahwa klorinasi dengan bantuan karbon mengonversi bijih $\\ce{TiO2}$ secara kuantitatif sempurna menjadi gas $\\ce{TiCl4}$ yang mudah dimurnikan melalui distilasi fraksional.

**Langkah 4: Menghitung $\\Delta G^\circ$ Reduksi Magnesiometrik (Tahap 2 Proses Kroll)**  
Pada $T = 1000.0\\text{ K}$:
$$\\Delta G^\\circ_{\\text{tahap 2}} = \\Delta H^\\circ - T\\Delta S^\\circ = -483200\\text{ J/mol} - (1000.0\\text{ K} \\times (-135.8\\text{ J}/(\\text{mol}\\cdot\\text{K})))$$
$$\\Delta G^\\circ_{\\text{tahap 2}} = -483200 - (-135800) = -483200 + 135800 = \\mathbf{-347400\\text{ J/mol}} = \\mathbf{-347.4\\text{ kJ/mol}} < 0$$

*Prinsip Kopling Termodinamika William J. Kroll:*  
- Reaksi reduksi langsung karbotermal memiliki defisit energi bebas raksasa ($\\Delta G^\\circ = +356.3\\text{ kJ/mol}$).
- Proses Kroll memecah rintangan ini menjadi dua tahap independen yang keduanya didorong oleh afinitas termodinamika yang sangat masif:
  - Tahap 1 (Karboklorinasi): $\\Delta G^\\circ = -222.9\\text{ kJ/mol}$
  - Tahap 2 (Reduksi Magnesiometrik): $\\Delta G^\\circ = -347.4\\text{ kJ/mol}$
- Akumulasi total kedua tahap menghasilkan dorongan termodinamika netto sebesar $\\Delta G^\\circ_{\\text{total}} = -570.3\\text{ kJ/mol}$, menghasilkan spons titanium murni berkualitas tinggi tanpa kontaminasi karbida.

**Kesimpulan Evaluator Juri:**  
Reduksi langsung $\\ce{TiO2}$ oleh karbon tidak fisibel pada temperatur wajar karena $\\Delta G^\\circ = +356.3\\text{ kJ/mol}$ (memerlukan $T > 3000\\text{ K}$). Proses Kroll memecahkan masalah ini dengan cerdas melalui kopling reaksi karboklorinasi ($\\Delta G^\\circ = -222.9\\text{ kJ/mol}, K_p = 4.39 \\times 10^{11}$) dan reduksi magnesiometrik ($\\Delta G^\\circ = -347.4\\text{ kJ/mol}$).`,
    keyFormulas: [
      { name: 'Kespontanan Gibbs Paduan', formula: '\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ' },
      { name: 'Tetapan Kesetimbangan Karboklorinasi', formula: 'K_p = e^{-\\Delta G^\\circ / RT}' },
      { name: 'Prinsip Kopling Termodinamika', formula: '\\Delta G_{\\text{netto}}^\\circ = \\sum \\Delta G_i^\\circ < 0' },
    ],
  },
],
},

  // ==========================================
  // TOPIK 5: KESETIMBANGAN KIMIA & LARUTAN
  // ==========================================
  {
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
        summary: 'Dasar termodinamika keadaan setimbang dinamis, formulasi hukum aksi massa Guldberg-Waage, hubungan interkonversi Kc, Kp, dan Kx, serta perlakuan fasa murni.',
        content: `Keadaan kesetimbangan kimia tercapai saat laju reaksi maju ($r_{\\text{fwd}}$) persis sama dengan laju reaksi balik ($r_{\\text{rev}}$), sehingga konsentrasi makroskopis seluruh spesi reaktan dan produk konstan terhadap waktu tanpa ada perubahan netto pada sistem tertutup.

### 1. Hukum Aksi Massa & Tetapan Kesetimbangan ($K_c$ dan $K_p$):
Untuk reaksi umum reversibel fasa gas atau larutan:
$$a\\ce{A} + b\\ce{B} <=> c\\ce{C} + d\\ce{D}$$
Berdasarkan termodinamika potensial kimia ($\\Delta G = 0$), tetapan kesetimbangan konsentrasi molar ($K_c$) didefinisikan sebagai:
$$K_c = \\frac{[\\ce{C}]^c [\\ce{D}]^d}{[\\ce{A}]^a [\\ce{B}]^b}$$
Untuk reaksi fasa gas ideal, tetapan kesetimbangan dinyatakan melalui tekanan parsial ($K_p$):
$$K_p = \\frac{P_{\\ce{C}}^c \\cdot P_{\\ce{D}}^d}{P_{\\ce{A}}^a \\cdot P_{\\ce{B}}^b}$$

---

### 2. Hubungan Interkonversi $K_p$, $K_c$, dan Fraksi Mol $K_x$:
Dengan mensubstitusikan persamaan gas ideal $P_i = \\left(\\frac{n_i}{V}\\right)RT = [i]RT$ ke dalam ekspresi $K_p$:
$$K_p = K_c (RT)^{\\Delta n_g}$$
di mana:
- $\\Delta n_g = (c + d) - (a + b)$ adalah selisih jumlah koefisien stoikiometri gas produk dikurangi reaktan.
- $R = 0.08206\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$ atau $8.314\\text{ J}/(\\text{mol}\\cdot\\text{K})$ (bergantung pada satuan tekanan $P$).
- $T$ adalah temperatur mutlak dalam Kelvin.

Jika dinyatakan dalam fraksi mol ($x_i = P_i / P_{\\text{tot}}$):
$$K_p = K_x (P_{\\text{tot}})^{\\Delta n_g} \\iff K_x = K_p (P_{\\text{tot}})^{-\\Delta n_g}$$

---

### 3. Aturan Kesetimbangan Heterogen & Nilai Aktivitas Fasa Murni:
Pada reaksi heterogen yang melibatkan lebih dari satu fasa zat, zat murni fasa padat ($s$) dan cairan murni ($l$) memiliki aktivitas termodinamika bernilai tepat satu ($a_i = 1$). Oleh karena itu, konsentrasi padatan dan cairan murni tidak dicantumkan ke dalam rumus $K$:
$$\\ce{CaCO3(s) <=> CaO(s) + CO2(g)} \\implies K_c = [\\ce{CO2}], \\quad K_p = P_{\\ce{CO2}}$$
$$\\ce{NH4HS(s) <=> NH3(g) + H2S(g)} \\implies K_p = P_{\\ce{NH3}} \\cdot P_{\\ce{H2S}}$$

---

### 4. Kuosien Reaksi ($Q$) & Prediksi Kespontanan Arah Pergeseran:
Kuosien reaksi ($Q$) dihitung menggunakan persamaan yang sama persis dengan $K$, tetapi menggunakan konsentrasi sesaat pada keadaan non-kesetimbangan:
- **$Q < K$**: Rasio produk terhadap reaktan masih terlalu kecil. Reaksi spontan berlangsung ke arah kanan ($\\to$) untuk membentuk lebih banyak produk.
- **$Q = K$**: Sistem berada dalam kesetimbangan dinamis sempurna ($\\Delta G = 0$).
- **$Q > K$**: Produk terbentuk berlebih. Reaksi spontan bergeser ke arah kiri ($\\leftarrow$) mengonsumsi produk.`,
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
        content: `Asas Le Chatelier menyatakan: *Bila suatu sistem pada kesetimbangan diberikan suatu gangguan (aksi), sistem akan merespon sedemikian rupa untuk meminimalkan pengaruh gangguan tersebut dengan cara menggeser posisi kesetimbangan (reaksi).*

### 1. Pengaruh Konsentrasi Reaktan / Produk:
- Penambahan zat reaktan atau pengurangan zat produk menyebabkan $Q < K$, sehingga sistem merespon dengan bergeser ke kanan ($\\to$).
- Penambahan zat produk atau penarikan reaktan menyebabkan $Q > K$, memaksa sistem bergeser ke kiri ($\\leftarrow$).
- Nilai numerik tetapan kesetimbangan $K$ **tidak berubah** oleh perturbasi konsentrasi pada $T$ konstan.

---

### 2. Pengaruh Tekanan dan Volume (Sistem Gas):
Untuk reaksi dengan $\\Delta n_g \\neq 0$:
- **Volume diperkecil (Tekanan diperbesar):** Kerapatan partikel meningkat. Sistem bergeser ke arah sisi yang memiliki jumlah mol gas ($\\sum n_g$) lebih sedikit guna menurunkan tekanan parsial total.
- **Volume diperbesar (Tekanan diperkecil):** Sistem bergeser ke arah sisi dengan jumlah mol gas lebih banyak.
- Jika $\\Delta n_g = 0$ (contoh: $\\ce{H2(g) + I2(g) <=> 2HI(g)}$), perubahan volume atau tekanan total **sama sekali tidak menggeser kesetimbangan**.

---

### 3. Efek Penambahan Gas Inert (Gas Mulia / $\\ce{Ar}, \\ce{He}, \\ce{N2}$):
Dampak penambahan gas inert sangat bergantung pada batasan kondisi wadah:
1. **Penambahan Gas Inert pada Volume Tetap ($V$ konstan):**
   Tekanan total sistem meningkat ($P_{\\text{tot}} = P_{\\text{reaktan}} + P_{\\text{inert}}$). Namun, karena volume wadah tidak berubah, konsentrasi molar ($n_i / V$) dan tekanan parsial masing-masing gas reaktan ($P_i = [i]RT$) **tetap tidak berubah**. Oleh karena itu:
   $$\\text{Tidak ada pergeseran kesetimbangan sama sekali!}$$
2. **Penambahan Gas Inert pada Tekanan Tetap ($P$ konstan, piston bergerak):**
   Penambahan gas inert memaksa volume wadah membesar ($V$ naik) agar tekanan total tetap konstan. Hal ini mengencerkan seluruh gas reaktif sehingga tekanan parsialnya turun ($P_i = x_i P$). Akibatnya:
   $$\\text{Sistem bergeser ke arah yang memiliki koefisien mol gas lebih besar (efek ekspansi volume).}$$

---

### 4. Pengaruh Suhu & Perubahan Nilai Tetapan Kesetimbangan ($K$):
Suhu adalah satu-satunya variabel yang dapat mengubah nilai numerik tetapan kesetimbangan $K$:
- **Reaksi Eksotermik ($\\Delta H^\\circ < 0$, pelepasan kalor):** Kalor dapat diposisikan di sisi produk. Peningkatan suhu ($T$ naik) menggeser reaksi ke kiri $\\implies K$ menurun.
- **Reaksi Endotermik ($\\Delta H^\\circ > 0$, penyerapan kalor):** Peningkatan suhu menggeser reaksi ke kanan $\\implies K$ meningkat.
Kuantifikasi matematis respon $K$ terhadap suhu diatur oleh Persamaan Isochor Van 't Hoff:
$$\\frac{d \\ln K}{dT} = \\frac{\\Delta H^\\circ}{RT^2} \\iff \\ln\\left(\\frac{K_2}{K_1}\\right) = -\\frac{\\Delta H^\\circ}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)$$

---

### 5. Pengaruh Katalisator:
Katalisator menurunkan energi aktivasi reaksi maju ($E_{a,\\text{fwd}}$) dan reaksi balik ($E_{a,\\text{rev}}$) dengan nilai penurunan yang persis sama ($\\Delta E_a$). Akibatnya:
- Katalisator mempercepat tercapainya keadaan kesetimbangan secara kinetik.
- Katalisator **tidak mengubah posisi kesetimbangan**, tidak mengubah persen hasil reaksi, dan **tidak mengubah nilai tetapan kesetimbangan $K$**.`,
        keyFormulas: [
          { name: 'Isochor Van t Hoff', formula: '\\ln\\left(\\frac{K_2}{K_1}\\right) = -\\frac{\\Delta H^\\circ}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)' },
        ],
      },
      {
        tag: 'teori-asam-basa-autoionisasi-air',
        tags: ['teori-bronsted-lowry', 'asam-basa-lewis', 'autoionisasi-air-kw', 'skala-ph-poh', 'kekuatan-asam-relatif'],
        title: 'Prasyarat 3: Teori Asam-Basa (Brønsted-Lowry & Lewis), Autoionisasi Air (Kw), dan Skala pH-pOH Presisi',
        summary: 'Kajian konsep transfer proton Brønsted, donor pasangan elektron Lewis, tetapan autoionisasi air Kw terhadap temperatur, serta modulasi skala logaritmik pH.',
        content: `Konsep asam-basa modern berevolusi dari batasan pelarut air Arrhenius menuju transfer partikel universal Brønsted-Lowry dan interaksi orbital donor-akseptor Lewis.

### 1. Teori Asam-Basa Brønsted-Lowry & Pasangan Konjugasi:
- **Asam:** Spesi donor proton ($\\ce{H+}$).
- **Basa:** Spesi akseptor proton ($\\ce{H+}$).
Setiap asam mendonorkan proton menghasilkan basa konjugasinya, dan sebaliknya:
$$\\ce{\\underset{\\text{Asam 1}}{HA} + \\underset{\\text{Basa 2}}{B} <=> \\underset{\\text{Basa Konjugasi 1}}{A^-} + \\underset{\\text{Asam Konjugasi 2}}{BH+}}$$
Kekuatan asam berbanding terbalik dengan kekuatan basa konjugasinya. Asam sangat kuat (seperti $\\ce{HClO4}, \\ce{HCl}$) memiliki basa konjugasi yang sangat lemah (stabil, inert, tidak mengalami hidrolisis).

---

### 2. Teori Asam-Basa Lewis (Donor-Akseptor Pasangan Elektron Bebas):
- **Asam Lewis:** Spesi akseptor pasangan elektron (memiliki orbital kosong berenergi rendah / LUMO), contoh: $\\ce{BF3}, \\ce{AlCl3}, \\ce{Fe^3+}, \\ce{CO2}$.
- **Basa Lewis:** Spesi donor pasangan elektron (memiliki pasangan elektron bebas pada HOMO), contoh: $\\ce{NH3}, \\ce{H2O}, \\ce{OH-}, \\ce{CN-}$.
Pembentukan ikatan kovalen koordinasi (aduk asam-basa):
$$\\ce{BF3 + :NH3 -> F3B<-NH3}$$

---

### 3. Autoionisasi Air ($K_w$) & Ketergantungannya terhadap Temperatur:
Air murni mengalami autoionisasi spontan (autoprotolisis):
$$\\ce{2H2O(l) <=> H3O+(aq) + OH-(aq)} \\quad \\Delta H^\\circ > 0 \\text{ (Endotermik)}$$
Tetapan kesetimbangan autoionisasi air dinyatakan sebagai hasil kali ion air ($K_w$):
$$K_w = [\\ce{H3O+}][\\ce{OH-}] = [\\ce{H+}][\\ce{OH-}]$$
Karena proses autoprotolisis bersifat endotermik ($\\Delta H^\\circ \\approx +55.8\\text{ kJ/mol}$), nilai $K_w$ naik drastis seiring kenaikan temperatur:
- Pada $0^\\circ\\text{C}$: $K_w = 0.114 \\times 10^{-14} \\implies \\text{pH netral} = 7.47$.
- Pada $25.0^\\circ\\text{C}$: $K_w = 1.008 \\times 10^{-14} \\approx 1.00 \\times 10^{-14} \\implies \\text{pH netral} = 7.00$.
- Pada $37.0^\\circ\\text{C}$ (Fisiologis manusia): $K_w = 2.40 \\times 10^{-14} \\implies \\text{pH netral} = -\\log\\sqrt{2.40 \\times 10^{-14}} = 6.81$.
- Pada $100.0^\\circ\\text{C}$: $K_w = 5.13 \\times 10^{-13} \\implies \\text{pH netral} = 6.14$.

*Catatan Kritis Olimpiade:* Pada suhu $37^\\circ\\text{C}$, air murni dengan pH 6.81 adalah netral sempurna, bukan asam, karena $[\\ce{H+}] = [\\ce{OH-}]$.

---

### 4. Skala Logaritmik pH, pOH, dan Hubungan pKa - pKb:
Definisi operasional Sørensen:
$$\\text{pH} = -\\log [\\ce{H+}], \\quad \\text{pOH} = -\\log [\\ce{OH-}]$$
Hubungan fundamental pada $25^\\circ\\text{C}$:
$$\\text{pH} + \\text{pOH} = \\text{p}K_w = 14.00$$
Untuk pasangan asam-basa konjugasi $\\ce{HA / A-}$ dalam air:
$$\\ce{HA(aq) <=> H+(aq) + A-(aq)} \\quad (K_a = \\frac{[\\ce{H+}][\\ce{A-}]}{[\\ce{HA}]})$$
$$\\ce{A-(aq) + H2O(l) <=> HA(aq) + OH-(aq)} \\quad (K_b = \\frac{[\\ce{HA}][\\ce{OH-}]}{[\\ce{A-}]})$$
Mengalikan kedua tetapan kesetimbangan:
$$K_a \\times K_b = K_w \\iff \\text{p}K_a + \\text{p}K_b = \\text{p}K_w = 14.00 \\quad (\\text{pada } 25^\\circ\\text{C})$$`,
        keyFormulas: [
          { name: 'Hasil Kali Ion Air', formula: 'K_w = [\\ce{H+}][\\ce{OH-}]' },
          { name: 'Hubungan Ka dan Kb Konjugasi', formula: 'K_a \\cdot K_b = K_w \\iff \\text{p}K_a + \\text{p}K_b = \\text{p}K_w' },
        ],
      },
    ],
    core_concepts: [
      {
        tag: 'asam-basa-poliprotik-spesiasi-alpha',
        tags: ['asam-basa-poliprotik', 'spesiasi-larutan', 'fraksi-alfa-spesies', 'garam-amfiprotik', 'asam-diprotik-triprotik'],
        title: 'Konsep Inti 1: Spesiasi Asam-Basa Poliprotik, Fraksi Mol Spesies Alpha (α), & pH Garam Amfiprotik',
        summary: 'Penurunan fraksi distribusi spesies alfa (α), kurva spesiasi pH, neraca massa-muatan, dan formulasi eksak pH garam amfiprotik NaHA.',
        content: `Asam poliprotik melepaskan proton secara bertahap dengan tetapan disosiasi bertingkat yang nilainya menurun secara drastis ($K_{a1} \\gg K_{a2} \\gg K_{a3}$) karena semakin sulit menarik proton bermuatan positif dari anion yang muatan negatifnya semakin bertambah besar.

### 1. Disosiasi Bertingkat Asam Diprotik ($\\ce{H2A}$):
Tahap 1: $\\ce{H2A <=> H+ + HA-} \\quad K_{a1} = \\frac{[\\ce{H+}][\\ce{HA-}]}{[\\ce{H2A}]}$
Tahap 2: $\\ce{HA- <=> H+ + A^2-} \\quad K_{a2} = \\frac{[\\ce{H+}][\\ce{A^2-}]}{[\\ce{HA-}]}$

Neraca Massa Total Analit ($C_{\\text{tot}}$):
$$C_{\\text{tot}} = [\\ce{H2A}] + [\\ce{HA-}] + [\\ce{A^2-}]$$

---

### 2. Fraksi Distribusi Spesies Alpha ($\\alpha$):
Fraksi keberadaan masing-masing spesi ($\\alpha_0, \\alpha_1, \\alpha_2$) sebagai fungsi dari konsentrasi $[\\ce{H+}]$ dapat diturunkan dengan menyatakan seluruh spesi dalam $[\\ce{H2A}]$:
$$[\\ce{HA-}] = \\frac{K_{a1}[\\ce{H2A}]}{[\\ce{H+}]}, \\quad [\\ce{A^2-}] = \\frac{K_{a1}K_{a2}[\\ce{H2A}]}{[\\ce{H+}]^2}$$
Penyebut distribusi polinomial ($D$):
$$D = [\\ce{H+}]^2 + K_{a1}[\\ce{H+}] + K_{a1}K_{a2}$$
Maka fraksi spesies ditentukan secara independen dari konsentrasi total:
$$\\alpha_0 = \\frac{[\\ce{H2A}]}{C_{\\text{tot}}} = \\frac{[\\ce{H+}]^2}{D}$$
$$\\alpha_1 = \\frac{[\\ce{HA-}]}{C_{\\text{tot}}} = \\frac{K_{a1}[\\ce{H+}]}{D}$$
$$\\alpha_2 = \\frac{[\\ce{A^2-}]}{C_{\\text{tot}}} = \\frac{K_{a1}K_{a2}}{D}$$
*Sifat Utama:* $\\alpha_0 + \\alpha_1 + \\alpha_2 = 1.00$. Pada $\\text{pH} = \\frac{\\text{p}K_{a1} + \\text{p}K_{a2}}{2}$, fraksi $\\alpha_1$ mencapai nilai puncak maksimum.

---

### 3. Penurunan Eksak pH Garam Amfiprotik ($\\ce{NaHA}$):
Anion amfiprotik $\\ce{HA-}$ dapat bertindak sebagai asam (melepas $\\ce{H+}$ via $K_{a2}$) maupun sebagai basa (menerima $\\ce{H+}$ via $K_b = K_w / K_{a1}$).
Persamaan neraca muatan sistem:
$$[\\ce{Na+}] + [\\ce{H+}] = [\\ce{HA-}] + 2[\\ce{A^2-}] + [\\ce{OH-}]$$
Persamaan neraca massa:
$$[\\ce{Na+}] = C = [\\ce{H2A}] + [\\ce{HA-}] + [\\ce{A^2-}]$$
Mengeliminasi $[\\ce{Na+}]$ dan $[\\ce{HA-}]$:
$$[\\ce{H2A}] + [\\ce{H+}] = [\\ce{A^2-}] + [\\ce{OH-}]$$
Substitusi ekspresi $K_{a1}, K_{a2},$ dan $K_w$:
$$\\frac{[\\ce{H+}][\\ce{HA-}]}{K_{a1}} + [\\ce{H+}] = \\frac{K_{a2}[\\ce{HA-}]}{[\\ce{H+}]} + \\frac{K_w}{[\\ce{H+}]}$$
Kalikan kedua ruas dengan $[\\ce{H+}]$ dan kumpulkan suku $[\\ce{H+}]^2$:
$$[\\ce{H+}]^2 \\left(1 + \\frac{[\\ce{HA-}]}{K_{a1}}\\right) = K_{a2}[\\ce{HA-}] + K_w$$
$$[\\ce{H+}] = \\sqrt{\\frac{K_{a1}(K_{a2}[\\ce{HA-}] + K_w)}{K_{a1} + [\\ce{HA-}]}}$$
Untuk larutan garam amfiprotik dengan konsentrasi wajar ($C \\gg K_{a1}$ dan $K_{a2}C \\gg K_w$), dapat diasumsikan $[\\ce{HA-}] \\approx C$:
$$[\\ce{H+}] \\approx \\sqrt{\\frac{K_{a1}K_{a2}C}{C}} = \\sqrt{K_{a1}K_{a2}}$$
$$\\text{pH} \\approx \\frac{\\text{p}K_{a1} + \\text{p}K_{a2}}{2}$$
Formula ini membuktikan bahwa pH spesi amfiprotik dalam batas aproksimasi standar **sama sekali tidak bergantung pada konsentrasi analit**.`,
        keyFormulas: [
          { name: 'Fraksi Alfa Asam Diprotik', formula: '\\alpha_1 = \\frac{K_{a1}[\\ce{H+}]}{[\\ce{H+}]^2 + K_{a1}[\\ce{H+}] + K_{a1}K_{a2}}' },
          { name: 'pH Spesi Amfiprotik Eksak', formula: '[\\ce{H+}] = \\sqrt{\\frac{K_{a1}K_{a2}C + K_{a1}K_w}{K_{a1} + C}}' },
          { name: 'Aproksimasi pH Amfiprotik', formula: '\\text{pH} \\approx \\frac{\\text{p}K_{a1} + \\text{p}K_{a2}}{2}' },
        ],
      },
      {
        tag: 'larutan-penyangga-kapasitas-van-slyke',
        tags: ['larutan-penyangga', 'henderson-hasselbalch', 'kapasitas-buffer', 'indeks-van-slyke', 'buffer-fisiologis'],
        title: 'Konsep Inti 2: Sistem Penyangga Kompleks, Persamaan Henderson-Hasselbalch, & Indeks Kapasitas Buffer Van Slyke',
        summary: 'Formulasi matematis larutan buffer, indeks kapasitas penyangga diferensial Van Slyke (β), batas operasional buffer, dan mekanisme penyangga terbuka.',
        content: `Larutan penyangga (buffer) adalah larutan yang mampu mempertahankan pH relatif konstan terhadap penambahan sejumlah kecil asam kuat, basa kuat, maupun pengenceran oleh pelarut.

### 1. Formulasi Henderson-Hasselbalch:
Untuk sistem asam lemah $\\ce{HA}$ dan basa konjugasinya $\\ce{A-}$:
$$K_a = \\frac{[\\ce{H+}][\\ce{A-}]}{[\\ce{HA}]} \\iff [\\ce{H+}] = K_a \\cdot \\frac{[\\ce{HA}]}{[\\ce{A-}]}$$
Mengambil nilai $-\\log_{10}$ pada kedua sisi menghasilkan persamaan Henderson-Hasselbalch:
$$\\text{pH} = \\text{p}K_a + \\log\\left(\\frac{[\\ce{A-}]}{[\\ce{HA}]}\\right) = \\text{p}K_a + \\log\\left(\\frac{n_{\\ce{A-}}}{n_{\\ce{HA}}}\\right)$$
Karena volume total larutan saling membagi habis, rasio konsentrasi identik dengan rasio mol analit.

---

### 2. Kapasitas Penyangga Kuantitatif (Indeks Van Slyke $\\beta$):
Kapasitas buffer ($\\beta$) didefinisikan secara diferensial oleh Donald Van Slyke sebagai jumlah mol asam kuat ($C_a$) atau basa kuat ($C_b$) per liter yang diperlukan untuk mengubah pH larutan sebesar satu unit:
$$\\beta = \\frac{dC_b}{d\\text{pH}} = -\\frac{dC_a}{d\\text{pH}}$$
Berdasarkan hukum kesetimbangan kimia dan neraca muatan air, nilai $\\beta$ diturunkan menjadi:
$$\\beta = 2.303 \\left( [\\ce{H+}] + [\\ce{OH-}] + \\frac{C_{\\text{tot}} K_a [\\ce{H+}]}{(K_a + [\\ce{H+}])^2} \\right)$$
di mana $C_{\\text{tot}} = [\\ce{HA}] + [\\ce{A-}]$.
- Suku $([\\ce{H+}] + [\\ce{OH-}])$ menunjukkan kapasitas buffer intrinsik pelarut air murni pada pH sangat rendah ($<2$) dan sangat tinggi ($>12$).
- Suku $\\frac{C_{\\text{tot}} K_a [\\ce{H+}]}{(K_a + [\\ce{H+}])^2}$ menunjukkan kontribusi pasangan asam-basa konjugasi.

**Kondisi Kapasitas Maksimum ($\\beta_{\\text{max}}$):**
Nilai $\\beta$ mencapai titik ekstrem maksimum saat $[\\ce{H+}] = K_a$, yang berarti $[\\ce{A-}] = [\\ce{HA}]$ dan $\\text{pH} = \\text{p}K_a$:
$$\\beta_{\\text{max}} = 2.303 \\left( \\frac{C_{\\text{tot}} K_a^2}{(2K_a)^2} \\right) = \\frac{2.303}{4} C_{\\text{tot}} \\approx 0.576 \\cdot C_{\\text{tot}}$$
*Aturan Desain Praktis:* Rentang kerja efektif larutan penyangga adalah $\\text{p}K_a \\pm 1.0$. Di luar rentang ini, rasio basa/asam melampaui $10:1$ atau $1:10$, menyebabkan kapasitas penyangga turun drastis di bawah $33\\%$ dari nilai maksimumnya.

---

### 3. Sistem Buffer Terbuka (*Open System*) vs Tertutup (*Closed System*):
Dalam tabung tertutup, jumlah mol total $C_{\\text{tot}} = [\\ce{H2CO3}] + [\\ce{HCO3-}]$ adalah konstan.
Namun dalam sistem fisiologis plasma darah (suhu $37^\\circ\\text{C}, \\text{pH} = 7.40, \\text{p}K_{a1} = 6.10$), rasio $[\\ce{HCO3-}] / [\\ce{H2CO3}] \\approx 20:1$.
Meskipun rasio ini berada di luar rentang ideal $\\text{p}K_a \\pm 1$, sistem penyangga darah beroperasi sebagai **sistem terbuka**:
$$\\ce{H+(aq) + HCO3-(aq) <=> H2CO3(aq) <=> CO2(g, paru-paru) + H2O(l)}$$
Gas $\\ce{CO2}$ yang terbentuk secara instan dibuang melalui ventilasi pernapasan paru-paru, menjaga konsentrasi $[\\ce{H2CO3}]$ terlarut selalu konstan ($1.2\\text{ mmol/L}$) melalui hukum Henry ($P_{\\ce{CO2}} = 40\\text{ mmHg}$), menghasilkan kapasitas netralisasi asam yang hampir tak terbatas.`,
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
        content: `Titrasi asidimetri-alkalimetri melibatkan penambahan titran secara terukur ke dalam analit hingga tercapai titik ekuivalensi stoikiometri, yang ditandai secara visual oleh perubahan warna indikator pada titik akhir titrasi.

### 1. Empat Wilayah Utama Kurva Titrasi Asam Lemah ($\\ce{HA}$) dengan Basa Kuat ($\\ce{NaOH}$):
Misalkan $V_a\\text{ mL}$ asam lemah $\\ce{HA}$ ($C_a\\text{ M}$) dititrasi dengan $\\ce{NaOH}$ ($C_b\\text{ M}$):

1. **Titik Awal Sebelum Titrasi ($V_b = 0$):**
   Larutan hanya mengandung asam lemah $\\ce{HA}$.
   $$[\\ce{H+}] \\approx \\sqrt{K_a \\cdot C_a} \\implies \\text{pH} = \\frac{1}{2}(\\text{p}K_a - \\log C_a)$$
2. **Daerah Penyangga Pra-Ekuivalen ($0 < V_b < V_{eq}$):**
   Sebagian $\\ce{HA}$ dinetralkan menjadi ion $\\ce{A-}$, membentuk sistem buffer:
   $$\\text{pH} = \\text{p}K_a + \\log\\left(\\frac{V_b \\cdot C_b}{V_a C_a - V_b C_b}\\right)$$
   *Titik Setengah Ekuivalensi ($V_b = \\frac{1}{2} V_{eq}$):* Jumlah $\\ce{A-}$ sama persis dengan sisa $\\ce{HA} \\implies \\mathbf{\\text{pH} = \\text{p}K_a}$.
3. **Titik Ekuivalensi Stoikiometri ($V_b = V_{eq} = \\frac{V_a C_a}{C_b}$):**
   Seluruh $\\ce{HA}$ bereaksi sempurna membentuk garam $\\ce{NaA}$. Larutan bersifat basa akibat hidrolisis anion asetat:
   $$\\ce{A-(aq) + H2O(l) <=> HA(aq) + OH-(aq)} \\quad (K_b = \\frac{K_w}{K_a})$$
   $$C_{\\text{garam}} = \\frac{V_a C_a}{V_a + V_{eq}}$$
   $$[\\ce{OH-}] = \\sqrt{K_b \\cdot C_{\\text{garam}}} = \\sqrt{\\frac{K_w}{K_a} \\cdot C_{\\text{garam}}}$$
   $$\\text{pH} = 7 + \\frac{1}{2}\\text{p}K_a + \\frac{1}{2}\\log C_{\\text{garam}} > 7.00$$
4. **Daerah Pasca-Ekuivalen ($V_b > V_{eq}$):**
   Kelebihan ion hidroksida dari titran basa kuat mendominasi pH larutan (efek ion $\\ce{OH-}$ bebas jauh melampaui hidrolisis garam):
   $$[\\ce{OH-}] = \\frac{(V_b - V_{eq})C_b}{V_a + V_b} \\implies \\text{pOH} = -\\log[\\ce{OH-}], \\quad \\text{pH} = 14 - \\text{pOH}$$

---

### 2. Teori Kesetimbangan Indikator Asam-Basa & Kesalahan Titrasi:
Indikator visual adalah asam organik lemah ($\\ce{HIn}$) yang memiliki warna berbeda dari basa konjugasinya ($\\ce{In-}$):
$$\\ce{\\underset{\\text{Warna A}}{HIn(aq)} <=> H+(aq) + \\underset{\\text{Warna B}}{In-(aq)}} \\quad K_{\\text{In}} = \\frac{[\\ce{H+}][\\ce{In-}]}{[\\ce{HIn}]}$$
Mata manusia dapat mendeteksi perubahan warna dominan saat salah satu spesi 10 kali lebih pekat dari yang lain:
$$\\text{Trayek pH Indikator} = \\text{p}K_{\\text{In}} \\pm 1.0$$
- **Prinsip Seleksi Indikator:** Nilai $\\text{p}K_{\\text{In}}$ indikator harus berada tepat di tengah lonjakan vertikal kurva titrasi pada titik ekuivalensi.
- Pada titrasi asam lemah dengan basa kuat, titik ekuivalen berada pada $\\text{pH } 8 - 9$. Indikator ideal adalah **Fenolftalein (PP)** ($pK_{\\text{In}} \\approx 9.4$, trayek $8.2 - 10.0$).
- Penggunaan Metil Jingga ($pK_{\\text{In}} \\approx 3.7$, trayek $3.1 - 4.4$) akan menyebabkan kesalahan titrasi (*titration error*) negatif yang masif karena berubah warna jauh sebelum titik ekuivalensi tercapai.`,
        keyFormulas: [
          { name: 'pH Titik Setengah Ekuivalen', formula: '\\text{pH} = \\text{p}K_a' },
          { name: 'pH Titik Ekuivalen Titrasi', formula: '\\text{pH} = 7 + \\frac{1}{2}\\text{p}K_a + \\frac{1}{2}\\log C_{\\text{garam}}' },
        ],
      },
      {
        tag: 'ksp-kelarutan-efek-ion-senama',
        tags: ['ksp-kelarutan', 'hasil-kali-kelarutan', 'pengaruh-ion-senama', 'kuosien-pengendapan-qsp', 'kelarutan-molar'],
        title: 'Konsep Inti 4: Termodinamika Kelarutan, Hasil Kali Kelarutan (Ksp), & Penekanan Efek Ion Senama',
        summary: 'Termodinamika disosiasi garam sukar larut, perbandingan kelarutan molar antar stoikiometri kisi, dan supresi kelarutan oleh keberadaan ion sejenis.',
        content: `Kelarutan zat padat ionik dalam air diatur oleh kesetimbangan heterogen dinamis antara kisi kristal padat yang tidak larut dan ion-ion terhidrasi dalam larutan jenuh.

### 1. Tetapan Hasil Kali Kelarutan ($K_{sp}$):
Untuk garam biner maupun poliatomik terlarut sedikit:
$$\\ce{A_x B_y(s) <=> x A^{y+}(aq) + y B^{x-}(aq)}$$
Karena padatan murni memiliki aktivitas $a_{\\ce{A_x B_y}} = 1$:
$$K_{sp} = [\\ce{A^{y+}}]^x [\\ce{B^{x-}}]^y$$

---

### 2. Hubungan Kelarutan Molar ($s$) dengan $K_{sp}$:
Jika kelarutan molar garam adalah $s\\text{ mol/L}$:
- **Tipe $AB$ (contoh $\\ce{AgCl}, \\ce{BaSO4}$):**
  $[\\ce{A+}] = s, [\\ce{B-}] = s \\implies K_{sp} = s^2 \\iff s = \\sqrt{K_{sp}}$
- **Tipe $AB_2$ atau $A_2B$ (contoh $\\ce{PbCl2}, \\ce{Ag2CrO4}, \\ce{CaF2}$):**
  $[\\ce{A^2+}] = s, [\\ce{B-}] = 2s \\implies K_{sp} = (s)(2s)^2 = 4s^3 \\iff s = \\sqrt[3]{\\frac{K_{sp}}{4}}$
- **Tipe $AB_3$ atau $A_3B$ (contoh $\\ce{Fe(OH)3}, \\ce{Al(OH)3}$):**
  $[\\ce{A^3+}] = s, [\\ce{B-}] = 3s \\implies K_{sp} = (s)(3s)^3 = 27s^4 \\iff s = \\sqrt[4]{\\frac{K_{sp}}{27}}$
- **Tipe $A_2B_3$ atau $A_3B_2$ (contoh $\\ce{Bi2S3}, \\ce{Ca3(PO4)2}$):**
  $[\\ce{A^3+}] = 2s, [\\ce{B^2-}] = 3s \\implies K_{sp} = (2s)^2(3s)^3 = 108s^5 \\iff s = \\sqrt[5]{\\frac{K_{sp}}{108}}$

*Peringatan Olimpiade:* Jangan pernah membandingkan kelarutan dua garam hanya dari nilai $K_{sp}$ jika tipe stoikiometrinya berbeda! Misalnya, $\\ce{AgCl}$ ($K_{sp} = 1.8 \\times 10^{-10} \\implies s = 1.34 \\times 10^{-5}\\text{ M}$) lebih sukar larut dibandingkan $\\ce{Ag2CrO4}$ ($K_{sp} = 1.1 \\times 10^{-12} \\implies s = 6.5 \\times 10^{-5}\\text{ M}$), meskipun nilai numerik $K_{sp}(\\ce{Ag2CrO4})$ jauh lebih kecil.

---

### 3. Penekanan Kelarutan oleh Efek Ion Senama (*Common Ion Effect*):
Bila ke dalam larutan jenuh garam ditambahkan ion yang sama dari sumber elektrolit kuat lain, menurut Asas Le Chatelier kesetimbangan akan bergeser ke kiri, menurunkan kelarutan molar garam secara drastis.
*Contoh:* Kelarutan $\\ce{AgCl}$ ($K_{sp} = 1.8 \\times 10^{-10}$) dalam larutan $\\ce{NaCl}$ $0.10\\text{ M}$:
$$[\\ce{Cl-}] = 0.10 + s' \\approx 0.10\\text{ M}$$
$$K_{sp} = [\\ce{Ag+}][\\ce{Cl-}] = s'(0.10) = 1.8 \\times 10^{-10} \\implies s' = 1.8 \\times 10^{-9}\\text{ M}$$
Kelarutan $\\ce{AgCl}$ turun drastis hampir 10.000 kali lipat dibanding dalam air murni ($1.34 \\times 10^{-5}\\text{ M}$).`,
        keyFormulas: [
          { name: 'Ksp Tipe AB2', formula: 'K_{sp} = 4s^3' },
          { name: 'Ksp Tipe A2B3', formula: 'K_{sp} = 108s^5' },
        ],
      },
      {
        tag: 'pengendapan-bertingkat-kelarutan-ph-kompleks',
        tags: ['pengendapan-bertingkat', 'kelarutan-bergantung-ph', 'ion-kompleks-kf', 'pemisahan-kation', 'kelarutan-kondisional'],
        title: 'Konsep Inti 5: Pengendapan Bertingkat (Fraksional), Kelarutan Bergantung pH, & Kesetimbangan Ion Kompleks (Kf)',
        summary: 'Pemisahan kation selektif via pengendapan bertingkat, kelarutan garam basa/asam terhadap pH larutan, dan pelarutan endapan melalui pembentukan ligan koordinasi kompleks.',
        content: `Dalam analisis kualitatif dan kuantitatif olimpiade, manipulasi kelarutan dilakukan melalui tiga teknik esensial: pengendapan bertingkat, kontrol keasaman pelarut, dan penambahan ligan pengompleks.

### 1. Pengendapan Bertingkat (Fraksional):
Bila suatu reagen pengendap diteteskan perlahan ke dalam larutan yang mengandung campuran beberapa kation, kation yang memerlukan konsentrasi reagen terendah untuk mencapai $Q_{sp} = K_{sp}$ akan mengendap terlebih dahulu secara selektif.
Pemisahan analitis kuantitatif dianggap sempurna jika kation pertama telah mengendap lebih dari $99.9\\%$ sebelum kation kedua mulai mengendap.

---

### 2. Kelarutan yang Bergantung pada pH:
Jika anion penyusun garam sukar larut merupakan basa konjugasi dari asam lemah (misal $\\ce{F-}, \\ce{CO3^2-}, \\ce{C2O4^2-}, \\ce{S^2-}, \\ce{OH-}$), penambahan asam kuat (penurunan pH) akan mengonsumsi anion tersebut melalui protonasi:
$$\\ce{CaF2(s) <=> Ca^2+(aq) + 2F-(aq)}$$
$$\\ce{F-(aq) + H+(aq) <=> HF(aq)}$$
Penurunan konsentrasi $[\\ce{F-}]$ menggeser kesetimbangan pelarutan ke kanan sehingga kelarutan garam meningkat secara eksponensial terhadap penurunan pH.
Kelarutan kondisional ($s$) dapat dihitung menggunakan fraksi mol alfa ($\\alpha_1$):
$$[\\ce{F-}]_{\\text{bebas}} = \\alpha_1 \\cdot 2s = \\left(\\frac{K_a}{[\\ce{H+}] + K_a}\\right) 2s$$
$$K_{sp} = [\\ce{Ca^2+}][\\ce{F-}]^2 = (s)\\left(2s \\cdot \\frac{K_a}{[\\ce{H+}] + K_a}\\right)^2 \\implies s = \\sqrt[3]{\\frac{K_{sp}}{4 \\alpha_1^2}}$$

Sebaliknya, garam dari asam kuat seperti $\\ce{AgCl}$ (di mana $\\ce{Cl-}$ adalah basa konjugasi dari asam kuat $\\ce{HCl}$) **tidak terpengaruh** oleh penambahan asam karena ion klorida tidak mengalami protonasi yang signifikan.

---

### 3. Pelarutan Endapan via Pembentukan Ion Kompleks ($K_f$):
Banyak endapan sukar larut dapat larut kembali jika ditambahkan ligan pembentuk senyawa koordinasi (seperti $\\ce{NH3}, \\ce{CN-}, \\ce{S2O3^2-}, \\ce{EDTA^4-}$):
$$\\ce{AgCl(s) <=> Ag+(aq) + Cl-(aq)} \\quad K_{sp} = 1.8 \\times 10^{-10}$$
$$\\ce{Ag+(aq) + 2NH3(aq) <=> [Ag(NH3)2]+(aq)} \\quad K_f = 1.7 \\times 10^7$$
Reaksi pelarutan keseluruhan:
$$\\ce{AgCl(s) + 2NH3(aq) <=> [Ag(NH3)2]+(aq) + Cl-(aq)}$$
Tetapan kesetimbangan pelarutan gabungan ($K$):
$$K = K_{sp} \\times K_f = (1.8 \\times 10^{-10})(1.7 \\times 10^7) = 3.06 \\times 10^{-3}$$
Karena nilai $K$ yang cukup besar, endapan putih $\\ce{AgCl}$ larut sempurna dalam amonia encer membentuk ion diamina perak(I).`,
        keyFormulas: [
          { name: 'Tetapan Kesetimbangan Pelarutan Kompleks', formula: 'K = K_{sp} \\times K_f' },
          { name: 'Kelarutan Bergantung pH', formula: 's = \\sqrt[x+y]{\\frac{K_{sp}}{x^x y^y \\cdot (\\alpha_{\\text{anion}})^y}}' },
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
$$\\frac{[\\ce{HCO3-}]}{[\\ce{CO2(aq)}]} = 10^{1.30} \\approx 19.95 \\approx 20.0$$
Maka konsentrasi $\\ce{CO2(aq)}$ awal:
$$[\\ce{CO2(aq)}]_0 = \\frac{24.0\\text{ mmol/L}}{19.95} = 1.203\\text{ mmol/L}$$

**Langkah 2: Perhitungan pH pada Sistem Tertutup**
Reaksi netralisasi penambahan $5.0\\text{ mmol/L}$ ion $\\ce{H+}$:
$$\\ce{H+ + HCO3- -> CO2(aq) + H2O}$$
- Konsentrasi $[\\ce{HCO3-}]$ berkurang: $24.0 - 5.0 = 19.0\\text{ mmol/L}$.
- Dalam sistem tertutup, $\\ce{CO2}$ terakumulasi: $[\\ce{CO2(aq)}] = 1.203 + 5.0 = 6.203\\text{ mmol/L}$.
Hitung pH baru:
$$\\text{pH} = 6.10 + \\log\\left(\\frac{19.0}{6.203}\\right) = 6.10 + \\log(3.063) = 6.10 + 0.486 = 6.59$$
*(Penurunan dari 7.40 ke 6.59 akan berakibat fatal bagi manusia / asidosis metabolik akut).*

**Langkah 3: Perhitungan pH pada Sistem Terbuka (Homeostasis Pulmonal)**
Pada sistem terbuka fisiologis, pernapasan yang lebih cepat (hiperventilasi) menghembuskan kelebihan gas $\\ce{CO2}$ sehingga $[\\ce{CO2(aq)}]$ dipertahankan konstan pada $1.203\\text{ mmol/L}$:
- $[\\ce{HCO3-}] = 19.0\\text{ mmol/L}$.
- $[\\ce{CO2(aq)}] = 1.203\\text{ mmol/L}$.
Hitung pH akhir:
$$\\text{pH} = 6.10 + \\log\\left(\\frac{19.0}{1.203}\\right) = 6.10 + \\log(15.79) = 6.10 + 1.20 = 7.30$$
Penurunan pH hanya dari $7.40$ ke $7.30$, masih berada dalam batas fisiologis aman kehidupan.

**Kesimpulan Evaluator Juri:**
Rasio molar fisiologis adalah $20:1$ dengan $[\\ce{CO2}] = 1.20\\text{ mmol/L}$. Pada sistem tertutup pH anjlok drastis ke $6.59$, sedangkan pada sistem terbuka fisiologis respirasi pH hanya bergeser sedikit ke $7.30$, membuktikan keunggulan biologis mekanisme dapar terbuka.`,
      },
      {
        tag: 'soal-amfiprotik-glisin-isoelektrik',
        tags: ['soal-osk', 'spesi-amfiprotik', 'titik-isoelektrik', 'glisin', 'asam-fosfat'],
        title: 'Contoh Soal OSK 2: Penentuan pH Spesi Amfiprotik Na2HPO4 & Titik Isoelektrik Asam Amino Glisin',
        summary: 'Kalkulasi kesetimbangan ion amfiprotik dari asam poliprotik dan penentuan titik isoelektrik (pI) asam amino glisin dalam larutan encer.',
        content: `### Soal:
Asam fosfat ($\\ce{H3PO4}$) adalah asam triprotik dengan $pK_{a1} = 2.15$, $pK_{a2} = 7.20$, dan $pK_{a3} = 12.35$ pada $25^\\circ\\text{C}$.
Asam amino paling sederhana, glisin ($\\ce{H2N-CH2-COOH}$), dalam larutan berair terionisasi menjadi bentuk diprotik kationik $\\ce{^+H3N-CH2-COOH}$ dengan $pK_{a1} = 2.34$ (gugus karboksilat) dan $pK_{a2} = 9.60$ (gugus amino).

**Pertanyaan:**
1. Hitung pH larutan garam natrium hidrogen fosfat ($\\ce{Na2HPO4}$) $0.10\\text{ M}$ dalam air!
2. Turunkan dan hitung titik isoelektrik ($pI$) dari asam amino glisin, yaitu nilai pH saat konsentrasi bentuk zwitterion netral ($\\ce{^+H3N-CH2-COO-}$) mencapai fraksi maksimum dan muatan netto molekul sama dengan nol!

---

### Rincian Langkah Penyelesaian:

**Langkah 1: Menentukan Spesies Terlibat pada Garam Na2HPO4**
Garam $\\ce{Na2HPO4}$ terdisosiasi sempurna menghasilkan ion amfiprotik $\\ce{HPO4^2-}$.
Ion $\\ce{HPO4^2-}$ berada di antara tahap disosiasi kedua dan ketiga asam fosfat:
$$\\ce{H2PO4- <=> H+ + HPO4^2-} \\quad (K_{a2} = 10^{-7.20} = 6.31 \\times 10^{-8})$$
$$\\ce{HPO4^2- <=> H+ + PO4^3-} \\quad (K_{a3} = 10^{-12.35} = 4.47 \\times 10^{-13})$$

**Langkah 2: Menghitung pH Ion Amfiprotik HPO4^2-**
Menggunakan formula spesi amfiprotik:
$$[\\ce{H+}] = \\sqrt{\\frac{K_{a2}K_{a3}C + K_{a2}K_w}{K_{a2} + C}}$$
Karena konsentrasi $C = 0.10\\text{ M} \\gg K_{a2}$ ($6.31 \\times 10^{-8}$):
$$[\\ce{H+}] \\approx \\sqrt{K_{a2} \\cdot K_{a3}} \\implies \\text{pH} = \\frac{\\text{p}K_{a2} + \\text{p}K_{a3}}{2}$$
$$\\text{pH} = \\frac{7.20 + 12.35}{2} = \\frac{19.55}{2} = 9.775 \\approx 9.78$$

**Langkah 3: Penurunan Titik Isoelektrik (pI) Glisin**
Tiga bentuk kesetimbangan glisin:
$$\\ce{\\underset{\\text{Kation (+1)}}{^+H3N-CH2-COOH} <=> H+ + \\underset{\\text{Zwitterion (0)}}{^+H3N-CH2-COO-} <=> H+ + \\underset{\\text{Anion (-1)}}{H2N-CH2-COO-}}$$
- Tahap 1: $K_{a1} = \\frac{[\\ce{H+}][\\ce{Gly^0}]}{[\\ce{Gly+}]}$
- Tahap 2: $K_{a2} = \\frac{[\\ce{H+}][\\ce{Gly-}]}{[\\ce{Gly^0}]}$
Pada titik isoelektrik ($pI$), muatan total larutan nol, sehingga konsentrasi spesi kationik sama persis dengan konsentrasi spesi anionik:
$$[\\ce{Gly+}] = [\\ce{Gly-}]$$
Substitusi dari ekspresi $K_{a1}$ dan $K_{a2}$:
$$\\frac{[\\ce{H+}][\\ce{Gly^0}]}{K_{a1}} = \\frac{K_{a2}[\\ce{Gly^0}]}{[\\ce{H+}]}$$
Eliminasi $[\\ce{Gly^0}]$ pada kedua ruas:
$$[\\ce{H+}]^2 = K_{a1} \\cdot K_{a2} \\implies [\\ce{H+}] = \\sqrt{K_{a1} K_{a2}}$$
$$\\text{p}I = \\frac{\\text{p}K_{a1} + \\text{p}K_{a2}}{2} = \\frac{2.34 + 9.60}{2} = \\frac{11.94}{2} = 5.97$$

**Kesimpulan Evaluator Juri:**
pH larutan $\\ce{Na2HPO4}$ $0.10\\text{ M}$ adalah $9.78$ (bersifat basa lemah), dan titik isoelektrik glisin adalah $pI = 5.97$, di mana kelarutan asam amino berada pada titik minimum dan tidak bermigrasi dalam medan elektroforesis.`,
      },
      {
        tag: 'soal-kurva-titrasi-asetat-naoh',
        tags: ['soal-osp', 'kurva-titrasi', 'asam-asetat', 'hidrolisis-garam', 'kapasitas-buffer-van-slyke'],
        title: 'Contoh Soal OSP 3: Analisis Kuantitatif Kurva Titrasi Asam Asetat dengan NaOH & Kapasitas Penyangga',
        summary: 'Perhitungan pH presisi pada 4 segmen titrasi asam asetat 0.10 M dengan NaOH 0.10 M dan pembuktian kapasitas dapar maksimum.',
        content: `### Soal:
Sebanyak $25.00\\text{ mL}$ larutan asam asetat ($\\ce{CH3COOH}$, $K_a = 1.80 \\times 10^{-5}$, $pK_a = 4.74$) berkonsentrasi $0.100\\text{ M}$ dititrasi dengan larutan standar $\\ce{NaOH}$ $0.100\\text{ M}$ pada $25^\\circ\\text{C}$.

**Pertanyaan:**
1. Hitung pH larutan sebelum penambahan $\\ce{NaOH}$ ($V_b = 0.00\\text{ mL}$)!
2. Hitung pH larutan setelah penambahan $12.50\\text{ mL}$ $\\ce{NaOH}$ (titik setengah ekuivalen)!
3. Hitung volume $\\ce{NaOH}$ pada titik ekuivalen dan hitung pH larutan tepat pada titik ekuivalen tersebut!
4. Hitung pH larutan setelah penambahan $30.00\\text{ mL}$ $\\ce{NaOH}$!

---

### Rincian Langkah Penyelesaian:

**Langkah 1: pH Awal Sebelum Titrasi ($V_b = 0$)**
Larutan asam lemah murni:
$$[\\ce{H+}] = \\sqrt{K_a \\cdot C_a} = \\sqrt{(1.80 \\times 10^{-5})(0.100)} = \\sqrt{1.80 \\times 10^{-6}} = 1.342 \\times 10^{-3}\\text{ M}$$
$$\\text{pH} = -\\log(1.342 \\times 10^{-3}) = 3 - \\log(1.342) = 2.87$$

**Langkah 2: Titik Setengah Ekuivalen ($V_b = 12.50\\text{ mL}$)**
- $\\text{Mol } \\ce{CH3COOH} \\text{ mula-mula} = 25.00 \\times 0.100 = 2.500\\text{ mmol}$.
- $\\text{Mol } \\ce{NaOH} \\text{ ditambahkan} = 12.50 \\times 0.100 = 1.250\\text{ mmol}$.
- Sisa asam $\\ce{CH3COOH} = 2.500 - 1.250 = 1.250\\text{ mmol}$.
- Garam $\\ce{CH3COO-} \\text{ terbentuk} = 1.250\\text{ mmol}$.
Karena $[\\ce{CH3COOH}] = [\\ce{CH3COO-}]$:
$$\\text{pH} = \\text{p}K_a + \\log\\left(\\frac{1.250}{1.250}\\right) = \\text{p}K_a + 0 = 4.74$$
*(Pada titik ini, kapasitas dapar mencapai nilai puncak maksimum $\\beta_{\\text{max}}$).*

**Langkah 3: Titik Ekuivalensi ($V_b = V_{eq} = 25.00\\text{ mL}$)**
Pada titik ekuivalen, seluruh $\\ce{CH3COOH}$ bereaksi sempurna membentuk $\\ce{CH3COONa}$ sebanyak $2.500\\text{ mmol}$.
Volume total larutan $= 25.00 + 25.00 = 50.00\\text{ mL}$.
Konsentrasi garam asetat:
$$C_{\\text{garam}} = \\frac{2.500\\text{ mmol}}{50.00\\text{ mL}} = 0.0500\\text{ M}$$
Hidrolisis ion asetat: $\\ce{CH3COO- + H2O <=> CH3COOH + OH-}$
$$K_b = \\frac{K_w}{K_a} = \\frac{1.00 \\times 10^{-14}}{1.80 \\times 10^{-5}} = 5.56 \\times 10^{-10}$$
$$[\\ce{OH-}] = \\sqrt{K_b \\cdot C_{\\text{garam}}} = \\sqrt{(5.56 \\times 10^{-10})(0.0500)} = \\sqrt{2.778 \\times 10^{-11}} = 5.27 \\times 10^{-6}\\text{ M}$$
$$\\text{pOH} = -\\log(5.27 \\times 10^{-6}) = 5.28 \\implies \\text{pH} = 14.00 - 5.28 = 8.72$$

**Langkah 4: Pasca-Ekuivalen ($V_b = 30.00\\text{ mL}$)**
- $\\text{Mol } \\ce{NaOH} \\text{ total} = 30.00 \\times 0.100 = 3.000\\text{ mmol}$.
- $\\text{Kelebihan mol } \\ce{OH-} = 3.000 - 2.500 = 0.500\\text{ mmol}$.
- Volume total $= 25.00 + 30.00 = 55.00\\text{ mL}$.
$$[\\ce{OH-}]_{\\text{kelebihan}} = \\frac{0.500\\text{ mmol}}{55.00\\text{ mL}} = 9.091 \\times 10^{-3}\\text{ M}$$
$$\\text{pOH} = -\\log(9.091 \\times 10^{-3}) = 2.04 \\implies \\text{pH} = 14.00 - 2.04 = 11.96$$

**Kesimpulan Evaluator Juri:**
Nilai pH pada keempat titik adalah: (1) Awal $= 2.87$, (2) Setengah ekuivalen $= 4.74$, (3) Titik ekuivalen $= 8.72$ (basa lemah akibat hidrolisis), dan (4) Pasca-ekuivalen $= 11.96$. Lonjakan tajam di sekitar pH 8.72 memvalidasi fenolftalein sebagai indikator terbaik.`,
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
Konsentrasi $[\\ce{Ag+}]$ yang diperlukan agar terjadi pengendapan ($Q_{sp} = K_{sp}$):
- Untuk $\\ce{AgI}$:
  $$[\\ce{Ag+}]_{\\ce{AgI}} = \\frac{K_{sp}(\\ce{AgI})}{[\\ce{I-}]} = \\frac{8.50 \\times 10^{-17}}{0.050} = 1.70 \\times 10^{-15}\\text{ M}$$
- Untuk $\\ce{AgCl}$:
  $$[\\ce{Ag+}]_{\\ce{AgCl}} = \\frac{K_{sp}(\\ce{AgCl})}{[\\ce{Cl-}]} = \\frac{1.80 \\times 10^{-10}}{0.050} = 3.60 \\times 10^{-9}\\text{ M}$$
Karena $1.70 \\times 10^{-15}\\text{ M} \\ll 3.60 \\times 10^{-9}\\text{ M}$, maka endapan kuning $\\ce{AgI}$ **mengendap jauh lebih dahulu** dibanding endapan putih $\\ce{AgCl}$.

**Langkah 2: Konsentrasi [Ag+] Saat Endapan Kedua (AgCl) Mulai Terbentuk**
Endapan $\\ce{AgCl}$ mulai terbentuk saat konsentrasi ion perak tepat mencapai:
$$[\\ce{Ag+}] = 3.60 \\times 10^{-9}\\text{ M}$$

**Langkah 3: Menghitung Sisa Konsentrasi Ion Iodida & Persen Pemisahan**
Pada kondisi $[\\ce{Ag+}] = 3.60 \\times 10^{-9}\\text{ M}$, kesetimbangan $\\ce{AgI}$ tetap berlaku dalam larutan jenuh:
$$[\\ce{I-}]_{\\text{sisa}} = \\frac{K_{sp}(\\ce{AgI})}{[\\ce{Ag+}]} = \\frac{8.50 \\times 10^{-17}}{3.60 \\times 10^{-9}} = 2.361 \\times 10^{-8}\\text{ M}$$
Persentase ion $\\ce{I-}$ yang masih tertinggal dalam larutan:
$$\\text{\\% Sisa } \\ce{I-} = \\frac{[\\ce{I-}]_{\\text{sisa}}}{[\\ce{I-}]_{\\text{awal}}} \\times 100\\% = \\frac{2.361 \\times 10^{-8}\\text{ M}}{0.050\\text{ M}} \\times 100\\% = 4.72 \\times 10^{-5}\\%$$
Persentase ion $\\ce{I-}$ yang telah mengendap sempurna:
$$\\text{\\% Pengendapan } \\ce{I-} = 100\\% - 0.0000472\\% = 99.99995\\%$$

**Kesimpulan Evaluator Juri:**
Endapan $\\ce{AgI}$ terbentuk lebih dahulu pada $[\\ce{Ag+}] = 1.70 \\times 10^{-15}\\text{ M}$. Tepat saat $\\ce{AgCl}$ mulai mengendap ($[\\ce{Ag+}] = 3.60 \\times 10^{-9}\\text{ M}$), sisa ion iodida hanya tinggal $2.36 \\times 10^{-8}\\text{ M}$ ($99.99995\\%$ telah mengendap). Kriteria pemisahan kuantitatif terpenuhi secara sempurna (efisiensi $> 99.9\\%$).`,
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
- Tetapan pembentukan kompleks $\\ce{[Ag(S2O3)2]^3-}$: $K_f = 2.00 \\times 10^{13}$

**Pertanyaan:**
1. Tuliskan persamaan reaksi pelarutan $\\ce{AgBr}$ dalam larutan tiosulfat dan hitung tetapan kesetimbangan keseluruhan ($K$) dari reaksi tersebut!
2. Hitung kelarutan molar $\\ce{AgBr}$ dalam air murni!
3. Hitung kelarutan molar $\\ce{AgBr}$ dalam larutan $\\ce{Na2S2O3}$ berkonsentrasi $0.500\\text{ M}$! Berapa kali lipat peningkatan kelarutannya dibanding dalam air murni?

---

### Rincian Langkah Penyelesaian:

**Langkah 1: Menuliskan Reaksi Gabungan & Menghitung Tetapan K**
Tahap 1 (Pelarutan): $\\ce{AgBr(s) <=> Ag+(aq) + Br-(aq)} \\quad K_{sp} = 5.00 \\times 10^{-13}$
Tahap 2 (Kompleksasi): $\\ce{Ag+(aq) + 2S2O3^2-(aq) <=> [Ag(S2O3)2]^3-(aq)} \\quad K_f = 2.00 \\times 10^{13}$

Reaksi Keseluruhan:
$$\\ce{AgBr(s) + 2S2O3^2-(aq) <=> [Ag(S2O3)2]^3-(aq) + Br-(aq)}$$
Tetapan kesetimbangan keseluruhan ($K$):
$$K = K_{sp} \\times K_f = (5.00 \\times 10^{-13}) \\times (2.00 \\times 10^{13}) = 10.0$$

**Langkah 2: Kelarutan AgBr dalam Air Murni**
Dalam air murni:
$$s_{\\text{air}} = \\sqrt{K_{sp}} = \\sqrt{5.00 \\times 10^{-13}} = 7.07 \\times 10^{-7}\\text{ M}$$
*(Sangat sukar larut; hanya sekitar $0.13\\text{ mg}$ $\\ce{AgBr}$ yang larut per liter air).*

**Langkah 3: Kelarutan AgBr dalam Na2S2O3 0.500 M**
Misalkan kelarutan molar $\\ce{AgBr}$ dalam tiosulfat adalah $s\\text{ mol/L}$.
Buat tabel konsentrasi kesetimbangan:
- Mula-mula: $[\\ce{S2O3^2-}] = 0.500\\text{ M}$, $[\\ce{[Ag(S2O3)2]^3-}] = 0$, $[\\ce{Br-}] = 0$.
- Bereaksi: $-2s, +s, +s$.
- Setimbang: $[\\ce{S2O3^2-}] = 0.500 - 2s$, $[\\ce{[Ag(S2O3)2]^3-}] = s$, $[\\ce{Br-}] = s$.

Ekspresi tetapan kesetimbangan $K$:
$$K = \\frac{[\\ce{[Ag(S2O3)2]^3-}][\\ce{Br-}]}{[\\ce{S2O3^2-}]^2} = \\frac{(s)(s)}{(0.500 - 2s)^2} = \\left(\\frac{s}{0.500 - 2s}\\right)^2 = 10.0$$
Ambil akar kuadrat pada kedua ruas:
$$\\frac{s}{0.500 - 2s} = \\sqrt{10.0} \\approx 3.162$$
$$s = 3.162(0.500 - 2s) = 1.581 - 6.324s$$
$$7.324 s = 1.581 \\implies s = \\frac{1.581}{7.324} = 0.2159\\text{ M} \\approx 0.216\\text{ M}$$

Rasio peningkatan kelarutan:
$$\\text{Faktor Peningkatan} = \\frac{s_{\\text{tiosulfat}}}{s_{\\text{air}}} = \\frac{0.2159\\text{ M}}{7.07 \\times 10^{-7}\\text{ M}} \\approx 3.05 \\times 10^5 \\text{ kali}$$

**Kesimpulan Evaluator Juri:**
Tetapan kesetimbangan gabungan bernilai $K = 10.0$. Kelarutan molar $\\ce{AgBr}$ dalam larutan $\\ce{Na2S2O3}$ $0.500\\text{ M}$ adalah $0.216\\text{ M}$ ($40.5\\text{ gram AgBr}$ per liter), meningkat lebih dari $300.000$ kali lipat dibandingkan dalam air murni, mendasari keberhasilan teknik *fixing* fotografi perak halida.`,
      },
    ],
  },

  // ==========================================
  // TOPIK 6: KINETIKA KIMIA
  // ==========================================
  {
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
},

  // ==========================================
  // TOPIK 7: ELEKTROKIMIA & POTENSIAL SEL
  // ==========================================
  {
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
},

  // ==========================================
  // TOPIK 8: KIMIA ANORGANIK & SENYAWA KOORDINASI
  // ==========================================
  {
  id: 8,
  topic_number: 8,
  title: 'Kimia Anorganik & Senyawa Koordinasi',
  slug: 'anorganik-senyawa-koordinasi',
  category: 'Kimia Anorganik',
  level: 'OSN',
  readTimeMinutes: 38,
  summary: 'Kajian komprehensif kimia koordinasi modern: struktur atom pusat & klasifikasi ligan (dentisitas, efek kelat), tata nama IUPAC resmi, Teori Ikatan Valensi (VBT), Teori Medan Kristal (CFT) geometri oktahedral, tetrahedral, dan bujur sangkar, Energi Penstabilan Medan Kristal (CFSE), deret spektrokimia & ligan pi-akseptor/pi-donor, konfigurasi high-spin vs low-spin, efek Jahn-Teller distorsi tetragonal, spektra elektronik d-d & warna kompleks, kemagnetan (momen magnetik spin-only mu_eff), isomerisme struktural & stereoisomerisme (cis-trans, fac-mer, kiralitas optis), serta kinetika substitusi ligan (efek trans).',
  allTags: [
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
},

  // ==========================================
  // TOPIK 9: KIMIA ANALITIK & SPEKTROSKOPI
  // ==========================================
  {
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
},

  // ==========================================
  // TOPIK 10: KIMIA ORGANIK & BIOKIMIA
  // ==========================================
  {
  id: 10,
  topic_number: 10,
  title: 'Kimia Organik & Biokimia',
  slug: 'kimia-organik-biokimia',
  category: 'Kimia Organik',
  level: 'OSN',
  readTimeMinutes: 38,
  summary: 'Kajian mendalam stereokimia Cahn-Ingold-Prelog (CIP), termodinamika & kinetika reaksi organik (Hammond & intermediet reaktif), teori asam-basa organik & aromatisitas Hückel, mekanisme substitusi nukleofilik (SN1 vs SN2) & inversi Walden, eliminasi (E1 vs E2) geometri anti-periplanar Zaitsev/Hofmann, adisi elektrofilik alkena stereospesifik Markovnikov, kimia karbonil & kondensasi enolat, serta biokimia asam amino, peptida, titik isoelektrik (pI) dan karbohidrat.',
  allTags: [
    'stereokimia',
    'aturan-cip',
    'kiralitas-r-s',
    'proyeksi-fischer',
    'proyeksi-newman',
    'enantiomer-diastereomer-meso',
    'termodinamika-kinetika-organik',
    'postulat-hammond',
    'karbokation',
    'karbanion',
    'radikal-bebas',
    'kontrol-termodinamika-kinetika',
    'asam-basa-organik',
    'efek-resonansi',
    'efek-induksi',
    'arimatisitas-huckel',
    'pka-organik',
    'substitusi-nukleofilik',
    'sn1-sn2',
    'inversi-walden',
    'mekanisme-sn1',
    'mekanisme-sn2',
    'efek-pelarut-aprotik',
    'reaksi-eliminasi',
    'e1-e2',
    'e2',
    'aturan-zaitsev',
    'produk-hofmann',
    'anti-periplanar',
    'kompetisi-substitusi-eliminasi',
    'adisi-elektrofilik',
    'aturan-markovnikov',
    'anti-markovnikov',
    'intermediet-siklik',
    'hidroborasi-oksidasi',
    'stereokimia-adisi',
    'reaksi-karbonil',
    'adisi-nukleofilik',
    'substitusi-nasil',
    'kondensasi-aldol',
    'kondensasi-claisen',
    'anion-enolat',
    'biomolekul',
    'asam-amino',
    'titik-isoelektrik-pi',
    'ikatan-peptida',
    'karbohidrat',
    'mutarotasi',
    'soal-osn',
    'stereospesifisitas',
    'ion-bromonium',
    'senyawa-meso',
    'enantiomer',
    'adisi-michael',
    'sintesis-organik',
    'kurva-titrasi',
    'spesiasi-zwitterion',
  ],
  prerequisites: [
    {
      tag: 'prasyarat-stereokimia-cip-proyeksi-kiralitas',
      tags: ['stereokimia', 'aturan-cip', 'kiralitas-r-s', 'proyeksi-fischer', 'proyeksi-newman', 'enantiomer-diastereomer-meso'],
      title: 'Prasyarat 1: Stereokimia Cahn-Ingold-Prelog (CIP), Proyeksi Fischer/Newman & Isomerisme Spasial',
      summary: 'Penentuan konfigurasi absolut R/S CIP, manipulasi proyeksi Fischer dan Newman, serta klasifikasi stereoisomer enantiomer, diastereomer, dan senyawa meso.',
      content: `Stereokimia mengkaji penataan atom-atom dalam ruang tiga dimensi. Pusat kiralitas (stereopusat) paling umum adalah atom karbon $sp^3$ yang mengikat empat substituen berbeda secara kimiawi.

### 1. Aturan Prioritas Cahn-Ingold-Prelog (CIP)
Untuk menentukan konfigurasi absolut ($R$ atau $S$) pada atom karbon kiral:
1. **Nomor Atom ($Z$):** Urutkan keempat gugus terikat berdasarkan nomor atom tertinggi dari atom yang terikat langsung ke stereopusat:
$$\\ce{-I} (53) > \\ce{-Br} (35) > \\ce{-Cl} (17) > \\ce{-SO3H} (16) > \\ce{-F} (9) > \\ce{-OH} (8) > \\ce{-NH2} (7) > \\ce{-CH3} (6) > \\ce{-H} (1) > \\text{Pasangan Elektron Bebas} (0)$$
2. **Titik Perbedaan Pertama (*First Point of Difference*):** Jika atom yang terikat langsung identik (misal sama-sama atom karbon), telusuri atom-atom pada lapisan kedua menurut urutan prioritas menurun hingga ditemukan perbedaan pertama. Contoh: $-\\ce{CH2-CH3}$ (mengikat $\\ce{C, H, H}$) memiliki prioritas lebih tinggi daripada $-\\ce{CH3}$ (mengikat $\\ce{H, H, H}$).
3. **Ikatan Rangkap Dua & Tiga:** Diperlakukan sebagai ikatan tunggal ke atom fiktif terduplikasi (*phantom atoms*):
   - Gugus formil $-\\ce{CH=O}$ setara dengan $-\\ce{CH(O)(O)}$ (karbon mengikat dua atom oksigen).
   - Gugus karboksil $-\\ce{COOH}$ setara dengan $-\\ce{C(O)(O)(O)}$ (karbon mengikat tiga atom oksigen).
   - Gugus nitril $-\\ce{C#N}$ setara dengan $-\\ce{C(N)(N)(N)}$.
4. **Penentuan Arah Putaran:**
   - Pandang molekul dengan menempatkan gugus berprioritas terendah (prioritas 4, biasanya $-\\ce{H}$) menjauhi pengamat (garis putus-putus/*dash*).
   - Telusuri urutan prioritas $1 \\to 2 \\to 3$:
     - Searah jarum jam: konfigurasi **$R$** (*Rectus*).
     - Berlawanan arah jarum jam: konfigurasi **$S$** (*Sinister*).
   - *Aturan Praktis:* Jika gugus 4 mengarah ke depan (baji/*wedge*), tentukan putaran semu lalu balik hasilnya ($R \\to S$ atau sebaliknya).

### 2. Proyeksi Fischer & Kaidah Manipulasi
Dalam proyeksi Fischer:
- Garis horizontal merepresentasikan ikatan yang menonjol ke arah pengamat (ke depan bidang).
- Garis vertikal merepresentasikan ikatan yang menjauhi pengamat (ke belakang bidang).
- **Aturan Operasi:**
  - Memutar proyeksi Fischer sebesar $180^\\circ$ pada bidang kertas mempertahankan konfigurasi stereokimia.
  - Memutar sebesar $90^\\circ$ membalik konfigurasi ($R \\leftrightarrow S$).
  - Menukar posisi sembarang dua gugus membalik konfigurasi; menukar dua pasang gugus secara simultan mempertahankan konfigurasi.

### 3. Klasifikasi Stereoisomer
- **Enantiomer:** Sepasang stereoisomer yang merupakan bayangan cermin satu sama lain tetapi tidak dapat saling ditumpukkan (*non-superimposable mirror images*). Memiliki sifat fisika-kimia akiral yang identik (titik leleh, titik didih, densitas) kecuali arah pemutaran cahaya terpolarisasi ($\pm [\\alpha]_D$) dan reaktivitas terhadap lingkungan kiral.
- **Diastereomer:** Stereoisomer yang bukan merupakan bayangan cermin satu sama lain (misal isomer cis/trans atau molekul dengan beberapa pusat kiral di mana hanya sebagian pusat yang berbalik). Memiliki sifat fisika dan kimia yang berbeda.
- **Senyawa Meso:** Molekul yang memiliki stereopusat majemuk (misal $(2R, 3S)$) tetapi memiliki elemen simetri internal (bidang cermin $\\sigma$ atau pusat inversi $i$). Senyawa meso bersifat akiral murni dan tidak memutar bidang polarisasi cahaya ($[\\alpha] = 0^\\circ$).`,
      keyFormulas: [
        { name: 'Jumlah Maksimum Stereoisomer', formula: 'N_{\\text{max}} = 2^n \\quad (n = \\text{jumlah karbon kiral})' },
        { name: 'Rotasi Jenis Spesifik', formula: '[\\alpha]_D^T = \\frac{\\alpha_{\\text{teramati}}}{l \\cdot c}' },
      ],
    },
    {
      tag: 'prasyarat-termodinamika-kinetika-organik-diagram-energi',
      tags: ['termodinamika-kinetika-organik', 'postulat-hammond', 'karbokation', 'karbanion', 'radikal-bebas', 'kontrol-termodinamika-kinetika'],
      title: 'Prasyarat 2: Termodinamika & Kinetika Reaksi Organik, Postulat Hammond & Intermediet Reaktif',
      summary: 'Profil koordinat energi reaksi, postulat Hammond, geometri & kestabilan karbokation, karbanion, radikal, serta kontrol kinetik versus termodinamik.',
      content: `Pemahaman reaksi organik menuntut integrasi antara termodinamika (arah kesetimbangan dan kestabilan relatif produk) dan kinetika (laju reaksi dan energi keadaan transisi).

### 1. Profil Koordinat Reaksi & Postulat Hammond
- Laju reaksi dikendalikan oleh energi bebas aktivasi Gibbs ($\\Delta G^\\ddagger$): $k = \\frac{k_B T}{h} e^{-\\Delta G^\\ddagger / RT}$.
- Posisi kesetimbangan akhir dikendalikan oleh perubahan energi bebas standar ($\\Delta G^\\circ$): $\\Delta G^\\circ = -RT \\ln K$.
- **Postulat Hammond (1955):** Jika dua keadaan yang berurutan dalam jalur reaksi memiliki energi yang mirip, struktur molekulnya akan saling menyerupai:
  - Pada tahap reaksi **eksergonik** (pelepasan energi kuat, $\\Delta G^\\circ \\ll 0$): keadaan transisi terjadi awal (*early transition state*), strukturnya mirip dengan reaktan.
  - Pada tahap reaksi **endergonik** (membutuhkan energi, $\\Delta G^\\circ \\gg 0$): keadaan transisi terjadi lambat (*late transition state*), strukturnya mirip dengan intermediet atau produk.

### 2. Intermediet Reaktif Kunci
1. **Karbokation ($R_3\\ce{C+}$):**
   - Geometri $sp^2$ trigonal planar dengan orbital $p$ kosong tegak lurus bidang. Memiliki 6 elektron valensi.
   - Kestabilan bertambah melalui efek induksi pendorong elektron ($+I$) gugus alkil dan hiperkonjugasi orbital ikatan $\\sigma_{\\ce{C-H}}$ atau $\\sigma_{\\ce{C-C}}$ ke orbital $p$ kosong:
$$\\text{Metil} < 1^\\circ < 2^\\circ < 3^\\circ < \\text{Alilik/Benzilik} < \\text{Tropilium}$$
   - Bersifat sangat rentan terhadap **penataan ulang intramolekul** (*rearrangement*): pergeseran hidrida $1,2$-$\\ce{H-}$ atau pergeseran alkil $1,2$-$\\ce{CH3-}$ menuju karbokation yang lebih stabil.
2. **Radikal Karbon ($R_3\\ce{C^\\bullet}$):**
   - Geometri planar atau piramida sangat dangkal ($sp^2$), memiliki 7 elektron valensi.
   - Urutan kestabilan serupa dengan karbokation: $3^\\circ > 2^\\circ > 1^\\circ > \\text{metil}$, terstabilkan sangat kuat oleh delokalisasi resonansi alilik/benzilik.
3. **Karbanion ($R_3\\ce{C-}$):**
   - Geometri $sp^3$ piramidal dengan pasangan elektron bebas. Memiliki 8 elektron valensi.
   - Urutan kestabilan terbalik terhadap karbokation: $\\text{metil} > 1^\\circ > 2^\\circ > 3^\\circ$.
   - Karbanion terstabilkan kuat oleh peningkatan karakter $s$ orbital hibrida ($sp > sp^2 > sp^3$) dan oleh delokalisasi resonansi penarik elektron (misal anion enolat $\\ce{-C-C(=O)- <-> C=C-O-}$).

### 3. Kontrol Kinetik vs Termodinamik
Pada reaksi yang menghasilkan dua produk bersaing dari zat antara yang sama:
- **Produk Kinetik:** produk yang terbentuk paling cepat melalui keadaan transisi berenergi terendah ($\\Delta G^\\ddagger_1 < \\Delta G^\\ddagger_2$). Mendominasi pada suhu rendah di mana reaksi bersifat ireversibel.
- **Produk Termodinamik:** produk yang paling stabil secara energi ($\\Delta G^\\circ_2 < \\Delta G^\\circ_1$). Mendominasi pada suhu tinggi dan waktu reaksi lama karena sistem memiliki energi termal cukup untuk mencapai kesetimbangan reversibel.
- *Contoh Klasik:* Adisi $\\ce{HBr}$ pada $1,3$-butadiena:
  - Pada $-80^\\circ\\text{C}$: produk adisi-$1,2$ (kinetik) mendominasi ($80\\%$).
  - Pada $+40^\\circ\\text{C}$: produk adisi-$1,4$ (termodinamik, alkena disubstitusi internal lebih stabil) mendominasi ($80\\%$).`,
      keyFormulas: [
        { name: 'Persamaan Eyring Laju Kinetika', formula: 'k = \\frac{k_B T}{h} e^{-\\Delta G^\\ddagger / RT}' },
        { name: 'Kestabilan Termodinamika Alkena', formula: '\\text{Tetrasubstitusi} > \\text{Trisubstitusi} > \\text{Disubstitusi} > \\text{Monosubstitusi}' },
      ],
    },
    {
      tag: 'prasyarat-asam-basa-organik-efek-elektronik',
      tags: ['asam-basa-organik', 'efek-resonansi', 'efek-induksi', 'arimatisitas-huckel', 'pka-organik'],
      title: 'Prasyarat 3: Teori Asam-Basa Organik, Resonansi, Efek Induksi & Aromatisitas Hückel',
      summary: 'Korelasi nilai pKa dengan kestabilan basa konjugat, modulasi efek induksi dan resonansi, serta kriteria aromatisitas Huckel 4n+2.',
      content: `Kekuatan asam Brønsted-Lowry organik diukur oleh nilai $pK_a = -\\log_{10} K_a$. Prinsip fundamentalnya: **semakin stabil basa konjugat ($A^-$), semakin kuat asam induknya ($HA$)**.

### 1. Faktor-Faktor Penentu Kestabilan Basa Konjugat
1. **Elektronegativitas & Ukuran Atom Pembawa Muatan:**
   - Dalam satu periode: $\\ce{CH4} (pK_a \\sim 50) < \\ce{NH3} (38) < \\ce{H2O} (15.7) < \\ce{HF} (3.2)$ karena atom lebih elektronegatif lebih mampu menstabilkan muatan negatif.
   - Dalam satu golongan: ukuran atom mendominasi: $\\ce{HF} (3.2) < \\ce{HCl} (-7) < \\ce{HBr} (-9) < \\ce{HI} (-10)$ karena jari-jari besar mendispersikan kerapatan muatan.
2. **Efek Hibridisasi Orbital:**
   Elektron pada orbital dengan karakter $s$ lebih tinggi berada lebih dekat ke inti atom positif:
$$\\ce{CH3-CH3} (sp^3, 25\\% s, pK_a \\sim 50) < \\ce{CH2=CH2} (sp^2, 33\\% s, pK_a \\sim 44) < \\ce{HC#CH} (sp, 50\\% s, pK_a \\sim 25)$$
   Proton terminal alkuna bersifat asam lemah yang dapat dideprotonasi oleh basa kuat seperti natrium amida ($\\ce{NaNH2}$).
3. **Efek Resonansi & Delokalisasi Muatan:**
   - Etanol ($\\ce{CH3CH2OH}$, $pK_a \\approx 16$): muatan negatif terkonsentrasi terlokalisasi pada satu atom oksigen.
   - Fenol ($\\ce{C6H5OH}$, $pK_a \\approx 10.0$): muatan negatif terdelokalisasi ke cincin aromatik melalui resonansi ortho/para.
   - Asam Asetat ($\\ce{CH3COOH}$, $pK_a \\approx 4.76$): muatan negatif terdelokalisasi secara simetris setara pada dua atom oksigen elektronegatif.
4. **Efek Induksi Penarik Elektron ($-I$):**
   Gugus elektronegatif menarik kerapatan elektron melalui ikatan $\\sigma$, menstabilkan muatan negatif basa konjugat:
$$\\ce{CH3COOH} (4.76) < \\ce{CH2ClCOOH} (2.86) < \\ce{CHCl2COOH} (1.29) < \\ce{CCl3COOH} (0.65) < \\ce{CF3COOH} (0.23)$$

### 2. Aturan Aromatisitas Hückel ($4n+2$)
Suatu senyawa bersifat **aromatik** (memiliki stabilitas termodinamika istimewa yang jauh melampaui poliena terkonjugasi terisolasi) jika memenuhi empat kriteria:
1. Senyawa berupa cincin tertutup (**siklik**).
2. Bersifat datar (**planar**), memungkinkan tumpang tindih paralel maksimum seluruh orbital $p$.
3. Terkonjugasi sempurna (**setiap atom cincin memiliki orbital $p$**).
4. Mengandung $(4n + 2)$ elektron $\\pi$ (dengan $n = 0, 1, 2, 3, \\dots$):
   - $n = 0$: $2\\pi$ (kation siklopropenil)
   - $n = 1$: $6\\pi$ (benzena, ion siklopentadienil anion, kation tropilium, piridina, pirola, furan)
   - $n = 2$: $10\\pi$ (naftalena, ion siklooktatetraenil dianion)
- **Senyawa Anti-Aromatik:** Sistem siklik planar terkonjugasi penuh yang memiliki **$4n$ elektron $\\pi$** (misal siklobutadiena dengan $4\\pi$, kation siklopentadienil dengan $4\\pi$). Senyawa anti-aromatik memiliki energi sangat tinggi dan luar biasa tidak stabil.`,
      keyFormulas: [
        { name: 'Kriteria Aromatisitas Huckel', formula: '\\text{Jumlah elektron } \\pi = 4n + 2 \\quad (n = 0, 1, 2, \\dots)' },
        { name: 'Kriteria Anti-Aromatisitas', formula: '\\text{Jumlah elektron } \\pi = 4n \\quad (n = 1, 2, \\dots)' },
      ],
    },
  ],
  core_concepts: [
    {
      tag: 'konsep-substitusi-nukleofilik-sn1-sn2-inversi-walden',
      tags: ['substitusi-nukleofilik', 'sn1-sn2', 'inversi-walden', 'mekanisme-sn1', 'mekanisme-sn2', 'efek-pelarut-aprotik'],
      title: 'Konsep Inti 1: Substitusi Nukleofilik (SN1 vs SN2), Dinamika Stereokimia & Efek Pelarut',
      summary: 'Komparasi mekanisme serentak SN2 vs bertahap SN1, faktor rintangan sterik, pengaruh pelarut polar aprotik, dan pembuktian stereoselktivitas inversi Walden.',
      content: `Reaksi substitusi nukleofilik alifatik melibatkan penggantian gugus pergi (*leaving group*, $X$) oleh spesi nukleofil ($Nu^-$) pada atom karbon $sp^3$.

### 1. Mekanisme $S_N2$ (Substitusi Nukleofilik Bimolekular)
- **Karakteristik:** Berlangsung serentak (*concerted*, satu tahap) tanpa zat antara.
- **Hukum Laju:** Orde dua total:
$$r = k [R-X] [\\text{Nu}^-]$$
- **Geometri Penyerangan:** Nukleofil menyerang dari arah belakang (*backside attack*) tepat $180^\\circ$ berlawanan dengan ikatan $\\ce{C-X}$, menginjeksikan sepasang elektron ke dalam orbital antibonding $\\sigma^*_{\\ce{C-X}}$.
- **Keadaan Transisi (*Transition State*):** Membentuk struktur pentakoordinasi trigonal bipiramidal yang terdistorsi, di mana ikatan $\\ce{Nu...C}$ terbentuk bersamaan dengan terputusnya ikatan $\\ce{C...X}$.
- **Konsekuensi Stereokimia:** Menghasilkan **Inversi Walden $100\\%$** (pembalikan konfigurasi tiga dimensi seperti payung tertiup angin kencang).
- **Rintangan Sterik Substrat:**
$$\\text{Metil} > 1^\\circ (\\text{etil}) > 2^\\circ (\\text{isopropil}) \\gg 3^\\circ (\\text{tert-butil, tidak bereaksi via } S_N2)$$
Substrat neopentil ($-\\ce{CH2-C(CH3)3}$) meskipun berstatus primer mengalami perlambatan laju reaksi hingga $10^5$ kali akibat halangan sterik gugus metil di atom karbon tetangga.

### 2. Mekanisme $S_N1$ (Substitusi Nukleofilik Unimolekular)
- **Karakteristik:** Berlangsung dua tahap melalui zat antara karbokation.
  - **Tahap 1 (Lambat, Tahap Penentu Laju / RDS):** Pemutusan heterolitik ikatan $\\ce{C-X}$ melepaskan gugus pergi membentuk karbokation planar $sp^2$:
$$r = k [R-X]$$
  - **Tahap 2 (Cepat):** Serangan nukleofil ke orbital $p$ kosong karbokation.
- **Konsekuensi Stereokimia:** Karena karbokation bergeometri planar akiral dengan simetri atas dan bawah identik, nukleofil dapat menyerang dari kedua sisi dengan probabilitas setara, menghasilkan **Rasemisasi** (campuran sepasang enantiomer $50\\% R : 50\\% S$). Dalam prakteknya, sering teramati sedikit ekses inversi ($5-15\\%$) akibat fenomena *ion-pair effect* (gugus pergi anionik masih berada di dekat muka depan saat serangan terjadi).
- **Reaktivitas Substrat:** Sebanding dengan kestabilan karbokation:
$$3^\\circ > 2^\\circ \\gg 1^\\circ > \\text{metil}$$

### 3. Pengaruh Pelarut & Gugus Pergi
- **Pelarut Polar Protik (Air, Metanol, Etanol, Asam Asetat):**
  Memiliki ikatan $\\ce{O-H}$ yang mampu membentuk ikatan hidrogen kuat dengan nukleofil anionik, membungkus nukleofil dalam sangkar solvasi (*solvation cage*), sehingga menurunkan nukleofilisitas bebas dan meredam laju $S_N2$. Namun, pelarut ini menstabilkan karbokation dan anion gugus pergi melalui solvasi dipol, sehingga sangat **mendukung mekanisme $S_N1$**.
- **Pelarut Polar Aprotik (DMSO, DMF, Aseton, Asetonitril, HMPA):**
  Memiliki momen dipol besar tetapi tidak memiliki proton asam pembentuk ikatan hidrogen. Pelarut ini secara efektif mensolvasi kation logam pendamping ($\ce{Na+, K+}$) tetapi membiarkan anion nukleofil "telanjang" (*naked anions*) dengan energi bebas dan reaktivitas nukleofilik maksimal. Sangat **mengakselerasi laju $S_N2$** hingga ribuan kali lipat.
- **Kualitas Gugus Pergi (*Leaving Group Ability*):**
  Semakin lemah kebasaan gugus pergi (basa konjugat dari asam kuat dengan $pK_a < 0$), semakin baik daya lepasnya:
$$\\ce{I-} > \\ce{Br-} > \\ce{Cl-} \\gg \\ce{F-} \\quad \\text{dan} \\quad \\ce{TfO-} (\\text{triflat}) > \\ce{TsO-} (\\text{tosilat}) > \\ce{MsO-} (\\text{mesilat}) \\gg \\ce{H2O} > \\ce{OH-}$$`,
      keyFormulas: [
        { name: 'Hukum Laju SN2', formula: 'r = k [R-X] [\\text{Nu}^-]' },
        { name: 'Hukum Laju SN1', formula: 'r = k [R-X]' },
      ],
    },
    {
      tag: 'konsep-eliminasi-e1-e2-stereokimia-anti-periplanar',
      tags: ['reaksi-eliminasi', 'e1-e2', 'aturan-zaitsev', 'produk-hofmann', 'anti-periplanar', 'kompetisi-substitusi-eliminasi'],
      title: 'Konsep Inti 2: Reaksi Eliminasi (E1 vs E2), Aturan Zaitsev vs Hofmann & Geometri Anti-Periplanar',
      summary: 'Persyaratan stereoelektronik anti-periplanar E2, pembentukan alkena Zaitsev vs Hofmann via basa meruap, dan matriks kompetisi substitusi-eliminasi.',
      content: `Reaksi eliminasi melibatkan pelepasan dua atom atau gugus dari atom karbon bertetangga (eliminasi-$\\beta$ atau $1,2$-eliminasi) menghasilkan ikatan rangkap dua alkena.

### 1. Mekanisme $E2$ & Persyaratan Stereoelektronik Wajib
Mekanisme $E2$ (Eliminasi Bimolekular) berlangsung secara serentak satu tahap:
$$r = k [R-X] [\\text{Base}]$$
Basa kuat menyerang proton pada posisi $\\beta$ ($\\ce{C_\\beta-H}$) bersamaan dengan pembentukan ikatan rangkap $\\ce{C=C}$ dan pelepasan gugus pergi $\\ce{X-}$.
- **Geometri Anti-Periplanar ($180^\\circ$):**
  Ikatan $\\ce{C_\\beta-H}$ dan $\ce{C_\\alpha-X}$ harus berada pada bidang yang sama dengan orientasi berlawanan arah (sudut dihedral $\\theta = 180^\\circ$).
  *Alasan Mekanika Kuantum:* Konformasi anti-periplanar memungkinkan tumpang tindih simetri orbital yang sempurna antara orbital ikatan $\\sigma_{\\ce{C-H}}$ yang kaya elektron dengan orbital antibonding $\\sigma^*_{\\ce{C-X}}$ yang kosong untuk membentuk orbital ikatan $\\pi_{\\ce{C=C}}$.
- **Konsekuensi pada Cincin Sikloheksana:**
  Eliminasi $E2$ pada sikloheksana hanya dapat berlangsung jika **gugus pergi $\\ce{-X}$ dan atom hidrogen-$\\beta$ berada pada posisi trans-diaksial** ($a, a$). Jika gugus pergi berada pada posisi ekuatorial, cincin harus mengalami pembalikan konformasi (*chair flip*) terlebih dahulu ke konformer berenergi lebih tinggi dengan gugus aksial.

### 2. Regioselektivitas: Aturan Zaitsev vs Produk Hofmann
1. **Aturan Zaitsev (Produk Termodinamik):**
   Jika eliminasi menggunakan basa kuat berukuran kecil/ramping (seperti $\\ce{OH-}, \\ce{CH3O-}, \\ce{CH3CH2O-}$), produk utama adalah alkena yang memiliki **derajat substitusi terbanyak** pada ikatan rangkap (paling stabil secara termodinamika akibat stabilisasi hiperkonjugasi).
2. **Produk Hofmann (Produk Kinetik / Alkena Kurang Tersubstitusi):**
   Terbentuk sebagai produk dominan apabila:
   - Menggunakan **basa kuat terhalang sterik / meruap (*bulky base*)** seperti kalium tert-butoksida ($t\\ce{-BuOK}$), $\\text{LDA}$ (Litium diisopropilamida), atau trietilamina. Basa tidak dapat mengakses proton-$\\beta$ internal yang terhalang sterik dan memilih mengambil proton pada gugus metil terminal yang terbuka.
   - Substrat memiliki gugus pergi bermuatan positif berukuran besar atau bersifat basa buruk (seperti garam amonium kuaterner $-\\ce{N^+(CH3)3}$ atau sulfonium $-\\ce{S^+(CH3)2}$, Eliminasi Hofmann).

### 3. Mekanisme $E1$ (Eliminasi Unimolekular)
Berlangsung dua tahap melalui zat antara karbokation (identik dengan tahap pertama $S_N1$). Basa lemah (pelarut) kemudian mengambil proton-$\\beta$.
- Selalu menghasilkan produk Zaitsev sebagai produk dominan karena karbokation bebas dapat berotasi bebas memilih konformasi paling stabil sebelum eliminasi.
- Selalu bersaing dengan $S_N1$; fraksi alkena meningkat drastis dengan **kenaikan suhu reaksi** karena reaksi eliminasi memiliki perubahan entropi positif ($\\Delta S^\\circ > 0$, menghasilkan 3 partikel dari 2 partikel).

### 4. Matriks Kompetisi Master ($S_N2, S_N1, E2, E1$)
| Substrat | Basa Kuat / Nukleofil Kuat (misal $\\ce{EtO-}$) | Basa Kuat Terhalang (misal $t\\ce{-BuO-}$) | Nukleofil Kuat / Basa Lemah (misal $\\ce{I-, CN-, RS-}$) | Nukleofil Lemah / Basa Lemah (misal $\\ce{H2O, EtOH}$) |
| :--- | :--- | :--- | :--- | :--- |
| **Primer ($1^\\circ$)** | $S_N2$ mayoritas, $E2$ minoritas | $E2$ murni | $S_N2$ murni | Tidak bereaksi |
| **Sekunder ($2^\\circ$)** | $E2$ mayoritas | $E2$ murni | $S_N2$ murni (polar aprotik) | $S_N1 + E1$ (sangat lambat) |
| **Tersier ($3^\\circ$)** | $E2$ murni | $E2$ murni | $S_N1$ (atau $E2$) | $S_N1 + E1$ (dipanaskan $\\to E1$) |`,
      keyFormulas: [
        { name: 'Kondisi Anti-Periplanar E2', formula: '\\text{Sudut Dihedral } \\theta = 180^\\circ \\quad (\\text{posisi trans-diaksial})' },
        { name: 'Regiokimia Zaitsev vs Hofmann', formula: '\\text{Zaitsev} = \\text{Alkena Tersubstitusi Tinggi}; \\quad \\text{Hofmann} = \\text{Alkena Terminal}' },
      ],
    },
    {
      tag: 'konsep-adisi-elektrofilik-alkena-markovnikov-stereokimia',
      tags: ['adisi-elektrofilik', 'aturan-markovnikov', 'anti-markovnikov', 'intermediet-siklik', 'hidroborasi-oksidasi', 'stereokimia-adisi'],
      title: 'Konsep Inti 3: Adisi Elektrofilik Alkena/Alkuna, Aturan Markovnikov & Kontrol Stereokimia',
      summary: 'Mekanisme adisi elektrofilik via karbokation terbuka vs ion halonium siklik, aturan Markovnikov regioselektif, dan kontrol stereospesifik adisi anti vs sin.',
      content: `Ikatan rangkap dua alkena kaya akan elektron $\\pi$ yang terdedah di atas dan di bawah bidang molekul, bertindak sebagai nukleofil yang menyerang elektrofil ($E^+$).

### 1. Aturan Markovnikov Regioselektif
Pada adisi asam halida ($\\ce{H-X}$) ke alkena asimetris, elektrofil hidrogen ($\\ce{H+}$) terikat secara selektif pada atom karbon ikatan rangkap yang mengikat **jumlah atom hidrogen lebih banyak**, sehingga menghasilkan zat antara **karbokation yang paling stabil** (tersier $>$ sekunder $>$ primer):
$$\\ce{CH3-CH=CH2 + H-Br -> [CH3-C^+H-CH3] + Br- -> CH3-CH(Br)-CH3} \\quad (\\text{2-bromopropana mayoritas})$$

### 2. Adisi Anti-Markovnikov Radikal Bebas
Bila adisi $\\ce{HBr}$ dilakukan dengan penambahan katalitik peroksida organik ($\\ce{R-O-O-R}$) dan penyinaran cahaya/panas, terjadi pembalikan regioselektivitas menghasilkan produk **anti-Markovnikov** ($1$-bromopropana):
1. Inisiasi: Peroksida mengalami pemutusan homolitik menghasilkan radikal alkoksi yang mengabstraksi hidrogen dari $\\ce{HBr}$ membentuk radikal bromin atomik ($\\ce{Br^\\bullet}$).
2. Propagasi: Radikal $\\ce{Br^\\bullet}$ (elektrofil) menyerang ikatan $\\pi$ pada karbon terminal tak terhalang untuk menghasilkan radikal karbon sekunder yang lebih stabil:
$$\\ce{CH3-CH=CH2 + Br^\\bullet -> CH3-\\dot{C}H-CH2Br}$$
3. Radikal karbon mengabstraksi $\\ce{H}$ dari $\\ce{HBr}$ meregenerasi $\\ce{Br^\\bullet}$.
*(Catatan: Efek peroksida ini hanya berlangsung sukses pada $\\ce{HBr}$, tidak terjadi pada $\\ce{HCl}$ karena tahap propagasi endotermik dan tidak terjadi pada $\\ce{HI}$ karena radikal iodin terlalu stabil untuk menyerang alkena).*

### 3. Kontrol Stereospesifik Adisi: Anti vs Sin
1. **Adisi Anti via Intermediet Siklik (Halogenasi):**
   - Reaksi alkena dengan bromin ($\\ce{Br2}$) atau klorin ($\\ce{Cl2}$) dalam pelarut non-nukleofilik ($\\ce{CH2Cl2}$):
     Serangan elektron $\\pi$ alkena membentuk **ion bromonium siklik 3-anggota** ($[\\ce{C2Br}]^+$) yang memblokir satu muka bidang.
   - Ion bromida ($\\ce{Br-}$) yang lepas wajib menyerang atom karbon dari muka yang berlawanan (*backside attack*, pembukaan cincin tiga anggota).
   - Menghasilkan produk **adisi anti murni** ($100\\%$ stereospesifik).
2. **Adisi Sin:**
   - **Hidrogenasi Katalitik:** Transfer hidrogen dari permukaan logam ($\ce{Pd/C, Pt}$) berlangsung simultan ke sisi muka yang sama menghasilkan produk *sin*.
   - **Hidroborasi-Oksidasi:** Boran ($\\ce{BH3}$) berkoordinasi secara serentak dalam keadaan transisi siklik 4-anggota (atom $\ce{B}$ mengikat karbon terminal kurang terhalang, atom $\ce{H}$ mengikat karbon internal) $\implies$ adisi *sin*. Tahap oksidasi dengan $\\ce{H2O2/NaOH}$ menggantikan gugus boril dengan $-\\ce{OH}$ dengan retensi konfigurasi sempurna, menghasilkan **alkohol anti-Markovnikov dengan stereokimia sin**.
   - **Dihidroksilasi Sin:** Reaksi dengan osmium tetroksida ($\\ce{OsO4}$) atau kalium permanganat dingin ($\\ce{KMnO4}$) melalui zat antara ester osmat siklik menghasilkan glikol $1,2$-diol dengan stereokimia *sin/cis*.`,
      keyFormulas: [
        { name: 'Regiokimia Markovnikov', formula: '\\ce{R-CH=CH2 + HX -> R-CH(X)-CH3}' },
        { name: 'Adisi Anti Halogenasi', formula: '\\text{Alkena} + \\ce{Br2} \\xrightarrow{\\text{ion bromonium}} \\text{trans-1,2-dibromida (anti)}' },
      ],
    },
    {
      tag: 'konsep-kimia-karbonil-adisi-kondensasi-enolat',
      tags: ['reaksi-karbonil', 'adisi-nukleofilik', 'substitusi-nasil', 'kondensasi-aldol', 'kondensasi-claisen', 'anion-enolat'],
      title: 'Konsep Inti 4: Reaksi Kimia Karbonil, Adisi Nukleofilik, Substitusi Asil & Kimia Enolat',
      summary: 'Kepolaran gugus karbonil, adisi nukleofilik aldehid/keton, substitusi asil nukleofilik turunan asam, pembentukan enolat kinetik/termodinamik, dan kondensasi C-C Aldol & Claisen.',
      content: `Gugus karbonil ($\\ce{C=O}$) terdiri dari atom karbon $sp^2$ planar yang terikat rangkap dua ke atom oksigen elektronegatif, menghasilkan dipol ikatan kuat dengan muatan parsial positif pada atom karbon ($\ce{C^{\delta+}=O^{\delta-}}$).

### 1. Adisi Nukleofilik pada Aldehid & Keton
Nukleofil menyerang karbon elektrofilik dari sudut Bürgi-Dunitz ($\sim 107^\\circ$) membentuk intermediet tetrahedral:
- **Urutan Reaktivitas:** $\\text{Formaldehida} > \\text{Aldehida} > \\text{Keton} \\gg \\text{Ester} > \\text{Amida}$ (faktor sterik dan induksi elektron gugus alkil).
- **Adisi Nukleofil Karbon:**
  - **Reagen Grignard ($\\ce{RMgX}$) & Organolitium ($\\ce{RLi}$):**
    - Formaldehida $+ \\ce{RMgX} \\to$ Alkohol Primer ($1^\\circ$)
    - Aldehida $+ \\ce{RMgX} \\to$ Alkohol Sekunder ($2^\\circ$)
    - Keton $+ \\ce{RMgX} \\to$ Alkohol Tersier ($3^\\circ$)
  - **Sianohidrin:** Adisi $\\ce{HCN/NaCN}$ menghasilkan $\\alpha$-hidroksinitril.
- **Adisi Nukleofil Oksigen & Nitrogen:**
  - Alkohol $+ \\ce{RCHO}$ (katalis asam) $\\to$ Hemiasetal $\\to$ **Asetal** (stabil terhadap basa dan nukleofil, digunakan sebagai gugus pelindung karbonil).
  - Amina primer ($\\ce{R-NH2}$) $+ \\ce{C=O} \\to$ **Imina** (basa Schiff, $\\ce{C=N-R}$).
  - Amina sekunder ($\\ce{R2NH}$) $+ \\ce{C=O} \\to$ **Enamina** ($\\ce{C=C-NR2}$).

### 2. Substitusi Asil Nukleofilik (Adisi-Eliminasi) Turunan Asam
Turunan asam karboksilat ($\ce{R-CO-Y}$) memiliki gugus pergi heteroatom ($Y$). Serangan nukleofil menghasilkan intermediet tetrahedral yang kemudian mengeliminasi $Y^-$ untuk meregenerasi ikatan rangkap karbonil:
$$\\text{Reaktivitas Relatif: } \\ce{R-CO-Cl} (\\text{asil klorida}) > (\\ce{RCO})_2\\ce{O} (\\text{anhidrida}) > \\ce{R-CO-OR'} (\\text{ester}) > \\ce{R-CO-NH2} (\\text{amida}) > \\ce{R-COO-}$$
Turunan yang lebih reaktif dapat diubah secara spontan menjadi turunan yang kurang reaktif, tetapi tidak sebaliknya tanpa reagen pengaktivasi (seperti $\\ce{SOCl2}$ atau $\\ce{PCl5}$).

### 3. Kimia Enol & Anion Enolat
Atom hidrogen pada karbon-$\\alpha$ terhadap karbonil bersifat relatif asam ($pK_a \\approx 19 - 20$ pada keton) karena basa konjugat yang terbentuk (**anion enolat**) distabilkan oleh resonansi oksigen enolat:
$$\\ce{R-CH2-C(=O)R' + B- <=> [R-\\bar{C}H-C(=O)R' <-> R-CH=C(O^-)R'] + BH}$$
- **Enolat Kinetik vs Termodinamik pada Keton Asimetris:**
  - **Enolat Kinetik:** terbentuk melalui pelepasan proton pada posisi yang paling mudah diakses/kurang terhalang sterik. Disukai oleh: basa kuat sangat meruap ($\text{LDA}$ / litium diisopropilamida), pelarut aprotik ($\text{THF}$), suhu sangat rendah ($-78^\\circ\\text{C}$), waktu reaksi singkat.
  - **Enolat Termodinamik:** menghasilkan ikatan rangkap alkena yang paling tersubstitusi dan stabil. Disukai oleh: basa relatif lebih kecil ($\ce{NaOEt, KOt-Bu}$), pelarut protik, suhu kamar ($25^\\circ\\text{C}$), kondisi kesetimbangan reversibel.

### 4. Reaksi Kondensasi Karbonil Utama
1. **Kondensasi Aldol:**
   Enolat bertindak sebagai nukleofil karbon menyerang karbonil molekul aldehid/keton lain menghasilkan $\\beta$-hidroksikarbonil (*senyawa aldol*). Pemanasan memicu eliminasi air via mekanisme $E1cB$ menghasilkan senyawa karbonil $\\alpha,\\beta$-tak jenuh (*enon*) yang sangat stabil terkonjugasi.
2. **Kondensasi Claisen:**
   Enolat ester menyerang molekul ester lain menghasilkan $\\beta$-ketoester dengan pelepasan gugus alkoksida.
3. **Adisi Konjugat Michael ($1,4$-Addition):**
   Nukleofil enolat lunak (seperti ester malonat atau $\\beta$-diketon) menyerang karbon-$\\beta$ dari sistem enon $\\alpha,\\beta$-tak jenuh.`,
      keyFormulas: [
        { name: 'Kondensasi Aldol Dehidrasi', formula: '\\ce{2 R-CH2-CHO ->[OH-] R-CH2-CH=C(R)-CHO + H2O}' },
        { name: 'Kondensasi Claisen Ester', formula: '\\ce{2 CH3COOEt ->[NaOEt] CH3-CO-CH2-COOEt + EtOH}' },
      ],
    },
    {
      tag: 'konsep-biomolekul-asam-amino-peptida-karbohidrat',
      tags: ['biomolekul', 'asam-amino', 'titik-isoelektrik-pi', 'ikatan-peptida', 'karbohidrat', 'mutarotasi'],
      title: 'Konsep Inti 5: Biomolekul, Struktur & Stereokimia Asam Amino, Peptida, Titik Isoelektrik & Karbohidrat',
      summary: 'Struktur zwitterion dan stereokimia L-asam amino, derivasi titik isoelektrik pI, planaritas resonansi ikatan peptida, proyeksi Haworth monosakarida, anomer dan mutarotasi.',
      content: `Biomolekul polimerik kehidupan dibangun dari subunit monomerik organik dengan stereokimia yang sangat spesifik.

### 1. Asam Amino & Titik Isoelektrik (pI)
Asam amino pembentuk protein adalah asam $\\alpha$-amino berkonfigurasi stereokimia **L** pada proyeksi Fischer (gugus $-\\ce{NH2}$ di sebelah kiri).
- **Wujud Zwitterion:**
  Dalam larutan air pada rentang pH fisiologis, asam amino berada sebagai ion dipolar zwitterion: gugus amina terprotonasi ($-\\ce{NH3+}$, $pK_{a2} \\sim 9 - 10$) dan gugus karboksil terdeprotonasi ($-\\ce{COO-}$, $pK_{a1} \\sim 2 - 2.5$).
- **Titik Isoelektrik ($pI$):**
  Nilai pH larutan di mana konsentrasi spesi bermuatan netto nol mencapai maksimum (muatan total molekul $= 0$).
  - Asam Amino Netral Alifatik (Alanin, Glisin, Valin, Leusin):
$$pI = \\frac{pK_{a1} (\\alpha\\ce{-COOH}) + pK_{a2} (\\alpha\\ce{-NH3+})}{2}$$
  - Asam Amino Asam (Asam Aspartat, Asam Glutamat, memiliki rantai samping $-\\ce{COOH}$ dengan $pK_{aR}$ rendah):
$$pI = \\frac{pK_{a1} (\\alpha\\ce{-COOH}) + pK_{aR} (\\text{rantai samping})}{2}$$
  - Asam Amino Basa (Lisin, Arginin, Histidin, memiliki rantai samping basa amina/guanidino):
$$pI = \\frac{pK_{aR} (\\text{rantai samping}) + pK_{a2} (\\alpha\\ce{-NH3+})}{2}$$
- **Elektroforesis:**
  - Jika $\\text{pH} < pI$: asam amino bermuatan positif netto $\\implies$ bermigrasi ke katoda (kutub negatif).
  - Jika $\\text{pH} > pI$: asam amino bermuatan negatif netto $\\implies$ bermigrasi ke anoda (kutub positif).
  - Jika $\\text{pH} = pI$: asam amino tidak bermigrasi.

### 2. Ikatan Peptida & Geometri Resonansi
Ikatan peptida adalah ikatan amida kovalen yang menghubungkan gugus $\\alpha\\ce{-COOH}$ suatu asam amino dengan $\\alpha\\ce{-NH2}$ asam amino berikutnya:
- Pasangan elektron bebas nitrogen terdelokalisasi ke oksigen karbonil:
$$\\ce{-C(=O)-NH- <-> -C(O^-)=N^+H-}$$
- Delokalisasi ini memberikan **karakter ikatan rangkap dua parsial sebesar $\\sim 40\\%$** pada ikatan $\\ce{C-N}$ amida.
- **Konsekuensi Struktural:** Ikatan $\\ce{C-N}$ amida bersifat kaku (*rigid*), planar, dan tidak dapat berotasi bebas pada suhu fisiologis. Enam atom pada unit peptida berada pada satu bidang datar dengan konformasi **trans** yang paling stabil untuk menghindari benturan sterik rantai samping $R$.

### 3. Kimia Karbohidrat: Siklisasi & Mutarotasi
- **Stereokimia D/L Karbohidrat:** Ditentukan oleh konfigurasi atom karbon kiral terjauh dari gugus karbonil (karbon referensi, misal C5 pada heksosa). Seri **D** memiliki gugus $-\\ce{OH}$ di sebelah kanan proyeksi Fischer.
- **Siklisasi Intramolekul & Karbon Anomerik:**
  Serangan nukleofilik $-\\ce{OH}$ pada C5 ke karbonil C1 membentuk cincin piranosa hemiasetal 6-anggota. Karbon C1 yang semula planar akiral berubah menjadi stereopusat baru yang disebut **Karbon Anomerik**:
  - **Anomer $\\alpha$:** gugus $-\\ce{OH}$ anomerik berada pada posisi trans terhadap gugus $-\\ce{CH2OH}$ (mengarah ke bawah pada proyeksi Haworth D-glukosa).
  - **Anomer $\\beta$:** gugus $-\\ce{OH}$ anomerik berada pada posisi cis terhadap gugus $-\\ce{CH2OH}$ (mengarah ke atas pada proyeksi Haworth). Pada konformasi kursi $\\beta\\text{-D-glukopiranosa}$, seluruh substituen besar ($-\\ce{OH}$ dan $-\\ce{CH2OH}$) menempati posisi **ekuatorial murni**, menjadikannya monosakarida paling stabil di alam.
- **Mutarotasi:**
  Perubahan spontan nilai rotasi optik larutan anomer murni (misal $\\alpha\\text{-D-glukosa}$, $[\\alpha]_D = +112^\\circ$) saat dibiarkan dalam air hingga mencapai nilai kesetimbangan tetap ($[\\alpha]_D = +52.7^\\circ$, terdiri dari $64\\% \\beta$ dan $36\\% \\alpha$) melalui pembukaan cincin hemiasetal reversibel via rantai terbuka.
- **Gula Pereduksi:** Karbohidrat yang memiliki gugus hemiasetal bebas pada karbon anomeriknya sehingga dapat membuka cincin membentuk aldehid bebas yang mereduksi reagen Tollens ($\ce{Ag+}$) dan Fehling/Benedict ($\ce{Cu^2+}$). Semua monosakarida dan disakarida maltosa/laktosa adalah gula pereduksi; sukrosa bukan gula pereduksi karena kedua karbon anomeriknya terkunci dalam ikatan glikosida.`,
      keyFormulas: [
        { name: 'Titik Isoelektrik Asam Amino Netral', formula: 'pI = \\frac{pK_{a1} + pK_{a2}}{2}' },
        { name: 'Titik Isoelektrik Asam Amino Asam', formula: 'pI = \\frac{pK_{a1} + pK_{aR}}{2}' },
        { name: 'Titik Isoelektrik Asam Amino Basa', formula: 'pI = \\frac{pK_{aR} + pK_{a2}}{2}' },
      ],
    },
  ],
  worked_examples: [
    {
      tag: 'soal-inversi-sn2-walden',
      tags: ['soal-osn', 'stereokimia', 'aturan-cip', 'substitusi-nukleofilik', 'inversi-walden', 'sn1-sn2'],
      title: 'Contoh Soal OSN 1: Stereokimia Inversi Walden Reaksi SN2 pada (2R)-2-Bromobutana',
      summary: 'Analisis kinetika dan stereospesifisitas pembuktian inversi konfigurasi Walden reaksi (2R)-2-bromobutana dengan natrium metoksida dalam DMF.',
      content: `### Masalah:
Senyawa enantiomer murni $(2R)\\text{-2-bromobutana}$ direaksikan dengan larutan natrium metoksida ($\\ce{NaOCH3}$) dalam pelarut polar aprotik dimetilformamida (DMF) pada suhu kamar menghasilkan produk substitusi utama senyawa eter $\\ce{C5H12O}$.

**Pertanyaan:**
1. Berdasarkan sifat substrat sekunder, kekuatan nukleofil, dan kepolaran pelarut, tentukan dan jelaskan apakah reaksi berlangsung dominan melalui mekanisme $S_N1$ atau $S_N2$!
2. Gambarkan struktur keadaan transisi (*transition state*) yang terbentuk dan jelaskan arah geometris serangan nukleofil metoksida terhadap ikatan $\\ce{C-Br}$!
3. Tentukan urutan prioritas Cahn-Ingold-Prelog (CIP) untuk reaktan $(2R)\\text{-2-bromobutana}$ dan produk eter $2$-metoksibutana!
4. Tentukan konfigurasi stereokimia absolut ($R$ atau $S$) dari produk $2$-metoksibutana yang dihasilkan, dan jelaskan fenomena stereokimia yang mendasarinya!

---

### Solusi Sistematis:

**Langkah 1: [Analisis Faktor Mekanisme Reaksi]**
- Substrat: $2$-bromobutana adalah alkil halida sekunder ($2^\\circ$), yang secara prinsip dapat mengalami $S_N1, S_N2, E1,$ maupun $E2$.
- Nukleofil: Ion metoksida ($\\ce{CH3O-}$) adalah nukleofil bermuatan kuat (*strong nucleophile*).
- Pelarut: Dimetilformamida ($\text{DMF}$) adalah pelarut **polar aprotik**. Pelarut aprotik tidak membentuk ikatan hidrogen dengan ion $\\ce{CH3O-}$, sehingga ion metoksida tidak terkurung dalam sangkar solvasi dan berada dalam kondisi anion bebas sangat reaktif (*naked anion*).
- Karena nukleofil kuat berkonsentrasi tinggi dan berada dalam pelarut polar aprotik, laju penyerangan langsung bimolekular jauh melampaui laju ionisasi termal substrat. Reaksi berlangsung murni melalui mekanisme **$S_N2$**!

**Langkah 2: [Geometri Keadaan Transisi & Penyerangan Backside]**
1. Nukleofil $\\ce{CH3O-}$ mendekati atom karbon kiral C2 dari arah belakang (*backside attack*), tepat pada sudut $180^\\circ$ berlawanan dengan gugus pergi bromida ($\\ce{Br-}$).
2. Serangan ini mengarahkan densitas elektron ke dalam orbital antibonding $\\sigma^*_{\\ce{C-Br}}$.
3. Keadaan transisi pentakoordinasi yang terbentuk bergeometri trigonal bipiramidal:
$$\\ce{[CH3O^{\\delta-} \\cdots C(CH3)(H)(CH2CH3) \\cdots Br^{\\delta-}]^\\ddagger}$$
Tiga gugus non-bereaksi ($-\\ce{H}, -\\ce{CH3}, -\\ce{CH2CH3}$) berada pada bidang ekuatorial datar planar, sementara nukleofil $\\ce{CH3O-}$ dan gugus pergi $\\ce{Br-}$ menempati posisi aksial di kedua sisi yang berlawanan.

**Langkah 3: [Penentuan Urutan Prioritas CIP]**
1. **Pada Reaktan ($2$-bromobutana):**
   - Prioritas 1: $-\\ce{Br}$ (nomor atom $Z = 35$)
   - Prioritas 2: $-\\ce{CH2CH3}$ (karbon mengikat $\\ce{C, H, H}$)
   - Prioritas 3: $-\\ce{CH3}$ (karbon mengikat $\\ce{H, H, H}$)
   - Prioritas 4: $-\\ce{H}$ (nomor atom $Z = 1$)
   Dengan konfigurasi awal diketahui adalah **$(2R)$**.
2. **Pada Produk Substitusi ($2$-metoksibutana):**
   Gugus $-\\ce{Br}$ telah digantikan oleh gugus metoksi $-\\ce{OCH3}$:
   - Prioritas 1: $-\\ce{OCH3}$ (atom terikat langsung adalah oksigen, $Z = 8$)
   - Prioritas 2: $-\\ce{CH2CH3}$ (karbon etil, $Z = 6$, mengikat $\\ce{C, H, H}$)
   - Prioritas 3: $-\\ce{CH3}$ (karbon metil, $Z = 6$, mengikat $\\ce{H, H, H}$)
   - Prioritas 4: $-\\ce{H}$ (hidrogen, $Z = 1$)

**Langkah 4: [Konfigurasi Absolut Produk & Inversi Walden]**
- Perhatikan bahwa gugus pergi ($\\ce{-Br}$) berprioritas 1 digantikan oleh nukleofil baru ($\\ce{-OCH3}$) yang juga berprioritas 1. Prioritas relatif ketiga gugus lainnya ($-\\ce{Et} > -\\ce{Me} > -\\ce{H}$) tidak mengalami perubahan urutan.
- Karena nukleofil masuk dari arah $180^\\circ$ berlawanan dari posisi asal $\\ce{-Br}$, terjadi pembalikan spasial susunan tetrahedral tiga dimensi secara stereospesifik $100\\%$ (**Inversi Walden**).
- Akibat inversi geometris murni ini, konfigurasi absolut stereopusat C2 terbalik dari $(R)$ menjadi **$(S)$**:
$$(2R)\\text{-2-bromobutana} \\xrightarrow{\\ce{NaOCH3, DMF}} (2S)\\text{-2-metoksibutana}$$

---

**Kesimpulan Evaluator Juri:**
Kombinasi substrat sekunder, nukleofil kuat metoksida, dan pelarut polar aprotik DMF memicu mekanisme serentak $S_N2$ murni dengan serangan *backside*. Berdasarkan urutan prioritas CIP, terjadi pembalikan konfigurasi ruang secara stereospesifik $100\\%$ (Inversi Walden) menghasilkan **$(2S)\\text{-2-metoksibutana}$**.`,
    },
    {
      tag: 'soal-eliminasi-e2-sikloheksana-anti-periplanar',
      tags: ['soal-osn', 'reaksi-eliminasi', 'e2', 'anti-periplanar', 'aturan-zaitsev', 'produk-hofmann'],
      title: 'Contoh Soal OSN 2: Stereoelektronik Eliminasi E2 pada Turunan Klorosikloheksana Mentil vs Neomentil',
      summary: 'Analisis komparatif stereoelektronik trans-diaksial konformasi kursi eliminasi E2 mentil klorida versus neomentil klorida.',
      content: `### Masalah:
Mentil klorida dan Neomentil klorida adalah sepasang diastereomer dari senyawa turunan sikloheksana $1$-isopropil-$4$-metil-$2$-klorosikloheksana.
- Pada **Mentil klorida**: ketiga substituen pada cincin berada dalam hubungan stereokimia $(1R, 2S, 5R)$, di mana gugus isopropil pada C1, klorin pada C2, dan metil pada C5 semuanya menempati orientasi *ekuatorial* pada konformer kursi yang paling stabil.
- Pada **Neomentil klorida**: merupakan epimer pada C2 dengan konfigurasi $(1R, 2R, 5R)$, di mana gugus isopropil pada C1 dan metil pada C5 menempati orientasi *ekuatorial*, sedangkan atom klorin pada C2 menempati orientasi *aksial*.

Kedua senyawa direaksikan secara terpisah dengan basa kuat natrium etoksida dalam etanol ($\\ce{NaOEt/EtOH}$) pada kondisi pemanasan yang sama.

**Pertanyaan:**
1. Jelaskan persyaratan stereoelektronik orbital yang wajib dipenuhi agar reaksi eliminasi $E2$ pada cincin sikloheksana dapat berlangsung!
2. Gambarkan konformasi kursi yang aktif bereaksi untuk Neomentil klorida, tentukan atom hidrogen-$\\beta$ mana yang memenuhi syarat eliminasi, dan tentukan produk utama beserta aturan regiokimianya!
3. Gambarkan konformasi kursi yang harus diadopsi oleh Mentil klorida agar dapat bereaksi, tentukan atom hidrogen-$\\beta$ yang dapat dieliminasi, dan tentukan struktur produk alkena yang dihasilkan!
4. Jelaskan mengapa laju reaksi eliminasi Neomentil klorida terukur sekitar $200$ kali lebih cepat daripada Mentil klorida ($k_{\\text{neomentil}} \\approx 200 \\times k_{\\text{mentil}}$)!

---

### Solusi Sistematis:

**Langkah 1: [Persyaratan Stereoelektronik E2 pada Sikloheksana]**
Reaksi eliminasi bimolekular $E2$ membutuhkan penataan orbital **anti-periplanar** (sudut dihedral $\\theta = 180^\\circ$) antara ikatan $\\ce{C_\\alpha-Cl}$ dan $\\ce{C_\\beta-H}$.
Pada cincin sikloheksana berbentuk kursi, syarat geometri anti-periplanar ini hanya dapat tercapai jika **atom klorin ($\\ce{-Cl}$) dan atom hidrogen-$\\beta$ ($\\ce{-H}$) berada pada posisi trans-diaksial ($a, a$)**. Gugus klorin pada posisi ekuatorial sama sekali tidak memiliki pasangan $\\ce{H_\\beta}$ yang anti-periplanar ($180^\\circ$) dan tidak dapat mengalami eliminasi $E2$.

**Langkah 2: [Analisis Eliminasi pada Neomentil Klorida]**
1. Pada Neomentil klorida, konformer kursi paling stabil telah menempatkan atom klorin C2 pada posisi **aksial** (karena gugus meruap isopropil C1 dan metil C5 berada pada posisi ekuatorial yang sangat disukai).
2. Terdapat dua atom hidrogen-$\\beta$ bertetangga yang berada pada posisi aksial (trans-diaksial terhadap klorin):
   - Atom $\\ce{H}$ aksial pada C1 (mengikat gugus isopropil).
   - Atom $\\ce{H}$ aksial pada C3.
3. Eliminasi atom $\\ce{H}$ aksial dari C1 menghasilkan alkena trisubstitusi (ikatan rangkap antara C1 dan C2, yaitu **$2$-mentena**). Menurut **Aturan Zaitsev**, alkena trisubstitusi ini jauh lebih stabil secara termodinamika daripada alkena disubstitusi (antara C2 dan C3, yaitu $3$-mentena).
4. Produk mayoritas Neomentil klorida adalah **$2$-mentena ($91\\%$, produk Zaitsev)** dan produk minoritas adalah $3$-mentena ($9\\%$).

**Langkah 3: [Analisis Eliminasi pada Mentil Klorida]**
1. Pada konformer paling stabil Mentil klorida, atom klorin C2 berada pada posisi **ekuatorial**. Konformer ini **tidak dapat bereaksi**!
2. Agar dapat bereaksi, molekul harus melakukan pembalikan cincin (*chair flip*) ke konformer berenergi tinggi di mana atom klorin menjadi **aksial**. Konsekuensinya, gugus isopropil C1 dan metil C5 keduanya terpaksa terdorong ke posisi aksial yang mengalami tolakan sterik $1,3$-diaksial sangat hebat.
3. Pada konformer aktif berenergi tinggi ini, periksa posisi hidrogen-$\\beta$ aksial:
   - Pada C1: gugus isopropil berada pada posisi aksial, sehingga hidrogen pada C1 berada pada posisi **ekuatorial**! Maka hidrogen pada C1 **tidak dapat dieliminasi** secara anti-periplanar terhadap klorin aksial.
   - Pada C3: hanya terdapat satu hidrogen aksial yang tersedia (posisi C3 memiliki satu $\\ce{H}$ aksial dan satu $\\ce{H}$ ekuatorial).
4. Karena hanya proton aksial pada C3 yang anti-periplanar terhadap klorin C2, eliminasi hanya dapat berlangsung ke arah C3, menghasilkan secara eksklusif **$3$-mentena ($100\\%$, produk anti-Zaitsev / Hofmann)**! Produk Zaitsev $2$-mentena sama sekali tidak dapat terbentuk karena ketiadaan geometri trans-diaksial pada C1.

**Langkah 4: [Rasionalisasi Perbedaan Laju Kinetika ($200\\times$)]**
- Pada Neomentil klorida, konformer kursi mayoritas yang stabil ($> 99.9\\%$) sudah memiliki klorin pada posisi aksial siap bereaksi $\\implies$ populasi molekul aktif sangat tinggi dan energi aktivasi total rendah.
- Pada Mentil klorida, populasi molekul yang berada dalam konformer aktif aksial sangat kecil ($< 0.1\\%$) karena penalti energi tolakan sterik yang besar saat membalik cincin. Sesuai prinsip Curtin-Hammett, energi aktivasi keseluruhan menjadi jauh lebih tinggi.
- Oleh karena itu, Neomentil klorida bereaksi sekitar **$200$ kali lebih cepat** daripada Mentil klorida.

---

**Kesimpulan Evaluator Juri:**
Persyaratan stereoelektronik mutlak trans-diaksial ($a, a$) mengendalikan regiokimia dan kinetika: Neomentil klorida bereaksi cepat menghasilkan produk Zaitsev **$2$-mentena ($91\\%$)**, sedangkan Mentil klorida harus membalik cincin ke konformer minoritas dan hanya dapat mengeliminasi ke arah C3 menghasilkan produk anti-Zaitsev **$3$-mentena ($100\\%$)** dengan laju $200\\times$ lebih lambat.`,
    },
    {
      tag: 'soal-adisi-bromin-stereospesifik-alkena',
      tags: ['soal-osn', 'adisi-elektrofilik', 'stereospesifisitas', 'ion-bromonium', 'senyawa-meso', 'enantiomer'],
      title: 'Contoh Soal OSN 3: Stereospesifisitas Adisi Anti Bromin pada (E)-2-Butena vs (Z)-2-Butena',
      summary: 'Membuktikan secara stereokimia 3D bahwa adisi anti bromin pada (E)-2-butena menghasilkan senyawa meso, sedangkan pada (Z)-2-butena menghasilkan rasemat enantiomer.',
      content: `### Masalah:
Reaksi halogenasi adisi bromin molekuler ($\\ce{Br2}$) dalam pelarut inert diklorometana ($\\ce{CH2Cl2}$) pada alkena terbukti berlangsung secara stereospesifik anti murni melalui zat antara ion bromonium siklik $3$-anggota.

Dua tabung reaksi masing-masing diisi dengan isomer alkena murni:
- Tabung A: $(E)\\text{-2-butena}$ (atau *trans*-2-butena)
- Tabung B: $(Z)\\text{-2-butena}$ (atau *cis*-2-butena)

Masing-masing tabung direaksikan dengan larutan bromin tetes demi tetes hingga warna coklat kemerahan tepat hilang.

**Pertanyaan:**
1. Gambarkan mekanisme pembentukan ion bromonium siklik pada $(E)\\text{-2-butena}$ dan tunjukkan bagaimana ion bromida ($\\ce{Br-}$) menyerang zat antara tersebut!
2. Gambarkan proyeksi Fischer dari produk yang terbentuk pada Tabung A, tentukan konfigurasi stereokimia absolut ($R/S$) pada kedua pusat kiralitas, dan jelaskan apakah produk tersebut bersifat optis aktif atau optis inaktif!
3. Gambarkan proyeksi Fischer dari produk-produk yang terbentuk pada Tabung B, tentukan konfigurasi absolutnya, dan jelaskan sifat aktivitas optiknya!
4. Berikan kesimpulan umum hubungan stereokimia stereospesifik antara geometri alkena awal ($E/Z$) dengan konfigurasi produk akhir ($meso$ vs rasemat) pada adisi anti!

---

### Solusi Sistematis:

**Langkah 1: [Mekanisme Reaksi & Pembukaan Ion Bromonium]**
1. Awan elektron $\\pi$ alkena menyerang molekul $\\ce{Br-Br}$, melepaskan ion $\\ce{Br-}$. Pasangan elektron bebas pada atom bromin terikat kembali secara serentak ke atom karbon kedua membentuk **ion bromonium siklik tiga-anggota** ($[\\ce{C2Br}]^+$).
2. Ion bromonium memiliki cincin bertegangan tinggi dengan muatan parsial positif pada atom C2 dan C3.
3. Nukleofil $\\ce{Br-}$ yang lepas kemudian menyerang salah satu atom karbon (C2 atau C3) dari arah belakang (*backside attack*, berlawanan $180^\\circ$ terhadap jembatan cincin bromonium).

**Langkah 2: [Analisis Stereokimia Tabung A: (E)-2-Butena]**
Pada $(E)\\text{-2-butena}$, kedua gugus metil berada pada sisi yang berseberangan (*trans*):
1. Pembentukan ion bromonium dapat terjadi dari muka atas atau muka bawah dengan geometri simetris.
2. Serangan anti oleh $\\ce{Br-}$ pada C2 menghasilkan konfigurasi $(2R, 3S)\\text{-2,3-dibromobutana}$; sedangkan serangan pada C3 menghasilkan konfigurasi $(2S, 3R)\\text{-2,3-dibromobutana}$.
3. Konversi ke Proyeksi Fischer:
   Letakkan rantai utama vertikal dengan atom C1 di atas dan C4 di bawah ($\\ce{CH3-C2(H)(Br)-C3(H)(Br)-CH3}$):
   - Pada C2: $-\\ce{Br}$ di kanan, $-\\ce{H}$ di kiri (konfigurasi $2R$).
   - Pada C3: $-\\ce{Br}$ di kanan, $-\\ce{H}$ di kiri (konfigurasi $3S$).
4. Perhatikan bahwa molekul memiliki **bidang cermin simetri horizontal ($\sigma$)** yang membelah ikatan C2-C3 menjadi dua paruh yang identik sempurna!
5. Molekul $(2R, 3S)$ identik dengan $(2S, 3R)$ melalui rotasi $180^\\circ$ pada bidang. Oleh karena itu, produk reaksi Tabung A adalah **senyawa meso murni (*meso*-2,3-dibromobutana)** yang bersifat **optis inaktif** ($[\\alpha] = 0^\\circ$).

**Langkah 3: [Analisis Stereokimia Tabung B: (Z)-2-Butena]**
Pada $(Z)\\text{-2-butena}$, kedua gugus metil berada pada sisi yang sama (*cis*):
1. Serangan ion $\\ce{Br-}$ dari arah belakang pada ion bromonium yang terbentuk dari $(Z)\\text{-2-butena}$ memiliki probabilitas $50\\% : 50\\%$ pada C2 dan C3:
   - Serangan pada C2 menghasilkan enantiomer $(2R, 3R)\\text{-2,3-dibromobutana}$.
   - Serangan pada C3 menghasilkan enantiomer $(2S, 3S)\\text{-2,3-dibromobutana}$.
2. Kedua molekul ini adalah sepasang bayangan cermin non-superimposabel (enantiomer) tanpa elemen simetri bidang cermin $\\sigma$ maupun titik pusat inversi $i$.
3. Karena probabilitas serangan pada C2 dan C3 identik secara statistik, terbentuk campuran ekuimolar $1 : 1$ dari sepasang enantiomer tersebut, yaitu **campuran rasemat $(\\pm)\\text{-2,3-dibromobutana}$** yang bersifat **optis inaktif melalui kompensasi eksternal**.

**Langkah 4: [Matriks Aturan Stereospesifisitas Adisi Alkena]**
Hubungan keteraturan stereospesifik adisi elektrofilik:
- Alkena **trans ($E$)** $+$ Adisi **Anti** (seperti $\\ce{Br2}$) $\\implies$ Produk **MESO**
- Alkena **cis ($Z$)** $+$ Adisi **Anti** (seperti $\\ce{Br2}$) $\\implies$ Produk **RASEMAT $(\\pm)$**
*(Sebaliknya pada adisi Sin seperti dihidroksilasi $\\ce{OsO4}$: cis $\\to$ meso, trans $\\to$ rasemat).*

---

**Kesimpulan Evaluator Juri:**
Adisi bromin terbukti berlangsung stereospesifik anti murni $100\\%$ via intermediet ion bromonium siklik:
- $(E)\\text{-2-butena}$ menghasilkan **senyawa *meso*-2,3-dibromobutana** (optis inaktif internal).
- $(Z)\\text{-2-butena}$ menghasilkan **campuran rasemat $(\\pm)\\text{-2,3-dibromobutana}$** (pasangan enantiomer $2R,3R$ dan $2S,3S$).`,
    },
    {
      tag: 'soal-sintesis-organik-kondensasi-aldol-silang',
      tags: ['soal-osn', 'reaksi-karbonil', 'kondensasi-aldol', 'adisi-michael', 'anion-enolat', 'sintesis-organik'],
      title: 'Contoh Soal OSN 4: Regioselektifitas Sintesis Senyawa Enon via Kondensasi Aldol Silang & Adisi Michael',
      summary: 'Perencanaan sintesis selektif benzalaseton melalui kondensasi aldol silang Claisen-Schmidt serta mekanisme reaksi adisi Michael konjugat.',
      content: `### Masalah:
Senyawa $\\alpha,\\beta$-tak jenuh terkonjugasi $4$-fenil-$3$-buten-$2$-on (**Benzalaseton**, $\\ce{C10H10O}$) adalah zat antara penting dalam industri wewangian dan sintesis senyawa farmasi. Senyawa ini disintesis melalui reaksi kondensasi aldol silang (*Claisen-Schmidt condensation*) antara benzaldehida ($\\ce{C6H5CHO}$) dan aseton ($\\ce{CH3COCH3}$) dengan keberadaan katalis basa natrium hidroksida encer ($\\ce{NaOH}$).

**Pertanyaan:**
1. Mengapa reaksi kondensasi aldol silang antara benzaldehida dan aseton dapat menghasilkan produk tunggal dengan rendemen tinggi tanpa terbentuk campuran kacau dari empat produk aldol yang berbeda?
2. Tuliskan mekanisme reaksi pembentukan benzalaseton tahap demi tahap, mulai dari pembentukan enolat, adisi nukleofilik, hingga tahap dehidrasi $E1cB$!
3. Jelaskan stereokimia ikatan rangkap dua alkena yang terbentuk pada produk benzalaseton (apakah isomer $(E)$ atau $(Z)$) dan berikan dasar kestabilannya!
4. Jika produk benzalaseton yang terbentuk direaksikan lebih lanjut dengan dimetil malonat $\\ce{CH2(COOCH3)2}$ dengan keberadaan katalis natrium metoksida ($\\ce{NaOCH3}$), reaksi adisi apakah yang terjadi? Tuliskan struktur produk adisi tersebut!

---

### Solusi Sistematis:

**Langkah 1: [Rasionalisasi Selektivitas Kondensasi Aldol Silang]**
Pada kondensasi aldol silang acak antara dua senyawa karbonil berbeda, umumnya terbentuk campuran kompleks dari 4 produk aldol. Namun pasangan benzaldehida dan aseton sangat selektif karena:
1. **Benzaldehida tidak memiliki atom hidrogen-$\\alpha$ ($\\ce{H_\\alpha}$):** Benzaldehida tidak dapat dideprotonasi oleh basa untuk membentuk anion enolat, sehingga berperan murni sebagai **akseptor elektrofilik**.
2. **Aseton memiliki hidrogen-$\\alpha$:** Aseton bertindak sebagai **donor nukleofilik** (enolat).
3. Gugus karbonil aldehid pada benzaldehida jauh lebih elektrofilik dan kurang terhalang sterik dibandingkan gugus karbonil keton pada aseton. Akibatnya, anion enolat aseton bereaksi jauh lebih cepat menyerang benzaldehida daripada menyerang molekul aseton lain (swakondensasi aseton tertekan).
4. Penambahan aseton dalam jumlah sedikit berlebih menjamin konversi benzaldehida berlangsung kuantitatif menjadi benzalaseton.

**Langkah 2: [Mekanisme Reaksi Bertahap]**
1. **Pembentukan Anion Enolat Aseton:**
   Ion hidroksida mengambil proton-$\\alpha$ dari aseton:
$$\\ce{CH3-CO-CH3 + OH- <=> [CH3-CO-\\bar{C}H2 <-> CH3-C(O^-)=CH2] + H2O}$$
2. **Serangan Nukleofilik pada Benzaldehida:**
   Anion enolat menyerang karbon karbonil elektrofilik benzaldehida membentuk ion alkoksida:
$$\\ce{C6H5-CHO + CH3-CO-\\bar{C}H2 -> C6H5-CH(O^-)-CH2-CO-CH3}$$
3. **Protonasi Membentuk Senyawa $\\beta$-Hidroksiketon (Aldol):**
$$\\ce{C6H5-CH(O^-)-CH2-CO-CH3 + H2O <=> C6H5-CH(OH)-CH2-CO-CH3 + OH-}$$
4. **Dehidrasi via Mekanisme $E1cB$:**
   Basa mengambil proton-$\\alpha$ sisa yang bersifat asam membentuk zat antara karbanion enolat, diikuti oleh pelepasan gugus pergi buruk ion hidroksida ($\\ce{OH-}$):
$$\\ce{C6H5-CH(OH)-\\bar{C}H-CO-CH3 -> C6H5-CH=CH-CO-CH3 + OH-}$$
Eliminasi mudah terjadi pada suhu kamar karena produk alkena membentuk sistem konjugasi $\\pi$ yang sangat ekstensif antara cincin aromatik fenil, ikatan rangkap $\\ce{C=C}$, dan gugus karbonil $\\ce{C=O}$.

**Langkah 3: [Stereokimia Isomer (E) vs (Z)]**
Produk yang terbentuk adalah **$(E)\\text{-4-fenil-3-buten-2-on}$ ($trans$-benzalaseton)** secara stereoselektif $> 99\\%$.
- Alasan Kestabilan: Pada isomer $(E)$, cincin fenil besar dan gugus asetil $-\\ce{COCH3}$ berada pada sisi yang berlawanan dari ikatan rangkap, meminimalkan tolakan sterik antar-gugus dan memaksimalkan koplanaritas sistem terkonjugasi untuk delokalisasi resonansi optimal.

**Langkah 4: [Reaksi Lanjut: Adisi Konjugat Michael]**
Ketika benzalaseton (akseptor Michael $\\alpha,\\beta$-tak jenuh) direaksikan dengan dimetil malonat (donor Michael):
1. Basa metoksida mendekarboksilasi dimetil malonat menghasilkan anion karbanion malonat terstabilkan resonansi: $[\\ce{\\bar{C}H(COOCH3)2}]^-$.
2. Anion enolat lunak ini menyerang secara selektif pada **karbon-$\\beta$** benzalaseton (adisi konjugat $1,4$), bukan pada karbon karbonil langsung (adisi $1,2$):
$$\\ce{C6H5-CH=CH-CO-CH3 + [\\bar{C}H(COOCH3)2]- -> C6H5-CH(CH(COOCH3)2)-CH2-CO-CH3}$$
Produk yang dihasilkan adalah senyawa $1,5$-dikarbonil: **Metil 2-(3-okso-1-fenilbutil)malonat**.

---

**Kesimpulan Evaluator Juri:**
Kondensasi Claisen-Schmidt berlangsung terarah karena benzaldehida bertindak eksklusif sebagai elektrofil tanpa $\\ce{H_\\alpha}$. Dehidrasi $E1cB$ menghasilkan isomer **$(E)\\text{-benzalaseton}$** yang terkonjugasi penuh, yang selanjutnya dapat bertindak sebagai akseptor Michael pada reaksi adisi konjugat $1,4$ dengan nukleofil lunak.`,
    },
    {
      tag: 'soal-titrasi-asam-amino-titik-isoelektrik',
      tags: ['soal-osn', 'biomolekul', 'asam-amino', 'titik-isoelektrik-pi', 'kurva-titrasi', 'spesiasi-zwitterion'],
      title: 'Contoh Soal OSN 5: Analisis Kurva Titrasi Poliprotik Asam Glutamat, Fraksi Spesiasi & Titik Isoelektrik (pI)',
      summary: 'Analisis mikroskopis 4 spesies ionik asam amino asam glutamat, penurunan nilai pI eksak, serta perhitungan fraksi distribusi zwitterion pada pH darah.',
      content: `### Masalah:
Asam L-glutamat (suatu asam amino polar asam bermassa molar $147.13\\text{ g/mol}$) memiliki tiga gugus fungsi ionik yang dapat terionisasi. Pada larutan asam kuat ($\text{pH} < 1$), asam glutamat berada dalam bentuk kation terprotonasi penuh $\\ce{H3A+}$.
Data tetapan disosiasi asam bertingkat pada suhu $25^\\circ\\text{C}$ adalah:
- $pK_{a1} = 2.19$ (gugus $\\alpha\\text{-karboksil}$, $\\alpha\\ce{-COOH}$)
- $pK_{aR} = 4.25$ (gugus karboksil rantai samping, $\\gamma\\ce{-COOH}$)
- $pK_{a2} = 9.67$ (gugus $\\alpha\\text{-amonium}$, $\\alpha\\ce{-NH3+}$)

Sebanyak $50.0\\text{ mL}$ larutan asam L-glutamat $0.100\\text{ M}$ dititrasi dengan larutan baku $\\ce{NaOH}$ $0.100\\text{ M}$.

**Pertanyaan:**
1. Gambarkan struktur kimia dari keempat spesies ionik asam glutamat ($\\ce{H3A+}, \\ce{H2A}, \\ce{HA-}, \\ce{A^2-}$) dan tunjukkan urutan pelepasan protonnya dari yang paling asam hingga paling basa!
2. Tentukan spesies ionik mana yang bertindak sebagai zwitterion bermuatan netto nol, dan turunkan persamaan matematis untuk menghitung titik isoelektrik ($pI$) asam glutamat serta hitung nilai numeriknya!
3. Tentukan volume larutan $\\ce{NaOH}$ yang dibutuhkan untuk mencapai titik isoelektrik ($pI$) dari larutan awal $\\ce{H3A+}$!
4. Pada pH fisiologis plasma darah normal ($\text{pH} = 7.40$), hitung persentase fraksi mol spesies dominan asam glutamat dan tentukan muatan netto rata-ratanya!

---

### Solusi Sistematis:

**Langkah 1: [Struktur Spesies Ionik & Urutan Deprotonasi]**
Urutan keasaman gugus fungsional ditentukan oleh nilai $pK_a$ (makin kecil $pK_a$, makin mudah terdeprotonasi):
$$\\alpha\\ce{-COOH} (pK_{a1} = 2.19) > \\gamma\\ce{-COOH} (pK_{aR} = 4.25) > \\alpha\\ce{-NH3+} (pK_{a2} = 9.67)$$
Keempat spesies kesetimbangan ionik:
1. **Kation $\\ce{H3A+}$ (Muatan netto $+1$, bentuk pada $\\text{pH} < 2$):**
   $$\\ce{HOOC-CH2-CH2-CH(NH3+)-COOH}$$
2. **Zwitterion Netral $\\ce{H2A}$ (Muatan netto $0$, bentuk pada rentang $2 < \\text{pH} < 4.5$):**
   Pelepasan proton pertama dari $\\alpha\\ce{-COOH}$:
   $$\\ce{HOOC-CH2-CH2-CH(NH3+)-COO-}$$
3. **Monoanion $\\ce{HA-}$ (Muatan netto $-1$, bentuk pada rentang $4.5 < \\text{pH} < 9.5$):**
   Pelepasan proton kedua dari rantai samping $\\gamma\\ce{-COOH}$:
   $$\\ce{^-OOC-CH2-CH2-CH(NH3+)-COO-}$$
4. **Dianion $\\ce{A^2-}$ (Muatan netto $-2$, bentuk pada $\\text{pH} > 10$):**
   Pelepasan proton ketiga dari gugus amonium $\\alpha\\ce{-NH3+}$:
   $$\\ce{^-OOC-CH2-CH2-CH(NH2)-COO-}$$

**Langkah 2: [Derivasi Rumus & Perhitungan Titik Isoelektrik (pI)]**
Spesies zwitterion bermuatan netto nol adalah $\\ce{H2A}$.
Kesetimbangan disosiasi yang melibatkan $\\ce{H2A}$:
$$K_{a1} = \\frac{[\\ce{H+}][\\ce{H2A}]}{[\\ce{H3A+}]} \\implies [\\ce{H3A+}] = \\frac{[\\ce{H+}][\\ce{H2A}]}{K_{a1}}$$
$$K_{aR} = \\frac{[\\ce{H+}][\\ce{HA-}]}{[\\ce{H2A}]} \\implies [\\ce{HA-}] = \\frac{K_{aR}[\\ce{H2A}]}{[\\ce{H+}]}$$
Pada titik isoelektrik ($pI$), muatan listrik positif total harus tepat meniadakan muatan listrik negatif total:
$$[\\ce{H3A+}] = [\\ce{HA-}] + 2[\\ce{A^2-}]$$
Karena pada daerah asam sekitar $pI$ ($\\text{pH} \\approx 3$), konsentrasi dianion $[\\ce{A^2-}]$ sangat amat kecil ($< 10^{-6}\\text{ M}$) dan dapat diabaikan:
$$[\\ce{H3A+}] \\approx [\\ce{HA-}]$$
Substitusi kedua relasi kesetimbangan:
$$\\frac{[\\ce{H+}][\\ce{H2A}]}{K_{a1}} = \\frac{K_{aR}[\\ce{H2A}]}{[\\ce{H+}]}$$
Bagi kedua ruas dengan $[\\ce{H2A}]$:
$$[\\ce{H+}]^2 = K_{a1} \\cdot K_{aR} \\implies [\\ce{H+}] = \\sqrt{K_{a1} \\cdot K_{aR}}$$
Ambil logaritma negatif ($-\\log$):
$$pI = \\frac{pK_{a1} + pK_{aR}}{2}$$
Substitusi nilai eksperimen:
$$pI = \\frac{2.19 + 4.25}{2} = \\frac{6.44}{2} = 3.22$$

**Langkah 3: [Volume Titran NaOH untuk Mencapai pI]**
- Mol awal $\\ce{H3A+} = 50.0\\text{ mL} \\times 0.100\\text{ M} = 5.00\\text{ mmol}$.
- Titik isoelektrik ($pI = 3.22$) tercapai tepat pada titik tengah antara titik ekuivalen pertama ($V_1 = 50.0\\text{ mL}$, saat seluruh $\\alpha\\ce{-COOH}$ ternetralkan) dan awal titrasi, yaitu pada saat deprotonasi $\\alpha\\ce{-COOH}$ mencapai derajat konversi yang menghasilkan $[\\ce{H+}] = 10^{-3.22}\\text{ M}$.
- Pada titrasi analitik asam amino poliprotik, volume titran $\\ce{NaOH}$ untuk mencapai titik isoelektrik asam amino dikarboksilat adalah tepat **setengah volume ekuivalen pertama**:
$$V_{\\ce{NaOH}} = 50.0\\text{ mL} \\text{ (ekuivalen 1)} \\implies \\text{pada } pI = 3.22, \\text{ tercapai titik ekivalen pertama } V = 50.0\\text{ mL}$$
(Catatan: pada $V = 50.0\\text{ mL}$, spesies $\\ce{H2A}$ terbentuk kuantitatif sebesar $> 98\\%$).

**Langkah 4: [Spesiasi pada pH Fisiologis Darah (pH = 7.40)]**
Pada $\\text{pH} = 7.40$:
- Rasio $\\frac{[\\ce{HA-}]}{[\\ce{H2A}]}$:
$$\\text{pH} = pK_{aR} + \\log\\left(\\frac{[\\ce{HA-}]}{[\\ce{H2A}]}\\right) \\implies 7.40 = 4.25 + \\log\\left(\\frac{[\\ce{HA-}]}{[\\ce{H2A}]}\\right) \\implies \\log = 3.15 \\implies \\frac{[\\ce{HA-}]}{[\\ce{H2A}]} = 10^{3.15} = 1413$$
Konsentrasi $\\ce{H2A}$ hanya $0.07\\%$.
- Rasio $\\frac{[\\ce{A^2-}]}{[\\ce{HA-}]}$:
$$\\text{pH} = pK_{a2} + \\log\\left(\\frac{[\\ce{A^2-}]}{[\\ce{HA-}]}\\right) \\implies 7.40 = 9.67 + \\log\\left(\\frac{[\\ce{A^2-}]}{[\\ce{HA-}]}\\right) \\implies \\log = -2.27 \\implies \\frac{[\\ce{A^2-}]}{[\\ce{HA-}]} = 10^{-2.27} = 0.00537$$
Konsentrasi $\\ce{A^2-}$ hanya $0.53\\%$.
- Fraksi mol spesies monoanion $\\ce{HA-}$:
$$\\%\\ [\\ce{HA-}] = \\frac{1}{1 + 10^{-3.15} + 10^{-2.27}} \\times 100\\% = \\frac{1}{1 + 0.0007 + 0.00537} \\times 100\\% = \\frac{1}{1.00607} \\times 100\\% = 99.4\\%$$
- **Muatan Netto Rata-Rata:**
$$q_{\\text{netto}} = (0 \\times 0.0007) + (-1 \\times 0.994) + (-2 \\times 0.00537) = -0.994 - 0.0107 = -1.005 \\approx -1.00$$

---

**Kesimpulan Evaluator Juri:**
Asam L-glutamat memiliki titik isoelektrik **$pI = 3.22$** yang dikendalikan oleh kedua gugus karboksil ($pK_{a1}$ dan $pK_{aR}$). Pada pH fisiologis $7.40$, asam glutamat berada dalam bentuk monoanion terdeprotonasi ganda $\\ce{^-OOC-CH2CH2-CH(NH3+)-COO-}$ (**muatan netto $-1$**, kelimpahan $99.4\\%$), menjelaskan perannya sebagai neurotransmitter eksitatorik anionik polar di sistem saraf pusat.`,
    },
  ],
}
];

/**
 * Mencari modul materi dan blok konsep yang cocok berdasarkan tag soal
 */
export function findConceptByTag(tag: string): {
  material: MaterialItem;
  block: ConceptBlock;
  stage: 'prerequisite' | 'core' | 'example';
} | null {
  if (!tag) return null;
  const normalized = tag.toLowerCase().trim().replace(/^#/, '');

  const matchesBlock = (c: ConceptBlock) => {
    const cTag = c.tag.toLowerCase();
    if (cTag === normalized || cTag.includes(normalized) || normalized.includes(cTag)) return true;
    if (
      c.tags &&
      c.tags.some((t) => {
        const tNorm = t.toLowerCase().trim().replace(/^#/, '');
        return tNorm === normalized || tNorm.includes(normalized) || normalized.includes(tNorm);
      })
    ) {
      return true;
    }
    return false;
  };

  for (const mat of OSN_MATERIALS) {
    // 1. Cari di prasyarat
    const foundPre = mat.prerequisites.find(matchesBlock);
    if (foundPre) return { material: mat, block: foundPre, stage: 'prerequisite' };

    // 2. Cari di materi inti
    const foundCore = mat.core_concepts.find(matchesBlock);
    if (foundCore) return { material: mat, block: foundCore, stage: 'core' };

    // 3. Cari di contoh soal
    const foundEx = mat.worked_examples.find(matchesBlock);
    if (foundEx) return { material: mat, block: foundEx, stage: 'example' };
  }

  // 4. Jika belum ketemu, cari di array allTags
  for (const mat of OSN_MATERIALS) {
    if (
      mat.allTags.some((t) => {
        const tNorm = t.toLowerCase().trim().replace(/^#/, '');
        return tNorm === normalized || tNorm.includes(normalized) || normalized.includes(tNorm);
      })
    ) {
      return {
        material: mat,
        block: mat.core_concepts[0] || mat.prerequisites[0],
        stage: 'core',
      };
    }
  }

  return null;
}
