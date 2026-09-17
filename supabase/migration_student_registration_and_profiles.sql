-- ==============================================================================
-- MIGRASI SUPABASE: PROFIL LENGKAP SISWA & OTOMASI TRIGGER REGISTRASI
-- Jalankan skrip ini di: Supabase Dashboard -> SQL Editor -> New Query -> Run
-- ==============================================================================

-- 1. Tambah kolom metadata siswa pada tabel profiles
ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS school_name TEXT,
ADD COLUMN IF NOT EXISTS grade_level TEXT,
ADD COLUMN IF NOT EXISTS target_olympiad TEXT DEFAULT 'OSK',
ADD COLUMN IF NOT EXISTS phone_whatsapp TEXT,
ADD COLUMN IF NOT EXISTS membership_tier TEXT DEFAULT 'free';

-- 2. Indexing untuk filtering profil siswa
CREATE INDEX IF NOT EXISTS idx_profiles_school ON public.profiles(school_name);
CREATE INDEX IF NOT EXISTS idx_profiles_target ON public.profiles(target_olympiad);
CREATE INDEX IF NOT EXISTS idx_profiles_tier ON public.profiles(membership_tier);

-- 3. Otomasi Trigger: Menangkap metadata pendaftaran siswa dari auth.users
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (
    id, 
    email, 
    full_name, 
    role, 
    school_name, 
    grade_level, 
    target_olympiad, 
    phone_whatsapp, 
    membership_tier,
    xp,
    level,
    current_streak
  )
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1)),
    COALESCE(NEW.raw_user_meta_data->>'role', 'student'),
    NEW.raw_user_meta_data->>'school_name',
    NEW.raw_user_meta_data->>'grade_level',
    COALESCE(NEW.raw_user_meta_data->>'target_olympiad', 'OSK'),
    NEW.raw_user_meta_data->>'phone_whatsapp',
    COALESCE(NEW.raw_user_meta_data->>'membership_tier', 'free'),
    100,
    1,
    1
  )
  ON CONFLICT (id) DO UPDATE
  SET email = EXCLUDED.email,
      full_name = COALESCE(EXCLUDED.full_name, public.profiles.full_name),
      school_name = COALESCE(EXCLUDED.school_name, public.profiles.school_name),
      grade_level = COALESCE(EXCLUDED.grade_level, public.profiles.grade_level),
      target_olympiad = COALESCE(EXCLUDED.target_olympiad, public.profiles.target_olympiad),
      phone_whatsapp = COALESCE(EXCLUDED.phone_whatsapp, public.profiles.phone_whatsapp),
      membership_tier = COALESCE(EXCLUDED.membership_tier, public.profiles.membership_tier);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 4. Pasang trigger pada tabel auth.users
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
