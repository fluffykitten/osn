-- ==============================================================================
-- MIGRASI GAMIFIKASI & SINKRONISASI XP / LEVEL SISWA (OSN KIMIA)
-- ==============================================================================

-- 1. Pastikan kolom xp, level, dan current_streak tersedia di tabel public.profiles
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = 'profiles' 
        AND column_name = 'xp'
    ) THEN
        ALTER TABLE public.profiles ADD COLUMN xp INT DEFAULT 0;
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = 'profiles' 
        AND column_name = 'level'
    ) THEN
        ALTER TABLE public.profiles ADD COLUMN level INT DEFAULT 1;
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = 'profiles' 
        AND column_name = 'current_streak'
    ) THEN
        ALTER TABLE public.profiles ADD COLUMN current_streak INT DEFAULT 0;
    END IF;
END $$;

-- 2. Indeks untuk optimasi query Leaderboard berbasis XP
CREATE INDEX IF NOT EXISTS idx_profiles_xp_desc ON public.profiles(xp DESC);

-- 3. Stored Procedure Atomis untuk menambah XP dan mengembalikan total terbaru
CREATE OR REPLACE FUNCTION public.increment_user_xp(
    target_user_id TEXT,
    xp_to_add INT
)
RETURNS TABLE (
    updated_xp INT,
    updated_level INT
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_new_xp INT;
    v_new_level INT;
BEGIN
    UPDATE public.profiles
    SET 
        xp = COALESCE(xp, 0) + GREATEST(0, xp_to_add),
        updated_at = NOW()
    WHERE id::text = target_user_id
    RETURNING xp INTO v_new_xp;

    -- Perhitungan level dasar (fallback ke level 1 jika profil belum ada)
    IF v_new_xp IS NULL THEN
        updated_xp := 0;
        updated_level := 1;
        RETURN NEXT;
        RETURN;
    END IF;

    -- Update level di database berdasarkan ambang batas 20 level tokoh kimia
    -- Level 1: 0, Level 2: 250, Level 3: 600, Level 4: 1050, Level 5: 1600, dst.
    IF v_new_xp >= 21850 THEN v_new_level := 20;
    ELSIF v_new_xp >= 19800 THEN v_new_level := 19;
    ELSIF v_new_xp >= 17850 THEN v_new_level := 18;
    ELSIF v_new_xp >= 16000 THEN v_new_level := 17;
    ELSIF v_new_xp >= 14250 THEN v_new_level := 16;
    ELSIF v_new_xp >= 12600 THEN v_new_level := 15;
    ELSIF v_new_xp >= 11050 THEN v_new_level := 14;
    ELSIF v_new_xp >= 9600  THEN v_new_level := 13;
    ELSIF v_new_xp >= 8250  THEN v_new_level := 12;
    ELSIF v_new_xp >= 7000  THEN v_new_level := 11;
    ELSIF v_new_xp >= 5850  THEN v_new_level := 10;
    ELSIF v_new_xp >= 4800  THEN v_new_level := 9;
    ELSIF v_new_xp >= 3850  THEN v_new_level := 8;
    ELSIF v_new_xp >= 3000  THEN v_new_level := 7;
    ELSIF v_new_xp >= 2250  THEN v_new_level := 6;
    ELSIF v_new_xp >= 1600  THEN v_new_level := 5;
    ELSIF v_new_xp >= 1050  THEN v_new_level := 4;
    ELSIF v_new_xp >= 600   THEN v_new_level := 3;
    ELSIF v_new_xp >= 250   THEN v_new_level := 2;
    ELSE v_new_level := 1;
    END IF;

    UPDATE public.profiles
    SET level = v_new_level
    WHERE id::text = target_user_id;

    updated_xp := v_new_xp;
    updated_level := v_new_level;
    RETURN NEXT;
END;
$$;

GRANT EXECUTE ON FUNCTION public.increment_user_xp(TEXT, INT) TO anon, authenticated, service_role;
