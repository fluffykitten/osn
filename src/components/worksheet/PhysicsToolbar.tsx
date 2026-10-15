import React, { useState } from 'react';
import { injectAtCursor } from '../../lib/katex-helpers';
import { KaTeXRenderer } from '../common/KaTeXRenderer';
import { Sparkles, Compass, Zap, Scale, Move, ArrowRight, X } from 'lucide-react';

interface PhysicsToolbarProps {
  textareaRef: React.RefObject<HTMLTextAreaElement | null>;
  onValueChange?: (newValue: string) => void;
  className?: string;
}

interface PhysicsSnippet {
  id: string;
  label: string;
  latex: string;
  displayMath: string;
  category: 'vector' | 'constant' | 'calculus' | 'mechanics' | 'electricity';
  description: string;
}

const PHYSICS_SNIPPETS: PhysicsSnippet[] = [
  // Vektor & Satuan
  { id: 'vec_f', label: 'Vektor Gaya', latex: '$\\vec{F} = m\\vec{a}$', displayMath: '\\vec{F} = m\\vec{a}', category: 'vector', description: 'Hukum II Newton Vektorial' },
  { id: 'vec_v', label: 'Vektor Kecepatan', latex: '$\\vec{v} = v_x\\hat{i} + v_y\\hat{j}$', displayMath: '\\vec{v} = v_x\\hat{i} + v_y\\hat{j}', category: 'vector', description: 'Komponen Vektor Kecepatan' },
  { id: 'dot_prod', label: 'Dot Product', latex: '$\\vec{A} \\cdot \\vec{B} = |A||B|\\cos\\theta$', displayMath: '\\vec{A} \\cdot \\vec{B} = |A||B|\\cos\\theta', category: 'vector', description: 'Perkalian Titik Vektor' },
  { id: 'cross_prod', label: 'Cross Product', latex: '$\\vec{\\tau} = \\vec{r} \\times \\vec{F}$', displayMath: '\\vec{\\tau} = \\vec{r} \\times \\vec{F}', category: 'vector', description: 'Torsi / Perkalian Silang' },

  // Kalkulus Fisis
  { id: 'deriv_v', label: 'Kecepatan Sesaat', latex: '$v(t) = \\frac{dx}{dt}$', displayMath: 'v(t) = \\frac{dx}{dt}', category: 'calculus', description: 'Turunan Posisi terhadap Waktu' },
  { id: 'deriv_a', label: 'Percepatan Sesaat', latex: '$a(t) = \\frac{dv}{dt} = \\frac{d^2x}{dt^2}$', displayMath: 'a = \\frac{dv}{dt}', category: 'calculus', description: 'Turunan Kecepatan terhadap Waktu' },
  { id: 'integral_work', label: 'Usaha Integral', latex: '$W = \\int_{x_1}^{x_2} F(x)\\,dx$', displayMath: 'W = \\int F\\,dx', category: 'calculus', description: 'Usaha oleh Gaya Variabel' },
  { id: 'delta_energy', label: 'Kekekalan Energi', latex: '$\\Delta E_m = \\Delta E_k + \\Delta E_p = 0$', displayMath: '\\Delta E_m = 0', category: 'calculus', description: 'Hukum Kekekalan Energi Mekanik' },

  // Mekanika & Termodinamika
  { id: 'glbb', label: 'GLBB Jarak', latex: '$s = v_0 t + \\frac{1}{2}at^2$', displayMath: 's = v_0 t + \\frac{1}{2}at^2', category: 'mechanics', description: 'Persamaan Jarak GLBB' },
  { id: 'ek', label: 'Energi Kinetik', latex: '$E_k = \\frac{1}{2}mv^2$', displayMath: 'E_k = \\frac{1}{2}mv^2', category: 'mechanics', description: 'Energi Kinetik Translasi' },
  { id: 'ep_grav', label: 'Energi Potensial', latex: '$E_p = mgh$', displayMath: 'E_p = mgh', category: 'mechanics', description: 'Potensial Gravitasi Konstan' },
  { id: 'kalor', label: 'Kapasitas Kalor', latex: '$Q = mc\\Delta T$', displayMath: 'Q = mc\\Delta T', category: 'mechanics', description: 'Asas Black & Perubahan Suhu' },

  // Listrik & Magnet
  { id: 'coulomb', label: 'Gaya Coulomb', latex: '$F = k\\frac{|q_1 q_2|}{r^2}$', displayMath: 'F = k\\frac{|q_1 q_2|}{r^2}', category: 'electricity', description: 'Hukum Elektrostatika Coulomb' },
  { id: 'ohm', label: 'Hukum Ohm', latex: '$V = I \\cdot R$', displayMath: 'V = I \\cdot R', category: 'electricity', description: 'Tegangan & Hambatan Listrik' },
  { id: 'lorentz', label: 'Gaya Lorentz', latex: '$\\vec{F} = q(\\vec{v} \\times \\vec{B})$', displayMath: '\\vec{F} = q(\\vec{v} \\times \\vec{B})', category: 'electricity', description: 'Gaya Magnetik pada Muatan Bergerak' },
  { id: 'faraday', label: 'Hukum Faraday', latex: '$\\varepsilon = -N\\frac{d\\Phi_B}{dt}$', displayMath: '\\varepsilon = -N\\frac{d\\Phi_B}{dt}', category: 'electricity', description: 'GGL Induksi Elektromagnetik' },

  // Konstanta Fisis Universal
  { id: 'const_c', label: 'Kecepatan Cahaya (c)', latex: '$c = 3.00 \\times 10^8\\text{ m/s}$', displayMath: 'c = 3\\times 10^8\\text{ m/s}', category: 'constant', description: 'Kelajuan Cahaya dalam Vakum' },
  { id: 'const_g', label: 'Gravitasi (g)', latex: '$g = 9.80\\text{ m/s}^2$', displayMath: 'g = 9.8\\text{ m/s}^2', category: 'constant', description: 'Percepatan Gravitasi Bumi' },
  { id: 'const_G', label: 'Gravitasi Universal (G)', latex: '$G = 6.674 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$', displayMath: 'G = 6.67\\times 10^{-11}', category: 'constant', description: 'Konstanta Gravitasi Newton' },
  { id: 'const_h', label: 'Konstanta Planck (h)', latex: '$h = 6.626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$', displayMath: 'h = 6.63\\times 10^{-34}', category: 'constant', description: 'Kuantum Aksi Planck' },
];

