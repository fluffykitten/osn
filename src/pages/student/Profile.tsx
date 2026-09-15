import React, { useState, useEffect, useMemo } from 'react';
import {
  getSubmissionHistory,
  calculatePillarMastery,
} from '../../services/submissionService';
import { generateRemedialRecommendations } from '../../services/remedialService';
import { PillarRadarChart } from '../../components/profile/PillarRadarChart';
import { SubmissionHistoryList } from '../../components/profile/SubmissionHistoryList';
import { RemedialRecommendationsCard } from '../../components/profile/RemedialRecommendationsCard';
import { isSupabaseConfigured } from '../../lib/supabaseClient';
import type { SavedSubmissionRecord, PillarMasteryScore, RemedialRecommendation } from '../../types/database';
import {
  Shield,
  CheckCircle2,
  AlertTriangle,
  Cloud,
  Layers,
  History,
  BookOpen,
  Target,
} from 'lucide-react';

export const Profile: React.FC = () => {
  const isCloudActive = isSupabaseConfigured();

  const [submissions, setSubmissions] = useState<SavedSubmissionRecord[]>([]);
  const [pillarScores, setPillarScores] = useState<PillarMasteryScore[]>([]);
  const [recommendations, setRecommendations] = useState<RemedialRecommendation[]>([]);

  useEffect(() => {
    // Muat data riwayat pengerjaan aktual dari layanan persistensi
    const history = getSubmissionHistory();
    setSubmissions(history);
    setPillarScores(calculatePillarMastery(history));
    setRecommendations(generateRemedialRecommendations(history));
  }, []);

  // Metrik Akademis Siswa
  const averageScore = useMemo(() => {
    if (submissions.length === 0) return 0;
    const total = submissions.reduce((acc, curr) => acc + curr.scorePercentage, 0);
    return Math.round(total / submissions.length);
  }, [submissions]);

  const masteredCount = useMemo(() => {
    return pillarScores.filter((p) => p.masteryLevel === 'mastered').length;
  }, [pillarScores]);

  const needsRemedialCount = useMemo(() => {
    return pillarScores.filter((p) => p.masteryLevel === 'needs_remedial').length;
  }, [pillarScores]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Profile Overview Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-600 to-blue-500 text-white flex items-center justify-center font-bold text-2xl shadow-sm">
            🎓
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-slate-900 font-display">Ahmad Fauzan</h1>
              <span className="px-2 py-0.5 bg-sky-100 text-sky-800 text-[10px] font-bold rounded uppercase">
                Peserta OSN Kimia
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-2">
              <span>Portofolio Akademis Persiapan OSN Kimia SMA & IChO</span>
              <span>•</span>
              <span className="inline-flex items-center gap-1 font-mono text-[11px] text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                <Cloud className="w-3 h-3" />
                {isCloudActive ? 'Supabase Sync Aktif' : 'Cache Lokal Siap'}
              </span>
            </p>
          </div>
        </div>

        {/* Academic Stats Pills */}
        <div className="flex items-center gap-3">
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center min-w-[100px]">
            <div className="text-xs text-slate-400 font-medium">Total Sesi</div>
            <div className="text-base font-bold text-slate-900 font-mono">{submissions.length} Lembar</div>
          </div>
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center min-w-[100px]">
            <div className="text-xs text-slate-400 font-medium">Rata-rata Skor</div>
            <div className="text-base font-bold text-sky-700 font-mono">{averageScore}%</div>
          </div>
          <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl text-center min-w-[100px]">
            <div className="text-xs text-emerald-700 font-medium">Topik Dikuasai</div>
            <div className="text-base font-bold text-emerald-800 font-mono">
              {masteredCount} / 10
            </div>
          </div>
        </div>
      </div>

      {/* Kartu Rekomendasi Remedial Adaptif Berdasarkan Miskonsepsi */}
      {recommendations.length > 0 && (
        <RemedialRecommendationsCard recommendations={recommendations} />
      )}

      {/* Grid: 10 Topics Radar Chart & Academic Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Radar Chart Card (7 cols) */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 font-display">
                Radar Penguasaan 10 Topik Silabus OSN
              </h3>
              <p className="text-xs text-slate-500">
                Kalkulasi real-time persentase penguasaan konsep kimia dari seluruh lembar kerja yang dinilai AI.
              </p>
            </div>
            <span className="px-2.5 py-1 bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold font-mono rounded-lg">
              10 Topik Silabus
            </span>
          </div>

          <div className="py-2">
            <PillarRadarChart data={pillarScores} />
          </div>

          {/* Grid Ringkasan Nilai Topik */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2 border-t border-slate-100">
            {pillarScores.map((item) => (
              <div
                key={`score-pill-${item.pillarNumber}`}
                className={`p-2 rounded-xl border text-center transition-all ${
                  item.masteryLevel === 'mastered'
                    ? 'bg-emerald-50/50 border-emerald-200'
                    : item.masteryLevel === 'needs_remedial'
                    ? 'bg-rose-50/50 border-rose-200'
                    : item.submissionsCount > 0
                    ? 'bg-sky-50/50 border-sky-200'
                    : 'bg-slate-50/60 border-slate-200/80 opacity-60'
                }`}
              >
                <div className="text-[10px] font-bold text-slate-600 truncate">{item.shortName}</div>
                <div
                  className={`text-xs font-bold font-mono mt-0.5 ${
                    item.masteryLevel === 'mastered'
                      ? 'text-emerald-700'
                      : item.masteryLevel === 'needs_remedial'
                      ? 'text-rose-700'
                      : 'text-slate-800'
                  }`}
                >
                  {item.score}%
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Status Card (5 cols) */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
          <div>
            <h3 className="text-base font-bold text-slate-900 font-display">
              Status Kompetensi Sains Siswa
            </h3>
            <p className="text-xs text-slate-500">
              Klasifikasi kesiapan penguasaan silabus olimpiade berdasarkan batas kriteria baku.
            </p>
          </div>

          <div className="space-y-3">
            <div className="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Kategori Menguasai (≥ 80%)</span>
                </span>
                <span className="text-xs font-bold font-mono text-emerald-800">
                  {masteredCount} Topik
                </span>
              </div>
              <p className="text-[11px] text-emerald-800 leading-relaxed">
                Penalaran rumus, penurunan aljabar stoikiometri, dan penerapan hukum kimia sudah presisi.
              </p>
            </div>

            <div className="p-4 bg-sky-50/60 border border-sky-200 rounded-xl space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-sky-900 flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-sky-600" />
                  <span>Kategori Berkembang (50% - 79%)</span>
                </span>
                <span className="text-xs font-bold font-mono text-sky-800">
                  {pillarScores.filter((p) => p.masteryLevel === 'developing').length} Topik
                </span>
              </div>
              <p className="text-[11px] text-sky-800 leading-relaxed">
                Konsep dasar sudah dipahami, namun masih terdapat selip ketelitian angka atau kelengkapan fasa reaksi.
              </p>
            </div>

            <div className="p-4 bg-rose-50/60 border border-rose-200 rounded-xl space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-rose-900 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  <span>Perlu Penguatan & Remedial (&lt; 50%)</span>
                </span>
                <span className="text-xs font-bold font-mono text-rose-800">
                  {needsRemedialCount} Topik
                </span>
              </div>
              <p className="text-[11px] text-rose-800 leading-relaxed">
                Perlu membaca ulang materi teoritis di Database Materi dan mengulang latihan dengan panduan perancah (scaffolding).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bagian Riwayat Pengerjaan Siswa */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <History className="w-5 h-5 text-slate-700" />
            <h3 className="text-lg font-bold text-slate-900 font-display">
              Riwayat Pengerjaan & Evaluasi Juri AI
            </h3>
          </div>
          <span className="text-xs text-slate-500 font-mono">
            Total {submissions.length} Sesi Lembar Kerja
          </span>
        </div>

        <SubmissionHistoryList submissions={submissions} />
      </div>
    </div>
  );
};
