import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import {
  getSubmissionHistory,
  syncSubmissionsFromCloud,
  calculatePillarMastery,
} from '../../services/submissionService';
import { generateRemedialRecommendations } from '../../services/remedialService';
import { PillarRadarChart } from '../../components/profile/PillarRadarChart';
import { SubmissionHistoryList } from '../../components/profile/SubmissionHistoryList';
import { RemedialRecommendationsCard } from '../../components/profile/RemedialRecommendationsCard';
import { QuestBoard } from '../../components/gamification/QuestBoard';
import { AchievementBoard } from '../../components/gamification/AchievementBoard';
import { isSupabaseConfigured } from '../../lib/supabaseClient';
import type { SavedSubmissionRecord, PillarMasteryScore, RemedialRecommendation } from '../../types/database';
import { ChemistryWatermarkBackground } from '../../components/common/ChemistryWatermarkBackground';
import { UserTitleBadge } from '../../components/gamification/UserTitleBadge';
import { ChemistFigureBadgeSvg } from '../../components/gamification/ChemistFigureBadgeSvg';
import { getLevelFromXp } from '../../utils/gamificationConstants';
import {
  Shield,
  CheckCircle2,
  AlertTriangle,
  Cloud,
  Layers,
  History,
  BookOpen,
  Target,
  Clock,
  Zap,
  Award,
  Sparkles,
  BarChart3
} from 'lucide-react';

