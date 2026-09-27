# 📘 RENCANA IMPLEMENTASI REVAMP PEDAGOGIS KONTEN MATERI
## OSN Kimia Mastery — Transformasi Kurikulum Kimia SMA & Olimpiade Nasional

> **Versi**: 1.0.0  
> **Status**: *In Progress* (Fase 1 Pilot Selesai & Tervalidasi)  
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

### 1.2. Visi Baru: Kurikulum Pedagogis Berbasis Mental Model
Materi tidak sekadar menjadi buku teks digital pasif, melainkan **rangkuman terarah (guided masterclass)** yang menumbuhkan rasa ingin tahu (*curiosity*), membangun intuisi konseptual lewat analogi konkret dunia nyata, dan melatih sistematika pemecahan masalah setara bimbingan intensif tutor OSN.

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
│ 5. CONTOH SOAL BERNILAI OSN & CATATAN EVALUATOR JURI        │
└─────────────────────────────────────────────────────────────┘
```

### Rincian 5 Lapis:
1. **Lapis 1: The Intuitive Hook (Mental Model)**:
   * Mengaitkan konsep abstrak dengan pengalaman nyata sehari-hari sebelum rumus diperkenalkan.
   * *Contoh*: Reaksi pereaksi pembatas dijelaskan dengan analogi **Merakit Sandwich Keju** (10 lembar roti + 2 lembar keju hanya menghasilkan 2 sandwich karena keju habis duluan).
2. **Lapis 2: Alur Algoritma Bertahap (*Scaffolded Steps*)**:
   * Menghilangkan tebak-tebakan formula dengan membagi pemecahan masalah ke dalam langkah bernomor tegas (misal: *Alur 3 Langkah Pasti Menentukan Rumus Empiris*).
3. **Lapis 3: Angkor Visual Bersih (*Clean High-Contrast Visuals*)**:
   * Melarang ASCII monokrom gelap; menggantinya dengan vektor **SVG responsif berlatar terang** (`#f8fafc` / `#ffffff`) dengan kode warna fungsional dan tabel matriks markdown.
4. **Lapis 4: Benteng Peringatan Miskonsepsi (*Proactive Defense Callouts*)**:
   * Menggunakan format resmi GitHub Callouts (`> [!WARNING]`, `> [!TIP]`, `> [!IMPORTANT]`) yang otomatis dirender oleh sistem parser menjadi kartu interaktif dengan badge tebal dan aksen warna tematik.
5. **Lapis 5: Pembahasan Soal Terstruktur & Catatan Juri**:
   * Setiap contoh soal menguraikan data yang diketahui, rencana strategi, eksekusi matematika KaTeX bertahap, dan kotak evaluasi kesimpulan juri (`Kesimpulan Evaluator Juri`).

---

## 🗺️ 3. Audit & Rencana Revamp Seluruh Topik

### 3.1. Kurikulum Dasar & Menengah: 16 Topik Kimia SMA (`src/data/smaMaterialsData.ts`)

