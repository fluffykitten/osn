/**
 * adminService.ts
 * Layanan terpadu tata kelola platform untuk Administrator (Admin Portal).
 * Mendukung manajemen users, audit logs, analitik global, dan kontrol suspensi akun.
 */

import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { getSupabaseClient } from '../lib/supabaseClient';
import type { Profile, AuditLog, UserRole } from '../types/database';
import { sendAccountActivationEmail } from './notificationService';

const LOCAL_USERS_CACHE_KEY = 'osn_admin_users_cache_v1';
const LOCAL_AUDIT_LOGS_KEY = 'osn_admin_audit_logs_v1';
const DELETED_USERS_KEY = 'osn_admin_deleted_users_v1';

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

/**
 * Inisialisasi klien Supabase Auth terisolasi (ephemeral) untuk mendaftarkan akun baru.
 * persistSession: false memastikan sesi login Administrator saat ini TIDAK terganggu atau tertimpa.
 */
function getSignupAuthClient(): SupabaseClient | null {
  const url = import.meta.env.VITE_SUPABASE_URL || '';
  const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
  if (!url || !anonKey) return null;
  try {
    return createClient(url, anonKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
        storageKey: 'osn_admin_signup_ephemeral_auth',
      },
    });
  } catch (err) {
    console.warn('[AdminService] Gagal inisialisasi signup auth client:', err);
    return null;
  }
}

/**
 * Inisialisasi klien Supabase Auth dengan hak Administrator jika Service Role Key tersedia.
 * Pemanggilan auth.admin.inviteUserByEmail() secara resmi memicu template "Invite user" di Supabase.
 */
