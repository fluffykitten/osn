import type { SmaMaterialItem } from '../smaMaterialsData';
import { CHECKPOINTS_FASE_F2 } from '../checkpoints/index.ts';
import { WORKED_EXAMPLES_TOPIC_113, WORKED_EXAMPLES_TOPIC_114 } from './smaWorkedExamplesFaseF2.ts';

const BASE_SMA_MATERIALS_FASE_F2: SmaMaterialItem[] = [
    {
    id: 113,
    topic_number: 13,
    grade: 'Kelas 12',
    semester: 1,
    curriculumPhase: 'Fase F',
    relatedOsnTopicId: 3,
    title: 'Sifat Koligatif Larutan SMA (Hukum Raoult, Titik Didih-Beku, Tekanan Osmotik, Faktor van t Hoff & Osmometri)',
    slug: 'sifat-koligatif-larutan-sma',
    category: 'Kimia Fisik Larutan',
    level: 'SMA',
    readTimeMinutes: 35,
    summary: 'Kajian komprehensif termodinamika larutan sejati: satuan konsentrasi fisik (fraksi mol dan molalitas invarian suhu), penjelasan potensial kimia zat terlarut non-volatile, formulasi Hukum Raoult dan penurunan tekanan uap (ΔP), kenaikan titik didih (ΔTb) serta penurunan titik beku (ΔTf) dengan analisis diagram fasa P-T, tekanan osmotik (Π) dan teknologi desalinasi osmosis balik (RO), perlakuan elektrolit melalui faktor van t Hoff (i) dan teori pasangan ion Debye-Hückel, hingga penentuan massa molar makromolekul melalui osmometri membran.',
    allTags: [
      'sifat-koligatif',
      'molalitas-fraksi-mol',
      'hukum-raoult',
      'penurunan-tekanan-uap',
      'kenaikan-titik-didih',
      'penurunan-titik-beku',
      'diagram-fasa-pt',
      'tekanan-osmotik',
      'osmosis-balik-ro',
      'faktor-van-t-hoff',
      'larutan-elektrolit',
      'derajat-ionisasi',
      'osmometri-polimer',
      'molalitas',
      'satuan-konsentrasi',
      'invariansi-suhu',
      'glukosa',
      'fraksi-mol',
      'ebulioskopi',
      'sukrosa',
      'non-elektrolit',
      'krioskopi',
      'urea',
      'van-t-hoff',
      'tonisitas',
      'krenasi',
      'etilen-glikol',
      'tekanan-uap',
      'potensial-kimia',
      'elektrolit',
      'ionisasi',
      'barium-klorida',
      'elektrolit-terner',
      'metode-rast',
      'kamper',
      'massa-molar',
      'radiator-mobil',
      'anti-freeze',
      'anti-boil',
      'tetapan-asam-ka',
      'asam-format',
      'reverse-osmosis',
      'desalinasi',
      'air-laut',
      'campuran-solut',
      'aditivitas-koligatif',
      'salin-normal',
      'hemolisis',
      'fisiologi-darah',
      'deviasi-raoult',
      'ikatan-hidrogen',
      'azeotrop',
      'termodinamika-larutan',
      'debye-huckel',
      'pasangan-ion',
      'elektrolit-divalen',
      'termodinamika-krioskopi',
      'entalpi-peleburan',
      'benzena',
      'clausius-clapeyron',
      'dimerisasi',
      'asam-benzoat',
      'asosiasi-molekul',
      'osmometri',
      'makromolekul',
      'hemoglobin',
      'sensitivitas-koligatif',
      'larutan-ideal',
      'hukum-dalton',
      'distilasi-fraksional',
      'tetapan-kesetimbangan',
      'krioskopi-lanjutan',
      'osmometri-virial',
      'massa-molar-polimer',
      'koefisien-virial',
      'good-solvent',
      'kekuatan-ionik',
      'kesetimbangan-donnan',
      'polielektrolit',
      'tekanan-onkotik',
      'osmometri-membran',
    ],
    prerequisites: [
      {
        tag: 'satuan-konsentrasi-fraksi-mol-dan-molalitas',
        title: 'Prasyarat 1: Satuan Konsentrasi Kimia Fisik: Fraksi Mol (X), Molalitas (m), dan Invariansi Temperatur',
        summary: 'Formulasi matematis fraksi mol dan molalitas, alasan mengapa molalitas tidak berubah terhadap suhu, serta konversi antar satuan konsentrasi.',
        content: `Dalam termodinamika kimia larutan, sifat koligatif sangat peka terhadap perubahan temperatur. Oleh karena itu, pemilihan satuan konsentrasi yang tepat merupakan hal yang mutlak.

### 1. Kelemahan Molaritas ($M$) terhadap Perubahan Temperatur
Molaritas ($M = \\text{mol zat terlarut} / \\text{Liter larutan}$) menyatakan konsentrasi berbasis **volume total larutan**. Ketika temperatur larutan dinaikkan:
- Cairan mengalami ekspansi termal (volume memuai, $V \\uparrow$).
- Akibatnya, nilai molaritas larutan akan **menurun** meskipun jumlah molekul zat terlarut tidak pernah berubah.
- Karena fenomena kenaikan titik didih dan penurunan titik beku melibatkan perubahan temperatur yang signifikan, satuan molaritas tidak dapat digunakan secara presisi untuk kajian ebulioskopi dan krioskopi!

---

### 2. Fraksi Mol ($X$) & Molalitas ($m$): Besaran Invarian Suhu
Untuk mengatasi kelemahan molaritas, kimiawan fisika menggunakan satuan konsentrasi yang berbasis **massa**, karena massa bersifat kekal dan tidak pernah dipengaruhi oleh pemuaian volume akibat suhu.

#### A. Fraksi Mol ($X$)
Fraksi mol menyatakan perbandingan jumlah mol suatu komponen terhadap jumlah mol total seluruh komponen dalam larutan:
$$X_{\\text{terlarut}} = \\frac{n_t}{n_t + n_p} \\qquad X_{\\text{pelarut}} = \\frac{n_p}{n_t + n_p}$$
$$X_{\\text{terlarut}} + X_{\\text{pelarut}} = 1$$
Fraksi mol adalah besaran tanpa satuan (*dimensionless*) yang menjadi fondasi matematis Hukum Raoult pada kesetimbangan fasa cair-uap.

#### B. Molalitas ($m$)
Molalitas didefinisikan sebagai jumlah mol zat terlarut yang terlarut di dalam **$1\\text{ kilogram}$ ($1000\\text{ gram}$) pelarut murni**:
$$m = \\frac{n_t}{\\text{massa pelarut (kg)}} = \\frac{\\text{massa terlarut (g)}}{M_r} \\times \\frac{1000}{P \\text{ (gram pelarut)}}$$
Karena massa zat terlarut dan massa pelarut ($P$) konstan terhadap temperatur, **nilai molalitas suatu larutan tetap sama pada suhu $0^\\circ\\text{C}$, $25^\\circ\\text{C}$, maupun $100^\\circ\\text{C}$!**

---

### 3. Algoritma Konversi Satuan Konsentrasi
Bila diketahui kadar persentase massa zat terlarut ($\\%$) dengan massa molar $M_r$ di dalam pelarut air:
$$m = \\frac{\\%}{100 - \\%} \\times \\frac{1000}{M_r}$$
Sedangkan konversi antara Molaritas ($M$) dan Molalitas ($m$) membutuhkan data massa jenis larutan ($\\rho$ dalam $\\text{g/mL}$):
$m = \\frac{1000 \\times M}{(1000 \\times \\rho) - (M \\times M_r)}$

> [!WARNING]
> ### ⚠️ Peringatan Miskonsepsi Siswa SMA: Mengapa Molaritas (M) Gagal pada Suhu Berubah?
> Banyak siswa SMA terbiasa menghitung konsentrasi dengan rumus molaritas ($M = n/V$). **Ingat: Volume cairan ($V$) memuai saat dipanaskan dan menyusut saat didinginkan!** Akibatnya, nilai molaritas larutan akan berubah-ubah seiring perubahan suhu meskipun jumlah partikel terlarutnya tetap. Oleh sebab itu, perhitungan ebulioskopi dan krioskopi **WAJIB** menggunakan **molalitas ($m$)** atau **fraksi mol ($X$)** yang berbasis massa pelarut (karena massa bersifat kekal dan tidak terpengaruh pemuaian suhu).`,
      },
      {
        tag: 'potensial-kimia-dan-dasar-termodinamika-koligatif',
        title: 'Prasyarat 2: Dasar Termodinamika: Potensial Kimia (μ), Entropi Pencampuran, dan Esensi Sifat Koligatif',
        summary: 'Mengapa sifat koligatif hanya bergantung pada jumlah partikel dan bukan jenis zat, serta tinjauan penurunan potensial kimia cairan.',
        content: `Kata *koligatif* berakar dari bahasa Latin *colligatus*, yang bermakna "terikat bersama" atau "bergantung pada kolektivitas". **Sifat koligatif larutan** didefinisikan sebagai sifat-sifat fisik larutan yang **hanya bergantung pada kuantitas (jumlah partikel atau konsentrasi) zat terlarut**, dan sama sekali **tidak bergantung pada identitas kimiawi atau jenis zat terlarut tersebut** (apakah berupa glukosa, urea, sukrosa, ataupun garam).

### 1. Empat Fondasi Fenomena Sifat Koligatif Larutan
Empat fenomena fisik yang tergolong sifat koligatif adalah:
1. **Penurunan Tekanan Uap Jenuh ($\\Delta P$)**
2. **Kenaikan Titik Didih ($\\Delta T_b$)**
3. **Penurunan Titik Beku ($\\Delta T_f$)**
4. **Tekanan Osmotik ($\\Pi$)**

---

### 2. Tinjauan Termodinamika: Entropi Pencampuran & Potensial Kimia ($\\mu$)
Mengapa keberadaan zat terlarut yang tidak mudah menguap (*non-volatile solute*) selalu menyebabkan penurunan tekanan uap, kenaikan titik didih, dan penurunan titik beku secara serentak?

1. **Entropi Fasa Cair Meningkat:**
   Pelarut murni tersusun atas molekul-molekul identik yang teratur. Ketika zat terlarut ditambahkan, derajat ketidakteraturan sistem cairan melonjak drastis (**entropi pencampuran $\\Delta S_{\\text{mix}} > 0$**).
2. **Penurunan Potensial Kimia Cairan ($\\mu_{\\text{cair}}$):**
   Potensial kimia ($\\mu$) merepresentasikan energi bebas molar parsial suatu zat. Menurut hubungan termodinamika:
   $$\\mu_A(l) = \\mu_A^\\circ(l) + R T \\ln X_A$$
   Karena fraksi mol pelarut dalam larutan selalu lebih kecil dari satu ($X_A < 1$), maka nilai $\\ln X_A < 0$. Akibatnya:
   $$\\mathbf{\\mu_A(l) < \\mu_A^\\circ(l)}$$
   Potensial kimia pelarut dalam larutan **selalu lebih rendah** daripada potensial kimia pelarut murninya!

3. **Konsekuensi terhadap Kesetimbangan Fasa:**
   - **Penguapan (Cair $\\to$ Gas):** Karena fasa cair menjadi lebih stabil (potensial kimianya turun), kecenderungan molekul pelarut untuk lepas ke fasa gas berkurang $\\implies$ **Tekanan uap turun ($\\Delta P$)**.
   - **Pendidihan (Cair $\\to$ Gas):** Diperlukan temperatur yang lebih tinggi agar potensial kimia cairan menyamai potensial fasa uap $\\implies$ **Titik didih naik ($\\Delta T_b$)**.
   - **Pembekuan (Cair $\\to$ Padat):** Diperlukan temperatur yang lebih rendah agar fasa padat murni (es) dapat berada dalam kesetimbangan dengan cairan yang terstabilkan secara entropik tersebut $\\implies$ **Titik beku turun ($\\Delta T_f$)**.

> [!WARNING]
> ### ⚠️ Peringatan Miskonsepsi Siswa SMA: Jenis Zat vs Jumlah Partikel
> Sering kali siswa terkecoh mengira larutan sukrosa $0.1\\text{ m}$ akan mendidih lebih lambat atau lebih cepat dibanding larutan glukosa $0.1\\text{ m}$ karena molekul sukrosa ($M_r = 342$) jauh lebih berat dan besar daripada glukosa ($M_r = 180$). **Sifat koligatif TIDAK PERNAH peduli pada ukuran, massa molar, atau jenis zat terlarut!** Selama jumlah partikelnya sama dan keduanya non-elektrolit, efek kenaikan titik didih, penurunan titik beku, dan penurunan tekanan uapnya akan **sama persis**!`,
      },
    ],
    core_concepts: [
      {
        tag: 'hukum-raoult-dan-penurunan-tekanan-uap-jenuh',
        tags: ['hukum-raoult', 'penurunan-tekanan-uap', 'fraksi-mol', 'larutan-ideal', 'deviasi-raoult'],
        title: 'Konsep Inti 1: Penurunan Tekanan Uap Jenuh (ΔP) & Formulasi Hukum Raoult',
        summary: 'Kajian kesetimbangan penguapan-kondensasi cairan, formulasi Hukum Raoult untuk pelarut volatil dan zat terlarut non-volatile, serta deviasi larutan non-ideal.',
        content: `Dalam ruang tertutup pada temperatur tetap, molekul-molekul cairan terus-menerus menguap melepaskan diri dari permukaan ke fasa gas, sementara molekul uap menumbuk kembali permukaan cairan dan terkondensasi. Ketika laju penguapan tepat sama dengan laju kondensasi, tercapailah keadaan kesetimbangan dinamis, dan tekanan yang dikerahkan oleh uap tersebut dinamakan **tekanan uap jenuh pelarut murni ($P^\\circ$)**.

### 1. Formulasi Hukum Raoult
Pada tahun 1887, kimiawan Prancis François-Marie Raoult merumuskan hukum mendasar kesetimbangan uap-cair untuk larutan ideal:
> **Hukum Raoult:**
> "Tekanan uap parsial suatu komponen volatil dalam larutan ($P_p$) sebanding dengan fraksi mol komponen tersebut di dalam fasa cair ($X_p$) dikalikan dengan tekanan uap jenuh komponen tersebut dalam keadaan murni ($P^\\circ$)."
> $$P = X_p \\cdot P^\\circ$$

Bila zat terlarut bersifat **tidak mudah menguap (*non-volatile*)** (seperti glukosa, urea, sukrosa, atau garam-garam anorganik), maka seluruh tekanan uap di atas larutan hanya berasal dari molekul pelarut murni ($P_{\\text{larutan}} = P_p$).

---

### 2. Formulasi Penurunan Tekanan Uap Jenuh ($\\Delta P$)
Karena fraksi mol pelarut $X_p = 1 - X_t$ (di mana $X_t$ adalah fraksi mol zat terlarut):
$$P = (1 - X_t) \\cdot P^\\circ = P^\\circ - (X_t \\cdot P^\\circ)$$
$$P^\\circ - P = X_t \\cdot P^\\circ$$
Maka **penurunan tekanan uap jenuh ($\\Delta P$)** dirumuskan secara elegan sebagai:
$$\\mathbf{\\Delta P = X_t \\cdot P^\\circ}$$

di mana:
- $\\Delta P = P^\\circ - P$ (penurunan tekanan uap, $\\text{mmHg}$ atau $\\text{atm}$).
- $P^\\circ$ = tekanan uap jenuh pelarut murni pada suhu tertentu.
- $P$ = tekanan uap jenuh larutan.
- $X_t$ = fraksi mol zat terlarut ($X_t = \\frac{n_t}{n_t + n_p}$).

---

### 3. Penjelasan Molekular: Efek Penghalangan Permukaan
Secara mikroskopis pada antarmuka cairan-gas:
- Pada pelarut murni, $100\\%$ luas area permukaan cairan ditempati oleh molekul-molekul pelarut yang siap menguap ke udara.
- Pada larutan, sebagian fraksi area permukaan ditempati oleh molekul-molekul zat terlarut non-volatile. Keberadaan partikel terlarut ini secara fisik **menghalangi (*steric hindrance*)** molekul-molekul pelarut untuk melompat keluar menuju fasa uap.
- Akibatnya, laju penguapan per satuan luas menurun, sehingga jumlah molekul uap pada keadaan setimbang menjadi lebih sedikit dan tekanan uap larutan ($P$) selalu lebih rendah daripada pelarut murni ($P < P^\\circ$).

---

### 4. Diagram Visual Hukum Raoult & Penghalangan Permukaan Cairan

<svg viewBox="0 0 760 340" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <!-- Header -->
  <rect x="0" y="0" width="760" height="42" fill="#0f172a" rx="10"/>
  <text x="380" y="26" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">HUKUM RAOULT & MEKANISME MIKROSKOPIS PENURUNAN TEKANAN UAP (ΔP)</text>

  <!-- PANEL KIRI: Model Molekular Permukaan (x=15..420) -->
  <g transform="translate(15, 50)">
    <rect x="0" y="0" width="405" height="275" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="202" y="22" fill="#1e293b" font-size="11" font-weight="bold" text-anchor="middle">Komparasi Antarmuka Penguapan Permukaan Cairan</text>

    <!-- Beker 1: Pelarut Murni Air (x=20..195) -->
    <rect x="20" y="45" width="175" height="165" rx="6" fill="#ffffff" stroke="#64748b"/>
    <text x="107" y="62" fill="#0369a1" font-size="9.5" font-weight="bold" text-anchor="middle">Pelarut Murni (P° Tinggi)</text>
    <!-- Cairan biru -->
    <rect x="22" y="110" width="171" height="98" fill="#e0f2fe"/>
    <line x1="22" y1="110" x2="193" y2="110" stroke="#0284c7" stroke-width="2"/>
    <!-- Molekul Pelarut di Permukaan (Semua Biru Bebas Menguap) -->
    <circle cx="45" cy="110" r="7" fill="#0284c7"/><line x1="45" y1="100" x2="45" y2="80" stroke="#0284c7" stroke-width="2"/>
    <circle cx="75" cy="110" r="7" fill="#0284c7"/><line x1="75" y1="100" x2="75" y2="75" stroke="#0284c7" stroke-width="2"/>
    <circle cx="105" cy="110" r="7" fill="#0284c7"/><line x1="105" y1="100" x2="105" y2="82" stroke="#0284c7" stroke-width="2"/>
    <circle cx="135" cy="110" r="7" fill="#0284c7"/><line x1="135" y1="100" x2="135" y2="75" stroke="#0284c7" stroke-width="2"/>
    <circle cx="165" cy="110" r="7" fill="#0284c7"/><line x1="165" y1="100" x2="165" y2="80" stroke="#0284c7" stroke-width="2"/>
    <!-- Uap padat di atas -->
    <circle cx="50" cy="70" r="5" fill="#38bdf8"/><circle cx="90" cy="65" r="5" fill="#38bdf8"/>
    <circle cx="130" cy="70" r="5" fill="#38bdf8"/><circle cx="160" cy="65" r="5" fill="#38bdf8"/>
    <text x="107" y="195" fill="#0369a1" font-size="8" text-anchor="middle">Molekul uap banyak ➜ P° besar</text>

    <!-- Beker 2: Larutan dengan Zat Terlarut (x=210..385) -->
    <rect x="210" y="45" width="175" height="165" rx="6" fill="#ffffff" stroke="#64748b"/>
    <text x="297" y="62" fill="#991b1b" font-size="9.5" font-weight="bold" text-anchor="middle">Larutan (P &lt; P° / ΔP)</text>
    <!-- Cairan biru -->
    <rect x="212" y="110" width="171" height="98" fill="#e0f2fe"/>
    <line x1="212" y1="110" x2="383" y2="110" stroke="#0284c7" stroke-width="2"/>
    <!-- Molekul Permukaan Terhalang oleh Solute Merah -->
    <circle cx="235" cy="110" r="7" fill="#0284c7"/><line x1="235" y1="100" x2="235" y2="80" stroke="#0284c7" stroke-width="2"/>
    <circle cx="265" cy="110" r="9" fill="#ef4444"/><text x="265" y="113" fill="#ffffff" font-size="7" font-weight="bold" text-anchor="middle">X</text>
    <circle cx="295" cy="110" r="7" fill="#0284c7"/><line x1="295" y1="100" x2="295" y2="80" stroke="#0284c7" stroke-width="2"/>
    <circle cx="325" cy="110" r="9" fill="#ef4444"/><text x="325" y="113" fill="#ffffff" font-size="7" font-weight="bold" text-anchor="middle">X</text>
    <circle cx="355" cy="110" r="7" fill="#0284c7"/>
    <!-- Uap sedikit di atas -->
    <circle cx="240" cy="70" r="5" fill="#38bdf8"/><circle cx="300" cy="65" r="5" fill="#38bdf8"/>
    <text x="297" y="195" fill="#991b1b" font-size="8" text-anchor="middle">Partikel merah menghalangi penguapan</text>

    <!-- Keterangan bawah -->
    <rect x="20" y="218" width="365" height="45" rx="5" fill="#f1f5f9" stroke="#cbd5e1"/>
    <text x="202" y="235" fill="#1e293b" font-size="8.5" font-weight="bold" text-anchor="middle">Mekanisme Penghalangan Permukaan (Steric Barrier):</text>
    <text x="202" y="252" fill="#64748b" font-size="8" text-anchor="middle">Keberadaan zat terlarut non-volatile menurunkan laju evaporasi netto pelarut.</text>
  </g>

  <!-- PANEL KANAN: Grafik Hukum Raoult (x=435..745) -->
  <g transform="translate(435, 50)">
    <rect x="0" y="0" width="310" height="275" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="155" y="22" fill="#1e293b" font-size="11" font-weight="bold" text-anchor="middle">Grafik Linear Hukum Raoult (P vs X_pelarut)</text>

    <!-- Sumbu Koordinat -->
    <line x1="45" y1="215" x2="280" y2="215" stroke="#64748b" stroke-width="2"/>
    <line x1="45" y1="215" x2="45" y2="45" stroke="#64748b" stroke-width="2"/>
    <line x1="265" y1="215" x2="265" y2="45" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2 2"/>
    <text x="155" y="232" fill="#64748b" font-size="9" font-weight="bold" text-anchor="middle">Fraksi Mol Pelarut (X_p)</text>
    <text x="40" y="40" fill="#64748b" font-size="9" font-weight="bold" text-anchor="end">Tekanan (P)</text>

    <!-- Label Sumbu X: 0 s.d 1.0 -->
    <text x="45" y="228" fill="#64748b" font-size="8.5" text-anchor="middle">0.0</text>
    <text x="265" y="228" fill="#64748b" font-size="8.5" text-anchor="middle">1.0</text>

    <!-- Garis Linear Raoult P = X_p * P° -->
    <line x1="45" y1="215" x2="265" y2="60" stroke="#2563eb" stroke-width="3"/>
    <circle cx="265" cy="60" r="5" fill="#1e40af"/>
    <text x="270" y="55" fill="#1e40af" font-size="10" font-weight="bold">P° (Murni)</text>

    <!-- Garis Penurunan Tekanan Uap ΔP pada titik tertentu (misal X_p = 0.7) -->
    <line x1="199" y1="215" x2="199" y2="106" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3 3"/>
    <circle cx="199" cy="106" r="4.5" fill="#dc2626"/>
    <text x="199" y="100" fill="#dc2626" font-size="8.5" font-weight="bold" text-anchor="middle">P_larutan</text>

    <!-- Panah Penurunan ΔP -->
    <line x1="265" y1="60" x2="199" y2="60" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2 2"/>
    <line x1="235" y1="60" x2="235" y2="82" stroke="#dc2626" stroke-width="2"/>
    <text x="240" y="74" fill="#dc2626" font-size="8.5" font-weight="bold">ΔP</text>

    <!-- Rumus Kotak Bawah -->
    <rect x="25" y="242" width="260" height="24" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
    <text x="155" y="258" fill="#1e40af" font-size="9" font-weight="bold" text-anchor="middle">P = X_p · P°   |   ΔP = X_t · P°</text>
  </g>
</svg>

> [!WARNING]
> ### ⚠️ Peringatan Miskonsepsi Siswa SMA: Tekanan Uap Larutan (P) vs Penurunan Tekanan Uap (ΔP)
> Kesalahan paling fatal pada soal Hukum Raoult adalah salah memasukkan fraksi mol!
> - Gunakan $X_p$ (fraksi mol **PELARUT**) untuk mencari **Tekanan Uap Larutan**: $P = X_p \cdot P^\circ$.
> - Gunakan $X_t$ (fraksi mol **TERLARUT**) untuk mencari **Penurunan Tekanan Uap**: $\\Delta P = X_t \cdot P^\circ$.
> Jangan tertukar, karena $P$ adalah tekanan uap yang tersisa di atas cairan, sedangkan $\\Delta P$ adalah besar penurunannya ($P = P^\circ - \\Delta P$)!`,
        keyFormulas: [
          { name: 'Hukum Raoult Pelarut', formula: 'P = X_p \\cdot P^\\circ' },
          { name: 'Rumus Penurunan Tekanan Uap Jenuh', formula: '\\Delta P = X_t \\cdot P^\\circ = (P^\\circ - P)' },
          { name: 'Fraksi Mol Zat Terlarut', formula: 'X_t = \\frac{n_t}{n_t + n_p}' },
          { name: 'Fraksi Mol Pelarut', formula: 'X_p = \\frac{n_p}{n_t + n_p} = 1 - X_t' },
        ],
      },
      {
        tag: 'kenaikan-titik-didih-dan-penurunan-titik-beku',
        tags: ['kenaikan-titik-didih', 'penurunan-titik-beku', 'konstanta-ebulioskopi-kb', 'konstanta-krioskopi-kf', 'diagram-fasa-pt'],
        title: 'Konsep Inti 2: Kenaikan Titik Didih (ΔTb), Penurunan Titik Beku (ΔTf), dan Analisis Diagram Fasa P-T',
        summary: 'Formulasi matematis ebulioskopi dan krioskopi, konstanta pelarut Kb dan Kf, serta pergeseran kurva kesetimbangan pada Diagram Fasa P-T air.',
        content: `Ketika tekanan uap suatu cairan turun akibat penambahan zat terlarut non-volatile, kurva kesetimbangan cair-gas dan cair-padat pada diagram fasa mengalami pergeseran posisi yang signifikan, memicu terjadinya **kenaikan titik didih (*ebulioskopi*)** dan **penurunan titik beku (*krioskopi*)**.

### 1. Definisi Fisika Titik Didih & Titik Beku
- **Titik Didih Normal ($T_b$):** Temperatur di mana tekanan uap jenuh cairan tepat sama dengan tekanan atmosfer eksternal ($1\\text{ atm} = 760\\text{ mmHg}$).
  - Karena penambahan zat terlarut menurunkan tekanan uap cairan pada setiap temperatur ($P < P^\\circ$), maka pada suhu $100^\\circ\\text{C}$ tekanan uap larutan air belum mencapai $1\\text{ atm}$.
  - Cairan harus dipanaskan hingga temperatur yang lebih tinggi ($T_b > 100^\\circ\\text{C}$) agar tekanan uapnya mencapai $1\\text{ atm}$. Kenaikan ini dinamakan **kenaikan titik didih ($\\Delta T_b$)**.
- **Titik Beku Normal ($T_f$):** Temperatur di mana fasa padat murni dan fasa cair berada dalam kesetimbangan dinamis (memiliki tekanan uap yang sama persis).
  - Penurunan tekanan uap fasa cair menyebabkan perpotongan antara kurva sublimasi padatan dan kurva penguapan cairan bergeser ke temperatur yang lebih rendah ($T_f < 0^\\circ\\text{C}$). Penurunan ini dinamakan **penurunan titik beku ($\\Delta T_f$)**.

---

### 2. Formulasi Matematis $\\Delta T_b$ dan $\\Delta T_f$
Untuk larutan encer non-elektrolit, besarnya kenaikan titik didih dan penurunan titik beku berbanding lurus secara linear dengan nilai **molalitas ($m$)** zat terlarut:

$$\\mathbf{\\Delta T_b = m \\cdot K_b \\qquad \\Delta T_b = \\frac{\\text{massa}}{M_r} \\times \\frac{1000}{P} \\times K_b}$$
$$T_b = T_b^\\circ + \\Delta T_b$$

$$\\mathbf{\\Delta T_f = m \\cdot K_f \\qquad \\Delta T_f = \\frac{\\text{massa}}{M_r} \\times \\frac{1000}{P} \\times K_f}$$
$$T_f = T_f^\\circ - \\Delta T_f$$

di mana:
- $\\Delta T_b$ = kenaikan titik didih ($^\\circ\\text{C}$).
- $\\Delta T_f$ = penurunan titik beku ($^\\circ\\text{C}$).
- $T_b^\\circ$ dan $T_f^\\circ$ = titik didih dan titik beku pelarut murni (untuk air: $T_b^\\circ = 100^\\circ\\text{C}$, $T_f^\\circ = 0^\\circ\\text{C}$).
- $K_b$ = tetapan kenaikan titik didih molal / konstanta ebulioskopi ($^\\circ\\text{C/m}$).
- $K_f$ = tetapan penurunan titik beku molal / konstanta krioskopi ($^\\circ\\text{C/m}$).
- $P$ = massa pelarut dalam satuan gram.

---

### 3. Tabel Konstanta Termodinamika Pelarut Umum

| Pelarut | Titik Beku Murni ($T_f^\\circ$) | $K_f$ ($^\\circ\\text{C/m}$) | Titik Didih Murni ($T_b^\\circ$) | $K_b$ ($^\\circ\\text{C/m}$) |
| :--- | :---: | :---: | :---: | :---: |
| **Air ($\\ce{H2O}$)** | $0.0^\\circ\\text{C}$ | **$1.86$** | $100.0^\\circ\\text{C}$ | **$0.52$** |
| **Benzena ($\\ce{C6H6}$)** | $5.5^\\circ\\text{C}$ | **$5.12$** | $80.1^\\circ\\text{C}$ | **$2.53$** |
| **Kloroform ($\\ce{CHCl3}$)** | $-63.5^\\circ\\text{C}$ | **$4.68$** | $61.2^\\circ\\text{C}$ | **$3.63$** |
| **Asam Asetat ($\\ce{CH3COOH}$)** | $16.6^\\circ\\text{C}$ | **$3.90$** | $117.9^\\circ\\text{C}$ | **$3.07$** |
| **Kamper ($\\ce{C10H16O}$)** | $178.4^\\circ\\text{C}$ | **$40.0$** | $207.4^\\circ\\text{C}$ | **$5.61$** |

*Catatan Khusus:* Nilai $K_f$ kamper yang sangat tinggi ($40.0^\\circ\\text{C/m}$) dimanfaatkan dalam metode Rast untuk penentuan massa molar ($M_r$) zat organik secara sangat akurat dengan termometer biasa.

---

### 4. Diagram Fasa P-T Lengkap (Air Murni vs Larutan)

<svg viewBox="0 0 760 340" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <!-- Header -->
  <rect x="0" y="0" width="760" height="42" fill="#0f172a" rx="10"/>
  <text x="380" y="26" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">DIAGRAM FASA P-T AIR MURNI VS LARUTAN (EFEK ΔP, ΔTb, DAN ΔTf)</text>

  <!-- Area Diagram (x=40..720, y=55..315) -->
  <g transform="translate(40, 55)">
    <!-- Sumbu Koordinat -->
    <line x1="60" y1="230" x2="650" y2="230" stroke="#334155" stroke-width="2"/>
    <line x1="60" y1="230" x2="60" y2="20" stroke="#334155" stroke-width="2"/>
    <text x="655" y="234" fill="#334155" font-size="10" font-weight="bold">Temperatur T (°C)</text>
    <text x="55" y="15" fill="#334155" font-size="10" font-weight="bold" text-anchor="end">Tekanan P (atm)</text>

    <!-- Garis Tekanan 1 atm -->
    <line x1="60" y1="90" x2="640" y2="90" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
    <text x="52" y="94" fill="#64748b" font-size="9" font-weight="bold" text-anchor="end">1 atm</text>

    <!-- KURVA PELARUT MURNI (Biru) -->
    <!-- Kurva Sublimasi Padat-Gas: dari x=60,y=230 ke x=220,y=150 -->
    <path d="M 60 220 Q 150 200, 220 150" fill="none" stroke="#0284c7" stroke-width="2.5"/>
    <!-- Kurva Peleburan Padat-Cair: dari x=220,y=150 ke x=210,y=25 (miring kiri khas air) -->
    <path d="M 220 150 L 200 25" fill="none" stroke="#0284c7" stroke-width="2.5"/>
    <!-- Kurva Penguapan Cair-Gas: dari x=220,y=150 ke x=460,y=90 lalu naik ke x=590,y=30 -->
    <path d="M 220 150 Q 340 120, 460 90 T 600 35" fill="none" stroke="#0284c7" stroke-width="2.5"/>
    <circle cx="220" cy="150" r="4" fill="#0284c7"/>
    <text x="210" y="165" fill="#0284c7" font-size="8.5" font-weight="bold" text-anchor="end">Titik Tripel (Murni)</text>

    <!-- Titik Didih Murni Tb° = 100°C (x=460, y=90) -->
    <circle cx="460" cy="90" r="5" fill="#0284c7"/>
    <line x1="460" y1="90" x2="460" y2="230" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3 3"/>
    <text x="460" y="244" fill="#0284c7" font-size="9.5" font-weight="bold" text-anchor="middle">Tb° = 100°C</text>

    <!-- Titik Beku Murni Tf° = 0°C (perpotongan kurva cair-padat dg 1 atm, x=206, y=90) -->
    <circle cx="206" cy="90" r="5" fill="#0284c7"/>
    <line x1="206" y1="90" x2="206" y2="230" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3 3"/>
    <text x="206" y="244" fill="#0284c7" font-size="9.5" font-weight="bold" text-anchor="middle">Tf° = 0°C</text>

    <!-- KURVA LARUTAN (Merah Putus-putus) -->
    <!-- Kurva Penguapan Larutan (Lebih rendah): dari tripel baru x=175,y=170 ke x=530,y=90 -->
    <path d="M 175 170 Q 350 140, 530 90 T 640 45" fill="none" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="5 3"/>
    <!-- Kurva Peleburan Larutan: dari x=175,y=170 ke x=155,y=25 -->
    <path d="M 175 170 L 155 25" fill="none" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="5 3"/>

    <!-- Titik Didih Larutan Tb (x=530, y=90) -->
    <circle cx="530" cy="90" r="5" fill="#dc2626"/>
    <line x1="530" y1="90" x2="530" y2="230" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 3"/>
    <text x="530" y="244" fill="#dc2626" font-size="9.5" font-weight="bold" text-anchor="middle">Tb (Larutan)</text>

    <!-- Titik Beku Larutan Tf (x=161, y=90) -->
    <circle cx="161" cy="90" r="5" fill="#dc2626"/>
    <line x1="161" y1="90" x2="161" y2="230" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 3"/>
    <text x="161" y="244" fill="#dc2626" font-size="9.5" font-weight="bold" text-anchor="middle">Tf (Larutan)</text>

    <!-- Arsiran / Panah Delta Tb dan Delta Tf -->
    <!-- Delta Tb (x=460 ke x=530) -->
    <line x1="460" y1="120" x2="530" y2="120" stroke="#dc2626" stroke-width="2.5"/>
    <polygon points="530,120 523,116 523,124" fill="#dc2626"/>
    <text x="495" y="114" fill="#dc2626" font-size="9" font-weight="bold" text-anchor="middle">ΔTb &gt; 0</text>

    <!-- Delta Tf (x=206 ke x=161) -->
    <line x1="206" y1="120" x2="161" y2="120" stroke="#dc2626" stroke-width="2.5"/>
    <polygon points="161,120 168,116 168,124" fill="#dc2626"/>
    <text x="183.5" y="114" fill="#dc2626" font-size="9" font-weight="bold" text-anchor="middle">ΔTf &gt; 0</text>

    <!-- Label Fasa -->
    <text x="110" y="60" fill="#475569" font-size="12" font-weight="bold">PADAT (ES)</text>
    <text x="320" y="60" fill="#0284c7" font-size="12" font-weight="bold">CAIR (AIR)</text>
    <text x="560" y="160" fill="#d97706" font-size="12" font-weight="bold">GAS (UAP)</text>

    <!-- Legenda Sudut Kanan Atas -->
    <rect x="420" y="0" width="220" height="42" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
    <line x1="430" y1="14" x2="460" y2="14" stroke="#0284c7" stroke-width="2.5"/>
    <text x="468" y="17" fill="#0284c7" font-size="8.5" font-weight="bold">Pelarut Murni</text>
    <line x1="430" y1="30" x2="460" y2="30" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4 2"/>
    <text x="468" y="33" fill="#dc2626" font-size="8.5" font-weight="bold">Larutan (ΔP, ΔTb, ΔTf)</text>
  </g>
</svg>

> [!WARNING]
> ### ⚠️ Peringatan Miskonsepsi Siswa SMA: Tanda Operasi Titik Didih vs Titik Beku
> Jangan sampai terbalik dalam mengoperasikan selisih koligatif pada pelarut air:
> - **Titik didih NAIK (DITAMBAH):** $T_b = 100^\circ\\text{C} + \\Delta T_b$ (selalu $> 100^\circ\\text{C}$).
> - **Titik beku TURUN (DIKURANG):** $T_f = 0^\circ\\text{C} - \\Delta T_f = -\\Delta T_f$ (selalu bernilai negatif di bawah $0^\circ\\text{C}$).
> Banyak siswa salah menuliskan titik beku larutan sebagai $+0.74^\circ\\text{C}$, padahal seharusnya $-0.74^\circ\\text{C}$!`,
        keyFormulas: [
          { name: 'Kenaikan Titik Didih Non-Elektrolit', formula: '\\Delta T_b = m \\cdot K_b = \\frac{\\text{massa}}{M_r} \\times \\frac{1000}{P} \\times K_b' },
          { name: 'Titik Didih Larutan', formula: 'T_b = T_b^\\circ + \\Delta T_b' },
          { name: 'Penurunan Titik Beku Non-Elektrolit', formula: '\\Delta T_f = m \\cdot K_f = \\frac{\\text{massa}}{M_r} \\times \\frac{1000}{P} \\times K_f' },
          { name: 'Titik Beku Larutan', formula: 'T_f = T_f^\\circ - \\Delta T_f' },
        ],
      },
      {
        tag: 'tekanan-osmotik-hukum-van-t-hoff-dan-osmosis-balik',
        tags: ['tekanan-osmotik', 'persamaan-van-t-hoff', 'membran-semipermeabel', 'osmosis-balik-ro', 'isotonik-hipotonik-hipertonik'],
        title: 'Konsep Inti 3: Tekanan Osmotik (Π), Persamaan van t Hoff, dan Teknologi Osmosis Balik (Reverse Osmosis)',
        summary: 'Mekanisme transpor pelarut menembus membran semipermeabel, formulasi gas analog van t Hoff, tonisitas biologis sel, dan desalinasi air laut via RO.',
        content: `**Osmosis** adalah peristiwa difusi spontan molekul pelarut (seperti air) menembus membran semipermeabel dari larutan yang konsentrasinya lebih encer (potensial kimia pelarut lebih tinggi) menuju larutan yang lebih pekat (potensial kimia pelarut lebih rendah).

### 1. Definisi & Formulasi Tekanan Osmotik ($\\Pi$)
**Tekanan osmotik ($\\Pi$)** didefinisikan sebagai tekanan hidrostatis eksternal minimum yang harus diberikan pada permukaan larutan pekat untuk **menghentikan aliran netto osmosis** molekul pelarut menembus membran semipermeabel.

Pada tahun 1886, Jacobus Henricus van 't Hoff menemukan analogi matematis yang luar biasa antara sifat partikel terlarut dalam larutan encer dengan partikel molekul gas ideal:
> **Hukum Tekanan Osmotik van 't Hoff:**
> Partikel zat terlarut di dalam larutan encer berperilaku analog dengan partikel gas ideal yang mengisi volume yang sama:
> $$\\Pi \\cdot V = n \\cdot R \\cdot T$$
> $$\\mathbf{\\Pi = M \\cdot R \\cdot T = \\frac{\\text{massa}}{M_r} \\times \\frac{1000}{V \\text{ (mL)}} \\times R \\cdot T}$$

di mana:
- $\\Pi$ = tekanan osmotik (satuan $\\text{atm}$).
- $M$ = molaritas larutan ($\\text{mol/L}$).
- $R$ = tetapan gas universal ($0.08206\\text{ L}\\cdot\\text{atm/(mol}\\cdot\\text{K)}$).
- $T$ = temperatur mutlak Kelvin ($T = t^\\circ\\text{C} + 273.15$).

---

### 2. Tonisitas Larutan & Dampak Fisiologis pada Sel Darah
Berdasarkan perbandingan tekanan osmotik antara dua cairan biologis:
1. **Larutan Isotonik ($\\Pi_1 = \\Pi_2$):** Memiliki tekanan osmotik yang sama. Cairan infus medis standar ($\\ce{NaCl } 0.9\\%$ massa atau glukosa $5.0\\%$) dibuat isotonik dengan plasma darah manusia ($\\Pi \\approx 7.7\\text{ atm}$) agar sel darah merah mempertahankan bentuk alaminya (*bikonkaf*).
2. **Larutan Hipotonik ($\\Pi_{\\text{luar}} < \\Pi_{\\text{sel}}$):** Cairan luar lebih encer. Air akan berosmosis masuk ke dalam sel darah merah, menyebabkannya membengkak dan akhirnya pecah (**hemolisis / lisis**).
3. **Larutan Hipertonik ($\\Pi_{\\text{luar}} > \\Pi_{\\text{sel}}$):** Cairan luar lebih pekat (misal air garam pekat). Air dari dalam sel darah merah akan tersedot keluar, menyebabkan sel mengerut dan kisut (**krenasi**).

---

### 3. Teknologi Osmosis Balik (*Reverse Osmosis* / RO)
Bila pada fasa larutan pekat (seperti air laut) diberikan tekanan mekanis eksternal ($P_{\\text{eksternal}}$) yang **melampaui tekanan osmotiknya ($P_{\\text{eksternal}} > \\Pi$)**:
- Arah aliran spontan osmosis akan berbalik total!
- Molekul air murni dipaksa menembus membran semipermeabel polimer berpori nano ke arah fasa murni, sementara ion-ion garam ($\\ce{Na+, Cl-, Mg^2+, SO4^2-}$) tertolak dan tertinggal di fasa limbah pekat (*brine*).
- **Aplikasi Global:** Desalinasi air laut menjadi air minum segar di negara-negara Timur Tengah dan kapal laut, serta pemurnian air minum komersial berstandar farmasi.

---

### 4. Diagram Infografis Osmosis, Kesetimbangan, dan Osmosis Balik (RO)

<svg viewBox="0 0 760 340" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <!-- Header -->
  <rect x="0" y="0" width="760" height="42" fill="#0f172a" rx="10"/>
  <text x="380" y="26" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">PRINSIP TEKANAN OSMOTIK (Π) & REVERSE OSMOSIS (DESALINASI AIR LAUT)</text>

  <!-- PANEL KIRI: Tabung U Osmosis Normal (x=15..375) -->
  <g transform="translate(15, 50)">
    <rect x="0" y="0" width="360" height="275" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="180" y="22" fill="#1e293b" font-size="11" font-weight="bold" text-anchor="middle">1. Kesetimbangan Osmosis Normal (Aliran Spontan)</text>

    <!-- Tabung U Kiri -->
    <!-- Kaki Kiri: Air Murni -->
    <rect x="45" y="45" width="55" height="155" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>
    <rect x="47" y="110" width="51" height="90" fill="#e0f2fe"/>
    <text x="72" y="70" fill="#0284c7" font-size="8.5" font-weight="bold" text-anchor="middle">Air Murni</text>

    <!-- Kaki Kanan: Larutan Gula / Garam (Naik setinggi h) -->
    <rect x="180" y="45" width="55" height="155" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>
    <rect x="182" y="70" width="51" height="130" fill="#fef2f2"/>
    <text x="207" y="60" fill="#dc2626" font-size="8.5" font-weight="bold" text-anchor="middle">Larutan</text>

    <!-- Penghubung Bawah & Membran Semipermeabel di Tengah (x=137) -->
    <rect x="45" y="170" width="190" height="30" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>
    <line x1="140" y1="170" x2="140" y2="200" stroke="#f59e0b" stroke-width="4" stroke-dasharray="4 2"/>
    <text x="140" y="215" fill="#b45309" font-size="8" font-weight="bold" text-anchor="middle">Membran Semipermeabel</text>

    <!-- Panah Aliran Spontan Air ke Kanan -->
    <line x1="110" y1="185" x2="170" y2="185" stroke="#0284c7" stroke-width="2.5"/>
    <polygon points="170,185 163,181 163,189" fill="#0284c7"/>

    <!-- Selisih Ketinggian Hidrostatis h = Tekanan Osmotik Π -->
    <line x1="102" y1="110" x2="245" y2="110" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2 2"/>
    <line x1="240" y1="70" x2="240" y2="110" stroke="#dc2626" stroke-width="2"/>
    <text x="250" y="93" fill="#dc2626" font-size="9" font-weight="bold">h (Π = ρgh)</text>

    <!-- Kotak Deskripsi Bawah -->
    <rect x="20" y="230" width="320" height="32" rx="4" fill="#eff6ff" stroke="#bfdbfe"/>
    <text x="180" y="250" fill="#1e40af" font-size="8.5" font-weight="bold" text-anchor="middle">Air mengalir spontan hingga tekanan hidrostatis = Π</text>
  </g>

  <!-- PANEL KANAN: Reverse Osmosis (x=390..745) -->
  <g transform="translate(390, 50)">
    <rect x="0" y="0" width="355" height="275" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="177" y="22" fill="#1e293b" font-size="11" font-weight="bold" text-anchor="middle">2. Desalinasi Osmosis Balik (P_luar &gt; Π)</text>

    <!-- Bejana Reaktor RO -->
    <rect x="30" y="55" width="295" height="145" rx="6" fill="#f8fafc" stroke="#334155" stroke-width="2"/>

    <!-- Membran RO di Tengah (x=175) -->
    <line x1="175" y1="55" x2="175" y2="200" stroke="#f59e0b" stroke-width="5" stroke-dasharray="5 2"/>
    <text x="175" y="48" fill="#b45309" font-size="8.5" font-weight="bold" text-anchor="middle">Membran RO Nano</text>

    <!-- Sisi Kiri: Air Laut di Bawah Tekanan Piston Tinggi -->
    <rect x="32" y="85" width="140" height="113" fill="#fef2f2"/>
    <text x="100" y="125" fill="#991b1b" font-size="10" font-weight="bold" text-anchor="middle">AIR LAUT (PEKAT)</text>
    <text x="100" y="140" fill="#b91c1c" font-size="8" text-anchor="middle">Na⁺, Cl⁻, Mg²⁺, SO₄²⁻</text>
    <!-- Piston Tekanan Tinggi di Kiri Atas -->
    <rect x="32" y="65" width="140" height="20" fill="#475569"/>
    <line x1="102" y1="42" x2="102" y2="65" stroke="#dc2626" stroke-width="3"/>
    <polygon points="102,65 97,55 107,55" fill="#dc2626"/>
    <text x="102" y="38" fill="#dc2626" font-size="9" font-weight="bold" text-anchor="middle">P_eksternal &gt; Π</text>

    <!-- Sisi Kanan: Air Tawar Hasil Desalinasi -->
    <rect x="178" y="110" width="145" height="88" fill="#e0f2fe"/>
    <text x="250" y="135" fill="#0369a1" font-size="10" font-weight="bold" text-anchor="middle">AIR TAWAR MURNI</text>
    <text x="250" y="150" fill="#0284c7" font-size="8" text-anchor="middle">(Bebas Garam Mineral)</text>

    <!-- Panah Aliran Balik Air Murni Menembus Membran ke Kanan -->
    <line x1="150" y1="165" x2="200" y2="165" stroke="#0284c7" stroke-width="3"/>
    <polygon points="200,165 192,160 192,170" fill="#0284c7"/>
    <text x="175" y="180" fill="#0284c7" font-size="8" font-weight="bold" text-anchor="middle">H₂O Murni Dipaksa Lewat</text>

    <!-- Kotak Deskripsi Bawah -->
    <rect x="25" y="215" width="305" height="48" rx="4" fill="#f0fdf4" stroke="#86efac"/>
    <text x="177" y="233" fill="#166534" font-size="8.5" font-weight="bold" text-anchor="middle">Aplikasi Global Desalinasi:</text>
    <text x="177" y="250" fill="#15803d" font-size="8" text-anchor="middle">Tekanan 50-80 atm menghasilkan air minum dari air laut.</text>
  </g>
</svg>

> [!WARNING]
> ### ⚠️ Peringatan Miskonsepsi Siswa SMA: Arah Aliran Osmosis Alami vs Osmosis Balik (RO)
> Pada **osmosis alami**, pelarut murni bergerak spontan dari larutan **encer menuju pekat** untuk menyamakan konsentrasi (tanpa energi luar).
> Sebaliknya pada **Reverse Osmosis (RO)**, arah aliran dipaksa **berbalik**: air murni mengalir dari larutan **pekat (air laut) menuju encer (air tawar)** karena ditekan oleh pompa mekanik bertekanan raksasa yang melampaui tekanan osmotiknya ($P_{\\text{pompa}} > \\Pi$)!`,
        keyFormulas: [
          { name: 'Persamaan Tekanan Osmotik van t Hoff', formula: '\\Pi = M \\cdot R \\cdot T' },
          { name: 'Rumus Tekanan Osmotik dengan Massa Terlarut', formula: '\\Pi = \\frac{\\text{massa}}{M_r} \\times \\frac{1000}{V \\text{ (mL)}} \\times R \\cdot T' },
          { name: 'Kondisi Osmosis Balik (RO)', formula: 'P_{\\text{eksternal}} > \\Pi \\implies \\text{Aliran Terbalik (Desalinasi Air Murni)}' },
          { name: 'Kondisi Isotonik', formula: '\\Pi_1 = \\Pi_2 \\implies \\text{Tidak Ada Aliran Netto (Sel Stabil)}' },
        ],
      },
      {
        tag: 'sifat-koligatif-larutan-elektrolit-dan-faktor-van-t-hoff',
        tags: ['faktor-van-t-hoff', 'larutan-elektrolit', 'derajat-ionisasi-alpha', 'disosiasi-ionik', 'pasangan-ion-debye-huckel'],
        title: 'Konsep Inti 4: Perilaku Koligatif Larutan Elektrolit & Formulasi Faktor van t Hoff (i)',
        summary: 'Efek multiplikasi jumlah partikel akibat ionisasi, derivasi aljabar i = 1 + (n - 1)α, modifikasi rumus koligatif, dan fenomena pasangan ion.',
        content: `Bila $1\\text{ mol}$ glukosa (zat non-elektrolit) dilarutkan ke dalam air, di dalam larutan tetap terdapat $1\\text{ mol}$ molekul glukosa bebas. Namun, bila $1\\text{ mol } \\ce{NaCl}$ dilarutkan, senyawa ionik tersebut terdisosiasi sempurna menghasilkan $1\\text{ mol } \\ce{Na+}$ dan $1\\text{ mol } \\ce{Cl-}$, sehingga menghasilkan **$2\\text{ mol}$ partikel ion total**!

Karena sifat koligatif semata-mata bergantung pada jumlah partikel, larutan $\\ce{NaCl } 0.1\\text{ m}$ akan memperlihatkan penurunan titik beku hampir **dua kali lipat** lebih besar dibandingkan larutan glukosa $0.1\\text{ m}$.

---

### 1. Derivasi Aljabar Faktor van 't Hoff ($i$)
Untuk mengoreksi multiplikasi jumlah partikel pada larutan elektrolit, van 't Hoff memperkenalkan faktor koreksi $i$.

Misalkan suatu elektrolit $A_x B_y$ dilarutkan dengan konsentrasi awal $m$ dan terionisasi dengan derajat ionisasi $\\alpha$ ($0 \\le \\alpha \\le 1$):
$$\\ce{A_x B_y -> x A^{y+} + y B^{x-}} \\quad (\\text{jumlah ion per rumus: } n = x + y)$$

Berdasarkan tabel Mula-mula, Bereaksi (Terurai), Sisa:
- **Mula-mula:** Elektrolit $= m$, Ion $= 0$.
- **Bereaksi:** Terurai $= -\\alpha \\cdot m$, Terbentuk ion $= +n \\cdot \\alpha \\cdot m$.
- **Setimbang/Sisa:**
  $$\\text{Molekul tersisa} = m - \\alpha m = m(1 - \\alpha)$$
  $$\\text{Ion terbentuk} = n \\alpha m$$
  $$\\text{Jumlah partikel total} = m(1 - \\alpha) + n \\alpha m = m [1 + (n - 1)\\alpha]$$

Maka rasio pertambahan partikel, yang didefinisikan sebagai **faktor van 't Hoff ($i$)**, adalah:
$$\\mathbf{i = \\frac{\\text{Partikel Total}}{\\text{Partikel Mula-mula}} = 1 + (n - 1)\\alpha}$$

di mana:
- $n$ = jumlah ion yang dihasilkan dari 1 satuan rumus elektrolit:
  - Biner ($1:1$, misal $\\ce{NaCl, KCl, HCl}$): $n = 2$.
  - Terner ($1:2$ atau $2:1$, misal $\\ce{CaCl2, Na2SO4, H2SO4}$): $n = 3$.
  - Kuarterner ($1:3$ atau $3:1$, misal $\\ce{AlCl3, Na3PO4}$): $n = 4$.
- $\\alpha$ = derajat ionisasi ($0$ untuk non-elektrolit, $0 < \\alpha < 1$ untuk elektrolit lemah, $\\alpha = 1$ untuk elektrolit kuat ideal).

---

### 2. Modifikasi Rumus Sifat Koligatif untuk Elektrolit
Seluruh rumus sifat koligatif dimodifikasi dengan mengalikan faktor van 't Hoff ($i$):

1. **Penurunan Tekanan Uap Jenuh:**
   $$\\Delta P = \\frac{n_t \\cdot i}{n_p + (n_t \\cdot i)} \\cdot P^\\circ$$
2. **Kenaikan Titik Didih:**
   $$\\mathbf{\\Delta T_b = m \\cdot K_b \\cdot i}$$
3. **Penurunan Titik Beku:**
   $$\\mathbf{\\Delta T_f = m \\cdot K_f \\cdot i}$$
4. **Tekanan Osmotik:**
   $$\\mathbf{\\Pi = M \\cdot R \\cdot T \\cdot i}$$

---

### 3. Mengapa $i_{\\text{eksperimen}} < i_{\\text{teoretis}}$? Teori Pasangan Ion Debye-Hückel
Pada larutan elektrolit nyata dengan konsentrasi moderat, nilai $i$ yang terukur di laboratorium sering kali sedikit lebih kecil daripada nilai teoretisnya (misalnya untuk $\\ce{NaCl } 0.1\\text{ m}$, $i_{\\text{eks}} \\approx 1.87$, bukan $2.00$ bulat).

- **Penjelasan Fisika:** Menurut teori interaksi elektrostatik Debye-Hückel, ion-ion berlawanan muatan ($\\ce{Na+}$ dan $\\ce{Cl-}$) saling tarik-menarik membentuk **pasangan ion sesaat (*ion pairs*)** yang bergerak bersama-sama sebagai satu kesatuan partikel efektif tunggal.
- Pembentukan pasangan ion ini mengurangi jumlah partikel independen bebas di dalam larutan sehingga efek koligatif efektif sedikit berkurang dari nilai idealnya. Nilai $i$ baru mendekati nilai teoretis bulat hanya pada kondisi **pengenceran tak hingga (*infinite dilution*, $m \\to 0$)**.
        
---

### 4. Diagram Komparasi Partikel Elektrolit & Formasi Pasangan Ion (*Ion Pairs*)

<svg viewBox="0 0 760 340" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <!-- Header -->
  <rect x="0" y="0" width="760" height="42" fill="#0f172a" rx="10"/>
  <text x="380" y="26" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">KOMPARASI JUMLAH PARTIKEL DISOSIASI & TEORI PASANGAN ION DEBYE-HÜCKEL</text>

  <!-- PANEL KIRI: Komparasi 3 Beker Disosiasi (x=15..450) -->
  <g transform="translate(15, 50)">
    <rect x="0" y="0" width="440" height="275" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="220" y="22" fill="#1e293b" font-size="11" font-weight="bold" text-anchor="middle">Efek Multiplikasi Partikel: Non-Elektrolit vs Elektrolit</text>

    <!-- Beker 1: Glukosa (Non-elektrolit, i=1) -->
    <g transform="translate(15, 40)">
      <rect x="0" y="0" width="125" height="150" rx="6" fill="#ffffff" stroke="#64748b" stroke-width="1.5"/>
      <rect x="2" y="55" width="121" height="93" fill="#eff6ff" rx="4"/>
      <text x="62" y="20" fill="#1e40af" font-size="9" font-weight="bold" text-anchor="middle">Glukosa 0.1 m</text>
      <text x="62" y="34" fill="#64748b" font-size="8" text-anchor="middle">(Non-elektrolit, i=1)</text>
      <!-- 3 molekul glukosa utuh -->
      <circle cx="35" cy="80" r="10" fill="#3b82f6"/><text x="35" y="83" fill="#ffffff" font-size="7" font-weight="bold" text-anchor="middle">G</text>
      <circle cx="85" cy="95" r="10" fill="#3b82f6"/><text x="85" y="98" fill="#ffffff" font-size="7" font-weight="bold" text-anchor="middle">G</text>
      <circle cx="50" cy="125" r="10" fill="#3b82f6"/><text x="50" y="128" fill="#ffffff" font-size="7" font-weight="bold" text-anchor="middle">G</text>
      <!-- Label Koligatif -->
      <rect x="5" y="155" width="115" height="24" rx="3" fill="#dbeafe"/>
      <text x="62" y="171" fill="#1e40af" font-size="8" font-weight="bold" text-anchor="middle">ΔTf = 0.186°C (1×)</text>
    </g>

    <!-- Beker 2: NaCl (Elektrolit 1:1, i=2) -->
    <g transform="translate(155, 40)">
      <rect x="0" y="0" width="125" height="150" rx="6" fill="#ffffff" stroke="#64748b" stroke-width="1.5"/>
      <rect x="2" y="55" width="121" height="93" fill="#f0fdf4" rx="4"/>
      <text x="62" y="20" fill="#166534" font-size="9" font-weight="bold" text-anchor="middle">NaCl 0.1 m</text>
      <text x="62" y="34" fill="#64748b" font-size="8" text-anchor="middle">(Biner n=2, i≈2)</text>
      <!-- Ion Na+ dan Cl- terpisah -->
      <circle cx="30" cy="75" r="8" fill="#22c55e"/><text x="30" y="78" fill="#ffffff" font-size="6" font-weight="bold" text-anchor="middle">Na⁺</text>
      <circle cx="55" cy="85" r="9" fill="#15803d"/><text x="55" y="88" fill="#ffffff" font-size="6" font-weight="bold" text-anchor="middle">Cl⁻</text>
      <circle cx="95" cy="75" r="8" fill="#22c55e"/><text x="95" y="78" fill="#ffffff" font-size="6" font-weight="bold" text-anchor="middle">Na⁺</text>
      <circle cx="35" cy="120" r="9" fill="#15803d"/><text x="35" y="123" fill="#ffffff" font-size="6" font-weight="bold" text-anchor="middle">Cl⁻</text>
      <circle cx="75" cy="115" r="8" fill="#22c55e"/><text x="75" y="118" fill="#ffffff" font-size="6" font-weight="bold" text-anchor="middle">Na⁺</text>
      <circle cx="100" cy="125" r="9" fill="#15803d"/><text x="100" y="128" fill="#ffffff" font-size="6" font-weight="bold" text-anchor="middle">Cl⁻</text>
      <!-- Label Koligatif -->
      <rect x="5" y="155" width="115" height="24" rx="3" fill="#dcfce7"/>
      <text x="62" y="171" fill="#166534" font-size="8" font-weight="bold" text-anchor="middle">ΔTf = 0.370°C (2×)</text>
    </g>

    <!-- Beker 3: CaCl2 (Elektrolit 1:2, i=3) -->
    <g transform="translate(295, 40)">
      <rect x="0" y="0" width="130" height="150" rx="6" fill="#ffffff" stroke="#64748b" stroke-width="1.5"/>
      <rect x="2" y="55" width="126" height="93" fill="#fef2f2" rx="4"/>
      <text x="65" y="20" fill="#991b1b" font-size="9" font-weight="bold" text-anchor="middle">CaCl₂ 0.1 m</text>
      <text x="65" y="34" fill="#64748b" font-size="8" text-anchor="middle">(Terner n=3, i≈3)</text>
      <!-- Ion Ca2+ dan 2 Cl- -->
      <circle cx="35" cy="75" r="9" fill="#ef4444"/><text x="35" y="78" fill="#ffffff" font-size="5.5" font-weight="bold" text-anchor="middle">Ca²⁺</text>
      <circle cx="65" cy="80" r="7" fill="#b91c1c"/><text x="65" y="83" fill="#ffffff" font-size="5.5" font-weight="bold" text-anchor="middle">Cl⁻</text>
      <circle cx="95" cy="75" r="7" fill="#b91c1c"/><text x="95" y="78" fill="#ffffff" font-size="5.5" font-weight="bold" text-anchor="middle">Cl⁻</text>
      <circle cx="45" cy="115" r="9" fill="#ef4444"/><text x="45" y="118" fill="#ffffff" font-size="5.5" font-weight="bold" text-anchor="middle">Ca²⁺</text>
      <circle cx="80" cy="120" r="7" fill="#b91c1c"/><text x="80" y="123" fill="#ffffff" font-size="5.5" font-weight="bold" text-anchor="middle">Cl⁻</text>
      <circle cx="110" cy="115" r="7" fill="#b91c1c"/><text x="110" y="118" fill="#ffffff" font-size="5.5" font-weight="bold" text-anchor="middle">Cl⁻</text>
      <!-- Label Koligatif -->
      <rect x="5" y="155" width="120" height="24" rx="3" fill="#fee2e2"/>
      <text x="65" y="171" fill="#991b1b" font-size="8" font-weight="bold" text-anchor="middle">ΔTf = 0.558°C (3×)</text>
    </g>

    <!-- Ringkasan Bawah -->
    <rect x="15" y="230" width="410" height="35" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="220" y="252" fill="#1e293b" font-size="8.5" font-weight="bold" text-anchor="middle">Sifat Koligatif Semata-mata Berbanding Lurus dengan Jumlah Mol Partikel Bebas Total!</text>
  </g>

  <!-- PANEL KANAN: Teori Pasangan Ion (x=465..745) -->
  <g transform="translate(465, 50)">
    <rect x="0" y="0" width="280" height="275" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="140" y="22" fill="#1e293b" font-size="11" font-weight="bold" text-anchor="middle">Fenomena Pasangan Ion (Ion Pairing)</text>

    <!-- Kotak Ilustrasi Pasangan Ion -->
    <rect x="20" y="45" width="240" height="150" rx="6" fill="#ffffff" stroke="#e2e8f0"/>
    
    <!-- Pasangan Ion Terikat Sesaat -->
    <g transform="translate(70, 75)">
      <rect x="-15" y="-15" width="90" height="50" rx="20" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3 2"/>
      <circle cx="10" cy="10" r="14" fill="#3b82f6"/>
      <text x="10" y="14" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Na⁺</text>
      <circle cx="45" cy="10" r="16" fill="#ef4444"/>
      <text x="45" y="14" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Cl⁻</text>
      <text x="30" y="48" fill="#b45309" font-size="8" font-weight="bold" text-anchor="middle">Pasangan Ion [Na⁺···Cl⁻]</text>
    </g>

    <!-- Ion Bebas Lainnya -->
    <circle cx="50" cy="155" r="11" fill="#3b82f6"/><text x="50" y="158" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">Na⁺</text>
    <circle cx="210" cy="145" r="13" fill="#ef4444"/><text x="210" y="148" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">Cl⁻</text>

    <!-- Keterangan Fisika Bawah -->
    <rect x="15" y="205" width="250" height="60" rx="5" fill="#fef2f2" stroke="#fca5a5"/>
    <text x="140" y="222" fill="#991b1b" font-size="8.5" font-weight="bold" text-anchor="middle">Penyebab i_eksperimen &lt; i_teoretis:</text>
    <text x="140" y="238" fill="#b91c1c" font-size="8" text-anchor="middle">Tarik-menarik elektrostatik membentuk pasangan ion,</text>
    <text x="140" y="253" fill="#b91c1c" font-size="8" text-anchor="middle">mengurangi jumlah partikel kinetik independen!</text>
  </g>
</svg>

> [!WARNING]
> ### ⚠️ Peringatan Miskonsepsi Siswa SMA: Jangan Lupa Faktor van 't Hoff (i) pada Elektrolit!
> Setiap kali membaca soal sifat koligatif, langkah pertama adalah **CEK SIFAT ELEKTROLITNYA**:
> - Jika zat berupa non-elektrolit (glukosa, sukrosa, urea, alkohol), maka $i = 1$.
> - Jika zat berupa senyawa ionik atau asam-basa ($\\ce{NaCl, CaCl2, H2SO4, Ba(OH)2}$), **WAJIB kalikan dengan faktor van 't Hoff: $i = 1 + (n - 1)\\alpha$**!
> Melupakan faktor $i$ pada garam $\\ce{CaCl2}$ akan membuat jawaban Anda salah $3$ kali lipat!`,
        keyFormulas: [
          { name: 'Rumus Faktor van t Hoff', formula: 'i = 1 + (n - 1)\\alpha' },
          { name: 'Kenaikan Titik Didih Elektrolit', formula: '\\Delta T_b = m \\cdot K_b \\cdot i' },
          { name: 'Penurunan Titik Beku Elektrolit', formula: '\\Delta T_f = m \\cdot K_f \\cdot i' },
          { name: 'Tekanan Osmotik Elektrolit', formula: '\\Pi = M \\cdot R \\cdot T \\cdot i' },
          { name: 'Faktor van t Hoff Elektrolit Kuat Sempurna', formula: '\\alpha = 1 \\implies i = n' },
        ],
      },
      {
        tag: 'penentuan-massa-molar-dan-osmometri-makromolekul',
        tags: ['osmometri-membran', 'penentuan-massa-molar-mr', 'makromolekul-protein-polimer', 'persamaan-virial'],
        title: 'Konsep Inti 5: Penentuan Massa Molar Makromolekul & Analisis Osmometri Membran',
        summary: 'Komparasi kepekaan 4 sifat koligatif untuk determinasi Mr, keunggulan mutlak osmometri membran untuk polimer/protein, dan regresi persamaan virial.',
        content: `Salah satu aplikasi analitik paling penting dari sifat koligatif adalah penentuan **massa molar / massa molekul relatif ($M_r$)** dari senyawa yang baru diisolasi atau disintesis.

### 1. Komparasi Kepekaan 4 Sifat Koligatif untuk Makromolekul
Misalkan kita melarutkan $1.0\\text{ gram}$ suatu protein atau polimer sintetik dengan massa molar tinggi ($M_r = 50.000\\text{ g/mol}$) ke dalam $100\\text{ mL}$ ($0.10\\text{ kg}$) air pada suhu $25^\\circ\\text{C}$:
- Jumlah mol makromolekul:
  $$n = \\frac{1.0\\text{ g}}{50.000\\text{ g/mol}} = 2.0 \\times 10^{-5}\\text{ mol}$$
- Molalitas larutan:
  $$m = \\frac{2.0 \\times 10^{-5}\\text{ mol}}{0.10\\text{ kg}} = 2.0 \\times 10^{-4}\\text{ m}$$

Mari kita hitung respon dari masing-masing sifat koligatif:
1. **Penurunan Tekanan Uap ($\\Delta P$):**
   $$\\Delta P \\approx X_t \\cdot P^\\circ = \\left(\\frac{2.0 \\times 10^{-5}}{5.55}\\right) \\times 23.76\\text{ mmHg} \\approx \\mathbf{0.000085\\text{ mmHg}} \\quad (\\text{Mustahil diukur!})$$
2. **Kenaikan Titik Didih ($\\Delta T_b$):**
   $$\\Delta T_b = m \\cdot K_b = (2.0 \\times 10^{-4}) \\times 0.52 = \\mathbf{0.00010^\\circ\\text{C}} \\quad (\\text{Terlalu kecil; merusak protein!})$$
3. **Penurunan Titik Beku ($\\Delta T_f$):**
   $$\\Delta T_f = m \\cdot K_f = (2.0 \\times 10^{-4}) \\times 1.86 = \\mathbf{0.00037^\\circ\\text{C}} \\quad (\\text{Sangat sulit diukur akurat})$$
4. **Tekanan Osmotik ($\\Pi$):**
   $$\\Pi = M \\cdot R \\cdot T = (2.0 \\times 10^{-4}\\text{ mol/L}) \\times (0.08206) \\times (298.15) = \\mathbf{0.00489\\text{ atm}} = \\mathbf{3.72\\text{ mmHg}}$$
   Jika diukur sebagai kolom cairan air ($\\rho = 1.0\\text{ g/cm}^3$):
   $$h = 3.72\\text{ mmHg} \\times 13.6 \\approx \\mathbf{50.6\\text{ mm} = 5.06\\text{ cm H}_2\\text{O}!}$$

> **Kesimpulan Krusial:**
> Ketinggian $5\\text{ cm}$ cairan sangat mudah dan akurat dibaca menggunakan tabung kapiler! Oleh karena itu, **tekanan osmotik adalah satu-satunya sifat koligatif yang dapat digunakan untuk menentukan massa molar makromolekul, polimer, enzim, dan DNA**.

---

### 2. Metode Ekstrapolasi Virial Osmometri Membran
Larutan polimer nyata memperlihatkan deviasi dari sifat ideal karena ukuran rantai polimer yang sangat panjang. Untuk mendapatkan nilai massa molar rata-rata jumlah ($M_n$) yang akurat tanpa bias interaksi polimer-pelarut, digunakan **Persamaan Virial Tekanan Osmotik**:

$$\\frac{\\Pi}{C} = \\frac{R T}{M_n} + B C$$

di mana:
- $C$ = konsentrasi massa zat terlarut dalam $\\text{g/L}$ ($C = \\text{massa} / V$).
- $\\Pi / C$ = tekanan osmotik tereduksi (*reduced osmotic pressure*).
- $B$ = koefisien virial kedua (menggambarkan interaksi termodinamika polimer-pelarut).
- $M_n$ = massa molar rata-rata jumlah polimer ($\\text{g/mol}$).

Dengan mengukur nilai $\\Pi$ pada berbagai variasi konsentrasi encer ($C$), lalu membuat plot grafik regresi linear $\\frac{\\Pi}{C}$ terhadap $C$:
- Garis lurus diekstrapolasikan ke konsentrasi nol ($C \\to 0$).
- Nilai titik potong sumbu-Y (*intercept*) adalah:
  $$\\text{Intercept} = \\lim_{C \\to 0} \\left(\\frac{\\Pi}{C}\\right) = \\frac{R T}{M_n}$$
- Dari nilai *intercept* tersebut, massa molar $M_n$ dapat langsung dihitung secara presisi:
  $$\\mathbf{M_n = \\frac{R T}{\\text{Intercept}}}$$
        
---

### 3. Diagram Skematis Osmometer Membran & Plot Regresi Virial

<svg viewBox="0 0 760 340" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <!-- Header -->
  <rect x="0" y="0" width="760" height="42" fill="#0f172a" rx="10"/>
  <text x="380" y="26" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">OSMOMETRI MEMBRAN & METODE EKSTRAPOLASI VIRIAL PENENTUAN MASSA MOLAR POLIMER</text>

  <!-- PANEL KIRI: Desain Alat Osmometer (x=15..360) -->
  <g transform="translate(15, 50)">
    <rect x="0" y="0" width="345" height="275" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="172" y="22" fill="#1e293b" font-size="11" font-weight="bold" text-anchor="middle">Sel Osmometer Membran Statis</text>

    <!-- Bejana Luar (Pelarut Murni) -->
    <rect x="35" y="55" width="275" height="150" rx="6" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
    <text x="95" y="75" fill="#0369a1" font-size="8.5" font-weight="bold">Pelarut Murni</text>

    <!-- Sel Dalam (Larutan Polimer) + Tabung Kapiler Vertikal -->
    <rect x="135" y="90" width="130" height="100" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
    <text x="200" y="145" fill="#991b1b" font-size="8.5" font-weight="bold" text-anchor="middle">Larutan Polimer</text>

    <!-- Membran Semipermeabel di Dasar Sel Dalam (y=190) -->
    <line x1="135" y1="190" x2="265" y2="190" stroke="#f59e0b" stroke-width="4" stroke-dasharray="4 2"/>
    <text x="200" y="205" fill="#b45309" font-size="8" font-weight="bold" text-anchor="middle">Membran Semipermeabel</text>

    <!-- Tabung Kapiler Menjulang ke Atas -->
    <rect x="190" y="35" width="20" height="55" fill="#ffffff" stroke="#dc2626" stroke-width="1.5"/>
    <rect x="192" y="45" width="16" height="45" fill="#fca5a5"/>

    <!-- Ketinggian Selisih Meniskus h -->
    <line x1="215" y1="45" x2="280" y2="45" stroke="#64748b" stroke-width="1" stroke-dasharray="2 2"/>
    <line x1="115" y1="90" x2="185" y2="90" stroke="#64748b" stroke-width="1" stroke-dasharray="2 2"/>
    <line x1="260" y1="45" x2="260" y2="90" stroke="#dc2626" stroke-width="2"/>
    <text x="268" y="72" fill="#dc2626" font-size="9" font-weight="bold">Δh (Π)</text>

    <!-- Kotak Formula Bawah -->
    <rect x="25" y="225" width="295" height="35" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="172" y="247" fill="#1e293b" font-size="8.5" font-weight="bold" text-anchor="middle">Π = ρ_larutan · g · Δh (Sensitivitas Ekstrem)</text>
  </g>

  <!-- PANEL KANAN: Plot Regresi Virial (x=375..745) -->
  <g transform="translate(375, 50)">
    <rect x="0" y="0" width="370" height="275" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="185" y="22" fill="#1e293b" font-size="11" font-weight="bold" text-anchor="middle">Plot Tekanan Tereduksi Virial (Π/C vs C)</text>

    <!-- Sumbu Koordinat -->
    <line x1="50" y1="215" x2="340" y2="215" stroke="#334155" stroke-width="2"/>
    <line x1="50" y1="215" x2="50" y2="40" stroke="#334155" stroke-width="2"/>
    <text x="340" y="230" fill="#334155" font-size="9" font-weight="bold">Konsentrasi Polimer C (g/L)</text>
    <text x="45" y="32" fill="#334155" font-size="9" font-weight="bold" text-anchor="end">Π/C (atm·L/g)</text>

    <!-- Titik Intercept pada Sumbu-Y (x=50, y=140) -->
    <circle cx="50" cy="140" r="5" fill="#dc2626"/>
    <line x1="50" y1="140" x2="290" y2="70" stroke="#2563eb" stroke-width="3"/>

    <!-- Titik-titik Data Eksperimen Virial -->
    <circle cx="100" cy="126" r="4.5" fill="#1e40af"/>
    <circle cx="160" cy="110" r="4.5" fill="#1e40af"/>
    <circle cx="220" cy="92" r="4.5" fill="#1e40af"/>
    <circle cx="280" cy="74" r="4.5" fill="#1e40af"/>

    <!-- Anotasi Intercept = RT / Mn -->
    <rect x="65" y="145" width="130" height="24" rx="4" fill="#fee2e2" stroke="#ef4444"/>
    <text x="130" y="161" fill="#991b1b" font-size="8.5" font-weight="bold" text-anchor="middle">Intercept = RT / Mn</text>

    <!-- Anotasi Kemiringan Slope = B (Koefisien Virial Kedua) -->
    <text x="210" y="65" fill="#2563eb" font-size="8.5" font-weight="bold">Slope = B (Interaksi Pelarut)</text>

    <!-- Kotak Formula Mn Bawah -->
    <rect x="35" y="225" width="315" height="38" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
    <text x="192" y="242" fill="#1e40af" font-size="9" font-weight="bold" text-anchor="middle">Formula Penentuan Massa Molar:</text>
    <text x="192" y="255" fill="#1d4ed8" font-size="8.5" text-anchor="middle">Mn = (R · T) / Intercept   (Bebas Bias Interaksi Polimer)</text>
  </g>
</svg>

> [!WARNING]
> ### ⚠️ Peringatan Miskonsepsi Siswa SMA: Mengapa Titik Didih/Beku Tidak Bisa untuk Protein?
> Makromolekul seperti enzim dan antibodi memiliki massa molar raksasa ($M_r > 50.000\\text{ g/mol}$). Akibatnya, pada konsentrasi $1\\text{ gram/L}$, nilai molalitasnya sangat kecil sehingga penurunan titik beku ($\\Delta T_f$) dan kenaikan titik didih ($\\Delta T_b$) hanya sebesar $\\approx 0.0001^\circ\\text{C}$ (tidak terbaca oleh termometer lab biasa). Hanya **tekanan osmotik ($\\Pi$)** yang mampu menghasilkan respon kolom cairan setinggi beberapa sentimeter ($h \\approx 2 - 5\\text{ cm}$), menjadikannya satu-satunya metode koligatif yang presisi untuk makromolekul!`,
        keyFormulas: [
          { name: 'Penentuan Mr via Tekanan Osmotik Sederhana', formula: 'M_r = \\frac{\\text{massa (g)} \\cdot R \\cdot T}{\\Pi \\cdot V \\text{ (L)}}' },
          { name: 'Persamaan Virial Osmometri Membran', formula: '\\frac{\\Pi}{C} = \\frac{R T}{M_n} + B C' },
          { name: 'Penentuan Mn dari Intercept Grafik', formula: 'M_n = \\frac{R T}{\\lim_{C \\to 0} (\\Pi / C)}' },
        ],
      },
    ],
    worked_examples: WORKED_EXAMPLES_TOPIC_113,
  },
  {
    id: 114,
    topic_number: 14,
    grade: 'Kelas 12',
    semester: 1,
    curriculumPhase: 'Fase F',
    relatedOsnTopicId: 7,
    title: 'Reaksi Redoks & Sel Elektrokimia SMA (Penyetaraan PBO & Setengah Reaksi, Sel Volta, Nernst, Elektrolisis & Faraday)',
    slug: 'reaksi-redoks-dan-sel-elektrokimia-sma',
    category: 'Elektrokimia',
    level: 'SMA',
    readTimeMinutes: 35,
    summary: 'Kajian komprehensif termodinamika redoks dan elektrokimia modern: 8 kaidah penentuan biloks, metode penyetaraan reaksi redoks kompleks (PBO dan ion-elektron setengah reaksi suasana asam/basa), arsitektur Sel Volta Daniell dan Deret Volta, potensial sel standar (E°sel) dan relasi energi bebas Gibbs (ΔG°), Persamaan Nernst untuk sel konsentrasi, teknologi baterai komersial dan mekanisme pencegahan korosi besi, kaidah reaksi sel elektrolisis fasa lelehan vs larutan, hingga stoikiometri kuantitatif Hukum Faraday I dan II.',
    allTags: [
      'reaksi-redoks',
      'bilangan-oksidasi',
      'penyetaraan-redoks-pbo',
      'metode-setengah-reaksi',
      'sel-volta-galvani',
      'deret-volta',
      'potensial-sel-standar',
      'persamaan-nernst',
      'baterai-dan-korosi',
      'proteksi-katodik',
      'sel-elektrolisis',
      'hukum-faraday',
      'stoikiometri-elektron',
      'mangan',
      'aturan-biloks',
      'disproporsionasi',
      'autoredoks',
      'klorin',
      'sel-volta',
      'sel-daniell',
      'notasi-iupac',
      'krao',
      'aliran-elektron',
      'setengah-reaksi',
      'suasana-asam',
      'dikromat',
      'besi',
      'penyetaraan-redoks',
      'potensial-sel',
      'seng-perak',
      'spontanitas',
      'jembatan-garam',
      'prinsip-desakan',
      'spontanitas-redoks',
      'kereaktifan-logam',
      'energi-bebas-gibbs',
      'termodinamika-elektrokimia',
      'tetapan-faraday',
      'larutan-nacl',
      'klor-alkali',
      'elektroda-inert',
      'sel-downs',
      'lelehan-nacl',
      'ekstraksi-natrium',
      'elektrolisis-lelehan',
      'hukum-faraday-1',
      'elektrodeposisi',
      'tembaga',
      'metode-pbo',
      'suasana-basa',
      'permanganat',
      'sulfit',
      'korosi-besi',
      'anoda-korban',
      'magnesium',
      'elektrokimia-lingkungan',
      'elektrolisis-air',
      'volume-gas-stp',
      'stoikiometri-gas',
      'hukum-faraday-2',
      'rangkaian-seri',
      'perak-tembaga',
      'massa-ekuivalen',
      'pemurnian-tembaga',
      'electrorefining',
      'tembaga-blister',
      'lumpur-anoda',
      'pengaruh-ph',
      'potensial-reduksi',
      'sel-konsentrasi',
      'perak',
      'ggl-sel',
      'ksp-agcl',
      'elektroda-perak-klorida',
      'tetapan-kesetimbangan',
      'diagram-latimer',
      'overpotential',
      'tegangan-lebih',
      'kinetika-elektrokimia',
      'potensiometri',
      'titrasi-redoks',
      'titik-ekuivalen',
      'serium',
      'ksp-agbr',
      'termodinamika-larutan',
      'baterai-litium-ion',
      'kapasitas-spesifik',
      'interkalasi',
      'penyimpanan-energi',
      'sel-membran',
      'nafion',
      'stoikiometri-industri',
      'diagram-pourbaix',
      'potensial-ph',
      'pasivasi-besi',
      'proteksi-anodik-katodik',
    ],
    prerequisites: [
      {
        tag: 'konsep-dasar-redoks-dan-kaidah-bilangan-oksidasi',
        title: 'Prasyarat 1: Konsep Dasar Reduksi-Oksidasi & 8 Kaidah Baku Bilangan Oksidasi (Biloks)',
        summary: 'Evolusi konsep redoks dari transfer oksigen hingga serah-terima elektron, 8 aturan baku penentuan biloks, dan reaksi autoredoks.',
        content: `Reaksi reduksi-oksidasi (**redoks**) merupakan salah satu kelompok reaksi kimia paling mendasar yang menggerakkan metabolisme makhluk hidup, pembangkitan energi listrik dalam baterai, hingga proses korosi logam di industri.

### 1. Evolusi Konsep Redoks
Pemahaman ilmuwan tentang reaksi redoks telah mengalami tiga tahapan evolusi konseptual:
1. **Berdasarkan Pengikatan & Pelepasan Oksigen:**
   - **Oksidasi:** reaksi pengikatan oksigen oleh suatu zat (misal pembakaran magnesium: $\\ce{2Mg + O2 -> 2MgO}$).
   - **Reduksi:** reaksi pelepasan oksigen dari suatu zat (misal reduksi bijih besi: $\\ce{Fe2O3 + 3CO -> 2Fe + 3CO2}$).
2. **Berdasarkan Serah-Terima Elektron:**
   - **Oksidasi:** proses pelepasan elektron ($\\ce{Zn -> Zn^2+ + 2e-}$).
   - **Reduksi:** proses penangkapan elektron ($\\ce{Cu^2+ + 2e- -> Cu}$).
   - *Jembatan Keledai:* **OIL RIG** (*Oxidation Is Loss, Reduction Is Gain of electrons*).
3. **Berdasarkan Perubahan Bilangan Oksidasi (Biloks):**
   - **Oksidasi:** reaksi yang disertai dengan **kenaikan bilangan oksidasi**.
   - **Reduksi:** reaksi yang disertai dengan **penurunan bilangan oksidasi**.
   - **Oksidator (Pengoksidasi):** zat yang mengalami reduksi (mengoksidasi zat lain).
   - **Reduktor (Pereduksi):** zat yang mengalami oksidasi (mereduksi zat lain).

---

### 2. Delapan Aturan Baku Penentuan Bilangan Oksidasi (IUPAC)
Bilangan oksidasi menyatakan muatan formal suatu atom jika seluruh pasangan elektron ikatan dianggap dimiliki sepenuhnya oleh atom yang lebih elektronegatif:
1. **Unsur Bebas:** Biloks atom dalam unsur bebas (baik monoatomik seperti $\\ce{Fe, Na, He}$ maupun poliatomik seperti $\\ce{O2, N2, P4, S8}$) selalu bernilai **$0$**.
2. **Ion Monoatomik:** Biloks atom sama dengan muatan ionnya (misal $\\ce{Na+} = +1$, $\\ce{Mg^2+} = +2$, $\\ce{Al^3+} = +3$, $\\ce{Cl-} = -1$, $\\ce{S^2-} = -2$).
3. **Logam Alkali (Golongan IA):** Dalam seluruh senyawanya selalu memiliki biloks **$+1$** ($\\ce{Li, Na, K, Rb, Cs}$).
4. **Logam Alkali Tanah (Golongan IIA):** Dalam seluruh senyawanya selalu memiliki biloks **$+2$** ($\\ce{Be, Mg, Ca, Sr, Ba}$).
5. **Atom Fluorin ($\\ce{F}$):** Sebagai unsur paling elektronegatif di alam, fluorin selalu memiliki biloks **$-1$** dalam semua senyawanya.
6. **Atom Hidrogen ($\\ce{H}$):**
   - Umumnya bernilai **$+1$** (pada senyawa non-logam, misal $\\ce{H2O, HCl, NH3}$).
   - Bernilai **$-1$** jika berikatan dengan logam hidrida aktif (misal $\\ce{NaH, CaH2, LiAlH4}$).
7. **Atom Oksigen ($\\ce{O}$):**
   - Umumnya bernilai **$-2$** (pada oksida umum, misal $\\ce{H2O, CO2, H2SO4}$).
   - Bernilai **$-1$** pada senyawa peroksida ($\\ce{H2O2, Na2O2, BaO2}$).
   - Bernilai **$-1/2$** pada senyawa superoksida ($\\ce{KO2}$).
   - Bernilai **$+2$** pada senyawa oksigen difluorida ($\\ce{OF2}$).
8. **Jumlah Aljabar Biloks:**
   - Dalam suatu **molekul/senyawa netral**, jumlah biloks seluruh atom penyusunnya **harus sama dengan $0$**.
   - Dalam suatu **ion poliatomik**, jumlah biloks seluruh atom penyusunnya **harus sama dengan muatan ion tersebut** (misal dalam $\\ce{SO4^2-}$, $\\text{Biloks S} + 4(-2) = -2 \\implies \\text{Biloks S} = +6$).

---

### 3. Reaksi Autoredoks: Disproporsionasi & Konproporsionasi
- **Reaksi Disproporsionasi (Autoredoks):** Reaksi redoks di mana **satu spesi zat yang sama mengalami oksidasi sekaligus reduksi**.
  Contoh: Disproporsionasi gas klorin dalam suasana basa:
  $$\\ce{\\overset{0}{Cl2} + 2OH- -> \\overset{-1}{Cl-} + \\overset{+1}{ClO-} + H2O}$$
  Atom $\\ce{Cl}$ mengalami penurunan biloks ($0 \\to -1$, reduksi) sekaligus kenaikan biloks ($0 \\to +1$, oksidasi).
- **Reaksi Konproporsionasi:** Kebalikan dari disproporsionasi; dua spesi berbeda yang memiliki tingkat oksidasi berbeda bereaksi menghasilkan satu spesi produk dengan tingkat oksidasi yang sama.
  Contoh: Reaksi gas $\ce{H2S}$ dengan gas $\ce{SO2}$:
  $$\ce{2H2\overset{-2}{S} + \overset{+4}{S}O2 -> 3\overset{0}{S} + 2H2O}$$

---

> [!WARNING]
> ### ⚠️ Peringatan Miskonsepsi Siswa SMA: Bilangan Oksidasi Bukan Hafalan Statis!
> **Jebakan Klasik Soal Biloks di Ujian SMA:**
> 1. **Mitos Oksigen Selalu $-2$:** Atom $\ce{O}$ bernilai $-1$ pada peroksida ($\ce{H2O2, Na2O2}$), $-1/2$ pada superoksida ($\ce{KO2}$), dan $+2$ pada $\ce{OF2}$ (karena $\ce{F}$ lebih elektronegatif).
> 2. **Mitos Hidrogen Selalu $+1$:** Atom $\ce{H}$ bernilai $-1$ jika berikatan langsung dengan logam elektropositif (senyawa hidrida logam seperti $\ce{NaH, CaH2, LiAlH4}$).
> 3. **Perbedaan Muatan Ion vs Biloks:** Muatan ion ditulis dengan angka sebelum tanda ($\ce{SO4^2-}$, $\ce{Fe^3+}$), sedangkan biloks ditulis dengan tanda sebelum angka ($+6$, $+3$). Selalu periksa jumlah aljabar biloks terhadap muatan ion poliatomik!`,
      },
      {
        tag: 'penyetaraan-reaksi-redoks-pbo-dan-setengah-reaksi',
        title: 'Prasyarat 2: Penyetaraan Reaksi Redoks Kompleks: Metode Perubahan Biloks (PBO) vs Metode Setengah Reaksi',
        summary: 'Algoritma sistematis penyetaraan reaksi redoks pada suasana asam dan basa menggunakan metode PBO dan ion-elektron setengah reaksi.',
        content: `Banyak reaksi redoks yang berlangsung rumit dan melibatkan transfer banyak elektron sehingga mustahil disetarakan hanya dengan cara menebak koefisien (*trial and error*). Terdapat dua metode analitis baku untuk menyetarakan reaksi redoks:

### 1. Metode Perubahan Bilangan Oksidasi (PBO)
Prinsip dasar metode PBO adalah: **Jumlah kenaikan biloks (elektron yang dilepas) harus tepat sama dengan jumlah penurunan biloks (elektron yang diterima)**.

#### Algoritma Sistematis PBO:
1. Tentukan biloks setiap atom dan identifikasi atom mana yang mengalami perubahan biloks.
2. Setarakan jumlah atom yang mengalami perubahan biloks dengan menambahkan koefisien sementara.
3. Hitung **total perubahan biloks** (perubahan biloks per atom $\\times$ jumlah atom yang bersangkutan).
4. Samakan total perubahan biloks oksidasi dan reduksi dengan mengalikan faktor pengali silang yang sesuai (faktor ini menjadi koefisien reaktan).
5. **Penyetaraan Muatan Total:**
   - **Suasana Asam:** Tambahkan ion $\\ce{H+}$ pada sisi yang muatannya lebih kecil/negatif hingga muatan kiri $=$ muatan kanan.
   - **Suasana Basa:** Tambahkan ion $\\ce{OH-}$ pada sisi yang muatannya lebih besar/positif hingga muatan kiri $=$ muatan kanan.
6. **Penyetaraan Atom Hidrogen & Oksigen:** Tambahkan molekul $\\ce{H2O}$ pada sisi yang kekurangan atom hidrogen untuk menyeimbangkan atom $\\ce{H}$ dan $\\ce{O}$.

---

### 2. Metode Setengah Reaksi (Ion-Elektron)
Metode ini sangat dianjurkan untuk reaksi dalam fasa larutan elektrolit berair karena memisahkan proses redoks menjadi dua setengah reaksi independen.

#### Algoritma Sistematis Metode Setengah Reaksi:
1. **Pemisahan Fasa:** Tuliskan kerangka reaksi menjadi dua setengah reaksi terpisah: setengah reaksi reduksi dan setengah reaksi oksidasi.
2. **Setarakan Atom Non-O dan Non-H:** Samakan jumlah atom selain oksigen dan hidrogen pada masing-masing setengah reaksi.
3. **Setarakan Atom Oksigen:**
   - Tambahkan molekul $\\ce{H2O}$ pada sisi yang kekurangan atom oksigen.
4. **Setarakan Atom Hidrogen:**
   - **Suasana Asam:** Tambahkan ion $\\ce{H+}$ pada sisi yang kekurangan atom hidrogen.
   - **Suasana Basa:** Setelah menambahkan $\\ce{H+}$, netralkan seluruh ion $\\ce{H+}$ dengan menambahkan ion $\\ce{OH-}$ dalam jumlah yang sama pada **kedua sisi reaksi** ($\\ce{H+ + OH- -> H2O}$).
5. **Setarakan Muatan Listrik:** Tambahkan elektron ($e^-$) pada sisi yang muatannya lebih positif.
6. **Penyetaraan Elektron & Penggabungan:** Kalikan kedua setengah reaksi dengan bilangan bulat terkecil agar jumlah elektron yang dilepas sama dengan elektron yang diterima, lalu jumlahkan kedua persamaan dan eliminasi spesi yang muncul di kedua sisi ($\ce{H2O, H+, OH-}$, dan $e^-$).

---

> [!WARNING]
> ### ⚠️ Peringatan Miskonsepsi Siswa SMA: Kesetaraan Atom vs Kesetaraan Muatan Listrik
> **Jebakan Fatal Penyetaraan Redoks:**
> - Banyak siswa merasa reaksinya sudah setara hanya karena jumlah atom di kiri sama dengan jumlah atom di kanan, namun **lupa memeriksa muatan listrik**!
> - Contoh salah: $\ce{Ag+ + Cu -> Ag + Cu^2+}$ (atomnya sama-sama 1, tetapi muatan kiri $+1$ dan kanan $+2$ $\implies$ **SALAH BESAR!**). Reaksi yang benar adalah $\ce{2Ag+ + Cu -> 2Ag + Cu^2+}$ (muatan kiri $=$ kanan $= +2$).
> - Pada suasana basa, selalu tambahkan $\ce{OH-}$ pada **KEDUA RUAS** dalam jumlah yang sama persis dengan ion $\ce{H+}$, lalu gabungkan $\ce{H+ + OH- -> H2O}$. Jangan menambahkan $\ce{OH-}$ hanya di satu ruas!`,
      },
    ],
    core_concepts: [
      {
        tag: 'sel-volta-galvani-dan-deret-kereaktifan-logam',
        tags: ['sel-volta', 'sel-galvani', 'anoda-katoda', 'jembatan-garam', 'notasi-sel-iupac', 'deret-volta'],
        title: 'Konsep Inti 1: Sel Volta / Galvani: Arsitektur Elektroda, Jembatan Garam, Notasi Sel, dan Deret Volta',
        summary: 'Konversi spontan energi kimia redoks menjadi energi listrik, prinsip kerja anoda oksidasi kutub negatif dan katoda reduksi kutub positif, serta urutan reaktivitas Deret Volta.',
        content: `**Sel Volta (atau Sel Galvani)** adalah perangkat elektrokimia yang mengubah energi kimia dari **reaksi redoks spontan** menjadi **energi listrik searah (DC)** yang dapat mengalir melalui rangkaian kawat eksternal.

### 1. Arsitektur Komponen Sel Volta Daniell ($\\ce{Zn - Cu}$)
Sel Volta klasik terdiri atas dua kompartemen setengah sel yang saling terhubung:
1. **Setengah Sel Anoda (Kutub Negatif $-$):**
   - Batang logam seng ($\\ce{Zn}$) dicelupkan ke dalam larutan garamnya (misal $\\ce{ZnSO4 } 1.0\\text{ M}$).
   - Mengalami **reaksi oksidasi**: atom logam melepaskan elektron dan larut menjadi ion seng:
     $$\\ce{Zn(s) -> Zn^2+(aq) + 2e-}$$
   - Karena elektron ditinggalkan pada elektroda ini sebelum mengalir keluar, **anoda bermuatan negatif ($-$)**.
2. **Setengah Sel Katoda (Kutub Positif $+$):**
   - Batang logam tembaga ($\\ce{Cu}$) dicelupkan ke dalam larutan $\\ce{CuSO4 } 1.0\\text{ M}$.
   - Mengalami **reaksi reduksi**: ion $\\ce{Cu^2+}$ dari larutan menangkap elektron dari elektroda dan mengendap sebagai tembaga murni:
     $$\\ce{Cu^2+(aq) + 2e- -> Cu(s)}$$
   - Karena elektron ditarik masuk ke elektroda ini, **katoda bermuatan positif ($+$)**.
3. **Kaidah Mnemonic Baku:**
   - **KRAO:** **K**atoda **R**eduksi, **A**noda **O**ksidasi (berlaku mutlak untuk seluruh sel elektrokimia, baik Sel Volta maupun Sel Elektrolisis!).

---

### 2. Peran Krusial Jembatan Garam (*Salt Bridge*)
Jika kedua larutan hanya dihubungkan oleh kawat penghantar tanpa jembatan garam, arus listrik akan terhenti seketika dalam hitungan mikrodetik!
- **Penyebab:** Pada anoda terjadi akumulasi ion positif ($\\ce{Zn^2+}$ berlebih), sedangkan pada katoda terjadi akumulasi ion negatif ($\\ce{SO4^2-}$ berlebih karena $\\ce{Cu^2+}$ mengendap). Polarisasi muatan ini menghambat aliran elektron lebih lanjut.
- **Mekanisme Jembatan Garam:** Pipa kaca berbentuk U yang diisi gel agar-agar mengandung elektrolit inert berkonsentrasi tinggi (seperti $\\ce{KNO3}$ atau $\\ce{KCl}$):
  - Anion $\\ce{NO3-}$ mengalir ke kompartemen anoda untuk menetralkan kelebihan $\\ce{Zn^2+}$.
  - Kation $\\ce{K+}$ mengalir ke kompartemen katoda untuk menetralkan kelebihan $\\ce{SO4^2-}$.
  - Jembatan garam **menjaga netralitas listrik larutan** dan menutup siklus rangkaian listrik internal.

---

### 3. Konvensi Notasi Sel Volta IUPAC
Rangkaian sel Volta dituliskan secara ringkas menggunakan diagram garis IUPAC:
$$\\mathbf{\\text{Anoda (s)} \\mid \\text{Ion Anoda (aq)} \\parallel \\text{Ion Katoda (aq)} \\mid \\text{Katoda (s)}}$$
Untuk Sel Daniell:
$$\\mathbf{\\ce{Zn(s) | Zn^2+(aq, 1.0 M) || Cu^2+(aq, 1.0 M) | Cu(s)}}$$
- Tanda satu garis vertikal ($\\mid$) menyatakan antarmuka batas fasa padat-cair.
- Tanda dua garis vertikal ($\\parallel$) menyatakan jembatan garam penghubung kedua larutan.
- Sisi kiri selalu mewakili kompartemen anoda (oksidasi), sisi kanan mewakili kompartemen katoda (reduksi).

---

### 4. Deret Kereaktifan Logam Volta
Alessandro Volta menyusun logam-logam berdasarkan kenaikan potensial reduksi standarnya ($E^\\circ$ dari paling negatif ke paling positif):

$$\\mathbf{\\ce{Li - K - Ba - Ca - Na - Mg - Al - Mn - (H2O) - Zn - Cr - Fe - Cd - Co - Ni - Sn - Pb - (H) - Sb - Bi - Cu - Hg - Ag - Pt - Au}}$$

> **Kaidah Arah Deret Volta:**
> - **Semakin ke Kiri:** $E^\\circ$ semakin negatif, logam semakin reaktif, semakin mudah mengalami oksidasi (melepas elektron), merupakan **reduktor yang semakin kuat**.
> - **Semakin ke Kanan:** $E^\\circ$ semakin positif, logam semakin mulia (kurang reaktif), semakin mudah mengalami reduksi (menangkap elektron), merupakan **oksidator yang semakin kuat**.
> - **Prinsip Desakan Logam:** Logam yang berada di sebelah kiri **mampu mendesak (mereduksi)** ion logam yang berada di sebelah kanannya dari larutannya (misal: $\\ce{Zn(s) + Cu^2+(aq) -> Zn^2+(aq) + Cu(s)}$ berlangsung spontan, tetapi $\\ce{Cu(s) + Zn^2+(aq)}$ tidak bereaksi).

---

### 5. Diagram Vektor Arsitektur Sel Volta Daniell

<svg viewBox="0 0 760 340" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <!-- Header -->
  <rect x="0" y="0" width="760" height="42" fill="#0f172a" rx="10"/>
  <text x="380" y="26" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">ARSITEKTUR SEL VOLTA DANIELL (Zn - Cu) & ALIRAN ELEKTRON EKSTERNAL</text>

  <!-- Area Sel Volta (x=20..740, y=50..325) -->
  <g transform="translate(20, 50)">
    <!-- BEKER KIRI: ANODA (Zn) (x=40..250) -->
    <rect x="40" y="70" width="210" height="180" rx="8" fill="#ffffff" stroke="#64748b" stroke-width="2"/>
    <rect x="43" y="115" width="204" height="132" fill="#f1f5f9" rx="6"/>
    <text x="145" y="60" fill="#dc2626" font-size="11" font-weight="bold" text-anchor="middle">ANODA (-): Oksidasi</text>
    <text x="145" y="235" fill="#475569" font-size="9" text-anchor="middle">Larutan ZnSO₄ 1.0 M</text>
    <!-- Batang Elektroda Seng (Zn) -->
    <rect x="125" y="30" width="40" height="150" rx="4" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
    <text x="145" y="105" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Zn(s)</text>
    <!-- Reaksi Anoda -->
    <text x="145" y="195" fill="#dc2626" font-size="9" font-weight="bold" text-anchor="middle">Zn → Zn²⁺ + 2e⁻</text>

    <!-- BEKER KANAN: KATODA (Cu) (x=470..680) -->
    <rect x="470" y="70" width="210" height="180" rx="8" fill="#ffffff" stroke="#64748b" stroke-width="2"/>
    <rect x="473" y="115" width="204" height="132" fill="#e0f2fe" rx="6"/>
    <text x="575" y="60" fill="#0369a1" font-size="11" font-weight="bold" text-anchor="middle">KATODA (+): Reduksi</text>
    <text x="575" y="235" fill="#0284c7" font-size="9" text-anchor="middle">Larutan CuSO₄ 1.0 M</text>
    <!-- Batang Elektroda Tembaga (Cu) -->
    <rect x="555" y="30" width="40" height="150" rx="4" fill="#d97706" stroke="#92400e" stroke-width="1.5"/>
    <text x="575" y="105" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Cu(s)</text>
    <!-- Reaksi Katoda -->
    <text x="575" y="195" fill="#0369a1" font-size="9" font-weight="bold" text-anchor="middle">Cu²⁺ + 2e⁻ → Cu</text>

    <!-- JEMBATAN GARAM (U-Tube Terbalik, x=210..510) -->
    <path d="M 200 160 L 200 100 Q 200 80, 220 80 L 500 80 Q 520 80, 520 100 L 520 160 L 490 160 L 490 105 L 230 105 L 230 160 Z" 
          fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
    <text x="360" y="74" fill="#b45309" font-size="9.5" font-weight="bold" text-anchor="middle">Jembatan Garam (KNO₃ / Gel Agar)</text>
    <!-- Ion Difusi -->
    <text x="220" y="135" fill="#dc2626" font-size="8.5" font-weight="bold">NO₃⁻ ➔</text>
    <text x="470" y="135" fill="#0284c7" font-size="8.5" font-weight="bold">➔ K⁺</text>

    <!-- RANGKAIAN KAWAT EKSTERNAL + VOLTMETER (Atas) -->
    <line x1="145" y1="30" x2="145" y2="10" stroke="#334155" stroke-width="2.5"/>
    <line x1="145" y1="10" x2="330" y2="10" stroke="#334155" stroke-width="2.5"/>
    <!-- Voltmeter -->
    <circle cx="360" cy="10" r="22" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
    <text x="360" y="8" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">V</text>
    <text x="360" y="21" fill="#16a34a" font-size="8" font-weight="bold" text-anchor="middle">+1.10 V</text>
    <!-- Kawat kanan -->
    <line x1="390" y1="10" x2="575" y2="10" stroke="#334155" stroke-width="2.5"/>
    <line x1="575" y1="10" x2="575" y2="30" stroke="#334155" stroke-width="2.5"/>

    <!-- Panah Aliran Elektron (Kiri ke Kanan) -->
    <line x1="210" y1="0" x2="270" y2="0" stroke="#ef4444" stroke-width="2"/>
    <polygon points="270,0 263,-3 263,3" fill="#ef4444"/>
    <text x="240" y="-5" fill="#ef4444" font-size="8.5" font-weight="bold" text-anchor="middle">Aliran 2e⁻ ➔</text>

    <!-- Notasi IUPAC Bawah -->
    <rect x="180" y="255" width="360" height="25" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
    <text x="360" y="271" fill="#1e40af" font-size="9.5" font-weight="bold" text-anchor="middle">Notasi Sel: Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s)</text>
  </g>
</svg>

---

> [!WARNING]
> ### ⚠️ Peringatan Miskonsepsi Siswa SMA: Trik Hafalan Kutub Elektroda & Mitos Jembatan Garam
> **Dua Miskonsepsi Paling Sering Terjadi di Sel Volta:**
> 1. **Mitos Aliran Elektron Menyeberang Jembatan Garam:** Elektron **HANYA** mengalir melalui sirkuit luar (kawat tembaga/voltmeter). Partikel yang bergerak menembus jembatan garam adalah **ion-ion cair ($\ce{K+}$ dan $\ce{NO3-}$)** untuk menjaga kenetralan larutan!
> 2. **Mnemonic KRAO vs Tanda Kutub:** 
>    - **KRAO** mutlak: **K**atoda selalu **R**eduksi, **A**noda selalu **O**ksidasi (di sel apa pun!).
>    - Di Sel Volta: Anoda bermuatan **negatif ($-$)** karena menjadi sumber elektron yang lepas, Katoda bermuatan **positif ($+$)**. Jangan sampai terbalik dengan sel elektrolisis!`,
        keyFormulas: [
          { name: 'Kaidah Katoda & Anoda', formula: '\\text{Katoda} = \\text{Reduksi (Kutub } + \\text{)}, \\quad \\text{Anoda} = \\text{Oksidasi (Kutub } - \\text{)}' },
          { name: 'Notasi Sel Volta IUPAC', formula: '\\text{Anoda} \\mid \\text{Ion Anoda} \\parallel \\text{Ion Katoda} \\mid \\text{Katoda}' },
          { name: 'Prinsip Desakan Deret Volta', formula: 'E^\\circ_{\\text{kiri}} < E^\\circ_{\\text{kanan}} \\implies \\text{Logam Kiri Mereduksi Kation Kanan}' },
        ],
      },
      {
        tag: 'potensial-sel-standar-termodinamika-dan-persamaan-nernst',
        tags: ['potensial-sel-standar', 'elektroda-hidrogen-she', 'energi-bebas-gibbs-redoks', 'persamaan-nernst', 'sel-konsentrasi'],
        title: 'Konsep Inti 2: Potensial Sel Standar (E°sel), Hubungan Termodinamika (ΔG°), dan Persamaan Nernst',
        summary: 'Definisi acuan SHE, formulasi E°sel = E°katoda - E°anoda, segitiga termodinamika ΔG° = -nFE°, dan perhitungan potensial non-standar Nernst.',
        content: `Kekuatan pendorong (*driving force*) aliran elektron dalam sel elektrokimia diukur sebagai beda potensial listrik antara kedua elektroda, yang dinamakan **gaya gerak listrik (GGL) sel** atau **potensial sel ($E_{\\text{sel}}$)** dalam satuan Volt ($1\\text{ V} = 1\\text{ Joule/Coulomb}$).

### 1. Elektroda Hidrogen Standar (*Standard Hydrogen Electrode* / SHE)
Potensial suatu setengah sel tunggal tidak dapat diukur secara mutlak. Oleh sebab itu, IUPAC menetapkan **SHE** sebagai standar pembanding acuan universal dengan nilai potensial tepat nol:
$$\\ce{2H+(aq, 1.0 M) + 2e- <=> H2(g, 1 atm)} \\qquad \\mathbf{E^\\circ = 0.00\\text{ Volt}} \\quad (298.15\\text{ K})$$
Nilai **potensial reduksi standar ($E^\\circ$)** suatu zat diukur dengan merangkai setengah sel zat tersebut sebagai katoda dan menghubungkannya dengan SHE sebagai anoda pada kondisi standar ($25^\\circ\\text{C}$, konsentrasi ion $1.0\\text{ M}$, tekanan gas $1\\text{ atm}$).

---

### 2. Formulasi Potensial Sel Standar ($E^\\circ_{\\text{sel}}$) & Kriteria Spontanitas
Potensial sel standar dihitung dari selisih potensial reduksi katoda dan anoda:
$$\\mathbf{E^\\circ_{\\text{sel}} = E^\\circ_{\\text{katoda}} - E^\\circ_{\\text{anoda}} = E^\\circ_{\\text{reduksi}} - E^\\circ_{\\text{oksidasi}}}$$

> **Kriteria Spontanitas Reaksi Redoks:**
> - $\\mathbf{E^\\circ_{\\text{sel}} > 0}$ : Reaksi redoks berlangsung **spontan** pada kondisi standar (menghasilkan energi listrik).
> - $\\mathbf{E^\\circ_{\\text{sel}} < 0}$ : Reaksi redoks **tidak dapat berlangsung spontan** (memerlukan pasokan arus listrik eksternal / elektrolisis).
> - $\\mathbf{E^\\circ_{\\text{sel}} = 0}$ : Sistem berada dalam kondisi **kesetimbangan elektrokimia dinamis** (baterai habis/mati).

---

### 3. Segitiga Termodinamika Elektrokimia: Relasi $E^\\circ_{\\text{sel}}$, $\\Delta G^\\circ$, dan $K$
Kajian termodinamika menghubungkan energi potensial listrik sel secara eksak dengan perubahan energi bebas Gibbs standar ($\\Delta G^\\circ$) dan tetapan kesetimbangan kimia ($K$):

$$\\mathbf{\\Delta G^\\circ = -n \\cdot F \\cdot E^\\circ_{\\text{sel}}}$$
$$E^\\circ_{\\text{sel}} = \\frac{R T}{n F} \\ln K = \\frac{2.303 R T}{n F} \\log K$$
Pada temperatur standar $T = 298.15\\text{ K}$ ($25^\\circ\\text{C}$):
$$\\mathbf{E^\\circ_{\\text{sel}} = \\frac{0.0592}{n} \\log K \\qquad \\log K = \\frac{n \\cdot E^\\circ_{\\text{sel}}}{0.0592}}$$

di mana:
- $n$ = jumlah mol elektron yang ditransfer dalam persamaan redoks setara.
- $F$ = tetapan Faraday ($96.485\\text{ C/mol } e^-$).
- $R$ = tetapan gas ($8.314\\text{ J/(mol}\\cdot\\text{K)}$).
- $K$ = tetapan kesetimbangan reaksi redoks.

---

### 4. Persamaan Nernst pada Kondisi Non-Standar
Pada kondisi konsentrasi ion bukan $1.0\\text{ M}$ atau tekanan gas bukan $1\\text{ atm}$, potensial sel aktual ($E_{\\text{sel}}$) dihitung menggunakan **Persamaan Nernst**:

$$E_{\\text{sel}} = E^\\circ_{\\text{sel}} - \\frac{R T}{n F} \\ln Q$$
Pada temperatur $25^\\circ\\text{C}$ ($298.15\\text{ K}$):
$$\\mathbf{E_{\\text{sel}} = E^\\circ_{\\text{sel}} - \\frac{0.0592}{n} \\log Q}$$

di mana $Q$ adalah kuosien reaksi ($Q = \\frac{[\\text{produk}]^c}{[\\text{reaktan}]^a}$).

#### Aplikasi Utama: Sel Konsentrasi (*Concentration Cell*)
Sel yang tersusun atas elektroda logam yang sama di kedua kompartemen ($E^\\circ_{\\text{sel}} = 0$), namun memiliki konsentrasi larutan ion yang berbeda ($[\\text{encer}] < [\\text{pekat}]$):
$$E_{\\text{sel}} = 0 - \\frac{0.0592}{n} \\log \\left(\\frac{[\\text{encer}]}{[\\text{pekat}]}\\right) = +\\frac{0.0592}{n} \\log \\left(\\frac{[\\text{pekat}]}{[\\text{encer}]}\\right)$$
Prinsip ini menjadi dasar kerja alat **pH meter laboratorium** (mengukur beda potensial terhadap elektroda membran gelas sensitif ion $\\ce{H+}$).

---

### 5. Diagram Hubungan Segitiga Termodinamika & Skala Potensial E°

<svg viewBox="0 0 760 340" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <!-- Header -->
  <rect x="0" y="0" width="760" height="42" fill="#0f172a" rx="10"/>
  <text x="380" y="26" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">RELASI SEGITIGA TERMODINAMIKA (E°sel ↔ ΔG° ↔ K) & PERSAMAAN NERNST</text>

  <!-- PANEL KIRI: Segitiga Termodinamika (x=15..410) -->
  <g transform="translate(15, 50)">
    <rect x="0" y="0" width="395" height="275" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="197" y="22" fill="#1e293b" font-size="11.5" font-weight="bold" text-anchor="middle">Segitiga Emas Termodinamika Elektrokimia</text>

    <!-- Node Atas: E°sel -->
    <rect x="135" y="40" width="125" height="45" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
    <text x="197" y="60" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">E°_sel</text>
    <text x="197" y="74" fill="#64748b" font-size="8" text-anchor="middle">(Potensial Sel Standar)</text>

    <!-- Node Kiri Bawah: ΔG° -->
    <rect x="20" y="175" width="135" height="45" rx="6" fill="#fef2f2" stroke="#ef4444" stroke-width="2"/>
    <text x="87" y="195" fill="#991b1b" font-size="12" font-weight="bold" text-anchor="middle">ΔG°</text>
    <text x="87" y="209" fill="#64748b" font-size="8" text-anchor="middle">(Energi Bebas Gibbs)</text>

    <!-- Node Kanan Bawah: K -->
    <rect x="240" y="175" width="135" height="45" rx="6" fill="#f0fdf4" stroke="#22c55e" stroke-width="2"/>
    <text x="307" y="195" fill="#166534" font-size="12" font-weight="bold" text-anchor="middle">K</text>
    <text x="307" y="209" fill="#64748b" font-size="8" text-anchor="middle">(Tetapan Kesetimbangan)</text>

    <!-- Panah Penghubung 1: E°sel ↔ ΔG° -->
    <line x1="140" y1="85" x2="87" y2="175" stroke="#475569" stroke-width="2"/>
    <rect x="55" y="115" width="90" height="22" rx="3" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="100" y="130" fill="#991b1b" font-size="8.5" font-weight="bold" text-anchor="middle">ΔG° = -nFE°</text>

    <!-- Panah Penghubung 2: E°sel ↔ K -->
    <line x1="255" y1="85" x2="307" y2="175" stroke="#475569" stroke-width="2"/>
    <rect x="250" y="115" width="95" height="22" rx="3" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="297" y="130" fill="#166534" font-size="8" font-weight="bold" text-anchor="middle">E° = (0.0592/n) log K</text>

    <!-- Panah Penghubung 3: ΔG° ↔ K -->
    <line x1="155" y1="197" x2="240" y2="197" stroke="#475569" stroke-width="2"/>
    <rect x="160" y="205" width="75" height="20" rx="3" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="197" y="219" fill="#475569" font-size="7.5" font-weight="bold" text-anchor="middle">ΔG° = -RT ln K</text>

    <!-- Ringkasan Kriteria Spontan Bawah -->
    <rect x="20" y="240" width="355" height="25" rx="4" fill="#f8fafc" stroke="#cbd5e1"/>
    <text x="197" y="256" fill="#1e293b" font-size="8.5" font-weight="bold" text-anchor="middle">Spontanitas Mutlak: E°_sel &gt; 0 ⟺ ΔG° &lt; 0 ⟺ K &gt; 1</text>
  </g>

  <!-- PANEL KANAN: Persamaan Nernst & Sel Konsentrasi (x=425..745) -->
  <g transform="translate(425, 50)">
    <rect x="0" y="0" width="320" height="275" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="160" y="22" fill="#1e293b" font-size="11.5" font-weight="bold" text-anchor="middle">Persamaan Nernst (Kondisi Non-Standar)</text>

    <!-- Kotak Formula Utama Nernst -->
    <rect x="20" y="45" width="280" height="60" rx="6" fill="#ffffff" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="160" y="70" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">E_sel = E°_sel - (0.0592 / n) log Q</text>
    <text x="160" y="90" fill="#64748b" font-size="8.5" text-anchor="middle">pada temperatur T = 298.15 K (25°C)</text>

    <!-- Sub-aplikasi: Sel Konsentrasi -->
    <rect x="20" y="115" width="280" height="85" rx="6" fill="#ffffff" stroke="#e2e8f0"/>
    <text x="160" y="135" fill="#0369a1" font-size="9.5" font-weight="bold" text-anchor="middle">Prinsip Sel Konsentrasi (E°_sel = 0):</text>
    <text x="160" y="155" fill="#334155" font-size="8.5" text-anchor="middle">Elektroda Identik, Konsentrasi Ion Berbeda</text>
    <rect x="35" y="165" width="250" height="24" rx="3" fill="#f0fdf4" stroke="#86efac"/>
    <text x="160" y="181" fill="#166534" font-size="9" font-weight="bold" text-anchor="middle">E_sel = +(0.0592 / n) log ([pekat] / [encer])</text>

    <!-- Keterangan Aplikasi pH Meter -->
    <rect x="20" y="210" width="280" height="55" rx="5" fill="#fef3c7" stroke="#fde68a"/>
    <text x="160" y="228" fill="#92400e" font-size="8.5" font-weight="bold" text-anchor="middle">Aplikasi: Pengukuran pH Elektrokimia</text>
    <text x="160" y="246" fill="#b45309" font-size="8" text-anchor="middle">Setiap perubahan 1 unit pH mengubah potensial 59.2 mV!</text>
  </g>
</svg>

---

> [!WARNING]
> ### ⚠️ Peringatan Miskonsepsi Siswa SMA: Mengalikan Nilai $E^\circ$ dengan Koefisien Reaksi
> **Jebakan Maut Soal Potensial Sel di UTBK-SNBT:**
> - Jika suatu setengah reaksi dikalikan 2 atau 3 untuk menyetarakan jumlah elektron (misal: $\ce{2Ag+ + 2e- -> 2Ag}$), nilai potensial reduksi standarnya **TIDAK BOLEH DIKALIKAN 2** ($E^\circ$ tetap $+0.80\text{ V}$)!
> - **Alasan Fisis:** Potensial sel ($E^\circ$) merupakan **sifat intensif** (energi per satuan muatan, $\text{Volt} = \text{Joule/Coulomb}$), bukan sifat ekstensif seperti entalpi ($\Delta H^\circ$).
> - Perhatikan pula rumus $\Delta G^\circ = -nFE^\circ_{\text{sel}}$: tanda minus ($-$) memastikan bahwa jika $E^\circ_{\text{sel}} > 0$ (spontan), maka nilai $\Delta G^\circ < 0$ (spontan).`,
        keyFormulas: [
          { name: 'Potensial Sel Standar', formula: 'E^\\circ_{\\text{sel}} = E^\\circ_{\\text{katoda}} - E^\\circ_{\\text{anoda}}' },
          { name: 'Relasi Energi Bebas Gibbs', formula: '\\Delta G^\\circ = -n \\cdot F \\cdot E^\\circ_{\\text{sel}}' },
          { name: 'Relasi Tetapan Kesetimbangan K', formula: 'E^\\circ_{\\text{sel}} = \\frac{0.0592}{n} \\log K \\quad (298.15\\text{ K})' },
          { name: 'Persamaan Nernst Non-Standar', formula: 'E_{\\text{sel}} = E^\\circ_{\\text{sel}} - \\frac{0.0592}{n} \\log Q' },
        ],
      },
      {
        tag: 'baterai-komersial-dan-fenomena-korosi-besi',
        tags: ['baterai-primer-sekunder', 'aki-timbal-asam', 'sel-bahan-bakar-fuel-cell', 'mekanisme-korosi-besi', 'proteksi-katodik-anoda-korban'],
        title: 'Konsep Inti 3: Baterai Komersial & Fenomena Korosi Besi Beserta Pencegahannya',
        summary: 'Klasifikasi sel primer, sekunder (aki Pb), dan fuel cell, mekanisme mikro-galvani korosi besi pada tetesan air, serta proteksi anoda korban.',
        content: `Aplikasi elektrokimia dalam peradaban manusia mencakup dua sisi mata uang: pemanfaatan sel redoks untuk penyimpanan energi (**baterai**) dan pengendalian reaksi redoks destruktif yang merusak infrastruktur logam (**korosi**).

### 1. Klasifikasi Baterai Komersial
1. **Sel Primer (Sekali Pakai / Tidak Dapat Diisi Ulang):**
   - **Baterai Kering Leclanché:** Anoda seng ($\\ce{Zn}$), katoda batang karbon grafit dalam pasta basah $\\ce{MnO2, NH4Cl, ZnCl2}$ ($E \\approx 1.5\\text{ V}$).
   - **Baterai Alkalin:** Menggunakan elektrolit basa kuat $\\ce{KOH}$, menghasilkan arus lebih stabil dan masa simpan jauh lebih lama.
2. **Sel Sekunder (Dapat Diisi Ulang / *Rechargeable*):**
   - **Aki Timbal-Asam (*Lead-Acid Accumulator*):** Baterai kendaraan bermotor ($E \\approx 12\\text{ V}$, terdiri atas 6 sel $2\\text{ V}$ seri).
     - *Saat Pengosongan (Discharge):*
       $$\\ce{Pb(s) + PbO2(s) + 2H2SO4(aq) -> 2PbSO4(s) + 2H2O(l)} \\quad (E^\\circ \\approx 2.05\\text{ V})$$
     - *Saat Pengisian (Recharge):* Reaksi dibalik menggunakan arus DC eksternal, mengonversi kembali $\\ce{PbSO4}$ menjadi $\\ce{Pb}$ dan $\\ce{PbO2}$.
   - **Baterai Ion Litium ($\\ce{Li-ion}$):** Mengandalkan interkalasi ion $\\ce{Li+}$ di antara lapisan grafit anoda dan oksida logam katoda ($\\ce{LiCoO2}$), berbobot sangat ringan dengan densitas energi tinggi untuk perangkat smartphone dan mobil listrik.
3. **Sel Bahan Bakar (*Fuel Cell*):**
   - Mengalirkan reaktan secara kontinu dari luar (misal gas hidrogen $\\ce{H2}$ di anoda dan gas oksigen $\\ce{O2}$ di katoda dengan elektrolit basa):
     $$\\text{Reaksi Bersih: } \\ce{2H2(g) + O2(g) -> 2H2O(l)} \\qquad E^\\circ = +1.23\\text{ V}$$
   - Efisiensi termodinamika mencapai $> 70\\%$ dengan hasil samping hanya berupa air murni ($\\ce{H2O}$), menjadikannya teknologi energi ramah lingkungan masa depan.

---

### 2. Mekanisme Elektrokimia Korosi Besi (Perkaratan)
Korosi besi pada dasarnya adalah proses elektrokimia di mana permukaan besi bertindak sebagai **sel galvani mikro alami**:
1. **Daerah Anodik (Pusat Cacat Logam):**
   Besi yang bersentuhan dengan air teroksidasi melarut menjadi kation besi(II):
   $$\\ce{Fe(s) -> Fe^2+(aq) + 2e-} \\qquad E^\\circ = -0.44\\text{ V}$$
2. **Daerah Katodik (Tepi Tetesan Air Kaya Oksigen):**
   Elektron yang dilepas besi mengalir melalui logam menuju tepi tetesan air di mana konsentrasi oksigen terlarut paling tinggi, mereduksi gas oksigen:
   $$\\ce{O2(g) + 4H+(aq) + 4e- -> 2H2O(l)} \\qquad E^\\circ = +1.23\\text{ V}$$
   *(atau $\\ce{O2 + 2H2O + 4e- -> 4OH-}$ dalam suasana netral/basa, $E^\\circ = +0.40\\text{ V}$)*.
3. **Pembentukan Karat Besi Hidrat ($\\ce{Fe2O3 \\cdot xH2O}$):**
   Ion $\\ce{Fe^2+}$ bereaksi lebih lanjut dengan oksigen terlarut membentuk karat cokelat-kemerahan yang rapuh dan berpori:
   $$\\ce{4Fe^2+(aq) + O2(g) + (4 + 2x)H2O(l) -> 2Fe2O3 \\cdot xH2O(s) + 8H+(aq)}$$

---

### 3. Strategi Pencegahan Korosi
- **Pelapisan Pelindung (*Barrier Coating*):** Pengecatan kapal/jembatan, pelumuran oli mesin, atau pelapisan plastik mencegah kontak langsung besi dengan air dan oksigen atmosfer.
- **Galvanisasi (Pelapisan Seng / $\\ce{Zn}$):** Seng memiliki $E^\\circ$ lebih negatif daripada besi ($-0.76\\text{ V}$ vs $-0.44\\text{ V}$). Jika lapisan seng tergores, seng akan tetap teroksidasi terlebih dahulu mengorbankan dirinya demi melindungi besi di bawahnya (*sacrificial protection*).
- **Proteksi Katodik (*Cathodic Protection*):**
  Pipa baja bawah tanah atau lambung kapal laut dihubungkan dengan kawat ke batang logam yang sangat aktif (biasanya **magnesium $\\ce{Mg}$** dengan $E^\\circ = -2.37\\text{ V}$ atau seng $\\ce{Zn}$).
  Logam magnesium bertindak sebagai **anoda korban (*sacrificial anode*)** yang terkorosi habis, sementara pipa besi dipaksa bertindak sebagai katoda permanen sehingga terlindungi sempurna dari perkaratan!

---

### 4. Diagram Infografis Korosi Tetesan Air & Proteksi Katodik

<svg viewBox="0 0 760 340" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <!-- Header -->
  <rect x="0" y="0" width="760" height="42" fill="#0f172a" rx="10"/>
  <text x="380" y="26" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">MEKANISME SEL GALVANI KOROSI BESI & TEKNIK PROTEKSI KATODIK ANODA KORBAN</text>

  <!-- PANEL KIRI: Sel Mikro Korosi Tetesan Air (x=15..410) -->
  <g transform="translate(15, 50)">
    <rect x="0" y="0" width="395" height="275" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="197" y="22" fill="#1e293b" font-size="11.5" font-weight="bold" text-anchor="middle">Mekanisme Elektrokimia Perkaratan Besi</text>

    <!-- Pelat Besi Padat di Bawah (y=160..250) -->
    <rect x="25" y="160" width="345" height="90" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
    <text x="55" y="210" fill="#ffffff" font-size="11" font-weight="bold">LOGAM BESI (Fe)</text>

    <!-- Tetesan Air di Atas Permukaan Besi -->
    <!-- Dome tetesan air x=80..320, puncak y=90 -->
    <path d="M 80 160 Q 200 70, 320 160 Z" fill="#e0f2fe" stroke="#38bdf8" stroke-width="2" opacity="0.8"/>

    <!-- ANODA: Pusat Tetesan Air (Kurang O2) -->
    <ellipse cx="200" cy="160" rx="25" ry="10" fill="#b45309" opacity="0.4"/>
    <circle cx="200" cy="160" r="4" fill="#dc2626"/>
    <text x="200" y="145" fill="#dc2626" font-size="9" font-weight="bold" text-anchor="middle">ANODA (-)</text>
    <text x="200" y="157" fill="#b45309" font-size="7.5" font-weight="bold" text-anchor="middle">Fe → Fe²⁺ + 2e⁻</text>

    <!-- Aliran Elektron Melalui Besi ke Tepi Tetesan -->
    <path d="M 190 175 Q 140 190, 105 168" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="3 2"/>
    <text x="145" y="195" fill="#ef4444" font-size="8" font-weight="bold">Aliran 2e⁻ ➔</text>

    <!-- KATODA: Tepi Tetesan Air (Kaya O2) -->
    <circle cx="100" cy="158" r="4" fill="#0284c7"/>
    <text x="100" y="138" fill="#0369a1" font-size="9" font-weight="bold" text-anchor="middle">KATODA (+)</text>
    <text x="100" y="150" fill="#0284c7" font-size="7" font-weight="bold" text-anchor="middle">O₂ + 2H₂O + 4e⁻ → 4OH⁻</text>

    <!-- Formasi Karat Fe2O3.xH2O -->
    <rect x="180" y="105" width="130" height="24" rx="4" fill="#fed7aa" stroke="#ea580c"/>
    <text x="245" y="121" fill="#9a3412" font-size="8.5" font-weight="bold" text-anchor="middle">Karat: Fe₂O₃·xH₂O</text>

    <!-- Keterangan Bawah -->
    <rect x="25" y="255" width="345" height="15" rx="2" fill="#e2e8f0"/>
    <text x="197" y="266" fill="#475569" font-size="8" text-anchor="middle">Faktor Akselerator: Kelembapan, Oksigen, Keasaman, dan Garam Elektrolit</text>
  </g>

  <!-- PANEL KANAN: Proteksi Katodik (x=425..745) -->
  <g transform="translate(425, 50)">
    <rect x="0" y="0" width="320" height="275" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="160" y="22" fill="#1e293b" font-size="11.5" font-weight="bold" text-anchor="middle">Proteksi Katodik (Anoda Korban Mg)</text>

    <!-- Pipa Baja Bawah Tanah (Katoda Terlindungi) -->
    <rect x="30" y="55" width="260" height="55" rx="6" fill="#64748b" stroke="#334155" stroke-width="2"/>
    <text x="160" y="85" fill="#ffffff" font-size="10.5" font-weight="bold" text-anchor="middle">PIPA BESI BAWAH TANAH (KATODA)</text>
    <text x="160" y="100" fill="#86efac" font-size="8.5" font-weight="bold" text-anchor="middle">TERLINDUNGI DARI KOROSI (E° = -0.44 V)</text>

    <!-- Kawat Penghubung Listrik -->
    <line x1="80" y1="110" x2="80" y2="165" stroke="#ef4444" stroke-width="2.5"/>
    <line x1="80" y1="165" x2="160" y2="165" stroke="#ef4444" stroke-width="2.5"/>
    <line x1="160" y1="165" x2="160" y2="185" stroke="#ef4444" stroke-width="2.5"/>
    <text x="110" y="155" fill="#ef4444" font-size="8" font-weight="bold">Aliran e⁻ ➔</text>

    <!-- Blok Logam Anoda Korban Magnesium (Mg) -->
    <rect x="110" y="185" width="100" height="50" rx="5" fill="#cbd5e1" stroke="#dc2626" stroke-width="2"/>
    <text x="160" y="208" fill="#991b1b" font-size="10" font-weight="bold" text-anchor="middle">LOGAM Mg</text>
    <text x="160" y="222" fill="#b91c1c" font-size="8" font-weight="bold" text-anchor="middle">(Anoda Korban, E° = -2.37 V)</text>

    <!-- Keterangan Bawah -->
    <rect x="20" y="245" width="280" height="24" rx="4" fill="#fee2e2" stroke="#fca5a5"/>
    <text x="160" y="261" fill="#991b1b" font-size="8" font-weight="bold" text-anchor="middle">Mg terkorosi habis melindungi pipa baja tetap utuh!</text>
  </g>
</svg>

---

> [!WARNING]
> ### ⚠️ Peringatan Miskonsepsi Siswa SMA: Pelapisan Seng ($\ce{Zn}$) vs Timah ($\ce{Sn}$) Bila Tergores
> **Pembedaan Krusial dalam Ujian Kimia:**
> 1. **Besi Berlapis Seng (Galvanisasi):** $E^\circ_{\ce{Zn}} (-0.76\text{ V}) < E^\circ_{\ce{Fe}} (-0.44\text{ V})$. Bila tergores, seng yang terkorosi terlebih dahulu melindungi besi (*anoda korban*).
> 2. **Besi Berlapis Timah (Kaleng):** $E^\circ_{\ce{Sn}} (-0.14\text{ V}) > E^\circ_{\ce{Fe}} (-0.44\text{ V})$. Bila tergores, besi yang lebih reaktif akan bertindak sebagai anoda dan **berkarat berlipat ganda lebih cepat**!
> 3. **Faktor Korosi:** Besi TIDAK AKAN berkarat di dalam air murni yang bebas oksigen (air mendidih ditutup minyak), dan juga TIDAK AKAN berkarat di udara kering tanpa uap air (tabung berisi kalsium klorida anhidrat $\ce{CaCl2}$). Karat membutuhkan **air DAN oksigen secara bersamaan**.`,
        keyFormulas: [
          { name: 'Reaksi Aki Pengosongan (Discharge)', formula: '\\ce{Pb + PbO2 + 2H2SO4 -> 2PbSO4 + 2H2O}' },
          { name: 'Reaksi Anoda Korosi Besi', formula: '\\ce{Fe(s) -> Fe^2+(aq) + 2e-} \\quad (E^\\circ = -0.44\\text{ V})' },
          { name: 'Reaksi Katoda Korosi Besi', formula: '\\ce{O2(g) + 4H+(aq) + 4e- -> 2H2O(l)} \\quad (E^\\circ = +1.23\\text{ V})' },
          { name: 'Prinsip Anoda Korban Proteksi Katodik', formula: 'E^\\circ_{\\text{anoda korban (Mg/Zn)}} \\ll E^\\circ_{\\ce{Fe}} \\implies \\text{Logam Aktif Dikorbankan}' },
        ],
      },
      {
        tag: 'sel-elektrolisis-reaksi-anoda-katoda-lelehan-larutan',
        tags: ['sel-elektrolisis', 'kaidah-reaksi-katoda', 'kaidah-reaksi-anoda', 'elektroda-inert-aktif', 'lelehan-vs-larutan'],
        title: 'Konsep Inti 4: Sel Elektrolisis: Reaksi di Anoda & Katoda (Lelehan vs Larutan Berair)',
        summary: 'Pembalikan polaritas elektroda PANIC, persaingan termodinamika reduksi kation vs air di katoda, dan oksidasi anion vs elektroda aktif di anoda.',
        content: `**Sel Elektrolisis** adalah perangkat elektrokimia yang menggunakan energi listrik searah (DC) dari sumber luar untuk memaksakan berlangsungnya **reaksi redoks yang tidak spontan ($E^\\circ_{\\text{sel}} < 0$)**.

### 1. Perbedaan Polaritas Elektroda: Kaidah PANIC
- Pada Sel Volta: Anoda ($-$) dan Katoda ($+$).
- Pada Sel Elektrolisis: Polaritas kutub terbalik mengikuti terminal sumber tegangan baterai:
  - **Katoda (Kutub Negatif $-$):** Terhubung ke kutub negatif baterai; tempat terjadinya **reaksi reduksi** (menyuplai elektron ke kation).
  - **Anoda (Kutub Positif $+$):** Terhubung ke kutub positif baterai; tempat terjadinya **reaksi oksidasi** (menarik elektron dari anion).
  - *Mnemonic Internasional:* **PANIC** (*Positive is Anode, Negative Is Cathode*).

---

### 2. Kaidah Baku Reaksi di Katoda (Reduksi)
Di katoda terjadi perebutan penangkapan elektron antara kation terlarut dengan molekul pelarut air ($\\ce{H2O}$):

1. **Kation Logam Aktif (Golongan IA, IIA, $\\ce{Al^3+}$, $\\ce{Mn^2+}$):**
   - Memiliki potensial reduksi standar yang sangat negatif ($E^\\circ < -0.83\\text{ V}$, jauh lebih negatif daripada air).
   - **Bila Berupa Larutan Berair:** Kation tidak dapat tereduksi. **Air yang tereduksi menghasilkan gas hidrogen ($\\ce{H2}$) dan ion hidroksida ($\\ce{OH-}$)**:
     $$\\mathbf{\\ce{2H2O(l) + 2e- -> H2(g) + 2OH-(aq)}} \\qquad (E^\\circ = -0.83\\text{ V})$$
   - **Bila Berupa Lelehan / Leburan Murni (*Molten* tanpa air):** Kation logam itu sendiri yang tereduksi menjadi cairan/padatan logam murni:
     $$\\mathbf{\\ce{M^{n+} + n e- -> M(s/l)}}$$
     *(Prinsip ekstraksi logam $\\ce{Na}$ pada Sel Downs dari lelehan $\\ce{NaCl}$, serta $\\ce{Al}$ pada Proses Hall-Héroult dari lelehan $\\ce{Al2O3}$)*.
2. **Kation Logam Lain ($\\ce{Cu^2+, Ag+, Ni^2+, Fe^2+, Zn^2+}, \\text{dll.}$):**
   - Memiliki $E^\\circ > -0.83\\text{ V}$ (lebih mudah tereduksi dibanding air).
   - Kation logam tereduksi mengendap sebagai lapisan logam pada permukaan katoda:
     $$\\mathbf{\\ce{M^{n+}(aq) + n e- -> M(s)}}$$
3. **Ion Asam ($\\ce{H+}$):**
   - Tereduksi menjadi gas hidrogen:
     $$\\mathbf{\\ce{2H+(aq) + 2e- -> H2(g)}} \\qquad (E^\\circ = 0.00\\text{ V})$$

---

### 3. Kaidah Baku Reaksi di Anoda (Oksidasi)
Reaksi di anoda sangat dipengaruhi oleh **jenis bahan elektroda** yang digunakan:

#### Kasus A: Elektroda Tidak Inert (Aktif: $\\ce{Cu, Fe, Ni, Ag}$, dll.)
Anoda aktif memiliki kecenderungan oksidasi yang lebih tinggi daripada zat terlarut atau air. Maka **anoda logam itu sendiri yang teroksidasi melarut**:
$$\\mathbf{\\ce{M(s) -> M^{n+}(aq) + n e-}}$$
*(Prinsip penyepuhan logam / electroplating dan pemurnian tembaga blister di industri)*.

#### Kasus B: Elektroda Inert ($\\ce{Pt, C/grafit, Au}$)
Elektroda inert tidak ikut bereaksi. Reaksi ditentukan oleh jenis anion terlarut:
1. **Anion Sisa Asam Oksi ($\\ce{SO4^2-, NO3-, PO4^3-}, \\text{dll.}$):**
   - Atom pusat berada pada tingkat oksidasi maksimumnya sehingga anion tidak dapat dioksidasi lebih lanjut.
   - **Air yang teroksidasi menghasilkan gas oksigen ($\\ce{O2}$) dan ion hidrogen ($\\ce{H+}$)**:
     $$\\mathbf{\\ce{2H2O(l) -> O2(g) + 4H+(aq) + 4e-}} \\qquad (E^\\circ = +1.23\\text{ V})$$
2. **Anion Halida ($\\ce{Cl-, Br-, I-}$):**
   - Teroksidasi menghasilkan molekul halogen:
     $$\\mathbf{\\ce{2X-(aq) -> X2(g/l/s) + 2e-}}$$
     *(Contoh: $\\ce{2Cl- -> Cl2(g) + 2e-}$ pada industri klor-alkali)*.
3. **Ion Hidroksida / Basa ($\\ce{OH-}$):**
   - Teroksidasi menghasilkan gas oksigen dan air:
     $$\\mathbf{\\ce{4OH-(aq) -> O2(g) + 2H2O(l) + 4e-}}$$

---

### 4. Diagram Pohon Keputusan Logika Reaksi Sel Elektrolisis

<svg viewBox="0 0 760 340" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <!-- Header -->
  <rect x="0" y="0" width="760" height="42" fill="#0f172a" rx="10"/>
  <text x="380" y="26" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">POHON KEPUTUSAN REAKSI SEL ELEKTROLISIS (KATODA REDUKSI & ANODA OKSIDASI)</text>

  <!-- PANEL KIRI: Pohon Katoda (x=15..375) -->
  <g transform="translate(15, 50)">
    <rect x="0" y="0" width="360" height="275" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="180" y="22" fill="#1e293b" font-size="11.5" font-weight="bold" text-anchor="middle">1. Reaksi di KATODA (Kutub Negatif - Reduksi)</text>

    <!-- Node Puncak Katoda -->
    <rect x="110" y="38" width="140" height="28" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="180" y="56" fill="#1e40af" font-size="9.5" font-weight="bold" text-anchor="middle">Jenis Kation Terlarut?</text>

    <!-- Cabang 1: Gol IA, IIA, Al, Mn -->
    <line x1="130" y1="66" x2="65" y2="95" stroke="#64748b" stroke-width="1.5"/>
    <rect x="15" y="95" width="105" height="42" rx="4" fill="#ffffff" stroke="#94a3b8"/>
    <text x="67" y="112" fill="#334155" font-size="8.5" font-weight="bold" text-anchor="middle">IA, IIA, Al³⁺, Mn²⁺</text>
    <text x="67" y="126" fill="#64748b" font-size="7.5" text-anchor="middle">(E° &lt; -0.83 V)</text>

    <!-- Cabang 2: Kation Lain (Cu, Ag, Ni) -->
    <line x1="180" y1="66" x2="180" y2="95" stroke="#64748b" stroke-width="1.5"/>
    <rect x="130" y="95" width="100" height="42" rx="4" fill="#ffffff" stroke="#94a3b8"/>
    <text x="180" y="112" fill="#334155" font-size="8.5" font-weight="bold" text-anchor="middle">Logam Lain</text>
    <text x="180" y="126" fill="#64748b" font-size="7.5" text-anchor="middle">(Cu²⁺, Ag⁺, Ni²⁺)</text>

    <!-- Cabang 3: Asam H+ -->
    <line x1="230" y1="66" x2="295" y2="95" stroke="#64748b" stroke-width="1.5"/>
    <rect x="245" y="95" width="100" height="42" rx="4" fill="#ffffff" stroke="#94a3b8"/>
    <text x="295" y="112" fill="#334155" font-size="8.5" font-weight="bold" text-anchor="middle">Ion Asam H⁺</text>
    <text x="295" y="126" fill="#64748b" font-size="7.5" text-anchor="middle">(E° = 0.00 V)</text>

    <!-- Sub-cabang Larutan vs Lelehan untuk Gol IA/IIA -->
    <line x1="40" y1="137" x2="35" y2="165" stroke="#64748b" stroke-width="1.5"/>
    <rect x="5" y="165" width="80" height="50" rx="3" fill="#ecfdf5" stroke="#10b981"/>
    <text x="45" y="180" fill="#047857" font-size="8" font-weight="bold" text-anchor="middle">Larutan Air:</text>
    <text x="45" y="194" fill="#065f46" font-size="7.5" text-anchor="middle">Air Tereduksi</text>
    <text x="45" y="206" fill="#047857" font-size="7" font-weight="bold" text-anchor="middle">2H₂O+2e⁻→H₂+2OH⁻</text>

    <line x1="90" y1="137" x2="105" y2="165" stroke="#64748b" stroke-width="1.5"/>
    <rect x="90" y="165" width="75" height="50" rx="3" fill="#fef3c7" stroke="#f59e0b"/>
    <text x="127" y="180" fill="#92400e" font-size="8" font-weight="bold" text-anchor="middle">Lelehan Murni:</text>
    <text x="127" y="194" fill="#b45309" font-size="7.5" text-anchor="middle">Kation Reduksi</text>
    <text x="127" y="206" fill="#92400e" font-size="7" font-weight="bold" text-anchor="middle">Na⁺ + e⁻ → Na</text>

    <!-- Hasil Logam Lain -->
    <line x1="180" y1="137" x2="180" y2="165" stroke="#64748b" stroke-width="1.5"/>
    <rect x="170" y="165" width="80" height="50" rx="3" fill="#f0fdf4" stroke="#86efac"/>
    <text x="210" y="180" fill="#166534" font-size="8" font-weight="bold" text-anchor="middle">Endapan Logam:</text>
    <text x="210" y="194" fill="#15803d" font-size="7" text-anchor="middle">Mⁿ⁺ + n e⁻ → M(s)</text>
    <text x="210" y="206" fill="#166534" font-size="7" font-weight="bold" text-anchor="middle">Melapisi Katoda</text>

    <!-- Hasil Asam -->
    <line x1="295" y1="137" x2="295" y2="165" stroke="#64748b" stroke-width="1.5"/>
    <rect x="255" y="165" width="85" height="50" rx="3" fill="#eff6ff" stroke="#93c5fd"/>
    <text x="297" y="180" fill="#1e40af" font-size="8" font-weight="bold" text-anchor="middle">Gas Hidrogen:</text>
    <text x="297" y="194" fill="#1d4ed8" font-size="7.5" text-anchor="middle">2H⁺ + 2e⁻ → H₂</text>
    <text x="297" y="206" fill="#1e40af" font-size="7" font-weight="bold" text-anchor="middle">Gelembung Gas</text>

    <!-- Kotak Ringkasan Katoda -->
    <rect x="10" y="235" width="340" height="28" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="180" y="253" fill="#1e293b" font-size="8.5" font-weight="bold" text-anchor="middle">Kunci: Logam aktif hanya mengendap dari LELEHAN murni!</text>
  </g>

  <!-- PANEL KANAN: Pohon Anoda (x=390..745) -->
  <g transform="translate(390, 50)">
    <rect x="0" y="0" width="355" height="275" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="177" y="22" fill="#1e293b" font-size="11.5" font-weight="bold" text-anchor="middle">2. Reaksi di ANODA (Kutub Positif - Oksidasi)</text>

    <!-- Node Puncak Anoda -->
    <rect x="100" y="38" width="155" height="28" rx="4" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
    <text x="177" y="56" fill="#991b1b" font-size="9.5" font-weight="bold" text-anchor="middle">Jenis Bahan Elektroda?</text>

    <!-- Cabang 1: Elektroda Aktif -->
    <line x1="130" y1="66" x2="70" y2="100" stroke="#64748b" stroke-width="1.5"/>
    <rect x="15" y="100" width="115" height="38" rx="4" fill="#fff1f2" stroke="#f43f5e"/>
    <text x="72" y="116" fill="#9f1239" font-size="8.5" font-weight="bold" text-anchor="middle">Aktif (Cu, Fe, Ni, Ag)</text>
    <text x="72" y="129" fill="#be123c" font-size="7.5" text-anchor="middle">Anoda Larut Teroksidasi</text>

    <!-- Cabang 2: Elektroda Inert (Pt, C, Au) -->
    <line x1="225" y1="66" x2="270" y2="100" stroke="#64748b" stroke-width="1.5"/>
    <rect x="205" y="100" width="135" height="38" rx="4" fill="#ffffff" stroke="#94a3b8"/>
    <text x="272" y="116" fill="#334155" font-size="8.5" font-weight="bold" text-anchor="middle">Inert (C, Pt, Au)</text>
    <text x="272" y="129" fill="#64748b" font-size="7.5" text-anchor="middle">Lihat Jenis Anion Terlarut</text>

    <!-- Hasil Elektroda Aktif -->
    <line x1="72" y1="138" x2="72" y2="165" stroke="#64748b" stroke-width="1.5"/>
    <rect x="15" y="165" width="115" height="50" rx="3" fill="#fee2e2" stroke="#ef4444"/>
    <text x="72" y="180" fill="#991b1b" font-size="8" font-weight="bold" text-anchor="middle">Anoda Melarut:</text>
    <text x="72" y="194" fill="#b91c1c" font-size="7.5" text-anchor="middle">M(s) → Mⁿ⁺ + n e⁻</text>
    <text x="72" y="206" fill="#991b1b" font-size="7" font-weight="bold" text-anchor="middle">(Penyepuhan Logam)</text>

    <!-- Sub-cabang Anion Inert: Sisa Asam Oksi vs Halida vs Basa -->
    <line x1="230" y1="138" x2="165" y2="165" stroke="#64748b" stroke-width="1.5"/>
    <rect x="135" y="165" width="70" height="50" rx="3" fill="#ecfdf5" stroke="#10b981"/>
    <text x="170" y="180" fill="#047857" font-size="7.5" font-weight="bold" text-anchor="middle">Asam Oksi:</text>
    <text x="170" y="193" fill="#065f46" font-size="7" text-anchor="middle">SO₄²⁻, NO₃⁻</text>
    <text x="170" y="205" fill="#047857" font-size="6.5" font-weight="bold" text-anchor="middle">Air → O₂ + 4H⁺</text>

    <line x1="272" y1="138" x2="245" y2="165" stroke="#64748b" stroke-width="1.5"/>
    <rect x="210" y="165" width="65" height="50" rx="3" fill="#fef3c7" stroke="#f59e0b"/>
    <text x="242" y="180" fill="#92400e" font-size="7.5" font-weight="bold" text-anchor="middle">Halida (X⁻):</text>
    <text x="242" y="193" fill="#b45309" font-size="7" text-anchor="middle">Cl⁻, Br⁻, I⁻</text>
    <text x="242" y="205" fill="#92400e" font-size="6.5" font-weight="bold" text-anchor="middle">2X⁻ → X₂ + 2e⁻</text>

    <line x1="310" y1="138" x2="315" y2="165" stroke="#64748b" stroke-width="1.5"/>
    <rect x="280" y="165" width="70" height="50" rx="3" fill="#f0fdf4" stroke="#86efac"/>
    <text x="315" y="180" fill="#166534" font-size="7.5" font-weight="bold" text-anchor="middle">Basa (OH⁻):</text>
    <text x="315" y="193" fill="#15803d" font-size="7" text-anchor="middle">Larutan Basa</text>
    <text x="315" y="205" fill="#166534" font-size="6.5" font-weight="bold" text-anchor="middle">4OH⁻ → O₂+2H₂O</text>

    <!-- Kotak Ringkasan Anoda -->
    <rect x="10" y="235" width="335" height="28" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="177" y="253" fill="#1e293b" font-size="8.5" font-weight="bold" text-anchor="middle">Jika anoda TIDAK inert, anoda itu sendiri yang selalu teroksidasi!</text>
  </g>
</svg>

---

> [!WARNING]
> ### ⚠️ Peringatan Miskonsepsi Siswa SMA: Larutan vs Lelehan & Elektroda Aktif di Anoda
> **Dua Jebakan Terbesar Sel Elektrolisis:**
> 1. **Miskonsepsi Fasa Elektrolit:** Logam aktif golongan IA ($\ce{Na, K}$), IIA ($\ce{Mg, Ca}$), serta $\ce{Al}$ dan $\ce{Mn}$ **TIDAK AKAN PERNAH** mengendap dari larutan berair! Karena $E^\circ$ air ($-0.83\text{ V}$) lebih positif, air yang tereduksi menghasilkan gas $\ce{H2}$ dan ion $\ce{OH-}$. Logam tersebut hanya bisa diperoleh dari **LELEHAN murni tanpa air**!
> 2. **Miskonsepsi Anoda Aktif:** Sebelum melihat jenis anion terlarut, **selalu periksa elektrodanya terlebih dahulu**! Jika anodanya logam aktif ($\ce{Cu, Ag, Ni, Fe}$), maka anoda itu sendiri yang larut teroksidasi, terlepas dari apakah anionnya $\ce{SO4^2-}$ atau $\ce{Cl-}$.`,
        keyFormulas: [
          { name: 'Reduksi Air di Katoda (Larutan Logam Aktif)', formula: '\\ce{2H2O + 2e- -> H2(g) + 2OH-(aq)} \\quad (E^\\circ = -0.83\\text{ V})' },
          { name: 'Oksidasi Air di Anoda (Inert + Asam Oksi)', formula: '\\ce{2H2O -> O2(g) + 4H+(aq) + 4e-} \\quad (E^\\circ = +1.23\\text{ V})' },
          { name: 'Reduksi Kation Asam', formula: '\\ce{2H+(aq) + 2e- -> H2(g)} \\quad (E^\\circ = 0.00\\text{ V})' },
          { name: 'Oksidasi Anoda Aktif', formula: '\\ce{M(s) -> M^{n+}(aq) + n e-}' },
        ],
      },
      {
        tag: 'stoikiometri-kuantitatif-hukum-faraday-dan-sel-seri',
        tags: ['hukum-faraday-1', 'hukum-faraday-2', 'tetapan-faraday', 'muatan-listrik-coulomb', 'sel-elektrolisis-seri'],
        title: 'Konsep Inti 5: Aspek Kuantitatif Elektrolisis: Hukum Faraday I & II, Muatan Listrik, dan Stoikiometri Elektron',
        summary: 'Formulasi matematis w = e F, konversi arus I dan waktu t terhadap mol elektron, serta perbandingan massa ekivalen pada rangkaian sel seri.',
        content: `Pada tahun 1834, fisikawan dan kimiawan Inggris Michael Faraday merumuskan dua hukum kuantitatif yang menjadi fondasi stoikiometri elektrokimia modern.

### 1. Definisi Satuan Faraday ($1\\text{ F}$)
Satu Faraday ($1\\text{ F}$) didefinisikan sebagai besar muatan listrik yang dibawa oleh tepat **$1\\text{ mol}$ elektron**:
$$1\\text{ F} = N_A \\times e = (6.02214 \\times 10^{23}\\text{ elektron/mol}) \\times (1.60218 \\times 10^{-19}\\text{ C}) = \\mathbf{96.485\\text{ Coulomb/mol } e^-}$$
*(Dalam perhitungan ujian SMA, nilai ini dibulatkan menjadi $96.500\\text{ C/mol } e^-$)*.

Hubungan antara muatan listrik ($Q$, satuan Coulomb), kuat arus ($I$, satuan Ampere), dan waktu ($t$, satuan detik/sekon):
$$Q = I \\times t \\qquad \\mathbf{\\text{mol elektron} = F = \\frac{I \\times t}{96.500}}$$

---

### 2. Hukum Faraday I
> **Hukum Faraday I:**
> "Massa zat yang dihasilkan atau diendapkan pada suatu elektroda selama proses elektrolisis berbanding lurus dengan jumlah muatan listrik yang dialirkan ke dalam sel."

$$\\mathbf{w = e \\times F = e \\times \\frac{I \\times t}{96.500} = \\frac{A_r}{n} \\times \\frac{I \\times t}{96.500}}$$

di mana:
- $w$ = massa zat yang dihasilkan pada elektroda (satuan $\\text{gram}$).
- $e$ = massa ekuivalen zat ($e = \\frac{A_r}{n}$ atau $\\frac{M_r}{n}$).
- $A_r$ = massa atom relatif unsur ($\\text{g/mol}$).
- $n$ = valensi / jumlah elektron yang ditransfer per atom logam (misal untuk $\\ce{Ag+} \\implies n = 1$, $\\ce{Cu^2+} \\implies n = 2$, $\\ce{Al^3+} \\implies n = 3$).
- $I$ = kuat arus listrik ($\\text{Ampere}$).
- $t$ = durasi waktu elektrolisis ($\\text{detik / sekon}$).

---

### 3. Hukum Faraday II (Rangkaian Sel Seri)
> **Hukum Faraday II:**
> "Bila arus listrik yang sama dialirkan melalui dua atau lebih sel elektrolisis yang disusun secara seri, massa zat yang diendapkan pada masing-masing elektroda berbanding lurus dengan massa ekuivalennya masing-masing."

Karena rangkaian seri dialiri muatan listrik ($F$) yang sama persis:
$$F_1 = F_2 \\implies \\frac{w_1}{e_1} = \\frac{w_2}{e_2}$$
$$\\mathbf{\\frac{w_1}{w_2} = \\frac{e_1}{e_2} = \\frac{\\left(\\frac{A_{r,1}}{n_1}\\right)}{\\left(\\frac{A_{r,2}}{n_2}\\right)}}$$

---

### 4. Perhitungan Volume Gas Hasil Elektrolisis
Gas yang dihasilkan pada elektroda (seperti $\\ce{H2, O2, Cl2}$) dihitung menggunakan stoikiometri mol elektron:
1. **Tentukan mol elektron:** $n_{e^-} = \\frac{I \\times t}{96.500}$.
2. **Gunakan perbandingan koefisien reaksi:**
   - Untuk gas hidrogen di katoda: $\\ce{2H+ + 2e- -> H2} \\implies n_{\\ce{H2}} = \\frac{1}{2} n_{e^-}$.
   - Untuk gas oksigen di anoda: $\\ce{2H2O -> O2 + 4H+ + 4e-} \\implies n_{\\ce{O2}} = \\frac{1}{4} n_{e^-}$.
   - Untuk gas klorin di anoda: $\\ce{2Cl- -> Cl2 + 2e-} \\implies n_{\\ce{Cl2}} = \\frac{1}{2} n_{e^-}$.
3. **Konversi ke Volume:**
   - Pada kondisi standar ($STP, 0^\\circ\\text{C}, 1\\text{ atm}$): $V = n_{\\text{gas}} \\times 22.4\\text{ Liter}$.
   - Pada kondisi ruang ($RTP, 25^\\circ\\text{C}, 1\\text{ atm}$): $V = n_{\\text{gas}} \\times 24.0\\text{ Liter}$.
   - Pada kondisi sembarang: $V = \\frac{n_{\\text{gas}} R T}{P}$.

---

### 5. Diagram Rangkaian Dua Sel Elektrolisis Seri (Hukum Faraday II)

<svg viewBox="0 0 760 340" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <!-- Header -->
  <rect x="0" y="0" width="760" height="42" fill="#0f172a" rx="10"/>
  <text x="380" y="26" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">RANGKAIAN DUA SEL ELEKTROLISIS SERI & HUKUM FARADAY II</text>

  <!-- Area Rangkaian Seri (x=20..740, y=50..325) -->
  <g transform="translate(20, 50)">
    <!-- Sumber Arus DC Baterai di Tengah Atas -->
    <rect x="330" y="5" width="80" height="35" rx="5" fill="#334155" stroke="#0f172a" stroke-width="2"/>
    <text x="370" y="26" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">Baterai DC</text>
    <text x="320" y="26" fill="#ef4444" font-size="12" font-weight="bold">-</text>
    <text x="420" y="26" fill="#22c55e" font-size="12" font-weight="bold">+</text>

    <!-- SEL I: Elektrolisis AgNO3 (x=30..330) -->
    <rect x="30" y="75" width="300" height="180" rx="8" fill="#ffffff" stroke="#64748b" stroke-width="2"/>
    <rect x="33" y="125" width="294" height="127" fill="#f1f5f9" rx="6"/>
    <text x="180" y="65" fill="#1e293b" font-size="11" font-weight="bold" text-anchor="middle">SEL I: Larutan AgNO₃ (Ag⁺ + e⁻ → Ag)</text>
    <text x="180" y="240" fill="#64748b" font-size="8.5" text-anchor="middle">Massa Molar Ag = 107.9 g/mol | Valensi n = 1 (e₁ = 107.9)</text>

    <!-- Elektroda Katoda Sel I (Kiri) terhubung ke Kutub Negatif Baterai -->
    <rect x="80" y="95" width="30" height="120" rx="3" fill="#cbd5e1" stroke="#475569" stroke-width="1.5"/>
    <text x="95" y="160" fill="#1e293b" font-size="9" font-weight="bold" text-anchor="middle">Ag</text>
    <text x="95" y="90" fill="#dc2626" font-size="8.5" font-weight="bold" text-anchor="middle">Katoda (-)</text>

    <!-- Elektroda Anoda Sel I (Kanan) -->
    <rect x="230" y="95" width="30" height="120" rx="3" fill="#64748b" stroke="#334155" stroke-width="1.5"/>
    <text x="245" y="160" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">C</text>
    <text x="245" y="90" fill="#0284c7" font-size="8.5" font-weight="bold" text-anchor="middle">Anoda (+)</text>

    <!-- SEL II: Elektrolisis CuSO4 (x=410..710) -->
    <rect x="410" y="75" width="300" height="180" rx="8" fill="#ffffff" stroke="#64748b" stroke-width="2"/>
    <rect x="413" y="125" width="294" height="127" fill="#e0f2fe" rx="6"/>
    <text x="560" y="65" fill="#1e293b" font-size="11" font-weight="bold" text-anchor="middle">SEL II: Larutan CuSO₄ (Cu²⁺ + 2e⁻ → Cu)</text>
    <text x="560" y="240" fill="#0369a1" font-size="8.5" text-anchor="middle">Massa Molar Cu = 63.5 g/mol | Valensi n = 2 (e₂ = 31.75)</text>

    <!-- Elektroda Katoda Sel II (Kiri) terhubung ke Anoda Sel I -->
    <rect x="460" y="95" width="30" height="120" rx="3" fill="#d97706" stroke="#92400e" stroke-width="1.5"/>
    <text x="475" y="160" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Cu</text>
    <text x="475" y="90" fill="#dc2626" font-size="8.5" font-weight="bold" text-anchor="middle">Katoda (-)</text>

    <!-- Elektroda Anoda Sel II (Kanan) terhubung ke Kutub Positif Baterai -->
    <rect x="610" y="95" width="30" height="120" rx="3" fill="#64748b" stroke="#334155" stroke-width="1.5"/>
    <text x="625" y="160" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">C</text>
    <text x="625" y="90" fill="#0284c7" font-size="8.5" font-weight="bold" text-anchor="middle">Anoda (+)</text>

    <!-- Sambungan Kawat Listrik Seri -->
    <!-- Dari Baterai (-) ke Katoda Sel I -->
    <line x1="330" y1="22" x2="95" y2="22" stroke="#ef4444" stroke-width="2.5"/>
    <line x1="95" y1="22" x2="95" y2="95" stroke="#ef4444" stroke-width="2.5"/>

    <!-- Kawat Penghubung Seri: Anoda Sel I (x=245) ke Katoda Sel II (x=475) -->
    <path d="M 245 95 L 245 45 L 475 45 L 475 95" fill="none" stroke="#334155" stroke-width="2.5"/>
    <text x="360" y="55" fill="#334155" font-size="8" font-weight="bold" text-anchor="middle">Kawat Seri (Arus I Sama)</text>

    <!-- Dari Anoda Sel II ke Baterai (+) -->
    <line x1="625" y1="95" x2="625" y2="22" stroke="#22c55e" stroke-width="2.5"/>
    <line x1="625" y1="22" x2="410" y2="22" stroke="#22c55e" stroke-width="2.5"/>

    <!-- Rumus Kotak Bawah -->
    <rect x="180" y="265" width="360" height="25" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
    <text x="360" y="281" fill="#1e40af" font-size="9.5" font-weight="bold" text-anchor="middle">Hukum Faraday II: w₁ / w₂ = e₁ / e₂ = (Ar₁ / n₁) / (Ar₂ / n₂)</text>
  </g>
</svg>

---

> [!WARNING]
> ### ⚠️ Peringatan Miskonsepsi Siswa SMA: Massa Sama pada Sel Seri & Valensi Logam ($n$)
> **Jebakan Perhitungan Hukum Faraday:**
> 1. **Mitos Rangkaian Seri:** Pada sel yang dirangkai seri, yang bernilai **sama persis adalah muatan listrik / mol elektron ($F$)**, BUKAN massa endapan gramnya! Massa yang mengendap berbanding lurus dengan massa ekuivalen masing-masing zat ($w_1 / w_2 = e_1 / e_2$).
> 2. **Valensi Logam ($n$):** Jangan salah menentukan jumlah elektron yang ditransfer:
>    - $\ce{Ag+ + e- -> Ag} \implies n = 1$ ($e = 108 / 1 = 108$)
>    - $\ce{Cu^2+ + 2e- -> Cu} \implies n = 2$ ($e = 63.5 / 2 = 31.75$)
>    - $\ce{Cr^3+ + 3e- -> Cr} \implies n = 3$ ($e = 52 / 3 = 17.33$)
> 3. **Volume Gas Oksigen vs Hidrogen:** Untuk jumlah mol elektron yang sama, mol gas $\ce{O2}$ yang dihasilkan di anoda ($\frac{1}{4} F$) adalah **setengah** dari mol gas $\ce{H2}$ di katoda ($\frac{1}{2} F$).`,
        keyFormulas: [
          { name: 'Hukum Faraday I', formula: 'w = \\frac{A_r}{n} \\times \\frac{I \\times t}{96.500} = e \\times F' },
          { name: 'Mol Elektron (Faraday)', formula: 'n_{e^-} = F = \\frac{I \\times t}{96.500} = \\frac{Q}{96.500}' },
          { name: 'Hukum Faraday II (Sel Seri)', formula: '\\frac{w_1}{w_2} = \\frac{e_1}{e_2} = \\frac{A_{r,1} / n_1}{A_{r,2} / n_2}' },
          { name: 'Massa Ekuivalen Kimia', formula: 'e = \\frac{A_r}{n}' },
        ],
      },
    ],
    worked_examples: WORKED_EXAMPLES_TOPIC_114,
  },
  {
    id: 115,
    topic_number: 15,
    grade: 'Kelas 12',
    semester: 1,
    curriculumPhase: 'Fase F',
    relatedOsnTopicId: 8,
    title: 'Kimia Unsur Golongan Utama & Transisi Periode 4 (Alkali, Halogen, Gas Mulia, Periode 3, Unsur d, dan Metalurgi)',
    slug: 'kimia-unsur-golongan-utama-dan-transisi-sma',
    category: 'Kimia Anorganik',
    level: 'SMA',
    readTimeMinutes: 35,
    summary: 'Kajian komprehensif kimia anorganik deskriptif dan teoretis: tren sifat periodik unsur (muatan inti efektif Zeff), konfigurasi elektron orbital d dan aturan setengah penuh, karakteristik logam alkali (IA) & alkali tanah (IIA) beserta spektroskopi uji nyala emisi, sifat oksidator halogen (VIIA) dan kestabilan senyawa gas mulia (VIIIA), pergeseran metalik-nonlogam dan amfoterisme Al(OH)3 pada periode 3, keunikan logam transisi periode 4 (keberagaman biloks, transisi d-d warna ion, momen magnetik spin), hingga teknologi metalurgi ekstraksi industri (Hall-Héroult, Tanur Tiup, Frasch, Kontak, dan Haber-Bosch).',
    allTags: [
      'kimia-unsur',
      'tren-periodik-zeff',
      'logam-alkali-ia',
      'alkali-tanah-iia',
      'uji-nyala-spektroskopi',
      'halogen-viia',
      'daya-oksidasi-halogen',
      'gas-mulia-senyawa-xenon',
      'unsur-periode-ketiga',
      'amfoterisme-aluminium',
      'logam-transisi-periode-4',
      'warna-ion-transisi-d-d',
      'kemagnetan-paramagnetik',
      'metalurgi-tanur-tiup',
      'proses-hall-heroult',
      'uji-nyala',
      'spektroskopi-emisi',
      'logam-alkali',
      'alkali-tanah',
      'warna-nyala',
      'konfigurasi-elektron',
      'orbital-d',
      'aturan-setengah-penuh',
      'kromium',
      'tembaga',
      'kelarutan-alkali-tanah',
      'tren-ksp',
      'barium-sulfat',
      'kontras-radiologi',
      'hidroksida-iia',
      'reaksi-air',
      'natrium-hidroksida',
      'energi-ionisasi',
      'fenolftalein',
      'amfoterisme',
      'aluminium-hidroksida',
      'kompleks-tetrahidroksoaluminat',
      'periode-3',
      'asam-basa-lewis',
      'pendesakan-halogen',
      'potensial-reduksi',
      'daya-oksidator',
      'spontanitas-redoks',
      'golongan-viia',
      'senyawa-xenon',
      'gas-mulia',
      'teori-vsepr',
      'geometri-molekul',
      'square-planar',
      'titik-leleh',
      'unsur-periode-3',
      'kovalen-raksasa-silikon',
      'gaya-london',
      'struktur-molekul',
      'logam-transisi',
      'bilangan-oksidasi',
      'vanadium',
      'mangan',
      'elektron-valensi-3d',
      'momen-magnetik',
      'bohr-magneton',
      'paramagnetik',
      'elektron-tak-berpasangan',
      'ion-besi',
      'tanur-tiup',
      'metalurgi-besi',
      'hematit',
      'terak-kalsium-silikat',
      'karbon-monoksida',
      'metalurgi-aluminium',
      'kriolit',
      'elektrolisis-lelehan',
      'anoda-karbon',
      'proses-kontak',
      'asam-sulfat',
      'oleum',
      'katalis-v2o5',
      'kesetimbangan-eksotermik',
      'kekuatan-asam',
      'asam-halida',
      'asam-oksi-klorin',
      'energi-ikatan',
      'efek-induksi',
      'proses-bayer',
      'pemurnian-bauksit',
      'lumpur-merah',
      'kalsinasi',
      'teori-medan-kristal',
      'cft',
      'transisi-d-d',
      'warna-ion-transisi',
      'orbital-oktahedral',
      'deret-spektrokimia',
      'spin-tinggi-spin-rendah',
      'kompleks-kobalt',
      'sifat-magnetik',
      'efek-jahn-teller',
      'distorsi-tetragonal',
      'tembaga-ii',
      'degenerasi-orbital',
      'kristalografi',
      'diagram-ellingham',
      'pirometalurgi',
      'termodinamika-oksida',
      'energi-bebas-gibbs',
      'reduktor-karbon',
      'kestabilan-termal',
      'karbonat-alkali-tanah',
      'aturan-fajans',
      'polarisasi-kation',
      'energi-kisi',
      'oktahedral-terdistorsi',
      'hidrolisis-xeo3',
      'cfse',
      'kompleks-besi',
      'spin-tinggi-rendah',
      'proses-kroll',
      'metalurgi-titanium',
      'distilasi-ticl4',
      'reduksi-magnesium',
      'gas-argon',
      'hubungan-diagonal',
      'kerapatan-muatan',
      'berilium-aluminium',
      'disproporsionasi',
      'klorin',
      'titrasi-iodometri',
      'kadar-pemutih',
      'hipoklorit-klorat',
    ],
    prerequisites: [
      {
        tag: 'tren-sifat-periodik-dan-muatan-inti-efektif',
        title: 'Prasyarat 1: Tren Periodik Esensial: Muatan Inti Efektif (Zeff), Jari-Jari Atom, dan Energi Ionisasi',
        summary: 'Konsep tarikan muatan inti efektif Slater, efek perisaian elektron dalam, dan korelasi tren ukuran atom terhadap reaktivitas redoks.',
        content: `Kimia unsur deskriptif tidak dapat dipahami dengan baik hanya melalui hafalan belaka; seluruh perilaku kimiawi atom berakar langsung pada **struktur elektronik** dan **tren periodik sifat unsur**.

### 1. Konsep Muatan Inti Efektif ($Z_{\\text{eff}}$) & Efek Perisaian (*Shielding*)
Elektron-elektron pada kulit valensi terluar tidak merasakan seluruh tarikan muatan positif inti atom ($Z$) secara penuh karena terhalang oleh awan elektron pada kulit-kulit bagian dalam (*core electrons*). Fenomena penolakan elektrostatik antarelektron ini dinamakan **efek perisaian (*shielding effect*, $S$)**.

Berdasarkan Aturan Slater, muatan inti efektif yang dirasakan oleh elektron valensi dirumuskan sebagai:
$$\\mathbf{Z_{\\text{eff}} = Z - S}$$

1. **Tren dalam Satu Periode (Kiri ke Kanan):**
   - Jumlah proton inti ($Z$) bertambah satu demi satu, sementara elektron tambahan masuk ke subkulit yang sama.
   - Efek perisaian elektron pada kulit yang sama sangat lemah ($S$ meningkat lambat), sehingga nilai **$Z_{\\text{eff}}$ melonjak tajam**.
   - **Dampaknya:** Awan elektron ditarik semakin kuat ke arah inti $\\implies$ **Jari-jari atom menyusut**, energi ionisasi meningkat, dan elektronegativitas naik drastis!
2. **Tren dalam Satu Golongan (Atas ke Bawah):**
   - Jumlah kulit utama ($n$) bertambah, menempatkan elektron valensi semakin jauh dari inti atom.
   - Meskipun muatan inti $Z$ bertambah, penambahan kulit penuh di bagian dalam mengimbangi pertambahan tersebut sehingga $Z_{\\text{eff}}$ relatif konstan atau hanya meningkat sedikit.
   - **Dampaknya:** Jarak inti ke kulit terluar mendominasi $\\implies$ **Jari-jari atom membesar**, energi ionisasi menurun drastis, dan kecenderungan melepas elektron (sifat logam / reduktor) meningkat pesat!

---

### 2. Implikasi Tren terhadap Karakter Redoks
- **Unsur dengan Energi Ionisasi Rendah (Sudut Kiri Bawah Tabel Periodik, misal $\\ce{Cs, Fr}$):** Sangat mudah melepaskan elektron membentuk kation $\\implies$ **Karakter logam terkuat & Reduktor paling tangguh**.
- **Unsur dengan Afinitas Elektron & Elektronegativitas Tinggi (Sudut Kanan Atas, misal $\\ce{F, Cl, O}$):** Sangat kuat menarik elektron membentuk anion $\\implies$ **Karakter nonlogam terkuat & Oksidator paling agresif**.`,
      },
      {
        tag: 'konfigurasi-elektron-orbital-d-dan-aturan-setengah-penuh',
        tags: ['konfigurasi-elektron', 'orbital-d', 'aturan-setengah-penuh', 'anomali-cr-cu', 'energi-pertukaran'],
        title: 'Prasyarat 2: Konfigurasi Elektron Subkulit d & Kestabilan Khusus Orbital Setengah Penuh / Penuh',
        summary: 'Aturan Aufbau pada blok d, anomali konfigurasi elektron Cr dan Cu, energi pertukaran stabil, dan urutan ionisasi elektron 4s vs 3d.',
        content: `Unsur-unsur transisi periode 4 mengisi elektron pada subkulit $3d$ setelah subkulit $4s$ terisi. Memahami konfigurasi elektron ini merupakan kunci mutlak untuk meramalkan tingkat oksidasi, warna senyawa, dan sifat kemagnetan logam transisi.

### 1. Anomali Konfigurasi Elektron Kromium ($\\ce{Cr}$) dan Tembaga ($\\ce{Cu}$)
Berdasarkan Prinsip Aufbau baku, konfigurasi elektron seharusnya mengisi orbital $4s$ hingga penuh ($4s^2$) sebelum mengisi orbital $3d$:
- Untuk $\\ce{Sc}$ ($Z = 21$): $[\\ce{Ar}] 4s^2 3d^1$
- Untuk $\\ce{Ti}$ ($Z = 22$): $[\\ce{Ar}] 4s^2 3d^2$
- Untuk $\\ce{V}$ ($Z = 23$): $[\\ce{Ar}] 4s^2 3d^3$

Namun, terjadi **pengecualian kestabilan fundamental** pada dua unsur:
1. **Kromium ($\\ce{Cr}$, $Z = 24$):**
   - Teoretis Aufbau: $[\\ce{Ar}] 4s^2 3d^4$
   - **Aktual Eksperimen:** $\\mathbf{[\\ce{Ar}] 4s^1 3d^5}$ *(Orbital $3d$ setengah penuh / half-filled)*.
2. **Tembaga ($\\ce{Cu}$, $Z = 29$):**
   - Teoretis Aufbau: $[\\ce{Ar}] 4s^2 3d^9$
   - **Aktual Eksperimen:** $\\mathbf{[\\ce{Ar}] 4s^1 3d^{10}}$ *(Orbital $3d$ terisi penuh / completely filled)*.

> **Penjelasan Fisika Kuantum: Energi Pertukaran (*Exchange Energy*):**
> Konfigurasi subkulit yang terisi setengah penuh ($d^5$) atau terisi penuh ($d^{10}$) memiliki simetri bola yang sempurna dan jumlah pertukaran keadaan spin kuantum antarelektron paralel yang maksimum. Keuntungan kestabilan dari tingginya energi pertukaran ini jauh melampaui energi kecil yang dibutuhkan untuk mempromosikan satu elektron dari $4s$ ke $3d$!

---

### 2. Aturan Pelepasan Elektron pada Pembentukan Kation Transisi
Ketika atom logam transisi terionisasi membentuk kation:
- Elektron pada subkulit **$4s$ selalu dilepaskan terlebih dahulu** sebelum elektron pada subkulit $3d$!
- Contoh:
  - $\\ce{Fe}$ ($Z = 26$): $[\\ce{Ar}] 4s^2 3d^6$
  - $\\ce{Fe^2+}$: $[\\ce{Ar}] 3d^6$ *(dua elektron $4s$ dilepas)*
  - $\\ce{Fe^3+}$: $[\\ce{Ar}] 3d^5$ *(satu elektron $3d$ dilepas lebih lanjut, membentuk konfigurasi $d^5$ yang sangat stabil)*.`,
      },
    ],
    core_concepts: [
      {
        tag: 'logam-alkali-ia-dan-alkali-tanah-iia-sifat-kelarutan-uji-nyala',
        tags: ['logam-alkali-ia', 'alkali-tanah-iia', 'reaktivitas-air', 'kelarutan-senyawa-iia', 'uji-nyala-spektroskopi'],
        title: 'Konsep Inti 1: Logam Alkali (Golongan IA) & Alkali Tanah (Golongan IIA): Reaktivitas, Tren Kelarutan, dan Uji Nyala',
        summary: 'Karakteristik reduktor ekstrem IA vs IIA, reaksi eksotermik dengan air, tren kelarutan hidroksida vs sulfat, dan spektroskopi emisi uji nyala foton.',
        content: `Logam-logam golongan s (Alkali IA dan Alkali Tanah IIA) merupakan unsur-unsur paling elektropositif di alam. Karena energi ionisasinya yang sangat rendah, logam-logam ini tidak pernah ditemukan dalam keadaan bebas murni di alam, melainkan selalu dalam bentuk senyawa garam ioniknya.

### 1. Karakteristik Logam Alkali (Golongan IA: $\\ce{Li, Na, K, Rb, Cs}$)
- Memiliki satu elektron valensi ($ns^1$), titik leleh rendah, lunak (dapat diiris dengan pisau), dan memiliki massa jenis kecil ($\\ce{Li, Na, K}$ terapung di atas air).
- **Reaktivitas Ekstrem dengan Air:** Bereaksi sangat hebat dan eksotermik dengan air menghasilkan gas hidrogen dan larutan basa kuat hidroksida:
  $$\\mathbf{\\ce{2M(s) + 2H2O(l) -> 2MOH(aq) + H2(g)}} \\qquad (\\Delta H < 0)$$
  Reaktivitas meningkat pesat dari litium ke sesium. Kalium, rubidium, dan sesium meledak seketika saat menyentuh air karena panas reaksi langsung membakar gas $\\ce{H2}$ yang terbentuk! Oleh sebab itu, logam alkali disimpan terendam di dalam minyak tanah murni (*kerosene*) atau parafin cair.

---

### 2. Karakteristik Logam Alkali Tanah (Golongan IIA: $\\ce{Be, Mg, Ca, Sr, Ba}$)
- Memiliki dua elektron valensi ($ns^2$), ikatan logam lebih kuat daripada golongan IA, sehingga titik leleh dan kekerasan lebih tinggi.
- $\\ce{Be}$ bersifat kovalen amfoter. $\\ce{Mg}$ hanya bereaksi lambat dengan air dingin tetapi bereaksi cepat dengan uap air panas menghasilkan $\\ce{MgO}$ dan $\\ce{H2}$. $\\ce{Ca, Sr, Ba}$ bereaksi spontan dengan air dingin membentuk larutan basa hidroksida.

#### Tren Kelarutan Senyawa Logam Alkali Tanah (Kaidah Ksp):
1. **Kelarutan Basa Hidroksida ($\\ce{M(OH)2}$): MENINGKAT ke bawah.**
   $$\\ce{Be(OH)2 < Mg(OH)2 < Ca(OH)2 < Sr(OH)2 < Ba(OH)2}$$
   - $\\ce{Mg(OH)2}$ sukar larut (suspensi antasida obat maag), sedangkan $\\ce{Ba(OH)2}$ larut sempurna (basa kuat).
2. **Kelarutan Garam Sulfat ($\\ce{MSO4}$) & Karbonat ($\\ce{MCO3}$): MENURUN drastis ke bawah.**
   $$\\ce{MgSO4 > CaSO4 > SrSO4 > BaSO4}$$
   - $\\ce{MgSO4}$ (garam Inggris) sangat mudah larut di air, $\\ce{CaSO4}$ (gips) sedikit larut, sedangkan $\\ce{BaSO4}$ sangat sukar larut (mengendap putih pekat, digunakan sebagai media kontras radiologi sinar-X usus karena tidak beracun dan menahan radiasi).

---

### 3. Spektroskopi Uji Nyala (*Flame Test*)
Bila kristal garam logam dibakar pada nyala api bunsen bebas warna:
1. Energi termal nyala api **mengeksitasi elektron valensi** logam dari tingkat energi dasar (*ground state*) ke orbital tereksitasi yang lebih tinggi.
2. Keadaan tereksitasi bersifat tidak stabil; elektron segera jatuh kembali (*deeksitasi*) ke tingkat energi yang lebih rendah sambil **memancarkan foton cahaya tampak dengan panjang gelombang ($\\lambda$) spesifik**:
   $$\\Delta E = h \\nu = \\frac{h c}{\\lambda}$$

| Logam | Warna Nyala Api Khas | Panjang Gelombang Dominan ($\\lambda$) | Aplikasi Nyata |
| :--- | :--- | :---: | :--- |
| **Litium ($\\ce{Li}$)** | **Merah Tua / Karmin** | $\\sim 671\\text{ nm}$ | Kembang api merah, flare sinyal darurat |
| **Natrium ($\\ce{Na}$)** | **Kuning Emas Terang** | $589.0\\text{ nm}$ & $589.6\\text{ nm}$ (Doublet D) | Lampu penerangan jalan tol kabut, kembang api kuning |
| **Kalium ($\\ce{K}$)** | **Ungu Muda / Lilac** | $\\sim 766\\text{ nm}$ | Dilihat menggunakan kaca kobalt biru penyerap emisi Na |
| **Kalsium ($\\ce{Ca}$)** | **Merah Bata / Jingga** | $\\sim 622\\text{ nm}$ | Kembang api oranye-kemerahan |
| **Stronsium ($\\ce{Sr}$)** | **Merah Krimson Cemerlang** | $\\sim 650\\text{ nm}$ | Suar militer, piroteknik merah cerah |
| **Barium ($\\ce{Ba}$)** | **Hijau Apel Segar** | $\\sim 524\\text{ nm}$ | Kembang api hijau, detonator |

---

### 4. Diagram Spektrum Uji Nyala & Grafik Tren Kelarutan IIA

<svg viewBox="0 0 760 340" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <!-- Header -->
  <rect x="0" y="0" width="760" height="42" fill="#0f172a" rx="10"/>
  <text x="380" y="26" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">SPEKTROSKOPI UJI NYALA LOGAM ALKALI-ALKALI TANAH & TREN KELARUTAN GOLONGAN IIA</text>

  <!-- PANEL KIRI: Palet Uji Nyala (x=15..380) -->
  <g transform="translate(15, 50)">
    <rect x="0" y="0" width="365" height="275" rx="8" fill="#090d16" stroke="#334155" stroke-width="1.5"/>
    <text x="182" y="22" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Spektrum Emisi Deeksitasi Uji Nyala Foton</text>

    <!-- 6 Obor Nyala Api Berwarna -->
    <!-- Li: Merah Karmin -->
    <g transform="translate(25, 45)">
      <path d="M 20 60 Q 5 35, 20 10 Q 35 35, 20 60 Z" fill="#e11d48"/>
      <circle cx="20" cy="40" r="6" fill="#fecdd3"/>
      <text x="20" y="75" fill="#f43f5e" font-size="9" font-weight="bold" text-anchor="middle">Li</text>
      <text x="20" y="87" fill="#cbd5e1" font-size="7" text-anchor="middle">Merah Tua</text>
    </g>

    <!-- Na: Kuning Terang -->
    <g transform="translate(85, 45)">
      <path d="M 20 60 Q 5 35, 20 10 Q 35 35, 20 60 Z" fill="#eab308"/>
      <circle cx="20" cy="40" r="6" fill="#fef08a"/>
      <text x="20" y="75" fill="#facc15" font-size="9" font-weight="bold" text-anchor="middle">Na</text>
      <text x="20" y="87" fill="#cbd5e1" font-size="7" text-anchor="middle">Kuning 589nm</text>
    </g>

    <!-- K: Ungu Lilac -->
    <g transform="translate(145, 45)">
      <path d="M 20 60 Q 5 35, 20 10 Q 35 35, 20 60 Z" fill="#a855f7"/>
      <circle cx="20" cy="40" r="6" fill="#f3e8ff"/>
      <text x="20" y="75" fill="#c084fc" font-size="9" font-weight="bold" text-anchor="middle">K</text>
      <text x="20" y="87" fill="#cbd5e1" font-size="7" text-anchor="middle">Ungu Lilac</text>
    </g>

    <!-- Ca: Merah Bata -->
    <g transform="translate(205, 45)">
      <path d="M 20 60 Q 5 35, 20 10 Q 35 35, 20 60 Z" fill="#ea580c"/>
      <circle cx="20" cy="40" r="6" fill="#ffedd5"/>
      <text x="20" y="75" fill="#fb923c" font-size="9" font-weight="bold" text-anchor="middle">Ca</text>
      <text x="20" y="87" fill="#cbd5e1" font-size="7" text-anchor="middle">Merah Bata</text>
    </g>

    <!-- Sr: Merah Krimson -->
    <g transform="translate(265, 45)">
      <path d="M 20 60 Q 5 35, 20 10 Q 35 35, 20 60 Z" fill="#be123c"/>
      <circle cx="20" cy="40" r="6" fill="#fda4af"/>
      <text x="20" y="75" fill="#f43f5e" font-size="9" font-weight="bold" text-anchor="middle">Sr</text>
      <text x="20" y="87" fill="#cbd5e1" font-size="7" text-anchor="middle">Krimson</text>
    </g>

    <!-- Ba: Hijau Apel -->
    <g transform="translate(315, 45)">
      <path d="M 20 60 Q 5 35, 20 10 Q 35 35, 20 60 Z" fill="#22c55e"/>
      <circle cx="20" cy="40" r="6" fill="#bbf7d0"/>
      <text x="20" y="75" fill="#4ade80" font-size="9" font-weight="bold" text-anchor="middle">Ba</text>
      <text x="20" y="87" fill="#cbd5e1" font-size="7" text-anchor="middle">Hijau Apel</text>
    </g>

    <!-- Kotak Prinsip Fisika Kuantum -->
    <rect x="20" y="155" width="325" height="105" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="182" y="175" fill="#f8fafc" font-size="9" font-weight="bold" text-anchor="middle">Prinsip Emisi Foton Kuantum: ΔE = hc / λ</text>
    <text x="30" y="195" fill="#94a3b8" font-size="8">1. Panas nyala api mengeksitasi elektron ke orbital tinggi.</text>
    <text x="30" y="212" fill="#94a3b8" font-size="8">2. Deeksitasi spontan memancarkan foton cahaya tampak.</text>
    <text x="30" y="230" fill="#94a3b8" font-size="8">3. Jarak celah energi (ΔE) unik untuk setiap kation kationik!</text>
    <text x="30" y="248" fill="#38bdf8" font-size="8" font-weight="bold">Kunci Ujian: Na = Kuning, K = Ungu, Ba = Hijau, Ca = Bata</text>
  </g>

  <!-- PANEL KANAN: Tren Kelarutan IIA (x=395..745) -->
  <g transform="translate(395, 50)">
    <rect x="0" y="0" width="350" height="275" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="175" y="22" fill="#1e293b" font-size="11.5" font-weight="bold" text-anchor="middle">Tren Kelarutan Senyawa Golongan IIA di Air</text>

    <!-- Sumbu Koordinat -->
    <line x1="50" y1="215" x2="330" y2="215" stroke="#64748b" stroke-width="2"/>
    <line x1="50" y1="215" x2="50" y2="40" stroke="#64748b" stroke-width="2"/>
    <text x="190" y="232" fill="#64748b" font-size="9" font-weight="bold" text-anchor="middle">Urutan Kation: Mg²⁺ ➔ Ca²⁺ ➔ Sr²⁺ ➔ Ba²⁺</text>
    <text x="45" y="32" fill="#64748b" font-size="9" font-weight="bold" text-anchor="end">Kelarutan (Ksp)</text>

    <!-- Kurva Hidroksida M(OH)2: NAIK KE ATAS (Hijau) -->
    <path d="M 65 200 L 140 180 L 220 130 L 305 60" fill="none" stroke="#16a34a" stroke-width="3"/>
    <circle cx="305" cy="60" r="5" fill="#15803d"/>
    <text x="305" y="50" fill="#166534" font-size="9" font-weight="bold" text-anchor="middle">M(OH)₂ (Meningkat)</text>

    <!-- Kurva Sulfat MSO4: TURUN KE BAWAH (Merah) -->
    <path d="M 65 60 L 140 130 L 220 180 L 305 205" fill="none" stroke="#dc2626" stroke-width="3"/>
    <circle cx="305" cy="205" r="5" fill="#b91c1c"/>
    <text x="305" y="195" fill="#dc2626" font-size="9" font-weight="bold" text-anchor="middle">MSO₄ &amp; MCO₃ (Menurun)</text>

    <!-- Titik Ekstrem -->
    <rect x="55" y="245" width="280" height="22" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
    <text x="195" y="260" fill="#1e40af" font-size="8.5" font-weight="bold" text-anchor="middle">Ba(OH)₂ Paling Mudah Larut  |  BaSO₄ Paling Sukar Larut</text>
  </g>
</svg>`,
        keyFormulas: [
          { name: 'Reaksi Logam Alkali dengan Air', formula: '\\ce{2M(s) + 2H2O(l) -> 2MOH(aq) + H2(g)}' },
          { name: 'Tren Kelarutan Hidroksida IIA', formula: '\\ce{Mg(OH)2 < Ca(OH)2 < Sr(OH)2 < Ba(OH)2} \\implies \\text{Makin Larut ke Bawah}' },
          { name: 'Tren Kelarutan Sulfat IIA', formula: '\\ce{MgSO4 > CaSO4 > SrSO4 > BaSO4} \\implies \\text{Makin Mengendap ke Bawah}' },
          { name: 'Energi Foton Uji Nyala', formula: '\\Delta E = h \\nu = \\frac{h c}{\\lambda}' },
        ],
      },
      {
        tag: 'halogen-viia-dan-gas-mulia-viia-daya-oksidasi-senyawa-xenon',
        tags: ['halogen-viia', 'gas-mulia-viiia', 'reaksi-pendesakan-halogen', 'kekuatan-asam-halida', 'senyawa-xenon-xef2-xef4'],
        title: 'Konsep Inti 2: Golongan Halogen (VIIA) & Gas Mulia (VIIIA): Daya Pengoksidasi, Pendesakan Halogen, dan Senyawa Xenon',
        summary: 'Kekuatan oksidator F2 > Cl2 > Br2 > I2, aturan reaksi pendesakan halida, anomali ikatan hidrogen HF, dan sintesis senyawa gas mulia xenon.',
        content: `Golongan Halogen (VIIA) mewakili kelompok non-logam yang paling reaktif dengan kecenderungan menangkap elektron yang sangat kuat, sementara Gas Mulia (VIIIA) mewakili unsur-unsur dengan konfigurasi elektron paling stabil dan kelembaman kimiawi tertinggi.

### 1. Karakteristik Golongan Halogen (VIIA: $\\ce{F2, Cl2, Br2, I2}$)
Halogen membentuk molekul diatomik kovalen non-polar ($X_2$). Gaya dispersi London meningkat seiring bertambahnya massa molar, menyebabkan gradasi wujud fisik yang teratur pada $25^\\circ\\text{C}$:
- **Fluorin ($\\ce{F2}$):** Gas kuning muda pucat, sangat beracun dan reaktif luar biasa.
- **Klorin ($\\ce{Cl2}$):** Gas kuning kehijauan dengan bau menyengat menusuk.
- **Bromin ($\\ce{Br2}$):** Cairan merah-kecokelatan yang mudah menguap membentuk uap merah beracun.
- **Iodin ($\\ce{I2}$):** Padatan kristal ungu-kehitaman mengkilap yang menyublim langsung menjadi uap ungu pekat bila dihangatkan.

---

### 2. Tren Daya Pengoksidasi (Oksidator) & Reaksi Pendesakan Halogen
Afinitas elektron dan potensial reduksi standar halogen menurun secara konsisten dari atas ke bawah:
$$\\mathbf{\\ce{F2} (+2.87\\text{ V}) > \\ce{Cl2} (+1.36\\text{ V}) > \\ce{Br2} (+1.07\\text{ V}) > \\ce{I2} (+0.54\\text{ V})}$$

> **Kaidah Reaksi Pendesakan Halogen:**
> "Halogen yang berada di posisi **lebih atas** pada golongan VIIA memiliki daya pengoksidasi lebih kuat, sehingga **mampu mendesak (mengoksidasi) ion halida yang berada di bawahnya** dari larutannya."

1. **Reaksi Berlangsung Spontan:**
   - $\\ce{Cl2(g) + 2NaBr(aq) -> 2NaCl(aq) + Br2(l)}$ *(Klorin mendesak bromida, larutan berubah cokelat)*.
   - $\\ce{Cl2(g) + 2KI(aq) -> 2KCl(aq) + I2(s)}$ *(Klorin mendesak iodida, terbentuk endapan/warna iodin)*.
   - $\\ce{Br2(l) + 2KI(aq) -> 2KBr(aq) + I2(s)}$ *(Bromin mendesak iodida)*.
2. **Reaksi Tidak Dapat Berlangsung (Non-spontan):**
   - $\\ce{Br2(l) + 2NaCl(aq) ->}$ **Tidak Bereaksi!** *(Bromin tidak mampu mendesak klorida)*.
   - $\\ce{I2(s) + 2NaCl(aq) ->}$ **Tidak Bereaksi!**

---

### 3. Kekuatan Asam Halida ($\\ce{HX}$) & Asam Oksi Halogen
- **Asam Halida ($\\ce{HF, HCl, HBr, HI}$):**
  - **Urutan Titik Didih:** $\\ce{HF} (20^\\circ\\text{C}) \\gg \\ce{HI} (-35^\\circ\\text{C}) > \\ce{HBr} (-67^\\circ\\text{C}) > \\ce{HCl} (-85^\\circ\\text{C})$. Titik didih $\\ce{HF}$ melonjak anomali tinggi karena keberadaan **ikatan hidrogen intermolekuler**.
  - **Urutan Kekuatan Asam:** $\\mathbf{\\ce{HF < HCl < HBr < HI}}$. $\\ce{HF}$ adalah asam lemah karena energi ikatan $\\ce{H-F}$ sangat kuat ($565\\text{ kJ/mol}$). Semakin ke bawah, jari-jari halogen membesar, ikatan $\\ce{H-X}$ melemah drastis, sehingga proton $\\ce{H+}$ semakin mudah lepas di air!
- **Asam Oksi Klorin:**
  $$\\ce{HClO} \\text{ (asam hipoklorit)} < \\ce{HClO2} \\text{ (asam klorit)} < \\ce{HClO3} \\text{ (asam klorat)} < \\ce{HClO4} \\text{ (asam perklorat)}$$
  Semakin banyak atom oksigen elektronegatif terikat pada atom pusat $\\ce{Cl}$ (biloks meningkat dari $+1 \\to +3 \\to +5 \\to +7$), kerapatan elektron ditarik menjauhi ikatan $\\ce{O-H}$, membuat pelepasan $\\ce{H+}$ semakin mudah $\\implies$ **Asam perklorat ($\\ce{HClO4}$) adalah asam terkuat**.

---

### 4. Kimia Gas Mulia: Pemecahan Dogma Kelembaman & Senyawa Xenon
Hingga tahun 1962, seluruh buku teks kimia menyatakan bahwa gas mulia sama sekali tidak dapat bereaksi karena telah memiliki konfigurasi oktet penuh ($ns^2 np^6$).

- **Penemuan Bersejarah Neil Bartlett (1962):** Menyadari bahwa energi ionisasi pertama gas Xenon ($1170\\text{ kJ/mol}$) hampir sama persis dengan molekul $\\ce{O2}$ ($1175\\text{ kJ/mol}$), Bartlett berhasil mensintesis senyawa gas mulia pertama: **kristal jingga $\\ce{XePtF6}$** (*xenon heksafluoroplatinat*).
- **Keluarga Fluorida Xenon:**
  - $\\ce{XeF2}$ : Geometri **Linear** (dengan 3 pasangan elektron bebas ekuatorial pada bipiramida trigonal).
  - $\\ce{XeF4}$ : Geometri **Bujur Sangkar (*Square Planar*)** (dengan 2 pasangan elektron bebas aksial pada oktahedral).
  - $\\ce{XeF6}$ : Geometri Oktahedral Terdistorsi.
  - $\\ce{XeO3}$ : Senyawa padatan putih yang sangat mudah meledak (*explosive*).

---

### 5. Diagram Deret Pendesakan Halogen & Geometri Senyawa Xenon

<svg viewBox="0 0 760 340" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <!-- Header -->
  <rect x="0" y="0" width="760" height="42" fill="#0f172a" rx="10"/>
  <text x="380" y="26" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">DERET DAYA OKSIDASI PENDESAKAN HALOGEN & GEOMETRI SENYAWA XENON</text>

  <!-- PANEL KIRI: Pendesakan Halogen (x=15..410) -->
  <g transform="translate(15, 50)">
    <rect x="0" y="0" width="395" height="275" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="197" y="22" fill="#1e293b" font-size="11.5" font-weight="bold" text-anchor="middle">Daya Oksidator &amp; Reaksi Pendesakan Halogen</text>

    <!-- Skala Daya Oksidasi dari F2 ke I2 -->
    <rect x="25" y="45" width="70" height="40" rx="5" fill="#fef3c7" stroke="#f59e0b"/>
    <text x="60" y="65" fill="#b45309" font-size="11" font-weight="bold" text-anchor="middle">F₂</text>
    <text x="60" y="77" fill="#78350f" font-size="7.5" text-anchor="middle">+2.87 V</text>

    <line x1="100" y1="65" x2="115" y2="65" stroke="#64748b" stroke-width="2"/>

    <rect x="120" y="45" width="70" height="40" rx="5" fill="#f0fdf4" stroke="#86efac"/>
    <text x="155" y="65" fill="#166534" font-size="11" font-weight="bold" text-anchor="middle">Cl₂</text>
    <text x="155" y="77" fill="#14532d" font-size="7.5" text-anchor="middle">+1.36 V</text>

    <line x1="195" y1="65" x2="210" y2="65" stroke="#64748b" stroke-width="2"/>

    <rect x="215" y="45" width="70" height="40" rx="5" fill="#fff1f2" stroke="#fda4af"/>
    <text x="250" y="65" fill="#9f1239" font-size="11" font-weight="bold" text-anchor="middle">Br₂</text>
    <text x="250" y="77" fill="#881337" font-size="7.5" text-anchor="middle">+1.07 V</text>

    <line x1="290" y1="65" x2="305" y2="65" stroke="#64748b" stroke-width="2"/>

    <rect x="310" y="45" width="65" height="40" rx="5" fill="#f5f3ff" stroke="#c084fc"/>
    <text x="342" y="65" fill="#6b21a8" font-size="11" font-weight="bold" text-anchor="middle">I₂</text>
    <text x="342" y="77" fill="#581c87" font-size="7.5" text-anchor="middle">+0.54 V</text>

    <!-- Panah Arah Daya Oksidasi -->
    <line x1="360" y1="95" x2="35" y2="95" stroke="#dc2626" stroke-width="2.5"/>
    <polygon points="35,95 45,90 45,100" fill="#dc2626"/>
    <text x="197" y="110" fill="#dc2626" font-size="8.5" font-weight="bold" text-anchor="middle">Daya Oksidator Semakin Kuat (Makin Mampu Mendesak)</text>

    <!-- Ilustrasi Reaksi Tabung Reaksi -->
    <rect x="25" y="125" width="345" height="70" rx="5" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="35" y="145" fill="#166534" font-size="9" font-weight="bold">✓ Spontan: Cl₂(g) + 2NaBr(aq) ➔ 2NaCl(aq) + Br₂(l)</text>
    <text x="45" y="160" fill="#64748b" font-size="8">Klorin (E°=+1.36V) lebih kuat dari bromin ➔ larutan berubah jingga-cokelat</text>
    <text x="35" y="180" fill="#dc2626" font-size="9" font-weight="bold">✗ Non-spontan: I₂(s) + 2NaCl(aq) ➔ Tidak Bereaksi</text>

    <!-- Kotak Kekuatan Asam -->
    <rect x="25" y="205" width="345" height="55" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
    <text x="197" y="222" fill="#1e40af" font-size="8.5" font-weight="bold" text-anchor="middle">Kekuatan Asam: HF (Lemah) &lt;&lt; HCl &lt; HBr &lt; HI (Sangat Kuat)</text>
    <text x="197" y="238" fill="#1d4ed8" font-size="8" text-anchor="middle">Titik Didih HF anomali tinggi akibat Ikatan Hidrogen antarmolekul!</text>
    <text x="197" y="252" fill="#1e40af" font-size="8" text-anchor="middle">Asam Oksi: HClO &lt; HClO₂ &lt; HClO₃ &lt; HClO₄ (Perklorat Terkuat)</text>
  </g>

  <!-- PANEL KANAN: Senyawa Gas Mulia Xenon (x=425..745) -->
  <g transform="translate(425, 50)">
    <rect x="0" y="0" width="320" height="275" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="160" y="22" fill="#1e293b" font-size="11.5" font-weight="bold" text-anchor="middle">Geometri VSEPR Senyawa Xenon</text>

    <!-- Molekul 1: XeF2 (Linear) -->
    <g transform="translate(30, 45)">
      <rect x="0" y="0" width="120" height="130" rx="6" fill="#ffffff" stroke="#e2e8f0"/>
      <text x="60" y="20" fill="#0284c7" font-size="9.5" font-weight="bold" text-anchor="middle">XeF₂ (Linear)</text>
      <!-- Garis Linear F - Xe - F -->
      <line x1="60" y1="40" x2="60" y2="100" stroke="#0284c7" stroke-width="2.5"/>
      <circle cx="60" cy="70" r="10" fill="#0284c7"/><text x="60" y="73" fill="#ffffff" font-size="7" font-weight="bold" text-anchor="middle">Xe</text>
      <circle cx="60" cy="40" r="8" fill="#eab308"/><text x="60" y="43" fill="#ffffff" font-size="6.5" font-weight="bold" text-anchor="middle">F</text>
      <circle cx="60" cy="100" r="8" fill="#eab308"/><text x="60" y="103" fill="#ffffff" font-size="6.5" font-weight="bold" text-anchor="middle">F</text>
      <text x="60" y="120" fill="#64748b" font-size="7.5" text-anchor="middle">AX₂E₃ (3 PEB)</text>
    </g>

    <!-- Molekul 2: XeF4 (Square Planar) -->
    <g transform="translate(170, 45)">
      <rect x="0" y="0" width="125" height="130" rx="6" fill="#ffffff" stroke="#e2e8f0"/>
      <text x="62" y="20" fill="#7c3aed" font-size="9.5" font-weight="bold" text-anchor="middle">XeF₄ (Bujur Sangkar)</text>
      <!-- Silang Bujur Sangkar -->
      <line x1="30" y1="45" x2="95" y2="95" stroke="#7c3aed" stroke-width="2"/>
      <line x1="30" y1="95" x2="95" y2="45" stroke="#7c3aed" stroke-width="2"/>
      <circle cx="62" cy="70" r="10" fill="#7c3aed"/><text x="62" y="73" fill="#ffffff" font-size="7" font-weight="bold" text-anchor="middle">Xe</text>
      <circle cx="30" cy="45" r="7" fill="#eab308"/><text x="30" y="48" fill="#ffffff" font-size="6" font-weight="bold" text-anchor="middle">F</text>
      <circle cx="95" cy="45" r="7" fill="#eab308"/><text x="95" y="48" fill="#ffffff" font-size="6" font-weight="bold" text-anchor="middle">F</text>
      <circle cx="30" cy="95" r="7" fill="#eab308"/><text x="30" y="98" fill="#ffffff" font-size="6" font-weight="bold" text-anchor="middle">F</text>
      <circle cx="95" cy="95" r="7" fill="#eab308"/><text x="95" y="98" fill="#ffffff" font-size="6" font-weight="bold" text-anchor="middle">F</text>
      <text x="62" y="120" fill="#64748b" font-size="7.5" text-anchor="middle">AX₄E₂ (2 PEB Aksial)</text>
    </g>

    <!-- Keterangan Penemuan Bartlett Bawah -->
    <rect x="15" y="190" width="290" height="75" rx="5" fill="#fdf4ff" stroke="#f0abfc"/>
    <text x="160" y="210" fill="#86198f" font-size="8.5" font-weight="bold" text-anchor="middle">Sintesis Bersejarah Neil Bartlett (1962):</text>
    <text x="160" y="228" fill="#701a75" font-size="8" text-anchor="middle">Xe + PtF₆ ➔ XePtF₆ (Kristal Jingga)</text>
    <text x="160" y="246" fill="#4a044e" font-size="8" text-anchor="middle">Dogma kelembaman gas mulia terpatahkan!</text>
  </g>
</svg>`,
        keyFormulas: [
          { name: 'Urutan Daya Oksidasi Halogen', formula: '\\ce{F2} (+2.87\\text{ V}) > \\ce{Cl2} (+1.36\\text{ V}) > \\ce{Br2} (+1.07\\text{ V}) > \\ce{I2} (+0.54\\text{ V})' },
          { name: 'Kaidah Pendesakan Halogen Spontan', formula: '\\ce{X2} + 2\\ce{Y-} \\ce{-> 2X- + Y2} \\quad (\\text{spontan jika X di atas Y})' },
          { name: 'Urutan Kekuatan Asam Halida', formula: '\\ce{HF} \\text{ (lemah)} \\ll \\ce{HCl < HBr < HI} \\text{ (sangat kuat)}' },
          { name: 'Geometri XeF2 dan XeF4', formula: '\\ce{XeF2} \\implies \\text{Linear (AX}_2\\text{E}_3\\text{)}, \\quad \\ce{XeF4} \\implies \\text{Bujur Sangkar (AX}_4\\text{E}_2\\text{)}' },
        ],
      },
      {
        tag: 'unsur-periode-ketiga-sifat-logam-dan-amfoter-aloh3',
        tags: ['unsur-periode-3', 'pergeseran-sifat-logam-nonlogam', 'sifat-asam-basa-hidroksida', 'amfoterisme-aluminium-aloh3'],
        title: 'Konsep Inti 3: Unsur-Unsur Periode Ketiga: Pergeseran Sifat Logam-Nonlogam & Amfoterisme Al(OH)3',
        summary: 'Gradasi struktur ikatan logam ke molekul kovalen, tren sifat asam-basa hidroksida dari NaOH hingga HClO4, dan reaksi amfoter aluminium.',
        content: `Unsur-unsur Periode Ketiga ($\\ce{Na, Mg, Al, Si, P, S, Cl, Ar}$) menyajikan miniatur sempurna dari seluruh tabel periodik: memperlihatkan pergeseran lengkap dari sifat logam reduktor kuat di sebelah kiri, menjadi metaloid semikonduktor di tengah, hingga non-logam pengoksidasi asam kuat di sebelah kanan.

### 1. Pergeseran Sifat Fisis & Jenis Ikatan Periode 3
1. **$\\ce{Na, Mg, Al}$ (Logam Sejati):**
   - Berikatan logam kuat dengan kisi kristal raksasa. Konduktor listrik dan panas yang sangat baik. Titik leleh dan titik didih meningkat dari $\\ce{Na}$ ke $\\ce{Al}$ seiring bertambahnya jumlah elektron valensi yang disumbangkan ke lautan elektron ($1e^- \\to 2e^- \\to 3e^-$).
2. **$\\ce{Si}$ (Metaloid / Semikonduktor):**
   - Memiliki struktur **kovalen jejaring raksasa (*giant covalent network*)** mirip intan, di mana setiap atom silikon terikat secara tetrahedral ke 4 atom $\\ce{Si}$ tetangganya. Titik lelehnya paling tinggi di antara seluruh unsur periode 3 ($1410^\\circ\\text{C}$).
3. **$\\ce{P4, S8, Cl2}$ (Non-Logam Molekular):**
   - Membentuk molekul kovalen sederhana yang terikat oleh gaya antarmolekul van der Waals (gaya dispersi London).
   - Titik leleh ditentukan oleh ukuran molekul: $\\mathbf{\\ce{S8} (M_r = 256) > \\ce{P4} (M_r = 124) > \\ce{Cl2} (M_r = 71)}$. Belerang memiliki titik leleh tertinggi di antara kelompok molekular ini.
4. **$\\ce{Ar}$ (Gas Mulia):**
   - Berupa atom bebas monoatomik dengan gaya London paling lemah, berwujud gas dengan titik didih terendah ($-186^\\circ\\text{C}$).

---

### 2. Sifat Asam-Basa Hidroksida Periode 3
Senyawa hidroksida unsur periode 3 dapat dituliskan dalam rumus umum $\\ce{M-O-H}$:
- Jika ikatan $\\ce{M-O}$ bersifat sangat ionik (energi ionisasi $\\ce{M}$ rendah, logam elektropositif), ikatan $\\ce{M-O}$ akan putus di dalam air melepaskan ion $\\ce{OH-}$ $\\implies$ **Bersifat Basa**.
- Jika ikatan $\\ce{M-O}$ bersifat kovalen kuat (elektronegativitas $\\ce{M}$ tinggi), pasangan elektron ditarik ke arah $\\ce{M}$, menyebabkan ikatan $\\ce{O-H}$ melemah dan putus melepaskan ion $\\ce{H+}$ $\\implies$ **Bersifat Asam**.

| Rumus Senyawa | Wujud Rumus Asam | Sifat Asam-Basa | Reaksi Khas dalam Air |
| :--- | :---: | :---: | :--- |
| $\\ce{NaOH}$ | $\\ce{NaOH}$ | **Basa Sangat Kuat** | $\\ce{NaOH -> Na+ + OH-}$ |
| $\\ce{Mg(OH)2}$ | $\\ce{Mg(OH)2}$ | **Basa Lemah-Sedang** | $\\ce{Mg(OH)2 <=> Mg^2+ + 2OH-}$ |
| $\\ce{Al(OH)3}$ | $\\ce{HAlO2 \\cdot H2O}$ | **AMFOTER** | **Dapat bereaksi dengan asam maupun basa!** |
| $\\ce{Si(OH)4}$ | $\\ce{H4SiO4}$ (asam silikat) | **Asam Sangat Lemah** | $\\ce{H4SiO4 <=> H+ + H3SiO4-}$ |
| $\\ce{P(OH)5}$ | $\\ce{H3PO4}$ (asam fosfat) | **Asam Lemah-Sedang** | $\\ce{H3PO4 <=> H+ + H2PO4-}$ |
| $\\ce{S(OH)6}$ | $\\ce{H2SO4}$ (asam sulfat) | **Asam Kuat** | $\\ce{H2SO4 -> H+ + HSO4-}$ |
| $\\ce{Cl(OH)7}$ | $\\ce{HClO4}$ (asam perklorat) | **Asam Sangat Kuat** | $\\ce{HClO4 -> H+ + ClO4-}$ |

> **Kaidah Arah:**
> Dari kiri ke kanan: sifat **basa berkurang**, sifat **asam meningkat drastis**!

---

### 3. Fenomena Amfoterisme Aluminium Hidroksida ($\\ce{Al(OH)3}$)
Aluminium berada pada posisi transisi kritis di mana elektronegativitasnya seimbang, menyebabkan $\\ce{Al(OH)3}$ mampu bereaksi baik dengan larutan asam kuat maupun basa kuat:

1. **Bereaksi dengan Asam Kuat (Bertindak Sebagai Basa):**
   Endapan putih $\\ce{Al(OH)3}$ melarut membentuk kation aluminium terhidrasi:
   $$\\mathbf{\\ce{Al(OH)3(s) + 3H+(aq) -> Al^3+(aq) + 3H2O(l)}}$$
   *(atau dengan $\\ce{HCl}$: $\\ce{Al(OH)3 + 3HCl -> AlCl3 + 3H2O}$)*.

2. **Bereaksi dengan Basa Kuat (Bertindak Sebagai Asam):**
   Endapan putih $\\ce{Al(OH)3}$ melarut kembali dalam basa kuat berlebih membentuk anion kompleks tetrahidroksoaluminat yang larut jernih:
   $$\\mathbf{\\ce{Al(OH)3(s) + OH-(aq) -> [Al(OH)4]-(aq)}}$$
   *(atau ditulis sebagai ion aluminat: $\\ce{Al(OH)3 + NaOH -> NaAlO2 + 2H2O}$)*.

*Aplikasi Industri:* Amfoterisme aluminium dimanfaatkan dalam **Proses Bayer** untuk memurnikan bijih bauksit ($\\ce{Al2O3}$) dari pengotor oksida besi(III) ($\\ce{Fe2O3}$) yang bersifat basa murni dan tidak larut dalam larutan $\\ce{NaOH}$ panas.

---

### 4. Diagram Sifat Asam-Basa Periode 3 & Reaksi Amfoter Al(OH)3

<svg viewBox="0 0 760 340" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <!-- Header -->
  <rect x="0" y="0" width="760" height="42" fill="#0f172a" rx="10"/>
  <text x="380" y="26" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">TREN SIFAT ASAM-BASA HIDROKSIDA PERIODE 3 & MEKANISME AMFOTER Al(OH)₃</text>

  <!-- PANEL KIRI: Spektrum Asam Basa Periode 3 (x=15..410) -->
  <g transform="translate(15, 50)">
    <rect x="0" y="0" width="395" height="275" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="197" y="22" fill="#1e293b" font-size="11.5" font-weight="bold" text-anchor="middle">Spektrum Karakter Hidroksida Periode 3</text>

    <!-- Bar Spektrum Gradasi Warna -->
    <rect x="25" y="45" width="48" height="60" rx="4" fill="#1e40af"/>
    <text x="49" y="70" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">NaOH</text>
    <text x="49" y="85" fill="#93c5fd" font-size="7.5" text-anchor="middle">Basa Kuat</text>

    <rect x="77" y="45" width="48" height="60" rx="4" fill="#3b82f6"/>
    <text x="101" y="70" fill="#ffffff" font-size="8.5" font-weight="bold" text-anchor="middle">Mg(OH)₂</text>
    <text x="101" y="85" fill="#bfdbfe" font-size="7.5" text-anchor="middle">Basa Lemah</text>

    <rect x="129" y="40" width="55" height="70" rx="5" fill="#10b981" stroke="#047857" stroke-width="2"/>
    <text x="156" y="70" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Al(OH)₃</text>
    <text x="156" y="86" fill="#d1fae5" font-size="8" font-weight="bold" text-anchor="middle">AMFOTER</text>

    <rect x="188" y="45" width="48" height="60" rx="4" fill="#fbbf24"/>
    <text x="212" y="70" fill="#78350f" font-size="8" font-weight="bold" text-anchor="middle">H₄SiO₄</text>
    <text x="212" y="85" fill="#92400e" font-size="7" text-anchor="middle">Asam Lemah</text>

    <rect x="240" y="45" width="48" height="60" rx="4" fill="#f97316"/>
    <text x="264" y="70" fill="#ffffff" font-size="8.5" font-weight="bold" text-anchor="middle">H₃PO₄</text>
    <text x="264" y="85" fill="#ffedd5" font-size="7.5" text-anchor="middle">Asam Sedang</text>

    <rect x="292" y="45" width="45" height="60" rx="4" fill="#ef4444"/>
    <text x="314" y="70" fill="#ffffff" font-size="8.5" font-weight="bold" text-anchor="middle">H₂SO₄</text>
    <text x="314" y="85" fill="#fee2e2" font-size="7.5" text-anchor="middle">Asam Kuat</text>

    <rect x="341" y="45" width="45" height="60" rx="4" fill="#991b1b"/>
    <text x="363" y="70" fill="#ffffff" font-size="8.5" font-weight="bold" text-anchor="middle">HClO₄</text>
    <text x="363" y="85" fill="#fecaca" font-size="7.5" text-anchor="middle">Paling Kuat</text>

    <!-- Panah Tren Spektrum -->
    <line x1="30" y1="125" x2="365" y2="125" stroke="#64748b" stroke-width="2"/>
    <polygon points="365,125 355,120 355,130" fill="#64748b"/>
    <text x="197" y="140" fill="#64748b" font-size="8.5" font-weight="bold" text-anchor="middle">Sifat Basa Menurun ➔ Sifat Asam Meningkat Tajam</text>

    <!-- Perbandingan Titik Leleh Kovalen Raksasa Si vs Molekul -->
    <rect x="25" y="155" width="345" height="105" rx="5" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="197" y="175" fill="#1e293b" font-size="9" font-weight="bold" text-anchor="middle">Struktur &amp; Titik Leleh Unsur Periode 3:</text>
    <text x="35" y="195" fill="#1e40af" font-size="8">• Logam (Na, Mg, Al): Titik leleh naik (Na &lt; Mg &lt; Al)</text>
    <text x="35" y="212" fill="#047857" font-size="8">• Si (Kovalen Raksasa Intan): Titik leleh TERTINGGI (1410°C)</text>
    <text x="35" y="230" fill="#b45309" font-size="8">• Molekular Sederhana (Gaya London): S₈ &gt; P₄ &gt; Cl₂ &gt; Ar</text>
    <text x="35" y="248" fill="#64748b" font-size="7.5" font-style="italic">S₈ memiliki massa molar terbesar (Mr=256) ➔ gaya London terkuat!</text>
  </g>

  <!-- PANEL KANAN: Jalur Ganda Amfoter Al(OH)3 (x=425..745) -->
  <g transform="translate(425, 50)">
    <rect x="0" y="0" width="320" height="275" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="160" y="22" fill="#1e293b" font-size="11.5" font-weight="bold" text-anchor="middle">Dua Wajah Amfoter Al(OH)₃</text>

    <!-- Kotak Pusat Endapan Al(OH)3 -->
    <rect x="95" y="105" width="130" height="45" rx="6" fill="#10b981" stroke="#047857" stroke-width="2"/>
    <text x="160" y="125" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Al(OH)₃(s)</text>
    <text x="160" y="140" fill="#d1fae5" font-size="8" text-anchor="middle">(Endapan Putih Gelatin)</text>

    <!-- Cabang Atas: Ditambah Asam Kuat (H+) -->
    <line x1="160" y1="105" x2="160" y2="70" stroke="#ef4444" stroke-width="2.5"/>
    <polygon points="160,70 155,78 165,78" fill="#ef4444"/>
    <rect x="170" y="80" width="135" height="18" rx="3" fill="#fee2e2"/>
    <text x="237" y="93" fill="#991b1b" font-size="7.5" font-weight="bold" text-anchor="middle">+ Asam Kuat (3H⁺)</text>

    <rect x="70" y="40" width="180" height="30" rx="4" fill="#ffffff" stroke="#ef4444" stroke-width="1.5"/>
    <text x="160" y="55" fill="#991b1b" font-size="8.5" font-weight="bold" text-anchor="middle">Al³⁺(aq) + 3H₂O</text>
    <text x="160" y="66" fill="#64748b" font-size="7" text-anchor="middle">(Larut, Bertindak Sebagai Basa)</text>

    <!-- Cabang Bawah: Ditambah Basa Kuat (OH-) -->
    <line x1="160" y1="150" x2="160" y2="185" stroke="#3b82f6" stroke-width="2.5"/>
    <polygon points="160,185 155,177 165,177" fill="#3b82f6"/>
    <rect x="170" y="160" width="135" height="18" rx="3" fill="#eff6ff"/>
    <text x="237" y="173" fill="#1e40af" font-size="7.5" font-weight="bold" text-anchor="middle">+ Basa Kuat (OH⁻)</text>

    <rect x="65" y="185" width="190" height="32" rx="4" fill="#ffffff" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="160" y="200" fill="#1e40af" font-size="8.5" font-weight="bold" text-anchor="middle">[Al(OH)₄]⁻(aq) / AlO₂⁻</text>
    <text x="160" y="212" fill="#64748b" font-size="7" text-anchor="middle">(Larut, Bertindak Sebagai Asam)</text>

    <!-- Keterangan Aplikasi Bayer Bawah -->
    <rect x="15" y="230" width="290" height="35" rx="4" fill="#f0fdf4" stroke="#86efac"/>
    <text x="160" y="245" fill="#166534" font-size="8" font-weight="bold" text-anchor="middle">Aplikasi Proses Bayer Pemurnian Bauksit:</text>
    <text x="160" y="258" fill="#15803d" font-size="7.5" text-anchor="middle">Al melarut dalam NaOH pekat, pengotor Fe₂O₃ mengendap!</text>
  </g>
</svg>`,
        keyFormulas: [
          { name: 'Reaksi Al(OH)3 dalam Suasana Asam', formula: '\\ce{Al(OH)3(s) + 3H+(aq) -> Al^3+(aq) + 3H2O(l)}' },
          { name: 'Reaksi Al(OH)3 dalam Suasana Basa', formula: '\\ce{Al(OH)3(s) + OH-(aq) -> [Al(OH)4]-(aq)} \\quad (\\ce{AlO2- + 2H2O})' },
          { name: 'Urutan Titik Leleh Nonlogam Molekular P3', formula: '\\ce{S8} (M_r=256) > \\ce{P4} (M_r=124) > \\ce{Cl2} (M_r=71) > \\ce{Ar}' },
          { name: 'Urutan Sifat Asam Hidroksida Periode 3', formula: '\\ce{NaOH < Mg(OH)2 < Al(OH)3 < H4SiO4 < H3PO4 < H2SO4 < HClO4}' },
        ],
      },
      {
        tag: 'logam-transisi-periode-4-biloks-warna-ion-dan-kemagnetan',
        tags: ['logam-transisi-periode-4', 'variasi-bilangan-oksidasi', 'warna-ion-transisi-d-d', 'teori-medan-kristal-cft', 'kemagnetan-paramagnetik-momen-spin'],
        title: 'Konsep Inti 4: Logam Transisi Periode 4: Keberagaman Biloks, Warna Ion Kompleks (*d-d Transition*), dan Sifat Kemagnetan',
        summary: 'Karakteristik khas 10 unsur blok d (Sc s.d. Zn), variasi biloks, mekanisme transisi elektron d-d pembawa warna spektral, dan kalkulasi momen magnetik spin.',
        content: `Logam transisi periode 4 mencakup 10 unsur pengisi subkulit $3d$: **$\\ce{Sc, Ti, V, Cr, Mn, Fe, Co, Ni, Cu, Zn}$**. Unsur-unsur ini memperlihatkan sifat-sifat fisik dan kimia yang sangat unik dan berbeda drastis dari logam-logam golongan utama.

### 1. Karakteristik Utama Logam Transisi
1. **Titik Leleh & Titik Didih Tinggi:** Adanya elektron pada subkulit $3d$ yang belum penuh memungkinkan terjadinya **delokalisasi ikatan kovalen antar-orbital $d$** di samping ikatan logam lautan elektron $4s$, menghasilkan kisi kristal logam yang luar biasa padat dan kuat.
2. **Keberagaman Tingkat Oksidasi (Biloks):**
   Karena selisih energi antara orbital $4s$ dan $3d$ sangat kecil, elektron pada kedua orbital dapat dilepaskan secara bertahap:
   - Biloks maksimum suatu unsur transisi umumnya sama dengan **jumlah total elektron pada $(4s + 3d)$**:
     - $\\ce{Sc}$ ($4s^2 3d^1$): biloks $+3$.
     - $\\ce{Ti}$ ($4s^2 3d^2$): biloks $+2, +3, +4$ (maksimum $+4$).
     - $\\ce{V}$ ($4s^2 3d^3$): biloks $+2, +3, +4, +5$ (maksimum $+5$).
     - $\\ce{Cr}$ ($4s^1 3d^5$): biloks $+2, +3, +6$ (maksimum $+6$).
     - $\\ce{Mn}$ ($4s^2 3d^5$): memiliki variasi biloks terbanyak: $+2, +3, +4, +6, +7$ (maksimum $+7$ pada $\\ce{KMnO4}$).
     - Setelah mangan ($\\ce{Mn}$), elektron $3d$ mulai berpasangan sehingga biloks maksimum menurun ($\\ce{Fe}$ maks $+6$ [jarang, umumnya $+2, +3$], $\\ce{Co}$ $+2, +3$, $\\ce{Ni}$ $+2$, $\\ce{Cu}$ $+1, +2$, $\\ce{Zn}$ hanya $+2$).

---

### 2. Asal-Usul Warna-Warni Khas Ion Logam Transisi
Mengapa larutan ion logam alkali ($\\ce{Na+}$) dan alkali tanah ($\\ce{Ca^2+}$) selalu tidak berwarna jernih, sedangkan larutan ion transisi seperti tembaga ($\\ce{Cu^2+}$) berwarna biru terang dan kromat ($\\ce{CrO4^2-}$) berwarna kuning cemerlang?

- **Teori Medan Kristal (*Crystal Field Theory* / CFT):**
  Dalam ion logam bebas, kelima orbital $d$ ($d_{xy}, d_{yz}, d_{xz}, d_{x^2-y^2}, d_{z^2}$) memiliki tingkat energi yang setara (*degenerate*).
  Ketika ion logam berikatan dengan ligan air ($\\ce{H2O}$) membentuk ion kompleks terhidrasi (seperti $\\ce{[Cu(H2O)6]^2+}$), medan elektrostatik ligan **memecah kelima orbital $d$ menjadi dua kelompok energi yang berbeda**:
  - Kelompok energi lebih rendah ($t_{2g}$)
  - Kelompok energi lebih tinggi ($e_g$) dengan selisih energi $\\Delta_o$ (*crystal field splitting energy*).
- **Mekanisme Transisi $d-d$ (*d-d Transition*):**
  Nilai selisih energi $\\Delta_o$ tepat bersesuaian dengan energi foton pada spektrum **cahaya tampak** ($\\lambda = 400 - 700\\text{ nm}$):
  - Elektron pada orbital $d$ bawah menyerap panjang gelombang tertentu untuk melompat ke orbital $d$ atas.
  - Sisa panjang gelombang cahaya yang tidak diserap akan diteruskan ke mata kita sebagai **warna komplementer**!
- **Syarat Mutlak Munculnya Warna:**
  Subkulit $d$ harus **terisi sebagian ($d^1$ sampai $d^9$)**!
  - Ion $\\ce{Sc^3+}$ ($[\\ce{Ar}] 3d^0$) dan $\\ce{Ti^4+}$ ($[\\ce{Ar}] 3d^0$): **TIDAK BERWARNA** (tidak ada elektron yang dapat bertransisi).
  - Ion $\\ce{Zn^2+}$ ($[\\ce{Ar}] 3d^{10}$) dan $\\ce{Cu+}$ ($[\\ce{Ar}] 3d^{10}$): **TIDAK BERWARNA** (orbital $d$ penuh sesak, tidak ada orbital kosong tujuan eksitasi).

| Ion Transisi | Konfigurasi $3d$ | Warna Larutan Berair Khas |
| :--- | :---: | :--- |
| $\\ce{Sc^3+}$ | $3d^0$ | **Tidak Berwarna (Bening)** |
| $\\ce{Ti^3+}$ | $3d^1$ | **Ungu** |
| $\\ce{V^3+}$ | $3d^2$ | **Hijau** (Ion $\\ce{VO^2+}$ biru, $\\ce{VO2+}$ kuning) |
| $\\ce{Cr^3+}$ | $3d^3$ | **Hijau-Violet** ($\\ce{CrO4^2-}$ kuning, $\\ce{Cr2O7^2-}$ oranye) |
| $\\ce{Mn^2+}$ | $3d^5$ | **Merah Muda Pucat** ($\\ce{MnO4-}$ ungu pekat) |
| $\\ce{Fe^2+}$ | $3d^6$ | **Hijau Muda** |
| $\\ce{Fe^3+}$ | $3d^5$ | **Kuning-Cokelat** |
| $\\ce{Co^2+}$ | $3d^7$ | **Merah Muda (Pink)** |
| $\\ce{Ni^2+}$ | $3d^8$ | **Hijau Zamrud** |
| $\\ce{Cu^2+}$ | $3d^9$ | **Biru Terang** |
| $\\ce{Zn^2+}$ | $3d^{10}$ | **Tidak Berwarna (Bening)** |

---

### 3. Sifat Kemagnetan Logam Transisi
Berdasarkan interaksinya dengan medan magnet eksternal:
1. **Diamagnetik:** Ditolak sangat lemah oleh medan magnet. Terjadi bila **seluruh elektron dalam atom/ion telah berpasangan sempurna** (misal $\\ce{Zn, Zn^2+}, \\ce{Sc^3+}$).
2. **Paramagnetik:** Ditarik oleh medan magnet. Terjadi bila terdapat **satu atau lebih elektron yang tidak berpasangan** pada orbitalnya. Semakin banyak jumlah elektron tak berpasangan ($n$), semakin kuat sifat paramagnetiknya.
   - **Momen Magnetik Spin Murni (*Spin-Only Magnetic Moment*):**
     $$\\mathbf{\\mu_s = \\sqrt{n(n + 2)} \\quad \\text{BM (Bohr Magneton)}}$$
     *(Contoh: $\\ce{Fe^3+}$ dengan $3d^5$ memiliki $n = 5$ elektron tak berpasangan $\\implies \\mu_s = \\sqrt{5(7)} = \\sqrt{35} \\approx 5.92\\text{ BM}$)*.
3. **Feromagnetik:** Ditarik sangat kuat permanen oleh medan magnet dan dapat dijadikan magnet permanen (hanya dimiliki oleh logam $\\ce{Fe, Co, Ni}$).

---

### 4. Diagram Palet Spektrum Warna Ion Transisi & Transisi d-d

<svg viewBox="0 0 760 340" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <!-- Header -->
  <rect x="0" y="0" width="760" height="42" fill="#0f172a" rx="10"/>
  <text x="380" y="26" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">PALET WARNA ION TRANSISI PERIODE 4 & MEKANISME TRANSISI d-d (CFT)</text>

  <!-- PANEL KIRI: Palet Warna Ion (x=15..410) -->
  <g transform="translate(15, 50)">
    <rect x="0" y="0" width="395" height="275" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="197" y="22" fill="#1e293b" font-size="11.5" font-weight="bold" text-anchor="middle">Palet Warna Spektral Ion Logam Transisi di Air</text>

    <!-- Baris 1: Sc3+, Ti3+, V3+, Cr3+, Mn2+ -->
    <rect x="15" y="40" width="65" height="55" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="47" y="60" fill="#64748b" font-size="9" font-weight="bold" text-anchor="middle">Sc³⁺ (d⁰)</text>
    <text x="47" y="78" fill="#94a3b8" font-size="7.5" text-anchor="middle">Bening</text>

    <rect x="90" y="40" width="65" height="55" rx="4" fill="#f3e8ff" stroke="#a855f7"/>
    <text x="122" y="60" fill="#7e22ce" font-size="9" font-weight="bold" text-anchor="middle">Ti³⁺ (d¹)</text>
    <text x="122" y="78" fill="#9333ea" font-size="7.5" text-anchor="middle">Ungu</text>

    <rect x="165" y="40" width="65" height="55" rx="4" fill="#ecfdf5" stroke="#10b981"/>
    <text x="197" y="60" fill="#065f46" font-size="9" font-weight="bold" text-anchor="middle">V³⁺ (d²)</text>
    <text x="197" y="78" fill="#059669" font-size="7.5" text-anchor="middle">Hijau</text>

    <rect x="240" y="40" width="65" height="55" rx="4" fill="#f0fdf4" stroke="#22c55e"/>
    <text x="272" y="60" fill="#166534" font-size="9" font-weight="bold" text-anchor="middle">Cr³⁺ (d³)</text>
    <text x="272" y="78" fill="#15803d" font-size="7.5" text-anchor="middle">Hijau-Violet</text>

    <rect x="315" y="40" width="65" height="55" rx="4" fill="#fdf2f8" stroke="#ec4899"/>
    <text x="347" y="60" fill="#9d174d" font-size="9" font-weight="bold" text-anchor="middle">Mn²⁺ (d⁵)</text>
    <text x="347" y="78" fill="#db2777" font-size="7.5" text-anchor="middle">Pink Pucat</text>

    <!-- Baris 2: Fe2+, Fe3+, Co2+, Ni2+, Cu2+, Zn2+ -->
    <rect x="15" y="105" width="58" height="55" rx="4" fill="#f0fdf4" stroke="#4ade80"/>
    <text x="44" y="125" fill="#166534" font-size="8.5" font-weight="bold" text-anchor="middle">Fe²⁺ (d⁶)</text>
    <text x="44" y="142" fill="#15803d" font-size="7" text-anchor="middle">Hijau Muda</text>

    <rect x="78" y="105" width="58" height="55" rx="4" fill="#fef3c7" stroke="#f59e0b"/>
    <text x="107" y="125" fill="#92400e" font-size="8.5" font-weight="bold" text-anchor="middle">Fe³⁺ (d⁵)</text>
    <text x="107" y="142" fill="#b45309" font-size="7" text-anchor="middle">Kuning-Cokelat</text>

    <rect x="141" y="105" width="58" height="55" rx="4" fill="#ffe4e6" stroke="#f43f5e"/>
    <text x="170" y="125" fill="#9f1239" font-size="8.5" font-weight="bold" text-anchor="middle">Co²⁺ (d⁷)</text>
    <text x="170" y="142" fill="#e11d48" font-size="7" text-anchor="middle">Merah Pink</text>

    <rect x="204" y="105" width="58" height="55" rx="4" fill="#ecfdf5" stroke="#34d399"/>
    <text x="233" y="125" fill="#065f46" font-size="8.5" font-weight="bold" text-anchor="middle">Ni²⁺ (d⁸)</text>
    <text x="233" y="142" fill="#059669" font-size="7" text-anchor="middle">Hijau Zamrud</text>

    <rect x="267" y="105" width="58" height="55" rx="4" fill="#e0f2fe" stroke="#0284c7"/>
    <text x="296" y="125" fill="#0369a1" font-size="8.5" font-weight="bold" text-anchor="middle">Cu²⁺ (d⁹)</text>
    <text x="296" y="142" fill="#0284c7" font-size="7" text-anchor="middle">Biru Terang</text>

    <rect x="330" y="105" width="50" height="55" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="355" y="125" fill="#64748b" font-size="8.5" font-weight="bold" text-anchor="middle">Zn²⁺ (d¹⁰)</text>
    <text x="355" y="142" fill="#94a3b8" font-size="7" text-anchor="middle">Bening</text>

    <!-- Kotak Ringkasan Bawah -->
    <rect x="15" y="175" width="365" height="85" rx="5" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="197" y="195" fill="#1e293b" font-size="9" font-weight="bold" text-anchor="middle">Kaidah Kunci Munculnya Warna Ion Transisi:</text>
    <text x="25" y="215" fill="#166534" font-size="8">✓ Warna MUNCUL jika subkulit d terisi sebagian (d¹ s.d. d⁹).</text>
    <text x="25" y="232" fill="#dc2626" font-size="8">✗ TIDAK BERWARNA jika d kosong (d⁰, misal Sc³⁺) atau d penuh (d¹⁰, misal Zn²⁺)!</text>
    <text x="25" y="249" fill="#0284c7" font-size="8">Oksianion MnO₄⁻ (ungu) &amp; Cr₂O₇²⁻ (oranye) berwarna via Transfer Muatan (LMCT).</text>
  </g>

  <!-- PANEL KANAN: Pembelahan CFT Orbital d (x=425..745) -->
  <g transform="translate(425, 50)">
    <rect x="0" y="0" width="320" height="275" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="160" y="22" fill="#1e293b" font-size="11.5" font-weight="bold" text-anchor="middle">Mekanisme Transisi d-d (Teori CFT)</text>

    <!-- Orbital Ion Bebas (Degenerate, 5 kotak di kiri) -->
    <text x="45" y="150" fill="#64748b" font-size="8.5" font-weight="bold">Ion Bebas</text>
    <line x1="30" y1="160" x2="80" y2="160" stroke="#64748b" stroke-width="3"/>
    <text x="55" y="175" fill="#64748b" font-size="7.5" text-anchor="middle">5 orbital d setara</text>

    <!-- Panah Pembelahan -->
    <line x1="85" y1="160" x2="135" y2="160" stroke="#94a3b8" stroke-dasharray="3 2"/>

    <!-- Orbital Atas: e_g (2 orbital dx2-y2, dz2) -->
    <line x1="150" y1="100" x2="220" y2="100" stroke="#dc2626" stroke-width="3"/>
    <text x="230" y="104" fill="#dc2626" font-size="9" font-weight="bold">e_g</text>
    <circle cx="170" cy="100" r="4" fill="#dc2626" stroke="#ffffff"/>

    <!-- Orbital Bawah: t_2g (3 orbital dxy, dyz, dxz) -->
    <line x1="150" y1="200" x2="250" y2="200" stroke="#2563eb" stroke-width="3"/>
    <text x="260" y="204" fill="#2563eb" font-size="9" font-weight="bold">t_2g</text>
    <circle cx="170" cy="200" r="4" fill="#2563eb"/>
    <circle cx="200" cy="200" r="4" fill="#2563eb"/>

    <!-- Panah Foton Eksitasi Loncat ke Atas -->
    <line x1="170" y1="192" x2="170" y2="108" stroke="#ea580c" stroke-width="2"/>
    <polygon points="170,108 165,116 175,116" fill="#ea580c"/>
    <text x="140" y="155" fill="#ea580c" font-size="8.5" font-weight="bold">hν (Cahaya)</text>

    <!-- Celah Energi Δ_o -->
    <line x1="285" y1="100" x2="285" y2="200" stroke="#475569" stroke-width="1.5"/>
    <text x="295" y="155" fill="#475569" font-size="10" font-weight="bold">Δ_o</text>

    <!-- Kotak Rumus Kemagnetan Bawah -->
    <rect x="20" y="225" width="280" height="40" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
    <text x="160" y="240" fill="#1e40af" font-size="8.5" font-weight="bold" text-anchor="middle">Momen Magnetik Spin Murni (Paramagnetik):</text>
    <text x="160" y="255" fill="#1d4ed8" font-size="9" font-weight="bold" text-anchor="middle">μ_s = √[n(n + 2)]  BM  (n = elektron tak berpasangan)</text>
  </g>
</svg>`,
        keyFormulas: [
          { name: 'Momen Magnetik Spin Murni (Bohr Magneton)', formula: '\\mu_s = \\sqrt{n(n + 2)} \\quad \\text{BM}' },
          { name: 'Syarat Warna Transisi d-d', formula: '\\text{Subkulit } 3d^1 \\text{ s.d. } 3d^9 \\implies \\text{Berwarna}; \\quad 3d^0, 3d^{10} \\implies \\text{Bening}' },
          { name: 'Anomali Konfigurasi Kromium dan Tembaga', formula: '\\ce{Cr}: [\\ce{Ar}] 4s^1 3d^5 \\quad (d^5 \\text{ stabil}), \\quad \\ce{Cu}: [\\ce{Ar}] 4s^1 3d^{10} \\quad (d^{10} \\text{ stabil})' },
        ],
      },
      {
        tag: 'proses-metalurgi-ekstraksi-industri-kimia-anorganik',
        tags: ['metalurgi-ekstraksi', 'proses-hall-heroult', 'tanur-tiup-besi-blast-furnace', 'proses-frasch-belerang', 'proses-kontak-asam-sulfat', 'proses-haber-bosch'],
        title: 'Konsep Inti 5: Proses Metalurgi & Ekstraksi Kimia Industri: Hall-Héroult, Tanur Tiup, Frasch, Kontak, dan Haber-Bosch',
        summary: 'Teknologi reduksi tanur tiup bijih besi hematit, elektrolisis Hall-Héroult aluminium dalam kriolit cair, penambangan belerang Frasch, dan sintesis Kontak H2SO4.',
        content: `Sebagian besar unsur logam dan non-logam di alam terikat kuat dalam bentuk mineral bijih (oksida, sulfida, karbonat, atau silikat). **Metalurgi** adalah cabang ilmu terapan yang mengkaji teknik ekstraksi, pemurnian, dan pengolahan logam dari bijih alamiahnya menuju produk industri siap pakai.

### 1. Ikhtisar Enam Proses Ekstraksi & Rekayasa Kimia Industri Terpenting

| Nama Proses Industri | Produk Utama | Bahan Baku / Bijih Alam | Prinsip / Katalis Kunci |
| :--- | :--- | :--- | :--- |
| **Proses Hall-Héroult** | **Aluminium ($\\ce{Al}$)** | Bauksit ($\\ce{Al2O3 \\cdot 2H2O}$) | Elektrolisis lelehan alumina dalam pelarut kriolit cair ($\\ce{Na3AlF6}$) pada $\\sim 950^\\circ\\text{C}$ elektroda karbon |
| **Proses Tanur Tiup (*Blast Furnace*)** | **Besi Kasar (*Pig Iron* / $\\ce{Fe}$)** | Hematit ($\\ce{Fe2O3}$), kokas ($\\ce{C}$), batu kapur ($\\ce{CaCO3}$) | Reduksi bertingkat oleh gas $\\ce{CO}$ panas; batu kapur mengikat terak silika $\\ce{CaSiO3}$ |
| **Proses Frasch** | **Belerang Murni ($\\ce{S}$)** | Deposit belerang bawah tanah | Pelelehan belerang oleh air lewat-panas ($160^\\circ\\text{C}, 16\\text{ atm}$) dan pompa udara tekan |
| **Proses Kontak** | **Asam Sulfat ($\\ce{H2SO4}$)** | Belerang ($\\ce{S}$), udara ($\\ce{O2}$), air | Oksidasi $\\ce{SO2 -> SO3}$ dengan **katalis $\\ce{V2O5}$** pada $450^\\circ\\text{C}$, dilarutkan jadi oleum |
| **Proses Haber-Bosch** | **Amonia ($\\ce{NH3}$)** | Gas nitrogen ($\\ce{N2}$), gas hidrogen ($\\ce{H2}$) | Sintesis gas eksotermik bertekanan tinggi ($150-250\\text{ atm}$), $450^\\circ\\text{C}$, dengan **katalis besi ($\\ce{Fe}$)** |
| **Proses Downs** | **Natrium Murni ($\\ce{Na}$) & $\\ce{Cl2}$** | Garam batu halit ($\\ce{NaCl}$) | Elektrolisis lelehan $\\ce{NaCl}$ murni dicampur $\\ce{CaCl2}$ untuk menurunkan titik leleh ($801^\\circ\\text{C} \\to 580^\\circ\\text{C}$) |

---

### 2. Rekayasa Kimia Tanur Tiup Besi (*Blast Furnace*)
Tanur tiup merupakan reaktor raksasa setinggi puluhan meter yang bekerja secara kontinu:
1. **Pembakaran Kokas Menghasilkan Gas Pereduksi:**
   $$\\ce{C(s) + O2(g) -> CO2(g)}$$
   $$\\ce{CO2(g) + C(s) -> 2CO(g)} \\quad (\\text{gas pereduksi utama})$$
2. **Reduksi Bertingkat Bijih Besi Hematit:**
   - Di bagian atas ($400 - 700^\\circ\\text{C}$):
     $$\\ce{3Fe2O3 + CO -> 2Fe3O4 + CO2}$$
   - Di bagian tengah ($700 - 1000^\\circ\\text{C}$):
     $$\\ce{Fe3O4 + CO -> 3FeO + CO2}$$
   - Di bagian bawah ($> 1000^\\circ\\text{C}$, reduksi tuntas menghasilkan cairan besi):
     $$\\mathbf{\\ce{FeO + CO -> Fe(l) + CO2}}$$
     $$\\text{Reaksi Bersih Total: } \\mathbf{\\ce{Fe2O3(s) + 3CO(g) -> 2Fe(l) + 3CO2(g)}}$$
3. **Pembentukan Terak (*Slag*) Pengikat Pengotor Silika:**
   Batu kapur ($\\ce{CaCO3}$) terurai oleh panas menjadi kalsium oksida ($\\ce{CaO}$) yang mengikat pengotor pasir silika ($\\ce{SiO2}$) membentuk terak cair kalsium silikat:
   $$\\ce{CaCO3(s) -> CaO(s) + CO2(g)}$$
   $$\\mathbf{\\ce{CaO(s) + SiO2(s) -> CaSiO3(l)} \\quad (\\text{Terak Cair / Slag})}$$
   Terak cair memiliki massa jenis lebih kecil daripada cairan besi sehingga mengapung di lapisan atas, melindungi besi cair dari oksidasi ulang oleh udara!

---

### 3. Rekayasa Proses Hall-Héroult (Isolasi Aluminium)
- Alumina murni ($\\ce{Al2O3}$) memiliki titik leleh yang teramat tinggi ($> 2050^\\circ\\text{C}$), sehingga mustahil dielektrolisis secara langsung secara ekonomis.
- **Peran Revolusioner Kriolit ($\\ce{Na3AlF6}$):** Penambahan kriolit cair berfungsi sebagai **pelarut alumina** yang menurunkan titik leleh campuran secara dramatis menjadi sekitar **$950^\\circ\\text{C}$** dan meningkatkan konduktivitas listrik lelehan!
- **Reaksi Sel Elektrolisis:**
  - Katoda Karbon: $\\ce{Al^3+ + 3e- -> Al(l)}$ (cairan logam aluminium mengendap di dasar sel).
  - Anoda Karbon: $\\ce{2O^2- -> O2(g) + 4e-}$. Gas oksigen yang terbentuk pada suhu tinggi langsung mengikis anoda karbon menjadi gas karbon dioksida:
    $$\\ce{C(s) + O2(g) -> CO2(g)}$$
    Oleh sebab itu, batang anoda karbon harus diganti secara berkala.

---

### 4. Diagram Infografis Komparatif Tanur Tiup Besi & Sel Hall-Héroult

<svg viewBox="0 0 760 340" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <!-- Header -->
  <rect x="0" y="0" width="760" height="42" fill="#0f172a" rx="10"/>
  <text x="380" y="26" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">REKAYASA METALURGI INDUSTRI: TANUR TIUP BESI (BLAST FURNACE) & SEL HALL-HÉROULT</text>

  <!-- PANEL KIRI: Tanur Tiup Besi (x=15..380) -->
  <g transform="translate(15, 50)">
    <rect x="0" y="0" width="365" height="275" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="182" y="22" fill="#1e293b" font-size="11" font-weight="bold" text-anchor="middle">1. Tanur Tiup Besi Kasar (Blast Furnace)</text>

    <!-- Silinder Reaktor Tanur Tiup -->
    <polygon points="120,40 245,40 265,140 230,220 135,220 100,140" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
    <text x="182" y="55" fill="#991b1b" font-size="8" font-weight="bold" text-anchor="middle">Input: Fe₂O₃ + C + CaCO₃</text>

    <!-- Zona-zona Suhu -->
    <text x="182" y="90" fill="#b91c1c" font-size="7.5" text-anchor="middle">400-700°C: Reduksi Awal</text>
    <text x="182" y="130" fill="#991b1b" font-size="8" font-weight="bold" text-anchor="middle">Fe₂O₃ + 3CO ➔ 2Fe + 3CO₂</text>
    <text x="182" y="165" fill="#b91c1c" font-size="7.5" text-anchor="middle">&gt;1000°C: Pembentukan Terak</text>
    <text x="182" y="180" fill="#991b1b" font-size="8" font-weight="bold" text-anchor="middle">CaO + SiO₂ ➔ CaSiO₃ (Terak)</text>

    <!-- Lapisan Bawah: Terak dan Cairan Besi -->
    <!-- Terak (Atas) -->
    <rect x="138" y="195" width="89" height="12" fill="#fed7aa"/>
    <text x="182" y="204" fill="#9a3412" font-size="7" font-weight="bold" text-anchor="middle">Terak Cair (CaSiO₃)</text>
    <!-- Besi Kasar (Dasar) -->
    <rect x="140" y="207" width="85" height="12" fill="#94a3b8"/>
    <text x="182" y="216" fill="#1e293b" font-size="7" font-weight="bold" text-anchor="middle">Besi Cair (Pig Iron)</text>

    <!-- Output Bawah -->
    <text x="70" y="205" fill="#ea580c" font-size="8" font-weight="bold">Terak Keluar ➔</text>
    <text x="70" y="220" fill="#1e293b" font-size="8" font-weight="bold">Besi Kasar ➔</text>

    <!-- Kotak Ringkasan -->
    <rect x="15" y="235" width="335" height="28" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="182" y="253" fill="#1e293b" font-size="8" font-weight="bold" text-anchor="middle">Fungsi CaCO₃: Mengikat pengotor pasir silika menjadi terak CaSiO₃</text>
  </g>

  <!-- PANEL KANAN: Sel Hall-Héroult Aluminium (x=395..745) -->
  <g transform="translate(395, 50)">
    <rect x="0" y="0" width="350" height="275" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="175" y="22" fill="#1e293b" font-size="11" font-weight="bold" text-anchor="middle">2. Sel Hall-Héroult (Isolasi Aluminium)</text>

    <!-- Bak Elektrolisis (Katoda Karbon) -->
    <rect x="35" y="55" width="280" height="150" rx="6" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
    <rect x="40" y="85" width="270" height="115" fill="#fef08a" stroke="#ca8a04" opacity="0.4"/>
    <text x="175" y="100" fill="#854d0e" font-size="8.5" font-weight="bold" text-anchor="middle">Lelehan Al₂O₃ dalam Kriolit Cair (Na₃AlF₆)</text>
    <text x="175" y="115" fill="#a16207" font-size="7.5" text-anchor="middle">(Temperatur Operasional ~950°C)</text>

    <!-- Batang Anoda Karbon Menggantung (3 batang) -->
    <rect x="80" y="40" width="25" height="85" fill="#475569" rx="2"/>
    <rect x="160" y="40" width="25" height="85" fill="#475569" rx="2"/>
    <rect x="240" y="40" width="25" height="85" fill="#475569" rx="2"/>
    <text x="172" y="35" fill="#dc2626" font-size="8.5" font-weight="bold" text-anchor="middle">Batang Anoda Karbon (+)</text>

    <!-- Cairan Aluminium Murni Mengendap di Dasar (Katoda) -->
    <rect x="40" y="175" width="270" height="25" fill="#cbd5e1"/>
    <text x="175" y="192" fill="#1e293b" font-size="9" font-weight="bold" text-anchor="middle">Cairan Logam Al Murni (Al³⁺ + 3e⁻ ➔ Al)</text>

    <!-- Label Katoda Dinding Bak -->
    <text x="175" y="215" fill="#0284c7" font-size="8" font-weight="bold" text-anchor="middle">Katoda Karbon Lapisan Bak (-)</text>

    <!-- Kotak Ringkasan Kriolit -->
    <rect x="20" y="228" width="310" height="35" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
    <text x="175" y="244" fill="#1e40af" font-size="8" font-weight="bold" text-anchor="middle">Peran Krusial Kriolit (Na₃AlF₆):</text>
    <text x="175" y="256" fill="#1d4ed8" font-size="7.5" text-anchor="middle">Menurunkan titik leleh Al₂O₃ dari 2050°C ke 950°C &amp; hemat energi!</text>
  </g>
</svg>`,
        keyFormulas: [
          { name: 'Reduksi Bersih Tanur Tiup Besi', formula: '\\ce{Fe2O3(s) + 3CO(g) -> 2Fe(l) + 3CO2(g)}' },
          { name: 'Pembentukan Terak Silika Slag', formula: '\\ce{CaO(s) + SiO2(s) -> CaSiO3(l)}' },
          { name: 'Reduksi Katoda Hall-Heroult', formula: '\\ce{Al^3+ + 3e- -> Al(l)} \\quad (\\text{Pelarut Kriolit } \\ce{Na3AlF6})' },
          { name: 'Katalis Kunci Kontak dan Haber-Bosch', formula: '\\text{Kontak (H}_2\\text{SO}_4\\text{)} = \\ce{V2O5}, \\quad \\text{Haber-Bosch (NH}_3\\text{)} = \\ce{Fe}' },
        ],
      },
    {
      tag: 'pengayaan-kimia-koordinasi-distorsi-jahn-teller',
      tags: [
        'distorsi-jahn-teller',
        'teorema-jahn-teller',
        'kompleks-tembaga',
        'distorsi-tetragonal',
        'medan-kristal-oktahedral',
        'd9-ion',
        'kimia-koordinasi'
      ],
      title: 'Pengayaan HOTS/OSN: Teorema Distorsi Oktahedral Jahn-Teller pada Kompleks Logam Transisi',
      summary: 'Kajian mekanika kuantum dan teori medan kristal terkait teorema Jahn-Teller pada ion kompleks koordinasi berkonfigurasi d9 (seperti Cu(II)) yang memicu pemanjangan tetragonal ikatan aksial z-out.',
      content: `Dalam kimia anorganik dan teori medan kristal (CFT), simetri geometri kompleks ion transisi dapat mengalami deformasi spontan:

### 1. Teorema Jahn-Teller

Dirumuskan oleh Hermann Jahn dan Edward Teller (1937):  
**"Setiap sistem molekul nonlinear yang berada dalam keadaan elektronik dasar terdegenerasi (memiliki energi setara pada orbital yang terisi asimetris) secara termodinamika tidak stabil dan akan mengalami distorsi geometris untuk menurunkan simetrinya dan memecah degenerasi energi tersebut."**

---

### 2. Distorsi Tetragonal pada Ion Kompleks $\\ce{Cu^2+}$ ($d^9$)

Ion tembaga(II) memiliki konfigurasi elektron valensi $[\\ce{Ar}]\\,3d^9$. Dalam medan ligan oktahedral ($O_h$), 5 orbital $d$ terpecah menjadi tingkat energi $t_{2g}$ ($d_{xy}, d_{xz}, d_{yz}$) dan $e_g$ ($d_{z^2}, d_{x^2-y^2}$):
- Konfigurasi elektron: $(t_{2g})^6 (e_g)^3$.
- Orbital $e_g$ terisi tidak simetris (satu orbital terisi 2 elektron dan orbital lainnya hanya 1 elektron).

---

### 3. Pemanjangan Aksial (*Z-Out Elongation*)

Untuk menurunkan energi total sistem, kompleks mengalami pemanjangan ikatan pada sumbu $z$:
1. Dua ligan trans pada sumbu $z$ menjauh dari ion pusat $\\ce{Cu^2+}$.
2. Tolakan elektrostatik elektron ligan terhadap orbital yang mengandung komponen $z$ ($d_{z^2}, d_{xz}, d_{yz}$) berkurang drastis, sehingga energinya **turun**.
3. Sebaliknya, empat ligan pada bidang ekuator $xy$ mendekat sedikit, menaikkan tingkat energi orbital $d_{x^2-y^2}$ dan $d_{xy}$.
4. Karena orbital $d_{z^2}$ yang berenergi lebih rendah diisi oleh sepasang elektron ($2 e^-$) dan $d_{x^2-y^2}$ hanya diisi oleh $1 e^-$, sistem mengalami **penurunan energi bersih (stabilisasi Jahn-Teller)**.
- **Manifestasi Eksperimental:** Pada ion heksaaquotembaga(II) $[\\ce{Cu(H2O)6}]^2+$, empat ikatan $\\ce{Cu-O}$ bidang ekuator berjarak $\\approx 197\\text{ pm}$, sedangkan dua ikatan aksial memanjang secara signifikan menjadi $\\approx 230\\text{ pm}$.`,
      keyFormulas: [
        { name: 'Teorema Jahn-Teller', formula: '\\text{Degenerate State} \\implies \\text{Spontaneous Geometric Distortion} (O_h \\to D_{4h})' },
        { name: 'Distorsi Z-Out Cu(II)', formula: 'R_{\\text{aksial}}(\\ce{Cu-L}) > R_{\\text{ekuatorial}}(\\ce{Cu-L}) \\quad (d_{z^2}^2 \\, d_{x^2-y^2}^1)' }
      ]
    },
    ],
    worked_examples: [
      {
        tag: 'contoh-reaksi-pendesakan-halogen-redoks',
        tags: ['pendesakan-halogen', 'daya-oksidator-viia', 'spontanitas-redoks-halida', 'potensial-e-standar'],
        title: 'Contoh Soal 1: Evaluasi Spontanitas Reaksi Pendesakan Halogen & Bukti Potensial Reduksi',
        summary: 'Analisis teoretis dan pembuktian matematis reaksi pendesakan halogen dalam larutan halida berdasarkan potensial reduksi standar E°.',
        content: `### Soal:
Diberikan empat buah tabung reaksi yang masing-masing berisi campuran pereaksi halogen dan garam halida berikut:
- **Tabung 1:** Gas klorin ($\\ce{Cl2}$) dialirkan ke dalam larutan natrium bromida ($\\ce{NaBr}$).
- **Tabung 2:** Cairan bromin ($\\ce{Br2}$) diteteskan ke dalam larutan natrium klorida ($\\ce{NaCl}$).
- **Tabung 3:** Gas klorin ($\\ce{Cl2}$) dialirkan ke dalam larutan kalium iodida ($\\ce{KI}$).
- **Tabung 4:** Padatan iodin ($\\ce{I2}$) dicampurkan ke dalam larutan natrium fluorida ($\\ce{NaF}$).

Diketahui data potensial reduksi standar ($E^\\circ$):
- $\\ce{F2 + 2e- -> 2F-} \\qquad E^\\circ = +2.87\\text{ V}$
- $\\ce{Cl2 + 2e- -> 2Cl-} \\qquad E^\\circ = +1.36\\text{ V}$
- $\\ce{Br2 + 2e- -> 2Br-} \\qquad E^\\circ = +1.07\\text{ V}$
- $\\ce{I2 + 2e- -> 2I-} \\qquad E^\\circ = +0.54\\text{ V}$

**Pertanyaan:**
a. Tentukan tabung mana saja yang reaksinya berlangsung secara **spontan** dan tabung mana yang **tidak bereaksi**!
b. Tuliskan persamaan reaksi ion bersih yang setara untuk reaksi yang berlangsung spontan, serta sebutkan perubahan warna fisik larutannya!
c. Buktikan secara matematis spontanitas reaksi pada Tabung 1 dengan menghitung nilai $E^\\circ_{\\text{sel}}$ reaksinya!

---

### Pembahasan Terstruktur:

#### Bagian a: Evaluasi Spontanitas Pendesakan Halogen
Berdasarkan aturan pendesakan halogen: Halogen bebas ($X_2$) hanya dapat mendesak ion halida ($Y^-$) jika halogen $X_2$ terletak **di atas** halogen $Y_2$ pada golongan VIIA ($E^\\circ_{X_2} > E^\\circ_{Y_2}$):
- **Tabung 1 ($\\ce{Cl2 + NaBr}$):** $\\ce{Cl}$ berada di atas $\\ce{Br}$ ($E^\\circ_{\\ce{Cl2}} = +1.36\\text{ V} > E^\\circ_{\\ce{Br2}} = +1.07\\text{ V}$) $\\implies$ **Spontan Bereaksi**.
- **Tabung 2 ($\\ce{Br2 + NaCl}$):** $\\ce{Br}$ berada di bawah $\\ce{Cl}$ ($E^\\circ_{\\ce{Br2}} = +1.07\\text{ V} < E^\\circ_{\\ce{Cl2}} = +1.36\\text{ V}$) $\\implies$ **Tidak Bereaksi (Non-spontan)**.
- **Tabung 3 ($\\ce{Cl2 + KI}$):** $\\ce{Cl}$ berada di atas $\\ce{I}$ ($E^\\circ_{\\ce{Cl2}} = +1.36\\text{ V} > E^\\circ_{\\ce{I2}} = +0.54\\text{ V}$) $\\implies$ **Spontan Bereaksi**.
- **Tabung 4 ($\\ce{I2 + NaF}$):** $\\ce{I}$ berada jauh di bawah $\\ce{F}$ ($E^\\circ_{\\ce{I2}} = +0.54\\text{ V} \\ll E^\\circ_{\\ce{F2}} = +2.87\\text{ V}$) $\\implies$ **Tidak Bereaksi (Non-spontan)**.

---

#### Bagian b: Persamaan Reaksi Ion Bersih & Gejala Fisik
1. **Tabung 1:**
   $$\\mathbf{\\ce{Cl2(g) + 2Br-(aq) -> 2Cl-(aq) + Br2(aq)}}$$
   - *Perubahan Fisik:* Larutan yang semula bening jernih berubah menjadi berwarna **kuning-jingga hingga cokelat kemerahan** akibat terbentuknya molekul bromin ($\\ce{Br2}$) terlarut.
2. **Tabung 3:**
   $$\\mathbf{\\ce{Cl2(g) + 2I-(aq) -> 2Cl-(aq) + I2(s)}}$$
   - *Perubahan Fisik:* Terbentuk larutan berwarna **cokelat tua** dan endapan padatan kristal iodin ($\\ce{I2}$) yang berwarna ungu-kehitaman.

---

#### Bagian c: Pembuktian Matematis Potensial Sel Tabung 1
Reaksi pada Tabung 1 tersusun atas:
- Reduksi: $\\ce{Cl2 + 2e- -> 2Cl-} \\qquad E^\\circ = +1.36\\text{ V}$
- Oksidasi: $\\ce{2Br- -> Br2 + 2e-} \\qquad E^\\circ = -1.07\\text{ V}$

Potensial sel reaksi:
$$E^\\circ_{\\text{sel}} = E^\\circ_{\\text{reduksi}} - E^\\circ_{\\text{oksidasi}} = (+1.36\\text{ V}) - (+1.07\\text{ V}) = \\mathbf{+0.29\\text{ Volt}}$$

> **Kesimpulan:**
> Karena $E^\\circ_{\\text{sel}} = +0.29\\text{ V} > 0$ (bernilai positif), reaksi pendesakan bromida oleh gas klorin terbukti secara termodinamika **berlangsung spontan**.`,
      },
      {
        tag: 'contoh-amfoterisme-aluminium-hidroksida-stoikiometri',
        tags: ['amfoterisme-aloh3', 'stoikiometri-larutan-asam-basa', 'reaksi-aluminium', 'volume-pereaksi-minimum'],
        title: 'Contoh Soal 2: Karakter Amfoter Aluminium Hidroksida & Kalkulasi Stoikiometri Kelarutan Asam-Basa',
        summary: 'Perhitungan stoikiometri kuantitatif pelarutan endapan amfoter Al(OH)3 dalam larutan HCl vs larutan NaOH pekat.',
        content: `### Soal:
Sebanyak $7.80\\text{ gram}$ endapan putih gelatin aluminium hidroksida ($\\ce{Al(OH)3}$, $M_r = 78.00\\text{ g/mol}$) dibagi sama rata menjadi dua bagian yang identik (masing-masing bermassa $3.90\\text{ gram}$):
- **Bagian A:** Dilarutkan dengan menambahkan larutan asam klorida ($\\ce{HCl } 1.50\\text{ M}$).
- **Bagian B:** Dilarutkan dengan menambahkan larutan natrium hidroksida ($\\ce{NaOH } 1.00\\text{ M}$).

**Tentukan:**
a. Persamaan reaksi setara lengkap yang terjadi pada Bagian A dan Bagian B!
b. Volume minimum larutan $\\ce{HCl } 1.50\\text{ M}$ (dalam $\\text{mL}$) yang diperlukan agar seluruh endapan pada Bagian A larut sempurna!
c. Volume minimum larutan $\\ce{NaOH } 1.00\\text{ M}$ (dalam $\\text{mL}$) yang diperlukan agar seluruh endapan pada Bagian B larut sempurna membentuk ion kompleks tetrahidroksoaluminat!

---

### Pembahasan Langkah demi Langkah:

#### Langkah 1: Menghitung Mol $\\ce{Al(OH)3}$ pada Masing-Masing Bagian
Massa pada tiap bagian: $m = 3.90\\text{ gram}$.
$$n_{\\ce{Al(OH)3}} = \\frac{\\text{massa}}{M_r} = \\frac{3.90\\text{ g}}{78.00\\text{ g/mol}} = \\mathbf{0.050\\text{ mol}}$$

---

#### Bagian a: Persamaan Reaksi Setara
1. **Bagian A (Sebagai Basa terhadap Asam Kuat):**
   $$\\mathbf{\\ce{Al(OH)3(s) + 3HCl(aq) -> AlCl3(aq) + 3H2O(l)}}$$
   *(atau bentuk ion: $\\ce{Al(OH)3(s) + 3H+(aq) -> Al^3+(aq) + 3H2O(l)}$)*.
2. **Bagian B (Sebagai Asam terhadap Basa Kuat):**
   $$\\mathbf{\\ce{Al(OH)3(s) + NaOH(aq) -> Na[Al(OH)4](aq)}}$$
   *(atau bentuk ion: $\\ce{Al(OH)3(s) + OH-(aq) -> [Al(OH)4]-(aq)}$)*.

---

#### Bagian b: Volume Minimum Larutan $\\ce{HCl } 1.50\\text{ M}$
Berdasarkan perbandingan koefisien reaksi Bagian A:
$$1\\text{ mol } \\ce{Al(OH)3} \\equiv 3\\text{ mol } \\ce{HCl}$$
$$n_{\\ce{HCl}} = 3 \\times n_{\\ce{Al(OH)3}} = 3 \\times 0.050\\text{ mol} = \\mathbf{0.150\\text{ mol } \\ce{HCl}}$$

Volume larutan $\\ce{HCl}$:
$$V_{\\ce{HCl}} = \\frac{n_{\\ce{HCl}}}{M} = \\frac{0.150\\text{ mol}}{1.50\\text{ mol/L}} = 0.100\\text{ Liter} = \\mathbf{100.0\\text{ mL}}$$

---

#### Bagian c: Volume Minimum Larutan $\\ce{NaOH } 1.00\\text{ M}$
Berdasarkan perbandingan koefisien reaksi Bagian B:
$$1\\text{ mol } \\ce{Al(OH)3} \\equiv 1\\text{ mol } \\ce{NaOH}$$
$$n_{\\ce{NaOH}} = 1 \\times n_{\\ce{Al(OH)3}} = \\mathbf{0.050\\text{ mol } \\ce{NaOH}}$$

Volume larutan $\\ce{NaOH}$:
$$V_{\\ce{NaOH}} = \\frac{n_{\\ce{NaOH}}}{M} = \\frac{0.050\\text{ mol}}{1.00\\text{ mol/L}} = 0.050\\text{ Liter} = \\mathbf{50.0\\text{ mL}}$$

> **Evaluasi Konsep:**
> Untuk melarutkan jumlah endapan $\\ce{Al(OH)3}$ yang sama, dibutuhkan mol $\\ce{H+}$ tiga kali lebih banyak ($3:1$) dibandingkan mol $\\ce{OH-}$ ($1:1$), mencerminkan valensi aluminium ($+3$) dalam melepaskan tiga gugus hidroksida versus menangkap satu ligan hidroksida tambahan.`,
      },
      {
        tag: 'contoh-sifat-magnetik-ion-transisi-momen-spin-bm',
        tags: ['logam-transisi', 'konfigurasi-ion-transisi', 'momen-magnetik-spin', 'paramagnetik-diamagnetik', 'bohr-magneton'],
        title: 'Contoh Soal 3: Konfigurasi Elektron Ion Transisi Periode 4, Sifat Kemagnetan, dan Momen Magnetik Spin (BM)',
        summary: 'Penentuan konfigurasi elektron kation Cr3+, Fe2+, dan Zn2+, identifikasi elektron tak berpasangan, dan kalkulasi momen magnetik spin murni.',
        content: `### Soal:
Diberikan tiga jenis kation dari unsur logam transisi periode 4:
1. **Ion Kromium(III) ($\\ce{Cr^3+}$, nomor atom $Z = 24$)**
2. **Ion Besi(II) ($\\ce{Fe^2+}$, nomor atom $Z = 26$)**
3. **Ion Seng(II) ($\\ce{Zn^2+}$, nomor atom $Z = 30$)**

*(Konfigurasi elektron gas mulia Argon: $[\\ce{Ar}] = 1s^2 2s^2 2p^6 3s^2 3p^6$)*.

**Untuk masing-masing kation di atas, tentukan:**
a. Konfigurasi elektron subkulit $d$ kation tersebut!
b. Jumlah elektron yang tidak berpasangan ($n$) pada orbital $d$-nya!
c. Klasifikasi sifat kemagnetannya (apakah bersifat **paramagnetik** atau **diamagnetik**)!
d. Nilai momen magnetik spin murni ($\\mu_s$) dalam satuan Bohr Magneton (BM) dengan ketelitian dua desimal!

---

### Pembahasan Terstruktur:

#### 1. Ion Kromium(III) ($\\ce{Cr^3+}$, $Z = 24$)
- Atom netral $\\ce{Cr}$: $[\\ce{Ar}] 4s^1 3d^5$ (anomali setengah penuh).
- Pembentukan ion $\\ce{Cr^3+}$ melepas 3 elektron: 1 elektron dari $4s$ dan 2 elektron dari $3d$:
  $$\\mathbf{\\ce{Cr^3+}: [\\ce{Ar}] 3d^3}$$
- **Diagram Orbital $3d$:** Terdapat 3 orbital terisi tunggal ($\\uparrow$) ($\\uparrow$) ($\\uparrow$) ( ) ( ).
  - Jumlah elektron tak berpasangan: $\\mathbf{n = 3}$.
  - Sifat Kemagnetan: **Paramagnetik** (ditarik medan magnet).
  - **Momen Magnetik Spin ($\\mu_s$):**
    $$\\mu_s = \\sqrt{n(n + 2)} = \\sqrt{3(3 + 2)} = \\sqrt{15} \\approx \\mathbf{3.87\\text{ BM}}$$

---

#### 2. Ion Besi(II) ($\\ce{Fe^2+}$, $Z = 26$)
- Atom netral $\\ce{Fe}$: $[\\ce{Ar}] 4s^2 3d^6$.
- Pembentukan ion $\\ce{Fe^2+}$ melepas 2 elektron dari subkulit $4s$:
  $$\\mathbf{\\ce{Fe^2+}: [\\ce{Ar}] 3d^6}$$
- **Diagram Orbital $3d$:** Menurut Aturan Hund, 6 elektron mengisi 5 orbital:
  ($\\uparrow\\downarrow$) ($\\uparrow$) ($\\uparrow$) ($\\uparrow$) ($\\uparrow$).
  - Terdapat 1 orbital berpasangan dan 4 orbital terisi tunggal.
  - Jumlah elektron tak berpasangan: $\\mathbf{n = 4}$.
  - Sifat Kemagnetan: **Paramagnetik Kuat**.
  - **Momen Magnetik Spin ($\\mu_s$):**
    $$\\mu_s = \\sqrt{4(4 + 2)} = \\sqrt{24} \\approx \\mathbf{4.90\\text{ BM}}$$

---

#### 3. Ion Seng(II) ($\\ce{Zn^2+}$, $Z = 30$)
- Atom netral $\\ce{Zn}$: $[\\ce{Ar}] 4s^2 3d^{10}$.
- Pembentukan ion $\\ce{Zn^2+}$ melepas 2 elektron dari subkulit $4s$:
  $$\\mathbf{\\ce{Zn^2+}: [\\ce{Ar}] 3d^{10}}$$
- **Diagram Orbital $3d$:** Seluruh 5 orbital $d$ terisi penuh oleh pasangan elektron:
  ($\\uparrow\\downarrow$) ($\\uparrow\\downarrow$) ($\\uparrow\\downarrow$) ($\\uparrow\\downarrow$) ($\\uparrow\\downarrow$).
  - Jumlah elektron tak berpasangan: $\\mathbf{n = 0}$.
  - Sifat Kemagnetan: **Diamagnetik** (ditolak lemah oleh medan magnet).
  - **Momen Magnetik Spin ($\\mu_s$):**
    $$\\mu_s = \\sqrt{0(0 + 2)} = \\mathbf{0.00\\text{ BM}}$$

---

#### Tabel Rangkuman Hasil:

| Kation | Konfigurasi $3d$ | Elektron Tak Berpasangan ($n$) | Sifat Kemagnetan | Momen Spin ($\\mu_s$) | Warna Larutan |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **$\\ce{Cr^3+}$** | $3d^3$ | **$3$** | Paramagnetik | **$3.87\\text{ BM}$** | Hijau-Violet |
| **$\\ce{Fe^2+}$** | $3d^6$ | **$4$** | Paramagnetik | **$4.90\\text{ BM}$** | Hijau Muda |
| **$\\ce{Zn^2+}$** | $3d^{10}$ | **$0$** | Diamagnetik | **$0.00\\text{ BM}$** | Bening (Tidak Berwarna) |`,
      },
      {
        tag: 'contoh-stoikiometri-tanur-tiup-besi-dan-terak',
        tags: ['metalurgi-tanur-tiup', 'stoikiometri-reduksi-besi', 'kalkulasi-terak-casio3', 'hematit-kadar-kemurnian', 'olimpiade-anorganik'],
        title: 'Contoh Soal 4: Stoikiometri Rekayasa Metalurgi Tanur Tiup: Reduksi Bijih Hematit & Pembentukan Terak Silika',
        summary: 'Analisis kuantitatif reaksi reduksi 10 ton bijih besi hematit berkemurnian 80%, kebutuhan volume gas CO, dan massa batu kapur pengikat terak.',
        content: `### Soal:
Sebuah pabrik peleburan baja mengoperasikan tanur tiup (*blast furnace*) dengan memasukkan $10.00\\text{ ton}$ bijih besi hematit mentah.

Berdasarkan uji laboratorium, bijih hematit tersebut memiliki komposisi massa:
- **$80.0\\%$** besi(III) oksida murni ($\\ce{Fe2O3}$, $M_r = 159.70\\text{ g/mol}$)
- **$12.0\\%$** pengotor pasir silika ($\\ce{SiO2}$, $M_r = 60.08\\text{ g/mol}$)
- **$8.0\\%$** zat pengotor inert lainnya.

*(Diketahui: $A_r\\text{ Fe} = 55.85\\text{ g/mol}$, $M_r\\text{ CaCO3} = 100.09\\text{ g/mol}$, $M_r\\text{ CaSiO3} = 116.16\\text{ g/mol}$, volume molar gas pada $RTP, 25^\\circ\\text{C}, 1\\text{ atm} = 24.0\\text{ m}^3\\text{/kmol}$)*.

Reaksi utama yang terjadi di dalam tanur tiup:
1. $\\ce{Fe2O3(s) + 3CO(g) -> 2Fe(l) + 3CO2(g)}$
2. $\\ce{CaCO3(s) -> CaO(s) + CO2(g)}$
3. $\\ce{CaO(s) + SiO2(s) -> CaSiO3(l)} \\quad (\\text{Terak / Slag})$

**Hitung:**
a. Massa logam besi murni ($\\ce{Fe}$) dalam satuan **ton** yang dihasilkan secara teoretis dari tanur tiup tersebut!
b. Volume gas karbon monoksida ($\\ce{CO}$) minimum dalam satuan $\\text{m}^3$ (pada kondisi $RTP$) yang diperlukan untuk mereduksi seluruh hematit tersebut!
c. Massa minimum batu kapur ($\\ce{CaCO3}$) murni dalam satuan **ton** yang harus ditambahkan ke dalam tanur tiup agar seluruh pengotor silika $\\ce{SiO2}$ terikat sempurna menjadi terak cair $\\ce{CaSiO3}$!

---

### Pembahasan Matematis & Rekayasa Kimia Rigor:

#### Bagian a: Menghitung Massa Logam Besi Murni ($\\ce{Fe}$)
1. **Massa $\\ce{Fe2O3}$ murni dalam bijih:**
   $$m_{\\ce{Fe2O3}} = 80.0\\% \\times 10.00\\text{ ton} = \\mathbf{8.00\\text{ ton}} = 8.00 \\times 10^6\\text{ gram}$$
2. **Jumlah mol $\\ce{Fe2O3}$:**
   $$n_{\\ce{Fe2O3}} = \\frac{8.00 \\times 10^6\\text{ g}}{159.70\\text{ g/mol}} = 50094\\text{ mol} = \\mathbf{50.094\\text{ kmol}}$$
3. **Jumlah mol besi $\\ce{Fe}$ yang dihasilkan:**
   Berdasarkan koefisien reaksi: $1\\text{ mol } \\ce{Fe2O3} \\implies 2\\text{ mol } \\ce{Fe}$
   $$n_{\\ce{Fe}} = 2 \\times 50.094\\text{ kmol} = \\mathbf{100.188\\text{ kmol}}$$
4. **Massa besi murni yang dihasilkan:**
   $$m_{\\ce{Fe}} = n_{\\ce{Fe}} \\times A_r(\\ce{Fe}) = 100.188\\text{ kmol} \\times 55.85\\text{ kg/kmol} = 5595.5\\text{ kg} = \\mathbf{5.596\\text{ ton}}$$

---

#### Bagian b: Volume Gas $\\ce{CO}$ Minimum pada $RTP$
Dari persamaan reaksi reduksi:
$$1\\text{ mol } \\ce{Fe2O3} \\equiv 3\\text{ mol } \\ce{CO}$$
$$n_{\\ce{CO}} = 3 \\times n_{\\ce{Fe2O3}} = 3 \\times 50.094\\text{ kmol} = \\mathbf{150.282\\text{ kmol}}$$

Volume gas pada kondisi ruang ($RTP$):
$$V_{\\ce{CO}} = n_{\\ce{CO}} \\times 24.0\\text{ m}^3\\text{/kmol} = 150.282 \\times 24.0 = \\mathbf{3606.8\\text{ m}^3}$$

---

#### Bagian c: Massa Batu Kapur ($\\ce{CaCO3}$) untuk Mengikat Terak
1. **Massa pengotor silika ($\\ce{SiO2}$):**
   $$m_{\\ce{SiO2}} = 12.0\\% \\times 10.00\\text{ ton} = \\mathbf{1.20\\text{ ton}} = 1.20 \\times 10^6\\text{ gram}$$
2. **Jumlah mol $\\ce{SiO2}$:**
   $$n_{\\ce{SiO2}} = \\frac{1.20 \\times 10^6\\text{ g}}{60.08\\text{ g/mol}} = 19973\\text{ mol} = \\mathbf{19.973\\text{ kmol}}$$
3. **Reaksi pengikatan terak:**
   $$\\ce{CaCO3 -> CaO + CO2}$$
   $$\\ce{CaO + SiO2 -> CaSiO3}$$
   Maka perbandingan mol: $1\\text{ mol } \\ce{CaCO3} \\equiv 1\\text{ mol } \\ce{CaO} \\equiv 1\\text{ mol } \\ce{SiO2}$
   $$n_{\\ce{CaCO3}} = n_{\\ce{SiO2}} = \\mathbf{19.973\\text{ kmol}}$$
4. **Massa batu kapur $\\ce{CaCO3}$ murni yang dibutuhkan:**
   $$m_{\\ce{CaCO3}} = n_{\\ce{CaCO3}} \\times M_r = 19.973\\text{ kmol} \\times 100.09\\text{ kg/kmol} = 1999.1\\text{ kg} \\approx \\mathbf{2.00\\text{ ton}}$$

> **Wawasan Rekayasa Metalurgi:**
> Dari $10\\text{ ton}$ bijih mentah berhasil diekstraksi $5.60\\text{ ton}$ besi cair murni dengan konsumsi $3.607\\text{ m}^3$ gas pereduksi $\\ce{CO}$, serta dibutuhkan $2.00\\text{ ton}$ batu kapur untuk menetralkan pasir silika menjadi $2.32\\text{ ton}$ terak kalsium silikat cair yang melindungi cairan besi panas di dasar reaktor tanur tiup.`,
      },
    ],
  },

  {
    id: 116,
    topic_number: 16,
    grade: 'Kelas 12',
    semester: 2,
    curriculumPhase: 'Fase F',
    relatedOsnTopicId: 10,
    title: 'Kimia Karbon (Turunan Alkana, Benzena) & Makromolekul',
    slug: 'kimia-karbon-turunan-alkana-makromolekul',
    category: 'Kimia Organik & Biokimia',
    level: 'SMA',
    readTimeMinutes: 50,
    summary: 'Struktur, tata nama IUPAC, keisomeran struktur dan ruang (stereoisomerisme), reaksi diferensiasi pereaksi Tollens/Fehling/logam Na, senyawa aromatik benzena dan substitusi elektrofilik aromatik (SEAr), polimerisasi adisi vs kondensasi, serta analisis biokimia makromolekul karbohidrat, protein, dan lemak.',
    allTags: [
      'kimia-organik',
      'gugus-fungsi-alkana',
      'keisomeran-fungsi-dan-optis',
      'benzena-dan-turunan',
      'reaksi-sear',
      'polimer-adisi-kondensasi',
      'karbohidrat-protein-lemak',
      'biomolekul',
      'tata-nama-iupac',
      'alkanol',
      'alkanon',
      'turunan-alkana',
      'rantai-karbon',
      'isomer-fungsi',
      'alkohol-eter',
      'aldehid-keton',
      'rumus-homolog',
      'uji-tollens',
      'uji-fehling',
      'cermin-perak',
      'propanal',
      'oksidasi-alkohol',
      'alkohol-primer',
      'alkohol-sekunder',
      'alkohol-tersier',
      'asam-etanoat',
      'diferensiasi-alkohol-eter',
      'logam-natrium',
      'pcl5',
      'gas-hidrogen',
      'dimetil-eter',
      'isomer-geometri',
      'cis-trans',
      'alkena',
      '2-butena',
      'hambatan-rotasi',
      'karbon-kiral',
      'stereoisomer',
      'van-t-hoff',
      'enansiomer',
      'optis-aktif',
      'turunan-benzena',
      'asam-benzoat',
      'pengawet-makanan',
      'fenol',
      'anilina',
      'efek-pengarah',
      'orto-para',
      'meta-pengarah',
      'toluena',
      'nitrobenzena',
      'polimer-sintetis',
      'teflon',
      'polimerisasi-adisi',
      'polimerisasi-kondensasi',
      'monomer',
      'esterifikasi-fischer',
      'etil-asetat',
      'hidrolisis-ester',
      'saponifikasi',
      'katalis-asam-sulfat',
      'sear',
      'klorinasi-benzena',
      'nitrasi-benzena',
      'ion-nitronium',
      'katalis-asam-lewis',
      'nilon-6-6',
      'ikatan-amida',
      'termoplastik',
      'termoset',
      'karbohidrat',
      'gula-pereduksi',
      'sukrosa',
      'gula-inversi',
      'ikatan-glikosidik',
      'protein',
      'asam-amino',
      'zwitter-ion',
      'uji-biuret',
      'uji-xantoproteat',
      'kompleks-sigma',
      'ion-arenium',
      'tahap-penentu-laju',
      'resonansi-karbokation',
      'stereokimia',
      'cahn-ingold-prelog',
      'konfigurasi-r-s',
      'asam-laktat',
      'proyeksi-fischer',
      'reaksi-eliminasi',
      'e2',
      'aturan-zaitsev',
      'hiperkonjugasi',
      'sintesis-organik',
      'retrosintesis',
      'efek-pengarah-meta',
      'brominasi',
      'mutarotasi',
      'anomer-glukosa',
      'hemiasetal',
      'rotasi-optis',
      'glukopiranosa',
      'angka-penyabunan',
      'trigliserida',
      'titrasi-balik',
      'massa-molar-lipid',
      'titik-isolistrik',
      'asam-aspartat',
      'lisin',
      'elektroforesis',
      'elusidasi-struktur',
      'uji-iodoform',
      '2-metilbutanal',
      '2-pentanon',
      'sn1-sn2',
      'substitusi-nukleofilik',
      'inversi-walden',
      'karbokation',
      'pelarut-aprotik',
      'sekuensing-peptida',
      'timbal-asetat',
      'asam-amino-sistein',
    ],
    prerequisites: [
      {
        tag: 'kekhasan-atom-karbon-dan-hibridisasi',
        title: 'Prasyarat 1: Kekhasan Atom Karbon, Hibridisasi Orbital, dan Kerangka Hidrokarbon Dasar',
        summary: 'Kekhasan valensi 4 atom karbon, geometri molekul berdasarkan teori hibridisasi sp3, sp2, sp, dan klasifikasi deret hidrokarbon alifatik serta alisiklik.',
        content: `Kimia organik berakar pada keunikan atom karbon ($\\ce{_6C}$) dengan konfigurasi elektron keadaan dasar $[He]\\,2s^2 2p^2$. Karbon memiliki 4 elektron valensi yang dapat membentuk 4 ikatan kovalen yang sangat stabil melalui proses hibridisasi orbital:

1. **Hibridisasi $sp^3$ (Tetrahedral):**
   - Terjadi pada hidrokarbon jenuh **alkana** ($\\ce{C_n H_{2n+2}}$).
   - Membentuk 4 ikatan kovalen tunggal $\\sigma$ (sigma) dengan sudut ikatan ideal $109.5^\\circ$.
   - Panjang ikatan $\\ce{C-C} \\approx 1.54\\text{ \\AA}$, dengan rotasi bebas di sekitar ikatan tunggal.

2. **Hibridisasi $sp^2$ (Trigonal Planar):**
   - Terjadi pada hidrokarbon tak jenuh **alkena** ($\\ce{C_n H_{2n}}$).
   - Membentuk 3 orbital hibrida $sp^2$ (ikatan $\\sigma$, sudut $120^\\circ$) dalam satu bidang datar dan 1 orbital $2p$ murni tegak lurus bidang yang saling bertumpang tindih lateral membentuk ikatan $\\pi$ (pi).
   - Adanya ikatan rangkap dua ($\\ce{C=C}$, panjang ikatan $\\approx 1.34\\text{ \\AA}$) mengunci rotasi bebas, menjadi fondasi timbulnya keisomeran geometri (*cis/trans*).

3. **Hibridisasi $sp$ (Linear):**
   - Terjadi pada hidrokarbon tak jenuh **alkuna** ($\\ce{C_n H_{2n-2}}$).
   - Membentuk 2 orbital hibrida $sp$ (ikatan $\\sigma$, sudut $180^\\circ$) sepanjang sumbu molekul dan 2 pasangan orbital $p$ murni membentuk 2 ikatan $\\pi$.
   - Panjang ikatan rangkap tiga ($\\ce{C\\equiv C}$) sangat pendek ($\\approx 1.20\\text{ \\AA}$) dengan kerapatan awan elektron silindris yang tinggi.

Kerangka dasar hidrokarbon ini menjadi fondasi utama tempat menempelnya berbagai gugus fungsi heteroatom ($\\ce{-O-}, \\ce{-N-}, \\ce{-X-}, \\ce{-S-}$), yang mengubah drastis sifat fisika dan reaktivitas kimia molekul.`,
      },
      {
        tag: 'keisomeran-struktur-dan-stereoisomerisme',
        title: 'Prasyarat 2: Klasifikasi Keisomeran Senyawa Karbon: Isomer Struktur & Stereoisomerisme',
        summary: 'Pemahaman mendalam mengenai isomer kerangka, posisi, gugus fungsi, serta stereoisomer geometri (cis/trans) dan isomer optis aktif dengan atom karbon kiral (asimetris).',
        content: `Isomeri adalah fenomena di mana dua atau lebih senyawa memiliki rumus molekul yang persis sama, namun berbeda dalam susunan atom atau orientasi spasialnya di dalam ruang tiga dimensi.

### A. Isomer Struktur (Perbedaan Kerangka Konektivitas Atom)
1. **Isomer Kerangka/Rantai:**
   - Senyawa memiliki gugus fungsi yang sama tetapi kerangka rantai utama karbonnya berbeda (misalnya rantai lurus vs rantai bercabang).
   - Contoh: $n$-butana ($\\ce{CH3-CH2-CH2-CH3}$) berisomer rantai dengan 2-metilpropana / isobutana ($\\ce{CH(CH3)3}$).
2. **Isomer Posisi:**
   - Senyawa memiliki rantai karbon dan gugus fungsi yang sama, namun letak/posisi gugus fungsi atau ikatan rangkap pada rantai utama berbeda.
   - Contoh: 1-propanol ($\\ce{CH3-CH2-CH2-OH}$) berisomer posisi dengan 2-propanol ($\\ce{CH3-CH(OH)-CH3}$).
3. **Isomer Gugus Fungsi:**
   - Senyawa memiliki rumus molekul umum yang sama tetapi memiliki jenis gugus fungsi yang sama sekali berbeda, sehingga sifat kimia dan fisiknya berbeda drastis.

### B. Isomer Ruang / Stereoisomerisme (Perbedaan Orientasi Spasial 3D)
1. **Isomer Geometri (*Cis/Trans* atau *E/Z*):**
   - Muncul akibat adanya hambatan rotasi bebas (terjadi pada ikatan rangkap dua $\\ce{C=C}$ atau cincin sikloalkana).
   - Syarat mutlak: Tiap-tiap atom karbon berikatan rangkap harus mengikat dua gugus atom yang berbeda ($A \\neq B$ pada $\\ce{C=C(A)(B)}$).
   - Bentuk **cis** (*Zusammen / Z*): Gugus prioritas tinggi berada pada sisi bidang yang sama.
   - Bentuk **trans** (*Entgegen / E*): Gugus prioritas tinggi berada pada sisi bidang yang berseberangan.
2. **Isomer Optis Aktif & Karbon Kiral ($C^*$):**
   - Karbon kiral (karbon asimetris) adalah atom karbon $sp^3$ yang mengikat 4 gugus atom yang **seluruhnya berbeda** ($\\ce{-C^*(A)(B)(D)(E)}$).
   - Senyawa kiral tidak memiliki bidang simetri internal (*achiral plane of symmetry*), sehingga bayangan cerminnya tidak dapat diimpitkan (*non-superimposable mirror image*), disebut pasangan **enansiomer**.
   - Enansiomer memiliki sifat fisika identik (titik didih, titik leleh, massa jenis), namun memutar bidang cahaya terpolarisasi dengan sudut yang sama besar tetapi arah yang berlawanan (+ d-dekstrorotatori vs - l-levorotatori).
   - Jumlah maksimum stereoisomer optis dihitung dengan kaidah van 't Hoff:
     $$N_{\\text{maks}} = 2^n$$
     dengan $n$ adalah jumlah atom karbon kiral ($C^*$) yang tidak ekuivalen.`,
      },
    ],
    core_concepts: [
      {
        tag: 'tata-nama-dan-pasangan-isomer-fungsi',
        title: 'Konsep Inti 1: 7 Deret Homolog Turunan Alkana: Gugus Fungsi, Tata Nama IUPAC & Keisomeran Fungsi',
        summary: 'Eksplorasi komparatif 7 turunan alkana, aturan tata nama baku IUPAC dan trivial, rumus umum homolog, serta hubungan pasangan isomer fungsional.',
        content: `Senyawa turunan alkana terbentuk ketika satu atau lebih atom hidrogen pada molekul alkana digantikan oleh gugus atom karakteristik yang dinamakan **gugus fungsi**. Gugus fungsi inilah yang menentukan sifat kimiawi dan kepolaran senyawa.

<div className="my-8 flex flex-col items-center justify-center">
  <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-indigo-500/30 bg-slate-950/80 p-5 shadow-2xl backdrop-blur-md">
    <div className="mb-4 flex items-center justify-between border-b border-indigo-500/20 pb-3">
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-indigo-500 animate-pulse"></span>
        <h4 className="text-sm font-semibold tracking-wide text-indigo-300">DIAGRAM TEKNIS 16.1: MATRIKS GUGUS FUNGSI TURUNAN ALKANA & PASANGAN ISOMER</h4>
      </div>
      <span className="rounded-md bg-indigo-500/10 px-2.5 py-1 text-xs font-mono text-indigo-400 border border-indigo-500/20">IUPAC & Keisomeran Fungsi</span>
    </div>
    <div className="flex justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 380" className="w-full h-auto max-w-3xl">
        <defs>
          <linearGradient id="t16g1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="alcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="aldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#84cc16" />
          </linearGradient>
          <linearGradient id="acidGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
          <linearGradient id="haloGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>

        {/* Background Card */}
        <rect x="10" y="10" width="840" height="360" rx="16" fill="url(#t16g1)" stroke="#312e81" strokeWidth="1.5" />

        {/* Row 1: Alkohol vs Eter */}
        <g transform="translate(30, 30)">
          <rect x="0" y="0" width="780" height="70" rx="10" fill="#0369a1" fillOpacity="0.15" stroke="#0284c7" strokeWidth="1.2" />
          <rect x="15" y="15" width="130" height="40" rx="6" fill="#0284c7" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="1" />
          <text x="80" y="32" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">Pasangan 1</text>
          <text x="80" y="47" fill="#bae6fd" fontSize="11" fontFamily="monospace" textAnchor="middle">CnH2n+2O</text>

          {/* Alkanol */}
          <rect x="165" y="12" width="230" height="46" rx="6" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1" />
          <text x="180" y="30" fill="#e0f2fe" fontSize="12" fontWeight="bold">Alkohol (Alkanol)</text>
          <text x="180" y="48" fill="#38bdf8" fontSize="12" fontFamily="monospace">R - OH  [Ikatan H, Titik Didih Tinggi]</text>

          {/* Icon Isomer */}
          <circle cx="435" cy="35" r="14" fill="#0284c7" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="1" />
          <text x="435" y="39" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">⇋</text>

          {/* Eter */}
          <rect x="470" y="12" width="280" height="46" rx="6" fill="#0f172a" stroke="#0284c7" strokeWidth="1" />
          <text x="485" y="30" fill="#e0f2fe" fontSize="12" fontWeight="bold">Eter (Alkoksialkana)</text>
          <text x="485" y="48" fill="#7dd3fc" fontSize="12" fontFamily="monospace">R - O - R'  [Inert, Pelarut Non-Polar]</text>
        </g>

        {/* Row 2: Aldehid vs Keton */}
        <g transform="translate(30, 115)">
          <rect x="0" y="0" width="780" height="70" rx="10" fill="#065f46" fillOpacity="0.15" stroke="#059669" strokeWidth="1.2" />
          <rect x="15" y="15" width="130" height="40" rx="6" fill="#059669" fillOpacity="0.3" stroke="#34d399" strokeWidth="1" />
          <text x="80" y="32" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">Pasangan 2</text>
          <text x="80" y="47" fill="#a7f3d0" fontSize="11" fontFamily="monospace" textAnchor="middle">CnH2nO</text>

          {/* Alkanal */}
          <rect x="165" y="12" width="230" height="46" rx="6" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="180" y="30" fill="#ecfdf5" fontSize="12" fontWeight="bold">Aldehid (Alkanal)</text>
          <text x="180" y="48" fill="#34d399" fontSize="12" fontFamily="monospace">R - CHO  [Tollens/Fehling (+)]</text>

          {/* Icon Isomer */}
          <circle cx="435" cy="35" r="14" fill="#059669" fillOpacity="0.4" stroke="#34d399" strokeWidth="1" />
          <text x="435" y="39" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">⇋</text>

          {/* Keton */}
          <rect x="470" y="12" width="280" height="46" rx="6" fill="#0f172a" stroke="#059669" strokeWidth="1" />
          <text x="485" y="30" fill="#ecfdf5" fontSize="12" fontWeight="bold">Keton (Alkanon)</text>
          <text x="485" y="48" fill="#6ee7b7" fontSize="12" fontFamily="monospace">R - CO - R'  [Tollens/Fehling (-)]</text>
        </g>

        {/* Row 3: Asam Karboksilat vs Ester */}
        <g transform="translate(30, 200)">
          <rect x="0" y="0" width="780" height="70" rx="10" fill="#9a3412" fillOpacity="0.15" stroke="#d97706" strokeWidth="1.2" />
          <rect x="15" y="15" width="130" height="40" rx="6" fill="#d97706" fillOpacity="0.3" stroke="#fbbf24" strokeWidth="1" />
          <text x="80" y="32" fill="#fbbf24" fontSize="12" fontWeight="bold" textAnchor="middle">Pasangan 3</text>
          <text x="80" y="47" fill="#fef3c7" fontSize="11" fontFamily="monospace" textAnchor="middle">CnH2nO2</text>

          {/* Asam Alkanoat */}
          <rect x="165" y="12" width="230" height="46" rx="6" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
          <text x="180" y="30" fill="#fffbeb" fontSize="12" fontWeight="bold">Asam Karboksilat</text>
          <text x="180" y="48" fill="#fbbf24" fontSize="12" fontFamily="monospace">R - COOH  [Asam Lemah, Dimer Ikatan H]</text>

          {/* Icon Isomer */}
          <circle cx="435" cy="35" r="14" fill="#d97706" fillOpacity="0.4" stroke="#fbbf24" strokeWidth="1" />
          <text x="435" y="39" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">⇋</text>

          {/* Ester */}
          <rect x="470" y="12" width="280" height="46" rx="6" fill="#0f172a" stroke="#d97706" strokeWidth="1" />
          <text x="485" y="30" fill="#fffbeb" fontSize="12" fontWeight="bold">Ester (Alkil Alkanoat)</text>
          <text x="485" y="48" fill="#fde68a" fontSize="12" fontFamily="monospace">R - COO - R'  [Aroma Buah Wangi]</text>
        </g>

        {/* Row 4: Haloalkana */}
        <g transform="translate(30, 285)">
          <rect x="0" y="0" width="780" height="60" rx="10" fill="#4c1d95" fillOpacity="0.15" stroke="#7c3aed" strokeWidth="1.2" />
          <rect x="15" y="10" width="130" height="40" rx="6" fill="#7c3aed" fillOpacity="0.3" stroke="#a78bfa" strokeWidth="1" />
          <text x="80" y="27" fill="#a78bfa" fontSize="12" fontWeight="bold" textAnchor="middle">Derivat Khusus</text>
          <text x="80" y="42" fill="#ede9fe" fontSize="11" fontFamily="monospace" textAnchor="middle">CnH2n+1X</text>

          {/* Haloalkana */}
          <rect x="165" y="7" width="585" height="46" rx="6" fill="#0f172a" stroke="#8b5cf6" strokeWidth="1" />
          <text x="185" y="27" fill="#ede9fe" fontSize="12" fontWeight="bold">Haloalkana (Alkil Halida: R-X, X = F, Cl, Br, I)</text>
          <text x="185" y="44" fill="#c4b5fd" fontSize="11">Reaksi Inti: Substitusi Nukleofilik (SN1/SN2) & Eliminasi Dehidrohalogenasi (E1/E2 Kaidah Zaitsev)</text>
        </g>
      </svg>
    </div>
  </div>
</div>

### Matriks 7 Deret Homolog Turunan Alkana

| Deret Homolog | Rumus Umum | Gugus Fungsi | Rumus Struktur | Akhiran IUPAC | Nama Trivial Khas |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **Alkanol (Alkohol)** | $\\ce{C_n H_{2n+2} O}$ | $-\\ce{OH}$ (Hidroksil) | $\\ce{R-OH}$ | *-ol* | Alkil alkohol |
| **Alkoksi Alkana (Eter)** | $\\ce{C_n H_{2n+2} O}$ | $-\\ce{O}-$ (Eter/Alkoksi) | $\\ce{R-O-R'}$ | *alkoksi alkana* | Dialkil eter |
| **Alkanal (Aldehid)** | $\\ce{C_n H_{2n} O}$ | $-\\ce{CHO}$ (Karbonil ujung) | $\\ce{R-CHO}$ | *-al* | Alkil aldehid |
| **Alkanon (Keton)** | $\\ce{C_n H_{2n} O}$ | $-\\ce{CO}-$ (Karbonil tengah) | $\\ce{R-CO-R'}$ | *-on* | Dialkil keton |
| **Asam Alkanoat (Asam Karboksilat)** | $\\ce{C_n H_{2n} O2}$ | $-\\ce{COOH}$ (Karboksil) | $\\ce{R-COOH}$ | *asam ...-oat* | Asam alkil karboksilat |
| **Alkil Alkanoat (Ester)** | $\\ce{C_n H_{2n} O2}$ | $-\\ce{COO}-$ (Ester) | $\\ce{R-COO-R'}$ | *alkil ...-oat* | Alkil ester |
| **Haloalkana (Alkil Halida)** | $\\ce{C_n H_{2n+1} X}$ | $-\\ce{X}$ ($\\ce{F, Cl, Br, I}$) | $\\ce{R-X}$ | *haloalkana* | Alkil halida |

### Pasangan Isomer Fungsi dan Karakteristik Fisika:
1. **Alkohol vs Eter ($\\ce{C_n H_{2n+2} O}$):**
   - Alkohol memiliki gugus polar $-\\ce{OH}$ yang mampu membentuk **ikatan hidrogen antarmolekul** yang sangat kuat. Akibatnya, titik didih alkohol jauh lebih tinggi dibandingkan eter isomernya (misalnya titik didih etanol $= 78.3^\\circ\\text{C}$ vs dimetil eter $= -24^\\circ\\text{C}$ pada Mr yang sama).
   - Alkohol berbobot molekul rendah larut sempurna dalam air (*miscible*), sedangkan eter memiliki kelarutan yang jauh lebih terbatas.
2. **Aldehid vs Keton ($\\ce{C_n H_{2n} O}$):**
   - Keduanya memiliki gugus karbonil polar ($\\ce{>C^{\\delta+}=O^{\\delta-}}$) dengan gaya tarik dipol-dipol antarmolekul yang cukup signifikan, namun tidak dapat membentuk ikatan hidrogen antar sesama molekulnya sendiri. Titik didihnya berada di antara alkana dan alkohol dengan massa molekul sebanding.
3. **Asam Karboksilat vs Ester ($\\ce{C_n H_{2n} O2}$):**
   - Asam karboksilat membentuk struktur **dimer siklik** yang sangat stabil melalui dua ikatan hidrogen timbal-balik antarmolekul. Hal ini menyebabkan asam karboksilat memiliki titik didih tertinggi di antara seluruh turunan hidrokarbon dengan massa sebanding.
   - Ester memiliki gugus karbonil teresterifikasi tanpa atom H asam, memiliki aroma buah yang khas dan wangi (*fruity odor*), serta digunakan secara luas sebagai esens aroma buatan dan pelarut organik non-polar.`,
        keyFormulas: [
          {
            name: 'Rumus Deret Homolog Alkohol & Eter',
            formula: '\\ce{C_n H_{2n+2} O}',
          },
          {
            name: 'Rumus Deret Homolog Aldehid & Keton',
            formula: '\\ce{C_n H_{2n} O}',
          },
          {
            name: 'Rumus Deret Homolog Asam Karboksilat & Ester',
            formula: '\\ce{C_n H_{2n} O2}',
          },
        ],
      },
      {
        tag: 'reaksi-diferensiasi-dan-oksidasi-alkohol',
        title: 'Konsep Inti 2: Reaksi Organik Khas: Uji Diferensiasi Laboratorium & Oksidasi Bertingkat',
        summary: 'Metodologi sistematis analisis kualitatif senyawa organik: pembedaan alkohol vs eter (logam Na, PCl5), aldehid vs keton (Tollens, Fehling), esterifikasi Fischer, dan profil oksidasi alkohol 1°, 2°, 3°.',
        content: `Identifikasi gugus fungsi senyawa karbon di laboratorium didasarkan pada reaktivitas spesifik masing-masing gugus terhadap reagen kimia selektif.

<div className="my-8 flex flex-col items-center justify-center">
  <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-emerald-500/30 bg-slate-950/80 p-5 shadow-2xl backdrop-blur-md">
    <div className="mb-4 flex items-center justify-between border-b border-emerald-500/20 pb-3">
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse"></span>
        <h4 className="text-sm font-semibold tracking-wide text-emerald-300">DIAGRAM TEKNIS 16.2: ALUR UJI DIFERENSIASI LABORATORIUM & OKSIDASI</h4>
      </div>
      <span className="rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs font-mono text-emerald-400 border border-emerald-500/20">Skema Analisis Kualitatif</span>
    </div>
    <div className="flex justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 380" className="w-full h-auto max-w-3xl">
        <defs>
          <linearGradient id="t16g2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#022c22" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.95" />
          </linearGradient>
          <marker id="arrowG" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <polygon points="0 0, 8 4, 0 8" fill="#34d399" />
          </marker>
          <marker id="arrowR" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <polygon points="0 0, 8 4, 0 8" fill="#f87171" />
          </marker>
        </defs>

        <rect x="10" y="10" width="840" height="360" rx="16" fill="url(#t16g2)" stroke="#065f46" strokeWidth="1.5" />

        {/* Panel Kiri: CnH2n+2O Uji Na & PCl5 */}
        <g transform="translate(30, 30)">
          <rect x="0" y="0" width="375" height="150" rx="10" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1.2" />
          <text x="187" y="24" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">Diferensiasi Alkohol vs Eter (CnH2n+2O)</text>

          <rect x="20" y="40" width="155" height="95" rx="8" fill="#0284c7" fillOpacity="0.15" stroke="#38bdf8" strokeWidth="1" />
          <text x="97" y="60" fill="#bae6fd" fontSize="12" fontWeight="bold" textAnchor="middle">Alkohol (R-OH)</text>
          <text x="30" y="80" fill="#7dd3fc" fontSize="11">• + Logam Na: Gas H2 ↑</text>
          <text x="30" y="100" fill="#7dd3fc" fontSize="11">• + PCl5: Gas HCl ↑ pekat</text>
          <text x="30" y="120" fill="#38bdf8" fontSize="10" fontStyle="italic">Bereaksi sangat reaktif</text>

          <rect x="200" y="40" width="155" height="95" rx="8" fill="#0369a1" fillOpacity="0.15" stroke="#0284c7" strokeWidth="1" />
          <text x="277" y="60" fill="#bae6fd" fontSize="12" fontWeight="bold" textAnchor="middle">Eter (R-O-R')</text>
          <text x="210" y="80" fill="#94a3b8" fontSize="11">• + Logam Na: Tak bereaksi</text>
          <text x="210" y="100" fill="#94a3b8" fontSize="11">• + PCl5: Tak ada gas HCl</text>
          <text x="210" y="120" fill="#64748b" fontSize="10" fontStyle="italic">Ikatan C-O-C relatif inert</text>
        </g>

        {/* Panel Kanan: CnH2nO Uji Tollens & Fehling */}
        <g transform="translate(435, 30)">
          <rect x="0" y="0" width="395" height="150" rx="10" fill="#0f172a" stroke="#10b981" strokeWidth="1.2" />
          <text x="197" y="24" fill="#34d399" fontSize="13" fontWeight="bold" textAnchor="middle">Diferensiasi Aldehid vs Keton (CnH2nO)</text>

          <rect x="20" y="40" width="165" height="95" rx="8" fill="#059669" fillOpacity="0.15" stroke="#34d399" strokeWidth="1" />
          <text x="102" y="60" fill="#a7f3d0" fontSize="12" fontWeight="bold" textAnchor="middle">Aldehid (R-CHO)</text>
          <text x="30" y="80" fill="#6ee7b7" fontSize="11">• + Tollens: Cermin Perak Ag</text>
          <text x="30" y="100" fill="#6ee7b7" fontSize="11">• + Fehling: Endapan Merah Cu2O</text>
          <text x="30" y="120" fill="#34d399" fontSize="10" fontStyle="italic">Mereduksi kuat kation logam</text>

          <rect x="205" y="40" width="165" height="95" rx="8" fill="#065f46" fillOpacity="0.15" stroke="#059669" strokeWidth="1" />
          <text x="287" y="60" fill="#a7f3d0" fontSize="12" fontWeight="bold" textAnchor="middle">Keton (R-CO-R')</text>
          <text x="215" y="80" fill="#94a3b8" fontSize="11">• + Tollens: Negatif (Tetap jernih)</text>
          <text x="215" y="100" fill="#94a3b8" fontSize="11">• + Fehling: Negatif (Tetap biru)</text>
          <text x="215" y="120" fill="#64748b" fontSize="10" fontStyle="italic">Tidak punya H pada karbonil</text>
        </g>

        {/* Panel Bawah: Skema Oksidasi Bertingkat Alkohol */}
        <g transform="translate(30, 200)">
          <rect x="0" y="0" width="800" height="150" rx="10" fill="#0f172a" stroke="#d97706" strokeWidth="1.2" />
          <text x="400" y="24" fill="#fbbf24" fontSize="13" fontWeight="bold" textAnchor="middle">Skema Oksidasi Bertingkat Alkohol (KMnO4 / K2Cr2O7 Suasana Asam)</text>

          {/* Jalur Primer */}
          <g transform="translate(20, 40)">
            <rect x="0" y="0" width="180" height="30" rx="5" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
            <text x="90" y="20" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Alkohol Primer (1°)</text>
            <path d="M 185 15 L 255 15" stroke="#34d399" strokeWidth="2" markerEnd="url(#arrowG)" />
            <text x="220" y="10" fill="#34d399" fontSize="9" textAnchor="middle">+[O]</text>

            <rect x="260" y="0" width="180" height="30" rx="5" fill="#1e293b" stroke="#10b981" strokeWidth="1" />
            <text x="350" y="20" fill="#10b981" fontSize="11" fontWeight="bold" textAnchor="middle">Aldehid (Alkanal)</text>
            <path d="M 445 15 L 515 15" stroke="#34d399" strokeWidth="2" markerEnd="url(#arrowG)" />
            <text x="480" y="10" fill="#34d399" fontSize="9" textAnchor="middle">+[O]</text>

            <rect x="520" y="0" width="220" height="30" rx="5" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" />
            <text x="630" y="20" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">Asam Karboksilat (R-COOH)</text>
          </g>

          {/* Jalur Sekunder */}
          <g transform="translate(20, 80)">
            <rect x="0" y="0" width="180" height="30" rx="5" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
            <text x="90" y="20" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Alkohol Sekunder (2°)</text>
            <path d="M 185 15 L 255 15" stroke="#34d399" strokeWidth="2" markerEnd="url(#arrowG)" />
            <text x="220" y="10" fill="#34d399" fontSize="9" textAnchor="middle">+[O]</text>

            <rect x="260" y="0" width="180" height="30" rx="5" fill="#1e293b" stroke="#059669" strokeWidth="1" />
            <text x="350" y="20" fill="#059669" fontSize="11" fontWeight="bold" textAnchor="middle">Keton (Alkanon)</text>
            <path d="M 445 15 L 515 15" stroke="#f87171" strokeWidth="2" markerEnd="url(#arrowR)" />
            <text x="480" y="10" fill="#f87171" fontSize="9" textAnchor="middle">+[O] Stop</text>

            <rect x="520" y="0" width="220" height="30" rx="5" fill="#1e293b" stroke="#ef4444" strokeWidth="1" />
            <text x="630" y="20" fill="#ef4444" fontSize="11" textAnchor="middle">Tidak Teroksidasi Lanjut</text>
          </g>

          {/* Jalur Tersier */}
          <g transform="translate(20, 115)">
            <rect x="0" y="0" width="180" height="25" rx="5" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
            <text x="90" y="17" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Alkohol Tersier (3°)</text>
            <path d="M 185 12 L 255 12" stroke="#f87171" strokeWidth="2" markerEnd="url(#arrowR)" />
            <text x="220" y="9" fill="#f87171" fontSize="9" textAnchor="middle">+[O] Resisten</text>

            <rect x="260" y="0" width="480" height="25" rx="5" fill="#1e293b" stroke="#ef4444" strokeWidth="1" />
            <text x="500" y="17" fill="#fca5a5" fontSize="11" textAnchor="middle">Tidak Bereaksi (Tidak Memiliki Atom H pada Atom Karbon Karbinol)</text>
          </g>
        </g>
      </svg>
    </div>
  </div>
</div>

### 1. Uji Diferensiasi Pasangan Alkohol vs Eter
- **Uji Logam Natrium ($\\ce{Na}$):**
  - Alkohol bereaksi cepat dengan pembebasan gelembung gas hidrogen ($\\ce{H2}$):
    $$\\ce{2R-OH + 2Na -> 2R-ONa + H2 ^}$$
  - Eter tidak memiliki atom H aktif pada heteroatom oksigen, sehingga **tidak bereaksi** sama sekali dengan logam $\\ce{Na}$ pada kondisi kamar.
- **Uji Fosforus Pentaklorida ($\\ce{PCl5}$):**
  - Alkohol melepaskan uap asam klorida pekat ($\\ce{HCl}$) berwarna putih tebal saat kontak dengan udara lembap:
    $$\\ce{R-OH + PCl5 -> R-Cl + POCl3 + HCl ^}$$
  - Eter bereaksi dengan $\\ce{PCl5}$ membentuk alkil klorida tanpa melepaskan gas $\\ce{HCl}$:
    $$\\ce{R-O-R' + PCl5 -> R-Cl + R'-Cl + POCl3}$$

### 2. Uji Diferensiasi Pasangan Aldehid vs Keton
- **Pereaksi Tollens (Larutan Perak Amoniakal, $\\ce{[Ag(NH3)2]+}$ dalam Suasana Basa):**
  - Aldehid memiliki atom hidrogen yang terikat langsung pada karbon karbonil ($\\ce{-CHO}$), menjadikannya zat pereduksi kuat. Aldehid mereduksi kation $\\ce{Ag+}$ menjadi endapan logam perak yang melapisi dinding tabung membentuk **cermin perak**:
    $$\\ce{R-CHO + 2[Ag(NH3)2]+ + 3OH- -> R-COO- + 2Ag v (cermin perak) + 4NH3 + 2H2O}$$
  - Keton tidak memiliki atom hidrogen pada gugus karbonil ($\\ce{R-CO-R'}$), sehingga resisten terhadap oksidasi ringan dan **memberikan hasil negatif** (larutan tetap jernih).
- **Pereaksi Fehling (Campuran Fehling A $\\ce{CuSO4}$ dan Fehling B Kalium Natrium Tartrat Basa):**
  - Aldehid mereduksi ion kompleks tembaga(II) tartrat berwarna biru tua menjadi endapan **merah bata tembaga(I) oksida** ($\\ce{Cu2O}$):
    $$\\ce{R-CHO + 2Cu^2+ + 5OH- -> R-COO- + Cu2O v (merah bata) + 3H2O}$$
  - Keton tidak bereaksi dengan pereaksi Fehling (larutan tetap berwarna biru cerah).

### 3. Oksidasi Bertingkat Derajat Alkohol
Reaktivitas alkohol terhadap oksidator kuat seperti kalium permanganat ($\\ce{KMnO4}$) atau kalium dikromat ($\\ce{K2Cr2O7}$) dalam suasana asam ditentukan oleh derajat atom karbon karbinol:
1. **Alkohol Primer ($1^\\circ$, $\\ce{R-CH2-OH}$):**
   - Mengalami oksidasi dua tahap: mula-mula dioksidasi menjadi **aldehid** ($\\ce{R-CHO}$), kemudian dioksidasi lebih lanjut secara spontan menjadi **asam karboksilat** ($\\ce{R-COOH}$).
2. **Alkohol Sekunder ($2^\\circ$, $\\ce{R2CH-OH}$):**
   - Dioksidasi secara selektif menjadi **keton** ($\\ce{R-CO-R'}$). Reaksi berhenti pada tahap keton karena tidak terdapat atom H pada karbon karbonil untuk oksidasi lanjutan tanpa pemutusan ikatan $\\ce{C-C}$.
3. **Alkohol Tersier ($3^\\circ$, $\\ce{R3C-OH}$):**
   - Tidak memiliki atom hidrogen pada karbon karbinol ($\\ce{C_{\\alpha}}$). Oleh karena itu, alkohol tersier **resisten terhadap oksidasi** pada kondisi biasa (larutan jingga $\\ce{Cr2O7^2-}$ atau ungu $\\ce{MnO4-}$ tidak mengalami perubahan warna).

### 4. Reaksi Esterifikasi Fischer
Reaksi reversibel antara asam karboksilat dengan alkohol dengan katalis asam sulfat pekat ($\\ce{H2SO4}$ pekat) sebagai agen dehidrasi menghasilkan ester dan air:
$$\\ce{R-COOH + R'-OH <=>[H2SO4\\text{ pekat}][\\Delta] R-COO-R' + H2O}$$`,
        keyFormulas: [
          {
            name: 'Reaksi Cermin Perak Tollens',
            formula: '\\ce{R-CHO + 2[Ag(NH3)2]+ + 3OH- -> R-COO- + 2Ag v + 4NH3 + 2H2O}',
          },
          {
            name: 'Reaksi Reduksi Fehling',
            formula: '\\ce{R-CHO + 2Cu^2+ + 5OH- -> R-COO- + Cu2O v + 3H2O}',
          },
          {
            name: 'Keseimbangan Esterifikasi Fischer',
            formula: '\\ce{R-COOH + R\'-OH <=>[H^+] R-COO-R\' + H2O}',
          },
        ],
      },
      {
        tag: 'benzena-dan-substitusi-elektrofilik',
        title: 'Konsep Inti 3: Senyawa Aromatik Benzena: Aromatisitas Hückel, Nomenklatur, dan Reaksi SEAr',
        summary: 'Struktur resonansi cincin benzena, aturan aromatisitas (4n+2), tata nama turunan mono/disubstitusi (orto, meta, para), efek pengarah gugus, dan 5 varian reaksi Substitusi Elektrofilik Aromatik.',
        content: `Benzena ($\\ce{C6H6}$) merupakan senyawa induk dari keluarga besar senyawa aromatik. Ditemukan oleh Michael Faraday pada tahun 1825 dan dirumuskan strukturnya oleh August Kekulé pada tahun 1865 sebagai cincin heksagonal dengan ikatan tunggal dan rangkap yang berselingan (*konjugasi siklik*).

<div className="my-8 flex flex-col items-center justify-center">
  <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-violet-500/30 bg-slate-950/80 p-5 shadow-2xl backdrop-blur-md">
    <div className="mb-4 flex items-center justify-between border-b border-violet-500/20 pb-3">
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-violet-500 animate-pulse"></span>
        <h4 className="text-sm font-semibold tracking-wide text-violet-300">DIAGRAM TEKNIS 16.3: BENZENA, RESIDU DISUBSTITUSI & REAKSI SEAr</h4>
      </div>
      <span className="rounded-md bg-violet-500/10 px-2.5 py-1 text-xs font-mono text-violet-400 border border-violet-500/20">Aromatisitas & Substitusi</span>
    </div>
    <div className="flex justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 380" className="w-full h-auto max-w-3xl">
        <defs>
          <linearGradient id="t16g3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e1b4b" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        <rect x="10" y="10" width="840" height="360" rx="16" fill="url(#t16g3)" stroke="#4338ca" strokeWidth="1.5" />

        {/* Bagian Kiri: Cincin Benzena & Resonansi Kekule */}
        <g transform="translate(30, 35)">
          <rect x="0" y="0" width="250" height="310" rx="12" fill="#0f172a" stroke="#6366f1" strokeWidth="1.2" />
          <text x="125" y="25" fill="#a5b4fc" fontSize="13" fontWeight="bold" textAnchor="middle">Aromatisitas Hückel (4n+2)</text>

          {/* Benzena Hibrid */}
          <g transform="translate(125, 105)">
            <polygon points="0,-45 39,-22.5 39,22.5 0,45 -39,22.5 -39,-22.5" fill="none" stroke="#818cf8" strokeWidth="2.5" />
            <circle cx="0" cy="0" r="24" fill="#6366f1" fillOpacity="0.2" stroke="#a5b4fc" strokeWidth="1.8" strokeDasharray="3 3" />
            <text x="0" y="5" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">6e- delokalisasi</text>
          </g>

          <text x="125" y="180" fill="#e0e7ff" fontSize="11" textAnchor="middle" fontWeight="bold">Energi Resonansi: 152 kJ/mol</text>
          <text x="20" y="205" fill="#c7d2fe" fontSize="10.5">• 6 ikatan C-C identik: 1.39 Å</text>
          <text x="20" y="225" fill="#c7d2fe" fontSize="10.5">• Hibridisasi seluruh C: sp² (planar)</text>
          <text x="20" y="245" fill="#c7d2fe" fontSize="10.5">• Resisten adisi (tidak memudarkan Br2)</text>
          <text x="20" y="265" fill="#c7d2fe" fontSize="10.5">• Cenderung Substitusi Elektrofilik</text>
        </g>

        {/* Bagian Tengah: Posisi Orto, Meta, Para */}
        <g transform="translate(300, 35)">
          <rect x="0" y="0" width="250" height="310" rx="12" fill="#0f172a" stroke="#8b5cf6" strokeWidth="1.2" />
          <text x="125" y="25" fill="#c4b5fd" fontSize="13" fontWeight="bold" textAnchor="middle">Posisi Disubstitusi Benzena</text>

          {/* Diagram Orto Meta Para */}
          <g transform="translate(125, 115)">
            <polygon points="0,-45 39,-22.5 39,22.5 0,45 -39,22.5 -39,-22.5" fill="none" stroke="#a78bfa" strokeWidth="2.5" />
            {/* Substituen R */}
            <line x1="0" y1="-45" x2="0" y2="-65" stroke="#f59e0b" strokeWidth="2" />
            <circle cx="0" cy="-70" r="10" fill="#f59e0b" />
            <text x="0" y="-67" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">R</text>

            {/* Labels Orto */}
            <text x="45" y="-22" fill="#38bdf8" fontSize="11" fontWeight="bold">orto (1,2)</text>
            <text x="-45" y="-22" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="end">orto (1,6)</text>

            {/* Labels Meta */}
            <text x="45" y="26" fill="#10b981" fontSize="11" fontWeight="bold">meta (1,3)</text>
            <text x="-45" y="26" fill="#10b981" fontSize="11" fontWeight="bold" textAnchor="end">meta (1,5)</text>

            {/* Label Para */}
            <text x="0" y="65" fill="#ef4444" fontSize="11" fontWeight="bold" textAnchor="middle">para (1,4)</text>
          </g>

          <rect x="15" y="210" width="220" height="85" rx="6" fill="#1e1b4b" stroke="#7c3aed" strokeWidth="1" />
          <text x="25" y="230" fill="#fbcfe8" fontSize="10.5" fontWeight="bold">Pengarah Orto-Para (Aktivator):</text>
          <text x="25" y="247" fill="#e9d5ff" fontSize="10">-OH, -NH2, -OCH3, -CH3 (alkil)</text>
          <text x="25" y="267" fill="#fbcfe8" fontSize="10.5" fontWeight="bold">Pengarah Meta (Deaktivator):</text>
          <text x="25" y="284" fill="#e9d5ff" fontSize="10">-NO2, -COOH, -CHO, -SO3H</text>
        </g>

        {/* Bagian Kanan: 5 Reaksi Khas SEAr */}
        <g transform="translate(570, 35)">
          <rect x="0" y="0" width="260" height="310" rx="12" fill="#0f172a" stroke="#ec4899" strokeWidth="1.2" />
          <text x="130" y="25" fill="#f472b6" fontSize="13" fontWeight="bold" textAnchor="middle">5 Reaksi Utama SEAr</text>

          {/* 1. Halogenasi */}
          <rect x="15" y="40" width="230" height="46" rx="6" fill="#1e293b" stroke="#f43f5e" strokeWidth="1" />
          <text x="25" y="58" fill="#fda4af" fontSize="11" fontWeight="bold">1. Halogenasi (+ Cl2 / Br2)</text>
          <text x="25" y="74" fill="#cbd5e1" fontSize="10">Katalis: FeCl3 / FeBr3 ➔ Klorobenzena</text>

          {/* 2. Nitrasi */}
          <rect x="15" y="93" width="230" height="46" rx="6" fill="#1e293b" stroke="#e11d48" strokeWidth="1" />
          <text x="25" y="111" fill="#fda4af" fontSize="11" fontWeight="bold">2. Nitrasi (+ HNO3 pekat)</text>
          <text x="25" y="127" fill="#cbd5e1" fontSize="10">Katalis: H2SO4 pekat ➔ Nitrobenzena</text>

          {/* 3. Sulfonasi */}
          <rect x="15" y="146" width="230" height="46" rx="6" fill="#1e293b" stroke="#be123c" strokeWidth="1" />
          <text x="25" y="164" fill="#fda4af" fontSize="11" fontWeight="bold">3. Sulfonasi (+ H2SO4 berasap / SO3)</text>
          <text x="25" y="180" fill="#cbd5e1" fontSize="10">Reversibel ➔ Asam Benzenasulfonat</text>

          {/* 4. Alkilasi Friedel-Crafts */}
          <rect x="15" y="199" width="230" height="46" rx="6" fill="#1e293b" stroke="#9f1239" strokeWidth="1" />
          <text x="25" y="217" fill="#fda4af" fontSize="11" fontWeight="bold">4. Alkilasi F-C (+ R-Cl)</text>
          <text x="25" y="233" fill="#cbd5e1" fontSize="10">Katalis: AlCl3 anhidrat ➔ Toluena / Alkilbenzena</text>

          {/* 5. Asilasi Friedel-Crafts */}
          <rect x="15" y="252" width="230" height="46" rx="6" fill="#1e293b" stroke="#881337" strokeWidth="1" />
          <text x="25" y="270" fill="#fda4af" fontSize="11" fontWeight="bold">5. Asilasi F-C (+ R-COCl)</text>
          <text x="25" y="286" fill="#cbd5e1" fontSize="10">Katalis: AlCl3 anhidrat ➔ Asetofenon (Keton)</text>
        </g>
      </svg>
    </div>
  </div>
</div>

### 1. Struktur Resonansi & Kriteria Aromatisitas Hückel
Pengukuran modern dengan difraksi sinar-X membuktikan bahwa seluruh panjang ikatan $\\ce{C-C}$ pada cincin benzena adalah ekuivalen sempurna ($1.39\\text{ \\AA}$), yang berada di antara ikatan tunggal ($1.54\\text{ \\AA}$) dan ikatan rangkap ($1.34\\text{ \\AA}$). Keadaan ini dijelaskan melalui model hibrid resonansi delokalisasi elektron $\\pi$.

Kriteria senyawa aromatik menurut **Kaidah Hückel**:
1. Molekul harus berbentuk **siklik**.
2. Seluruh atom dalam cincin harus terhibridisasi $sp^2$ (semua orbital $p$ sejajar, molekul harus **planar**).
3. Terjadi konjugasi penuh di seluruh cincin.
4. Mengandung tepat **$(4n + 2)$ elektron $\\pi$** di mana $n = 0, 1, 2, 3, \\dots$ (untuk benzena, $n = 1 \\implies 6\\text{ elektron } \\pi$).

Benzena memiliki stabilitas termodinamika luar biasa dengan **energi stabilisasi resonansi** sebesar $152\\text{ kJ/mol}$. Kestabilan ini menyebabkan benzena sangat enggan mengalami reaksi adisi (yang akan merusak sistem cincin aromatiknya), melainkan sangat menyukai **reaksi substitusi**, di mana atom hidrogen digantikan oleh elektrofil tanpa mengorbankan kestabilan 6 elektron $\\pi$.

### 2. Tata Nama Senyawa Turunan Benzena
- **Monosubstitusi (Nama Trivial IUPAC Resmi):**
  - Toluena (Metilbenzena, $-\\ce{CH3}$)
  - Fenol (Hidroksibenzena, $-\\ce{OH}$)
  - Anilina (Aminobenzena, $-\\ce{NH2}$)
  - Asam Benzoat (Asam benzenakarboksilat, $-\\ce{COOH}$)
  - Benzaldehid (Benzenakarbaldehid, $-\\ce{CHO}$)
  - Stirena (Vinilbenzena, $-\\ce{CH=CH2}$)
  - Nitrobenzena ($-\\ce{NO2}$)
- **Disubstitusi (Posisi Residu Relatif):**
  - **Orto ($o-$):** Posisi atom 1,2 pada cincin (bersebelahan).
  - **Meta ($m-$):** Posisi atom 1,3 pada cincin (berselang 1 karbon).
  - **Para ($p-$):** Posisi atom 1,4 pada cincin (berhadapan langsung).

### 3. Efek Pengarah Substituen (Aktivator vs Deaktivator)
Jika cincin benzena telah mengikat suatu gugus fungsi, gugus tersebut akan mengendalikan laju reaksi dan letak orientasi substituen kedua yang akan masuk:
1. **Pengarah Orto-Para (Gugus Pengaktivasi Cincin):**
   - Gugus yang mendonasikan kerapatan elektron ke dalam cincin benzena melalui efek resonansi $+R$ (memiliki pasangan elektron bebas, misalnya $-\\ce{OH}, -\\ce{NH2}, -\\ce{OCH3}$) atau efek induksi hiperkonjugasi $+I$ (gugus alkil $-\\ce{CH3}, -\\ce{R}$).
   - Meningkatkan kerapatan elektron secara signifikan pada posisi orto dan para.
   - *Pengecualian:* Halogen ($-\\ce{F, -Cl, -Br, -I}$) adalah pendeaktivasi lemah cincin karena efek induksi $-I$ elektronegatif yang kuat, namun tetap mengarahkan substitusi baru ke posisi **orto-para** melalui resonansi pasangan elektron bebasnya.
2. **Pengarah Meta (Gugus Pendeaktivasi Kuat Cincin):**
   - Gugus penarik elektron yang memiliki muatan parsial positif atau ikatan rangkap terkonjugasi ke atom elektronegatif ($-\\ce{NO2}, -\\ce{COOH}, -\\ce{CHO}, -\\ce{SO3H}, -\\ce{CN}$).
   - Mengurangi kerapatan elektron cincin (membuat cincin kurang reaktif terhadap elektrofil) dan memaksa elektrofil baru masuk ke posisi yang paling sedikit terdeaktivasi, yaitu posisi **meta**.

### 4. Lima Varian Utama Reaksi SEAr (Substitusi Elektrofilik Aromatik)
1. **Halogenasi:**
   $$\\ce{C6H6 + Cl2 ->[FeCl3] C6H5Cl + HCl}$$
   Elektrofil aktif: ion kloronium $\\ce{Cl+}$ hasil interaksi $\\ce{Cl2}$ dengan katalis asam Lewis $\\ce{FeCl3}$.
2. **Nitrasi:**
   $$\\ce{C6H6 + HNO3\\text{ (pekat)} ->[H2SO4\\text{ (pekat)}][50-60^\\circ\\text{C}] C6H5NO2 + H2O}$$
   Elektrofil aktif: ion nitronium $\\ce{NO2+}$.
3. **Sulfonasi:**
   $$\\ce{C6H6 + H2SO4\\text{ berasap (SO3)} -> C6H5SO3H + H2O}$$
   Elektrofil aktif: belerang trioksida netral berpolarisasi $\\ce{SO3}$.
4. **Alkilasi Friedel-Crafts:**
   $$\\ce{C6H6 + R-Cl ->[AlCl3\\text{ anhidrat}] C6H5-R + HCl}$$
   Elektrofil aktif: karbokation $\\ce{R+}$.
5. **Asilasi Friedel-Crafts:**
   $$\\ce{C6H6 + R-COCl ->[AlCl3\\text{ anhidrat}] C6H5-CO-R + HCl}$$
   Elektrofil aktif: ion asilium berstabilkan resonansi $\\ce{R-C#O+}$.`,
        keyFormulas: [
          {
            name: 'Kaidah Aromatisitas Hückel',
            formula: '\\text{Jumlah } e^-\\pi = 4n + 2 \\quad (n \\in \\{0, 1, 2, \\dots\\})',
          },
          {
            name: 'Mekanisme Umum Reaksi SEAr',
            formula: '\\ce{Ar-H + E+ -> [Ar(H)(E)]+ (kompleks \\sigma) -> Ar-E + H+}',
          },
        ],
      },
      {
        tag: 'polimer-sintetis-dan-alami',
        title: 'Konsep Inti 4: Polimer Sintetis & Alami: Klasifikasi, Mekanisme Adisi vs Kondensasi, dan Sifat Termal',
        summary: 'Arsitektur molekuler makromolekul, mekanisme perambatan polimerisasi adisi radikal bebas, polimerisasi kondensasi difungsional, serta perbedaan sifat fisik termoplastik vs termoset.',
        content: `Polimer (berasal dari bahasa Yunani *poly* = banyak, *meros* = bagian) adalah molekul raksasa (makromolekul) yang terbentuk dari penggabungan berulang ribuan unit molekul sederhana berbobot molekul rendah yang disebut **monomer**.

<div className="my-8 flex flex-col items-center justify-center">
  <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-cyan-500/30 bg-slate-950/80 p-5 shadow-2xl backdrop-blur-md">
    <div className="mb-4 flex items-center justify-between border-b border-cyan-500/20 pb-3">
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-cyan-500 animate-pulse"></span>
        <h4 className="text-sm font-semibold tracking-wide text-cyan-300">DIAGRAM TEKNIS 16.4: MEKANISME POLIMERISASI ADISI VS KONDENSASI</h4>
      </div>
      <span className="rounded-md bg-cyan-500/10 px-2.5 py-1 text-xs font-mono text-cyan-400 border border-cyan-500/20">Sintesis Makromolekul</span>
    </div>
    <div className="flex justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 380" className="w-full h-auto max-w-3xl">
        <defs>
          <linearGradient id="t16g4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#082f49" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.95" />
          </linearGradient>
          <marker id="arrowP" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <polygon points="0 0, 8 4, 0 8" fill="#38bdf8" />
          </marker>
        </defs>

        <rect x="10" y="10" width="840" height="360" rx="16" fill="url(#t16g4)" stroke="#0369a1" strokeWidth="1.5" />

        {/* Panel Atas: Polimerisasi Adisi (Contoh: Polietilena & Teflon) */}
        <g transform="translate(30, 35)">
          <rect x="0" y="0" width="800" height="145" rx="10" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1.2" />
          <text x="25" y="25" fill="#38bdf8" fontSize="13" fontWeight="bold">1. POLIMERISASI ADISI (Pembukaan Ikatan Rangkap Alkena, Tanpa Produk Samping)</text>

          {/* Monomer Etena */}
          <g transform="translate(40, 50)">
            <rect x="0" y="0" width="160" height="65" rx="8" fill="#0369a1" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="1" />
            <text x="80" y="24" fill="#bae6fd" fontSize="11" fontWeight="bold" textAnchor="middle">n Monomer</text>
            <text x="80" y="47" fill="#ffffff" fontSize="13" fontFamily="monospace" fontWeight="bold" textAnchor="middle">n CH2 = CH2</text>
          </g>

          {/* Panah Transisi Katalis Ziegler-Natta */}
          <g transform="translate(225, 70)">
            <line x1="0" y1="12" x2="90" y2="12" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#arrowP)" />
            <text x="45" y="4" fill="#7dd3fc" fontSize="10" textAnchor="middle" fontWeight="bold">Katalis / Tekanan</text>
            <text x="45" y="28" fill="#94a3b8" fontSize="9" textAnchor="middle">Pemutusan Ikatan π</text>
          </g>

          {/* Rantai Polimer Polietilena */}
          <g transform="translate(345, 50)">
            <rect x="0" y="0" width="220" height="65" rx="8" fill="#0284c7" fillOpacity="0.2" stroke="#0ea5e9" strokeWidth="1" />
            <text x="110" y="24" fill="#bae6fd" fontSize="11" fontWeight="bold" textAnchor="middle">Unit Berulang (Polietilena)</text>
            <text x="110" y="47" fill="#38bdf8" fontSize="13" fontFamily="monospace" fontWeight="bold" textAnchor="middle">—[—CH2—CH2—]n—</text>
          </g>

          {/* Fitur Kunci */}
          <g transform="translate(590, 45)">
            <rect x="0" y="0" width="190" height="75" rx="6" fill="#1e293b" stroke="#0284c7" strokeWidth="1" />
            <text x="15" y="20" fill="#e0f2fe" fontSize="10.5" fontWeight="bold">Karakteristik Kunci:</text>
            <text x="15" y="38" fill="#cbd5e1" fontSize="10">• Monomer berikatan rangkap</text>
            <text x="15" y="54" fill="#cbd5e1" fontSize="10">• Massa polimer = n × massa monomer</text>
            <text x="15" y="70" fill="#cbd5e1" fontSize="10">• Contoh: PVC, Teflon, PS, Karet</text>
          </g>
        </g>

        {/* Panel Bawah: Polimerisasi Kondensasi (Contoh: Nilon 6,6 & Peptida) */}
        <g transform="translate(30, 195)">
          <rect x="0" y="0" width="800" height="155" rx="10" fill="#0f172a" stroke="#10b981" strokeWidth="1.2" />
          <text x="25" y="25" fill="#34d399" fontSize="13" fontWeight="bold">2. POLIMERISASI KONDENSASI (Penggabungan Gugus Fungsi Difungsional + Eliminasi H2O / HCl)</text>

          {/* Monomer 1 & 2 */}
          <g transform="translate(40, 50)">
            <rect x="0" y="0" width="200" height="75" rx="8" fill="#065f46" fillOpacity="0.2" stroke="#34d399" strokeWidth="1" />
            <text x="100" y="20" fill="#a7f3d0" fontSize="10.5" fontWeight="bold" textAnchor="middle">2 Monomer Difungsional</text>
            <text x="100" y="42" fill="#ecfdf5" fontSize="11" fontFamily="monospace" textAnchor="middle">HOOC-(CH2)4-COOH</text>
            <text x="100" y="62" fill="#6ee7b7" fontSize="11" fontFamily="monospace" textAnchor="middle">+ H2N-(CH2)6-NH2</text>
          </g>

          {/* Panah Eliminasi H2O */}
          <g transform="translate(260, 75)">
            <line x1="0" y1="12" x2="80" y2="12" stroke="#34d399" strokeWidth="2.5" markerEnd="url(#arrowP)" />
            <text x="40" y="4" fill="#34d399" fontSize="10" textAnchor="middle" fontWeight="bold">Kondensasi</text>
            <text x="40" y="28" fill="#f87171" fontSize="10" textAnchor="middle" fontWeight="bold">- (2n-1) H2O ↑</text>
          </g>

          {/* Poliamida Nilon 6,6 */}
          <g transform="translate(365, 50)">
            <rect x="0" y="0" width="220" height="75" rx="8" fill="#047857" fillOpacity="0.2" stroke="#10b981" strokeWidth="1" />
            <text x="110" y="20" fill="#a7f3d0" fontSize="10.5" fontWeight="bold" textAnchor="middle">Poliamida (Nilon 6,6)</text>
            <text x="110" y="42" fill="#34d399" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">—[—CO-(CH2)4-CO-</text>
            <text x="110" y="62" fill="#34d399" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">-NH-(CH2)6-NH—]n—</text>
          </g>

          {/* Fitur Kunci */}
          <g transform="translate(605, 45)">
            <rect x="0" y="0" width="180" height="85" rx="6" fill="#1e293b" stroke="#059669" strokeWidth="1" />
            <text x="15" y="20" fill="#ecfdf5" fontSize="10.5" fontWeight="bold">Karakteristik Kunci:</text>
            <text x="15" y="38" fill="#cbd5e1" fontSize="10">• Monomer difungsional (-OH, -COOH, -NH2)</text>
            <text x="15" y="54" fill="#cbd5e1" fontSize="10">• Terbentuk ikatan amida/ester</text>
            <text x="15" y="70" fill="#cbd5e1" fontSize="10">• Terlepas molekul kecil (H2O)</text>
            <text x="15" y="84" fill="#cbd5e1" fontSize="10">• Contoh: PET, Bakelit, Protein</text>
          </g>
        </g>
      </svg>
    </div>
  </div>
</div>

### 1. Klasifikasi Polimer Berdasarkan Mekanisme Pembentukannya

#### A. Polimerisasi Adisi
- Terjadi pada monomer yang memiliki **ikatan rangkap dua ($\\ce{C=C}$)**.
- Mekanisme reaksi berlangsung melalui pemutusan ikatan rangkap $\\pi$ menjadi ikatan tunggal $\\sigma$ yang saling merangkai tanpa ada atom atau molekul kecil yang tereliminasi.
- Massa molekul polimer merupakan kelipatan bulat eksak dari massa molar monomer ($M_{\\text{polimer}} = n \\times M_{\\text{monomer}}$).
- **Contoh Utama Polimer Adisi:**
  1. **Polietilena (PE):** Monomer etena ($\\ce{CH2=CH2}$), digunakan untuk kantong plastik dan botol film.
  2. **Polipropilena (PP):** Monomer propena ($\\ce{CH2=CH(CH3)}$), digunakan untuk botol minum, tali rafia, wadah makanan tahan panas.
  3. **Polivinil Klorida (PVC):** Monomer kloroetena / vinil klorida ($\\ce{CH2=CH-Cl}$), digunakan untuk pipa paralon air dan insulasi kabel.
  4. **Politetrafluoroetena (PTFE / Teflon):** Monomer tetrafluoroetena ($\\ce{CF2=CF2}$), tahan panas tinggi dan anti-lengket wajan.
  5. **Polistirena (PS):** Monomer stirena / vinilbenzena ($\\ce{CH2=CH(C6H5)}$), digunakan untuk wadah styrofoam dan isolator termal.
  6. **Karet Alam (Poliisoprena):** Monomer 2-metil-1,3-butadiena (isoprena).

#### B. Polimerisasi Kondensasi
- Terjadi antara molekul-molekul monomer yang memiliki **minimal dua gugus fungsi aktif (monomer difungsional atau polifungsional)** seperti $-\\ce{OH}, -\\ce{COOH}, -\\ce{NH2}$.
- Pembentukan rantai polimer disertai dengan **pelepasan / eliminasi molekul kecil**, umumnya air ($\\ce{H2O}$), amonia ($\\ce{NH3}$), atau asam klorida ($\\ce{HCl}$).
- **Contoh Utama Polimer Kondensasi:**
  1. **Nilon 6,6 (Poliamida):** Kondensasi antara asam heksanadioat (asam adipat, $\\ce{HOOC-(CH2)4-COOH}$) dengan 1,6-heksanadiamina ($\\ce{H2N-(CH2)6-NH2}$) menghasilkan serat berkekuatan tarik sangat tinggi:
     $$\\ce{n HOOC-(CH2)4-COOH + n H2N-(CH2)6-NH2 -> [—CO-(CH2)4-CO-NH-(CH2)6-NH—]_n + (2n - 1) H2O}$$
  2. **Polietilena Tereftalat (PET / Dacron / Poliester):** Kondensasi antara asam tereftalat (asam 1,4-benzenadikarboksilat) dengan 1,2-etanadiol (etilen glikol).
  3. **Bakelit (Polifenol Formaldehid):** Polimer termoset dengan jaringan silang tiga dimensi antara fenol dengan metanal (formaldehid).

### 2. Klasifikasi Berdasarkan Ketahanan Terhadap Panas
1. **Termoplastik (Plastik Lunak Panas):**
   - Tersusun dari rantai linier panjang atau sedikit bercabang dengan gaya antarmolekul sekunder (gaya van der Waals / ikatan hidrogen).
   - **Melunak bila dipanaskan** dan mengeras kembali saat didinginkan, sehingga **dapat didaur ulang** dan dicetak ulang berulang kali (contoh: PE, PP, PVC, PS, PET).
2. **Termoset (Plastik Tahan Panas / Jaringan Silang):**
   - Memiliki ikatan kovalen silang tiga dimensi (*cross-linked network*) yang sangat kaku dan rapat antar rantai utamanya.
   - Bila dipanaskan, termoset tidak melunak melainkan langsung mengalami dekomposisi / terurai hangus terbakar. Oleh karena itu, termoset **tidak dapat dicetak ulang** (contoh: Bakelit, resin epoksi, melamin).`,
        keyFormulas: [
          {
            name: 'Derajat Polimerisasi Rata-Rata Jumlah (DPn)',
            formula: 'DP_n = \\frac{\\bar{M}_n}{M_0}',
          },
          {
            name: 'Stoikiometri Eliminasi Polimerisasi Kondensasi',
            formula: 'n_{\\ce{H2O}} = (2n - 1) \\text{ mol}',
          },
        ],
      },
      {
        tag: 'biomolekul-karbohidrat-protein-lipid',
        title: 'Konsep Inti 5: Biomolekul Esensial: Karbohidrat, Protein Asam Amino, dan Trigliserida Lipid',
        summary: 'Struktur biopolimer alami: monosakarida, ikatan glikosidik, titik isolistrik asam amino zwitter-ion, ikatan peptida, hidrolisis lemak, angka penyabunan, dan matriks reaksi biokimia.',
        content: `Biomolekul adalah senyawa makromolekul organik yang menyusun tubuh makhluk hidup dan menggerakkan metabolisme biokimia. Tiga kelompok utama utama biomolekul adalah karbohidrat, protein, dan lipid.

<div className="my-8 flex flex-col items-center justify-center">
  <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-amber-500/30 bg-slate-950/80 p-5 shadow-2xl backdrop-blur-md">
    <div className="mb-4 flex items-center justify-between border-b border-amber-500/20 pb-3">
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-amber-500 animate-pulse"></span>
        <h4 className="text-sm font-semibold tracking-wide text-amber-300">DIAGRAM TEKNIS 16.5: INFOGRAFIS TERPADU BIOMOLEKUL & UJI BIOKIMIA</h4>
      </div>
      <span className="rounded-md bg-amber-500/10 px-2.5 py-1 text-xs font-mono text-amber-400 border border-amber-500/20">Karbohidrat, Protein & Lipid</span>
    </div>
    <div className="flex justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 380" className="w-full h-auto max-w-3xl">
        <defs>
          <linearGradient id="t16g5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#451a03" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        <rect x="10" y="10" width="840" height="360" rx="16" fill="url(#t16g5)" stroke="#b45309" strokeWidth="1.5" />

        {/* Kolom 1: Protein & Zwitter-ion */}
        <g transform="translate(30, 35)">
          <rect x="0" y="0" width="250" height="310" rx="10" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.2" />
          <text x="125" y="24" fill="#fbbf24" fontSize="13" fontWeight="bold" textAnchor="middle">Protein & Asam Amino</text>

          {/* Struktur Zwitter-ion */}
          <rect x="15" y="40" width="220" height="75" rx="6" fill="#78350f" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="1" />
          <text x="125" y="58" fill="#fef3c7" fontSize="11" fontWeight="bold" textAnchor="middle">Zwitter-ion (pH = pI Isolistrik)</text>
          <text x="125" y="82" fill="#fbbf24" fontSize="13" fontFamily="monospace" fontWeight="bold" textAnchor="middle">+H3N - CH(R) - COO-</text>
          <text x="125" y="102" fill="#fde68a" fontSize="10" textAnchor="middle">Muatan bersih = 0 (tak bergerak di medan listrik)</text>

          {/* Ikatan Peptida */}
          <rect x="15" y="125" width="220" height="75" rx="6" fill="#1e293b" stroke="#d97706" strokeWidth="1" />
          <text x="125" y="145" fill="#fef3c7" fontSize="11" fontWeight="bold" textAnchor="middle">Pembentukan Ikatan Peptida</text>
          <text x="125" y="167" fill="#fbbf24" fontSize="12" fontFamily="monospace" fontWeight="bold" textAnchor="middle">-CO - NH-  (Amida Kovalen)</text>
          <text x="125" y="187" fill="#cbd5e1" fontSize="10" textAnchor="middle">Kondensasi gugus -COOH dan -NH2</text>

          {/* Uji Protein */}
          <rect x="15" y="210" width="220" height="90" rx="6" fill="#1e1b4b" stroke="#f59e0b" strokeWidth="1" />
          <text x="25" y="228" fill="#fbbf24" fontSize="11" fontWeight="bold">Uji Biokimia Protein:</text>
          <text x="25" y="247" fill="#fef3c7" fontSize="10.5">• Biuret (CuSO4 + NaOH): Ungu (≥2 ikatan peptida)</text>
          <text x="25" y="267" fill="#fef3c7" fontSize="10.5">• Xantoproteat (HNO3): Kuning/Oranye (Cincin Benzena)</text>
          <text x="25" y="287" fill="#fef3c7" fontSize="10.5">• Timbal(II) Asetat: Hitam PbS (Belerang: Sistein)</text>
        </g>

        {/* Kolom 2: Karbohidrat & Reaksi Uji */}
        <g transform="translate(300, 35)">
          <rect x="0" y="0" width="250" height="310" rx="10" fill="#0f172a" stroke="#10b981" strokeWidth="1.2" />
          <text x="125" y="24" fill="#34d399" fontSize="13" fontWeight="bold" textAnchor="middle">Karbohidrat & Sakarida</text>

          <rect x="15" y="40" width="220" height="75" rx="6" fill="#064e3b" fillOpacity="0.3" stroke="#10b981" strokeWidth="1" />
          <text x="125" y="58" fill="#a7f3d0" fontSize="11" fontWeight="bold" textAnchor="middle">Klasifikasi Karbohidrat</text>
          <text x="25" y="78" fill="#ecfdf5" fontSize="10">• Monosakarida: Glukosa, Fruktosa, Galaktosa</text>
          <text x="25" y="93" fill="#ecfdf5" fontSize="10">• Disakarida: Maltosa, Laktosa, Sukrosa</text>
          <text x="25" y="108" fill="#ecfdf5" fontSize="10">• Polisakarida: Amilum, Glikogen, Selulosa</text>

          <rect x="15" y="125" width="220" height="75" rx="6" fill="#1e293b" stroke="#059669" strokeWidth="1" />
          <text x="125" y="145" fill="#a7f3d0" fontSize="11" fontWeight="bold" textAnchor="middle">Gula Pereduksi vs Non-Pereduksi</text>
          <text x="25" y="165" fill="#6ee7b7" fontSize="10">• Pereduksi: Semua mono + maltosa & laktosa</text>
          <text x="25" y="180" fill="#fca5a5" fontSize="10">• Non-Pereduksi: Sukrosa (glikosidik 1,2 terkunci)</text>
          <text x="25" y="195" fill="#a7f3d0" fontSize="10">• Inversi sukrosa ➔ glukosa + fruktosa</text>

          {/* Uji Karbohidrat */}
          <rect x="15" y="210" width="220" height="90" rx="6" fill="#022c22" stroke="#10b981" strokeWidth="1" />
          <text x="25" y="228" fill="#34d399" fontSize="11" fontWeight="bold">Uji Biokimia Karbohidrat:</text>
          <text x="25" y="247" fill="#a7f3d0" fontSize="10.5">• Molisch (α-naftol + H2SO4): Cincin ungu (Semua)</text>
          <text x="25" y="267" fill="#a7f3d0" fontSize="10.5">• Benedict/Fehling: Merah bata Cu2O (Gula pereduksi)</text>
          <text x="25" y="287" fill="#a7f3d0" fontSize="10.5">• Uji Iodin (I2/KI): Biru pekat (Khusus Amilum)</text>
        </g>

        {/* Kolom 3: Lipid, Lemak & Angka Penyabunan */}
        <g transform="translate(570, 35)">
          <rect x="0" y="0" width="260" height="310" rx="10" fill="#0f172a" stroke="#ec4899" strokeWidth="1.2" />
          <text x="130" y="24" fill="#f472b6" fontSize="13" fontWeight="bold" textAnchor="middle">Lipid & Trigliserida</text>

          <rect x="15" y="40" width="230" height="75" rx="6" fill="#831843" fillOpacity="0.3" stroke="#ec4899" strokeWidth="1" />
          <text x="130" y="58" fill="#fbcfe8" fontSize="11" fontWeight="bold" textAnchor="middle">Struktur Trigliserida (Triester)</text>
          <text x="130" y="80" fill="#f472b6" fontSize="12" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Gliserol + 3 Asam Lemak</text>
          <text x="130" y="100" fill="#fce7f3" fontSize="10" textAnchor="middle">CH2(OOCR1) - CH(OOCR2) - CH2(OOCR3)</text>

          <rect x="15" y="125" width="230" height="75" rx="6" fill="#1e293b" stroke="#db2777" strokeWidth="1" />
          <text x="130" y="145" fill="#fbcfe8" fontSize="11" fontWeight="bold" textAnchor="middle">Reaksi Saponifikasi (Penyabunan)</text>
          <text x="130" y="167" fill="#f472b6" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Lemak + 3 NaOH ➔ Gliserol + 3 Sabun</text>
          <text x="130" y="187" fill="#cbd5e1" fontSize="10" textAnchor="middle">Sabun = Garam Natrium Karboksilat</text>

          <rect x="15" y="210" width="230" height="90" rx="6" fill="#4a044e" stroke="#ec4899" strokeWidth="1" />
          <text x="25" y="228" fill="#f472b6" fontSize="11" fontWeight="bold">Karakterisasi Kuantitatif Lemak:</text>
          <text x="25" y="247" fill="#fbcfe8" fontSize="10.5">• Angka Penyabunan (mg KOH / 1 g lemak):</text>
          <text x="35" y="263" fill="#fce7f3" fontSize="10" fontFamily="monospace">SV = (3 × 56100) / Mr_lemak</text>
          <text x="25" y="283" fill="#fbcfe8" fontSize="10.5">• Angka Iodin: Ukuran ketakjenuhan ikatan C=C</text>
        </g>
      </svg>
    </div>
  </div>
</div>

### 1. Karbohidrat (Polihidroksi Aldehid atau Keton)
Karbohidrat memiliki rumus empiris umum $\\ce{C_m(H2O)_n}$. Berdasarkan ukuran unit penyusunnya:
1. **Monosakarida (Unit Tunggal):**
   - **Aldoheksosa ($\\ce{C6H12O6}$):** Glukosa dan galaktosa (memiliki gugus aldehid pada C-1).
   - **Ketoheksosa ($\\ce{C6H12O6}$):** Fruktosa (memiliki gugus keton pada C-2). Merupakan monosakarida termanis.
2. **Disakarida (Gabungan 2 Monosakarida via Ikatan Glikosidik):**
   - **Maltosa:** Glukosa + Glukosa (ikatan $\\alpha-1,4-$glikosidik). Merupakan **gula pereduksi**.
   - **Laktosa:** Glukosa + Galaktosa (ikatan $\\beta-1,4-$glikosidik). Merupakan **gula pereduksi**.
   - **Sukrosa:** Glukosa + Fruktosa (ikatan $\\alpha-1,\\beta-2-$glikosidik). Merupakan **gula non-pereduksi** karena kedua karbon anomerik fungsionalnya saling terikat terkunci dalam ikatan glikosidik.
3. **Uji Biokimia Karbohidrat:**
   - **Uji Molisch:** Mengidentifikasi adanya karbohidrat secara umum (reaksi $\\alpha-$naftol dengan asam sulfat pekat membentuk cincin ungu).
   - **Uji Benedict & Fehling:** Mengidentifikasi **gula pereduksi** (karbohidrat dengan gugus hemiasetal bebas mereduksi $\\ce{Cu^2+}$ menjadi endapan merah bata $\\ce{Cu2O}$).
   - **Uji Iodin ($\\ce{I2/KI}$):** Membedakan polisakarida. Amilum membentuk kompleks inklusi spiral heliks berwarna **biru pekat kehitaman**, glikogen menghasilkan warna cokelat kemerahan, sedangkan selulosa tidak bereaksi.

### 2. Protein & Asam Amino
Asam amino penyusun protein adalah asam $\\alpha-$amino dengan rumus umum $\\ce{H2N-CH(R)-COOH}$.
- **Karakteristik Zwitter-ion & Sifat Amfoter:**
  Di dalam larutan berair, gugus asam karboksilat mendonorkan proton $\\ce{H+}$ kepada gugus basa amina membentuk ion dipolar bermuatan ganda (**zwitter-ion**):
  $$\\ce{H2N-CH(R)-COOH <=> H3N^+-CH(R)-COO-}$$
- **Titik Isolistrik ($pI$):**
  Nilai pH larutan di mana konsentrasi zwitter-ion mencapai maksimal dan muatan listrik netto molekul asam amino tepat sama dengan nol. Pada titik isolistrik, asam amino tidak bergerak menuju anoda maupun katoda saat dielektroforesis:
  $$pI = \\frac{pK_{a1} + pK_{a2}}{2}$$
  (Untuk asam amino dengan rantai samping terionisasi seperti asam glutamat atau lisin, $pI$ dihitung dari rata-rata dua nilai $pK_a$ yang mengapit bentuk netral).
- **Ikatan Peptida:**
  Ikatan amida kovalen ($-\\ce{CO-NH}-$) yang terbentuk melalui reaksi kondensasi antara gugus $\\alpha-\\ce{COOH}$ dari satu asam amino dengan gugus $\\alpha-\\ce{NH2}$ asam amino berikutnya.
- **Uji Biokimia Protein:**
  1. **Uji Biuret:** Larutan $\\ce{CuSO4}$ encer dalam $\\ce{NaOH}$ basa menghasilkan warna **ungu** bila terdapat minimal dua ikatan peptida.
  2. **Uji Xantoproteat:** Pemanasan dengan asam nitrat pekat ($\\ce{HNO3}$) menghasilkan endapan putih yang berubah menjadi kuning, dan jingga setelah ditambah basa pekat, menandakan adanya **cincin benzena** (asam amino tirosin, triptofan, fenilalanin).
  3. **Uji Timbal(II) Asetat:** Pemanasan protein dengan larutan $\\ce{NaOH}$ pekat diikuti penambahan $\\ce{Pb(CH3COO)2}$ menghasilkan endapan hitam timbal(II) sulfida ($\\ce{PbS}$), menandakan adanya **unsur belerang** (asam amino sistein dan metionin).

### 3. Lipid / Lemak & Angka Penyabunan
Lemak dan minyak alami merupakan senyawa triester dari gliserol (1,2,3-propanatriol) dengan tiga molekul asam lemak berantai panjang, dikenal sebagai **trigliserida**.
- **Reaksi Saponifikasi (Penyabunan):**
  Hidrolisis trigliserida dengan larutan basa kuat ($\\ce{NaOH}$ atau $\\ce{KOH}$) menghasilkan gliserol bebas dan garam karboksilat asam lemak (**sabun**):
  $$\\ce{Trigliserida + 3KOH -> Gliserol + 3R-COOK (sabun potasium)}$$
- **Angka Penyabunan (Saponification Value, SV):**
  Jumlah miligram kalium hidroksida ($\\ce{KOH}$, $M_r = 56.1\\text{ g/mol}$) yang dibutuhkan untuk menyabunkan secara sempurna tepat 1.000 gram lemak atau minyak:
  $$\\text{Angka Penyabunan (SV)} = \\frac{3 \\times M_{r,\\ce{KOH}} \\times 1000}{M_{r,\\text{lemak}}} = \\frac{168300}{M_{r,\\text{lemak}}}\\text{ mg KOH/g lemak}$$
  Semakin kecil massa molekul relatif trigliserida ($M_r$), semakin besar nilai angka penyabunannya (panjang rantai asam lemak lebih pendek).`,
        keyFormulas: [
          {
            name: 'Titik Isolistrik Asam Amino Netral (pI)',
            formula: 'pI = \\frac{pK_{a1} + pK_{a2}}{2}',
          },
          {
            name: 'Angka Penyabunan Trigliserida (SV)',
            formula: '\\text{SV} = \\frac{3 \\times 56100}{M_{r,\\text{trigliserida}}} \\quad (\\text{mg KOH / g lemak})',
          },
        ],
      },
    {
      tag: 'pengayaan-stereokimia-cip-dan-sekuensing-peptida',
      tags: [
        'stereokimia-absolut',
        'aturan-cahn-ingold-prelog',
        'konfigurasi-r-s',
        'sekuensing-peptida',
        'degradasi-edman',
        'enzim-tripsin-kimotripsin',
        'biokimia-lanjut',
        'asam-laktat'
      ],
      title: 'Pengayaan HOTS/OSN: Konfigurasi Stereokimia R/S Cahn-Ingold-Prelog & Sekuensing Logis Oligopeptida',
      summary: 'Kaidah penentuan konfigurasi stereokimia absolut R dan S sistem Cahn-Ingold-Prelog (CIP) pada pusat kiral, serta teknik analisis sekuens oligopeptida menggunakan pemotongan spesifik degradasi Edman dan hidrolisis enzimatik.',
      content: `Kimia organik fisik dan biokimia lanjut:

### 1. Sistem Cahn-Ingold-Prelog (CIP) untuk Konfigurasi Absolut $R/S$

Untuk membedakan enantiomer secara absolut tanpa ambigu, digunakan sistem deskriptor $(R)$ (*rectus* / searah jarum jam) dan $(S)$ (*sinister* / berlawanan jarum jam):

#### Kaidah Prioritas CIP:
1. **Nomor Atom:** Prioritas ditentukan oleh nomor atom tertinggi dari atom yang terikat langsung pada karbon kiral:
   $$\\ce{-Br} (35) > \\ce{-Cl} (17) > \\ce{-OH} (8) > \\ce{-NH2} (7) > \\ce{-CH3} (6) > \\ce{-H} (1)$$
2. **Titik Perbedaan Pertama:** Jika atom pertama identik, telusuri atom-atom berikutnya sepanjang rantai hingga ditemukan perbedaan pertama. Misalnya: $\\ce{-CH2CH3} > \\ce{-CH3}$.
3. **Ikatan Rangkap:** Ikatan rangkap diperlakukan seolah-olah atom tersebut terikat pada dua atom sejenis secara duplikat: $\\ce{-CH=O}$ setara dengan atom C terikat pada dua atom O.

#### Menentukan Deskriptor $R/S$:
- Posisikan molekul sehingga gugus dengan prioritas terendah (prioritas 4, biasanya $\\ce{-H}$) berada di posisi paling belakang (menjauh dari pengamat, garis putus-putus).
- Telusuri arah putaran dari prioritas $1 \\to 2 \\to 3$:
  - **Searah jarum jam (*clockwise*):** Konfigurasi **$(R)$**.
  - **Berlawanan jarum jam (*counter-clockwise*):** Konfigurasi **$(S)$**.
- *Contoh Asam Laktat ($\ce{CH3-C^*H(OH)-COOH}$):* Prioritas: $1 (\\ce{-OH}) > 2 (\\ce{-COOH}) > 3 (\\ce{-CH3}) > 4 (\\ce{-H})$.

---

### 2. Sekuensing Logis Rantai Oligopeptida

Penentuan urutan asam amino pada fragmen peptida melibatkan kombinasi pemotongan spesifik:
1. **Degradasi Edman:** Pereaksi fenilisosianat (PITC) bereaksi selektif dengan gugus amino bebas pada ujung rantai (**N-terminus**) untuk melepaskan asam amino pertama sebagai derivat PTH-asam amino tanpa merusak sisa rantai peptida lainnya.
2. **Pemotongan Enzimatik Selektif:**
   - **Enzim Tripsin:** Memotong ikatan peptida secara spesifik pada sisi C-terminal dari residu asam amino basa bermuatan positif: **Lisin ($\\ce{Lys}$) dan Arginin ($\\ce{Arg}$)** (asalkan tidak diikuti oleh Prolin).
   - **Enzim Kimotripsin:** Memotong ikatan peptida secara spesifik pada sisi C-terminal dari residu asam amino yang memiliki rantai samping aromatik hidrofobik besar: **Fenilalanin ($\\ce{Phe}$), Tirosin ($\\ce{Tyr}$), dan Triptofan ($\\ce{Trp}$)**.
3. **Rekonstruksi Fragmen Tumpang-Tindih (*Overlap Reconstruction*):** Urutan lengkap protein disusun kembali dengan mencari tumpang-tindih urutan fragmen hasil pemotongan tripsin dan kimotripsin.`,
      keyFormulas: [
        { name: 'Kaidah Prioritas CIP', formula: '\\text{Nomor Atom Tinggi} > \\text{Nomor Atom Rendah} \\quad (1 > 2 > 3 > 4)' },
        { name: 'Deskriptor Kiralitas CIP', formula: '1 \\to 2 \\to 3 \\quad [\\text{Clockwise} = (R), \\quad \\text{Counter-Clockwise} = (S)]' },
        { name: 'Situs Pemotongan Tripsin', formula: '\\ce{-Lys # X-} \\quad \\text{dan} \\quad \\ce{-Arg # X-} \\quad (\\text{Kecuali } \\ce{X = Pro})' },
        { name: 'Situs Pemotongan Kimotripsin', formula: '\\ce{-Phe # X-}, \\quad \\ce{-Tyr # X-}, \\quad \\ce{-Trp # X-}' }
      ]
    },
    ],
    worked_examples: [
      {
        tag: 'contoh-identifikasi-senyawa-karbon',
        title: 'Contoh Soal 1 (Tingkat Mudah-Sedang): Analisis Spektroskopi Reaksi Kimia & Diferensiasi Isomer C4H10O',
        summary: 'Menentukan rumus struktur dan nama IUPAC senyawa alkohol berdasarkan hasil reaksi oksidasi bertingkat, reaksi logam Na, serta menggambar seluruh isomer kerangka dan posisinya.',
        content: `**Soal:**
Suatu senyawa organik cair tak berwarna $X$ memiliki rumus molekul $\\ce{C4H10O}$. Di laboratorium kimia analitik, sampel senyawa $X$ diuji dengan serangkaian prosedur eksperimental:
1. Reaksi sampel $X$ dengan potongan logam natrium ($\\ce{Na}$) menghasilkan gelembung gas hidrogen ($\\ce{H2}$) yang dapat meletup bila didekatkan nyala api.
2. Sampel $X$ dioksidasi dengan larutan kalium dikromat ($\\ce{K2Cr2O7}$) berlebih yang diasamkan dengan $\\ce{H2SO4}$. Larutan yang semula berwarna jingga berubah menjadi hijau cerah ($\\ce{Cr^3+}$), dan produk oksidasi yang diisolasi adalah suatu senyawa $Y$ ($\\ce{C4H8O}$).
3. Senyawa $Y$ diuji dengan pereaksi Tollens dan pereaksi Fehling, dan kedua pereaksi tersebut **tidak menunjukkan perubahan sama sekali (hasil uji negatif)**.

**Pertanyaan:**
a. Tentukan gugus fungsi dan kelompok homolog senyawa $X$ dan senyawa $Y$!
b. Tentukan rumus struktur dan nama resmi IUPAC dari senyawa $X$ dan $Y$!
c. Sebutkan dan gambarkan seluruh isomer struktur (kerangka dan posisi) dari senyawa $X$ yang masih tergolong dalam homolog yang sama!

---

**Pembahasan & Kunci Jawaban:**

**Langkah 1: Analisis Rumus Molekul & Uji Reaktivitas**
- Rumus molekul $\\ce{C4H10O}$ memenuhi rumus umum deret homolog $\\ce{C_n H_{2n+2} O}$ dengan $n = 4$. Kelompok senyawa yang memiliki rumus umum ini adalah pasangan isomer fungsi **Alkohol (Alkanol)** atau **Eter (Alkoksi Alkana)**.
- Sampel bereaksi positif dengan logam $\\ce{Na}$ melepaskan gas $\\ce{H2}$, membuktikan secara pasti bahwa senyawa $X$ adalah **Alkohol**, bukan eter.

**Langkah 2: Analisis Tingkat Oksidasi dan Hasil Uji Diferensiasi**
- Senyawa $X$ dapat dioksidasi oleh $\\ce{K2Cr2O7/H+}$ menghasilkan senyawa $Y$ ($\\ce{C4H8O}$, homolog $\\ce{C_n H_{2n} O}$). Ini membuktikan bahwa senyawa $X$ **bukan alkohol tersier** (karena alkohol tersier resisten terhadap oksidasi).
- Senyawa $Y$ tidak bereaksi dengan pereaksi Tollens maupun Fehling (negatif). Pereaksi Tollens dan Fehling positif untuk aldehid dan negatif untuk keton. Jadi, senyawa $Y$ adalah **Keton (Alkanon)**, bukan aldehid!
- Karena oksidasi $X$ menghasilkan keton, maka $X$ haruslah berupa **Alkohol Sekunder ($2^\\circ$)**!

**Langkah 3: Menentukan Struktur dan Nama IUPAC**
- Senyawa $X$ adalah alkohol sekunder dengan 4 atom karbon. Alkohol sekunder memiliki gugus $-\\ce{OH}$ pada karbon sekunder (mengikat 2 atom C lain):
  $$\\ce{CH3-CH(OH)-CH2-CH3} \\implies \\textbf{2-Butanol}$$
- Oksidasi 2-butanol menghasilkan keton dengan 4 atom karbon:
  $$\\ce{CH3-CO-CH2-CH3} \\implies \\textbf{2-Butanon (Etil metil keton)}$$
  Reaksi oksidasinya:
  $$\\ce{3CH3CH(OH)CH2CH3 + Cr2O7^2- + 8H+ -> 3CH3COCH2CH3 + 2Cr^3+ (hijau) + 7H2O}$$

**Langkah 4: Inventarisasi Seluruh Isomer Rantai dan Posisi Alkohol C4H10O**
Untuk rantai karbon dengan 4 atom C dan gugus $-\\ce{OH}$:
1. **1-Butanol (Rantai lurus, primer):**
   $$\\ce{CH3-CH2-CH2-CH2-OH}$$
2. **2-Butanol (Rantai lurus, sekunder, memiliki 1 karbon kiral $C^*_2$):**
   $$\\ce{CH3-CH2-CH(OH)-CH3}$$
3. **2-Metil-1-propanol (Rantai cabang, primer):**
   $$\\ce{(CH3)2CH-CH2-OH}$$
4. **2-Metil-2-propanol / t-butanol (Rantai cabang, tersier):**
   $$\\ce{(CH3)3C-OH}$$

> **Kesimpulan:** Senyawa $X$ adalah **2-butanol** dan senyawa $Y$ adalah **2-butanon**. Terdapat total 4 isomer struktur alkohol untuk $\\ce{C4H10O}$.`,
      },
      {
        tag: 'contoh-sintesis-dan-regioselektivitas-benzena',
        title: 'Contoh Soal 2 (Tingkat Sedang): Analisis Regioselektivitas SEAr & Sintesis Berantai Turunan Benzena',
        summary: 'Menganalisis urutan penambahan pereaksi halogenasi dan nitrasi pada toluena vs benzena, efek pengarah substituen, serta menentukan struktur produk mayor asam p-nitrobenzoat dan TNT.',
        content: `**Soal:**
Seorang kimiawan di laboratorium sintesis organik ingin mensintesis senyawa **Asam $p$-nitrobenzoat** dari bahan dasar murni **Benzena** ($\\ce{C6H6}$). Tersedia reagen laboratorium berikut:
- Gas $\\ce{CH3Cl}$ dan katalis $\\ce{AlCl3}$ anhidrat (Alkilasi Friedel-Crafts)
- Campuran asam nitrat pekat dan asam sulfat pekat ($\\ce{HNO3 / H2SO4}$) (Nitrasi)
- Larutan $\\ce{KMnO4}$ basa panas diikuti pengasaman $\\ce{H3O+}$ (Oksidasi rantai samping alkil)

Kimiawan tersebut mempertimbangkan dua skema rute sintesis yang berbeda:
- **Rute A:** Benzena $\\xrightarrow{\\ce{CH3Cl/AlCl3}}$ Senyawa $P$ $\\xrightarrow{\\ce{KMnO4/H3O+}}$ Senyawa $Q$ $\\xrightarrow{\\ce{HNO3/H2SO4}}$ Produk Akhir
- **Rute B:** Benzena $\\xrightarrow{\\ce{CH3Cl/AlCl3}}$ Senyawa $P$ $\\xrightarrow{\\ce{HNO3/H2SO4}}$ Senyawa $R$ (isolasi isomer mayor) $\\xrightarrow{\\ce{KMnO4/H3O+}}$ Produk Akhir

**Pertanyaan:**
1. Evaluasi secara mekanistik rute manakah (Rute A atau Rute B) yang berhasil menghasilkan **Asam $p$-nitrobenzoat** sebagai produk utama? Jelaskan kegagalan rute yang lain berdasarkan sifat pengarah gugus substituen!
2. Gambarkan struktur senyawa perantara $P$, $Q$, dan $R$, serta jelaskan mengapa oksidasi rantai samping toluena menghasilkan gugus karboksilat!

---

**Pembahasan & Kunci Jawaban:**

**Langkah 1: Evaluasi Efek Pengarah Gugus pada Rute A**
1. **Langkah 1:** Benzena direaksikan dengan $\\ce{CH3Cl/AlCl3}$ menghasilkan senyawa $P$, yaitu **Toluena** ($\\ce{C6H5CH3}$).
2. **Langkah 2:** Oksidasi toluena dengan $\\ce{KMnO4}$ mengoksidasi gugus metil ($-\\ce{CH3}$) menjadi gugus karboksilat ($-\\ce{COOH}$), menghasilkan senyawa $Q$, yaitu **Asam Benzoat** ($\\ce{C6H5COOH}$).
3. **Langkah 3:** Asam benzoat direaksikan dengan campuran nitrasi ($\\ce{HNO3/H2SO4}$). Gugus karboksilat ($-\\ce{COOH}$) adalah **gugus penarik elektron (deaktivator kuat)** melalui efek resonansi $-R$ karena atom karbon karbonil bermuatan parsial positif ($\\ce{C^{\\delta+}=O}$). Akibatnya, gugus $-\\ce{COOH}$ bertindak sebagai **pengarah META**!
4. Reaksi nitrasi pada senyawa $Q$ akan menghasilkan **Asam $m$-nitrobenzoat** (produk meta > $90\\%$), bukan asam $p$-nitrobenzoat! Jadi, **Rute A GAGAL**.

**Langkah 2: Evaluasi Efek Pengarah Gugus pada Rute B**
1. **Langkah 1:** Benzena dialkilasi menghasilkan senyawa $P$, yaitu **Toluena** ($\\ce{C6H5CH3}$).
2. **Langkah 2:** Toluena memiliki gugus metil ($-\\ce{CH3}$) yang merupakan **gugus pendorong elektron (aktivator)** melalui efek hiperkonjugasi dan induksi positif $+I$. Oleh karena itu, gugus metil merupakan **pengarah ORTO-PARA**!
   - Nitrasi pada toluena akan menghasilkan campuran isomer orto-nitrotoluena dan para-nitrotoluena ($p$-nitrotoluena). Karena adanya rintangan sterik (*steric hindrance*) pada posisi orto yang bersebelahan dengan gugus metil, isomer **$p$-nitrotoluena** (senyawa $R$) dapat dipisahkan dan diisolasi sebagai fraksi kristal murni dengan efisiensi tinggi.
3. **Langkah 3:** Oksidasi $p$-nitrotoluena (senyawa $R$) dengan $\\ce{KMnO4}$ panas mengoksidasi gugus benzylic $-\\ce{CH3}$ menjadi $-\\ce{COOH}$ tanpa merusak gugus nitro ($-\\ce{NO2}$) yang resisten oksidasi.
   - Hasil akhir: terbentuk secara spesifik **Asam $p$-nitrobenzoat**!
   - Jadi, **Rute B adalah rute sintesis yang TEPAT dan BERHASIL**.

**Langkah 3: Identifikasi Struktur Senyawa**
- Senyawa $P$: $\\ce{C6H5-CH3}$ (Toluena / Metilbenzena)
- Senyawa $Q$: $\\ce{C6H5-COOH}$ (Asam Benzoat)
- Senyawa $R$: $\\ce{p-NO2-C6H4-CH3}$ ($p$-Nitrotoluena / 4-Nitrotoluena)

> **Kesimpulan:** Rute B adalah jalur sintesis yang tepat karena nitrasi dilakukan saat cincin masih mengikat gugus $-\\ce{CH3}$ (pengarah orto-para), barulah kemudian gugus metil dioksidasi menjadi asam karboksilat.`,
      },
      {
        tag: 'contoh-stoikiometri-polimerisasi-nilon',
        title: 'Contoh Soal 3 (Tingkat Sedang-Tinggi): Stoikiometri Polimerisasi Kondensasi Nilon 6,6 & Derajat Polimerisasi',
        summary: 'Perhitungan kuantitatif massa molar rata-rata polimer, derajat polimerisasi DPn, massa reaktan monomer yang bereaksi, dan volume air yang dieliminasi.',
        content: `**Soal:**
Dalam industri polimer sintetis serat tekstil, Nilon 6,6 disintesis melalui polimerisasi kondensasi antara monomer asam adipat ($\\ce{HOOC-(CH2)4-COOH}$, $M_r = 146.14\\text{ g/mol}$) dan heksametilendiamina ($\\ce{H2N-(CH2)6-NH2}$, $M_r = 116.20\\text{ g/mol}$) dalam rasio stoikiometri ekimolar $1:1$.

Sebuah reaktor polimerisasi beroperasi dengan mengisi $73.07\\text{ kg}$ asam adipat dan $58.10\\text{ kg}$ heksametilendiamina. Reaksi dipanaskan pada suhu $280^\\circ\\text{C}$ di bawah vakum hingga konversi berlangsung sempurna membentuk rantai polimer Nilon 6,6 dengan massa molekul relatif rata-rata jumlah ($\\bar{M}_n$) sebesar $22.630\\text{ g/mol}$.

Diketahui: $A_r\\text{ H} = 1.008$, $\\ce{C} = 12.011$, $\\ce{N} = 14.007$, $\\ce{O} = 15.999\\text{ g/mol}$.
**Hitunglah:**
a. Massa molar unit berulang (*repeating unit*) dari polimer Nilon 6,6!
b. Derajat polimerisasi rata-rata jumlah ($DP_n$) dari rantai Nilon 6,6 yang dihasilkan!
c. Massa total uap air ($\\ce{H2O}$) yang dieliminasi dari reaktor selama proses berlangsung (dalam satuan $\\text{kg}$)!
d. Massa total produk Nilon 6,6 kering yang diperoleh (dalam satuan $\\text{kg}$)!

---

**Pembahasan & Kunci Jawaban:**

**Langkah 1: Menghitung Massa Molar Unit Berulang Nilon 6,6**
Unit berulang Nilon 6,6 adalah:
$$\\ce{—[—CO-(CH2)4-CO-NH-(CH2)6-NH—]—}$$
Rumus molekul unit berulang: $\\ce{C12 H22 N2 O2}$
Massa molar unit berulang ($M_0$):
$$M_0 = (12 \\times 12.011) + (22 \\times 1.008) + (2 \\times 14.007) + (2 \\times 15.999)$$
$$M_0 = 144.132 + 22.176 + 28.014 + 31.998 = 226.32\\text{ g/mol}$$
Perhatikan relasi matematis:
$$M_0 = M_{r,\\text{asam adipat}} + M_{r,\\text{diamina}} - 2 \\times M_{r,\\ce{H2O}}$$
$$M_0 = 146.14 + 116.20 - (2 \\times 18.015) = 262.34 - 36.03 = 226.31\\text{ g/mol}$$

**Langkah 2: Menghitung Derajat Polimerisasi Rata-Rata Jumlah ($DP_n$)**
Derajat polimerisasi $DP_n$ menyatakan jumlah unit berulang per rantai makromolekul:
$$DP_n = \\frac{\\bar{M}_n}{M_0} = \\frac{22.630\\text{ g/mol}}{226.32\\text{ g/mol}} \\approx 100\\text{ unit berulang per rantai}$$

**Langkah 3: Menghitung Mol Monomer yang Bereaksi**
- Mol asam adipat:
  $$n_{\\text{adipat}} = \\frac{73.070\\text{ g}}{146.14\\text{ g/mol}} = 500.0\\text{ mol}$$
- Mol heksametilendiamina:
  $$n_{\\text{diamina}} = \\frac{58.100\\text{ g}}{116.20\\text{ g/mol}} = 500.0\\text{ mol}$$
Campuran berada dalam perbandingan stoikiometri ekimolar sempurna ($1:1$).

**Langkah 4: Menghitung Massa Air yang Dieliminasi**
Untuk pembentukan rantai polimer dengan derajat polimerisasi $n = 100$, setiap penggabungan 1 mol unit adipat dan 1 mol diamina melepaskan 2 mol molekul air (kecuali dua gugus ujung rantai polimer akhir $\\ce{-COOH}$ dan $\\ce{-NH2}$):
Jumlah mol air yang dilepaskan secara total mendekati:
$$n_{\\ce{H2O}} \\approx 2 \\times n_{\\text{adipat}} = 2 \\times 500.0\\text{ mol} = 1000.0\\text{ mol}$$
(Lebih presisi: dengan $n_{\\text{rantai}} = 500 / 100 = 5\\text{ mol rantai}$, mol ikatan yang terbentuk adalah $1000 - 5 = 995\\text{ mol}$ air, namun pada polimer rantai panjang $DP_n = 100$, koreksi ujung rantai $< 0.5\\%$, sehingga $n_{\\ce{H2O}} \\approx 1000.0\\text{ mol}$).
Massa air yang tereliminasi:
$$m_{\\ce{H2O}} = 1000.0\\text{ mol} \\times 18.015\\text{ g/mol} = 18.015\\text{ g} = 18.02\\text{ kg}$$

**Langkah 5: Menghitung Massa Nilon 6,6 Kering yang Dihasilkan**
Berdasarkan hukum kekekalan massa:
$$m_{\\text{Nilon 6,6}} = m_{\\text{reaktan total}} - m_{\\ce{H2O}}$$
$$m_{\\text{Nilon 6,6}} = (73.07 + 58.10)\\text{ kg} - 18.02\\text{ kg} = 131.17\\text{ kg} - 18.02\\text{ kg} = 113.15\\text{ kg}$$
Atau melalui massa unit berulang:
$$m = 500.0\\text{ mol} \\times 226.32\\text{ g/mol} = 113.160\\text{ g} = 113.16\\text{ kg}$$

> **Hasil Akhir:**
> a. Massa molar unit berulang $= 226.32\\text{ g/mol}$.
> b. Derajat polimerisasi $DP_n = 100$.
> c. Massa air tereliminasi $= 18.02\\text{ kg}$.
> d. Massa Nilon 6,6 kering $= 113.15\\text{ kg}$.`,
      },
      {
        tag: 'contoh-analisis-kuantitatif-biomolekul',
        title: 'Contoh Soal 4 (Tingkat Tinggi / Standar OSN): Analisis Angka Penyabunan Trigliserida & Titik Isolistrik Asam Amino Triprotik',
        summary: 'Kalkulasi massa molar rata-rata minyak nabati dari data titrasi balik angka penyabunan dan perhitungan titik isolistrik pI asam glutamat triprotik.',
        content: `**Soal:**
Analisis kualitas bahan baku industri pangan dan farmasi melibatkan dua pengujian biokimia terstandar berikut:

**Bagian I: Karakterisasi Angka Penyabunan Sampel Trigliserida Murni**
Sebanyak $2.500\\text{ g}$ sampel minyak nabati murni (suatu trigliserida homogen) direfluks secara kuantitatif dengan $50.00\\text{ mL}$ larutan $\\ce{KOH}$ dalam etanol dengan konsentrasi $0.5000\\text{ M}$ hingga reaksi saponifikasi tuntas sempurna. Kelebihan $\\ce{KOH}$ yang tidak bereaksi kemudian dititrasi balik (*back titration*) dengan larutan standar $\\ce{HCl}$ $0.2500\\text{ M}$, dan memerlukan tepat $32.40\\text{ mL}$ larutan $\\ce{HCl}$ untuk mencapai titik akhir titrasi indikator fenolftalein.
Percobaan titrasi blanko (tanpa sampel minyak) menggunakan $50.00\\text{ mL}$ larutan $\\ce{KOH}$ yang sama membutuhkan $50.00\\text{ mL}$ larutan $\\ce{HCl}$ $0.5000\\text{ M}$ (ekuivalen dengan $25.00\\text{ mmol } \\ce{KOH}$).
Diketahui massa molar $\\ce{KOH} = 56.10\\text{ g/mol}$.
1. Hitunglah **Angka Penyabunan (Saponification Value, SV)** sampel minyak tersebut dalam satuan $\\text{mg KOH / g minyak}$!
2. Tentukan **Massa Molar Relatif ($M_r$)** dari molekul trigliserida tersebut!
3. Jika trigliserida tersebut tersusun atas tiga molekul asam lemak jenuh identik ($\\ce{R-COOH}$), tentukan rumus molekul dan nama asam lemak tersebut!

**Bagian II: Penentuan Titik Isolistrik ($pI$) Asam Amino Asam Glutamat**
Asam glutamat ($\\ce{Glu}$) adalah asam amino triprotik yang memiliki tiga nilai tetapan disosiasi asam:
- $pK_{a1} = 2.19$ (disosiasi gugus $\\alpha-\\ce{COOH}$)
- $pK_{a2} = 4.25$ (disosiasi gugus $-\\ce{COOH}$ rantai samping $\\gamma$)
- $pK_{a3} = 9.67$ (disosiasi gugus $\\alpha-\\ce{NH3+}$)
Tentukan struktur ion yang dominan pada masing-masing rentang pH dan hitung secara eksak **Titik Isolistrik ($pI$)** asam glutamat!

---

**Pembahasan & Kunci Jawaban:**

**Bagian I: Perhitungan Angka Penyabunan dan Massa Molar Trigliserida**

**Langkah 1: Menghitung Mol KOH yang Bereaksi Menyabunkan Lemak**
- Mol $\\ce{KOH}$ total yang ditambahkan mula-mula:
  $$n_{\\ce{KOH, awal}} = 50.00\\text{ mL} \\times 0.5000\\text{ mmol/mL} = 25.00\\text{ mmol}$$
- Mol $\\ce{HCl}$ yang dibutuhkan untuk menitrasi sisa $\\ce{KOH}$:
  $$n_{\\ce{HCl}} = 32.40\\text{ mL} \\times 0.2500\\text{ mmol/mL} = 8.10\\text{ mmol}$$
  Karena reaksi netralisasi $\\ce{KOH + HCl -> KCl + H2O}$ memiliki rasio $1:1$, maka:
  $$n_{\\ce{KOH, sisa}} = 8.10\\text{ mmol}$$
- Mol $\\ce{KOH}$ yang bereaksi dengan $2.500\\text{ g}$ sampel minyak:
  $$n_{\\ce{KOH, bereaksi}} = n_{\\ce{KOH, awal}} - n_{\\ce{KOH, sisa}} = 25.00\\text{ mmol} - 8.10\\text{ mmol} = 16.90\\text{ mmol}$$

**Langkah 2: Menghitung Angka Penyabunan (SV)**
Angka penyabunan didefinisikan sebagai miligram $\\ce{KOH}$ per gram sampel lemak:
$$\\text{Massa KOH bereaksi} = 16.90\\text{ mmol} \\times 56.10\\text{ mg/mmol} = 948.09\\text{ mg}$$
$$\\text{SV} = \\frac{948.09\\text{ mg KOH}}{2.500\\text{ g minyak}} = \\mathbf{379.24\\text{ mg KOH / g minyak}}$$

**Langkah 3: Menentukan Massa Molar Trigliserida**
Satu molekul trigliserida memerlukan tepat 3 molekul $\\ce{KOH}$ untuk hidrolisis saponifikasi lengkap:
$$n_{\\text{trigliserida}} = \\frac{n_{\\ce{KOH, bereaksi}}}{3} = \\frac{16.90\\text{ mmol}}{3} = 5.6333\\text{ mmol} = 5.6333 \\times 10^{-3}\\text{ mol}$$
Massa molar trigliserida ($M_r$):
$$M_r = \\frac{\\text{Massa sampel}}{n_{\\text{trigliserida}}} = \\frac{2.500\\text{ g}}{5.6333 \\times 10^{-3}\\text{ mol}} \\approx \\mathbf{443.8\\text{ g/mol}}$$
(Dapat juga dihitung langsung: $M_r = \\frac{3 \\times 56.100}{379.24} = 443.8\\text{ g/mol}$).

**Langkah 4: Identifikasi Asam Lemak Penyusun**
Rumus molekul trigliserida tri-ester gliserol adalah:
$$\\ce{C3H5(OOCR)3} \\implies M_r = M_{\\ce{C3H5}} + 3 \\times M_{\\ce{OOCR}}$$
Massa gugus gliseril $\\ce{C3H5} = (3 \\times 12.011) + (5 \\times 1.008) = 41.073\\text{ g/mol}$.
$$3 \\times M_{\\ce{OOCR}} = 443.8 - 41.073 = 402.73 \\implies M_{\\ce{OOCR}} = 134.24\\text{ g/mol}$$
Massa residu asam karboksilat $\\ce{R-COO-} = 134.24\\text{ g/mol}$.
Massa rantai alkil $R$:
$$M_R = 134.24 - M_{\\ce{COO}} = 134.24 - 44.00 = 90.24\\text{ g/mol}$$
Untuk alkil jenuh $\\ce{C_n H_{2n+1}}$:
$$12.011n + 1.008(2n+1) = 90.24 \\implies 14.027n + 1.008 = 90.24$$
$$14.027n = 89.232 \\implies n = 6.36 \\approx 6$$
Jika $n = 6$, gugus alkil adalah $\\ce{C6H13}$ (asam heptanoat) atau rata-rata campuran asam kaprilat ($\\ce{C8}$, $n=7$) dan kaproat ($\\ce{C6}$, $n=5$). Untuk trigliserida murni berbobot rendah:
Minyak ini tergolong trigliserida rantai medium (MCT - *Medium Chain Triglycerides*).

---

**Bagian II: Perhitungan Titik Isolistrik ($pI$) Asam Glutamat**

Asam glutamat memiliki 3 tahapan disosiasi:
1. Bentuk Kation Penuh ($+1$): $\\ce{H3A+} \\quad (\\ce{+H3N-CH(CH2CH2COOH)-COOH})$
   $$\\ce{H3A+ <=>[pK_{a1}=2.19] H2A^\\pm + H+}$$
2. Bentuk Zwitter-ion Netral ($0$): $\\ce{H2A^\\pm} \\quad (\\ce{+H3N-CH(CH2CH2COOH)-COO-})$
   $$\\ce{H2A^\\pm <=>[pK_{a2}=4.25] HA^- + H+}$$
3. Bentuk Monoanion ($-1$): $\\ce{HA^-} \\quad (\\ce{+H3N-CH(CH2CH2COO-)-COO-})$
   $$\\ce{HA^- <=>[pK_{a3}=9.67] A^2- + H+}$$
4. Bentuk Dianion ($-2$): $\\ce{A^2-} \\quad (\\ce{H2N-CH(CH2CH2COO-)-COO-})$

Bentuk zwitter-ion bermuatan listrik netto nol ($\\ce{H2A^\\pm}$) berada di antara kesetimbangan disosiasi pertama ($pK_{a1}$) dan disosiasi kedua ($pK_{a2}$).
Oleh karena itu, titik isolistrik ($pI$) asam glutamat adalah nilai rata-rata dari $pK_{a1}$ dan $pK_{a2}$:
$$pI = \\frac{pK_{a1} + pK_{a2}}{2} = \\frac{2.19 + 4.25}{2} = \\frac{6.44}{2} = \\mathbf{3.22}$$

> **Hasil Akhir:**
> - Angka Penyabunan $= 379.24\\text{ mg KOH / g minyak}$.
> - $M_r$ trigliserida $= 443.8\\text{ g/mol}$ (MCT - trigliserida rantai medium).
> - Titik isolistrik asam glutamat $pI = 3.22$ (kondisi asam karena adanya rantai samping karboksilat tambahan).`,
      },
    ],
  },
];

export const SMA_MATERIALS_FASE_F2: SmaMaterialItem[] = BASE_SMA_MATERIALS_FASE_F2.map((mat) => ({
  ...mat,
  prerequisites: mat.prerequisites.map((b) => ({
    ...b,
    checkpointQuizzes: b.checkpointQuizzes || CHECKPOINTS_FASE_F2[b.tag],
  })),
  core_concepts: mat.core_concepts.map((b) => ({
    ...b,
    checkpointQuizzes: b.checkpointQuizzes || CHECKPOINTS_FASE_F2[b.tag],
  })),
  worked_examples: mat.worked_examples,
}));
