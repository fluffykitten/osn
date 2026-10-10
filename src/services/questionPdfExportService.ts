/**
 * questionPdfExportService.ts
 * Layanan Ekspor PDF Naskah Soal & Kunci Jawaban Kimia
 * Standar Layout Save My Exams (Compact, Zero Wasted Space, High-Density A4 Print)
 * 
 * Perbaikan Layout & Tipografi:
 * 1. Halaman Cover A4:
 *    - Header resmi horizontal (Logo, Jenjang & Mata Pelajaran, Waktu, Jumlah Soal)
 *    - Judul besar terpusat & deretan sub-topik terformat rapi
 *    - Kotak ringkasan nilai (hanya menampilkan kategori yang memiliki soal, no empty /0 clutter)
 *    - QR Code & Tautan Kursus di sisi kanan dengan panah lengkung khas
 *    - Kotak Petunjuk Pengerjaan & Ketentuan Ujian Resmi (mengisi ruang cover secara proporsional)
 * 2. Halaman Butir Soal:
 *    - Layout aliran kontinu (continuous flow) tanpa flex min-height 297mm yang memboroskan ruang
 *    - Memuat 2 - 3 soal per halaman (tingkat kepadatan optimal seperti Save My Exams asli)
 *    - Break-inside: avoid pada setiap soal agar tidak terbelah di jeda halaman
 *    - Heading seksi dilengkapi break-after: avoid agar tidak menjadi heading yatim (orphaned)
 *    - Opsi pilihan ganda rapat, elegan, berindentasi rapi (A., B., C., D., E.)
 * 3. Halaman Mark Scheme & Pembahasan:
 *    - Tabel Kunci Cepat ringkas (tinggi ~80-100px)
 *    - Kartu solusi rapat bergaris aksen biru (border-left 4px)
 *    - Beberapa kartu solusi mengalir bersamaan dalam 1 lembar (2-3 solusi per halaman, bukan 1 halaman per soal!)
 *    - Normalisasi langkah pengerjaan (Langkah 1, Langkah 2, dst. tanpa bug numbering '1. 1. 1.')
 * 4. Formula KaTeX & mhchem Terintegrasi:
 *    - CSS KaTeX inti tertanam langsung di dokumen agar superskrip dan subskrip tidak pernah terpisah
 *    - font loading guard sebelum eksekusi print
 * 5. Footer Berulang (Running Footer):
 *    - Tampil konsisten di setiap halaman cetak (Logo, Copyright Admin, Domain Link)
 */

import { parseAndRenderMixedText } from '../lib/katex-helpers';
import type { Question } from '../types/database';
import { normalizeDifficultyTier } from '../utils/practiceDataUtils';
import { pdfSettingsService, getPdfFontConfig, type MaterialPdfSettings } from './pdfSettingsService';

export type QuestionExportMode = 'all' | 'selected' | 'easy' | 'medium' | 'hard';
export type QuestionDocumentType = 'questions_only' | 'questions_with_answers' | 'answers_only';

export interface QuestionPdfExportOptions {
  documentType?: QuestionDocumentType;
  topicTitle: string;
  topicNumber?: number;
  curriculumTrack?: 'sma' | 'osn' | 'igcse';
  courseLevel?: string;
  subtopics?: string[];
  brandingTitle?: string;
  subTitle?: string;
  websiteUrl?: string;
  restartNumberingPerSection?: boolean;
}

export interface PdfTerminology {
  isInternational: boolean;
  totalTime: (mins: number) => string;
  totalQuestions: (count: number) => string;
  totalScoreLabel: string;
  totalScoreValue: (score: number) => string;
  easyTierLabel: string;
  mediumTierLabel: string;
  hardTierLabel: string;
  pointsLabel: (pts: number) => string;
  qrInstruction: string;
  visitOr: string;
  guidelinesTitle: string;
  guidelinesBullets: (totalQ: number, totalMarks: number, totalMins: number) => string[];
  sectionEasyHeading: string;
  sectionMediumHeading: string;
  sectionHardHeading: string;
  markSchemeTitle: string;
  markSchemeSubtitle: string;
  quickTableTitle: string;
  quickColTier: string;
  quickColNumber: string;
  quickColKey: string;
  quickColMarks: string;
  essayKeyPlaceholder: string;
  rubricHeading: string;
  keyPrefix: string;
  stepPrefix: string;
}

