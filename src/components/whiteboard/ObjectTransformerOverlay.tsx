import React, { useState, useEffect, useRef } from 'react';
import {
  Copy,
  Trash2,
  Lock,
  Unlock,
  ArrowUp,
  ArrowDown,
  Maximize2,
} from 'lucide-react';
import type { WhiteboardElement } from '../../types/whiteboard';

interface ObjectTransformerOverlayProps {
  element: WhiteboardElement;
  measuredHeight?: number;
  onResize: (id: string, newWidth: number, newHeight: number, newX?: number, newY?: number) => void;
  onDuplicate: (id: string) => void;
  onToggleLock: (id: string) => void;
  onBringForward: (id: string) => void;
  onSendBackward: (id: string) => void;
  onDelete: (id: string) => void;
  scale?: number;
}

type HandleType = 'nw' | 'ne' | 'se' | 'sw';

export const ObjectTransformerOverlay: React.FC<ObjectTransformerOverlayProps> = ({
  element,
  measuredHeight,
  onResize,
  onDuplicate,
  onToggleLock,
  onBringForward,
  onSendBackward,
  onDelete,
  scale = 1,
}) => {
  const [activeHandle, setActiveHandle] = useState<HandleType | null>(null);
  const dragStartRef = useRef<{
    startX: number;
    startY: number;
    initX: number;
    initY: number;
    initW: number;
    initH: number;
  }>({
    startX: 0,
    startY: 0,
    initX: 0,
    initY: 0,
    initW: 0,
    initH: 0,
  });

  const getElementBounds = () => {
    let x = element.x;
    let y = element.y;
    let w = element.width || 120;
    let h = element.height || 80;

    if (element.type === 'question_card') {
      w = element.width || 560;
      h = measuredHeight || element.height || 220;
    } else if (element.type === 'image') {
      w = element.width || 320;
      h = element.height || 240;
    } else if (element.type === 'text') {
      const fontSize = element.fontSize || 18;
      w = element.width || Math.max(60, (element.text?.length || 4) * fontSize * 0.6);
      h = element.height || fontSize * 1.35;
    } else if (element.type === 'stroke' && element.points && element.points.length > 0) {
      const xs = element.points.map((p) => p[0]);
      const ys = element.points.map((p) => p[1]);
      x = Math.min(...xs);
      y = Math.min(...ys);
      w = Math.max(30, Math.max(...xs) - x);
      h = Math.max(30, Math.max(...ys) - y);
    }

    return { x, y, w, h };
  };

  const bounds = getElementBounds();

  const handlePointerDown = (handle: HandleType, e: React.PointerEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (element.isLocked) return;

    setActiveHandle(handle);
    dragStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initX: bounds.x,
      initY: bounds.y,
      initW: bounds.w,
      initH: bounds.h,
    };
  };

  useEffect(() => {
    if (!activeHandle) return;

    const handlePointerMove = (e: PointerEvent) => {
      const effectiveScale = Math.max(0.1, scale);
      const dx = (e.clientX - dragStartRef.current.startX) / effectiveScale;
      const dy = (e.clientY - dragStartRef.current.startY) / effectiveScale;

      const { initX, initY, initW, initH } = dragStartRef.current;
      let newX = initX;
      let newY = initY;
      let newW = initW;
      let newH = initH;

      if (element.type === 'question_card') {
        // Kartu soal menyesuaikan tinggi secara otomatis terhadap teks KaTeX
        const minW = 340;
        if (activeHandle === 'se' || activeHandle === 'ne') {
          newW = Math.max(minW, initW + dx);
        } else if (activeHandle === 'sw' || activeHandle === 'nw') {
          newW = Math.max(minW, initW - dx);
          newX = initX + (initW - newW);
        }
        newH = initH;
      } else {
        const minSize = 40;

        if (activeHandle === 'se') {
          newW = Math.max(minSize, initW + dx);
          newH = Math.max(minSize, initH + dy);
        } else if (activeHandle === 'sw') {
          newW = Math.max(minSize, initW - dx);
          newX = initX + (initW - newW);
          newH = Math.max(minSize, initH + dy);
        } else if (activeHandle === 'ne') {
          newW = Math.max(minSize, initW + dx);
          newH = Math.max(minSize, initH - dy);
          newY = initY + (initH - newH);
        } else if (activeHandle === 'nw') {
          newW = Math.max(minSize, initW - dx);
          newX = initX + (initW - newW);
          newH = Math.max(minSize, initH - dy);
          newY = initY + (initH - newH);
        }
      }

      onResize(element.id, Math.round(newW), Math.round(newH), Math.round(newX), Math.round(newY));
    };

    const handlePointerUp = () => {
      setActiveHandle(null);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [activeHandle, element.id, onResize, scale]);

  const padding = 6;
  const overlayLeft = bounds.x - padding;
  const overlayTop = bounds.y - padding;
  const overlayWidth = bounds.w + padding * 2;
  const overlayHeight = bounds.h + padding * 2;

  // Tempatkan floating action bar di atas objek (atau di bawah jika terlalu dekat dengan tepi atas)
  const isNearTop = overlayTop < 45;

  return (
    <div
      style={{
        position: 'absolute',
        left: overlayLeft,
        top: overlayTop,
        width: overlayWidth,
        height: overlayHeight,
        zIndex: 9999,
      }}
      className="pointer-events-none"
    >
      {/* Selection Border */}
      <div
        className={`w-full h-full border-2 rounded-lg pointer-events-none transition-colors ${
          element.isLocked
            ? 'border-amber-500/80 border-dashed'
            : 'border-blue-600/90 shadow-xs'
        }`}
      />

      {/* Floating Action Bar */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          top: isNearTop ? `${overlayHeight + 8}px` : '-44px',
        }}
        className="pointer-events-auto bg-slate-900/90 text-white backdrop-blur-md rounded-xl px-2 py-1 shadow-xl border border-slate-700/60 flex items-center gap-1 text-xs select-none"
        onClick={(e) => e.stopPropagation()}
        onPointerDown={(e) => e.stopPropagation()}
      >
        {/* Lock / Unlock */}
        <button
          onClick={() => onToggleLock(element.id)}
          className={`p-1.5 rounded-lg transition cursor-pointer flex items-center gap-1 ${
            element.isLocked
              ? 'bg-amber-500 text-slate-950 font-bold px-2'
              : 'hover:bg-slate-800 text-slate-300 hover:text-white'
          }`}
          title={element.isLocked ? 'Buka Kunci Objek' : 'Kunci Objek (Cegah Pergeseran & Penghapusan)'}
        >
          {element.isLocked ? (
            <>
              <Lock size={13} />
              <span className="text-[10px]">Terkunci</span>
            </>
          ) : (
            <Unlock size={13} />
          )}
        </button>

        {/* Duplicate */}
        {!element.isLocked && (
          <button
            onClick={() => onDuplicate(element.id)}
            className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition cursor-pointer"
            title="Duplikat Objek"
          >
            <Copy size={13} />
          </button>
        )}

        {/* Bring Forward */}
        <button
          onClick={() => onBringForward(element.id)}
          className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition cursor-pointer"
          title="Bawa ke Lapisan Depan"
        >
          <ArrowUp size={13} />
        </button>

        {/* Send Backward */}
        <button
          onClick={() => onSendBackward(element.id)}
          className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition cursor-pointer"
          title="Kirim ke Lapisan Belakang"
        >
          <ArrowDown size={13} />
        </button>

        {/* Delete (Hanya dapat dihapus jika objek TIDAK dalam kondisi terkunci) */}
        {!element.isLocked && (
          <button
            onClick={() => onDelete(element.id)}
            className="p-1.5 rounded-lg hover:bg-rose-500/80 text-rose-300 hover:text-white transition cursor-pointer ml-0.5"
            title="Hapus Objek"
          >
            <Trash2 size={13} />
          </button>
        )}
      </div>

      {/* 4 Corner Resize Handles */}
      {!element.isLocked && (
        <>
          {/* NW */}
          <div
            onPointerDown={(e) => handlePointerDown('nw', e)}
            className="pointer-events-auto absolute -top-1.5 -left-1.5 w-3.5 h-3.5 bg-white border-2 border-blue-600 rounded-xs shadow-md cursor-nwse-resize hover:scale-125 transition-transform"
            title="Tarik untuk mengubah ukuran"
          />

          {/* NE */}
          <div
            onPointerDown={(e) => handlePointerDown('ne', e)}
            className="pointer-events-auto absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-white border-2 border-blue-600 rounded-xs shadow-md cursor-nesw-resize hover:scale-125 transition-transform"
            title="Tarik untuk mengubah ukuran"
          />

          {/* SE */}
          <div
            onPointerDown={(e) => handlePointerDown('se', e)}
            className="pointer-events-auto absolute -bottom-1.5 -right-1.5 w-3.5 h-3.5 bg-white border-2 border-blue-600 rounded-xs shadow-md cursor-nwse-resize hover:scale-125 transition-transform"
            title="Tarik untuk mengubah ukuran"
          />

          {/* SW */}
          <div
            onPointerDown={(e) => handlePointerDown('sw', e)}
            className="pointer-events-auto absolute -bottom-1.5 -left-1.5 w-3.5 h-3.5 bg-white border-2 border-blue-600 rounded-xs shadow-md cursor-nesw-resize hover:scale-125 transition-transform"
            title="Tarik untuk mengubah ukuran"
          />
        </>
      )}
    </div>
  );
};
