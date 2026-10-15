import React, { useState } from 'react';
import { injectAtCursor } from '../../lib/katex-helpers';
import { KaTeXRenderer } from '../common/KaTeXRenderer';

interface MathToolbarProps {
  textareaRef: React.RefObject<HTMLTextAreaElement | null>;
  onValueChange?: (newValue: string) => void;
  className?: string;
}

interface MathSnippet {
  id: string;
  label: string;
  latex: string;
  displayMath: string;
  category: 'logic' | 'algebra' | 'calculus' | 'geometry' | 'matrix';
  description: string;
}

const MATH_SNIPPETS: MathSnippet[] = [
  // Logika & Himpunan
  { id: 'forall', label: 'Untuk Setiap (∀)', latex: '$\\forall x \\in \\mathbb{R}$', displayMath: '\\forall x \\in \\mathbb{R}', category: 'logic', description: 'Kuantor Universal' },
  { id: 'exists', label: 'Terdapat (∃)', latex: '$\\exists x > 0$', displayMath: '\\exists x > 0', category: 'logic', description: 'Kuantor Eksistensial' },
  { id: 'implies', label: 'Implikasi (⟹)', latex: '$P \\implies Q$', displayMath: 'P \\implies Q', category: 'logic', description: 'Maka / Implikasi Logis' },
  { id: 'iff', label: 'Jika & Hanya Jika (⟺)', latex: '$P \\iff Q$', displayMath: 'P \\iff Q', category: 'logic', description: 'Ekuivalensi Logis' },
  { id: 'set_subset', label: 'Himpunan Bagian (⊂)', latex: '$A \\subset B$', displayMath: 'A \\subset B', category: 'logic', description: 'Subset / Irisan' },
  { id: 'set_union', label: 'Gabungan & Irisan', latex: '$A \\cup B, A \\cap B$', displayMath: 'A \\cup B, A \\cap B', category: 'logic', description: 'Operasi Himpunan' },

  // Aljabar & Notasi
  { id: 'sum', label: 'Notasi Sigma (∑)', latex: '$\\sum_{i=1}^{n} a_i$', displayMath: '\\sum_{i=1}^n a_i', category: 'algebra', description: 'Penjumlahan Deret' },
  { id: 'prod', label: 'Notasi Pi (∏)', latex: '$\\prod_{i=1}^{n} x_i$', displayMath: '\\prod_{i=1}^n x_i', category: 'algebra', description: 'Perkalian Berulang' },
  { id: 'sqrt', label: 'Akar Kuadrat', latex: '$\\sqrt{x^2 + y^2}$', displayMath: '\\sqrt{x^2+y^2}', category: 'algebra', description: 'Akar Radikal' },
  { id: 'nth_root', label: 'Akar Pangkat n', latex: '$\\sqrt[n]{x}$', displayMath: '\\sqrt[n]{x}', category: 'algebra', description: 'Radikal Tingkat n' },
  { id: 'binom', label: 'Kombinasi Binomial', latex: '$\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$', displayMath: '\\binom{n}{k}', category: 'algebra', description: 'Kombinasi n Pilih k' },
  { id: 'abs', label: 'Nilai Mutlak', latex: '$|x - a| < \\epsilon$', displayMath: '|x-a| < \\epsilon', category: 'algebra', description: 'Fungsi Nilai Mutlak' },

  // Kalkulus
  { id: 'lim', label: 'Limit Fungsi', latex: '$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$', displayMath: '\\lim_{x\\to 0} f(x)', category: 'calculus', description: 'Limit Matematika' },
  { id: 'deriv', label: 'Turunan Fungsi', latex: '$\\frac{df}{dx} = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$', displayMath: '\\frac{df}{dx}', category: 'calculus', description: 'Diferensial / Turunan' },
  { id: 'integral_def', label: 'Integral Tentu', latex: '$\\int_{a}^{b} f(x)\\,dx$', displayMath: '\\int_a^b f(x)\\,dx', category: 'calculus', description: 'Integral Riemann Tentu' },
  { id: 'integral_indef', label: 'Integral Tak Tentu', latex: '$\\int f(x)\\,dx = F(x) + C$', displayMath: '\\int f(x)\\,dx', category: 'calculus', description: 'Antiturunan' },
  { id: 'partial', label: 'Turunan Parsial', latex: '$\\frac{\\partial^2 f}{\\partial x^2}$', displayMath: '\\frac{\\partial f}{\\partial x}', category: 'calculus', description: 'Diferensial Parsial Peubah Ganda' },

  // Geometri & Trigonometri
  { id: 'trig_pyth', label: 'Identitas Pythagoras', latex: '$\\sin^2\\theta + \\cos^2\\theta = 1$', displayMath: '\\sin^2\\theta + \\cos^2\\theta = 1', category: 'geometry', description: 'Identitas Trigonometri Dasar' },
  { id: 'cos_rule', label: 'Aturan Cosinus', latex: '$c^2 = a^2 + b^2 - 2ab\\cos C$', displayMath: 'c^2 = a^2 + b^2 - 2ab\\cos C', category: 'geometry', description: 'Hukum Cosinus Segitiga' },
  { id: 'triangle', label: 'Segitiga & Sudut', latex: '$\\triangle ABC, \\angle BAC = 90^\\circ$', displayMath: '\\triangle ABC, \\angle A', category: 'geometry', description: 'Notasi Geometri Euklides' },
  { id: 'pi_theta', label: 'Simbol Sudut', latex: '$\\pi, \\theta, \\alpha, \\beta, \\phi$', displayMath: '\\pi, \\theta, \\alpha, \\phi', category: 'geometry', description: 'Huruf Yunani Sudut' },

  // Matriks & Vektor
  { id: 'matrix_2x2', label: 'Matriks 2x2', latex: '$\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$', displayMath: '\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}', category: 'matrix', description: 'Matriks Ordo 2x2' },
  { id: 'matrix_3x3', label: 'Matriks 3x3', latex: '$\\begin{pmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\\\ a_{31} & a_{32} & a_{33} \\end{pmatrix}$', displayMath: '\\begin{pmatrix} a & b & c \\\\ \\dots \\end{pmatrix}', category: 'matrix', description: 'Matriks Ordo 3x3' },
  { id: 'determinant', label: 'Determinan Matriks', latex: '$\\det(A) = ad - bc$', displayMath: '\\det(A)', category: 'matrix', description: 'Determinan Matriks' },
];

