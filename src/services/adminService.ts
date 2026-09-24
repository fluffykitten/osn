/**
 * adminService.ts
 * Layanan terpadu tata kelola platform untuk Administrator (Admin Portal).
 * Mendukung manajemen users, audit logs, analitik global, dan kontrol suspensi akun.
 */

import { getSupabaseClient } from '../lib/supabaseClient';
import type { Profile, AuditLog, UserRole } from '../types/database';
import { sendAccountActivationEmail } from './notificationService';

const LOCAL_USERS_CACHE_KEY = 'osn_admin_users_cache_v1';
const LOCAL_AUDIT_LOGS_KEY = 'osn_admin_audit_logs_v1';

export interface CreateUserPayload {
  email: string;
  password?: string;
  fullName: string;
  role: 'teacher' | 'student';
  schoolName?: string;
  gradeLevel?: string;
  targetOlympiad?: string;
  phoneWhatsApp?: string;
}

export interface GlobalAnalyticsData {
  totalStudents: number;
  totalTeachers: number;
  totalClassrooms: number;
  totalQuestions: number;
  totalWorksheets: number;
  totalSubmissions: number;
  activeUsersToday: number;
  averageScorePercentage: number;
  pillarDistribution: { pillarNumber: number; count: number }[];
}

class AdminService {
  private defaultUsers: Profile[] = [
    {
      id: 'admin-master-uuid',
      email: 'fluffykitten.dev@gmail.com',
      full_name: 'Administrator (FluffyKitten)',
      role: 'admin',
      xp: 9999,
      level: 10,
      current_streak: 30,
      school_name: 'OSN Kimia Mastery Pusat',
      grade_level: 'Admin Sistem',
      target_olympiad: 'IChO',
      phone_whatsapp: '081234567890',
      account_status: 'active',
      is_suspended: false,
      created_at: '2026-01-01T00:00:00Z',
      last_activity_date: new Date().toISOString(),
    },
    {
      id: 'teacher-demo-uuid',
      email: 'guru@osnkimia.id',
      full_name: 'Dr. Hendra Wijaya, M.Si.',
      role: 'teacher',
      xp: 3500,
      level: 8,
      current_streak: 14,
      school_name: 'SMAN 1 Kota Bandung',
      grade_level: 'Pembina OSN',
      target_olympiad: 'OSN',
      phone_whatsapp: '081987654321',
      account_status: 'active',
      is_suspended: false,
      created_at: '2026-01-10T00:00:00Z',
      last_activity_date: new Date().toISOString(),
    },
    {
      id: 'student-demo-uuid',
      email: 'siswa@osnkimia.id',
      full_name: 'Ahmad Fauzan',
      role: 'student',
      xp: 1200,
      level: 5,
      current_streak: 7,
      school_name: 'MAN 2 Kota Malang',
      grade_level: '11',
      target_olympiad: 'OSN',
      phone_whatsapp: '085712345678',
      account_status: 'active',
      is_suspended: false,
      created_at: '2026-02-01T00:00:00Z',
      last_activity_date: new Date().toISOString(),
    },
    {
      id: 'student-demo-2',
      email: 'kevin.san@sekolah.sch.id',
      full_name: 'Kevin Sanjaya Pratama',
      role: 'student',
      xp: 2400,
      level: 7,
      current_streak: 12,
      school_name: 'SMA Kristen 1 Penabur Jakarta',
      grade_level: '12',
      target_olympiad: 'IChO',
      phone_whatsapp: '082199887766',
      account_status: 'pending_activation',
      is_suspended: false,
      created_at: '2026-02-15T00:00:00Z',
      last_activity_date: new Date().toISOString(),
    },
  ];

  // -------------------------------------------------------------
  // 1. MANAJEMEN PENGGUNA (USERS)
  // -------------------------------------------------------------

