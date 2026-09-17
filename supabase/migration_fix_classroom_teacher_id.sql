-- ==============================================================================
-- MIGRASI SUPABASE LENGKAP: SYNC KELAS ANTAR-PERANGKAT (CLOUD & MODE DEMO)
-- Jalankan skrip ini di: Supabase Dashboard -> SQL Editor -> New Query -> Run
-- ==============================================================================

-- 1. Lepas foreign key constraint auth.users pada classrooms dan ubah tipe menjadi TEXT
-- Hal ini memungkinkan pembuatan kelas baik saat guru login via Supabase maupun mode demo
ALTER TABLE public.classrooms DROP CONSTRAINT IF EXISTS classrooms_teacher_id_fkey;
ALTER TABLE public.classrooms ALTER COLUMN teacher_id DROP NOT NULL;
ALTER TABLE public.classrooms ALTER COLUMN teacher_id TYPE TEXT;

-- 2. Lepas foreign key constraint pada classroom_members dan ubah student_id menjadi TEXT
ALTER TABLE public.classroom_members DROP CONSTRAINT IF EXISTS classroom_members_student_id_fkey;
ALTER TABLE public.classroom_members ALTER COLUMN student_id TYPE TEXT;

-- 3. Lepas foreign key constraint pada worksheets (Worksheet Mandiri Guru)
ALTER TABLE public.worksheets DROP CONSTRAINT IF EXISTS worksheets_teacher_id_fkey;
ALTER TABLE public.worksheets ALTER COLUMN teacher_id TYPE TEXT;

-- 4. Perbarui constraint status pada classroom_members agar mendukung 'pending_approval'
ALTER TABLE public.classroom_members DROP CONSTRAINT IF EXISTS classroom_members_status_check;
ALTER TABLE public.classroom_members ADD CONSTRAINT classroom_members_status_check 
  CHECK (status IN ('invited', 'active', 'pending_approval', 'inactive'));

-- 5. Konfigurasi Row Level Security (RLS) agar dapat diakses oleh Siswa & Guru
ALTER TABLE public.classrooms ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow all access to classrooms" ON public.classrooms;
DROP POLICY IF EXISTS "Allow full access to classrooms for authenticated" ON public.classrooms;
CREATE POLICY "Allow all access to classrooms" ON public.classrooms FOR ALL USING (true) WITH CHECK (true);

ALTER TABLE public.classroom_members ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow all access to classroom_members" ON public.classroom_members;
CREATE POLICY "Allow all access to classroom_members" ON public.classroom_members FOR ALL USING (true) WITH CHECK (true);

-- 6. Pasang index untuk performa pencarian kode kelas & status siswa
CREATE INDEX IF NOT EXISTS idx_classrooms_code_upper ON public.classrooms (UPPER(code));
CREATE INDEX IF NOT EXISTS idx_members_status ON public.classroom_members (status);
CREATE INDEX IF NOT EXISTS idx_members_student_email ON public.classroom_members (student_email);

