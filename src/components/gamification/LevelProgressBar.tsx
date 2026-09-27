import React from 'react';
import {
  calculateLevelProgress,
  type LevelProgressReport,
} from '../../utils/gamificationConstants';
import { UserTitleBadge } from './UserTitleBadge';
import { Sparkles, ArrowRight } from 'lucide-react';

interface LevelProgressBarProps {
  xp: number;
  compact?: boolean;
  variant?: 'light' | 'glass';
  className?: string;
  showNextTitle?: boolean;
}

export const LevelProgressBar: React.FC<LevelProgressBarProps> = ({
  xp,
  compact = false,
  variant = 'light',
  className = '',
  showNextTitle = true,
}) => {
  const progress: LevelProgressReport = calculateLevelProgress(xp);

  // Gradient bar per tier
  const getBarGradient = () => {
    switch (progress.definition.tier) {
      case 'basic':
        return 'from-slate-400 via-slate-300 to-white';
      case 'osk':
        return 'from-emerald-500 via-teal-400 to-emerald-300';
      case 'osp':
        return 'from-sky-500 via-indigo-400 to-sky-300';
      case 'osn':
        return 'from-amber-500 via-yellow-400 to-amber-300';
      case 'icho':
        return 'from-purple-600 via-pink-500 to-amber-300';
      default:
        return 'from-sky-500 to-emerald-400';
    }
  };

  const isGlass = variant === 'glass';

  if (compact) {
    return (
      <div className={`space-y-1.5 ${className}`}>
        <div className="flex items-center justify-between text-xs">
          <span className={isGlass ? 'text-slate-100 font-bold' : 'text-slate-800 font-bold'}>
            Lv.{progress.currentLevel} {progress.currentTitle}
          </span>
          <span className={`font-mono font-extrabold ${isGlass ? 'text-white' : 'text-slate-900'}`}>
            {progress.totalXp} XP
          </span>
        </div>
        <div className={`w-full h-2 rounded-full overflow-hidden ${isGlass ? 'bg-slate-900/50 border border-white/20' : 'bg-slate-200'}`}>
          <div
            className={`h-full rounded-full bg-gradient-to-r ${getBarGradient()} transition-all duration-700 ease-out`}
            style={{ width: `${progress.progressPercent}%` }}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl p-4 transition-all ${
        isGlass
          ? 'bg-slate-900/40 backdrop-blur-md border border-white/20 text-white shadow-md'
          : 'bg-white border border-slate-200 shadow-xs'
      } ${className}`}
    >
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2.5">
          <UserTitleBadge level={progress.currentLevel} size="sm" variant={isGlass ? 'glass' : 'light'} />
          <span className={`text-xs font-semibold ${isGlass ? 'text-slate-200' : 'text-slate-600'}`}>
            {progress.definition.tierName}
          </span>
        </div>
        <div className="flex items-center gap-1.5 font-mono">
          <span className={`text-xs ${isGlass ? 'text-slate-300' : 'text-slate-500'}`}>Total XP:</span>
          <span className={`text-sm font-extrabold ${isGlass ? 'text-white' : 'text-slate-900'}`}>
            {progress.totalXp} XP
          </span>
        </div>
      </div>

      {/* Progress Track */}
      <div className={`w-full h-3 rounded-full overflow-hidden p-0.5 ${isGlass ? 'bg-slate-950/60 border border-white/15' : 'bg-slate-100 border border-slate-200/80'}`}>
        <div
          className={`h-full rounded-full bg-gradient-to-r ${getBarGradient()} transition-all duration-700 ease-out shadow-xs`}
          style={{ width: `${progress.progressPercent}%` }}
        />
      </div>

      {/* Footer Details */}
      <div className="flex flex-wrap items-center justify-between text-xs mt-2.5 gap-2">
        <span className={`font-mono font-bold ${isGlass ? 'text-slate-100' : 'text-slate-700'}`}>
          {progress.isMaxLevel ? (
            <span className="text-purple-400 font-bold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Gelar Tertinggi Tercapai
            </span>
          ) : (
            `${progress.progressPercent}% Menuju Level ${progress.currentLevel + 1}`
          )}
        </span>

        {showNextTitle && !progress.isMaxLevel && progress.nextDefinition && (
          <div className={`flex items-center gap-1.5 font-medium ${isGlass ? 'text-slate-200' : 'text-slate-700'}`}>
            <span>+{progress.xpNeededForNextLevel} XP ke</span>
            <span className={`font-bold flex items-center gap-0.5 ${isGlass ? 'text-sky-300 font-semibold' : 'text-sky-700 font-bold'}`}>
              {progress.nextDefinition.title}
              <ArrowRight className="w-3 h-3 inline" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
