import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import {
  MousePointer,
  Pen,
  Highlighter,
  Eraser,
  Crosshair,
  Minus,
  ArrowRight,
  Square,
  Circle,
  Type,
  Ruler,
  Compass,
  Grid,
  Undo2,
  Redo2,
  ZoomIn,
  ZoomOut,
  Download,
  CloudUpload,
  FunctionSquare,
  Zap,
  FlaskConical,
  Dna,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  LassoSelect,
  Sparkles,
  GraduationCap,
  ImagePlus,
} from 'lucide-react';
import type { WhiteboardTool, WhiteboardBackground, EraserSettings, CanvasLayoutMode } from '../../types/whiteboard';
import { CatPawIcon } from './catPawCursor';

interface FloatingPopoverProps {
  anchorRect: DOMRect | null;
  onClose: () => void;
  children: React.ReactNode;
  offsetY?: number;
}

const FloatingPopover: React.FC<FloatingPopoverProps> = ({
  anchorRect,
  onClose,
  children,
  offsetY = 0,
}) => {
  if (!anchorRect) return null;

  // Posisikan popover tepat di sebelah kanan tombol tanpa terpotong batas bawah viewport
  const top = Math.max(16, Math.min(window.innerHeight - 340, anchorRect.top + offsetY));
  const left = anchorRect.right + 10;

  return createPortal(
    <>
      <div className="fixed inset-0 z-50 bg-transparent" onClick={onClose} />
      <div
        className="fixed z-50 animate-in fade-in zoom-in-95 text-slate-800"
        style={{ top, left }}
      >
        {children}
      </div>
    </>,
    document.body
  );
};

interface WhiteboardToolbarProps {
  activeTool: WhiteboardTool;
  onSelectTool: (tool: WhiteboardTool) => void;
  eraserSettings?: EraserSettings;
  onChangeEraserSettings?: (settings: EraserSettings) => void;
  color: string;
  onChangeColor: (color: string) => void;
  strokeWidth: number;
  onChangeStrokeWidth: (width: number) => void;
  background: WhiteboardBackground;
  onChangeBackground: (bg: WhiteboardBackground) => void;
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
  zoom: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onResetZoom: () => void;
  onOpenMath: () => void;
  onOpenPhysics: () => void;
  onOpenChem: () => void;
  onOpenBio: () => void;
  onToggleRuler: () => void;
  onToggleCompass: () => void;
  onToggleProtractor: () => void;
  onOpenExport: () => void;
  onSaveToR2: () => void;
  isSaving: boolean;
  layoutMode?: CanvasLayoutMode;
  onChangeLayoutMode?: (mode: CanvasLayoutMode) => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
  onOpenQuestionBank?: () => void;
  onAddImageFile?: (file: File) => void;
}

const PALETTE_COLORS = [
  '#0f172a', // Slate Dark
  '#2563eb', // Blue
  '#16a34a', // Green
  '#dc2626', // Red
  '#d97706', // Amber
  '#9333ea', // Purple
  '#ec4899', // Pink
  '#ffffff', // White (for chalkboard)
];

const STROKE_WIDTHS = [2, 4, 8, 14];

