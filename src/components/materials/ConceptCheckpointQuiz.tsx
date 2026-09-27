import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  RotateCcw,
  Award,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { KaTeXRenderer } from '../common/KaTeXRenderer';
import { addXpLocally } from '../../lib/gamification';

interface CheckpointQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

// Bank soal checkpoint cerdas per tag konsep umum
const CHECKPOINT_BANK: Record<string, CheckpointQuestion> = {
  // Topik 1: Struktur Atom
  'model-atom-bohr': {
    question: 'Berdasarkan postulat kuantisasi Bohr, apa yang terjadi pada elektron hidrogen saat bertransisi dari kulit $n=3$ ke $n=1$?',
    options: [
      'Elektron menyerap foton dengan energi $\\Delta E = E_3 - E_1$',
      'Elektron memancarkan foton pada deret Lyman (daerah ultraviolet)',
      'Elektron memancarkan foton pada deret Balmer (cahaya tampak)',
      'Jari-jari orbital elektron bertambah besar secara eksponensial',
    ],
    correctIndex: 1,
    explanation: 'Transisi menuju tingkat dasar $n=1$ dari tingkat yang lebih tinggi menghasilkan emisi foton deret Lyman yang berada di spektrum ultraviolet.',
  },
  'bilangan-kuantum': {
    question: 'Manakah kombinasi bilangan kuantum $(n, l, m_l, m_s)$ yang TIDAK diperbolehkan menurut mekanika kuantum?',
    options: [
      '$(3, 2, -1, +\\frac{1}{2})$',
      '$(2, 1, 0, -\\frac{1}{2})$',
      '$(3, 3, 0, +\\frac{1}{2})$',
      '$(4, 0, 0, +\\frac{1}{2})$',
    ],
    correctIndex: 2,
    explanation: 'Nilai $l$ hanya boleh berkisar antara $0$ hingga $n-1$. Untuk $n=3$, nilai $l$ maksimal adalah $2$ (orbital d). Nilai $l=3$ tidak diizinkan.',
  },
  'aturan-slater': {
    question: 'Berdasarkan aturan penapisan Slater, berapa kontribusi konstanta perisai ($S$) elektron pada kulit $(n-1)$ untuk elektron valensi pada orbital $s$ atau $p$?',
    options: [
      '$0.35$ per elektron',
      '$0.85$ per elektron',
      '$1.00$ per elektron',
      '$0.30$ per elektron',
    ],
    correctIndex: 1,
    explanation: 'Untuk elektron pada kelompok $(ns, np)$, setiap elektron pada kulit $(n-1)$ memberikan kontribusi perisai sebesar $0.85$ terhadap muatan inti efektif $Z_{\\text{eff}}$.',
  },
  // Topik 2: Ikatan Kimia
  'teori-vsepr-geometri': {
    question: 'Molekul $\\ce{XeF4}$ memiliki 4 pasangan elektron ikatan (PEI) dan 2 pasangan elektron bebas (PEB). Apa geometri molekulnya?',
    options: [
      'Tetrahedral',
      'Oktahedral',
      'Segiempat planar (square planar)',
      'Bipiramida trigonal',
    ],
    correctIndex: 2,
    explanation: 'Geometri pasangan elektron (domain) adalah oktahedral ($AX_4E_2$). Karena kedua PEB menempati posisi aksial berlawanan untuk meminimalkan tolakan, bentuk molekulnya menjadi segiempat datar (square planar).',
  },
  // Topik 3: Stoikiometri
  'hukum-gas-ideal': {
    question: 'Gas nyata paling mendekati perilaku gas ideal pada kondisi manakah?',
    options: [
      'Tekanan tinggi dan suhu rendah',
      'Tekanan rendah dan suhu tinggi',
      'Tekanan tinggi dan suhu tinggi',
      'Tekanan rendah dan suhu rendah',
    ],
    correctIndex: 1,
    explanation: 'Pada tekanan rendah, jarak antarmolekul sangat jauh sehingga volume molekul diabaikan. Pada suhu tinggi, energi kinetik molekul sangat besar sehingga gaya tarik antarmolekul dapat diabaikan.',
  },
  // Topik 4: Termodinamika
  'energi-bebas-gibbs': {
    question: 'Suatu reaksi memiliki $\\Delta H > 0$ (endoterm) dan $\\Delta S > 0$. Pada kondisi bagaimanakah reaksi tersebut berlangsung spontan ($\\Delta G < 0$)?',
    options: [
      'Pada semua suhu',
      'Hanya pada suhu rendah',
      'Hanya pada suhu tinggi di mana $T > \\frac{\\Delta H}{\\Delta S}$',
      'Tidak pernah spontan pada suhu berapa pun',
    ],
    correctIndex: 2,
    explanation: 'Karena $\\Delta G = \\Delta H - T\\Delta S$, jika $\\Delta H$ positif dan $\\Delta S$ positif, nilai $\\Delta G$ akan bernilai negatif saat suku $T\\Delta S$ lebih besar dari $\\Delta H$, yakni pada suhu tinggi.',
  },
  // Topik 7: Elektrokimia
  'persamaan-nernst': {
    question: 'Berdasarkan persamaan Nernst $E = E^\\circ - \\frac{RT}{nF}\\ln Q$, apa yang terjadi pada potensial sel jika konsentrasi produk dinaikkan ($Q > 1$)?',
    options: [
      'Potensial sel $E$ akan bertambah besar',
      'Potensial sel $E$ akan menurun ($E < E^\\circ$)',
      'Potensial sel $E$ tetap konstan',
      'Potensial standar $E^\\circ$ ikut berubah',
    ],
    correctIndex: 1,
    explanation: 'Ketika $Q > 1$, nilai $\\ln Q > 0$, sehingga suku pengurangan bertambah dan nilai potensial sel terukur $E$ menjadi lebih kecil dari $E^\\circ$.',
  },
};

