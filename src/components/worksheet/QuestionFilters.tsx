import React, { useState } from 'react';
import { Search, Filter, Bookmark, Tag, RotateCcw, Plus, X } from 'lucide-react';
import { PILLARS_DATA } from '../../data/syllabusData';
import { SMA_MATERIALS } from '../../data/smaMaterialsData';
import { tagAndBookmarkService } from '../../services/tagAndBookmarkService';
import type { QuestionFilter, QuestionDifficulty, QuestionStyle, CurriculumTrack, SmaGradeLevel } from '../../types/database';

interface QuestionFiltersProps {
  filter: QuestionFilter;
  onChange: (filter: QuestionFilter) => void;
  totalFound: number;
}

export const QuestionFilters: React.FC<QuestionFiltersProps> = ({
  filter,
  onChange,
  totalFound,
}) => {
  const [newTagInput, setNewTagInput] = useState('');
  const [showTagInput, setShowTagInput] = useState(false);
  const [availableTags, setAvailableTags] = useState<string[]>(tagAndBookmarkService.getAllGlobalTags());
  const [searchTerm, setSearchTerm] = useState(filter.search || '');

  // Sinkronkan searchTerm saat filter.search diubah dari luar (misal tombol reset)
  React.useEffect(() => {
    setSearchTerm(filter.search || '');
  }, [filter.search]);

  // Debounce pemanggilan onChange filter pencarian selama 250ms
  React.useEffect(() => {
    if (searchTerm === (filter.search || '')) return;
    const timer = setTimeout(() => {
      onChange({ ...filter, search: searchTerm });
    }, 250);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    onChange({ ...filter, search: '' });
  };

  const handleDifficultySelect = (difficulty: QuestionDifficulty | 'ALL') => {
    onChange({ ...filter, difficulty });
  };

  const handlePillarChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    onChange({ ...filter, pillarNumber: val === 'ALL' ? 'ALL' : Number(val) });
  };

  const handleStyleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value as QuestionStyle | 'ALL';
    onChange({ ...filter, questionStyle: val });
  };

  const handleBookmarkToggle = () => {
    onChange({ ...filter, bookmarkedOnly: !filter.bookmarkedOnly });
  };

  const handleTagToggle = (tag: string) => {
    const currentTags = filter.selectedTags || [];
    const newTags = currentTags.includes(tag)
      ? currentTags.filter((t) => t !== tag)
      : [...currentTags, tag];
    onChange({ ...filter, selectedTags: newTags });
  };

  const handleAddGlobalTag = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTagInput.trim()) return;
    const formatted = newTagInput.trim().startsWith('#')
      ? newTagInput.trim()
      : `#${newTagInput.trim().toLowerCase().replace(/\s+/g, '-')}`;

    if (!availableTags.includes(formatted)) {
      setAvailableTags((prev) => [...prev, formatted]);
    }
    handleTagToggle(formatted);
    setNewTagInput('');
    setShowTagInput(false);
  };

  const handleReset = () => {
    onChange({
      search: '',
      curriculum: 'ALL',
      smaTopicNumber: 'ALL',
      smaGrade: 'ALL',
      difficulty: 'ALL',
      pillarNumber: 'ALL',
      questionStyle: 'ALL',
      bookmarkedOnly: false,
      selectedTags: [],
      sortBy: 'newest',
    });
  };

  const activeFilterCount =
    (filter.search ? 1 : 0) +
    (filter.curriculum && filter.curriculum !== 'ALL' ? 1 : 0) +
    (filter.smaTopicNumber && filter.smaTopicNumber !== 'ALL' ? 1 : 0) +
    (filter.smaGrade && filter.smaGrade !== 'ALL' ? 1 : 0) +
    (filter.difficulty && filter.difficulty !== 'ALL' ? 1 : 0) +
    (filter.pillarNumber && filter.pillarNumber !== 'ALL' ? 1 : 0) +
    (filter.questionStyle && filter.questionStyle !== 'ALL' ? 1 : 0) +
    (filter.bookmarkedOnly ? 1 : 0) +
    (filter.selectedTags && filter.selectedTags.length > 0 ? filter.selectedTags.length : 0);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 space-y-5">
      {/* Header & Reset */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-emerald-600" />
          <h3 className="text-sm font-bold text-slate-900 font-display">Filter & Kurasi Soal</h3>
          {activeFilterCount > 0 && (
            <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-emerald-100 text-emerald-800">
              {activeFilterCount}
            </span>
          )}
        </div>

        {activeFilterCount > 0 && (
          <button
            onClick={handleReset}
            className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 transition-colors"
            title="Reset semua filter"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Cari konsep, rumus, atau judul..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full pl-9 pr-8 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 text-slate-900 placeholder:text-slate-400 transition-all"
        />
        {searchTerm && (
          <button
            type="button"
            onClick={handleClearSearch}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer"
            title="Hapus pencarian"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Tingkat Kesulitan Olympiad Badges */}
      <div>
        <label className="text-xs font-semibold text-slate-700 block mb-2">Tingkat Kesulitan / Jenjang:</label>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 mb-2">
          {(['ALL', 'SMA', 'OSK', 'OSP', 'OSN', 'IChO'] as const).map((lvl) => {
            const isSelected =
              lvl === 'SMA'
                ? filter.difficulty === 'SMA' || filter.difficulty?.startsWith('SMA-')
                : (filter.difficulty || 'ALL') === lvl;

            return (
              <button
                key={lvl}
                type="button"
                onClick={() => handleDifficultySelect(lvl as QuestionDifficulty | 'ALL')}
                className={`py-1.5 px-2 text-xs font-bold rounded-lg transition-all text-center ${
                  isSelected
                    ? lvl === 'SMA'
                      ? 'bg-teal-600 text-white shadow-xs'
                      : lvl === 'OSK'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : lvl === 'OSP'
                      ? 'bg-amber-600 text-white shadow-xs'
                      : lvl === 'OSN'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : lvl === 'IChO'
                      ? 'bg-purple-600 text-white shadow-xs'
                      : 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {lvl === 'ALL' ? 'Semua' : lvl === 'SMA' ? 'SMA' : lvl}
              </button>
            );
          })}
        </div>

        {/* Sub-tier Tingkat SMA (Mudah, Sedang, Sulit) */}
        {(filter.difficulty === 'SMA' || filter.difficulty?.startsWith('SMA-')) && (
          <div className="flex flex-wrap items-center gap-1.5 p-2 bg-teal-50/70 border border-teal-200/80 rounded-xl text-xs">
            <span className="text-[11px] font-bold text-teal-900">Tier SMA:</span>
            {(['SMA', 'SMA-Mudah', 'SMA-Sedang', 'SMA-Sulit'] as const).map((subLvl) => {
              const isSubSelected = filter.difficulty === subLvl;
              const subLabel = subLvl === 'SMA' ? 'Semua SMA' : subLvl.replace('SMA-', '');
              return (
                <button
                  key={subLvl}
                  type="button"
                  onClick={() => handleDifficultySelect(subLvl as QuestionDifficulty)}
                  className={`px-2 py-0.5 rounded-md text-[11px] font-bold transition-all ${
                    isSubSelected
                      ? 'bg-teal-700 text-white shadow-2xs'
                      : 'bg-white text-teal-800 hover:bg-teal-100 border border-teal-200'
                  }`}
                >
                  {subLabel}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Curriculum Switcher (Opsi 1) */}
      <div>
        <label className="text-xs font-semibold text-slate-700 block mb-2">Jalur Kurikulum:</label>
        <div className="flex bg-slate-100 p-1 rounded-xl">
          <button
            type="button"
            onClick={() => onChange({ ...filter, curriculum: 'ALL' })}
            className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
              (!filter.curriculum || filter.curriculum === 'ALL') ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            🎓 Semua
          </button>
          <button
            type="button"
            onClick={() => onChange({ ...filter, curriculum: 'SMA', pillarNumber: 'ALL' })}
            className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
              filter.curriculum === 'SMA' ? 'bg-white text-teal-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            📚 Kimia SMA
          </button>
          <button
            type="button"
            onClick={() => onChange({ ...filter, curriculum: 'OSN', smaTopicNumber: 'ALL', smaGrade: 'ALL' })}
            className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
              filter.curriculum === 'OSN' ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            🏆 Silabus OSN
          </button>
        </div>
      </div>

      {/* Topik Kurikulum SMA */}
      {(!filter.curriculum || filter.curriculum === 'ALL' || filter.curriculum === 'SMA') && (
        <div className="mb-2">
          <label className="text-xs font-semibold text-slate-700 block mb-1.5">Topik Kimia SMA:</label>
          {filter.curriculum === 'SMA' && (
             <div className="flex gap-1.5 mb-2">
                {(['ALL', 'Kelas 10', 'Kelas 11', 'Kelas 12'] as const).map(grade => (
                  <button
                    key={grade}
                    onClick={() => onChange({ ...filter, smaGrade: grade as any })}
                    className={`px-2 py-1 text-[10px] font-bold rounded-md transition-all ${
                      (filter.smaGrade || 'ALL') === grade
                        ? 'bg-teal-600 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {grade === 'ALL' ? 'Semua Kelas' : grade}
                  </button>
                ))}
             </div>
          )}
          <select
            value={filter.smaTopicNumber || 'ALL'}
            onChange={(e) => onChange({ ...filter, smaTopicNumber: e.target.value === 'ALL' ? 'ALL' : Number(e.target.value) })}
            className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/30 text-slate-800"
          >
            <option value="ALL">Semua 16 Topik SMA</option>
            {SMA_MATERIALS.filter(m => filter.smaGrade && filter.smaGrade !== 'ALL' ? m.grade === filter.smaGrade : true).map((m) => (
              <option key={m.topic_number} value={m.topic_number}>
                Topik #{m.topic_number}: {m.title}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Topik Silabus OSN (10 Pilar) */}
      {(!filter.curriculum || filter.curriculum === 'ALL' || filter.curriculum === 'OSN') && (
        <div>
          <label className="text-xs font-semibold text-slate-700 block mb-1.5">Pilar Silabus OSN:</label>
          <select
            value={filter.pillarNumber || 'ALL'}
            onChange={handlePillarChange}
            className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 text-slate-800"
          >
            <option value="ALL">Semua 10 Pilar Silabus</option>
            {PILLARS_DATA.map((p) => (
              <option key={p.pillar_number} value={p.pillar_number}>
                Pilar #{p.pillar_number}: {p.title}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Gaya Soal (Question Style) */}
      <div>
        <label className="text-xs font-semibold text-slate-700 block mb-1.5">Tipe / Format Soal:</label>
        <select
          value={filter.questionStyle || 'ALL'}
          onChange={handleStyleChange}
          className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 text-slate-800"
        >
          <option value="ALL">Semua Format Soal</option>
          <option value="structured">Soal Esai Terstruktur (a, b, c)</option>
          <option value="calculation">Kalkulasi Numerik & Stoikiometri</option>
          <option value="mcq">Pilihan Ganda Berbobot</option>
          <option value="data_analysis">Analisis Data Eksperimen / Tabel</option>
        </select>
      </div>

      {/* Bookmark Toggle */}
      <div className="pt-1">
        <button
          onClick={handleBookmarkToggle}
          className={`w-full py-2 px-3 rounded-xl border flex items-center justify-between text-xs font-semibold transition-all ${
            filter.bookmarkedOnly
              ? 'bg-amber-50 border-amber-300 text-amber-900 shadow-2xs'
              : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
          }`}
        >
          <div className="flex items-center gap-2">
            <Bookmark
              className={`w-4 h-4 ${
                filter.bookmarkedOnly ? 'fill-amber-500 text-amber-500' : 'text-slate-400'
              }`}
            />
            <span>Hanya Soal Ditandai (Favorit)</span>
          </div>
          {filter.bookmarkedOnly && (
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
          )}
        </button>
      </div>

      {/* Custom Tag Chips */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5 text-slate-400" />
            <span>Tag Guru & Kurasi:</span>
          </label>
          <button
            type="button"
            onClick={() => setShowTagInput(!showTagInput)}
            className="text-[11px] text-emerald-600 hover:text-emerald-700 font-semibold flex items-center gap-0.5"
          >
            <Plus className="w-3 h-3" />
            <span>Tag Baru</span>
          </button>
        </div>

        {showTagInput && (
          <form onSubmit={handleAddGlobalTag} className="flex gap-1.5 mb-2.5">
            <input
              type="text"
              placeholder="#tag-baru..."
              value={newTagInput}
              onChange={(e) => setNewTagInput(e.target.value)}
              className="flex-1 px-2.5 py-1 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500"
              autoFocus
            />
            <button
              type="submit"
              className="px-2.5 py-1 bg-emerald-600 text-white rounded-lg text-xs font-medium hover:bg-emerald-700"
            >
              Tambah
            </button>
          </form>
        )}

        <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pr-1">
          {availableTags.slice(0, 12).map((tag) => {
            const isSelected = filter.selectedTags?.includes(tag);
            return (
              <button
                key={tag}
                type="button"
                onClick={() => handleTagToggle(tag)}
                className={`px-2 py-1 rounded-md text-[11px] font-mono transition-all ${
                  isSelected
                    ? 'bg-emerald-600 text-white font-bold shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200/60'
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Total Found Indicator */}
      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span>Hasil Penyaringan:</span>
        <span className="font-bold text-slate-900 font-mono">{totalFound} Butir Soal</span>
      </div>
    </div>
  );
};