export function getPdfTerminology(track: 'sma' | 'osn' | 'igcse' = 'sma'): PdfTerminology {
  if (track === 'igcse') {
    return {
      isInternational: true,
      totalTime: (mins) => `${mins} mins`,
      totalQuestions: (count) => `${count} questions`,
      totalScoreLabel: 'Total Marks',
      totalScoreValue: (score) => `/${score}`,
      easyTierLabel: 'Easy',
      mediumTierLabel: 'Medium',
      hardTierLabel: 'Hard',
      pointsLabel: (pts) => `[${pts} mark${pts > 1 ? 's' : ''}]`,
      qrInstruction: 'Scan here to return to the course',
      visitOr: 'or visit',
      guidelinesTitle: 'Information for Candidates & Examination Guidelines',
      guidelinesBullets: (totalQ, totalMarks, totalMins) => [
        `This paper consists of <strong>${totalQ} standardized questions</strong> with a total allocation of <strong>${totalMarks} marks</strong>.`,
        `The recommended time limit is <strong>${totalMins} minutes</strong>.`,
        `Read each stimulus and problem carefully before determining your final answer.`,
        `The mark value for each question or sub-question is indicated in brackets <code>[ ... marks ]</code> on the right-hand side.`,
        `For numerical calculations, pay close attention to significant figures, chemical state symbols, and standard SI units.`,
      ],
      sectionEasyHeading: 'Easy Questions',
      sectionMediumHeading: 'Medium Questions',
      sectionHardHeading: 'Hard Questions',
      markSchemeTitle: 'Mark Scheme & Worked Solutions',
      markSchemeSubtitle: 'Official Marking Scheme, Final Keys & Step-by-Step Worked Solutions',
      quickTableTitle: 'Quick Answer Key Table',
      quickColTier: 'Difficulty',
      quickColNumber: 'No.',
      quickColKey: 'Final Answer Key',
      quickColMarks: 'Marks',
      essayKeyPlaceholder: 'Structured / Essay (See Worked Solutions)',
      rubricHeading: 'Step-by-Step Worked Solutions & Rubrics',
      keyPrefix: 'Key: ',
      stepPrefix: 'Step',
    };
  }

  // Standar Kurikulum Merdeka / SMA / OSN Indonesia
  return {
    isInternational: false,
    totalTime: (mins) => `${mins} menit`,
    totalQuestions: (count) => `${count} butir soal`,
    totalScoreLabel: 'Total Skor',
    totalScoreValue: (score) => `/${score} poin`,
    easyTierLabel: 'Tingkat Dasar (Easy)',
    mediumTierLabel: 'Tingkat Menengah (Medium)',
    hardTierLabel: 'Tingkat Lanjut (Hard)',
    pointsLabel: (pts) => `[${pts} poin]`,
    qrInstruction: 'Pindai QR untuk kembali ke kelas pembelajaran',
    visitOr: 'atau kunjungi',
    guidelinesTitle: 'Petunjuk Pengerjaan & Ketentuan Ujian',
    guidelinesBullets: (totalQ, totalMarks, totalMins) => [
      `Naskah ini memuat <strong>${totalQ} butir soal</strong> terstandarisasi dengan total alokasi <strong>${totalMarks} poin</strong>.`,
      `Waktu pengerjaan yang disarankan adalah <strong>${totalMins} menit</strong>.`,
      `Bacalah setiap stimulus soal dan pertanyaan dengan cermat sebelum menentukan jawaban akhir.`,
      `Bobot nilai masing-masing soal atau sub-soal tertera dalam tanda kurung siku <code>[ ... poin ]</code> pada sisi kanan.`,
      `Untuk soal hitungan, perhatikan ketepatan angka penting, fasa zat kimia, dan satuan pengukuran internasional.`,
    ],
    sectionEasyHeading: 'Soal Tingkat Dasar (Easy)',
    sectionMediumHeading: 'Soal Tingkat Menengah (Medium)',
    sectionHardHeading: 'Soal Tingkat Lanjut (Hard)',
    markSchemeTitle: 'Kunci Jawaban & Pembahasan Lengkap',
    markSchemeSubtitle: 'Pedoman Penskoran Resmi, Kunci Jawaban & Rubrik Penilaian Terstruktur',
    quickTableTitle: 'Tabel Kunci Jawaban Cepat',
    quickColTier: 'Tingkat Kesulitan',
    quickColNumber: 'Nomor',
    quickColKey: 'Kunci Jawaban Akhir',
    quickColMarks: 'Poin / Skor',
    essayKeyPlaceholder: 'Uraian (Lihat Pembahasan Lengkap)',
    rubricHeading: 'Rubrik & Pembahasan Solusi Bertingkat',
    keyPrefix: 'Kunci: ',
    stepPrefix: 'Langkah',
  };
}

interface ParsedOption {
  label: string;
  text: string;
}

interface ParsedQuestionItem {
  question: Question;
  tier: 'easy' | 'medium' | 'hard';
  stemHtml: string;
  options: ParsedOption[];
  hasSubQuestions: boolean;
  marks: number;
}

