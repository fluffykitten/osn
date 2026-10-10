/**
 * materialPdfExportService.ts
 * Layanan Ekspor PDF Materi Sains Kimia SMA & OSN
 * Mengadopsi 1:1 Layout & Format Save My Exams:
 * 1. Halaman Cover: Subjek & Badge, Banner Highlight Biru, Daftar Isi (Contents) dengan Bullet Bintang
 * 2. Kolom Catatan Siswa: "Your notes" dengan ikon pensil biru & garis batas putus-putus vertikal di sisi kanan
 * 3. Halaman Konten: Capsule pill subtopik, heading tebal, square bullets (▪), bold keywords
 * 4. Box "Examiner Tips and Tricks" dengan border biru tebal & ikon lampu
 * 5. Tabel bergaris tepi solid hitam tegas & diagram terpusat dengan caption miring
 * 6. KaTeX & mhchem terender murni dengan resolusi vektor tajam (siap cetak A4)
 * 7. Footer yang dapat dikustomisasi secara dinamis oleh Admin melalui halaman pengaturan
 * 8. Format paragraf teks rata kiri-kanan (justified alignment)
 */

import { parseAndRenderMixedText, renderKaTeX } from '../lib/katex-helpers';
import type { MaterialItem, ConceptBlock, CheckpointQuizItem } from '../data/materialsData';
import type { SmaMaterialItem } from '../data/smaMaterialsData';
import { pdfSettingsService, getPdfFontConfig, type MaterialPdfSettings } from './pdfSettingsService';
import { KATEX_EMBEDDED_CSS } from './katexEmbeddedCss';

export interface MaterialPdfExportOptions {
  includeYourNotesMargin?: boolean;
  includeWorkedExamples?: boolean;
  includeCheckpoints?: boolean;
  brandingTitle?: string;
  subTitle?: string;
  websiteUrl?: string;
}

