import React, { useState } from 'react';
import { BENCHMARK_QUESTIONS, PILLARS_DATA } from '../../data/syllabusData';
import { findConceptByTag } from '../../data/materialsData';
import { KaTeXRenderer } from '../../components/common/KaTeXRenderer';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Filter, BookOpen, Zap, Tag, ArrowRight, X, ExternalLink } from 'lucide-react';
import type { QuestionDifficulty } from '../../types/database';

export const PracticeBank: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPillar, setSelectedPillar] = useState<number | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<QuestionDifficulty | 'all'>('all');

  const POPULAR_TAGS = [
    'aturan-slater',
    'vsepr',
    'gas-ideal',
    'termodinamika',
    'larutan-penyangga',
    'keadaan-tunak-ssa',
    'elektrokimia',
    'teori-medan-kristal',
    'hukum-lambert-beer',
    'stereokimia',
  ];

  const filteredQuestions = BENCHMARK_QUESTIONS.filter((q) => {
    if (selectedPillar !== 'all' && q.pillar_number !== selectedPillar) return false;
    if (selectedDifficulty !== 'all' && q.difficulty !== selectedDifficulty) return false;
    if (searchQuery) {
      const qLower = searchQuery.toLowerCase().replace(/^#/, '');
      const matchTitle = q.title.toLowerCase().includes(qLower);
      const matchSub = q.subtopic.toLowerCase().includes(qLower);
      const matchTags = q.tags?.some((t) => t.toLowerCase().includes(qLower));
      if (!matchTitle && !matchSub && !matchTags) return false;
    }
    return true;
  });

  const handleTagClick = (tag: string) => {
    const cleanTag = tag.replace(/^#/, '');
    setSearchQuery((prev) => (prev.toLowerCase() === cleanTag.toLowerCase() ? '' : cleanTag));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded uppercase font-mono">
              Question Bank
            </span>
            <span className="text-xs text-slate-500">Latihan Mandiri & Eksplorasi Soal</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
            Bank Soal Terkurasi OSN Kimia
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl">
            Kumpulan soal olimpiade dari tingkat Kabupaten, Provinsi, Nasional, hingga IChO dilengkapi penalaran langkah, formula interaktif, dan integrasi multi-tag materi.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Search Query */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari konsep, judul, atau tag (#nernst, #vsepr)..."
              className="w-full pl-9 pr-8 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Pillar Selector */}
          <div>
            <select
              value={selectedPillar}
              onChange={(e) => setSelectedPillar(e.target.value === 'all' ? 'all' : Number(e.target.value))}
              className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-slate-700"
            >
              <option value="all">Semua Topik Silabus (1 - 10)</option>
              {PILLARS_DATA.map((p) => (
                <option key={p.id} value={p.pillar_number}>
                  Topik #{p.pillar_number}: {p.title.split('&')[0]}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty Filter */}
          <div>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value as any)}
              className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-slate-700"
            >
              <option value="all">Semua Tingkat Kesulitan</option>
              <option value="OSK">Tingkat OSK (Kabupaten/Kota)</option>
              <option value="OSP">Tingkat OSP (Provinsi)</option>
              <option value="OSN">Tingkat OSN (Nasional)</option>
              <option value="IChO">Tingkat IChO (Internasional)</option>
            </select>
          </div>
        </div>

        {/* Quick Filter: Tag Konsep Silabus Populer */}
        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-1.5 text-xs">
          <span className="text-[11px] font-semibold text-slate-500 mr-1 flex items-center gap-1">
            <Tag className="w-3 h-3 text-slate-400" />
            <span>Tag Konsep Populer:</span>
          </span>
          {POPULAR_TAGS.map((t) => {
            const isActive = searchQuery.toLowerCase().replace(/^#/, '') === t.toLowerCase();
            return (
              <button
                key={t}
                type="button"
                onClick={() => handleTagClick(t)}
                className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-mono transition-all cursor-pointer ${
                  isActive
                    ? 'bg-emerald-600 text-white font-bold shadow-2xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                <span>#{t}</span>
              </button>
            );
          })}
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="text-[11px] text-rose-600 hover:underline ml-2 font-medium"
            >
              Reset Filter
            </button>
          )}
        </div>
      </div>

      {/* Questions Results List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-500 font-semibold px-1">
          <span>Menampilkan {filteredQuestions.length} Butir Soal Terstandarisasi</span>
          {(selectedPillar !== 'all' || selectedDifficulty !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedPillar('all');
                setSelectedDifficulty('all');
                setSearchQuery('');
              }}
              className="text-emerald-700 hover:underline text-[11px]"
            >
              Tampilkan Semua Soal
            </button>
          )}
        </div>

        {filteredQuestions.map((q) => (
          <div
            key={q.id}
            className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs hover:border-slate-300 transition-all space-y-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 bg-slate-900 text-white text-[10px] font-bold rounded font-mono">
                  Topik #{q.pillar_number}
                </span>
                <span className="px-2.5 py-0.5 bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-bold rounded">
                  {q.difficulty}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display">
                  {q.title}
                </h3>
              </div>

              <span className="text-[11px] text-slate-500 font-medium">{q.subtopic}</span>
            </div>

            {/* Question Excerpt with KaTeX */}
            <div className="text-xs sm:text-sm text-slate-700 line-clamp-3 leading-relaxed">
              <KaTeXRenderer content={q.question_text.substring(0, 320) + '...'} />
            </div>

            {/* Footer tags and action */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[10px] text-slate-400 font-semibold mr-0.5">Tag Konsep:</span>
                {q.tags?.map((t) => {
                  const match = findConceptByTag(t);
                  const targetTopic = match ? match.material.topic_number : q.pillar_number;
                  const targetTag = match ? match.block.tag : t;

                  return (
                    <div
                      key={t}
                      className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-md text-[10px] font-mono text-slate-600 transition-colors group"
                    >
                      <button
                        type="button"
                        onClick={() => handleTagClick(t)}
                        title={`Filter soal untuk tag #${t}`}
                        className="hover:text-emerald-700 hover:font-bold transition-colors"
                      >
                        #{t}
                      </button>
                      <button
                        type="button"
                        onClick={() => navigate(`/materi/${targetTopic}?tag=${targetTag}`)}
                        title={`Buka pembahasan konsep #${t} di Database Materi (Topik ${targetTopic})`}
                        className="text-slate-400 group-hover:text-sky-600 transition-colors cursor-pointer"
                      >
                        <ExternalLink className="w-2.5 h-2.5" />
                      </button>
                    </div>
                  );
                })}
              </div>

              <Link
                to={`/worksheet/static_module/${q.id}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-all shadow-xs hover:scale-102"
              >
                <span>Kerjakan di Lembar Kerja</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

