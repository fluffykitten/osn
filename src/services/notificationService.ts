/**
 * notificationService.ts
 * Layanan pengiriman notifikasi email pendaftaran dan administrasi via Cloudflare Workers (*.workers.dev)
 * Bekerja tanpa membutuhkan custom domain, dengan memanfaatkan REST API Relay.
 */

export interface StudentNotificationPayload {
  fullName: string;
  email: string;
  schoolName?: string;
  gradeLevel?: string;
  targetOlympiad?: string;
  phoneWhatsApp?: string;
  registeredAt?: string;
}

const CLOUDFLARE_MAILER_URL =
  import.meta.env.VITE_CLOUDFLARE_MAILER_URL || import.meta.env.VITE_CLOUDFLARE_MAILER || '';

export const sendStudentRegistrationNotification = async (
  data: StudentNotificationPayload
): Promise<{ success: boolean; message?: string }> => {
  if (!CLOUDFLARE_MAILER_URL) {
    console.info(
      '[NotificationService] VITE_CLOUDFLARE_MAILER_URL belum dikonfigurasi. Notifikasi email diskip.'
    );
    return {
      success: true,
      message: 'Worker belum terhubung, melanjutkan proses pendaftaran reguler.',
    };
  }

  try {
    const payload = {
      action: 'student_registered',
      student: {
        ...data,
        registeredAt: data.registeredAt || new Date().toISOString(),
      },
      adminEmail: 'fluffykitten.dev@gmail.com',
    };

    const response = await fetch(`${CLOUDFLARE_MAILER_URL.replace(/\/$/, '')}/notify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.warn('[NotificationService] Gagal mengirim notifikasi via Worker:', errText);
      return { success: false, message: errText };
    }

    const resJson = await response.json();
    return { success: true, message: resJson?.message || 'Notifikasi email berhasil dikirim.' };
  } catch (err: any) {
    console.warn('[NotificationService] Terjadi kesalahan koneksi ke Cloudflare Worker:', err?.message);
    return { success: false, message: err?.message };
  }
};