export const WhiteboardToolbar: React.FC<WhiteboardToolbarProps> = ({
  activeTool,
  onSelectTool,
  eraserSettings = { mode: 'brush', shape: 'circle', size: 30 },
  onChangeEraserSettings,
  color,
  onChangeColor,
  strokeWidth,
  onChangeStrokeWidth,
  background,
  onChangeBackground,
  canUndo,
  canRedo,
  onUndo,
  onRedo,
  zoom,
  onZoomIn,
  onZoomOut,
  onResetZoom,
  onOpenMath,
  onOpenPhysics,
  onOpenChem,
  onOpenBio,
  onToggleRuler,
  onToggleCompass,
  onOpenExport,
  onSaveToR2,
  isSaving,
  layoutMode = 'infinite',
  onChangeLayoutMode,
  isCollapsed = false,
  onToggleCollapse,
  onOpenQuestionBank,
  onAddImageFile,
}) => {
  const imageInputRef = React.useRef<HTMLInputElement>(null);
  const [penAnchor, setPenAnchor] = useState<DOMRect | null>(null);
  const [eraserAnchor, setEraserAnchor] = useState<DOMRect | null>(null);
  const [colorAnchor, setColorAnchor] = useState<DOMRect | null>(null);
  const [bgAnchor, setBgAnchor] = useState<DOMRect | null>(null);

  return (
    <>
      {/* Tombol Tab Mengapung saat Toolbar Disembunyikan */}
      {isCollapsed && (
        <button
          onClick={onToggleCollapse}
          className="fixed left-3.5 top-20 z-40 px-3 py-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200 text-blue-600 hover:bg-blue-50 transition cursor-pointer flex items-center gap-1.5 font-bold text-xs animate-in fade-in"
          title="Tampilkan Toolbar Alat Samping"
        >
          <CatPawIcon size={16} />
          <span className="hidden sm:inline font-bold">Tools</span>
          <ChevronRight size={14} className="text-slate-400" />
        </button>
      )}

      <aside
        className={`fixed left-3.5 top-20 z-40 flex flex-col items-center gap-1.5 p-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200 text-slate-700 w-[88px] max-h-[calc(100vh-95px)] overflow-y-auto overflow-x-hidden select-none transition-transform duration-300 ${
          isCollapsed ? '-translate-x-[130%] pointer-events-none' : 'translate-x-0'
        }`}
      >
        {/* Tombol Collapse / Hide Toolbar */}
        <div className="w-full flex justify-between items-center px-1 pb-1 border-b border-slate-100">
          <span className="text-[10px] font-bold text-slate-400 font-mono">TOOLS</span>
          <button
            onClick={onToggleCollapse}
            className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition cursor-pointer"
            title="Sembunyikan Toolbar (Bisa dibuka kembali)"
          >
            <ChevronLeft size={13} />
          </button>
        </div>
      {/* Undo & Redo */}
      <div className="grid grid-cols-2 gap-1 w-full pb-1.5 border-b border-slate-200">
        <button
          onClick={onUndo}
          disabled={!canUndo}
          className="p-2 rounded-xl hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent flex items-center justify-center transition cursor-pointer"
          title="Undo (Ctrl+Z)"
        >
          <Undo2 size={15} />
        </button>
        <button
          onClick={onRedo}
          disabled={!canRedo}
          className="p-2 rounded-xl hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent flex items-center justify-center transition cursor-pointer"
          title="Redo (Ctrl+Y)"
        >
          <Redo2 size={15} />
        </button>
      </div>

      {/* Main Drawing Tools */}
      <div className="grid grid-cols-2 gap-1 w-full pb-1.5 border-b border-slate-200">
        <button
          onClick={() => onSelectTool('select')}
          className={`p-2 rounded-xl flex items-center justify-center transition cursor-pointer ${
            activeTool === 'select'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'hover:bg-slate-100 text-slate-700'
          }`}
          title="Pilih / Geser Objek (Cat Paw Pointer)"
        >
          <CatPawIcon size={16} />
        </button>

        <button
          onClick={() => onSelectTool('laser')}
          className={`p-2 rounded-xl flex items-center justify-center transition cursor-pointer ${
            activeTool === 'laser'
              ? 'bg-red-600 text-white shadow-sm'
              : 'hover:bg-slate-100 text-slate-700'
          }`}
          title="Pointer Laser Realtime"
        >
          <Crosshair size={16} />
        </button>

        {/* Pena dengan Popover Variasi Sains */}
        <div className="relative flex justify-center">
          <button
            onClick={(e) => {
              if (activeTool !== 'pen' && activeTool !== 'fading_pen') {
                onSelectTool('pen');
              } else {
                const rect = e.currentTarget.getBoundingClientRect();
                setPenAnchor(penAnchor ? null : rect);
              }
            }}
            onContextMenu={(e) => {
              e.preventDefault();
              const rect = e.currentTarget.getBoundingClientRect();
              setPenAnchor(penAnchor ? null : rect);
            }}
            className={`w-full p-2 rounded-xl flex items-center justify-center gap-0.5 transition cursor-pointer ${
              activeTool === 'pen'
                ? 'bg-blue-600 text-white shadow-sm'
                : activeTool === 'fading_pen'
                ? 'bg-gradient-to-tr from-rose-500 to-amber-500 text-white shadow-md ring-2 ring-rose-300/80'
                : 'hover:bg-slate-100 text-slate-700'
            }`}
            title={
              activeTool === 'fading_pen'
                ? 'Laser Fading Pen (Klik untuk ganti jenis pena)'
                : 'Pena Gambar (Klik saat aktif untuk Variasi Pena Sains)'
            }
          >
            {activeTool === 'fading_pen' ? <Sparkles size={16} className="animate-pulse" /> : <Pen size={16} />}
            {(activeTool === 'pen' || activeTool === 'fading_pen') && (
              <ChevronDown
                size={10}
                className={`transition-transform opacity-80 ${penAnchor ? 'rotate-180' : ''}`}
              />
            )}
          </button>

          <FloatingPopover anchorRect={penAnchor} onClose={() => setPenAnchor(null)} offsetY={-40}>
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200 p-3 w-64 text-slate-800 space-y-2">
              <div className="text-[11px] font-bold text-slate-500">Variasi Pena Sains & Presentasi</div>
              <div className="space-y-1">
                <button
                  onClick={() => {
                    onSelectTool('pen');
                    setPenAnchor(null);
                  }}
                  className={`w-full p-2 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition text-left cursor-pointer ${
                    activeTool === 'pen'
                      ? 'bg-blue-50 text-blue-700 font-bold border border-blue-200'
                      : 'hover:bg-blue-50/60 hover:text-blue-600'
                  }`}
                >
                  <Pen size={15} className="text-blue-600 shrink-0" />
                  <div>
                    <div className="font-bold flex items-center gap-1.5">
                      <span>Pena Presisi Fineliner</span>
                      <span className="text-[9px] bg-blue-100 text-blue-700 px-1.5 py-0.2 rounded-full font-bold">Presisi</span>
                    </div>
                    <div className="text-[10px] text-slate-400 font-normal">Tegas untuk rumus kimia & matematika</div>
                  </div>
                </button>

                <button
                  onClick={() => {
                    onSelectTool('highlighter');
                    setPenAnchor(null);
                  }}
                  className={`w-full p-2 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition text-left cursor-pointer ${
                    activeTool === 'highlighter'
                      ? 'bg-amber-50 text-amber-700 font-bold border border-amber-200'
                      : 'hover:bg-amber-50/60 hover:text-amber-700'
                  }`}
                >
                  <Highlighter size={15} className="text-amber-500 shrink-0" />
                  <div>
                    <div className="font-bold flex items-center gap-1.5">
                      <span>Stabilo Transparan</span>
                      <span className="text-[9px] bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded-full font-bold">Sorot</span>
                    </div>
                    <div className="text-[10px] text-slate-400 font-normal">Highlight materi tanpa menutupi teks</div>
                  </div>
                </button>

                <button
                  onClick={() => {
                    onSelectTool('fading_pen');
                    setPenAnchor(null);
                  }}
                  className={`w-full p-2 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition text-left cursor-pointer ${
                    activeTool === 'fading_pen'
                      ? 'bg-rose-50 text-rose-700 font-bold border border-rose-200'
                      : 'hover:bg-rose-50/60 hover:text-rose-600'
                  }`}
                >
                  <Sparkles size={15} className="text-rose-500 animate-pulse shrink-0" />
                  <div>
                    <div className="font-bold flex items-center gap-1.5">
                      <span>Laser Fading Pen</span>
                      <span className="text-[9px] bg-rose-100 text-rose-700 px-1.5 py-0.2 rounded-full font-bold">Auto-Fade 3s</span>
                    </div>
                    <div className="text-[10px] text-slate-400 font-normal">Coretan live memudar & hilang otomatis</div>
                  </div>
                </button>
              </div>
            </div>
          </FloatingPopover>
        </div>

        <button
          onClick={() => onSelectTool('highlighter')}
          className={`p-2 rounded-xl flex items-center justify-center transition cursor-pointer ${
            activeTool === 'highlighter'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'hover:bg-slate-100 text-slate-700'
          }`}
          title="Stabilo Transparan"
        >
          <Highlighter size={16} />
        </button>

        {/* Tombol Penghapus dengan Popover Portaled */}
        <div className="relative">
          <button
            onClick={(e) => {
              if (activeTool !== 'eraser') {
                onSelectTool('eraser');
              }
              const rect = e.currentTarget.getBoundingClientRect();
              setEraserAnchor(eraserAnchor ? null : rect);
            }}
            className={`w-full p-2 rounded-xl flex items-center justify-center gap-0.5 transition cursor-pointer ${
              activeTool === 'eraser'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'hover:bg-slate-100 text-slate-700'
            }`}
            title="Penghapus (Klik saat aktif untuk opsi: Brush, Objek, Lasso)"
          >
            <Eraser size={16} />
            {activeTool === 'eraser' && (
              <ChevronDown
                size={10}
                className={`transition-transform opacity-80 ${eraserAnchor ? 'rotate-180' : ''}`}
              />
            )}
          </button>

          <FloatingPopover anchorRect={eraserAnchor} onClose={() => setEraserAnchor(null)}>
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200 p-3 w-64">
              <div className="text-[11px] font-bold text-slate-500 mb-2">Mode Penghapus</div>
              <div className="grid grid-cols-3 gap-1.5 mb-3">
                <button
                  onClick={() => {
                    onChangeEraserSettings?.({
                      mode: 'brush',
                      shape: eraserSettings.shape,
                      size: eraserSettings.size,
                    });
                  }}
                  className={`px-2 py-1.5 rounded-xl text-xs font-semibold flex flex-col items-center gap-1 border transition cursor-pointer ${
                    eraserSettings.mode === 'brush'
                      ? 'bg-blue-50 border-blue-500 text-blue-600 shadow-xs'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                  }`}
                >
                  <Eraser size={14} />
                  <span>Biasa</span>
                </button>

                <button
                  onClick={() => {
                    onChangeEraserSettings?.({
                      mode: 'object',
                      shape: eraserSettings.shape,
                      size: eraserSettings.size,
                    });
                  }}
                  className={`px-2 py-1.5 rounded-xl text-xs font-semibold flex flex-col items-center gap-1 border transition cursor-pointer ${
                    eraserSettings.mode === 'object'
                      ? 'bg-blue-50 border-blue-500 text-blue-600 shadow-xs'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                  }`}
                >
                  <MousePointer size={14} />
                  <span>Objek</span>
                </button>

                <button
                  onClick={() => {
                    onChangeEraserSettings?.({
                      mode: 'lasso',
                      shape: eraserSettings.shape,
                      size: eraserSettings.size,
                    });
                  }}
                  className={`px-2 py-1.5 rounded-xl text-xs font-semibold flex flex-col items-center gap-1 border transition cursor-pointer ${
                    eraserSettings.mode === 'lasso'
                      ? 'bg-blue-50 border-blue-500 text-blue-600 shadow-xs'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                  }`}
                >
                  <LassoSelect size={14} />
                  <span>Lasso</span>
                </button>
              </div>

              {eraserSettings.mode === 'brush' && (
                <>
                  <div className="text-[11px] font-bold text-slate-500 mb-1.5">Bentuk Penghapus</div>
                  <div className="grid grid-cols-2 gap-1.5 mb-3">
                    <button
                      onClick={() => {
                        onChangeEraserSettings?.({
                          ...eraserSettings,
                          shape: 'circle',
                        });
                      }}
                      className={`py-1.5 px-2 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 border transition cursor-pointer ${
                        eraserSettings.shape === 'circle'
                          ? 'bg-blue-50 border-blue-500 text-blue-600 font-bold'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                      }`}
                    >
                      <Circle size={13} className="fill-current" />
                      <span>Lingkaran</span>
                    </button>

                    <button
                      onClick={() => {
                        onChangeEraserSettings?.({
                          ...eraserSettings,
                          shape: 'square',
                        });
                      }}
                      className={`py-1.5 px-2 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 border transition cursor-pointer ${
                        eraserSettings.shape === 'square'
                          ? 'bg-blue-50 border-blue-500 text-blue-600 font-bold'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                      }`}
                    >
                      <Square size={13} className="fill-current" />
                      <span>Persegi</span>
                    </button>
                  </div>

                  <div className="text-[11px] font-bold text-slate-500 mb-1.5 flex justify-between">
                    <span>Ukuran Penghapus</span>
                    <span className="font-mono text-blue-600 font-semibold">{eraserSettings.size}px</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <input
                      type="range"
                      min={10}
                      max={100}
                      step={5}
                      value={eraserSettings.size}
                      onChange={(e) => {
                        onChangeEraserSettings?.({
                          ...eraserSettings,
                          size: Number(e.target.value),
                        });
                      }}
                      className="w-full accent-blue-600 cursor-pointer"
                    />
                  </div>
                  <div className="grid grid-cols-4 gap-1">
                    {[15, 30, 50, 80].map((sz) => (
                      <button
                        key={sz}
                        onClick={() => {
                          onChangeEraserSettings?.({
                            ...eraserSettings,
                            size: sz,
                          });
                        }}
                        className={`py-1 text-[10px] font-mono rounded-lg border transition cursor-pointer ${
                          eraserSettings.size === sz
                            ? 'bg-blue-600 text-white border-blue-600 font-bold'
                            : 'border-slate-200 hover:bg-slate-100 text-slate-600'
                        }`}
                      >
                        {sz}px
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </FloatingPopover>
        </div>

        <button
          onClick={() => onSelectTool('text')}
          className={`p-2 rounded-xl flex items-center justify-center transition cursor-pointer ${
            activeTool === 'text'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'hover:bg-slate-100 text-slate-700'
          }`}
          title="Teks Catatan"
        >
          <Type size={16} />
        </button>

        <button
          onClick={() => onSelectTool('line')}
          className={`p-2 rounded-xl flex items-center justify-center transition cursor-pointer ${
            activeTool === 'line'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'hover:bg-slate-100 text-slate-700'
          }`}
          title="Garis Lurus"
        >
          <Minus size={16} />
        </button>

        <button
          onClick={() => onSelectTool('arrow')}
          className={`p-2 rounded-xl flex items-center justify-center transition cursor-pointer ${
            activeTool === 'arrow'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'hover:bg-slate-100 text-slate-700'
          }`}
          title="Panah Vektor"
        >
          <ArrowRight size={16} />
        </button>

        <button
          onClick={() => onSelectTool('rect')}
          className={`p-2 rounded-xl flex items-center justify-center transition cursor-pointer ${
            activeTool === 'rect'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'hover:bg-slate-100 text-slate-700'
          }`}
          title="Kotak Persegi"
        >
          <Square size={16} />
        </button>

        <button
          onClick={() => onSelectTool('ellipse')}
          className={`p-2 rounded-xl flex items-center justify-center transition cursor-pointer ${
            activeTool === 'ellipse'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'hover:bg-slate-100 text-slate-700'
          }`}
          title="Lingkaran / Elips"
        >
          <Circle size={16} />
        </button>
      </div>

      {/* Instrumen Virtual: Penggaris & Jangka */}
      <div className="grid grid-cols-2 gap-1 w-full pb-1.5 border-b border-slate-200">
        <button
          onClick={onToggleRuler}
          className="p-2 rounded-xl hover:bg-amber-50 text-amber-700 flex items-center justify-center transition cursor-pointer"
          title="Penggaris Virtual"
        >
          <Ruler size={16} />
        </button>
        <button
          onClick={onToggleCompass}
          className="p-2 rounded-xl hover:bg-blue-50 text-blue-700 flex items-center justify-center transition cursor-pointer"
          title="Jangka Virtual"
        >
          <Compass size={16} />
        </button>
      </div>

      {/* Konten Silabus & Media: Bank Soal & Unggah Gambar R2 */}
      <div className="grid grid-cols-2 gap-1 w-full pb-1.5 border-b border-slate-200">
        <button
          onClick={onOpenQuestionBank}
          className="p-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs flex flex-col items-center justify-center transition cursor-pointer"
          title="Bank Soal OSN: Sisipkan Soal Lengkap ke Whiteboard"
        >
          <GraduationCap size={15} />
          <span className="text-[9px] leading-tight">Soal</span>
        </button>

        <button
          onClick={() => imageInputRef.current?.click()}
          className="p-1.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold text-xs flex flex-col items-center justify-center transition cursor-pointer"
          title="Tambah Gambar / Diagram (Unggah Otomatis ke Cloud R2)"
        >
          <ImagePlus size={15} />
          <span className="text-[9px] leading-tight">Gambar</span>
        </button>

        <input
          ref={imageInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              onAddImageFile?.(file);
              e.target.value = '';
            }
          }}
        />
      </div>

      {/* Toolbox Khusus STEM: Matematika, Fisika, Kimia, Biologi */}
      <div className="grid grid-cols-2 gap-1 w-full pb-1.5 border-b border-slate-200">
        <button
          onClick={onOpenMath}
          className="p-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs flex flex-col items-center justify-center transition cursor-pointer"
          title="Toolbox Matematika: Grafik & 3D"
        >
          <FunctionSquare size={14} />
          <span className="text-[9px] leading-tight">Mat</span>
        </button>
        <button
          onClick={onOpenPhysics}
          className="p-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-700 font-bold text-xs flex flex-col items-center justify-center transition cursor-pointer"
          title="Toolbox Fisika: Sirkuit & Gaya"
        >
          <Zap size={14} />
          <span className="text-[9px] leading-tight">Fis</span>
        </button>
        <button
          onClick={onOpenChem}
          className="p-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs flex flex-col items-center justify-center transition cursor-pointer"
          title="Toolbox Kimia: Cincin Benzena & Baji"
        >
          <FlaskConical size={14} />
          <span className="text-[9px] leading-tight">Kim</span>
        </button>
        <button
          onClick={onOpenBio}
          className="p-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs flex flex-col items-center justify-center transition cursor-pointer"
          title="Toolbox Biologi: Silsilah Pedigree & Sel"
        >
          <Dna size={14} />
          <span className="text-[9px] leading-tight">Bio</span>
        </button>
      </div>

      {/* Pemilih Warna & Background Grid */}
      <div className="grid grid-cols-2 gap-1 w-full pb-1.5 border-b border-slate-200 items-center">
        {/* Warna */}
        <div className="relative flex justify-center">
          <button
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setColorAnchor(colorAnchor ? null : rect);
            }}
            className="w-7 h-7 rounded-xl border-2 border-white shadow-sm flex items-center justify-center transition hover:scale-105 cursor-pointer"
            style={{ backgroundColor: color }}
            title="Pilih Warna & Ketebalan"
          />

          <FloatingPopover anchorRect={colorAnchor} onClose={() => setColorAnchor(null)} offsetY={-40}>
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200 p-3 w-52 text-slate-800">
              <div className="text-[11px] font-bold text-slate-500 mb-2">Palet Warna</div>
              <div className="grid grid-cols-4 gap-2 mb-3">
                {PALETTE_COLORS.map((c) => (
                  <button
                    key={c}
                    onClick={() => {
                      onChangeColor(c);
                      setColorAnchor(null);
                    }}
                    className={`w-8 h-8 rounded-xl border transition cursor-pointer ${
                      color === c ? 'scale-110 ring-2 ring-blue-500 ring-offset-2' : ''
                    }`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>

              <div className="text-[11px] font-bold text-slate-500 mb-2">Ketebalan Garis</div>
              <div className="flex justify-between items-center gap-1">
                {STROKE_WIDTHS.map((w) => (
                  <button
                    key={w}
                    onClick={() => onChangeStrokeWidth(w)}
                    className={`flex-1 py-1.5 rounded-lg flex items-center justify-center border transition cursor-pointer ${
                      strokeWidth === w ? 'bg-blue-50 border-blue-500 text-blue-600' : 'border-slate-200'
                    }`}
                  >
                    <div
                      className="rounded-full bg-current"
                      style={{ width: `${w + 2}px`, height: `${w + 2}px` }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </FloatingPopover>
        </div>

        {/* Background */}
        <div className="relative flex justify-center">
          <button
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setBgAnchor(bgAnchor ? null : rect);
            }}
            className="p-2 rounded-xl hover:bg-slate-100 text-slate-700 flex items-center justify-center transition cursor-pointer"
            title="Ubah Latar Belakang Kanvas"
          >
            <Grid size={16} />
          </button>

          <FloatingPopover anchorRect={bgAnchor} onClose={() => setBgAnchor(null)} offsetY={-60}>
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200 p-2.5 w-48 text-xs font-medium space-y-1 text-slate-800">
              <div className="text-[11px] font-bold text-slate-500 mb-1.5 px-1">Latar Belakang</div>
              {[
                { id: 'blank', label: 'Polos Putih' },
                { id: 'chalkboard', label: 'Papan Hitam (Chalkboard)' },
                { id: 'grid', label: 'Kertas Milimeter Grid' },
                { id: 'lined', label: 'Buku Catatan Bergaris' },
                { id: 'dots', label: 'Kisi Titik (Dots)' },
                { id: 'cartesian', label: 'Sistem Kartesius X-Y' },
              ].map((b) => (
                <button
                  key={b.id}
                  onClick={() => {
                    onChangeBackground(b.id as WhiteboardBackground);
                    setBgAnchor(null);
                  }}
                  className={`w-full text-left px-2.5 py-1.5 rounded-xl transition cursor-pointer ${
                    background === b.id
                      ? 'bg-blue-50 text-blue-600 font-bold'
                      : 'hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  {b.label}
                </button>
              ))}

              {/* Pemilih Tata Letak Kanvas: Infinite vs Multi-Halaman A4 */}
              <div className="pt-2 mt-2 border-t border-slate-200">
                <div className="text-[11px] font-bold text-slate-500 mb-1.5 px-1">Tata Letak Kanvas</div>
                <div className="grid grid-cols-2 gap-1.5">
                  <button
                    onClick={() => {
                      onChangeLayoutMode?.('infinite');
                      setBgAnchor(null);
                    }}
                    className={`px-2 py-1.5 rounded-xl text-center text-[11px] font-semibold transition cursor-pointer border ${
                      layoutMode === 'infinite'
                        ? 'bg-blue-50 border-blue-500 text-blue-700 font-bold shadow-2xs'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                    }`}
                    title="Kanvas Bebas tanpa batas"
                  >
                    ♾️ Bebas
                  </button>
                  <button
                    onClick={() => {
                      onChangeLayoutMode?.('paginated');
                      setBgAnchor(null);
                    }}
                    className={`px-2 py-1.5 rounded-xl text-center text-[11px] font-semibold transition cursor-pointer border ${
                      layoutMode === 'paginated'
                        ? 'bg-blue-50 border-blue-500 text-blue-700 font-bold shadow-2xs'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                    }`}
                    title="Multi-Halaman berurutan vertikal A4"
                  >
                    📄 Multi A4
                  </button>
                </div>
              </div>
            </div>
          </FloatingPopover>
        </div>
      </div>

      {/* Kontrol Zoom Viewport */}
      <div className="grid grid-cols-2 gap-1 w-full pb-1.5 border-b border-slate-200">
        <button
          onClick={onZoomOut}
          className="p-1.5 rounded-xl hover:bg-slate-100 flex items-center justify-center transition text-slate-600 cursor-pointer"
          title="Perkecil Zoom"
        >
          <ZoomOut size={15} />
        </button>
        <button
          onClick={onZoomIn}
          className="p-1.5 rounded-xl hover:bg-slate-100 flex items-center justify-center transition text-slate-600 cursor-pointer"
          title="Perbesar Zoom"
        >
          <ZoomIn size={15} />
        </button>
        <button
          onClick={onResetZoom}
          className="col-span-2 py-0.5 text-[10px] font-mono text-slate-500 hover:text-blue-600 hover:bg-slate-100 rounded transition text-center cursor-pointer flex items-center justify-center gap-1"
          title="Klik: Pusatkan Konten / Reset Zoom 100%"
        >
          <span>{Math.round(zoom * 100)}%</span>
          <span className="text-[9px] text-slate-400 font-sans">· Reset</span>
        </button>
      </div>

      {/* Simpan R2 & Ekspor */}
      <div className="grid grid-cols-2 gap-1 w-full">
        <button
          onClick={onSaveToR2}
          disabled={isSaving}
          className="p-2 rounded-xl hover:bg-slate-100 text-slate-700 flex items-center justify-center transition disabled:opacity-50 cursor-pointer"
          title="Simpan ke Cloudflare R2"
        >
          <CloudUpload size={16} />
        </button>
        <button
          onClick={onOpenExport}
          className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center transition font-semibold cursor-pointer"
          title="Ekspor Gambar / PDF Multi-Halaman"
        >
          <Download size={16} />
        </button>
      </div>
      </aside>
    </>
  );
};
