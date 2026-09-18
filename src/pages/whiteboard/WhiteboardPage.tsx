import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import type {
  WhiteboardDocument,
  WhiteboardElement,
  WhiteboardTool,
  WhiteboardBackground,
  RulerState,
  CompassState,
  ProtractorState,
  SessionPermissionMode,
  WhiteboardParticipant,
  LiveStrokePayload,
  EraserSettings,
  CanvasLayoutMode,
  PageDefinition,
  PageFormat,
} from '../../types/whiteboard';
import { PAGE_FORMATS } from '../../types/whiteboard';
import {
  getDocumentById,
  saveDocumentLocally,
  uploadWhiteboardToR2,
} from '../../services/whiteboardStorageService';
import { whiteboardRealtimeService } from '../../services/whiteboardRealtimeService';
import { exportWhiteboardToImage } from '../../services/whiteboardExportService';

import { WhiteboardCanvas } from '../../components/whiteboard/WhiteboardCanvas';
import { WhiteboardToolbar } from '../../components/whiteboard/WhiteboardToolbar';
import { PageNavigationSidebar } from '../../components/whiteboard/PageNavigationSidebar';
import { VirtualInstrumentsOverlay } from '../../components/whiteboard/VirtualInstrumentsOverlay';
import { WhiteboardExportModal } from '../../components/whiteboard/WhiteboardExportModal';
import { WhiteboardSessionModal } from '../../components/whiteboard/WhiteboardSessionModal';
import { useWhiteboardHeader } from '../../contexts/WhiteboardHeaderContext';

import { MathToolbox } from '../../components/whiteboard/toolboxes/MathToolbox';
import { PhysicsToolbox } from '../../components/whiteboard/toolboxes/PhysicsToolbox';
import { ChemToolbox } from '../../components/whiteboard/toolboxes/ChemToolbox';
import { BioToolbox } from '../../components/whiteboard/toolboxes/BioToolbox';
import { QuestionBankPickerModal } from '../../components/whiteboard/modals/QuestionBankPickerModal';
import { storageService } from '../../services/storageService';
import type { Question } from '../../types/database';

