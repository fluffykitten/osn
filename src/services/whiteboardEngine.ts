/**
 * Mesin Rendering Kanvas Whiteboard (STEMBoard Engine)
 * Menangani render resolusi tinggi, transformasi viewport (Infinite vs Paginated),
 * latar belakang sains, instrumen pengukuran, dan primitif spesifik STEM (Kimia, Fisika, Biologi, Matematika).
 */

import type {
  WhiteboardDocument,
  WhiteboardElement,
  WhiteboardBackground,
  PageDefinition,
} from '../types/whiteboard';
import { PAGE_FORMATS } from '../types/whiteboard';

// Cache gambar HTML untuk menghindari reload berulang
const imageCache: Map<string, HTMLImageElement> = new Map();

export function preloadImage(url: string): Promise<HTMLImageElement> {
  if (imageCache.has(url)) {
    return Promise.resolve(imageCache.get(url)!);
  }
  return new Promise((resolve) => {
    const img = new Image();
    // Gunakan crossOrigin hanya untuk URL eksternal http(s), bukan data: atau blob:
    if (url.startsWith('http://') || url.startsWith('https://')) {
      img.crossOrigin = 'anonymous';
    }
    img.src = url;
    img.onload = () => {
      imageCache.set(url, img);
      resolve(img);
    };
    img.onerror = () => {
      // Jika gagal dengan crossOrigin anonymous, coba sekali lagi tanpa crossOrigin
      if (img.crossOrigin) {
        const retryImg = new Image();
        retryImg.src = url;
        retryImg.onload = () => {
          imageCache.set(url, retryImg);
          resolve(retryImg);
        };
        retryImg.onerror = () => resolve(img);
      } else {
        resolve(img);
      }
    };
  });
}

// Memastikan seluruh aset gambar pada dokumen sudah dimuat 100% sebelum ekspor (PNG/PDF)
export async function ensureAllImagesLoaded(doc: WhiteboardDocument): Promise<void> {
  const urls: string[] = [];
  for (const el of doc.elements) {
    if (el.type === 'image' && el.imageUrl) {
      urls.push(el.imageUrl);
    }
  }
  if (urls.length === 0) return;
  await Promise.allSettled(urls.map((url) => preloadImage(url)));
}

// Konversi Titik Layar ke Koordinat Dunia (World Coordinate)
export function screenToWorld(
  screenX: number,
  screenY: number,
  panX: number,
  panY: number,
  scale: number
): { x: number; y: number } {
  return {
    x: (screenX - panX) / scale,
    y: (screenY - panY) / scale,
  };
}

// Konversi Koordinat Dunia ke Titik Layar
export function worldToScreen(
  worldX: number,
  worldY: number,
  panX: number,
  panY: number,
  scale: number
): { x: number; y: number } {
  return {
    x: worldX * scale + panX,
    y: worldY * scale + panY,
  };
}

// Render Latar Belakang Kanvas (Blank, Chalkboard, Grid, Lined, Dots, Cartesian)
export function renderBackground(
  ctx: CanvasRenderingContext2D,
  bgType: WhiteboardBackground,
  width: number,
  height: number,
  originX = 0,
  originY = 0
) {
  ctx.save();

  if (bgType === 'chalkboard') {
    ctx.fillStyle = '#0f172a'; // Deep slate blackboard
    ctx.fillRect(originX, originY, width, height);

    // Grid halus untuk chalkboard
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    const step = 40;
    for (let x = originX; x < originX + width; x += step) {
      ctx.beginPath();
      ctx.moveTo(x, originY);
      ctx.lineTo(x, originY + height);
      ctx.stroke();
    }
    for (let y = originY; y < originY + height; y += step) {
      ctx.beginPath();
      ctx.moveTo(originX, y);
      ctx.lineTo(originX + width, y);
      ctx.stroke();
    }
  } else {
    // Background Putih Dasar
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(originX, originY, width, height);

    if (bgType === 'grid') {
      // Grid Matematika / Milimeter halus
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.25)'; // slate-400
      ctx.lineWidth = 1;
      const step = 25;
      for (let x = originX; x < originX + width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, originY);
        ctx.lineTo(x, originY + height);
        ctx.stroke();
      }
      for (let y = originY; y < originY + height; y += step) {
        ctx.beginPath();
        ctx.moveTo(originX, y);
        ctx.lineTo(originX + width, y);
        ctx.stroke();
      }
    } else if (bgType === 'lined') {
      // Kertas Catatan Bergaris
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.2)'; // biru bergaris
      ctx.lineWidth = 1.2;
      const step = 32;
      // Garis margin merah di sisi kiri
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.3)';
      ctx.beginPath();
      ctx.moveTo(originX + 70, originY);
      ctx.lineTo(originX + 70, originY + height);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(148, 163, 184, 0.3)';
      for (let y = originY + 60; y < originY + height; y += step) {
        ctx.beginPath();
        ctx.moveTo(originX, y);
        ctx.lineTo(originX + width, y);
        ctx.stroke();
      }
    } else if (bgType === 'dots') {
      // Kisi Titik (Dot Grid untuk Kimia / Geometri)
      ctx.fillStyle = 'rgba(100, 116, 139, 0.35)';
      const step = 28;
      for (let x = originX + step; x < originX + width; x += step) {
        for (let y = originY + step; y < originY + height; y += step) {
          ctx.beginPath();
          ctx.arc(x, y, 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    } else if (bgType === 'cartesian') {
      // Sistem Koordinat Kartesius Utama
      const centerX = originX + width / 2;
      const centerY = originY + height / 2;
      const step = 40;

      // Sub-grid halus
      ctx.strokeStyle = 'rgba(203, 213, 225, 0.4)';
      ctx.lineWidth = 0.8;
      for (let x = centerX; x < originX + width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, originY);
        ctx.lineTo(x, originY + height);
        ctx.stroke();
      }
      for (let x = centerX; x > originX; x -= step) {
        ctx.beginPath();
        ctx.moveTo(x, originY);
        ctx.lineTo(x, originY + height);
        ctx.stroke();
      }
      for (let y = centerY; y < originY + height; y += step) {
        ctx.beginPath();
        ctx.moveTo(originX, y);
        ctx.lineTo(originX + width, y);
        ctx.stroke();
      }
      for (let y = centerY; y > originY; y -= step) {
        ctx.beginPath();
        ctx.moveTo(originX, y);
        ctx.lineTo(originX + width, y);
        ctx.stroke();
      }

      // Sumbu X & Y Utama
      ctx.strokeStyle = '#334155'; // Slate 700
      ctx.lineWidth = 2;

      // Sumbu X
      ctx.beginPath();
      ctx.moveTo(originX, centerY);
      ctx.lineTo(originX + width, centerY);
      ctx.stroke();

      // Panah Sumbu X
      ctx.fillStyle = '#334155';
      ctx.beginPath();
      ctx.moveTo(originX + width - 10, centerY - 5);
      ctx.lineTo(originX + width, centerY);
      ctx.lineTo(originX + width - 10, centerY + 5);
      ctx.fill();

      // Sumbu Y
      ctx.beginPath();
      ctx.moveTo(centerX, originY + height);
      ctx.lineTo(centerX, originY);
      ctx.stroke();

      // Panah Sumbu Y
      ctx.beginPath();
      ctx.moveTo(centerX - 5, originY + 10);
      ctx.lineTo(centerX, originY);
      ctx.lineTo(centerX + 5, originY + 10);
      ctx.fill();

      // Label X & Y
      ctx.font = 'bold 12px sans-serif';
      ctx.fillStyle = '#475569';
      ctx.fillText('X', originX + width - 18, centerY - 8);
      ctx.fillText('Y', centerX + 8, originY + 18);
      ctx.fillText('0', centerX - 12, centerY + 14);
    }
  }

  ctx.restore();
}

