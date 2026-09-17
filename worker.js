/**
 * worker.js
 * Cloudflare Worker Fullstack Entrypoint
 * Menggabungkan static frontend (dist) dengan backend API (/notify).
 * Berfungsi otomatis pada domain *.workers.dev tanpa memerlukan worker terpisah.
 */

async function handleNotify(request, env) {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }

  try {
    const body = await request.json();
    const { action, student, adminEmail } = body;

    if (action !== 'student_registered' || !student) {
      return new Response(JSON.stringify({ error: 'Action not supported or student data missing' }), {
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

    const resendApiKey = env.RESEND_API_KEY;
    const brevoApiKey = env.BREVO_API_KEY;
    const senderName = env.SENDER_NAME || 'OSN Kimia Mastery';
    const senderEmail = env.SENDER_EMAIL || 'onboarding@resend.dev';

    // 1. Template Email untuk Admin
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
            Siswa ini telah terdaftar di database Supabase dengan 100 XP awal dan akses ke kurikulum silabus.
          </div>
        </div>
      </div>
    `;

    // 2. Template Email Sambutan untuk Siswa
    const studentHtmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
        <div style="text-align: center; padding-bottom: 20px; border-bottom: 1px solid #f1f5f9;">
          <div style="display: inline-block; background-color: #0284c7; color: #ffffff; padding: 6px 14px; border-radius: 20px; font-size: 12px; font-weight: bold;">OSN Kimia Mastery</div>
          <h1 style="color: #0f172a; margin: 12px 0 4px 0; font-size: 22px;">Selamat Datang, ${studentName}!</h1>
          <p style="color: #64748b; font-size: 13px; margin: 0;">Langkah Awal Anda Menuju Medali Olimpiade Sains Nasional</p>
        </div>
        
        <div style="margin-top: 20px; font-size: 14px; line-height: 1.6; color: #334155;">
          <p>Akun siswa Anda telah terdaftar dengan target kompetisi: <strong>${targetOlympiad} Kimia</strong>.</p>
          
          <h3 style="color: #0f172a; font-size: 15px; margin-top: 18px;">Fitur Belajar Anda:</h3>
          <ol style="padding-left: 20px; margin: 8px 0;">
            <li><strong>Peta Silabus Lengkap:</strong> Akses materi dari dasar SMA hingga tingkat lanjut OSN Kimia.</li>
            <li><strong>Worksheet Interaktif:</strong> Kerjakan soal penalaran ilmiah dengan bimbingan terstruktur.</li>
            <li><strong>Evaluasi Presisi AI:</strong> Dapatkan analisis miskonsepsi secara real-time.</li>
          </ol>
        </div>
        
        <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #e2e8f0; text-align: center; color: #94a3b8; font-size: 11px;">
          © ${new Date().getFullYear()} OSN Kimia Mastery • Notifikasi pendaftaran platform
        </div>
      </div>
    `;

    const dispatchResults = {
      adminNotification: null,
      studentNotification: null,
    };

    // Kirim via Resend
    if (resendApiKey) {
      const resendSender = senderEmail && !senderEmail.includes('gmail.com')
        ? senderEmail
        : 'onboarding@resend.dev';

      // 1. Kirim notifikasi ke Admin
      try {
        const adminRes = await fetch('https://api.resend.com/emails', {
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
        dispatchResults.adminNotification = await adminRes.json().catch(() => ({ status: adminRes.status }));
      } catch (err) {
        dispatchResults.adminNotification = { error: err.message };
      }

      // 2. Kirim sambutan ke Siswa (Jika studentEmail sama dengan admin saat testing, atau jika domain verified)
      try {
        const studentRes = await fetch('https://api.resend.com/emails', {
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
        dispatchResults.studentNotification = await studentRes.json().catch(() => ({ status: studentRes.status }));
      } catch (err) {
        dispatchResults.studentNotification = { error: err.message };
      }
    }

    // Kirim via Brevo (jika ada BREVO_API_KEY)
    if (brevoApiKey && !dispatchResults.adminNotification?.id) {
      try {
        const brevoRes = await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'api-key': brevoApiKey,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sender: { email: recipientAdmin, name: senderName },
            to: [{ email: recipientAdmin, name: 'Administrator' }],
            subject: `[OSN Kimia Mastery] Siswa Baru Terdaftar: ${studentName} (${schoolName})`,
            htmlContent: adminHtmlContent,
          }),
        });
        dispatchResults.brevoAdmin = await brevoRes.json().catch(() => ({ status: brevoRes.status }));
      } catch (err) {
        dispatchResults.brevoAdmin = { error: err.message };
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Notifikasi pendaftaran diproses.',
        details: dispatchResults,
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
}

export default {
  async fetch(request, env, ctx) {
    // 1. Tangani CORS preflight
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

    // 2. Health check endpoint
    if (request.method === 'GET' && (url.pathname === '/health' || url.pathname === '/api/health')) {
      return new Response(
        JSON.stringify({
          status: 'ok',
          service: 'OSN Kimia Mastery Fullstack Worker',
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

    // 3. Tangani endpoint /notify
    if (url.pathname === '/notify' || url.pathname === '/api/notify') {
      return handleNotify(request, env);
    }

    // 4. Default: Sajikan aset statis web (dist)
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return new Response('Not Found', { status: 404 });
  },
};
