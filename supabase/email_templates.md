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
      <h2 style="margin: 0 0 12px 0; font-size: 18px; color: #0f172a; font-weight: 700;">Halo, {{ .Data.full_name }}! 👋</h2>
      <p style="margin: 0 0 20px 0; font-size: 14px; line-height: 1.6; color: #475569;">
        Selamat datang di <strong>OSN Kimia Mastery</strong>! Pendaftaran akun siswa Anda telah kami terima. Berikut adalah rincian informasi personal yang Anda input saat pendaftaran:
      </p>

      <!-- Informasi Personal Pendaftar Table -->
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 13px; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
        <tr style="background-color: #f8fafc;">
          <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #64748b; width: 35%;">Nama Lengkap</td>
          <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; font-weight: 700; color: #0f172a;">{{ .Data.full_name }}</td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #64748b;">Email Terdaftar</td>
          <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; color: #0284c7; font-weight: 600;">{{ .Email }}</td>
        </tr>
        <tr style="background-color: #f8fafc;">
          <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #64748b;">Asal Sekolah</td>
          <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">{{ .Data.school_name }}</td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #64748b;">Jenjang / Kelas</td>
          <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">Kelas {{ .Data.grade_level }}</td>
        </tr>
        <tr style="background-color: #f8fafc;">
          <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #64748b;">Target Olimpiade</td>
          <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; color: #16a34a; font-weight: 700;">Olimpiade Sains {{ .Data.target_olympiad }} Kimia</td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; font-weight: 600; color: #64748b;">Nomor WhatsApp</td>
          <td style="padding: 10px 14px; color: #0f172a;">{{ .Data.phone_whatsapp }}</td>
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
      <h2 style="margin: 0 0 12px 0; font-size: 18px; color: #0f172a; font-weight: 700;">Permintaan Reset Kata Sandi 🔑</h2>
      <p style="margin: 0 0 16px 0; font-size: 14px; line-height: 1.6; color: #475569;">
        Kami menerima permintaan untuk mengatur ulang kata sandi akun dengan email <strong>{{ .Email }}</strong>.
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
