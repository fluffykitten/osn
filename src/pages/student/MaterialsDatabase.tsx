/**
 * MaterialsDatabase.tsx
 * Halaman Dual Database Materi Sains Kimia:
 * 1. Database Materi OSN Kimia (10 Topik Standar Puspresnas & IChO)
 * 2. Database Materi Sains Kimia Dasar SMA (16 Modul Kurikulum Merdeka Fase E & F / K13)
 * Dilengkapi alur 3 tahap (Prasyarat, Konsep Inti, Contoh Soal), Segmented Tab Switcher,
 * Jalur eskalasi antardatabase, Mobile Bottom Sheet TOC, dan auto-save reading progress.
 */

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useParams, useNavigate, useSearchParams, Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { OSN_MATERIALS, findConceptByTag, type MaterialItem } from '../../data/materialsData';
import { SMA_MATERIALS, type SmaMaterialItem } from '../../data/smaMaterialsData';
import { KaTeXRenderer } from '../../components/common/KaTeXRenderer';
import { MobileTableOfContents } from '../../components/common/MobileTableOfContents';
import { TopicSvgArt } from '../../components/materials/TopicSvgArt';
import {
  Search,
  Clock,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  Layers,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Tag,
  CheckCircle2,
  ExternalLink,
  Atom,
  Lightbulb,
  GraduationCap,
  FileCheck,
  BookOpen,
  Sparkles,
  PanelRightClose,
  PanelRightOpen,
} from 'lucide-react';

