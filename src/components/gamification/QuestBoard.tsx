import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Target,
  Trophy,
  Gift,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
  GraduationCap,
  Atom,
  ChevronDown,
  ChevronUp,
  Search,
  Zap,
  Filter,
  ShieldCheck,
  Award,
  Layers,
  Flame,
} from 'lucide-react';
import {
  getAllPillarQuestGroups,
  getSmaQuestGroups,
  claimQuestReward,
  syncQuestProgressFromCloud,
  persistQuestProgressToCloud,
  type PillarQuestGroup,
  type SmaQuestGroup,
  type LearningQuest,
  type QuestBoardSummary,
} from '../../services/questService';
import type { PillarMasteryScore, SavedSubmissionRecord } from '../../types/database';

interface QuestBoardProps {
  userId?: string;
  pillarScores?: PillarMasteryScore[];
  submissions?: SavedSubmissionRecord[];
}

type QuestTrack = 'sma' | 'osn';
type FilterTab = 'all' | 'ready_to_claim' | 'in_progress' | 'completed';

export const QuestBoard: React.FC<QuestBoardProps> = ({
  userId,
  pillarScores = [],
  submissions = [],
}) => {
  const [loading, setLoading] = useState(true);
  const [questTrack, setQuestTrack] = useState<QuestTrack>('sma');

  // OSN Track Data
  const [osnGroups, setOsnGroups] = useState<PillarQuestGroup[]>([]);
  const [osnSummary, setOsnSummary] = useState<QuestBoardSummary>({
    totalQuests: 30,
    completedQuests: 0,
    readyToClaimQuests: 0,
    totalXpAvailable: 2250,
    totalXpClaimed: 0,
    completionPercent: 0,
  });

  // SMA Track Data
  const [smaGroups, setSmaGroups] = useState<SmaQuestGroup[]>([]);
  const [smaSummary, setSmaSummary] = useState<QuestBoardSummary>({
    totalQuests: 64,
    completedQuests: 0,
    readyToClaimQuests: 0,
    totalXpAvailable: 3440,
    totalXpClaimed: 0,
    completionPercent: 0,
  });

  const [activeTab, setActiveTab] = useState<FilterTab>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedOsn, setExpandedOsn] = useState<Record<number, boolean>>({});
  const [expandedSma, setExpandedSma] = useState<Record<number, boolean>>({});
  const [claimingQuestId, setClaimingQuestId] = useState<string | null>(null);

  // Load data papan misi dari cloud & lokal untuk kedua jalur
  const loadQuestData = async () => {
    try {
      const [osnData, smaData] = await Promise.all([
        getAllPillarQuestGroups(userId, pillarScores),
        getSmaQuestGroups(userId, undefined, submissions),
      ]);

      setOsnGroups(osnData.groups);
      setOsnSummary(osnData.summary);

      setSmaGroups(smaData.groups);
      setSmaSummary(smaData.summary);

      // Default expand pilar OSN yang belum fully completed
      setExpandedOsn((prev) => {
        if (Object.keys(prev).length > 0) return prev;
        const initialMap: Record<number, boolean> = {};
        osnData.groups.forEach((g) => {
          initialMap[g.pillarNumber] = !g.isFullyCompleted;
        });
        return initialMap;
      });

      // Default expand modul SMA yang belum fully completed
      setExpandedSma((prev) => {
        if (Object.keys(prev).length > 0) return prev;
        const initialMap: Record<number, boolean> = {};
        smaData.groups.forEach((g) => {
          initialMap[g.topicNumber] = !g.isFullyCompleted;
        });
        return initialMap;
      });

      // Sinkronkan seluruh progres misi ke Supabase per akun siswa
      if (userId && userId !== 'default-student') {
        const allOsnQuests = osnData.groups.flatMap((g) => g.quests);
        const allSmaQuests = smaData.groups.flatMap((g) => g.quests);
        persistQuestProgressToCloud(userId, [...allOsnQuests, ...allSmaQuests]);
      }
    } catch (err) {
      console.warn('[QuestBoard] Gagal memuat data papan misi:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadQuestData();
  }, [userId, pillarScores, submissions]);

  // Listener event eksternal
  useEffect(() => {
    const handleUpdate = () => {
      loadQuestData();
    };

    window.addEventListener('osn_quest_claimed', handleUpdate);
    window.addEventListener('osn_active_reading_changed', handleUpdate);

    return () => {
      window.removeEventListener('osn_quest_claimed', handleUpdate);
      window.removeEventListener('osn_active_reading_changed', handleUpdate);
    };
  }, [userId, pillarScores]);

  // Handler klaim reward quest
  const handleClaim = async (quest: LearningQuest) => {
    if (claimingQuestId || quest.isClaimed) return;
    setClaimingQuestId(quest.id);
    try {
      await claimQuestReward(quest, userId);
      await loadQuestData();
    } catch (err) {
      console.warn('[QuestBoard] Gagal mengklaim misi:', err);
    } finally {
      setClaimingQuestId(null);
    }
  };

  const toggleOsnPillar = (pillarNumber: number) => {
    setExpandedOsn((prev) => ({
      ...prev,
      [pillarNumber]: !prev[pillarNumber],
    }));
  };

  const toggleSmaModule = (topicNumber: number) => {
    setExpandedSma((prev) => ({
      ...prev,
      [topicNumber]: !prev[topicNumber],
    }));
  };

  const expandAll = () => {
    if (questTrack === 'osn') {
      const map: Record<number, boolean> = {};
      osnGroups.forEach((g) => {
        map[g.pillarNumber] = true;
      });
      setExpandedOsn(map);
    } else {
      const map: Record<number, boolean> = {};
      smaGroups.forEach((g) => {
        map[g.topicNumber] = true;
      });
      setExpandedSma(map);
    }
  };

  const collapseAll = () => {
    if (questTrack === 'osn') {
      const map: Record<number, boolean> = {};
      osnGroups.forEach((g) => {
        map[g.pillarNumber] = false;
      });
      setExpandedOsn(map);
    } else {
      const map: Record<number, boolean> = {};
      smaGroups.forEach((g) => {
        map[g.topicNumber] = false;
      });
      setExpandedSma(map);
    }
  };

  // Filter kelompok pilar OSN
  const filteredOsnGroups = useMemo(() => {
    return osnGroups
      .map((group) => {
        const filteredQuests = group.quests.filter((q) => {
          if (activeTab === 'ready_to_claim') return q.status === 'ready_to_claim';
          if (activeTab === 'in_progress') return q.status === 'in_progress';
          if (activeTab === 'completed') return q.isClaimed;
          return true;
        });

        const matchesQuery =
          searchQuery.trim() === '' ||
          group.pillarName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          group.quests.some((q) =>
            q.targetTitle.toLowerCase().includes(searchQuery.toLowerCase())
          );

        return {
          ...group,
          quests: filteredQuests,
          matchesQuery,
        };
      })
      .filter((group) => group.matchesQuery && (activeTab === 'all' || group.quests.length > 0));
  }, [osnGroups, activeTab, searchQuery]);

  // Filter kelompok modul SMA
  const filteredSmaGroups = useMemo(() => {
    return smaGroups
      .map((group) => {
        const filteredQuests = group.quests.filter((q) => {
          if (activeTab === 'ready_to_claim') return q.status === 'ready_to_claim';
          if (activeTab === 'in_progress') return q.status === 'in_progress';
          if (activeTab === 'completed') return q.isClaimed;
          return true;
        });

        const qLower = searchQuery.toLowerCase().trim();
        const matchesQuery =
          qLower === '' ||
          group.title.toLowerCase().includes(qLower) ||
          group.grade.toLowerCase().includes(qLower) ||
          group.phase.toLowerCase().includes(qLower) ||
          `modul ${group.topicNumber}`.includes(qLower) ||
          `topik ${group.topicNumber}`.includes(qLower) ||
          `#${group.topicNumber}`.includes(qLower) ||
          group.quests.some((q) =>
            q.title.toLowerCase().includes(qLower) ||
            q.targetTitle.toLowerCase().includes(qLower) ||
            q.description.toLowerCase().includes(qLower)
          );

        return {
          ...group,
          quests: filteredQuests,
          matchesQuery,
        };
      })
      .filter((group) => group.matchesQuery && (activeTab === 'all' || group.quests.length > 0));
  }, [smaGroups, activeTab, searchQuery]);

  // Ringkasan data aktif berdasarkan tab track
  const currentSummary = questTrack === 'sma' ? smaSummary : osnSummary;
  const currentReadyCount = currentSummary.readyToClaimQuests;

  // Helper render kartu misi dengan 4 status visual kontras & pips gamifikasi
  const renderQuestCard = (quest: LearningQuest) => {
    const isClaimed = quest.isClaimed || quest.status === 'completed';
    const isReadyToClaim = !quest.isClaimed && quest.status === 'ready_to_claim';
    const isInProgress =
      !quest.isClaimed &&
      quest.status !== 'ready_to_claim' &&
      (quest.status === 'in_progress' || quest.progressPercent > 0);
    const isNotStarted = !quest.isClaimed && !isReadyToClaim && !isInProgress;

    const isTheory = quest.type === 'sma_foundation' || quest.type === 'olympiad_theory';
    const isQuestionQuest = Boolean(quest.targetCount && quest.targetCount > 1);

    // Styling Chip Badge berdasarkan Tier Kesulitan & Jenis Misi
    let tierChip = {
      label: quest.badgeLabel,
      bg: 'bg-[#F1F5F9]',
      border: 'border-[#CBD5E1]',
      text: 'text-[#475569]',
      icon: <Sparkles className="w-2.5 h-2.5 text-[#64748B]" />,
    };

    if (quest.difficultyTier === 'easy') {
      tierChip = {
        label: 'Level 1: Pemanasan',
        bg: 'bg-[#ECFDF5]',
        border: 'border-[#A7F3D0]',
        text: 'text-[#065F46]',
        icon: <Sparkles className="w-2.5 h-2.5 text-[#10B981]" />,
      };
    } else if (quest.difficultyTier === 'medium') {
      tierChip = {
        label: 'Level 2: Pemantapan',
        bg: 'bg-[#EFF6FF]',
        border: 'border-[#BFDBFE]',
        text: 'text-[#1E40AF]',
        icon: <Zap className="w-2.5 h-2.5 text-[#3B82F6]" />,
      };
    } else if (quest.difficultyTier === 'hard') {
      tierChip = {
        label: 'Level 3: Bos Modul',
        bg: 'bg-[#FDF2F8]',
        border: 'border-[#FBCFE8]',
        text: 'text-[#9D174D]',
        icon: <Flame className="w-2.5 h-2.5 text-[#EC4899]" />,
      };
    } else if (isTheory) {
      tierChip = {
        label: quest.badgeLabel || 'Teori Fondasi',
        bg: 'bg-[#F0FDF4]',
        border: 'border-[#BBF7D0]',
        text: 'text-[#166534]',
        icon: <GraduationCap className="w-2.5 h-2.5 text-[#16A34A]" />,
      };
    }

    // 4 Varian Warna Kontainer Kartu yang Sangat Kontras
    let cardContainerClass = 'bg-[#FFFFF0] border border-[#CBD5E1] shadow-2xs hover:border-[#94A3B8] hover:shadow-xs';
    if (isClaimed) {
      // 1. Selesai & Terklaim: Sage green tenang & bersahaja
      cardContainerClass = 'bg-[#F2F9F2] border border-[#B8D8BA] shadow-2xs opacity-95';
    } else if (isReadyToClaim) {
      // 2. Siap Klaim: Emas menyala merayakan pencapaian
      cardContainerClass = 'bg-gradient-to-b from-[#FFFDF5] to-[#FEF9E7] border-2 border-[#D4A359] shadow-md ring-4 ring-[#D4A359]/20';
    } else if (isInProgress) {
      // 3. Sedang Dikerjakan: Biru aktif energik
      cardContainerClass = 'bg-gradient-to-b from-[#F0F7FF] to-[#FFFFFF] border-2 border-[#3B82F6] shadow-sm ring-2 ring-[#3B82F6]/15';
    }

    return (
      <div
        key={quest.id}
        className={`relative rounded-2xl p-4 sm:p-4.5 flex flex-col justify-between space-y-3.5 transition-all overflow-hidden ${cardContainerClass}`}
      >
        {/* Accent Bar di bagian paling atas kartu */}
        {isReadyToClaim && (
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4A359] via-[#F59E0B] to-[#D4A359]" />
        )}
        {isInProgress && (
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]" />
        )}
        {isClaimed && (
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#2E6930]/40" />
        )}

        <div className="space-y-3">
          {/* Baris 1: Nomor Urut Misi + Chip Tier & XP Reward */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span
                className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center font-mono shadow-2xs shrink-0 ${
                  isClaimed
                    ? 'bg-[#2E6930] text-[#FFFFF0]'
                    : isReadyToClaim
                    ? 'bg-[#D4A359] text-white animate-pulse'
                    : isInProgress
                    ? 'bg-[#2563EB] text-white'
                    : 'bg-[#94A3B8] text-white'
                }`}
              >
                {isClaimed ? <CheckCircle2 className="w-3.5 h-3.5" /> : quest.stepNumber}
              </span>

              <span
                className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-md border ${tierChip.bg} ${tierChip.border} ${tierChip.text}`}
              >
                {tierChip.icon}
                <span>{tierChip.label}</span>
              </span>
            </div>

            {/* XP Pill */}
            <div
              className={`flex items-center gap-1 text-[11px] font-mono font-bold px-2 py-0.5 rounded-full border shrink-0 ${
                isClaimed
                  ? 'bg-[#E2F0D9] text-[#2E6930] border-[#C5E0B4]'
                  : isReadyToClaim
                  ? 'bg-[#FEF3C7] text-[#92400E] border-[#FDE68A] animate-pulse'
                  : 'bg-[#FFF2CC] text-[#806000] border-[#FFE599]'
              }`}
            >
              <Gift className="w-3 h-3 text-[#B8860B]" />
              <span>+{quest.xpReward} XP</span>
            </div>
          </div>

          {/* Baris 2: Tipografi Ringkas, Tegas, Tanpa Repetisi */}
          <div>
            <h4 className="text-sm font-bold text-[#2D3748] leading-snug">
              {quest.title}
            </h4>

            {quest.targetTitle && quest.targetTitle !== quest.title && (
              <p className="text-xs font-semibold text-[#4A5867] mt-0.5 line-clamp-1">
                {quest.targetTitle}
              </p>
            )}

            <p className="text-[11px] text-[#708090] mt-1 line-clamp-2 leading-relaxed">
              {quest.description}
            </p>
          </div>

          {/* Baris 3: Indikator Progres (Pips Soal atau Bar Bacaan) */}
          <div className="pt-0.5">
            {isQuestionQuest ? (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-[#4A5867] flex items-center gap-1">
                    <span>Target:</span>
                    <span className="font-mono font-bold text-[#2D3748]">
                      {quest.solvedCount || 0}/{quest.targetCount || 3} Soal
                    </span>
                  </span>

                  {/* Status Tag */}
                  <span className="text-[10px] font-medium">
                    {isClaimed ? (
                      <span className="text-[#2E6930] font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Tuntas
                      </span>
                    ) : isReadyToClaim ? (
                      <span className="text-[#92400E] font-bold flex items-center gap-1 animate-pulse">
                        <Sparkles className="w-3 h-3 text-[#D4A359]" /> Siap Klaim
                      </span>
                    ) : isInProgress ? (
                      <span className="text-[#1D4ED8] font-bold flex items-center gap-1">
                        <Zap className="w-3 h-3 fill-[#2563EB] text-[#2563EB]" /> Aktif
                      </span>
                    ) : (
                      <span className="text-[#94A3B8] flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5" /> Belum Mulai
                      </span>
                    )}
                  </span>
                </div>

                {/* 3 Tactile Question Slots / Pips */}
                <div className="grid grid-cols-3 gap-1.5">
                  {[0, 1, 2].map((idx) => {
                    const target = quest.targetCount || 3;
                    const solved = quest.solvedCount || 0;
                    const isPipSolved = solved > idx || quest.progressPercent >= ((idx + 1) / target) * 100;
                    const isPipActive = !isPipSolved && solved === idx && isInProgress;

                    return (
                      <div
                        key={idx}
                        className={`h-2.5 rounded-full transition-all duration-300 relative ${
                          isPipSolved
                            ? isClaimed
                              ? 'bg-[#2E6930]'
                              : isReadyToClaim
                              ? 'bg-[#D4A359]'
                              : 'bg-[#3B82F6]'
                            : isPipActive
                            ? 'bg-[#BFDBFE] border border-[#3B82F6] animate-pulse'
                            : 'bg-[#E2E8F0]'
                        }`}
                        title={`Soal #${idx + 1}: ${
                          isPipSolved
                            ? 'Selesai Dijawab'
                            : isPipActive
                            ? 'Sedang Dikerjakan'
                            : 'Belum Dikerjakan'
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
            ) : (
              /* Indikator Progres Baca Teori */
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-[#4A5867] flex items-center gap-1">
                    <span>Progres:</span>
                    <span className="font-mono font-bold text-[#2D3748]">
                      {quest.progressPercent}%
                    </span>
                  </span>

                  <span className="text-[10px] font-medium">
                    {isClaimed ? (
                      <span className="text-[#2E6930] font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Tuntas
                      </span>
                    ) : isReadyToClaim ? (
                      <span className="text-[#92400E] font-bold flex items-center gap-1 animate-pulse">
                        <Sparkles className="w-3 h-3 text-[#D4A359]" /> Siap Klaim
                      </span>
                    ) : isInProgress ? (
                      <span className="text-[#1D4ED8] font-bold flex items-center gap-1">
                        <Zap className="w-3 h-3 fill-[#2563EB] text-[#2563EB]" /> {quest.progressPercent}%
                      </span>
                    ) : (
                      <span className="text-[#94A3B8] flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5" /> Belum Mulai
                      </span>
                    )}
                  </span>
                </div>

                <div className="w-full h-2 rounded-full bg-[#E2E8F0] overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isClaimed
                        ? 'bg-[#2E6930]'
                        : isReadyToClaim
                        ? 'bg-[#D4A359]'
                        : isInProgress
                        ? 'bg-gradient-to-r from-[#3B82F6] to-[#2563EB]'
                        : 'bg-transparent'
                    }`}
                    style={{ width: `${quest.progressPercent}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Baris 4: Tombol Aksi Sesuai 4 Status */}
        <div className="pt-2">
          {isReadyToClaim ? (
            <button
              onClick={() => handleClaim(quest)}
              disabled={claimingQuestId === quest.id}
              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-gradient-to-r from-[#D4A359] to-[#B8860B] hover:from-[#B8860B] hover:to-[#966E08] text-white text-xs font-bold rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer disabled:opacity-50 animate-pulse"
            >
              <Gift className="w-3.5 h-3.5 text-white" />
              <span>{claimingQuestId === quest.id ? 'Mengklaim...' : `Klaim +${quest.xpReward} XP!`}</span>
            </button>
          ) : isClaimed ? (
            <Link
              to={quest.actionUrl}
              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#E2F0D9]/70 hover:bg-[#D4E8C8] text-[#2E6930] text-xs font-bold rounded-xl border border-[#C5E0B4] shadow-2xs transition-all cursor-pointer"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#2E6930]" />
              <span>Buka Ulang</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          ) : isInProgress ? (
            <Link
              to={quest.actionUrl}
              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-[#1E293B] hover:bg-[#0F172A] text-white text-xs font-bold rounded-xl shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5 text-[#60A5FA] fill-[#60A5FA]" />
              <span>
                {isQuestionQuest
                  ? `Lanjutkan (${quest.solvedCount || 0}/${quest.targetCount || 3} Soal)`
                  : 'Lanjutkan Baca'}
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          ) : (
            <Link
              to={quest.actionUrl}
              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-white hover:bg-[#F0F8FF] text-[#4A5867] hover:text-[#2D3748] text-xs font-bold rounded-xl border border-[#CBD5E1] hover:border-[#94A3B8] shadow-2xs hover:shadow-xs transition-all cursor-pointer"
            >
              {isTheory ? (
                <BookOpen className="w-3.5 h-3.5 text-[#708090]" />
              ) : (
                <Target className="w-3.5 h-3.5 text-[#708090]" />
              )}
              <span>{isTheory ? 'Mulai Baca Teori' : 'Mulai Latihan'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* 1. Track Switcher Segmented Control (Materi Kimia SMA vs Materi Kimia OSN) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#FFFFF0] border border-[#B0C4DE] p-3 rounded-2xl shadow-xs">
        <div className="flex p-1 bg-[#F0F8FF] rounded-xl border border-[#B0C4DE] w-full sm:w-auto">
          {/* Tombol 1: Materi Kimia SMA (Posisi Pertama / Kiri) */}
          <button
            onClick={() => {
              setQuestTrack('sma');
              setActiveTab('all');
            }}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              questTrack === 'sma'
                ? 'bg-[#708090] text-[#FFFFF0] shadow-xs'
                : 'text-[#708090] hover:text-[#2D3748]'
            }`}
          >
            <GraduationCap className="w-4 h-4 text-[#4A7C59]" />
            <span>Materi Kimia SMA (16 Modul)</span>
            <span
              className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                questTrack === 'sma'
                  ? 'bg-white/20 text-white'
                  : 'bg-[#B0C4DE]/40 text-[#4A5867]'
              }`}
            >
              {smaSummary.completedQuests}/{smaSummary.totalQuests}
            </span>
          </button>

          {/* Tombol 2: Materi Kimia OSN (Posisi Kedua / Kanan) */}
          <button
            onClick={() => {
              setQuestTrack('osn');
              setActiveTab('all');
            }}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              questTrack === 'osn'
                ? 'bg-[#708090] text-[#FFFFF0] shadow-xs'
                : 'text-[#708090] hover:text-[#2D3748]'
            }`}
          >
            <Atom className="w-4 h-4 text-[#D4A359]" />
            <span>Materi Kimia OSN (10 Pilar)</span>
            <span
              className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                questTrack === 'osn'
                  ? 'bg-white/20 text-white'
                  : 'bg-[#B0C4DE]/40 text-[#4A5867]'
              }`}
            >
              {osnSummary.completedQuests}/30
            </span>
          </button>
        </div>

        <div className="flex items-center gap-2 text-xs text-[#708090] px-2">
          <span>Jalur Aktif:</span>
          <strong className="text-[#2D3748]">
            {questTrack === 'sma' ? '📘 Kurikulum Merdeka Fase E & F (16 Modul)' : '🏆 Silabus Olimpiade Puspresnas (10 Pilar)'}
          </strong>
        </div>
      </div>

      {/* 2. Header Banner & Statistik Track */}
      <div className="relative overflow-hidden rounded-3xl bg-[#FFFFF0] border border-[#B0C4DE] p-6 shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#B0C4DE]/30 text-[#2D3748] flex items-center gap-1.5 border border-[#B0C4DE]/60">
                <Target className="w-3.5 h-3.5 text-[#708090]" />
                {questTrack === 'sma' ? 'Papan Misi Kurikulum SMA' : 'Papan Misi Silabus OSN'}
              </span>
              <span className="text-xs font-bold text-[#708090]">
                {questTrack === 'sma' ? '16 Modul Belajar Berjenjang' : '10 Pilar Silabus Puspresnas'}
              </span>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-[#2D3748]">
              {questTrack === 'sma'
                ? 'Quest Board SMA: Taklukkan 16 Modul Sains Kimia'
                : 'Quest Board OSN: Taklukkan 30 Misi Olimpiade Kimia'}
            </h2>

            <p className="text-xs md:text-sm text-[#708090] leading-relaxed">
              {questTrack === 'sma'
                ? 'Siklus berjenjang per modul: selesaikan membaca materi fondasi, lalu uji pemahaman lewat 3 soal mudah (apabila ada), 3 soal sedang, dan 3 soal sulit untuk klaim reward XP!'
                : 'Siklus berjenjang 3 tahap: prasyarat kimia SMA, bedah materi kimia olimpiade, dan validasi penguasaan soal melalui evaluasi AI di Bank Soal untuk mengumpulkan XP dan gelar kimiawan!'}
            </p>
          </div>

          {/* Kartu Ringkasan Progres & XP */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 shrink-0">
            <div className="rounded-2xl bg-[#F0F8FF] border border-[#B0C4DE] p-3 text-center space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#708090]">
                Misi Tuntas
              </span>
              <p className="text-lg font-bold font-mono text-[#2D3748]">
                {currentSummary.completedQuests}{' '}
                <span className="text-xs font-normal text-[#708090]">
                  / {currentSummary.totalQuests}
                </span>
              </p>
              <div className="w-full h-1.5 rounded-full bg-[#D3D3D3]/60 overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#708090] transition-all duration-500"
                  style={{ width: `${currentSummary.completionPercent}%` }}
                />
              </div>
            </div>

            <div className="rounded-2xl bg-[#FFF9E6] border border-[#FFE599] p-3 text-center space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#806000]">
                XP Terkumpul
              </span>
              <p className="text-lg font-bold font-mono text-[#806000] flex items-center justify-center gap-1">
                <Gift className="w-4 h-4 text-[#B8860B]" />
                {currentSummary.totalXpClaimed}
              </p>
              <span className="text-[10px] font-medium text-[#806000]">
                dari {currentSummary.totalXpAvailable} XP
              </span>
            </div>

            <div className="col-span-2 sm:col-span-1 rounded-2xl bg-[#FFFFF0] border border-[#B0C4DE] p-3 text-center space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#708090]">
                Siap Klaim
              </span>
              <p
                className={`text-lg font-bold font-mono ${
                  currentReadyCount > 0 ? 'text-[#B8860B] animate-pulse-subtle' : 'text-[#708090]'
                }`}
              >
                {currentReadyCount}{' '}
                <span className="text-xs font-normal text-[#708090]">Misi</span>
              </p>
              <span className="text-[10px] font-semibold text-[#708090]">
                {currentReadyCount > 0 ? 'Klaim sekarang!' : 'Terus belajar!'}
              </span>
            </div>
          </div>
        </div>

        {/* Global Progress Line */}
        <div className="space-y-1.5 pt-2 border-t border-[#D3D3D3]/60">
          <div className="flex items-center justify-between text-xs text-[#708090]">
            <span className="font-semibold">
              Progres Jalur {questTrack === 'osn' ? 'OSN Kimia (10 Pilar)' : 'Kimia SMA (16 Modul)'}
            </span>
            <span className="font-mono font-bold text-[#2D3748]">
              {currentSummary.completionPercent}% Selesai
            </span>
          </div>
          <div className="w-full h-2 rounded-full bg-[#D3D3D3]/50 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#B0C4DE] via-[#708090] to-[#2E6930] transition-all duration-500"
              style={{ width: `${currentSummary.completionPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* 3. Filter Tab, Search Bar, & Kontrol Expand */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Tabs Status Filter */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#708090] text-[#FFFFF0] shadow-xs'
                : 'bg-[#FFFFF0] hover:bg-[#F0F8FF] text-[#708090] border border-[#B0C4DE]'
            }`}
          >
            Semua ({currentSummary.totalQuests})
          </button>

          <button
            onClick={() => setActiveTab('ready_to_claim')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'ready_to_claim'
                ? 'bg-[#D4A359] text-white shadow-xs'
                : 'bg-[#FFF9E6] hover:bg-[#FFF2CC] text-[#806000] border border-[#FFE599]'
            }`}
          >
            <Gift className="w-3.5 h-3.5" />
            <span>Siap Klaim ({currentReadyCount})</span>
          </button>

          <button
            onClick={() => setActiveTab('in_progress')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'in_progress'
                ? 'bg-[#708090] text-[#FFFFF0] shadow-xs'
                : 'bg-[#FFFFF0] hover:bg-[#F0F8FF] text-[#708090] border border-[#B0C4DE]'
            }`}
          >
            Sedang Berjalan
          </button>

          <button
            onClick={() => setActiveTab('completed')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'completed'
                ? 'bg-[#2E6930] text-[#FFFFF0] shadow-xs'
                : 'bg-[#E2F0D9] hover:bg-[#D4E8C8] text-[#2E6930] border border-[#C5E0B4]'
            }`}
          >
            Tuntas ({currentSummary.completedQuests})
          </button>
        </div>

        {/* Search & Collapse Toggle */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1 sm:w-64">
            <Search className="w-3.5 h-3.5 text-[#708090] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder={questTrack === 'osn' ? 'Cari topik pilar OSN...' : 'Cari modul kimia SMA...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-[#FFFFF0] border border-[#B0C4DE] text-xs text-[#2D3748] placeholder-[#708090] focus:outline-none focus:border-[#708090] transition-all"
            />
          </div>

          <div className="flex items-center gap-1 text-xs">
            <button
              onClick={expandAll}
              className="px-2.5 py-1.5 rounded-xl bg-[#FFFFF0] hover:bg-[#F0F8FF] text-[#708090] border border-[#B0C4DE] font-semibold transition-all cursor-pointer"
            >
              Buka Semua
            </button>
            <button
              onClick={collapseAll}
              className="px-2.5 py-1.5 rounded-xl bg-[#FFFFF0] hover:bg-[#F0F8FF] text-[#708090] border border-[#B0C4DE] font-semibold transition-all cursor-pointer"
            >
              Tutup Semua
            </button>
          </div>
        </div>
      </div>

      {/* 4A. KONTEN JALUR 1: MATERI KIMIA OSN (10 Pilar Silabus Puspresnas) */}
      {questTrack === 'osn' && (
        <div className="space-y-4">
          {filteredOsnGroups.length === 0 ? (
            <div className="rounded-3xl bg-[#FFFFF0] border border-[#B0C4DE] p-8 text-center space-y-3">
              <Target className="w-10 h-10 text-[#708090] mx-auto opacity-40" />
              <p className="text-sm font-bold text-[#2D3748]">
                Tidak ada pilar OSN yang sesuai dengan filter atau kata kunci.
              </p>
              <button
                onClick={() => {
                  setActiveTab('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 rounded-xl bg-[#708090] hover:bg-[#5D6D7D] text-[#FFFFF0] text-xs font-bold shadow-xs transition-all cursor-pointer"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            filteredOsnGroups.map((group) => {
              const isExpanded = Boolean(expandedOsn[group.pillarNumber]);
              const readyInGroup = group.quests.filter((q) => q.status === 'ready_to_claim').length;

              return (
                <div
                  key={group.pillarNumber}
                  className="overflow-hidden rounded-2xl bg-[#FFFFF0] border border-[#B0C4DE] shadow-xs transition-all"
                >
                  {/* Accordion Header */}
                  <div
                    onClick={() => toggleOsnPillar(group.pillarNumber)}
                    className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-[#F0F8FF]/60 transition-all select-none"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-[#B0C4DE]/30 text-[#2D3748] border border-[#B0C4DE]/60 text-xs font-bold font-mono flex items-center justify-center shrink-0">
                        #{group.pillarNumber}
                      </span>

                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-sm sm:text-base font-bold text-[#2D3748]">
                            {group.pillarName}
                          </h3>

                          {/* Mastery Score Badge */}
                          <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-full bg-[#FFF2CC] text-[#806000] border border-[#FFE599]">
                            Skor: {Math.round(group.masteryScore)}%
                          </span>

                          {/* Siap Klaim Alert Pill */}
                          {readyInGroup > 0 && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FFF9E6] text-[#806000] border border-[#FFE599] flex items-center gap-1 animate-pulse-subtle">
                              <Gift className="w-3 h-3 text-[#B8860B]" />
                              {readyInGroup} Siap Klaim
                            </span>
                          )}

                          {group.isFullyCompleted && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E2F0D9] text-[#2E6930] border border-[#C5E0B4] flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" />
                              Pilar Tuntas
                            </span>
                          )}
                        </div>

                        <p className="text-xs text-[#708090] mt-0.5">
                          Progres: {group.completedQuestsCount} dari 3 Misi Tuntas • Total Terklaim: +{group.claimedXp} XP
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#708090]">
                        <Gift className="w-3.5 h-3.5 text-[#B8860B]" />
                        <span>+{group.totalXpAvailable} XP</span>
                      </div>

                      <div className="w-6 h-6 rounded-full bg-[#F0F8FF] border border-[#B0C4DE] flex items-center justify-center text-[#708090]">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>

                  {/* Accordion Body: 3 Misi Berjejer */}
                  {isExpanded && (
                    <div className="border-t border-[#D3D3D3]/60 p-4 sm:p-5 bg-[#F0F8FF]/30">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {group.quests.map((quest) => renderQuestCard(quest))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      )}

      {/* 4B. KONTEN JALUR 2: MATERI KIMIA SMA (16 Modul Kurikulum Merdeka) */}
      {questTrack === 'sma' && (
        <div className="space-y-4">
          {filteredSmaGroups.length === 0 ? (
            <div className="rounded-3xl bg-[#FFFFF0] border border-[#B0C4DE] p-8 text-center space-y-3">
              <GraduationCap className="w-10 h-10 text-[#708090] mx-auto opacity-40" />
              <p className="text-sm font-bold text-[#2D3748]">
                Tidak ada modul kimia SMA yang sesuai dengan filter atau kata kunci.
              </p>
              <button
                onClick={() => {
                  setActiveTab('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 rounded-xl bg-[#708090] hover:bg-[#5D6D7D] text-[#FFFFF0] text-xs font-bold shadow-xs transition-all cursor-pointer"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            filteredSmaGroups.map((group) => {
              const isExpanded = Boolean(expandedSma[group.topicNumber]);
              const readyInGroup = group.quests.filter((q) => q.status === 'ready_to_claim').length;

              return (
                <div
                  key={group.topicNumber}
                  className="overflow-hidden rounded-2xl bg-[#FFFFF0] border border-[#B0C4DE] shadow-xs transition-all"
                >
                  {/* Accordion Header Modul SMA */}
                  <div
                    onClick={() => toggleSmaModule(group.topicNumber)}
                    className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-[#F0F8FF]/60 transition-all select-none"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-[#B0C4DE]/30 text-[#2D3748] border border-[#B0C4DE]/60 text-xs font-bold font-mono flex items-center justify-center shrink-0">
                        #{group.topicNumber}
                      </span>

                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-sm sm:text-base font-bold text-[#2D3748]">
                            {group.title}
                          </h3>

                          {/* Jenjang Badge */}
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#EBF3FB] text-[#2B4C7E] border border-[#B0C4DE]">
                            {group.grade} ({group.phase})
                          </span>

                          {/* Skor Akurasi Badge */}
                          {group.accuracyScore > 0 && (
                            <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-full bg-[#FFF2CC] text-[#806000] border border-[#FFE599]">
                              Skor: {group.accuracyScore}%
                            </span>
                          )}

                          {/* Siap Klaim Alert Pill */}
                          {readyInGroup > 0 && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FFF9E6] text-[#806000] border border-[#FFE599] flex items-center gap-1 animate-pulse-subtle">
                              <Gift className="w-3 h-3 text-[#B8860B]" />
                              {readyInGroup} Siap Klaim
                            </span>
                          )}

                          {group.isFullyCompleted && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E2F0D9] text-[#2E6930] border border-[#C5E0B4] flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" />
                              Modul Tuntas
                            </span>
                          )}
                        </div>

                        <p className="text-xs text-[#708090] mt-0.5">
                          Progres: {group.completedQuestsCount} dari {group.quests.length} Misi Tuntas • Total Terklaim: +{group.claimedXp} XP
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#708090]">
                        <Gift className="w-3.5 h-3.5 text-[#B8860B]" />
                        <span>+{group.totalXpAvailable} XP</span>
                      </div>

                      <div className="w-6 h-6 rounded-full bg-[#F0F8FF] border border-[#B0C4DE] flex items-center justify-center text-[#708090]">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>

                  {/* Accordion Body: Grid Kartu Misi Modul SMA */}
                  {isExpanded && (
                    <div className="border-t border-[#D3D3D3]/60 p-4 sm:p-5 bg-[#F0F8FF]/30">
                      <div
                        className={`grid grid-cols-1 sm:grid-cols-2 ${
                          group.quests.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
                        } gap-4`}
                      >
                        {group.quests.map((quest) => renderQuestCard(quest))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      )}

      {/* 5. Pencapaian Tambahan (Milestones Belajar) */}
      <div className="rounded-3xl bg-[#FFFFF0] border border-[#B0C4DE] p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-[#708090]" />
          <h3 className="text-sm font-bold text-[#2D3748]">
            Pencapaian & Milestone Spesial Dua Jalur
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl bg-[#F0F8FF] border border-[#B0C4DE] p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#2D3748] flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-[#4A5867]" />
                Pakar Kimia SMA
              </span>
              <span className="text-[10px] font-mono font-bold text-[#806000] bg-[#FFF2CC] px-2 py-0.5 rounded-full border border-[#FFE599]">
                +400 XP
              </span>
            </div>
            <p className="text-[11px] text-[#708090] leading-relaxed">
              Tuntaskan minimal 8 dari 16 Modul Materi Kimia SMA untuk mengunci pemahaman kurikulum sekolah.
            </p>
          </div>

          <div className="rounded-2xl bg-[#F0F8FF] border border-[#B0C4DE] p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#2D3748] flex items-center gap-1.5">
                <Atom className="w-4 h-4 text-[#708090]" />
                Olimpian Berdedikasi
              </span>
              <span className="text-[10px] font-mono font-bold text-[#806000] bg-[#FFF2CC] px-2 py-0.5 rounded-full border border-[#FFE599]">
                +500 XP
              </span>
            </div>
            <p className="text-[11px] text-[#708090] leading-relaxed">
              Tuntaskan minimal 5 Pilar OSN secara penuh (Teori Silabus & Bank Soal) hingga mencapai level Mastered.
            </p>
          </div>

          <div className="rounded-2xl bg-[#F0F8FF] border border-[#B0C4DE] p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#2D3748] flex items-center gap-1.5">
                <Trophy className="w-4 h-4 text-[#D4A359]" />
                Grand Master Kimia
              </span>
              <span className="text-[10px] font-mono font-bold text-[#806000] bg-[#FFF2CC] px-2 py-0.5 rounded-full border border-[#FFE599]">
                +1000 XP
              </span>
            </div>
            <p className="text-[11px] text-[#708090] leading-relaxed">
              Selesaikan seluruh misi dari kedua jalur belajar untuk mendominasi papan peringkat nasional!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
