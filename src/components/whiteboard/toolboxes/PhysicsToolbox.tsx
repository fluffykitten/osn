import React, { useState } from 'react';
import { Zap, Activity, ArrowUpRight, X } from 'lucide-react';
import type { WhiteboardElement } from '../../../types/whiteboard';

interface PhysicsToolboxProps {
  isOpen: boolean;
  onClose: () => void;
  onAddElement: (element: Partial<WhiteboardElement>) => void;
  currentColor: string;
}

export const PhysicsToolbox: React.FC<PhysicsToolboxProps> = ({
  isOpen,
  onClose,
  onAddElement,
  currentColor,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'circuits' | 'mechanics' | 'optics'>('circuits');
  const [vectorLabel, setVectorLabel] = useState('F');

  if (!isOpen) return null;

  const circuitPresets = [
    { label: 'Resistor (Hambatan)', symbol: 'resistor', desc: 'Simbol zig-zag rangkaian listrik' },
    { label: 'Sumber Tegangan (Baterai)', symbol: 'battery', desc: 'Plat positif panjang & negatif pendek' },
    { label: 'Kapasitor', symbol: 'capacitor', desc: 'Dua plat konduktor sejajar' },
    { label: 'Saklar Terbuka', symbol: 'switch', desc: 'Kontak pemutus arus listrik' },
  ];

  const mechanicsPresets = [
    { label: 'Bidang Miring & Balok', symbol: 'inclined_plane', desc: 'Sistem dinamika gaya normal & gesek' },
    { label: 'Vektor Gaya Berarah', symbol: 'vector', desc: 'Panah vektor resultan berlabel' },
  ];

  const opticsPresets = [
    { label: 'Lensa Cembung (Konveks)', symbol: 'lens_convex', desc: 'Lensa konvergen berkas sinar sejajar' },
  ];

  const handleAddSymbol = (symbol: string, label?: string) => {
    let w = 90;
    let h = 45;

    if (symbol === 'inclined_plane') {
      w = 140;
      h = 90;
    } else if (symbol === 'lens_convex') {
      w = 60;
      h = 130;
    } else if (symbol === 'vector') {
      w = 110;
      h = 70;
    }

    onAddElement({
      type: 'physics_symbol',
      width: w,
      height: h,
      color: currentColor || '#2563eb',
      strokeWidth: 2,
      opacity: 1,
      isLocked: false,
      zIndex: 1,
      payload: { symbol, label: label || vectorLabel },
    });
    onClose();
  };

  return (
    <div className="absolute top-20 left-1/2 -translate-x-1/2 z-50 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200 p-4 w-96 text-slate-800 animate-in fade-in zoom-in-95 duration-150">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-amber-100 text-amber-600 rounded-lg">
            <Zap size={20} />
          </div>
          <div>
            <h3 className="font-bold text-sm text-slate-900">Toolbox Fisika</h3>
            <p className="text-xs text-slate-500">Rangkaian listrik, vektor & mekanika</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
        >
          <X size={18} />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 p-1 bg-slate-100 rounded-xl mt-3 mb-3 text-xs font-semibold">
        <button
          onClick={() => setSelectedCategory('circuits')}
          className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition ${
            selectedCategory === 'circuits'
              ? 'bg-white text-amber-600 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Zap size={14} />
          Sirkuit
        </button>
        <button
          onClick={() => setSelectedCategory('mechanics')}
          className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition ${
            selectedCategory === 'mechanics'
              ? 'bg-white text-amber-600 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <ArrowUpRight size={14} />
          Mekanika
        </button>
        <button
          onClick={() => setSelectedCategory('optics')}
          className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition ${
            selectedCategory === 'optics'
              ? 'bg-white text-amber-600 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Activity size={14} />
          Optik
        </button>
      </div>

      {selectedCategory === 'circuits' && (
        <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto pr-1">
          {circuitPresets.map((c, idx) => (
            <button
              key={idx}
              onClick={() => handleAddSymbol(c.symbol)}
              className="p-2.5 text-left border border-slate-100 hover:border-amber-300 hover:bg-amber-50/50 rounded-xl transition flex flex-col group"
            >
              <span className="font-semibold text-xs text-slate-800 group-hover:text-amber-600">
                {c.label}
              </span>
              <span className="text-[10px] text-slate-400 mt-1">{c.desc}</span>
            </button>
          ))}
        </div>
      )}

      {selectedCategory === 'mechanics' && (
        <div className="space-y-2">
          <div className="grid grid-cols-1 gap-2">
            {mechanicsPresets.map((m, idx) => (
              <button
                key={idx}
                onClick={() => handleAddSymbol(m.symbol)}
                className="p-3 text-left border border-slate-100 hover:border-amber-300 hover:bg-amber-50/50 rounded-xl transition flex items-center justify-between group"
              >
                <div>
                  <span className="font-semibold text-xs text-slate-800 group-hover:text-amber-600 block">
                    {m.label}
                  </span>
                  <span className="text-[11px] text-slate-400">{m.desc}</span>
                </div>
                <div className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg group-hover:bg-amber-100 group-hover:text-amber-700">
                  +
                </div>
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
            <span className="text-xs text-slate-500 font-medium">Label Vektor:</span>
            <input
              type="text"
              value={vectorLabel}
              onChange={(e) => setVectorLabel(e.target.value)}
              placeholder="F, v, a, N..."
              className="w-16 px-2 py-1 text-xs text-center font-bold rounded-lg border border-slate-200 focus:outline-none focus:border-amber-500"
            />
            <button
              onClick={() => handleAddSymbol('vector', vectorLabel)}
              className="flex-1 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-semibold shadow-sm transition"
            >
              Tambah Vektor {vectorLabel}
            </button>
          </div>
        </div>
      )}

      {selectedCategory === 'optics' && (
        <div className="grid grid-cols-1 gap-2">
          {opticsPresets.map((o, idx) => (
            <button
              key={idx}
              onClick={() => handleAddSymbol(o.symbol)}
              className="p-3 text-left border border-slate-100 hover:border-amber-300 hover:bg-amber-50/50 rounded-xl transition flex items-center justify-between group"
            >
              <div>
                <span className="font-semibold text-xs text-slate-800 group-hover:text-amber-600 block">
                  {o.label}
                </span>
                <span className="text-[11px] text-slate-400">{o.desc}</span>
              </div>
              <div className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg group-hover:bg-amber-100 group-hover:text-amber-700">
                +
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
