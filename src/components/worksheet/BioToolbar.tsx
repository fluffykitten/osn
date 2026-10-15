import React, { useState } from 'react';
import { injectAtCursor } from '../../lib/katex-helpers';
import { KaTeXRenderer } from '../common/KaTeXRenderer';

interface BioToolbarProps {
  textareaRef: React.RefObject<HTMLTextAreaElement | null>;
  onValueChange?: (newValue: string) => void;
  className?: string;
}

interface BioSnippet {
  id: string;
  label: string;
  latex: string;
  displayMath: string;
  category: 'genetics' | 'molecular' | 'ecology' | 'biochem';
  description: string;
}

const BIO_SNIPPETS: BioSnippet[] = [
  // Genetika & Persilangan Mendelian
  { id: 'parental_cross', label: 'Persilangan Parental', latex: '$P_1: \\text{AA} \\times \\text{aa} \\implies F_1: \\text{Aa}$', displayMath: 'P_1 \\times P_2 \\implies F_1', category: 'genetics', description: 'Persilangan Monohibrid Parental' },
  { id: 'dihybrid_ratio', label: 'Rasio Dihibrid', latex: '$\\text{Rasio Fenotip } F_2 = 9 : 3 : 3 : 1$', displayMath: '9 : 3 : 3 : 1', category: 'genetics', description: 'Rasio Fenotip Hukum II Mendel' },
  { id: 'blood_allele', label: 'Alel Golongan Darah', latex: '$I^A I^B, I^A i, I^B i, ii$', displayMath: 'I^A I^B, I^A i, ii', category: 'genetics', description: 'Alel Kodominan Sistem ABO' },
  { id: 'sex_linked', label: 'Taut X Hemofilia', latex: '$X^H X^h, X^h Y$', displayMath: 'X^H X^h, X^h Y', category: 'genetics', description: 'Kromosom Kelamin Terpaut X' },
  { id: 'hardy_weinberg', label: 'Hardy-Weinberg', latex: '$p^2 + 2pq + q^2 = 1, \\quad p + q = 1$', displayMath: 'p^2 + 2pq + q^2 = 1', category: 'genetics', description: 'Keseimbangan Genetik Populasi' },

  // Biologi Molekuler & DNA
  { id: 'dna_direction', label: 'Arah Rantai DNA', latex: "$5'-\\text{ATG-CGG-TAG}-3'$", displayMath: "5'-\\text{DNA}-3'", category: 'molecular', description: 'Polaritas Untai Nukleotida' },
  { id: 'transcription', label: 'Transkripsi Kodon', latex: '$\\text{Kodon mRNA: } 5\'-\\text{AUG}\\,(\\text{Met})-3\'$', displayMath: '\\text{Kodon } 5\'\\text{-AUG-3}\'', category: 'molecular', description: 'Kodon Inisiasi Translasi' },
  { id: 'base_pairing', label: 'Pasangan Basa DNA', latex: '$\\text{A} = \\text{T} \\quad (2\\,\\text{H-bond}), \\quad \\text{G} \\equiv \\text{C} \\quad (3\\,\\text{H-bond})$', displayMath: '\\text{A=T}, \\text{G}\\equiv\\text{C}', category: 'molecular', description: 'Ikatan Hidrogen Basa Purin-Pirimidin' },
  { id: 'pcr_cycle', label: 'Eksponensial PCR', latex: '$N_t = N_0 \\times 2^n$', displayMath: 'N_t = N_0 \\cdot 2^n', category: 'molecular', description: 'Amplifikasi Siklus PCR' },

  // Fisiologi & Biokimia Sel
  { id: 'photosynthesis', label: 'Fotosintesis Terpadu', latex: '$6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{cahaya}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$', displayMath: '6\\text{CO}_2+6\\text{H}_2\\text{O}\\to\\text{C}_6\\text{H}_{12}\\text{O}_6', category: 'biochem', description: 'Reaksi Global Fotosintesis' },
  { id: 'cellular_resp', label: 'Respirasi Aerob', latex: '$\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\to 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + 32\\,\\text{ATP}$', displayMath: '\\text{Respirasi } \\to 32\\,\\text{ATP}', category: 'biochem', description: 'Katabolisme Glukosa & Pembentukan ATP' },
  { id: 'michaelis_menten', label: 'Michaelis-Menten', latex: '$v_0 = \\frac{V_{\\max}[S]}{K_m + [S]}$', displayMath: 'v_0 = \\frac{V_{\\max}[S]}{K_m + [S]}', category: 'biochem', description: 'Kinetika Enzim Michaelis-Menten' },
  { id: 'water_potential', label: 'Potensial Air', latex: '$\\Psi = \\Psi_s + \\Psi_p$', displayMath: '\\Psi = \\Psi_s + \\Psi_p', category: 'biochem', description: 'Potensial Solut & Turgor Sel Tumbuhan' },

  // Ekologi & Satuan Biosains
  { id: 'trophic_efficiency', label: 'Efisiensi Trofik', latex: '$\\text{Efisiensi} = \\frac{\\text{Energi } L_{n}}{\\text{Energi } L_{n-1}} \\times 100\\%$', displayMath: 'L_n / L_{n-1} \\approx 10\\%', category: 'ecology', description: 'Hukum 10% Transfer Energi Ekosistem' },
  { id: 'shannon_wiener', label: 'Indeks Keanekaragaman', latex: "$H' = -\\sum_{i=1}^{S} p_i \\ln p_i$", displayMath: "H' = -\\sum p_i\\ln p_i", category: 'ecology', description: 'Indeks Biodiversitas Shannon-Wiener' },
  { id: 'units_bio', label: 'Satuan Biosains', latex: '$1\\,\\mu\\text{m} = 10^{-6}\\,\\text{m}, \\quad 1\\,\\text{kDa} = 1000\\,\\text{Da}$', displayMath: '\\mu\\text{m}, \\text{kDa}, \\text{bp}', category: 'ecology', description: 'Mikrometer, Kilodalton, Pasang Basa' },
];

