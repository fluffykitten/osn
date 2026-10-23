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

// Download file blob langsung ke browser user dengan sanitasi nama & penundaan revoke URL
export function triggerFileDownload(blob: Blob, filename: string) {
  const safeFilename = filename.replace(/[/\\?%*:|"<>]/g, '_').trim() || 'whiteboard';
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = safeFilename;
  document.body.appendChild(a);
  a.click();

  // Berikan jeda waktu agar browser (Chrome/Edge/Firefox) selesai memproses stream blob ke download manager
  setTimeout(() => {
    try {
      if (a.parentNode) {
        document.body.removeChild(a);
      }
      URL.revokeObjectURL(url);
    } catch {
      // ignore
    }
  }, 10000);
}

// Ekspor Gambar (PNG / JPEG)
export async function exportWhiteboardToImage(
  doc: WhiteboardDocument,
  format: 'image/png' | 'image/jpeg' = 'image/png',
  quality = 0.95,
  scale = 2.0,
  pageIndex?: number
): Promise<Blob> {
  // 1. Pastikan seluruh gambar selesai dimuat ke memori sebelum render (non-blocking jika ada yang offline)
  try {
    await ensureAllImagesLoaded(doc);
  } catch (err) {
    console.warn('Peringatan: Gagal memuat beberapa gambar sebelum render kanvas:', err);
  }

  // 2. Normalisasi dokumen agar field pages & elements selalu aman
  const formatConfig = PAGE_FORMATS[doc.pageFormat] || PAGE_FORMATS.a4_portrait;
  const safePages =
    doc.pages && doc.pages.length > 0
      ? doc.pages
      : [
          {
            pageIndex: 0,
            width: formatConfig.width,
            height: formatConfig.height,
            topOffsetY: 0,
          },
        ];

  const safeDoc: WhiteboardDocument = {
    ...doc,
    pages: safePages,
    elements: doc.elements || [],
  };

  let canvas: HTMLCanvasElement;

  if (safeDoc.layoutMode === 'paginated' && typeof pageIndex === 'number') {
    canvas = renderPageToOffscreenCanvas(safeDoc, pageIndex, scale);
  } else {
    canvas = renderDocumentToOffscreenCanvas(safeDoc, scale);
  }

  return new Promise((resolve, reject) => {
    try {
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            // Fallback manual jika toBlob menghasilkan null pada beberapa browser
            try {
              const dataUrl = canvas.toDataURL(format, quality);
              const byteString = atob(dataUrl.split(',')[1]);
              const mimeString = dataUrl.split(',')[0].split(':')[1].split(';')[0];
              const ab = new ArrayBuffer(byteString.length);
              const ia = new Uint8Array(ab);
              for (let i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
              }
              resolve(new Blob([ab], { type: mimeString }));
            } catch (err2) {
              reject(new Error('Gagal menghasilkan blob gambar: ' + String(err2)));
            }
          }
        },
        format,
        quality
      );
    } catch (err) {
      reject(err);
    }
  });
}

// Ekspor ke Dokumen PDF Multi-Halaman menggunakan jsPDF
export async function exportWhiteboardToPdf(doc: WhiteboardDocument): Promise<Blob> {
  // 1. Pastikan seluruh gambar selesai dimuat ke memori sebelum render PDF
  try {
    await ensureAllImagesLoaded(doc);
  } catch (err) {
    console.warn('Peringatan: Gagal memuat beberapa gambar sebelum ekspor PDF:', err);
  }

  const formatConfig = PAGE_FORMATS[doc.pageFormat] || PAGE_FORMATS.a4_portrait;
  const isLandscape = formatConfig.width > formatConfig.height;

  const safePages =
    doc.pages && doc.pages.length > 0
      ? doc.pages
      : [
          {
            pageIndex: 0,
            width: formatConfig.width,
            height: formatConfig.height,
            topOffsetY: 0,
          },
        ];

  const safeDoc: WhiteboardDocument = {
    ...doc,
    pages: safePages,
    elements: doc.elements || [],
  };

  if (safeDoc.layoutMode === 'paginated') {
    const pdf = new jsPDF({
      orientation: isLandscape ? 'landscape' : 'portrait',
      unit: 'pt',
      format: 'a4',
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    for (let i = 0; i < safePages.length; i++) {
      if (i > 0) {
        pdf.addPage('a4', isLandscape ? 'landscape' : 'portrait');
      }

      // Render setiap halaman dengan resolusi 2x untuk hasil cetak tajam
      const pageCanvas = renderPageToOffscreenCanvas(safeDoc, i, 2.0);
      const imgData = pageCanvas.toDataURL('image/jpeg', 0.95);

      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
    }

    return pdf.output('blob');
  } else {
    // Mode Infinite: Render seluruh bounding box konten ke kanvas tunggal
    const fullCanvas = renderDocumentToOffscreenCanvas(safeDoc, 1.5);
    const canvasW = Math.max(1, fullCanvas.width);
    const canvasH = Math.max(1, fullCanvas.height);

    // Jika kanvas infinite sangat panjang ke bawah (misal catatan modul beruntun),
    // potong secara cerdas ke beberapa halaman A4 portrait agar tulisan tetap besar & tajam
    const sliceHeight = Math.round(canvasW * 1.414); // Rasio aspek proporsional A4
    if (canvasH > sliceHeight * 1.35 && canvasH > 1600) {
      const totalSlices = Math.ceil(canvasH / sliceHeight);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'pt',
        format: 'a4',
      });
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      for (let s = 0; s < totalSlices; s++) {
        if (s > 0) pdf.addPage('a4', 'portrait');

        const currentSliceH = Math.min(sliceHeight, canvasH - s * sliceHeight);
        const sliceCanvas = document.createElement('canvas');
        sliceCanvas.width = canvasW;
        sliceCanvas.height = currentSliceH;
        const sliceCtx = sliceCanvas.getContext('2d');
        if (sliceCtx) {
          sliceCtx.drawImage(
            fullCanvas,
            0,
            s * sliceHeight,
            canvasW,
            currentSliceH,
            0,
            0,
            canvasW,
            currentSliceH
          );
        }

        const margin = 24;
        const availW = pdfWidth - margin * 2;
        const availH = pdfHeight - margin * 2;
        const ratio = Math.min(availW / canvasW, availH / currentSliceH);
        const destW = canvasW * ratio;
        const destH = currentSliceH * ratio;
        const destX = margin + (availW - destW) / 2;
        const destY = margin + (availH - destH) / 2;

        const sliceData = sliceCanvas.toDataURL('image/jpeg', 0.95);
        pdf.addImage(sliceData, 'JPEG', destX, destY, destW, destH, undefined, 'FAST');
      }

      return pdf.output('blob');
    }

    // Jika proporsional / ringkas, muat ke lembar tunggal PDF A4 yang rapi
    const isDocWide = canvasW > canvasH;
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

    const ratio = Math.min(availW / canvasW, availH / canvasH);
    const destW = canvasW * ratio;
    const destH = canvasH * ratio;
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

  const safePages = doc.pages || [];
  const safeElements = doc.elements || [];

  if (doc.layoutMode === 'paginated') {
    const pagePaddingTop = 32;
    const gapY = 48;
    const totalPages = Math.max(1, safePages.length);
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

  for (const el of safeElements) {
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
