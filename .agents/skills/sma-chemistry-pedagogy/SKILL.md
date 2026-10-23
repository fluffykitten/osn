---
name: sma-chemistry-pedagogy
description: >-
  Pedagogical design system and mandatory authoring guidelines for generating or
  revamping SMA/MA National Curriculum (Fase E & F) chemistry study materials.
  Enforces Johnstone's Triangle, SaveMyExams cognitive budget, dual-loop learning
  (Micro-Loop per subbab and Macro-Loop at chapter end), 3 semantic callout boxes
  (Syarat Batas, Titik Rawan, Pemeriksaan Logika), IUPAC Green Book notations,
  and inline SVG diagrams with Comic Neue typography.
---

# SMA Chemistry Pedagogy — National Curriculum Authoring System (v3)

Guideline resmi berbasis riset pendidikan kimia (*Salman Madani, S.Pd.*) yang diadaptasi ke dalam format modular web bergaya **SaveMyExams** untuk seluruh modul pembelajaran Kimia SMA/MA (12 Bab / 58 Subbab, Fase E Kelas X dan Fase F Kelas XI–XII).

Setiap kali Anda membuat, merevisi, atau merestrukturisasi materi SMA:
1. **Wajib membaca matriks subbab spesifik** di [references/syllabus-58-subbabs.md](./references/syllabus-58-subbabs.md) untuk memastikan alur materi, batas *in-scope*, batasan terlarang *out-of-scope*, serta titik rawan konsep.
2. Terapkan arsitektur **Dual-Loop**:
   - **Micro-Loop** pada setiap Subbab ($x.1, x.2, \dots, x.n$): Intuisi → Formalisasi → Taktik Soal.
   - **Macro-Loop** satu kali di bagian Penutup Bab: Pengayaan Inkuiri → Ringkasan Cepat & Peta Keputusan → Evaluasi Mandiri Berjenjang (Tingkat I, II, III).
3. Patuhi **Anggaran Kognitif SaveMyExams**:
   - Panjang per subbab: **600 – 900 kata** (maksimal 1.000 kata untuk subbab hitungan berat).
   - Maksimal 3–4 kalimat per paragraf; maksimal 20 kata per kalimat.
   - 1–2 Diagram Utama per subbab berstandar `svg-diagrams` (font `Comic Neue`).
4. Seluruh materi harus tervalidasi sukses dengan:
   ```bash
   node .agents/skills/sma-chemistry-pedagogy/scripts/validate-pedagogy.mjs <file.ts>
   ```

---

## 1. Struktur Wajib Setiap Subbab (Micro-Loop)

Setiap subbab membedah **satu konsep tunggal secara tuntas** melalui 3 blok berurutan:

### 1.1 Intuisi (Jembatan Makroskopik ke Submikroskopik, ~150 kata)
- **Tujuan**: Membangun model mental tingkat partikel yang berakar dari fenomena konkret sehari-hari atau pengamatan lab.
- **Heading Markdown**:
  ```markdown
  #### 1. Intuisi: Dari Fenomena ke Tingkat Partikel
  ```
- **Ketentuan**:
  - Buka dengan fenomena nyata/laboratorium konkret (1 paragraf pendek).
  - Jelaskan apa yang terjadi pada tingkat atom/ion/molekul/elektron dengan kata kerja fisis konkret (*bertumbukan, terlepas, tarik-menarik, terhidrasi*).
  - Panggil nomor rujukan gambar di teks **sebelum** elemen gambar: `"Perhatikan skema pada **Gambar x.y** berikut:"`.
  - Sertakan inline diagram SVG berstandar `svg-diagrams` (`data-diagram="sma-bXX-..."`, font `Comic Neue`), diikuti caption:
    ```html
    <p class="text-center text-xs font-semibold text-slate-500 mt-2">Gambar x.y: Judul Diagram</p>
    ```
  - Akhiri dengan 1 kalimat pertanyaan pemantik menuju tahap Formalisasi.
  - **Pantangan**: Dilarang menggunakan bahasa antropomorfik (*"atom ingin stabil"*, *"senyawa ingin bahagia"*, *"memilih jalan malas"*).