export const MathToolbar: React.FC<MathToolbarProps> = ({
  textareaRef,
  onValueChange,
  className = '',
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'logic' | 'algebra' | 'calculus' | 'geometry' | 'matrix'>('all');
  const [lastInserted, setLastInserted] = useState<string | null>(null);

  const handleInsert = (snippet: MathSnippet) => {
    if (!textareaRef.current) return;
    const updated = injectAtCursor(textareaRef.current, snippet.latex);
    if (onValueChange) {
      onValueChange(updated);
    }
    setLastInserted(snippet.label);
    setTimeout(() => setLastInserted(null), 2500);
  };

  const filteredSnippets = activeCategory === 'all'
    ? MATH_SNIPPETS
    : MATH_SNIPPETS.filter((s) => s.category === activeCategory);

  return (
    <div className={`p-3 bg-[#FFFFF0] border border-[#B0C4DE]/60 rounded-2xl shadow-xs space-y-2.5 ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D3D3D3]/60 pb-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-violet-100 border border-violet-200 text-violet-700 flex items-center justify-center text-xs font-bold">
            📐
          </div>
          <span className="text-xs font-bold text-[#2D3748]">
            Toolbar Notasi & Formula Matematika (STEM)
          </span>
        </div>

        {lastInserted && (
          <span className="text-[11px] font-medium text-violet-600 bg-violet-50 px-2 py-0.5 rounded-full border border-violet-200 animate-in fade-in">
            ✓ Disisipkan: {lastInserted}
          </span>
        )}
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-1 text-[11px] font-semibold text-[#708090]">
        {[
          { key: 'all', label: 'Semua' },
          { key: 'logic', label: 'Logika & Himpunan' },
          { key: 'algebra', label: 'Aljabar' },
          { key: 'calculus', label: 'Kalkulus' },
          { key: 'geometry', label: 'Geometri & Trigonometri' },
          { key: 'matrix', label: 'Matriks' },
        ].map((c) => (
          <button
            key={c.key}
            type="button"
            onClick={() => setActiveCategory(c.key as any)}
            className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
              activeCategory === c.key
                ? 'bg-violet-600 text-white shadow-2xs font-bold'
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
            className="flex flex-col items-center justify-center p-2 rounded-xl bg-white hover:bg-violet-50/70 border border-[#D3D3D3]/80 hover:border-violet-300 transition-all text-center group cursor-pointer active:scale-95 shadow-2xs"
            title={snippet.description}
          >
            <div className="text-xs font-mono text-violet-900 group-hover:text-violet-700 min-h-[22px] flex items-center justify-center">
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
