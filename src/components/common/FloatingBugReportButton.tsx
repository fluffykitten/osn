import React, { useState, useEffect } from 'react';
import { Bug, ChevronRight, X, Minus } from 'lucide-react';
import { BugReportModal } from './BugReportModal';

const MINIMIZED_PREF_KEY = 'osn_bug_widget_minimized';

export const FloatingBugReportButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(() => {
    try {
      return localStorage.getItem(MINIMIZED_PREF_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const [prefilledSection, setPrefilledSection] = useState<string | undefined>();
  const [prefilledError, setPrefilledError] = useState<string | undefined>();

  // Dengarkan custom event dari Navbar, ErrorBoundary, atau halaman mana pun
  useEffect(() => {
    const handleOpenModal = (event: CustomEvent<{ section?: string; error?: string }>) => {
      if (event.detail) {
        setPrefilledSection(event.detail.section);
        setPrefilledError(event.detail.error);
      }
      setIsOpen(true);
    };

    window.addEventListener('open-bug-report-modal' as any, handleOpenModal as any);
    return () => {
      window.removeEventListener('open-bug-report-modal' as any, handleOpenModal as any);
    };
  }, []);

  const toggleMinimize = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = !isMinimized;
    setIsMinimized(next);
    try {
      localStorage.setItem(MINIMIZED_PREF_KEY, String(next));
    } catch {}
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-5 right-5 z-40 print:hidden select-none">
        {isMinimized ? (
          /* Versi Minimalis: Ikon Bundar Mungil */
          <button
            onClick={() => setIsOpen(true)}
            className="w-10 h-10 rounded-full bg-[#708090] text-[#FFFFF0] border-2 border-[#FFFFF0] shadow-lg flex items-center justify-center hover:bg-[#5C6D7D] hover:scale-105 active:scale-95 transition-all cursor-pointer group"
            title="Laporkan Kendala atau Bug pada Halaman Ini"
          >
            <Bug className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            {/* Tooltip on hover */}
            <span className="absolute right-12 px-2.5 py-1 bg-slate-900 text-white text-[11px] rounded-md font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
              Laporkan Bug
            </span>
          </button>
        ) : (
          /* Versi Elegan: Pill Badge dengan Tombol Minimize */
          <div className="flex items-center shadow-lg rounded-full bg-[#708090] text-[#FFFFF0] border border-[#B0C4DE]/60 overflow-hidden group">
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 pl-3.5 pr-2.5 py-2 hover:bg-[#5C6D7D] transition cursor-pointer active:scale-95"
            >
              <div className="w-5 h-5 rounded-full bg-[#FFFFF0] text-[#708090] flex items-center justify-center font-bold">
                <Bug className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold tracking-tight font-display">Laporkan Bug</span>
            </button>

            <button
              onClick={toggleMinimize}
              className="px-2 py-2 hover:bg-black/20 text-[#B0C4DE] hover:text-white transition cursor-pointer border-l border-[#5A6B7C]"
              title="Kecilkan tombol"
              aria-label="Kecilkan tombol bug report"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Modal Laporan Bug */}
      <BugReportModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          setPrefilledSection(undefined);
          setPrefilledError(undefined);
        }}
        prefilledSection={prefilledSection}
        prefilledError={prefilledError}
      />
    </>
  );
};
