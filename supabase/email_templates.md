# Template Email Resmi OSN Kimia Mastery

Dokumen ini berisi kode HTML siap pakai untuk disalin ke **Supabase Dashboard** -> **Authentication** -> **Email Templates**.

---

## 1. Template: Konfirmasi Pendaftaran Akun Siswa (Confirm Signup)
Salin kode berikut ke tab **Confirm signup** di Supabase:

### Subject:
```text
Konfirmasi Pendaftaran Akun Siswa — OSN Kimia Mastery
```

### Body (HTML):
```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aktivasi Akun Siswa - OSN Kimia Mastery</title>
</head>
<body style="margin: 0; padding: 20px; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #334155;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
    
    <!-- Header Banner -->
    <div style="background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%); padding: 32px 24px; text-align: center; color: #ffffff;">
      <div style="display: inline-block; background-color: rgba(255, 255, 255, 0.2); backdrop-filter: blur(4px); padding: 6px 16px; border-radius: 9999px; font-size: 11px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 12px;">
        Platform Pembinaan Olimpiade Sains Nasional
      </div>
      <h1 style="margin: 0; font-size: 24px; font-weight: 800; color: #ffffff; letter-spacing: -0.02em;">OSN Kimia Mastery</h1>
      <p style="margin: 8px 0 0 0; font-size: 13px; color: #e0f2fe;">Aktivasi Akun Siswa & Lembar Kerja Interaktif</p>
    </div>

    <!-- Main Content Body -->
    <div style="padding: 28px 24px;">
      <h2 style="margin: 0 0 12px 0; font-size: 18px; color: #0f172a; font-weight: 700;">Halo{{ if .Data.full_name }}, {{ .Data.full_name }}{{ end }}! 👋</h2>
      <p style="margin: 0 0 20px 0; font-size: 14px; line-height: 1.6; color: #475569;">
        Selamat datang di <strong>OSN Kimia Mastery</strong>! Pendaftaran akun siswa Anda telah kami terima. Berikut adalah rincian informasi personal yang Anda input saat pendaftaran:
      </p>

      <!-- Informasi Personal Pendaftar Table -->
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 13px; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
        <tr style="background-color: #f8fafc;">
          <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #64748b; width: 35%;">Nama Lengkap</td>
          <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; font-weight: 700; color: #0f172a;">{{ if .Data.full_name }}{{ .Data.full_name }}{{ else }}Siswa OSN{{ end }}</td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #64748b;">Email Terdaftar</td>
          <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; color: #0284c7; font-weight: 600;">{{ .Email }}</td>
        </tr>
        <tr style="background-color: #f8fafc;">
          <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #64748b;">Asal Sekolah</td>
          <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">{{ if .Data.school_name }}{{ .Data.school_name }}{{ else }}Belum Diisi{{ end }}</td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #64748b;">Jenjang / Kelas</td>
          <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">Kelas {{ if .Data.grade_level }}{{ .Data.grade_level }}{{ else }}10{{ end }}</td>
        </tr>
        <tr style="background-color: #f8fafc;">
          <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #64748b;">Target Olimpiade</td>
          <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; color: #16a34a; font-weight: 700;">Olimpiade Sains {{ if .Data.target_olympiad }}{{ .Data.target_olympiad }}{{ else }}OSK{{ end }} Kimia</td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; font-weight: 600; color: #64748b;">Nomor WhatsApp</td>
          <td style="padding: 10px 14px; color: #0f172a;">{{ if .Data.phone_whatsapp }}{{ .Data.phone_whatsapp }}{{ else }}-{{ end }}</td>
        </tr>
      </table>

      <!-- Call to action button -->
      <div style="text-align: center; margin: 30px 0;">
        <a href="{{ .ConfirmationURL }}" style="display: inline-block; background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 10px; font-weight: 700; font-size: 14px; box-shadow: 0 4px 12px rgba(2, 132, 199, 0.25);">
          Konfirmasi & Aktifkan Akun Saya →
        </a>
      </div>

      <p style="margin: 0 0 16px 0; font-size: 12px; color: #64748b; line-height: 1.5; text-align: center;">
        Jika tombol di atas tidak dapat diklik, salin dan buka tautan berikut di peramban (browser) Anda:<br>
        <span style="color: #0284c7; word-break: break-all;">{{ .ConfirmationURL }}</span>
      </p>

      <div style="margin-top: 24px; padding: 12px; background-color: #f1f5f9; border-radius: 8px; font-size: 11px; color: #64748b; line-height: 1.5;">
        🔒 <em>Pemberitahuan Keamanan: Jika Anda tidak pernah merasa mendaftar di situs OSN Kimia Mastery, silakan abaikan email ini. Akun tidak akan aktif tanpa konfirmasi ini.</em>
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 16px 24px; text-align: center; font-size: 11px; color: #94a3b8;">
      © 2026 OSN Kimia Mastery • Dikirim oleh Sistem Otentikasi Resmi
    </div>
  </div>
</body>
</html>
```

