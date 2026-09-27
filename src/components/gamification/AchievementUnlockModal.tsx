import { CatBadgeSvg } from './CatBadgeSvg';
import React, { useState, useEffect } from 'react';
import { Award, Sparkles, X, ChevronRight } from 'lucide-react';
import type { AchievementDefinition } from '../../utils/achievementConstants';
import { RARITY_STYLES } from '../../utils/achievementConstants';

export const AchievementUnlockModal: React.FC = () => {
  const [unlockedItem, setUnlockedItem] = useState<{
    achievement: AchievementDefinition;
    unlockedAt?: string;
  } | null>(null);

  useEffect(() => {
    const handleUnlock = (e: Event) => {
      const customEvent = e as CustomEvent<{
        achievement: AchievementDefinition;
        progress: any;
      }>;
      if (customEvent.detail?.achievement) {
        setUnlockedItem({
          achievement: customEvent.detail.achievement,
          unlockedAt: customEvent.detail.progress?.unlockedAt,
        });

        // Auto dismiss after 6 seconds
        const timer = setTimeout(() => {
          setUnlockedItem(null);
        }, 6000);

        return () => clearTimeout(timer);
      }
    };

    window.addEventListener('osn_achievement_unlocked', handleUnlock);
    return () => window.removeEventListener('osn_achievement_unlocked', handleUnlock);
  }, []);

  if (!unlockedItem) return null;

  const { achievement } = unlockedItem;
  const rarityStyle = RARITY_STYLES[achievement.rarity];

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300 max-w-sm w-full select-none">
      <div className="bg-[#FFFFF0] border-2 border-[#D4A359] rounded-2xl p-4 shadow-xl shadow-[#D4A359]/20 relative overflow-hidden ring-2 ring-[#FFF2CC]">
        {/* Top Gold Ribbon Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4A359] via-[#F2C94C] to-[#D4A359]" />

        <div className="flex items-start gap-3.5">
          {/* Chemist Cat Badge Vector Icon */}
          <CatBadgeSvg
            achievementId={achievement.id}
            isUnlocked={true}
            size={56}
            className="shrink-0 drop-shadow-md"
          />

          <div className="flex-1 min-w-0 pr-4">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#806000] flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#D4A359]" />
                <span>Lencana Terbuka!</span>
              </span>
              <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded-full border ${rarityStyle.badge}`}>
                {rarityStyle.label}
              </span>
            </div>

            <h4 className="text-sm font-bold text-[#2D3748] font-display truncate">
              {achievement.title}
            </h4>
            <p className="text-xs text-[#708090] mt-0.5 line-clamp-2 leading-snug">
              {achievement.description}
            </p>

            <div className="mt-2.5 flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-[#2E6930] bg-[#E2F0D9] border border-[#C5E0B4] px-2 py-0.5 rounded-lg">
                <span>+{achievement.xpReward} XP</span>
              </span>
            </div>
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={() => setUnlockedItem(null)}
            className="text-[#708090] hover:text-[#2D3748] p-1 rounded-lg hover:bg-[#F0F8FF] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
