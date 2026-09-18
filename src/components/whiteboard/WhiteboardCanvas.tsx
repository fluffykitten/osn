import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Plus } from 'lucide-react';
import { CAT_PAW_OPEN_CURSOR, CAT_PAW_CLOSED_CURSOR } from './catPawCursor';
import type {
  WhiteboardDocument,
  WhiteboardElement,
  WhiteboardTool,
  WhiteboardParticipant,
  RulerState,
  CompassState,
  LiveStrokePayload,
  EraserSettings,
} from '../../types/whiteboard';
import { PAGE_FORMATS } from '../../types/whiteboard';
import {
  screenToWorld,
  renderBackground,
  renderInfiniteBackground,
  renderElement,
  isPointNearElement,
  isPointInPolygon,
  isElementHitByEraser,
  carveStrokeWithEraser,
} from '../../services/whiteboardEngine';
import { WhiteboardTextModal } from './WhiteboardTextModal';
import { QuestionCardOverlay } from './QuestionCardOverlay';
import { ObjectTransformerOverlay } from './ObjectTransformerOverlay';
import { storageService } from '../../services/storageService';

interface WhiteboardCanvasProps {
  document: WhiteboardDocument;
  activeTool: WhiteboardTool;
  eraserSettings?: EraserSettings;
  color: string;
  strokeWidth: number;
  zoom: number;
  panX: number;
  panY: number;
  onUpdatePan: (panX: number, panY: number) => void;
  onUpdateZoomAndPan?: (zoom: number, panX: number, panY: number) => void;
  onAddElement: (element: WhiteboardElement) => void;
  onUpdateElement?: (id: string, dx: number, dy: number) => void;
  onModifyElement?: (element: WhiteboardElement) => void;
  onDeleteElement: (id: string) => void;
  onDeleteElements?: (ids: string[]) => void;
  onCarveStroke?: (id: string, subStrokes: [number, number][][]) => void;
  onAutoAppendPage: () => void;
  onBroadcastPointer?: (x: number, y: number, isLaser: boolean) => void;
  participants: WhiteboardParticipant[];
  isReadOnly?: boolean;
  ruler?: RulerState;
  compass?: CompassState;
  liveStrokes?: Record<string, LiveStrokePayload>;
  onBroadcastLiveStroke?: (liveStroke: LiveStrokePayload) => void;
  onBroadcastFinishStroke?: (strokeId: string) => void;
  currentPageIndex?: number;
  onPageChange?: (index: number) => void;
  targetScrollPage?: number | null;
}

// Snapping otomatis saat menggambar di dekat penggaris (dalam koordinat layar client)
function snapClientToRuler(
  clientX: number,
  clientY: number,
  rulerClientX: number,
  rulerClientY: number,
  ruler: RulerState,
  isLocked: boolean
): { clientX: number; clientY: number; isSnapped: boolean } {
  const rad = (ruler.angleDeg * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);

  const vx = clientX - rulerClientX;
  const vy = clientY - rulerClientY;
  const proj = vx * cos + vy * sin;
  const perpDist = Math.abs(-vx * sin + vy * cos);

  // Kunci snapping saat sedang menarik goresan di sepanjang penggaris
  const threshold = isLocked ? 75 : 35;
  if ((perpDist <= threshold || isLocked) && proj >= -15 && proj <= ruler.lengthPx + 15) {
    const clampedProj = Math.max(0, Math.min(ruler.lengthPx, proj));
    return {
      clientX: rulerClientX + clampedProj * cos,
      clientY: rulerClientY + clampedProj * sin,
      isSnapped: true,
    };
  }
  return { clientX, clientY, isSnapped: false };
}

// Snapping otomatis saat menggambar di dekat atau di dalam lingkaran jangka (dalam koordinat layar client)
function snapClientToCompass(
  clientX: number,
  clientY: number,
  compassClientX: number,
  compassClientY: number,
  compass: CompassState,
  isLocked: boolean
): { clientX: number; clientY: number; isSnapped: boolean } {
  const dx = clientX - compassClientX;
  const dy = clientY - compassClientY;
  const dist = Math.hypot(dx, dy);

  // Jika sedang terkunci saat menarik goresan lingkaran ATAU kursor berada di dalam/dekat keliling lingkaran
  const isNearRadius = Math.abs(dist - compass.radiusPx) <= 45;
  const isInsideCircle = dist <= compass.radiusPx + 20 && dist >= 20;

  if (isLocked || isNearRadius || isInsideCircle) {
    if (dist < 10) return { clientX, clientY, isSnapped: isLocked };
    const angle = Math.atan2(dy, dx);
    return {
      clientX: compassClientX + Math.cos(angle) * compass.radiusPx,
      clientY: compassClientY + Math.sin(angle) * compass.radiusPx,
      isSnapped: true,
    };
  }
  return { clientX, clientY, isSnapped: false };
}