// Render Latar Belakang Tak Hingga (Infinite Canvas Background)
// Menjamin seluruh viewport selalu terisi latar belakang tanpa batas tepi kotak statis,
// dengan kisi/titik/garis matematika yang dihitung secara dinamis hanya pada area yang tampak (viewport).
export function renderInfiniteBackground(
  ctx: CanvasRenderingContext2D,
  bgType: WhiteboardBackground,
  canvasWidth: number,
  canvasHeight: number,
  panX: number,
  panY: number,
  zoom: number
) {
  // 1. Gambar latar belakang dasar ke seluruh area canvas screen (Identity Transform)
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.fillStyle = bgType === 'chalkboard' ? '#0f172a' : '#ffffff';
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  ctx.restore();

  if (bgType === 'blank') return;

  // 2. Hitung batas koordinat dunia (world bounds) yang tampak di layar
  const safeZoom = Math.max(0.05, zoom);
  const startX = -panX / safeZoom;
  const endX = (canvasWidth - panX) / safeZoom;
  const startY = -panY / safeZoom;
  const endY = (canvasHeight - panY) / safeZoom;

  ctx.save();

  if (bgType === 'chalkboard') {
    // Grid Halus Chalkboard
    let step = 40;
    while (step * safeZoom < 18) step *= 2;

    const firstX = Math.floor(startX / step) * step;
    const lastX = Math.ceil(endX / step) * step;
    const firstY = Math.floor(startY / step) * step;
    const lastY = Math.ceil(endY / step) * step;

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
    ctx.lineWidth = 1 / safeZoom;
    ctx.beginPath();
    for (let x = firstX; x <= lastX; x += step) {
      ctx.moveTo(x, startY);
      ctx.lineTo(x, endY);
    }
    for (let y = firstY; y <= lastY; y += step) {
      ctx.moveTo(startX, y);
      ctx.lineTo(endX, y);
    }
    ctx.stroke();
  } else if (bgType === 'grid') {
    // Grid Matematika / Milimeter Halus
    let step = 25;
    while (step * safeZoom < 14) step *= 2;

    const firstX = Math.floor(startX / step) * step;
    const lastX = Math.ceil(endX / step) * step;
    const firstY = Math.floor(startY / step) * step;
    const lastY = Math.ceil(endY / step) * step;

    ctx.strokeStyle = 'rgba(148, 163, 184, 0.25)';
    ctx.lineWidth = 1 / safeZoom;
    ctx.beginPath();
    for (let x = firstX; x <= lastX; x += step) {
      ctx.moveTo(x, startY);
      ctx.lineTo(x, endY);
    }
    for (let y = firstY; y <= lastY; y += step) {
      ctx.moveTo(startX, y);
      ctx.lineTo(endX, y);
    }
    ctx.stroke();
  } else if (bgType === 'lined') {
    // Kertas Catatan Bergaris
    let step = 32;
    while (step * safeZoom < 14) step *= 2;

    const firstY = Math.floor(startY / step) * step;
    const lastY = Math.ceil(endY / step) * step;

    ctx.strokeStyle = 'rgba(148, 163, 184, 0.28)';
    ctx.lineWidth = 1.2 / safeZoom;
    ctx.beginPath();
    for (let y = firstY; y <= lastY; y += step) {
      ctx.moveTo(startX, y);
      ctx.lineTo(endX, y);
    }
    ctx.stroke();

    // Garis Margin Merah Vertikal di x = 0 jika tampak di layar
    if (startX <= 0 && endX >= 0) {
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.35)';
      ctx.lineWidth = 1.5 / safeZoom;
      ctx.beginPath();
      ctx.moveTo(0, startY);
      ctx.lineTo(0, endY);
      ctx.stroke();
    }
  } else if (bgType === 'dots') {
    // Kisi Titik (Dot Grid)
    let step = 28;
    while (step * safeZoom < 16) step *= 2;

    const firstX = Math.floor(startX / step) * step;
    const lastX = Math.ceil(endX / step) * step;
    const firstY = Math.floor(startY / step) * step;
    const lastY = Math.ceil(endY / step) * step;

    ctx.fillStyle = 'rgba(100, 116, 139, 0.35)';
    const dotRadius = Math.max(0.8, 1.2 / safeZoom);
    ctx.beginPath();
    for (let x = firstX; x <= lastX; x += step) {
      for (let y = firstY; y <= lastY; y += step) {
        ctx.moveTo(x + dotRadius, y);
        ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
      }
    }
    ctx.fill();
  } else if (bgType === 'cartesian') {
    // Sistem Koordinat Kartesius Utama
    let step = 40;
    while (step * safeZoom < 18) step *= 2;

    const firstX = Math.floor(startX / step) * step;
    const lastX = Math.ceil(endX / step) * step;
    const firstY = Math.floor(startY / step) * step;
    const lastY = Math.ceil(endY / step) * step;

    // Sub-grid halus
    ctx.strokeStyle = 'rgba(203, 213, 225, 0.45)';
    ctx.lineWidth = 0.8 / safeZoom;
    ctx.beginPath();
    for (let x = firstX; x <= lastX; x += step) {
      if (x !== 0) {
        ctx.moveTo(x, startY);
        ctx.lineTo(x, endY);
      }
    }
    for (let y = firstY; y <= lastY; y += step) {
      if (y !== 0) {
        ctx.moveTo(startX, y);
        ctx.lineTo(endX, y);
      }
    }
    ctx.stroke();

    // Sumbu X & Y Utama
    ctx.strokeStyle = '#334155';
    ctx.fillStyle = '#334155';
    ctx.lineWidth = 2 / safeZoom;

    // Sumbu X (y = 0)
    if (startY <= 0 && endY >= 0) {
      ctx.beginPath();
      ctx.moveTo(startX, 0);
      ctx.lineTo(endX, 0);
      ctx.stroke();

      const arrowSize = 8 / safeZoom;
      ctx.beginPath();
      ctx.moveTo(endX - arrowSize, -arrowSize / 2);
      ctx.lineTo(endX, 0);
      ctx.lineTo(endX - arrowSize, arrowSize / 2);
      ctx.fill();

      ctx.font = `bold ${Math.max(10, Math.round(12 / safeZoom))}px sans-serif`;
      ctx.fillText('X', endX - arrowSize * 2.5, -6 / safeZoom);
    }

    // Sumbu Y (x = 0)
    if (startX <= 0 && endX >= 0) {
      ctx.beginPath();
      ctx.moveTo(0, startY);
      ctx.lineTo(0, endY);
      ctx.stroke();

      const arrowSize = 8 / safeZoom;
      ctx.beginPath();
      ctx.moveTo(-arrowSize / 2, startY + arrowSize);
      ctx.lineTo(0, startY);
      ctx.lineTo(arrowSize / 2, startY + arrowSize);
      ctx.fill();

      ctx.font = `bold ${Math.max(10, Math.round(12 / safeZoom))}px sans-serif`;
      ctx.fillText('Y', 8 / safeZoom, startY + arrowSize * 2);
    }

    // Titik Asal 0
    if (startX <= 0 && endX >= 0 && startY <= 0 && endY >= 0) {
      ctx.font = `bold ${Math.max(10, Math.round(12 / safeZoom))}px sans-serif`;
      ctx.fillStyle = '#475569';
      ctx.fillText('0', -12 / safeZoom, 14 / safeZoom);
    }
  }

  ctx.restore();
}