export const BioToolbar: React.FC<BioToolbarProps> = ({
  textareaRef,
  onValueChange,
  className = '',
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'genetics' | 'molecular' | 'biochem' | 'ecology'>('all');
  const [lastInserted, setLastInserted] = useState<string | null>(null);

  const handleInsert = (snippet: BioSnippet) => {
    if (!textareaRef.current) return;
    const updated = injectAtCursor(textareaRef.current, snippet.latex);
    if (onValueChange) {
      onValueChange(updated);
    }
    setLastInserted(snippet.label);
    setTimeout(() => setLastInserted(null), 2500);
  };

  const filteredSnippets = activeCategory === 'all'
    ? BIO_SNIPPETS
    : BIO_SNIPPETS.filter((s) => s.category === activeCategory);

  return (
    <div className={`p-3 bg-[#FFFFF0] border border-[#B0C4DE]/60 rounded-2xl shadow-xs space-y-2.5 ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D3D3D3]/60 pb-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-emerald-100 border border-emerald-200 text-emerald-700 flex items-center justify-center text-xs font-bold">
            🧬
          </div>
          <span className="text-xs font-bold text-[#2D3748]">
            Toolbar Notasi & Genetika Biologi (STEM)
          </span>
        </div>

        {lastInserted && (
          <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 animate-in fade-in">
            ✓ Disisipkan: {lastInserted}
          </span>
        )}
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-1 text-[11px] font-semibold text-[#708090]">
        {[
          { key: 'all', label: 'Semua' },
          { key: 'genetics', label: 'Genetika & Hereditas' },
          { key: 'molecular', label: 'DNA & Molekuler' },
          { key: 'biochem', label: 'Biokimia & Metabolisme' },
          { key: 'ecology', label: 'Ekologi & Biosains' },
        ].map((c) => (
          <button
            key={c.key}
            type="button"
            onClick={() => setActiveCategory(c.key as any)}
            className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
              activeCategory === c.key
                ? 'bg-emerald-600 text-white shadow-2xs font-bold'
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
            className="flex flex-col items-center justify-center p-2 rounded-xl bg-white hover:bg-emerald-50/70 border border-[#D3D3D3]/80 hover:border-emerald-300 transition-all text-center group cursor-pointer active:scale-95 shadow-2xs"
            title={snippet.description}
          >
            <div className="text-xs font-mono text-emerald-900 group-hover:text-emerald-700 min-h-[22px] flex items-center justify-center">
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
