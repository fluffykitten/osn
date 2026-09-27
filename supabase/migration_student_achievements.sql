-- Migration: Student Achievements System (61 Badges)
-- Menyimpan status lencana pencapaian, progress numerik, dan waktu unlock per akun siswa

CREATE TABLE IF NOT EXISTS public.student_achievements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  achievement_id TEXT NOT NULL,
  current_value NUMERIC NOT NULL DEFAULT 0,
  target_value NUMERIC NOT NULL DEFAULT 1,
  progress NUMERIC NOT NULL DEFAULT 0,
  is_unlocked BOOLEAN NOT NULL DEFAULT FALSE,
  unlocked_at TIMESTAMPTZ,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT uq_student_achievement UNIQUE (student_id, achievement_id)
);

-- Indexing untuk query cepat
CREATE INDEX IF NOT EXISTS idx_student_achievements_student ON public.student_achievements(student_id);
CREATE INDEX IF NOT EXISTS idx_student_achievements_unlocked ON public.student_achievements(student_id, is_unlocked);

-- Enable Row Level Security (RLS)
ALTER TABLE public.student_achievements ENABLE ROW LEVEL SECURITY;

-- Policies
DROP POLICY IF EXISTS "Students can view their own achievements" ON public.student_achievements;
CREATE POLICY "Students can view their own achievements"
  ON public.student_achievements
  FOR SELECT
  TO authenticated
  USING (student_id = auth.uid());

DROP POLICY IF EXISTS "Students can upsert their own achievements" ON public.student_achievements;
CREATE POLICY "Students can upsert their own achievements"
  ON public.student_achievements
  FOR ALL
  TO authenticated
  USING (student_id = auth.uid())
  WITH CHECK (student_id = auth.uid());

GRANT ALL ON public.student_achievements TO authenticated;
GRANT ALL ON public.student_achievements TO service_role;
