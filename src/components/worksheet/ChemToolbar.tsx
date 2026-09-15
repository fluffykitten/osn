import React, { useState, useRef, useEffect } from 'react';
import {
  CHEM_TOOLBAR_ACTIONS,
  QUICK_FORMULA_TEMPLATES,
  injectAtCursor,
  autoFormatChemicalShorthand,
  type ChemToolbarAction,
  type FormulaTemplate,
} from '../../lib/katex-helpers';
import { getSharedModalPosition, setSharedModalPosition } from '../../services/modalPositionService';
import { KaTeXRenderer } from '../common/KaTeXRenderer';
import { Table, Sparkles, Wand2, FileText, ChevronDown, X, Scale, Move, ArrowLeft, Check } from 'lucide-react';

interface ChemToolbarProps {
  textareaRef: React.RefObject<HTMLTextAreaElement | null>;
  onValueChange?: (newValue: string) => void;
  onOpenPeriodicTable?: () => void;
  onOpenMolarMass?: () => void;
  className?: string;
}

type ToolbarCategory = 'all' | 'format' | 'arrow' | 'phase' | 'thermo' | 'greek' | 'ion';

type FormulaFillType = 'fraction' | 'superscript' | 'subscript' | 'ce' | 'times_ten' | null;

interface FormulaFillState {
  type: FormulaFillType;
  title: string;
  field1Label: string;
  field1Placeholder: string;
  field1Value: string;
  field2Label?: string;
  field2Placeholder?: string;
  field2Value?: string;
  helperText: string;
}

interface TemplateFillField {
  key: string;
  label: string;
  placeholder: string;
  defaultValue?: string;
}

interface TemplateFillState {
  template: FormulaTemplate;
  title: string;
  helperText: string;
  fields: TemplateFillField[];
  values: Record<string, string>;
  buildFormula: (values: Record<string, string>) => string;
}

