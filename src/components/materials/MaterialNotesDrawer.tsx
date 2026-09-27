import React, { useState, useEffect, useMemo } from 'react';
import { 
  X, 
  Plus, 
  Trash2, 
  Edit3, 
  Save, 
  Search, 
  Download, 
  Copy, 
  Check, 
  StickyNote, 
  Tag as TagIcon,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { KaTeXRenderer } from '../common/KaTeXRenderer';

export interface MaterialNote {
  id: string;
  materialId: string;
  materialTitle: string;
  conceptTag?: string;
  conceptTitle?: string;
  content: string;
  color: 'yellow' | 'green' | 'blue' | 'purple' | 'rose';
  createdAt: number;
  updatedAt: number;
}

interface MaterialNotesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  materialId: string;
  materialTitle: string;
  concepts: Array<{ tag: string; title: string }>;
  initialConceptTag?: string;
  onJumpToConcept?: (tag: string) => void;
}

const STORAGE_KEY = 'osn_material_notes_v1';

export const getStoredNotes = (materialId?: string): MaterialNote[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const allNotes: MaterialNote[] = JSON.parse(raw);
    if (!Array.isArray(allNotes)) return [];
    if (materialId) {
      return allNotes.filter((n) => n.materialId === materialId);
    }
    return allNotes;
  } catch (err) {
    console.error('Failed to parse material notes:', err);
    return [];
  }
};