// Render Goresan Halus Pena (Smooth Bezier)
function renderSmoothStroke(ctx: CanvasRenderingContext2D, element: WhiteboardElement) {
  const points = element.points;
  if (!points || points.length === 0) return;

  ctx.save();
  ctx.strokeStyle = element.color;
  ctx.lineWidth = element.strokeWidth;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.globalAlpha = element.opacity || 1;

  if (points.length === 1) {
    ctx.fillStyle = element.color;
    ctx.beginPath();
    ctx.arc(points[0][0], points[0][1], element.strokeWidth / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    return;
  }

  ctx.beginPath();
  ctx.moveTo(points[0][0], points[0][1]);

  // Quadratic Bezier curve antar titik tengah untuk menghasilkan kurva luwes
  for (let i = 1; i < points.length - 1; i++) {
    const xc = (points[i][0] + points[i + 1][0]) / 2;
    const yc = (points[i][1] + points[i + 1][1]) / 2;
    ctx.quadraticCurveTo(points[i][0], points[i][1], xc, yc);
  }

  // Tarik ke titik terakhir
  const last = points[points.length - 1];
  ctx.lineTo(last[0], last[1]);
  ctx.stroke();
  ctx.restore();
}

// Render Primitif Matematika (Grafik Fungsi & Bangun Ruang 3D)
function renderMathElement(ctx: CanvasRenderingContext2D, el: WhiteboardElement) {
  ctx.save();
  ctx.strokeStyle = el.color;
  ctx.lineWidth = el.strokeWidth;
  ctx.fillStyle = el.color;

  const w = el.width || 120;
  const h = el.height || 120;

  if (el.type === 'math_function') {
    // Plot kurva fungsi y = f(x)
    const formula = el.payload?.formula || 'x^2';
    ctx.beginPath();
    const centerX = el.x + w / 2;
    const centerY = el.y + h / 2;
    const step = 2;
    let started = false;

    for (let px = -w / 2; px <= w / 2; px += step) {
      const mathX = (px / (w / 2)) * 4; // Domain -4 ke +4
      let mathY = 0;
      try {
        if (formula.includes('x^2') || formula === 'parabola') mathY = 0.5 * Math.pow(mathX, 2);
        else if (formula.includes('sin')) mathY = Math.sin(mathX) * 2;
        else if (formula.includes('cos')) mathY = Math.cos(mathX) * 2;
        else if (formula.includes('1/x') || formula === 'hyperbola') mathY = mathX !== 0 ? 1 / mathX : 0;
        else mathY = mathX; // Garis lurus linear
      } catch {
        mathY = 0;
      }

      const py = centerY - (mathY / 4) * (h / 2);
      if (!started) {
        ctx.moveTo(centerX + px, py);
        started = true;
      } else {
        ctx.lineTo(centerX + px, py);
      }
    }
    ctx.stroke();

    // Label formula KaTeX / Teks
    ctx.font = '12px sans-serif';
    ctx.fillText(`f(x) = ${formula}`, el.x + 5, el.y - 8);
  } else if (el.type === 'math_shape') {
    const shape = el.payload?.shape || 'cube';
    const x = el.x;
    const y = el.y;

    if (shape === 'cube') {
      // Kubus 3D dengan garis depan solid dan perspektif
      const d = Math.min(w, h) * 0.35;
      // Kotak depan
      ctx.strokeRect(x, y + d, w - d, h - d);
      // Kotak belakang
      ctx.strokeRect(x + d, y, w - d, h - d);
      // Garis penghubung sudut
      ctx.beginPath();
      ctx.moveTo(x, y + d);
      ctx.lineTo(x + d, y);
      ctx.moveTo(x + w - d, y + d);
      ctx.lineTo(x + w, y);
      ctx.moveTo(x, y + h);
      ctx.lineTo(x + d, y + h - d);
      ctx.moveTo(x + w - d, y + h);
      ctx.lineTo(x + w, y + h - d);
      ctx.stroke();
    } else if (shape === 'cylinder') {
      // Tabung 3D
      const rx = w / 2;
      const ry = h * 0.15;
      // Tutup atas
      ctx.beginPath();
      ctx.ellipse(x + rx, y + ry, rx, ry, 0, 0, Math.PI * 2);
      ctx.stroke();
      // Garis sisi
      ctx.beginPath();
      ctx.moveTo(x, y + ry);
      ctx.lineTo(x, y + h - ry);
      ctx.moveTo(x + w, y + ry);
      ctx.lineTo(x + w, y + h - ry);
      ctx.stroke();
      // Tutup bawah (lengkung bawah solid)
      ctx.beginPath();
      ctx.ellipse(x + rx, y + h - ry, rx, ry, 0, 0, Math.PI);
      ctx.stroke();
    } else if (shape === 'cone') {
      // Kerucut 3D
      const rx = w / 2;
      const ry = h * 0.15;
      const apexX = x + rx;
      const apexY = y;
      // Garis sisi kerucut
      ctx.beginPath();
      ctx.moveTo(x, y + h - ry);
      ctx.lineTo(apexX, apexY);
      ctx.lineTo(x + w, y + h - ry);
      ctx.stroke();
      // Alas lengkung
      ctx.beginPath();
      ctx.ellipse(x + rx, y + h - ry, rx, ry, 0, 0, Math.PI);
      ctx.stroke();
    } else if (shape === 'sphere') {
      // Bola 3D
      const r = Math.min(w, h) / 2;
      const cx = x + r;
      const cy = y + r;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.stroke();
      // Garis lintang ekuator
      ctx.beginPath();
      ctx.ellipse(cx, cy, r, r * 0.3, 0, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  ctx.restore();
}

// Render Primitif Fisika (Sirkuit, Vektor, Kinematika, Optik)
function renderPhysicsElement(ctx: CanvasRenderingContext2D, el: WhiteboardElement) {
  ctx.save();
  ctx.strokeStyle = el.color;
  ctx.lineWidth = el.strokeWidth;
  ctx.fillStyle = el.color;

  const symbol = el.payload?.symbol || 'resistor';
  const x = el.x;
  const y = el.y;
  const w = el.width || 80;
  const h = el.height || 40;

  if (symbol === 'resistor') {
    // Simbol Resistor (Zig-zag)
    const midY = y + h / 2;
    ctx.beginPath();
    ctx.moveTo(x, midY);
    ctx.lineTo(x + 15, midY);
    // 5 zig-zag
    const step = (w - 30) / 6;
    for (let i = 1; i <= 6; i++) {
      const zigY = i % 2 === 1 ? midY - 12 : midY + 12;
      ctx.lineTo(x + 15 + i * step, i === 6 ? midY : zigY);
    }
    ctx.lineTo(x + w, midY);
    ctx.stroke();
  } else if (symbol === 'battery') {
    // Simbol Sumber Tegangan Baterai (+ dan -)
    const midY = y + h / 2;
    ctx.beginPath();
    ctx.moveTo(x, midY);
    ctx.lineTo(x + w * 0.4, midY);
    // Plat positif panjang
    ctx.moveTo(x + w * 0.4, midY - 18);
    ctx.lineTo(x + w * 0.4, midY + 18);
    // Plat negatif pendek tebal
    ctx.lineWidth = el.strokeWidth * 2;
    ctx.moveTo(x + w * 0.6, midY - 10);
    ctx.lineTo(x + w * 0.6, midY + 10);
    ctx.stroke();

    ctx.lineWidth = el.strokeWidth;
    ctx.beginPath();
    ctx.moveTo(x + w * 0.6, midY);
    ctx.lineTo(x + w, midY);
    ctx.stroke();

    // Tanda + dan -
    ctx.font = '11px sans-serif';
    ctx.fillText('+', x + w * 0.32, midY - 12);
    ctx.fillText('-', x + w * 0.65, midY - 12);
  } else if (symbol === 'capacitor') {
    // Kapasitor (Dua Plat Sejajar)
    const midY = y + h / 2;
    ctx.beginPath();
    ctx.moveTo(x, midY);
    ctx.lineTo(x + w * 0.45, midY);
    ctx.moveTo(x + w * 0.45, midY - 15);
    ctx.lineTo(x + w * 0.45, midY + 15);

    ctx.moveTo(x + w * 0.55, midY - 15);
    ctx.lineTo(x + w * 0.55, midY + 15);
    ctx.moveTo(x + w * 0.55, midY);
    ctx.lineTo(x + w, midY);
    ctx.stroke();
  } else if (symbol === 'switch') {
    // Saklar Terbuka
    const midY = y + h / 2;
    ctx.beginPath();
    ctx.arc(x + 15, midY, 4, 0, Math.PI * 2);
    ctx.arc(x + w - 15, midY, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x, midY);
    ctx.lineTo(x + 11, midY);
    // Tuas saklar miring
    ctx.moveTo(x + 15, midY);
    ctx.lineTo(x + w - 22, midY - 16);
    ctx.moveTo(x + w - 11, midY);
    ctx.lineTo(x + w, midY);
    ctx.stroke();
  } else if (symbol === 'vector') {
    // Vektor Gaya Berarah F
    const startX = x;
    const startY = y + h;
    const endX = x + w;
    const endY = y;
    const angle = Math.atan2(endY - startY, endX - startX);

    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();

    // Kepala Panah Vektor
    const headLen = 14;
    ctx.beginPath();
    ctx.moveTo(endX, endY);
    ctx.lineTo(endX - headLen * Math.cos(angle - Math.PI / 6), endY - headLen * Math.sin(angle - Math.PI / 6));
    ctx.lineTo(endX - headLen * Math.cos(angle + Math.PI / 6), endY - headLen * Math.sin(angle + Math.PI / 6));
    ctx.closePath();
    ctx.fill();

    // Label Vektor
    ctx.font = 'bold 13px sans-serif';
    ctx.fillText(el.payload?.label || 'F', (startX + endX) / 2 - 10, (startY + endY) / 2 - 8);
  } else if (symbol === 'inclined_plane') {
    // Bidang Miring Kinematika + Balok
    ctx.beginPath();
    ctx.moveTo(x, y + h);
    ctx.lineTo(x + w, y + h);
    ctx.lineTo(x + w, y);
    ctx.closePath();
    ctx.stroke();

    // Balok di tengah bidang miring
    const midX = x + w * 0.6;
    const midY = y + h * 0.4;
    ctx.save();
    ctx.translate(midX, midY);
    const angle = Math.atan2(h, w);
    ctx.rotate(-angle);
    ctx.strokeRect(-15, -15, 30, 20);
    ctx.fillText('m', -5, -1);
    ctx.restore();
  } else if (symbol === 'lens_convex') {
    // Lensa Cembung Optik
    const rx = w * 0.3;
    const cx = x + w / 2;
    ctx.beginPath();
    ctx.moveTo(cx, y);
    ctx.quadraticCurveTo(cx + rx, y + h / 2, cx, y + h);
    ctx.quadraticCurveTo(cx - rx, y + h / 2, cx, y);
    ctx.closePath();
    ctx.stroke();
    // Garis sumbu utama
    ctx.strokeStyle = 'rgba(100, 116, 139, 0.5)';
    ctx.beginPath();
    ctx.moveTo(x - 20, y + h / 2);
    ctx.lineTo(x + w + 20, y + h / 2);
    ctx.stroke();
  }

  ctx.restore();
}

// Render Primitif Kimia (Cincin Benzena, Sikloheksana, Ikatan Baji, Panah Reaksi)
function renderChemElement(ctx: CanvasRenderingContext2D, el: WhiteboardElement) {
  ctx.save();
  ctx.strokeStyle = el.color;
  ctx.lineWidth = el.strokeWidth;
  ctx.fillStyle = el.color;

  const struct = el.payload?.structure || 'benzene';
  const x = el.x;
  const y = el.y;
  const size = Math.min(el.width || 80, el.height || 80);
  const r = size / 2;
  const cx = x + r;
  const cy = y + r;

  if (struct === 'benzene') {
    // Cincin Heksagonal Benzena
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = (i * Math.PI) / 3 - Math.PI / 6;
      const px = cx + r * Math.cos(angle);
      const py = cy + r * Math.sin(angle);
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.stroke();

    // Lingkaran Delokalisasi Elektron π di Dalam Cincin
    ctx.beginPath();
    ctx.arc(cx, cy, r * 0.55, 0, Math.PI * 2);
    ctx.stroke();
  } else if (struct === 'cyclohexane_chair') {
    // Konformasi Kursi (Chair Conformation) Sikloheksana
    const w = size * 1.2;
    const h = size * 0.7;
    ctx.beginPath();
    ctx.moveTo(cx - w * 0.4, cy - h * 0.3);
    ctx.lineTo(cx - w * 0.1, cy - h * 0.4);
    ctx.lineTo(cx + w * 0.4, cy - h * 0.1);
    ctx.lineTo(cx + w * 0.3, cy + h * 0.4);
    ctx.lineTo(cx, cy + h * 0.45);
    ctx.lineTo(cx - w * 0.4, cy + h * 0.15);
    ctx.closePath();
    ctx.stroke();
  } else if (struct === 'solid_wedge') {
    // Ikatan Baji Tebal (Solid Wedge) Stereokimia
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + (el.width || 50), y - 7);
    ctx.lineTo(x + (el.width || 50), y + 7);
    ctx.closePath();
    ctx.fill();
  } else if (struct === 'dashed_wedge') {
    // Ikatan Baji Putus-putus (Dashed Wedge) Stereokimia
    const targetW = el.width || 50;
    const steps = 7;
    for (let i = 1; i <= steps; i++) {
      const curX = x + (i / steps) * targetW;
      const spread = (i / steps) * 7;
      ctx.beginPath();
      ctx.moveTo(curX, y - spread);
      ctx.lineTo(curX, y + spread);
      ctx.stroke();
    }
  } else if (struct === 'equilibrium_arrow') {
    // Panah Kesetimbangan Reaksi (⇌)
    const len = el.width || 60;
    const midY = y + (el.height || 20) / 2;

    // Panah Atas (Kanan)
    ctx.beginPath();
    ctx.moveTo(x, midY - 4);
    ctx.lineTo(x + len, midY - 4);
    ctx.stroke();
    // Barb kanan atas
    ctx.beginPath();
    ctx.moveTo(x + len - 8, midY - 9);
    ctx.lineTo(x + len, midY - 4);
    ctx.stroke();

    // Panah Bawah (Kiri)
    ctx.beginPath();
    ctx.moveTo(x + len, midY + 4);
    ctx.lineTo(x, midY + 4);
    ctx.stroke();
    // Barb kiri bawah
    ctx.beginPath();
    ctx.moveTo(x + 8, midY + 9);
    ctx.lineTo(x, midY + 4);
    ctx.stroke();
  }

  ctx.restore();
}

// Render Primitif Biologi (Pedigree Silsilah, Sel, DNA Helix)
function renderBioElement(ctx: CanvasRenderingContext2D, el: WhiteboardElement) {
  ctx.save();
  ctx.strokeStyle = el.color;
  ctx.lineWidth = el.strokeWidth;
  ctx.fillStyle = el.color;

  const stamp = el.payload?.stamp || 'pedigree_male';
  const x = el.x;
  const y = el.y;
  const size = Math.min(el.width || 60, el.height || 60);

  if (stamp === 'pedigree_male') {
    // Persegi Pedigree (Laki-laki)
    const isAffected = el.payload?.isAffected;
    if (isAffected) {
      ctx.fillRect(x, y, size, size);
    } else {
      ctx.strokeRect(x, y, size, size);
    }
  } else if (stamp === 'pedigree_female') {
    // Lingkaran Pedigree (Perempuan)
    const isAffected = el.payload?.isAffected;
    const r = size / 2;
    ctx.beginPath();
    ctx.arc(x + r, y + r, r, 0, Math.PI * 2);
    if (isAffected) {
      ctx.fill();
    } else {
      ctx.stroke();
    }
  } else if (stamp === 'dna_helix') {
    // Skema Rantai Ganda Heliks DNA
    const len = el.width || 120;
    const amp = (el.height || 40) / 2;
    const midY = y + amp;

    // Untai 1 & Untai 2
    ctx.beginPath();
    for (let px = 0; px <= len; px += 3) {
      const py1 = midY + Math.sin((px / 20) * Math.PI) * (amp - 4);
      if (px === 0) ctx.moveTo(x + px, py1);
      else ctx.lineTo(x + px, py1);
    }
    ctx.stroke();

    ctx.beginPath();
    for (let px = 0; px <= len; px += 3) {
      const py2 = midY - Math.sin((px / 20) * Math.PI) * (amp - 4);
      if (px === 0) ctx.moveTo(x + px, py2);
      else ctx.lineTo(x + px, py2);
    }
    ctx.stroke();

    // Anak Tangga Basa Nitrogen (Base Pairs)
    for (let px = 10; px < len; px += 20) {
      const py1 = midY + Math.sin((px / 20) * Math.PI) * (amp - 4);
      const py2 = midY - Math.sin((px / 20) * Math.PI) * (amp - 4);
      ctx.beginPath();
      ctx.moveTo(x + px, py1);
      ctx.lineTo(x + px, py2);
      ctx.stroke();
    }
  } else if (stamp === 'cell_diagram') {
    // Membran Sel & Inti Sel
    const rx = (el.width || 100) / 2;
    const ry = (el.height || 70) / 2;
    const cx = x + rx;
    const cy = y + ry;

    // Membran Sel Oval
    ctx.beginPath();
    ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
    ctx.stroke();

    // Inti Sel (Nukleus)
    ctx.beginPath();
    ctx.arc(cx - rx * 0.2, cy, rx * 0.35, 0, Math.PI * 2);
    ctx.stroke();

    // Nukleolus di dalam
    ctx.beginPath();
    ctx.arc(cx - rx * 0.2, cy, rx * 0.12, 0, Math.PI * 2);
    ctx.fill();

    // Mitokondria kecil
    ctx.beginPath();
    ctx.ellipse(cx + rx * 0.4, cy - ry * 0.2, 12, 6, Math.PI / 4, 0, Math.PI * 2);
    ctx.stroke();
  }

  ctx.restore();
}

// Render Satu Elemen Universal
export function renderElement(ctx: CanvasRenderingContext2D, el: WhiteboardElement) {
  if (el.type === 'stroke') {
    renderSmoothStroke(ctx, el);
  } else if (el.type === 'line' || el.type === 'arrow') {
    ctx.save();
    ctx.strokeStyle = el.color;
    ctx.lineWidth = el.strokeWidth;
    ctx.globalAlpha = el.opacity || 1;
    ctx.beginPath();
    ctx.moveTo(el.x, el.y);
    const endX = el.x + (el.width || 0);
    const endY = el.y + (el.height || 0);
    ctx.lineTo(endX, endY);
    ctx.stroke();

    if (el.type === 'arrow') {
      const angle = Math.atan2(endY - el.y, endX - el.x);
      const headLen = 12;
      ctx.fillStyle = el.color;
      ctx.beginPath();
      ctx.moveTo(endX, endY);
      ctx.lineTo(endX - headLen * Math.cos(angle - Math.PI / 6), endY - headLen * Math.sin(angle - Math.PI / 6));
      ctx.lineTo(endX - headLen * Math.cos(angle + Math.PI / 6), endY - headLen * Math.sin(angle + Math.PI / 6));
      ctx.closePath();
      ctx.fill();
    }
    ctx.restore();
  } else if (el.type === 'rect') {
    ctx.save();
    ctx.strokeStyle = el.color;
    ctx.lineWidth = el.strokeWidth;
    ctx.globalAlpha = el.opacity || 1;
    ctx.strokeRect(el.x, el.y, el.width || 0, el.height || 0);
    ctx.restore();
  } else if (el.type === 'ellipse') {
    ctx.save();
    ctx.strokeStyle = el.color;
    ctx.lineWidth = el.strokeWidth;
    ctx.globalAlpha = el.opacity || 1;
    const rx = Math.abs((el.width || 0) / 2);
    const ry = Math.abs((el.height || 0) / 2);
    ctx.beginPath();
    ctx.ellipse(el.x + rx, el.y + ry, rx, ry, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  } else if (el.type === 'text' && el.text) {
    ctx.save();
    ctx.fillStyle = el.color;
    ctx.font = `${el.fontSize || 18}px sans-serif`;
    ctx.textBaseline = 'top';
    ctx.globalAlpha = el.opacity || 1;
    const lines = el.text.split('\n');
    const lineHeight = (el.fontSize || 18) * 1.35;
    lines.forEach((line, idx) => {
      ctx.fillText(line, el.x, el.y + idx * lineHeight);
    });
    ctx.restore();
  } else if (el.type === 'image' && el.imageUrl) {
    const img = imageCache.get(el.imageUrl);
    if (img && img.complete) {
      ctx.save();
      ctx.globalAlpha = el.opacity || 1;
      ctx.drawImage(img, el.x, el.y, el.width || img.width, el.height || img.height);
      ctx.restore();
    } else {
      preloadImage(el.imageUrl);
    }
  } else if (el.type === 'question_card') {
    renderQuestionCardFallback(ctx, el);
  } else if (el.type === 'math_function' || el.type === 'math_shape') {
    renderMathElement(ctx, el);
  } else if (el.type === 'physics_symbol') {
    renderPhysicsElement(ctx, el);
  } else if (el.type === 'chem_molecule') {
    renderChemElement(ctx, el);
  } else if (el.type === 'bio_stamp') {
    renderBioElement(ctx, el);
  }
}

// Menghitung bounding box akurat dari seluruh elemen dokumen (termasuk goresan pena, rumus, kartu soal, gambar)
export function computeDocumentBoundingBox(doc: WhiteboardDocument): {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
  width: number;
  height: number;
} {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

  for (const el of doc.elements) {
    if (el.type === 'stroke' && el.points && el.points.length > 0) {
      for (const [px, py] of el.points) {
        minX = Math.min(minX, px);
        minY = Math.min(minY, py);
        maxX = Math.max(maxX, px);
        maxY = Math.max(maxY, py);
      }
    } else {
      let w = el.width || 60;
      let h = el.height || 60;
      if (el.type === 'question_card') {
        w = el.width || 560;
        h = estimateQuestionCardHeight(el);
      } else if (el.type === 'text') {
        const fontSize = el.fontSize || 18;
        w = el.width || Math.max(60, (el.text?.length || 4) * fontSize * 0.6);
        h = el.height || fontSize * 1.35;
      }
      minX = Math.min(minX, el.x);
      minY = Math.min(minY, el.y);
      maxX = Math.max(maxX, el.x + w);
      maxY = Math.max(maxY, el.y + h);
    }
  }

  if (minX === Infinity || !isFinite(minX)) {
    minX = 0;
    minY = 0;
    maxX = 1200;
    maxY = 800;
  }

  return {
    minX,
    minY,
    maxX,
    maxY,
    width: Math.max(120, maxX - minX),
    height: Math.max(120, maxY - minY),
  };
}

// Pembersih Notasi KaTeX / LaTeX untuk Render Offscreen 2D Canvas yang Tajam & Rapi
export function cleanKaTeXForCanvas(str: string): string {
  if (!str) return '';
  return str
    .replace(/\\ce\{([^}]+)\}/g, '$1')
    .replace(/\\text\{([^}]+)\}/g, '$1')
    .replace(/\\mathrm\{([^}]+)\}/g, '$1')
    .replace(/\\mathbf\{([^}]+)\}/g, '$1')
    .replace(/\$+/g, '')
    .replace(/\\times/g, '×')
    .replace(/\\cdot/g, '·')
    .replace(/\^\{\\circ\}|\^\\circ|\\circ/g, '°')
    .replace(/\\pm/g, '±')
    .replace(/\\rightarrow|\\to/g, '→')
    .replace(/\\Delta/g, 'Δ')
    .replace(/\\[a-zA-Z]+/g, ' ')
    .replace(/[ \t]+/g, ' ')
    .trim();
}

