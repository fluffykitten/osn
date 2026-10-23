# Matriks Kurikulum Kimia SMA/MA (Bab 1–12, 58 Subbab)
Dokumen Induk: Arsitektur Pedagogis v3 (Salman Madani, S.Pd.) — Adaptasi SaveMyExams

Dokumen ini merupakan referensi operasional resmi untuk seluruh 12 Bab dan 58 Subbab dalam Kurikulum Nasional Kimia SMA/MA (Fase E Kelas X dan Fase F Kelas XI–XII).

---

## Bagian 1: Standar Desain Modul (SaveMyExams Style)

| Parameter Kognitif & Web | Batas Kuantitatif (Anggaran Kognitif) | Aturan Implementasi untuk Tim Penulis & AI |
| :--- | :--- | :--- |
| **Panjang Naskah per Subbab** | 600 – 900 kata (maksimal 1.000 kata untuk subbab hitungan berat) | Pecah teks menjadi blok-blok pendek. Dilarang menulis esai naratif panjang (*wall of text*). |
| **Panjang Paragraf & Kalimat** | Maksimal 3–4 kalimat per paragraf; maksimal 20 kata per kalimat | Satu paragraf hanya boleh memuat satu gagasan utuh. Jika menjelaskan proses bertahap, wajib gunakan daftar berbutir atau bernomor. |
| **Rasio Teks terhadap Visual** | 1 – 2 Diagram Utama per subbab | Setiap konsep submikroskopik, profil energi, atau skema alat wajib dirujuk secara eksplisit di dalam teks sebelum gambar ditampilkan. Menggunakan font `Comic Neue` sesuai standar `svg-diagrams`. |
| **Struktur Siklus Subbab (Micro-Loop)** | 3 Blok Wajib Berurutan (Intuisi → Formalisasi → Taktik Soal) | Dilarang langsung menyodorkan rumus di awal halaman. Halaman wajib dibuka dengan jembatan fenomena ke partikel (Intuisi). |
| **Komponen Intervensi Kognitif (Callout Boxes)** | 3 Kotak Fungsional per subbab | Wajib menyertakan: (1) Kotak Syarat Batas & Asumsi, (2) Kotak Titik Rawan Kesalahan (*Common Pitfalls*), dan (3) Kotak Pemeriksaan Logika (*Sanity Check*) & Koneksi Lintas Bab. |
| **Tipografi & Warna Web (Standar Axioma Academy)** | Font teks: Inter; Judul/Tabel: Plus Jakarta Sans; Diagram: Comic Neue | Gunakan palet warna semantik: Academic Teal (`#E6F4F1`/`#0D6E6E`) untuk Syarat Batas, Warm Terracotta (`#FDF2E9`/`#A04000`) untuk Titik Rawan Kesalahan, dan Steel Blue (`#EBF3F9`/`#1F4E78`) untuk Pemeriksaan Logika. |

### Panduan Gaya Bahasa Web: Conversational-Academic & Particle-First
1. **Gaya Bahasa Tahap Intuisi (Naratif-Visual, ~150 kata):**
   - Gunakan sapaan langsung yang mengajak pembaca mengamati (*"Bayangkan ketika kamu..."*, *"Perhatikan apa yang terjadi pada tingkat partikel saat..."*).
   - Gunakan kata kerja fisis yang konkret (*bertumbukan, tarik-menarik, terlepas, terhidrasi, bergeser*) untuk membangun model mental partikel.
   - **Pantangan**: Dilarang menggunakan perumpamaan antropomorfik yang memicu miskonsepsi (seperti *"atom karbon ingin bahagia dengan 8 elektron"* atau *"reaksi memilih jalan yang malas"*). Ganti dengan alasan energi dan gaya elektrostatik (*"konfigurasi oktet mencapai keadaan energi potensial paling rendah/stabil"*).
2. **Gaya Bahasa Tahap Formalisasi (Lugas-Presisi Standar IUPAC, ~250–350 kata):**
   - Tulis definisi resmi secara langsung menggunakan kalimat aktif berpola: `**[Istilah Baku]** adalah [definisi fisis/kimiawi lugas]`.
   - Setiap kali menyajikan rumus matematis, wajib ikuti dengan **"Makna Fisis Rumus"** dalam 1–2 kalimat sederhana (misalnya: *"Rumus ini menunjukkan bahwa semakin besar nilai Ka, semakin mudah asam tersebut melepaskan ion H+ di dalam air"*).
   - Patuhi notasi IUPAC Green Book: simbol besaran fisis dicetak miring ($T, P, V, n, M, K_c, K_a, E^\circ, \Delta H$), sedangkan satuan SI/kimia ($\text{mol L}^{-1}, \text{kJ mol}^{-1}, \text{atm}, \text{g cm}^{-3}$), operator ($\Delta, \log, \text{pH}$), fasa zat (`(s)`, `(l)`, `(g)`, `(aq)`), dan rumus kimia ditulis tegak (roman).
   - **Pantangan**: Dilarang keras memberikan "rumus cepat / jembatan keledai" (*black-box shortcut*) tanpa asal-usul konsep dan syarat batasnya.
3. **Gaya Bahasa Tahap Taktik Soal (Pelatih Strategi / Exam Coach, ~250–350 kata):**
   - Gunakan kalimat instruksional pendek berbasis tindakan (*"Langkah 1: Ubah massa zat menjadi mol"*, *"Langkah 2: Gunakan perbandingan koefisien untuk..."*).
   - Pada Kotak Titik Rawan Kesalahan, jelaskan **mengapa** suatu langkah salah secara konsep, bukan sekadar melarang.

---

## Bagian 2: Master Prompt Template untuk Subbab