export const WhiteboardPage: React.FC = () => {
  const { id: routeId, roomCode: routeRoomCode } = useParams<{ id?: string; roomCode?: string }>();
  const navigate = useNavigate();
  const { user, profile, isTeacher } = useAuth();

  const docId = routeId || `wb-${routeRoomCode || 'new'}`;

  // State Dokumen Papan Tulis (Inisialisasi langsung dari cache lokal agar instan dan tidak blank saat refresh)
  const [doc, setDoc] = useState<WhiteboardDocument>(() => {
    try {
      const cached = localStorage.getItem(`wb_active_doc_${docId}`);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed && typeof parsed === 'object') {
          const formatKey = (parsed.pageFormat as PageFormat) || 'a4_portrait';
          const formatConfig = PAGE_FORMATS[formatKey] || PAGE_FORMATS.a4_portrait;
          const safePages =
            Array.isArray(parsed.pages) && parsed.pages.length > 0
              ? parsed.pages
              : [
                  {
                    pageIndex: 0,
                    width: formatConfig.width,
                    height: formatConfig.height,
                    topOffsetY: 32,
                  },
                ];
          return {
            ...parsed,
            id: docId,
            elements: Array.isArray(parsed.elements) ? parsed.elements : [],
            pages: safePages,
            layoutMode: parsed.layoutMode || 'infinite',
            pageFormat: parsed.pageFormat || 'a4_portrait',
            backgroundType: parsed.backgroundType || 'blank',
          };
        }
      }
    } catch (e) {
      console.warn('Gagal membaca cache lokal whiteboard:', e);
    }

    return {
      id: docId,
      title: routeRoomCode ? `Sesi Kelas ${routeRoomCode}` : 'Papan Tulis Tanpa Judul',
      layoutMode: 'infinite',
      pageFormat: 'a4_portrait',
      backgroundType: 'blank',
      pages: [
        {
          pageIndex: 0,
          width: 1240,
          height: 1754,
          topOffsetY: 32,
        },
      ],
      elements: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  });

  const isLoadedRef = useRef(false);
  const docRef = useRef(doc);
  useEffect(() => {
    docRef.current = doc;
  }, [doc]);

  // Riwayat Undo / Redo
  const [history, setHistory] = useState<WhiteboardElement[][]>([[]]);
  const [historyIndex, setHistoryIndex] = useState(0);

  // Alat & Pengaturan Menggambar
  const [activeTool, setActiveTool] = useState<WhiteboardTool>('pen');
  const [eraserSettings, setEraserSettings] = useState<EraserSettings>({
    mode: 'brush',
    shape: 'circle',
    size: 30,
  });
  const [color, setColor] = useState('#0f172a');
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [zoom, setZoom] = useState(1);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [targetScrollPage, setTargetScrollPage] = useState<number | null>(null);
  const [isPageSidebarOpen, setIsPageSidebarOpen] = useState(() => {
    return typeof window !== 'undefined' ? window.innerWidth >= 1024 : true;
  });
  const [isToolbarCollapsed, setIsToolbarCollapsed] = useState(() => {
    return typeof window !== 'undefined' ? window.innerWidth < 640 : false;
  });

  const handleSelectPage = useCallback((index: number) => {
    setCurrentPageIndex(index);
    setTargetScrollPage(index);
    setTimeout(() => setTargetScrollPage(null), 300);
  }, []);

  // Instrumen Pengukuran
  const [ruler, setRuler] = useState<RulerState>({
    x: 200,
    y: 200,
    angleDeg: 0,
    lengthPx: 350,
    isVisible: false,
  });

  const [compass, setCompass] = useState<CompassState>({
    centerX: 400,
    centerY: 300,
    radiusPx: 120,
    angleDeg: 0,
    isVisible: false,
  });

  const [protractor, setProtractor] = useState<ProtractorState>({
    x: 300,
    y: 250,
    angleDeg: 0,
    radiusPx: 140,
    isVisible: false,
  });

  // Modal & Toolboxes Popovers
  const [isMathOpen, setIsMathOpen] = useState(false);
  const [isPhysicsOpen, setIsPhysicsOpen] = useState(false);
  const [isChemOpen, setIsChemOpen] = useState(false);
  const [isBioOpen, setIsBioOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isSessionOpen, setIsSessionOpen] = useState(false);
  const [isQuestionBankOpen, setIsQuestionBankOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Realtime Session & Live Strokes
  const [roomCode, setRoomCode] = useState<string>(routeRoomCode || '');
  const [isHost, setIsHost] = useState<boolean>(Boolean(isTeacher && !routeRoomCode));
  const [sessionMode, setSessionMode] = useState<SessionPermissionMode>('collaborative');
  const [participants, setParticipants] = useState<WhiteboardParticipant[]>([]);
  const [liveStrokes, setLiveStrokes] = useState<Record<string, LiveStrokePayload>>({});

  const { setHeaderState } = useWhiteboardHeader();

  const handleStartSession = useCallback(
    (code: string) => {
      setIsHost(true);
      setRoomCode(code);
      navigate(`/whiteboard/room/${code}`, { replace: true });
    },
    [navigate]
  );

  const handleJoinSession = useCallback(
    (code: string) => {
      setIsHost(false);
      setRoomCode(code);
      navigate(`/whiteboard/room/${code}`, { replace: true });
    },
    [navigate]
  );

  const handleLeaveSession = useCallback(() => {
    whiteboardRealtimeService.leaveRoom();
    setRoomCode('');
    setParticipants([]);
    setLiveStrokes({});
    setIsHost(Boolean(isTeacher));
    navigate('/whiteboard/default', { replace: true });
  }, [isTeacher, navigate]);

  // Sinkronisasi status sesi & izin whiteboard ke header navigasi web secara reaktif
  useEffect(() => {
    setHeaderState({
      roomCode,
      sessionMode,
      isHost: isHost || Boolean(isTeacher),
      onOpenSession: () => setIsSessionOpen(true),
      onToggleSessionMode: () => {
        const next = sessionMode === 'collaborative' ? 'presentation' : 'collaborative';
        setSessionMode(next);
        if (roomCode) whiteboardRealtimeService.broadcastSessionSettings(next);
      },
    });

    return () => {
      setHeaderState(null);
    };
  }, [roomCode, sessionMode, isHost, isTeacher, setHeaderState]);

  // 1. Muat Dokumen dari IndexedDB saat pertama kali dibuka
  useEffect(() => {
    async function loadDoc() {
      const targetId = routeId || (routeRoomCode ? `wb-${routeRoomCode}` : 'default');
      try {
        const saved = await getDocumentById(targetId);
        if (saved) {
          const formatConfig = PAGE_FORMATS[saved.pageFormat] || PAGE_FORMATS.a4_portrait;
          const safePages =
            Array.isArray(saved.pages) && saved.pages.length > 0
              ? saved.pages
              : [
                  {
                    pageIndex: 0,
                    width: formatConfig.width,
                    height: formatConfig.height,
                    topOffsetY: 32,
                  },
                ];
          const safeDoc: WhiteboardDocument = {
            ...saved,
            id: docId,
            elements: Array.isArray(saved.elements) ? saved.elements : [],
            pages: safePages,
            layoutMode: saved.layoutMode || 'infinite',
            pageFormat: saved.pageFormat || 'a4_portrait',
            backgroundType: saved.backgroundType || 'blank',
          };
          setDoc(safeDoc);
          setHistory([safeDoc.elements]);
          setHistoryIndex(0);
          try {
            localStorage.setItem(`wb_active_doc_${docId}`, JSON.stringify(safeDoc));
          } catch {}
        }
      } catch (err) {
        console.warn('Gagal membaca data dari IndexedDB:', err);
      } finally {
        isLoadedRef.current = true;
      }
    }
    loadDoc();
  }, [routeId, routeRoomCode, docId]);

  // 2. Setup Koneksi Realtime jika ada roomCode
  useEffect(() => {
    if (!roomCode) return;

    const currentUser = {
      id: user?.id || `user-${Math.random().toString(36).substring(2, 7)}`,
      name: profile?.full_name || user?.email || (isTeacher ? 'Guru' : 'Siswa Tamu'),
      role: (isTeacher ? 'teacher' : 'student') as 'teacher' | 'student',
      color: isTeacher ? '#dc2626' : '#2563eb',
    };

    whiteboardRealtimeService.joinRoom(roomCode, currentUser);

    // Minta sinkronisasi papan tulis jika baru bergabung
    setTimeout(() => {
      whiteboardRealtimeService.broadcast('sync_request', {});
    }, 400);

    const unsubscribe = whiteboardRealtimeService.subscribe((payload) => {
      if (payload.action === 'sync_request') {
        // Selalu kirimkan snapshot papan tulis ke peserta yang baru bergabung
        whiteboardRealtimeService.broadcast('sync_response', {
          elements: docRef.current.elements,
          pages: docRef.current.pages,
          backgroundType: docRef.current.backgroundType,
          layoutMode: docRef.current.layoutMode,
          sessionMode,
        });
      } else if (payload.action === 'sync_response') {
        setDoc((prev) => ({
          ...prev,
          elements: payload.elements || prev.elements,
          pages: payload.pages && payload.pages.length > 0 ? payload.pages : prev.pages,
          backgroundType: payload.backgroundType || prev.backgroundType,
        }));
        if (payload.sessionMode) {
          setSessionMode(payload.sessionMode);
        }
      } else if (payload.action === 'background_changed' && payload.backgroundType) {
        setDoc((prev) => ({ ...prev, backgroundType: payload.backgroundType! }));
      } else if (payload.action === 'element_added' && payload.element) {
        setLiveStrokes((prev) => {
          if (!prev[payload.senderId]) return prev;
          const next = { ...prev };
          delete next[payload.senderId];
          return next;
        });
        setDoc((prev) => ({
          ...prev,
          elements: [...prev.elements, payload.element!],
        }));
      } else if (payload.action === 'stroke_drawing' && payload.liveStroke) {
        setLiveStrokes((prev) => ({
          ...prev,
          [payload.senderId]: payload.liveStroke!,
        }));
      } else if (payload.action === 'stroke_finished') {
        setLiveStrokes((prev) => {
          if (!prev[payload.senderId]) return prev;
          const next = { ...prev };
          delete next[payload.senderId];
          return next;
        });
      } else if (payload.action === 'element_updated' && payload.element) {
        setDoc((prev) => ({
          ...prev,
          elements: prev.elements.map((el) =>
            el.id === payload.element!.id ? payload.element! : el
          ),
        }));
      } else if (payload.action === 'element_deleted' && payload.elementId) {
        setDoc((prev) => ({
          ...prev,
          elements: prev.elements.filter((el) => el.id !== payload.elementId),
        }));
      } else if (payload.action === 'page_added' && payload.page) {
        setDoc((prev) => ({
          ...prev,
          pages: [...prev.pages, payload.page!],
        }));
      } else if (payload.action === 'pointer_moved' && payload.pointer) {
        setParticipants((prev) => {
          const exists = prev.find((p) => p.id === payload.senderId);
          if (exists) {
            return prev.map((p) =>
              p.id === payload.senderId
                ? {
                    ...p,
                    cursorX: payload.pointer!.x,
                    cursorY: payload.pointer!.y,
                    isLaserActive: payload.pointer!.isLaserActive,
                  }
                : p
            );
          } else {
            return [
              ...prev,
              {
                id: payload.senderId,
                name: payload.pointer!.name,
                role: payload.pointer!.role,
                color: payload.pointer!.color,
                cursorX: payload.pointer!.x,
                cursorY: payload.pointer!.y,
                isLaserActive: payload.pointer!.isLaserActive,
                lastActive: Date.now(),
              },
            ];
          }
        });
      } else if (payload.action === 'session_settings_changed' && payload.sessionMode) {
        setSessionMode(payload.sessionMode);
      }
    });

    const unsubPresence = whiteboardRealtimeService.onPresenceChange((list) => {
      setParticipants(list);
    });

    return () => {
      unsubscribe();
      unsubPresence();
      whiteboardRealtimeService.leaveRoom();
    };
  }, [roomCode, user, isTeacher]);

  // 3. Auto-save ke IndexedDB & LocalStorage setiap kali elemen berubah (debounced)
  useEffect(() => {
    // Simpan ke local storage secara instan
    try {
      localStorage.setItem(`wb_active_doc_${doc.id}`, JSON.stringify(doc));
    } catch {}

    // Jangan timpa IndexedDB jika loadDoc awal belum selesai
    if (!isLoadedRef.current) return;

    const timer = setTimeout(() => {
      saveDocumentLocally(doc);
    }, 1000);
    return () => clearTimeout(timer);
  }, [doc]);

  // Jamin penyimpanan saat pengguna me-refresh atau menutup jendela/tab
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (docRef.current) {
        try {
          localStorage.setItem(`wb_active_doc_${docRef.current.id}`, JSON.stringify(docRef.current));
        } catch {}
        saveDocumentLocally(docRef.current);
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  // Tambah Elemen Baru ke Kanvas
  const handleAddElement = useCallback(
    (newEl: Partial<WhiteboardElement>) => {
      const formatConfig = PAGE_FORMATS[doc.pageFormat] || PAGE_FORMATS.a4_portrait;
      const detectedPageIndex =
        doc.layoutMode === 'paginated'
          ? Math.max(0, Math.floor(((newEl.y ?? 0) - 32) / (formatConfig.height + 48)))
          : undefined;

      const el: WhiteboardElement = {
        id: newEl.id || `el-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        type: newEl.type || 'stroke',
        pageIndex: typeof newEl.pageIndex !== 'undefined' ? newEl.pageIndex : detectedPageIndex,
        x: newEl.x || 100,
        y: newEl.y || 100,
        width: newEl.width,
        height: newEl.height,
        color: newEl.color || color,
        strokeWidth: newEl.strokeWidth || strokeWidth,
        opacity: newEl.opacity ?? 1,
        isLocked: false,
        zIndex: doc.elements.length + 1,
        points: newEl.points,
        text: newEl.text,
        fontSize: newEl.fontSize,
        imageUrl: newEl.imageUrl,
        payload: newEl.payload,
      };

      setDoc((prev) => {
        const nextElements = [...prev.elements, el];
        // Tambah ke riwayat undo
        const newHist = history.slice(0, historyIndex + 1);
        newHist.push(nextElements);
        setHistory(newHist);
        setHistoryIndex(newHist.length - 1);

        return {
          ...prev,
          elements: nextElements,
          updatedAt: new Date().toISOString(),
        };
      });

      // Siarkan ke partisipan jika sesi online aktif
      if (roomCode) {
        whiteboardRealtimeService.broadcastElementAdded(el);
      }
    },
    [doc.layoutMode, doc.elements.length, currentPageIndex, color, strokeWidth, history, historyIndex, roomCode]
  );

  // Hapus Elemen (Objek terkunci tidak dapat dihapus)
  const handleDeleteElement = useCallback(
    (id: string) => {
      const target = doc.elements.find((el) => el.id === id);
      if (target?.isLocked) return; // Lindungi objek terkunci

      setDoc((prev) => {
        const nextElements = prev.elements.filter((el) => el.id !== id);
        const newHist = history.slice(0, historyIndex + 1);
        newHist.push(nextElements);
        setHistory(newHist);
        setHistoryIndex(newHist.length - 1);

        return { ...prev, elements: nextElements };
      });

      if (roomCode) {
        whiteboardRealtimeService.broadcastElementDeleted(id);
      }
    },
    [history, historyIndex, roomCode]
  );

  // Hapus Sekelompok Elemen (Lasso Eraser)
  const handleDeleteElements = useCallback(
    (ids: string[]) => {
      if (ids.length === 0) return;
      // Jangan hapus objek yang sedang terkunci
      const deletableIds = ids.filter((id) => {
        const el = doc.elements.find((e) => e.id === id);
        return el && !el.isLocked;
      });
      if (deletableIds.length === 0) return;

      const idSet = new Set(deletableIds);
      setDoc((prev) => {
        const nextElements = prev.elements.filter((el) => !idSet.has(el.id));
        const newHist = history.slice(0, historyIndex + 1);
        newHist.push(nextElements);
        setHistory(newHist);
        setHistoryIndex(newHist.length - 1);

        return { ...prev, elements: nextElements };
      });

      if (roomCode) {
        ids.forEach((id) => whiteboardRealtimeService.broadcastElementDeleted(id));
      }
    },
    [history, historyIndex, roomCode]
  );

  // Potong goresan parsial saat disapu penghapus brush
  const handleCarveStroke = useCallback(
    (id: string, subStrokes: [number, number][][]) => {
      const originalEl = doc.elements.find((e) => e.id === id);
      if (!originalEl) return;

      const first = subStrokes[0];
      const updatedOriginal: WhiteboardElement = {
        ...originalEl,
        x: first ? Math.min(...first.map((p) => p[0])) : originalEl.x,
        y: first ? Math.min(...first.map((p) => p[1])) : originalEl.y,
        points: first,
      };

      const newFragments: WhiteboardElement[] =
        subStrokes.length > 1
          ? subStrokes.slice(1).map((frag, idx) => ({
              ...originalEl,
              id: `${originalEl.id}-frag-${Date.now()}-${idx}`,
              x: Math.min(...frag.map((p) => p[0])),
              y: Math.min(...frag.map((p) => p[1])),
              points: frag,
            }))
          : [];

      setDoc((prev) => {
        if (subStrokes.length === 0) {
          return {
            ...prev,
            elements: prev.elements.filter((e) => e.id !== id),
          };
        }

        const nextElements: WhiteboardElement[] = [];
        for (const e of prev.elements) {
          if (e.id === id) {
            nextElements.push(updatedOriginal);
            nextElements.push(...newFragments);
          } else {
            nextElements.push(e);
          }
        }

        return { ...prev, elements: nextElements };
      });

      if (roomCode) {
        if (subStrokes.length === 0) {
          whiteboardRealtimeService.broadcastElementDeleted(id);
        } else {
          whiteboardRealtimeService.broadcastElementUpdated(updatedOriginal);
          newFragments.forEach((f) => whiteboardRealtimeService.broadcastElementAdded(f));
        }
      }
    },
    [doc.elements, roomCode]
  );

  // Geser / Pindahkan Elemen Tunggal (Alat Pilih Objek)
  const handleUpdateElement = useCallback(
    (id: string, dx: number, dy: number) => {
      let updatedEl: WhiteboardElement | null = null;
      setDoc((prev) => {
        const target = prev.elements.find((el) => el.id === id);
        if (!target || target.isLocked) return prev; // Lindungi: jangan pindahkan jika terkunci!

        const nextElements = prev.elements.map((el) => {
          if (el.id !== id) return el;
          if (el.type === 'stroke' && el.points) {
            const movedPoints: [number, number][] = el.points.map((p) => [
              p[0] + dx,
              p[1] + dy,
            ]);
            updatedEl = {
              ...el,
              points: movedPoints,
              x: el.x + dx,
              y: el.y + dy,
            };
            return updatedEl;
          } else {
            updatedEl = {
              ...el,
              x: el.x + dx,
              y: el.y + dy,
            };
            return updatedEl;
          }
        });
        return { ...prev, elements: nextElements };
      });

      if (roomCode && updatedEl) {
        whiteboardRealtimeService.broadcastElementUpdated(updatedEl);
      }
    },
    [roomCode]
  );

  // Modifikasi Properti Elemen (Resize, Lock, Z-Index, Kartu Soal Rubrik/Collapse, Gambar R2)
  const handleModifyElement = useCallback(
    (updatedEl: WhiteboardElement) => {
      setDoc((prev) => {
        const nextElements = prev.elements.map((el) =>
          el.id === updatedEl.id ? updatedEl : el
        );
        const newHist = history.slice(0, historyIndex + 1);
        newHist.push(nextElements);
        setHistory(newHist);
        setHistoryIndex(newHist.length - 1);

        return { ...prev, elements: nextElements, updatedAt: new Date().toISOString() };
      });

      if (roomCode) {
        whiteboardRealtimeService.broadcastElementUpdated(updatedEl);
      }
    },
    [history, historyIndex, roomCode]
  );

  // Sisipkan Soal Lengkap dari Bank Soal ke Whiteboard
  const handleSelectQuestionFromBank = useCallback(
    (q: Question) => {
      let targetX = 100;
      let targetY = 100;

      if (doc.layoutMode === 'infinite') {
        targetX = Math.round((-panX + 220) / Math.max(0.2, zoom));
        targetY = Math.round((-panY + 160) / Math.max(0.2, zoom));
      } else {
        const formatConfig = PAGE_FORMATS[doc.pageFormat] || PAGE_FORMATS.a4_portrait;
        const pageTop = currentPageIndex * formatConfig.height;
        targetX = Math.round((formatConfig.width - 580) / 2);
        targetY = Math.round(pageTop + 80);
      }

      const newQuestionElement: WhiteboardElement = {
        id: `question-${q.id}-${Date.now()}`,
        type: 'question_card',
        pageIndex: currentPageIndex,
        x: targetX,
        y: targetY,
        width: 560,
        height: 220,
        color: '#2563eb',
        strokeWidth: 1,
        opacity: 1,
        isLocked: false,
        zIndex: (doc.elements.length || 0) + 1,
        payload: {
          questionId: q.id,
          title: q.title,
          pillarNumber: q.pillar_number,
          subtopic: q.subtopic,
          difficulty: q.difficulty,
          questionStyle: q.question_style,
          questionText: q.question_text,
          diagramUrl: q.diagram_url,
          subQuestions: q.sub_questions,
          totalPoints: q.total_points || 10,
          sourceEvent: q.source_event,
          showRubric: false,
          isCollapsed: false,
        },
      };

      handleAddElement(newQuestionElement);
    },
    [doc.layoutMode, doc.pageFormat, doc.elements.length, currentPageIndex, panX, panY, zoom, handleAddElement]
  );

  // Unggah & Sisipkan Berkas Gambar dari Toolbar (Otomatis ke R2)
  const handleAddImageFileFromToolbar = useCallback(
    (file: File) => {
      let targetX = 100;
      let targetY = 100;

      if (doc.layoutMode === 'infinite') {
        targetX = Math.round((-panX + 250) / Math.max(0.2, zoom));
        targetY = Math.round((-panY + 200) / Math.max(0.2, zoom));
      } else {
        const formatConfig = PAGE_FORMATS[doc.pageFormat] || PAGE_FORMATS.a4_portrait;
        const pageTop = currentPageIndex * formatConfig.height;
        targetX = Math.round((formatConfig.width - 360) / 2);
        targetY = Math.round(pageTop + 150);
      }

      const elementId = `img-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
      const reader = new FileReader();

      reader.onload = async (ev) => {
        const dataUrl = ev.target?.result as string;
        if (!dataUrl) return;

        const newEl: WhiteboardElement = {
          id: elementId,
          type: 'image',
          pageIndex: currentPageIndex,
          x: targetX,
          y: targetY,
          width: 360,
          height: 260,
          color: 'transparent',
          strokeWidth: 0,
          opacity: 1,
          isLocked: false,
          zIndex: (doc.elements.length || 0) + 1,
          imageUrl: dataUrl,
        };

        handleAddElement(newEl);

        // Unggah otomatis di latar belakang ke Cloudflare R2
        try {
          const uploadRes = await storageService.uploadFile(file, {
            category: 'questions',
            filename: file.name,
          });
          if (uploadRes && uploadRes.success && uploadRes.url) {
            handleModifyElement({
              ...newEl,
              imageUrl: uploadRes.url,
            });
          }
        } catch (err) {
          console.warn('[Whiteboard] Unggah gambar ke R2 gagal, menggunakan pratinjau lokal:', err);
        }
      };

      reader.readAsDataURL(file);
    },
    [doc.layoutMode, doc.pageFormat, doc.elements.length, currentPageIndex, panX, panY, zoom, handleAddElement, handleModifyElement]
  );

  // Siarkan Goresan Live Streaming Saat Sedang Menggambar (Real-Time Drag)
  const handleBroadcastLiveStroke = useCallback(
    (stroke: LiveStrokePayload) => {
      if (roomCode) {
        whiteboardRealtimeService.broadcastLiveStroke(stroke);
      }
    },
    [roomCode]
  );

  const handleBroadcastFinishStroke = useCallback(
    (strokeId: string) => {
      if (roomCode) {
        whiteboardRealtimeService.broadcastFinishStroke(strokeId);
      }
    },
    [roomCode]
  );

  // Tambah Halaman Baru di Bagian Bawah (Mode Paginated)
  const handleAutoAppendPage = useCallback(() => {
    const formatConfig = PAGE_FORMATS[doc.pageFormat] || PAGE_FORMATS.a4_portrait;
    const nextIdx = doc.pages.length;
    const gapY = 48;
    const pagePaddingTop = 32;
    const topOffsetY = pagePaddingTop + nextIdx * (formatConfig.height + gapY);

    const newPage: PageDefinition = {
      pageIndex: nextIdx,
      width: formatConfig.width,
      height: formatConfig.height,
      topOffsetY,
    };

    setDoc((prev) => ({
      ...prev,
      layoutMode: 'paginated',
      pages: [...prev.pages, newPage],
      updatedAt: new Date().toISOString(),
    }));

    setCurrentPageIndex(nextIdx);
    setTargetScrollPage(nextIdx);
    setTimeout(() => setTargetScrollPage(null), 300);

    if (roomCode) {
      whiteboardRealtimeService.broadcastPageAdded(newPage);
    }
  }, [doc.pageFormat, doc.pages.length, roomCode]);

  // Beralih Mode Tata Letak Kanvas (Infinite vs Multi-Halaman A4)
  const handleSwitchLayoutMode = useCallback(
    (mode: CanvasLayoutMode) => {
      setDoc((prev) => {
        const formatConfig = PAGE_FORMATS[prev.pageFormat] || PAGE_FORMATS.a4_portrait;
        let pages = prev.pages;
        if (mode === 'paginated' && (!pages || pages.length === 0)) {
          pages = [
            {
              pageIndex: 0,
              width: formatConfig.width,
              height: formatConfig.height,
              topOffsetY: 32,
            },
          ];
        }
        return {
          ...prev,
          layoutMode: mode,
          pages,
          updatedAt: new Date().toISOString(),
        };
      });

      if (roomCode) {
        whiteboardRealtimeService.broadcast('sync_response', {
          elements: docRef.current.elements,
          pages: docRef.current.pages,
          backgroundType: docRef.current.backgroundType,
          layoutMode: mode,
          sessionMode,
        });
      }
    },
    [roomCode, sessionMode]
  );

  // Hapus Halaman Spesifik
  const handleDeletePage = (index: number) => {
    if (doc.pages.length <= 1) return;
    setDoc((prev) => ({
      ...prev,
      pages: prev.pages.filter((_, i) => i !== index),
      elements: prev.elements.filter((el) => el.pageIndex !== index),
    }));
    setCurrentPageIndex((prevIdx) => Math.max(0, Math.min(doc.pages.length - 2, prevIdx)));
  };

  // Undo & Redo
  const handleUndo = useCallback(() => {
    if (historyIndex > 0) {
      const nextIdx = historyIndex - 1;
      setHistoryIndex(nextIdx);
      setDoc((prev) => ({ ...prev, elements: history[nextIdx] }));
    }
  }, [historyIndex, history]);

  const handleRedo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      const nextIdx = historyIndex + 1;
      setHistoryIndex(nextIdx);
      setDoc((prev) => ({ ...prev, elements: history[nextIdx] }));
    }
  }, [historyIndex, history]);

  // Pintasan Keyboard (Ctrl+Z: Undo, Ctrl+Y / Ctrl+Shift+Z: Redo)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target?.isContentEditable
      ) {
        return;
      }

      const isCtrlOrMeta = e.ctrlKey || e.metaKey;
      if (!isCtrlOrMeta) return;

      if (e.key.toLowerCase() === 'z') {
        e.preventDefault();
        if (e.shiftKey) {
          handleRedo();
        } else {
          handleUndo();
        }
      } else if (e.key.toLowerCase() === 'y') {
        e.preventDefault();
        handleRedo();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleUndo, handleRedo]);

  // Broadcast Pointer Laser
  const handleBroadcastPointer = (x: number, y: number, isLaser: boolean) => {
    if (!roomCode) return;
    whiteboardRealtimeService.broadcastPointer(
      x,
      y,
      isLaser,
      {
        name: profile?.full_name || user?.email || (isTeacher ? 'Guru' : 'Siswa'),
        role: (isTeacher ? 'teacher' : 'student') as 'teacher' | 'student',
        color: isTeacher ? '#dc2626' : '#2563eb',
      },
      currentPageIndex
    );
  };

  // Simpan Cepat ke Cloudflare R2
  const handleSaveToR2 = async () => {
    try {
      setIsSaving(true);
      const previewBlob = await exportWhiteboardToImage(doc, 'image/jpeg', 0.8, 1.0);
      const res = await uploadWhiteboardToR2(doc, previewBlob);
      if (res.success) {
        alert('Berhasil disimpan ke Cloudflare R2 Storage!');
      } else {
        alert('Gagal menyimpan ke Cloudflare R2.');
      }
    } catch (err) {
      console.error(err);
      alert('Gagal menyimpan ke R2.');
    } finally {
      setIsSaving(false);
    }
  };

  // Evaluasi Hak Gambar Siswa (Jika Presentasi & Bukan Host & Bukan Guru -> Read Only)
  const isReadOnly = sessionMode === 'presentation' && !isHost && !isTeacher && Boolean(roomCode);

  // Konversi koordinat layar client ke koordinat dunia kanvas untuk instrumen virtual
  const clientToCanvas = useCallback(
    (clientX: number, clientY: number): { x: number; y: number } => {
      const canvas = document.querySelector('canvas');
      if (!canvas) return { x: clientX, y: clientY };
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      const canvasX = (clientX - rect.left) * scaleX;
      const canvasY = (clientY - rect.top) * scaleY;
      if (doc.layoutMode === 'infinite') {
        return {
          x: (canvasX - panX) / zoom,
          y: (canvasY - panY) / zoom,
        };
      }
      return { x: canvasX, y: canvasY };
    },
    [doc.layoutMode, panX, panY, zoom]
  );

  // Update Zoom & Pan secara serentak (Smooth Focal Zoom pada Infinite Canvas)
  const handleUpdateZoomAndPan = useCallback(
    (newZoom: number, newPanX: number, newPanY: number) => {
      setZoom(newZoom);
      setPanX(newPanX);
      setPanY(newPanY);
    },
    []
  );

  // Pusatkan Tampilan ke Konten atau Reset Zoom 100%
  const handleResetOrFitZoom = useCallback(() => {
    if (doc.layoutMode === 'infinite' && doc.elements && doc.elements.length > 0) {
      let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

      for (const el of doc.elements) {
        if (el.type === 'stroke' && el.points && el.points.length > 0) {
          for (const [px, py] of el.points) {
            minX = Math.min(minX, px);
            minY = Math.min(minY, py);
            maxX = Math.max(maxX, px);
            maxY = Math.max(maxY, py);
          }
        } else {
          const w = el.width || (el.type === 'question_card' ? 560 : 300);
          const h = el.height || (el.type === 'question_card' ? 220 : 200);
          minX = Math.min(minX, el.x);
          minY = Math.min(minY, el.y);
          maxX = Math.max(maxX, el.x + w);
          maxY = Math.max(maxY, el.y + h);
        }
      }

      if (minX !== Infinity && isFinite(minX)) {
        const contentW = Math.max(120, maxX - minX);
        const contentH = Math.max(120, maxY - minY);
        const viewW = typeof window !== 'undefined' ? window.innerWidth : 1200;
        const viewH = typeof window !== 'undefined' ? window.innerHeight : 800;

        const fitZoom = Math.min(
          1.2,
          Math.max(0.25, Math.min((viewW - 160) / contentW, (viewH - 160) / contentH))
        );

        const centerX = (minX + maxX) / 2;
        const centerY = (minY + maxY) / 2;
        const newPanX = Math.round(viewW / 2 - centerX * fitZoom);
        const newPanY = Math.round(viewH / 2 - centerY * fitZoom);

        setZoom(Number(fitZoom.toFixed(2)));
        setPanX(newPanX);
        setPanY(newPanY);
        return;
      }
    }

    setZoom(1);
    setPanX(0);
    setPanY(0);
  }, [doc.layoutMode, doc.elements]);

  return (
    <div
      className={`relative w-full h-[calc(100vh-64px)] overflow-hidden flex flex-col select-none ${
        doc.layoutMode === 'paginated'
          ? 'bg-slate-100'
          : doc.backgroundType === 'chalkboard'
          ? 'bg-slate-900'
          : 'bg-white'
      }`}
    >

      {/* Toolbar Samping Kiri */}
      <WhiteboardToolbar
        activeTool={activeTool}
        onSelectTool={setActiveTool}
        eraserSettings={eraserSettings}
        onChangeEraserSettings={setEraserSettings}
        color={color}
        onChangeColor={setColor}
        strokeWidth={strokeWidth}
        onChangeStrokeWidth={setStrokeWidth}
        background={doc.backgroundType}
        onChangeBackground={(bg) => {
          setDoc((prev) => ({ ...prev, backgroundType: bg }));
          if (roomCode) {
            whiteboardRealtimeService.broadcastBackground(bg);
          }
        }}
        canUndo={historyIndex > 0}
        canRedo={historyIndex < history.length - 1}
        onUndo={handleUndo}
        onRedo={handleRedo}
        zoom={zoom}
        onZoomIn={() => setZoom((z) => Math.min(4, z + 0.15))}
        onZoomOut={() => setZoom((z) => Math.max(0.2, z - 0.15))}
        onResetZoom={handleResetOrFitZoom}
        onOpenMath={() => setIsMathOpen(true)}
        onOpenPhysics={() => setIsPhysicsOpen(true)}
        onOpenChem={() => setIsChemOpen(true)}
        onOpenBio={() => setIsBioOpen(true)}
        onToggleRuler={() => setRuler((r) => ({ ...r, isVisible: !r.isVisible }))}
        onToggleCompass={() => setCompass((c) => ({ ...c, isVisible: !c.isVisible }))}
        onToggleProtractor={() => setProtractor((p) => ({ ...p, isVisible: !p.isVisible }))}
        onOpenExport={() => setIsExportOpen(true)}
        onSaveToR2={handleSaveToR2}
        isSaving={isSaving}
        layoutMode={doc.layoutMode}
        onChangeLayoutMode={handleSwitchLayoutMode}
        isCollapsed={isToolbarCollapsed}
        onToggleCollapse={() => setIsToolbarCollapsed((prev) => !prev)}
        onOpenQuestionBank={() => setIsQuestionBankOpen(true)}
        onAddImageFile={handleAddImageFileFromToolbar}
      />

      {/* Main Canvas Area */}
      <div className="relative flex-1 w-full h-full overflow-hidden">
        {/* Sidebar Halaman (Khusus Mode Paginated) */}
        {doc.layoutMode === 'paginated' && (
          <PageNavigationSidebar
            pages={doc.pages}
            currentPageIndex={currentPageIndex}
            onSelectPage={handleSelectPage}
            onAddPage={handleAutoAppendPage}
            onDeletePage={handleDeletePage}
            isOpen={isPageSidebarOpen}
            onToggle={() => setIsPageSidebarOpen(!isPageSidebarOpen)}
          />
        )}

        {/* Kanvas Interaktif */}
        <WhiteboardCanvas
          document={doc}
          activeTool={activeTool}
          eraserSettings={eraserSettings}
          color={color}
          strokeWidth={strokeWidth}
          zoom={zoom}
          panX={panX}
          panY={panY}
          onUpdatePan={(x, y) => {
            setPanX(x);
            setPanY(y);
          }}
          onUpdateZoomAndPan={handleUpdateZoomAndPan}
          onAddElement={handleAddElement}
          onUpdateElement={handleUpdateElement}
          onModifyElement={handleModifyElement}
          onDeleteElement={handleDeleteElement}
          onDeleteElements={handleDeleteElements}
          onCarveStroke={handleCarveStroke}
          onAutoAppendPage={handleAutoAppendPage}
          onBroadcastPointer={handleBroadcastPointer}
          participants={participants}
          isReadOnly={isReadOnly}
          ruler={ruler}
          compass={compass}
          liveStrokes={liveStrokes}
          onBroadcastLiveStroke={handleBroadcastLiveStroke}
          onBroadcastFinishStroke={handleBroadcastFinishStroke}
          currentPageIndex={currentPageIndex}
          onPageChange={setCurrentPageIndex}
          targetScrollPage={targetScrollPage}
        />

        {/* Overlay Instrumen Virtual (Penggaris, Jangka, Busur) */}
        <VirtualInstrumentsOverlay
          ruler={ruler}
          compass={compass}
          protractor={protractor}
          onUpdateRuler={(state) => setRuler((r) => ({ ...r, ...state }))}
          onUpdateCompass={(state) => setCompass((c) => ({ ...c, ...state }))}
          onUpdateProtractor={(state) => setProtractor((p) => ({ ...p, ...state }))}
          onAddElement={handleAddElement}
          currentColor={color}
          clientToCanvas={clientToCanvas}
        />
      </div>

      {/* Modals & Toolboxes */}
      <MathToolbox
        isOpen={isMathOpen}
        onClose={() => setIsMathOpen(false)}
        onAddElement={handleAddElement}
        currentColor={color}
      />

      <PhysicsToolbox
        isOpen={isPhysicsOpen}
        onClose={() => setIsPhysicsOpen(false)}
        onAddElement={handleAddElement}
        currentColor={color}
      />

      <ChemToolbox
        isOpen={isChemOpen}
        onClose={() => setIsChemOpen(false)}
        onAddElement={handleAddElement}
        currentColor={color}
      />

      <BioToolbox
        isOpen={isBioOpen}
        onClose={() => setIsBioOpen(false)}
        onAddElement={handleAddElement}
        currentColor={color}
      />

      <WhiteboardExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        document={doc}
        currentPageIndex={currentPageIndex}
      />

      <WhiteboardSessionModal
        isOpen={isSessionOpen}
        onClose={() => setIsSessionOpen(false)}
        roomCode={roomCode}
        isHost={isHost || Boolean(isTeacher)}
        sessionMode={sessionMode}
        onChangeSessionMode={(mode) => {
          setSessionMode(mode);
          if (roomCode) whiteboardRealtimeService.broadcastSessionSettings(mode);
        }}
        participants={participants}
        onStartSession={handleStartSession}
        onJoinSession={handleJoinSession}
        onLeaveSession={handleLeaveSession}
      />

      {/* Modal Pemilih Bank Soal OSN */}
      <QuestionBankPickerModal
        isOpen={isQuestionBankOpen}
        onClose={() => setIsQuestionBankOpen(false)}
        onSelectQuestion={handleSelectQuestionFromBank}
      />
    </div>
  );
};