// Fallback dynamic generator jika tag tidak ada di bank statis
function getFallbackQuestion(title: string, summary: string): CheckpointQuestion {
  return {
    question: `Manakah simpulan utama yang paling tepat mengenai konsep "${title}"?`,
    options: [
      summary.length > 80 ? summary.slice(0, 80) + '...' : summary,
      'Konsep ini hanya berlaku untuk fasa gas ideal pada suhu nol mutlak ($0\\text{ K}$)',
      'Nilai parameter termodinamika selalu bernilai konstan tanpa dipengaruhi kesetimbangan',
      'Persamaan tidak memerlukan penyetaraan koefisien stoikiometri reaksi',
    ],
    correctIndex: 0,
    explanation: `Pilihan pertama merupakan inti konseptual yang tepat dari ${title}, sesuai prinsip dasar yang diuraikan pada materi.`,
  };
}

interface ConceptCheckpointQuizProps {
  conceptTag: string;
  conceptTitle: string;
  conceptSummary: string;
  conceptContent?: string;
  materialTitle?: string;
  topicNumber?: number;
  onXpEarned?: (amount: number) => void;
}

export const ConceptCheckpointQuiz: React.FC<ConceptCheckpointQuizProps> = ({
  conceptTag,
  conceptTitle,
  conceptSummary,
  materialTitle,
  topicNumber,
  onXpEarned,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(`osn_quiz_done_${conceptTag}`);
      return saved === 'true';
    } catch {
      return false;
    }
  });

  // Ambil pertanyaan dari bank atau fallback
  const quizData = React.useMemo(() => {
    return CHECKPOINT_BANK[conceptTag] || getFallbackQuestion(conceptTitle, conceptSummary);
  }, [conceptTag, conceptTitle, conceptSummary]);

  const isCorrect = selectedOption === quizData.correctIndex;

  const handleSubmit = (optionIdx: number) => {
    if (hasSubmitted && isCorrect) return;

    setSelectedOption(optionIdx);
    setHasSubmitted(true);

    if (optionIdx === quizData.correctIndex) {
      if (!isCompleted) {
        setIsCompleted(true);
        try {
          localStorage.setItem(`osn_quiz_done_${conceptTag}`, 'true');
        } catch {}
        addXpLocally(25);
        if (onXpEarned) onXpEarned(25);
      }
    }
  };

  const handleReset = () => {
    setSelectedOption(null);
    setHasSubmitted(false);
  };

  return (
    <div className="mt-4 pt-3 border-t border-slate-100">
      {/* Trigger Button / Accordion Header */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-3 rounded-xl text-xs font-semibold transition-all cursor-pointer select-none ${
          isCompleted
            ? 'bg-emerald-50 text-emerald-900 border border-emerald-200/80 hover:bg-emerald-100/70'
            : 'bg-indigo-50/70 text-indigo-900 border border-indigo-200/70 hover:bg-indigo-100/70'
        }`}
      >
        <div className="flex items-center gap-2">
          {isCompleted ? (
            <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center">
              <CheckCircle2 className="w-3.5 h-3.5" />
            </div>
          ) : (
            <div className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center">
              <HelpCircle className="w-3.5 h-3.5" />
            </div>
          )}
          <span className="font-bold">
            {isCompleted ? 'Checkpoint Pemahaman Selesai (+25 XP Didapatkan)' : 'Uji Pemahaman Cepat (Checkpoint Kuis)'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span
            className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
              isCompleted ? 'bg-emerald-200 text-emerald-950' : 'bg-indigo-200 text-indigo-950'
            }`}
          >
            {isCompleted ? 'Mastered' : '+25 XP'}
          </span>
          {isOpen ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
        </div>
      </button>

      {/* Quiz Body */}
      {isOpen && (
        <div className="mt-3 p-4 bg-slate-50/80 rounded-2xl border border-slate-200 space-y-4 animate-in fade-in duration-200">
          <div className="text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed">
            <KaTeXRenderer content={quizData.question} />
          </div>

          {/* Options */}
          <div className="space-y-2">
            {quizData.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isOptionCorrect = idx === quizData.correctIndex;

              let btnStyle = 'bg-white border-slate-200 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50/30';

              if (hasSubmitted) {
                if (isOptionCorrect) {
                  btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-300/50';
                } else if (isSelected && !isOptionCorrect) {
                  btnStyle = 'bg-rose-50 border-rose-400 text-rose-950 font-bold';
                } else {
                  btnStyle = 'bg-white border-slate-200 text-slate-400 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSubmit(idx)}
                  disabled={hasSubmitted && isCorrect}
                  className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-2.5 cursor-pointer ${btnStyle}`}
                >
                  <span className="w-5 h-5 rounded-lg bg-slate-100 flex items-center justify-center font-mono font-bold text-[11px] shrink-0 mt-0.5 text-slate-600">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <div className="flex-1 min-w-0">
                    <KaTeXRenderer content={opt} inlineOnly />
                  </div>
                  {hasSubmitted && isOptionCorrect && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  )}
                  {hasSubmitted && isSelected && !isOptionCorrect && (
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box */}
          {hasSubmitted && (
            <div
              className={`p-3.5 rounded-xl border text-xs leading-relaxed space-y-1.5 animate-in fade-in ${
                isCorrect
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                  : 'bg-rose-50 border-rose-200 text-rose-950'
              }`}
            >
              <div className="flex items-center justify-between font-bold">
                <span className="flex items-center gap-1.5">
                  {isCorrect ? (
                    <>
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Jawaban Tepat! (+25 XP Berhasil Diklaim)</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-3.5 h-3.5 text-rose-600" />
                      <span>Belum Tepat, Pelajari Pembahasan Berikut:</span>
                    </>
                  )}
                </span>

                {!isCorrect && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-white hover:bg-slate-100 text-slate-700 font-bold rounded-lg border border-slate-300 text-[10px] transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3 text-slate-500" />
                    <span>Coba Lagi</span>
                  </button>
                )}
              </div>
              <p className="text-[11px] opacity-90">
                <KaTeXRenderer content={quizData.explanation} />
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
