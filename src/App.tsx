import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { WhiteboardHeaderProvider } from './contexts/WhiteboardHeaderContext';

// Auth & Landing Pages (Eagerly Loaded for Immediate First Paint)
import { LoginPage } from './pages/auth/LoginPage';
import { LandingPage } from './pages/public/LandingPage';
import { RequireClassroom } from './components/common/RequireClassroom';
import { StudentLockedGate } from './pages/student/StudentLockedGate';

// Student Pages (Lazy Loaded on Demand)
const Roadmap = lazy(() => import('./pages/student/Roadmap').then((m) => ({ default: m.Roadmap })));
const MaterialsDatabase = lazy(() => import('./pages/student/MaterialsDatabase').then((m) => ({ default: m.MaterialsDatabase })));
const PracticeBank = lazy(() => import('./pages/student/PracticeBank').then((m) => ({ default: m.PracticeBank })));
const StudentWorksheetList = lazy(() => import('./pages/student/StudentWorksheetList').then((m) => ({ default: m.StudentWorksheetList })));
const StudentClassroomView = lazy(() => import('./pages/student/StudentClassroomView').then((m) => ({ default: m.StudentClassroomView })));
const Worksheet = lazy(() => import('./pages/student/Worksheet').then((m) => ({ default: m.Worksheet })));
const StudentDashboard = lazy(() => import('./pages/student/StudentDashboard').then((m) => ({ default: m.StudentDashboard })));
const StudentProgressReport = lazy(() => import('./pages/student/StudentProgressReport').then((m) => ({ default: m.StudentProgressReport })));
const StudentSettings = lazy(() => import('./pages/student/StudentSettings').then((m) => ({ default: m.StudentSettings })));

// Teacher Studio Pages (Lazy Loaded on Demand)
const TeacherDashboard = lazy(() => import('./pages/teacher/TeacherDashboard').then((m) => ({ default: m.TeacherDashboard })));
const AiQuestionStudio = lazy(() => import('./pages/teacher/AiQuestionStudio').then((m) => ({ default: m.AiQuestionStudio })));
const WorksheetBuilder = lazy(() => import('./pages/teacher/WorksheetBuilder').then((m) => ({ default: m.WorksheetBuilder })));
const LiveClassroomDashboard = lazy(() => import('./pages/teacher/LiveClassroomDashboard').then((m) => ({ default: m.LiveClassroomDashboard })));
const ClassroomManager = lazy(() => import('./pages/teacher/ClassroomManager').then((m) => ({ default: m.ClassroomManager })));
const ClassroomDetail = lazy(() => import('./pages/teacher/ClassroomDetail').then((m) => ({ default: m.ClassroomDetail })));

// Whiteboard (STEMBoard) Pages (Lazy Loaded on Demand)
const WhiteboardCatalogPage = lazy(() => import('./pages/whiteboard/WhiteboardCatalogPage').then((m) => ({ default: m.WhiteboardCatalogPage })));
const WhiteboardPage = lazy(() => import('./pages/whiteboard/WhiteboardPage').then((m) => ({ default: m.WhiteboardPage })));

// Admin Portal Pages (Lazy Loaded on Demand)
import { AdminLayout } from './components/admin/AdminLayout';
const AdminAnalyticsDashboard = lazy(() => import('./pages/admin/AdminAnalyticsDashboard').then((m) => ({ default: m.AdminAnalyticsDashboard })));
const AdminUserManagement = lazy(() => import('./pages/admin/AdminUserManagement').then((m) => ({ default: m.AdminUserManagement })));
const AdminClassroomManagement = lazy(() => import('./pages/admin/AdminClassroomManagement').then((m) => ({ default: m.AdminClassroomManagement })));
const AdminMaterialsManagement = lazy(() => import('./pages/admin/AdminMaterialsManagement').then((m) => ({ default: m.AdminMaterialsManagement })));
const AdminMaterialEditor = lazy(() => import('./pages/admin/AdminMaterialEditor').then((m) => ({ default: m.AdminMaterialEditor })));
const AdminWorksheetManagement = lazy(() => import('./pages/admin/AdminWorksheetManagement').then((m) => ({ default: m.AdminWorksheetManagement })));
const AdminQuestionManagement = lazy(() => import('./pages/admin/AdminQuestionManagement').then((m) => ({ default: m.AdminQuestionManagement })));
const AdminAuditLogs = lazy(() => import('./pages/admin/AdminAuditLogs').then((m) => ({ default: m.AdminAuditLogs })));