export class QuestionPdfExportService {
  /**
   * Menghasilkan dokumen HTML lengkap bergaya Save My Exams Question Paper
   */
  public generateQuestionPaperHtml(
    questions: Question[],
    options: QuestionPdfExportOptions
  ): string {
    const {
      documentType = 'questions_only',
      topicTitle,
      topicNumber,
      curriculumTrack = 'sma',
      courseLevel,
      subtopics = [],
      brandingTitle,
      subTitle,
      websiteUrl,
      restartNumberingPerSection = true,
    } = options;

    const pdfSettings: MaterialPdfSettings = pdfSettingsService.getSettings();
    const effectiveBrandName = brandingTitle || pdfSettings.brandName;
    const effectiveBrandIcon = pdfSettings.brandLogoIcon || '⚡';
    const effectiveCopyright = pdfSettings.copyrightNotice;
    const effectiveWebsite = websiteUrl || pdfSettings.websiteUrl;
    const textAlign = pdfSettings.textAlignment || 'justify';

    // Kelompokkan butir soal berdasarkan tingkat kesulitan
    const easyQuestions: Question[] = [];
    const mediumQuestions: Question[] = [];
    const hardQuestions: Question[] = [];

    questions.forEach((q) => {
      const tier = normalizeDifficultyTier(q.difficulty);
      if (tier === 'easy') easyQuestions.push(q);
      else if (tier === 'hard') hardQuestions.push(q);
      else mediumQuestions.push(q);
    });

    const totalQuestions = questions.length;
    const totalEstimatedMinutes = questions.reduce(
      (sum, q) => sum + (q.estimated_time_minutes || 2),
      0
    );

    // Hitung bobot nilai (marks)
    const easyMarks = easyQuestions.reduce((sum, q) => sum + (q.total_points || 1), 0);
    const mediumMarks = mediumQuestions.reduce((sum, q) => sum + (q.total_points || 1), 0);
    const hardMarks = hardQuestions.reduce((sum, q) => sum + (q.total_points || 1), 0);
    const totalMarks = easyMarks + mediumMarks + hardMarks;

    // Subjek & Jalur Kurikulum
    const courseSeries =
      brandingTitle ||
      (curriculumTrack === 'igcse'
        ? 'Cambridge (CIE) IGCSE · Chemistry'
        : curriculumTrack === 'sma'
        ? `Kimia SMA · ${courseLevel || 'Fase E / F'} · Kurikulum Merdeka`
        : 'Silabus Pembinaan Olimpiade Sains Nasional (OSN)');

    const courseSubject =
      subTitle ||
      (curriculumTrack === 'igcse'
        ? 'Multiple Choice & Structured Questions'
        : curriculumTrack === 'sma'
        ? `Latihan Soal Topik #${topicNumber || 1}`
        : 'Bank Soal Teori & Analitik OSN');

    const subtopicsLine =
      subtopics.length > 0
        ? subtopics.join(' / ')
        : 'Konsep Inti / Analisis Stoikiometri / Karakteristik Kimia & Reaktivitas';

    // Parsir isi pertanyaan
    const parsedEasy = easyQuestions.map((q) => this.parseQuestion(q));
    const parsedMedium = mediumQuestions.map((q) => this.parseQuestion(q));
    const parsedHard = hardQuestions.map((q) => this.parseQuestion(q));

    // Render Bagian-bagian Dokumen
    const showQuestions = documentType === 'questions_only' || documentType === 'questions_with_answers';
    const showMarkScheme = documentType === 'answers_only' || documentType === 'questions_with_answers';

    const terms = getPdfTerminology(curriculumTrack);
    const fontConfig = getPdfFontConfig(
      pdfSettings.fontFamily || 'inter',
      typeof window !== 'undefined' ? window.location.origin : ''
    );

    let sectionsHtml = '';
    let globalIndex = 1;

    if (showQuestions) {
      if (parsedEasy.length > 0) {
        const { html, nextIndex } = this.renderQuestionSection(
          terms.sectionEasyHeading,
          parsedEasy,
          restartNumberingPerSection ? 1 : globalIndex,
          terms
        );
        sectionsHtml += html;
        if (!restartNumberingPerSection) globalIndex = nextIndex;
      }

      if (parsedMedium.length > 0) {
        const { html, nextIndex } = this.renderQuestionSection(
          terms.sectionMediumHeading,
          parsedMedium,
          restartNumberingPerSection ? 1 : globalIndex,
          terms
        );
        sectionsHtml += html;
        if (!restartNumberingPerSection) globalIndex = nextIndex;
      }

      if (parsedHard.length > 0) {
        const { html, nextIndex } = this.renderQuestionSection(
          terms.sectionHardHeading,
          parsedHard,
          restartNumberingPerSection ? 1 : globalIndex,
          terms
        );
        sectionsHtml += html;
        if (!restartNumberingPerSection) globalIndex = nextIndex;
      }
    }

    let markSchemeHtml = '';
    if (showMarkScheme) {
      markSchemeHtml = this.renderMarkSchemeSection(
        [
          { tierName: terms.easyTierLabel, items: parsedEasy },
          { tierName: terms.mediumTierLabel, items: parsedMedium },
          { tierName: terms.hardTierLabel, items: parsedHard },
        ],
        restartNumberingPerSection,
        terms
      );
    }

    // Bangun HTML Lengkap
    return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>${topicTitle} - ${terms.isInternational ? 'Question Paper' : 'Naskah Soal & Kunci'} | ${effectiveBrandName}</title>
  ${fontConfig.linkTags}
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
  
  <style>
    ${fontConfig.fontFaceCss}

    /* ==============================================================
       CORE KATEX EMBEDDED STYLES (Mencegah Formula Pecah / Melompat)
       ============================================================== */
    .katex { font: normal 1.02em KaTeX_Main, Times New Roman, serif; line-height: 1.2; text-indent: 0; text-rendering: auto; border-color: currentColor; }
    .katex * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .katex .vlist-t { display: inline-table; table-layout: fixed; }
    .katex .vlist-r { display: table-row; }
    .katex .vlist { display: table-cell; vertical-align: bottom; position: relative; }
    .katex .mord, .katex .mbin, .katex .mrel { display: inline-block; }
    .katex-display { display: block; margin: 0.35em 0; text-align: center; }
    .katex-display > .katex { display: block; text-align: center; white-space: nowrap; }
    .katex .msupsub { text-align: left; }
    .katex .mfrac .vlist-t { vertical-align: -0.5em; }

    /* RESET & DASAR CETAK A4 */
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    @page {
      size: A4 portrait;
      margin: 18mm 20mm 20mm 20mm;
    }

    html, body {
      font-family: ${fontConfig.fontFamilyCss};
      font-size: 10pt;
      line-height: 1.5;
      color: #0f172a;
      background: #ffffff;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    body {
      background-color: #f8fafc;
      padding: 20px 0;
    }

    .sme-print-canvas {
      max-width: 840px;
      margin: 0 auto;
      background: #ffffff;
      box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.08);
      padding: 0;
      position: relative;
    }
      padding: 0;
      position: relative;
    }

    /* BAR TOMBOL AKSI CETAK (Hanya Tampil di Layar Monitor) */
    .sme-action-bar {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: #0f172a;
      color: #ffffff;
      padding: 10px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    }

    .sme-action-bar-left {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 13px;
      font-weight: 600;
    }

    .sme-btn-print {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: #0056D2;
      color: #ffffff;
      padding: 7px 16px;
      border-radius: 6px;
      font-size: 13px;
      font-weight: 700;
      border: none;
      cursor: pointer;
      transition: background 0.2s;
    }

    .sme-btn-print:hover {
      background: #004099;
    }

    .sme-btn-close {
      background: transparent;
      color: #94a3b8;
      border: 1px solid #334155;
      padding: 7px 14px;
      border-radius: 6px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
    }

    /* ==============================================================
       HALAMAN 1: COVER QUESTION PAPER RESMI A4 (COMPACT & BALANCED)
       ============================================================== */
    .sme-cover-container {
      padding: 20mm 20mm 16mm 20mm;
      page-break-after: always;
      break-after: page;
      position: relative;
      background: #ffffff;
      min-height: calc(297mm - 30mm);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .sme-cover-header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 24px;
    }

    .sme-lightning-icon {
      width: 26px;
      height: 32px;
      fill: #0056D2;
    }

    .sme-brand-text {
      font-size: 17px;
      font-weight: 900;
      color: #0f172a;
      letter-spacing: -0.3px;
      line-height: 1.1;
    }

    /* Baris Subjek & Badge Waktu */
    .sme-meta-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 10.5pt;
      font-weight: 600;
      color: #0f172a;
      padding-bottom: 12px;
      border-bottom: 1.5px solid #e2e8f0;
      margin-bottom: 18px;
    }

    .sme-meta-stats {
      display: flex;
      align-items: center;
      gap: 16px;
      color: #334155;
      font-weight: 600;
    }

    .sme-stat-badge {
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }

    .sme-pill-badge {
      display: inline-block;
      background: #f1f5f9;
      color: #475569;
      font-size: 9pt;
      font-weight: 700;
      padding: 3px 10px;
      border-radius: 9999px;
      margin-bottom: 12px;
    }

    .sme-cover-title {
      font-size: 26pt;
      font-weight: 900;
      line-height: 1.2;
      color: #0f172a;
      letter-spacing: -0.6px;
      margin-bottom: 10px;
    }

    .sme-cover-subtopics {
      font-size: 10.5pt;
      line-height: 1.5;
      color: #64748b;
      margin-bottom: 24px;
    }

    /* Dua Kolom Spesifikasi Soal & QR Code */
    .sme-cover-specs-grid {
      display: grid;
      grid-template-columns: 1.25fr 1fr;
      gap: 24px;
      align-items: start;
      margin-bottom: 24px;
      background: #f8fafc;
      padding: 16px 20px;
      border-radius: 12px;
      border: 1px solid #e2e8f0;
    }

    .sme-marks-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 10.5pt;
    }

    .sme-marks-table tr td {
      padding: 5px 0;
      color: #1e293b;
    }

    .sme-marks-table tr td:last-child {
      text-align: right;
      font-weight: 700;
      font-family: 'JetBrains Mono', monospace;
    }

    .sme-marks-table tr.total-row {
      border-top: 1.5px solid #0f172a;
      font-weight: 900;
      font-size: 11pt;
    }

    .sme-marks-table tr.total-row td {
      padding-top: 8px;
    }

    .sme-qr-card {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      text-align: right;
      gap: 8px;
    }

    .sme-qr-text {
      font-size: 9pt;
      line-height: 1.35;
      color: #334155;
    }

    .sme-qr-link {
      color: #0056D2;
      font-weight: 700;
      text-decoration: underline;
    }

    .sme-qr-wrapper {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .sme-qr-arrow {
      width: 44px;
      height: 30px;
      stroke: #6366f1;
      stroke-width: 2;
      fill: none;
    }

    .sme-qr-code-svg {
      width: 72px;
      height: 72px;
      background: #ffffff;
      border: 1px solid #cbd5e1;
      padding: 3px;
      border-radius: 4px;
    }

    /* Kotak Petunjuk Pengerjaan & Ketentuan Ujian */
    .sme-exam-guidelines-box {
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      padding: 14px 18px;
      background: #ffffff;
      margin-top: 6px;
    }

    .sme-guidelines-title {
      font-size: 9.5pt;
      font-weight: 800;
      color: #0f172a;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .sme-guidelines-list {
      list-style-type: disc;
      padding-left: 18px;
      font-size: 9pt;
      color: #475569;
      line-height: 1.5;
    }

    .sme-guidelines-list li {
      margin-bottom: 4px;
    }

    /* ==============================================================
       HALAMAN KONTEN SOAL (COMPACT, HIGH-DENSITY CONTINUOUS FLOW)
       ============================================================== */
    .sme-questions-body {
      padding: 14mm 20mm 16mm 20mm;
      background: #ffffff;
    }

    .sme-section-heading {
      font-size: 18pt;
      font-weight: 900;
      color: #0f172a;
      letter-spacing: -0.4px;
      margin-top: 10px;
      margin-bottom: 18px;
      padding-bottom: 6px;
      border-bottom: 2px solid #0f172a;
      break-inside: avoid;
      page-break-inside: avoid;
      break-after: avoid;
      page-break-after: avoid;
    }

    .sme-section-heading.tier-break {
      page-break-before: always;
      break-before: page;
      margin-top: 0;
    }

    /* Kartu Butir Soal */
    .sme-question-item {
      page-break-inside: avoid;
      break-inside: avoid;
      margin-bottom: 20px;
      padding-bottom: 14px;
      border-bottom: 1px solid #f1f5f9;
      position: relative;
    }

    .sme-q-row {
      display: flex;
      align-items: flex-start;
      gap: 12px;
    }

    .sme-q-number {
      font-size: 10.5pt;
      font-weight: 800;
      color: #0f172a;
      min-width: 18px;
      line-height: 1.5;
    }

    .sme-q-body {
      flex: 1;
      font-size: 10pt;
      line-height: 1.5;
      text-align: ${textAlign};
    }

    .sme-q-stem {
      color: #0f172a;
      margin-bottom: 8px;
    }

    /* Pilihan Ganda (A., B., C., D., E.) */
    .sme-mcq-list {
      margin-top: 6px;
      margin-bottom: 6px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .sme-mcq-option-row {
      display: flex;
      align-items: baseline;
      gap: 8px;
      font-size: 9.5pt;
      line-height: 1.45;
    }

    .sme-mcq-letter {
      font-weight: 800;
      min-width: 20px;
      color: #0f172a;
    }

    .sme-mcq-text {
      flex: 1;
      color: #1e293b;
    }

    /* Sub-soal Uraian (a, b, c) */
    .sme-sub-q-list {
      margin-top: 8px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .sme-sub-q-item {
      padding: 6px 0;
    }

    .sme-sub-q-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 8px;
      margin-bottom: 4px;
    }

    .sme-sub-q-label {
      font-weight: 800;
      color: #0f172a;
      margin-right: 6px;
    }

    .sme-sub-q-points {
      font-size: 8.5pt;
      font-weight: 700;
      color: #64748b;
      white-space: nowrap;
    }

    .sme-sub-q-answer-lines {
      margin-top: 6px;
      height: 36px;
      border-bottom: 1px dotted #cbd5e1;
      border-top: 1px dotted #cbd5e1;
      background: #fafafa;
      border-radius: 4px;
    }

    /* Indikator Mark di Kanan Bawah */
    .sme-q-mark-indicator {
      text-align: right;
      font-size: 9pt;
      font-weight: 700;
      color: #0f172a;
      margin-top: 6px;
    }

    /* Tabel & Diagram Centered */
    table.sme-exam-table {
      width: 100%;
      max-width: 95%;
      margin: 8px auto;
      border-collapse: collapse;
      border: 1.5px solid #000000;
      font-size: 9pt;
    }

    table.sme-exam-table th,
    table.sme-exam-table td {
      border: 1px solid #000000;
      padding: 4px 8px;
      text-align: center;
    }

    table.sme-exam-table th {
      background: #f8fafc;
      font-weight: 700;
      color: #000000;
    }

    /* ==============================================================
       HALAMAN MARK SCHEME & PEMBAHASAN (HIGH-DENSITY COMPACT FLOW)
       ============================================================== */
    .sme-mark-scheme-wrapper {
      page-break-before: always;
      break-before: page;
      padding: 16mm 22mm 18mm 22mm;
      background: #ffffff;
    }

    .sme-ms-title {
      font-size: 20pt;
      font-weight: 900;
      color: #0f172a;
      margin-bottom: 4px;
      letter-spacing: -0.4px;
      break-after: avoid;
      page-break-after: avoid;
    }

    .sme-ms-subtitle {
      font-size: 9.5pt;
      color: #64748b;
      margin-bottom: 16px;
      padding-bottom: 8px;
      border-bottom: 2px solid #0056D2;
      break-after: avoid;
      page-break-after: avoid;
    }

    .sme-ms-quick-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 22px;
      font-size: 8.5pt;
      page-break-inside: auto;
      break-inside: auto;
    }

    .sme-ms-quick-table thead {
      display: table-header-group;
    }

    .sme-ms-quick-table tr {
      page-break-inside: avoid;
      break-inside: avoid;
    }

    .sme-ms-quick-table th {
      background: #f1f5f9;
      color: #0f172a;
      font-weight: 800;
      padding: 6px 10px;
      border: 1px solid #cbd5e1;
      text-align: left;
    }

    .sme-ms-quick-table td {
      padding: 5px 10px;
      border: 1px solid #cbd5e1;
      color: #1e293b;
    }

    .sme-ms-quick-table tr:nth-child(even) {
      background: #f8fafc;
    }

    .sme-essay-ref {
      display: inline-block;
      font-size: 8pt;
      font-weight: 700;
      color: #0369a1;
      background: #f0f9ff;
      padding: 2px 8px;
      border-radius: 4px;
      border: 1px solid #bae6fd;
      font-family: inherit;
    }

    .sme-ms-heading-secondary {
      font-size: 12pt;
      font-weight: 800;
      color: #0f172a;
      margin-top: 16px;
      margin-bottom: 12px;
      padding-bottom: 4px;
      border-bottom: 1px solid #e2e8f0;
      break-after: avoid;
      page-break-after: avoid;
    }

    /* Kartu Solusi Rapat dengan indentasi lebar untuk bullet list */
    .sme-ms-card {
      page-break-inside: avoid;
      break-inside: avoid;
      border: 1px solid #e2e8f0;
      border-left: 5px solid #0056D2;
      border-radius: 8px;
      padding: 12px 18px 12px 24px;
      margin-bottom: 14px;
      background: #ffffff;
    }

    .sme-ms-card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      margin-bottom: 6px;
      padding-bottom: 6px;
      border-bottom: 1px solid #f1f5f9;
    }

    .sme-ms-q-badge {
      font-weight: 800;
      font-size: 9.5pt;
      color: #0056D2;
    }

    .sme-ms-correct-key {
      font-size: 9.5pt;
      font-weight: 900;
      color: #059669;
      background: #ecfdf5;
      padding: 2px 8px;
      border-radius: 4px;
      border: 1px solid #a7f3d0;
      font-family: 'JetBrains Mono', monospace;
    }

    .sme-ms-rubric-body {
      font-size: 9pt;
      line-height: 1.5;
      color: #334155;
      text-align: ${textAlign};
    }

    /* Memperlebar margin bullet agar tidak mengenai garis aksen biru */
    .sme-ms-rubric-body ul,
    .sme-ms-card ul {
      margin: 6px 0 8px 0 !important;
      padding-left: 20px !important;
      list-style-type: disc !important;
      list-style-position: outside !important;
    }

    .sme-ms-rubric-body ol,
    .sme-ms-card ol {
      margin: 6px 0 8px 0 !important;
      padding-left: 20px !important;
      list-style-type: decimal !important;
      list-style-position: outside !important;
    }

    .sme-ms-rubric-body li,
    .sme-ms-card li {
      margin-bottom: 4px !important;
      padding-left: 4px !important;
      line-height: 1.5;
    }

    /* Step header di dalam pembahasan */
    .sme-step-header {
      margin-top: 8px;
      margin-bottom: 4px;
      font-weight: 700;
      color: #0f172a;
      display: flex;
      align-items: baseline;
      gap: 6px;
    }

    .sme-step-badge {
      font-size: 8pt;
      font-weight: 800;
      color: #0369a1;
      background: #e0f2fe;
      padding: 1px 6px;
      border-radius: 3px;
      text-transform: uppercase;
      font-family: 'JetBrains Mono', monospace;
    }

    /* FOOTER SAVE MY EXAMS */
    .sme-footer-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 20mm;
      border-top: 1px solid #e2e8f0;
      font-size: 8pt;
      color: #64748b;
      background: #ffffff;
    }

    .sme-footer-brand {
      display: flex;
      align-items: center;
      gap: 5px;
      font-weight: 800;
      color: #0f172a;
    }

    .sme-footer-brand-bolt {
      color: #0056D2;
      font-size: 10pt;
    }

    .sme-footer-center {
      text-align: center;
      flex: 1;
      padding: 0 12px;
    }

    .sme-footer-center a {
      color: #0056D2;
      text-decoration: underline;
    }

    .sme-footer-page {
      font-weight: 700;
      font-family: 'JetBrains Mono', monospace;
      color: #0f172a;
    }

    /* ATURAN CETAK KHUSUS BROWSER */
    @media print {
      body {
        background: #ffffff !important;
        padding: 0 !important;
      }
      .sme-action-bar {
        display: none !important;
      }
      .sme-print-canvas {
        box-shadow: none !important;
        max-width: 100% !important;
        width: 100% !important;
      }
      .sme-cover-container {
        padding: 4mm 2mm 14mm 2mm !important;
        min-height: calc(100vh - 10mm) !important;
        page-break-after: always !important;
        break-after: page !important;
      }
      /* Cegah footer bertumpuk ganda pada halaman cover saat dicetak */
      .sme-cover-container .sme-footer-row {
        display: none !important;
      }
      .sme-questions-body {
        padding: 4mm 2mm 16mm 2mm !important;
      }
      .sme-mark-scheme-wrapper {
        padding: 4mm 2mm 16mm 2mm !important;
      }
      .sme-print-footer-fixed {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex !important;
        align-items: center;
        justify-content: space-between;
        padding: 4px 20mm;
        border-top: 1px solid #cbd5e1;
        font-size: 7.5pt;
        color: #64748b;
        background: #ffffff;
        z-index: 999;
      }
    }
  </style>
