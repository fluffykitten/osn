import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import type { User, Session } from '@supabase/supabase-js';
import { getSupabaseClient, isSupabaseConfigured } from '../lib/supabaseClient';
import type { Profile, UserRole } from '../types/database';
import { getLocalGamificationState, saveLocalGamificationState } from '../lib/gamification';
import { awardXp } from '../services/gamificationService';
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
  awardUserXp: (amount: number, reason?: string) => Promise<any>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const isCloudConnected = isSupabaseConfigured();

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
      // 1. Ambil profil berdasarkan UUID user Supabase
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle();

      if (data && !error) {
        return data as Profile;
      }

      // 2. Jika tidak ditemukan berdasarkan ID, cari berdasarkan email resmi
      if (userEmail) {
        const { data: dataByEmail, error: errByEmail } = await supabase
          .from('profiles')
          .select('*')
          .ilike('email', userEmail.trim().toLowerCase())
          .maybeSingle();

        if (dataByEmail && !errByEmail) {
          return dataByEmail as Profile;
        }
      }

      // 3. Jika belum ada di tabel profiles, buat profile default resmi di Supabase
      if (userEmail) {
        const cleanEmail = userEmail.trim().toLowerCase();
        const isMasterAdmin = cleanEmail === 'fluffykitten.dev@gmail.com' || cleanEmail === 'ezzarscarlet@gmail.com';
        const isMasterTeacher = cleanEmail.includes('guru') || cleanEmail.includes('admin') || isMasterAdmin;
        const defaultRole: UserRole = isMasterTeacher ? 'teacher' : 'student';
        const defaultName =
          cleanEmail === 'ezzarscarlet@gmail.com'
            ? 'Ezzar Scarlet'
            : cleanEmail === 'fluffykitten.dev@gmail.com'
            ? 'Administrator (FluffyKitten)'
            : cleanEmail.split('@')[0];

        const newProfile: Partial<Profile> = {
          id: userId,
          email: cleanEmail,
          full_name: defaultName,
          role: defaultRole,
          is_admin: isMasterAdmin,
          xp: 100,
          level: 1,
          current_streak: 1,
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

    // Hapus sisa cache fallback legacy jika ada
    try {
      localStorage.removeItem('osn_local_auth_user');
    } catch {}

    if (!supabase) {
      setLoading(false);
      return;
    }

    // Inisialisasi sesi aktif dari Supabase Cloud
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!mounted) return;
      setSession(session);
      if (session?.user) {
        setUser(session.user);
        fetchProfile(session.user.id, session.user.email).then((prof) => {
          if (!mounted) return;
          if (prof) {
            setProfile(prof);
            const role = prof.role === 'teacher' || prof.role === 'guru' ? 'teacher' : 'student';
            syncGamificationRole(role);
            localStorage.setItem('osn_student_id', prof.id);
            localStorage.setItem('osn_student_name', prof.full_name || 'Pengguna OSN');
          } else {
            localStorage.setItem('osn_student_id', session.user.id);
            localStorage.setItem('osn_student_name', (session.user.user_metadata?.full_name as string) || 'Pengguna OSN');
          }
          localStorage.setItem('osn_student_email', session.user.email || '');
          setLoading(false);
        });
      } else {
        setUser(null);
        setProfile(null);
        setLoading(false);
      }
    }).catch((err) => {
      console.warn('[AuthContext] getSession error:', err);
      if (!mounted) return;
      setUser(null);
      setProfile(null);
      setLoading(false);
    });

    // Dengarkan perubahan auth state secara reaktif dari Supabase Cloud
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, newSession) => {
      if (!mounted) return;
      if (event === 'PASSWORD_RECOVERY') {
        sessionStorage.setItem('osn_is_password_recovery', 'true');
      }
      setSession(newSession);
      if (newSession?.user) {
        setUser(newSession.user);
        const prof = await fetchProfile(newSession.user.id, newSession.user.email);
        if (mounted && prof) {
          setProfile(prof);
          const role = prof.role === 'teacher' || prof.role === 'guru' ? 'teacher' : 'student';
          syncGamificationRole(role);
          localStorage.setItem('osn_student_id', prof.id);
          localStorage.setItem('osn_student_name', prof.full_name || 'Pengguna OSN');
        } else if (mounted) {
          localStorage.setItem('osn_student_id', newSession.user.id);
          localStorage.setItem('osn_student_name', (newSession.user.user_metadata?.full_name as string) || 'Pengguna OSN');
        }
        localStorage.setItem('osn_student_email', newSession.user.email || '');
        setLoading(false);
      } else {
        setUser(null);
        setProfile(null);
        setLoading(false);
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [fetchProfile]);

  // Sinkronisasi Reaktif instan saat XP diberikan di komponen manapun
  useEffect(() => {
    const handleXpAwarded = (e: Event) => {
      const custom = e as CustomEvent;
      if (custom.detail) {
        setProfile((prev) => {
          if (!prev) return prev;
          const updated: Profile = {
            ...prev,
            xp: custom.detail.newXp,
            level: custom.detail.newLevel,
          };
          return updated;
        });
      }
    };

    window.addEventListener('osn_xp_awarded', handleXpAwarded);
    return () => window.removeEventListener('osn_xp_awarded', handleXpAwarded);
  }, []);

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

  const awardUserXp = useCallback(
    async (amount: number, reason?: string) => {
      if (!user?.id) return null;
      return await awardXp(user.id, amount, {
        currentKnownXp: profile?.xp,
        reason,
      });
    },
    [user?.id, profile?.xp]
  );

  // 100% Strict Supabase Cloud Login (No Local Mock / No Fallback Users)
  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    const cleanEmail = email.trim().toLowerCase().replace(/['"]/g, '');
    const supabase = getSupabaseClient();

    if (!supabase) {
      return { success: false, error: 'Koneksi ke server database Supabase belum terkonfigurasi.' };
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: cleanEmail,
        password,
      });

      if (error) {
        let friendlyError = error.message;
        const lower = error.message.toLowerCase();
        if (lower.includes('invalid login credentials') || lower.includes('invalid credential')) {
          friendlyError = 'Email atau kata sandi tidak cocok. Silakan periksa kembali.';
        } else if (lower.includes('email not confirmed')) {
          friendlyError = 'Email belum dikonfirmasi. Silakan periksa kotak masuk atau spam email Anda.';
        } else if (lower.includes('rate limit')) {
          friendlyError = 'Terlalu banyak percobaan masuk. Silakan tunggu beberapa saat lagi.';
        }
        return { success: false, error: friendlyError };
      }

      if (data.user) {
        setUser(data.user);
        setSession(data.session);
        const prof = await fetchProfile(data.user.id, data.user.email);
        if (prof) {
          setProfile(prof);
          const role = prof.role === 'teacher' || prof.role === 'guru' ? 'teacher' : 'student';
          syncGamificationRole(role);
          localStorage.setItem('osn_student_id', prof.id);
          localStorage.setItem('osn_student_name', prof.full_name || 'Pengguna OSN');
        } else {
          localStorage.setItem('osn_student_id', data.user.id);
          localStorage.setItem('osn_student_name', (data.user.user_metadata?.full_name as string) || 'Pengguna OSN');
        }
        localStorage.setItem('osn_student_email', cleanEmail);
      }

      return { success: true };
    } catch (err: any) {
      return { success: false, error: err?.message || 'Gagal masuk ke akun.' };
    }
  };

  // 100% Strict Supabase Registration (Siswa OSN)
  const register = async (
    email: string,
    password: string,
    fullName: string,
    role: 'teacher' | 'student' = 'student',
    studentDetails?: StudentRegistrationDetails
  ): Promise<{ success: boolean; error?: string; requireConfirmation?: boolean }> => {
    // Kebijakan: Pendaftaran publik HANYA untuk Siswa. Akun Guru dikelola Administrator.
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
      return { success: false, error: 'Koneksi ke server database Supabase belum terkonfigurasi.' };
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
        localStorage.setItem('osn_student_id', data.user.id);
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
    try {
      localStorage.removeItem('osn_local_auth_user');
      localStorage.removeItem('osn_student_id');
      localStorage.removeItem('osn_student_email');
      localStorage.removeItem('osn_student_name');
      sessionStorage.removeItem('osn_has_active_classroom');
      sessionStorage.removeItem('osn_login_portal_target');
      sessionStorage.removeItem('osn_is_password_recovery');
    } catch {}
    setUser(null);
    setSession(null);
    setProfile(null);
  };

  // Demo Login: Guru, Siswa, atau Admin (100% Strict Supabase Cloud Auth)
  const loginDemo = async (type: 'teacher' | 'student' | 'admin'): Promise<{ success: boolean; error?: string }> => {
    let email = 'siswa@osnkimia.id';
    if (type === 'admin') {
      email = 'fluffykitten.dev@gmail.com';
    } else if (type === 'teacher') {
      email = 'guru@osnkimia.id';
    }

    return login(email, '354123');
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
    profile?.email?.toLowerCase() === 'ezzarscarlet@gmail.com' ||
    profile?.is_admin
  );

  const contextValue = useMemo<AuthContextType>(
    () => ({
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
      awardUserXp,
    }),
    [
      user,
      session,
      profile,
      currentRole,
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
      awardUserXp,
    ]
  );

  return (
    <AuthContext.Provider value={contextValue}>
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
