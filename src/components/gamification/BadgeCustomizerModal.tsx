import React, { useState, useEffect, useMemo } from 'react';
import type {
  StudentShowcaseConfig,
  ShowcaseBadgeSlot,
  ShowcaseStatType,
  ShowcaseDataPayload,
} from '../../types/showcaseBadge';
import { DEFAULT_SHOWCASE_CONFIG, saveShowcaseConfig } from '../../services/showcaseBadgeService';
import { ACHIEVEMENTS, type AchievementDefinition, RARITY_STYLES } from '../../utils/achievementConstants';
import { getStudentAchievements, type StudentAchievementProgress } from '../../services/achievementService';
import { ShowcaseBadgePill } from './ShowcaseBadgePill';
import { CatBadgeSvg } from './CatBadgeSvg';
import {
  X,
  Sparkles,
  Flame,
  Zap,
  Award,
  Target,
  CheckCircle2,
  Layers,
  Trophy,
  RotateCcw,
  Check,
  Lock,
  Search,
} from 'lucide-react';

interface BadgeCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentConfig: StudentShowcaseConfig;
  dataPayload: ShowcaseDataPayload;
  userId?: string;
  onSaved: (newConfig: StudentShowcaseConfig) => void;
}

const STAT_OPTIONS: Array<{
  type: ShowcaseStatType;
  label: string;
  desc: string;
  icon: React.ReactNode;
}> = [
  {
    type: 'streak',
    label: 'Streak Belajar',
    desc: 'Hari pengerjaan berturut-turut tanpa putus',
    icon: <Flame className="w-4 h-4 text-amber-500" />,
  },
  {
    type: 'total_xp',
    label: 'XP Total',
    desc: 'Akumulasi poin pengalaman sains kimia',
    icon: <Zap className="w-4 h-4 text-sky-500" />,
  },
  {
    type: 'level',
    label: 'Level & Gelar Tokoh',
    desc: 'Tingkat kemahiran dan tokoh kimia dunia',
    icon: <Award className="w-4 h-4 text-emerald-600" />,
  },
  {
    type: 'accuracy',
    label: 'Rata-rata Akurasi',
    desc: 'Persentase ketepatan solusi lembar kerja',
    icon: <Target className="w-4 h-4 text-emerald-500" />,
  },
  {
    type: 'solved_count',
    label: 'Total Soal Selesai',
    desc: 'Jumlah sesi lembar kerja yang telah tuntas',
    icon: <CheckCircle2 className="w-4 h-4 text-blue-500" />,
  },
  {
    type: 'mastered_topics',
    label: 'Topik Dikuasai',
    desc: 'Jumlah pilar silabus OSN berstatus Mastered',
    icon: <Layers className="w-4 h-4 text-indigo-500" />,
  },
  {
    type: 'target_olympiad',
    label: 'Target Olimpiade',
    desc: 'Jenjang seleksi kompetisi yang dituju',
    icon: <Trophy className="w-4 h-4 text-amber-500" />,
  },
  {
    type: 'perfect_count',
    label: 'Skor 100% Sempurna',
    desc: 'Frekuensi capaian nilai sempurna 100%',
    icon: <Sparkles className="w-4 h-4 text-yellow-500" />,
  },
];

