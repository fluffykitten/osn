/**
 * smaBab03.ts
 * Bab 3: Hukum Dasar Kimia dan Stoikiometri
 * Jenjang: SMA/MA Kelas X & XI (Fase E & F)
 * Standar: Arsitektur Pedagogis v3 (Adaptasi SaveMyExams)
 */

import type { SmaMaterialItem } from '../../smaMaterialsData';

export const SMA_BAB_03: SmaMaterialItem = {
  id: 103,
  topic_number: 3,
  grade: 'Kelas 10',
  semester: 2,
  curriculumPhase: 'Fase E',
  title: 'Hukum Dasar Kimia dan Stoikiometri',
  slug: 'hukum-dasar-kimia-stoikiometri',
  category: 'Stoikiometri & Hukum Dasar',
  level: 'SMA',
  readTimeMinutes: 45,
  summary:
    'Kajian komprehensif perhitungan kuantitatif kimia: Tatanama senyawa anorganik biner dan poliatomik; teknik penyetaraan reaksi; pembuktian 5 hukum dasar kimia (Lavoisier, Proust, Dalton, Gay-Lussac, Avogadro); navigasi jembatan konversi mol; penentuan kadar zat, rumus empiris dan molekul; analisis molaritas dan pengenceran; hingga kalkulasi stoikiometri reaksi berbasis bagan M-B-S, pereaksi pembatas, persen hasil (yield), dan air kristal hidrat.',
  allTags: [
    'hukum-dasar-kimia',
    'stoikiometri',
    'tatanama-senyawa',
    'penyetaraan-reaksi',
    'hukum-lavoisier',
    'hukum-proust',
    'hukum-dalton',
    'hukum-gay-lussac',
    'hipotesis-avogadro',
    'konsep-mol',
    'massa-molar',
    'volume-molar-stp-rtp',
    'gas-ideal-pv-nrt',
    'jumlah-partikel',
    'bilangan-avogadro',
    'kadar-unsur',
    'rumus-empiris',
    'rumus-molekul',
    'molaritas',
    'pengenceran-larutan',
    'pereaksi-pembatas',
    'bagan-mbs',
    'persen-hasil-yield',
    'senyawa-hidrat',
  ],
  prerequisites: [
    {
      tag: 'sma-03-tatanama-penyetaraan-reaksi',
      tags: ['tatanama-senyawa', 'penyetaraan-reaksi', 'koefisien-reaksi', 'ion-poliatomik'],
      title: 'Subbab 3.1: Tatanama Senyawa Anorganik dan Penyetaraan Persamaan Reaksi',
      summary: 'Konvensi IUPAC penamaan senyawa biner dan poliatomik serta prinsip kekekalan atom dalam penyetaraan reaksi.',
      content: `#### 1. Intuisi: Dari Fenomena ke Tingkat Partikel
Ketika kamu membakar pita magnesium di udara terbuka, timbul kilatan cahaya putih menyilaukan dan terbentuk serbuk putih magnesium oksida. Di tingkat atom, ikatan logam pada kisi magnesium dan ikatan kovalen rangkap dua pada molekul gas oksigen ($\ce{O2}$) terputus. Atom-atom tersebut kemudian bertukar elektron membentuk kisi kristal ionik baru $\ce{MgO}$.

Tidak ada satu pun atom yang musnah atau tercipta secara gaib dalam proses pembakaran tersebut. Setiap atom magnesium dan oksigen yang hadir sebelum reaksi wajib ditemukan kembali setelah reaksi selesai. Untuk menyatakan proses ini secara ilmiah tanpa mengubah identitas zat, kita menyeimbangkan jumlah partikel menggunakan **koefisien reaksi**, bukan mengubah angka indeks zat.

Perhatikan Gambar 3.1 berikut yang memperjelas perbedaan mendasar antara mengubah koefisien reaksi dan mengubah angka indeks senyawa.

<svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sma-b03-tatanama-penyetaraan-title sma-b03-tatanama-penyetaraan-desc" data-diagram="sma-b03-tatanama-penyetaraan" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="sma-b03-tatanama-penyetaraan-title">DISTINGSI KOEFISIEN REAKSI VERSUS ANGKA INDEKS KIMIA</title>
  <desc id="sma-b03-tatanama-penyetaraan-desc">KOMPARASI TINGKAT PARTIKEL MENAMBAHKAN KOEFISIEN MOLEKUL AIR VERSUS MENGUBAH ANGKA INDEKS MENJADI HIDROGEN PEROKSIDA.</desc>

  <!-- TITLE BANNER -->
  <rect x="20" y="20" width="760" height="40" rx="8" fill="#ececec" stroke="#1f2937" stroke-width="2"/>
  <text x="400" y="45" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" text-anchor="middle">DISTINGSI KOEFISIEN REAKSI VERSUS ANGKA INDEKS</text>

  <!-- PANEL KIRI: MENGUBAH KOEFISIEN (BENAR) -->
  <rect x="30" y="75" width="350" height="205" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <text x="205" y="98" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" text-anchor="middle">MENGUBAH KOEFISIEN: 2 H2O (SAH)</text>

  <!-- DUA MOLEKUL AIR DISKRIT -->
  <circle cx="120" cy="145" r="16" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/><text x="120" y="150" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">O</text>
  <circle cx="95" cy="165" r="10" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/><text x="95" y="169" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">H</text>
  <circle cx="145" cy="165" r="10" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/><text x="145" y="169" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">H</text>

  <circle cx="280" cy="145" r="16" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/><text x="280" y="150" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">O</text>
  <circle cx="255" cy="165" r="10" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/><text x="255" y="169" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">H</text>
  <circle cx="305" cy="165" r="10" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/><text x="305" y="169" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">H</text>

  <rect x="45" y="220" width="320" height="48" rx="6" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5"/>
  <text x="205" y="240" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">MENAMBAH JUMLAH PAKET MOLEKUL</text>
  <text x="205" y="258" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">IDENTITAS ZAT TETAP AIR MURNI</text>

  <!-- PANEL KANAN: MENGUBAH INDEKS (SALAH) -->
  <rect x="420" y="75" width="350" height="205" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <text x="595" y="98" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" text-anchor="middle">MENGUBAH INDEKS: H2O2 (TERLARANG)</text>

  <!-- SATU MOLEKUL HIDROGEN PEROKSIDA -->
  <circle cx="560" cy="150" r="16" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/><text x="560" y="155" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">O</text>
  <circle cx="620" cy="150" r="16" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/><text x="620" y="155" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">O</text>
  <circle cx="525" cy="170" r="10" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/><text x="525" y="174" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">H</text>
  <circle cx="655" cy="170" r="10" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/><text x="655" y="174" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">H</text>

  <rect x="435" y="220" width="320" height="48" rx="6" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/>
  <text x="595" y="240" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">MERUBAH STRUKTUR KIMIA SENYAWA</text>
  <text x="595" y="258" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">MENJADI HIDROGEN PEROKSIDA BERACUN</text>
</svg>
<div class="text-center font-sans text-xs font-semibold text-slate-500 mt-2 mb-4">Gambar 3.1: Perbandingan fisis manipulasi koefisien reaksi (sah) versus pengubahan angka indeks senyawa (terlarang).</div>

Bagaimana tata cara baku penamaan senyawa kimia agar tidak terjadi kekeliruan identitas zat di laboratorium?

---

#### 2. Formalisasi: Konsep Baku & Hubungan Matematis

1. **Aturan Tatanama Senyawa Anorganik IUPAC:**
   - **Senyawa Biner Logam + Nonlogam (Ionik):**
     - Nama kation logam disebutkan terlebih dahulu, diikuti nama anion nonlogam dengan akhiran **-ida**.
     - Jika logam memiliki lebih dari satu jenis bilangan oksidasi (logam transisi seperti $\ce{Fe, Cu, Sn}$), muatan kation wajib dituliskan dengan angka Romawi di dalam tanda kurung:
       - $\ce{FeCl2} \rightarrow$ Besi(II) klorida
       - $\ce{FeCl3} \rightarrow$ Besi(III) klorida
     - **Catatan Penting:** Dilarang menggunakan awalan Yunani (*mono-, di-, tri-*) pada senyawa ionik!
   - **Senyawa Biner Nonlogam + Nonlogam (Kovalen):**
     - Menggunakan awalan jumlah Yunani: *mono* (1), *di* (2), *tri* (3), *tetra* (4), *penta* (5), *heksa* (6), *hepta* (7), *okta* (8), *nona* (9), *deka* (10).
     - Awalan *mono-* tidak digunakan pada unsur pertama:
       - $\ce{CO} \rightarrow$ Karbon monoksida
       - $\ce{CO2} \rightarrow$ Karbon dioksida
       - $\ce{N2O5} \rightarrow$ Dinitrogen pentaoksida
   - **Senyawa Poliatomik & Asam-Basa:**
     - Anion poliatomik standar: $\ce{SO4^2-}$ (sulfat), $\ce{SO3^2-}$ (sulfit), $\ce{NO3-}$ (nitrat), $\ce{NO2-}$ (nitrit), $\ce{CO3^2-}$ (karbonat), $\ce{PO4^3-}$ (fosfat), $\ce{NH4+}$ (amonium), $\ce{OH-}$ (hidroksida).
     - Senyawa asam diawali kata *asam* diikuti nama anionnya (contoh: $\ce{H2SO4} \rightarrow$ Asam sulfat).

2. **Prinsip Penyetaraan Persamaan Reaksi:**
   Persamaan reaksi setara memenuhi hukum kekekalan massa:
   $$\sum \text{Atom Ruas Kiri} = \sum \text{Atom Ruas Kanan}$$
   Penyetaraan dilakukan dengan mengatur nilai koefisien stoikiometri bilangan bulat terkecil:
   $$a\,\ce{A} + b\,\ce{B} \rightarrow c\,\ce{C} + d\,\ce{D}$$
   Setiap rumus kimia wajib dilengkapi fasa zat: padat $(\text{s})$, cair murni $(\text{l})$, gas $(\text{g})$, atau larutan dalam air $(\text{aq})$.

**Makna Fisis Persamaan Reaksi:**
Koefisien reaksi bukan sekadar angka penyeimbang matematika, melainkan mewakili perbandingan jumlah molekul atau perbandingan mol partikel yang bereaksi secara mikroskopik.

> [!SYARAT_BATAS]
> ### ⚖️ Syarat Batas & Asumsi
> 1. Saat menyetarakan reaksi, **hanya angka koefisien stoikiometri di depan rumus zat yang boleh diubah**.
> 2. Angka indeks (*subscript*) di dalam rumus kimia **TIDAK PERNAH BOLEH DIUBAH**, karena mengubah indeks berarti mengubah ikatan kimia dan identitas molekul zat bersangkutan.
> 3. Koefisien reaksi akhir wajib dinyatakan dalam perbandingan bilangan bulat dan paling sederhana.

##### Uji Konsep Kualitatif
1. Mengapa senyawa $\ce{Al2O3}$ dinamai aluminium oksida dan bukan dialuminium trioksida?
   *Jawaban:* $\ce{Al2O3}$ adalah senyawa ionik (logam $\ce{Al}$ + nonlogam $\ce{O}$). Pada senyawa ionik, rasio kation dan anion sudah pasti ditentukan oleh netralitas muatan ion ($\ce{Al^3+}$ dan $\ce{O^2-}$), sehingga awalan Yunani (*di-, tri-*) tidak boleh digunakan.
2. Setarakan persamaan reaksi pembakaran gas butana berikut: $\ce{C4H10(g) + O2(g) -> CO2(g) + H2O(g)}$!
   *Jawaban:* Setarakan C (4 atom) dan H (10 atom): $\ce{C4H10 + O2 -> 4 CO2 + 5 H2O}$. Jumlah atom O di kanan $= 4(2) + 5 = 13$, maka koefisien $\ce{O2} = \frac{13}{2}$. Kalikan seluruh persamaan dengan 2 agar koefisien bulat:
   $$2\,\ce{C4H10(g)} + 13\,\ce{O2(g)} \rightarrow 8\,\ce{CO2(g)} + 10\,\ce{H2O(g)}$$

---

#### 3. Taktik Soal: Penerapan & Pemeriksaan Logika

##### Soal Contoh (Worked Example)
Setarakan reaksi kimia antara serbuk tembaga dengan larutan asam nitrat encer berikut:
$$\ce{a Cu(s) + b HNO3(aq) -> c Cu(NO3)2(aq) + d NO(g) + e H2O(l)}$$
Tentukan nilai koefisien $a, b, c, d,$ dan $e$!

> [!TITIK_RAWAN]
> ### ⚠️ Titik Rawan Kesalahan (Common Pitfalls)
> - **Pemisahan Atom Nitrogen:** Atom nitrogen pada reaktan ($\ce{HNO3}$) terpecah ke dua produk berbeda: sebagian tetap sebagai ion nitrat pada $\ce{Cu(NO3)2}$ dan sebagian tereduksi menjadi gas $\ce{NO}$. Jangan menyamakan koefisien $\ce{HNO3}$ hanya dengan salah satu produk saja.
> - **Gunakan Metode Aljabar untuk Reaksi Rumit:** Jika metode inspeksi langsung terlalu membingungkan, gunakan pemisalan variabel aljabar ($a, b, c, d, e$) dengan menetapkan salah satu koefisien sama dengan 1.

##### Strategi Penyelesaian:
1. **Tetapkan salah satu koefisien bernilai 1:**
   - Misalkan $a = 1$.
   - Neraca atom $\ce{Cu}$: Ruas kiri $= a$, ruas kanan $= c \rightarrow c = a = 1$.

2. **Buat persamaan aljabar untuk tiap atom:**
   - Neraca atom $\ce{H}$: $b = 2e \rightarrow e = \frac{b}{2}$.
   - Neraca atom $\ce{N}$: $b = 2c + d = 2(1) + d \rightarrow d = b - 2$.
   - Neraca atom $\ce{O}$: Ruas kiri $= 3b$, ruas kanan $= 6c + d + e$.
     Substitusikan nilai $c=1$, $d = b - 2$, dan $e = \frac{b}{2}$:
     $$3b = 6(1) + (b - 2) + \frac{b}{2}$$
     $$3b = 4 + \frac{3}{2}b \implies \frac{3}{2}b = 4 \implies b = \frac{8}{3}$$

3. **Hitung koefisien lainnya:**
   - $a = 1$
   - $b = \frac{8}{3}$
   - $c = 1$
   - $d = b - 2 = \frac{8}{3} - 2 = \frac{2}{3}$
   - $e = \frac{b}{2} = \frac{4}{3}$

4. **Kalikan seluruh koefisien dengan 3 agar menjadi bilangan bulat:**
   - $a = 3, \quad b = 8, \quad c = 3, \quad d = 2, \quad e = 4$
   - **Persamaan Setara:**
     $$3\,\ce{Cu(s)} + 8\,\ce{HNO3(aq)} \rightarrow 3\,\ce{Cu(NO3)2(aq)} + 2\,\ce{NO(g)} + 4\,\ce{H2O(l)}$$

> [!PEMERIKSAAN_LOGIKA]
> ### 🔍 Pemeriksaan Logika (Sanity Check) & Koneksi
> - **Sanity Check:** Cek atom $\ce{O}$: Kiri $= 8 \times 3 = 24$. Kanan $= 3(6) + 2(1) + 4(1) = 18 + 2 + 4 = 24$. Jumlah atom ruas kiri dan kanan identik sempurna.
> - **Koneksi Lintas Bab:** Reaksi pembentukan gas $\ce{NO}$ ini juga merupakan reaksi reduksi-oksidasi yang akan ditinjau mekanisme transfer elektronnya secara mendalam pada Elektrokimia Bab 9.

##### Latihan Terbimbing
1. Tuliskan rumus kimia untuk senyawa: Besi(III) sulfat dan Difosforus trioksida! *(Kunci Jawaban Akhir: Fe₂(SO₄)₃ dan P₂O₃)*
2. Setarakan persamaan reaksi: $\ce{Fe2O3(s) + CO(g) -> Fe(s) + CO2(g)}$! *(Kunci Jawaban Akhir: Fe₂O₃(s) + 3 CO(g) -> 2 Fe(s) + 3 CO₂(g))*`,
      checkpointQuizzes: [
        {
          id: 'chk-sma-301-1',
          type: 'multiple_choice',
          question: 'Nama IUPAC yang benar untuk senyawa $\ce{N2O4}$ adalah...',
          options: [
            'Nitrogen tetraoksida',
            'Dinitrogen tetraoksida',
            'Dinitrogen pentaoksida',
            'Nitrogen(IV) oksida biner',
          ],
          correctAnswer: 1,
          explanation:
            'Senyawa N₂O₄ tersusun atas dua unsur nonlogam, sehingga menggunakan awalan Yunani: 2 nitrogen (dinitrogen) dan 4 oksigen (tetraoksida) menjadi dinitrogen tetraoksida.',
        },
        {
          id: 'chk-sma-301-2',
          type: 'true_false',
          question: 'Senyawa ionik $\ce{FeCl3}$ dapat dinamai secara resmi sebagai besi triklorida.',
          correctAnswer: false,
          explanation:
            'Salah. Senyawa ionik tidak boleh menggunakan awalan Yunani seperti tri-. Nama resmi IUPAC-nya adalah Besi(III) klorida, dengan angka Romawi (III) menunjukkan bilangan oksidasi kation Fe³⁺.',
        },
      ],
    },
    {
      tag: 'sma-03-hukum-dasar-kimia',
      tags: ['hukum-lavoisier', 'hukum-proust', 'hukum-dalton', 'hukum-gay-lussac', 'hipotesis-avogadro'],
      title: 'Subbab 3.2: Hukum-Hukum Dasar Kimia (Lavoisier, Proust, Dalton, Gay-Lussac, Avogadro)',
      summary: 'Fondasi stoikiometri empiris dari kekekalan massa, perbandingan tetap, kelipatan perbandingan, hingga volume gas.',
      content: `#### 1. Intuisi: Dari Fenomena ke Tingkat Partikel
Jika kamu membakar sepotong kayu di perapian terbuka, abu yang tersisa memiliki massa yang jauh lebih ringan dibanding kayu semula. Apakah sebagian massa kayu telah musnah terbakar? Antoine Lavoisier pada akhir abad ke-18 melakukan eksperimen serupa di dalam bejana kaca tertutup rapat dan menimbangnya dengan neraca presisi. Hasilnya menunjukkan bahwa massa total sebelum dan sesudah pembakaran sama persis. Abu tampak lebih ringan hanya karena gas karbon dioksida dan uap air terbang bebas ke udara pada wadah terbuka.

Joseph Proust kemudian menemukan bahwa di mana pun air diambil (dari salju kutub, air hujan, maupun air sumur), perbandingan massa hidrogen terhadap oksigen selalu tepat $1 : 8$. John Dalton menyadari bahwa keteraturan perbandingan massa yang bulat ini hanya dapat terjadi jika materi tersusun atas atom-atom diskrit yang bergabung dalam rasio bilangan bulat sederhana.

Perhatikan Gambar 3.2 berikut yang mengilustrasikan pembuktian hukum perbandingan volume gas Gay-Lussac dan hipotesis Avogadro pada tingkat partikel.

<svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sma-b03-hukum-dasar-title sma-b03-hukum-dasar-desc" data-diagram="sma-b03-hukum-dasar" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="sma-b03-hukum-dasar-title">HUKUM PERBANDINGAN VOLUME GAS DAN HIPOTESIS AVOGADRO</title>
  <desc id="sma-b03-hukum-dasar-desc">REAKSI GAS HIDROGEN DAN OKSIGEN MEMBENTUK UAP AIR PADA SUHU DAN TEKANAN TETAP MENUNJUKKAN PERBANDINGAN VOLUME BULAT DUA BANDING SATU BANDING DUA.</desc>

  <!-- TITLE BANNER -->
  <rect x="20" y="20" width="760" height="40" rx="8" fill="#ececec" stroke="#1f2937" stroke-width="2"/>
  <text x="400" y="45" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" text-anchor="middle">HUKUM PERBANDINGAN VOLUME GAS GAY-LUSSAC &amp; AVOGADRO</text>

  <!-- BOX 1: 2 VOLUME GAS HIDROGEN -->
  <rect x="30" y="75" width="220" height="150" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <text x="140" y="100" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" text-anchor="middle">2 VOLUME GAS H2</text>
  <!-- 4 MOLEKUL H2 DIWAKILI BULATAN KECIL BIRU -->
  <circle cx="80" cy="130" r="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/><circle cx="94" cy="130" r="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="160" cy="130" r="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/><circle cx="174" cy="130" r="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="80" cy="175" r="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/><circle cx="94" cy="175" r="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="160" cy="175" r="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/><circle cx="174" cy="175" r="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <text x="140" y="210" fill="#4b5563" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">4 MOLEKUL DIATOMIK H2</text>

  <!-- TANDA PLUS -->
  <text x="270" y="155" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" text-anchor="middle">+</text>

  <!-- BOX 2: 1 VOLUME GAS OKSIGEN -->
  <rect x="290" y="75" width="220" height="150" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <text x="400" y="100" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" text-anchor="middle">1 VOLUME GAS O2</text>
  <!-- 2 MOLEKUL O2 DIWAKILI BULATAN MERAH -->
  <circle cx="370" cy="145" r="12" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/><circle cx="390" cy="145" r="12" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="410" cy="175" r="12" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/><circle cx="430" cy="175" r="12" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/>
  <text x="400" y="210" fill="#4b5563" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">2 MOLEKUL DIATOMIK O2</text>

  <!-- TANDA PANAH -->
  <line x1="520" y1="150" x2="540" y2="150" stroke="#1f2937" stroke-width="2"/>
  <polyline points="536,145 542,150 536,155" fill="none" stroke="#1f2937" stroke-width="2"/>

  <!-- BOX 3: 2 VOLUME UAP AIR -->
  <rect x="550" y="75" width="220" height="150" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <text x="660" y="100" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" text-anchor="middle">2 VOLUME UAP AIR</text>
  <!-- 4 MOLEKUL H2O -->
  <circle cx="610" cy="135" r="10" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="600" cy="145" r="6" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/><circle cx="620" cy="145" r="6" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>

  <circle cx="690" cy="135" r="10" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="680" cy="145" r="6" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/><circle cx="700" cy="145" r="6" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>

  <circle cx="610" cy="175" r="10" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="600" cy="185" r="6" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/><circle cx="620" cy="185" r="6" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>

  <circle cx="690" cy="175" r="10" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="680" cy="185" r="6" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/><circle cx="700" cy="185" r="6" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <text x="660" y="210" fill="#4b5563" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">4 MOLEKUL H2O GAS</text>

  <!-- FOOTER RATIO BAR -->
  <rect x="30" y="240" width="740" height="40" rx="6" fill="#ececec" stroke="#1f2937" stroke-width="1.5"/>
  <text x="400" y="265" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">PERBANDINGAN KOEFISIEN = PERBANDINGAN VOLUME = PERBANDINGAN MOLEKUL ( 2 : 1 : 2 )</text>
</svg>
<div class="text-center font-sans text-xs font-semibold text-slate-500 mt-2 mb-4">Gambar 3.2: Representasi partikel reaksi gas hidrogen dan oksigen yang membuktikan kesetaraan rasio volume dan koefisien reaksi.</div>

Bagaimana kelima hukum dasar kimia ini dirumuskan dan kapan masing-masing hukum tersebut dapat diterapkan?

---

#### 2. Formalisasi: Konsep Baku & Hubungan Matematis

1. **Hukum Kekekalan Massa (Lavoisier, 1789):**
   "Dalam suatu sistem tertutup, massa total zat-zat sebelum reaksi sama dengan massa total zat-zat sesudah reaksi."
   $$\sum m_{\text{reaktan}} = \sum m_{\text{produk}}$$

2. **Hukum Perbandingan Tetap (Proust, 1799):**
   "Perbandingan massa unsur-unsur pembentuk suatu senyawa kimia selalu tetap dan tertentu, tidak bergantung pada asal-usul maupun cara pembuatan senyawa tersebut."
   Contoh pada senyawa air ($\ce{H2O}$):
   $$\frac{m_{\ce{H}}}{m_{\ce{O}}} = \frac{2 \times A_r\ \ce{H}}{1 \times A_r\ \ce{O}} = \frac{2(1)}{16} = \frac{1}{8}$$

3. **Hukum Kelipatan Perbandingan (Dalton, 1803):**
   "Jika dua jenis unsur dapat membentuk lebih dari satu jenis senyawa, dan jika massa salah satu unsur dibuat bernilai tetap (sama), maka perbandingan massa unsur yang lain dalam senyawa-senyawa tersebut merupakan bilangan bulat dan sederhana."
   Contoh pada $\ce{CO}$ dan $\ce{CO2}$: untuk massa karbon yang sama ($12\text{ g}$), massa oksigen pada $\ce{CO}$ ($16\text{ g}$) dan $\ce{CO2}$ ($32\text{ g}$) memiliki rasio bulat $16 : 32 = 1 : 2$.

4. **Hukum Perbandingan Volume (Gay-Lussac, 1808):**
   "Pada suhu dan tekanan yang sama ($T, P$ konstan), volume gas-gas yang bereaksi dan volume gas-gas hasil reaksi berbanding sebagai bilangan bulat dan sederhana."
   $$\frac{V_1}{V_2} = \frac{\text{Koefisien}_1}{\text{Koefisien}_2}$$

5. **Hipotesis Avogadro (Avogadro, 1811):**
   "Pada suhu dan tekanan yang sama, semua gas yang bervolume sama mengandung jumlah molekul yang sama banyak."
   $$\frac{V_1}{V_2} = \frac{N_1}{N_2} = \frac{n_1}{n_2}$$

**Makna Fisis Hukum:**
Kelima hukum dasar ini membuktikan bahwa reaksi kimia terjadi pada tingkat partikel individual yang utuh: atom bergabung dalam perbandingan jumlah bulat, bukan dalam fraksi massa acak.

> [!SYARAT_BATAS]
> ### ⚖️ Syarat Batas & Asumsi
> 1. **Hukum Lavoisier** hanya teramati akurat pada **sistem tertutup** di mana tidak ada materi berwujud gas yang keluar atau masuk sistem selama reaksi berlangsung.
> 2. **Hukum Gay-Lussac dan Hipotesis Avogadro** **HANYA BERLAKU** untuk zat yang berada dalam **fasa gas ($\text{g}$)** dan diukur pada **suhu dan tekanan yang identik ($T, P$ sama)**. Hukum ini sama sekali TIDAK berlaku untuk zat berwujud padat $(\text{s})$, cair $(\text{l})$, atau larutan $(\text{aq})$.

##### Uji Konsep Kualitatif
1. Sebanyak $6\text{ g}$ karbon dibakar sempurna dengan $20\text{ g}$ gas oksigen. Diketahui perbandingan massa $\ce{C} : \ce{O}$ dalam karbon dioksida ($\ce{CO2}$) adalah $3 : 8$. Tentukan massa $\ce{CO2}$ yang terbentuk dan massa zat yang tersisa!
   *Jawaban:* Karbon habis bereaksi $= 6\text{ g}$. Massa oksigen yang bereaksi $= \frac{8}{3} \times 6\text{ g} = 16\text{ g}$. Massa $\ce{CO2}$ yang terbentuk $= 6\text{ g} + 16\text{ g} = 22\text{ g}$. Sisa oksigen yang tidak bereaksi $= 20\text{ g} - 16\text{ g} = 4\text{ g}$.
2. Mengapa volume gas produk tidak selalu sama dengan penjumlahan volume gas pereaksi?
   *Jawaban:* Reaksi kimia dapat mengubah jumlah total molekul gas di dalam sistem. Berdasarkan hukum Avogadro, volume gas sebanding dengan koefisien reaksi, bukan penjumlahan matematis volume reaktan.

---

#### 3. Taktik Soal: Penerapan & Pemeriksaan Logika

##### Soal Contoh (Worked Example)
Dua jenis senyawa terbentuk dari unsur belerang ($\ce{S}$) dan oksigen ($\ce{O}$). 
- Senyawa I mengandung $50.0\%$ massa belerang.
- Senyawa II mengandung $40.0\%$ massa belerang.
Buktikan apakah data eksperimen ini mematuhi Hukum Kelipatan Perbandingan Dalton!

> [!TITIK_RAWAN]
> ### ⚠️ Titik Rawan Kesalahan (Common Pitfalls)
> - **Lupa Menyamakan Massa Salah Satu Unsur:** Kesalahan paling sering adalah langsung membandingkan persentase oksigen ($50\% : 60\%$) tanpa menyamakan massa unsur belerangnya terlebih dahulu. Hukum Dalton mensyaratkan perbandingan massa unsur kedua saat massa unsur pertama bernilai konstan.
> - **Rasio Bulat Sederhana:** Pastikan hasil akhir berupa perbandingan bilangan bulat terkecil (seperti $2 : 3$), bukan bilangan desimal pecahan.

##### Strategi Penyelesaian:
1. **Analisis Komposisi Persen Massa:**
   - **Senyawa I:**
     - Massa $\ce{S} = 50.0\text{ g}$
     - Massa $\ce{O} = 100.0 - 50.0 = 50.0\text{ g}$
   - **Senyawa II:**
     - Massa $\ce{S} = 40.0\text{ g}$
     - Massa $\ce{O} = 100.0 - 40.0 = 60.0\text{ g}$

2. **Samakan Massa Belerang ($\ce{S}$):**
   - Buat massa $\ce{S}$ menjadi $1.0\text{ g}$ pada kedua senyawa dengan membagi massa $\ce{O}$ terhadap massa $\ce{S}$:
     - Pada Senyawa I:
       $$\frac{m_{\ce{O}}}{m_{\ce{S}}} = \frac{50.0\text{ g}}{50.0\text{ g}} = 1.0\text{ g O per gram S}$$
     - Pada Senyawa II:
       $$\frac{m_{\ce{O}}}{m_{\ce{S}}} = \frac{60.0\text{ g}}{40.0\text{ g}} = 1.5\text{ g O per gram S}$$

3. **Bandingkan Massa Oksigen pada Massa Belerang yang Tetap:**
   $$\frac{\text{Massa O (Senyawa I)}}{\text{Massa O (Senyawa II)}} = \frac{1.0}{1.5} = \frac{2}{3} = \mathbf{2 : 3}$$
   - **Kesimpulan:** Karena perbandingan massa oksigen pada massa belerang yang tetap menghasilkan rasio bilangan bulat dan sederhana ($2 : 3$), data tersebut **terbukti mematuhi Hukum Dalton**. (Senyawa I adalah $\ce{SO2}$ dan Senyawa II adalah $\ce{SO3}$).

> [!PEMERIKSAAN_LOGIKA]
> ### 🔍 Pemeriksaan Logika (Sanity Check) & Koneksi
> - **Sanity Check:** Rasio $2 : 3$ bersesuaian persis dengan perbandingan jumlah atom oksigen pada rumus kimia belerang dioksida ($\ce{SO2}$, rasio atom $1:2$) dan belerang trioksida ($\ce{SO3}$, rasio atom $1:3$).
> - **Koneksi Lintas Bab:** Hubungan antara koefisien gas dan volume gas Gay-Lussac/Avogadro menjadi jembatan utama untuk menghitung volume gas pada kondisi STP dan gas ideal pada Subbab 3.3.

##### Latihan Terbimbing
1. Pada pembakaran sempurna $5\text{ L}$ gas propana ($\ce{C3H8}$) sesuai reaksi: $\ce{C3H8(g) + 5 O2(g) -> 3 CO2(g) + 4 H2O(g)}$ pada $T, P$ tetap, tentukan volume gas oksigen yang dibutuhkan dan volume gas karbon dioksida yang dihasilkan! *(Kunci Jawaban Akhir: Volume O₂ = 25 L dan Volume CO₂ = 15 L)*
2. Sebanyak $10\text{ g}$ tembaga direaksikan dengan $4\text{ g}$ belerang membentuk tembaga sulfida ($\ce{CuS}$). Jika perbandingan massa $\ce{Cu} : \ce{S} = 2 : 1$, zat manakah yang tersisa dan berapa massa tembaga sulfida yang terbentuk? *(Kunci Jawaban Akhir: Tembaga tersisa sebanyak 2 g, dan massa CuS yang terbentuk adalah 12 g)*`,
      checkpointQuizzes: [
        {
          id: 'chk-sma-302-1',
          type: 'multiple_choice',
          question: 'Pada suhu dan tekanan yang sama, $2\text{ liter}$ gas nitrogen ($\ce{N2}$) bereaksi dengan $6\text{ liter}$ gas hidrogen ($\ce{H2}$) menghasilkan gas amonia ($\ce{NH3}$). Berapakah volume gas amonia yang dihasilkan?',
          options: ['2 liter', '4 liter', '6 liter', '8 liter'],
          correctAnswer: 1,
          explanation:
            'Persamaan reaksi setara: N₂(g) + 3 H₂(g) -> 2 NH₃(g). Berdasarkan Hukum Gay-Lussac, perbandingan volume sama dengan perbandingan koefisien (1 : 3 : 2). Dari 2 L N₂ dan 6 L H₂, volume NH₃ yang dihasilkan = (2/1) * 2 L = 4 L.',
        },
        {
          id: 'chk-sma-302-2',
          type: 'true_false',
          question: 'Hukum perbandingan volume Gay-Lussac dapat diterapkan untuk menghitung volume endapan padat yang dihasilkan dalam reaksi pengendapan larutan.',
          correctAnswer: false,
          explanation:
            'Salah. Hukum Gay-Lussac dan hipotesis Avogadro hanya berlaku secara eksklusif untuk zat berwujud gas pada suhu dan tekanan yang sama.',
        },
      ],
    },
    {
      tag: 'sma-03-konsep-mol-jembatan-mol',
      tags: ['konsep-mol', 'massa-molar', 'volume-molar-stp', 'gas-ideal', 'tetapan-avogadro'],
      title: 'Subbab 3.3: Konsep Mol (Massa Molar, Volume Molar Gas, dan Jumlah Partikel)',
      summary: 'Navigasi komprehensif jembatan mol menghubungkan skala atomik mikroskopik dengan besaran gram makroskopik.',
      content: `#### 1. Intuisi: Dari Fenomena ke Tingkat Partikel
Jika kamu membeli telur di pasar, penjual menggunakan satuan "lusin" ($12\text{ butir}$) atau kilogram agar mudah dihitung. Atom dan molekul berukuran sangat kecil dengan massa orde $10^{-24}\text{ gram}$, sehingga mustahil bagi seorang kimiawan untuk menimbang butiran atom satu per satu di laboratorium.

Oleh karena itu, kimiawan mendefinisikan satuan hitung khusus bernama **mol**. Satu mol zat didefinisikan sebagai jumlah zat yang memuat tepat $6.022 \times 10^{23}$ partikel (dikenal sebagai **Bilangan Avogadro**, $L$ atau $N_A$). Angka ini dipilih secara cerdas agar massa $1\text{ mol}$ atom (dalam satuan gram) memiliki nilai numerik yang persis sama dengan massa atom relatif ($A_r$) atau massa molekul relatif ($M_r$) zat tersebut.

Perhatikan Gambar 3.3 berikut yang merangkum peta konversi jembatan mol antara massa, jumlah partikel, dan volume gas.

<svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sma-b03-jembatan-mol-title sma-b03-jembatan-mol-desc" data-diagram="sma-b03-jembatan-mol" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="sma-b03-jembatan-mol-title">PETA JEMBATAN KONVERSI MOL KIMIA</title>
  <desc id="sma-b03-jembatan-mol-desc">DIAGRAM HUBUNGAN SENTRAL MOL DENGAN MASSA GRAM, JUMLAH PARTIKEL ATOMIK, VOLUME GAS STP/RTP, DAN KONSENTRASI MOLARITAS.</desc>

  <!-- TITLE BANNER -->
  <rect x="20" y="20" width="760" height="40" rx="8" fill="#ececec" stroke="#1f2937" stroke-width="2"/>
  <text x="400" y="45" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" text-anchor="middle">PETA JEMBATAN KONVERSI MOL KIMIA</text>

  <!-- HUB TENGAH: JUMLAH MOL (n) -->
  <circle cx="400" cy="155" r="46" fill="#fde58a" stroke="#1f2937" stroke-width="2.5"/>
  <text x="400" y="152" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" text-anchor="middle">MOL (N)</text>
  <text x="400" y="170" fill="#4b5563" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">PUSAT KONVERSI</text>

  <!-- CABANG KIRI: MASSA GRAM -->
  <rect x="30" y="115" width="200" height="80" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <text x="130" y="143" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" text-anchor="middle">MASSA (GRAM)</text>
  <text x="130" y="167" fill="#4b5563" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">M = N &times; MR</text>
  <text x="130" y="185" fill="#4b5563" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">N = M / MR</text>

  <line x1="230" y1="155" x2="354" y2="155" stroke="#1f2937" stroke-width="2"/>

  <!-- CABANG KANAN: JUMLAH PARTIKEL (X) -->
  <rect x="570" y="115" width="200" height="80" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <text x="670" y="143" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" text-anchor="middle">JUMLAH PARTIKEL (X)</text>
  <text x="670" y="167" fill="#4b5563" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">X = N &times; L</text>
  <text x="670" y="185" fill="#4b5563" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">L = 6.022 &times; 10²³</text>

  <line x1="446" y1="155" x2="570" y2="155" stroke="#1f2937" stroke-width="2"/>

  <!-- CABANG BAWAH: VOLUME GAS -->
  <rect x="180" y="225" width="440" height="65" rx="8" fill="#b5efb0" stroke="#1f2937" stroke-width="2"/>
  <text x="400" y="248" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">VOLUME GAS: STP = N &times; 22.4 L | RTP = N &times; 24.0 L</text>
  <text x="400" y="270" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">GAS IDEAL: PV = NRT (R = 0.082 L ATM MOL⁻¹ K⁻¹)</text>

  <line x1="400" y1="201" x2="400" y2="225" stroke="#1f2937" stroke-width="2"/>
</svg>
<div class="text-center font-sans text-xs font-semibold text-slate-500 mt-2 mb-4">Gambar 3.3: Diagram alur jembatan mol yang mengonversi massa, jumlah partikel, dan volume gas.</div>

Bagaimana membedakan kondisi pengukuran volume gas pada keadaan STP, RTP, dan gas ideal?

---

#### 2. Formalisasi: Konsep Baku & Hubungan Matematis

1. **Hubungan Mol dengan Massa Molar ($M_m$):**
   Massa molar zat adalah massa dari satu mol zat tersebut dengan satuan gram per mol ($\text{g mol}^{-1}$):
   $$n = \frac{m}{M_r} \iff m = n \times M_r$$
   - $m$: massa zat ($\text{g}$)
   - $M_r$: massa molekul relatif (atau $A_r$ untuk atom monoatomik, $\text{g mol}^{-1}$)

2. **Hubungan Mol dengan Jumlah Partikel ($X$):**
   $$X = n \times L \iff n = \frac{X}{L}$$
   - $X$: jumlah partikel (atom, molekul, atau ion)
   - $L$: Bilangan Avogadro $= 6.022 \times 10^{23}\text{ partikel mol}^{-1}$

3. **Hubungan Mol dengan Volume Gas ($V$):**
   - **Kondisi Standar / STP (*Standard Temperature and Pressure*):**
     Diukur pada suhu $0^\circ\text{C}$ ($273\text{ K}$) dan tekanan $1\text{ atm}$. Satu mol gas ideal apa pun bervolume $22.4\text{ L}$:
     $$V_{\text{STP}} = n \times 22.4\text{ L mol}^{-1}$$
   - **Kondisi Kamar / RTP (*Room Temperature and Pressure*):**
     Diukur pada suhu kamar $25^\circ\text{C}$ ($298\text{ K}$) dan tekanan $1\text{ atm}$. Satu mol gas ideal bervolume $24.0\text{ L}$:
     $$V_{\text{RTP}} = n \times 24.0\text{ L mol}^{-1}$$
   - **Kondisi Gas Ideal Sembarang ($P, T$ sembarang):**
     $$P \cdot V = n \cdot R \cdot T \iff V = \frac{n \cdot R \cdot T}{P}$$
     - $P$: tekanan gas ($\text{atm}$)
     - $V$: volume gas ($\text{L}$)
     - $n$: jumlah mol gas ($\text{mol}$)
     - $R$: tetapan gas universal $= 0.08206\text{ L atm mol}^{-1}\text{ K}^{-1}$
     - $T$: suhu mutlak dalam Kelvin ($T = ^\circ\text{C} + 273$)
   - **Perbandingan Dua Gas pada $T, P$ yang Sama:**
     $$\frac{V_1}{V_2} = \frac{n_1}{n_2}$$

**Makna Fisis Persamaan:**
Konsep mol adalah faktor konversi universal yang menjembatani dunia mikroskopik (jumlah partikel diskrit) dengan dunia makroskopik (massa yang dapat ditimbang pada neraca lab).

> [!SYARAT_BATAS]
> ### ⚖️ Syarat Batas & Asumsi
> 1. Rumus $V = n \times 22.4\text{ L}$ **HANYA BERLAKU** untuk zat yang **berwujud gas pada kondisi STP ($0^\circ\text{C}, 1\text{ atm}$)**. Dilarang keras menggunakan angka 22.4 L untuk zat berwujud cair (seperti air murni pada suhu kamar) atau larutan.
> 2. Pada rumus $PV = nRT$, satuan suhu **wajib dikonversi ke Kelvin ($K = ^\circ\text{C} + 273$)**, dan satuan tekanan wajib dalam **atmosfer ($\text{atm}$)** ($1\text{ atm} = 760\text{ mmHg} = 101.325\text{ kPa}$).

##### Uji Konsep Kualitatif
1. Sebanyak $18\text{ g}$ air ($\ce{H2O}$, $M_r = 18$) pada suhu $25^\circ\text{C}$ dimasukkan ke dalam gelas ukur. Berapakah volume air tersebut, dan mengapa volumenya BUKAN $24.0\text{ L}$?
   *Jawaban:* Pada suhu $25^\circ\text{C}$, air berwujud cair ($\text{l}$) dengan massa jenis $\rho \approx 1\text{ g mL}^{-1}$. Volume air $= \frac{18\text{ g}}{1\text{ g mL}^{-1}} = 18\text{ mL}$. Rumus $V = n \times 24.0\text{ L}$ hanya berlaku untuk zat berfasa gas, bukan cairan.
2. Manakah yang memuat jumlah partikel atom lebih banyak: $1\text{ mol}$ gas $\ce{He}$ atau $1\text{ mol}$ gas $\ce{O2}$?
   *Jawaban:* $1\text{ mol}$ gas $\ce{He}$ memuat $1 \times L = 6.022 \times 10^{23}$ atom He (monoatomik). $1\text{ mol}$ gas $\ce{O2}$ memuat $1\text{ mol}$ molekul $\ce{O2}$, yang setara dengan $2 \times L = 1.204 \times 10^{24}$ atom O (karena molekul diatomik).

---

#### 3. Taktik Soal: Penerapan & Pemeriksaan Logika

##### Soal Contoh (Worked Example)
Sebanyak $4.4\text{ g}$ gas karbon dioksida ($\ce{CO2}$, $A_r\ \ce{C}=12, \ce{O}=16$) diukur pada kondisi suhu $27^\circ\text{C}$ dan tekanan $2\text{ atm}$.
1. Tentukan jumlah mol gas $\ce{CO2}$ tersebut!
2. Hitung volume gas $\ce{CO2}$ pada kondisi tersebut ($R = 0.082\text{ L atm mol}^{-1}\text{ K}^{-1}$)!
3. Berapakah jumlah molekul gas $\ce{CO2}$ yang terkandung di dalamnya?

> [!TITIK_RAWAN]
> ### ⚠️ Titik Rawan Kesalahan (Common Pitfalls)
> - **Lupa Konversi Suhu ke Kelvin:** Memasukkan suhu langsung dalam satuan Celcius ($27^\circ\text{C}$) ke dalam rumus $PV = nRT$. Suhu mutlak wajib: $T = 27 + 273 = 300\text{ K}$.
> - **Keliru Menggunakan Rumus STP:** Tergoda mengalikan langsung mol dengan $22.4\text{ L}$, padahal kondisi soal adalah $27^\circ\text{C}$ dan $2\text{ atm}$ (bukan kondisi STP $0^\circ\text{C}, 1\text{ atm}$).

##### Strategi Penyelesaian:
1. **Hitung $M_r$ dan Jumlah Mol Gas:**
   $$M_r\ \ce{CO2} = 12 + 2(16) = 44\text{ g mol}^{-1}$$
   $$n = \frac{m}{M_r} = \frac{4.4\text{ g}}{44\text{ g mol}^{-1}} = \mathbf{0.1\text{ mol}}$$

2. **Hitung Volume Gas Ideal ($PV = nRT$):**
   - $P = 2\text{ atm}$
   - $n = 0.1\text{ mol}$
   - $R = 0.082\text{ L atm mol}^{-1}\text{ K}^{-1}$
   - $T = 27 + 273 = 300\text{ K}$
   $$V = \frac{n \cdot R \cdot T}{P} = \frac{0.1\text{ mol} \times 0.082\text{ L atm mol}^{-1}\text{ K}^{-1} \times 300\text{ K}}{2\text{ atm}}$$
   $$V = \frac{2.46}{2} = \mathbf{1.23\text{ L}}$$

3. **Hitung Jumlah Molekul ($X$):**
   $$X = n \times L = 0.1\text{ mol} \times 6.022 \times 10^{23}\text{ molekul mol}^{-1} = \mathbf{6.022 \times 10^{22}\text{ molekul}}$$

> [!PEMERIKSAAN_LOGIKA]
> ### 🔍 Pemeriksaan Logika (Sanity Check) & Koneksi
> - **Sanity Check:** Pada kondisi STP, $0.1\text{ mol}$ gas bervolume $2.24\text{ L}$. Pada tekanan $2\text{ atm}$ (tekanan 2 kali lebih rapat) dan suhu $300\text{ K}$ (sedikit lebih hangat), volume gas terkompresi menjadi sekitar $1.23\text{ L}$, yang sangat masuk akal secara fisis.
> - **Koneksi Lintas Bab:** Perhitungan mol ini merupakan dasar dari stoikiometri pereaksi pembatas pada Subbab 3.5 dan penentuan konsentrasi molaritas pada Subbab 3.4.

##### Latihan Terbimbing
1. Berapakah volume dari $0.25\text{ mol}$ gas oksigen ($\ce{O2}$) jika diukur pada keadaan standar (STP) dan pada suhu kamar (RTP)? *(Kunci Jawaban Akhir: Volume STP = 5.6 L dan Volume RTP = 6.0 L)*
2. Pada suhu dan tekanan tertentu, $1\text{ L}$ gas nitrogen ($\ce{N2}$) memiliki massa $1.4\text{ g}$. Pada kondisi yang sama, berapakah volume dari $3.2\text{ g}$ gas metana ($\ce{CH4}$)? ($A_r\ \ce{N}=14, \ce{C}=12, \ce{H}=1$). *(Kunci Jawaban Akhir: 4 L)*`,
      checkpointQuizzes: [
        {
          id: 'chk-sma-303-1',
          type: 'multiple_choice',
          question: 'Berapakah massa dari $3.011 \times 10^{23}$ molekul gas nitrogen ($\ce{N2}$, $A_r\ \ce{N}=14$)?',
          options: ['7 gram', '14 gram', '28 gram', '56 gram'],
          correctAnswer: 1,
          explanation:
            'Jumlah mol = (3.011 * 10²³) / (6.022 * 10²³) = 0.5 mol. Massa = n * Mr = 0.5 mol * 28 g/mol = 14 gram.',
        },
        {
          id: 'chk-sma-303-2',
          type: 'true_false',
          question: 'Volume 1 mol gas helium pada suhu 0°C dan tekanan 1 atm sama dengan volume 1 mol gas karbon dioksida pada kondisi yang sama.',
          correctAnswer: true,
          explanation:
            'Benar. Berdasarkan hipotesis Avogadro, semua gas ideal pada suhu dan tekanan yang sama (STP) memiliki volume molar yang sama, yaitu 22.4 L mol⁻¹.',
        },
      ],
    },
    {
      tag: 'sma-03-kadar-rumus-empiris-molaritas',
      tags: ['kadar-unsur', 'rumus-empiris', 'rumus-molekul', 'molaritas', 'pengenceran'],
      title: 'Subbab 3.4: Kadar Zat, Rumus Empiris, Rumus Molekul, dan Konsentrasi Molaritas',
      summary: 'Penentuan rasio atomik dari data analisis persen massa serta prinsip kekekalan partikel pada pengenceran larutan.',
      content: `#### 1. Intuisi: Dari Fenomena ke Tingkat Partikel
Jika kamu membuat sirup manis yang terlalu pekat lalu menambahkan segelas air putih, rasanya menjadi lebih tawar. Mengapa sirup terasa kurang manis? Apakah molekul gulanya berkurang? Jawabannya tentu tidak. Jumlah molekul gula di dalam gelas tetap sama persis seperti semula. Namun, karena volume air bertambah, jarak antar-molekul gula menjadi semakin renggang. Konsentrasi partikel gula per satuan volume larutan telah mengecil.

Dalam analisis kimia, ketika suatu zat murni tak dikenal dianalisis di laboratorium, instrumen memberikan komposisi berupa persentase massa masing-masing unsur pembentuknya. Karena massa atom setiap unsur berbeda ($A_r$), persentase massa tersebut harus dikonversi menjadi perbandingan mol partikel untuk menemukan rumus kimia paling sederhana, yaitu **Rumus Empiris (RE)**.

Perhatikan Gambar 3.4 berikut yang memvisualisasikan pengenceran larutan dan perbedaan mendasar antara Rumus Empiris dan Rumus Molekul.

<svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sma-b03-kadar-pengenceran-title sma-b03-kadar-pengenceran-desc" data-diagram="sma-b03-kadar-pengenceran" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="sma-b03-kadar-pengenceran-title">PENGENCERAN LARUTAN DAN PERBANDINGAN RUMUS EMPIRIS</title>
  <desc id="sma-b03-kadar-pengenceran-desc">ILUSTRASI PARTIKEL TERLARUT TETAP SAMA PADA PENGENCERAN SERTA PERBANDINGAN RUMUS EMPIRIS CH2O DENGAN RUMUS MOLEKUL GLUKOSA C6H12O6.</desc>

  <!-- TITLE BANNER -->
  <rect x="20" y="20" width="760" height="40" rx="8" fill="#ececec" stroke="#1f2937" stroke-width="2"/>
  <text x="400" y="45" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" text-anchor="middle">PRINSIP PENGENCERAN LARUTAN &amp; HUBUNGAN RE DENGAN RM</text>

  <!-- PANEL KIRI: PENGENCERAN LARUTAN -->
  <rect x="30" y="75" width="350" height="205" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <text x="205" y="98" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" text-anchor="middle">PENGENCERAN: MOL TERLARUT KONSTAN</text>

  <!-- LABU PEKAT -->
  <rect x="65" y="140" width="80" height="65" rx="6" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="90" cy="160" r="5" fill="#1f2937"/><circle cx="120" cy="160" r="5" fill="#1f2937"/>
  <circle cx="90" cy="185" r="5" fill="#1f2937"/><circle cx="120" cy="185" r="5" fill="#1f2937"/>
  <text x="105" y="125" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">M1 , V1</text>

  <!-- PANAH TAMBAH AIR -->
  <text x="180" y="175" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">+ AIR &gt;</text>

  <!-- LABU ENCER -->
  <rect x="235" y="120" width="120" height="85" rx="6" fill="#ececec" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="265" cy="145" r="5" fill="#1f2937"/><circle cx="325" cy="145" r="5" fill="#1f2937"/>
  <circle cx="265" cy="185" r="5" fill="#1f2937"/><circle cx="325" cy="185" r="5" fill="#1f2937"/>
  <text x="295" y="115" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">M2 , V2</text>

  <rect x="45" y="220" width="320" height="48" rx="6" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5"/>
  <text x="205" y="240" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">PENGENCERAN: M1 &times; V1 = M2 &times; V2</text>
  <text x="205" y="258" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">MOL TETAP, VOLUME BERTAMBAH</text>

  <!-- PANEL KANAN: RE VS RM -->
  <rect x="420" y="75" width="350" height="205" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <text x="595" y="98" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">RUMUS EMPIRIS VS RUMUS MOLEKUL</text>

  <rect x="435" y="115" width="320" height="60" rx="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5"/>
  <text x="595" y="138" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">RUMUS EMPIRIS: CH2O (MR = 30)</text>
  <text x="595" y="158" fill="#4b5563" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">PERBANDINGAN MOL BULAT PALING SEDERHANA</text>

  <rect x="435" y="185" width="320" height="83" rx="6" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <text x="595" y="208" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">RUMUS MOLEKUL: C6H12O6 (MR = 180)</text>
  <text x="595" y="228" fill="#4b5563" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">RM = (RE)N DENGAN N = 6</text>
  <text x="595" y="248" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">MENYATAKAN JUMLAH ATOM NYATA PER MOLEKUL</text>
</svg>
<div class="text-center font-sans text-xs font-semibold text-slate-500 mt-2 mb-4">Gambar 3.4: Skema kekekalan mol pada pengenceran larutan dan hubungan matematis Rumus Empiris dengan Rumus Molekul.</div>

Bagaimana langkah sistematis menentukan Rumus Molekul zat dari data persen massa dan massa molekul relatifnya?

---

#### 2. Formalisasi: Konsep Baku & Hubungan Matematis

1. **Kadar Unsur dalam Senyawa:**
   Persentase massa suatu unsur $X$ di dalam senyawa $A_x B_y$:
   $$\% X = \frac{x \times A_r\ X}{M_r\ \text{senyawa}} \times 100\%$$
   Massa unsur $X$ dalam sampel bermassa $m$:
   $$m_X = \frac{x \times A_r\ X}{M_r} \times m_{\text{sampel}}$$

2. **Rumus Empiris (RE) dan Rumus Molekul (RM):**
   - **Rumus Empiris (RE)** menyatakan perbandingan bilangan bulat paling sederhana dari atom-atom penyusun senyawa.
     Langkah penentuan:
     $$\text{Rasio Mol } = \frac{\% \text{ Unsur A}}{A_r\ A} : \frac{\% \text{ Unsur B}}{A_r\ B} : \frac{\% \text{ Unsur C}}{A_r\ C}$$
   - **Rumus Molekul (RM)** menyatakan jumlah atom sebenarnya dari setiap unsur di dalam satu molekul senyawa:
     $$\text{RM} = (\text{RE})_n \quad \text{dengan} \quad n = \frac{M_r\ (\text{Rumus Molekul})}{M_r\ (\text{Rumus Empiris})}$$

3. **Konsentrasi Molaritas ($M$):**
   Molaritas menyatakan jumlah mol zat terlarut dalam satu liter larutan:
   $$M = \frac{n}{V_{\text{L}}} = \frac{m}{M_r} \times \frac{1000}{V_{\text{mL}}}$$
   Konversi dari kadar persen massa ($\%$) dan massa jenis ($\rho$, dalam satuan $\text{g mL}^{-1}$):
   $$M = \frac{10 \times \% \times \rho}{M_r}$$

4. **Pengenceran Larutan:**
   Pada proses pengenceran dengan penambahan pelarut air murni, jumlah mol zat terlarut tetap konstan ($n_1 = n_2$):
   $$M_1 \times V_1 = M_2 \times V_2$$

**Makna Fisis Konsep:**
Molaritas mengukur kerapatan partikel zat terlarut di dalam ruang larutan: semakin tinggi molaritas, semakin banyak partikel zat terlarut yang berdesakan per satuan volume.

> [!SYARAT_BATAS]
> ### ⚖️ Syarat Batas & Asumsi
> 1. Pada rumus pengenceran $M_1 V_1 = M_2 V_2$, nilai **$V_2$ adalah volume total larutan akhir** ($V_2 = V_1 + V_{\text{air}}$). Dilarang memasukkan volume air yang ditambahkan sebagai $V_2$.
> 2. Penentuan Rumus Empiris dari perbandingan mol **wajib dibulatkan ke bilangan bulat terkecil**. Jika didapatkan angka desimal seperti $.5$, kalikan semua dengan 2; jika $.33$ atau $.67$, kalikan semua dengan 3.

##### Uji Konsep Kualitatif
1. Suatu senyawa organik memiliki rumus empiris $\ce{CH2O}$ dan massa molekul relatif $M_r = 60$. Tentukan rumus molekul senyawa tersebut! ($A_r\ \ce{C}=12, \ce{H}=1, \ce{O}=16$).
   *Jawaban:* $M_r\ (\ce{CH2O}) = 12 + 2(1) + 16 = 30$. Nilai kelipatan $n = \frac{60}{30} = 2$. Maka Rumus Molekul adalah $(\ce{CH2O})_2 = \mathbf{\ce{C2H4O2}}$ (Asam asetat).
2. Jika $100\text{ mL}$ larutan asam klorida $\ce{HCl}\ 2\text{ M}$ diencerkan dengan menambahkan $300\text{ mL}$ air murni, berapakah konsentrasi akhir larutan?
   *Jawaban:* Volume akhir $V_2 = 100\text{ mL} + 300\text{ mL} = 400\text{ mL}$.
   $$M_2 = \frac{M_1 \times V_1}{V_2} = \frac{2\text{ M} \times 100\text{ mL}}{400\text{ mL}} = \mathbf{0.5\text{ M}}$$

---

#### 3. Taktik Soal: Penerapan & Pemeriksaan Logika

##### Soal Contoh (Worked Example)
Suatu senyawa organik seberat $9.0\text{ g}$ tersusun atas $3.6\text{ g}$ karbon, $0.6\text{ g}$ hidrogen, dan sisanya oksigen. Melalui pengukuran spektrometri massa, diketahui massa molekul relatif ($M_r$) senyawa tersebut adalah $180\text{ g mol}^{-1}$.
1. Tentukan rumus empiris senyawa tersebut!
2. Tentukan rumus molekul senyawa tersebut! ($A_r\ \ce{C}=12, \ce{H}=1, \ce{O}=16$).

> [!TITIK_RAWAN]
> ### ⚠️ Titik Rawan Kesalahan (Common Pitfalls)
> - **Lupa Menghitung Massa Oksigen:** Oksigen sering kali tidak disebutkan langsung, melainkan sebagai "sisanya". Massa oksigen $= 9.0 - (3.6 + 0.6) = 4.8\text{ g}$.
> - **Membagi dengan Angka Indeks:** Dalam mencari rasio atomik, massa selalu dibagi dengan **Massa Atom Relatif ($A_r$)**, bukan dibagi dengan angka sembarang lainnya.

##### Strategi Penyelesaian:
1. **Hitung Massa Masing-Masing Unsur:**
   - Massa $\ce{C} = 3.6\text{ g}$
   - Massa $\ce{H} = 0.6\text{ g}$
   - Massa $\ce{O} = 9.0\text{ g} - (3.6 + 0.6)\text{ g} = 4.8\text{ g}$

2. **Hitung Perbandingan Mol Atomik:**
   $$n_{\ce{C}} : n_{\ce{H}} : n_{\ce{O}} = \frac{m_{\ce{C}}}{A_r\ \ce{C}} : \frac{m_{\ce{H}}}{A_r\ \ce{H}} : \frac{m_{\ce{O}}}{A_r\ \ce{O}}$$
   $$n_{\ce{C}} : n_{\ce{H}} : n_{\ce{O}} = \frac{3.6}{12} : \frac{0.6}{1} : \frac{4.8}{16}$$
   $$n_{\ce{C}} : n_{\ce{H}} : n_{\ce{O}} = 0.3 : 0.6 : 0.3$$
   Bagi seluruh angka dengan nilai terkecil ($0.3$):
   $$n_{\ce{C}} : n_{\ce{H}} : n_{\ce{O}} = \mathbf{1 : 2 : 1}$$
   - **Rumus Empiris (RE):** $\mathbf{\ce{CH2O}}$

3. **Tentukan Rumus Molekul (RM):**
   - $M_r\ \text{RE} = 1(12) + 2(1) + 1(16) = 30\text{ g mol}^{-1}$
   - $n = \frac{M_r\ \text{RM}}{M_r\ \text{RE}} = \frac{180}{30} = 6$
   - $\text{RM} = (\ce{CH2O})_6 = \mathbf{\ce{C6H12O6}}$ (Glukosa).

> [!PEMERIKSAAN_LOGIKA]
> ### 🔍 Pemeriksaan Logika (Sanity Check) & Koneksi
> - **Sanity Check:** Cek massa molekul glukosa $\ce{C6H12O6}$: $6(12) + 12(1) + 6(16) = 72 + 12 + 96 = 180\text{ g mol}^{-1}$. Nilai cocok persis dengan data $M_r$ soal.
> - **Koneksi Lintas Bab:** Senyawa glukosa $\ce{C6H12O6}$ yang diidentifikasi ini merupakan monomer karbohidrat yang akan dipelajari struktur cincin dan reaksinya pada Biomolekul Bab 12.

##### Latihan Terbimbing
1. Berapakah molaritas larutan asam sulfat pekat yang memiliki kadar $98\%$ massa dengan massa jenis $\rho = 1.84\text{ g mL}^{-1}$ ($M_r\ \ce{H2SO4}=98$)? *(Kunci Jawaban Akhir: 18.4 M)*
2. Sebanyak $50\text{ mL}$ larutan $\ce{NaOH}\ 0.4\text{ M}$ diencerkan hingga volume totalnya mencapai $200\text{ mL}$. Hitung molaritas larutan setelah diencerkan! *(Kunci Jawaban Akhir: 0.1 M)*`,
      checkpointQuizzes: [
        {
          id: 'chk-sma-304-1',
          type: 'multiple_choice',
          question: 'Persentase massa nitrogen dalam pupuk urea ($\ce{CO(NH2)2}$, $M_r=60, A_r\ \ce{N}=14$) adalah...',
          options: ['23.3%', '28.0%', '46.7%', '58.3%'],
          correctAnswer: 2,
          explanation:
            'Dalam molekul urea terdapat 2 atom N. Massa total N = 2 * 14 = 28 g mol⁻¹. Persentase N = (28 / 60) * 100% = 46.67% ~ 46.7%.',
        },
        {
          id: 'chk-sma-304-2',
          type: 'true_false',
          question: 'Ketika 100 mL larutan sukrosa 1 M ditambah 100 mL air, jumlah mol sukrosa di dalam larutan menjadi setengah kalinya.',
          correctAnswer: false,
          explanation:
            'Salah. Jumlah mol sukrosa tetap sama persis (konstan). Yang menjadi setengah kalinya adalah konsentrasi molaritasnya (turun dari 1 M menjadi 0.5 M) karena volume larutan berlipat ganda.',
        },
      ],
    },
    {
      tag: 'sma-03-stoikiometri-reaksi-pereaksi-pembatas',
      tags: ['stoikiometri-reaksi', 'pereaksi-pembatas', 'bagan-mbs', 'persen-hasil', 'air-kristal-hidrat'],
      title: 'Subbab 3.5: Stoikiometri Reaksi, Pereaksi Pembatas, dan Persen Hasil (Yield)',
      summary: 'Kalkulasi kuantitatif reaksi kimia menggunakan bagan M-B-S, analisis reaktan pembatas, dan kristal hidrat.',
      content: `#### 1. Intuisi: Dari Fenomena ke Tingkat Partikel
Bayangkan sebuah pabrik perakitan mobil: untuk merakit 1 unit mobil, dibutuhkan 1 buah bodi mobil dan 4 buah roda. Jika di gudang tersedia 10 buah bodi mobil tetapi hanya ada 24 buah roda, berapa banyakkah mobil utuh yang dapat dirakit? 

Dengan 24 roda, kamu hanya dapat menyelesaikan 6 unit mobil ($24 / 4 = 6$), meskipun bodi mobil masih tersisa 4 buah. Dalam perakitan tersebut, roda bertindak sebagai komponen pembatas yang habis lebih dahulu dan menghentikan seluruh proses perakitan.

Konsep yang sama berlaku persis dalam reaksi kimia. Ketika dua zat pereaksi dicampurkan, zat yang habis bereaksi terlebih dahulu disebut **Pereaksi Pembatas (*Limiting Reactant*)**. Pereaksi pembatas inilah yang menentukan secara mutlak berapa banyak produk maksimum yang dapat dihasilkan secara teoretis.

Perhatikan Gambar 3.5 berikut yang memvisualisasikan reaksi antara gas hidrogen dan oksigen menggunakan bagan partikel pereaksi pembatas.

<svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sma-b03-stoikiometri-mbs-title sma-b03-stoikiometri-mbs-desc" data-diagram="sma-b03-stoikiometri-mbs" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="sma-b03-stoikiometri-mbs-title">KONSEP PEREAKSI PEMBATAS PADA TINGKAT PARTIKEL</title>
  <desc id="sma-b03-stoikiometri-mbs-desc">DIAGRAM PARTIKEL CAMPURAN AWAL SEBELUM REAKSI DAN KONDISI AKHIR SETELAH PEREAKSI PEMBATAS HABIS BEREAKSI DENGAN PEREAKSI SISA TERTINGGAL.</desc>

  <!-- TITLE BANNER -->
  <rect x="20" y="20" width="760" height="40" rx="8" fill="#ececec" stroke="#1f2937" stroke-width="2"/>
  <text x="400" y="45" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" text-anchor="middle">ANALISIS PEREAKSI PEMBATAS (2 H2 + O2 &gt; 2 H2O)</text>

  <!-- KOTAK KIRI: KONDISI MULA-MULA -->
  <rect x="30" y="75" width="350" height="205" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <text x="205" y="98" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">MULA-MULA: 6 H2 + 4 O2</text>

  <!-- 6 MOLEKUL H2 -->
  <circle cx="65" cy="130" r="7" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/><circle cx="78" cy="130" r="7" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="125" cy="130" r="7" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/><circle cx="138" cy="130" r="7" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="185" cy="130" r="7" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/><circle cx="198" cy="130" r="7" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="65" cy="165" r="7" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/><circle cx="78" cy="165" r="7" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="125" cy="165" r="7" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/><circle cx="138" cy="165" r="7" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="185" cy="165" r="7" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/><circle cx="198" cy="165" r="7" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>

  <!-- 4 MOLEKUL O2 -->
  <circle cx="265" cy="135" r="10" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/><circle cx="283" cy="135" r="10" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="330" cy="135" r="10" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/><circle cx="348" cy="135" r="10" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="265" cy="170" r="10" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/><circle cx="283" cy="170" r="10" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="330" cy="170" r="10" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/><circle cx="348" cy="170" r="10" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/>

  <rect x="45" y="220" width="320" height="48" rx="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5"/>
  <text x="205" y="240" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">RASIO N/KOEF: H2 = 6/2 = 3</text>
  <text x="205" y="258" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">RASIO N/KOEF: O2 = 4/1 = 4 (H2 PEMBATAS)</text>

  <!-- KOTAK KANAN: KONDISI AKHIR -->
  <rect x="420" y="75" width="350" height="205" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <text x="595" y="98" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">AKHIR: 6 H2O + 1 O2 SISA</text>

  <!-- 6 MOLEKUL H2O -->
  <circle cx="470" cy="135" r="9" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="462" cy="144" r="5" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/><circle cx="478" cy="144" r="5" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>

  <circle cx="530" cy="135" r="9" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="522" cy="144" r="5" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/><circle cx="538" cy="144" r="5" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>

  <circle cx="590" cy="135" r="9" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="582" cy="144" r="5" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/><circle cx="598" cy="144" r="5" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>

  <circle cx="470" cy="175" r="9" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="462" cy="184" r="5" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/><circle cx="478" cy="184" r="5" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>

  <circle cx="530" cy="175" r="9" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="522" cy="184" r="5" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/><circle cx="538" cy="184" r="5" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>

  <circle cx="590" cy="175" r="9" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="582" cy="184" r="5" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/><circle cx="598" cy="184" r="5" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>

  <!-- 1 MOLEKUL O2 SISA -->
  <circle cx="680" cy="155" r="10" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/><circle cx="698" cy="155" r="10" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/>
  <text x="690" y="185" fill="#4b5563" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">SISA O2</text>

  <rect x="435" y="220" width="320" height="48" rx="6" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5"/>
  <text x="595" y="240" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">H2 HABIS (PEREAKSI PEMBATAS)</text>
  <text x="595" y="258" fill="#1f2937" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" text-anchor="middle">O2 BERSISA 1 MOLEKUL (BERLEBIH)</text>
</svg>
<div class="text-center font-sans text-xs font-semibold text-slate-500 mt-2 mb-4">Gambar 3.5: Analisis tingkat partikel penentuan pereaksi pembatas pada sintesis uap air.</div>

Bagaimana prosedur baku menyusun bagan Mula-mula, Bereaksi, dan Sisa (M-B-S) dalam perhitungan kimia kuantitatif?

---

#### 2. Formalisasi: Konsep Baku & Hubungan Matematis

1. **Penentuan Pereaksi Pembatas (*Limiting Reactant*):**
   Jika mol mula-mula dari dua reaktan atau lebih diketahui, hitung rasio mol terhadap koefisien untuk masing-masing reaktan:
   $$\text{Kriteria Pembatas} = \min \left( \frac{n_{\text{mula-mula}}}{\text{koefisien}} \right)$$
   Reaktan dengan nilai $\frac{n}{\text{koefisien}}$ terkecil adalah **Pereaksi Pembatas** yang akan habis bereaksi ($n_{\text{sisa}} = 0$).

2. **Bagan M-B-S (Mula-mula, Bereaksi, Sisa):**
   $$\begin{array}{lccccc}
   & a\,\ce{A} & + & b\,\ce{B} & \rightarrow & c\,\ce{C} \\
   \text{M (mol)} & n_A & & n_B & & - \\
   \text{B (mol)} & -a \cdot x & & -b \cdot x & & +c \cdot x \\
   \hline
   \text{S (mol)} & n_A - ax & & n_B - bx & & c \cdot x
   \end{array}$$
   Di mana $x$ adalah derajat kemajuan reaksi yang ditentukan oleh pereaksi pembatas. Nilai baris **Bereaksi (B)** wajib selalu berbanding lurus sesuai koefisien reaksi.

3. **Persen Hasil (*Percent Yield*):**
   Dalam eksperimen laboratorium nyata, produk yang diperoleh sering kali lebih sedikit dibanding perhitungan teoretis akibat reaksi samping atau pengotor:
   $$\% \text{ Hasil (Yield)} = \frac{\text{Massa Hasil Nyata (Eksperimen)}}{\text{Massa Hasil Teoretis (Stoikiometri)}} \times 100\%$$

4. **Penentuan Rumus Air Kristal Hidrat ($\ce{Garaman \cdot x H2O}$):**
   Senyawa hidrat melepaskan air kristalnya saat dipanaskan:
   $$\ce{Garam \cdot x H2O(s) -> Garam(s) + x H2O(g)}$$
   Nilai $x$ dicari dari perbandingan mol garam anhidrat terhadap mol air yang menguap:
   $$x = \frac{n_{\ce{H2O}}}{n_{\text{garam anhidrat}}}$$

**Makna Fisis Bagan M-B-S:**
Bagan M-B-S mendokumentasikan neraca materi secara utuh di mana baris Bereaksi (B) mencerminkan stoikiometri mikroskopik pemutusan dan pembentukan ikatan partikel.

> [!SYARAT_BATAS]
> ### ⚖️ Syarat Batas & Asumsi
> 1. **Satuan Baris M-B-S Wajib Mol:** Seluruh entri pada baris Mula-mula, Bereaksi, dan Sisa **WAJIB DINYATAKAN DALAM SATUAN MOL (ATAU MILIMOL)**. Dilarang keras mengisi baris M-B-S dalam satuan gram atau volume mililiter.
> 2. Pereaksi pembatas **BUKAN** reaktan dengan mol mula-mula paling kecil, melainkan reaktan dengan nilai $\frac{\text{mol}}{\text{koefisien}}$ paling kecil.

##### Uji Konsep Kualitatif
1. Direaksikan $3\text{ mol}$ gas $\ce{N2}$ dengan $6\text{ mol}$ gas $\ce{H2}$ sesuai persamaan $\ce{N2 + 3 H2 -> 2 NH3}$. Zat manakah yang menjadi pereaksi pembatas dan berapa mol $\ce{NH3}$ yang terbentuk?
   *Jawaban:*
   - Nilai $\frac{n}{\text{koef}} \ce{N2} = \frac{3}{1} = 3$.
   - Nilai $\frac{n}{\text{koef}} \ce{H2} = \frac{6}{3} = 2$.
   Karena $2 < 3$, maka **$\ce{H2}$ adalah pereaksi pembatas**.
   Mol $\ce{NH3}$ terbentuk $= \frac{2}{3} \times 6\text{ mol} = \mathbf{4\text{ mol}}$.
2. Sebanyak $5\text{ g}$ tembaga(II) sulfat hidrat ($\ce{CuSO4 \cdot x H2O}$) dipanaskan hingga seluruh air kristalnya menguap dan tersisa $3.2\text{ g}$ serbuk putih $\ce{CuSO4}$ anhidrat. Berapakah massa air yang menguap?
   *Jawaban:* Berdasarkan hukum kekekalan massa Lavoisier: massa air menguap $= 5.0\text{ g} - 3.2\text{ g} = \mathbf{1.8\text{ g}}$.

---

#### 3. Taktik Soal: Penerapan & Pemeriksaan Logika

##### Soal Contoh (Worked Example)
Sebanyak $5.4\text{ g}$ serbuk logam aluminium ($\ce{Al}$, $A_r=27$) direaksikan dengan $100\text{ mL}$ larutan asam sulfat ($\ce{H2SO4}$, $M_r=98$) berkonsentrasi $3\text{ M}$ sesuai persamaan reaksi:
$$2\,\ce{Al(s)} + 3\,\ce{H2SO4(aq)} \rightarrow \ce{Al2(SO4)3(aq)} + 3\,\ce{H2(g)}$$
1. Tentukan zat yang bertindak sebagai pereaksi pembatas!
2. Hitung volume gas hidrogen yang dihasilkan jika diukur pada kondisi standar (STP)!
3. Tentukan massa zat pereaksi yang tersisa setelah reaksi berhenti!

> [!TITIK_RAWAN]
> ### ⚠️ Titik Rawan Kesalahan (Common Pitfalls)
> - **Terburu-buru Memilih Pereaksi Pembatas:** Aluminium memiliki mol mula-mula $0.2\text{ mol}$ sedangkan asam sulfat memiliki $0.3\text{ mol}$. Siswa sering mengira aluminium pembatas karena $0.2 < 0.3$. Pada soal ini, setelah dibagi koefisien: $\frac{0.2}{2} = 0.1$ dan $\frac{0.3}{3} = 0.1$. Keduanya sama besar! Artinya, **kedua pereaksi habis bereaksi bersamaan secara stoikiometris**.
> - **Konversi Volume Larutan:** Ingat bahwa $100\text{ mL} = 0.1\text{ L}$ saat menghitung mol dari molaritas ($n = M \times V$).

##### Strategi Penyelesaian:
1. **Hitung Mol Mula-mula Masing-masing Reaktan:**
   - Mol $\ce{Al}$:
     $$n_{\ce{Al}} = \frac{5.4\text{ g}}{27\text{ g mol}^{-1}} = 0.2\text{ mol}$$
   - Mol $\ce{H2SO4}$:
     $$n_{\ce{H2SO4}} = M \times V = 3\text{ mol L}^{-1} \times 0.1\text{ L} = 0.3\text{ mol}$$

2. **Tentukan Pereaksi Pembatas:**
   - Untuk $\ce{Al}: \frac{0.2}{2} = 0.1$
   - Untuk $\ce{H2SO4}: \frac{0.3}{3} = 0.1$
   - Karena kedua rasio bernilai sama persis ($0.1 = 0.1$), maka **kedua pereaksi habis bereaksi secara tepat tanpa ada yang tersisa**.

3. **Susun Bagan M-B-S:**
   $$\begin{array}{lcccccc}
   & 2\,\ce{Al} & + & 3\,\ce{H2SO4} & \rightarrow & \ce{Al2(SO4)3} & + & 3\,\ce{H2} \\
   \text{Mula-mula} & 0.2\text{ mol} & & 0.3\text{ mol} & & - & & - \\
   \text{Bereaksi} & -0.2\text{ mol} & & -0.3\text{ mol} & & +0.1\text{ mol} & & +0.3\text{ mol} \\
   \hline
   \text{Sisa} & \mathbf{0\text{ mol}} & & \mathbf{0\text{ mol}} & & \mathbf{0.1\text{ mol}} & & \mathbf{0.3\text{ mol}}
   \end{array}$$

4. **Hitung Volume Gas $\ce{H2}$ (STP) dan Massa Sisa Reaktan:**
   - Volume gas $\ce{H2}$:
     $$V_{\ce{H2}} = n \times 22.4\text{ L mol}^{-1} = 0.3\text{ mol} \times 22.4\text{ L mol}^{-1} = \mathbf{6.72\text{ L}}$$
   - Massa pereaksi yang tersisa $= \mathbf{0\text{ gram}}$ (keduanya habis bereaksi).

> [!PEMERIKSAAN_LOGIKA]
> ### 🔍 Pemeriksaan Logika (Sanity Check) & Koneksi
> - **Sanity Check:** Periksa perbandingan mol zat yang bereaksi: $\ce{Al} : \ce{H2SO4} : \ce{Al2(SO4)3} : \ce{H2} = 0.2 : 0.3 : 0.1 : 0.3 = 2 : 3 : 1 : 3$. Rasio ini identik 100% dengan koefisien reaksi setara.
> - **Koneksi Lintas Bab:** Stoikiometri larutan dan konsep pereaksi pembatas ini menjadi instrumen esensial dalam menghitung pH titrasi asam-basa pada Bab 7 dan penentuan endapan garam pada Bab 8.

##### Latihan Terbimbing
1. Sebanyak $10\text{ g}$ kalsium karbonat ($\ce{CaCO3}$, $M_r=100$) direaksikan dengan larutan asam klorida encer menghasilkan kalsium klorida, air, dan gas karbon dioksida. Jika diperoleh $1.76\text{ g}$ gas $\ce{CO2}$ murni di laboratorium, hitung persentase hasil (% yield) reaksi tersebut! ($M_r\ \ce{CO2}=44$). *(Kunci Jawaban Akhir: 40%)*
2. Sebanyak $24.95\text{ g}$ tembaga(II) sulfat hidrat ($\ce{CuSO4 \cdot x H2O}$) dipanaskan sampai seluruh airnya menguap. Massa serbuk putih anhidrat yang tersisa adalah $15.95\text{ g}$. Tentukan rumus kristal hidrat tersebut! ($M_r\ \ce{CuSO4}=159.5, \ce{H2O}=18$). *(Kunci Jawaban Akhir: CuSO₄ · 5 H₂O)*`,
      checkpointQuizzes: [
        {
          id: 'chk-sma-305-1',
          type: 'multiple_choice',
          question: 'Sebanyak $4\text{ mol}$ gas $\ce{H2}$ direaksikan dengan $3\text{ mol}$ gas $\ce{O2}$ membentuk air. Zat apakah yang tersisa dan berapakah jumlah mol sisa tersebut?',
          options: [
            'Gas H₂ bersisa 1 mol',
            'Gas O₂ bersisa 1 mol',
            'Gas O₂ bersisa 2 mol',
            'Kedua zat habis bereaksi tanpa sisa',
          ],
          correctAnswer: 1,
          explanation:
            'Reaksi: 2 H₂ + O₂ -> 2 H₂O. Uji pembatas: H₂ = 4/2 = 2; O₂ = 3/1 = 3. H₂ adalah pereaksi pembatas (habis). O₂ yang bereaksi = (1/2) * 4 mol = 2 mol. Sisa O₂ = 3 - 2 = 1 mol.',
        },
        {
          id: 'chk-sma-305-2',
          type: 'true_false',
          question: 'Pada bagan stoikiometri reaksi M-B-S, angka pada baris Bereaksi (B) selalu berbanding lurus dengan koefisien persamaan reaksi setara.',
          correctAnswer: true,
          explanation:
            'Benar. Baris Bereaksi mencerminkan jumlah partikel yang terlibat langsung dalam pemutusan dan pembentukan ikatan sehingga perbandingannya wajib sama persis dengan rasio koefisien reaksi.',
        },
      ],
    },
  ],
  core_concepts: [
    {
      tag: 'sma-03-penutup-bab-macro-loop',
      tags: ['pengayaan-inkuiri', 'ringkasan-stoikiometri', 'peta-keputusan-stoikiometri', 'evaluasi-mandiri'],
      title: 'Penutup Bab 3: Pengayaan Inkuiri, Peta Keputusan, & Evaluasi Mandiri',
      summary: 'Studi kasus kimia airbag mobil, peta keputusan navigasi stoikiometri, dan evaluasi mandiri 3 tingkat.',
      content: `### 🔬 Pengayaan Inkuiri & Kontekstual

#### Revolusi Stoikiometri Kantong Udara (Airbag) Mobil: Ledakan Terkendali dalam 40 Milidetik
Pernahkah kamu berpikir bagaimana kantong udara penyelamat (*airbag*) pada mobil modern dapat mengembang sempurna dalam waktu kurang dari 40 milidetik saat terjadi benturan keras? Keberhasilan teknologi penyelamat nyawa ini sepenuhnya bergantung pada akurasi stoikiometri reaksi kimia berkecepatan tinggi.

Airbag tidak diisi oleh tangki gas bertekanan karena tabung gas terlalu berat dan lambat merespons. Sebagai gantinya, airbag menggunakan serbuk padat **Natrium Azida ($\ce{NaN3}$)**. Ketika sensor benturan mendeteksi deselerasi ekstrem, percikan listrik memicu dekomposisi cepat natrium azida menghasilkan gas nitrogen murni dalam sekejap:
$$2\,\ce{NaN3(s)} \rightarrow 2\,\ce{Na(s)} + 3\,\ce{N2(g)}$$

Namun, reaksi ini menyisakan produk samping berupa logam natrium ($\ce{Na}$) murni yang sangat berbahaya karena bersifat korosif dan dapat meledak jika bereaksi dengan keringat atau uap air. Untuk meniadakan bahaya ini, para insinyur kimia mencampurkan kalium nitrat ($\ce{KNO3}$) dan silika ($\ce{SiO2}$) dengan perbandingan stoikiometri yang sangat presisi untuk mengubah logam natrium menjadi kaca silikat alkali yang aman dan tidak reaktif:
$$10\,\ce{Na(s)} + 2\,\ce{KNO3(s)} \rightarrow \ce{K2O(s)} + 5\,\ce{Na2O(s)} + \ce{N2(g)}$$
$$\ce{K2O(s)} + \ce{Na2O(s)} + \ce{SiO2(s)} \rightarrow \text{Kaca Silikat Padat Aman (Alkaline Silicate Glass)}$$

#### 1. Data Desain Stoikiometri Kantong Udara Pengemudi
| Parameter Kuantitatif | Nilai Spesifikasi Teknis |
| :--- | :--- |
| **Volume Target Pengembangan Airbag** | $67.2\text{ Liter}$ gas $\ce{N2}$ pada STP |
| **Waktu Reaksi Sempurna** | $30 - 40\text{ milidetik}$ |
| **Massa Molar Natrium Azida ($\ce{NaN3}$)** | $65.0\text{ g mol}^{-1}$ |
| **Persen Hasil Teoretis Reaksi** | $98.5\%$ |

#### 2. Pertanyaan Pemandu Bertahap
1. **Kalkulasi Stoikiometri:** Berapakah mol gas $\ce{N2}$ yang dibutuhkan untuk mengisi airbag bervolume $67.2\text{ L}$ pada kondisi STP? Berdasarkan reaksi pertama, berapa gram serbuk padat $\ce{NaN3}$ yang wajib disiapkan di dalam modul kemudi?
2. **Evaluasi Keamanan Kimia:** Mengapa perbandingan massa antara $\ce{NaN3}$ dan $\ce{KNO3}$ harus dihitung dengan rasio stoikiometri yang tepat? Apa konsekuensi fatal bagi penumpang jika serbuk $\ce{KNO3}$ ditambahkan terlalu sedikit?
3. **Analisis Hukum Gas:** Di dalam kabin mobil yang panas pada siang hari ($37^\circ\text{C}$), apakah volume gas nitrogen hasil ledakan akan sama dengan volume pada kondisi STP ($0^\circ\text{C}$)? Jelaskan menggunakan hukum gas ideal $PV = nRT$!

#### 3. Analisis & Sintesis Konsep
Untuk menghasilkan $67.2\text{ L}$ gas $\ce{N2}$ pada STP, dibutuhkan:
$$n_{\ce{N2}} = \frac{67.2\text{ L}}{22.4\text{ L mol}^{-1}} = 3.0\text{ mol}$$
Berdasarkan perbandingan koefisien reaksi $2\,\ce{NaN3} : 3\,\ce{N2}$, mol $\ce{NaN3}$ yang harus terurai adalah:
$$n_{\ce{NaN3}} = \frac{2}{3} \times 3.0\text{ mol} = 2.0\text{ mol}$$
Massa padatan $\ce{NaN3}$ murni yang dibutuhkan:
$$m = 2.0\text{ mol} \times 65.0\text{ g mol}^{-1} = \mathbf{130.0\text{ gram}}$$
Jika $\ce{KNO3}$ ditambahkan kurang dari rasio stoikiometrisnya, sisa logam natrium akan bereaksi secara eksotermik dengan uap udara menghasilkan gas hidrogen dan natrium hidroksida ($\ce{NaOH}$) pekat yang dapat membutakan mata dan membakar kulit penumpang.

#### 4. Koneksi Lintas Bab
Reaksi dekomposisi berkecepatan tinggi ini merupakan kajian laju reaksi kinetika kimia pada Bab 5 dan penerapan pertukaran energi panas termokimia pada Bab 4.

---

### ⚡ Ringkasan Cepat & Peta Keputusan

#### A. Tabel Komparasi Konsep Sering Tertukar
| Konsep A | Konsep B | Titik Pembeda Fundamental |
| :--- | :--- | :--- |
| **Rumus Empiris (RE)** | **Rumus Molekul (RM)** | RE adalah perbandingan atomik bulat paling sederhana; RM adalah jumlah atom riil di dalam satu molekul utuh. |
| **Volume Molar STP** | **Volume Molar RTP** | STP diukur pada $0^\circ\text{C}, 1\text{ atm}$ ($22.4\text{ L mol}^{-1}$); RTP diukur pada $25^\circ\text{C}, 1\text{ atm}$ ($24.0\text{ L mol}^{-1}$). |
| **Pereaksi Pembatas** | **Pereaksi Berlebih** | Pembatas habis bereaksi lebih dahulu ($\frac{n}{\text{koef}}$ terkecil); pereaksi berlebih menyisakan sisa reaktan di akhir reaksi. |
| **Koefisien Reaksi** | **Angka Indeks** | Koefisien menyatakan perbandingan jumlah molekul (boleh diubah); indeks menyatakan struktur kimia zat (terlarang diubah). |

#### B. Peta Alur Keputusan: Navigasi Soal Stoikiometri Kimia
$$\begin{array}{ccccc}
\boxed{\text{Data Soal: Gram / Volume / Partikel}} & \rightarrow & \text{Langkah 1: Ubah Semua Data ke Satuan MOL} & & \\
& & \downarrow & & \\
& & \text{Langkah 2: Tulis & Setarakan Persamaan Reaksi} & & \\
& & \downarrow & & \\
& & \text{Apakah ada lebih dari satu mol reaktan?} & & \\
& & \downarrow\text{YA} & \searrow\text{TIDAK} & \\
& & \boxed{\text{Bagi Tiap Mol dengan Koefisien: Cari Nilai Min}} & & \boxed{\text{Gunakan Perbandingan Koefisien Langsung}} \\
& & \downarrow & & \downarrow \\
& & \boxed{\text{Susun Bagan M-B-S (Satuan Wajib Mol)}} & & \boxed{n_{\text{target}} = \frac{\text{Koef Target}}{\text{Koef Diketahui}} \times n_{\text{diketahui}}} \\
& & \downarrow & & \downarrow \\
& & \text{Langkah 3: Konversi Mol Produk ke Satuan yang Ditanyakan (Gram / L / Partikel)} & &
\end{array}$$

---

### 🏆 Evaluasi Mandiri Berjenjang

#### Tingkat I: Fondasi (Asesmen Formatif)
1. Tuliskan nama resmi IUPAC untuk senyawa biner kovalen $\ce{P2O5}$ dan senyawa ionik $\ce{Cu2O}$! *(Kunci Jawaban Akhir: Difosforus pentaoksida dan Tembaga(I) oksida)*
2. Setarakan persamaan reaksi: $\ce{Mg3N2(s) + H2O(l) -> Mg(OH)2(s) + NH3(g)}$! *(Kunci Jawaban Akhir: Mg₃N₂(s) + 6 H₂O(l) -> 3 Mg(OH)₂(s) + 2 NH₃(g))*
3. Berapakah jumlah mol yang terkandung di dalam $8\text{ g}$ gas metana ($\ce{CH4}$, $M_r=16$)? *(Kunci Jawaban Akhir: 0.5 mol)*
4. Berapakah volume dari $0.1\text{ mol}$ gas karbon dioksida jika diukur pada kondisi standar (STP)? *(Kunci Jawaban Akhir: 2.24 L)*
5. Senyawa manakah yang bertindak sebagai pereaksi pembatas jika $2\text{ mol}$ gas $\ce{H2}$ direaksikan dengan $2\text{ mol}$ gas $\ce{Cl2}$ membentuk gas $\ce{HCl}$? *(Kunci Jawaban Akhir: Keduanya habis bereaksi bersamaan secara stoikiometris karena perbandingannya tepat 1:1)*

#### Tingkat II: Integrasi (Asesmen Sumatif & Ujian Sekolah)
6. Sebanyak $12\text{ g}$ logam magnesium ($A_r=24$) direaksikan dengan larutan asam klorida encer menghasilkan larutan magnesium klorida dan gas hidrogen. Hitung volume gas hidrogen yang terbentuk pada kondisi STP! *(Kunci Jawaban Akhir: 11.2 L)*
7. Suatu senyawa oksida nitrogen tersusun atas $30.4\%$ massa nitrogen dan $69.6\%$ massa oksigen. Jika $M_r$ senyawa tersebut adalah 92, tentukan rumus empiris dan rumus molekulnya! ($A_r\ \ce{N}=14, \ce{O}=16$). *(Kunci Jawaban Akhir: Rumus Empiris = NO₂ dan Rumus Molekul = N₂O₄)*
8. Berapakah massa kristal natrium hidroksida ($\ce{NaOH}$, $M_r=40$) yang harus dilarutkan ke dalam air untuk membuat $250\text{ mL}$ larutan $\ce{NaOH}\ 0.2\text{ M}$? *(Kunci Jawaban Akhir: 2.0 gram)*
9. Sebanyak $100\text{ mL}$ larutan barium hidroksida $\ce{Ba(OH)2}\ 0.1\text{ M}$ direaksikan dengan $100\text{ mL}$ larutan asam sulfat $\ce{H2SO4}\ 0.1\text{ M}$ menghasilkan endapan barium sulfat dan air. Tentukan massa endapan $\ce{BaSO4}$ yang diperoleh! ($M_r\ \ce{BaSO4}=233$). *(Kunci Jawaban Akhir: 2.33 gram)*
10. Kristal seng sulfat hidrat seberat $5.74\text{ g}$ ($\ce{ZnSO4 \cdot x H2O}$) dipanaskan sampai seluruh air kristalnya hilang. Massa garam anhidrat yang tersisa adalah $3.22\text{ g}$. Tentukan jumlah air kristal ($x$) pada senyawa tersebut! ($M_r\ \ce{ZnSO4}=161, \ce{H2O}=18$). *(Kunci Jawaban Akhir: x = 7, rumusnya ZnSO₄ · 7 H₂O)*

#### Tingkat III: Penalaran Lanjut (HOTS, TKA, & SNBT)
11. Suatu cuplikan bijih pirit seberat $10.0\text{ g}$ yang mengandung senyawa besi(II) disulfida ($\ce{FeS2}$, $M_r=120$) dipanggang sempurna dengan gas oksigen sesuai persamaan reaksi:
$$4\,\ce{FeS2(s)} + 11\,\ce{O2(g)} \rightarrow 2\,\ce{Fe2O3(s)} + 8\,\ce{SO2(g)}$$
Jika gas $\ce{SO2}$ yang dihasilkan dialirkan ke dalam air dan diukur bervolume $1.344\text{ L}$ pada kondisi STP, lakukan deduksi untuk menentukan persen kemurnian $\ce{FeS2}$ di dalam bijih pirit tersebut!
12. Campuran gas metana ($\ce{CH4}$) dan gas etana ($\ce{C2H6}$) bervolume total $10\text{ L}$ dibakar sempurna dengan gas oksigen berlebih pada suhu dan tekanan konstan. Setelah reaksi selesai, terbentuk $16\text{ L}$ gas karbon dioksida ($\ce{CO2}$). Lakukan analisis stoikiometri volume Gay-Lussac untuk menentukan persentase volume masing-masing gas di dalam campuran mula-mula!`,
      keyFormulas: [
        {
          name: 'Konversi Mol ke Massa',
          formula: 'n = \\frac{m}{M_r}',
        },
        {
          name: 'Konversi Mol ke Volume Gas Ideal',
          formula: 'P \\cdot V = n \\cdot R \\cdot T',
        },
        {
          name: 'Molaritas Larutan',
          formula: 'M = \\frac{n}{V_{\\text{L}}} = \\frac{m}{M_r} \\times \\frac{1000}{V_{\\text{mL}}}',
        },
        {
          name: 'Pengenceran Larutan',
          formula: 'M_1 \\cdot V_1 = M_2 \\cdot V_2',
        },
        {
          name: 'Persen Hasil Teoretis',
          formula: '\\% \\text{ Yield} = \\frac{\\text{Massa Eksperimen}}{\\text{Massa Teoretis}} \\times 100\\%',
        },
      ],
    },
  ],
  worked_examples: [],
};