// Pembagi Baris Teks Otomatis (Word Wrap) Berdasarkan Lebar Maksimum Kanvas
export function wrapTextLines(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
  font?: string
): string[] {
  if (!text) return [];
  ctx.save();
  if (font) ctx.font = font;
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let currentLine = '';

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }
  if (currentLine) {
    lines.push(currentLine);
  }
  ctx.restore();
  return lines;
}

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  radii: number | number[]
) {
  ctx.beginPath();
  if (typeof ctx.roundRect === 'function') {
    ctx.roundRect(x, y, w, h, radii);
  } else {
    ctx.rect(x, y, w, h);
  }
}

// Estimasi Tinggi Presisi Kartu Soal agar Pas Membungkus Konten (Mencegah Kekosongan Kotak Besar)
export function estimateQuestionCardHeight(el: WhiteboardElement): number {
  const payload = el.payload || {};
  if (payload.isCollapsed) return 42;

  const w = el.width || 560;
  const title = payload.title || 'Soal Olimpiade Sains';
  const titleLines = Math.max(1, Math.ceil((title.length * 8.5) / Math.max(200, w - 40)));
  const titleH = titleLines * 19;

  const sourceH = payload.sourceEvent ? 18 : 0;

  const cleanQText = cleanKaTeXForCanvas(payload.questionText || '');
  const charsPerLine = Math.max(30, Math.floor((w - 52) / 7.2));
  const qLines = Math.max(1, Math.ceil(cleanQText.length / charsPerLine));
  const questionBoxH = Math.max(36, qLines * 18 + 18);

  let extraH = 0;
  if (payload.diagramUrl) {
    extraH += 170;
  }

  if (Array.isArray(payload.subQuestions) && payload.subQuestions.length > 0) {
    extraH += 22;
    for (const sq of payload.subQuestions) {
      const sqText = cleanKaTeXForCanvas(sq.question_text || sq.text || '');
      const sqLines = Math.max(1, Math.ceil(sqText.length / Math.max(20, charsPerLine - 8)));
      extraH += Math.max(32, sqLines * 17 + 24) + 8;
    }
  }

  if (payload.showRubric && payload.rubricText) {
    const rubText = cleanKaTeXForCanvas(payload.rubricText);
    const rubLines = Math.max(1, Math.ceil(rubText.length / charsPerLine));
    extraH += Math.max(36, rubLines * 17 + 24) + 8;
  }

  const calculated = 42 + 14 + titleH + sourceH + 6 + questionBoxH + 12 + extraH + 16;
  return Math.max(120, Math.round(calculated));
}