export const WhiteboardCanvas: React.FC<WhiteboardCanvasProps> = ({
  document: doc,
  activeTool,
  eraserSettings = { mode: 'brush', shape: 'circle', size: 30 },
  color,
  strokeWidth,
  zoom,
  panX,
  panY,
  onUpdatePan,
  onUpdateZoomAndPan,
  onAddElement,
  onUpdateElement,
  onModifyElement,
  onDeleteElement,
  onDeleteElements,
  onCarveStroke,
  onAutoAppendPage,
  onBroadcastPointer,
  participants,
  isReadOnly = false,
  ruler,
  compass,
  liveStrokes,
  onBroadcastLiveStroke,
  onBroadcastFinishStroke,
  currentPageIndex = 0,
  onPageChange,
  targetScrollPage = null,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [isDrawing, setIsDrawing] = useState(false);
  const [currentPoints, setCurrentPoints] = useState<[number, number][]>([]);
  const [lassoPoints, setLassoPoints] = useState<[number, number][]>([]);
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null);
  const [currentPos, setCurrentPos] = useState<{ x: number; y: number } | null>(null);
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState<{
    x: number;
    y: number;
    scrollLeft?: number;
    scrollTop?: number;
  }>({ x: 0, y: 0 });

  // State untuk Modal Input Teks & Formula Kimia (ChemToolbar)
  const [isTextModalOpen, setIsTextModalOpen] = useState(false);
  const [textModalPos, setTextModalPos] = useState<{ x: number; y: number }>({ x: 100, y: 100 });

  // Ref untuk live stroke streaming (Real-Time saat men-drag kursor)
  const currentStrokeIdRef = useRef<string | null>(null);
  const lastBroadcastTimeRef = useRef<number>(0);

  // Pemilihan & Pergeseran Objek Tunggal
  const [selectedElementId, setSelectedElementId] = useState<string | null>(null);
  const [isDraggingElement, setIsDraggingElement] = useState(false);
  const elementDragStartRef = useRef<{ x: number; y: number } | null>(null);
  const [cardHeights, setCardHeights] = useState<Record<string, number>>({});
  const handleCardHeightChange = useCallback((id: string, h: number) => {
    setCardHeights((prev) => (prev[id] === h ? prev : { ...prev, [id]: h }));
  }, []);
  const isRulerSnappedRef = useRef<boolean>(false);
  const isCompassSnappedRef = useRef<boolean>(false);

  // Laser Fading Pen: Goresan pemandu yang memudar dan hilang otomatis dalam ~3.2 detik
  interface FadingStroke {
    id: string;
    points: [number, number][];
    color: string;
    strokeWidth: number;
    createdAt: number;
    durationMs: number;
  }
  const [fadingStrokes, setFadingStrokes] = useState<FadingStroke[]>([]);
  const [animTick, setAnimTick] = useState(0);

  useEffect(() => {
    if (fadingStrokes.length === 0) return;
    let animId: number;
    const tick = () => {
      const now = Date.now();
      const active = fadingStrokes.filter((s) => now - s.createdAt < s.durationMs);
      if (active.length !== fadingStrokes.length) {
        setFadingStrokes(active);
      } else {
        setAnimTick((t) => (t + 1) % 10000);
      }
      if (active.length > 0) {
        animId = requestAnimationFrame(tick);
      }
    };
    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [fadingStrokes]);

  // Keyboard shortcut untuk menghapus objek yang sedang diseleksi (Delete / Backspace) & Pan Kanvas (Spacebar)
  const [isSpacePressed, setIsSpacePressed] = useState(false);
  const isSpacePressedRef = useRef(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      ) {
        return;
      }

      if (e.code === 'Space' && !e.repeat) {
        e.preventDefault();
        isSpacePressedRef.current = true;
        setIsSpacePressed(true);
      }

      if ((e.key === 'Delete' || e.key === 'Backspace') && selectedElementId) {
        e.preventDefault();
        const selectedEl = doc.elements.find((el) => el.id === selectedElementId);
        if (selectedEl?.isLocked) {
          return; // Objek terkunci tidak dapat dihapus
        }
        onDeleteElement(selectedElementId);
        setSelectedElementId(null);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        isSpacePressedRef.current = false;
        setIsSpacePressed(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [selectedElementId, onDeleteElement]);

  // Dimensi Kanvas Responsif
  const formatConfig = PAGE_FORMATS[doc.pageFormat] || PAGE_FORMATS.a4_portrait;
  const pageWidth = formatConfig.width;
  const pageHeight = formatConfig.height;
  const gapY = 48;
  const pagePaddingTop = 32;

  const [canvasDimensions, setCanvasDimensions] = useState(() => {
    if (doc.layoutMode === 'paginated') {
      const totalPages = Math.max(1, doc.pages?.length || 1);
      return {
        width: pageWidth,
        height: pagePaddingTop + (pageHeight + gapY) * totalPages + 40,
      };
    }
    return {
      width: typeof window !== 'undefined' ? window.innerWidth : 1920,
      height: typeof window !== 'undefined' ? window.innerHeight : 1080,
    };
  });

  // Sinkronkan Ukuran Canvas dengan Container secara Presisi
  useEffect(() => {
    const updateSize = () => {
      if (!containerRef.current) return;
      if (doc.layoutMode === 'infinite') {
        setCanvasDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      } else {
        const totalPages = Math.max(1, doc.pages?.length || 1);
        setCanvasDimensions({
          width: pageWidth,
          height: pagePaddingTop + (pageHeight + gapY) * totalPages + 40,
        });
      }
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, [doc.layoutMode, doc.pages?.length, pageWidth, pageHeight]);

  // Auto-scroll ke halaman baru yang baru saja ditambahkan di bawah
  const prevPagesCountRef = useRef(doc.pages?.length || 1);
  useEffect(() => {
    if (doc.layoutMode !== 'paginated' || !containerRef.current) return;
    const currentCount = doc.pages?.length || 1;
    if (currentCount > prevPagesCountRef.current) {
      const newPageIdx = currentCount - 1;
      const targetTop = pagePaddingTop + newPageIdx * (pageHeight + gapY);
      setTimeout(() => {
        containerRef.current?.scrollTo({ top: targetTop, behavior: 'smooth' });
      }, 100);
    }
    prevPagesCountRef.current = currentCount;
  }, [doc.pages?.length, doc.layoutMode, pageHeight]);

  // Scroll otomatis ke halaman HANYA saat targetScrollPage eksplisit dipicu (dari klik sidebar / tombol)
  useEffect(() => {
    if (
      doc.layoutMode !== 'paginated' ||
      !containerRef.current ||
      typeof targetScrollPage !== 'number'
    )
      return;
    const targetTop = Math.max(0, pagePaddingTop + targetScrollPage * (pageHeight + gapY) - 16);
    containerRef.current.scrollTo({ top: targetTop, behavior: 'smooth' });
  }, [targetScrollPage, doc.layoutMode, pageHeight]);

  // Sinkronisasi Ref untuk Animasi dan Panning Tanpa Re-render Lag
  const panXRef = useRef(panX);
  const panYRef = useRef(panY);
  const zoomRef = useRef(zoom);
  useEffect(() => {
    panXRef.current = panX;
    panYRef.current = panY;
    zoomRef.current = zoom;
  }, [panX, panY, zoom]);

  // State Pelacakan Auto-Pan saat Objek atau Goresan Mendekati Tepi Viewport
  const autoPanStateRef = useRef<{
    active: boolean;
    clientX: number;
    clientY: number;
    elementId: string | null;
  }>({
    active: false,
    clientX: 0,
    clientY: 0,
    elementId: null,
  });

  // Edge Auto-Panning Loop: Memperluas Ruang Kanvas Tak Hingga Secara Halus saat Menyeret Objek
  useEffect(() => {
    if (doc.layoutMode !== 'infinite') return;
    let animId: number;
    const EDGE_MARGIN = 55;
    const MAX_PAN_SPEED = 14;

    const checkAndAutoPan = () => {
      const state = autoPanStateRef.current;
      if (state.active && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const { clientX, clientY, elementId } = state;

        let speedX = 0;
        let speedY = 0;

        // Tepi Kiri (Pan ke kanan untuk memperluas area kiri)
        if (clientX - rect.left < EDGE_MARGIN && clientX - rect.left >= -80) {
          const factor = (EDGE_MARGIN - Math.max(0, clientX - rect.left)) / EDGE_MARGIN;
          speedX = factor * MAX_PAN_SPEED;
        }
        // Tepi Kanan (Pan ke kiri untuk memperluas area kanan)
        else if (rect.right - clientX < EDGE_MARGIN && rect.right - clientX >= -80) {
          const factor = (EDGE_MARGIN - Math.max(0, rect.right - clientX)) / EDGE_MARGIN;
          speedX = -factor * MAX_PAN_SPEED;
        }

        // Tepi Atas (Pan ke bawah untuk memperluas area atas)
        if (clientY - rect.top < EDGE_MARGIN && clientY - rect.top >= -80) {
          const factor = (EDGE_MARGIN - Math.max(0, clientY - rect.top)) / EDGE_MARGIN;
          speedY = factor * MAX_PAN_SPEED;
        }
        // Tepi Bawah (Pan ke atas untuk memperluas area bawah)
        else if (rect.bottom - clientY < EDGE_MARGIN && rect.bottom - clientY >= -80) {
          const factor = (EDGE_MARGIN - Math.max(0, rect.bottom - clientY)) / EDGE_MARGIN;
          speedY = -factor * MAX_PAN_SPEED;
        }

        if (speedX !== 0 || speedY !== 0) {
          const nextPanX = panXRef.current + Math.round(speedX);
          const nextPanY = panYRef.current + Math.round(speedY);
          onUpdatePan(nextPanX, nextPanY);

          // Geser posisi elemen di koordinat dunia agar tetap stabil di bawah kursor mouse saat ruang bertambah
          if (elementId && onUpdateElement) {
            const currentZ = Math.max(0.1, zoomRef.current);
            const worldDx = Math.round(-speedX / currentZ);
            const worldDy = Math.round(-speedY / currentZ);
            if (worldDx !== 0 || worldDy !== 0) {
              onUpdateElement(elementId, worldDx, worldDy);
            }
          }
        }
      }

      animId = requestAnimationFrame(checkAndAutoPan);
    };

    animId = requestAnimationFrame(checkAndAutoPan);
    return () => cancelAnimationFrame(animId);
  }, [doc.layoutMode, onUpdatePan, onUpdateElement]);

  // Zoom In / Zoom Out dengan Scroll Mouse (Wheel) & Pan Horizontal (Shift + Wheel)
  useEffect(() => {
    const container = containerRef.current;
    if (!container || doc.layoutMode !== 'infinite') return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();

      // Pan Horizontal dengan Shift + Scroll
      if (e.shiftKey) {
        const delta = e.deltaY || e.deltaX;
        onUpdatePan(panX - delta, panY);
        return;
      }

      // Pan Vertikal dengan Alt + Scroll
      if (e.altKey) {
        onUpdatePan(panX, panY - e.deltaY);
        return;
      }

      const rect = canvasRef.current?.getBoundingClientRect() || container.getBoundingClientRect();
      const canvasX = e.clientX - rect.left;
      const canvasY = e.clientY - rect.top;

      // deltaY < 0 = scroll up (zoom in), deltaY > 0 = scroll down (zoom out)
      const zoomFactor = Math.exp(-e.deltaY * 0.0015);
      const newZoom = Math.min(5, Math.max(0.15, Number((zoom * zoomFactor).toFixed(3))));

      if (newZoom === zoom) return;

      // Geser panX dan panY agar titik di bawah kursor mouse tetap diam (focal point zoom)
      const newPanX = Math.round(canvasX - (canvasX - panX) * (newZoom / zoom));
      const newPanY = Math.round(canvasY - (canvasY - panY) * (newZoom / zoom));

      if (onUpdateZoomAndPan) {
        onUpdateZoomAndPan(newZoom, newPanX, newPanY);
      } else {
        onUpdatePan(newPanX, newPanY);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [doc.layoutMode, zoom, panX, panY, onUpdateZoomAndPan, onUpdatePan]);

  // Mendapatkan koordinat dunia (world coordinate) dari mouse event secara 100% presisi
  const getCoordinates = useCallback(
    (e: React.MouseEvent | MouseEvent): { x: number; y: number } => {
      if (!canvasRef.current || !containerRef.current) return { x: 0, y: 0 };
      const containerRect = containerRef.current.getBoundingClientRect();
      const canvasRect = canvasRef.current.getBoundingClientRect();

      let targetClientX = e.clientX;
      let targetClientY = e.clientY;

      // Snapping jika instrumen Penggaris atau Jangka aktif dan sedang menggambar dengan pena/highlighter/garis
      if (
        (activeTool === 'pen' || activeTool === 'highlighter' || activeTool === 'fading_pen' || activeTool === 'line') &&
        ruler?.isVisible
      ) {
        const rulerClientX = containerRect.left + ruler.x;
        const rulerClientY = containerRect.top + ruler.y;
        const res = snapClientToRuler(
          e.clientX,
          e.clientY,
          rulerClientX,
          rulerClientY,
          ruler,
          isRulerSnappedRef.current
        );
        if (res.isSnapped) {
          targetClientX = res.clientX;
          targetClientY = res.clientY;
          if (isDrawing) {
            isRulerSnappedRef.current = true;
          }
        } else if (!isDrawing) {
          isRulerSnappedRef.current = false;
        }
      } else if (
        (activeTool === 'pen' || activeTool === 'highlighter' || activeTool === 'fading_pen') &&
        compass?.isVisible
      ) {
        const compassClientX = containerRect.left + compass.centerX;
        const compassClientY = containerRect.top + compass.centerY;
        const res = snapClientToCompass(
          e.clientX,
          e.clientY,
          compassClientX,
          compassClientY,
          compass,
          isCompassSnappedRef.current
        );
        if (res.isSnapped) {
          targetClientX = res.clientX;
          targetClientY = res.clientY;
          if (isDrawing) {
            isCompassSnappedRef.current = true;
          }
        } else if (!isDrawing) {
          isCompassSnappedRef.current = false;
        }
      }

      const scaleX = canvasRef.current.width / canvasRect.width;
      const scaleY = canvasRef.current.height / canvasRect.height;

      const screenX = (targetClientX - canvasRect.left) * scaleX;
      const screenY = (targetClientY - canvasRect.top) * scaleY;

      let rawPt: { x: number; y: number };
      if (doc.layoutMode === 'infinite') {
        rawPt = screenToWorld(screenX, screenY, panX, panY, zoom);
      } else {
        rawPt = { x: screenX, y: screenY };
      }

      return rawPt;
    },
    [doc.layoutMode, panX, panY, zoom, activeTool, ruler, compass, isDrawing]
  );

  // ScrollSpy: Deteksi halaman yang sedang aktif di viewport saat scrolling
  const handleContainerScroll = useCallback(() => {
    if (doc.layoutMode !== 'paginated' || !containerRef.current) return;
    const { scrollTop } = containerRef.current;
    const estimatedPage = Math.max(
      0,
      Math.min(
        doc.pages.length - 1,
        Math.round((scrollTop - pagePaddingTop + (pageHeight + gapY) * 0.4) / (pageHeight + gapY))
      )
    );
    if (onPageChange && estimatedPage !== currentPageIndex) {
      onPageChange(estimatedPage);
    }
  }, [doc.layoutMode, doc.pages.length, pageHeight, currentPageIndex, onPageChange]);

  // Main Render Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();

    if (doc.layoutMode === 'infinite') {
      ctx.setTransform(zoom, 0, 0, zoom, panX, panY);
      renderInfiniteBackground(
        ctx,
        doc.backgroundType,
        canvas.width,
        canvas.height,
        panX,
        panY,
        zoom
      );

      for (const el of doc.elements) {
        renderElement(ctx, el);
      }
    } else {
      const totalPages = Math.max(1, doc.pages.length);

      // Latar belakang abu-abu elegan di luar lembar kertas
      ctx.fillStyle = '#f1f5f9';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < totalPages; i++) {
        const pageTop = pagePaddingTop + i * (pageHeight + gapY);

        // Kertas A4 dengan bayangan multi-layer realistis
        ctx.save();
        ctx.shadowColor = 'rgba(15, 23, 42, 0.12)';
        ctx.shadowBlur = 20;
        ctx.shadowOffsetY = 6;
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, pageTop, pageWidth, pageHeight);
        ctx.restore();

        // Gambar pola background kertas di dalam batas lembar A4
        ctx.save();
        ctx.beginPath();
        ctx.rect(0, pageTop, pageWidth, pageHeight);
        ctx.clip();
        renderBackground(ctx, doc.backgroundType, pageWidth, pageHeight, 0, pageTop);
        ctx.restore();

        // Border lembar kertas halus
        ctx.save();
        ctx.strokeStyle = '#cbd5e1';
        ctx.lineWidth = 1;
        ctx.strokeRect(0, pageTop, pageWidth, pageHeight);

        // Label Header Halaman di pojok atas lembar
        ctx.fillStyle = '#475569';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText(`Halaman ${i + 1} dari ${totalPages}`, 16, pageTop - 12);

        ctx.fillStyle = '#94a3b8';
        ctx.font = '11px sans-serif';
        ctx.fillText(
          `${doc.pageFormat.replace('_', ' ').toUpperCase()} • ${pageWidth}×${pageHeight} px`,
          pageWidth - 200,
          pageTop - 12
        );

        // Garis pembatas putus-putus dan penanda antar halaman jika bukan halaman terakhir
        if (i < totalPages - 1) {
          const sepY = pageTop + pageHeight + gapY / 2;
          ctx.strokeStyle = '#cbd5e1';
          ctx.lineWidth = 1;
          ctx.setLineDash([6, 6]);
          ctx.beginPath();
          ctx.moveTo(30, sepY);
          ctx.lineTo(pageWidth - 30, sepY);
          ctx.stroke();

          ctx.setLineDash([]);
          ctx.fillStyle = '#94a3b8';
          ctx.font = 'bold 11px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(`Pemisah Halaman ${i + 1} & ${i + 2}`, pageWidth / 2, sepY - 4);
          ctx.textAlign = 'left';
        }

        ctx.restore();
      }

      // Render semua elemen pada koordinat masing-masing
      for (const el of doc.elements) {
        renderElement(ctx, el);
      }
    }

    // Render Goresan Real-Time dari Partisipan Lain (Live Streaming Strokes)
    if (liveStrokes) {
      for (const stroke of Object.values(liveStrokes)) {
        if (!stroke.points || stroke.points.length === 0) continue;
        ctx.save();
        ctx.strokeStyle = stroke.color;
        ctx.lineWidth = stroke.strokeWidth;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.globalAlpha = stroke.opacity ?? (stroke.tool === 'highlighter' ? 0.35 : 1);

        if (stroke.points.length === 1) {
          ctx.fillStyle = stroke.color;
          ctx.beginPath();
          ctx.arc(stroke.points[0][0], stroke.points[0][1], stroke.strokeWidth / 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.moveTo(stroke.points[0][0], stroke.points[0][1]);
          for (let i = 1; i < stroke.points.length - 1; i++) {
            const xc = (stroke.points[i][0] + stroke.points[i + 1][0]) / 2;
            const yc = (stroke.points[i][1] + stroke.points[i + 1][1]) / 2;
            ctx.quadraticCurveTo(stroke.points[i][0], stroke.points[i][1], xc, yc);
          }
          const last = stroke.points[stroke.points.length - 1];
          ctx.lineTo(last[0], last[1]);
          ctx.stroke();
        }
        ctx.restore();
      }
    }

    // Render Preview Goresan Aktif Pengguna Lokal (Real-Time saat menggambar)
    if (isDrawing) {
      if ((activeTool === 'pen' || activeTool === 'highlighter' || activeTool === 'fading_pen') && currentPoints.length > 0) {
        ctx.save();
        ctx.strokeStyle = color;
        ctx.lineWidth = activeTool === 'fading_pen' ? Math.max(3.5, strokeWidth) : strokeWidth;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.globalAlpha = activeTool === 'highlighter' ? 0.35 : 1;
        if (activeTool === 'fading_pen') {
          ctx.shadowColor = color || '#ef4444';
          ctx.shadowBlur = 12;
        }

        if (currentPoints.length === 1) {
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(currentPoints[0][0], currentPoints[0][1], (activeTool === 'fading_pen' ? Math.max(3.5, strokeWidth) : strokeWidth) / 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.moveTo(currentPoints[0][0], currentPoints[0][1]);
          for (let i = 1; i < currentPoints.length - 1; i++) {
            const xc = (currentPoints[i][0] + currentPoints[i + 1][0]) / 2;
            const yc = (currentPoints[i][1] + currentPoints[i + 1][1]) / 2;
            ctx.quadraticCurveTo(currentPoints[i][0], currentPoints[i][1], xc, yc);
          }
          const last = currentPoints[currentPoints.length - 1];
          ctx.lineTo(last[0], last[1]);
          ctx.stroke();
        }
        ctx.restore();
      } else if (dragStart && currentPos) {
        ctx.save();
        ctx.strokeStyle = color;
        ctx.lineWidth = strokeWidth;

        const w = currentPos.x - dragStart.x;
        const h = currentPos.y - dragStart.y;

        if (activeTool === 'line' || activeTool === 'arrow') {
          ctx.beginPath();
          ctx.moveTo(dragStart.x, dragStart.y);
          ctx.lineTo(currentPos.x, currentPos.y);
          ctx.stroke();
        } else if (activeTool === 'rect') {
          ctx.strokeRect(dragStart.x, dragStart.y, w, h);
        } else if (activeTool === 'ellipse') {
          ctx.beginPath();
          ctx.ellipse(
            dragStart.x + w / 2,
            dragStart.y + h / 2,
            Math.abs(w / 2),
            Math.abs(h / 2),
            0,
            0,
            Math.PI * 2
          );
          ctx.stroke();
        }
        ctx.restore();
      }
    }

    // Render Pratinjau Loop Lasso Eraser (Garis Merah Putus-putus + Fill Halus)
    if (activeTool === 'eraser' && eraserSettings?.mode === 'lasso' && lassoPoints.length > 1) {
      ctx.save();
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([5, 5]);
      ctx.fillStyle = 'rgba(239, 68, 68, 0.12)';
      ctx.beginPath();
      ctx.moveTo(lassoPoints[0][0], lassoPoints[0][1]);
      for (let i = 1; i < lassoPoints.length; i++) {
        ctx.lineTo(lassoPoints[i][0], lassoPoints[i][1]);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }

    // Render Pratinjau Kursor Visual Eraser Brush (Lingkaran / Persegi Sesuai Ukuran)
    if (
      activeTool === 'eraser' &&
      (!eraserSettings || eraserSettings.mode === 'brush') &&
      currentPos
    ) {
      ctx.save();
      const sz = eraserSettings?.size || 30;
      const shape = eraserSettings?.shape || 'circle';
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.85)';
      ctx.lineWidth = 1.5;
      ctx.fillStyle = 'rgba(239, 68, 68, 0.12)';
      if (shape === 'circle') {
        ctx.beginPath();
        ctx.arc(currentPos.x, currentPos.y, sz / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      } else {
        const half = sz / 2;
        ctx.strokeRect(currentPos.x - half, currentPos.y - half, sz, sz);
        ctx.fillRect(currentPos.x - half, currentPos.y - half, sz, sz);
      }
      ctx.restore();
    }

    // Render Laser Partisipan
    for (const p of participants) {
      if (p.isLaserActive) {
        ctx.save();
        ctx.fillStyle = '#ef4444';
        ctx.shadowColor = '#ef4444';
        ctx.shadowBlur = 14;
        ctx.beginPath();
        ctx.arc(p.cursorX, p.cursorY, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.font = 'bold 11px sans-serif';
        ctx.fillStyle = p.color || '#ef4444';
        ctx.fillText(p.name, p.cursorX + 10, p.cursorY - 6);
        ctx.restore();
      }
    }

    // Render Fading Laser Strokes (Goresan Fading Pen yang sedang memudar perlahan)
    const nowTime = Date.now();
    for (const fs of fadingStrokes) {
      const elapsed = nowTime - fs.createdAt;
      if (elapsed < fs.durationMs && fs.points.length > 0) {
        const remainingRatio = Math.max(0, 1 - elapsed / fs.durationMs);
        ctx.save();
        ctx.globalAlpha = remainingRatio;
        ctx.strokeStyle = fs.color;
        ctx.lineWidth = fs.strokeWidth;
        ctx.shadowColor = fs.color;
        ctx.shadowBlur = 14 * remainingRatio;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        ctx.beginPath();
        ctx.moveTo(fs.points[0][0], fs.points[0][1]);
        for (let i = 1; i < fs.points.length - 1; i++) {
          const xc = (fs.points[i][0] + fs.points[i + 1][0]) / 2;
          const yc = (fs.points[i][1] + fs.points[i + 1][1]) / 2;
          ctx.quadraticCurveTo(fs.points[i][0], fs.points[i][1], xc, yc);
        }
        const last = fs.points[fs.points.length - 1];
        ctx.lineTo(last[0], last[1]);
        ctx.stroke();
        ctx.restore();
      }
    }

    ctx.restore();
  }, [
    doc,
    activeTool,
    eraserSettings,
    lassoPoints,
    color,
    strokeWidth,
    zoom,
    panX,
    panY,
    isDrawing,
    currentPoints,
    dragStart,
    currentPos,
    participants,
    pageWidth,
    pageHeight,
    canvasDimensions.width,
    canvasDimensions.height,
    selectedElementId,
    liveStrokes,
    fadingStrokes,
    animTick,
  ]);

  // Komit dan simpan goresan aktif ke dokumen papan tulis secara aman
  const commitCurrentDrawing = useCallback(() => {
    isRulerSnappedRef.current = false;
    isCompassSnappedRef.current = false;
    autoPanStateRef.current.active = false;
    if (isPanning) {
      setIsPanning(false);
    }

    if (activeTool === 'select') {
      setIsDraggingElement(false);
      elementDragStartRef.current = null;
    }

    if (!isDrawing) return;
    setIsDrawing(false);

    if (activeTool === 'fading_pen' && currentPoints.length >= 1) {
      const finalPoints =
        currentPoints.length === 1
          ? [currentPoints[0], [currentPoints[0][0] + 0.1, currentPoints[0][1] + 0.1] as [number, number]]
          : currentPoints;

      setFadingStrokes((prev) => [
        ...prev,
        {
          id: `fading-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
          points: finalPoints,
          color: color || '#ef4444',
          strokeWidth: Math.max(3.5, strokeWidth),
          createdAt: Date.now(),
          durationMs: 3200,
        },
      ]);

      if (onBroadcastFinishStroke && currentStrokeIdRef.current) {
        onBroadcastFinishStroke(currentStrokeIdRef.current);
      }
      currentStrokeIdRef.current = null;
      setCurrentPoints([]);
    } else if ((activeTool === 'pen' || activeTool === 'highlighter') && currentPoints.length >= 1) {
      const finalPoints =
        currentPoints.length === 1
          ? [currentPoints[0], [currentPoints[0][0] + 0.1, currentPoints[0][1] + 0.1] as [number, number]]
          : currentPoints;

      const strokeId = currentStrokeIdRef.current || `stroke-${Date.now()}`;
      onAddElement({
        id: strokeId,
        type: 'stroke',
        x: finalPoints[0][0],
        y: finalPoints[0][1],
        points: finalPoints,
        color,
        strokeWidth,
        opacity: activeTool === 'highlighter' ? 0.35 : 1,
        isLocked: false,
        zIndex: 1,
      });

      if (onBroadcastFinishStroke && currentStrokeIdRef.current) {
        onBroadcastFinishStroke(currentStrokeIdRef.current);
      }
      currentStrokeIdRef.current = null;
      setCurrentPoints([]);
    } else if (dragStart && currentPos) {
      const w = currentPos.x - dragStart.x;
      const h = currentPos.y - dragStart.y;

      if (activeTool === 'line' || activeTool === 'arrow') {
        onAddElement({
          id: `${activeTool}-${Date.now()}`,
          type: activeTool,
          x: dragStart.x,
          y: dragStart.y,
          width: w,
          height: h,
          color,
          strokeWidth,
          opacity: 1,
          isLocked: false,
          zIndex: 1,
        });
      } else if (activeTool === 'rect') {
        onAddElement({
          id: `rect-${Date.now()}`,
          type: 'rect',
          x: Math.min(dragStart.x, currentPos.x),
          y: Math.min(dragStart.y, currentPos.y),
          width: Math.abs(w),
          height: Math.abs(h),
          color,
          strokeWidth,
          opacity: 1,
          isLocked: false,
          zIndex: 1,
        });
      } else if (activeTool === 'ellipse') {
        onAddElement({
          id: `ellipse-${Date.now()}`,
          type: 'ellipse',
          x: Math.min(dragStart.x, currentPos.x),
          y: Math.min(dragStart.y, currentPos.y),
          width: Math.abs(w),
          height: Math.abs(h),
          color,
          strokeWidth,
          opacity: 1,
          isLocked: false,
          zIndex: 1,
        });
      }
      setDragStart(null);
      setCurrentPos(null);
    }

    // Eksekusi Hapus dengan Mode Lasso (Lasso Eraser)
    if (activeTool === 'eraser' && eraserSettings?.mode === 'lasso' && lassoPoints.length >= 3) {
      const elementsToDelete: string[] = [];
      for (const el of doc.elements) {
        if (el.isLocked) continue; // Jangan hapus elemen terkunci dengan lasso
        if (el.type === 'stroke' && el.points && el.points.length > 0) {
          const anyPointInside = el.points.some((p) => isPointInPolygon(p[0], p[1], lassoPoints));
          if (anyPointInside) {
            elementsToDelete.push(el.id);
            continue;
          }
        } else {
          const fontSize = el.fontSize || 18;
          const w = el.width || (el.type === 'text' ? Math.max(40, (el.text?.length || 4) * fontSize * 0.6) : 40);
          const h = el.height || (el.type === 'text' ? fontSize * 1.3 : 40);
          const cx = el.x + w / 2;
          const cy = el.y + h / 2;
          if (
            isPointInPolygon(cx, cy, lassoPoints) ||
            isPointInPolygon(el.x, el.y, lassoPoints) ||
            isPointInPolygon(el.x + w, el.y + h, lassoPoints)
          ) {
            elementsToDelete.push(el.id);
          }
        }
      }

      if (elementsToDelete.length > 0) {
        if (onDeleteElements) {
          onDeleteElements(elementsToDelete);
        } else {
          elementsToDelete.forEach((id) => onDeleteElement(id));
        }
      }
      setLassoPoints([]);
    } else if (activeTool === 'eraser') {
      setLassoPoints([]);
    }
  }, [
    isPanning,
    activeTool,
    eraserSettings,
    lassoPoints,
    doc.elements,
    isDrawing,
    currentPoints,
    dragStart,
    currentPos,
    color,
    strokeWidth,
    onAddElement,
    onDeleteElement,
    onDeleteElements,
    onBroadcastFinishStroke,
  ]);

  // Listener PointerUp/MouseUp/Blur Global untuk memastikan goresan disimpan dan panning berhenti jika mouse lepas di luar jendela (misal ke sidebar tab vertikal browser)
  useEffect(() => {
    const handleGlobalEnd = () => {
      autoPanStateRef.current.active = false;
      if (isPanning) {
        setIsPanning(false);
      }
      setIsDraggingElement(false);
      elementDragStartRef.current = null;
      if (isDrawing) {
        commitCurrentDrawing();
      }
    };
    window.addEventListener('pointerup', handleGlobalEnd);
    window.addEventListener('mouseup', handleGlobalEnd);
    window.addEventListener('blur', handleGlobalEnd);
    return () => {
      window.removeEventListener('pointerup', handleGlobalEnd);
      window.removeEventListener('mouseup', handleGlobalEnd);
      window.removeEventListener('blur', handleGlobalEnd);
    };
  }, [isPanning, isDrawing, commitCurrentDrawing]);

  // Pointer Events
  const handleMouseDown = (e: React.PointerEvent<HTMLCanvasElement> | React.MouseEvent<HTMLCanvasElement>) => {
    // 1. Spacebar ATAU Klik Kanan (button === 2) ATAU Tombol Tengah (button === 1) ATAU Alt = Pan / Geser Posisi Kanvas
    if (isSpacePressedRef.current || e.button === 2 || e.button === 1 || e.altKey) {
      e.preventDefault();
      e.stopPropagation();
      setIsPanning(true);
      if (doc.layoutMode === 'infinite') {
        setPanStart({ x: e.clientX - panX, y: e.clientY - panY });
      } else {
        setPanStart({
          x: e.clientX,
          y: e.clientY,
          scrollLeft: containerRef.current?.scrollLeft || 0,
          scrollTop: containerRef.current?.scrollTop || 0,
        });
      }
      return;
    }

    // Jika ada goresan sebelumnya yang belum ter-commit (misal mouse sempat lepas di luar canvas/sidebar), commit dulu agar tidak hilang
    if (isDrawing && currentPoints.length > 0) {
      commitCurrentDrawing();
    }

    // Capture pointer agar mouse event tetap diterima saat kursor keluar ke sidebar atau luar jendela
    if ('pointerId' in e) {
      try {
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
      } catch {}
    }

    const pt = getCoordinates(e);

    // Alat Pilih / Geser Objek Tunggal
    if (activeTool === 'select') {
      const hit = doc.elements
        .slice()
        .reverse()
        .find((el) => isPointNearElement(pt.x, pt.y, el, 20));

      if (hit) {
        setSelectedElementId(hit.id);
        if (!hit.isLocked) {
          setIsDraggingElement(true);
          elementDragStartRef.current = pt;
          setDragStart(pt);
        } else {
          setIsDraggingElement(false);
          elementDragStartRef.current = null;
          setDragStart(null);
        }
      } else {
        setSelectedElementId(null);
        setIsPanning(true);
        if (doc.layoutMode === 'infinite') {
          setPanStart({ x: e.clientX - panX, y: e.clientY - panY });
        } else {
          setPanStart({
            x: e.clientX,
            y: e.clientY,
            scrollLeft: containerRef.current?.scrollLeft || 0,
            scrollTop: containerRef.current?.scrollTop || 0,
          });
        }
      }
      return;
    }

    if (isReadOnly) return;

    setIsDrawing(true);
    setDragStart(pt);
    setCurrentPos(pt);

    if (activeTool === 'pen' || activeTool === 'highlighter' || activeTool === 'fading_pen') {
      const strokeId = `stroke-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
      currentStrokeIdRef.current = strokeId;
      setCurrentPoints([[pt.x, pt.y]]);

      // Siarkan titik awal goresan ke seluruh peserta
      if (onBroadcastLiveStroke) {
        onBroadcastLiveStroke({
          strokeId,
          points: [[pt.x, pt.y]],
          color: activeTool === 'fading_pen' ? color || '#ef4444' : color,
          strokeWidth: activeTool === 'fading_pen' ? Math.max(3.5, strokeWidth) : strokeWidth,
          opacity: activeTool === 'highlighter' ? 0.35 : 1,
          tool: activeTool,
        });
      }
    } else if (activeTool === 'eraser') {
      const mode = eraserSettings?.mode || 'brush';
      if (mode === 'lasso') {
        setLassoPoints([[pt.x, pt.y]]);
      } else if (mode === 'brush') {
        const shape = eraserSettings?.shape || 'circle';
        const size = eraserSettings?.size || 30;
        for (const el of doc.elements) {
          if (el.isLocked) continue; // Elemen terkunci tidak dapat dihapus
          if (isElementHitByEraser(pt, el, shape, size)) {
            if (el.type === 'stroke' && el.points && el.points.length > 0) {
              const subStrokes = carveStrokeWithEraser(el.points, pt, shape, size, el.strokeWidth);
              if (onCarveStroke) {
                onCarveStroke(el.id, subStrokes);
              } else if (subStrokes.length === 0) {
                onDeleteElement(el.id);
              }
            } else {
              onDeleteElement(el.id);
            }
          }
        }
      } else if (mode === 'object') {
        for (const el of doc.elements) {
          if (el.isLocked) continue; // Elemen terkunci tidak dapat dihapus
          if (isPointNearElement(pt.x, pt.y, el, 16)) {
            onDeleteElement(el.id);
            break;
          }
        }
      }
    } else if (activeTool === 'text') {
      setTextModalPos(pt);
      setIsTextModalOpen(true);
      setIsDrawing(false);
    }
  };

  const handleMouseMove = (e: React.PointerEvent<HTMLCanvasElement> | React.MouseEvent<HTMLCanvasElement>) => {
    if (isPanning) {
      if (doc.layoutMode === 'infinite') {
        onUpdatePan(e.clientX - panStart.x, e.clientY - panStart.y);
      } else if (containerRef.current) {
        const dx = e.clientX - panStart.x;
        const dy = e.clientY - panStart.y;
        containerRef.current.scrollLeft = (panStart.scrollLeft ?? 0) - dx;
        containerRef.current.scrollTop = (panStart.scrollTop ?? 0) - dy;
      }
      return;
    }

    const pt = getCoordinates(e);
    setCurrentPos(pt);

    if (isDraggingElement && selectedElementId && elementDragStartRef.current && onUpdateElement) {
      const selectedEl = doc.elements.find((el) => el.id === selectedElementId);
      if (selectedEl?.isLocked) {
        setIsDraggingElement(false);
        elementDragStartRef.current = null;
        autoPanStateRef.current.active = false;
        return;
      }
      const dx = Math.round(pt.x - elementDragStartRef.current.x);
      const dy = Math.round(pt.y - elementDragStartRef.current.y);
      if (dx !== 0 || dy !== 0) {
        elementDragStartRef.current = pt;
        onUpdateElement(selectedElementId, dx, dy);
      }

      // Aktifkan Edge Auto-Pan saat kursor mendekati batas layar saat drag elemen
      autoPanStateRef.current = {
        active: true,
        clientX: e.clientX,
        clientY: e.clientY,
        elementId: selectedElementId,
      };
      return;
    } else if (isDrawing) {
      autoPanStateRef.current = {
        active: true,
        clientX: e.clientX,
        clientY: e.clientY,
        elementId: null,
      };
    } else if (autoPanStateRef.current.active) {
      autoPanStateRef.current.active = false;
    }

    if (activeTool === 'select') {
      return;
    }

    if (activeTool === 'laser' && onBroadcastPointer) {
      onBroadcastPointer(pt.x, pt.y, true);
    }

    if (!isDrawing || isReadOnly) return;

    if (activeTool === 'pen' || activeTool === 'highlighter' || activeTool === 'fading_pen') {
      setCurrentPoints((prev) => {
        const next = [...prev, [pt.x, pt.y] as [number, number]];
        const now = Date.now();
        // Siarkan goresan langsung (streaming) setiap ~25ms saat kursor digerakkan
        if (
          onBroadcastLiveStroke &&
          currentStrokeIdRef.current &&
          now - lastBroadcastTimeRef.current >= 25
        ) {
          lastBroadcastTimeRef.current = now;
          onBroadcastLiveStroke({
            strokeId: currentStrokeIdRef.current,
            points: next,
            color: activeTool === 'fading_pen' ? color || '#ef4444' : color,
            strokeWidth: activeTool === 'fading_pen' ? Math.max(3.5, strokeWidth) : strokeWidth,
            opacity: activeTool === 'highlighter' ? 0.35 : 1,
            tool: activeTool,
          });
        }
        return next;
      });
    } else if (activeTool === 'eraser') {
      const mode = eraserSettings?.mode || 'brush';
      if (mode === 'lasso') {
        setLassoPoints((prev) => [...prev, [pt.x, pt.y] as [number, number]]);
      } else if (mode === 'brush') {
        const shape = eraserSettings?.shape || 'circle';
        const size = eraserSettings?.size || 30;
        for (const el of doc.elements) {
          if (el.isLocked) continue; // Elemen terkunci tidak dapat dihapus
          if (isElementHitByEraser(pt, el, shape, size)) {
            if (el.type === 'stroke' && el.points && el.points.length > 0) {
              const subStrokes = carveStrokeWithEraser(el.points, pt, shape, size, el.strokeWidth);
              if (onCarveStroke) {
                onCarveStroke(el.id, subStrokes);
              } else if (subStrokes.length === 0) {
                onDeleteElement(el.id);
              }
            } else {
              onDeleteElement(el.id);
            }
          }
        }
      } else if (mode === 'object') {
        for (const el of doc.elements) {
          if (isPointNearElement(pt.x, pt.y, el, 16)) {
            onDeleteElement(el.id);
            break;
          }
        }
      }
    }
  };

  const handleMouseUp = (e?: React.PointerEvent<HTMLCanvasElement> | React.MouseEvent<HTMLCanvasElement>) => {
    if (e && 'pointerId' in e) {
      try {
        if ((e.target as HTMLElement).hasPointerCapture?.(e.pointerId)) {
          (e.target as HTMLElement).releasePointerCapture(e.pointerId);
        }
      } catch {}
    }
    setIsDraggingElement(false);
    elementDragStartRef.current = null;
    setDragStart(null);
    commitCurrentDrawing();
  };

  // Support Paste Gambar dari Clipboard (Ctrl+V)
  // Helper impor gambar dari file (Drag & Drop, Clipboard Paste, atau Tombol Toolbar)
  const handleImportImageFile = useCallback(
    (file: File, atX?: number, atY?: number) => {
      let targetX = atX;
      let targetY = atY;

      if (targetX === undefined || targetY === undefined) {
        if (doc.layoutMode === 'infinite') {
          targetX = Math.round((-panX + 250) / Math.max(0.2, zoom));
          targetY = Math.round((-panY + 200) / Math.max(0.2, zoom));
        } else {
          const formatConfig = PAGE_FORMATS[doc.pageFormat] || PAGE_FORMATS.a4_portrait;
          const pageIdx = currentPageIndex || 0;
          const pageTop = pageIdx * formatConfig.height;
          targetX = Math.round((formatConfig.width - 360) / 2);
          targetY = Math.round(pageTop + 200);
        }
      }

      const elementId = `img-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
      const reader = new FileReader();

      reader.onload = async (event) => {
        const base64Url = event.target?.result as string;
        if (!base64Url) return;

        const newEl: WhiteboardElement = {
          id: elementId,
          type: 'image',
          pageIndex: currentPageIndex,
          x: targetX!,
          y: targetY!,
          width: 360,
          height: 260,
          color: 'transparent',
          strokeWidth: 0,
          opacity: 1,
          isLocked: false,
          zIndex: (doc.elements.length || 0) + 1,
          imageUrl: base64Url,
        };

        onAddElement(newEl);
        setSelectedElementId(elementId);

        // Unggah otomatis di latar belakang ke Cloudflare R2
        try {
          const uploadRes = await storageService.uploadFile(file, {
            category: 'questions',
            filename: file.name,
          });
          if (uploadRes && uploadRes.success && uploadRes.url) {
            if (onModifyElement) {
              onModifyElement({
                ...newEl,
                imageUrl: uploadRes.url,
              });
            }
          }
        } catch (err) {
          console.warn('[Whiteboard] Unggah gambar ke R2 gagal, menggunakan pratinjau lokal:', err);
        }
      };

      reader.readAsDataURL(file);
    },
    [doc.layoutMode, doc.pageFormat, doc.elements.length, currentPageIndex, panX, panY, zoom, onAddElement, onModifyElement]
  );

  // Manipulasi Objek (Resize, Duplikat, Kunci, Z-Index)
  const handleResizeElement = useCallback(
    (id: string, newWidth: number, newHeight: number, newX?: number, newY?: number) => {
      const el = doc.elements.find((e) => e.id === id);
      if (!el || el.isLocked) return;
      const updated: WhiteboardElement = {
        ...el,
        width: newWidth,
        height: newHeight,
        x: newX !== undefined ? newX : el.x,
        y: newY !== undefined ? newY : el.y,
      };
      if (onModifyElement) {
        onModifyElement(updated);
      }
    },
    [doc.elements, onModifyElement]
  );

  const handleDuplicate = useCallback(
    (id: string) => {
      const el = doc.elements.find((e) => e.id === id);
      if (!el) return;
      const duplicated: WhiteboardElement = {
        ...el,
        id: `${el.type}-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        x: el.x + 30,
        y: el.y + 30,
        zIndex: (el.zIndex || 1) + 1,
      };
      onAddElement(duplicated);
      setSelectedElementId(duplicated.id);
    },
    [doc.elements, onAddElement]
  );

  const handleToggleLock = useCallback(
    (id: string) => {
      const el = doc.elements.find((e) => e.id === id);
      if (!el || !onModifyElement) return;
      onModifyElement({
        ...el,
        isLocked: !el.isLocked,
      });
    },
    [doc.elements, onModifyElement]
  );

  const handleBringForward = useCallback(
    (id: string) => {
      const el = doc.elements.find((e) => e.id === id);
      if (!el || !onModifyElement) return;
      const maxZ = Math.max(0, ...doc.elements.map((e) => e.zIndex || 0));
      onModifyElement({
        ...el,
        zIndex: maxZ + 1,
      });
    },
    [doc.elements, onModifyElement]
  );

  const handleSendBackward = useCallback(
    (id: string) => {
      const el = doc.elements.find((e) => e.id === id);
      if (!el || !onModifyElement) return;
      const minZ = Math.min(0, ...doc.elements.map((e) => e.zIndex || 0));
      onModifyElement({
        ...el,
        zIndex: Math.max(0, minZ - 1),
      });
    },
    [doc.elements, onModifyElement]
  );

  const handleToggleQuestionCollapse = useCallback(
    (id: string) => {
      const el = doc.elements.find((e) => e.id === id);
      if (!el || el.type !== 'question_card' || !onModifyElement) return;
      const payload = { ...el.payload, isCollapsed: !el.payload?.isCollapsed };
      onModifyElement({ ...el, payload });
    },
    [doc.elements, onModifyElement]
  );

  const handleToggleQuestionRubric = useCallback(
    (id: string) => {
      const el = doc.elements.find((e) => e.id === id);
      if (!el || el.type !== 'question_card' || !onModifyElement) return;
      const payload = { ...el.payload, showRubric: !el.payload?.showRubric };
      onModifyElement({ ...el, payload });
    },
    [doc.elements, onModifyElement]
  );

  const startDragElement = useCallback(
    (id: string, initialClientX: number, initialClientY: number) => {
      const el = doc.elements.find((e) => e.id === id);
      if (!el || el.isLocked) return;

      setSelectedElementId(id);
      let lastClientX = initialClientX;
      let lastClientY = initialClientY;

      const onMove = (e: PointerEvent) => {
        const effectiveZoom = Math.max(0.1, zoom);
        const dx = Math.round((e.clientX - lastClientX) / effectiveZoom);
        const dy = Math.round((e.clientY - lastClientY) / effectiveZoom);
        if (dx !== 0 || dy !== 0) {
          lastClientX = e.clientX;
          lastClientY = e.clientY;
          if (onUpdateElement) {
            onUpdateElement(id, dx, dy);
          }
        }

        // Aktifkan Edge Auto-Pan saat kartu atau gambar digeser mendekati batas layar
        if (doc.layoutMode === 'infinite') {
          autoPanStateRef.current = {
            active: true,
            clientX: e.clientX,
            clientY: e.clientY,
            elementId: id,
          };
        }
      };

      const onUp = () => {
        autoPanStateRef.current.active = false;
        window.removeEventListener('pointermove', onMove);
        window.removeEventListener('pointerup', onUp);
      };

      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp);
    },
    [doc.elements, doc.layoutMode, zoom, onUpdateElement]
  );

  // Paste Gambar dari Clipboard (Ctrl+V)
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;

      for (let i = 0; i < items.length; i++) {
        if (items[i].type.startsWith('image/')) {
          const file = items[i].getAsFile();
          if (file) {
            handleImportImageFile(file);
          }
        }
      }
    };

    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, [handleImportImageFile]);

  return (
    <div
      ref={containerRef}
      onScroll={handleContainerScroll}
      onContextMenu={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      onDragOver={(e) => {
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.dropEffect = 'copy';
      }}
      onDrop={(e) => {
        e.preventDefault();
        e.stopPropagation();
        const files = Array.from(e.dataTransfer.files).filter((f) => f.type.startsWith('image/'));
        if (files.length === 0) return;
        const pt = getCoordinates(e);
        files.forEach((file, idx) => {
          handleImportImageFile(file, pt.x + idx * 30, pt.y + idx * 30);
        });
      }}
      className={`relative w-full h-full select-none overflow-auto flex flex-col items-center ${
        doc.layoutMode === 'paginated'
          ? 'bg-slate-200/80 p-6 sm:p-10'
          : doc.backgroundType === 'chalkboard'
          ? 'bg-slate-900 overflow-hidden'
          : 'bg-white overflow-hidden'
      }`}
    >
      <div
        style={{
          transform: doc.layoutMode === 'paginated' && zoom !== 1 ? `scale(${zoom})` : undefined,
          transformOrigin: 'top center',
          transition: 'transform 0.1s ease-out',
        }}
        className="relative flex flex-col items-center shrink-0"
      >
        <canvas
          ref={canvasRef}
          width={canvasDimensions.width}
          height={canvasDimensions.height}
          onPointerDown={handleMouseDown}
          onPointerMove={handleMouseMove}
          onPointerUp={handleMouseUp}
          onPointerCancel={handleMouseUp}
          onPointerLeave={() => setCurrentPos(null)}
          style={{
            touchAction: 'none',
            cursor: isPanning
              ? CAT_PAW_CLOSED_CURSOR
              : isSpacePressed
              ? CAT_PAW_OPEN_CURSOR
              : activeTool === 'select'
              ? isDraggingElement
                ? CAT_PAW_CLOSED_CURSOR
                : CAT_PAW_OPEN_CURSOR
              : undefined,
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className={`${
            activeTool === 'eraser'
              ? 'cursor-crosshair'
              : activeTool === 'select' || isPanning
              ? ''
              : 'cursor-crosshair'
          }`}
        />

        {/* DOM Overlay Layer: Question Cards & Transformer Controls */}
        <div
          className="absolute inset-0 pointer-events-none overflow-visible"
          style={
            doc.layoutMode === 'infinite'
              ? {
                  transform: `translate(${panX}px, ${panY}px) scale(${zoom})`,
                  transformOrigin: '0 0',
                }
              : undefined
          }
        >
          {/* Question Cards (Opsi 1: Interactive STEM Vector Card dengan KaTeX tajam) */}
          {doc.elements
            .filter((el) => el.type === 'question_card')
            .map((el) => (
              <div key={el.id} className="pointer-events-auto">
                <QuestionCardOverlay
                  element={el}
                  isSelected={selectedElementId === el.id}
                  isReadOnly={isReadOnly}
                  onSelect={() => setSelectedElementId(el.id)}
                  onDelete={() => onDeleteElement(el.id)}
                  onToggleCollapse={() => handleToggleQuestionCollapse(el.id)}
                  onToggleRubric={() => handleToggleQuestionRubric(el.id)}
                  onStartDrag={(e) => startDragElement(el.id, e.clientX, e.clientY)}
                  onHeightChange={handleCardHeightChange}
                />
              </div>
            ))}

          {/* Object Transformer Handles & Floating Action Bar for Selected Element */}
          {selectedElementId && !isDrawing && (
            (() => {
              const selectedEl = doc.elements.find((e) => e.id === selectedElementId);
              if (!selectedEl) return null;
              return (
                <ObjectTransformerOverlay
                  element={selectedEl}
                  measuredHeight={cardHeights[selectedEl.id]}
                  onResize={handleResizeElement}
                  onDuplicate={handleDuplicate}
                  onToggleLock={handleToggleLock}
                  onBringForward={handleBringForward}
                  onSendBackward={handleSendBackward}
                  onDelete={onDeleteElement}
                  scale={zoom}
                />
              );
            })()
          )}
        </div>

        {/* Tombol Aksi Tambah Halaman di Bawah Lembar Terakhir */}
        {doc.layoutMode === 'paginated' && (
          <div className="w-full flex flex-col items-center py-8 gap-2">
            <button
              onClick={onAutoAppendPage}
              className="px-6 py-3 bg-white hover:bg-blue-50 text-blue-600 hover:text-blue-700 border-2 border-blue-200 hover:border-blue-400 font-bold text-xs rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              title="Tambah lembar halaman A4 baru di bawah"
            >
              <Plus size={16} className="text-blue-600" />
              <span>Tambah Halaman Baru (Halaman {doc.pages.length + 1})</span>
            </button>
            <span className="text-[11px] text-slate-500 font-semibold tracking-wide">
              Lembar baru akan ditambahkan langsung di bawah halaman {doc.pages.length}
            </span>
          </div>
        )}
      </div>

      {/* Modal Input Teks */}
      <WhiteboardTextModal
        isOpen={isTextModalOpen}
        onClose={() => setIsTextModalOpen(false)}
        initialColor={color}
        onSubmit={(text, fontSize, textColor) => {
          const tempCanvas = document.createElement('canvas');
          const tempCtx = tempCanvas.getContext('2d');
          let textWidth = 100;
          if (tempCtx) {
            tempCtx.font = `${fontSize}px sans-serif`;
            const lines = text.split('\n');
            textWidth = Math.max(...lines.map((l) => Math.ceil(tempCtx.measureText(l).width)));
          }

          onAddElement({
            id: `text-${Date.now()}`,
            type: 'text',
            x: textModalPos.x,
            y: textModalPos.y,
            width: Math.max(60, textWidth + 16),
            height: Math.ceil(fontSize * (text.split('\n').length * 1.35 + 0.2)),
            color: textColor,
            strokeWidth: 1,
            opacity: 1,
            isLocked: false,
            zIndex: 1,
            text,
            fontSize,
          });
        }}
      />
    </div>
  );
};