| ID | No | Judul Topik | Jenjang | Target Analogi & Hook Utama | Status | Prioritas |
| :---: | :---: | :--- | :---: | :--- | :---: | :---: |
| **105** | **5** | **Hukum Dasar Kimia & Konsep Mol** | **Kelas 10** | **Sandwich Keju (Pembatas), Jembatan Mol (Ibu Kota Hub)** | ✅ Selesai | **Pilot** |
| 101 | 1 | Hakikat Kimia, Metode Ilmiah & K3 Lab | Kelas 10 | Detektif Kriminal (Metode Ilmiah), Peta Simbol Bahaya Lab | ⏳ Terjadwal | Gelombang 1 |
| 102 | 2 | Struktur Atom Dasar & SPU | Kelas 10 | Apartemen Hotel Elektron (Aufbau/Hund), Tarik Tambang Inti ($Z_{\text{eff}}$) | ⏳ Terjadwal | Gelombang 1 |
| 103 | 3 | Ikatan Kimia, Geometri & Gaya Antarmolekul | Kelas 10 | Balon Udara VSEPR, Magnet Lemah vs Lem Kuat (London vs Kovalen) | ⏳ Terjadwal | Gelombang 1 |
| 104 | 4 | Tata Nama Senyawa & Persamaan Reaksi | Kelas 10 | Tata Bahasa Kimia, Neraca Akuntansi (Penyetaraan Massa) | ⏳ Terjadwal | Gelombang 1 |
| 106 | 6 | Termokimia SMA (Entalpi & Hukum Hess) | Kelas 11 | Rekening Bank Energi, Naik Tangga / Turun Lift Hess | ⏳ Terjadwal | Gelombang 2 |
| 107 | 7 | Laju Reaksi & Teori Tumbukan SMA | Kelas 11 | Polisi Tidur (Energi Aktivasi), Mobil Tabrakan Sudut Tepat | ⏳ Terjadwal | Gelombang 2 |
| 108 | 8 | Kesetimbangan Kimia Dasar SMA | Kelas 11 | Eskalator Berlawanan Arah (Dinamis), Jungkat-Jungkit Le Chatelier | ⏳ Terjadwal | Gelombang 2 |
| 109 | 9 | Larutan Asam-Basa & Titrasi Netralisasi | Kelas 11 | Perang Donor-Akseptor Proton, Titik Belok Indikator | ⏳ Terjadwal | Gelombang 2 |
| 110 | 10 | Larutan Penyangga (Buffer) & Hidrolisis | Kelas 11 | Pasukan Penjaga Kejut pH Darah, Ion Penggoda Air | ⏳ Terjadwal | Gelombang 2 |
| 111 | 11 | Kelarutan & Hasil Kali Kelarutan ($K_{sp}$) | Kelas 11 | Pesta Kolam Penuh Sesak (Saturasi), Pengendapan Selektif | ⏳ Terjadwal | Gelombang 3 |
| 112 | 12 | Sistem Koloid & Kimia Permukaan SMA | Kelas 11 | Efek Lampu Kabut (Tyndall), Rompi Pelampung Sabun (Misil) | ⏳ Terjadwal | Gelombang 3 |
| 113 | 13 | Sifat Koligatif Larutan SMA | Kelas 12 | Tamu Pengganggu Penguapan, Selaput Membran Penjaga Sel | ⏳ Terjadwal | Gelombang 3 |
| 114 | 14 | Reaksi Redoks & Sel Elektrokimia SMA | Kelas 12 | Perdagangan Elektron Pasar Global, Baterai Pompa Kimia-Listrik | ⏳ Terjadwal | Gelombang 3 |
| 115 | 15 | Kimia Unsur Golongan Utama & Transisi 4 | Kelas 12 | Spektrum Warna Kompleks Kembang Api, Kembang Logam Magnetik | ⏳ Terjadwal | Gelombang 3 |
| 116 | 16 | Kimia Karbon & Makromolekul | Kelas 12 | Lego Rantai Karbon, Ritsleting Protein & DNA | ⏳ Terjadwal | Gelombang 3 |

---

### 3.2. Kurikulum Tingkat Lanjut: 10 Pilar Silabus OSN/IChO (`src/data/materialsData.ts`)

| No | Pilar Silabus OSN | Target Peningkatan Pedagogis | Level Target | Status |
| :---: | :--- | :--- | :---: | :---: |
| **1** | Struktur Atom & Periodisitas Unsur | Mekanika kuantum, orbital radial/angular, aturan Slater, spektroskopi atom | OSN-K / OSN-P | ⏳ Terjadwal |
| **2** | Ikatan Kimia & Geometri Molekul | Teori Orbital Molekul (MOT), diagram MO diatomik heteronuklir, hibridisasi kompleks | OSN-P / OSN | ⏳ Terjadwal |
| **3** | Stoikiometri & Wujud Zat | Gas riil Van der Waals, struktur kristal kisi intan/fcc/bcc, analisis stoikiometri non-stokiometrik | OSN-K / OSN-P | ⏳ Terjadwal |
| **4** | Termodinamika Kimia | Siklus Born-Haber, Entropi ($S$), Energi Bebas Gibbs ($\Delta G$), persamaan Van 't Hoff | OSN-P / OSN | ⏳ Terjadwal |
| **5** | Kesetimbangan Kimia & Larutan | Kesetimbangan poliprotik simultan, diagram pecahan alfa ($\alpha$-fraction), kekuatan ionik Debye-Hückel | OSN-P / OSN | ⏳ Terjadwal |
| **6** | Kinetika Kimia & Mekanisme Reaksi | Pendekatan keadaan tunak (Steady-State Approximation), kinetika reaksi berantai, Arrhenius lanjut | OSN-P / OSN | ⏳ Terjadwal |
| **7** | Elektrokimia & Potensial Sel | Persamaan Nernst multikomponen, diagram Latimer & Frost, overpotensial kinetika elektroda | OSN-P / OSN | ⏳ Terjadwal |
| **8** | Kimia Anorganik & Senyawa Koordinasi | Teori Medan Kristal (CFT), efek Jahn-Teller, isomerisme koordinasi, deret spektrokimi | OSN / IChO | ⏳ Terjadwal |
| **9** | Kimia Analitik & Dasar Spektroskopi | Spektrofotometri UV-Vis (Beer-Lambert), FTIR, $^{1}\text{H}$-NMR interaktif, kurva titrasi presisi | OSN / IChO | ⏳ Terjadwal |
| **10** | Kimia Organik & Biokimia | Mekanisme reaksi panah lengkung ($S_N1, S_N2, E1, E2$, elektrofilik aromatik), stereokimia ($R/S$), siklus biokimia | OSN / IChO | ⏳ Terjadwal |

