import React from 'react';
import type { LiveHighlightItem, HighlightColor } from '../../types/database';
import { X } from 'lucide-react';

interface HighlightOverlayProps {
  highlights: LiveHighlightItem[];
  onRemoveHighlight?: (id: string) => void;
  readOnly?: boolean;
}

const COLOR_STYLES: Record<HighlightColor, { bg: string; border: string; pill: string }> = {
  yellow: {
    bg: 'bg-amber-300/45',
    border: 'border border-amber-300/30',
    pill: 'bg-amber-500 text-white',
  },
  pink: {
    bg: 'bg-pink-300/45',
    border: 'border border-pink-300/30',
    pill: 'bg-pink-500 text-white',
  },
  green: {
    bg: 'bg-emerald-300/45',
    border: 'border border-emerald-300/30',
    pill: 'bg-emerald-600 text-white',
  },
  blue: {
    bg: 'bg-sky-200/55',
    border: 'border border-sky-300/30',
    pill: 'bg-sky-500 text-white',
  },
};

export const HighlightOverlay: React.FC<HighlightOverlayProps> = ({
  highlights,
  onRemoveHighlight,
  readOnly = true,
}) => {
  if (!highlights || highlights.length === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-visible select-none">
      {highlights.map((hl) => {
        const theme = COLOR_STYLES[hl.color] || COLOR_STYLES.yellow;

        return (
          <React.Fragment key={hl.id}>
            {hl.rects.map((rect, idx) => {
              const isFirstRect = idx === 0;

              return (
                <div
                  key={`${hl.id}-rect-${idx}`}
                  className={`absolute rounded-[3px] pointer-events-none transition-opacity duration-150 animate-in fade-in-50 mix-blend-multiply ${theme.bg} ${theme.border}`}
                  style={{
                    left: `${rect.left_pct}%`,
                    top: `${rect.top_pct}%`,
                    width: `${Math.max(0.5, rect.width_pct)}%`,
                    height: `${Math.max(0.5, rect.height_pct)}%`,
                  }}
                >
                  {/* Delete button indicator for teacher if hoverable */}
                  {!readOnly && isFirstRect && onRemoveHighlight && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemoveHighlight(hl.id);
                      }}
                      className="pointer-events-auto absolute -top-3 -right-2 w-4 h-4 rounded-full bg-rose-600 text-white flex items-center justify-center text-[8px] opacity-0 hover:opacity-100 transition-opacity shadow-xs"
                      title="Hapus Sorotan Ini"
                    >
                      <X className="w-2.5 h-2.5" />
                    </button>
                  )}
                </div>
              );
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
};
