import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Save,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Eye,
  Edit3,
  Layers,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { materialService } from '../../services/materialService';
import { KaTeXRenderer } from '../../components/common/KaTeXRenderer';

export const AdminMaterialEditor: React.FC = () => {
  const { type = 'osn', id } = useParams<{ type: string; id: string }>();
  const navigate = useNavigate();
  const materialId = parseInt(id || '1', 10);
  const materialType = type === 'sma' ? 'sma' : 'osn';

  const [material, setMaterial] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [selectedBlockIndex, setSelectedBlockIndex] = useState<number>(0);

  // Form states
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [readTime, setReadTime] = useState(25);
  const [summary, setSummary] = useState('');
  const [coreConcepts, setCoreConcepts] = useState<any[]>([]);

  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  useEffect(() => {
    const fetchMaterial = async () => {
      setIsLoading(true);
      try {
        const data = await materialService.getMaterialById(materialType, materialId);
        if (data) {
          setMaterial(data);
          setTitle(data.title || '');
          setCategory(data.category || '');
          setReadTime(data.readTimeMinutes || 25);
          setSummary(data.summary || '');
          setCoreConcepts(data.core_concepts || []);
        }
      } catch (e) {
        console.warn('Gagal memuat materi:', e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMaterial();
  }, [materialType, materialId]);

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 4000);
  };

  const handleConceptChange = (index: number, field: string, value: string) => {
    const updated = [...coreConcepts];
    updated[index] = { ...updated[index], [field]: value };
    setCoreConcepts(updated);
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const payload = {
        title,
        category,
        readTimeMinutes: readTime,
        summary,
        core_concepts: coreConcepts,
      };
      await materialService.saveMaterial(materialType, materialId, payload);
      showNotification('success', 'Materi berhasil disimpan dan disinkronkan ke cloud!');
    } catch (err: any) {
      showNotification('error', err?.message || 'Gagal menyimpan materi.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleResetToDefault = async () => {
    if (!window.confirm('Apakah Anda yakin ingin mengembalikan materi ini ke konten baku sistem?')) return;
    setIsSaving(true);
    try {
      await materialService.resetMaterialToDefault(materialType, materialId);
      showNotification('success', 'Materi telah dikembalikan ke format default.');
      const data = await materialService.getMaterialById(materialType, materialId);
      if (data) {
        setTitle(data.title || '');
        setCategory(data.category || '');
        setReadTime(data.readTimeMinutes || 25);
        setSummary(data.summary || '');
        setCoreConcepts(data.core_concepts || []);
      }
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="py-24 text-center text-slate-500">
        <div className="inline-block w-8 h-8 border-2 border-slate-900 border-t-transparent rounded-full animate-spin mb-3" />
        <div className="text-xs">Memuat editor materi silabus...</div>
      </div>
    );
  }

  const currentBlock = coreConcepts[selectedBlockIndex] || {
    title: 'Konsep Kimia',
    content: 'Tuliskan penjelasan materi dengan formula KaTeX di sini.',
    summary: '',
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Toast Notification */}
      {notification && (
        <div
          className={`p-3.5 rounded-xl text-xs font-semibold flex items-center justify-between border shadow-xs animate-in fade-in ${
            notification.type === 'success'
              ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
              : 'bg-rose-50 border-rose-200 text-rose-800'
          }`}
        >
          <div className="flex items-center gap-2">
            {notification.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            )}
            <span>{notification.message}</span>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <Link
            to="/admin/materials"
            className="p-2 rounded-lg bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-xs transition"
            title="Kembali ke Daftar Materi"
          >
            <ArrowLeft size={16} />
          </Link>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-[10px] font-bold font-mono px-2 py-0.2 bg-slate-100 text-slate-700 border border-slate-200 rounded tracking-wider uppercase">
                {materialType.toUpperCase()} TOPIC EDITOR
              </span>
              <span className="text-xs text-slate-500 font-medium">ID #{materialId}</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              {title || 'Edit Materi'}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleResetToDefault}
            disabled={isSaving}
            className="px-3.5 py-2 rounded-lg bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-xs text-xs font-medium transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            title="Kembalikan ke format baku default"
          >
            <RotateCcw size={13} className="text-slate-500" />
            <span>Reset Default</span>
          </button>

          <button
            onClick={handleSave}
            disabled={isSaving}
            className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium transition shadow-xs flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
          >
            <Save size={14} />
            <span>{isSaving ? 'Menyimpan...' : 'Simpan Materi'}</span>
          </button>
        </div>
      </div>

      {/* Meta Settings */}
      <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-4 text-xs">
        <h2 className="font-bold text-slate-700 uppercase tracking-wider font-mono text-xs">Informasi Umum Materi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="sm:col-span-2">
            <label className="block text-slate-600 font-medium mb-1">Judul Topik</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-semibold focus:bg-white focus:outline-none focus:border-slate-400 transition"
            />
          </div>
          <div>
            <label className="block text-slate-600 font-medium mb-1">Estimasi Waktu Baca (Menit)</label>
            <input
              type="number"
              value={readTime}
              onChange={(e) => setReadTime(parseInt(e.target.value, 10) || 20)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-mono focus:bg-white focus:outline-none focus:border-slate-400 transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-slate-600 font-medium mb-1">Ringkasan Materi (Summary)</label>
          <textarea
            rows={2}
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 leading-relaxed focus:bg-white focus:outline-none focus:border-slate-400 transition"
          />
        </div>
      </div>

      {/* Concept Blocks Editor & KaTeX Live Split View */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-slate-800 text-sm flex items-center gap-2">
            <Layers className="w-4 h-4 text-slate-600" />
            <span>Blok Konsep Inti & Notasi KaTeX ({coreConcepts.length} Blok)</span>
          </h2>
        </div>

        {/* Block Selector Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs">
          {coreConcepts.map((block, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedBlockIndex(idx)}
              className={`px-3 py-1.5 rounded-lg font-medium shrink-0 transition cursor-pointer ${
                selectedBlockIndex === idx
                  ? 'bg-slate-900 text-white font-semibold shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <span>{idx + 1}. {block.title || `Konsep #${idx + 1}`}</span>
            </button>
          ))}
        </div>

        {/* Split Screen Editor */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left: Input Textarea */}
          <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-100 pb-2">
                <span className="font-bold text-slate-700 uppercase font-mono">Editor Konten (KaTeX / Markdown)</span>
                <span className="font-mono text-[10px] text-slate-400">Gunakan $..$ untuk inline & $$..$$ untuk display</span>
              </div>

              <div>
                <label className="block text-slate-600 text-xs font-medium mb-1">Judul Sub-Konsep</label>
                <input
                  type="text"
                  value={currentBlock.title || ''}
                  onChange={(e) => handleConceptChange(selectedBlockIndex, 'title', e.target.value)}
                  className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-slate-400 font-medium transition"
                />
              </div>

              <div>
                <label className="block text-slate-600 text-xs font-medium mb-1">Isi Konten & Penjelasan Rumus</label>
                <textarea
                  rows={14}
                  value={currentBlock.content || ''}
                  onChange={(e) => handleConceptChange(selectedBlockIndex, 'content', e.target.value)}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 font-mono leading-relaxed focus:bg-white focus:outline-none focus:border-slate-400 resize-y transition"
                  placeholder="Ketik penjelasan konsep, contoh: $\Delta H = \Delta U + P\Delta V$..."
                />
              </div>
            </div>
          </div>

          {/* Right: Live Rendered Output */}
          <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3 flex flex-col">
            <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-100 pb-2">
              <span className="font-bold text-slate-700 uppercase font-mono flex items-center gap-1.5">
                <Eye size={13} className="text-slate-600" />
                <span>Live Preview Rendering KaTeX</span>
              </span>
              <span className="text-[10px] text-emerald-600 font-mono font-medium">Real-time</span>
            </div>

            <div className="flex-1 p-4 rounded-lg bg-slate-50 border border-slate-200 overflow-y-auto max-h-[480px]">
              <h3 className="text-base font-bold text-slate-900 mb-2">{currentBlock.title}</h3>
              <div className="text-xs text-slate-800 leading-relaxed font-sans prose prose-slate max-w-none">
                <KaTeXRenderer content={currentBlock.content || '*Belum ada konten.*'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
