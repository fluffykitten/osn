import React, { useState, useEffect, useMemo } from 'react';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  RotateCcw,
  Award,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Check,
  X,
  Target,
  Trophy,
} from 'lucide-react';
import { KaTeXRenderer } from '../common/KaTeXRenderer';
import { addXpLocally, triggerCelebration } from '../../lib/gamification';
import { checkpointProgressService, type CheckpointResult } from '../../services/checkpointProgressService';
import type { CheckpointQuizItem } from '../../data/materialsData';

interface LegacyCheckpointQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

// Bank soal legasi per tag umum (untuk materi lama sebelum revamp)
const LEGACY_CHECKPOINT_BANK: Record<string, LegacyCheckpointQuestion> = {
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

function getFallbackLegacyQuestion(title: string, summary: string): LegacyCheckpointQuestion {
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

export interface ConceptCheckpointQuizProps {
  conceptTag: string;
  conceptTitle: string;
  conceptSummary: string;
  conceptContent?: string;
  materialTitle?: string;
  topicNumber?: number;
  checkpointQuizzes?: CheckpointQuizItem[];
  onXpEarned?: (amount: number) => void;
}

export const ConceptCheckpointQuiz: React.FC<ConceptCheckpointQuizProps> = ({
  conceptTag,
  conceptTitle,
  conceptSummary,
  checkpointQuizzes,
  onXpEarned,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Status progres dari service persistensi
  const [savedProgress, setSavedProgress] = useState<CheckpointResult | null>(() => {
    return checkpointProgressService.getProgress(conceptTag);
  });

  const isCompleted = Boolean(savedProgress?.completed);

  // Sinkronisasi event eksternal
  useEffect(() => {
    const handleUpdate = (e: CustomEvent<{ conceptTag: string; result: CheckpointResult | null }>) => {
      if (e.detail?.conceptTag === conceptTag) {
        setSavedProgress(e.detail.result);
      }
    };
    window.addEventListener('osn_checkpoint_progress_updated' as any, handleUpdate as any);
    return () => {
      window.removeEventListener('osn_checkpoint_progress_updated' as any, handleUpdate as any);
    };
  }, [conceptTag]);

  // Mode baru (multi-soal terspesialisasi) atau mode legasi
  const hasStructuredQuizzes = Boolean(checkpointQuizzes && checkpointQuizzes.length > 0);
  const quizList: CheckpointQuizItem[] = useMemo(() => {
    if (hasStructuredQuizzes && checkpointQuizzes) {
      return checkpointQuizzes;
    }
    // Konversi bank legasi ke format CheckpointQuizItem
    const legacy = LEGACY_CHECKPOINT_BANK[conceptTag] || getFallbackLegacyQuestion(conceptTitle, conceptSummary);
    return [
      {
        id: `legacy-${conceptTag}`,
        type: 'multiple_choice',
        question: legacy.question,
        options: legacy.options,
        correctAnswer: legacy.correctIndex,
        explanation: legacy.explanation,
      },
    ];
  }, [hasStructuredQuizzes, checkpointQuizzes, conceptTag, conceptTitle, conceptSummary]);

  // State Stepper Kuis
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number | boolean>>({});
  const [submittedSteps, setSubmittedSteps] = useState<Record<number, boolean>>({});
  const [firstAttemptCorrect, setFirstAttemptCorrect] = useState<Record<number, boolean>>({});
  const [showSummary, setShowSummary] = useState(false);

  const activeQuiz = quizList[currentStep] || quizList[0];
  const isCurrentSubmitted = Boolean(submittedSteps[currentStep]);
  const currentSelected = selectedAnswers[activeQuiz?.id];

  // Evaluasi jawaban saat ini
  const isCurrentCorrect = useMemo(() => {
    if (!isCurrentSubmitted || currentSelected === undefined) return false;
    if (activeQuiz.type === 'true_false') {
      return currentSelected === activeQuiz.correctAnswer;
    }
    return currentSelected === activeQuiz.correctAnswer;
  }, [isCurrentSubmitted, currentSelected, activeQuiz]);

  // Handle klik jawaban
  const handleSelectAnswer = (answer: number | boolean) => {
    if (isCurrentSubmitted && isCurrentCorrect) return;

    setSelectedAnswers((prev) => ({
      ...prev,
      [activeQuiz.id]: answer,
    }));
    setSubmittedSteps((prev) => ({
      ...prev,
      [currentStep]: true,
    }));

    const isCorrect = answer === activeQuiz.correctAnswer;
    if (firstAttemptCorrect[currentStep] === undefined) {
      setFirstAttemptCorrect((prev) => ({
        ...prev,
        [currentStep]: isCorrect,
      }));
    }
  };

  // Tombol Coba Lagi per soal
  const handleRetryCurrentQuestion = () => {
    setSelectedAnswers((prev) => {
      const copy = { ...prev };
      delete copy[activeQuiz.id];
      return copy;
    });
    setSubmittedSteps((prev) => ({
      ...prev,
      [currentStep]: false,
    }));
  };

  // Navigasi ke soal berikutnya atau selesaikan
  const handleNextStep = () => {
    if (currentStep < quizList.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Selesai seluruh soal
      handleCompleteQuiz();
    }
  };

  const handleCompleteQuiz = () => {
    setShowSummary(true);

    // Hitung total skor
    let correctCount = 0;
    quizList.forEach((q, idx) => {
      const ans = selectedAnswers[q.id];
      if (ans === q.correctAnswer) {
        correctCount++;
      }
    });

    const isAllCorrect = correctCount === quizList.length;

    // Simpan progres ke service
    const answersRecord: CheckpointResult['answers'] = {};
    quizList.forEach((q) => {
      const ans = selectedAnswers[q.id];
      answersRecord[q.id] = {
        quizId: q.id,
        type: q.type,
        selectedAnswer: ans !== undefined ? ans : false,
        isCorrect: ans === q.correctAnswer,
        attemptCount: 1,
      };
    });

    const xpToAward = 30;

    const result: CheckpointResult = {
      conceptTag,
      conceptTitle,
      completed: true,
      score: correctCount,
      totalQuestions: quizList.length,
      answers: answersRecord,
      xpAwarded: xpToAward,
      lastAttemptAt: new Date().toISOString(),
    };

    checkpointProgressService.saveProgress(result);
    setSavedProgress(result);

    // Berikan XP jika belum pernah tuntas sebelumnya
    if (!isCompleted) {
      addXpLocally(xpToAward);
      if (onXpEarned) onXpEarned(xpToAward);
      if (isAllCorrect) {
        triggerCelebration();
      }
    }
  };

  const handleResetEntireQuiz = () => {
    setCurrentStep(0);
    setSelectedAnswers({});
    setSubmittedSteps({});
    setFirstAttemptCorrect({});
    setShowSummary(false);
  };

  return (
    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
      {/* Trigger Button / Accordion Header */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-3.5 rounded-2xl text-xs font-semibold transition-all cursor-pointer select-none shadow-sm ${
          isCompleted
            ? 'bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 text-emerald-950 border border-emerald-200/80 hover:border-emerald-300'
            : 'bg-gradient-to-r from-indigo-50/90 via-sky-50/70 to-indigo-50/90 text-indigo-950 border border-indigo-200/80 hover:border-indigo-300'
        }`}
      >
        <div className="flex items-center gap-2.5">
          {isCompleted ? (
            <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-sm">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          ) : (
            <div className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-sm">
              <HelpCircle className="w-4 h-4" />
            </div>
          )}
          <div className="text-left">
            <span className="font-bold block text-[13px]">
              {isCompleted
                ? `Checkpoint Pemahaman Selesai (${savedProgress?.score ?? quizList.length}/${quizList.length} Benar)`
                : 'Uji Pemahaman Cepat (Checkpoint Kuis)'}
            </span>
            <span className="text-[11px] font-normal text-slate-500">
              {isCompleted
                ? 'Konsep telah dikuasai. Klik untuk meninjau atau mencoba ulang.'
                : `${quizList.length} soal konseptual & miskonsepsi untuk menguji ketajaman analisismu.`}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <span
            className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wide shadow-xs ${
              isCompleted
                ? 'bg-emerald-100 text-emerald-900 border border-emerald-300/60'
                : 'bg-indigo-100 text-indigo-900 border border-indigo-300/60'
            }`}
          >
            {isCompleted ? '✓ MASTERED' : `+30 XP (${quizList.length} SOAL)`}
          </span>
          <div className="w-6 h-6 rounded-full bg-white/80 flex items-center justify-center text-slate-500 border border-slate-200/60">
            {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </div>
        </div>
      </button>

      {/* Quiz Body */}
      {isOpen && (
        <div className="mt-3 p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-4 animate-in fade-in duration-200">
          {/* Summary Screen saat selesai */}
          {showSummary ? (
            <div className="p-6 bg-gradient-to-b from-indigo-50/60 to-white rounded-2xl border border-indigo-100 text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-200">
                <Trophy className="w-8 h-8 text-amber-300" />
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-900">
                  Uji Pemahaman Selesai!
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  Kamu berhasil menyelesaikan {quizList.length} soal konseptual untuk subtopik{' '}
                  <span className="font-semibold text-indigo-700">{conceptTitle}</span>.
                </p>
              </div>

              {/* Score Metric Card */}
              <div className="inline-flex items-center gap-4 px-5 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-1.5 text-emerald-700">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>
                    Skor Akhir:{' '}
                    <strong className="text-sm">
                      {savedProgress?.score ?? quizList.length} / {quizList.length}
                    </strong>
                  </span>
                </div>
                <div className="h-4 w-px bg-slate-200" />
                <div className="flex items-center gap-1 text-indigo-700">
                  <Sparkles className="w-4 h-4" />
                  <span>+30 XP Diklaim</span>
                </div>
              </div>

              <div className="pt-2 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={handleResetEntireQuiz}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Ulangi Kuis</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                >
                  <span>Tutup</span>
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Stepper Header Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-indigo-100 text-indigo-800 font-mono font-bold text-[11px]">
                    Soal {currentStep + 1} dari {quizList.length}
                  </span>
                  <span className="text-[11px] font-medium text-slate-500">
                    {activeQuiz.type === 'true_false' ? 'True / False Konseptual' : 'Pilihan Ganda'}
                  </span>
                </div>

                {/* Progress Indicators */}
                <div className="flex items-center gap-1.5">
                  {quizList.map((q, idx) => {
                    const isStepSubmitted = submittedSteps[idx];
                    const isStepActive = currentStep === idx;
                    const ans = selectedAnswers[q.id];
                    const isRight = ans === q.correctAnswer;

                    let dotColor = 'bg-slate-200';
                    if (isStepActive) {
                      dotColor = 'bg-indigo-600 ring-2 ring-indigo-200';
                    } else if (isStepSubmitted) {
                      dotColor = isRight ? 'bg-emerald-500' : 'bg-rose-500';
                    }

                    return (
                      <button
                        key={q.id || idx}
                        type="button"
                        onClick={() => setCurrentStep(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${dotColor}`}
                        title={`Buka Soal ${idx + 1}`}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Target Misconception Badge (if any) */}
              {activeQuiz.misconceptionTarget && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 rounded-xl border border-amber-200/70 text-amber-900 text-[11px]">
                  <Target className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span className="font-semibold">Fokus Konsep / Miskonsepsi:</span>
                  <span className="italic">{activeQuiz.misconceptionTarget}</span>
                </div>
              )}

              {/* Question Text */}
              <div className="text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed pt-1">
                <KaTeXRenderer content={activeQuiz.question} />
              </div>

              {/* Answers: True / False Mode */}
              {activeQuiz.type === 'true_false' ? (
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {[
                    { label: 'Benar', value: true, icon: Check },
                    { label: 'Salah', value: false, icon: X },
                  ].map((btn) => {
                    const isSelected = currentSelected === btn.value;
                    const isOptionCorrect = activeQuiz.correctAnswer === btn.value;
                    const IconComponent = btn.icon;

                    let btnClass =
                      'bg-slate-50 border-slate-200 text-slate-700 hover:bg-indigo-50/50 hover:border-indigo-300';

                    if (isCurrentSubmitted) {
                      if (isOptionCorrect) {
                        btnClass =
                          'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-300/50';
                      } else if (isSelected && !isOptionCorrect) {
                        btnClass = 'bg-rose-50 border-rose-400 text-rose-950 font-bold';
                      } else {
                        btnClass = 'bg-white border-slate-200 text-slate-400 opacity-60';
                      }
                    }

                    return (
                      <button
                        key={String(btn.value)}
                        type="button"
                        onClick={() => handleSelectAnswer(btn.value)}
                        disabled={isCurrentSubmitted && isCurrentCorrect}
                        className={`p-4 rounded-2xl border-2 flex items-center justify-center gap-2.5 font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-xs ${btnClass}`}
                      >
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            btn.value ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                          }`}
                        >
                          <IconComponent className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span>Pernyataan {btn.label}</span>
                      </button>
                    );
                  })}
                </div>
              ) : (
                /* Answers: Multiple Choice Mode */
                <div className="space-y-2 pt-1">
                  {(activeQuiz.options || []).map((opt, idx) => {
                    const isSelected = currentSelected === idx;
                    const isOptionCorrect = activeQuiz.correctAnswer === idx;

                    let btnStyle =
                      'bg-white border-slate-200 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50/30';

                    if (isCurrentSubmitted) {
                      if (isOptionCorrect) {
                        btnStyle =
                          'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-300/50';
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
                        onClick={() => handleSelectAnswer(idx)}
                        disabled={isCurrentSubmitted && isCurrentCorrect}
                        className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-2.5 cursor-pointer shadow-2xs ${btnStyle}`}
                      >
                        <span className="w-5 h-5 rounded-lg bg-slate-100 flex items-center justify-center font-mono font-bold text-[11px] shrink-0 mt-0.5 text-slate-600">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <div className="flex-1 min-w-0">
                          <KaTeXRenderer content={opt} inlineOnly />
                        </div>
                        {isCurrentSubmitted && isOptionCorrect && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        )}
                        {isCurrentSubmitted && isSelected && !isOptionCorrect && (
                          <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Feedback and Explanation Box */}
              {isCurrentSubmitted && (
                <div
                  className={`p-4 rounded-xl border text-xs leading-relaxed space-y-2 animate-in fade-in ${
                    isCurrentCorrect
                      ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                      : 'bg-rose-50/80 border-rose-200 text-rose-950'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold">
                    <span className="flex items-center gap-1.5">
                      {isCurrentCorrect ? (
                        <>
                          <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Analisis Konseptual Tepat!</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                          <span>Belum Tepat — Simak Penjelasan Konsep Berikut:</span>
                        </>
                      )}
                    </span>

                    {!isCurrentCorrect && (
                      <button
                        type="button"
                        onClick={handleRetryCurrentQuestion}
                        className="inline-flex items-center gap-1 px-2.5 py-1 bg-white hover:bg-slate-100 text-slate-700 font-bold rounded-lg border border-slate-300 text-[10px] transition-colors cursor-pointer shadow-xs"
                      >
                        <RotateCcw className="w-3 h-3 text-slate-500" />
                        <span>Coba Lagi</span>
                      </button>
                    )}
                  </div>

                  <div className="text-[11.5px] leading-relaxed opacity-95 pt-0.5">
                    <KaTeXRenderer content={activeQuiz.explanation} />
                  </div>
                </div>
              )}

              {/* Stepper Footer Controls */}
              {isCurrentSubmitted && (
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-medium">
                    {currentStep + 1 === quizList.length
                      ? 'Soal terakhir kuis'
                      : `Tersisa ${quizList.length - currentStep - 1} soal lagi`}
                  </span>

                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md transition-colors cursor-pointer"
                  >
                    <span>
                      {currentStep < quizList.length - 1 ? 'Soal Berikutnya' : 'Selesaikan & Lihat Hasil'}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};
