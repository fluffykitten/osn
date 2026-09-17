import React from 'react';
import { ZoomIn, ZoomOut } from 'lucide-react';

export type CanvasScale = 0.75 | 1.0 | 1.25;

interface ScalePresetToggleProps {
  scale: CanvasScale;
  onChange: (newScale: CanvasScale) => void;
  className?: string;
  size?: 'sm' | 'md';
}

export const ScalePresetToggle: React.FC<ScalePresetToggleProps> = ({
  scale,
  onChange,
  className = '',
  size = 'md',
}) => {
  const presets: { value: CanvasScale; label: string; hint: string }[] = [
    { value: 0.75, label: '75%', hint: 'Kompak (Layar kecil / Split)' },
    { value: 1.0, label: '100%', hint: 'Standar Optimal' },
    { value: 1.25, label: '125%', hint: 'Besar (Proyektor / Baca Jelas)' },
  ];

  const handleStepDown = () => {
    if (scale === 1.25) onChange(1.0);
    else if (scale === 1.0) onChange(0.75);
  };

  const handleStepUp = () => {
    if (scale === 0.75) onChange(1.0);
    else if (scale === 1.0) onChange(1.25);
  };

  const isSmall = size === 'sm';

  return (
    <div
      className={`inline-flex items-center gap-1 bg-slate-100/90 p-1 rounded-xl border border-slate-200/80 shadow-2xs ${className}`}
      role="group"
      aria-label="Skala Kanvas Dokumen"
    >
      <button
        type="button"
        onClick={handleStepDown}
        disabled={scale === 0.75}
        className="p-1 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-white disabled:opacity-30 disabled:hover:bg-transparent transition-all cursor-pointer"
        title="Perkecil Skala (75%)"
      >
        <ZoomOut className={isSmall ? 'w-3.5 h-3.5' : 'w-4 h-4'} />
      </button>

      <div className="flex items-center gap-0.5 bg-slate-200/60 p-0.5 rounded-lg">
        {presets.map((p) => {
          const isActive = scale === p.value;
          return (
            <button
              key={p.value}
              type="button"
              onClick={() => onChange(p.value)}
              className={`px-2 py-0.5 rounded-md font-mono font-bold transition-all ${
                isSmall ? 'text-[10px]' : 'text-xs'
              } ${
                isActive
                  ? 'bg-white text-slate-900 shadow-2xs ring-1 ring-slate-300'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
              title={`${p.label} - ${p.hint}`}
            >
              {p.label}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={handleStepUp}
        disabled={scale === 1.25}
        className="p-1 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-white disabled:opacity-30 disabled:hover:bg-transparent transition-all cursor-pointer"
        title="Perbesar Skala (125%)"
      >
        <ZoomIn className={isSmall ? 'w-3.5 h-3.5' : 'w-4 h-4'} />
      </button>
    </div>
  );
};
