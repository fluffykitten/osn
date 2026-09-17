import React, { useRef, useState, useEffect, useCallback } from 'react';
import type { CanvasScale } from './ScalePresetToggle';
import type { LiveHighlightItem, HighlightRect } from '../../types/database';
import { HighlightOverlay } from './HighlightOverlay';

export interface ScaledCanvasMouseMoveEvent {
  container: HTMLDivElement;
  clientX: number;
  clientY: number;
  logicalX: number;
  logicalY: number;
  pctX: number;
  pctY: number;
}

interface ScaledDocumentCanvasProps {
  baseWidth?: number; // Default 540px
  scale: CanvasScale;
  highlights?: LiveHighlightItem[];
  onRemoveHighlight?: (id: string) => void;
  onHighlightCreated?: (highlight: {
    selected_text: string;
    rects: HighlightRect[];
  }) => void;
  isInteractive?: boolean;
  activeLaser?: {
    x_percent: number;
    y_percent: number;
    logical_x?: number;
    logical_y?: number;
    label?: string;
  } | null;
  onMouseMove?: (event: ScaledCanvasMouseMoveEvent) => void;
  onMouseLeave?: () => void;
  className?: string;
  children: React.ReactNode;
}

export const ScaledDocumentCanvas: React.FC<ScaledDocumentCanvasProps> = ({
  baseWidth = 540,
  scale = 1.0,
  highlights = [],
  onRemoveHighlight,
  onHighlightCreated,
  isInteractive = false,
  activeLaser = null,
  onMouseMove,
  onMouseLeave,
  className = '',
  children,
}) => {
  const innerRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  // ResizeObserver untuk memastikan tinggi dokumen selalu terukur akurat secara alami
  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    const measure = () => {
      if (innerRef.current) {
        const h = innerRef.current.scrollHeight || innerRef.current.offsetHeight;
        if (h > 0) setContentHeight(h);
      }
    };

    measure();

    const observer = new ResizeObserver(() => {
      measure();
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [children, scale]);

  // Handle pergerakan mouse laser dengan normalisasi skala
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isInteractive || !innerRef.current) return;

      const innerRect = innerRef.current.getBoundingClientRect();
      const currentScale = scale || 1.0;
      const logicalX = Math.max(0, (e.clientX - innerRect.left) / currentScale);
      const logicalY = Math.max(0, (e.clientY - innerRect.top) / currentScale);

      const pctX = Math.max(0, Math.min(100, ((e.clientX - innerRect.left) / innerRect.width) * 100));
      const pctY = Math.max(0, Math.min(100, ((e.clientY - innerRect.top) / innerRect.height) * 100));

      onMouseMove?.({
        container: innerRef.current,
        clientX: e.clientX,
        clientY: e.clientY,
        logicalX: Number(logicalX.toFixed(1)),
        logicalY: Number(logicalY.toFixed(1)),
        pctX: Number(pctX.toFixed(1)),
        pctY: Number(pctY.toFixed(1)),
      });
    },
    [isInteractive, scale, onMouseMove]
  );

  // Handle Drag-to-Highlight Teks saat mouseup
  const handleMouseUp = useCallback(() => {
    if (!isInteractive || !onHighlightCreated || !innerRef.current) return;

    const selection = window.getSelection();
    if (!selection || selection.isCollapsed || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const selectedText = selection.toString().trim();

    // Pastikan seleksi teks berada di dalam kanvas ini
    if (!innerRef.current.contains(range.commonAncestorContainer) && range.commonAncestorContainer !== innerRef.current) {
      return;
    }

    if (selectedText.length === 0) return;

    const clientRects = Array.from(range.getClientRects());
    if (clientRects.length === 0) return;

    const innerRect = innerRef.current.getBoundingClientRect();

    // Konversi setiap client rect ke persentase kanvas standar
    const rects: HighlightRect[] = clientRects
      .filter((cr) => cr.width > 2 && cr.height > 2)
      .map((cr) => ({
        left_pct: Number(Math.max(0, Math.min(100, ((cr.left - innerRect.left) / innerRect.width) * 100)).toFixed(2)),
        top_pct: Number(Math.max(0, Math.min(100, ((cr.top - innerRect.top) / innerRect.height) * 100)).toFixed(2)),
        width_pct: Number(Math.max(0.2, Math.min(100, (cr.width / innerRect.width) * 100)).toFixed(2)),
        height_pct: Number(Math.max(0.2, Math.min(100, (cr.height / innerRect.height) * 100)).toFixed(2)),
      }));

    if (rects.length > 0) {
      onHighlightCreated({
        selected_text: selectedText,
        rects,
      });

      // Bersihkan seleksi biru native browser agar digantikan oleh highlight overlay
      try {
        selection.removeAllRanges();
      } catch (err) {
        // Fallback
      }
    }
  }, [isInteractive, onHighlightCreated]);

  const isScaled = scale !== 1.0;
  const scaledWidth = Math.round(baseWidth * scale);
  const scaledHeight = contentHeight > 0 ? Math.round(contentHeight * scale) : undefined;

  return (
    <div className={`w-full overflow-x-auto overflow-y-auto max-w-full ${className}`}>
      {/* Sizer Box */}
      <div
        style={{
          width: isScaled ? `${scaledWidth}px` : '100%',
          minHeight: isScaled && scaledHeight ? `${scaledHeight}px` : undefined,
          position: 'relative',
          margin: isScaled ? '0 auto' : undefined,
        }}
      >
        {/* Inner Canvas: Tetap dalam aliran dokumen normal (position: relative) agar tinggi tidak terpotong */}
        <div
          ref={innerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={onMouseLeave}
          onMouseUp={handleMouseUp}
          className={`relative transition-transform duration-100 ease-out select-text ${
            isInteractive ? 'cursor-crosshair' : ''
          }`}
          style={
            isScaled
              ? {
                  width: `${baseWidth}px`,
                  transform: `scale(${scale})`,
                  transformOrigin: 'top left',
                  position: 'relative',
                }
              : {
                  width: '100%',
                  position: 'relative',
                }
          }
        >
          {/* 1. Konten Dokumen (KaTeX, Soal, Rumus) - Mengalir bebas tanpa pemotongan */}
          <div className="relative z-10">{children}</div>

          {/* 2. Layer Overlay Stabilo Teks (Highlight) */}
          <HighlightOverlay
            highlights={highlights}
            onRemoveHighlight={onRemoveHighlight}
            readOnly={!isInteractive}
          />

          {/* 3. Layer Laser Pointer Beacon */}
          {activeLaser && (
            <div
              className="pointer-events-none absolute z-30 transition-all duration-75 ease-out"
              style={{
                left:
                  activeLaser.logical_x !== undefined && isScaled
                    ? `${activeLaser.logical_x}px`
                    : `${activeLaser.x_percent}%`,
                top:
                  activeLaser.logical_y !== undefined && isScaled
                    ? `${activeLaser.logical_y}px`
                    : `${activeLaser.y_percent}%`,
              }}
            >
              <div className="relative pointer-events-none select-none">
                {/* Titik Laser Merah Neon Berdenyut di tengah (0, 0) */}
                <div className="absolute -top-2 -left-2 w-4 h-4 flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-rose-600 shadow-[0_0_12px_#e11d48]"></span>
                </div>
                {/* Label Pill */}
                {activeLaser.label && (
                  <div className="absolute left-3 -top-3.5 px-2 py-0.5 rounded-full bg-rose-950/90 text-white text-[9px] font-bold font-mono whitespace-nowrap shadow-md border border-rose-500/40 select-none animate-pulse">
                    {activeLaser.label}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
