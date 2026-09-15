/**
 * examExportService.ts
 * Layanan Ekspor PDF Naskah Soal Olimpiade & Rubrik Penskoran Guru (Mark Scheme)
 * Menghasilkan tata letak standar Puspresnas / IChO siap cetak (A4) dengan formula KaTeX presisi.
 */

import { parseAndRenderMixedText } from '../lib/katex-helpers';
import type { Question } from '../types/database';

export type ExamExportType = 'student_exam' | 'teacher_mark_scheme';

export interface ExamExportOptions {
  type: ExamExportType;
  worksheetTitle: string;
  targetLevel?: string; // e.g. "SELEKSI TINGKAT PROVINSI (OSP)"
  timeLimitMinutes: number;
  passScore?: number;
  questions: Question[];
  includeCoverPage?: boolean;
  includeConstantsTable?: boolean;
  includeAnswerSpace?: boolean;
  institutionName?: string;
}

export class ExamExportService {
  /**
   * Menghasilkan dokumen HTML lengkap yang siap dicetak menjadi PDF
   */
  public generateExamHtml(options: ExamExportOptions): string {
    const {
      type,
      worksheetTitle,
      targetLevel = 'SELEKSI TINGKAT KABUPATEN/KOTA / PROVINSI',
      timeLimitMinutes,
      passScore = 75,
      questions,
      includeCoverPage = true,
      includeConstantsTable = true,
      includeAnswerSpace = true,
      institutionName = 'KEMENTERIAN PENDIDIKAN, KEBUDAYAAN, RISET, DAN TEKNOLOGI'
    } = options;

    const totalPoints = questions.reduce((sum, q) => sum + (q.total_points || 10), 0);
    const isTeacherRubric = type === 'teacher_mark_scheme';

    // 1. Generate Question Items HTML
    const questionsHtml = questions
      .map((q, idx) => {
        const renderedQuestionText = parseAndRenderMixedText(q.question_text);
        const qPoints = q.total_points || 10;

        let subQuestionsHtml = '';
        if (q.sub_questions && q.sub_questions.length > 0) {
          subQuestionsHtml = `
            <div class="sub-questions-list">
              ${q.sub_questions
                .map(
                  (sq) => `
                <div class="sub-question-item">
                  <div class="sub-q-header">
                    <span class="sub-q-label">(${sq.label})</span>
                    <span class="sub-q-points">[Bobot: ${sq.points} Poin]</span>
                  </div>
                  <div class="sub-q-text">${parseAndRenderMixedText(sq.question_text)}</div>
                  ${
                    !isTeacherRubric && includeAnswerSpace
                      ? `<div class="student-answer-box">
                          <span class="answer-box-label">Ruang Pengerjaan (${sq.label}):</span>
                         </div>`
                      : ''
                  }
                  ${
                    isTeacherRubric && sq.rubric
                      ? `<div class="sub-rubric-box">
                          <strong>Kriteria Penilaian (${sq.label}):</strong>
                          <div>${parseAndRenderMixedText(sq.rubric)}</div>
                          ${sq.expected_answer ? `<div class="expected-ans"><strong>Kunci:</strong> ${sq.expected_answer}</div>` : ''}
                         </div>`
                      : ''
                  }
                </div>
              `
                )
                .join('')}
            </div>
          `;
        } else if (!isTeacherRubric && includeAnswerSpace) {
          subQuestionsHtml = `
            <div class="student-answer-box large">
              <span class="answer-box-label">Ruang Pengerjaan & Analisis Siswa:</span>
            </div>
          `;
        }

        let teacherRubricSection = '';
        if (isTeacherRubric) {
          teacherRubricSection = `
            <div class="teacher-solution-container">
              <div class="solution-badge">PEDOMAN PENSKORAN RESMI (KUNCI & RUBRIK)</div>
              ${
                q.expected_final_answer
                  ? `<div class="expected-final-box">
                      <strong>Jawaban Akhir yang Diharapkan:</strong>
                      <div class="final-ans-value">${parseAndRenderMixedText(q.expected_final_answer)}</div>
                     </div>`
                  : ''
              }
              ${
                q.solution_rubric
                  ? `<div class="full-rubric-box">
                      <strong>Rubrik Langkah Pengerjaan Parsial:</strong>
                      <div>${parseAndRenderMixedText(q.solution_rubric)}</div>
                     </div>`
                  : ''
              }
              ${
                q.solution_framework_template
                  ? `<div class="scaffold-box">
                      <strong>Kerangka 4 Langkah Pembinaan (Scaffolding):</strong>
                      <pre class="scaffold-pre">${q.solution_framework_template}</pre>
                     </div>`
                  : ''
              }
            </div>
          `;
        }

        return `
          <div class="question-card avoid-break">
            <div class="question-header">
              <div class="q-title-row">
                <span class="q-number">SOAL NOMOR ${idx + 1}</span>
                <span class="q-badge level">${q.difficulty}</span>
                <span class="q-badge topic">Topik #${q.pillar_number}: ${q.subtopic}</span>
              </div>
              <div class="q-meta-right">
                <span class="q-score">[Alokasi Skor: ${qPoints} Poin]</span>
                <span class="q-time">Est: ${q.estimated_time_minutes || 15} Menit</span>
              </div>
            </div>

            <div class="question-title-text">${q.title}</div>
            <div class="question-body">${renderedQuestionText}</div>
            ${subQuestionsHtml}
            ${teacherRubricSection}
          </div>
        `;
      })
      .join('<hr class="question-separator" />');

    // 2. Fundamental Constants Table
    const constantsHtml = `
      <div class="constants-container avoid-break">
        <div class="constants-title">TABEL TETAPAN & RUMUS DASAR KIMIA-FISIKA</div>
        <div class="constants-grid">
          <div>• Tetapan Gas Ideal ($R$): $8.314\\text{ J/mol}\\cdot\\text{K} = 0.08206\\text{ L}\\cdot\\text{atm/mol}\\cdot\\text{K}$</div>
          <div>• Tetapan Faraday ($F$): $96,485\\text{ C/mol } e^-$</div>
          <div>• Bilangan Avogadro ($N_A$): $6.022 \\times 10^{23}\\text{ partikel/mol}$</div>
          <div>• Tetapan Planck ($h$): $6.626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$</div>
          <div>• Kecepatan Cahaya ($c$): $2.998 \\times 10^8\\text{ m/s}$</div>
          <div>• Konversi Suhu Mutlak: $T(\\text{K}) = t(^\\circ\\text{C}) + 273.15$</div>
          <div>• Persamaan Nernst ($298.15\\text{ K}$): $E = E^\\circ - \\frac{0.0592}{n} \\log Q$</div>
          <div>• Hubungan Termodinamika: $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ = -RT \\ln K$</div>
        </div>
      </div>
    `;

    return `
      <!DOCTYPE html>
      <html lang="id">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${worksheetTitle} - ${isTeacherRubric ? 'Mark Scheme & Rubrik' : 'Naskah Soal Ujian'}</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" />
        <style>
          @page {
            size: A4;
            margin: 15mm 15mm 20mm 15mm;
            @bottom-center {
              content: "Olimpiade Sains Nasional - Bidang Kimia | Halaman " counter(page);
              font-size: 8pt;
              color: #64748b;
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
          }

          * {
            box-sizing: border-box;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          body {
            font-family: 'Times New Roman', Times, serif;
            font-size: 10.5pt;
            line-height: 1.5;
            color: #0f172a;
            margin: 0;
            padding: 0;
            background-color: #ffffff;
          }

          .print-toolbar {
            position: sticky;
            top: 0;
            background: #1e293b;
            color: #ffffff;
            padding: 12px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 4px 10px rgba(0,0,0,0.15);
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            z-index: 1000;
          }

          .print-toolbar button {
            background: #059669;
            color: white;
            border: none;
            padding: 8px 18px;
            font-weight: 600;
            border-radius: 6px;
            cursor: pointer;
            font-size: 13px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
          }

          .print-toolbar button:hover {
            background: #047857;
          }

          @media print {
            .print-toolbar {
              display: none !important;
            }
          }

          .page-container {
            max-width: 820px;
            margin: 0 auto;
            padding: 24px;
          }

          @media print {
            .page-container {
              max-width: 100%;
              padding: 0;
            }
          }

          /* Header Resmi */
          .official-header {
            text-align: center;
            border-bottom: 3px double #0f172a;
            padding-bottom: 12px;
            margin-bottom: 18px;
            font-family: 'Times New Roman', Times, serif;
          }

          .institution-name {
            font-size: 11pt;
            font-weight: bold;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }

          .agency-name {
            font-size: 13pt;
            font-weight: bold;
            letter-spacing: 1px;
            color: #0f172a;
          }

          .exam-title-main {
            font-size: 14pt;
            font-weight: 900;
            margin-top: 6px;
            letter-spacing: 0.5px;
            color: #047857;
          }

          .exam-subtitle {
            font-size: 11pt;
            font-weight: bold;
            letter-spacing: 1.5px;
            color: #334155;
          }

          .exam-badge-rubric {
            display: inline-block;
            background: #b91c1c;
            color: white;
            padding: 3px 12px;
            font-weight: bold;
            font-size: 9pt;
            letter-spacing: 1px;
            border-radius: 4px;
            margin-top: 6px;
            font-family: sans-serif;
          }

          /* Identity Box */
          .student-id-box {
            border: 1.5px solid #1e293b;
            padding: 10px 14px;
            margin-bottom: 18px;
            border-radius: 6px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 9.5pt;
          }

          .id-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px 18px;
          }

          .id-row {
            display: flex;
            align-items: baseline;
          }

          .id-label {
            width: 130px;
            font-weight: 600;
            color: #334155;
          }

          .id-line {
            flex-grow: 1;
            border-bottom: 1px dotted #64748b;
            height: 14px;
          }

          /* Petunjuk */
          .instructions-box {
            background-color: #f8fafc;
            border: 1px solid #cbd5e1;
            padding: 10px 14px;
            margin-bottom: 18px;
            border-radius: 6px;
            font-size: 9pt;
          }

          .instructions-box h4 {
            margin: 0 0 6px 0;
            font-size: 9.5pt;
            color: #0f172a;
            text-transform: uppercase;
          }

          .instructions-box ol {
            margin: 0;
            padding-left: 18px;
          }

          .instructions-box li {
            margin-bottom: 4px;
          }

          /* Konstanta */
          .constants-container {
            border: 1px solid #94a3b8;
            padding: 8px 12px;
            margin-bottom: 24px;
            background: #fafafa;
            border-radius: 4px;
            font-size: 8.5pt;
          }

          .constants-title {
            font-weight: bold;
            font-size: 9pt;
            text-align: center;
            margin-bottom: 6px;
            border-bottom: 1px solid #cbd5e1;
            padding-bottom: 4px;
            color: #1e293b;
          }

          .constants-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4px 12px;
          }

          /* Questions */
          .question-card {
            margin-bottom: 22px;
          }

          .question-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1.5px solid #0f172a;
            padding-bottom: 4px;
            margin-bottom: 8px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }

          .q-title-row {
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .q-number {
            font-weight: 800;
            font-size: 11pt;
            color: #0f172a;
          }

          .q-badge {
            font-size: 8pt;
            font-weight: bold;
            padding: 1px 6px;
            border-radius: 3px;
          }

          .q-badge.level {
            background: #e0e7ff;
            color: #3730a3;
          }

          .q-badge.topic {
            background: #f1f5f9;
            color: #475569;
          }

          .q-meta-right {
            display: flex;
            gap: 12px;
            font-size: 9pt;
            font-weight: 600;
          }

          .q-score {
            color: #047857;
          }

          .q-time {
            color: #64748b;
          }

          .question-title-text {
            font-size: 11pt;
            font-weight: bold;
            color: #1e293b;
            margin-bottom: 6px;
          }

          .question-body {
            font-size: 10.5pt;
            margin-bottom: 12px;
            text-align: justify;
          }

          /* Sub questions */
          .sub-questions-list {
            margin-top: 10px;
            padding-left: 4px;
          }

          .sub-question-item {
            margin-bottom: 14px;
          }

          .sub-q-header {
            display: flex;
            align-items: center;
            gap: 6px;
            font-weight: bold;
            margin-bottom: 4px;
          }

          .sub-q-label {
            font-size: 10.5pt;
          }

          .sub-q-points {
            font-size: 8.5pt;
            color: #047857;
            font-family: sans-serif;
          }

          .sub-q-text {
            font-size: 10pt;
            padding-left: 18px;
            margin-bottom: 6px;
          }

          /* Student Answer Box */
          .student-answer-box {
            margin-top: 6px;
            margin-left: 18px;
            border: 1px dashed #94a3b8;
            height: 90px;
            border-radius: 4px;
            padding: 6px 10px;
            background: #fcfcfc;
            position: relative;
          }

          .student-answer-box.large {
            height: 180px;
            margin-left: 0;
          }

          .answer-box-label {
            font-size: 7.5pt;
            color: #94a3b8;
            font-family: sans-serif;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          /* Teacher Rubric Styling */
          .teacher-solution-container {
            margin-top: 14px;
            border: 1.5px solid #059669;
            background: #f0fdf4;
            border-radius: 6px;
            padding: 12px 14px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 9pt;
          }

          .solution-badge {
            font-weight: 800;
            color: #047857;
            font-size: 8.5pt;
            letter-spacing: 0.5px;
            margin-bottom: 8px;
            border-bottom: 1px solid #bbf7d0;
            padding-bottom: 4px;
          }

          .expected-final-box {
            background: #ffffff;
            border: 1px solid #86efac;
            padding: 8px 12px;
            border-radius: 4px;
            margin-bottom: 10px;
          }

          .final-ans-value {
            font-size: 10pt;
            font-weight: bold;
            color: #047857;
            margin-top: 2px;
          }

          .full-rubric-box {
            margin-bottom: 8px;
            line-height: 1.5;
          }

          .scaffold-box {
            background: #ffffff;
            border: 1px solid #cbd5e1;
            padding: 6px 10px;
            border-radius: 4px;
            font-size: 8pt;
          }

          .scaffold-pre {
            white-space: pre-wrap;
            font-family: 'Courier New', Courier, monospace;
            margin: 4px 0 0 0;
            color: #334155;
          }

          .sub-rubric-box {
            margin-left: 18px;
            background: #fefce8;
            border-left: 3px solid #ca8a04;
            padding: 6px 10px;
            font-size: 8.5pt;
            margin-top: 4px;
          }

          .expected-ans {
            color: #047857;
            font-weight: 600;
            margin-top: 2px;
          }

          .question-separator {
            border: none;
            border-top: 1px solid #cbd5e1;
            margin: 20px 0;
          }

          .avoid-break {
            break-inside: avoid;
            page-break-inside: avoid;
          }

          .page-break {
            break-after: page;
            page-break-after: always;
          }
        </style>
      </head>
      <body>
        <!-- Print Toolbar for Web Browser Preview -->
        <div class="print-toolbar">
          <div>
            <strong>${worksheetTitle}</strong> — [${isTeacherRubric ? 'Pedoman Penskoran' : 'Naskah Soal'}] (${questions.length} Butir Soal, ${totalPoints} Poin)
          </div>
          <div>
            <button onclick="window.print()">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/><path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/></svg>
              Cetak / Simpan PDF
            </button>
          </div>
        </div>

        <div class="page-container">
          <!-- Kop Surat Resmi -->
          <div class="official-header">
            <div class="institution-name">${institutionName}</div>
            <div class="agency-name">PUSAT PRESTASI NASIONAL (PUSPRESNAS)</div>
            <div class="exam-title-main">OLIMPIADE SAINS NASIONAL (OSN) BIDANG KIMIA</div>
            <div class="exam-subtitle">${targetLevel}</div>
            ${isTeacherRubric ? '<div class="exam-badge-rubric">DOKUMEN RAHASIA - PEDOMAN PENSKORAN & RUBRIK GURU</div>' : ''}
          </div>

          <!-- Lembar Identitas Siswa (Khusus Naskah Siswa) -->
          ${
            !isTeacherRubric && includeCoverPage
              ? `
            <div class="student-id-box avoid-break">
              <div class="id-grid">
                <div class="id-row"><span class="id-label">Nama Lengkap:</span><div class="id-line"></div></div>
                <div class="id-row"><span class="id-label">Nomor Peserta/NISN:</span><div class="id-line"></div></div>
                <div class="id-row"><span class="id-label">Asal Sekolah:</span><div class="id-line"></div></div>
                <div class="id-row"><span class="id-label">Kabupaten/Provinsi:</span><div class="id-line"></div></div>
              </div>
            </div>
          `
              : ''
          }

          <!-- Petunjuk Pengerjaan -->
          ${
            includeCoverPage
              ? `
            <div class="instructions-box avoid-break">
              <h4>PETUNJUK UMUM PENGERJAAN:</h4>
              <ol>
                <li>Naskah ini memuat <strong>${questions.length} butir soal terstruktur</strong> dengan total bobot <strong>${totalPoints} poin</strong>.</li>
                <li>Alokasi waktu pengerjaan resmi: <strong>${timeLimitMinutes} menit</strong> (Passing Grade: ${passScore}%).</li>
                <li>Tuliskan langkah kalkulasi, persamaan reaksi setara, dan penalaran ilmiah Anda dengan rapi. Nilai parsial diberikan untuk tahapan yang benar.</li>
                <li>Diperbolehkan menggunakan kalkulator sains (non-programmable) dan lembar tabel periodik terlampir.</li>
                ${isTeacherRubric ? '<li><strong>Rubrik Guru:</strong> Evaluasi ketepatan satuan, angka penting (significant figures), dan konsep kunci sesuai panduan.</li>' : ''}
              </ol>
            </div>
          `
              : ''
          }

          <!-- Tabel Tetapan Dasar -->
          ${includeConstantsTable ? constantsHtml : ''}

          <!-- Butir Soal Ujian -->
          ${questionsHtml}
        </div>
      </body>
      </html>
    `;
  }

  /**
   * Membuka dokumen di jendela baru dan memicu dialog Print/PDF
   */
  public exportExamToPrint(options: ExamExportOptions): void {
    const html = this.generateExamHtml(options);
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Popup diblokir oleh browser. Harap izinkan popup untuk mencetak PDF soal.');
      return;
    }

    printWindow.document.open();
    printWindow.document.write(html);
    printWindow.document.close();

    // Beri jeda agar font KaTeX selesai dimuat sempurna
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.focus();
      }, 500);
    };
  }
}

export const examExportService = new ExamExportService();