export const saveNotesToStorage = (notes: MaterialNote[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch (err) {
    console.error('Failed to save material notes:', err);
  }
};

const COLOR_MAP = {
  yellow: {
    bg: 'bg-[#FFFBEB]', // Warm Soft Yellow / Cream
    border: 'border-[#FDE68A]', // Amber-200
    dot: 'bg-amber-500',
    badge: 'bg-amber-100 text-amber-900 border border-amber-300/80',
    label: 'Kuning (Catatan Umum)',
  },
  green: {
    bg: 'bg-[#F0FDF4]', // Soft Emerald
    border: 'border-[#BBF7D0]', // Emerald-200
    dot: 'bg-emerald-600',
    badge: 'bg-emerald-100 text-emerald-900 border border-emerald-300/80',
    label: 'Hijau (Konsep/Definisi)',
  },
  blue: {
    bg: 'bg-[#F0F8FF]', // Alice Blue (Palette)
    border: 'border-[#B0C4DE]', // Light Steel Blue (Palette)
    dot: 'bg-[#708090]', // Slate Gray (Palette)
    badge: 'bg-[#B0C4DE]/40 text-[#2D3748] border border-[#B0C4DE]',
    label: 'Biru OSN (Rumus & Hukum)',
  },
  purple: {
    bg: 'bg-[#FAF5FF]', // Soft Lavender
    border: 'border-[#E9D5FF]',
    dot: 'bg-purple-600',
    badge: 'bg-purple-100 text-purple-900 border border-purple-300/80',
    label: 'Ungu (Trik & Strategi)',
  },
  rose: {
    bg: 'bg-[#FFF1F2]', // Soft Rose
    border: 'border-[#FECDD3]',
    dot: 'bg-rose-600',
    badge: 'bg-rose-100 text-rose-900 border border-rose-300/80',
    label: 'Merah (Peringatan/Jebakan)',
  },
};

export const MaterialNotesDrawer: React.FC<MaterialNotesDrawerProps> = ({
  isOpen,
  onClose,
  materialId,
  materialTitle,
  concepts,
  initialConceptTag,
  onJumpToConcept,
}) => {
  const [allNotes, setAllNotes] = useState<MaterialNote[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState('');
  const [editColor, setEditColor] = useState<MaterialNote['color']>('yellow');
  const [editConceptTag, setEditConceptTag] = useState<string>('');
  
  // New Note Form State
  const [newContent, setNewContent] = useState('');
  const [newColor, setNewColor] = useState<MaterialNote['color']>('yellow');
  const [newConceptTag, setNewConceptTag] = useState<string>('');

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [filterConcept, setFilterConcept] = useState<string>('all');
  const [copiedExport, setCopiedExport] = useState(false);

  // Load all notes from localStorage
  const loadNotes = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setAllNotes(JSON.parse(raw));
      } else {
        setAllNotes([]);
      }
    } catch {
      setAllNotes([]);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadNotes();
      if (initialConceptTag) {
        setNewConceptTag(initialConceptTag);
        setIsAdding(true);
      }
    }
  }, [isOpen, initialConceptTag]);

  // Notes belonging to this material
  const currentMaterialNotes = useMemo(() => {
    return allNotes.filter((n) => n.materialId === materialId);
  }, [allNotes, materialId]);

  // Filtered notes by query and concept
  const filteredNotes = useMemo(() => {
    return currentMaterialNotes.filter((n) => {
      const matchQuery =
        !searchQuery.trim() ||
        n.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (n.conceptTitle && n.conceptTitle.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchConcept =
        filterConcept === 'all' ||
        (filterConcept === 'general' && !n.conceptTag) ||
        n.conceptTag === filterConcept;
      return matchQuery && matchConcept;
    });
  }, [currentMaterialNotes, searchQuery, filterConcept]);

  const handleCreateNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newContent.trim()) return;

    const matchedConcept = concepts.find((c) => c.tag === newConceptTag);
    const newNote: MaterialNote = {
      id: `note_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      materialId,
      materialTitle,
      conceptTag: newConceptTag || undefined,
      conceptTitle: matchedConcept?.title || undefined,
      content: newContent.trim(),
      color: newColor,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    const updated = [newNote, ...allNotes];
    setAllNotes(updated);
    saveNotesToStorage(updated);

    // Reset Form
    setNewContent('');
    setIsAdding(false);
  };

  const handleDeleteNote = (id: string) => {
    if (!window.confirm('Hapus catatan belajar ini?')) return;
    const updated = allNotes.filter((n) => n.id !== id);
    setAllNotes(updated);
    saveNotesToStorage(updated);
  };

  const handleStartEdit = (note: MaterialNote) => {
    setEditingId(note.id);
    setEditContent(note.content);
    setEditColor(note.color);
    setEditConceptTag(note.conceptTag || '');
  };

  const handleSaveEdit = (id: string) => {
    if (!editContent.trim()) return;
    const matchedConcept = concepts.find((c) => c.tag === editConceptTag);

    const updated = allNotes.map((n) => {
      if (n.id === id) {
        return {
          ...n,
          content: editContent.trim(),
          color: editColor,
          conceptTag: editConceptTag || undefined,
          conceptTitle: matchedConcept?.title || undefined,
          updatedAt: Date.now(),
        };
      }
      return n;
    });

    setAllNotes(updated);
    saveNotesToStorage(updated);
    setEditingId(null);
  };

  // Export as Markdown
  const handleExportMarkdown = () => {
    if (currentMaterialNotes.length === 0) return;

    let md = `# Catatan Belajar: ${materialTitle}\n`;
    md += `*Diekspor pada ${new Date().toLocaleDateString('id-ID', { dateStyle: 'full' })}*\n\n---\n\n`;

    currentMaterialNotes.forEach((note, idx) => {
      md += `### ${idx + 1}. ${note.conceptTitle ? `[${note.conceptTitle}]` : 'Catatan Umum'}\n`;
      if (note.conceptTag) md += `*Tag: #${note.conceptTag}*\n\n`;
      md += `${note.content}\n\n`;
      md += `*Dibuat: ${new Date(note.createdAt).toLocaleString('id-ID')}*\n\n---\n\n`;
    });

    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Catatan_${materialId}_${Date.now()}.md`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyNotes = () => {
    if (currentMaterialNotes.length === 0) return;
    let text = `CATATAN BELAJAR: ${materialTitle}\n\n`;
    currentMaterialNotes.forEach((note, idx) => {
      text += `${idx + 1}. ${note.conceptTitle ? `[${note.conceptTitle}] ` : ''}${note.content}\n\n`;
    });
    navigator.clipboard.writeText(text);
    setCopiedExport(true);
    setTimeout(() => setCopiedExport(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity cursor-pointer"
        onClick={onClose}
      />

      {/* Drawer Container (Always Light Serene Palette) */}
      <div className="relative w-full max-w-lg bg-white h-full shadow-2xl flex flex-col z-10 border-l border-[#D3D3D3] animate-in slide-in-from-right duration-200">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#D3D3D3] bg-[#FFFFF0] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#708090] text-[#FFFFF0] shadow-2xs border border-[#B0C4DE]/60">
              <StickyNote className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold text-[#2D3748]">
                  Catatan Belajar
                </h2>
                <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-[#B0C4DE]/30 text-[#708090] border border-[#B0C4DE]/60">
                  {currentMaterialNotes.length}
                </span>
              </div>
              <p className="text-xs text-[#708090] line-clamp-1 max-w-[260px] font-medium">
                {materialTitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {currentMaterialNotes.length > 0 && (
              <>
                <button
                  type="button"
                  onClick={handleCopyNotes}
                  title="Salin Semua Catatan"
                  className="p-2 text-[#708090] hover:text-[#2D3748] hover:bg-[#F0F8FF] rounded-lg transition-colors border border-transparent hover:border-[#D3D3D3] cursor-pointer"
                >
                  {copiedExport ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
                <button
                  type="button"
                  onClick={handleExportMarkdown}
                  title="Unduh format Markdown (.md)"
                  className="p-2 text-[#708090] hover:text-[#2D3748] hover:bg-[#F0F8FF] rounded-lg transition-colors border border-transparent hover:border-[#D3D3D3] cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                </button>
              </>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-[#2D3748] hover:bg-[#F0F8FF] rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Toolbar & Filters */}
        <div className="p-3 sm:px-5 sm:py-3.5 border-b border-[#D3D3D3] bg-[#F8FAFC] space-y-3">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#708090]" />
              <input
                type="text"
                placeholder="Cari dalam catatan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-[#D3D3D3] bg-white text-[#2D3748] placeholder-slate-400 focus:outline-none focus:border-[#708090] focus:ring-1 focus:ring-[#708090] shadow-2xs transition-all"
              />
            </div>
            {!isAdding && (
              <button
                type="button"
                onClick={() => setIsAdding(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#708090] hover:bg-[#5C6D7D] text-[#FFFFF0] text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer shrink-0"
              >
                <Plus className="w-4 h-4" />
                <span className="hidden sm:inline">Catatan Baru</span>
                <span className="sm:hidden">Tambah</span>
              </button>
            )}
          </div>

          {/* Filter by concept */}
          {concepts.length > 0 && (
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
              <span className="text-[#708090] flex items-center gap-1 shrink-0 font-semibold">
                <TagIcon className="w-3.5 h-3.5 text-[#708090]" /> Filter:
              </span>
              <button
                type="button"
                onClick={() => setFilterConcept('all')}
                className={`px-3 py-1 rounded-lg shrink-0 transition-all font-semibold cursor-pointer ${
                  filterConcept === 'all'
                    ? 'bg-[#708090] text-[#FFFFF0] shadow-xs'
                    : 'bg-white text-[#708090] border border-[#D3D3D3] hover:bg-[#F0F8FF] hover:text-[#2D3748]'
                }`}
              >
                Semua ({currentMaterialNotes.length})
              </button>
              {concepts.map((c) => {
                const count = currentMaterialNotes.filter((n) => n.conceptTag === c.tag).length;
                if (count === 0) return null;
                return (
                  <button
                    key={c.tag}
                    type="button"
                    onClick={() => setFilterConcept(c.tag)}
                    className={`px-3 py-1 rounded-lg shrink-0 transition-all font-semibold cursor-pointer ${
                      filterConcept === c.tag
                        ? 'bg-[#708090] text-[#FFFFF0] shadow-xs'
                        : 'bg-white text-[#708090] border border-[#D3D3D3] hover:bg-[#F0F8FF] hover:text-[#2D3748]'
                    }`}
                  >
                    #{c.tag} ({count})
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-[#F8FAFC]">
          
          {/* Add New Note Form Card */}
          {isAdding && (
            <form
              onSubmit={handleCreateNote}
              className="p-4 sm:p-5 rounded-2xl border border-[#B0C4DE] bg-[#FFFFF0] shadow-sm space-y-3.5 animate-in fade-in zoom-in-95 duration-150"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#708090] flex items-center gap-1.5">
                  <StickyNote className="w-3.5 h-3.5 text-[#708090]" /> Buat Catatan Baru
                </span>
                <button
                  type="button"
                  onClick={() => setIsAdding(false)}
                  className="text-slate-400 hover:text-[#2D3748] p-1 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Concept Selector */}
              <div>
                <label className="block text-xs font-semibold text-[#2D3748] mb-1.5">
                  Kaitkan dengan Konsep (Opsional):
                </label>
                <select
                  value={newConceptTag}
                  onChange={(e) => setNewConceptTag(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-[#D3D3D3] bg-white text-[#2D3748] focus:outline-none focus:border-[#708090] focus:ring-1 focus:ring-[#708090]"
                >
                  <option value="">📌 Catatan Umum Seluruh Bab</option>
                  {concepts.map((c) => (
                    <option key={c.tag} value={c.tag}>
                      {c.title} (#{c.tag})
                    </option>
                  ))}
                </select>
              </div>

              {/* Text Area */}
              <div>
                <textarea
                  rows={4}
                  required
                  placeholder="Tuliskan pemahamanmu, rumus kunci (mendukung KaTeX $...$), kata kunci penting, atau jebakan soal..."
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  className="w-full p-3 text-xs sm:text-sm rounded-xl border border-[#D3D3D3] bg-white text-[#2D3748] placeholder-slate-400 focus:outline-none focus:border-[#708090] focus:ring-1 focus:ring-[#708090] resize-none leading-relaxed"
                  autoFocus
                />
              </div>

              {/* Color Picker & Actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-[#708090] font-semibold mr-1">Warna:</span>
                  {(Object.keys(COLOR_MAP) as Array<MaterialNote['color']>).map((col) => (
                    <button
                      key={col}
                      type="button"
                      onClick={() => setNewColor(col)}
                      className={`w-6 h-6 rounded-full transition-transform cursor-pointer ${COLOR_MAP[col].dot} ${
                        newColor === col ? 'ring-2 ring-offset-2 ring-[#708090] scale-110' : 'opacity-70 hover:opacity-100'
                      }`}
                      title={COLOR_MAP[col].label}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsAdding(false)}
                    className="px-3 py-2 text-xs font-semibold text-[#708090] hover:text-[#2D3748] hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-bold bg-[#708090] hover:bg-[#5C6D7D] text-[#FFFFF0] rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <Save className="w-3.5 h-3.5" /> Simpan Catatan
                  </button>
                </div>
              </div>
            </form>
          )}

          {/* Notes List */}
          {filteredNotes.length === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-[#FFFFF0] border border-[#D3D3D3] flex items-center justify-center text-[#708090] shadow-2xs">
                <StickyNote className="w-8 h-8" />
              </div>
              <h3 className="text-sm font-bold text-[#2D3748] mb-1">
                {searchQuery ? 'Tidak Ada Catatan yang Cocok' : 'Belum Ada Catatan Belajar'}
              </h3>
              <p className="text-xs text-[#708090] max-w-xs mx-auto mb-4 font-medium">
                {searchQuery
                  ? 'Coba gunakan kata kunci pencarian yang lain atau ubah filter konsep.'
                  : 'Catat poin penting, rumus kunci, atau pengingat belajar pribadimu saat membaca materi ini.'}
              </p>
              {!isAdding && (
                <button
                  type="button"
                  onClick={() => setIsAdding(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#708090] hover:bg-[#5C6D7D] text-[#FFFFF0] text-xs font-bold rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer"
                >
                  <Plus className="w-4 h-4" /> Tulis Catatan Pertama
                </button>
              )}
            </div>
          ) : (
            <div className="space-y-3.5">
              {filteredNotes.map((note) => {
                const colorConfig = COLOR_MAP[note.color] || COLOR_MAP.yellow;
                const isEditing = editingId === note.id;

                return (
                  <div
                    key={note.id}
                    className={`rounded-2xl border p-4 sm:p-5 transition-all shadow-xs ${colorConfig.bg} ${colorConfig.border}`}
                  >
                    {isEditing ? (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#2D3748]">
                            Edit Catatan
                          </span>
                          <button
                            type="button"
                            onClick={() => setEditingId(null)}
                            className="text-slate-400 hover:text-[#2D3748] p-1 rounded-lg hover:bg-slate-100"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <select
                          value={editConceptTag}
                          onChange={(e) => setEditConceptTag(e.target.value)}
                          className="w-full px-3 py-1.5 text-xs rounded-xl border border-[#D3D3D3] bg-white text-[#2D3748] focus:border-[#708090]"
                        >
                          <option value="">📌 Catatan Umum</option>
                          {concepts.map((c) => (
                            <option key={c.tag} value={c.tag}>
                              {c.title} (#{c.tag})
                            </option>
                          ))}
                        </select>

                        <textarea
                          rows={3}
                          value={editContent}
                          onChange={(e) => setEditContent(e.target.value)}
                          className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-[#D3D3D3] bg-white text-[#2D3748] focus:outline-none focus:border-[#708090] leading-relaxed"
                        />

                        <div className="flex items-center justify-between pt-1">
                          <div className="flex items-center gap-1.5">
                            {(Object.keys(COLOR_MAP) as Array<MaterialNote['color']>).map((col) => (
                              <button
                                key={col}
                                type="button"
                                onClick={() => setEditColor(col)}
                                className={`w-5 h-5 rounded-full cursor-pointer ${COLOR_MAP[col].dot} ${
                                  editColor === col ? 'ring-2 ring-[#708090] scale-110' : 'opacity-70'
                                }`}
                              />
                            ))}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <button
                              type="button"
                              onClick={() => setEditingId(null)}
                              className="px-2.5 py-1.5 text-xs font-semibold text-[#708090] hover:text-[#2D3748] hover:bg-white/80 rounded-lg transition-colors cursor-pointer"
                            >
                              Batal
                            </button>
                            <button
                              type="button"
                              onClick={() => handleSaveEdit(note.id)}
                              className="px-3.5 py-1.5 text-xs font-bold bg-[#708090] hover:bg-[#5C6D7D] text-[#FFFFF0] rounded-lg shadow-xs transition-colors cursor-pointer"
                            >
                              Simpan
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        {/* Note Header */}
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className={`w-2.5 h-2.5 rounded-full ${colorConfig.dot}`} />
                            {note.conceptTag ? (
                              <button
                                type="button"
                                onClick={() => onJumpToConcept?.(note.conceptTag!)}
                                className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1 transition-opacity hover:opacity-80 cursor-pointer ${colorConfig.badge}`}
                              >
                                <TagIcon className="w-2.5 h-2.5" />
                                {note.conceptTitle || `#${note.conceptTag}`}
                              </button>
                            ) : (
                              <span className="text-[11px] font-semibold text-[#708090]">
                                Catatan Umum
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-1">
                            <button
                              type="button"
                              onClick={() => handleStartEdit(note)}
                              className="p-1.5 text-slate-400 hover:text-[#708090] hover:bg-white/80 rounded-lg transition-colors cursor-pointer"
                              title="Edit Catatan"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDeleteNote(note.id)}
                              className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-white/80 rounded-lg transition-colors cursor-pointer"
                              title="Hapus Catatan"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        {/* Note Content (High-contrast, KaTeX enabled) */}
                        <div className="text-xs sm:text-sm text-slate-900 leading-relaxed font-sans font-normal py-1">
                          <KaTeXRenderer
                            content={note.content}
                            className="text-slate-900"
                          />
                        </div>

                        {/* Note Footer */}
                        <div className="mt-2.5 pt-2 border-t border-slate-200/80 flex items-center justify-between text-[10px] text-slate-500 font-medium">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-[#708090]" />
                            {new Date(note.createdAt).toLocaleDateString('id-ID', {
                              day: 'numeric',
                              month: 'short',
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </span>
                          {note.updatedAt !== note.createdAt && (
                            <span className="italic text-slate-400">diedit</span>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3.5 border-t border-[#D3D3D3] bg-[#FFFFF0] text-[11px] text-[#708090] font-semibold flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 text-[#708090]" />
            Tersimpan otomatis di browser
          </span>
          <span className="px-2 py-0.5 rounded-md bg-[#B0C4DE]/30 text-[#708090] border border-[#B0C4DE]/60">
            {currentMaterialNotes.length} catatan aktif
          </span>
        </div>
      </div>
    </div>
  );
};

export default MaterialNotesDrawer;