// Fallback Rendering Kartu Soal untuk Ekspor 2D Canvas (PNG & PDF) yang Rapi, Presisi & Bebas Tabrakan
function renderQuestionCardFallback(ctx: CanvasRenderingContext2D, el: WhiteboardElement) {
  const payload = el.payload || {};
  const w = el.width || 560;
  const h = estimateQuestionCardHeight(el);

  ctx.save();
  ctx.globalAlpha = el.opacity || 1;

  // Background card & rounded box
  ctx.fillStyle = '#ffffff';
  ctx.strokeStyle = '#cbd5e1';
  ctx.lineWidth = 1.5;
  drawRoundedRect(ctx, el.x, el.y, w, h, 14);
  ctx.fill();
  ctx.stroke();

  // Header background
  ctx.fillStyle = '#f8fafc';
  drawRoundedRect(ctx, el.x, el.y, w, 42, [14, 14, 0, 0]);
  ctx.fill();

  // Header separator
  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(el.x, el.y + 42);
  ctx.lineTo(el.x + w, el.y + 42);
  ctx.stroke();

  // Decorative blue dot in header
  ctx.fillStyle = '#3b82f6';
  ctx.beginPath();
  ctx.arc(el.x + 20, el.y + 21, 4.5, 0, Math.PI * 2);
  ctx.fill();

  let badgeX = el.x + 32;

  // 1. Difficulty badge (Dynamically measured width & curated color palette)
  const rawDiff = payload.difficulty || 'OSN';
  const upperDiff = rawDiff.toUpperCase();
  let diffBg = '#f3e8ff';
  let diffText = '#6b21a8';
  let diffBorder = '#e9d5ff';

  if (upperDiff.includes('OSK') || upperDiff.includes('KAB') || upperDiff.includes('KOTA')) {
    diffBg = '#fef3c7';
    diffText = '#92400e';
    diffBorder = '#fde68a';
  } else if (upperDiff.includes('OSP') || upperDiff.includes('PROV')) {
    diffBg = '#dbeafe';
    diffText = '#1e40af';
    diffBorder = '#bfdbfe';
  } else if (upperDiff.includes('ICHO') || upperDiff.includes('INTER')) {
    diffBg = '#ffe4e6';
    diffText = '#9f1239';
    diffBorder = '#fecdd3';
  }

  ctx.font = 'bold 10px sans-serif';
  const diffMetrics = ctx.measureText(rawDiff);
  const diffBadgeW = Math.max(42, Math.round(diffMetrics.width + 16));

  ctx.fillStyle = diffBg;
  ctx.strokeStyle = diffBorder;
  ctx.lineWidth = 1;
  drawRoundedRect(ctx, badgeX, el.y + 10, diffBadgeW, 22, 6);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = diffText;
  ctx.textBaseline = 'middle';
  ctx.fillText(rawDiff, badgeX + 8, el.y + 21);
  badgeX += diffBadgeW + 8;

  // 2. Subtopic / Topik badge (Never uses the word 'Pilar'!)
  const topicLabel = payload.subtopic
    ? payload.subtopic
    : payload.pillarNumber
    ? `Topik ${payload.pillarNumber}`
    : '';

  if (topicLabel) {
    ctx.font = '600 10px sans-serif';
    const maxLen = 28;
    const dispTopic = topicLabel.length > maxLen ? topicLabel.substring(0, maxLen - 2) + '...' : topicLabel;
    const topicMetrics = ctx.measureText(dispTopic);
    const topicBadgeW = Math.round(topicMetrics.width + 16);

    if (badgeX + topicBadgeW < el.x + w - 85) {
      ctx.fillStyle = '#f1f5f9';
      ctx.strokeStyle = '#cbd5e1';
      ctx.lineWidth = 1;
      drawRoundedRect(ctx, badgeX, el.y + 10, topicBadgeW, 22, 6);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#334155';
      ctx.fillText(dispTopic, badgeX + 8, el.y + 21);
      badgeX += topicBadgeW + 8;
    }
  }

  // 3. Points badge
  const pointsStr = `${payload.totalPoints || 10} Poin`;
  ctx.font = 'bold 10px sans-serif';
  const ptsMetrics = ctx.measureText(pointsStr);
  const ptsBadgeW = Math.round(ptsMetrics.width + 14);

  if (badgeX + ptsBadgeW < el.x + w - 30) {
    ctx.fillStyle = '#fefce8';
    ctx.strokeStyle = '#fef08a';
    ctx.lineWidth = 1;
    drawRoundedRect(ctx, badgeX, el.y + 10, ptsBadgeW, 22, 6);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#854d0e';
    ctx.fillText(pointsStr, badgeX + 7, el.y + 21);
  }

  // 4. Rubric indicator badge on the far right
  if (payload.showRubric) {
    ctx.font = 'bold 10px sans-serif';
    const rubLabel = 'Rubrik Aktif';
    const rubBadgeW = ctx.measureText(rubLabel).width + 14;
    const rubX = el.x + w - rubBadgeW - 14;

    ctx.fillStyle = '#fef3c7';
    ctx.strokeStyle = '#fde68a';
    ctx.lineWidth = 1;
    drawRoundedRect(ctx, rubX, el.y + 10, rubBadgeW, 22, 6);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#92400e';
    ctx.fillText(rubLabel, rubX + 7, el.y + 21);
  }

  // Card Body (rendered only if not collapsed)
  if (!payload.isCollapsed) {
    let curY = el.y + 56;
    ctx.textBaseline = 'top';

    // Judul Soal (in Card Body with word wrap, never colliding with badges!)
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 13px sans-serif';
    const title = payload.title || 'Soal Olimpiade Sains';
    const titleLines = wrapTextLines(ctx, title, w - 36, 'bold 13px sans-serif');
    for (const tl of titleLines) {
      ctx.fillText(tl, el.x + 16, curY);
      curY += 19;
    }

    // Sumber Soal
    if (payload.sourceEvent) {
      ctx.fillStyle = '#64748b';
      ctx.font = 'italic 10px sans-serif';
      ctx.fillText(`Sumber: ${payload.sourceEvent}`, el.x + 16, curY + 2);
      curY += 18;
    }

    curY += 6;

    // Narasi Masalah / Question Text Box
    const cleanQ = cleanKaTeXForCanvas(payload.questionText || '');
    const qLines = wrapTextLines(ctx, cleanQ, w - 48, '12px sans-serif');
    const boxH = Math.max(36, qLines.length * 18 + 18);

    ctx.fillStyle = '#f8fafc';
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    drawRoundedRect(ctx, el.x + 14, curY, w - 28, boxH, 8);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#1e293b';
    ctx.font = '12px sans-serif';
    let textY = curY + 9;
    for (const line of qLines) {
      ctx.fillText(line, el.x + 24, textY);
      textY += 18;
    }

    curY += boxH + 12;

    // Sub-pertanyaan Terperinci (a, b, c...)
    if (Array.isArray(payload.subQuestions) && payload.subQuestions.length > 0) {
      ctx.fillStyle = '#475569';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText(`Pertanyaan Terperinci (${payload.subQuestions.length} Butir):`, el.x + 16, curY);
      curY += 20;

      for (const sq of payload.subQuestions) {
        const sqText = cleanKaTeXForCanvas(sq.question_text || sq.text || '');
        const sqLines = wrapTextLines(ctx, sqText, w - 70, '12px sans-serif');
        const sqH = Math.max(32, sqLines.length * 17 + 24);

        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 1;
        drawRoundedRect(ctx, el.x + 14, curY, w - 28, sqH, 8);
        ctx.fill();
        ctx.stroke();

        // Sub-soal label pill (a)
        ctx.fillStyle = '#eff6ff';
        ctx.strokeStyle = '#bfdbfe';
        drawRoundedRect(ctx, el.x + 22, curY + 6, 26, 18, 4);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#1d4ed8';
        ctx.font = 'bold 10px sans-serif';
        ctx.textBaseline = 'middle';
        ctx.fillText(sq.label || '•', el.x + 27, curY + 15);

        // Sub-soal points
        if (sq.points) {
          ctx.fillStyle = '#64748b';
          ctx.font = 'bold 10px sans-serif';
          ctx.fillText(`${sq.points} Poin`, el.x + w - 64, curY + 15);
        }

        // Sub-soal text
        ctx.fillStyle = '#334155';
        ctx.font = '12px sans-serif';
        ctx.textBaseline = 'top';
        let stY = curY + 28;
        for (const stl of sqLines) {
          ctx.fillText(stl, el.x + 24, stY);
          stY += 17;
        }

        curY += sqH + 8;
      }
    }

    // Rubrik Penskoran & Pembahasan (jika dibuka)
    if (payload.showRubric && payload.rubricText) {
      const rubClean = cleanKaTeXForCanvas(payload.rubricText);
      const rubLines = wrapTextLines(ctx, rubClean, w - 50, 'italic 11px sans-serif');
      const rBoxH = Math.max(36, rubLines.length * 17 + 24);

      ctx.fillStyle = '#fefce8';
      ctx.strokeStyle = '#fef08a';
      ctx.lineWidth = 1;
      drawRoundedRect(ctx, el.x + 14, curY, w - 28, rBoxH, 8);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#854d0e';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('Rubrik / Panduan Penskoran:', el.x + 24, curY + 7);

      ctx.fillStyle = '#92400e';
      ctx.font = 'italic 11px sans-serif';
      let rbY = curY + 25;
      for (const rl of rubLines) {
        ctx.fillText(rl, el.x + 24, rbY);
        rbY += 17;
      }
    }
  }

  ctx.restore();
}

