import React, { useState, useRef } from 'react';
import {
  PERIODIC_TABLE_ELEMENTS,
  PHYSICAL_CONSTANTS,
  CATEGORY_COLORS,
  searchElements,
  type ElementData,
  type ElementCategory,
} from '../../services/periodicTableService';
import { X, Search, Copy, Check, Table, Compass, ExternalLink } from 'lucide-react';

interface PeriodicTableDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onInsertText?: (textToInsert: string) => void;
}

export const PeriodicTableDrawer: React.FC<PeriodicTableDrawerProps> = ({
  isOpen,
  onClose,
  onInsertText,
}) => {
  const [activeTab, setActiveTab] = useState<'elements' | 'constants'>('elements');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ElementCategory | 'all'>('all');
  const [selectedElement, setSelectedElement] = useState<ElementData | null>(PERIODIC_TABLE_ELEMENTS['C'] || null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Width resizing state & handlers (drag from left edge)
  const [drawerWidth, setDrawerWidth] = useState<number>(() =>
    Math.min(680, typeof window !== 'undefined' ? window.innerWidth - 40 : 680)
  );
  const [isResizing, setIsResizing] = useState(false);
  const resizeStartRef = useRef<{ startX: number; startW: number } | null>(null);

  const handleResizePointerDown = (e: React.PointerEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsResizing(true);
    resizeStartRef.current = {
      startX: e.clientX,
      startW: drawerWidth,
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
    const minW = 420;
    const maxW = Math.min(1200, window.innerWidth - 30);
    const newW = Math.min(Math.max(minW, resizeStartRef.current.startW - deltaX), maxW);
    setDrawerWidth(newW);
  };

  const handleResizePointerUp = (e: React.PointerEvent) => {
    setIsResizing(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  if (!isOpen) return null;

  const elementsList = searchElements(searchQuery).filter((el) => {
    if (selectedCategory === 'all') return true;
    return el.category === selectedCategory;
  });

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    if (onInsertText) {
      onInsertText(text);
    }
    setTimeout(() => setCopiedId(null), 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/30 backdrop-blur-xs transition-opacity">
      <div
        style={{ width: `${drawerWidth}px` }}
        className="w-full max-w-[95vw] h-full bg-white shadow-2xl flex flex-col border-l border-slate-200 animate-in slide-in-from-right duration-200 relative"
      >
        {/* Left Edge Resize Drag Handle */}
        <div
          onPointerDown={handleResizePointerDown}
          onPointerMove={handleResizePointerMove}
          onPointerUp={handleResizePointerUp}
          className="absolute top-0 bottom-0 -left-2 w-4 cursor-ew-resize hover:bg-sky-500/20 active:bg-sky-500/40 transition-colors z-30 touch-none flex items-center justify-center group select-none"
          title="Tarik untuk mengubah lebar panel tabel periodik"
        >
          <div className="w-1 h-12 rounded-full bg-slate-300 group-hover:bg-sky-500 group-active:bg-sky-600 transition-colors" />
        </div>
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 bg-slate-50/80">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
              ⚛
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">Referensi Kimia & Tetapan</h2>
              <p className="text-xs text-slate-500">Standar Olimpiade Sains Nasional & IChO</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 px-5 bg-white text-xs font-semibold">
          <button
            onClick={() => setActiveTab('elements')}
            className={`flex items-center gap-1.5 py-3 border-b-2 mr-6 transition-all ${
              activeTab === 'elements'
                ? 'border-sky-500 text-sky-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Table className="w-3.5 h-3.5" />
            <span>Tabel Periodik Unsur</span>
          </button>
          <button
            onClick={() => setActiveTab('constants')}
            className={`flex items-center gap-1.5 py-3 border-b-2 transition-all ${
              activeTab === 'constants'
                ? 'border-sky-500 text-sky-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Konstanta & Tetapan Fisika</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {activeTab === 'elements' ? (
            <>
              {/* Search and Category Filter */}
              <div className="space-y-2.5">
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari simbol, nama unsur (misal: Fe, Besi, 26)..."
                    className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all placeholder:text-slate-400"
                  />
                </div>

                {/* Category Pill Filters */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px]">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-2 py-0.5 rounded-full font-medium transition-colors ${
                      selectedCategory === 'all'
                        ? 'bg-slate-800 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Semua
                  </button>
                  {Object.entries(CATEGORY_COLORS).map(([catKey, val]) => (
                    <button
                      key={catKey}
                      onClick={() => setSelectedCategory(catKey as ElementCategory)}
                      className={`px-2 py-0.5 rounded-full font-medium whitespace-nowrap transition-colors ${
                        selectedCategory === catKey
                          ? 'bg-emerald-700 text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {val.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected Element Quick Inspector Card */}
              {selectedElement && (
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 bg-white border border-slate-300 rounded-lg flex flex-col items-center justify-center shadow-xs">
                        <span className="text-[10px] text-slate-400 font-mono leading-none">{selectedElement.num}</span>
                        <span className="text-xl font-bold font-mono text-slate-900 leading-tight">{selectedElement.sym}</span>
                        <span className="text-[9px] text-slate-500 font-mono leading-none">{selectedElement.mass.toFixed(2)}</span>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">
                          {selectedElement.nameId}{' '}
                          <span className="text-xs font-normal text-slate-500">({selectedElement.name})</span>
                        </h3>
                        <p className="text-xs text-slate-600">
                          {CATEGORY_COLORS[selectedElement.category]?.name} • Periode {selectedElement.period}, Golongan {selectedElement.group}
                        </p>
                        {selectedElement.electronConfig && (
                          <p className="text-xs font-mono text-emerald-700 mt-0.5">
                            Konfig: {selectedElement.electronConfig}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Quick Insert Buttons */}
                    <div className="flex flex-col gap-1 text-xs">
                      <button
                        onClick={() => handleCopy(`${selectedElement.mass}`, 'ar')}
                        className="inline-flex items-center gap-1 px-2.5 py-1 bg-white hover:bg-sky-50 text-sky-800 border border-sky-200 rounded-md font-medium transition-all shadow-2xs"
                      >
                        {copiedId === 'ar' ? <Check className="w-3 h-3 text-sky-600" /> : <Copy className="w-3 h-3" />}
                        <span>Salin Aᵣ ({selectedElement.mass})</span>
                      </button>
                      <button
                        onClick={() => handleCopy(selectedElement.sym, 'sym')}
                        className="inline-flex items-center gap-1 px-2.5 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-md font-medium transition-all shadow-2xs"
                      >
                        {copiedId === 'sym' ? <Check className="w-3 h-3 text-sky-600" /> : <Copy className="w-3 h-3" />}
                        <span>Salin Simbol ({selectedElement.sym})</span>
                      </button>
                    </div>
                  </div>

                  {/* Chemical Parameters Grid */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200 text-xs">
                    <div className="bg-white p-2 rounded-lg border border-slate-200/80">
                      <div className="text-[10px] text-slate-400">Elektronegativitas</div>
                      <div className="font-semibold text-slate-800">{selectedElement.electronegativity ?? '—'}</div>
                    </div>
                    <div className="bg-white p-2 rounded-lg border border-slate-200/80">
                      <div className="text-[10px] text-slate-400">Biloks Umum</div>
                      <div className="font-semibold text-slate-800">{selectedElement.oxidationStates ?? '0'}</div>
                    </div>
                    <div className="bg-white p-2 rounded-lg border border-slate-200/80">
                      <div className="text-[10px] text-slate-400">Massa Molar (g/mol)</div>
                      <div className="font-semibold text-sky-700">{selectedElement.mass}</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Elements Grid List */}
              <div className="space-y-1.5">
                <div className="text-xs font-semibold text-slate-500 flex items-center justify-between">
                  <span>Daftar Unsur Kimia ({elementsList.length})</span>
                  <span className="text-[11px] font-normal text-slate-400">Klik unsur untuk melihat detail</span>
                </div>

                <div className="grid grid-cols-4 sm:grid-cols-6 gap-1.5">
                  {elementsList.map((el) => {
                    const catColor = CATEGORY_COLORS[el.category];
                    const isSelected = selectedElement?.sym === el.sym;

                    return (
                      <button
                        key={el.sym}
                        onClick={() => setSelectedElement(el)}
                        className={`p-2 rounded-lg border text-center transition-all flex flex-col items-center justify-center ${
                          catColor.bg
                        } ${catColor.border} ${
                          isSelected ? 'ring-2 ring-sky-500 shadow-xs' : 'hover:scale-102'
                        }`}
                      >
                        <span className="text-[10px] text-slate-400 font-mono">{el.num}</span>
                        <span className={`text-base font-bold font-mono ${catColor.text}`}>{el.sym}</span>
                        <span className="text-[10px] text-slate-600 truncate w-full font-medium">{el.nameId}</span>
                        <span className="text-[9px] text-slate-400 font-mono">{el.mass.toFixed(1)}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </>
          ) : (
            /* Constants Tab */
            <div className="space-y-3">
              <p className="text-xs text-slate-500">
                Tetapan resmi yang diperkenankan dalam perhitungan Olimpiade Sains Nasional Kimia:
              </p>

              <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden bg-white">
                {PHYSICAL_CONSTANTS.map((c) => (
                  <div key={c.symbol} className="p-3 hover:bg-slate-50 transition-colors flex items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-1.5 py-0.5 bg-slate-100 font-mono text-xs font-bold text-sky-800 rounded">
                          {c.symbol}
                        </span>
                        <span className="text-xs font-bold text-slate-900">{c.name}</span>
                      </div>
                      <div className="text-xs font-mono font-semibold text-slate-700 mt-1">
                        {c.value} <span className="text-slate-500 font-sans">{c.unit}</span>
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{c.description}</div>
                    </div>

                    <button
                      onClick={() => handleCopy(c.value, c.symbol)}
                      className="inline-flex items-center gap-1 px-2 py-1 text-xs text-slate-700 bg-slate-50 hover:bg-sky-50 hover:text-sky-800 border border-slate-200 hover:border-sky-300 rounded-md font-medium transition-all shrink-0"
                      title="Salin nilai tetapan"
                    >
                      {copiedId === c.symbol ? <Check className="w-3 h-3 text-sky-600" /> : <Copy className="w-3 h-3" />}
                      <span>Salin</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>Nilai Ar mengacu pada standar IUPAC & Puspresnas</span>
          <button onClick={onClose} className="px-3 py-1 bg-white border border-slate-300 rounded-md hover:bg-slate-100 text-slate-700 font-medium">
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
