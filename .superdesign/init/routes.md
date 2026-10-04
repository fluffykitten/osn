# Application Route Structure

Framework: React 19 + React Router DOM v7
Meta-framework: Vite 8 SPA

## Route Mapping Table

| URL Path | Component | File Path | Layout | Access Guard | Description |
|---|---|---|---|---|---|
| `/` | `LandingPage` | `src/pages/public/LandingPage.tsx` | Standard (`Navbar` + `Footer`) | Public | Home landing page with platform hero, features, syllabus preview, and auth links |
| `/login` | `LoginPage` | `src/pages/auth/LoginPage.tsx` | Standard (`Navbar` + `Footer`) | Public / Guest | Sign in, register (student), password reset modal |
| `/roadmap` | Redirect -> `/practice` | - | - | - | Legacy alias redirect |
| `/syllabus` | Redirect -> `/practice` | - | - | - | Legacy alias redirect |
| `/materi` | `MaterialsDatabase` | `src/pages/student/MaterialsDatabase.tsx` | Standard (`Navbar` + `Footer`) | Public / Guest allowed | Full OSN Chemistry & SMA basic concepts database with search & filters |
| `/materi/:id` | `MaterialsDatabase` | `src/pages/student/MaterialsDatabase.tsx` | Standard (`Navbar` + `Footer`) | Public / Guest allowed | Single topic theory view with flashcards, AI tutor & quizzes |
| `/materi/sma/:id` | `MaterialsDatabase` | `src/pages/student/MaterialsDatabase.tsx` | Standard (`Navbar` + `Footer`) | Public / Guest allowed | SMA basic syllabus material viewer |
| `/student/dashboard` | `StudentDashboard` | `src/pages/student/StudentDashboard.tsx` | Standard (`Navbar` + `Footer`) | `StudentOnly` | Main student hub: streak, XP, level, classroom assignments, 10 pillar mastery, study loop |
| `/student/locked` | `StudentLockedGate` | `src/pages/student/StudentLockedGate.tsx` | Standard (`Navbar` + `Footer`) | `RequireAuth` | Prompt to join classroom when student account has no active class |
| `/practice` | `PracticeBank` | `src/pages/student/PracticeBank.tsx` | Standard (`Navbar` + `Footer`) | `RequireAuth` | Interactive question bank organized by 10 OSN pillars |
| `/practice/:topicId` | `PracticeTopicDetail` | `src/pages/student/PracticeTopicDetail.tsx` | Standard (`Navbar` + `Footer`) | `RequireAuth` | Topic detail drill with level filters and question list |
| `/worksheet` | `StudentWorksheetList` | `src/pages/student/StudentWorksheetList.tsx` | Standard (`Navbar` + `Footer`) | `RequireAuth` | Student assignments and token-based exams |
| `/worksheet/:type/:id` | `Worksheet` | `src/pages/student/Worksheet.tsx` | Full-screen Workspace | `RequireAuth` | Distraction-free exam & worksheet runner with KaTeX, timer, and auto-save |
| `/student/classroom` | `StudentClassroomView` | `src/pages/student/StudentClassroomView.tsx` | Standard (`Navbar` + `Footer`) | `StudentOnly` | Classroom details, teacher info, classmate rankings |
| `/leaderboard` | `Leaderboard` | `src/pages/student/Leaderboard.tsx` | Standard (`Navbar` + `Footer`) | `RequireAuth` | Global & classroom leaderboards by XP and streaks |
| `/progress` | `StudentProgressReport` | `src/pages/student/StudentProgressReport.tsx` | Standard (`Navbar` + `Footer`) | `RequireAuth` | Mastery breakdown, accuracy analytics, submission history |
| `/settings` | `StudentSettings` | `src/pages/student/StudentSettings.tsx` | Standard (`Navbar` + `Footer`) | `RequireAuth` | Profile avatar, customizer, password & notification settings |
| `/teacher` | `TeacherDashboard` | `src/pages/teacher/TeacherDashboard.tsx` | Standard (`Navbar` + `Footer`) | `TeacherOnly` | Teacher management overview, quick stats, active assignments |
| `/teacher/studio` | `AiQuestionStudio` | `src/pages/teacher/AiQuestionStudio.tsx` | Standard (`Navbar` + `Footer`) | `TeacherOnly` | AI chemistry question generator & validator |
| `/teacher/builder` | `WorksheetBuilder` | `src/pages/teacher/WorksheetBuilder.tsx` | Standard (`Navbar` + `Footer`) | `TeacherOnly` | Custom exam/worksheet package builder |
| `/teacher/live` | `LiveClassroomDashboard` | `src/pages/teacher/LiveClassroomDashboard.tsx` | Standard (`Navbar` + `Footer`) | `TeacherOnly` | Real-time classroom monitoring & live submission grading |
| `/teacher/classrooms` | `ClassroomManager` | `src/pages/teacher/ClassroomManager.tsx` | Standard (`Navbar` + `Footer`) | `TeacherOnly` | Classroom creation, invite tokens, student rosters |
| `/teacher/classrooms/:id` | `ClassroomDetail` | `src/pages/teacher/ClassroomDetail.tsx` | Standard (`Navbar` + `Footer`) | `TeacherOnly` | Detailed student mastery matrix and assignments |
| `/whiteboard` | `WhiteboardCatalogPage` | `src/pages/whiteboard/WhiteboardCatalogPage.tsx` | Standard (`Navbar` + `Footer`) | `RequireAuth` | STEMBoard session catalog & templates |
| `/whiteboard/:id` | `WhiteboardPage` | `src/pages/whiteboard/WhiteboardPage.tsx` | Full-screen Workspace | `RequireAuth` | Interactive infinite canvas STEM whiteboard |
| `/admin/*` | Multiple Pages | `src/pages/admin/*` | `AdminLayout` (Command Center) | `AdminOnly` | Analytics, users, classrooms, materials, audit logs |

## Key Page Descriptions

### 1. Student Dashboard (`/student/dashboard`)
The central gamified study headquarters for high school chemistry olympiad competitors:
- Profile header with Chemist Cat avatar, Level, XP progress bar, current streak flame, and customizable showcase badge pills.
- Active resume banners for ongoing worksheet drills and reading sessions.
- Recommended Study Loop: diagnoses lowest mastered pillar with direct access to SMA foundational theory, OSN advanced notes, and targeted practice.
- Active Classroom & Teacher Assignments: real-time due dates, completion percentages, scores, and tokens.
- 10 OSN Chemical Pillars Mastery breakdown: Stoichiometry, Atomic Structure, Thermodynamics, Kinetics, Equilibrium, Acid-Base, Electrochemistry, Organic Chemistry, Inorganic Chemistry, Analytical Chemistry.
- Topic Quest Pipeline: progressive milestone achievements.
