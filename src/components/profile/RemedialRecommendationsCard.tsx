/**
 * RemedialRecommendationsCard.tsx
 * Kartu Rekomendasi Latihan Remedial Adaptif Berbasis Miskonsepsi
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { RemedialRecommendation } from '../../types/database';
import { AlertCircle, ArrowRight, BookOpen, Lightbulb, Target } from 'lucide-react';

interface RemedialRecommendationsCardProps {
  recommendations: RemedialRecommendation[];
}

export const RemedialRecommendationsCard: React.FC<RemedialRecommendationsCardProps> = ({
  recommendations,
}) => {
  const navigate = useNavigate();

  if (recommendations.length === 0) {
    return null;
  }

  return (
    <div className="bg-gradient-to-br from-white to-sky-50/40 border border-sky-200/80 rounded-2xl p-6 shadow-xs space-y-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center">
            <Target className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 font-display">
              Rekomendasi Remedial & Penguatan Konsep
            </h3>
            <p className="text-xs text-slate-500">
              Disusun otomatis oleh AI berdasarkan analisis kelemahan dan miskonsepsi pengerjaan Anda.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-1">
        {recommendations.map((rec) => (
          <div
            key={rec.id}
            className="bg-white border border-slate-200 hover:border-sky-300 rounded-xl p-4 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between space-y-3 group"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="px-2 py-0.5 bg-sky-50 text-sky-800 text-[10px] font-bold rounded-md uppercase border border-sky-200 font-mono">
                  Topik {rec.pillarNumber}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono">
                  {rec.difficulty}
                </span>
              </div>

              <h4 className="text-xs font-bold text-slate-900 group-hover:text-sky-700 transition-colors line-clamp-2">
                {rec.targetQuestionTitle}
              </h4>

              <div className="p-2.5 bg-amber-50/70 border border-amber-200/80 rounded-lg text-[11px] text-amber-900 space-y-1">
                <div className="flex items-center gap-1 font-bold text-amber-800">
                  <AlertCircle className="w-3 h-3 text-amber-600" />
                  <span>Diagnosa:</span>
                </div>
                <p className="line-clamp-2 leading-relaxed text-slate-700">{rec.reason}</p>
              </div>

              {rec.misconceptionHint && (
                <div className="flex items-start gap-1.5 text-[11px] text-slate-500">
                  <Lightbulb className="w-3 h-3 text-amber-500 shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{rec.misconceptionHint}</span>
                </div>
              )}
            </div>

            <button
              onClick={() => navigate(`/worksheet/practice/${rec.targetQuestionId}`)}
              className="w-full mt-2 py-2 px-3 bg-sky-600 hover:bg-sky-700 active:scale-98 text-white rounded-lg text-xs font-bold transition-all shadow-2xs flex items-center justify-center gap-1.5"
            >
              <span>Mulai Remedial</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
