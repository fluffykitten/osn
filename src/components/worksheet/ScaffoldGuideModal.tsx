import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Move, Copy, Check, ChevronDown, ChevronUp, FileText } from 'lucide-react';
import type { Question } from '../../types/database';
import { getQuestionScaffold } from '../../services/scaffoldService';
import { KaTeXRenderer } from '../common/KaTeXRenderer';

interface ScaffoldGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  question: Question;
  onInsertToWorksheet?: (template: string) => void;
}

export const ScaffoldGuideModal: React.FC<ScaffoldGuideModalProps> = ({
  isOpen,
  onClose,
  question,
  onInsertToWorksheet,
}) => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 40, y: 100 });
  const [size, setSize] = useState<{ width: number; height: number }>({ width: 480, height: 520 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isResizing, setIsResizing] = useState(false);
  const resizeStartRef = useRef<{ startX: number; startY: number; startW: number; startH: number } | null>(null);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 640 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initialize position on open (place nicely on the right side of desktop screen)
  useEffect(() => {
    if (isOpen) {
      const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1024;
      const defaultWidth = Math.min(size.width, screenWidth - 40);
      const x = Math.max(20, screenWidth - defaultWidth - 30);
      const y = 90;
      setPosition({ x, y });
      setIsMinimized(false);
    }
  }, [isOpen]);

  // Handle Resize Pointer Events
  const handleResizePointerDown = (e: React.PointerEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsResizing(true);
    resizeStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      startW: size.width,
      startH: size.height,
    };
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const handleResizePointerMove = (e: React.PointerEvent) => {
    if (!isResizing || !resizeStartRef.current) return;
    const deltaX = e.clientX - resizeStartRef.current.startX;
    const deltaY = e.clientY - resizeStartRef.current.startY;
    const minW = 320;
    const maxW = Math.min(850, window.innerWidth - 20);
    const minH = 260;
    const maxH = Math.min(850, window.innerHeight - 30);

    const newW = Math.min(Math.max(minW, resizeStartRef.current.startW + deltaX), maxW);
    const newH = Math.min(Math.max(minH, resizeStartRef.current.startH + deltaY), maxH);
    setSize({ width: newW, height: newH });
  };

  const handleResizePointerUp = (e: React.PointerEvent) => {
    setIsResizing(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  // Handle Dragging
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const modalWidth = modalRef.current?.offsetWidth || size.width;
      const modalHeight = modalRef.current?.offsetHeight || size.height;
      const maxX = Math.max(0, window.innerWidth - modalWidth - 10);
      const maxY = Math.max(0, window.innerHeight - modalHeight - 10);

      const newX = Math.min(Math.max(10, e.clientX - dragOffset.x), maxX);
      const newY = Math.min(Math.max(10, e.clientY - dragOffset.y), maxY);
      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset, size]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (modalRef.current) {
      const rect = modalRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setIsDragging(true);
    }
  };

  if (!isOpen) return null;

  const scaffoldText = getQuestionScaffold(question);

  const handleCopy = () => {
    navigator.clipboard.writeText(scaffoldText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div
      ref={modalRef}
      style={
        isMobile
          ? {
              ...(isMinimized ? {} : { maxHeight: '82vh' }),
            }
          : {
              left: `${position.x}px`,
              top: `${position.y}px`,
              ...(isMinimized ? {} : { width: `${size.width}px`, height: `${size.height}px` }),
            }
      }
      className={`fixed z-40 bg-white rounded-2xl border-2 border-sky-300 shadow-2xl flex flex-col transition-shadow ${
        isMobile
          ? isMinimized
            ? 'left-3 right-3 bottom-3 w-auto'
            : 'left-3 right-3 bottom-3 w-auto max-h-[85vh]'
          : isMinimized
          ? 'w-72 sm:w-80 shadow-lg'
          : 'max-w-[95vw] max-h-[90vh]'
      }`}
    >
      {/* Draggable Header */}
      <div
        onMouseDown={handleMouseDown}
        className="bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 text-white px-4 py-2.5 rounded-t-xl cursor-move flex items-center justify-between select-none shadow-sm"
      >
        <div className="flex items-center gap-2">
          <Move className="w-3.5 h-3.5 text-sky-200" />
          <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm">
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
            <span>Kerangka Langkah Pengerjaan</span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-sky-500/50 rounded-lg text-sky-100 hover:text-white transition-colors"
            title={isMinimized ? 'Perbesar Panduan' : 'Kecilkan Panduan'}
          >
            {isMinimized ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="p-1 hover:bg-red-500/80 rounded-lg text-sky-100 hover:text-white transition-colors"
            title="Tutup Panduan"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Minimized Pill Preview */}
      {isMinimized ? (
        <div className="p-3 bg-sky-50 text-xs text-sky-900 flex items-center justify-between">
          <span className="font-semibold truncate">Soal: {question.title}</span>
          <button
            type="button"
            onClick={() => setIsMinimized(false)}
            className="px-2 py-0.5 bg-sky-600 text-white rounded text-[11px] font-bold"
          >
            Buka
          </button>
        </div>
      ) : (
        <>
          {/* Helpful Companion Banner */}
          <div className="px-4 py-2 bg-sky-50/80 border-b border-sky-100 text-[11px] text-sky-800 flex items-center justify-between">
            <span className="leading-snug">
              💡 <strong>Panduan Tetap Terbuka:</strong> Anda dapat menulis jawaban manual di lembar kerja sambil melihat panduan ini.
            </span>
          </div>

          {/* Scaffold Content Area with KaTeX rendering */}
          <div className="p-4 overflow-y-auto space-y-3 flex-1 text-xs sm:text-sm text-slate-800 leading-relaxed bg-white">
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 font-sans">
              <KaTeXRenderer content={scaffoldText} />
            </div>
          </div>

          {/* Footer Actions */}
          <div className="px-4 py-3 bg-slate-50 border-t border-slate-200 rounded-b-xl flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-semibold rounded-lg shadow-2xs transition-all active:scale-95"
                title="Salin kerangka langkah ke clipboard"
              >
                {isCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>Salin Kerangka</span>
                  </>
                )}
              </button>

              {onInsertToWorksheet && (
                <button
                  type="button"
                  onClick={() => onInsertToWorksheet(scaffoldText)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 font-semibold rounded-lg shadow-2xs transition-all active:scale-95"
                  title="Sisipkan struktur kerangka ini ke kursor teks pengerjaan"
                >
                  <FileText className="w-3.5 h-3.5 text-sky-600" />
                  <span>Sisipkan ke Lembar</span>
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold rounded-lg transition-colors"
            >
              Tutup
            </button>
          </div>

          {/* Bottom-Right Resize Grip Handle (Hanya di layar desktop/tablet) */}
          <div
            onPointerDown={handleResizePointerDown}
            onPointerMove={handleResizePointerMove}
            onPointerUp={handleResizePointerUp}
            className="hidden sm:flex absolute bottom-1 right-1 w-5 h-5 cursor-se-resize items-center justify-center text-slate-400 hover:text-sky-600 active:text-sky-700 transition-colors select-none z-20 touch-none"
            title="Tarik untuk mengubah ukuran (Resize)"
          >
            <svg viewBox="0 0 6 6" className="w-2.5 h-2.5 fill-current">
              <circle cx="5" cy="5" r="0.75" />
              <circle cx="5" cy="3" r="0.75" />
              <circle cx="3" cy="5" r="0.75" />
              <circle cx="5" cy="1" r="0.75" />
              <circle cx="3" cy="3" r="0.75" />
              <circle cx="1" cy="5" r="0.75" />
            </svg>
          </div>
        </>
      )}
    </div>
  );
};
