import React, { useState } from 'react';
import { FlaskConical, Atom, RefreshCw, X } from 'lucide-react';
import type { WhiteboardElement } from '../../../types/whiteboard';

interface ChemToolboxProps {
  isOpen: boolean;
  onClose: () => void;
  onAddElement: (element: Partial<WhiteboardElement>) => void;
  currentColor: string;
}

export const ChemToolbox: React.FC<ChemToolboxProps> = ({
  isOpen,
  onClose,
  onAddElement,
  currentColor,
}) => {
  const [selectedTab, setSelectedTab] = useState<'rings' | 'stereochem' | 'arrows'>('rings');

  if (!isOpen) return null;

  const ringPresets = [
    { label: 'Cincin Benzena (Aromatik)', structure: 'benzene', desc: 'Heksagon dengan awan elektron π' },
    { label: 'Sikloheksana Kursi (Chair)', structure: 'cyclohexane_chair', desc: 'Konformasi stabil bebas tegangan' },
  ];

  const stereochemPresets = [
    { label: 'Ikatan Baji Tebal (Solid Wedge)', structure: 'solid_wedge', desc: 'Menghadap ke depan pengamat' },
    { label: 'Ikatan Baji Garis (Dashed Wedge)', structure: 'dashed_wedge', desc: 'Menjauh ke belakang bidang' },
  ];

  const arrowPresets = [
    { label: 'Panah Kesetimbangan (⇌)', structure: 'equilibrium_arrow', desc: 'Reaksi reversibel bolak-balik' },
  ];

  const handleAddStructure = (structure: string) => {
    let w = 80;
    let h = 80;

    if (structure === 'cyclohexane_chair') {
      w = 100;
      h = 60;
    } else if (structure === 'solid_wedge' || structure === 'dashed_wedge') {
      w = 70;
      h = 24;
    } else if (structure === 'equilibrium_arrow') {
      w = 90;
      h = 30;
    }

    onAddElement({
      type: 'chem_molecule',
      width: w,
      height: h,
      color: currentColor || '#0f172a',
      strokeWidth: 2,
      opacity: 1,
      isLocked: false,
      zIndex: 1,
      payload: { structure },
    });
    onClose();
  };

  return (
    <div className="absolute top-20 left-1/2 -translate-x-1/2 z-50 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200 p-4 w-96 text-slate-800 animate-in fade-in zoom-in-95 duration-150">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-emerald-100 text-emerald-600 rounded-lg">
            <FlaskConical size={20} />
          </div>
          <div>
            <h3 className="font-bold text-sm text-slate-900">Toolbox Kimia Organik</h3>
            <p className="text-xs text-slate-500">Cincin benzena, ikatan baji & panah reaksi</p>
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
          onClick={() => setSelectedTab('rings')}
          className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition ${
            selectedTab === 'rings'
              ? 'bg-white text-emerald-600 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Atom size={14} />
          Cincin Karbon
        </button>
        <button
          onClick={() => setSelectedTab('stereochem')}
          className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition ${
            selectedTab === 'stereochem'
              ? 'bg-white text-emerald-600 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Stereokimia 3D
        </button>
        <button
          onClick={() => setSelectedTab('arrows')}
          className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition ${
            selectedTab === 'arrows'
              ? 'bg-white text-emerald-600 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <RefreshCw size={14} />
          Panah Reaksi
        </button>
      </div>

      <div className="grid grid-cols-1 gap-2 max-h-64 overflow-y-auto pr-1">
        {selectedTab === 'rings' &&
          ringPresets.map((r, idx) => (
            <button
              key={idx}
              onClick={() => handleAddStructure(r.structure)}
              className="p-3 text-left border border-slate-100 hover:border-emerald-300 hover:bg-emerald-50/50 rounded-xl transition flex items-center justify-between group"
            >
              <div>
                <span className="font-semibold text-xs text-slate-800 group-hover:text-emerald-600 block">
                  {r.label}
                </span>
                <span className="text-[11px] text-slate-400">{r.desc}</span>
              </div>
              <div className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg group-hover:bg-emerald-100 group-hover:text-emerald-700">
                +
              </div>
            </button>
          ))}

        {selectedTab === 'stereochem' &&
          stereochemPresets.map((s, idx) => (
            <button
              key={idx}
              onClick={() => handleAddStructure(s.structure)}
              className="p-3 text-left border border-slate-100 hover:border-emerald-300 hover:bg-emerald-50/50 rounded-xl transition flex items-center justify-between group"
            >
              <div>
                <span className="font-semibold text-xs text-slate-800 group-hover:text-emerald-600 block">
                  {s.label}
                </span>
                <span className="text-[11px] text-slate-400">{s.desc}</span>
              </div>
              <div className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg group-hover:bg-emerald-100 group-hover:text-emerald-700">
                +
              </div>
            </button>
          ))}

        {selectedTab === 'arrows' &&
          arrowPresets.map((a, idx) => (
            <button
              key={idx}
              onClick={() => handleAddStructure(a.structure)}
              className="p-3 text-left border border-slate-100 hover:border-emerald-300 hover:bg-emerald-50/50 rounded-xl transition flex items-center justify-between group"
            >
              <div>
                <span className="font-semibold text-xs text-slate-800 group-hover:text-emerald-600 block">
                  {a.label}
                </span>
                <span className="text-[11px] text-slate-400">{a.desc}</span>
              </div>
              <div className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg group-hover:bg-emerald-100 group-hover:text-emerald-700">
                +
              </div>
            </button>
          ))}
      </div>
    </div>
  );
};
