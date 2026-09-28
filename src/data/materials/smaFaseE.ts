import type { SmaMaterialItem } from '../smaMaterialsData';
import { CHECKPOINTS_FASE_E } from '../checkpoints/index.ts';
import {
  WORKED_EXAMPLES_TOPIC_101,
  WORKED_EXAMPLES_TOPIC_102,
  WORKED_EXAMPLES_TOPIC_103,
  WORKED_EXAMPLES_TOPIC_104,
  WORKED_EXAMPLES_TOPIC_105,
} from './smaWorkedExamplesFaseE.ts';

const BASE_SMA_MATERIALS_FASE_E: SmaMaterialItem[] = [
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
    worked_examples: WORKED_EXAMPLES_TOPIC_101,
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

  worked_examples: WORKED_EXAMPLES_TOPIC_102,
},

  {
  "id": 103,
  "topic_number": 3,
  "grade": "Kelas 10",
  "semester": 1,
  "curriculumPhase": "Fase E",
  "relatedOsnTopicId": 2,
  "title": "Ikatan Kimia, Geometri Molekul & Gaya Antarmolekul",
  "slug": "ikatan-kimia-geometri-molekul-gaya-antarmolekul",
  "category": "Ikatan Kimia",
  "level": "SMA",
  "readTimeMinutes": 35,
  "summary": "Panduan pedagogis komprehensif ikatan kimia dan geometri molekul: analogi intuitif Sistem Barter vs Kepemilikan Saham Bersama Elektron (ionik, kovalen, logam); energi kisi kristal dan siklus Born-Haber; struktur Lewis, muatan formal, resonansi serta pengecualian kaidah oktet; prediksi bentuk geometri molekul berdasarkan analogi Balon Udara Repulsi VSEPR & teori domain elektron; analisis vektor momen dipol dan kepolaran senyawa; model lautan elektron Drude-Lorentz; serta dekonstruksi hierarki gaya antarmolekul (London, dipol-dipol, ikatan hidrogen) melalui analogi Lem Super Intramolekul vs Magnet Kulkas Antarmolekul.",
  "allTags": [
    "kaidah-oktet-dan-duplet",
    "simbol-titik-lewis",
    "ikatan-ion",
    "energi-kisi-kristal",
    "ikatan-kovalen-tunggal-rangkap",
    "ikatan-kovalen-koordinasi",
    "pengecualian-kaidah-oktet",
    "teori-vsepr",
    "domain-elektron",
    "geometri-molekul",
    "sudut-ikatan-dan-distorsi",
    "momen-dipol",
    "senyawa-polar-dan-nonpolar",
    "ikatan-logam",
    "model-lautan-elektron",
    "gaya-van-der-waals",
    "gaya-dispersi-london",
    "interaksi-dipol-dipol",
    "ikatan-hidrogen",
    "anomali-titik-didih-air",
    "transfer-elektron",
    "kaidah-oktet",
    "senyawa-biner",
    "ikatan-kovalen",
    "struktur-lewis",
    "pasangan-elektron-bebas",
    "pasangan-elektron-ikatan",
    "amonia",
    "vsepr",
    "ikatan-datif",
    "asam-basa-lewis",
    "ion-hidronium",
    "pengecualian-oktet",
    "sub-oktet",
    "asam-lewis",
    "sudut-ikatan",
    "tetrahedral",
    "bengkok-bent",
    "muatan-formal",
    "resonansi-struktur",
    "tiosianat",
    "elektronegativitas",
    "kontributor-mayor",
    "kepolaran-ikatan",
    "simetri-molekul",
    "vektor-dipol",
    "hibridisasi-orbital",
    "ikatan-sigma-pi",
    "akrilonitril",
    "aturan-bent",
    "sf4-seesaw",
    "posisi-ekuatorial-aksial",
    "tolakan-peb",
    "gaya-antarmolekul",
    "titik-didih",
    "anomali-air",
    "stoikiometri-ikatan",
    "dinitrogen-monoksida",
    "aturan-oktet",
    "clf3-t-shape",
    "sudut-ikatan-terdistorsi",
    "posisi-ekuatorial",
    "karakter-s",
    "panjang-ikatan",
    "keasaman-hidrokarbon",
    "intramolekul-vs-intermolekul",
    "nitrofenol",
    "kelarutan",
    "senyawa-gas-mulia",
    "xef4-square-planar",
    "oktet-diperluas",
    "momen-dipol-nol",
    "hibridisasi-sp3d2",
    "teori-orbital-molekul-mot",
    "orde-ikatan",
    "paramagnetik",
    "diamagnetik",
    "deret-spesi-oksigen",
    "karbon-monoksida-co",
    "homo-lumo",
    "ligan-logam-karbonil",
    "diatomik-heteronuklir",
    "bents-rule",
    "pf3cl2",
    "panjang-ikatan-aksial-ekuatorial",
    "hibridisasi-sp3d",
    "siklus-born-haber",
    "energi-kisi",
    "hukum-hess",
    "mgcl2",
    "termodinamika-ionik",
    "vsepr-eksotis",
    "xef5-pentagonal-planar",
    "bilangan-sterik-7",
    "hibridisasi-sp3d3",
    "sp-mixing",
    "n2-dan-no+",
    "energi-ionisasi-molekul",
    "halometana",
    "sudut-ikatan-riil",
    "redistribusi-karakter-s",
    "persamaan-kapustinskii",
    "afinitas-elektron-kedua",
    "kalsium-oksida",
    "if7-pentagonal-bipyramidal",
    "panjang-ikatan-anomali",
    "crowding-sterik",
    "delokalisasi-pi",
    "orde-ikatan-parsial",
    "muatan-parsial",
    "nitrat-dan-karbonat"
  ],
  "prerequisites": [
    {
      "tag": "elektron-valensi-dan-kaidah-oktet",
      "tags": [
        "elektron-valensi",
        "kestabilan-gas-mulia",
        "kaidah-oktet-duplet",
        "simbol-lewis"
      ],
      "title": "Prasyarat 1: Kestabilan Gas Mulia, Kaidah Oktet-Duplet & Simbol Titik Lewis",
      "summary": "Konsep dasar konfigurasi elektron kulit terluar yang mendorong atom-atom membentuk ikatan kimia stabil.",
      "content": "### 🤝 Sistem Barter vs Kepemilikan Saham Bersama Elektron (Mental Model)\n\nMengapa atom-atom di alam semesta berikatan membentuk senyawa alih-alih menyendiri sebagai atom bebas? Kecuali gas mulia (Golongan VIIIA), mayoritas atom memiliki kulit terluar yang belum terisi penuh sehingga berada pada tingkat energi potensial yang tidak stabil.\n\nUntuk mencapai kestabilan konfigurasi gas mulia (Kaidah Oktet 8 elektron atau Duplet 2 elektron), atom-atom melakukan satu dari tiga strategi:\n1. **Sistem Barter Uang Tunai (Ikatan Ionik):** Satu atom menyerahkan elektron valensinya secara penuh kepada atom lain yang rakus elektron (transfer elektron), menghasilkan kation $(+)$ dan anion $(-)$ yang saling mencengkeram erat melalui gaya tarik elektrostatik Coulomb raksasa.\n2. **Kepemilikan Saham Bersama (Ikatan Kovalen):** Karena kedua atom sama-sama enggan melepas elektron (nonlogam dengan elektronegativitas tinggi), mereka sepakat mengumpulkan dan menggunakan pasangan elektron secara bersama (*mutual investment*).\n3. **Rekening Kas Komunal Bebas (Ikatan Logam):** Seluruh kation logam merelakan elektron valensinya berenang bebas dalam \"lautan elektron komunal\" yang mengalir merata di sela-sela kisi kristal.\n\n---\n\nKecuali unsur-unsur Gas Mulia (Golongan VIIIA), sebagian besar atom di alam tidak berada dalam wujud atom tunggal bebas yang terisolasi, melainkan saling berikatan membentuk molekul unsur atau senyawa kimia.\n\n### 1. Hakikat Termodinamika Kestabilan Gas Mulia\n\nUnsur-unsur Gas Mulia ($\\ce{He}, \\ce{Ne}, \\ce{Ar}, \\ce{Kr}, \\ce{Xe}, \\ce{Rn}$) memiliki energi ionisasi yang sangat tinggi dan afinitas elektron mendekati nol atau positif. Hal ini menyebabkan gas mulia bersifat **sangat stabil (inert)** dan sukar bereaksi secara kimiawi karena telah memiliki kulit valensi yang terisi penuh (*closed valence shell*):\n- **Helium ($\\ce{_{2}He}$):** $1s^2$ (memiliki $2$ elektron valensi, konfigurasi **Duplet** stabil).\n- **Neon hingga Radon:** $ns^2 np^6$ (memiliki tepat $8$ elektron valensi, konfigurasi **Oktet** stabil).\n\n---\n\n### 2. Postulat Kaidah Oktet & Duplet G.N. Lewis\n\nPada tahun 1916, Gilbert N. Lewis dan Irving Langmuir memformulasikan aturan fundamental pembentukan ikatan kimia:\n1. **Kaidah Oktet (*Octet Rule*):**\n   Atom-atom unsur cenderung menyesuaikan jumlah elektron valensinya agar berjumlah **delapan elektron** seperti konfigurasi gas mulia terdekat.\n2. **Kaidah Duplet (*Duplet Rule*):**\n   Atom-atom berukuran kecil dengan nomor atom rendah (seperti $\\ce{H}, \\ce{Li}, \\ce{Be}$) cenderung mencapai kestabilan dengan memiliki **dua elektron** pada kulit terluarnya, menyerupai konfigurasi Helium ($1s^2$).\n\nAtom-atom dapat mencapai konfigurasi oktet atau duplet melalui dua mekanisme utama:\n- **Pelepasan atau penangkapan elektron** (serah-terima elektron) yang menghasilkan **Ikatan Ionik**.\n- **Pemakaian bersama pasangan elektron** antar atom yang menghasilkan **Ikatan Kovalen**.\n\n---\n\n### 3. Simbol Titik Lewis (*Lewis Dot Symbols*)\n\nSimbol Lewis adalah representasi grafis di mana elektron valensi suatu atom digambarkan sebagai titik ($\\bullet$) atau silang ($\\times$) yang mengelilingi simbol kimia unsur:\n- Elektron diletakkan satu per satu pada keempat sisi simbol unsur (atas, bawah, kanan, kiri) sebelum dipasangkan, mencerminkan aturan Hund.\n- Contoh:\n  - Golongan IA ($\\ce{Na\\cdot}$): $1$ elektron valensi.\n  - Golongan IIA ($\\ce{\\cdot Mg\\cdot}$): $2$ elektron valensi.\n  - Golongan IVA ($\\ce{\\cdot \\overset{\\cdot}{\\underset{\\cdot}{C}} \\cdot}$): $4$ elektron valensi tunggal.\n  - Golongan VIIA ($:\\!\\ce{\\overset{\\cdot\\cdot}{\\underset{\\cdot\\cdot}{Cl}}}\\cdot$): $7$ elektron valensi (3 pasang berpasangan, 1 elektron tunggal siap berikatan).\n> [!NOTE]\n> ### 💡 Tiga Kategori Pengecualian Kaidah Oktet yang Sering Diuji di OSN\n> 1. **Spesi Berelektron Ganjil (Radikal Bebas):** Molekul dengan jumlah elektron valensi total ganjil sehingga mustahil semua elektron berpasangan (misal $\\ce{NO}$ dengan 11 elektron valensi dan $\\ce{NO2}$ dengan 17 elektron valensi). Sangat reaktif!\n> 2. **Oktet Kurang / Tak Lengkap (*Incomplete Octet*):** Atom pusat dikelilingi kurang dari 8 elektron namun stabil (misal $\\ce{BeCl2}$ dengan 4 elektron di sekitar Be, $\\ce{BF3}$ dan $\\ce{AlCl3}$ dengan 6 elektron di sekitar atom pusat).\n> 3. **Superoktet / Ekspansi Kulit Valensi (*Expanded Octet*):** Atom pusat dari **Periode 3 atau lebih tinggi** (seperti P, S, Cl, Xe) dapat menampung 10, 12, bahkan 14 elektron valensi karena memiliki **subkulit $d$ kosong** yang dapat diakses untuk hibridisasi (misal $\\ce{PCl5}$ memiliki 10e⁻, $\\ce{SF6}$ memiliki 12e⁻, $\\ce{XeF4}$ memiliki 12e⁻). Unsur Periode 2 (C, N, O, F) MUTLAK TIDAK BISA mengalami ekspansi oktet karena tidak memiliki subkulit $d$!\n",
      "keyFormulas": [
        {
          "name": "Kaidah Konfigurasi Oktet Gas Mulia",
          "formula": "ns^2 np^6 \\quad (\\text{Total } 8\\text{ elektron valensi})"
        },
        {
          "name": "Kaidah Konfigurasi Duplet Helium",
          "formula": "1s^2 \\quad (\\text{Total } 2\\text{ elektron valensi})"
        }
      ]
    },
    {
      "tag": "elektronegativitas-dan-karakter-ikatan",
      "tags": [
        "elektronegativitas-pauling",
        "selisih-elektronegativitas",
        "spektrum-karakter-ikatan"
      ],
      "title": "Prasyarat 2: Skala Elektronegativitas Pauling & Spektrum Kontinum Karakter Ikatan",
      "summary": "Peran perbedaan kemampuan menarik elektron dalam menentukan kecenderungan ikatan ionik vs kovalen polar vs kovalen nonpolar.",
      "content": "Karakter suatu ikatan kimia tidak terbagi secara kaku (hitam-putih) antara ionik murni dan kovalen murni, melainkan merupakan sebuah **spektrum kontinum** yang dikendalikan oleh selisih keelektronegatifan ($\\Delta EN$) antara kedua atom yang berikatan.\n\n### 1. Skala Keelektronegatifan Linus Pauling\n\nKeelektronegatifan adalah ukuran kemampuan relatif suatu atom dalam suatu molekul untuk menarik pasangan elektron ikatan ke arah dirinya.\n- Unsur paling elektronegatif di alam semesta adalah **Fluorin ($\\ce{F} = 3.98 \\approx 4.0$)**, disusul Oksigen ($\\ce{O} = 3.44$), Klorin ($\\ce{Cl} = 3.16$), dan Nitrogen ($\\ce{N} = 3.04$).\n- Unsur paling elektropositif (keelektronegatifan terendah) adalah **Cesium ($\\ce{Cs} = 0.79$)** dan **Fransium ($\\ce{Fr} = 0.7$)**.\n\n---\n\n### 2. Kriteria Selisih Keelektronegatifan ($\\Delta EN = |EN_A - EN_B|$)\n\n1. **Ikatan Kovalen Nonpolar (Murni):**\n   - $\\Delta EN \\le 0.4$\n   - Pasangan elektron ikatan ditarik sama kuat secara simetris oleh kedua inti atom.\n   - Contoh: $\\ce{Cl2}$ ($\\Delta EN = 0$), $\\ce{CH4}$ ($\\Delta EN = 2.55 - 2.20 = 0.35$).\n2. **Ikatan Kovalen Polar:**\n   - $0.4 < \\Delta EN \\le 1.7$\n   - Pasangan elektron ikatan tertarik lebih condong ke atom yang lebih elektronegatif, menimbulkan pemisahan muatan parsial: kutub negatif parsial ($\\delta^-$) dan kutub positif parsial ($\\delta^+$).\n   - Contoh: $\\ce{HCl}$ ($\\Delta EN = 3.16 - 2.20 = 0.96$), $\\ce{H2O}$ ($\\Delta EN = 3.44 - 2.20 = 1.24$).\n3. **Ikatan Ionik (Elektrovalen):**\n   - $\\Delta EN > 1.7$\n   - Selisih tarikan sangat ekstrem sehingga terjadi transfer elektron penuh (ionisasi sempurna) dari atom elektropositif ke atom elektronegatif. Karakter ionik ikatan melampaui $50\\%$.\n   - Contoh: $\\ce{NaCl}$ ($\\Delta EN = 3.16 - 0.93 = 2.23$), $\\ce{KF}$ ($\\Delta EN = 3.98 - 0.82 = 3.16$).",
      "keyFormulas": [
        {
          "name": "Selisih Keelektronegatifan",
          "formula": "\\Delta EN = |EN_A - EN_B|"
        },
        {
          "name": "Persen Karakter Ionik Hannay-Smyth",
          "formula": "\\% \\text{ Karakter Ionik} = 16 |\\Delta EN| + 3.5 (|\\Delta EN|)^2"
        }
      ]
    }
  ],
  "core_concepts": [
    {
      "tag": "ikatan-ion-dan-energi-kisi",
      "tags": [
        "ikatan-ion",
        "transfer-elektron",
        "energi-kisi",
        "kisi-kristal-nacl",
        "siklus-born-haber",
        "sifat-senyawa-ion"
      ],
      "title": "Konsep Inti 1: Ikatan Ion (Elektrovalen), Energi Kisi Kristal & Sifat Fisik Senyawa Ionik",
      "summary": "Mekanisme transfer elektron antarlogam dan nonlogam, stabilitas kisi kristal tiga dimensi, serta penjelasan sifat titik leleh tinggi dan kerapuhan kristal.",
      "content": "Ikatan ion terbentuk akibat gaya tarik-menarik elektrostatik (Gaya Coulomb) yang sangat kuat antara kation (ion bermuatan positif) dan anion (ion bermuatan negatif).\n\n### 1. Mekanisme Pembentukan Ikatan Ion\n\nIkatan ion secara klasik terjadi antara:\n- **Atom Logam (Golongan IA, IIA, sebagian transisi):** Memiliki energi ionisasi rendah sehingga mudah **melepaskan elektron** valensinya membentuk kation stabil berkonfigurasi gas mulia:\n  $$\\ce{Na ([Ne] 3s^1) -> Na+ ([Ne]) + e-}$$\n- **Atom Nonlogam (Golongan VIA, VIIA):** Memiliki afinitas elektron tinggi dan sangat elektronegatif sehingga mudah **menangkap elektron** tersebut membentuk anion berkonfigurasi gas mulia:\n  $$\\ce{Cl ([Ne] 3s^2 3p^5) + e- -> Cl- ([Ne] 3s^2 3p^6 = [Ar])}$$\n\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 780 300\" width=\"100%\" height=\"auto\" class=\"max-w-[780px] select-none font-sans\">\n  <defs>\n    <linearGradient id=\"ionGrad1\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#eff6ff\"/>\n      <stop offset=\"100%\" stop-color=\"#dbeafe\"/>\n    </linearGradient>\n    <linearGradient id=\"covGrad1\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#ecfdf5\"/>\n      <stop offset=\"100%\" stop-color=\"#d1fae5\"/>\n    </linearGradient>\n    <marker id=\"arrowGold\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 9 5 L 0 9 z\" fill=\"#d97706\"/>\n    </marker>\n    <filter id=\"shadowBox\" x=\"-5%\" y=\"-5%\" width=\"110%\" height=\"115%\" filterUnits=\"userSpaceOnUse\">\n      <feDropShadow dx=\"0\" dy=\"2\" stdDeviation=\"3\" flood-opacity=\"0.08\"/>\n    </filter>\n  </defs>\n\n  <!-- PANEL KIRI: IKATAN IONIK -->\n  <g transform=\"translate(10, 10)\">\n    <rect width=\"365\" height=\"280\" rx=\"16\" fill=\"url(#ionGrad1)\" stroke=\"#bfdbfe\" stroke-width=\"1.5\" filter=\"url(#shadowBox)\"/>\n    <rect x=\"16\" y=\"14\" width=\"140\" height=\"22\" rx=\"6\" fill=\"#2563eb\"/>\n    <text x=\"86\" y=\"29\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">1. IKATAN IONIK</text>\n    <text x=\"182\" y=\"52\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e3a8a\" text-anchor=\"middle\">Serah-Terima Elektron: Na + Cl → [Na]⁺ + [Cl]⁻</text>\n\n    <!-- Atom Na -->\n    <g transform=\"translate(65, 125)\">\n      <circle r=\"42\" fill=\"#ffffff\" stroke=\"#93c5fd\" stroke-width=\"1.5\" stroke-dasharray=\"3 2\"/>\n      <circle r=\"28\" fill=\"#ffffff\" stroke=\"#93c5fd\" stroke-width=\"1.5\"/>\n      <circle r=\"15\" fill=\"#3b82f6\"/>\n      <text x=\"0\" y=\"4\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Na</text>\n      <text x=\"0\" y=\"58\" font-size=\"10\" font-weight=\"semibold\" fill=\"#1e40af\" text-anchor=\"middle\">Atom Na (2, 8, 1)</text>\n      <!-- Valensi e- -->\n      <circle cx=\"42\" cy=\"0\" r=\"5\" fill=\"#f59e0b\" stroke=\"#b45309\" stroke-width=\"1.5\"/>\n      <text x=\"42\" y=\"-9\" font-size=\"9\" font-weight=\"bold\" fill=\"#b45309\" text-anchor=\"middle\">1e⁻</text>\n    </g>\n\n    <!-- Panah Transfer Elektron -->\n    <path d=\"M 112 125 C 135 75, 165 75, 185 110\" fill=\"none\" stroke=\"#d97706\" stroke-width=\"2.5\" stroke-dasharray=\"4 3\" marker-end=\"url(#arrowGold)\"/>\n    <text x=\"148\" y=\"70\" font-size=\"10\" font-weight=\"bold\" fill=\"#b45309\" text-anchor=\"middle\">Transfer e⁻</text>\n\n    <!-- Atom Cl -->\n    <g transform=\"translate(230, 125)\">\n      <circle r=\"46\" fill=\"#ffffff\" stroke=\"#86efac\" stroke-width=\"1.5\" stroke-dasharray=\"3 2\"/>\n      <circle r=\"32\" fill=\"#ffffff\" stroke=\"#86efac\" stroke-width=\"1.5\"/>\n      <circle r=\"18\" fill=\"#10b981\"/>\n      <text x=\"0\" y=\"4\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Cl</text>\n      <text x=\"0\" y=\"62\" font-size=\"10\" font-weight=\"semibold\" fill=\"#065f46\" text-anchor=\"middle\">Atom Cl (2, 8, 7)</text>\n      <!-- Elektron valensi Cl -->\n      <circle cx=\"-46\" cy=\"0\" r=\"4\" fill=\"#10b981\"/>\n      <circle cx=\"0\" cy=\"-46\" r=\"4\" fill=\"#10b981\"/>\n      <circle cx=\"0\" cy=\"46\" r=\"4\" fill=\"#10b981\"/>\n      <circle cx=\"46\" cy=\"0\" r=\"4\" fill=\"#10b981\"/>\n      <circle cx=\"32\" cy=\"-32\" r=\"4\" fill=\"#10b981\"/>\n      <circle cx=\"32\" cy=\"32\" r=\"4\" fill=\"#10b981\"/>\n      <circle cx=\"-32\" cy=\"32\" r=\"4\" fill=\"#10b981\"/>\n    </g>\n\n    <!-- Hasil: Kisi & Gaya Coulomb -->\n    <rect x=\"20\" y=\"215\" width=\"325\" height=\"50\" rx=\"8\" fill=\"#ffffff\" stroke=\"#93c5fd\" stroke-width=\"1\"/>\n    <text x=\"182\" y=\"234\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e3a8a\" text-anchor=\"middle\">Gaya Coulomb: F = k · (|q₁ · q₂|) / r²</text>\n    <text x=\"182\" y=\"252\" font-size=\"10\" fill=\"#475569\" text-anchor=\"middle\">Membentuk kation Na⁺ kecil & anion Cl⁻ besar terkemas rapat</text>\n  </g>\n\n  <!-- PANEL KANAN: IKATAN KOVALEN -->\n  <g transform=\"translate(395, 10)\">\n    <rect width=\"375\" height=\"280\" rx=\"16\" fill=\"url(#covGrad1)\" stroke=\"#a7f3d0\" stroke-width=\"1.5\" filter=\"url(#shadowBox)\"/>\n    <rect x=\"16\" y=\"14\" width=\"155\" height=\"22\" rx=\"6\" fill=\"#059669\"/>\n    <text x=\"93\" y=\"29\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">2. IKATAN KOVALEN</text>\n    <text x=\"187\" y=\"52\" font-size=\"12\" font-weight=\"bold\" fill=\"#064e3b\" text-anchor=\"middle\">Pemakaian Bersama Elektron: Cl + Cl → Cl₂</text>\n\n    <!-- Overlapping Cl2 molecule -->\n    <g transform=\"translate(187, 125)\">\n      <!-- Lingkaran Luar Atom Kiri & Kanan -->\n      <circle cx=\"-42\" cy=\"0\" r=\"52\" fill=\"#3b82f6\" fill-opacity=\"0.1\" stroke=\"#3b82f6\" stroke-width=\"1.5\"/>\n      <circle cx=\"42\" cy=\"0\" r=\"52\" fill=\"#10b981\" fill-opacity=\"0.1\" stroke=\"#10b981\" stroke-width=\"1.5\"/>\n\n      <!-- Daerah Overlap -->\n      <ellipse cx=\"0\" cy=\"0\" rx=\"18\" ry=\"34\" fill=\"#fef08a\" fill-opacity=\"0.55\" stroke=\"#eab308\" stroke-width=\"1.5\"/>\n\n      <!-- Inti Kiri & Kanan -->\n      <circle cx=\"-42\" cy=\"0\" r=\"18\" fill=\"#2563eb\"/>\n      <text x=\"-42\" y=\"4\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Cl</text>\n      <circle cx=\"42\" cy=\"0\" r=\"18\" fill=\"#059669\"/>\n      <text x=\"42\" y=\"4\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Cl</text>\n\n      <!-- Pasangan Elektron Bersama di Tengah (PEI) -->\n      <circle cx=\"0\" cy=\"-10\" r=\"4.5\" fill=\"#2563eb\"/>\n      <circle cx=\"0\" cy=\"10\" r=\"4.5\" fill=\"#059669\"/>\n\n      <text x=\"0\" y=\"-45\" font-size=\"10\" font-weight=\"bold\" fill=\"#854d0e\" text-anchor=\"middle\">PEI (Shared Pair)</text>\n      <path d=\"M 0 -38 L 0 -22\" stroke=\"#854d0e\" stroke-width=\"1.2\" marker-end=\"url(#arrowGold)\"/>\n\n      <text x=\"-42\" y=\"68\" font-size=\"10\" font-weight=\"semibold\" fill=\"#1e40af\" text-anchor=\"middle\">3 Pasang PEB</text>\n      <text x=\"42\" y=\"68\" font-size=\"10\" font-weight=\"semibold\" fill=\"#065f46\" text-anchor=\"middle\">3 Pasang PEB</text>\n    </g>\n\n    <!-- Keterangan Bawah -->\n    <rect x=\"20\" y=\"215\" width=\"335\" height=\"50\" rx=\"8\" fill=\"#ffffff\" stroke=\"#a7f3d0\" stroke-width=\"1\"/>\n    <text x=\"187\" y=\"234\" font-size=\"11\" font-weight=\"bold\" fill=\"#065f46\" text-anchor=\"middle\">Kerapatan Awan Elektron Terpusat di Antara 2 Inti</text>\n    <text x=\"187\" y=\"252\" font-size=\"10\" fill=\"#475569\" text-anchor=\"middle\">Kedua atom mencapai konfigurasi oktet stabil (8 elektron)</text>\n  </g>\n</svg>\n\n---\n\n### 2. Energi Kisi Kristal (*Lattice Energy*, $U$)\n\nSenyawa ionik tidak membentuk molekul individual diskret $\\ce{NaCl}$, melainkan membentuk **kisi kristal tiga dimensi raksasa (*crystalline lattice*)** di mana setiap kation $\\ce{Na+}$ dikelilingi oleh $6$ anion $\\ce{Cl-}$ (koordinasi oktahedral $6:6$), dan setiap anion dikelilingi oleh $6$ kation.\n\n**Energi Kisi ($U$):** Energi yang dilepaskan ketika satu mol senyawa ionik padat terbentuk dari ion-ion penyusunnya dalam wujud gas pada kondisi standar:\n$$\\ce{Na+(g) + Cl-(g) -> NaCl(s)} \\quad \\Delta H = U \\quad (U = -787\\text{ kJ/mol})$$\n\nBerdasarkan formulasi elektrostatik Born-Landé:\n$$U \\propto -\\frac{|z_+ \\cdot z_-|}{r_0}$$\n- $z_+$ dan $z_-$ = muatan kation dan anion.\n- $r_0$ = jarak antarpusat kation-anion ($r_0 = r_+ + r_-$).\n\n> [!IMPORTANT]\n> **Faktor Dominan Penentu Kekuatan Ikatan Ion:**  \n> 1. **Besar muatan ion:** Pengaruh kuadratis muatan jauh lebih dominan daripada ukuran jari-jari. Senyawa dengan ion bervalensi dua (seperti $\\ce{MgO}$, di mana $z_+ = +2, z_- = -2$, hasil kali muatan $= 4$) memiliki energi kisi sekitar **4 kali lipat** lebih besar ($U \\approx -3791\\text{ kJ/mol}$) dan titik leleh jauh lebih tinggi ($2852^\\circ\\text{C}$) dibandingkan $\\ce{NaCl}$ ($z_+ = +1, z_- = -1$, titik leleh $801^\\circ\\text{C}$).\n> 2. **Jari-jari ion:** Makin kecil jari-jari ion, jarak $r_0$ makin pendek, sehingga gaya Coulomb dan energi kisi makin kuat: $U(\\ce{LiF}) > U(\\ce{NaCl}) > U(\\ce{KBr})$.\n\n---\n\n### 3. Karakteristik Fisik Khas Senyawa Ionik\n\n1. **Titik Leleh dan Titik Didih Sangat Tinggi:**\n   Dibutuhkan energi termal yang sangat masif untuk mengatasi gaya tarik elektrostatik kisi kristal tiga dimensi di seluruh orientasi ruang.\n2. **Keras Namun Getas / Rapuh (*Hard but Brittle*):**\n   Kristal ionik sangat tahan terhadap tekanan tegak lurus langsung. Namun apabila dipukul dengan palu atau dikenai gaya geser (*shear stress*), satu lapisan ion akan bergeser sejauh satu jari-jari ion. Akibatnya, ion-ion bermuatan sejenis akan berhadapan secara langsung ($\\ce{Na+}$ berhadapan dengan $\\ce{Na+}$, $\\ce{Cl-}$ berhadapan dengan $\\ce{Cl-}$), memicu **gaya tolak elektrostatik raksasa yang memecah kristal seketika**.\n3. **Daya Hantar Listrik (Konduktivitas):**\n   - **Wujud Padat:** *Isolator listrik total*, karena ion-ion terkunci kaku pada titik kisi kristal dan tidak dapat bergerak bebas mengalirkan muatan.\n   - **Wujud Lelehan (*Molten*) & Larutan (*Aqueous*):** *Konduktor listrik sangat baik (Elektrolit Kuat)*, karena kisi kristal terurai dan ion-ion terdisosiasi bergerak bebas (*mobile charge carriers*).",
      "keyFormulas": [
        {
          "name": "Hukum Coulomb Gaya Elektrostatik",
          "formula": "F = k \\frac{|q_1 \\cdot q_2|}{r^2}"
        },
        {
          "name": "Ketergantungan Energi Kisi Kristal",
          "formula": "U \\propto \\frac{|z_+ \\cdot z_-|}{r_+ + r_-}"
        }
      ]
    },
    {
      "tag": "ikatan-kovalen-dan-kovalen-koordinasi",
      "tags": [
        "ikatan-kovalen",
        "kovalen-tunggal-rangkap",
        "ikatan-sigma-pi",
        "kovalen-koordinasi",
        "datif",
        "pengecualian-oktet"
      ],
      "title": "Konsep Inti 2: Ikatan Kovalen, Kovalen Koordinasi (Datif) & Anomali Pengecualian Kaidah Oktet",
      "summary": "Tumpang tindih orbital sigma dan pi, ikatan donor-akseptor elektron bebas, serta fenomena oktet tak lengkap, radikal bebas, dan superoktet.",
      "content": "Ikatan kovalen terbentuk akibat gaya tarik elektrostatik simultan antara dua inti atom positif terhadap pasangan elektron yang digunakan bersama di daerah antarnukleus (*internuclear region*).\n\n### 1. Mekanisme Pembentukan Ikatan Kovalen & Kurva Energi Potensial\n\nPembentukan ikatan kovalen antara dua atom (seperti dua atom hidrogen, $\\ce{H + H -> H2}$) melibatkan kompetisi dinamis antara gaya tarik dan gaya tolak elektrostatik seiring perubahan jarak antarinti ($r$).\n\n#### A. Dinamika Dua Gaya yang Berkompetisi:\n1. **Gaya Tarik Elektrostatik ($F_{\\text{tarik}}$):**\n   - Tarikan antara inti atom A (bermuatan $+1$) terhadap elektron atom B (bermuatan $-1$).\n   - Tarikan antara inti atom B terhadap elektron atom A.\n2. **Gaya Tolak Elektrostatik ($F_{\\text{tolak}}$):**\n   - Tolakan antara elektron atom A dengan elektron atom B (tolakan sesama muatan negatif).\n   - Tolakan antara inti atom A dengan inti atom B (tolakan sesama muatan positif).\n\n#### B. Analisis Kurva Energi Potensial (Kurva Morse $\\ce{H2}$):\n\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 820 380\" width=\"100%\" height=\"auto\" class=\"max-w-[820px] select-none font-sans\">\n  <defs>\n    <linearGradient id=\"curveGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#38bdf8\"/>\n      <stop offset=\"100%\" stop-color=\"#0284c7\"/>\n    </linearGradient>\n    <radialGradient id=\"hAtom\" cx=\"35%\" cy=\"35%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#93c5fd\"/>\n      <stop offset=\"60%\" stop-color=\"#3b82f6\"/>\n      <stop offset=\"100%\" stop-color=\"#1d4ed8\"/>\n    </radialGradient>\n    <marker id=\"arrowEp\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 8 5 L 0 9 z\" fill=\"#0284c7\"/>\n    </marker>\n    <marker id=\"arrowDist\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 8 5 L 0 9 z\" fill=\"#16a34a\"/>\n    </marker>\n  </defs>\n\n  <!-- BACKGROUND -->\n  <rect width=\"820\" height=\"380\" rx=\"16\" fill=\"#f8fafc\" stroke=\"#e2e8f0\" stroke-width=\"1.5\"/>\n\n  <!-- HEADER -->\n  <text x=\"410\" y=\"26\" font-size=\"13\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">KURVA ENERGI POTENSIAL PEMBENTUKAN IKATAN KOVALEN (H₂)</text>\n  <text x=\"410\" y=\"44\" font-size=\"10.5\" fill=\"#64748b\" text-anchor=\"middle\">Keseimbangan Termodinamika antara Gaya Tarik Inti-Elektron dan Gaya Tolak Inti-Inti</text>\n\n  <!-- AREA GRAFIK UTAMA -->\n  <!-- Sumbu Koordinat: Asal (X=90, Y=170) -> Ep = 0 -->\n  <g transform=\"translate(10, 20)\">\n    <!-- Garis Sumbu Ep = 0 -->\n    <line x1=\"90\" y1=\"150\" x2=\"520\" y2=\"150\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/>\n    <text x=\"82\" y=\"154\" font-size=\"10\" font-weight=\"bold\" fill=\"#64748b\" text-anchor=\"end\">Ep = 0</text>\n\n    <!-- Sumbu Y: Energi Potensial -->\n    <line x1=\"90\" y1=\"50\" x2=\"90\" y2=\"310\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <path d=\"M 90 44 L 86 52 L 94 52 z\" fill=\"#334155\"/>\n    <text x=\"85\" y=\"42\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#334155\" text-anchor=\"end\">Energi Potensial (kJ/mol)</text>\n\n    <!-- Sumbu X: Jarak Antarinti r -->\n    <line x1=\"90\" y1=\"310\" x2=\"540\" y2=\"310\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <path d=\"M 546 310 L 538 306 L 538 314 z\" fill=\"#334155\"/>\n    <text x=\"535\" y=\"328\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#334155\" text-anchor=\"end\">Jarak Antarinti r (pm)</text>\n\n    <!-- Label Skala Y -->\n    <text x=\"82\" y=\"80\" font-size=\"9\" fill=\"#dc2626\" text-anchor=\"end\">+400</text>\n    <line x1=\"86\" y1=\"76\" x2=\"94\" y2=\"76\" stroke=\"#94a3b8\" stroke-width=\"1\"/>\n    <text x=\"82\" y=\"278\" font-size=\"9\" font-weight=\"bold\" fill=\"#0284c7\" text-anchor=\"end\">-436</text>\n    <line x1=\"86\" y1=\"274\" x2=\"94\" y2=\"274\" stroke=\"#0284c7\" stroke-width=\"1.5\"/>\n\n    <!-- Label Skala X: r = 74 pm -->\n    <line x1=\"220\" y1=\"306\" x2=\"220\" y2=\"314\" stroke=\"#16a34a\" stroke-width=\"1.5\"/>\n    <text x=\"220\" y=\"328\" font-size=\"10\" font-weight=\"bold\" fill=\"#16a34a\" text-anchor=\"middle\">74 pm</text>\n\n    <!-- KURVA ENERGI POTENSIAL (Smooth Bezier) -->\n    <!-- Turun dari (120, 60) menembus Ep=0 di (150, 150) -> palung di (220, 274) -> naik ke (340, 165) -> (500, 152) -->\n    <path d=\"M 115 55 C 122 120, 138 210, 160 250 C 180 285, 205 274, 220 274 C 245 274, 280 230, 330 185 C 380 160, 440 152, 510 150\" fill=\"none\" stroke=\"#0284c7\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>\n\n    <!-- TITIK PALUNG MINIMUM: r = 74 pm, Ep = -436 kJ/mol -->\n    <circle cx=\"220\" cy=\"274\" r=\"6\" fill=\"#0284c7\" stroke=\"#ffffff\" stroke-width=\"2\"/>\n    <line x1=\"90\" y1=\"274\" x2=\"220\" y2=\"274\" stroke=\"#0284c7\" stroke-width=\"1.2\" stroke-dasharray=\"3 2\"/>\n    <line x1=\"220\" y1=\"150\" x2=\"220\" y2=\"310\" stroke=\"#16a34a\" stroke-width=\"1.2\" stroke-dasharray=\"3 2\"/>\n\n    <!-- PANAH ENERGI IKATAN (De = 436 kJ/mol) -->\n    <line x1=\"260\" y1=\"150\" x2=\"260\" y2=\"274\" stroke=\"#0284c7\" stroke-width=\"2\" marker-start=\"url(#arrowEp)\" marker-end=\"url(#arrowEp)\"/>\n    <rect x=\"270\" y=\"200\" width=\"130\" height=\"24\" rx=\"5\" fill=\"#ffffff\" stroke=\"#bae6fd\" stroke-width=\"1\"/>\n    <text x=\"335\" y=\"216\" font-size=\"9.5\" font-weight=\"bold\" fill=\"#0284c7\" text-anchor=\"middle\">Energi Ikatan: 436 kJ/mol</text>\n\n    <!-- PANAH PANJANG IKATAN (r0 = 74 pm) -->\n    <line x1=\"90\" y1=\"290\" x2=\"220\" y2=\"290\" stroke=\"#16a34a\" stroke-width=\"2\" marker-start=\"url(#arrowDist)\" marker-end=\"url(#arrowDist)\"/>\n    <text x=\"155\" y=\"285\" font-size=\"9\" font-weight=\"bold\" fill=\"#16a34a\" text-anchor=\"middle\">Panjang Ikatan (r₀)</text>\n  </g>\n\n  <!-- ILUSTRASI 3 TAHAP MEKANISME (KARTU KANAN) -->\n  <g transform=\"translate(560, 60)\">\n    <rect width=\"245\" height=\"295\" rx=\"12\" fill=\"#ffffff\" stroke=\"#cbd5e1\" stroke-width=\"1\"/>\n    <text x=\"122\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"middle\">3 TAHAPAN PEMBENTUKAN</text>\n\n    <!-- TAHAP 1: ATOM TERPISAH (r >> 74 pm) -->\n    <g transform=\"translate(15, 32)\">\n      <rect width=\"215\" height=\"72\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#e2e8f0\" stroke-width=\"1\"/>\n      <text x=\"10\" y=\"16\" font-size=\"9.5\" font-weight=\"bold\" fill=\"#0369a1\">1. Jarak Jauh (r &gt;&gt; r₀)</text>\n      <!-- Visual 2 atom terpisah -->\n      <circle cx=\"65\" cy=\"45\" r=\"14\" fill=\"url(#hAtom)\"/>\n      <text x=\"65\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">H</text>\n      <circle cx=\"150\" cy=\"45\" r=\"14\" fill=\"url(#hAtom)\"/>\n      <text x=\"150\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">H</text>\n      <text x=\"107\" y=\"48\" font-size=\"8\" fill=\"#64748b\" text-anchor=\"middle\">Tidak Ada Interaksi</text>\n      <text x=\"10\" y=\"66\" font-size=\"8.5\" fill=\"#475569\">Ep = 0 kJ/mol (Atom Bebas)</text>\n    </g>\n\n    <!-- TAHAP 2: PANJANG IKATAN OPTIMAL (r = 74 pm) -->\n    <g transform=\"translate(15, 114)\">\n      <rect width=\"215\" height=\"85\" rx=\"8\" fill=\"#f0fdf4\" stroke=\"#86efac\" stroke-width=\"1.5\"/>\n      <text x=\"10\" y=\"16\" font-size=\"9.5\" font-weight=\"bold\" fill=\"#15803d\">2. Keseimbangan (r = 74 pm)</text>\n      <!-- Visual tumpang tindih optimal -->\n      <g transform=\"translate(107, 45)\">\n        <circle cx=\"-11\" cy=\"0\" r=\"15\" fill=\"url(#hAtom)\" opacity=\"0.9\"/>\n        <circle cx=\"11\" cy=\"0\" r=\"15\" fill=\"url(#hAtom)\" opacity=\"0.9\"/>\n        <ellipse cx=\"0\" cy=\"0\" rx=\"7\" ry=\"12\" fill=\"#fef08a\" opacity=\"0.8\"/>\n        <text x=\"-11\" y=\"4\" font-size=\"8.5\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">H</text>\n        <text x=\"11\" y=\"4\" font-size=\"8.5\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">H</text>\n      </g>\n      <text x=\"107\" y=\"70\" font-size=\"8.5\" font-weight=\"bold\" fill=\"#15803d\" text-anchor=\"middle\">F_tarik = F_tolak | Molekul H₂ Stabil</text>\n      <text x=\"107\" y=\"80\" font-size=\"8\" fill=\"#166534\" text-anchor=\"middle\">Ep Minimum: -436 kJ/mol</text>\n    </g>\n\n    <!-- TAHAP 3: TERLALU DEKAT (r < 74 pm) -->\n    <g transform=\"translate(15, 210)\">\n      <rect width=\"215\" height=\"74\" rx=\"8\" fill=\"#fef2f2\" stroke=\"#fca5a5\" stroke-width=\"1\"/>\n      <text x=\"10\" y=\"16\" font-size=\"9.5\" font-weight=\"bold\" fill=\"#b91c1c\">3. Terlalu Dekat (r &lt; 74 pm)</text>\n      <!-- Visual bertabrakan inti -->\n      <g transform=\"translate(107, 42)\">\n        <circle cx=\"-5\" cy=\"0\" r=\"15\" fill=\"#ef4444\" opacity=\"0.8\"/>\n        <circle cx=\"5\" cy=\"0\" r=\"15\" fill=\"#ef4444\" opacity=\"0.8\"/>\n        <text x=\"0\" y=\"4\" font-size=\"10\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">⚡</text>\n      </g>\n      <text x=\"107\" y=\"65\" font-size=\"8.5\" font-weight=\"bold\" fill=\"#b91c1c\" text-anchor=\"middle\">F_tolak &gt;&gt; F_tarik (Tolakan Inti)</text>\n    </g>\n  </g>\n</svg>\n\n#### C. Tiga Zona Kritis Kurva Energi Potensial:\n1. **Zona Jarak Jauh ($r > r_0$):**\n   Ketika kedua atom hidrogen saling mendekat dari jarak jauh, gaya tarik elektrostatik antara inti satu atom dengan elektron atom lainnya mulai bekerja mendominasi gaya tolak ($F_{\\text{tarik}} > F_{\\text{tolak}}$). Akibatnya, **energi potensial sistem menurun secara kontinu ($E_p < 0$)**, melepaskan kalor (proses eksotermik) seiring meningkatnya kestabilan sistem.\n2. **Zona Keseimbangan Termodinamika ($r = r_0 = 74\\text{ pm}$):**\n   Pada jarak antarinti $74\\text{ pm}$ ($0.74\\text{ \\AA}$), gaya tarik elektrostatik inti-elektron tepat mengimbangi gaya tolak inti-inti dan elektron-elektron ($F_{\\text{tarik}} = F_{\\text{tolak}}$).\n   - Sistem mencapai **palung energi terendah (energi minimum)** sebesar **$-436\\text{ kJ/mol}$**.\n   - **Panjang Ikatan Kovalen ($r_0$):** Jarak antarinti pada titik energi potensial minimum ($74\\text{ pm}$ untuk molekul $\\ce{H2}$).\n   - **Energi Ikatan / Energi Disosiasi Ikatan ($D_e$):** Besarnya kedalaman palung energi ($436\\text{ kJ/mol}$), yaitu energi yang harus diserap sistem untuk memisahkan kembali molekul $\\ce{H2}$ menjadi atom-atom bebas netral.\n3. **Zona Tolakan Inti ($r < r_0$):**\n   Jika kedua atom dipaksa saling mendekat melewati jarak $74\\text{ pm}$, awan elektron saling tumpang tindih berlebihan dan kedua inti atom bermuatan positif saling mendekat. Gaya tolak elektrostatik inti-inti melonjak secara eksponensial ($F_{\\text{tolak}} \\gg F_{\\text{tarik}}$).\n   - Energi potensial sistem melesat naik tajam ke nilai positif tinggi ($E_p \\gg 0$), menyebabkan sistem menjadi sangat labil dan kedua atom saling tolak-menolak keras.\n\n---\n\n### 2. Klasifikasi Orde Ikatan Kovalen\n\nBerdasarkan jumlah pasangan elektron ikatan (PEI) yang digunakan bersama:\n1. **Ikatan Kovalen Tunggal (Orde Ikatan = 1):**\n   - Menggunakan $1$ pasang elektron bersama ($2$ elektron).\n   - Terdiri dari **$1$ ikatan $\\sigma$ (sigma)** yang terbentuk dari tumpang tindih langsung ujung-ke-ujung (*head-on overlap*) orbital atom.\n   - Memiliki panjang ikatan paling panjang dan energi ikatan paling lemah.\n   - Contoh: $\\ce{H-H}$, $\\ce{Cl-Cl}$, $\\ce{H-CH3}$.\n2. **Ikatan Kovalen Rangkap Dua (Orde Ikatan = 2):**\n   - Menggunakan $2$ pasang elektron bersama ($4$ elektron).\n   - Terdiri dari **$1$ ikatan $\\sigma$ + $1$ ikatan $\\pi$ (pi)** yang terbentuk dari tumpang tindih sisi-ke-sisi (*side-by-side overlap*) orbital $p$.\n   - Contoh: $\\ce{O=O}$ pada $\\ce{O2}$, $\\ce{O=C=O}$ pada $\\ce{CO2}$, $\\ce{H2C=CH2}$ (etena).\n3. **Ikatan Kovalen Rangkap Tiga (Orde Ikatan = 3):**\n   - Menggunakan $3$ pasang elektron bersama ($6$ elektron).\n   - Terdiri dari **$1$ ikatan $\\sigma$ + $2$ ikatan $\\pi$** yang saling tegak lurus.\n   - Memiliki panjang ikatan paling pendek dan energi ikatan paling tinggi (sangat kuat dan inert).\n   - Contoh: $\\ce{N\\equiv N}$ pada gas Nitrogen ($D_{\\ce{N\\equiv N}} = 945\\text{ kJ/mol}$, menjelaskan mengapa $\\ce{N2}$ sangat stabil di atmosfer), gas asetilena $\\ce{H-C\\equiv C-H}$.\n\n---\n\n### 3. Ikatan Kovalen Koordinasi (Ikatan Datif / Semipolar)\n\nIkatan kovalen koordinasi adalah jenis ikatan kovalen di mana **pasangan elektron ikatan yang digunakan bersama hanya disumbangkan secara sepihak oleh salah satu atom (atom donor)**, sedangkan atom mitranya (atom akseptor) hanya menyediakan orbital kosong tanpa menyumbangkan elektron.\n- **Syarat Terbentuknya:**\n  1. Atom donor wajib memiliki minimal satu **Pasangan Elektron Bebas (PEB)** yang belum berikatan (Basa Lewis).\n  2. Atom akseptor memiliki **orbital kosong** yang siap menerima pasangan elektron tersebut (Asam Lewis).\n- **Contoh Penting dalam Kimia:**\n  1. **Pembentukan Kation Amonium ($\\ce{NH4+}$):**\n     Molekul amonia ($\\ce{NH3}$) memiliki 1 PEB pada atom $\\ce{N}$. Ketika bereaksi dengan ion $\\ce{H+}$ (yang tidak memiliki elektron sama sekali, orbital $1s^0$ kosong):\n     $$\\ce{H3N:} + \\ce{H+} \\to [\\ce{H3N -> H}]+ \\quad \\text{atau} \\quad [\\ce{NH4}]+$$\n  2. **Pembentukan Kation Hidronium ($\\ce{H3O+}$):**\n     $$\\ce{H2\\ddot{O}} + \\ce{H+} \\to [\\ce{H2O -> H}]+$$\n  3. **Adisi Asam-Basa Lewis Amonia dan Boron Trifluorida:**\n     $$\\ce{H3N:} + \\ce{BF3} \\to \\ce{H3N -> BF3}$$\n  4. **Molekul Belerang Trioksida ($\\ce{SO3}$):**\n     Berdasarkan kaidah oktet formal, atom $\\ce{S}$ berikatan rangkap dua dengan 1 atom $\\ce{O}$ ($\\ce{S=O}$), dan menyumbangkan 2 PEB-nya untuk membentuk **2 ikatan kovalen koordinasi** ke dua atom $\\ce{O}$ lainnya ($\\ce{O <- S(=O) -> O}$).\n\n---\n\n### 4. Tiga Kategori Pengecualian Kaidah Oktet\n\nMeskipun kaidah oktet sangat berguna untuk memprediksi struktur senyawa unsur periode 2, terdapat tiga kelas senyawa yang menyimpang dari kaidah oktet:\n\n1. **Oktet Tak Lengkap (*Incomplete Octet* - Elektron Kurang dari 8):**\n   Terjadi pada senyawa kovalen berilium ($\\ce{Be}$), boron ($\\ce{B}$), dan aluminium ($\\ce{Al}$):\n   - $\\ce{BeCl2}$: Atom $\\ce{Be}$ hanya dikelilingi oleh **4 elektron valensi** (2 PEI).\n   - $\\ce{BF3}$ dan $\\ce{BCl3}$: Atom $\\ce{B}$ hanya dikelilingi oleh **6 elektron valensi** (3 PEI).\n   - *Dampak Reaktivitas:* Senyawa dengan oktet tak lengkap sangat reaktif sebagai **Asam Lewis** (akseptor pasangan elektron) yang rakus berikatan dengan spesi kaya elektron.\n2. **Molekul Berjumlah Elektron Ganjil (Radikal Bebas / *Odd-Electron Molecules*):**\n   Molekul yang total elektron valensinya bernomor ganjil secara matematis mustahil memasangkan seluruh elektronnya menjadi oktet:\n   - Nitrogen Monoksida ($\\ce{NO}$): $5 + 6 = 11$ elektron valensi. Atom $\\ce{N}$ memiliki $7$ elektron di sekelilingnya.\n   - Nitrogen Dioksida ($\\ce{NO2}$): $5 + 2(6) = 17$ elektron valensi. Berwarna cokelat gas, bersifat paramagnetik dan sangat mudah mendimerisasi menjadi dinitrogen tetraoksida non-radikal:\n     $$\\ce{2 NO2 (g) <=> N2O4 (g)}$$\n3. **Oktet Berkembang (*Expanded Octet* / Superoktet - Lebih dari 8 Elektron):**\n   Hanya dapat terjadi pada atom pusat dari **Periode 3 atau lebih besar** (seperti $\\ce{P}, \\ce{S}, \\ce{Cl}, \\ce{Br}, \\ce{I}, \\ce{Xe}$) karena atom-atom ini memiliki **subkulit $3d$ kosong yang berenergi relatif rendah** sehingga mampu menampung 10, 12, atau 14 elektron valensi:\n   - Fosforus Pentaklorida ($\\ce{PCl5}$): Atom pusat $\\ce{P}$ memiliki **10 elektron valensi** (5 PEI).\n   - Belerang Heksafluorida ($\\ce{SF6}$): Atom pusat $\\ce{S}$ memiliki **12 elektron valensi** (6 PEI, sangat stabil dan inert).\n   - Ksenon Tetrafluorida ($\\ce{XeF4}$): Atom pusat $\\ce{Xe}$ memiliki **12 elektron** (4 PEI + 2 PEB).\n   *(Unsur Periode 2 seperti Karbon, Nitrogen, dan Oksigen TIDAK PERNAH mengalami superoktet karena tidak memiliki subkulit $2d$).*",
      "keyFormulas": [
        {
          "name": "Keseimbangan Termodinamika Ikatan Kovalen",
          "formula": "r = r_0 \\implies \\left(\\frac{dE_p}{dr}\\right)_{r=r_0} = 0 \\quad (E_p = -D_e)"
        },
        {
          "name": "Orde Ikatan Kovalen",
          "formula": "\\text{Orde Ikatan} = \\frac{N_b - N_a}{2}"
        },
        {
          "name": "Kapasitas Maksimal Superoktet Periode 3",
          "formula": "\\text{Elektron Kulit Terluar} > 8 \\quad (\\text{Melibatkan orbital } d)"
        }
      ]
    },
    {
      "tag": "teori-vsepr-dan-geometri-molekul",
      "tags": [
        "teori-vsepr",
        "domain-elektron",
        "geometri-molekul",
        "notasi-axne-m",
        "sudut-ikatan",
        "distorsi-peb"
      ],
      "title": "Konsep Inti 3: Teori VSEPR, Notasi Domain Elektron & Prediksi Geometri Ruang Molekul",
      "summary": "Kaidah tolakan pasangan elektron Gillespie-Nyholm, perumusan AXnEm, serta penurunan bentuk geometri molekul dari bentuk dasarnya.",
      "content": "### 🎈 Balon Udara Repulsi VSEPR (Mental Model: Teori Tolakan Domain Elektron)\n\nBayangkan Anda mengikat beberapa balon karet berbentuk lonjong pada satu simpul pusat yang sama:\n- Jika Anda mengikat **2 balon**, balon-balon tersebut secara alami akan saling mendorong ke arah berlawanan membentuk garis lurus (**Linier**, sudut $180^\\circ$).\n- Jika Anda mengikat **3 balon**, mereka akan menyebar rata pada satu bidang datar (**Segitiga Datar / Trigonal Planar**, sudut $120^\\circ$).\n- Jika Anda mengikat **4 balon**, mereka tidak akan membentuk tanda tambah datar ($90^\\circ$), melainkan meletup ke ruang tiga dimensi membentuk piramida berkaki tiga (**Tetrahedral**, sudut $109.5^\\circ$).\n- Mengikat **5 balon** menghasilkan **Trigonal Bipiramida** ($90^\\circ$ dan $120^\\circ$).\n- Mengikat **6 balon** menghasilkan **Oktahedral** ($90^\\circ$).\n\nBegitulah persisnya cara kerja teori **VSEPR (*Valence Shell Electron Pair Repulsion*)**. Pasangan-pasangan elektron pada kulit valensi atom pusat bermuatan negatif, sehingga mereka saling tolak-menolak sekuat tenaga dan menata diri di ruang 3D pada posisi dengan gaya tolak minimum!\n\n---\n\nBentuk ruang tiga dimensi molekul mengendalikan reaktivitas kimiawi, kepolaran, interaksi dengan reseptor biologis, hingga wujud fisiknya.\n\n### 1. Prinsip Fundamental Teori VSEPR\n\nTeori VSEPR (*Valence Shell Electron Pair Repulsion*) dikembangkan oleh Ronald Gillespie dan Ronald Nyholm:\n> *\"Pasangan-pasangan elektron valensi (baik pasangan elektron ikatan maupun pasangan elektron bebas) yang mengelilingi atom pusat bermuatan negatif, sehingga mereka akan saling tolak-menolak dan berusaha menempati posisi ruang sejauh mungkin satu sama lain untuk meminimalkan gaya tolak elektrostatik.\"*\n\n**Hierarki Kekuatan Tolakan Elektron (Gillespie-Nyholm Rule):**\n$$\\mathbf{\\text{Tolakan PEB - PEB} > \\text{Tolakan PEB - PEI} > \\text{Tolakan PEI - PEI}}$$\n- **Mengapa PEB menolak lebih kuat?** Pasangan Elektron Bebas (PEB) hanya terikat pada satu inti atom, sehingga awan elektronnya lebih menggelembung besar dan menyebar luas di sekitar atom pusat. Sebaliknya, Pasangan Elektron Ikatan (PEI) ditarik oleh dua inti atom sehingga awan elektronnya lebih ramping dan terkurung di antara kedua inti.\n- **Akibat Fisik:** Kehadiran PEB akan **menekan sudut ikatan PEI-PEI menjadi lebih sempit** daripada sudut idealnya!\n\n---\n\n### 2. Notasi Domain Elektron ($AX_n E_m$)\n\nUntuk meramalkan bentuk molekul, digunakan notasi:\n$$\\mathbf{AX_n E_m}$$\n- $\\mathbf{A}$ = Simbol atom pusat.\n- $\\mathbf{X}$ = Jumlah atom ligan yang terikat pada atom pusat (sama dengan jumlah Pasangan Elektron Ikatan / PEI). Ikatan tunggal, rangkap dua, maupun rangkap tiga dihitung sebagai **$1$ domain ikatan**.\n- $\\mathbf{E}$ = Jumlah Pasangan Elektron Bebas (PEB) yang berada pada kulit valensi atom pusat.\n- $\\mathbf{n + m}$ = Jumlah total domain elektron (menentukan **Geometri Domain Elektron Dasar**).\n\nRumus cepat menghitung PEB ($E$):\n$$E = \\frac{EV - (n \\times b)}{2}$$\n*(di mana $EV$ = elektron valensi atom pusat, $n$ = jumlah atom ligan terikat, $b$ = valensi kebutuhan elektron ligan: $b=1$ untuk $\\ce{H, F, Cl, Br, I}$; $b=2$ untuk $\\ce{O, S}$; $b=3$ untuk $\\ce{N}$).*\n\n---\n\n### 3. Peta Komparatif 5 Geometri Molekul Kunci\n\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 840 330\" width=\"100%\" height=\"auto\" class=\"max-w-[840px] select-none font-sans\">\n  <defs>\n    <radialGradient id=\"atomCenter\" cx=\"35%\" cy=\"35%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#93c5fd\"/>\n      <stop offset=\"60%\" stop-color=\"#2563eb\"/>\n      <stop offset=\"100%\" stop-color=\"#1e3a8a\"/>\n    </radialGradient>\n    <radialGradient id=\"atomLigand\" cx=\"35%\" cy=\"35%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#86efac\"/>\n      <stop offset=\"60%\" stop-color=\"#10b981\"/>\n      <stop offset=\"100%\" stop-color=\"#064e3b\"/>\n    </radialGradient>\n    <radialGradient id=\"lonePair\" cx=\"40%\" cy=\"35%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#fef08a\"/>\n      <stop offset=\"70%\" stop-color=\"#eab308\"/>\n      <stop offset=\"100%\" stop-color=\"#ca8a04\"/>\n    </radialGradient>\n  </defs>\n\n  <!-- BACKGROUND CONTAINER -->\n  <rect width=\"840\" height=\"330\" rx=\"16\" fill=\"#f8fafc\" stroke=\"#e2e8f0\" stroke-width=\"1.5\"/>\n\n  <!-- TITLE -->\n  <text x=\"420\" y=\"28\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">SPEKTRUM GEOMETRI MOLEKUL VSEPR & DISTORSI SUDUT IKATAN</text>\n  <text x=\"420\" y=\"46\" font-size=\"11\" fill=\"#64748b\" text-anchor=\"middle\">Pengaruh tolakan awan elektron PEB terhadap penciutan sudut ikatan PEI-PEI</text>\n\n  <!-- CARD 1: LINEAR (AX2) -->\n  <g transform=\"translate(20, 65)\">\n    <rect width=\"150\" height=\"200\" rx=\"12\" fill=\"#ffffff\" stroke=\"#cbd5e1\" stroke-width=\"1\"/>\n    <rect x=\"10\" y=\"10\" width=\"130\" height=\"22\" rx=\"6\" fill=\"#3b82f6\"/>\n    <text x=\"75\" y=\"25\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Linear (AX₂)</text>\n    <!-- Visual 3D -->\n    <g transform=\"translate(75, 95)\">\n      <!-- Ikatan -->\n      <line x1=\"-50\" y1=\"0\" x2=\"50\" y2=\"0\" stroke=\"#94a3b8\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n      <!-- Bola Pusat -->\n      <circle cx=\"0\" cy=\"0\" r=\"16\" fill=\"url(#atomCenter)\"/>\n      <text x=\"0\" y=\"4\" font-size=\"9.5\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Be</text>\n      <!-- Bola Ligan Kiri & Kanan -->\n      <circle cx=\"-50\" cy=\"0\" r=\"13\" fill=\"url(#atomLigand)\"/>\n      <text x=\"-50\" y=\"3\" font-size=\"8.5\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Cl</text>\n      <circle cx=\"50\" cy=\"0\" r=\"13\" fill=\"url(#atomLigand)\"/>\n      <text x=\"50\" y=\"3\" font-size=\"8.5\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Cl</text>\n      <!-- Arc Sudut -->\n      <path d=\"M -22 -14 A 26 26 0 0 1 22 -14\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.5\"/>\n      <text x=\"0\" y=\"-28\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563eb\" text-anchor=\"middle\">180°</text>\n    </g>\n    <text x=\"75\" y=\"162\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\" text-anchor=\"middle\">Sudut: 180°</text>\n    <text x=\"75\" y=\"178\" font-size=\"9\" fill=\"#64748b\" text-anchor=\"middle\">0 PEB | Nonpolar</text>\n    <text x=\"75\" y=\"192\" font-size=\"8.5\" font-style=\"italic\" fill=\"#0284c7\" text-anchor=\"middle\">Contoh: BeCl₂, CO₂</text>\n  </g>\n\n  <!-- CARD 2: TRIGONAL PLANAR (AX3) -->\n  <g transform=\"translate(180, 65)\">\n    <rect width=\"150\" height=\"200\" rx=\"12\" fill=\"#ffffff\" stroke=\"#cbd5e1\" stroke-width=\"1\"/>\n    <rect x=\"10\" y=\"10\" width=\"130\" height=\"22\" rx=\"6\" fill=\"#0ea5e9\"/>\n    <text x=\"75\" y=\"25\" font-size=\"10\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Trigonal Planar (AX₃)</text>\n    <g transform=\"translate(75, 95)\">\n      <!-- Ikatan 3 Arah -->\n      <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-45\" stroke=\"#94a3b8\" stroke-width=\"4.5\" stroke-linecap=\"round\"/>\n      <line x1=\"0\" y1=\"0\" x2=\"-40\" y2=\"28\" stroke=\"#94a3b8\" stroke-width=\"4.5\" stroke-linecap=\"round\"/>\n      <line x1=\"0\" y1=\"0\" x2=\"40\" y2=\"28\" stroke=\"#94a3b8\" stroke-width=\"4.5\" stroke-linecap=\"round\"/>\n      <!-- Bola Pusat -->\n      <circle cx=\"0\" cy=\"0\" r=\"16\" fill=\"url(#atomCenter)\"/>\n      <text x=\"0\" y=\"4\" font-size=\"9.5\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">B</text>\n      <!-- 3 Ligan -->\n      <circle cx=\"0\" cy=\"-45\" r=\"12\" fill=\"url(#atomLigand)\"/>\n      <circle cx=\"-40\" cy=\"28\" r=\"12\" fill=\"url(#atomLigand)\"/>\n      <circle cx=\"40\" cy=\"28\" r=\"12\" fill=\"url(#atomLigand)\"/>\n      <!-- Sudut -->\n      <text x=\"24\" y=\"-12\" font-size=\"9.5\" font-weight=\"bold\" fill=\"#0284c7\">120°</text>\n    </g>\n    <text x=\"75\" y=\"162\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\" text-anchor=\"middle\">Sudut: 120°</text>\n    <text x=\"75\" y=\"178\" font-size=\"9\" fill=\"#64748b\" text-anchor=\"middle\">0 PEB | Nonpolar</text>\n    <text x=\"75\" y=\"192\" font-size=\"8.5\" font-style=\"italic\" fill=\"#0284c7\" text-anchor=\"middle\">Contoh: BF₃, SO₃</text>\n  </g>\n\n  <!-- CARD 3: TETRAHEDRAL (AX4) -->\n  <g transform=\"translate(340, 65)\">\n    <rect width=\"155\" height=\"200\" rx=\"12\" fill=\"#ffffff\" stroke=\"#cbd5e1\" stroke-width=\"1\"/>\n    <rect x=\"10\" y=\"10\" width=\"135\" height=\"22\" rx=\"6\" fill=\"#10b981\"/>\n    <text x=\"77\" y=\"25\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Tetrahedral (AX₄)</text>\n    <g transform=\"translate(77, 95)\">\n      <!-- 4 Ikatan -->\n      <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-45\" stroke=\"#94a3b8\" stroke-width=\"4.5\" stroke-linecap=\"round\"/>\n      <line x1=\"0\" y1=\"0\" x2=\"-42\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"4.5\" stroke-linecap=\"round\"/>\n      <line x1=\"0\" y1=\"0\" x2=\"42\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"4.5\" stroke-linecap=\"round\"/>\n      <line x1=\"0\" y1=\"0\" x2=\"10\" y2=\"35\" stroke=\"#64748b\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-dasharray=\"3 2\"/>\n      <!-- Pusat -->\n      <circle cx=\"0\" cy=\"0\" r=\"16\" fill=\"url(#atomCenter)\"/>\n      <text x=\"0\" y=\"4\" font-size=\"9.5\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">C</text>\n      <!-- Ligands -->\n      <circle cx=\"0\" cy=\"-45\" r=\"11\" fill=\"url(#atomLigand)\"/>\n      <circle cx=\"-42\" cy=\"25\" r=\"11\" fill=\"url(#atomLigand)\"/>\n      <circle cx=\"42\" cy=\"25\" r=\"11\" fill=\"url(#atomLigand)\"/>\n      <circle cx=\"10\" cy=\"35\" r=\"9\" fill=\"url(#atomLigand)\"/>\n      <text x=\"24\" y=\"-10\" font-size=\"9.5\" font-weight=\"bold\" fill=\"#059669\">109.5°</text>\n    </g>\n    <text x=\"77\" y=\"162\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\" text-anchor=\"middle\">Sudut Ideal: 109.5°</text>\n    <text x=\"77\" y=\"178\" font-size=\"9\" fill=\"#64748b\" text-anchor=\"middle\">0 PEB | Nonpolar</text>\n    <text x=\"77\" y=\"192\" font-size=\"8.5\" font-style=\"italic\" fill=\"#059669\" text-anchor=\"middle\">Contoh: CH₄, CCl₄</text>\n  </g>\n\n  <!-- CARD 4: TRIGONAL PIRAMIDA (AX3E1) -->\n  <g transform=\"translate(505, 65)\">\n    <rect width=\"155\" height=\"200\" rx=\"12\" fill=\"#ffffff\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n    <rect x=\"10\" y=\"10\" width=\"135\" height=\"22\" rx=\"6\" fill=\"#f59e0b\"/>\n    <text x=\"77\" y=\"25\" font-size=\"10\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Trigonal Piramida (AX₃E)</text>\n    <g transform=\"translate(77, 100)\">\n      <!-- Balon Awan PEB di Atas -->\n      <ellipse cx=\"0\" cy=\"-26\" rx=\"14\" ry=\"20\" fill=\"url(#lonePair)\" opacity=\"0.85\"/>\n      <circle cx=\"-4\" cy=\"-28\" r=\"2.5\" fill=\"#78350f\"/>\n      <circle cx=\"4\" cy=\"-28\" r=\"2.5\" fill=\"#78350f\"/>\n      <text x=\"24\" y=\"-28\" font-size=\"8\" font-weight=\"bold\" fill=\"#b45309\">1 PEB</text>\n      <!-- Ikatan tertekan ke bawah -->\n      <line x1=\"0\" y1=\"0\" x2=\"-38\" y2=\"34\" stroke=\"#94a3b8\" stroke-width=\"4.5\" stroke-linecap=\"round\"/>\n      <line x1=\"0\" y1=\"0\" x2=\"38\" y2=\"34\" stroke=\"#94a3b8\" stroke-width=\"4.5\" stroke-linecap=\"round\"/>\n      <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"40\" stroke=\"#64748b\" stroke-width=\"3\" stroke-dasharray=\"2 2\"/>\n      <!-- Pusat N -->\n      <circle cx=\"0\" cy=\"0\" r=\"16\" fill=\"url(#atomCenter)\"/>\n      <text x=\"0\" y=\"4\" font-size=\"9.5\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">N</text>\n      <!-- Ligands H -->\n      <circle cx=\"-38\" cy=\"34\" r=\"10\" fill=\"url(#atomLigand)\"/>\n      <circle cx=\"38\" cy=\"34\" r=\"10\" fill=\"url(#atomLigand)\"/>\n      <circle cx=\"0\" cy=\"40\" r=\"8\" fill=\"url(#atomLigand)\"/>\n    </g>\n    <text x=\"77\" y=\"162\" font-size=\"10\" font-weight=\"bold\" fill=\"#b45309\" text-anchor=\"middle\">Sudut Menciut: 107.3°</text>\n    <text x=\"77\" y=\"178\" font-size=\"9\" font-weight=\"semibold\" fill=\"#dc2626\" text-anchor=\"middle\">1 PEB | Polar</text>\n    <text x=\"77\" y=\"192\" font-size=\"8.5\" font-style=\"italic\" fill=\"#b45309\" text-anchor=\"middle\">Contoh: NH₃, PCl₃</text>\n  </g>\n\n  <!-- CARD 5: BENGKOK / V-SHAPE (AX2E2) -->\n  <g transform=\"translate(670, 65)\">\n    <rect width=\"150\" height=\"200\" rx=\"12\" fill=\"#ffffff\" stroke=\"#ef4444\" stroke-width=\"1.5\"/>\n    <rect x=\"10\" y=\"10\" width=\"130\" height=\"22\" rx=\"6\" fill=\"#ef4444\"/>\n    <text x=\"75\" y=\"25\" font-size=\"10\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Bengkok / V (AX₂E₂)</text>\n    <g transform=\"translate(75, 100)\">\n      <!-- 2 Balon Awan PEB di Atas -->\n      <ellipse cx=\"-13\" cy=\"-24\" rx=\"12\" ry=\"18\" fill=\"url(#lonePair)\" opacity=\"0.85\" transform=\"rotate(-15, -13, -24)\"/>\n      <ellipse cx=\"13\" cy=\"-24\" rx=\"12\" ry=\"18\" fill=\"url(#lonePair)\" opacity=\"0.85\" transform=\"rotate(15, 13, -24)\"/>\n      <text x=\"0\" y=\"-38\" font-size=\"8\" font-weight=\"bold\" fill=\"#b45309\" text-anchor=\"middle\">2 PEB Kuat</text>\n      <!-- Ikatan tertekan sangat sempit -->\n      <line x1=\"0\" y1=\"0\" x2=\"-35\" y2=\"34\" stroke=\"#94a3b8\" stroke-width=\"4.5\" stroke-linecap=\"round\"/>\n      <line x1=\"0\" y1=\"0\" x2=\"35\" y2=\"34\" stroke=\"#94a3b8\" stroke-width=\"4.5\" stroke-linecap=\"round\"/>\n      <!-- Pusat O -->\n      <circle cx=\"0\" cy=\"0\" r=\"16\" fill=\"url(#atomCenter)\"/>\n      <text x=\"0\" y=\"4\" font-size=\"9.5\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">O</text>\n      <!-- Ligands H -->\n      <circle cx=\"-35\" cy=\"34\" r=\"10\" fill=\"url(#atomLigand)\"/>\n      <circle cx=\"35\" cy=\"34\" r=\"10\" fill=\"url(#atomLigand)\"/>\n    </g>\n    <text x=\"75\" y=\"162\" font-size=\"10\" font-weight=\"bold\" fill=\"#dc2626\" text-anchor=\"middle\">Sudut Tertekan: 104.5°</text>\n    <text x=\"75\" y=\"178\" font-size=\"9\" font-weight=\"semibold\" fill=\"#dc2626\" text-anchor=\"middle\">2 PEB | Sangat Polar</text>\n    <text x=\"75\" y=\"192\" font-size=\"8.5\" font-style=\"italic\" fill=\"#dc2626\" text-anchor=\"middle\">Contoh: H₂O, OF₂, SCl₂</text>\n  </g>\n\n  <!-- BANNER BAWAH: HIERARKI TOLAKAN GILLESPIE -->\n  <g transform=\"translate(20, 276)\">\n    <rect width=\"800\" height=\"38\" rx=\"8\" fill=\"#1e293b\"/>\n    <text x=\"400\" y=\"24\" font-size=\"11.5\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\">\n      Kaidah Tolakan Gillespie: Tolakan PEB-PEB &gt; Tolakan PEB-PEI &gt; Tolakan PEI-PEI\n    </text>\n  </g>\n</svg>\n\n---\n\n### 4. Tabel Lengkap Bentuk Geometri Berdasarkan Domain Elektron\n\n| Domain | Notasi | PEI ($n$) | PEB ($m$) | Geometri Molekul | Sudut Ikatan | Contoh Molekul | Kepolaran Umum |\n| :---: | :---: | :---: | :---: | :--- | :---: | :--- | :---: |\n| **2** | $AX_2$ | 2 | 0 | **Linear** | $180^\\circ$ | $\\ce{BeCl2}, \\ce{CO2}, \\ce{HCN}$ | Nonpolar |\n| **3** | $AX_3$ | 3 | 0 | **Trigonal Planar** | $120^\\circ$ | $\\ce{BF3}, \\ce{SO3}, \\ce{NO3-}$ | Nonpolar |\n| **3** | $AX_2 E_1$ | 2 | 1 | **Bengkok / Bent** | $< 120^\\circ$ ($119^\\circ$) | $\\ce{SO2}, \\ce{O3}, \\ce{NO2-}$ | **Polar** |\n| **4** | $AX_4$ | 4 | 0 | **Tetrahedral** | $109.5^\\circ$ | $\\ce{CH4}, \\ce{CCl4}, \\ce{SO4^2-}$ | Nonpolar |\n| **4** | $AX_3 E_1$ | 3 | 1 | **Trigonal Piramida** | $< 109.5^\\circ$ ($107.3^\\circ$) | $\\ce{NH3}, \\ce{PCl3}, \\ce{H3O+}$ | **Polar** |\n| **4** | $AX_2 E_2$ | 2 | 2 | **Bengkok / Bent (V)** | $\\ll 109.5^\\circ$ ($104.5^\\circ$) | $\\ce{H2O}, \\ce{H2S}, \\ce{OF2}$ | **Polar** |\n| **5** | $AX_5$ | 5 | 0 | **Trigonal Bipiramida** | $90^\\circ, 120^\\circ$ | $\\ce{PCl5}, \\ce{PF5}$ | Nonpolar |\n| **5** | $AX_4 E_1$ | 4 | 1 | **Jungkat-jungkit (Seesaw)** | $< 90^\\circ, < 120^\\circ$ | $\\ce{SF4}, \\ce{TeCl4}$ | **Polar** |\n| **5** | $AX_3 E_2$ | 3 | 2 | **Bentuk-T (T-Shaped)** | $< 90^\\circ$ ($87.5^\\circ$) | $\\ce{ClF3}, \\ce{BrF3}$ | **Polar** |\n| **5** | $AX_2 E_3$ | 2 | 3 | **Linear** | $180^\\circ$ | $\\ce{XeF2}, \\ce{I3-}$ | Nonpolar |\n| **6** | $AX_6$ | 6 | 0 | **Oktahedral** | $90^\\circ$ | $\\ce{SF6}, \\ce{PCl6-}$ | Nonpolar |\n| **6** | $AX_5 E_1$ | 5 | 1 | **Piramida Alas Persegi** | $< 90^\\circ$ ($84.8^\\circ$) | $\\ce{BrF5}, \\ce{IF5}$ | **Polar** |\n| **6** | $AX_4 E_2$ | 4 | 2 | **Persegi Planar** | $90^\\circ$ | $\\ce{XeF4}, \\ce{ICl4-}$ | Nonpolar |\n\n> [!TIP]\n> **Aturan Posisi PEB pada Domain 5 & 6:**\n> - Pada domain 5 (Trigonal Bipiramida), PEB **SELALU menempati posisi EKUATORIAL ($120^circ$)**, bukan posisi aksial ($90^circ$), karena posisi ekuatorial hanya mengalami tolakan $90^circ$ sebanyak 2 kali (sedangkan posisi aksial mengalami tolakan $90^circ$ sebanyak 3 kali).\n> - Pada domain 6 (Oktahedral), kedua PEB pada $AX_4 E_2$ **saling bertolak belakang di posisi aksial ($180^circ$)** untuk meminimalkan tolakan, menghasilkan bentuk **Persegi Planar yang simetris dan NONPOLAR** (seperti $\\ce{XeF4}$).\n> [!IMPORTANT]\n> ### 🚨 Hierarki Kekuatan Tolakan Domain Elektron & Posisi Ekuatorial PEB\n> Pasangan Elektron Bebas (PEB) hanya terikat pada satu inti atom, sehingga awan elektronnya lebih buncit, menyebar luas, dan memiliki daya tolak elektrostatik jauh lebih dahsyat daripada Pasangan Elektron Ikatan (PEI):\n> $$\\mathbf{\\text{Tolakan PEB-PEB} > \\text{Tolakan PEB-PEI} > \\text{Tolakan PEI-PEI}}$$\n> \n> **Dua Konsekuensi Fatal di Olimpiade:**\n> 1. **Penyempitan Sudut Ikatan:** Kehadiran PEB menekan pasangan ikatan lainnya merapat. Itulah sebabnya molekul tetrahedral sempurna $\\ce{CH4}$ bersudut $109.5^\\circ$, namun $\\ce{NH3}$ (1 PEB) menyempit menjadi $107^\\circ$, dan $\\ce{H2O}$ (2 PEB) tertekan hebat menjadi $104.5^\\circ$!\n> 2. **Aturan Emas Bipiramida Trigonal (5 Domain):** PEB **SELALU menempati posisi EKUATORIAL** (sudut $120^\\circ$) daripada posisi AKSIAL (sudut $90^\\circ$) untuk meminimalkan tolakan $90^\\circ$ yang paling destruktif. Ini menghasilkan bentuk *Seesaw* (1 PEB), *Bentuk-T* (2 PEB), dan *Linier* (3 PEB seperti pada $\\ce{I3-}$ dan $\\ce{XeF2}$).\n",
      "keyFormulas": [
        {
          "name": "Rumus Perhitungan PEB Atom Pusat",
          "formula": "E = \\frac{EV - \\sum (n_i \\cdot b_i)}{2}"
        },
        {
          "name": "Hierarki Tolakan Pasangan Elektron",
          "formula": "\\text{PEB-PEB} > \\text{PEB-PEI} > \\text{PEI-PEI}"
        }
      ]
    },
    {
      "tag": "kepolaran-senyawa-dan-momen-dipol",
      "tags": [
        "kepolaran-senyawa",
        "momen-dipol",
        "vektor-momen-dipol",
        "polar-nonpolar",
        "kelarutan-like-dissolves-like"
      ],
      "title": "Konsep Inti 4: Kepolaran Senyawa, Momen Dipol & Kriteria Simetri Molekul",
      "summary": "Penjumlahan vektor momen dipol ikatan, pengaruh simetri bentuk molekul, serta prinsip like dissolves like.",
      "content": "Kepolaran suatu molekul ditentukan oleh dua faktor serentak:\n1. **Adanya ikatan kovalen polar** di dalam molekul (perbedaan keelektronegatifan $\\Delta EN > 0$).\n2. **Bentuk geometri molekul yang asimetris**, sehingga resultan vektor momen dipol tidak saling meniadakan.\n\n---\n\n### 1. Definisi Fisik Momen Dipol Listrik ($\\vec{\\mu}$)\n\nMomen dipol listrik ($\\vec{\\mu}$) adalah besaran vektor yang merepresentasikan derajat pemisahan muatan positif dan negatif dalam suatu ikatan atau molekul:\n$$\\vec{\\mu} = q \\times \\vec{r}$$\n- $q$ = besar muatan parsial (Coulomb).\n- $r$ = jarak pemisahan muatan (meter).\n- Satuan standar kimia: **Debye (D)**, di mana $1\\text{ D} = 3.336 \\times 10^{-30}\\text{ C}\\cdot\\text{m}$.\n- Arah vektor dipol digambarkan dengan panah bertanda plus di pangkalnya: $\\mapsto$ (berpangkal pada kutub parsial positif $\\delta^+$ dan mengarah ke kutub parsial negatif $\\delta^-$).\n\n---\n\n### 2. Kriteria Molekul Polar vs Nonpolar\n\nResultan momen dipol total molekul merupakan penjumlahan vektor seluruh momen dipol ikatannya:\n$$\\vec{\\mu}_{\\text{total}} = \\sum \\vec{\\mu}_{\\text{ikatan}}$$\n\n1. **Molekul Nonpolar ($\\vec{\\mu}_{\\text{total}} = 0$):**\n   - Terjadi apabila molekul tidak memiliki ikatan polar (misal $\\ce{O2}, \\ce{N2}$), **ATAU** molekul memiliki ikatan polar tetapi **bentuk geometrinya sangat simetris** sehingga vektor-vektor momen dipol ikatan saling meniadakan secara sempurna.\n   - *Contoh Klasik:*\n     - Karbon Dioksida ($\\ce{CO2}$): Ikatan $\\ce{C=O}$ sangat polar, tetapi karena bergeometri **Linear ($AX_2$, $180^\\circ$)**, dua vektor dipol yang berlawanan arah saling meniadakan: $\\vec{\\mu} = 0$.\n     - Karbon Tetraklorida ($\\ce{CCl4}$): Memiliki 4 ikatan polar $\\ce{C-Cl}$, tetapi tersusun dalam geometri **Tetrahedral ($AX_4$)** yang simetris sempurna ke 4 penjuru ruang, resultan $\\vec{\\mu} = 0$.\n     - Belerang Heksafluorida ($\\ce{SF6}$): Geometri **Oktahedral ($AX_6$)**, resultan $\\vec{\\mu} = 0$.\n2. **Molekul Polar ($\\vec{\\mu}_{\\text{total}} \\neq 0$):**\n   - Memiliki ikatan polar dan **bentuk geometrinya asimetris** (umumnya memiliki Pasangan Elektron Bebas / PEB pada atom pusat, atau atom-atom ligan yang terikat tidak sejenis).\n   - *Contoh Klasik:*\n     - Air ($\\ce{H2O}$): Memiliki 2 ikatan polar $\\ce{O-H}$ dan 2 PEB pada atom $\\ce{O}$ dengan geometri **Bengkok ($104.5^\\circ$)**. Kedua vektor dipol tidak berlawanan $180^\\circ$, melainkan mengarah ke atas menuju atom $\\ce{O}$, menghasilkan resultan $\\mu = 1.85\\text{ D}$ (Sangat Polar).\n     - Amonia ($\\ce{NH3}$): Geometri **Trigonal Piramida ($AX_3 E_1$)**, ketiga ikatan $\\ce{N-H}$ dan PEB di puncak menghasilkan momen dipol neto $\\mu = 1.47\\text{ D}$.\n     - Klorometana ($\\ce{CH3Cl}$): Bentuk tetrahedral namun asimetris karena 1 atom $\\ce{Cl}$ jauh lebih elektronegatif daripada 3 atom $\\ce{H}$, $\\mu = 1.87\\text{ D}$.\n\n---\n\n### 3. Konsekuensi Fisis Kepolaran Molekul\n\n- **Kelarutan (*Like Dissolves Like*):** Senyawa polar (dan ionik) mudah larut dalam pelarut polar (seperti air, etanol) karena terbentuk interaksi ion-dipol atau dipol-dipol yang stabil. Sebaliknya, senyawa nonpolar (seperti minyak, lemak, hidrokarbon, $\\ce{CCl4}$) hanya larut dalam pelarut nonpolar (benzena, heksana).\n- **Pengaruh Medan Listrik Eksternal:** Aliran cairan polar (seperti aliran air kran) akan dibelokkan ke arah penggaris mika yang telah digosok bermuatan listrik statis, sedangkan cairan nonpolar (seperti $\\ce{CCl4}$) mengalir lurus tanpa terpengaruh.",
      "keyFormulas": [
        {
          "name": "Definisi Momen Dipol",
          "formula": "\\vec{\\mu} = q \\cdot \\vec{r}"
        },
        {
          "name": "Syarat Molekul Nonpolar",
          "formula": "\\sum \\vec{\\mu}_i = \\mathbf{0} \\quad (\\mu_{\\text{total}} = 0)"
        }
      ]
    },
    {
      "tag": "ikatan-logam-dan-sifat-khas",
      "tags": [
        "ikatan-logam",
        "model-lautan-elektron",
        "drude-lorentz",
        "konduktivitas-termal-listrik",
        "malleable-ductile",
        "deformasi-kristal"
      ],
      "title": "Konsep Inti 5: Ikatan Logam, Model Lautan Elektron & Penjelasan Ilmiah Sifat Fisik Logam",
      "summary": "Teori awan elektron terdelokalisasi Drude-Lorentz, konduktivitas listrik/panas, kilap logam, serta perbandingan deformasi logam vs kerapuhan ionik.",
      "content": "Lebih dari $75\\%$ unsur dalam tabel periodik adalah logam. Logam memiliki sifat-sifat unik yang tidak dijumpai pada senyawa ionik maupun kovalen, seperti kemampuan menghantarkan arus listrik dalam wujud padat, dapat ditempa menjadi lempengan tipis, dan ditarik menjadi kawat halus.\n\n### 1. Teori Lautan Elektron (*Electron-Sea Model* Drude & Lorentz)\n\nLogam memiliki energi ionisasi yang rendah dan orbital valensi yang relatif kosong. Akibatnya, atom-atom logam melepaskan elektron valensinya:\n- Kation-kation logam bermuatan positif ($\\ce{M^{n+}}$) tersusun secara teratur dan rapat dalam kisi kristal (misalnya kubus berpusat badan/BCC, kubus berpusat muka/FCC, atau heksagonal terjejal/HCP).\n- Elektron-elektron valensi tidak terikat pada satu kation tertentu, melainkan **terdelokalisasi bebas mengalir membentuk \"lautan elektron\"** yang menyelimuti seluruh kation logam.\n- **Ikatan Logam:** Gaya tarik elektrostatik antara kation-kation logam positif dengan lautan elektron valensi yang terdelokalisasi bebas tersebut.\n\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 780 290\" width=\"100%\" height=\"auto\" class=\"max-w-[780px] select-none font-sans\">\n  <defs>\n    <linearGradient id=\"metalGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f0fdf4\"/>\n      <stop offset=\"100%\" stop-color=\"#dcfce7\"/>\n    </linearGradient>\n    <linearGradient id=\"ionicGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#fef2f2\"/>\n      <stop offset=\"100%\" stop-color=\"#fee2e2\"/>\n    </linearGradient>\n    <marker id=\"hammerArrow\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 9 5 L 0 9 z\" fill=\"#dc2626\"/>\n    </marker>\n  </defs>\n\n  <!-- PANEL KIRI: LOGAM ULET & DAPAT DITEMPA -->\n  <g transform=\"translate(10, 10)\">\n    <rect width=\"365\" height=\"270\" rx=\"14\" fill=\"url(#metalGrad)\" stroke=\"#86efac\" stroke-width=\"1.5\"/>\n    <rect x=\"14\" y=\"12\" width=\"165\" height=\"22\" rx=\"6\" fill=\"#16a34a\"/>\n    <text x=\"96\" y=\"27\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">LOGAM: ULET & DAPAT DITEMPA</text>\n    <text x=\"182\" y=\"48\" font-size=\"11\" font-weight=\"bold\" fill=\"#14532d\" text-anchor=\"middle\">Lautan Elektron Menyelimuti Pergeseran Kation</text>\n\n    <!-- Kation Grid Logam -->\n    <g transform=\"translate(30, 65)\">\n      <!-- Lautan Elektron (Awan hijau muda) -->\n      <rect width=\"305\" height=\"120\" rx=\"10\" fill=\"#bbf7d0\" opacity=\"0.6\"/>\n\n      <!-- Titik-titik elektron bebas melayang -->\n      <circle cx=\"25\" cy=\"20\" r=\"2.5\" fill=\"#047857\"/><circle cx=\"85\" cy=\"15\" r=\"2.5\" fill=\"#047857\"/>\n      <circle cx=\"145\" cy=\"22\" r=\"2.5\" fill=\"#047857\"/><circle cx=\"205\" cy=\"18\" r=\"2.5\" fill=\"#047857\"/>\n      <circle cx=\"265\" cy=\"20\" r=\"2.5\" fill=\"#047857\"/><circle cx=\"55\" cy=\"60\" r=\"2.5\" fill=\"#047857\"/>\n      <circle cx=\"115\" cy=\"62\" r=\"2.5\" fill=\"#047857\"/><circle cx=\"175\" cy=\"58\" r=\"2.5\" fill=\"#047857\"/>\n      <circle cx=\"235\" cy=\"60\" r=\"2.5\" fill=\"#047857\"/><circle cx=\"290\" cy=\"55\" r=\"2.5\" fill=\"#047857\"/>\n      <circle cx=\"25\" cy=\"100\" r=\"2.5\" fill=\"#047857\"/><circle cx=\"85\" cy=\"102\" r=\"2.5\" fill=\"#047857\"/>\n      <circle cx=\"145\" cy=\"98\" r=\"2.5\" fill=\"#047857\"/><circle cx=\"205\" cy=\"104\" r=\"2.5\" fill=\"#047857\"/>\n\n      <!-- Baris Atas Kation (Bergeser ke kanan akibat pukulan) -->\n      <g transform=\"translate(30, 0)\">\n        <circle cx=\"35\" cy=\"25\" r=\"14\" fill=\"#15803d\"/><text x=\"35\" y=\"29\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">+</text>\n        <circle cx=\"95\" cy=\"25\" r=\"14\" fill=\"#15803d\"/><text x=\"95\" y=\"29\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">+</text>\n        <circle cx=\"155\" cy=\"25\" r=\"14\" fill=\"#15803d\"/><text x=\"155\" y=\"29\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">+</text>\n        <circle cx=\"215\" cy=\"25\" r=\"14\" fill=\"#15803d\"/><text x=\"215\" y=\"29\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">+</text>\n      </g>\n      <!-- Panah Gaya Geser Palu -->\n      <path d=\"M 5 25 L 45 25\" stroke=\"#dc2626\" stroke-width=\"3\" marker-end=\"url(#hammerArrow)\"/>\n      <text x=\"25\" y=\"12\" font-size=\"9\" font-weight=\"bold\" fill=\"#dc2626\" text-anchor=\"middle\">Palu</text>\n\n      <!-- Baris Bawah Kation (Tetap) -->\n      <g transform=\"translate(0, 0)\">\n        <circle cx=\"35\" cy=\"85\" r=\"14\" fill=\"#15803d\"/><text x=\"35\" y=\"89\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">+</text>\n        <circle cx=\"95\" cy=\"85\" r=\"14\" fill=\"#15803d\"/><text x=\"95\" y=\"89\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">+</text>\n        <circle cx=\"155\" cy=\"85\" r=\"14\" fill=\"#15803d\"/><text x=\"155\" y=\"89\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">+</text>\n        <circle cx=\"215\" cy=\"85\" r=\"14\" fill=\"#15803d\"/><text x=\"215\" y=\"89\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">+</text>\n        <circle cx=\"275\" cy=\"85\" r=\"14\" fill=\"#15803d\"/><text x=\"275\" y=\"89\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">+</text>\n      </g>\n    </g>\n\n    <rect x=\"20\" y=\"200\" width=\"325\" height=\"55\" rx=\"8\" fill=\"#ffffff\" stroke=\"#86efac\" stroke-width=\"1\"/>\n    <text x=\"182\" y=\"220\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">Ikatan Tidak Pernah Putus!</text>\n    <text x=\"182\" y=\"238\" font-size=\"9.5\" fill=\"#475569\" text-anchor=\"middle\">Lautan elektron fleksibel menyesuaikan bentuk (Malleable)</text>\n  </g>\n\n  <!-- PANEL KANAN: KRISTAL IONIK RAPUH / GETAS -->\n  <g transform=\"translate(395, 10)\">\n    <rect width=\"375\" height=\"270\" rx=\"14\" fill=\"url(#ionicGrad)\" stroke=\"#fca5a5\" stroke-width=\"1.5\"/>\n    <rect x=\"14\" y=\"12\" width=\"165\" height=\"22\" rx=\"6\" fill=\"#dc2626\"/>\n    <text x=\"96\" y=\"27\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">SENYAWA ION: RAPUH / GETAS</text>\n    <text x=\"187\" y=\"48\" font-size=\"11\" font-weight=\"bold\" fill=\"#991b1b\" text-anchor=\"middle\">Muatan Sejenis Berhadapan → Tolakan Kuat</text>\n\n    <!-- Grid Ion -->\n    <g transform=\"translate(35, 65)\">\n      <!-- Baris Atas Tergeser 1 Langkah -->\n      <g transform=\"translate(30, 0)\">\n        <circle cx=\"35\" cy=\"25\" r=\"13\" fill=\"#2563eb\"/><text x=\"35\" y=\"29\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">+</text>\n        <circle cx=\"85\" cy=\"25\" r=\"15\" fill=\"#16a34a\"/><text x=\"85\" y=\"29\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">−</text>\n        <circle cx=\"135\" cy=\"25\" r=\"13\" fill=\"#2563eb\"/><text x=\"135\" y=\"29\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">+</text>\n        <circle cx=\"185\" cy=\"25\" r=\"15\" fill=\"#16a34a\"/><text x=\"185\" y=\"29\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">−</text>\n      </g>\n      <!-- Panah Pukul Palu -->\n      <path d=\"M 5 25 L 45 25\" stroke=\"#dc2626\" stroke-width=\"3\" marker-end=\"url(#hammerArrow)\"/>\n\n      <!-- Baris Bawah -->\n      <circle cx=\"15\" cy=\"85\" r=\"15\" fill=\"#16a34a\"/><text x=\"15\" y=\"89\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">−</text>\n      <circle cx=\"65\" cy=\"85\" r=\"13\" fill=\"#2563eb\"/><text x=\"65\" y=\"89\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">+</text>\n      <circle cx=\"115\" cy=\"85\" r=\"15\" fill=\"#16a34a\"/><text x=\"115\" y=\"89\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">−</text>\n      <circle cx=\"165\" cy=\"85\" r=\"13\" fill=\"#2563eb\"/><text x=\"165\" y=\"89\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">+</text>\n      <circle cx=\"215\" cy=\"85\" r=\"15\" fill=\"#16a34a\"/><text x=\"215\" y=\"89\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">−</text>\n\n      <!-- Garis Retak Merah / Repulsion -->\n      <path d=\"M 50 55 L 75 52 L 105 58 L 140 50 L 175 56 L 210 52\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"3 3\"/>\n      <!-- Panah Tolak Antara + dan + -->\n      <line x1=\"65\" y1=\"42\" x2=\"65\" y2=\"68\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n      <text x=\"65\" y=\"58\" font-size=\"10\" font-weight=\"bold\" fill=\"#dc2626\">⚡</text>\n      <line x1=\"115\" y1=\"42\" x2=\"115\" y2=\"68\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n      <text x=\"115\" y=\"58\" font-size=\"10\" font-weight=\"bold\" fill=\"#dc2626\">⚡</text>\n      <line x1=\"165\" y1=\"42\" x2=\"165\" y2=\"68\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n      <text x=\"165\" y=\"58\" font-size=\"10\" font-weight=\"bold\" fill=\"#dc2626\">⚡</text>\n    </g>\n\n    <rect x=\"20\" y=\"200\" width=\"335\" height=\"55\" rx=\"8\" fill=\"#ffffff\" stroke=\"#fca5a5\" stroke-width=\"1\"/>\n    <text x=\"187\" y=\"220\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#991b1b\" text-anchor=\"middle\">Gaya Tolak Elektrostatik Raksasa!</text>\n    <text x=\"187\" y=\"238\" font-size=\"9.5\" fill=\"#475569\" text-anchor=\"middle\">Ion (+ +) dan (− −) berhadapan → Kristal Retak & Pecah</text>\n  </g>\n</svg>\n\n---\n\n### 2. Penjelasan Ilmiah 4 Sifat Fisik Karakteristik Logam\n\n1. **Dapat Ditempa (*Malleable*) dan Ditarik (*Ductile*):**\n   Ketika logam dipukul dengan palu atau ditarik melalui cetakan kawat, lapisan-lapisan kation bergeser melewati satu sama lain. Namun karena lautan elektron bebas bergerak mengikuti pergeseran tersebut secara instan, lingkungan elektrostatik kation tidak berubah. Tidak ada muatan sejenis yang saling tolak. Logam hanya mengalami deformasi plastis tanpa patah.\n2. **Konduktivitas Listrik Sangat Tinggi:**\n   Ketika beda potensial (tegangan listrik) diberikan pada kedua ujung logam, elektron-elektron valensi yang terdelokalisasi bebas segera mengalir secara terarah menuju kutub positif, menghasilkan arus listrik yang besar.\n3. **Konduktivitas Termal (Penghantar Panas):**\n   Pemanasan pada salah satu ujung logam meningkatkan energi kinetik elektron bebas di area tersebut. Elektron yang bergerak cepat ini bertumbukan dengan elektron lain dan kation-kation kisi, mentransfer energi termal ke seluruh badan logam dengan sangat cepat.\n4. **Kilap Logam (*Metallic Luster*):**\n   Lautan elektron bebas pada permukaan logam mampu menyerap seluruh spektrum foton cahaya tampak dan memancarkannya kembali (*re-emission*) secara instan, sehingga permukaan logam tampak mengilap seperti cermin.",
      "keyFormulas": [
        {
          "name": "Model Densitas Arus Konduktivitas Logam",
          "formula": "J = \\sigma E = n e v_d"
        }
      ]
    },
    {
      "tag": "gaya-antarmolekul-dan-ikatan-hidrogen",
      "tags": [
        "gaya-antarmolekul",
        "van-der-waals",
        "gaya-london",
        "dipol-dipol",
        "ikatan-hidrogen",
        "anomali-air",
        "titik-didih-hidrida"
      ],
      "title": "Konsep Inti 6: Gaya Antarmolekul (Van der Waals & Ikatan Hidrogen) serta Anomali Sifat Fisik Air",
      "summary": "Perbedaan gaya intramolekul vs intermolekul, mekanisme dispersi London, interaksi dipol-dipol, serta peran ikatan hidrogen dalam menentukan titik didih cairan.",
      "content": "### 🧲 Lem Super Intramolekul vs Magnet Kulkas Antarmolekul (Mental Model)\n\nBanyak siswa pemula bingung membedakan antara **ikatan kimia intramolekul** dengan **gaya antarmolekul**:\n- **Ikatan Intramolekul (Lem Super Kuat):** Ikatan kovalen yang merekatkan atom H dan atom O *di dalam* satu molekul air tunggal ($\\ce{H-O-H}$). Energi pemutusannya sangat masif, sekitar $\\sim 460\\text{ kJ/mol}$!\n- **Gaya Antarmolekul (Magnet Kulkas Lemah):** Gaya tarik elektrostatis yang bekerja *antar molekul-molekul air yang bertetangga* (ikatan hidrogen $\\sim 20\\text{ kJ/mol}$ atau gaya London $\\sim 2-10\\text{ kJ/mol}$).\n\nKetika Anda merebus air hingga mendidih pada suhu $100^\\circ\\text{C}$, energi kalor yang diberikan HANYA cukup untuk melepaskan \"magnet kulkas\" antarmolekul air sehingga cairan berubah menjadi uap uap air ($\\ce{H2O(l) -> H2O(g)}$). Molekul air **TIDAK PERNAH terurai menjadi gas hidrogen ($\\ce{H2}$) dan oksigen ($\\ce{O2}$)**, karena lem super ikatan kovalennya membutuhkan suhu ribuan derajat untuk putus!\n\n---\n\nPerbedaan fundamental antara ikatan kimia dan gaya antarmolekul:\n- **Ikatan Kimia Intramolekul (Kovalen, Ion, Logam):** Mengikat atom-atom **di dalam** suatu molekul (energi ikatan: $150 - 1000\\text{ kJ/mol}$). Menentukan sifat kimia senyawa.\n- **Gaya Antarmolekul Intermolekul (Van der Waals, Ikatan Hidrogen):** Gaya tarik-menarik **antar molekul yang bertetangga** (energi ikatan: $1 - 40\\text{ kJ/mol}$). Mengendalikan sifat fisis seperti wujud zat (padat/cair/gas), titik leleh, titik didih, viskositas, dan kalor penguapan.\n\n---\n\n### 1. Spektrum Gaya Van der Waals\n\nGaya Van der Waals mencakup semua gaya tarik elektrostatik antarmolekul netral:\n1. **Gaya Dispersi London (Dipol Sesaat - Dipol Terimbas / *London Dispersion Forces*):**\n   - Bekerja pada **SEMUA molekul** (baik nonpolar maupun polar).\n   - Terjadi karena gerakan acak elektron yang sewaktu-waktu dapat terdistribusi secara tidak merata, menciptakan **dipol sesaat (*instantaneous dipole*)**. Dipol sesaat ini kemudian menginduksi awan elektron molekul tetangga membentuk **dipol terimbas (*induced dipole*)**, menghasilkan gaya tarik lemah sesaat.\n   - **Faktor yang Memperkuat Gaya London:**\n     - **Massa Molekul Relatif ($M_r$) & Ukuran Atom:** Makin besar atom, jumlah elektron makin banyak, awan elektron makin longgar dan **mudah terpolarisasi (*polarizability* tinggi)**.  \n       Contoh titik didih gas mulia naik seiring kenaikan $M_r$: $\\ce{He} (-269^\\circ\\text{C}) < \\ce{Ne} < \\ce{Ar} < \\ce{Kr} < \\ce{Xe} (-108^\\circ\\text{C})$.  \n       Halogen: $\\ce{F2}\\text{ (gas)} < \\ce{Cl2}\\text{ (gas)} < \\ce{Br2}\\text{ (cair)} < \\ce{I2}\\text{ (padat)}$.\n     - **Bentuk Molekul & Luas Permukaan Kontak:** Molekul rantai lurus memiliki luas kontak antarmolekul lebih besar daripada molekul bercabang bulat sferis.  \n       Contoh: n-pentana (titik didih $36.1^\\circ\\text{C}$) vs neopentana (titik didih $9.5^\\circ\\text{C}$), padahal $M_r$ keduanya sama ($72\\text{ g/mol}$).\n2. **Interaksi Dipol-Dipol (Gaya Keesom):**\n   - Terjadi khusus antar **molekul-molekul kovalen polar** permanen ($\\mu > 0$).\n   - Kutub positif parsial ($\\delta^+$) suatu molekul tertarik ke kutub negatif parsial ($\\delta^-$) molekul di sebelahnya.\n   - Lebih kuat daripada gaya London pada molekul dengan massa setara.  \n     Contoh: Propana (nonpolar, $M_r = 44$, titik didih $-42^\\circ\\text{C}$) vs Asetaldehida (polar, $M_r = 44$, titik didih $+20^\\circ\\text{C}$).\n\n---\n\n### 2. Ikatan Hidrogen (*Hydrogen Bonding*)\n\nIkatan hidrogen adalah gaya tarik antarmolekul istimewa yang **jauh lebih kuat ($10 - 40\\text{ kJ/mol}$)** daripada gaya Van der Waals biasa:\n- **Syarat Mutlak Terbentuknya Ikatan Hidrogen:**\n  1. Atom Hidrogen wajib terikat kovalen langsung pada atom yang **sangat elektronegatif dengan ukuran jari-jari sangat kecil: $\\mathbf{\\ce{F}}$, $\\mathbf{\\ce{O}}$, atau $\\mathbf{\\ce{N}}$**.\n  2. Molekul tetangga memiliki atom $\\ce{F}, \\ce{O},$ atau $\\ce{N}$ yang memiliki **Pasangan Elektron Bebas (PEB)**.\n- Akibat elektronegativitas $\\ce{F, O, N}$ yang sangat tinggi dan ukuran atom $\\ce{H}$ yang mungil tanpa elektron kulit dalam, ikatan menjadi terpolarisasi sangat ekstrem. Atom $\\ce{H}$ nyaris berupa \"proton telanjang\" dengan kerapatan muatan positif $\\delta^+$ yang luar biasa pekat, menarik PEB molekul tetangga dengan sangat kuat.\n\n---\n\n### 3. Grafik Anomali Titik Didih Hidrida & Jaringan Ikatan Hidrogen Air\n\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 820 330\" width=\"100%\" height=\"auto\" class=\"max-w-[820px] select-none font-sans\">\n  <defs>\n    <linearGradient id=\"plotBg\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#ffffff\"/>\n      <stop offset=\"100%\" stop-color=\"#f8fafc\"/>\n    </linearGradient>\n  </defs>\n\n  <!-- PANEL KIRI: GRAFIK TITIK DIDIH -->\n  <g transform=\"translate(10, 10)\">\n    <rect width=\"450\" height=\"310\" rx=\"14\" fill=\"url(#plotBg)\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\n    <text x=\"225\" y=\"24\" font-size=\"12\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">KURVA ANOMALI TITIK DIDIH HIDRIDA GOLONGAN 14-17</text>\n\n    <!-- Sumbu Koordinat -->\n    <!-- Y: -150 to +100 C. Height = 220px. Scale: 1 C = 0.88px.\n         Y=100 C -> y=50\n         Y=0 C   -> y=138\n         Y=-50 C -> y=182\n         Y=-100 C-> y=226\n         Y=-150 C-> y=270\n         X: Periode 2 (x=80), Periode 3 (x=180), Periode 4 (x=280), Periode 5 (x=380)\n    -->\n    <line x1=\"55\" y1=\"50\" x2=\"55\" y2=\"270\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <line x1=\"55\" y1=\"270\" x2=\"425\" y2=\"270\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n\n    <!-- Grid Garis Horisontal -->\n    <line x1=\"55\" y1=\"50\" x2=\"425\" y2=\"50\" stroke=\"#f1f5f9\" stroke-width=\"1\"/>\n    <text x=\"48\" y=\"54\" font-size=\"9\" fill=\"#64748b\" text-anchor=\"end\">100°C</text>\n\n    <line x1=\"55\" y1=\"138\" x2=\"425\" y2=\"138\" stroke=\"#e2e8f0\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/>\n    <text x=\"48\" y=\"142\" font-size=\"9\" font-weight=\"bold\" fill=\"#0284c7\" text-anchor=\"end\">0°C</text>\n\n    <line x1=\"55\" y1=\"182\" x2=\"425\" y2=\"182\" stroke=\"#f1f5f9\" stroke-width=\"1\"/>\n    <text x=\"48\" y=\"186\" font-size=\"9\" fill=\"#64748b\" text-anchor=\"end\">-50°C</text>\n\n    <line x1=\"55\" y1=\"226\" x2=\"425\" y2=\"226\" stroke=\"#f1f5f9\" stroke-width=\"1\"/>\n    <text x=\"48\" y=\"230\" font-size=\"9\" fill=\"#64748b\" text-anchor=\"end\">-100°C</text>\n\n    <!-- Label X: Periode -->\n    <text x=\"80\" y=\"286\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\" text-anchor=\"middle\">Periode 2</text>\n    <text x=\"180\" y=\"286\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\" text-anchor=\"middle\">Periode 3</text>\n    <text x=\"280\" y=\"286\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\" text-anchor=\"middle\">Periode 4</text>\n    <text x=\"380\" y=\"286\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\" text-anchor=\"middle\">Periode 5</text>\n\n    <!-- KURVA GOLONGAN 14 (CH4 -> SiH4 -> GeH4 -> SnH4): Nonpolar Murni -->\n    <!-- CH4 (-161 C -> y=280), SiH4 (-112 C -> y=236), GeH4 (-88 C -> y=215), SnH4 (-52 C -> y=184) -->\n    <path d=\"M 80 280 L 180 236 L 280 215 L 380 184\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"2.5\"/>\n    <circle cx=\"80\" cy=\"280\" r=\"4\" fill=\"#64748b\"/><text x=\"80\" y=\"295\" font-size=\"8.5\" fill=\"#475569\" text-anchor=\"middle\">CH₄</text>\n    <circle cx=\"180\" cy=\"236\" r=\"4\" fill=\"#64748b\"/><text x=\"180\" y=\"248\" font-size=\"8.5\" fill=\"#475569\" text-anchor=\"middle\">SiH₄</text>\n    <circle cx=\"280\" cy=\"215\" r=\"4\" fill=\"#64748b\"/><text x=\"280\" y=\"227\" font-size=\"8.5\" fill=\"#475569\" text-anchor=\"middle\">GeH₄</text>\n    <circle cx=\"380\" cy=\"184\" r=\"4\" fill=\"#64748b\"/><text x=\"380\" y=\"196\" font-size=\"8.5\" fill=\"#475569\" text-anchor=\"middle\">SnH₄</text>\n\n    <!-- KURVA GOLONGAN 16 (H2O -> H2S -> H2Se -> H2Te) -->\n    <!-- H2O (+100 C -> y=50), H2S (-60 C -> y=191), H2Se (-41 C -> y=174), H2Te (-2 C -> y=140) -->\n    <path d=\"M 80 50 L 180 191 L 280 174 L 380 140\" fill=\"none\" stroke=\"#0284c7\" stroke-width=\"3\"/>\n    <circle cx=\"80\" cy=\"50\" r=\"5.5\" fill=\"#0284c7\"/><text x=\"80\" y=\"42\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#0284c7\" text-anchor=\"middle\">H₂O (+100°C)</text>\n    <circle cx=\"180\" cy=\"191\" r=\"4\" fill=\"#0284c7\"/><text x=\"195\" y=\"198\" font-size=\"8.5\" fill=\"#0284c7\">H₂S</text>\n    <circle cx=\"280\" cy=\"174\" r=\"4\" fill=\"#0284c7\"/><text x=\"295\" y=\"180\" font-size=\"8.5\" fill=\"#0284c7\">H₂Se</text>\n    <circle cx=\"380\" cy=\"140\" r=\"4\" fill=\"#0284c7\"/><text x=\"395\" y=\"145\" font-size=\"8.5\" fill=\"#0284c7\">H₂Te</text>\n\n    <!-- KURVA GOLONGAN 17 (HF -> HCl -> HBr -> HI) -->\n    <!-- HF (+19.5 C -> y=121), HCl (-85 C -> y=213), HBr (-66 C -> y=196), HI (-35 C -> y=169) -->\n    <path d=\"M 80 121 L 180 213 L 280 196 L 380 169\" fill=\"none\" stroke=\"#9333ea\" stroke-width=\"2.5\" stroke-dasharray=\"4 2\"/>\n    <circle cx=\"80\" cy=\"121\" r=\"4.5\" fill=\"#9333ea\"/><text x=\"96\" y=\"118\" font-size=\"9.5\" font-weight=\"bold\" fill=\"#9333ea\">HF (+20°C)</text>\n    <circle cx=\"180\" cy=\"213\" r=\"3.5\" fill=\"#9333ea\"/><text x=\"180\" y=\"223\" font-size=\"8\" fill=\"#9333ea\" text-anchor=\"middle\">HCl</text>\n\n    <!-- KURVA GOLONGAN 15 (NH3 -> PH3 -> AsH3 -> SbH3) -->\n    <!-- NH3 (-33 C -> y=167), PH3 (-88 C -> y=215), AsH3 (-62 C -> y=193), SbH3 (-17 C -> y=153) -->\n    <path d=\"M 80 167 L 180 215 L 280 193 L 380 153\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"2.5\" stroke-dasharray=\"2 2\"/>\n    <circle cx=\"80\" cy=\"167\" r=\"4.5\" fill=\"#16a34a\"/><text x=\"65\" y=\"165\" font-size=\"9\" font-weight=\"bold\" fill=\"#16a34a\" text-anchor=\"end\">NH₃ (-33°C)</text>\n\n    <!-- Label Panah Lonjakan Anomali -->\n    <path d=\"M 120 180 C 105 130, 95 80, 85 62\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"1.8\" stroke-dasharray=\"3 2\"/>\n    <text x=\"135\" y=\"115\" font-size=\"9\" font-weight=\"bold\" fill=\"#e11d48\">Lonjakan Ekstrem H-Bond!</text>\n  </g>\n\n  <!-- PANEL KANAN: MOLEKUL AIR & JEMBATAN IKATAN HIDROGEN -->\n  <g transform=\"translate(470, 10)\">\n    <rect width=\"340\" height=\"310\" rx=\"14\" fill=\"#ffffff\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\n    <text x=\"170\" y=\"24\" font-size=\"12\" font-weight=\"bold\" fill=\"#0369a1\" text-anchor=\"middle\">JARINGAN IKATAN HIDROGEN AIR (H₂O)</text>\n\n    <!-- Struktur 2 Molekul H2O Berikatan -->\n    <g transform=\"translate(170, 140)\">\n      <!-- Molekul Air 1 (Atas) -->\n      <g transform=\"translate(0, -50)\">\n        <circle cx=\"0\" cy=\"0\" r=\"22\" fill=\"#0284c7\"/>\n        <text x=\"0\" y=\"5\" font-size=\"12\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">O</text>\n        <text x=\"0\" y=\"-26\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369a1\" text-anchor=\"middle\">δ⁻</text>\n        <!-- Ikatan O-H -->\n        <line x1=\"-15\" y1=\"15\" x2=\"-35\" y2=\"35\" stroke=\"#0284c7\" stroke-width=\"4.5\"/>\n        <circle cx=\"-35\" cy=\"35\" r=\"11\" fill=\"#38bdf8\"/>\n        <text x=\"-35\" y=\"39\" font-size=\"9\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">H</text>\n\n        <line x1=\"15\" y1=\"15\" x2=\"35\" y2=\"35\" stroke=\"#0284c7\" stroke-width=\"4.5\"/>\n        <circle cx=\"35\" cy=\"35\" r=\"11\" fill=\"#38bdf8\"/>\n        <text x=\"35\" y=\"39\" font-size=\"9\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">H</text>\n        <text x=\"48\" y=\"44\" font-size=\"10\" font-weight=\"bold\" fill=\"#0284c7\">δ⁺</text>\n      </g>\n\n      <!-- JEMBATAN IKATAN HIDROGEN (Garis Titik-Titik Biru Tebal) -->\n      <line x1=\"35\" y1=\"-15\" x2=\"35\" y2=\"40\" stroke=\"#e11d48\" stroke-width=\"3\" stroke-dasharray=\"4 3\"/>\n      <text x=\"48\" y=\"15\" font-size=\"10\" font-weight=\"bold\" fill=\"#e11d48\">Ikatan Hidrogen</text>\n      <text x=\"48\" y=\"28\" font-size=\"8.5\" fill=\"#e11d48\">~23.3 kJ/mol</text>\n\n      <!-- Molekul Air 2 (Bawah) -->\n      <g transform=\"translate(35, 60)\">\n        <circle cx=\"0\" cy=\"0\" r=\"22\" fill=\"#0284c7\"/>\n        <text x=\"0\" y=\"5\" font-size=\"12\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">O</text>\n        <text x=\"26\" y=\"2\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369a1\">δ⁻</text>\n\n        <line x1=\"-15\" y1=\"15\" x2=\"-35\" y2=\"35\" stroke=\"#0284c7\" stroke-width=\"4.5\"/>\n        <circle cx=\"-35\" cy=\"35\" r=\"11\" fill=\"#38bdf8\"/>\n        <text x=\"-35\" y=\"39\" font-size=\"9\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">H</text>\n\n        <line x1=\"15\" y1=\"15\" x2=\"35\" y2=\"35\" stroke=\"#0284c7\" stroke-width=\"4.5\"/>\n        <circle cx=\"35\" cy=\"35\" r=\"11\" fill=\"#38bdf8\"/>\n        <text x=\"35\" y=\"39\" font-size=\"9\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">H</text>\n      </g>\n    </g>\n\n    <rect x=\"15\" y=\"240\" width=\"310\" height=\"55\" rx=\"8\" fill=\"#f0f9ff\" stroke=\"#bae6fd\" stroke-width=\"1\"/>\n    <text x=\"170\" y=\"258\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369a1\" text-anchor=\"middle\">1 Molekul Air Membentuk 4 Ikatan Hidrogen</text>\n    <text x=\"170\" y=\"274\" font-size=\"9\" fill=\"#475569\" text-anchor=\"middle\">Membentuk kisi tetrahedral heksagonal terbuka saat membeku (Es)</text>\n    <text x=\"170\" y=\"288\" font-size=\"8.5\" font-style=\"italic\" fill=\"#0284c7\" text-anchor=\"middle\">Menjelaskan densitas es lebih rendah daripada air cair (terapung)!</text>\n  </g>\n</svg>\n\n---\n\n### 4. Anomali Sifat Fisik Air Akibat Ikatan Hidrogen\n\n1. **Titik Didih Ekstrem Tinggi ($100^\\circ\\text{C}$):**\n   Berdasarkan tren hidrida Golongan VIA lainnya ($\\ce{H2S}, \\ce{H2Se}, \\ce{H2Te}$), titik didih air seharusnya sekitar **$-80^\\circ\\text{C}$**. Namun kenyataannya titik didih air mencapai $+100^\\circ\\text{C}$ (selisih sebesar $180^\\circ\\text{C}$!). Setiap molekul $\\ce{H2O}$ memiliki $2$ atom $\\ce{H}$ dan $2$ PEB, sehingga dapat membentuk **jejaring 4 ikatan hidrogen 3D serentak per molekul**.\n2. **Titik Didih $\\ce{H2O}$ Lebih Tinggi daripada $\\ce{HF}$ ($19.5^\\circ\\text{C}$):**\n   Meskipun ikatan $\\ce{H-F}$ secara individual lebih polar daripada $\\ce{H-O}$, molekul $\\ce{HF}$ hanya memiliki 1 atom $\\ce{H}$ (meskipun punya 3 PEB), sehingga rata-rata hanya dapat membentuk **2 ikatan hidrogen per molekul** (rantai zigzag 1 dimensi). Air membentuk 4 ikatan hidrogen, sehingga total energi yang dibutuhkan untuk menguapkannya jauh lebih besar.\n3. **Anomali Densitas Es (Mengapung di Air Cair):**\n   Ketika air membeku menjadi es pada suhu $< 4^\\circ\\text{C}$, ikatan hidrogen terkunci membentuk kisi heksagonal kaku dengan banyak **rongga kosong terbuka (*open cage-like structure*)**. Akibatnya, volume es mengembang dan massa jenis es ($0.917\\text{ g/cm}^3$) menjadi lebih kecil daripada massa jenis air cair ($1.000\\text{ g/cm}^3$). Hal ini mencegah danau dan lautan kutub membeku dari dasar, menjaga kelangsungan hidup ekosistem akuatik di musim dingin!\n> [!WARNING]\n> ### ⚠️ Miskonsepsi Fatal: Perubahan Fisika vs Reaksi Kimia\n> Titik didih, titik leleh, viskositas, dan tekanan uap suatu zat molekuler **hanya ditentukan oleh kekuatan GAYA ANTARMOLEKULNYA**, bukan oleh kuat lemahnya ikatan kovalen di dalam molekul! \n> - Intan memiliki titik leleh raksasa ($> 3500^\\circ\\text{C}$) karena intan adalah jaringan kovalen raksasa (*covalent network*), bukan molekul diskret.\n> - Nitrogen ($\\ce{N2}$) memiliki ikatan kovalen rangkap tiga $\\ce{N#N}$ yang teramat kuat ($945\\text{ kJ/mol}$), namun gas $\\ce{N2}$ mendidih pada suhu super dingin $-196^\\circ\\text{C}$ karena gaya tarik London antarmolekul $\\ce{N2}$ yang nonpolar sangat lemah!\n\n---\n\n> [!WARNING]\n> ### ⚠️ Anomali Titik Didih Hidrida Periode 2: Mengapa H₂O, HF, dan NH₃ Melonjak?\n> Secara umum, makin besar massa molekul ($M_r$), makin besar ukuran awan elektron, makin mudah terpolarisasi, sehingga gaya London makin kuat dan titik didih makin tinggi (misal: $\\ce{CH4 < SiH4 < GeH4 < SnH4}$).\n> \n> Namun pada hidrida golongan 15, 16, dan 17, anggota Periode 2 ($\\ce{NH3, H2O, HF}$) justru memiliki titik didih yang **melonjak drastis keluar dari tren**:\n> - Hal ini terjadi karena atom **N, O, dan F** memiliki elektronegativitas yang sangat tinggi dan jari-jari atom yang sangat kecil.\n> - Ketika terikat dengan atom Hidrogen, terbentuk ikatan dipol yang sangat terkonsentrasi yang disebut **Ikatan Hidrogen**.\n> - Air ($\\ce{H2O}$) memiliki titik didih tertinggi ($100^\\circ\\text{C}$) di antara ketiganya karena setiap molekul $\\ce{H2O}$ memiliki **2 atom H dan 2 PEB**, memungkinkannya membentuk jaringan 3 dimensi sempurna dengan **4 ikatan hidrogen per molekul** ($\\ce{HF}$ hanya memiliki 1 H sehingga rata-rata hanya membentuk 2 ikatan hidrogen per molekul).\n",
      "keyFormulas": [
        {
          "name": "Hierarki Kekuatan Relatif Gaya Intermolekul",
          "formula": "\\text{Gaya London} < \\text{Dipol-Dipol} < \\text{Ikatan Hidrogen} \\ll \\text{Ikatan Kimia}"
        },
        {
          "name": "Potensial Interaksi Lennard-Jones",
          "formula": "V(r) = 4\\varepsilon \\left[ \\left(\\frac{\\sigma}{r}\\right)^{12} - \\left(\\frac{\\sigma}{r}\\right)^6 \\right]"
        }
      ]
    }
  ],
  worked_examples: WORKED_EXAMPLES_TOPIC_103
},

  {
  "id": 104,
  "topic_number": 4,
  "grade": "Kelas 10",
  "semester": 2,
  "curriculumPhase": "Fase E",
  "relatedOsnTopicId": 1,
  "title": "Tata Nama Senyawa & Persamaan Reaksi Kimia",
  "slug": "tata-nama-senyawa-persamaan-reaksi",
  "category": "Bahasa & Notasi Kimia",
  "level": "SMA",
  "readTimeMinutes": 30,
  "summary": "Panduan pedagogis komprehensif tata bahasa kimia dan persamaan reaksi: analogi intuitif Tata Bahasa Universal IUPAC untuk tata nama senyawa biner ionik (Stock Romawi), biner kovalen (awalan Yunani), asam, basa, ion poliatomik, dan hidrat kristal; dekonstruksi persamaan reaksi kimia melalui analogi Neraca Akuntansi Antoine Lavoisier; teknik penyetaraan reaksi tanpa coba-coba menggunakan Algoritma Aljabar Sistem Persamaan Linier dan metode inspeksi cerdas CHO; serta perumusan persamaan ionik lengkap dan ionik bersih (net ionic equations) untuk reaksi presipitasi larutan air.",
  "allTags": [
    "tata-nama-senyawa",
    "senyawa-biner-ionik",
    "senyawa-biner-kovalen",
    "awalan-yunani-iupac",
    "bilangan-oksidasi-romawi",
    "ion-poliatomik",
    "oksianion-asam-basa",
    "senyawa-hidrat-kristal",
    "tata-nama-hidrokarbon",
    "persamaan-reaksi-kimia",
    "fase-fase-zat",
    "hukum-kekekalan-massa-lavoisier",
    "penyetaraan-reaksi-inspeksi",
    "penyetaraan-reaksi-aljabar",
    "reaksi-pengendapan",
    "persamaan-ionik-bersih",
    "ion-penonton-spectator-ions",
    "sistem-stok",
    "aturan-iupac",
    "elisi-vokal",
    "oksida-nitrogen",
    "koefisien-reaksi",
    "subskrip-indeks",
    "kaidah-kaho",
    "pembakaran-propana",
    "deret-klorat",
    "pembakaran-butana",
    "asam-oksi",
    "basa-hidroksida",
    "alkana-alkena-alkuna",
    "rantai-utama",
    "logam-transisi",
    "sistem-persamaan-linier",
    "reaksi-redoks-asam-nitrat",
    "timbal-iodida",
    "sistem-tertutup",
    "karbonat-asam",
    "stoikiometri-hidrat",
    "hukum-lavoisier",
    "autoredoks-disproporsionasi",
    "reaksi-redoks",
    "neraca-muatan",
    "netralisasi",
    "tanpa-ion-penonton",
    "garam-asam",
    "garam-rangkap",
    "avogadro-gay-lussac",
    "gas-hidrogen",
    "stoikiometri-dasar",
    "proses-kontak",
    "reaksi-bertahap",
    "asam-sulfat",
    "metalurgi-besi",
    "elektrolit-lemah",
    "asam-asetat",
    "hukum-gay-lussac",
    "rumus-molekul",
    "tata-nama-biner-kovalen",
    "oksianion",
    "struktur-lewis",
    "peroksidisulfat",
    "senyawa-kompleks",
    "perak-klorida"
  ],
  "prerequisites": [
    {
      "tag": "bilangan-oksidasi-dasar-tatanama",
      "tags": [
        "bilangan-oksidasi",
        "aturan-penentuan-biloks",
        "biloks-logam-transisi"
      ],
      "title": "Prasyarat 1: Konsep Bilangan Oksidasi & Kaidah Penentuan Biloks Unsur",
      "summary": "Aturan baku penentuan bilangan oksidasi sebagai landasan pemberian angka Romawi pada sistem penamaan Stok.",
      "content": "### 🌐 Tata Bahasa Universal Ilmu Kimia (Mental Model: IUPAC Nomenclature)\n\nBayangkan jika setiap negara memiliki nama yang berbeda-beda untuk senyawa yang sama, atau lebih buruk lagi: menamai $\\ce{FeCl2}$ dan $\\ce{FeCl3}$ dengan nama yang sama persis yaitu \"besi klorida\". Dunia industri farmasi dan rekayasa material akan mengalami bencana fatal karena salah mencampurkan bahan!\n\nUntuk mencegah malapetaka tersebut, badan kimia dunia **IUPAC (*International Union of Pure and Applied Chemistry*)** merancang sistem tata nama universal. Seperti halnya tata bahasa (*grammar*) bahasa manusia yang memiliki aturan subjek, predikat, dan objek, tata nama kimia adalah bahasa internasional yang menjamin bahwa ketika seorang kimiawan di Tokyo, Jakarta, atau Zurich menuliskan nama suatu senyawa, seluruh ilmuwan di dunia membayangkan struktur molekul yang persis sama.\n\n---\n\nBilangan oksidasi (biloks) adalah muatan listrik hipotesis yang dimiliki oleh suatu atom dalam senyawa jika seluruh pasangan elektron ikatan dianggap sepenuhnya berpindah ke atom yang lebih elektronegatif.\n\n### 1. Kaidah Baku Penentuan Bilangan Oksidasi (IUPAC)\n\n1. **Unsur Bebas:** Memiliki biloks $= 0$.  \n   Contoh: atom netral $\\ce{Fe}, \\ce{Na}, \\ce{C}$ serta molekul unsur homointi $\\ce{H2}, \\ce{O2}, \\ce{N2}, \\ce{O3}, \\ce{P4}, \\ce{S8}$.\n2. **Ion Monatomik:** Biloks sama dengan muatan ion fisiknya.  \n   Contoh: $\\ce{Na+} (+1), \\ce{Mg^2+} (+2), \\ce{Al^3+} (+3), \\ce{Cl-} (-1), \\ce{S^2-} (-2), \\ce{N^3-} (-3)$.\n3. **Fluorin:** Unsur paling elektronegatif, selalu memiliki biloks $= -1$ dalam semua senyawanya.\n4. **Hidrogen:**\n   - Umumnya bernilai $+1$ ketika berikatan dengan nonlogam (contoh: $\\ce{H2O}, \\ce{HCl}, \\ce{NH3}, \\ce{CH4}$).\n   - Bernilai $-1$ khusus pada **hidrida logam** di mana $\\ce{H}$ berikatan dengan logam sangat elektropositif (contoh: $\\ce{NaH}, \\ce{CaH2}, \\ce{LiAlH4}$).\n5. **Oksigen:**\n   - Umumnya bernilai $-2$ pada sebagian besar senyawa oksida (contoh: $\\ce{H2O}, \\ce{CO2}, \\ce{CaO}, \\ce{H2SO4}$).\n   - Pengecualian pada:\n     - **Peroksida (mengandung ion $\\ce{O2^2-}$):** biloks $\\ce{O} = -1$ (contoh: $\\ce{H2O2}, \\ce{Na2O2}, \\ce{BaO2}$).\n     - **Superoksida (mengandung ion $\\ce{O2-}$):** biloks $\\ce{O} = -\\frac{1}{2}$ (contoh: $\\ce{KO2}, \\ce{RbO2}$).\n     - **Senyawa dengan Fluorin ($\\ce{OF2}$):** biloks $\\ce{O} = +2$ (karena $\\ce{F}$ lebih elektronegatif).\n6. **Logam Golongan Utama:**\n   - Logam Alkali (Golongan IA: $\\ce{Li, Na, K, Rb, Cs}$) selalu bernilai $+1$.\n   - Logam Alkali Tanah (Golongan IIA: $\\ce{Be, Mg, Ca, Sr, Ba}$) selalu bernilai $+2$.\n   - Aluminium ($\\ce{Al}$) selalu bernilai $+3$, Seng ($\\ce{Zn}$) selalu $+2$, dan Perak ($\\ce{Ag}$) selalu $+1$.\n7. **Jumlah Total Bilangan Oksidasi:**\n   - Dalam molekul netral: $\\sum \\text{Biloks} = 0$.\n   - Dalam ion poliatomik: $\\sum \\text{Biloks} = \\text{Muatan ion tersebut}$.\n\n---\n\n### 2. Signifikansi Biloks pada Tata Nama Senyawa\n\nLogam-logam transisi (seperti Besi $\\ce{Fe}$, Tembaga $\\ce{Cu}$, Timbal $\\ce{Pb}$, Timah $\\ce{Sn}$, Mangan $\\ce{Mn}$) dapat memiliki **lebih dari satu bilangan oksidasi**. Angka biloks inilah yang nantinya dituliskan dalam **angka Romawi** di dalam tanda kurung pada nama senyawa (Sistem Stok IUPAC):\n- $\\ce{FeCl2}$: Besi memiliki biloks $+2 \\implies$ **Besi(II) klorida**.\n- $\\ce{FeCl3}$: Besi memiliki biloks $+3 \\implies$ **Besi(III) klorida**.\n> [!IMPORTANT]\n> ### 💡 Kaidah Emas Penentuan Bilangan Oksidasi Logam Transisi\n> Unsur golongan utama (Golongan IA, IIA, IIIA) selalu memiliki bilangan oksidasi tunggal yang pasti ($+1, +2, +3$). Oleh karena itu, namanya **TIDAK MEMERLUKAN angka Romawi** (misal $\\ce{NaCl}$ adalah natrium klorida, bukan natrium(I) klorida).\n> \n> Sebaliknya, logam transisi (seperti Fe, Cu, Sn, Pb, Co, Cr, Mn) memiliki elektron pada subkulit $d$ sehingga dapat melepaskan jumlah elektron yang berbeda-beda (**biloks bervariasi**). Maka, **ANGKA ROMAWI (Sistem Stock) WAJIB DICANTUMKAN**:\n> - $\\ce{Fe^2+} \\implies$ Besi(II) $\\quad$ vs $\\quad \\ce{Fe^3+} \\implies$ Besi(III)\n> - $\\ce{Cu+} \\implies$ Tembaga(I) $\\quad$ vs $\\quad \\ce{Cu^2+} \\implies$ Tembaga(II)\n> - $\\ce{Sn^2+} \\implies$ Timah(II) $\\quad$ vs $\\quad \\ce{Sn^4+} \\implies$ Timah(IV)\n",
      "keyFormulas": [
        {
          "name": "Kaidah Senyawa Netral",
          "formula": "\\sum_{i} n_i \\cdot \\text{Biloks}_i = 0"
        },
        {
          "name": "Kaidah Ion Poliatomik",
          "formula": "\\sum_{i} n_i \\cdot \\text{Biloks}_i = q_{\\text{ion}}"
        }
      ]
    },
    {
      "tag": "tabel-kation-anion-poliatomik",
      "tags": [
        "kation-logam",
        "anion-monatomik",
        "anion-poliatomik",
        "oksianion",
        "tata-nama-anion"
      ],
      "title": "Prasyarat 2: Khazanah Kation dan Anion (Monatomik & Poliatomik Oksianion)",
      "summary": "Daftar nama dan formula kation logam umum serta deret tatanama anion oksi berakhiran -at dan -it.",
      "content": "Penyusunan rumus dan penamaan senyawa kimia anorganik mensyaratkan penguasaan formula dan muatan ion-ion pembentuknya.\n\n### 1. Daftar Kation Umum (Ion Positif)\n\n| Kation Bervalensi Tunggal | Kation Logam Bervalensi Jamak (Transisi) |\n| :--- | :--- |\n| $\\ce{H+}$ : Ion Hidrogen | $\\ce{Fe^2+}$ : Besi(II) / Fero |\n| $\\ce{Li+}$ : Ion Litium | $\\ce{Fe^3+}$ : Besi(III) / Feri |\n| $\\ce{Na+}$ : Ion Natrium | $\\ce{Cu+}$ : Tembaga(I) / Kupro |\n| $\\ce{K+}$ : Ion Kalium | $\\ce{Cu^2+}$ : Tembaga(II) / Kupri |\n| $\\ce{Ag+}$ : Ion Perak | $\\ce{Sn^2+}$ : Timah(II) / Stano |\n| $\\ce{Mg^2+}$ : Ion Magnesium | $\\ce{Sn^4+}$ : Timah(IV) / Stani |\n| $\\ce{Ca^2+}$ : Ion Kalsium | $\\ce{Pb^2+}$ : Timbal(II) / Plumbo |\n| $\\ce{Ba^2+}$ : Ion Barium | $\\ce{Pb^4+}$ : Timbal(IV) / Plumbi |\n| $\\ce{Zn^2+}$ : Ion Seng | $\\ce{Hg2^2+}$ : Raksa(I) |\n| $\\ce{Al^3+}$ : Ion Aluminium | $\\ce{Hg^2+}$ : Raksa(II) |\n| $\\ce{NH4+}$ : Ion Amonium (Poliatomik) | $\\ce{Cr^3+}$ : Kromium(III) |\n\n---\n\n### 2. Daftar Anion Monatomik & Oksianion Poliatomik\n\nAnion monatomik dinamai dengan menambahkan akhiran **-ida** pada akar kata nama unsur nonlogamnya:\n- $\\ce{F-}$ : Fluorida, $\\ce{Cl-}$ : Klorida, $\\ce{Br-}$ : Bromida, $\\ce{I-}$ : Iodida.\n- $\\ce{O^2-}$ : Oksida, $\\ce{S^2-}$ : Sulfida, $\\ce{N^3-}$ : Nitrida, $\\ce{P^3-}$ : Fosfida, $\\ce{C^4-}$ : Karbida.\n\n**Sistem Penamaan Deret Oksianion (Klorin/Bromin/Iodin):**\nDeret oksianion tersusun berdasarkan kenaikan jumlah atom oksigen (kenaikan bilangan oksidasi):\n1. **Hipo-...-it** (Paling sedikit oksigen, biloks $+1$): $\\ce{ClO-}$ = Ion Hipoklorit.\n2. **-it** (Sedikit oksigen, biloks $+3$): $\\ce{ClO2-}$ = Ion Klorit.\n3. **-at** (Banyak oksigen, biloks $+5$): $\\ce{ClO3-}$ = Ion Klorat.\n4. **Per-...-at** (Paling banyak oksigen, biloks $+7$): $\\ce{ClO4-}$ = Ion Perklorat.\n\n**Anion Poliatomik Populer Lainnya:**\n- $\\ce{OH-}$ : Hidroksida\n- $\\ce{NO2-}$ : Nitrit vs $\\ce{NO3-}$ : Nitrat\n- $\\ce{SO3^2-}$ : Sulfit vs $\\ce{SO4^2-}$ : Sulfat\n- $\\ce{CO3^2-}$ : Karbonat vs $\\ce{HCO3-}$ : Hidrogen karbonat (Bikarbonat)\n- $\\ce{PO4^3-}$ : Fosfat vs $\\ce{HPO4^2-}$ : Hidrogen fosfat\n- $\\ce{CH3COO-}$ : Asetat (Etanoat)\n- $\\ce{CrO4^2-}$ : Kromat vs $\\ce{Cr2O7^2-}$ : Dikromat\n- $\\ce{MnO4-}$ : Permanganat\n- $\\ce{CN-}$ : Sianida vs $\\ce{SCN-}$ : Tiosianat",
      "keyFormulas": [
        {
          "name": "Kaidah Penyilangan Muatan Senyawa Netral",
          "formula": "x \\ce{A^{y+}} + y \\ce{B^{x-}} \\to \\ce{A_x B_y}"
        }
      ]
    }
  ],
  "core_concepts": [
    {
      "tag": "tata-nama-senyawa-biner-ionik-kovalen",
      "tags": [
        "tata-nama-biner",
        "senyawa-ionik-biner",
        "sistem-stok",
        "senyawa-kovalen-biner",
        "awalan-yunani"
      ],
      "title": "Konsep Inti 1: Tata Nama Senyawa Biner (Ionik Logam-Nonlogam vs Kovalen Nonlogam-Nonlogam)",
      "summary": "Aturan IUPAC penamaan senyawa dua unsur: sistem angka Romawi untuk logam transisi dan sistem awalan Yunani untuk senyawa kovalen.",
      "content": "Senyawa biner adalah senyawa kimia yang tersusun dari **hanya dua unsur yang berbeda**. Tata nama senyawa biner dibedakan secara tegas berdasarkan jenis ikatan kimianya (apakah senyawa ionik atau senyawa molekuler kovalen).\n\n### 1. Tata Nama Senyawa Biner Ionik (Logam + Nonlogam)\n\nSenyawa ionik terbentuk dari kation logam dan anion nonlogam:\n1. **Logam Bervalensi Tunggal (Golongan IA, IIA, $\\ce{Al, Zn, Ag}$):**\n   Karena kationnya hanya memiliki satu kemungkinan muatan listrik, **tidak perlu mencantumkan angka Romawi maupun awalan angka**:\n   $$\\mathbf{\\text{[Nama Logam]} + \\text{[Nama Nonlogam + akhiran -ida]}}$$\n   - $\\ce{NaCl}$ : Natrium klorida (bukan *mononatrium monoklorida*)\n   - $\\ce{MgBr2}$ : Magnesium bromida (bukan *magnesium dibromida*)\n   - $\\ce{Al2O3}$ : Aluminium oksida (bukan *dialuminium trioksida*)\n   - $\\ce{K2S}$ : Kalium sulfida\n   - $\\ce{Ca3N2}$ : Kalsium nitrida\n2. **Logam Bervalensi Jamak (Logam Transisi / Post-Transisi):**\n   Karena atom logam dapat membentuk lebih dari satu kation stabil, wajib menyertakan **Bilangan Oksidasi Logam dalam Angka Romawi** di dalam kurung tepat setelah nama logam (**Sistem Stok IUPAC**):\n   $$\\mathbf{\\text{[Nama Logam]} + \\mathbf{\\text{(Angka Romawi Biloks)}} + \\text{[Nama Nonlogam + -ida]}}$$\n   - $\\ce{FeO}$ : Biloks $\\ce{Fe} = +2 \\implies$ **Besi(II) oksida** *(nama lama: Fero oksida)*\n   - $\\ce{Fe2O3}$ : Biloks $\\ce{Fe} = +3 \\implies$ **Besi(III) oksida** *(nama lama: Feri oksida)*\n   - $\\ce{Cu2O}$ : Biloks $\\ce{Cu} = +1 \\implies$ **Tembaga(I) oksida** *(Kupro oksida)*\n   - $\\ce{CuO}$ : Biloks $\\ce{Cu} = +2 \\implies$ **Tembaga(II) oksida** *(Kupri oksida)*\n   - $\\ce{SnCl2}$ : **Timah(II) klorida** vs $\\ce{SnCl4}$ : **Timah(IV) klorida**\n   - $\\ce{PbO2}$ : **Timbal(IV) oksida**\n\n---\n\n### 2. Tata Nama Senyawa Biner Kovalen (Nonlogam + Nonlogam)\n\nSenyawa kovalen tersusun dari dua unsur nonlogam. Hubungan stoikiometrinya dinyatakan menggunakan **Awalan Angka Yunani**:\n$$\\mathbf{\\text{[Awalan]} + \\text{[Nonlogam 1]} + \\text{[Awalan]} + \\text{[Nonlogam 2 + -ida]}}$$\n\n| Angka | Awalan Yunani | Angka | Awalan Yunani |\n| :---: | :--- | :---: | :--- |\n| **1** | Mono- | **6** | Heksa- |\n| **2** | Di- | **7** | Hepta- |\n| **3** | Tri- | **8** | Okta- |\n| **4** | Tetra- | **9** | Nona- (atau Enea-) |\n| **5** | Penta- | **10** | Deka- |\n\n> [!IMPORTANT]\n> **Dua Kaidah Emas Senyawa Kovalen Biner:**\n> 1. **Aturan Mono- Pertama:** Awalan *mono-* **TIDAK PERNAH digunakan** pada unsur pertama jika jumlahnya hanya satu.  \n>    Contoh: $\\ce{CO}$ adalah **Karbon monoksida** (bukan *monokarbon monoksida*); $\\ce{NO2}$ adalah **Nitrogen dioksida**.\n> 2. **Elisi Vokal:** Jika awalan berakhiran huruf vokal *-a* atau *-o* bertemu dengan kata oksida (yang diawali huruf *o-*), huruf vokal terakhir dihilangkan demi kemudahan pelafalan:\n>    - *Tetra- + oksida* $\\to$ **Tetroksida** (contoh: $\\ce{N2O4}$ = Dinitrogen tetroksida).\n>    - *Penta- + oksida* $\\to$ **Pentoksida** (contoh: $\\ce{N2O5}$ = Dinitrogen pentoksida).\n>    - *Mono- + oksida* $\\to$ **Monoksida** (contoh: $\\ce{CO}$ = Karbon monoksida).\n> 3. **Urutan Penulisan Unsur Nonlogam:** Mengikuti urutan elektronegativitas menaik:  \n>    $\\ce{B} \\to \\ce{Si} \\to \\ce{C} \\to \\ce{Sb} \\to \\ce{As} \\to \\ce{P} \\to \\ce{N} \\to \\ce{H} \\to \\ce{Te} \\to \\ce{Se} \\to \\ce{S} \\to \\ce{I} \\to \\ce{Br} \\to \\ce{Cl} \\to \\ce{O} \\to \\ce{F}$.\n> [!WARNING]\n> ### ⚠️ Miskonsepsi Fatal 1: Larangan Penggunaan Awalan Yunani pada Senyawa Ionik!\n> Salah satu kesalahan paling lazim peserta ujian adalah menggunakan awalan Yunani (*mono-, di-, tri-, tetra-*) pada senyawa ionik:\n> - Menyebut $\\ce{MgCl2}$ sebagai \"Magnesium diklorida\" adalah **SALAH BESAR!**\n> - Yang benar adalah **Magnesium klorida**, karena senyawa ionik sudah netral secara stoikiometri muatan (ion $\\ce{Mg^2+}$ pasti berpasangan dengan dua ion $\\ce{Cl-}$).\n> - Awalan Yunani **HANYA DIGUNAKAN UNTUK SENYAWA KOVALEN BINER (NONLOGAM + NONLOGAM)** di mana dua atom nonlogam dapat membentuk beragam rasio molekuler (seperti $\\ce{CO}$ Karbon monoksida dan $\\ce{CO2}$ Karbon dioksida; $\\ce{NO}$ Nitrogen monoksida, $\\ce{NO2}$ Nitrogen dioksida, dan $\\ce{N2O5}$ Dinitrogen pentaoksida).\n",
      "keyFormulas": [
        {
          "name": "Rumus Struktur Nama Kovalen Biner",
          "formula": "\\text{Awalan-Unsur}_1 + \\text{Awalan-Unsur}_2\\text{-ida}"
        },
        {
          "name": "Rumus Struktur Nama Ionik Sistem Stok",
          "formula": "\\text{Nama Logam} + (\\text{Biloks Romawi}) + \\text{Nama Anion}"
        }
      ]
    },
    {
      "tag": "tata-nama-poliatomik-asam-basa-hidrat",
      "tags": [
        "senyawa-poliatomik",
        "tata-nama-asam",
        "tata-nama-basa",
        "senyawa-hidrat",
        "pohon-keputusan-tatanama"
      ],
      "title": "Konsep Inti 2: Tata Nama Senyawa Poliatomik, Asam, Basa & Senyawa Hidrat Kristal",
      "summary": "Algoritma penamaan senyawa garam poliatomik, senyawa asam biner dan asam oksi, basa hidroksida, serta penamaan hidrat berair kristal.",
      "content": "Pemberian nama untuk senyawa anorganik yang melibatkan ion poliatomik, asam, basa, serta kristal hidrat mengikuti konvensi terstruktur IUPAC.\n\n### 1. Senyawa Poliatomik (Garam Poliatomik)\n\nSenyawa poliatomik terdiri dari kation (logam atau ion amonium $\\ce{NH4+}$) yang berikatan dengan anion poliatomik.\n$$\\mathbf{\\text{[Nama Kation Logam (disertai Romawi jika transisi)]} + \\text{[Nama Anion Poliatomik]}}$$\n- $\\ce{Na2SO4}$ : Natrium sulfat\n- $\\ce{KNO3}$ : Kalium nitrat\n- $\\ce{CaCO3}$ : Kalsium karbonat\n- $\\ce{(NH4)2CO3}$ : Amonium karbonat\n- $\\ce{Fe2(SO4)3}$ : Besi(III) sulfat (karena $\\ce{SO4}$ bermuatan $-2$, $3 \\times (-2) = -6$, maka $2 \\ce{Fe} = +6 \\implies \\ce{Fe} = +3$)\n- $\\ce{CuSO4}$ : Tembaga(II) sulfat\n- $\\ce{KMnO4}$ : Kalium permanganat\n- $\\ce{K2Cr2O7}$ : Kalium dikromat\n\n---\n\n### 2. Tata Nama Asam & Basa Arrhenius\n\n1. **Tata Nama Senyawa Asam (Melepas ion $\\ce{H+}$ dalam air):**\n   Nama senyawa asam diawali dengan kata **\"Asam\"** (mewakili kation $\\ce{H+}$) diikuti oleh nama anion sisa asamnya:\n   - **Asam Biner (Tanpa Oksigen):** $\\ce{HCl}$ = Asam klorida, $\\ce{HBr}$ = Asam bromida, $\\ce{H2S}$ = Asam sulfida, $\\ce{HCN}$ = Asam sianida.\n   - **Asam Oksi (Mengandung Oksigen):**\n     - $\\ce{HNO3}$ : Asam nitrat vs $\\ce{HNO2}$ : Asam nitrit\n     - $\\ce{H2SO4}$ : Asam sulfat vs $\\ce{H2SO3}$ : Asam sulfit\n     - $\\ce{H3PO4}$ : Asam fosfat\n     - $\\ce{H2CO3}$ : Asam karbonat\n     - $\\ce{CH3COOH}$ : Asam asetat (Asam cuka / Asam etanoat)\n2. **Tata Nama Senyawa Basa (Melepas ion $\\ce{OH-}$ dalam air):**\n   Nama kation logam diikuti oleh kata **\"Hidroksida\"**:\n   - $\\ce{NaOH}$ : Natrium hidroksida\n   - $\\ce{KOH}$ : Kalium hidroksida\n   - $\\ce{Ca(OH)2}$ : Kalsium hidroksida\n   - $\\ce{Ba(OH)2}$ : Barium hidroksida\n   - $\\ce{Al(OH)3}$ : Aluminium hidroksida\n   - $\\ce{Fe(OH)2}$ : Besi(II) hidroksida vs $\\ce{Fe(OH)3}$ : Besi(III) hidroksida\n\n---\n\n### 3. Tata Nama Senyawa Hidrat (Air Kristal)\n\nSenyawa hidrat adalah kristal padat yang mengikat sejumlah molekul air ($\\ce{H2O}$) secara teratur dalam struktur kisi kristalnya:\n$$\\mathbf{\\text{[Nama Senyawa Anhidrat]} + \\text{[Awalan Yunani]} + \\mathbf{\\text{hidrat}}}$$\n- $\\ce{CuSO4 . 5H2O}$ : Tembaga(II) sulfat **pentahidrat** *(terusi / vitriol biru)*\n- $\\ce{CaSO4 . 2H2O}$ : Kalsium sulfat **dihidrat** *(gipsum)*\n- $\\ce{MgSO4 . 7H2O}$ : Magnesium sulfat **heptahidrat** *(garam inggris / epsom)*\n- $\\ce{Na2CO3 . 10H2O}$ : Natrium karbonat **dekahidrat** *(soda cuci)*\n- $\\ce{FeSO4 . 7H2O}$ : Besi(II) sulfat **heptahidrat**\n\n---\n\n### 4. Peta Pohon Keputusan Algoritma Tata Nama Senyawa Kimia\n\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 840 340\" width=\"100%\" height=\"auto\" class=\"max-w-[840px] select-none font-sans\">\n  <defs>\n    <linearGradient id=\"treeRoot\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#1e293b\"/>\n      <stop offset=\"100%\" stop-color=\"#0f172a\"/>\n    </linearGradient>\n    <linearGradient id=\"treeIonic\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#2563eb\"/>\n      <stop offset=\"100%\" stop-color=\"#1d4ed8\"/>\n    </linearGradient>\n    <linearGradient id=\"treeCov\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#059669\"/>\n      <stop offset=\"100%\" stop-color=\"#047857\"/>\n    </linearGradient>\n    <linearGradient id=\"treeAcid\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#d97706\"/>\n      <stop offset=\"100%\" stop-color=\"#b45309\"/>\n    </linearGradient>\n    <marker id=\"arrowTree\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 9 5 L 0 9 z\" fill=\"#64748b\"/>\n    </marker>\n  </defs>\n\n  <!-- CONTAINER -->\n  <rect width=\"840\" height=\"340\" rx=\"16\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\n\n  <!-- ROOT NODE -->\n  <g transform=\"translate(320, 16)\">\n    <rect width=\"200\" height=\"36\" rx=\"10\" fill=\"url(#treeRoot)\"/>\n    <text x=\"100\" y=\"22\" font-size=\"11.5\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">SENYAWA KIMIA</text>\n  </g>\n\n  <!-- LINES FROM ROOT TO 3 BRANCHES -->\n  <path d=\"M 360 52 L 150 90\" stroke=\"#64748b\" stroke-width=\"2\" marker-end=\"url(#arrowTree)\"/>\n  <path d=\"M 420 52 L 420 90\" stroke=\"#64748b\" stroke-width=\"2\" marker-end=\"url(#arrowTree)\"/>\n  <path d=\"M 480 52 L 690 90\" stroke=\"#64748b\" stroke-width=\"2\" marker-end=\"url(#arrowTree)\"/>\n\n  <!-- CABANG 1: SENYAWA IONIK (KIRI) -->\n  <g transform=\"translate(30, 95)\">\n    <rect width=\"240\" height=\"42\" rx=\"8\" fill=\"url(#treeIonic)\"/>\n    <text x=\"120\" y=\"18\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">1. SENYAWA IONIK</text>\n    <text x=\"120\" y=\"32\" font-size=\"9\" fill=\"#bfdbfe\" text-anchor=\"middle\">(Ada Logam atau Kation NH₄⁺)</text>\n\n    <!-- Sub-cabang Logam Utama vs Transisi -->\n    <path d=\"M 80 42 L 50 80\" stroke=\"#93c5fd\" stroke-width=\"1.5\" marker-end=\"url(#arrowTree)\"/>\n    <path d=\"M 160 42 L 190 80\" stroke=\"#93c5fd\" stroke-width=\"1.5\" marker-end=\"url(#arrowTree)\"/>\n\n    <!-- Kotak Logam Gol Utama -->\n    <rect x=\"-10\" y=\"85\" width=\"125\" height=\"135\" rx=\"8\" fill=\"#ffffff\" stroke=\"#93c5fd\" stroke-width=\"1.2\"/>\n    <text x=\"52\" y=\"102\" font-size=\"9.5\" font-weight=\"bold\" fill=\"#1e3a8a\" text-anchor=\"middle\">Valensi Tunggal</text>\n    <text x=\"52\" y=\"115\" font-size=\"8\" fill=\"#64748b\" text-anchor=\"middle\">(IA, IIA, Al, Zn, Ag)</text>\n    <line x1=\"0\" y1=\"122\" x2=\"105\" y2=\"122\" stroke=\"#e2e8f0\"/>\n    <text x=\"52\" y=\"138\" font-size=\"8.5\" font-weight=\"bold\" fill=\"#2563eb\" text-anchor=\"middle\">Tanpa Angka Romawi</text>\n    <text x=\"52\" y=\"152\" font-size=\"8.5\" fill=\"#334155\" text-anchor=\"middle\">Nama Logam + Anion</text>\n    <text x=\"52\" y=\"174\" font-size=\"8\" font-style=\"italic\" fill=\"#0284c7\" text-anchor=\"middle\">NaCl = Natrium klorida</text>\n    <text x=\"52\" y=\"190\" font-size=\"8\" font-style=\"italic\" fill=\"#0284c7\" text-anchor=\"middle\">Al₂O₃ = Aluminium oksida</text>\n    <text x=\"52\" y=\"206\" font-size=\"8\" font-style=\"italic\" fill=\"#0284c7\" text-anchor=\"middle\">K₂SO₄ = Kalium sulfat</text>\n\n    <!-- Kotak Logam Transisi -->\n    <rect x=\"125\" y=\"85\" width=\"130\" height=\"135\" rx=\"8\" fill=\"#ffffff\" stroke=\"#93c5fd\" stroke-width=\"1.2\"/>\n    <text x=\"190\" y=\"102\" font-size=\"9.5\" font-weight=\"bold\" fill=\"#1e3a8a\" text-anchor=\"middle\">Valensi Jamak</text>\n    <text x=\"190\" y=\"115\" font-size=\"8\" fill=\"#64748b\" text-anchor=\"middle\">(Fe, Cu, Sn, Pb, dll)</text>\n    <line x1=\"135\" y1=\"122\" x2=\"245\" y2=\"122\" stroke=\"#e2e8f0\"/>\n    <text x=\"190\" y=\"138\" font-size=\"8.5\" font-weight=\"bold\" fill=\"#dc2626\" text-anchor=\"middle\">Wajib Angka Romawi!</text>\n    <text x=\"190\" y=\"152\" font-size=\"8.5\" fill=\"#334155\" text-anchor=\"middle\">Logam(Biloks) + Anion</text>\n    <text x=\"190\" y=\"174\" font-size=\"8\" font-style=\"italic\" fill=\"#991b1b\" text-anchor=\"middle\">FeCl₂ = Besi(II) klorida</text>\n    <text x=\"190\" y=\"190\" font-size=\"8\" font-style=\"italic\" fill=\"#991b1b\" text-anchor=\"middle\">FeCl₃ = Besi(III) klorida</text>\n    <text x=\"190\" y=\"206\" font-size=\"8\" font-style=\"italic\" fill=\"#991b1b\" text-anchor=\"middle\">Cu₂O = Tembaga(I) oksida</text>\n  </g>\n\n  <!-- CABANG 2: SENYAWA KOVALEN (TENGAH) -->\n  <g transform=\"translate(300, 95)\">\n    <rect width=\"240\" height=\"42\" rx=\"8\" fill=\"url(#treeCov)\"/>\n    <text x=\"120\" y=\"18\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">2. SENYAWA KOVALEN</text>\n    <text x=\"120\" y=\"32\" font-size=\"9\" fill=\"#a7f3d0\" text-anchor=\"middle\">(Sesama Atom Nonlogam)</text>\n\n    <!-- Kotak Penjelasan Kovalen -->\n    <rect x=\"0\" y=\"85\" width=\"240\" height=\"135\" rx=\"8\" fill=\"#ffffff\" stroke=\"#6ee7b7\" stroke-width=\"1.2\"/>\n    <text x=\"120\" y=\"105\" font-size=\"9.5\" font-weight=\"bold\" fill=\"#065f46\" text-anchor=\"middle\">Gunakan Awalan Yunani</text>\n    <text x=\"120\" y=\"120\" font-size=\"8.5\" fill=\"#64748b\" text-anchor=\"middle\">(mono, di, tri, tetra, penta...)</text>\n    <line x1=\"15\" y1=\"128\" x2=\"225\" y2=\"128\" stroke=\"#e2e8f0\"/>\n    <text x=\"120\" y=\"145\" font-size=\"8.5\" font-weight=\"bold\" fill=\"#047857\" text-anchor=\"middle\">Kaidah: Mono di depan diabaikan</text>\n    <text x=\"120\" y=\"165\" font-size=\"8\" font-style=\"italic\" fill=\"#065f46\" text-anchor=\"middle\">CO = Karbon monoksida</text>\n    <text x=\"120\" y=\"181\" font-size=\"8\" font-style=\"italic\" fill=\"#065f46\" text-anchor=\"middle\">CO₂ = Karbon dioksida</text>\n    <text x=\"120\" y=\"197\" font-size=\"8\" font-style=\"italic\" fill=\"#065f46\" text-anchor=\"middle\">N₂O₅ = Dinitrogen pentoksida</text>\n    <text x=\"120\" y=\"211\" font-size=\"8\" font-style=\"italic\" fill=\"#065f46\" text-anchor=\"middle\">SF₆ = Belerang heksafluorida</text>\n  </g>\n\n  <!-- CABANG 3: ASAM, BASA & HIDRAT (KANAN) -->\n  <g transform=\"translate(570, 95)\">\n    <rect width=\"240\" height=\"42\" rx=\"8\" fill=\"url(#treeAcid)\"/>\n    <text x=\"120\" y=\"18\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">3. ASAM, BASA &amp; HIDRAT</text>\n    <text x=\"120\" y=\"32\" font-size=\"9\" fill=\"#fde68a\" text-anchor=\"middle\">(Spesifik Gugus &amp; Air Kristal)</text>\n\n    <rect x=\"0\" y=\"85\" width=\"240\" height=\"135\" rx=\"8\" fill=\"#ffffff\" stroke=\"#fcd34d\" stroke-width=\"1.2\"/>\n    <text x=\"120\" y=\"105\" font-size=\"9.5\" font-weight=\"bold\" fill=\"#92400e\" text-anchor=\"middle\">Aturan Penamaan Spesifik</text>\n    <line x1=\"15\" y1=\"115\" x2=\"225\" y2=\"115\" stroke=\"#e2e8f0\"/>\n    <text x=\"20\" y=\"132\" font-size=\"8.5\" font-weight=\"bold\" fill=\"#b45309\">Asam (H⁺):</text>\n    <text x=\"90\" y=\"132\" font-size=\"8\" fill=\"#334155\">Kata \"Asam\" + Anion (HCl, H₂SO₄)</text>\n    <text x=\"20\" y=\"152\" font-size=\"8.5\" font-weight=\"bold\" fill=\"#b45309\">Basa (OH⁻):</text>\n    <text x=\"90\" y=\"152\" font-size=\"8\" fill=\"#334155\">Nama Kation + \"Hidroksida\"</text>\n    <text x=\"20\" y=\"172\" font-size=\"8.5\" font-weight=\"bold\" fill=\"#b45309\">Hidrat:</text>\n    <text x=\"90\" y=\"172\" font-size=\"8\" fill=\"#334155\">Nama Garam + Awalan + \"hidrat\"</text>\n    <line x1=\"15\" y1=\"184\" x2=\"225\" y2=\"184\" stroke=\"#e2e8f0\"/>\n    <text x=\"120\" y=\"200\" font-size=\"8\" font-style=\"italic\" fill=\"#78350f\" text-anchor=\"middle\">CuSO₄·5H₂O = Tembaga(II) sulfat pentahidrat</text>\n  </g>\n\n  <!-- BANNER BAWAH -->\n  <g transform=\"translate(30, 290)\">\n    <rect width=\"780\" height=\"34\" rx=\"8\" fill=\"#0f172a\"/>\n    <text x=\"390\" y=\"21\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\">\n      Kunci Sukses: Kenali terlebih dahulu apakah unsur pertama adalah LOGAM (Sistem Stok) atau NONLOGAM (Sistem Awalan Yunani)!\n    </text>\n  </g>\n</svg>",
      "keyFormulas": [
        {
          "name": "Rumus Senyawa Hidrat Kristal",
          "formula": "\\ce{A_x B_y . n H2O} \\implies \\text{Nama Garam} + \\text{Awalan-} + \\text{hidrat}"
        }
      ]
    },
    {
      "tag": "tata-nama-hidrokarbon-dasar",
      "tags": [
        "hidrokarbon",
        "alkana-alkena-alkuna",
        "deret-homolog",
        "awalan-rantai-karbon"
      ],
      "title": "Konsep Inti 3: Tata Nama Hidrokarbon Dasar (Alkana, Alkena, Alkuna C1 - C10)",
      "summary": "Dasar penamaan rantai karbon alifatik jenuh dan tak jenuh menurut aturan IUPAC.",
      "content": "Hidrokarbon adalah senyawa organik paling sederhana yang hanya terdiri dari atom Karbon ($\\ce{C}$) dan Hidrogen ($\\ce{H}$).\n\n### 1. Awalan Jumlah Atom Karbon Rantai Utama (C1 - C10)\n\n| Jumlah C | Awalan IUPAC | Alkana ($\\ce{C_n H_{2n+2}}$) | Alkena ($\\ce{C_n H_{2n}}$) | Alkuna ($\\ce{C_n H_{2n-2}}$) |\n| :---: | :--- | :--- | :--- | :--- |\n| **C1** | Met- | Metana ($\\ce{CH4}$) | *(Tidak ada)* | *(Tidak ada)* |\n| **C2** | Et- | Etana ($\\ce{C2H6}$) | Etena ($\\ce{C2H4}$) | Etuna / Asetilena ($\\ce{C2H2}$) |\n| **C3** | Prop- | Propana ($\\ce{C3H8}$) | Propena ($\\ce{C3H6}$) | Propuna ($\\ce{C3H4}$) |\n| **C4** | But- | Butana ($\\ce{C4H10}$) | Butena ($\\ce{C4H8}$) | Butuna ($\\ce{C4H6}$) |\n| **C5** | Pent- | Pentana ($\\ce{C5H12}$) | Pentena ($\\ce{C5H10}$) | Pentuna ($\\ce{C5H8}$) |\n| **C6** | Heks- | Heksana ($\\ce{C6H14}$) | Heksena ($\\ce{C6H12}$) | Heksuna ($\\ce{C6H10}$) |\n| **C7** | Hept- | Heptana ($\\ce{C7H16}$) | Heptena ($\\ce{C7H14}$) | Heptuna ($\\ce{C7H12}$) |\n| **C8** | Okt- | Oktana ($\\ce{C8H18}$) | Oktena ($\\ce{C8H16}$) | Oktuna ($\\ce{C8H14}$) |\n| **C9** | Non- | Nonana ($\\ce{C9H20}$) | Nonena ($\\ce{C9H18}$) | Nonuna ($\\ce{C9H16}$) |\n| **C10** | Dek- | Dekana ($\\ce{C10H22}$) | Dekena ($\\ce{C10H20}$) | Dekuna ($\\ce{C10H18}$) |\n\n---\n\n### 2. Aturan Tatanama Rantai Bercabang Sederhana\n1. Tentukan **rantai karbon terpanjang dan berurutan** sebagai rantai induk.\n2. Beri penomoran atom karbon pada rantai induk dimulai dari ujung yang **paling dekat dengan gugus cabang (alkil) atau ikatan rangkap**.\n3. Gugus cabang alkil (rumus $-\\ce{C_n H_{2n+1}}$) dinamai dengan akhiran **-il**:\n   - $-\\ce{CH3}$ : Metil\n   - $-\\ce{C2H5}$ : Etil\n   - $-\\ce{C3H7}$ : Propil / Isopropil\n4. Format nama lengkap:\n   $$\\mathbf{\\text{[Nomor Cabang]} - \\text{[Nama Alkil]} + \\text{[Nama Rantai Induk]}}$$\n   Contoh: $\\ce{CH3-CH(CH3)-CH2-CH3}$ dinamai **2-metilbutana**.",
      "keyFormulas": [
        {
          "name": "Rumus Umum Alkana",
          "formula": "\\ce{C_n H_{2n+2}}"
        },
        {
          "name": "Rumus Umum Alkena",
          "formula": "\\ce{C_n H_{2n}}"
        },
        {
          "name": "Rumus Umum Alkuna",
          "formula": "\\ce{C_n H_{2n-2}}"
        }
      ]
    },
    {
      "tag": "anatomi-persamaan-reaksi-dan-hukum-lavoisier",
      "tags": [
        "persamaan-reaksi",
        "reaktan-produk",
        "koefisien-reaksi",
        "subskrip-indeks",
        "fase-zat",
        "hukum-lavoisier"
      ],
      "title": "Konsep Inti 4: Anatomi Persamaan Reaksi Kimia & Hukum Kekekalan Massa Lavoisier",
      "summary": "Arti lambang koefisien reaksi vs indeks rumus, simbol fasa zat padat/cair/gas/larutan, dan pemenuhan neraca massa.",
      "content": "### ⚖️ Neraca Akuntansi Penyetaraan Reaksi (Mental Model: Hukum Lavoisier)\n\nDalam ilmu akuntansi, neraca keuangan (*balance sheet*) memegang prinsip bahwa nilai sisi Aktiva (Debet) harus seimbang sempurna dengan sisi Pasiva (Kredit). \n\nDalam sains kimia, **atom adalah mata uang abadi alam semesta**. Antoine Lavoisier (1789) membuktikan bahwa dalam reaksi kimia biasa, atom-atom tidak dapat diciptakan dari kehampaan dan tidak dapat dimusnahkan menjadi ketiadaan. Reaksi kimia hanyalah **proses bongkar-pasang penataan ulang ikatan antaratom**:\n- **Sisi Kiri (Reaktan):** Modal atom yang masuk ke pabrik reaksi.\n- **Sisi Kanan (Produk):** Hasil atom yang keluar setelah reaksi.\n- **Neraca Wajib Seimbang:** Jumlah setiap jenis atom di sisi reaktan WAJIB SAMA PERSIS dengan jumlah atom di sisi produk!\n\n---\n\nPersamaan reaksi kimia adalah pernyataan simbolis menggunakan rumus-rumus kimia yang menggambarkan perubahan zat-zat pereaksi (reaktan) menjadi zat-zat hasil reaksi (produk).\n\n### 1. Anatomi Komponen Persamaan Reaksi\n\nPerhatikan persamaan reaksi pembakaran gas metana berikut:\n$$\\mathbf{1\\ce{CH4(g)} + 2\\ce{O2(g)} \\to 1\\ce{CO2(g)} + 2\\ce{H2O(g)}}$$\n\n1. **Reaktan (Pereaksi):** Zat mula-mula yang bereaksi, terletak di sebelah **kiri tanda panah** ($\\ce{CH4}$ dan $\\ce{O2}$).\n2. **Produk (Hasil Reaksi):** Zat baru yang dihasilkan setelah reaksi kimia berlangsung, terletak di sebelah **kanan tanda panah** ($\\ce{CO2}$ dan $\\ce{H2O}$).\n3. **Koefisien Stoikiometri (Angka di Depan Rumus):**\n   - Angka $1, 2, 1, 2$ di depan rumus kimia.\n   - Menunjukkan **perbandingan jumlah partikel molekul atau rasio mol** yang terlibat secara kuantitatif dalam reaksi.\n   - Koefisien bernilai $1$ umumnya tidak perlu dituliskan.\n   - **Koefisien reaksi adalah SATU-SATUNYA angka yang boleh diubah-ubah ketika menyetarakan persamaan reaksi!**\n4. **Angka Indeks / Subskrip (Angka Kecil di Bawah):**\n   - Menunjukkan jumlah atom unsur yang terikat secara kimiawi di dalam satu unit molekul (misal angka $4$ pada $\\ce{CH4}$, angka $2$ pada $\\ce{O2}$).\n   - **ANGKA INDEKS DILARANG KERAS DIUBAH!** Mengubah angka indeks berarti mengubah identitas zat kimia (misal mengubah $\\ce{CO2}$ menjadi $\\ce{CO}$ akan mengubah karbon dioksida tak beracun menjadi karbon monoksida yang mematikan).\n5. **Fase Wujud Zat (Simbol dalam Kurung):**\n   - **$(s)$ - *Solid* (Padat):** Zat berwujud padatan atau kristal (misal $\\ce{NaCl(s)}, \\ce{Fe(s)}$).\n   - **$(l)$ - *Liquid* (Cair Murni):** Cairan murni tanpa pelarut (misal $\\ce{H2O(l)}, \\ce{Br2(l)}, \\ce{Hg(l)}$).\n   - **$(g)$ - *Gas* (Fasa Gas):** Berwujud gas atau uap (misal $\\ce{O2(g)}, \\ce{CO2(g)}$).\n   - **$(aq)$ - *Aqueous* (Larutan Berair):** Zat terlarut homogen di dalam air (misal $\\ce{NaCl(aq)}, \\ce{HCl(aq)}$).\n   - Endapan padat terkadang diberi simbol tanda panah ke bawah ($\\downarrow$), dan gas yang terbebas diberi tanda panah ke atas ($\\uparrow$).\n\n---\n\n### 2. Diagram Anatomi Persamaan Reaksi & Neraca Lavoisier\n\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 820 310\" width=\"100%\" height=\"auto\" class=\"max-w-[820px] select-none font-sans\">\n  <defs>\n    <linearGradient id=\"eqBg\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#ffffff\"/>\n      <stop offset=\"100%\" stop-color=\"#f8fafc\"/>\n    </linearGradient>\n    <marker id=\"arrowRxn\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 9 5 L 0 9 z\" fill=\"#2563eb\"/>\n    </marker>\n  </defs>\n\n  <rect width=\"820\" height=\"310\" rx=\"16\" fill=\"url(#eqBg)\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\n\n  <!-- TITLE -->\n  <text x=\"410\" y=\"26\" font-size=\"13\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">ANATOMI PERSAMAAN REAKSI KIMIA &amp; NERACA LAVOISIER</text>\n\n  <!-- DISPLAY PERSAMAAN REAKSI -->\n  <g transform=\"translate(110, 60)\">\n    <rect width=\"600\" height=\"75\" rx=\"12\" fill=\"#f1f5f9\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n\n    <!-- Reaktan CH4 + 2 O2 -->\n    <text x=\"30\" y=\"46\" font-size=\"22\" font-family=\"monospace\" font-weight=\"bold\" fill=\"#0f172a\">\n      CH<tspan font-size=\"15\" dy=\"6\">4</tspan><tspan dy=\"-6\" font-size=\"14\" fill=\"#64748b\">(g)</tspan> + \n      <tspan fill=\"#2563eb\" font-weight=\"extrabold\">2</tspan> O<tspan font-size=\"15\" dy=\"6\">2</tspan><tspan dy=\"-6\" font-size=\"14\" fill=\"#64748b\">(g)</tspan>\n    </text>\n\n    <!-- Panah Reaksi -->\n    <path d=\"M 285 40 L 335 40\" stroke=\"#2563eb\" stroke-width=\"3\" marker-end=\"url(#arrowRxn)\"/>\n\n    <!-- Produk CO2 + 2 H2O -->\n    <text x=\"355\" y=\"46\" font-size=\"22\" font-family=\"monospace\" font-weight=\"bold\" fill=\"#0f172a\">\n      CO<tspan font-size=\"15\" dy=\"6\">2</tspan><tspan dy=\"-6\" font-size=\"14\" fill=\"#64748b\">(g)</tspan> + \n      <tspan fill=\"#2563eb\" font-weight=\"extrabold\">2</tspan> H<tspan font-size=\"15\" dy=\"6\">2</tspan><tspan dy=\"-6\">O</tspan><tspan font-size=\"14\" fill=\"#64748b\">(g)</tspan>\n    </text>\n  </g>\n\n  <!-- CALLOUT LABELS -->\n  <!-- Koefisien Callout -->\n  <g transform=\"translate(245, 45)\">\n    <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-15\" stroke=\"#2563eb\" stroke-width=\"1.5\"/>\n    <rect x=\"-65\" y=\"-36\" width=\"130\" height=\"20\" rx=\"5\" fill=\"#2563eb\"/>\n    <text x=\"0\" y=\"-23\" font-size=\"9\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Koefisien Reaksi (Boleh Diubah)</text>\n  </g>\n\n  <!-- Indeks Subskrip Callout -->\n  <g transform=\"translate(175, 145)\">\n    <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"20\" stroke=\"#dc2626\" stroke-width=\"1.5\"/>\n    <rect x=\"-65\" y=\"20\" width=\"130\" height=\"20\" rx=\"5\" fill=\"#dc2626\"/>\n    <text x=\"0\" y=\"33\" font-size=\"9\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Angka Indeks (Dilarang Diubah!)</text>\n  </g>\n\n  <!-- TIMBANGAN NERACA LAVOISIER (BAWAH) -->\n  <g transform=\"translate(40, 195)\">\n    <!-- Kotak Kiri: Reaktan -->\n    <rect x=\"0\" y=\"0\" width=\"340\" height=\"95\" rx=\"10\" fill=\"#eff6ff\" stroke=\"#bfdbfe\" stroke-width=\"1.2\"/>\n    <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e40af\" text-anchor=\"middle\">TOTAL ATOM RUAS KIRI (REAKTAN)</text>\n    <line x1=\"15\" y1=\"28\" x2=\"325\" y2=\"28\" stroke=\"#bfdbfe\"/>\n    <text x=\"50\" y=\"50\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">Atom Karbon (C): 1</text>\n    <text x=\"50\" y=\"68\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">Atom Hidrogen (H): 4</text>\n    <text x=\"50\" y=\"86\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">Atom Oksigen (O): 2 × 2 = 4</text>\n\n    <!-- Kotak Kanan: Produk -->\n    <rect x=\"400\" y=\"0\" width=\"340\" height=\"95\" rx=\"10\" fill=\"#f0fdf4\" stroke=\"#bbf7d0\" stroke-width=\"1.2\"/>\n    <text x=\"570\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">TOTAL ATOM RUAS KANAN (PRODUK)</text>\n    <line x1=\"415\" y1=\"28\" x2=\"725\" y2=\"28\" stroke=\"#bbf7d0\"/>\n    <text x=\"450\" y=\"50\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">Atom Karbon (C): 1</text>\n    <text x=\"450\" y=\"68\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">Atom Hidrogen (H): 2 × 2 = 4</text>\n    <text x=\"450\" y=\"86\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">Atom Oksigen (O): 2 + (2 × 1) = 4</text>\n\n    <!-- Simbol Sama Dengan Seimbang di Tengah -->\n    <circle cx=\"370\" cy=\"48\" r=\"18\" fill=\"#10b981\"/>\n    <text x=\"370\" y=\"54\" font-size=\"18\" font-weight=\"extrabold\" fill=\"#ffffff\" text-anchor=\"middle\">=</text>\n  </g>\n</svg>\n\n---\n\n### 3. Asas Hukum Kekekalan Massa Antoine Lavoisier (1789)\n\n> *\"Massa zat sebelum reaksi kimia selalu sama dengan massa zat sesudah reaksi kimia dalam sistem tertutup.\"*\n$$\\sum m_{\\text{reaktan}} = \\sum m_{\\text{produk}}$$\n\nKarena atom tidak dapat diciptakan atau dimusnahkan dalam reaksi kimia biasa (hanya terjadi penataan ulang ikatan kimia antar atom), maka konsekuensi mutlak hukum Lavoisier adalah:  \n**Jumlah atom dari setiap unsur di ruas kiri (reaktan) WAJIB SAMA PERSIS dengan jumlah atom unsur tersebut di ruas kanan (produk).** Kondisi inilah yang disebut sebagai **Persamaan Reaksi Setara (*Balanced Equation*)**.\n> [!WARNING]\n> ### ⚠️ Aturan Paling Sakral: DILARANG MENGUBAH ANGKA SUBSKRIP!\n> Saat menyetarakan persamaan reaksi kimia, Anda **HANYA DIPERBOLEHKAN MENGUBAH KOEFISIEN REAKSI** (angka besar di depan rumus kimia). \n> \n> **JANGAN PERNAH MENGUBAH ANGKA SUBSKRIP (angka kecil di bawah rumus):**\n> - Mengubah koefisien: $2\\ce{H2O}$ berarti ada **dua molekul air minum yang menyegarkan**.\n> - Mengubah subskrip: Mengubah $\\ce{H2O}$ menjadi $\\ce{H2O2}$ berarti Anda telah **mengubah identitas zat** dari air minum menjadi hidrogen peroksida (cairan pemutih korosif yang mematikan jika diminum!).\n",
      "keyFormulas": [
        {
          "name": "Hukum Kekekalan Massa Lavoisier",
          "formula": "\\sum m_{\\text{reaktan}} = \\sum m_{\\text{produk}}"
        },
        {
          "name": "Kriteria Persamaan Reaksi Setara",
          "formula": "\\sum N_{\\text{atom reaktan}} = \\sum N_{\\text{atom produk}} \\quad (\\text{untuk tiap unsur})"
        }
      ]
    },
    {
      "tag": "metode-penyetaraan-reaksi-inspeksi-dan-aljabar",
      "tags": [
        "penyetaraan-reaksi",
        "metode-inspeksi-langsung",
        "metode-aljabar-matematis",
        "sistem-persamaan-linier"
      ],
      "title": "Konsep Inti 5: Teknik Penyetaraan Reaksi Kimia (Metode Langsung vs Metode Aljabar Matematis)",
      "summary": "Panduan langkah demi langkah menyetarakan persamaan reaksi sederhana hingga reaksi redoks kompleks.",
      "content": "### 🧮 Algoritma Aljabar Penyetaraan Reaksi Tanpa Coba-Coba (Mental Model)\n\nMetode coba-coba (*trial by inspection*) sangat menyenangkan untuk reaksi sederhana seperti $\\ce{H2 + O2 -> H2O}$. Namun ketika Anda berhadapan dengan reaksi oksidasi-reduksi kompleks seperti:\n$$\\ce{KMnO4 + HCl -> KCl + MnCl2 + Cl2 + H2O}$$\nmenebak koefisien secara acak akan membuang waktu 15 menit berharga di ruang ujian olimpiade dan sering kali berujung buntu!\n\nKimiawan profesional menggunakan **Metode Aljabar Matematis**. Dengan menetapkan koefisien sebagai variabel aljabar ($a, b, c, d, e, f$) dan menyusun sistem persamaan linier kekekalan atom tiap unsur, solusi bilangan bulat pasti akan ditemukan secara deterministik dalam waktu kurang dari 60 detik tanpa keraguan!\n\n---\n\nDua metode utama digunakan untuk menyetarakan koefisien reaksi kimia:\n\n### 1. Metode Inspeksi Langsung (Coba-Coba Terarah / *Trial by Inspection*)\n\nMetode ini sangat cepat dan efektif untuk reaksi sederhana yang melibatkan $3-4$ senyawa.\n- **Urutan Prioritas Penyetaraan Unsur (Kaidah KAHO):**\n  1. **K (Kation / Logam):** Setarakan atom-atom logam terlebih dahulu (seperti $\\ce{Na, Ca, Fe, Al}$).\n  2. **A (Anion / Nonlogam selain H dan O):** Setarakan atom nonlogam utama (seperti $\\ce{C, N, S, P, Cl, Br}$).\n  3. **H (Hidrogen):** Setarakan jumlah atom Hidrogen.\n  4. **O (Oksigen):** Setarakan atom Oksigen paling terakhir (sering kali otomatis setara sebagai validasi akhir).\n\n---\n\n### 2. Metode Aljabar Matematis (Paling Akurat untuk Reaksi Kompleks)\n\nMetode aljabar mengubah persamaan reaksi kimia menjadi sebuah **Sistem Persamaan Linier Homogen**. Metode ini dijamin $100\\%$ selalu menghasilkan jawaban yang benar tanpa bergantung pada coba-coba (*trial and error*).\n\n#### Algoritma 5 Langkah Metode Aljabar:\n\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 270\" width=\"100%\" height=\"auto\" class=\"max-w-[800px] select-none font-sans\">\n  <defs>\n    <linearGradient id=\"stepGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#3b82f6\"/>\n      <stop offset=\"100%\" stop-color=\"#1d4ed8\"/>\n    </linearGradient>\n    <marker id=\"arrowStep\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 9 5 L 0 9 z\" fill=\"#2563eb\"/>\n    </marker>\n  </defs>\n\n  <rect width=\"800\" height=\"270\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#e2e8f0\" stroke-width=\"1.5\"/>\n  <text x=\"400\" y=\"24\" font-size=\"12.5\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">5 LANGKAH SISTEMATIS PENYETARAAN METODE ALJABAR</text>\n\n  <!-- 5 KARTU LANGKAH -->\n  <!-- Langkah 1 -->\n  <g transform=\"translate(20, 50)\">\n    <rect width=\"135\" height=\"150\" rx=\"10\" fill=\"#ffffff\" stroke=\"#93c5fd\" stroke-width=\"1.5\"/>\n    <circle cx=\"24\" cy=\"24\" r=\"14\" fill=\"url(#stepGrad)\"/>\n    <text x=\"24\" y=\"28\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">1</text>\n    <text x=\"46\" y=\"28\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#1e3a8a\">Variabel</text>\n    <line x1=\"12\" y1=\"46\" x2=\"123\" y2=\"46\" stroke=\"#e2e8f0\"/>\n    <text x=\"67\" y=\"68\" font-size=\"8.5\" fill=\"#334155\" text-anchor=\"middle\">Beri koefisien abjad:</text>\n    <text x=\"67\" y=\"84\" font-size=\"9\" font-family=\"monospace\" font-weight=\"bold\" fill=\"#2563eb\" text-anchor=\"middle\">a, b, c, d, e...</text>\n    <text x=\"67\" y=\"104\" font-size=\"8\" fill=\"#64748b\" text-anchor=\"middle\">di depan setiap</text>\n    <text x=\"67\" y=\"118\" font-size=\"8\" fill=\"#64748b\" text-anchor=\"middle\">rumus senyawa.</text>\n  </g>\n  <path d=\"M 160 125 L 180 125\" stroke=\"#2563eb\" stroke-width=\"2\" marker-end=\"url(#arrowStep)\"/>\n\n  <!-- Langkah 2 -->\n  <g transform=\"translate(180, 50)\">\n    <rect width=\"135\" height=\"150\" rx=\"10\" fill=\"#ffffff\" stroke=\"#93c5fd\" stroke-width=\"1.5\"/>\n    <circle cx=\"24\" cy=\"24\" r=\"14\" fill=\"url(#stepGrad)\"/>\n    <text x=\"24\" y=\"28\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">2</text>\n    <text x=\"46\" y=\"28\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#1e3a8a\">Tetapkan a=1</text>\n    <line x1=\"12\" y1=\"46\" x2=\"123\" y2=\"46\" stroke=\"#e2e8f0\"/>\n    <text x=\"67\" y=\"68\" font-size=\"8.5\" fill=\"#334155\" text-anchor=\"middle\">Pilih senyawa yang</text>\n    <text x=\"67\" y=\"82\" font-size=\"8.5\" fill=\"#334155\" text-anchor=\"middle\">paling kompleks,</text>\n    <text x=\"67\" y=\"100\" font-size=\"9\" font-family=\"monospace\" font-weight=\"bold\" fill=\"#059669\" text-anchor=\"middle\">tetapkan a = 1</text>\n    <text x=\"67\" y=\"120\" font-size=\"8\" fill=\"#64748b\" text-anchor=\"middle\">sebagai basis awal.</text>\n  </g>\n  <path d=\"M 320 125 L 340 125\" stroke=\"#2563eb\" stroke-width=\"2\" marker-end=\"url(#arrowStep)\"/>\n\n  <!-- Langkah 3 -->\n  <g transform=\"translate(340, 50)\">\n    <rect width=\"135\" height=\"150\" rx=\"10\" fill=\"#ffffff\" stroke=\"#93c5fd\" stroke-width=\"1.5\"/>\n    <circle cx=\"24\" cy=\"24\" r=\"14\" fill=\"url(#stepGrad)\"/>\n    <text x=\"24\" y=\"28\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">3</text>\n    <text x=\"46\" y=\"28\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#1e3a8a\">Persamaan</text>\n    <line x1=\"12\" y1=\"46\" x2=\"123\" y2=\"46\" stroke=\"#e2e8f0\"/>\n    <text x=\"67\" y=\"68\" font-size=\"8.5\" fill=\"#334155\" text-anchor=\"middle\">Susun neraca atom:</text>\n    <text x=\"67\" y=\"86\" font-size=\"8.5\" font-weight=\"bold\" fill=\"#b45309\" text-anchor=\"middle\">Σ Kiri = Σ Kanan</text>\n    <text x=\"67\" y=\"104\" font-size=\"8\" fill=\"#64748b\" text-anchor=\"middle\">untuk setiap unsur</text>\n    <text x=\"67\" y=\"118\" font-size=\"8\" fill=\"#64748b\" text-anchor=\"middle\">secara terpisah.</text>\n  </g>\n  <path d=\"M 480 125 L 500 125\" stroke=\"#2563eb\" stroke-width=\"2\" marker-end=\"url(#arrowStep)\"/>\n\n  <!-- Langkah 4 -->\n  <g transform=\"translate(500, 50)\">\n    <rect width=\"135\" height=\"150\" rx=\"10\" fill=\"#ffffff\" stroke=\"#93c5fd\" stroke-width=\"1.5\"/>\n    <circle cx=\"24\" cy=\"24\" r=\"14\" fill=\"url(#stepGrad)\"/>\n    <text x=\"24\" y=\"28\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">4</text>\n    <text x=\"46\" y=\"28\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#1e3a8a\">Substitusi</text>\n    <line x1=\"12\" y1=\"46\" x2=\"123\" y2=\"46\" stroke=\"#e2e8f0\"/>\n    <text x=\"67\" y=\"68\" font-size=\"8.5\" fill=\"#334155\" text-anchor=\"middle\">Selesaikan aljabar</text>\n    <text x=\"67\" y=\"82\" font-size=\"8.5\" fill=\"#334155\" text-anchor=\"middle\">secara substitusi /</text>\n    <text x=\"67\" y=\"96\" font-size=\"8.5\" fill=\"#334155\" text-anchor=\"middle\">eliminasi hingga</text>\n    <text x=\"67\" y=\"114\" font-size=\"8.5\" font-weight=\"bold\" fill=\"#2563eb\" text-anchor=\"middle\">semua nilai ketemu.</text>\n  </g>\n  <path d=\"M 640 125 L 660 125\" stroke=\"#2563eb\" stroke-width=\"2\" marker-end=\"url(#arrowStep)\"/>\n\n  <!-- Langkah 5 -->\n  <g transform=\"translate(660, 50)\">\n    <rect width=\"125\" height=\"150\" rx=\"10\" fill=\"#ffffff\" stroke=\"#10b981\" stroke-width=\"1.5\"/>\n    <circle cx=\"24\" cy=\"24\" r=\"14\" fill=\"#10b981\"/>\n    <text x=\"24\" y=\"28\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">5</text>\n    <text x=\"46\" y=\"28\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#065f46\">Bulatkan</text>\n    <line x1=\"12\" y1=\"46\" x2=\"113\" y2=\"46\" stroke=\"#e2e8f0\"/>\n    <text x=\"62\" y=\"68\" font-size=\"8.5\" fill=\"#334155\" text-anchor=\"middle\">Jika ada pecahan,</text>\n    <text x=\"62\" y=\"84\" font-size=\"8.5\" font-weight=\"bold\" fill=\"#059669\" text-anchor=\"middle\">kalikan KPK</text>\n    <text x=\"62\" y=\"104\" font-size=\"8\" fill=\"#64748b\" text-anchor=\"middle\">penyebut agar bulat</text>\n    <text x=\"62\" y=\"118\" font-size=\"8\" fill=\"#64748b\" text-anchor=\"middle\">terkecil (integer).</text>\n  </g>\n\n  <!-- KETERANGAN BAWAH -->\n  <g transform=\"translate(20, 218)\">\n    <rect width=\"765\" height=\"36\" rx=\"8\" fill=\"#1e293b\"/>\n    <text x=\"382\" y=\"22\" font-size=\"10\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\">\n      Kaidah Emas: Koefisien reaksi final WAJIB merupakan bilangan bulat positif terkecil (tidak boleh berupa pecahan)!\n    </text>\n  </g>\n</svg>\n\n#### Contoh Aplikasi Cepat pada Pembakaran Gas Propana ($\\ce{C3H8}$):\n$$\\ce{a C3H8 + b O2 -> c CO2 + d H2O}$$\n1. Tetapkan senyawa terkompleks $a = 1$.\n2. Neraca Karbon (C): $3 \\times a = 1 \\times c \\implies c = 3(1) = 3$.\n3. Neraca Hidrogen (H): $8 \\times a = 2 \\times d \\implies d = \\frac{8(1)}{2} = 4$.\n4. Neraca Oksigen (O): $2 \\times b = 2c + 1d = 2(3) + 4 = 10 \\implies b = 5$.\n5. Koefisien bulat setara: **$1\\ce{C3H8} + 5\\ce{O2} \\to 3\\ce{CO2} + 4\\ce{H2O}$**.\n> [!TIP]\n> ### 🧭 Urutan Emas Penyetaraan Metode Inspeksi Cerdas (K-A-C-H-O)\n> Jika Anda memilih metode inspeksi cepat, patuhi urutan prioritas penyetaraan berikut agar tidak berputar-putar dalam lingkaran setan:\n> 1. **Kation / Logam:** Setarakan atom logam terlebih dahulu (misal Na, K, Ca, Fe, Al).\n> 2. **Anion / Nonlogam Utama:** Setarakan atom nonlogam selain C, H, dan O (misal Cl, S, N, P).\n> 3. **Atom Karbon (C):** Jika terdapat senyawa organik/hidrokarbon, setarakan atom C.\n> 4. **Atom Hidrogen (H):** Setarakan atom H setelah kerangka logam dan nonlogam rapi.\n> 5. **Atom Oksigen (O) TERAKHIR:** Atom oksigen biasanya hadir di banyak spesi dan dalam bentuk gas bebas ($\\ce{O2}$). Jadikan atom O sebagai **kunci penutup dan verifikator neraca**!\n",
      "keyFormulas": [
        {
          "name": "Kaidah Prioritas KAHO",
          "formula": "\\text{Kation (Logam)} \\to \\text{Anion (Nonlogam)} \\to \\text{Hidrogen} \\to \\text{Oksigen}"
        }
      ]
    },
    {
      "tag": "persamaan-ionik-bersih-dan-reaksi-pengendapan",
      "tags": [
        "persamaan-ionik-lengkap",
        "persamaan-ionik-bersih",
        "net-ionic-equation",
        "ion-penonton",
        "spectator-ions",
        "aturan-kelarutan"
      ],
      "title": "Konsep Inti 6: Persamaan Reaksi Ionik Lengkap, Persamaan Ionik Bersih & Eliminasi Ion Penonton",
      "summary": "Menguraikan elektrolit kuat terlarut, mengidentifikasi ion penonton yang tidak berubah, serta menyusun persamaan ionik bersih pada reaksi presipitasi.",
      "content": "Sebagian besar reaksi kimia anorganik di laboratorium dan di dalam tubuh makhluk hidup berlangsung dalam fase larutan air (*aqueous solution*).\n\n### 1. Tiga Bentuk Penulisan Reaksi dalam Larutan Air\n\n1. **Persamaan Molekuler (*Molecular Equation*):**\n   Seluruh reaktan dan produk dituliskan sebagai rumus senyawa molekuler netral lengkap dengan simbol fasanya:\n    $$ce{AgNO3(aq) + NaCl(aq) -> AgCl(s)downarrow + NaNO3(aq)}$$\n2. **Persamaan Ionik Lengkap (*Complete Ionic Equation*):**\n   Semua senyawa **elektrolit kuat yang larut sempurna dalam air ($(aq)$)** diuraikan menjadi kation dan anion terpisahnya:\n    $$ce{Ag+(aq) + NO3-(aq) + Na+(aq) + Cl-(aq) -> AgCl(s)downarrow + Na+(aq) + NO3-(aq)}$$\n   *(Senyawa padat yang mengendap seperti $\\ce{AgCl(s)}$, cairan murni seperti $\\ce{H2O(l)}$, dan gas seperti $\\ce{CO2(g)}$ TIDAK BOLEH diuraikan menjadi ion!).*\n3. **Persamaan Ionik Bersih (*Net Ionic Equation*):**\n   Persamaan yang diperoleh setelah **mencoret (mengeliminasi) seluruh Ion Penonton (*Spectator Ions*)** yang muncul identik di kedua sisi ruas persamaan:\n    $$mathbf{ce{Ag+(aq) + Cl-(aq) -> AgCl(s)downarrow}}$$\n\n---\n\n### 2. Definisi Fisik Ion Penonton (*Spectator Ions*)\n\nIon penonton adalah ion-ion yang hadir di dalam bejana reaksi larutan tetapi **tidak mengalami perubahan kimiawi apapun** (baik wujud fasa, bilangan oksidasi, maupun lingkungan ikatannya).\n- Pada reaksi di atas, ion $\\ce{Na+(aq)}$ dan ion $\\ce{NO3-(aq)}$ hanya melayang-layang bebas di dalam air dari awal reaksi hingga akhir reaksi tanpa ikut membentuk endapan.\n- **Persamaan ionik bersih fokus hanya pada spesi kimia yang benar-benar bereaksi!**\n\n---\n\n### 3. Visualisasi Mikroskopis Reaksi Pengendapan & Eliminasi Ion Penonton\n\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 820 310\" width=\"100%\" height=\"auto\" class=\"max-w-[820px] select-none font-sans\">\n  <defs>\n    <linearGradient id=\"flaskGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#ffffff\"/>\n      <stop offset=\"100%\" stop-color=\"#f0f9ff\"/>\n    </linearGradient>\n    <radialGradient id=\"pbIon\" cx=\"35%\" cy=\"35%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#fbcfe8\"/>\n      <stop offset=\"60%\" stop-color=\"#db2777\"/>\n      <stop offset=\"100%\" stop-color=\"#831843\"/>\n    </radialGradient>\n    <radialGradient id=\"iIon\" cx=\"35%\" cy=\"35%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#fef08a\"/>\n      <stop offset=\"60%\" stop-color=\"#eab308\"/>\n      <stop offset=\"100%\" stop-color=\"#713f12\"/>\n    </radialGradient>\n    <radialGradient id=\"specK\" cx=\"35%\" cy=\"35%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#e2e8f0\"/>\n      <stop offset=\"60%\" stop-color=\"#94a3b8\"/>\n      <stop offset=\"100%\" stop-color=\"#475569\"/>\n    </radialGradient>\n  </defs>\n\n  <rect width=\"820\" height=\"310\" rx=\"16\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\n  <text x=\"410\" y=\"24\" font-size=\"12.5\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">MEKANISME PRESIPITASI IONIK &amp; ELIMINASI ION PENONTON</text>\n\n  <!-- BEAKER GELAS KIMIA REAKSI -->\n  <g transform=\"translate(40, 50)\">\n    <!-- Gelas Beaker -->\n    <rect x=\"0\" y=\"0\" width=\"220\" height=\"210\" rx=\"8\" fill=\"url(#flaskGrad)\" stroke=\"#64748b\" stroke-width=\"2\"/>\n    <!-- Permukaan Larutan Air -->\n    <rect x=\"2\" y=\"30\" width=\"216\" height=\"178\" rx=\"6\" fill=\"#e0f2fe\" opacity=\"0.6\"/>\n    <line x1=\"2\" y1=\"30\" x2=\"218\" y2=\"30\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n    <text x=\"110\" y=\"20\" font-size=\"9\" font-weight=\"bold\" fill=\"#0369a1\" text-anchor=\"middle\">Campuran Pb(NO₃)₂ + KI</text>\n\n    <!-- Ion Penonton Melayang (K+ dan NO3-) -->\n    <g transform=\"translate(40, 60)\">\n      <circle r=\"12\" fill=\"url(#specK)\"/><text x=\"0\" y=\"4\" font-size=\"9\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">K⁺</text>\n    </g>\n    <g transform=\"translate(170, 75)\">\n      <circle r=\"12\" fill=\"url(#specK)\"/><text x=\"0\" y=\"4\" font-size=\"9\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">K⁺</text>\n    </g>\n    <g transform=\"translate(70, 110)\">\n      <rect x=\"-14\" y=\"-8\" width=\"28\" height=\"16\" rx=\"4\" fill=\"#94a3b8\"/><text x=\"0\" y=\"4\" font-size=\"8\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">NO₃⁻</text>\n    </g>\n    <g transform=\"translate(160, 125)\">\n      <rect x=\"-14\" y=\"-8\" width=\"28\" height=\"16\" rx=\"4\" fill=\"#94a3b8\"/><text x=\"0\" y=\"4\" font-size=\"8\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">NO₃⁻</text>\n    </g>\n\n    <!-- Endapan Kuning di Dasar Beaker: PbI2(s) -->\n    <path d=\"M 10 185 Q 110 170 210 185 L 218 208 L 2 208 Z\" fill=\"#facc15\" stroke=\"#eab308\" stroke-width=\"1.5\"/>\n    <text x=\"110\" y=\"198\" font-size=\"10.5\" font-weight=\"extrabold\" fill=\"#713f12\" text-anchor=\"middle\">Endapan Kuning PbI₂ (s) ↓</text>\n  </g>\n\n  <!-- PANEL KANAN: TRANSFORMASI 3 PERSAMAAN -->\n  <g transform=\"translate(290, 50)\">\n    <!-- 1. Persamaan Molekuler -->\n    <rect width=\"490\" height=\"60\" rx=\"8\" fill=\"#ffffff\" stroke=\"#cbd5e1\" stroke-width=\"1\"/>\n    <text x=\"12\" y=\"18\" font-size=\"9.5\" font-weight=\"bold\" fill=\"#0284c7\">1. Persamaan Molekuler:</text>\n    <text x=\"12\" y=\"40\" font-size=\"11\" font-family=\"monospace\" font-weight=\"bold\" fill=\"#0f172a\">\n      Pb(NO₃)₂(aq) + 2 KI(aq) → PbI₂(s)↓ + 2 KNO₃(aq)\n    </text>\n\n    <!-- 2. Persamaan Ionik Lengkap -->\n    <g transform=\"translate(0, 70)\">\n      <rect width=\"490\" height=\"65\" rx=\"8\" fill=\"#ffffff\" stroke=\"#cbd5e1\" stroke-width=\"1\"/>\n      <text x=\"12\" y=\"18\" font-size=\"9.5\" font-weight=\"bold\" fill=\"#64748b\">2. Persamaan Ionik Lengkap (Identifikasi Ion Penonton):</text>\n      <text x=\"12\" y=\"40\" font-size=\"10\" font-family=\"monospace\" fill=\"#0f172a\">\n        Pb²⁺(aq) + <tspan fill=\"#dc2626\" text-decoration=\"line-through\">2 NO₃⁻</tspan> + <tspan fill=\"#dc2626\" text-decoration=\"line-through\">2 K⁺</tspan> + 2 I⁻ → PbI₂(s)↓ + <tspan fill=\"#dc2626\" text-decoration=\"line-through\">2 K⁺</tspan> + <tspan fill=\"#dc2626\" text-decoration=\"line-through\">2 NO₃⁻</tspan>\n      </text>\n      <text x=\"12\" y=\"56\" font-size=\"8.5\" font-weight=\"bold\" fill=\"#dc2626\">Coret K⁺ dan NO₃⁻ (keduanya adalah Ion Penonton yang tidak bereaksi!)</text>\n    </g>\n\n    <!-- 3. Persamaan Ionik Bersih -->\n    <g transform=\"translate(0, 145)\">\n      <rect width=\"490\" height=\"65\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#10b981\" stroke-width=\"1.5\"/>\n      <text x=\"12\" y=\"18\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">3. PERSAMAAN IONIK BERSIH (NET IONIC EQUATION):</text>\n      <text x=\"12\" y=\"44\" font-size=\"13\" font-family=\"monospace\" font-weight=\"extrabold\" fill=\"#065f46\">\n        Pb²⁺(aq) + 2 I⁻(aq) → PbI₂(s) ↓\n      </text>\n    </g>\n  </g>\n\n  <!-- FOOTER -->\n  <g transform=\"translate(40, 275)\">\n    <rect width=\"740\" height=\"26\" rx=\"6\" fill=\"#1e293b\"/>\n    <text x=\"370\" y=\"17\" font-size=\"9.5\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">\n      Kunci: Hanya ion-ion yang membentuk ikatan baru (endapan, cairan murni, atau gas) yang dituliskan dalam persamaan ionik bersih!\n    </text>\n  </g>\n</svg>",
      "keyFormulas": [
        {
          "name": "Persamaan Ionik Bersih Presipitasi",
          "formula": "\\ce{M^{n+}(aq) + n X^-(aq) -> MX_n(s)\\downarrow}"
        }
      ]
    }
  ],
  worked_examples: WORKED_EXAMPLES_TOPIC_104
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
    worked_examples: WORKED_EXAMPLES_TOPIC_105,
  },
];

export const SMA_MATERIALS_FASE_E: SmaMaterialItem[] = BASE_SMA_MATERIALS_FASE_E.map((mat) => ({
  ...mat,
  prerequisites: mat.prerequisites.map((b) => ({
    ...b,
    checkpointQuizzes: b.checkpointQuizzes || CHECKPOINTS_FASE_E[b.tag],
  })),
  core_concepts: mat.core_concepts.map((b) => ({
    ...b,
    checkpointQuizzes: b.checkpointQuizzes || CHECKPOINTS_FASE_E[b.tag],
  })),
  worked_examples: mat.worked_examples.map((b) => ({
    ...b,
    checkpointQuizzes: b.checkpointQuizzes || CHECKPOINTS_FASE_E[b.tag],
  })),
}));
