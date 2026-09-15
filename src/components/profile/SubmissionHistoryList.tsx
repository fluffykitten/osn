/**
 * SubmissionHistoryList.tsx
 * Daftar Riwayat Pengerjaan & Evaluasi Dewan Juri AI
 * Dilengkapi rincian kriteria rubrik langkah, catatan juri, dan diagnosa miskonsepsi
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { SavedSubmissionRecord } from '../../types/database';
import {
  Clock,
  CheckCircle2,
  XCircle,
  ChevronDown,
  ChevronUp,
  Sparkles,
  RotateCcw,
  AlertTriangle,
  Award,
  Zap,
  ExternalLink,
} from 'lucide-react';

interface SubmissionHistoryListProps {
  submissions: SavedSubmissionRecord[];
}

export const SubmissionHistoryList: React.FC<SubmissionHistoryListProps> = ({ submissions }) => {
  const navigate = useNavigate();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const formatDate = (isoString: string) => {
    try {
      const d = new Date(isoString);
      return d.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return isoString;
    }
  };

  const formatSeconds = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const remaining = sec % 60;
    return `${mins}m ${remaining}d`;
  };

  if (submissions.length === 0) {
    return (
      <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center space-y-3">
        <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 mx-auto flex items-center justify-center text-xl">
          📝
        </div>
        <h4 className="text-sm font-bold text-slate-700">Belum Ada Riwayat Pengerjaan</h4>
        <p className="text-xs text-slate-500 max-w-sm mx-auto">
          Mulai latihan dari Bank Soal atau Roadmap untuk mendapatkan evaluasi mendalam dari Dewan Juri AI.
        </p>
        <button
          onClick={() => navigate('/worksheet/static_module/1')}
          className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm"
        >
          <span>Mulai Lembar Kerja Soal #101</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {submissions.map((sub) => {
        const isExpanded = expandedId === sub.id;
        const isPerfect = sub.status === 'perfect' || sub.scorePercentage >= 90;
        const isPartial = sub.status === 'partial_correct' || (sub.scorePercentage >= 40 && sub.scorePercentage < 90);

        return (
          <div
            key={sub.id}
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xs hover:border-slate-300 transition-all"
          >
            {/* Header Ringkasan Submission */}
            <div
              onClick={() => toggleExpand(sub.id)}
              className="p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 cursor-pointer select-none hover:bg-slate-50/70 transition-colors"
            >
              <div className="flex items-start sm:items-center gap-3.5 flex-1 min-w-[240px]">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold shrink-0 ${
                    isPerfect
                      ? 'bg-emerald-100 text-emerald-700'
                      : isPartial
                      ? 'bg-amber-100 text-amber-700'
                      : 'bg-rose-100 text-rose-700'
                  }`}
                >
                  {isPerfect ? '💯' : isPartial ? '⚖️' : '⚠️'}
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-mono">
                      Topik {sub.pillarNumber}
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs text-slate-500">{sub.subtopic}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-display mt-0.5 line-clamp-1">
                    {sub.questionTitle}
                  </h4>
                  <div className="flex items-center gap-3 mt-1 text-[11px] text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {formatDate(sub.gradedAt)}
                    </span>
                    <span>•</span>
                    <span>Durasi: {formatSeconds(sub.elapsedSeconds)}</span>
                  </div>
                </div>
              </div>

              {/* Nilai & Status */}
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="flex items-baseline justify-end gap-1 font-mono">
                    <span
                      className={`text-lg font-bold ${
                        isPerfect
                          ? 'text-emerald-700'
                          : isPartial
                          ? 'text-amber-700'
                          : 'text-rose-700'
                      }`}
                    >
                      {sub.totalScore}
                    </span>
                    <span className="text-xs text-slate-400">/ {sub.maxScore}</span>
                  </div>
                  <div className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 inline-block mt-0.5">
                    {sub.scorePercentage}%
                  </div>
                </div>

                <button
                  type="button"
                  className="p-1.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
                >
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Accordion Detail Evaluasi Juri AI */}
            {isExpanded && (
              <div className="border-t border-slate-200 p-5 bg-slate-50/50 space-y-4 animate-in fade-in duration-200">
                {/* Meta Model & XP */}
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-sky-100 text-sky-800 rounded-lg font-semibold text-xs border border-sky-200">
                      <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                      {sub.modelUsed ? `Evaluasi: ${sub.modelUsed}` : 'Evaluasi: Juri AI'}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-500 font-mono">
                      Keyakinan: {Math.round(sub.confidenceScore * 100)}%
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-amber-700 font-bold px-2 py-0.5 bg-amber-50 border border-amber-200 rounded-md">
                      <Zap className="w-3.5 h-3.5 fill-amber-500" />
                      +{sub.xpAwarded} XP
                    </span>
                    <button
                      onClick={() => navigate(`/worksheet/static_module/${sub.questionId}`)}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 rounded-lg font-bold text-xs transition-colors shadow-2xs"
                    >
                      <RotateCcw className="w-3 h-3 text-slate-500" />
                      <span>Kerjakan Ulang</span>
                    </button>
                  </div>
                </div>

                {/* Feedback Utama */}
                <div className="p-3.5 bg-white border border-slate-200 rounded-xl space-y-1">
                  <div className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <span>💬 Catatan Evaluator Juri:</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{sub.overallFeedback}</p>
                </div>

                {/* Miskonsepsi Alert (Jika Ada) */}
                {sub.misconceptionDiagnosis && (
                  <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl space-y-1">
                    <div className="flex items-center gap-1.5 text-rose-800 font-bold text-xs">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                      <span>Diagnosa Miskonsepsi Kimia:</span>
                    </div>
                    <p className="text-xs text-rose-700 leading-relaxed">{sub.misconceptionDiagnosis}</p>
                  </div>
                )}

                {/* Rincian Kriteria Langkah Rubrik */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Rincian Kriteria Langkah Rubrik:
                  </div>
                  <div className="space-y-2">
                    {sub.criteriaBreakdown.map((crit, cIdx) => (
                      <div
                        key={`crit-${sub.id}-${cIdx}`}
                        className={`p-3 rounded-xl border text-xs flex items-start justify-between gap-3 ${
                          crit.achieved
                            ? 'bg-white border-emerald-200'
                            : 'bg-white border-rose-200'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          {crit.achieved ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          ) : (
                            <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                          )}
                          <div>
                            <div className="font-bold text-slate-900">
                              Langkah #{crit.stepNumber}: {crit.criterionTitle}
                            </div>
                            <div className="text-slate-600 mt-0.5 leading-relaxed">
                              {crit.examinerExplanation}
                            </div>
                          </div>
                        </div>

                        <div
                          className={`font-mono font-bold shrink-0 px-2 py-0.5 rounded text-[11px] ${
                            crit.achieved
                              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                              : 'bg-rose-50 text-rose-800 border border-rose-200'
                          }`}
                        >
                          {crit.pointsEarned} / {crit.maxPoints}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Kekuatan & Perbaikan */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {sub.strengths.length > 0 && (
                    <div className="p-3 bg-emerald-50/60 border border-emerald-200 rounded-xl space-y-1">
                      <span className="text-[11px] font-bold text-emerald-900">
                        ✨ Kelebihan Penalaran:
                      </span>
                      <ul className="text-xs text-emerald-800 space-y-0.5 list-disc list-inside">
                        {sub.strengths.map((str, sIdx) => (
                          <li key={sIdx}>{str}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {sub.missingOrIncorrectPoints.length > 0 && (
                    <div className="p-3 bg-amber-50/60 border border-amber-200 rounded-xl space-y-1">
                      <span className="text-[11px] font-bold text-amber-900">
                        ⚠️ Hal yang Perlu Ditingkatkan:
                      </span>
                      <ul className="text-xs text-amber-800 space-y-0.5 list-disc list-inside">
                        {sub.missingOrIncorrectPoints.map((mis, mIdx) => (
                          <li key={mIdx}>{mis}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
