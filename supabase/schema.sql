-- ===================================================================
-- SCHEMA DATABASE SUPABASE UNTUK BANK SOAL OLIMPIADE KIMIA (OSN)
-- Eksekusi skrip ini di Supabase SQL Editor (https://supabase.com/dashboard/project/_/sql)
-- ===================================================================

-- 1. Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Enum Tipe Kesulitan & Gaya Soal
DO $$ BEGIN
    CREATE TYPE question_difficulty AS ENUM ('OSK', 'OSP', 'OSN', 'IChO');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE question_style AS ENUM ('structured', 'mcq', 'calculation', 'data_analysis');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE generation_variant AS ENUM ('manual', 'pdf_extracted', 'twin_parallel', 'scaffolding', 'challenging_extension');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- 3. Tabel Bank Soal (Questions)
CREATE TABLE IF NOT EXISTS public.questions (
    id BIGSERIAL PRIMARY KEY,
    pillar_number INT NOT NULL,
    subtopic TEXT NOT NULL,
    difficulty TEXT NOT NULL DEFAULT 'OSK',
    question_style TEXT NOT NULL DEFAULT 'structured',
    title TEXT NOT NULL,
    question_text TEXT NOT NULL,
    year INT,
    source_event TEXT,
    estimated_time_minutes INT DEFAULT 15,
    total_points INT DEFAULT 10,
    sub_questions JSONB DEFAULT '[]'::jsonb,
    data_tables JSONB DEFAULT '[]'::jsonb,
    diagram_url TEXT,
    solution_rubric TEXT,
    expected_final_answer TEXT,
    solution_framework_template TEXT,
    common_misconceptions JSONB DEFAULT '[]'::jsonb,
    generation_type TEXT DEFAULT 'manual',
    is_verified BOOLEAN DEFAULT true,
    tags TEXT[] DEFAULT ARRAY[]::TEXT[],
    custom_tags TEXT[] DEFAULT ARRAY[]::TEXT[],
    is_bookmarked BOOLEAN DEFAULT false,
    created_by TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexing untuk pencarian cepat Bank Soal
CREATE INDEX IF NOT EXISTS idx_questions_pillar ON public.questions (pillar_number);
CREATE INDEX IF NOT EXISTS idx_questions_difficulty ON public.questions (difficulty);
CREATE INDEX IF NOT EXISTS idx_questions_year ON public.questions (year);
CREATE INDEX IF NOT EXISTS idx_questions_tags ON public.questions USING GIN (tags);
CREATE INDEX IF NOT EXISTS idx_questions_custom_tags ON public.questions USING GIN (custom_tags);

-- 4. Tabel Worksheet (Paket Soal / Ujian)
CREATE TABLE IF NOT EXISTS public.worksheets (
    id BIGSERIAL PRIMARY KEY,
    type TEXT DEFAULT 'teacher_assignment',
    title TEXT NOT NULL,
    description TEXT,
    classroom_id BIGINT,
    created_by TEXT,
    time_limit_minutes INT DEFAULT 60,
    pass_score INT DEFAULT 75,
    is_published BOOLEAN DEFAULT false,
    selected_question_ids BIGINT[] DEFAULT ARRAY[]::BIGINT[],
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Tabel Item Soal dalam Worksheet (Relasi Many-to-Many terurut)
CREATE TABLE IF NOT EXISTS public.worksheet_items (
    id BIGSERIAL PRIMARY KEY,
    worksheet_id BIGINT REFERENCES public.worksheets(id) ON DELETE CASCADE,
    question_id BIGINT REFERENCES public.questions(id) ON DELETE CASCADE,
    order_index INT NOT NULL DEFAULT 1,
    points INT DEFAULT 10,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Tabel Tag Khusus & Bookmark Guru
CREATE TABLE IF NOT EXISTS public.question_bookmarks (
    id BIGSERIAL PRIMARY KEY,
    user_id TEXT NOT NULL,
    question_id BIGINT REFERENCES public.questions(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, question_id)
);

CREATE TABLE IF NOT EXISTS public.question_user_tags (
    id BIGSERIAL PRIMARY KEY,
    user_id TEXT NOT NULL,
    question_id BIGINT REFERENCES public.questions(id) ON DELETE CASCADE,
    tag_name TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, question_id, tag_name)
);

-- 7. Row Level Security (RLS) & Kebijakan Akses Terbuka (Public Read/Write untuk Mode Anonim/Guru)
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.worksheets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.worksheet_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.question_bookmarks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.question_user_tags ENABLE ROW LEVEL SECURITY;

-- Kebijakan akses penuh untuk anon & authenticated key
DO $$ BEGIN
    CREATE POLICY "Allow public full access to questions" ON public.questions FOR ALL USING (true) WITH CHECK (true);
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
    CREATE POLICY "Allow public full access to worksheets" ON public.worksheets FOR ALL USING (true) WITH CHECK (true);
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
    CREATE POLICY "Allow public full access to worksheet_items" ON public.worksheet_items FOR ALL USING (true) WITH CHECK (true);
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
    CREATE POLICY "Allow public full access to question_bookmarks" ON public.question_bookmarks FOR ALL USING (true) WITH CHECK (true);
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
    CREATE POLICY "Allow public full access to question_user_tags" ON public.question_user_tags FOR ALL USING (true) WITH CHECK (true);
EXCEPTION WHEN duplicate_object THEN null; END $$;