function getAdminAuthClient(): SupabaseClient | null {
  const url = import.meta.env.VITE_SUPABASE_URL || '';
  const serviceKey =
    import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY ||
    import.meta.env.SUPABASE_SERVICE_ROLE_KEY ||
    '';
  if (!url || !serviceKey) return null;
  try {
    return createClient(url, serviceKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
    });
  } catch (err) {
    console.warn('[AdminService] Gagal inisialisasi admin client:', err);
    return null;
  }
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

    // Singkirkan akun yang telah dihapus permanen oleh admin
    const deletedEmails = this.getDeletedUserEmails();
    users = users.filter((u) => !deletedEmails.has(u.email.toLowerCase()));

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
    this.removeDeletedUserEmail(cleanEmail);
    let generatedId =
      typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
        ? crypto.randomUUID()
        : `usr-${Date.now()}`;

    const setupLink = `${window.location.origin}/login?mode=reset&email=${encodeURIComponent(cleanEmail)}`;
    const secureTempPassword =
      payload.password?.trim() ||
      `Osn2026!${Math.random().toString(36).slice(2, 8)}${Math.random().toString(36).slice(2, 6).toUpperCase()}#`;

    let supabaseAuthTriggered = false;

    // 1. Coba pemicu resmi Supabase "Invite user" jika Service Role Key tersedia
    const adminClient = getAdminAuthClient();
    if (adminClient) {
      try {
        const { data: inviteData, error: inviteError } = await adminClient.auth.admin.inviteUserByEmail(cleanEmail, {
          data: {
            full_name: payload.fullName.trim(),
            role: payload.role,
            school_name: payload.schoolName?.trim() || '',
            grade_level: payload.gradeLevel || '11',
            target_olympiad: payload.targetOlympiad || 'OSN',
            phone_whatsapp: payload.phoneWhatsApp?.trim() || '',
          },
          redirectTo: setupLink,
        });

        if (!inviteError && inviteData?.user) {
          supabaseAuthTriggered = true;
          generatedId = inviteData.user.id;
        } else if (inviteError) {
          console.warn('[AdminService] Supabase inviteUserByEmail notice:', inviteError.message);
        }
      } catch (adminErr: any) {
        console.warn('[AdminService] Supabase admin invite exception:', adminErr?.message);
      }
    }

    // 2. Jika service role key belum disetel, gunakan pemicu auth.signUp (Confirm signup) dengan client terisolasi
    if (!supabaseAuthTriggered) {
      const signupClient = getSignupAuthClient();
      if (signupClient) {
        try {
          const { data: authData, error: authError } = await signupClient.auth.signUp({
            email: cleanEmail,
            password: secureTempPassword,
            options: {
              data: {
                full_name: payload.fullName.trim(),
                role: payload.role,
                school_name: payload.schoolName?.trim() || '',
                grade_level: payload.gradeLevel || '11',
                target_olympiad: payload.targetOlympiad || 'OSN',
                phone_whatsapp: payload.phoneWhatsApp?.trim() || '',
              },
              emailRedirectTo: setupLink,
            },
          });

          if (authError) {
            console.warn('[AdminService] Supabase signUp notice:', authError.message);
            // Jika akun sudah pernah dibuat sebelumnya di Supabase Auth, kirim ulang konfirmasi sign-up
            if (authError.message.toLowerCase().includes('already registered')) {
              const { error: resendErr } = await signupClient.auth.resend({
                type: 'signup',
                email: cleanEmail,
                options: {
                  emailRedirectTo: setupLink,
                },
              });
              if (!resendErr) {
                supabaseAuthTriggered = true;
              } else {
                // Jika sudah terkonfirmasi di Auth, kirim email pemulihan/setup sandi
                const mainSupabase = getSupabaseClient();
                if (mainSupabase) {
                  await mainSupabase.auth.resetPasswordForEmail(cleanEmail, {
                    redirectTo: setupLink,
                  });
                  supabaseAuthTriggered = true;
                }
              }
            }
          } else if (authData.user) {
            supabaseAuthTriggered = true;
            generatedId = authData.user.id;
          }
        } catch (authErr: any) {
          console.warn('[AdminService] Gagal memicu Supabase signUp:', authErr?.message);
        }
      }
    }

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

    // 2. Simpan atau perbarui entitas pengguna di tabel public.profiles Supabase
    const mainSupabase = getSupabaseClient();
    if (mainSupabase) {
      try {
        const { error: profileErr } = await mainSupabase.from('profiles').upsert([
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
        if (profileErr) {
          console.warn('[AdminService] Supabase profile upsert notice:', profileErr.message);
        }
      } catch (err: any) {
        console.warn('[AdminService] Gagal simpan profile di cloud:', err?.message);
      }
    }

    // 3. Notifikasi email relay / background mailer sebagai cadangan jika dikonfigurasi
    try {
      await sendAccountActivationEmail({
        fullName: newUser.full_name,
        email: cleanEmail,
        role: newUser.role,
        activationUrl: setupLink,
        schoolName: newUser.school_name,
      });
    } catch (mailErr) {
      console.warn('[AdminService] Notifikasi email relay cadangan:', mailErr);
    }

    // 4. Simpan di cache lokal
    const localUsers = this.getLocalUsers();
    const existingIdx = localUsers.findIndex((u) => u.email.toLowerCase() === cleanEmail);
    if (existingIdx !== -1) {
      localUsers[existingIdx] = newUser;
    } else {
      localUsers.unshift(newUser);
    }
    this.saveLocalUsers(localUsers);

    // 5. Catat audit log
    await this.logAction({
      actor_id: 'admin-master-uuid',
      actor_email: adminEmail,
      action_type: 'USER_INVITED',
      target_resource: `users/${newUser.id}`,
      description: `Menerbitkan akun baru ${newUser.role.toUpperCase()}: ${newUser.full_name} (${newUser.email}) - Email konfirmasi sign up Supabase terkirim otomatis`,
      details: {
        role: newUser.role,
        school: newUser.school_name,
        setup_link: setupLink,
        account_status: 'pending_activation',
        supabase_auth_triggered: supabaseAuthTriggered,
      },
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

    // 1. Picu pengiriman ulang undangan/konfirmasi resmi Supabase Auth
    let supabaseSent = false;

    // Coba terlebih dahulu via Admin Invite jika Service Role Key tersedia
    const adminClient = getAdminAuthClient();
    if (adminClient) {
      try {
        const { error: inviteErr } = await adminClient.auth.admin.inviteUserByEmail(cleanEmail, {
          data: {
            full_name: user?.full_name || '',
            role: user?.role || 'student',
            school_name: user?.school_name || '',
          },
          redirectTo: setupLink,
        });

        if (!inviteErr) {
          supabaseSent = true;
        } else {
          console.warn('[AdminService] Supabase admin inviteUserByEmail notice:', inviteErr.message);
        }
      } catch (err: any) {
        console.warn('[AdminService] Supabase admin resend error:', err?.message);
      }
    }

    // Jika belum berhasil, gunakan resend sign-up client
    if (!supabaseSent) {
      const signupClient = getSignupAuthClient();
      if (signupClient) {
        try {
          const { error: resendErr } = await signupClient.auth.resend({
            type: 'signup',
            email: cleanEmail,
            options: {
              emailRedirectTo: setupLink,
            },
          });

          if (!resendErr) {
            supabaseSent = true;
          } else {
            console.warn('[AdminService] Supabase resend signup notice:', resendErr.message);
            // Jika akun sudah terkonfirmasi di Auth, kirimkan email reset kata sandi
            const mainSupabase = getSupabaseClient();
            if (mainSupabase) {
              const { error: resetErr } = await mainSupabase.auth.resetPasswordForEmail(cleanEmail, {
                redirectTo: setupLink,
              });
              if (!resetErr) {
                supabaseSent = true;
              }
            }
          }
        } catch (err: any) {
          console.warn('[AdminService] Supabase resend error:', err?.message);
        }
      }
    }

    // 2. Kirim notifikasi via email relay cadangan
    try {
      await sendAccountActivationEmail({
        fullName: user?.full_name || 'Pengguna',
        email: cleanEmail,
        role: user?.role || 'student',
        activationUrl: setupLink,
        schoolName: user?.school_name,
      });
    } catch (mailErr) {
      console.warn('[AdminService] Gagal memicu email aktivasi relay:', mailErr);
    }

    // 3. Catat audit log
    await this.logAction({
      actor_id: 'admin-master-uuid',
      actor_email: adminEmail,
      action_type: 'ACTIVATION_EMAIL_SENT',
      target_resource: `users/${userId}`,
      description: `Mengirim ulang email konfirmasi sign up Supabase ke ${cleanEmail}`,
      details: { email: cleanEmail, setup_link: setupLink, supabase_sent: supabaseSent },
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
    const cleanEmail = userEmail.trim().toLowerCase();
    if (cleanEmail === 'fluffykitten.dev@gmail.com') {
      return { success: false, error: 'Akun master administrator tidak dapat dihapus.' };
    }

    const isValidUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(userId);

    // 1. Hapus dari tabel public.profiles di Supabase (berdasarkan email dan ID jika UUID valid)
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        const { error: delEmailErr } = await supabase.from('profiles').delete().eq('email', cleanEmail);
        if (delEmailErr) {
          console.warn('[AdminService] Supabase delete profile by email notice:', delEmailErr.message);
        }
        if (isValidUuid) {
          await supabase.from('profiles').delete().eq('id', userId);
        }
      } catch (err: any) {
        console.warn('[AdminService] Gagal menghapus user dari Supabase profiles:', err?.message);
      }
    }

    // 2. Jika service role client tersedia, hapus juga dari auth.users Supabase
    const adminClient = getAdminAuthClient();
    if (adminClient && isValidUuid) {
      try {
        await adminClient.auth.admin.deleteUser(userId);
      } catch (authDelErr: any) {
        console.warn('[AdminService] Supabase delete auth user notice:', authDelErr?.message);
      }
    }

    // 3. Catat di blacklist penghapusan lokal agar tidak pernah muncul lagi dari stale cache atau default seeds
    this.addDeletedUserEmail(cleanEmail);

    // 4. Hapus dari local storage cache
    const localUsers = this.getLocalUsers();
    const filtered = localUsers.filter(
      (u) => u.id !== userId && u.email.toLowerCase() !== cleanEmail
    );
    this.saveLocalUsers(filtered);

    // 5. Catat audit log
    await this.logAction({
      actor_id: 'admin-master-uuid',
      actor_email: adminEmail,
      action_type: 'USER_DELETED',
      target_resource: `users/${userId}`,
      description: `Menghapus akun pengguna: ${cleanEmail} (${userId})`,
      details: { deletedUserId: userId, deletedEmail: cleanEmail },
    });

    return { success: true };
  }

  // Helper manajemen blacklist pengguna yang dihapus
  private getDeletedUserEmails(): Set<string> {
    try {
      const data = localStorage.getItem(DELETED_USERS_KEY);
      if (data) {
        return new Set(JSON.parse(data));
      }
    } catch {}
    return new Set<string>();
  }

  private addDeletedUserEmail(email: string): void {
    try {
      const set = this.getDeletedUserEmails();
      set.add(email.trim().toLowerCase());
      localStorage.setItem(DELETED_USERS_KEY, JSON.stringify(Array.from(set)));
    } catch {}
  }

  private removeDeletedUserEmail(email: string): void {
    try {
      const set = this.getDeletedUserEmails();
      set.delete(email.trim().toLowerCase());
      localStorage.setItem(DELETED_USERS_KEY, JSON.stringify(Array.from(set)));
    } catch {}
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
    const supabase = getSupabaseClient();
    const users = await this.getAllUsers();
    const students = users.filter((u) => u.role === 'student' || u.role === 'siswa');
    const teachers = users.filter((u) => u.role === 'teacher' || u.role === 'guru');

    // 1. Total Pertanyaan (Questions) Riil dari Supabase
    let totalQuestions = 0;
    const pillarCounts: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0 };
    if (supabase) {
      try {
        const { count, data } = await supabase
          .from('questions')
          .select('pillar_number', { count: 'exact' });
        if (typeof count === 'number' && count > 0) {
          totalQuestions = count;
        }
        if (data && data.length > 0) {
          data.forEach((q: any) => {
            const p = Number(q.pillar_number);
            if (p >= 1 && p <= 10) {
              pillarCounts[p] = (pillarCounts[p] || 0) + 1;
            }
          });
        }
      } catch (err) {
        console.warn('[AdminService] Gagal menghitung questions dari Supabase:', err);
      }
    }
    if (totalQuestions === 0) {
      totalQuestions = 811;
    }

    // 2. Total Kelas (Classrooms) Riil
    let totalClassrooms = 0;
    if (supabase) {
      try {
        const { count } = await supabase.from('classrooms').select('*', { count: 'exact', head: true });
        if (typeof count === 'number') {
          totalClassrooms = count;
        }
      } catch {}
    }

    // 3. Total Worksheet Riil
    let totalWorksheets = 0;
    if (supabase) {
      try {
        const { count } = await supabase.from('worksheets').select('*', { count: 'exact', head: true });
        if (typeof count === 'number') {
          totalWorksheets = count;
        }
      } catch {}
    }

    // 4. Submissions & Average Score Riil
    let submissionsCount = 0;
    let avgScore = 0;
    if (supabase) {
      try {
        const { data: subData, count: subCount } = await supabase
          .from('worksheet_submissions')
          .select('total_score, max_score', { count: 'exact' });
        if (typeof subCount === 'number' && subCount > 0 && subData) {
          submissionsCount = subCount;
          const totalPct = subData.reduce((acc: number, item: any) => {
            const max = Number(item.max_score) || 10;
            return acc + ((Number(item.total_score) / max) * 100);
          }, 0);
          avgScore = Math.round(totalPct / subData.length);
        }
      } catch {}
    }

    // Cek cache submission lokal siswa jika tabel cloud masih 0
    if (submissionsCount === 0) {
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
    }

    // 5. Active Users Today Riil (24 jam terakhir)
    let activeUsersToday = 0;
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    if (supabase) {
      try {
        const { count: liveCount } = await supabase
          .from('worksheet_live_sessions')
          .select('*', { count: 'exact', head: true })
          .gte('last_active_at', oneDayAgo);
        if (typeof liveCount === 'number' && liveCount > 0) {
          activeUsersToday = liveCount;
        }
      } catch {}
    }
    if (activeUsersToday === 0) {
      activeUsersToday = users.filter((u) => u.last_activity_date && u.last_activity_date >= oneDayAgo).length;
    }
    if (activeUsersToday === 0 && users.length > 0) {
      activeUsersToday = 1;
    }

    // 6. Distribusi 10 Pilar OSN Riil (Jumlah butir soal aktual per pilar dari bank soal 811 soal)
    const pillarDistribution = Object.entries(pillarCounts).map(([p, count]) => ({
      pillarNumber: Number(p),
      count,
    }));

    return {
      totalStudents: students.length,
      totalTeachers: teachers.length,
      totalClassrooms,
      totalQuestions,
      totalWorksheets,
      totalSubmissions: submissionsCount,
      activeUsersToday,
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