```markdown
Anda adalah Penulis Utama Modul Kimia SMA/MA untuk platform web edukasi (setara SaveMyExams) yang mematuhi "Arsitektur Pedagogis Kurikulum Kimia Nasional (Fase E & Fase F)".

TUGAS ANDA:
Tulis naskah materi pembelajaran web yang ringkas, tajam, visual, dan bebas miskonsepsi untuk subbab berikut:
- Bab & Kode Subbab: [MASUKKAN JUDUL BAB & KODE SUBBAB]
- Jenjang / Fase: [MASUKKAN JENJANG/FASE]
- Alur Materi Wajib: [SALIN ALUR MATERI DARI MATRIKS]
- Batasan Materi Wajib (In-Scope): [SALIN BATASAN IN-SCOPE]
- Batasan Terlarang (Out-of-Scope / Jangan Dibahas!): [SALIN BATASAN OUT-OF-SCOPE]
- Syarat Batas & Asumsi Rumus: [SALIN SYARAT BATAS]
- Panduan Gaya Bahasa & Konsep Partikel: [SALIN PANDUAN BAHASA]
- Spesifikasi Diagram & Jebakan Soal: [SALIN DIAGRAM & JEBAKAN]

ATURAN KOGNITIF & FORMAT KELUARAN (WAJIB DIPATUHI):
1. ANGGARAN PANJANG: Total panjang naskah 650–900 kata. Maksimal 3–4 kalimat per paragraf (maksimal 20 kata/kalimat). Gunakan poin-poin (bullet points) dan tabel komparasi agar mudah dipindai (scannable) di layar web.
2. NOTASI ILMIAH IUPAC: Cetak miring simbol besaran fisis (T, P, V, n, M, Kc, Ka, E°, ΔH), cetak tegak satuan SI (mol L-1, kJ mol-1), tulis lengkap fasa zat ((s), (l), (g), (aq)), tulis muatan ion sesuai konvensi (Fe3+, bukan Fe+3), serta bedakan panah reaksi satu arah ( -> ) dan kesetimbangan ( \rightleftharpoons ).
3. DILARANG MELEBAR: Jangan pernah membahas topik yang ada di dalam daftar "Batasan Terlarang (Out-of-Scope)" dan jangan memberikan rumus cepat/jembatan keledai tanpa konsep.

STRUKTUR HALAMAN WEB YANG HARUS ANDA HASILKAN:
#### 1. Intuisi: Dari Fenomena ke Tingkat Partikel
- Buka dengan fenomena nyata/laboratorium yang diminta (1 paragraf pendek).
- Jelaskan apa yang terjadi pada tingkat partikel (atom/ion/molekul/elektron) dengan kata kerja fisis yang konkret.
- Panggil nomor rujukan gambar di dalam teks (contoh: "Perhatikan Gambar x.y berikut..."), lalu sertakan inline SVG berstandar svg-diagrams (font Comic Neue, data-diagram="sma-bXX-...") beserta caption Gambar x.y di bawahnya.
- Akhiri dengan 1 kalimat pertanyaan pemantik menuju tahap Formalisasi.

#### 2. Formalisasi: Konsep Baku & Hubungan Matematis
- Sajikan definisi baku Kurikulum Nasional/IUPAC, persamaan reaksi berfasa, atau penurunan rumus aljabar tingkat SMA secara runtut (definisi setiap variabel dan satuannya wajib eksplisit).
- Berikan "Makna Fisis" dalam 1–2 kalimat sederhana tepat di bawah rumus.
- Buat kotak panggilan:
  > [!SYARAT_BATAS]
  > ### ⚖️ Syarat Batas & Asumsi
  > (Rinci kondisi berlakunya rumus/aturan dan kapan rumus tersebut TIDAK boleh digunakan).
- Sajikan Uji Konsep Kualitatif (1–2 pertanyaan singkat berbasis penalaran partikel/grafik tanpa hitungan panjang beserta pembahasannya).

#### 3. Taktik Soal: Penerapan & Pemeriksaan Logika
- Soal Contoh (Worked Example): 1 soal kontekstual/representatif setara Ujian Sekolah/SNBT.
- Buat kotak peringatan:
  > [!TITIK_RAWAN]
  > ### ⚠️ Titik Rawan Kesalahan (Common Pitfalls)
  > (Soroti jebakan konsep/satuan yang paling sering dilakukan siswa pada soal ini beserta alasan fisisnya).
- Strategi Penyelesaian: Langkah demi langkah yang jernih dengan satuan lengkap di tiap tahap.
- Buat kotak verifikasi:
  > [!PEMERIKSAAN_LOGIKA]
  > ### 🔍 Pemeriksaan Logika (Sanity Check) & Koneksi
  > - **Pemeriksaan Logika:** Cara mengecek dalam 10 detik apakah angka/tanda jawaban masuk akal secara kimiawi.
  > - **Koneksi Lintas Bab:** Hubungan konsep subbab ini dengan bab lain di Kurikulum Merdeka.
- Latihan Terbimbing: 2 soal latihan mandiri sejenis yang dilengkapi Kunci Jawaban Akhir (tanpa penjabaran langkah).
```

---

## Bagian 3: Matriks Lengkap 58 Subbab (Bab 1–12)

### RUMPUN 1: KIMIA DASAR, STRUKTUR ATOM, DAN IKATAN KIMIA (BAB 1 – 3)

#### Bab 1: Hakikat Ilmu Kimia, Kimia Hijau, dan Struktur Atom (Kelas X — Fase E)

##### 1.1 Metode Ilmiah, Keselamatan Kerja Laboratorium, dan Klasifikasi Materi
- **Alur Materi**:
  - *Intuisi*: Membandingkan air garam (dapat dipisahkan dengan pemanasan) vs air murni H2O (hanya terurai lewat elektrolisis) di tingkat susunan partikel.
  - *Formalisasi*: Tahapan metode ilmiah (variabel bebas, terikat, kontrol), piktogram bahaya GHS/MSDS, serta klasifikasi zat murni (unsur, senyawa) vs campuran (homogen/larutan, heterogen/koloid/suspensi).
  - *Taktik Soal*: Mengidentifikasi variabel penelitian dari narasi eksperimen dan mengklasifikasikan materi dari diagram kotak partikel.