export const MaterialsDatabase: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const [searchParams] = useSearchParams();
  const activeTag = searchParams.get('tag');
  const dbParam = searchParams.get('db'); // 'osn' | 'sma'
  const navigate = useNavigate();

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [selectedGrade, setSelectedGrade] = useState<'Semua' | 'Kelas 10' | 'Kelas 11' | 'Kelas 12'>('Semua');

  // Tag Cloud Collapse / Expand in Reader Header
  const [showAllTags, setShowAllTags] = useState(false);

  // Back to Top FAB Visibility
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Accordion per Concept Block State (Set of tags that are collapsed)
  const [collapsedBlocks, setCollapsedBlocks] = useState<Set<string>>(new Set());

  // Desktop Sticky Sidebar Visibility (Hide / Show Alur Pembelajaran)
  const [isSidebarHidden, setIsSidebarHidden] = useState<boolean>(() => {
    try {
      return localStorage.getItem('osn_reading_sidebar_hidden') === 'true';
    } catch {
      return false;
    }
  });

  const toggleSidebar = () => {
    setIsSidebarHidden((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('osn_reading_sidebar_hidden', String(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  // Determine initial database (OSN vs SMA)
  const initialDb = useMemo<'osn' | 'sma'>(() => {
    if (dbParam === 'sma') return 'sma';
    if (dbParam === 'osn') return 'osn';
    if (id) {
      if (id.startsWith('sma-')) return 'sma';
      const num = parseInt(id, 10);
      if (!isNaN(num) && num >= 101 && num <= 116) return 'sma';
      if (SMA_MATERIALS.some((m) => m.slug === id)) return 'sma';
    }
    try {
      const saved = localStorage.getItem('osn_active_material_db');
      if (saved === 'sma' || saved === 'osn') return saved;
    } catch {
      // ignore
    }
    return 'osn';
  }, [id, dbParam]);

  const [activeDatabase, setActiveDatabase] = useState<'osn' | 'sma'>(initialDb);

  // Synchronize database switcher with URL changes
  useEffect(() => {
    if (dbParam === 'sma' || dbParam === 'osn') {
      setActiveDatabase(dbParam);
    } else if (id) {
      if (id.startsWith('sma-')) {
        setActiveDatabase('sma');
      } else {
        const num = parseInt(id, 10);
        if (!isNaN(num) && num >= 101 && num <= 116) {
          setActiveDatabase('sma');
        }
      }
    }
  }, [id, dbParam]);

  // Database switch handler
  const handleDatabaseSwitch = (newDb: 'osn' | 'sma') => {
    setActiveDatabase(newDb);
    setSelectedCategory('Semua');
    setSelectedGrade('Semua');
    setSearchQuery('');
    try {
      localStorage.setItem('osn_active_material_db', newDb);
    } catch {
      // ignore
    }
    navigate(`/materi?db=${newDb}`);
  };

  // Progress Tracking: OSN completed materials
  const [completedOsn, setCompletedOsn] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('osn_completed_materials');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Progress Tracking: SMA completed materials
  const [completedSma, setCompletedSma] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('sma_completed_materials');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Scroll Position & Reading Progress Tracking in localStorage
  type ScrollProgressMap = Record<number, { scrollY: number; progressPercent: number; updatedAt: number }>;

  const [scrollPositionsOsn, setScrollPositionsOsn] = useState<ScrollProgressMap>(() => {
    try {
      const saved = localStorage.getItem('osn_material_scroll_positions');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [scrollPositionsSma, setScrollPositionsSma] = useState<ScrollProgressMap>(() => {
    try {
      const saved = localStorage.getItem('sma_material_scroll_positions');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [showResumeToast, setShowResumeToast] = useState<{ percent: number } | null>(null);

  // Cari materi aktif jika ada parameter :id (bisa nomor topik 1, atau slug, atau sma-1, atau 101)
  const activeMaterial = useMemo<MaterialItem | SmaMaterialItem | null>(() => {
    if (!id) return null;

    if (id.startsWith('sma-')) {
      const sub = id.replace('sma-', '');
      const num = parseInt(sub, 10);
      if (!isNaN(num)) {
        return SMA_MATERIALS.find((m) => m.topic_number === num || m.id === num) || null;
      }
      return SMA_MATERIALS.find((m) => m.slug === sub) || null;
    }

    const numericId = parseInt(id, 10);
    if (!isNaN(numericId)) {
      if (numericId >= 101 && numericId <= 116) {
        return SMA_MATERIALS.find((m) => m.id === numericId || m.topic_number === numericId) || null;
      }
      if (activeDatabase === 'sma' || dbParam === 'sma') {
        const matchSma = SMA_MATERIALS.find((m) => m.topic_number === numericId || m.id === numericId);
        if (matchSma) return matchSma;
      }
      return (
        OSN_MATERIALS.find((m) => m.topic_number === numericId || m.id === numericId) ||
        SMA_MATERIALS.find((m) => m.topic_number === numericId || m.id === numericId) ||
        null
      );
    }

    const foundOsn = OSN_MATERIALS.find((m) => m.slug === id);
    if (foundOsn) return foundOsn;
    const foundSma = SMA_MATERIALS.find((m) => m.slug === id);
    if (foundSma) return foundSma;
    return null;
  }, [id, activeDatabase, dbParam]);

  const isCurrentSma = Boolean(activeMaterial && 'grade' in activeMaterial);

  // Toggle complete for a material
  const toggleComplete = (materialId: number) => {
    const isSma = isCurrentSma || materialId >= 101;
    const currentCompleted = isSma ? completedSma : completedOsn;
    const isAlreadyCompleted = currentCompleted.includes(materialId);
    const setCompleted = isSma ? setCompletedSma : setCompletedOsn;
    const setScroll = isSma ? setScrollPositionsSma : setScrollPositionsOsn;
    const storageKey = isSma ? 'sma_completed_materials' : 'osn_completed_materials';
    const scrollKey = isSma ? 'sma_material_scroll_positions' : 'osn_material_scroll_positions';

    setCompleted((prev) => {
      let next: number[];
      if (prev.includes(materialId)) {
        next = prev.filter((item) => item !== materialId);
      } else {
        next = [...prev, materialId];
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
        });
      }
      try {
        localStorage.setItem(storageKey, JSON.stringify(next));
      } catch {
        // ignore storage errors
      }
      return next;
    });

    // Update scroll progress to 100% if marked as completed
    setScroll((prev) => {
      const next: ScrollProgressMap = {
        ...prev,
        [materialId]: {
          scrollY: prev[materialId]?.scrollY || 0,
          progressPercent: isAlreadyCompleted ? Math.min(prev[materialId]?.progressPercent || 0, 75) : 100,
          updatedAt: Date.now(),
        },
      };
      try {
        localStorage.setItem(scrollKey, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  // Auto-restore previous reading scroll position on topic change or initial load
  useEffect(() => {
    if (!activeMaterial) return;
    if (activeTag) return; // If deep-linking to a specific concept tag, let scrollToConcept handle it

    const savedPos = isCurrentSma
      ? scrollPositionsSma[activeMaterial.id]
      : scrollPositionsOsn[activeMaterial.id];

    let restoreTimer: ReturnType<typeof setTimeout> | null = null;
    let toastTimer: ReturnType<typeof setTimeout> | null = null;

    if (savedPos && savedPos.scrollY > 120) {
      // Delay slightly to let KaTeX formulas and DOM layout settle smoothly
      restoreTimer = setTimeout(() => {
        window.scrollTo({ top: savedPos.scrollY, behavior: 'smooth' });
        setShowResumeToast({ percent: savedPos.progressPercent });
      }, 250);

      toastTimer = setTimeout(() => {
        setShowResumeToast(null);
      }, 4500);
    } else {
      window.scrollTo(0, 0);
    }

    return () => {
      if (restoreTimer) clearTimeout(restoreTimer);
      if (toastTimer) clearTimeout(toastTimer);
    };
  }, [activeMaterial?.id, isCurrentSma]);

  // Reset tag collapse state on topic change
  useEffect(() => {
    setShowAllTags(false);
  }, [activeMaterial?.id]);

  // Back-to-Top scroll listener
  useEffect(() => {
    const handleFabScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleFabScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleFabScroll);
  }, []);

  // Auto-save scroll position & calculate read depth percentage continuously
  useEffect(() => {
    if (!activeMaterial) return;

    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const handleScrollProgress = () => {
      if (isClickScrollingRef.current) return;

      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const maxScroll = documentHeight - windowHeight;

        const currentPercent =
          maxScroll > 0 ? Math.min(100, Math.max(0, Math.round((scrollY / maxScroll) * 100))) : 0;

        const setCompleted = isCurrentSma ? setCompletedSma : setCompletedOsn;
        const compStorageKey = isCurrentSma ? 'sma_completed_materials' : 'osn_completed_materials';
        const setScroll = isCurrentSma ? setScrollPositionsSma : setScrollPositionsOsn;
        const scrollStorageKey = isCurrentSma ? 'sma_material_scroll_positions' : 'osn_material_scroll_positions';

        // Auto-mark as completed when reaching >= 82% depth
        if (currentPercent >= 82) {
          setCompleted((prev) => {
            if (!prev.includes(activeMaterial.id)) {
              const next = [...prev, activeMaterial.id];
              try {
                localStorage.setItem(compStorageKey, JSON.stringify(next));
              } catch {
                // ignore
              }
              return next;
            }
            return prev;
          });
        }

        // Save current scrollY and update highest progressPercent
        setScroll((prev) => {
          const prevItem = prev[activeMaterial.id];
          const highestPercent = Math.max(currentPercent, prevItem?.progressPercent || 0);

          const next: ScrollProgressMap = {
            ...prev,
            [activeMaterial.id]: {
              scrollY: Math.round(scrollY),
              progressPercent: highestPercent,
              updatedAt: Date.now(),
            },
          };
          try {
            localStorage.setItem(scrollStorageKey, JSON.stringify(next));
          } catch {
            // ignore
          }
          return next;
        });
      }, 250);
    };

    window.addEventListener('scroll', handleScrollProgress, { passive: true });

    // Save on beforeunload for instant tab closing
    const handleBeforeUnload = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentPercent =
        maxScroll > 0 ? Math.min(100, Math.max(0, Math.round((scrollY / maxScroll) * 100))) : 0;

      const scrollStorageKey = isCurrentSma ? 'sma_material_scroll_positions' : 'osn_material_scroll_positions';
      try {
        const saved = localStorage.getItem(scrollStorageKey);
        const current: ScrollProgressMap = saved ? JSON.parse(saved) : {};
        const prevItem = current[activeMaterial.id];
        current[activeMaterial.id] = {
          scrollY: Math.round(scrollY),
          progressPercent: Math.max(currentPercent, prevItem?.progressPercent || 0),
          updatedAt: Date.now(),
        };
        localStorage.setItem(scrollStorageKey, JSON.stringify(current));
      } catch {
        // ignore
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('scroll', handleScrollProgress);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [activeMaterial?.id, isCurrentSma]);

  // Jika diakses di root /materi?tag=... otomatis alihkan ke modul topik terkait
  useEffect(() => {
    if (!id && activeTag) {
      const osnMatch = findConceptByTag(activeTag);
      if (osnMatch) {
        navigate(`/materi/${osnMatch.material.topic_number}?tag=${osnMatch.block.tag}&db=osn`, { replace: true });
        return;
      }
      const norm = activeTag.toLowerCase().trim().replace(/^#/, '');
      for (const mat of SMA_MATERIALS) {
        const all = [...mat.prerequisites, ...mat.core_concepts, ...mat.worked_examples];
        const block = all.find(
          (b) =>
            b.tag.toLowerCase() === norm ||
            (b.tags && b.tags.some((t) => t.toLowerCase() === norm))
        );
        if (block) {
          navigate(`/materi/sma-${mat.topic_number}?tag=${block.tag}&db=sma`, { replace: true });
          return;
        }
      }
    }
  }, [id, activeTag, navigate]);

  // Active visible concept tag (tracked via URL or scroll spy)
  const [activeVisibleTag, setActiveVisibleTag] = useState<string | null>(activeTag);
  const [highlightedTag, setHighlightedTag] = useState<string | null>(null);
  const sidebarContainerRef = useRef<HTMLDivElement>(null);
  const isClickScrollingRef = useRef(false);

  useEffect(() => {
    if (activeTag) {
      setActiveVisibleTag(activeTag);
    }
  }, [activeTag]);

  // Toggle individual concept block accordion
  const toggleBlock = (tag: string) => {
    setCollapsedBlocks((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) {
        next.delete(tag);
      } else {
        next.add(tag);
      }
      return next;
    });
  };

  // Expand all blocks in the current material
  const expandAllBlocks = () => {
    setCollapsedBlocks(new Set());
  };

  // Collapse all blocks in the current material
  const collapseAllBlocks = () => {
    if (!activeMaterial) return;
    const all = [
      ...activeMaterial.prerequisites,
      ...activeMaterial.core_concepts,
      ...activeMaterial.worked_examples,
    ].map((b) => b.tag);
    setCollapsedBlocks(new Set(all));
  };

  // Handler scroll ke konsep dengan offset navbar, auto-center sidebar, dan efek highlight lembut
  // Mendukung resolusi tag utama maupun sub-tag atomik (misal: 'hukum-hess' -> 'entalpi-reaksi-hukum-hess')
  const scrollToConcept = (tagOrSubtag: string) => {
    let targetTag = tagOrSubtag;
    if (activeMaterial) {
      const allBlocks = [
        ...activeMaterial.prerequisites,
        ...activeMaterial.core_concepts,
        ...activeMaterial.worked_examples,
      ];
      const normalized = tagOrSubtag.toLowerCase().trim().replace(/^#/, '');
      const matchedBlock = allBlocks.find(
        (b) =>
          b.tag.toLowerCase() === normalized ||
          (b.tags &&
            b.tags.some(
              (t) => t.toLowerCase() === normalized || t.toLowerCase().includes(normalized) || normalized.includes(t.toLowerCase())
            )) ||
          b.tag.toLowerCase().includes(normalized)
      );
      if (matchedBlock) {
        targetTag = matchedBlock.tag;
      }
    }

    // Auto-expand target block if it was collapsed
    setCollapsedBlocks((prev) => {
      if (prev.has(targetTag)) {
        const next = new Set(prev);
        next.delete(targetTag);
        return next;
      }
      return prev;
    });

    setActiveVisibleTag(targetTag);
    setHighlightedTag(targetTag);
    isClickScrollingRef.current = true;

    // Small frame delay to let DOM render expanded state if it was collapsed
    setTimeout(() => {
      const el = document.getElementById(`concept-${targetTag}`);
      if (el) {
        const yOffset = -90; // offset tepat di bawah navbar sticky
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });

        // Sinkronkan juga posisi scroll sidebar ke tengah
        const sidebarLink = document.getElementById(`sidebar-link-${targetTag}`);
        const container = sidebarContainerRef.current;
        if (sidebarLink && container) {
          const targetScroll =
            sidebarLink.offsetTop - container.clientHeight / 2 + sidebarLink.offsetHeight / 2;
          container.scrollTo({
            top: Math.max(0, targetScroll),
            behavior: 'smooth',
          });
        }

        // Kunci scroll spy sesaat sampai animasi smooth scroll selesai
        setTimeout(() => {
          isClickScrollingRef.current = false;
        }, 850);

        // Hilangkan efek cincin highlight secara perlahan
        setTimeout(() => {
          setHighlightedTag((prev) => (prev === targetTag ? null : prev));
        }, 1800);
      } else {
        isClickScrollingRef.current = false;
      }
    }, 60);
  };

  // Smart Scroll Spy: Membaca posisi pengguna secara presisi dengan requestAnimationFrame
  useEffect(() => {
    if (!activeMaterial) return;

    const allBlocks = [
      ...activeMaterial.prerequisites,
      ...activeMaterial.core_concepts,
      ...activeMaterial.worked_examples,
    ];

    let rafId: number | null = null;

    const updateActiveBlock = () => {
      if (isClickScrollingRef.current) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Jika pengguna sudah berada di dekat bagian paling bawah halaman
      if (scrollY + windowHeight >= documentHeight - 100) {
        const lastBlock = allBlocks[allBlocks.length - 1];
        if (lastBlock && lastBlock.tag !== activeVisibleTag) {
          setActiveVisibleTag(lastBlock.tag);
        }
        return;
      }

      // Garis baca optimal (140px dari atas layar, pas di bawah navbar)
      const readingLine = 140;
      let matchedTag: string | null = null;

      for (const block of allBlocks) {
        const el = document.getElementById(`concept-${block.tag}`);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= readingLine && rect.bottom > readingLine) {
          matchedTag = block.tag;
          break;
        }
      }

      // Jika masih di atas blok pertama
      if (!matchedTag && allBlocks.length > 0) {
        const firstEl = document.getElementById(`concept-${allBlocks[0].tag}`);
        if (firstEl && firstEl.getBoundingClientRect().top > readingLine) {
          matchedTag = allBlocks[0].tag;
        }
      }

      if (matchedTag && matchedTag !== activeVisibleTag) {
        setActiveVisibleTag(matchedTag);
      }
    };

    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        updateActiveBlock();
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateActiveBlock();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [activeMaterial, activeVisibleTag]);

  // Otomatis geser sidebar dengan mulus agar item aktif selalu berada di area pandang tengah
  useEffect(() => {
    if (!activeVisibleTag || isClickScrollingRef.current) return;
    const sidebarLink = document.getElementById(`sidebar-link-${activeVisibleTag}`);
    const container = sidebarContainerRef.current;
    if (!sidebarLink || !container) return;

    const linkTop = sidebarLink.offsetTop;
    const linkHeight = sidebarLink.offsetHeight;
    const containerHeight = container.clientHeight;
    const currentScroll = container.scrollTop;

    const targetScroll = linkTop - containerHeight / 2 + linkHeight / 2;

    // Ambang batas 30px untuk menghindari micro-jitter saat scroll pelan
    if (Math.abs(currentScroll - targetScroll) > 30) {
      container.scrollTo({
        top: Math.max(0, targetScroll),
        behavior: 'smooth',
      });
    }
  }, [activeVisibleTag]);

  // Efek scroll otomatis ke blok konsep jika ada query parameter ?tag=... pada initial load
  useEffect(() => {
    if (activeTag) {
      setTimeout(() => {
        scrollToConcept(activeTag);
      }, 300);
    }
  }, [activeTag, activeMaterial]);

  // Kategori unik untuk filter berdasarkan dataset aktif
  const categories = useMemo(() => {
    const list =
      activeDatabase === 'sma'
        ? (selectedGrade === 'Semua' ? SMA_MATERIALS : SMA_MATERIALS.filter((m) => m.grade === selectedGrade))
        : OSN_MATERIALS;
    const set = new Set(list.map((m) => m.category));
    return ['Semua', ...Array.from(set)];
  }, [activeDatabase, selectedGrade]);

  // Filter materi untuk tampilan katalog
  const filteredMaterials = useMemo(() => {
    if (activeDatabase === 'sma') {
      return SMA_MATERIALS.filter((m) => {
        const matchGrade = selectedGrade === 'Semua' || m.grade === selectedGrade;
        const matchCategory = selectedCategory === 'Semua' || m.category === selectedCategory;
        const matchSearch =
          m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.grade.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.curriculumPhase.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.allTags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchGrade && matchCategory && matchSearch;
      });
    }

    return OSN_MATERIALS.filter((m) => {
      const matchCategory = selectedCategory === 'Semua' || m.category === selectedCategory;
      const matchSearch =
        m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.allTags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [activeDatabase, searchQuery, selectedCategory, selectedGrade]);

  // Progress metrics
  const completedCount = activeDatabase === 'sma'
    ? completedSma.filter((mid) => SMA_MATERIALS.some((m) => m.id === mid)).length
    : completedOsn.filter((mid) => OSN_MATERIALS.some((m) => m.id === mid)).length;
  const totalCount = activeDatabase === 'sma' ? SMA_MATERIALS.length : OSN_MATERIALS.length;
  const progressPercentage = Math.round((completedCount / totalCount) * 100);

  // ==========================================
  // JIKA DALAM MODE MEMBACA MATERI TERTENTU (/materi/:id)
  // ==========================================
  if (activeMaterial) {
    const activeList = isCurrentSma ? SMA_MATERIALS : OSN_MATERIALS;
    const currentIndex = activeList.findIndex((m) => m.id === activeMaterial.id);
    const prevMaterial = currentIndex > 0 ? activeList[currentIndex - 1] : null;
    const nextMaterial =
      currentIndex < activeList.length - 1 ? activeList[currentIndex + 1] : null;
    const isCompleted = isCurrentSma
      ? completedSma.includes(activeMaterial.id)
      : completedOsn.includes(activeMaterial.id);
    const savedProgress = isCurrentSma
      ? (scrollPositionsSma[activeMaterial.id]?.progressPercent || 0)
      : (scrollPositionsOsn[activeMaterial.id]?.progressPercent || 0);

    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Navigation Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 min-w-0">
            <Link
              to={`/materi?db=${isCurrentSma ? 'sma' : 'osn'}`}
              className="hover:text-slate-800 font-medium transition-colors flex items-center gap-1.5 shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{isCurrentSma ? 'Database Materi SMA' : 'Database Materi OSN'}</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="font-semibold text-slate-700 shrink-0">
              {isCurrentSma ? `Modul ${activeMaterial.topic_number}` : `Topik ${activeMaterial.topic_number}`}
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-slate-400 truncate max-w-[140px] sm:max-w-xs md:max-w-md" title={activeMaterial.title}>
              {activeMaterial.title}
            </span>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            {/* Status Selesai Belajar Toggle Button */}
            <button
              onClick={() => toggleComplete(activeMaterial.id)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all border cursor-pointer ${
                isCompleted
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-700 shadow-2xs'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
              }`}
              title={isCompleted ? 'Materi telah selesai dipelajari' : 'Tandai materi ini sudah selesai dibaca'}
            >
              <CheckCircle2 className={`w-3.5 h-3.5 ${isCompleted ? 'text-emerald-600 fill-emerald-100' : 'text-slate-400'}`} />
              <span>{isCompleted ? 'Selesai Dipelajari' : 'Tandai Selesai'}</span>
            </button>

            <button
              onClick={() => navigate(`/worksheet/static_module/${activeMaterial.id}`)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              <span>Uji Pemahaman di Worksheet</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Material Header Banner with Ambient Topic SVG Art */}
        <div className="relative bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4 overflow-hidden">
          {/* Ambient SVG Art Background (faded right side) */}
          <div className="absolute right-0 top-0 bottom-0 w-80 lg:w-96 opacity-15 pointer-events-none hidden sm:block overflow-hidden">
            <TopicSvgArt
              topicNumber={activeMaterial.topic_number}
              database={isCurrentSma ? 'sma' : 'osn'}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-white via-white/40 to-transparent" />
          </div>

          <div className="relative z-10 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`px-2.5 py-0.5 text-[11px] font-bold rounded uppercase font-mono ${
                isCurrentSma ? 'bg-emerald-100 text-emerald-800' : 'bg-sky-100 text-sky-800'
              }`}>
                {isCurrentSma ? `Modul SMA #${activeMaterial.topic_number}` : `Topik OSN #${activeMaterial.topic_number}`}
              </span>

              {isCurrentSma && (
                <>
                  <span className="px-2.5 py-0.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold rounded font-mono">
                    {(activeMaterial as SmaMaterialItem).grade} · {(activeMaterial as SmaMaterialItem).curriculumPhase}
                  </span>
                  <span className="px-2.5 py-0.5 bg-indigo-50 border border-indigo-200 text-indigo-800 text-[11px] font-bold rounded font-mono">
                    Semester {(activeMaterial as SmaMaterialItem).semester}
                  </span>
                </>
              )}

              <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 text-[11px] font-bold rounded">
                {activeMaterial.category}
              </span>

              {!isCurrentSma && (
                <span className="px-2.5 py-0.5 bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-bold rounded font-mono">
                  Level: {activeMaterial.level}
                </span>
              )}

              {isCompleted ? (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold rounded font-mono">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  Selesai
                </span>
              ) : savedProgress > 0 ? (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-sky-50 border border-sky-200 text-sky-700 text-[11px] font-bold rounded font-mono">
                  <Clock className="w-3 h-3 text-sky-600" />
                  Dibaca {savedProgress}%
                </span>
              ) : null}

              <span className="flex items-center gap-1 text-xs text-slate-400 font-mono ml-auto">
                <Clock className="w-3.5 h-3.5" />
                <span>{activeMaterial.readTimeMinutes} menit bacaan</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              {activeMaterial.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl text-justify">
              {activeMaterial.summary}
            </p>
          </div>

          {/* Tag Navigator Pills with Collapse/Expand */}
          <div className="pt-2 flex flex-wrap items-center gap-1.5 border-t border-slate-100">
            <span className="text-[11px] font-semibold text-slate-500 mr-1">Daftar Tag Konsep:</span>
            {(showAllTags ? activeMaterial.allTags : activeMaterial.allTags.slice(0, 8)).map((tag) => {
              const allBlocks = [
                ...activeMaterial.prerequisites,
                ...activeMaterial.core_concepts,
                ...activeMaterial.worked_examples,
              ];
              const isTagActive =
                activeVisibleTag === tag ||
                allBlocks.some(
                  (b) =>
                    b.tag === activeVisibleTag &&
                    (b.tag === tag || (b.tags && b.tags.includes(tag)))
                );

              return (
                <button
                  key={tag}
                  onClick={() => scrollToConcept(tag)}
                  className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-mono transition-colors cursor-pointer ${
                    isTagActive
                      ? 'bg-sky-600 text-white font-bold shadow-2xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                  }`}
                  title={`Klik untuk melompat ke pembahasan materi #${tag}`}
                >
                  <Tag className="w-2.5 h-2.5" />
                  <span>#{tag}</span>
                </button>
              );
            })}
            {activeMaterial.allTags.length > 8 && (
              <button
                onClick={() => setShowAllTags(!showAllTags)}
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              >
                {showAllTags ? (
                  <>
                    <span>Tutup Ringkas</span>
                    <ChevronUp className="w-3 h-3" />
                  </>
                ) : (
                  <>
                    <span>+{activeMaterial.allTags.length - 8} Tag Lainnya</span>
                    <ChevronDown className="w-3 h-3" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Bridging Escalation Banner between SMA and OSN */}
        {isCurrentSma && (activeMaterial as SmaMaterialItem).relatedOsnTopicId && (
          <div className="bg-linear-to-r from-sky-50 via-indigo-50/50 to-emerald-50 border border-sky-200/90 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center text-lg shadow-2xs shrink-0 font-bold">
                🚀
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-sky-100 text-sky-800 font-mono">
                    Jalur Eskalasi Prestasi
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">Tingkat Kompetisi Sains</span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 font-display mt-0.5">
                  Siap Tantangan Lebih Tinggi? Pelajari Topik #{(activeMaterial as SmaMaterialItem).relatedOsnTopicId} Versi OSN
                </h4>
                <p className="text-xs text-slate-600">
                  Eksplorasi pembuktian matematis, termodinamika kuantum, dan soal berstandar Puspresnas & IChO.
                </p>
              </div>
            </div>
            <Link
              to={`/materi/${(activeMaterial as SmaMaterialItem).relatedOsnTopicId}?db=osn`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs shrink-0 cursor-pointer"
            >
              <span>Buka Topik OSN</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}

        {!isCurrentSma && (() => {
          const relatedSmaList = SMA_MATERIALS.filter(
            (m) => m.relatedOsnTopicId === activeMaterial.topic_number || m.relatedOsnTopicId === activeMaterial.id
          );
          if (relatedSmaList.length === 0) return null;

          return (
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-2xs">
              <div className="flex items-center gap-2.5 text-slate-700">
                <span className="text-base shrink-0">💡</span>
                <div>
                  <span className="font-bold text-slate-800">Perlu mengulang konsep dasar SMA untuk topik ini?</span>
                  <p className="text-[11px] text-slate-500">Kuatkan fondasi teori sekolah sebelum membedah soal kompetisi tingkat tinggi.</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {relatedSmaList.map((sma) => (
                  <Link
                    key={sma.id}
                    to={`/materi/sma-${sma.topic_number}?db=sma`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 hover:border-emerald-400 hover:text-emerald-700 rounded-lg font-semibold text-slate-700 transition-all shadow-2xs"
                  >
                    <span className="text-[10px] font-mono text-emerald-600 font-bold">Modul {sma.topic_number}:</span>
                    <span className="truncate max-w-[160px]">{sma.title}</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </Link>
                ))}
              </div>
            </div>
          );
        })()}

        {/* Global Accordion Control Bar */}
        <div className="flex items-center justify-between bg-white border border-slate-200 rounded-xl px-4 py-2.5 shadow-2xs">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
            <Layers className="w-4 h-4 text-sky-600" />
            <span>Alur Pedagogis 3 Tahap</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <button
              onClick={expandAllBlocks}
              className="text-sky-600 hover:text-sky-700 hover:bg-sky-50 px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer"
            >
              Buka Semua
            </button>
            <span className="text-slate-300">|</span>
            <button
              onClick={collapseAllBlocks}
              className="text-slate-500 hover:text-slate-700 hover:bg-slate-100 px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer"
            >
              Tutup Semua
            </button>
            <span className="text-slate-300 hidden lg:inline">|</span>
            <button
              onClick={toggleSidebar}
              className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              title={isSidebarHidden ? "Tampilkan Alur Pembelajaran Modul" : "Sembunyikan Alur Pembelajaran Modul (Membaca Lebih Lebar)"}
            >
              {isSidebarHidden ? (
                <>
                  <PanelRightOpen className="w-3.5 h-3.5 text-sky-600" />
                  <span>Tampilkan Alur</span>
                </>
              ) : (
                <>
                  <PanelRightClose className="w-3.5 h-3.5 text-slate-500" />
                  <span>Sembunyikan Alur (Lebar)</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* ALUR MATERI 3 TAHAP */}
        <div className={`grid grid-cols-1 ${isSidebarHidden ? 'lg:grid-cols-1' : 'lg:grid-cols-12'} gap-8`}>
          {/* Main Article Sections (8 cols on desktop when sidebar active, wide full container when hidden) */}
          <div className={`${isSidebarHidden ? 'lg:col-span-1 max-w-5xl mx-auto w-full' : 'lg:col-span-8'} space-y-10 transition-all duration-300`}>
            {/* TAHAP 1: KONSEP PRASYARAT YANG DIBUTUHKAN */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-amber-800 border-b border-amber-200 pb-2">
                <Lightbulb className="w-5 h-5 text-amber-600" />
                <h2 className="text-lg font-bold font-display tracking-tight text-slate-900">
                  Tahap 1: Konsep Prasyarat yang Dibutuhkan
                </h2>
              </div>
              <p className="text-xs text-slate-500">
                Pondasi teori dasar yang wajib dipahami sebelum melangkah ke konsep olimpiade tingkat lanjut.
              </p>

              <div className="space-y-6">
                {activeMaterial.prerequisites.map((block) => {
                  const isCollapsed = collapsedBlocks.has(block.tag);
                  return (
                    <div
                      key={block.tag}
                      id={`concept-${block.tag}`}
                      className={`bg-white border rounded-2xl p-6 sm:p-7 shadow-xs space-y-3 transition-all duration-500 ease-out ${
                        highlightedTag === block.tag
                          ? 'border-amber-400 ring-2 ring-amber-400/40 bg-amber-50/20 shadow-md'
                          : 'border-slate-200'
                      }`}
                    >
                      <div
                        className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3 cursor-pointer select-none"
                        onClick={() => toggleBlock(block.tag)}
                      >
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                              <KaTeXRenderer content={block.title} inlineOnly />
                            </h3>
                            <div className="flex flex-wrap items-center gap-1.5">
                              {(block.tags && block.tags.length > 0 ? block.tags : [block.tag]).map((t) => (
                                <span
                                  key={t}
                                  className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-50 border border-amber-200 text-amber-800 rounded text-[10px] font-mono font-bold"
                                >
                                  <Tag className="w-2.5 h-2.5" />
                                  #{t}
                                </span>
                              ))}
                            </div>
                          </div>
                          <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1 text-justify">{block.summary}</p>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleBlock(block.tag);
                          }}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors shrink-0 cursor-pointer"
                          aria-label={isCollapsed ? 'Buka blok materi' : 'Tutup blok materi'}
                          title={isCollapsed ? 'Buka pembahasan lengkap' : 'Sembunyikan pembahasan'}
                        >
                          {isCollapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
                        </button>
                      </div>

                      {!isCollapsed ? (
                        <div className="text-sm sm:text-base text-slate-700 leading-relaxed pt-1 text-justify">
                          <KaTeXRenderer content={block.content} />
                        </div>
                      ) : (
                        <div
                          onClick={() => toggleBlock(block.tag)}
                          className="pt-1 flex items-center justify-between text-xs text-slate-400 hover:text-amber-700 cursor-pointer transition-colors"
                        >
                          <span>Pembahasan disembunyikan. Klik untuk membaca selengkapnya</span>
                          <ChevronDown className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* TAHAP 2: KONSEP MATERI INTI (OSN / IChO DEEP-DIVE) */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-2 text-sky-800 border-b border-sky-200 pb-2">
                <GraduationCap className="w-5 h-5 text-sky-600" />
                <h2 className="text-lg font-bold font-display tracking-tight text-slate-900">
                  Tahap 2: Konsep Materi Inti (Standar OSN / IChO)
                </h2>
              </div>
              <p className="text-xs text-slate-500">
                Pembahasan mendalam teori, penurunan formula ilmiah, dan anomali khas kompetisi sains.
              </p>

              <div className="space-y-6">
                {activeMaterial.core_concepts.map((block) => {
                  const isCollapsed = collapsedBlocks.has(block.tag);
                  return (
                    <div
                      key={block.tag}
                      id={`concept-${block.tag}`}
                      className={`bg-white border rounded-2xl p-6 sm:p-7 shadow-xs space-y-3 transition-all duration-500 ease-out ${
                        highlightedTag === block.tag
                          ? 'border-sky-400 ring-2 ring-sky-400/40 bg-sky-50/20 shadow-md'
                          : 'border-slate-200'
                      }`}
                    >
                      <div
                        className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3 cursor-pointer select-none"
                        onClick={() => toggleBlock(block.tag)}
                      >
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                              <KaTeXRenderer content={block.title} inlineOnly />
                            </h3>
                            <div className="flex flex-wrap items-center gap-1.5">
                              {(block.tags && block.tags.length > 0 ? block.tags : [block.tag]).map((t) => (
                                <span
                                  key={t}
                                  className="inline-flex items-center gap-1 px-2 py-0.5 bg-sky-50 border border-sky-200 text-sky-800 rounded text-[10px] font-mono font-bold"
                                >
                                  <Tag className="w-2.5 h-2.5" />
                                  #{t}
                                </span>
                              ))}
                            </div>
                          </div>
                          <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1 text-justify">{block.summary}</p>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleBlock(block.tag);
                          }}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors shrink-0 cursor-pointer"
                          aria-label={isCollapsed ? 'Buka blok materi' : 'Tutup blok materi'}
                          title={isCollapsed ? 'Buka pembahasan lengkap' : 'Sembunyikan pembahasan'}
                        >
                          {isCollapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
                        </button>
                      </div>

                      {!isCollapsed ? (
                        <div className="text-sm sm:text-base text-slate-700 leading-relaxed pt-1 text-justify">
                          <KaTeXRenderer content={block.content} />
                        </div>
                      ) : (
                        <div
                          onClick={() => toggleBlock(block.tag)}
                          className="pt-1 flex items-center justify-between text-xs text-slate-400 hover:text-sky-700 cursor-pointer transition-colors"
                        >
                          <span>Pembahasan disembunyikan. Klik untuk membaca selengkapnya</span>
                          <ChevronDown className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* TAHAP 3: CONTOH DAN PENJELASAN SOAL OSN BERKAITAN */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-2 text-emerald-800 border-b border-emerald-200 pb-2">
                <FileCheck className="w-5 h-5 text-emerald-600" />
                <h2 className="text-lg font-bold font-display tracking-tight text-slate-900">
                  Tahap 3: Contoh & Penjelasan Soal OSN Berkaitan
                </h2>
              </div>
              <p className="text-xs text-slate-500">
                Aplikasi langsung konsep pada soal seleksi olimpiade lengkap dengan langkah analitis juri.
              </p>

              <div className="space-y-6">
                {activeMaterial.worked_examples.map((block) => {
                  const isCollapsed = collapsedBlocks.has(block.tag);
                  return (
                    <div
                      key={block.tag}
                      id={`concept-${block.tag}`}
                      className={`bg-white border rounded-2xl p-6 sm:p-7 shadow-xs space-y-3 transition-all duration-500 ease-out ${
                        highlightedTag === block.tag
                          ? 'border-emerald-400 ring-2 ring-emerald-400/40 bg-emerald-50/20 shadow-md'
                          : 'border-emerald-200/80'
                      }`}
                    >
                      <div
                        className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3 cursor-pointer select-none"
                        onClick={() => toggleBlock(block.tag)}
                      >
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                              <KaTeXRenderer content={block.title} inlineOnly />
                            </h3>
                            <div className="flex flex-wrap items-center gap-1.5">
                              {(block.tags && block.tags.length > 0 ? block.tags : [block.tag]).map((t) => (
                                <span
                                  key={t}
                                  className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded text-[10px] font-mono font-bold"
                                >
                                  <Tag className="w-2.5 h-2.5" />
                                  #{t}
                                </span>
                              ))}
                            </div>
                          </div>
                          <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1 text-justify">{block.summary}</p>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleBlock(block.tag);
                          }}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors shrink-0 cursor-pointer"
                          aria-label={isCollapsed ? 'Buka blok materi' : 'Tutup blok materi'}
                          title={isCollapsed ? 'Buka pembahasan lengkap' : 'Sembunyikan pembahasan'}
                        >
                          {isCollapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
                        </button>
                      </div>

                      {!isCollapsed ? (
                        <div className="text-sm sm:text-base text-slate-700 leading-relaxed pt-1 text-justify">
                          <KaTeXRenderer content={block.content} />
                        </div>
                      ) : (
                        <div
                          onClick={() => toggleBlock(block.tag)}
                          className="pt-1 flex items-center justify-between text-xs text-slate-400 hover:text-emerald-700 cursor-pointer transition-colors"
                        >
                          <span>Pembahasan disembunyikan. Klik untuk membaca selengkapnya</span>
                          <ChevronDown className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Next / Previous Material Footer Navigation */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-200">
              {prevMaterial ? (
                <Link
                  to={isCurrentSma ? `/materi/sma-${prevMaterial.topic_number}?db=sma` : `/materi/${prevMaterial.topic_number}?db=osn`}
                  className="inline-flex items-center gap-2 p-3 bg-white border border-slate-200 hover:border-slate-300 rounded-xl text-xs text-slate-700 font-bold transition-all shadow-2xs cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4 text-slate-500" />
                  <div className="text-left">
                    <span className="text-[10px] text-slate-400 block font-normal">
                      {isCurrentSma ? 'Modul Sebelumnya' : 'Topik Sebelumnya'}
                    </span>
                    <span>
                      {isCurrentSma ? `Modul ${prevMaterial.topic_number}: ${prevMaterial.title}` : `Topik ${prevMaterial.topic_number}: ${prevMaterial.title}`}
                    </span>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextMaterial && (
                <Link
                  to={isCurrentSma ? `/materi/sma-${nextMaterial.topic_number}?db=sma` : `/materi/${nextMaterial.topic_number}?db=osn`}
                  className="inline-flex items-center gap-2 p-3 bg-white border border-slate-200 hover:border-slate-300 rounded-xl text-xs text-slate-700 font-bold transition-all shadow-2xs text-right cursor-pointer"
                >
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block font-normal">
                      {isCurrentSma ? 'Modul Selanjutnya' : 'Topik Selanjutnya'}
                    </span>
                    <span>
                      {isCurrentSma ? `Modul ${nextMaterial.topic_number}: ${nextMaterial.title}` : `Topik ${nextMaterial.topic_number}: ${nextMaterial.title}`}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </Link>
              )}
            </div>
          </div>

          {/* Desktop Sticky Sidebar: Hidden on mobile, toggleable on desktop */}
          {!isSidebarHidden && (
            <div className="hidden lg:block lg:col-span-4 animate-in fade-in duration-300">
              <div className="sticky top-20 bg-white border border-slate-200 rounded-2xl shadow-xs flex flex-col max-h-[calc(100vh-6rem)] overflow-hidden">
                {/* Header Pinned */}
                <div className="p-4 sm:p-5 pb-3 border-b border-slate-100 shrink-0 bg-white">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Atom className="w-4 h-4 text-sky-600" />
                      <h3 className="text-sm font-bold text-slate-900 font-display">
                        Alur Pembelajaran {isCurrentSma ? 'Modul' : 'Topik'}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold">
                        {activeMaterial.prerequisites.length +
                          activeMaterial.core_concepts.length +
                          activeMaterial.worked_examples.length}{' '}
                        Blok
                      </span>
                      <button
                        onClick={toggleSidebar}
                        className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                        title="Sembunyikan Alur Pembelajaran (Lebarkan Bacaan)"
                        aria-label="Sembunyikan Alur Pembelajaran"
                      >
                        <PanelRightClose className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Klik konsep untuk langsung menuju bagian materi
                  </p>
                </div>

              {/* Scrollable Alur List */}
              <div
                ref={sidebarContainerRef}
                className="flex-1 overflow-y-auto p-4 space-y-3 overscroll-contain scroll-smooth"
              >
                {/* 1. Prasyarat */}
                <div className="p-3 bg-amber-50/60 border border-amber-200/80 rounded-xl space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-amber-900 flex items-center gap-1.5">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>1. Prasyarat</span>
                    </span>
                    <span className="px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded text-[10px] font-semibold font-mono">
                      {activeMaterial.prerequisites.length} Konsep
                    </span>
                  </div>
                  <div className="space-y-1">
                    {activeMaterial.prerequisites.map((p) => {
                      const cleanTitle = (p.title.split(':')[1] || p.title).trim();
                      const isActive = activeVisibleTag === p.tag;
                      return (
                        <button
                          key={p.tag}
                          id={`sidebar-link-${p.tag}`}
                          onClick={() => scrollToConcept(p.tag)}
                          className={`w-full text-left group flex items-start gap-2.5 px-2.5 py-2 rounded-xl text-xs transition-all duration-200 leading-snug cursor-pointer border ${
                            isActive
                              ? 'bg-white text-amber-950 font-bold shadow-xs border-amber-300 ring-1 ring-amber-200/60'
                              : 'border-transparent text-slate-600 hover:text-amber-900 hover:bg-white/70'
                          }`}
                        >
                          <span
                            className={`w-2 h-2 rounded-full mt-1 shrink-0 transition-all duration-300 ${
                              isActive
                                ? 'bg-amber-600 scale-110 shadow-xs'
                                : 'bg-amber-300 group-hover:bg-amber-500 opacity-60 group-hover:opacity-100'
                            }`}
                          />
                          <span className="flex-1 text-[11px] leading-relaxed">
                            <KaTeXRenderer content={cleanTitle} inlineOnly />
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Konsep Inti */}
                <div className="p-3 bg-sky-50/60 border border-sky-200/80 rounded-xl space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-sky-900 flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      <span>2. Konsep Inti</span>
                    </span>
                    <span className="px-1.5 py-0.5 bg-sky-100 text-sky-800 rounded text-[10px] font-semibold font-mono">
                      {activeMaterial.core_concepts.length} Konsep
                    </span>
                  </div>
                  <div className="space-y-1">
                    {activeMaterial.core_concepts.map((c) => {
                      const cleanTitle = (c.title.split(':')[1] || c.title).trim();
                      const isActive = activeVisibleTag === c.tag;
                      return (
                        <button
                          key={c.tag}
                          id={`sidebar-link-${c.tag}`}
                          onClick={() => scrollToConcept(c.tag)}
                          className={`w-full text-left group flex items-start gap-2.5 px-2.5 py-2 rounded-xl text-xs transition-all duration-200 leading-snug cursor-pointer border ${
                            isActive
                              ? 'bg-white text-sky-950 font-bold shadow-xs border-sky-300 ring-1 ring-sky-200/60'
                              : 'border-transparent text-slate-600 hover:text-sky-900 hover:bg-white/70'
                          }`}
                        >
                          <span
                            className={`w-2 h-2 rounded-full mt-1 shrink-0 transition-all duration-300 ${
                              isActive
                                ? 'bg-sky-600 scale-110 shadow-xs'
                                : 'bg-sky-300 group-hover:bg-sky-500 opacity-60 group-hover:opacity-100'
                            }`}
                          />
                          <span className="flex-1 text-[11px] leading-relaxed">
                            <KaTeXRenderer content={cleanTitle} inlineOnly />
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Teladan Soal */}
                <div className="p-3 bg-emerald-50/60 border border-emerald-200/80 rounded-xl space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-emerald-900 flex items-center gap-1.5">
                      <FileCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>3. Teladan Soal {isCurrentSma ? 'Ujian / UTBK' : 'OSN'}</span>
                    </span>
                    <span className="px-1.5 py-0.5 bg-emerald-100 text-emerald-800 rounded text-[10px] font-semibold font-mono">
                      {activeMaterial.worked_examples.length} Soal
                    </span>
                  </div>
                  <div className="space-y-1">
                    {activeMaterial.worked_examples.map((e) => {
                      const cleanTitle = (e.title.split(':')[1] || e.title).trim();
                      const isActive = activeVisibleTag === e.tag;
                      return (
                        <button
                          key={e.tag}
                          id={`sidebar-link-${e.tag}`}
                          onClick={() => scrollToConcept(e.tag)}
                          className={`w-full text-left group flex items-start gap-2.5 px-2.5 py-2 rounded-xl text-xs transition-all duration-200 leading-snug cursor-pointer border ${
                            isActive
                              ? 'bg-white text-emerald-950 font-bold shadow-xs border-emerald-300 ring-1 ring-emerald-200/60'
                              : 'border-transparent text-slate-600 hover:text-emerald-900 hover:bg-white/70'
                          }`}
                        >
                          <span
                            className={`w-2 h-2 rounded-full mt-1 shrink-0 transition-all duration-300 ${
                              isActive
                                ? 'bg-emerald-600 scale-110 shadow-xs'
                                : 'bg-emerald-300 group-hover:bg-emerald-500 opacity-60 group-hover:opacity-100'
                            }`}
                          />
                          <span className="flex-1 text-[11px] leading-relaxed">
                            <KaTeXRenderer content={cleanTitle} inlineOnly />
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Pinned Action Footer */}
              <div className="p-4 border-t border-slate-100 bg-slate-50/70 shrink-0">
                <button
                  onClick={() => navigate(`/worksheet/static_module/${activeMaterial.id}`)}
                  className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>
                    Kerjakan Latihan {isCurrentSma ? `Modul ${activeMaterial.topic_number}` : `Topik ${activeMaterial.topic_number}`}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

        {/* Resume Scroll Toast Notification */}
        {showResumeToast && (
          <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-slate-900/95 backdrop-blur-md text-white border border-slate-700/80 shadow-2xl rounded-2xl sm:rounded-full px-4 py-2.5 flex items-center gap-3 text-xs max-w-[92vw] transition-all">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse shrink-0" />
              <span className="font-medium truncate">
                Melanjutkan dari posisi sebelumnya ({showResumeToast.percent}%)
              </span>
            </div>
            <div className="flex items-center gap-1.5 shrink-0 ml-auto">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setShowResumeToast(null);
                }}
                className="px-2.5 py-1 rounded-lg sm:rounded-full bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 font-semibold text-[11px] border border-sky-400/30 cursor-pointer transition-colors"
              >
                Mulai dari Awal
              </button>
              <button
                onClick={() => setShowResumeToast(null)}
                className="p-1 text-slate-400 hover:text-white transition-colors cursor-pointer text-sm font-bold"
                aria-label="Tutup pemberitahuan"
              >
                ×
              </button>
            </div>
          </div>
        )}

        {/* Mobile Bottom Sheet TOC Navigation (lg:hidden) */}
        <MobileTableOfContents
          material={activeMaterial}
          activeVisibleTag={activeVisibleTag}
          onSelectConcept={scrollToConcept}
          onLaunchWorksheet={() => navigate(`/worksheet/static_module/${activeMaterial.id}`)}
        />

        {/* Floating Quick-Summon Sidebar Pill (Desktop Only when Sidebar is Hidden) */}
        {isSidebarHidden && (
          <button
            onClick={toggleSidebar}
            className="hidden lg:flex fixed top-24 right-6 z-30 items-center gap-2 px-3.5 py-2 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md hover:shadow-lg text-slate-700 hover:text-sky-600 rounded-full transition-all duration-200 hover:-translate-x-1 cursor-pointer ring-1 ring-slate-900/5 group text-xs font-semibold animate-in fade-in slide-in-from-right-4"
            title="Tampilkan Alur Pembelajaran Modul"
            aria-label="Tampilkan Alur Pembelajaran Modul"
          >
            <PanelRightOpen className="w-4 h-4 text-sky-600 group-hover:scale-110 transition-transform" />
            <span>Tampilkan Alur</span>
          </button>
        )}

        {/* Back-to-Top Floating Action Button */}
        {showBackToTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-20 right-4 lg:bottom-8 lg:right-8 z-30 p-3 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md hover:shadow-lg text-slate-700 hover:text-sky-600 rounded-full transition-all duration-200 hover:-translate-y-0.5 cursor-pointer ring-1 ring-slate-900/5"
            aria-label="Kembali ke atas"
            title="Kembali ke atas"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>
    );
  }

  // ==========================================
  // TAMPILAN KATALOG DUAL DATABASE MATERI (/materi)
  // ==========================================
  const isSmaDb = activeDatabase === 'sma';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Section with Dual Database Switcher & Progress Tracker */}
      <div className="border-b border-slate-200 pb-6 space-y-5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-0.5 text-[10px] font-bold rounded uppercase font-mono ${
                isSmaDb ? 'bg-emerald-100 text-emerald-800' : 'bg-sky-100 text-sky-800'
              }`}>
                {isSmaDb ? '📚 Kurikulum Merdeka (Fase E & F) & K13' : '🏆 Puspresnas & IChO Standard'}
              </span>
              <span className="text-xs text-slate-500 font-medium">Database Materi Pembelajaran Terstruktur</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
              {isSmaDb ? 'Database Materi Sains Kimia Dasar SMA' : 'Database Materi OSN Kimia'}
            </h1>

            <p className="text-slate-600 text-xs sm:text-sm max-w-3xl leading-relaxed text-justify">
              {isSmaDb
                ? 'Pustaka fondasi kurikulum kimia SMA dari Fase E (Kelas 10) hingga Fase F Lanjutan (Kelas 12). Disusun dengan alur konsep prasyarat, teori inti, formula KaTeX, dan contoh soal kontekstual sebagai batu loncatan persiapan ujian sekolah, UTBK-SNBT, hingga kompetisi sains.'
                : 'Pustaka komprehensif teori sains kimia tingkat lanjut dengan standar Puspresnas & International Chemistry Olympiad (IChO). Dilengkapi konsep prasyarat, pendalaman teori esensial, formula matematis, dan pembahasan teladan soal olimpiade.'}
            </p>
          </div>

          {/* Progress Tracker Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-2xs sm:w-64 shrink-0 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Progress Belajar</span>
              </span>
              <span className={`font-mono font-bold ${isSmaDb ? 'text-emerald-700' : 'text-sky-700'}`}>
                {completedCount}/{totalCount} {isSmaDb ? 'Modul' : 'Topik'}
              </span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  isSmaDb
                    ? 'bg-linear-to-r from-emerald-500 to-teal-500'
                    : 'bg-linear-to-r from-sky-500 to-emerald-500'
                }`}
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <p className="text-[10px] text-slate-400 text-right font-mono">
              {progressPercentage}% Selesai Dipelajari
            </p>
          </div>
        </div>

        {/* Segmented Database Switcher */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200/80 w-fit">
          <button
            onClick={() => handleDatabaseSwitch('osn')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeDatabase === 'osn'
                ? 'bg-white text-sky-700 shadow-xs border border-slate-200/50'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>🏆 Materi Olimpiade (OSN)</span>
            <span
              className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                activeDatabase === 'osn' ? 'bg-sky-100 text-sky-800' : 'bg-slate-200 text-slate-700'
              }`}
            >
              10 Topik
            </span>
          </button>

          <button
            onClick={() => handleDatabaseSwitch('sma')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeDatabase === 'sma'
                ? 'bg-white text-emerald-700 shadow-xs border border-slate-200/50'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>📚 Materi Dasar SMA</span>
            <span
              className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                activeDatabase === 'sma' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-700'
              }`}
            >
              16 Modul
            </span>
          </button>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="space-y-3">
        {/* Grade Filter Pills (Specific to SMA Database) */}
        {isSmaDb && (
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            <span className="text-xs font-bold text-slate-500 mr-1 shrink-0">Jenjang Kelas:</span>
            {(['Semua', 'Kelas 10', 'Kelas 11', 'Kelas 12'] as const).map((grade) => {
              const label =
                grade === 'Semua'
                  ? 'Semua Jenjang'
                  : grade === 'Kelas 10'
                  ? 'Kelas 10 (Fase E)'
                  : grade === 'Kelas 11'
                  ? 'Kelas 11 (Fase F)'
                  : 'Kelas 12 (Fase F Lanjutan)';

              return (
                <button
                  key={grade}
                  onClick={() => {
                    setSelectedGrade(grade);
                    setSelectedCategory('Semua');
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                    selectedGrade === grade
                      ? 'bg-emerald-600 text-white font-bold border-emerald-600 shadow-2xs'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                isSmaDb
                  ? 'Cari konsep (#mol, #titrasi), rumus, atau bab SMA...'
                  : 'Cari konsep, tag (#aturan-slater), atau rumus...'
              }
              className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all shadow-2xs"
            />
          </div>

          {/* Category Pills Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? isSmaDb
                      ? 'bg-emerald-600 text-white shadow-2xs'
                      : 'bg-sky-600 text-white shadow-2xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid Materi Topik Silabus */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMaterials.map((material) => {
          const isSmaCard = activeDatabase === 'sma';
          const isCompleted = isSmaCard
            ? completedSma.includes(material.id)
            : completedOsn.includes(material.id);
          const savedProgress = isSmaCard
            ? scrollPositionsSma[material.id]?.progressPercent || 0
            : scrollPositionsOsn[material.id]?.progressPercent || 0;
          const currentPercent = isCompleted ? 100 : savedProgress;

          const targetUrl = isSmaCard
            ? `/materi/sma-${material.topic_number}?db=sma`
            : `/materi/${material.topic_number}?db=osn`;

          return (
            <div
              key={material.id}
              className={`bg-white border rounded-2xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col group overflow-hidden ${
                isSmaCard ? 'border-slate-200 hover:border-emerald-300' : 'border-slate-200 hover:border-sky-300'
              }`}
            >
              {/* Top Banner Minimalist SVG Art */}
              <div className="relative h-36 -mx-6 -mt-6 mb-4 overflow-hidden border-b border-slate-100 bg-white">
                <TopicSvgArt
                  topicNumber={material.topic_number}
                  database={activeDatabase}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />

                {/* Badges on SVG art banner */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded-md bg-white/95 backdrop-blur-md border border-slate-200 text-slate-800 font-mono font-bold text-[11px] shadow-2xs">
                    {isSmaCard ? `Modul #${material.topic_number}` : `Topik #${material.topic_number}`}
                  </span>
                  {isCompleted && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50/95 backdrop-blur-md border border-emerald-300 text-emerald-700 text-[10px] font-bold rounded-md shadow-2xs">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      Selesai
                    </span>
                  )}
                </div>

                <div className="absolute top-3 right-3">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white/95 backdrop-blur-md border border-slate-200 text-slate-700 font-mono shadow-2xs">
                    {isSmaCard ? (material as SmaMaterialItem).grade : material.level}
                  </span>
                </div>

                <div className="absolute bottom-2 left-4 right-4 flex items-center justify-between">
                  <span
                    className={`text-[10px] uppercase tracking-wider font-bold font-mono px-2 py-0.5 rounded border shadow-2xs ${
                      isSmaCard
                        ? 'bg-emerald-50/95 text-emerald-800 border-emerald-200/80'
                        : 'bg-sky-50/95 text-sky-800 border-sky-200/80'
                    }`}
                  >
                    {material.category}
                  </span>
                  {isSmaCard && (
                    <span className="text-[10px] font-mono text-slate-500 font-bold bg-white/90 px-1.5 py-0.5 rounded border border-slate-200">
                      {(material as SmaMaterialItem).curriculumPhase}
                    </span>
                  )}
                </div>
              </div>

              {/* Main Card Content: flex-1 ensures uniform height expansion */}
              <div className="flex-1 flex flex-col space-y-3">
                {/* Title Container: Fixed min-height ensures 1-line and 2-line titles are 100% horizontally aligned */}
                <div className="min-h-[3rem] flex items-start">
                  <h3
                    className={`text-base font-bold text-slate-900 transition-colors font-display line-clamp-2 leading-snug ${
                      isSmaCard ? 'group-hover:text-emerald-600' : 'group-hover:text-sky-600'
                    }`}
                  >
                    {material.title}
                  </h3>
                </div>

                {/* Summary with fixed line-clamp & min-height for uniform start of progress bar */}
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed text-justify min-h-[3.75rem]">
                  {material.summary}
                </p>

                {/* Progress Bar Membaca Materi */}
                <div className="p-3 bg-slate-50/80 border border-slate-100 rounded-xl space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[11px] font-semibold flex items-center gap-1.5">
                      {isCompleted ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">100% Selesai Dipelajari</span>
                        </>
                      ) : currentPercent > 0 ? (
                        <>
                          <Clock className={`w-3.5 h-3.5 ${isSmaCard ? 'text-emerald-600' : 'text-sky-600'}`} />
                          <span className={isSmaCard ? 'text-emerald-700' : 'text-sky-700'}>Sedang Dibaca</span>
                        </>
                      ) : (
                        <>
                          <Layers className="w-3.5 h-3.5 text-slate-400" />
                          <span className="text-slate-500">Belum Dibaca</span>
                        </>
                      )}
                    </span>
                    <span
                      className={`text-[11px] font-mono font-bold ${
                        isCompleted
                          ? 'text-emerald-600'
                          : currentPercent > 0
                          ? isSmaCard
                            ? 'text-emerald-600'
                            : 'text-sky-600'
                          : 'text-slate-400'
                      }`}
                    >
                      {currentPercent}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200/70 h-1.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        isCompleted
                          ? 'bg-emerald-500'
                          : currentPercent > 0
                          ? isSmaCard
                            ? 'bg-linear-to-r from-emerald-500 to-teal-500'
                            : 'bg-linear-to-r from-sky-500 to-emerald-500'
                          : 'bg-slate-300'
                      }`}
                      style={{ width: `${currentPercent}%` }}
                    />
                  </div>
                </div>

                {/* Preview 3 Tahap Alur */}
                <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl space-y-1.5 text-[11px]">
                  <div className="flex items-center justify-between text-slate-600 font-medium">
                    <span className="flex items-center gap-1 text-amber-700 font-semibold">
                      <Lightbulb className="w-3 h-3" />
                      Prasyarat
                    </span>
                    <span>{material.prerequisites.length} konsep</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600 font-medium">
                    <span className={`flex items-center gap-1 font-semibold ${isSmaCard ? 'text-teal-700' : 'text-sky-700'}`}>
                      <GraduationCap className="w-3 h-3" />
                      Materi Inti
                    </span>
                    <span>{material.core_concepts.length} konsep</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600 font-medium">
                    <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                      <FileCheck className="w-3 h-3" />
                      Contoh Soal
                    </span>
                    <span>{material.worked_examples.length} soal</span>
                  </div>
                </div>
              </div>

              {/* Pinned Card Footer */}
              <div className="mt-auto pt-4 border-t border-slate-100">
                <Link
                  to={targetUrl}
                  className={`w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 font-bold text-xs rounded-xl transition-all shadow-xs hover:shadow-sm cursor-pointer text-white ${
                    isSmaCard ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-sky-600 hover:bg-sky-700'
                  }`}
                >
                  <span>{currentPercent > 0 && !isCompleted ? 'Lanjut Baca' : 'Pelajari Materi'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
