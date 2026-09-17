-- ==============================================================================
-- MIGRASI SUPABASE: TAMBAHKAN STATUS 'pending_approval' PADA classroom_members
-- Jalankan skrip ini di: Supabase Dashboard -> SQL Editor -> New Query -> Run
-- ==============================================================================

-- 1. Hapus constraint check lama jika ada
ALTER TABLE public.classroom_members 
DROP CONSTRAINT IF EXISTS classroom_members_status_check;

-- 2. Buat kembali constraint check dengan menambahkan 'pending_approval'
ALTER TABLE public.classroom_members 
ADD CONSTRAINT classroom_members_status_check 
CHECK (status IN ('invited', 'active', 'pending_approval'));

-- 3. Pastikan index status sudah terpasang untuk optimasi query filter
CREATE INDEX IF NOT EXISTS idx_members_status ON public.classroom_members(status);
