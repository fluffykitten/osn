import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';

// Pages
import { Roadmap } from './pages/student/Roadmap';
import { MaterialsDatabase } from './pages/student/MaterialsDatabase';
import { PracticeBank } from './pages/student/PracticeBank';
import { Worksheet } from './pages/student/Worksheet';
import { Profile } from './pages/student/Profile';
import { TeacherDashboard } from './pages/teacher/TeacherDashboard';
import { AiQuestionStudio } from './pages/teacher/AiQuestionStudio';
import { WorksheetBuilder } from './pages/teacher/WorksheetBuilder';

import { useLocation } from 'react-router-dom';

function AppContent() {
  const location = useLocation();
  const isWorksheet = location.pathname.startsWith('/worksheet');

  return (
    <div className={`flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 ${isWorksheet ? 'h-screen overflow-hidden' : 'min-h-screen'}`}>
      <Navbar />

      <main className={`flex-1 flex flex-col ${isWorksheet ? 'h-[calc(100vh-64px)] overflow-hidden' : ''}`}>
        <Routes>
          {/* Landing Page: Roadmap 10 Topik Silabus Penguasaan Kimia */}
          <Route path="/" element={<Roadmap />} />
          <Route path="/roadmap" element={<Navigate to="/" replace />} />

          {/* Database Materi OSN Kimia & Materi Dasar SMA */}
          <Route path="/materi" element={<MaterialsDatabase />} />
          <Route path="/materi/sma/:id" element={<MaterialsDatabase />} />
          <Route path="/materi/:id" element={<MaterialsDatabase />} />

          {/* Student Experience */}
          <Route path="/practice" element={<PracticeBank />} />
          <Route path="/worksheet/:type/:id" element={<Worksheet />} />
          <Route path="/worksheet" element={<Navigate to="/worksheet/static_module/1" replace />} />
          <Route path="/leaderboard" element={<Navigate to="/" replace />} />
          <Route path="/profile" element={<Profile />} />

          {/* Teacher Studio */}
          <Route path="/teacher" element={<TeacherDashboard />} />
          <Route path="/teacher/ai-studio" element={<AiQuestionStudio />} />
          <Route path="/teacher/worksheets/new" element={<WorksheetBuilder />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {!isWorksheet && <Footer />}
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
