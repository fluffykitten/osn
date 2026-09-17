# Laporan Diagnosa & Blueprint Pembenahan Sistem
## Pendaftaran Akun, Membership, Storage, dan Privilege Access (Siswa & Guru)

Dokumen ini memuat analisis mendalam mengenai status implementasi saat ini, kelemahan arsitektur, celah keamanan, serta rekomendasi solusi untuk pengembangan portal **OSN Kimia Mastery**.

---

## 1. Sistem Pendaftaran Akun Baru (User Registration & Auth Lifecycle)

### A. Kondisi Terimplementasi Saat Ini
- **Komponen Utama**:
  - Frontend View: [`src/pages/auth/LoginPage.tsx`](file:///c:/osn/src/pages/auth/LoginPage.tsx)
  - State & Auth Service: [`src/contexts/AuthContext.tsx`](file:///c:/osn/src/contexts/AuthContext.tsx)
  - Database Provider: Supabase Auth (`supabase.auth.signUp`, `supabase.auth.signInWithPassword`)
- **Formulir Input**:
  - Mode pendaftaran meminta: **Nama Lengkap**, **Email**, **Kata Sandi**, dan **Pilihan Peran (Radio Button: Siswa / Guru)**.
- **1-Click Demo Login**:
  - Disediakan tombol jalan pintas cepat untuk akun demo:
    - Akun Guru: `guru@osnkimia.id` (Password: `354123`)
    - Akun Siswa: `siswa@osnkimia.id` (Password: `354123`)

### B. Hasil Diagnosa & Masalah Krusial
1. **Fallback Bypass Otomatis yang Terlalu Agresif (*Ghost Local Accounts*)**:
   - Jika `supabase.auth.signUp()` mengembalikan error (misal karena *Rate Limit*, *Email Tidak Valid*, atau *Supabase Auth Disabled*), sistem secara otomatis mem-bypass error tersebut dan membuat sesi tiruan (*dummy user*) di `localStorage` dengan ID acak `student-[timestamp]`.
   - **Dampak Negatif**: Pengguna merasa sudah berhasil mendaftar, padahal akunnya tidak pernah tercatat di Supabase Auth pusat. Saat berpindah browser/perangkat, akun tersebut tidak bisa digunakan untuk login.
2. **Ketiadaan Alur Verifikasi Email (*Email Confirmation*)**:
   - Secara default, Supabase Auth mengirimkan email verifikasi dan tidak mengembalikan sesi aktif (`session === null`) sebelum tautan di email diklik.
   - Frontend saat ini langsung mengarahkan pengguna ke dashboard, sehingga user berstatus setengah-login dan gagal melakukan query cloud.
3. **Pelanggaran Foreign Key pada Tabel `profiles`**:
   - Tabel `public.profiles` di Supabase memiliki relasi constraint `profiles.id REFERENCES auth.users(id)`.
   - Ketika proses registrasi masuk ke mode fallback lokal dengan ID buatan non-UUID (seperti `user-171...`), penulisan profil ke database Supabase gagal 100% (*Foreign Key Violation*).
4. **Inkonsistensi Nomenklatur Peran (Role)**:
   - Di `AuthContext.tsx` dan database digunakan `'student' | 'teacher'`, namun di sistem gamifikasi dan local storage digunakan `'siswa' | 'guru'`.

---

## 2. Sistem Membership untuk Guru dan Siswa

### A. Kondisi Terimplementasi Saat Ini
- **Ketiadaan Skema Membership Akun**:
  - Saat ini **belum ada skema membership atau paket langganan** (misal: *Free*, *Pro Siswa*, *Sekolah / Guru Pembina Premium*).
  - Pembeda hak akses saat ini murni hanya berbasis kolom `role` di tabel `profiles` (`student` vs `teacher`).
- **Membership Level Kelas Binaan (*Classroom Members*)**:
  - Di [`src/services/classroomService.ts`](file:///c:/osn/src/services/classroomService.ts), sudah ada pencatatan keanggotaan kelas di tabel `classroom_members` dengan status:
    - `invited` (Diundang via email)
    - `active` (Telah menerima dan bergabung)
    - `pending_approval` (Menunggu persetujuan guru)
  - Ini merupakan relasi kelas internal, bukan membership lisensi aplikasi.

### B. Hasil Diagnosa & Masalah Krusial
1. **Ketiadaan Pembatasan Kuota Fitur (Usage Quota & Fair Use)**:
   - **Guru**: Dapat membuat kelas, bank soal, dan paket ujian tanpa batasan kuota.
   - **Siswa**: Dapat meminta penilaian AI (LLM Grading) berkali-kali tanpa batas kuota harian.
   - Belum ada atribut pelacak: `tier`, `valid_until`, `max_students`, `max_worksheets`, `ai_eval_quota_remaining`.
2. **Pencapaian Gamifikasi Rentan Hilang**:
   - Total XP, level medali, dan streak belajar masih disimpan murni di `localStorage` (`osn_gamification_state`).
   - Apabila siswa membersihkan riwayat browser atau berganti laptop, data gamifikasi kembali ke nilai awal (level 2, XP 320).

---

## 3. Sistem Storage Data untuk Siswa dan Guru

### A. Arsitektur Saat Ini: *Dual Hybrid Storage* (Cloud + Local Buffer)

| Pengguna | Data yang Dikelola | Lokasi Penyimpanan Saat Ini | Mekanisme & Status |
| :--- | :--- | :--- | :--- |
| **Siswa** | **Draft Pengerjaan Worksheet** | `localStorage` (`osn_ws_draft_...`) + Supabase `worksheet_live_sessions.live_draft` | ✅ Berjalan baik (Auto-save & Cloud Sync). |
| **Siswa** | **Riwayat Submission & Evaluasi AI** | `localStorage` (`osn_student_submissions`) + Supabase `worksheet_submissions` | ⚠️ Tersimpan lokal, sinkronisasi cloud bersifat parsial jika offline. |
| **Siswa** | **Peta Radar 10 Topik Silabus** | Dihitung dinamis on-the-fly dari `localStorage` | ❌ Hilang jika ganti perangkat/browser. |
| **Guru** | **Bank Soal (Questions)** | Supabase `questions`, `question_bookmarks` + fallback `BENCHMARK_QUESTIONS` | ✅ Tersimpan di cloud Supabase. |
| **Guru** | **Paket Lembar Kerja / Ujian** | Supabase `worksheets`, `worksheet_items` + `localStorage` (`osn_saved_worksheets_v1`) | ⚠️ Sering mengambil dari cache lokal jika koneksi lambat. |
| **Guru** | **Kelas Binaan & Penugasan** | Supabase `classrooms`, `classroom_members`, `classroom_assignments` | ✅ Berjalan hybrid (Cloud utama + cache lokal). |
| **Guru** | **Live Monitoring Siswa** | Supabase `worksheet_live_sessions` & `worksheet_live_comments` | ✅ Real-time online Supabase Channel. |

### B. Hasil Diagnosa & Masalah Krusial
1. **Fragmentasi User ID**:
   - Karena seringnya fallback lokal, ID siswa bisa berupa `student-demo-uuid`, `std-mu3e...`, atau UUID resmi Supabase. Hal ini menyebabkan rekaman di database Supabase terpecah ke ID yang berbeda-beda.
2. **Kapasitas Terbatas LocalStorage (Batas 5MB)**:
   - LocalStorage browser memiliki kuota 5MB per domain. Menyimpan puluhan naskah soal lengkap dengan kode KaTeX, rumus kimia, dan riwayat penilaian AI berisiko melebihi batas kuota browser.
3. **Ketiadaan Isolasi Kepemilikan Soal Guru**:
   - Soal yang dibuat oleh Guru A saat ini berada di tabel publik `questions` yang sama dengan Guru B tanpa pemfilteran `created_by` yang ketat.

---

## 4. Privilege Access Control untuk Siswa dan Guru

### A. Kondisi Terimplementasi Saat Ini
- **Proteksi Rute Frontend ([`src/App.tsx`](file:///c:/osn/src/App.tsx))**:
  - Diterapkan route guard `<TeacherOnly>`:
    - Rute khusus Guru: `/practice` (Bank Soal), `/teacher` (Studio Guru), `/teacher/classes` (Kelas Binaan), `/teacher/live/:token` (Live Monitoring Siswa), `/teacher/ai-studio` (Studio AI).
    - Rute Siswa / Terbuka: `/worksheet`, `/worksheet/:type/:id`, `/student/classes/:id`, `/profile`, `/materi`.
- **Navigasi Dinamis ([`src/components/common/Navbar.tsx`](file:///c:/osn/src/components/common/Navbar.tsx))**:
  - Menu Bank Soal, Kelas Binaan, dan Studio Guru disembunyikan secara kondisional jika terdeteksi sebagai Siswa.

### B. Hasil Diagnosa & Celah Keamanan Krusial
1. **Celah Pintu Belakang: *Guest Role Switcher* di Navbar**:
   - Pada bar navigasi atas untuk pengunjung yang belum login ([`Navbar.tsx` L260-L298](file:///c:/osn/src/components/common/Navbar.tsx#L260-L298)), terdapat tombol toggle mode tamu: `[🎓 Siswa]` / `[👨‍🏫 Guru]`.
   - **Kerentanan Fatal**: Pengunjung umum tanpa login dapat mengklik tombol ini menjadi **"Guru"** dan langsung memperoleh akses penuh ke seluruh halaman guru (Studio Guru, Bank Soal, Kelas Binaan, dan Generator Soal AI).
2. **Kebijakan Row Level Security (RLS) Database Terbuka Penuh**:
   - Di file SQL ([`supabase/schema.sql` L157-L185](file:///c:/osn/supabase/schema.sql#L157-L185)), seluruh tabel diamankan dengan RLS bertipe:
     ```sql
     CREATE POLICY "Allow public full access to ..." ON ... FOR ALL USING (true) WITH CHECK (true);
     ```
   - **Kerentanan Database**: Policy ini mengizinkan siapa saja (bahkan melalui `anon key` di console browser) untuk membaca, mengedit, atau menghapus seluruh tabel bank soal, lembar kerja guru, maupun jawaban siswa.

---

## 5. Matriks Perbandingan: Kondisi Saat Ini vs Target Ideal

| Fitur / Komponen | Kondisi Saat Ini (As-Is) | Target Pembenahan Ideal (To-Be) |
| :--- | :--- | :--- |
| **Registrasi Akun** | Sering fallback ke akun lokal palsu jika ada kendala Supabase. | Registrasi resmi Supabase Auth terpusat; feedback error yang jelas dan transparan. |
| **Profil User** | Insert manual dari frontend; sering gagal karena foreign key UUID. | Menggunakan Supabase Database Trigger `on_auth_user_created` (otomatis dan 100% konsisten). |
| **Peran (Role)** | Campuran `'student'/'teacher'` dan `'siswa'/'guru'`. | Baku menggunakan enum `UserRole`: `'student'` dan `'teacher'`. |
| **Membership Tier** | Tidak ada tier (semua fitur terbuka tanpa batas). | Terdapat tier: `free`, `pro`, `institution` dengan batas kuota AI & jumlah siswa. |
| **Penyimpanan Nilai & Radar**| Murni di Local Storage per browser. | Tersimpan permanen di tabel `worksheet_submissions` & `student_mastery_stats` di cloud. |
| **Proteksi Halaman Guru** | Dapat dibobol via tombol switcher tamu di navbar. | Wajib login dengan akun yang memiliki klaim `role: 'teacher'`. |
| **Keamanan Data (RLS)** | Full open `USING (true) WITH CHECK (true)`. | RLS berbasis `auth.uid()` & `role`. Guru hanya mengelola kelas/soal miliknya, Siswa hanya mengakses tugasnya. |

---

## 6. Blueprint & Roadmap Rencana Pembenahan Bertahap

### Fase 1: Pembenahan Autentikasi & Registrasi Bersih
1. Buat migration script SQL di Supabase:
   - Trigger otomatis `handle_new_user()` yang mengeksekusi pembuatan baris di `public.profiles` saat ada user baru terdaftar di `auth.users`.
2. Rapikan alur di [`AuthContext.tsx`](file:///c:/osn/src/contexts/AuthContext.tsx):
   - Hapus pembentukan *fake session* diam-diam.
   - Sediakan pesan status informatif jika email membutuhkan konfirmasi atau pendaftaran belum aktif.
   - Samakan seluruh penamaan peran menjadi `'student'` dan `'teacher'`.

### Fase 2: Skema Membership & Kuota Layanan
1. Tambahkan kolom pada tabel `profiles`:
   - `membership_tier`: `'free' | 'pro' | 'school'`
   - `valid_until`: Tanggal kedaluwarsa membership
   - `ai_quota_daily`: Sisa kuota harian penilaian AI
   - `school_name` / `institution`: Nama sekolah atau lembaga pembina
2. Tampilkan badge membership di Header Profil siswa dan guru.

### Fase 3: Penguncian Akses (Privilege & Security Hardening)
1. Hapus tombol toggle role tamu di [`Navbar.tsx`](file:///c:/osn/src/components/common/Navbar.tsx). Pengunjung yang ingin mencoba fitur guru harus login dengan akun guru (atau tombol demo terautentikasi resmi).
2. Perbarui aturan RLS di Supabase:
   - Guru: Hak `SELECT`, `INSERT`, `UPDATE`, `DELETE` untuk kelas, soal, dan lembar kerja miliknya (`created_by = auth.uid()`).
   - Siswa: Hak `SELECT` untuk soal di kelasnya, hak `INSERT`/`SELECT` untuk pengerjaan miliknya (`student_id = auth.uid()`).

### Fase 4: Cloud Storage Migration untuk Siswa
1. Pastikan seluruh submission evaluasi AI otomatis tersimpan ke tabel cloud Supabase `worksheet_submissions`.
2. Sinkronkan nilai radar 10 pilar silabus ke cloud sehingga siswa yang membuka dari HP, tablet, atau laptop sekolah tetap melihat perkembangan penguasaan materi yang sama.
