# Panduan Lengkap: Integrasi Cloudflare R2 Storage untuk Gambar & Diagram Kimia
## Platform OSN Kimia Mastery

Dokumen ini menjelaskan konfigurasi dan alur kerja fitur penyimpanan aset visual (diagram orbital molekul, struktur kimia, diagram fasa, grafik kinetika, dll.) menggunakan **Cloudflare R2 Object Storage**.

---

## 1. Keunggulan Cloudflare R2 untuk OSN Kimia Mastery

| Fitur | Spesifikasi / Benefit |
| :--- | :--- |
| **Batas Ukuran Berkas** | **10 MB per berkas** (format PNG, JPG, WEBP, SVG, GIF, PDF). |
| **Kategori Otomatis** | Berkas terorganisir ke subfolder: `diagrams/`, `questions/`, `materials/`, `avatars/`. |
| **Biaya Egress** | **100% Gratis ($0 egress fee)** — Tidak ada biaya transfer data unduhan gambar oleh ribuan siswa. |
| **Paket Gratis Bulanan** | **10 GB storage**, **1.000.000 operasi Class A (Upload/Delete)**, **10.000.000 operasi Class B (Download/View)** per bulan. |
| **Fitur Frontend** | Drag & Drop, **Paste Screenshot langsung (Ctrl+V)**, zoom interaktif, rotasi 90°, dan Galeri Media Guru. |

---

## 2. Status Konfigurasi Saat Ini

1. **Nama Bucket R2**: `osn-storage` *(Sudah Anda buat di Cloudflare Dashboard)*.
2. **Binding Worker**: `STORAGE_BUCKET` telah dipasang di [`wrangler.json`](./wrangler.json) dan [`cloudflare-worker/wrangler.toml`](./cloudflare-worker/wrangler.toml).
3. **Endpoint API**:
   - `POST /api/storage/upload` : Mengunggah gambar/diagram dan mengembalikan URL publik.
   - `GET  /api/storage/file/:key` : Menampilkan gambar dengan HTTP 304 Caching.
   - `GET  /api/storage/list` : Mengambil daftar seluruh diagram tersimpan untuk galeri.
   - `DELETE /api/storage/file/:key` : Menghapus diagram dari R2.

---

## 3. Langkah Menghubungkan Bucket ke Cloudflare Worker

Karena Anda sudah membuat bucket `osn-storage`, pastikan binding ke Worker aktif menggunakan salah satu dari dua cara berikut:

### Cara A: Melalui Cloudflare Dashboard (Browser)
1. Buka [https://dash.cloudflare.com](https://dash.cloudflare.com) lalu masuk ke akun Anda.
2. Di menu kiri, buka **Workers & Pages** -> pilih worker Anda (misal: `osn` atau `osn-kimia-mailer`).
3. Buka tab **Settings** -> pilih sub-menu **Bindings**.
4. Di bagian **R2 Bucket Bindings**, klik **Add**:
   - **Variable name**: `STORAGE_BUCKET` *(Huruf kapital, persis seperti ini)*.
   - **R2 bucket**: Pilih `osn-storage`.
5. Klik **Save and Deploy**.

---

### Cara B: Menggunakan Wrangler CLI (Terminal)
Jika Anda menggunakan Wrangler di terminal proyek:
```bash
# Melakukan build frontend
npm.cmd run build

# Deploy worker beserta binding R2 otomatis
npx wrangler deploy
```

---

## 4. Cara Menggunakan Fitur di Aplikasi

### A. Di Studio Guru (`/teacher`)
- Klik tombol **"Galeri Diagram R2"** di header dasbor guru.
- Anda dapat meninjau seluruh diagram yang tersimpan, mencari diagram berdasarkan nama, mengunggah diagram baru, atau menyalin link URL publiknya.

### B. Di AI Question Studio (`/teacher/ai-studio`)
- Saat menghasilkan draf soal olimpiade, terdapat slot **"Diagram / Gambar Soal (Cloudflare R2)"**.
- Anda dapat:
  1. Menyeret berkas gambar diagram ke kotak upload (*Drag & Drop*).
  2. Mengambil tangkapan layar diagram (misal via *Snipping Tool*) lalu langsung menekan **Ctrl+V** di kotak upload.
  3. Memilih diagram yang sudah ada dari tombol **"Buka Galeri Diagram R2"**.
- Diagram akan otomatis tersimpan di field `diagram_url` saat soal disimpan ke Question Bank.

### C. Di Lembar Pengerjaan Siswa (`/worksheet`)
- Jika soal memiliki diagram visual, naskah pengerjaan siswa di panel kiri akan menampilkan kotak pratinjau diagram resolusi tinggi.
- Siswa dapat mengklik tombol **"Perbesar Diagram"** untuk membuka modal interaktif (Fitur Zoom In, Zoom Out, Reset, dan Rotasi 90°) agar detail struktur rumus kimia dapat dianalisis dengan sangat jelas.

### D. Di Bank Soal (`/practice`)
- Setiap butir soal yang memiliki diagram dilengkapi lencana visual **`[📷 Diagram Visual]`** dan kartu thumbnail diagram yang dapat diklik untuk pratinjau instan.
