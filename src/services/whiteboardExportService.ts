/**
 * Layanan Ekspor Whiteboard (STEMBoard)
 * Mendukung Ekspor PNG/JPEG resolusi tinggi, SVG Vektor, dan PDF Multi-Halaman via jsPDF.
 */

import { jsPDF } from 'jspdf';
import type { WhiteboardDocument } from '../types/whiteboard';
import { PAGE_FORMATS } from '../types/whiteboard';
import {
  renderDocumentToOffscreenCanvas,
  renderPageToOffscreenCanvas,
  ensureAllImagesLoaded,
  computeDocumentBoundingBox,
} from './whiteboardEngine';

// Download file blob langsung ke browser user
export function triggerFileDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Ekspor Gambar (PNG / JPEG)
export async function exportWhiteboardToImage(
  doc: WhiteboardDocument,
  format: 'image/png' | 'image/jpeg' = 'image/png',
  quality = 0.95,
  scale = 2.0,
  pageIndex?: number
): Promise<Blob> {
  // 1. Pastikan seluruh gambar selesai dimuat ke memori sebelum render
  await ensureAllImagesLoaded(doc);

  let canvas: HTMLCanvasElement;

  if (doc.layoutMode === 'paginated' && typeof pageIndex === 'number') {
    canvas = renderPageToOffscreenCanvas(doc, pageIndex, scale);
  } else {
    canvas = renderDocumentToOffscreenCanvas(doc, scale);
  }

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob);
        else reject(new Error('Gagal menghasilkan blob gambar'));
      },
      format,
      quality
    );
  });
}

