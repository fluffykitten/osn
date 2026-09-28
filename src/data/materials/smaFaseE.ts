import type { SmaMaterialItem } from '../smaMaterialsData';

export const SMA_MATERIALS_FASE_E: SmaMaterialItem[] = [
{
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
    summary: 'Panduan pedagogis komprehensif hakikat sains kimia dan penyelidikan ilmiah: segitiga pemahaman Johnstone (makroskopis, sub-mikroskopis, simbolik); klasifikasi materi zat tunggal vs campuran; 4 kaidah baku angka penting dan konvensi pembulatan genap (banker\'s rounding); siklus 7 langkah metode ilmiah berbasis analogi investigasi detektif forensik; desain uji adil (fair test) dengan triad variabel dan kontrol negatif/positif; teknik pembacaan meniskus menghindari paralaks; profil api Bunsen; protokol K3 lab, 9 piktogram GHS & dokumen SDS 16 bagian; kaidah emas AAA (Always Add Acid); serta 12 prinsip kimia hijau dan kalkulasi kuantitatif ekonomi atom.',
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
        title: 'Prasyarat 1: Hakikat Sains Kimia, Segitiga Johnstone & Taksonomi Materi',
        summary: 'Fondasi cara berpikir kimiawan melalui Johnstone\'s Triangle (makroskopis, sub-mikroskopis, simbolik), taksonomi zat murni vs campuran, serta empat tanda pasti reaksi kimia.',
        content: `### 🔍 Kacamata Tiga Lensa Ilmuwan Kimia (Mental Model: Johnstone\'s Triangle)

Bagi orang awam, segelas air mendidih hanyalah air yang bergelembung dan mengeluarkan uap panas. Namun bagi seorang kimiawan, fenomena tersebut dilihat secara simultan melalui **tiga lapisan realitas** yang dikenal sebagai **Segitiga Johnstone (*Johnstone\'s Chemical Triangle*)**:

1. **Lapisan Makroskopis (Apa yang Terlihat):** Gejala konkret yang dapat diamati langsung oleh panca indra di laboratorium—seperti timbulnya endapan putih, bau menyengat gas amonia, atau perubahan larutan bening menjadi merah darah.
2. **Lapisan Sub-mikroskopis / Partikulat (Apa yang Terjadi di Tingkat Partikel):** Rekonstruksi mental tentang perilaku atom, ion, dan molekul yang tak kasatmata—bagaimana molekul $\\ce{H2O}$ bergerak semakin cepat, saling bertumbukan, dan memutus ikatan hidrogen antarmolekul saat dipanaskan.
3. **Lapisan Simbolik (Bagaimana Kita Menuliskannya):** Bahasa universal kimia berupa rumus kimia, persamaan reaksi terkuantifikasi, kurva energi, dan simbol fasa:
   $$\\ce{H2O(l) ->[\\Delta] H2O(g)} \\quad \\Delta H^\\circ_{\\text{vap}} = +40.7\\text{ kJ/mol}$$

> [!NOTE]
> ### 💡 Kunci Penguasaan Kimia OSN
> Kegagalan terbesar siswa dalam memahami kimia bermula dari menghafal formula simbolik di papan tulis tanpa pernah membayangkan apa yang sebenarnya terjadi pada partikel sub-mikroskopisnya. Setiap kali Anda melihat rumus kimia, bayangkanlah wujud molekul fisiknya di dunia nyata!

---

### 1. Klasifikasi Materi: Taksonomi Zat Tunggal vs Campuran

Materi didefinisikan sebagai segala sesuatu yang memiliki massa inersia dan menempati ruang (memiliki volume). Berdasarkan komposisi kimianya, materi terbagi menjadi dua klasifikasi besar:

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 270" width="100%" height="auto" class="max-w-[760px] my-6 select-none font-sans">
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

#### A. Zat Tunggal (Zat Murni)
Memiliki komposisi kimia yang seragam (*homogen*) dan sifat fisika-kimia yang konstan di seluruh bagian sampel:
- **Unsur:** Zat paling sederhana yang tidak dapat diuraikan lagi menjadi zat lain melalui reaksi kimia biasa.
  - *Unsur Logam:* Konduktor listrik dan panas yang baik, berkilau, dapat ditempa (*malleable*), dan ulet (*ductile*). Contoh: $\\ce{Fe}$, $\\ce{Cu}$, $\\ce{Au}$, $\\ce{Na}$.
  - *Unsur Nonlogam:* Isolator listrik (kecuali grafit), rapuh dalam wujud padat, atau berwujud gas/cair. Contoh: $\\ce{O2}$, $\\ce{N2}$, $\\ce{S8}$, $\\ce{Cl2}$.
  - *Unsur Metaloid (Semilogam):* Memiliki sifat intermediet antara logam dan nonlogam, sering bersifat semikonduktor. Contoh: $\\ce{Si}$, $\\ce{Ge}$, $\\ce{As}$.
- **Senyawa:** Gabungan kimiawi dua atau lebih unsur berbeda dengan perbandingan massa tertentu dan tetap (**Hukum Komposisi Tetap / Hukum Proust**). Senyawa memiliki sifat yang sama sekali baru dan berbeda dari unsur-unsur penyusunnya.  
  *Contoh Nyata:* Gas hidrogen ($\\ce{H2}$) sangat mudah meledak dan gas oksigen ($\\ce{O2}$) memicu pembakaran. Namun saat keduanya berikatan kimia membentuk air ($\\ce{H2O}$), senyawa yang dihasilkan justru memadamkan api!

> [!TIP]
> ### 💡 Cara Cepat Membedakan Senyawa vs Campuran
> - **Senyawa:** Terbentuk melalui reaksi kimia dengan perubahan energi besar ($\\Delta H$), perbandingan massa unsur penyusunnya **selalu pasti/tetap**, dan komponennya **hanya dapat dipisahkan secara kimiawi**.
> - **Campuran:** Terbentuk melalui pencampuran fisik sederhana tanpa ikatan kimia baru, perbandingan komponennya **bebas/bervariasi**, dan komponennya **dapat dipisahkan kembali secara mekanis/fisika** (filtrasi, distilasi, kromatografi).

---

### 2. Perubahan Fisika vs Perubahan Kimia (Empat Sinyal Reaksi)

| Parameter Pembanding | Perubahan Fisika | Perubahan Kimia (Reaksi Kimia) |
| :--- | :--- | :--- |
| **Pembentukan Zat Baru** | Tidak menghasilkan zat baru; molekul penyusun tetap utuh. | Terbentuk satu atau lebih zat baru dengan ikatan kimia baru. |
| **Reversibilitas** | Mudah dibalik (*reversible*) dengan mengubah suhu/tekanan. | Sukar dibalik (*irreversible*) secara fisik biasa. |
| **Keterlibatan Kalor** | Kalor laten perubahan fasa relatif kecil ($\\approx 1 - 50\\text{ kJ/mol}$). | Kalor pemutusan &amp; pembentukan ikatan jauh lebih besar. |
| **Contoh Sehari-hari** | Es mencair, lilin meleleh, gula larut dalam teh, pelarutan iodin. | Besi berkarat, tape membusuk, kayu terbakar, tablet effervescent berbuih. |

#### Empat Sinyal Detektif Berlangsungnya Reaksi Kimia:
1. **Perubahan Warna:** Pembentukan spesi molekul baru yang menyerap panjang gelombang cahaya berbeda (misal: larutan bening $\\ce{FeCl3}$ ditambah $\\ce{KSCN}$ menjadi merah darah pekat $\\ce{[Fe(SCN)]^2+}$).
2. **Pembentukan Gas:** Lepasnya molekul produk dalam fase gas yang tidak larut jenuh (misal: logam kalsium dimasukkan ke air membentuk letupan gas $\\ce{H2}$: $\\ce{Ca(s) + 2H2O(l) -> Ca(OH)2(aq) + H2(g)^}$).
3. **Pembentukan Endapan (*Precipitate*):** Ion-ion reaktan bergabung membentuk kisi kristal sukar larut ($Q_{\\text{sp}} > K_{\\text{sp}}$) (misal: $\\ce{AgNO3(aq) + NaCl(aq) -> AgCl(s) v + NaNO3(aq)}$).
4. **Perubahan Suhu Sistem:** Pelepasan kalor spontan ke lingkungan (reaksi eksotermik, tabung terasa panas) atau penyerapan kalor lingkungan (reaksi endotermik, tabung terasa dingin membeku).`,
        keyFormulas: [
          { name: 'Hukum Kekekalan Massa (Lavoisier)', formula: '\\sum m_{\\text{reaktan}} = \\sum m_{\\text{produk}}' },
          { name: 'Persentase Massa Komponen', formula: '\\% m_i = \\frac{m_i}{m_{\\text{total}}} \\times 100\\%' },
          { name: 'Rasio Massa Hukum Proust', formula: '\\frac{m_A}{m_B} = \\text{tetap/konstan}' },
        ],
      },
      {
        tag: 'pengukuran-angka-penting-si',
        tags: ['angka-penting-pengukuran', 'bankers-rounding', 'akurasi-dan-presisi', 'satuan-si-kimia', 'galat-relatif'],
        title: 'Prasyarat 2: Pengukuran Ilmiah, Angka Penting, Aturan Pembulatan Genap & Akurasi vs Presisi',
        summary: 'Metrologi ilmiah kimia, pembedaan akurasi vs presisi via papan target panah, 4 aturan emas angka penting, konvensi pembulatan genap IUPAC/OSN, serta analisis galat relatif.',
        content: `### 🎯 Akurasi (*Ketepatan*) vs Presisi (*Ketelitian*)

Dalam eksperimen laboratorium analitik, kata *akurat* dan *presisi* memiliki arti ilmiah yang sepenuhnya berbeda:
- **Akurasi (*Accuracy*):** Seberapa dekat nilai rata-rata hasil pengukuran dengan **nilai rujukan sejati yang sebenarnya** (*true/accepted value*). Akurasi mencerminkan ketiadaan galat sistematis instrumen.
- **Presisi (*Precision*):** Seberapa dekat hasil-hasil pengukuran berulang satu sama lain saat diulang pada kondisi yang sama (**reprodusibilitas**). Presisi mencerminkan ketelitian pembacaan dan kestabilan instrumen.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 210" width="100%" height="auto" class="max-w-[760px] my-6 select-none font-sans">
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
    <!-- Target Rings -->
    <circle cx="87" cy="98" r="50" fill="#f8fafc" stroke="#94a3b8" stroke-width="1"/>
    <circle cx="87" cy="98" r="35" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1"/>
    <circle cx="87" cy="98" r="20" fill="#fee2e2" stroke="#f87171" stroke-width="1"/>
    <circle cx="87" cy="98" r="6" fill="#dc2626"/>
    <!-- Hits clustered in bullseye -->
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
    <!-- Target Rings -->
    <circle cx="87" cy="98" r="50" fill="#f8fafc" stroke="#94a3b8" stroke-width="1"/>
    <circle cx="87" cy="98" r="35" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1"/>
    <circle cx="87" cy="98" r="20" fill="#fee2e2" stroke="#f87171" stroke-width="1"/>
    <circle cx="87" cy="98" r="6" fill="#dc2626"/>
    <!-- Hits clustered off-center (systematic error) -->
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
    <!-- Target Rings -->
    <circle cx="87" cy="98" r="50" fill="#f8fafc" stroke="#94a3b8" stroke-width="1"/>
    <circle cx="87" cy="98" r="35" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1"/>
    <circle cx="87" cy="98" r="20" fill="#fee2e2" stroke="#f87171" stroke-width="1"/>
    <circle cx="87" cy="98" r="6" fill="#dc2626"/>
    <!-- Hits scattered symmetrically around center -->
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
    <!-- Target Rings -->
    <circle cx="87" cy="98" r="50" fill="#f8fafc" stroke="#94a3b8" stroke-width="1"/>
    <circle cx="87" cy="98" r="35" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1"/>
    <circle cx="87" cy="98" r="20" fill="#fee2e2" stroke="#f87171" stroke-width="1"/>
    <circle cx="87" cy="98" r="6" fill="#dc2626"/>
    <!-- Hits scattered erratically off-center -->
    <circle cx="120" cy="55" r="3" fill="#1e293b"/>
    <circle cx="135" cy="85" r="3" fill="#1e293b"/>
    <circle cx="105" cy="130" r="3" fill="#1e293b"/>
    <circle cx="125" cy="115" r="3" fill="#1e293b"/>
    <text x="87" y="165" text-anchor="middle" font-size="8.5" font-weight="600" fill="#991b1b">Tersebar dan Meleset</text>
    <text x="87" y="178" text-anchor="middle" font-size="7.5" fill="#b91c1c">(Kesalahan Prosedur Fatal)</text>
  </g>
</svg>

---

### 1. Empat Kaidah Emas Penentuan Angka Penting (AP)

Angka penting mencerminkan batas kemampuan instrumen ukur. Terdiri dari angka pasti (*certain digits*) ditambah **satu digit terakhir yang ditaksir** (*estimated digit*):

1. **Semua angka bukan nol adalah AP.**  
   *Contoh:* $28.45\\text{ g}$ memiliki **4 AP**.
2. **Angka nol di antara angka bukan nol (nol terjepit) adalah AP.**  
   *Contoh:* $10.05\\text{ mL}$ memiliki **4 AP**; $302\\text{ K}$ memiliki **3 AP**.
3. **Angka nol di sebelah kiri angka bukan nol pertama BUKAN AP** (hanya pengatur koma).  
   *Contoh:* $0.0025\\text{ M}$ hanya memiliki **2 AP**; $0.080\\text{ g}$ memiliki **2 AP**.
4. **Angka nol di kanan desimal dan setelah angka bukan nol adalah AP.**  
   *Contoh:* $50.00\\text{ mL}$ memiliki **4 AP**; $1.20\\text{ g}$ memiliki **3 AP**.

> [!WARNING]
> ### ⚠️ Waspada Bilangan Bulat dengan Nol di Ujung (Ambiguitas AP)
> Angka seperti $2500\\text{ mL}$ memiliki tafsiran ambigu (bisa 2, 3, atau 4 AP). Untuk menghilangkan ambiguitas dalam soal ujian OSN, **wajib menggunakan Notasi Ilmiah**:
> - $2.5 \\times 10^3\\text{ mL}$ $\\rightarrow$ **2 AP**
> - $2.50 \\times 10^3\\text{ mL}$ $\\rightarrow$ **3 AP**
> - $2.500 \\times 10^3\\text{ mL}$ $\\rightarrow$ **4 AP**

---

### 2. Aturan Operasi Berhitung & Konvensi Pembulatan Genap

- **Penjumlahan & Pengurangan:** Hasil akhir dibatasi oleh bilangan dengan **jumlah desimal paling sedikit di belakang koma**.
  $$\\begin{array}{rll}
  & 12.11\\text{ g} & (2 \\text{ desimal}) \\\\
  + & \\; 0.235\\text{ g} & (3 \\text{ desimal}) \\\\
  + & \\; 3.4\\text{ g} & (1 \\text{ desimal}) \\\\
  \\hline
  = & 15.745\\text{ g} & \\xrightarrow{\\text{dibulatkan ke 1 desimal}} \\mathbf{15.7\\text{ g}}
  \\end{array}$$
- **Perkalian & Pembagian:** Hasil akhir dibatasi oleh bilangan dengan **jumlah angka penting paling sedikit**.
  $$\\rho = \\frac{14.28\\text{ g (4 AP)}}{3.1\\text{ mL (2 AP)}} = 4.60645\\dots\\text{ g/mL} \\xrightarrow{\\text{dibulatkan ke 2 AP}} \\mathbf{4.6\\text{ g/mL}}$$

> [!TIP]
> ### 💡 Konvensi Pembulatan Angka 5 IUPAC/OSN (Banker\'s Rounding / Round-to-Even)
> Jika digit yang dibuang tepat bernilai $5$ (atau $5$ diikuti nol):
> - **Jika angka di depannya GANJIL:** Bulatkan ke ATAS menjadi genap (misal $3.75 \\rightarrow 3.8$).
> - **Jika angka di depannya GENAP:** Bulatkan ke BAWAH tetap genap (misal $3.45 \\rightarrow 3.4$).  
> *Mengapa?* Aturan konvensional sekolah (selalu bulatkan ke atas saat $\\ge 5$) menyebabkan bias akumulasi statistik ke atas pada pengolahan data sains besar. Aturan *round-to-even* menjamin probabilitas pembulatan ke atas dan ke bawah seimbang $50 : 50$.

> [!WARNING]
> ### ⚠️ Bahaya Pembulatan Dini (Premature Rounding)
> Dilarang keras membulatkan hasil perhitungan pada langkah-langkah perantara di tengah soal! Simpan minimal 2 digit ekstra di kalkulator Anda, dan hanya terapkan kaidah angka penting pada langkah pamungkas laporan akhir.`,
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
        title: 'Konsep Inti 1: Siklus Metode Ilmiah, Triad Variabel & Desain Uji Adil (Fair Test)',
        summary: 'Penyelidikan sains berbasis analogi investigasi detektif forensik, 7 tahapan siklus metode ilmiah, triad variabel, pembedaan kontrol negatif vs kontrol positif, serta pencegahan variabel pengacau.',
        content: `### 🕵️ Analogi Detektif Forensik: Menyingkap Rahasia Alam (Mental Model)

Ilmuwan kimia di laboratorium bekerja persis seperti **detektif kriminal forensik** di tempat kejadian perkara (TKP). Seorang detektif hebat tidak pernah langsung menuduh pelaku berdasarkan prasangka buta, melainkan menempuh alur bernalar yang sangat ketat:

1. **Observasi Jejak TKP:** Mengamati sidik jari, tetesan darah, atau serpihan serat pakaian (Observasi fenomena alamiah).
2. **Merumuskan Pertanyaan Motif:** *"Senjata apa yang digunakan dan kapan kejadian berlangsung?"* (Perumusan Masalah).
3. **Membangun Teori Rekonstruksi:** Mengajukan dugaan kronologi kejadian yang logis dan dapat dibuktikan salah jika ditemukan alibi yang sah (Perumusan Hipotesis yang *falsifiable*).
4. **Uji Forensik Terkontrol:** Menguji sampel DNA di lab dengan pembanding standar tanpa kontaminasi silang (Eksperimen Terkontrol).
5. **Menganalisis Fakta:** Menguji kecocokan data sidik jari dengan database kepolisian (Pengolahan Data & Uji Hipotesis).
6. **Menjatuhkan Vonis yang Sahih:** Menetapkan kesimpulan yang terbukti secara sah dan meyakinkan di pengadilan (Publikasi Kesimpulan Ilmiah).

---

### Tujuh Tahapan Baku Siklus Metode Ilmiah:

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 230" width="100%" height="auto" class="max-w-[760px] my-6 select-none font-sans">
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

  <!-- Step 1: Observasi -->
  <g transform="translate(10, 15)">
    <rect width="130" height="62" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" filter="url(#mShadow)"/>
    <text x="65" y="24" text-anchor="middle" font-size="10" font-weight="700" fill="#0f172a">1. Observasi</text>
    <text x="65" y="38" text-anchor="middle" font-size="8" fill="#64748b">Gejala Alamiah</text>
    <text x="65" y="50" text-anchor="middle" font-size="7.5" fill="#94a3b8">Kualitatif &amp; Kuantitatif</text>
  </g>
  <line x1="140" y1="46" x2="158" y2="46" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Step 2: Perumusan Masalah -->
  <g transform="translate(160, 15)">
    <rect width="130" height="62" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" filter="url(#mShadow)"/>
    <text x="65" y="24" text-anchor="middle" font-size="10" font-weight="700" fill="#0f172a">2. Masalah</text>
    <text x="65" y="38" text-anchor="middle" font-size="8" fill="#64748b">Rumusan Pertanyaan</text>
    <text x="65" y="50" text-anchor="middle" font-size="7.5" fill="#94a3b8">Variabel Spesifik</text>
  </g>
  <line x1="290" y1="46" x2="308" y2="46" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Step 3: Studi Pustaka -->
  <g transform="translate(310, 15)">
    <rect width="130" height="62" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" filter="url(#mShadow)"/>
    <text x="65" y="24" text-anchor="middle" font-size="10" font-weight="700" fill="#0f172a">3. Kajian Pustaka</text>
    <text x="65" y="38" text-anchor="middle" font-size="8" fill="#64748b">Teori &amp; Literatur</text>
    <text x="65" y="50" text-anchor="middle" font-size="7.5" fill="#94a3b8">Jurnal &amp; Buku Rujukan</text>
  </g>
  <line x1="440" y1="46" x2="458" y2="46" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Step 4: Hipotesis -->
  <g transform="translate(460, 15)">
    <rect width="135" height="62" rx="8" fill="#fffbeb" stroke="#fcd34d" stroke-width="1.5" filter="url(#mShadow)"/>
    <text x="67" y="24" text-anchor="middle" font-size="10" font-weight="700" fill="#92400e">4. Hipotesis</text>
    <text x="67" y="38" text-anchor="middle" font-size="8" fill="#b45309">Dugaan Sementara</text>
    <text x="67" y="50" text-anchor="middle" font-size="7.5" font-family="monospace" fill="#78350f">H₀ &amp; H₁ (Falsifiable)</text>
  </g>
  <line x1="595" y1="46" x2="613" y2="46" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Step 5: Eksperimen Terkontrol -->
  <g transform="translate(615, 15)">
    <rect width="135" height="62" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5" filter="url(#mShadow)"/>
    <text x="67" y="24" text-anchor="middle" font-size="10" font-weight="700" fill="#1e40af">5. Eksperimen</text>
    <text x="67" y="38" text-anchor="middle" font-size="8" fill="#2563eb">Uji Adil (Fair Test)</text>
    <text x="67" y="50" text-anchor="middle" font-size="7.5" fill="#1d4ed8">Bebas, Terikat, Kontrol</text>
  </g>

  <!-- Flow connector from Step 5 to Step 6 -->
  <path d="M 682 77 L 682 110 L 620 110 L 620 128" fill="none" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Step 6: Pengolahan Data -->
  <g transform="translate(540, 130)">
    <rect width="145" height="62" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5" filter="url(#mShadow)"/>
    <text x="72" y="24" text-anchor="middle" font-size="10" font-weight="700" fill="#1e40af">6. Analisis Data</text>
    <text x="72" y="38" text-anchor="middle" font-size="8" fill="#2563eb">Tabel, Grafik &amp; Galat</text>
    <text x="72" y="50" text-anchor="middle" font-size="7.5" fill="#1d4ed8">Statistik Uji Empiris</text>
  </g>
  <line x1="540" y1="161" x2="480" y2="161" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Decision Node: Uji Hipotesis -->
  <g transform="translate(360, 133)">
    <polygon points="55,0 110,28 55,56 0,28" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.5"/>
    <text x="55" y="25" text-anchor="middle" font-size="9" font-weight="700" fill="#991b1b">Data Sesuai</text>
    <text x="55" y="37" text-anchor="middle" font-size="8.5" font-weight="600" fill="#991b1b">Hipotesis?</text>
  </g>

  <!-- Green Branch: YES -> Step 7 -->
  <line x1="360" y1="161" x2="278" y2="161" stroke="#16a34a" stroke-width="2" marker-end="url(#arrowGreen)"/>
  <rect x="290" y="148" width="50" height="16" rx="4" fill="#dcfce7"/>
  <text x="315" y="160" text-anchor="middle" font-size="8" font-weight="700" fill="#15803d">YA</text>

  <!-- Step 7: Kesimpulan & Publikasi -->
  <g transform="translate(40, 130)">
    <rect width="235" height="62" rx="8" fill="#ecfdf5" stroke="#86efac" stroke-width="2" filter="url(#mShadow)"/>
    <text x="117" y="24" text-anchor="middle" font-size="10.5" font-weight="800" fill="#065f46">7. KESIMPULAN &amp; PUBLIKASI</text>
    <text x="117" y="38" text-anchor="middle" font-size="8.5" font-weight="600" fill="#047857">✓ Hipotesis Terbukti Sahih</text>
    <text x="117" y="50" text-anchor="middle" font-size="7.5" fill="#059669">Membangun Hukum / Teori Baru</text>
  </g>

  <!-- Red Branch: NO -> Loop Back to Step 4 -->
  <path d="M 415 133 L 415 105 L 527 105 L 527 82" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#arrowRed)"/>
  <rect x="425" y="96" width="90" height="18" rx="4" fill="#fee2e2" stroke="#fca5a5"/>
  <text x="470" y="109" text-anchor="middle" font-size="8" font-weight="700" fill="#b91c1c">TIDAK: Revisi Hipotesis</text>
</svg>

---

### Triad Variabel: Arsitektur Uji Adil (*Fair Test*)

| Jenis Variabel | Peran Operasional dalam Eksperimen | Penempatan Grafik | Contoh: Laju Pelarutan Logam $\\ce{Mg}$ |
| :--- | :--- | :---: | :--- |
| **Variabel Bebas** (*Independent*) | Faktor yang **sengaja diubah-ubah secara terencana** oleh peneliti. | **Sumbu-$x$** (Horizontal) | Konsentrasi larutan $\\ce{HCl}$: $0.5\\text{ M}$, $1.0\\text{ M}$, $2.0\\text{ M}$. |
| **Variabel Terikat** (*Dependent*) | Besaran yang **diukur responsnya** sebagai akibat perubahan variabel bebas. | **Sumbu-$y$** (Vertikal) | Laju produksi volume gas $\\ce{H2}$ per menit ($\\text{mL/detik}$). |
| **Variabel Kontrol** (*Controlled*) | Semua faktor luar yang **wajib dijaga konstan** agar tidak merusak uji adil. | Parameter Tetap | Massa dan luas permukaan pita $\\ce{Mg}$ ($0.10\\text{ g}$), suhu ruang ($25^\\circ\\text{C}$). |

> [!WARNING]
> ### ⚠️ Bahaya Variabel Pengacau (Confounding Variables)
> Dalam satu percobaan sains, **hanya boleh ada SATU variabel bebas** yang diubah! Jika Anda menaikkan konsentrasi asam sekaligus menaikkan suhunya, Anda tidak akan pernah tahu apakah kenaikan laju reaksi disebabkan oleh kepekatan partikel atau kenaikan energi kinetik!

> [!IMPORTANT]
> ### 📌 Pembedaan Kritis: Kontrol Negatif vs Kontrol Positif
> 1. **Kontrol Negatif (*Negative Control*):** Kelompok sampel yang **sama sekali tidak diberi variabel bebas** (misal: larutan $\\ce{H2O2}$ tanpa katalis). Tujuannya membuktikan bahwa tanpa perlakuan, respons tidak akan terjadi secara spontan.
> 2. **Kontrol Positif (*Positive Control*):** Kelompok sampel yang diberi perlakuan standar yang **sudah pasti memberikan respons positif yang diketahui** (misal: uji amilum menggunakan larutan kanji murni sebagai pembanding reagen iodin). Tujuannya memastikan bahwa reagen deteksi dan prosedur bekerja dengan benar.`,
        keyFormulas: [
          { name: 'Persamaan Regresi Linear', formula: 'y = mx + c' },
          { name: 'Gradien Laju Perubahan', formula: 'm = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1}' },
        ],
      },
      {
        tag: 'alat-laboratorium-teknik-pengukuran',
        tags: ['alat-laboratorium-kimia', 'pembacaan-meniskus', 'gelas-volumetrik', 'buret-pipet-labu', 'nyala-bunsen'],
        title: 'Konsep Inti 2: Instrumen Laboratorium Presisi, Teknik Meniskus & Karakteristik Nyala Bunsen',
        summary: 'Klasifikasi peralatan gelas analitik kelas A vs wadah penampung kasar, teknik eliminasi paralaks meniskus cekung vs cembung, serta zonasi termal api Bunsen.',
        content: `### 1. Klasifikasi Instrumen Gelas: Volumetrik Kuantitatif vs Penampung Kasar

Kesalahan fatal yang sering dilakukan pemula di laboratorium adalah mengukur volume titrasi menggunakan gelas kimia (*beaker*). Gelas laboratorium terbagi menjadi dua kelas fungsional tegas:

#### A. Alat Volumetrik Presisi Tinggi (Kelas Kuantitatif)
- **Buret ($50.00\\text{ mL}$):** Tabung berskala presisi tinggi dengan kran di ujung bawah untuk titrasi volumetri. Ketelitian: **$\\pm 0.02\\text{ mL}$**.
- **Pipet Volumetrik (Pipet Gondok):** Tabung bertanda batas kalibrasi tunggal untuk memindahkan volume cairan spesifik dengan akurasi sangat tinggi (misal tepat $10.00\\text{ mL}$ atau $25.00\\text{ mL}$). Ketelitian: **$\\pm 0.01 - 0.03\\text{ mL}$**.
- **Labu Ukur / Labu Volumetrik:** Labu leher panjang bertanda batas tunggal dan tutup kedap untuk membuat larutan baku standar dan pengenceran presisi tinggi. Ketelitian: **$\\pm 0.08\\text{ mL}$** (pada labu $100.0\\text{ mL}$).

#### B. Alat Penampung & Pengukur Kasar (Kelas Kualitatif)
- **Gelas Ukur:** Hanya untuk pengukuran volume cairan kasar (toleransi galat $\\pm 0.5 - 1.0\\text{ mL}$). **Dilarang untuk analisis kuantitatif stoikiometri!**
- **Gelas Kimia (*Beaker Glass*):** Wadah melarutkan padatan, menampung filtrat, dan memanaskan cairan. Skala dindingnya memiliki galat $\\pm 5 - 10\\%$.
- **Labu Erlenmeyer:** Wadah kerucut leher sempit ideal untuk wadah titrasi karena cairan tidak memercik keluar saat digoyang memutar (*swirling*).

> [!WARNING]
> ### ⚠️ Skala Buret yang Berkebalikan!
> Berbeda dari gelas ukur, **angka nol ($0.00\\text{ mL}$) pada buret terletak di ujung paling ATAS**, dan angka maksimum ($50.00\\text{ mL}$) terletak di BAWAH dekat kran!  
> Volume cairan yang terpakai dihitung dari selisih:
> $$\\Delta V = V_{\\text{akhir}} - V_{\\text{awal}}$$
> Membaca skala buret dari bawah ke atas adalah kesalahan klasik yang langsung menggagalkan ujian praktikum!

---

### 2. Teknik Presisi Pembacaan Meniskus Cairan

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 320" width="100%" height="auto" class="max-w-[760px] my-6 select-none font-sans">
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

  <!-- Left Panel: Meniskus Cekung -->
  <g transform="translate(10, 10)">
    <rect width="365" height="300" rx="16" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" filter="url(#shadowFilter)"/>
    <rect width="365" height="42" rx="16" fill="#f0f9ff"/>
    <path d="M0 16 Q0 42 16 42 L349 42 Q365 42 365 16 Z" fill="#f0f9ff"/>
    <text x="182" y="24" text-anchor="middle" font-size="12" font-weight="700" fill="#0369a1">A. MENISKUS CEKUNG (AIR / H₂O)</text>
    <text x="182" y="38" text-anchor="middle" font-size="9.5" font-weight="600" fill="#0284c7">Gaya Adhesi (Air-Kaca) &gt; Gaya Kohesi (Air-Air)</text>

    <!-- Glass Cylinder -->
    <rect x="55" y="65" width="80" height="200" fill="url(#glassWall)" stroke="#94a3b8" stroke-width="2"/>
    
    <!-- Water liquid fill with concave meniscus curve -->
    <path d="M 55 145 Q 95 175 135 145 L 135 265 L 55 265 Z" fill="url(#waterGrad)"/>
    <path d="M 55 145 Q 95 175 135 145" fill="none" stroke="#0284c7" stroke-width="2.5"/>

    <!-- Calibration Tick Marks on Glass -->
    <line x1="135" y1="115" x2="125" y2="115" stroke="#475569" stroke-width="1.5"/>
    <text x="120" y="118" text-anchor="end" font-size="9" font-family="monospace" fill="#475569">19.8</text>
    <line x1="135" y1="135" x2="128" y2="135" stroke="#94a3b8" stroke-width="1"/>
    <line x1="135" y1="155" x2="128" y2="155" stroke="#94a3b8" stroke-width="1"/>
    
    <!-- Target calibration line (20.00 mL at bottom of meniscus) -->
    <line x1="135" y1="175" x2="122" y2="175" stroke="#0284c7" stroke-width="2"/>
    <text x="118" y="179" text-anchor="end" font-size="10" font-weight="700" font-family="monospace" fill="#0284c7">20.0</text>
    
    <line x1="135" y1="195" x2="128" y2="195" stroke="#94a3b8" stroke-width="1"/>
    <line x1="135" y1="215" x2="125" y2="215" stroke="#475569" stroke-width="1.5"/>
    <text x="120" y="218" text-anchor="end" font-size="9" font-family="monospace" fill="#475569">20.2</text>

    <!-- Correct Sight Line (Horizontal at y=175) -->
    <line x1="95" y1="175" x2="230" y2="175" stroke="#16a34a" stroke-width="2" stroke-dasharray="4,3"/>
    <circle cx="95" cy="175" r="4" fill="#16a34a"/>
    
    <!-- Correct Eye Icon at y=175 -->
    <g transform="translate(235, 165)">
      <path d="M 0 10 Q 15 -5 30 10 Q 15 25 0 10 Z" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
      <circle cx="15" cy="10" r="5" fill="#16a34a"/>
      <circle cx="13" cy="8" r="1.5" fill="#ffffff"/>
    </g>
    <!-- Label Correct -->
    <rect x="270" y="163" width="85" height="24" rx="6" fill="#dcfce7" stroke="#86efac"/>
    <text x="312" y="179" text-anchor="middle" font-size="8.5" font-weight="700" fill="#15803d">✓ BENAR (20.00)</text>
    <text x="182" y="196" text-anchor="middle" font-size="8.5" font-weight="600" fill="#15803d">Dasar Lengkungan</text>

    <!-- High Parallax Eye (Above at y=105) -->
    <line x1="95" y1="175" x2="230" y2="115" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,3"/>
    <g transform="translate(235, 105)">
      <path d="M 0 10 Q 15 -5 30 10 Q 15 25 0 10 Z" fill="#ffffff" stroke="#ef4444" stroke-width="1.5"/>
      <circle cx="15" cy="10" r="5" fill="#ef4444"/>
    </g>
    <rect x="270" y="103" width="85" height="24" rx="6" fill="#fee2e2" stroke="#fca5a5"/>
    <text x="312" y="119" text-anchor="middle" font-size="8" font-weight="600" fill="#b91c1c">✗ SALAH: Paralaks (+)</text>

    <!-- Low Parallax Eye (Below at y=235) -->
    <line x1="95" y1="175" x2="230" y2="235" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,3"/>
    <g transform="translate(235, 225)">
      <path d="M 0 10 Q 15 -5 30 10 Q 15 25 0 10 Z" fill="#ffffff" stroke="#ef4444" stroke-width="1.5"/>
      <circle cx="15" cy="10" r="5" fill="#ef4444"/>
    </g>
    <rect x="270" y="223" width="85" height="24" rx="6" fill="#fee2e2" stroke="#fca5a5"/>
    <text x="312" y="239" text-anchor="middle" font-size="8" font-weight="600" fill="#b91c1c">✗ SALAH: Paralaks (-)</text>
    
    <text x="182" y="285" text-anchor="middle" font-size="10" font-weight="500" fill="#64748b">Cairan membasahi dinding tabung kaca</text>
  </g>

  <!-- Right Panel: Meniskus Cembung -->
  <g transform="translate(385, 10)">
    <rect width="365" height="300" rx="16" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" filter="url(#shadowFilter)"/>
    <rect width="365" height="42" rx="16" fill="#f8fafc"/>
    <path d="M0 16 Q0 42 16 42 L349 42 Q365 42 365 16 Z" fill="#f8fafc"/>
    <text x="182" y="24" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">B. MENISKUS CEMBUNG (RAKSA / Hg)</text>
    <text x="182" y="38" text-anchor="middle" font-size="9.5" font-weight="600" fill="#64748b">Gaya Kohesi (Ikatan Logam) &gt; Gaya Adhesi (Hg-Kaca)</text>

    <!-- Glass Cylinder -->
    <rect x="55" y="65" width="80" height="200" fill="url(#glassWall)" stroke="#94a3b8" stroke-width="2"/>
    
    <!-- Mercury liquid fill with convex meniscus curve -->
    <path d="M 55 175 Q 95 145 135 175 L 135 265 L 55 265 Z" fill="url(#hgGrad)"/>
    <path d="M 55 175 Q 95 145 135 175" fill="none" stroke="#475569" stroke-width="2.5"/>

    <!-- Calibration Tick Marks on Glass -->
    <line x1="135" y1="125" x2="125" y2="125" stroke="#475569" stroke-width="1.5"/>
    <text x="120" y="128" text-anchor="end" font-size="9" font-family="monospace" fill="#475569">9.8</text>
    
    <!-- Target calibration line (10.00 mL at peak of meniscus) -->
    <line x1="135" y1="145" x2="122" y2="145" stroke="#475569" stroke-width="2"/>
    <text x="118" y="149" text-anchor="end" font-size="10" font-weight="700" font-family="monospace" fill="#334155">10.0</text>
    
    <line x1="135" y1="165" x2="128" y2="165" stroke="#94a3b8" stroke-width="1"/>
    <line x1="135" y1="185" x2="128" y2="185" stroke="#94a3b8" stroke-width="1"/>
    <line x1="135" y1="205" x2="125" y2="205" stroke="#475569" stroke-width="1.5"/>
    <text x="120" y="208" text-anchor="end" font-size="9" font-family="monospace" fill="#475569">10.2</text>

    <!-- Correct Sight Line (Horizontal at peak y=145) -->
    <line x1="95" y1="145" x2="230" y2="145" stroke="#16a34a" stroke-width="2" stroke-dasharray="4,3"/>
    <circle cx="95" cy="145" r="4" fill="#16a34a"/>
    
    <!-- Correct Eye Icon at y=145 -->
    <g transform="translate(235, 135)">
      <path d="M 0 10 Q 15 -5 30 10 Q 15 25 0 10 Z" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
      <circle cx="15" cy="10" r="5" fill="#16a34a"/>
      <circle cx="13" cy="8" r="1.5" fill="#ffffff"/>
    </g>
    <!-- Label Correct -->
    <rect x="270" y="133" width="85" height="24" rx="6" fill="#dcfce7" stroke="#86efac"/>
    <text x="312" y="149" text-anchor="middle" font-size="8.5" font-weight="700" fill="#15803d">✓ BENAR (10.00)</text>
    <text x="182" y="165" text-anchor="middle" font-size="8.5" font-weight="600" fill="#15803d">Puncak Lengkungan</text>

    <!-- Explanatory text box -->
    <rect x="50" y="220" width="265" height="48" rx="8" fill="#f8fafc" stroke="#e2e8f0"/>
    <text x="60" y="238" font-size="9.5" font-weight="600" fill="#334155">Perhatian Khusus Pembacaan Raksa:</text>
    <text x="60" y="252" font-size="8.5" fill="#64748b">• Raksa tidak membasahi kaca (kohesi dominan).</text>
    <text x="60" y="263" font-size="8.5" fill="#64748b">• Skala dibaca tepat pada puncak lengkungan teratas.</text>

    <text x="182" y="285" text-anchor="middle" font-size="10" font-weight="500" fill="#64748b">Cairan TIDAK membasahi dinding tabung</text>
  </g>
</svg>

- **Meniskus Cekung (Air/Larutan Biasa):** Gaya adhesi air-kaca $>$ kohesi air-air. **Skala volume WAJIB dibaca tepat pada dasar lengkungan paling bawah.**
- **Meniskus Cembung (Air Raksa / $\\ce{Hg}$):** Gaya kohesi raksa-raksa $>$ adhesi raksa-kaca. **Skala volume WAJIB dibaca tepat pada puncak lengkungan paling atas.**
- **Garis Pandang Horizontal:** Mata pengamat harus tegak lurus sejajar dengan lengkungan meniskus untuk meniadakan galat paralaks.

---

### 3. Profil Zonasi Api Pembakar Bunsen

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 300" width="100%" height="auto" class="max-w-[760px] my-6 select-none font-sans">
  <defs>
    <linearGradient id="yellowFlame" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="60%" stop-color="#fbbf24"/>
      <stop offset="100%" stop-color="#fef08a" stop-opacity="0.8"/>
    </linearGradient>
    <linearGradient id="blueOuterFlame" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="#2563eb" stop-opacity="0.9"/>
      <stop offset="50%" stop-color="#60a5fa" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="#93c5fd" stop-opacity="0.4"/>
    </linearGradient>
    <linearGradient id="blueInnerFlame" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="#06b6d4"/>
      <stop offset="100%" stop-color="#38bdf8"/>
    </linearGradient>
    <linearGradient id="metalGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#64748b"/>
      <stop offset="50%" stop-color="#cbd5e1"/>
      <stop offset="100%" stop-color="#475569"/>
    </linearGradient>
  </defs>

  <!-- Left: Api Kuning / Luminous -->
  <g transform="translate(10, 10)">
    <rect width="365" height="280" rx="16" fill="#ffffff" stroke="#fed7aa" stroke-width="1.5"/>
    <rect width="365" height="38" rx="16" fill="#fff7ed"/>
    <path d="M0 16 Q0 38 16 38 L349 38 Q365 38 365 16 Z" fill="#fff7ed"/>
    <text x="182" y="24" text-anchor="middle" font-size="12" font-weight="700" fill="#c2410c">1. API KUNING (LUMINOUS / DIFUSI)</text>

    <!-- Bunsen Burner Base & Barrel -->
    <rect x="75" y="235" width="50" height="15" rx="3" fill="url(#metalGrad)"/>
    <rect x="92" y="160" width="16" height="75" fill="url(#metalGrad)"/>
    <!-- Closed Air Hole Collar -->
    <rect x="90" y="195" width="20" height="18" rx="2" fill="#334155"/>
    <circle cx="100" cy="204" r="4" fill="#0f172a"/>
    <!-- Gas tube connector -->
    <path d="M 92 225 L 60 232" stroke="#475569" stroke-width="4" fill="none"/>

    <!-- Yellow Flame Shape -->
    <path d="M 92 160 Q 75 110 85 70 Q 100 35 100 45 Q 105 35 115 70 Q 125 110 108 160 Z" fill="url(#yellowFlame)"/>

    <!-- Soot Particles -->
    <circle cx="95" cy="25" r="2.5" fill="#334155" opacity="0.6"/>
    <circle cx="106" cy="18" r="2" fill="#334155" opacity="0.5"/>
    <circle cx="100" cy="10" r="1.5" fill="#334155" opacity="0.4"/>
    <text x="100" y="6" text-anchor="middle" font-size="8" font-weight="600" fill="#64748b">Jelaga C(s)</text>

    <!-- Details Box -->
    <g transform="translate(145, 55)">
      <rect width="205" height="195" rx="10" fill="#fffbeb" stroke="#fde68a"/>
      <text x="12" y="22" font-size="11" font-weight="700" fill="#92400e">Karakteristik Nyala Kuning:</text>
      <text x="12" y="44" font-size="9" font-weight="600" fill="#b45309">• Lubang Udara: <tspan fill="#dc2626">TERTUTUP</tspan></text>
      <text x="12" y="64" font-size="9" font-weight="600" fill="#b45309">• Reaksi: <tspan font-weight="500">Pembakaran Tak Sempurna</tspan></text>
      <text x="22" y="80" font-size="8.5" font-family="monospace" fill="#78350f">CH₄ + O₂ → C(jelaga) + CO + H₂O</text>
      <text x="12" y="104" font-size="9" font-weight="600" fill="#b45309">• Suhu Rata-rata: <tspan fill="#b45309" font-weight="700">300 – 500 °C</tspan></text>
      <text x="12" y="124" font-size="9" font-weight="600" fill="#b45309">• Dampak: <tspan font-weight="500">Meninggalkan jelaga hitam</tspan></text>
      <text x="22" y="138" font-size="8.5" fill="#78350f">pada permukaan alat gelas lab</text>
      <text x="12" y="162" font-size="9" font-weight="600" fill="#b45309">• Fungsi: <tspan font-weight="500">Nyala pengaman (safety flame)</tspan></text>
      <text x="22" y="176" font-size="8.5" fill="#78350f">karena sangat terlihat kasat mata</text>
    </g>
  </g>

  <!-- Right: Api Biru / Non-Luminous -->
  <g transform="translate(385, 10)">
    <rect width="365" height="280" rx="16" fill="#ffffff" stroke="#bfdbfe" stroke-width="1.5"/>
    <rect width="365" height="38" rx="16" fill="#eff6ff"/>
    <path d="M0 16 Q0 38 16 38 L349 38 Q365 38 365 16 Z" fill="#eff6ff"/>
    <text x="182" y="24" text-anchor="middle" font-size="12" font-weight="700" fill="#1d4ed8">2. API BIRU (NON-LUMINOUS / OKSIDASI)</text>

    <!-- Bunsen Burner Base & Barrel -->
    <rect x="75" y="235" width="50" height="15" rx="3" fill="url(#metalGrad)"/>
    <rect x="92" y="160" width="16" height="75" fill="url(#metalGrad)"/>
    <!-- Open Air Hole Collar -->
    <rect x="90" y="195" width="20" height="18" rx="2" fill="#334155"/>
    <rect x="96" y="198" width="8" height="12" rx="2" fill="#93c5fd" stroke="#2563eb" stroke-width="1"/>
    <!-- Gas tube connector -->
    <path d="M 92 225 L 60 232" stroke="#475569" stroke-width="4" fill="none"/>

    <!-- Blue Outer Flame -->
    <path d="M 92 160 Q 70 120 85 85 Q 100 45 100 50 Q 100 45 115 85 Q 130 120 108 160 Z" fill="url(#blueOuterFlame)"/>
    <!-- Blue Inner Cone (Reducing zone) -->
    <path d="M 94 160 Q 88 135 100 110 Q 112 135 106 160 Z" fill="url(#blueInnerFlame)"/>

    <!-- Temperature markers with pointers -->
    <line x1="100" y1="55" x2="135" y2="55" stroke="#2563eb" stroke-width="1.5"/>
    <circle cx="100" cy="55" r="3" fill="#2563eb"/>
    <text x="140" y="58" font-size="8.5" font-weight="700" fill="#1d4ed8">Puncak: ~1500 °C (Zona Oksidasi)</text>

    <line x1="100" y1="125" x2="135" y2="125" stroke="#0284c7" stroke-width="1.5"/>
    <circle cx="100" cy="125" r="3" fill="#0284c7"/>
    <text x="140" y="128" font-size="8.5" font-weight="700" fill="#0284c7">Kerucut Dalam: ~900 °C (Reduksi)</text>

    <!-- Details Box -->
    <g transform="translate(145, 140)">
      <rect width="205" height="110" rx="10" fill="#f0f9ff" stroke="#bae6fd"/>
      <text x="12" y="20" font-size="10.5" font-weight="700" fill="#0369a1">Karakteristik Nyala Biru:</text>
      <text x="12" y="38" font-size="9" font-weight="600" fill="#0284c7">• Lubang Udara: <tspan fill="#16a34a">TERBUKA PENUH</tspan></text>
      <text x="12" y="56" font-size="9" font-weight="600" fill="#0284c7">• Reaksi: <tspan font-weight="500">CH₄ + 2O₂ → CO₂ + 2H₂O</tspan></text>
      <text x="12" y="74" font-size="9" font-weight="600" fill="#0284c7">• Bebas Jelaga &amp; Bersuara Desir</text>
      <text x="12" y="92" font-size="9" font-weight="600" fill="#0284c7">• Standar Pemanasan &amp; Uji Nyala</text>
    </g>
  </g>
</svg>

- **Nyala Kuning (Safety Flame):** Lubang udara tertutup, pembakaran tidak sempurna menghasilkan jelaga karbon padat ($300 - 500^\\circ\\text{C}$). Hanya digunakan saat istirahat praktikum agar api terlihat kasatmata.
- **Nyala Biru (Heating Flame):** Lubang udara terbuka penuh, pembakaran sempurna metana ($\\ce{CH4 + 2O2 -> CO2 + 2H2O}$). Suhu puncak zona oksidasi mencapai **$\\approx 1500^\\circ\\text{C}$**, bebas jelaga kotor, dan merupakan nyala standar untuk pemanasan tabung reaksi dan uji nyala kation.`,
        keyFormulas: [
          { name: 'Toleransi Buret Kelas A', formula: '\\Delta V = \\pm 0.02\\text{ mL}' },
          { name: 'Reaksi Pembakaran Sempurna Metana Bunsen', formula: '\\ce{CH4(g) + 2 O2(g) -> CO2(g) + 2 H2O(g)} \\quad (\\Delta H < 0)' },
        ],
      },
      {
        tag: 'keselamatan-kerja-lab-ghs-sds',
        tags: ['keselamatan-kerja-lab', 'simbol-bahaya-ghs', 'safety-data-sheet-sds', 'always-add-acid', 'pertolongan-pertama-lab'],
        title: 'Konsep Inti 3: Standarisasi K3 Lab, 9 Simbol Bahaya GHS, Lembar SDS & Kaidah Emas AAA',
        summary: 'Protokol keselamatan operasional laboratorium kimia, 9 piktogram Sistem Harmonisasi Global (GHS), anatomi dokumen SDS 16 bagian, hierarki kendali bahaya, serta mitigasi darurat kaidah emas AAA.',
        content: `### 1. Sembilan Piktogram Bahaya Global GHS (*Globally Harmonized System*)

PBB menetapkan simbol belah ketupat bertepi merah dengan piktogram hitam di atas latar putih untuk menandai bahaya bahan kimia:

| Simbol Bahaya GHS | Karakteristik Bahaya Kimia | Contoh Bahan di Lab SMA | Tindakan Pengamanan Wajib |
| :--- | :--- | :--- | :--- |
| **Mudah Terbakar (*Flammable*)** | Titik nyala (*flash point*) rendah; mudah tersulut percikan api. | Etanol, aseton, dietil eter, logam $\\ce{Na}$. | Jauhkan dari api terbuka Bunsen; simpan di lemari tahan api. |
| **Pengoksidasi (*Oxidizing*)** | Melepaskan oksigen cepat, memicu pembakaran dahsyat. | $\\ce{KMnO4}$, $\\ce{H2O2}$ pekat, $\\ce{HNO3}$ pekat. | Jangan disimpan bercampur dengan zat organik mudah terbakar. |
| **Korosif (*Corrosive*)** | Menghancurkan jaringan biologis kulit dan mengikis logam. | $\\ce{H2SO4}$, $\\ce{HCl}$ pekat, $\\ce{NaOH}$, $\\ce{Br2}$ cair. | Gunakan kacamata *goggles* rapat, sarung tangan nitril tebal. |
| **Toksik Akut (*Toxic*)** | Mematikan dalam dosis sangat kecil melalui inhalasi atau serapan. | $\\ce{KCN}$, $\\ce{HgCl2}$, $\\ce{As2O3}$, gas $\\ce{H2S}$. | Kerjakan hanya di dalam lemari asam; simpan di lemari racun terkunci. |
| **Bahaya Kesehatan (*Health Hazard*)** | Karsinogenik (pemicu kanker), mutagenik, atau toksik pada organ. | Benzena, formaldehida (formalin), kloroform, garam $\\ce{Pb}$. | Hindari kontak kulit total; gunakan masker respirator uap organik. |
| **Iritan / Bahaya Rendah (*Harmful*)** | Menyebabkan iritasi selaput lendir mata, kulit, dan pernapasan. | Amonia encer, kalsium klorida, tembaga sulfat encer. | Bilas tangan dengan air mengalir dan sabun seusai praktikum. |
| **Mudah Meledak (*Explosive*)** | Sensitif terhadap benturan, gesekan, panas, atau swa-dekomposisi. | $\\ce{NH4NO3}$, asam pikrat kering, peroksida organik. | Hindari panas dan gesekan logam; simpan dalam wadah lembap. |
| **Gas Bertekanan (*Gas Cylinder*)** | Tabung bertekanan tinggi ($> 200\\text{ bar}$) yang rentan meledak jika jatuh. | Silinder gas $\\ce{N2}$, $\\ce{O2}$, $\\ce{Ar}$, $\\ce{CO2}$. | Silinder wajib dirantai tegak ke dinding; pasang regulator ganda. |
| **Pencemar Lingkungan (*Aquatic*)** | Sangat beracun bagi ekosistem perairan secara persisten. | Garam raksa, senyawa timbal, pestisida organoklorin. | **Dilarang membuang ke wastafel!** Tampung di jeriken limbah B3. |

---

### 2. Kaidah Emas Pengenceran Asam Pekat (The Golden AAA Rule)

> [!DANGER]
> ### 🚨 INGAT KAIDAH EMAS: "AAA = ALWAYS ADD ACID TO WATER!"
> **SELALU TUANGKAN ASAM SULFAT PEKAT PERLAHAN KE DALAM AIR SAMBIL DIADUK.**  
> **JANGAN PERNAH MENUANGKAN AIR KE DALAM ASAM SULFAT PEKAT!**  
> *Mengapa?* Pelarutan asam sulfat pekat dalam air melepaskan kalor hidrasi yang **luar biasa dahsyat**:
> $$\\ce{H2SO4(l) + H2O(l) -> H3O+(aq) + HSO4-(aq)} \\quad \\Delta H_{\\text{hidrasi}} \\approx -880\\text{ kJ/mol}$$
> Jika air dituangkan ke dalam asam pekat: tetesan air yang sedikit itu akan langsung mencapai titik didih ($> 100^\\circ\\text{C}$) dalam sekejap karena densitas asam sulfat ($\\rho = 1.84\\text{ g/mL}$) jauh lebih berat, menyebabkan **letupan semburan asam mendidih (*violent acid boil-over splash*)** yang dapat membakar wajah dan mata Anda!

---

### 3. Protokol Tanggap Darurat & Pertolongan Pertama (P3K) Lab

1. **Percikan Asam/Basa Kuat pada Kulit:** Segera guyur dengan air mengalir deras dari pancuran darurat (*Emergency Shower*) selama **minimal 15 menit terus-menerus**. Jangan mengoleskan salep sebelum dibilas tuntas!
2. **Bahan Kimia Mengenai Mata:** Buka kelopak mata lebar-lebar dengan jemari dan bilas kornea di *Eye Wash Station* selama minimal 15–20 menit sambil meminta bantuan medis darurat.
3. **Tumpahan Asam Kuat di Meja Praktikum:** Netralkan dengan menaburkan serbuk natrium bikarbonat ($\\ce{NaHCO3}$) hingga buih $\\ce{CO2}$ berhenti total, baru kemudian diseka dengan kain lap basah.
4. **Tumpahan Basa Kuat di Meja:** Netralkan dengan larutan asam asetat encer ($1\\%$) atau asam sitrat encer, lalu bilas air bersih.

> [!CAUTION]
> ### 🛑 Hierarki Pengendalian Bahaya Kimiawi (Hierarchy of Controls)
> Penggunaan APD (seperti jas lab dan sarung tangan) adalah **garis pertahanan paling terakhir**, bukan solusi utama! Urutan perlindungan yang benar adalah:
> 1. **Eliminasi:** Meniadakan zat berbahaya jika tidak mutlak diperlukan.
> 2. **Substitusi:** Mengganti zat beracun dengan zat yang lebih aman (misal mengganti benzena dengan toluena).
> 3. **Rekayasa Teknis (*Engineering Controls*):** Menggunakan lemari asam (*fume hood*) bersirkulasi hisap.
> 4. **Pengendalian Administratif:** SOP keselamatan kerja, label SDS, dan pelatihan praktikan.
> 5. **Alat Pelindung Diri (APD):** Kacamata *goggles*, sarung tangan nitril, jas lab katun 100%, sepatu tertutup.`,
        keyFormulas: [
          { name: 'Reaksi Netralisasi Tumpahan Asam dengan Soda Kue', formula: '\\ce{H2SO4(aq) + 2 NaHCO3(s) -> Na2SO4(aq) + 2 CO2(g)^ + 2 H2O(l)}' },
          { name: 'Entalpi Hidrasi Asam Sulfat Pekat', formula: '\\Delta H_{\\text{hidrasi}} \\approx -880\\text{ kJ/mol} \\quad (\\text{Sangat Eksotermik!})' },
        ],
      },
      {
        tag: 'kimia-hijau-dan-ekonomi-atom',
        tags: ['kimia-hijau', '12-prinsip-green-chemistry', 'ekonomi-atom', 'faktor-lingkungan-e-factor', 'sintesis-berkelanjutan'],
        title: 'Konsep Inti 4: Prinsip Kimia Hijau (Green Chemistry) & Kuantifikasi Ekonomi Atom',
        summary: 'Paradigma 12 prinsip kimia hijau (Anastas & Warner), perbedaan fundamental antara persen rendemen laboratorium vs persen ekonomi atom intrinsik, serta metrik kalkulasi E-Factor.',
        content: `### 🥭 Analogi Mengupas Buah Mangga: Rendemen vs Ekonomi Atom (Mental Model)

Bayangkan Anda membeli $1000\\text{ gram}$ buah mangga di pasar untuk membuat jus mangga.
- **Persen Rendemen (*Yield*):** Jika resep menargetkan Anda memeras semua daging buah yang tersedia tanpa tumpah sedikit pun, dan Anda berhasil mendapatkan $100\\%$ daging buah ke dalam blender, maka rendemen kerja Anda adalah **$100\\%$**.
- **Ekonomi Atom (*Atom Economy*):** Namun setelah dihitung, berat kulit mangga dan biji keras yang harus dibuang ke tempat sampah mencapai $450\\text{ gram}$. Artinya, dari $1000\\text{ gram}$ bahan mentah yang Anda beli, hanya $550\\text{ gram}$ yang benar-benar menjadi makanan! Efisiensi atom buah mangga Anda sebenarnya hanya **$55\\%$**.

Dalam industri kimia konvensional abad ke-20, pabrik sering membanggakan rendemen reaksi $95\\%$, padahal limbah samping garam buangan yang dihasilkan mencapai ribuan ton karena desain reaksi kimianya memiliki ekonomi atom yang sangat buruk!

---

### Dua Belas Prinsip Kimia Hijau (*Anastas & Warner, 1998*):

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 320" width="100%" height="auto" class="max-w-[760px] my-6 select-none font-sans">
  <defs>
    <filter id="gcShadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="2" flood-color="#064e3b" flood-opacity="0.06"/>
    </filter>
  </defs>

  <!-- Top Banner -->
  <rect width="760" height="38" rx="10" fill="#065f46"/>
  <text x="380" y="24" text-anchor="middle" font-size="12.5" font-weight="800" fill="#ffffff" letter-spacing="0.5">12 PRINSIP KIMIA HIJAU (ANASTAS &amp; WARNER, 1998)</text>

  <!-- Col 1 (x: 10, w: 235) -->
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

  <!-- Col 2 (x: 262, w: 235) -->
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

  <!-- Col 3 (x: 515, w: 235) -->
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

---

### Kuantifikasi Efisiensi Kimia Hijau: Metrik AE &amp; E-Factor

1. **Persentase Ekonomi Atom (% AE):**
   $$\\% \\text{AE} = \\frac{M_r(\\text{Produk Target Diinginkan})}{\\sum M_r(\\text{Semua Reaktan dalam Persamaan Reaksi})} \\times 100\\%$$
2. **Faktor Dampak Lingkungan (*E-Factor*):**
   $$E\\text{-Factor} = \\frac{\\text{Massa Total Limbah Bersih (kg)}}{\\text{Massa Produk Akhir Murni (kg)}}$$

> [!NOTE]
> ### 📌 Mengapa Reaksi Adisi Selalu Menjadi Primadona Kimia Hijau?
> - **Reaksi Adisi Langsung:** Menggabungkan seluruh molekul reaktan menjadi satu molekul produk target tanpa produk samping, sehingga **selalu memiliki $\\% \\text{AE} = 100\\%$** (misal: $\\ce{CH2=CH2 + H2O -> CH3CH2OH}$).
> - **Reaksi Substitusi &amp; Eliminasi:** Selalu menghasilkan produk samping buangan (seperti $\\ce{NaCl}$, $\\ce{H2O}$, $\\ce{NaBr}$), sehingga **selalu memiliki $\\% \\text{AE} < 100\\%$**.`,
        keyFormulas: [
          { name: 'Persentase Ekonomi Atom (Atom Economy)', formula: '\\% \\text{AE} = \\frac{M_r(\\text{Produk Target})}{\\sum M_r(\\text{Semua Reaktan})} \\times 100\\%' },
          { name: 'Persentase Rendemen Hasil Reaksi', formula: '\\% \\text{Rendemen} = \\frac{\\text{Massa Nyata}}{\\text{Massa Teoretis}} \\times 100\\%' },
          { name: 'Faktor Dampak Lingkungan (E-Factor)', formula: 'E\\text{-Factor} = \\frac{\\text{Massa Total Limbah}}{\\text{Massa Produk Target}}' },
        ],
      },
    ],
    worked_examples: [
      {
        tag: 'soal-desain-eksperimen-h2o2',
        tags: ['soal-variabel-eksperimen', 'desain-eksperimen', 'tahapan-metode-ilmiah', 'kontrol-positif-negatif'],
        title: 'Contoh Soal 1: Desain Eksperimen Uji Adil & Pengendalian Variabel Dekomposisi H₂O₂',
        summary: 'Metodologi perancangan uji adil (fair test), identifikasi variabel bebas/terikat/kontrol, perumusan hipotesis operasional, serta fungsi kontrol negatif pada dekomposisi hidrogen peroksida.',
        content: `### 📋 Data Eksperimen Diketahui:
Sekelompok siswa kelas X melakukan investigasi ilmiah untuk menguji faktor-faktor yang memengaruhi laju penguraian hidrogen peroksida:
$$\\ce{2 H2O2(aq) -> 2 H2O(l) + O2(g)^}$$
Dengan penambahan katalis besi(III) klorida ($\\ce{FeCl3}$), diperoleh data kuantitatif:

| Tabung Uji | Volume $\\ce{H2O2}$ $3\\%$ | Suhu Larutan | Konsentrasi Katalis $\\ce{FeCl3}$ | Volume Gas $\\ce{O2}$ (60 detik) |
| :---: | :---: | :---: | :---: | :---: |
| **Tabung 1** | $20.0\\text{ mL}$ | $25^\\circ\\text{C}$ | $0.0\\text{ M}$ (tanpa katalis) | $0.5\\text{ mL}$ |
| **Tabung 2** | $20.0\\text{ mL}$ | $25^\\circ\\text{C}$ | $0.1\\text{ M}$ ($2.0\\text{ mL}$) | $18.4\\text{ mL}$ |
| **Tabung 3** | $20.0\\text{ mL}$ | $25^\\circ\\text{C}$ | $0.2\\text{ M}$ ($2.0\\text{ mL}$) | $36.2\\text{ mL}$ |
| **Tabung 4** | $20.0\\text{ mL}$ | $45^\\circ\\text{C}$ | $0.1\\text{ M}$ ($2.0\\text{ mL}$) | $42.8\\text{ mL}$ |

---

### 🎯 Pertanyaan Analitis & Rencana Strategi:
1. Pada pembandingan **Tabung 1, 2, dan 3**, identifikasi variabel bebas, variabel terikat, dan 3 variabel kontrol!
2. Apakah fungsi esensial dari **Tabung 1** dalam metode ilmiah?
3. Rumuskan hipotesis alternatif ($H_1$) untuk pembandingan **Tabung 2 vs Tabung 4**!
4. Buatlah kesimpulan ilmiah matematis berdasarkan perbandingan data konsentrasi katalis terhadap laju reaksi!

---

### ⚡ Eksekusi Langkah demi Langkah:

#### 1. Identifikasi Triad Variabel (Tabung 1, 2, 3):
- **Variabel Bebas (Manipulasi):** Konsentrasi larutan katalis $\\ce{FeCl3}$ ($0.0\\text{ M}$, $0.1\\text{ M}$, $0.2\\text{ M}$).
- **Variabel Terikat (Respons):** Laju pembentukan gas oksigen, diukur dari volume gas $\\ce{O2}$ yang tertampung dalam 60 detik ($\\text{mL}$).
- **Variabel Kontrol:**
  1. Suhu sistem percobaan (dijaga konstan pada $25^\\circ\\text{C}$).
  2. Volume dan kadar awal $\\ce{H2O2}$ ($20.0\\text{ mL}$ larutan $3\\%$).
  3. Volume larutan katalis yang ditambahkan ($2.0\\text{ mL}$).
  4. Durasi interval pengamatan (tepat 60 detik).

#### 2. Fungsi Khusus Tabung 1:
Tabung 1 berfungsi sebagai **Kelompok Kontrol Negatif (*Negative Control*)**. Tabung ini membuktikan bahwa tanpa kehadiran katalis, laju penguraian hidrogen peroksida pada suhu kamar berlangsung amat lambat ($0.5\\text{ mL/menit}$). Dengan demikian, terbukti sahih bahwa lonjakan produksi gas $\\ce{O2}$ pada Tabung 2 dan 3 murni dihasilkan oleh aksi katalisis $\\ce{FeCl3}$, bukan oleh dekomposisi termal latar belakang.

#### 3. Rumusan Hipotesis Alternatif ($H_1$) Tabung 2 vs 4:
Pada Tabung 2 dan 4, konsentrasi katalis dijaga identik ($0.1\\text{ M}$), namun suhunya dinaikkan dari $25^\\circ\\text{C}$ menjadi $45^\\circ\\text{C}$.
> *"Peningkatan suhu reaksi dari $25^\\circ\\text{C}$ ke $45^\\circ\\text{C}$ meningkatkan fraksi molekul yang memiliki energi kinetik melampaui energi aktivasi ($E > E_a$), sehingga meningkatkan frekuensi tumbukan efektif dan mempercepat laju dekomposisi $\\ce{H2O2}$, dibuktikan dengan volume gas $\\ce{O2}$ yang terbentuk lebih banyak dalam interval waktu 60 detik."*

#### 4. Kesimpulan Matematis:
Perbandingan volume $\\ce{O2}$ pada Tabung 2 ($18.4\\text{ mL}$) dan Tabung 3 ($36.2\\text{ mL}$) menunjukkan rasio:
$$\\frac{36.2\\text{ mL}}{18.4\\text{ mL}} \\approx 1.97 \\approx 2$$
Menggandakan konsentrasi katalis dari $0.1\\text{ M}$ ke $0.2\\text{ M}$ melipatgandakan laju pembentukan gas $\\ce{O2}$ tepat dua kali lipat. Laju dekomposisi $\\ce{H2O2}$ berbanding lurus secara linier dengan konsentrasi katalis $\\ce{FeCl3}$ (Orde 1 terhadap katalis).

---

> [!NOTE]
> ### ⚖️ Kesimpulan Evaluator Juri (Insight OSN)
> Jangan pernah menjawab *"katalis ikut bereaksi dan habis menjadi produk"*. Dalam sains kimia, katalis menurunkan energi aktivasi ($E_a$) dengan menyediakan tahapan mekanisme alternatif, dan di akhir siklus reaksi katalis **akan teregenerasi utuh kembali** dengan massa dan komposisi kimia yang tidak berkurang.`,
        keyFormulas: [
          { name: 'Laju Pembentukan Gas Oksigen', formula: 'r_{\\ce{O2}} = \\frac{\\Delta V_{\\ce{O2}}}{\\Delta t} \\quad (\\text{mL/detik})' },
        ],
      },
      {
        tag: 'soal-kuantitatif-ekonomi-atom',
        tags: ['soal-ekonomi-atom', 'kimia-hijau', '12-prinsip-green-chemistry'],
        title: 'Contoh Soal 2: Komparasi Kuantitatif Ekonomi Atom Sintesis Etilena Oksida',
        summary: 'Perhitungan matematis persentase ekonomi atom (% AE) pada produksi etilena oksida rute klorohidrin klasik vs oksidasi katalitik hijau.',
        content: `### 📋 Data Eksperimen Diketahui:
Etilena oksida ($\\ce{C2H4O}$, $M_r = 44.05\\text{ g/mol}$) diproduksi di industri melalui dua rute alternatif:
- **Rute 1 (Proses Klorohidrin Konvensional):**
  $$\\ce{C2H4 + Cl2 + Ca(OH)2 -> C2H4O + CaCl2 + H2O}$$
- **Rute 2 (Oksidasi Hijau dengan Katalis Perak):**
  $$\\ce{C2H4 + 1/2 O2 ->[\\text{katalis } \\ce{Ag}] C2H4O}$$

*(Data massa atom standar: $\\ce{C} = 12.01$, $\\ce{H} = 1.008$, $\\ce{O} = 16.00$, $\\ce{Cl} = 35.45$, $\\ce{Ca} = 40.08\\text{ g/mol}$)*

---

### 🎯 Pertanyaan Analitis & Rencana Strategi:
1. Hitung total massa molar reaktan untuk Rute 1 dan Rute 2!
2. Hitung persentase Ekonomi Atom ($\\% \\text{AE}$) masing-masing rute!
3. Evaluasi kedua rute berdasarkan 12 Prinsip Kimia Hijau!

---

### ⚡ Eksekusi Langkah demi Langkah:

#### 1. Perhitungan Massa Molar Reaktan ($\\sum M_r$ Reaktan):
- **Untuk Rute 1:**
  $$\\begin{aligned}
  M_r(\\ce{C2H4}) &= (2 \\times 12.01) + (4 \\times 1.008) = 28.05\\text{ g/mol} \\
  M_r(\\ce{Cl2}) &= 2 \\times 35.45 = 70.90\\text{ g/mol} \\
  M_r(\\ce{Ca(OH)2}) &= 40.08 + 2 \\times (16.00 + 1.008) = 74.10\\text{ g/mol} \\
  \\sum M_r(\\text{Reaktan Rute 1}) &= 28.05 + 70.90 + 74.10 = \\mathbf{173.05\\text{ g/mol}}
  \\end{aligned}$$
- **Untuk Rute 2:**
  $$\\begin{aligned}
  M_r(\\ce{C2H4}) &= 28.05\\text{ g/mol} \\
  \\frac{1}{2} M_r(\\ce{O2}) &= \\frac{1}{2} \\times (2 \\times 16.00) = 16.00\\text{ g/mol} \\
  \\sum M_r(\\text{Reaktan Rute 2}) &= 28.05 + 16.00 = \\mathbf{44.05\\text{ g/mol}}
  \\end{aligned}$$

#### 2. Perhitungan Persentase Ekonomi Atom (% AE):
Produk target adalah etilena oksida ($\\ce{C2H4O}$) dengan $M_r = 44.05\\text{ g/mol}$.
- **Rute 1:**
  $$\\% \\text{AE}_{\\text{Rute 1}} = \\frac{M_r(\\ce{C2H4O})}{\\sum M_r(\\text{Reaktan})} \\times 100\\% = \\frac{44.05}{173.05} \\times 100\\% = \\mathbf{25.45\\%}$$
- **Rute 2:**
  $$\\% \\text{AE}_{\\text{Rute 2}} = \\frac{M_r(\\ce{C2H4O})}{\\sum M_r(\\text{Reaktan})} \\times 100\\% = \\frac{44.05}{44.05} \\times 100\\% = \\mathbf{100.00\\%}$$

---

> [!NOTE]
> ### ⚖️ Kesimpulan Evaluator Juri (Insight OSN)
> Rute 2 memiliki $\\% \\text{AE} = 100\\%$, membuktikan bahwa **seluruh atom pereaksi terinkorporasi utuh** ke molekul produk tanpa ada satu pun atom yang terbuang menjadi limbah. Sebaliknya pada Rute 1, hampir $75\\%$ massa reaktan berakhir sebagai limbah sampingan garam kalsium klorida ($\\ce{CaCl2}$) dan air. Rute 2 juga memenuhi Prinsip 3 &amp; 12 dengan meniadakan gas klorin ($\\ce{Cl2}$) yang sangat korosif dan mematikan.`,
        keyFormulas: [
          { name: 'Rumus Persentase Ekonomi Atom', formula: '\\% \\text{AE} = \\frac{M_r(\\text{Produk Target})}{\\sum M_r(\\text{Reaktan})} \\times 100\\%' },
        ],
      },
      {
        tag: 'soal-keselamatan-tumpahan-asam',
        tags: ['soal-keselamatan-lab', 'pertolongan-pertama-lab', 'simbol-bahaya-ghs', 'always-add-acid'],
        title: 'Contoh Soal 3: Penanganan Darurat Tumpahan Asam Sulfat Pekat & Stoikiometri Netralisasi NaHCO₃',
        summary: 'Protokol tanggap darurat tumpahan asam pekat korosif, alasan pelarangan NaOH pekat dari termodinamika kalor netralisasi, serta perhitungan massa serbuk soda kue penetral.',
        content: `### 📋 Data Eksperimen Diketahui:
Sebuah botol asam sulfat pekat tersenggol di laboratorium kimia dan menumpahkan $25.0\\text{ mL}$ larutan asam sulfat $98.0\\%\\text{ (b/b)}$ ke meja praktikum.  
*(Data fisik: kerapatan $\\rho = 1.84\\text{ g/mL}$, massa molar $\\ce{H2SO4} = 98.08\\text{ g/mol}$, massa molar $\\ce{NaHCO3} = 84.01\\text{ g/mol}$)*.

---

### 🎯 Pertanyaan Analitis & Rencana Strategi:
1. Jelaskan urutan respon darurat pertama (*initial emergency response*) sebelum mendekati meja!
2. Mengapa petugas lab **dilarang keras** menetralkan tumpahan asam sulfat pekat menggunakan larutan/pelet $\\ce{NaOH}$ pekat?
3. Tuliskan persamaan reaksi netralisasi menggunakan serbuk natrium bikarbonat ($\\ce{NaHCO3}$)!
4. Hitung massa minimal serbuk $\\ce{NaHCO3}$ padat (dalam gram) yang harus ditaburkan hingga seluruh asam ternetralkan!

---

### ⚡ Eksekusi Langkah demi Langkah:

#### 1. Prosedur Tanggap Darurat Awal:
1. **Evakuasi & Peringatan:** Berteriak memberitahu seluruh praktikan dan guru pembina untuk menjauh radius minimal 3 meter.
2. **Ventilasi Maksimal:** Buka semua jendela dan nyalakan *exhaust fan* lemari asam untuk menghalau uap asam pekat yang merusak jaringan paru-paru.
3. **Penggunaan APD Lengkap:** Petugas penanganan wajib mengenakan sarung tangan nitril tebal tahan kimia, kacamata *goggles*, dan masker respirator uap asam sebelum mendekat.

#### 2. Mengapa Dilarang Menggunakan $\\ce{NaOH}$ Pekat?
- **Bahaya Termodinamika:** Reaksi antara asam kuat pekat dan basa kuat pekat bersifat **sangat eksotermik dahsyat**:
  $$\\ce{H+(aq) + OH-(aq) -> H2O(l)} \\quad \\Delta H^\\circ = -57.3\\text{ kJ/mol}$$
  Kalor yang dilepaskan dalam sekejap akan menaikkan suhu campuran melampaui $100^\\circ\\text{C}$, memicu **letupan semburan asam-basa mendidih (*boiling caustic eruption*)** yang memercik ke wajah petugas!
- **Keunggulan $\\ce{NaHCO3}$:** Reaksi dengan soda kue melepaskan gas $\\ce{CO2}$. Pembentukan buih menyerap sebagian kalor reaksi, dan buih gelembung berfungsi sebagai **indikator visual alami**: selama buih masih muncul, meja masih bersifat asam; saat buih berhenti total, asam telah ternetralkan sempurna!

#### 3. Persamaan Reaksi Netralisasi Setara:
$$\\ce{H2SO4(aq) + 2 NaHCO3(s) -> Na2SO4(aq) + 2 CO2(g)^ + 2 H2O(l)}$$

#### 4. Perhitungan Stoikiometri Massa Penetral:
1. **Massa Total Larutan Tumpahan:**
   $$m_{\\text{larutan}} = \\rho \\times V = 1.84\\text{ g/mL} \\times 25.0\\text{ mL} = 46.0\\text{ gram}$$
2. **Massa Murni $\\ce{H2SO4}$:**
   $$m_{\\ce{H2SO4}} = 98.0\\% \\times 46.0\\text{ g} = 0.980 \\times 46.0 = 45.08\\text{ gram}$$
3. **Jumlah Mol Murni $\\ce{H2SO4}$:**
   $$n_{\\ce{H2SO4}} = \\frac{m}{M_r} = \\frac{45.08\\text{ g}}{98.08\\text{ g/mol}} = 0.4596\\text{ mol}$$
4. **Jumlah Mol $\\ce{NaHCO3}$ yang Diperlukan:**
   Berdasarkan koefisien reaksi, rasio mol $\\ce{H2SO4} : \\ce{NaHCO3} = 1 : 2$:
   $$n_{\\ce{NaHCO3}} = 2 \\times 0.4596\\text{ mol} = 0.9192\\text{ mol}$$
5. **Massa $\\ce{NaHCO3}$ Padat yang Wajib Ditaburkan:**
   $$m_{\\ce{NaHCO3}} = n \\times M_r = 0.9192\\text{ mol} \\times 84.01\\text{ g/mol} = \\mathbf{77.22\\text{ gram}}$$

---

> [!NOTE]
> ### ⚖️ Kesimpulan Evaluator Juri (Insight OSN)
> Diperlukan minimal **$77.22\\text{ gram}$ serbuk $\\ce{NaHCO3}$ murni** (dalam praktiknya ditaburkan sekitar $85 - 90\\text{ gram}$ berlebih). Pastikan penaburan dilakukan melingkari tumpahan dari sisi luar ke arah dalam (*containment perimeter*), bukan langsung menumpuk di pusat agar cairan asam tidak meluber ke lantai.`,
        keyFormulas: [
          { name: 'Massa dari Kerapatan', formula: 'm = \\rho \\times V' },
          { name: 'Hubungan Mol Stoikiometri', formula: 'n = \\frac{m}{M_r}' },
          { name: 'Rasio Koefisien Netralisasi', formula: '\\frac{n_{\\ce{NaHCO3}}}{n_{\\ce{H2SO4}}} = \\frac{2}{1}' },
        ],
      },
      {
        tag: 'soal-pengukuran-dan-angka-penting',
        tags: ['soal-pengukuran-angka-penting', 'angka-penting-pengukuran', 'pembacaan-meniskus', 'bankers-rounding'],
        title: 'Contoh Soal 4: Pengukuran Densitas Etanol, Pembacaan Buret & Propagasi Angka Penting',
        summary: 'Penerapan aturan angka penting pada penimbangan massa dan pembacaan buret, kalkulasi densitas analitik, serta evaluasi galat relatif terhadap literatur.',
        content: `### 📋 Data Eksperimen Diketahui:
Dalam penentuan massa jenis cairan organik tak dikenal, siswa mencatat data instrumen:
- Massa botol timbang kosong bertutup: $28.450\\text{ g}$
- Massa botol timbang + cairan organik: $45.175\\text{ g}$
- Skala awal buret sebelum cairan dialirkan: $2.10\\text{ mL}$
- Skala akhir buret setelah cairan dialirkan: $23.35\\text{ mL}$
- Nilai literatur massa jenis etanol murni: $\\rho_{\\text{lit}} = 0.789\\text{ g/mL}$

---

### 🎯 Pertanyaan Analitis & Rencana Strategi:
1. Hitung massa bersih cairan organik dengan kaidah angka penting yang sah!
2. Hitung volume cairan yang dialirkan dari buret dengan kaidah angka penting yang sah!
3. Tentukan kerapatan massa cairan ($\\rho$) dalam satuan $\\text{g/mL}$ dengan jumlah angka penting yang tepat!
4. Hitung persentase galat relatif percobaan siswa terhadap nilai literatur!

---

### ⚡ Eksekusi Langkah demi Langkah:

#### 1. Perhitungan Massa Bersih Cairan:
$$m_{\\text{cairan}} = 45.175\\text{ g} - 28.450\\text{ g} = \\mathbf{16.725\\text{ gram}}$$
*Evaluasi Angka Penting:* Kedua data penimbangan memiliki 3 digit desimal di belakang koma. Sesuai kaidah pengurangan, hasilnya wajib mempertahankan 3 digit desimal, menghasilkan **$16.725\\text{ g}$ (memiliki 5 AP)**.

#### 2. Perhitungan Volume Cairan dari Buret:
$$V_{\\text{cairan}} = 23.35\\text{ mL} - 2.10\\text{ mL} = \\mathbf{21.25\\text{ mL}}$$
*Evaluasi Angka Penting:* Kedua skala buret memiliki 2 digit desimal di belakang koma. Hasil pengurangan wajib mempertahankan 2 digit desimal, menghasilkan **$21.25\\text{ mL}$ (memiliki 4 AP)**.

#### 3. Penentuan Massa Jenis Cairan ($\\rho$):
$$\\rho = \\frac{m_{\\text{cairan}}}{V_{\\text{cairan}}} = \\frac{16.725\\text{ g (5 AP)}}{21.25\\text{ mL (4 AP)}} = 0.7870588\\dots\\text{ g/mL}$$
*Evaluasi Angka Penting:* Sesuai aturan pembagian, hasil akhir dibatasi oleh faktor dengan jumlah angka penting paling sedikit:
- Pembilang: $16.725\\text{ g}$ (5 AP)
- Penyebut: $21.25\\text{ mL}$ (4 AP)  
Hasil akhir dibulatkan menjadi **4 Angka Penting**:
$$\\rho = \\mathbf{0.7871\\text{ g/mL}}$$

#### 4. Perhitungan Persentase Galat Relatif:
$$\\begin{aligned}
\\% \\text{Galat Relatif} &= \\left| \\frac{\\rho_{\\text{eksperimen}} - \\rho_{\\text{literatur}}}{\\rho_{\\text{literatur}}} \\right| \\times 100\\% \\
&= \\left| \\frac{0.7871 - 0.789}{0.789} \\right| \\times 100\\% \\
&= \\left| \\frac{-0.0019}{0.789} \\right| \\times 100\\% \\
&= 0.002408 \\times 100\\% = \\mathbf{0.24\\%}
\\end{aligned}$$

---

> [!NOTE]
> ### ⚖️ Kesimpulan Evaluator Juri (Insight OSN)
> Persentase galat relatif sebesar **$0.24\\%$** ($< 1\\%$) mengindikasikan tingkat akurasi eksperimen yang istimewa. Nilai eksperimen $0.7871\\text{ g/mL}$ sangat dekat dengan $0.789\\text{ g/mL}$, membuktikan secara konklusif bahwa cairan organik tersebut adalah etanol murni berderajat analitik (*analytical grade*).`,
        keyFormulas: [
          { name: 'Formula Massa Jenis', formula: '\\rho = \\frac{m}{V}' },
          { name: 'Formula Persen Galat Relatif', formula: '\\% \\text{Galat} = \\left| \\frac{\\text{Hasil Percobaan} - \\text{Nilai Literatur}}{\\text{Nilai Literatur}} \\right| \\times 100\\%' },
        ],
      },
    ],
  },

{
  id: 102,
  topic_number: 2,
  grade: 'Kelas 10',
  semester: 1,
  curriculumPhase: 'Fase E',
  relatedOsnTopicId: 1,
  title: 'Struktur Atom Dasar & Sistem Periodik Unsur',
  slug: 'struktur-atom-dasar-sistem-periodik',
  category: 'Struktur Atom & Periodisitas',
  level: 'SMA',
  readTimeMinutes: 38,
  summary: 'Panduan pedagogis komprehensif arsitektur atom dan periodisitas kimia: evolusi model atom dari bola pejal hingga mekanika gelombang Schrödinger; spektrometri massa dan rata-rata tertimbang kelimpahan isotop; analogi intuitif Apartemen Hotel Elektron untuk empat bilangan kuantum (n, l, ml, ms); tiga kaidah kuantum pengisian elektron (Aufbau, Hund, Pauli) serta anomali kestabilan orbital d setengah penuh/penuh (Cr & Cu); aturan emas pelepasan elektron 4s pada kation transisi; arsitektur tabel periodik modern Moseley blok s/p/d/f; serta dekonstruksi tren keperiodikan (jari-jari atom/ion, energi ionisasi dan anomalinya, afinitas elektron, keelektronegatifan) melalui teori Tarik Tambang Muatan Inti Efektif (Zeff).',
  allTags: [
    'perkembangan-model-atom',
    'model-dalton-thomson-rutherford',
    'model-bohr-spektrum-emisi',
    'mekanika-gelombang-schrodinger',
    'dualisme-de-broglie-heisenberg',
    'partikel-subatom-proton-elektron-neutron',
    'notasi-nuklida-atom-dan-ion',
    'isotop-isobar-isoton-isoelektron',
    'kelimpahan-isotop-dan-ar',
    'spektrometri-massa',
    'empat-bilangan-kuantum',
    'geometri-orbital-spdf',
    'apartemen-hotel-elektron',
    'konfigurasi-elektron-aufbau',
    'kaidah-hund-larangan-pauli',
    'anomali-kestabilan-subkulit-d',
    'konfigurasi-kation-dan-anion',
    'pelepasan-elektron-4s-transisi',
    'paramagnetik-dan-diamagnetik',
    'momen-magnetik-spin-only',
    'sejarah-tabel-periodik',
    'tabel-periodik-modern-moseley',
    'penentuan-golongan-dan-periode',
    'blok-s-p-d-f',
    'muatan-inti-efektif-zeff',
    'efek-perisai-elektron',
    'tren-jari-jari-atom-dan-ion',
    'deret-isoelektronik',
    'energi-ionisasi-pertama-dan-anomali',
    'anomali-energi-ionisasi-be-b-n-o',
    'energi-ionisasi-bertingkat',
    'afinitas-elektron-dan-anomali',
    'anomali-afinitas-elektron-f-cl',
    'keelektronegatifan-skala-pauling',
    'soal-kelimpahan-isotop-ar',
    'soal-konfigurasi-elektron-anomali',
    'soal-bilangan-kuantum-dan-spu',
    'soal-energi-ionisasi-bertingkat',
  ],
  prerequisites: [
    {
      tag: 'evolusi-model-atom',
      tags: [
        'perkembangan-model-atom',
        'model-dalton-thomson-rutherford',
        'model-bohr-spektrum-emisi',
        'mekanika-gelombang-schrodinger',
        'dualisme-de-broglie-heisenberg',
      ],
      title: 'Prasyarat 1: Evolusi Teori Model Atom dari Bola Pejal hingga Mekanika Kuantum Modern',
      summary: 'Penelusuran historis dan saintifik pemodelan struktur atom: eksperimen tabung sinar katoda Thomson, hamburan partikel alfa Rutherford, kuantisasi orbit Bohr, hingga mekanika gelombang Schrödinger.',
      content: `### 🔍 Misteri Kotak Hitam Partikel Subatom (Mental Model)

Bayangkan sebuah kotak hitam tertutup rapat yang tidak boleh dibuka. Bagaimana cara Anda mengetahui apa yang ada di dalamnya? Anda mungkin akan mengguncangnya, melemparkan kelereng ke arahnya, atau mengukur medan listrik yang keluar dari kotak tersebut. 

Begitulah cara fisikawan dan kimiawan membongkar arsitektur atom selama lebih dari satu abad. Dari sebongkah bola pejal tak kasatmata hingga awan probabilitas matematika yang anggun, pemahaman kita tentang atom berevolusi melalui lompatan eksperimental yang revolusioner:

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 170" width="100%" height="auto" class="max-w-[760px] my-6 select-none font-sans">
  <defs>
    <marker id="atomArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#0284c7"/>
    </marker>
    <filter id="atomShadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="2" flood-color="#0f172a" flood-opacity="0.08"/>
    </filter>
  </defs>

  <!-- 1. Dalton -->
  <g transform="translate(10, 15)">
    <rect width="130" height="140" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#atomShadow)"/>
    <circle cx="65" cy="40" r="16" fill="#475569"/>
    <text x="65" y="76" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f172a">1. Dalton (1803)</text>
    <text x="65" y="92" text-anchor="middle" font-size="8.5" font-weight="600" fill="#0284c7">Bola Pejal Masif</text>
    <text x="65" y="106" text-anchor="middle" font-size="7.5" fill="#64748b">Partikel tak terbagi &amp;</text>
    <text x="65" y="118" text-anchor="middle" font-size="7.5" fill="#64748b">identik tiap unsur</text>
    <text x="65" y="130" text-anchor="middle" font-size="7" font-weight="600" fill="#ef4444">Kelemahan: Ada subatom</text>
  </g>
  <line x1="140" y1="85" x2="155" y2="85" stroke="#0284c7" stroke-width="2" marker-end="url(#atomArrow)"/>

  <!-- 2. Thomson -->
  <g transform="translate(160, 15)">
    <rect width="130" height="140" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#atomShadow)"/>
    <circle cx="65" cy="40" r="16" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
    <circle cx="58" cy="35" r="2.5" fill="#2563eb"/>
    <circle cx="72" cy="36" r="2.5" fill="#2563eb"/>
    <circle cx="64" cy="46" r="2.5" fill="#2563eb"/>
    <text x="65" y="76" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f172a">2. Thomson (1897)</text>
    <text x="65" y="92" text-anchor="middle" font-size="8.5" font-weight="600" fill="#0284c7">Roti Kismis</text>
    <text x="65" y="106" text-anchor="middle" font-size="7.5" fill="#64748b">Bola muatan positif +</text>
    <text x="65" y="118" text-anchor="middle" font-size="7.5" fill="#64748b">elektron tersebar merata</text>
    <text x="65" y="130" text-anchor="middle" font-size="7" font-weight="600" fill="#ef4444">Kelemahan: Tak ada inti</text>
  </g>
  <line x1="290" y1="85" x2="305" y2="85" stroke="#0284c7" stroke-width="2" marker-end="url(#atomArrow)"/>

  <!-- 3. Rutherford -->
  <g transform="translate(310, 15)">
    <rect width="130" height="140" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#atomShadow)"/>
    <circle cx="65" cy="40" r="4.5" fill="#dc2626"/>
    <ellipse cx="65" cy="40" rx="18" ry="7" fill="none" stroke="#94a3b8" stroke-width="1" transform="rotate(-25 65 40)"/>
    <circle cx="79" cy="33" r="2" fill="#2563eb"/>
    <text x="65" y="76" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f172a">3. Rutherford (1911)</text>
    <text x="65" y="92" text-anchor="middle" font-size="8.5" font-weight="600" fill="#0284c7">Inti Atom &amp; Hampa</text>
    <text x="65" y="106" text-anchor="middle" font-size="7.5" fill="#64748b">Inti positif terpusat &amp;</text>
    <text x="65" y="118" text-anchor="middle" font-size="7.5" fill="#64748b">elektron di ruang hampa</text>
    <text x="65" y="130" text-anchor="middle" font-size="7" font-weight="600" fill="#ef4444">Kelemahan: Teori Maxwell</text>
  </g>
  <line x1="440" y1="85" x2="455" y2="85" stroke="#0284c7" stroke-width="2" marker-end="url(#atomArrow)"/>

  <!-- 4. Bohr -->
  <g transform="translate(460, 15)">
    <rect width="130" height="140" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#atomShadow)"/>
    <circle cx="65" cy="40" r="4" fill="#dc2626"/>
    <circle cx="65" cy="40" r="10" fill="none" stroke="#0284c7" stroke-width="1" stroke-dasharray="2,2"/>
    <circle cx="65" cy="40" r="18" fill="none" stroke="#0284c7" stroke-width="1"/>
    <circle cx="83" cy="40" r="2" fill="#2563eb"/>
    <text x="65" y="76" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f172a">4. Bohr (1913)</text>
    <text x="65" y="92" text-anchor="middle" font-size="8.5" font-weight="600" fill="#0284c7">Orbit Kuantum</text>
    <text x="65" y="106" text-anchor="middle" font-size="7.5" fill="#64748b">Lintasan stasioner &amp;</text>
    <text x="65" y="118" text-anchor="middle" font-size="7.5" fill="#64748b">transisi foton \\Delta E</text>
    <text x="65" y="130" text-anchor="middle" font-size="7" font-weight="600" fill="#ef4444">Kelemahan: Hanya 1 elektron</text>
  </g>
  <line x1="590" y1="85" x2="605" y2="85" stroke="#0284c7" stroke-width="2" marker-end="url(#atomArrow)"/>

  <!-- 5. Kuantum / Schrödinger -->
  <g transform="translate(610, 15)">
    <rect width="140" height="140" rx="10" fill="#f0f9ff" stroke="#7dd3fc" stroke-width="2" filter="url(#atomShadow)"/>
    <circle cx="70" cy="40" r="18" fill="#38bdf8" opacity="0.25"/>
    <circle cx="70" cy="40" r="11" fill="#0284c7" opacity="0.45"/>
    <circle cx="70" cy="40" r="5" fill="#0369a1"/>
    <text x="70" y="76" text-anchor="middle" font-size="10.5" font-weight="800" fill="#0369a1">5. Modern (1926)</text>
    <text x="70" y="92" text-anchor="middle" font-size="8.5" font-weight="700" fill="#0284c7">Mekanika Gelombang</text>
    <text x="70" y="106" text-anchor="middle" font-size="7.5" fill="#0369a1">Orbital: awan peluang</text>
    <text x="70" y="118" text-anchor="middle" font-size="7.5" fill="#0369a1">statistik |\\psi|^2</text>
    <text x="70" y="130" text-anchor="middle" font-size="7" font-weight="700" fill="#16a34a">Solusi eksak modern</text>
  </g>
</svg>

---

### 1. Komparasi Karakteristik, Eksperimen & Limitasi Model Atom

| Model Atom | Tokoh & Tahun | Eksperimen Kunci | Postulat Pokok Arsitektur | Keterbatasan Fatal |
| :--- | :--- | :--- | :--- | :--- |
| **Bola Pejal** | John Dalton (1803) | Hukum Kekekalan Massa & Perbandingan Tetap | Atom adalah partikel terkecil materi yang pejal, masif, tak terbagi, dan identik untuk unsur sejenis. | Gagal menjelaskan sifat listrik materi dan adanya partikel subatomik (proton, elektron, neutron). |
| **Roti Kismis** | J.J. Thomson (1897) | Tabung Sinar Katoda (*Cathode Ray Tube*) | Elektron bermuatan negatif tersebar merata di dalam bola homogen bermuatan positif (menyerupai kismis pada roti). | Tidak dapat menjelaskan adanya konsentrasi massa dan muatan pada bagian pusat atom. |
| **Nuklir Hampa** | Ernest Rutherford (1911) | Hamburan Sinar Alfa ($\\alpha$) pada Lempeng Tipis Emas | Seluruh muatan positif dan hampir seluruh massa terkonsentrasi pada **inti atom** yang sangat kecil; elektron mengitari inti di ruang hampa luas. | Bertentangan dengan elektrodinamika klasik Maxwell: elektron yang berputar dipercepat harusnya memancarkan energi dan jatuh spiral ke inti. |
| **Orbit Stasioner** | Niels Bohr (1913) | Spektrum Garis Emisi Gas Hidrogen ($\\ce{H2}$) | Elektron mengorbit pada lintasan stasioner melingkar diskret tertentu dengan momentum sudut terkuantisasi: $L = n \\frac{h}{2\\pi}$. Perpindahan elektron memancarkan/menyerap foton: $\\Delta E = h\\nu$. | Hanya berlaku presisi untuk **spesi berelektron tunggal** ($\\ce{H, He+, Li^2+}$); gagal menjelaskan efek Zeeman (medan magnet) dan efek Stark. |
| **Awan Peluang** | Schrödinger & Heisenberg (1926) | Efek Difraksi Elektron & Prinsip Ketidakpastian | Elektron bersifat gelombang-partikel (*de Broglie*). Posisi eksak elektron tidak dapat ditentukan serentak dengan momentumnya. Elektron berada dalam **orbital**: ruang 3D dengan kebolehjadian statistik menemukan elektron terbesar ($|\\psi|^2$). | Membutuhkan formalisme matematika komputasi kalkulus diferensial yang sangat kompleks untuk sistem berelektron banyak. |

---

### 2. Spektrum Emisi Kuantum & Transisi Energi Foton Bohr

Ketika atom hidrogen dieksitasi oleh loncatan listrik tegangan tinggi, elektron menyerap energi dan melompat dari tingkat dasar (*ground state*) ke tingkat tereksitasi (*excited state*). Saat kembali ke tingkat lebih rendah, elektron memancarkan foton cahaya dengan panjang gelombang spesifik yang dirumuskan oleh persamaan **Rydberg-Bohr**:

$$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right) \\quad \\text{dengan } R_H = 1.09737 \\times 10^7\\text{ m}^{-1} \\text{ dan } n_2 > n_1$$

Energi foton yang dipancarkan berkaitan langsung dengan frekuensi ($\\nu$) dan panjang gelombang ($\\lambda$):

$$\\Delta E = |E_{n_2} - E_{n_1}| = h \\nu = \\frac{h c}{\\lambda}$$

> [!NOTE]
> ### 💡 Deret Spektrum Hidrogen yang Sering Muncul di OSN
> - **Deret Lyman ($n_1 = 1$):** Transisi dari $n_2 \\ge 2 \\rightarrow 1$, berada pada spektrum **Ultraviolet (UV)** (energi tertinggi).
> - **Deret Balmer ($n_1 = 2$):** Transisi dari $n_2 \\ge 3 \\rightarrow 2$, berada pada spektrum **Cahaya Tampak (Visible)** (warna merah s.d. ungu yang teramati mata).
> - **Deret Paschen ($n_1 = 3$), Brackett ($n_1 = 4$), Pfund ($n_1 = 5$):** Berada pada wilayah **Inframerah (IR)**.

---

> [!TIP]
> ### 🧭 Prinsip Ketidakpastian Heisenberg
> Dalam mekanika kuantum, lintasan elektron berbentuk orbit melingkar yang pasti ala tata surya Bohr digantikan oleh konsep orbital. Werner Heisenberg membuktikan bahwa:
> $$\\Delta x \\cdot \\Delta p \\ge \\frac{h}{4\\pi}$$
> Makin akurat kita mengetahui posisi elektron ($\\Delta x \\to 0$), makin kabur momentumnya ($\\Delta p \\to \\infty$). Oleh karena itu, kita hanya berbicara mengenai awan kerapatan kebolehjadian statistik menemukan elektron ($|\\psi|^2$).`,
      keyFormulas: [
        { name: 'Persamaan Rydberg untuk Spektrum Emisi', formula: '\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)' },
        { name: 'Energi Foton Planck-Einstein', formula: '\\Delta E = h \\nu = \\frac{h c}{\\lambda}' },
        { name: 'Prinsip Ketidakpastian Heisenberg', formula: '\\Delta x \\cdot \\Delta p \\ge \\frac{h}{4\\pi}' },
      ],
    },

    {
      tag: 'partikel-subatom-dan-kelimpahan',
      tags: [
        'partikel-subatom-proton-elektron-neutron',
        'notasi-nuklida-atom-dan-ion',
        'isotop-isobar-isoton-isoelektron',
        'kelimpahan-isotop-dan-ar',
        'spektrometri-massa',
      ],
      title: 'Prasyarat 2: Partikel Dasar Subatomik, Notasi Nuklida & Penentuan Massa Atom Relatif (Ar)',
      summary: 'Studi komparatif partikel penyusun atom (p, n, e), pemahaman notasi nuklida atom dan ion, klasifikasi kuartet hubungan nuklida, serta metode spektrometri massa untuk perhitungan massa atom relatif.',
      content: `### 🏷️ KTP Partikel Subatomik (Mental Model)

Sebagaimana setiap warga negara memiliki Kartu Tanda Penduduk dengan nomor identitas unik, setiap atom di alam semesta memiliki "identitas nuklir" yang tertulis dalam format notasi nuklida standar:

$$\\ce{^{A}_{Z}X^{q}}$$

1. **Nomor Atom ($Z$):** Menunjukkan jumlah **proton** di dalam inti atom. Nilai $Z$ adalah nomor registrasi unik yang menentukan nama unsur (misal semua atom dengan $Z = 6$ mutlak beridentitas Karbon). Pada atom netral:
   $$\\text{Jumlah Proton} = \\text{Jumlah Elektron} = Z$$
2. **Nomor Massa ($A$):** Menunjukkan jumlah total partikel nukleon (nukleus) di dalam inti:
   $$A = \\text{Jumlah Proton} + \\text{Jumlah Neutron}$$
   $$\\text{Jumlah Neutron} = A - Z$$
3. **Muatan Listrik ($q$):**
   - Atom netral: $q = 0$
   - Kation ($q = +n$): Terjadi akibat **pelepasan elektron** $\\rightarrow$ $\\text{Jumlah Elektron} = Z - n$
   - Anion ($q = -m$): Terjadi akibat **penangkapan elektron** $\\rightarrow$ $\\text{Jumlah Elektron} = Z + m$

---

### 1. Karakteristik Tiga Partikel Dasar Subatomik

| Partikel | Penemu & Tahun | Muatan Nyata (Coulomb) | Muatan Relatif | Massa Riil (kg) | Massa Riil (sma) | Lokasi dalam Atom |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Proton ($p$)** | Eugen Goldstein (1886) | $+1.602 \\times 10^{-19}\\text{ C}$ | $+1$ | $1.6726 \\times 10^{-27}$ | $1.0073\\text{ sma}$ | Inti atom (nukleus) |
| **Neutron ($n$)** | James Chadwick (1932) | $0\\text{ C}$ (Netral) | $0$ | $1.6749 \\times 10^{-27}$ | $1.0087\\text{ sma}$ | Inti atom (nukleus) |
| **Elektron ($e^-$)** | J.J. Thomson (1897) | $-1.602 \\times 10^{-19}\\text{ C}$ | $-1$ | $9.1094 \\times 10^{-31}$ | $0.00055\\text{ sma}$ | Orbital kulit luar inti |

> [!NOTE]
> ### 💡 Massa Inti vs Awan Elektron
> Massa proton dan neutron hampir 1.836 kali lebih masif daripada massa elektron. Oleh karena itu, secara praktis **$99.95\\%$ massa atom terkonsentrasi mutlak di dalam inti**, sedangkan volume spasial atom hampir seluruhnya didominasi oleh ruang kosong lintasan elektron!

---

### 2. Kuartet Hubungan Kekerabatan Antar-Nuklida

Dalam soal-soal kompetisi OSN, sering diuji kemampuan mengenali hubungan kekerabatan antar-spesi:

| Istilah | Huruf Pengingat | Definisi Baku | Contoh Konkret Pasangan |
| :--- | :--- | :--- | :--- |
| **Isotop** | **p** = Proton sama | Unsur sama ($Z$ sama), jumlah neutron beda ($A$ beda). | $\\ce{^{12}_6C}$ ($6p, 6n$) dan $\\ce{^{14}_6C}$ ($6p, 8n$) |
| **Isobar** | **a** = Angka massa sama | Unsur berbeda ($Z$ beda), nomor massa $A$ persis sama. | $\\ce{^{14}_6C}$ ($A=14$) dan $\\ce{^{14}_7N}$ ($A=14$) |
| **Isoton** | **n** = Neutron sama | Unsur beda ($Z$ beda), jumlah neutron ($A-Z$) persis sama. | $\\ce{^{31}_{15}P}$ ($16n$) dan $\\ce{^{32}_{16}S}$ ($16n$) |
| **Isoelektronik** | **e** = Elektron sama | Spesi atom atau ion berbeda dengan jumlah total elektron identik. | $\\ce{N^3-}, \\ce{O^2-}, \\ce{F-}, \\ce{Ne}, \\ce{Na+}, \\ce{Mg^2+}$ (Semua memiliki $10e^-$) |

---

### 3. Spektrometri Massa & Kalkulasi Massa Atom Relatif ($A_r$)

Sebagian besar unsur di bumi hadir sebagai campuran beberapa isotop stabil alami. Spektrometer massa (*mass spectrometer*) memisahkan ion-ion isotop berdasarkan rasio massa-terhadap-muatan ($m/z$) dan mendeteksi intensitas relatifnya.

Massa atom relatif ($A_r$) standar pada Tabel Periodik bukanlah massa dari satu atom tunggal, melainkan **rata-rata tertimbang (*weighted average*)** dari seluruh isotop stabilnya di alam:

$$A_r(X) = \\sum_{i=1}^{k} \\left( \\frac{\\%\\text{Kelimpahan}_i}{100} \\times m_i \\right) = \\frac{(\\%_1 \\times m_1) + (\\%_2 \\times m_2) + \\dots + (\\%_k \\times m_k)}{100}$$

> [!TIP]
> ### 💡 Analogi Timbangan Belanja Buah
> Jika Anda membeli jeruk dengan $75\\%$ jeruk besar (bobot $100\\text{ g}$) dan $25\\%$ jeruk kecil (bobot $80\\text{ g}$), maka rata-rata bobot sebuah jeruk adalah:
> $$\\bar{m} = (0.75 \\times 100) + (0.25 \\times 80) = 75 + 20 = 95\\text{ g}$$
> Begitulah persisnya cara para kimiawan menentukan bahwa $A_r$ Klorin adalah $35.45\\text{ sma}$ (dari campuran alami $75.77\\% \\ce{^{35}Cl}$ dan $24.23\\% \\ce{^{37}Cl}$).`,
      keyFormulas: [
        { name: 'Kuantitas Neutron dalam Inti', formula: 'N = A - Z' },
        { name: 'Jumlah Elektron Spesi Bermuatan', formula: 'e^- = Z - q' },
        { name: 'Massa Atom Relatif Rata-rata Tertimbang', formula: 'A_r(X) = \\sum_{i=1}^n \\left( f_i \\times m_i \\right) = \\frac{\\sum (\\%_i \\times m_i)}{100}' },
      ],
    },
  ],

  core_concepts: [
    {
      tag: 'bilangan-kuantum-dan-orbital',
      tags: [
        'empat-bilangan-kuantum',
        'geometri-orbital-spdf',
        'apartemen-hotel-elektron',
      ],
      title: 'Konsep Inti 1: Empat Bilangan Kuantum & Karakteristik Geometri Spasial Orbital (s, p, d, f)',
      summary: 'Kajian arsitektur orbital melalui analogi intuitif Apartemen Hotel Elektron: bilangan kuantum utama (n), azimut (l), magnetik (ml), dan spin (ms) sebagai koordinat alamat spasial kebolehjadian elektron.',
      content: `### 🏨 Alamat Lengkap Apartemen Hotel Elektron (Mental Model)

Bagaimana cara kurir paket menemukan Anda di hotel mewah bertingkat? Kurir memerlukan 4 informasi spesifik:
1. **Nomor Lantai** tempat kamar Anda berada.
2. **Tipe Kamar** (Standard, Presidential, Deluxe, Family).
3. **Nomor Ranjang/Arah Pintu** di dalam kamar tersebut.
4. **Posisi Tidur Anda** di ranjang (kepala menghadap utara atau selatan).

Dalam mekanika kuantum, setiap elektron di dalam atom memiliki alamat unik berupa **Empat Bilangan Kuantum**:

| Bilangan Kuantum | Simbol | Analogi Hotel | Nilai yang Diizinkan Secara Fisika | Makna Fisis pada Atom |
| :--- | :---: | :--- | :--- | :--- |
| **Utama** (*Principal*) | $n$ | Nomor Lantai | $n = 1, 2, 3, 4, 5, \\dots$ (Bilangan bulat positif) | Menentukan **tingkat energi utama** (kulit atom: K, L, M, N...) dan jarak rata-rata elektron dari inti atom. |
| **Azimut / Orbital** (*Angular Momentum*) | $l$ | Tipe Kamar | $l = 0, 1, 2, \\dots, (n-1)$ | Menentukan **bentuk geometri spasial orbital** (subkulit): $l=0 (s)$, $l=1 (p)$, $l=2 (d)$, $l=3 (f)$. |
| **Magnetik** (*Magnetic*) | $m_l$ | Nomor Ranjang / Orientasi Kamar | $m_l = -l, \\dots, 0, \\dots, +l$ (Ada $2l + 1$ nilai) | Menentukan **orientasi spasial 3D orbital** terhadap sumbu kartesius $(x, y, z)$. |
| **Spin** (*Spin Projection*) | $m_s$ | Posisi Kepala Tamu di Ranjang | $m_s = +\\frac{1}{2}$ ($\\uparrow$, searah jarum jam) atau $-\\frac{1}{2}$ ($\\downarrow$, berlawanan) | Menentukan arah **momentum sudut intrinsik rotasi spin** elektron terhadap porosnya. |

---

### 1. Karakteristik & Geometri Bentuk Orbital

1. **Orbital $s$ ($l = 0$):**
   - Nilai $m_l = 0$ (Hanya ada **1 orbital** per subkulit).
   - Bentuk: **Bola simetris (*spherical*)**. Peluang menemukan elektron sama ke segala arah tanpa orientasi sumbu tertentu.
   - Kapasitas: Maksimum menampung **2 elektron**.
2. **Orbital $p$ ($l = 1$):**
   - Nilai $m_l = -1, 0, +1$ (Ada **3 orbital**: $p_x, p_y, p_z$).
   - Bentuk: **Dua cuping balon terpilin (*dumbbell/bilobed*)** yang saling tegak lurus sepanjang sumbu $x, y, z$ dengan sebuah bidang simpul (*nodal plane*) di pusat inti bernilai nol peluang.
   - Kapasitas: Maksimum menampung $3 \\times 2 = \\mathbf{6\\text{ elektron}}$.
3. **Orbital $d$ ($l = 2$):**
   - Nilai $m_l = -2, -1, 0, +1, +2$ (Ada **5 orbital**: $d_{xy}, d_{yz}, d_{xz}, d_{x^2-y^2}, d_{z^2}$).
   - Bentuk: Semanggi empat daun (*cloverleaf*) untuk 4 orbital, dan sebuah dumbbell dengan cincin donat di pinggangnya untuk orbital $d_{z^2}$.
   - Kapasitas: Maksimum menampung $5 \\times 2 = \\mathbf{10\\text{ elektron}}$.
4. **Orbital $f$ ($l = 3$):**
   - Nilai $m_l = -3, -2, -1, 0, +1, +2, +3$ (Ada **7 orbital** spasial multikubus kompleks).
   - Kapasitas: Maksimum menampung $7 \\times 2 = \\mathbf{14\\text{ elektron}}$.

---

### 2. Algoritma 4 Langkah Menentukan Bilangan Kuantum Elektron Terakhir

Untuk menentukan kuartet bilangan kuantum $(n, l, m_l, m_s)$ dari notasi subkulit terakhir (misal $3p^4$):

1. **Langkah 1 (Nilai $n$):** Ambil angka koefisien di depan subkulit $\\rightarrow$ untuk $3p^4$, maka **$n = 3$**.
2. **Langkah 2 (Nilai $l$):** Konversi huruf subkulit:
   $$\\text{Huruf } s \\to l=0; \\quad p \\to l=1; \\quad d \\to l=2; \\quad f \\to l=3$$
   Untuk $3p^4$, subkulitnya $p$, sehingga **$l = 1$**.
3. **Langkah 3 (Nilai $m_l$):** Buat kotak orbital sebanyak $2l + 1$. Beri label dari $-l$ ke $+l$:
   $$\\text{Kotak: } [\\quad]_{-1} \\quad [\\quad]_{0} \\quad [\\quad]_{+1}$$
   Isi elektron satu per satu ke atas (Kaidah Hund):
   - Elektron 1 di kotak $-1$ ($\\uparrow$)
   - Elektron 2 di kotak $0$ ($\\uparrow$)
   - Elektron 3 di kotak $+1$ ($\\uparrow$)
   - Elektron 4 (elektron terakhir) berpasangan di kotak $-1$ ($\\downarrow$).
   Maka kotak terakhir yang ditempati adalah kotak $-1$, sehingga **$m_l = -1$**.
4. **Langkah 4 (Nilai $m_s$):** Perhatikan orientasi panah elektron terakhir:
   - Panah menghadap ke atas ($\\uparrow$): $m_s = +\\frac{1}{2}$
   - Panah menghadap ke bawah ($\\downarrow$): $m_s = -\\frac{1}{2}$
   Karena elektron ke-4 berpanah ke bawah, maka **$m_s = -\\frac{1}{2}$**.
   *Hasil Akhir:* Kuartet elektron terakhir $3p^4$ adalah **$(3, 1, -1, -\\frac{1}{2})$**.`,
      keyFormulas: [
        { name: 'Hubungan Bilangan Kuantum Azimut', formula: 'l \\in \\{0, 1, 2, \\dots, n-1\\}' },
        { name: 'Jumlah Orbital dalam Subkulit', formula: '\\text{Jumlah Orbital} = 2l + 1' },
        { name: 'Kapasitas Elektron Maksimum per Kulit', formula: '\\text{Maksimum } e^- = 2n^2' },
      ],
    },

    {
      tag: 'kaidah-kuantum-dan-konfigurasi',
      tags: [
        'konfigurasi-elektron-aufbau',
        'kaidah-hund-larangan-pauli',
        'anomali-kestabilan-subkulit-d',
        'pelepasan-elektron-4s-transisi',
        'paramagnetik-dan-diamagnetik',
      ],
      title: 'Konsep Inti 2: Tiga Kaidah Kuantum Pengisian Elektron, Notasi Gas Mulia & Anomali Subkulit d',
      summary: 'Kaidah fundamental penyusunan konfigurasi elektron: Asas Aufbau diagonal (n+l), Kaidah Hund ranjang terpisah, dan Larangan Pauli. Analisis anomali kestabilan d5/d10, aturan urutan pelepasan elektron ion transisi, serta kalkulasi momen magnetik spin.',
      content: `### 🛎️ Tiga Aturan Emas Pengisian Hotel Elektron (Mental Model)

Manajemen Hotel Elektron memberlakukan 3 aturan baku bagi seluruh tamu elektron yang mendaftar:

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 330" width="100%" height="auto" class="max-w-[760px] my-6 select-none font-sans">
  <defs>
    <filter id="hotelShadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f172a" flood-opacity="0.08"/>
    </filter>
  </defs>

  <!-- Title Banner -->
  <g transform="translate(15, 10)">
    <rect width="730" height="42" rx="8" fill="#1e293b" filter="url(#hotelShadow)"/>
    <text x="365" y="22" text-anchor="middle" font-size="12.5" font-weight="800" fill="#f8fafc">APARTEMEN HOTEL ELEKTRON &amp; TANGGA TINGKAT ENERGI AUFBAU</text>
    <text x="365" y="36" text-anchor="middle" font-size="9" font-weight="500" fill="#94a3b8">Lantai = Kulit (n) • Tipe Kamar = Subkulit (s, p, d, f) • Ranjang = Orbital (ml) • Tamu = Elektron Berpasangan Spin (+1/2, -1/2)</text>
  </g>

  <!-- Left: Building Floor Model -->
  <g transform="translate(15, 62)">
    <rect width="360" height="255" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>

    <!-- Floor 4 -->
    <rect x="15" y="15" width="330" height="48" rx="6" fill="#fef2f2" stroke="#fca5a5" stroke-width="1"/>
    <text x="25" y="32" font-size="10" font-weight="800" fill="#991b1b">LANTAI 4 (n=4):</text>
    <rect x="120" y="24" width="28" height="22" rx="3" fill="#ffffff" stroke="#dc2626" stroke-width="1"/>
    <text x="134" y="38" text-anchor="middle" font-size="8.5" font-weight="700" fill="#dc2626">4s²</text>
    <rect x="154" y="24" width="58" height="22" rx="3" fill="#ffffff" stroke="#dc2626" stroke-width="1"/>
    <text x="183" y="38" text-anchor="middle" font-size="8.5" font-weight="700" fill="#dc2626">4p⁶ (3k)</text>
    <rect x="218" y="24" width="62" height="22" rx="3" fill="#ffffff" stroke="#dc2626" stroke-width="1"/>
    <text x="249" y="38" text-anchor="middle" font-size="8.5" font-weight="700" fill="#dc2626">4d¹⁰ (5k)</text>
    <rect x="286" y="24" width="50" height="22" rx="3" fill="#ffffff" stroke="#dc2626" stroke-width="1"/>
    <text x="311" y="38" text-anchor="middle" font-size="8.5" font-weight="700" fill="#dc2626">4f¹⁴</text>

    <!-- Floor 3 -->
    <rect x="15" y="73" width="330" height="48" rx="6" fill="#fffbeb" stroke="#fcd34d" stroke-width="1"/>
    <text x="25" y="90" font-size="10" font-weight="800" fill="#92400e">LANTAI 3 (n=3):</text>
    <rect x="120" y="82" width="28" height="22" rx="3" fill="#ffffff" stroke="#d97706" stroke-width="1"/>
    <text x="134" y="96" text-anchor="middle" font-size="8.5" font-weight="700" fill="#d97706">3s²</text>
    <rect x="154" y="82" width="58" height="22" rx="3" fill="#ffffff" stroke="#d97706" stroke-width="1"/>
    <text x="183" y="96" text-anchor="middle" font-size="8.5" font-weight="700" fill="#d97706">3p⁶ (3k)</text>
    <rect x="218" y="82" width="62" height="22" rx="3" fill="#ffffff" stroke="#d97706" stroke-width="1"/>
    <text x="249" y="96" text-anchor="middle" font-size="8.5" font-weight="700" fill="#d97706">3d¹⁰ (5k)</text>

    <!-- Floor 2 -->
    <rect x="15" y="131" width="330" height="48" rx="6" fill="#eff6ff" stroke="#93c5fd" stroke-width="1"/>
    <text x="25" y="148" font-size="10" font-weight="800" fill="#1e40af">LANTAI 2 (n=2):</text>
    <rect x="120" y="140" width="28" height="22" rx="3" fill="#ffffff" stroke="#2563eb" stroke-width="1"/>
    <text x="134" y="154" text-anchor="middle" font-size="8.5" font-weight="700" fill="#2563eb">2s²</text>
    <rect x="154" y="140" width="58" height="22" rx="3" fill="#ffffff" stroke="#2563eb" stroke-width="1"/>
    <text x="183" y="154" text-anchor="middle" font-size="8.5" font-weight="700" fill="#2563eb">2p⁶ (3k)</text>

    <!-- Floor 1 -->
    <rect x="15" y="189" width="330" height="48" rx="6" fill="#f0fdf4" stroke="#86efac" stroke-width="1"/>
    <text x="25" y="206" font-size="10" font-weight="800" fill="#166534">LANTAI 1 (n=1):</text>
    <rect x="120" y="198" width="50" height="22" rx="3" fill="#ffffff" stroke="#16a34a" stroke-width="1.5"/>
    <text x="145" y="212" text-anchor="middle" font-size="9" font-weight="800" fill="#16a34a">1s² (1k)</text>
    <text x="200" y="212" font-size="8.5" font-style="italic" fill="#64748b">Tingkat Energi Terendah (Ground State)</text>
  </g>

  <!-- Right: 3 Golden Rules Cards -->
  <g transform="translate(390, 62)">
    <rect width="355" height="255" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>

    <!-- Rule 1: Aufbau -->
    <g transform="translate(15, 12)">
      <rect width="325" height="68" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
      <text x="12" y="18" font-size="10" font-weight="800" fill="#0f172a">1. Asas Aufbau (Tarif Sewa Termurah)</text>
      <text x="12" y="32" font-size="8.5" fill="#334155">Elektron wajib menempati orbital berenergi terendah (n + l)</text>
      <text x="12" y="45" font-size="8.5" fill="#334155">terlebih dahulu sebelum naik ke tingkat lebih tinggi:</text>
      <text x="12" y="60" font-size="8.5" font-weight="700" fill="#2563eb">1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → 4d</text>
    </g>

    <!-- Rule 2: Hund -->
    <g transform="translate(15, 90)">
      <rect width="325" height="72" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
      <text x="12" y="18" font-size="10" font-weight="800" fill="#0f172a">2. Kaidah Hund (Ranjang Sendiri Dulu)</text>
      <text x="12" y="32" font-size="8.5" fill="#334155">Pada orbital degenerat (energi setara), elektron menempati</text>
      <text x="12" y="45" font-size="8.5" fill="#334155">satu per satu dengan spin paralel (↑) sebelum berpasangan (↑↓).</text>
      <text x="12" y="60" font-size="8.5" font-weight="700" fill="#16a34a">✓ [ ↑ ][ ↑ ][ ↑ ] (Stabil)  vs  ✗ [ ↑↓ ][ ↑ ][   ] (Tolak-menolak)</text>
    </g>

    <!-- Rule 3: Pauli -->
    <g transform="translate(15, 172)">
      <rect width="325" height="70" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
      <text x="12" y="18" font-size="10" font-weight="800" fill="#0f172a">3. Larangan Pauli (Spin Berlawanan)</text>
      <text x="12" y="32" font-size="8.5" fill="#334155">Tidak boleh ada 2 elektron memiliki keempat bilangan kuantum</text>
      <text x="12" y="45" font-size="8.5" fill="#334155">identik. 1 orbital maksimal 2 elektron dengan spin antiparalel:</text>
      <text x="12" y="60" font-size="8.5" font-weight="700" fill="#dc2626">ms = +½ (↑) dan ms = -½ (↓) → Maksimal 2e⁻ / orbital</text>
    </g>
  </g>
</svg>

1. **Aturan Sewa Termurah (Asas Aufbau):**
   Tamu selalu memesan kamar dengan harga sewa terendah terlebih dahulu. Dalam atom, elektron mengisi orbital dari tingkat energi terendah menuju tingkat energi tertinggi. Urutan energi ditentukan oleh aturan **$(n + l)$**:
   - Jika nilai $(n + l)$ berbeda, orbital dengan $(n + l)$ lebih kecil terisi lebih dahulu.
   - Jika nilai $(n + l)$ sama, orbital dengan nilai $n$ lebih kecil terisi lebih dahulu (misal $3d$ memiliki $n+l = 3+2 = 5$, sedangkan $4p$ memiliki $n+l = 4+1 = 5$; maka $3d$ terisi lebih dahulu).
   - **Urutan Baku Diagonal:**
     $$\\mathbf{1s \\to 2s \\to 2p \\to 3s \\to 3p \\to 4s \\to 3d \\to 4p \\to 5s \\to 4d \\to 5p \\to 6s \\to 4f \\to 5d \\to 6p \\to 7s}$$

2. **Aturan Ranjang Sendiri Dulu (Kaidah Hund):**
   Jika tersedia beberapa ranjang kosong dengan kelas kamar dan harga yang persis sama (*orbital degenerat* pada satu subkulit), tamu lebih memilih tidur di ranjang kosong sendiri dengan arah kepala yang sama (spin paralel $\\uparrow$) sebelum dipaksa berbagi ranjang dengan orang asing berpasangan (spin antiparalel $\\uparrow\\downarrow$).
   *Tujuan fisis:* Meminimalkan energi tolak-menolak elektrostatik Coulomb antarelektron.

3. **Larangan Tamu Kembar Identik (Asas Larangan Pauli):**
   Wolfgang Pauli membuktikan bahwa di alam semesta, **tidak boleh ada dua elektron dalam satu atom yang memiliki keempat bilangan kuantum ($n, l, m_l, m_s$) yang identik**. Karena satu orbital telah memiliki nilai $n, l, m_l$ yang tetap, maka dua elektron yang menempatinya wajib memiliki nilai $m_s$ yang berlawanan:
   $$\\text{Satu Orbital Maksimum Berisi 2 Elektron dengan Spin Antiparalel } (\\uparrow\\downarrow)$$

---

### 1. Penyingkatan Konfigurasi Menggunakan Gas Mulia

Untuk efisiensi penulisan, elektron kulit dalam yang stabil disingkat menggunakan simbol unsur Gas Mulia (Golongan VIIIA):
- $\\ce{[He]} = 1s^2$ (2 elektron)
- $\\ce{[Ne]} = 1s^2 2s^2 2p^6$ (10 elektron)
- $\\ce{[Ar]} = [Ne] 3s^2 3p^6$ (18 elektron)
- $\\ce{[Kr]} = [Ar] 3d^{10} 4s^2 4p^6$ (36 elektron)
- $\\ce{[Xe]} = [Kr] 4d^{10} 5s^2 5p^6$ (54 elektron)
- $\\ce{[Rn]} = [Xe] 4f^{14} 5d^{10} 6s^2 6p^6$ (86 elektron)

*Contoh:* Atom Besi ($\\ce{_{26}Fe}$) disingkat menjadi:
$$\\ce{_{26}Fe}: \\mathbf{[Ar] 4s^2 3d^6}$$

---

> [!WARNING]
> ### ⚠️ Miskonsepsi Fatal 1: Anomali Subkulit d Setengah Penuh ($d^5$) dan Penuh ($d^{10}$)
> Aturan Aufbau memprediksi konfigurasi Kromium ($\\ce{_{24}Cr}$) adalah $[Ar] 4s^2 3d^4$ dan Tembaga ($\\ce{_{29}Cu}$) adalah $[Ar] 4s^2 3d^9$. **Ini keliru dalam kenyataan eksperimen!**
> 
> Karena orbital yang terisi **tepat setengah penuh ($d^5$)** atau **penuh ($d^{10}$)** memiliki simetri bola yang tinggi dan energi pertukaran kuantum (*exchange energy*) maksimal, satu elektron dari subkulit $4s$ dipromosikan ke subkulit $3d$:
> - **Kromium ($\\ce{_{24}Cr}$):** Bukan $[Ar] 4s^2 3d^4$, melainkan $\\mathbf{[Ar] 4s^1 3d^5}$ *(Setengah penuh stabil)*
> - **Tembaga ($\\ce{_{29}Cu}$):** Bukan $[Ar] 4s^2 3d^9$, melainkan $\\mathbf{[Ar] 4s^1 3d^{10}}$ *(Penuh stabil)*
> - Anomali serupa terjadi pada Molibdenum ($\\ce{_{42}Mo}: [Kr] 5s^1 4d^5$) dan Perak ($\\ce{_{47}Ag}: [Kr] 5s^1 4d^{10}$).

---

> [!WARNING]
> ### ⚠️ Miskonsepsi Fatal 2: Urutan Pelepasan Elektron pada Kation Transisi
> "Elektron yang terakhir masuk adalah elektron yang pertama kali keluar." **Pernyataan ini SALAH BESAR untuk logam transisi!**
> 
> Saat atom transisi membentuk kation positif, elektron dilepaskan dari **kulit dengan nomor utama ($n$) terbesar terlebih dahulu**, yaitu **subkulit $4s$ lepas SEBELUM $3d$**!
> - Atom Netral Besi: $\\ce{_{26}Fe} = [Ar] 4s^2 3d^6$
> - Kation $\\ce{Fe^2+}$: Lepas $2e^-$ dari $4s$ $\\rightarrow$ $\\mathbf{[Ar] 3d^6}$ *(Bukan $[Ar] 4s^2 3d^4$!)*
> - Kation $\\ce{Fe^3+}$: Lepas $2e^-$ dari $4s$ dan $1e^-$ dari $3d$ $\\rightarrow$ $\\mathbf{[Ar] 3d^5}$

---

### 2. Sifat Kemagnetan Zat: Paramagnetik vs Diamagnetik

Gerakan rotasi spin elektron menghasilkan momen dipol magnet mikroskopis.
1. **Paramagnetik:** Senyawa/atom memiliki **minimal satu elektron tidak berpasangan** pada orbitalnya. Zat ini ditarik oleh medan magnet luar. Makin banyak elektron tak berpasangan ($n$), makin kuat sifat kemagnetannya.
2. **Diamagnetik:** Seluruh elektron dalam atom berpasangan sempurna ($\\uparrow\\downarrow$). Momen magnet saling meniadakan sehingga zat ditolak lemah oleh medan magnet luar.

Kekuatan medan magnet dinyatakan oleh rumus momen magnetik spin saja (*spin-only magnetic moment*):
$$\\mu_{\\text{eff}} = \\sqrt{n(n + 2)} \\quad \\text{Bohr Magneton (BM)}$$
dengan $n$ adalah jumlah elektron yang tidak berpasangan.`,
      keyFormulas: [
        { name: 'Kaidah Tingkat Energi Aufbau', formula: 'E \\propto (n + l)' },
        { name: 'Momen Magnetik Spin Saja', formula: '\\mu_{\\text{eff}} = \\sqrt{n(n + 2)} \\quad \\text{BM}' },
      ],
    },

    {
      tag: 'arsitektur-tabel-periodik-modern',
      tags: [
        'sejarah-tabel-periodik',
        'tabel-periodik-modern-moseley',
        'penentuan-golongan-dan-periode',
        'blok-s-p-d-f',
      ],
      title: 'Konsep Inti 3: Arsitektur Tabel Periodik Modern, Pembagian Blok s/p/d/f & Algoritma Letak Unsur',
      summary: 'Struktur arsitektural sistem periodik modern berbasis hukum keperiodikan Henry Moseley. Pembagian 4 blok kuantum (s, p, d, f) dan algoritma deterministik penentuan posisi periode serta golongan unsur.',
      content: `### 🗺️ Peta Kota Sistem Periodik Modern (Mental Model)

Jika konfigurasi elektron adalah alamat kamar apartemen atom, maka Tabel Periodik Unsur adalah peta kota metropolitan yang mengelompokkan gedung-gedung apartemen tersebut berdasarkan kesamaan arsitektur dinding luarnya:

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 270" width="100%" height="auto" class="max-w-[760px] my-6 select-none font-sans">
  <defs>
    <marker id="trendUp" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#2563eb"/>
    </marker>
    <marker id="trendDown" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#16a34a"/>
    </marker>
  </defs>

  <!-- Block s (Columns 1-2) -->
  <g transform="translate(15, 10)">
    <rect width="115" height="145" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
    <text x="57" y="24" text-anchor="middle" font-size="12" font-weight="800" fill="#065f46">BLOK s</text>
    <text x="57" y="40" text-anchor="middle" font-size="8.5" font-weight="700" fill="#047857">Gol. IA &amp; IIA</text>
    <text x="57" y="55" text-anchor="middle" font-size="8" font-family="monospace" fill="#059669">ns¹ – ns²</text>
    <line x1="12" y1="62" x2="103" y2="62" stroke="#a7f3d0" stroke-width="1"/>
    <text x="12" y="76" font-size="7.5" fill="#065f46">• Logam Alkali (IA)</text>
    <text x="12" y="90" font-size="7.5" fill="#065f46">• Alkali Tanah (IIA)</text>
    <text x="12" y="104" font-size="7.5" fill="#065f46">• Elektropositif tinggi</text>
    <text x="12" y="118" font-size="7.5" fill="#065f46">• Reduktor terkuat</text>
    <text x="12" y="132" font-size="7.5" fill="#065f46">• He (1s²) masuk s</text>
  </g>

  <!-- Block d (Columns 3-12) -->
  <g transform="translate(138, 50)">
    <rect width="320" height="105" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="2"/>
    <text x="160" y="24" text-anchor="middle" font-size="12" font-weight="800" fill="#92400e">BLOK d (LOGAM TRANSISI LUAR)</text>
    <text x="160" y="40" text-anchor="middle" font-size="9" font-weight="700" fill="#b45309">Golongan IIIB s.d. IIB (Kolom IUPAC 3 – 12)</text>
    <text x="160" y="55" text-anchor="middle" font-size="8.5" font-family="monospace" fill="#78350f">(n-1)d¹⁻¹⁰ ns¹⁻²</text>
    <line x1="20" y1="62" x2="300" y2="62" stroke="#fde68a" stroke-width="1"/>
    <text x="25" y="78" font-size="8" fill="#92400e">• Biloks bervariasi (+2, +3, +4...)</text>
    <text x="175" y="78" font-size="8" fill="#92400e">• Membentuk ion kompleks berwarna</text>
    <text x="25" y="94" font-size="8" fill="#92400e">• Paramagnetik (elektron d tak berpasangan)</text>
    <text x="175" y="94" font-size="8" fill="#92400e">• Logam keras &amp; titik leleh tinggi</text>
  </g>

  <!-- Block p (Columns 13-18) -->
  <g transform="translate(466, 10)">
    <rect width="280" height="145" rx="8" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
    <text x="140" y="24" text-anchor="middle" font-size="12" font-weight="800" fill="#0369a1">BLOK p (GOLONGAN UTAMA)</text>
    <text x="140" y="40" text-anchor="middle" font-size="9" font-weight="700" fill="#0284c7">Gol. IIIA s.d. VIIIA (Kolom IUPAC 13 – 18)</text>
    <text x="140" y="55" text-anchor="middle" font-size="8.5" font-family="monospace" fill="#0369a1">ns² np¹⁻⁶</text>
    <line x1="15" y1="62" x2="265" y2="62" stroke="#bae6fd" stroke-width="1"/>
    <text x="18" y="76" font-size="8" fill="#0369a1">• IIIA: Boron (ns² np¹)</text>
    <text x="148" y="76" font-size="8" fill="#0369a1">• VIA: Kalkogen (ns² np⁴)</text>
    <text x="18" y="92" font-size="8" fill="#0369a1">• IVA: Karbon (ns² np²)</text>
    <text x="148" y="92" font-size="8" fill="#0369a1">• VIIA: Halogen (ns² np⁵)</text>
    <text x="18" y="108" font-size="8" fill="#0369a1">• VA: Pniktogen (ns² np³)</text>
    <text x="148" y="108" font-size="8" fill="#0369a1">• VIIIA: Gas Mulia (ns² np⁶)</text>
    <text x="18" y="126" font-size="8" font-weight="600" fill="#0284c7">Mencakup Logam, Metaloid, dan Seluruh Nonlogam</text>
  </g>

  <!-- Block f (Bottom Rows) -->
  <g transform="translate(138, 165)">
    <rect width="480" height="52" rx="8" fill="#faf5ff" stroke="#a855f7" stroke-width="2"/>
    <text x="240" y="20" text-anchor="middle" font-size="11" font-weight="800" fill="#6b21a8">BLOK f (LOGAM TRANSISI DALAM)</text>
    <text x="240" y="34" text-anchor="middle" font-size="8" fill="#7e22ce">• Deret Lantanida (4f¹⁻¹⁴, Ce–Lu) &amp; Deret Aktinida (5f¹⁻¹⁴, Th–Lr)</text>
    <text x="240" y="46" text-anchor="middle" font-size="8" fill="#9333ea">• Logam tanah jarang (rare earth) &amp; unsur aktinida radioaktif</text>
  </g>

  <!-- Trend Directional Indicators at Bottom -->
  <g transform="translate(15, 226)">
    <rect width="350" height="34" rx="6" fill="#f0fdf4" stroke="#86efac" stroke-width="1"/>
    <line x1="330" y1="17" x2="20" y2="17" stroke="#16a34a" stroke-width="2" marker-end="url(#trendDown)"/>
    <text x="175" y="12" text-anchor="middle" font-size="8" font-weight="700" fill="#15803d">← MAKIN BESAR KE KIRI BAWAH:</text>
    <text x="175" y="24" text-anchor="middle" font-size="7.5" font-weight="600" fill="#16a34a">Jari-Jari Atom (r) • Sifat Logam • Daya Reduksi (Reduktor)</text>
  </g>

  <g transform="translate(395, 226)">
    <rect width="350" height="34" rx="6" fill="#eff6ff" stroke="#93c5fd" stroke-width="1"/>
    <line x1="20" y1="17" x2="330" y2="17" stroke="#2563eb" stroke-width="2" marker-end="url(#trendUp)"/>
    <text x="175" y="12" text-anchor="middle" font-size="8" font-weight="700" fill="#1e40af">MAKIN BESAR KE KANAN ATAS: →</text>
    <text x="175" y="24" text-anchor="middle" font-size="7.5" font-weight="600" fill="#2563eb">Energi Ionisasi (IE) • Afinitas Elektron (EA) • Keelektronegatifan (EN)</text>
  </g>
</svg>

---

### 1. Landasan Hukum Moseley: Nomor Atom vs Massa Atom

Dmitri Mendeleev (1869) menyusun tabel periodik pertama berdasarkan kenaikan massa atom relatif ($A_r$), namun menemukan anomali pembalikan posisi urutan seperti Tellurium ($A_r = 127.6$) yang harus diletakkan sebelum Iodin ($A_r = 126.9$).

Teka-teki ini dipecahkan secara tuntas oleh **Henry Moseley (1913)** melalui eksperimen difraksi sinar-X karakteristik unsur:
$$\\sqrt{\\nu} = a(Z - b)$$

> [!NOTE]
> ### 💡 Hukum Keperiodikan Modern Moseley
> Sifat fisika dan kimia unsur-unsur merupakan fungsi periodik dari **nomor atomnya ($Z$)**, bukan dari massa atomnya. Kenaikan nomor atom mencerminkan penambahan bertahap satu proton di inti dan satu elektron pada konfigurasi kulit.

---

### 2. Algoritma Baku Penentuan Periode & Golongan dari Konfigurasi

Untuk menentukan letak unsur dalam SPU dari konfigurasi elektron atom netral:

#### A. Penentuan Periode:
$$\\mathbf{\\text{Periode}} = \\text{Nilai } n \\text{ (bilangan kuantum utama) TERBESAR dalam konfigurasi}$$

#### B. Penentuan Blok & Golongan:
Lihat subkulit terakhir tempat elektron valensi berada:

1. **Blok $s$ (Subkulit Terakhir $ns^x$):**
   - $x = 1 \\rightarrow$ **Golongan IA** (Logam Alkali / Kolom 1 IUPAC)
   - $x = 2 \\rightarrow$ **Golongan IIA** (Logam Alkali Tanah / Kolom 2 IUPAC) *(Kecuali Helium $1s^2$ yang diletakkan di Golongan VIIIA karena sifat gas mulianya)*
2. **Blok $p$ (Subkulit Terakhir $ns^2 np^x$):**
   - Jumlah elektron valensi $= 2 + x$
   - **Golongan $(2 + x)\\text{A}$** atau Kolom $(12 + x)$ IUPAC
   - *Contoh:* $3s^2 3p^4 \\rightarrow$ Elektron valensi $= 2+4 = 6 \\rightarrow$ **Golongan VIA** (Kolom 16 IUPAC), Periode 3.
3. **Blok $d$ (Subkulit Terakhir $(n-1)d^x ns^y$):**
   - Jumlah elektron terluar $= x + y$
   - Aturan Golongan B (Logam Transisi Luar / Kolom 3–12 IUPAC):
     - $x + y = 3 \\rightarrow$ **Golongan IIIB** (Kolom 3)
     - $x + y = 4 \\rightarrow$ **Golongan IVB** (Kolom 4)
     - $x + y = 5 \\rightarrow$ **Golongan VB** (Kolom 5)
     - $x + y = 6 \\rightarrow$ **Golongan VIB** (Kolom 6) *(misal $\\ce{Cr}: 3d^5 4s^1$)*
     - $x + y = 7 \\rightarrow$ **Golongan VIIB** (Kolom 7)
     - $x + y = 8, 9, 10 \\rightarrow$ **Golongan VIIIB** (Kolom 8, 9, 10 IUPAC, Triad Besi-Kobalt-Nikel)
     - $x + y = 11 \\rightarrow$ **Golongan IB** (Kolom 11, Logam Mata Uang: Cu, Ag, Au)
     - $x + y = 12 \\rightarrow$ **Golongan IIB** (Kolom 12: Zn, Cd, Hg)
4. **Blok $f$ (Subkulit Terakhir $(n-2)f^x$):**
   - Seluruh unsur blok $f$ secara otomatis berada pada **Golongan IIIB** (Kolom 3 IUPAC).
   - $4f$ terisi $\\rightarrow$ **Deret Lantanida** (Periode 6, $\\ce{_{57}La}$ s.d. $\\ce{_{71}Lu}$)
   - $5f$ terisi $\\rightarrow$ **Deret Aktinida** (Periode 7, $\\ce{_{89}Ac}$ s.d. $\\ce{_{103}Lr}$)`,
      keyFormulas: [
        { name: 'Hukum Frekuensi Sinar-X Moseley', formula: '\\sqrt{\\nu} = a(Z - b)' },
        { name: 'Nomor Periode Unsur', formula: '\\text{Periode} = n_{\\text{maks}}' },
      ],
    },

    {
      tag: 'tren-keperiodikan-dan-zeff',
      tags: [
        'muatan-inti-efektif-zeff',
        'efek-perisai-elektron',
        'tren-jari-jari-atom-dan-ion',
        'deret-isoelektronik',
        'energi-ionisasi-pertama-dan-anomali',
        'anomali-energi-ionisasi-be-b-n-o',
        'energi-ionisasi-bertingkat',
        'afinitas-elektron-dan-anomali',
        'anomali-afinitas-elektron-f-cl',
        'keelektronegatifan-skala-pauling',
      ],
      title: 'Konsep Inti 4: Tren Periodik Sifat Fisika-Kimia & Teori Muatan Inti Efektif (Zeff)',
      summary: 'Dekomposisi komprehensif sifat periodik menggunakan teori Tarik Tambang Muatan Inti Efektif (Zeff = Z - S). Analisis mendalam anomali energi ionisasi Be-B dan N-O, afinitas elektron F-Cl, serta perbandingan jari-jari deret isoelektronik.',
      content: `### 🪢 Tarik Tambang Inti vs Perisai Elektron (Mental Model: Teori $Z_{\\text{eff}}$)

Mengapa sifat kimia unsur berulang secara periodik? Kunci rahasianya terletak pada satu konsep fundamental: **Tarik Tambang Muatan Inti Efektif ($Z_{\\text{eff}}$)**.

Bayangkan inti atom bermuatan $+Z$ sedang menarik elektron-elektron valensi di kulit terluar menggunakan tali gaya Coulomb. Namun, di antara inti dan elektron valensi terdapat elektron-elektron kulit dalam (*core electrons*). Elektron kulit dalam ini bertindak sebagai **"kabut perisai" (*shielding constant, $S$*)** bermuatan negatif yang menolak elektron valensi dan meredam tarikan inti:

$$Z_{\\text{eff}} = Z - S$$

- **Dalam Satu Periode (Dari Kiri ke Kanan):**
  Jumlah proton $Z$ bertambah $+1$ pada setiap langkah, namun elektron baru ditambahkan pada **kulit yang sama**. Elektron pada kulit yang sama sangat buruk dalam memperisai satu sama lain ($S$ hanya naik sedikit). Akibatnya, **$Z_{\\text{eff}}$ MENINGKAT TAJAM**. Inti menarik elektron valensi makin kuat!
- **Dalam Satu Golongan (Dari Atas ke Bawah):**
  Jumlah kulit atom ($n$) bertambah. Meskipun $Z$ bertambah besar, pertambahan tersebut diimbangi oleh penambahan lapisan kulit penuh di bagian dalam yang menjadi perisai kuat ($S$ naik sebanding). Yang lebih dominan adalah jarak elektron valensi ke inti makin jauh ($r \\propto n^2$). Akibatnya, **daya tarik inti terhadap elektron valensi MELEMAH**.

---

### 1. Jari-Jari Atom & Jari-Jari Ion

1. **Jari-Jari Atom Netral:**
   - **Dari Kiri ke Kanan (Seperiode):** Jari-jari **MAKIN KECIL**, karena $Z_{\\text{eff}}$ meningkat sehingga awan elektron ditarik lebih merapat ke arah inti.
   - **Dari Atas ke Bawah (Segolongan):** Jari-jari **MAKIN BESAR**, karena jumlah kulit utama ($n$) bertambah.
2. **Jari-Jari Kation ($r_{\\text{kation}} < r_{\\text{netral}}$):**
   Ketika atom melepas elektron membentuk kation, jumlah proton melebihi elektron. Tolakan antarelektron berkurang drastis dan terkadang satu kulit terluar hilang seluruhnya (misal $\\ce{Na}: 1s^2 2s^2 2p^6 3s^1 \\rightarrow \\ce{Na+}: [Ne]$). Akibatnya, kation selalu berukuran jauh lebih kecil daripada atom netralnya.
3. **Jari-Jari Anion ($r_{\\text{anion}} > r_{\\text{netral}}$):**
   Penambahan elektron ke kulit terluar meningkatkan tolakan elektrostatik antarelektron (*electron-electron repulsion*). Awan elektron mengembang sehingga ukuran anion selalu lebih besar daripada atom netralnya.
4. **Deret Spesi Isoelektronik:**
   Pada spesi dengan jumlah elektron persis sama (misal $10e^-$: $\\ce{N^3-}, \\ce{O^2-}, \\ce{F-}, \\ce{Na+}, \\ce{Mg^2+}, \\ce{Al^3+}$), **makin banyak jumlah proton di inti ($Z$), makin kuat tarikan inti dan makin KECIL ukuran radiusnya**:
   $$\\mathbf{\\ce{N^3-} (Z=7) > \\ce{O^2-} (Z=8) > \\ce{F-} (Z=9) > \\ce{Na+} (Z=11) > \\ce{Mg^2+} (Z=12) > \\ce{Al^3+} (Z=13)}$$

---

### 2. Energi Ionisasi Pertama ($IE_1$) & Dua Anomali Terkenal

Energi Ionisasi ($IE$) adalah energi minimum yang dibutuhkan untuk melepaskan satu elektron dari atom netral dalam wujud gas pada keadaan dasar:
$$\\ce{X(g) -> X+(g) + e-} \\quad \\Delta H = IE_1 > 0$$

- **Tren Umum:** $IE_1$ **makin besar ke kanan atas** tabel periodik (karena jari-jari makin kecil dan $Z_{\\text{eff}}$ makin besar, elektron terikat sangat kuat).

---

> [!IMPORTANT]
> ### 🚨 Dua Anomali Energi Ionisasi Pertama di Periode 2 & 3
> Jika Anda mengamati grafik $IE_1$ dari Golongan IA sampai VIIIA, kurvanya tidak naik mulus secara monoton, melainkan mengalami dua penurunan tak terduga:
> 
> 1. **Anomali Golongan IIA vs IIIA ($IE_1 \\ce{Be} > IE_1 \\ce{B}$):**
>    - $\\ce{_4Be} = 1s^2 2s^2$ (Subkulit $2s$ **penuh stabil**, penetrasi dekat ke inti).
>    - $\\ce{_5B} = 1s^2 2s^2 2p^1$ (Elektron terluar berada pada orbital $2p^1$ yang energinya lebih tinggi dan terperisai oleh elektron $2s$). Melepaskan $2p^1$ jauh lebih mudah daripada membongkar pasangan $2s^2$ yang kompak!
> 2. **Anomali Golongan VA vs VIA ($IE_1 \\ce{N} > IE_1 \\ce{O}$):**
>    - $\\ce{_7N} = [He] 2s^2 2p_x^1 2p_y^1 2p_z^1$ (Subkulit $2p$ **tepat setengah penuh**, simetri stabil tanpa tolakan pasangan).
>    - $\\ce{_8O} = [He] 2s^2 2p_x^2 2p_y^1 2p_z^1$ (Terdapat **sepasang elektron dalam satu orbital $2p_x$**). Gaya tolak-menolak antar dua elektron yang berdesakan di orbital yang sama memudahkan satu elektron terlempar keluar!

---

### 3. Lonjakan Energi Ionisasi Bertingkat ($IE_1, IE_2, IE_3 \\dots$)

Ketika elektron dilepas berturut-turut, nilainya selalu naik: $IE_1 < IE_2 < IE_3 < IE_4$. Namun, perhatikan lonjakan rasionya:
$$\\text{Ketika elektron valensi habis, elektron berikutnya harus diambil dari KULIT DALAM (Gas Mulia)}$$
Pelepasan elektron dari kulit dalam yang jauh lebih dekat ke inti menghasilkan **lonjakan energi ionisasi yang sangat drastis (hingga 4 s.d. 10 kali lipat)**:
- Unsur Golongan IA (1 elektron valensi): Lonjakan terjadi antara **$IE_1 \\rightarrow IE_2$**
- Unsur Golongan IIA (2 elektron valensi): Lonjakan terjadi antara **$IE_2 \\rightarrow IE_3$**
- Unsur Golongan IIIA (3 elektron valensi): Lonjakan terjadi antara **$IE_3 \\rightarrow IE_4$**

---

### 4. Afinitas Elektron ($EA$) & Keelektronegatifan

1. **Afinitas Elektron ($EA$):** Perubahan energi ketika satu elektron ditangkap oleh atom netral dalam wujud gas untuk membentuk anion:
   $$\\ce{X(g) + e- -> X-(g)}$$
   - Nilai $EA$ umumnya bernilai eksotermik (melepas energi, bernilai negatif). Makin mudah menangkap elektron, harga mutlak $|EA|$ makin besar.
   - **Anomali Halogen Periode 2 vs 3 ($EA \\ce{Cl} > EA \\ce{F}$):**  
     Fluorin (F) memiliki jari-jari $2p$ yang teramat kecil dan kerapatan awan elektron yang sangat padat. Masuknya satu elektron baru ke ruang sempit tersebut menimbulkan gaya tolak-menolak antarelektron yang signifikan, sehingga energi yang dilepaskan Fluorin ($328\\text{ kJ/mol}$) sedikit lebih rendah daripada Klorin ($349\\text{ kJ/mol}$).
2. **Keelektronegatifan (Skala Linus Pauling):**  
   Kemampuan relatif suatu atom dalam molekul untuk menarik pasangan elektron ikatan ke arah dirinya.
   - **Unsur Paling Elektronegatif:** Fluorin ($\\mathbf{\\text{F} = 4.0}$), diikuti Oksigen ($3.5$), Nitrogen ($3.0$), Klorin ($3.0$).
   - **Unsur Paling Elektropositif (Paling Rendah):** Sesium dan Fransium ($\\approx 0.7$).`,
      keyFormulas: [
        { name: 'Muatan Inti Efektif Sederhana', formula: 'Z_{\\text{eff}} = Z - S' },
        { name: 'Reaksi Energi Ionisasi Pertama', formula: '\\ce{X(g) -> X+(g) + e-} \\quad (\\Delta H = IE_1 > 0)' },
        { name: 'Reaksi Afinitas Elektron', formula: '\\ce{X(g) + e- -> X-(g)} \\quad (\\Delta H = EA)' },
      ],
    },
  ],

  worked_examples: [
    {
      tag: 'soal-kelimpahan-isotop-dan-spektrometri',
      tags: [
        'soal-kelimpahan-isotop-ar',
        'kelimpahan-isotop-dan-ar',
        'spektrometri-massa',
      ],
      title: 'Contoh Soal 1: Analisis Spektrometri Massa & Penentuan Kelimpahan Fraksional Isotop',
      summary: 'Perhitungan kuantitatif massa atom relatif (Ar) galium dari data spektrometer massa serta penentuan persentase kelimpahan dua isotop boron dari nilai Ar tabel periodik.',
      content: `**Kasus A: Kalkulasi $A_r$ Eksak dari Spektrum Massa**  
Unsur Galium ($\\ce{Ga}$, $Z = 31$) yang diaplikasikan pada teknologi semikonduktor laser dianalisis menggunakan spektrometer massa resolusi tinggi. Hasil analisis menunjukkan dua puncak isotop stabil:
1. Puncak 1: Isotop $\\ce{^{69}Ga}$ dengan massa $68.9256\\text{ sma}$ dan kelimpahan $60.11\\%$.
2. Puncak 2: Isotop $\\ce{^{71}Ga}$ dengan massa $70.9247\\text{ sma}$ dan kelimpahan $39.89\\%$.

Hitunglah massa atom relatif ($A_r$) rata-rata unsur Galium berdasarkan data tersebut (bulatkan ke 2 desimal)!

---

**Kasus B: Menentukan Kelimpahan Alami dari Nilai $A_r$ Standar**  
Di alam bebas, unsur Boron ($\\ce{B}$, $Z = 5$) dengan massa atom relatif standar $A_r = 10.81$ hanya tersusun atas dua isotop stabil, yaitu $\\ce{^{10}B}$ (massa riil $= 10.01\\text{ sma}$) dan $\\ce{^{11}B}$ (massa riil $= 11.01\\text{ sma}$).  
Tentukan persentase kelimpahan masing-masing isotop boron tersebut di alam!

---

### Pembahasan Langkah demi Langkah:

#### 1. Data Diketahui & Target Analisis:
- **Kasus A:**
  - Isotop 1: $\\ce{^{69}Ga}$, massa $m_1 = 68.9256\\text{ sma}$, kelimpahan $f_1 = 60.11\\% = 0.6011$.
  - Isotop 2: $\\ce{^{71}Ga}$, massa $m_2 = 70.9247\\text{ sma}$, kelimpahan $f_2 = 39.89\\% = 0.3989$.
  - *Target:* Nilai $A_r(\\ce{Ga})$.
- **Kasus B:**
  - $A_r(\\ce{B}) = 10.81\\text{ sma}$.
  - Massa $\\ce{^{10}B} = 10.01\\text{ sma}$; massa $\\ce{^{11}B} = 11.01\\text{ sma}$.
  - *Target:* Persentase kelimpahan $\\%\\ce{^{10}B}$ dan $\\%\\ce{^{11}B}$.

---

#### 2. Rencana Strategi (Formula & Asas Terkait):
Gunakan rumus rata-rata tertimbang (*weighted average*):
$$A_r = (f_1 \\times m_1) + (f_2 \\times m_2)$$
Untuk Kasus B, tetapkan kelimpahan fraksional $\\ce{^{10}B} = x$. Karena jumlah total fraksi adalah $1.00$, maka fraksi $\\ce{^{11}B} = (1 - x)$.

---

#### 3. Eksekusi KaTeX Langkah Demi Langkah:

##### Penyelesaian Kasus A (Galium):
$$\\begin{aligned}
A_r(\\ce{Ga}) &= (0.6011 \\times 68.9256\\text{ sma}) + (0.3989 \\times 70.9247\\text{ sma}) \\\\
&= 41.43118\\dots + 28.29186\\dots \\\\
&= 69.72304\\dots\\text{ sma}
\\end{aligned}$$
Dibulatkan menjadi 2 tempat desimal: **$A_r(\\ce{Ga}) = \\mathbf{69.72}$**.

##### Penyelesaian Kasus B (Boron):
$$\\begin{aligned}
A_r(\\ce{B}) &= [x \\times 10.01] + [(1 - x) \\times 11.01] \\\\
10.81 &= 10.01x + 11.01 - 11.01x \\\\
10.81 - 11.01 &= -1.00x \\\\
-0.20 &= -1.00x \\\\
x &= 0.20
\\end{aligned}$$

Konversi fraksi ke persentase:
- Kelimpahan isotop $\\ce{^{10}B} = 0.20 \\times 100\\% = \\mathbf{20.0\\%}$
- Kelimpahan isotop $\\ce{^{11}B} = (1 - 0.20) \\times 100\\% = \\mathbf{80.0\\%}$

---

> [!NOTE]
> ### ⚖️ Kesimpulan Evaluator Juri (Insight OSN)
> Nilai $A_r(\\ce{B}) = 10.81$ secara visual jauh lebih mendekati angka $11$ daripada $10$. Ini adalah verifikasi intuitif cepat di ruang ujian bahwa kelimpahan isotop $\\ce{^{11}B}$ pasti sangat dominan ($\\approx 80\\%$) dibandingkan isotop $\\ce{^{10}B}$ ($\\approx 20\\%$). Jangan pernah membuang waktu menghitung ulang jika hasil Anda memberikan rasio terbalik!`,
      keyFormulas: [
        { name: 'Rumus Rata-rata Tertimbang Massa Atom Relatif', formula: 'A_r = \\sum (f_i \\times m_i)' },
      ],
    },

    {
      tag: 'soal-konfigurasi-elektron-anomali',
      tags: [
        'anomali-kestabilan-subkulit-d',
        'pelepasan-elektron-4s-transisi',
        'paramagnetik-dan-diamagnetik',
        'momen-magnetik-spin-only',
      ],
      title: 'Contoh Soal 2: Konfigurasi Elektron Anomali Subkulit d, Pembentukan Kation & Sifat Magnetik',
      summary: 'Analisis konfigurasi elektron atom netral Kromium (anomali d5), kation Kobalt Co2+ dan Co3+, penentuan diagram orbital Hund, serta perhitungan kuantitatif momen magnetik spin.',
      content: `Diberikan dua unsur logam transisi periode 4: Kromium ($\\ce{_{24}Cr}$) dan Kobalt ($\\ce{_{27}Co}$).
1. Tuliskan konfigurasi elektron lengkap dan notasi singkat gas mulia dari atom netral $\\ce{_{24}Cr}$ pada keadaan dasar (*ground state*), serta jelaskan mengapa konfigurasi tersebut menyimpang dari aturan Aufbau!
2. Tuliskan konfigurasi elektron dari ion $\\ce{Co^2+}$ dan $\\ce{Co^3+}$!
3. Gambarkan diagram kotak pengisian orbital subkulit $3d$ untuk ion $\\ce{Co^2+}$ berdasarkan Kaidah Hund!
4. Tentukan jumlah elektron tidak berpasangan ($n$) pada ion $\\ce{Co^2+}$ dan hitung nilai momen magnetik spin-only ($\\mu_{\\text{eff}}$) dalam satuan Bohr Magneton (BM)!

---

### Pembahasan Langkah demi Langkah:

#### 1. Data Diketahui & Target Analisis:
- Unsur: $\\ce{_{24}Cr}$ ($Z = 24$) dan $\\ce{_{27}Co}$ ($Z = 27$).
- *Target:*
  - Konfigurasi atom netral $\\ce{Cr}$ dan rasionalisasi anomalinya.
  - Konfigurasi kation $\\ce{Co^2+}$ dan $\\ce{Co^3+}$.
  - Diagram orbital $3d$ $\\ce{Co^2+}$.
  - Nilai $n$ dan momen magnetik $\\mu_{\\text{eff}}$ ion $\\ce{Co^2+}$.

---

#### 2. Rencana Strategi:
- Untuk $\\ce{Cr}$, terapkan kaidah stabilitas subkulit $d$ setengah penuh ($4s^1 3d^5$).
- Untuk ion logam transisi, ingat kaidah kritis: elektron pada kulit **$4s$ dilepas terlebih dahulu sebelum $3d$**.
- Untuk momen magnetik, gunakan formula $\\mu_{\\text{eff}} = \\sqrt{n(n + 2)}\\text{ BM}$.

---

#### 3. Eksekusi KaTeX Langkah Demi Langkah:

##### 1. Konfigurasi Elektron Kromium ($\\ce{_{24}Cr}$):
- Prediksi Aufbau: $1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^4$
- **Konfigurasi Riil Eksperimen:**
  $$\\ce{_{24}Cr}: 1s^2 2s^2 2p^6 3s^2 3p^6 \\mathbf{4s^1 3d^5} \\quad \\text{atau} \\quad \\mathbf{[Ar] 4s^1 3d^5}$$
- *Rasionalisasi Fisis:* Subkulit $3d^5$ terisi **tepat setengah penuh**, menghasilkan distribusi kerapatan muatan berbentuk bola simetris sempurna dan memaksimalkan energi pertukaran kuantum (*exchange energy*), sehingga energi total atom lebih rendah (lebih stabil) daripada keadaan $4s^2 3d^4$.

##### 2. Konfigurasi Elektron Ion $\\ce{Co^2+}$ dan $\\ce{Co^3+}$:
- Atom Netral: $\\ce{_{27}Co} = [Ar] 4s^2 3d^7$
- Ion $\\ce{Co^2+}$ (kehilangan 2 elektron dari subkulit $4s$):
  $$\\ce{Co^2+}: \\mathbf{[Ar] 3d^7} \\quad \\text{(Bukan }[Ar] 4s^2 3d^5\\text{)}$$
- Ion $\\ce{Co^3+}$ (kehilangan 2 elektron dari $4s$ dan 1 elektron dari $3d$):
  $$\\ce{Co^3+}: \\mathbf{[Ar] 3d^6}$$

##### 3. Diagram Kotak Subkulit $3d^7$ pada $\\ce{Co^2+}$:
Subkulit $d$ memiliki 5 orbital ($m_l = -2, -1, 0, +1, +2$). Sesuai Kaidah Hund, isi satu per satu dengan spin paralel, lalu pasangkan 2 elektron:
$$\\begin{array}{|c|c|c|c|c|}
\\hline
\\uparrow\\downarrow & \\uparrow\\downarrow & \\uparrow & \\uparrow & \\uparrow \\\\
\\hline
-2 & -1 & 0 & +1 & +2 \\\\
\\end{array}$$

##### 4. Jumlah Elektron Tak Berpasangan & Momen Magnetik:
Dari diagram kotak di atas, terdapat **$n = 3$ elektron tidak berpasangan** (pada orbital $m_l = 0, +1, +2$). Sifat zat adalah **Paramagnetik kuat**.
Kalkulasi momen magnetik:
$$\\begin{aligned}
\\mu_{\\text{eff}} &= \\sqrt{n(n + 2)} \\\\
&= \\sqrt{3(3 + 2)} = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx \\mathbf{3.87\\text{ BM}}
\\end{aligned}$$

---

> [!NOTE]
> ### ⚖️ Kesimpulan Evaluator Juri (Insight OSN)
> Kesalahan fatal nomor satu peserta OSN adalah menuliskan konfigurasi $\\ce{Co^2+}$ sebagai $[Ar] 4s^2 3d^5$ karena beranggapan subkulit $d^5$ setengah penuh sangat stabil sehingga $3d$ tidak boleh diganggu. Selalu ingat: **saat orbital $3d$ terisi elektron, tingkat energi orbital $4s$ terdorong naik menjadi lebih tinggi daripada $3d$, sehingga $4s$ mutlak terionisasi terlebih dahulu!**`,
      keyFormulas: [
        { name: 'Konfigurasi Anomali Kromium', formula: '\\ce{_{24}Cr}: [Ar] 4s^1 3d^5' },
        { name: 'Formula Momen Magnetik Spin Saja', formula: '\\mu_{\\text{eff}} = \\sqrt{n(n + 2)} \\quad \\text{BM}' },
      ],
    },

    {
      tag: 'soal-bilangan-kuantum-dan-spu',
      tags: [
        'empat-bilangan-kuantum',
        'penentuan-golongan-dan-periode',
        'blok-s-p-d-f',
      ],
      title: 'Contoh Soal 3: Penentuan Bilangan Kuantum Elektron Valensi Terakhir & Posisi Periodik',
      summary: 'Algoritma deduktif menentukan nomor atom dari data spektroskopi bilangan kuantum, konfigurasi elektron lengkap, serta penentuan letak periode, golongan, dan blok unsur dalam sistem periodik.',
      content: `Suatu atom netral unsur $X$ memiliki elektron terakhir dengan keempat bilangan kuantum sebagai berikut:
$$n = 3, \\quad l = 1, \\quad m_l = -1, \\quad m_s = -\\frac{1}{2}$$

Pertanyaan:
1. Tentukan subkulit terakhir dari atom unsur $X$ dan hitung jumlah elektron yang menempati subkulit tersebut!
2. Tuliskan konfigurasi elektron lengkap atom unsur $X$ dan tentukan nomor atomnya ($Z$)!
3. Tentukan letak unsur $X$ dalam Tabel Periodik Modern (Periode, Golongan Utama/IUPAC, dan Blok)!
4. Jika unsur $Y$ memiliki nomor atom $Z = 26$, tentukan keempat bilangan kuantum elektron terakhir dari atom $Y$!

---

### Pembahasan Langkah demi Langkah:

#### 1. Data Diketahui & Target Analisis:
- Data elektron terakhir $X$: $n = 3, l = 1, m_l = -1, m_s = -\\frac{1}{2}$.
- Unsur $Y$: $Z = 26$.
- *Target:* Subkulit terakhir $X$, nomor atom $Z_X$, posisi periodik $X$, dan bilangan kuantum elektron terakhir $Y$.

---

#### 2. Rencana Strategi:
- Rekonstruksi subkulit dari $n=3$ dan $l=1$ (subkulit $3p$).
- Buat 3 kotak orbital ($m_l = -1, 0, +1$). Karena $m_s = -\\frac{1}{2}$, elektron terakhir merupakan pasangan panah ke bawah pada kotak $m_l = -1$.
- Hitung total elektron dari konfigurasi terisi penuh hingga subkulit terakhir.
- Tentukan Golongan dari elektron valensi dan Periode dari $n_{\\text{maks}}$.

---

#### 3. Eksekusi KaTeX Langkah Demi Langkah:

##### 1. Rekonstruksi Subkulit Terakhir $X$:
- $n = 3, l = 1 \\rightarrow$ Subkulit **$3p$**.
- Orbital subkulit $p$ memiliki 3 kamar: $[-1], [0], [+1]$.
- Sesuai Kaidah Hund, pengisian elektron:
  1. Kotak $[-1]$ diisi $\\uparrow$ ($e_1$)
  2. Kotak $[0]$ diisi $\\uparrow$ ($e_2$)
  3. Kotak $[+1]$ diisi $\\uparrow$ ($e_3$)
  4. Kotak $[-1]$ diisi $\\downarrow$ ($e_4$, elektron terakhir dengan $m_l = -1, m_s = -\\frac{1}{2}$).
- Jadi, subkulit terakhir adalah **$3p^4$** (terisi 4 elektron).

##### 2. Konfigurasi Elektron & Nomor Atom $X$:
Tuliskan konfigurasi berurutan dari $1s$ sampai berakhir di $3p^4$:
$$1s^2 \\, 2s^2 \\, 2p^6 \\, 3s^2 \\, 3p^4$$
Jumlah elektron total: $2 + 2 + 6 + 2 + 4 = 16$.  
Karena atom netral, maka **Nomor Atom $Z = 16$** (Unsur tersebut adalah Belerang / Sulfur, $\\ce{S}$).

##### 3. Posisi dalam Sistem Periodik:
- **Periode:** Nilai $n$ terbesar adalah $3$ $\\rightarrow$ **Periode 3**.
- **Blok:** Subkulit terakhir adalah $p$ $\\rightarrow$ **Blok $p$**.
- **Golongan:** Elektron valensi pada kulit terluar ($n=3$) adalah $3s^2 3p^4$ ($2 + 4 = 6$ elektron valensi).
  - Sistem Tradisional: **Golongan VIA**
  - Sistem IUPAC Modern: Kolom $10 + 6 = \\mathbf{\\text{Golongan 16}}$ (Kalkogen).

##### 4. Kuartet Bilangan Kuantum Elektron Terakhir $Y$ ($Z = 26$):
Konfigurasi Besi ($\\ce{_{26}Fe}$):
$$1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^6$$
Elektron terakhir masuk pada subkulit **$3d^6$**:
- $n = 3$
- $l = 2$ (subkulit $d$)
- Orbital subkulit $d$ memiliki 5 kotak: $[-2], [-1], [0], [+1], [+2]$.
- Isi 5 elektron ke atas: $[-2]\\uparrow, [-1]\\uparrow, [0]\\uparrow, [+1]\\uparrow, [+2]\\uparrow$.
- Elektron ke-6 berpasangan masuk di kotak $[-2]$ dengan panah ke bawah ($\\downarrow$).
- Maka: **$m_l = -2$** dan **$m_s = -\\frac{1}{2}$**.
- *Kuartet Elektron Terakhir $Y$:* **$(3, 2, -2, -\\frac{1}{2})$**.

---

> [!NOTE]
> ### ⚖️ Kesimpulan Evaluator Juri (Insight OSN)
> Hati-hati pada penentuan elektron terakhir unsur transisi! Meskipun dalam penulisan susunan kulit orbital $4s$ ditulis sebelum $3d$ atau sesudah $3d$ ($[Ar] 3d^6 4s^2$), secara urutan pengisian energi Aufbau elektron ke-26 masuk ke dalam subkulit $3d$, BUKAN ke dalam $4s$. Oleh karena itu, kuartet bilangan kuantum elektron terakhir selalu dihitung dari subkulit $3d$.`,
      keyFormulas: [
        { name: 'Kuantitas Elektron Valensi Blok p', formula: '\\text{Golongan} = ns + np = 2 + x' },
      ],
    },

    {
      tag: 'soal-energi-ionisasi-bertingkat',
      tags: [
        'energi-ionisasi-bertingkat',
        'tren-jari-jari-atom-dan-ion',
        'deret-isoelektronik',
        'anomali-energi-ionisasi-be-b-n-o',
      ],
      title: 'Contoh Soal 4: Analisis Kritis Energi Ionisasi Bertingkat & Tren Ukuran Deret Isoelektronik',
      summary: 'Dekonstruksi tabel data energi ionisasi bertingkat IE1 hingga IE6 untuk identifikasi golongan unsur, serta perbandingan urutan jari-jari spesi dalam deret isoelektronik.',
      content: `**Bagian A: Identifikasi Golongan dari Lonjakan Energi Ionisasi Bertingkat**  
Tabel berikut menyajikan data energi ionisasi bertingkat ($IE_1$ s.d. $IE_6$) dalam satuan $\\text{kJ/mol}$ untuk tiga unsur periode 3 berturut-turut ($P, Q, R$):

| Unsur | $IE_1$ | $IE_2$ | $IE_3$ | $IE_4$ | $IE_5$ | $IE_6$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **$P$** | $496$ | $4.562$ | $6.910$ | $9.543$ | $13.354$ | $16.613$ |
| **$Q$** | $738$ | $1.451$ | $7.733$ | $10.543$ | $13.630$ | $18.020$ |
| **$R$** | $578$ | $1.817$ | $2.745$ | $11.577$ | $14.842$ | $18.379$ |

1. Tentukan golongan dalam sistem periodik untuk masing-masing unsur $P, Q,$ dan $R$! Jelaskan dasar penalaran ilmiah Anda!
2. Mengapa nilai $IE_1$ unsur $Q$ lebih tinggi daripada $IE_1$ unsur $R$, padahal nomor atom $R$ lebih besar daripada $Q$?

---

**Bagian B: Urutan Jari-jari Deret Isoelektronik**  
Urutkan spesi-spesi ionik dan atom netral berikut berdasarkan kenaikan jari-jarinya (dari yang paling kecil ke paling besar):
$$\\ce{Mg^2+}, \\quad \\ce{F-}, \\quad \\ce{Na+}, \\quad \\ce{O^2-}, \\quad \\ce{Al^3+}, \\quad \\ce{N^3-}$$
Berikan penjelasan mendasar berdasarkan konsep Muatan Inti Efektif ($Z_{\\text{eff}}$)!

---

### Pembahasan Langkah demi Langkah:

#### 1. Data Diketahui & Target Analisis:
- Bagian A: Data $IE_1$ s.d. $IE_6$ untuk unsur periode 3 ($P, Q, R$). Target: Identifikasi golongan dan rasionalisasi anomali $IE_1(Q) > IE_1(R)$.
- Bagian B: Spesi $\\ce{Mg^2+}, \\ce{F-}, \\ce{Na+}, \\ce{O^2-}, \\ce{Al^3+}, \\ce{N^3-}$. Target: Urutan kenaikan jari-jari dan penjelasan $Z_{\\text{eff}}$.

---

#### 2. Rencana Strategi:
- Analisis rasio lonjakan: $\\frac{IE_{k+1}}{IE_k}$. Lonjakan ekstrem ($> 3$ s.d. $9$ kali) menandakan elektron ke-$(k+1)$ ditarik dari **kulit dalam yang penuh**, sehingga jumlah elektron valensi sama dengan $k$.
- Untuk anomali $IE_1$, periksa konfigurasi elektron subkulit valensi $Q$ vs $R$ ($s^2$ penuh vs $p^1$).
- Untuk deret isoelektronik, hitung jumlah proton ($Z$) masing-masing spesi yang memiliki $10e^-$. Jari-jari berbanding terbalik dengan nomor atom $Z$.

---

#### 3. Eksekusi KaTeX Langkah Demi Langkah:

##### Penyelesaian Bagian A:
1. **Identifikasi Unsur $P$:**
   - $IE_1 = 496 \\to IE_2 = 4.562\\text{ kJ/mol}$ (Lonjakan drastis sebesar $\\frac{4562}{496} \\approx 9.2\\text{ kali}$).
   - Elektron ke-1 sangat mudah dilepas, namun elektron ke-2 membutuhkan energi raksasa karena berasal dari kulit gas mulia yang stabil.
   - Maka unsur $P$ memiliki **1 elektron valensi** $\\rightarrow$ **Golongan IA** (Kolom 1, yaitu Natrium $\\ce{Na}$).
2. **Identifikasi Unsur $Q$:**
   - $IE_1 = 738, IE_2 = 1.451 \\to IE_3 = 7.733\\text{ kJ/mol}$ (Lonjakan drastis sebesar $\\frac{7733}{1451} \\approx 5.3\\text{ kali}$).
   - Unsur $Q$ memiliki **2 elektron valensi** $\\rightarrow$ **Golongan IIA** (Kolom 2, yaitu Magnesium $\\ce{Mg}$).
3. **Identifikasi Unsur $R$:**
   - $IE_1 = 578, IE_2 = 1.817, IE_3 = 2.745 \\to IE_4 = 11.577\\text{ kJ/mol}$ (Lonjakan drastis sebesar $\\frac{11577}{2745} \\approx 4.2\\text{ kali}$).
   - Unsur $R$ memiliki **3 elektron valensi** $\\rightarrow$ **Golongan IIIA** (Kolom 13, yaitu Aluminium $\\ce{Al}$).

##### 2. Rasionalisasi Anomali $IE_1(Q) > IE_1(R)$:
- Konfigurasi $Q$ ($\\ce{_{12}Mg}$): $[Ne] \\mathbf{3s^2}$ (Subkulit $3s$ **penuh dan simetris**, elektron penetrasi kuat ke inti).
- Konfigurasi $R$ ($\\ce{_{13}Al}$): $[Ne] 3s^2 \\mathbf{3p^1}$ (Elektron terluar berada pada subkulit $3p$ dengan tingkat energi lebih tinggi dan terperisai oleh pasangan $3s^2$).
- Oleh karena itu, melepaskan satu elektron dari $3p^1$ pada Aluminium membutuhkan energi lebih sedikit ($578\\text{ kJ/mol}$) daripada melepaskan elektron dari subkulit $3s^2$ yang stabil pada Magnesium ($738\\text{ kJ/mol}$).

---

##### Penyelesaian Bagian B (Deret Isoelektronik):
Seluruh spesi memiliki konfigurasi elektron identik dengan gas mulia Neon ($10\\text{ elektron}$):
- $\\ce{_{13}Al^3+}$: $13\\text{ proton}, 10\\text{ elektron}$
- $\\ce{_{12}Mg^2+}$: $12\\text{ proton}, 10\\text{ elektron}$
- $\\ce{_{11}Na+}$: $11\\text{ proton}, 10\\text{ elektron}$
- $\\ce{_{9}F-}$: $9\\text{ proton}, 10\\text{ elektron}$
- $\\ce{_{8}O^2-}$: $8\\text{ proton}, 10\\text{ elektron}$
- $\\ce{_{7}N^3-}$: $7\\text{ proton}, 10\\text{ elektron}$

Karena jumlah elektron dan perisai antar-elektron sama persis, besarnya tarikan inti semata-mata ditentukan oleh **jumlah proton ($Z$)**:
$$Z_{\\text{eff}}(\\ce{Al^3+}) > Z_{\\text{eff}}(\\ce{Mg^2+}) > Z_{\\text{eff}}(\\ce{Na+}) > Z_{\\text{eff}}(\\ce{F-}) > Z_{\\text{eff}}(\\ce{O^2-}) > Z_{\\text{eff}}(\\ce{N^3-})$$

Makin besar tarikan inti, awan elektron ditarik makin merapat ke pusat sehingga ukuran ion makin kecil. Urutan kenaikan jari-jari (dari yang terkecil ke terbesar):
$$\\mathbf{\\ce{Al^3+} < \\ce{Mg^2+} < \\ce{Na+} < \\ce{F-} < \\ce{O^2-} < \\ce{N^3-}}$$

---

> [!NOTE]
> ### ⚖️ Kesimpulan Evaluator Juri (Insight OSN)
> Soal deret isoelektronik adalah lumbung poin termudah di olimpiade kimia jika Anda memegang satu kaidah emas: **"Jumlah elektron sama, proton paling banyak ukurannya paling kerdil; proton paling sedikit ukurannya paling raksasa."** Ion $\\ce{Al^3+}$ dengan 13 proton mencengkeram 10 elektronnya dengan sangat kuat, sementara 7 proton pada $\\ce{N^3-}$ kewalahan menahan tolakan 10 elektronnya sehingga awan elektron mengembang maksimal.`,
      keyFormulas: [
        { name: 'Kaidah Lonjakan Energi Ionisasi', formula: '\\frac{IE_{k+1}}{IE_k} \\gg 1 \\implies \\text{Elektron Valensi} = k' },
        { name: 'Perbandingan Ukuran Deret Isoelektronik', formula: 'r \\propto \\frac{1}{Z}' },
      ],
    },
  ],
},

  {
  id: 103,
  topic_number: 3,
  grade: 'Kelas 10',
  semester: 1,
  curriculumPhase: 'Fase E',
  relatedOsnTopicId: 2,
  title: 'Ikatan Kimia, Geometri Molekul & Gaya Antarmolekul',
  slug: 'ikatan-kimia-geometri-molekul-gaya-antarmolekul',
  category: 'Ikatan Kimia',
  level: 'SMA',
  readTimeMinutes: 35,
  summary: 'Kajian komprehensif stabilitas konfigurasi elektron gas mulia (kaidah oktet & duplet), pembentukan ikatan ion melalui serah-terima elektron dan energi kisi kristal, ikatan kovalen tunggal/rangkap/koordinasi serta pengecualian kaidah oktet, prediksi geometri ruang molekul berdasarkan teori VSEPR & domain elektron, analisis momen dipol dan kepolaran senyawa, model lautan elektron pada ikatan logam, serta hierarki kekuatan gaya Van der Waals dan fenomena anomali ikatan hidrogen.',
  allTags: [
      'kaidah-oktet-dan-duplet',
      'simbol-titik-lewis',
      'ikatan-ion',
      'energi-kisi-kristal',
      'ikatan-kovalen-tunggal-rangkap',
      'ikatan-kovalen-koordinasi',
      'pengecualian-kaidah-oktet',
      'teori-vsepr',
      'domain-elektron',
      'geometri-molekul',
      'sudut-ikatan-dan-distorsi',
      'momen-dipol',
      'senyawa-polar-dan-nonpolar',
      'ikatan-logam',
      'model-lautan-elektron',
      'gaya-van-der-waals',
      'gaya-dispersi-london',
      'interaksi-dipol-dipol',
      'ikatan-hidrogen',
      'anomali-titik-didih-air',
      'transfer-elektron',
      'kaidah-oktet',
      'senyawa-biner',
      'ikatan-kovalen',
      'struktur-lewis',
      'pasangan-elektron-bebas',
      'pasangan-elektron-ikatan',
      'amonia',
      'vsepr',
      'ikatan-datif',
      'asam-basa-lewis',
      'ion-hidronium',
      'pengecualian-oktet',
      'sub-oktet',
      'asam-lewis',
      'sudut-ikatan',
      'tetrahedral',
      'bengkok-bent',
      'muatan-formal',
      'resonansi-struktur',
      'tiosianat',
      'elektronegativitas',
      'kontributor-mayor',
      'kepolaran-ikatan',
      'simetri-molekul',
      'vektor-dipol',
      'hibridisasi-orbital',
      'ikatan-sigma-pi',
      'akrilonitril',
      'aturan-bent',
      'sf4-seesaw',
      'posisi-ekuatorial-aksial',
      'tolakan-peb',
      'gaya-antarmolekul',
      'titik-didih',
      'anomali-air',
      'stoikiometri-ikatan',
      'dinitrogen-monoksida',
      'aturan-oktet',
      'clf3-t-shape',
      'sudut-ikatan-terdistorsi',
      'posisi-ekuatorial',
      'karakter-s',
      'panjang-ikatan',
      'keasaman-hidrokarbon',
      'intramolekul-vs-intermolekul',
      'nitrofenol',
      'kelarutan',
      'senyawa-gas-mulia',
      'xef4-square-planar',
      'oktet-diperluas',
      'momen-dipol-nol',
      'hibridisasi-sp3d2',
      'teori-orbital-molekul-mot',
      'orde-ikatan',
      'paramagnetik',
      'diamagnetik',
      'deret-spesi-oksigen',
      'karbon-monoksida-co',
      'homo-lumo',
      'ligan-logam-karbonil',
      'diatomik-heteronuklir',
      'bents-rule',
      'pf3cl2',
      'panjang-ikatan-aksial-ekuatorial',
      'hibridisasi-sp3d',
      'siklus-born-haber',
      'energi-kisi',
      'hukum-hess',
      'mgcl2',
      'termodinamika-ionik',
      'vsepr-eksotis',
      'xef5-pentagonal-planar',
      'bilangan-sterik-7',
      'hibridisasi-sp3d3',
      'sp-mixing',
      'n2-dan-no+',
      'energi-ionisasi-molekul',
      'halometana',
      'sudut-ikatan-riil',
      'redistribusi-karakter-s',
      'persamaan-kapustinskii',
      'afinitas-elektron-kedua',
      'kalsium-oksida',
      'if7-pentagonal-bipyramidal',
      'panjang-ikatan-anomali',
      'crowding-sterik',
      'delokalisasi-pi',
      'orde-ikatan-parsial',
      'muatan-parsial',
      'nitrat-dan-karbonat',
    ],
  prerequisites: [
    {
      tag: 'elektron-valensi-dan-kaidah-oktet',
      tags: ['elektron-valensi', 'kestabilan-gas-mulia', 'kaidah-oktet-duplet', 'simbol-lewis'],
      title: 'Prasyarat 1: Kestabilan Gas Mulia, Kaidah Oktet-Duplet & Simbol Titik Lewis',
      summary: 'Konsep dasar konfigurasi elektron kulit terluar yang mendorong atom-atom membentuk ikatan kimia stabil.',
      content: `Kecuali unsur-unsur Gas Mulia (Golongan VIIIA), sebagian besar atom di alam tidak berada dalam wujud atom tunggal bebas yang terisolasi, melainkan saling berikatan membentuk molekul unsur atau senyawa kimia.

### 1. Hakikat Termodinamika Kestabilan Gas Mulia

Unsur-unsur Gas Mulia ($\\ce{He}, \\ce{Ne}, \\ce{Ar}, \\ce{Kr}, \\ce{Xe}, \\ce{Rn}$) memiliki energi ionisasi yang sangat tinggi dan afinitas elektron mendekati nol atau positif. Hal ini menyebabkan gas mulia bersifat **sangat stabil (inert)** dan sukar bereaksi secara kimiawi karena telah memiliki kulit valensi yang terisi penuh (*closed valence shell*):
- **Helium ($\\ce{_{2}He}$):** $1s^2$ (memiliki $2$ elektron valensi, konfigurasi **Duplet** stabil).
- **Neon hingga Radon:** $ns^2 np^6$ (memiliki tepat $8$ elektron valensi, konfigurasi **Oktet** stabil).

---

### 2. Postulat Kaidah Oktet & Duplet G.N. Lewis

Pada tahun 1916, Gilbert N. Lewis dan Irving Langmuir memformulasikan aturan fundamental pembentukan ikatan kimia:
1. **Kaidah Oktet (*Octet Rule*):**
   Atom-atom unsur cenderung menyesuaikan jumlah elektron valensinya agar berjumlah **delapan elektron** seperti konfigurasi gas mulia terdekat.
2. **Kaidah Duplet (*Duplet Rule*):**
   Atom-atom berukuran kecil dengan nomor atom rendah (seperti $\\ce{H}, \\ce{Li}, \\ce{Be}$) cenderung mencapai kestabilan dengan memiliki **dua elektron** pada kulit terluarnya, menyerupai konfigurasi Helium ($1s^2$).

Atom-atom dapat mencapai konfigurasi oktet atau duplet melalui dua mekanisme utama:
- **Pelepasan atau penangkapan elektron** (serah-terima elektron) yang menghasilkan **Ikatan Ionik**.
- **Pemakaian bersama pasangan elektron** antar atom yang menghasilkan **Ikatan Kovalen**.

---

### 3. Simbol Titik Lewis (*Lewis Dot Symbols*)

Simbol Lewis adalah representasi grafis di mana elektron valensi suatu atom digambarkan sebagai titik ($\\bullet$) atau silang ($\\times$) yang mengelilingi simbol kimia unsur:
- Elektron diletakkan satu per satu pada keempat sisi simbol unsur (atas, bawah, kanan, kiri) sebelum dipasangkan, mencerminkan aturan Hund.
- Contoh:
  - Golongan IA ($\\ce{Na\\cdot}$): $1$ elektron valensi.
  - Golongan IIA ($\\ce{\\cdot Mg\\cdot}$): $2$ elektron valensi.
  - Golongan IVA ($\\ce{\\cdot \\overset{\\cdot}{\\underset{\\cdot}{C}} \\cdot}$): $4$ elektron valensi tunggal.
  - Golongan VIIA ($:\\!\\ce{\\overset{\\cdot\\cdot}{\\underset{\\cdot\\cdot}{Cl}}}\\cdot$): $7$ elektron valensi (3 pasang berpasangan, 1 elektron tunggal siap berikatan).`,
      keyFormulas: [
        { name: 'Kaidah Konfigurasi Oktet Gas Mulia', formula: 'ns^2 np^6 \\quad (\\text{Total } 8\\text{ elektron valensi})' },
        { name: 'Kaidah Konfigurasi Duplet Helium', formula: '1s^2 \\quad (\\text{Total } 2\\text{ elektron valensi})' },
      ],
    },
    {
      tag: 'elektronegativitas-dan-karakter-ikatan',
      tags: ['elektronegativitas-pauling', 'selisih-elektronegativitas', 'spektrum-karakter-ikatan'],
      title: 'Prasyarat 2: Skala Elektronegativitas Pauling & Spektrum Kontinum Karakter Ikatan',
      summary: 'Peran perbedaan kemampuan menarik elektron dalam menentukan kecenderungan ikatan ionik vs kovalen polar vs kovalen nonpolar.',
      content: `Karakter suatu ikatan kimia tidak terbagi secara kaku (hitam-putih) antara ionik murni dan kovalen murni, melainkan merupakan sebuah **spektrum kontinum** yang dikendalikan oleh selisih keelektronegatifan ($\\Delta EN$) antara kedua atom yang berikatan.

### 1. Skala Keelektronegatifan Linus Pauling

Keelektronegatifan adalah ukuran kemampuan relatif suatu atom dalam suatu molekul untuk menarik pasangan elektron ikatan ke arah dirinya.
- Unsur paling elektronegatif di alam semesta adalah **Fluorin ($\\ce{F} = 3.98 \\approx 4.0$)**, disusul Oksigen ($\\ce{O} = 3.44$), Klorin ($\\ce{Cl} = 3.16$), dan Nitrogen ($\\ce{N} = 3.04$).
- Unsur paling elektropositif (keelektronegatifan terendah) adalah **Cesium ($\\ce{Cs} = 0.79$)** dan **Fransium ($\\ce{Fr} = 0.7$)**.

---

### 2. Kriteria Selisih Keelektronegatifan ($\\Delta EN = |EN_A - EN_B|$)

1. **Ikatan Kovalen Nonpolar (Murni):**
   - $\\Delta EN \\le 0.4$
   - Pasangan elektron ikatan ditarik sama kuat secara simetris oleh kedua inti atom.
   - Contoh: $\\ce{Cl2}$ ($\\Delta EN = 0$), $\\ce{CH4}$ ($\\Delta EN = 2.55 - 2.20 = 0.35$).
2. **Ikatan Kovalen Polar:**
   - $0.4 < \\Delta EN \\le 1.7$
   - Pasangan elektron ikatan tertarik lebih condong ke atom yang lebih elektronegatif, menimbulkan pemisahan muatan parsial: kutub negatif parsial ($\\delta^-$) dan kutub positif parsial ($\\delta^+$).
   - Contoh: $\\ce{HCl}$ ($\\Delta EN = 3.16 - 2.20 = 0.96$), $\\ce{H2O}$ ($\\Delta EN = 3.44 - 2.20 = 1.24$).
3. **Ikatan Ionik (Elektrovalen):**
   - $\\Delta EN > 1.7$
   - Selisih tarikan sangat ekstrem sehingga terjadi transfer elektron penuh (ionisasi sempurna) dari atom elektropositif ke atom elektronegatif. Karakter ionik ikatan melampaui $50\\%$.
   - Contoh: $\\ce{NaCl}$ ($\\Delta EN = 3.16 - 0.93 = 2.23$), $\\ce{KF}$ ($\\Delta EN = 3.98 - 0.82 = 3.16$).`,
      keyFormulas: [
        { name: 'Selisih Keelektronegatifan', formula: '\\Delta EN = |EN_A - EN_B|' },
        { name: 'Persen Karakter Ionik Hannay-Smyth', formula: '\\% \\text{ Karakter Ionik} = 16 |\\Delta EN| + 3.5 (|\\Delta EN|)^2' },
      ],
    },
  ],
  core_concepts: [
    {
      tag: 'ikatan-ion-dan-energi-kisi',
      tags: ['ikatan-ion', 'transfer-elektron', 'energi-kisi', 'kisi-kristal-nacl', 'siklus-born-haber', 'sifat-senyawa-ion'],
      title: 'Konsep Inti 1: Ikatan Ion (Elektrovalen), Energi Kisi Kristal & Sifat Fisik Senyawa Ionik',
      summary: 'Mekanisme transfer elektron antarlogam dan nonlogam, stabilitas kisi kristal tiga dimensi, serta penjelasan sifat titik leleh tinggi dan kerapuhan kristal.',
      content: `Ikatan ion terbentuk akibat gaya tarik-menarik elektrostatik (Gaya Coulomb) yang sangat kuat antara kation (ion bermuatan positif) dan anion (ion bermuatan negatif).

### 1. Mekanisme Pembentukan Ikatan Ion

Ikatan ion secara klasik terjadi antara:
- **Atom Logam (Golongan IA, IIA, sebagian transisi):** Memiliki energi ionisasi rendah sehingga mudah **melepaskan elektron** valensinya membentuk kation stabil berkonfigurasi gas mulia:
  $$\\ce{Na ([Ne] 3s^1) -> Na+ ([Ne]) + e-}$$
- **Atom Nonlogam (Golongan VIA, VIIA):** Memiliki afinitas elektron tinggi dan sangat elektronegatif sehingga mudah **menangkap elektron** tersebut membentuk anion berkonfigurasi gas mulia:
  $$\\ce{Cl ([Ne] 3s^2 3p^5) + e- -> Cl- ([Ne] 3s^2 3p^6 = [Ar])}$$

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 300" width="100%" height="auto" class="max-w-[780px] select-none font-sans">
  <defs>
    <linearGradient id="ionGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#eff6ff"/>
      <stop offset="100%" stop-color="#dbeafe"/>
    </linearGradient>
    <linearGradient id="covGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ecfdf5"/>
      <stop offset="100%" stop-color="#d1fae5"/>
    </linearGradient>
    <marker id="arrowGold" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="#d97706"/>
    </marker>
    <filter id="shadowBox" x="-5%" y="-5%" width="110%" height="115%" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.08"/>
    </filter>
  </defs>

  <!-- PANEL KIRI: IKATAN IONIK -->
  <g transform="translate(10, 10)">
    <rect width="365" height="280" rx="16" fill="url(#ionGrad1)" stroke="#bfdbfe" stroke-width="1.5" filter="url(#shadowBox)"/>
    <rect x="16" y="14" width="140" height="22" rx="6" fill="#2563eb"/>
    <text x="86" y="29" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">1. IKATAN IONIK</text>
    <text x="182" y="52" font-size="12" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Serah-Terima Elektron: Na + Cl → [Na]⁺ + [Cl]⁻</text>

    <!-- Atom Na -->
    <g transform="translate(65, 125)">
      <circle r="42" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5" stroke-dasharray="3 2"/>
      <circle r="28" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5"/>
      <circle r="15" fill="#3b82f6"/>
      <text x="0" y="4" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">Na</text>
      <text x="0" y="58" font-size="10" font-weight="semibold" fill="#1e40af" text-anchor="middle">Atom Na (2, 8, 1)</text>
      <!-- Valensi e- -->
      <circle cx="42" cy="0" r="5" fill="#f59e0b" stroke="#b45309" stroke-width="1.5"/>
      <text x="42" y="-9" font-size="9" font-weight="bold" fill="#b45309" text-anchor="middle">1e⁻</text>
    </g>

    <!-- Panah Transfer Elektron -->
    <path d="M 112 125 C 135 75, 165 75, 185 110" fill="none" stroke="#d97706" stroke-width="2.5" stroke-dasharray="4 3" marker-end="url(#arrowGold)"/>
    <text x="148" y="70" font-size="10" font-weight="bold" fill="#b45309" text-anchor="middle">Transfer e⁻</text>

    <!-- Atom Cl -->
    <g transform="translate(230, 125)">
      <circle r="46" fill="#ffffff" stroke="#86efac" stroke-width="1.5" stroke-dasharray="3 2"/>
      <circle r="32" fill="#ffffff" stroke="#86efac" stroke-width="1.5"/>
      <circle r="18" fill="#10b981"/>
      <text x="0" y="4" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">Cl</text>
      <text x="0" y="62" font-size="10" font-weight="semibold" fill="#065f46" text-anchor="middle">Atom Cl (2, 8, 7)</text>
      <!-- Elektron valensi Cl -->
      <circle cx="-46" cy="0" r="4" fill="#10b981"/>
      <circle cx="0" cy="-46" r="4" fill="#10b981"/>
      <circle cx="0" cy="46" r="4" fill="#10b981"/>
      <circle cx="46" cy="0" r="4" fill="#10b981"/>
      <circle cx="32" cy="-32" r="4" fill="#10b981"/>
      <circle cx="32" cy="32" r="4" fill="#10b981"/>
      <circle cx="-32" cy="32" r="4" fill="#10b981"/>
    </g>

    <!-- Hasil: Kisi & Gaya Coulomb -->
    <rect x="20" y="215" width="325" height="50" rx="8" fill="#ffffff" stroke="#93c5fd" stroke-width="1"/>
    <text x="182" y="234" font-size="11" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Gaya Coulomb: F = k · (|q₁ · q₂|) / r²</text>
    <text x="182" y="252" font-size="10" fill="#475569" text-anchor="middle">Membentuk kation Na⁺ kecil & anion Cl⁻ besar terkemas rapat</text>
  </g>

  <!-- PANEL KANAN: IKATAN KOVALEN -->
  <g transform="translate(395, 10)">
    <rect width="375" height="280" rx="16" fill="url(#covGrad1)" stroke="#a7f3d0" stroke-width="1.5" filter="url(#shadowBox)"/>
    <rect x="16" y="14" width="155" height="22" rx="6" fill="#059669"/>
    <text x="93" y="29" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">2. IKATAN KOVALEN</text>
    <text x="187" y="52" font-size="12" font-weight="bold" fill="#064e3b" text-anchor="middle">Pemakaian Bersama Elektron: Cl + Cl → Cl₂</text>

    <!-- Overlapping Cl2 molecule -->
    <g transform="translate(187, 125)">
      <!-- Lingkaran Luar Atom Kiri & Kanan -->
      <circle cx="-42" cy="0" r="52" fill="#3b82f6" fill-opacity="0.1" stroke="#3b82f6" stroke-width="1.5"/>
      <circle cx="42" cy="0" r="52" fill="#10b981" fill-opacity="0.1" stroke="#10b981" stroke-width="1.5"/>

      <!-- Daerah Overlap -->
      <ellipse cx="0" cy="0" rx="18" ry="34" fill="#fef08a" fill-opacity="0.55" stroke="#eab308" stroke-width="1.5"/>

      <!-- Inti Kiri & Kanan -->
      <circle cx="-42" cy="0" r="18" fill="#2563eb"/>
      <text x="-42" y="4" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">Cl</text>
      <circle cx="42" cy="0" r="18" fill="#059669"/>
      <text x="42" y="4" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">Cl</text>

      <!-- Pasangan Elektron Bersama di Tengah (PEI) -->
      <circle cx="0" cy="-10" r="4.5" fill="#2563eb"/>
      <circle cx="0" cy="10" r="4.5" fill="#059669"/>

      <text x="0" y="-45" font-size="10" font-weight="bold" fill="#854d0e" text-anchor="middle">PEI (Shared Pair)</text>
      <path d="M 0 -38 L 0 -22" stroke="#854d0e" stroke-width="1.2" marker-end="url(#arrowGold)"/>

      <text x="-42" y="68" font-size="10" font-weight="semibold" fill="#1e40af" text-anchor="middle">3 Pasang PEB</text>
      <text x="42" y="68" font-size="10" font-weight="semibold" fill="#065f46" text-anchor="middle">3 Pasang PEB</text>
    </g>

    <!-- Keterangan Bawah -->
    <rect x="20" y="215" width="335" height="50" rx="8" fill="#ffffff" stroke="#a7f3d0" stroke-width="1"/>
    <text x="187" y="234" font-size="11" font-weight="bold" fill="#065f46" text-anchor="middle">Kerapatan Awan Elektron Terpusat di Antara 2 Inti</text>
    <text x="187" y="252" font-size="10" fill="#475569" text-anchor="middle">Kedua atom mencapai konfigurasi oktet stabil (8 elektron)</text>
  </g>
</svg>

---

### 2. Energi Kisi Kristal (*Lattice Energy*, $U$)

Senyawa ionik tidak membentuk molekul individual diskret $\\ce{NaCl}$, melainkan membentuk **kisi kristal tiga dimensi raksasa (*crystalline lattice*)** di mana setiap kation $\\ce{Na+}$ dikelilingi oleh $6$ anion $\\ce{Cl-}$ (koordinasi oktahedral $6:6$), dan setiap anion dikelilingi oleh $6$ kation.

**Energi Kisi ($U$):** Energi yang dilepaskan ketika satu mol senyawa ionik padat terbentuk dari ion-ion penyusunnya dalam wujud gas pada kondisi standar:
$$\\ce{Na+(g) + Cl-(g) -> NaCl(s)} \\quad \\Delta H = U \\quad (U = -787\\text{ kJ/mol})$$

Berdasarkan formulasi elektrostatik Born-Landé:
$$U \\propto -\\frac{|z_+ \\cdot z_-|}{r_0}$$
- $z_+$ dan $z_-$ = muatan kation dan anion.
- $r_0$ = jarak antarpusat kation-anion ($r_0 = r_+ + r_-$).

> [!IMPORTANT]
> **Faktor Dominan Penentu Kekuatan Ikatan Ion:**  
> 1. **Besar muatan ion:** Pengaruh kuadratis muatan jauh lebih dominan daripada ukuran jari-jari. Senyawa dengan ion bervalensi dua (seperti $\\ce{MgO}$, di mana $z_+ = +2, z_- = -2$, hasil kali muatan $= 4$) memiliki energi kisi sekitar **4 kali lipat** lebih besar ($U \\approx -3791\\text{ kJ/mol}$) dan titik leleh jauh lebih tinggi ($2852^\\circ\\text{C}$) dibandingkan $\\ce{NaCl}$ ($z_+ = +1, z_- = -1$, titik leleh $801^\\circ\\text{C}$).
> 2. **Jari-jari ion:** Makin kecil jari-jari ion, jarak $r_0$ makin pendek, sehingga gaya Coulomb dan energi kisi makin kuat: $U(\\ce{LiF}) > U(\\ce{NaCl}) > U(\\ce{KBr})$.

---

### 3. Karakteristik Fisik Khas Senyawa Ionik

1. **Titik Leleh dan Titik Didih Sangat Tinggi:**
   Dibutuhkan energi termal yang sangat masif untuk mengatasi gaya tarik elektrostatik kisi kristal tiga dimensi di seluruh orientasi ruang.
2. **Keras Namun Getas / Rapuh (*Hard but Brittle*):**
   Kristal ionik sangat tahan terhadap tekanan tegak lurus langsung. Namun apabila dipukul dengan palu atau dikenai gaya geser (*shear stress*), satu lapisan ion akan bergeser sejauh satu jari-jari ion. Akibatnya, ion-ion bermuatan sejenis akan berhadapan secara langsung ($\\ce{Na+}$ berhadapan dengan $\\ce{Na+}$, $\\ce{Cl-}$ berhadapan dengan $\\ce{Cl-}$), memicu **gaya tolak elektrostatik raksasa yang memecah kristal seketika**.
3. **Daya Hantar Listrik (Konduktivitas):**
   - **Wujud Padat:** *Isolator listrik total*, karena ion-ion terkunci kaku pada titik kisi kristal dan tidak dapat bergerak bebas mengalirkan muatan.
   - **Wujud Lelehan (*Molten*) & Larutan (*Aqueous*):** *Konduktor listrik sangat baik (Elektrolit Kuat)*, karena kisi kristal terurai dan ion-ion terdisosiasi bergerak bebas (*mobile charge carriers*).`,
      keyFormulas: [
        { name: 'Hukum Coulomb Gaya Elektrostatik', formula: 'F = k \\frac{|q_1 \\cdot q_2|}{r^2}' },
        { name: 'Ketergantungan Energi Kisi Kristal', formula: 'U \\propto \\frac{|z_+ \\cdot z_-|}{r_+ + r_-}' },
      ],
    },
    {
      tag: 'ikatan-kovalen-dan-kovalen-koordinasi',
      tags: ['ikatan-kovalen', 'kovalen-tunggal-rangkap', 'ikatan-sigma-pi', 'kovalen-koordinasi', 'datif', 'pengecualian-oktet'],
      title: 'Konsep Inti 2: Ikatan Kovalen, Kovalen Koordinasi (Datif) & Anomali Pengecualian Kaidah Oktet',
      summary: 'Tumpang tindih orbital sigma dan pi, ikatan donor-akseptor elektron bebas, serta fenomena oktet tak lengkap, radikal bebas, dan superoktet.',
      content: `Ikatan kovalen terbentuk akibat gaya tarik elektrostatik simultan antara dua inti atom positif terhadap pasangan elektron yang digunakan bersama di daerah antarnukleus (*internuclear region*).

### 1. Mekanisme Pembentukan Ikatan Kovalen & Kurva Energi Potensial

Pembentukan ikatan kovalen antara dua atom (seperti dua atom hidrogen, $\\ce{H + H -> H2}$) melibatkan kompetisi dinamis antara gaya tarik dan gaya tolak elektrostatik seiring perubahan jarak antarinti ($r$).

#### A. Dinamika Dua Gaya yang Berkompetisi:
1. **Gaya Tarik Elektrostatik ($F_{\\text{tarik}}$):**
   - Tarikan antara inti atom A (bermuatan $+1$) terhadap elektron atom B (bermuatan $-1$).
   - Tarikan antara inti atom B terhadap elektron atom A.
2. **Gaya Tolak Elektrostatik ($F_{\\text{tolak}}$):**
   - Tolakan antara elektron atom A dengan elektron atom B (tolakan sesama muatan negatif).
   - Tolakan antara inti atom A dengan inti atom B (tolakan sesama muatan positif).

#### B. Analisis Kurva Energi Potensial (Kurva Morse $\\ce{H2}$):

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 820 380" width="100%" height="auto" class="max-w-[820px] select-none font-sans">
  <defs>
    <linearGradient id="curveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#0284c7"/>
    </linearGradient>
    <radialGradient id="hAtom" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#93c5fd"/>
      <stop offset="60%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#1d4ed8"/>
    </radialGradient>
    <marker id="arrowEp" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#0284c7"/>
    </marker>
    <marker id="arrowDist" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#16a34a"/>
    </marker>
  </defs>

  <!-- BACKGROUND -->
  <rect width="820" height="380" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>

  <!-- HEADER -->
  <text x="410" y="26" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">KURVA ENERGI POTENSIAL PEMBENTUKAN IKATAN KOVALEN (H₂)</text>
  <text x="410" y="44" font-size="10.5" fill="#64748b" text-anchor="middle">Keseimbangan Termodinamika antara Gaya Tarik Inti-Elektron dan Gaya Tolak Inti-Inti</text>

  <!-- AREA GRAFIK UTAMA -->
  <!-- Sumbu Koordinat: Asal (X=90, Y=170) -> Ep = 0 -->
  <g transform="translate(10, 20)">
    <!-- Garis Sumbu Ep = 0 -->
    <line x1="90" y1="150" x2="520" y2="150" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
    <text x="82" y="154" font-size="10" font-weight="bold" fill="#64748b" text-anchor="end">Ep = 0</text>

    <!-- Sumbu Y: Energi Potensial -->
    <line x1="90" y1="50" x2="90" y2="310" stroke="#334155" stroke-width="2"/>
    <path d="M 90 44 L 86 52 L 94 52 z" fill="#334155"/>
    <text x="85" y="42" font-size="10.5" font-weight="bold" fill="#334155" text-anchor="end">Energi Potensial (kJ/mol)</text>

    <!-- Sumbu X: Jarak Antarinti r -->
    <line x1="90" y1="310" x2="540" y2="310" stroke="#334155" stroke-width="2"/>
    <path d="M 546 310 L 538 306 L 538 314 z" fill="#334155"/>
    <text x="535" y="328" font-size="10.5" font-weight="bold" fill="#334155" text-anchor="end">Jarak Antarinti r (pm)</text>

    <!-- Label Skala Y -->
    <text x="82" y="80" font-size="9" fill="#dc2626" text-anchor="end">+400</text>
    <line x1="86" y1="76" x2="94" y2="76" stroke="#94a3b8" stroke-width="1"/>
    <text x="82" y="278" font-size="9" font-weight="bold" fill="#0284c7" text-anchor="end">-436</text>
    <line x1="86" y1="274" x2="94" y2="274" stroke="#0284c7" stroke-width="1.5"/>

    <!-- Label Skala X: r = 74 pm -->
    <line x1="220" y1="306" x2="220" y2="314" stroke="#16a34a" stroke-width="1.5"/>
    <text x="220" y="328" font-size="10" font-weight="bold" fill="#16a34a" text-anchor="middle">74 pm</text>

    <!-- KURVA ENERGI POTENSIAL (Smooth Bezier) -->
    <!-- Turun dari (120, 60) menembus Ep=0 di (150, 150) -> palung di (220, 274) -> naik ke (340, 165) -> (500, 152) -->
    <path d="M 115 55 C 122 120, 138 210, 160 250 C 180 285, 205 274, 220 274 C 245 274, 280 230, 330 185 C 380 160, 440 152, 510 150" fill="none" stroke="#0284c7" stroke-width="3.5" stroke-linecap="round"/>

    <!-- TITIK PALUNG MINIMUM: r = 74 pm, Ep = -436 kJ/mol -->
    <circle cx="220" cy="274" r="6" fill="#0284c7" stroke="#ffffff" stroke-width="2"/>
    <line x1="90" y1="274" x2="220" y2="274" stroke="#0284c7" stroke-width="1.2" stroke-dasharray="3 2"/>
    <line x1="220" y1="150" x2="220" y2="310" stroke="#16a34a" stroke-width="1.2" stroke-dasharray="3 2"/>

    <!-- PANAH ENERGI IKATAN (De = 436 kJ/mol) -->
    <line x1="260" y1="150" x2="260" y2="274" stroke="#0284c7" stroke-width="2" marker-start="url(#arrowEp)" marker-end="url(#arrowEp)"/>
    <rect x="270" y="200" width="130" height="24" rx="5" fill="#ffffff" stroke="#bae6fd" stroke-width="1"/>
    <text x="335" y="216" font-size="9.5" font-weight="bold" fill="#0284c7" text-anchor="middle">Energi Ikatan: 436 kJ/mol</text>

    <!-- PANAH PANJANG IKATAN (r0 = 74 pm) -->
    <line x1="90" y1="290" x2="220" y2="290" stroke="#16a34a" stroke-width="2" marker-start="url(#arrowDist)" marker-end="url(#arrowDist)"/>
    <text x="155" y="285" font-size="9" font-weight="bold" fill="#16a34a" text-anchor="middle">Panjang Ikatan (r₀)</text>
  </g>

  <!-- ILUSTRASI 3 TAHAP MEKANISME (KARTU KANAN) -->
  <g transform="translate(560, 60)">
    <rect width="245" height="295" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
    <text x="122" y="20" font-size="11" font-weight="bold" fill="#1e293b" text-anchor="middle">3 TAHAPAN PEMBENTUKAN</text>

    <!-- TAHAP 1: ATOM TERPISAH (r >> 74 pm) -->
    <g transform="translate(15, 32)">
      <rect width="215" height="72" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="10" y="16" font-size="9.5" font-weight="bold" fill="#0369a1">1. Jarak Jauh (r &gt;&gt; r₀)</text>
      <!-- Visual 2 atom terpisah -->
      <circle cx="65" cy="45" r="14" fill="url(#hAtom)"/>
      <text x="65" y="49" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">H</text>
      <circle cx="150" cy="45" r="14" fill="url(#hAtom)"/>
      <text x="150" y="49" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">H</text>
      <text x="107" y="48" font-size="8" fill="#64748b" text-anchor="middle">Tidak Ada Interaksi</text>
      <text x="10" y="66" font-size="8.5" fill="#475569">Ep = 0 kJ/mol (Atom Bebas)</text>
    </g>

    <!-- TAHAP 2: PANJANG IKATAN OPTIMAL (r = 74 pm) -->
    <g transform="translate(15, 114)">
      <rect width="215" height="85" rx="8" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
      <text x="10" y="16" font-size="9.5" font-weight="bold" fill="#15803d">2. Keseimbangan (r = 74 pm)</text>
      <!-- Visual tumpang tindih optimal -->
      <g transform="translate(107, 45)">
        <circle cx="-11" cy="0" r="15" fill="url(#hAtom)" opacity="0.9"/>
        <circle cx="11" cy="0" r="15" fill="url(#hAtom)" opacity="0.9"/>
        <ellipse cx="0" cy="0" rx="7" ry="12" fill="#fef08a" opacity="0.8"/>
        <text x="-11" y="4" font-size="8.5" font-weight="bold" fill="#ffffff" text-anchor="middle">H</text>
        <text x="11" y="4" font-size="8.5" font-weight="bold" fill="#ffffff" text-anchor="middle">H</text>
      </g>
      <text x="107" y="70" font-size="8.5" font-weight="bold" fill="#15803d" text-anchor="middle">F_tarik = F_tolak | Molekul H₂ Stabil</text>
      <text x="107" y="80" font-size="8" fill="#166534" text-anchor="middle">Ep Minimum: -436 kJ/mol</text>
    </g>

    <!-- TAHAP 3: TERLALU DEKAT (r < 74 pm) -->
    <g transform="translate(15, 210)">
      <rect width="215" height="74" rx="8" fill="#fef2f2" stroke="#fca5a5" stroke-width="1"/>
      <text x="10" y="16" font-size="9.5" font-weight="bold" fill="#b91c1c">3. Terlalu Dekat (r &lt; 74 pm)</text>
      <!-- Visual bertabrakan inti -->
      <g transform="translate(107, 42)">
        <circle cx="-5" cy="0" r="15" fill="#ef4444" opacity="0.8"/>
        <circle cx="5" cy="0" r="15" fill="#ef4444" opacity="0.8"/>
        <text x="0" y="4" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">⚡</text>
      </g>
      <text x="107" y="65" font-size="8.5" font-weight="bold" fill="#b91c1c" text-anchor="middle">F_tolak &gt;&gt; F_tarik (Tolakan Inti)</text>
    </g>
  </g>
</svg>

#### C. Tiga Zona Kritis Kurva Energi Potensial:
1. **Zona Jarak Jauh ($r > r_0$):**
   Ketika kedua atom hidrogen saling mendekat dari jarak jauh, gaya tarik elektrostatik antara inti satu atom dengan elektron atom lainnya mulai bekerja mendominasi gaya tolak ($F_{\\text{tarik}} > F_{\\text{tolak}}$). Akibatnya, **energi potensial sistem menurun secara kontinu ($E_p < 0$)**, melepaskan kalor (proses eksotermik) seiring meningkatnya kestabilan sistem.
2. **Zona Keseimbangan Termodinamika ($r = r_0 = 74\\text{ pm}$):**
   Pada jarak antarinti $74\\text{ pm}$ ($0.74\\text{ \\AA}$), gaya tarik elektrostatik inti-elektron tepat mengimbangi gaya tolak inti-inti dan elektron-elektron ($F_{\\text{tarik}} = F_{\\text{tolak}}$).
   - Sistem mencapai **palung energi terendah (energi minimum)** sebesar **$-436\\text{ kJ/mol}$**.
   - **Panjang Ikatan Kovalen ($r_0$):** Jarak antarinti pada titik energi potensial minimum ($74\\text{ pm}$ untuk molekul $\\ce{H2}$).
   - **Energi Ikatan / Energi Disosiasi Ikatan ($D_e$):** Besarnya kedalaman palung energi ($436\\text{ kJ/mol}$), yaitu energi yang harus diserap sistem untuk memisahkan kembali molekul $\\ce{H2}$ menjadi atom-atom bebas netral.
3. **Zona Tolakan Inti ($r < r_0$):**
   Jika kedua atom dipaksa saling mendekat melewati jarak $74\\text{ pm}$, awan elektron saling tumpang tindih berlebihan dan kedua inti atom bermuatan positif saling mendekat. Gaya tolak elektrostatik inti-inti melonjak secara eksponensial ($F_{\\text{tolak}} \\gg F_{\\text{tarik}}$).
   - Energi potensial sistem melesat naik tajam ke nilai positif tinggi ($E_p \\gg 0$), menyebabkan sistem menjadi sangat labil dan kedua atom saling tolak-menolak keras.

---

### 2. Klasifikasi Orde Ikatan Kovalen

Berdasarkan jumlah pasangan elektron ikatan (PEI) yang digunakan bersama:
1. **Ikatan Kovalen Tunggal (Orde Ikatan = 1):**
   - Menggunakan $1$ pasang elektron bersama ($2$ elektron).
   - Terdiri dari **$1$ ikatan $\\sigma$ (sigma)** yang terbentuk dari tumpang tindih langsung ujung-ke-ujung (*head-on overlap*) orbital atom.
   - Memiliki panjang ikatan paling panjang dan energi ikatan paling lemah.
   - Contoh: $\\ce{H-H}$, $\\ce{Cl-Cl}$, $\\ce{H-CH3}$.
2. **Ikatan Kovalen Rangkap Dua (Orde Ikatan = 2):**
   - Menggunakan $2$ pasang elektron bersama ($4$ elektron).
   - Terdiri dari **$1$ ikatan $\\sigma$ + $1$ ikatan $\\pi$ (pi)** yang terbentuk dari tumpang tindih sisi-ke-sisi (*side-by-side overlap*) orbital $p$.
   - Contoh: $\\ce{O=O}$ pada $\\ce{O2}$, $\\ce{O=C=O}$ pada $\\ce{CO2}$, $\\ce{H2C=CH2}$ (etena).
3. **Ikatan Kovalen Rangkap Tiga (Orde Ikatan = 3):**
   - Menggunakan $3$ pasang elektron bersama ($6$ elektron).
   - Terdiri dari **$1$ ikatan $\\sigma$ + $2$ ikatan $\\pi$** yang saling tegak lurus.
   - Memiliki panjang ikatan paling pendek dan energi ikatan paling tinggi (sangat kuat dan inert).
   - Contoh: $\\ce{N\\equiv N}$ pada gas Nitrogen ($D_{\\ce{N\\equiv N}} = 945\\text{ kJ/mol}$, menjelaskan mengapa $\\ce{N2}$ sangat stabil di atmosfer), gas asetilena $\\ce{H-C\\equiv C-H}$.

---

### 3. Ikatan Kovalen Koordinasi (Ikatan Datif / Semipolar)

Ikatan kovalen koordinasi adalah jenis ikatan kovalen di mana **pasangan elektron ikatan yang digunakan bersama hanya disumbangkan secara sepihak oleh salah satu atom (atom donor)**, sedangkan atom mitranya (atom akseptor) hanya menyediakan orbital kosong tanpa menyumbangkan elektron.
- **Syarat Terbentuknya:**
  1. Atom donor wajib memiliki minimal satu **Pasangan Elektron Bebas (PEB)** yang belum berikatan (Basa Lewis).
  2. Atom akseptor memiliki **orbital kosong** yang siap menerima pasangan elektron tersebut (Asam Lewis).
- **Contoh Penting dalam Kimia:**
  1. **Pembentukan Kation Amonium ($\\ce{NH4+}$):**
     Molekul amonia ($\\ce{NH3}$) memiliki 1 PEB pada atom $\\ce{N}$. Ketika bereaksi dengan ion $\\ce{H+}$ (yang tidak memiliki elektron sama sekali, orbital $1s^0$ kosong):
     $$\\ce{H3N:} + \\ce{H+} \\to [\\ce{H3N -> H}]+ \\quad \\text{atau} \\quad [\\ce{NH4}]+$$
  2. **Pembentukan Kation Hidronium ($\\ce{H3O+}$):**
     $$\\ce{H2\\ddot{O}} + \\ce{H+} \\to [\\ce{H2O -> H}]+$$
  3. **Adisi Asam-Basa Lewis Amonia dan Boron Trifluorida:**
     $$\\ce{H3N:} + \\ce{BF3} \\to \\ce{H3N -> BF3}$$
  4. **Molekul Belerang Trioksida ($\\ce{SO3}$):**
     Berdasarkan kaidah oktet formal, atom $\\ce{S}$ berikatan rangkap dua dengan 1 atom $\\ce{O}$ ($\\ce{S=O}$), dan menyumbangkan 2 PEB-nya untuk membentuk **2 ikatan kovalen koordinasi** ke dua atom $\\ce{O}$ lainnya ($\\ce{O <- S(=O) -> O}$).

---

### 4. Tiga Kategori Pengecualian Kaidah Oktet

Meskipun kaidah oktet sangat berguna untuk memprediksi struktur senyawa unsur periode 2, terdapat tiga kelas senyawa yang menyimpang dari kaidah oktet:

1. **Oktet Tak Lengkap (*Incomplete Octet* - Elektron Kurang dari 8):**
   Terjadi pada senyawa kovalen berilium ($\\ce{Be}$), boron ($\\ce{B}$), dan aluminium ($\\ce{Al}$):
   - $\\ce{BeCl2}$: Atom $\\ce{Be}$ hanya dikelilingi oleh **4 elektron valensi** (2 PEI).
   - $\\ce{BF3}$ dan $\\ce{BCl3}$: Atom $\\ce{B}$ hanya dikelilingi oleh **6 elektron valensi** (3 PEI).
   - *Dampak Reaktivitas:* Senyawa dengan oktet tak lengkap sangat reaktif sebagai **Asam Lewis** (akseptor pasangan elektron) yang rakus berikatan dengan spesi kaya elektron.
2. **Molekul Berjumlah Elektron Ganjil (Radikal Bebas / *Odd-Electron Molecules*):**
   Molekul yang total elektron valensinya bernomor ganjil secara matematis mustahil memasangkan seluruh elektronnya menjadi oktet:
   - Nitrogen Monoksida ($\\ce{NO}$): $5 + 6 = 11$ elektron valensi. Atom $\\ce{N}$ memiliki $7$ elektron di sekelilingnya.
   - Nitrogen Dioksida ($\\ce{NO2}$): $5 + 2(6) = 17$ elektron valensi. Berwarna cokelat gas, bersifat paramagnetik dan sangat mudah mendimerisasi menjadi dinitrogen tetraoksida non-radikal:
     $$\\ce{2 NO2 (g) <=> N2O4 (g)}$$
3. **Oktet Berkembang (*Expanded Octet* / Superoktet - Lebih dari 8 Elektron):**
   Hanya dapat terjadi pada atom pusat dari **Periode 3 atau lebih besar** (seperti $\\ce{P}, \\ce{S}, \\ce{Cl}, \\ce{Br}, \\ce{I}, \\ce{Xe}$) karena atom-atom ini memiliki **subkulit $3d$ kosong yang berenergi relatif rendah** sehingga mampu menampung 10, 12, atau 14 elektron valensi:
   - Fosforus Pentaklorida ($\\ce{PCl5}$): Atom pusat $\\ce{P}$ memiliki **10 elektron valensi** (5 PEI).
   - Belerang Heksafluorida ($\\ce{SF6}$): Atom pusat $\\ce{S}$ memiliki **12 elektron valensi** (6 PEI, sangat stabil dan inert).
   - Ksenon Tetrafluorida ($\\ce{XeF4}$): Atom pusat $\\ce{Xe}$ memiliki **12 elektron** (4 PEI + 2 PEB).
   *(Unsur Periode 2 seperti Karbon, Nitrogen, dan Oksigen TIDAK PERNAH mengalami superoktet karena tidak memiliki subkulit $2d$).*`,
      keyFormulas: [
        { name: 'Keseimbangan Termodinamika Ikatan Kovalen', formula: 'r = r_0 \\implies \\left(\\frac{dE_p}{dr}\\right)_{r=r_0} = 0 \\quad (E_p = -D_e)' },
        { name: 'Orde Ikatan Kovalen', formula: '\\text{Orde Ikatan} = \\frac{N_b - N_a}{2}' },
        { name: 'Kapasitas Maksimal Superoktet Periode 3', formula: '\\text{Elektron Kulit Terluar} > 8 \\quad (\\text{Melibatkan orbital } d)' },
      ],
    },
    {
      tag: 'teori-vsepr-dan-geometri-molekul',
      tags: ['teori-vsepr', 'domain-elektron', 'geometri-molekul', 'notasi-axne-m', 'sudut-ikatan', 'distorsi-peb'],
      title: 'Konsep Inti 3: Teori VSEPR, Notasi Domain Elektron & Prediksi Geometri Ruang Molekul',
      summary: 'Kaidah tolakan pasangan elektron Gillespie-Nyholm, perumusan AXnEm, serta penurunan bentuk geometri molekul dari bentuk dasarnya.',
      content: `Bentuk ruang tiga dimensi molekul mengendalikan reaktivitas kimiawi, kepolaran, interaksi dengan reseptor biologis, hingga wujud fisiknya.

### 1. Prinsip Fundamental Teori VSEPR

Teori VSEPR (*Valence Shell Electron Pair Repulsion*) dikembangkan oleh Ronald Gillespie dan Ronald Nyholm:
> *"Pasangan-pasangan elektron valensi (baik pasangan elektron ikatan maupun pasangan elektron bebas) yang mengelilingi atom pusat bermuatan negatif, sehingga mereka akan saling tolak-menolak dan berusaha menempati posisi ruang sejauh mungkin satu sama lain untuk meminimalkan gaya tolak elektrostatik."*

**Hierarki Kekuatan Tolakan Elektron (Gillespie-Nyholm Rule):**
$$\\mathbf{\\text{Tolakan PEB - PEB} > \\text{Tolakan PEB - PEI} > \\text{Tolakan PEI - PEI}}$$
- **Mengapa PEB menolak lebih kuat?** Pasangan Elektron Bebas (PEB) hanya terikat pada satu inti atom, sehingga awan elektronnya lebih menggelembung besar dan menyebar luas di sekitar atom pusat. Sebaliknya, Pasangan Elektron Ikatan (PEI) ditarik oleh dua inti atom sehingga awan elektronnya lebih ramping dan terkurung di antara kedua inti.
- **Akibat Fisik:** Kehadiran PEB akan **menekan sudut ikatan PEI-PEI menjadi lebih sempit** daripada sudut idealnya!

---

### 2. Notasi Domain Elektron ($AX_n E_m$)

Untuk meramalkan bentuk molekul, digunakan notasi:
$$\\mathbf{AX_n E_m}$$
- $\\mathbf{A}$ = Simbol atom pusat.
- $\\mathbf{X}$ = Jumlah atom ligan yang terikat pada atom pusat (sama dengan jumlah Pasangan Elektron Ikatan / PEI). Ikatan tunggal, rangkap dua, maupun rangkap tiga dihitung sebagai **$1$ domain ikatan**.
- $\\mathbf{E}$ = Jumlah Pasangan Elektron Bebas (PEB) yang berada pada kulit valensi atom pusat.
- $\\mathbf{n + m}$ = Jumlah total domain elektron (menentukan **Geometri Domain Elektron Dasar**).

Rumus cepat menghitung PEB ($E$):
$$E = \\frac{EV - (n \\times b)}{2}$$
*(di mana $EV$ = elektron valensi atom pusat, $n$ = jumlah atom ligan terikat, $b$ = valensi kebutuhan elektron ligan: $b=1$ untuk $\\ce{H, F, Cl, Br, I}$; $b=2$ untuk $\\ce{O, S}$; $b=3$ untuk $\\ce{N}$).*

---

### 3. Peta Komparatif 5 Geometri Molekul Kunci

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 330" width="100%" height="auto" class="max-w-[840px] select-none font-sans">
  <defs>
    <radialGradient id="atomCenter" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#93c5fd"/>
      <stop offset="60%" stop-color="#2563eb"/>
      <stop offset="100%" stop-color="#1e3a8a"/>
    </radialGradient>
    <radialGradient id="atomLigand" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#86efac"/>
      <stop offset="60%" stop-color="#10b981"/>
      <stop offset="100%" stop-color="#064e3b"/>
    </radialGradient>
    <radialGradient id="lonePair" cx="40%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="70%" stop-color="#eab308"/>
      <stop offset="100%" stop-color="#ca8a04"/>
    </radialGradient>
  </defs>

  <!-- BACKGROUND CONTAINER -->
  <rect width="840" height="330" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>

  <!-- TITLE -->
  <text x="420" y="28" font-size="14" font-weight="bold" fill="#0f172a" text-anchor="middle">SPEKTRUM GEOMETRI MOLEKUL VSEPR & DISTORSI SUDUT IKATAN</text>
  <text x="420" y="46" font-size="11" fill="#64748b" text-anchor="middle">Pengaruh tolakan awan elektron PEB terhadap penciutan sudut ikatan PEI-PEI</text>

  <!-- CARD 1: LINEAR (AX2) -->
  <g transform="translate(20, 65)">
    <rect width="150" height="200" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
    <rect x="10" y="10" width="130" height="22" rx="6" fill="#3b82f6"/>
    <text x="75" y="25" font-size="10.5" font-weight="bold" fill="#ffffff" text-anchor="middle">Linear (AX₂)</text>
    <!-- Visual 3D -->
    <g transform="translate(75, 95)">
      <!-- Ikatan -->
      <line x1="-50" y1="0" x2="50" y2="0" stroke="#94a3b8" stroke-width="5" stroke-linecap="round"/>
      <!-- Bola Pusat -->
      <circle cx="0" cy="0" r="16" fill="url(#atomCenter)"/>
      <text x="0" y="4" font-size="9.5" font-weight="bold" fill="#ffffff" text-anchor="middle">Be</text>
      <!-- Bola Ligan Kiri & Kanan -->
      <circle cx="-50" cy="0" r="13" fill="url(#atomLigand)"/>
      <text x="-50" y="3" font-size="8.5" font-weight="bold" fill="#ffffff" text-anchor="middle">Cl</text>
      <circle cx="50" cy="0" r="13" fill="url(#atomLigand)"/>
      <text x="50" y="3" font-size="8.5" font-weight="bold" fill="#ffffff" text-anchor="middle">Cl</text>
      <!-- Arc Sudut -->
      <path d="M -22 -14 A 26 26 0 0 1 22 -14" fill="none" stroke="#2563eb" stroke-width="1.5"/>
      <text x="0" y="-28" font-size="10" font-weight="bold" fill="#2563eb" text-anchor="middle">180°</text>
    </g>
    <text x="75" y="162" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">Sudut: 180°</text>
    <text x="75" y="178" font-size="9" fill="#64748b" text-anchor="middle">0 PEB | Nonpolar</text>
    <text x="75" y="192" font-size="8.5" font-style="italic" fill="#0284c7" text-anchor="middle">Contoh: BeCl₂, CO₂</text>
  </g>

  <!-- CARD 2: TRIGONAL PLANAR (AX3) -->
  <g transform="translate(180, 65)">
    <rect width="150" height="200" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
    <rect x="10" y="10" width="130" height="22" rx="6" fill="#0ea5e9"/>
    <text x="75" y="25" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">Trigonal Planar (AX₃)</text>
    <g transform="translate(75, 95)">
      <!-- Ikatan 3 Arah -->
      <line x1="0" y1="0" x2="0" y2="-45" stroke="#94a3b8" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="0" y1="0" x2="-40" y2="28" stroke="#94a3b8" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="0" y1="0" x2="40" y2="28" stroke="#94a3b8" stroke-width="4.5" stroke-linecap="round"/>
      <!-- Bola Pusat -->
      <circle cx="0" cy="0" r="16" fill="url(#atomCenter)"/>
      <text x="0" y="4" font-size="9.5" font-weight="bold" fill="#ffffff" text-anchor="middle">B</text>
      <!-- 3 Ligan -->
      <circle cx="0" cy="-45" r="12" fill="url(#atomLigand)"/>
      <circle cx="-40" cy="28" r="12" fill="url(#atomLigand)"/>
      <circle cx="40" cy="28" r="12" fill="url(#atomLigand)"/>
      <!-- Sudut -->
      <text x="24" y="-12" font-size="9.5" font-weight="bold" fill="#0284c7">120°</text>
    </g>
    <text x="75" y="162" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">Sudut: 120°</text>
    <text x="75" y="178" font-size="9" fill="#64748b" text-anchor="middle">0 PEB | Nonpolar</text>
    <text x="75" y="192" font-size="8.5" font-style="italic" fill="#0284c7" text-anchor="middle">Contoh: BF₃, SO₃</text>
  </g>

  <!-- CARD 3: TETRAHEDRAL (AX4) -->
  <g transform="translate(340, 65)">
    <rect width="155" height="200" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
    <rect x="10" y="10" width="135" height="22" rx="6" fill="#10b981"/>
    <text x="77" y="25" font-size="10.5" font-weight="bold" fill="#ffffff" text-anchor="middle">Tetrahedral (AX₄)</text>
    <g transform="translate(77, 95)">
      <!-- 4 Ikatan -->
      <line x1="0" y1="0" x2="0" y2="-45" stroke="#94a3b8" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="0" y1="0" x2="-42" y2="25" stroke="#94a3b8" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="0" y1="0" x2="42" y2="25" stroke="#94a3b8" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="0" y1="0" x2="10" y2="35" stroke="#64748b" stroke-width="3" stroke-linecap="round" stroke-dasharray="3 2"/>
      <!-- Pusat -->
      <circle cx="0" cy="0" r="16" fill="url(#atomCenter)"/>
      <text x="0" y="4" font-size="9.5" font-weight="bold" fill="#ffffff" text-anchor="middle">C</text>
      <!-- Ligands -->
      <circle cx="0" cy="-45" r="11" fill="url(#atomLigand)"/>
      <circle cx="-42" cy="25" r="11" fill="url(#atomLigand)"/>
      <circle cx="42" cy="25" r="11" fill="url(#atomLigand)"/>
      <circle cx="10" cy="35" r="9" fill="url(#atomLigand)"/>
      <text x="24" y="-10" font-size="9.5" font-weight="bold" fill="#059669">109.5°</text>
    </g>
    <text x="77" y="162" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">Sudut Ideal: 109.5°</text>
    <text x="77" y="178" font-size="9" fill="#64748b" text-anchor="middle">0 PEB | Nonpolar</text>
    <text x="77" y="192" font-size="8.5" font-style="italic" fill="#059669" text-anchor="middle">Contoh: CH₄, CCl₄</text>
  </g>

  <!-- CARD 4: TRIGONAL PIRAMIDA (AX3E1) -->
  <g transform="translate(505, 65)">
    <rect width="155" height="200" rx="12" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="10" y="10" width="135" height="22" rx="6" fill="#f59e0b"/>
    <text x="77" y="25" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">Trigonal Piramida (AX₃E)</text>
    <g transform="translate(77, 100)">
      <!-- Balon Awan PEB di Atas -->
      <ellipse cx="0" cy="-26" rx="14" ry="20" fill="url(#lonePair)" opacity="0.85"/>
      <circle cx="-4" cy="-28" r="2.5" fill="#78350f"/>
      <circle cx="4" cy="-28" r="2.5" fill="#78350f"/>
      <text x="24" y="-28" font-size="8" font-weight="bold" fill="#b45309">1 PEB</text>
      <!-- Ikatan tertekan ke bawah -->
      <line x1="0" y1="0" x2="-38" y2="34" stroke="#94a3b8" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="0" y1="0" x2="38" y2="34" stroke="#94a3b8" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="0" y1="0" x2="0" y2="40" stroke="#64748b" stroke-width="3" stroke-dasharray="2 2"/>
      <!-- Pusat N -->
      <circle cx="0" cy="0" r="16" fill="url(#atomCenter)"/>
      <text x="0" y="4" font-size="9.5" font-weight="bold" fill="#ffffff" text-anchor="middle">N</text>
      <!-- Ligands H -->
      <circle cx="-38" cy="34" r="10" fill="url(#atomLigand)"/>
      <circle cx="38" cy="34" r="10" fill="url(#atomLigand)"/>
      <circle cx="0" cy="40" r="8" fill="url(#atomLigand)"/>
    </g>
    <text x="77" y="162" font-size="10" font-weight="bold" fill="#b45309" text-anchor="middle">Sudut Menciut: 107.3°</text>
    <text x="77" y="178" font-size="9" font-weight="semibold" fill="#dc2626" text-anchor="middle">1 PEB | Polar</text>
    <text x="77" y="192" font-size="8.5" font-style="italic" fill="#b45309" text-anchor="middle">Contoh: NH₃, PCl₃</text>
  </g>

  <!-- CARD 5: BENGKOK / V-SHAPE (AX2E2) -->
  <g transform="translate(670, 65)">
    <rect width="150" height="200" rx="12" fill="#ffffff" stroke="#ef4444" stroke-width="1.5"/>
    <rect x="10" y="10" width="130" height="22" rx="6" fill="#ef4444"/>
    <text x="75" y="25" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">Bengkok / V (AX₂E₂)</text>
    <g transform="translate(75, 100)">
      <!-- 2 Balon Awan PEB di Atas -->
      <ellipse cx="-13" cy="-24" rx="12" ry="18" fill="url(#lonePair)" opacity="0.85" transform="rotate(-15, -13, -24)"/>
      <ellipse cx="13" cy="-24" rx="12" ry="18" fill="url(#lonePair)" opacity="0.85" transform="rotate(15, 13, -24)"/>
      <text x="0" y="-38" font-size="8" font-weight="bold" fill="#b45309" text-anchor="middle">2 PEB Kuat</text>
      <!-- Ikatan tertekan sangat sempit -->
      <line x1="0" y1="0" x2="-35" y2="34" stroke="#94a3b8" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="0" y1="0" x2="35" y2="34" stroke="#94a3b8" stroke-width="4.5" stroke-linecap="round"/>
      <!-- Pusat O -->
      <circle cx="0" cy="0" r="16" fill="url(#atomCenter)"/>
      <text x="0" y="4" font-size="9.5" font-weight="bold" fill="#ffffff" text-anchor="middle">O</text>
      <!-- Ligands H -->
      <circle cx="-35" cy="34" r="10" fill="url(#atomLigand)"/>
      <circle cx="35" cy="34" r="10" fill="url(#atomLigand)"/>
    </g>
    <text x="75" y="162" font-size="10" font-weight="bold" fill="#dc2626" text-anchor="middle">Sudut Tertekan: 104.5°</text>
    <text x="75" y="178" font-size="9" font-weight="semibold" fill="#dc2626" text-anchor="middle">2 PEB | Sangat Polar</text>
    <text x="75" y="192" font-size="8.5" font-style="italic" fill="#dc2626" text-anchor="middle">Contoh: H₂O, OF₂, SCl₂</text>
  </g>

  <!-- BANNER BAWAH: HIERARKI TOLAKAN GILLESPIE -->
  <g transform="translate(20, 276)">
    <rect width="800" height="38" rx="8" fill="#1e293b"/>
    <text x="400" y="24" font-size="11.5" font-weight="bold" fill="#f8fafc" text-anchor="middle">
      Kaidah Tolakan Gillespie: Tolakan PEB-PEB &gt; Tolakan PEB-PEI &gt; Tolakan PEI-PEI
    </text>
  </g>
</svg>

---

### 4. Tabel Lengkap Bentuk Geometri Berdasarkan Domain Elektron

| Domain | Notasi | PEI ($n$) | PEB ($m$) | Geometri Molekul | Sudut Ikatan | Contoh Molekul | Kepolaran Umum |
| :---: | :---: | :---: | :---: | :--- | :---: | :--- | :---: |
| **2** | $AX_2$ | 2 | 0 | **Linear** | $180^\\circ$ | $\\ce{BeCl2}, \\ce{CO2}, \\ce{HCN}$ | Nonpolar |
| **3** | $AX_3$ | 3 | 0 | **Trigonal Planar** | $120^\\circ$ | $\\ce{BF3}, \\ce{SO3}, \\ce{NO3-}$ | Nonpolar |
| **3** | $AX_2 E_1$ | 2 | 1 | **Bengkok / Bent** | $< 120^\\circ$ ($119^\\circ$) | $\\ce{SO2}, \\ce{O3}, \\ce{NO2-}$ | **Polar** |
| **4** | $AX_4$ | 4 | 0 | **Tetrahedral** | $109.5^\\circ$ | $\\ce{CH4}, \\ce{CCl4}, \\ce{SO4^2-}$ | Nonpolar |
| **4** | $AX_3 E_1$ | 3 | 1 | **Trigonal Piramida** | $< 109.5^\\circ$ ($107.3^\\circ$) | $\\ce{NH3}, \\ce{PCl3}, \\ce{H3O+}$ | **Polar** |
| **4** | $AX_2 E_2$ | 2 | 2 | **Bengkok / Bent (V)** | $\\ll 109.5^\\circ$ ($104.5^\\circ$) | $\\ce{H2O}, \\ce{H2S}, \\ce{OF2}$ | **Polar** |
| **5** | $AX_5$ | 5 | 0 | **Trigonal Bipiramida** | $90^\\circ, 120^\\circ$ | $\\ce{PCl5}, \\ce{PF5}$ | Nonpolar |
| **5** | $AX_4 E_1$ | 4 | 1 | **Jungkat-jungkit (Seesaw)** | $< 90^\\circ, < 120^\\circ$ | $\\ce{SF4}, \\ce{TeCl4}$ | **Polar** |
| **5** | $AX_3 E_2$ | 3 | 2 | **Bentuk-T (T-Shaped)** | $< 90^\\circ$ ($87.5^\\circ$) | $\\ce{ClF3}, \\ce{BrF3}$ | **Polar** |
| **5** | $AX_2 E_3$ | 2 | 3 | **Linear** | $180^\\circ$ | $\\ce{XeF2}, \\ce{I3-}$ | Nonpolar |
| **6** | $AX_6$ | 6 | 0 | **Oktahedral** | $90^\\circ$ | $\\ce{SF6}, \\ce{PCl6-}$ | Nonpolar |
| **6** | $AX_5 E_1$ | 5 | 1 | **Piramida Alas Persegi** | $< 90^\\circ$ ($84.8^\\circ$) | $\\ce{BrF5}, \\ce{IF5}$ | **Polar** |
| **6** | $AX_4 E_2$ | 4 | 2 | **Persegi Planar** | $90^\\circ$ | $\\ce{XeF4}, \\ce{ICl4-}$ | Nonpolar |

> [!TIP]
> **Aturan Posisi PEB pada Domain 5 & 6:**
> - Pada domain 5 (Trigonal Bipiramida), PEB **SELALU menempati posisi EKUATORIAL ($120^\circ$)**, bukan posisi aksial ($90^\circ$), karena posisi ekuatorial hanya mengalami tolakan $90^\circ$ sebanyak 2 kali (sedangkan posisi aksial mengalami tolakan $90^\circ$ sebanyak 3 kali).
> - Pada domain 6 (Oktahedral), kedua PEB pada $AX_4 E_2$ **saling bertolak belakang di posisi aksial ($180^\circ$)** untuk meminimalkan tolakan, menghasilkan bentuk **Persegi Planar yang simetris dan NONPOLAR** (seperti $\\ce{XeF4}$).`,
      keyFormulas: [
        { name: 'Rumus Perhitungan PEB Atom Pusat', formula: 'E = \\frac{EV - \\sum (n_i \\cdot b_i)}{2}' },
        { name: 'Hierarki Tolakan Pasangan Elektron', formula: '\\text{PEB-PEB} > \\text{PEB-PEI} > \\text{PEI-PEI}' },
      ],
    },
    {
      tag: 'kepolaran-senyawa-dan-momen-dipol',
      tags: ['kepolaran-senyawa', 'momen-dipol', 'vektor-momen-dipol', 'polar-nonpolar', 'kelarutan-like-dissolves-like'],
      title: 'Konsep Inti 4: Kepolaran Senyawa, Momen Dipol & Kriteria Simetri Molekul',
      summary: 'Penjumlahan vektor momen dipol ikatan, pengaruh simetri bentuk molekul, serta prinsip like dissolves like.',
      content: `Kepolaran suatu molekul ditentukan oleh dua faktor serentak:
1. **Adanya ikatan kovalen polar** di dalam molekul (perbedaan keelektronegatifan $\\Delta EN > 0$).
2. **Bentuk geometri molekul yang asimetris**, sehingga resultan vektor momen dipol tidak saling meniadakan.

---

### 1. Definisi Fisik Momen Dipol Listrik ($\\vec{\\mu}$)

Momen dipol listrik ($\\vec{\\mu}$) adalah besaran vektor yang merepresentasikan derajat pemisahan muatan positif dan negatif dalam suatu ikatan atau molekul:
$$\\vec{\\mu} = q \\times \\vec{r}$$
- $q$ = besar muatan parsial (Coulomb).
- $r$ = jarak pemisahan muatan (meter).
- Satuan standar kimia: **Debye (D)**, di mana $1\\text{ D} = 3.336 \\times 10^{-30}\\text{ C}\\cdot\\text{m}$.
- Arah vektor dipol digambarkan dengan panah bertanda plus di pangkalnya: $\\mapsto$ (berpangkal pada kutub parsial positif $\\delta^+$ dan mengarah ke kutub parsial negatif $\\delta^-$).

---

### 2. Kriteria Molekul Polar vs Nonpolar

Resultan momen dipol total molekul merupakan penjumlahan vektor seluruh momen dipol ikatannya:
$$\\vec{\\mu}_{\\text{total}} = \\sum \\vec{\\mu}_{\\text{ikatan}}$$

1. **Molekul Nonpolar ($\\vec{\\mu}_{\\text{total}} = 0$):**
   - Terjadi apabila molekul tidak memiliki ikatan polar (misal $\\ce{O2}, \\ce{N2}$), **ATAU** molekul memiliki ikatan polar tetapi **bentuk geometrinya sangat simetris** sehingga vektor-vektor momen dipol ikatan saling meniadakan secara sempurna.
   - *Contoh Klasik:*
     - Karbon Dioksida ($\\ce{CO2}$): Ikatan $\\ce{C=O}$ sangat polar, tetapi karena bergeometri **Linear ($AX_2$, $180^\\circ$)**, dua vektor dipol yang berlawanan arah saling meniadakan: $\\vec{\\mu} = 0$.
     - Karbon Tetraklorida ($\\ce{CCl4}$): Memiliki 4 ikatan polar $\\ce{C-Cl}$, tetapi tersusun dalam geometri **Tetrahedral ($AX_4$)** yang simetris sempurna ke 4 penjuru ruang, resultan $\\vec{\\mu} = 0$.
     - Belerang Heksafluorida ($\\ce{SF6}$): Geometri **Oktahedral ($AX_6$)**, resultan $\\vec{\\mu} = 0$.
2. **Molekul Polar ($\\vec{\\mu}_{\\text{total}} \\neq 0$):**
   - Memiliki ikatan polar dan **bentuk geometrinya asimetris** (umumnya memiliki Pasangan Elektron Bebas / PEB pada atom pusat, atau atom-atom ligan yang terikat tidak sejenis).
   - *Contoh Klasik:*
     - Air ($\\ce{H2O}$): Memiliki 2 ikatan polar $\\ce{O-H}$ dan 2 PEB pada atom $\\ce{O}$ dengan geometri **Bengkok ($104.5^\\circ$)**. Kedua vektor dipol tidak berlawanan $180^\\circ$, melainkan mengarah ke atas menuju atom $\\ce{O}$, menghasilkan resultan $\\mu = 1.85\\text{ D}$ (Sangat Polar).
     - Amonia ($\\ce{NH3}$): Geometri **Trigonal Piramida ($AX_3 E_1$)**, ketiga ikatan $\\ce{N-H}$ dan PEB di puncak menghasilkan momen dipol neto $\\mu = 1.47\\text{ D}$.
     - Klorometana ($\\ce{CH3Cl}$): Bentuk tetrahedral namun asimetris karena 1 atom $\\ce{Cl}$ jauh lebih elektronegatif daripada 3 atom $\\ce{H}$, $\\mu = 1.87\\text{ D}$.

---

### 3. Konsekuensi Fisis Kepolaran Molekul

- **Kelarutan (*Like Dissolves Like*):** Senyawa polar (dan ionik) mudah larut dalam pelarut polar (seperti air, etanol) karena terbentuk interaksi ion-dipol atau dipol-dipol yang stabil. Sebaliknya, senyawa nonpolar (seperti minyak, lemak, hidrokarbon, $\\ce{CCl4}$) hanya larut dalam pelarut nonpolar (benzena, heksana).
- **Pengaruh Medan Listrik Eksternal:** Aliran cairan polar (seperti aliran air kran) akan dibelokkan ke arah penggaris mika yang telah digosok bermuatan listrik statis, sedangkan cairan nonpolar (seperti $\\ce{CCl4}$) mengalir lurus tanpa terpengaruh.`,
      keyFormulas: [
        { name: 'Definisi Momen Dipol', formula: '\\vec{\\mu} = q \\cdot \\vec{r}' },
        { name: 'Syarat Molekul Nonpolar', formula: '\\sum \\vec{\\mu}_i = \\mathbf{0} \\quad (\\mu_{\\text{total}} = 0)' },
      ],
    },
    {
      tag: 'ikatan-logam-dan-sifat-khas',
      tags: ['ikatan-logam', 'model-lautan-elektron', 'drude-lorentz', 'konduktivitas-termal-listrik', 'malleable-ductile', 'deformasi-kristal'],
      title: 'Konsep Inti 5: Ikatan Logam, Model Lautan Elektron & Penjelasan Ilmiah Sifat Fisik Logam',
      summary: 'Teori awan elektron terdelokalisasi Drude-Lorentz, konduktivitas listrik/panas, kilap logam, serta perbandingan deformasi logam vs kerapuhan ionik.',
      content: `Lebih dari $75\\%$ unsur dalam tabel periodik adalah logam. Logam memiliki sifat-sifat unik yang tidak dijumpai pada senyawa ionik maupun kovalen, seperti kemampuan menghantarkan arus listrik dalam wujud padat, dapat ditempa menjadi lempengan tipis, dan ditarik menjadi kawat halus.

### 1. Teori Lautan Elektron (*Electron-Sea Model* Drude & Lorentz)

Logam memiliki energi ionisasi yang rendah dan orbital valensi yang relatif kosong. Akibatnya, atom-atom logam melepaskan elektron valensinya:
- Kation-kation logam bermuatan positif ($\\ce{M^{n+}}$) tersusun secara teratur dan rapat dalam kisi kristal (misalnya kubus berpusat badan/BCC, kubus berpusat muka/FCC, atau heksagonal terjejal/HCP).
- Elektron-elektron valensi tidak terikat pada satu kation tertentu, melainkan **terdelokalisasi bebas mengalir membentuk "lautan elektron"** yang menyelimuti seluruh kation logam.
- **Ikatan Logam:** Gaya tarik elektrostatik antara kation-kation logam positif dengan lautan elektron valensi yang terdelokalisasi bebas tersebut.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 290" width="100%" height="auto" class="max-w-[780px] select-none font-sans">
  <defs>
    <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f0fdf4"/>
      <stop offset="100%" stop-color="#dcfce7"/>
    </linearGradient>
    <linearGradient id="ionicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef2f2"/>
      <stop offset="100%" stop-color="#fee2e2"/>
    </linearGradient>
    <marker id="hammerArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="#dc2626"/>
    </marker>
  </defs>

  <!-- PANEL KIRI: LOGAM ULET & DAPAT DITEMPA -->
  <g transform="translate(10, 10)">
    <rect width="365" height="270" rx="14" fill="url(#metalGrad)" stroke="#86efac" stroke-width="1.5"/>
    <rect x="14" y="12" width="165" height="22" rx="6" fill="#16a34a"/>
    <text x="96" y="27" font-size="10.5" font-weight="bold" fill="#ffffff" text-anchor="middle">LOGAM: ULET & DAPAT DITEMPA</text>
    <text x="182" y="48" font-size="11" font-weight="bold" fill="#14532d" text-anchor="middle">Lautan Elektron Menyelimuti Pergeseran Kation</text>

    <!-- Kation Grid Logam -->
    <g transform="translate(30, 65)">
      <!-- Lautan Elektron (Awan hijau muda) -->
      <rect width="305" height="120" rx="10" fill="#bbf7d0" opacity="0.6"/>

      <!-- Titik-titik elektron bebas melayang -->
      <circle cx="25" cy="20" r="2.5" fill="#047857"/><circle cx="85" cy="15" r="2.5" fill="#047857"/>
      <circle cx="145" cy="22" r="2.5" fill="#047857"/><circle cx="205" cy="18" r="2.5" fill="#047857"/>
      <circle cx="265" cy="20" r="2.5" fill="#047857"/><circle cx="55" cy="60" r="2.5" fill="#047857"/>
      <circle cx="115" cy="62" r="2.5" fill="#047857"/><circle cx="175" cy="58" r="2.5" fill="#047857"/>
      <circle cx="235" cy="60" r="2.5" fill="#047857"/><circle cx="290" cy="55" r="2.5" fill="#047857"/>
      <circle cx="25" cy="100" r="2.5" fill="#047857"/><circle cx="85" cy="102" r="2.5" fill="#047857"/>
      <circle cx="145" cy="98" r="2.5" fill="#047857"/><circle cx="205" cy="104" r="2.5" fill="#047857"/>

      <!-- Baris Atas Kation (Bergeser ke kanan akibat pukulan) -->
      <g transform="translate(30, 0)">
        <circle cx="35" cy="25" r="14" fill="#15803d"/><text x="35" y="29" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">+</text>
        <circle cx="95" cy="25" r="14" fill="#15803d"/><text x="95" y="29" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">+</text>
        <circle cx="155" cy="25" r="14" fill="#15803d"/><text x="155" y="29" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">+</text>
        <circle cx="215" cy="25" r="14" fill="#15803d"/><text x="215" y="29" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">+</text>
      </g>
      <!-- Panah Gaya Geser Palu -->
      <path d="M 5 25 L 45 25" stroke="#dc2626" stroke-width="3" marker-end="url(#hammerArrow)"/>
      <text x="25" y="12" font-size="9" font-weight="bold" fill="#dc2626" text-anchor="middle">Palu</text>

      <!-- Baris Bawah Kation (Tetap) -->
      <g transform="translate(0, 0)">
        <circle cx="35" cy="85" r="14" fill="#15803d"/><text x="35" y="89" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">+</text>
        <circle cx="95" cy="85" r="14" fill="#15803d"/><text x="95" y="89" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">+</text>
        <circle cx="155" cy="85" r="14" fill="#15803d"/><text x="155" y="89" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">+</text>
        <circle cx="215" cy="85" r="14" fill="#15803d"/><text x="215" y="89" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">+</text>
        <circle cx="275" cy="85" r="14" fill="#15803d"/><text x="275" y="89" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">+</text>
      </g>
    </g>

    <rect x="20" y="200" width="325" height="55" rx="8" fill="#ffffff" stroke="#86efac" stroke-width="1"/>
    <text x="182" y="220" font-size="10.5" font-weight="bold" fill="#166534" text-anchor="middle">Ikatan Tidak Pernah Putus!</text>
    <text x="182" y="238" font-size="9.5" fill="#475569" text-anchor="middle">Lautan elektron fleksibel menyesuaikan bentuk (Malleable)</text>
  </g>

  <!-- PANEL KANAN: KRISTAL IONIK RAPUH / GETAS -->
  <g transform="translate(395, 10)">
    <rect width="375" height="270" rx="14" fill="url(#ionicGrad)" stroke="#fca5a5" stroke-width="1.5"/>
    <rect x="14" y="12" width="165" height="22" rx="6" fill="#dc2626"/>
    <text x="96" y="27" font-size="10.5" font-weight="bold" fill="#ffffff" text-anchor="middle">SENYAWA ION: RAPUH / GETAS</text>
    <text x="187" y="48" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">Muatan Sejenis Berhadapan → Tolakan Kuat</text>

    <!-- Grid Ion -->
    <g transform="translate(35, 65)">
      <!-- Baris Atas Tergeser 1 Langkah -->
      <g transform="translate(30, 0)">
        <circle cx="35" cy="25" r="13" fill="#2563eb"/><text x="35" y="29" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">+</text>
        <circle cx="85" cy="25" r="15" fill="#16a34a"/><text x="85" y="29" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">−</text>
        <circle cx="135" cy="25" r="13" fill="#2563eb"/><text x="135" y="29" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">+</text>
        <circle cx="185" cy="25" r="15" fill="#16a34a"/><text x="185" y="29" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">−</text>
      </g>
      <!-- Panah Pukul Palu -->
      <path d="M 5 25 L 45 25" stroke="#dc2626" stroke-width="3" marker-end="url(#hammerArrow)"/>

      <!-- Baris Bawah -->
      <circle cx="15" cy="85" r="15" fill="#16a34a"/><text x="15" y="89" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">−</text>
      <circle cx="65" cy="85" r="13" fill="#2563eb"/><text x="65" y="89" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">+</text>
      <circle cx="115" cy="85" r="15" fill="#16a34a"/><text x="115" y="89" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">−</text>
      <circle cx="165" cy="85" r="13" fill="#2563eb"/><text x="165" y="89" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">+</text>
      <circle cx="215" cy="85" r="15" fill="#16a34a"/><text x="215" y="89" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">−</text>

      <!-- Garis Retak Merah / Repulsion -->
      <path d="M 50 55 L 75 52 L 105 58 L 140 50 L 175 56 L 210 52" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="3 3"/>
      <!-- Panah Tolak Antara + dan + -->
      <line x1="65" y1="42" x2="65" y2="68" stroke="#dc2626" stroke-width="2"/>
      <text x="65" y="58" font-size="10" font-weight="bold" fill="#dc2626">⚡</text>
      <line x1="115" y1="42" x2="115" y2="68" stroke="#dc2626" stroke-width="2"/>
      <text x="115" y="58" font-size="10" font-weight="bold" fill="#dc2626">⚡</text>
      <line x1="165" y1="42" x2="165" y2="68" stroke="#dc2626" stroke-width="2"/>
      <text x="165" y="58" font-size="10" font-weight="bold" fill="#dc2626">⚡</text>
    </g>

    <rect x="20" y="200" width="335" height="55" rx="8" fill="#ffffff" stroke="#fca5a5" stroke-width="1"/>
    <text x="187" y="220" font-size="10.5" font-weight="bold" fill="#991b1b" text-anchor="middle">Gaya Tolak Elektrostatik Raksasa!</text>
    <text x="187" y="238" font-size="9.5" fill="#475569" text-anchor="middle">Ion (+ +) dan (− −) berhadapan → Kristal Retak & Pecah</text>
  </g>
</svg>

---

### 2. Penjelasan Ilmiah 4 Sifat Fisik Karakteristik Logam

1. **Dapat Ditempa (*Malleable*) dan Ditarik (*Ductile*):**
   Ketika logam dipukul dengan palu atau ditarik melalui cetakan kawat, lapisan-lapisan kation bergeser melewati satu sama lain. Namun karena lautan elektron bebas bergerak mengikuti pergeseran tersebut secara instan, lingkungan elektrostatik kation tidak berubah. Tidak ada muatan sejenis yang saling tolak. Logam hanya mengalami deformasi plastis tanpa patah.
2. **Konduktivitas Listrik Sangat Tinggi:**
   Ketika beda potensial (tegangan listrik) diberikan pada kedua ujung logam, elektron-elektron valensi yang terdelokalisasi bebas segera mengalir secara terarah menuju kutub positif, menghasilkan arus listrik yang besar.
3. **Konduktivitas Termal (Penghantar Panas):**
   Pemanasan pada salah satu ujung logam meningkatkan energi kinetik elektron bebas di area tersebut. Elektron yang bergerak cepat ini bertumbukan dengan elektron lain dan kation-kation kisi, mentransfer energi termal ke seluruh badan logam dengan sangat cepat.
4. **Kilap Logam (*Metallic Luster*):**
   Lautan elektron bebas pada permukaan logam mampu menyerap seluruh spektrum foton cahaya tampak dan memancarkannya kembali (*re-emission*) secara instan, sehingga permukaan logam tampak mengilap seperti cermin.`,
      keyFormulas: [
        { name: 'Model Densitas Arus Konduktivitas Logam', formula: 'J = \\sigma E = n e v_d' },
      ],
    },
    {
      tag: 'gaya-antarmolekul-dan-ikatan-hidrogen',
      tags: ['gaya-antarmolekul', 'van-der-waals', 'gaya-london', 'dipol-dipol', 'ikatan-hidrogen', 'anomali-air', 'titik-didih-hidrida'],
      title: 'Konsep Inti 6: Gaya Antarmolekul (Van der Waals & Ikatan Hidrogen) serta Anomali Sifat Fisik Air',
      summary: 'Perbedaan gaya intramolekul vs intermolekul, mekanisme dispersi London, interaksi dipol-dipol, serta peran ikatan hidrogen dalam menentukan titik didih cairan.',
      content: `Perbedaan fundamental antara ikatan kimia dan gaya antarmolekul:
- **Ikatan Kimia Intramolekul (Kovalen, Ion, Logam):** Mengikat atom-atom **di dalam** suatu molekul (energi ikatan: $150 - 1000\\text{ kJ/mol}$). Menentukan sifat kimia senyawa.
- **Gaya Antarmolekul Intermolekul (Van der Waals, Ikatan Hidrogen):** Gaya tarik-menarik **antar molekul yang bertetangga** (energi ikatan: $1 - 40\\text{ kJ/mol}$). Mengendalikan sifat fisis seperti wujud zat (padat/cair/gas), titik leleh, titik didih, viskositas, dan kalor penguapan.

---

### 1. Spektrum Gaya Van der Waals

Gaya Van der Waals mencakup semua gaya tarik elektrostatik antarmolekul netral:
1. **Gaya Dispersi London (Dipol Sesaat - Dipol Terimbas / *London Dispersion Forces*):**
   - Bekerja pada **SEMUA molekul** (baik nonpolar maupun polar).
   - Terjadi karena gerakan acak elektron yang sewaktu-waktu dapat terdistribusi secara tidak merata, menciptakan **dipol sesaat (*instantaneous dipole*)**. Dipol sesaat ini kemudian menginduksi awan elektron molekul tetangga membentuk **dipol terimbas (*induced dipole*)**, menghasilkan gaya tarik lemah sesaat.
   - **Faktor yang Memperkuat Gaya London:**
     - **Massa Molekul Relatif ($M_r$) & Ukuran Atom:** Makin besar atom, jumlah elektron makin banyak, awan elektron makin longgar dan **mudah terpolarisasi (*polarizability* tinggi)**.  
       Contoh titik didih gas mulia naik seiring kenaikan $M_r$: $\\ce{He} (-269^\\circ\\text{C}) < \\ce{Ne} < \\ce{Ar} < \\ce{Kr} < \\ce{Xe} (-108^\\circ\\text{C})$.  
       Halogen: $\\ce{F2}\\text{ (gas)} < \\ce{Cl2}\\text{ (gas)} < \\ce{Br2}\\text{ (cair)} < \\ce{I2}\\text{ (padat)}$.
     - **Bentuk Molekul & Luas Permukaan Kontak:** Molekul rantai lurus memiliki luas kontak antarmolekul lebih besar daripada molekul bercabang bulat sferis.  
       Contoh: n-pentana (titik didih $36.1^\\circ\\text{C}$) vs neopentana (titik didih $9.5^\\circ\\text{C}$), padahal $M_r$ keduanya sama ($72\\text{ g/mol}$).
2. **Interaksi Dipol-Dipol (Gaya Keesom):**
   - Terjadi khusus antar **molekul-molekul kovalen polar** permanen ($\\mu > 0$).
   - Kutub positif parsial ($\\delta^+$) suatu molekul tertarik ke kutub negatif parsial ($\\delta^-$) molekul di sebelahnya.
   - Lebih kuat daripada gaya London pada molekul dengan massa setara.  
     Contoh: Propana (nonpolar, $M_r = 44$, titik didih $-42^\\circ\\text{C}$) vs Asetaldehida (polar, $M_r = 44$, titik didih $+20^\\circ\\text{C}$).

---

### 2. Ikatan Hidrogen (*Hydrogen Bonding*)

Ikatan hidrogen adalah gaya tarik antarmolekul istimewa yang **jauh lebih kuat ($10 - 40\\text{ kJ/mol}$)** daripada gaya Van der Waals biasa:
- **Syarat Mutlak Terbentuknya Ikatan Hidrogen:**
  1. Atom Hidrogen wajib terikat kovalen langsung pada atom yang **sangat elektronegatif dengan ukuran jari-jari sangat kecil: $\\mathbf{\\ce{F}}$, $\\mathbf{\\ce{O}}$, atau $\\mathbf{\\ce{N}}$**.
  2. Molekul tetangga memiliki atom $\\ce{F}, \\ce{O},$ atau $\\ce{N}$ yang memiliki **Pasangan Elektron Bebas (PEB)**.
- Akibat elektronegativitas $\\ce{F, O, N}$ yang sangat tinggi dan ukuran atom $\\ce{H}$ yang mungil tanpa elektron kulit dalam, ikatan menjadi terpolarisasi sangat ekstrem. Atom $\\ce{H}$ nyaris berupa "proton telanjang" dengan kerapatan muatan positif $\\delta^+$ yang luar biasa pekat, menarik PEB molekul tetangga dengan sangat kuat.

---

### 3. Grafik Anomali Titik Didih Hidrida & Jaringan Ikatan Hidrogen Air

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 820 330" width="100%" height="auto" class="max-w-[820px] select-none font-sans">
  <defs>
    <linearGradient id="plotBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f8fafc"/>
    </linearGradient>
  </defs>

  <!-- PANEL KIRI: GRAFIK TITIK DIDIH -->
  <g transform="translate(10, 10)">
    <rect width="450" height="310" rx="14" fill="url(#plotBg)" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="225" y="24" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">KURVA ANOMALI TITIK DIDIH HIDRIDA GOLONGAN 14-17</text>

    <!-- Sumbu Koordinat -->
    <!-- Y: -150 to +100 C. Height = 220px. Scale: 1 C = 0.88px.
         Y=100 C -> y=50
         Y=0 C   -> y=138
         Y=-50 C -> y=182
         Y=-100 C-> y=226
         Y=-150 C-> y=270
         X: Periode 2 (x=80), Periode 3 (x=180), Periode 4 (x=280), Periode 5 (x=380)
    -->
    <line x1="55" y1="50" x2="55" y2="270" stroke="#94a3b8" stroke-width="1.5"/>
    <line x1="55" y1="270" x2="425" y2="270" stroke="#94a3b8" stroke-width="1.5"/>

    <!-- Grid Garis Horisontal -->
    <line x1="55" y1="50" x2="425" y2="50" stroke="#f1f5f9" stroke-width="1"/>
    <text x="48" y="54" font-size="9" fill="#64748b" text-anchor="end">100°C</text>

    <line x1="55" y1="138" x2="425" y2="138" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3 3"/>
    <text x="48" y="142" font-size="9" font-weight="bold" fill="#0284c7" text-anchor="end">0°C</text>

    <line x1="55" y1="182" x2="425" y2="182" stroke="#f1f5f9" stroke-width="1"/>
    <text x="48" y="186" font-size="9" fill="#64748b" text-anchor="end">-50°C</text>

    <line x1="55" y1="226" x2="425" y2="226" stroke="#f1f5f9" stroke-width="1"/>
    <text x="48" y="230" font-size="9" fill="#64748b" text-anchor="end">-100°C</text>

    <!-- Label X: Periode -->
    <text x="80" y="286" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">Periode 2</text>
    <text x="180" y="286" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">Periode 3</text>
    <text x="280" y="286" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">Periode 4</text>
    <text x="380" y="286" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">Periode 5</text>

    <!-- KURVA GOLONGAN 14 (CH4 -> SiH4 -> GeH4 -> SnH4): Nonpolar Murni -->
    <!-- CH4 (-161 C -> y=280), SiH4 (-112 C -> y=236), GeH4 (-88 C -> y=215), SnH4 (-52 C -> y=184) -->
    <path d="M 80 280 L 180 236 L 280 215 L 380 184" fill="none" stroke="#64748b" stroke-width="2.5"/>
    <circle cx="80" cy="280" r="4" fill="#64748b"/><text x="80" y="295" font-size="8.5" fill="#475569" text-anchor="middle">CH₄</text>
    <circle cx="180" cy="236" r="4" fill="#64748b"/><text x="180" y="248" font-size="8.5" fill="#475569" text-anchor="middle">SiH₄</text>
    <circle cx="280" cy="215" r="4" fill="#64748b"/><text x="280" y="227" font-size="8.5" fill="#475569" text-anchor="middle">GeH₄</text>
    <circle cx="380" cy="184" r="4" fill="#64748b"/><text x="380" y="196" font-size="8.5" fill="#475569" text-anchor="middle">SnH₄</text>

    <!-- KURVA GOLONGAN 16 (H2O -> H2S -> H2Se -> H2Te) -->
    <!-- H2O (+100 C -> y=50), H2S (-60 C -> y=191), H2Se (-41 C -> y=174), H2Te (-2 C -> y=140) -->
    <path d="M 80 50 L 180 191 L 280 174 L 380 140" fill="none" stroke="#0284c7" stroke-width="3"/>
    <circle cx="80" cy="50" r="5.5" fill="#0284c7"/><text x="80" y="42" font-size="10.5" font-weight="bold" fill="#0284c7" text-anchor="middle">H₂O (+100°C)</text>
    <circle cx="180" cy="191" r="4" fill="#0284c7"/><text x="195" y="198" font-size="8.5" fill="#0284c7">H₂S</text>
    <circle cx="280" cy="174" r="4" fill="#0284c7"/><text x="295" y="180" font-size="8.5" fill="#0284c7">H₂Se</text>
    <circle cx="380" cy="140" r="4" fill="#0284c7"/><text x="395" y="145" font-size="8.5" fill="#0284c7">H₂Te</text>

    <!-- KURVA GOLONGAN 17 (HF -> HCl -> HBr -> HI) -->
    <!-- HF (+19.5 C -> y=121), HCl (-85 C -> y=213), HBr (-66 C -> y=196), HI (-35 C -> y=169) -->
    <path d="M 80 121 L 180 213 L 280 196 L 380 169" fill="none" stroke="#9333ea" stroke-width="2.5" stroke-dasharray="4 2"/>
    <circle cx="80" cy="121" r="4.5" fill="#9333ea"/><text x="96" y="118" font-size="9.5" font-weight="bold" fill="#9333ea">HF (+20°C)</text>
    <circle cx="180" cy="213" r="3.5" fill="#9333ea"/><text x="180" y="223" font-size="8" fill="#9333ea" text-anchor="middle">HCl</text>

    <!-- KURVA GOLONGAN 15 (NH3 -> PH3 -> AsH3 -> SbH3) -->
    <!-- NH3 (-33 C -> y=167), PH3 (-88 C -> y=215), AsH3 (-62 C -> y=193), SbH3 (-17 C -> y=153) -->
    <path d="M 80 167 L 180 215 L 280 193 L 380 153" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-dasharray="2 2"/>
    <circle cx="80" cy="167" r="4.5" fill="#16a34a"/><text x="65" y="165" font-size="9" font-weight="bold" fill="#16a34a" text-anchor="end">NH₃ (-33°C)</text>

    <!-- Label Panah Lonjakan Anomali -->
    <path d="M 120 180 C 105 130, 95 80, 85 62" fill="none" stroke="#e11d48" stroke-width="1.8" stroke-dasharray="3 2"/>
    <text x="135" y="115" font-size="9" font-weight="bold" fill="#e11d48">Lonjakan Ekstrem H-Bond!</text>
  </g>

  <!-- PANEL KANAN: MOLEKUL AIR & JEMBATAN IKATAN HIDROGEN -->
  <g transform="translate(470, 10)">
    <rect width="340" height="310" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="170" y="24" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">JARINGAN IKATAN HIDROGEN AIR (H₂O)</text>

    <!-- Struktur 2 Molekul H2O Berikatan -->
    <g transform="translate(170, 140)">
      <!-- Molekul Air 1 (Atas) -->
      <g transform="translate(0, -50)">
        <circle cx="0" cy="0" r="22" fill="#0284c7"/>
        <text x="0" y="5" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">O</text>
        <text x="0" y="-26" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">δ⁻</text>
        <!-- Ikatan O-H -->
        <line x1="-15" y1="15" x2="-35" y2="35" stroke="#0284c7" stroke-width="4.5"/>
        <circle cx="-35" cy="35" r="11" fill="#38bdf8"/>
        <text x="-35" y="39" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">H</text>

        <line x1="15" y1="15" x2="35" y2="35" stroke="#0284c7" stroke-width="4.5"/>
        <circle cx="35" cy="35" r="11" fill="#38bdf8"/>
        <text x="35" y="39" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">H</text>
        <text x="48" y="44" font-size="10" font-weight="bold" fill="#0284c7">δ⁺</text>
      </g>

      <!-- JEMBATAN IKATAN HIDROGEN (Garis Titik-Titik Biru Tebal) -->
      <line x1="35" y1="-15" x2="35" y2="40" stroke="#e11d48" stroke-width="3" stroke-dasharray="4 3"/>
      <text x="48" y="15" font-size="10" font-weight="bold" fill="#e11d48">Ikatan Hidrogen</text>
      <text x="48" y="28" font-size="8.5" fill="#e11d48">~23.3 kJ/mol</text>

      <!-- Molekul Air 2 (Bawah) -->
      <g transform="translate(35, 60)">
        <circle cx="0" cy="0" r="22" fill="#0284c7"/>
        <text x="0" y="5" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">O</text>
        <text x="26" y="2" font-size="10" font-weight="bold" fill="#0369a1">δ⁻</text>

        <line x1="-15" y1="15" x2="-35" y2="35" stroke="#0284c7" stroke-width="4.5"/>
        <circle cx="-35" cy="35" r="11" fill="#38bdf8"/>
        <text x="-35" y="39" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">H</text>

        <line x1="15" y1="15" x2="35" y2="35" stroke="#0284c7" stroke-width="4.5"/>
        <circle cx="35" cy="35" r="11" fill="#38bdf8"/>
        <text x="35" y="39" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">H</text>
      </g>
    </g>

    <rect x="15" y="240" width="310" height="55" rx="8" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1"/>
    <text x="170" y="258" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">1 Molekul Air Membentuk 4 Ikatan Hidrogen</text>
    <text x="170" y="274" font-size="9" fill="#475569" text-anchor="middle">Membentuk kisi tetrahedral heksagonal terbuka saat membeku (Es)</text>
    <text x="170" y="288" font-size="8.5" font-style="italic" fill="#0284c7" text-anchor="middle">Menjelaskan densitas es lebih rendah daripada air cair (terapung)!</text>
  </g>
</svg>

---

### 4. Anomali Sifat Fisik Air Akibat Ikatan Hidrogen

1. **Titik Didih Ekstrem Tinggi ($100^\\circ\\text{C}$):**
   Berdasarkan tren hidrida Golongan VIA lainnya ($\\ce{H2S}, \\ce{H2Se}, \\ce{H2Te}$), titik didih air seharusnya sekitar **$-80^\\circ\\text{C}$**. Namun kenyataannya titik didih air mencapai $+100^\\circ\\text{C}$ (selisih sebesar $180^\\circ\\text{C}$!). Setiap molekul $\\ce{H2O}$ memiliki $2$ atom $\\ce{H}$ dan $2$ PEB, sehingga dapat membentuk **jejaring 4 ikatan hidrogen 3D serentak per molekul**.
2. **Titik Didih $\\ce{H2O}$ Lebih Tinggi daripada $\\ce{HF}$ ($19.5^\\circ\\text{C}$):**
   Meskipun ikatan $\\ce{H-F}$ secara individual lebih polar daripada $\\ce{H-O}$, molekul $\\ce{HF}$ hanya memiliki 1 atom $\\ce{H}$ (meskipun punya 3 PEB), sehingga rata-rata hanya dapat membentuk **2 ikatan hidrogen per molekul** (rantai zigzag 1 dimensi). Air membentuk 4 ikatan hidrogen, sehingga total energi yang dibutuhkan untuk menguapkannya jauh lebih besar.
3. **Anomali Densitas Es (Mengapung di Air Cair):**
   Ketika air membeku menjadi es pada suhu $< 4^\\circ\\text{C}$, ikatan hidrogen terkunci membentuk kisi heksagonal kaku dengan banyak **rongga kosong terbuka (*open cage-like structure*)**. Akibatnya, volume es mengembang dan massa jenis es ($0.917\\text{ g/cm}^3$) menjadi lebih kecil daripada massa jenis air cair ($1.000\\text{ g/cm}^3$). Hal ini mencegah danau dan lautan kutub membeku dari dasar, menjaga kelangsungan hidup ekosistem akuatik di musim dingin!`,
      keyFormulas: [
        { name: 'Hierarki Kekuatan Relatif Gaya Intermolekul', formula: '\\text{Gaya London} < \\text{Dipol-Dipol} < \\text{Ikatan Hidrogen} \\ll \\text{Ikatan Kimia}' },
        { name: 'Potensial Interaksi Lennard-Jones', formula: 'V(r) = 4\\varepsilon \\left[ \\left(\\frac{\\sigma}{r}\\right)^{12} - \\left(\\frac{\\sigma}{r}\\right)^6 \\right]' },
      ],
    },
  ],
  worked_examples: [
    {
      tag: 'contoh-vsepr-kepolaran-xef4-sf4',
      title: 'Contoh Soal 1: Analisis Geometri Molekul, Notasi VSEPR & Kepolaran Senyawa Superoktet (XeF4 vs SF4)',
      summary: 'Kalkulasi domain elektron, penentuan posisi aksial vs ekuatorial PEB, dan evaluasi momen dipol neto.',
      content: `### Soal Ujian Tingkat Lanjut:
Diberikan dua senyawa biner dari unsur periode 4 dan 5: Belerang Tetrafluorida ($\\ce{SF4}$, nomor atom $Z_{\\ce{S}} = 16, Z_{\\ce{F}} = 9$) dan Ksenon Tetrafluorida ($\\ce{XeF4}$, nomor atom $Z_{\\ce{Xe}} = 54$).
1. Tentukan jumlah elektron valensi total, pasangan elektron ikatan (PEI), dan pasangan elektron bebas (PEB) pada atom pusat masing-masing senyawa!
2. Rumuskan notasi tipe molekul VSEPR ($AX_n E_m$) dan tentukan nama bentuk geometri molekul keduanya!
3. Jelaskan mengapa salah satu senyawa bersifat **polar** sedangkan senyawa lainnya bersifat **nonpolar**, kaitkan dengan resultan vektor momen dipolnya!

---

### Pembahasan Langkah demi Langkah:

#### 1. Analisis Belerang Tetrafluorida ($\\ce{SF4}$):
- **Elektron Valensi Atom Pusat ($\\ce{S}$):** Golongan VIA $\\implies 6$ elektron valensi.
- **Elektron yang Digunakan Berikatan:** 4 atom $\\ce{F}$ masing-masing membutuhkan $1$ elektron $\\implies 4$ elektron digunakan berikatan ($n = 4$ PEI).
- **Sisa Elektron Bebas pada Atom $\\ce{S}$:**
  $$E = \\frac{6 - (4 \\times 1)}{2} = \\frac{2}{2} = \\mathbf{1 \\text{ PEB}} \\quad (m = 1)$$
- **Total Domain Elektron:** $4 + 1 = 5$ domain (Geometri domain dasar: *Trigonal Bipiramida*).
- **Tipe Molekul VSEPR:** $\\mathbf{AX_4 E_1}$
- **Bentuk Geometri Molekul:** **Jungkat-jungkit (*Seesaw* / Bipiramida Trigonal Terdistorsi)**.
  - PEB menempati posisi **ekuatorial** untuk meminimalkan tolakan $90^\\circ$.
- **Kepolaran:**
  - Bentuk jungkat-jungkit bersifat **asimetris**. Momen dipol dari dua ikatan $\\ce{S-F}$ aksial saling meniadakan, tetapi dua ikatan $\\ce{S-F}$ ekuatorial dan satu PEB ekuatorial menghasilkan resultan momen dipol yang tidak sama dengan nol:
    $$\\sum \\vec{\\mu} \\neq 0 \\implies \\mathbf{\\text{Senyawa Polar (}\\mu = 0.632\\text{ D)}}$$

---

#### 2. Analisis Ksenon Tetrafluorida ($\\ce{XeF4}$):
- **Elektron Valensi Atom Pusat ($\\ce{Xe}$):** Golongan VIIIA (Gas Mulia) $\\implies 8$ elektron valensi.
- **Elektron yang Digunakan Berikatan:** 4 atom $\\ce{F}$ berikatan $\\implies 4$ elektron ($n = 4$ PEI).
- **Sisa Elektron Bebas pada Atom $\\ce{Xe}$:**
  $$E = \\frac{8 - (4 \\times 1)}{2} = \\frac{4}{2} = \\mathbf{2 \\text{ PEB}} \\quad (m = 2)$$
- **Total Domain Elektron:** $4 + 2 = 6$ domain (Geometri domain dasar: *Oktahedral*).
- **Tipe Molekul VSEPR:** $\\mathbf{AX_4 E_2}$
- **Bentuk Geometri Molekul:** **Persegi Planar (*Square Planar*)**.
  - Kedua PEB menempati posisi aksial yang saling berseberangan ($180^\\circ$) untuk meminimalkan gaya tolak PEB-PEB yang sangat kuat. Keempat atom $\\ce{F}$ terletak pada satu bidang datar segiempat.
- **Kepolaran:**
  - Walaupun ikatan $\\ce{Xe-F}$ sangat polar ($\\Delta EN = 3.98 - 2.60 = 1.38$), keempat vektor dipol ikatan $\\ce{Xe-F}$ saling meniadakan secara berpasangan dalam bidang datar ($180^\\circ$), dan kedua vektor PEB aksial juga saling meniadakan:
    $$\\sum \\vec{\\mu} = \\mathbf{0} \\implies \\mathbf{\\text{Senyawa Nonpolar (}\\mu = 0\\text{ D)}}$$

> **Kesimpulan Evaluator Juri:** Keberadaan PEB tidak selalu menghasilkan molekul polar! Jika susunan PEB dan PEI menghasilkan simetri ruang sempurna (seperti $AX_4 E_2$ persegi planar dan $AX_2 E_3$ linear), molekul tersebut tetap **bersifat nonpolar** karena resultan vektor momen dipolnya nol.`,
      keyFormulas: [
        { name: 'Tipe VSEPR SF4', formula: 'AX_4 E_1 \\implies \\text{Jungkat-jungkit (Seesaw, Polar)}' },
        { name: 'Tipe VSEPR XeF4', formula: 'AX_4 E_2 \\implies \\text{Persegi Planar (Square Planar, Nonpolar)}' },
      ],
    },
    {
      tag: 'contoh-lewis-muatan-formal-hno3-so4',
      title: 'Contoh Soal 2: Struktur Lewis, Evaluasi Muatan Formal & Ikatan Kovalen Koordinasi (HNO3 & SO4^2-)',
      summary: 'Metode kalkulasi muatan formal untuk memilih struktur resonansi terbaik dan mengidentifikasi ikatan kovalen datif.',
      content: `### Soal Latihan:
1. Gambarkan struktur Lewis molekul Asam Nitrat ($\\ce{HNO3}$) yang mematuhi kaidah oktet ketat ($Z_{\\ce{H}}=1, Z_{\\ce{N}}=7, Z_{\\ce{O}}=8$). Hitung muatan formal seluruh atom dan tentukan ada tidaknya ikatan kovalen koordinasi!
2. Pada ion Poliatomik Sulfat ($\\ce{SO4^2-}$), bandingkan struktur Lewis yang mematuhi kaidah oktet murni dengan struktur superoktet yang meminimalkan muatan formal! Struktur manakah yang paling stabil menurut data spektroskopi eksperimental?

---

### Pembahasan Langkah demi Langkah:

#### 1. Analisis Molekul Asam Nitrat ($\\ce{HNO3}$):
- **Jumlah Elektron Valensi Total:**
  $$EV = 1(\\ce{H}) + 5(\\ce{N}) + 3 \\times 6(\\ce{O}) = 1 + 5 + 18 = \\mathbf{24 \\text{ elektron}} \\quad (12 \\text{ pasang})$$
- Atom $\\ce{N}$ bertindak sebagai atom pusat. Atom $\\ce{H}$ terikat pada salah satu atom Oksigen (gugus hidroksil $-\\ce{OH}$).
- **Distribusi Ikatan pada Atom $\\ce{N}$:**
  - $\\ce{N}$ membentuk ikatan kovalen tunggal dengan atom $\\ce{O_{(1)}}$ yang mengikat $\\ce{H}$ ($\\ce{N-O-H}$).
  - $\\ce{N}$ membentuk ikatan kovalen rangkap dua dengan atom $\\ce{O_{(2)}}$ kedua ($\\ce{N=O}$).
  - $\\ce{N}$ menyumbangkan 1 pasang elektron bebasnya ke atom $\\ce{O_{(3)}}$ ketiga tanpa sumbangan balik dari atom $\\ce{O_{(3)}}$, membentuk **1 ikatan kovalen koordinasi (datif)**: $\\ce{N -> O}$.
- **Kalkulasi Muatan Formal (*Formal Charge*):**
  $$FC = EV - N_{\\text{nonbonding}} - \\frac{1}{2} N_{\\text{bonding}}$$
  - Atom $\\ce{N}$: $FC = 5 - 0 - \\frac{1}{2}(8) = \\mathbf{+1}$
  - Atom $\\ce{O_{(1)}}$ ($-\\ce{OH}$): $FC = 6 - 4 - \\frac{1}{2}(4) = \\mathbf{0}$
  - Atom $\\ce{O_{(2)}}$ (ikatan rangkap $\\ce{=O}$): $FC = 6 - 4 - \\frac{1}{2}(4) = \\mathbf{0}$
  - Atom $\\ce{O_{(3)}}$ (ikatan koordinasi $\\ce{-> O}$): $FC = 6 - 6 - \\frac{1}{2}(2) = \\mathbf{-1}$
  - Atom $\\ce{H}$: $FC = 1 - 0 - \\frac{1}{2}(2) = \\mathbf{0}$
  - *Jumlah total muatan formal:* $(+1) + 0 + 0 + (-1) + 0 = 0$ (Netral sesuai rumus molekul $\\ce{HNO3}$).
- **Kesimpulan:** Pada $\\ce{HNO3}$ terdapat **1 ikatan kovalen rangkap dua**, **2 ikatan kovalen tunggal**, dan **1 ikatan kovalen koordinasi**.

---

#### 2. Analisis Ion Sulfat ($\\ce{SO4^2-}$):
- **Elektron Valensi Total:** $6(\\ce{S}) + 4 \\times 6(\\ce{O}) + 2(\\text{muatan}) = \\mathbf{32 \\text{ elektron}}$ ($16$ pasang).
- **Struktur A (Kaidah Oktet Murni - Tanpa Superoktet):**
  - Atom $\\ce{S}$ hanya membentuk 4 ikatan tunggal ke empat atom $\\ce{O}$ ($\\ce{S-O}$).
  - Atom $\\ce{S}$ memiliki 8 elektron valensi (oktet terpenuhi).
  - *Muatan Formal:*
    - $FC(\\ce{S}) = 6 - 0 - \\frac{1}{2}(8) = \\mathbf{+2}$
    - $FC(\\ce{O}) = 6 - 6 - \\frac{1}{2}(2) = \\mathbf{-1}$ (untuk keempat atom O).
  - Kelemahan: Terjadi pemisahan muatan formal besar ($+2$ pada sulfur).
- **Struktur B (Superoktet - Minimasi Muatan Formal):**
  - Dua atom $\\ce{O}$ berikatan rangkap dua ($\\ce{S=O}$), dua atom $\\ce{O}$ berikatan tunggal ($\\ce{S-O-}$).
  - Atom $\\ce{S}$ dikelilingi 12 elektron valensi (superoktet diperbolehkan karena belerang berada di Periode 3 dengan subkulit $3d$).
  - *Muatan Formal:*
    - $FC(\\ce{S}) = 6 - 0 - \\frac{1}{2}(12) = \\mathbf{0}$
    - $FC(\\ce{O}$ ikatan rangkap$) = 6 - 4 - 2 = \\mathbf{0}$
    - $FC(\\ce{O}$ ikatan tunggal$) = 6 - 6 - 1 = \\mathbf{-1}$
- **Validasi Eksperimental:**
  Data difraksi sinar-X kristalografi menunjukkan bahwa keempat ikatan $\\ce{S-O}$ pada ion $\\ce{SO4^2-}$ memiliki panjang ikatan yang **identik persis ($149\\text{ pm}$)**, jauh lebih pendek daripada ikatan tunggal murni ($170\\text{ pm}$). Hal ini membuktikan bahwa struktur sebenarnya adalah **Hibrida Resonansi** di mana muatan $-2$ terdelokalisasi merata ke keempat atom oksigen dengan orde ikatan rata-rata **$1.5$** (Struktur B paling dominan).`,
      keyFormulas: [
        { name: 'Rumus Muatan Formal Atom', formula: 'FC = EV - N_{\\text{PEB}} - \\frac{1}{2} N_{\\text{PEI}}' },
      ],
    },
    {
      tag: 'contoh-gaya-antarmolekul-titik-didih',
      tags: ['analisis-titik-didih', 'isomer-pentana', 'etanol-vs-dimetil-eter', 'komparasi-ikatan-hidrogen', 'gaya-london'],
      title: 'Contoh Soal 3: Komparasi Gaya Antarmolekul, Efek Percabangan Isomer & Kekuatan Ikatan Hidrogen',
      summary: 'Rasionalisasi titik didih isomer hidrokarbon dan senyawa bertaraf massa molar serupa.',
      content: `### Soal Analisis Komparatif:
Jelaskan perbedaan titik didih pada ketiga pasang senyawa berikut secara mendalam berdasarkan konsep gaya antarmolekul:
1. **n-Pentana ($36.1^\\circ\\text{C}$) vs Neopentana / 2,2-dimetilpropana ($9.5^\\circ\\text{C}$)** (Keduanya memiliki rumus molekul identik $\\ce{C5H12}$, $M_r = 72\\text{ g/mol}$).
2. **Etanol ($\\ce{C2H5OH}$, titik didih $+78.3^\\circ\\text{C}$) vs Dimetil Eter ($\\ce{CH3-O-CH3}$, titik didih $-24^\\circ\\text{C}$)** (Keduanya berisomer rumus $\\ce{C2H6O}$, $M_r = 46\\text{ g/mol}$).
3. **Air ($\\ce{H2O}$, titik didih $100^\\circ\\text{C}$) vs Asam Fluorida ($\\ce{HF}$, titik didih $19.5^\\circ\\text{C}$)**, padahal ikatan $\\ce{H-F}$ memiliki $\\Delta EN$ yang lebih tinggi daripada $\\ce{H-O}$.

---

### Pembahasan Langkah demi Langkah:

#### 1. n-Pentana vs Neopentana:
- **Jenis Gaya:** Kedua senyawa merupakan hidrokarbon nonpolar murni, sehingga gaya antarmolekul satu-satunya yang bekerja adalah **Gaya Dispersi London**.
- **Faktor Bentuk Geometri Molekul:**
  - n-Pentana memiliki struktur rantai karbon lurus memanjang (*rod-like / cylindrical shape*), menghasilkan **luas permukaan kontak antarmolekul yang besar**. Awan elektron antarmolekul dapat saling mendekat dan berinteraksi di sepanjang rantai.
  - Neopentana memiliki struktur tetrahedral sangat bercabang dan kompak menyerupai bola (*spherical shape*), menghasilkan **luas permukaan kontak yang jauh lebih kecil**.
- **Kesimpulan:** Gaya dispersi London pada n-pentana jauh lebih kuat dan membutuhkan energi termal lebih tinggi untuk diputuskan, sehingga titik didihnya ($36.1^\\circ\\text{C}$) jauh lebih tinggi daripada neopentana ($9.5^\\circ\\text{C}$).

---

#### 2. Etanol vs Dimetil Eter:
- **Analisis Gugus Fungsi dan Interaksi:**
  - Pada etanol ($\\ce{CH3-CH2-OH}$), terdapat atom hidrogen yang terikat langsung pada atom elektronegatif oksigen (gugus hidroksil $-\\ce{OH}$). Hal ini memungkinkan terbentuknya **Ikatan Hidrogen Intermolekul yang sangat kuat** antar molekul etanol.
  - Pada dimetil eter ($\\ce{CH3-O-CH3}$), atom oksigen berada di tengah diapit oleh dua atom karbon. Tidak ada ikatan $\\ce{O-H}$ langsung. Interaksi antarmolekul dimetil eter hanya berupa **gaya dipol-dipol lemah** dan dispersi London.
- **Kesimpulan:** Energi untuk memutuskan ikatan hidrogen pada etanol jauh lebih masif daripada gaya dipol-dipol dimetil eter, menyebabkan selisih titik didih lebih dari $102^\\circ\\text{C}$!

---

#### 3. Air ($\\ce{H2O}$) vs Asam Fluorida ($\\ce{HF}$):
- **Perbandingan Ikatan Individu vs Jaringan Ikatan:**
  - Secara individual per ikatan, ikatan hidrogen $\\ce{F\\dots H-F}$ memang lebih kuat daripada $\\ce{O\\dots H-O}$ karena Fluorin lebih elektronegatif ($4.0$ vs $3.44$).
  - Namun, dalam satu molekul $\\ce{HF}$, hanya terdapat **$1$ atom hidrogen** dan $3$ PEB. Karena kekurangan atom hidrogen sebagai donor, molekul $\\ce{HF}$ rata-rata hanya dapat membentuk **$2$ ikatan hidrogen per molekul** (membentuk rantai polimer 1 dimensi zig-zag).
  - Sebaliknya, molekul $\\ce{H2O}$ memiliki rasio stoikiometri sempurna: **$2$ atom donor hidrogen dan $2$ PEB akseptor**, memungkinkan setiap molekul air berpartisipasi dalam **$4$ ikatan hidrogen serentak** membentuk jaringan kisi 3 dimensi raksasa.
- **Kesimpulan:** Jumlah total energi ikatan hidrogen per mol molekul pada air jauh melampaui asam fluorida, sehingga titik didih air ($100^\\circ\\text{C}$) jauh lebih tinggi daripada $\\ce{HF}$ ($19.5^\\circ\\text{C}$).`,
      keyFormulas: [
        { name: 'Korelasi Bentuk Molekul & Gaya London', formula: '\\text{Luas Permukaan Kontak } \\uparrow \\implies \\text{Gaya London } \\uparrow \\implies T_b \\uparrow' },
        { name: 'Rasio Ikatan Hidrogen Maksimal Air', formula: '4 \\text{ Ikatan Hidrogen per Molekul } \\ce{H2O}' },
      ],
    },
    {
      tag: 'contoh-energi-kisi-fajans',
      tags: ['siklus-born-haber', 'energi-kisi-mgo-nacl', 'kaidah-fajans', 'karakter-kovalen-parsial'],
      title: 'Contoh Soal 4: Termodinamika Energi Kisi (Siklus Born-Haber) & Kaidah Fajans Karakter Kovalen',
      summary: 'Kalkulasi energi kisi senyawa ionik dan prediksi polarisasi kation terhadap awan elektron anion.',
      content: `### Soal Olimpiade Dasar:
1. Menggunakan data termodinamika berikut, hitung energi kisi kristal ($U$) dari Natrium Klorida ($\\ce{NaCl(s)}$) menggunakan Siklus Born-Haber:
   - Entalpi pembentukan standar ($\\Delta H_f^\\circ \\ce{NaCl(s)}$) $= -411\\text{ kJ/mol}$
   - Entalpi sublimasi natrium ($\\Delta H_{\\text{sub}} \\ce{Na(s)}$) $= +107\\text{ kJ/mol}$
   - Energi ionisasi pertama natrium ($IE_1 \\ce{Na}$) $= +496\\text{ kJ/mol}$
   - Energi disosiasi ikatan klorin ($D_{\\ce{Cl-Cl}}$) $= +242\\text{ kJ/mol}$
   - Afinitas elektron klorin ($EA_1 \\ce{Cl}$) $= -349\\text{ kJ/mol}$
2. Berdasarkan **Kaidah Fajans**, jelaskan mengapa Aluminium Klorida ($\\ce{AlCl3}$) memiliki titik leleh yang relatif rendah ($192^\\circ\\text{C}$, menyublim) dan lelehannya tidak menghantarkan arus listrik, padahal terbentuk dari unsur logam dan nonlogam!

---

### Pembahasan Langkah demi Langkah:

#### 1. Kalkulasi Energi Kisi Natrium Klorida Melalui Siklus Born-Haber:
Siklus Born-Haber didasarkan pada Hukum Hess, di mana pembentukan $\\ce{NaCl(s)}$ dari unsur-unsurnya dapat melalui dua rute:
$$\\Delta H_f^\\circ = \\Delta H_{\\text{sub}} + IE_1(\\ce{Na}) + \\frac{1}{2} D(\\ce{Cl2}) + EA_1(\\ce{Cl}) + U$$
- Masukkan nilai entalpi ke dalam persamaan:
  $$-411 = +107 + (+496) + \\frac{1}{2}(+242) + (-349) + U$$
  $$-411 = +107 + 496 + 121 - 349 + U$$
  $$-411 = +375 + U$$
  $$U = -411 - 375 = \\mathbf{-786 \\text{ kJ/mol}}$$
- **Interpretasi:** Pembentukan satu mol kisi kristal padat $\\ce{NaCl}$ dari ion-ion gas $\\ce{Na+(g)}$ dan $\\ce{Cl-(g)}$ membebaskan energi sebesar **$786\\text{ kJ/mol}$**.

---

#### 2. Penerapan Kaidah Fajans pada $\\ce{AlCl3}$ vs Senyawa Ionik Murni:
Kasimir Fajans merumuskan aturan bahwa ikatan ionik murni dapat terdistorsi dan memiliki **karakter kovalen parsial signifikan** apabila terjadi polarisasi kuat:
- **Faktor Pemicu Karakter Kovalen Kaidah Fajans:**
  1. **Kation berukuran kecil dengan muatan positif tinggi:** Kation $\\ce{Al^3+}$ memiliki muatan $+3$ dan jari-jari ion sangat mungil ($53.5\\text{ pm}$), menghasilkan **densitas muatan (rapat muatan) elektrostatik yang luar biasa masif**. Kation ini memiliki daya polarisasi (*polarizing power*) yang sangat kuat.
  2. **Anion berukuran besar:** Anion klorida ($\\ce{Cl-}$) memiliki jari-jari besar ($181\\text{ pm}$) dengan awan elektron valensi terluar yang longgar dan mudah terdistorsi (*polarisabilitas tinggi*).
- **Mekanisme Polarisasi:**
  Medan listrik pekat dari kation $\\ce{Al^3+}$ menarik awan elektron anion $\\ce{Cl-}$ masuk ke daerah di antara kedua inti atom. Terjadi tumpang tindih awan elektron parsial yang mengubah karakter ikatan dari ionik murni menjadi **didominasi ikatan kovalen polar**.
- **Konsekuensi Sifat Fisis:**
  - $\\ce{AlCl3}$ tidak membentuk kisi kristal ionik raksasa yang kaku, melainkan membentuk molekul dimer kovalen $\\ce{Al2Cl6}$ pada fase uap.
  - Titik lelehnya sangat rendah ($192^\\circ\\text{C}$) dibandingkan senyawa ionik sejati seperti $\\ce{AlF3}$ ($1290^\\circ\\text{C}$, di mana anion $\\ce{F-}$ sangat kecil dan sukar dipolarisasi).
  - Dalam fasa cair (lelehan), $\\ce{AlCl3}$ berupa molekul netral tanpa ion-ion bebas, sehingga **bersifat isolator (tidak menghantarkan listrik)**.`,
      keyFormulas: [
        { name: 'Siklus Born-Haber Energi Kisi', formula: '\\Delta H_f^\\circ = \\Delta H_{\\text{sub}} + IE + \\frac{1}{2} D + EA + U' },
        { name: 'Kaidah Polarisasi Fajans', formula: '\\text{Rapat Muatan Kation } \\left(\\frac{z_+}{r_+}\\right) \\uparrow \\implies \\text{Karakter Kovalen } \\uparrow' },
      ],
    },
  ],
},

  {
  id: 104,
  topic_number: 4,
  grade: 'Kelas 10',
  semester: 2,
  curriculumPhase: 'Fase E',
  relatedOsnTopicId: 1,
  title: 'Tata Nama Senyawa & Persamaan Reaksi Kimia',
  slug: 'tata-nama-senyawa-persamaan-reaksi',
  category: 'Bahasa & Notasi Kimia',
  level: 'SMA',
  readTimeMinutes: 30,
  summary: 'Panduan komprehensif sistem tata nama senyawa anorganik biner (ionik dan kovalen menurut IUPAC), tata nama poliatomik, asam, basa, serta hidrat kristal; pengenalan dasar hidrokarbon alkana/alkena/alkuna; anatomi simbolik persamaan reaksi kimia dan hukum kekekalan massa Lavoisier; teknik penyetaraan reaksi metode inspeksi langsung dan aljabar matematis sistematis; serta formulasi persamaan reaksi ionik lengkap dan ionik bersih (net ionic equations).',
  allTags: [
      'tata-nama-senyawa',
      'senyawa-biner-ionik',
      'senyawa-biner-kovalen',
      'awalan-yunani-iupac',
      'bilangan-oksidasi-romawi',
      'ion-poliatomik',
      'oksianion-asam-basa',
      'senyawa-hidrat-kristal',
      'tata-nama-hidrokarbon',
      'persamaan-reaksi-kimia',
      'fase-fase-zat',
      'hukum-kekekalan-massa-lavoisier',
      'penyetaraan-reaksi-inspeksi',
      'penyetaraan-reaksi-aljabar',
      'reaksi-pengendapan',
      'persamaan-ionik-bersih',
      'ion-penonton-spectator-ions',
      'sistem-stok',
      'aturan-iupac',
      'elisi-vokal',
      'oksida-nitrogen',
      'koefisien-reaksi',
      'subskrip-indeks',
      'kaidah-kaho',
      'pembakaran-propana',
      'deret-klorat',
      'pembakaran-butana',
      'asam-oksi',
      'basa-hidroksida',
      'alkana-alkena-alkuna',
      'rantai-utama',
      'logam-transisi',
      'sistem-persamaan-linier',
      'reaksi-redoks-asam-nitrat',
      'timbal-iodida',
      'sistem-tertutup',
      'karbonat-asam',
      'stoikiometri-hidrat',
      'hukum-lavoisier',
      'autoredoks-disproporsionasi',
      'reaksi-redoks',
      'neraca-muatan',
      'netralisasi',
      'tanpa-ion-penonton',
      'garam-asam',
      'garam-rangkap',
      'avogadro-gay-lussac',
      'gas-hidrogen',
      'stoikiometri-dasar',
      'proses-kontak',
      'reaksi-bertahap',
      'asam-sulfat',
      'metalurgi-besi',
      'elektrolit-lemah',
      'asam-asetat',
      'hukum-gay-lussac',
      'rumus-molekul',
      'tata-nama-biner-kovalen',
      'oksianion',
      'struktur-lewis',
      'peroksidisulfat',
      'senyawa-kompleks',
      'perak-klorida',
    ],
  prerequisites: [
    {
      tag: 'bilangan-oksidasi-dasar-tatanama',
      tags: ['bilangan-oksidasi', 'aturan-penentuan-biloks', 'biloks-logam-transisi'],
      title: 'Prasyarat 1: Konsep Bilangan Oksidasi & Kaidah Penentuan Biloks Unsur',
      summary: 'Aturan baku penentuan bilangan oksidasi sebagai landasan pemberian angka Romawi pada sistem penamaan Stok.',
      content: `Bilangan oksidasi (biloks) adalah muatan listrik hipotesis yang dimiliki oleh suatu atom dalam senyawa jika seluruh pasangan elektron ikatan dianggap sepenuhnya berpindah ke atom yang lebih elektronegatif.

### 1. Kaidah Baku Penentuan Bilangan Oksidasi (IUPAC)

1. **Unsur Bebas:** Memiliki biloks $= 0$.  
   Contoh: atom netral $\\ce{Fe}, \\ce{Na}, \\ce{C}$ serta molekul unsur homointi $\\ce{H2}, \\ce{O2}, \\ce{N2}, \\ce{O3}, \\ce{P4}, \\ce{S8}$.
2. **Ion Monatomik:** Biloks sama dengan muatan ion fisiknya.  
   Contoh: $\\ce{Na+} (+1), \\ce{Mg^2+} (+2), \\ce{Al^3+} (+3), \\ce{Cl-} (-1), \\ce{S^2-} (-2), \\ce{N^3-} (-3)$.
3. **Fluorin:** Unsur paling elektronegatif, selalu memiliki biloks $= -1$ dalam semua senyawanya.
4. **Hidrogen:**
   - Umumnya bernilai $+1$ ketika berikatan dengan nonlogam (contoh: $\\ce{H2O}, \\ce{HCl}, \\ce{NH3}, \\ce{CH4}$).
   - Bernilai $-1$ khusus pada **hidrida logam** di mana $\\ce{H}$ berikatan dengan logam sangat elektropositif (contoh: $\\ce{NaH}, \\ce{CaH2}, \\ce{LiAlH4}$).
5. **Oksigen:**
   - Umumnya bernilai $-2$ pada sebagian besar senyawa oksida (contoh: $\\ce{H2O}, \\ce{CO2}, \\ce{CaO}, \\ce{H2SO4}$).
   - Pengecualian pada:
     - **Peroksida (mengandung ion $\\ce{O2^2-}$):** biloks $\\ce{O} = -1$ (contoh: $\\ce{H2O2}, \\ce{Na2O2}, \\ce{BaO2}$).
     - **Superoksida (mengandung ion $\\ce{O2-}$):** biloks $\\ce{O} = -\\frac{1}{2}$ (contoh: $\\ce{KO2}, \\ce{RbO2}$).
     - **Senyawa dengan Fluorin ($\\ce{OF2}$):** biloks $\\ce{O} = +2$ (karena $\\ce{F}$ lebih elektronegatif).
6. **Logam Golongan Utama:**
   - Logam Alkali (Golongan IA: $\\ce{Li, Na, K, Rb, Cs}$) selalu bernilai $+1$.
   - Logam Alkali Tanah (Golongan IIA: $\\ce{Be, Mg, Ca, Sr, Ba}$) selalu bernilai $+2$.
   - Aluminium ($\\ce{Al}$) selalu bernilai $+3$, Seng ($\\ce{Zn}$) selalu $+2$, dan Perak ($\\ce{Ag}$) selalu $+1$.
7. **Jumlah Total Bilangan Oksidasi:**
   - Dalam molekul netral: $\\sum \\text{Biloks} = 0$.
   - Dalam ion poliatomik: $\\sum \\text{Biloks} = \\text{Muatan ion tersebut}$.

---

### 2. Signifikansi Biloks pada Tata Nama Senyawa

Logam-logam transisi (seperti Besi $\\ce{Fe}$, Tembaga $\\ce{Cu}$, Timbal $\\ce{Pb}$, Timah $\\ce{Sn}$, Mangan $\\ce{Mn}$) dapat memiliki **lebih dari satu bilangan oksidasi**. Angka biloks inilah yang nantinya dituliskan dalam **angka Romawi** di dalam tanda kurung pada nama senyawa (Sistem Stok IUPAC):
- $\\ce{FeCl2}$: Besi memiliki biloks $+2 \\implies$ **Besi(II) klorida**.
- $\\ce{FeCl3}$: Besi memiliki biloks $+3 \\implies$ **Besi(III) klorida**.`,
      keyFormulas: [
        { name: 'Kaidah Senyawa Netral', formula: '\\sum_{i} n_i \\cdot \\text{Biloks}_i = 0' },
        { name: 'Kaidah Ion Poliatomik', formula: '\\sum_{i} n_i \\cdot \\text{Biloks}_i = q_{\\text{ion}}' },
      ],
    },
    {
      tag: 'tabel-kation-anion-poliatomik',
      tags: ['kation-logam', 'anion-monatomik', 'anion-poliatomik', 'oksianion', 'tata-nama-anion'],
      title: 'Prasyarat 2: Khazanah Kation dan Anion (Monatomik & Poliatomik Oksianion)',
      summary: 'Daftar nama dan formula kation logam umum serta deret tatanama anion oksi berakhiran -at dan -it.',
      content: `Penyusunan rumus dan penamaan senyawa kimia anorganik mensyaratkan penguasaan formula dan muatan ion-ion pembentuknya.

### 1. Daftar Kation Umum (Ion Positif)

| Kation Bervalensi Tunggal | Kation Logam Bervalensi Jamak (Transisi) |
| :--- | :--- |
| $\\ce{H+}$ : Ion Hidrogen | $\\ce{Fe^2+}$ : Besi(II) / Fero |
| $\\ce{Li+}$ : Ion Litium | $\\ce{Fe^3+}$ : Besi(III) / Feri |
| $\\ce{Na+}$ : Ion Natrium | $\\ce{Cu+}$ : Tembaga(I) / Kupro |
| $\\ce{K+}$ : Ion Kalium | $\\ce{Cu^2+}$ : Tembaga(II) / Kupri |
| $\\ce{Ag+}$ : Ion Perak | $\\ce{Sn^2+}$ : Timah(II) / Stano |
| $\\ce{Mg^2+}$ : Ion Magnesium | $\\ce{Sn^4+}$ : Timah(IV) / Stani |
| $\\ce{Ca^2+}$ : Ion Kalsium | $\\ce{Pb^2+}$ : Timbal(II) / Plumbo |
| $\\ce{Ba^2+}$ : Ion Barium | $\\ce{Pb^4+}$ : Timbal(IV) / Plumbi |
| $\\ce{Zn^2+}$ : Ion Seng | $\\ce{Hg2^2+}$ : Raksa(I) |
| $\\ce{Al^3+}$ : Ion Aluminium | $\\ce{Hg^2+}$ : Raksa(II) |
| $\\ce{NH4+}$ : Ion Amonium (Poliatomik) | $\\ce{Cr^3+}$ : Kromium(III) |

---

### 2. Daftar Anion Monatomik & Oksianion Poliatomik

Anion monatomik dinamai dengan menambahkan akhiran **-ida** pada akar kata nama unsur nonlogamnya:
- $\\ce{F-}$ : Fluorida, $\\ce{Cl-}$ : Klorida, $\\ce{Br-}$ : Bromida, $\\ce{I-}$ : Iodida.
- $\\ce{O^2-}$ : Oksida, $\\ce{S^2-}$ : Sulfida, $\\ce{N^3-}$ : Nitrida, $\\ce{P^3-}$ : Fosfida, $\\ce{C^4-}$ : Karbida.

**Sistem Penamaan Deret Oksianion (Klorin/Bromin/Iodin):**
Deret oksianion tersusun berdasarkan kenaikan jumlah atom oksigen (kenaikan bilangan oksidasi):
1. **Hipo-...-it** (Paling sedikit oksigen, biloks $+1$): $\\ce{ClO-}$ = Ion Hipoklorit.
2. **-it** (Sedikit oksigen, biloks $+3$): $\\ce{ClO2-}$ = Ion Klorit.
3. **-at** (Banyak oksigen, biloks $+5$): $\\ce{ClO3-}$ = Ion Klorat.
4. **Per-...-at** (Paling banyak oksigen, biloks $+7$): $\\ce{ClO4-}$ = Ion Perklorat.

**Anion Poliatomik Populer Lainnya:**
- $\\ce{OH-}$ : Hidroksida
- $\\ce{NO2-}$ : Nitrit vs $\\ce{NO3-}$ : Nitrat
- $\\ce{SO3^2-}$ : Sulfit vs $\\ce{SO4^2-}$ : Sulfat
- $\\ce{CO3^2-}$ : Karbonat vs $\\ce{HCO3-}$ : Hidrogen karbonat (Bikarbonat)
- $\\ce{PO4^3-}$ : Fosfat vs $\\ce{HPO4^2-}$ : Hidrogen fosfat
- $\\ce{CH3COO-}$ : Asetat (Etanoat)
- $\\ce{CrO4^2-}$ : Kromat vs $\\ce{Cr2O7^2-}$ : Dikromat
- $\\ce{MnO4-}$ : Permanganat
- $\\ce{CN-}$ : Sianida vs $\\ce{SCN-}$ : Tiosianat`,
      keyFormulas: [
        { name: 'Kaidah Penyilangan Muatan Senyawa Netral', formula: 'x \\ce{A^{y+}} + y \\ce{B^{x-}} \\to \\ce{A_x B_y}' },
      ],
    },
  ],
  core_concepts: [
    {
      tag: 'tata-nama-senyawa-biner-ionik-kovalen',
      tags: ['tata-nama-biner', 'senyawa-ionik-biner', 'sistem-stok', 'senyawa-kovalen-biner', 'awalan-yunani'],
      title: 'Konsep Inti 1: Tata Nama Senyawa Biner (Ionik Logam-Nonlogam vs Kovalen Nonlogam-Nonlogam)',
      summary: 'Aturan IUPAC penamaan senyawa dua unsur: sistem angka Romawi untuk logam transisi dan sistem awalan Yunani untuk senyawa kovalen.',
      content: `Senyawa biner adalah senyawa kimia yang tersusun dari **hanya dua unsur yang berbeda**. Tata nama senyawa biner dibedakan secara tegas berdasarkan jenis ikatan kimianya (apakah senyawa ionik atau senyawa molekuler kovalen).

### 1. Tata Nama Senyawa Biner Ionik (Logam + Nonlogam)

Senyawa ionik terbentuk dari kation logam dan anion nonlogam:
1. **Logam Bervalensi Tunggal (Golongan IA, IIA, $\\ce{Al, Zn, Ag}$):**
   Karena kationnya hanya memiliki satu kemungkinan muatan listrik, **tidak perlu mencantumkan angka Romawi maupun awalan angka**:
   $$\\mathbf{\\text{[Nama Logam]} + \\text{[Nama Nonlogam + akhiran -ida]}}$$
   - $\\ce{NaCl}$ : Natrium klorida (bukan *mononatrium monoklorida*)
   - $\\ce{MgBr2}$ : Magnesium bromida (bukan *magnesium dibromida*)
   - $\\ce{Al2O3}$ : Aluminium oksida (bukan *dialuminium trioksida*)
   - $\\ce{K2S}$ : Kalium sulfida
   - $\\ce{Ca3N2}$ : Kalsium nitrida
2. **Logam Bervalensi Jamak (Logam Transisi / Post-Transisi):**
   Karena atom logam dapat membentuk lebih dari satu kation stabil, wajib menyertakan **Bilangan Oksidasi Logam dalam Angka Romawi** di dalam kurung tepat setelah nama logam (**Sistem Stok IUPAC**):
   $$\\mathbf{\\text{[Nama Logam]} + \\mathbf{\\text{(Angka Romawi Biloks)}} + \\text{[Nama Nonlogam + -ida]}}$$
   - $\\ce{FeO}$ : Biloks $\\ce{Fe} = +2 \\implies$ **Besi(II) oksida** *(nama lama: Fero oksida)*
   - $\\ce{Fe2O3}$ : Biloks $\\ce{Fe} = +3 \\implies$ **Besi(III) oksida** *(nama lama: Feri oksida)*
   - $\\ce{Cu2O}$ : Biloks $\\ce{Cu} = +1 \\implies$ **Tembaga(I) oksida** *(Kupro oksida)*
   - $\\ce{CuO}$ : Biloks $\\ce{Cu} = +2 \\implies$ **Tembaga(II) oksida** *(Kupri oksida)*
   - $\\ce{SnCl2}$ : **Timah(II) klorida** vs $\\ce{SnCl4}$ : **Timah(IV) klorida**
   - $\\ce{PbO2}$ : **Timbal(IV) oksida**

---

### 2. Tata Nama Senyawa Biner Kovalen (Nonlogam + Nonlogam)

Senyawa kovalen tersusun dari dua unsur nonlogam. Hubungan stoikiometrinya dinyatakan menggunakan **Awalan Angka Yunani**:
$$\\mathbf{\\text{[Awalan]} + \\text{[Nonlogam 1]} + \\text{[Awalan]} + \\text{[Nonlogam 2 + -ida]}}$$

| Angka | Awalan Yunani | Angka | Awalan Yunani |
| :---: | :--- | :---: | :--- |
| **1** | Mono- | **6** | Heksa- |
| **2** | Di- | **7** | Hepta- |
| **3** | Tri- | **8** | Okta- |
| **4** | Tetra- | **9** | Nona- (atau Enea-) |
| **5** | Penta- | **10** | Deka- |

> [!IMPORTANT]
> **Dua Kaidah Emas Senyawa Kovalen Biner:**
> 1. **Aturan Mono- Pertama:** Awalan *mono-* **TIDAK PERNAH digunakan** pada unsur pertama jika jumlahnya hanya satu.  
>    Contoh: $\\ce{CO}$ adalah **Karbon monoksida** (bukan *monokarbon monoksida*); $\\ce{NO2}$ adalah **Nitrogen dioksida**.
> 2. **Elisi Vokal:** Jika awalan berakhiran huruf vokal *-a* atau *-o* bertemu dengan kata oksida (yang diawali huruf *o-*), huruf vokal terakhir dihilangkan demi kemudahan pelafalan:
>    - *Tetra- + oksida* $\\to$ **Tetroksida** (contoh: $\\ce{N2O4}$ = Dinitrogen tetroksida).
>    - *Penta- + oksida* $\\to$ **Pentoksida** (contoh: $\\ce{N2O5}$ = Dinitrogen pentoksida).
>    - *Mono- + oksida* $\\to$ **Monoksida** (contoh: $\\ce{CO}$ = Karbon monoksida).
> 3. **Urutan Penulisan Unsur Nonlogam:** Mengikuti urutan elektronegativitas menaik:  
>    $\\ce{B} \\to \\ce{Si} \\to \\ce{C} \\to \\ce{Sb} \\to \\ce{As} \\to \\ce{P} \\to \\ce{N} \\to \\ce{H} \\to \\ce{Te} \\to \\ce{Se} \\to \\ce{S} \\to \\ce{I} \\to \\ce{Br} \\to \\ce{Cl} \\to \\ce{O} \\to \\ce{F}$.`,
      keyFormulas: [
        { name: 'Rumus Struktur Nama Kovalen Biner', formula: '\\text{Awalan-Unsur}_1 + \\text{Awalan-Unsur}_2\\text{-ida}' },
        { name: 'Rumus Struktur Nama Ionik Sistem Stok', formula: '\\text{Nama Logam} + (\\text{Biloks Romawi}) + \\text{Nama Anion}' },
      ],
    },
    {
      tag: 'tata-nama-poliatomik-asam-basa-hidrat',
      tags: ['senyawa-poliatomik', 'tata-nama-asam', 'tata-nama-basa', 'senyawa-hidrat', 'pohon-keputusan-tatanama'],
      title: 'Konsep Inti 2: Tata Nama Senyawa Poliatomik, Asam, Basa & Senyawa Hidrat Kristal',
      summary: 'Algoritma penamaan senyawa garam poliatomik, senyawa asam biner dan asam oksi, basa hidroksida, serta penamaan hidrat berair kristal.',
      content: `Pemberian nama untuk senyawa anorganik yang melibatkan ion poliatomik, asam, basa, serta kristal hidrat mengikuti konvensi terstruktur IUPAC.

### 1. Senyawa Poliatomik (Garam Poliatomik)

Senyawa poliatomik terdiri dari kation (logam atau ion amonium $\\ce{NH4+}$) yang berikatan dengan anion poliatomik.
$$\\mathbf{\\text{[Nama Kation Logam (disertai Romawi jika transisi)]} + \\text{[Nama Anion Poliatomik]}}$$
- $\\ce{Na2SO4}$ : Natrium sulfat
- $\\ce{KNO3}$ : Kalium nitrat
- $\\ce{CaCO3}$ : Kalsium karbonat
- $\\ce{(NH4)2CO3}$ : Amonium karbonat
- $\\ce{Fe2(SO4)3}$ : Besi(III) sulfat (karena $\\ce{SO4}$ bermuatan $-2$, $3 \\times (-2) = -6$, maka $2 \\ce{Fe} = +6 \\implies \\ce{Fe} = +3$)
- $\\ce{CuSO4}$ : Tembaga(II) sulfat
- $\\ce{KMnO4}$ : Kalium permanganat
- $\\ce{K2Cr2O7}$ : Kalium dikromat

---

### 2. Tata Nama Asam & Basa Arrhenius

1. **Tata Nama Senyawa Asam (Melepas ion $\\ce{H+}$ dalam air):**
   Nama senyawa asam diawali dengan kata **"Asam"** (mewakili kation $\\ce{H+}$) diikuti oleh nama anion sisa asamnya:
   - **Asam Biner (Tanpa Oksigen):** $\\ce{HCl}$ = Asam klorida, $\\ce{HBr}$ = Asam bromida, $\\ce{H2S}$ = Asam sulfida, $\\ce{HCN}$ = Asam sianida.
   - **Asam Oksi (Mengandung Oksigen):**
     - $\\ce{HNO3}$ : Asam nitrat vs $\\ce{HNO2}$ : Asam nitrit
     - $\\ce{H2SO4}$ : Asam sulfat vs $\\ce{H2SO3}$ : Asam sulfit
     - $\\ce{H3PO4}$ : Asam fosfat
     - $\\ce{H2CO3}$ : Asam karbonat
     - $\\ce{CH3COOH}$ : Asam asetat (Asam cuka / Asam etanoat)
2. **Tata Nama Senyawa Basa (Melepas ion $\\ce{OH-}$ dalam air):**
   Nama kation logam diikuti oleh kata **"Hidroksida"**:
   - $\\ce{NaOH}$ : Natrium hidroksida
   - $\\ce{KOH}$ : Kalium hidroksida
   - $\\ce{Ca(OH)2}$ : Kalsium hidroksida
   - $\\ce{Ba(OH)2}$ : Barium hidroksida
   - $\\ce{Al(OH)3}$ : Aluminium hidroksida
   - $\\ce{Fe(OH)2}$ : Besi(II) hidroksida vs $\\ce{Fe(OH)3}$ : Besi(III) hidroksida

---

### 3. Tata Nama Senyawa Hidrat (Air Kristal)

Senyawa hidrat adalah kristal padat yang mengikat sejumlah molekul air ($\\ce{H2O}$) secara teratur dalam struktur kisi kristalnya:
$$\\mathbf{\\text{[Nama Senyawa Anhidrat]} + \\text{[Awalan Yunani]} + \\mathbf{\\text{hidrat}}}$$
- $\\ce{CuSO4 . 5H2O}$ : Tembaga(II) sulfat **pentahidrat** *(terusi / vitriol biru)*
- $\\ce{CaSO4 . 2H2O}$ : Kalsium sulfat **dihidrat** *(gipsum)*
- $\\ce{MgSO4 . 7H2O}$ : Magnesium sulfat **heptahidrat** *(garam inggris / epsom)*
- $\\ce{Na2CO3 . 10H2O}$ : Natrium karbonat **dekahidrat** *(soda cuci)*
- $\\ce{FeSO4 . 7H2O}$ : Besi(II) sulfat **heptahidrat**

---

### 4. Peta Pohon Keputusan Algoritma Tata Nama Senyawa Kimia

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 340" width="100%" height="auto" class="max-w-[840px] select-none font-sans">
  <defs>
    <linearGradient id="treeRoot" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="treeIonic" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563eb"/>
      <stop offset="100%" stop-color="#1d4ed8"/>
    </linearGradient>
    <linearGradient id="treeCov" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="100%" stop-color="#047857"/>
    </linearGradient>
    <linearGradient id="treeAcid" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#d97706"/>
      <stop offset="100%" stop-color="#b45309"/>
    </linearGradient>
    <marker id="arrowTree" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="#64748b"/>
    </marker>
  </defs>

  <!-- CONTAINER -->
  <rect width="840" height="340" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- ROOT NODE -->
  <g transform="translate(320, 16)">
    <rect width="200" height="36" rx="10" fill="url(#treeRoot)"/>
    <text x="100" y="22" font-size="11.5" font-weight="bold" fill="#ffffff" text-anchor="middle">SENYAWA KIMIA</text>
  </g>

  <!-- LINES FROM ROOT TO 3 BRANCHES -->
  <path d="M 360 52 L 150 90" stroke="#64748b" stroke-width="2" marker-end="url(#arrowTree)"/>
  <path d="M 420 52 L 420 90" stroke="#64748b" stroke-width="2" marker-end="url(#arrowTree)"/>
  <path d="M 480 52 L 690 90" stroke="#64748b" stroke-width="2" marker-end="url(#arrowTree)"/>

  <!-- CABANG 1: SENYAWA IONIK (KIRI) -->
  <g transform="translate(30, 95)">
    <rect width="240" height="42" rx="8" fill="url(#treeIonic)"/>
    <text x="120" y="18" font-size="10.5" font-weight="bold" fill="#ffffff" text-anchor="middle">1. SENYAWA IONIK</text>
    <text x="120" y="32" font-size="9" fill="#bfdbfe" text-anchor="middle">(Ada Logam atau Kation NH₄⁺)</text>

    <!-- Sub-cabang Logam Utama vs Transisi -->
    <path d="M 80 42 L 50 80" stroke="#93c5fd" stroke-width="1.5" marker-end="url(#arrowTree)"/>
    <path d="M 160 42 L 190 80" stroke="#93c5fd" stroke-width="1.5" marker-end="url(#arrowTree)"/>

    <!-- Kotak Logam Gol Utama -->
    <rect x="-10" y="85" width="125" height="135" rx="8" fill="#ffffff" stroke="#93c5fd" stroke-width="1.2"/>
    <text x="52" y="102" font-size="9.5" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Valensi Tunggal</text>
    <text x="52" y="115" font-size="8" fill="#64748b" text-anchor="middle">(IA, IIA, Al, Zn, Ag)</text>
    <line x1="0" y1="122" x2="105" y2="122" stroke="#e2e8f0"/>
    <text x="52" y="138" font-size="8.5" font-weight="bold" fill="#2563eb" text-anchor="middle">Tanpa Angka Romawi</text>
    <text x="52" y="152" font-size="8.5" fill="#334155" text-anchor="middle">Nama Logam + Anion</text>
    <text x="52" y="174" font-size="8" font-style="italic" fill="#0284c7" text-anchor="middle">NaCl = Natrium klorida</text>
    <text x="52" y="190" font-size="8" font-style="italic" fill="#0284c7" text-anchor="middle">Al₂O₃ = Aluminium oksida</text>
    <text x="52" y="206" font-size="8" font-style="italic" fill="#0284c7" text-anchor="middle">K₂SO₄ = Kalium sulfat</text>

    <!-- Kotak Logam Transisi -->
    <rect x="125" y="85" width="130" height="135" rx="8" fill="#ffffff" stroke="#93c5fd" stroke-width="1.2"/>
    <text x="190" y="102" font-size="9.5" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Valensi Jamak</text>
    <text x="190" y="115" font-size="8" fill="#64748b" text-anchor="middle">(Fe, Cu, Sn, Pb, dll)</text>
    <line x1="135" y1="122" x2="245" y2="122" stroke="#e2e8f0"/>
    <text x="190" y="138" font-size="8.5" font-weight="bold" fill="#dc2626" text-anchor="middle">Wajib Angka Romawi!</text>
    <text x="190" y="152" font-size="8.5" fill="#334155" text-anchor="middle">Logam(Biloks) + Anion</text>
    <text x="190" y="174" font-size="8" font-style="italic" fill="#991b1b" text-anchor="middle">FeCl₂ = Besi(II) klorida</text>
    <text x="190" y="190" font-size="8" font-style="italic" fill="#991b1b" text-anchor="middle">FeCl₃ = Besi(III) klorida</text>
    <text x="190" y="206" font-size="8" font-style="italic" fill="#991b1b" text-anchor="middle">Cu₂O = Tembaga(I) oksida</text>
  </g>

  <!-- CABANG 2: SENYAWA KOVALEN (TENGAH) -->
  <g transform="translate(300, 95)">
    <rect width="240" height="42" rx="8" fill="url(#treeCov)"/>
    <text x="120" y="18" font-size="10.5" font-weight="bold" fill="#ffffff" text-anchor="middle">2. SENYAWA KOVALEN</text>
    <text x="120" y="32" font-size="9" fill="#a7f3d0" text-anchor="middle">(Sesama Atom Nonlogam)</text>

    <!-- Kotak Penjelasan Kovalen -->
    <rect x="0" y="85" width="240" height="135" rx="8" fill="#ffffff" stroke="#6ee7b7" stroke-width="1.2"/>
    <text x="120" y="105" font-size="9.5" font-weight="bold" fill="#065f46" text-anchor="middle">Gunakan Awalan Yunani</text>
    <text x="120" y="120" font-size="8.5" fill="#64748b" text-anchor="middle">(mono, di, tri, tetra, penta...)</text>
    <line x1="15" y1="128" x2="225" y2="128" stroke="#e2e8f0"/>
    <text x="120" y="145" font-size="8.5" font-weight="bold" fill="#047857" text-anchor="middle">Kaidah: Mono di depan diabaikan</text>
    <text x="120" y="165" font-size="8" font-style="italic" fill="#065f46" text-anchor="middle">CO = Karbon monoksida</text>
    <text x="120" y="181" font-size="8" font-style="italic" fill="#065f46" text-anchor="middle">CO₂ = Karbon dioksida</text>
    <text x="120" y="197" font-size="8" font-style="italic" fill="#065f46" text-anchor="middle">N₂O₅ = Dinitrogen pentoksida</text>
    <text x="120" y="211" font-size="8" font-style="italic" fill="#065f46" text-anchor="middle">SF₆ = Belerang heksafluorida</text>
  </g>

  <!-- CABANG 3: ASAM, BASA & HIDRAT (KANAN) -->
  <g transform="translate(570, 95)">
    <rect width="240" height="42" rx="8" fill="url(#treeAcid)"/>
    <text x="120" y="18" font-size="10.5" font-weight="bold" fill="#ffffff" text-anchor="middle">3. ASAM, BASA &amp; HIDRAT</text>
    <text x="120" y="32" font-size="9" fill="#fde68a" text-anchor="middle">(Spesifik Gugus &amp; Air Kristal)</text>

    <rect x="0" y="85" width="240" height="135" rx="8" fill="#ffffff" stroke="#fcd34d" stroke-width="1.2"/>
    <text x="120" y="105" font-size="9.5" font-weight="bold" fill="#92400e" text-anchor="middle">Aturan Penamaan Spesifik</text>
    <line x1="15" y1="115" x2="225" y2="115" stroke="#e2e8f0"/>
    <text x="20" y="132" font-size="8.5" font-weight="bold" fill="#b45309">Asam (H⁺):</text>
    <text x="90" y="132" font-size="8" fill="#334155">Kata "Asam" + Anion (HCl, H₂SO₄)</text>
    <text x="20" y="152" font-size="8.5" font-weight="bold" fill="#b45309">Basa (OH⁻):</text>
    <text x="90" y="152" font-size="8" fill="#334155">Nama Kation + "Hidroksida"</text>
    <text x="20" y="172" font-size="8.5" font-weight="bold" fill="#b45309">Hidrat:</text>
    <text x="90" y="172" font-size="8" fill="#334155">Nama Garam + Awalan + "hidrat"</text>
    <line x1="15" y1="184" x2="225" y2="184" stroke="#e2e8f0"/>
    <text x="120" y="200" font-size="8" font-style="italic" fill="#78350f" text-anchor="middle">CuSO₄·5H₂O = Tembaga(II) sulfat pentahidrat</text>
  </g>

  <!-- BANNER BAWAH -->
  <g transform="translate(30, 290)">
    <rect width="780" height="34" rx="8" fill="#0f172a"/>
    <text x="390" y="21" font-size="10.5" font-weight="bold" fill="#f8fafc" text-anchor="middle">
      Kunci Sukses: Kenali terlebih dahulu apakah unsur pertama adalah LOGAM (Sistem Stok) atau NONLOGAM (Sistem Awalan Yunani)!
    </text>
  </g>
</svg>`,
      keyFormulas: [
        { name: 'Rumus Senyawa Hidrat Kristal', formula: '\\ce{A_x B_y . n H2O} \\implies \\text{Nama Garam} + \\text{Awalan-} + \\text{hidrat}' },
      ],
    },
    {
      tag: 'tata-nama-hidrokarbon-dasar',
      tags: ['hidrokarbon', 'alkana-alkena-alkuna', 'deret-homolog', 'awalan-rantai-karbon'],
      title: 'Konsep Inti 3: Tata Nama Hidrokarbon Dasar (Alkana, Alkena, Alkuna C1 - C10)',
      summary: 'Dasar penamaan rantai karbon alifatik jenuh dan tak jenuh menurut aturan IUPAC.',
      content: `Hidrokarbon adalah senyawa organik paling sederhana yang hanya terdiri dari atom Karbon ($\\ce{C}$) dan Hidrogen ($\\ce{H}$).

### 1. Awalan Jumlah Atom Karbon Rantai Utama (C1 - C10)

| Jumlah C | Awalan IUPAC | Alkana ($\\ce{C_n H_{2n+2}}$) | Alkena ($\\ce{C_n H_{2n}}$) | Alkuna ($\\ce{C_n H_{2n-2}}$) |
| :---: | :--- | :--- | :--- | :--- |
| **C1** | Met- | Metana ($\\ce{CH4}$) | *(Tidak ada)* | *(Tidak ada)* |
| **C2** | Et- | Etana ($\\ce{C2H6}$) | Etena ($\\ce{C2H4}$) | Etuna / Asetilena ($\\ce{C2H2}$) |
| **C3** | Prop- | Propana ($\\ce{C3H8}$) | Propena ($\\ce{C3H6}$) | Propuna ($\\ce{C3H4}$) |
| **C4** | But- | Butana ($\\ce{C4H10}$) | Butena ($\\ce{C4H8}$) | Butuna ($\\ce{C4H6}$) |
| **C5** | Pent- | Pentana ($\\ce{C5H12}$) | Pentena ($\\ce{C5H10}$) | Pentuna ($\\ce{C5H8}$) |
| **C6** | Heks- | Heksana ($\\ce{C6H14}$) | Heksena ($\\ce{C6H12}$) | Heksuna ($\\ce{C6H10}$) |
| **C7** | Hept- | Heptana ($\\ce{C7H16}$) | Heptena ($\\ce{C7H14}$) | Heptuna ($\\ce{C7H12}$) |
| **C8** | Okt- | Oktana ($\\ce{C8H18}$) | Oktena ($\\ce{C8H16}$) | Oktuna ($\\ce{C8H14}$) |
| **C9** | Non- | Nonana ($\\ce{C9H20}$) | Nonena ($\\ce{C9H18}$) | Nonuna ($\\ce{C9H16}$) |
| **C10** | Dek- | Dekana ($\\ce{C10H22}$) | Dekena ($\\ce{C10H20}$) | Dekuna ($\\ce{C10H18}$) |

---

### 2. Aturan Tatanama Rantai Bercabang Sederhana
1. Tentukan **rantai karbon terpanjang dan berurutan** sebagai rantai induk.
2. Beri penomoran atom karbon pada rantai induk dimulai dari ujung yang **paling dekat dengan gugus cabang (alkil) atau ikatan rangkap**.
3. Gugus cabang alkil (rumus $-\\ce{C_n H_{2n+1}}$) dinamai dengan akhiran **-il**:
   - $-\\ce{CH3}$ : Metil
   - $-\\ce{C2H5}$ : Etil
   - $-\\ce{C3H7}$ : Propil / Isopropil
4. Format nama lengkap:
   $$\\mathbf{\\text{[Nomor Cabang]} - \\text{[Nama Alkil]} + \\text{[Nama Rantai Induk]}}$$
   Contoh: $\\ce{CH3-CH(CH3)-CH2-CH3}$ dinamai **2-metilbutana**.`,
      keyFormulas: [
        { name: 'Rumus Umum Alkana', formula: '\\ce{C_n H_{2n+2}}' },
        { name: 'Rumus Umum Alkena', formula: '\\ce{C_n H_{2n}}' },
        { name: 'Rumus Umum Alkuna', formula: '\\ce{C_n H_{2n-2}}' },
      ],
    },
    {
      tag: 'anatomi-persamaan-reaksi-dan-hukum-lavoisier',
      tags: ['persamaan-reaksi', 'reaktan-produk', 'koefisien-reaksi', 'subskrip-indeks', 'fase-zat', 'hukum-lavoisier'],
      title: 'Konsep Inti 4: Anatomi Persamaan Reaksi Kimia & Hukum Kekekalan Massa Lavoisier',
      summary: 'Arti lambang koefisien reaksi vs indeks rumus, simbol fasa zat padat/cair/gas/larutan, dan pemenuhan neraca massa.',
      content: `Persamaan reaksi kimia adalah pernyataan simbolis menggunakan rumus-rumus kimia yang menggambarkan perubahan zat-zat pereaksi (reaktan) menjadi zat-zat hasil reaksi (produk).

### 1. Anatomi Komponen Persamaan Reaksi

Perhatikan persamaan reaksi pembakaran gas metana berikut:
$$\\mathbf{1\\ce{CH4(g)} + 2\\ce{O2(g)} \\to 1\\ce{CO2(g)} + 2\\ce{H2O(g)}}$$

1. **Reaktan (Pereaksi):** Zat mula-mula yang bereaksi, terletak di sebelah **kiri tanda panah** ($\\ce{CH4}$ dan $\\ce{O2}$).
2. **Produk (Hasil Reaksi):** Zat baru yang dihasilkan setelah reaksi kimia berlangsung, terletak di sebelah **kanan tanda panah** ($\\ce{CO2}$ dan $\\ce{H2O}$).
3. **Koefisien Stoikiometri (Angka di Depan Rumus):**
   - Angka $1, 2, 1, 2$ di depan rumus kimia.
   - Menunjukkan **perbandingan jumlah partikel molekul atau rasio mol** yang terlibat secara kuantitatif dalam reaksi.
   - Koefisien bernilai $1$ umumnya tidak perlu dituliskan.
   - **Koefisien reaksi adalah SATU-SATUNYA angka yang boleh diubah-ubah ketika menyetarakan persamaan reaksi!**
4. **Angka Indeks / Subskrip (Angka Kecil di Bawah):**
   - Menunjukkan jumlah atom unsur yang terikat secara kimiawi di dalam satu unit molekul (misal angka $4$ pada $\\ce{CH4}$, angka $2$ pada $\\ce{O2}$).
   - **ANGKA INDEKS DILARANG KERAS DIUBAH!** Mengubah angka indeks berarti mengubah identitas zat kimia (misal mengubah $\\ce{CO2}$ menjadi $\\ce{CO}$ akan mengubah karbon dioksida tak beracun menjadi karbon monoksida yang mematikan).
5. **Fase Wujud Zat (Simbol dalam Kurung):**
   - **$(s)$ - *Solid* (Padat):** Zat berwujud padatan atau kristal (misal $\\ce{NaCl(s)}, \\ce{Fe(s)}$).
   - **$(l)$ - *Liquid* (Cair Murni):** Cairan murni tanpa pelarut (misal $\\ce{H2O(l)}, \\ce{Br2(l)}, \\ce{Hg(l)}$).
   - **$(g)$ - *Gas* (Fasa Gas):** Berwujud gas atau uap (misal $\\ce{O2(g)}, \\ce{CO2(g)}$).
   - **$(aq)$ - *Aqueous* (Larutan Berair):** Zat terlarut homogen di dalam air (misal $\\ce{NaCl(aq)}, \\ce{HCl(aq)}$).
   - Endapan padat terkadang diberi simbol tanda panah ke bawah ($\\downarrow$), dan gas yang terbebas diberi tanda panah ke atas ($\\uparrow$).

---

### 2. Diagram Anatomi Persamaan Reaksi & Neraca Lavoisier

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 820 310" width="100%" height="auto" class="max-w-[820px] select-none font-sans">
  <defs>
    <linearGradient id="eqBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f8fafc"/>
    </linearGradient>
    <marker id="arrowRxn" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="#2563eb"/>
    </marker>
  </defs>

  <rect width="820" height="310" rx="16" fill="url(#eqBg)" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- TITLE -->
  <text x="410" y="26" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">ANATOMI PERSAMAAN REAKSI KIMIA &amp; NERACA LAVOISIER</text>

  <!-- DISPLAY PERSAMAAN REAKSI -->
  <g transform="translate(110, 60)">
    <rect width="600" height="75" rx="12" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>

    <!-- Reaktan CH4 + 2 O2 -->
    <text x="30" y="46" font-size="22" font-family="monospace" font-weight="bold" fill="#0f172a">
      CH<tspan font-size="15" dy="6">4</tspan><tspan dy="-6" font-size="14" fill="#64748b">(g)</tspan> + 
      <tspan fill="#2563eb" font-weight="extrabold">2</tspan> O<tspan font-size="15" dy="6">2</tspan><tspan dy="-6" font-size="14" fill="#64748b">(g)</tspan>
    </text>

    <!-- Panah Reaksi -->
    <path d="M 285 40 L 335 40" stroke="#2563eb" stroke-width="3" marker-end="url(#arrowRxn)"/>

    <!-- Produk CO2 + 2 H2O -->
    <text x="355" y="46" font-size="22" font-family="monospace" font-weight="bold" fill="#0f172a">
      CO<tspan font-size="15" dy="6">2</tspan><tspan dy="-6" font-size="14" fill="#64748b">(g)</tspan> + 
      <tspan fill="#2563eb" font-weight="extrabold">2</tspan> H<tspan font-size="15" dy="6">2</tspan><tspan dy="-6">O</tspan><tspan font-size="14" fill="#64748b">(g)</tspan>
    </text>
  </g>

  <!-- CALLOUT LABELS -->
  <!-- Koefisien Callout -->
  <g transform="translate(245, 45)">
    <line x1="0" y1="0" x2="0" y2="-15" stroke="#2563eb" stroke-width="1.5"/>
    <rect x="-65" y="-36" width="130" height="20" rx="5" fill="#2563eb"/>
    <text x="0" y="-23" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">Koefisien Reaksi (Boleh Diubah)</text>
  </g>

  <!-- Indeks Subskrip Callout -->
  <g transform="translate(175, 145)">
    <line x1="0" y1="0" x2="0" y2="20" stroke="#dc2626" stroke-width="1.5"/>
    <rect x="-65" y="20" width="130" height="20" rx="5" fill="#dc2626"/>
    <text x="0" y="33" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">Angka Indeks (Dilarang Diubah!)</text>
  </g>

  <!-- TIMBANGAN NERACA LAVOISIER (BAWAH) -->
  <g transform="translate(40, 195)">
    <!-- Kotak Kiri: Reaktan -->
    <rect x="0" y="0" width="340" height="95" rx="10" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.2"/>
    <text x="170" y="20" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">TOTAL ATOM RUAS KIRI (REAKTAN)</text>
    <line x1="15" y1="28" x2="325" y2="28" stroke="#bfdbfe"/>
    <text x="50" y="50" font-size="10" font-weight="bold" fill="#334155">Atom Karbon (C): 1</text>
    <text x="50" y="68" font-size="10" font-weight="bold" fill="#334155">Atom Hidrogen (H): 4</text>
    <text x="50" y="86" font-size="10" font-weight="bold" fill="#334155">Atom Oksigen (O): 2 × 2 = 4</text>

    <!-- Kotak Kanan: Produk -->
    <rect x="400" y="0" width="340" height="95" rx="10" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.2"/>
    <text x="570" y="20" font-size="11" font-weight="bold" fill="#166534" text-anchor="middle">TOTAL ATOM RUAS KANAN (PRODUK)</text>
    <line x1="415" y1="28" x2="725" y2="28" stroke="#bbf7d0"/>
    <text x="450" y="50" font-size="10" font-weight="bold" fill="#334155">Atom Karbon (C): 1</text>
    <text x="450" y="68" font-size="10" font-weight="bold" fill="#334155">Atom Hidrogen (H): 2 × 2 = 4</text>
    <text x="450" y="86" font-size="10" font-weight="bold" fill="#334155">Atom Oksigen (O): 2 + (2 × 1) = 4</text>

    <!-- Simbol Sama Dengan Seimbang di Tengah -->
    <circle cx="370" cy="48" r="18" fill="#10b981"/>
    <text x="370" y="54" font-size="18" font-weight="extrabold" fill="#ffffff" text-anchor="middle">=</text>
  </g>
</svg>

---

### 3. Asas Hukum Kekekalan Massa Antoine Lavoisier (1789)

> *"Massa zat sebelum reaksi kimia selalu sama dengan massa zat sesudah reaksi kimia dalam sistem tertutup."*
$$\\sum m_{\\text{reaktan}} = \\sum m_{\\text{produk}}$$

Karena atom tidak dapat diciptakan atau dimusnahkan dalam reaksi kimia biasa (hanya terjadi penataan ulang ikatan kimia antar atom), maka konsekuensi mutlak hukum Lavoisier adalah:  
**Jumlah atom dari setiap unsur di ruas kiri (reaktan) WAJIB SAMA PERSIS dengan jumlah atom unsur tersebut di ruas kanan (produk).** Kondisi inilah yang disebut sebagai **Persamaan Reaksi Setara (*Balanced Equation*)**.`,
      keyFormulas: [
        { name: 'Hukum Kekekalan Massa Lavoisier', formula: '\\sum m_{\\text{reaktan}} = \\sum m_{\\text{produk}}' },
        { name: 'Kriteria Persamaan Reaksi Setara', formula: '\\sum N_{\\text{atom reaktan}} = \\sum N_{\\text{atom produk}} \\quad (\\text{untuk tiap unsur})' },
      ],
    },
    {
      tag: 'metode-penyetaraan-reaksi-inspeksi-dan-aljabar',
      tags: ['penyetaraan-reaksi', 'metode-inspeksi-langsung', 'metode-aljabar-matematis', 'sistem-persamaan-linier'],
      title: 'Konsep Inti 5: Teknik Penyetaraan Reaksi Kimia (Metode Langsung vs Metode Aljabar Matematis)',
      summary: 'Panduan langkah demi langkah menyetarakan persamaan reaksi sederhana hingga reaksi redoks kompleks.',
      content: `Dua metode utama digunakan untuk menyetarakan koefisien reaksi kimia:

### 1. Metode Inspeksi Langsung (Coba-Coba Terarah / *Trial by Inspection*)

Metode ini sangat cepat dan efektif untuk reaksi sederhana yang melibatkan $3-4$ senyawa.
- **Urutan Prioritas Penyetaraan Unsur (Kaidah KAHO):**
  1. **K (Kation / Logam):** Setarakan atom-atom logam terlebih dahulu (seperti $\\ce{Na, Ca, Fe, Al}$).
  2. **A (Anion / Nonlogam selain H dan O):** Setarakan atom nonlogam utama (seperti $\\ce{C, N, S, P, Cl, Br}$).
  3. **H (Hidrogen):** Setarakan jumlah atom Hidrogen.
  4. **O (Oksigen):** Setarakan atom Oksigen paling terakhir (sering kali otomatis setara sebagai validasi akhir).

---

### 2. Metode Aljabar Matematis (Paling Akurat untuk Reaksi Kompleks)

Metode aljabar mengubah persamaan reaksi kimia menjadi sebuah **Sistem Persamaan Linier Homogen**. Metode ini dijamin $100\\%$ selalu menghasilkan jawaban yang benar tanpa bergantung pada coba-coba (*trial and error*).

#### Algoritma 5 Langkah Metode Aljabar:

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 270" width="100%" height="auto" class="max-w-[800px] select-none font-sans">
  <defs>
    <linearGradient id="stepGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#1d4ed8"/>
    </linearGradient>
    <marker id="arrowStep" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="#2563eb"/>
    </marker>
  </defs>

  <rect width="800" height="270" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="400" y="24" font-size="12.5" font-weight="bold" fill="#0f172a" text-anchor="middle">5 LANGKAH SISTEMATIS PENYETARAAN METODE ALJABAR</text>

  <!-- 5 KARTU LANGKAH -->
  <!-- Langkah 1 -->
  <g transform="translate(20, 50)">
    <rect width="135" height="150" rx="10" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5"/>
    <circle cx="24" cy="24" r="14" fill="url(#stepGrad)"/>
    <text x="24" y="28" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
    <text x="46" y="28" font-size="10.5" font-weight="bold" fill="#1e3a8a">Variabel</text>
    <line x1="12" y1="46" x2="123" y2="46" stroke="#e2e8f0"/>
    <text x="67" y="68" font-size="8.5" fill="#334155" text-anchor="middle">Beri koefisien abjad:</text>
    <text x="67" y="84" font-size="9" font-family="monospace" font-weight="bold" fill="#2563eb" text-anchor="middle">a, b, c, d, e...</text>
    <text x="67" y="104" font-size="8" fill="#64748b" text-anchor="middle">di depan setiap</text>
    <text x="67" y="118" font-size="8" fill="#64748b" text-anchor="middle">rumus senyawa.</text>
  </g>
  <path d="M 160 125 L 180 125" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowStep)"/>

  <!-- Langkah 2 -->
  <g transform="translate(180, 50)">
    <rect width="135" height="150" rx="10" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5"/>
    <circle cx="24" cy="24" r="14" fill="url(#stepGrad)"/>
    <text x="24" y="28" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
    <text x="46" y="28" font-size="10.5" font-weight="bold" fill="#1e3a8a">Tetapkan a=1</text>
    <line x1="12" y1="46" x2="123" y2="46" stroke="#e2e8f0"/>
    <text x="67" y="68" font-size="8.5" fill="#334155" text-anchor="middle">Pilih senyawa yang</text>
    <text x="67" y="82" font-size="8.5" fill="#334155" text-anchor="middle">paling kompleks,</text>
    <text x="67" y="100" font-size="9" font-family="monospace" font-weight="bold" fill="#059669" text-anchor="middle">tetapkan a = 1</text>
    <text x="67" y="120" font-size="8" fill="#64748b" text-anchor="middle">sebagai basis awal.</text>
  </g>
  <path d="M 320 125 L 340 125" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowStep)"/>

  <!-- Langkah 3 -->
  <g transform="translate(340, 50)">
    <rect width="135" height="150" rx="10" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5"/>
    <circle cx="24" cy="24" r="14" fill="url(#stepGrad)"/>
    <text x="24" y="28" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
    <text x="46" y="28" font-size="10.5" font-weight="bold" fill="#1e3a8a">Persamaan</text>
    <line x1="12" y1="46" x2="123" y2="46" stroke="#e2e8f0"/>
    <text x="67" y="68" font-size="8.5" fill="#334155" text-anchor="middle">Susun neraca atom:</text>
    <text x="67" y="86" font-size="8.5" font-weight="bold" fill="#b45309" text-anchor="middle">Σ Kiri = Σ Kanan</text>
    <text x="67" y="104" font-size="8" fill="#64748b" text-anchor="middle">untuk setiap unsur</text>
    <text x="67" y="118" font-size="8" fill="#64748b" text-anchor="middle">secara terpisah.</text>
  </g>
  <path d="M 480 125 L 500 125" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowStep)"/>

  <!-- Langkah 4 -->
  <g transform="translate(500, 50)">
    <rect width="135" height="150" rx="10" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5"/>
    <circle cx="24" cy="24" r="14" fill="url(#stepGrad)"/>
    <text x="24" y="28" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">4</text>
    <text x="46" y="28" font-size="10.5" font-weight="bold" fill="#1e3a8a">Substitusi</text>
    <line x1="12" y1="46" x2="123" y2="46" stroke="#e2e8f0"/>
    <text x="67" y="68" font-size="8.5" fill="#334155" text-anchor="middle">Selesaikan aljabar</text>
    <text x="67" y="82" font-size="8.5" fill="#334155" text-anchor="middle">secara substitusi /</text>
    <text x="67" y="96" font-size="8.5" fill="#334155" text-anchor="middle">eliminasi hingga</text>
    <text x="67" y="114" font-size="8.5" font-weight="bold" fill="#2563eb" text-anchor="middle">semua nilai ketemu.</text>
  </g>
  <path d="M 640 125 L 660 125" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowStep)"/>

  <!-- Langkah 5 -->
  <g transform="translate(660, 50)">
    <rect width="125" height="150" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
    <circle cx="24" cy="24" r="14" fill="#10b981"/>
    <text x="24" y="28" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">5</text>
    <text x="46" y="28" font-size="10.5" font-weight="bold" fill="#065f46">Bulatkan</text>
    <line x1="12" y1="46" x2="113" y2="46" stroke="#e2e8f0"/>
    <text x="62" y="68" font-size="8.5" fill="#334155" text-anchor="middle">Jika ada pecahan,</text>
    <text x="62" y="84" font-size="8.5" font-weight="bold" fill="#059669" text-anchor="middle">kalikan KPK</text>
    <text x="62" y="104" font-size="8" fill="#64748b" text-anchor="middle">penyebut agar bulat</text>
    <text x="62" y="118" font-size="8" fill="#64748b" text-anchor="middle">terkecil (integer).</text>
  </g>

  <!-- KETERANGAN BAWAH -->
  <g transform="translate(20, 218)">
    <rect width="765" height="36" rx="8" fill="#1e293b"/>
    <text x="382" y="22" font-size="10" font-weight="bold" fill="#f8fafc" text-anchor="middle">
      Kaidah Emas: Koefisien reaksi final WAJIB merupakan bilangan bulat positif terkecil (tidak boleh berupa pecahan)!
    </text>
  </g>
</svg>

#### Contoh Aplikasi Cepat pada Pembakaran Gas Propana ($\\ce{C3H8}$):
$$\\ce{a C3H8 + b O2 -> c CO2 + d H2O}$$
1. Tetapkan senyawa terkompleks $a = 1$.
2. Neraca Karbon (C): $3 \\times a = 1 \\times c \\implies c = 3(1) = 3$.
3. Neraca Hidrogen (H): $8 \\times a = 2 \\times d \\implies d = \\frac{8(1)}{2} = 4$.
4. Neraca Oksigen (O): $2 \\times b = 2c + 1d = 2(3) + 4 = 10 \\implies b = 5$.
5. Koefisien bulat setara: **$1\\ce{C3H8} + 5\\ce{O2} \\to 3\\ce{CO2} + 4\\ce{H2O}$**.`,
      keyFormulas: [
        { name: 'Kaidah Prioritas KAHO', formula: '\\text{Kation (Logam)} \\to \\text{Anion (Nonlogam)} \\to \\text{Hidrogen} \\to \\text{Oksigen}' },
      ],
    },
    {
      tag: 'persamaan-ionik-bersih-dan-reaksi-pengendapan',
      tags: ['persamaan-ionik-lengkap', 'persamaan-ionik-bersih', 'net-ionic-equation', 'ion-penonton', 'spectator-ions', 'aturan-kelarutan'],
      title: 'Konsep Inti 6: Persamaan Reaksi Ionik Lengkap, Persamaan Ionik Bersih & Eliminasi Ion Penonton',
      summary: 'Menguraikan elektrolit kuat terlarut, mengidentifikasi ion penonton yang tidak berubah, serta menyusun persamaan ionik bersih pada reaksi presipitasi.',
      content: `Sebagian besar reaksi kimia anorganik di laboratorium dan di dalam tubuh makhluk hidup berlangsung dalam fase larutan air (*aqueous solution*).

### 1. Tiga Bentuk Penulisan Reaksi dalam Larutan Air

1. **Persamaan Molekuler (*Molecular Equation*):**
   Seluruh reaktan dan produk dituliskan sebagai rumus senyawa molekuler netral lengkap dengan simbol fasanya:
    $$\ce{AgNO3(aq) + NaCl(aq) -> AgCl(s)\downarrow + NaNO3(aq)}$$
2. **Persamaan Ionik Lengkap (*Complete Ionic Equation*):**
   Semua senyawa **elektrolit kuat yang larut sempurna dalam air ($(aq)$)** diuraikan menjadi kation dan anion terpisahnya:
    $$\ce{Ag+(aq) + NO3-(aq) + Na+(aq) + Cl-(aq) -> AgCl(s)\downarrow + Na+(aq) + NO3-(aq)}$$
   *(Senyawa padat yang mengendap seperti $\\ce{AgCl(s)}$, cairan murni seperti $\\ce{H2O(l)}$, dan gas seperti $\\ce{CO2(g)}$ TIDAK BOLEH diuraikan menjadi ion!).*
3. **Persamaan Ionik Bersih (*Net Ionic Equation*):**
   Persamaan yang diperoleh setelah **mencoret (mengeliminasi) seluruh Ion Penonton (*Spectator Ions*)** yang muncul identik di kedua sisi ruas persamaan:
    $$\mathbf{\ce{Ag+(aq) + Cl-(aq) -> AgCl(s)\downarrow}}$$

---

### 2. Definisi Fisik Ion Penonton (*Spectator Ions*)

Ion penonton adalah ion-ion yang hadir di dalam bejana reaksi larutan tetapi **tidak mengalami perubahan kimiawi apapun** (baik wujud fasa, bilangan oksidasi, maupun lingkungan ikatannya).
- Pada reaksi di atas, ion $\\ce{Na+(aq)}$ dan ion $\\ce{NO3-(aq)}$ hanya melayang-layang bebas di dalam air dari awal reaksi hingga akhir reaksi tanpa ikut membentuk endapan.
- **Persamaan ionik bersih fokus hanya pada spesi kimia yang benar-benar bereaksi!**

---

### 3. Visualisasi Mikroskopis Reaksi Pengendapan & Eliminasi Ion Penonton

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 820 310" width="100%" height="auto" class="max-w-[820px] select-none font-sans">
  <defs>
    <linearGradient id="flaskGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f0f9ff"/>
    </linearGradient>
    <radialGradient id="pbIon" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#fbcfe8"/>
      <stop offset="60%" stop-color="#db2777"/>
      <stop offset="100%" stop-color="#831843"/>
    </radialGradient>
    <radialGradient id="iIon" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="60%" stop-color="#eab308"/>
      <stop offset="100%" stop-color="#713f12"/>
    </radialGradient>
    <radialGradient id="specK" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#e2e8f0"/>
      <stop offset="60%" stop-color="#94a3b8"/>
      <stop offset="100%" stop-color="#475569"/>
    </radialGradient>
  </defs>

  <rect width="820" height="310" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="410" y="24" font-size="12.5" font-weight="bold" fill="#0f172a" text-anchor="middle">MEKANISME PRESIPITASI IONIK &amp; ELIMINASI ION PENONTON</text>

  <!-- BEAKER GELAS KIMIA REAKSI -->
  <g transform="translate(40, 50)">
    <!-- Gelas Beaker -->
    <rect x="0" y="0" width="220" height="210" rx="8" fill="url(#flaskGrad)" stroke="#64748b" stroke-width="2"/>
    <!-- Permukaan Larutan Air -->
    <rect x="2" y="30" width="216" height="178" rx="6" fill="#e0f2fe" opacity="0.6"/>
    <line x1="2" y1="30" x2="218" y2="30" stroke="#38bdf8" stroke-width="2"/>
    <text x="110" y="20" font-size="9" font-weight="bold" fill="#0369a1" text-anchor="middle">Campuran Pb(NO₃)₂ + KI</text>

    <!-- Ion Penonton Melayang (K+ dan NO3-) -->
    <g transform="translate(40, 60)">
      <circle r="12" fill="url(#specK)"/><text x="0" y="4" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">K⁺</text>
    </g>
    <g transform="translate(170, 75)">
      <circle r="12" fill="url(#specK)"/><text x="0" y="4" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">K⁺</text>
    </g>
    <g transform="translate(70, 110)">
      <rect x="-14" y="-8" width="28" height="16" rx="4" fill="#94a3b8"/><text x="0" y="4" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">NO₃⁻</text>
    </g>
    <g transform="translate(160, 125)">
      <rect x="-14" y="-8" width="28" height="16" rx="4" fill="#94a3b8"/><text x="0" y="4" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">NO₃⁻</text>
    </g>

    <!-- Endapan Kuning di Dasar Beaker: PbI2(s) -->
    <path d="M 10 185 Q 110 170 210 185 L 218 208 L 2 208 Z" fill="#facc15" stroke="#eab308" stroke-width="1.5"/>
    <text x="110" y="198" font-size="10.5" font-weight="extrabold" fill="#713f12" text-anchor="middle">Endapan Kuning PbI₂ (s) ↓</text>
  </g>

  <!-- PANEL KANAN: TRANSFORMASI 3 PERSAMAAN -->
  <g transform="translate(290, 50)">
    <!-- 1. Persamaan Molekuler -->
    <rect width="490" height="60" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
    <text x="12" y="18" font-size="9.5" font-weight="bold" fill="#0284c7">1. Persamaan Molekuler:</text>
    <text x="12" y="40" font-size="11" font-family="monospace" font-weight="bold" fill="#0f172a">
      Pb(NO₃)₂(aq) + 2 KI(aq) → PbI₂(s)↓ + 2 KNO₃(aq)
    </text>

    <!-- 2. Persamaan Ionik Lengkap -->
    <g transform="translate(0, 70)">
      <rect width="490" height="65" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
      <text x="12" y="18" font-size="9.5" font-weight="bold" fill="#64748b">2. Persamaan Ionik Lengkap (Identifikasi Ion Penonton):</text>
      <text x="12" y="40" font-size="10" font-family="monospace" fill="#0f172a">
        Pb²⁺(aq) + <tspan fill="#dc2626" text-decoration="line-through">2 NO₃⁻</tspan> + <tspan fill="#dc2626" text-decoration="line-through">2 K⁺</tspan> + 2 I⁻ → PbI₂(s)↓ + <tspan fill="#dc2626" text-decoration="line-through">2 K⁺</tspan> + <tspan fill="#dc2626" text-decoration="line-through">2 NO₃⁻</tspan>
      </text>
      <text x="12" y="56" font-size="8.5" font-weight="bold" fill="#dc2626">Coret K⁺ dan NO₃⁻ (keduanya adalah Ion Penonton yang tidak bereaksi!)</text>
    </g>

    <!-- 3. Persamaan Ionik Bersih -->
    <g transform="translate(0, 145)">
      <rect width="490" height="65" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
      <text x="12" y="18" font-size="10" font-weight="bold" fill="#047857">3. PERSAMAAN IONIK BERSIH (NET IONIC EQUATION):</text>
      <text x="12" y="44" font-size="13" font-family="monospace" font-weight="extrabold" fill="#065f46">
        Pb²⁺(aq) + 2 I⁻(aq) → PbI₂(s) ↓
      </text>
    </g>
  </g>

  <!-- FOOTER -->
  <g transform="translate(40, 275)">
    <rect width="740" height="26" rx="6" fill="#1e293b"/>
    <text x="370" y="17" font-size="9.5" font-weight="bold" fill="#ffffff" text-anchor="middle">
      Kunci: Hanya ion-ion yang membentuk ikatan baru (endapan, cairan murni, atau gas) yang dituliskan dalam persamaan ionik bersih!
    </text>
  </g>
</svg>`,
      keyFormulas: [
        { name: 'Persamaan Ionik Bersih Presipitasi', formula: '\\ce{M^{n+}(aq) + n X^-(aq) -> MX_n(s)\\downarrow}' },
      ],
    },
  ],
  worked_examples: [
    {
      tag: 'contoh-tatanama-komprehensif',
      tags: ['latihan-tatanama', 'senyawa-ionik-transisi', 'oksianion', 'senyawa-hidrat', 'kovalen-biner'],
      title: 'Contoh Soal 1: Penamaan IUPAC Komprehensif Senyawa Biner, Poliatomik & Hidrat Kristal',
      summary: 'Latihan menentukan nama baku IUPAC dari rumus kimia dan menyusun rumus kimia dari nama senyawa.',
      content: `### Soal Latihan:
1. Berikan nama baku menurut kaidah IUPAC modern untuk senyawa-senyawa berikut:
   a. $\\ce{SnO2}$
   b. $\\ce{N2O3}$
   c. $\\ce{Fe2(CO3)3}$
   d. $\\ce{MgSO4 . 7H2O}$
   e. $\\ce{HClO4}$
2. Tuliskan rumus kimia yang tepat dari nama senyawa kimia berikut:
   a. Dinitrogen monoksida
   b. Tembaga(I) sulfida
   c. Barium hidroksida oktahidrat
   d. Asam hipoklorit

---

### Pembahasan Langkah demi Langkah:

#### Penyelesaian Bagian 1:
a. **$\\ce{SnO2}$:**
   - Senyawa ionik antara logam timah ($\\ce{Sn}$) dan nonlogam oksigen ($\\ce{O}$).
   - Anion oksida memiliki muatan $-2$. Dua atom oksigen memberikan total muatan $2 \\times (-2) = -4$.
   - Agar molekul netral, kation timah bermuatan $+4$ (biloks $+4$).
   - *Nama Baku IUPAC:* **Timah(IV) oksida** *(bukan timah dioksida!)*.
b. **$\\ce{N2O3}$:**
   - Senyawa kovalen murni antara dua nonlogam ($\\ce{N}$ dan $\\ce{O}$).
   - Gunakan awalan angka Yunani: $2 = di-$, $3 = tri-$.
   - *Nama Baku IUPAC:* **Dinitrogen trioksida**.
c. **$\\ce{Fe2(CO3)3}$:**
   - Senyawa garam poliatomik antara kation besi dan anion karbonat ($\\ce{CO3^2-}$).
   - Tiga ion karbonat bermuatan total $3 \\times (-2) = -6$.
   - Dua kation besi mengimbangi dengan muatan $+6 \\implies$ tiap besi bernilai $+3$.
   - *Nama Baku IUPAC:* **Besi(III) karbonat**.
d. **$\\ce{MgSO4 . 7H2O}$:**
   - Senyawa hidrat kristal. Garam anhidratnya adalah $\\ce{MgSO4}$ (Magnesium sulfat, logam alkali tanah tidak memerlukan angka Romawi).
   - Mengikat 7 molekul air kristal (awalan $7 = hepta-$).
   - *Nama Baku IUPAC:* **Magnesium sulfat heptahidrat**.
e. **$\\ce{HClO4}$:**
   - Asam oksi klorin dengan 4 atom oksigen (biloks klorin $= +7$, deret per-...-at).
   - *Nama Baku IUPAC:* **Asam perklorat**.

---

#### Penyelesaian Bagian 2:
a. **Dinitrogen monoksida:**
   - Awalan *di-* pada nitrogen $\\implies \\ce{N2}$.
   - Awalan *mono-* pada oksida $\\implies \\ce{O1}$.
   - *Rumus Kimia:* **$\\ce{N2O}$** *(gas gelak)*.
b. **Tembaga(I) sulfida:**
   - Angka Romawi (I) menunjukkan kation $\\ce{Cu+}$.
   - Anion sulfida adalah $\\ce{S^2-}$.
   - Silangkan muatan untuk netralitas: butuh $2 \\ce{Cu+}$ untuk $1 \\ce{S^2-}$.
   - *Rumus Kimia:* **$\\ce{Cu2S}$**.
c. **Barium hidroksida oktahidrat:**
   - Kation Barium (Golongan IIA): $\\ce{Ba^2+}$.
   - Anion hidroksida: $\\ce{OH-}$.
   - Garam anhidrat: $\\ce{Ba(OH)2}$.
   - Mengikat 8 air kristal (oktahidrat $\\implies \\ce{. 8H2O}$).
   - *Rumus Kimia:* **$\\ce{Ba(OH)2 . 8H2O}$**.
d. **Asam hipoklorit:**
   - Kation $\\ce{H+}$.
   - Anion hipoklorit (biloks klorin $+1$, deret hipo-...-it): $\\ce{ClO-}$.
   - *Rumus Kimia:* **$\\ce{HClO}$**.`,
      keyFormulas: [
        { name: 'Kaidah Penamaan Senyawa Ionik Transisi', formula: '\\text{Nama Logam} + (\\text{Biloks Romawi}) + \\text{Nama Anion}' },
      ],
    },
    {
      tag: 'contoh-penyetaraan-redoks-aljabar-kmno4',
      title: 'Contoh Soal 2: Penyetaraan Reaksi Redoks Kompleks Metode Aljabar Matematis (KMnO4 + HCl)',
      summary: 'Aplikasi sistem persamaan linier aljabar untuk menyetarakan reaksi pembuatan gas klorin di laboratorium.',
      content: `### Soal Ujian Olimpiade:
Reaksi laboratorium pembuatan gas klorin melibatkan oksidasi asam klorida pekat oleh kalium permanganat padat sesuai persamaan reaksi berikut (belum setara):
$$\\ce{a KMnO4(s) + b HCl(aq) -> c KCl(aq) + d MnCl2(aq) + e Cl2(g) + f H2O(l)}$$
Tentukan nilai koefisien stoikiometri bilangan bulat terkecil $a, b, c, d, e,$ dan $f$ menggunakan metode aljabar matematis!

---

### Pembahasan Langkah demi Langkah:

#### 1. Tetapkan Nilai Basis Awal:
Tetapkan senyawa paling kompleks $\\ce{KMnO4}$ memiliki koefisien:
$$\\mathbf{a = 1}$$

#### 2. Susun Persamaan Neraca Atom Tiap Unsur:
- **Atom Kalium (K):**  
  Ruas kiri $= 1 \\times a$, Ruas kanan $= 1 \\times c$  
  $$a = c \\implies \\mathbf{c = 1}$$
- **Atom Mangan (Mn):**  
  Ruas kiri $= 1 \\times a$, Ruas kanan $= 1 \\times d$  
  $$a = d \\implies \\mathbf{d = 1}$$
- **Atom Oksigen (O):**  
  Ruas kiri $= 4 \\times a$, Ruas kanan $= 1 \\times f$  
  $$4a = f \\implies f = 4(1) \\implies \\mathbf{f = 4}$$
- **Atom Hidrogen (H):**  
  Ruas kiri $= 1 \\times b$, Ruas kanan $= 2 \\times f$  
  $$b = 2f \\implies b = 2(4) \\implies \\mathbf{b = 8}$$
- **Atom Klorin (Cl):**  
  Ruas kiri $= 1 \\times b$, Ruas kanan $= 1 \\times c + 2 \\times d + 2 \\times e$  
  $$b = c + 2d + 2e$$
  Substitusikan nilai $b=8, c=1, d=1$:
  $$8 = 1 + 2(1) + 2e$$
  $$8 = 3 + 2e \\implies 2e = 5 \\implies \\mathbf{e = \\frac{5}{2}}$$

#### 3. Eliminasi Koefisien Pecahan:
Kumpulan nilai sementara:
$$a = 1, \\quad b = 8, \\quad c = 1, \\quad d = 1, \\quad e = \\frac{5}{2}, \\quad f = 4$$
Karena nilai $e$ berupa pecahan $\\frac{5}{2}$, **kalikan seluruh koefisien dengan angka 2**:
$$a = 1 \\times 2 = \\mathbf{2}$$
$$b = 8 \\times 2 = \\mathbf{16}$$
$$c = 1 \\times 2 = \\mathbf{2}$$
$$d = 1 \\times 2 = \\mathbf{2}$$
$$e = \\frac{5}{2} \\times 2 = \\mathbf{5}$$
$$f = 4 \\times 2 = \\mathbf{8}$$

#### 4. Persamaan Reaksi Setara Sempurna:
$$\\mathbf{2\\ce{KMnO4(s)} + 16\\ce{HCl(aq)} \\to 2\\ce{KCl(aq)} + 2\\ce{MnCl2(aq)} + 5\\ce{Cl2(g)} + 8\\ce{H2O(l)}}$$

#### 5. Verifikasi Akhir Jumlah Atom:
- K: Kiri $2$, Kanan $2$ (Setara)
- Mn: Kiri $2$, Kanan $2$ (Setara)
- O: Kiri $2 \\times 4 = 8$, Kanan $8 \\times 1 = 8$ (Setara)
- H: Kiri $16$, Kanan $8 \\times 2 = 16$ (Setara)
- Cl: Kiri $16$, Kanan $2 + (2 \\times 2) + (5 \\times 2) = 2 + 4 + 10 = 16$ (Setara)`,
      keyFormulas: [
        { name: 'Persamaan Reaksi Setara Laboratorium Gas Klorin', formula: '2\\ce{KMnO4} + 16\\ce{HCl} \\to 2\\ce{KCl} + 2\\ce{MnCl2} + 5\\ce{Cl2} + 8\\ce{H2O}' },
      ],
    },
    {
      tag: 'contoh-persamaan-ionik-bersih-presipitasi',
      tags: ['persamaan-ionik-bersih', 'reaksi-pengendapan', 'barium-sulfat', 'ion-penonton'],
      title: 'Contoh Soal 3: Formulasi Persamaan Ionik Lengkap & Bersih pada Reaksi Pengendapan Barium Sulfat',
      summary: 'Analisis pelarutan elektrolit kuat, pencoretan ion penonton, dan penulisan persamaan ionik bersih.',
      content: `### Soal Latihan:
Larutan Barium Klorida ($\\ce{BaCl2}$) dicampurkan dengan larutan Natrium Sulfat ($\\ce{Na2SO4}$), menghasilkan endapan putih Barium Sulfat dan larutan Natrium Klorida.
1. Tuliskan persamaan reaksi molekuler yang setara lengkap dengan simbol fasanya!
2. Uraikan menjadi persamaan ionik lengkap!
3. Identifikasi spesi manakah yang bertindak sebagai ion penonton (*spectator ions*)!
4. Tuliskan persamaan ionik bersihnya (*net ionic equation*)!

---

### Pembahasan Langkah demi Langkah:

#### 1. Persamaan Molekuler Setara:
Reaksi pertukaran kation-anion (metatesis):
$$\mathbf{\ce{BaCl2(aq) + Na2SO4(aq) -> BaSO4(s)\downarrow + 2 NaCl(aq)}}$$

#### 2. Persamaan Ionik Lengkap:
Uraikan seluruh senyawa berfasa $(aq)$ (larutan elektrolit kuat) menjadi ion-ion bebasnya:
$$\mathbf{\ce{Ba^2+(aq) + 2Cl-(aq) + 2Na+(aq) + SO4^2-(aq) -> BaSO4(s)\downarrow + 2Na+(aq) + 2Cl-(aq)}}$$
*(Catatan: $\\ce{BaSO4}$ berwujud padatan endapan $(s)$, sehingga TIDAK diuraikan menjadi ion).*

#### 3. Identifikasi Ion Penonton:
Bandingkan ion-ion di ruas kiri dan ruas kanan yang tidak mengalami perubahan kimia maupun fasa:
- Ion Natrium: $\\ce{2Na+(aq)}$ ada di kiri dan kanan tanpa berubah.
- Ion Klorida: $\\ce{2Cl-(aq)}$ ada di kiri dan kanan tanpa berubah.
- **Ion Penonton:** $\\mathbf{\\ce{Na+(aq)}}$ dan $\\mathbf{\\ce{Cl-(aq)}}$.

#### 4. Persamaan Ionik Bersih:
Coret ion-ion penonton dari kedua ruas, tersisa hanya spesi yang membentuk endapan padat:
$$\mathbf{\ce{Ba^2+(aq) + SO4^2-(aq) -> BaSO4(s)\downarrow}}$$

> **Kesimpulan Evaluator Juri:** Persamaan ionik bersih membuktikan bahwa esensi dari reaksi kimia tersebut hanyalah penggabungan kation barium dengan anion sulfat membentuk kisi kristal yang tidak larut dalam air. Ion natrium dan klorida tidak berkontribusi pada reaksi pembentukan endapan.`,
      keyFormulas: [
        { name: 'Persamaan Ionik Bersih Barium Sulfat', formula: '\\ce{Ba^2+(aq) + SO4^2-(aq) -> BaSO4(s)\\downarrow}' },
      ],
    },
    {
      tag: 'contoh-pembakaran-hidrokarbon-dan-analisis-koefisien',
      tags: ['pembakaran-hidrokarbon', 'aljabar-umum-alkana', 'rumus-koefisien-pembakaran'],
      title: 'Contoh Soal 4: Formulasi Umum Persamaan Reaksi Pembakaran Sempurna Alkana (CxHy)',
      summary: 'Menurunkan rumus umum koefisien stoikiometri pembakaran hidrokarbon dengan variabel x dan y.',
      content: `### Soal Tingkat Lanjut:
1. Turunkan persamaan reaksi setara umum untuk reaksi pembakaran sempurna hidrokarbon alkana dengan rumus umum $\\ce{C_x H_y}$ yang bereaksi dengan gas oksigen ($\\ce{O2}$) menghasilkan gas $\\ce{CO2}$ dan uap air $\\ce{H2O}$!
2. Gunakan rumus umum tersebut untuk menyetarakan reaksi pembakaran sempurna gas Oktana ($\\ce{C8H18}$), komponen utama bensin!

---

### Pembahasan Langkah demi Langkah:

#### 1. Penurunan Rumus Umum Pembakaran:
Tuliskan persamaan reaksi awal:
$$\\ce{1 C_x H_y + b O2 -> c CO2 + d H2O}$$
- **Neraca Atom Karbon (C):**  
  Ruas kiri $= x$, Ruas kanan $= 1 \\times c \\implies \\mathbf{c = x}$
- **Neraca Atom Hidrogen (H):**  
  Ruas kiri $= y$, Ruas kanan $= 2 \\times d \\implies \\mathbf{d = \\frac{y}{2}}$
- **Neraca Atom Oksigen (O):**  
  Ruas kiri $= 2 \\times b$  
  Ruas kanan $= 2c + d = 2(x) + \\frac{y}{2} = 2x + \\frac{y}{2}$  
  $$b = \\frac{2x + \\frac{y}{2}}{2} \\implies \\mathbf{b = x + \\frac{y}{4}}$$

Maka formula umum reaksi pembakaran sempurna adalah:
$$\\mathbf{\\ce{C_x H_y + \\left(x + \\frac{y}{4}\\right) O2 -> x CO2 + \\frac{y}{2} H2O}}$$

---

#### 2. Aplikasi pada Gas Oktana ($\\ce{C8H18}$):
Pada oktana, nilai $x = 8$ dan $y = 18$:
- Koefisien $\\ce{CO2}$: $c = x = \\mathbf{8}$
- Koefisien $\\ce{H2O}$: $d = \\frac{y}{2} = \\frac{18}{2} = \\mathbf{9}$
- Koefisien $\\ce{O2}$: $b = x + \\frac{y}{4} = 8 + \\frac{18}{4} = 8 + 4.5 = \\mathbf{\\frac{25}{2}}$

Persamaan reaksi sementara:
$$\\ce{1 C8H18 + \\frac{25}{2} O2 -> 8 CO2 + 9 H2O}$$

Kalikan seluruh persamaan dengan 2 agar seluruh koefisien berupa bilangan bulat terkecil:
$$\\mathbf{2\\ce{C8H18(l)} + 25\\ce{O2(g)} \\to 16\\ce{CO2(g)} + 18\\ce{H2O(g)}}$$

#### Verifikasi Jumlah Atom:
- Atom C: Kiri $2 \\times 8 = 16$, Kanan $16 \\times 1 = 16$ (Setara)
- Atom H: Kiri $2 \\times 18 = 36$, Kanan $18 \\times 2 = 36$ (Setara)
- Atom O: Kiri $25 \\times 2 = 50$, Kanan $(16 \\times 2) + (18 \\times 1) = 32 + 18 = 50$ (Setara)`,
      keyFormulas: [
        { name: 'Rumus Umum Pembakaran Sempurna Hidrokarbon', formula: '\\ce{C_x H_y + \\left(x + \\frac{y}{4}\\right) O2 -> x CO2 + \\frac{y}{2} H2O}' },
      ],
    },
  ],
},

  {
    id: 105,
    topic_number: 5,
    grade: 'Kelas 10',
    semester: 2,
    curriculumPhase: 'Fase E',
    relatedOsnTopicId: 3,
    title: 'Hukum Dasar Kimia & Konsep Mol (Stoikiometri Dasar)',
    slug: 'hukum-dasar-kimia-konsep-mol',
    category: 'Stoikiometri Dasar',
    level: 'SMA',
    readTimeMinutes: 35,
    summary: 'Panduan pedagogis komprehensif stoikiometri kimia dasar: 5 hukum dasar kimia klasik (Lavoisier, Proust, Dalton, Gay-Lussac, Avogadro); konsep massa atom relatif (Ar) dan massa molekul relatif (Mr); peta jembatan mol cerdas (massa, jumlah partikel, volume gas STP/RTP/ideal, dan molaritas); alur 3 langkah penentuan rumus empiris & molekul; serta teknik analisis reaksi kimia dengan tabel M-R-S dan pereaksi pembatas.',
    allTags: [
      'hukum-dasar-kimia',
      'hukum-lavoisier',
      'hukum-proust-perbandingan-tetap',
      'hukum-dalton-perbandingan-berganda',
      'hukum-gay-lussac',
      'hipotesis-avogadro',
      'massa-atom-relatif-ar',
      'massa-molekul-relatif-mr',
      'konsep-mol',
      'jembatan-mol',
      'bilangan-avogadro',
      'volume-molar-stp-rtp',
      'persamaan-gas-ideal',
      'molaritas-larutan',
      'rumus-empiris-dan-molekul',
      'persen-komposisi-massa',
      'stoikiometri-reaksi',
      'tabel-mrs',
      'pereaksi-pembatas',
      'persen-hasil-reaksi',
      'kelimpahan-isotop',
      'massa-atom-relatif',
      'hukum-proust',
      'persen-massa',
      'oksida-besi',
      'rumus-empiris',
      'rumus-molekul',
      'hidrokarbon',
      'persen-unsur',
      'penyetaraan-reaksi',
      'pembakaran-magnesium',
      'gay-lussac',
      'kontraksi-volume',
      'amonia',
      'persen-hasil',
      'stoikiometri-larutan',
      'pengendapan',
      'gas-ideal',
      'pv-nrt',
      'kerapatan-gas',
      'massa-molar',
      'analisis-pembakaran',
      'vitamin-c',
    ],
    prerequisites: [
      {
        tag: 'massa-atom-relatif-dan-isotop-karbon12',
        tags: ['massa-atom-relatif', 'isotop-karbon-12', 'satuan-massa-atom-sma', 'massa-molekul-relatif'],
        title: 'Prasyarat 1: Standar Massa Atom Relatif (Ar), Isotop Karbon-12 & Massa Molekul Relatif (Mr)',
        summary: 'Pondasi sistem penimbangan atom komparatif dan pembedaan konseptual antara Mr tanpa satuan dengan massa molar.',
        content: `### 🎯 Mengapa Kita Perlu Standar Perbandingan? (Mental Model)

Atom memiliki ukuran dan massa yang luar biasa mungil (berorde $10^{-24}$ hingga $10^{-22}\\text{ gram}$). Neraca paling presisi di laboratorium kimia mana pun tidak akan mampu menimbang satu butir atom.

Oleh karena itu, para kimiawan sepakat membuat **sistem penimbangan komparatif**: sama seperti kita mengukur tinggi badan dengan mistar meteran standar, kita membandingkan massa satu atom dengan suatu "anak timbangan rujukan universal".

---

### 1. Standar Karbon-12 & Satuan Massa Atom (sma / amu)

Pada tahun 1961, badan kimia internasional (IUPAC) secara resmi menetapkan isotop **Karbon-12 ($\\ce{^{12}_6C}$)** sebagai anak timbangan standar universal:
$1\\text{ sma} = \\frac{1}{12} \\times \\text{massa } 1 \\text{ atom } \\ce{^{12}_6C} \\approx 1.66054 \\times 10^{-24}\\text{ gram}$

*Artinya:* Jika suatu atom memiliki massa $24\\text{ sma}$, berarti atom tersebut tepat 24 kali lebih berat dibanding $\\frac{1}{12}$ massa satu atom Karbon-12.

---

### 2. Massa Atom Relatif ($A_r$) - Rata-Rata Berbobot Isotop

Di alam, hampir semua unsur tidak hanya terdiri dari satu jenis atom, melainkan memiliki beberapa "kembaran" dengan massa berbeda yang disebut **isotop**.

Nilai $A_r$ yang Anda lihat pada Tabel Periodik bukanlah massa satu butir isotop, melainkan **rata-rata berbobot (*weighted average*)** dari kelimpahan seluruh isotop alaminya di planet bumi:
$A_r(\\text{X}) = \\sum \\left( \\frac{\\% \\text{ Kelimpahan}_i}{100} \\times \\text{Massa Isotop}_i \\right)$

**Contoh Cepat:** Klorin di alam terdiri dari dua isotop:
- $75.77\\%$ adalah isotop $\\ce{^{35}Cl}$ (massa $\\approx 35\\text{ sma}$)
- $24.23\\%$ adalah isotop $\\ce{^{37}Cl}$ (massa $\\approx 37\\text{ sma}$)

Kalkulasi nilai $A_r$:
$A_r(\\ce{Cl}) = (0.7577 \\times 35) + (0.2423 \\times 37) = 26.52 + 8.96 = \\mathbf{35.48} \\approx 35.5$
*(Itulah alasan mengapa nilai $A_r$ Klorin pada tabel periodik berkoma $35.5$).*

---

### 3. Massa Molekul Relatif ($M_r$)

Massa Molekul Relatif ($M_r$) adalah jumlah total $A_r$ dari seluruh atom yang menyusun suatu rumus molekul atau senyawa:
$M_r(\\ce{A_x B_y}) = x \\cdot A_r(\\ce{A}) + y \\cdot A_r(\\ce{B})$

**Contoh Perhitungan:**
1. **Molekul Air ($\\ce{H2O}$):**
   $M_r = 2 \\cdot A_r(\\ce{H}) + 1 \\cdot A_r(\\ce{O}) = 2(1.01) + 16.00 = \\mathbf{18.02}$
2. **Glukosa ($\\ce{C6H12O6}$):**
   $M_r = 6(12.01) + 12(1.01) + 6(16.00) = 72.06 + 12.12 + 96.00 = \\mathbf{180.18}$
3. **Pupuk Urea ($\\ce{CO(NH2)2}$):**
   $M_r = 1(12.01) + 1(16.00) + 2(14.01) + 4(1.01) = 12.01 + 16.00 + 28.02 + 4.04 = \\mathbf{60.07}$

---

> [!WARNING]
> ### ⚠️ Jebakan Miskonsepsi Penting: $M_r$ vs Massa Molar
> Banyak siswa sering mencampuradukkan kedua istilah ini dalam ujian:
> - **Massa Molekul Relatif ($M_r$)**: Merupakan angka perbandingan murni, sehingga **TIDAK memiliki satuan** (dimensi 1).
> - **Massa Molar ($M_m$)**: Menyatakan massa untuk setiap $1\\text{ mol}$ zat, dan memiliki satuan resmi **$\\text{gram/mol}$**.
>
> *Secara angka numerik keduanya tepat sama:*  
> Air memiliki $M_r = 18.02$, dan Massa Molar air adalah $18.02\\text{ g/mol}$.`,
        keyFormulas: [
          { name: 'Rumus Ar Rata-rata Isotop', formula: 'A_r = \\sum_{i} \\left( \\frac{\\%_i}{100} \\times m_i \\right)' },
          { name: 'Rumus Massa Molekul Relatif', formula: 'M_r = \\sum_{i} n_i \\cdot A_{r,i}' },
        ],
      },
      {
        tag: 'persen-komposisi-massa-unsur',
        tags: ['persen-komposisi', 'fraksi-massa', 'analisis-unsur'],
        title: 'Prasyarat 2: Persen Komposisi Massa Unsur dalam Senyawa',
        summary: 'Metode kalkulasi fraksi massa tiap atom penyusun dan aplikasinya dalam memilih bahan kimia bernilai ekonomis.',
        content: `### 🎯 Analogi Sederhana: Berapa Persen Daging dalam Bakso?

Bayangkan Anda membeli semangkuk bakso seberat $100\\text{ gram}$. Jika daging sapi di dalamnya seberat $45\\text{ gram}$, maka kadar dagingnya adalah $45\\%$.

Hal serupa berlaku pada senyawa kimia. **Persen massa unsur** menyatakan persentase kontribusi massa dari suatu unsur tertentu terhadap massa total molekul senyawa.

---

### 📌 Formula Inti Persen Komposisi

$\\% \\text{ Unsur X} = \\frac{n \\times A_r(\\text{X})}{M_r(\\text{Senyawa})} \\times 100\\%$

- $n$ = jumlah atom unsur X di dalam satu rumus kimia molekul.
- $A_r(\\text{X})$ = massa atom relatif unsur X.
- $M_r(\\text{Senyawa})$ = massa molekul relatif total senyawa.

---

### 🧭 Alur 3 Langkah Pengerjaan:

1. **Langkah 1**: Hitung $M_r$ total dari senyawa yang ditanyakan.
2. **Langkah 2**: Hitung kontribusi massa atom target ($n \\times A_r$).
3. **Langkah 3**: Bagi kontribusi unsur dengan $M_r$ total, lalu kalikan $100\\%$.

---

### 💼 Studi Kasus Nyata: Petani Cerdas Memilih Pupuk Nitrogen

Seorang petani ingin membeli pupuk yang memberikan kandungan unsur Nitrogen ($\\ce{N}$) paling banyak per kilogram karung pupuk. Di toko pertanian tersedia dua opsi:
1. **Pupuk Urea ($\\ce{CO(NH2)2}$)**, $M_r = 60.06$
2. **Pupuk Amonium Nitrat ($\\ce{NH4NO3}$)**, $M_r = 80.05$

Mari kita bantu petani tersebut menghitung kadar nitrogennya ($A_r\\ \\ce{N} = 14.01$):

- **Kadar N pada Pupuk Urea ($\\ce{CO(NH2)2}$):**  
  Terdapat 2 atom N ($n = 2$):
  $\\% \\ce{N} = \\frac{2 \\times 14.01}{60.06} \\times 100\\% = \\frac{28.02}{60.06} \\times 100\\% = \\mathbf{46.65\\%}$

- **Kadar N pada Pupuk Amonium Nitrat ($\\ce{NH4NO3}$):**  
  Terdapat 2 atom N ($n = 2$):
  $\\% \\ce{N} = \\frac{2 \\times 14.01}{80.05} \\times 100\\% = \\frac{28.02}{80.05} \\times 100\\% = \\mathbf{35.00\\%}$

**Kesimpulan Aplikatif:** Petani lebih diuntungkan memilih **Urea**, karena dalam setiap $100\\text{ kg}$ urea terkandung $46.65\\text{ kg}$ unsur nitrogen aktif, lebih tinggi daripada amonium nitrat ($35.00\\text{ kg}$).`,
        keyFormulas: [
          { name: 'Persen Komposisi Unsur', formula: '\\% X = \\frac{n \\cdot A_r(X)}{M_r} \\times 100\\%' },
        ],
      },
    ],
    core_concepts: [
      {
        tag: 'lima-hukum-dasar-kimia-lengkap',
        tags: ['hukum-dasar-kimia', 'lavoisier', 'proust', 'dalton', 'gay-lussac', 'avogadro', 'perbandingan-berganda'],
        title: 'Konsep Inti 1: Peta 5 Hukum Dasar Kimia Klasik (Lavoisier, Proust, Dalton, Gay-Lussac, Avogadro)',
        summary: 'Memahami 5 aturan main alam semesta yang menjadi landasan seluruh perhitungan reaksi kimia.',
        content: `### 🎯 Mengapa Hukum-Hukum Ini Dibuat? (Big Picture)

Sebelum abad ke-18, kimia dianggap seperti "sihir" alkimia karena orang belum menimbang zat secara teliti. Revolusi sains kimia modern lahir ketika para ilmuwan mulai menggunakan neraca analitis presisi.

Mereka menemukan **5 aturan main fundamental alam semesta**:

---

### 1. Hukum Kekekalan Massa (Antoine Lavoisier, 1789)
> *"Di dalam sistem tertutup, massa zat sebelum reaksi kimia selalu sama dengan massa zat sesudah reaksi."*

$\\sum m_{\\text{reaktan}} = \\sum m_{\\text{produk}}$

- **Analogi Logika:** Jika Anda mereaksikan $10\\text{ gram}$ lilin dengan $32\\text{ gram}$ oksigen di dalam toples kedap tertutup, total abu, jelaga, gas $\\ce{CO2}$, dan uap air yang terbentuk di akhir reaksi tetap tepat $42\\text{ gram}$.
- **⚠️ Peringatan Ujian:** Hati-hati dengan eksperimen di wadah terbuka! Kertas yang dibakar di lantai terbuka terasa "berkurang massanya" semata-mata karena gas $\\ce{CO2}$ dan $\\ce{H2O}$ terbang ke udara bebas.

---

### 2. Hukum Perbandingan Tetap (Joseph Louis Proust, 1799)
> *"Perbandingan massa unsur-unsur pembentuk suatu senyawa selalu tetap dan tertentu, dari mana pun asal senyawa itu diperoleh."*

- **Analogi Resep Baku:** Resep molekul air ($\\ce{H2O}$) selalu paten:
  $\\text{Massa } \\ce{H} : \\text{Massa } \\ce{O} = 1 : 8$
  Jika Anda mencampurkan $2\\text{ gram}$ gas Hidrogen dengan $8\\text{ gram}$ gas Oksigen:
  - Hanya $1\\text{ gram } \\ce{H2}$ yang bereaksi dengan seluruh $8\\text{ gram } \\ce{O2}$.
  - Terbentuk $9\\text{ gram } \\ce{H2O}$.
  - Tersisa $1\\text{ gram } \\ce{H2}$ yang tidak ikut bereaksi. Senyawa tidak bisa "dipaksa" mengubah proporsi rasio alaminya.

---

### 3. Hukum Perbandingan Berganda (John Dalton, 1803)
> *"Jika dua unsur dapat membentuk lebih dari satu jenis senyawa, dan jika massa salah satu unsur dibuat bernilai tetap (sama), maka perbandingan massa unsur yang lain merupakan perbandingan bilangan bulat dan sederhana."*

- **Kasus Klasik (Oksida Nitrogen):**
  Unsur $\\ce{N}$ dan $\\ce{O}$ dapat membentuk $\\ce{NO}$ dan $\\ce{NO2}$.
  - Pada $\\ce{NO}$: $14\\text{ g } \\ce{N}$ mengikat $16\\text{ g } \\ce{O}$.
  - Pada $\\ce{NO2}$: $14\\text{ g } \\ce{N}$ mengikat $32\\text{ g } \\ce{O}$.
  - Untuk massa $\\ce{N}$ yang sama ($14\\text{ g}$), perbandingan massa oksigen adalah:
    $\\text{Massa O (I)} : \\text{Massa O (II)} = 16 : 32 = \\mathbf{1 : 2}$
    Angka $1 : 2$ adalah bilangan bulat sederhana! Inilah bukti awal bahwa materi tersusun atas atom-atom diskret.

---

### 4. Hukum Perbandingan Volume (Joseph Gay-Lussac, 1808)
> *"Pada suhu dan tekanan yang sama ($P, T$ sama), perbandingan volume gas-gas yang bereaksi dan gas-gas hasil reaksi berbanding sebagai bilangan bulat sederhana."*

**Kunci Emas:** Pada fasa gas ($P, T$ konstan):
$\\text{Perbandingan Volume Gas} = \\text{Perbandingan Koefisien Reaksi}$

*Contoh Reaksi Pembentukan Amonia:*
$\\ce{1 N2(g) + 3 H2(g) -> 2 NH3(g)}$
Artinya, jika direaksikan $10\\text{ Liter}$ gas $\\ce{N2}$, maka:
- Dibutuhkan gas hidrogen sebanyak: $\\frac{3}{1} \\times 10 = \\mathbf{30\\text{ Liter } \\ce{H2}}$
- Dihasilkan gas amonia sebanyak: $\\frac{2}{1} \\times 10 = \\mathbf{20\\text{ Liter } \\ce{NH3}}$

---

### 5. Hipotesis Avogadro (Amedeo Avogadro, 1811)
> *"Pada suhu dan tekanan yang sama, semua gas yang bervolume sama memiliki jumlah molekul yang sama banyak."*

$\\frac{V_1}{V_2} = \\frac{n_1}{n_2} = \\frac{N_1}{N_2}$

Avogadro menyatukan hukum Gay-Lussac dengan teori atom: perbandingan volume gas sama dengan perbandingan mol dan perbandingan jumlah molekul partikelnya.`,
        keyFormulas: [
          { name: 'Hukum Kekekalan Massa', formula: '\\sum m_{\\text{reaktan}} = \\sum m_{\\text{produk}}' },
          { name: 'Hukum Perbandingan Volume Gay-Lussac', formula: '\\frac{V_1}{V_2} = \\frac{\\text{Koefisien}_1}{\\text{Koefisien}_2}' },
          { name: 'Hipotesis Avogadro Gas', formula: '\\frac{V_1}{V_2} = \\frac{n_1}{n_2} = \\frac{N_1}{N_2}' },
        ],
      },
      {
        tag: 'konsep-mol-dan-jembatan-mol-lengkap',
        tags: ['konsep-mol', 'jembatan-mol', 'bilangan-avogadro', 'volume-molar', 'stp-rtp', 'gas-ideal', 'molaritas'],
        title: 'Konsep Inti 2: Konsep Mol & Peta Jembatan Mol (Massa, Partikel, Volume Gas & Molaritas)',
        summary: 'Peta navigasi pusat konversi kuantitatif kimia: mengubah gram, jumlah molekul, liter gas, dan molaritas larutan.',
        content: `### 🎯 Apa Itu "Mol"? (Mental Model Lusin)

Dalam kehidupan sehari-hari, kita membeli telur menggunakan satuan **lusin** ($12$ butir) atau kertas menggunakan satuan **rim** ($500$ lembar). 

Karena atom terlalu banyak dan terlalu kecil, kimiawan membuat satuan kemasan praktis yang disebut **Mol**:
$1\\text{ mol} = 6.022 \\times 10^{23}\\text{ butir partikel (Bilangan Avogadro, } N_A)$

Jika Anda punya $1\\text{ mol}$ atom Karbon, berarti Anda memegang $6.022 \\times 10^{23}$ butir atom Karbon, dan ketika ditimbang di neraca, massanya tepat sama dengan nilai $A_r$-nya: **$12.01\\text{ gram}$**!

---

### 🌉 Peta Jembatan Mol (The Central Hub)

Mol ($n$) adalah **Ibu Kota** kimia. Jika Anda ingin mengonversi dari satu besaran ke besaran lain (misal dari gram ke liter gas), Anda **wajib singgah ke Mol terlebih dahulu**:

<svg viewBox="0 0 900 480" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="select-none font-sans max-w-full h-auto">
  <defs>
    <!-- Arrowheads -->
    <marker id="arrow-blue" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M 0 1 L 7 4 L 0 7 z" fill="#2563eb" />
    </marker>
    <marker id="arrow-green" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M 0 1 L 7 4 L 0 7 z" fill="#059669" />
    </marker>
    <marker id="arrow-purple" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M 0 1 L 7 4 L 0 7 z" fill="#7c3aed" />
    </marker>
    <marker id="arrow-teal" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M 0 1 L 7 4 L 0 7 z" fill="#0d9488" />
    </marker>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="115%" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.08" />
    </filter>
    <filter id="glow-gold" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#f59e0b" flood-opacity="0.25" />
    </filter>
  </defs>

  <!-- Background Canvas -->
  <rect width="900" height="480" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
  
  <!-- Subtle Grid Accent -->
  <g opacity="0.06" stroke="#475569" stroke-width="1">
    <line x1="150" y1="0" x2="150" y2="480" />
    <line x1="300" y1="0" x2="300" y2="480" />
    <line x1="450" y1="0" x2="450" y2="480" stroke-dasharray="4" />
    <line x1="600" y1="0" x2="600" y2="480" />
    <line x1="750" y1="0" x2="750" y2="480" />
    <line x1="0" y1="120" x2="900" y2="120" />
    <line x1="0" y1="240" x2="900" y2="240" stroke-dasharray="4" />
    <line x1="0" y1="360" x2="900" y2="360" />
  </g>

  <!-- Title Badge Top Left -->
  <g transform="translate(24, 20)">
    <rect width="186" height="26" rx="6" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" />
    <text x="12" y="17" font-size="11" font-weight="700" fill="#475569" letter-spacing="0.06em">INFOGRAFIK JEMBATAN MOL</text>
  </g>

  <!-- Direction Arrows & Operation Pills: MASSA (Top) -->
  <!-- Massa -> Mol (Down) -->
  <line x1="415" y1="88" x2="415" y2="190" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arrow-blue)" />
  <g transform="translate(365, 126)" filter="url(#shadow)">
    <rect width="45" height="24" rx="6" fill="#ffffff" stroke="#2563eb" stroke-width="1.5" />
    <text x="22.5" y="16.5" text-anchor="middle" font-size="12" font-weight="800" fill="#1d4ed8">÷ Mr</text>
  </g>
  <!-- Mol -> Massa (Up) -->
  <line x1="485" y1="190" x2="485" y2="88" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arrow-blue)" />
  <g transform="translate(490, 126)" filter="url(#shadow)">
    <rect width="45" height="24" rx="6" fill="#ffffff" stroke="#2563eb" stroke-width="1.5" />
    <text x="22.5" y="16.5" text-anchor="middle" font-size="12" font-weight="800" fill="#1d4ed8">× Mr</text>
  </g>

  <!-- Direction Arrows & Operation Pills: PARTIKEL (Left) -->
  <!-- Partikel -> Mol (Right) -->
  <line x1="250" y1="225" x2="340" y2="225" stroke="#059669" stroke-width="2.5" marker-end="url(#arrow-green)" />
  <g transform="translate(270, 196)" filter="url(#shadow)">
    <rect width="55" height="22" rx="6" fill="#ffffff" stroke="#059669" stroke-width="1.5" />
    <text x="27.5" y="15" text-anchor="middle" font-size="11" font-weight="800" fill="#047857">÷ NA</text>
  </g>
  <!-- Mol -> Partikel (Left) -->
  <line x1="340" y1="255" x2="250" y2="255" stroke="#059669" stroke-width="2.5" marker-end="url(#arrow-green)" />
  <g transform="translate(270, 260)" filter="url(#shadow)">
    <rect width="55" height="22" rx="6" fill="#ffffff" stroke="#059669" stroke-width="1.5" />
    <text x="27.5" y="15" text-anchor="middle" font-size="11" font-weight="800" fill="#047857">× NA</text>
  </g>

  <!-- Direction Arrows & Operation Pills: GAS (Right) -->
  <!-- Gas -> Mol (Left) -->
  <line x1="650" y1="225" x2="560" y2="225" stroke="#7c3aed" stroke-width="2.5" marker-end="url(#arrow-purple)" />
  <g transform="translate(575, 196)" filter="url(#shadow)">
    <rect width="60" height="22" rx="6" fill="#ffffff" stroke="#7c3aed" stroke-width="1.5" />
    <text x="30" y="15" text-anchor="middle" font-size="11" font-weight="800" fill="#6d28d9">÷ 22.4</text>
  </g>
  <!-- Mol -> Gas (Right) -->
  <line x1="560" y1="255" x2="650" y2="255" stroke="#7c3aed" stroke-width="2.5" marker-end="url(#arrow-purple)" />
  <g transform="translate(575, 260)" filter="url(#shadow)">
    <rect width="60" height="22" rx="6" fill="#ffffff" stroke="#7c3aed" stroke-width="1.5" />
    <text x="30" y="15" text-anchor="middle" font-size="11" font-weight="800" fill="#6d28d9">× 22.4</text>
  </g>

  <!-- Direction Arrows & Operation Pills: MOLARITAS (Bottom) -->
  <!-- Molaritas -> Mol (Up) -->
  <line x1="415" y1="385" x2="415" y2="290" stroke="#0d9488" stroke-width="2.5" marker-end="url(#arrow-teal)" />
  <g transform="translate(365, 326)" filter="url(#shadow)">
    <rect width="45" height="24" rx="6" fill="#ffffff" stroke="#0d9488" stroke-width="1.5" />
    <text x="22.5" y="16.5" text-anchor="middle" font-size="12" font-weight="800" fill="#0f766e">× V</text>
  </g>
  <!-- Mol -> Molaritas (Down) -->
  <line x1="485" y1="290" x2="485" y2="385" stroke="#0d9488" stroke-width="2.5" marker-end="url(#arrow-teal)" />
  <g transform="translate(490, 326)" filter="url(#shadow)">
    <rect width="45" height="24" rx="6" fill="#ffffff" stroke="#0d9488" stroke-width="1.5" />
    <text x="22.5" y="16.5" text-anchor="middle" font-size="12" font-weight="800" fill="#0f766e">÷ V</text>
  </g>

  <!-- CARD 1: MASSA (Top) -->
  <g transform="translate(340, 20)" filter="url(#shadow)">
    <rect width="220" height="66" rx="14" fill="#ffffff" stroke="#bfdbfe" stroke-width="2" />
    <rect x="0" y="0" width="220" height="6" rx="3" fill="#2563eb" />
    <text x="110" y="32" text-anchor="middle" font-size="14" font-weight="800" fill="#1e3a8a">⚖️ MASSA (m)</text>
    <text x="110" y="52" text-anchor="middle" font-size="11" font-weight="600" fill="#2563eb">Satuan gram (g) | m = n × Mr</text>
  </g>

  <!-- CARD 2: JUMLAH PARTIKEL (Left) -->
  <g transform="translate(24, 205)" filter="url(#shadow)">
    <rect width="220" height="74" rx="14" fill="#ffffff" stroke="#a7f3d0" stroke-width="2" />
    <rect x="0" y="0" width="220" height="6" rx="3" fill="#059669" />
    <text x="110" y="32" text-anchor="middle" font-size="13" font-weight="800" fill="#064e3b">⚛️ JUMLAH PARTIKEL (N)</text>
    <text x="110" y="50" text-anchor="middle" font-size="11" font-weight="600" fill="#059669">N = n × NA (butir atom/molekul)</text>
    <text x="110" y="66" text-anchor="middle" font-size="10" font-weight="700" fill="#047857">NA = 6.022 × 10²³</text>
  </g>

  <!-- CARD 3: VOLUME GAS (Right) -->
  <g transform="translate(656, 192)" filter="url(#shadow)">
    <rect width="220" height="98" rx="14" fill="#ffffff" stroke="#ddd6fe" stroke-width="2" />
    <rect x="0" y="0" width="220" height="6" rx="3" fill="#7c3aed" />
    <text x="110" y="28" text-anchor="middle" font-size="13" font-weight="800" fill="#4c1d95">💨 VOLUME GAS (V)</text>
    <text x="110" y="48" text-anchor="middle" font-size="10.5" font-weight="600" fill="#6d28d9">STP (0°C, 1 atm): V = n × 22.4 L</text>
    <text x="110" y="65" text-anchor="middle" font-size="10.5" font-weight="600" fill="#6d28d9">RTP (25°C, 1 atm): V = n × 24.4 L</text>
    <text x="110" y="83" text-anchor="middle" font-size="10.5" font-weight="700" fill="#5b21b6">Kondisi Non-STP: P·V = n·R·T</text>
  </g>

  <!-- CARD 4: MOLARITAS (Bottom) -->
  <g transform="translate(340, 390)" filter="url(#shadow)">
    <rect width="220" height="68" rx="14" fill="#ffffff" stroke="#99f6e4" stroke-width="2" />
    <rect x="0" y="0" width="220" height="6" rx="3" fill="#0d9488" />
    <text x="110" y="32" text-anchor="middle" font-size="13" font-weight="800" fill="#134e4a">🧪 KONSENTRASI / MOLARITAS (M)</text>
    <text x="110" y="52" text-anchor="middle" font-size="11" font-weight="600" fill="#0f766e">M = n / V(Liter) | Mol zat dalam larutan</text>
  </g>

  <!-- CENTER HUB: MOL (n) -->
  <g transform="translate(350, 195)" filter="url(#glow-gold)">
    <rect width="200" height="90" rx="45" fill="#fef3c7" stroke="#f59e0b" stroke-width="3.5" />
    <circle cx="35" cy="45" r="8" fill="#f59e0b" opacity="0.3" />
    <circle cx="35" cy="45" r="4" fill="#d97706" />
    <circle cx="165" cy="45" r="8" fill="#f59e0b" opacity="0.3" />
    <circle cx="165" cy="45" r="4" fill="#d97706" />
    <text x="100" y="42" text-anchor="middle" font-size="22" font-weight="900" fill="#78350f" letter-spacing="0.04em">MOL (n)</text>
    <text x="100" y="64" text-anchor="middle" font-size="10.5" font-weight="800" fill="#b45309" letter-spacing="0.08em">THE CENTRAL HUB</text>
  </g>
</svg>

| Besaran Kimia | Menuju ke Mol ($\\rightarrow n$) | Keluar dari Mol ($n \\rightarrow$) | Keterangan / Tetapan Kunci |
| :--- | :--- | :--- | :--- |
| **Massa ($m$)** | $n = \\frac{m}{M_r}$ (Dibagi $M_r$) | $m = n \\times M_r$ (Dikali $M_r$) | Satuan massa wajib dalam **gram** |
| **Jumlah Partikel ($N$)** | $n = \\frac{N}{N_A}$ (Dibagi $N_A$) | $N = n \\times N_A$ (Dikali $N_A$) | Bilangan Avogadro: $N_A = 6.022 \\times 10^{23}$ |
| **Volume Gas STP ($V$)** | $n = \\frac{V}{22.4}$ (Dibagi $22.4$) | $V = n \\times 22.4$ (Dikali $22.4$) | Kondisi standar: $0^\\circ\\text{C}, 1\\text{ atm}$ |
| **Volume Gas RTP ($V$)** | $n = \\frac{V}{24.4}$ (Dibagi $24.4$) | $V = n \\times 24.4$ (Dikali $24.4$) | Kondisi ruang kamar: $25^\\circ\\text{C}, 1\\text{ atm}$ |
| **Gas Non-Standar** | $n = \\frac{PV}{RT}$ | $V = \\frac{nRT}{P}$ | Persamaan gas ideal: $R = 0.082\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$ |
| **Molaritas ($M$)** | $n = M \\times V(\\text{L})$ | $M = \\frac{n}{V(\\text{L})}$ | Volume larutan wajib dikonversi ke **Liter** |

---

### 📌 4 Jalur Konversi Utama:

#### 1. Jalur Massa $\\leftrightarrow$ Mol:
$m = n \\times M_r \\iff n = \\frac{m}{M_r}$

#### 2. Jalur Jumlah Partikel $\\leftrightarrow$ Mol:
$N = n \\times N_A = n \\times 6.022 \\times 10^{23} \\iff n = \\frac{N}{6.022 \\times 10^{23}}$

#### 3. Jalur Volume Gas $\\leftrightarrow$ Mol:
Tergantung kondisi lingkungan pengukuran:
- **Kondisi Standar (STP: $0^\\circ\\text{C}, 1\\text{ atm}$):**
  $V = n \\times 22.4\\text{ Liter/mol} \\iff n = \\frac{V}{22.4}$
- **Kondisi Kamar (RTP: $25^\\circ\\text{C}, 1\\text{ atm}$):**
  $V = n \\times 24.4\\text{ Liter/mol} \\iff n = \\frac{V}{24.4}$
- **Kondisi Sembarang Suhu & Tekanan ($P, T$ Tertentu):**
  Gunakan **Persamaan Gas Ideal**:
  $P V = n R T \\implies n = \\frac{P V}{R T}$
  *(Ingat: $P$ dalam atm, $V$ dalam Liter, $T$ mutlak dalam Kelvin $= ^\\circ\\text{C} + 273$, dan tetapan $R = 0.082\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$).*
- **Kondisi Membandingkan Dua Gas pada $T, P$ yang Sama:**
  $\\frac{V_1}{V_2} = \\frac{n_1}{n_2}$

#### 4. Jalur Molaritas Larutan $\\leftrightarrow$ Mol:
Molaritas ($M$) adalah kepekatan zat terlarut dalam tiap liter larutan:
$M = \\frac{n}{V(\\text{Liter})} = \\frac{m}{M_r} \\times \\frac{1000}{V(\\text{mL})}$

---

> [!TIP]
> ### 💡 Trik Praktis Menghafal Operasi Jembatan Mol:
> - **Keluar dari Mol (Mencari besaran lain)**: Selalu **DIKALI** tetapan ($M_r, N_A, 22.4$).
> - **Menuju ke Mol (Dari data soal ke Mol)**: Selalu **DIBAGI** tetapan ($M_r, N_A, 22.4$).`,
        keyFormulas: [
          { name: 'Konversi Mol ke Massa', formula: 'n = \\frac{m}{M_r}' },
          { name: 'Konversi Mol ke Partikel', formula: 'N = n \\times 6.022 \\times 10^{23}' },
          { name: 'Volume Gas STP', formula: 'V_{\\text{STP}} = n \\times 22.4\\text{ L}' },
          { name: 'Persamaan Gas Ideal', formula: 'P V = n R T' },
          { name: 'Molaritas Larutan', formula: 'M = \\frac{n}{V}' },
        ],
      },
      {
        tag: 'penentuan-rumus-empiris-dan-rumus-molekul',
        tags: ['rumus-empiris', 'rumus-molekul', 'analisis-unsur', 'persen-massa'],
        title: 'Konsep Inti 3: Penentuan Rumus Empiris (RE) & Rumus Molekul (RM)',
        summary: 'Metode terstruktur menentukan rasio terkecil atom pembentuk senyawa dan menentukan rumus aslinya.',
        content: `### 🎯 Beda Rumus Empiris (RE) vs Rumus Molekul (RM)

- **Rumus Empiris (RE)**: Formula kimia dengan rasio bilangan bulat paling sederhana dari atom-atom penyusunnya (seperti "resep perbandingan terkecil").
- **Rumus Molekul (RM)**: Formula kimia nyata yang menyatakan jumlah atom sebenarnya di dalam satu molekul utuh.

$\\mathbf{\\text{Rumus Molekul} = (\\text{Rumus Empiris})_n} \\quad \\implies \\quad M_r(\\text{RM}) = n \\times M_r(\\text{RE})$

**Tabel Contoh Konkret:**
| Nama Senyawa | Rumus Molekul (RM) | Rumus Empiris (RE) | Faktor Kelipatan ($n$) |
| :--- | :--- | :--- | :--- |
| **Air** | $\\ce{H2O}$ | $\\ce{H2O}$ | $n = 1$ |
| **Hidrogen Peroksida** | $\\ce{H2O2}$ | $\\ce{HO}$ | $n = 2$ |
| **Glukosa** | $\\ce{C6H12O6}$ | $\\ce{CH2O}$ | $n = 6$ |
| **Butena** | $\\ce{C4H8}$ | $\\ce{CH2}$ | $n = 4$ |

---

### 🧭 Alur 3 Langkah Pasti Mencari Rumus Empiris:

1. **Langkah 1 (Ubah Persen ke Gram)**:  
   Jika soal memberikan data dalam persen ($\\%$), asumsikan massa total senyawa $= 100\\text{ gram}$. Dengan demikian, angka persen bisa langsung diubah menjadi gram tanpa repot.
2. **Langkah 2 (Cari Mol Masing-Masing Unsur)**:  
   Bagi massa gram masing-masing unsur dengan $A_r$-nya:
   $n = \\frac{\\text{massa}}{A_r}$
3. **Langkah 3 (Bagi dengan Mol Terkecil)**:  
   Bandingkan nilai mol seluruh unsur dan bagi semuanya dengan angka mol terkecil untuk mendapatkan perbandingan bilangan bulat sederhana.

---

> [!WARNING]
> ### ⚠️ Jebakan Pecahan Koma: Jangan Asal Dibulatkan!
> Jika rasio mol menghasilkan desimal, **DILARANG** langsung membulatkannya ke atas/bawah jika belum sangat dekat dengan bilangan bulat (misal $\\pm 0.05$):
> - **Jika berakhiran $.50$**: Kalikan seluruh rasio dengan **$2$** (Contoh: $1 : 1.5 \\rightarrow \\mathbf{2 : 3}$)
> - **Jika berakhiran $.33$ atau $.67$**: Kalikan seluruh rasio dengan **$3$** (Contoh: $1 : 1.33 \\rightarrow \\mathbf{3 : 4}$)
> - **Jika berakhiran $.25$ atau $.75$**: Kalikan seluruh rasio dengan **$4$** (Contoh: $1 : 1.25 \\rightarrow \\mathbf{4 : 5}$)`,
        keyFormulas: [
          { name: 'Hubungan RM dan RE', formula: 'M_r(\\text{RM}) = n \\cdot M_r(\\text{RE})' },
          { name: 'Rasio Mol Rumus Empiris', formula: 'n_A : n_B = \\frac{m_A}{A_r(A)} : \\frac{m_B}{A_r(B)}' },
        ],
      },
      {
        tag: 'stoikiometri-reaksi-dan-pereaksi-pembatas',
        tags: ['stoikiometri-reaksi', 'tabel-mrs', 'pereaksi-pembatas', 'persen-hasil'],
        title: 'Konsep Inti 4: Stoikiometri Reaksi, Tabel M-R-S & Mekanisme Pereaksi Pembatas',
        summary: 'Metode kuantitatif menghitung sisa reaktan, pembentukan produk, dan evaluasi efisiensi persen hasil.',
        content: `### 🥪 Analogi Sederhana: Merakit Sandwich Keju

Bayangkan Anda ingin membuat sandwich dengan resep baku:
$\\ce{2 Roti + 1 Keju -> 1 Sandwich}$

Jika di meja dapur Anda tersedia **10 lembar roti** dan **2 lembar keju**, berapa sandwich yang bisa Anda buat?
- Jawabannya pasti **hanya 2 sandwich**!
- Mengapa? Karena keju habis tak bersisa, meskipun rotinya masih banyak tersisa (tersisa $6$ lembar roti).

Dalam kimia:
- **Keju** adalah **Pereaksi Pembatas** (*Limiting Reactant*), yaitu reaktan yang habis terlebih dahulu dan membatasi jumlah maksimal produk yang dapat terbentuk.
- **Roti** adalah **Pereaksi Berlebih** (*Excess Reactant*), yaitu reaktan yang tidak habis bereaksi.

---

### 🧭 Kapan Kita Wajib Mencari Pereaksi Pembatas?

> **Tanda Pasti di Soal:**  
> Jika dalam soal diketahui data kuantitas (mol, massa, atau volume) dari **DUA ATAU LEBIH reaktan yang dicampurkan**, Anda **WAJIB** menentukan siapa pereaksi pembatasnya!

---

### ⚡ Trik Cepat Menentukan Pereaksi Pembatas:

1. Ubah semua data reaktan mula-mula menjadi satuan **Mol ($n$)**.
2. Hitung **Nilai Uji** untuk setiap reaktan:
   $\\text{Nilai Uji} = \\frac{\\text{Mol Awal}}{\\text{Koefisien Reaksi}}$
3. **Pemenangnya adalah Angka Terkecil**: Reaktan dengan nilai uji terkecil adalah **Pereaksi Pembatas**. Reaktan inilah yang nilainya habis menjadi $0$ pada kondisi akhir reaksi.

---

### 📊 Format Standar Tabel M-R-S (Mula-mula, Reaksi, Sisa)

| Zat | Reaktan A | Reaktan B | $\\rightarrow$ | Produk C |
| :--- | :--- | :--- | :--- | :--- |
| **M** (Mula-mula) | Data mol awal | Data mol awal | | $0$ (belum ada) |
| **R** (Reaksi) | Berkurang ($-$) | Habis total ($-$) | | Bertambah ($+$) |
| **S** (Sisa / Akhir) | Tersisa ($M - R$) | **$0$ (Habis)** | | Terbentuk ($0 + R$) |

*Aturan Emas Baris R (Reaksi):*  
Nilai mol pada baris Reaksi **HARUS selalu sebanding dengan koefisien reaksinya**:
$\\text{Mol Reaksi Zat X} = \\frac{\\text{Koefisien X}}{\\text{Koefisien Pembatas}} \\times \\text{Mol Pembatas}$

---

### 📈 Persen Hasil Reaksi (*Percent Yield*)

Di laboratorium nyata, hasil eksperimen seringkali tidak mencapai $100\\%$ karena adanya zat yang tumpah, menempel di kaca beker, atau penguapan. Efisiensi reaksi dihitung dengan:

$\\% \\text{ Hasil} = \\frac{\\text{Hasil Aktual (Hasil Nyata Lab)}}{\\text{Hasil Teoretis (Hitungan Kertas M-R-S)}} \\times 100\\%$`,
        keyFormulas: [
          { name: 'Nilai Uji Pereaksi Pembatas', formula: '\\text{Nilai Uji} = \\frac{n_{\\text{awal}}}{\\text{Koefisien}}' },
          { name: 'Rumus Persen Hasil', formula: '\\% \\text{ Hasil} = \\frac{\\text{Massa Aktual}}{\\text{Massa Teoretis}} \\times 100\\%' },
        ],
      },
    ],
    worked_examples: [
      {
        tag: 'contoh-hukum-dalton-oksida-nitrogen',
        title: 'Contoh Soal 1: Pembuktian Hukum Perbandingan Berganda Dalton',
        summary: 'Metode sistematis mengunci massa satu unsur untuk membuktikan rasio bilangan bulat sederhana pada dua oksida nitrogen.',
        content: `### 📋 Soal Kasus:
Unsur Nitrogen ($\\\\ce{N}$) dan Oksigen ($\\\\ce{O}$) dapat bereaksi membentuk dua jenis senyawa oksida:
- **Senyawa I**: Mengandung $63.64\\\\%$ massa Nitrogen dan $36.36\\\\%$ massa Oksigen.
- **Senyawa II**: Mengandung $46.67\\\\%$ massa Nitrogen dan $53.33\\\\%$ massa Oksigen.

1. Buktikan bahwa kedua senyawa tersebut mematuhi Hukum Perbandingan Berganda Dalton!
2. Jika rumus kimia Senyawa I adalah $\\\\ce{N2O}$, tentukan rumus kimia Senyawa II!

---

### 💡 Peta Pikir & Strategi:
- **Kata Kunci**: Hukum Dalton berlaku jika massa salah satu unsur dibuat bernilai tetap (sama).
- **Langkah Kita**: Kunci massa Nitrogen pada kedua senyawa agar bernilai sama-sama $1\\\\text{ gram}$, lalu bandingkan massa Oksigennya.

---

### ✍️ Penyelesaian Langkah demi Langkah:

#### Langkah 1: Kunci Massa Nitrogen Senyawa I
Pada Senyawa I:
$\\\\frac{\\\\text{massa } \\\\ce{O}}{\\\\text{massa } \\\\ce{N}} = \\\\frac{36.36\\\\text{ g}}{63.64\\\\text{ g}} = \\\\mathbf{0.5714\\\\text{ g Oksigen per 1 g Nitrogen}}$

#### Langkah 2: Kunci Massa Nitrogen Senyawa II
Pada Senyawa II:
$\\\\frac{\\\\text{massa } \\\\ce{O}}{\\\\text{massa } \\\\ce{N}} = \\\\frac{53.33\\\\text{ g}}{46.67\\\\text{ g}} = \\\\mathbf{1.1427\\\\text{ g Oksigen per 1 g Nitrogen}}$

#### Langkah 3: Bandingkan Rasio Massa Oksigen
$\\\\frac{\\\\text{Massa O (Senyawa I)}}{\\\\text{Massa O (Senyawa II)}} = \\\\frac{0.5714}{1.1427} = \\\\frac{1}{2} = \\\\mathbf{1 : 2}$

**Kesimpulan Bagian 1:** Rasio massa oksigen adalah tepat **$1 : 2$** (bilangan bulat dan sederhana). Terbukti sahih mematuhi Hukum Dalton!

#### Langkah 4: Tentukan Rumus Kimia Senyawa II
- Senyawa I ($\\\\ce{N2O}$): 2 atom $\\\\ce{N}$ mengikat $1$ atom $\\\\ce{O}$.
- Pada Senyawa II, untuk jumlah $\\\\ce{N}$ yang sama (2 atom $\\\\ce{N}$), jumlah atom oksigennya adalah **dua kali lipat** dari Senyawa I:
  $1 \\\\times 2 = 2 \\\\text{ atom O} \\\\implies \\\\ce{N2O2} \\\\equiv \\\\mathbf{\\\\ce{NO}}$

**Jawaban:** Rumus kimia Senyawa II adalah **$\\\\ce{NO}$** (Nitrogen Monoksida).`,
        keyFormulas: [
          { name: 'Rasio Hukum Dalton', formula: '\\frac{m_{O,1}}{m_{O,2}} = \\text{Rasio Bulat Sederhana}' },
        ],
      },
      {
        tag: 'contoh-analisis-pembakaran-dan-rumus-molekul',
        title: 'Contoh Soal 2: Penentuan Rumus Empiris & Molekul Asam Askorbat (Vitamin C)',
        summary: 'Kalkulasi massa atom dari gas CO2 dan H2O hasil pembakaran untuk menentukan rumus empiris dan rumus molekul.',
        content: `### 📋 Soal Kasus:
Pembakaran sempurna $4.40\\\\text{ gram}$ sampel Vitamin C yang hanya tersusun atas atom Karbon (C), Hidrogen (H), dan Oksigen (O) menghasilkan $6.60\\\\text{ gram}$ gas karbon dioksida ($\\\\ce{CO2}$, $M_r = 44.0$) dan $1.80\\\\text{ gram}$ uap air ($\\\\ce{H2O}$, $M_r = 18.0$). 

Pada uji laboratorium terpisah, spektrometri massa menunjukkan bahwa massa molekul relatif ($M_r$) senyawa tersebut adalah $176\\\\text{ g/mol}$.
1. Tentukan Rumus Empiris (RE) Vitamin C!
2. Tentukan Rumus Molekul (RM) Vitamin C!

---

### 💡 Peta Pikir & Strategi:
- Seluruh atom C dari sampel berpindah ke gas $\\\\ce{CO2}$.
- Seluruh atom H dari sampel berpindah ke uap air $\\\\ce{H2O}$.
- Atom Oksigen pada sampel dicari dari: $\\\\text{Massa O} = \\\\text{Massa Sampel} - (\\\\text{Massa C} + \\\\text{Massa H})$.

---

### ✍️ Penyelesaian Langkah demi Langkah:

#### Langkah 1: Hitung Massa Masing-masing Unsur
- **Massa Karbon (C):**
  $m_{\\\\ce{C}} = \\\\frac{A_r(\\\\ce{C})}{M_r(\\\\ce{CO2})} \\\\times m_{\\\\ce{CO2}} = \\\\frac{12.0}{44.0} \\\\times 6.60\\\\text{ g} = \\\\mathbf{1.80\\\\text{ gram}}$
- **Massa Hidrogen (H):**
  $m_{\\\\ce{H}} = \\\\frac{2 \\\\times A_r(\\\\ce{H})}{M_r(\\\\ce{H2O})} \\\\times m_{\\\\ce{H2O}} = \\\\frac{2(1.0)}{18.0} \\\\times 1.80\\\\text{ g} = \\\\mathbf{0.20\\\\text{ gram}}$
- **Massa Oksigen (O):**
  $m_{\\\\ce{O}} = 4.40 - (1.80 + 0.20) = 4.40 - 2.00 = \\\\mathbf{2.40\\\\text{ gram}}$

#### Langkah 2: Cari Perbandingan Mol & Rumus Empiris
Bagi masing-masing massa dengan $A_r$-nya:
- $n_{\\\\ce{C}} = \\\\frac{1.80}{12.0} = 0.150\\\\text{ mol}$
- $n_{\\\\ce{H}} = \\\\frac{0.20}{1.0} = 0.200\\\\text{ mol}$
- $n_{\\\\ce{O}} = \\\\frac{2.40}{16.0} = 0.150\\\\text{ mol}$

Bagi seluruh angka mol dengan mol terkecil ($0.150$):
$n_{\\\\ce{C}} : n_{\\\\ce{H}} : n_{\\\\ce{O}} = \\\\frac{0.150}{0.150} : \\\\frac{0.200}{0.150} : \\\\frac{0.150}{0.150} = 1 : 1.33 : 1$

*Ingat aturan pecahan!* Kalikan seluruh angka dengan **$3$**:
$1 \\\\times 3 : 1.33 \\\\times 3 : 1 \\\\times 3 = \\\\mathbf{3 : 4 : 3}$

Maka **Rumus Empiris (RE) = $\\\\mathbf{\\\\ce{C3H4O3}}$**.

#### Langkah 3: Tentukan Rumus Molekul (RM)
- $M_r(\\\\text{RE}) = 3(12.0) + 4(1.0) + 3(16.0) = 36 + 4 + 48 = 88$
- Faktor kelipatan $n$:
  $n = \\\\frac{M_r(\\\\text{RM})}{M_r(\\\\text{RE})} = \\\\frac{176}{88} = \\\\mathbf{2}$

$\\\\text{Rumus Molekul} = (\\\\ce{C3H4O3})_2 = \\\\mathbf{\\\\ce{C6H8O6}}$

**Jawaban:** Rumus Empiris Vitamin C adalah **$\\\\ce{C3H4O3}$** dan Rumus Molekulnya adalah **$\\\\ce{C6H8O6}$** (Asam Askorbat).`,
        keyFormulas: [
          { name: 'Massa C dari CO2', formula: 'm_{\\ce{C}} = \\frac{12}{44} \\times m_{\\ce{CO2}}' },
          { name: 'Massa H dari H2O', formula: 'm_{\\ce{H}} = \\frac{2}{18} \\times m_{\\ce{H2O}}' },
        ],
      },
      {
        tag: 'contoh-stoikiometri-gas-non-stp-pv-nrt',
        title: 'Contoh Soal 3: Stoikiometri Reaksi Gas pada Kondisi Suhu & Tekanan Tertentu',
        summary: 'Penerapan persamaan gas ideal PV = nRT untuk mencari volume gas hasil reaksi pelarutan logam tembaga.',
        content: `### 📋 Soal Kasus:
Sebanyak $12.7\\\\text{ gram}$ lempeng tembaga murni ($A_r\\\\ \\\\ce{Cu} = 63.5$) dilarutkan ke dalam larutan asam nitrat pekat berlebih menurut reaksi setara berikut:
$\\\\ce{Cu(s) + 4 HNO3(aq) -> Cu(NO3)2(aq) + 2 NO2(g) + 2 H2O(l)}$

Berapakah volume gas $\\\\ce{NO2}$ cokelat yang dihasilkan jika diukur pada suhu $27^\\\\circ\\\\text{C}$ dan tekanan $2.0\\\\text{ atm}$? ($R = 0.082\\\\text{ L}\\\\cdot\\\\text{atm}/(\\\\text{mol}\\\\cdot\\\\text{K})$).

---

### 💡 Peta Pikir & Strategi:
1. Soal menyebutkan asam nitrat **berlebih**, artinya tembaga ($\\\\ce{Cu}$) adalah pereaksi pembatas yang habis total.
2. Cari mol $\\\\ce{Cu}$ mula-mula.
3. Gunakan perbandingan koefisien untuk mencari mol gas $\\\\ce{NO2}$.
4. Karena kondisi bukan $0^\\\\circ\\\\text{C}$ (bukan STP), gunakan rumus gas ideal $PV = nRT$ (suhu diubah ke Kelvin).

---

### ✍️ Penyelesaian Langkah demi Langkah:

#### Langkah 1: Hitung Mol Tembaga ($\\\\ce{Cu}$)
$n_{\\\\ce{Cu}} = \\\\frac{\\\\text{massa}}{A_r} = \\\\frac{12.7\\\\text{ g}}{63.5\\\\text{ g/mol}} = \\\\mathbf{0.200\\\\text{ mol}}$

#### Langkah 2: Hitung Mol Gas $\\\\ce{NO2}$ yang Terbentuk
Lihat koefisien reaksi setara:
$n_{\\\\ce{NO2}} = \\\\frac{\\\\text{koef } \\\\ce{NO2}}{\\\\text{koef } \\\\ce{Cu}} \\\\times n_{\\\\ce{Cu}} = \\\\frac{2}{1} \\\\times 0.200\\\\text{ mol} = \\\\mathbf{0.400\\\\text{ mol}}$

#### Langkah 3: Konversi Satuan ke Standar Gas Ideal
- Suhu mutlak ($T$): $27^\\\\circ\\\\text{C} + 273 = \\\\mathbf{300\\\\text{ K}}$
- Tekanan ($P$): $\\\\mathbf{2.0\\\\text{ atm}}$
- Mol gas ($n$): $\\\\mathbf{0.400\\\\text{ mol}}$

#### Langkah 4: Hitung Volume dengan $PV = nRT$
$V = \\\\frac{n R T}{P} = \\\\frac{0.400 \\\\times 0.082 \\\\times 300}{2.0} = \\\\frac{9.84}{2.0} = \\\\mathbf{4.92\\\\text{ Liter}}$

**Jawaban:** Volume gas nitrogen dioksida yang terbentuk adalah **$4.92\\\\text{ Liter}$**.`,
        keyFormulas: [
          { name: 'Persamaan Gas Ideal', formula: 'V = \\frac{n R T}{P}' },
        ],
      },
      {
        tag: 'contoh-kemurnian-sampel-dan-persen-hasil',
        title: 'Contoh Soal 4: Perhitungan Kemurnian Sampel Batu Kapur & Persen Hasil Reaksi',
        summary: 'Analisis stoikiometri terpadu mencakup kadar zat murni dari data gas STP dan evaluasi efisiensi sintesis padatan.',
        content: `### 📋 Soal Kasus:
Sebanyak $25.0\\\\text{ gram}$ batu kapur kotor yang mengandung kalsium karbonat ($\\\\ce{CaCO3}$, $M_r = 100.0$) dipanaskan kuat hingga terurai sempurna:
$\\\\ce{CaCO3(s) ->[\\\\Delta] CaO(s) + CO2(g)}$

Gas $\\\\ce{CO2}$ yang terbentuk ditampung pada kondisi STP dan diperoleh volume sebesar $4.48\\\\text{ Liter}$.
1. Berapakah persentase kemurnian kalsium karbonat ($\\\\%\\\\ \\\\ce{CaCO3}$) dalam batu kapur tersebut?
2. Jika massa kapur tohor ($\\\\ce{CaO}$, $M_r = 56.0$) padat yang berhasil ditimbang di laboratorium adalah $10.08\\\\text{ gram}$, berapakah persen hasil (*percent yield*) reaksi tersebut?

---

### 💡 Peta Pikir & Strategi:
- Volume $\\\\ce{CO2}$ pada STP ($4.48\\\\text{ L}$) langsung menunjukkan mol $\\\\ce{CO2}$ murni yang dihasilkan.
- Koefisien $\\\\ce{CaCO3} : \\\\ce{CO2} = 1 : 1$, sehingga mol $\\\\ce{CaCO3}$ murni $=$ mol $\\\\ce{CO2}$.
- Persen kemurnian $=$ $\\\\frac{\\\\text{massa murni}}{\\\\text{massa sampel kotor}} \\\\times 100\\\\%$.
- Persen hasil $=$ $\\\\frac{\\\\text{massa nyata di lab}}{\\\\text{massa teoretis}} \\\\times 100\\\\%$.

---

### ✍️ Penyelesaian Langkah demi Langkah:

#### Langkah 1: Hitung Mol Gas $\\\\ce{CO2}$
Kondisi STP ($0^\\\\circ\\\\text{C}, 1\\\\text{ atm}$):
$n_{\\\\ce{CO2}} = \\\\frac{V_{\\\\text{STP}}}{22.4} = \\\\frac{4.48\\\\text{ L}}{22.4\\\\text{ L/mol}} = \\\\mathbf{0.200\\\\text{ mol}}$

#### Langkah 2: Hitung Massa $\\\\ce{CaCO3}$ Murni
Berdasarkan koefisien reaksi setara ($1 : 1$):
$n_{\\\\ce{CaCO3}} = n_{\\\\ce{CO2}} = 0.200\\\\text{ mol}$
$m_{\\\\ce{CaCO3 (murni)}} = n \\\\times M_r = 0.200 \\\\times 100.0 = \\\\mathbf{20.0\\\\text{ gram}}$

#### Langkah 3: Hitung Persen Kemurnian Batu Kapur
$\\\\% \\\\text{ Kemurnian} = \\\\frac{m_{\\\\text{murni}}}{m_{\\\\text{sampel kotor}}} \\\\times 100\\\\% = \\\\frac{20.0\\\\text{ g}}{25.0\\\\text{ g}} \\\\times 100\\\\% = \\\\mathbf{80.0\\\\%}$

#### Langkah 4: Hitung Persen Hasil Reaksi $\\\\ce{CaO}$
- **Hasil Teoretis (Hitungan Kertas):**  
  Koefisien $\\\\ce{CaO} : \\\\ce{CaCO3} = 1 : 1$, sehingga $n_{\\\\ce{CaO}} = 0.200\\\\text{ mol}$.  
  $\\\\text{Massa Teoretis } \\\\ce{CaO} = 0.200 \\\\times 56.0 = \\\\mathbf{11.20\\\\text{ gram}}$
- **Hasil Aktual (Di Laboratorium):**  
  Tercatat sebesar **$10.08\\\\text{ gram}$**.
- **Kalkulasi Persen Hasil:**  
  $\\\\% \\\\text{ Hasil} = \\\\frac{\\\\text{Massa Aktual}}{\\\\text{Massa Teoretis}} \\\\times 100\\\\% = \\\\frac{10.08\\\\text{ g}}{11.20\\\\text{ g}} \\\\times 100\\\\% = \\\\mathbf{90.0\\\\%}$

**Jawaban:** Kemurnian batu kapur adalah **$80.0\\\\%$** dan efisiensi persen hasil reaksi adalah **$90.0\\\\%$**.`,
        keyFormulas: [
          { name: 'Rumus Persen Kemurnian Sampel', formula: '\\% \\text{ Kemurnian} = \\frac{m_{\\text{murni}}}{m_{\\text{sampel}}} \\times 100\\%' },
          { name: 'Rumus Persen Hasil', formula: '\\% \\text{ Hasil} = \\frac{\\text{Massa Aktual}}{\\text{Massa Teoretis}} \\times 100\\%' },
        ],
      },
    ],
  },
];
