-- ==============================================================================
-- MIGRASI SUPABASE: PORTAL ADMINISTRATOR MANDIRI (ADMIN PORTAL)
-- Menyediakan tabel profil pengguna terpadu, penangguhan (suspend), status akun,
-- audit logs, dan kustomisasi materi kimia (material overrides).
-- Jalankan skrip ini di Supabase SQL Editor: https://supabase.com/dashboard/project/_/sql
-- ==============================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ------------------------------------------------------------------------------
-- 1. TABEL PROFIL PENGGUNA (profiles)
-- Membuat tabel jika belum ada, atau menambahkan kolom baru jika tabel sudah ada.
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.profiles (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'student',
    xp INT DEFAULT 100,
    level INT DEFAULT 1,
    current_streak INT DEFAULT 1,
    last_activity_date TIMESTAMPTZ DEFAULT NOW(),
    avatar_url TEXT,
    school_name TEXT DEFAULT 'SMA / Madrasah Mitra',
    grade_level TEXT DEFAULT '11',
    target_olympiad TEXT DEFAULT 'OSN',
    phone_whatsapp TEXT,
    membership_tier TEXT DEFAULT 'free',
    account_status TEXT DEFAULT 'active',
    is_suspended BOOLEAN DEFAULT false,
    suspended_reason TEXT,
    last_login_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Penambahan kolom-kolom baru jika tabel profiles sudah pernah dibuat sebelumnya
ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS is_suspended BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS suspended_reason TEXT,
ADD COLUMN IF NOT EXISTS last_login_at TIMESTAMPTZ,
ADD COLUMN IF NOT EXISTS account_status TEXT DEFAULT 'active',
ADD COLUMN IF NOT EXISTS school_name TEXT DEFAULT 'SMA / Madrasah Mitra',
ADD COLUMN IF NOT EXISTS grade_level TEXT DEFAULT '11',
ADD COLUMN IF NOT EXISTS target_olympiad TEXT DEFAULT 'OSN',
ADD COLUMN IF NOT EXISTS phone_whatsapp TEXT,
ADD COLUMN IF NOT EXISTS membership_tier TEXT DEFAULT 'free',
ADD COLUMN IF NOT EXISTS xp INT DEFAULT 100,
ADD COLUMN IF NOT EXISTS level INT DEFAULT 1,
ADD COLUMN IF NOT EXISTS current_streak INT DEFAULT 1;

-- Indeks performa query profiles
CREATE INDEX IF NOT EXISTS idx_profiles_email ON public.profiles(email);
CREATE INDEX IF NOT EXISTS idx_profiles_role ON public.profiles(role);
CREATE INDEX IF NOT EXISTS idx_profiles_is_suspended ON public.profiles(is_suspended);
CREATE INDEX IF NOT EXISTS idx_profiles_account_status ON public.profiles(account_status);

-- ------------------------------------------------------------------------------
-- 2. TABEL AUDIT LOGS (audit_logs)
-- Merekam seluruh aktivitas tata kelola sistem oleh Administrator
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.audit_logs (
    id BIGSERIAL PRIMARY KEY,
    actor_id TEXT NOT NULL,
    actor_email TEXT NOT NULL,
    action_type TEXT NOT NULL, -- e.g. 'USER_CREATED', 'USER_INVITED', 'ACTIVATION_EMAIL_SENT', 'USER_SUSPENDED', 'USER_ACTIVATED', 'PASSWORD_RESET', 'ROLE_CHANGED', 'MATERIAL_UPDATED', 'QUESTION_UPDATED', 'CLASSROOM_DELETED'
    target_resource TEXT,      -- e.g. 'users/admin-123', 'materials/1', 'questions/15', 'classrooms/3'
    description TEXT NOT NULL,
    details JSONB DEFAULT '{}'::jsonb,
    ip_address TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_audit_logs_action ON public.audit_logs(action_type);
CREATE INDEX IF NOT EXISTS idx_audit_logs_actor ON public.audit_logs(actor_email);
CREATE INDEX IF NOT EXISTS idx_audit_logs_created ON public.audit_logs(created_at DESC);

-- ------------------------------------------------------------------------------
-- 3. TABEL KUSTOMISASI MATERI KIMIA (material_overrides)
-- Memungkinkan Admin memperbarui konsep, rumus KaTeX, dan contoh soal secara live
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.material_overrides (
    id INT PRIMARY KEY,                       -- ID materi (1-10 untuk OSN, atau ID modul SMA)
    material_type TEXT NOT NULL DEFAULT 'osn', -- 'osn' | 'sma'
    title TEXT NOT NULL,
    category TEXT,
    level TEXT,
    read_time_minutes INT DEFAULT 20,
    summary TEXT,
    all_tags TEXT[] DEFAULT ARRAY[]::TEXT[],
    prerequisites JSONB DEFAULT '[]'::jsonb,
    core_concepts JSONB DEFAULT '[]'::jsonb,
    worked_examples JSONB DEFAULT '[]'::jsonb,
    updated_by TEXT,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_material_overrides_type ON public.material_overrides(material_type);

-- ------------------------------------------------------------------------------
-- 4. KEBIJAKAN ROW LEVEL SECURITY (RLS)
-- Mengamankan dan mengizinkan query baca/tulis sesuai kebutuhan portal
-- ------------------------------------------------------------------------------
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.material_overrides ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
    -- Policy profiles: Public select
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'profiles' AND policyname = 'Allow public select on profiles') THEN
        CREATE POLICY "Allow public select on profiles" ON public.profiles FOR SELECT USING (true);
    END IF;

    -- Policy profiles: Public insert
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'profiles' AND policyname = 'Allow public insert on profiles') THEN
        CREATE POLICY "Allow public insert on profiles" ON public.profiles FOR INSERT WITH CHECK (true);
    END IF;

    -- Policy profiles: Public update
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'profiles' AND policyname = 'Allow public update on profiles') THEN
        CREATE POLICY "Allow public update on profiles" ON public.profiles FOR UPDATE USING (true);
    END IF;

    -- Policy audit_logs
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'audit_logs' AND policyname = 'Allow public select on audit_logs') THEN
        CREATE POLICY "Allow public select on audit_logs" ON public.audit_logs FOR SELECT USING (true);
    END IF;
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'audit_logs' AND policyname = 'Allow insert on audit_logs') THEN
        CREATE POLICY "Allow insert on audit_logs" ON public.audit_logs FOR INSERT WITH CHECK (true);
    END IF;

    -- Policy material_overrides
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'material_overrides' AND policyname = 'Allow full access to material_overrides') THEN
        CREATE POLICY "Allow full access to material_overrides" ON public.material_overrides FOR ALL USING (true);
    END IF;
END $$;
