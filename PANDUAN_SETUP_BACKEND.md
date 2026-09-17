# Tutorial Khusus: Setup Email Notifikasi Registrasi & Reset Password
## (Supabase Auth, Cloudflare Workers, & Resend — Tanpa Custom Domain)

Tutorial ini **khusus membahas sistem pengiriman email**:
1. **Email Reset Kata Sandi & Konfirmasi Akun** (Dikelola oleh **Supabase Auth**)
2. **Email Notifikasi Pendaftaran Siswa ke Admin & Sambutan Siswa** (Dikelola oleh **Cloudflare Workers + Resend**)

---

## 1. Bagaimana Alur Kerja Emailnya?

### A. Saat Siswa Mendaftar Akun Baru:
```
[Siswa Submit Form Pendaftaran]
         │
         ├───▶ 1. Akun & Data Sekolah tersimpan di Supabase
         │
         └───▶ 2. Otomatis memanggil Cloudflare Worker Anda (*.workers.dev)
                        │
                        ▼
                 [Resend API Relay]
                        │
       ┌────────────────┴────────────────┐
       ▼                                 ▼
[Email Masuk ke Admin]          [Email Masuk ke Siswa]
ezzarscarlet@gmail.com           Email siswa terdaftar
Berisi: Nama, Sekolah, Kelas,    Berisi: Sambutan & link
Target OSN, WhatsApp             ke lembar kerja
```

### B. Saat Siswa Lupa Password:
```
[Siswa Input Email di Menu "Lupa Password"]
         │
         ▼
[Supabase Auth Engine] ──▶ Otomatis mengirim email dengan link reset unik
         │
         ▼
[Siswa Klik Link di Email] ──▶ Terbuka halaman buat kata sandi baru (/login?mode=reset)
```

---

## 2. Langkah Setup: Email Notifikasi Pendaftaran (Cloudflare Worker + Resend)

Bagian ini agar setiap ada siswa yang mendaftar, **email notifikasi otomatis masuk ke `ezzarscarlet@gmail.com`**.

### Langkah 2.1: Ambil API Key dari Resend
1. Buka [https://resend.com](https://resend.com) lalu daftar/login.
2. Di sidebar kiri, klik menu **API Keys** -> klik **Create API Key**.
3. Beri nama (misal: `osn-kimia`), izin **Full access**, klik **Add**.
4. **Salin API Key** Anda (contoh: `re_123456789_abcdef...`).
*(Catatan: Tanpa custom domain, Resend mengizinkan pengiriman menggunakan sender `onboarding@resend.dev` dan langsung terkirim ke email akun Resend Anda)*.

---

### Langkah 2.2: Pasang Kode di Cloudflare Worker
1. Buka [https://dash.cloudflare.com](https://dash.cloudflare.com) -> **Workers & Pages**.
2. Klik **Create Application** -> pilih tab **Workers** -> klik **Create Worker**.
3. Beri nama: `osn-kimia-mailer` -> klik **Deploy**.
4. Klik tombol **Edit Code** (Quick Edit di browser).
5. Hapus semua kode bawaan, lalu salin dan tempel seluruh isi dari file:
   [`cloudflare-worker/worker.js`](file:///c:/osn/cloudflare-worker/worker.js)
6. Klik **Save and Deploy**.

---

### Langkah 2.3: Masukkan API Key Resend ke Cloudflare Worker
1. Di halaman Worker `osn-kimia-mailer`, buka tab **Settings** -> **Variables and Secrets**.
2. **Tambah Secret (API Key)**:
   - Klik **Add** pada bagian **Secrets**.
   - Variable name: `RESEND_API_KEY`
   - Value: Tempel API key Resend Anda (`re_...`).
   - Klik **Deploy**.
3. **Tambah Variables**:
   - Klik **Add** pada bagian **Variables**.
   - Name: `ADMIN_EMAIL` | Value: `ezzarscarlet@gmail.com`
   - Name: `SENDER_NAME` | Value: `OSN Kimia Mastery`
   - Name: `SENDER_EMAIL` | Value: `onboarding@resend.dev`
   - Klik **Deploy**.
4. Salin URL Worker Anda yang ada di bagian atas, contoh:
   `https://osn-kimia-mailer.subdomain-anda.workers.dev`

---

### Langkah 2.4: Sambungkan URL Worker ke Frontend
Buka file [`.env.local`](file:///c:/osn/.env.local) di folder proyek OSN Anda, lalu tambahkan baris ini:
```env
VITE_CLOUDFLARE_MAILER_URL=https://osn-kimia-mailer.subdomain-anda.workers.dev
```

---

## 3. Langkah Setup: Email Reset Password (Supabase Auth)

Supabase sudah memiliki sistem pengiriman email bawaan. Anda hanya perlu memastikan URL tujuan tautan reset diarahkan ke aplikasi Anda.

1. Buka [https://supabase.com/dashboard](https://supabase.com/dashboard) -> Masuk ke proyek Anda.
2. Di sidebar kiri, buka menu **Authentication** -> **URL Configuration**.
3. Pastikan konfigurasi URL sebagai berikut:
   - **Site URL**: `http://localhost:5173` *(atau domain hosting jika sudah online)*
   - **Redirect URLs**: Klik **Add URL**, lalu tambahkan:
     - `http://localhost:5173/login?mode=reset`
     - *(Jika ada domain hosting produksi, tambahkan juga: `https://domain-anda.com/login?mode=reset`)*
4. Klik **Save**.

---

## 4. Cara Pengujian (Verifikasi Langsung)

### Uji 1: Notifikasi Siswa Baru
1. Buka web di browser: `http://localhost:5173/login?mode=register`
2. Isi pendaftaran siswa baru (Nama, Email, Password, Asal Sekolah, Tingkat Kelas, Target Olimpiade).
3. Klik **Selesaikan Pendaftaran Akun Siswa**.
4. **Cek Email Admin**: Buka kotak masuk email `ezzarscarlet@gmail.com`. Anda akan melihat email bertema OSN Kimia Mastery berisi rincian siswa yang baru mendaftar!

### Uji 2: Reset Password
1. Buka web di menu: `http://localhost:5173/login?mode=forgot`
2. Masukkan alamat email terdaftar -> Klik **Kirim Tautan Pemulihan**.
3. Buka email Anda, klik tautan konfirmasi dari Supabase. Anda akan otomatis dialihkan ke halaman formulir pembuatan kata sandi baru.