---

## 2. Template: Pemulihan Kata Sandi (Reset Password)
Salin kode berikut ke tab **Reset password** di Supabase:

### Subject:
```text
Atur Ulang Kata Sandi Akun Anda — OSN Kimia Mastery
```

### Body (HTML):
```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Password - OSN Kimia Mastery</title>
</head>
<body style="margin: 0; padding: 20px; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #334155;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
    
    <!-- Header Banner -->
    <div style="background: linear-gradient(135deg, #4f46e5 0%, #3730a3 100%); padding: 32px 24px; text-align: center; color: #ffffff;">
      <div style="display: inline-block; background-color: rgba(255, 255, 255, 0.2); backdrop-filter: blur(4px); padding: 6px 16px; border-radius: 9999px; font-size: 11px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 12px;">
        Keamanan & Pemulihan Akun
      </div>
      <h1 style="margin: 0; font-size: 24px; font-weight: 800; color: #ffffff; letter-spacing: -0.02em;">OSN Kimia Mastery</h1>
      <p style="margin: 8px 0 0 0; font-size: 13px; color: #e0e7ff;">Permintaan Perubahan Kata Sandi</p>
    </div>

    <!-- Main Content Body -->
    <div style="padding: 28px 24px;">
      <h2 style="margin: 0 0 12px 0; font-size: 18px; color: #0f172a; font-weight: 700;">Halo{{ if .Data.full_name }}, {{ .Data.full_name }}{{ end }}! 🔑</h2>
      <p style="margin: 0 0 16px 0; font-size: 14px; line-height: 1.6; color: #475569;">
        Kami menerima permintaan untuk mengatur ulang kata sandi akun OSN Kimia Mastery Anda (<strong>{{ .Email }}</strong>).
      </p>
      
      <p style="margin: 0 0 24px 0; font-size: 14px; line-height: 1.6; color: #475569;">
        Silakan klik tombol di bawah ini untuk membuat kata sandi baru Anda:
      </p>

      <!-- Call to action button -->
      <div style="text-align: center; margin: 30px 0;">
        <a href="{{ .ConfirmationURL }}" style="display: inline-block; background: linear-gradient(135deg, #4f46e5 0%, #4338ca 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 10px; font-weight: 700; font-size: 14px; box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);">
          Atur Ulang Kata Sandi Saya →
        </a>
      </div>

      <p style="margin: 0 0 16px 0; font-size: 12px; color: #64748b; line-height: 1.5; text-align: center;">
        Jika tombol di atas tidak berfungsi, buka tautan langsung berikut:<br>
        <span style="color: #4f46e5; word-break: break-all;">{{ .ConfirmationURL }}</span>
      </p>

      <div style="margin-top: 24px; padding: 14px; background-color: #fef2f2; border-left: 4px solid #ef4444; border-radius: 8px; font-size: 12px; color: #991b1b; line-height: 1.5;">
        ⚠️ <strong>Penting:</strong> Tautan pemulihan ini hanya berlaku selama 24 jam. Jika Anda tidak pernah meminta pengaturan ulang kata sandi, akun Anda tetap aman dan Anda dapat mengabaikan pesan ini.
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 16px 24px; text-align: center; font-size: 11px; color: #94a3b8;">
      © 2026 OSN Kimia Mastery • Kontak Admin: fluffykitten.dev@gmail.com
    </div>
  </div>
</body>
</html>
```