// Render Seluruh Dokumen ke Offscreen Canvas (untuk Ekspor Gambar / PDF)
export function renderDocumentToOffscreenCanvas(
  doc: WhiteboardDocument,
  exportScale = 1.0
): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  const formatConfig = PAGE_FORMATS[doc.pageFormat] || PAGE_FORMATS.a4_portrait;

  if (doc.layoutMode === 'infinite') {
    // Mode Infinite: Bounding box akurat dan translasi origin untuk membungkus konten tanpa terpotong
    const bbox = computeDocumentBoundingBox(doc);
    const padding = 60;
    const width = Math.ceil(bbox.width + padding * 2);
    const height = Math.ceil(bbox.height + padding * 2);

    canvas.width = Math.round(width * exportScale);
    canvas.height = Math.round(height * exportScale);

    const ctx = canvas.getContext('2d');
    if (!ctx) return canvas;

    ctx.scale(exportScale, exportScale);

    // Render Latar Belakang Seluruh Kanvas
    renderBackground(ctx, doc.backgroundType, width, height, 0, 0);

    // Translasi sehingga konten (termasuk koordinat negatif) dibingkai sempurna dengan padding
    ctx.save();
    ctx.translate(-bbox.minX + padding, -bbox.minY + padding);

    for (const el of doc.elements) {
      renderElement(ctx, el);
    }
    ctx.restore();

    return canvas;
  } else {
    // Mode Paginated: Lembar A4 berjejer vertikal dengan layout tersinkronisasi
    const totalPages = Math.max(1, doc.pages?.length || 1);
    const pageWidth = formatConfig.width;
    const pageHeight = formatConfig.height;
    const pagePaddingTop = 32;
    const gapY = 48;
    const totalHeight = pagePaddingTop + (pageHeight + gapY) * totalPages + 40;

    canvas.width = Math.round(pageWidth * exportScale);
    canvas.height = Math.round(totalHeight * exportScale);

    const ctx = canvas.getContext('2d');
    if (!ctx) return canvas;

    ctx.scale(exportScale, exportScale);

    // Latar belakang di luar kertas
    ctx.fillStyle = '#f1f5f9';
    ctx.fillRect(0, 0, pageWidth, totalHeight);

    for (let i = 0; i < totalPages; i++) {
      const pageTop = pagePaddingTop + i * (pageHeight + gapY);

      // Kertas A4 dengan bayangan
      ctx.save();
      ctx.shadowColor = 'rgba(15, 23, 42, 0.12)';
      ctx.shadowBlur = 16;
      ctx.shadowOffsetY = 4;
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, pageTop, pageWidth, pageHeight);
      ctx.restore();

      // Pola latar belakang kertas
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, pageTop, pageWidth, pageHeight);
      ctx.clip();
      renderBackground(ctx, doc.backgroundType, pageWidth, pageHeight, 0, pageTop);
      ctx.restore();

      // Border lembar kertas
      ctx.save();
      ctx.strokeStyle = '#cbd5e1';
      ctx.lineWidth = 1;
      ctx.strokeRect(0, pageTop, pageWidth, pageHeight);

      // Label Header Halaman
      ctx.fillStyle = '#475569';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText(`Halaman ${i + 1} dari ${totalPages}`, 16, pageTop - 12);
      ctx.restore();
    }

    // Render semua elemen
    for (const el of doc.elements) {
      renderElement(ctx, el);
    }

    return canvas;
  }
}

