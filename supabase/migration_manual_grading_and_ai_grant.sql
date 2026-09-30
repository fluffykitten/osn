-- ==============================================================================
-- MIGRASI SUPABASE: HAK AKSES AI GRADING & PENILAIAN MANUAL GURU (SPEEDGRADER)
-- Eksekusi di Supabase Dashboard -> SQL Editor -> New Query -> Run
-- ==============================================================================

-- 1. Tambah kolom hak akses AI Grading pada tabel public.profiles (Default: FALSE)
ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS ai_grading_access BOOLEAN DEFAULT false;

CREATE INDEX IF NOT EXISTS idx_profiles_ai_grading ON public.profiles(ai_grading_access);

-- 2. Tambah kolom metadata penilaian guru pada tabel public.worksheet_submissions
ALTER TABLE public.worksheet_submissions
ADD COLUMN IF NOT EXISTS is_graded BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS grading_type TEXT DEFAULT 'manual', -- 'manual' | 'ai'
ADD COLUMN IF NOT EXISTS teacher_feedback TEXT,
ADD COLUMN IF NOT EXISTS graded_by_teacher_id TEXT,
ADD COLUMN IF NOT EXISTS graded_by_teacher_name TEXT,
ADD COLUMN IF NOT EXISTS graded_at TIMESTAMPTZ;

-- 3. Indeks untuk optimasi pencarian tugas yang belum dinilai
CREATE INDEX IF NOT EXISTS idx_submissions_pending ON public.worksheet_submissions(is_graded, created_at);
CREATE INDEX IF NOT EXISTS idx_submissions_teacher ON public.worksheet_submissions(graded_by_teacher_id);
