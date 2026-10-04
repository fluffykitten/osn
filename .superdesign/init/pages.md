# Page Component Dependency Trees

## 1. /student/dashboard (Student Dashboard)
Entry: `src/pages/student/StudentDashboard.tsx`
Dependencies:
- `src/components/common/Navbar.tsx`
  - `src/components/gamification/UserTitleBadge.tsx`
    - `src/utils/gamificationConstants.ts`
  - `src/contexts/AuthContext.tsx`
  - `src/services/studentWorksheetService.ts`
- `src/components/common/ChemistryWatermarkBackground.tsx`
- `src/components/gamification/ChemistFigureBadgeSvg.tsx`
- `src/components/gamification/UserTitleBadge.tsx`
- `src/components/gamification/LevelProgressBar.tsx`
  - `src/components/gamification/UserTitleBadge.tsx`
  - `src/utils/gamificationConstants.ts`
- `src/components/gamification/ShowcaseBadgePill.tsx`
  - `src/components/gamification/CatBadgeSvg.tsx`
  - `src/utils/achievementConstants.ts`
- `src/components/gamification/BadgeCustomizerModal.tsx`
  - `src/components/gamification/ShowcaseBadgePill.tsx`
  - `src/services/showcaseBadgeService.ts`
- `src/components/gamification/TopicQuestPipeline.tsx`
- `src/components/common/Footer.tsx`

## 2. / (Landing Page)
Entry: `src/pages/public/LandingPage.tsx`
Dependencies:
- `src/components/common/Navbar.tsx`
- `src/components/syllabus/ChemistryOsnSyllabusSvg.tsx`
- `src/components/common/Footer.tsx`

## 3. /materi (Materials Database)
Entry: `src/pages/student/MaterialsDatabase.tsx`
Dependencies:
- `src/components/common/Navbar.tsx`
- `src/components/materials/MaterialNotesDrawer.tsx`
- `src/components/materials/MaterialAiTutorModal.tsx`
- `src/components/materials/MaterialFlashcardModal.tsx`
- `src/components/materials/ConceptCheckpointQuiz.tsx`
- `src/components/materials/TopicSvgArt.tsx`
- `src/components/common/Footer.tsx`

## 4. /practice (Practice Bank)
Entry: `src/pages/student/PracticeBank.tsx`
Dependencies:
- `src/components/common/Navbar.tsx`
- `src/components/practice/PracticeStatsHeader.tsx`
- `src/components/practice/PracticeTopicCard.tsx`
- `src/components/practice/TopicQuestionDrawer.tsx`
- `src/components/common/Footer.tsx`

## 5. /teacher (Teacher Dashboard)
Entry: `src/pages/teacher/TeacherDashboard.tsx`
Dependencies:
- `src/components/common/Navbar.tsx`
- `src/components/teacher/TeacherNavigation.tsx`
- `src/components/teacher/StudentMasteryMatrix.tsx`
- `src/components/teacher/StudentProfileDrawer.tsx`
- `src/components/common/Footer.tsx`

## 6. /admin/analytics (Admin Analytics Dashboard)
Entry: `src/pages/admin/AdminAnalyticsDashboard.tsx`
Dependencies:
- `src/components/admin/AdminLayout.tsx`
- `src/components/common/Footer.tsx`