// Render 1 Halaman Spesifik ke Offscreen Canvas (untuk Ekspor PDF Multi-Halaman atau PNG Halaman Tunggal)
export function renderPageToOffscreenCanvas(
  doc: WhiteboardDocument,
  pageIndex: number,
  exportScale = 2.0
): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  const formatConfig = PAGE_FORMATS[doc.pageFormat] || PAGE_FORMATS.a4_portrait;
  const pageWidth = formatConfig.width;
  const pageHeight = formatConfig.height;

  canvas.width = Math.round(pageWidth * exportScale);
  canvas.height = Math.round(pageHeight * exportScale);

  const ctx = canvas.getContext('2d');
  if (!ctx) return canvas;

  ctx.scale(exportScale, exportScale);

  // Render Latar Belakang Kertas A4 Utuh
  renderBackground(ctx, doc.backgroundType, pageWidth, pageHeight, 0, 0);

  // Sinkronisasi koordinat tepat dengan WhiteboardCanvas.tsx:
  const pagePaddingTop = 32;
  const gapY = 48;
  const pageTop = pagePaddingTop + pageIndex * (pageHeight + gapY);

  ctx.save();
  ctx.translate(0, -pageTop);

  for (const el of doc.elements) {
    let isThisPage = false;
    if (typeof el.pageIndex === 'number') {
      isThisPage = el.pageIndex === pageIndex;
    } else if (el.type === 'stroke' && el.points && el.points.length > 0) {
      // Stroke: periksa apakah ada titik yang berada dalam jangkauan lembar ini
      isThisPage = el.points.some(
        (p) => p[1] >= pageTop - 15 && p[1] <= pageTop + pageHeight + 15
      );
    } else {
      const h = el.height || 50;
      isThisPage = el.y + h >= pageTop - 15 && el.y <= pageTop + pageHeight + 15;
    }

    if (isThisPage) {
      renderElement(ctx, el);
    }
  }

  ctx.restore();

  return canvas;
}

