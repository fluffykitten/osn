import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { 
  X, 
  RotateCw, 
  ChevronLeft, 
  ChevronRight, 
  Shuffle, 
  CheckCircle2, 
  HelpCircle, 
  Sparkles, 
  Trophy, 
  BookOpen, 
  Volume2, 
  Layers,
  RotateCcw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { KaTeXRenderer } from '../common/KaTeXRenderer';

export interface FlashcardItem {
  id: string;
  conceptTag: string;
  conceptTitle: string;
  type: 'prerequisite' | 'core_concept' | 'worked_example';
  front: {
    badge: string;
    prompt: string;
    hint?: string;
  };
  back: {
    summary: string;
    keyFormulas?: string[];
    explanation?: string;
  };
}

interface MaterialFlashcardModalProps {
  isOpen: boolean;
  onClose: () => void;
  materialTitle: string;
  cards: FlashcardItem[];
}

export const MaterialFlashcardModal: React.FC<MaterialFlashcardModalProps> = ({
  isOpen,
  onClose,
  materialTitle,
  cards: initialCards,
}) => {
  const [filterType, setFilterType] = useState<'all' | 'prerequisite' | 'core_concept' | 'worked_example'>('all');
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [masteredMap, setMasteredMap] = useState<Record<string, boolean>>({});
  const [shuffled, setShuffled] = useState(false);
  const [activeDeck, setActiveDeck] = useState<FlashcardItem[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  // Filter cards based on section
  const filteredBaseCards = useMemo(() => {
    if (filterType === 'all') return initialCards;
    return initialCards.filter((c) => c.type === filterType);
  }, [initialCards, filterType]);

  // Initialize or re-shuffle deck
  useEffect(() => {
    if (isOpen) {
      setIsFlipped(false);
      setCurrentIndex(0);
      setIsFinished(false);
      if (shuffled) {
        setActiveDeck([...filteredBaseCards].sort(() => Math.random() - 0.5));
      } else {
        setActiveDeck(filteredBaseCards);
      }
    }
  }, [isOpen, filterType, shuffled, filteredBaseCards]);

  // Current Card
  const currentCard = activeDeck[currentIndex];
  const totalCards = activeDeck.length;
  const masteredCount = useMemo(() => {
    return activeDeck.filter((c) => masteredMap[c.id] === true).length;
  }, [activeDeck, masteredMap]);

  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;
    const diffX = e.changedTouches[0].clientX - touchStartXRef.current;
    const diffY = e.changedTouches[0].clientY - touchStartYRef.current;
    touchStartXRef.current = null;
    touchStartYRef.current = null;

    // Pastikan swipe horizontal lebih dominan daripada vertikal dan melewati ambang 45px
    if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY) * 1.3) {
      if (diffX < 0) {
        // Geser ke kiri -> Kartu berikutnya
        handleNext();
      } else {
        // Geser ke kanan -> Kartu sebelumnya
        handlePrev();
      }
    }
  };

  const handleNext = useCallback(() => {
    if (currentIndex < totalCards - 1) {
      setIsFlipped(false);
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [currentIndex, totalCards]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setIsFlipped(false);
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleMarkMastery = (understood: boolean) => {
    if (!currentCard) return;
    setMasteredMap((prev) => ({
      ...prev,
      [currentCard.id]: understood,
    }));
    handleNext();
  };

  const handleRestart = () => {
    setIsFlipped(false);
    setCurrentIndex(0);
    setIsFinished(false);
    if (shuffled) {
      setActiveDeck([...filteredBaseCards].sort(() => Math.random() - 0.5));
    }
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault();
        handleFlip();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#D3D3D3] overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Header */}
        <div className="px-5 py-4 border-b border-[#D3D3D3] flex items-center justify-between bg-[#FFFFF0]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#708090] text-[#FFFFF0] shadow-2xs border border-[#B0C4DE]/60">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-[#2D3748]">
                  Flashcard Kilat
                </h3>
                <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-[#B0C4DE]/30 text-[#708090] border border-[#B0C4DE]/60">
                  {totalCards > 0 ? `${currentIndex + 1} / ${totalCards}` : '0 Kartu'}
                </span>
              </div>
              <p className="text-xs text-[#708090] line-clamp-1 font-medium">
                {materialTitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShuffled((prev) => !prev)}
              title={shuffled ? 'Mode Acak Aktif' : 'Acak Urutan Kartu'}
              className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                shuffled
                  ? 'bg-[#B0C4DE]/40 border-[#B0C4DE] text-[#2D3748] font-bold'
                  : 'border-[#D3D3D3] text-[#708090] hover:text-[#2D3748] hover:bg-[#F0F8FF]'
              }`}
            >
              <Shuffle className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-[#2D3748] hover:bg-[#F0F8FF] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="px-5 py-2.5 border-b border-[#D3D3D3] bg-[#F8FAFC] flex items-center justify-between gap-2 overflow-x-auto text-xs">
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={() => setFilterType('all')}
              className={`px-3 py-1 rounded-lg transition-colors font-semibold cursor-pointer ${
                filterType === 'all'
                  ? 'bg-[#708090] text-[#FFFFF0] shadow-2xs'
                  : 'bg-white text-[#708090] border border-[#D3D3D3] hover:bg-[#F0F8FF]'
              }`}
            >
              Semua Bagian
            </button>
            <button
              type="button"
              onClick={() => setFilterType('core_concept')}
              className={`px-3 py-1 rounded-lg transition-colors font-semibold cursor-pointer ${
                filterType === 'core_concept'
                  ? 'bg-[#708090] text-[#FFFFF0] shadow-2xs'
                  : 'bg-white text-[#708090] border border-[#D3D3D3] hover:bg-[#F0F8FF]'
              }`}
            >
              Konsep Inti
            </button>
            <button
              type="button"
              onClick={() => setFilterType('prerequisite')}
              className={`px-3 py-1 rounded-lg transition-colors font-semibold cursor-pointer ${
                filterType === 'prerequisite'
                  ? 'bg-[#708090] text-[#FFFFF0] shadow-2xs'
                  : 'bg-white text-[#708090] border border-[#D3D3D3] hover:bg-[#F0F8FF]'
              }`}
            >
              Prasyarat
            </button>
            <button
              type="button"
              onClick={() => setFilterType('worked_example')}
              className={`px-3 py-1 rounded-lg transition-colors font-semibold cursor-pointer ${
                filterType === 'worked_example'
                  ? 'bg-[#708090] text-[#FFFFF0] shadow-2xs'
                  : 'bg-white text-[#708090] border border-[#D3D3D3] hover:bg-[#F0F8FF]'
              }`}
            >
              Contoh Soal
            </button>
          </div>

          <div className="text-[11px] text-[#708090] font-semibold shrink-0 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Kuasai: {masteredCount}/{totalCards}</span>
          </div>
        </div>

        {/* Card Arena */}
        <div className="p-5 sm:p-8 flex-1 flex flex-col justify-center items-center overflow-y-auto bg-[#F8FAFC]">
          {totalCards === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="w-12 h-12 text-[#708090]/50 mx-auto mb-3" />
              <p className="text-sm font-semibold text-[#2D3748]">
                Tidak ada kartu dalam filter ini.
              </p>
              <button
                type="button"
                onClick={() => setFilterType('all')}
                className="mt-3 text-xs text-[#708090] font-bold hover:underline cursor-pointer"
              >
                Tampilkan Semua Kartu
              </button>
            </div>
          ) : isFinished ? (
            /* Finished Summary View */
            <div className="w-full text-center py-8 px-4 animate-in zoom-in-95 duration-200">
              <div className="w-20 h-20 rounded-3xl bg-amber-500/10 text-amber-600 border border-amber-300 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Trophy className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-[#2D3748] mb-2">
                Sesi Flashcard Selesai!
              </h3>
              <p className="text-sm text-[#708090] max-w-md mx-auto mb-6 font-medium">
                Kamu telah meninjau seluruh {totalCards} kartu kilat untuk materi ini. Tingkat penguasaanmu:
              </p>

              <div className="inline-flex items-center gap-6 px-6 py-4 rounded-2xl bg-[#FFFFF0] border border-[#B0C4DE] mb-8 shadow-xs">
                <div>
                  <div className="text-2xl font-black text-emerald-600">
                    {masteredCount}
                  </div>
                  <div className="text-[11px] font-bold text-[#708090] uppercase tracking-wider">
                    Sudah Paham
                  </div>
                </div>
                <div className="w-px h-8 bg-[#D3D3D3]" />
                <div>
                  <div className="text-2xl font-black text-amber-600">
                    {totalCards - masteredCount}
                  </div>
                  <div className="text-[11px] font-bold text-[#708090] uppercase tracking-wider">
                    Perlu Ulangi
                  </div>
                </div>
                <div className="w-px h-8 bg-[#D3D3D3]" />
                <div>
                  <div className="text-2xl font-black text-[#708090]">
                    {Math.round((masteredCount / totalCards) * 100)}%
                  </div>
                  <div className="text-[11px] font-bold text-[#708090] uppercase tracking-wider">
                    Skor Akurasi
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleRestart}
                  className="px-5 py-2.5 rounded-xl bg-[#708090] hover:bg-[#5C6D7D] text-[#FFFFF0] font-bold text-sm shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" /> Ulangi Sesi Ini
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl border border-[#D3D3D3] text-[#708090] font-bold text-sm hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Tutup Flashcard
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Flip Card */
            <div className="w-full max-w-lg flex flex-col items-center">
              
              {/* Progress Bar */}
              <div className="w-full bg-[#B0C4DE]/25 rounded-full h-2 mb-5 overflow-hidden border border-[#B0C4DE]/40">
                <div
                  className="bg-[#708090] h-full transition-all duration-300 rounded-full"
                  style={{ width: `${((currentIndex + 1) / totalCards) * 100}%` }}
                />
              </div>

              {/* 3D Flip Card Container with Touch Swipe Support */}
              <div
                onClick={handleFlip}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                className="w-full min-h-[300px] sm:min-h-[340px] cursor-pointer perspective-1000 select-none group touch-pan-y"
              >
                <div
                  className={`relative w-full h-full min-h-[300px] sm:min-h-[340px] rounded-3xl border-2 transition-all duration-500 preserve-3d shadow-xl p-6 sm:p-8 flex flex-col justify-between ${
                    isFlipped
                      ? 'bg-gradient-to-br from-[#596A7A] to-[#708090] text-[#FFFFF0] border-[#B0C4DE]/60 shadow-[#596A7A]/20'
                      : 'bg-white border-[#B0C4DE] text-[#2D3748] shadow-md'
                  }`}
                >
                  {/* Card Front / Back Indicator */}
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span
                      className={`px-3 py-1 rounded-full font-bold uppercase tracking-wider text-[10px] ${
                        isFlipped
                          ? 'bg-white/20 text-[#FFFFF0] border border-white/30'
                          : 'bg-[#B0C4DE]/30 text-[#708090] border border-[#B0C4DE]/60'
                      }`}
                    >
                      {isFlipped ? '💡 Jawaban & Ringkasan' : `🎯 ${currentCard?.front.badge || 'Pertanyaan'}`}
                    </span>

                    <span
                      className={`flex items-center gap-1 text-[11px] font-medium ${
                        isFlipped ? 'text-[#F0F8FF]' : 'text-slate-400'
                      }`}
                    >
                      <RotateCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
                      Klik untuk balik
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="my-auto py-2">
                    {!isFlipped ? (
                      <div>
                        <div className="text-xs font-semibold text-[#708090] mb-1">
                          #{currentCard?.conceptTag} • {currentCard?.conceptTitle}
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold leading-relaxed text-[#2D3748]">
                          {currentCard?.front.prompt}
                        </h4>
                        {currentCard?.front.hint && (
                          <div className="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                            <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                            <span>
                              <strong>Petunjuk:</strong> {currentCard.front.hint}
                            </span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="text-sm sm:text-base leading-relaxed text-[#FFFFF0] font-normal">
                          <KaTeXRenderer content={currentCard?.back.summary || ''} />
                        </div>

                        {/* Key Formulas if any */}
                        {currentCard?.back.keyFormulas && currentCard.back.keyFormulas.length > 0 && (
                          <div className="p-3.5 rounded-2xl bg-black/25 border border-white/20 space-y-1.5">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#B0C4DE] block">
                              Rumus Kunci:
                            </span>
                            <div className="space-y-1">
                              {currentCard.back.keyFormulas.map((formula, fIdx) => (
                                <div key={fIdx} className="text-sm font-mono text-emerald-300 py-0.5">
                                  <KaTeXRenderer content={`$$${formula}$$`} />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {currentCard?.back.explanation && (
                          <p className="text-xs text-[#F0F8FF]/90 leading-relaxed italic">
                            {currentCard.back.explanation}
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Card Bottom Tag */}
                  <div
                    className={`pt-3 border-t text-[11px] flex items-center justify-between ${
                      isFlipped
                        ? 'border-white/20 text-[#F0F8FF]/80'
                        : 'border-[#D3D3D3] text-[#708090]'
                    }`}
                  >
                    <span>Kartu {currentIndex + 1} dari {totalCards}</span>
                    <span className="hidden sm:inline">Tekan [Spasi] untuk balik</span>
                    <span className="sm:hidden text-[10px] text-[#708090]">Geser ↔ untuk kartu lain</span>
                  </div>
                </div>
              </div>

              {/* Assessment / Mastery Action Buttons */}
              <div className="w-full mt-6 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleMarkMastery(false)}
                  className="py-3 px-4 rounded-2xl border border-rose-300 bg-rose-50 hover:bg-rose-100 text-rose-800 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-2xs active:scale-95 cursor-pointer"
                >
                  <HelpCircle className="w-4 h-4 text-rose-600" />
                  <span>Belum Paham / Ulangi</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleMarkMastery(true)}
                  className="py-3 px-4 rounded-2xl border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-2xs active:scale-95 cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Sudah Paham!</span>
                </button>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center justify-between w-full mt-4 px-2 text-xs text-[#708090]">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="inline-flex items-center gap-1 font-semibold hover:text-[#2D3748] disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" /> Kartu Sebelumnya
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-1 font-semibold hover:text-[#2D3748] transition-colors cursor-pointer"
                >
                  {currentIndex === totalCards - 1 ? 'Selesaikan' : 'Kartu Berikutnya'}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
