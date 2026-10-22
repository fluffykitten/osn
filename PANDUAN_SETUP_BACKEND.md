# Panduan Konfigurasi & Template Email Resmi Axioma Academy (`axioma@dfw.my.id`)
## (Cloudflare Workers, Resend API, & Supabase Auth Custom SMTP)

Dokumen ini memuat panduan konfigurasi pengiriman email resmi **Axioma Academy** menggunakan domain terverifikasi **`dfw.my.id`** (`Axioma Academy <axioma@dfw.my.id>`) melalui **Resend**, serta kumpulan **4 Template HTML Supabase Auth** (*Confirm Signup*, *Invite User*, *Change Email Address*, dan *Reset Password*) bergaya **Academic Editorial**.

---

## 1. Arsitektur Desain Email "Academic Editorial" (Anti-Slop)

Seluruh template di [`worker.js`](file:///e:/VibeCoding/osn/worker.js) dan Supabase Auth dirancang dengan struktur surat resmi akademik:
- **Framed Paper Canvas:** Kanvas luar `#F1F5F9` yang membingkai surat putih `#FFFFFF` dengan garis batas `#CBD5E1` dan pita atas `#0F766E` (Teal Sains, 4px).
- **Institutional Masthead (`#0F172A`):** Header gelap kontras tinggi (`17.85:1`) dengan identitas `AXIOMA ACADEMY — SCIENCE & MATHEMATICS ACADEMY` di kiri dan kode referensi dokumen monospasi (`REG // ADMIN-LOG`, `AUTH // INVITE`, `AUTH // EMAIL-CHANGE`, dll.) di kanan.
- **Applicant Dossier Card (Lembar Data Pendaftar):** Menampilkan seluruh informasi pendaftar (`Nama Lengkap`, `Alamat Email`, `ID Akun / UUID`, `Peran Terdaftar`, `Institusi / Sekolah`, `Tingkat Kelas`, `Program / Fokus`, `Kode Kelas Awal`, `Nomor WhatsApp`, `Paket Akses`, dan `Waktu Registrasi`) dalam tata letak *key-value ledger* yang bersih.
- **Focal Callout Box:** Kotak fokus tunggal untuk informasi terpenting (misalnya Kode Kelas monospasi berukuran besar `24px`, atau rincian perubahan alamat email lama ke email baru).

---

## 2. Konfigurasi Cloudflare Worker (`worker.js`)

Pastikan pada **Cloudflare Dashboard** -> **Workers & Pages** -> pilih Worker Anda -> **Settings** -> **Variables and Secrets**, variabel berikut terpasang:

| Tipe | Nama Variabel | Nilai |
| :--- | :--- | :--- |
| **Secret** | `RESEND_API_KEY` | `re_...` *(API Key dari dashboard Resend Anda)* |
| **Variable** | `SENDER_NAME` | `Axioma Academy` |
| **Variable** | `SENDER_EMAIL` | `axioma@dfw.my.id` |
| **Variable** | `ADMIN_EMAIL` | `fluffykitten.dev@gmail.com` |

---

## 3. Konfigurasi Custom SMTP Resend di Supabase Auth

1. Buka [Dashboard Supabase](https://supabase.com/dashboard) -> pilih proyek Anda.
2. Buka **Project Settings** -> **Authentication** -> gulir ke **SMTP Settings**.
3. Aktifkan **Enable Custom SMTP**, lalu masukkan:
   - **Sender email**: `axioma@dfw.my.id`
   - **Sender name**: `Axioma Academy`
   - **Host**: `smtp.resend.com`
   - **Port**: `465` *(atau `587`)*
   - **Minimum TLS Version**: `1.2`
   - **Username**: `resend`
   - **Password**: `re_...` *(Resend API Key Anda)*
4. Klik **Save**.

---

## 4. Template HTML Lengkap untuk Supabase Auth (`Authentication -> Email Templates`)

Salin dan tempelkan masing-masing template berikut pada menu **Authentication** -> **Email Templates** di Dashboard Supabase Anda. Seluruh template sudah menyertakan **Lembar Data Pendaftar / Pengguna** menggunakan variabel `{{ .Email }}` dan `{{ .Data.* }}` dari Supabase Auth.

---

### A. Template 1: `Confirm signup` (Konfirmasi Pendaftaran Akun Baru)

- **Subject:** `Konfirmasi Pendaftaran Akun Axioma Academy`
- **Body (Source HTML):**

```html
<div style="background-color: #f1f5f9; padding: 36px 16px; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #0f172a;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #cbd5e1; border-radius: 14px; overflow: hidden;">
    <div style="height: 4px; background-color: #0f766e;"></div>

    <!-- Masthead -->
    <div style="background-color: #0f172a; padding: 20px 28px;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="vertical-align: middle;">
            <div style="font-size: 16px; font-weight: 800; letter-spacing: 0.06em; color: #ffffff; text-transform: uppercase;">
              AXIOMA ACADEMY
            </div>
            <div style="font-size: 11px; font-weight: 600; letter-spacing: 0.08em; color: #99f6e4; text-transform: uppercase; margin-top: 2px;">
              SCIENCE &amp; MATHEMATICS ACADEMY
            </div>
          </td>
          <td style="vertical-align: middle; text-align: right;">
            <span style="display: inline-block; padding: 4px 10px; background-color: #1e293b; border: 1px solid #334155; border-radius: 6px; font-family: 'JetBrains Mono', 'Courier New', monospace; font-size: 11px; font-weight: 600; color: #e2e8f0; letter-spacing: 0.04em;">
              AUTH // SIGNUP
            </span>
          </td>
        </tr>
      </table>
    </div>

    <!-- Header -->
    <div style="padding: 28px 28px 20px 28px; border-bottom: 1px solid #e2e8f0;">
      <div style="font-family: 'JetBrains Mono', 'Courier New', monospace; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #0f766e; margin-bottom: 6px;">
        Verifikasi Pendaftaran Akun
      </div>
      <h1 style="margin: 0; font-size: 21px; font-weight: 800; color: #0f172a; line-height: 1.3;">
        Konfirmasi Alamat Email Anda
      </h1>
      <p style="margin: 6px 0 0 0; font-size: 13px; color: #475569; line-height: 1.5;">
        Selesaikan verifikasi untuk mengaktifkan akses belajar Anda di Axioma Academy.
      </p>
    </div>

    <!-- Body -->
    <div style="padding: 24px 28px 28px 28px; font-size: 14px; line-height: 1.65; color: #334155;">
      <p style="margin: 0 0 16px 0;">
        Terima kasih telah mendaftar di <strong>Axioma Academy</strong>. Berikut adalah rincian informasi pendaftar yang tercatat pada sistem kami:
      </p>

      <!-- Applicant Dossier -->
      <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 10px; overflow: hidden; margin-bottom: 22px;">
        <div style="background-color: #f1f5f9; padding: 10px 16px; border-bottom: 1px solid #cbd5e1; font-family: 'JetBrains Mono', 'Courier New', monospace; font-size: 11px; font-weight: 700; color: #334155; text-transform: uppercase; letter-spacing: 0.05em;">
          Data Pendaftar (Applicant Dossier)
        </div>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 11px 16px; border-bottom: 1px solid #e2e8f0; width: 38%; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #475569;">Nama Lengkap</td>
            <td style="padding: 11px 16px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; color: #0f172a;">{{ .Data.full_name }}</td>
          </tr>
          <tr>
            <td style="padding: 11px 16px; border-bottom: 1px solid #e2e8f0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #475569;">Email Terdaftar</td>
            <td style="padding: 11px 16px; border-bottom: 1px solid #e2e8f0; font-family: 'JetBrains Mono', 'Courier New', monospace; font-size: 13px; font-weight: 700; color: #0f172a;">{{ .Email }}</td>
          </tr>
          <tr>
            <td style="padding: 11px 16px; border-bottom: 1px solid #e2e8f0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #475569;">Peran Akun</td>
            <td style="padding: 11px 16px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 700; color: #0f766e; text-transform: uppercase;">{{ .Data.role }}</td>
          </tr>
          <tr>
            <td style="padding: 11px 16px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #475569;">Asal Sekolah / Institusi</td>
            <td style="padding: 11px 16px; font-size: 13px; font-weight: 600; color: #0f172a;">{{ .Data.school_name }}</td>
          </tr>
        </table>
      </div>

      <p style="margin: 0 0 18px 0;">
        Klik tombol di bawah ini untuk memverifikasi alamat email dan mengaktifkan akun Anda:
      </p>

      <div style="margin-bottom: 20px;">
        <a href="{{ .ConfirmationURL }}" style="display: inline-block; background-color: #0f172a; color: #ffffff; text-decoration: none; padding: 13px 24px; border-radius: 8px; font-weight: 700; font-size: 14px;">
          Konfirmasi &amp; Aktifkan Akun &rarr;
        </a>
      </div>

      <div style="padding-top: 14px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; line-height: 1.5;">
        Jika tombol di atas tidak berfungsi, salin dan tempel tautan berikut ke peramban web Anda:<br />
        <a href="{{ .ConfirmationURL }}" style="color: #0f766e; font-family: 'JetBrains Mono', 'Courier New', monospace; font-size: 11px; word-break: break-all;">{{ .ConfirmationURL }}</a>
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #f8fafc; padding: 20px 28px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #475569; line-height: 1.6;">
      <div style="font-weight: 700; color: #0f172a;">Axioma Academy</div>
      <div style="color: #64748b; margin-top: 4px; font-size: 11px;">
        Email sistem resmi dari <strong style="color: #334155;">axioma@dfw.my.id</strong> &middot; &copy; Axioma Academy
      </div>
    </div>
  </div>
</div>
```

---

### B. Template 2: `Invite user` (Undangan Pengguna Baru oleh Administrator)

- **Subject:** `Undangan Akses Akun Resmi Axioma Academy`
- **Body (Source HTML):**

```html
<div style="background-color: #f1f5f9; padding: 36px 16px; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #0f172a;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #cbd5e1; border-radius: 14px; overflow: hidden;">
    <div style="height: 4px; background-color: #0f766e;"></div>

    <!-- Masthead -->
    <div style="background-color: #0f172a; padding: 20px 28px;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="vertical-align: middle;">
            <div style="font-size: 16px; font-weight: 800; letter-spacing: 0.06em; color: #ffffff; text-transform: uppercase;">
              AXIOMA ACADEMY
            </div>
            <div style="font-size: 11px; font-weight: 600; letter-spacing: 0.08em; color: #99f6e4; text-transform: uppercase; margin-top: 2px;">
              SCIENCE &amp; MATHEMATICS ACADEMY
            </div>
          </td>
          <td style="vertical-align: middle; text-align: right;">
            <span style="display: inline-block; padding: 4px 10px; background-color: #1e293b; border: 1px solid #334155; border-radius: 6px; font-family: 'JetBrains Mono', 'Courier New', monospace; font-size: 11px; font-weight: 600; color: #e2e8f0; letter-spacing: 0.04em;">
              AUTH // INVITE
            </span>
          </td>
        </tr>
      </table>
    </div>

    <!-- Header -->
    <div style="padding: 28px 28px 20px 28px; border-bottom: 1px solid #e2e8f0;">
      <div style="font-family: 'JetBrains Mono', 'Courier New', monospace; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #0f766e; margin-bottom: 6px;">
        Undangan Pengguna Baru
      </div>
      <h1 style="margin: 0; font-size: 21px; font-weight: 800; color: #0f172a; line-height: 1.3;">
        Anda Diundang Bergabung ke Axioma Academy
      </h1>
      <p style="margin: 6px 0 0 0; font-size: 13px; color: #475569; line-height: 1.5;">
        Administrator telah menerbitkan akun akses resmi untuk alamat email Anda.
      </p>
    </div>

    <!-- Body -->
    <div style="padding: 24px 28px 28px 28px; font-size: 14px; line-height: 1.65; color: #334155;">
      <p style="margin: 0 0 16px 0;">
        Halo, akun Anda telah didaftarkan pada platform pembelajaran sains dan matematika <strong>Axioma Academy</strong> dengan rincian profil berikut:
      </p>

      <!-- Invited User Dossier -->
      <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 10px; overflow: hidden; margin-bottom: 22px;">
        <div style="background-color: #f1f5f9; padding: 10px 16px; border-bottom: 1px solid #cbd5e1; font-family: 'JetBrains Mono', 'Courier New', monospace; font-size: 11px; font-weight: 700; color: #334155; text-transform: uppercase; letter-spacing: 0.05em;">
          Rincian Akun Terdaftar
        </div>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 11px 16px; border-bottom: 1px solid #e2e8f0; width: 38%; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #475569;">Nama Pengguna</td>
            <td style="padding: 11px 16px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; color: #0f172a;">{{ .Data.full_name }}</td>
          </tr>
          <tr>
            <td style="padding: 11px 16px; border-bottom: 1px solid #e2e8f0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #475569;">Alamat Email</td>
            <td style="padding: 11px 16px; border-bottom: 1px solid #e2e8f0; font-family: 'JetBrains Mono', 'Courier New', monospace; font-size: 13px; font-weight: 700; color: #0f172a;">{{ .Email }}</td>
          </tr>
          <tr>
            <td style="padding: 11px 16px; border-bottom: 1px solid #e2e8f0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #475569;">Peran Akses</td>
            <td style="padding: 11px 16px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 700; color: #0f766e; text-transform: uppercase;">{{ .Data.role }}</td>
          </tr>
          <tr>
            <td style="padding: 11px 16px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #475569;">Institusi / Sekolah</td>
            <td style="padding: 11px 16px; font-size: 13px; font-weight: 600; color: #0f172a;">{{ .Data.school_name }}</td>
          </tr>
        </table>
      </div>

      <!-- Callout -->
      <div style="background-color: #f0fdfa; border: 1px solid #99f6e4; border-left: 4px solid #0f766e; border-radius: 8px; padding: 16px 18px; margin-bottom: 22px;">
        <div style="font-size: 13px; font-weight: 700; color: #0f172a; margin-bottom: 4px;">
          Aktivasi &amp; Pengaturan Kata Sandi
        </div>
        <div style="font-size: 13px; color: #334155; line-height: 1.55;">
          Klik tombol di bawah ini untuk menerima undangan dan menetapkan kata sandi pribadi Anda.
        </div>
      </div>

      <div style="margin-bottom: 20px;">
        <a href="{{ .ConfirmationURL }}" style="display: inline-block; background-color: #0f172a; color: #ffffff; text-decoration: none; padding: 13px 24px; border-radius: 8px; font-weight: 700; font-size: 14px;">
          Terima Undangan &amp; Aktifkan Akun &rarr;
        </a>
      </div>

      <div style="padding-top: 14px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; line-height: 1.5;">
        Jika tombol di atas tidak berfungsi, salin dan tempel tautan berikut ke peramban web Anda:<br />
        <a href="{{ .ConfirmationURL }}" style="color: #0f766e; font-family: 'JetBrains Mono', 'Courier New', monospace; font-size: 11px; word-break: break-all;">{{ .ConfirmationURL }}</a>
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #f8fafc; padding: 20px 28px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #475569; line-height: 1.6;">
      <div style="font-weight: 700; color: #0f172a;">Axioma Academy</div>
      <div style="color: #64748b; margin-top: 4px; font-size: 11px;">
        Email sistem resmi dari <strong style="color: #334155;">axioma@dfw.my.id</strong> &middot; &copy; Axioma Academy
      </div>
    </div>
  </div>
</div>
```

---

### C. Template 3: `Change Email Address` (Konfirmasi Perubahan Alamat Email)

- **Subject:** `Konfirmasi Perubahan Alamat Email Akun Axioma Academy`
- **Body (Source HTML):**

```html
<div style="background-color: #f1f5f9; padding: 36px 16px; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #0f172a;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #cbd5e1; border-radius: 14px; overflow: hidden;">
    <div style="height: 4px; background-color: #0f766e;"></div>

    <!-- Masthead -->
    <div style="background-color: #0f172a; padding: 20px 28px;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="vertical-align: middle;">
            <div style="font-size: 16px; font-weight: 800; letter-spacing: 0.06em; color: #ffffff; text-transform: uppercase;">
              AXIOMA ACADEMY
            </div>
            <div style="font-size: 11px; font-weight: 600; letter-spacing: 0.08em; color: #99f6e4; text-transform: uppercase; margin-top: 2px;">
              SCIENCE &amp; MATHEMATICS ACADEMY
            </div>
          </td>
          <td style="vertical-align: middle; text-align: right;">
            <span style="display: inline-block; padding: 4px 10px; background-color: #1e293b; border: 1px solid #334155; border-radius: 6px; font-family: 'JetBrains Mono', 'Courier New', monospace; font-size: 11px; font-weight: 600; color: #e2e8f0; letter-spacing: 0.04em;">
              AUTH // EMAIL-CHANGE
            </span>
          </td>
        </tr>
      </table>
    </div>

    <!-- Header -->
    <div style="padding: 28px 28px 20px 28px; border-bottom: 1px solid #e2e8f0;">
      <div style="font-family: 'JetBrains Mono', 'Courier New', monospace; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #0f766e; margin-bottom: 6px;">
        Keamanan &amp; Kredensial Akun
      </div>
      <h1 style="margin: 0; font-size: 21px; font-weight: 800; color: #0f172a; line-height: 1.3;">
        Konfirmasi Perubahan Alamat Email
      </h1>
      <p style="margin: 6px 0 0 0; font-size: 13px; color: #475569; line-height: 1.5;">
        Permintaan pembaruan alamat email untuk akun Axioma Academy Anda.
      </p>
    </div>

    <!-- Body -->
    <div style="padding: 24px 28px 28px 28px; font-size: 14px; line-height: 1.65; color: #334155;">
      <p style="margin: 0 0 16px 0;">
        Kami menerima permintaan untuk memperbarui alamat email yang terhubung dengan akun <strong>Axioma Academy</strong> Anda. Berikut adalah rincian perubahan tersebut:
      </p>

      <!-- Email Change Dossier -->
      <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 10px; overflow: hidden; margin-bottom: 22px;">
        <div style="background-color: #f1f5f9; padding: 10px 16px; border-bottom: 1px solid #cbd5e1; font-family: 'JetBrains Mono', 'Courier New', monospace; font-size: 11px; font-weight: 700; color: #334155; text-transform: uppercase; letter-spacing: 0.05em;">
          Rincian Perubahan Email
        </div>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 11px 16px; border-bottom: 1px solid #e2e8f0; width: 38%; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #475569;">Nama Pemilik Akun</td>
            <td style="padding: 11px 16px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; color: #0f172a;">{{ .Data.full_name }}</td>
          </tr>
          <tr>
            <td style="padding: 11px 16px; border-bottom: 1px solid #e2e8f0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #475569;">Email Sebelumnya</td>
            <td style="padding: 11px 16px; border-bottom: 1px solid #e2e8f0; font-family: 'JetBrains Mono', 'Courier New', monospace; font-size: 13px; color: #475569;">{{ .Email }}</td>
          </tr>
          <tr>
            <td style="padding: 11px 16px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #475569;">Email Baru</td>
            <td style="padding: 11px 16px; font-family: 'JetBrains Mono', 'Courier New', monospace; font-size: 13px; font-weight: 700; color: #0f766e;">{{ .NewEmail }}</td>
          </tr>
        </table>
      </div>

      <p style="margin: 0 0 18px 0;">
        Klik tombol di bawah ini untuk menyetujui dan mengonfirmasi perubahan alamat email ke <strong>{{ .NewEmail }}</strong>:
      </p>

      <div style="margin-bottom: 20px;">
        <a href="{{ .ConfirmationURL }}" style="display: inline-block; background-color: #0f172a; color: #ffffff; text-decoration: none; padding: 13px 24px; border-radius: 8px; font-weight: 700; font-size: 14px;">
          Konfirmasi Perubahan Email &rarr;
        </a>
      </div>

      <div style="padding-top: 14px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; line-height: 1.5;">
        Jika Anda tidak merasa mengajukan perubahan alamat email ini, abaikan pesan ini atau segera perbarui kata sandi akun Anda.<br />
        <a href="{{ .ConfirmationURL }}" style="color: #0f766e; font-family: 'JetBrains Mono', 'Courier New', monospace; font-size: 11px; word-break: break-all;">{{ .ConfirmationURL }}</a>
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #f8fafc; padding: 20px 28px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #475569; line-height: 1.6;">
      <div style="font-weight: 700; color: #0f172a;">Axioma Academy</div>
      <div style="color: #64748b; margin-top: 4px; font-size: 11px;">
        Email sistem resmi dari <strong style="color: #334155;">axioma@dfw.my.id</strong> &middot; &copy; Axioma Academy
      </div>
    </div>
  </div>
</div>
```

---

### D. Template 4: `Reset password` (Pemulihan / Pengaturan Ulang Kata Sandi)

- **Subject:** `Pengaturan Ulang Kata Sandi Akun Axioma Academy`
- **Body (Source HTML):**

```html
<div style="background-color: #f1f5f9; padding: 36px 16px; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #0f172a;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #cbd5e1; border-radius: 14px; overflow: hidden;">
    <div style="height: 4px; background-color: #0f766e;"></div>

    <!-- Masthead -->
    <div style="background-color: #0f172a; padding: 20px 28px;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="vertical-align: middle;">
            <div style="font-size: 16px; font-weight: 800; letter-spacing: 0.06em; color: #ffffff; text-transform: uppercase;">
              AXIOMA ACADEMY
            </div>
            <div style="font-size: 11px; font-weight: 600; letter-spacing: 0.08em; color: #99f6e4; text-transform: uppercase; margin-top: 2px;">
              SCIENCE &amp; MATHEMATICS ACADEMY
            </div>
          </td>
          <td style="vertical-align: middle; text-align: right;">
            <span style="display: inline-block; padding: 4px 10px; background-color: #1e293b; border: 1px solid #334155; border-radius: 6px; font-family: 'JetBrains Mono', 'Courier New', monospace; font-size: 11px; font-weight: 600; color: #e2e8f0; letter-spacing: 0.04em;">
              AUTH // RECOVERY
            </span>
          </td>
        </tr>
      </table>
    </div>

    <!-- Header -->
    <div style="padding: 28px 28px 20px 28px; border-bottom: 1px solid #e2e8f0;">
      <div style="font-family: 'JetBrains Mono', 'Courier New', monospace; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #0f766e; margin-bottom: 6px;">
        Pemulihan Akses Akun
      </div>
      <h1 style="margin: 0; font-size: 21px; font-weight: 800; color: #0f172a; line-height: 1.3;">
        Atur Ulang Kata Sandi Anda
      </h1>
      <p style="margin: 6px 0 0 0; font-size: 13px; color: #475569; line-height: 1.5;">
        Tautan pembuatan kata sandi baru untuk akun Axioma Academy Anda.
      </p>
    </div>

    <!-- Body -->
    <div style="padding: 24px 28px 28px 28px; font-size: 14px; line-height: 1.65; color: #334155;">
      <p style="margin: 0 0 16px 0;">
        Kami menerima permintaan untuk mengatur ulang kata sandi pada akun berikut:
      </p>

      <!-- Account Info Dossier -->
      <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 10px; overflow: hidden; margin-bottom: 22px;">
        <div style="background-color: #f1f5f9; padding: 10px 16px; border-bottom: 1px solid #cbd5e1; font-family: 'JetBrains Mono', 'Courier New', monospace; font-size: 11px; font-weight: 700; color: #334155; text-transform: uppercase; letter-spacing: 0.05em;">
          Identitas Akun
        </div>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 11px 16px; border-bottom: 1px solid #e2e8f0; width: 38%; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #475569;">Nama Pengguna</td>
            <td style="padding: 11px 16px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; color: #0f172a;">{{ .Data.full_name }}</td>
          </tr>
          <tr>
            <td style="padding: 11px 16px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #475569;">Email Terdaftar</td>
            <td style="padding: 11px 16px; font-family: 'JetBrains Mono', 'Courier New', monospace; font-size: 13px; font-weight: 700; color: #0f172a;">{{ .Email }}</td>
          </tr>
        </table>
      </div>

      <p style="margin: 0 0 18px 0;">
        Klik tombol di bawah ini untuk membuka halaman pembuatan kata sandi baru:
      </p>

      <div style="margin-bottom: 20px;">
        <a href="{{ .ConfirmationURL }}" style="display: inline-block; background-color: #0f172a; color: #ffffff; text-decoration: none; padding: 13px 24px; border-radius: 8px; font-weight: 700; font-size: 14px;">
          Buat Kata Sandi Baru &rarr;
        </a>
      </div>

      <div style="padding-top: 14px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; line-height: 1.5;">
        Jika Anda tidak merasa meminta pengaturan ulang kata sandi, abaikan email ini. Kata sandi akun Anda tidak akan berubah.<br />
        <a href="{{ .ConfirmationURL }}" style="color: #0f766e; font-family: 'JetBrains Mono', 'Courier New', monospace; font-size: 11px; word-break: break-all;">{{ .ConfirmationURL }}</a>
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #f8fafc; padding: 20px 28px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #475569; line-height: 1.6;">
      <div style="font-weight: 700; color: #0f172a;">Axioma Academy</div>
      <div style="color: #64748b; margin-top: 4px; font-size: 11px;">
        Email sistem resmi dari <strong style="color: #334155;">axioma@dfw.my.id</strong> &middot; &copy; Axioma Academy
      </div>
    </div>
  </div>
</div>
```