</head>
<body>

  <!-- BAR NAVIGASI CETAK (HANYA DITAMPILKAN DI MONITOR) -->
  <div class="sme-action-bar">
    <div class="sme-action-bar-left">
      <span>📄 Pratinjau Naskah Soal & Kunci (Save My Exams Edition)</span>
      <span style="color: #64748b;">•</span>
      <span style="color: #cbd5e1;">${totalQuestions} Butir Soal (${totalMarks} Marks)</span>
    </div>
    <div style="display: flex; align-items: center; gap: 10px;">
      <button type="button" class="sme-btn-print" onclick="window.print()">
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 6 2 18 2 18 9"></polyline>
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
          <rect x="6" y="14" width="12" height="8"></rect>
        </svg>
        <span>Cetak / Simpan PDF (A4)</span>
      </button>
      <button type="button" class="sme-btn-close" onclick="window.close()">Tutup</button>
    </div>
  </div>

  <div class="sme-print-canvas">
    
    <!-- ==============================================================
         HALAMAN 1: COVER QUESTION PAPER RESMI A4 (COMPACT & BALANCED)
         ============================================================== -->
    <div class="sme-cover-container">
      <div>
        <!-- Logo -->
        <div class="sme-cover-header">
          <svg class="sme-lightning-icon" viewBox="0 0 24 24">
            <path d="M13 2L3 14h7v8l11-14h-8l0-6z" />
          </svg>
          <div class="sme-brand-text">
            <span>${effectiveBrandName}</span>
          </div>
        </div>

        <!-- Meta Baris Kurikulum & Waktu -->
        <div class="sme-meta-row">
          <span>${courseSeries}</span>
          <div class="sme-meta-stats">
            <span class="sme-stat-badge">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>${terms.totalTime(totalEstimatedMinutes)}</span>
            </span>
            <span class="sme-stat-badge">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              <span>${terms.totalQuestions(totalQuestions)}</span>
            </span>
          </div>
        </div>

        <!-- Pill Badge Subjek -->
        <div class="sme-pill-badge">${courseSubject}</div>

        <!-- Judul Topik Utama -->
        <h1 class="sme-cover-title">${topicTitle}</h1>

        <!-- Sub-topik pemisah / -->
        <div class="sme-cover-subtopics">${subtopicsLine}</div>

        <!-- Kotak Breakdown Nilai & QR Code -->
        <div class="sme-cover-specs-grid">
          <div>
            <table class="sme-marks-table">
              <tbody>
                ${
                  easyQuestions.length > 0
                    ? `<tr><td>${terms.easyTierLabel} (${easyQuestions.length} ${terms.isInternational ? 'questions' : 'soal'})</td><td>/${easyMarks} ${terms.isInternational ? '' : 'poin'}</td></tr>`
                    : ''
                }
                ${
                  mediumQuestions.length > 0
                    ? `<tr><td>${terms.mediumTierLabel} (${mediumQuestions.length} ${terms.isInternational ? 'questions' : 'soal'})</td><td>/${mediumMarks} ${terms.isInternational ? '' : 'poin'}</td></tr>`
                    : ''
                }
                ${
                  hardQuestions.length > 0
                    ? `<tr><td>${terms.hardTierLabel} (${hardQuestions.length} ${terms.isInternational ? 'questions' : 'soal'})</td><td>/${hardMarks} ${terms.isInternational ? '' : 'poin'}</td></tr>`
                    : ''
                }
                <tr class="total-row">
                  <td>${terms.totalScoreLabel}</td>
                  <td>${terms.totalScoreValue(totalMarks)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- QR Code Akses Kursus -->
          <div class="sme-qr-card">
            <div class="sme-qr-text">
              <div>${terms.qrInstruction}</div>
              <div>${terms.visitOr} <a class="sme-qr-link" href="https://${effectiveWebsite}">${effectiveWebsite}</a></div>
            </div>
            <div class="sme-qr-wrapper">
              <svg class="sme-qr-arrow" viewBox="0 0 50 35">
                <path d="M 5 5 C 25 10, 30 20, 42 28 M 34 29 L 43 28 L 40 20" />
              </svg>
              ${this.renderQrCodeSvg(effectiveWebsite)}
            </div>
          </div>
        </div>

        <!-- Petunjuk Pengerjaan & Ketentuan Ujian (Mengisi Ruang Cover Secara Elegan) -->
        <div class="sme-exam-guidelines-box">
          <div class="sme-guidelines-title">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            <span>${terms.guidelinesTitle}</span>
          </div>
          <ul class="sme-guidelines-list">
            ${terms
              .guidelinesBullets(totalQuestions, totalMarks, totalEstimatedMinutes)
              .map((bullet) => `<li>${bullet}</li>`)
              .join('\n            ')}
          </ul>
        </div>
      </div>

      <!-- Footer Halaman 1 (Hanya aktif di preview layar; disembunyikan otomatis saat dicetak agar tidak tumpang tindih) -->
      ${this.renderFooter(
        1,
        effectiveBrandName,
        effectiveBrandIcon,
        effectiveCopyright,
        effectiveWebsite
      )}
    </div>

    <!-- ==============================================================
         HALAMAN 2+: KONTEN BUTIR-BUTIR SOAL (COMPACT CONTINUOUS FLOW)
         ============================================================== -->
    ${
      showQuestions
        ? `
      <div class="sme-questions-body">
        ${sectionsHtml}
      </div>
    `
        : ''
    }

    <!-- ==============================================================
         HALAMAN MARK SCHEME (KUNCI JAWABAN & SOLUSI LENGKAP)
         ============================================================== -->
    ${markSchemeHtml}

    <!-- Running Footer Otomatis Saat Dicetak -->
    <div class="sme-print-footer-fixed" style="display: none;">
      <div class="sme-footer-brand">
        <span class="sme-footer-brand-bolt">${effectiveBrandIcon}</span>
        <span>${effectiveBrandName}</span>
      </div>
      <div class="sme-footer-center">${effectiveCopyright}</div>
      <div class="sme-footer-page">${effectiveWebsite}</div>
    </div>

  </div>

</body>
</html>`;
  }

  /**
   * Render seksi kesulitan (Easy, Medium, Hard)
   */
  private renderQuestionSection(
    sectionTitle: string,
    items: ParsedQuestionItem[],
    startIndex: number,
    terms: PdfTerminology
  ): { html: string; nextIndex: number } {
    let currentIndex = startIndex;

    const questionsHtml = items
      .map((item) => {
        const qIndex = currentIndex++;
        return this.renderSingleQuestion(qIndex, item, terms);
      })
      .join('\n');

    const html = `
      <div class="sme-question-section-block">
        <h2 class="sme-section-heading">${sectionTitle}</h2>
        ${questionsHtml}
      </div>
    `;

    return { html, nextIndex: currentIndex };
  }

  /**
   * Render satu butir soal dengan spasi rapat & anti potong halaman
   */
  private renderSingleQuestion(
    index: number,
    item: ParsedQuestionItem,
    terms: PdfTerminology
  ): string {
    const { stemHtml, options, hasSubQuestions, marks, question } = item;

    let optionsHtml = '';
    if (options && options.length > 0) {
      optionsHtml = `
        <div class="sme-mcq-list">
          ${options
            .map(
              (opt) => `
            <div class="sme-mcq-option-row">
              <span class="sme-mcq-letter">${opt.label}.</span>
              <span class="sme-mcq-text">${opt.text}</span>
            </div>
          `
            )
            .join('')}
        </div>
      `;
    }

    let subQuestionsHtml = '';
    if (hasSubQuestions && question.sub_questions && question.sub_questions.length > 0) {
      subQuestionsHtml = `
        <div class="sme-sub-q-list">
          ${question.sub_questions
            .map(
              (sq) => `
            <div class="sme-sub-q-item">
              <div class="sme-sub-q-header">
                <div>
                  <span class="sme-sub-q-label">(${sq.label})</span>
                  <span>${parseAndRenderMixedText(sq.question_text)}</span>
                </div>
                <span class="sme-sub-q-points">${terms.pointsLabel(sq.points || 1)}</span>
              </div>
              <div class="sme-sub-q-answer-lines"></div>
            </div>
          `
            )
            .join('')}
        </div>
      `;
    }

    const markLabel = terms.pointsLabel(marks);

    return `
      <div class="sme-question-item">
        <div class="sme-q-row">
          <span class="sme-q-number">${index}</span>
          <div class="sme-q-body">
            <div class="sme-q-stem">${stemHtml}</div>
            ${optionsHtml}
            ${subQuestionsHtml}
            <div class="sme-q-mark-indicator">${markLabel}</div>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Render bagian Mark Scheme & Kunci Jawaban Lengkap (Continuous Flow, 2 Halaman Maksimal)
   */
  private renderMarkSchemeSection(
    tiers: { tierName: string; items: ParsedQuestionItem[] }[],
    restartPerSection: boolean,
    terms: PdfTerminology
  ): string {
    // 1. Bangun tabel ringkasan kunci jawaban cepat (Format Rapi & Ringkas, Anti-Overspill)
    const tableRows: string[] = [];
    let runningIndex = 1;

    tiers.forEach((tier) => {
      let tierIndex = restartPerSection ? 1 : runningIndex;
      tier.items.forEach((item) => {
        const qNum = tierIndex++;
        const rawAnswer = item.question.expected_final_answer?.trim() || '';

        // Tentukan apakah ini soal uraian/kompleks atau pilihan ganda ringkas
        const isEssayOrMultiStep =
          item.hasSubQuestions ||
          (item.question.sub_questions && item.question.sub_questions.length > 0) ||
          item.options.length === 0 ||
          rawAnswer.length > 35 ||
          rawAnswer.includes('\n');

        let keyDisplayHtml = '';
        if (isEssayOrMultiStep) {
          keyDisplayHtml = `<span class="sme-essay-ref">${terms.essayKeyPlaceholder}</span>`;
        } else if (rawAnswer) {
          keyDisplayHtml = `<span style="font-weight: 800; color: #0056D2; font-family: 'JetBrains Mono', monospace;">${parseAndRenderMixedText(rawAnswer)}</span>`;
        } else {
          keyDisplayHtml = `<span class="sme-essay-ref">${terms.essayKeyPlaceholder}</span>`;
        }

        tableRows.push(`
          <tr>
            <td><strong>${tier.tierName}</strong></td>
            <td style="text-align: center;"><strong>#${qNum}</strong></td>
            <td>${keyDisplayHtml}</td>
            <td style="text-align: right; font-weight: 700;">${item.marks}</td>
          </tr>
        `);
      });
      if (!restartPerSection) runningIndex = tierIndex;
    });

    // 2. Bangun pembahasan detail per soal (Terformat Rapi & Tanpa Bug 1. 1. 1.)
    let solutionsHtml = '';
    runningIndex = 1;

    tiers.forEach((tier) => {
      let tierIndex = restartPerSection ? 1 : runningIndex;
      tier.items.forEach((item) => {
        const qNum = tierIndex++;
        const rawRubric =
          item.question.solution_rubric ||
          (terms.isInternational
            ? 'Official standard marking rubric confirmed.'
            : 'Kunci jawaban telah terkonfirmasi sesuai silabus standar.');
        const answer = item.question.expected_final_answer;

        // Normalisasi format langkah pengerjaan agar rapi dan tidak mereset nomor 1.
        const cleanedRubric = this.formatSolutionRubric(rawRubric, terms.stepPrefix);

        solutionsHtml += `
          <div class="sme-ms-card">
            <div class="sme-ms-card-header">
              <span class="sme-ms-q-badge">${tier.tierName} · ${terms.isInternational ? 'Question' : 'Soal'} #${qNum}</span>
              ${answer ? `<span class="sme-ms-correct-key">${terms.keyPrefix}${answer}</span>` : ''}
              <span style="font-size: 8.5pt; font-weight: 700; color: #64748b;">${terms.pointsLabel(item.marks)}</span>
            </div>
            <div class="sme-ms-rubric-body">
              ${cleanedRubric}
            </div>
          </div>
        `;
      });
      if (!restartPerSection) runningIndex = tierIndex;
    });

    return `
      <div class="sme-mark-scheme-wrapper">
        <h1 class="sme-ms-title">${terms.markSchemeTitle}</h1>
        <div class="sme-ms-subtitle">${terms.markSchemeSubtitle}</div>

        <h3 style="font-size: 11pt; font-weight: 800; margin-bottom: 8px; color: #0f172a; break-after: avoid;">
          ${terms.quickTableTitle}
        </h3>
        <table class="sme-ms-quick-table">
          <thead>
            <tr>
              <th style="width: 26%;">${terms.quickColTier}</th>
              <th style="width: 12%; text-align: center;">${terms.quickColNumber}</th>
              <th style="width: 48%;">${terms.quickColKey}</th>
              <th style="width: 14%; text-align: right;">${terms.quickColMarks}</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows.join('')}
          </tbody>
        </table>

        <h3 class="sme-ms-heading-secondary">
          ${terms.rubricHeading}
        </h3>
        <div class="sme-ms-solutions-flow">
          ${solutionsHtml}
        </div>
      </div>
    `;
  }

  /**
   * Helper formatting rubric agar langkah pengerjaan rapi & tidak rusak oleh split paragraph
   */
  private formatSolutionRubric(rubricText: string, stepPrefix = 'Langkah'): string {
    // Normalisasi langkah: Ubah "1. **Langkah..." atau "1. Perhitungan..." menjadi badge elegan
    let text = rubricText;

    // Bersihkan header judul redundan jika ada "Kunci Jawaban: X" di awal
    text = text.replace(/^\*\*Kunci Jawaban:[^\n]+\*\*\s*/i, '');

    // Format langkah bertingkat: 1. Judul Langkah -> Badge Langkah/Step 1: Judul
    text = text.replace(
      /(?:^|\n)\s*(\d+)\.\s+(\*\*[^*]+\*\*|[^\n:]+:)/g,
      (_match, stepNum, title) => {
        const cleanTitle = title.replace(/\*\*/g, '').trim();
        return `\n\n<div class="sme-step-header"><span class="sme-step-badge">${stepPrefix} ${stepNum}</span><span class="sme-step-title">${cleanTitle}</span></div>\n`;
      }
    );

    return parseAndRenderMixedText(text);
  }

  /**
   * Helper parsing teks soal memisahkan narasi utama (stem) dan opsi pilihan (A, B, C, D, E)
   */
  private parseQuestion(question: Question): ParsedQuestionItem {
    const rawText = question.question_text || '';
    const tier = normalizeDifficultyTier(question.difficulty);
    const marks = question.total_points || 1;
    const hasSubQuestions = Boolean(question.sub_questions && question.sub_questions.length > 0);

    const options: ParsedOption[] = [];
    let stem = rawText;

    // Pola opsi pilihan ganda standar: \nA. ... \nB. ...
    const optionMatches = Array.from(
      rawText.matchAll(/(?:^|\n)\s*([A-E])\.\s+([\s\S]*?)(?=(?:\n\s*[A-E]\.\s+)|$)/g)
    );

    if (optionMatches.length >= 2) {
      // Ambil teks pertanyaan sebelum opsi A
      const firstOptionIndex = rawText.search(/(?:^|\n)\s*A\.\s+/);
      if (firstOptionIndex !== -1) {
        stem = rawText.substring(0, firstOptionIndex).trim();
      }

      optionMatches.forEach((m) => {
        options.push({
          label: m[1],
          text: parseAndRenderMixedText(m[2].trim()),
        });
      });
    }

    // Render KaTeX dan markdown pada stem
    let stemHtml = parseAndRenderMixedText(stem);

    // Transform tabel di stem agar menggunakan border solid khas Save My Exams
    stemHtml = stemHtml.replace(/<table([^>]*)>/gi, '<table class="sme-exam-table"$1>');

    return {
      question,
      tier,
      stemHtml,
      options,
      hasSubQuestions,
      marks,
    };
  }

  /**
   * Render Footer terpusat
   */
  private renderFooter(
    pageLabel: number | string,
    brandName: string,
    brandIcon: string,
    copyrightText: string,
    websiteUrl: string
  ): string {
    let noticeHtml = copyrightText;
    if (!noticeHtml.includes('<a') && websiteUrl && noticeHtml.includes(websiteUrl)) {
      noticeHtml = noticeHtml.replace(websiteUrl, `<a href="https://${websiteUrl}">${websiteUrl}</a>`);
    }

    return `
      <div class="sme-footer-row" style="padding: 10px 0 0 0; border-top: 1px solid #cbd5e1; margin-top: 20px;">
        <div class="sme-footer-brand">
          <span class="sme-footer-brand-bolt">${brandIcon}</span>
          <span>${brandName}</span>
        </div>
        <div class="sme-footer-center">
          ${noticeHtml}
        </div>
        <div class="sme-footer-page">${pageLabel}</div>
      </div>
    `;
  }

  /**
   * Render SVG QR Code bersih untuk footer/cover
   */
  private renderQrCodeSvg(_url: string): string {
    return `
      <svg class="sme-qr-code-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" fill="white" />
        <rect x="8" y="8" width="26" height="26" rx="3" fill="#0f172a" />
        <rect x="13" y="13" width="16" height="16" rx="2" fill="white" />
        <rect x="17" y="17" width="8" height="8" rx="1" fill="#0f172a" />
        
        <rect x="66" y="8" width="26" height="26" rx="3" fill="#0f172a" />
        <rect x="71" y="13" width="16" height="16" rx="2" fill="white" />
        <rect x="75" y="17" width="8" height="8" rx="1" fill="#0f172a" />
        
        <rect x="8" y="66" width="26" height="26" rx="3" fill="#0f172a" />
        <rect x="13" y="71" width="16" height="16" rx="2" fill="white" />
        <rect x="17" y="75" width="8" height="8" rx="1" fill="#0f172a" />
        
        <rect x="38" y="10" width="6" height="6" fill="#0f172a" />
        <rect x="48" y="14" width="6" height="6" fill="#0f172a" />
        <rect x="56" y="10" width="6" height="6" fill="#0f172a" />
        
        <rect x="40" y="26" width="6" height="6" fill="#0f172a" />
        <rect x="50" y="24" width="6" height="6" fill="#0f172a" />
        <rect x="40" y="38" width="6" height="6" fill="#0f172a" />
        <rect x="48" y="44" width="6" height="6" fill="#0f172a" />
        <rect x="58" y="38" width="6" height="6" fill="#0f172a" />
        
        <rect x="10" y="42" width="6" height="6" fill="#0f172a" />
        <rect x="22" y="46" width="6" height="6" fill="#0f172a" />
        <rect x="14" y="54" width="6" height="6" fill="#0f172a" />
        
        <rect x="68" y="42" width="6" height="6" fill="#0f172a" />
        <rect x="78" y="46" width="6" height="6" fill="#0f172a" />
        <rect x="86" y="40" width="6" height="6" fill="#0f172a" />
        
        <rect x="40" y="66" width="6" height="6" fill="#0f172a" />
        <rect x="52" y="72" width="6" height="6" fill="#0f172a" />
        <rect x="44" y="82" width="6" height="6" fill="#0f172a" />
        <rect x="56" y="84" width="6" height="6" fill="#0f172a" />
        
        <rect x="68" y="66" width="6" height="6" fill="#0f172a" />
        <rect x="78" y="74" width="6" height="6" fill="#0f172a" />
        <rect x="72" y="84" width="6" height="6" fill="#0f172a" />
        <rect x="84" y="82" width="6" height="6" fill="#0f172a" />
      </svg>
    `;
  }

  /**
   * Membuka dokumen di jendela baru dan memicu print dialog setelah font termuat sempurna
   */
  public exportQuestionsToPrint(
    questions: Question[],
    options: QuestionPdfExportOptions
  ): void {
    const html = this.generateQuestionPaperHtml(questions, options);
    const printWindow = window.open('', '_blank');

    if (!printWindow) {
      alert(
        'Jendela pop-up diblokir oleh browser. Harap izinkan pop-up pada peramban Anda untuk mencetak/mengunduh PDF naskah soal.'
      );
      return;
    }

    printWindow.document.open();
    printWindow.document.write(html);
    printWindow.document.close();

    // Tunggu font Inter dan KaTeX selesai termuat sempurna sebelum dialog print
    printWindow.onload = async () => {
      try {
        if (printWindow.document.fonts) {
          await printWindow.document.fonts.ready;
        }
      } catch (e) {
        // Fallback jika browser tidak mendukung document.fonts.ready
      }
      setTimeout(() => {
        printWindow.focus();
      }, 400);
    };
  }
}

export const questionPdfExportService = new QuestionPdfExportService();