- **In-Scope**: Variabel eksperimen dasar, simbol bahaya GHS utama, pembedaan unsur/senyawa/campuran secara makroskopik dan submikroskopik.
- **Out-of-Scope**: Perhitungan statistik galat penelitian, teknik pemisahan instrumen lanjut (HPLC/GC-MS).
- **Syarat Batas**: Komposisi senyawa selalu tetap (mengikuti perbandingan atom bulat), sedangkan komposisi campuran dapat bervariasi tanpa batas stoikiometri.
- **Gaya Bahasa**: Gunakan bahasa investigatif untuk metode ilmiah; bedakan tegas istilah "campuran molekul" vs "ikatan kimia antar-atom".
- **Visual**: Diagram komparasi partikel di dalam kotak untuk unsur monoatomik, unsur diatomik, senyawa, dan campuran.
- **Jebakan**: Siswa sering menganggap molekul diatomik (seperti O2 atau N2) sebagai senyawa karena terdiri dari dua atom.

##### 1.2 Perkembangan Model Atom (Dalton, Thomson, Rutherford, Bohr, dan Mekanika Kuantum Dasar)
- **Alur Materi**:
  - *Intuisi*: Mengapa model ilmiah berubah? Mengamati pembelokan berkas sinar katoda oleh medan listrik dan hamburan sinar alfa pada lempeng emas tipis.
  - *Formalisasi*: Postulat dan kelemahan utama model atom Dalton (bola pejal), Thomson (roti kismis/muatan tersebar), Rutherford (inti bermuatan positif dikelilingi ruang hampa), Bohr (lintasan energi terkuantisasi/kulit), dan Mekanika Kuantum (orbital sebagai ruang kebolehjadian).
  - *Taktik Soal*: Menghubungkan bukti eksperimen laboratorium dengan kesimpulan struktur atom dan menjelaskan alasan gugurnya model terdahulu.
- **In-Scope**: Bukti eksperimen (tabung Crookes, hamburan alfa Rutherford, spektrum garis hidrogen Bohr, ketidakpastian Heisenberg/awan elektron secara kualitatif).
- **Out-of-Scope**: Penurunan matematis jari-jari Bohr, rumus deret spektrum Rydberg (1/λ = R(...)), dan persamaan diferensial Schrödinger.
- **Syarat Batas**: Model Bohr hanya akurat untuk atom/ion berelektron tunggal (seperti H, He+) dan gagal menjelaskan spektrum atom berelektron banyak.
- **Gaya Bahasa**: Gunakan alur sebab-akibat berbasis bukti (*"Bukti eksperimen X memaksa ilmuwan merevisi model Y karena..."*).
- **Visual**: Skema 5 model atom berurutan kronologis beserta cuplikan skema hamburan sinar alfa Rutherford.
- **Jebakan**: Siswa sering menyamakan orbit (lintasan pasti pada model Bohr) dengan orbital (ruang kebolehjadian 3D pada mekanika kuantum).

##### 1.3 Partikel Penyusun Atom, Nomor Atom, Nomor Massa, serta Isotop, Isobar, dan Isoton
- **Alur Materi**:
  - *Intuisi*: Menimbang massa atom dan muatannya; mengapa massa atom terpusat di inti yang sangat kecil, sedangkan volume atom ditentukan oleh awan elektron.
  - *Formalisasi*: Karakteristik proton (p), neutron (n), dan elektron (e-); notasi nuklida baku AZXq±; hubungan Z = p, A = p + n, dan jumlah elektron pada atom netral vs ion (e- = Z - q); definisi isotop, isobar, isoton, dan isoelektron.
  - *Taktik Soal*: Menentukan jumlah p, n, e- pada ion positif/negatif serta menghitung massa atom relatif (Ar) rata-rata dari kelimpahan isotop di alam.
- **In-Scope**: Notasi AZXq±, perhitungan p, n, e-, pengelompokan isotop/isobar/isoton/isoelektron, dan rata-rata tertimbang massa isotop.
- **Out-of-Scope**: Partikel subatomik kuark, energi ikat inti (E = Δm c2), dan peluruhan radioaktif.
- **Syarat Batas**: Pembentukan ion (kation/anion) pada reaksi kimia biasa hanya mengubah jumlah elektron di kulit luar, tidak pernah mengubah jumlah proton di dalam inti.
- **Gaya Bahasa**: Tekankan bahwa nomor atom (Z) adalah "KTP identitas unsur"; jika jumlah proton berubah, unsurnya berubah.
- **Visual**: Diagram anatomi atom karbon-12 dan karbon-14 yang membandingkan isi inti dan awan elektron.
- **Jebakan**: Saat menghitung jumlah elektron pada ion bermuatan negatif (misal S2-), siswa sering mengurangi nomor atom alih-alih menambahkannya.

##### 1.4 Bilangan Kuantum, Bentuk Orbital Dasar (s, p, d), dan Konfigurasi Elektron (Aufbau, Hund, Pauli)
- **Alur Materi**:
  - *Intuisi*: Mengibaratkan penataan elektron di sekitar inti berdasarkan tingkat energi dari yang paling dekat/stabil hingga yang lebih luar, serta tolakan antar-elektron dalam satu ruang orbital.
  - *Formalisasi*: Empat bilangan kuantum (n, l, m, s) sebagai penanda tingkat energi, bentuk subkulit (s, p, d, f), orientasi ruang, dan arah rotasi (spin); aturan Aufbau, larangan Pauli, dan kaidah Hund; konfigurasi elektron atom netral dan ion serta penyingkatan gas mulia.
  - *Taktik Soal*: Menentukan keempat bilangan kuantum elektron terakhir, menggambar diagram orbital, dan menuliskan konfigurasi elektron kation logam transisi.