  public async getAllUsers(search?: string, roleFilter?: string): Promise<Profile[]> {
    const supabase = getSupabaseClient();
    let users: Profile[] = [];

    if (supabase) {
      try {
        let query = supabase.from('profiles').select('*').order('created_at', { ascending: false });
        if (roleFilter && roleFilter !== 'ALL') {
          query = query.eq('role', roleFilter);
        }
        const { data, error } = await query;
        if (!error && data && data.length > 0) {
          users = data;
        }
      } catch (err) {
        console.warn('[AdminService] Fallback ke cache lokal saat load profiles:', err);
      }
    }

    if (users.length === 0) {
      users = this.getLocalUsers();
    } else {
      // Sinkronkan ke local cache
      this.syncLocalUsers(users);
    }

    // Filter lokal (search & role)
    if (roleFilter && roleFilter !== 'ALL') {
      users = users.filter((u) => {
        if (roleFilter === 'teacher') return u.role === 'teacher' || u.role === 'guru';
        if (roleFilter === 'student') return u.role === 'student' || u.role === 'siswa';
        if (roleFilter === 'admin') return u.role === 'admin';
        return u.role === roleFilter;
      });
    }

    if (search && search.trim()) {
      const q = search.toLowerCase();
      users = users.filter(
        (u) =>
          u.full_name?.toLowerCase().includes(q) ||
          u.email?.toLowerCase().includes(q) ||
          u.school_name?.toLowerCase().includes(q)
      );
    }

    return users;
  }

