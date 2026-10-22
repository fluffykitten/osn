-- ==============================================================================
-- AXIOMA ACADEMY: MIGRASI DATABASE MULTI-SUBJEK & MULTI-KURIKULUM (FASE 0)
-- Platform Pembelajaran Terpadu: Kimia, Fisika, Matematika, Biologi
-- Jalankan skrip ini di: Supabase Dashboard -> SQL Editor -> New Query -> Run
-- ==============================================================================

-- 1. Tambah kolom subjek & kurikulum pada tabel BANK SOAL (public.questions)
-- Nilai default 'kimia' dan 'osn' menjamin seluruh data soal lama tetap utuh tanpa backfill.
ALTER TABLE public.questions 
  ADD COLUMN IF NOT EXISTS subject TEXT NOT NULL DEFAULT 'kimia',
  ADD COLUMN IF NOT EXISTS curriculum TEXT NOT NULL DEFAULT 'osn';

-- 2. Tambah kolom subjek & kurikulum pada tabel WORKSHEET (public.worksheets)
ALTER TABLE public.worksheets 
  ADD COLUMN IF NOT EXISTS subject TEXT NOT NULL DEFAULT 'kimia',
  ADD COLUMN IF NOT EXISTS curriculum TEXT NOT NULL DEFAULT 'osn';

-- 3. Tambah metadata subjek & kurikulum pada tabel PROFIL PENGGUNA (public.profiles)
-- teaching_subject: Hanya diisi untuk Guru (strictly 1 subjek)
-- preferred_subject & enrolled_subjects: Untuk Siswa
-- target_curriculum: Pilihan jalur belajar utama ('nasional', 'osn', 'igcse', 'as_level', 'a_level')
ALTER TABLE public.profiles 
  ADD COLUMN IF NOT EXISTS teaching_subject TEXT DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS preferred_subject TEXT DEFAULT 'kimia',
  ADD COLUMN IF NOT EXISTS enrolled_subjects TEXT[] DEFAULT ARRAY[]::TEXT[],
  ADD COLUMN IF NOT EXISTS target_curriculum TEXT DEFAULT 'osn';

-- 4. Dukungan Cross-Subject pada KELAS BINAAN (public.classrooms)
-- Kelas binaan kini dapat menampung penugasan lintas subjek
ALTER TABLE public.classrooms 
  ADD COLUMN IF NOT EXISTS subjects TEXT[] DEFAULT ARRAY['kimia']::TEXT[],
  ADD COLUMN IF NOT EXISTS is_cross_subject BOOLEAN DEFAULT true;

-- 5. Tabel Relasi GURU PENGAMPU KELAS (public.classroom_teachers)
-- Memungkinkan beberapa guru single-subject berkolaborasi di kelas binaan cross-subject yang sama
CREATE TABLE IF NOT EXISTS public.classroom_teachers (
  id BIGSERIAL PRIMARY KEY,
  classroom_id BIGINT REFERENCES public.classrooms(id) ON DELETE CASCADE,
  teacher_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  subject TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(classroom_id, teacher_id)
);

-- Row Level Security untuk classroom_teachers
ALTER TABLE public.classroom_teachers ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
    CREATE POLICY "Allow public full access to classroom_teachers" 
      ON public.classroom_teachers FOR ALL USING (true) WITH CHECK (true);
EXCEPTION WHEN duplicate_object THEN null; END $$;

-- 6. Indexing Performa Query Cepat Berbasis Subjek & Kurikulum
CREATE INDEX IF NOT EXISTS idx_questions_subject ON public.questions (subject);
CREATE INDEX IF NOT EXISTS idx_questions_subject_curriculum ON public.questions (subject, curriculum);
CREATE INDEX IF NOT EXISTS idx_worksheets_subject ON public.worksheets (subject);
CREATE INDEX IF NOT EXISTS idx_profiles_teaching_subject ON public.profiles (teaching_subject);
CREATE INDEX IF NOT EXISTS idx_classroom_teachers_classroom ON public.classroom_teachers (classroom_id);
CREATE INDEX IF NOT EXISTS idx_classroom_teachers_teacher ON public.classroom_teachers (teacher_id);

-- 7. Diagnostic Check Output
SELECT 
    column_name, 
    data_type, 
    column_default 
FROM information_schema.columns 
WHERE table_name IN ('questions', 'worksheets', 'profiles', 'classrooms', 'classroom_teachers') 
  AND column_name IN ('subject', 'curriculum', 'teaching_subject', 'enrolled_subjects', 'is_cross_subject')
ORDER BY table_name, column_name;
