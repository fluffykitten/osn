import React, { useState } from 'react';
import { Dna, GitFork, X } from 'lucide-react';
import type { WhiteboardElement } from '../../../types/whiteboard';

interface BioToolboxProps {
  isOpen: boolean;
  onClose: () => void;
  onAddElement: (element: Partial<WhiteboardElement>) => void;
  currentColor: string;
}

export const BioToolbox: React.FC<BioToolboxProps> = ({
  isOpen,
  onClose,
  onAddElement,
  currentColor,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'pedigree' | 'anatomy'>('pedigree');

  if (!isOpen) return null;

  const pedigreePresets = [
    { label: 'Laki-laki Normal (Kotak)', stamp: 'pedigree_male', isAffected: false, desc: 'Simbol individu jantan' },
    { label: 'Laki-laki Terpapar/Sifat (Penuh)', stamp: 'pedigree_male', isAffected: true, desc: 'Individu mengekspresikan fenotipe' },
    { label: 'Perempuan Normal (Lingkaran)', stamp: 'pedigree_female', isAffected: false, desc: 'Simbol individu betina' },
    { label: 'Perempuan Terpapar/Sifat (Penuh)', stamp: 'pedigree_female', isAffected: true, desc: 'Individu mengekspresikan fenotipe' },
  ];

  const anatomyPresets = [
    { label: 'Heliks Ganda DNA', stamp: 'dna_helix', desc: 'Dua untai polinukleotida & basa' },
    { label: 'Diagram Skema Sel', stamp: 'cell_diagram', desc: 'Membran sel, inti & mitokondria' },
  ];

  const handleAddStamp = (stamp: string, isAffected = false) => {
    let w = 50;
    let h = 50;

    if (stamp === 'dna_helix') {
      w = 140;
      h = 50;
    } else if (stamp === 'cell_diagram') {
      w = 120;
      h = 90;
    }

    onAddElement({
      type: 'bio_stamp',
      width: w,
      height: h,
      color: currentColor || '#0f172a',
      strokeWidth: 2,
      opacity: 1,
      isLocked: false,
      zIndex: 1,
      payload: { stamp, isAffected },
    });
    onClose();
  };

  return (
    <div className="absolute top-20 left-1/2 -translate-x-1/2 z-50 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200 p-4 w-96 text-slate-800 animate-in fade-in zoom-in-95 duration-150">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-rose-100 text-rose-600 rounded-lg">
            <Dna size={20} />
          </div>
          <div>
            <h3 className="font-bold text-sm text-slate-900">Toolbox Biologi</h3>
            <p className="text-xs text-slate-500">Silsilah genetika (pedigree) & sel</p>
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
          onClick={() => setSelectedCategory('pedigree')}
          className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition ${
            selectedCategory === 'pedigree'
              ? 'bg-white text-rose-600 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <GitFork size={14} />
          Silsilah (Pedigree)
        </button>
        <button
          onClick={() => setSelectedCategory('anatomy')}
          className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition ${
            selectedCategory === 'anatomy'
              ? 'bg-white text-rose-600 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Dna size={14} />
          DNA & Sel
        </button>
      </div>

      <div className="grid grid-cols-1 gap-2 max-h-64 overflow-y-auto pr-1">
        {selectedCategory === 'pedigree' &&
          pedigreePresets.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleAddStamp(p.stamp, p.isAffected)}
              className="p-3 text-left border border-slate-100 hover:border-rose-300 hover:bg-rose-50/50 rounded-xl transition flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center border border-slate-300 rounded-md bg-white">
                  {p.stamp === 'pedigree_male' ? (
                    <div className={`w-5 h-5 border-2 border-slate-800 ${p.isAffected ? 'bg-slate-800' : 'bg-transparent'}`} />
                  ) : (
                    <div className={`w-5 h-5 rounded-full border-2 border-slate-800 ${p.isAffected ? 'bg-slate-800' : 'bg-transparent'}`} />
                  )}
                </div>
                <div>
                  <span className="font-semibold text-xs text-slate-800 group-hover:text-rose-600 block">
                    {p.label}
                  </span>
                  <span className="text-[11px] text-slate-400">{p.desc}</span>
                </div>
              </div>
              <div className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg group-hover:bg-rose-100 group-hover:text-rose-700">
                +
              </div>
            </button>
          ))}

        {selectedCategory === 'anatomy' &&
          anatomyPresets.map((a, idx) => (
            <button
              key={idx}
              onClick={() => handleAddStamp(a.stamp)}
              className="p-3 text-left border border-slate-100 hover:border-rose-300 hover:bg-rose-50/50 rounded-xl transition flex items-center justify-between group"
            >
              <div>
                <span className="font-semibold text-xs text-slate-800 group-hover:text-rose-600 block">
                  {a.label}
                </span>
                <span className="text-[11px] text-slate-400">{a.desc}</span>
              </div>
              <div className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg group-hover:bg-rose-100 group-hover:text-rose-700">
                +
              </div>
            </button>
          ))}
      </div>
    </div>
  );
};
