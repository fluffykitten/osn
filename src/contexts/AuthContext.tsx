import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { User, Session } from '@supabase/supabase-js';
import { getSupabaseClient, isSupabaseConfigured } from '../lib/supabaseClient';
import type { Profile, UserRole } from '../types/database';
import { getLocalGamificationState, saveLocalGamificationState } from '../lib/gamification';
import { sendStudentRegistrationNotification } from '../services/notificationService';

export interface StudentRegistrationDetails {
  schoolName?: string;
  gradeLevel?: string;
  targetOlympiad?: 'OSK' | 'OSP' | 'OSN' | 'IChO' | string;
  phoneWhatsApp?: string;
}

interface AuthContextType {
  user: User | null;
  session: Session | null;
  profile: Profile | null;
  role: 'teacher' | 'student';
  isTeacher: boolean;
  isAdmin: boolean;
  loading: boolean;
  isCloudConnected: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (
    email: string,
    password: string,
    fullName: string,
    role?: 'teacher' | 'student',
    studentDetails?: StudentRegistrationDetails
  ) => Promise<{ success: boolean; error?: string; requireConfirmation?: boolean }>;
  resetPassword: (email: string) => Promise<{ success: boolean; error?: string; message?: string }>;
  updatePassword: (newPassword: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  refreshProfile: () => Promise<void>;
  loginDemo: (type: 'teacher' | 'student' | 'admin') => Promise<{ success: boolean; error?: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const LOCAL_FALLBACK_USER_KEY = 'osn_local_auth_user';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const localUser = localStorage.getItem(LOCAL_FALLBACK_USER_KEY);
      if (localUser) {
        const parsed = JSON.parse(localUser);
        return parsed.user || null;
      }
    } catch {}
    return null;
  });
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(() => {
    try {
      const localUser = localStorage.getItem(LOCAL_FALLBACK_USER_KEY);
      if (localUser) {
        const parsed = JSON.parse(localUser);
        return parsed.profile || null;
      }
    } catch {}
    return null;
  });
  const [loading, setLoading] = useState<boolean>(true);
  const isCloudConnected = isSupabaseConfigured();

  const restoreLocalSession = useCallback((): boolean => {
    try {
      const localUser = localStorage.getItem(LOCAL_FALLBACK_USER_KEY);
      if (localUser) {
        const parsed = JSON.parse(localUser);
        if (parsed.user) {
          setUser(parsed.user);
          setProfile(parsed.profile || null);
          const role = parsed.profile?.role === 'teacher' || parsed.profile?.role === 'guru' ? 'teacher' : 'student';
          syncGamificationRole(role);
          return true;
        }
      }
    } catch (err) {
      console.warn('Gagal memulihkan sesi lokal:', err);
    }
    return false;
  }, []);

  const syncGamificationRole = (role: 'teacher' | 'student') => {
    const legacy = getLocalGamificationState();
    saveLocalGamificationState({
      ...legacy,
      role: role === 'teacher' ? 'guru' : 'siswa',
    });
  };

  const fetchProfile = useCallback(async (userId: string, userEmail?: string): Promise<Profile | null> => {
    const supabase = getSupabaseClient();
    if (!supabase) return null;

    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle();

      if (data && !error) {
        return data as Profile;
      }

      // Jika belum ada di tabel profiles, buat default profile
      if (userEmail) {
        const defaultRole: UserRole = userEmail.toLowerCase().includes('guru') ? 'teacher' : 'student';
        const defaultName = userEmail.split('@')[0];
        const newProfile: Partial<Profile> = {
          id: userId,
          email: userEmail,
          full_name: defaultName,
          role: defaultRole,
          xp: 350,
          level: 2,
          current_streak: 3,
          last_activity_date: new Date().toISOString(),
        };

        const { data: inserted, error: insertErr } = await supabase
          .from('profiles')
          .insert([newProfile])
          .select()
          .maybeSingle();

        if (inserted && !insertErr) {
          return inserted as Profile;
        }
      }
    } catch (err) {
      console.warn('[AuthContext] Error fetching profile:', err);
    }
    return null;
  }, []);

  useEffect(() => {
    let mounted = true;
    const supabase = getSupabaseClient();

    if (!supabase) {
      // Fallback local auth jika Supabase belum dikonfigurasi
      restoreLocalSession();
      setLoading(false);
      return;
    }

    // Inisialisasi sesi aktif dari Supabase
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!mounted) return;
      setSession(session);
      if (session?.user) {
        localStorage.removeItem(LOCAL_FALLBACK_USER_KEY);
        setUser(session.user);
        fetchProfile(session.user.id, session.user.email).then((prof) => {
          if (!mounted) return;
          if (prof) {
            setProfile(prof);
            const role = prof.role === 'teacher' || prof.role === 'guru' ? 'teacher' : 'student';
            syncGamificationRole(role);
          }
          setLoading(false);
        });
      } else {
        // Jika tidak ada sesi Supabase Cloud aktif, pertahankan/pulihkan sesi lokal (demo/admin/bypass)
        const hasLocal = restoreLocalSession();
        if (!hasLocal) {
          setUser(null);
          setProfile(null);
        }
        setLoading(false);
      }
    }).catch(() => {
      if (!mounted) return;
      const hasLocal = restoreLocalSession();
      if (!hasLocal) {
        setUser(null);
        setProfile(null);
      }
      setLoading(false);
    });

    // Dengarkan perubahan auth state
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, newSession) => {
      if (!mounted) return;
      if (event === 'PASSWORD_RECOVERY') {
        sessionStorage.setItem('osn_is_password_recovery', 'true');
      }
      setSession(newSession);
      if (newSession?.user) {
        localStorage.removeItem(LOCAL_FALLBACK_USER_KEY);
        setUser(newSession.user);
        const prof = await fetchProfile(newSession.user.id, newSession.user.email);
        if (mounted && prof) {
          setProfile(prof);
          const role = prof.role === 'teacher' || prof.role === 'guru' ? 'teacher' : 'student';
          syncGamificationRole(role);
        }
        setLoading(false);
      } else {
        // Jika event secara eksplisit adalah SIGNED_OUT dari Supabase
        if (event === 'SIGNED_OUT') {
          localStorage.removeItem(LOCAL_FALLBACK_USER_KEY);
          setUser(null);
          setProfile(null);
        } else {
          // INITIAL_SESSION atau event lain di mana Supabase cloud session bernilai null
          // Jangan hapus sesi lokal jika ada sesi demo/admin yang aktif
          const hasLocal = restoreLocalSession();
          if (!hasLocal) {
            setUser(null);
            setProfile(null);
          }
        }
        setLoading(false);
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [fetchProfile, restoreLocalSession]);

  const refreshProfile = async () => {
    if (user) {
      const prof = await fetchProfile(user.id, user.email);
      if (prof) {
        setProfile(prof);
        const role = prof.role === 'teacher' || prof.role === 'guru' ? 'teacher' : 'student';
        syncGamificationRole(role);
      }
    }
  };

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    const cleanEmail = email.trim().toLowerCase().replace(/['"]/g, '');

    // 1. Akun Khusus Administrator OSN Kimia (fluffykitten.dev@gmail.com / 354123)
    if (cleanEmail === 'fluffykitten.dev@gmail.com' || cleanEmail === 'ezzarscarlet@gmail.com') {
      if (password === '354123') {
        const adminUser: any = {
          id: 'admin-master-uuid',
          email: 'fluffykitten.dev@gmail.com',
          user_metadata: {
            full_name: 'Administrator (FluffyKitten)',
            role: 'teacher',
            is_admin: true,
          },
        };
        const adminProfile: Profile = {
          id: 'admin-master-uuid',
          email: 'fluffykitten.dev@gmail.com',
          full_name: 'Administrator (FluffyKitten)',
          role: 'teacher',
          xp: 9999,
          level: 10,
          current_streak: 30,
          last_activity_date: new Date().toISOString(),
          created_at: new Date().toISOString(),
        };
        setUser(adminUser);
        setProfile(adminProfile);
        syncGamificationRole('teacher');
        localStorage.setItem(LOCAL_FALLBACK_USER_KEY, JSON.stringify({ user: adminUser, profile: adminProfile }));
        localStorage.setItem('osn_student_email', 'fluffykitten.dev@gmail.com');
        return { success: true };
      } else {
        return { success: false, error: 'Kata sandi akun Administrator tidak sesuai.' };
      }
    }

    const supabase = getSupabaseClient();
    if (!supabase) {
      // Local fallback mode
      const isTeacher = cleanEmail.includes('guru') || cleanEmail.includes('admin');
      const fakeUser: any = {
        id: isTeacher ? 'teacher-demo-uuid' : 'student-demo-uuid',
        email: cleanEmail,
      };
      const fakeProfile: Profile = {
        id: fakeUser.id,
        email: cleanEmail,
        full_name: isTeacher ? 'Dr. Hendra Wijaya, M.Si.' : 'Ahmad Fauzan',
        role: isTeacher ? 'teacher' : 'student',
        xp: 1200,
        level: 5,
        current_streak: 7,
        last_activity_date: new Date().toISOString(),
        created_at: new Date().toISOString(),
      };
      setUser(fakeUser);
      setProfile(fakeProfile);
      syncGamificationRole(fakeProfile.role === 'teacher' ? 'teacher' : 'student');
      localStorage.setItem(LOCAL_FALLBACK_USER_KEY, JSON.stringify({ user: fakeUser, profile: fakeProfile }));
      return { success: true };
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: cleanEmail,
        password,
      });

      if (error) {
        const errLower = error.message.toLowerCase();
        const isDemoEmail =
          cleanEmail.includes('osnkimia.id') ||
          cleanEmail === 'guru@gmail.com' ||
          cleanEmail === 'siswa@gmail.com';

        if (
          errLower.includes('rate limit') ||
          errLower.includes('is invalid') ||
          errLower.includes('invalid email') ||
          (isDemoEmail && errLower.includes('invalid login credentials'))
        ) {
          console.warn(`Supabase login bypassed (${error.message}). Activating local session for ${cleanEmail}.`);
          const isTeacher = cleanEmail.includes('guru') || cleanEmail.includes('admin');
          const fakeUser: any = {
            id: isTeacher ? 'teacher-demo-uuid' : 'student-demo-uuid',
            email: cleanEmail,
            user_metadata: {
              full_name: isTeacher ? 'Dr. Hendra Wijaya, M.Si.' : 'Ahmad Fauzan',
              role: isTeacher ? 'teacher' : 'student',
            },
          };
          const fakeProfile: Profile = {
            id: fakeUser.id,
            email: cleanEmail,
            full_name: isTeacher ? 'Dr. Hendra Wijaya, M.Si.' : 'Ahmad Fauzan',
            role: isTeacher ? 'teacher' : 'student',
            xp: 1200,
            level: 5,
            current_streak: 7,
            last_activity_date: new Date().toISOString(),
            created_at: new Date().toISOString(),
          };
          setUser(fakeUser);
          setProfile(fakeProfile);
          syncGamificationRole(fakeProfile.role === 'teacher' ? 'teacher' : 'student');
          localStorage.setItem(LOCAL_FALLBACK_USER_KEY, JSON.stringify({ user: fakeUser, profile: fakeProfile }));
          localStorage.setItem('osn_student_email', cleanEmail);
          if (!isTeacher) {
            localStorage.setItem('osn_student_name', fakeProfile.full_name);
          }
          return { success: true };
        }
        return { success: false, error: error.message };
      }

      if (data.user) {
        localStorage.removeItem(LOCAL_FALLBACK_USER_KEY);
        setUser(data.user);
        setSession(data.session);
        const prof = await fetchProfile(data.user.id, data.user.email);
        if (prof) {
          setProfile(prof);
          const role = prof.role === 'teacher' || prof.role === 'guru' ? 'teacher' : 'student';
          syncGamificationRole(role);
        }
      }

      return { success: true };
    } catch (err: any) {
      return { success: false, error: err?.message || 'Gagal login.' };
    }
  };

  const register = async (
    email: string,
    password: string,
    fullName: string,
    role: 'teacher' | 'student' = 'student',
    studentDetails?: StudentRegistrationDetails
  ): Promise<{ success: boolean; error?: string; requireConfirmation?: boolean }> => {
    // Kebijakan: Pendaftaran mandiri publik HANYA untuk Siswa. Akun Guru ditentukan Admin.
    if (role === 'teacher') {
      return {
        success: false,
        error: 'Pendaftaran publik saat ini hanya dibuka untuk Siswa. Akun Guru dikelola dan diterbitkan secara resmi oleh Administrator (fluffykitten.dev@gmail.com).',
      };
    }

    const cleanEmail = email.trim().toLowerCase().replace(/['"]/g, '');
    const schoolName = studentDetails?.schoolName?.trim() || '';
    const gradeLevel = studentDetails?.gradeLevel?.trim() || '10';
    const targetOlympiad = studentDetails?.targetOlympiad || 'OSK';
    const phoneWhatsApp = studentDetails?.phoneWhatsApp?.trim() || '';

    const supabase = getSupabaseClient();
    if (!supabase) {
      // Offline / local development register
      const fakeUser: any = {
        id: `user-${Date.now()}`,
        email: cleanEmail,
      };
      const fakeProfile: Profile = {
        id: fakeUser.id,
        email: cleanEmail,
        full_name: fullName,
        role: 'student',
        school_name: schoolName,
        grade_level: gradeLevel,
        target_olympiad: targetOlympiad,
        phone_whatsapp: phoneWhatsApp,
        membership_tier: 'free',
        xp: 100,
        level: 1,
        current_streak: 1,
        last_activity_date: new Date().toISOString(),
        created_at: new Date().toISOString(),
      };
      setUser(fakeUser);
      setProfile(fakeProfile);
      syncGamificationRole('student');
      localStorage.setItem(LOCAL_FALLBACK_USER_KEY, JSON.stringify({ user: fakeUser, profile: fakeProfile }));
      localStorage.setItem('osn_student_email', cleanEmail);
      localStorage.setItem('osn_student_name', fullName);

      // Trigger Cloudflare Worker notification asynchronously
      sendStudentRegistrationNotification({
        fullName,
        email: cleanEmail,
        schoolName,
        gradeLevel,
        targetOlympiad,
        phoneWhatsApp,
      }).catch(() => {});

      return { success: true };
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email: cleanEmail,
        password,
        options: {
          data: {
            full_name: fullName,
            role: 'student',
            school_name: schoolName,
            grade_level: gradeLevel,
            target_olympiad: targetOlympiad,
            phone_whatsapp: phoneWhatsApp,
            membership_tier: 'free',
          },
        },
      });

      if (error) {
        const errLower = error.message.toLowerCase();
        const isDemoEmail =
          cleanEmail.includes('osnkimia.id') ||
          cleanEmail === 'siswa@gmail.com';

        if (
          errLower.includes('rate limit') ||
          errLower.includes('is invalid') ||
          errLower.includes('invalid email') ||
          errLower.includes('not allowed') ||
          isDemoEmail
        ) {
          console.warn(`Supabase register bypassed (${error.message}). Activating local session for ${cleanEmail}.`);
          const fakeUser: any = {
            id: `student-${Date.now()}`,
            email: cleanEmail,
            user_metadata: {
              full_name: fullName,
              role: 'student',
            },
          };
          const fakeProfile: Profile = {
            id: fakeUser.id,
            email: cleanEmail,
            full_name: fullName,
            role: 'student',
            school_name: schoolName,
            grade_level: gradeLevel,
            target_olympiad: targetOlympiad,
            phone_whatsapp: phoneWhatsApp,
            membership_tier: 'free',
            xp: 100,
            level: 1,
            current_streak: 1,
            last_activity_date: new Date().toISOString(),
            created_at: new Date().toISOString(),
          };
          setUser(fakeUser);
          setProfile(fakeProfile);
          syncGamificationRole('student');
          localStorage.setItem(LOCAL_FALLBACK_USER_KEY, JSON.stringify({ user: fakeUser, profile: fakeProfile }));
          localStorage.setItem('osn_student_email', cleanEmail);
          localStorage.setItem('osn_student_name', fullName);

          sendStudentRegistrationNotification({
            fullName,
            email: cleanEmail,
            schoolName,
            gradeLevel,
            targetOlympiad,
            phoneWhatsApp,
          }).catch(() => {});

          return { success: true };
        }
        return { success: false, error: error.message };
      }

      const requireConfirmation = !data.session && Boolean(data.user && !data.user.confirmed_at);

      if (data.user) {
        if (data.session) {
          setUser(data.user);
          setSession(data.session);
        }

        // Simpan profil siswa secara eksplisit ke database public.profiles
        const newProfile: Partial<Profile> = {
          id: data.user.id,
          email: cleanEmail,
          full_name: fullName,
          role: 'student',
          school_name: schoolName,
          grade_level: gradeLevel,
          target_olympiad: targetOlympiad,
          phone_whatsapp: phoneWhatsApp,
          membership_tier: 'free',
          xp: 100,
          level: 1,
          current_streak: 1,
          last_activity_date: new Date().toISOString(),
        };

        const { data: savedProf } = await supabase
          .from('profiles')
          .upsert([newProfile])
          .select()
          .maybeSingle();

        if (savedProf) {
          setProfile(savedProf as Profile);
        } else {
          setProfile(newProfile as Profile);
        }

        syncGamificationRole('student');
        localStorage.setItem('osn_student_email', cleanEmail);
        localStorage.setItem('osn_student_name', fullName);

        // Kirim notifikasi via Cloudflare Worker di background
        sendStudentRegistrationNotification({
          fullName,
          email: cleanEmail,
          schoolName,
          gradeLevel,
          targetOlympiad,
          phoneWhatsApp,
        }).catch(() => {});
      }

      return { success: true, requireConfirmation };
    } catch (err: any) {
      return { success: false, error: err?.message || 'Gagal mendaftar.' };
    }
  };

  const resetPassword = async (
    email: string
  ): Promise<{ success: boolean; error?: string; message?: string }> => {
    const cleanEmail = email.trim().toLowerCase().replace(/['"]/g, '');
    if (!cleanEmail) {
      return { success: false, error: 'Silakan masukkan alamat email yang terdaftar.' };
    }

    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        const redirectUrl = `${window.location.origin}/login?mode=reset`;
        const { error } = await supabase.auth.resetPasswordForEmail(cleanEmail, {
          redirectTo: redirectUrl,
        });
        if (error) {
          console.warn('Supabase reset password notice:', error.message);
          return { success: false, error: error.message };
        }
      } catch (e: any) {
        return { success: false, error: e?.message || 'Gagal mengirim email reset kata sandi.' };
      }
    }

    return {
      success: true,
      message: `Tautan pemulihan kata sandi telah dikirim ke ${cleanEmail}. Buka email Anda dan klik tautan untuk membuat kata sandi baru.`,
    };
  };

  const updatePassword = async (
    newPassword: string
  ): Promise<{ success: boolean; error?: string }> => {
    if (!newPassword || newPassword.length < 6) {
      return { success: false, error: 'Kata sandi baru minimal 6 karakter.' };
    }

    const supabase = getSupabaseClient();
    if (!supabase) {
      return { success: true };
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) {
        return { success: false, error: error.message };
      }

      // Otomatis aktifkan status akun di tabel profiles jika sebelumnya pending_activation
      if (user?.id) {
        try {
          await supabase
            .from('profiles')
            .update({ account_status: 'active', is_suspended: false })
            .eq('id', user.id);
        } catch (statusErr) {
          console.warn('[AuthContext] Update profile account_status notice:', statusErr);
        }
      }

      sessionStorage.removeItem('osn_is_password_recovery');
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err?.message || 'Gagal memperbarui kata sandi.' };
    }
  };

  const logout = async () => {
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        await supabase.auth.signOut();
      } catch (err) {
        console.warn('Error signing out from Supabase:', err);
      }
    }
    localStorage.removeItem(LOCAL_FALLBACK_USER_KEY);
    setUser(null);
    setSession(null);
    setProfile(null);
  };

  // Demo Login: Guru, Siswa, atau Admin
  const loginDemo = async (type: 'teacher' | 'student' | 'admin'): Promise<{ success: boolean; error?: string }> => {
    if (type === 'admin') {
      return login('fluffykitten.dev@gmail.com', '354123');
    }

    const email = type === 'teacher' ? 'guru@osnkimia.id' : 'siswa@osnkimia.id';
    const password = '354123';
    const fullName = type === 'teacher' ? 'Dr. Hendra Wijaya, M.Si. (Guru Pembina)' : 'Ahmad Fauzan (Siswa OSN)';

    const loginRes = await login(email, password);
    if (loginRes.success) {
      return { success: true };
    }

    const isTeacher = type === 'teacher';
    const fakeUser: any = {
      id: isTeacher ? 'teacher-demo-uuid' : 'student-demo-uuid',
      email,
      user_metadata: { full_name: fullName, role: type },
    };
    const fakeProfile: Profile = {
      id: fakeUser.id,
      email,
      full_name: fullName,
      role: type,
      xp: 1200,
      level: 5,
      current_streak: 7,
      last_activity_date: new Date().toISOString(),
      created_at: new Date().toISOString(),
    };
    setUser(fakeUser);
    setProfile(fakeProfile);
    syncGamificationRole(type);
    localStorage.setItem(LOCAL_FALLBACK_USER_KEY, JSON.stringify({ user: fakeUser, profile: fakeProfile }));
    localStorage.setItem('osn_student_email', email);
    localStorage.setItem('osn_student_name', fullName);
    return { success: true };
  };

  const currentRole: 'teacher' | 'student' =
    profile?.role === 'teacher' || profile?.role === 'guru'
      ? 'teacher'
      : (user as any)?.user_metadata?.role === 'teacher' || (user as any)?.user_metadata?.role === 'guru'
      ? 'teacher'
      : user?.email?.toLowerCase().includes('guru') ||
        user?.email?.toLowerCase() === 'fluffykitten.dev@gmail.com' ||
        user?.email?.toLowerCase() === 'ezzarscarlet@gmail.com'
      ? 'teacher'
      : 'student';

  const isTeacher = currentRole === 'teacher';
  const isAdmin = Boolean(
    user?.email?.toLowerCase() === 'fluffykitten.dev@gmail.com' ||
    user?.email?.toLowerCase() === 'ezzarscarlet@gmail.com' ||
    (user as any)?.user_metadata?.is_admin ||
    profile?.email?.toLowerCase() === 'fluffykitten.dev@gmail.com' ||
    profile?.email?.toLowerCase() === 'ezzarscarlet@gmail.com'
  );

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        profile,
        role: currentRole,
        isTeacher,
        isAdmin,
        loading,
        isCloudConnected,
        login,
        register,
        resetPassword,
        updatePassword,
        logout,
        refreshProfile,
        loginDemo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
