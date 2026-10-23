/**
 * worker.js
 * Cloudflare Worker Fullstack Entrypoint — Axioma Academy
 * Menggabungkan static frontend (dist), backend email relay (/notify via Resend: axioma@dfw.my.id),
 * serta Cloudflare R2 Storage (/api/storage/*).
 */

async function sendResendEmail(resendApiKey, fromHeader, toList, subject, html) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromHeader,
      to: Array.isArray(toList) ? toList : [toList],
      subject,
      html,
    }),
  });
  return res.json().catch(() => ({ status: res.status }));
}

function buildDossierRows(rows) {
  return rows
    .filter((r) => r && r.value !== undefined && r.value !== null && r.value !== '')
    .map((r, idx, arr) => {
      const isLast = idx === arr.length - 1;
      const borderStyle = isLast ? '' : 'border-bottom: 1px solid #e2e8f0;';
      const valueStyle = r.mono
        ? "font-family: 'JetBrains Mono', 'Courier New', monospace; font-weight: 700; color: #0f172a; font-size: 13px;"
        : r.highlight
        ? 'font-weight: 700; color: #0f766e; font-size: 13px;'
        : 'font-weight: 600; color: #0f172a; font-size: 13px;';
      return `
        <tr>
          <td style="padding: 11px 16px; ${borderStyle} width: 38%; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #475569; vertical-align: top;">
            ${r.label}
          </td>
          <td style="padding: 11px 16px; ${borderStyle} ${valueStyle} vertical-align: top;">
            ${r.value}
          </td>
        </tr>
      `;
    })
    .join('');
}

