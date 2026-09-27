import React from 'react';
import type { ShowcaseBadgeSlot, ShowcaseDataPayload } from '../../types/showcaseBadge';
import { getAchievementDefinition, RARITY_STYLES } from '../../utils/achievementConstants';
import { CatBadgeSvg } from './CatBadgeSvg';
import {
  Flame,
  Zap,
  Award,
  Target,
  CheckCircle2,
  Layers,
  Trophy,
  Sparkles,
} from 'lucide-react';

interface ShowcaseBadgePillProps {
  slot: ShowcaseBadgeSlot;
  data: ShowcaseDataPayload;
  variant?: 'glass' | 'light';
  className?: string;
  onClick?: () => void;
}

export const ShowcaseBadgePill: React.FC<ShowcaseBadgePillProps> = ({
  slot,
  data,
  variant = 'glass',
  className = '',
  onClick,
}) => {
  const isGlass = variant === 'glass';

  // 1. KASUS: LENCANA PRESTASI KUCING KIMIA (ACHIEVEMENT BADGE)
  if (slot.category === 'achievement' && slot.achievementId) {
    const ach = getAchievementDefinition(slot.achievementId);
    if (!ach) return null;

    const rarityStyle = RARITY_STYLES[ach.rarity];

    // Border & Glow Accent berdasarkan Rarity
    const getRarityBorder = () => {
      switch (ach.rarity) {
        case 'secret':
          return isGlass
            ? 'border-purple-400/60 shadow-purple-500/20'
            : 'border-purple-400 shadow-xs';
        case 'epic':
          return isGlass
            ? 'border-amber-400/60 shadow-amber-500/20'
            : 'border-[#D4A359] shadow-xs';
        case 'rare':
          return isGlass
            ? 'border-sky-400/50 shadow-sky-500/20'
            : 'border-sky-400 shadow-xs';
        case 'common':
        default:
          return isGlass
            ? 'border-white/25 shadow-black/10'
            : 'border-[#B0C4DE] shadow-xs';
      }
    };

    return (
      <div
        onClick={onClick}
        title={`${ach.title} (${rarityStyle.label}): ${ach.description} • +${ach.xpReward} XP`}
        className={`w-[96px] sm:w-[102px] h-[78px] shrink-0 rounded-2xl transition-all duration-200 select-none flex flex-col items-center justify-between p-2 text-center shadow-xs cursor-pointer group hover:scale-[1.03] ${
          isGlass
            ? `bg-white/15 backdrop-blur-md border hover:bg-white/20 text-white ${getRarityBorder()}`
            : `bg-[#FFFFF0] border hover:bg-[#FFFDF0] text-[#2D3748] ${getRarityBorder()}`
        } ${className}`}
      >
        {/* Ikon Kucing Vektor Cantik */}
        <div className="relative flex items-center justify-center -mt-0.5">
          <CatBadgeSvg
            achievementId={ach.id}
            isUnlocked={true}
            size={34}
            className="shrink-0 drop-shadow-sm transition-transform group-hover:scale-110 duration-200"
          />
        </div>

        {/* Judul Lencana (2 Baris Rapi, Tidak Terpotong) */}
        <div className="w-full px-0.5">
          <div
            className={`text-[9.5px] sm:text-[10px] font-bold leading-[1.15] line-clamp-2 text-center font-display ${
              isGlass ? 'text-white' : 'text-[#2D3748]'
            }`}
          >
            {ach.title}
          </div>
        </div>

        {/* Status Rarity Pill */}
        <div className="flex items-center justify-center gap-1">
          <span
            className={`text-[8px] font-black uppercase tracking-wider px-1.5 py-0.2 rounded-full ${
              ach.rarity === 'secret'
                ? 'text-purple-300 bg-purple-950/60'
                : ach.rarity === 'epic'
                ? 'text-amber-300 bg-amber-950/60'
                : ach.rarity === 'rare'
                ? 'text-sky-300 bg-sky-950/60'
                : 'text-slate-300 bg-slate-800/60'
            }`}
          >
            {ach.rarity}
          </span>
        </div>
      </div>
    );
  }

  // 2. KASUS: STATISTIK & PERFORMA AKADEMIS
  const renderStatContent = () => {
    switch (slot.statType) {
      case 'streak':
        return {
          icon: <Flame className="w-3 h-3 text-amber-400" />,
          label: 'Streak',
          value: `${data.streak} Hari`,
        };
      case 'total_xp':
        return {
          icon: <Zap className="w-3 h-3 text-sky-400" />,
          label: 'XP Total',
          value: `${data.xp} XP`,
        };
      case 'level':
        return {
          icon: <Award className="w-3 h-3 text-emerald-400" />,
          label: 'Level',
          value: `Lv. ${data.level}`,
        };
      case 'accuracy':
        return {
          icon: <Target className="w-3 h-3 text-emerald-400" />,
          label: 'Akurasi',
          value: `${data.accuracy}%`,
        };
      case 'solved_count':
        return {
          icon: <CheckCircle2 className="w-3 h-3 text-sky-400" />,
          label: 'Selesai',
          value: `${data.solvedCount} Soal`,
        };
      case 'mastered_topics':
        return {
          icon: <Layers className="w-3 h-3 text-indigo-400" />,
          label: 'Topik',
          value: `${data.masteredTopicsCount} / 10`,
        };
      case 'target_olympiad':
        return {
          icon: <Trophy className="w-3 h-3 text-amber-400" />,
          label: 'Target',
          value: data.targetOlympiad || 'OSN',
        };
      case 'perfect_count':
        return {
          icon: <Sparkles className="w-3 h-3 text-amber-300" />,
          label: 'Skor 100%',
          value: `${data.perfectCount} Kali`,
        };
      default:
        return {
          icon: <Award className="w-3 h-3 text-slate-400" />,
          label: 'Badge',
          value: '-',
        };
    }
  };

  const stat = renderStatContent();

  return (
    <div
      onClick={onClick}
      className={`w-[96px] sm:w-[102px] h-[78px] shrink-0 rounded-2xl text-center flex flex-col items-center justify-center p-2 transition-all duration-200 shadow-xs select-none cursor-pointer hover:scale-[1.03] ${
        isGlass
          ? 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/15 hover:border-white/35'
          : 'bg-[#FFFFF0] border border-[#B0C4DE] text-[#2D3748] hover:bg-[#F0F8FF]'
      } ${className}`}
    >
      {/* Label & Icon */}
      <div
        className={`text-[10px] font-medium flex items-center justify-center gap-1 mb-1 ${
          isGlass ? 'text-slate-300' : 'text-[#708090]'
        }`}
      >
        {stat.icon}
        <span className="truncate max-w-[68px]">{stat.label}</span>
      </div>

      {/* Nilai Angka Utama */}
      <div
        className={`text-base sm:text-lg font-bold font-mono leading-tight ${
          isGlass ? 'text-white' : 'text-[#2D3748]'
        }`}
      >
        {stat.value}
      </div>
    </div>
  );
};