// Fallback Loader saat chunk modul sedang diunduh
const PageLoadingFallback: React.FC = () => (
  <div className="min-h-[55vh] flex flex-col items-center justify-center p-8 space-y-3">
    <div className="w-9 h-9 border-3 border-emerald-200 border-t-emerald-600 rounded-full animate-spin" />
    <span className="text-xs font-mono font-medium text-slate-500">Memuat halaman...</span>
  </div>
);

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
 * Route guard khusus Portal Administrator mandiri
 */
function AdminOnly({ children }: { children: React.ReactNode }) {
  const { user, isAdmin, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="w-8 h-8 border-3 border-slate-200 border-t-slate-800 rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return <AdminLayout>{children}</AdminLayout>;
}

/**
 * Route guard untuk membatasi fitur Bank Soal dan Studio Guru khusus bagi Guru
 * (Admin dialihkan ke Portal Admin mandiri /admin/analytics)
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

  if (isAdmin) {
    return <Navigate to="/admin/analytics" replace />;
  }

  if (!isTeacher) {
    return <Navigate to="/worksheet" replace />;
  }

  return <>{children}</>;
}

/**
 * Route guard untuk membatasi fitur profil dan kelas binaan siswa khusus bagi Siswa
 * (Jika Admin membuka, dialihkan ke /admin/analytics; jika Guru membuka, ke /teacher)
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

  if (isAdmin) {
    return <Navigate to="/admin/analytics" replace />;
  }

  if (isTeacher) {
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

  // Portal Administrator Mandiri menggunakan tata letak AdminLayout Command Center
  const isAdminPortal = location.pathname.startsWith('/admin');

  return (
    <div
      className={`flex flex-col ${
        isAdminPortal
          ? 'min-h-screen bg-slate-50 text-slate-900'
          : `bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 ${
              isFullScreenWorkspace ? 'h-screen overflow-hidden' : 'min-h-screen'
            }`
      }`}
    >
      {!isAdminPortal && <Navbar />}

      <main
        className={`flex-1 flex flex-col ${
          isAdminPortal
            ? 'min-h-screen bg-slate-50'
            : isFullScreenWorkspace
            ? 'h-[calc(100vh-64px)] overflow-hidden bg-slate-200/40'
            : ''
        }`}
      >
        <Suspense fallback={<PageLoadingFallback />}>
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

          {/* Database Materi OSN Kimia & Materi Dasar SMA (Dapat Diakses Bebas & Pratinjau Admin Langsung) */}
          <Route path="/materi" element={<MaterialsDatabase />} />
          <Route path="/materi/sma/:id" element={<MaterialsDatabase />} />
          <Route path="/materi/:id" element={<MaterialsDatabase />} />

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
          <Route path="/bank-soal" element={<Navigate to="/practice" replace />} />

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

          {/* Portal Administrator Mandiri (6 Modul Tata Kelola) */}
          <Route path="/admin" element={<Navigate to="/admin/analytics" replace />} />
          <Route
            path="/admin/analytics"
            element={
              <AdminOnly>
                <AdminAnalyticsDashboard />
              </AdminOnly>
            }
          />
          <Route
            path="/admin/users"
            element={
              <AdminOnly>
                <AdminUserManagement />
              </AdminOnly>
            }
          />
          <Route
            path="/admin/classrooms"
            element={
              <AdminOnly>
                <AdminClassroomManagement />
              </AdminOnly>
            }
          />
          <Route
            path="/admin/materials"
            element={
              <AdminOnly>
                <AdminMaterialsManagement />
              </AdminOnly>
            }
          />
          <Route
            path="/admin/materials/:type/:id/edit"
            element={
              <AdminOnly>
                <AdminMaterialEditor />
              </AdminOnly>
            }
          />
          <Route
            path="/admin/worksheets"
            element={
              <AdminOnly>
                <AdminWorksheetManagement />
              </AdminOnly>
            }
          />
          <Route
            path="/admin/questions"
            element={
              <AdminOnly>
                <AdminQuestionManagement />
              </AdminOnly>
            }
          />
          <Route
            path="/admin/audit-logs"
            element={
              <AdminOnly>
                <AdminAuditLogs />
              </AdminOnly>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </Suspense>
      </main>

      {!isFullScreenWorkspace && !isAdminPortal && <Footer />}
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
