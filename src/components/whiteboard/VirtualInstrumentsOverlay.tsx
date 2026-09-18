import React, { useState, useEffect } from 'react';
import { RotateCw, X, CircleDot, Move } from 'lucide-react';
import type { RulerState, CompassState, ProtractorState, WhiteboardElement } from '../../types/whiteboard';

interface VirtualInstrumentsOverlayProps {
  ruler: RulerState;
  compass: CompassState;
  protractor: ProtractorState;
  onUpdateRuler: (state: Partial<RulerState>) => void;
  onUpdateCompass: (state: Partial<CompassState>) => void;
  onUpdateProtractor: (state: Partial<ProtractorState>) => void;
  onAddElement: (element: Partial<WhiteboardElement>) => void;
  currentColor: string;
  clientToCanvas?: (clientX: number, clientY: number) => { x: number; y: number };
}

// Sudut penting untuk magnet snap saat memutar penggaris
const SNAP_ANGLES = [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330, 360];

export const VirtualInstrumentsOverlay: React.FC<VirtualInstrumentsOverlayProps> = ({
  ruler,
  compass,
  protractor,
  onUpdateRuler,
  onUpdateCompass,
  onUpdateProtractor,
  onAddElement,
  currentColor,
  clientToCanvas,
}) => {
  const overlayRef = React.useRef<HTMLDivElement>(null);
  const [activeDrag, setActiveDrag] = useState<
    'ruler' | 'ruler-rotate' | 'ruler-resize' | 'compass' | 'compass-pencil' | 'compass-panel' | 'protractor' | null
  >(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const rotateStartRef = React.useRef({ startAngle: 0, startRulerAngle: 0 });
  const [compassPanelOffset, setCompassPanelOffset] = useState({ x: 45, y: -60 });
  const panelDragStartRef = React.useRef({ startClientX: 0, startClientY: 0, initialX: 45, initialY: -60 });

  const compassDrawPointsRef = React.useRef<Array<[number, number]>>([]);
  const [liveCompassPoints, setLiveCompassPoints] = useState<Array<[number, number]>>([]);

  // Listener Drag Mouse Universal untuk Semua Instrumen
  useEffect(() => {
    if (!activeDrag) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (activeDrag === 'ruler') {
        onUpdateRuler({
          x: Math.max(0, e.clientX - dragOffset.x),
          y: Math.max(0, e.clientY - dragOffset.y),
        });
      } else if (activeDrag === 'ruler-rotate') {
        const overlayRect = overlayRef.current?.getBoundingClientRect();
        const originX = (overlayRect?.left || 0) + ruler.x;
        const originY = (overlayRect?.top || 0) + ruler.y;
        const currentAngle = (Math.atan2(e.clientY - originY, e.clientX - originX) * 180) / Math.PI;
        const delta = currentAngle - rotateStartRef.current.startAngle;
        let deg = (rotateStartRef.current.startRulerAngle + delta) % 360;
        if (deg < 0) deg += 360;

        // Magnet Snap ke sudut-sudut penting hanya jika sangat dekat (toleransi 1.8 derajat)
        const snapThreshold = 1.8;
        for (const snap of SNAP_ANGLES) {
          const diff = Math.min(
            Math.abs(deg - snap),
            Math.abs(deg - (snap + 360)),
            Math.abs(deg - (snap - 360))
          );
          if (diff <= snapThreshold) {
            deg = snap % 360;
            break;
          }
        }
        onUpdateRuler({ angleDeg: Math.round(deg) });
      } else if (activeDrag === 'ruler-resize') {
        const rad = (ruler.angleDeg * Math.PI) / 180;
        const dx = e.clientX - ruler.x;
        const dy = e.clientY - ruler.y;
        const proj = dx * Math.cos(rad) + dy * Math.sin(rad);
        const newLength = Math.max(150, Math.min(1200, Math.round(proj)));
        onUpdateRuler({ lengthPx: newLength });
      } else if (activeDrag === 'compass') {
        onUpdateCompass({
          centerX: e.clientX - dragOffset.x,
          centerY: e.clientY - dragOffset.y,
        });
      } else if (activeDrag === 'compass-pencil') {
        const overlayRect = overlayRef.current?.getBoundingClientRect();
        const originX = (overlayRect?.left || 0) + compass.centerX;
        const originY = (overlayRect?.top || 0) + compass.centerY;
        let deg = (Math.atan2(e.clientY - originY, e.clientX - originX) * 180) / Math.PI;
        if (deg < 0) deg += 360;
        onUpdateCompass({ angleDeg: Math.round(deg) });

        // Catat titik busur lingkaran saat memutar pensil jangka
        const rad = (deg * Math.PI) / 180;
        const pencilClientX = originX + Math.cos(rad) * compass.radiusPx;
        const pencilClientY = originY + Math.sin(rad) * compass.radiusPx;
        const pt = clientToCanvas ? clientToCanvas(pencilClientX, pencilClientY) : { x: pencilClientX, y: pencilClientY };
        compassDrawPointsRef.current.push([pt.x, pt.y]);
        setLiveCompassPoints((prev) => [...prev, [Math.cos(rad) * compass.radiusPx, Math.sin(rad) * compass.radiusPx]]);
      } else if (activeDrag === 'compass-panel') {
        const dx = e.clientX - panelDragStartRef.current.startClientX;
        const dy = e.clientY - panelDragStartRef.current.startClientY;
        setCompassPanelOffset({
          x: Math.round(panelDragStartRef.current.initialX + dx),
          y: Math.round(panelDragStartRef.current.initialY + dy),
        });
      } else if (activeDrag === 'protractor') {
        onUpdateProtractor({
          x: Math.max(0, e.clientX - dragOffset.x),
          y: Math.max(0, e.clientY - dragOffset.y),
        });
      }
    };

    const handleMouseUp = () => {
      if (activeDrag === 'compass-pencil') {
        if (compassDrawPointsRef.current.length > 2) {
          onAddElement({
            type: 'stroke',
            x: compassDrawPointsRef.current[0][0],
            y: compassDrawPointsRef.current[0][1],
            points: [...compassDrawPointsRef.current],
            color: currentColor || '#2563eb',
            strokeWidth: 2,
            opacity: 1,
            isLocked: false,
            zIndex: 1,
          });
        }
        compassDrawPointsRef.current = [];
        setLiveCompassPoints([]);
      }
      setActiveDrag(null);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [
    activeDrag,
    dragOffset,
    ruler.x,
    ruler.y,
    ruler.angleDeg,
    compass.centerX,
    compass.centerY,
    compass.radiusPx,
    currentColor,
    clientToCanvas,
    onAddElement,
    onUpdateRuler,
    onUpdateCompass,
    onUpdateProtractor,
  ]);

  // 1. INSTRUMEN PENGGARIS (VIRTUAL RULER)
  const handleRulerMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveDrag('ruler');
    setDragOffset({
      x: e.clientX - ruler.x,
      y: e.clientY - ruler.y,
    });
  };

  const handleDrawAlongRuler = () => {
    // Gambar garis lurus sempurna sepanjang tepi atas penggaris
    const overlayRect = overlayRef.current?.getBoundingClientRect();
    const rulerClientX = (overlayRect?.left || 0) + ruler.x;
    const rulerClientY = (overlayRect?.top || 0) + ruler.y;
    const rad = (ruler.angleDeg * Math.PI) / 180;
    const endClientX = rulerClientX + Math.cos(rad) * ruler.lengthPx;
    const endClientY = rulerClientY + Math.sin(rad) * ruler.lengthPx;

    const start = clientToCanvas ? clientToCanvas(rulerClientX, rulerClientY) : { x: ruler.x, y: ruler.y };
    const end = clientToCanvas ? clientToCanvas(endClientX, endClientY) : { x: endClientX, y: endClientY };

    onAddElement({
      type: 'line',
      x: start.x,
      y: start.y,
      width: end.x - start.x,
      height: end.y - start.y,
      color: currentColor || '#0f172a',
      strokeWidth: 2,
      opacity: 1,
      isLocked: false,
      zIndex: 1,
    });
  };

  // 2. INSTRUMEN JANGKA (VIRTUAL COMPASS)
  const handleCompassMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveDrag('compass');
    setDragOffset({
      x: e.clientX - compass.centerX,
      y: e.clientY - compass.centerY,
    });
  };

  const handleDrawWithCompass = () => {
    // Menggambar lingkaran sempurna sesuai radius jangka
    const overlayRect = overlayRef.current?.getBoundingClientRect();
    const compassClientX = (overlayRect?.left || 0) + compass.centerX;
    const compassClientY = (overlayRect?.top || 0) + compass.centerY;

    const center = clientToCanvas ? clientToCanvas(compassClientX, compassClientY) : { x: compass.centerX, y: compass.centerY };
    const rim = clientToCanvas ? clientToCanvas(compassClientX + compass.radiusPx, compassClientY) : { x: compass.centerX + compass.radiusPx, y: compass.centerY };
    const radius = Math.abs(rim.x - center.x);

    onAddElement({
      type: 'ellipse',
      x: center.x - radius,
      y: center.y - radius,
      width: radius * 2,
      height: radius * 2,
      color: currentColor || '#2563eb',
      strokeWidth: 2,
      opacity: 1,
      isLocked: false,
      zIndex: 1,
    });
  };

  // 3. INSTRUMEN BUSUR DERAJAT (VIRTUAL PROTRACTOR)
  const handleProtractorMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveDrag('protractor');
    setDragOffset({
      x: e.clientX - protractor.x,
      y: e.clientY - protractor.y,
    });
  };

  return (
    <div ref={overlayRef} className="pointer-events-none absolute inset-0 z-40 overflow-hidden select-none">
      {/* PENGGARIS VIRTUAL (SEE-THROUGH GLASS ACRYLIC DENGAN TEMA KUCING) */}
      {ruler.isVisible && (
        <div
          style={{
            transform: `translate(${ruler.x}px, ${ruler.y}px) rotate(${ruler.angleDeg}deg)`,
            transformOrigin: '0 0',
            width: `${ruler.lengthPx}px`,
          }}
          className={`pointer-events-none absolute top-0 left-0 h-16 bg-white/40 hover:bg-white/50 backdrop-blur-[2.5px] border-2 border-sky-300/80 shadow-xl rounded-xl flex flex-col justify-between p-1.5 select-none ${
            activeDrag ? 'transition-none' : 'transition-transform duration-75'
          }`}
        >
          {/* Ornamen Telinga Kucing di Ujung Kiri Penggaris */}
          <div className="absolute -top-2.5 left-3 flex gap-1.5 pointer-events-none z-10">
            <div className="w-3.5 h-3.5 bg-sky-200/90 border border-sky-400 rotate-45 rounded-tl-sm shadow-xs flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-pink-300 rounded-tl-xs" />
            </div>
            <div className="w-3.5 h-3.5 bg-sky-200/90 border border-sky-400 rotate-45 rounded-tl-sm shadow-xs flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-pink-300 rounded-tl-xs" />
            </div>
          </div>


          {/* Skala Sentimeter / Milimeter (See-Through Kontras Tinggi) */}
          <div className="flex justify-between items-start border-b border-sky-400/80 pb-0.5 pointer-events-none">
            {Array.from({ length: Math.floor(ruler.lengthPx / 25) + 1 }).map((_, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div
                  className={`w-[1px] bg-sky-900 ${
                    idx % 5 === 0 ? 'h-3.5' : 'h-2 opacity-70'
                  }`}
                />
                {idx % 5 === 0 && (
                  <span className="text-[9px] font-bold text-sky-950 font-mono">
                    {idx / 5}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Handle Tarik Panjang Penggaris di Ujung Kanan */}
          <div
            onMouseDown={(e) => {
              e.stopPropagation();
              setActiveDrag('ruler-resize');
            }}
            className="pointer-events-auto absolute right-0 top-0 bottom-0 w-3.5 bg-sky-300/40 hover:bg-sky-400/80 rounded-r-lg cursor-ew-resize flex items-center justify-center transition group shadow-xs z-10"
            title="Tarik ujung ini untuk mengatur panjang penggaris"
          >
            <div className="w-1 h-7 bg-sky-800/60 rounded group-hover:bg-sky-950" />
          </div>

          {/* Kontrol Sudut, Pegangan Geser, Pengaturan Panjang & Aksi Penggaris */}
          <div className="flex items-center justify-between px-1 text-[10px] font-medium text-sky-950 pointer-events-auto pr-4">
            <div className="flex items-center gap-1">
              {/* Pegangan Khusus untuk Menggeser Posisi Penggaris */}
              <div
                onMouseDown={handleRulerMouseDown}
                className="flex items-center gap-1 cursor-move px-2 py-0.5 rounded-lg bg-sky-100/90 hover:bg-sky-200/90 text-sky-950 font-bold shadow-2xs border border-sky-300/80 transition"
                title="Tahan dan geser untuk memindahkan penggaris"
              >
                <span>🐾</span>
                <Move size={11} />
                <span className="text-[10px]">Geser</span>
              </div>

              {/* Slider Pengatur Panjang Penggaris */}
              <div
                className="flex items-center gap-1 bg-sky-100/70 px-1.5 py-0.5 rounded-lg border border-sky-200/80"
                title="Atur panjang penggaris"
              >
                <span className="text-[9px] font-mono font-bold text-sky-900">{ruler.lengthPx}px</span>
                <input
                  type="range"
                  min={150}
                  max={900}
                  step={25}
                  value={ruler.lengthPx}
                  onChange={(e) => onUpdateRuler({ lengthPx: Number(e.target.value) })}
                  className="w-14 h-1 accent-sky-600 cursor-pointer"
                />
              </div>
            </div>

            <div className="flex items-center gap-1">
              {/* Dial Pemutar Bebas di Sebelah Kanan dengan Magnet Snap ke Derajat Penting */}
              <div
                onMouseDown={(e) => {
                  e.stopPropagation();
                  const overlayRect = overlayRef.current?.getBoundingClientRect();
                  const originX = (overlayRect?.left || 0) + ruler.x;
                  const originY = (overlayRect?.top || 0) + ruler.y;
                  const startAngle = (Math.atan2(e.clientY - originY, e.clientX - originX) * 180) / Math.PI;
                  rotateStartRef.current = {
                    startAngle,
                    startRulerAngle: ruler.angleDeg,
                  };
                  setActiveDrag('ruler-rotate');
                }}
                className="flex items-center gap-1 cursor-grab active:cursor-grabbing px-1.5 py-0.5 rounded-lg bg-sky-100/90 hover:bg-sky-200/90 text-sky-950 font-bold shadow-2xs border border-sky-300/80 transition select-none"
                title="Tahan dan putar bebas (otomatis snap halus ke derajat penting tanpa loncat)"
              >
                <RotateCw size={11} />
                <span className="font-mono text-[10px]">{ruler.angleDeg}°</span>
              </div>

              <button
                onClick={handleDrawAlongRuler}
                className="px-2 py-0.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-2xs transition active:scale-95 cursor-pointer"
                title="Tarik Garis Lurus Sepanjang Tepi Penggaris"
              >
                Garis Lurus
              </button>

              <button
                onClick={() => onUpdateRuler({ isVisible: false })}
                className="p-1 hover:bg-rose-100 text-rose-600 rounded-lg transition cursor-pointer"
                title="Tutup Penggaris"
              >
                <X size={12} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* JANGKA VIRTUAL (DENGAN SENTUHAN KUCING / CAT PAW PIVOT) */}
      {compass.isVisible && (
        <div
          style={{
            transform: `translate(${compass.centerX}px, ${compass.centerY}px)`,
          }}
          className={`pointer-events-auto absolute top-0 left-0 w-0 h-0 select-none ${
            activeDrag ? 'transition-none' : 'transition-transform duration-75'
          }`}
        >
          {/* Titik Jarum Pusat dengan Tapak Kucing (Cat Paw Pivot) */}
          <div
            onMouseDown={handleCompassMouseDown}
            className="absolute -left-4 -top-4 w-8 h-8 rounded-full bg-white/80 backdrop-blur-xs border-2 border-blue-500 flex items-center justify-center cursor-move hover:scale-110 transition-transform shadow-md group"
            title="Geser Jarum Pusat Jangka (Cat Paw Pivot)"
          >
            <div className="text-[12px] select-none leading-none">🐾</div>
          </div>

          {/* Lingkaran Pratinjau Radius & Dial Skala Derajat Lingkaran */}
          <svg
            style={{
              position: 'absolute',
              left: `${-compass.radiusPx - 26}px`,
              top: `${-compass.radiusPx - 26}px`,
              width: `${(compass.radiusPx + 26) * 2}px`,
              height: `${(compass.radiusPx + 26) * 2}px`,
              pointerEvents: 'none',
              overflow: 'visible',
            }}
          >
            {/* Lingkaran Garis Pandu Luar Bergradasi Halus */}
            <circle
              cx={compass.radiusPx + 26}
              cy={compass.radiusPx + 26}
              r={compass.radiusPx}
              fill="none"
              stroke="#38bdf8"
              strokeWidth="1.5"
              strokeDasharray="4,4"
              opacity="0.85"
            />

            {/* Tanda Garis Ticks & Informasi Angka Derajat (Setiap 30 Derajat: 0°, 30°, 60°, 90°, dst.) */}
            {Array.from({ length: 24 }).map((_, i) => {
              const deg = i * 15;
              const rad = (deg * Math.PI) / 180;
              const isMajor = deg % 30 === 0;
              const isCardinal = deg % 90 === 0;
              const cx = compass.radiusPx + 26;
              const cy = compass.radiusPx + 26;

              // Garis Tick Penunjuk Derajat
              const tickLength = isCardinal ? 8 : isMajor ? 6 : 3.5;
              const x1 = cx + Math.cos(rad) * (compass.radiusPx - tickLength);
              const y1 = cy + Math.sin(rad) * (compass.radiusPx - tickLength);
              const x2 = cx + Math.cos(rad) * (compass.radiusPx + (isCardinal ? 2 : 0));
              const y2 = cy + Math.sin(rad) * (compass.radiusPx + (isCardinal ? 2 : 0));

              // Label Angka Derajat (Setiap 30 Derajat)
              const textR = compass.radiusPx > 80 ? compass.radiusPx - 16 : compass.radiusPx + 15;
              const tx = cx + Math.cos(rad) * textR;
              const ty = cy + Math.sin(rad) * textR;

              return (
                <g key={deg}>
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={isCardinal ? '#1d4ed8' : isMajor ? '#0284c7' : '#94a3b8'}
                    strokeWidth={isCardinal ? 2 : isMajor ? 1.5 : 1}
                  />
                  {isMajor && (
                    <text
                      x={tx}
                      y={ty}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize={compass.radiusPx > 95 ? '9.5' : '8'}
                      fontWeight={isCardinal ? 'bold' : '600'}
                      fill={isCardinal ? '#1e3a8a' : '#0369a1'}
                      className="select-none font-mono"
                    >
                      {deg}°
                    </text>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Pratinjau Busur Goresan Pensil Jangka Saat Diputar */}
          {liveCompassPoints.length > 1 && (
            <svg
              style={{
                position: 'absolute',
                left: `${-compass.radiusPx - 10}px`,
                top: `${-compass.radiusPx - 10}px`,
                width: `${(compass.radiusPx + 10) * 2}px`,
                height: `${(compass.radiusPx + 10) * 2}px`,
                pointerEvents: 'none',
                overflow: 'visible',
              }}
            >
              <path
                d={liveCompassPoints.reduce((acc, pt, i) => {
                  const svgX = pt[0] + compass.radiusPx + 10;
                  const svgY = pt[1] + compass.radiusPx + 10;
                  return i === 0 ? `M ${svgX} ${svgY}` : `${acc} L ${svgX} ${svgY}`;
                }, '')}
                fill="none"
                stroke={currentColor || '#2563eb'}
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}

          {/* Handle Pensil Jangka di Keliling Lingkaran */}
          <div
            onMouseDown={(e) => {
              e.stopPropagation();
              const overlayRect = overlayRef.current?.getBoundingClientRect();
              const originX = (overlayRect?.left || 0) + compass.centerX;
              const originY = (overlayRect?.top || 0) + compass.centerY;
              const currentAngle = compass.angleDeg ?? 0;
              const rad = (currentAngle * Math.PI) / 180;
              const startClientX = originX + Math.cos(rad) * compass.radiusPx;
              const startClientY = originY + Math.sin(rad) * compass.radiusPx;
              const startPt = clientToCanvas ? clientToCanvas(startClientX, startClientY) : { x: startClientX, y: startClientY };
              compassDrawPointsRef.current = [[startPt.x, startPt.y]];
              setLiveCompassPoints([[Math.cos(rad) * compass.radiusPx, Math.sin(rad) * compass.radiusPx]]);
              setActiveDrag('compass-pencil');
            }}
            style={{
              position: 'absolute',
              left: `${Math.cos(((compass.angleDeg ?? 0) * Math.PI) / 180) * compass.radiusPx}px`,
              top: `${Math.sin(((compass.angleDeg ?? 0) * Math.PI) / 180) * compass.radiusPx}px`,
              transform: 'translate(-50%, -50%)',
            }}
            className="w-7 h-7 rounded-full bg-white/90 backdrop-blur-xs border-2 border-amber-500 shadow-md flex items-center justify-center cursor-grab active:cursor-grabbing hover:scale-110 transition-transform pointer-events-auto z-10"
            title="Tahan dan putar pensil jangka ini untuk menggambar lingkaran"
          >
            <span className="text-[12px] leading-none select-none">✏️</span>
          </div>

          {/* Badge Derajat Melayang Real-Time di Sebelah Pensil Jangka */}
          <div
            style={{
              position: 'absolute',
              left: `${Math.cos(((compass.angleDeg ?? 0) * Math.PI) / 180) * (compass.radiusPx + 24)}px`,
              top: `${Math.sin(((compass.angleDeg ?? 0) * Math.PI) / 180) * (compass.radiusPx + 24)}px`,
              transform: 'translate(-50%, -50%)',
            }}
            className="px-1.5 py-0.5 rounded-full bg-amber-500/95 text-white font-mono text-[9px] font-bold shadow-md pointer-events-none select-none border border-amber-300 backdrop-blur-xs z-10"
          >
            {Math.round(compass.angleDeg ?? 0)}°
          </div>

          {/* Panel Kontrol Jangka Bertema Kucing (See-Through & Dapat Dipindahkan Bebas) */}
          <div
            style={{ transform: `translate(${compassPanelOffset.x}px, ${compassPanelOffset.y}px)` }}
            className="absolute bg-white/45 backdrop-blur-md shadow-2xl border-2 border-sky-300/80 rounded-2xl p-3 flex flex-col gap-2.5 w-56 text-slate-800 pointer-events-auto z-20 select-none transition-shadow"
          >
            <div
              onMouseDown={(e) => {
                e.stopPropagation();
                panelDragStartRef.current = {
                  startClientX: e.clientX,
                  startClientY: e.clientY,
                  initialX: compassPanelOffset.x,
                  initialY: compassPanelOffset.y,
                };
                setActiveDrag('compass-panel');
              }}
              className="flex items-center justify-between text-xs font-bold border-b border-sky-200/60 pb-1.5 cursor-move hover:bg-sky-100/50 rounded-xl px-1.5 py-1 transition"
              title="Tahan dan geser untuk memindahkan box pengaturan ini"
            >
              <span className="flex items-center gap-1.5 text-blue-700 font-bold">
                <span>🐱</span>
                <span>Jangka Putar Meow</span>
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onUpdateCompass({ isVisible: false });
                }}
                className="p-1 text-slate-500 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition cursor-pointer"
                title="Tutup Jangka"
              >
                <X size={14} />
              </button>
            </div>

            {/* Pengaturan Radius Skala Centimeter (cm) */}
            <div className="flex flex-col gap-1 text-[11px]">
              <div className="flex justify-between font-semibold text-slate-700">
                <span>Jari-jari Lingkaran (r):</span>
                <span className="font-mono font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200/60">
                  {(compass.radiusPx / 35).toFixed(1)} cm
                </span>
              </div>
              <input
                type="range"
                min={1.0}
                max={8.0}
                step={0.1}
                value={Number((compass.radiusPx / 35).toFixed(1))}
                onChange={(e) =>
                  onUpdateCompass({ radiusPx: Math.round(Number(e.target.value) * 35) })
                }
                className="w-full accent-blue-600 cursor-pointer"
              />

              {/* Tombol Pintas Preset Jari-jari (cm) */}
              <div className="flex items-center justify-between gap-1 pt-1">
                {[2.0, 3.0, 4.0, 5.0].map((cm) => (
                  <button
                    key={cm}
                    onClick={() => onUpdateCompass({ radiusPx: Math.round(cm * 35) })}
                    className={`px-1.5 py-0.5 text-[10px] font-mono rounded-lg border transition cursor-pointer ${
                      Math.abs(compass.radiusPx / 35 - cm) < 0.15
                        ? 'bg-blue-600 text-white font-bold border-blue-600 shadow-2xs'
                        : 'bg-white/70 hover:bg-white text-slate-700 border-slate-200'
                    }`}
                  >
                    {cm.toFixed(1)} cm
                  </button>
                ))}
              </div>
            </div>

            {/* Informasi Derajat Putaran Aktif */}
            <div className="flex items-center justify-between text-[11px] font-semibold text-slate-700 border-t border-sky-200/50 pt-1.5">
              <span>Sudut Putaran:</span>
              <span className="font-mono font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200/60">
                {Math.round(compass.angleDeg || 0)}°
              </span>
            </div>

            <button
              onClick={handleDrawWithCompass}
              className="w-full py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition active:scale-95 cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>🐾</span>
              <span>Buat Lingkaran Penuh</span>
            </button>
          </div>
        </div>
      )}

      {/* BUSUR DERAJAT VIRTUAL */}
      {protractor.isVisible && (
        <div
          style={{
            transform: `translate(${protractor.x}px, ${protractor.y}px) rotate(${protractor.angleDeg}deg)`,
            width: `${protractor.radiusPx * 2}px`,
            height: `${protractor.radiusPx}px`,
          }}
          className="pointer-events-auto absolute top-0 left-0 bg-sky-100/70 backdrop-blur-sm border-2 border-sky-400 rounded-t-full shadow-2xl flex flex-col justify-end items-center p-2 cursor-move select-none"
          onMouseDown={handleProtractorMouseDown}
        >
          {/* Garis-garis Derajat */}
          <div className="absolute inset-0 rounded-t-full overflow-hidden pointer-events-none">
            {[0, 30, 45, 60, 90, 120, 135, 150, 180].map((deg) => {
              const rad = (deg * Math.PI) / 180;
              const x1 = protractor.radiusPx + Math.cos(rad) * (protractor.radiusPx - 15);
              const y1 = protractor.radiusPx - Math.sin(rad) * (protractor.radiusPx - 15);
              return (
                <div
                  key={deg}
                  style={{
                    position: 'absolute',
                    left: `${x1}px`,
                    top: `${y1}px`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  className="text-[9px] font-mono font-bold text-sky-900"
                >
                  {deg}°
                </div>
              );
            })}
          </div>

          <div
            onMouseDown={(e) => e.stopPropagation()}
            className="flex items-center gap-2 bg-white/90 px-3 py-1 rounded-full shadow-sm text-xs font-semibold text-sky-900 mb-1 pointer-events-auto"
          >
            <span>Busur Derajat (180°)</span>
            <button
              onClick={() =>
                onUpdateProtractor({ angleDeg: (protractor.angleDeg + 15) % 360 })
              }
              className="p-1 hover:bg-sky-100 rounded"
              title="Putar Busur"
            >
              <RotateCw size={12} />
            </button>
            <button
              onClick={() => onUpdateProtractor({ isVisible: false })}
              className="p-1 hover:bg-red-100 text-red-600 rounded"
              title="Tutup Busur"
            >
              <X size={12} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
