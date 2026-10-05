import React from 'react';
import {
  getLevelDefinition,
  getLevelFromXp,
  type ChemistryLevelDefinition,
  type ChemistryTier,
} from '../../utils/gamificationConstants';
import {
  SolarTestTube,
  SolarAtom,
  SolarStars,
  SolarMedal,
  SolarCrown,
} from '../common/AppIcons';

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
  // Varian Light: Untuk latar belakang terang / ivory / kartu putih
  light: {
    basic: {
      bg: 'bg-slate-100',
      text: 'text-slate-800',
      border: 'border-slate-300',
      icon: 'text-slate-600',
    },
    osk: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-800',
      border: 'border-emerald-300',
      icon: 'text-emerald-600',
    },
    osp: {
      bg: 'bg-sky-50',
      text: 'text-sky-800',
      border: 'border-sky-300',
      icon: 'text-sky-600',
    },
    osn: {
      bg: 'bg-amber-50',
      text: 'text-amber-900',
      border: 'border-amber-300',
      icon: 'text-amber-600',
    },
    icho: {
      bg: 'bg-purple-50',
      text: 'text-purple-900',
      border: 'border-purple-300',
      icon: 'text-purple-600',
    },
  },
  // Varian Glass: Untuk latar belakang gelap / hero banner / backdrop-blur
  glass: {
    basic: {
      bg: 'bg-white/15 backdrop-blur-md',
      text: 'text-white',
      border: 'border-white/30',
      icon: 'text-slate-200',
    },
    osk: {
      bg: 'bg-emerald-500/25 backdrop-blur-md',
      text: 'text-emerald-100',
      border: 'border-emerald-400/40',
      icon: 'text-emerald-300',
    },
    osp: {
      bg: 'bg-sky-500/25 backdrop-blur-md',
      text: 'text-sky-100',
      border: 'border-sky-400/40',
      icon: 'text-sky-300',
    },
    osn: {
      bg: 'bg-amber-500/25 backdrop-blur-md',
      text: 'text-amber-100',
      border: 'border-amber-400/50',
      icon: 'text-amber-300',
    },
    icho: {
      bg: 'bg-purple-500/25 backdrop-blur-md',
      text: 'text-purple-100',
      border: 'border-purple-400/50',
      icon: 'text-purple-300',
    },
  },
};

export const UserTitleBadge: React.FC<UserTitleBadgeProps> = ({
  level,
  xp,
  size = 'sm',
  variant = 'light',
  showIcon = true,
  showLevelNumber = true,
  className = '',
  showTooltip = true,
}) => {
  let definition: ChemistryLevelDefinition;

  if (typeof xp === 'number') {
    definition = getLevelFromXp(xp);
  } else {
    definition = getLevelDefinition(level ?? 1);
  }

  const activeStyle = TIER_STYLES[variant][definition.tier];

  // Tier Icon Selector
  const renderTierIcon = () => {
    const iconClass =
      size === 'xs'
        ? 'w-2.5 h-2.5'
        : size === 'sm'
        ? 'w-3 h-3'
        : size === 'md'
        ? 'w-3.5 h-3.5'
        : 'w-4 h-4';

    const color = activeStyle.icon;

    switch (definition.tier) {
      case 'basic':
        return <SolarTestTube className={`${iconClass} ${color}`} />;
      case 'osk':
        return <SolarAtom className={`${iconClass} ${color}`} />;
      case 'osp':
        return <SolarStars className={`${iconClass} ${color}`} />;
      case 'osn':
        return <SolarMedal className={`${iconClass} ${color}`} />;
      case 'icho':
        return <SolarCrown className={`${iconClass} ${color} animate-pulse`} />;
      default:
        return <SolarAtom className={`${iconClass} ${color}`} />;
    }
  };

  const sizeClasses = {
    xs: 'text-[10px] px-2 py-0.5 gap-1 font-semibold',
    sm: 'text-xs px-2.5 py-1 gap-1.5 font-bold',
    md: 'text-xs sm:text-sm px-3.5 py-1.5 gap-2 font-bold',
    lg: 'text-sm sm:text-base px-4 py-2 gap-2.5 font-extrabold',
  }[size];

  return (
    <div
      title={
        showTooltip
          ? `Level ${definition.level}: ${definition.title}\nTokoh: ${definition.figureName}\n${definition.figureContribution}`
          : undefined
      }
      className={`inline-flex items-center rounded-full border transition-all duration-200 select-none shadow-xs ${activeStyle.bg} ${activeStyle.text} ${activeStyle.border} ${sizeClasses} ${className}`}
    >
      {showIcon && renderTierIcon()}
      {showLevelNumber && (
        <span className="font-mono opacity-90">Lv.{definition.level}</span>
      )}
      {showLevelNumber && <span className="opacity-50">•</span>}
      <span className="truncate">{definition.title}</span>
    </div>
  );
};
