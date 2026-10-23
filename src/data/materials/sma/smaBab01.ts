/**
 * smaBab01.ts
 * Bab 1: Hakikat Ilmu Kimia, Kimia Hijau, dan Struktur Atom
 * Jenjang: SMA/MA Kelas X (Fase E)
 * Standar: Arsitektur Pedagogis v3 (Adaptasi SaveMyExams)
 */

import type { SmaMaterialItem } from '../../smaMaterialsData';

export const SMA_BAB_01: SmaMaterialItem = {
  id: 101,
  topic_number: 1,
  grade: 'Kelas 10',
  semester: 1,
  curriculumPhase: 'Fase E',
  title: 'Hakikat Ilmu Kimia, Kimia Hijau, dan Struktur Atom',
  slug: 'hakikat-kimia-kimia-hijau-struktur-atom',
  category: 'Kimia Dasar & Struktur Atom',
  level: 'SMA',
  readTimeMinutes: 40,
  summary:
    'Modul pembelajaran modular web Kimia Kelas X Fase E: Klasifikasi materi zat murni vs campuran; keselamatan kerja lab GHS; evolusi model atom dari Dalton hingga mekanika kuantum; notasi nuklida, partikel subatomik dan kelimpahan isotop; empat bilangan kuantum dan konfigurasi elektron Aufbau; serta implementasi 12 prinsip kimia hijau dan ekonomi atom.',
  allTags: [
    'hakikat-kimia',
    'metode-ilmiah',
    'klasifikasi-materi',
    'unsur-senyawa-campuran',
    'keselamatan-kerja-lab',
    'simbol-bahaya-ghs',
    'model-atom',
    'dalton-thomson-rutherford-bohr',
    'mekanika-kuantum',
    'nomor-atom-dan-massa',
    'isotop-isobar-isoton',
    'massa-atom-relatif',
    'bilangan-kuantum',
    'konfigurasi-elektron',
    'aturan-aufbau-hund-pauli',
    'kimia-hijau',
    '12-prinsip-green-chemistry',
    'ekonomi-atom',
  ],
  prerequisites: [
    {
      tag: 'sma-01-metode-klasifikasi',
      tags: ['metode-ilmiah', 'klasifikasi-materi', 'keselamatan-lab', 'simbol-ghs'],
      title: 'Subbab 1.1: Metode Ilmiah, Keselamatan Kerja Lab, dan Klasifikasi Materi',
      summary: 'Tahapan investigasi ilmiah, protokol K3 dan piktogram GHS, serta pembedaan materi pada tingkat partikel.',
      content: `#### 1. Intuisi: Dari Fenomena ke Tingkat Partikel

Bayangkan kamu memiliki dua gelas berisi cairan bening tak berwarna: satu gelas berisi air garam dapur dan satu gelas lagi berisi air murni ($\\ce{H2O}$). Secara kasat mata keduanya tampak identik. Namun, ketika dipanaskan hingga mendidih, air garam menyisakan butiran kristal putih padat di dasar wadah, sedangkan air murni menguap seluruhnya tanpa meninggalkan residu apapun.

Perbedaan tersebut terjadi karena susunan partikel penyusunnya. Pada air garam, molekul air dan ion-ion natrium serta klorida hanya bercampur secara fisik tanpa saling mengikat membentuk ikatan kimia baru. Panas memisahkan molekul air yang mudah menguap dari ion garam yang terikat kuat. Sebaliknya, pada air murni, atom hidrogen dan atom oksigen terikat kuat melalui ikatan kovalen di dalam molekul $\\ce{H2O}$. Pemisahan atom hidrogen dan oksigen dari air tidak dapat dilakukan dengan pemanasan biasa, melainkan memerlukan reaksi dekomposisi kimiawi seperti elektrolisis air.

Perhatikan perbandingan susunan partikel zat murni dan campuran pada **Gambar 1.1** berikut:

<svg viewBox="0 0 800 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sma-b01-klasifikasi-materi-title sma-b01-klasifikasi-materi-desc" data-diagram="sma-b01-klasifikasi-materi" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="sma-b01-klasifikasi-materi-title">Klasifikasi Materi Berdasarkan Susunan Partikel</title>
  <desc id="sma-b01-klasifikasi-materi-desc">Empat kotak pembanding susunan partikel: unsur monoatomik, unsur diatomik, senyawa molekuler, dan campuran heterogen.</desc>
  
  <!-- KOTAK 1: UNSUR MONOATOMIK -->
  <rect x="20" y="24" width="172" height="156" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <circle cx="60" cy="65" r="12" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="140" cy="75" r="12" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="70" cy="130" r="12" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="145" cy="140" r="12" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <rect x="20" y="190" width="172" height="50" rx="6" fill="#ececec" stroke="#1f2937" stroke-width="1.5" />
  <text x="106" y="210" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">UNSUR MONOATOMIK</text>
  <text x="106" y="230" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">(GAS HE, NE)</text>

  <!-- KOTAK 2: UNSUR DIATOMIK -->
  <rect x="212" y="24" width="172" height="156" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <circle cx="260" cy="70" r="8" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="276" cy="70" r="8" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="320" cy="105" r="8" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="336" cy="105" r="8" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="265" cy="140" r="8" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="281" cy="140" r="8" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5" />
  <rect x="212" y="190" width="172" height="50" rx="6" fill="#ececec" stroke="#1f2937" stroke-width="1.5" />
  <text x="298" y="210" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">UNSUR DIATOMIK</text>
  <text x="298" y="230" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">(GAS O₂, N₂)</text>

  <!-- KOTAK 3: SENYAWA -->
  <rect x="404" y="24" width="172" height="156" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <circle cx="470" cy="70" r="12" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="458" cy="85" r="8" fill="#ffffff" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="482" cy="85" r="8" fill="#ffffff" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="520" cy="125" r="12" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="508" cy="140" r="8" fill="#ffffff" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="532" cy="140" r="8" fill="#ffffff" stroke="#1f2937" stroke-width="1.5" />
  <rect x="404" y="190" width="172" height="50" rx="6" fill="#ececec" stroke="#1f2937" stroke-width="1.5" />
  <text x="490" y="210" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">SENYAWA MURNI</text>
  <text x="490" y="230" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">(AIR H₂O)</text>

  <!-- KOTAK 4: CAMPURAN -->
  <rect x="596" y="24" width="172" height="156" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <circle cx="640" cy="65" r="12" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="720" cy="75" r="8" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="736" cy="75" r="8" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="675" cy="130" r="12" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="663" cy="145" r="8" fill="#ffffff" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="687" cy="145" r="8" fill="#ffffff" stroke="#1f2937" stroke-width="1.5" />
  <rect x="596" y="190" width="172" height="50" rx="6" fill="#ececec" stroke="#1f2937" stroke-width="1.5" />
  <text x="682" y="210" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">CAMPURAN</text>
  <text x="682" y="230" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">(ZAT BERBEDA)</text>
</svg>
<p class="text-center text-xs font-semibold text-slate-500 mt-2">Gambar 1.1: Representasi Submikroskopik Unsur Monoatomik, Unsur Diatomik, Senyawa, dan Campuran.</p>

Bagaimana cara kimiawan membuktikan hipotesis dan mengidentifikasi perbedaan zat-zat tersebut secara objektif di laboratorium?

---

#### 2. Formalisasi: Konsep Baku & Hubungan Matematis

Kimia adalah cabang ilmu pengetahuan alam yang mempelajari komposisi, struktur, sifat materi, serta perubahan energi yang menyertainya.

##### A. Tahapan Metode Ilmiah & Desain Variabel
Penyelidikan kimiawi dijalankan secara empiris melalui tahapan metode ilmiah yang sistematis:
1. **Perumusan Masalah**: Menetapkan pertanyaan spesifik berbasis observasi yang dapat diuji (*falsifiable*).
2. **Penyusunan Kerangka Teori & Hipotesis**: Merumuskan dugaan ilmiah sementara yang menghubungkan variabel penelitian.
3. **Desain Eksperimen & Triad Variabel**:
   - **Variabel Bebas (Independen)**: Faktor yang sengaja diubah oleh peneliti untuk melihat dampaknya.
   - **Variabel Terikat (Dependen)**: Parameter hasil respon yang diukur atau diamati.
   - **Variabel Kontrol**: Seluruh faktor lingkungan dan fisis yang dijaga tetap konstan agar pengujian berlangsung adil (*fair test*).
4. **Pengumpulan & Analisis Data**: Mengolah hasil pengamatan kualitatif maupun kuantitatif.
5. **Penarikan Kesimpulan**: Menilai apakah data eksperimen mendukung atau menggugurkan hipotesis.

##### B. Klasifikasi Materi
Materi dikelompokkan ke dalam dua domain utama:
- **Zat Tunggal (Zat Murni)**: Materi dengan komposisi kimiawi tetap dan homogen di seluruh bagian.
  - **Unsur**: Zat murni yang tidak dapat diuraikan lagi menjadi zat lebih sederhana melalui reaksi kimia biasa (contoh: $\\ce{Fe}, \\ce{Cu}, \\ce{O2}, \\ce{N2}$).
  - **Senyawa**: Gabungan kimiawi dua atau lebih unsur berbeda dengan perbandingan massa tetap sesuai hukum perbandingan tetap (contoh: $\\ce{H2O}, \\ce{NaCl}, \\ce{CO2}$).
- **Campuran**: Gabungan fisik dua atau lebih zat murni dengan komposisi bervariasi tanpa membentuk ikatan kimia baru.
  - **Campuran Homogen (Larutan)**: Campuran satu fasa seragam dengan diameter partikel $< 1\\text{ nm}$ (contoh: sirup, udara bersih, kuningan).
  - **Campuran Heterogen**: Campuran dengan batas fasa fisik yang teramati (suspensi dan sebagian besar koloid).

> [!SYARAT_BATAS]
> ### ⚖️ Syarat Batas & Asumsi
> **Kondisi Berlaku:** Komposisi senyawa selalu tetap mengikuti perbandingan atom bulat dan sederhana (Hukum Proust).
> **Batas Keberlakuan:** Komposisi campuran dapat bervariasi tanpa batas stoikiometri. Molekul diatomik seperti $\\ce{O2}$ atau $\\ce{N2}$ tetap tergolong **unsur**, bukan senyawa, karena hanya terdiri dari satu jenis atom.

##### 🧪 Uji Konsep Kualitatif
**Pertanyaan:** Sebongkah gas nitrogen ($\\ce{N2}$) dan gas karbon monoksida ($\\ce{CO}$) sama-sama tersusun atas dua atom per molekul. Klasifikasikan masing-masing gas ke dalam unsur atau senyawa, dan jelaskan alasan fisisnya!  
*Jawaban & Analisis:* Gas nitrogen ($\\ce{N2}$) adalah **unsur** diatomik karena kedua atom penyusunnya identik (sama-sama atom nitrogen). Gas karbon monoksida ($\\ce{CO}$) adalah **senyawa** karena molekulnya tersusun dari dua atom yang jenisnya berbeda (karbon dan oksigen).

---

#### 3. Taktik Soal: Penerapan & Pemeriksaan Logika

##### 📝 Soal Contoh
**Soal:** Sekelompok siswa menyelidiki pengaruh konsentrasi asam klorida terhadap waktu pelarutan pita magnesium. Pada tiga tabung reaksi disiapkan $2\\text{ cm}$ pita magnesium yang massanya sama. Ke dalam tabung I dimasukkan $10\\text{ mL}$ $\\ce{HCl}\\ 0.5\\text{ M}$, tabung II dimasukkan $10\\text{ mL}$ $\\ce{HCl}\\ 1.0\\text{ M}$, dan tabung III dimasukkan $10\\text{ mL}$ $\\ce{HCl}\\ 2.0\\text{ M}$. Suhu ruangan dijaga pada $25^\\circ\\text{C}$.  
Tentukan variabel bebas, variabel terikat, dan dua variabel kontrol dalam penelitian tersebut!

**Strategi Langkah demi Langkah:**
1. *Identifikasi Faktor yang Diubah Peneliti (Variabel Bebas):*  
   Konsentrasi asam klorida berbeda-beda pada setiap tabung ($0.5\\text{ M}$, $1.0\\text{ M}$, $2.0\\text{ M}$). Maka **Variabel Bebas** = Konsentrasi larutan $\\ce{HCl}$.
2. *Identifikasi Respon yang Diukur (Variabel Terikat):*  
   Hasil yang diamati akibat perubahan konsentrasi adalah lama reaksi berlangsung. Maka **Variabel Terikat** = Waktu pelarutan pita magnesium.
3. *Identifikasi Faktor yang Dibuat Sama (Variabel Kontrol):*  
   Faktor yang dikendalikan konstan meliputi panjang/massa pita magnesium ($2\\text{ cm}$), volume larutan $\\ce{HCl}$ ($10\\text{ mL}$), dan suhu lingkungan ($25^\\circ\\text{C}$).

> [!TITIK_RAWAN]
> ### ⚠️ Titik Rawan Kesalahan (Common Pitfalls)
> - **Mengacaukan Molekul Diatomik dengan Senyawa:** Banyak siswa mengira $\\ce{Cl2}$ atau $\\ce{H2}$ adalah senyawa karena melihat angka indeks $2$. Senyawa wajib memiliki minimal dua jenis unsur berbeda.
> - **Menyamakan Variabel Kontrol dengan Kelompok Kontrol:** Variabel kontrol adalah parameter perlakuan yang disamakan; sedangkan kelompok kontrol adalah sampel pembanding tanpa diberi variabel bebas.

> [!PEMERIKSAAN_LOGIKA]
> ### 🔍 Pemeriksaan Logika (Sanity Check) & Koneksi
> - **Pemeriksaan Logika:** Pastikan hanya ada satu variabel bebas utama dalam satu desain eksperimen agar kesimpulan kausalitas sah (*valid*).
> - **Koneksi Lintas Bab:** Pengendalian variabel konsentrasi dan waktu reaksi ini akan diformulasikan secara kuantitatif pada Bab 5 (Laju Reaksi).

##### 🎯 Latihan Terbimbing
**Soal Latihan 1:** Klasifikasikan masing-masing materi berikut ke dalam unsur, senyawa, atau campuran: (a) Kawat tembaga murni, (b) Gas amonia ($\\ce{NH3}$), (c) Udara bersih di pegunungan!  
**Soal Latihan 2:** Berikan nama piktogram bahaya GHS yang wajib dicantumkan pada botol penyimpanan larutan asam sulfat pekat!  
*Kunci Jawaban Akhir:*  
1. (a) Unsur; (b) Senyawa; (c) Campuran homogen.  
2. Piktogram Korosif (Corrosive).`,
      keyFormulas: [
        { name: 'Kriteria Zat Murni vs Campuran', formula: '\\text{Senyawa: Rasio Massa Tetap} \\quad \\text{Campuran: Rasio Variabel}' },
      ],
    },
    {
      tag: 'sma-01-model-atom',
      tags: ['model-atom', 'dalton', 'thomson', 'rutherford', 'bohr', 'mekanika-kuantum'],
      title: 'Subbab 1.2: Perkembangan Model Atom (Dalton hingga Mekanika Kuantum Dasar)',
      summary: 'Evolusi pemikiran struktur atom berbasis bukti eksperimen: tabung sinar katoda, hamburan sinar alfa, dan tingkat energi orbital.',
      content: `#### 1. Intuisi: Dari Fenomena ke Tingkat Partikel

Mengapa model ilmiah tentang atom terus berubah dari abad ke-19 hingga abad ke-20? Para ilmuwan tidak pernah dapat melihat satu atom secara langsung dengan mata telanjang. Mereka menembakkan partikel dan medan listrik ke dalam atom, lalu menganalisis jejak pantulannya, persis seperti menebak bentuk benda di dalam ruangan gelap dengan melemparkan bola tenis.

Ketika John Dalton mengusulkan atom sebagai bola pejal yang tak dapat dibagi lagi, model tersebut mampu menjelaskan hukum kekekalan massa. Namun ketika J.J. Thomson menemukan elektron bermuatan negatif yang keluar dari tabung sinar katoda, terbukti bahwa atom memiliki struktur internal. Lompatan terbesar terjadi ketika Ernest Rutherford menembakkan partikel alfa bermuatan positif ke lempeng emas tipis. Sebagian besar partikel meluncur lurus menembus lempeng seolah melewati ruang hampa, tetapi sebagian kecil partikel dibelokkan pada sudut sangat tajam. Fakta ini membuktikan bahwa muatan positif dan hampir seluruh massa atom terpusat pada satu titik inti yang sangat kecil di tengah ruang hampa atom.

Perhatikan perbandingan evolusi kelima model atom pada **Gambar 1.2** berikut:

<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sma-b01-model-atom-title sma-b01-model-atom-desc" data-diagram="sma-b01-model-atom" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="sma-b01-model-atom-title">Evolusi Lima Model Atom Utama</title>
  <desc id="sma-b01-model-atom-desc">Model bola pejal Dalton, model kismis Thomson, model inti Rutherford, model lintasan Bohr, dan awan orbital mekanika kuantum.</desc>

  <!-- 1. DALTON -->
  <rect x="22" y="24" width="136" height="190" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <circle cx="90" cy="80" r="38" fill="#cfd4d9" stroke="#1f2937" stroke-width="2" />
  <rect x="28" y="146" width="124" height="52" rx="6" fill="#ececec" stroke="#1f2937" stroke-width="1.5" />
  <text x="90" y="166" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">1. DALTON (1803)</text>
  <text x="90" y="186" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">BOLA PEJAL</text>

  <!-- 2. THOMSON -->
  <rect x="177" y="24" width="136" height="190" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <circle cx="245" cy="80" r="38" fill="#fde58a" stroke="#1f2937" stroke-width="2" />
  <circle cx="230" cy="70" r="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="260" cy="75" r="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="245" cy="95" r="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <rect x="183" y="146" width="124" height="52" rx="6" fill="#ececec" stroke="#1f2937" stroke-width="1.5" />
  <text x="245" y="166" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">2. THOMSON (1897)</text>
  <text x="245" y="186" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">ROTI KISMIS</text>

  <!-- 3. RUTHERFORD -->
  <rect x="332" y="24" width="136" height="190" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <circle cx="400" cy="80" r="38" fill="#ffffff" stroke="#1f2937" stroke-width="1.5" stroke-dasharray="4 3" />
  <circle cx="400" cy="80" r="12" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="375" cy="55" r="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <rect x="338" y="146" width="124" height="52" rx="6" fill="#ececec" stroke="#1f2937" stroke-width="1.5" />
  <text x="400" y="166" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">3. RUTHERFORD</text>
  <text x="400" y="186" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">INTI &amp; RUANG</text>

  <!-- 4. BOHR -->
  <rect x="487" y="24" width="136" height="190" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <circle cx="555" cy="80" r="12" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="555" cy="80" r="24" fill="none" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="555" cy="80" r="38" fill="none" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="555" cy="56" r="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <rect x="493" y="146" width="124" height="52" rx="6" fill="#ececec" stroke="#1f2937" stroke-width="1.5" />
  <text x="555" y="166" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">4. BOHR (1913)</text>
  <text x="555" y="186" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">ORBIT KULIT</text>

  <!-- 5. MEKANIKA KUANTUM -->
  <rect x="642" y="24" width="136" height="190" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <ellipse cx="710" cy="80" rx="38" ry="24" fill="#d6f0fb" stroke="#2f7fc1" stroke-width="1.5" />
  <ellipse cx="710" cy="80" rx="24" ry="38" fill="#d6f0fb" stroke="#2f7fc1" stroke-width="1.5" />
  <circle cx="710" cy="80" r="12" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <rect x="648" y="146" width="124" height="52" rx="6" fill="#ececec" stroke="#1f2937" stroke-width="1.5" />
  <text x="710" y="166" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">5. KUANTUM 3D</text>
  <text x="710" y="186" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">AWAN ORBITAL</text>
</svg>
<p class="text-center text-xs font-semibold text-slate-500 mt-2">Gambar 1.2: Kronologi Perkembangan Model Atom Berbasis Bukti Eksperimen.</p>

Bagaimana lintasan pasti pada model Bohr digantikan oleh konsep probabilitas awan elektron mekanika kuantum?

---

#### 2. Formalisasi: Konsep Baku & Hubungan Matematis

**Model atom** adalah representasi konseptual struktur internal atom yang dirumuskan untuk menjelaskan fenomena fisika dan kimia.

##### Intisari Karakteristik dan Kelemahan Model Atom:
1. **Model Dalton (1803)**:
   - *Postulat*: Atom adalah partikel terkecil materi yang berbentuk bola pejal dan tidak dapat dibagi, diciptakan, atau dimusnahkan.
   - *Kelemahan*: Gagal menjelaskan adanya partikel subatomik (elektron, proton, neutron) dan keberadaan isotop.
2. **Model Thomson (1897)**:
   - *Postulat*: Atom berupa bola pejal bermuatan positif yang di dalamnya tersebar elektron bermuatan negatif secara merata, menyerupai roti kismis.
   - *Kelemahan*: Gagal menjelaskan pemusatan muatan positif di inti berdasarkan hasil hamburan sinar alfa.
3. **Model Rutherford (1911)**:
   - *Postulat*: Atom sebagian besar berupa ruang hampa dengan inti sangat kecil bermuatan positif di pusatnya yang dikelilingi oleh elektron pada jarak relatif jauh.
   - *Kelemahan*: Bertentangan dengan elektrodinamika klasik Maxwell; elektron yang mengelilingi inti memancarkan radiasi elektromagnetik sehingga energinya menyusut dan elektron seharusnya jatuh ke inti.
4. **Model Bohr (1913)**:
   - *Postulat*: Elektron mengitari inti pada lintasan melingkar stasioner tertentu (kulit atom $n = 1, 2, 3...$) tanpa memancarkan energi. Elektron hanya memancarkan atau menyerap energi kuantum saat berpindah lintasan:
     $$\Delta E = E_{\text{akhir}} - E_{\text{awal}} = h \nu$$
     *Makna Fisis Rumus:* Selisih energi antar-kulit atom terkuantisasi secara diskret dan setara dengan energi foton cahaya yang diserap atau dipancarkan.
   - *Kelemahan*: Hanya akurat untuk atom atau ion berelektron tunggal (seperti $\\ce{H}, \\ce{He+}$, $\\ce{Li^2+}$) dan gagal menjelaskan efek medan magnet pada spektrum atom banyak elektron.
5. **Model Mekanika Kuantum (Modern)**:
   - Berlandaskan prinsip dualisme gelombang-partikel De Broglie dan asas ketidakpastian Heisenberg.
   - Posisi dan momentum elektron tidak dapat ditentukan secara pasti secara simultan; elektron digambarkan sebagai awan kebolehjadian ruang tiga dimensi yang disebut **orbital**.

> [!SYARAT_BATAS]
> ### ⚖️ Syarat Batas & Asumsi
> **Kondisi Berlaku:** Model Bohr hanya berlaku untuk sistem atom berelektron tunggal ($1e^-$).
> **Batas Keberlakuan:** Jangan pernah menggunakan persamaan spektrum Bohr untuk menghitung tingkat energi atom berlektron banyak (seperti $\\ce{Li}, \\ce{C}, \\ce{Fe}$). Untuk atom berelektron banyak, model orbital mekanika kuantum adalah model yang berlaku.

##### 🧪 Uji Konsep Kualitatif
**Pertanyaan:** Apa perbedaan fundamental antara konsep *orbit* menurut Niels Bohr dan konsep *orbital* menurut teori mekanika gelombang kuantum?  
*Jawaban & Analisis:* **Orbit** adalah lintasan melingkar 2 dimensi yang pasti dengan jarak tertentu dari inti atom. **Orbital** adalah ruang probabilitas 3 dimensi tempat peluang tertinggi ditemukannya elektron di sekitar inti atom.

---

#### 3. Taktik Soal: Penerapan & Pemeriksaan Logika

##### 📝 Soal Contoh
**Soal:** Pada eksperimen penembakan lempeng tipis emas menggunakan partikel alfa oleh Geiger dan Marsden atas arahan Ernest Rutherford, diperoleh data pengamatan:
- $99.9\\%$ partikel alfa diteruskan lurus tanpa pembelokan.
- Sekitar $0.01\\%$ partikel alfa dibelokkan dengan sudut tumpul atau dipantulkan kembali.  
Jelaskan kesimpulan Rutherford mengenai struktur internal atom berdasarkan kedua data tersebut!

**Strategi Langkah demi Langkah:**
1. *Analisis Fakta Partikel yang Lurus:*  
   Hampir seluruh partikel alfa meluncur tanpa hambatan membuktikan bahwa sebagian besar volume atom adalah **ruang hampa**.
2. *Analisis Fakta Partikel yang Terpantul:*  
   Partikel alfa yang bermassa relatif besar ($4\\text{ sma}$) dan bermuatan positif $+2$ hanya dapat dipantulkan kembali jika menabrak sesuatu yang sangat rapat, masif, dan bermuatan positif sejenis.
3. *Simpulan Rutherford:*  
   Muatan positif dan hampir seluruh massa atom terkonsentrasi pada suatu pusat bermassa padat yang sangat kecil yang disebut **inti atom** (*nucleus*).

> [!TITIK_RAWAN]
> ### ⚠️ Titik Rawan Kesalahan (Common Pitfalls)
> - **Menyebut Elektron Jatuh ke Inti pada Model Bohr:** Siswa sering keliru menyatakan elektron jatuh ke inti pada model Bohr. Pada model Bohr, elektron stabil di orbit stasioner; keruntuhan elektron ke inti adalah kelemahan model Rutherford menurut fisika klasik.

> [!PEMERIKSAAN_LOGIKA]
> ### 🔍 Pemeriksaan Logika (Sanity Check) & Koneksi
> - **Pemeriksaan Logika:** Diameter inti atom ($\sim 10^{-15}\\text{ m}$) sekitar $100.000$ kali lebih kecil daripada diameter atom keseluruhan ($\sim 10^{-10}\\text{ m}$).
> - **Koneksi Lintas Bab:** Tingkat energi diskret Bohr melandasi pengelompokan kulit atom pada penulisan konfigurasi elektron di Subbab 1.4 dan susunan periode tabel periodik pada Bab 2.

##### 🎯 Latihan Terbimbing
**Soal Latihan 1:** Mengapa model atom Bohr tidak dapat diterapkan secara langsung pada atom helium netral ($\\ce{He}$)?  
**Soal Latihan 2:** Sebutkan fenomena laboratorium yang berhasil membantah postulat Dalton bahwa atom tidak dapat dibagi lagi!  
*Kunci Jawaban Akhir:*  
1. Karena helium netral memiliki 2 elektron, sehingga timbul gaya tolak elektrostatik antarelektron yang tidak diakomodasi oleh model Bohr.  
2. Penemuan sinar katoda (elektron) oleh J.J. Thomson.`,
      keyFormulas: [
        { name: 'Kuantisasi Energi Foton Bohr', formula: '\\Delta E = h \\nu = \\frac{h c}{\\lambda}' },
      ],
    },
    {
      tag: 'sma-01-partikel-isotop',
      tags: ['proton', 'neutron', 'elektron', 'nomor-atom', 'nomor-massa', 'isotop-isobar-isoton'],
      title: 'Subbab 1.3: Partikel Penyusun Atom, Nomor Atom, Nomor Massa, serta Isotop',
      summary: 'Notasi nuklida AZX, perhitungan proton-neutron-elektron pada ion, dan rata-rata tertimbang massa atom relatif Ar.',
      content: `#### 1. Intuisi: Dari Fenomena ke Tingkat Partikel

Ketika kamu menimbang segelas air murni, pernahkah kamu menyadari bahwa atom-atom hidrogen dan oksigen di dalamnya tidak memiliki berat yang seragam? Di alam, sebagian kecil atom hidrogen memiliki massa dua kali lipat lebih berat daripada atom hidrogen biasa, dan sebagian kecil atom oksigen memiliki massa 18 satuan dibanding oksigen normal bermassa 16.

Mengapa hal ini bisa terjadi tanpa mengubah sifat kimianya? Identitas kimiawi suatu unsur sepenuhnya ditentukan oleh jumlah proton di dalam inti atomnya. Selama jumlah proton di inti tetap sama, atom tersebut memiliki nomor atom yang sama dan membentuk ikatan kimia yang identik. Yang membedakan massa atom-atom tersebut hanyalah jumlah neutron di dalam intinya. Atom-atom yang memiliki jumlah proton sama tetapi jumlah neutron berbeda disebut isotop.

Perhatikan perbandingan anatomi dua isotop karbon pada **Gambar 1.3** berikut:

<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sma-b01-anatomi-atom-title sma-b01-anatomi-atom-desc" data-diagram="sma-b01-anatomi-atom" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="sma-b01-anatomi-atom-title">Anatomi Nuklida Isotop Karbon-12 dan Karbon-14</title>
  <desc id="sma-b01-anatomi-atom-desc">Perbandingan inti atom karbon-12 dengan 6 neutron vs karbon-14 dengan 8 neutron, keduanya memiliki 6 proton dan 6 elektron.</desc>

  <!-- PANEL KIRI: KARBON-12 -->
  <rect x="30" y="24" width="350" height="190" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <text x="205" y="52" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">ISOTOP KARBON-12 (¹²₆C)</text>
  <rect x="120" y="70" width="170" height="70" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
  <text x="205" y="94" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">6 PROTON (p)</text>
  <text x="205" y="118" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">6 NEUTRON (n)</text>
  <rect x="70" y="156" width="270" height="42" rx="6" fill="#ececec" stroke="#1f2937" stroke-width="1.5" />
  <text x="205" y="182" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">6 ELEKTRON (e⁻) PADA KULIT</text>

  <!-- PANEL KANAN: KARBON-14 -->
  <rect x="420" y="24" width="350" height="190" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <text x="595" y="52" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">ISOTOP KARBON-14 (¹⁴₆C)</text>
  <rect x="510" y="70" width="170" height="70" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
  <text x="595" y="94" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">6 PROTON (p)</text>
  <text x="595" y="118" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">8 NEUTRON (n)</text>
  <rect x="460" y="156" width="270" height="42" rx="6" fill="#ececec" stroke="#1f2937" stroke-width="1.5" />
  <text x="595" y="182" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">6 ELEKTRON (e⁻) PADA KULIT</text>
</svg>
<p class="text-center text-xs font-semibold text-slate-500 mt-2">Gambar 1.3: Struktur Inti Isotop Karbon-12 vs Karbon-14.</p>

Bagaimana cara menentukan massa rata-rata suatu unsur di tabel periodik dari kelimpahan berbagai isotopnya di alam?

---

#### 2. Formalisasi: Konsep Baku & Hubungan Matematis

Atom tersusun atas tiga partikel dasar subatomik:
1. **Proton ($p$)**: Bermuatan positif $+1$, bermassa $\approx 1.007\\text{ sma}$, terletak di dalam inti atom.
2. **Neutron ($n$)**: Netral (tanpa muatan), bermassa $\approx 1.008\\text{ sma}$, terletak di dalam inti atom.
3. **Elektron ($e^-$)**: Bermuatan negatif $-1$, bermassa sangat kecil ($\approx 1/1836\\text{ sma}$), bergerak di luar inti atom.

##### A. Notasi Nuklida Baku
Notasi spesi atom dan ion dinyatakan dengan format:
$$^{A}_{Z}\text{X}^{q\pm}$$
- $Z$ = **Nomor Atom** = Jumlah proton dalam inti atom ($Z = p$). Pada atom netral, $Z = e^-$.
- $A$ = **Nomor Massa** = Jumlah proton ditambah neutron ($A = p + n$).
- $q\pm$ = Muatan listrik ion. Jumlah elektron dihitung dengan:
  $$e^- = Z - q$$
  *Makna Fisis Rumus:* Kation ($q+$) terbentuk akibat pelepasan elektron sehingga jumlah elektron berkurang; anion ($q-$) terbentuk akibat penangkapan elektron sehingga jumlah elektron bertambah.

##### B. Pengelompokan Spesies Nuklida
- **Isotop**: Atom-atom dari unsur yang sama ($Z$ sama) dengan nomor massa ($A$) berbeda (contoh: $^{12}_{6}\ce{C}$ dan $^{14}_{6}\ce{C}$).
- **Isobar**: Atom-atom dari unsur berbeda ($Z$ berbeda) yang memiliki nomor massa ($A$) sama (contoh: $^{14}_{6}\ce{C}$ dan $^{14}_{7}\ce{N}$).
- **Isoton**: Atom-atom dari unsur berbeda yang memiliki jumlah neutron ($n = A - Z$) sama (contoh: $^{13}_{6}\ce{C}$ [$n=7$] dan $^{14}_{7}\ce{N}$ [$n=7$]).
- **Isoelektron**: Spesi-spesi atom atau ion yang memiliki jumlah elektron total persis sama (contoh: $\ce{Na+}$, $\ce{Mg^2+}$, $\ce{F-}$, $\ce{Ne}$, semuanya memiliki $10e^-$).

##### C. Massa Atom Relatif Rata-Rata ($A_r$)
Massa atom relatif suatu unsur dihitung dari rata-rata tertimbang kelimpahan persentase isotop-isotopnya di alam:
$$A_r(\text{X}) = \sum \left( \frac{\% \text{ Kelimpahan}_i}{100\%} \times \text{Massa Isotop}_i \right)$$
*Makna Fisis Rumus:* Nilai $A_r$ pada tabel periodik mencerminkan kontribusi massa setiap isotop proporsional terhadap populasinya di alam.

> [!SYARAT_BATAS]
> ### ⚖️ Syarat Batas & Asumsi
> **Kondisi Berlaku:** Pada reaksi kimia biasa, pembentukan ion hanya melibatkan serah-terima elektron valensi di kulit luar.
> **Batas Keberlakuan:** Jumlah proton di dalam inti atom tidak pernah berubah dalam reaksi kimia. Perubahan jumlah proton hanya terjadi pada reaksi fisi/fusi nuklir.

##### 🧪 Uji Konsep Kualitatif
**Pertanyaan:** Unsur klorin memiliki dua isotop stabil di alam: $^{35}\ce{Cl}$ dan $^{37}\ce{Cl}$. Jika nilai $A_r$ klorin pada tabel periodik adalah $35.45$, isotop manakah yang memiliki kelimpahan persentase lebih besar di alam?  
*Jawaban & Analisis:* Isotop $^{35}\ce{Cl}$. Nilai rata-rata tertimbang $35.45$ berada jauh lebih dekat ke angka $35$ daripada ke $37$, menandakan bahwa populasi $^{35}\ce{Cl}$ jauh mendominasi kelimpahan klorin di alam (sekitar $75\%$).

---

#### 3. Taktik Soal: Penerapan & Pemeriksaan Logika

##### 📝 Soal Contoh
**Soal:** Tentukan jumlah proton, neutron, dan elektron yang terdapat pada ion $^{56}_{26}\ce{Fe^3+}$!

**Strategi Langkah demi Langkah:**
1. *Menentukan Jumlah Proton:*  
   Dari notasi $^{56}_{26}\ce{Fe^3+}$, nomor atom $Z = 26$. Maka jumlah proton $p = 26$.
2. *Menentukan Jumlah Neutron:*  
   Nomor massa $A = 56$. Jumlah neutron $n = A - Z = 56 - 26 = 30$.
3. *Menentukan Jumlah Elektron:*  
   Ion bermuatan $+3$ ($q = +3$). Maka elektron yang tersisa adalah $e^- = Z - q = 26 - 3 = 23$.

> [!TITIK_RAWAN]
> ### ⚠️ Titik Rawan Kesalahan (Common Pitfalls)
> - **Menambahkan Elektron pada Kation:** Siswa sering keliru menambahkan muatan kation ke nomor atom ($26 + 3 = 29$). Ingat bahwa kation terbentuk karena **kehilangan** elektron bermuatan negatif.
> - **Mengurangi Proton saat Membentuk Ion:** Muatan $+3$ bukan berarti proton bertambah $3$, melainkan elektron berkurang $3$. Jumlah proton selalu tetap sama dengan nomor atom $Z$.

> [!PEMERIKSAAN_LOGIKA]
> ### 🔍 Pemeriksaan Logika (Sanity Check) & Koneksi
> - **Pemeriksaan Logika:** Untuk ion positif, jumlah proton harus selalu melebihi jumlah elektron ($p > e^-$). Pada kasus ini $26 > 23$, selaras dengan muatan $+3$.
> - **Koneksi Lintas Bab:** Jumlah elektron pada kation ini menjadi landasan penulisan konfigurasi elektron ion transisi pada Subbab 1.4 dan reaksi redoks pada Bab 9.

##### 🎯 Latihan Terbimbing
**Soal Latihan 1:** Tentukan jumlah proton, neutron, dan elektron pada ion sulfida $^{32}_{16}\ce{S^2-}$!  
**Soal Latihan 2:** Tembaga terdiri atas isotop $^{63}\ce{Cu}$ ($69.1\%$) dan $^{65}\ce{Cu}$ ($30.9\%$). Hitung massa atom relatif ($A_r$) tembaga!  
*Kunci Jawaban Akhir:*  
1. $p = 16$, $n = 16$, $e^- = 18$.  
2. $A_r(\ce{Cu}) = (0.691 \times 63) + (0.309 \times 65) = \mathbf{63.62}$.`,
      keyFormulas: [
        { name: 'Nomor Massa', formula: 'A = p + n' },
        { name: 'Elektron Ion', formula: 'e^- = Z - q' },
        { name: 'Massa Atom Relatif Rata-Rata', formula: 'A_r = \\sum (\\%_i \\times A_i)' },
      ],
    },
    {
      tag: 'sma-01-bilangan-kuantum-konfigurasi',
      tags: ['bilangan-kuantum', 'orbital', 'konfigurasi-elektron', 'aufbau', 'hund', 'pauli'],
      title: 'Subbab 1.4: Bilangan Kuantum, Bentuk Orbital, dan Konfigurasi Elektron',
      summary: 'Empat bilangan kuantum (n, l, m, s), bentuk orbital s-p-d, dan tiga asas pengisian elektron Aufbau, Hund, dan larangan Pauli.',
      content: `#### 1. Intuisi: Dari Fenomena ke Tingkat Partikel

Bayangkan sebuah hotel megah dengan aturan kamar yang sangat ketat. Tamu yang datang sendirian akan memilih kamar di lantai paling bawah terlebih dahulu karena lebih mudah dijangkau dan stabil. Jika ada beberapa kamar kosong di lantai yang sama, para tamu akan menempati kamar sendiri-sendiri terlebih dahulu sebelum bersedia berbagi kamar berdua dengan orang lain.

Begitulah elektron menata dirinya di dalam atom. Elektron memiliki muatan negatif sejenis yang saling tolak-menolak. Untuk meminimalkan tolakan elektrostatik dan mencapai tingkat energi potensial serendah mungkin, elektron mengisi subkulit dari tingkat energi terendah menuju yang lebih tinggi. Di dalam subkulit yang sama, elektron menempati orbital kosong secara paralel sebelum berpasangan. Ruang probabilitas tempat elektron beredar ini memiliki geometri tiga dimensi yang khas: orbital $s$ berbentuk bola simetris, sedangkan orbital $p$ berbentuk balon terpilin pada tiga sumbu ruang ($p_x, p_y, p_z$).

Perhatikan bentuk tiga dimensi orbital dan urutan tingkat energi Aufbau pada **Gambar 1.4** berikut:

<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sma-b01-orbital-konfigurasi-title sma-b01-orbital-konfigurasi-desc" data-diagram="sma-b01-orbital-konfigurasi" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="sma-b01-orbital-konfigurasi-title">Bentuk Orbital Dasar dan Tingkat Energi Aufbau</title>
  <desc id="sma-b01-orbital-konfigurasi-desc">Bentuk orbital s berbentuk bola, orbital p berbentuk balon terpilin pada tiga sumbu, dan diagram tangga energi pengisian elektron.</desc>

  <!-- PANEL KIRI: ORBITAL S -->
  <rect x="24" y="24" width="220" height="190" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <circle cx="134" cy="95" r="42" fill="#8fd3ef" stroke="#2f7fc1" stroke-width="2" />
  <line x1="74" y1="95" x2="194" y2="95" stroke="#1f2937" stroke-width="1.5" stroke-dasharray="4 3" />
  <line x1="134" y1="35" x2="134" y2="155" stroke="#1f2937" stroke-width="1.5" stroke-dasharray="4 3" />
  <rect x="40" y="155" width="188" height="46" rx="6" fill="#ececec" stroke="#1f2937" stroke-width="1.5" />
  <text x="134" y="172" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">ORBITAL S (BOLA)</text>
  <text x="134" y="190" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">L = 0, M = 0</text>

  <!-- PANEL TENGAH: ORBITAL P -->
  <rect x="264" y="24" width="250" height="190" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <ellipse cx="345" cy="95" rx="32" ry="18" fill="#f5a3a3" stroke="#d64545" stroke-width="1.5" />
  <ellipse cx="433" cy="95" rx="32" ry="18" fill="#f5a3a3" stroke="#d64545" stroke-width="1.5" />
  <circle cx="389" cy="95" r="4" fill="#1f2937" />
  <line x1="300" y1="95" x2="478" y2="95" stroke="#1f2937" stroke-width="1.5" stroke-dasharray="4 3" />
  <line x1="389" y1="35" x2="389" y2="155" stroke="#1f2937" stroke-width="1.5" stroke-dasharray="4 3" />
  <rect x="280" y="155" width="218" height="46" rx="6" fill="#ececec" stroke="#1f2937" stroke-width="1.5" />
  <text x="389" y="172" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">ORBITAL P (TERPILIN)</text>
  <text x="389" y="190" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">L = 1, M = -1, 0, +1</text>

  <!-- PANEL KANAN: TANGGA AUFBAU -->
  <rect x="534" y="24" width="242" height="190" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <text x="655" y="50" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">URUTAN TINGKAT ENERGI</text>
  <line x1="560" y1="135" x2="610" y2="135" stroke="#2f7fc1" stroke-width="3" />
  <text x="585" y="130" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">1S</text>
  <line x1="630" y1="115" x2="680" y2="115" stroke="#2f7fc1" stroke-width="3" />
  <text x="655" y="110" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">2S</text>
  <line x1="700" y1="95" x2="750" y2="95" stroke="#d64545" stroke-width="3" />
  <text x="725" y="90" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">2P</text>
  <rect x="548" y="155" width="214" height="46" rx="6" fill="#b5efb0" stroke="#3f8f46" stroke-width="1.5" />
  <text x="655" y="172" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">PRINSIP AUFBAU</text>
  <text x="655" y="190" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">1S &lt; 2S &lt; 2P &lt; 3S</text>
</svg>
<p class="text-center text-xs font-semibold text-slate-500 mt-2">Gambar 1.4: Bentuk Geometri Orbital s dan p serta Tangga Urutan Energi Aufbau.</p>

Bagaimana kombinasi empat bilangan kuantum dapat mengidentifikasi setiap elektron secara spesifik di dalam atom?

---

#### 2. Formalisasi: Konsep Baku & Hubungan Matematis

**Bilangan kuantum** adalah himpunan empat nilai numerik yang mendeskripsikan tingkat energi, bentuk, orientasi ruang, dan arah rotasi elektron di sekitar inti atom.

##### A. Empat Bilangan Kuantum:
1. **Bilangan Kuantum Utama ($n$)**: Menentukan tingkat energi utama (kulit atom). Bernilai bulat positif: $n = 1, 2, 3, 4...$
2. **Bilangan Kuantum Azimut / Anguler ($l$)**: Menentukan bentuk geometris orbital (subkulit). Bernilai dari $0$ hingga $(n - 1)$:
   - $l = 0 \rightarrow$ subkulit **$s$** (bola, kapasitas maks $2e^-$)
   - $l = 1 \rightarrow$ subkulit **$p$** (balon terpilin, kapasitas maks $6e^-$)
   - $l = 2 \rightarrow$ subkulit **$d$** (balon daun semanggi, kapasitas maks $10e^-$)
   - $l = 3 \rightarrow$ subkulit **$f$** (kapasitas maks $14e^-$)
3. **Bilangan Kuantum Magnetik ($m$ atau $m_l$)**: Menentukan orientasi orbital dalam ruang 3 dimensi. Bernilai dari $-l$ hingga $+l$ (total $2l + 1$ orbital).
4. **Bilangan Kuantum Spin ($s$ atau $m_s$)**: Menentukan arah momentum sudut rotasi elektron pada porosnya. Bernilai $+1/2$ (arah atas $\\uparrow$) atau $-1/2$ (arah bawah $\downarrow$).

##### B. Tiga Asas Penataan Konfigurasi Elektron:
1. **Prinsip Aufbau**: Elektron mengisi orbital dari tingkat energi terendah ke tingkat energi tertinggi:
   $$1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d < 5p < 6s...$$
   *Makna Fisis Rumus:* Urutan ini menunjukkan bahwa elektron mengisi orbital secara bertahap dari keadaan energi potensial paling rendah yang stabil menuju ke tingkat energi yang lebih tinggi.
2. **Larangan Pauli**: Tidak boleh ada dua elektron dalam satu atom yang memiliki keempat bilangan kuantum ($n, l, m, s$) yang sama persis. Satu orbital maksimal dihuni oleh 2 elektron dengan spin berlawanan.
3. **Kaidah Hund**: Pada pengisian orbital-orbital berenergi sama (degenerat), elektron menempati masing-masing orbital secara sendiri-sendiri dengan spin paralel sebelum mulai berpasangan.

##### C. Anomali Kestabilan Subkulit $d^5$ dan $d^{10}$:
Subkulit $d$ yang terisi tepat setengah penuh ($d^5$) atau terisi penuh ($d^{10}$) memiliki simetri bola muatan dan energi pertukaran (*exchange energy*) yang menghasilkan stabilitas termodinamika ekstra:
- $\ce{_{24}Cr}: [\ce{Ar}]\ 4s^1 3d^5$ (bukan $[\ce{Ar}]\ 4s^2 3d^4$)
- $\ce{_{29}Cu}: [\ce{Ar}]\ 4s^1 3d^{10}$ (bukan $[\ce{Ar}]\ 4s^2 3d^9$)

> [!SYARAT_BATAS]
> ### ⚖️ Syarat Batas & Asumsi
> **Kondisi Berlaku:** Urutan pengisian elektron Aufbau berlaku pada atom netral keadaan dasar (*ground state*).
> **Batas Keberlakuan:** Ketika atom logam transisi membentuk kation, elektron selalu dilepaskan terlebih dahulu dari kulit dengan bilangan kuantum utama terbesar ($n$ terbesar), bukan dari subkulit yang terakhir diisi. Pada kation besi, elektron pada subkulit $4s$ dilepas sebelum $3d$.

##### 🧪 Uji Konsep Kualitatif
**Pertanyaan:** Jelaskan mengapa konfigurasi elektron kation $\ce{Fe^2+}$ ($Z=26$) adalah $[\ce{Ar}]\ 3d^6$, bukan $[\ce{Ar}]\ 4s^2 3d^4$!  
*Jawaban & Analisis:* Saat membentuk ion positif, elektron yang dilepaskan terlebih dahulu adalah elektron valensi pada kulit terluar ($n=4$, yaitu subkulit $4s$) karena jarak rata-ratanya paling jauh dari inti dan gaya tarik intinya paling lemah. Pelepasan 2 elektron dari $4s^2$ menyisakan subkulit $3d^6$.

---

#### 3. Taktik Soal: Penerapan & Pemeriksaan Logika

##### 📝 Soal Contoh
**Soal:** Tentukan keempat bilangan kuantum ($n, l, m, s$) untuk elektron terakhir pada atom klorin ($\ce{_{17}Cl}$) pada keadaan dasar!

**Strategi Langkah demi Langkah:**
1. *Tulis Konfigurasi Elektron Aufbau:*  
   $$\ce{_{17}Cl} = 1s^2\ 2s^2\ 2p^6\ 3s^2\ 3p^5$$
2. *Identifikasi Subkulit Elektron Terakhir:*  
   Elektron terakhir berada pada subkulit $3p^5$.
   - Angka depan kulit: $n = 3$.
   - Subkulit $p$: $l = 1$.
3. *Gambar Diagram Orbital Subkulit $3p$ ($m = -1, 0, +1$):*  
   - Kotak $m = -1$: terisi 2 elektron ($\\uparrow\\downarrow$)
   - Kotak $m = 0$: terisi 2 elektron ($\\uparrow\\downarrow$)
   - Kotak $m = +1$: terisi 1 elektron ($\\uparrow$)
4. *Tentukan Nilai $m$ dan $s$ Elektron Terakhir:*  
   Elektron ke-5 masuk ke kotak $m = 0$ dengan arah spin ke bawah ($\downarrow$).  
   Maka: $n = 3, l = 1, m = 0, s = -1/2$.

> [!TITIK_RAWAN]
> ### ⚠️ Titik Rawan Kesalahan (Common Pitfalls)
> - **Salah Urutan Pelepasan Elektron Ion Transisi:** Banyak siswa menuliskan konfigurasi $\ce{Fe^2+}$ sebagai $[\ce{Ar}]\ 4s^2 3d^4$ karena mengira elektron yang dilepas adalah elektron terakhir di subkulit $3d$. Ingat aturan: elektron pada kulit $4s$ wajib lepas terlebih dahulu.
> - **Nilai Azimut Tertukar:** Ingat bahwa nilai $l$ selalu dimulai dari $0$ untuk orbital $s$, bukan dari $1$.

> [!PEMERIKSAAN_LOGIKA]
> ### 🔍 Pemeriksaan Logika (Sanity Check) & Koneksi
> - **Pemeriksaan Logika:** Nilai $l$ tidak pernah boleh sama atau lebih besar dari $n$ ($l < n$). Nilai $|m|$ tidak pernah boleh melebihi $l$ ($-l \le m \le +l$).
> - **Koneksi Lintas Bab:** Posisi elektron valensi $3s^2 3p^5$ ini secara langsung menentukan letak klorin pada Golongan VIIA (Kolom 17) dan Periode 3 tabel periodik di Bab 2.

##### 🎯 Latihan Terbimbing
**Soal Latihan 1:** Tuliskan konfigurasi elektron atom tembaga ($\ce{_{29}Cu}$) dan tentukan jumlah elektron tak berpasangannya!  
**Soal Latihan 2:** Tentukan keempat bilangan kuantum elektron terakhir pada atom natrium ($\ce{_{11}Na}$)!  
*Kunci Jawaban Akhir:*  
1. $\ce{_{29}Cu} = [\ce{Ar}]\ 4s^1 3d^{10}$, memiliki 1 elektron tak berpasangan (pada orbital $4s$).  
2. $n = 3, l = 0, m = 0, s = +1/2$.`,
      keyFormulas: [
        { name: 'Rentang Bilangan Kuantum Azimut', formula: 'l = 0, 1, 2, \\dots, (n - 1)' },
        { name: 'Rentang Bilangan Kuantum Magnetik', formula: 'm_l = -l, \\dots, 0, \\dots, +l' },
        { name: 'Kapasitas Maksimal Elektron per Kulit', formula: 'N_{\\text{maks}} = 2n^2' },
      ],
    },
    {
      tag: 'sma-01-kimia-hijau',
      tags: ['kimia-hijau', 'green-chemistry', '12-prinsip', 'ekonomi-atom', 'keberlanjutan'],
      title: 'Subbab 1.5: Prinsip Kimia Hijau dan Peran Kimia dalam Pembangunan Berkelanjutan',
      summary: '12 prinsip Green Chemistry (Anastas & Warner), pencegahan limbah, dan kuantifikasi persentase ekonomi atom.',
      content: `#### 1. Intuisi: Dari Fenomena ke Tingkat Partikel

Di masa lalu, efisiensi suatu pabrik kimia hanya diukur dari satu parameter: seberapa banyak produk yang terkumpul di wadah penampung. Namun pendekatan tersebut menyimpan masalah lingkungan yang serius. Suatu reaksi sintesis obat bisa saja memiliki rendemen hasil 90%, tetapi di balik itu menghasilkan berton-ton garam berbahaya sebagai produk samping yang dibuang ke sungai.

Kimia Hijau (*Green Chemistry*) hadir untuk merancang reaksi kimia sejak tingkat molekuler agar seluruh atom pereaksi masuk menjadi produk yang bermanfaat. Analogi sederhananya adalah memasak: proses memotong buah mangga menghasilkan limbah kulit dan biji yang terbuang; sedangkan memeras jeruk menghasilkan sari buah utuh dengan residu minimal. Pada tingkat partikel, reaksi kimia yang baik adalah reaksi yang tidak melepaskan atom-atom pereaksi menjadi zat buangan beracun.

Perhatikan perbandingan reaksi ber-ekonomi atom tinggi vs rendah pada **Gambar 1.5** berikut:

<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sma-b01-kimia-hijau-title sma-b01-kimia-hijau-desc" data-diagram="sma-b01-kimia-hijau" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="sma-b01-kimia-hijau-title">Konsep Ekonomi Atom Reaksi Kimia Hijau</title>
  <desc id="sma-b01-kimia-hijau-desc">Reaksi adisi dengan ekonomi atom 100% tanpa produk limbah vs reaksi substitusi yang menghasilkan produk sampingan limbah.</desc>

  <!-- PANEL KIRI: EKONOMI ATOM 100% (ADISI) -->
  <rect x="24" y="24" width="364" height="190" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="36" y="36" width="340" height="34" rx="6" fill="#b5efb0" stroke="#3f8f46" stroke-width="1.5" />
  <text x="206" y="58" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">REAKSI ADISI (EKONOMI ATOM = 100%)</text>
  <text x="206" y="105" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">C₂H₄ + H₂ → C₂H₆</text>
  <rect x="46" y="130" width="320" height="58" rx="6" fill="#ececec" stroke="#1f2937" stroke-width="1.5" />
  <text x="206" y="152" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">SEMUA ATOM PEREAKSI</text>
  <text x="206" y="172" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">MENJADI PRODUK TARGET NIR-LIMBAH</text>

  <!-- PANEL KANAN: EKONOMI ATOM RENDAH (SUBSTITUSI) -->
  <rect x="412" y="24" width="364" height="190" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="424" y="36" width="340" height="34" rx="6" fill="#f5a3a3" stroke="#d64545" stroke-width="1.5" />
  <text x="594" y="58" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">REAKSI DENGAN LIMBAH ATOM (&lt; 100%)</text>
  <text x="594" y="105" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">CH₄ + Cl₂ → CH₃Cl + HCl</text>
  <rect x="434" y="130" width="320" height="58" rx="6" fill="#ececec" stroke="#1f2937" stroke-width="1.5" />
  <text x="594" y="152" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">PRODUK SAMPINGAN HCl DIBUANG</text>
  <text x="594" y="172" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">SEBAGAI LIMBAH ANORGANIK</text>
</svg>
<p class="text-center text-xs font-semibold text-slate-500 mt-2">Gambar 1.5: Komparasi Reaksi dengan Ekonomi Atom 100% vs Reaksi Menghasilkan Limbah.</p>

Bagaimana kimiawan mengukur efisiensi penggabungan atom ini secara matematis melalui rumus ekonomi atom?

---

#### 2. Formalisasi: Konsep Baku & Hubungan Matematis

**Kimia Hijau (*Green Chemistry*)** adalah pendekatan perancangan produk dan proses kimia yang mereduksi atau mengeliminasi penggunaan serta pembentukan zat-zat berbahaya bagi manusia dan lingkungan.

##### A. Intisari 12 Prinsip Kimia Hijau (Anastas & Warner, 1998):
1. **Pencegahan Limbah**: Lebih baik mencegah timbulan limbah daripada mengolah atau membersihkannya setelah terbentuk.
2. **Ekonomi Atom Maksimal**: Merancang sintesis agar seluruh massa bahan baku terinkorporasi ke produk akhir.
3. **Sintesis Kimia Kurang Berbahaya**: Menggunakan dan menghasilkan zat dengan toksisitas serendah mungkin.
4. **Perancangan Bahan Kimia Aman**: Mempertahankan fungsi zat sambil meminimalkan efek bahayanya.
5. **Pelarut dan Bahan Penolong yang Lebih Aman**: Menghindari penggunaan pelarut organik volatil beracun.
6. **Efisiensi Energi**: Melakukan reaksi pada suhu dan tekanan lingkungan (kondisi ruang).
7. **Penggunaan Bahan Baku Terbarukan**: Mengutamakan biomassa pertanian dibanding bahan bakar fosil.
8. **Pengurangan Derivatisasi**: Menghindari langkah gugus pelindung atau modifikasi sementara yang boros reagen.
9. **Katalisis Selektif**: Memilih katalis selektif dibandingkan reagen stoikiometris biasa.
10. **Desain untuk Degradasi**: Merancang produk agar mudah terurai menjadi zat tidak berbahaya di alam.
11. **Analisis Real-Time untuk Pencegahan Polusi**: Pemantauan proses berkelanjutan untuk mendeteksi zat berbahaya sebelum terbentuk.
12. **Pencegahan Kecelakaan Kimia**: Memilih wujud zat yang meminimalkan risiko ledakan, kebakaran, dan pelepasan gas beracun.

##### B. Perhitungan Persentase Ekonomi Atom (% AE)
Ekonomi atom mengukur proporsi massa reaktan yang berhasil diubah menjadi produk yang ditargetkan:
$$\% \text{ Atom Economy} = \frac{M_r(\text{Produk Target})}{M_r(\text{Total Semua Reaktan dalam Persamaan Reaksi Setara})} \times 100\%$$
*Makna Fisis Rumus:* Nilai % AE menunjukkan seberapa banyak fraksi massa atom awal yang tidak terbuang menjadi produk sampingan yang sia-sia.

> [!SYARAT_BATAS]
> ### ⚖️ Syarat Batas & Asumsi
> **Kondisi Berlaku:** Perhitungan Ekonomi Atom didasarkan pada persamaan reaksi stoikiometri yang telah disetarakan dengan benar.
> **Batas Keberlakuan:** Nilai % AE sebesar 100% tidak otomatis menjamin proses tersebut sepenuhnya ramah lingkungan jika bahan baku yang digunakan bersifat karsinogenik atau reaksinya membutuhkan suhu ribuan derajat Celcius. Evaluasi wajib mempertimbangkan prinsip lainnya.

##### 🧪 Uji Konsep Kualitatif
**Pertanyaan:** Mengapa reaksi adisi etena dengan gas hidrogen ($\\ce{C2H4 + H2 -> C2H6}$) secara teoretis memiliki ekonomi atom $100\%$, sedangkan reaksi substitusi metana dengan klorin ($\\ce{CH4 + Cl2 -> CH3Cl + HCl}$) memiliki ekonomi atom $< 100\%$?  
*Jawaban & Analisis:* Pada reaksi adisi, seluruh atom karbon dan hidrogen dari pereaksi masuk menyatu ke dalam molekul etana tanpa menghasilkan molekul limbah sampingan. Pada reaksi substitusi, satu atom klorin dan satu atom hidrogen terlepas menjadi gas buangan $\\ce{HCl}$, sehingga sebagian massa pereaksi terbuang.

---

#### 3. Taktik Soal: Penerapan & Pemeriksaan Logika

##### 📝 Soal Contoh
**Soal:** Gas hidrogen ($\\ce{H2}$) dapat diproduksi di industri melalui reaksi gas metana dengan uap air:
$$\ce{CH4(g) + H2O(g) -> CO(g) + 3 H2(g)}$$
Jika produk yang diinginkan adalah gas hidrogen ($\\ce{H2}$), hitunglah persentase ekonomi atom (% AE) dari reaksi tersebut!  
($A_r\ \ce{C} = 12$, $\ce{H} = 1$, $\ce{O} = 16$).

**Strategi Langkah demi Langkah:**
1. *Hitung Massa Molar Produk Target yang Diinginkan:*  
   Produk target = $3\\text{ mol } \\ce{H2}$.  
   $$M_r(\text{Target}) = 3 \times M_r(\ce{H2}) = 3 \times (2 \times 1) = 6\text{ g mol}^{-1}$$
2. *Hitung Total Massa Molar Seluruh Reaktan:*  
   Reaktan = $1\\text{ mol } \\ce{CH4} + 1\\text{ mol } \\ce{H2O}$.  
   $$M_r(\ce{CH4}) = 12 + 4(1) = 16\text{ g mol}^{-1}$$  
   $$M_r(\ce{H2O}) = 2(1) + 16 = 18\text{ g mol}^{-1}$$  
   $$\text{Total Massa Reaktan} = 16 + 18 = 34\text{ g mol}^{-1}$$
3. *Hitung Persentase Ekonomi Atom (% AE):*  
   $$\% \text{ AE} = \frac{6}{34} \times 100\% \approx \mathbf{17.6\%}$$

> [!TITIK_RAWAN]
> ### ⚠️ Titik Rawan Kesalahan (Common Pitfalls)
> - **Lupa Mengalikan Koefisien Produk:** Siswa sering hanya memasukkan $M_r(\\ce{H2}) = 2$ pada pembilang tanpa mengalikan dengan angka koefisien reaksi $3$. Nilai massa target wajib memperhitungkan koefisien setara!
> - **Menyamakan Rendemen Hasil dengan Ekonomi Atom:** Rendemen mengukur keberhasilan mengumpulkan produk di laboratorium ($95\%$), sedangkan ekonomi atom mengukur proporsi massa atom intrinsik yang tidak terbuang menjadi limbah.

> [!PEMERIKSAAN_LOGIKA]
> ### 🔍 Pemeriksaan Logika (Sanity Check) & Koneksi
> - **Pemeriksaan Logika:** Nilai % AE secara teoretis tidak mungkin melebihi $100\%$. Nilai $17.6\%$ masuk akal karena sebagian besar massa pereaksi hilang menjadi gas sampingan karbon monoksida ($\\ce{CO}$).
> - **Koneksi Lintas Bab:** Penggunaan katalis selektif dalam prinsip ke-9 Kimia Hijau akan dibahas mekanismenya pada penurunan energi aktivasi di Bab 5 (Laju Reaksi).

##### 🎯 Latihan Terbimbing
**Soal Latihan 1:** Reaksi pembuatan kalsium oksida berlangsung menurut persamaan: $\\ce{CaCO3(s) -> CaO(s) + CO2(g)}$. Jika produk target adalah kalsium oksida ($\\ce{CaO}$), hitung persentase ekonomi atomnya! ($A_r\ \ce{Ca}=40, \ce{C}=12, \ce{O}=16$).  
**Soal Latihan 2:** Sebutkan contoh penerapan prinsip kimia hijau pada penggunaan katalis dalam reaksi industri dibandingkan penggunaan reagen stoikiometris berlebih!  
*Kunci Jawaban Akhir:*  
1. $\% \text{ AE} = \frac{56}{100} \times 100\% = \mathbf{56.0\%}$.  
2. Katalis dapat digunakan berulang kali dalam jumlah kecil untuk menurunkan energi aktivasi tanpa terpakai habis, mencegah timbulan limbah garam sisa.`,
      keyFormulas: [
        { name: 'Persentase Ekonomi Atom', formula: '\\% \\text{ AE} = \\frac{M_r(\\text{Produk Target})}{\\sum M_r(\\text{Reaktan})} \\times 100\\%' },
      ],
    },
    {
      tag: 'sma-01-penutup-bab',
      tags: ['pengayaan-inkuiri', 'ringkasan-cepat', 'evaluasi-berjenjang', 'literasi-sains'],
      title: 'Penutup Bab 1: Pengayaan Inkuiri, Ringkasan Cepat, dan Evaluasi Berjenjang',
      summary: 'Studi kasus transisi baterai nasional, tabel perbandingan konsep sering tertukar, flowchart penentuan materi, dan asesmen berjenjang 3 tingkat.',
      content: `### 🌐 Pengayaan Inkuiri & Kontekstual: Transisi Material Katoda Baterai Nasional

#### 1. Penyajian Data Fenomena Nyata
Indonesia saat ini memimpin percepatan transisi energi hijau melalui industrialisasi kendaraan listrik ramah lingkungan. Salah satu inovasi riset mutakhir adalah membandingkan material katoda baterai generasi lama berbasis litium kobalt oksida dengan inovasi baterai natrium-ion berbasis bahan alam maritim:

| Parameter Evaluasi | Katoda Litium Kobalt ($\\ce{LiCoO2}$) | Katoda Natrium Besi Fosfat ($\\ce{NaFePO4}$) |
| :--- | :--- | :--- |
| **Kelimpahan Logam Utama** | Sangat terbatas ($\approx 0.002\%$ di kerak bumi) | Sangat melimpah ($\approx 2.36\%$ dari garam laut) |
| **Tingkat Toksisitas Bahan** | Kobalt bersifat karsinogenik dan beracun | Besi dan fosfat tidak beracun dan aman |
| **Kondisi Suhu Sintesis** | Suhu tinggi ($850^\circ\text{C}$, energi intensif) | Suhu sedang hidrotermal ($150^\circ\text{C}$) |
| **Persentase Ekonomi Atom Sintesis** | $\approx 42\%$ (banyak limbah pelarut asam pekat) | $\approx 92\%$ (efisiensi atom tinggi) |

#### 2. Pertanyaan Pemandu Bertahap
1. **Analisis Prinsip Kimia Hijau**: Berdasarkan tabel di atas, sebutkan minimal 3 prinsip Kimia Hijau yang dipenuhi oleh baterai natrium dibanding baterai litium!
2. **Evaluasi Keberlanjutan**: Mengapa pemanfaatan natrium dari garam laut Indonesia mendukung ketahanan ekonomi dan bahan baku terbarukan?
3. **Analisis Struktur Partikel**: Berdasarkan nomor atomnya, bandingkan jari-jari kation $\ce{Na+}$ ($Z=11$) dan $\ce{Li+}$ ($Z=3$) serta dampaknya terhadap kepadatan energi baterai!

#### 3. Analisis & Sintesis Konsep
Pengembangan katoda $\ce{NaFePO4}$ mengimplementasikan prinsip **Penggunaan Bahan Baku Terbarukan** (garam maritim melimpah), **Efisiensi Energi** (suhu sintesis turun drastis dari $850^\circ\text{C}$ ke $150^\circ\text{C}$), serta **Desain Bahan Kimia Aman** (menghilangkan logam kobalt yang beracun). Selain itu, ekonomi atom sintesis yang mencapai $92\%$ secara nyata mencegah pembentukan limbah berbahaya di lingkungan.

#### 4. Koneksi Lintas Bab
Sifat transfer elektron pada ion $\ce{Na+}$ dan $\ce{Li+}$ ini dipelajari melalui jari-jari ion dan energi ionisasi pada Sistem Periodik Unsur (Bab 2) serta beda potensial sel elektrokimia pada Bab 9.

---

### ⚡ Ringkasan Cepat & Peta Keputusan

#### A. Tabel Komparasi Konsep Sering Tertukar
| Konsep A | Konsep B | Titik Pembeda Fundamental |
| :--- | :--- | :--- |
| **Unsur Diatomik ($\ce{O2}$)** | **Senyawa Biner ($\ce{CO}$)** | Unsur diatomik terdiri dari atom-atom sejenis; senyawa terdiri atas minimal dua unsur berbeda. |
| **Orbit Bohr** | **Orbital Kuantum** | Orbit adalah lintasan melingkar 2D pasti; orbital adalah ruang kebolehjadian 3D posisi elektron. |
| **Isotop** | **Isobar** | Isotop memiliki nomor atom sama ($Z$ sama); isobar memiliki nomor massa sama ($A$ sama). |
| **Persen Rendemen** | **Ekonomi Atom** | Rendemen mengukur hasil panen nyata di lab; ekonomi atom mengukur proporsi massa atom non-limbah. |

#### B. Peta Alur Keputusan: Penentuan Jenis Materi
$$\begin{array}{ccccc}
\boxed{\text{Materi}} & \rightarrow & \text{Dapat dipisahkan secara fisik?} & & \\
& & \downarrow\text{TIDAK} & \searrow\text{YA} & \\
& & \boxed{\text{Zat Tunggal (Murni)}} & & \boxed{\text{Campuran}} \\
& & \downarrow & & \downarrow \\
& & \text{Dapat diurai reaksi kimia?} & & \text{Tampak batas fasa fisik?} \\
& & \swarrow\text{TIDAK} \quad \searrow\text{YA} & & \swarrow\text{TIDAK} \quad \searrow\text{YA} \\
& \boxed{\text{UNSUR}} \quad \boxed{\text{SENYAWA}} & & \boxed{\text{HOMOGEN}} \quad \boxed{\text{HETEROGEN}}
\end{array}$$

---

### 🏆 Evaluasi Mandiri Berjenjang

#### Tingkat I: Fondasi (Asesmen Formatif)
1. Di antara zat berikut, manakah yang tergolong sebagai unsur murni: (A) Air murni, (B) Garam dapur, (C) Gas oksigen $\ce{O2}$, (D) Udara bersih, (E) Cuka makan? *(Kunci: C)*
2. Tentukan jumlah proton, neutron, dan elektron pada atom netral $^{39}_{19}\ce{K}$! *(Kunci: p = 19, n = 20, e = 19)*
3. Siapakah ilmuwan yang pertama kali membuktikan keberadaan inti atom bermuatan positif melalui percobaan hamburan sinar alfa? *(Kunci: Ernest Rutherford)*
4. Tuliskan harga keempat bilangan kuantum untuk orbital $3s$! *(Kunci: n = 3, l = 0, m = 0, s = +1/2 atau -1/2)*
5. Mengapa reaksi adisi selalu memiliki nilai persentase ekonomi atom $100\%$? *(Kunci: Seluruh atom pereaksi bergabung menjadi satu produk target tanpa ada produk limbah samping)*

#### Tingkat II: Integrasi (Asesmen Sumatif & Ujian Sekolah)
6. Sebuah ion memiliki notasi $^{59}_{27}\ce{Co^2+}$. Tentukan jumlah neutron dan konfigurasi elektron pada subkulit kation tersebut! *(Kunci: n = 32; Konfigurasi: [Ar] 3d⁷ karena 2 elektron 4s telah dilepaskan)*
7. Galium memiliki dua isotop di alam: $^{69}\ce{Ga}$ (massa $68.93\text{ sma}$) dan $^{71}\ce{Ga}$ (massa $70.92\text{ sma}$). Jika $A_r\ \ce{Ga} = 69.72$, hitung kelimpahan persentase isotop $^{69}\ce{Ga}$ di alam! *(Kunci: 60.3%)*
8. Jelaskan mengapa atom kromium ($\ce{_{24}Cr}$) memiliki konfigurasi elektron $[\ce{Ar}]\ 4s^1 3d^5$ alih-alih $[\ce{Ar}]\ 4s^2 3d^4$ berdasarkan kaidah kestabilan subkulit! *(Kunci: Subkulit d yang terisi tepat setengah penuh memiliki simetri bola muatan dan kestabilan energi ekstra)*
9. Dalam sintesis senyawa aspirin, sebanyak $13.8\text{ g}$ asam salisilat direaksikan dengan anhidrida asetat menghasilkan $18.0\text{ g}$ aspirin murni dan $6.0\text{ g}$ produk samping asam asetat. Hitung persentase ekonomi atom reaksi tersebut! ($M_r\text{ salisilat}=138, \text{anhidrida}=102, \text{aspirin}=180, \text{asetat}=60$). *(Kunci: 75.0%)*
10. Sebutkan dua kelemahan utama model atom Niels Bohr yang mendorong lahirnya model mekanika kuantum modern! *(Kunci: Hanya akurat untuk atom berelektron tunggal dan tidak memperhitungkan dualisme gelombang serta asas ketidakpastian)*

#### Tingkat III: Penalaran Lanjut (HOTS, TKA, & SNBT)
11. Suatu ion bermuatan $X^{2+}$ memiliki 18 elektron dan 20 neutron di dalam intinya. Lakukan deduksi terhadap nomor atom, nomor massa, konfigurasi elektron atom netral $X$, dan tentukan keempat bilangan kuantum elektron valensi terakhir atom netral $X$!
12. Suatu rute sintesis industri menghasilkan gas klorometana melalui reaksi: $\ce{CH4 + Cl2 -> CH3Cl + HCl}$. Alternatif rute hijau yang diusulkan adalah klorinasi katalitik etilena: $\ce{C2H4 + HCl + 1/2 O2 -> C2H3Cl + H2O}$. Lakukan analisis komparasi ekonomi atom kedua rute tersebut dan jelaskan mana yang lebih unggul ditinjau dari prinsip pencegahan limbah kimia hijau!`,
      keyFormulas: [
        { name: 'Ringkasan Konsep Kunci Bab 1', formula: 'A = p + n \\quad e^- = Z - q \\quad \\% \\text{ AE} = \\frac{M_r(\\text{Target})}{\\sum M_r(\\text{Reaktan})} \\times 100\\%' },
      ],
    },
  ],
  worked_examples: [],
};