---

## 🚀 4. Roadmap Eksekusi Berfase (Execution Phases)

```
[FASE 1: Pilot & Fondasi] ──► [FASE 2: Fondasi SMA 1-4] ──► [FASE 3: Fisika & Larutan SMA 6-10]
        (SELESAI)                   (Minggu 1-2)                      (Minggu 3-4)
                                                                            │
[DEPLOY & VERIFIKASI] ◄── [FASE 5: 10 Pilar OSN] ◄── [FASE 4: Lanjutan SMA 11-16]
     (Rilis Final)             (Minggu 7-9)                     (Minggu 5-6)
```

### 🔹 Fase 1: Pilot Project & Fondasi Parser (STATUS: SELESAI ✅)
* **Pencapaian**:
  * Perombakan total **Topik 5 SMA (Stoikiometri & Konsep Mol)** menggunakan Tone Opsi A.
  * Pembuatan infografik SVG modern berlatar terang untuk **Peta Jembatan Mol (The Central Hub)** dan tabel matriks konversi operasional.
  * Implementasi parser GitHub callouts (`[!WARNING]`, `[!TIP]`, `[!IMPORTANT]`, `[!NOTE]`, `[!CAUTION]`) di [`src/lib/katex-helpers.ts`](file:///e:/VibeCoding/osn/src/lib/katex-helpers.ts) dengan styling kartu edukasi modern.
  * Penyelesaian kendala *logout redirect* dan sanitasi delimiter KaTeX.

### 🔹 Fase 2: Fondasi Struktur & Reaksi Dasar SMA (Topik 101–104)
* **Fokus**:
  * Topik 101: Metode Ilmiah, Angka Penting & Pengukuran Lab.
  * Topik 102: Struktur Atom Bohr & Mekanika Kuantum Sederhana, Konfigurasi Aufbau/Hund/Pauli, dan Tren SPU ($r, IE, EA, EN$).
  * Topik 103: Pembentukan Ikatan Ionik, Kovalen, Logam, Geometri Molekul VSEPR & Kepolaran.
  * Topik 104: Aturan Tata Nama Senyawa IUPAC & Penyetaraan Reaksi Redoks Dasar.
* **Output**: Analogi apartemen elektron, kartu bahaya SDS interaktif, dan algoritma penyetaraan reaksi tanpa coba-coba.

### 🔹 Fase 3: Dinamika, Termokimia & Kesetimbangan SMA (Topik 106–110)
* **Fokus**:
  * Topik 106: Kalorimetri $q = mc\Delta T$, Siklus Energi Hukum Hess, Energi Ikatan Rata-rata.
  * Topik 107: Penentuan Hukum Laju & Orde Reaksi via Data Eksperimen, Teori Tumbukan & Faktor Suhu/Katalis.
  * Topik 108: Perhitungan $K_c$ dan $K_p$, Analisis Pergeseran Asas Le Chatelier (Suhu, Tekanan, Volume, Konsentrasi).
  * Topik 109: Teori Arrhenius/Brønsted-Lowry/Lewis, Perhitungan pH Asam-Basa Kuat/Lemah, Kurva Titrasi.
  * Topik 110: Mekanisme Buffer Asam/Basa, Rumus Henderson-Hasselbalch, dan Hidrolisis Garam.

### 🔹 Fase 4: Larutan Lanjutan, Redoks & Kimia Karbon SMA (Topik 111–116)
* **Fokus**:
  * Topik 111: Kelarutan $s$ vs $K_{sp}$, Efek Ion Senama, pH Pengendapan Selektif.
  * Topik 112: Jenis Koloid, Koagulasi, Elektroforesis, Dialisis.
  * Topik 113: Sifat Koligatif ($\Delta P, \Delta T_b, \Delta T_f, \pi$) dan Faktor van 't Hoff $i$.
  * Topik 114: Penyetaraan Redoks Metode PBO dan Setengah Reaksi, Sel Volta ($E^\circ_{\text{sel}}$), Sel Elektrolisis & Hukum Faraday.
  * Topik 115: Sifat Fisik & Kimia Unsur Golongan Utama (IA, IIA, VIIA, VIIIA) dan Transisi Periode 4.
  * Topik 116: Gugus Fungsi Organik (Alkohol, Eter, Aldehid, Keton, Karboksilat, Ester), Benzena, Polimer & Biomolekul.

### 🔹 Fase 5: Eskalasi 10 Pilar Tingkat Lanjut OSN / IChO (`materialsData.ts`)
* **Fokus**:
  * Mentransformasi materi 10 Pilar OSN menjadi panduan pemikiran tingkat olimpiade internasional.
  * Integrasi diagram Orbital Molekul (MOT), perhitungan termodinamika non-standar, pendekatan kinetika kompleks, dan mekanisme organik panah lengkung (*arrow-pushing*).

---

## 📝 5. Panduan Teknis Penyusunan Modul (Authoring Styleguide)

Bagi pengembang kurikulum atau agen AI yang merombak setiap file materi, berikut adalah pedoman baku sintaks dan struktur:

### 5.1. Template Standar Markdown Blok Konsep Inti
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
> [Penjelasan hal fatal yang sering salah dilakukan siswa dalam ujian]:
> - **Kesalahan Klasik**: [Uraian kesalahan]
> - **Kaidah yang Benar**: [Uraian kaidah yang sah]

---

> [!TIP]
> ### 💡 [Trik Cepat / Heuristik Mengingat]
> - **Arah A**: [Trik praktis]
> - **Arah B**: [Trik praktis]
```

### 5.2. Aturan Keamanan Notasi Matematika & KaTeX
1. **Hindari Delimiter yang Tidak Berpasangan**: Seluruh tanda matematika wajib berpasangan tepat (`$...$` untuk inline, `$$...$$` untuk display).
2. **Escaping Backslash di String JavaScript**: Di dalam berkas `.ts` dengan template string (backtick), setiap backslash LaTeX harus di-escape ganda jika bukan escape string resmi:
   * Tulis `\\frac{a}{b}`, bukan `\frac{a}{b}`.
   * Tulis `\\text{gram}`, bukan `\text{gram}`.
   * Tulis `\\ce{H2O}`, bukan `\ce{H2O}`.
3. **Persen Simbol**: Tulis `\\%` di dalam rumus KaTeX agar tidak memotong baris komentar TeX.
4. **Infografik SVG**:
   * Gunakan tag SVG bersih: `<svg viewBox="0 0 900 480" width="100%" height="100%" ...>`
   * Pastikan kontras teks tinggi (fill `#0f172a` atau `#1e293b`), bukan warna redup.
   * Sertakan tabel markdown pendamping di bawah SVG untuk kemudahan salin dan aksesibilitas.

---

## 🛡️ 6. Protokol Jaminan Mutu (Quality Assurance & Testing)

Setiap gelombang pembaharuan topik wajib lulus 3 lapis pengujian otomatis sebelum di-push:

1. **KaTeX Delimiter & Syntax Validator**:
   ```bash
   node scratch/test_all_materials.cjs
   ```
   *Wajib menghasilkan*: `TOTAL DISPLAY MATH ERRORS ACROSS ALL MATERIALS: 0`.

2. **TypeScript Strict Typecheck**:
   ```bash
   npx tsc -b
   ```
   *Wajib menghasilkan*: `Exit Code 0` tanpa galat pada struktur data `ConceptBlock` atau `MaterialItem`.

3. **Vite Production Bundler**:
   ```bash
   npm run build
   ```
   *Wajib menghasilkan*: `dist/` terkompilasi optimal tanpa sintaks rusak.

---

## 👥 7. Penanggung Jawab & Catatan Implementasi

* **Lead Pedagogical Architecture**: Tim Pengembang OSN Kimia Mastery & Antigravity AI
* **Dokumentasi Terkait**:
  * Modul Sumber: [`src/data/smaMaterialsData.ts`](file:///e:/VibeCoding/osn/src/data/smaMaterialsData.ts)
  * Modul OSN: [`src/data/materialsData.ts`](file:///e:/VibeCoding/osn/src/data/materialsData.ts)
  * Helper KaTeX: [`src/lib/katex-helpers.ts`](file:///e:/VibeCoding/osn/src/lib/katex-helpers.ts)
  * Portal Laporan Bug: [`src/pages/admin/AdminBugReports.tsx`](file:///e:/VibeCoding/osn/src/pages/admin/AdminBugReports.tsx)
