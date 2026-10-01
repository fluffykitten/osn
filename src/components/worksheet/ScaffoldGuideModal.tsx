import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  X,
  Move,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  FileText,
  Calculator,
  Lightbulb,
  Microscope,
  FlaskConical,
  Atom,
  Layers,
  Info,
} from 'lucide-react';
import type { Question } from '../../types/database';
import { getQuestionScaffold, getScaffoldDomainInfo } from '../../services/scaffoldService';
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

  // Handle Pointer Dragging (Touch, Stylus, and Mouse)
  const handlePointerDown = (e: React.PointerEvent) => {
    if (isMobile || (e.target as HTMLElement).closest('button, a')) return;
    if (modalRef.current) {
      const rect = modalRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setIsDragging(true);
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || isMobile) return;
    const modalWidth = modalRef.current?.offsetWidth || size.width;
    const modalHeight = modalRef.current?.offsetHeight || size.height;
    const maxX = Math.max(0, window.innerWidth - modalWidth - 10);
    const maxY = Math.max(0, window.innerHeight - modalHeight - 10);

    const newX = Math.min(Math.max(10, e.clientX - dragOffset.x), maxX);
    const newY = Math.min(Math.max(10, e.clientY - dragOffset.y), maxY);
    setPosition({ x: newX, y: newY });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  if (!isOpen) return null;

  const scaffoldText = getQuestionScaffold(question);
  const domainInfo = getScaffoldDomainInfo(question);

  const handleCopy = () => {
    navigator.clipboard.writeText(scaffoldText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const renderDomainIcon = (iconName: string) => {
    switch (iconName) {
      case 'calculator':
        return <Calculator className="w-3.5 h-3.5" />;
      case 'lightbulb':
        return <Lightbulb className="w-3.5 h-3.5" />;
      case 'microscope':
        return <Microscope className="w-3.5 h-3.5" />;
      case 'flask':
        return <FlaskConical className="w-3.5 h-3.5" />;
      case 'atom':
        return <Atom className="w-3.5 h-3.5" />;
      default:
        return <Layers className="w-3.5 h-3.5" />;
    }
  };

  const getBadgeStyle = (category: string) => {
    switch (category) {
      case 'qualitative':
        return 'bg-amber-50 text-amber-900 border-amber-300';
      case 'specialized':
        return 'bg-emerald-50 text-emerald-900 border-emerald-300';
      default:
        return 'bg-sky-50 text-sky-900 border-sky-300';
    }
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
      className={`fixed z-40 bg-white rounded-2xl border-2 border-[#B0C4DE] shadow-2xl flex flex-col transition-shadow ${
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
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className={`bg-gradient-to-r from-[#2D3748] via-[#3A4A5B] to-[#4A5867] text-[#FFFFF0] px-4 py-2.5 rounded-t-xl flex items-center justify-between select-none shadow-sm touch-none ${
          isMobile ? '' : 'cursor-grab active:cursor-grabbing'
        }`}
      >
        <div className="flex items-center gap-2">
          <Move className="w-3.5 h-3.5 text-[#B0C4DE]" />
          <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm">
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
            <span>Kerangka Langkah Pengerjaan</span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-white/10 rounded-lg text-white/80 hover:text-white transition-colors"
            title={isMinimized ? 'Perbesar Panduan' : 'Kecilkan Panduan'}
          >
            {isMinimized ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="p-1 hover:bg-red-500/80 rounded-lg text-white/80 hover:text-white transition-colors"
            title="Tutup Panduan"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Minimized Pill Preview */}
      {isMinimized ? (
        <div className="p-3 bg-[#F0F8FF] text-xs text-[#2D3748] flex items-center justify-between">
          <div className="flex items-center gap-1.5 truncate mr-2">
            <span
              className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold border ${getBadgeStyle(
                domainInfo.category
              )}`}
            >
              {renderDomainIcon(domainInfo.iconName)}
              <span>{domainInfo.label}</span>
            </span>
            <span className="font-semibold truncate">Soal: {question.title}</span>
          </div>
          <button
            type="button"
            onClick={() => setIsMinimized(false)}
            className="px-2 py-0.5 bg-[#708090] text-[#FFFFF0] rounded text-[11px] font-bold shrink-0"
          >
            Buka
          </button>
        </div>
      ) : (
        <>
          {/* Domain Category Badge & Description Bar */}
          <div className="px-4 py-2 bg-gradient-to-r from-slate-50 to-[#F0F8FF] border-b border-[#B0C4DE] flex items-center justify-between gap-2 flex-wrap text-xs">
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md font-semibold text-[11px] border shadow-2xs ${getBadgeStyle(
                  domainInfo.category
                )}`}
              >
                {renderDomainIcon(domainInfo.iconName)}
                <span>{domainInfo.label}</span>
              </span>
              {domainInfo.isCustomTemplate && (
                <span className="px-1.5 py-0.5 rounded text-[10px] bg-purple-100 text-purple-800 font-bold border border-purple-200">
                  Terkalibrasi Soal
                </span>
              )}
            </div>
            <span className="text-slate-500 text-[11px] italic hidden sm:inline">
              {domainInfo.description}
            </span>
          </div>

          {/* Helpful Companion Banner */}
          <div className="px-4 py-1.5 bg-[#F0F8FF]/70 border-b border-[#B0C4DE]/60 text-[11px] text-[#2D3748] flex items-center justify-between">
            <span className="leading-snug">
              💡 <strong>Panduan Interaktif:</strong> Anda dapat menyisipkan atau melihat panduan ini sembari menulis lembar kerja.
            </span>
          </div>

          {/* Multi-part Subquestions Context Tip if available */}
          {question.sub_questions && question.sub_questions.length > 0 && (
            <div className="mx-4 mt-3 p-2.5 bg-blue-50/90 border border-blue-200 rounded-xl text-[11px] text-blue-900 flex items-start gap-2 shadow-2xs">
              <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">
                  Soal Multi-Bagian ({question.sub_questions.length} Sub-Soal):
                </span>
                <p className="text-blue-700 mt-0.5 leading-snug">
                  Gunakan kerangka 4 langkah ini secara terpadu untuk alur pengerjaan utama, atau terapkan prinsip 4 langkah ini pada tiap butir sub-soal ({question.sub_questions.map((sq) => sq.label).join(', ')}).
                </p>
              </div>
            </div>
          )}

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
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#F0F8FF] hover:bg-[#E6F0FA] text-[#2D3748] border border-[#B0C4DE] font-semibold rounded-lg shadow-2xs transition-all active:scale-95"
                  title="Sisipkan struktur kerangka ini ke kursor teks pengerjaan"
                >
                  <FileText className="w-3.5 h-3.5 text-[#708090]" />
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
            className="hidden sm:flex absolute bottom-1 right-1 w-5 h-5 cursor-se-resize items-center justify-center text-slate-400 hover:text-[#708090] active:text-[#2D3748] transition-colors select-none z-20 touch-none"
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
