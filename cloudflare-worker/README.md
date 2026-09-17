# Panduan Deploy Cloudflare Worker: Notifikasi Pendaftaran Siswa
## Tanpa Membutuhkan Custom Domain (100% Gratis via `*.workers.dev`)

Worker ini berfungsi mengirimkan notifikasi email pendaftaran siswa baru ke **Admin (`fluffykitten.dev@gmail.com`)** dan mengirimkan email sambutan ke **Siswa** tanpa mewajibkan Anda memiliki nama domain sendiri.

---

### Langkah 1: Dapatkan API Key Gratis dari Brevo (300 email/hari)
1. Buka [https://www.brevo.com](https://www.brevo.com) dan buat akun gratis (Free Plan: 300 email/hari).
2. Verifikasi alamat email pengirim Anda (misalnya `fluffykitten.dev@gmail.com`) di menu **Senders & IP -> Senders**.
3. Buka menu **SMTP & API -> API Keys -> Generate a new API key**, lalu salin kunci API tersebut (misal: `xkeysib-...`).

---

### Langkah 2: Deploy ke Cloudflare Workers

#### Cara A: Langsung Lewat Browser (Paling Mudah, Tanpa Install CLI)
1. Masuk ke [Cloudflare Dashboard](https://dash.cloudflare.com) -> **Workers & Pages**.
2. Klik tombol **Create Application** -> **Create Worker**.
3. Beri nama worker, misalnya: `osn-kimia-mailer`. Klik **Deploy**.
4. Klik **Edit Code** (Quick Edit di browser).
5. Hapus semua kode bawaan, lalu salin dan tempel seluruh isi file [`worker.js`](./worker.js). Klik **Save and Deploy**.
6. Kembali ke halaman Worker -> tab **Settings** -> **Variables and Secrets**:
   - Di bagian **Secrets**, klik **Add**:
     - Name: `BREVO_API_KEY`
     - Value: Tempel API key Brevo dari Langkah 1.
   - Di bagian **Variables**, tambahkan:
     - `ADMIN_EMAIL`: `fluffykitten.dev@gmail.com`
     - `SENDER_EMAIL`: Email terverifikasi Anda di Brevo (misal: `fluffykitten.dev@gmail.com`)
     - `SENDER_NAME`: `OSN Kimia Mastery`
7. Salin URL Worker Anda yang berakhiran `.workers.dev`, misalnya:
   `https://osn-kimia-mailer.subdomain-anda.workers.dev`

#### Cara B: Menggunakan Terminal (Wrangler CLI)
```bash
cd cloudflare-worker
npx wrangler secret put BREVO_API_KEY
# Masukkan API Key Brevo Anda saat diminta
npx wrangler deploy
```

---

### Langkah 3: Hubungkan ke Frontend OSN Kimia Mastery
Buka file `.env` atau `.env.local` di folder proyek Anda:
```env
VITE_CLOUDFLARE_MAILER_URL=https://osn-kimia-mailer.subdomain-anda.workers.dev
```

Selesai! Setiap kali seorang siswa baru mendaftar, sistem otomatis memicu worker ini untuk mengirim notifikasi ke admin dan email panduan ke siswa.