function buildEditorialEmail({ docRef, categoryLabel, title, subtitle, bodyHtml, baseAppUrl }) {
  const year = new Date().getFullYear();
  const appUrl = (baseAppUrl || 'https://osn.icmadani.workers.dev').replace(/\/$/, '');

  return `
    <div style="background-color: #f1f5f9; padding: 36px 16px; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #0f172a;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #cbd5e1; border-radius: 14px; overflow: hidden;">
        <!-- Top Architectural Accent Bar -->
        <div style="height: 4px; background-color: #0f766e;"></div>

        <!-- Institutional Masthead -->
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
                  ${docRef}
                </span>
              </td>
            </tr>
          </table>
        </div>

        <!-- Title & Lead Header -->
        <div style="padding: 28px 28px 20px 28px; border-bottom: 1px solid #e2e8f0;">
          <div style="font-family: 'JetBrains Mono', 'Courier New', monospace; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #0f766e; margin-bottom: 6px;">
            ${categoryLabel}
          </div>
          <h1 style="margin: 0; font-size: 21px; font-weight: 800; color: #0f172a; line-height: 1.3; letter-spacing: -0.01em;">
            ${title}
          </h1>
          <p style="margin: 6px 0 0 0; font-size: 13px; color: #475569; line-height: 1.5;">
            ${subtitle}
          </p>
        </div>

        <!-- Main Content Body -->
        <div style="padding: 24px 28px 28px 28px; font-size: 14px; line-height: 1.65; color: #334155;">
          ${bodyHtml}
        </div>

        <!-- Academic Editorial Footer -->
        <div style="background-color: #f8fafc; padding: 20px 28px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #475569; line-height: 1.6;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="vertical-align: top;">
                <div style="font-weight: 700; color: #0f172a;">Axioma Academy</div>
                <div style="color: #475569; margin-top: 2px;">
                  Kurikulum Nasional SMA &middot; Cambridge IGCSE &amp; AS/A Level &middot; Olimpiade Sains Nasional
                </div>
                <div style="color: #64748b; margin-top: 6px; font-size: 11px;">
                  Email sistem resmi dari <strong style="color: #334155;">axioma@dfw.my.id</strong> &middot; &copy; ${year} Axioma Academy
                </div>
              </td>
              <td style="vertical-align: top; text-align: right; white-space: nowrap;">
                <a href="${appUrl}" style="color: #0f766e; font-weight: 700; text-decoration: none; font-size: 12px;">Portal Utama &rarr;</a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  `;
}

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
    const { action, student, recipient, classroom, adminEmail, appUrl } = body;

    const recipientAdmin = adminEmail || env.ADMIN_EMAIL || 'fluffykitten.dev@gmail.com';
    const resendApiKey = env.RESEND_API_KEY;
    const brevoApiKey = env.BREVO_API_KEY;
    const senderName = env.SENDER_NAME || 'Axioma Academy';
    const senderEmail = env.SENDER_EMAIL || 'axioma@dfw.my.id';
    const resendSender =
      senderEmail && !senderEmail.includes('gmail.com') ? senderEmail : 'axioma@dfw.my.id';
    const fromHeader = `${senderName} <${resendSender}>`;
    const baseAppUrl = (appUrl || 'https://osn.icmadani.workers.dev').replace(/\/$/, '');
    const nowFormatted = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });

    const dispatchResults = {};

    // =========================================================================
    // 1. PENDAFTARAN PENGGUNA BARU (student_registered)
    // =========================================================================
    if (action === 'student_registered' && student) {
      const userEmail = student.email;
      const userName = student.fullName || 'Pendaftar Baru';
      const userId = student.userId || '-';
      const isTeacherReg = student.role === 'teacher' || student.role === 'guru';
      const roleLabel = isTeacherReg ? 'Guru / Pembina' : 'Siswa';
      const schoolName = student.schoolName || 'Tidak Disebutkan';
      const gradeLevel = student.gradeLevel ? `Kelas ${student.gradeLevel}` : '-';
      const targetProgram = isTeacherReg
        ? `Bidang Ampuan: ${(student.teachingSubject || 'Kimia').toUpperCase()}`
        : `Olimpiade Sains / Kurikulum: ${student.targetOlympiad || 'OSN'}`;
      const phoneWhatsapp = student.phoneWhatsApp || '-';
      const initialClassCode = student.initialClassCode || 'Belum memasukkan kode kelas';
      const membershipTier =
        student.membershipTier || (isTeacherReg ? 'Pro (Guru Pembina)' : 'Reguler (Siswa)');

      const adminDossierRows = buildDossierRows([
        { label: 'Nama Lengkap', value: userName },
        {
          label: 'Alamat Email',
          value: `<a href="mailto:${userEmail}" style="color: #0f766e; text-decoration: none; font-weight: 700;">${userEmail}</a>`,
        },
        { label: 'ID Akun (UUID)', value: userId, mono: true },
        { label: 'Peran Terdaftar', value: roleLabel, highlight: true },
        { label: 'Institusi / Sekolah', value: schoolName },
        !isTeacherReg ? { label: 'Tingkat Kelas', value: gradeLevel } : null,
        { label: 'Program / Fokus', value: targetProgram, highlight: true },
        !isTeacherReg ? { label: 'Kode Kelas Awal', value: initialClassCode, mono: true } : null,
        { label: 'Nomor WhatsApp', value: phoneWhatsapp, mono: true },
        { label: 'Paket Akses', value: membershipTier },
        { label: 'Waktu Registrasi', value: `${nowFormatted} WIB`, mono: true },
      ]);

      const adminHtml = buildEditorialEmail({
        docRef: 'REG // ADMIN-LOG',
        categoryLabel: 'Notifikasi Pendaftaran Akun',
        title: `${userName} Mendaftar sebagai ${roleLabel}`,
        subtitle: `Pendaftaran baru tercatat dari ${schoolName} pada ${nowFormatted} WIB.`,
        baseAppUrl,
        bodyHtml: `
          <p style="margin: 0 0 16px 0;">
            Halo <strong>Administrator</strong>, sistem baru saja mencatat pendaftaran akun baru di <strong>Axioma Academy</strong> dengan rincian pendaftar lengkap sebagai berikut:
          </p>

          <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 10px; overflow: hidden; margin-bottom: 22px;">
            <div style="background-color: #f1f5f9; padding: 10px 16px; border-bottom: 1px solid #cbd5e1; font-family: 'JetBrains Mono', 'Courier New', monospace; font-size: 11px; font-weight: 700; color: #334155; text-transform: uppercase; letter-spacing: 0.05em;">
              Lembar Data Pendaftar (Applicant Dossier)
            </div>
            <table style="width: 100%; border-collapse: collapse;">
              ${adminDossierRows}
            </table>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td>
                <a href="${baseAppUrl}/admin/users" style="display: inline-block; background-color: #0f172a; color: #ffffff; text-decoration: none; padding: 12px 22px; border-radius: 8px; font-weight: 700; font-size: 13px;">
                  Periksa di Manajemen Pengguna &rarr;
                </a>
              </td>
            </tr>
          </table>
        `,
      });

      const studentDossierRows = buildDossierRows([
        { label: 'Nama Lengkap', value: userName },
        { label: 'Email Terdaftar', value: userEmail, mono: true },
        { label: 'Peran Akun', value: roleLabel, highlight: true },
        { label: 'Asal Sekolah / Institusi', value: schoolName },
        !isTeacherReg ? { label: 'Jenjang Kelas', value: gradeLevel } : null,
        { label: 'Fokus Akademik', value: targetProgram },
        !isTeacherReg && student.initialClassCode
          ? { label: 'Kode Kelas Terkait', value: student.initialClassCode, mono: true }
          : null,
        { label: 'Nomor WhatsApp', value: phoneWhatsapp, mono: true },
        { label: 'Tanggal Terdaftar', value: `${nowFormatted} WIB`, mono: true },
      ]);

      const studentHtml = buildEditorialEmail({
        docRef: 'WELCOME // AXIOMA',
        categoryLabel: 'Konfirmasi Pendaftaran Akun',
        title: `Selamat Datang di Axioma Academy, ${userName}`,
        subtitle: 'Berikut adalah arsip rincian pendaftaran dan panduan langkah awal akun Anda.',
        baseAppUrl,
        bodyHtml: `
          <p style="margin: 0 0 16px 0;">
            Akun Anda di <strong>Axioma Academy</strong> telah berhasil dibuat. Simpan email ini sebagai bukti rincian profil akademik yang Anda daftarkan:
          </p>

          <!-- Applicant Dossier Card -->
          <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 10px; overflow: hidden; margin-bottom: 24px;">
            <div style="background-color: #f1f5f9; padding: 10px 16px; border-bottom: 1px solid #cbd5e1; font-family: 'JetBrains Mono', 'Courier New', monospace; font-size: 11px; font-weight: 700; color: #334155; text-transform: uppercase; letter-spacing: 0.05em;">
              Ringkasan Profil Pendaftar
            </div>
            <table style="width: 100%; border-collapse: collapse;">
              ${studentDossierRows}
            </table>
          </div>

          <!-- Editorial Numbered Steps -->
          <div style="margin-bottom: 24px;">
            <div style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #0f172a; margin-bottom: 12px;">
              Langkah Awal Penggunaan Portal
            </div>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 12px 8px 0; vertical-align: top; width: 32px; font-family: 'JetBrains Mono', 'Courier New', monospace; font-size: 13px; font-weight: 700; color: #0f766e;">01</td>
                <td style="padding: 8px 0; vertical-align: top; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #334155;">
                  <strong style="color: #0f172a;">Masuk ke Kelas Binaan:</strong> Gunakan Kode Kelas dari guru pembina Anda untuk membuka akses modul dan latihan terarah.
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 12px 8px 0; vertical-align: top; width: 32px; font-family: 'JetBrains Mono', 'Courier New', monospace; font-size: 13px; font-weight: 700; color: #0f766e;">02</td>
                <td style="padding: 8px 0; vertical-align: top; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #334155;">
                  <strong style="color: #0f172a;">Pelajari Modul Terstruktur:</strong> Akses materi konsep dasar hingga analisis olimpiade dilengkapi rumus dan diagram visual.
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 12px 8px 0; vertical-align: top; width: 32px; font-family: 'JetBrains Mono', 'Courier New', monospace; font-size: 13px; font-weight: 700; color: #0f766e;">03</td>
                <td style="padding: 8px 0; vertical-align: top; font-size: 13px; color: #334155;">
                  <strong style="color: #0f172a;">Kerjakan Lembar Kerja:</strong> Selesaikan soal latihan bertahap untuk memantau perkembangan penguasaan topik Anda.
                </td>
              </tr>
            </table>
          </div>

          <a href="${baseAppUrl}${isTeacherReg ? '/teacher' : '/dashboard'}" style="display: inline-block; background-color: #0f172a; color: #ffffff; text-decoration: none; padding: 13px 24px; border-radius: 8px; font-weight: 700; font-size: 14px;">
            Buka Ruang Belajar Axioma &rarr;
          </a>
        `,
      });

      if (resendApiKey) {
        try {
          dispatchResults.adminNotification = await sendResendEmail(
            resendApiKey,
            fromHeader,
            [recipientAdmin],
            `[Axioma Academy] Pendaftar Baru (${roleLabel}): ${userName} - ${schoolName}`,
            adminHtml
          );
        } catch (err) {
          dispatchResults.adminNotification = { error: err.message };
        }

        if (userEmail) {
          try {
            dispatchResults.studentNotification = await sendResendEmail(
              resendApiKey,
              fromHeader,
              [userEmail],
              `Konfirmasi Pendaftaran Axioma Academy - ${userName}`,
              studentHtml
            );
          } catch (err) {
            dispatchResults.studentNotification = { error: err.message };
          }
        }
      }

      if (brevoApiKey && !dispatchResults.adminNotification?.id) {
        try {
          const brevoRes = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
              'api-key': brevoApiKey,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              sender: { email: resendSender, name: senderName },
              to: [{ email: recipientAdmin, name: 'Administrator' }],
              subject: `[Axioma Academy] Pendaftar Baru (${roleLabel}): ${userName}`,
              htmlContent: adminHtml,
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
          message: 'Notifikasi pendaftaran berhasil dikirim.',
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
    }

    // =========================================================================
    // 2. AKTIVASI AKUN & UNDANGAN PENGGUNA BARU (account_activation)
    // =========================================================================
    if (action === 'account_activation' && recipient?.email) {
      const targetEmail = recipient.email;
      const fullName = recipient.fullName || 'Pengguna';
      const roleLabel =
        recipient.role === 'teacher' || recipient.role === 'guru'
          ? 'Guru / Pembina'
          : recipient.role === 'admin'
          ? 'Administrator'
          : 'Siswa';
      const activationUrl =
        recipient.activationUrl ||
        `${baseAppUrl}/login?mode=reset&email=${encodeURIComponent(targetEmail)}`;
      const schoolName = recipient.schoolName || 'Axioma Academy';

      const activationRows = buildDossierRows([
        { label: 'Nama Pengguna', value: fullName },
        { label: 'Email Terdaftar', value: targetEmail, mono: true },
        { label: 'Peran Akses', value: roleLabel, highlight: true },
        { label: 'Institusi / Sekolah', value: schoolName },
        { label: 'Status Akun', value: 'Menunggu Aktivasi & Pengaturan Kata Sandi' },
        { label: 'Waktu Penerbitan', value: `${nowFormatted} WIB`, mono: true },
      ]);

      const activationHtml = buildEditorialEmail({
        docRef: 'AUTH // ACTIVATE',
        categoryLabel: 'Undangan & Aktivasi Akun Resmi',
        title: `Aktifkan Akun Axioma Academy Anda`,
        subtitle: `Diterbitkan untuk ${fullName} (${roleLabel} - ${schoolName})`,
        baseAppUrl,
        bodyHtml: `
          <p style="margin: 0 0 16px 0;">
            Halo <strong>${fullName}</strong>, akun Anda telah didaftarkan di portal akademik <strong>Axioma Academy</strong>. Berikut adalah rincian kredensial profil Anda:
          </p>

          <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 10px; overflow: hidden; margin-bottom: 22px;">
            <div style="background-color: #f1f5f9; padding: 10px 16px; border-bottom: 1px solid #cbd5e1; font-family: 'JetBrains Mono', 'Courier New', monospace; font-size: 11px; font-weight: 700; color: #334155; text-transform: uppercase; letter-spacing: 0.05em;">
              Rincian Pendaftaran Akun
            </div>
            <table style="width: 100%; border-collapse: collapse;">
              ${activationRows}
            </table>
          </div>

          <!-- Primary Callout Box -->
          <div style="background-color: #f0fdfa; border: 1px solid #99f6e4; border-left: 4px solid #0f766e; border-radius: 8px; padding: 16px 18px; margin-bottom: 22px;">
            <div style="font-size: 13px; font-weight: 700; color: #0f172a; margin-bottom: 4px;">
              Langkah Aktivasi Pertama Kali
            </div>
            <div style="font-size: 13px; color: #334155; line-height: 1.55;">
              Klik tombol di bawah ini untuk mengatur kata sandi pribadi Anda. Setelah kata sandi disimpan, status akun Anda akan langsung aktif sepenuhnya.
            </div>
          </div>

          <div style="margin-bottom: 20px;">
            <a href="${activationUrl}" style="display: inline-block; background-color: #0f172a; color: #ffffff; text-decoration: none; padding: 13px 24px; border-radius: 8px; font-weight: 700; font-size: 14px;">
              Aktifkan Akun &amp; Buat Kata Sandi &rarr;
            </a>
          </div>

          <div style="padding-top: 14px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; line-height: 1.5;">
            Jika tombol di atas tidak dapat diklik, salin dan buka tautan berikut di peramban web Anda:<br />
            <a href="${activationUrl}" style="color: #0f766e; font-family: 'JetBrains Mono', 'Courier New', monospace; font-size: 11px; word-break: break-all;">${activationUrl}</a>
          </div>
        `,
      });

      if (resendApiKey) {
        try {
          dispatchResults.activationEmail = await sendResendEmail(
            resendApiKey,
            fromHeader,
            [targetEmail],
            `Aktivasi Akun Axioma Academy - ${fullName}`,
            activationHtml
          );
        } catch (err) {
          dispatchResults.activationEmail = { error: err.message };
        }
      }

      return new Response(
        JSON.stringify({
          success: true,
          message: 'Email aktivasi akun berhasil dikirim.',
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
    }

    // =========================================================================
    // 3. UNDANGAN & PERSETUJUAN KELAS BINAAN (classroom_invitation / classroom_approved)
    // =========================================================================
    if (
      (action === 'classroom_invitation' || action === 'classroom_approved') &&
      classroom?.studentEmail
    ) {
      const isInvitation = action === 'classroom_invitation';
      const studentEmail = classroom.studentEmail;
      const studentName = classroom.studentName || 'Siswa';
      const classroomName = classroom.classroomName || 'Kelas Binaan Axioma Academy';
      const classroomCode = classroom.classroomCode || '-';
      const teacherName = classroom.teacherName || 'Guru Pembina';
      const classroomUrl = classroom.classroomUrl || `${baseAppUrl}/dashboard`;

      const subjectLine = isInvitation
        ? `Undangan Kelas Binaan: ${classroomName} (${classroomCode}) - Axioma Academy`
        : `Keanggotaan Kelas Disetujui: ${classroomName} - Axioma Academy`;

      const classroomRows = buildDossierRows([
        { label: 'Nama Siswa', value: studentName },
        { label: 'Email Siswa', value: studentEmail, mono: true },
        { label: 'Nama Kelas Binaan', value: classroomName, highlight: true },
        { label: 'Guru Pembina', value: teacherName },
        {
          label: 'Status Keanggotaan',
          value: isInvitation ? 'Diundang oleh Guru Pembina' : 'Aktif / Disetujui',
          highlight: true,
        },
        { label: 'Waktu Pencatatan', value: `${nowFormatted} WIB`, mono: true },
      ]);

      const classroomHtml = buildEditorialEmail({
        docRef: isInvitation ? 'CLASS // INVITE' : 'CLASS // APPROVED',
        categoryLabel: isInvitation ? 'Undangan Kelas Binaan' : 'Persetujuan Anggota Kelas',
        title: isInvitation
          ? `Undangan Bergabung ke ${classroomName}`
          : `Keanggotaan Anda di ${classroomName} Telah Aktif`,
        subtitle: `Dibina oleh ${teacherName} di Axioma Academy`,
        baseAppUrl,
        bodyHtml: `
          <p style="margin: 0 0 16px 0;">
            Halo <strong>${studentName}</strong>, ${
          isInvitation
            ? `<strong>${teacherName}</strong> telah mengundang Anda untuk bergabung sebagai anggota di kelas binaan <strong>${classroomName}</strong>.`
            : `permintaan bergabung Anda ke kelas binaan <strong>${classroomName}</strong> telah disetujui oleh <strong>${teacherName}</strong>.`
        }
          </p>

          <!-- Focal Point: Classroom Access Code Callout -->
          <div style="background-color: #f0fdfa; border: 1px solid #99f6e4; border-radius: 10px; padding: 18px 20px; margin-bottom: 22px; text-align: center;">
            <div style="font-family: 'JetBrains Mono', 'Courier New', monospace; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #0f766e; margin-bottom: 6px;">
              Kode Akses Kelas Binaan
            </div>
            <div style="font-family: 'JetBrains Mono', 'Courier New', monospace; font-size: 24px; font-weight: 800; letter-spacing: 0.1em; color: #0f172a;">
              ${classroomCode}
            </div>
          </div>

          <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 10px; overflow: hidden; margin-bottom: 22px;">
            <div style="background-color: #f1f5f9; padding: 10px 16px; border-bottom: 1px solid #cbd5e1; font-family: 'JetBrains Mono', 'Courier New', monospace; font-size: 11px; font-weight: 700; color: #334155; text-transform: uppercase; letter-spacing: 0.05em;">
              Rincian Keanggotaan Kelas
            </div>
            <table style="width: 100%; border-collapse: collapse;">
              ${classroomRows}
            </table>
          </div>

          <a href="${classroomUrl}" style="display: inline-block; background-color: #0f172a; color: #ffffff; text-decoration: none; padding: 13px 24px; border-radius: 8px; font-weight: 700; font-size: 14px;">
            Buka Kelas di Axioma Academy &rarr;
          </a>
        `,
      });

      if (resendApiKey) {
        try {
          dispatchResults.classroomEmail = await sendResendEmail(
            resendApiKey,
            fromHeader,
            [studentEmail],
            subjectLine,
            classroomHtml
          );
        } catch (err) {
          dispatchResults.classroomEmail = { error: err.message };
        }
      }

      return new Response(
        JSON.stringify({
          success: true,
          message: 'Email notifikasi kelas binaan berhasil dikirim.',
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
    }

    return new Response(
      JSON.stringify({ error: 'Action not supported or required payload missing' }),
      {
        status: 400,
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

// ============================================================================
// Cloudflare R2 Storage Handlers (Gambar, Diagram Soal, dll)
// ============================================================================

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

const ALLOWED_MIME_TYPES = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg',
  'image/webp': 'webp',
  'image/svg+xml': 'svg',
  'image/gif': 'gif',
  'application/pdf': 'pdf',
};

const ALLOWED_CATEGORIES = ['diagrams', 'questions', 'materials', 'avatars', 'general'];

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Category, X-Filename',
  };
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders(),
    },
  });
}

function sanitizeCategory(rawCategory) {
  const cat = (rawCategory || 'diagrams').toLowerCase().trim();
  return ALLOWED_CATEGORIES.includes(cat) ? cat : 'diagrams';
}

function sanitizeFilename(originalName) {
  if (!originalName) return 'file';
  return originalName
    .toLowerCase()
    .replace(/[^a-z0-9.-]/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 50);
}

/**
 * Upload gambar / diagram ke Cloudflare R2
 */
async function handleStorageUpload(request, env) {
  if (request.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed. Gunakan POST untuk upload.' }, 405);
  }

  const bucket = env.STORAGE_BUCKET;
  if (!bucket) {
    return jsonResponse(
      {
        error: 'R2 Bucket (STORAGE_BUCKET) belum di-binding pada Cloudflare Worker.',
        hint: 'Pastikan bucket "osn-storage" telah ditautkan di wrangler.json / Dashboard Workers.',
      },
      503
    );
  }

  const contentType = request.headers.get('content-type') || '';
  const url = new URL(request.url);

  let fileBuffer = null;
  let fileMime = '';
  let originalFilename = '';
  let category = sanitizeCategory(request.headers.get('x-category') || url.searchParams.get('category'));

  // A. Penanganan Multipart Form Data (dari input file HTML)
  if (contentType.includes('multipart/form-data')) {
    try {
      const formData = await request.formData();
      const fileEntry = formData.get('file');

      if (!fileEntry || typeof fileEntry === 'string') {
        return jsonResponse({ error: 'Field "file" wajib disertakan dalam form-data.' }, 400);
      }

      if (formData.get('category')) {
        category = sanitizeCategory(formData.get('category'));
      }

      originalFilename = fileEntry.name || 'diagram';
      fileMime = fileEntry.type || 'application/octet-stream';
      fileBuffer = await fileEntry.arrayBuffer();
    } catch (err) {
      return jsonResponse({ error: `Gagal membaca form-data: ${err.message}` }, 400);
    }
  } else {
    // B. Penanganan Raw Binary Upload (dengan header X-Category & Content-Type)
    originalFilename = request.headers.get('x-filename') || 'diagram';
    fileMime = contentType.split(';')[0].trim().toLowerCase();
    fileBuffer = await request.arrayBuffer();
  }

  if (!fileBuffer || fileBuffer.byteLength === 0) {
    return jsonResponse({ error: 'Berkas kosong atau tidak dapat dibaca.' }, 400);
  }

  if (fileBuffer.byteLength > MAX_FILE_SIZE) {
    return jsonResponse(
      {
        error: `Ukuran berkas (${(fileBuffer.byteLength / (1024 * 1024)).toFixed(2)} MB) melebihi batas maksimum 10 MB.`,
      },
      413
    );
  }

  // Tebak MIME dari ekstensi jika MIME generik (Windows / browser quirks)
  if (!fileMime || fileMime === 'application/octet-stream' || !ALLOWED_MIME_TYPES[fileMime]) {
    const extFromName = originalFilename.split('.').pop()?.toLowerCase();
    const mimeMap = {
      png: 'image/png',
      jpg: 'image/jpeg',
      jpeg: 'image/jpeg',
      webp: 'image/webp',
      svg: 'image/svg+xml',
      gif: 'image/gif',
      pdf: 'application/pdf',
    };
    if (extFromName && mimeMap[extFromName]) {
      fileMime = mimeMap[extFromName];
    }
  }

  // Validasi tipe berkas MIME
  const ext = ALLOWED_MIME_TYPES[fileMime];
  if (!ext) {
    return jsonResponse(
      {
        error: `Tipe berkas "${fileMime || 'tidak diketahui'}" tidak didukung. Format yang diperbolehkan: PNG, JPEG, WEBP, SVG, GIF, PDF.`,
      },
      415
    );
  }

  // Generate Unique Key: {category}/{timestamp}-{randomId}.{ext}
  const timestamp = Date.now();
  const randomId = Math.random().toString(36).substring(2, 9);
  const cleanName = sanitizeFilename(originalFilename.replace(/\.[^/.]+$/, ''));
  const storageKey = `${category}/${timestamp}-${cleanName}-${randomId}.${ext}`;

  try {
    await bucket.put(storageKey, fileBuffer, {
      httpMetadata: {
        contentType: fileMime,
        cacheControl: 'public, max-age=31536000, immutable',
      },
      customMetadata: {
        originalName: originalFilename,
        category,
        uploadedAt: new Date().toISOString(),
        fileSize: String(fileBuffer.byteLength),
      },
    });

    const publicUrl = `${url.origin}/api/storage/file/${storageKey}`;

    return jsonResponse({
      success: true,
      url: publicUrl,
      key: storageKey,
      filename: originalFilename,
      size: fileBuffer.byteLength,
      contentType: fileMime,
      category,
      uploadedAt: new Date().toISOString(),
    });
  } catch (err) {
    return jsonResponse({ error: `Gagal menyimpan berkas ke Cloudflare R2: ${err.message}` }, 500);
  }
}

/**
 * Mengambil dan menyajikan berkas dari Cloudflare R2
 */
async function handleStorageGet(request, env, storageKey) {
  const bucket = env.STORAGE_BUCKET;
  if (!bucket) {
    return jsonResponse({ error: 'R2 Bucket tidak terkonfigurasi.' }, 503);
  }

  if (!storageKey) {
    return jsonResponse({ error: 'Kunci berkas (storage key) tidak diberikan.' }, 400);
  }

  try {
    const object = await bucket.get(storageKey);
    if (!object) {
      return jsonResponse({ error: `Berkas "${storageKey}" tidak ditemukan di storage.` }, 404);
    }

    // Dukungan HTTP 304 ETag Caching
    const clientEtag = request.headers.get('if-none-match');
    if (clientEtag && clientEtag === object.httpEtag) {
      return new Response(null, {
        status: 304,
        headers: {
          ...corsHeaders(),
          ETag: object.httpEtag,
        },
      });
    }

    const headers = new Headers();
    object.writeHttpMetadata(headers);
    headers.set('ETag', object.httpEtag);
    headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    headers.set('Access-Control-Allow-Origin', '*');

    return new Response(object.body, {
      headers,
    });
  } catch (err) {
    return jsonResponse({ error: `Gagal mengambil berkas dari R2: ${err.message}` }, 500);
  }
}

/**
 * Menghapus berkas dari Cloudflare R2
 */
async function handleStorageDelete(request, env, storageKey) {
  const bucket = env.STORAGE_BUCKET;
  if (!bucket) {
    return jsonResponse({ error: 'R2 Bucket tidak terkonfigurasi.' }, 503);
  }

  if (!storageKey) {
    return jsonResponse({ error: 'Kunci berkas tidak diberikan.' }, 400);
  }

  try {
    await bucket.delete(storageKey);
    return jsonResponse({
      success: true,
      message: `Berkas "${storageKey}" berhasil dihapus dari Cloudflare R2.`,
      key: storageKey,
    });
  } catch (err) {
    return jsonResponse({ error: `Gagal menghapus berkas: ${err.message}` }, 500);
  }
}

/**
 * Menampilkan daftar berkas tersimpan di R2 (untuk Galeri Media Guru)
 */
async function handleStorageList(request, env) {
  const bucket = env.STORAGE_BUCKET;
  if (!bucket) {
    return jsonResponse({ error: 'R2 Bucket tidak terkonfigurasi.' }, 503);
  }

  const url = new URL(request.url);
  const prefix = url.searchParams.get('prefix') || '';
  const limit = Math.min(parseInt(url.searchParams.get('limit') || '50', 10), 100);

  try {
    const listed = await bucket.list({ prefix, limit });
    const objects = listed.objects.map((obj) => ({
      key: obj.key,
      size: obj.size,
      uploadedAt: obj.uploaded.toISOString(),
      httpEtag: obj.httpEtag,
      url: `${url.origin}/api/storage/file/${obj.key}`,
      customMetadata: obj.customMetadata || {},
    }));

    return jsonResponse({
      success: true,
      objects,
      truncated: listed.truncated,
      cursor: listed.cursor,
    });
  } catch (err) {
    return jsonResponse({ error: `Gagal membaca daftar berkas dari R2: ${err.message}` }, 500);
  }
}

export default {
  async fetch(request, env, ctx) {
    // 1. Tangani CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: corsHeaders(),
      });
    }

    const url = new URL(request.url);
    const pathname = url.pathname;

    // 2. Health check endpoint
    if (request.method === 'GET' && (pathname === '/health' || pathname === '/api/health')) {
      return jsonResponse({
        status: 'ok',
        service: 'Axioma Academy Fullstack Worker',
        sender: env.SENDER_EMAIL || 'axioma@dfw.my.id',
        hasStorageBucket: Boolean(env.STORAGE_BUCKET),
        timestamp: new Date().toISOString(),
      });
    }

    // 3. Tangani endpoint /notify (Email Pendaftaran, Aktivasi, & Kelas Binaan)
    if (pathname === '/notify' || pathname === '/api/notify') {
      return handleNotify(request, env);
    }

    // 4. Tangani endpoint Cloudflare R2 Storage
    // 4a. Upload: POST /api/storage/upload atau /storage/upload
    if (pathname === '/api/storage/upload' || pathname === '/storage/upload') {
      return handleStorageUpload(request, env);
    }

    // 4b. List: GET /api/storage/list atau /storage/list
    if (request.method === 'GET' && (pathname === '/api/storage/list' || pathname === '/storage/list')) {
      return handleStorageList(request, env);
    }

    // 4c. File Delivery & Delete: /api/storage/file/:key atau /storage/file/:key
    const filePrefix = pathname.startsWith('/api/storage/file/')
      ? '/api/storage/file/'
      : pathname.startsWith('/storage/file/')
      ? '/storage/file/'
      : null;

    if (filePrefix) {
      const storageKey = decodeURIComponent(pathname.substring(filePrefix.length));
      if (request.method === 'GET') {
        return handleStorageGet(request, env, storageKey);
      }
      if (request.method === 'DELETE') {
        return handleStorageDelete(request, env, storageKey);
      }
    }

    // 5. Default: Sajikan aset statis web (dist)
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return new Response('Not Found', { status: 404 });
  },
};
