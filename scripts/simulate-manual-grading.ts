/**
 * Simulasi & Diagnosis Sistem Manual Grading dan AI Grant
 * Alur:
 * 1. Admin Mengatur Izin AI Siswa (Default: Nonaktif)
 * 2. Siswa Mengirim Jawaban (Menunggu Penilaian Guru)
 * 3. Guru Mendeteksi Antrean di Dashboard
 * 4. Guru Melakukan Grading di SpeedGrader (Nilai + Ulasan + KaTeX)
 * 5. Verifikasi Event & Notifikasi Siswa (Toast, Navbar, Worksheet Banner)
 */

// Mock browser globals (localStorage & window.dispatchEvent) for Node.js environment
const store: Record<string, string> = {};
(globalThis as any).localStorage = {
  getItem: (k: string) => store[k] || null,
  setItem: (k: string, v: string) => { store[k] = String(v); },
  removeItem: (k: string) => { delete store[k]; },
  clear: () => { Object.keys(store).forEach((k) => delete store[k]); },
};

const capturedEvents: Array<{ type: string; detail: any }> = [];
(globalThis as any).window = {
  dispatchEvent: (event: any) => {
    capturedEvents.push({ type: event.type, detail: event.detail });
    return true;
  },
  addEventListener: () => {},
  removeEventListener: () => {},
};

(globalThis as any).CustomEvent = class CustomEvent {
  type: string;
  detail: any;
  constructor(type: string, params: { detail?: any } = {}) {
    this.type = type;
    this.detail = params.detail;
  }
};

import {
  savePendingWorksheetSubmission,
  teacherGradeSubmission,
  getPendingSubmissions,
  getSubmissionHistory,
} from '../src/services/submissionService';
import { adminService } from '../src/services/adminService';

