import React, { useState } from 'react';
import { FunctionSquare, Box, X } from 'lucide-react';
import type { WhiteboardElement } from '../../../types/whiteboard';

interface MathToolboxProps {
  isOpen: boolean;
  onClose: () => void;
  onAddElement: (element: Partial<WhiteboardElement>) => void;
  currentColor: string;
}

export const MathToolbox: React.FC<MathToolboxProps> = ({
  isOpen,
  onClose,
  onAddElement,
  currentColor,
}) => {
  const [selectedTab, setSelectedTab] = useState<'functions' | 'shapes'>('functions');
  const [customFormula, setCustomFormula] = useState('x^2');

  if (!isOpen) return null;

  const functionPresets = [
    { label: 'Parabola: f(x) = x²', formula: 'x^2', desc: 'Kurva kuadratik simetris' },
    { label: 'Gelombang: f(x) = sin(x)', formula: 'sin(x)', desc: 'Gelombang sinusoidal osilasi' },
    { label: 'Trigonometri: f(x) = cos(x)', formula: 'cos(x)', desc: 'Fungsi cosinus fase 90°' },
    { label: 'Hiperbola: f(x) = 1/x', formula: '1/x', desc: 'Asimtot tegak dan datar' },
    { label: 'Linear: f(x) = x', formula: 'x', desc: 'Garis lurus kemiringan 45°' },
  ];

  const shape3DPresets = [
    { label: 'Kubus 3D', shape: 'cube', desc: 'Bangun ruang 6 sisi kubik beraturan' },
    { label: 'Tabung Silinder', shape: 'cylinder', desc: 'Silinder dengan dua alas lingkaran' },
    { label: 'Kerucut', shape: 'cone', desc: 'Kerucut alas lingkaran dan puncak lancip' },
    { label: 'Bola (Sphere)', shape: 'sphere', desc: 'Bola 3D dengan garis lintang ekuator' },
  ];

  const handleAddFunction = (formula: string) => {
    onAddElement({
      type: 'math_function',
      width: 200,
      height: 160,
      color: currentColor || '#2563eb',
      strokeWidth: 2,
      opacity: 1,
      isLocked: false,
      zIndex: 1,
      payload: { formula },
    });
    onClose();
  };

  const handleAddShape = (shape: string) => {
    onAddElement({
      type: 'math_shape',
      width: 140,
      height: 140,
      color: currentColor || '#1e293b',
      strokeWidth: 2,
      opacity: 1,
      isLocked: false,
      zIndex: 1,
      payload: { shape },
    });
    onClose();
  };

  return (
    <div className="absolute top-20 left-1/2 -translate-x-1/2 z-50 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200 p-4 w-96 text-slate-800 animate-in fade-in zoom-in-95 duration-150">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-blue-100 text-blue-600 rounded-lg">
            <FunctionSquare size={20} />
          </div>
          <div>
            <h3 className="font-bold text-sm text-slate-900">Toolbox Matematika</h3>
            <p className="text-xs text-slate-500">Grafik fungsi & bangun ruang 3D</p>
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
          onClick={() => setSelectedTab('functions')}
          className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition ${
            selectedTab === 'functions'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <FunctionSquare size={14} />
          Grafik Fungsi
        </button>
        <button
          onClick={() => setSelectedTab('shapes')}
          className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition ${
            selectedTab === 'shapes'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Box size={14} />
          Geometri 3D
        </button>
      </div>

      {selectedTab === 'functions' ? (
        <div className="space-y-2">
          <div className="grid grid-cols-1 gap-1.5 max-h-56 overflow-y-auto pr-1">
            {functionPresets.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleAddFunction(p.formula)}
                className="text-left p-2.5 rounded-xl border border-slate-100 hover:border-blue-300 hover:bg-blue-50/50 transition group flex flex-col"
              >
                <span className="font-semibold text-xs text-slate-800 group-hover:text-blue-600">
                  {p.label}
                </span>
                <span className="text-[11px] text-slate-500">{p.desc}</span>
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 flex gap-2">
            <input
              type="text"
              value={customFormula}
              onChange={(e) => setCustomFormula(e.target.value)}
              placeholder="Contoh: x^2 atau sin(x)"
              className="flex-1 px-3 py-1.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={() => handleAddFunction(customFormula)}
              className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-sm transition"
            >
              Plot
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto pr-1">
          {shape3DPresets.map((s, idx) => (
            <button
              key={idx}
              onClick={() => handleAddShape(s.shape)}
              className="p-3 text-left border border-slate-100 hover:border-blue-300 hover:bg-blue-50/50 rounded-xl transition flex flex-col items-center text-center gap-1 group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-100/70 text-blue-600 flex items-center justify-center font-bold text-xs">
                {s.shape === 'cube' && '🧊'}
                {s.shape === 'cylinder' && '🛢️'}
                {s.shape === 'cone' && '🍦'}
                {s.shape === 'sphere' && '⚽'}
              </div>
              <span className="font-semibold text-xs text-slate-800 group-hover:text-blue-600">
                {s.label}
              </span>
              <span className="text-[10px] text-slate-400 line-clamp-1">{s.desc}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
