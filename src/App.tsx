import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { WhiteboardHeaderProvider } from './contexts/WhiteboardHeaderContext';

// Auth Page
import { LoginPage } from './pages/auth/LoginPage';

// Public Landing Page (Informasi platform, fitur, kapabilitas, aksi masuk/daftar siswa)
import { LandingPage } from './pages/public/LandingPage';

// Student Pages
import { Roadmap } from './pages/student/Roadmap';
import { MaterialsDatabase } from './pages/student/MaterialsDatabase';
import { PracticeBank } from './pages/student/PracticeBank';
import { StudentWorksheetList } from './pages/student/StudentWorksheetList';
import { StudentClassroomView } from './pages/student/StudentClassroomView';
import { Worksheet } from './pages/student/Worksheet';
import { Profile } from './pages/student/Profile';
import { StudentDashboard } from './pages/student/StudentDashboard';
import { StudentProgressReport } from './pages/student/StudentProgressReport';
import { StudentSettings } from './pages/student/StudentSettings';
import { StudentLockedGate } from './pages/student/StudentLockedGate';
import { RequireClassroom } from './components/common/RequireClassroom';

// Teacher Studio Pages
import { TeacherDashboard } from './pages/teacher/TeacherDashboard';
import { AiQuestionStudio } from './pages/teacher/AiQuestionStudio';
import { WorksheetBuilder } from './pages/teacher/WorksheetBuilder';
import { LiveClassroomDashboard } from './pages/teacher/LiveClassroomDashboard';
import { ClassroomManager } from './pages/teacher/ClassroomManager';
import { ClassroomDetail } from './pages/teacher/ClassroomDetail';

// Whiteboard (STEMBoard) Pages
import { WhiteboardCatalogPage } from './pages/whiteboard/WhiteboardCatalogPage';
import { WhiteboardPage } from './pages/whiteboard/WhiteboardPage';

/**
 * Route guard untuk memproteksi seluruh halaman internal aplikasi agar tidak bisa diakses Tamu (Guest) sebelum login
 */