- **In-Scope**: Bilangan kuantum n, l, m, s; bentuk visual orbital s (bola), p (balon terpilin 3 sumbu), dan pengenalan d; konfigurasi Aufbau hingga Z = 56; anomali kestabilan subkulit d5 dan d10 pada Cr (Z=24) dan Cu (Z=29).
- **Out-of-Scope**: Bentuk nodal fungsi gelombang radial/angular, anomali lantanida/aktinida kompleks.
- **Syarat Batas**: Saat atom membentuk kation, elektron dilepaskan dari kulit terluar (n terbesar) terlebih dahulu (misal pada Fe, elektron 4s lepas sebelum 3d).
- **Gaya Bahasa**: Jelaskan aturan Hund dan Pauli menggunakan prinsip tolakan muatan sejenis (*"elektron menempati orbital kosong secara sendiri-sendiri dulu untuk meminimalkan tolakan elektrostatik"*).
- **Visual**: Bentuk 3D orbital s dan px, py, pz serta diagram tingkat energi subkulit Aufbau.
- **Jebakan**: Melepaskan elektron dari subkulit 3d terlebih dahulu alih-alih 4s saat menuliskan konfigurasi ion logam transisi seperti Fe2+ atau Zn2+.

##### 1.5 Prinsip Kimia Hijau (Green Chemistry) dan Peran Kimia dalam Pembangunan Berkelanjutan
- **Alur Materi**:
  - *Intuisi*: Membandingkan proses industri kimia lama yang menghasilkan limbah beracun vs inovasi proses ramah lingkungan yang merancang reaksi agar seluruh atom pereaksi masuk ke dalam produk.
  - *Formalisasi*: 12 Prinsip Kimia Hijau (Anastas & Warner) yang dikelompokkan ke dalam pencegahan limbah, ekonomi atom (atom economy), penggunaan pelarut/katalis aman, efisiensi energi, bahan baku terbarukan, dan produk mudah terurai (biodegradable).
  - *Taktik Soal*: Menganalisis studi kasus proses kimia (misal plastik ramah lingkungan, biodiesel, atau penggantian pelarut klorokarbon) dan mencocokkannya dengan prinsip Kimia Hijau yang relevan.
- **In-Scope**: Pemahaman konseptual 12 Prinsip Kimia Hijau, konsep kualitatif ekonomi atom, dan kontribusi kimia terhadap SDGs (energi bersih, penanganan perubahan iklim).
- **Out-of-Scope**: Perhitungan metrik E-factor industri tingkat lanjut atau toksikologi molekuler.
- **Syarat Batas**: Kimia Hijau berfokus pada pencegahan bahaya sejak perancangan reaksi di hulu, bukan sekadar pengolahan limbah setelah pencemaran terjadi (remediasi).
- **Gaya Bahasa**: Gunakan bahasa aplikatif dan solutif yang membongkar stigma bahwa semua "bahan kimia" itu berbahaya.
- **Visual**: Skema perbandingan reaksi dengan Ekonomi Atom Tinggi (hanya produk utama) vs Ekonomi Atom Rendah (banyak produk samping/limbah).
- **Jebakan**: Siswa sering menyamakan Kimia Hijau dengan kegiatan daur ulang sampah biasa tanpa melihat modifikasi reaksi atau katalis di tingkat molekuler.

---

#### Bab 2: Sistem Periodik Unsur dan Ikatan Kimia (Kelas X–XI — Fase E & F)

##### 2.1 Perkembangan Tabel Periodik dan Penentuan Periode serta Golongan (Utama & Transisi)
- **In-Scope**: Dasar penyusunan Mendeleev vs Moseley; blok s, p, d, f; penentuan periode dan golongan unsur Golongan Utama (IA–VIIIA / 1–2, 13–18) dan Transisi periode 4 (IB–VIIIB / 3–12).
- **Out-of-Scope**: Penentuan sub-golongan detail deret lantanida/aktinida.
- **Syarat Batas**: Penentuan golongan dari konfigurasi elektron wajib didasarkan pada atom netral keadaan dasar, bukan dari konfigurasi ionnya.
- **Visual**: Peta blok Tabel Periodik (s, p, d, f) dengan kode warna yang menghubungkan nomor golongan dan subkulit valensi.
- **Jebakan**: Menentukan letak golongan unsur dari konfigurasi ionnya (misal menganggap Na+ berada di golongan VIIIA karena memiliki 8 elektron terluar).

##### 2.2 Tren Sifat Keperiodikan Unsur: Jari-Jari Atom/Ion, Energi Ionisasi, Afinitas Elektron, dan Keelektronegatifan
- **In-Scope**: Empat sifat keperiodikan utama, perbandingan jari-jari kation vs atom netral vs anion, serta anomali energi ionisasi Golongan IIA/IIIA (ns2 vs ns2np1) dan VA/VIA (np3 setengah penuh vs np4).
- **Out-of-Scope**: Perhitungan kuantitatif konstanta perisai (shielding) aturan Slater dan rumus skala keelektronegatifan Mulliken/Allred-Rochow.
- **Syarat Batas**: Gas mulia (VIIIA) memiliki energi ionisasi sangat tinggi dalam periodenya, tetapi tidak memiliki nilai keelektronegatifan tinggi karena sukar membentuk ikatan.
- **Visual**: Grafik gergaji Energi Ionisasi Pertama terhadap Nomor Atom (Z = 1 s.d. 20) dan ilustrasi ukuran jari-jari deret isoelektron.
- **Jebakan**: Menganggap Golongan VIIIA memiliki keelektronegatifan paling besar, atau lupa adanya lonjakan penurunan energi ionisasi dari IIA ke IIIA dan VA ke VIA.

