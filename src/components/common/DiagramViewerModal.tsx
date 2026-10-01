import React, { useState, useEffect } from 'react';
import {
  X,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Maximize2,
  Download,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react';

interface DiagramViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title?: string;
  caption?: string;
}

export const DiagramViewerModal: React.FC<DiagramViewerModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title = 'Diagram & Visualisasi Soal',
  caption,
}) => {
  const [scale, setScale] = useState<number>(1);
  const [rotation, setRotation] = useState<number>(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setScale(1);
      setRotation(0);
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen || !imageUrl) return null;

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.25, 3.5));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.25, 0.5));
  const handleReset = () => {
    setScale(1);
    setRotation(0);
  };
  const handleRotate = () => setRotation((prev) => (prev + 90) % 360);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(imageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top Control Bar */}
        <div className="px-3 sm:px-5 py-3 bg-slate-850 border-b border-slate-700/80 flex items-center justify-between text-white shrink-0 overflow-x-auto no-scrollbar scrollbar-none gap-2">
          <div className="min-w-0 pr-2 shrink">
            <h3 className="text-xs sm:text-base font-bold text-slate-100 truncate font-display">
              {title}
            </h3>
            {caption && (
              <p className="text-[10px] sm:text-xs text-slate-400 truncate mt-0.5">{caption}</p>
            )}
          </div>

          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
            {/* Zoom Controls */}
            <div className="flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700">
              <button
                type="button"
                onClick={handleZoomOut}
                className="p-1 sm:p-1.5 hover:bg-slate-700 rounded text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Perkecil (-)"
              >
                <ZoomOut className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
              <span className="text-[10px] sm:text-[11px] font-mono px-1.5 sm:px-2 text-slate-300 min-w-[36px] sm:min-w-[42px] text-center">
                {Math.round(scale * 100)}%
              </span>
              <button
                type="button"
                onClick={handleZoomIn}
                className="p-1 sm:p-1.5 hover:bg-slate-700 rounded text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Perbesar (+)"
              >
                <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>

            <button
              type="button"
              onClick={handleRotate}
              className="p-1.5 sm:p-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Putar 90°"
            >
              <RotateCw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="p-1.5 sm:p-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-slate-300 hover:text-white transition-colors cursor-pointer hidden sm:inline-flex"
              title="Reset Zoom & Rotasi"
            >
              <Maximize2 className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleCopy}
              className="p-1.5 sm:p-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-slate-300 hover:text-white transition-colors cursor-pointer hidden xs:inline-flex"
              title="Salin Tautan Diagram"
            >
              {copied ? <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            </button>

            <a
              href={imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-slate-300 hover:text-white transition-colors cursor-pointer hidden xs:inline-flex"
              title="Buka Ukuran Penuh di Tab Baru"
            >
              <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 sm:p-2 ml-1 text-slate-400 hover:text-white hover:bg-rose-600/80 rounded-lg transition-colors cursor-pointer"
              title="Tutup (Esc)"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Viewport Image Area */}
        <div className="flex-1 overflow-auto p-3 sm:p-8 flex items-center justify-center bg-slate-950/60 min-h-[280px] sm:min-h-[380px] touch-pan-x touch-pan-y">
          <div
            className="transition-transform duration-150 ease-out select-none flex items-center justify-center max-w-full"
            style={{
              transform: `scale(${scale}) rotate(${rotation}deg)`,
              transformOrigin: 'center center',
            }}
          >
            <img
              src={imageUrl}
              alt={title}
              className="max-w-full max-h-[65vh] sm:max-h-[70vh] w-auto h-auto min-w-[240px] sm:min-w-[320px] object-contain rounded-xl shadow-2xl border border-slate-700 bg-white"
            />
          </div>
        </div>

        {/* Footer info */}
        <div className="px-3 sm:px-5 py-2 sm:py-2.5 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400">
          <span className="font-mono truncate max-w-[200px] sm:max-w-md">
            {imageUrl.startsWith('http') ? 'Cloudflare R2: ' : 'Berkas: '}
            {imageUrl}
          </span>
          <span className="hidden sm:inline">Gunakan tombol perbesar atau putar untuk menganalisis detail struktur kimia</span>
        </div>
      </div>
    </div>
  );
};
