import React, { useState, useEffect } from 'react';
import {
  X,
  Image as ImageIcon,
  UploadCloud,
  Search,
  Check,
  Trash2,
  ExternalLink,
  RefreshCw,
  Copy,
  Calendar,
  Layers,
  Sparkles,
} from 'lucide-react';
import {
  storageService,
  type StoredObject,
  type StorageCategory,
} from '../../services/storageService';
import { CloudflareImageUploader } from '../common/CloudflareImageUploader';

interface DiagramGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDiagram?: (url: string, key?: string) => void;
  initialCategory?: StorageCategory;
}

export const DiagramGalleryModal: React.FC<DiagramGalleryModalProps> = ({
  isOpen,
  onClose,
  onSelectDiagram,
  initialCategory = 'diagrams',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [items, setItems] = useState<StoredObject[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeletingKey, setIsDeletingKey] = useState<string | null>(null);
  const [showUploaderTab, setShowUploaderTab] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const loadMedia = async () => {
    setIsLoading(true);
    try {
      const cat = selectedCategory === 'all' ? undefined : (selectedCategory as StorageCategory);
      const objects = await storageService.listFiles({ category: cat, limit: 60 });
      setItems(objects);
    } catch (err) {
      console.warn('Gagal memuat galeri media:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadMedia();
    }
  }, [isOpen, selectedCategory]);

  if (!isOpen) return null;

  const filteredItems = items.filter((item) => {
    if (!searchQuery) return true;
    const name = item.customMetadata?.originalName || item.key;
    return name.toLowerCase().includes(searchQuery.toLowerCase()) || item.key.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleDelete = async (key: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!window.confirm(`Hapus berkas "${key}" dari Cloudflare R2?`)) return;

    setIsDeletingKey(key);
    try {
      await storageService.deleteFile(key);
      setItems((prev) => prev.filter((i) => i.key !== key));
    } finally {
      setIsDeletingKey(null);
    }
  };

  const handleCopyUrl = async (url: string, key: string, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(url);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    } catch {}
  };

  const formatFileSize = (bytes?: number) => {
    if (!bytes) return '';
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-indigo-600 text-white flex items-center justify-center shadow-xs">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  Galeri Diagram & Gambar Cloudflare R2
                </h2>
                <span className="px-2 py-0.5 bg-amber-100 text-amber-900 border border-amber-300 rounded text-[10px] font-bold font-mono">
                  osn-storage
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Pilih atau unggah diagram kimia, struktur molekul, dan kurva fasa untuk disematkan
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowUploaderTab((prev) => !prev)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs ${
                showUploaderTab
                  ? 'bg-slate-800 text-white'
                  : 'bg-sky-600 hover:bg-sky-500 text-white'
              }`}
            >
              <UploadCloud className="w-4 h-4" />
              <span>{showUploaderTab ? 'Tutup Form Upload' : 'Unggah Diagram Baru'}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Collapsible Direct Uploader Box */}
        {showUploaderTab && (
          <div className="p-5 bg-sky-50/40 border-b border-sky-100 animate-in slide-in-from-top-2">
            <CloudflareImageUploader
              category={(selectedCategory === 'all' ? 'diagrams' : selectedCategory) as StorageCategory}
              label="Unggah Berkas Baru ke Cloudflare R2"
              helpText="Otomatis tersimpan ke bucket osn-storage dan muncul langsung di galeri di bawah"
              onChange={(url) => {
                loadMedia();
                if (onSelectDiagram) {
                  onSelectDiagram(url);
                  onClose();
                }
              }}
            />
          </div>
        )}

        {/* Filter Bar & Search */}
        <div className="px-6 py-3 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3 bg-white">
          {/* Category Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto text-xs py-1">
            {[
              { id: 'diagrams', label: '📊 Diagram Soal' },
              { id: 'questions', label: '❓ Soal & Ujian' },
              { id: 'materials', label: '📚 Materi Silabus' },
              { id: 'all', label: 'Semua Kategori' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg font-semibold text-xs transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-sky-50 text-sky-800 border border-sky-300 font-bold'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box & Refresh */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari nama diagram..."
                className="pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 w-48 sm:w-60"
              />
            </div>

            <button
              type="button"
              onClick={loadMedia}
              disabled={isLoading}
              className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              title="Muat Ulang Galeri"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="flex-1 overflow-y-auto p-6 bg-slate-50/50">
          {isLoading ? (
            <div className="py-20 flex flex-col items-center justify-center gap-3">
              <div className="w-8 h-8 border-3 border-sky-200 border-t-sky-600 rounded-full animate-spin" />
              <p className="text-xs text-slate-500 font-medium">Memuat katalog media dari Cloudflare R2...</p>
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center">
                <Layers className="w-7 h-7" />
              </div>
              <p className="text-sm font-bold text-slate-700">Belum ada berkas pada kategori ini</p>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Unggah gambar diagram kimia menggunakan tombol di atas atau seret berkas langsung ke area uploader.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {filteredItems.map((item) => {
                const displayName = item.customMetadata?.originalName || item.key.split('/').pop() || 'Diagram';
                const isCopied = copiedKey === item.key;
                const isDeleting = isDeletingKey === item.key;

                return (
                  <div
                    key={item.key}
                    onClick={() => onSelectDiagram && onSelectDiagram(item.url, item.key)}
                    className={`group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:shadow-md hover:border-sky-400 transition-all flex flex-col text-left relative ${
                      onSelectDiagram ? 'cursor-pointer hover:scale-[1.02]' : ''
                    }`}
                  >
                    {/* Thumbnail Image */}
                    <div className="aspect-square bg-slate-100 relative overflow-hidden flex items-center justify-center">
                      <img
                        src={item.url}
                        alt={displayName}
                        loading="lazy"
                        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform"
                      />

                      {/* Hover Overlay Action */}
                      <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 p-2">
                        {onSelectDiagram && (
                          <span className="px-2.5 py-1 bg-sky-600 text-white text-[11px] font-bold rounded-lg shadow-sm">
                            Pilih Diagram
                          </span>
                        )}
                      </div>

                      {/* Category Pill Tag */}
                      <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 bg-slate-900/75 backdrop-blur-xs text-white text-[9px] font-mono rounded">
                        {item.key.split('/')[0]}
                      </span>
                    </div>

                    {/* Metadata Card Footer */}
                    <div className="p-2.5 space-y-1">
                      <p className="text-xs font-bold text-slate-900 truncate" title={displayName}>
                        {displayName}
                      </p>
                      <div className="flex items-center justify-between text-[10px] text-slate-500">
                        <span>{formatFileSize(item.size)}</span>
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={(e) => handleCopyUrl(item.url, item.key, e)}
                            className="p-1 text-slate-400 hover:text-sky-600 hover:bg-sky-50 rounded"
                            title="Salin URL"
                          >
                            {isCopied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                          </button>

                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-1 text-slate-400 hover:text-sky-600 hover:bg-sky-50 rounded"
                            title="Buka Tab Baru"
                          >
                            <ExternalLink className="w-3 h-3" />
                          </a>

                          <button
                            type="button"
                            onClick={(e) => handleDelete(item.key, e)}
                            disabled={isDeleting}
                            className="p-1 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded"
                            title="Hapus dari R2"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>
            {filteredItems.length} diagram tersimpan di Cloudflare R2
          </span>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-400">
              Zero egress fee • CDN Global Caching
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
