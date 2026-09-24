import React from 'react';
import {
  Trophy,
  Target,
  Sparkles,
  TrendingUp,
  ArrowRight,
  Flame,
  Award,
  CheckCircle2,
  BrainCircuit,
  Zap,
} from 'lucide-react';
import type { PracticeOverallStats } from '../../utils/practiceDataUtils';

interface PracticeStatsHeaderProps {
  stats: PracticeOverallStats;
  activeDatabase: 'osn' | 'sma';
  onLaunchRecommendedDrill?: (questionIds: number[], topicTitle: string) => void;
}

export const PracticeStatsHeader: React.FC<PracticeStatsHeaderProps> = ({
  stats,
  activeDatabase,
  onLaunchRecommendedDrill,
}) => {
  const isSma = activeDatabase === 'sma';

  return (
    <div className="bg-linear-to-br from-slate-900 via-slate-800 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-700/60 relative overflow-hidden space-y-6">
      {/* Background ambient lighting effects */}
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-1/3 -bottom-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Banner Text */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1.5 max-w-2xl">
          <div className="flex items-center gap-2">
            <span
              className={`px-3 py-0.5 text-[11px] font-bold rounded-full uppercase tracking-wider font-mono border ${
                isSma
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                  : 'bg-sky-500/20 text-sky-300 border-sky-500/30'
              }`}
            >
              {isSma ? '📚 Kurikulum SMA Merdeka' : '🏆 Silabus Olimpiade Sains (OSN)'}
            </span>
            <span className="flex items-center gap-1 text-amber-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sistem Latihan Adaptif Siswa</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display text-white">
            Bank Soal & Pusat Penguasaan Topik
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Taklukkan butir soal berbobot bertaraf nasional & kurikulum sekolah. Pilih topik favorit, uji pemahaman
            dengan latihan kilat bertenaga AI, atau telaah butir soal spesifik sesuai target belajarmu.
          </p>
        </div>

        {/* Global Summary Badge */}
        <div className="hidden md:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
          <div className="w-10 h-10 rounded-xl bg-amber-400/20 flex items-center justify-center text-amber-300 border border-amber-400/30">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] text-slate-400 font-mono">Pilar Terkuasai</div>
            <div className="text-lg font-extrabold text-white font-mono">
              {stats.masteredTopicsCount} <span className="text-xs text-slate-400 font-normal">/ {stats.totalTopicsCount} Topik</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Gamification Metrik Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Total Soal Diselesaikan */}
        <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-4 border border-slate-700/80 shadow-xs flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Total Soal Dikerjakan</span>
            <div className="p-1.5 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <Target className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="text-2xl font-black text-white font-mono">
              {stats.completedQuestions}{' '}
              <span className="text-xs font-normal text-slate-400">/ {stats.totalQuestions} Butir</span>
            </div>
            <div className="mt-2 space-y-1">
              <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-linear-to-r from-sky-400 to-emerald-400 rounded-full transition-all duration-500"
                  style={{ width: `${stats.completionPercent}%` }}
                />
              </div>
              <div className="flex justify-between text-[11px] font-mono text-slate-400">
                <span>{stats.completionPercent}% Terselesaikan</span>
                <span>{stats.totalQuestions - stats.completedQuestions} Tersisa</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Penguasaan Silabus */}
        <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-4 border border-slate-700/80 shadow-xs flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Status Penguasaan</span>
            <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Trophy className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="text-2xl font-black text-amber-300 font-mono">
              {stats.masteredTopicsCount}{' '}
              <span className="text-xs font-normal text-slate-400">/ {stats.totalTopicsCount} Topik</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              {stats.masteredTopicsCount === 0
                ? 'Selesaikan soal hingga skor rata-rata ≥75% untuk menaklukkan pilar!'
                : `${stats.masteredTopicsCount} topik telah meraih predikat Terkuasai (Mastered).`}
            </p>
          </div>
        </div>

        {/* Card 3: Akurasi Rata-rata */}
        <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-4 border border-slate-700/80 shadow-xs flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Tingkat Akurasi Skor</span>
            <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="text-2xl font-black text-emerald-400 font-mono">
              {stats.avgAccuracy > 0 ? `${stats.avgAccuracy}%` : 'Belum Ada Data'}
            </div>
            <p className="text-[11px] text-slate-400 mt-2 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Dihitung dari seluruh latihan yang telah dinilai AI.</span>
            </p>
          </div>
        </div>

        {/* Card 4: Rekomendasi Cerdas AI Hari Ini */}
        <div className="bg-linear-to-br from-indigo-900/60 to-purple-900/50 backdrop-blur-md rounded-2xl p-4 border border-indigo-500/30 shadow-xs flex flex-col justify-between space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-indigo-300 flex items-center gap-1.5">
              <BrainCircuit className="w-3.5 h-3.5 text-indigo-400" />
              <span>Rekomendasi AI Hari Ini</span>
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          {stats.recommendedTopic ? (
            <div className="space-y-2">
              <div>
                <h4 className="text-xs font-bold text-white line-clamp-1" title={stats.recommendedTopic.title}>
                  {stats.recommendedTopic.title}
                </h4>
                <p className="text-[10px] text-indigo-200 line-clamp-2 leading-relaxed mt-0.5">
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
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-indigo-500 hover:bg-indigo-400 text-white rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer group"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-300" />
                  <span>Latihan Kilat</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              )}
            </div>
          ) : (
            <p className="text-[11px] text-slate-400">Pilih topik mana saja di bawah untuk mulai berlatih.</p>
          )}
        </div>
      </div>
    </div>
  );
};
