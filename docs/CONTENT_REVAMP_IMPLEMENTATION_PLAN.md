# 📘 RENCANA IMPLEMENTASI REVAMP PEDAGOGIS KONTEN MATERI
## OSN Kimia Mastery — Transformasi Kurikulum Kimia SMA & Olimpiade Nasional

> **Versi**: 1.2.0 (Terbaru - Update Pengujian QA, Revamp Contoh Soal SMA & Checkpoints)  
> **Status**: *Fase 1 (Pilot) & Fase 2 (Fase E Topik 101–105) SELESAI & TERVALIDASI 100%*  
> **Standar Pedagogi**: **Tone Opsi A** (Semi-formal, Interaktif, Analogi Mental Model, Anti-Hafalan Buta, Berjenjang/Scaffolded)  
> **Basis Data Sasaran**: `src/data/smaMaterialsData.ts` (16 Topik SMA) & `src/data/materialsData.ts` (10 Pilar OSN/IChO)

---

## 🎯 1. Latar Belakang & Urgensi Perubahan

### 1.1. Kondisi Konten Sebelumnya (Status Quo)
Evaluasi terhadap materi rangkuman yang telah dibuat menunjukkan beberapa kelemahan pedagogis:
1. **Terlalu Teoretis & Kurang Berorientasi Pemahaman Siswa**: Materi cenderung menyajikan definisi formal dan formula matematika tanpa jembatan intuisi fisis di baliknya.
2. **Ketiadaan *Scaffolding* (Alur Bernalar Terstruktur)**: Siswa langsung dihadapkan pada rumus akhir tanpa tahapan berpikir logis (misalnya mengapa rumus tersebut muncul dan bagaimana alur langkah menerapkannya).
3. **Miskonsepsi Tidak Dimitigasi Secara Proaktif**: Jebakan klasik ujian (seperti pembulatan rasio mol desimal, aturan pelepasan elektron ion logam transisi dari subkulit $4s$ sebelum $3d$, atau perbedaan $M_r$ vs massa molar) tidak diberi penekanan khusus.
4. **Tampilan Diagram Visual Rendah Kontras**: Banyak skema alur disajikan dalam teks ASCII di dalam blok terminal hitam pekat (`bg-slate-900`), yang sulit dibaca di perangkat mobile dan tidak menarik secara visual.
5. **Contoh Soal SMA Terlalu Bernuansa Olimpiade Berat**: Contoh soal sebelumnya mencampur aduk materi dasar SMA dengan istilah/persoalan spesifik OSN/IChO sehingga mengintimidasi siswa reguler.

### 1.2. Visi Baru: Kurikulum Pedagogis Berbasis Mental Model
Materi tidak sekadar menjadi buku teks digital pasif, melainkan **rangkuman terarah (guided masterclass)** yang menumbuhkan rasa ingin tahu (*curiosity*), membangun intuisi konseptual lewat analogi konkret dunia nyata, dan melatih sistematika pemecahan masalah setara bimbingan intensif tutor ahli.

---

## 🧠 2. Kerangka Kerja Pedagogis (Tone Opsi A — Arsitektur 5 Lapis)

Setiap topik materi dalam silabus wajib disusun mengikuti **Arsitektur 5 Lapis (The 5-Layer Pedagogical Architecture)**:

```
┌─────────────────────────────────────────────────────────────┐
│ 1. THE INTUITIVE HOOK (Analogi Nyata & Mental Model Awal)   │
├─────────────────────────────────────────────────────────────┤
│ 2. ALUR ALGORITMA BERTAHAP (Scaffolded Step-by-Step Logic)  │
├─────────────────────────────────────────────────────────────┤
│ 3. ANGKOR VISUAL BERSIH (Infografik Vektor SVG & Matriks)   │
├─────────────────────────────────────────────────────────────┤
│ 4. BENTENG PERINGATAN MISKONSEPSI ([!WARNING] / [!TIP])    │
├─────────────────────────────────────────────────────────────┤
│ 5. PEMBAHASAN CONTOH SOAL KHUSUS LINGKUP SMA (Sedang & HOTS)│
└─────────────────────────────────────────────────────────────┘
```

### Rincian 5 Lapis & Pembaruan Standar Terbaru:
1. **Lapis 1: The Intuitive Hook (Mental Model)**:
   * Mengaitkan konsep abstrak dengan pengalaman nyata sehari-hari sebelum rumus diperkenalkan.
   * *Contoh*: Reaksi pereaksi pembatas dijelaskan dengan analogi **Merakit Sandwich Keju** (10 lembar roti + 2 lembar keju hanya menghasilkan 2 sandwich karena keju habis duluan).
