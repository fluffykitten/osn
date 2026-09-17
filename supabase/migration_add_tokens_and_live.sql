-- ==============================================================================
-- MIGRASI SUPABASE LENGKAP: Menambahkan Kolom Token & Tabel Sesi Live Worksheet OSN Kimia
-- Jalankan skrip ini di: Supabase Dashboard -> SQL Editor -> New Query -> Run
-- ==============================================================================

-- 1. Tambahkan kolom access_token dan is_live_monitored ke tabel worksheets
ALTER TABLE public.worksheets 
ADD COLUMN IF NOT EXISTS access_token TEXT;

ALTER TABLE public.worksheets 
ADD COLUMN IF NOT EXISTS is_live_monitored BOOLEAN DEFAULT true;

-- Tambahkan constraint UNIQUE pada access_token jika belum ada
DO $$ BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = 'worksheets_access_token_key'
    ) THEN
        ALTER TABLE public.worksheets ADD CONSTRAINT worksheets_access_token_key UNIQUE (access_token);
    END IF;
END $$;

CREATE INDEX IF NOT EXISTS idx_worksheets_access_token ON public.worksheets (access_token);

-- 2. Buat tabel worksheet_live_sessions (Pemantauan Progres Siswa Real-Time)
CREATE TABLE IF NOT EXISTS public.worksheet_live_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    worksheet_id BIGINT,
    access_token TEXT NOT NULL,
    student_id TEXT NOT NULL,
    student_name TEXT NOT NULL,
    current_question_index INT DEFAULT 0,
    status TEXT DEFAULT 'active',
    live_draft JSONB DEFAULT '{}'::jsonb,
    total_score NUMERIC DEFAULT 0,
    max_score NUMERIC DEFAULT 100,
    last_active_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(access_token, student_id)
);

CREATE INDEX IF NOT EXISTS idx_live_sessions_token ON public.worksheet_live_sessions (access_token);
CREATE INDEX IF NOT EXISTS idx_live_sessions_student ON public.worksheet_live_sessions (student_id);

-- 3. Buat tabel worksheet_live_comments (Umpan Balik / Catatan Guru Real-Time)
CREATE TABLE IF NOT EXISTS public.worksheet_live_comments (
    id BIGSERIAL PRIMARY KEY,
    access_token TEXT NOT NULL,
    student_id TEXT NOT NULL,
    teacher_id TEXT NOT NULL,
    teacher_name TEXT DEFAULT 'Guru Pembina',
    question_id BIGINT NOT NULL,
    comment_text TEXT NOT NULL,
    is_read BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_live_comments_token_student ON public.worksheet_live_comments (access_token, student_id);

-- 4. Buat tabel worksheet_submissions (Riwayat Pengerjaan & Analisis Silabus Siswa)
CREATE TABLE IF NOT EXISTS public.worksheet_submissions (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    question_id BIGINT NOT NULL,
    pillar_number INT NOT NULL,
    subtopic TEXT,
    total_score NUMERIC NOT NULL,
    max_score NUMERIC NOT NULL,
    status TEXT NOT NULL,
    elapsed_seconds INT DEFAULT 0,
    model_used TEXT,
    criteria_breakdown JSONB,
    strengths TEXT[],
    missing_points TEXT[],
    misconception_diagnosis TEXT,
    overall_feedback TEXT,
    student_work_steps TEXT,
    student_final_answer TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_submissions_user_id ON public.worksheet_submissions (user_id);
CREATE INDEX IF NOT EXISTS idx_submissions_question_id ON public.worksheet_submissions (question_id);

-- 5. Buat tabel worksheet_enrollments (Daftar Tugas / Worksheet yang Diambil Siswa)
CREATE TABLE IF NOT EXISTS public.worksheet_enrollments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id TEXT NOT NULL,
    worksheet_id BIGINT,
    access_token TEXT NOT NULL,
    status TEXT DEFAULT 'not_started',
    score NUMERIC,
    max_score NUMERIC,
    progress_percent INT DEFAULT 0,
    enrolled_at TIMESTAMPTZ DEFAULT NOW(),
    last_accessed_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(student_id, access_token)
);

CREATE INDEX IF NOT EXISTS idx_enrollments_student_id ON public.worksheet_enrollments (student_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_token ON public.worksheet_enrollments (access_token);

-- 6. Aktifkan Row Level Security (RLS) dan berikan izin Public Read/Write untuk Siswa & Guru
ALTER TABLE public.worksheets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.worksheet_live_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.worksheet_live_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.worksheet_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.worksheet_enrollments ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
    DROP POLICY IF EXISTS "Allow public full access to worksheets" ON public.worksheets;
    CREATE POLICY "Allow public full access to worksheets" ON public.worksheets FOR ALL USING (true) WITH CHECK (true);
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
    DROP POLICY IF EXISTS "Allow public full access to worksheet_live_sessions" ON public.worksheet_live_sessions;
    CREATE POLICY "Allow public full access to worksheet_live_sessions" ON public.worksheet_live_sessions FOR ALL USING (true) WITH CHECK (true);
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
    DROP POLICY IF EXISTS "Allow public full access to worksheet_live_comments" ON public.worksheet_live_comments;
    CREATE POLICY "Allow public full access to worksheet_live_comments" ON public.worksheet_live_comments FOR ALL USING (true) WITH CHECK (true);
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
    DROP POLICY IF EXISTS "Allow public full access to worksheet_submissions" ON public.worksheet_submissions;
    CREATE POLICY "Allow public full access to worksheet_submissions" ON public.worksheet_submissions FOR ALL USING (true) WITH CHECK (true);
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
    DROP POLICY IF EXISTS "Allow public full access to worksheet_enrollments" ON public.worksheet_enrollments;
    CREATE POLICY "Allow public full access to worksheet_enrollments" ON public.worksheet_enrollments FOR ALL USING (true) WITH CHECK (true);
EXCEPTION WHEN duplicate_object THEN null; END $$;