export const StudentProgressReport: React.FC = () => {
  const { user, profile } = useAuth();
  const [searchParams] = useSearchParams();
  const isCloudActive = isSupabaseConfigured();

  const [submissions, setSubmissions] = useState<SavedSubmissionRecord[]>([]);
  const [pillarScores, setPillarScores] = useState<PillarMasteryScore[]>([]);
  const [recommendations, setRecommendations] = useState<RemedialRecommendation[]>([]);

  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState<'quests' | 'achievements' | 'radar' | 'history'>(
    tabParam === 'achievements' ? 'achievements' : tabParam === 'radar' ? 'radar' : tabParam === 'history' ? 'history' : 'quests'
  );

  useEffect(() => {
    if (tabParam === 'achievements' || tabParam === 'radar' || tabParam === 'history') {
      setActiveTab(tabParam);
    } else {
      setActiveTab('quests');
    }
  }, [tabParam]);

  useEffect(() => {
    // 1. Muat data riwayat pengerjaan lokal secara instan
    const history = getSubmissionHistory(user?.id);
    setSubmissions(history);
    setPillarScores(calculatePillarMastery(history));
    setRecommendations(generateRemedialRecommendations(history));

    // 2. Sinkronkan dari Supabase Cloud jika terhubung
    syncSubmissionsFromCloud(user?.id).then((cloudHistory) => {
      if (cloudHistory && cloudHistory.length > 0) {
        setSubmissions(cloudHistory);
        setPillarScores(calculatePillarMastery(cloudHistory));
        setRecommendations(generateRemedialRecommendations(cloudHistory));
      }
    });
  }, [user]);

  // Metrik Akademis Siswa
  const averageScore = useMemo(() => {
    if (submissions.length === 0) return 0;
    const total = submissions.reduce((acc, curr) => acc + curr.scorePercentage, 0);
    return Math.round(total / submissions.length);
  }, [submissions]);

  const masteredCount = useMemo(() => {
    return pillarScores.filter((p) => p.masteryLevel === 'mastered').length;
  }, [pillarScores]);

  const totalXP = useMemo(() => {
    return submissions.reduce((acc, curr) => acc + (curr.xpAwarded || 0), 0);
  }, [submissions]);

  const perfectCount = useMemo(() => {
    return submissions.filter((s) => s.scorePercentage === 100).length;
  }, [submissions]);

  return (
    <div
      className="min-h-screen pb-16 transition-colors duration-200 relative overflow-hidden"
      style={{ backgroundColor: 'var(--theme-canvas)', color: 'var(--theme-text)' }}
    >
      <ChemistryWatermarkBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-300">
      {/* Profile Overview & Performance Banner */}
      <div className="bg-[#FFFFF0] border border-[#B0C4DE] rounded-3xl p-6 sm:p-8 shadow-xs flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <ChemistFigureBadgeSvg
            xp={profile?.xp || totalXP}
            size={68}
            className="shrink-0 drop-shadow-md"
          />
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-bold text-[#2D3748] font-display">
                {profile?.full_name || 'Peserta OSN Kimia'}
              </h1>
              <UserTitleBadge xp={profile?.xp || totalXP} size="xs" />
              <span className="px-2.5 py-0.5 bg-[#B0C4DE]/30 text-[#4A5867] border border-[#B0C4DE]/60 text-[11px] font-bold rounded-full uppercase">
                {profile?.target_olympiad || 'OSN Kimia'}
              </span>
            </div>
            <p className="text-xs text-[#708090] mt-1">
              {profile?.school_name || 'Portofolio Akademis Persiapan OSN Kimia SMA & IChO'}
            </p>
          </div>
        </div>

        {/* Academic Stats Pills */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="p-3 bg-[#F0F8FF] border border-[#B0C4DE] rounded-xl text-center min-w-[95px]">
            <div className="text-[11px] text-[#708090] font-medium">Total Sesi</div>
            <div className="text-base font-bold text-[#2D3748] font-mono">{submissions.length} Lembar</div>
          </div>

          <div className="p-3 bg-[#F0F8FF] border border-[#B0C4DE] rounded-xl text-center min-w-[95px]">
            <div className="text-[11px] text-[#708090] font-medium">Rata-rata Skor</div>
            <div className="text-base font-bold text-[#2D3748] font-mono">{averageScore}%</div>
          </div>

          <div className="p-3 bg-[#E2F0D9]/70 border border-[#C5E0B4] rounded-xl text-center min-w-[95px]">
            <div className="text-[11px] text-[#2E6930] font-medium">Topik Dikuasai</div>
            <div className="text-base font-bold text-[#2E6930] font-mono">
              {masteredCount} / 10
            </div>
          </div>

          <div className="p-3 bg-[#FFF9E6] border border-[#FFE599] rounded-xl text-center min-w-[95px]">
            <div className="text-[11px] text-[#806000] font-medium">Skor 100%</div>
            <div className="text-base font-bold text-[#806000] font-mono">
              {perfectCount} Kali
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation for Detailed Sections */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[#D3D3D3]/60 pb-2">
        <button
          onClick={() => setActiveTab('quests')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'quests'
              ? 'bg-[#708090] text-[#FFFFF0] shadow-xs'
              : 'text-[#708090] hover:text-[#2D3748] hover:bg-[#F0F8FF]'
          }`}
        >
          <Target className="w-4 h-4 text-[#D4A359]" />
          <span>🎯 Quest Board (Papan Misi)</span>
        </button>

        <button
          onClick={() => setActiveTab('achievements')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'achievements'
              ? 'bg-[#708090] text-[#FFFFF0] shadow-xs'
              : 'text-[#708090] hover:text-[#2D3748] hover:bg-[#F0F8FF]'
          }`}
        >
          <Award className="w-4 h-4 text-[#D4A359]" />
          <span>🏆 Lencana Pencapaian</span>
        </button>

        <button
          onClick={() => setActiveTab('radar')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'radar'
              ? 'bg-[#708090] text-[#FFFFF0] shadow-xs'
              : 'text-[#708090] hover:text-[#2D3748] hover:bg-[#F0F8FF]'
          }`}
        >
          <BarChart3 className="w-4 h-4" />
          <span>Radar 10 Pilar & Diagnosis</span>
        </button>

        <button
          onClick={() => setActiveTab('history')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'history'
              ? 'bg-[#708090] text-[#FFFFF0] shadow-xs'
              : 'text-[#708090] hover:text-[#2D3748] hover:bg-[#F0F8FF]'
          }`}
        >
          <History className="w-4 h-4" />
          <span>Riwayat Pengerjaan</span>
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'achievements' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <AchievementBoard userId={user?.id} />
        </div>
      )}

      {activeTab === 'quests' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <QuestBoard userId={user?.id} pillarScores={pillarScores} submissions={submissions} />
        </div>
      )}

      {activeTab === 'radar' && (
        <div className="space-y-6">
          <PillarRadarChart data={pillarScores} />
        </div>
      )}

      {activeTab === 'history' && (
        <div className="space-y-6">
          <SubmissionHistoryList submissions={submissions} />
        </div>
      )}
      </div>
    </div>
  );
};
