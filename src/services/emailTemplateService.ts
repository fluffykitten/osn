/**
 * emailTemplateService.ts
 * Generator template email aktivasi dan undangan pengguna untuk OSN Kimia Mastery.
 * Menyediakan HTML email responsif (kompatibel Gmail, Outlook, Apple Mail),
 * template Supabase Auth (Go-template tags), serta format teks biasa (plain text).
 */

export interface EmailTemplateParams {
  fullName: string;
  email: string;
  role: 'student' | 'teacher' | 'admin' | string;
  schoolName?: string;
  activationUrl: string;
  expiresHours?: number;
}

/**
 * Menghasilkan HTML email aktivasi responsif dengan gaya minimalist modern.
 */
export function generateActivationEmailHtml(params: EmailTemplateParams): string {
  const roleLabel =
    params.role === 'teacher' || params.role === 'guru'
      ? 'Guru / Pembina Olimpiade Kimia'
      : params.role === 'admin'
      ? 'Administrator Platform'
      : 'Siswa Peserta Pembinaan OSN Kimia';

  const roleBadgeColor =
    params.role === 'teacher' || params.role === 'guru'
      ? '#4338ca' // Indigo
      : '#047857'; // Emerald

  const roleBadgeBg =
    params.role === 'teacher' || params.role === 'guru'
      ? '#eef2ff'
      : '#ecfdf5';

  const school = params.schoolName?.trim() || 'SMA / Madrasah Mitra';
  const expires = params.expiresHours || 48;

  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aktivasi Akun OSN Kimia Mastery</title>
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
    table {
      border-collapse: collapse;
    }
    .email-container {
      max-width: 580px;
      margin: 40px auto;
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
      font-size: 12px;
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
      padding: 20px;
      margin: 24px 0;
    }
    .detail-row {
      display: flex;
      justify-content: space-between;
      padding: 6px 0;
      border-bottom: 1px dashed #e2e8f0;
      font-size: 13px;
    }
    .detail-row:last-child {
      border-bottom: none;
    }
    .detail-label {
      color: #64748b;
      font-weight: 500;
    }
    .detail-value {
      color: #0f172a;
      font-weight: 600;
    }
    .badge {
      display: inline-block;
      padding: 2px 8px;
      border-radius: 6px;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.03em;
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
      transition: all 0.2s ease;
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
  <div style="padding: 24px 12px;">
    <div class="email-container">
      <!-- HEADER -->
      <div class="header-bar">
        <div class="brand-title">🧪 OSN KIMIA MASTERY</div>
        <div class="brand-subtitle">Platform Pembinaan Olimpiade Sains Kimia Nasional</div>
      </div>

      <!-- BODY -->
      <div class="content-body">
        <h2 class="greeting">Halo ${params.fullName},</h2>
        <p class="paragraph">
          Selamat! Administrator kami telah mendaftarkan akun Anda di platform <strong>OSN Kimia Mastery</strong>. 
          Akun Anda saat ini berstatus <strong>Menunggu Aktivasi</strong>.
        </p>

        <p class="paragraph">
          Untuk mulai mengakses modul silabus 10 Pilar Kimia, bank soal interaktif, lembar kerja digital, dan bimbingan guru, silakan selesaikan aktivasi dengan membuat kata sandi Anda:
        </p>

        <!-- DETAIL AKUN -->
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; margin: 20px 0; padding: 16px;">
          <tr>
            <td style="padding: 6px 12px; font-size: 12px; color: #64748b; font-weight: 500;">Email Akun:</td>
            <td style="padding: 6px 12px; font-size: 13px; color: #0f172a; font-weight: 700; text-align: right; font-family: monospace;">${params.email}</td>
          </tr>
          <tr>
            <td style="padding: 6px 12px; font-size: 12px; color: #64748b; font-weight: 500;">Peranan (Role):</td>
            <td style="padding: 6px 12px; font-size: 12px; text-align: right;">
              <span style="background-color: ${roleBadgeBg}; color: ${roleBadgeColor}; font-weight: 700; padding: 3px 8px; border-radius: 6px; font-size: 11px;">
                ${roleLabel}
              </span>
            </td>
          </tr>
          <tr>
            <td style="padding: 6px 12px; font-size: 12px; color: #64748b; font-weight: 500;">Sekolah / Institusi:</td>
            <td style="padding: 6px 12px; font-size: 12px; color: #0f172a; font-weight: 600; text-align: right;">${school}</td>
          </tr>
          <tr>
            <td style="padding: 6px 12px; font-size: 12px; color: #64748b; font-weight: 500;">Masa Berlaku Tautan:</td>
            <td style="padding: 6px 12px; font-size: 12px; color: #d97706; font-weight: 600; text-align: right;">${expires} Jam</td>
          </tr>
        </table>

        <!-- CTA BUTTON -->
        <div class="cta-container">
          <a href="${params.activationUrl}" target="_blank" class="cta-button" style="color: #ffffff !important; text-decoration: none;">
            🚀 Aktivasi Akun &amp; Buat Kata Sandi
          </a>
        </div>

        <!-- FALLBACK LINK -->
        <div class="fallback-box">
          <span style="font-weight: 600; color: #475569;">Tombol tidak dapat diklik?</span> Salin dan buka tautan berikut di peramban (browser) Anda:<br>
          <a href="${params.activationUrl}" target="_blank" style="color: #0284c7; text-decoration: underline; word-break: break-all;">
            ${params.activationUrl}
          </a>
        </div>

        <p class="paragraph" style="font-size: 12px; color: #94a3b8; margin-top: 24px; margin-bottom: 0;">
          💡 <em>Jika Anda tidak merasa pernah didaftarkan oleh sekolah atau pembina olimpiade Anda, Anda dapat mengabaikan email ini dengan aman.</em>
        </p>
      </div>

      <!-- FOOTER -->
      <div class="footer">
        <div><strong>OSN Kimia Mastery Platform</strong> • Inisiatif Tata Kelola Pendidikan Sains Terbuka</div>
        <div style="margin-top: 4px;">Pemberitahuan resmi otomatis yang dikirimkan oleh Administrator Sistem. Jangan membalas email ini secara langsung.</div>
      </div>
    </div>
  </div>
</body>
</html>`;
}

/**
 * Format teks polos (plain text) untuk email client non-HTML.
 */
export function generateActivationEmailPlainText(params: EmailTemplateParams): string {
  const roleLabel =
    params.role === 'teacher' || params.role === 'guru'
      ? 'Guru / Pembina'
      : params.role === 'admin'
      ? 'Administrator'
      : 'Siswa OSN';

  return `HALO ${params.fullName.toUpperCase()},

Selamat! Akun Anda telah didaftarkan oleh Administrator di platform OSN Kimia Mastery.

Berikut detail akun Anda:
- Email Akun : ${params.email}
- Peranan    : ${roleLabel}
- Institusi  : ${params.schoolName || 'SMA / Madrasah Mitra'}
- Status     : Belum Aktivasi

Silakan klik tautan di bawah ini untuk mengaktifkan akun dan mengatur kata sandi Anda:
${params.activationUrl}

(Tautan ini berlaku selama 48 jam).

Jika Anda memiliki pertanyaan atau kendala aktivasi, hubungi Administrator atau Pembina Olimpiade Kimia di sekolah Anda.

Salam hangat,
Tim Administrator OSN Kimia Mastery
`;
}

/**
 * Template Supabase Auth Email ("Invite user" atau "Reset Password")
 * Menggunakan variabel Go Template bawaan Supabase:
 * - {{ .ConfirmationURL }}
 * - {{ .Email }}
 * - {{ .SiteURL }}
 */
export function getSupabaseInviteEmailTemplate(): string {
  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Undangan Aktivasi Akun OSN Kimia Mastery</title>
  <style>
    body { margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; }
    .email-container { max-width: 580px; margin: 30px auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
    .header-bar { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 28px 32px; border-bottom: 3px solid #10b981; }
    .brand-title { font-size: 20px; font-weight: 800; color: #ffffff; margin: 0 0 4px 0; }
    .brand-subtitle { font-size: 11px; color: #94a3b8; text-transform: uppercase; margin: 0; letter-spacing: 0.05em; font-weight: 600; }
    .content-body { padding: 32px; }
    .cta-button { display: inline-block; background-color: #0f172a; color: #ffffff !important; font-size: 14px; font-weight: 700; text-decoration: none; padding: 14px 32px; border-radius: 10px; }
    .footer { background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 20px 32px; text-align: center; font-size: 11px; color: #94a3b8; }
  </style>
</head>
<body>
  <div style="padding: 20px 10px;">
    <div class="email-container">
      <div class="header-bar">
        <div class="brand-title">🧪 OSN KIMIA MASTERY</div>
        <div class="brand-subtitle">Platform Pembinaan Olimpiade Sains Kimia Nasional</div>
      </div>
      <div class="content-body">
        <h2 style="font-size: 18px; font-weight: 700; color: #0f172a; margin: 0 0 16px 0;">Undangan Aktivasi Akun</h2>
        <p style="font-size: 14px; color: #475569; line-height: 1.6; margin: 0 0 16px 0;">
          Halo, Anda telah diundang oleh Administrator untuk bergabung di platform <strong>OSN Kimia Mastery</strong>. 
          Akun Anda saat ini berstatus <strong>Menunggu Aktivasi</strong>.
        </p>

        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px; margin: 20px 0; font-size: 13px;">
          <div><strong style="color: #64748b;">Alamat Email:</strong> <span style="font-family: monospace; font-weight: bold; color: #0f172a;">{{ .Email }}</span></div>
          <div style="margin-top: 6px;"><strong style="color: #64748b;">Status Akun:</strong> <span style="color: #d97706; font-weight: 600;">Belum Aktivasi</span></div>
        </div>

        <p style="font-size: 14px; color: #475569; line-height: 1.6; margin: 0 0 24px 0;">
          Silakan klik tombol di bawah ini untuk mengaktifkan akun dan membuat kata sandi Anda:
        </p>

        <div style="text-align: center; margin: 28px 0;">
          <a href="{{ .ConfirmationURL }}" target="_blank" class="cta-button" style="color: #ffffff !important; text-decoration: none;">
            🚀 Aktivasi Akun &amp; Buat Kata Sandi
          </a>
        </div>

        <div style="background-color: #f1f5f9; border-radius: 8px; padding: 12px 16px; font-size: 11px; color: #64748b; word-break: break-all;">
          <strong>Tautan alternatif:</strong><br>
          <a href="{{ .ConfirmationURL }}" target="_blank" style="color: #0284c7;">{{ .ConfirmationURL }}</a>
        </div>
      </div>
      <div class="footer">
        <div><strong>OSN Kimia Mastery</strong> • Tata Kelola Sistem Terpadu</div>
        <div style="margin-top: 4px;">Email otomatis resmi. Jangan balas email ini.</div>
      </div>
    </div>
  </div>
</body>
</html>`;
}
