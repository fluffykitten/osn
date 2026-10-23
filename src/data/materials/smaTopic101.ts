/**
 * smaTopic101.ts
 * Topik 1 SMA (Fase E Kelas X): Hakikat Kimia, Metode Ilmiah & Keselamatan Kerja Lab
 * Mengikuti Arsitektur Pedagogis Kurikulum Nasional (Salman Madani, S.Pd.)
 */

import type { SmaMaterialItem } from '../smaMaterialsData';
import { WORKED_EXAMPLES_TOPIC_101 } from './smaWorkedExamplesFaseE.ts';

export const SMA_TOPIC_101: SmaMaterialItem = {
  id: 101,
  topic_number: 1,
  grade: 'Kelas 10',
  semester: 1,
  curriculumPhase: 'Fase E',
  title: 'Hakikat Kimia, Metode Ilmiah & Keselamatan Kerja Lab',
  slug: 'hakikat-kimia-metode-ilmiah',
  category: 'Dasar Ilmu Kimia',
  level: 'SMA',
  readTimeMinutes: 35,
  summary: 'Modul master arsitektur pedagogis Kurikulum Nasional Fase E: Segitiga Johnstone (makroskopik, submikroskopik, simbolik); taksonomi materi zat tunggal vs campuran; 4 kaidah angka penting & pembulatan genap (banker\'s rounding); 7 langkah metode ilmiah & desain uji adil (fair test); teknik meniskus & nyala Bunsen; protokol K3, 9 piktogram GHS & dokumen SDS; serta 12 prinsip kimia hijau dan kuantifikasi ekonomi atom.',
  allTags: [
    'hakikat-ilmu-kimia',
    'segitiga-johnstone',
    'klasifikasi-materi',
    'unsur-senyawa-campuran',
    'perubahan-fisika-kimia',
    'pemisahan-campuran',
    'angka-penting-pengukuran',
    'bankers-rounding',
    'akurasi-dan-presisi',
    'satuan-si-kimia',
    'galat-relatif',
    'metode-ilmiah',
    'tahapan-metode-ilmiah',
    'variabel-bebas-terikat-kontrol',
    'desain-eksperimen',
    'kontrol-positif-negatif',
    'alat-laboratorium-kimia',
    'pembacaan-meniskus',
    'keselamatan-kerja-lab',
    'simbol-bahaya-ghs',
    'safety-data-sheet-sds',
    'pertolongan-pertama-lab',
    'always-add-acid',
    'kimia-hijau',
    '12-prinsip-green-chemistry',
    'ekonomi-atom',
    'faktor-lingkungan-e-factor',
    'soal-variabel-eksperimen',
    'soal-ekonomi-atom',
    'soal-keselamatan-lab',
    'soal-pengukuran-angka-penting',
  ],
  prerequisites: [
    {
      tag: 'hakikat-kimia-dan-materi',
      tags: ['hakikat-ilmu-kimia', 'segitiga-johnstone', 'klasifikasi-materi', 'unsur-senyawa-campuran', 'perubahan-fisika-kimia'],
      title: 'Subbab 1.1: Hakikat Sains Kimia, Segitiga Johnstone & Taksonomi Materi',
      summary: 'Fondasi cara berpikir kimiawan melalui Johnstone\'s Triangle (makroskopik, submikroskopik, simbolik), taksonomi zat murni vs campuran, serta empat tanda pasti reaksi kimia.',
      content: `#### 1. Intuisi & Model Partikel (Jembatan Makroskopik ke Submikroskopik)

Bagi masyarakat awam, sepanci air yang mendidih hanyalah air bergelembung yang mengepulkan uap panas. Namun bagi seorang kimiawan, fenomena tersebut diselami secara simultan melalui **tiga lapisan realitas** yang dikenal sebagai **Segitiga Pemahaman Johnstone (*Johnstone's Chemical Triangle*)**:

1. **Tingkat Makroskopik (Apa yang Teramati):** Fenomena nyata yang dapat diindra langsung di laboratorium atau kehidupan sehari-hari—seperti timbulnya endapan putih perak klorida, aroma menyengat gas belerang dioksida, perubahan warna larutan, atau kenaikan suhu kalorimeter.
2. **Tingkat Submikroskopik / Partikulat (Apa yang Terjadi di Balik Layar Atom):** Rekonstruksi mental tentang perilaku partikel tak kasatmata—bagaimana molekul $\\ce{H2O}$ bergerak semakin cepat saat dipanaskan, mengatasi ikatan hidrogen antarmolekul, lalu terlepas bebas ke udara tanpa memutuskan ikatan kovalen $\\ce{H-O}$ di dalam molekulnya.
3. **Tingkat Simbolik (Bagaimana Bahasa Kimia Dituliskan):** Representasi formal berupa rumus kimia, lambang unsur, grafik entalpi, serta persamaan reaksi setara lengkap dengan fasa zat:
   $$\\ce{H2O(l) ->[\\Delta] H2O(g)} \\quad \\Delta H^\\circ_{\\text{vap}} = +40.7\\text{ kJ mol}^{-1}$$

Perhatikan bagan taksonomi klasifikasi materi dan kriteria pemisahannya pada **Gambar 1.1** berikut:

<svg data-diagram="sma-t01-klasifikasi-materi" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 270" width="100%" height="auto" class="max-w-[760px] my-6 select-none font-sans">
  <defs>
    <filter id="cardShadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f172a" flood-opacity="0.06"/>
    </filter>
  </defs>

  <!-- Root: MATERI -->
  <g transform="translate(280, 10)">
    <rect width="200" height="46" rx="10" fill="#1e293b" filter="url(#cardShadow)"/>
    <text x="100" y="24" text-anchor="middle" font-size="12" font-weight="800" fill="#f8fafc" letter-spacing="0.5">MATERI</text>
    <text x="100" y="38" text-anchor="middle" font-size="9" font-weight="500" fill="#94a3b8">Massa Inersia &amp; Menempati Ruang</text>
  </g>

  <!-- Connectors from MATERI to Level 1 -->
  <path d="M 380 56 L 380 72 L 190 72 L 190 88" fill="none" stroke="#94a3b8" stroke-width="2"/>
  <path d="M 380 72 L 570 72 L 570 88" fill="none" stroke="#94a3b8" stroke-width="2"/>

  <!-- Level 1 Left: ZAT TUNGGAL -->
  <g transform="translate(90, 88)">
    <rect width="200" height="46" rx="10" fill="#047857" filter="url(#cardShadow)"/>
    <text x="100" y="24" text-anchor="middle" font-size="11.5" font-weight="700" fill="#ffffff">ZAT TUNGGAL / MURNI</text>
    <text x="100" y="38" text-anchor="middle" font-size="9" font-weight="500" fill="#a7f3d0">Komposisi Kimiawi Homogen &amp; Tetap</text>
  </g>

  <!-- Level 1 Right: CAMPURAN -->
  <g transform="translate(470, 88)">
    <rect width="200" height="46" rx="10" fill="#0369a1" filter="url(#cardShadow)"/>
    <text x="100" y="24" text-anchor="middle" font-size="11.5" font-weight="700" fill="#ffffff">CAMPURAN</text>
    <text x="100" y="38" text-anchor="middle" font-size="9" font-weight="500" fill="#bae6fd">Gabungan Fisik • Sifat Asli Bertahan</text>
  </g>

  <!-- Connectors from Zat Tunggal to Unsur & Senyawa -->
  <path d="M 190 134 L 190 150 L 95 150 L 95 166" fill="none" stroke="#10b981" stroke-width="1.5"/>
  <path d="M 190 150 L 285 150 L 285 166" fill="none" stroke="#10b981" stroke-width="1.5"/>

  <!-- Level 2: UNSUR -->
  <g transform="translate(10, 166)">
    <rect width="170" height="88" rx="8" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5"/>
    <text x="85" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#065f46">UNSUR</text>
    <text x="85" y="34" text-anchor="middle" font-size="8.5" fill="#047857">Tidak dapat diurai lagi</text>
    <line x1="15" y1="42" x2="155" y2="42" stroke="#a7f3d0" stroke-width="1"/>
    <text x="15" y="56" font-size="8.5" fill="#065f46">• Logam: Fe, Cu, Au, Na</text>
    <text x="15" y="69" font-size="8.5" fill="#065f46">• Nonlogam: C, O₂, N₂, S₈</text>
    <text x="15" y="82" font-size="8.5" fill="#065f46">• Metaloid: Si, Ge, As</text>
  </g>

  <!-- Level 2: SENYAWA -->
  <g transform="translate(200, 166)">
    <rect width="170" height="88" rx="8" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5"/>
    <text x="85" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#065f46">SENYAWA</text>
    <text x="85" y="34" text-anchor="middle" font-size="8.5" fill="#047857">Hukum Perbandingan Tetap</text>
    <line x1="15" y1="42" x2="155" y2="42" stroke="#a7f3d0" stroke-width="1"/>
    <text x="15" y="58" font-size="8.5" fill="#065f46">• Senyawa Molekuler:</text>
    <text x="25" y="70" font-size="8" font-family="monospace" fill="#047857">H₂O, CO₂, NH₃, CH₄</text>
    <text x="15" y="82" font-size="8.5" fill="#065f46">• Senyawa Ionik: NaCl, CaCO₃</text>
  </g>

  <!-- Connectors from Campuran to Homogen & Heterogen -->
  <path d="M 570 134 L 570 150 L 475 150 L 475 166" fill="none" stroke="#0ea5e9" stroke-width="1.5"/>
  <path d="M 570 150 L 665 150 L 665 166" fill="none" stroke="#0ea5e9" stroke-width="1.5"/>

  <!-- Level 2: CAMPURAN HOMOGEN (LARUTAN) -->
  <g transform="translate(390, 166)">
    <rect width="170" height="88" rx="8" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5"/>
    <text x="85" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#0369a1">HOMOGEN (LARUTAN)</text>
    <text x="85" y="34" text-anchor="middle" font-size="8.5" fill="#0284c7">1 Fase Seragam (d &lt; 1 nm)</text>
    <line x1="15" y1="42" x2="155" y2="42" stroke="#bae6fd" stroke-width="1"/>
    <text x="15" y="56" font-size="8.5" fill="#0369a1">• Larutan NaCl dalam air</text>
    <text x="15" y="69" font-size="8.5" fill="#0369a1">• Udara bersih (N₂, O₂, Ar)</text>
    <text x="15" y="82" font-size="8.5" fill="#0369a1">• Alloy: Kuningan (Cu-Zn)</text>
  </g>

  <!-- Level 2: CAMPURAN HETEROGEN -->
  <g transform="translate(580, 166)">
    <rect width="170" height="88" rx="8" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5"/>
    <text x="85" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#0369a1">HETEROGEN</text>
    <text x="85" y="34" text-anchor="middle" font-size="8.5" fill="#0284c7">Tampak Batas Fase Fisik</text>
    <line x1="15" y1="42" x2="155" y2="42" stroke="#bae6fd" stroke-width="1"/>
    <text x="15" y="56" font-size="8.5" fill="#0369a1">• Koloid (1–100 nm, Tyndall):</text>
    <text x="25" y="68" font-size="8" fill="#0284c7">Susu, Kabut, Darah, Cat</text>
    <text x="15" y="82" font-size="8.5" fill="#0369a1">• Suspensi (&gt;100 nm): Air Pasir</text>
  </g>
</svg>
<p class="text-center text-xs font-semibold text-slate-500 mt-2">Gambar 1.1: Taksonomi Klasifikasi Materi dan Pemisahan Zat Tunggal vs Campuran.</p>

---

#### 2. Formalisasi Konsep & Penurunan Rumus (Representasi Simbolik & Aturan Konsep)

Materi didefinisikan sebagai segala sesuatu yang memiliki massa inersia dan menempati ruang. Berdasarkan komposisi dan sifat kimianya, materi terbagi menjadi dua kelompok fundamental:

##### A. Zat Tunggal (Zat Murni)
Zat yang memiliki komposisi kimia homogen dan sifat fisika-kimia konstan pada seluruh bagian sampel:
- **Unsur:** Zat kimia paling sederhana yang tidak dapat diuraikan lagi menjadi zat lain melalui reaksi kimia biasa. Terdiri dari logam ($\\ce{Fe}, \\ce{Cu}, \\ce{Na}$), nonlogam ($\\ce{O2}, \\ce{N2}, \\ce{C}, \\ce{S8}$), dan metaloid semi-penghantar ($\\ce{Si}, \\ce{Ge}$).
- **Senyawa:** Gabungan kimiawi dua atau lebih unsur berbeda dengan perbandingan massa unsur yang **pasti dan tetap** (**Hukum Proust**). Senyawa hanya dapat diuraikan kembali menjadi unsur penyusunnya melalui **reaksi kimia**. Sifat senyawa sama sekali baru dan berbeda dari unsur pembentuknya (contoh: gas $\\ce{H2}$ eksplosif bereaksi dengan gas $\\ce{O2}$ pembakar menghasilkan cairan $\\ce{H2O}$ yang memadamkan api).

##### B. Campuran
Penggabungan fisik dua atau lebih zat murni di mana masing-masing komponen tetap mempertahankan sifat aslinya dan dapat dipisahkan secara fisika:
- **Campuran Homogen (Larutan):** Partikel terdispersi pada skala molekuler/ionik ($d < 1\\text{ nm}$) tanpa batas fasa (contoh: larutan $\\ce{NaCl}$ dalam air, paduan logam kuningan $\\ce{Cu-Zn}$, dan udara bersih).
- **Campuran Heterogen:** Memiliki bidang batas fasa yang teramati, terbagi menjadi **koloid** ($1 - 100\\text{ nm}$, memperlihatkan Efek Tyndall, contoh: susu, kabut) dan **suspensi** ($> 100\\text{ nm}$, mengendap secara gravitasi, contoh: campuran air dan pasir).

##### C. Empat Tanda Pasti Reaksi Kimia (Perubahan Kimia)
Reaksi kimia selalu melibatkan pemutusan ikatan lama dan pembentukan ikatan baru, ditandai oleh minimal satu gejala:
1. **Perubahan Warna:** Pembentukan kromofor atau kompleks baru (misal $\\ce{FeCl3(aq) + KSCN(aq) -> [Fe(SCN)]^2+(aq)}$ merah darah).
2. **Pembentukan Gas:** Lepasnya molekul gas tak larut (misal $\\ce{Mg(s) + 2HCl(aq) -> MgCl2(aq) + H2(g)^}$).
3. **Pembentukan Endapan:** Kisi kristal ionik sukar larut ($Q_{\\text{sp}} > K_{\\text{sp}}$, misal $\\ce{AgNO3(aq) + NaCl(aq) -> AgCl(s) v + NaNO3(aq)}$).
4. **Perubahan Kalor:** Pelepasan kalor eksotermik ($\\Delta H < 0$) atau penyerapan kalor endotermik ($\\Delta H > 0$).

> [!SYARAT_BATAS]
> ### ⚖️ Syarat Batas & Asumsi
> **Kondisi Berlaku:** Hukum Perbandingan Tetap (Proust) berlaku untuk senyawa murni stoikiometrik (*Daltonida*). Komponen campuran dapat dipisahkan secara fisika murni (filtrasi, evaporasi, distilasi, sublimasi) tanpa mengubah identitas molekuler masing-masing spesi.
> **Batas Keberlakuan:** Senyawa non-stoikiometrik (*Berthollida*, seperti oksida logam transisi $\\ce{Fe}_{0.95}\\ce{O}$) memiliki rasio yang sedikit bervariasi bergantung pada tekanan oksigen sintesis. Paduan logam (*alloy*) bukan senyawa kimia, melainkan larutan padat antar-logam.

##### 🧪 Uji Konsep Kualitatif
**Pertanyaan:** Mengapa larutan garam dapur ($\\ce{NaCl}$ dalam air) digolongkan sebagai campuran homogen dan bukan senyawa baru, padahal garam telah larut merata dan tidak tersaring oleh kertas saring?  
*Analisis:* Larutan garam tidak membentuk ikatan kovalen atau ionik baru antara $\\ce{Na+}$/$\\ce{Cl-}$ dengan molekul $\\ce{H2O}$ (hanya interaksi hidrasi dipol-ion lemah). Air dapat diuapkan kembali melalui distilasi/pemanasan sederhana untuk memperoleh kristal garam $\\ce{NaCl}$ murni dengan massa yang utuh sesuai hukum kekekalan massa Lavoisier.

---

#### 3. Taktik Soal (Penerapan Terpadu)

##### 📝 Soal Contoh (Worked Example)
**Soal:** Sebuah cuplikan serbuk abu-abu hitam seberat $10.00\\text{ g}$ diuji di laboratorium. Ketika didekatkan magnet, sebagian serbuk menempel kuat pada magnet. Sisa serbuk kemudian dilarutkan ke dalam air hangat, disaring dengan kertas saring, dan filtrat beningnya diuapkan hingga kering menyisakan kristal putih seberat $3.50\\text{ g}$ yang berasa asin. Klasifikasikan cuplikan awal dan jelaskan alur analisisnya!

**Strategi Penyelesaian:**
1. *Identifikasi Metode Pemisahan Fisik:* Serbuk yang tertarik magnet adalah serbuk besi ($\\ce{Fe}$), yang dipisahkan secara magnetik tanpa reaksi kimia.
2. *Pemisahan Komponen Larut:* Kristal putih yang lolos kertas saring dan mengkristal setelah evaporasi adalah garam dapur ($\\ce{NaCl}$).
3. *Penetapan Kesimpulan:* Karena komponen-komponen penyusun cuplikan dapat dipisahkan seluruhnya melalui metode fisika (magnetik, pelarutan, filtrasi, dan evaporasi) dengan sifat zat asal yang tetap utuh, maka cuplikan awal **pasti merupakan campuran heterogen**, bukan senyawa kimia.

> [!TITIK_RAWAN]
> ### ⚠️ Titik Rawan Kesalahan (Common Pitfalls)
> - **Miskonsepsi Pendidihan Air:** Siswa sering keliru beranggapan bahwa air mendidih memutus ikatan kovalen $\\ce{H-O}$ menjadi gas $\\ce{H2}$ dan $\\ce{O2}$. Ingat: perubahan fasa hanyalah perubahan fisika yang merenggangkan ikatan hidrogen antarmolekul!
> - **Tertukar Senyawa vs Campuran Homogen:** Kuningan ($\\ce{Cu-Zn}$) sering disangka senyawa karena warnanya seragam keemasan. Kuningan adalah campuran homogen (larutan padat/alloy) karena perbandingan massa $\\ce{Cu}$ dan $\\ce{Zn}$ dapat dibuat bervariasi sesuai kebutuhan industri.

> [!PEMERIKSAAN_LOGIKA]
> ### 🔍 Pemeriksaan Logika (Sanity Check) & Koneksi
> - **Pemeriksaan Logika:** Jumlah massa serbuk besi + massa kristal garam + massa residu yang tertinggal di kertas saring wajib berjumlah tepat $10.00\\text{ g}$ sesuai Hukum Kekekalan Massa Lavoisier ($\\sum m_{\\text{awal}} = \\sum m_{\\text{akhir}}$).
> - **Koneksi Lintas Bab:** Konsep perbandingan massa unsur dalam senyawa murni pada Subbab 1.1 ini akan diformalkan secara kuantitatif melalui stoikiometri mol dan penentuan rumus empiris di Bab 3.

##### 🎯 Latihan Terbimbing
**Soal Latihan:** Campuran pasir silika ($\\ce{SiO2}$), garam dapur ($\\ce{NaCl}$), dan serbuk kamper/iodin ($\\ce{I2}$) seberat $15.00\\text{ g}$ ingin dipisahkan menjadi komponen-komponen murninya. Tentukan urutan 3 teknik pemisahan fisika yang paling tepat secara berurutan!  
*Kunci Jawaban Akhir:* Sublimasi (menguapkan iodin terlebih dahulu) $\\rightarrow$ Pelarutan dalam air diikuti Filtrasi (menyaring pasir silika) $\\rightarrow$ Evaporasi/Kristalisasi filtrat (memperoleh kristal garam $\\ce{NaCl}$).`,
      keyFormulas: [
        { name: 'Hukum Kekekalan Massa (Lavoisier)', formula: '\\sum m_{\\text{reaktan}} = \\sum m_{\\text{produk}}' },
        { name: 'Persentase Massa Komponen', formula: '\\% m_i = \\frac{m_i}{m_{\\text{total}}} \\times 100\\%' },
        { name: 'Rasio Massa Hukum Proust', formula: '\\frac{m_A}{m_B} = \\text{tetap/konstan}' },
      ],
    },
    {
      tag: 'pengukuran-angka-penting-si',
      tags: ['angka-penting-pengukuran', 'bankers-rounding', 'akurasi-dan-presisi', 'satuan-si-kimia', 'galat-relatif'],
      title: 'Subbab 1.2: Pengukuran Ilmiah, Angka Penting, Aturan Pembulatan Genap & Akurasi vs Presisi',
      summary: 'Metrologi ilmiah kimia, pembedaan akurasi vs presisi via papan target panah, 4 aturan emas angka penting, konvensi pembulatan genap IUPAC/OSN, serta analisis galat relatif.',
      content: `#### 1. Intuisi & Model Partikel (Jembatan Makroskopik ke Submikroskopik)

Dalam sains analitik, tidak ada pengukuran instrumen fisik yang bernilai mutlak sempurna. Setiap kali seorang analis membaca skala buret atau menimbang reagen pada neraca analitik, angka terakhir yang dicatat selalu mengandung **ketidakpastian (*uncertainty*)** yang berasal dari batas resolusi optik mata manusia dan fluktuasi termal molekuler instrumen.

Oleh karena itu, dunia ilmiah membedakan secara tegas dua parameter keandalan data ukur:
- **Akurasi (*Accuracy / Ketepatan*):** Seberapa dekat nilai rata-rata hasil eksperimen dengan **nilai rujukan sejati yang diterima secara universal (*true/accepted value*)**. Akurasi mencerminkan kebersihan instrumen dari galat sistematis (seperti buret yang salah tera atau neraca yang belum di-nolkan).
- **Presisi (*Precision / Ketelitian*):** Seberapa rapat keterulangan hasil-hasil pengukuran ketika pengujian diulang berkali-kali pada kondisi identik (**reprodusibilitas**). Presisi mencerminkan kestabilan instrumen dan ketiadaan galat acak (*noise*).

Perhatikan visualisasi analogi papan target sasaran tembak pada **Gambar 1.2** berikut:

<svg data-diagram="sma-t01-akurasi-presisi" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 210" width="100%" height="auto" class="max-w-[760px] my-6 select-none font-sans">
  <defs>
    <filter id="tgtShadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="2" flood-color="#0f172a" flood-opacity="0.08"/>
    </filter>
  </defs>

  <!-- Target 1: Akurasi Tinggi & Presisi Tinggi -->
  <g transform="translate(10, 10)">
    <rect width="175" height="190" rx="12" fill="#ffffff" stroke="#bbf7d0" stroke-width="1.5" filter="url(#tgtShadow)"/>
    <rect width="175" height="28" rx="12" fill="#dcfce7"/>
    <text x="87" y="19" text-anchor="middle" font-size="9.5" font-weight="800" fill="#15803d">AKURAT &amp; PRESISI</text>
    <circle cx="87" cy="98" r="50" fill="#f8fafc" stroke="#94a3b8" stroke-width="1"/>
    <circle cx="87" cy="98" r="35" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1"/>
    <circle cx="87" cy="98" r="20" fill="#fee2e2" stroke="#f87171" stroke-width="1"/>
    <circle cx="87" cy="98" r="6" fill="#dc2626"/>
    <circle cx="86" cy="97" r="3" fill="#1e293b"/>
    <circle cx="88" cy="99" r="3" fill="#1e293b"/>
    <circle cx="85" cy="100" r="3" fill="#1e293b"/>
    <circle cx="89" cy="96" r="3" fill="#1e293b"/>
    <text x="87" y="165" text-anchor="middle" font-size="8.5" font-weight="600" fill="#166534">Rapat di Pusat Target</text>
    <text x="87" y="178" text-anchor="middle" font-size="7.5" fill="#15803d">(Ideal Analisis Standar)</text>
  </g>

  <!-- Target 2: Presisi Tinggi, Akurasi Rendah (Galat Sistematis) -->
  <g transform="translate(198, 10)">
    <rect width="175" height="190" rx="12" fill="#ffffff" stroke="#fed7aa" stroke-width="1.5" filter="url(#tgtShadow)"/>
    <rect width="175" height="28" rx="12" fill="#ffedd5"/>
    <text x="87" y="19" text-anchor="middle" font-size="9.5" font-weight="800" fill="#c2410c">PRESISI, TIDAK AKURAT</text>
    <circle cx="87" cy="98" r="50" fill="#f8fafc" stroke="#94a3b8" stroke-width="1"/>
    <circle cx="87" cy="98" r="35" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1"/>
    <circle cx="87" cy="98" r="20" fill="#fee2e2" stroke="#f87171" stroke-width="1"/>
    <circle cx="87" cy="98" r="6" fill="#dc2626"/>
    <circle cx="118" cy="70" r="3" fill="#1e293b"/>
    <circle cx="120" cy="72" r="3" fill="#1e293b"/>
    <circle cx="117" cy="73" r="3" fill="#1e293b"/>
    <circle cx="121" cy="69" r="3" fill="#1e293b"/>
    <text x="87" y="165" text-anchor="middle" font-size="8.5" font-weight="600" fill="#9a3412">Rapat tetapi Meleset</text>
    <text x="87" y="178" text-anchor="middle" font-size="7.5" fill="#c2410c">(Ada Galat Kalibrasi Alat)</text>
  </g>

  <!-- Target 3: Akurasi Tinggi, Presisi Rendah (Galat Acak) -->
  <g transform="translate(386, 10)">
    <rect width="175" height="190" rx="12" fill="#ffffff" stroke="#fed7aa" stroke-width="1.5" filter="url(#tgtShadow)"/>
    <rect width="175" height="28" rx="12" fill="#ffedd5"/>
    <text x="87" y="19" text-anchor="middle" font-size="9.5" font-weight="800" fill="#c2410c">AKURAT, TIDAK PRESISI</text>
    <circle cx="87" cy="98" r="50" fill="#f8fafc" stroke="#94a3b8" stroke-width="1"/>
    <circle cx="87" cy="98" r="35" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1"/>
    <circle cx="87" cy="98" r="20" fill="#fee2e2" stroke="#f87171" stroke-width="1"/>
    <circle cx="87" cy="98" r="6" fill="#dc2626"/>
    <circle cx="87" cy="68" r="3" fill="#1e293b"/>
    <circle cx="87" cy="128" r="3" fill="#1e293b"/>
    <circle cx="57" cy="98" r="3" fill="#1e293b"/>
    <circle cx="117" cy="98" r="3" fill="#1e293b"/>
    <text x="87" y="165" text-anchor="middle" font-size="8.5" font-weight="600" fill="#9a3412">Tersebar, Rata-rata Tepat</text>
    <text x="87" y="178" text-anchor="middle" font-size="7.5" fill="#c2410c">(Fluktuasi Acak / Noise)</text>
  </g>

  <!-- Target 4: Tidak Akurat & Tidak Presisi -->
  <g transform="translate(574, 10)">
    <rect width="175" height="190" rx="12" fill="#ffffff" stroke="#fecaca" stroke-width="1.5" filter="url(#tgtShadow)"/>
    <rect width="175" height="28" rx="12" fill="#fee2e2"/>
    <text x="87" y="19" text-anchor="middle" font-size="9.5" font-weight="800" fill="#b91c1c">BURUK TOTAL</text>
    <circle cx="87" cy="98" r="50" fill="#f8fafc" stroke="#94a3b8" stroke-width="1"/>
    <circle cx="87" cy="98" r="35" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1"/>
    <circle cx="87" cy="98" r="20" fill="#fee2e2" stroke="#f87171" stroke-width="1"/>
    <circle cx="87" cy="98" r="6" fill="#dc2626"/>
    <circle cx="120" cy="55" r="3" fill="#1e293b"/>
    <circle cx="135" cy="85" r="3" fill="#1e293b"/>
    <circle cx="105" cy="130" r="3" fill="#1e293b"/>
    <circle cx="125" cy="115" r="3" fill="#1e293b"/>
    <text x="87" y="165" text-anchor="middle" font-size="8.5" font-weight="600" fill="#991b1b">Tersebar dan Meleset</text>
    <text x="87" y="178" text-anchor="middle" font-size="7.5" fill="#b91c1c">(Kesalahan Prosedur Fatal)</text>
  </g>
</svg>
<p class="text-center text-xs font-semibold text-slate-500 mt-2">Gambar 1.2: Perbedaan Mendasar Akurasi (Ketepatan terhadap Nilai Rujukan) dan Presisi (Keterulangan Hasil Pengukuran).</p>

---

#### 2. Formalisasi Konsep & Penurunan Rumus (Representasi Simbolik & Aturan Konsep)

Data hasil pengukuran kuantitatif di laboratorium wajib dilaporkan menggunakan kaidah **Angka Penting (AP)**. Angka penting terdiri atas semua digit yang terbaca pasti pada skala instrumen ditambah **tepat satu digit taksiran terakhir**.

##### A. Empat Kaidah Emas Penentuan Angka Penting (AP)
1. **Semua angka bukan nol adalah AP.** (Contoh: $28.45\\text{ g}$ memiliki **4 AP**).
2. **Angka nol di antara angka bukan nol (nol terjepit) adalah AP.** (Contoh: $10.05\\text{ mL}$ memiliki **4 AP**; $302\\text{ K}$ memiliki **3 AP**).
3. **Angka nol di sebelah kiri angka bukan nol pertama BUKAN AP** (hanya bertindak sebagai pengatur posisi desimal). (Contoh: $0.0025\\text{ M}$ hanya memiliki **2 AP**; $0.080\\text{ g}$ memiliki **2 AP**).
4. **Angka nol di sebelah kanan tanda desimal dan terletak setelah angka bukan nol adalah AP.** (Contoh: $50.00\\text{ mL}$ memiliki **4 AP**; $1.20\\text{ g}$ memiliki **3 AP**).

##### B. Aturan Operasi Berhitung & Konvensi Pembulatan Genap
- **Penjumlahan & Pengurangan:** Hasil akhir hanya boleh memiliki desimal sebanyak **desimal tersedikit** dari komponen yang dijumlahkan:
  $$12.11\\text{ g (2 desimal)} + 0.235\\text{ g (3 desimal)} + 3.4\\text{ g (1 desimal)} = 15.745\\text{ g} \\xrightarrow{\\text{dibulatkan ke 1 desimal}} \\mathbf{15.7\\text{ g}}$$
- **Perkalian & Pembagian:** Hasil akhir hanya boleh memiliki angka penting sebanyak **angka penting paling sedikit** dari komponen yang dihitung:
  $$\\rho = \\frac{14.28\\text{ g (4 AP)}}{3.1\\text{ mL (2 AP)}} = 4.60645\\dots\\text{ g mL}^{-1} \\xrightarrow{\\text{dibulatkan ke 2 AP}} \\mathbf{4.6\\text{ g mL}^{-1}}$$

> [!SYARAT_BATAS]
> ### ⚖️ Syarat Batas & Asumsi
> **Kondisi Berlaku:** Bilangan eksak (bilangan bulat cacah seperti koefisien reaksi $2\\ce{H2}$, kelipatan $3\\text{ kali}$, atau faktor konversi eksak $1\\text{ L} = 1000\\text{ mL}$) memiliki jumlah angka penting tak terhingga ($\\infty$). Bilangan eksak tidak pernah membatasi ketelitian hasil perhitungan akhir!
> **Batas Keberlakuan:** Kaidah angka penting diterapkan murni pada **langkah paling akhir** pelaporan. Jangan memotong angka desimal pada perhitungan antara (*intermediate step*) di kalkulator karena akan menimbulkan akumulasi galat pembulatan (*rounding drift*).

##### C. Konvensi Pembulatan Genap Terdekat (*Banker's Rounding / Round-to-Even*)
Sesuai standar internasional IUPAC, jika angka paling akhir yang dibuang bernilai **tepat 5** (atau $5$ diikuti nol):
- **Jika angka di depannya GANJIL:** Bulatkan ke **ATAS** menjadi genap (contoh: $3.75 \\rightarrow 3.8$).
- **Jika angka di depannya GENAP:** Bulatkan ke **BAWAH** tetap genap (contoh: $3.45 \\rightarrow 3.4$).

##### 🧪 Uji Konsep Kualitatif
**Pertanyaan:** Berapakah jumlah angka penting dari data konsentrasi $0.00450\\text{ mol L}^{-1}$ dan bagaimana pelaporan angka $12.35\\text{ g}$ serta $12.45\\text{ g}$ jika masing-masing dibulatkan hingga menyisakan 1 tempat desimal?  
*Analisis:* Nilai $0.00450\\text{ mol L}^{-1}$ memiliki **3 AP** (tiga angka nol awal adalah pengatur koma, sedangkan nol di ujung akhir setelah desimal adalah angka penting). Menurut *Banker's Rounding*, $12.35$ dibulatkan menjadi $12.4$ (karena $3$ ganjil dibulatkan ke genap), sedangkan $12.45$ dibulatkan tetap menjadi $12.4$ (karena $4$ sudah genap).

---

#### 3. Taktik Soal (Penerapan Terpadu)

##### 📝 Soal Contoh (Worked Example)
**Soal:** Seorang analis mengukur massa jenis cairan organik menggunakan neraca analitik dan buret presisi:
- Massa botol timbang kosong: $25.320\\text{ g}$
- Massa botol timbang + cairan: $42.185\\text{ g}$
- Skala awal buret: $1.15\\text{ mL}$; Skala akhir buret: $21.40\\text{ mL}$
Hitung massa jenis ($\\rho$) cairan tersebut dan laporkan dengan kaidah angka penting yang tepat!

**Strategi Penyelesaian:**
1. *Hitung Massa Cairan:*
   $$m = 42.185\\text{ g} - 25.320\\text{ g} = 16.865\\text{ g} \\quad (3\\text{ desimal, 5 AP})$$
2. *Hitung Volume Cairan:*
   $$V = 21.40\\text{ mL} - 1.15\\text{ mL} = 20.25\\text{ mL} \\quad (2\\text{ desimal, 4 AP})$$
3. *Hitung Massa Jenis (Pembagian):*
   $$\\rho = \\frac{16.865\\text{ g}}{20.25\\text{ mL}} = 0.8328395\\dots\\text{ g mL}^{-1}$$
   Karena pembagi memiliki 4 AP ($20.25$) dan pembilang memiliki 5 AP ($16.865$), hasil akhir wajib dibatasi menjadi **4 AP**:
   $$\\rho = \\mathbf{0.8328\\text{ g mL}^{-1}}$$

> [!TITIK_RAWAN]
> ### ⚠️ Titik Rawan Kesalahan (Common Pitfalls)
> - **Ambiguitas Nol Akhir Bilangan Bulat:** Angka seperti $2500\\text{ mL}$ ambigu (bisa 2, 3, atau 4 AP). Wajib gunakan Notasi Ilmiah: $2.5 \\times 10^3\\text{ mL}$ (2 AP) atau $2.500 \\times 10^3\\text{ mL}$ (4 AP).
> - **Menyamakan Desimal dan AP pada Perkalian:** Siswa sering menyamakan aturan desimal penjumlahan pada operasi perkalian. Ingat: perkalian/pembagian diatur oleh **jumlah angka penting total**, bukan jumlah desimal!

> [!PEMERIKSAAN_LOGIKA]
> ### 🔍 Pemeriksaan Logika (Sanity Check) & Koneksi
> - **Pemeriksaan Logika:** Densitas cairan organik umumnya berkisar antara $0.6 - 1.5\\text{ g mL}^{-1}$. Hasil $0.8328\\text{ g mL}^{-1}$ sangat masuk akal secara fisis (mendekati kerapatan hidrokarbon/alkohol).
> - **Koneksi Lintas Bab:** Pengendalian angka penting ini menjadi penentu presisi saat menghitung konsentrasi titrasi asam-basa (Bab 7) dan massa endapan stoikiometri (Bab 3).

##### 🎯 Latihan Terbimbing
**Soal Latihan:** Pelat seng tipis ditimbang seberat $8.450\\text{ g}$ dan memiliki volume $1.2\\text{ cm}^3$. Hitung kerapatan massa pelat tersebut sesuai aturan angka penting!  
*Kunci Jawaban Akhir:* $\\mathbf{7.0\\text{ g cm}^{-3}}$ (dibatasi 2 AP sesuai volume $1.2\\text{ cm}^3$).`,
      keyFormulas: [
        { name: 'Kerapatan Massa (Densitas)', formula: '\\rho = \\frac{m}{V}' },
        { name: 'Konversi Suhu Celcius ke Kelvin', formula: 'T(\\text{K}) = T(^\\circ\\text{C}) + 273.15' },
        { name: 'Persen Galat Relatif Eksperimen', formula: '\\% \\text{Galat} = \\left| \\frac{\\text{Eksperimen} - \\text{Literatur}}{\\text{Literatur}} \\right| \\times 100\\%' },
      ],
    },
  ],
  core_concepts: [
    {
      tag: 'metode-ilmiah-dan-variabel',
      tags: ['metode-ilmiah', 'tahapan-metode-ilmiah', 'variabel-bebas-terikat-kontrol', 'kontrol-positif-negatif', 'desain-eksperimen'],
      title: 'Subbab 1.3: Siklus Metode Ilmiah, Desain Variabel Eksperimen & Kelompok Kontrol',
      summary: 'Penyelidikan sains berbasis analogi detektif forensik, 7 tahapan siklus metode ilmiah, triad variabel, pembedaan kontrol negatif vs kontrol positif, serta prinsip uji adil (fair test).',
      content: `#### 1. Intuisi & Model Partikel (Jembatan Makroskopik ke Submikroskopik)

Sains kimia berkembang bukan melalui tebakan acak, melainkan melalui alur investigasi sistematis yang menyerupai **analogi detektif kriminal forensik** di tempat kejadian perkara (TKP). Seorang ilmuwan yang mendapati fenomena alam tidak langsung menarik kesimpulan, melainkan menempuh langkah-langkah terstruktur:

1. **Observasi Gejala Alamiah:** Mengamati fakta makroskopik secara teliti (seperti apel yang dipotong cepat mencokelat di udara terbuka, namun tetap segar saat dilumuri air perasan jeruk nipis).
2. **Merumuskan Pertanyaan Ilmiah:** *"Senyawa kimia apa dalam jeruk nipis yang menghambat reaksi pencokelatan, dan bagaimana mekanisme molekulernya?"*
3. **Membangun Model Hipotesis yang Dapat Diuji (*Falsifiable*):** Mengajukan dugaan sementara berlandaskan literatur (misal: antioksidan asam askorbat dalam jeruk bertindak sebagai reduktor yang mendonorkan elektron kepada radikal polifenol sebelum sempat teroksidasi oleh oksigen udara).
4. **Merancang Eksperimen Uji Adil (*Fair Test*):** Mengisolasi variabel secara ketat dengan kelompok pembanding terkontrol.
5. **Analisis Data & Verifikasi Hipotesis:** Menguji apakah bukti empiris mendukung atau menyangkal hipotesis.

Perhatikan alur siklus tujuh tahapan baku penyelidikan ilmiah pada **Gambar 1.3** berikut:

<svg data-diagram="sma-t01-metode-ilmiah" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 230" width="100%" height="auto" class="max-w-[760px] my-6 select-none font-sans">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#64748b"/>
    </marker>
    <marker id="arrowRed" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#dc2626"/>
    </marker>
    <marker id="arrowGreen" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#16a34a"/>
    </marker>
    <filter id="mShadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="2" flood-color="#0f172a" flood-opacity="0.06"/>
    </filter>
  </defs>

  <g transform="translate(10, 15)">
    <rect width="130" height="62" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" filter="url(#mShadow)"/>
    <text x="65" y="24" text-anchor="middle" font-size="10" font-weight="700" fill="#0f172a">1. Observasi</text>
    <text x="65" y="38" text-anchor="middle" font-size="8" fill="#64748b">Gejala Alamiah</text>
    <text x="65" y="50" text-anchor="middle" font-size="7.5" fill="#94a3b8">Kualitatif &amp; Kuantitatif</text>
  </g>
  <line x1="140" y1="46" x2="158" y2="46" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>

  <g transform="translate(160, 15)">
    <rect width="130" height="62" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" filter="url(#mShadow)"/>
    <text x="65" y="24" text-anchor="middle" font-size="10" font-weight="700" fill="#0f172a">2. Masalah</text>
    <text x="65" y="38" text-anchor="middle" font-size="8" fill="#64748b">Rumusan Pertanyaan</text>
    <text x="65" y="50" text-anchor="middle" font-size="7.5" fill="#94a3b8">Variabel Spesifik</text>
  </g>
  <line x1="290" y1="46" x2="308" y2="46" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>

  <g transform="translate(310, 15)">
    <rect width="130" height="62" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" filter="url(#mShadow)"/>
    <text x="65" y="24" text-anchor="middle" font-size="10" font-weight="700" fill="#0f172a">3. Kajian Pustaka</text>
    <text x="65" y="38" text-anchor="middle" font-size="8" fill="#64748b">Teori &amp; Literatur</text>
    <text x="65" y="50" text-anchor="middle" font-size="7.5" fill="#94a3b8">Jurnal &amp; Buku Rujukan</text>
  </g>
  <line x1="440" y1="46" x2="458" y2="46" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>

  <g transform="translate(460, 15)">
    <rect width="135" height="62" rx="8" fill="#fffbeb" stroke="#fcd34d" stroke-width="1.5" filter="url(#mShadow)"/>
    <text x="67" y="24" text-anchor="middle" font-size="10" font-weight="700" fill="#92400e">4. Hipotesis</text>
    <text x="67" y="38" text-anchor="middle" font-size="8" fill="#b45309">Dugaan Sementara</text>
    <text x="67" y="50" text-anchor="middle" font-size="7.5" font-family="monospace" fill="#78350f">H₀ &amp; H₁ (Falsifiable)</text>
  </g>
  <line x1="595" y1="46" x2="613" y2="46" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>

  <g transform="translate(615, 15)">
    <rect width="135" height="62" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5" filter="url(#mShadow)"/>
    <text x="67" y="24" text-anchor="middle" font-size="10" font-weight="700" fill="#1e40af">5. Eksperimen</text>
    <text x="67" y="38" text-anchor="middle" font-size="8" fill="#2563eb">Uji Adil (Fair Test)</text>
    <text x="67" y="50" text-anchor="middle" font-size="7.5" fill="#1d4ed8">Bebas, Terikat, Kontrol</text>
  </g>

  <path d="M 682 77 L 682 110 L 620 110 L 620 128" fill="none" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow)"/>

  <g transform="translate(540, 130)">
    <rect width="145" height="62" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5" filter="url(#mShadow)"/>
    <text x="72" y="24" text-anchor="middle" font-size="10" font-weight="700" fill="#1e40af">6. Analisis Data</text>
    <text x="72" y="38" text-anchor="middle" font-size="8" fill="#2563eb">Tabel, Grafik &amp; Galat</text>
    <text x="72" y="50" text-anchor="middle" font-size="7.5" fill="#1d4ed8">Statistik Uji Empiris</text>
  </g>
  <line x1="540" y1="161" x2="480" y2="161" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>

  <g transform="translate(360, 133)">
    <polygon points="55,0 110,28 55,56 0,28" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.5"/>
    <text x="55" y="25" text-anchor="middle" font-size="9" font-weight="700" fill="#991b1b">Data Sesuai</text>
    <text x="55" y="37" text-anchor="middle" font-size="8.5" font-weight="600" fill="#991b1b">Hipotesis?</text>
  </g>

  <line x1="360" y1="161" x2="278" y2="161" stroke="#16a34a" stroke-width="2" marker-end="url(#arrowGreen)"/>
  <rect x="290" y="148" width="50" height="16" rx="4" fill="#dcfce7"/>
  <text x="315" y="160" text-anchor="middle" font-size="8" font-weight="700" fill="#15803d">YA</text>

  <g transform="translate(40, 130)">
    <rect width="235" height="62" rx="8" fill="#ecfdf5" stroke="#86efac" stroke-width="2" filter="url(#mShadow)"/>
    <text x="117" y="24" text-anchor="middle" font-size="10.5" font-weight="800" fill="#065f46">7. KESIMPULAN &amp; PUBLIKASI</text>
    <text x="117" y="38" text-anchor="middle" font-size="8.5" font-weight="600" fill="#047857">✓ Hipotesis Terbukti Sahih</text>
    <text x="117" y="50" text-anchor="middle" font-size="7.5" fill="#059669">Membangun Hukum / Teori Baru</text>
  </g>

  <path d="M 415 133 L 415 105 L 527 105 L 527 82" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#arrowRed)"/>
  <rect x="425" y="96" width="90" height="18" rx="4" fill="#fee2e2" stroke="#fca5a5"/>
  <text x="470" y="109" text-anchor="middle" font-size="8" font-weight="700" fill="#b91c1c">TIDAK: Revisi Hipotesis</text>
</svg>
<p class="text-center text-xs font-semibold text-slate-500 mt-2">Gambar 1.3: Siklus Tujuh Tahapan Baku Penyelidikan Metode Ilmiah.</p>

---

#### 2. Formalisasi Konsep & Penurunan Rumus (Representasi Simbolik & Aturan Konsep)

Dalam merancang eksperimen ilmiah yang sah (*valid*), peneliti wajib mengendalikan **Triad Variabel** agar tercipta **Uji Adil (*Fair Test*)**:

##### A. Triad Variabel
| Jenis Variabel | Peran Operasional dalam Eksperimen | Penempatan pada Grafik | Contoh: Laju Pelarutan Logam $\\ce{Mg}$ |
| :--- | :--- | :---: | :--- |
| **Variabel Bebas** (*Independent*) | Faktor yang **sengaja dimanipulasi/diubah** secara terencana oleh peneliti. | **Sumbu-$x$** (Horizontal) | Konsentrasi larutan $\\ce{HCl}$: $0.5\\text{ M}, 1.0\\text{ M}, 2.0\\text{ M}$. |
| **Variabel Terikat** (*Dependent*) | Besaran respons yang **diukur hasilnya** sebagai akibat perubahan variabel bebas. | **Sumbu-$y$** (Vertikal) | Laju produksi gas $\\ce{H2}$ per menit ($\\text{mL min}^{-1}$). |
| **Variabel Kontrol** (*Controlled*) | Semua faktor lain yang **wajib dijaga konstan** selama percobaan. | Parameter Tetap | Massa dan luas permukaan pita $\\ce{Mg}$ ($0.10\\text{ g}$), suhu ruang ($25^\\circ\\text{C}$). |

##### B. Pembedaan Kritis: Kontrol Negatif vs Kontrol Positif
1. **Kelompok Kontrol Negatif (*Negative Control*):** Sampel uji yang **sama sekali tidak diberi perlakuan variabel bebas** (misal: larutan hidrogen peroksida tanpa penambahan katalis). Tujuannya adalah membuktikan bahwa tanpa perlakuan variabel bebas, perubahan tidak terjadi secara spontan.
2. **Kelompok Kontrol Positif (*Positive Control*):** Sampel uji yang diberi perlakuan standar yang **sudah pasti memberikan respons positif yang diketahui** (misal: pengujian pati pada makanan menggunakan larutan amilum murni yang pasti berubah menjadi biru kehitaman saat ditetesi iodin). Tujuannya membuktikan bahwa instrumen dan reagen uji berfungsi normal.

> [!SYARAT_BATAS]
> ### ⚖️ Syarat Batas & Asumsi
> **Kondisi Berlaku:** Prinsip *Ceteris Paribus* (hanya boleh ada **tepat SATU variabel bebas** yang diubah pada satu rangkaian pengujian). Hipotesis ilmiah wajib bersifat *falsifiable* (memiliki kriteria empiris yang berpotensi membuktikannya salah).
> **Batas Keberlakuan:** Jika dua variabel diubah sekaligus (misal suhu dinaikkan bersamaan dengan penaikan konsentrasi), maka eksperimen tersebut dinyatakan cacat (*confounded*) dan kesimpulannya tidak dapat diterima secara ilmiah.

##### 🧪 Uji Konsep Kualitatif
**Pertanyaan:** Dalam suatu eksperimen laju reaksi pelarutan batu pualam ($\\ce{CaCO3}$) oleh asam klorida ($\\ce{HCl}$), seorang siswa menggunakan kepingan pualam besar dengan $\\ce{HCl } 1\\text{ M}$ pada suhu $25^\\circ\\text{C}$, lalu membandingkannya dengan serbuk pualam halus dengan $\\ce{HCl } 3\\text{ M}$ pada suhu $45^\\circ\\text{C}$. Apakah desain eksperimen ini memenuhi asas uji adil?  
*Analisis:* Desain ini **sangat tidak adil (cacat eksperimen)** karena terdapat tiga variabel bebas yang diubah sekaligus: ukuran partikel, konsentrasi asam, dan suhu reaksi. Peneliti tidak akan pernah dapat menyimpulkan faktor mana yang sebenarnya mempercepat reaksi.

---

#### 3. Taktik Soal (Penerapan Terpadu)

##### 📝 Soal Contoh (Worked Example)
**Soal:** Sekelompok siswa menguji penguraian $\\ce{2H2O2(aq) -> 2H2O(l) + O2(g)^}$ dengan menambahkan katalis $\\ce{FeCl3}$. Data pengamatan volume gas oksigen selama 60 detik disajikan dalam tabel:

| Tabung | Volume $\\ce{H2O2 } 3\\%$ | Suhu | Konsentrasi $\\ce{FeCl3}$ | Volume $\\ce{O2}$ (60 detik) |
| :---: | :---: | :---: | :---: | :---: |
| 1 | $20.0\\text{ mL}$ | $25^\\circ\\text{C}$ | $0.0\\text{ M}$ (tanpa katalis) | $0.4\\text{ mL}$ |
| 2 | $20.0\\text{ mL}$ | $25^\\circ\\text{C}$ | $0.1\\text{ M}$ ($2.0\\text{ mL}$) | $18.2\\text{ mL}$ |
| 3 | $20.0\\text{ mL}$ | $25^\\circ\\text{C}$ | $0.2\\text{ M}$ ($2.0\\text{ mL}$) | $36.5\\text{ mL}$ |

Tentukan triad variabel dan fungsi ilmiah Tabung 1!

**Strategi Penyelesaian:**
1. *Variabel Bebas:* Konsentrasi larutan katalis $\\ce{FeCl3}$ ($0.0\\text{ M}, 0.1\\text{ M}, 0.2\\text{ M}$).
2. *Variabel Terikat:* Volume gas $\\ce{O2}$ yang tertampung dalam 60 detik.
3. *Variabel Kontrol:* Volume larutan $\\ce{H2O2}$ ($20.0\\text{ mL}$), suhu percobaan ($25^\\circ\\text{C}$), dan durasi waktu ($60\\text{ detik}$).
4. *Fungsi Tabung 1:* Bertindak sebagai **kontrol negatif**, membuktikan bahwa tanpa kehadiran $\\ce{FeCl3}$, $\\ce{H2O2}$ terurai sangat lambat sehingga lonjakan volume pada tabung 2 dan 3 murni akibat keaktifan katalis.

> [!TITIK_RAWAN]
> ### ⚠️ Titik Rawan Kesalahan (Common Pitfalls)
> - **Tertukar Variabel Kontrol vs Kelompok Kontrol:** Variabel kontrol adalah *parameter kuantitatif yang dibuat sama* (suhu, volume), sedangkan kelompok kontrol adalah *sampel fisik pembanding* (tabung tanpa katalis).
> - **Memilih Respons Kualitatif Subjektif:** Menetapkan variabel terikat berupa "perubahan bau" atau "kepekatan gelembung" tanpa metrik alat ukur kuantitatif terstandar.

> [!PEMERIKSAAN_LOGIKA]
> ### 🔍 Pemeriksaan Logika (Sanity Check) & Koneksi
> - **Pemeriksaan Logika:** Ketika konsentrasi katalis dinaikkan dua kali lipat (dari $0.1\\text{ M}$ ke $0.2\\text{ M}$), laju gas $\\ce{O2}$ naik mendekati dua kali lipat ($18.2 \\rightarrow 36.5\\text{ mL}$), menunjukkan hubungan linier yang logis.
> - **Koneksi Lintas Bab:** Penentuan orde reaksi dari data konsentrasi terhadap laju reaksi ini akan dipelajari secara mendalam pada Kinetika Kimia Bab 5.

##### 🎯 Latihan Terbimbing
**Soal Latihan:** Dalam investigasi pengaruh luas permukaan paku besi terhadap laju perkaratan di udara terbuka, rumuskan: (a) Variabel bebas, (b) Variabel terikat, dan (c) Satu variabel kontrol krusial!  
*Kunci Jawaban Akhir:* (a) Luas permukaan paku (paku utuh vs serbuk paku), (b) Pertambahan massa karat besi per hari, (c) Kelembapan udara dan suhu lingkungan yang dijaga identik.`,
      keyFormulas: [
        { name: 'Persamaan Regresi Linear', formula: 'y = mx + c' },
        { name: 'Gradien Laju Perubahan', formula: 'm = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1}' },
      ],
    },
    {
      tag: 'alat-laboratorium-dan-k3',
      tags: ['alat-laboratorium-kimia', 'pembacaan-meniskus', 'gelas-volumetrik', 'buret-pipet-labu', 'nyala-bunsen', 'keselamatan-kerja-lab', 'simbol-bahaya-ghs', 'safety-data-sheet-sds', 'always-add-acid'],
      title: 'Subbab 1.4: Instrumen Laboratorium, Teknik Meniskus, Profil Bunsen & Protokol K3 GHS/SDS',
      summary: 'Klasifikasi peralatan gelas analitik kelas A vs wadah penampung kasar, teknik eliminasi paralaks meniskus cekung vs cembung, zonasi termal api Bunsen, serta 9 piktogram GHS dan kaidah emas AAA.',
      content: `#### 1. Intuisi & Model Partikel (Jembatan Makroskopik ke Submikroskopik)

Bekerja di laboratorium kimia membutuhkan presisi tingkat tinggi sekaligus kepatuhan mutlak terhadap keselamatan diri. Mengapa cairan di dalam tabung ukur tidak pernah membentuk permukaan datar sempurna, melainkan melengkung? Fenomena ini dikendalikan oleh kompetisi dua gaya tarik antarmolekul pada tingkat partikulat:
- **Gaya Adhesi:** Gaya tarik elektrostatik antara molekul cairan dengan molekul silikat kaca tabung.
- **Gaya Kohesi:** Gaya tarik antarmolekul sejenis di dalam cairan (misal ikatan hidrogen antarmolekul air).

Jika adhesi air-kaca lebih dominan daripada kohesi, air akan "merayap naik" pada dinding kaca membentuk **meniskus cekung**. Sebaliknya, pada air raksa ($\\ce{Hg}$), gaya kohesi ikatan logam jauh lebih perkasa daripada tarikan kaca, sehingga raksa membulat ke atas membentuk **meniskus cembung**.

Perhatikan teknik pembacaan meniskus cekung dan cembung untuk meniadakan galat paralaks pada **Gambar 1.4** berikut:

<svg data-diagram="sma-t01-meniskus-bunsen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 320" width="100%" height="auto" class="max-w-[760px] my-6 select-none font-sans">
  <defs>
    <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.95"/>
    </linearGradient>
    <linearGradient id="hgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#94a3b8"/>
      <stop offset="100%" stop-color="#475569"/>
    </linearGradient>
    <linearGradient id="glassWall" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#cbd5e1" stop-opacity="0.6"/>
      <stop offset="15%" stop-color="#f8fafc" stop-opacity="0.2"/>
      <stop offset="85%" stop-color="#f8fafc" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#cbd5e1" stop-opacity="0.6"/>
    </linearGradient>
    <filter id="shadowFilter" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f172a" flood-opacity="0.08"/>
    </filter>
  </defs>

  <g transform="translate(10, 10)">
    <rect width="365" height="300" rx="16" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" filter="url(#shadowFilter)"/>
    <rect width="365" height="42" rx="16" fill="#f0f9ff"/>
    <path d="M0 16 Q0 42 16 42 L349 42 Q365 42 365 16 Z" fill="#f0f9ff"/>
    <text x="182" y="24" text-anchor="middle" font-size="12" font-weight="700" fill="#0369a1">A. MENISKUS CEKUNG (AIR / H₂O)</text>
    <text x="182" y="38" text-anchor="middle" font-size="9.5" font-weight="600" fill="#0284c7">Gaya Adhesi (Air-Kaca) &gt; Gaya Kohesi (Air-Air)</text>
    <rect x="55" y="65" width="80" height="200" fill="url(#glassWall)" stroke="#94a3b8" stroke-width="2"/>
    <path d="M 55 145 Q 95 175 135 145 L 135 265 L 55 265 Z" fill="url(#waterGrad)"/>
    <path d="M 55 145 Q 95 175 135 145" fill="none" stroke="#0284c7" stroke-width="2.5"/>
    <line x1="135" y1="115" x2="125" y2="115" stroke="#475569" stroke-width="1.5"/>
    <text x="120" y="118" text-anchor="end" font-size="9" font-family="monospace" fill="#475569">19.8</text>
    <line x1="135" y1="175" x2="122" y2="175" stroke="#0284c7" stroke-width="2"/>
    <text x="118" y="179" text-anchor="end" font-size="10" font-weight="700" font-family="monospace" fill="#0284c7">20.0</text>
    <line x1="95" y1="175" x2="230" y2="175" stroke="#16a34a" stroke-width="2" stroke-dasharray="4,3"/>
    <circle cx="95" cy="175" r="4" fill="#16a34a"/>
    <g transform="translate(235, 165)">
      <path d="M 0 10 Q 15 -5 30 10 Q 15 25 0 10 Z" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
      <circle cx="15" cy="10" r="5" fill="#16a34a"/>
      <circle cx="13" cy="8" r="1.5" fill="#ffffff"/>
    </g>
    <rect x="270" y="163" width="85" height="24" rx="6" fill="#dcfce7" stroke="#86efac"/>
    <text x="312" y="179" text-anchor="middle" font-size="8.5" font-weight="700" fill="#15803d">✓ BENAR (20.00)</text>
    <text x="182" y="196" text-anchor="middle" font-size="8.5" font-weight="600" fill="#15803d">Dasar Lengkungan</text>
    <text x="182" y="285" text-anchor="middle" font-size="10" font-weight="500" fill="#64748b">Cairan membasahi dinding tabung kaca</text>
  </g>

  <g transform="translate(385, 10)">
    <rect width="365" height="300" rx="16" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" filter="url(#shadowFilter)"/>
    <rect width="365" height="42" rx="16" fill="#f8fafc"/>
    <path d="M0 16 Q0 42 16 42 L349 42 Q365 42 365 16 Z" fill="#f8fafc"/>
    <text x="182" y="24" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">B. MENISKUS CEMBUNG (RAKSA / Hg)</text>
    <text x="182" y="38" text-anchor="middle" font-size="9.5" font-weight="600" fill="#64748b">Gaya Kohesi (Ikatan Logam) &gt; Gaya Adhesi (Hg-Kaca)</text>
    <rect x="55" y="65" width="80" height="200" fill="url(#glassWall)" stroke="#94a3b8" stroke-width="2"/>
    <path d="M 55 175 Q 95 145 135 175 L 135 265 L 55 265 Z" fill="url(#hgGrad)"/>
    <path d="M 55 175 Q 95 145 135 175" fill="none" stroke="#475569" stroke-width="2.5"/>
    <line x1="135" y1="145" x2="122" y2="145" stroke="#475569" stroke-width="2"/>
    <text x="118" y="149" text-anchor="end" font-size="10" font-weight="700" font-family="monospace" fill="#334155">10.0</text>
    <line x1="95" y1="145" x2="230" y2="145" stroke="#16a34a" stroke-width="2" stroke-dasharray="4,3"/>
    <circle cx="95" cy="145" r="4" fill="#16a34a"/>
    <g transform="translate(235, 135)">
      <path d="M 0 10 Q 15 -5 30 10 Q 15 25 0 10 Z" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
      <circle cx="15" cy="10" r="5" fill="#16a34a"/>
      <circle cx="13" cy="8" r="1.5" fill="#ffffff"/>
    </g>
    <rect x="270" y="133" width="85" height="24" rx="6" fill="#dcfce7" stroke="#86efac"/>
    <text x="312" y="149" text-anchor="middle" font-size="8.5" font-weight="700" fill="#15803d">✓ BENAR (10.00)</text>
    <text x="182" y="165" text-anchor="middle" font-size="8.5" font-weight="600" fill="#15803d">Puncak Lengkungan</text>
    <text x="182" y="285" text-anchor="middle" font-size="10" font-weight="500" fill="#64748b">Cairan TIDAK membasahi dinding tabung</text>
  </g>
</svg>
<p class="text-center text-xs font-semibold text-slate-500 mt-2">Gambar 1.4: Teknik Pembacaan Skala Meniskus Cairan untuk Menghindari Galat Paralaks.</p>

Perhatikan pula sembilan piktogram bahaya global GHS pada **Gambar 1.5** berikut:

<svg data-diagram="sma-t01-piktogram-ghs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 300" width="100%" height="auto" class="max-w-[760px] my-6 select-none font-sans">
  <defs>
    <filter id="ghsShadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="2" flood-color="#0f172a" flood-opacity="0.08"/>
    </filter>
  </defs>

  <rect width="760" height="38" rx="10" fill="#b91c1c"/>
  <text x="380" y="24" text-anchor="middle" font-size="12" font-weight="800" fill="#ffffff" letter-spacing="0.5">9 SIMBOL BAHAYA STANDAR GLOBAL (GHS PICTOGRAMS)</text>

  <g transform="translate(10, 48)">
    <rect width="235" height="74" rx="10" fill="#fff5f5" stroke="#fecaca" stroke-width="1.5" filter="url(#ghsShadow)"/>
    <polygon points="35,12 60,37 35,62 10,37" fill="#ffffff" stroke="#dc2626" stroke-width="2.5"/>
    <text x="35" y="42" text-anchor="middle" font-size="16">🔥</text>
    <text x="75" y="30" font-size="11" font-weight="700" fill="#991b1b">Mudah Terbakar</text>
    <text x="75" y="45" font-size="8.5" fill="#7f1d1d">• Etanol, Aseton, Dietil Eter</text>
    <text x="75" y="58" font-size="8.5" fill="#991b1b">• Jauhkan dari api Bunsen</text>
  </g>

  <g transform="translate(262, 48)">
    <rect width="235" height="74" rx="10" fill="#fff5f5" stroke="#fecaca" stroke-width="1.5" filter="url(#ghsShadow)"/>
    <polygon points="35,12 60,37 35,62 10,37" fill="#ffffff" stroke="#dc2626" stroke-width="2.5"/>
    <text x="35" y="42" text-anchor="middle" font-size="16">⭕</text>
    <text x="75" y="30" font-size="11" font-weight="700" fill="#991b1b">Pengoksidasi</text>
    <text x="75" y="45" font-size="8.5" fill="#7f1d1d">• KMnO₄, H₂O₂ pekat, HNO₃</text>
    <text x="75" y="58" font-size="8.5" fill="#991b1b">• Memperhebat kebakaran</text>
  </g>

  <g transform="translate(515, 48)">
    <rect width="235" height="74" rx="10" fill="#fff5f5" stroke="#fecaca" stroke-width="1.5" filter="url(#ghsShadow)"/>
    <polygon points="35,12 60,37 35,62 10,37" fill="#ffffff" stroke="#dc2626" stroke-width="2.5"/>
    <text x="35" y="42" text-anchor="middle" font-size="16">🧪</text>
    <text x="75" y="30" font-size="11" font-weight="700" fill="#991b1b">Korosif</text>
    <text x="75" y="45" font-size="8.5" fill="#7f1d1d">• H₂SO₄, HCl pekat, NaOH</text>
    <text x="75" y="58" font-size="8.5" fill="#991b1b">• Mengikis kulit &amp; logam</text>
  </g>

  <g transform="translate(10, 130)">
    <rect width="235" height="74" rx="10" fill="#fff5f5" stroke="#fecaca" stroke-width="1.5" filter="url(#ghsShadow)"/>
    <polygon points="35,12 60,37 35,62 10,37" fill="#ffffff" stroke="#dc2626" stroke-width="2.5"/>
    <text x="35" y="42" text-anchor="middle" font-size="16">☠️</text>
    <text x="75" y="30" font-size="11" font-weight="700" fill="#991b1b">Toksik Akut (Fatal)</text>
    <text x="75" y="45" font-size="8.5" fill="#7f1d1d">• KCN, HgCl₂, As₂O₃</text>
    <text x="75" y="58" font-size="8.5" fill="#991b1b">• Dosis mikro mematikan</text>
  </g>

  <g transform="translate(262, 130)">
    <rect width="235" height="74" rx="10" fill="#fff5f5" stroke="#fecaca" stroke-width="1.5" filter="url(#ghsShadow)"/>
    <polygon points="35,12 60,37 35,62 10,37" fill="#ffffff" stroke="#dc2626" stroke-width="2.5"/>
    <text x="35" y="42" text-anchor="middle" font-size="16">👤</text>
    <text x="75" y="30" font-size="11" font-weight="700" fill="#991b1b">Bahaya Kesehatan</text>
    <text x="75" y="45" font-size="8.5" fill="#7f1d1d">• Benzena, Formalin, Timbal</text>
    <text x="75" y="58" font-size="8.5" fill="#991b1b">• Karsinogenik &amp; mutagenik</text>
  </g>

  <g transform="translate(515, 130)">
    <rect width="235" height="74" rx="10" fill="#fff5f5" stroke="#fecaca" stroke-width="1.5" filter="url(#ghsShadow)"/>
    <polygon points="35,12 60,37 35,62 10,37" fill="#ffffff" stroke="#dc2626" stroke-width="2.5"/>
    <text x="35" y="42" text-anchor="middle" font-size="16">⚠️</text>
    <text x="75" y="30" font-size="11" font-weight="700" fill="#991b1b">Iritan / Bahaya Ringan</text>
    <text x="75" y="45" font-size="8.5" fill="#7f1d1d">• Amonia encer, CuSO₄ encer</text>
    <text x="75" y="58" font-size="8.5" fill="#991b1b">• Iritasi mata, kulit, saluran napas</text>
  </g>

  <g transform="translate(10, 212)">
    <rect width="235" height="74" rx="10" fill="#fff5f5" stroke="#fecaca" stroke-width="1.5" filter="url(#ghsShadow)"/>
    <polygon points="35,12 60,37 35,62 10,37" fill="#ffffff" stroke="#dc2626" stroke-width="2.5"/>
    <text x="35" y="42" text-anchor="middle" font-size="16">💥</text>
    <text x="75" y="30" font-size="11" font-weight="700" fill="#991b1b">Mudah Meledak</text>
    <text x="75" y="45" font-size="8.5" fill="#7f1d1d">• NH₄NO₃, Asam pikrat</text>
    <text x="75" y="58" font-size="8.5" fill="#991b1b">• Sensitif benturan &amp; kalor</text>
  </g>

  <g transform="translate(262, 212)">
    <rect width="235" height="74" rx="10" fill="#fff5f5" stroke="#fecaca" stroke-width="1.5" filter="url(#ghsShadow)"/>
    <polygon points="35,12 60,37 35,62 10,37" fill="#ffffff" stroke="#dc2626" stroke-width="2.5"/>
    <text x="35" y="42" text-anchor="middle" font-size="16">🧯</text>
    <text x="75" y="30" font-size="11" font-weight="700" fill="#991b1b">Gas Bertekanan</text>
    <text x="75" y="45" font-size="8.5" fill="#7f1d1d">• Tabung O₂, N₂, Ar, CO₂</text>
    <text x="75" y="58" font-size="8.5" fill="#991b1b">• Wajib dirantai ke dinding</text>
  </g>

  <g transform="translate(515, 212)">
    <rect width="235" height="74" rx="10" fill="#fff5f5" stroke="#fecaca" stroke-width="1.5" filter="url(#ghsShadow)"/>
    <polygon points="35,12 60,37 35,62 10,37" fill="#ffffff" stroke="#dc2626" stroke-width="2.5"/>
    <text x="35" y="42" text-anchor="middle" font-size="16">🐟</text>
    <text x="75" y="30" font-size="11" font-weight="700" fill="#991b1b">Pencemar Akuatik</text>
    <text x="75" y="45" font-size="8.5" fill="#7f1d1d">• Limbah ion berat Pb²⁺, Hg²⁺</text>
    <text x="75" y="58" font-size="8.5" fill="#991b1b">• Dilarang dibuang ke wastafel!</text>
  </g>
</svg>
<p class="text-center text-xs font-semibold text-slate-500 mt-2">Gambar 1.5: Sembilan Piktogram Bahaya Global GHS (Globally Harmonized System).</p>

---

#### 2. Formalisasi Konsep & Penurunan Rumus (Representasi Simbolik & Aturan Konsep)

##### A. Klasifikasi Instrumen Gelas: Volumetrik Kuantitatif vs Penampung Kasar
1. **Peralatan Volumetrik Presisi Tinggi (Kelas A):**
   - **Buret ($50.00\\text{ mL}$):** Ketelitian $\\pm 0.02\\text{ mL}$. Angka $0.00\\text{ mL}$ terletak di **paling ATAS**, cairan terpakai dihitung dari selisih $\\Delta V = V_{\\text{akhir}} - V_{\\text{awal}}$.
   - **Pipet Volumetrik (Pipet Gondok):** Memindahkan volume spesifik dengan akurasi sangat tinggi ($\\pm 0.01\\text{ mL}$).
   - **Labu Ukur (Labu Volumetrik):** Memiliki tanda batas kalibrasi tunggal pada leher untuk pembuatan larutan standar.
2. **Peralatan Penampung & Pengukur Kasar:**
   - **Gelas Kimia (*Beaker Glass*) & Labu Erlenmeyer:** Toleransi galat $\\pm 5 - 10\\%$. **Dilarang keras dipakai untuk pengukuran volume titrasi analitik!**

##### B. Protokol Keselamatan Kerja Lab & Kaidah Emas AAA (*Always Add Acid*)
Ketika mengencerkan asam sulfat pekat ($\\ce{H2SO4}$), hidrasi melepaskan kalor pelarutan yang sangat dahsyat:
$$\\ce{H2SO4(l) + H2O(l) -> H3O+(aq) + HSO4-(aq)} \\quad \\Delta H_{\\text{hidrasi}} \\approx -880\\text{ kJ mol}^{-1}$$
Massa jenis asam pekat ($\\rho = 1.84\\text{ g mL}^{-1}$) jauh lebih berat daripada air. Jika air dituangkan ke asam pekat, air akan mengapung di permukaan dan mendidih seketika menjadi letupan asam panas (*acid splash*) yang mencelakai wajah.

> [!DANGER]
> ### 🚨 INGAT KAIDAH EMAS: "AAA = ALWAYS ADD ACID TO WATER!"
> **SELALU TUANGKAN ASAM PEKAT PERLAHAN KE DALAM AIR MELALUI DINDING GELAS SAMBIL DIADUK.**  
> **JANGAN PERNAH MENUANGKAN AIR KE DALAM ASAM PEKAT!**

> [!SYARAT_BATAS]
> ### ⚖️ Syarat Batas & Asumsi
> **Kondisi Berlaku:** Seluruh alat ukur volumetrik presisi dikalibrasi pada suhu standar $20^\\circ\\text{C}$ ($293\\text{ K}$).
> **Batas Keberlakuan:** Labu ukur dan buret presisi **TIDAK BOLEH dipanaskan langsung** di atas nyala Bunsen karena akan memicu pemuaian termal kaca permanen yang merusak teraan kalibrasi volume selamanya.

##### 🧪 Uji Konsep Kualitatif
**Pertanyaan:** Mengapa saat membersihkan tumpahan asam sulfat pekat pada meja laboratorium, kita dilarang langsung menyiramnya dengan larutan natrium hidroksida ($\\ce{NaOH}$) pekat?  
*Analisis:* Reaksi asam kuat dengan basa kuat pekat bersifat sangat eksotermik. Panas netralisasi lokal yang timbul seketika akan mendidihkan cairan dan melontarkan percikan bahan kimia korosif ke udara. Prosedur yang benar adalah menaburkan serbuk natrium bikarbonat ($\\ce{NaHCO3}$) kering terlebih dahulu hingga buih gas $\\ce{CO2}$ berhenti, baru dilap dengan kain basah.

---

#### 3. Taktik Soal (Penerapan Terpadu)

##### 📝 Soal Contoh (Worked Example)
**Soal:** Seorang praktikan hendak membuat $250.0\\text{ mL}$ larutan standar asam oksalat $0.0500\\text{ M}$ dari kristal murni $\\ce{H2C2O4.2H2O}$ ($M_r = 126.07\\text{ g mol}^{-1}$). Rincilah urutan instrumen yang wajib digunakan dan jelaskan prosedur pelarutannya!

**Strategi Penyelesaian:**
1. *Hitung Massa Diperlukan:*
   $$m = M \\times V \\times M_r = 0.0500\\text{ mol L}^{-1} \\times 0.2500\\text{ L} \\times 126.07\\text{ g mol}^{-1} = 1.5759\\text{ g}$$
2. *Instrumen yang Digunakan:*
   - Neraca analitik 4 desimal untuk menimbang kristal secara akurat.
   - Gelas kimia ($100\\text{ mL}$) dan batang pengaduk untuk melarutkan kristal awal dengan akuades.
   - Corong kaca untuk memindahkan larutan ke dalam **Labu Ukur $250.0\\text{ mL}$**.
   - Pipet tetes untuk menambahkan akuades hingga garis tanda batas miniskus tepat menyentuh garis kalibrasi labu ukur pada suhu kamar.

> [!TITIK_RAWAN]
> ### ⚠️ Titik Rawan Kesalahan (Common Pitfalls)
> - **Membaca Skala Buret Terbalik:** Siswa sering membaca buret dari bawah ke atas seperti gelas ukur. Ingat: nol buret ada di atas!
> - **Paralaks Pembacaan Meniskus:** Membaca meniskus dari sudut atas atau bawah akan menghasilkan deviasi volume hingga $\\pm 0.2\\text{ mL}$, menggagalkan akurasi titrasi.

> [!PEMERIKSAAN_LOGIKA]
> ### 🔍 Pemeriksaan Logika (Sanity Check) & Koneksi
> - **Pemeriksaan Logika:** Pembilasan darurat tumpahan kimia di *Eye Wash* atau *Emergency Shower* wajib dilakukan minimal $15 - 20\\text{ menit}$ kontinu untuk memastikan pengenceran spesi kaustik hingga konsentrasi aman.
> - **Koneksi Lintas Bab:** Penggunaan buret dan labu ukur ini merupakan keterampilan prasyarat mutlak untuk praktikum Asam-Basa dan Titrasi pada Bab 7.

##### 🎯 Latihan Terbimbing
**Soal Latihan:** Jelaskan arti dari piktogram GHS berupa lambang tengkorak dengan tulang bersilang (*skull and crossbones*) dan sebutkan 2 contoh zat kimia di lab SMA yang memiliki label tersebut!  
*Kunci Jawaban Akhir:* Menandakan bahaya **Toksik Akut Kategori Fatal** yang mematikan dalam dosis sangat kecil. Contoh: Kalium sianida ($\\ce{KCN}$) dan merkuri(II) klorida ($\\ce{HgCl2}$).`,
      keyFormulas: [
        { name: 'Toleransi Buret Kelas A', formula: '\\Delta V = \\pm 0.02\\text{ mL}' },
        { name: 'Entalpi Hidrasi Asam Sulfat Pekat', formula: '\\Delta H_{\\text{hidrasi}} \\approx -880\\text{ kJ mol}^{-1} \\quad (\\text{Sangat Eksotermik!})' },
      ],
    },
    {
      tag: 'kimia-hijau-dan-ekonomi-atom',
      tags: ['kimia-hijau', '12-prinsip-green-chemistry', 'ekonomi-atom', 'faktor-lingkungan-e-factor', 'sintesis-berkelanjutan'],
      title: 'Subbab 1.5: Prinsip Kimia Hijau (Green Chemistry) & Kuantifikasi Ekonomi Atom',
      summary: 'Paradigma 12 prinsip kimia hijau (Anastas & Warner), perbedaan fundamental antara persen rendemen laboratorium vs persen ekonomi atom intrinsik, serta metrik kalkulasi E-Factor.',
      content: `#### 1. Intuisi & Model Partikel (Jembatan Makroskopik ke Submikroskopik)

Pada era industri kimia abad ke-20, efisiensi pabrik hanya diukur dari **Persentase Rendemen (*Percent Yield*)**—seberapa banyak produk target yang berhasil dikumpulkan di cawan penampung. Namun pendekatan ini menyembunyikan bencana lingkungan: sebuah reaksi dengan rendemen $98\\%$ bisa saja menghasilkan berton-ton garam beracun yang harus dibuang ke sungai karena sebagian besar atom reaktan berakhir menjadi produk samping tak terpakai.

Untuk mengatasi krisis tersebut, Paul Anastas dan John Warner (1998) mencetuskan paradigma **Kimia Hijau (*Green Chemistry*)**: pendekatan perancangan produk dan proses kimia yang mereduksi atau meniadakan penggunaan serta pembentukan zat-zat berbahaya sejak pada tingkat perancangan molekuler.

**Analogi Mengupas Buah Mangga:**
- Jika Anda membeli $1000\\text{ gram}$ mangga dan berhasil memeras seluruh daging buahnya ke dalam blender tanpa tumpah, rendemen kerja Anda adalah $100\\%$.
- Namun setelah ditimbang, berat biji dan kulit mangga yang dibuang ke tong sampah mencapai $450\\text{ gram}$. Artinya, dari sudut pandang pemanfaatan materi, hanya $550\\text{ gram}$ materi yang menjadi makanan. Efisiensi atom Anda sebenarnya hanya $55\\%$.

Perhatikan intisari dua belas prinsip kimia hijau pada **Gambar 1.6** berikut:

<svg data-diagram="sma-t01-green-chemistry" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 320" width="100%" height="auto" class="max-w-[760px] my-6 select-none font-sans">
  <defs>
    <filter id="gcShadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="2" flood-color="#064e3b" flood-opacity="0.06"/>
    </filter>
  </defs>

  <rect width="760" height="38" rx="10" fill="#065f46"/>
  <text x="380" y="24" text-anchor="middle" font-size="12.5" font-weight="800" fill="#ffffff" letter-spacing="0.5">12 PRINSIP KIMIA HIJAU (ANASTAS &amp; WARNER, 1998)</text>

  <g transform="translate(10, 48)">
    <rect width="235" height="58" rx="8" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5" filter="url(#gcShadow)"/>
    <text x="14" y="22" font-size="10.5" font-weight="700" fill="#065f46">1. Pencegahan Limbah</text>
    <text x="14" y="38" font-size="8.5" fill="#047857">Lebih baik mencegah timbulan limbah</text>
    <text x="14" y="50" font-size="8.5" fill="#059669">daripada mengolah limbah setelahnya.</text>
  </g>
  <g transform="translate(10, 114)">
    <rect width="235" height="58" rx="8" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5" filter="url(#gcShadow)"/>
    <text x="14" y="22" font-size="10.5" font-weight="700" fill="#065f46">2. Ekonomi Atom Maksimal</text>
    <text x="14" y="38" font-size="8.5" fill="#047857">Maksimalkan proporsi atom reaktan</text>
    <text x="14" y="50" font-size="8.5" fill="#059669">yang terinkorporasi ke produk target.</text>
  </g>
  <g transform="translate(10, 180)">
    <rect width="235" height="58" rx="8" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5" filter="url(#gcShadow)"/>
    <text x="14" y="22" font-size="10.5" font-weight="700" fill="#065f46">3. Sintesis Rendah Toksisitas</text>
    <text x="14" y="38" font-size="8.5" fill="#047857">Gunakan &amp; hasilkan bahan dengan</text>
    <text x="14" y="50" font-size="8.5" fill="#059669">toksisitas minimal bagi kesehatan.</text>
  </g>
  <g transform="translate(10, 246)">
    <rect width="235" height="58" rx="8" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5" filter="url(#gcShadow)"/>
    <text x="14" y="22" font-size="10.5" font-weight="700" fill="#065f46">4. Desain Bahan Kimia Aman</text>
    <text x="14" y="38" font-size="8.5" fill="#047857">Pertahankan efikasi fungsi molekul</text>
    <text x="14" y="50" font-size="8.5" fill="#059669">sembari memangkas bahaya intrinsiknya.</text>
  </g>

  <g transform="translate(262, 48)">
    <rect width="235" height="58" rx="8" fill="#f0fdfa" stroke="#99f6e4" stroke-width="1.5" filter="url(#gcShadow)"/>
    <text x="14" y="22" font-size="10.5" font-weight="700" fill="#0f766e">5. Pelarut &amp; Aditif Aman</text>
    <text x="14" y="38" font-size="8.5" fill="#0d9488">Gunakan air, CO₂ superkritis, atau</text>
    <text x="14" y="50" font-size="8.5" fill="#14b8a6">hindari pelarut organik volatil (VOC).</text>
  </g>
  <g transform="translate(262, 114)">
    <rect width="235" height="58" rx="8" fill="#f0fdfa" stroke="#99f6e4" stroke-width="1.5" filter="url(#gcShadow)"/>
    <text x="14" y="22" font-size="10.5" font-weight="700" fill="#0f766e">6. Efisiensi Energi</text>
    <text x="14" y="38" font-size="8.5" fill="#0d9488">Rancang reaksi kimia pada suhu kamar</text>
    <text x="14" y="50" font-size="8.5" fill="#14b8a6">dan tekanan atmosfer ambien (1 atm).</text>
  </g>
  <g transform="translate(262, 180)">
    <rect width="235" height="58" rx="8" fill="#f0fdfa" stroke="#99f6e4" stroke-width="1.5" filter="url(#gcShadow)"/>
    <text x="14" y="22" font-size="10.5" font-weight="700" fill="#0f766e">7. Bahan Baku Terbarukan</text>
    <text x="14" y="38" font-size="8.5" fill="#0d9488">Prioritaskan biomassa dan hasil tani</text>
    <text x="14" y="50" font-size="8.5" fill="#14b8a6">daripada bahan bakar fosil minyak bumi.</text>
  </g>
  <g transform="translate(262, 246)">
    <rect width="235" height="58" rx="8" fill="#f0fdfa" stroke="#99f6e4" stroke-width="1.5" filter="url(#gcShadow)"/>
    <text x="14" y="22" font-size="10.5" font-weight="700" fill="#0f766e">8. Kurangi Derivatisasi</text>
    <text x="14" y="38" font-size="8.5" fill="#0d9488">Hindari gugus pelindung / modifikasi</text>
    <text x="14" y="50" font-size="8.5" fill="#14b8a6">sementara yang boros reagen tambahan.</text>
  </g>

  <g transform="translate(515, 48)">
    <rect width="235" height="58" rx="8" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" filter="url(#gcShadow)"/>
    <text x="14" y="22" font-size="10.5" font-weight="700" fill="#15803d">9. Gunakan Katalis Selektif</text>
    <text x="14" y="38" font-size="8.5" fill="#16a34a">Katalis selektif jauh lebih unggul</text>
    <text x="14" y="50" font-size="8.5" fill="#22c55e">daripada reagen stoikiometris biasa.</text>
  </g>
  <g transform="translate(515, 114)">
    <rect width="235" height="58" rx="8" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" filter="url(#gcShadow)"/>
    <text x="14" y="22" font-size="10.5" font-weight="700" fill="#15803d">10. Desain Biodegradasi</text>
    <text x="14" y="38" font-size="8.5" fill="#16a34a">Produk harus mudah terurai menjadi zat</text>
    <text x="14" y="50" font-size="8.5" fill="#22c55e">nir-berbahaya setelah masa pakainya usai.</text>
  </g>
  <g transform="translate(515, 180)">
    <rect width="235" height="58" rx="8" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" filter="url(#gcShadow)"/>
    <text x="14" y="22" font-size="10.5" font-weight="700" fill="#15803d">11. Analisis Real-Time</text>
    <text x="14" y="38" font-size="8.5" fill="#16a34a">Sensor pemantauan proses langsung untuk</text>
    <text x="14" y="50" font-size="8.5" fill="#22c55e">mencegah kebocoran polusi seketika.</text>
  </g>
  <g transform="translate(515, 246)">
    <rect width="235" height="58" rx="8" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" filter="url(#gcShadow)"/>
    <text x="14" y="22" font-size="10.5" font-weight="700" fill="#15803d">12. Pencegahan Kecelakaan</text>
    <text x="14" y="38" font-size="8.5" fill="#16a34a">Pilih wujud zat yang meminimalkan</text>
    <text x="14" y="50" font-size="8.5" fill="#22c55e">risiko ledakan, kebakaran, &amp; emisi racun.</text>
  </g>
</svg>
<p class="text-center text-xs font-semibold text-slate-500 mt-2">Gambar 1.6: Intisari 12 Prinsip Kimia Hijau Menurut Anastas &amp; Warner.</p>

---

#### 2. Formalisasi Konsep & Penurunan Rumus (Representasi Simbolik & Aturan Konsep)

Efisiensi hijau suatu rute sintesis kimia dikuantifikasi secara matematis menggunakan dua metrik utama:

##### A. Persentase Ekonomi Atom (% AE)
Mengukur proporsi massa molar seluruh reaktan yang berhasil diintegrasikan menjadi produk target:
$$\\% \\text{ Atom Economy} = \\frac{M_r(\\text{Produk Target yang Diinginkan})}{\\sum M_r(\\text{Semua Reaktan dalam Persamaan Reaksi Setara})} \\times 100\\%$$

##### B. Faktor Dampak Lingkungan (*Environmental Factor / E-Factor*)
Mengukur rasio massa limbah nyata yang dihasilkan terhadap massa produk murni:
$$E\\text{-Factor} = \\frac{\\text{Total Massa Limbah Bersih (kg)}}{\\text{Massa Produk Akhir Murni (kg)}}$$

##### C. Karakteristik Reaksi Kimia terhadap Ekonomi Atom
1. **Reaksi Adisi Murni:** Menggabungkan seluruh reaktan menjadi produk tunggal tanpa produk samping (contoh: hidrogenasi etena $\\ce{CH2=CH2 + H2 -> CH3CH3}$). **Selalu memiliki $\\% \\text{ AE} = 100\\%$.**
2. **Reaksi Substitusi & Eliminasi:** Selalu melepaskan molekul buangan (seperti $\\ce{HCl}, \\ce{H2O}, \\ce{NaBr}$), sehingga **selalu memiliki $\\% \\text{ AE} < 100\\%$.**

> [!SYARAT_BATAS]
> ### ⚖️ Syarat Batas & Asumsi
> **Kondisi Berlaku:** Perhitungan Ekonomi Atom teoretis didasarkan pada persamaan reaksi stoikiometri yang telah setara sempurna.
> **Batas Keberlakuan:** Nilai $\\% \\text{ AE} = 100\\%$ tidak otomatis menjamin suatu proses aman jika reaktan yang digunakan sangat beracun atau membutuhkan pelarut volatil karsinogenik dalam jumlah besar (karena itulah diperlukan pertimbangan simultan terhadap 12 prinsip Green Chemistry lainnya).

##### 🧪 Uji Konsep Kualitatif
**Pertanyaan:** Mengapa reaksi adisi langsung $\\ce{C2H4 + Cl2 -> C2H4Cl2}$ memiliki ekonomi atom jauh lebih unggul dibandingkan reaksi substitusi $\\ce{C2H6 + Cl2 -> C2H5Cl + HCl}$ untuk memproduksi pelarut terklorinasi?  
*Analisis:* Pada reaksi adisi, seluruh atom karbon, hidrogen, dan klorin dari kedua molekul reaktan terinkorporasi utuh ke dalam produk target tanpa menghasilkan satu pun molekul limbah sampingan ($\\% \\text{ AE} = 100\\%$). Pada reaksi substitusi, separuh atom klorin dan satu atom hidrogen terbuang menjadi produk samping gas asam klorida ($\\ce{HCl}$), sehingga $\\% \\text{ AE} < 100\\%$.

---

#### 3. Taktik Soal (Penerapan Terpadu)

##### 📝 Soal Contoh (Worked Example)
**Soal:** Metil metakrilat ($\\ce{C5H8O2}$, $M_r = 100.12\\text{ g mol}^{-1}$) dapat diproduksi melalui dua rute sintesis industri:
- **Rute Konvensional (Aseton Sianohidrin):**
  $$\\ce{C3H6O + HCN + CH3OH + H2SO4 -> C5H8O2 + NH4HSO4}$$
- **Rute Hijau (Karbonilasi Katalitik Metil Asetilena):**
  $$\\ce{C3H4 + CO + CH3OH ->[\\text{katalis}] C5H8O2}$$
Hitung persentase ekonomi atom untuk masing-masing rute sintesis dan buktikan keunggulan rute hijau!

**Strategi Penyelesaian:**
1. *Rute Konvensional:*
   - Total massa reaktan = $M_r(\\ce{C3H6O}) + M_r(\\ce{HCN}) + M_r(\\ce{CH3OH}) + M_r(\\ce{H2SO4}) = 58.08 + 27.03 + 32.04 + 98.08 = 215.23\\text{ g mol}^{-1}$
   - $\\% \\text{ AE} = \\frac{100.12}{215.23} \\times 100\\% = \\mathbf{46.5\\%}$
2. *Rute Hijau:*
   - Total massa reaktan = $M_r(\\ce{C3H4}) + M_r(\\ce{CO}) + M_r(\\ce{CH3OH}) = 40.06 + 28.01 + 32.04 = 100.11\\text{ g mol}^{-1}$
   - $\\% \\text{ AE} = \\frac{100.12}{100.11} \\times 100\\% \\approx \\mathbf{100.0\\%}$
3. *Simpulan:* Rute hijau mengeliminasi limbah garam ammonium hidrogen sulfat ($\\ce{NH4HSO4}$) dan mengintegrasikan seluruh atom ke produk target.

> [!TITIK_RAWAN]
> ### ⚠️ Titik Rawan Kesalahan (Common Pitfalls)
> - **Lupa Mengalikan Koefisien Reaksi:** Saat menghitung total massa reaktan pada penyebut, siswa sering lupa mengalikan massa molar dengan koefisien reaksinya.
> - **Menyamakan Rendemen dengan Ekonomi Atom:** Rendemen tinggi ($95\\%$) tidak sama dengan proses hijau jika reaksi dasarnya memang boros atom.

> [!PEMERIKSAAN_LOGIKA]
> ### 🔍 Pemeriksaan Logika (Sanity Check) & Koneksi
> - **Pemeriksaan Logika:** Nilai $\\% \\text{ AE}$ secara teoritis mustahil bernilai $> 100\\%$. Nilai $E$-Factor industri minyak bumi berkisar $<0.1$, sedangkan industri farmasi tradisional bisa mencapai $25 - 100$.
> - **Koneksi Lintas Bab:** Prinsip efisiensi katalisis ini akan melandasi studi laju reaksi menggunakan biokatalis pada Bab 5 dan sintesis polimer di Bab 12.

##### 🎯 Latihan Terbimbing
**Soal Latihan:** Reaksi pembuatan gas hidrogen melalui pemecahan metana dengan uap air panas adalah: $\\ce{CH4 + H2O -> CO + 3H2}$. Jika produk target yang diinginkan adalah gas hidrogen ($\\ce{H2}$), hitung persentase ekonomi atom reaksi tersebut! ($A_r\\text{ C}=12, \\text{H}=1, \\text{O}=16$).  
*Kunci Jawaban Akhir:* $\\% \\text{ AE} = \\frac{3 \\times 2.016}{16.04 + 18.02} \\times 100\\% = \\mathbf{17.8\\%}$ (sebagian besar massa atom hilang menjadi gas limbah $\\ce{CO}$).`,
      keyFormulas: [
        { name: 'Persentase Ekonomi Atom (Atom Economy)', formula: '\\% \\text{AE} = \\frac{M_r(\\text{Produk Target})}{\\sum M_r(\\text{Semua Reaktan})} \\times 100\\%' },
        { name: 'Faktor Dampak Lingkungan (E-Factor)', formula: 'E\\text{-Factor} = \\frac{\\text{Massa Total Limbah}}{\\text{Massa Produk Target}}' },
        { name: 'Persentase Rendemen Hasil Reaksi', formula: '\\% \\text{Rendemen} = \\frac{\\text{Massa Nyata}}{\\text{Massa Teoretis}} \\times 100\\%' },
      ],
    },
    {
      tag: 'penutup-bab-inkuiri-dan-evaluasi',
      tags: ['pengayaan-inkuiri', 'ringkasan-cepat', 'evaluasi-berjenjang', 'hots-snbt', 'kurikulum-nasional'],
      title: 'Penutup Bab: Pengayaan Inkuiri, Ringkasan Cepat & Evaluasi Berjenjang',
      summary: 'Siklus Penutup Bab (Macro-Loop) terpadu: Studi kasus inkuiri baterai litium vs natrium di Indonesia, tabel komparasi konsep sering tertukar, peta alur keputusan desain eksperimen, dan paket evaluasi mandiri berjenjang 3 tingkat.',
      content: `### 🌐 Pengayaan Inkuiri & Kontekstual (Literasi Sains): Transisi Energi Baterai Nasional

#### 1. Penyajian Data Fenomena Nyata
Indonesia saat ini sedang memimpin percepatan transisi energi hijau melalui industrialisasi kendaraan listrik. Salah satu tantangan terbesar adalah pemilihan teknologi katoda baterai sekunder antara **Baterai Litium Besi Fosfat ($\\ce{LiFePO4}$)** dan inovasi mutakhir **Baterai Natrium Ion ($\\ce{NaFePO4}$)**. Berikut data komparasi lingkungan dan material:

| Parameter Evaluasi | Katoda Baterai Litium ($\\ce{LiFePO4}$) | Katoda Baterai Natrium ($\\ce{NaFePO4}$) |
| :--- | :---: | :---: |
| **Kelimpahan Logam di Kerak Bumi** | $\\approx 0.002\\% \\text{ (Langka)}$ | $\\approx 2.36\\% \\text{ (Sangat Melimpah)}$ |
| **Ketergantungan Impor Bahan Baku** | Tinggi (Deposit $\\ce{Li}$ terbatas) | Sangat Rendah (Dari garam laut $\\ce{NaCl}$) |
| **Rute Sintesis Industri Standar** | Reaksi Padat Suhu Tinggi ($800^\\circ\\text{C}$) | Hidrotermal Hijau Berbasis Air ($140^\\circ\\text{C}$) |
| **Nilai Rata-rata $E$-Factor Sintesis** | $18.5\\text{ kg limbah/kg produk}$ | $2.1\\text{ kg limbah/kg produk}$ |
| **Bahaya Toksisitas Pelarut Ekstraksi** | Menggunakan pelarut organik volatil | Pelarut akuatik ramah lingkungan |

#### 2. Pertanyaan Pemandu Bertahap
1. **Analisis Prinsip Kimia Hijau:** Berdasarkan tabel di atas, sebutkan minimal 3 Prinsip Kimia Hijau (*Green Chemistry*) yang diunggulkan oleh teknologi baterai natrium dibandingkan baterai litium!
2. **Kalkulasi Kuantitatif Limbah:** Jika suatu pabrik memproduksi $500\\text{ kg}$ material katoda, berapa kilogram limbah bersih yang berhasil dicegah dengan beralih dari rute litium ke rute natrium?
3. **Evaluasi Keberlanjutan Nasional:** Mengapa pemanfaatan garam natrium dari pesisir maritim Indonesia selaras dengan prinsip ke-7 (bahan baku terbarukan) dan pilar kemandirian ekonomi nasional?

#### 3. Analisis & Sintesis Konsep
Sintesis katoda baterai natrium hidrotermal merefleksikan keunggulan prinsip **Efisiensi Energi (Prinsip 6)** karena beroperasi pada suhu jauh lebih rendah ($140^\\circ\\text{C}$ vs $800^\\circ\\text{C}$), memangkas emisi gas rumah kaca dari pembakaran bahan bakar industri. Nilai $E$-Factor yang turun drastis dari $18.5$ ke $2.1$ mencerminkan implementasi **Pencegahan Limbah (Prinsip 1)**, di mana pada produksi $500\\text{ kg}$ katoda, pabrik berhasil mencegah pembentukan:
$$\\Delta m_{\\text{limbah}} = 500 \\times (18.5 - 2.1) = \\mathbf{8200\\text{ kg limbah berbahaya}}$$

#### 4. Koneksi Lintas Bab
Pemahaman partikulat atom $\\ce{Li}$ vs $\\ce{Na}$ akan dikaji melalui jari-jari ion dan energi ionisasi pada Sistem Periodik Unsur (Bab 2), stoikiometri massa reaktan di Bab 3, serta mekanisme transfer elektron pada Sel Volta & Baterai Komersial di Bab 9.

---

### ⚡ Ringkasan Cepat & Peta Keputusan (Quick Reference)

#### A. Tabel Komparasi Konsep yang Sering Tertukar
| Konsep A | Konsep B | Titik Pembeda Fundamental |
| :--- | :--- | :--- |
| **Senyawa** | **Campuran Homogen** | Senyawa terbentuk melalui reaksi kimia dengan rasio massa tetap dan hanya dapat dipisahkan secara kimiawi; campuran homogen mempertahankan sifat fisik aslinya dan dapat dipisahkan secara mekanis/fisika. |
| **Akurasi** | **Presisi** | Akurasi mengukur seberapa dekat rata-rata ke nilai acuan sejati; presisi mengukur keterulangan dan kerapatan antar-data pengukuran. |
| **Variabel Kontrol** | **Kelompok Kontrol** | Variabel kontrol adalah parameter fisis yang dibuat sama; kelompok kontrol adalah sampel spesifik pembanding tanpa variabel bebas. |
| **Persen Rendemen** | **Ekonomi Atom** | Rendemen mengukur efisiensi pengumpulan produk di laboratorium; ekonomi atom mengukur proporsi intrinsik massa atom yang tidak terbuang menjadi limbah. |

#### B. Peta Alur Keputusan: Desain Eksperimen & Validasi Ilmiah
$$\\begin{array}{ccccc}
\\boxed{\\text{Identifikasi Masalah dan Fenomena}} & \\rightarrow & \\boxed{\\text{Rumuskan Hipotesis Falsifiable}} & \\rightarrow & \\boxed{\\text{Tetapkan Triad Variabel}} \\\\
& & & & \\downarrow \\\\
\\boxed{\\text{Lakukan Uji Kontrol Negatif}} & \\leftarrow & \\boxed{\\text{Pilih Alat Ukur Presisi (Kelas A)}} & \\leftarrow & \\boxed{\\text{Terapkan Uji Adil (1 Variabel Bebas)}} \\\\
\\downarrow & & & & \\\\
\\boxed{\\text{Pengolahan Data dan Angka Penting}} & \\rightarrow & \\boxed{\\text{Evaluasi Prinsip Kimia Hijau}} & \\rightarrow & \\boxed{\\text{Kesimpulan Ilmiah Valid}}
\\end{array}$$

---

### 🏆 Evaluasi Mandiri Berjenjang (Tiered Problem Set)

#### Tingkat I: Fondasi (Asesmen Formatif)
1. Manakah di antara zat berikut yang merupakan senyawa murni: (A) Air laut, (B) Kuningan, (C) Sukrosa murni ($\\ce{C12H22O11}$), (D) Susu sapi murni, (E) Bensin Pertamax? *(Kunci: C)*
2. Tentukan jumlah angka penting pada hasil pengukuran $0.05020\\text{ g}$! *(Kunci: 4 AP)*
3. Berdasarkan konvensi *Banker's Rounding*, berapakah hasil pembulatan angka $24.65$ ke satu desimal? *(Kunci: 24.6)*
4. Sebutkan nama piktogram GHS yang wajib dicantumkan pada wadah asam klorida pekat! *(Kunci: Piktogram Korosif)*
5. Mengapa penambahan air ke dalam asam sulfat pekat dilarang keras dalam keselamatan laboratorium? *(Kunci: Kalor hidrasi tinggi mendidihkan air seketika dan memercikkan asam panas)*

#### Tingkat II: Integrasi (Asesmen Sumatif & Ujian Sekolah)
6. Sebuah balok logam memiliki massa $45.20\\text{ g}$ dan dimensi $3.0\\text{ cm} \\times 2.00\\text{ cm} \\times 1.50\\text{ cm}$. Hitung massa jenis balok dengan aturan angka penting yang benar! *(Kunci: 5.0 g cm⁻³)*
7. Dalam titrasi asam cuka dengan $\\ce{NaOH}$, buret dibaca pada skala awal $0.50\\text{ mL}$ dan akhir $24.85\\text{ mL}$. Hitung volume titran yang digunakan beserta ketidakpastiannya! *(Kunci: 24.35 ± 0.02 mL)*
8. Jelaskan perbedaan mendasar antara fungsi kontrol negatif dengan variabel kontrol dalam investigasi penguraian hidrogen peroksida! *(Kunci: Kontrol negatif membuktikan reaksi tanpa katalis lambat; variabel kontrol memastikan parameter lain konstan)*
9. Hitung nilai persentase ekonomi atom pada reaksi pembuatan etil asetat: $\\ce{CH3COOH + C2H5OH -> CH3COOC2H5 + H2O}$ ($M_r: 60, 46, 88, 18$)! *(Kunci: 83.0%)*
10. Suatu proses industri menghasilkan $120\\text{ kg}$ limbah garam untuk memproduksi $40\\text{ kg}$ senyawa obat murni. Tentukan nilai $E$-Factor proses tersebut! *(Kunci: 3.0)*

#### Tingkat III: Penalaran Lanjut (HOTS, TKA, & SNBT)
11. Analisis mengapa reaksi pembentukan ozon di stratosfer $\\ce{3 O2(g) ->[h\\nu] 2 O3(g)}$ memiliki ekonomi atom $100\\%$, namun reaksi fotokimia pemecahan ozon oleh gas freon CFC memiliki dampak lingkungan yang sangat merusak berdasarkan prinsip kimia hijau!
12. Diketahui data titrasi asam asetat encer berulang sebanyak 5 kali menghasilkan volume: $15.40\\text{ mL}, 15.42\\text{ mL}, 15.39\\text{ mL}, 15.41\\text{ mL}$, dan $15.40\\text{ mL}$. Jika volume sebenarnya menurut standar primer adalah $16.85\\text{ mL}$, lakukan audit metrologi mengenai akurasi, presisi, dan jenis galat yang dialami praktikan!
13. Rancanglah sebuah mini-proposal eksperimen pengujian efisiensi adsorpsi karbon aktif kulit pisang terhadap ion logam timbal ($\\ce{Pb^2+}$) dalam air limbah, lengkap dengan formulasi hipotesis, triad variabel, dan penerapan minimal dua prinsip kimia hijau!`,
      keyFormulas: [
        { name: 'Kerapatan Massa Balok', formula: '\\rho = \\frac{m}{p \\times l \\times t}' },
        { name: 'Persentase Ekonomi Atom', formula: '\\% \\text{AE} = \\frac{M_r(\\text{Target})}{\\sum M_r(\\text{Reaktan})} \\times 100\\%' },
        { name: 'Metrik Lingkungan E-Factor', formula: 'E\\text{-Factor} = \\frac{m_{\\text{limbah}}}{m_{\\text{produk}}}' },
      ],
    },
  ],
  worked_examples: WORKED_EXAMPLES_TOPIC_101,
};