### 1.2 Formalisasi (Representasi Simbolik & Aturan Konsep, ~250–350 kata)
- **Tujuan**: Menyajikan definisi baku IUPAC/Kurikulum Nasional, penurunan aljabar rumus, dan batasan fisis.
- **Heading Markdown**:
  ```markdown
  #### 2. Formalisasi: Konsep Baku & Hubungan Matematis
  ```
- **Komponen Wajib di Formalisasi**:
  1. Definisi resmi aktif: `**[Istilah Baku]** adalah [definisi fisis/kimiawi lugas]`.
  2. Setiap rumus matematis wajib diikuti kalimat **"Makna Fisis Rumus"** (1–2 kalimat sederhana).
  3. **Kotak Syarat Batas & Asumsi**:
     ```markdown
     > [!SYARAT_BATAS]
     > ### ⚖️ Syarat Batas & Asumsi
     > **Kondisi Berlaku:** ...
     > **Batas Keberlakuan:** Kapan rumus/aturan ini TIDAK boleh digunakan secara langsung.
     ```
  4. **Uji Konsep Kualitatif**:
     ```markdown
     ##### 🧪 Uji Konsep Kualitatif
     **Pertanyaan:** (1-2 soal konseptual singkat tanpa hitungan panjang berbasis penalaran partikel/grafik)
     *Jawaban & Analisis Singkat:* ...
     ```

### 1.3 Taktik Soal (Penerapan & Pemeriksaan Logika, ~250–350 kata)
- **Tujuan**: Menghubungkan teori ke keterampilan pemecahan masalah setara Penilaian Harian, Ujian Sekolah, hingga SNBT.
- **Heading Markdown**:
  ```markdown
  #### 3. Taktik Soal: Penerapan & Pemeriksaan Logika
  ```
- **Komponen Wajib di Taktik Soal**:
  1. **Soal Contoh (*Worked Example*)**:
     ```markdown
     ##### 📝 Soal Contoh
     **Soal:** ...
     **Strategi Langkah demi Langkah:**
     1. *Identifikasi Besaran Diketahui & Ditanya:* ...
     2. *Eksekusi Aljabar/Stoikiometri (dengan satuan lengkap):* ...
     ```
  2. **Kotak Titik Rawan Kesalahan (*Common Pitfalls*)**:
     ```markdown
     > [!TITIK_RAWAN]
     > ### ⚠️ Titik Rawan Kesalahan (Common Pitfalls)
     > (Jelaskan mengapa suatu langkah salah secara konsep dan fisis, bukan sekadar melarang).
     ```
  3. **Kotak Pemeriksaan Logika (*Sanity Check*) & Koneksi**:
     ```markdown
     > [!PEMERIKSAAN_LOGIKA]
     > ### 🔍 Pemeriksaan Logika (Sanity Check) & Koneksi
     > - **Pemeriksaan Logika:** Cara mengecek dalam 10 detik apakah angka/tanda jawaban masuk akal secara kimiawi/fisis.
     > - **Koneksi Lintas Bab:** Bagaimana konsep ini terkait dengan bab lain di Kurikulum Merdeka.
     ```
  4. **Latihan Terbimbing**:
     ```markdown
     ##### 🎯 Latihan Terbimbing
     **Soal Latihan 1:** ...
     **Soal Latihan 2:** ...
     *Kunci Jawaban Akhir:* (Berikan jawaban akhir saja tanpa pembahasan panjang).
     ```

---

## 2. Struktur Wajib Penutup Bab (Macro-Loop)

Setiap bab ditutup dengan 3 komponen integratif:

