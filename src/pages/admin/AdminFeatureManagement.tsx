import React, { useState, useMemo } from 'react';
import {
  Sliders,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  Bot,
  Layers,
  BookOpen,
  StickyNote,
  GraduationCap,
  ShieldAlert,
  Search,
  Check,
  Info,
  Zap,
  Activity,
} from 'lucide-react';
import {
  useFeatureFlags,
  FEATURE_CATALOG,
  type FeatureFlags,
  type FeatureMetadata,
} from '../../services/featureFlagsService';
import { adminService } from '../../services/adminService';
import { useAuth } from '../../contexts/AuthContext';

export const AdminFeatureManagement: React.FC = () => {
  const { flags, toggleFlag, setFlag, resetDefaults } = useFeatureFlags();
  const { user } = useAuth();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'materi' | 'teacher'>('all');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleToggle = async (meta: FeatureMetadata) => {
    const nextVal = !flags[meta.key];
    toggleFlag(meta.key);

    // Audit Log
    try {
      await adminService.logAction({
        actor_id: user?.id || 'admin-master-uuid',
        actor_email: user?.email || 'fluffykitten.dev@gmail.com',
        action_type: 'FEATURE_FLAG_UPDATED',
        target_resource: `features/${meta.key}`,
        description: `${nextVal ? 'Mengaktifkan' : 'Menonaktifkan'} fitur "${meta.name}"`,
        details: {
          featureKey: meta.key,
          featureName: meta.name,
          newValue: nextVal,
        },
      });
    } catch {
      // ignore
    }

    showToast(`Fitur "${meta.name}" berhasil ${nextVal ? 'diaktifkan' : 'dinonaktifkan'}.`);
  };

  const handleReset = async () => {
    if (!window.confirm('Kembalikan semua konfigurasi fitur ke standar awal?')) return;
    resetDefaults();

    try {
      await adminService.logAction({
        actor_id: user?.id || 'admin-master-uuid',
        actor_email: user?.email || 'fluffykitten.dev@gmail.com',
        action_type: 'FEATURE_FLAGS_RESET',
        target_resource: 'features/all',
        description: 'Mereset seluruh konfigurasi fitur ke standar awal',
        details: { action: 'reset_to_defaults' },
      });
    } catch {
      // ignore
    }

    showToast('Seluruh fitur telah dikembalikan ke pengaturan standar sistem.');
  };

  const filteredFeatures = useMemo(() => {
    return FEATURE_CATALOG.filter((f) => {
      const matchCat = selectedCategory === 'all' || f.category === selectedCategory;
      const matchQuery =
        !searchQuery.trim() ||
        f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.impactArea.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  // Statistics
  const totalCount = FEATURE_CATALOG.length;
  const activeCount = Object.values(flags).filter(Boolean).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-2xl bg-emerald-600 text-white shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <Check className="w-5 h-5 shrink-0" />
          <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Header Banner - Slate Chalkboard Admin Theme */}
      <div className="bg-gradient-to-r from-[#4A5A6A] via-[#596A7A] to-[#425262] text-[#FFFFF0] rounded-3xl p-6 sm:p-8 md:p-10 shadow-md border border-[#B0C4DE]/30 relative overflow-hidden space-y-4">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFFF0]/15 rounded-full text-xs font-semibold uppercase tracking-wider text-[#FFFFF0] border border-[#B0C4DE]/30">
              <Sliders size={13} className="text-[#B0C4DE]" />
              <span>Tata Kelola Sistem • Feature Flags</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display text-[#FFFFF0]">
              Manajemen Fitur Aplikasi
            </h1>
            <p className="text-xs sm:text-sm text-[#B0C4DE] max-w-2xl leading-relaxed">
              Kendalikan status aktivasi setiap fitur di portal Siswa dan Guru secara fleksibel dan real-time. Anda dapat menonaktifkan fitur eksperimental seperti AI Tutor kapan saja tanpa perlu redeploy.
            </p>
          </div>

          {/* Quick Metrics & Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-4 py-2.5 bg-black/20 backdrop-blur-xs rounded-2xl border border-white/10 flex items-center gap-3 text-xs">
              <Activity className="w-4 h-4 text-emerald-300" />
              <div>
                <span className="text-[10px] text-[#B0C4DE] block uppercase tracking-wider font-mono">
                  Status Fitur
                </span>
                <span className="font-extrabold text-[#FFFFF0]">
                  {activeCount} dari {totalCount} Aktif
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#FFFFF0] text-xs font-bold transition-all border border-white/15 cursor-pointer shadow-xs"
              title="Kembalikan semua fitur ke konfigurasi standar"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Default</span>
            </button>
          </div>
        </div>
      </div>

      {/* Special Notice for AI Tutor */}
      <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 sm:p-5 flex items-start sm:items-center justify-between gap-4 shadow-2xs">
        <div className="flex items-start sm:items-center gap-3.5">
          <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-700 border border-amber-500/20 shrink-0 mt-0.5 sm:mt-0">
            <Bot className="w-5 h-5" />
          </div>
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold text-slate-900">
                Fitur Tanya AI Tutor Kimia
              </h4>
              <span
                className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                  flags.materialAiTutor
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-rose-100 text-rose-800'
                }`}
              >
                {flags.materialAiTutor ? 'Sedang Aktif' : 'Sedang Dinonaktifkan'}
              </span>
            </div>
            <p className="text-xs text-slate-600">
              {flags.materialAiTutor
                ? 'Tombol AI Tutor saat ini dapat diakses oleh siswa di halaman membaca materi.'
                : 'Tombol AI Tutor di halaman membaca materi disembunyikan secara menyeluruh dari siswa sesuai instruksi Administrator.'}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => handleToggle(FEATURE_CATALOG[0])}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs shrink-0 cursor-pointer ${
            flags.materialAiTutor
              ? 'bg-rose-600 hover:bg-rose-700 text-white'
              : 'bg-emerald-600 hover:bg-emerald-700 text-white'
          }`}
        >
          {flags.materialAiTutor ? 'Nonaktifkan Sekarang' : 'Aktifkan AI Tutor'}
        </button>
      </div>

      {/* Toolbar Filters & Search */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-2xs">
        <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-colors ${
              selectedCategory === 'all'
                ? 'bg-slate-800 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Semua Fitur ({FEATURE_CATALOG.length})
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('materi')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-colors ${
              selectedCategory === 'materi'
                ? 'bg-slate-800 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Halaman Materi Siswa
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('teacher')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-colors ${
              selectedCategory === 'teacher'
                ? 'bg-slate-800 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Fitur Guru & Kelas
          </button>
        </div>

        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Cari fitur atau deskripsi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#596A7A]/20 focus:border-[#596A7A]"
          />
        </div>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredFeatures.map((meta) => {
          const isEnabled = Boolean(flags[meta.key]);

          return (
            <div
              key={meta.key}
              className={`bg-white border rounded-2xl p-5 shadow-xs transition-all flex flex-col justify-between gap-4 ${
                isEnabled
                  ? 'border-slate-200 hover:border-slate-300'
                  : 'border-slate-200/60 bg-slate-50/50 opacity-90'
              }`}
            >
              <div className="space-y-3">
                {/* Header row: badge and switch */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 uppercase tracking-wider">
                      {meta.badge}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 text-[11px] font-bold ${
                        isEnabled ? 'text-emerald-700' : 'text-slate-400'
                      }`}
                    >
                      {isEnabled ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Aktif</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-3.5 h-3.5 text-slate-400" />
                          <span>Nonaktif</span>
                        </>
                      )}
                    </span>
                  </div>

                  {/* Toggle Switch */}
                  <label className="relative inline-flex items-center cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={isEnabled}
                      onChange={() => handleToggle(meta)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600 shadow-inner"></div>
                  </label>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {meta.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {meta.description}
                  </p>
                </div>
              </div>

              {/* Impact Area Footnote */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 truncate max-w-[260px]">
                  <Info className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  <span>{meta.impactArea}</span>
                </span>
                <span className="font-mono text-[10px]">key: {meta.key}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