##### 2.3 Kestabilan Atom (Aturan Duplet & Oktet), Lambang Lewis, serta Ikatan Ionik dan Ikatan Logam
- **In-Scope**: Lambang Lewis, aturan duplet/oktet dasar, ikatan ionik, sifat fisis senyawa ionik (padatan isolator, lelehan/larutan konduktor, rapuh), dan ikatan logam.
- **Out-of-Scope**: Perhitungan siklus Born-Haber energi kisi dan teori pita (band theory) semikonduktor.
- **Syarat Batas**: Senyawa ionik tidak membentuk molekul diskrit tunggal di fasa padat, melainkan kisi kristal raksasa; tidak semua ikatan antara logam dan nonlogam bersifat murni ionik (contoh BeCl2 dan AlCl3 bersifat kovalen).
- **Visual**: Diagram komparasi tingkat partikel saat kristal ionik dipukul (bergeser lalu tolak-menolak sehingga pecah) vs logam dipukul (lautan elektron menyesuaikan posisi).
- **Jebakan**: Menggambarkan ikatan ionik dengan garis ikatan kovalen (seperti Na-Cl) alih-alih penulisan ion bertanda kurung siku [Na]+[Cl:]-.

##### 2.4 Ikatan Kovalen (Tunggal, Rangkap, Koordinasi), Kepolaran Ikatan, dan Pengecualian Oktet Dasar
- **In-Scope**: Struktur Lewis kovalen tunggal/rangkap/koordinasi, momen dipol ikatan secara kualitatif, dan tiga jenis penyimpangan oktet dasar.
- **Out-of-Scope**: Perhitungan muatan formal kompleks pada banyak struktur resonansi organik dan perhitungan kuantitatif momen dipol dalam satuan Debye (μ = q * r).
- **Syarat Batas**: Oktet berkembang (>8 elektron di sekitar atom pusat) hanya mungkin terjadi pada unsur periode 3 ke atas (seperti P, S, Cl, Xe) yang memiliki orbital d kosong; unsur periode 2 (C, N, O, F) tidak pernah melampaui 8 elektron valensi.
- **Visual**: Struktur Lewis bertahap untuk CO2, NH4+ (menandai ikatan koordinasi), BF3, dan SF6.
- **Jebakan**: Memaksakan aturan oktet pada BF3 atau PCl5, serta menganggap molekul yang memiliki ikatan kovalen polar pasti bersifat polar secara keseluruhan tanpa melihat kesimetrisan bentuknya.

##### 2.5 Geometri Molekul (VSEPR & Hibridisasi Dasar) serta Gaya Antarmolekul
- **In-Scope**: Notasi AXnEm untuk 2 hingga 6 domain elektron, hibridisasi atom pusat yang bersesuaian, kepolaran molekul 3D, gaya London, dipol-dipol, dan ikatan hidrogen.
- **Out-of-Scope**: Teori Orbital Molekul (diagram MO σ/σ*, π/π*) dan sudut ikatan presisi di luar sudut baku.
- **Syarat Batas**: Ikatan hidrogen adalah gaya tarik antarmolekul (bukan ikatan kovalen di dalam molekul) dan hanya terbentuk jika atom H terikat kovalen secara langsung pada atom berukuran kecil yang sangat elektronegatif (F, O, N).
- **Visual**: Tabel bentuk 3D VSEPR (AX2 s.d. AX6 beserta efek dorongan PEB) dan grafik anomali titik didih senyawa hidrida Golongan IVA–VIIA (H2O, HF, NH3).
- **Jebakan**: Mengira saat air mendidih, ikatan kovalen O-H terputus menjadi gas H2 dan O2 (padahal yang terputus hanya ikatan hidrogen antarmolekul H2O).

---

#### Bab 3: Hukum Dasar Kimia dan Stoikiometri (Kelas X–XI — Fase E & F)

##### 3.1 Tatanama Senyawa Anorganik dan Penyetaraan Persamaan Reaksi
- **In-Scope**: Tatanama IUPAC senyawa anorganik umum SMA, daftar ion poliatomik wajib, dan penyetaraan persamaan reaksi secara inspeksi maupun aljabar.
- **Out-of-Scope**: Tatanama senyawa kompleks koordinasi (ligan) dan penyetaraan redoks setengah-reaksi (dibahas khusus di Bab 9).
- **Syarat Batas**: Saat menyetarakan reaksi, hanya angka koefisien di depan rumus kimia yang boleh diubah; mengubah angka indeks (subscript) berarti mengubah jenis zat secara tidak sah.
- **Visual**: Diagram alir aturan tatanama senyawa anorganik dan ilustrasi partikel perbedaan mengubah koefisien (2 H2O) vs mengubah indeks (H2O2).
- **Jebakan**: Menggunakan awalan mono-/di-/tri- pada senyawa ionik (misal menyebut MgCl2 sebagai magnesium diklorida, padahal seharusnya magnesium klorida).

##### 3.2 Hukum-Hukum Dasar Kimia (Lavoisier, Proust, Dalton, Gay-Lussac, Avogadro)
- **In-Scope**: Perhitungan proporsi massa Lavoisier-Proust-Dalton dan stoikiometri volume gas Gay-Lussac/Avogadro pada suhu dan tekanan tetap.
- **Out-of-Scope**: Penyimpangan non-stoikiometri kristal padat (berthollides).
- **Syarat Batas**: Hukum Kekekalan Massa Lavoisier hanya teramati penuh pada sistem tertutup; Hukum Perbandingan Volume Gay-Lussac hanya berlaku untuk zat berwujud gas (g) pada suhu dan tekanan sama.
- **Visual**: Skema kotak partikel gas hidrogen + gas oksigen menghasilkan uap air yang membuktikan hipotesis Avogadro.
- **Jebakan**: Menjumlahkan langsung volume gas pereaksi untuk mencari volume gas produk.

##### 3.3 Konsep Mol: Massa Molar, Volume Molar Gas (STP, RTP, PV = nRT), dan Jumlah Partikel
- **In-Scope**: Jembatan konversi mol (massa, jumlah partikel, volume gas STP/RTP/gas ideal/perbandingan dua gas).
- **Out-of-Scope**: Persamaan gas nyata Van der Waals dengan koreksi volume dan gaya tarik.
- **Syarat Batas**: Angka 22,4 L mol-1 hanya berlaku untuk zat berwujud gas pada kondisi STP (0°C, 1 atm); pada persamaan PV = nRT, suhu T wajib dalam satuan Kelvin (K = °C + 273).
- **Visual**: Peta Jembatan Konversi Mol (Mol di tengah yang terhubung ke Massa, Jumlah Partikel, dan Volume Gas).
- **Jebakan**: Menggunakan rumus V = n * 22,4 L untuk zat berfasa cair/larutan atau pada suhu kamar (25°C).

