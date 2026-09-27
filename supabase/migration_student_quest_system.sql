-- ==============================================================================
-- MIGRASI SISTEM QUEST & PAPAN MISI BELAJAR SISWA (OSN KIMIA)
-- ==============================================================================

-- 1. Buat tabel student_quest_progress untuk melacak status misi per akun siswa
CREATE TABLE IF NOT EXISTS public.student_quest_progress (
    id TEXT PRIMARY KEY, -- format: {user_id}_{quest_id}
    user_id TEXT NOT NULL,
    quest_id TEXT NOT NULL,
    pillar_number INT NOT NULL,
    quest_type TEXT NOT NULL CHECK (quest_type IN ('sma_foundation', 'olympiad_theory', 'practice_drill', 'milestone')),
    status TEXT NOT NULL DEFAULT 'not_started' CHECK (status IN ('not_started', 'in_progress', 'ready_to_claim', 'completed')),
    progress_percent INT DEFAULT 0,
    is_claimed BOOLEAN DEFAULT false,
    xp_reward INT DEFAULT 50,
    claimed_at TIMESTAMPTZ,
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Indeks untuk query cepat berdasarkan user_id dan pillar_number
CREATE INDEX IF NOT EXISTS idx_quest_progress_user_id ON public.student_quest_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_quest_progress_pillar ON public.student_quest_progress(pillar_number);
CREATE INDEX IF NOT EXISTS idx_quest_progress_user_status ON public.student_quest_progress(user_id, status);

-- 3. Row Level Security (RLS)
ALTER TABLE public.student_quest_progress ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'student_quest_progress' AND policyname = 'Allow user full access to own quests') THEN
        CREATE POLICY "Allow user full access to own quests" 
        ON public.student_quest_progress 
        FOR ALL 
        USING (auth.uid()::text = user_id OR user_id = 'default-student' OR auth.role() = 'service_role')
        WITH CHECK (auth.uid()::text = user_id OR user_id = 'default-student' OR auth.role() = 'service_role');
    END IF;
    
    -- Fallback policy untuk mode anonim / demo jika RLS aktif
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'student_quest_progress' AND policyname = 'Allow public select and insert on quests') THEN
        CREATE POLICY "Allow public select and insert on quests"
        ON public.student_quest_progress
        FOR ALL
        USING (true)
        WITH CHECK (true);
    END IF;
END $$;