export const PhysicsToolbar: React.FC<PhysicsToolbarProps> = ({
  textareaRef,
  onValueChange,
  className = '',
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'vector' | 'calculus' | 'mechanics' | 'electricity' | 'constant'>('all');
  const [lastInserted, setLastInserted] = useState<string | null>(null);

  const handleInsert = (snippet: PhysicsSnippet) => {
    if (!textareaRef.current) return;
    const updated = injectAtCursor(textareaRef.current, snippet.latex);
    if (onValueChange) {
      onValueChange(updated);
    }
    setLastInserted(snippet.label);
    setTimeout(() => setLastInserted(null), 2500);
  };

  const filteredSnippets = activeCategory === 'all'
    ? PHYSICS_SNIPPETS
    : PHYSICS_SNIPPETS.filter((s) => s.category === activeCategory);

  return (
    <div className={`p-3 bg-[#FFFFF0] border border-[#B0C4DE]/60 rounded-2xl shadow-xs space-y-2.5 ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D3D3D3]/60 pb-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-blue-100 border border-blue-200 text-blue-700 flex items-center justify-center text-xs font-bold">
            ⚡
          </div>
          <span className="text-xs font-bold text-[#2D3748]">
            Toolbar Rumus & Notasi Fisika (STEM)
          </span>
        </div>

        {lastInserted && (
          <span className="text-[11px] font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200 animate-in fade-in">
            ✓ Disisipkan: {lastInserted}
          </span>
        )}
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-1 text-[11px] font-semibold text-[#708090]">
        {[
          { key: 'all', label: 'Semua' },
          { key: 'vector', label: 'Vektor' },
          { key: 'calculus', label: 'Kalkulus' },
          { key: 'mechanics', label: 'Mekanika' },
          { key: 'electricity', label: 'Listrik-Magnet' },
          { key: 'constant', label: 'Konstanta Fisis' },
        ].map((c) => (
          <button
            key={c.key}
            type="button"
            onClick={() => setActiveCategory(c.key as any)}
            className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
              activeCategory === c.key
                ? 'bg-blue-600 text-white shadow-2xs font-bold'
                : 'bg-white hover:bg-slate-100 text-[#708090] border border-[#D3D3D3]/60'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Snippet Buttons Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-1.5 max-h-48 overflow-y-auto pr-1">
        {filteredSnippets.map((snippet) => (
          <button
            key={snippet.id}
            type="button"
            onClick={() => handleInsert(snippet)}
            className="flex flex-col items-center justify-center p-2 rounded-xl bg-white hover:bg-blue-50/70 border border-[#D3D3D3]/80 hover:border-blue-300 transition-all text-center group cursor-pointer active:scale-95 shadow-2xs"
            title={snippet.description}
          >
            <div className="text-xs font-mono text-blue-900 group-hover:text-blue-700 min-h-[22px] flex items-center justify-center">
              <KaTeXRenderer content={`$${snippet.displayMath}$`} inlineOnly />
            </div>
            <span className="text-[10px] text-[#708090] font-medium truncate max-w-full mt-1">
              {snippet.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
