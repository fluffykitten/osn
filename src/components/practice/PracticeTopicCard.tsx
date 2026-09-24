import React from 'react';
import {
  Zap,
  BookOpen,
  CheckCircle2,
  Clock,
  Layers,
  ArrowRight,
  Sparkles,
  Trophy,
  ChevronRight,
  Tag,
} from 'lucide-react';
import { TopicSvgArt } from '../materials/TopicSvgArt';
import type { DifficultyBreakdown, TopicProgressMetrics } from '../../utils/practiceDataUtils';

export interface PracticeTopicCardProps {
  topicNumber: number;
  database: 'osn' | 'sma';
  title: string;
  summary: string;
  category: string;
  levelOrGrade: string;
  tags?: string[];
  difficultyBreakdown: DifficultyBreakdown;
  progress: TopicProgressMetrics;
  onQuickDrill: (topicNumber: number) => void;
  onExploreQuestions: (topicNumber: number) => void;
}

export const PracticeTopicCard: React.FC<PracticeTopicCardProps> = ({
  topicNumber,
  database,
  title,
  summary,
  category,
  levelOrGrade,
  tags = [],
  difficultyBreakdown,
  progress,
  onQuickDrill,
  onExploreQuestions,
}) => {
  const isSma = database === 'sma';
  const total = difficultyBreakdown.total;

  // Persentase sebaran kesulitan untuk stacked meter
  const easyPct = total > 0 ? (difficultyBreakdown.easy / total) * 100 : 0;
  const medPct = total > 0 ? (difficultyBreakdown.medium / total) * 100 : 0;
  const hardPct = total > 0 ? (difficultyBreakdown.hard / total) * 100 : 0;

  return (
    <div
      className={`bg-white border rounded-2xl p-6 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group overflow-hidden ${
        isSma
          ? 'border-slate-200/90 hover:border-emerald-400'
          : 'border-slate-200/90 hover:border-sky-400'
      }`}
    >
      {/* Top Banner with Chemistry Minimalist SVG Art */}
      <div className="relative h-40 -mx-6 -mt-6 mb-4 overflow-hidden border-b border-slate-100 bg-linear-to-b from-slate-50 to-white">
        <TopicSvgArt
          topicNumber={topicNumber}
          database={database}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />

        {/* Ambient Top Left Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="px-2.5 py-0.5 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 font-mono font-bold text-[11px] shadow-2xs">
            {isSma ? `Modul #${topicNumber}` : `Pilar #${topicNumber}`}
          </span>

          {progress.status === 'mastered' && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-500 text-white text-[10px] font-bold rounded-lg shadow-2xs">
              <Trophy className="w-3 h-3 text-amber-300" />
              <span>Terkuasai</span>
            </span>
          )}

          {progress.status === 'in_progress' && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-sky-500 text-white text-[10px] font-bold rounded-lg shadow-2xs">
              <Clock className="w-3 h-3" />
              <span>Berlatih</span>
            </span>
          )}
        </div>

        {/* Top Right Level / Grade Badge */}
        <div className="absolute top-3 right-3">
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 text-slate-700 font-mono shadow-2xs">
            {levelOrGrade}
          </span>
        </div>

        {/* Bottom Banner Category Pill */}
        <div className="absolute bottom-2 left-4 right-4 flex items-center justify-between">
          <span
            className={`text-[10px] uppercase tracking-wider font-bold font-mono px-2.5 py-0.5 rounded-md border shadow-2xs ${
              isSma
                ? 'bg-emerald-50/95 text-emerald-800 border-emerald-200'
                : 'bg-sky-50/95 text-sky-800 border-sky-200'
            }`}
          >
            {category}
          </span>
          <span className="text-[11px] font-mono text-slate-600 font-bold bg-white/95 px-2 py-0.5 rounded-md border border-slate-200 shadow-2xs">
            {total} Butir Soal
          </span>
        </div>
      </div>

      {/* Main Card Content */}
      <div className="flex-1 flex flex-col space-y-4">
        {/* Title Container: Min height ensures 1-line and 2-line titles are horizontally aligned */}
        <div className="min-h-[3.25rem] flex items-start">
          <h3
            className={`text-base font-bold text-slate-900 transition-colors font-display line-clamp-2 leading-snug ${
              isSma ? 'group-hover:text-emerald-600' : 'group-hover:text-sky-600'
            }`}
            title={title}
          >
            {title}
          </h3>
        </div>

        {/* Summary Description with fixed line-clamp */}
        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed min-h-[2.5rem]">
          {summary}
        </p>

        {/* 1. Stacked Difficulty Breakdown Bar (LeetCode Style) */}
        <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl space-y-2">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-slate-500 font-medium">Sebaran Tingkat Kesulitan:</span>
            <span className="font-mono text-slate-700 font-semibold">{total} Soal</span>
          </div>

          {/* Stacked bar */}
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden flex">
            {easyPct > 0 && (
              <div
                className="bg-emerald-500 h-full transition-all duration-300"
                style={{ width: `${easyPct}%` }}
                title={`Mudah (SMA): ${difficultyBreakdown.easy} Soal`}
              />
            )}
            {medPct > 0 && (
              <div
                className="bg-amber-400 h-full transition-all duration-300"
                style={{ width: `${medPct}%` }}
                title={`Sedang (OSK): ${difficultyBreakdown.medium} Soal`}
              />
            )}
            {hardPct > 0 && (
              <div
                className="bg-rose-500 h-full transition-all duration-300"
                style={{ width: `${hardPct}%` }}
                title={`Sulit (OSN/IChO): ${difficultyBreakdown.hard} Soal`}
              />
            )}
          </div>

          {/* Legend tags */}
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-600 pt-0.5">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              <span>Mudah ({difficultyBreakdown.easy})</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
              <span>Sedang ({difficultyBreakdown.medium})</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" />
              <span>Sulit ({difficultyBreakdown.hard})</span>
            </span>
          </div>
        </div>

        {/* 2. Mastery Progress Bar (Khan Academy Style) */}
        <div className="p-3 bg-slate-50/80 border border-slate-100 rounded-xl space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-[11px] font-semibold flex items-center gap-1.5">
              {progress.status === 'mastered' ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">100% Topik Terkuasai</span>
                </>
              ) : progress.status === 'in_progress' ? (
                <>
                  <Clock className={`w-3.5 h-3.5 ${isSma ? 'text-emerald-600' : 'text-sky-600'}`} />
                  <span className={isSma ? 'text-emerald-700' : 'text-sky-700'}>
                    {progress.attemptedCount} dari {total} Soal
                  </span>
                </>
              ) : (
                <>
                  <Layers className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-slate-500">Belum Ada Soal Dikerjakan</span>
                </>
              )}
            </span>

            <span
              className={`text-[11px] font-mono font-bold ${
                progress.status === 'mastered'
                  ? 'text-emerald-600'
                  : progress.completionPercent > 0
                  ? isSma
                    ? 'text-emerald-600'
                    : 'text-sky-600'
                  : 'text-slate-400'
              }`}
            >
              {progress.completionPercent}%
            </span>
          </div>

          <div className="w-full bg-slate-200/80 h-1.5 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                progress.status === 'mastered'
                  ? 'bg-emerald-500'
                  : isSma
                  ? 'bg-linear-to-r from-emerald-500 to-teal-500'
                  : 'bg-linear-to-r from-sky-500 to-indigo-500'
              }`}
              style={{ width: `${progress.completionPercent}%` }}
            />
          </div>

          {progress.attemptedCount > 0 && (
            <div className="flex items-center justify-between text-[10px] text-slate-500 pt-0.5">
              <span>Akurasi Skor: <strong className="text-slate-700 font-mono">{progress.avgScore}%</strong></span>
              <span>{progress.completedCount} Soal Tuntas (≥60%)</span>
            </div>
          )}
        </div>

        {/* 3. Subtopics Tags Cloud Preview */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-1 min-h-[1.75rem]">
            {tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-0.5 px-2 py-0.5 bg-slate-100/90 text-slate-600 text-[10px] rounded-md font-mono hover:bg-slate-200 transition-colors"
              >
                #{tag.replace(/^#/, '')}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="text-[10px] text-slate-400 font-mono">+{tags.length - 3}</span>
            )}
          </div>
        )}

        {/* 4. Action Buttons (Dual Mode) */}
        <div className="pt-2 grid grid-cols-2 gap-2 border-t border-slate-100">
          <button
            type="button"
            onClick={() => onQuickDrill(topicNumber)}
            className={`inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-white transition-all shadow-xs cursor-pointer ${
              isSma
                ? 'bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98]'
                : 'bg-sky-600 hover:bg-sky-700 active:scale-[0.98]'
            }`}
            title="Sistem memilih 3 soal adaptif yang belum dikerjakan untuk latihan kilat"
          >
            <Zap className="w-3.5 h-3.5 text-amber-300" />
            <span>Latihan Kilat</span>
          </button>

          <button
            type="button"
            onClick={() => onExploreQuestions(topicNumber)}
            className="inline-flex items-center justify-center gap-1 px-3 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 hover:border-slate-300 rounded-xl text-xs font-semibold transition-all cursor-pointer"
            title={`Buka daftar seluruh butir soal di topik ini`}
          >
            <span>Jelajahi Soal</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          </button>
        </div>
      </div>
    </div>
  );
};