// Helper jarak titik ke segmen garis
export function distToSegment(px: number, py: number, x1: number, y1: number, x2: number, y2: number): number {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const l2 = dx * dx + dy * dy;
  if (l2 === 0) return Math.hypot(px - x1, py - y1);
  let t = ((px - x1) * dx + (py - y1) * dy) / l2;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy));
}

// Deteksi Objek Dekat Kursor (Hit Testing untuk Stroke Eraser & Select Tool)
export function isPointNearElement(
  x: number,
  y: number,
  el: WhiteboardElement,
  tolerance = 16
): boolean {
  if (el.type === 'stroke' && el.points && el.points.length > 0) {
    if (el.points.length === 1) {
      return Math.hypot(el.points[0][0] - x, el.points[0][1] - y) <= tolerance + (el.strokeWidth || 2);
    }
    for (let i = 0; i < el.points.length - 1; i++) {
      const p1 = el.points[i];
      const p2 = el.points[i + 1];
      if (distToSegment(x, y, p1[0], p1[1], p2[0], p2[1]) <= tolerance + (el.strokeWidth || 2)) {
        return true;
      }
    }
    return false;
  }

  if (el.type === 'line' || el.type === 'arrow') {
    const endX = el.x + (el.width || 0);
    const endY = el.y + (el.height || 0);
    return distToSegment(x, y, el.x, el.y, endX, endY) <= tolerance + (el.strokeWidth || 2);
  }

  const fontSize = el.fontSize || 18;
  let w = el.width || (el.type === 'text' ? Math.max(40, (el.text?.length || 4) * fontSize * 0.6) : 40);
  let h = el.height || (el.type === 'text' ? fontSize * 1.3 : 40);
  if (el.type === 'question_card') {
    w = el.width || 560;
    h = estimateQuestionCardHeight(el);
  } else if (el.type === 'image') {
    w = el.width || 320;
    h = el.height || 240;
  }
  const minX = Math.min(el.x, el.x + w);
  const maxX = Math.max(el.x, el.x + w);
  const minY = Math.min(el.y, el.y + h);
  const maxY = Math.max(el.y, el.y + h);
  return x >= minX - tolerance && x <= maxX + tolerance && y >= minY - tolerance && y <= maxY + tolerance;
}

// Deteksi apakah titik berada di dalam poligon (Ray-Casting Algorithm)
export function isPointInPolygon(
  x: number,
  y: number,
  polygon: [number, number][]
): boolean {
  if (polygon.length < 3) return false;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i][0], yi = polygon[i][1];
    const xj = polygon[j][0], yj = polygon[j][1];
    const intersect = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

// Deteksi apakah sebuah elemen bersinggungan dengan area kursor penghapus (Brush Circle / Square)
export function isElementHitByEraser(
  pt: { x: number; y: number },
  el: WhiteboardElement,
  shape: 'circle' | 'square',
  size: number
): boolean {
  const half = size / 2;
  if (shape === 'circle') {
    return isPointNearElement(pt.x, pt.y, el, half);
  }

  // Persegi (Square): cek titik atau segmen goresan di dalam AABB kursor
  if (el.type === 'stroke' && el.points && el.points.length > 0) {
    for (const p of el.points) {
      if (Math.abs(p[0] - pt.x) <= half && Math.abs(p[1] - pt.y) <= half) {
        return true;
      }
    }
    for (let i = 0; i < el.points.length - 1; i++) {
      if (
        distToSegment(pt.x, pt.y, el.points[i][0], el.points[i][1], el.points[i + 1][0], el.points[i + 1][1]) <= half
      ) {
        return true;
      }
    }
    return false;
  }

  if (el.type === 'line' || el.type === 'arrow') {
    const endX = el.x + (el.width || 0);
    const endY = el.y + (el.height || 0);
    return distToSegment(pt.x, pt.y, el.x, el.y, endX, endY) <= half;
  }

  const fontSize = el.fontSize || 18;
  const w = el.width || (el.type === 'text' ? Math.max(40, (el.text?.length || 4) * fontSize * 0.6) : 40);
  const h = el.height || (el.type === 'text' ? fontSize * 1.3 : 40);
  const minX = Math.min(el.x, el.x + w);
  const maxX = Math.max(el.x, el.x + w);
  const minY = Math.min(el.y, el.y + h);
  const maxY = Math.max(el.y, el.y + h);

  return (
    pt.x + half >= minX &&
    pt.x - half <= maxX &&
    pt.y + half >= minY &&
    pt.y - half <= maxY
  );
}

/**
 * Memotong goresan (carving/splitting) saat disentuh kuas penghapus biasa (brush).
 * Mengembalikan array sub-goresan yang tersisa di luar area penghapus.
 */
export function carveStrokeWithEraser(
  points: [number, number][],
  eraserPt: { x: number; y: number },
  shape: 'circle' | 'square',
  size: number,
  strokeWidth: number
): [number, number][][] {
  if (!points || points.length === 0) return [];

  // Resample segmen yang terlalu renggang agar pemotongan presisi dan mulus
  const maxGap = Math.max(4, size / 4);
  const densePoints: [number, number][] = [];

  for (let i = 0; i < points.length; i++) {
    densePoints.push(points[i]);
    if (i < points.length - 1) {
      const p1 = points[i];
      const p2 = points[i + 1];
      const dist = Math.hypot(p2[0] - p1[0], p2[1] - p1[1]);
      if (dist > maxGap) {
        const steps = Math.ceil(dist / maxGap);
        for (let s = 1; s < steps; s++) {
          const t = s / steps;
          densePoints.push([p1[0] + (p2[0] - p1[0]) * t, p1[1] + (p2[1] - p1[1]) * t]);
        }
      }
    }
  }

  const radius = size / 2 + strokeWidth / 2;
  const isInside = (x: number, y: number): boolean => {
    if (shape === 'circle') {
      return Math.hypot(x - eraserPt.x, y - eraserPt.y) <= radius;
    } else {
      return (
        Math.abs(x - eraserPt.x) <= radius &&
        Math.abs(y - eraserPt.y) <= radius
      );
    }
  };

  const subStrokes: [number, number][][] = [];
  let currentRun: [number, number][] = [];

  for (const pt of densePoints) {
    if (isInside(pt[0], pt[1])) {
      if (currentRun.length > 0) {
        if (currentRun.length >= 2) {
          subStrokes.push(currentRun);
        } else if (currentRun.length === 1) {
          subStrokes.push([currentRun[0], [currentRun[0][0] + 0.1, currentRun[0][1] + 0.1]]);
        }
        currentRun = [];
      }
    } else {
      currentRun.push(pt);
    }
  }

  if (currentRun.length > 0) {
    if (currentRun.length >= 2) {
      subStrokes.push(currentRun);
    } else if (currentRun.length === 1) {
      subStrokes.push([currentRun[0], [currentRun[0][0] + 0.1, currentRun[0][1] + 0.1]]);
    }
  }

  return subStrokes;
}
