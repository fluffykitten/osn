-- ==============================================================================
-- MIGRASI SUPABASE: TAMBAH KOLOM METADATA KURIKULUM SMA & MODUL UNTUK BANK SOAL
-- Eksekusi skrip ini di: Supabase Dashboard -> SQL Editor -> New Query -> Run
-- ==============================================================================

-- 1. Tambah kolom metadata kurikulum SMA dan modul pada tabel questions
ALTER TABLE public.questions
ADD COLUMN IF NOT EXISTS module_id INT,
ADD COLUMN IF NOT EXISTS curriculum TEXT DEFAULT 'osn',
ADD COLUMN IF NOT EXISTS grade TEXT,
ADD COLUMN IF NOT EXISTS sma_topic_number INT,
ADD COLUMN IF NOT EXISTS sma_topic_id INT,
ADD COLUMN IF NOT EXISTS curriculum_phase TEXT;

-- 2. Indexing untuk pencarian cepat kurikulum SMA & modul
CREATE INDEX IF NOT EXISTS idx_questions_curriculum ON public.questions (curriculum);
CREATE INDEX IF NOT EXISTS idx_questions_module_id ON public.questions (module_id);
CREATE INDEX IF NOT EXISTS idx_questions_sma_topic ON public.questions (sma_topic_number);
CREATE INDEX IF NOT EXISTS idx_questions_grade ON public.questions (grade);