export const BadgeCustomizerModal: React.FC<BadgeCustomizerModalProps> = ({
  isOpen,
  onClose,
  currentConfig,
  dataPayload,
  userId,
  onSaved,
}) => {
  const [draftSlots, setDraftSlots] = useState<ShowcaseBadgeSlot[]>(currentConfig.slots);
  const [activeSlotIndex, setActiveSlotIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'stats' | 'achievements'>('stats');
  const [achievementsMap, setAchievementsMap] = useState<Record<string, StudentAchievementProgress>>({});
  const [achievementSearch, setAchievementSearch] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setDraftSlots([...currentConfig.slots]);
      getStudentAchievements(userId).then((map) => {
        setAchievementsMap(map || {});
      });
    }
  }, [isOpen, currentConfig, userId]);

  if (!isOpen) return null;

  const currentSlot = draftSlots[activeSlotIndex] || {
    slotIndex: activeSlotIndex,
    category: 'stats',
    statType: 'streak',
  };

  // Pilih Statistik untuk Slot Aktif
  const handleSelectStat = (statType: ShowcaseStatType) => {
    const updated = [...draftSlots];
    updated[activeSlotIndex] = {
      slotIndex: activeSlotIndex,
      category: 'stats',
      statType,
    };
    setDraftSlots(updated);
  };

  // Pilih Achievement untuk Slot Aktif
  const handleSelectAchievement = (achievementId: string) => {
    const updated = [...draftSlots];
    updated[activeSlotIndex] = {
      slotIndex: activeSlotIndex,
      category: 'achievement',
      achievementId,
    };
    setDraftSlots(updated);
  };

  // Reset ke Default
  const handleResetDefault = () => {
    setDraftSlots([...DEFAULT_SHOWCASE_CONFIG.slots]);
  };

  // Simpan
  const handleSave = async () => {
    setIsSaving(true);
    const newConfig: StudentShowcaseConfig = {
      maxSlots: 3,
      slots: draftSlots,
    };
    await saveShowcaseConfig(userId, newConfig);
    onSaved(newConfig);
    setIsSaving(false);
    onClose();
  };

  // Filter list achievement
  const filteredAchievements = ACHIEVEMENTS.filter((a) => {
    const q = achievementSearch.toLowerCase();
    return a.title.toLowerCase().includes(q) || a.description.toLowerCase().includes(q);
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FFFFF0] border-2 border-[#B0C4DE] rounded-3xl p-5 sm:p-7 shadow-2xl shadow-slate-900/25 max-h-[92vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200 ring-4 ring-[#FFF8E7]">
        {/* Top Gold Ribbon Accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D4A359] via-[#F3D698] to-[#D4A359]" />

        {/* Modal Header */}
        <div className="flex items-start justify-between pb-3 border-b border-[#B0C4DE]/60">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#806000] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A359]" />
              <span>Showcase Profil Siswa</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#2D3748] font-display">
              Kustomisasi Badge Tampilan
            </h3>
            <p className="text-xs text-[#708090] mt-0.5">
              Pilih 3 badge atau lencana kucing prestasi terbaik untuk dipamerkan di banner dashboard.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#708090] hover:text-[#2D3748] rounded-xl hover:bg-[#F0F8FF] transition-colors cursor-pointer"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Interactive Live Preview Box */}
        <div className="my-4 p-4 rounded-2xl bg-[#2D3748] text-white shadow-inner border border-slate-700/60">
          <div className="flex items-center justify-between text-[11px] text-slate-300 font-semibold uppercase tracking-wider mb-2.5">
            <span>Simulasi Tampilan Hero Banner</span>
            <span className="text-[10px] text-amber-300 lowercase italic">
              Klik salah satu slot untuk mengubahnya
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 justify-center sm:justify-start">
            {[0, 1, 2].map((idx) => {
              const slot = draftSlots[idx] || {
                slotIndex: idx,
                category: 'stats',
                statType: 'streak',
              };
              const isSelected = activeSlotIndex === idx;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveSlotIndex(idx)}
                  className={`relative cursor-pointer transition-all duration-200 rounded-2xl ${
                    isSelected ? 'ring-2 ring-[#D4A359] scale-105' : 'opacity-85 hover:opacity-100'
                  }`}
                >
                  <ShowcaseBadgePill slot={slot} data={dataPayload} variant="glass" />
                  <div
                    className={`absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black shadow-xs ${
                      isSelected
                        ? 'bg-[#D4A359] text-[#2D3748]'
                        : 'bg-slate-700 text-slate-200 border border-slate-600'
                    }`}
                  >
                    {idx + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Slot Selector & Category Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          {/* Slot Tabs */}
          <div className="flex items-center bg-[#F0F8FF] border border-[#B0C4DE] p-1 rounded-xl gap-1">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveSlotIndex(idx)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  activeSlotIndex === idx
                    ? 'bg-[#2E6930] text-white shadow-xs'
                    : 'text-[#708090] hover:text-[#2D3748]'
                }`}
              >
                Slot {idx + 1}
              </button>
            ))}
          </div>

          {/* Catalog Filter Tabs */}
          <div className="flex items-center bg-[#F0F8FF] border border-[#B0C4DE] p-1 rounded-xl gap-1">
            <button
              type="button"
              onClick={() => setActiveTab('stats')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                activeTab === 'stats'
                  ? 'bg-[#D4A359] text-white shadow-xs'
                  : 'text-[#708090] hover:text-[#2D3748]'
              }`}
            >
              Statistik & Performa
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('achievements')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                activeTab === 'achievements'
                  ? 'bg-[#D4A359] text-white shadow-xs'
                  : 'text-[#708090] hover:text-[#2D3748]'
              }`}
            >
              <span>Lencana Kucing</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/30 text-white font-mono">
                {Object.values(achievementsMap).filter((p) => p.isUnlocked).length}
              </span>
            </button>
          </div>
        </div>

        {/* Catalog Content (Scrollable) */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-2 min-h-[220px]">
          {activeTab === 'stats' ? (
            /* Daftar Statistik & Performa */
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {STAT_OPTIONS.map((opt) => {
                const isCurrent =
                  currentSlot.category === 'stats' && currentSlot.statType === opt.type;

                return (
                  <button
                    key={opt.type}
                    type="button"
                    onClick={() => handleSelectStat(opt.type)}
                    className={`p-3 rounded-2xl border text-left flex items-start gap-3 transition-all cursor-pointer ${
                      isCurrent
                        ? 'bg-[#E2F0D9] border-[#2E6930] shadow-xs ring-1 ring-[#2E6930]'
                        : 'bg-[#F0F8FF] border-[#B0C4DE] hover:bg-[#E8F4FD]'
                    }`}
                  >
                    <div className="p-2 rounded-xl bg-white shadow-2xs shrink-0 mt-0.5">
                      {opt.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#2D3748] font-display">
                          {opt.label}
                        </span>
                        {isCurrent && (
                          <span className="text-[10px] font-bold text-[#2E6930] flex items-center gap-0.5">
                            <Check className="w-3 h-3" />
                            <span>Terpilih</span>
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-[#708090] mt-0.5 leading-snug">
                        {opt.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            /* Daftar Achievement Lencana Kucing */
            <div className="space-y-2.5">
              {/* Search input */}
              <div className="relative">
                <Search className="w-4 h-4 text-[#708090] absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Cari lencana kucing prestasi..."
                  value={achievementSearch}
                  onChange={(e) => setAchievementSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-[#F0F8FF] border border-[#B0C4DE] text-[#2D3748] placeholder-[#708090] focus:outline-hidden focus:ring-1 focus:ring-[#D4A359]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {filteredAchievements.map((ach) => {
                  const progress = achievementsMap[ach.id];
                  const isUnlocked = !!progress?.isUnlocked;
                  const isCurrent =
                    currentSlot.category === 'achievement' &&
                    currentSlot.achievementId === ach.id;
                  const rarityStyle = RARITY_STYLES[ach.rarity];

                  return (
                    <button
                      key={ach.id}
                      type="button"
                      disabled={!isUnlocked}
                      onClick={() => handleSelectAchievement(ach.id)}
                      className={`p-3 rounded-2xl border text-left flex items-start gap-3 transition-all ${
                        isCurrent
                          ? 'bg-[#FFF8E7] border-[#D4A359] shadow-xs ring-1 ring-[#D4A359]'
                          : isUnlocked
                          ? 'bg-[#F0F8FF] border-[#B0C4DE] hover:bg-[#E8F4FD] cursor-pointer'
                          : 'bg-slate-100 border-slate-200 opacity-60 cursor-not-allowed'
                      }`}
                    >
                      <CatBadgeSvg
                        achievementId={ach.id}
                        isUnlocked={isUnlocked}
                        size={40}
                        className="shrink-0 drop-shadow-xs"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1">
                          <span
                            className={`text-[9px] font-bold px-1.5 py-0.2 rounded-full border ${rarityStyle.badge}`}
                          >
                            {rarityStyle.label}
                          </span>
                          {isCurrent ? (
                            <span className="text-[10px] font-bold text-[#D4A359] flex items-center gap-0.5">
                              <Check className="w-3 h-3" />
                              <span>Terpilih</span>
                            </span>
                          ) : !isUnlocked ? (
                            <span className="text-[10px] font-semibold text-slate-400 flex items-center gap-0.5">
                              <Lock className="w-3 h-3" />
                              <span>Terkunci</span>
                            </span>
                          ) : null}
                        </div>
                        <div className="text-xs font-bold text-[#2D3748] font-display mt-0.5 truncate">
                          {ach.title}
                        </div>
                        <p className="text-[10px] text-[#708090] mt-0.5 line-clamp-2 leading-tight">
                          {ach.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="pt-3 mt-3 border-t border-[#B0C4DE]/60 flex flex-wrap items-center justify-between gap-2.5">
          <button
            type="button"
            onClick={handleResetDefault}
            className="px-3.5 py-2 text-xs font-bold text-[#708090] hover:text-[#2D3748] rounded-xl hover:bg-[#F0F8FF] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Kembalikan Default</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-[#708090] hover:text-[#2D3748] rounded-xl hover:bg-[#F0F8FF] transition-colors cursor-pointer"
            >
              Batal
            </button>
            <button
              type="button"
              disabled={isSaving}
              onClick={handleSave}
              className="px-5 py-2 text-xs font-bold text-white bg-[#2E6930] hover:bg-[#255527] rounded-xl shadow-sm transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              <Check className="w-3.5 h-3.5" />
              <span>{isSaving ? 'Menyimpan...' : 'Simpan Konfigurasi'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
