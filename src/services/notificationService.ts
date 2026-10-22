/**
 * notificationService.ts
 * Layanan pengiriman notifikasi email pendaftaran, aktivasi akun, dan kelas binaan
 * menggunakan Cloudflare Workers + Resend (pengirim resmi: Axioma Academy <axioma@dfw.my.id>).
 */

export interface StudentNotificationPayload {
  userId?: string;
  fullName: string;
  email: string;
  role?: 'student' | 'teacher' | string;
  schoolName?: string;
  gradeLevel?: string;
  targetOlympiad?: string;
  teachingSubject?: string;
  initialClassCode?: string;
  phoneWhatsApp?: string;
  membershipTier?: string;
  registeredAt?: string;
}

const CLOUDFLARE_MAILER_URL =
  import.meta.env.VITE_CLOUDFLARE_MAILER_URL ||
  (import.meta.env as any).VITE_CLOUDFLARE_MAILER ||
  'https://osn.icmadani.workers.dev/';

function getNotifyEndpoint(): string {
  if (typeof window !== 'undefined' && !import.meta.env.VITE_CLOUDFLARE_MAILER_URL) {
    // Jika aplikasi dijalankan langsung di domain Worker/custom domain produksi, gunakan origin saat ini
    if (
      window.location.hostname !== 'localhost' &&
      window.location.hostname !== '127.0.0.1'
    ) {
      return `${window.location.origin}/notify`;
    }
  }
  return `${CLOUDFLARE_MAILER_URL.replace(/\/$/, '')}/notify`;
}

export const sendStudentRegistrationNotification = async (
  data: StudentNotificationPayload
): Promise<{ success: boolean; message?: string }> => {
  try {
    const payload = {
      action: 'student_registered',
      student: {
        ...data,
        registeredAt: data.registeredAt || new Date().toISOString(),
      },
      appUrl: typeof window !== 'undefined' ? window.location.origin : 'https://osn.icmadani.workers.dev',
      adminEmail: 'fluffykitten.dev@gmail.com',
    };

    const response = await fetch(getNotifyEndpoint(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.warn('[NotificationService] Gagal mengirim notifikasi pendaftaran via Worker:', errText);
      return { success: false, message: errText };
    }

    const resJson = await response.json();
    return { success: true, message: resJson?.message || 'Notifikasi email pendaftaran berhasil dikirim.' };
  } catch (err: any) {
    console.warn('[NotificationService] Terjadi kesalahan koneksi ke Cloudflare Worker:', err?.message);
    return { success: false, message: err?.message };
  }
};

export interface ActivationEmailPayload {
  fullName: string;
  email: string;
  role: 'student' | 'teacher' | 'admin' | string;
  activationUrl: string;
  schoolName?: string;
}

export const sendAccountActivationEmail = async (
  data: ActivationEmailPayload
): Promise<{ success: boolean; message?: string }> => {
  try {
    const payload = {
      action: 'account_activation',
      recipient: {
        ...data,
        invitedAt: new Date().toISOString(),
      },
      appUrl: typeof window !== 'undefined' ? window.location.origin : 'https://osn.icmadani.workers.dev',
      adminEmail: 'fluffykitten.dev@gmail.com',
    };

    const response = await fetch(getNotifyEndpoint(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.warn('[NotificationService] Gagal mengirim email aktivasi via Worker:', errText);
      return { success: false, message: errText };
    }

    const resJson = await response.json();
    return { success: true, message: resJson?.message || 'Email aktivasi berhasil dikirim ke pengguna.' };
  } catch (err: any) {
    console.warn('[NotificationService] Terjadi kesalahan koneksi ke email relay:', err?.message);
    return { success: false, message: err?.message };
  }
};

export interface ClassroomEmailPayload {
  type: 'invitation' | 'approved';
  studentName: string;
  studentEmail: string;
  classroomName: string;
  classroomCode: string;
  teacherName?: string;
  subjectName?: string;
}

export const sendClassroomNotificationEmail = async (
  data: ClassroomEmailPayload
): Promise<{ success: boolean; message?: string }> => {
  try {
    const origin =
      typeof window !== 'undefined' ? window.location.origin : 'https://osn.icmadani.workers.dev';
    const payload = {
      action: data.type === 'invitation' ? 'classroom_invitation' : 'classroom_approved',
      classroom: {
        ...data,
        classroomUrl: `${origin}/dashboard`,
        sentAt: new Date().toISOString(),
      },
      appUrl: origin,
    };

    const response = await fetch(getNotifyEndpoint(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.warn('[NotificationService] Gagal mengirim email kelas binaan via Worker:', errText);
      return { success: false, message: errText };
    }

    const resJson = await response.json();
    return {
      success: true,
      message: resJson?.message || 'Email notifikasi kelas binaan berhasil dikirim.',
    };
  } catch (err: any) {
    console.warn('[NotificationService] Terjadi kesalahan koneksi saat mengirim email kelas:', err?.message);
    return { success: false, message: err?.message };
  }
};