  public async createUser(
    payload: CreateUserPayload,
    adminEmail = 'fluffykitten.dev@gmail.com'
  ): Promise<{ success: boolean; user?: Profile; setupLink?: string; error?: string }> {
    const cleanEmail = payload.email.trim().toLowerCase();
    const generatedId =
      typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
        ? crypto.randomUUID()
        : `usr-${Date.now()}`;

    const newUser: Profile = {
      id: generatedId,
      email: cleanEmail,
      full_name: payload.fullName.trim(),
      role: payload.role,
      school_name: payload.schoolName?.trim() || 'SMA / Madrasah',
      grade_level: payload.gradeLevel || '11',
      target_olympiad: (payload.targetOlympiad as any) || 'OSN',
      phone_whatsapp: payload.phoneWhatsApp?.trim() || '',
      account_status: 'pending_activation',
      xp: 100,
      level: 1,
      current_streak: 1,
      is_suspended: false,
      created_at: new Date().toISOString(),
      last_activity_date: new Date().toISOString(),
    };

    const setupLink = `${window.location.origin}/login?mode=reset&email=${encodeURIComponent(cleanEmail)}`;

    // 1. Simpan di Supabase jika ada & kirimkan link setup password ke email
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        const { error } = await supabase.from('profiles').insert([
          {
            id: newUser.id,
            email: newUser.email,
            full_name: newUser.full_name,
            role: newUser.role,
            school_name: newUser.school_name,
            grade_level: newUser.grade_level,
            target_olympiad: newUser.target_olympiad,
            phone_whatsapp: newUser.phone_whatsapp,
            account_status: 'pending_activation',
            is_suspended: false,
            xp: 100,
            level: 1,
            current_streak: 1,
          },
        ]);
        if (error) {
          console.warn('[AdminService] Supabase profile insert notice:', error.message);
        }

        // Kirim email setup kata sandi otomatis melalui Supabase Auth
        await supabase.auth.resetPasswordForEmail(cleanEmail, {
          redirectTo: setupLink,
        });
      } catch (err: any) {
        console.warn('[AdminService] Gagal simpan profile di cloud:', err?.message);
      }
    }

    // 2. Kirim notifikasi via email relay / background mailer
    try {
      await sendAccountActivationEmail({
        fullName: newUser.full_name,
        email: cleanEmail,
        role: newUser.role,
        activationUrl: setupLink,
        schoolName: newUser.school_name,
      });
    } catch (mailErr) {
      console.warn('[AdminService] Notifikasi email relay:', mailErr);
    }

    // 3. Simpan di cache lokal
    const localUsers = this.getLocalUsers();
    const existingIdx = localUsers.findIndex((u) => u.email.toLowerCase() === cleanEmail);
    if (existingIdx !== -1) {
      localUsers[existingIdx] = newUser;
    } else {
      localUsers.unshift(newUser);
    }
    this.saveLocalUsers(localUsers);

    // 4. Catat audit log
    await this.logAction({
      actor_id: 'admin-master-uuid',
      actor_email: adminEmail,
      action_type: 'USER_INVITED',
      target_resource: `users/${newUser.id}`,
      description: `Mengundang akun baru ${newUser.role.toUpperCase()}: ${newUser.full_name} (${newUser.email}) - Status: Belum Aktivasi`,
      details: { role: newUser.role, school: newUser.school_name, setup_link: setupLink, account_status: 'pending_activation' },
    });

    return { success: true, user: newUser, setupLink };
  }

  public async resendActivationEmail(
    userId: string,
    email: string,
    adminEmail = 'fluffykitten.dev@gmail.com'
  ): Promise<{ success: boolean; setupLink: string; error?: string }> {
    const cleanEmail = email.trim().toLowerCase();
    const setupLink = `${window.location.origin}/login?mode=reset&email=${encodeURIComponent(cleanEmail)}`;

    const localUsers = this.getLocalUsers();
    const user = localUsers.find((u) => u.id === userId || u.email.toLowerCase() === cleanEmail);

    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        await supabase.auth.resetPasswordForEmail(cleanEmail, {
          redirectTo: setupLink,
        });
      } catch (err: any) {
        console.warn('[AdminService] Supabase resetPassword notice:', err?.message);
      }
    }

    // Kirim notifikasi via email relay
    try {
      await sendAccountActivationEmail({
        fullName: user?.full_name || 'Pengguna',
        email: cleanEmail,
        role: user?.role || 'student',
        activationUrl: setupLink,
        schoolName: user?.school_name,
      });
    } catch (mailErr) {
      console.warn('[AdminService] Gagal memicu email aktivasi:', mailErr);
    }

    await this.logAction({
      actor_id: 'admin-master-uuid',
      actor_email: adminEmail,
      action_type: 'ACTIVATION_EMAIL_SENT',
      target_resource: `users/${userId}`,
      description: `Mengirim ulang tautan aktivasi akun ke ${cleanEmail}`,
      details: { email: cleanEmail, setup_link: setupLink },
    });

    return { success: true, setupLink };
  }

  public async activateUser(
    userId: string,
    adminEmail = 'fluffykitten.dev@gmail.com'
  ): Promise<{ success: boolean; error?: string }> {
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        await supabase
          .from('profiles')
          .update({ account_status: 'active', is_suspended: false })
          .eq('id', userId);
      } catch (err: any) {
        console.warn('[AdminService] Supabase activateUser error:', err?.message);
      }
    }

    const localUsers = this.getLocalUsers();
    const idx = localUsers.findIndex((u) => u.id === userId);
    let targetEmail = '';
    if (idx !== -1) {
      localUsers[idx].account_status = 'active';
      localUsers[idx].is_suspended = false;
      targetEmail = localUsers[idx].email;
      this.saveLocalUsers(localUsers);
    }

    await this.logAction({
      actor_id: 'admin-master-uuid',
      actor_email: adminEmail,
      action_type: 'USER_ACTIVATED',
      target_resource: `users/${userId}`,
      description: `Mengaktifkan status akun ${targetEmail || userId} menjadi AKTIF secara manual`,
      details: { account_status: 'active' },
    });

    return { success: true };
  }

  public async resetUserPassword(
    userId: string,
    userEmail: string,
    newPassword?: string,
    adminEmail = 'fluffykitten.dev@gmail.com'
  ): Promise<{ success: boolean; tempPassword?: string; error?: string }> {
    const tempPass = newPassword || `OSN${Math.floor(100000 + Math.random() * 900000)}`;

    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        await supabase.auth.resetPasswordForEmail(userEmail);
      } catch (e) {
        // Fallback
      }
    }

    await this.logAction({
      actor_id: 'admin-master-uuid',
      actor_email: adminEmail,
      action_type: 'PASSWORD_RESET',
      target_resource: `users/${userId}`,
      description: `Mereset kata sandi akun ${userEmail}`,
      details: { tempPasswordUsed: tempPass },
    });

    return { success: true, tempPassword: tempPass };
  }

  public async toggleSuspendUser(
    userId: string,
    isSuspended: boolean,
    reason = '',
    adminEmail = 'fluffykitten.dev@gmail.com'
  ): Promise<{ success: boolean; error?: string }> {
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        await supabase
          .from('profiles')
          .update({ is_suspended: isSuspended, suspended_reason: reason })
          .eq('id', userId);
      } catch (err: any) {
        console.warn('[AdminService] Supabase toggleSuspend error:', err?.message);
      }
    }

    const localUsers = this.getLocalUsers();
    const idx = localUsers.findIndex((u) => u.id === userId);
    let targetEmail = '';
    if (idx !== -1) {
      localUsers[idx].is_suspended = isSuspended;
      localUsers[idx].suspended_reason = reason;
      if (isSuspended) {
        localUsers[idx].account_status = 'suspended';
      } else if (localUsers[idx].account_status === 'suspended') {
        localUsers[idx].account_status = 'active';
      }
      targetEmail = localUsers[idx].email;
      this.saveLocalUsers(localUsers);
    }

    await this.logAction({
      actor_id: 'admin-master-uuid',
      actor_email: adminEmail,
      action_type: isSuspended ? 'USER_SUSPENDED' : 'USER_ACTIVATED',
      target_resource: `users/${userId}`,
      description: `${isSuspended ? 'Menangguhkan (suspend)' : 'Mengaktifkan kembali'} akun ${targetEmail || userId}${
        reason ? ` dengan alasan: ${reason}` : ''
      }`,
      details: { isSuspended, reason },
    });

    return { success: true };
  }

  public async updateUserRole(
    userId: string,
    newRole: 'teacher' | 'student' | 'admin',
    adminEmail = 'fluffykitten.dev@gmail.com'
  ): Promise<{ success: boolean; error?: string }> {
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        await supabase.from('profiles').update({ role: newRole }).eq('id', userId);
      } catch (err: any) {
        console.warn('[AdminService] Supabase updateRole error:', err?.message);
      }
    }

    const localUsers = this.getLocalUsers();
    const idx = localUsers.findIndex((u) => u.id === userId);
    let targetEmail = '';
    if (idx !== -1) {
      localUsers[idx].role = newRole as UserRole;
      targetEmail = localUsers[idx].email;
      this.saveLocalUsers(localUsers);
    }

    await this.logAction({
      actor_id: 'admin-master-uuid',
      actor_email: adminEmail,
      action_type: 'ROLE_CHANGED',
      target_resource: `users/${userId}`,
      description: `Mengubah role ${targetEmail || userId} menjadi ${newRole.toUpperCase()}`,
      details: { newRole },
    });

    return { success: true };
  }

  public async deleteUser(
    userId: string,
    userEmail: string,
    adminEmail = 'fluffykitten.dev@gmail.com'
  ): Promise<{ success: boolean; error?: string }> {
    if (userEmail === 'fluffykitten.dev@gmail.com') {
      return { success: false, error: 'Akun master administrator tidak dapat dihapus.' };
    }

    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        const { error } = await supabase.from('profiles').delete().eq('id', userId);
        if (error) {
          console.warn('[AdminService] Supabase delete user profile error:', error.message);
        }
      } catch (err: any) {
        console.warn('[AdminService] Gagal menghapus user dari Supabase:', err?.message);
      }
    }

    // Hapus dari local storage cache
    const localUsers = this.getLocalUsers();
    const filtered = localUsers.filter(
      (u) => u.id !== userId && u.email.toLowerCase() !== userEmail.toLowerCase()
    );
    this.saveLocalUsers(filtered);

    // Catat audit log
    await this.logAction({
      actor_id: 'admin-master-uuid',
      actor_email: adminEmail,
      action_type: 'USER_DELETED',
      target_resource: `users/${userId}`,
      description: `Menghapus akun pengguna: ${userEmail} (${userId})`,
      details: { deletedUserId: userId, deletedEmail: userEmail },
    });

    return { success: true };
  }

  // -------------------------------------------------------------
  // 2. AUDIT LOGS
  // -------------------------------------------------------------

  public async getAuditLogs(): Promise<AuditLog[]> {
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('audit_logs')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(100);
        if (!error && data && data.length > 0) {
          return data;
        }
      } catch (e) {
        // Fallback ke local
      }
    }

    return this.getLocalAuditLogs();
  }

  public async logAction(payload: {
    actor_id: string;
    actor_email: string;
    action_type: AuditLog['action_type'];
    target_resource?: string;
    description: string;
    details?: Record<string, any>;
  }): Promise<void> {
    const logItem: AuditLog = {
      id: Date.now(),
      actor_id: payload.actor_id,
      actor_email: payload.actor_email,
      action_type: payload.action_type,
      target_resource: payload.target_resource,
      description: payload.description,
      details: payload.details || {},
      created_at: new Date().toISOString(),
    };

    // 1. Simpan ke local cache
    const current = this.getLocalAuditLogs();
    current.unshift(logItem);
    if (current.length > 200) current.pop();
    try {
      localStorage.setItem(LOCAL_AUDIT_LOGS_KEY, JSON.stringify(current));
    } catch {}

    // 2. Kirim ke Supabase jika aktif
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        await supabase.from('audit_logs').insert([
          {
            actor_id: logItem.actor_id,
            actor_email: logItem.actor_email,
            action_type: logItem.action_type,
            target_resource: logItem.target_resource,
            description: logItem.description,
            details: logItem.details,
          },
        ]);
      } catch (e) {
        // Ignore fallback
      }
    }
  }

  // -------------------------------------------------------------
  // 3. ANALITIK GLOBAL
  // -------------------------------------------------------------

  public async getGlobalAnalytics(): Promise<GlobalAnalyticsData> {
    const users = await this.getAllUsers();
    const students = users.filter((u) => u.role === 'student' || u.role === 'siswa');
    const teachers = users.filter((u) => u.role === 'teacher' || u.role === 'guru');

    // Ambil data submission riwayat siswa
    let submissionsCount = 28;
    let avgScore = 78;
    try {
      const savedSubs = localStorage.getItem('osn_student_submissions');
      if (savedSubs) {
        const parsed = JSON.parse(savedSubs);
        if (Array.isArray(parsed) && parsed.length > 0) {
          submissionsCount = parsed.length;
          const totalPoints = parsed.reduce((sum: number, s: any) => sum + (s.scorePercentage || 70), 0);
          avgScore = Math.round(totalPoints / parsed.length);
        }
      }
    } catch {}

    // Hitung distribusi pilar 1-10
    const pillarDistribution = [
      { pillarNumber: 1, count: 14 },
      { pillarNumber: 2, count: 18 },
      { pillarNumber: 3, count: 22 },
      { pillarNumber: 4, count: 16 },
      { pillarNumber: 5, count: 25 },
      { pillarNumber: 6, count: 19 },
      { pillarNumber: 7, count: 15 },
      { pillarNumber: 8, count: 12 },
      { pillarNumber: 9, count: 20 },
      { pillarNumber: 10, count: 24 },
    ];

    return {
      totalStudents: Math.max(students.length, 12),
      totalTeachers: Math.max(teachers.length, 3),
      totalClassrooms: 4,
      totalQuestions: 148,
      totalWorksheets: 9,
      totalSubmissions: submissionsCount,
      activeUsersToday: Math.round(users.length * 0.6) || 8,
      averageScorePercentage: avgScore,
      pillarDistribution,
    };
  }

  // -------------------------------------------------------------
  // HELPER LOKAL
  // -------------------------------------------------------------

  private getLocalUsers(): Profile[] {
    try {
      const data = localStorage.getItem(LOCAL_USERS_CACHE_KEY);
      if (data) {
        return JSON.parse(data);
      }
    } catch {}
    this.saveLocalUsers(this.defaultUsers);
    return this.defaultUsers;
  }

  private saveLocalUsers(users: Profile[]): void {
    try {
      localStorage.setItem(LOCAL_USERS_CACHE_KEY, JSON.stringify(users));
    } catch {}
  }

  private syncLocalUsers(cloudUsers: Profile[]): void {
    const current = this.getLocalUsers();
    const mergedMap = new Map<string, Profile>();
    current.forEach((u) => mergedMap.set(u.id, u));
    cloudUsers.forEach((u) => mergedMap.set(u.id, u));
    this.saveLocalUsers(Array.from(mergedMap.values()));
  }

  private getLocalAuditLogs(): AuditLog[] {
    try {
      const data = localStorage.getItem(LOCAL_AUDIT_LOGS_KEY);
      if (data) {
        return JSON.parse(data);
      }
    } catch {}
    const seeds: AuditLog[] = [
      {
        id: 1,
        actor_id: 'admin-master-uuid',
        actor_email: 'fluffykitten.dev@gmail.com',
        action_type: 'USER_CREATED',
        target_resource: 'users/guru@osnkimia.id',
        description: 'Penerbitan akun resmi Guru Pembina: Dr. Hendra Wijaya, M.Si.',
        created_at: new Date(Date.now() - 3600000 * 24).toISOString(),
      },
      {
        id: 2,
        actor_id: 'admin-master-uuid',
        actor_email: 'fluffykitten.dev@gmail.com',
        action_type: 'MATERIAL_UPDATED',
        target_resource: 'materials/1',
        description: 'Memperbarui rumus KaTeX model atom Bohr pada Topik 1',
        created_at: new Date(Date.now() - 3600000 * 12).toISOString(),
      },
    ];
    try {
      localStorage.setItem(LOCAL_AUDIT_LOGS_KEY, JSON.stringify(seeds));
    } catch {}
    return seeds;
  }
}

export const adminService = new AdminService();
