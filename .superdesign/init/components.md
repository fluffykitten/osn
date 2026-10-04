# Shared UI Components

## 1. UserTitleBadge
- **File path**: `src/components/gamification/UserTitleBadge.tsx`
- **Description**: Displays the chemistry competitive title badge (e.g. "Pemula Laboratorium", "Peraih Medali Emas OSN") based on level or XP.
- **Props**: `level?: number`, `xp?: number`, `size?: 'xs' | 'sm' | 'md' | 'lg'`, `variant?: 'light' | 'glass'`, `showIcon?: boolean`, `showLevelNumber?: boolean`.

```tsx
import React from 'react';
import {
  getLevelDefinition,
  getLevelFromXp,
  type ChemistryLevelDefinition,
  type ChemistryTier,
} from '../../utils/gamificationConstants';
import {
  FlaskConical,
  Atom,
  Sparkles,
  Trophy,
  Crown,
} from 'lucide-react';

export type TitleBadgeVariant = 'light' | 'glass';

interface UserTitleBadgeProps {
  level?: number;
  xp?: number;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: TitleBadgeVariant;
  showIcon?: boolean;
  showLevelNumber?: boolean;
  className?: string;
  showTooltip?: boolean;
}

const TIER_STYLES: Record<
  TitleBadgeVariant,
  Record<ChemistryTier, { bg: string; text: string; border: string; icon: string }>
> = {
  light: {
    basic: { bg: 'bg-slate-100', text: 'text-slate-800', border: 'border-slate-300', icon: 'text-slate-600' },
    osk: { bg: 'bg-emerald-50', text: 'text-emerald-800', border: 'border-emerald-300', icon: 'text-emerald-600' },
    osp: { bg: 'bg-sky-50', text: 'text-sky-800', border: 'border-sky-300', icon: 'text-sky-600' },
    osn: { bg: 'bg-amber-50', text: 'text-amber-900', border: 'border-amber-300', icon: 'text-amber-600' },
    icho: { bg: 'bg-purple-50', text: 'text-purple-900', border: 'border-purple-300', icon: 'text-purple-600' },
  },
  glass: {
    basic: { bg: 'bg-slate-800/60 backdrop-blur-md', text: 'text-slate-200', border: 'border-white/20', icon: 'text-slate-300' },
    osk: { bg: 'bg-emerald-950/60 backdrop-blur-md', text: 'text-emerald-200', border: 'border-emerald-400/30', icon: 'text-emerald-300' },
    osp: { bg: 'bg-sky-950/60 backdrop-blur-md', text: 'text-sky-200', border: 'border-sky-400/30', icon: 'text-sky-300' },
    osn: { bg: 'bg-amber-950/60 backdrop-blur-md', text: 'text-amber-200', border: 'border-amber-400/40', icon: 'text-amber-300' },
    icho: { bg: 'bg-purple-950/60 backdrop-blur-md', text: 'text-purple-200', border: 'border-purple-400/40', icon: 'text-purple-300' },
  },
};

const getTierIcon = (tier: ChemistryTier, sizeClass: string) => {
  switch (tier) {
    case 'basic': return <FlaskConical className={sizeClass} />;
    case 'osk': return <Atom className={sizeClass} />;
    case 'osp': return <Sparkles className={sizeClass} />;
    case 'osn': return <Trophy className={sizeClass} />;
    case 'icho': return <Crown className={sizeClass} />;
  }
};

export const UserTitleBadge: React.FC<UserTitleBadgeProps> = ({
  level,
  xp,
  size = 'sm',
  variant = 'light',
  showIcon = true,
  showLevelNumber = true,
  className = '',
  showTooltip = false,
}) => {
  const currentLevel = level ?? (xp !== undefined ? getLevelFromXp(xp) : 1);
  const def: ChemistryLevelDefinition = getLevelDefinition(currentLevel);
  const style = TIER_STYLES[variant][def.tier];

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-sans font-semibold rounded-full border transition-all ${style.bg} ${style.text} ${style.border} px-2.5 py-0.5 text-xs ${className}`}
      title={showTooltip ? def.description : undefined}
    >
      {showIcon && <span className={style.icon}>{getTierIcon(def.tier, 'w-3.5 h-3.5')}</span>}
      <span>{showLevelNumber ? `Lv.${def.level} ${def.title}` : def.title}</span>
    </span>
  );
};
```

## 2. LevelProgressBar
- **File path**: `src/components/gamification/LevelProgressBar.tsx`
- **Description**: Displays the student's progress to the next competitive level with an animated progress bar and XP status.
- **Props**: `xp: number`, `compact?: boolean`, `variant?: 'light' | 'glass'`, `className?: string`, `showNextTitle?: boolean`.

```tsx
import React from 'react';
import { calculateLevelProgress, type LevelProgressReport } from '../../utils/gamificationConstants';
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

  const getBarGradient = () => {
    switch (progress.definition.tier) {
      case 'basic': return 'from-slate-400 via-slate-300 to-white';
      case 'osk': return 'from-emerald-500 via-teal-400 to-emerald-300';
      case 'osp': return 'from-sky-500 via-indigo-400 to-sky-300';
      case 'osn': return 'from-amber-500 via-yellow-400 to-amber-300';
      case 'icho': return 'from-purple-600 via-pink-500 to-amber-300';
      default: return 'from-sky-500 to-emerald-400';
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
    <div className={`space-y-2.5 ${className}`}>
      <div className="flex items-center justify-between flex-wrap gap-2">
        <UserTitleBadge level={progress.currentLevel} variant={variant} size="md" />
        <div className="text-right">
          <span className={`text-xs font-mono font-bold ${isGlass ? 'text-white' : 'text-slate-900'}`}>
            {progress.xpInCurrentLevel} / {progress.xpForNextLevel} XP
          </span>
        </div>
      </div>
      <div className={`w-full h-3 rounded-full overflow-hidden ${isGlass ? 'bg-slate-900/50 border border-white/20' : 'bg-slate-200'}`}>
        <div
          className={`h-full rounded-full bg-gradient-to-r ${getBarGradient()} transition-all duration-700 ease-out`}
          style={{ width: `${progress.progressPercent}%` }}
        />
      </div>
    </div>
  );
};
```