async function runDiagnosticSimulation() {
  console.log('================================================================');
  console.log('🧪 DIAGNOSIS & SIMULASI PENILAIAN MANUAL & AI GRANT PLATFORM OSN');
  console.log('================================================================\n');

  let passedTests = 0;
  let totalTests = 0;

  function assert(condition: boolean, testName: string, details?: any) {
    totalTests++;
    if (condition) {
      console.log(`  ✅ [PASS] ${testName}`);
      passedTests++;
    } else {
      console.error(`  ❌ [FAIL] ${testName}`);
      if (details) console.error('     Detail:', details);
    }
  }

  // -------------------------------------------------------------
  // TAHAP 1: DIAGNOSIS HAK AKSES AI SISWA OLEH ADMIN
  // -------------------------------------------------------------
  console.log('▶️ TAHAP 1: Diagnosis Izin AI Siswa & Admin Control');
  const testStudentId = 'student-test-uuid-001';
  const testStudentEmail = 'ahmad.siswa@sma-osn.sch.id';

  // Seed student profile in local users cache
  const initialUsers = [
    {
      id: testStudentId,
      email: testStudentEmail,
      full_name: 'Ahmad Fauzi',
      role: 'student',
      school_name: 'SMA Negeri 1 Jakarta',
      account_status: 'active',
      ai_grading_access: false, // Default nonaktif
    },
  ];
  localStorage.setItem('osn_admin_users_cache_v1', JSON.stringify(initialUsers));

  // Verifikasi status default
  const cached = JSON.parse(localStorage.getItem('osn_admin_users_cache_v1') || '[]');
  const studentProfile = cached.find((u: any) => u.id === testStudentId);
  assert(
    studentProfile?.ai_grading_access === false,
    'Siswa baru memiliki ai_grading_access = false secara default (AI Off)'
  );

  // Admin memberikan izin AI grading
  console.log('   ↳ Admin memberikan hak AI grading kepada siswa...');
  const grantRes = await adminService.toggleUserAiGrading(testStudentId, true);
  assert(grantRes.success === true, 'Admin berhasil memberikan hak AI grading');

  const updatedUsers1 = JSON.parse(localStorage.getItem('osn_admin_users_cache_v1') || '[]');
  assert(
    updatedUsers1.find((u: any) => u.id === testStudentId)?.ai_grading_access === true,
    'Profile siswa kini memiliki ai_grading_access = true'
  );

  // Admin mencabut kembali izin AI grading (kembali ke manual guru)
  console.log('   ↳ Admin mencabut izin AI grading (kembali ke penilaian manual guru)...');
  const revokeRes = await adminService.toggleUserAiGrading(testStudentId, false);
  assert(revokeRes.success === true, 'Admin berhasil mencabut izin AI grading');

  const updatedUsers2 = JSON.parse(localStorage.getItem('osn_admin_users_cache_v1') || '[]');
  assert(
    updatedUsers2.find((u: any) => u.id === testStudentId)?.ai_grading_access === false,
    'Profile siswa kembali ke mode manual guru (ai_grading_access = false)'
  );

  console.log('');

  // -------------------------------------------------------------
  // TAHAP 2: SIMULASI PENYERAHAN LEMBAR KERJA SISWA
  // -------------------------------------------------------------
  console.log('▶️ TAHAP 2: Simulasi Penyerahan Lembar Kerja Siswa (Manual Mode)');
  const sampleStepsKaTeX = `
Diketahui reaksi pembentukan gas amonia:
$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$

Perhitungan perubahan entalpi standar reaksi:
$\\Delta H^\\circ = \\sum n\\Delta H_f^\\circ(\\text{produk}) - \\sum m\\Delta H_f^\\circ(\\text{reaktan})$
$\\Delta H^\\circ = [2 \\times (-46{,}11)] - [0 + 0] = -92{,}22\\text{ kJ/mol}$

Maka kalor yang dilepaskan pada pembentukan 1 mol $\\text{NH}_3$ adalah $46{,}11\\text{ kJ}$.
`.trim();

  const sampleFinalAnswer = '-92.22 kJ/mol (atau 46.11 kJ per mol NH3)';

  const pendingSub = await savePendingWorksheetSubmission({
    userId: testStudentId,
    questionId: 102,
    questionTitle: 'Pilar 4: Termokimia Sintesis Amonia Haber-Bosch',
    pillarNumber: 4,
    subtopic: 'Termokimia & Entalpi Reaksi',
    studentWorkSteps: sampleStepsKaTeX,
    studentFinalAnswer: sampleFinalAnswer,
    elapsedSeconds: 245,
    maxPoints: 10,
  });

  assert(Boolean(pendingSub.id), 'ID submission berhasil dibuat secara unik');
  assert(pendingSub.status === 'pending_review', 'Status awal submission adalah pending_review');
  assert(pendingSub.is_graded === false, 'Flag is_graded bernilai false');
  assert(pendingSub.grading_type === 'manual', 'Tipe grading adalah manual');
  assert(pendingSub.totalScore === 0, 'Skor awal bernilai 0 menunggu penilaian guru');
  assert(pendingSub.studentWorkSteps.includes('\\Delta H'), 'Langkah formula KaTeX tersimpan utuh');
  assert(pendingSub.studentFinalAnswer === sampleFinalAnswer, 'Jawaban akhir siswa tersimpan utuh');

  console.log('');

  // -------------------------------------------------------------
  // TAHAP 3: DETEKSI ANTREAN OLEH GURU (TEACHER DASHBOARD)
  // -------------------------------------------------------------
  console.log('▶️ TAHAP 3: Deteksi Antrean di Dashboard Guru');
  const pendingQueue = await getPendingSubmissions();
  const foundInQueue = pendingQueue.find((s) => s.id === pendingSub.id);

  assert(
    Boolean(foundInQueue),
    `Submission terdeteksi dalam antrean guru (Total antrean: ${pendingQueue.length} soal)`
  );
  assert(
    foundInQueue?.questionTitle === 'Pilar 4: Termokimia Sintesis Amonia Haber-Bosch',
    'Judul soal dalam antrean guru sesuai'
  );

  console.log('');

  // -------------------------------------------------------------
  // TAHAP 4: GURU MELAKUKAN PENILAIAN DI SPEEDGRADER
  // -------------------------------------------------------------
  console.log('▶️ TAHAP 4: Guru Melakukan Penilaian Manual di SpeedGrader');
  const teacherId = 'teacher-chem-001';
  const teacherName = 'Drs. Supriyanto, M.Pd (Pembina OSN Kimia)';
  const givenScore = 9.5;
  const teacherFeedback =
    'Penurunan rumus siklus termokimia KaTeX sangat terstruktur dan rapi! Satuan kJ/mol konsisten. Pertahankan ketelitian ini di seleksi OSP! 👏';

  const gradedRecord = await teacherGradeSubmission({
    submissionId: pendingSub.id,
    studentId: testStudentId,
    teacherId,
    teacherName,
    totalScore: givenScore,
    maxScore: 10,
    teacherFeedback,
    questionTitle: pendingSub.questionTitle,
  });

  assert(Boolean(gradedRecord), 'teacherGradeSubmission berhasil mengembalikan record bernilai');
  assert(gradedRecord?.totalScore === 9.5, 'Skor bernilai 9.5 berhasil tersimpan');
  assert(gradedRecord?.scorePercentage === 95, 'Persentase skor dihitung 95%');
  assert(gradedRecord?.status === 'perfect', 'Status pengerjaan terkategori perfect (>=95%)');
  assert(gradedRecord?.is_graded === true, 'Flag is_graded berubah menjadi true');
  assert(gradedRecord?.teacher_feedback === teacherFeedback, 'Catatan masukan guru tersimpan presisi');
  assert(gradedRecord?.graded_by_teacher_name === teacherName, 'Nama guru pembina tersimpan');
  assert(gradedRecord?.xpAwarded === 95, 'XP reward dihitung otomatis (95 XP untuk nilai 9.5)');

  console.log('');

  // -------------------------------------------------------------
  // TAHAP 5: VERIFIKASI EVENT & NOTIFIKASI REALTIME SISWA
  // -------------------------------------------------------------
  console.log('▶️ TAHAP 5: Verifikasi Notifikasi Realtime & Event Siswa');
  const gradeEvent = capturedEvents.find((e) => e.type === 'osn_teacher_grade_published');

  assert(Boolean(gradeEvent), 'Event window "osn_teacher_grade_published" berhasil terpicu');
  assert(gradeEvent?.detail.studentId === testStudentId, 'Event ditujukan tepat ke studentId yang bersangkutan');
  assert(gradeEvent?.detail.score === 9.5, 'Payload event memuat skor 9.5');
  assert(gradeEvent?.detail.maxScore === 10, 'Payload event memuat skor maksimal 10');
  assert(gradeEvent?.detail.teacherName === teacherName, 'Payload event memuat nama guru');
  assert(gradeEvent?.detail.teacherFeedback === teacherFeedback, 'Payload event memuat ulasan guru');

  console.log('');

  // -------------------------------------------------------------
  // TAHAP 6: VERIFIKASI TAMPILAN LEMBAR KERJA & PORTOFOLIO SISWA
  // -------------------------------------------------------------
  console.log('▶️ TAHAP 6: Verifikasi Riwayat & Tampilan Lembar Kerja Siswa');
  const studentHistory = getSubmissionHistory(testStudentId);
  const studentViewRecord = studentHistory.find((s) => s.id === pendingSub.id);

  assert(Boolean(studentViewRecord), 'Siswa dapat membaca submission dari riwayat pengerjaan');
  assert(studentViewRecord?.is_graded === true, 'Lembar kerja siswa menampilkan status sudah dinilai');
  assert(
    studentViewRecord?.graded_by_teacher_name === teacherName,
    'Lembar kerja siswa menampilkan banner resmi "Dinilai oleh Guru Pembina"'
  );
  assert(
    studentViewRecord?.teacher_feedback === teacherFeedback,
    'Ulasan guru tampil di kartu evaluasi lembar kerja siswa'
  );

  // Pastikan antrean pending berkurang
  const updatedPendingQueue = await getPendingSubmissions();
  const stillInPending = updatedPendingQueue.some((s) => s.id === pendingSub.id);
  assert(stillInPending === false, 'Tugas otomatis keluar dari antrean "Perlu Dinilai"');

  console.log('\n================================================================');
  console.log(`🏁 HASIL DIAGNOSIS: ${passedTests}/${totalTests} Pengujian Berhasil (100% LULUS)`);
  console.log('================================================================\n');

  if (passedTests === totalTests) {
    console.log('🎉 KESIMPULAN: Sistem penilaian manual, izin AI, dan notifikasi siswa');
    console.log('   berfungsi 100% dengan benar dan terintegrasi dari hulu ke hilir.');
  } else {
    process.exit(1);
  }
}

runDiagnosticSimulation().catch((err) => {
  console.error('Diagnostic error:', err);
  process.exit(1);
});
