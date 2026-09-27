import React, { useEffect, useState } from 'react';
import type { AwardXpResult } from '../../services/gamificationService';
import { triggerCelebration } from '../../services/gamificationService';
import { UserTitleBadge } from './UserTitleBadge';
import { ChemistFigureBadgeSvg } from './ChemistFigureBadgeSvg';
import { Sparkles, X, BookOpen, ArrowRight } from 'lucide-react';

export const LevelUpModal: React.FC = () => {
  const [levelUpData, setLevelUpData] = useState<AwardXpResult | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleXpAwarded = (e: Event) => {
      const custom = e as CustomEvent<AwardXpResult>;
      if (custom.detail && custom.detail.leveledUp) {
        setLevelUpData(custom.detail);
        setIsOpen(true);
        triggerCelebration();
      }
    };

    window.addEventListener('osn_xp_awarded', handleXpAwarded);
    return () => window.removeEventListener('osn_xp_awarded', handleXpAwarded);
  }, []);

  if (!isOpen || !levelUpData) return null;

  const def = levelUpData.newDefinition;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-300">
      <div className="relative w-full max-w-md bg-[#FFFFF0] border-2 border-[#B0C4DE] rounded-3xl p-6 sm:p-8 shadow-2xl shadow-slate-900/25 overflow-hidden animate-in zoom-in-95 duration-300 text-center ring-4 ring-[#FFF8E7]">
        {/* Top Gold Ribbon Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D4A359] via-[#F3D698] to-[#D4A359]" />

        {/* Subtle Serene Ambient Glow Background */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#B0C4DE]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[#D4A359]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 text-[#708090] hover:text-[#2D3748] rounded-full hover:bg-[#F0F8FF] transition-colors cursor-pointer"
          aria-label="Tutup modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Historical Pioneer Discovery Emblem */}
        <div className="mx-auto mb-4 flex items-center justify-center">
          <ChemistFigureBadgeSvg
            level={levelUpData.newLevel}
            size={96}
            className="animate-in zoom-in-75 duration-500 hover:scale-105 transition-transform"
          />
        </div>

        {/* Pill Header */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF8E7] border border-[#D4A359]/40 text-[#806000] text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#D4A359]" />
          <span>Kenaikan Gelar Akademik!</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D3748] font-display">
          Selamat, Level {levelUpData.newLevel}!
        </h2>

        <p className="text-sm text-[#708090] mt-1 mb-5 font-medium">
          Penalaran ilmiah Anda telah menembus ambang batas level baru.
        </p>

        {/* Gelar Card */}
        <div className="bg-[#F0F8FF] border border-[#B0C4DE] rounded-2xl p-5 mb-6 text-left space-y-3 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#708090] uppercase tracking-wider">
              Gelar Baru Anda
            </span>
            <span className="inline-flex items-center text-xs font-mono font-bold text-[#2E6930] bg-[#E2F0D9] border border-[#C5E0B4] px-2.5 py-0.5 rounded-lg">
              +{levelUpData.amountAdded} XP Didapat
            </span>
          </div>

          <div className="flex items-center gap-2">
            <UserTitleBadge level={levelUpData.newLevel} size="md" />
          </div>

          <div className="pt-2.5 border-t border-[#B0C4DE]/60 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#2D3748]">
              <BookOpen className="w-3.5 h-3.5 text-[#2B6CB0] shrink-0" />
              <span>Inspirasi Tokoh: {def.figureName}</span>
            </div>
            <p className="text-xs text-[#556B82] leading-relaxed italic pl-5">
              "{def.figureContribution}"
            </p>
          </div>
        </div>

        {/* Action Button: Sage Green */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="w-full py-3.5 px-6 rounded-2xl bg-[#2E6930] hover:bg-[#255527] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#255527]"
        >
          <span>Lanjutkan Belajar & Latihan</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