2. **Lapis 2: Alur Algoritma Bertahap (*Scaffolded Steps*)**:
   * Menghilangkan tebak-tebakan formula dengan membagi pemecahan masalah ke dalam langkah bernomor tegas (misal: *Alur 3 Langkah Pasti Menentukan Rumus Empiris*).
3. **Lapis 3: Angkor Visual Bersih (*Clean High-Contrast Visuals*)**:
   * Melarang ASCII monokrom gelap; menggantinya dengan vektor **SVG responsif berlatar terang** (`#f8fafc` / `#ffffff`) dengan kode warna fungsional dan tabel matriks markdown.
4. **Lapis 4: Benteng Peringatan Miskonsepsi (*Proactive Defense Callouts*)**:
   * Menggunakan format resmi GitHub Callouts (`> [!WARNING]`, `> [!TIP]`, `> [!IMPORTANT]`) yang otomatis dirender oleh sistem parser menjadi kartu interaktif dengan badge tebal dan aksen warna tematik.
   * Diperkuat dengan **Uji Pemahaman Cepat (*Concept Checkpoint Quiz*)** di setiap blok prasyarat dan konsep inti (tipe True/False konseptual & Pilihan Ganda berbobot untuk membongkar miskonsepsi).
5. **Lapis 5: Pembahasan Contoh Soal Khusus Lingkup SMA (Sedang & HOTS)**:
   * **Bebas dari Framing OSN**: Pembahasan contoh soal pada modul SMA murni difokuskan pada kurikulum SMA (Kurikulum Merdeka, Asesmen Nasional, UTBK-SNBT, Ujian Sekolah SMA).
   * **Tingkat Kesulitan Terkalibrasi**: Soal mudah dieliminasi; hanya menyajikan level **Sedang** dan **Sulit (HOTS SMA)**.
   * **Kuantitas Baku & Variatif**: Tepat **5 contoh soal** per topik dengan variasi skenario yang luas.
   * **Pemisahan Kuis**: Pada bagian Contoh Soal (*Tahap 3: Pembahasan Contoh Soal*), **tidak ada kuis uji pemahaman cepat** agar siswa fokus pada alur pemecahan masalah.
   * **Styling Callout Serasi**: Evaluasi dan trik cepat menggunakan callout `> [!TIP] ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)` dengan aksen hijau zamrud (*emerald*) yang serasi dengan card container Tahap 3.

---

## 🗺️ 3. Audit & Rencana Revamp Seluruh Topik

### 3.1. Kurikulum Dasar & Menengah: 16 Topik Kimia SMA (`src/data/materials/`)

