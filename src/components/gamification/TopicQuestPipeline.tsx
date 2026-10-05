import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Gift,
  Clock,
  ExternalLink,
} from 'lucide-react';
import {
  SolarTarget,
  SolarCheckCircle,
  SolarBook,
  SolarAtom,
  SolarStars,
  SolarBookBookmark,
} from '../common/AppIcons';
import {
  buildPillarQuests,
  claimQuestReward,
  syncQuestProgressFromCloud,
  persistQuestProgressToCloud,
  type LearningQuest,
} from '../../services/questService';
import type { PillarMasteryScore } from '../../types/database';

interface TopicQuestPipelineProps {
  pillarNumber: number;
  pillarName: string;
  pillarScore?: PillarMasteryScore;
  misconceptionDiagnosis?: string | null;
  userId?: string;
}

export const TopicQuestPipeline: React.FC<TopicQuestPipelineProps> = ({
  pillarNumber,
  pillarName,
  pillarScore,
  misconceptionDiagnosis,
  userId,
}) => {
  const [quests, setQuests] = useState<LearningQuest[]>(() =>
    buildPillarQuests(pillarNumber, userId, pillarScore)
  );
  const [isClaiming, setIsClaiming] = useState<string | null>(null);

  const refreshQuests = async () => {
    const cloudData = await syncQuestProgressFromCloud(userId);
    const built = buildPillarQuests(pillarNumber, userId, pillarScore, cloudData);
    setQuests(built);

    // Persistensi otomatis progres ke Supabase per akun siswa
    if (userId && userId !== 'default-student') {
      persistQuestProgressToCloud(userId, built);
    }
  };

  useEffect(() => {
    refreshQuests();
  }, [pillarNumber, userId, pillarScore?.score]);

  // Listener event klaim quest atau perubahan baca
  useEffect(() => {
    const handleUpdate = () => {
      refreshQuests();
    };

    window.addEventListener('osn_quest_claimed', handleUpdate);
    window.addEventListener('osn_active_reading_changed', handleUpdate);

    return () => {
      window.removeEventListener('osn_quest_claimed', handleUpdate);
      window.removeEventListener('osn_active_reading_changed', handleUpdate);
    };
  }, [pillarNumber, userId, pillarScore]);

  const handleClaim = async (quest: LearningQuest) => {
    if (isClaiming || quest.isClaimed) return;
    setIsClaiming(quest.id);
    try {
      await claimQuestReward(quest, userId);
      await refreshQuests();
    } catch (err) {
      console.warn('Gagal mengklaim reward quest:', err);
    } finally {
      setIsClaiming(null);
    }
  };

  const completedCount = quests.filter((q) => q.isClaimed).length;
  const progressPercent = Math.round((completedCount / quests.length) * 100);

  return (
    <div className="relative overflow-hidden rounded-3xl bg-[#FFFFF0] border border-[#B0C4DE] p-6 shadow-xs space-y-5">
      {/* Header: Diagnosa & Progres Rantai Misi */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#D3D3D3]/60 pb-4">
        <div className="space-y-1.5 max-w-2xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#B0C4DE]/30 text-[#2D3748] flex items-center gap-1 border border-[#B0C4DE]/60">
              <SolarTarget className="w-3 h-3 text-[#708090]" />
              Misi Belajar Berjenjang
            </span>
            <span className="text-xs font-bold text-[#708090]">
              Pilar #{pillarNumber}: {pillarName}
            </span>
            <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-full bg-[#FFF2CC] text-[#806000] border border-[#FFE599]">
              Penguasaan: {Math.round(pillarScore?.score || 0)}%
            </span>
          </div>

          <h3 className="text-base font-bold text-[#2D3748]">
            Rantai Misi: Fondasi SMA ➔ Teori Olimpiade ➔ Bank Soal
          </h3>

          <p className="text-xs text-[#708090] leading-relaxed">
            {misconceptionDiagnosis ? (
              <span>
                <strong className="text-[#806000]">Temuan AI:</strong> {misconceptionDiagnosis}. Selesaikan Misi 1 terlebih dahulu untuk memantapkan konsep prasyarat sebelum menguji soal tingkat lanjut.
              </span>
            ) : (
              'Ikuti rangkaian misi terstruktur: tuntaskan materi dasar kurikulum SMA, bedah teori kimia olimpiade, lalu validasi penguasaan Anda di Bank Soal.'
            )}
          </p>
        </div>

        {/* Status Rantai Misi (Kanan) */}
        <div className="flex flex-col items-start md:items-end gap-1 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#708090]">Progres Misi Topik:</span>
            <span className="text-xs font-mono font-bold text-[#2D3748] bg-[#B0C4DE]/30 px-2 py-0.5 rounded-full border border-[#B0C4DE]/60">
              {completedCount} / {quests.length} Tuntas
            </span>
          </div>
          <div className="w-36 h-2 rounded-full bg-[#D3D3D3]/50 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#B0C4DE] to-[#708090] transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-[10px] font-semibold text-[#708090]">
            Target Penguasaan: <strong className="text-[#2E6930]">≥ 75% Mastered</strong>
          </span>
        </div>
      </div>

      {/* 3 Kartu Misi Berjejer */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {quests.map((quest) => {
          const isStep1 = quest.stepNumber === 1;
          const isStep2 = quest.stepNumber === 2;
          const isStep3 = quest.stepNumber === 3;

          return (
            <div
              key={quest.id}
              className={`relative rounded-2xl p-4 flex flex-col justify-between space-y-3 transition-all ${
                quest.isClaimed
                  ? 'bg-[#E2F0D9]/50 border border-[#C5E0B4]'
                  : quest.status === 'ready_to_claim'
                  ? 'bg-[#FFF9E6] border-2 border-[#FFE599] shadow-xs'
                  : isStep1
                  ? 'bg-[#F0F8FF] border border-[#B0C4DE] hover:border-[#708090]'
                  : 'bg-[#FFFFF0] border border-[#B0C4DE] hover:border-[#708090]'
              }`}
            >
              <div className="space-y-2">
                {/* Header Kartu: Step & Reward */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center font-mono shadow-2xs ${
                        quest.isClaimed
                          ? 'bg-[#2E6930] text-[#FFFFF0]'
                          : 'bg-[#708090] text-[#FFFFF0]'
                      }`}
                    >
                      {quest.isClaimed ? <SolarCheckCircle className="w-4 h-4" /> : quest.stepNumber}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#4A5867] bg-[#B0C4DE]/30 px-2 py-0.5 rounded-md border border-[#B0C4DE]/60">
                      {quest.badgeLabel}
                    </span>
                  </div>

                  {/* XP Reward Pill */}
                  <div className="flex items-center gap-1 text-[11px] font-mono font-bold text-[#806000] bg-[#FFF2CC] px-2 py-0.5 rounded-full border border-[#FFE599]">
                    <Gift className="w-3 h-3 text-[#B8860B]" />
                    <span>+{quest.xpReward} XP</span>
                  </div>
                </div>

                {/* Info Misi */}
                <div>
                  <span className="text-[11px] font-semibold text-[#708090] flex items-center gap-1">
                    {isStep1 && <SolarBook className="w-3.5 h-3.5 text-[#4A5867]" />}
                    {isStep2 && <SolarAtom className="w-3.5 h-3.5 text-[#708090]" />}
                    {isStep3 && <SolarStars className="w-3.5 h-3.5 text-[#D4A359]" />}
                    <span>{quest.title}</span>
                  </span>

                  <h4 className="text-sm font-bold text-[#2D3748] mt-0.5 line-clamp-2">
                    {quest.targetTitle}
                  </h4>

                  <p className="text-[11px] text-[#708090] mt-1 line-clamp-2 leading-relaxed">
                    {quest.description}
                  </p>
                </div>

                {/* Status Bar Progres Pembacaan / Skor */}
                {!quest.isClaimed && (
                  <div className="space-y-1 pt-1">
                    <div className="flex items-center justify-between text-[10px] text-[#708090]">
                      <span className="flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5" />
                        {quest.status === 'ready_to_claim'
                          ? 'Syarat Misi Terpenuhi'
                          : quest.status === 'in_progress'
                          ? `Progres: ${quest.progressPercent}%`
                          : 'Belum Dimulai'}
                      </span>
                      <span className="font-mono font-semibold">{quest.progressPercent}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-[#D3D3D3]/60 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          quest.status === 'ready_to_claim'
                            ? 'bg-[#D4A359]'
                            : quest.progressPercent > 0
                            ? 'bg-[#708090]'
                            : 'bg-transparent'
                        }`}
                        style={{ width: `${quest.progressPercent}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Action Button: Berubah Menjadi Tombol Klaim jika Selesai */}
              <div>
                {quest.status === 'ready_to_claim' ? (
                  <button
                    onClick={() => handleClaim(quest)}
                    disabled={isClaiming === quest.id}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#D4A359] hover:bg-[#B8860B] text-white text-xs font-bold rounded-xl shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer disabled:opacity-50"
                  >
                    <Gift className="w-3.5 h-3.5 text-white" />
                    <span>{isClaiming === quest.id ? 'Mengklaim...' : `Klaim +${quest.xpReward} XP!`}</span>
                  </button>
                ) : quest.isClaimed ? (
                  <Link
                    to={quest.actionUrl}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#E2F0D9] hover:bg-[#D4E8C8] text-[#2E6930] text-xs font-bold rounded-xl border border-[#C5E0B4] shadow-2xs transition-all cursor-pointer"
                  >
                    <SolarCheckCircle className="w-3.5 h-3.5 text-[#2E6930]" />
                    <span>Misi Selesai (Buka Kembali)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <Link
                    to={quest.actionUrl}
                    className={`w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold rounded-xl shadow-2xs hover:shadow-xs transition-all cursor-pointer ${
                      isStep3
                        ? 'bg-[#708090] hover:bg-[#5D6D7D] text-[#FFFFF0] active:scale-95'
                        : 'bg-[#FFFFF0] hover:bg-[#F0F8FF] text-[#4A5867] border border-[#B0C4DE]'
                    }`}
                  >
                    <SolarBookBookmark className="w-3.5 h-3.5 text-[#708090]" />
                    <span>{quest.actionLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Navigation: Link ke Quest Board Lengkap */}
      <div className="pt-3 border-t border-[#D3D3D3]/60 flex flex-wrap items-center justify-between text-xs text-[#708090]">
        <span>
          Ingin menuntaskan pilar lain? Seluruh 30 misi pilar tersedia di Papan Misi.
        </span>
        <Link
          to="/student/progress?tab=quests"
          className="font-bold text-[#708090] hover:text-[#2D3748] flex items-center gap-1 hover:underline transition-all"
        >
          <span>Buka Quest Board Lengkap (10 Pilar)</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