##### 3.4 Kadar Unsur, Rumus Empiris, Rumus Molekul, dan Konsentrasi Larutan (Molaritas & Pengenceran)
- **In-Scope**: Kadar massa unsur, RE & RM, Molaritas (M), pengenceran, dan konversi kadar persen massa (%) serta massa jenis (ρ) ke Molaritas.
- **Out-of-Scope**: Normalitas (N) dan ekivalen redoks.
- **Syarat Batas**: Pada pengenceran, mol zat terlarut tetap konstan (n1 = n2); volume akhir V2 adalah volume total larutan (Vawal + Vair).
- **Visual**: Skema pengenceran larutan di labu ukur (jumlah partikel terlarut tetap sama sementara volume pelarut bertambah).
- **Jebakan**: Memasukkan volume air yang ditambahkan sebagai V2 pada rumus pengenceran.

##### 3.5 Stoikiometri Reaksi, Pereaksi Pembatas, Persen Hasil (Yield), dan Stoikiometri Larutan
- **In-Scope**: Bagan M-B-S, pereaksi pembatas, pereaksi berlebih, kadar kemurnian zat, persen hasil (yield), penentuan air kristal hidrat, dan stoikiometri larutan.
- **Out-of-Scope**: Titrasi balik (back titration) multi-tahap analitik lanjut.
- **Syarat Batas**: Bagan M-B-S wajib diisi dalam satuan mol (atau milimol), tidak pernah boleh diisi dalam satuan gram atau mL larutan.
- **Visual**: Diagram partikel sebelum dan sesudah reaksi yang memperlihatkan molekul pereaksi pembatas habis dan pereaksi sisa masih mengapung.
- **Jebakan**: Memilih zat dengan mol mula-mula paling kecil sebagai pereaksi pembatas tanpa membaginya terlebih dahulu dengan koefisien reaksinya.

---

### RUMPUN 2: KIMIA FISIKA (BAB 4 – 6 & BAB 10)

#### Bab 4: Termokimia / Energetika Kimia (Kelas XI — Fase F)
- **4.1 Sistem, Lingkungan, Pertukaran Energi, serta Reaksi Eksoterm dan Endoterm**: Diagram tingkat energi, sistem terbuka/tertutup/terisolasi. *Out-of-scope*: Hukum I Termodinamika dengan kerja ekspansi gas (ΔU = q + w, w = -PΔV).
- **4.2 Perubahan Entalpi Standar (ΔH°f, ΔH°d, ΔH°c, ΔH°n) dan Persamaan Termokimia**: Persamaan termokimia dan 4 entalpi molar standar. *Out-of-scope*: Entalpi kisi, entalpi hidrasi, persamaan Kirchhoff.
- **4.3 Penentuan ΔH Reaksi Melalui Kalorimetri Tekanan Tetap (q = mcΔT)**: Kalorimeter sederhana cangkir kopi. *Out-of-scope*: Kalorimeter bom volume tetap (ΔU ke ΔH dengan +ΔnRT).
- **4.4 Penentuan ΔH Reaksi Berdasarkan Hukum Hess (Siklus, Diagram Tingkat Energi, dan Data ΔH°f)**: Penjumlahan aljabar bertahap, siklus Hess, dan rumus ∑ ΔH°f. *Out-of-scope*: Siklus termodinamika fungsi keadaan non-entalpi.
- **4.5 Energi Ikatan Rata-Rata dan Efisiensi Kalor Pembakaran Bahan Bakar**: Rumus Putus (Kiri) - Terbentuk (Kanan) dan evaluasi efisiensi bahan bakar. *Out-of-scope*: Energi disosiasi ikatan spesifik bertahap vs rata-rata.

#### Bab 5: Laju Reaksi dan Faktor-Faktor Penentunya (Kelas XI — Fase F)
- **5.1 Konsep Laju Reaksi, Ungkapan Laju, dan Stoikiometri Laju**: Laju rata-rata (ΔM/Δt), grafik kurva konsentrasi vs waktu. *Out-of-scope*: Laju sesaat diferensial (-d[A]/dt).
- **5.2 Teori Tumbukan, Orientasi Tumbukan Efektif, dan Energi Aktivasi (Ea)**: Dua syarat tumbukan efektif, profil energi reaksi Ea dan ΔH. *Out-of-scope*: Persamaan eksponensial Arrhenius (k = A e^-Ea/RT).
- **5.3 Faktor-Faktor yang Memengaruhi Laju Reaksi (Konsentrasi, Luas Permukaan, Suhu, Katalis)**: Model partikel 4 faktor, perhitungan empiris kenaikan suhu tiap ΔT. *Out-of-scope*: Kinetika enzim Michaelis-Menten.
- **5.4 Hukum Laju Reaksi (v = k[A]m[B]n), Orde Reaksi, dan Tetapan Laju (k)**: Orde 0, 1, 2 (grafik v vs [A]), satuan tetapan laju k. *Out-of-scope*: Persamaan laju terintegrasi (ln[A] vs t) dan waktu paruh t1/2.
- **5.5 Penentuan Persamaan Laju dari Data Percobaan Laju Awal dan Peran Katalis Industri**: Metode perbandingan dua percobaan (data v dan t), mekanisme katalis permukaan. *Out-of-scope*: Pendekatan keadaan tunak (steady-state approximation).