### 2.1 Pengayaan Inkuiri & Kontekstual (Literasi Sains)
```markdown
### 🌐 Pengayaan Inkuiri & Kontekstual: [Judul Studi Kasus]
1. **Penyajian Data / Fenomena Nyata:** (Tabel data riil industri, lingkungan, atau transisi energi)
2. **Pertanyaan Pemandu Bertahap:** (Pertanyaan analitis tingkat tinggi)
3. **Analisis & Sintesis Konsep:** (Pembahasan mengintegrasikan data dengan teori kimia)
4. **Koneksi Lintas Bab:** (Tautan konseptual ke bab terkait di SMA/MA)
```

### 2.2 Ringkasan Cepat (*Quick Reference*)
```markdown
### ⚡ Ringkasan Cepat & Peta Keputusan
- **Tabel Komparasi Konsep Sering Tertukar:** (Membandingkan 2 atau lebih konsep yang sering membingungkan siswa)
- **Peta Alur Keputusan (Decision Flowchart):** (Diagram alir langkah praktis memilih rumus/reaksi)
```

### 2.3 Evaluasi Mandiri Berjenjang (*Tiered Problem Set*)
```markdown
### 🏆 Evaluasi Mandiri Berjenjang

#### Tingkat I: Fondasi (Asesmen Formatif)
(3–5 Soal menguji definisi baku dan substitusi rumus langsung)

#### Tingkat II: Integrasi (Asesmen Sumatif & Ujian Sekolah)
(3–5 Soal mengintegrasikan 2 atau lebih subbab)

#### Tingkat III: Penalaran Lanjut (HOTS, TKA, & SNBT)
(2–3 Soal analitis berbasis data/grafik)
```

---

## 3. Notasi IUPAC Green Book & KaTeX

- **Simbol Besaran Fisis (Miring)**: $T, P, V, n, m, M, K_c, K_a, K_b, K_{sp}, E^\circ, \Delta H, \Delta S, \Delta G$.
- **Satuan SI & Operator Kimia (Tegak)**: $\text{mol L}^{-1}, \text{kJ mol}^{-1}, \text{g cm}^{-3}, \text{atm}, \text{L}, \text{mL}, \Delta, \log, \text{pH}$.
- **Persamaan Reaksi**:
  - Gunakan `\ce{...}` atau format baku dengan fasa zat lengkap:
    $$\ce{2H2(g) + O2(g) -> 2H2O(l)} \quad \Delta H^\circ = -571.6\text{ kJ}$$
  - Muatan ion baku: $\text{Ca}^{2+}$, $\text{Fe}^{3+}$, $\text{SO}_4^{2-}$ (bukan $\text{Ca}^{+2}$ atau $\text{SO}_4^{-2}$).
  - Gunakan panah bolak-balik `\rightleftharpoons` untuk kesetimbangan.

---

## 4. Standar Diagram SVG

Mengikuti standar penuh skill `svg-diagrams`:
- Berikan atribut `data-diagram="sma-bXX-..."` pada tag `<svg>`.
- Font teks dalam SVG wajib `Comic Neue` (diimpor via stylesheet atau inline presentation attribute).
- Panggil terlebih dahulu di teks sebelum gambar (`Gambar x.y`).
- Wajib tervalidasi 0 error dengan `node .agents/skills/svg-diagrams/scripts/validate-svg.mjs`.

---

## 5. Master Prompt Template

Gunakan template di [references/syllabus-58-subbabs.md](./references/syllabus-58-subbabs.md) Bagian 2 untuk memandu penulisan setiap subbab secara konsisten.

---

## 6. Workflow Validasi

Jalankan validator sebelum menyatakan bab/subbab selesai:
```bash
node .agents/skills/sma-chemistry-pedagogy/scripts/validate-pedagogy.mjs src/data/materials/sma/smaBab01.ts
```
Perbaiki setiap `ERROR` hingga menghasilkan **0 Errors**.
