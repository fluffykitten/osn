-- ==============================================================================
-- MIGRASI SUPABASE: SISTEM KELAS & UNDANGAN EMAIL, AUTENTIKASI PROFIL, & WORKSHEET MANDIRI
-- Jalankan skrip ini di: Supabase Dashboard -> SQL Editor -> New Query -> Run
-- ==============================================================================

-- 1. TABEL PROFIL PENGGUNA (profiles)
-- Terhubung langsung ke auth.users untuk menyimpan identitas, role, dan gamifikasi
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'student' CHECK (role IN ('teacher', 'student', 'guru', 'siswa')),
    xp INT DEFAULT 0,
    level INT DEFAULT 1,
    current_streak INT DEFAULT 0,
    last_activity_date TIMESTAMPTZ DEFAULT NOW(),
    avatar_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_profiles_email ON public.profiles(email);
CREATE INDEX IF NOT EXISTS idx_profiles_role ON public.profiles(role);

-- 2. TABEL KELAS (classrooms)
-- Kelas binaan yang dibuat oleh Guru Pembina
CREATE TABLE IF NOT EXISTS public.classrooms (
    id BIGSERIAL PRIMARY KEY,
    teacher_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    code TEXT UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_classrooms_teacher ON public.classrooms(teacher_id);
CREATE INDEX IF NOT EXISTS idx_classrooms_code ON public.classrooms(code);

-- 3. TABEL ANGGOTA KELAS / UNDANGAN EMAIL (classroom_members)
-- Relasi siswa ke kelas melalui undangan email oleh guru
CREATE TABLE IF NOT EXISTS public.classroom_members (
    id BIGSERIAL PRIMARY KEY,
    classroom_id BIGINT NOT NULL REFERENCES public.classrooms(id) ON DELETE CASCADE,
    student_email TEXT NOT NULL,
    student_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    student_name TEXT,
    status TEXT NOT NULL DEFAULT 'invited' CHECK (status IN ('invited', 'active', 'pending_approval')),
    invited_at TIMESTAMPTZ DEFAULT NOW(),
    joined_at TIMESTAMPTZ,
    UNIQUE(classroom_id, student_email)
);

CREATE INDEX IF NOT EXISTS idx_members_email ON public.classroom_members(student_email);
CREATE INDEX IF NOT EXISTS idx_members_class ON public.classroom_members(classroom_id);
CREATE INDEX IF NOT EXISTS idx_members_student_id ON public.classroom_members(student_id);

-- 4. TABEL PENUGASAN WORKSHEET KE KELAS (classroom_assignments)
-- Menghubungkan worksheet guru ke kelas yang bersangkutan
CREATE TABLE IF NOT EXISTS public.classroom_assignments (
    id BIGSERIAL PRIMARY KEY,
    classroom_id BIGINT NOT NULL REFERENCES public.classrooms(id) ON DELETE CASCADE,
    worksheet_id BIGINT NOT NULL REFERENCES public.worksheets(id) ON DELETE CASCADE,
    assigned_at TIMESTAMPTZ DEFAULT NOW(),
    due_date TIMESTAMPTZ,
    is_live_monitored BOOLEAN DEFAULT true,
    UNIQUE(classroom_id, worksheet_id)
);

CREATE INDEX IF NOT EXISTS idx_assignments_classroom ON public.classroom_assignments(classroom_id);
CREATE INDEX IF NOT EXISTS idx_assignments_worksheet ON public.classroom_assignments(worksheet_id);

-- 5. TAMBAH KOLOM teacher_id KE TABEL worksheets
-- Mengikat worksheet ke guru pembuat (Worksheet Mandiri Guru)
ALTER TABLE public.worksheets 
ADD COLUMN IF NOT EXISTS teacher_id UUID REFERENCES auth.users(id) ON DELETE SET NULL;

CREATE INDEX IF NOT EXISTS idx_worksheets_teacher_id ON public.worksheets(teacher_id);

-- 6. OTOMASI TRIGGER PEMBUATAN PROFIL DARI auth.users
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1)),
    COALESCE(NEW.raw_user_meta_data->>'role', 'student')
  )
  ON CONFLICT (id) DO UPDATE
  SET email = EXCLUDED.email,
      full_name = COALESCE(EXCLUDED.full_name, public.profiles.full_name);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 7. KEBIJAKAN ROW LEVEL SECURITY (RLS) & PUBLIKASI REALTIME
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.classrooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.classroom_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.classroom_assignments ENABLE ROW LEVEL SECURITY;

-- Kebijakan profil: Semua pengguna terautentikasi dapat melihat profil, dan mengedit profilnya sendiri
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow public select on profiles') THEN
    CREATE POLICY "Allow public select on profiles" ON public.profiles FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow self update on profiles') THEN
    CREATE POLICY "Allow self update on profiles" ON public.profiles FOR UPDATE USING (auth.uid() = id);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow insert on profiles') THEN
    CREATE POLICY "Allow insert on profiles" ON public.profiles FOR INSERT WITH CHECK (true);
  END IF;
END $$;

-- Kebijakan classrooms: Akses penuh untuk guru dan siswa terdaftar
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow full access to classrooms for authenticated') THEN
    CREATE POLICY "Allow full access to classrooms for authenticated" ON public.classrooms FOR ALL USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow full access to classroom_members') THEN
    CREATE POLICY "Allow full access to classroom_members" ON public.classroom_members FOR ALL USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow full access to classroom_assignments') THEN
    CREATE POLICY "Allow full access to classroom_assignments" ON public.classroom_assignments FOR ALL USING (true);
  END IF;
END $$;

-- Tambahkan realtime publication jika belum ada
DO $$ BEGIN
  ALTER PUBLICATION supabase_realtime ADD TABLE public.classroom_members;
EXCEPTION WHEN OTHERS THEN NULL;
END $$;

DO $$ BEGIN
  ALTER PUBLICATION supabase_realtime ADD TABLE public.classroom_assignments;
EXCEPTION WHEN OTHERS THEN NULL;
END $$;