#### Bab 6: Kesetimbangan Kimia (Kelas XI — Fase F)
- **6.1 Konsep Kesetimbangan Dinamis serta Kesetimbangan Homogen dan Heterogen**: vmaju = vbalik, grafik v vs t dan [C] vs t. *Out-of-scope*: Kriteria energi bebas Gibbs (ΔG = 0).
- **6.2 Tetapan Kesetimbangan Konsentrasi (Kc) dan Tekanan Parsial (Kp) serta Hubungan Kp = Kc(RT)Δn**: Rumus Kc (g dan aq), Kp (g), manipulasi nilai K. *Out-of-scope*: Aktivitas fugasitas gas tekanan tinggi.
- **6.3 Perhitungan Komposisi Kesetimbangan, Derajat Disosiasi (α), dan Interpretasi Nilai K**: Bagan M-B-S kesetimbangan, α, kuosien reaksi Qc vs Kc. *Out-of-scope*: Polinomial derajat ≥ 3.
- **6.4 Pergeseran Kesetimbangan Berdasarkan Asas Le Chatelier**: 4 faktor gangguan kesetimbangan, pembacaan grafik gangguan. *Out-of-scope*: Perhitungan kuadrat ulang komposisi baru pasca-gangguan.
- **6.5 Optimasi Kesetimbangan Kimia di Industri (Haber-Bosch dan Kontak)**: Kompromi suhu, tekanan, dan katalis pada pembuatan NH3 dan H2SO4. *Out-of-scope*: Neraca panas teknik kimia lanjut.

#### Bab 10: Sifat Koligatif Larutan dan Sistem Koloid (Kelas XI–XII — Fase F)
- **10.1 Satuan Konsentrasi Koligatif (Molalitas m & Fraksi Mol X) serta Faktor van 't Hoff (i)**: m, X, faktor i = 1 + (n-1)α. *Out-of-scope*: Koefisien aktivitas Debye-Hückel.
- **10.2 Penurunan Tekanan Uap Jenuh (ΔP, Hukum Raoult) dan Diagram Fasa (P-T)**: P = Xp P°, ΔP = Xt P°, pergeseran diagram fasa P-T. *Out-of-scope*: Campuran 2 cairan volatil dan azeotrop.
- **10.3 Kenaikan Titik Didih (ΔTb) dan Penurunan Titik Beku (ΔTf) Larutan**: ΔTb = Kb m i, ΔTf = Kf m i, penentuan Mr dan α. *Out-of-scope*: Penurunan termodinamika ebulioskopi/krioskopi dari entalpi penguapan.
- **10.4 Tekanan Osmotik (π = MRTi) dan Aplikasi Sifat Koligatif**: Osmosis, larutan isotonik, infus, reverse osmosis. *Out-of-scope*: Potensial air tekanan turgor dinding sel fisiologi tumbuhan.
- **10.5 Sistem Dispersi Koloid (Klasifikasi, Sifat Khas, dan Pembuatan Koloid)**: 8 jenis koloid, Tyndall, gerak Brown, adsorpsi, koagulasi, kondensasi vs dispersi. *Out-of-scope*: Potensial zeta kuantitatif dan persamaan Einstein-Smoluchowski.

---

### RUMPUN 3: KIMIA ANALITIK DASAR DAN ELEKTROKIMIA (BAB 7 – 9)

#### Bab 7: Larutan Asam-Basa dan Titrasi Asam-Basa (Kelas XI — Fase F)
- **7.1 Daya Hantar Listrik Larutan dan Teori Asam-Basa (Arrhenius, Brønsted-Lowry, Lewis)**: Uji elektrolit, pasangan konjugasi H+, akseptor/donor PEB Lewis. *Out-of-scope*: Teori asam-basa keras-lunak Pearson (HSAB).
- **7.2 Kesetimbangan Ionisasi Air (Kw), Skala pH-pOH, dan Kekuatan Asam-Basa (Ka, Kb, α)**: Autoionisasi air, perhitungan pH kuat vs lemah monoprotik. *Out-of-scope*: Neraca muatan sistematis asam sangat encer (<10^-7 M).
- **7.3 Reaksi Penetralan Asam-Basa dan Pemilihan Indikator Berdasarkan Trayek pH**: Reaksi netralisasi, pembacaan trayek pH indikator dan irisan garis bilangan. *Out-of-scope*: Henderson-Hasselbalch molekul indikator HIn/In-.
- **7.4 Titrasi Asam-Basa (Stoikiometri Titik Ekuivalen, Kadar Sampel, dan Analisis Kurva Titrasi)**: a Ma Va = b Mb Vb, 3 jenis kurva titrasi, pemilihan indikator titik ekuivalen. *Out-of-scope*: Titrasi asam lemah dengan basa lemah, titrasi kompleksometri/argentometri.

#### Bab 8: Kesetimbangan Ion dalam Larutan — Hidrolisis, Penyangga, & Kelarutan (Kelas XI — Fase F)
- **8.1 Konsep Hidrolisis Garam, Sifat Asam-Basa Garam, dan Perhitungan pH Garam**: 4 jenis garam, rumus [OH-] dan [H+] garam terhidrolisis parsial. *Out-of-scope*: Hidrolisis bertahap amfiprotik NaHCO3.
- **8.2 Larutan Penyangga (Buffer): Komponen, Mekanisme, dan Perhitungan pH**: Pembuatan langsung vs reaksi pembatas, [H+] = Ka (nasam/nbasa konjugasi). *Out-of-scope*: Kapasitas penyangga diferensial (β).
- **8.3 Fungsi Larutan Penyangga dalam Tubuh Makhluk Hidup dan Industri**: Sistem karbonat H2CO3/HCO3- darah, fosfat intraseluler H2PO4-/HPO42-, asidosis/alkalosis. *Out-of-scope*: Kompensasi metabolik ginjal klinis kedokteran.
- **8.4 Kelarutan Molar (s) dan Hasil Kali Kelarutan (Ksp) Garam Sukar Larut**: Penurunan aljabar Ksp = s^2, 4s^3, 27s^4, 108s^5, hubungan pH larutan jenuh hidroksida sukar larut. *Out-of-scope*: Pembentukan ion kompleks dan efek kekuatan ionik.
- **8.5 Pengaruh Ion Senama dan pH terhadap Kelarutan serta Prediksi Pengendapan (Qsp vs Ksp)**: Efek ion senama, kriteria Qsp vs Ksp pada pencampuran 2 larutan. *Out-of-scope*: Pengendapan bertingkat dengan hidrolisis serentak.

