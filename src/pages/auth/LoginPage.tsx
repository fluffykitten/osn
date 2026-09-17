import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import {
  Lock,
  Mail,
  User,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  GraduationCap,
  Users,
  CheckCircle2,
  AlertCircle,
  KeyRound,
  Atom,
  Building2,
  Target,
  Phone,
} from 'lucide-react';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const redirectPath = searchParams.get('redirect') || (location.state as any)?.from?.pathname;
  const initialMode =
    searchParams.get('mode') === 'register'
      ? 'register'
      : searchParams.get('mode') === 'forgot'
      ? 'forgot'
      : searchParams.get('mode') === 'reset'
      ? 'reset'
      : 'login';

  const { login, register, resetPassword, updatePassword, loginDemo } = useAuth();

  const [mode, setMode] = useState<'login' | 'register' | 'forgot' | 'reset'>(initialMode);

  // Registration step (1 = Akun & Kredensial, 2 = Profil Akademik & Target)
  const [regStep, setRegStep] = useState<1 | 2>(1);

  useEffect(() => {
    const m = searchParams.get('mode');
    if (m === 'register') setMode('register');
    else if (m === 'forgot') setMode('forgot');
    else if (m === 'reset') setMode('reset');
    else if (m === 'login') setMode('login');
  }, [searchParams]);

  // Form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [gradeLevel, setGradeLevel] = useState('10');
  const [targetOlympiad, setTargetOlympiad] = useState('OSK');
  const [phoneWhatsApp, setPhoneWhatsApp] = useState('');

  // Password reset states
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [emailConfirmationRequired, setEmailConfirmationRequired] = useState(false);

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setEmailConfirmationRequired(false);

    // If on register step 1, advance to step 2
    if (mode === 'register' && regStep === 1) {
      if (!fullName.trim()) {
        setErrorMessage('Silakan isi nama lengkap Anda.');
        return;
      }
      if (!email.trim() || !email.includes('@')) {
        setErrorMessage('Silakan masukkan alamat email yang valid.');
        return;
      }
      if (!password || password.length < 6) {
        setErrorMessage('Kata sandi minimal 6 karakter.');
        return;
      }
      setRegStep(2);
      return;
    }

    setIsLoading(true);

    try {
      if (mode === 'login') {
        const res = await login(email, password);
        if (!res.success) {
          setErrorMessage(res.error || 'Email atau kata sandi tidak cocok.');
        } else {
          setSuccessMessage('Berhasil masuk! Mengarahkan...');
          setTimeout(() => {
            if (redirectPath) {
              navigate(redirectPath);
            } else if (
              email.toLowerCase().includes('guru') ||
              email.toLowerCase() === 'fluffykitten.dev@gmail.com' ||
              email.toLowerCase() === 'ezzarscarlet@gmail.com'
            ) {
              navigate('/teacher');
            } else {
              navigate('/worksheet');
            }
          }, 500);
        }
      } else if (mode === 'register') {
        if (!schoolName.trim()) {
          setErrorMessage('Silakan isi nama asal sekolah atau madrasah Anda.');
          setIsLoading(false);
          return;
        }

        const res = await register(email, password, fullName, 'student', {
          schoolName,
          gradeLevel,
          targetOlympiad,
          phoneWhatsApp,
        });

        if (!res.success) {
          setErrorMessage(res.error || 'Gagal mendaftarkan akun siswa.');
        } else if (res.requireConfirmation) {
          setEmailConfirmationRequired(true);
          setSuccessMessage(`Pendaftaran berhasil! Tautan konfirmasi aktivasi telah dikirim ke ${email}. Mengalihkan Anda kembali ke Beranda...`);
          setTimeout(() => {
            navigate('/', {
              state: {
                registered: true,
                requireConfirmation: true,
                studentName: fullName,
                registeredEmail: email,
              },
            });
          }, 1500);
        } else {
          setSuccessMessage('Akun Siswa berhasil didaftarkan! Selamat datang di OSN Kimia Mastery. Mengalihkan Anda kembali ke Beranda...');
          setTimeout(() => {
            navigate('/', {
              state: {
                registered: true,
                requireConfirmation: false,
                studentName: fullName,
                registeredEmail: email,
              },
            });
          }, 1200);
        }
      } else if (mode === 'forgot') {
        const res = await resetPassword(email);
        if (!res.success) {
          setErrorMessage(res.error || 'Gagal memproses pemulihan kata sandi.');
        } else {
          setSuccessMessage(res.message || 'Petunjuk pemulihan kata sandi telah dikirim ke email Anda.');
        }
      } else if (mode === 'reset') {
        if (newPassword !== confirmPassword) {
          setErrorMessage('Konfirmasi kata sandi tidak cocok.');
          setIsLoading(false);
          return;
        }
        const res = await updatePassword(newPassword);
        if (!res.success) {
          setErrorMessage(res.error || 'Gagal memperbarui kata sandi.');
        } else {
          setSuccessMessage('Kata sandi berhasil diperbarui! Silakan masuk dengan kata sandi baru Anda.');
          setTimeout(() => {
            setMode('login');
          }, 1500);
        }
      }
    } catch (err: any) {
      setErrorMessage(err?.message || 'Terjadi kesalahan sistem.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = async (type: 'teacher' | 'student' | 'admin') => {
    setErrorMessage(null);
    setSuccessMessage(null);
    setIsLoading(true);

    try {
      const res = await loginDemo(type);
      if (res.success) {
        const roleName = type === 'admin' ? 'Administrator' : type === 'teacher' ? 'Guru' : 'Siswa';
        setSuccessMessage(`Berhasil login sebagai akun ${roleName}!`);
        setTimeout(() => {
          if (redirectPath) {
            navigate(redirectPath);
          } else if (type === 'teacher' || type === 'admin') {
            navigate('/teacher');
          } else {
            navigate('/worksheet');
          }
        }, 500);
      } else {
        setErrorMessage(res.error || 'Gagal login akun demo.');
      }
    } catch (err: any) {
      setErrorMessage(err?.message || 'Gagal login demo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-sky-50/30 to-slate-50">
      <div className="max-w-md w-full space-y-6">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/20 mb-1 hover:scale-105 transition-transform">
            <Atom className="w-8 h-8 animate-spin-slow" />
          </Link>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-display">
            {mode === 'login'
              ? 'Masuk ke Portal OSN Kimia'
              : mode === 'register'
              ? 'Pendaftaran Akun Siswa'
              : mode === 'reset'
              ? 'Buat Kata Sandi Baru'
              : 'Pemulihan Kata Sandi'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            {mode === 'register'
              ? 'Daftar untuk mengakses 10 pilar kurikulum OSN, modul pengerjaan, dan evaluasi AI'
              : mode === 'forgot'
              ? 'Masukkan alamat email terdaftar untuk menerima tautan pemulihan kata sandi'
              : mode === 'reset'
              ? 'Masukkan kata sandi baru untuk akun Anda'
              : 'Platform Pelatihan Olimpiade Sains Kimia & IChO Standar Puspresnas'}
          </p>
        </div>

        {/* 1-Click Demo Login Box */}
        {mode === 'login' && (
          <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-sky-950 rounded-2xl p-5 text-white shadow-lg border border-indigo-500/30 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider font-mono">
                  Akses Cepat Akun Demo & Admin
                </span>
              </div>
              <span className="text-[10px] px-2 py-0.5 bg-white/10 rounded-full text-slate-300 font-mono">
                Password: 354123
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
              <button
                type="button"
                disabled={isLoading}
                onClick={() => handleDemoLogin('admin')}
                className="flex flex-col text-left p-2.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-400/30 transition-all hover:scale-[1.02] active:scale-98 disabled:opacity-50"
              >
                <div className="flex items-center gap-1 text-[11px] font-bold text-amber-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>👑 Admin</span>
                </div>
                <span className="text-[10px] text-slate-300 font-mono truncate mt-0.5">fluffykitten.dev@gmail.com</span>
                <span className="text-[9px] text-amber-200/80 mt-1">Otoritas Guru & Sistem</span>
              </button>

              <button
                type="button"
                disabled={isLoading}
                onClick={() => handleDemoLogin('teacher')}
                className="flex flex-col text-left p-2.5 rounded-xl bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-400/30 transition-all hover:scale-[1.02] active:scale-98 disabled:opacity-50"
              >
                <div className="flex items-center gap-1 text-[11px] font-bold text-indigo-200">
                  <Users className="w-3.5 h-3.5 text-indigo-300" />
                  <span>👨‍🏫 Guru</span>
                </div>
                <span className="text-[10px] text-slate-300 font-mono truncate mt-0.5">guru@osnkimia.id</span>
                <span className="text-[9px] text-slate-400 mt-1">Kelas & Live Monitor</span>
              </button>

              <button
                type="button"
                disabled={isLoading}
                onClick={() => handleDemoLogin('student')}
                className="flex flex-col text-left p-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/30 transition-all hover:scale-[1.02] active:scale-98 disabled:opacity-50"
              >
                <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-200">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-300" />
                  <span>🎓 Siswa</span>
                </div>
                <span className="text-[10px] text-slate-300 font-mono truncate mt-0.5">siswa@osnkimia.id</span>
                <span className="text-[9px] text-slate-400 mt-1">Latihan 10 Topik OSN</span>
              </button>
            </div>
          </div>
        )}

        {/* Mode Toggle Tabs */}
        {mode !== 'reset' && (
          <div className="flex p-1 bg-slate-200/80 rounded-xl">
            <button
              type="button"
              onClick={() => {
                setMode('login');
                setErrorMessage(null);
                setSuccessMessage(null);
                setRegStep(1);
              }}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                mode === 'login'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Masuk
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('register');
                setErrorMessage(null);
                setSuccessMessage(null);
                setRegStep(1);
              }}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                mode === 'register'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Daftar (Siswa)
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('forgot');
                setErrorMessage(null);
                setSuccessMessage(null);
              }}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                mode === 'forgot'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Lupa Password
            </button>
          </div>
        )}

        {/* Main Form Card */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5">
          {errorMessage && (
            <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-xl flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {successMessage && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600 mt-0.5" />
              <span>{successMessage}</span>
            </div>
          )}

          {/* Registration Step Indicator & Admin Notice */}
          {mode === 'register' && (
            <div className="space-y-3">
              <div className="p-3 bg-sky-50 border border-sky-200 rounded-xl text-[11px] text-sky-800 leading-relaxed flex items-start gap-2">
                <GraduationCap className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Khusus Siswa:</strong> Akun Guru Pembimbing dikelola dan ditentukan secara terpusat oleh Administrator (<code className="font-mono font-bold text-sky-900">fluffykitten.dev@gmail.com</code>).
                </span>
              </div>

              {/* Step indicator pills */}
              <div className="flex items-center gap-2 pt-1">
                <div className={`flex-1 h-1.5 rounded-full transition-all ${regStep >= 1 ? 'bg-sky-600' : 'bg-slate-200'}`} />
                <div className={`flex-1 h-1.5 rounded-full transition-all ${regStep === 2 ? 'bg-sky-600' : 'bg-slate-200'}`} />
              </div>
              <div className="flex justify-between text-[10px] text-slate-500 font-semibold px-0.5">
                <span className={regStep === 1 ? 'text-sky-700' : ''}>1. Akun & Kredensial</span>
                <span className={regStep === 2 ? 'text-sky-700' : ''}>2. Sekolah & Target OSN</span>
              </div>
            </div>
          )}

          <form onSubmit={handleAuthSubmit} className="space-y-4">
            {/* REGISTER STEP 1 OR LOGIN / FORGOT / RESET */}
            {mode === 'register' && regStep === 1 && (
              <>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nama Lengkap Siswa
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Contoh: Ahmad Fauzan"
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Alamat Email Siswa</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nama@sekolah.sch.id atau email aktif"
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Kata Sandi</label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      required
                      minLength={6}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Minimal 6 karakter"
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                    />
                  </div>
                </div>
              </>
            )}

            {/* REGISTER STEP 2: PROFIL AKADEMIK & TARGET */}
            {mode === 'register' && regStep === 2 && (
              <>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Asal Sekolah / Madrasah
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={schoolName}
                      onChange={(e) => setSchoolName(e.target.value)}
                      placeholder="Contoh: SMAN 1 Jakarta / MAN 2 Kota Malang"
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Tingkat Kelas</label>
                    <select
                      value={gradeLevel}
                      onChange={(e) => setGradeLevel(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                    >
                      <option value="10">Kelas 10 (Fase E)</option>
                      <option value="11">Kelas 11 (Fase F)</option>
                      <option value="12">Kelas 12 (Fase F)</option>
                      <option value="Alumni">Persiapan / Pelatnas</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Target Kompetisi</label>
                    <select
                      value={targetOlympiad}
                      onChange={(e) => setTargetOlympiad(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                    >
                      <option value="OSK">OSK (Kab/Kota)</option>
                      <option value="OSP">OSP (Provinsi)</option>
                      <option value="OSN">OSN (Nasional)</option>
                      <option value="IChO">IChO (Global)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-semibold text-slate-700">Nomor WhatsApp Siswa</label>
                    <span className="text-[10px] text-slate-400 font-normal">Opsional</span>
                  </div>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      value={phoneWhatsApp}
                      onChange={(e) => setPhoneWhatsApp(e.target.value)}
                      placeholder="08xxxxxxxxxx"
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                    />
                  </div>
                </div>
              </>
            )}

            {/* LOGIN FORM FIELDS */}
            {mode === 'login' && (
              <>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Alamat Email</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nama@sekolah.sch.id"
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-semibold text-slate-700">Kata Sandi</label>
                    <button
                      type="button"
                      onClick={() => {
                        setMode('forgot');
                        setErrorMessage(null);
                        setSuccessMessage(null);
                      }}
                      className="text-[11px] text-sky-600 hover:text-sky-700 font-medium hover:underline"
                    >
                      Lupa password?
                    </button>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Masukkan kata sandi Anda"
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                    />
                  </div>
                </div>
              </>
            )}

            {/* FORGOT PASSWORD FORM FIELDS */}
            {mode === 'forgot' && (
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Alamat Email Akun Terdaftar
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@sekolah.sch.id"
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                  />
                </div>
              </div>
            )}

            {/* RESET PASSWORD FORM FIELDS (CALLBACK DARI EMAIL) */}
            {mode === 'reset' && (
              <>
                <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-xl text-xs text-indigo-900 flex items-center gap-2">
                  <KeyRound className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Silakan buat kata sandi baru untuk mengamankan akun Anda.</span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Kata Sandi Baru</label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      required
                      minLength={6}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Minimal 6 karakter"
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Konfirmasi Kata Sandi Baru</label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      required
                      minLength={6}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Ketik ulang kata sandi baru"
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                    />
                  </div>
                </div>
              </>
            )}

            {/* ACTION BUTTONS */}
            <div className="pt-2 flex items-center gap-2">
              {mode === 'register' && regStep === 2 && (
                <button
                  type="button"
                  onClick={() => setRegStep(1)}
                  className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-all flex items-center gap-1 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Kembali</span>
                </button>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 py-2.5 px-4 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50 active:scale-98 cursor-pointer"
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>
                      {mode === 'login'
                        ? 'Masuk ke Platform'
                        : mode === 'register'
                        ? regStep === 1
                          ? 'Lanjut: Profil Akademik →'
                          : 'Selesaikan Pendaftaran Akun Siswa'
                        : mode === 'reset'
                        ? 'Simpan Kata Sandi Baru'
                        : 'Kirim Tautan Pemulihan'}
                    </span>
                    {mode !== 'register' || regStep === 1 ? <ArrowRight className="w-4 h-4" /> : null}
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Footer switch link */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <Link to="/" className="text-slate-600 hover:text-slate-900 font-medium hover:underline">
              ← Kembali ke Beranda
            </Link>
            <a
              href="https://github.com/fluffykitten"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-indigo-600 hover:text-indigo-800 font-semibold hover:underline"
            >
              <img
                src="/fluffykitten-logo.png"
                alt="fluffykitten"
                className="w-3.5 h-3.5 rounded-full object-contain inline-block"
              />
              <span>Tentang Creator ↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

