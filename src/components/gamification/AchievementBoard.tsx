import React, { useState, useEffect } from 'react';
import {
  Award,
  Lock,
  CheckCircle2,
  Sparkles,
  Search,
  Filter,
  Flame,
  Target,
  FlaskConical,
  PenTool,
  HelpCircle,
} from 'lucide-react';
import {
  ACHIEVEMENTS,
  ACHIEVEMENT_CATEGORIES,
  RARITY_STYLES,
  type AchievementCategory,
  type AchievementDefinition,
} from '../../utils/achievementConstants';
import { CatBadgeSvg } from './CatBadgeSvg';
import {
  getStudentAchievements,
  type StudentAchievementProgress,
} from '../../services/achievementService';

interface AchievementBoardProps {
  userId?: string;
}

export const AchievementBoard: React.FC<AchievementBoardProps> = ({ userId }) => {
  const [achievementsProgress, setAchievementsProgress] = useState<
    Record<string, StudentAchievementProgress>
  >({});
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<AchievementCategory | 'all'>('all');
  const [filterStatus, setFilterStatus] = useState<'all' | 'unlocked' | 'locked'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const loadData = async () => {
    setIsLoading(true);
    try {
      const data = await getStudentAchievements(userId);
      setAchievementsProgress(data);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();

    // Listen to real-time unlock events
    const handleUnlock = () => {
      loadData();
    };

    window.addEventListener('osn_achievement_unlocked', handleUnlock);
    return () => window.removeEventListener('osn_achievement_unlocked', handleUnlock);
  }, [userId]);

  // Statistics
  const totalBadges = ACHIEVEMENTS.length;
  const unlockedList = ACHIEVEMENTS.filter((a) => achievementsProgress[a.id]?.isUnlocked);
  const unlockedCount = unlockedList.length;
  const totalXpEarned = unlockedList.reduce((acc, curr) => acc + curr.xpReward, 0);
  const completionPercentage = Math.round((unlockedCount / totalBadges) * 100);

  // Filtered List
  const filteredAchievements = ACHIEVEMENTS.filter((item) => {
    const progress = achievementsProgress[item.id];
    const isUnlocked = Boolean(progress?.isUnlocked);

    // Category filter
    if (selectedCategory !== 'all' && item.category !== selectedCategory) {
      return false;
    }

    // Status filter
    if (filterStatus === 'unlocked' && !isUnlocked) return false;
    if (filterStatus === 'locked' && isUnlocked) return false;

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchCategory = item.categoryName.toLowerCase().includes(q);
      if (!matchTitle && !matchDesc && !matchCategory) return false;
    }

    return true;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Overview Stats Banner */}
      <div className="bg-[#FFFFF0] border border-[#B0C4DE] rounded-3xl p-6 shadow-xs relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FFF2CC] to-[#FFE599] border-2 border-[#D4A359] flex items-center justify-center text-3xl shadow-sm shrink-0">
              🏆
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-bold text-[#2D3748] font-display">
                  Galeri Lencana & Pencapaian
                </h2>
                <span className="px-2 py-0.5 bg-[#FFF2CC] text-[#806000] border border-[#FFE599] text-[11px] font-bold rounded-full">
                  {unlockedCount} / {totalBadges} Terbuka
                </span>
              </div>
              <p className="text-xs text-[#708090] mt-1 max-w-xl leading-relaxed">
                Koleksi lencana prestasi unik laboratorium, kebiasaan belajar, kemahiran notasi KaTeX,
                hingga misi rahasia olimpiade kimia.
              </p>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3">
            <div className="px-4 py-3 bg-[#F0F8FF] border border-[#B0C4DE] rounded-2xl text-center min-w-[100px]">
              <div className="text-[11px] text-[#708090] font-medium">Koleksi Terbuka</div>
              <div className="text-lg font-bold font-mono text-[#2D3748]">{completionPercentage}%</div>
            </div>

            <div className="px-4 py-3 bg-[#E2F0D9] border border-[#C5E0B4] rounded-2xl text-center min-w-[100px]">
              <div className="text-[11px] text-[#2E6930] font-medium">XP dari Lencana</div>
              <div className="text-lg font-bold font-mono text-[#2E6930]">+{totalXpEarned} XP</div>
            </div>
          </div>
        </div>

        {/* Global Progress Bar */}
        <div className="mt-5 pt-4 border-t border-[#D3D3D3]/60">
          <div className="flex justify-between items-center text-xs font-semibold text-[#708090] mb-1.5">
            <span>Kemajuan Keseluruhan Lencana Siswa</span>
            <span className="font-mono text-[#2D3748]">{unlockedCount} dari {totalBadges} Selesai</span>
          </div>
          <div className="w-full h-2.5 bg-[#F0F8FF] border border-[#B0C4DE] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#D4A359] to-[#2E6930] rounded-full transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-[#FFFFF0] border border-[#B0C4DE] rounded-2xl p-4 space-y-3 shadow-2xs">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#708090] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari lencana, kata kunci atau topik..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-[#F0F8FF] border border-[#B0C4DE] rounded-xl text-[#2D3748] placeholder:text-[#708090] focus:outline-none focus:ring-2 focus:ring-[#B0C4DE]/40 focus:border-[#708090] transition-all"
            />
          </div>

          {/* Status Filter Toggle */}
          <div className="flex items-center gap-1 bg-[#F0F8FF] p-1 border border-[#B0C4DE] rounded-xl text-xs font-semibold">
            <button
              type="button"
              onClick={() => setFilterStatus('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                filterStatus === 'all'
                  ? 'bg-[#708090] text-[#FFFFF0] font-bold shadow-2xs'
                  : 'text-[#708090] hover:text-[#2D3748]'
              }`}
            >
              Semua ({totalBadges})
            </button>
            <button
              type="button"
              onClick={() => setFilterStatus('unlocked')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                filterStatus === 'unlocked'
                  ? 'bg-[#2E6930] text-[#FFFFF0] font-bold shadow-2xs'
                  : 'text-[#708090] hover:text-[#2D3748]'
              }`}
            >
              Terbuka ({unlockedCount})
            </button>
            <button
              type="button"
              onClick={() => setFilterStatus('locked')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                filterStatus === 'locked'
                  ? 'bg-[#708090] text-[#FFFFF0] font-bold shadow-2xs'
                  : 'text-[#708090] hover:text-[#2D3748]'
              }`}
            >
              Terkunci ({totalBadges - unlockedCount})
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-1 pb-1 text-xs">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-semibold transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#708090] text-[#FFFFF0] shadow-xs'
                : 'bg-[#F0F8FF] text-[#708090] hover:text-[#2D3748] border border-[#B0C4DE]'
            }`}
          >
            Semua Kategori
          </button>

          {(Object.keys(ACHIEVEMENT_CATEGORIES) as AchievementCategory[]).map((catKey) => {
            const cat = ACHIEVEMENT_CATEGORIES[catKey];
            const isCatActive = selectedCategory === catKey;
            const countInCat = ACHIEVEMENTS.filter((a) => a.category === catKey).length;
            const unlockedInCat = ACHIEVEMENTS.filter(
              (a) => a.category === catKey && achievementsProgress[a.id]?.isUnlocked
            ).length;

            return (
              <button
                key={catKey}
                type="button"
                onClick={() => setSelectedCategory(catKey)}
                className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  isCatActive
                    ? 'bg-[#708090] text-[#FFFFF0] shadow-xs'
                    : 'bg-[#F0F8FF] text-[#708090] hover:text-[#2D3748] border border-[#B0C4DE]'
                }`}
              >
                <span>{cat.emoji}</span>
                <span>{cat.name}</span>
                <span className="text-[10px] opacity-75 font-mono">
                  ({unlockedInCat}/{countInCat})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Badges Grid */}
      {filteredAchievements.length === 0 ? (
        <div className="p-12 text-center bg-[#FFFFF0] border border-[#B0C4DE] rounded-3xl space-y-2">
          <div className="text-3xl">🔍</div>
          <h3 className="text-sm font-bold text-[#2D3748]">Tidak ada lencana yang cocok</h3>
          <p className="text-xs text-[#708090]">
            Coba ubah kata kunci pencarian atau sesuaikan filter status lencana di atas.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filteredAchievements.map((item) => {
            const prog = achievementsProgress[item.id];
            const isUnlocked = Boolean(prog?.isUnlocked);
            const currentVal = prog?.currentValue || 0;
            const targetVal = item.targetValue;
            const percent = isUnlocked ? 100 : Math.min(99, Math.round((currentVal / targetVal) * 100));
            const rarity = RARITY_STYLES[item.rarity];

            // Secret Badge masking if locked
            const isMaskedSecret = item.isSecret && !isUnlocked;
            const displayTitle = isMaskedSecret ? '???' : item.title;
            const displayDesc = isMaskedSecret
              ? item.secretHint || 'Misi rahasia laboratorium kimia. Teruslah bereksplorasi untuk membukanya!'
              : item.description;

            return (
              <div
                key={item.id}
                className={`rounded-2xl p-4 border transition-all flex flex-col justify-between relative group ${
                  isUnlocked
                    ? 'bg-[#FFFFF0] border-[#B0C4DE] hover:border-[#D4A359] shadow-xs'
                    : 'bg-[#FFFFF0]/60 border-[#CBD5E1] opacity-80 hover:opacity-100'
                }`}
              >
                <div>
                  {/* Top Row: Emoji Icon + Rarity Badge */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <CatBadgeSvg
                      achievementId={item.id}
                      isUnlocked={isUnlocked}
                      isSecret={item.isSecret}
                      size={52}
                      className="shrink-0"
                    />

                    <div className="flex flex-col items-end gap-1">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${rarity.badge}`}>
                        {rarity.label}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-[#2E6930] bg-[#E2F0D9] px-1.5 py-0.5 rounded border border-[#C5E0B4]">
                        +{item.xpReward} XP
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-bold text-[#2D3748] font-display">
                        {displayTitle}
                      </h4>
                      {isUnlocked && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2E6930] shrink-0" />
                      )}
                    </div>
                    <p className="text-xs text-[#708090] leading-relaxed line-clamp-3">
                      {displayDesc}
                    </p>
                  </div>
                </div>

                {/* Footer Progress & Status */}
                <div className="mt-4 pt-3 border-t border-[#D3D3D3]/50">
                  {isUnlocked ? (
                    <div className="flex items-center justify-between text-[11px] text-[#2E6930] font-semibold">
                      <span className="flex items-center gap-1">
                        <span>✓ Berhasil Terbuka</span>
                      </span>
                      {prog?.unlockedAt && (
                        <span className="text-[10px] text-[#708090] font-normal font-mono">
                          {new Date(prog.unlockedAt).toLocaleDateString('id-ID', {
                            day: 'numeric',
                            month: 'short',
                          })}
                        </span>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center text-[10px] text-[#708090] font-mono">
                        <span className="flex items-center gap-1">
                          <Lock className="w-3 h-3 text-[#708090]" />
                          <span>Terkunci</span>
                        </span>
                        {!isMaskedSecret && (
                          <span>
                            {currentVal} / {targetVal} {item.unit} ({percent}%)
                          </span>
                        )}
                      </div>
                      {!isMaskedSecret && (
                        <div className="w-full h-1.5 bg-[#F0F8FF] border border-[#B0C4DE] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#708090] rounded-full transition-all"
                            style={{ width: `${percent}%` }}
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