#### Bab 9: Reaksi Redoks dan Elektrokimia (Kelas XII — Fase F)
- **9.1 Konsep Redoks, Bilangan Oksidasi, dan Penyetaraan Reaksi Redoks**: Aturan biloks, oksidator/reduktor, penyetaraan metode biloks dan setengah-reaksi (asam & basa). *Out-of-scope*: Biloks pecahan organik kompleks.
- **9.2 Sel Volta (Galvani): Susunan Sel, Notasi Sel, Deret Volta, dan Potensial Sel Standar (E°sel)**: Komponen sel, jembatan garam, notasi sel IUPAC, E°sel = E°katoda - E°anoda, syarat spontan E°sel > 0. *Out-of-scope*: Persamaan Nernst non-standar (E = E° - (RT/nF) ln Q).
- **9.3 Sel Volta Komersial serta Korosi dan Pencegahannya**: Baterai kering, aki, baterai Li-ion, mekanisme korosi besi, pencegahan korosi (anoda korban Mg/Zn). *Out-of-scope*: Diagram Pourbaix (E-pH).
- **9.4 Sel Elektrolisis: Penentuan Reaksi di Katoda dan Anoda (Leburan vs Larutan)**: Persaingan spesi katoda/anoda, elektroda inert vs aktif, perubahan pH elektroda. *Out-of-scope*: Potensial lebih (overpotential) gas kuantitatif.
- **9.5 Hukum Elektrolisis Faraday I dan II serta Aplikasi Penyepuhan (Electroplating)**: Stoikiometri mol elektron ne = (I * t)/96500, w = eIt/96500, Faraday II sel seri, susunan electroplating sendok. *Out-of-scope*: Efisiensi arus reaksi samping paralel.

---

### RUMPUN 4: KIMIA KARBON, MAKROMOLEKUL, DAN KIMIA UNSUR (BAB 11 – 12)

#### Bab 11: Hidrokarbon, Minyak Bumi, dan Gugus Fungsi Senyawa Karbon (Kelas XI–XII — Fase F)
- **11.1 Kekhasan Atom Karbon serta Tatanama, Struktur, dan Sifat Fisis Alkana, Alkena, Alkuna**: Atom C 1°, 2°, 3°, 4°, tatanama IUPAC rantai lurus dan bercabang C1–C10, tren titik didih isomer. *Out-of-scope*: Tatanama bisiklo/spiro dan konformasi kursi sikloheksana.
- **11.2 Minyak Bumi: Distilasi Bertingkat, Bilangan Oktan, dan Dampak Pembakaran**: Fraksi menara distilasi, bilangan oktan (isooktana vs n-heptana), polutan CO, SOx, NOx. *Out-of-scope*: Kinetika fluid catalytic cracking kilang.
- **11.3 Gugus Fungsi dan Tatanama Turunan Alkana (7 Golongan)**: Alkohol, eter, aldehida, keton, asam karboksilat, ester, haloalkana (tatanama IUPAC & trivial dasar, ikatan hidrogen). *Out-of-scope*: Tatanama polifungsional kompleks.
- **11.4 Keisomeran Senyawa Karbon (Isomer Struktur dan Isomer Ruang Dasar)**: Isomer kerangka, posisi, fungsi, geometri cis-trans alkena, dan C kiral optis aktif dasar (2^n). *Out-of-scope*: Cahn-Ingold-Prelog (E/Z, R/S) dan proyeksi Fischer meso.
- **11.5 Reaksi Dasar Senyawa Karbon dan Uji Identifikasi Spesifik**: Substitusi, adisi Markovnikov, eliminasi, oksidasi alkohol 1°/2°/3°, esterifikasi, saponifikasi, uji Tollens/Fehling/Na. *Out-of-scope*: Mekanisme panah lengkung karbokation, anti-Markovnikov peroksida, kondensasi aldol.

#### Bab 12: Benzena, Makromolekul, dan Kimia Unsur Terapan (Kelas XII — Fase F)
- **12.1 Struktur, Tatanama, Sifat, dan Reaksi Substitusi Benzena**: Resonansi cincin benzena, tatanama orto/meta/para, 4 substitusi elektrofilik (halogenasi, nitrasi, sulfonasi, alkilasi Friedel-Crafts) beserta katalisnya, kegunaan turunan benzena. *Out-of-scope*: Mekanisme kompleks sigma arenium ion dan aturan Hückel (4n+2).
- **12.2 Polimer: Klasifikasi, Monomer, Polimerisasi (Adisi vs Kondensasi), dan Kegunaan**: Termoplastik vs termoset, pasangan monomer-polimer wajib (PE, PP, PVC, Teflon, Nilon-6,6, PET, Bakelit), dampak mikroplastik. *Out-of-scope*: Kinetika polimerisasi radikal bebas dan indeks polidispersitas.
- **12.3 Biomolekul (Karbohidrat, Protein/Asam Amino, Lemak) dan Uji Kualitatif**: Monosakarida, disakarida (gula pereduksi vs sukrosa), zwitterion asam amino, ikatan peptida, lemak vs minyak, uji Benedict, Iodin, Biuret, Xantoproteat, Pb-asetat. *Out-of-scope*: Siklus metabolisme (Krebs/glikolisis) dan proyeksi Haworth detail.
- **12.4 Kimia Unsur di Alam dan Industri**: Sifat dan tren Gas Mulia, Halogen, Logam Alkali/Alkali Tanah, Periode 3, Transisi Periode 4, warna nyala, kesadahan air, dan tabel nama proses industri (Down, Hall-Héroult, Frasch, Kontak, Haber-Bosch, Ostwald, Tanur Tiup). *Out-of-scope*: Teori Medan Kristal (CFT Δo), tatanama ion kompleks IUPAC lanjut, diagram Frost/Latimer.

