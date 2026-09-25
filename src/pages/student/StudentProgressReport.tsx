import React, { useState, useEffect, useMemo } from 'react';
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
import { isSupabaseConfigured } from '../../lib/supabaseClient';
import type { SavedSubmissionRecord, PillarMasteryScore, RemedialRecommendation } from '../../types/database';
import { ChemistryWatermarkBackground } from '../../components/common/ChemistryWatermarkBackground';
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
  const isCloudActive = isSupabaseConfigured();

  const [submissions, setSubmissions] = useState<SavedSubmissionRecord[]>([]);
  const [pillarScores, setPillarScores] = useState<PillarMasteryScore[]>([]);
  const [recommendations, setRecommendations] = useState<RemedialRecommendation[]>([]);
  const [activeTab, setActiveTab] = useState<'radar' | 'history' | 'remedial'>('radar');

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
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-600 to-indigo-600 text-white flex items-center justify-center font-bold text-2xl shadow-sm">
            🎓
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                {profile?.full_name || 'Peserta OSN Kimia'}
              </h1>
              <span className="px-2.5 py-0.5 bg-sky-100 text-sky-800 text-[11px] font-bold rounded-full uppercase">
                {profile?.target_olympiad || 'OSN Kimia'}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1 flex flex-wrap items-center gap-2">
              <span>{profile?.school_name || 'Portofolio Akademis Persiapan OSN Kimia SMA & IChO'}</span>
              <span>•</span>
              <span className="inline-flex items-center gap-1 font-mono text-[11px] text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                <Cloud className="w-3 h-3" />
                {isCloudActive ? 'Supabase Cloud Aktif' : 'Cache Lokal Siap'}
              </span>
            </p>
          </div>
        </div>

        {/* Academic Stats Pills */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center min-w-[95px]">
            <div className="text-[11px] text-slate-400 font-medium">Total Sesi</div>
            <div className="text-base font-bold text-slate-900 font-mono">{submissions.length} Lembar</div>
          </div>

          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center min-w-[95px]">
            <div className="text-[11px] text-slate-400 font-medium">Rata-rata Skor</div>
            <div className="text-base font-bold text-sky-700 font-mono">{averageScore}%</div>
          </div>

          <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl text-center min-w-[95px]">
            <div className="text-[11px] text-emerald-700 font-medium">Topik Dikuasai</div>
            <div className="text-base font-bold text-emerald-800 font-mono">
              {masteredCount} / 10
            </div>
          </div>

          <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl text-center min-w-[95px]">
            <div className="text-[11px] text-amber-700 font-medium">Skor 100%</div>
            <div className="text-base font-bold text-amber-800 font-mono">
              {perfectCount} Kali
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation for Detailed Sections */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-1">
        <button
          onClick={() => setActiveTab('radar')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'radar'
              ? 'bg-sky-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <BarChart3 className="w-4 h-4" />
          <span>Radar 10 Pilar & Diagnosis</span>
        </button>

        <button
          onClick={() => setActiveTab('remedial')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'remedial'
              ? 'bg-sky-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Rekomendasi Remedial AI</span>
          {recommendations.length > 0 && (
            <span className="px-1.5 py-0.2 bg-amber-100 text-amber-800 text-[10px] rounded-full font-mono">
              {recommendations.length}
            </span>
          )}
        </button>

        <button
          onClick={() => setActiveTab('history')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'history'
              ? 'bg-sky-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <History className="w-4 h-4" />
          <span>Riwayat Pengerjaan</span>
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'radar' && (
        <div className="space-y-6">
          <PillarRadarChart data={pillarScores} />
        </div>
      )}

      {activeTab === 'remedial' && (
        <div className="space-y-6">
          {recommendations.length > 0 ? (
            <RemedialRecommendationsCard recommendations={recommendations} />
          ) : (
            <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
              <h3 className="text-base font-bold text-slate-900">Belum Ada Rekomendasi Remedial</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Kerjakan lebih banyak lembar kerja dan simulasi soal. Sistem AI akan menganalisis pola kekeliruan konsep Anda dan merekomendasikan materi penguatan di sini.
              </p>
            </div>
          )}
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
