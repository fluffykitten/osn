/**
 * Cloudflare Worker: OSN Kimia Mastery Mailer Relay
 * Menangani pengiriman email notifikasi (Pendaftaran Siswa Baru & Notifikasi Admin)
 * Dapat dijalankan pada subdomain gratis Cloudflare Workers (*.workers.dev) TANPA CUSTOM DOMAIN.
 * 
 * Menggunakan Brevo API (gratis 300 email/hari dengan verified sender Gmail pribadi)
 * atau Resend API (resend.com).
 */

export default {
  async fetch(request, env, ctx) {
    // 1. Tangani preflight CORS
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      });
    }

    const url = new URL(request.url);

    // Health Check Endpoint
    if (request.method === 'GET' && (url.pathname === '/' || url.pathname === '/health')) {
      return new Response(
        JSON.stringify({
          status: 'ok',
          service: 'OSN Kimia Mastery Mailer Worker',
          timestamp: new Date().toISOString(),
        }),
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    }

    if (request.method !== 'POST' || url.pathname !== '/notify') {
      return new Response(JSON.stringify({ error: 'Endpoint not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    try {
      const body = await request.json();
      const { action, student, adminEmail } = body;

      if (action !== 'student_registered') {
        return new Response(JSON.stringify({ error: 'Action not supported' }), {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      }

      const recipientAdmin = adminEmail || env.ADMIN_EMAIL || 'ezzarscarlet@gmail.com';
      const studentEmail = student.email;
      const studentName = student.fullName || 'Calon Medalis';
      const schoolName = student.schoolName || 'Tidak Disebutkan';
      const gradeLevel = student.gradeLevel || 'Kelas 10/11/12';
      const targetOlympiad = student.targetOlympiad || 'OSK';
      const phoneWhatsapp = student.phoneWhatsApp || '-';
      const registeredAt = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });

      // Cek penyedia email yang tersedia di environment secrets
      // Prioritas 1: Brevo API (paling mudah tanpa custom domain, cukup daftar free dan verifikasi email Gmail Anda)
      // Prioritas 2: Resend API
      const brevoApiKey = env.BREVO_API_KEY;
      const resendApiKey = env.RESEND_API_KEY;
      const senderEmail = env.SENDER_EMAIL || 'ezzarscarlet@gmail.com';
      const senderName = env.SENDER_NAME || 'OSN Kimia Mastery';

      // 1. Template HTML untuk Administrator
      const adminHtmlContent = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <div style="padding-bottom: 16px; border-bottom: 2px solid #0284c7;">
            <h2 style="color: #0f172a; margin: 0; font-size: 20px;">🎓 Pendaftaran Siswa Baru - OSN Kimia Mastery</h2>
            <p style="color: #64748b; font-size: 13px; margin: 4px 0 0 0;">Notifikasi sistem resmi platform olimpiade sains kimia</p>
          </div>
          
          <div style="margin-top: 20px;">
            <p style="color: #334155; font-size: 14px;">Halo <strong>Administrator (${recipientAdmin})</strong>,</p>
            <p style="color: #334155; font-size: 14px;">Seorang siswa baru baru saja menyelesaikan pendaftaran di platform OSN Kimia Mastery:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 13px;">
              <tr style="background-color: #f8fafc;">
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; width: 35%;">Nama Lengkap</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0; color: #0f172a;">${studentName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Email Siswa</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0; color: #0284c7;"><a href="mailto:${studentEmail}">${studentEmail}</a></td>
              </tr>
              <tr style="background-color: #f8fafc;">
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Asal Sekolah</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0;">${schoolName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Jenjang / Kelas</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0;">Kelas ${gradeLevel}</td>
              </tr>
              <tr style="background-color: #f8fafc;">
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Target Prestasi</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0; color: #16a34a; font-weight: bold;">Olimpiade Sains ${targetOlympiad}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Nomor Kontak / WA</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0;">${phoneWhatsapp}</td>
              </tr>
              <tr style="background-color: #f8fafc;">
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Waktu Pendaftaran</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0;">${registeredAt} WIB</td>
              </tr>
            </table>

            <div style="margin-top: 24px; padding: 12px; background-color: #eff6ff; border-radius: 8px; border-left: 4px solid #3b82f6; font-size: 12px; color: #1e40af;">
              Siswa ini telah mendapatkan inisialisasi akun dengan 100 XP awal dan akses gratis ke seluruh peta silabus & worksheet interaktif.
            </div>
          </div>
        </div>
      `;

      // 2. Template HTML Sambutan untuk Siswa
      const studentHtmlContent = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <div style="text-align: center; padding-bottom: 20px; border-bottom: 1px solid #f1f5f9;">
            <div style="display: inline-block; background-color: #0284c7; color: #ffffff; padding: 6px 14px; border-radius: 20px; font-size: 12px; font-weight: bold;">OSN Kimia Mastery</div>
            <h1 style="color: #0f172a; margin: 12px 0 4px 0; font-size: 22px;">Selamat Datang, ${studentName}!</h1>
            <p style="color: #64748b; font-size: 13px; margin: 0;">Langkah Awal Anda Menuju Medali Olimpiade Sains Nasional</p>
          </div>
          
          <div style="margin-top: 20px; font-size: 14px; line-height: 1.6; color: #334155;">
            <p>Akun siswa Anda telah berhasil diaktifkan dengan target kompetisi: <strong>${targetOlympiad} Kimia</strong>.</p>
            
            <h3 style="color: #0f172a; font-size: 15px; margin-top: 18px;">Langkah Awal Pembinaan Anda:</h3>
            <ol style="padding-left: 20px; margin: 8px 0;">
              <li><strong>Eksplorasi Peta Silabus:</strong> Pelajari kurikulum berjenjang dari Fase E & F SMA hingga 10 Pilar Silabus OSN Kimia.</li>
              <li><strong>Kerjakan Lembar Kerja (Worksheet):</strong> Uji penalaran ilmiah dengan format scaffolding 4 langkah.</li>
              <li><strong>Evaluasi Presisi AI:</strong> Dapatkan feedback instan per baris langkah pengerjaan dan deteksi miskonsepsi.</li>
            </ol>

            <div style="margin-top: 24px; text-align: center;">
              <a href="https://osn-kimia.vercel.app/worksheet" style="display: inline-block; background-color: #10b981; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; font-size: 14px;">Mulai Belajar di Worksheet →</a>
            </div>
          </div>
          
          <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #e2e8f0; text-align: center; color: #94a3b8; font-size: 11px;">
            © ${new Date().getFullYear()} OSN Kimia Mastery • Dikirim secara otomatis oleh sistem notifikasi olimpiade
          </div>
        </div>
      `;

      let dispatchResult = { brevoSent: false, resendSent: false };

      // Kirim via Brevo API jika BREVO_API_KEY tersedia
      if (brevoApiKey) {
        // Kirim ke Admin
        const brevoAdminRes = await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'api-key': brevoApiKey,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sender: { email: senderEmail, name: senderName },
            to: [{ email: recipientAdmin, name: 'Administrator' }],
            subject: `[OSN Kimia Mastery] Siswa Baru Terdaftar: ${studentName} (${schoolName})`,
            htmlContent: adminHtmlContent,
          }),
        });

        // Kirim ke Siswa
        const brevoStudentRes = await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'api-key': brevoApiKey,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sender: { email: senderEmail, name: senderName },
            to: [{ email: studentEmail, name: studentName }],
            subject: `Selamat Datang di OSN Kimia Mastery, ${studentName}!`,
            htmlContent: studentHtmlContent,
          }),
        });

        dispatchResult.brevoSent = brevoAdminRes.ok && brevoStudentRes.ok;
      }

      // Kirim via Resend API jika RESEND_API_KEY tersedia
      if (!dispatchResult.brevoSent && resendApiKey) {
        const resendSender = env.SENDER_EMAIL && !env.SENDER_EMAIL.includes('gmail.com')
          ? env.SENDER_EMAIL
          : 'onboarding@resend.dev';

        // Kirim ke Admin
        const resendAdminRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: `${senderName} <${resendSender}>`,
            to: [recipientAdmin],
            subject: `[OSN Kimia Mastery] Siswa Baru Terdaftar: ${studentName} (${schoolName})`,
            html: adminHtmlContent,
          }),
        });

        // Kirim email sambutan ke Siswa
        try {
          await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${resendApiKey}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              from: `${senderName} <${resendSender}>`,
              to: [studentEmail],
              subject: `Selamat Datang di OSN Kimia Mastery, ${studentName}!`,
              html: studentHtmlContent,
            }),
          });
        } catch (_) {}

        dispatchResult.resendSent = resendAdminRes.ok;
      }

      return new Response(
        JSON.stringify({
          success: true,
          message: 'Notifikasi pendaftaran siswa diproses.',
          details: dispatchResult,
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    } catch (err) {
      return new Response(
        JSON.stringify({
          success: false,
          error: err.message,
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    }
  },
};
