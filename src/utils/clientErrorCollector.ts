/**
 * clientErrorCollector.ts
 * Utilitas pemantau dan pencatat exception/error browser di sisi klien.
 * Bekerja tanpa memblokir runtime aplikasi dan menyimpan ringkasan log
 * terkini untuk dilampirkan otomatis saat pengguna membuat laporan bug.
 */

import type { BugReportLogItem } from '../types/database';

const MAX_LOGS = 15;
const logBuffer: BugReportLogItem[] = [];

let isInitialized = false;

/**
 * Inisialisasi listener global error dan unhandled promise rejection.
 */
export function initClientErrorCollector() {
  if (isInitialized || typeof window === 'undefined') return;
  isInitialized = true;

  // Tangkap error JavaScript runtime
  window.addEventListener('error', (event) => {
    try {
      const errorItem: BugReportLogItem = {
        type: 'error',
        message: event.message || 'Unknown runtime error',
        stack: event.error?.stack || `${event.filename}:${event.lineno}:${event.colno}`,
        timestamp: new Date().toISOString(),
      };
      pushLog(errorItem);
    } catch {}
  });

  // Tangkap Promise rejection yang tidak tertangani
  window.addEventListener('unhandledrejection', (event) => {
    try {
      const reason = event.reason;
      const errorItem: BugReportLogItem = {
        type: 'unhandledrejection',
        message:
          typeof reason === 'string'
            ? reason
            : reason?.message || JSON.stringify(reason) || 'Unhandled Promise Rejection',
        stack: reason?.stack,
        timestamp: new Date().toISOString(),
      };
      pushLog(errorItem);
    } catch {}
  });

  // Intersep console.error secara aman tanpa menghilangkan fungsi aslinya
  const originalConsoleError = console.error;
  console.error = function (...args: any[]) {
    try {
      const formattedMessage = args
        .map((arg) => {
          if (typeof arg === 'string') return arg;
          if (arg instanceof Error) return `${arg.name}: ${arg.message}\n${arg.stack || ''}`;
          try {
            return JSON.stringify(arg);
          } catch {
            return String(arg);
          }
        })
        .join(' ');

      pushLog({
        type: 'error',
        message: formattedMessage,
        timestamp: new Date().toISOString(),
      });
    } catch {}

    originalConsoleError.apply(console, args);
  };
}

function pushLog(item: BugReportLogItem) {
  if (logBuffer.length >= MAX_LOGS) {
    logBuffer.shift();
  }
  logBuffer.push(item);
}

/**
 * Dapatkan riwayat log error browser terkini
 */
export function getRecentClientLogs(): BugReportLogItem[] {
  return [...logBuffer];
}

/**
 * Bersihkan buffer log (opsional)
 */
export function clearClientLogs() {
  logBuffer.length = 0;
}

/**
 * Deteksi informasi spesifikasi perangkat dan browser klien
 */
export function getClientEnvironment() {
  if (typeof window === 'undefined') {
    return {
      viewport: { width: 0, height: 0 },
      userAgent: 'Unknown SSR',
      language: 'id-ID',
      theme: 'default',
    };
  }

  const themeClass = document.documentElement.className || 'light';

  return {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
    screen: {
      width: window.screen.width,
      height: window.screen.height,
      colorDepth: window.screen.colorDepth,
    },
    userAgent: navigator.userAgent,
    language: navigator.language || 'id-ID',
    isOnline: navigator.onLine,
    theme: themeClass,
    url: window.location.href,
    pathname: window.location.pathname,
    hash: window.location.hash,
    search: window.location.search,
    documentTitle: document.title,
  };
}

/**
 * Pemetaan cerdas rute URL ke berkas sumber kode yang dicurigai.
 * Memberikan petunjuk instan kepada AI (Antigravity) saat membaca laporan bug.
 */
export function getSuspectedSourceFiles(pathname: string): string[] {
  const routesMap: Array<{ pattern: RegExp; files: string[] }> = [
    {
      pattern: /^\/worksheet\/live\//,
      files: [
        'src/pages/student/StudentWorksheetView.tsx',
        'src/services/worksheetRealtimeService.ts',
        'src/components/worksheet/LiveWorksheetRunner.tsx',
      ],
    },
    {
      pattern: /^\/worksheet/,
      files: [
        'src/pages/student/StudentWorksheetView.tsx',
        'src/services/studentWorksheetService.ts',
        'src/components/worksheet/WorksheetCard.tsx',
      ],
    },
    {
      pattern: /^\/teacher\/worksheets/,
      files: [
        'src/pages/teacher/WorksheetBuilder.tsx',
        'src/services/classroomService.ts',
      ],
    },
    {
      pattern: /^\/teacher\/ai-studio/,
      files: [
        'src/pages/teacher/AiQuestionStudio.tsx',
        'src/services/questionBankService.ts',
      ],
    },
    {
      pattern: /^\/whiteboard/,
      files: [
        'src/pages/whiteboard/WhiteboardPage.tsx',
        'src/services/whiteboardEngine.ts',
        'src/services/whiteboardRealtimeService.ts',
      ],
    },
    {
      pattern: /^\/materi/,
      files: [
        'src/pages/public/MaterialsDatabase.tsx',
        'src/services/materialService.ts',
        'src/components/common/KaTeXRenderer.tsx',
      ],
    },
    {
      pattern: /^\/admin\/users/,
      files: [
        'src/pages/admin/AdminUserManagement.tsx',
        'src/services/adminService.ts',
      ],
    },
    {
      pattern: /^\/admin\/questions/,
      files: [
        'src/pages/admin/AdminQuestionManagement.tsx',
        'src/services/questionBankService.ts',
      ],
    },
    {
      pattern: /^\/admin\/appearance/,
      files: [
        'src/pages/admin/AdminAppearanceSettings.tsx',
      ],
    },
    {
      pattern: /^\/admin/,
      files: [
        'src/components/admin/AdminLayout.tsx',
        'src/pages/admin/AdminAnalyticsDashboard.tsx',
        'src/services/adminService.ts',
      ],
    },
    {
      pattern: /^\/login/,
      files: [
        'src/pages/auth/LoginPage.tsx',
        'src/contexts/AuthContext.tsx',
      ],
    },
    {
      pattern: /^\/practice/,
      files: [
        'src/pages/public/PracticePage.tsx',
        'src/services/questionBankService.ts',
      ],
    },
    {
      pattern: /^\/roadmap/,
      files: [
        'src/pages/student/Roadmap.tsx',
        'src/components/syllabus/ChemistrySmaSyllabusSvg.tsx',
      ],
    },
    {
      pattern: /^\/student\/progress/,
      files: [
        'src/pages/student/StudentProgressPage.tsx',
        'src/services/achievementService.ts',
        'src/services/questService.ts',
      ],
    },
  ];

  for (const entry of routesMap) {
    if (entry.pattern.test(pathname)) {
      return entry.files;
    }
  }

  return ['src/App.tsx', 'src/components/common/Navbar.tsx'];
}