export class MaterialPdfExportService {
  /**
   * Menghasilkan HTML lengkap dengan styling Save My Exams siap cetak A4
   */
  public generateMaterialHtml(
    material: MaterialItem | SmaMaterialItem,
    options: MaterialPdfExportOptions = {}
  ): string {
    const {
      includeYourNotesMargin = true,
      includeWorkedExamples = true,
      includeCheckpoints = true,
      brandingTitle,
      subTitle,
      websiteUrl,
    } = options;

    const pdfSettings: MaterialPdfSettings = pdfSettingsService.getSettings();
    const effectiveBrandName = brandingTitle || pdfSettings.brandName;
    const effectiveBrandIcon = pdfSettings.brandLogoIcon || '⚡';
    const effectiveCopyright = pdfSettings.copyrightNotice;
    const effectiveWebsite = websiteUrl || pdfSettings.websiteUrl;
    const textAlign = pdfSettings.textAlignment || 'justify';

    const isSma = 'curriculumPhase' in material;
    const isIgcse = material.level === 'IGCSE' || material.level === 'AS' || material.level === 'A2';

    // Label Header & Badge
    const courseSeries =
      brandingTitle ||
      (isIgcse
        ? 'Cambridge (CIE) IGCSE'
        : isSma
        ? `Kurikulum Merdeka · ${(material as SmaMaterialItem).grade} (${(material as SmaMaterialItem).curriculumPhase})`
        : 'Silabus Pembinaan Olimpiade Sains Nasional (OSN)');

    const courseSubject =
      subTitle || (isIgcse ? 'Chemistry' : isSma ? 'Kimia SMA' : 'Kimia Teori & Analitik OSN');

    const tierSubtitle = isIgcse
      ? 'Extended tier only'
      : isSma
      ? `Semester ${(material as SmaMaterialItem).semester} · Modul #${material.topic_number}`
      : `Tingkat ${material.level} · Puspresnas & IChO Standard`;

    // 1. Bangun Daftar Isi (Contents) untuk Cover Page (Hanya materi konseptual agar tidak terlalu panjang)
    const tocItems: { title: string; category: string }[] = [];

    if (material.prerequisites && material.prerequisites.length > 0) {
      material.prerequisites.forEach((p) => {
        tocItems.push({ title: p.title, category: 'Prasyarat' });
      });
    }

    if (material.core_concepts && material.core_concepts.length > 0) {
      material.core_concepts.forEach((c) => {
        tocItems.push({ title: c.title, category: 'Konsep Inti' });
      });
    }

    // 2. Render Bagian Prasyarat
    const prerequisitesHtml = (material.prerequisites || [])
      .map((block, idx) =>
        this.renderConceptSection(
          block,
          `Prasyarat Fondasi ${idx + 1}`,
          tierSubtitle,
          includeYourNotesMargin,
          pdfSettings
        )
      )
      .join('\n');

    // 3. Render Bagian Konsep Inti
    const coreConceptsHtml = (material.core_concepts || [])
      .map((block, idx) =>
        this.renderConceptSection(
          block,
          `Konsep Inti ${idx + 1}`,
          tierSubtitle,
          includeYourNotesMargin,
          pdfSettings
        )
      )
      .join('\n');

    // 4. Render Bagian Contoh Soal (Worked Examples)
    let workedExamplesHtml = '';
    if (includeWorkedExamples && material.worked_examples && material.worked_examples.length > 0) {
      workedExamplesHtml = material.worked_examples
        .map((block, idx) =>
          this.renderWorkedExampleSection(
            block,
            idx + 1,
            tierSubtitle,
            includeYourNotesMargin,
            pdfSettings
          )
        )
        .join('\n');
    }

    // 5. Render Bagian Checkpoint Quizzes (jika ada dan diaktifkan)
    let checkpointsHtml = '';
    if (includeCheckpoints) {
      const allQuizzes: { blockTitle: string; quiz: CheckpointQuizItem }[] = [];
      [
        ...(material.prerequisites || []),
        ...(material.core_concepts || []),
        ...(material.worked_examples || []),
      ].forEach((block) => {
        if (block.checkpointQuizzes && block.checkpointQuizzes.length > 0) {
          block.checkpointQuizzes.forEach((q) => {
            allQuizzes.push({ blockTitle: block.title, quiz: q });
          });
        }
      });

      if (allQuizzes.length > 0) {
        checkpointsHtml = this.renderCheckpointsSection(
          allQuizzes,
          tierSubtitle,
          includeYourNotesMargin,
          pdfSettings
        );
      }
    }

    const coverFooterHtml = this.renderFooter(
      '1',
      effectiveBrandName,
      effectiveBrandIcon,
      effectiveCopyright,
      effectiveWebsite
    );

    const fontConfig = getPdfFontConfig(
      pdfSettings.fontFamily || 'inter',
      typeof window !== 'undefined' ? window.location.origin : ''
    );

    // 6. Template HTML Penuh
    return `
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${material.title} - ${effectiveBrandName}</title>
  
  ${fontConfig.linkTags}
  <!-- KaTeX & Code Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" />

  <style>
    ${fontConfig.fontFaceCss}

    /* ==============================================================
       CORE KATEX EMBEDDED STYLES & ANTI-CRAMPED FRACTION SYSTEM
       ============================================================== */
    ${KATEX_EMBEDDED_CSS}

    /* ============================================================
       SAVE MY EXAMS OFFICIAL PDF LAYOUT & PAGED MEDIA SYSTEM
       ============================================================ */
    @page {
      size: A4 portrait;
      margin: 18mm 20mm 20mm 20mm;
      @bottom-right {
        content: counter(page);
        font-family: 'Inter', sans-serif;
        font-size: 8.5pt;
        font-weight: 700;
        color: #0f172a;
      }
    }

    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    html, body {
      margin: 0;
      padding: 0;
      font-family: ${fontConfig.fontFamilyCss};
      font-size: 10pt;
      line-height: 1.55;
      color: #0f172a;
      background-color: #ffffff;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    /* Print Toolbar (Layar Browser) */
    .sme-toolbar {
      position: sticky;
      top: 0;
      background: #0f172a;
      color: #ffffff;
      padding: 12px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 4px 14px rgba(0,0,0,0.2);
      font-family: 'Inter', sans-serif;
      z-index: 9999;
    }

    .sme-toolbar-left {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .sme-toolbar-title {
      font-weight: 700;
      font-size: 14px;
      letter-spacing: -0.2px;
    }

    .sme-toolbar-badge {
      background: #0284c7;
      color: #ffffff;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
    }

    .sme-toolbar-actions {
      display: flex;
      gap: 10px;
    }

    .sme-btn-print {
      background: #0284c7;
      color: #ffffff;
      border: none;
      padding: 8px 18px;
      font-weight: 700;
      font-size: 13px;
      border-radius: 6px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: background 0.2s;
    }

    .sme-btn-print:hover {
      background: #0369a1;
    }

    .sme-btn-close {
      background: #334155;
      color: #e2e8f0;
      border: none;
      padding: 8px 14px;
      font-weight: 600;
      font-size: 13px;
      border-radius: 6px;
      cursor: pointer;
    }

    @media print {
      .sme-toolbar {
        display: none !important;
      }
    }

    /* Container Dokumen */
    .sme-document-container {
      max-width: 840px;
      margin: 0 auto;
      padding: 20px 24px 60px 24px;
      background: #ffffff;
    }

    @media print {
      .sme-toolbar {
        display: none !important;
      }
      .sme-document-container {
        max-width: 100%;
        margin: 0;
        padding: 0;
      }
      .sme-page-grid {
        min-height: auto !important;
        height: auto !important;
      }
      .sme-section-wrapper {
        margin-bottom: 0 !important;
      }
      .sme-footer-row {
        margin-top: 18px !important;
      }
    }

    /* ============================================================
       TATA LETAK 2 KOLOM (KONTEN 82% + YOUR NOTES 18%)
       ============================================================ */
    .sme-page-grid {
      display: flex;
      width: 100%;
      min-height: 100%;
      position: relative;
    }

    .sme-main-column {
      flex: 1;
      padding-right: 22px;
      ${
        includeYourNotesMargin
          ? `border-right: 1.5px dashed #cbd5e1;`
          : ''
      }
    }

    .sme-notes-column {
      width: 135px;
      min-width: 135px;
      padding-left: 14px;
      display: ${includeYourNotesMargin ? 'block' : 'none'};
      position: relative;
    }

    .sme-notes-header {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 10pt;
      font-weight: 600;
      color: #0f172a;
      padding-top: 4px;
      user-select: none;
    }

    .sme-pencil-icon {
      width: 15px;
      height: 15px;
      color: #0284c7;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
    }

    /* ============================================================
       COVER PAGE (HALAMAN 1)
       ============================================================ */
    .sme-cover-wrapper {
      break-after: page;
      page-break-after: always;
      padding-bottom: 40px;
    }

    .sme-cover-header {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 24px;
    }

    .sme-badge-circle {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: #0f172a;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      flex-shrink: 0;
    }

    .sme-badge-circle svg {
      width: 22px;
      height: 22px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2.2;
    }

    .sme-badge-text {
      display: flex;
      flex-direction: column;
    }

    .sme-badge-series {
      font-size: 11pt;
      font-weight: 800;
      color: #0f172a;
      letter-spacing: -0.2px;
    }

    .sme-badge-subject {
      font-size: 20pt;
      font-weight: 900;
      color: #0f172a;
      letter-spacing: -0.5px;
      line-height: 1.15;
    }

    /* Pill Highlight Biru Judul Topik */
    .sme-topic-banner {
      background: #eff6ff;
      border-radius: 6px;
      padding: 9px 16px;
      margin-bottom: 20px;
      font-size: 16pt;
      font-weight: 800;
      color: #0f172a;
      letter-spacing: -0.3px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    /* Daftar Isi (Contents) */
    .sme-toc-card {
      margin-top: 6px;
    }

    .sme-toc-title {
      font-size: 12pt;
      font-weight: 800;
      color: #0f172a;
      margin-bottom: 10px;
    }

    .sme-toc-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 7px;
    }

    .sme-toc-item {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      font-size: 10pt;
      color: #1e293b;
      font-weight: 500;
      line-height: 1.35;
    }

    .sme-toc-star {
      color: #0284c7;
      font-size: 13pt;
      line-height: 1;
      font-weight: 900;
      flex-shrink: 0;
    }

    .sme-cover-summary {
      margin-top: 22px;
      padding: 14px 18px;
      background: #f8fafc;
      border-left: 4px solid #0284c7;
      border-radius: 0 8px 8px 0;
      font-size: 10pt;
      color: #334155;
      line-height: 1.55;
      text-align: ${textAlign};
    }

    .sme-cover-summary-title {
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 6px;
      font-size: 10.5pt;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    /* ============================================================
       HALAMAN KONTEN (HALAMAN 2+)
       ============================================================ */
    .sme-section-wrapper {
      break-before: page;
      page-break-before: always;
      padding-top: 4px;
      margin-bottom: 24px;
    }

    .sme-section-header-group {
      break-inside: avoid !important;
      page-break-inside: avoid !important;
      break-after: avoid !important;
      page-break-after: avoid !important;
    }

    .sme-subtopic-capsule {
      display: inline-block;
      background: #eff6ff;
      color: #0f172a;
      font-weight: 700;
      font-size: 10.5pt;
      padding: 4px 14px;
      border-radius: 4px;
      margin-bottom: 8px;
      letter-spacing: -0.1px;
      break-inside: avoid;
      page-break-inside: avoid;
      break-after: avoid;
      page-break-after: avoid;
    }

    .sme-section-title {
      font-size: 18pt;
      font-weight: 800;
      color: #0f172a;
      letter-spacing: -0.4px;
      margin: 4px 0 6px 0;
      line-height: 1.25;
      break-inside: avoid;
      page-break-inside: avoid;
      break-after: avoid;
      page-break-after: avoid;
    }

    .sme-tier-tag {
      font-size: 10.5pt;
      font-weight: 700;
      color: #334155;
      margin-bottom: 16px;
      break-inside: avoid;
      page-break-inside: avoid;
      break-after: avoid;
      page-break-after: avoid;
    }

    /* Body Text Rata Kiri-Kanan (Justify) & Square Bullets */
    .sme-body-content {
      font-size: 10pt;
      line-height: 1.55;
      color: #1e293b;
      text-align: ${textAlign};
    }

    .sme-body-content p {
      margin: 8px 0 12px 0;
      font-size: 10pt;
      line-height: 1.55;
      text-align: ${textAlign};
    }

    .sme-body-content ul {
      list-style: none;
      padding-left: 0;
      margin: 10px 0 14px 0;
    }

    .sme-body-content ul > li {
      position: relative;
      padding-left: 18px;
      margin-bottom: 7px;
      font-size: 10pt;
      line-height: 1.55;
      text-align: ${textAlign};
    }

    .sme-body-content ul > li::before {
      content: "▪";
      position: absolute;
      left: 0;
      top: -1px;
      font-size: 11pt;
      color: #0f172a;
    }

    .sme-body-content ol {
      list-style-type: decimal;
      padding-left: 22px;
      margin: 10px 0 14px 0;
    }

    .sme-body-content ol > li {
      margin-bottom: 7px;
      font-size: 10pt;
      line-height: 1.55;
      text-align: ${textAlign};
    }

    .sme-body-content h3, 
    .sme-body-content h4, 
    .sme-body-content h5 {
      font-weight: 800;
      color: #0f172a;
      margin-top: 18px;
      margin-bottom: 8px;
      break-after: avoid;
      page-break-after: avoid;
      text-align: left;
    }

    .sme-body-content h3 {
      font-size: 13pt;
    }

    .sme-body-content h4 {
      font-size: 11.5pt;
    }

    .sme-body-content h5 {
      font-size: 10.5pt;
    }

    .sme-bold {
      font-weight: 700;
      color: #0f172a;
    }

    /* ============================================================
       BOX "EXAMINER TIPS AND TRICKS"
       ============================================================ */
    .sme-examiner-tip-box {
      margin: 18px 0;
      padding: 12px 16px;
      border-left: 4.5px solid #0284c7;
      background: #ffffff;
      border-radius: 0 6px 6px 0;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .sme-tip-header-row {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 8px;
    }

    .sme-tip-circle-icon {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: #0284c7;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      flex-shrink: 0;
    }

    .sme-tip-circle-icon svg {
      width: 13px;
      height: 13px;
      fill: currentColor;
    }

    .sme-tip-title-text {
      font-size: 11.5pt;
      font-weight: 800;
      color: #0f172a;
      letter-spacing: -0.2px;
    }

    .sme-tip-body {
      font-size: 10pt;
      color: #334155;
      line-height: 1.55;
      text-align: ${textAlign};
    }

    /* ============================================================
       TABEL PERBANDINGAN & GRID
       ============================================================ */
    .sme-table-container {
      margin: 16px 0;
      width: 100%;
      overflow-x: auto;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .sme-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 10pt;
      margin: 6px 0;
    }

    .sme-table th, 
    .sme-table td {
      border: 1px solid #0f172a;
      padding: 7px 12px;
      text-align: left;
      vertical-align: middle;
    }

    .sme-table th {
      font-weight: 700;
      background: #f8fafc;
      text-align: center;
    }

    /* ============================================================
       DIAGRAM & ILUSTRASI
       ============================================================ */
    .sme-diagram-wrapper {
      margin: 18px 0;
      text-align: center;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .sme-diagram-wrapper svg,
    .sme-body-content svg,
    .sme-main-column svg {
      max-width: 100% !important;
      height: auto !important;
      display: block;
      margin: 0 auto;
    }

    .sme-diagram-image {
      max-width: 100%;
      height: auto;
      margin: 0 auto;
      display: block;
    }

    .sme-diagram-caption {
      font-size: 9.5pt;
      font-style: italic;
      color: #475569;
      margin-top: 8px;
      display: block;
      line-height: 1.4;
    }

    /* ============================================================
       WORKED EXAMPLES (CONTOH SOAL & PEMBAHASAN)
       ============================================================ */
    .sme-worked-example-card {
      margin: 16px 0 20px 0;
      border: 1.5px solid #0284c7;
      border-radius: 8px;
      background: #ffffff;
      overflow: visible;
      break-inside: auto;
      page-break-inside: auto;
    }

    .sme-example-header-bar {
      background: #eff6ff;
      border-bottom: 1px solid #bfdbfe;
      padding: 8px 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      break-inside: avoid;
      page-break-inside: avoid;
      break-after: avoid;
      page-break-after: avoid;
    }

    .sme-example-content {
      padding: 14px 16px;
      font-size: 10pt;
      line-height: 1.55;
      text-align: ${textAlign};
      break-inside: auto;
      page-break-inside: auto;
    }

    /* ============================================================
       PERSISTENT FOOTER (CUSTOMIZABLE VIA ADMIN)
       ============================================================ */
    .sme-footer-row {
      margin-top: 30px;
      padding-top: 8px;
      border-top: 1px solid #e2e8f0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 8.5pt;
      color: #475569;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .sme-footer-brand {
      display: flex;
      align-items: center;
      gap: 6px;
      font-weight: 800;
      color: #0f172a;
    }

    .sme-footer-brand-logo {
      color: #0284c7;
      font-size: 13pt;
      line-height: 1;
    }

    .sme-footer-center {
      text-align: center;
      color: #64748b;
    }

    .sme-footer-center a {
      color: #0284c7;
      text-decoration: underline;
    }

    .sme-footer-page {
      font-weight: 700;
      color: #0f172a;
    }

    /* Anti Orphan Heading */
    h1, h2, h3, h4 {
      break-after: avoid;
      page-break-after: avoid;
    }

    .avoid-break {
      break-inside: avoid;
      page-break-inside: avoid;
    }
  </style>
</head>
<body>

  <!-- Print Toolbar untuk Browser Preview -->
  <div class="sme-toolbar">
    <div class="sme-toolbar-left">
      <div class="sme-toolbar-title">${material.title}</div>
      <span class="sme-toolbar-badge">${isIgcse ? 'IGCSE' : isSma ? 'SMA' : 'OSN'}</span>
    </div>
    <div class="sme-toolbar-actions">
      <button class="sme-btn-print" onclick="window.print()">
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/><path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/></svg>
        Cetak / Simpan PDF
      </button>
      <button class="sme-btn-close" onclick="window.close()">Tutup Tab</button>
    </div>
  </div>

  <div class="sme-document-container">
    
    <!-- ==========================================
         HALAMAN 1: COVER & CONTENTS
         ========================================== -->
    <div class="sme-cover-wrapper">
      <div class="sme-page-grid">
        <div class="sme-main-column">
          
          <div class="sme-cover-header">
            <div class="sme-badge-circle">
              <!-- Atom Icon -->
              <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/></svg>
            </div>
            <div class="sme-badge-text">
              <span class="sme-badge-series">${courseSeries}</span>
              <span class="sme-badge-subject">${courseSubject}</span>
            </div>
          </div>

          <div class="sme-topic-banner">
            <span>${material.title}</span>
          </div>

          <div class="sme-toc-card">
            <div class="sme-toc-title">Contents</div>
            <ul class="sme-toc-list">
              ${tocItems
                .map(
                  (item) => `
                <li class="sme-toc-item">
                  <span class="sme-toc-star">✻</span>
                  <span>${item.title}</span>
                </li>
              `
                )
                .join('')}
            </ul>
          </div>

          <div class="sme-cover-summary">
            <div class="sme-cover-summary-title">Ringkasan Materi & Target Kompetensi</div>
            <div>${material.summary}</div>
          </div>

        </div>

        <div class="sme-notes-column">
          <div class="sme-notes-header">
            <svg class="sme-pencil-icon" viewBox="0 0 24 24"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
            <span>Your notes</span>
          </div>
        </div>
      </div>

      ${coverFooterHtml}
    </div>

    <!-- ==========================================
         HALAMAN 2+: KONTEN MATERI UTAMA
         ========================================== -->
    ${prerequisitesHtml}
    ${coreConceptsHtml}
    ${workedExamplesHtml}
    ${checkpointsHtml}

  </div>

</body>
</html>
`;
  }

  /**
   * Helper Render Footer yang terpusat dan dapat dikustomisasi
   */
  private renderFooter(
    pageLabel: string,
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
      <div class="sme-footer-row">
        <div class="sme-footer-brand">
          <span class="sme-footer-brand-logo">${brandIcon}</span>
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
   * Render satu blok konsep (Prasyarat atau Konsep Inti)
   */
  private renderConceptSection(
    block: ConceptBlock,
    capsuleText: string,
    tierSubtitle: string,
    includeNotes: boolean,
    settings: MaterialPdfSettings
  ): string {
    const renderedBody = this.transformMarkdownToSaveMyExams(block.content);

    let keyFormulasHtml = '';
    if (block.keyFormulas && block.keyFormulas.length > 0) {
      keyFormulasHtml = `
        <div class="sme-table-container avoid-break" style="margin-top: 18px;">
          <table class="sme-table">
            <thead>
              <tr>
                <th style="width: 35%;">Persamaan / Parameter Kunci</th>
                <th>Formulasi KaTeX</th>
              </tr>
            </thead>
            <tbody>
              ${block.keyFormulas
                .map(
                  (f) => `
                <tr>
                  <td><strong>${f.name}</strong></td>
                  <td style="text-align: center;">${renderKaTeX(f.formula.includes('\\displaystyle') ? f.formula : `\\displaystyle ${f.formula}`, false)}</td>
                </tr>
              `
                )
                .join('')}
            </tbody>
          </table>
        </div>
      `;
    }

    const notesHtml = includeNotes
      ? `
          <div class="sme-notes-column">
            <div class="sme-notes-header">
              <svg class="sme-pencil-icon" viewBox="0 0 24 24"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
              <span>Your notes</span>
            </div>
          </div>
        `
      : '';

    const footerHtml = this.renderFooter(
      'Dokumen Seri Resmi',
      settings.brandName,
      settings.brandLogoIcon,
      settings.copyrightNotice,
      settings.websiteUrl
    );

    return `
      <div class="sme-section-wrapper">
        <div class="sme-page-grid">
          <div class="sme-main-column">
            
            <div class="sme-section-header-group">
              <div class="sme-subtopic-capsule">${capsuleText}</div>
              <h2 class="sme-section-title">${block.title}</h2>
              <div class="sme-tier-tag">${tierSubtitle}</div>
            </div>

            <div class="sme-body-content">
              ${renderedBody}
            </div>

            ${keyFormulasHtml}

          </div>

          ${notesHtml}
        </div>

        ${footerHtml}
      </div>
    `;
  }

  /**
   * Render blok Worked Examples (Contoh Soal & Pembahasan Bertingkat)
   */
  private renderWorkedExampleSection(
    block: ConceptBlock,
    index: number,
    tierSubtitle: string,
    includeNotes: boolean,
    settings: MaterialPdfSettings
  ): string {
    const renderedBody = this.transformMarkdownToSaveMyExams(block.content);

    const notesHtml = includeNotes
      ? `
          <div class="sme-notes-column">
            <div class="sme-notes-header">
              <svg class="sme-pencil-icon" viewBox="0 0 24 24"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
              <span>Your notes</span>
            </div>
          </div>
        `
      : '';

    const footerHtml = this.renderFooter(
      'Worked Examples',
      settings.brandName,
      settings.brandLogoIcon,
      settings.copyrightNotice,
      settings.websiteUrl
    );

    return `
      <div class="sme-section-wrapper">
        <div class="sme-page-grid">
          <div class="sme-main-column">
            
            <div class="sme-section-header-group">
              <div class="sme-subtopic-capsule">Worked Example ${index}</div>
              <h2 class="sme-section-title">${block.title}</h2>
              <div class="sme-tier-tag">${tierSubtitle} · Analisis Langkah Solutif</div>
            </div>

            <div class="sme-worked-example-card">
              <div class="sme-example-header-bar">
                <span class="sme-example-header-title">Contoh Soal & Pembahasan Terpandu</span>
                <span style="font-size: 8pt; color: #0369a1; font-weight: bold;">[OSN / IChO Standards]</span>
              </div>
              <div class="sme-example-content sme-body-content">
                ${renderedBody}
              </div>
            </div>

          </div>

          ${notesHtml}
        </div>

        ${footerHtml}
      </div>
    `;
  }

  /**
   * Render bagian Checkpoint Quizzes
   */
  private renderCheckpointsSection(
    quizzes: { blockTitle: string; quiz: CheckpointQuizItem }[],
    tierSubtitle: string,
    includeNotes: boolean,
    settings: MaterialPdfSettings
  ): string {
    const notesHtml = includeNotes
      ? `
          <div class="sme-notes-column">
            <div class="sme-notes-header">
              <svg class="sme-pencil-icon" viewBox="0 0 24 24"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
              <span>Your notes</span>
            </div>
          </div>
        `
      : '';

    const footerHtml = this.renderFooter(
      'Checkpoint Quizzes',
      settings.brandName,
      settings.brandLogoIcon,
      settings.copyrightNotice,
      settings.websiteUrl
    );

    return `
      <div class="sme-section-wrapper">
        <div class="sme-page-grid">
          <div class="sme-main-column">
            
            <div class="sme-section-header-group">
              <div class="sme-subtopic-capsule">Kuis Uji Konseptual</div>
              <h2 class="sme-section-title">Checkpoint Pemahaman & Miskonsepsi</h2>
              <div class="sme-tier-tag">${tierSubtitle} · Latihan Mandiri</div>
            </div>

            <div class="sme-body-content">
              ${quizzes
                .map(
                  (item, idx) => `
                <div class="avoid-break" style="margin-bottom: 20px; padding: 14px; border: 1px solid #cbd5e1; border-radius: 8px; background: #fafafa;">
                  <div style="font-size: 9.5pt; font-weight: 800; color: #0284c7; margin-bottom: 4px;">SOAL #${idx + 1} (${item.blockTitle})</div>
                  <div style="font-weight: 700; font-size: 10.5pt; margin-bottom: 10px; color: #0f172a; line-height: 1.5;">${parseAndRenderMixedText(item.quiz.question)}</div>
                  ${
                    item.quiz.options && item.quiz.options.length > 0
                      ? `
                    <div style="margin-left: 12px; margin-bottom: 10px;">
                      ${item.quiz.options
                        .map(
                          (opt, optIdx) => `
                        <div style="margin-bottom: 5px; font-size: 10pt; line-height: 1.5;">
                          <strong>${String.fromCharCode(65 + optIdx)}.</strong> ${parseAndRenderMixedText(opt)}
                        </div>
                      `
                        )
                        .join('')}
                    </div>
                  `
                      : ''
                  }
                  <div style="margin-top: 10px; padding: 10px 14px; background: #ffffff; border-left: 3.5px solid #059669; border-radius: 4px; font-size: 9.8pt; line-height: 1.55;">
                    <div style="color: #059669; font-weight: bold; margin-bottom: 2px;">Kunci & Penjelasan Konseptual:</div>
                    <div>${parseAndRenderMixedText(item.quiz.explanation)}</div>
                  </div>
                </div>
              `
                )
                .join('')}
            </div>

          </div>

          ${notesHtml}
        </div>

        ${footerHtml}
      </div>
    `;
  }

  /**
   * Mengonversi Markdown mentah ke HTML bergaya Save My Exams:
   * - Menemukan Callouts (> [!WARNING], > [!TIP], dll) dan merubahnya menjadi "Examiner Tips and Tricks"
   * - Menata square bullet points
   * - Menata tabel grid
   * - KaTeX rendering
   */
  private transformMarkdownToSaveMyExams(content: string): string {
    if (!content) return '';

    // Gunakan parser inti untuk KaTeX dan struktur Markdown
    let html = parseAndRenderMixedText(content);

    // 1. Transform Callout boxes menjadi Save My Exams "Examiner Tips and Tricks"
    // Tangkap box callout yang dibungkus oleh laser-anchor-block
    html = html.replace(
      /<div data-laser-block="\d+" class="laser-anchor-block">\s*(<div class="my-4 p-4(?:\.5)? (?:rounded-2xl border|bg-emerald-50)[\s\S]*?)<\/div>(?=\s*<div data-laser-block=|\s*$)/gi,
      (_match, innerCallout) => this.convertToExaminerTip(innerCallout)
    );

    html = html.replace(
      /<div data-laser-block="\d+" class="laser-anchor-block">\s*(<blockquote[\s\S]*?<\/blockquote>)\s*<\/div>(?=\s*<div data-laser-block=|\s*$)/gi,
      (_match, innerQuote) => this.convertToExaminerTip(innerQuote, 'Key Examiner Note')
    );

    // Fallback standalone callouts
    html = html.replace(
      /<div class="my-4 p-4(?:\.5)? (?:rounded-2xl border|bg-emerald-50)[\s\S]*?<\/div>\s*<\/div>/gi,
      (match) => this.convertToExaminerTip(match)
    );

    // 2. Transform table wrappers agar menggunakan border solid khas Save My Exams
    html = html.replace(/<div class="my-4 overflow-x-auto rounded-xl border border-slate-200[\s\S]*?<table class="min-w-full divide-y divide-slate-200">([\s\S]*?)<\/table><\/div>/gi, (_match, innerTable) => {
      return `
        <div class="sme-table-container">
          <table class="sme-table">
            ${innerTable}
          </table>
        </div>
      `;
    });

    // 3. Transform unordered list agar rapi
    html = html.replace(/<ul class="([^"]*)">/g, '<ul class="sme-bullet-list">');

    return html;
  }

  /**
   * Mengubah Callout menjadi Save My Exams Examiner Tips and Tricks box
   */
  private convertToExaminerTip(htmlBlock: string, defaultTitle = 'Examiner Tips and Tricks'): string {
    let title = defaultTitle;
    let iconColor = '#0284c7';
    let borderColor = '#0284c7';

    // Deteksi tipe callout berdasarkan kata kunci badge/label
    if (/PERINGATAN|MISKONSEPSI|BAHAYA|CAUTION|DANGER|WARNING/i.test(htmlBlock)) {
      title = 'Examiner Warning & Common Misconceptions';
      iconColor = '#dc2626';
      borderColor = '#dc2626';
    } else if (/TIPS|ANALISIS|TIP/i.test(htmlBlock)) {
      title = 'Examiner Tips and Tricks';
      iconColor = '#0284c7';
      borderColor = '#0284c7';
    } else if (/PENTING|IMPORTANT/i.test(htmlBlock)) {
      title = 'Key Examiner Notes & Exam Priorities';
      iconColor = '#4f46e5';
      borderColor = '#4f46e5';
    } else if (/Kesimpulan(?:\s+Evaluator)?\s+Juri/i.test(htmlBlock)) {
      title = 'Kesimpulan Evaluator Juri (Gold Standard)';
      iconColor = '#059669';
      borderColor = '#059669';
    } else if (/CATATAN|INFORMASI|NOTE|INFO/i.test(htmlBlock)) {
      title = 'Key Examiner Notes';
      iconColor = '#0284c7';
      borderColor = '#0284c7';
    }

    // Ambil judul spesifik jika ada
    const titleMatch = htmlBlock.match(/<span class="[^"]*font-bold[^"]*text-(?:amber|emerald|indigo|sky|rose|slate)-950[^"]*">([^<]+)<\/span>/i);
    if (titleMatch && titleMatch[1]) {
      title = `${title}: ${titleMatch[1].trim()}`;
    }

    // Ambil isi teks di dalam callout
    let contentText = htmlBlock;
    const bodyMatch = htmlBlock.match(/<div class="text-[^"]*font-sans">([\s\S]*?)<\/div>\s*<\/div>$/i);
    if (bodyMatch && bodyMatch[1]) {
      contentText = bodyMatch[1].trim();
    } else {
      contentText = htmlBlock
        .replace(/<div class="flex items-center[\s\S]*?<\/div>/i, '')
        .replace(/<span class="[^"]*rounded-full[\s\S]*?<\/span>/gi, '')
        .replace(/^<div[^>]*>/, '')
        .replace(/<\/div>\s*<\/div>$/, '')
        .trim();
    }

    return `
      <div class="sme-examiner-tip-box" style="border-left-color: ${borderColor};">
        <div class="sme-tip-header-row">
          <div class="sme-tip-circle-icon" style="background: ${iconColor};">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          </div>
          <span class="sme-tip-title-text">${title}</span>
        </div>
        <div class="sme-tip-body">
          ${contentText}
        </div>
      </div>
    `;
  }

  /**
   * Membuka dokumen Save My Exams di jendela baru dan langsung memicu print preview
   */
  public exportMaterialToPrint(
    material: MaterialItem | SmaMaterialItem,
    options: MaterialPdfExportOptions = {}
  ): void {
    const html = this.generateMaterialHtml(material, options);
    const printWindow = window.open('', '_blank');

    if (!printWindow) {
      alert(
        'Jendela pop-up diblokir oleh browser. Harap izinkan pop-up pada peramban Anda untuk mencetak/mengunduh PDF materi.'
      );
      return;
    }

    printWindow.document.open();
    printWindow.document.write(html);
    printWindow.document.close();

    // Beri jeda 600ms agar font Inter dan font KaTeX selesai termuat sempurna sebelum dialog cetak
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.focus();
      }, 600);
    };
  }
}

export const materialPdfExportService = new MaterialPdfExportService();
