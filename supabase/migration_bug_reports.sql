-- ==============================================================================
-- MIGRASI SUPABASE: SISTEM PELAPORAN BUG KONTEKSTUAL (BUG REPORTS)
-- Menyediakan tabel pencatatan bug terperinci dengan konteks halaman, bagian,
-- status perangkat, console errors, screenshot, serta alur penanganan admin.
-- Jalankan skrip ini di Supabase SQL Editor: https://supabase.com/dashboard/project/_/sql
-- ==============================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ------------------------------------------------------------------------------
-- 1. TABEL BUG REPORTS (bug_reports)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.bug_reports (
    id TEXT PRIMARY KEY,                       -- Format: BUG-17182938123-ABC atau UUID
    page_url TEXT NOT NULL,                    -- Contoh: '/worksheet/live/10?topic=3'
    page_title TEXT,                           -- Judul dokumen halaman web saat pelaporan
    section TEXT NOT NULL DEFAULT 'Umum',      -- Bagian halaman (e.g. 'Header', 'KaTeX Soal 2', 'Tabel Periodik')
    category TEXT NOT NULL DEFAULT 'other',    -- 'ui_ux' | 'logic_calculation' | 'katex_formula' | 'content_typo' | 'audio_media' | 'auth_account' | 'performance_crash' | 'other'
    severity TEXT NOT NULL DEFAULT 'medium',   -- 'low' | 'medium' | 'high' | 'critical'
    title TEXT NOT NULL,                       -- Ringkasan singkat permasalahan
    description TEXT NOT NULL,                 -- Deskripsi apa yang terjadi
    expected_behavior TEXT,                    -- Perilaku yang diharapkan pengguna
    steps_to_reproduce TEXT,                   -- Langkah reproduksi jika ada
    
    -- Metadata Pengguna & Lingkungan Klien
    reporter_id TEXT,                          -- ID Akun Supabase (opsional jika login)
    reporter_email TEXT,                       -- Email pelapor
    reporter_name TEXT,                        -- Nama pelapor
    reporter_role TEXT DEFAULT 'guest',        -- 'student' | 'teacher' | 'admin' | 'guest'
    user_agent TEXT,                           -- Spesifikasi Browser & OS
    viewport JSONB DEFAULT '{}'::jsonb,        -- Resolusi layar { width: 1920, height: 1080 }
    recent_logs JSONB DEFAULT '[]'::jsonb,     -- Rekaman error console JavaScript terakhir
    screenshot_data TEXT,                      -- Tangkapan layar base64 / URL gambar

    -- Manajemen Tata Kelola Admin
    status TEXT NOT NULL DEFAULT 'open',       -- 'open' | 'in_progress' | 'resolved' | 'closed'
    admin_notes TEXT,                          -- Catatan investigasi tim admin
    resolved_at TIMESTAMPTZ,
    resolved_by TEXT,                          -- Email admin yang menandai selesai
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indeks performa query bug_reports
CREATE INDEX IF NOT EXISTS idx_bug_reports_status ON public.bug_reports(status);
CREATE INDEX IF NOT EXISTS idx_bug_reports_severity ON public.bug_reports(severity);
CREATE INDEX IF NOT EXISTS idx_bug_reports_created ON public.bug_reports(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_bug_reports_reporter ON public.bug_reports(reporter_email);
CREATE INDEX IF NOT EXISTS idx_bug_reports_page_url ON public.bug_reports(page_url);

-- ------------------------------------------------------------------------------
-- 2. KEBIJAKAN ROW LEVEL SECURITY (RLS)
-- Mengizinkan pelaporan dari siapa saja (siswa/guru/tamu) dan akses baca/kelola admin
-- ------------------------------------------------------------------------------
ALTER TABLE public.bug_reports ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
    -- Policy: Izinkan semua pengunjung (anon & authenticated) memasukkan laporan bug
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'bug_reports' AND policyname = 'Allow public insert on bug_reports') THEN
        CREATE POLICY "Allow public insert on bug_reports" ON public.bug_reports FOR INSERT WITH CHECK (true);
    END IF;

    -- Policy: Izinkan pembacaan laporan (untuk dashboard admin atau pelapor)
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'bug_reports' AND policyname = 'Allow select on bug_reports') THEN
        CREATE POLICY "Allow select on bug_reports" ON public.bug_reports FOR SELECT USING (true);
    END IF;

    -- Policy: Izinkan pembaruan status oleh Admin
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'bug_reports' AND policyname = 'Allow update on bug_reports') THEN
        CREATE POLICY "Allow update on bug_reports" ON public.bug_reports FOR UPDATE USING (true);
    END IF;

    -- Policy: Izinkan penghapusan laporan
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'bug_reports' AND policyname = 'Allow delete on bug_reports') THEN
        CREATE POLICY "Allow delete on bug_reports" ON public.bug_reports FOR DELETE USING (true);
    END IF;
END $$;