function RequireAuth({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-8 h-8 border-3 border-sky-200 border-t-sky-600 rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}

/**
 * Route guard untuk membatasi fitur Bank Soal dan Studio Guru khusus bagi Guru dan Administrator
 */
function TeacherOnly({ children }: { children: React.ReactNode }) {
  const { user, isTeacher, isAdmin, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-8 h-8 border-3 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!isTeacher && !isAdmin) {
    return <Navigate to="/worksheet" replace />;
  }

  return <>{children}</>;
}

/**
 * Route guard untuk membatasi fitur profil dan kelas binaan siswa khusus bagi Siswa
 * (Jika Guru/Admin membukanya, dialihkan ke Studio Guru /teacher)
 */
function StudentOnly({ children }: { children: React.ReactNode }) {
  const { user, isTeacher, isAdmin, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-8 h-8 border-3 border-emerald-200 border-t-emerald-600 rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (isTeacher || isAdmin) {
    return <Navigate to="/teacher" replace />;
  }

  return <>{children}</>;
}

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  // Tangkap jika tautan pemulihan sandi Supabase diarahkan ke Site URL (misal root /)
  useEffect(() => {
    const isRecovery =
      window.location.hash.includes('type=recovery') ||
      window.location.search.includes('type=recovery') ||
      sessionStorage.getItem('osn_is_password_recovery') === 'true';

    if (isRecovery && location.pathname !== '/login') {
      navigate(
        {
          pathname: '/login',
          search: '?mode=reset',
          hash: window.location.hash,
        },
        { replace: true }
      );
    }
  }, [location, navigate]);

  // Mode pengerjaan lembar kerja (/worksheet/:type/:id) atau papan tulis (/whiteboard/:id) menggunakan tata letak full-screen fixed
  const isFullScreenWorkspace =
    (location.pathname.startsWith('/worksheet/') &&
      location.pathname.replace('/worksheet/', '').trim().length > 0) ||
    (location.pathname.startsWith('/whiteboard/') &&
      location.pathname.replace('/whiteboard/', '').trim().length > 0);

  return (
    <div
      className={`flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 ${
        isFullScreenWorkspace ? 'h-screen overflow-hidden' : 'min-h-screen'
      }`}
    >
      <Navbar />

      <main
        className={`flex-1 flex flex-col ${
          isFullScreenWorkspace ? 'h-[calc(100vh-64px)] overflow-hidden bg-slate-200/40' : ''
        }`}
      >
        <Routes>
          {/* Landing Page: Informasi web, kapabilitas, fitur, tombol Masuk, Daftar Siswa, Lupa Password, Tentang Creator */}
          <Route path="/" element={<LandingPage />} />

          {/* Autentikasi Pengguna */}
          <Route path="/login" element={<LoginPage />} />

          {/* Peta Roadmap 10 Topik Silabus Penguasaan Kimia (Wajib Login & Kelas Aktif) */}
          <Route
            path="/roadmap"
            element={
              <RequireAuth>
                <RequireClassroom>
                  <Roadmap />
                </RequireClassroom>
              </RequireAuth>
            }
          />

          {/* Database Materi OSN Kimia & Materi Dasar SMA (Wajib Login & Kelas Aktif) */}
          <Route
            path="/materi"
            element={
              <RequireAuth>
                <RequireClassroom>
                  <MaterialsDatabase />
                </RequireClassroom>
              </RequireAuth>
            }
          />
          <Route
            path="/materi/sma/:id"
            element={
              <RequireAuth>
                <RequireClassroom>
                  <MaterialsDatabase />
                </RequireClassroom>
              </RequireAuth>
            }
          />
          <Route
            path="/materi/:id"
            element={
              <RequireAuth>
                <RequireClassroom>
                  <MaterialsDatabase />
                </RequireClassroom>
              </RequireAuth>
            }
          />

          {/* Student Experience */}
          {/* Dashboard Utama Siswa (Wajib Siswa & Kelas Aktif) */}
          <Route
            path="/student/dashboard"
            element={
              <StudentOnly>
                <RequireClassroom>
                  <StudentDashboard />
                </RequireClassroom>
              </StudentOnly>
            }
          />

          {/* Progress Report & Radar Diagnostik Siswa */}
          <Route
            path="/student/progress"
            element={
              <StudentOnly>
                <RequireClassroom>
                  <StudentProgressReport />
                </RequireClassroom>
              </StudentOnly>
            }
          />

          {/* Pengaturan Akun Siswa (Bisa diakses kapan saja untuk edit profil / cek kelas) */}
          <Route
            path="/student/settings"
            element={
              <StudentOnly>
                <StudentSettings />
              </StudentOnly>
            }
          />

          {/* Halaman Standalone Aktivasi Kode Kelas */}
          <Route
            path="/join-class"
            element={
              <RequireAuth>
                <StudentLockedGate />
              </RequireAuth>
            }
          />

          {/* Halaman Worksheet Siswa: Daftar & Koleksi Worksheet yang Dimiliki Siswa */}
          <Route
            path="/worksheet"
            element={
              <RequireAuth>
                <RequireClassroom>
                  <StudentWorksheetList />
                </RequireClassroom>
              </RequireAuth>
            }
          />
          {/* Halaman Detail Kelas Khusus Siswa */}
          <Route
            path="/student/classes/:id"
            element={
              <StudentOnly>
                <StudentClassroomView />
              </StudentOnly>
            }
          />
          <Route
            path="/student/classroom/:id"
            element={
              <StudentOnly>
                <StudentClassroomView />
              </StudentOnly>
            }
          />
          {/* Lembar Kerja Pengerjaan Interaktif Siswa */}
          <Route
            path="/worksheet/:type/:id"
            element={
              <RequireAuth>
                <RequireClassroom>
                  <Worksheet />
                </RequireClassroom>
              </RequireAuth>
            }
          />

          {/* Redirect Rute Profil Lama ke Student Progress Report */}
          <Route path="/profile" element={<Navigate to="/student/progress" replace />} />
          <Route path="/leaderboard" element={<Navigate to="/roadmap" replace />} />

          {/* Fitur Bank Soal (Dapat Diakses Siswa & Guru) */}
          <Route
            path="/practice"
            element={
              <RequireAuth>
                <RequireClassroom>
                  <PracticeBank />
                </RequireClassroom>
              </RequireAuth>
            }
          />

          {/* Teacher Studio & Classroom Management (Khusus Guru & Admin) */}
          <Route
            path="/teacher"
            element={
              <TeacherOnly>
                <TeacherDashboard />
              </TeacherOnly>
            }
          />
          <Route
            path="/teacher/classes"
            element={
              <TeacherOnly>
                <ClassroomManager />
              </TeacherOnly>
            }
          />
          <Route
            path="/teacher/classes/:id"
            element={
              <TeacherOnly>
                <ClassroomDetail />
              </TeacherOnly>
            }
          />
          <Route
            path="/teacher/ai-studio"
            element={
              <TeacherOnly>
                <AiQuestionStudio />
              </TeacherOnly>
            }
          />
          <Route
            path="/teacher/worksheets/new"
            element={
              <TeacherOnly>
                <WorksheetBuilder />
              </TeacherOnly>
            }
          />
          <Route
            path="/teacher/worksheets/edit/:id"
            element={
              <TeacherOnly>
                <WorksheetBuilder />
              </TeacherOnly>
            }
          />
          <Route
            path="/teacher/live/:token"
            element={
              <TeacherOnly>
                <LiveClassroomDashboard />
              </TeacherOnly>
            }
          />

          {/* STEM Interactive Whiteboard (Guru & Siswa) */}
          <Route
            path="/whiteboard"
            element={
              <RequireAuth>
                <WhiteboardCatalogPage />
              </RequireAuth>
            }
          />
          <Route
            path="/whiteboard/:id"
            element={
              <RequireAuth>
                <WhiteboardPage />
              </RequireAuth>
            }
          />
          <Route
            path="/whiteboard/room/:roomCode"
            element={
              <RequireAuth>
                <WhiteboardPage />
              </RequireAuth>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {!isFullScreenWorkspace && <Footer />}
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <WhiteboardHeaderProvider>
          <AppContent />
        </WhiteboardHeaderProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