function getTemplateFillConfig(tpl: FormulaTemplate): {
  title: string;
  helperText: string;
  fields: TemplateFillField[];
  buildFormula: (vals: Record<string, string>) => string;
} {
  switch (tpl.id) {
    case 'gas_ideal_n':
      return {
        title: 'Bantu Isi: Mol Gas Ideal (PV = nRT)',
        helperText: 'Masukkan nilai tekanan (P), volume (V), dan suhu (T) untuk menghitung mol gas.',
        fields: [
          { key: 'P', label: 'Tekanan P (atm)', placeholder: 'misal: 2.45', defaultValue: '2.45' },
          { key: 'V', label: 'Volume V (L)', placeholder: 'misal: 10.0', defaultValue: '10.0' },
          { key: 'T', label: 'Suhu T (K)', placeholder: 'misal: 298.15', defaultValue: '298.15' },
          { key: 'res', label: 'Hasil mol n (opsional)', placeholder: 'misal: 1.00' },
        ],
        buildFormula: (v) => {
          const P = v.P || 'P';
          const V = v.V || 'V';
          const T = v.T || 'T';
          const res = v.res ? ' = ' + v.res + '\\text{ mol}' : '';
          return '$n = \\frac{P \\times V}{R \\times T} = \\frac{' + P + ' \\times ' + V + '}{0.08206 \\times ' + T + '}' + res + '$';
        },
      };

    case 'fraksi_mol':
      return {
        title: 'Bantu Isi: Fraksi Mol (X)',
        helperText: 'Masukkan komponen dan perbandingan mol terhadap total campuran.',
        fields: [
          { key: 'substance', label: 'Nama Komponen / Senyawa', placeholder: 'misal: \\ce{CH4}', defaultValue: '\\ce{CH4}' },
          { key: 'nA', label: 'Mol komponen (nA)', placeholder: 'misal: 0.50', defaultValue: '0.50' },
          { key: 'nTot', label: 'Mol total campuran (ntot)', placeholder: 'misal: 1.00', defaultValue: '1.00' },
          { key: 'res', label: 'Hasil fraksi mol X (opsional)', placeholder: 'misal: 0.50' },
        ],
        buildFormula: (v) => {
          const sub = v.substance || 'A';
          const nA = v.nA || 'n_A';
          const nTot = v.nTot || 'n_{\\text{tot}}';
          const res = v.res ? ' = ' + v.res : '';
          return '$X_{' + sub + '} = \\frac{n_{' + sub + '}}{n_{\\text{tot}}} = \\frac{' + nA + '}{' + nTot + '}' + res + '$';
        },
      };

    case 'massa_molar_n':
      return {
        title: 'Bantu Isi: Mol dari Massa (n = m / Mr)',
        helperText: 'Masukkan massa zat dan nilai massa molar Mr.',
        fields: [
          { key: 'substance', label: 'Senyawa (opsional)', placeholder: 'misal: \\ce{BaCO3}' },
          { key: 'm', label: 'Massa (gram)', placeholder: 'misal: 394.7', defaultValue: '394.7' },
          { key: 'mr', label: 'Massa Molar Mr (g/mol)', placeholder: 'misal: 197.34', defaultValue: '197.34' },
          { key: 'res', label: 'Hasil mol n (opsional)', placeholder: 'misal: 2.00' },
        ],
        buildFormula: (v) => {
          const sub = v.substance ? '(' + v.substance + ')' : '';
          const m = v.m || 'm';
          const mr = v.mr || 'M_r';
          const res = v.res ? ' = ' + v.res + '\\text{ mol}' : '';
          return '$n' + sub + ' = \\frac{m}{M_r} = \\frac{' + m + '\\text{ g}}{' + mr + '\\text{ g/mol}}' + res + '$';
        },
      };

    case 'gibbs_termo':
      return {
        title: 'Bantu Isi: Energi Bebas Gibbs (ΔG°)',
        helperText: 'Masukkan nilai entalpi ΔH°, suhu T, dan entropi ΔS°.',
        fields: [
          { key: 'dH', label: 'Entalpi ΔH° (kJ/mol)', placeholder: 'misal: 57.20', defaultValue: '57.20' },
          { key: 'T', label: 'Suhu T (K)', placeholder: 'misal: 298.15', defaultValue: '298.15' },
          { key: 'dS', label: 'Entropi ΔS° (kJ/(mol·K))', placeholder: 'misal: 0.1758', defaultValue: '0.1758' },
          { key: 'res', label: 'Hasil ΔG° (kJ/mol)', placeholder: 'misal: +4.79' },
        ],
        buildFormula: (v) => {
          const dH = v.dH || '\\Delta H^\\circ';
          const T = v.T || 'T';
          const dS = v.dS || '\\Delta S^\\circ';
          const res = v.res ? ' = ' + v.res + '\\text{ kJ/mol}' : '';
          return '$\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ = ' + dH + ' - (' + T + ' \\times ' + dS + ')' + res + '$';
        },
      };

    case 'gibbs_kp':
      return {
        title: 'Bantu Isi: Hubungan Gibbs & Kp',
        helperText: 'Masukkan nilai ΔG° untuk mencari tetapan kesetimbangan Kp.',
        fields: [
          { key: 'dG', label: 'Nilai ΔG° (J/mol)', placeholder: 'misal: 4785', defaultValue: '4785' },
          { key: 'T', label: 'Suhu T (K)', placeholder: 'misal: 298.15', defaultValue: '298.15' },
          { key: 'res', label: 'Hasil nilai Kp', placeholder: 'misal: 0.141' },
        ],
        buildFormula: (v) => {
          const dG = v.dG || '\\Delta G^\\circ';
          const T = v.T || '298.15';
          const res = v.res ? ' = ' + v.res : '';
          return '$\\Delta G^\\circ = -RT \\ln K_p \\implies K_p = e^{-\\frac{\\Delta G^\\circ}{RT}} = e^{-\\frac{' + dG + '}{8.314 \\times ' + T + '}}' + res + '$';
        },
      };

    case 'hess_rxn':
      return {
        title: 'Bantu Isi: Hukum Hess (ΔH°rxn)',
        helperText: 'Masukkan total entalpi pembentukan produk dan reaktan.',
        fields: [
          { key: 'prod', label: 'Σ n·ΔH°f (Produk)', placeholder: 'misal: 2(33.18)', defaultValue: '2(33.18)' },
          { key: 'reak', label: 'Σ m·ΔH°f (Reaktan)', placeholder: 'misal: 9.16', defaultValue: '9.16' },
          { key: 'res', label: 'Hasil ΔH°rxn (kJ/mol)', placeholder: 'misal: +57.20' },
        ],
        buildFormula: (v) => {
          const prod = v.prod || '\\dots';
          const reak = v.reak || '\\dots';
          const res = v.res ? ' = ' + v.res + '\\text{ kJ/mol}' : '';
          return '$\\Delta H^\\circ_{\\text{rxn}} = \\sum n\\Delta H_f^\\circ(\\text{produk}) - \\sum m\\Delta H_f^\\circ(\\text{reaktan}) = ' + prod + ' - (' + reak + ')' + res + '$';
        },
      };

    case 'kc_expression':
      return {
        title: 'Bantu Isi: Tetapan Kesetimbangan (Kc)',
        helperText: 'Masukkan konsentrasi produk dan reaktan.',
        fields: [
          { key: 'num', label: 'Spesies Produk', placeholder: 'misal: [\\ce{NO2}]^2', defaultValue: '[\\ce{NO2}]^2' },
          { key: 'den', label: 'Spesies Reaktan', placeholder: 'misal: [\\ce{N2O4}]', defaultValue: '[\\ce{N2O4}]' },
          { key: 'subst', label: 'Substitusi Angka Konsentrasi', placeholder: 'misal: \\frac{(0.20)^2}{0.10}' },
          { key: 'res', label: 'Nilai Kc', placeholder: 'misal: 0.40' },
        ],
        buildFormula: (v) => {
          const num = v.num || '[\\text{Produk}]';
          const den = v.den || '[\\text{Reaktan}]';
          const subst = v.subst ? ' = ' + v.subst : '';
          const res = v.res ? ' = ' + v.res : '';
          return '$K_c = \\frac{' + num + '}{' + den + '}' + subst + res + '$';
        },
      };

    case 'buffer_henderson':
      return {
        title: 'Bantu Isi: Larutan Penyangga (Henderson-Hasselbalch)',
        helperText: 'Masukkan pKa serta konsentrasi atau mol basa konjugasi dan asam.',
        fields: [
          { key: 'pKa', label: 'Nilai pKa', placeholder: 'misal: 4.74', defaultValue: '4.74' },
          { key: 'base', label: 'Basa Konjugasi [A-]', placeholder: 'misal: 0.10', defaultValue: '0.10' },
          { key: 'acid', label: 'Asam [HA]', placeholder: 'misal: 0.10', defaultValue: '0.10' },
          { key: 'res', label: 'Hasil pH', placeholder: 'misal: 4.74' },
        ],
        buildFormula: (v) => {
          const pKa = v.pKa || '\\text{p}K_a';
          const base = v.base || '[\\ce{A-}]';
          const acid = v.acid || '[\\ce{HA}]';
          const res = v.res ? ' = ' + v.res : '';
          return '$\\text{pH} = \\text{p}K_a + \\log\\frac{[\\ce{A-}]}{[\\ce{HA}]} = ' + pKa + ' + \\log\\frac{' + base + '}{' + acid + '}' + res + '$';
        },
      };

    case 'ksp_solubility':
      return {
        title: 'Bantu Isi: Hasil Kali Kelarutan (Ksp)',
        helperText: 'Masukkan perkalian konsentrasi ion dan pemfaktoran kelarutan s.',
        fields: [
          { key: 'ions', label: 'Perkalian Ion', placeholder: 'misal: [\\ce{Ag+}][\\ce{Cl-}]', defaultValue: '[\\ce{Ag+}][\\ce{Cl-}]' },
          { key: 'factor', label: 'Faktor kelarutan s', placeholder: 'misal: (s)(s) = s^2', defaultValue: '(s)(s) = s^2' },
          { key: 'res', label: 'Nilai Ksp', placeholder: 'misal: 1.0 \\times 10^{-10}' },
        ],
        buildFormula: (v) => {
          const ions = v.ions || '[M^{n+}][X^{m-}]';
          const factor = v.factor || 's^2';
          const res = v.res ? ' = ' + v.res : '';
          return '$K_{sp} = ' + ions + ' = ' + factor + res + '$';
        },
      };

    case 'nernst_standard':
      return {
        title: 'Bantu Isi: Persamaan Nernst Sel Elektrokimia',
        helperText: 'Masukkan potensial standar E°sel, elektron n, dan kuosien Q.',
        fields: [
          { key: 'e0', label: 'Potensial E°sel (V)', placeholder: 'misal: 0.00', defaultValue: '0.00' },
          { key: 'n', label: 'Jumlah elektron (n)', placeholder: 'misal: 1', defaultValue: '1' },
          { key: 'q', label: 'Kuosien reaksi (Q)', placeholder: 'misal: \\frac{[\\ce{Ag+}]_{\\text{jenuh}}}{0.010}', defaultValue: '\\frac{[\\ce{Ag+}]_{\\text{jenuh}}}{0.010}' },
          { key: 'res', label: 'Hasil Esel (V)', placeholder: 'misal: -0.177' },
        ],
        buildFormula: (v) => {
          const e0 = v.e0 || 'E^\\circ_{\\text{sel}}';
          const n = v.n || 'n';
          const q = v.q || 'Q';
          const res = v.res ? ' = ' + v.res + '\\text{ V}' : '';
          return '$E_{\\text{sel}} = E^\\circ_{\\text{sel}} - \\frac{0.0592}{n}\\log Q = ' + e0 + ' - \\frac{0.0592}{' + n + '}\\log\\left(' + q + '\\right)' + res + '$';
        },
      };

    case 'gibbs_cell':
      return {
        title: 'Bantu Isi: Potensial Sel & Gibbs (ΔG°)',
        helperText: 'Masukkan elektron n dan potensial sel E°sel.',
        fields: [
          { key: 'n', label: 'Jumlah elektron (n)', placeholder: 'misal: 2', defaultValue: '2' },
          { key: 'e0', label: 'Potensial E°sel (V)', placeholder: 'misal: 1.10', defaultValue: '1.10' },
          { key: 'res', label: 'Hasil ΔG° (J atau kJ)', placeholder: 'misal: -212.3 kJ' },
        ],
        buildFormula: (v) => {
          const n = v.n || 'n';
          const e0 = v.e0 || 'E^\\circ_{\\text{sel}}';
          const res = v.res ? ' = ' + v.res : '';
          return '$\\Delta G^\\circ = -nFE^\\circ_{\\text{sel}} = -(' + n + ')(96485)(' + e0 + ')' + res + '$';
        },
      };

    case 'rxn_equilibrium':
      return {
        title: 'Bantu Isi: Reaksi Kesetimbangan',
        helperText: 'Masukkan rumus reaktan dan produk kesetimbangan kimia.',
        fields: [
          { key: 'reak', label: 'Reaktan fasa gas/larutan', placeholder: 'misal: N2O4(g)', defaultValue: 'N2O4(g)' },
          { key: 'prod', label: 'Produk fasa gas/larutan', placeholder: 'misal: 2NO2(g)', defaultValue: '2NO2(g)' },
        ],
        buildFormula: (v) => {
          const reak = v.reak || 'A';
          const prod = v.prod || 'B';
          return '$$\\ce{' + reak + ' <=> ' + prod + '}$$';
        },
      };

    case 'rxn_redox':
      return {
        title: 'Bantu Isi: Reaksi Redoks Lengkap',
        helperText: 'Masukkan persamaan reaksi redoks yang telah disetarakan.',
        fields: [
          { key: 'eq', label: 'Persamaan Reaksi Redoks', placeholder: 'misal: 2MnO4- + 5C2O4^2- + 16H+ -> 2Mn^2+ + 10CO2 + 8H2O', defaultValue: '2MnO4- + 5C2O4^2- + 16H+ -> 2Mn^2+ + 10CO2 + 8H2O' },
        ],
        buildFormula: (v) => {
          const eq = v.eq || 'A + B -> C + D';
          return '$$\\ce{' + eq + '}$$';
        },
      };

    default:
      return {
        title: 'Bantu Isi: ' + tpl.name,
        helperText: 'Sesuaikan variabel atau isi angka rumus sesuai kebutuhan soal.',
        fields: [
          { key: 'snippet', label: 'Rumus KaTeX', placeholder: 'Masukkan formula', defaultValue: tpl.snippet },
        ],
        buildFormula: (v) => v.snippet || tpl.snippet,
      };
  }
}

