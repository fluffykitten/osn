import React from 'react';
import {
  Trophy,
  Target,
  TrendingUp,
  ArrowRight,
  Award,
  BrainCircuit,
  Zap,
  Sparkles,
} from 'lucide-react';
import type { PracticeOverallStats } from '../../utils/practiceDataUtils';

interface PracticeStatsHeaderProps {
  stats: PracticeOverallStats;
  activeDatabase?: 'osn' | 'sma';
  onLaunchRecommendedDrill?: (questionIds: number[], topicTitle: string) => void;
}

export const PracticeStatsHeader: React.FC<PracticeStatsHeaderProps> = ({
  stats,
  onLaunchRecommendedDrill,
}) => {
  return (
    <div className="theme-hero-banner bg-gradient-to-r from-[#596A7A] via-[#708090] to-[#5C6D7D] text-[#FFFFF0] rounded-3xl p-6 sm:p-8 md:p-10 shadow-md border border-[#B0C4DE]/30 relative overflow-hidden space-y-6">
      {/* Background ambient lighting effects */}
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#FFFFF0]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Banner Text */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFFF0]/15 backdrop-blur-md rounded-full text-xs font-semibold tracking-wide uppercase text-[#FFFFF0] border border-[#B0C4DE]/30">
            <Sparkles size={14} className="text-[#B0C4DE]" />
            <span>BANK SOAL & PUSAT PENGUASAAN TOPIK</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-black tracking-tight font-display text-[#FFFFF0]">
            Bank Soal & Pusat Penguasaan Topik
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-[#F0F8FF]/90 leading-relaxed">
            Taklukkan butir soal berbobot bertaraf nasional & kurikulum sekolah. Pilih topik favorit, uji pemahaman
            dengan latihan kilat bertenaga AI, atau telaah butir soal spesifik sesuai target belajarmu.
          </p>
        </div>

        {/* Global Summary Badge */}
        <div className="hidden md:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#FFFFF0]/15 backdrop-blur-md border border-[#B0C4DE]/30 shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-[#FFFFF0]/20 flex items-center justify-center text-[#FFFFF0] border border-[#B0C4DE]/40 shadow-2xs">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] text-[#F0F8FF]/80 font-mono font-medium">Konsep Terkuasai</div>
            <div className="text-lg font-extrabold text-[#FFFFF0] font-mono">
              {stats.masteredTopicsCount} <span className="text-xs text-[#B0C4DE] font-normal">/ {stats.totalTopicsCount} Topik</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Gamification Metrik Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Total Soal Diselesaikan */}
        <div className="bg-[#FFFFF0] rounded-2xl p-4 border border-[#D3D3D3] shadow-2xs flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#708090]">Total Soal Dikerjakan</span>
            <div className="p-1.5 rounded-lg bg-[#B0C4DE]/25 text-[#708090] border border-[#B0C4DE]/50">
              <Target className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="text-2xl font-black text-[#2D3748] font-mono">
              {stats.completedQuestions}{' '}
              <span className="text-xs font-normal text-[#708090]">/ {stats.totalQuestions} Butir</span>
            </div>
            <div className="mt-2 space-y-1.5">
              <div className="w-full bg-[#D3D3D3]/40 h-2 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#708090] to-[#556677] rounded-full transition-all duration-500"
                  style={{ width: `${stats.completionPercent}%` }}
                />
              </div>
              <div className="flex justify-between text-[11px] font-mono text-[#708090]">
                <span>{stats.completionPercent}% Terselesaikan</span>
                <span>{stats.totalQuestions - stats.completedQuestions} Tersisa</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Penguasaan Silabus */}
        <div className="bg-[#FFFFF0] rounded-2xl p-4 border border-[#D3D3D3] shadow-2xs flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#708090]">Status Penguasaan</span>
            <div className="p-1.5 rounded-lg bg-[#B0C4DE]/25 text-[#708090] border border-[#B0C4DE]/50">
              <Trophy className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="text-2xl font-black text-[#708090] font-mono">
              {stats.masteredTopicsCount}{' '}
              <span className="text-xs font-normal text-[#708090]">/ {stats.totalTopicsCount} Topik</span>
            </div>
            <p className="text-[11px] text-[#708090] mt-2 leading-relaxed">
              {stats.masteredTopicsCount === 0
                ? 'Selesaikan soal hingga skor rata-rata ≥75% untuk menaklukkan konsep!'
                : `${stats.masteredTopicsCount} topik telah meraih predikat Terkuasai (Mastered).`}
            </p>
          </div>
        </div>

        {/* Card 3: Akurasi Rata-rata */}
        <div className="bg-[#FFFFF0] rounded-2xl p-4 border border-[#D3D3D3] shadow-2xs flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#708090]">Tingkat Akurasi Skor</span>
            <div className="p-1.5 rounded-lg bg-[#B0C4DE]/25 text-[#708090] border border-[#B0C4DE]/50">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="py-2">
            <div className="text-2xl font-black text-[#2D3748] font-mono">
              {stats.avgAccuracy > 0 ? `${stats.avgAccuracy}%` : 'Belum Ada Data'}
            </div>
          </div>
        </div>

        {/* Card 4: Rekomendasi Latihan Hari Ini */}
        <div className="bg-[#FFFFF0] rounded-2xl p-4 border border-[#D3D3D3] shadow-2xs flex flex-col justify-between space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#2D3748] flex items-center gap-1.5">
              <BrainCircuit className="w-3.5 h-3.5 text-[#708090]" />
              <span>Rekomendasi Latihan Hari Ini</span>
            </span>
            <span className="w-2 h-2 rounded-full bg-[#708090] animate-pulse" />
          </div>

          {stats.recommendedTopic ? (
            <div className="space-y-2">
              <div>
                <h4 className="text-xs font-bold text-[#2D3748] line-clamp-1" title={stats.recommendedTopic.title}>
                  {stats.recommendedTopic.title}
                </h4>
                <p className="text-[11px] text-[#708090] line-clamp-2 leading-relaxed mt-0.5">
                  {stats.recommendedTopic.reason}
                </p>
              </div>

              {onLaunchRecommendedDrill && stats.recommendedTopic.questionIds.length > 0 && (
                <button
                  type="button"
                  onClick={() =>
                    onLaunchRecommendedDrill(
                      stats.recommendedTopic!.questionIds,
                      stats.recommendedTopic!.title
                    )
                  }
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[#708090] hover:bg-[#5C6D7D] text-[#FFFFF0] rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer group border border-[#708090]"
                >
                  <Zap className="w-3.5 h-3.5 text-[#FFFFF0]" />
                  <span>Latihan Kilat</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              )}
            </div>
          ) : (
            <p className="text-[11px] text-[#708090]">Pilih topik mana saja di bawah untuk mulai berlatih.</p>
          )}
        </div>
      </div>
    </div>
  );
};