| ID | No | Judul Topik | Jenjang | Target Analogi & Hook Utama | Status | Hasil Validasi & Coverage |
| :---: | :---: | :--- | :---: | :--- | :---: | :---: |
| **101** | **1** | **Hakikat Kimia, Metode Ilmiah & K3 Lab** | **Kelas 10 (Fase E)** | **Investigasi Detektif Forensik, Simbol GHS, Emas AAA** | **✅ Selesai** | **Coverage 100% (5 Soal, 18 Kuis, 10 Miskonsepsi)** |
| **102** | **2** | **Struktur Atom Dasar & SPU** | **Kelas 10 (Fase E)** | **Kamar Hotel Tingkat Elektron, Tarik Tambang Inti ($Z_{\text{eff}}$)** | **✅ Selesai** | **Coverage 100% (5 Soal, 18 Kuis, 8 Miskonsepsi)** |
| **103** | **3** | **Ikatan Kimia, Geometri & Gaya Antarmolekul** | **Kelas 10 (Fase E)** | **Sistem Barter vs Saham Elektron, Balon Udara VSEPR** | **✅ Selesai** | **Coverage 100% (5 Soal, 24 Kuis, 11 Miskonsepsi)** |
| **104** | **4** | **Tata Nama Senyawa & Persamaan Reaksi** | **Kelas 10 (Fase E)** | **Tata Bahasa Kimia IUPAC, Neraca Akuntansi Antoine Lavoisier** | **✅ Selesai** | **Coverage 100% (5 Soal, 24 Kuis, 10 Miskonsepsi)** |
| **105** | **5** | **Hukum Dasar Kimia & Konsep Mol** | **Kelas 10 (Fase E)** | **Sandwich Keju (Pembatas), Jembatan Mol (Ibu Kota Hub)** | **✅ Selesai** | **Coverage 100% (5 Soal, 18 Kuis, 9 Miskonsepsi)** |
| **106** | **6** | **Termokimia SMA (Entalpi & Hukum Hess)** | **Kelas 11 (Fase F1)** | **Rekening Bank Energi, Naik Tangga / Turun Lift Hess** | **✅ Selesai** | **Coverage 100% (5 Soal, 19 Kuis, 11 Miskonsepsi)** |
| **107** | **7** | **Laju Reaksi & Teori Tumbukan SMA** | **Kelas 11 (Fase F1)** | **Polisi Tidur (Energi Aktivasi), Mobil Tabrakan Sudut Tepat** | **✅ Selesai** | **Coverage 100% (5 Soal, 19 Kuis, 15 Miskonsepsi)** |
| **108** | **8** | **Kesetimbangan Kimia Dasar SMA** | **Kelas 11 (Fase F1)** | **Eskalator Berlawanan Arah (Dinamis), Jungkat-Jungkit Le Chatelier** | **✅ Selesai** | **Coverage 100% (5 Soal, 21 Kuis, 17 Miskonsepsi)** |
| **109** | **9** | **Larutan Asam-Basa & Titrasi Netralisasi** | **Kelas 11 (Fase F1)** | **Perang Donor-Akseptor Proton, Titik Belok Indikator** | **✅ Selesai** | **Coverage 100% (5 Soal, 23 Kuis, 19 Miskonsepsi)** |
| 110 | 10 | Larutan Penyangga (Buffer) & Hidrolisis | Kelas 11 (Fase F1) | Pasukan Penjaga Kejut pH Darah, Ion Penggoda Air | ⏳ Terjadwal | Prioritas Fase 3 (Gap: Ion Senama & Kurva Titrasi) |
| 111 | 11 | Kelarutan & Hasil Kali Kelarutan ($K_{sp}$) | Kelas 11 (Fase F1) | Pesta Kolam Penuh Sesak (Saturasi), Pengendapan Selektif | ⏳ Terjadwal | Prioritas Fase 3 |
| 112 | 12 | Sistem Koloid & Kimia Permukaan SMA | Kelas 11 (Fase F1) | Efek Lampu Kabut (Tyndall), Rompi Pelampung Sabun (Misil) | ⏳ Terjadwal | Prioritas Fase 3 |
| 113 | 13 | Sifat Koligatif Larutan SMA | Kelas 12 (Fase F2) | Tamu Pengganggu Penguapan, Selaput Membran Penjaga Sel | ⏳ Terjadwal | Prioritas Fase 4 |
| 114 | 14 | Reaksi Redoks & Sel Elektrokimia SMA | Kelas 12 (Fase F2) | Perdagangan Elektron Pasar Global, Baterai Pompa Kimia-Listrik | ⏳ Terjadwal | Prioritas Fase 4 (Gap: Korosi & Baterai Komersial) |
| 115 | 15 | Kimia Unsur Golongan Utama & Transisi 4 | Kelas 12 (Fase F2) | Spektrum Warna Kompleks Kembang Api, Kembang Logam Magnetik | ⏳ Terjadwal | Prioritas Fase 4 |
| 116 | 16 | Kimia Karbon & Makromolekul | Kelas 12 (Fase F2) | Lego Rantai Karbon, Ritsleting Protein & DNA | ⏳ Terjadwal | Prioritas Fase 4 |

---

### 3.2. Kurikulum Tingkat Lanjut: 10 Pilar Silabus OSN/IChO (`src/data/materialsData.ts`)

