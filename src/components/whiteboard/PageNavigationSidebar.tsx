import React from 'react';
import { Plus, Trash2, FileText, ChevronRight } from 'lucide-react';
import type { PageDefinition } from '../../types/whiteboard';

interface PageNavigationSidebarProps {
  pages: PageDefinition[];
  currentPageIndex: number;
  onSelectPage: (index: number) => void;
  onAddPage: () => void;
  onDeletePage: (index: number) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export const PageNavigationSidebar: React.FC<PageNavigationSidebarProps> = ({
  pages,
  currentPageIndex,
  onSelectPage,
  onAddPage,
  onDeletePage,
  isOpen,
  onToggle,
}) => {
  const pageList = Array.isArray(pages) ? pages : [];

  return (
    <aside
      className={`fixed right-3.5 top-20 bottom-8 z-30 flex flex-row-reverse transition-all duration-300 pointer-events-auto ${
        isOpen ? 'translate-x-0' : 'translate-x-[calc(100%-24px)]'
      }`}
    >
      <div className="w-56 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200 p-3 flex flex-col justify-between overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
            <FileText size={16} className="text-blue-600" />
            <span>Halaman ({pageList.length})</span>
          </div>
          <button
            onClick={onAddPage}
            className="p-1 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg transition cursor-pointer"
            title="Tambah Halaman Baru"
          >
            <Plus size={16} />
          </button>
        </div>

        {/* List Halaman */}
        <div className="flex-1 overflow-y-auto space-y-1.5 py-2 pr-1">
          {pageList.map((page, idx) => {
            const isActive = idx === currentPageIndex;
            return (
              <div
                key={page.pageIndex}
                onClick={() => onSelectPage(idx)}
                className={`group relative p-2 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                  isActive
                    ? 'border-blue-500 bg-blue-50/80 shadow-2xs text-blue-900 font-bold ring-1 ring-blue-400/30'
                    : 'border-slate-200/90 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`w-6 h-7 rounded-lg border flex items-center justify-center text-[10px] font-bold shadow-2xs transition ${
                      isActive
                        ? 'border-blue-500 bg-blue-600 text-white'
                        : 'border-slate-300 bg-white text-slate-600 group-hover:border-slate-400'
                    }`}
                  >
                    {idx + 1}
                  </div>
                  <div className="text-xs font-semibold flex items-center gap-1.5">
                    <span>Halaman {idx + 1}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                  </div>
                </div>

                {pages.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeletePage(idx);
                    }}
                    className="p-1 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg opacity-0 group-hover:opacity-100 transition cursor-pointer"
                    title="Hapus Halaman Ini"
                  >
                    <Trash2 size={13} />
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Tombol Tambah */}
        <button
          onClick={onAddPage}
          className="w-full py-2.5 bg-blue-50/70 hover:bg-blue-100 text-blue-700 font-bold text-xs rounded-xl border border-blue-200/80 transition flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs active:scale-95"
        >
          <Plus size={14} /> <span>Tambah Halaman Baru</span>
        </button>
      </div>

      {/* Toggle Button Tab */}
      <button
        onClick={onToggle}
        className="self-center -mr-1 w-6 h-12 bg-white border border-slate-200 shadow-md rounded-l-xl flex items-center justify-center text-slate-500 hover:text-blue-600 transition z-10"
        title={isOpen ? 'Tutup Daftar Halaman' : 'Buka Daftar Halaman'}
      >
        <ChevronRight
          size={14}
          className={`transform transition-transform ${isOpen ? '' : 'rotate-180'}`}
        />
      </button>
    </aside>
  );
};