// Ekspor ke Dokumen PDF Multi-Halaman menggunakan jsPDF
export async function exportWhiteboardToPdf(doc: WhiteboardDocument): Promise<Blob> {
  // Pastikan seluruh gambar selesai dimuat ke memori sebelum render PDF
  await ensureAllImagesLoaded(doc);

  const formatConfig = PAGE_FORMATS[doc.pageFormat] || PAGE_FORMATS.a4_portrait;
  const isLandscape = formatConfig.width > formatConfig.height;

  if (doc.layoutMode === 'paginated' && doc.pages.length > 0) {
    const pdf = new jsPDF({
      orientation: isLandscape ? 'landscape' : 'portrait',
      unit: 'pt',
      format: 'a4',
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    for (let i = 0; i < doc.pages.length; i++) {
      if (i > 0) {
        pdf.addPage('a4', isLandscape ? 'landscape' : 'portrait');
      }

      // Render setiap halaman dengan resolusi 2x untuk hasil cetak tajam
      const pageCanvas = renderPageToOffscreenCanvas(doc, i, 2.0);
      const imgData = pageCanvas.toDataURL('image/jpeg', 0.95);

      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
    }

    return pdf.output('blob');
  } else {
    // Mode Infinite: Render seluruh bounding box konten ke kanvas tunggal
    const fullCanvas = renderDocumentToOffscreenCanvas(doc, 2.0);
    const isDocWide = fullCanvas.width > fullCanvas.height;

    const pdf = new jsPDF({
      orientation: isDocWide ? 'landscape' : 'portrait',
      unit: 'pt',
      format: 'a4',
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const margin = 24; // 24pt margin rapi di sekeliling halaman
    const availW = pdfWidth - margin * 2;
    const availH = pdfHeight - margin * 2;

    const ratio = Math.min(availW / fullCanvas.width, availH / fullCanvas.height);
    const destW = fullCanvas.width * ratio;
    const destH = fullCanvas.height * ratio;
    const destX = margin + (availW - destW) / 2;
    const destY = margin + (availH - destH) / 2;

    const imgData = fullCanvas.toDataURL('image/jpeg', 0.95);
    pdf.addImage(imgData, 'JPEG', destX, destY, destW, destH, undefined, 'FAST');

    return pdf.output('blob');
  }
}

// Ekspor ke Format Vektor SVG
export function exportWhiteboardToSvg(doc: WhiteboardDocument): string {
  const formatConfig = PAGE_FORMATS[doc.pageFormat] || PAGE_FORMATS.a4_portrait;

  let viewBoxX = 0;
  let viewBoxY = 0;
  let width = formatConfig.width;
  let height = formatConfig.height;

  if (doc.layoutMode === 'paginated') {
    const pagePaddingTop = 32;
    const gapY = 48;
    const totalPages = Math.max(1, doc.pages?.length || 1);
    height = pagePaddingTop + (formatConfig.height + gapY) * totalPages + 40;
  } else {
    // Infinite mode: hitung bounding box akurat
    const bbox = computeDocumentBoundingBox(doc);
    const padding = 60;
    viewBoxX = Math.round(bbox.minX - padding);
    viewBoxY = Math.round(bbox.minY - padding);
    width = Math.round(bbox.width + padding * 2);
    height = Math.round(bbox.height + padding * 2);
  }

  let svgElements = '';

  for (const el of doc.elements) {
    if (el.type === 'stroke' && el.points && el.points.length > 0) {
      if (el.points.length === 1) {
        svgElements += `<circle cx="${el.points[0][0]}" cy="${el.points[0][1]}" r="${(el.strokeWidth || 2) / 2}" fill="${el.color}" opacity="${el.opacity || 1}" />\n`;
      } else {
        // Render kurva halus Bezier untuk goresan pena berkualitas tinggi
        let d = `M ${el.points[0][0]} ${el.points[0][1]}`;
        for (let i = 1; i < el.points.length - 1; i++) {
          const xc = (el.points[i][0] + el.points[i + 1][0]) / 2;
          const yc = (el.points[i][1] + el.points[i + 1][1]) / 2;
          d += ` Q ${el.points[i][0]} ${el.points[i][1]}, ${xc} ${yc}`;
        }
        const last = el.points[el.points.length - 1];
        d += ` L ${last[0]} ${last[1]}`;
        svgElements += `<path d="${d}" stroke="${el.color}" stroke-width="${el.strokeWidth}" fill="none" opacity="${el.opacity || 1}" stroke-linecap="round" stroke-linejoin="round" />\n`;
      }
    } else if (el.type === 'line' || el.type === 'arrow') {
      const endX = el.x + (el.width || 0);
      const endY = el.y + (el.height || 0);
      svgElements += `<line x1="${el.x}" y1="${el.y}" x2="${endX}" y2="${endY}" stroke="${el.color}" stroke-width="${el.strokeWidth}" opacity="${el.opacity || 1}" stroke-linecap="round" />\n`;
    } else if (el.type === 'rect') {
      svgElements += `<rect x="${el.x}" y="${el.y}" width="${el.width || 0}" height="${el.height || 0}" stroke="${el.color}" stroke-width="${el.strokeWidth}" fill="none" opacity="${el.opacity || 1}" rx="4" />\n`;
    } else if (el.type === 'ellipse') {
      const rx = Math.abs((el.width || 0) / 2);
      const ry = Math.abs((el.height || 0) / 2);
      svgElements += `<ellipse cx="${el.x + rx}" cy="${el.y + ry}" rx="${rx}" ry="${ry}" stroke="${el.color}" stroke-width="${el.strokeWidth}" fill="none" opacity="${el.opacity || 1}" />\n`;
    } else if (el.type === 'text' && el.text) {
      svgElements += `<text x="${el.x}" y="${el.y + (el.fontSize || 16)}" fill="${el.color}" font-size="${el.fontSize || 16}" font-family="sans-serif">${el.text}</text>\n`;
    } else if (el.type === 'image' && el.imageUrl) {
      svgElements += `<image x="${el.x}" y="${el.y}" width="${el.width || 300}" height="${el.height || 200}" href="${el.imageUrl}" opacity="${el.opacity || 1}" />\n`;
    }
  }

  const bgFill = doc.backgroundType === 'chalkboard' ? '#0f172a' : '#ffffff';

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBoxX} ${viewBoxY} ${width} ${height}" width="${width}" height="${height}">
  <rect x="${viewBoxX}" y="${viewBoxY}" width="100%" height="100%" fill="${bgFill}" />
  ${svgElements}
</svg>`;
}