| No | Pilar Silabus OSN | Target Peningkatan Pedagogis | Level Target | Status |
| :---: | :--- | :--- | :---: | :---: |
| **1** | Struktur Atom & Periodisitas Unsur | Mekanika kuantum, orbital radial/angular, aturan Slater, spektroskopi atom | OSN-K / OSN-P | ⏳ Terjadwal (Fase 5) |
| **2** | Ikatan Kimia & Geometri Molekul | Teori Orbital Molekul (MOT), diagram MO diatomik heteronuklir, hibridisasi kompleks | OSN-P / OSN | ⏳ Terjadwal (Fase 5) |
| **3** | Stoikiometri & Wujud Zat | Gas riil Van der Waals, struktur kristal kisi intan/fcc/bcc, analisis stoikiometri non-stokiometrik | OSN-K / OSN-P | ⏳ Terjadwal (Fase 5) |
| **4** | Termodinamika Kimia | Siklus Born-Haber, Entropi ($S$), Energi Bebas Gibbs ($\Delta G$), persamaan Van 't Hoff | OSN-P / OSN | ⏳ Terjadwal (Fase 5) |
| **5** | Kesetimbangan Kimia & Larutan | Kesetimbangan poliprotik simultan, diagram pecahan alfa ($\alpha$-fraction), kekuatan ionik Debye-Hückel | OSN-P / OSN | ⏳ Terjadwal (Fase 5) |
| **6** | Kinetika Kimia & Mekanisme Reaksi | Pendekatan keadaan tunak (Steady-State Approximation), kinetika reaksi berantai, Arrhenius lanjut | OSN-P / OSN | ⏳ Terjadwal (Fase 5) |
| **7** | Elektrokimia & Potensial Sel | Persamaan Nernst multikomponen, diagram Latimer & Frost, overpotensial kinetika elektroda | OSN-P / OSN | ⏳ Terjadwal (Fase 5) |
| **8** | Kimia Anorganik & Senyawa Koordinasi | Teori Medan Kristal (CFT), efek Jahn-Teller, isomerisme koordinasi, deret spektrokimi | OSN / IChO | ⏳ Terjadwal (Fase 5) |
| **9** | Kimia Analitik & Dasar Spektroskopi | Spektrofotometri UV-Vis (Beer-Lambert), FTIR, $^{1}\text{H}$-NMR interaktif, kurva titrasi presisi | OSN / IChO | ⏳ Terjadwal (Fase 5) |
| **10** | Kimia Organik & Biokimia | Mekanisme reaksi panah lengkung ($S_N1, S_N2, E1, E2$, elektrofilik aromatik), stereokimia ($R/S$), siklus biokimia | OSN / IChO | ⏳ Terjadwal (Fase 5) |

---

## 🚀 4. Roadmap Eksekusi Berfase (Execution Phases)

```
[FASE 1: Pilot Topik 105] ──► [FASE 2: Fase E Topik 101-105] ──► [FASE 3: Fase F1 SMA 106-112]
        (SELESAI ✅)                  (SELESAI ✅)                        (In Progress)
                                                                                │
[DEPLOY & VERIFIKASI] ◄─── [FASE 5: 10 Pilar OSN] ◄─── [FASE 4: Fase F2 SMA 113-116]
     (Rilis Final)                 (Tahap Akhir)                       (Tahap Lanjutan)
```

