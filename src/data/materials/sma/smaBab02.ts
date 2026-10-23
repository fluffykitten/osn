/**
 * smaBab02.ts
 * Bab 2: Sistem Periodik Unsur dan Ikatan Kimia
 * Jenjang: SMA/MA Kelas X & XI (Fase E & F)
 * Standar: Arsitektur Pedagogis v3 (Adaptasi SaveMyExams)
 */

import type { SmaMaterialItem } from '../../smaMaterialsData';

export const SMA_BAB_02: SmaMaterialItem = {
  id: 102,
  topic_number: 2,
  grade: 'Kelas 10',
  semester: 1,
  curriculumPhase: 'Fase E',
  title: 'Sistem Periodik Unsur dan Ikatan Kimia',
  slug: 'sistem-periodik-unsur-ikatan-kimia',
  category: 'Struktur Materi & Ikatan Kimia',
  level: 'SMA',
  readTimeMinutes: 45,
  summary:
    'Kajian komprehensif susunan berkala unsur dan interaksi kimia: Penentuan periode dan golongan berbasis blok konfigurasi elektron; tren keperiodikan jari-jari, energi ionisasi, afinitas elektron, dan keelektronegatifan; pembentukan ikatan ionik vs ikatan logam; ragam ikatan kovalen tunggal, rangkap, koordinasi serta penyimpangan oktet; hingga prediksi geometri molekul VSEPR, hibridisasi, dan gaya antarmolekul.',
  allTags: [
    'sistem-periodik-unsur',
    'tabel-periodik',
    'golongan-dan-periode',
    'blok-s-p-d-f',
    'sifat-keperiodikan',
    'jari-jari-atom',
    'energi-ionisasi',
    'afinitas-elektron',
    'keelektronegatifan',
    'ikatan-kimia',
    'ikatan-ionik',
    'ikatan-logam',
    'struktur-lewis',
    'aturan-oktet-duplet',
    'ikatan-kovalen',
    'kovalen-koordinasi',
    'penyimpangan-oktet',
    'geometri-molekul',
    'vsepr',
    'hibridisasi',
    'kepolaran-molekul',
    'gaya-antarmolekul',
    'ikatan-hidrogen',
    'gaya-london',
  ],
  prerequisites: [
    {
      tag: 'sma-02-perkembangan-spu-golongan-periode',
      tags: ['sistem-periodik-unsur', 'tabel-periodik', 'golongan-dan-periode', 'blok-spu'],
      title: 'Subbab 2.1: Perkembangan Tabel Periodik dan Penentuan Periode serta Golongan',
      summary: 'Dasar penyusunan berkala unsur dari Mendeleev hingga Moseley, pembagian blok orbital, dan penentuan posisi unsur.',
      content: `#### 1. Intuisi: Dari Fenomena ke Tingkat Partikel
Jika kamu mengamati logam litium, natrium, dan kalium di laboratorium, ketiganya memiliki kilap keperakan, bertekstur lunak, dan sama-sama bereaksi hebat dengan air menghasilkan gas hidrogen. Sebaliknya, gas fluorin, klorin, dan bromin selalu berwujud diatomik dan sangat agresif menarik elektron dari zat lain. Keteraturan sifat fisika dan kimia ini bukanlah suatu kebetulan, melainkan cerminan langsung dari kemiripan konfigurasi elektron valensi di kulit terluar atom.

Dmitri Mendeleev awalnya menyusun unsur berdasarkan kenaikan massa atom relatif dan menyisakan kolom kosong untuk unsur yang belum ditemukan. Namun, anomali penataan massa atom terpecahkan setelah Henry Moseley membuktikan bahwa nomor atom (jumlah proton), bukan nomor massa, yang menjadi dasar fundamental keteraturan sifat kimia. Ketika atom-atom ditata berdasarkan kenaikan nomor atom, konfigurasi elektron terluar berulang secara periodik dalam blok-blok orbital tertentu.

Perhatikan Gambar 2.1 berikut yang memperlihatkan pembagian blok orbital $s, p, d, f$ pada Tabel Periodik Unsur modern.

<svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sma-b02-blok-spu-title sma-b02-blok-spu-desc" data-diagram="sma-b02-blok-spu" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="sma-b02-blok-spu-title">ARSITEKTUR BLOK TABEL PERIODIK MODERN</title>
  <desc id="sma-b02-blok-spu-desc">DIAGRAM PEMBAGIAN BLOK S, D, P, DAN F PADA TABEL PERIODIK MODERN BERDASARKAN SUBKULIT ELEKTRON VALENSI.</desc>

  <!-- TITLE BANNER -->
  <rect x="20" y="20" width="760" height="40" rx="8" fill="#ececec" stroke="#1f2937" stroke-width="2"/>
  <text x="400" y="45" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" text-anchor="middle">ARSITEKTUR BLOK TABEL PERIODIK MODERN</text>

  <!-- BLOK S (KIRI) -->
  <rect x="24" y="70" width="120" height="140" rx="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="2"/>
  <text x="84" y="100" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" text-anchor="middle">BLOK S</text>
  <text x="84" y="125" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">GOL. IA &amp; IIA</text>
  <text x="84" y="145" fill="#4b5563" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">LOGAM ALKALI</text>
  <rect x="36" y="165" width="96" height="30" rx="6" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/>
  <text x="84" y="185" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">NS1 - NS2</text>

  <!-- BLOK D (TENGAH) -->
  <rect x="160" y="110" width="300" height="100" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="2"/>
  <text x="310" y="138" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" text-anchor="middle">BLOK D (LOGAM TRANSISI)</text>
  <text x="310" y="160" fill="#4b5563" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">GOLONGAN IIIB - IIB (GOL 3 - 12)</text>
  <rect x="230" y="170" width="160" height="28" rx="6" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/>
  <text x="310" y="189" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">NS1-2 (N-1)D1-10</text>

  <!-- BLOK P (KANAN) -->
  <rect x="476" y="70" width="300" height="140" rx="8" fill="#f5a3a3" stroke="#1f2937" stroke-width="2"/>
  <text x="626" y="100" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" text-anchor="middle">BLOK P (GOLONGAN UTAMA)</text>
  <text x="626" y="125" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">GOLONGAN IIIA - VIIIA (13 - 18)</text>
  <text x="626" y="145" fill="#4b5563" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">NONLOGAM &amp; GAS MULIA</text>
  <rect x="566" y="165" width="120" height="30" rx="6" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/>
  <text x="626" y="185" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">NS2 NP1-6</text>

  <!-- BLOK F (BAWAH) -->
  <rect x="160" y="225" width="480" height="55" rx="8" fill="#cfd4d9" stroke="#1f2937" stroke-width="2"/>
  <text x="400" y="258" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">BLOK F (TRANSISI DALAM: LANTANIDA &amp; AKTINIDA)</text>
</svg>
<div class="text-center font-sans text-xs font-semibold text-slate-500 mt-2 mb-4">Gambar 2.1: Pembagian blok subkulit s, p, d, dan f pada konfigurasi elektron Tabel Periodik Modern.</div>

Bagaimana cara menentukan letak periode dan golongan suatu unsur secara cepat dan tepat hanya bermodalkan nomor atomnya?

---

#### 2. Formalisasi: Konsep Baku & Hubungan Matematis
Pada Tabel Periodik Modern, posisi setiap unsur ditentukan oleh konfigurasi elektron atom netralnya pada keadaan dasar (*ground state*):

1. **Periode** adalah baris horizontal pada Tabel Periodik yang menunjukkan jumlah kulit elektron yang telah terisi. Nilai periode sama dengan bilangan kuantum utama terbesar ($n_{\max}$) pada konfigurasi elektron:
$$\text{Periode} = n_{\max}$$

2. **Golongan** adalah kolom vertikal pada Tabel Periodik yang memuat unsur-unsur dengan jumlah elektron valensi yang sama. Golongan diklasifikasikan ke dalam blok subkulit valensi terakhirnya:

* **Unsur Golongan Utama (Blok $s$ dan Blok $p$):**
  - Jika subkulit valensi berakhir pada $ns^x$, unsur berada pada **Golongan $x\text{A}$** (IUPAC: Golongan $x$).
  - Jika subkulit valensi berakhir pada $ns^2 np^y$, unsur berada pada **Golongan $(2+y)\text{A}$** (IUPAC: Golongan $10 + 2 + y$).

* **Unsur Golongan Transisi (Blok $d$ Periode 4):**
  - Jika subkulit valensi berakhir pada $ns^x (n-1)d^y$, jumlahkan elektron $s + d$:
    - Jika $x + y = 3, 4, 5, 6, 7$, unsur berada pada **Golongan IIIB, IVB, VB, VIB, VIIB**.
    - Jika $x + y = 8, 9, 10$, unsur berada pada **Golongan VIIIB** (terdiri atas tiga kolom vertikal).
    - Jika $x + y = 11$, unsur berada pada **Golongan IB** (IUPAC: Golongan 11).
    - Jika $x + y = 12$, unsur berada pada **Golongan IIB** (IUPAC: Golongan 12).

**Makna Fisis Aturan:**
Nomor periode mencerminkan jari-jari fisik atom (lapisan kulit terluar), sedangkan nomor golongan mencerminkan jumlah elektron terluar yang tersedia untuk berinteraksi membentuk ikatan kimia.

> [!SYARAT_BATAS]
> ### ⚖️ Syarat Batas & Asumsi
> 1. Aturan penentuan golongan dan periode di atas **hanya berlaku untuk atom netral pada keadaan dasar (ground state)**.
> 2. Penentuan golongan **tidak boleh** menggunakan konfigurasi elektron ion kation/anion atau atom dalam keadaan tereksitasi.
> 3. Gas helium ($Z=2$, konfigurasi $1s^2$) merupakan pengecualian penempatan blok: meskipun berakhiran subkulit $s^2$, helium ditempatkan di Golongan VIIIA (Gas Mulia) karena kulit pertamanya telah terisi penuh dan memiliki sifat kimia inert yang identik dengan gas mulia lainnya.

##### Uji Konsep Kualitatif
1. Suatu atom netral memiliki konfigurasi elektron terluar $4s^2 4p^3$. Tentukan periode dan golongan unsur tersebut berdasarkan sistem A/B dan IUPAC!
   *Jawaban:* Periode = 4 ($n_{\max} = 4$). Subkulit terluar adalah $s$ dan $p$, maka termasuk Golongan Utama: elektron valensi $= 2 + 3 = 5$, sehingga berada pada Golongan VA (atau Golongan 15 IUPAC).
2. Mengapa unsur besi ($Z=26$, konfigurasi $[\ce{Ar}]\ 4s^2 3d^6$) digolongkan sebagai unsur transisi sedangkan kalsium ($Z=20$, konfigurasi $[\ce{Ar}]\ 4s^2$) digolongkan sebagai unsur utama?
   *Jawaban:* Besi memiliki subkulit $3d$ yang sedang terisi sebagian (elektron valensi melibatkan orbital $d$), sedangkan kalsium elektron terluarnya hanya mengisi subkulit $s$.

---

#### 3. Taktik Soal: Penerapan & Pemeriksaan Logika

##### Soal Contoh (Worked Example)
Tentukan letak periode dan golongan (sistem penomoran Romawi A/B serta angka IUPAC 1–18) untuk unsur:
1. Kromium ($\ce{_{24}Cr}$)
2. Bromin ($\ce{_{35}Br}$)

> [!TITIK_RAWAN]
> ### ⚠️ Titik Rawan Kesalahan (Common Pitfalls)
> - **Anomali Kestabilan Subkulit $d$:** Kromium ($Z=24$) memiliki konfigurasi $[\ce{Ar}]\ 4s^1 3d^5$, bukan $[\ce{Ar}]\ 4s^2 3d^4$. Meskipun demikian, jumlah total elektron valensinya tetap sama ($1 + 5 = 6$), sehingga tetap berada pada Golongan VIB.
> - **Penjumlahan Elektron Valensi Blok $p$:** Pada unsur bromin ($[\ce{Ar}]\ 4s^2 3d^{10} 4p^5$), subkulit $3d^{10}$ yang sudah terisi penuh berada di kulit dalam dan **tidak dihitung** sebagai elektron valensi. Elektron valensi bromin hanya berasal dari kulit terluar ($n=4$), yaitu $4s^2 + 4p^5 = 7$ elektron.

##### Strategi Penyelesaian:
1. **Untuk Kromium ($\ce{_{24}Cr}$):**
   - Tuliskan konfigurasi elektron keadaan dasar: $\ce{_{24}Cr}: [\ce{Ar}]\ 4s^1 3d^5$.
   - Tentukan nilai kulit terbesar: $n_{\max} = 4 \rightarrow \mathbf{\text{Periode } 4}$.
   - Tentukan blok dan elektron valensi: Elektron terakhir mengisi subkulit $d$ (Blok $d$). Jumlah elektron $s + d = 1 + 5 = 6$.
   - **Kesimpulan:** Kromium terletak pada **Periode 4, Golongan VIB** (Golongan 6 pada sistem IUPAC).

2. **Untuk Bromin ($\ce{_{35}Br}$):**
   - Tuliskan konfigurasi elektron keadaan dasar: $\ce{_{35}Br}: [\ce{Ar}]\ 4s^2 3d^{10} 4p^5$.
   - Tentukan nilai kulit terbesar: $n_{\max} = 4 \rightarrow \mathbf{\text{Periode } 4}$.
   - Tentukan blok dan elektron valensi: Elektron terluar berada pada kulit $n=4$, yaitu $4s^2 4p^5$ (Blok $p$). Jumlah elektron valensi $= 2 + 5 = 7$.
   - **Kesimpulan:** Bromin terletak pada **Periode 4, Golongan VIIA** (Golongan 17 pada sistem IUPAC).

> [!PEMERIKSAAN_LOGIKA]
> ### 🔍 Pemeriksaan Logika (Sanity Check) & Koneksi
> - **Sanity Check:** Pastikan nomor golongan tidak pernah melebihi 8 untuk sistem Romawi A/B, dan tidak pernah melebihi 18 untuk sistem IUPAC. Bromin adalah halogen pembentuk garam biner ($\ce{NaBr}$), yang secara logis wajib berada di Golongan VIIA.
> - **Koneksi Lintas Bab:** Penentuan elektron valensi ini menjadi landasan mutlak untuk menggambarkan struktur titik Lewis pada Subbab 2.3 dan memprediksi jumlah domain ikatan pada Subbab 2.5.

##### Latihan Terbimbing
1. Suatu ion kation $X^{2+}$ memiliki konfigurasi elektron $[\ce{Ar}]\ 3d^8$. Tentukan letak periode dan golongan atom netral $X$ dalam sistem A/B dan IUPAC! *(Kunci Jawaban Akhir: Periode 4, Golongan VIIIB / Golongan 10 IUPAC, karena atom netral memiliki 28 elektron dengan konfigurasi [Ar] 4s² 3d⁸)*
2. Tentukan periode dan golongan unsur timah ($\ce{_{50}Sn}$) dalam sistem periodik! *(Kunci Jawaban Akhir: Periode 5, Golongan IVA / Golongan 14 IUPAC)*`,
      checkpointQuizzes: [
        {
          id: 'chk-sma-201-1',
          type: 'multiple_choice',
          question: 'Unsur dengan konfigurasi elektron $[\ce{Ar}]\ 4s^2 3d^3$ terletak pada periode dan golongan...',
          options: [
            'Periode 4, Golongan IIIA',
            'Periode 4, Golongan VB',
            'Periode 3, Golongan VB',
            'Periode 4, Golongan VA',
          ],
          correctAnswer: 1,
          explanation:
            'Nilai n terbesar adalah 4, sehingga terletak pada Periode 4. Karena elektron valensi berada pada subkulit s dan d (Blok d), maka jumlah elektron valensi = 2 + 3 = 5, yang merupakan Golongan VB (Golongan 5 IUPAC).',
        },
        {
          id: 'chk-sma-201-2',
          type: 'true_false',
          question: 'Subkulit d yang terisi penuh seperti $3d^{10}$ pada unsur $\ce{_{31}Ga}$ dihitung sebagai elektron valensi penentu nomor golongan.',
          correctAnswer: false,
          explanation:
            'Salah. Subkulit d yang sudah terisi penuh pada kulit n-1 dianggap sebagai elektron teras (kulit dalam) yang stabil dan tidak ikut dihitung sebagai elektron valensi penentu golongan utama.',
        },
      ],
    },
    {
      tag: 'sma-02-tren-sifat-keperiodikan',
      tags: ['sifat-keperiodikan', 'jari-jari-atom', 'energi-ionisasi', 'afinitas-elektron', 'keelektronegatifan'],
      title: 'Subbab 2.2: Tren Sifat Keperiodikan Unsur (Jari-Jari, Energi Ionisasi, Afinitas, Keelektronegatifan)',
      summary: 'Analisis gaya elektrostatik inti terhadap awan elektron, perbandingan ukuran ion, dan anomali kestabilan subkulit.',
      content: `#### 1. Intuisi: Dari Fenomena ke Tingkat Partikel
Mengapa logam natrium sangat mudah melepaskan satu elektron dan bereaksi hebat dengan air, sedangkan gas klorin justru sangat haus menangkap elektron? Jawabannya terletak pada tarik-menarik elektrostatik antara muatan positif proton di dalam inti dengan muatan negatif elektron di kulit terluar.

Dua faktor partikel utama yang mengendalikan sifat keperiodikan adalah:
1. **Jumlah Kulit Elektron ($n$):** Semakin banyak lapisan kulit elektron, semakin jauh elektron valensi dari inti atom (efek perisai elektron kulit dalam semakin kuat).
2. **Muatan Inti Efektif ($Z_{\text{eff}}$):** Dalam satu periode dari kiri ke kanan, jumlah kulit tetap sama, tetapi jumlah proton di dalam inti bertambah. Akibatnya, muatan positif inti menarik awan elektron valensi dengan gaya yang semakin kuat ke arah pusat.

Perhatikan Gambar 2.2 berikut yang merangkum arah peningkatan empat sifat keperiodikan utama pada Tabel Periodik.

<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sma-b02-tren-periodik-title sma-b02-tren-periodik-desc" data-diagram="sma-b02-tren-periodik" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="sma-b02-tren-periodik-title">VEKTOR TREN SIFAT KEPERIODIKAN UNSUR</title>
  <desc id="sma-b02-tren-periodik-desc">DIAGRAM VEKTOR PENINGKATAN JARI-JARI ATOM, ENERGI IONISASI, AFINITAS ELEKTRON, DAN KEELEKTRONEGATIFAN PADA TABEL PERIODIK MODERN.</desc>

  <!-- TITLE BANNER -->
  <rect x="20" y="20" width="760" height="40" rx="8" fill="#ececec" stroke="#1f2937" stroke-width="2"/>
  <text x="400" y="45" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" text-anchor="middle">VEKTOR TREN SIFAT KEPERIODIKAN UNSUR</text>

  <!-- CENTER FRAMEWORK -->
  <rect x="60" y="75" width="680" height="100" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <circle cx="95" cy="105" r="14" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <text x="95" y="110" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">H</text>

  <circle cx="705" cy="105" r="14" fill="#cdb8f5" stroke="#1f2937" stroke-width="1.5"/>
  <text x="705" y="110" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">HE</text>

  <circle cx="95" cy="150" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <text x="95" y="155" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">FR</text>

  <circle cx="670" cy="115" r="14" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/>
  <text x="670" y="120" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">F</text>

  <text x="400" y="130" fill="#4b5563" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" text-anchor="middle">KERANGKA TABEL PERIODIK MODERN</text>

  <!-- PANEL KIRI: JARI-JARI ATOM -->
  <rect x="40" y="190" width="340" height="70" rx="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="2"/>
  <text x="210" y="218" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" text-anchor="middle">JARI-JARI ATOM MAKIN BESAR</text>
  <text x="210" y="242" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">KE KIRI DAN KE BAWAH (KULIT BERTAMBAH)</text>

  <!-- PANEL KANAN: ENERGI IONISASI & ELEKTRONEGATIF -->
  <rect x="420" y="190" width="340" height="70" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="2"/>
  <text x="590" y="218" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" text-anchor="middle">ENERGI IONISASI &amp; ELEKTRONEGATIF</text>
  <text x="590" y="242" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">KE KANAN DAN KE ATAS (ZEFF MAKIN KUAT)</text>
</svg>
<div class="text-center font-sans text-xs font-semibold text-slate-500 mt-2 mb-4">Gambar 2.2: Vektor kecenderungan umum sifat keperiodikan unsur dalam Tabel Periodik Modern.</div>

Mengapa tren energi ionisasi dalam satu periode tidak selalu naik lurus, melainkan mengalami sedikit penurunan pada unsur Golongan IIIA dan VIA?

---

#### 2. Formalisasi: Konsep Baku & Hubungan Matematis

1. **Jari-Jari Atom** adalah setengah jarak antara dua inti atom yang identik dalam ikatan kovalen tunggal:
   - **Dalam satu golongan (atas ke bawah):** Bertambah besar, karena jumlah kulit elektron ($n$) bertambah sehingga jarak elektron terluar ke inti semakin jauh.
   - **Dalam satu periode (kiri ke kanan):** Bertambah kecil, karena muatan inti efektif ($Z_{\text{eff}}$) meningkat sementara jumlah kulit tetap sama, sehingga awan elektron ditarik lebih merapat ke inti.
   - **Perbandingan Ukuran Ion:**
     - Kation selalu **lebih kecil** daripada atom netralnya ($r_{\text{kation}} < r_{\text{netral}}$), karena pelepasan elektron mengurangi tolakan antar-elektron dan sering kali menghilangkan satu lapisan kulit terluar.
     - Anion selalu **lebih besar** daripada atom netralnya ($r_{\text{anion}} > r_{\text{netral}}$), karena penambahan elektron meningkatkan tolakan elektrostatik di kulit terluar sehingga awan elektron mengembang.

2. **Energi Ionisasi Pertama ($EI_1$)** adalah energi minimum yang diperlukan untuk melepaskan satu elektron paling luar dari satu mol atom netral berwujud gas pada keadaan dasar:
$$\ce{X(g) -> X+(g) + e-} \quad \Delta H = EI_1 > 0$$
   - **Tren:** Bertambah besar dari kiri ke kanan dalam satu periode, dan bertambah kecil dari atas ke bawah dalam satu golongan.
   - **Anomali Kestabilan Subkulit:**
     - $EI_1$ Golongan IIA ($\ce{Be}: 2s^2$) lebih tinggi daripada IIIA ($\ce{B}: 2s^2 2p^1$) karena subkulit $s$ penuh memiliki kestabilan ekstra, dan elektron $2p^1$ lebih mudah dilepaskan karena terperisai oleh elektron $2s^2$.
     - $EI_1$ Golongan VA ($\ce{N}: 2s^2 2p^3$) lebih tinggi daripada VIA ($\ce{O}: 2s^2 2p^4$) karena subkulit $p$ setengah penuh ($\\uparrow \\uparrow \\uparrow$) lebih stabil dibanding subkulit yang memuat sepasang elektron bertolakan ($\\uparrow\downarrow \\uparrow \\uparrow$).

3. **Afinitas Elektron ($AE$)** adalah perubahan energi yang menyertai penambahan satu elektron pada satu mol atom netral berwujud gas:
$$\ce{X(g) + e- -> X-(g)}$$
   Semakin negatif nilai $\Delta H$ (semakin besar energi yang dibebaskan), semakin mudah atom tersebut menarik elektron membentuk anion stabil. Tren umumnya makin bertambah negatif dari kiri ke kanan dalam satu periode.

4. **Keelektronegatifan (Skala Pauling)** adalah ukuran kemampuan relatif suatu atom dalam molekul untuk menarik pasangan elektron ikatan ke arah dirinya sendiri. Fluorin ($\ce{F}$) memiliki nilai tertinggi ($4.0$), sedangkan Fransium ($\ce{Fr}$) terendah ($0.7$).

**Makna Fisis Besaran:**
Energi ionisasi mengukur seberapa kuat atom mempertahankan elektron miliknya, sedangkan keelektronegatifan mengukur seberapa kuat atom memperebutkan elektron milik bersama dalam suatu ikatan.

> [!SYARAT_BATAS]
> ### ⚖️ Syarat Batas & Asumsi
> 1. Nilai Energi Ionisasi dan Afinitas Elektron wajib diukur pada **fasa gas diskrit ($\text{g}$)** untuk meniadakan pengaruh interaksi antar-partikel kisi atau pelarut.
> 2. **Gas Mulia (Golongan VIIIA)** memiliki Energi Ionisasi tertinggi dalam tiap periodenya karena konfigurasi oktet yang sangat stabil, namun **tidak memiliki nilai keelektronegatifan standar pada skala Pauling** karena atom gas mulia umumnya tidak membentuk ikatan kovalen stabil.

##### Uji Konsep Kualitatif
1. Urutkan jari-jari partikel isoelektronik berikut dari yang terkecil hingga terbesar: $^{16}\ce{O^2-}$, $^{19}\ce{F^-}$, $^{23}\ce{Na+}$, $^{24}\ce{Mg^2+}$!
   *Jawaban:* Seluruh ion memiliki jumlah elektron yang sama (10 elektron). Urutan ditentukan oleh jumlah proton di inti atomnya: semakin banyak proton, tarikan ke inti semakin kuat sehingga ukuran semakin mengecil:
   $$\ce{Mg^2+} (12p) < \ce{Na+} (11p) < \ce{F-} (9p) < \ce{O^2-} (8p)$$
2. Mengapa energi ionisasi kedua ($EI_2$) natrium melonjak lebih dari 9 kali lipat dibanding energi ionisasi pertamanya ($EI_1$)?
   *Jawaban:* Pelepasan elektron kedua pada natrium membongkar konfigurasi oktet gas mulia $[\ce{Ne}]$ dari kulit bagian dalam ($n=2$) yang sangat dekat dengan inti.

---

#### 3. Taktik Soal: Penerapan & Pemeriksaan Logika

##### Soal Contoh (Worked Example)
Diberikan empat unsur dalam periode yang sama: $\ce{_{11}Na}$, $\ce{_{12}Mg}$, $\ce{_{13}Al}$, dan $\ce{_{14}Si}$.
1. Urutkan keempat unsur tersebut berdasarkan kenaikan jari-jari atomnya!
2. Jelaskan mengapa energi ionisasi pertama magnesium ($\ce{_{12}Mg}$) lebih tinggi daripada aluminium ($\ce{_{13}Al}$)!

> [!TITIK_RAWAN]
> ### ⚠️ Titik Rawan Kesalahan (Common Pitfalls)
> - **Miskonsepsi Monoton:** Siswa sering terjebak berasumsi bahwa energi ionisasi dalam satu periode selalu naik teratur ($\ce{Na} < \ce{Mg} < \ce{Al} < \ce{Si}$). Padahal terjadi anomali pembalikan antara Golongan IIA ($\ce{Mg}$) dan IIIA ($\ce{Al}$).
> - **Jari-Jari vs Nomor Massa:** Jangan terkecoh mengira nomor massa yang bertambah besar membuat jari-jari atom bertambah besar dalam satu periode; gaya tarik inti yang meningkat justru memperkecil jari-jari atom dari kiri ke kanan.

##### Strategi Penyelesaian:
1. **Urutan Jari-Jari Atom:**
   - Keempat unsur berada pada Periode 3. Dari kiri ke kanan, muatan inti bertambah ($\ce{Na}: 11p, \ce{Mg}: 12p, \ce{Al}: 13p, \ce{Si}: 14p$).
   - Tarikan inti terhadap kulit elektron terluar semakin kuat, sehingga jari-jari atom semakin mengecil.
   - **Urutan kenaikan jari-jari (dari terkecil ke terbesar):**
     $$\ce{Si} < \ce{Al} < \ce{Mg} < \ce{Na}$$

2. **Perbandingan Energi Ionisasi $\ce{Mg}$ vs $\ce{Al}$:**
   - Tuliskan konfigurasi elektron subkulit terluar:
     - $\ce{_{12}Mg}: [\ce{Ne}]\ 3s^2$ (subkulit $3s$ terisi penuh, stabil).
     - $\ce{_{13}Al}: [\ce{Ne}]\ 3s^2 3p^1$ (elektron tunggal pada subkulit $3p$).
   - Elektron $3p^1$ pada atom $\ce{Al}$ memiliki tingkat energi lebih tinggi dan terperisai oleh elektron $3s^2$, sehingga memerlukan energi lebih sedikit untuk dilepaskan dibandingkan elektron $3s^2$ pada $\ce{Mg}$.
   - Oleh karena itu, $EI_1\ \ce{Mg} (738\text{ kJ mol}^{-1}) > EI_1\ \ce{Al} (578\text{ kJ mol}^{-1})$.

> [!PEMERIKSAAN_LOGIKA]
> ### 🔍 Pemeriksaan Logika (Sanity Check) & Koneksi
> - **Sanity Check:** Logam alkali ($\ce{Na}$) selalu memiliki jari-jari terbesar dan energi ionisasi terendah di periodenya karena hanya memiliki muatan inti paling sedikit untuk menahan lapisan kulit ketiga.
> - **Koneksi Lintas Bab:** Beda keelektronegatifan antar-atom yang dibahas di subbab ini menjadi penentu mutlak apakah ikatan yang terbentuk bersifat ionik, kovalen polar, atau kovalen nonpolar pada Subbab 2.3 dan 2.4.

##### Latihan Terbimbing
1. Di antara unsur $^{15}\ce{P}$ dan $^{16}\ce{S}$, manakah yang memiliki energi ionisasi pertama lebih besar? Jelaskan berdasarkan konfigurasi elektron subkulitnya! *(Kunci Jawaban Akhir: Fosfor (P), karena memiliki konfigurasi subkulit 3p³ yang setengah penuh dan simetris sehingga lebih stabil dibanding belerang 3p⁴)*
2. Urutkan ion $\ce{K+}$, $\ce{Ca^2+}$, dan $\ce{Cl-}$ berdasarkan penurunan jari-jari ionnya! *(Kunci Jawaban Akhir: Cl⁻ > K⁺ > Ca²⁺)*`,
      checkpointQuizzes: [
        {
          id: 'chk-sma-202-1',
          type: 'multiple_choice',
          question: 'Di antara spesi berikut, manakah yang memiliki ukuran jari-jari partikel paling besar?',
          options: ['Atom Na netral', 'Ion Na⁺', 'Ion Mg²⁺', 'Ion Al³⁺'],
          correctAnswer: 0,
          explanation:
            'Atom Na netral memiliki 3 lapisan kulit elektron (2, 8, 1). Ketika membentuk ion kation (Na⁺, Mg²⁺, Al³⁺), lapisan kulit terluar hilang sehingga hanya tersisa 2 kulit. Oleh karena itu, atom Na netral memiliki jari-jari paling besar.',
        },
        {
          id: 'chk-sma-202-2',
          type: 'true_false',
          question: 'Gas mulia neon memiliki nilai keelektronegatifan lebih besar daripada fluorin karena terletak di sebelah kanan fluorin pada Periode 2.',
          correctAnswer: false,
          explanation:
            'Salah. Gas mulia tidak memiliki kecenderungan menarik pasangan elektron ikatan kovalen karena konfigurasi oktetnya sudah penuh dan stabil, sehingga fluorin tetap memegang nilai keelektronegatifan tertinggi.',
        },
      ],
    },
    {
      tag: 'sma-02-kestabilan-ikatan-ionik-logam',
      tags: ['ikatan-kimia', 'ikatan-ionik', 'ikatan-logam', 'aturan-oktet', 'lambang-lewis'],
      title: 'Subbab 2.3: Kestabilan Atom, Lambang Lewis, serta Ikatan Ionik dan Ikatan Logam',
      summary: 'Perpindahan elektron, pembentukan kisi kristal garam, dan delokalisasi elektron bebas pada kisi logam.',
      content: `#### 1. Intuisi: Dari Fenomena ke Tingkat Partikel
Mengapa lempeng tembaga dapat dibengkokkan dan ditempa menjadi kawat tipis tanpa pecah, sedangkan sebutir kristal garam dapur ($\ce{NaCl}$) langsung hancur berkeping-keping saat dipukul martil? Keduanya tampak padat dan kuat, tetapi susunan partikel dan interaksi elektrostatik di dalamnya bertolak belakang.

Pada kristal garam dapur, atom logam natrium melepaskan satu elektron ke atom nonlogam klorin. Ion positif ($\ce{Na+}$) dan ion negatif ($\ce{Cl-}$) saling mengunci dalam formasi selang-seling 3 dimensi yang kaku. Sebaliknya, pada lempeng tembaga, seluruh atom logam melepaskan elektron valensinya ke suatu ruang bersama, membentuk "lautan elektron" yang bebas bergerak mengitari kisi kation logam yang diam.

Perhatikan Gambar 2.3 berikut yang membandingkan respon kisi kristal ionik dan kisi logam terhadap tekanan mekanik eksternal.

<svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sma-b02-ikatan-ionik-logam-title sma-b02-ikatan-ionik-logam-desc" data-diagram="sma-b02-ikatan-ionik-logam" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="sma-b02-ikatan-ionik-logam-title">RESPON MEKANIK KISI KRISTAL IONIK VS KISI LOGAM</title>
  <desc id="sma-b02-ikatan-ionik-logam-desc">KOMPARASI TINGKAT PARTIKEL PERGESERAN LAPISAN MUATAN IONIK YANG RAPUH VERSUS KELENTURAN KATION DALAM LAUTAN ELEKTRON LOGAM.</desc>

  <!-- TITLE BANNER -->
  <rect x="20" y="20" width="760" height="40" rx="8" fill="#ececec" stroke="#1f2937" stroke-width="2"/>
  <text x="400" y="45" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" text-anchor="middle">RESPON MEKANIK: KISI KRISTAL IONIK VS KISI LOGAM</text>

  <!-- PANEL KIRI: SENYAWA IONIK (RAPUH) -->
  <rect x="30" y="75" width="350" height="205" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <text x="205" y="102" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" text-anchor="middle">KISI KRISTAL IONIK (RAPUH / BRITTLE)</text>

  <circle cx="85" cy="135" r="14" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/><text x="85" y="140" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">+</text>
  <circle cx="135" cy="135" r="14" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/><text x="135" y="140" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">-</text>
  <circle cx="185" cy="135" r="14" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/><text x="185" y="140" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">+</text>
  <circle cx="235" cy="135" r="14" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/><text x="235" y="140" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">-</text>

  <circle cx="105" cy="180" r="14" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/><text x="105" y="185" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">+</text>
  <circle cx="155" cy="180" r="14" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/><text x="155" y="185" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">+</text>
  <circle cx="205" cy="180" r="14" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/><text x="205" y="185" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">-</text>
  <circle cx="255" cy="180" r="14" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/><text x="255" y="185" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">-</text>

  <rect x="45" y="215" width="320" height="50" rx="6" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/>
  <text x="205" y="236" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">MUATAN SEJENIS SALING BERHADAPAN</text>
  <text x="205" y="254" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">TOLAK-MENOLAK SEHINGGA KRISTAL PECAH</text>

  <!-- PANEL KANAN: IKATAN LOGAM (LENTUR) -->
  <rect x="420" y="75" width="350" height="205" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <text x="595" y="102" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" text-anchor="middle">KISI LOGAM (LENTUR / MALLEABLE)</text>

  <circle cx="475" cy="135" r="14" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/><text x="475" y="140" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">+</text>
  <circle cx="535" cy="135" r="14" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/><text x="535" y="140" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">+</text>
  <circle cx="595" cy="135" r="14" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/><text x="595" y="140" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">+</text>
  <circle cx="655" cy="135" r="14" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/><text x="655" y="140" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">+</text>

  <circle cx="505" cy="145" r="4" fill="#1f2937"/>
  <circle cx="565" cy="145" r="4" fill="#1f2937"/>
  <circle cx="625" cy="145" r="4" fill="#1f2937"/>

  <circle cx="495" cy="180" r="14" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/><text x="495" y="185" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">+</text>
  <circle cx="555" cy="180" r="14" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/><text x="555" y="185" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">+</text>
  <circle cx="615" cy="180" r="14" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/><text x="615" y="185" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">+</text>
  <circle cx="675" cy="180" r="14" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/><text x="675" y="185" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">+</text>

  <rect x="435" y="215" width="320" height="50" rx="6" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5"/>
  <text x="595" y="236" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">LAUTAN ELEKTRON BEBAS BERGERAK</text>
  <text x="595" y="254" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">IKATAN TETAP UTUH KETIKA DIGESER</text>
</svg>
<div class="text-center font-sans text-xs font-semibold text-slate-500 mt-2 mb-4">Gambar 2.3: Perbedaan mekanisme fisis kerapuhan kisi ionik vs kelenturan kisi logam terhadap pergeseran mekanik.</div>

Bagaimana aturan konfigurasi oktet menjelaskan jumlah elektron yang harus dipindahkan untuk membentuk senyawa ionik yang netral?

---

#### 2. Formalisasi: Konsep Baku & Hubungan Matematis

1. **Prinsip Kestabilan Konfigurasi Gas Mulia:**
   Atom-atom selain gas mulia mencapai konfigurasi energi terendah yang stabil dengan cara melepaskan, menangkap, atau menggunakan bersama pasangan elektron:
   - **Kaidah Duplet:** Konfigurasi 2 elektron valensi stabil pada kulit pertama ($1s^2$), dicapai oleh atom hidrogen, litium, dan berilium mengikuti konfigurasi helium ($\ce{He}$).
   - **Kaidah Oktet:** Konfigurasi 8 elektron valensi stabil pada kulit terluar ($ns^2 np^6$), dicapai dengan menyerupai gas mulia periode bersangkutan ($\ce{Ne, Ar, Kr, Xe}$).

2. **Ikatan Ionik (Elektrovalen)** adalah gaya tarik-menarik elektrostatik antara ion bermuatan positif (kation logam berenergi ionisasi rendah) dengan ion bermuatan negatif (anion nonlogam berafinitas elektron tinggi).
   Besar gaya elektrostatik mengikuti Hukum Coulomb:
   $$F = k \cdot \frac{|q_1 \cdot q_2|}{r^2}$$
   *Sifat Fisis Khas Senyawa Ionik:*
   - Berwujud padat pada suhu kamar dengan titik leleh dan titik didih tinggi akibat kuatnya kisi kristal.
   - Bersifat rapuh (*brittle*): pergeseran lapisan sedikit saja membuat ion sejenis berhadapan dan saling menolak.
   - Tidak menghantarkan listrik pada fasa padat (ion terkunci kaku), tetapi menghantarkan arus listrik dengan sangat baik saat **dilelehkan ($\text{l}$)** atau **dilarutkan dalam air ($\text{aq}$)** karena ion-ion bebas bergerak.

3. **Ikatan Logam** adalah gaya tarik elektrostatik antara kisi kation-kation logam bermuatan positif dengan awan elektron valensi yang terdelokalisasi (bebas bergerak ke seluruh volume logam).
   *Sifat Fisis Khas Logam:*
   - Konduktor listrik dan panas yang sangat baik karena elektron bebas bergerak cepat menghantarkan muatan dan energi kinetik.
   - Dapat ditempa (*malleable*) dan diulur (*ductile*): ketika logam dipukul, lapisan kation bergeser tetapi lautan elektron segera menyesuaikan posisi mempertahankan ikatan.

**Makna Fisis Konsep:**
Ikatan ionik terbentuk karena transfer elektron total akibat beda keelektronegatifan yang besar ($\Delta EN \ge 2.0$), sedangkan ikatan logam terbentuk karena elektron valensi lepas dari atom induknya dan dipakai bersama oleh seluruh kisi kristal logam.

> [!SYARAT_BATAS]
> ### ⚖️ Syarat Batas & Asumsi
> 1. Senyawa ionik di fasa padat **tidak membentuk molekul diskrit tunggal**. Rumus $\ce{NaCl}$ hanyalah rumus empiris perbandingan stoikiometri $1:1$ dalam kisi kristal tak terhingga $(\ce{NaCl})_n$.
> 2. Ikatan antara logam dan nonlogam **tidak selalu murni ionik**. Kation logam berukuran sangat kecil dengan muatan tinggi (seperti $\ce{Be^2+}$ dan $\ce{Al^3+}$) memiliki kerapatan muatan sangat tinggi yang mempolarisasi awan elektron anion, sehingga senyawanya ($\ce{BeCl2}, \ce{AlCl3}$) memiliki sifat dominan kovalen.

##### Uji Konsep Kualitatif
1. Mengapa lelehan magnesium oksida ($\ce{MgO}$) memiliki titik leleh ($2852^\circ\text{C}$) yang jauh lebih tinggi dibanding natrium klorida ($\ce{NaCl}$, $801^\circ\text{C}$)?
   *Jawaban:* Berdasarkan Hukum Coulomb, gaya elektrostatik sebanding dengan perkalian muatan ion ($|q_1 \cdot q_2|$). Pada $\ce{MgO}$, muatannya adalah $(+2) \times (-2) = 4$, sedangkan pada $\ce{NaCl}$ muatannya hanya $(+1) \times (-1) = 1$. Tarikan kisi $\ce{MgO}$ empat kali lebih kuat.
2. Tuliskan lambang Lewis untuk pembentukan ikatan antara atom $\ce{_{12}Mg}$ dan $\ce{_{8}O}$!
   *Jawaban:* $\ce{Mg} \cdot \cdot + :\dot{\text{O}}: \rightarrow [\ce{Mg}]^{2+} [:\ddot{\text{O}}:]^{2-}$.

---

#### 3. Taktik Soal: Penerapan & Pemeriksaan Logika

##### Soal Contoh (Worked Example)
Unsur $X$ ($Z=20$) bereaksi dengan unsur $Y$ ($Z=17$) membentuk suatu senyawa biner.
1. Tuliskan lambang Lewis masing-masing unsur!
2. Gambarkan proses pembentukan ikatan menggunakan struktur Lewis dan tentukan rumus kimia senyawa yang dihasilkan!

> [!TITIK_RAWAN]
> ### ⚠️ Titik Rawan Kesalahan (Common Pitfalls)
> - **Penulisan Tanda Ikatan Kovalen:** Jangan pernah menggambarkan ikatan ionik dengan garis strip ikatan (seperti $\ce{X-Y}$ atau $\ce{Y-X-Y}$). Ikatan ionik wajib ditulis sebagai pasangan ion bertanda kurung siku dengan muatan di luar kurung: $[\ce{X}]^{2+} 2[\ce{:\!Y\!:\!}]^-$.
> - **Keseimbangan Muatan Listrik:** Jumlah total muatan positif kation harus sama persis dengan jumlah total muatan negatif anion agar senyawa yang terbentuk netral secara listrik.

##### Strategi Penyelesaian:
1. **Konfigurasi Elektron & Elektron Valensi:**
   - Unsur $X$ ($Z=20$): $2, 8, 8, 2 \rightarrow$ elektron valensi $= 2$ (Logam Golongan IIA, cenderung melepas $2e^-$ membentuk $X^{2+}$).
   - Unsur $Y$ ($Z=17$): $2, 8, 7 \rightarrow$ elektron valensi $= 7$ (Nonlogam Golongan VIIA, cenderung menangkap $1e^-$ membentuk $Y^-$).

2. **Reaksi Pembentukan Senyawa Netral:**
   - Satu atom $X$ melepaskan 2 elektron valensi:
     $$\ce{X -> X^2+ + 2e-}$$
   - Karena satu atom $Y$ hanya dapat menerima 1 elektron, dibutuhkan 2 atom $Y$:
     $$\ce{2Y + 2e- -> 2Y-}$$
   - Penggabungan ionik dengan lambang Lewis:
     $$X\cdot\cdot + 2 \, :\ddot{\text{Y}}\cdot \;\rightarrow\; [\ce{X}]^{2+} \; 2\left[:\ddot{\text{Y}}:\right]^-$$
   - **Rumus Kimia:** $\mathbf{\ce{XY2}}$ (Contoh nyata: $\ce{CaCl2}$).

> [!PEMERIKSAAN_LOGIKA]
> ### 🔍 Pemeriksaan Logika (Sanity Check) & Koneksi
> - **Sanity Check:** Logam kalsium ($\ce{Ca^2+}$) berpasangan dengan dua ion klorida ($\ce{Cl-}$), menghasilkan netralitas muatan $(+2) + 2(-1) = 0$.
> - **Koneksi Lintas Bab:** Senyawa $\ce{CaCl2}$ yang terbentuk merupakan zat terlarut elektrolit kuat yang akan menghasilkan 3 partikel ion ($i=3$) saat dipelajari pada Sifat Koligatif Larutan Bab 10.

##### Latihan Terbimbing
1. Tentukan rumus kimia dan gambarkan struktur ionik senyawa yang terbentuk dari aluminium ($Z=13$) dan belerang ($Z=16$)! *(Kunci Jawaban Akhir: Al₂S₃ dengan notasi 2[Al]³⁺ 3[:S:]²⁻)*
2. Di antara zat berikut: $\ce{Fe(s)}$, $\ce{NaCl(s)}$, $\ce{NaCl(l)}$, dan $\ce{H2O(l)}$, manakah yang mampu menghantarkan arus listrik melalui pergerakan elektron bebas? *(Kunci Jawaban Akhir: Fe(s) melalui lautan elektron terdelokalisasi pada ikatan logam)*`,
      checkpointQuizzes: [
        {
          id: 'chk-sma-203-1',
          type: 'multiple_choice',
          question: 'Manakah kondisi berikut di mana garam dapur $\ce{NaCl}$ dapat menghantarkan arus listrik?',
          options: [
            'Hanya dalam wujud kristal padat',
            'Dalam wujud lelehan dan larutan dalam air',
            'Hanya ketika berwujud gas',
            'Tidak dapat menghantarkan listrik dalam semua wujud',
          ],
          correctAnswer: 1,
          explanation:
            'Dalam wujud kristal padat, ion Na⁺ dan Cl⁻ terkunci rapat di kisi kristal. Listrik hanya dapat dihantarkan jika ion-ion tersebut dapat bergerak bebas mengalirkan muatan, yaitu saat dilelehkan (fasa l) atau dilarutkan dalam air (fasa aq).',
        },
        {
          id: 'chk-sma-203-2',
          type: 'true_false',
          question: 'Ketika logam ditempa menjadi kawat tipis, kisi logam menjadi retak karena kation logam saling bertolakan.',
          correctAnswer: false,
          explanation:
            'Salah. Lautan elektron pada ikatan logam bersifat fleksibel dan dapat mengalir mengitari kation-kation yang bergeser, sehingga ikatan tidak putus dan logam dapat ditempa.',
        },
      ],
    },
    {
      tag: 'sma-02-ikatan-kovalen-penyimpangan-oktet',
      tags: ['ikatan-kovalen', 'kovalen-koordinasi', 'kepolaran-ikatan', 'penyimpangan-oktet', 'struktur-lewis'],
      title: 'Subbab 2.4: Ikatan Kovalen (Tunggal, Rangkap, Koordinasi) dan Pengecualian Oktet Dasar',
      summary: 'Pemakaian pasangan elektron bersama, mekanisme ikatan kovalen koordinasi, dan batasan kestabilan oktet.',
      content: `#### 1. Intuisi: Dari Fenomena ke Tingkat Partikel
Bagaimana dua atom klorin yang sama-sama memiliki keelektronegatifan tinggi ($3.0$) dapat membentuk molekul gas $\ce{Cl2}$ yang stabil? Karena keduanya sama-sama kuat menarik elektron, tidak ada atom yang bersedia melepaskan elektronnya seperti pada ikatan ionik. Solusinya, kedua atom saling menyumbangkan satu elektron valensi untuk membentuk satu **Pasangan Elektron Ikatan (PEI)** yang dipakai bersama di antara kedua inti atom.

Namun, tidak semua ikatan kovalen menyumbangkan elektron dari dua arah. Pada ion amonium ($\ce{NH4+}$), molekul amonia ($\ce{NH3}$) meminjamkan sepasang elektron bebasnya secara sepihak kepada ion $\ce{H+}$ yang tidak memiliki elektron sama sekali. Fenomena pemakaian bersama elektron sepihak ini disebut **ikatan kovalen koordinasi (ikatan dativ)**.

Perhatikan Gambar 2.4 berikut yang mengilustrasikan ragam ikatan kovalen serta contoh molekul yang menyimpang dari aturan oktet.

<svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sma-b02-ikatan-kovalen-title sma-b02-ikatan-kovalen-desc" data-diagram="sma-b02-ikatan-kovalen" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="sma-b02-ikatan-kovalen-title">RAGAM IKATAN KOVALEN DAN PENYIMPANGAN ATURAN OKTET</title>
  <desc id="sma-b02-ikatan-kovalen-desc">DIAGRAM STRUKTUR LEWIS IKATAN KOVALEN KOORDINASI PADA ION AMONIUM DAN PENYIMPANGAN OKTET PADA SENYAWA BF3 SERTA SF6.</desc>

  <!-- TITLE BANNER -->
  <rect x="20" y="20" width="760" height="40" rx="8" fill="#ececec" stroke="#1f2937" stroke-width="2"/>
  <text x="400" y="45" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" text-anchor="middle">IKATAN KOORDINASI DAN PENYIMPANGAN OKTET</text>

  <!-- BOX 1: KOVALEN KOORDINASI NH4+ -->
  <rect x="30" y="75" width="350" height="205" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <text x="205" y="96" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" text-anchor="middle">IKATAN KOORDINASI PADA NH4+</text>
  <circle cx="205" cy="170" r="24" fill="#8fd3ef" stroke="#1f2937" stroke-width="2"/>
  <text x="205" y="176" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" text-anchor="middle">N</text>

  <circle cx="145" cy="170" r="14" fill="#ececec" stroke="#1f2937" stroke-width="1.5"/><text x="145" y="175" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">H</text>
  <circle cx="265" cy="170" r="14" fill="#ececec" stroke="#1f2937" stroke-width="1.5"/><text x="265" y="175" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">H</text>
  <circle cx="205" cy="215" r="14" fill="#ececec" stroke="#1f2937" stroke-width="1.5"/><text x="205" y="220" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">H</text>
  <circle cx="205" cy="125" r="14" fill="#fde58a" stroke="#1f2937" stroke-width="2"/><text x="205" y="130" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">H+</text>

  <line x1="205" y1="146" x2="205" y2="139" stroke="#1f2937" stroke-width="2.5"/>
  <rect x="45" y="238" width="320" height="34" rx="6" fill="#ececec" stroke="#1f2937" stroke-width="1.5"/>
  <text x="205" y="260" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">3 KOVALEN BIASA + 1 KOORDINASI</text>

  <!-- BOX 2: PENYIMPANGAN OKTET -->
  <rect x="420" y="75" width="350" height="205" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <text x="595" y="102" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" text-anchor="middle">PENYIMPANGAN ATURAN OKTET</text>

  <!-- BF3: OKTET TAK LENGKAP -->
  <rect x="435" y="115" width="320" height="65" rx="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5"/>
  <text x="595" y="138" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">OKTET TAK LENGKAP: BF3</text>
  <text x="595" y="160" fill="#4b5563" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">ATOM B PUSAT HANYA MEMILIKI 6 ELEKTRON</text>

  <!-- SF6: OKTET BERKEMBANG -->
  <rect x="435" y="195" width="320" height="65" rx="6" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5"/>
  <text x="595" y="218" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">EKSPANSI OKTET: SF6</text>
  <text x="595" y="240" fill="#4b5563" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">ATOM S PUSAT MEMILIKI 12 ELEKTRON IKATAN</text>
</svg>
<div class="text-center font-sans text-xs font-semibold text-slate-500 mt-2 mb-4">Gambar 2.4: Skema pembentukan ikatan kovalen koordinasi dan contoh penyimpangan aturan oktet pada molekul anorganik.</div>

Mengapa unsur periode 2 seperti karbon, nitrogen, dan oksigen tidak pernah mengalami ekspansi oktet melebihi 8 elektron?

---

#### 2. Formalisasi: Konsep Baku & Hubungan Matematis

1. **Ikatan Kovalen** adalah ikatan kimia yang terbentuk akibat pemakaian bersama pasangan elektron oleh dua atom nonlogam:
   - **Kovalen Tunggal:** Pemakaian bersama 1 pasang elektron ($1\text{ PEI}$, contoh: $\ce{H2, Cl2, CH4}$).
   - **Kovalen Rangkap Dua:** Pemakaian bersama 2 pasang elektron ($2\text{ PEI}$, contoh: $\ce{O2, CO2}$).
   - **Kovalen Rangkap Tiga:** Pemakaian bersama 3 pasang elektron ($3\text{ PEI}$, contoh: $\ce{N2}$). Memiliki energi ikatan terbesar dan panjang ikatan paling pendek di antara ketiganya.
   - **Kovalen Koordinasi (Dativ):** Ikatan kovalen di mana pasangan elektron yang digunakan bersama hanya disumbangkan oleh salah satu atom yang memiliki Pasangan Elektron Bebas (PEB). Dilambangkan dengan tanda panah ($\rightarrow$) mengarah dari atom donor ke atom akseptor.

2. **Kepolaran Ikatan Kovalen:**
   - **Kovalen Nonpolar:** Terbentuk antara atom-atom dengan perbedaan keelektronegatifan nol atau sangat kecil ($\Delta EN \approx 0$). Pasangan elektron ikatan ditarik simetris di tengah kedua inti (contoh: $\ce{H2, O2, Cl2}$).
   - **Kovalen Polar:** Terbentuk antara atom-atom dengan perbedaan keelektronegatifan nyata ($0.4 < \Delta EN < 1.7$). Pasangan elektron tergeser merapat ke arah atom yang lebih elektronegatif, membentuk dipol muatan parsial ($\delta^+$ dan $\delta^-$) (contoh: $\ce{H^{\delta+} - Cl^{\delta-}}$).

3. **Tiga Jenis Pengecualian Aturan Oktet:**
   - **Oktet Tidak Lengkap:** Atom pusat stabil dengan kurang dari 8 elektron valensi. Khas pada senyawa berilium ($\ce{BeCl2}$, 4 elektron di sekitar $\ce{Be}$) dan boron ($\ce{BF3}$, 6 elektron di sekitar $\ce{B}$).
   - **Molekul Berelektron Ganjil:** Total elektron valensi berjumlah ganjil sehingga mustahil semua elektron berpasangan (contoh: radikal $\ce{NO2}$ dengan total 17 elektron valensi).
   - **Oktet Berkembang (Ekspansi Oktet):** Atom pusat dikelilingi lebih dari 8 elektron valensi (10 atau 12 elektron, contoh: $\ce{PCl5}$ memiliki 10 elektron di sekitar $\ce{P}$, $\ce{SF6}$ memiliki 12 elektron di sekitar $\ce{S}$).

**Makna Fisis Aturan:**
Aturan oktet adalah panduan empiris kestabilan gas mulia; gaya pendorong utama pembentukan ikatan sebenarnya adalah minimasi energi potensial elektrostatik molekul secara keseluruhan.

> [!SYARAT_BATAS]
> ### ⚖️ Syarat Batas & Asumsi
> 1. **Syarat Ekspansi Oktet:** Oktet berkembang hanya mungkin terjadi pada unsur-unsur **Periode 3 ke atas** (seperti $\ce{P, S, Cl, Br, I, Xe}$) karena memiliki subkulit orbital $d$ kosong berenergi dekat yang dapat dilibatkan dalam ikatan.
> 2. **Larangan Mutlak Periode 2:** Unsur-unsur Periode 2 ($\ce{C, N, O, F}$) **TIDAK PERNAH** dapat mengalami ekspansi oktet karena kulit kedua ($n=2$) hanya terdiri atas subkulit $2s$ dan $2p$ yang memiliki kapasitas fisik maksimum tepat 8 elektron. Oleh karena itu, molekul $\ce{NF5}$ tidak pernah ada di alam, sedangkan $\ce{PF5}$ dapat terbentuk stabil.

##### Uji Konsep Kualitatif
1. Berapakah jumlah ikatan kovalen tunggal dan ikatan kovalen koordinasi pada molekul asam sulfat ($\ce{H2SO4}$) jika mengikuti aturan oktet baku pada atom pusat belerang?
   *Jawaban:* Terdapat 2 ikatan tunggal $\ce{S-O-H}$ dan 2 ikatan kovalen koordinasi $\ce{S -> O}$ di mana belerang mendonorkan sepasang elektron bebasnya ke masing-masing atom oksigen terminal.
2. Mengapa molekul gas nitrogen ($\ce{N2}$) sangat sukar bereaksi (inert) pada suhu kamar dibanding gas hidrogen ($\ce{H2}$)?
   *Jawaban:* Molekul $\ce{N2}$ memiliki ikatan kovalen rangkap tiga ($\ce{N \equiv N}$) yang sangat kuat dengan energi disosiasi mencapai $945\text{ kJ mol}^{-1}$, jauh lebih kokoh dibanding ikatan tunggal $\ce{H-H}$ ($436\text{ kJ mol}^{-1}$).

---

#### 3. Taktik Soal: Penerapan & Pemeriksaan Logika

##### Soal Contoh (Worked Example)
Tentukan struktur Lewis molekul sulfur dioksida ($\ce{SO2}$), dan hitung jumlah ikatan kovalen rangkap dua, ikatan kovalen koordinasi, serta pasangan elektron bebas (PEB) pada atom pusat sulfur (ikuti aturan oktet baku)!

> [!TITIK_RAWAN]
> ### ⚠️ Titik Rawan Kesalahan (Common Pitfalls)
> - **Salah Menghitung Total Elektron Valensi:** Sulfur ($Z=16$) memiliki 6 elektron valensi dan Oksigen ($Z=8$) memiliki 6 elektron valensi. Total elektron valensi molekul $\ce{SO2}$ adalah $6 + 2(6) = 18$ elektron (9 pasang).
> - **Membuat Dua Ikatan Rangkap Dua Tanpa Syarat:** Jika dibuat dua ikatan rangkap ($\ce{O=S=O}$), atom sulfur akan memiliki 10 elektron (oktet berkembang). Jika soal mensyaratkan pemenuhan aturan oktet baku (8 elektron di sekitar S), maka satu ikatan adalah kovalen rangkap dua ($\ce{O=S}$) dan satu ikatan lainnya adalah kovalen koordinasi ($\ce{S -> O}$).

##### Strategi Penyelesaian:
1. **Hitung Anggaran Elektron Valensi:**
   - $\ce{S}: 6\text{ elektron}$
   - $2 \times \ce{O}: 2 \times 6 = 12\text{ elektron}$
   - Total $= 18\text{ elektron}$ (9 pasang).

2. **Rangkai Kerangka Dasar & Lengkapi Oktet Atom Terminal:**
   - Hubungkan atom pusat $\ce{S}$ ke dua atom $\ce{O}$ dengan ikatan tunggal: $\ce{O - S - O}$ (terpakai 2 pasang $= 4e^-$).
   - Lengkapi oktet pada atom $\ce{O}$ terminal: masing-masing diberi 3 pasang elektron bebas (terpakai $2 \times 6 = 12e^-$).
   - Sisa elektron: $18 - (4 + 12) = 2\text{ elektron}$ (1 pasang). Letakkan sisa 1 pasang ini sebagai PEB pada atom pusat $\ce{S}$.

3. **Lengkapi Oktet Atom Pusat Sulfur:**
   - Saat ini sulfur baru dikelilingi oleh $2\text{ PEI} + 1\text{ PEB} = 6\text{ elektron}$ (belum oktet).
   - Ambil 1 pasang elektron bebas dari salah satu atom oksigen untuk dijadikan ikatan rangkap dua ke sulfur: $\ce{O = S - O}$.
   - Analisis ikatan pada $\ce{O = S -> O}$:
     - 1 ikatan kovalen rangkap dua ($\ce{O=S}$)
     - 1 ikatan kovalen koordinasi ($\ce{S -> O}$, karena pasangan elektron ikatan berasal murni dari sulfur)
     - 1 pasang elektron bebas (PEB) pada atom pusat $\ce{S}$.

> [!PEMERIKSAAN_LOGIKA]
> ### 🔍 Pemeriksaan Logika (Sanity Check) & Koneksi
> - **Sanity Check:** Periksa keliling tiap atom: atom oksigen kiri memiliki 8 elektron ($4e^-$ ikatan $+ 4e^-$ bebas), atom belerang memiliki 8 elektron ($6e^-$ ikatan $+ 2e^-$ bebas), dan atom oksigen kanan memiliki 8 elektron ($2e^-$ ikatan $+ 6e^-$ bebas). Total elektron $= 18$.
> - **Koneksi Lintas Bab:** Kehadiran 1 PEB dan 2 domain ikatan pada sulfur dioksida ini akan menentukan bentuk molekul huruf V ($AX_2 E$) pada Subbab 2.5.

##### Latihan Terbimbing
1. Gambarkan struktur Lewis molekul fosforus pentaklorida ($\ce{PCl5}$) dan tentukan apakah molekul tersebut mematuhi atau menyimpang dari aturan oktet! *(Kunci Jawaban Akhir: Menyimpang dari aturan oktet / oktet berkembang, karena atom pusat P dikelilingi oleh 10 elektron valensi dari 5 ikatan kovalen tunggal)*
2. Di antara molekul $\ce{CO2}$, $\ce{H2O}$, dan $\ce{N2}$, manakah yang memuat ikatan kovalen rangkap dua? *(Kunci Jawaban Akhir: CO₂ memiliki dua ikatan kovalen rangkap dua O=C=O)*`,
      checkpointQuizzes: [
        {
          id: 'chk-sma-204-1',
          type: 'multiple_choice',
          question: 'Di antara senyawa berikut, manakah yang memiliki atom pusat dengan konfigurasi oktet tidak lengkap (kurang dari 8 elektron)?',
          options: ['$\ce{CH4}$', '$\ce{H2O}$', '$\ce{BF3}$', '$\ce{SF6}$'],
          correctAnswer: 2,
          explanation:
            'Pada senyawa BF₃, atom boron (B) hanya dikelilingi oleh 3 pasang elektron ikatan (total 6 elektron), sehingga stabil dalam bentuk oktet tidak lengkap.',
        },
        {
          id: 'chk-sma-204-2',
          type: 'true_false',
          question: 'Molekul $\ce{NF5}$ tidak dapat terbentuk di alam karena unsur nitrogen tidak memiliki subkulit d kosong pada kulit valensinya.',
          correctAnswer: true,
          explanation:
            'Benar. Nitrogen berada pada Periode 2 (n=2) yang hanya memiliki subkulit 2s dan 2p berkapasitas maksimal 8 elektron, sehingga tidak mampu menampung 10 elektron ikatan seperti fosfor (Periode 3).',
        },
      ],
    },
    {
      tag: 'sma-02-geometri-molekul-gaya-antarmolekul',
      tags: ['geometri-molekul', 'vsepr', 'hibridisasi', 'kepolaran-molekul', 'gaya-antarmolekul', 'ikatan-hidrogen'],
      title: 'Subbab 2.5: Geometri Molekul (VSEPR & Hibridisasi) serta Gaya Antarmolekul',
      summary: 'Prediksi bentuk 3D domain elektron, kepolaran ruang, dan hierarki kekuatan gaya antarmolekul.',
      content: `#### 1. Intuisi: Dari Fenomena ke Tingkat Partikel
Pernahkah kamu memikirkan mengapa air ($\ce{H2O}$) berwujud cair pada suhu kamar dengan titik didih tinggi ($100^\circ\text{C}$), sedangkan gas metana ($\ce{CH4}$) yang memiliki massa molekul relatif hampir sama ($M_r\ \ce{CH4}=16$ vs $M_r\ \ce{H2O}=18$) sudah mendidih pada suhu amat beku $-161^\circ\text{C}$? 

Ketika air mendidih, molekul air tidak terurai menjadi gas hidrogen dan gas oksigen. Ikatan kovalen $\ce{O-H}$ di dalam molekul tetap utuh. Yang terputus hanyalah gaya tarik yang menautkan satu molekul air dengan molekul tetangganya, yaitu **gaya antarmolekul**.

Bentuk 3 dimensi molekul dikendalikan oleh tolakan pasangan elektron valensi di sekitar atom pusat. Pasangan elektron bebas (PEB) memiliki ruang awan elektron yang lebih gemuk dibanding pasangan elektron ikatan (PEI). Akibatnya, PEB memberikan dorongan tolakan elektrostatik ekstra yang membengkokkan sudut ikatan molekul air menjadi bentuk huruf V ($104.5^\circ$), menciptakan ketidakseimbangan momen dipol yang membuat air bersifat sangat polar.

Perhatikan Gambar 2.5 berikut yang merangkum geometri dasar VSEPR dan anomali titik didih hidrida golongan utama.

<svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sma-b02-geometri-molekul-title sma-b02-geometri-molekul-desc" data-diagram="sma-b02-geometri-molekul" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="sma-b02-geometri-molekul-title">GEOMETRI VSEPR DAN HIERARKI GAYA ANTARMOLEKUL</title>
  <desc id="sma-b02-geometri-molekul-desc">KLASIFIKASI LIMA BENTUK GEOMETRI VSEPR DASAR SERTA URUTAN KEKUATAN GAYA ANTARMOLEKUL.</desc>

  <!-- TITLE BANNER -->
  <rect x="20" y="20" width="760" height="40" rx="8" fill="#ececec" stroke="#1f2937" stroke-width="2"/>
  <text x="400" y="45" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" text-anchor="middle">GEOMETRI VSEPR DAN HIERARKI GAYA ANTARMOLEKUL</text>

  <!-- PANEL KIRI: 5 BENTUK DASAR VSEPR -->
  <rect x="30" y="75" width="350" height="205" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <text x="205" y="102" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">GEOMETRI VSEPR ATOM PUSAT TANPA PEB</text>

  <rect x="45" y="115" width="320" height="25" rx="4" fill="#ececec" stroke="#1f2937" stroke-width="1"/>
  <text x="55" y="132" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8">AX2: LINIER</text>
  <text x="350" y="132" text-anchor="end" fill="#4b5563" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8">BECL2, CO2</text>

  <rect x="45" y="145" width="320" height="25" rx="4" fill="#ececec" stroke="#1f2937" stroke-width="1"/>
  <text x="55" y="162" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8">AX3: TRIGONAL PLANAR</text>
  <text x="350" y="162" text-anchor="end" fill="#4b5563" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8">BF3, SO3</text>

  <rect x="45" y="175" width="320" height="25" rx="4" fill="#ececec" stroke="#1f2937" stroke-width="1"/>
  <text x="55" y="192" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8">AX4: TETRAHEDRAL</text>
  <text x="350" y="192" text-anchor="end" fill="#4b5563" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8">CH4, CCL4</text>

  <rect x="45" y="205" width="320" height="25" rx="4" fill="#ececec" stroke="#1f2937" stroke-width="1"/>
  <text x="55" y="222" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8">AX5: BIPIRAMIDA TRIGONAL</text>
  <text x="350" y="222" text-anchor="end" fill="#4b5563" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8">PCL5</text>

  <rect x="45" y="235" width="320" height="25" rx="4" fill="#ececec" stroke="#1f2937" stroke-width="1"/>
  <text x="55" y="252" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8">AX6: OKTAHEDRAL</text>
  <text x="350" y="252" text-anchor="end" fill="#4b5563" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8">SF6</text>

  <!-- PANEL KANAN: GAYA ANTARMOLEKUL -->
  <rect x="420" y="75" width="350" height="205" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <text x="595" y="102" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" text-anchor="middle">HIERARKI GAYA ANTARMOLEKUL</text>

  <rect x="435" y="115" width="320" height="45" rx="6" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/>
  <text x="595" y="133" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">1. IKATAN HIDROGEN (PALING KUAT)</text>
  <text x="595" y="150" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">ATOM H DENGAN F, O, ATAU N (H2O, HF, NH3)</text>

  <rect x="435" y="168" width="320" height="45" rx="6" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <text x="595" y="186" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">2. GAYA DIPOL - DIPOL (SEDANG)</text>
  <text x="595" y="203" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">ANTAR MOLEKUL POLAR PERMANEN (HCL, SO2)</text>

  <rect x="435" y="221" width="320" height="45" rx="6" fill="#ececec" stroke="#1f2937" stroke-width="1.5"/>
  <text x="595" y="239" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">3. GAYA DISPERSI LONDON (UNIVERSAL)</text>
  <text x="595" y="256" fill="#4b5563" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">SEMAKIN BESAR MR, MAKIN KUAT GAYANYA</text>
</svg>
<div class="text-center font-sans text-xs font-semibold text-slate-500 mt-2 mb-4">Gambar 2.5: Klasifikasi geometri molekul domain elektron VSEPR dan urutan kekuatan gaya antarmolekul.</div>

Bagaimana membedakan molekul yang memiliki ikatan kovalen polar tetapi secara keseluruhan bersifat nonpolar?

---

#### 2. Formalisasi: Konsep Baku & Hubungan Matematis

1. **Teori VSEPR (*Valence Shell Electron Pair Repulsion*):**
   Bentuk molekul ditentukan oleh penataan domain elektron di sekitar atom pusat untuk meminimalkan tolakan elektrostatik.
   Kekuatan tolakan domain:
   $$\text{Tolakan PEB - PEB} > \text{Tolakan PEB - PEI} > \text{Tolakan PEI - PEI}$$
   Kehadiran PEB selalu mempersempit sudut ikatan antar-PEI (contoh: $\ce{CH4}$ tetrahedral tanpa PEB $= 109.5^\circ$, $\ce{NH3}$ piramida trigonal 1 PEB $= 107^\circ$, $\ce{H2O}$ huruf V 2 PEB $= 104.5^\circ$).

2. **Formulasi Tipe Molekul & Hibridisasi Atom Pusat:**
   $$\text{Tipe Molekul} = AX_n E_m$$
   - $A$: atom pusat
   - $X$: pasangan elektron ikatan (PEI)
   - $E$: pasangan elektron bebas (PEB)
   - $n$: jumlah atom yang terikat langsung
   - $m$: jumlah PEB pada atom pusat, dihitung dengan:
     $$m = \frac{EV - X - \sum(\text{elektron ikatan kovalen koordinasi})}{2}$$

| Domain ($n+m$) | Hibridisasi | Tipe ($AX_n E_m$) | Bentuk Geometri Molekul | Kepolaran Dasar | Contoh |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **2** | $sp$ | $AX_2$ | Linier | Nonpolar | $\ce{BeCl2, CO2}$ |
| **3** | $sp^2$ | $AX_3$ | Segitiga Datar | Nonpolar | $\ce{BF3, SO3}$ |
| **3** | $sp^2$ | $AX_2 E$ | Huruf V / Bengkok | Polar | $\ce{SO2}$ |
| **4** | $sp^3$ | $AX_4$ | Tetrahedral | Nonpolar | $\ce{CH4, CCl4}$ |
| **4** | $sp^3$ | $AX_3 E$ | Piramida Trigonal | Polar | $\ce{NH3, PCl3}$ |
| **4** | $sp^3$ | $AX_2 E_2$ | Huruf V / Bengkok | Polar | $\ce{H2O}$ |
| **5** | $sp^3d$ | $AX_5$ | Bipiramida Trigonal | Nonpolar | $\ce{PCl5}$ |
| **5** | $sp^3d$ | $AX_4 E$ | Tetrahedral Terdistorsi (Jungkat-jungkit) | Polar | $\ce{SF4}$ |
| **5** | $sp^3d$ | $AX_3 E_2$ | Bentuk T | Polar | $\ce{ClF3}$ |
| **5** | $sp^3d$ | $AX_2 E_3$ | Linier | Nonpolar | $\ce{XeF2}$ |
| **6** | $sp^3d^2$ | $AX_6$ | Oktahedral | Nonpolar | $\ce{SF6}$ |
| **6** | $sp^3d^2$ | $AX_5 E$ | Piramida Segi Empat | Polar | $\ce{BrF5}$ |
| **6** | $sp^3d^2$ | $AX_4 E_2$ | Segi Empat Datar | Nonpolar | $\ce{XeF4}$ |

3. **Kepolaran Molekul Berdasarkan Kesimetrisan:**
   Suatu molekul bersifat **Nonpolar** jika vektor momen dipol ikatan saling meniadakan ($\sum \vec{\mu} = 0$), yang terjadi jika bentuk molekulnya simetris sempurna tanpa PEB (seperti $\ce{CO2, CH4, CCl4}$), atau jika distribusi PEB simetris aksial/ekuatorial (seperti $\ce{XeF2, XeF4}$).
   Suatu molekul bersifat **Polar** jika bentuknya asimetris sehingga momen dipol tidak saling meniadakan ($\sum \vec{\mu} \ne 0$, seperti $\ce{H2O, NH3, CHCl3}$).

4. **Hierarki Gaya Antarmolekul (Van der Waals & Ikatan Hidrogen):**
   - **Gaya London (Gaya Dispersi):** Gaya tarik lemah akibat dipol sesaat dan dipol terimbas. Bekerja pada semua molekul. Kekuatannya berbanding lurus dengan massa molekul relatif ($M_r$) dan luas permukaan sentuh molekul.
   - **Gaya Dipol-Dipol:** Gaya tarik elektrostatik antarmolekul polar permanen ($\delta^+$ menempel ke $\delta^-$ tetangga).
   - **Ikatan Hidrogen:** Gaya antarmolekul istimewa yang terjadi jika atom $\ce{H}$ berikatan langsung dengan atom kecil yang sangat elektronegatif ($\ce{F, O, N}$). Mengakibatkan anomali lonjakan titik didih yang sangat tinggi pada $\ce{H2O, HF, NH3}$.

**Makna Fisis Konsep:**
Geometri molekul menentukan kesimetrisan distribusi awan elektron: molekul asimetris menghasilkan momen dipol netto yang memperkuat gaya tarik antarmolekul dan menaikkan titik didih zat.

> [!SYARAT_BATAS]
> ### ⚖️ Syarat Batas & Asumsi
> 1. **Definisi Ikatan Hidrogen:** Ikatan hidrogen adalah **gaya antarmolekul**, bukan ikatan kimia intramolekul di dalam satu molekul.
> 2. **Syarat Atom Pengikat:** Ikatan hidrogen **hanya terbentuk** jika atom H terikat kovalen langsung pada atom berukuran sangat kecil dan berkeelektronegatifan sangat tinggi ($\ce{F, O, N}$). Senyawa seperti $\ce{HCl}$ atau $\ce{H2S}$ **TIDAK memiliki ikatan hidrogen** karena ukuran atom klorin dan belerang terlalu besar sehingga kerapatan muatannya terlalu rendah untuk membentuk ikatan hidrogen sejati.

##### Uji Konsep Kualitatif
1. Karbon tetraklorida ($\ce{CCl4}$) memiliki empat ikatan $\ce{C-Cl}$ yang masing-masing sangat polar. Mengapa molekul $\ce{CCl4}$ secara keseluruhan justru bersifat nonpolar?
   *Jawaban:* Molekul $\ce{CCl4}$ memiliki geometri tetrahedral simetris ($AX_4$). Keempat vektor dipol $\ce{C-Cl}$ berorientasi ke empat sudut ruang yang sama besar dan saling meniadakan ($\sum \vec{\mu} = 0$).
2. Di antara gas mulia $\ce{He, Ne, Ar, Kr, Xe}$, manakah yang memiliki titik didih paling tinggi? Jelaskan!
   *Jawaban:* Gas xenon ($\ce{Xe}$), karena memiliki jumlah elektron paling banyak dan $M_r$ terbesar, sehingga awan elektronnya paling mudah terpolarisasi menghasilkan gaya dispersi London paling kuat.

---

#### 3. Taktik Soal: Penerapan & Pemeriksaan Logika

##### Soal Contoh (Worked Example)
Untuk molekul ksenon tetrafluorida ($\ce{XeF4}$):
1. Tentukan jumlah PEI ($n$) dan PEB ($m$) pada atom pusat ksenon!
2. Tentukan tipe molekul, geometri bentuk molekul, hibridisasi atom pusat, serta kepolaran molekul tersebut!

> [!TITIK_RAWAN]
> ### ⚠️ Titik Rawan Kesalahan (Common Pitfalls)
> - **Gas Mulia Dapat Berikatan:** Ksenon adalah gas mulia Periode 5 yang memiliki orbital $d$ kosong, sehingga mampu membentuk ikatan kovalen melalui ekspansi oktet dengan atom yang sangat elektronegatif seperti fluorin.
> - **Miskonsepsi Adanya PEB Berarti Polar:** Banyak siswa mengira setiap molekul yang memiliki PEB pasti bersifat polar. Pada $\ce{XeF4}$ ($AX_4 E_2$), dua PEB berada pada posisi aksial saling berseberangan ($180^\circ$) dan empat ikatan $\ce{Xe-F}$ berada pada bidang datar bujur sangkar ekuatorial, sehingga seluruh momen dipol saling meniadakan dan menghasilkan molekul **nonpolar**.

##### Strategi Penyelesaian:
1. **Hitung Domain Elektron Atom Pusat:**
   - Ksenon ($\ce{Xe}$) Golongan VIIIA $\rightarrow EV = 8$.
   - Atom terminal Fluorin ($\ce{F}$) monovalen $\rightarrow$ jumlah PEI ($n$) $= 4$.
   - Hitung PEB ($m$):
     $$m = \frac{EV - n}{2} = \frac{8 - 4}{2} = 2\text{ PEB}$$

2. **Tentukan Tipe Molekul, Hibridisasi, dan Bentuk:**
   - Tipe Molekul: $\mathbf{AX_4 E_2}$.
   - Total domain elektron $= n + m = 4 + 2 = 6 \rightarrow$ Hibridisasi $\mathbf{sp^3d^2}$ (Domain dasar Oktahedral).
   - Penataan ruang: Untuk meminimalkan tolakan, 2 PEB menempati posisi atas dan bawah (aksial). Empat ikatan $\ce{Xe-F}$ terletak pada satu bidang datar segiempat.
   - **Bentuk Geometri Molekul:** **Segi Empat Datar (Square Planar)**.
   - **Kepolaran:** Vektor dipol $\ce{Xe-F}$ berlawanan arah saling meniadakan, dan tolakan 2 PEB aksial saling meniadakan. Momen dipol total $\mu = 0 \rightarrow$ **Nonpolar**.

> [!PEMERIKSAAN_LOGIKA]
> ### 🔍 Pemeriksaan Logika (Sanity Check) & Koneksi
> - **Sanity Check:** Pastikan total pasangan elektron di sekitar ksenon adalah $4\text{ ikatan} + 2\text{ bebas} = 6\text{ pasang} = 12\text{ elektron}$. Ksenon berada di Periode 5 sehingga ekspansi oktet hingga 12 elektron sangat diizinkan secara fisis.
> - **Koneksi Lintas Bab:** Karena $\ce{XeF4}$ bersifat nonpolar, gaya antarmolekul yang dominan di antara molekul-molekulnya hanyalah gaya London. Hal ini memengaruhi kelarutannya yang lebih mudah larut dalam pelarut nonpolar seperti yang dibahas pada Sifat Larutan di Bab 7.

##### Latihan Terbimbing
1. Tentukan tipe molekul, geometri bentuk molekul, dan kepolaran dari molekul fosforus triklorida ($\ce{PCl3}$)! *(Kunci Jawaban Akhir: Tipe AX₃E, bentuk Piramida Trigonal, bersifat Polar)*
2. Di antara molekul etanol ($\ce{CH3CH2OH}$) dan dimetil eter ($\ce{CH3OCH3}$) yang memiliki rumus molekul sama ($\ce{C2H6O}$), manakah yang memiliki titik didih lebih tinggi? Jelaskan! *(Kunci Jawaban Akhir: Etanol, karena memiliki gugus -OH yang mampu membentuk ikatan hidrogen antarmolekul yang kuat)*`,
      checkpointQuizzes: [
        {
          id: 'chk-sma-205-1',
          type: 'multiple_choice',
          question: 'Molekul air ($\ce{H2O}$) memiliki bentuk huruf V dengan sudut ikatan $104.5^\circ$, bukan $109.5^\circ$ seperti gas metana ($\ce{CH4}$). Hal ini disebabkan oleh...',
          options: [
            'Massa atom oksigen lebih besar daripada atom karbon',
            'Gaya tolakan PEB-PEB lebih kuat daripada tolakan PEI-PEI',
            'Adanya ikatan hidrogen di dalam molekul air',
            'Ikatan O-H lebih panjang dibanding ikatan C-H',
          ],
          correctAnswer: 1,
          explanation:
            'Berdasarkan teori VSEPR, awan elektron pasangan elektron bebas (PEB) lebih gemuk dan terkonsentrasi di dekat atom pusat sehingga memberikan dorongan tolakan yang lebih kuat (tolakan PEB-PEB > PEI-PEI), mempersempit sudut ikatan H-O-H menjadi 104.5°.',
        },
        {
          id: 'chk-sma-205-2',
          type: 'true_false',
          question: 'Molekul gas klorometana ($\ce{CH3Cl}$) bersifat nonpolar karena memiliki geometri tetrahedral.',
          correctAnswer: false,
          explanation:
            'Salah. Meskipun sudut ikatannya mendekati tetrahedral, ikatan C-Cl jauh lebih polar dibanding tiga ikatan C-H sehingga dipol ikatan tidak saling meniadakan secara simetris, menjadikan molekul CH₃Cl bersifat polar.',
        },
      ],
    },
  ],
  core_concepts: [
    {
      tag: 'sma-02-penutup-bab-macro-loop',
      tags: ['pengayaan-inkuiri', 'ringkasan-spu-ikatan', 'peta-keputusan-geometri', 'evaluasi-mandiri'],
      title: 'Penutup Bab 2: Pengayaan Inkuiri, Peta Keputusan, & Evaluasi Mandiri',
      summary: 'Aplikasi material semikonduktor, peta keputusan jenis ikatan & geometri molekul, serta uji pemahaman 3 tingkat.',
      content: `### 🔬 Pengayaan Inkuiri & Kontekstual

#### Revolusi Material Semikonduktor: Dari Kisi Kristal Silikon ke Grafena Kovalen Raksasa
Dalam era transformasi digital, seluruh chip mikroprosesor komputer dan ponsel pintar beroperasi berdasarkan sifat kelistrikan unsur **Silikon ($\ce{_{14}Si}$)**. Silikon terletak pada Golongan IVA (Periode 3) tepat di bawah karbon. Mengapa silikon digunakan sebagai semikonduktor, bukan karbon atau timbal?

Silikon memiliki 4 elektron valensi dengan celah pita energi (*bandgap*) yang moderat ($1.1\text{ eV}$). Pada suhu rendah, silikon murni berlaku sebagai isolator karena keempat elektron valensinya terkunci dalam kisi kovalen raksasa tetrahedral ($sp^3$). Namun, pada suhu kamar, sedikit energi termal sudah cukup untuk mengeksitasi beberapa elektron melintasi celah energi ke pita konduksi, memungkinkan kontrol aliran arus listrik secara presisi melalui rekayasa penyisipan atom asing (*doping* Golongan IIIA atau VA).

Sebagai tandingannya, ilmuwan modern mengembangkan **Grafena**, lembaran tunggal atom karbon berhibridisasi $sp^2$ dengan cincin heksagonal yang sangat simetris. Pada grafena, elektron valensi keempat terdelokalisasi di atas dan di bawah lembaran membentuk ikatan $\pi$ terkonjugasi raksasa. Hal ini memungkinkan elektron bergerak dengan kecepatan mendekati kecepatan cahaya tanpa hambatan termal, menjadikan grafena sebagai kandidat utama pengganti transistor silikon generasi mendatang.

#### 1. Data Komparasi Sifat Fisika Material Karbon dan Silikon
| Parameter Fisis | Intan (Karbon $sp^3$) | Grafena (Karbon $sp^2$) | Silikon Murni (Periode 3) |
| :--- | :--- | :--- | :--- |
| **Bentuk Kisi Kristal** | Jaringan Kovalen 3D | Lembaran Atomik 2D | Jaringan Kovalen 3D |
| **Kekuatan Ikatan** | Sangat Kuat ($347\text{ kJ mol}^{-1}$) | Amat Sangat Kuat | Kuat ($226\text{ kJ mol}^{-1}$) |
| **Daya Hantar Listrik** | Isolator Mutlak | Konduktor Balistik Super | Semikonduktor |
| **Celah Pita Energi** | Besar ($5.5\text{ eV}$) | Nol ($0\text{ eV}$) | Moderat ($1.1\text{ eV}$) |

#### 2. Pertanyaan Pemandu Bertahap
1. **Analisis Sifat Periodik:** Berdasarkan jari-jari atomnya, jelaskan mengapa ikatan kovalen tunggal $\ce{C-C}$ ($r_{\text{C}} = 77\text{ pm}$) jauh lebih kuat dibanding ikatan kovalen tunggal $\ce{Si-Si}$ ($r_{\text{Si}} = 118\text{ pm}$)!
2. **Koneksi Hibridisasi & Geometri:** Mengapa intan bersifat isolator listrik sedangkan grafena merupakan konduktor listrik yang sangat baik, padahal keduanya tersusun murni dari atom karbon?
3. **Penerapan Gaya Antarmolekul:** Lembaran-lembaran grafena menumpuk membentuk mineral grafit. Gaya antarmolekul apakah yang menahan lembaran-lembaran tersebut, dan bagaimana hal ini menjelaskan sifat grafit yang licin digunakan sebagai pelumas atau pensil?

#### 3. Analisis & Sintesis Konsep
Pada intan, setiap atom karbon menggunakan keempat elektron valensinya untuk membentuk 4 ikatan kovalen $\sigma$ terlokalisasi bergeometri tetrahedral ($sp^3$). Tidak ada elektron bebas yang dapat bergerak menghantarkan muatan listrik. Pada grafena, setiap atom karbon hanya menggunakan 3 elektron valensi untuk membentuk ikatan $\sigma$ planar ($sp^2$). Elektron valensi keempat menempati orbital $p_z$ tegak lurus bidang yang saling tumpang-tindih membentuk awan elektron terdelokalisasi di seluruh permukaan lembaran, bertindak mirip seperti lautan elektron pada ikatan logam. Lembaran-lembaran grafit ditahan oleh **gaya dispersi London** yang relatif lemah, sehingga lembaran dapat saling menggelincir (*slip*) saat ditekan pada kertas.

#### 4. Koneksi Lintas Bab
Pemahaman tentang delokalisasi elektron pada cincin karbon berhibridisasi $sp^2$ ini akan menjadi kunci utama dalam memahami struktur resonansi cincin benzena pada Kimia Karbon Bab 12.

---

### ⚡ Ringkasan Cepat & Peta Keputusan

#### A. Tabel Komparasi Konsep Sering Tertukar
| Konsep A | Konsep B | Titik Pembeda Fundamental |
| :--- | :--- | :--- |
| **Ikatan Ionik** | **Ikatan Kovalen** | Ionik melibatkan transfer elektron penuh antara logam dan nonlogam; kovalen melibatkan pemakaian bersama pasangan elektron antar-nonlogam. |
| **Ikatan Kovalen Polar** | **Molekul Polar** | Ikatan kovalen polar ditentukan oleh beda keelektronegatifan atom; molekul polar ditentukan oleh asimetri bentuk geometri 3D ($\sum \vec{\mu} \ne 0$). |
| **Ikatan Kimia Intramolekul** | **Gaya Antarmolekul** | Ikatan intramolekul (kovalen/ionik) menautkan atom di dalam satu molekul; gaya antarmolekul menautkan satu molekul dengan molekul tetangganya. |
| **Oktet Tak Lengkap** | **Oktet Berkembang** | Oktet tak lengkap stabil dengan $<8$ elektron (periode 2: Be, B); oktet berkembang memiliki $>8$ elektron (periode 3 ke atas dengan orbital d: P, S, Cl, Xe). |

#### B. Peta Alur Keputusan: Penentuan Jenis Ikatan & Geometri Molekul
$$\begin{array}{ccccc}
\boxed{\text{Zat Kimia}} & \rightarrow & \text{Apakah melibatkan logam & nonlogam?} & & \\
& & \downarrow\text{YA} & \searrow\text{TIDAK} & \\
& & \boxed{\text{IKATAN IONIK}} & & \boxed{\text{Kovalen / Nonlogam}} \\
& & & & \downarrow \\
& & & & \text{Hitung Domain: } n\text{ (PEI)} + m\text{ (PEB)} \\
& & & & \downarrow \\
& & & & \text{Tentukan Tipe } AX_n E_m \rightarrow \text{Bentuk Geometri} \\
& & & & \downarrow \\
& & & & \text{Apakah Bentuk Simetris & } \sum\vec{\mu}=0\text{?} \\
& & & & \swarrow\text{YA} \quad \searrow\text{TIDAK} \\
& & \boxed{\text{NONPOLAR (London)}} & & \boxed{\text{POLAR (Dipol-Dipol / H-Bond)}}
\end{array}$$

---

### 🏆 Evaluasi Mandiri Berjenjang

#### Tingkat I: Fondasi (Asesmen Formatif)
1. Tentukan letak periode dan golongan unsur dengan nomor atom $Z=15$ dalam tabel periodik! *(Kunci Jawaban Akhir: Periode 3, Golongan VA / 15 IUPAC)*
2. Di antara unsur $^{11}\ce{Na}$ dan $^{19}\ce{K}$, manakah yang memiliki jari-jari atom lebih besar? *(Kunci Jawaban Akhir: Kalium (K), karena memiliki 4 lapisan kulit elektron dibanding natrium yang hanya 3 kulit)*
3. Sebutkan jenis ikatan kimia yang terdapat di dalam kristal magnesium fluorida ($\ce{MgF2}$)! *(Kunci Jawaban Akhir: Ikatan Ionik)*
4. Berapakah jumlah pasangan elektron ikatan (PEI) dan pasangan elektron bebas (PEB) pada molekul air ($\ce{H2O}$)? *(Kunci Jawaban Akhir: 2 PEI dan 2 PEB)*
5. Mengapa gaya tarik antarmolekul pada gas hidrogen fluorida ($\ce{HF}$) jauh lebih kuat dibanding gas hidrogen klorida ($\ce{HCl}$)? *(Kunci Jawaban Akhir: Molekul HF membentuk ikatan hidrogen karena atom F sangat elektronegatif dan berukuran kecil)*

#### Tingkat II: Integrasi (Asesmen Sumatif & Ujian Sekolah)
6. Suatu ion bermuatan $Y^{2-}$ memiliki konfigurasi elektron $[\ce{Ne}]\ 3s^2 3p^6$. Tentukan nomor atom dan letak golongan unsur netral $Y$ dalam sistem periodik! *(Kunci Jawaban Akhir: Z = 16, Periode 3, Golongan VIA / 16 IUPAC)*
7. Urutkan senyawa $\ce{NaCl}$, $\ce{KCl}$, dan $\ce{MgO}$ berdasarkan urutan kenaikan titik lelehnya! *(Kunci Jawaban Akhir: KCl < NaCl < MgO)*
8. Jelaskan mengapa molekul $\ce{CO2}$ bersifat nonpolar padahal ikatan $\ce{C=O}$ bersifat polar! *(Kunci Jawaban Akhir: Molekul CO₂ memiliki geometri linier simetris AX₂ sehingga kedua vektor momen dipol C=O saling meniadakan)*
9. Gambarkan struktur Lewis ion hidronium ($\ce{H3O+}$) dan tunjukkan ikatan kovalen koordinasinya! *(Kunci Jawaban Akhir: Satu pasang elektron bebas pada oksigen didonorkan sepihak ke ion H⁺ membentuk ikatan kovalen koordinasi)*
10. Tentukan tipe molekul dan bentuk geometri dari molekul belerang tetrafluorida ($\ce{SF4}$)! *(Kunci Jawaban Akhir: Tipe AX₄E, bentuk Tetrahedral Terdistorsi / Seesaw)*

#### Tingkat III: Penalaran Lanjut (HOTS, TKA, & SNBT)
11. Dua unsur $A$ ($Z=15$) dan $B$ ($Z=17$) bereaksi membentuk dua jenis senyawa stabil: $AB_3$ dan $AB_5$. Lakukan deduksi terhadap geometri bentuk molekul, tipe hibridisasi atom pusat $A$, dan kepolaran kedua senyawa tersebut! Jelaskan mengapa unsur nitrogen yang sekeluarga dengan $A$ hanya dapat membentuk $NB_3$ dan tidak dapat membentuk $NB_5$!
12. Suatu zat cair tak dikenal $Z$ memiliki rumus molekul $\ce{C3H8O}$. Uji laboratorium menunjukkan bahwa titik didih cairan $Z$ adalah $97^\circ\text{C}$, jauh lebih tinggi dibandingkan senyawa isomernya yang memiliki titik didih $8^\circ\text{C}$. Lakukan analisis gaya antarmolekul kedua isomer tersebut dan gambarkan interaksi partikel yang menyebabkan perbedaan titik didih yang mencolok ini!`,
      keyFormulas: [
        {
          name: 'Hukum Coulomb Ikatan Ionik',
          formula: 'F = k \\cdot \\frac{|q_1 \\cdot q_2|}{r^2}',
        },
        {
          name: 'Perhitungan Domain PEB VSEPR',
          formula: 'm = \\frac{EV - X - \\sum(\\text{elektron koordinasi})}{2}',
        },
      ],
    },
  ],
  worked_examples: [],
};