export const ChemToolbar: React.FC<ChemToolbarProps> = ({
  textareaRef,
  onValueChange,
  onOpenPeriodicTable,
  onOpenMolarMass,
  className = '',
}) => {
  const [activeCategory, setActiveCategory] = useState<ToolbarCategory>('all');
  const [showTemplatesModal, setShowTemplatesModal] = useState(false);
  const [selectedTemplateTab, setSelectedTemplateTab] = useState<'all' | 'stoikiometri' | 'termo' | 'larutan' | 'elektro' | 'reaksi'>('all');
  const [formatAppliedToast, setFormatAppliedToast] = useState(false);
  const [formulaFillState, setFormulaFillState] = useState<FormulaFillState | null>(null);
  const [templateFillState, setTemplateFillState] = useState<TemplateFillState | null>(null);

  // Floating & Draggable window state synchronized with shared modal position
  const [fillPosition, setFillPosition] = useState<{ x: number; y: number }>(() => getSharedModalPosition(460, 420));
  const [fillSize, setFillSize] = useState<{ width: number; height: number }>({ width: 460, height: 500 });
  const [isDraggingFill, setIsDraggingFill] = useState(false);
  const [isResizingFill, setIsResizingFill] = useState(false);
  const fillDragStartRef = useRef<{ startX: number; startY: number; initX: number; initY: number }>({
    startX: 0,
    startY: 0,
    initX: 0,
    initY: 0,
  });
  const fillResizeStartRef = useRef<{ startX: number; startY: number; startW: number; startH: number } | null>(null);

  useEffect(() => {
    if (formulaFillState || templateFillState) {
      const pos = getSharedModalPosition(fillSize.width, fillSize.height);
      setFillPosition(pos);
    }
  }, [formulaFillState?.type, templateFillState?.template.id, fillSize.width, fillSize.height]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (templateFillState) {
          setTemplateFillState(null);
        } else if (formulaFillState) {
          setFormulaFillState(null);
        } else if (showTemplatesModal) {
          setShowTemplatesModal(false);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [formulaFillState, templateFillState, showTemplatesModal]);

  const handleFillPointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest('button, input, textarea')) return;
    setIsDraggingFill(true);
    fillDragStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initX: fillPosition.x,
      initY: fillPosition.y,
    };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handleFillPointerMove = (e: React.PointerEvent) => {
    if (!isDraggingFill) return;
    const dx = e.clientX - fillDragStartRef.current.startX;
    const dy = e.clientY - fillDragStartRef.current.startY;
    const newX = Math.max(10, Math.min(window.innerWidth - 320, fillDragStartRef.current.initX + dx));
    const newY = Math.max(10, Math.min(window.innerHeight - 200, fillDragStartRef.current.initY + dy));
    const newPos = { x: newX, y: newY };
    setFillPosition(newPos);
    setSharedModalPosition(newPos);
  };

  const handleFillPointerUp = (e: React.PointerEvent) => {
    setIsDraggingFill(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  // Handle Resize for Fill Modals
  const handleFillResizePointerDown = (e: React.PointerEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsResizingFill(true);
    fillResizeStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      startW: fillSize.width,
      startH: fillSize.height,
    };
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const handleFillResizePointerMove = (e: React.PointerEvent) => {
    if (!isResizingFill || !fillResizeStartRef.current) return;
    const deltaX = e.clientX - fillResizeStartRef.current.startX;
    const deltaY = e.clientY - fillResizeStartRef.current.startY;
    const minW = 340;
    const maxW = Math.min(850, window.innerWidth - 20);
    const minH = 280;
    const maxH = Math.min(850, window.innerHeight - 30);

    const newW = Math.min(Math.max(minW, fillResizeStartRef.current.startW + deltaX), maxW);
    const newH = Math.min(Math.max(minH, fillResizeStartRef.current.startH + deltaY), maxH);
    setFillSize({ width: newW, height: newH });
  };

  const handleFillResizePointerUp = (e: React.PointerEvent) => {
    setIsResizingFill(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  // State & Handlers for Resizing Quick Formula Templates Selector Modal
  const [templateSelectorSize, setTemplateSelectorSize] = useState<{ width: number; height: number }>({
    width: Math.min(680, typeof window !== 'undefined' ? window.innerWidth - 32 : 680),
    height: Math.min(620, typeof window !== 'undefined' ? window.innerHeight - 50 : 620),
  });
  const [isResizingTemplateSelector, setIsResizingTemplateSelector] = useState(false);
  const templateSelectorResizeStartRef = useRef<{ startX: number; startY: number; startW: number; startH: number } | null>(null);

  const handleTemplateSelectorResizePointerDown = (e: React.PointerEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsResizingTemplateSelector(true);
    templateSelectorResizeStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      startW: templateSelectorSize.width,
      startH: templateSelectorSize.height,
    };
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const handleTemplateSelectorResizePointerMove = (e: React.PointerEvent) => {
    if (!isResizingTemplateSelector || !templateSelectorResizeStartRef.current) return;
    const deltaX = e.clientX - templateSelectorResizeStartRef.current.startX;
    const deltaY = e.clientY - templateSelectorResizeStartRef.current.startY;
    const minW = 380;
    const maxW = Math.min(1000, window.innerWidth - 20);
    const minH = 340;
    const maxH = Math.min(850, window.innerHeight - 30);

    const newW = Math.min(Math.max(minW, templateSelectorResizeStartRef.current.startW + deltaX), maxW);
    const newH = Math.min(Math.max(minH, templateSelectorResizeStartRef.current.startH + deltaY), maxH);
    setTemplateSelectorSize({ width: newW, height: newH });
  };

  const handleTemplateSelectorResizePointerUp = (e: React.PointerEvent) => {
    setIsResizingTemplateSelector(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const handleActionClick = (action: ChemToolbarAction) => {
    const el = textareaRef.current;
    if (!el) return;

    const start = el.selectionStart;
    const end = el.selectionEnd;
    const selected = el.value.substring(start, end).trim();

    // Open Interactive Direct-Fill Modal for high-school students
    if (action.customHandler === 'fraction' || action.id === 'fraction') {
      let num = selected;
      let den = '';
      if (selected.includes('/')) {
        const parts = selected.split('/');
        num = parts[0].trim();
        den = parts.slice(1).join('/').trim();
      }
      setFormulaFillState({
        type: 'fraction',
        title: '➗ Isi Pecahan (a/b)',
        field1Label: 'Pembilang (Bagian Atas):',
        field1Placeholder: 'Misal: 2.45 * 10.0 atau PV',
        field1Value: num,
        field2Label: 'Penyebut (Bagian Bawah):',
        field2Placeholder: 'Misal: 0.08206 * 298.15 atau RT',
        field2Value: den,
        helperText: 'Ketik nilai pembilang dan penyebut, formula langsung terkonversi otomatis.',
      });
      return;
    }

    if (action.customHandler === 'superscript' || action.id === 'superscript') {
      const charBefore = start > 0 ? el.value[start - 1] : '';
      const base = /[a-zA-Z0-9]/.test(charBefore) ? charBefore : '10';
      setFormulaFillState({
        type: 'superscript',
        title: '⚡ Isi Pangkat / Eksponen (Xᵃ)',
        field1Label: 'Basis Angka / Variabel:',
        field1Placeholder: 'Misal: 10 atau [H+] atau e',
        field1Value: base,
        field2Label: 'Pangkat / Eksponen:',
        field2Placeholder: 'Misal: 2 atau -5 atau +',
        field2Value: selected || '2',
        helperText: 'Menghasilkan notasi pangkat atau muatan kimia KaTeX.',
      });
      return;
    }

    if (action.customHandler === 'subscript' || action.id === 'subscript') {
      const charBefore = start > 0 ? el.value[start - 1] : '';
      const base = /[a-zA-Z0-9]/.test(charBefore) ? charBefore : 'C';
      setFormulaFillState({
        type: 'subscript',
        title: '🔻 Isi Subscript / Indeks (Xₐ)',
        field1Label: 'Unsur / Variabel:',
        field1Placeholder: 'Misal: C atau H atau O',
        field1Value: base,
        field2Label: 'Angka Indeks / Keterangan:',
        field2Placeholder: 'Misal: 2 atau rxn atau tot',
        field2Value: selected || '2',
        helperText: 'Menghasilkan notasi indeks bawah formula kimia.',
      });
      return;
    }

    if (action.customHandler === 'ce' || action.id === 'smart_ce') {
      setFormulaFillState({
        type: 'ce',
        title: '🧪 Formula Kimia mhchem \\ce{...}',
        field1Label: 'Rumus Senyawa / Reaksi:',
        field1Placeholder: 'Misal: BaCO3 atau KMnO4 atau CuSO4.5H2O',
        field1Value: selected || 'H2O',
        helperText: 'Menghasilkan format senyawa standar mhchem tanpa perlu mengetik garis bawah manual.',
      });
      return;
    }

    if (action.id === 'times_ten') {
      setFormulaFillState({
        type: 'times_ten',
        title: '🔬 Notasi Ilmiah (×10ⁿ)',
        field1Label: 'Koefisien Angka Depan:',
        field1Placeholder: 'Misal: 1.52 atau 2.45',
        field1Value: selected || '1.0',
        field2Label: 'Pangkat Sepuluh (Eksponen):',
        field2Placeholder: 'Misal: 5 atau -10 atau 23',
        field2Value: '5',
        helperText: 'Menghasilkan notasi perkalian pangkat sepuluh standar ilmiah.',
      });
      return;
    }

    // Direct injection for arrows, Greek letters, and simple symbols
    const updatedVal = injectAtCursor(el, action.snippet, { placeholder: 'x' });
    if (onValueChange) {
      onValueChange(updatedVal);
    }
  };

  const handleInsertFilledFormula = () => {
    const el = textareaRef.current;
    if (!el || !formulaFillState) return;

    let formulaStr = '';
    const { type, field1Value, field2Value } = formulaFillState;

    if (type === 'fraction') {
      const num = field1Value.trim() || 'a';
      const den = field2Value?.trim() || 'b';
      formulaStr = '$\\frac{' + num + '}{' + den + '}$';
    } else if (type === 'superscript') {
      const b = field1Value.trim() || 'X';
      const p = field2Value?.trim() || '2';
      formulaStr = '$' + b + '^{' + p + '}$';
    } else if (type === 'subscript') {
      const b = field1Value.trim() || 'X';
      const s = field2Value?.trim() || '1';
      formulaStr = '$' + b + '_{' + s + '}$';
    } else if (type === 'ce') {
      formulaStr = '$\\ce{' + (field1Value.trim() || 'H2O') + '}$';
    } else if (type === 'times_ten') {
      const coef = field1Value.trim() || '1.0';
      const exp = field2Value?.trim() || '5';
      formulaStr = '$' + coef + ' \\times 10^{' + exp + '}$';
    }

    if (formulaStr) {
      const updated = injectAtCursor(el, formulaStr);
      if (onValueChange) {
        onValueChange(updated);
      }
    }

    setFormulaFillState(null);
  };

  const getPreviewFormula = (): string => {
    if (!formulaFillState) return '';
    const { type, field1Value, field2Value } = formulaFillState;
    if (type === 'fraction') {
      return '$\\frac{' + (field1Value.trim() || 'a') + '}{' + (field2Value?.trim() || 'b') + '}$';
    }
    if (type === 'superscript') {
      return '$' + (field1Value.trim() || 'X') + '^{' + (field2Value?.trim() || '2') + '}$';
    }
    if (type === 'subscript') {
      return '$' + (field1Value.trim() || 'X') + '_{' + (field2Value?.trim() || '1') + '}$';
    }
    if (type === 'ce') {
      return '$\\ce{' + (field1Value.trim() || 'H2O') + '}$';
    }
    if (type === 'times_ten') {
      return '$' + (field1Value.trim() || '1.0') + ' \\times 10^{' + (field2Value?.trim() || '5') + '}$';
    }
    return '';
  };

  // Open Template Fill Dialog
  const handleSelectTemplateForFill = (tpl: FormulaTemplate) => {
    setShowTemplatesModal(false);
    const config = getTemplateFillConfig(tpl);
    const initialValues: Record<string, string> = {};
    config.fields.forEach((f) => {
      initialValues[f.key] = f.defaultValue || '';
    });

    setTemplateFillState({
      template: tpl,
      title: config.title,
      helperText: config.helperText,
      fields: config.fields,
      values: initialValues,
      buildFormula: config.buildFormula,
    });
  };

  const handleInsertFilledTemplate = () => {
    const el = textareaRef.current;
    if (!el || !templateFillState) return;

    const formula = templateFillState.buildFormula(templateFillState.values);
    const updated = injectAtCursor(el, '\n' + formula + '\n');
    if (onValueChange) {
      onValueChange(updated);
    }
    setTemplateFillState(null);
  };

  const handleInsertBareTemplate = () => {
    const el = textareaRef.current;
    if (!el || !templateFillState) return;

    const updated = injectAtCursor(el, '\n' + templateFillState.template.snippet + '\n');
    if (onValueChange) {
      onValueChange(updated);
    }
    setTemplateFillState(null);
  };

  const handleAutoFormat = () => {
    const el = textareaRef.current;
    if (!el) return;

    const formatted = autoFormatChemicalShorthand(el.value);
    el.value = formatted;
    if (onValueChange) {
      onValueChange(formatted);
    }

    setFormatAppliedToast(true);
    setTimeout(() => setFormatAppliedToast(false), 2500);
  };

  const filteredActions =
    activeCategory === 'all'
      ? CHEM_TOOLBAR_ACTIONS
      : CHEM_TOOLBAR_ACTIONS.filter((a) => a.category === activeCategory);

  const filteredTemplates =
    selectedTemplateTab === 'all'
      ? QUICK_FORMULA_TEMPLATES
      : QUICK_FORMULA_TEMPLATES.filter((t) => t.category === selectedTemplateTab);

  return (
    <div className={`bg-white border-b border-slate-200 p-2.5 shadow-2xs select-none ${className}`}>
      {/* Top Header Row: Smart Actions for High School Students */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-100">
        {/* Quick Helper Tools */}
        <div className="flex items-center gap-1.5">
          {/* Template Button */}
          <button
            type="button"
            onClick={() => setShowTemplatesModal(true)}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold text-sky-800 bg-sky-50 hover:bg-sky-100 border border-sky-200/80 rounded-md transition-all shadow-2xs active:scale-95"
            title="Pilih rumus kimia & matematika siap pakai dengan input variabel ramah siswa"
          >
            <FileText className="w-3.5 h-3.5 text-sky-600" />
            <span>📋 Template Cepat OSN</span>
            <ChevronDown className="w-3 h-3 text-sky-400" />
          </button>

          {/* Magic Auto-Format Button */}
          <button
            type="button"
            onClick={handleAutoFormat}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200/80 rounded-md transition-all shadow-2xs active:scale-95"
            title="Rapikan shorthand kimia otomatis (misal: -> jadi panah, delta H jadi ΔH°, x10^5 jadi notasi ilmiah)"
          >
            <Wand2 className="w-3.5 h-3.5 text-amber-600" />
            <span>🪄 Rapikan Format Kimia</span>
          </button>

          {formatAppliedToast && (
            <span className="text-[11px] font-semibold text-emerald-700 animate-in fade-in flex items-center gap-1">
              ✓ Format dirapikan!
            </span>
          )}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-1 overflow-x-auto text-[11px] py-0.5 mb-2">
        <button
          type="button"
          onClick={() => setActiveCategory('all')}
          className={`px-2 py-0.5 rounded-md font-medium whitespace-nowrap transition-colors ${
            activeCategory === 'all'
              ? 'bg-sky-500 text-white font-bold'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Semua
        </button>
        <button
          type="button"
          onClick={() => setActiveCategory('format')}
          className={`px-2 py-0.5 rounded-md font-medium whitespace-nowrap transition-colors ${
            activeCategory === 'format'
              ? 'bg-sky-500 text-white font-bold'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Pecahan & Notasi
        </button>
        <button
          type="button"
          onClick={() => setActiveCategory('arrow')}
          className={`px-2 py-0.5 rounded-md font-medium whitespace-nowrap transition-colors ${
            activeCategory === 'arrow'
              ? 'bg-sky-500 text-white font-bold'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Panah Reaksi
        </button>
        <button
          type="button"
          onClick={() => setActiveCategory('phase')}
          className={`px-2 py-0.5 rounded-md font-medium whitespace-nowrap transition-colors ${
            activeCategory === 'phase'
              ? 'bg-sky-500 text-white font-bold'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Fase
        </button>
        <button
          type="button"
          onClick={() => setActiveCategory('thermo')}
          className={`px-2 py-0.5 rounded-md font-medium whitespace-nowrap transition-colors ${
            activeCategory === 'thermo'
              ? 'bg-sky-500 text-white font-bold'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Termo & K
        </button>
        <button
          type="button"
          onClick={() => setActiveCategory('greek')}
          className={`px-2 py-0.5 rounded-md font-medium whitespace-nowrap transition-colors ${
            activeCategory === 'greek'
              ? 'bg-sky-500 text-white font-bold'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Yunani & Operasi
        </button>
        <button
          type="button"
          onClick={() => setActiveCategory('ion')}
          className={`px-2 py-0.5 rounded-md font-medium whitespace-nowrap transition-colors ${
            activeCategory === 'ion'
              ? 'bg-sky-500 text-white font-bold'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Ion
        </button>
      </div>

      {/* Buttons Grid */}
      <div className="flex flex-wrap items-center gap-1">
        {filteredActions.map((action) => (
          <button
            key={action.id}
            type="button"
            onClick={() => handleActionClick(action)}
            title={action.tooltip}
            className={`min-w-[28px] h-7 px-2 flex items-center justify-center rounded-lg border text-xs font-mono transition-all active:scale-95 ${
              action.category === 'format'
                ? 'bg-sky-50 border-sky-200 text-sky-800 font-bold hover:bg-sky-100'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
            }`}
          >
            {action.displayMath ? (
              <KaTeXRenderer content={'$' + action.displayMath + '$'} className="pointer-events-none" />
            ) : (
              <span>{action.label}</span>
            )}
          </button>
        ))}
      </div>

      {/* Quick Formula Templates Selector Modal */}
      {showTemplatesModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/30 backdrop-blur-2xs animate-in fade-in">
          <div
            style={{
              width: `${templateSelectorSize.width}px`,
              height: `${templateSelectorSize.height}px`,
            }}
            className="bg-white rounded-2xl max-w-[95vw] max-h-[90vh] border border-slate-200 shadow-2xl overflow-hidden flex flex-col relative"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-sky-50/50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-sm shadow-2xs">
                  📋
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 font-display">
                    Koleksi Template Cepat OSN Kimia
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Pilih rumus di bawah ini untuk membuka pop-up pengisian variabel dan angka secara interaktif.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowTemplatesModal(false)}
                className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Template Category Tabs */}
            <div className="flex items-center gap-1 px-6 pt-3 pb-2 border-b border-slate-200 overflow-x-auto text-xs font-semibold bg-white">
              <button
                onClick={() => setSelectedTemplateTab('all')}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                  selectedTemplateTab === 'all'
                    ? 'bg-sky-600 text-white font-bold'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                Semua Kategori
              </button>
              <button
                onClick={() => setSelectedTemplateTab('stoikiometri')}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                  selectedTemplateTab === 'stoikiometri'
                    ? 'bg-sky-600 text-white font-bold'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                Stoikiometri & Gas
              </button>
              <button
                onClick={() => setSelectedTemplateTab('termo')}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                  selectedTemplateTab === 'termo'
                    ? 'bg-sky-600 text-white font-bold'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                Termodinamika
              </button>
              <button
                onClick={() => setSelectedTemplateTab('larutan')}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                  selectedTemplateTab === 'larutan'
                    ? 'bg-sky-600 text-white font-bold'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                Kesetimbangan & Larutan
              </button>
              <button
                onClick={() => setSelectedTemplateTab('elektro')}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                  selectedTemplateTab === 'elektro'
                    ? 'bg-sky-600 text-white font-bold'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                Elektrokimia
              </button>
              <button
                onClick={() => setSelectedTemplateTab('reaksi')}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                  selectedTemplateTab === 'reaksi'
                    ? 'bg-sky-600 text-white font-bold'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                Reaksi Kimia
              </button>
            </div>

            {/* Template List Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-3">
              {filteredTemplates.map((tpl) => (
                <div
                  key={tpl.id}
                  className="p-4 rounded-xl border border-slate-200 hover:border-sky-400 hover:bg-sky-50/20 transition-all space-y-2 group shadow-2xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-slate-900 group-hover:text-sky-700">
                      {tpl.name}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                      {tpl.category}
                    </span>
                  </div>

                  {/* Rendered Preview */}
                  <div className="p-2.5 bg-white border border-slate-200 rounded-lg text-xs overflow-x-auto">
                    <KaTeXRenderer content={tpl.snippet} />
                  </div>

                  <p className="text-[11px] text-slate-500">{tpl.description}</p>

                  <div className="flex items-center justify-end gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => {
                        const el = textareaRef.current;
                        if (!el) return;
                        const updated = injectAtCursor(el, '\n' + tpl.snippet + '\n');
                        if (onValueChange) onValueChange(updated);
                        setShowTemplatesModal(false);
                      }}
                      className="px-2.5 py-1 text-[11px] font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
                      title="Langsung sisipkan rumus apa adanya tanpa mengisi variabel"
                    >
                      Sisipkan Cepat
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSelectTemplateForFill(tpl)}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold rounded-lg transition-all shadow-2xs active:scale-95"
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>✨ Bantu Isi Variabel Rumus</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex justify-end">
              <button
                type="button"
                onClick={() => setShowTemplatesModal(false)}
                className="px-4 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100"
              >
                Tutup
              </button>
            </div>

            {/* Bottom-Right Resize Grip Handle */}
            <div
              onPointerDown={handleTemplateSelectorResizePointerDown}
              onPointerMove={handleTemplateSelectorResizePointerMove}
              onPointerUp={handleTemplateSelectorResizePointerUp}
              className="absolute bottom-1 right-1 w-5 h-5 cursor-se-resize flex items-center justify-center text-slate-400 hover:text-sky-600 active:text-sky-700 transition-colors select-none z-20 touch-none"
              title="Tarik untuk mengubah ukuran (Resize)"
            >
              <svg viewBox="0 0 6 6" className="w-2.5 h-2.5 fill-current">
                <circle cx="5" cy="5" r="0.75" />
                <circle cx="5" cy="3" r="0.75" />
                <circle cx="3" cy="5" r="0.75" />
                <circle cx="5" cy="1" r="0.75" />
                <circle cx="3" cy="3" r="0.75" />
                <circle cx="1" cy="5" r="0.75" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Direct-Fill Modal for Formula Ramah (Floating & Draggable Window, No Dark Background, No Blur) */}
      {formulaFillState && (
        <div className="fixed inset-0 z-50 pointer-events-none select-none">
          <div
            style={{
              transform: `translate3d(${fillPosition.x}px, ${fillPosition.y}px, 0)`,
              width: `${fillSize.width}px`,
              height: `${fillSize.height}px`,
            }}
            className="pointer-events-auto bg-white/98 rounded-2xl border border-slate-300 shadow-2xl overflow-hidden flex flex-col transition-shadow animate-in zoom-in-95 duration-150 ring-1 ring-slate-900/10 relative max-w-[95vw] max-h-[90vh]"
          >
            {/* Draggable Header (Biru Muda / Sky Gradient) */}
            <div
              onPointerDown={handleFillPointerDown}
              onPointerMove={handleFillPointerMove}
              onPointerUp={handleFillPointerUp}
              className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white cursor-grab active:cursor-grabbing select-none shadow-xs"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center text-xs font-bold">
                  ✨
                </div>
                <div>
                  <h3 className="text-xs font-bold font-display tracking-wide text-white">
                    {formulaFillState.title}
                  </h3>
                </div>
                <span className="px-1.5 py-0.5 text-[9px] bg-white/20 rounded font-mono font-semibold flex items-center gap-1">
                  <Move className="w-2.5 h-2.5" />
                  <span>Geser</span>
                </span>
              </div>
              <button
                type="button"
                onClick={() => setFormulaFillState(null)}
                className="p-1 text-white/80 hover:text-white hover:bg-white/20 rounded-lg transition-colors"
                title="Tutup (Esc)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Form Body */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleInsertFilledFormula();
              }}
              className="p-4 space-y-3.5 select-text flex-1 overflow-y-auto min-h-0"
            >
              <p className="text-[11px] text-slate-500 leading-relaxed">
                {formulaFillState.helperText}
              </p>

              <div className="space-y-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {formulaFillState.field1Label}
                  </label>
                  <input
                    type="text"
                    autoFocus
                    value={formulaFillState.field1Value}
                    onChange={(e) =>
                      setFormulaFillState({
                        ...formulaFillState,
                        field1Value: e.target.value,
                      })
                    }
                    placeholder={formulaFillState.field1Placeholder}
                    className="w-full px-3 py-2 text-xs font-mono font-medium text-slate-900 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                  />
                </div>

                {formulaFillState.field2Label && (
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      {formulaFillState.field2Label}
                    </label>
                    <input
                      type="text"
                      value={formulaFillState.field2Value || ''}
                      onChange={(e) =>
                        setFormulaFillState({
                          ...formulaFillState,
                          field2Value: e.target.value,
                        })
                      }
                      placeholder={formulaFillState.field2Placeholder}
                      className="w-full px-3 py-2 text-xs font-mono font-medium text-slate-900 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                    />
                  </div>
                )}
              </div>

              {/* Live Render Preview */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <span className="text-[10px] font-bold text-sky-800 uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-sky-600" />
                  <span>Pratinjau Hasil Formula:</span>
                </span>
                <div className="p-2.5 bg-white border border-slate-200 rounded-lg text-center text-sm font-semibold min-h-[44px] flex items-center justify-center">
                  <KaTeXRenderer content={getPreviewFormula()} />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-between pt-1">
                <button
                  type="button"
                  onClick={() => setFormulaFillState(null)}
                  className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold rounded-xl transition-all shadow-sm hover:shadow-md active:scale-95 flex items-center gap-1.5"
                >
                  <span>✓ Sisipkan ke Lembar (Enter)</span>
                </button>
              </div>
            </form>

            {/* Bottom-Right Resize Grip Handle */}
            <div
              onPointerDown={handleFillResizePointerDown}
              onPointerMove={handleFillResizePointerMove}
              onPointerUp={handleFillResizePointerUp}
              className="absolute bottom-1 right-1 w-5 h-5 cursor-se-resize flex items-center justify-center text-slate-400 hover:text-sky-600 active:text-sky-700 transition-colors select-none z-20 touch-none"
              title="Tarik untuk mengubah ukuran (Resize)"
            >
              <svg viewBox="0 0 6 6" className="w-2.5 h-2.5 fill-current">
                <circle cx="5" cy="5" r="0.75" />
                <circle cx="5" cy="3" r="0.75" />
                <circle cx="3" cy="5" r="0.75" />
                <circle cx="5" cy="1" r="0.75" />
                <circle cx="3" cy="3" r="0.75" />
                <circle cx="1" cy="5" r="0.75" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Direct-Fill Modal for TEMPLATE CEPAT OSN (Floating & Draggable Window, Shared Position) */}
      {templateFillState && (
        <div className="fixed inset-0 z-50 pointer-events-none select-none">
          <div
            style={{
              transform: `translate3d(${fillPosition.x}px, ${fillPosition.y}px, 0)`,
              width: `${fillSize.width}px`,
              height: `${fillSize.height}px`,
            }}
            className="pointer-events-auto bg-white/98 rounded-2xl border border-slate-300 shadow-2xl overflow-hidden flex flex-col transition-shadow animate-in zoom-in-95 duration-150 ring-1 ring-slate-900/10 relative max-w-[95vw] max-h-[90vh]"
          >
            {/* Draggable Header (Biru Muda / Sky Gradient) */}
            <div
              onPointerDown={handleFillPointerDown}
              onPointerMove={handleFillPointerMove}
              onPointerUp={handleFillPointerUp}
              className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white cursor-grab active:cursor-grabbing select-none shadow-xs"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center text-xs font-bold">
                  📋
                </div>
                <div>
                  <h3 className="text-xs font-bold font-display tracking-wide text-white">
                    {templateFillState.title}
                  </h3>
                </div>
                <span className="px-1.5 py-0.5 text-[9px] bg-white/20 rounded font-mono font-semibold flex items-center gap-1">
                  <Move className="w-2.5 h-2.5" />
                  <span>Geser</span>
                </span>
              </div>
              <button
                type="button"
                onClick={() => setTemplateFillState(null)}
                className="p-1 text-white/80 hover:text-white hover:bg-white/20 rounded-lg transition-colors"
                title="Tutup (Esc)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Form Body */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleInsertFilledTemplate();
              }}
              className="p-4 space-y-3.5 select-text flex-1 overflow-y-auto min-h-0"
            >
              <p className="text-[11px] text-slate-500 leading-relaxed">
                {templateFillState.helperText}
              </p>

              {/* Dynamic Parameter Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {templateFillState.fields.map((field, idx) => (
                  <div key={field.key} className={templateFillState.fields.length % 2 !== 0 && idx === 0 ? 'sm:col-span-2' : ''}>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      {field.label}
                    </label>
                    <input
                      type="text"
                      autoFocus={idx === 0}
                      value={templateFillState.values[field.key] || ''}
                      onChange={(e) => {
                        const val = e.target.value;
                        setTemplateFillState((prev) =>
                          prev
                            ? {
                                ...prev,
                                values: {
                                  ...prev.values,
                                  [field.key]: val,
                                },
                              }
                            : null
                        );
                      }}
                      placeholder={field.placeholder}
                      className="w-full px-3 py-1.5 text-xs font-mono font-medium text-slate-900 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                    />
                  </div>
                ))}
              </div>

              {/* Live Render Preview */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <span className="text-[10px] font-bold text-sky-800 uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-sky-600" />
                  <span>Pratinjau Hasil Perhitungan KaTeX:</span>
                </span>
                <div className="p-2.5 bg-white border border-slate-200 rounded-lg text-center text-sm font-semibold min-h-[48px] flex items-center justify-center overflow-x-auto">
                  <KaTeXRenderer content={templateFillState.buildFormula(templateFillState.values)} />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    setTemplateFillState(null);
                    setShowTemplatesModal(true);
                  }}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Pilih Rumus Lain</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleInsertBareTemplate}
                    className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                    title="Sisipkan formula dasar tanpa angka yang Anda ketik"
                  >
                    Rumus Dasar Saja
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold rounded-xl transition-all shadow-sm hover:shadow-md active:scale-95 flex items-center gap-1.5"
                  >
                    <span>✓ Sisipkan ke Lembar (Enter)</span>
                  </button>
                </div>
              </div>
            </form>

            {/* Bottom-Right Resize Grip Handle */}
            <div
              onPointerDown={handleFillResizePointerDown}
              onPointerMove={handleFillResizePointerMove}
              onPointerUp={handleFillResizePointerUp}
              className="absolute bottom-1 right-1 w-5 h-5 cursor-se-resize flex items-center justify-center text-slate-400 hover:text-sky-600 active:text-sky-700 transition-colors select-none z-20 touch-none"
              title="Tarik untuk mengubah ukuran (Resize)"
            >
              <svg viewBox="0 0 6 6" className="w-2.5 h-2.5 fill-current">
                <circle cx="5" cy="5" r="0.75" />
                <circle cx="5" cy="3" r="0.75" />
                <circle cx="3" cy="5" r="0.75" />
                <circle cx="5" cy="1" r="0.75" />
                <circle cx="3" cy="3" r="0.75" />
                <circle cx="1" cy="5" r="0.75" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