### 🔹 Fase 1: Pilot Project & Fondasi Parser (STATUS: SELESAI ✅)
* Perombakan total **Topik 5 SMA (Stoikiometri & Konsep Mol)** menggunakan Tone Opsi A.
* Pembuatan infografik SVG modern berlatar terang untuk **Peta Jembatan Mol (The Central Hub)** dan tabel matriks konversi operasional.
* Implementasi parser GitHub callouts (`[!WARNING]`, `[!TIP]`, `[!IMPORTANT]`, `[!NOTE]`, `[!CAUTION]`) di [`src/lib/katex-helpers.ts`](file:///c:/osn/src/lib/katex-helpers.ts).

### 🔹 Fase 2: Fondasi Struktur, Tata Nama & Fase E SMA (STATUS: SELESAI ✅)
* **Pencapaian**:
  * Perombakan menyeluruh **Topik 101, 102, 103, 104, dan 105** dengan Arsitektur 5 Lapis.
  * **25 Contoh Soal Terbimbing Murni Lingkup SMA**: Dibuatkan bank khusus di [`src/data/materials/smaWorkedExamplesFaseE.ts`](file:///c:/osn/src/data/materials/smaWorkedExamplesFaseE.ts) dengan level Sedang dan HOTS SMA, menghilangkan konteks olimpiade berat yang tidak relevan.
  * **102 Butir Uji Pemahaman Cepat (Concept Checkpoint Quizzes)**: Mengintegrasikan kuis pilihan ganda dan true/false konseptual yang melekat di setiap subtopik, disimpan di [`src/data/checkpoints/`](file:///c:/osn/src/data/checkpoints/).
  * **Pemisahan Kuis**: Kuis checkpoint dihilangkan dari bagian contoh soal agar tidak ada distraksi saat membaca pembahasan mendalam.
  * **Penyempurnaan Styling Callout**: Memperbaiki pemisahan blok kutipan markdown dan menerapkan color palette hijau zamrud (*emerald*) yang serasi dengan card container Tahap 3.
  * **100% Coverage Lolos**: Seluruh topik Fase E mencapai skor 100% pada evaluasi matriks ketercakupan pedagogis.

### 🔹 Fase 3: Termokimia, Kinetika & Larutan Fase F1 SMA (Topik 106–112)
* **Fokus Eksekusi**:
  * Mengisi celah materi (*concept gaps*) hasil analisis `validate-coverage.ts`:
    * Topik 106: Contoh soal variasi perubahan entalpi standar ($\Delta H^\circ$) dan Siklus Hess.
    * Topik 107: Contoh soal teori tumbukan efektif & energi aktivasi $E_a$.
    * Topik 109: Contoh soal komparasi 3 teori asam basa (Arrhenius, Brønsted-Lowry, Lewis).
    * Topik 110: Contoh soal efek ion senama (*common-ion effect*) & kurva titrasi buffer.
  * Menulis 5 contoh soal lingkup SMA (Sedang & HOTS) per topik (Total 35 contoh soal di `smaWorkedExamplesFaseF1.ts`).
  * Menyusun kuis uji pemahaman cepat konseptual untuk setiap subtopik Fase F1.

### 🔹 Fase 4: Sifat Koligatif, Redoks, Unsur & Kimia Karbon Fase F2 SMA (Topik 113–116)
* Menulis 5 contoh soal lingkup SMA (Sedang & HOTS) per topik (Total 20 contoh soal).
* Mengisi concept gap pada Topik 114 (Korosi & Baterai Komersial) dan Topik 116 (Stereokimia & Polimer).
* Menyusun kuis uji pemahaman cepat untuk seluruh subtopik Fase F2.

### 🔹 Fase 5: Eskalasi 10 Pilar Tingkat Lanjut OSN / IChO (`materialsData.ts`)
* Mentransformasi materi 10 Pilar OSN menjadi panduan pemikiran tingkat olimpiade internasional.
* Integrasi diagram Orbital Molekul (MOT), perhitungan termodinamika non-standar, pendekatan kinetika kompleks, dan mekanisme organik panah lengkung (*arrow-pushing*).

---

## 📝 5. Panduan Teknis Penyusunan Modul (Authoring Styleguide)

### 5.1. Template Standar Markdown Blok Konsep Inti (Tahap 1 & 2)
```markdown
### 🥪 [Ikon] [Judul Analogi / Hook Inti]

[Paragraf pengantar analogi konkret dunia nyata 2-3 kalimat]

---

### 🧭 [Alur Langkah Terstruktur / Algoritma Penyelesaian]:

1. **Langkah 1 ([Nama Langkah])**:  
   [Penjelasan aksi konkret dan rumus terkait]
2. **Langkah 2 ([Nama Langkah])**:  
   [Penjelasan aksi konkret dan rumus terkait]
3. **Langkah 3 ([Nama Langkah])**:  
   [Penjelasan aksi konkret dan rumus terkait]

---

> [!WARNING]
> ### ⚠️ [Judul Peringatan Miskonsepsi Penting]
> [Penjelasan hal fatal yang sering salah dipahami siswa dalam ujian]:
> - **Miskonsepsi Umum**: [Uraian kesalahan]
> - **Kaidah yang Benar**: [Uraian kaidah ilmiah yang sah]

---

> [!TIP]
> ### 💡 [Trik Cepat / Heuristik Mengingat]
> - **Arah A**: [Trik praktis]
> - **Arah B**: [Trik praktis]
```

### 5.2. Template Standar Contoh Soal SMA (Tahap 3)
```markdown
### 📋 Skenario & Data Eksperimen / Masalah:
[Konteks fenomena konkret atau data reaksi kimia]

---

### 🎯 Pertanyaan:
1. [Pertanyaan 1 terarah]
2. [Pertanyaan 2 terarah]

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: [Judul Langkah Pertama]
$$\text{Formula KaTeX}...$$

#### Langkah 2: [Judul Langkah Kedua]
$$\text{Formula KaTeX}...$$

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> [Intisari penalaran cepat, jebakan soal, dan cara cerdas mengeliminasi pilihan salah]
```

### 5.3. Aturan Keamanan Notasi Matematika & KaTeX
1. **Double Escaping di File TypeScript**: Seluruh formula di file `.ts` wajib menggunakan double backslash (misal: `\\frac`, `\\text`, `\\ce`, `\\Delta`, `\\implies`).
2. **Karakter Escape String Terlarang**: Hindari menulis `\beta` (menjadi backspace `\x08`), `\vec` (menjadi vertical tab `\x0b`), atau `\frac` (menjadi form feed `\x0c`).
3. **Double Superscript**: Dilarang menulis `\pi^*_{2p}^1`; wajib ditulis `{\pi^*_{2p}}^1`.
4. **`mhchem` di Dalam `\text{}`**: Jangan menaruh `\ce{}` di dalam `\text{...}`; letakkan di luar blok teks, misalnya `\text{kJ/mol}\;\ce{H2O}`.
5. **Persen Simbol**: Selalu escape persen di dalam KaTeX: `\\%`.

---

## 🛡️ 6. Protokol Jaminan Mutu (Quality Assurance & Automated Test Suite)

Repositori kini dilengkapi dengan **Suite Pengujian QA Otomatis Terpadu** yang wajib dijalankan sebelum setiap deployment:

```bash
npm run test:all
```

Perintah di atas mengeksekusi 3 suite pengujian mandiri:

### 1. `npm run test:materials` (`scripts/validate-materials.js`)
* **Cakupan**: 26 Modul/Topik Materi (16 SMA + 10 OSN).
* **Item Diuji**: 321 blok konsep/soal, 13.351+ formula KaTeX & mhchem, 71 blok SVG, 58 callouts.
* **Toleransi**: 0 Galat Fatal (*Must Pass 100%*).

### 2. `npm run test:questions` (`scripts/validate-questions.ts`)
* **Cakupan**: 810 Butir Bank Soal (SMA Fase E/F, OSK, OSP, OSN, IChO).
* **Item Diuji**: Keunikan ID, integritas opsi pilihan ganda A-E, validitas kunci jawaban (`expected_final_answer`), kelengkapan rubrik pembahasan, 24.406 formula KaTeX.
* **Toleransi**: 0 Galat Fatal (*Must Pass 100%*).

### 3. `npm run test:coverage` (`scripts/validate-coverage.ts`)
* **Cakupan**: Matriks Ketercakupan Konsep vs Contoh Soal & Audit Miskonsepsi.
* **Item Diuji**: Keterkaitan tag/keyword antara Konsep Inti dan Contoh Soal, penghitungan titik deteksi miskonsepsi (48 titik aktif), dan pelacakan *concept gaps*.
* **Ambang Batas**: Minimal 80% ketercakupan keseluruhan (saat ini mencapai **91%**, dengan Topik 101–105 mencapai **100%**).

---

## 👥 7. Struktur Berkas & Penanggung Jawab

* **Lead Pedagogical Architecture**: Tim Pengembang OSN Kimia Mastery & Antigravity AI
* **Peta Berkas Utama**:
  * Modul SMA Fase E (Topik 101–105): [`src/data/materials/smaFaseE.ts`](file:///c:/osn/src/data/materials/smaFaseE.ts)
  * Modul SMA Fase F1 (Topik 106–112): [`src/data/materials/smaFaseF1.ts`](file:///c:/osn/src/data/materials/smaFaseF1.ts)
  * Modul SMA Fase F2 (Topik 113–116): [`src/data/materials/smaFaseF2.ts`](file:///c:/osn/src/data/materials/smaFaseF2.ts)
  * Bank Contoh Soal SMA Fase E: [`src/data/materials/smaWorkedExamplesFaseE.ts`](file:///c:/osn/src/data/materials/smaWorkedExamplesFaseE.ts)
  * Pusat Bank Kuis Checkpoint: [`src/data/checkpoints/index.ts`](file:///c:/osn/src/data/checkpoints/index.ts)
  * Modul Silabus 10 Pilar OSN: [`src/data/materialsData.ts`](file:///c:/osn/src/data/materialsData.ts)
  * Helper KaTeX & Parser Callout: [`src/lib/katex-helpers.ts`](file:///c:/osn/src/lib/katex-helpers.ts)
  * Skrip QA Materi: [`scripts/validate-materials.js`](file:///c:/osn/scripts/validate-materials.js)
  * Skrip QA Bank Soal: [`scripts/validate-questions.ts`](file:///c:/osn/scripts/validate-questions.ts)
  * Skrip Matriks Ketercakupan: [`scripts/validate-coverage.ts`](file:///c:/osn/scripts/validate-coverage.ts)