---

## 3. Template: Undangan Akun oleh Administrator (Invite User)
Salin kode berikut ke tab **Invite user** di Supabase (**Authentication** &rarr; **Email Templates** &rarr; **Invite user**):

### Subject:
```text
Undangan Aktivasi Akun — OSN Kimia Mastery
```

### Body (HTML):
```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Undangan Aktivasi Akun - OSN Kimia Mastery</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #f8fafc;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #1e293b;
      -webkit-font-smoothing: antialiased;
      line-height: 1.6;
    }
    .email-wrapper {
      width: 100%;
      background-color: #f8fafc;
      padding: 40px 12px;
    }
    .email-container {
      max-width: 580px;
      margin: 0 auto;
      background-color: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
    }
    .header-bar {
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
      padding: 32px 36px 28px 36px;
      text-align: left;
      border-bottom: 3px solid #10b981;
    }
    .brand-title {
      font-size: 20px;
      font-weight: 800;
      color: #ffffff;
      letter-spacing: -0.025em;
      margin: 0 0 4px 0;
    }
    .brand-subtitle {
      font-size: 11px;
      color: #94a3b8;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin: 0;
      font-weight: 600;
    }
    .content-body {
      padding: 36px;
    }
    .greeting {
      font-size: 18px;
      font-weight: 700;
      color: #0f172a;
      margin: 0 0 16px 0;
    }
    .paragraph {
      font-size: 14px;
      color: #475569;
      margin: 0 0 18px 0;
      line-height: 1.65;
    }
    .details-box {
      background-color: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 16px 20px;
      margin: 24px 0;
    }
    .detail-row {
      display: flex;
      justify-content: space-between;
      padding: 6px 0;
      font-size: 13px;
    }
    .detail-label {
      color: #64748b;
      font-weight: 500;
    }
    .detail-value {
      color: #0f172a;
      font-weight: 600;
      font-family: monospace;
    }
    .status-badge {
      display: inline-block;
      background-color: #fef3c7;
      color: #b45309;
      font-weight: 700;
      padding: 2px 8px;
      border-radius: 6px;
      font-size: 11px;
    }
    .cta-container {
      text-align: center;
      margin: 32px 0 28px 0;
    }
    .cta-button {
      display: inline-block;
      background-color: #0f172a;
      color: #ffffff !important;
      font-size: 14px;
      font-weight: 700;
      text-decoration: none;
      padding: 14px 32px;
      border-radius: 10px;
      letter-spacing: -0.01em;
      box-shadow: 0 4px 12px rgba(15, 23, 42, 0.15);
    }
    .cta-button:hover {
      background-color: #1e293b;
    }
    .fallback-box {
      background-color: #f1f5f9;
      border-radius: 8px;
      padding: 12px 16px;
      margin-top: 24px;
      font-size: 11px;
      color: #64748b;
      word-break: break-all;
    }
    .footer {
      background-color: #f8fafc;
      border-top: 1px solid #e2e8f0;
      padding: 24px 36px;
      text-align: center;
      font-size: 11px;
      color: #94a3b8;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <div class="email-wrapper">
    <div class="email-container">
      <!-- HEADER -->
      <div class="header-bar">
        <div class="brand-title">🧪 OSN KIMIA MASTERY</div>
        <div class="brand-subtitle">Platform Pembinaan Terpadu Silabus Olimpiade Kimia</div>
      </div>

      <!-- BODY -->
      <div class="content-body">
        <h2 class="greeting">Halo{{ if .Data.full_name }}, {{ .Data.full_name }}{{ else }} Rekan Guru &amp; Siswa{{ end }}! 👋</h2>
        <p class="paragraph">
          Anda telah didaftarkan oleh Administrator untuk bergabung ke portal <strong>OSN Kimia Mastery</strong>. 
          Akun Anda saat ini tercatat dengan status: <span class="status-badge">Belum Aktivasi</span>.
        </p>

        <p class="paragraph">
          Untuk mulai mengakses modul pembelajaran 10 Pilar Silabus OSN, bank soal interaktif KaTeX, live worksheet, dan diagnostik radar, silakan selesaikan proses aktivasi akun dan pembuatan kata sandi mandiri Anda:
        </p>

        <!-- DETAIL AKUN -->
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; margin: 20px 0; padding: 16px;">
          <tr>
            <td style="padding: 6px 12px; font-size: 12px; color: #64748b; font-weight: 500;">Nama Pengguna:</td>
            <td style="padding: 6px 12px; font-size: 13px; color: #0f172a; font-weight: 700; text-align: right;">{{ if .Data.full_name }}{{ .Data.full_name }}{{ else }}Pengguna Baru{{ end }}</td>
          </tr>
          <tr>
            <td style="padding: 6px 12px; font-size: 12px; color: #64748b; font-weight: 500;">Peranan (Role):</td>
            <td style="padding: 6px 12px; font-size: 13px; color: #0284c7; font-weight: 700; text-align: right;">{{ if eq .Data.role "teacher" }}👨‍🏫 Guru / Pembina{{ else }}🎓 Siswa{{ end }}</td>
          </tr>
          <tr>
            <td style="padding: 6px 12px; font-size: 12px; color: #64748b; font-weight: 500;">Email Akun:</td>
            <td style="padding: 6px 12px; font-size: 13px; color: #0f172a; font-weight: 700; text-align: right; font-family: monospace;">{{ .Email }}</td>
          </tr>
          <tr>
            <td style="padding: 6px 12px; font-size: 12px; color: #64748b; font-weight: 500;">Status Akun:</td>
            <td style="padding: 6px 12px; font-size: 12px; text-align: right;">
              <span class="status-badge">Belum Aktivasi</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 6px 12px; font-size: 12px; color: #64748b; font-weight: 500;">Masa Berlaku Link:</td>
            <td style="padding: 6px 12px; font-size: 12px; color: #d97706; font-weight: 600; text-align: right;">48 Jam</td>
          </tr>
        </table>

        <!-- CTA BUTTON -->
        <div class="cta-container">
          <a href="{{ .ConfirmationURL }}" target="_blank" class="cta-button" style="color: #ffffff !important; text-decoration: none;">
            🚀 Aktivasi Akun &amp; Buat Kata Sandi
          </a>
        </div>

        <!-- FALLBACK LINK -->
        <div class="fallback-box">
          <span style="font-weight: 600; color: #475569;">Tombol tidak berfungsi?</span> Buka tautan berikut di browser Anda:<br>
          <a href="{{ .ConfirmationURL }}" target="_blank" style="color: #0284c7; text-decoration: underline; word-break: break-all;">
            {{ .ConfirmationURL }}
          </a>
        </div>

        <p class="paragraph" style="font-size: 12px; color: #94a3b8; margin-top: 24px; margin-bottom: 0;">
          💡 <em>Jika Anda tidak mengenali pendaftaran ini, silakan abaikan pesan ini dengan aman. Akun yang tidak diaktivasi tidak akan dapat mengakses data platform.</em>
        </p>
      </div>

      <!-- FOOTER -->
      <div class="footer">
        <div><strong>OSN Kimia Mastery</strong> • Sistem Tata Kelola Akun &amp; Kelas</div>
        <div style="margin-top: 4px;">Pemberitahuan otomatis dari Administrator Platform. Jangan membalas email ini secara langsung.</div>
      </div>
    </div>
  </div>
</body>
</html>
```
