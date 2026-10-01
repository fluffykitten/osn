import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import {
  Smartphone,
  Tablet,
  Laptop,
  Monitor,
  RotateCw,
  RefreshCw,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Copy,
  Check,
  X,
  ChevronDown,
  Maximize2,
  Sliders,
  Sparkles,
  Wifi,
  Battery,
  Eye,
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useFeatureFlags } from '../../services/featureFlagsService';

/**
 * Mendeteksi apakah komponen ini sedang dirender di dalam iframe simulator
 * (Mencegah recursive iframe embedding / infinite loop)
 */
export const isInsideDeviceSimulator = (): boolean => {
  try {
    return typeof window !== 'undefined' && window.self !== window.top;
  } catch {
    return true;
  }
};

export type DeviceType = 'desktop' | 'mobile' | 'tablet' | 'laptop';

export interface DevicePreset {
  id: string;
  name: string;
  type: DeviceType;
  width: number;
  height: number;
  bezel: 'phone' | 'tablet' | 'laptop';
  notch?: boolean;
  dynamicIsland?: boolean;
  osBadge: string;
}

export const DEVICE_PRESETS: DevicePreset[] = [
  // Mobile Presets
  {
    id: 'iphone-15-pro',
    name: 'iPhone 15 Pro',
    type: 'mobile',
    width: 393,
    height: 852,
    bezel: 'phone',
    dynamicIsland: true,
    osBadge: 'iOS',
  },
  {
    id: 'iphone-se',
    name: 'iPhone SE (Layar Kecil)',
    type: 'mobile',
    width: 375,
    height: 667,
    bezel: 'phone',
    osBadge: 'iOS',
  },
  {
    id: 'galaxy-s24',
    name: 'Samsung Galaxy S24',
    type: 'mobile',
    width: 412,
    height: 915,
    bezel: 'phone',
    notch: true,
    osBadge: 'Android',
  },

  // Tablet Presets
  {
    id: 'ipad-air',
    name: 'iPad Air 11"',
    type: 'tablet',
    width: 820,
    height: 1180,
    bezel: 'tablet',
    osBadge: 'iPadOS',
  },
  {
    id: 'ipad-mini',
    name: 'iPad Mini (768p)',
    type: 'tablet',
    width: 768,
    height: 1024,
    bezel: 'tablet',
    osBadge: 'iPadOS',
  },

  // Laptop Presets
  {
    id: 'macbook-air',
    name: 'MacBook Air 13"',
    type: 'laptop',
    width: 1280,
    height: 800,
    bezel: 'laptop',
    notch: true,
    osBadge: 'macOS',
  },
  {
    id: 'compact-laptop',
    name: 'Laptop Standar (1024p)',
    type: 'laptop',
    width: 1024,
    height: 768,
    bezel: 'laptop',
    osBadge: 'Web',
  },
];

export const DeviceSimulator: React.FC = () => {
  // Jika sedang berada di dalam iframe simulator, jangan render apapun
  if (isInsideDeviceSimulator()) {
    return null;
  }

  const { isAdmin } = useAuth();
  const { isEnabled, toggleFlag } = useFeatureFlags();
  const isFeatureActive = isEnabled('devDeviceSimulator');

  // Hanya tampil untuk Administrator atau lingkungan Development
  const isDevMode = Boolean(import.meta.env.DEV);
  const canAccess = (isAdmin || isDevMode) && isFeatureActive;

  // State Manajemen Simulator
  const [deviceType, setDeviceType] = useState<DeviceType>(() => {
    return (localStorage.getItem('osn_dev_viewport_type') as DeviceType) || 'desktop';
  });

  const [presetId, setPresetId] = useState<string>(() => {
    return localStorage.getItem('osn_dev_viewport_preset') || 'iphone-15-pro';
  });

  const [isLandscape, setIsLandscape] = useState<boolean>(() => {
    return localStorage.getItem('osn_dev_viewport_orientation') === 'landscape';
  });

  const [scaleMode, setScaleMode] = useState<'fit' | '100' | '75' | '50'>(() => {
    return (localStorage.getItem('osn_dev_viewport_scale') as any) || 'fit';
  });

  const [showFrame, setShowFrame] = useState<boolean>(() => {
    const raw = localStorage.getItem('osn_dev_viewport_show_frame');
    return raw !== null ? raw === 'true' : true;
  });

  const [isDockCollapsed, setIsDockCollapsed] = useState<boolean>(() => {
    return localStorage.getItem('osn_dev_viewport_dock_collapsed') === 'true';
  });

  const [showPresetDropdown, setShowPresetDropdown] = useState<boolean>(false);
  const [showScaleDropdown, setShowScaleDropdown] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [currentIframeUrl, setCurrentIframeUrl] = useState<string>(() => {
    return window.location.pathname + window.location.search;
  });

  const [windowDimensions, setWindowDimensions] = useState<{ width: number; height: number }>({
    width: typeof window !== 'undefined' ? window.innerWidth : 1440,
    height: typeof window !== 'undefined' ? window.innerHeight : 900,
  });

  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  // Pantau ukuran layar window untuk auto-scaling
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Simpan preferensi ke localStorage
  useEffect(() => {
    localStorage.setItem('osn_dev_viewport_type', deviceType);
  }, [deviceType]);

  useEffect(() => {
    localStorage.setItem('osn_dev_viewport_preset', presetId);
  }, [presetId]);

  useEffect(() => {
    localStorage.setItem('osn_dev_viewport_orientation', isLandscape ? 'landscape' : 'portrait');
  }, [isLandscape]);

  useEffect(() => {
    localStorage.setItem('osn_dev_viewport_scale', scaleMode);
  }, [scaleMode]);

  useEffect(() => {
    localStorage.setItem('osn_dev_viewport_show_frame', String(showFrame));
  }, [showFrame]);

  useEffect(() => {
    localStorage.setItem('osn_dev_viewport_dock_collapsed', String(isDockCollapsed));
  }, [isDockCollapsed]);

  // Ambil preset aktif
  const activePreset = useMemo(() => {
    return DEVICE_PRESETS.find((p) => p.id === presetId) || DEVICE_PRESETS[0];
  }, [presetId]);

  // Hitung dimensi perangkat saat ini (memperhitungkan rotasi)
  const { simulatedWidth, simulatedHeight } = useMemo(() => {
    const w = activePreset.width;
    const h = activePreset.height;
    return isLandscape
      ? { simulatedWidth: Math.max(w, h), simulatedHeight: Math.min(w, h) }
      : { simulatedWidth: Math.min(w, h), simulatedHeight: Math.max(w, h) };
  }, [activePreset, isLandscape]);

  // Hitung rasio zoom / scale
  const calculatedScale = useMemo(() => {
    if (scaleMode === '100') return 1.0;
    if (scaleMode === '75') return 0.75;
    if (scaleMode === '50') return 0.5;

    // Mode 'fit': auto kalkulasi agar muat di layar tanpa terpotong
    const availableW = windowDimensions.width - 64;
    // Cadangkan 110px untuk bilah toolbar atas & margin
    const availableH = windowDimensions.height - 130;

    const scaleW = availableW / (simulatedWidth + (showFrame ? 48 : 0));
    const scaleH = availableH / (simulatedHeight + (showFrame ? 72 : 0));

    const fitVal = Math.min(scaleW, scaleH);
    return Math.min(Math.max(Number(fitVal.toFixed(2)), 0.3), 1.0);
  }, [scaleMode, windowDimensions, simulatedWidth, simulatedHeight, showFrame]);

  // Deteksi breakpoint Tailwind yang aktif pada dimensi simulasi
  const currentBreakpoint = useMemo(() => {
    if (simulatedWidth < 640) return { label: 'xs (< 640px)', color: 'bg-amber-500/20 text-amber-300 border-amber-500/30' };
    if (simulatedWidth < 768) return { label: 'sm (≥ 640px)', color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' };
    if (simulatedWidth < 1024) return { label: 'md (≥ 768px)', color: 'bg-sky-500/20 text-sky-300 border-sky-500/30' };
    if (simulatedWidth < 1280) return { label: 'lg (≥ 1024px)', color: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30' };
    return { label: 'xl (≥ 1280px)', color: 'bg-purple-500/20 text-purple-300 border-purple-500/30' };
  }, [simulatedWidth]);

  // Handler navigasi iframe
  const handleIframeLoad = useCallback(() => {
    try {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        const path = iframeRef.current.contentWindow.location.pathname;
        const search = iframeRef.current.contentWindow.location.search;
        if (path) {
          setCurrentIframeUrl(path + search);
        }
      }
    } catch {
      // ignore cross-origin error jika ada navigasi eksternal
    }
  }, []);

  const handleBack = () => {
    try {
      iframeRef.current?.contentWindow?.history.back();
    } catch {}
  };

  const handleForward = () => {
    try {
      iframeRef.current?.contentWindow?.history.forward();
    } catch {}
  };

  const handleReload = () => {
    try {
      iframeRef.current?.contentWindow?.location.reload();
    } catch {}
  };

  const handleCopyUrl = () => {
    const full = window.location.origin + currentIframeUrl;
    navigator.clipboard.writeText(full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenInNewTab = () => {
    window.open(window.location.origin + currentIframeUrl, '_blank');
  };

  // Pilih tipe perangkat
  const handleSelectDeviceType = (type: DeviceType) => {
    setDeviceType(type);
    if (type === 'mobile') {
      const match = DEVICE_PRESETS.find((p) => p.type === 'mobile');
      if (match) setPresetId(match.id);
    } else if (type === 'tablet') {
      const match = DEVICE_PRESETS.find((p) => p.type === 'tablet');
      if (match) setPresetId(match.id);
    } else if (type === 'laptop') {
      const match = DEVICE_PRESETS.find((p) => p.type === 'laptop');
      if (match) setPresetId(match.id);
    }
  };

  if (!canAccess) {
    return null;
  }

  // =========================================================================
  // 1. TAMPILAN PC / DESKTOP (Native View)
  // Menampilkan floating pill controller di pojok kanan bawah agar admin
  // dapat mengaktifkan simulator Mobile/Tablet sewaktu-waktu.
  // =========================================================================
  if (deviceType === 'desktop') {
    return (
      <div className="fixed bottom-5 right-5 z-[9990] font-sans antialiased">
        {isDockCollapsed ? (
          <button
            type="button"
            onClick={() => setIsDockCollapsed(false)}
            title="Buka Panel Responsiveness Simulator (Admin Dev)"
            className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-slate-900/90 text-white shadow-xl border border-sky-400/40 backdrop-blur-md hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all text-xs font-semibold group cursor-pointer"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <Smartphone className="w-4 h-4 text-sky-400 group-hover:rotate-12 transition-transform" />
            <span className="text-[11px] font-mono tracking-tight text-slate-200">Dev View</span>
          </button>
        ) : (
          <div className="bg-slate-900/95 text-white rounded-2xl p-2.5 shadow-2xl border border-slate-700/80 backdrop-blur-xl flex items-center gap-1.5 animate-in fade-in slide-in-from-bottom-3 duration-200">
            {/* Indikator Admin */}
            <div className="flex items-center gap-1.5 px-2 py-1 bg-slate-800 rounded-xl border border-slate-700/60 text-[10px] text-slate-300 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="font-bold text-sky-300 uppercase tracking-wider">Dev View</span>
            </div>

            {/* Quick Switch Buttons */}
            <div className="flex items-center gap-1 bg-slate-950/60 p-1 rounded-xl border border-slate-800">
              <button
                type="button"
                onClick={() => handleSelectDeviceType('desktop')}
                title="Tampilan Asli PC / Desktop (100% Layar Penuh)"
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-sky-500 text-white text-xs font-bold shadow-xs transition-all cursor-pointer"
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>PC (100%)</span>
              </button>

              <button
                type="button"
                onClick={() => handleSelectDeviceType('tablet')}
                title="Simulasikan Tampilan Tablet (iPad Air - 820px)"
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 text-xs font-medium transition-all cursor-pointer"
              >
                <Tablet className="w-3.5 h-3.5 text-indigo-400" />
                <span>Tablet</span>
              </button>

              <button
                type="button"
                onClick={() => handleSelectDeviceType('mobile')}
                title="Simulasikan Tampilan Mobile Phone (iPhone 15 Pro - 393px)"
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 text-xs font-medium transition-all cursor-pointer"
              >
                <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Mobile</span>
              </button>
            </div>

            {/* Collapse Button */}
            <button
              type="button"
              onClick={() => setIsDockCollapsed(true)}
              title="Kecilkan bilah kontrol"
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    );
  }

  // =========================================================================
  // 2. TAMPILAN SIMULATOR RESPONSIF (Mobile / Tablet / Laptop Viewport)
  // Menampilkan studio workbench lengkap dengan frame perangkat, rotasi, zoom,
  // dan iframe aktual yang merender aplikasi dengan viewport presisi.
  // =========================================================================
  return (
    <div className="fixed inset-0 z-[9999] bg-[#0b0f19] flex flex-col font-sans select-none antialiased overflow-hidden">
      {/* ----------------- TOP TOOLBAR STUDIO ----------------- */}
      <header className="h-14 bg-slate-900/90 border-b border-slate-800 px-4 flex items-center justify-between gap-3 text-white backdrop-blur-md shrink-0 shadow-lg relative z-30">
        {/* Kiri: Brand & Selector Tipe Perangkat */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center shadow-md shadow-sky-500/20">
              <Smartphone className="w-4 h-4 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xs font-black tracking-tight font-display text-white block">
                Viewport Studio
              </span>
              <span className="text-[9px] text-sky-400 font-mono block -mt-0.5">
                Admin DevTools
              </span>
            </div>
          </div>

          <div className="h-6 w-px bg-slate-800 hidden md:block" />

          {/* Device Type Selector Segmented Tabs */}
          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
            <button
              type="button"
              onClick={() => handleSelectDeviceType('desktop')}
              title="Kembali ke Tampilan Asli PC / Desktop"
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer text-slate-400 hover:text-white hover:bg-slate-800/60"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">PC Desktop</span>
            </button>

            <button
              type="button"
              onClick={() => handleSelectDeviceType('tablet')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                deviceType === 'tablet'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Tablet className="w-3.5 h-3.5 text-indigo-300" />
              <span>Tablet</span>
            </button>

            <button
              type="button"
              onClick={() => handleSelectDeviceType('mobile')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                deviceType === 'mobile'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5 text-emerald-300" />
              <span>Mobile</span>
            </button>

            <button
              type="button"
              onClick={() => handleSelectDeviceType('laptop')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                deviceType === 'laptop'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Laptop className="w-3.5 h-3.5 text-purple-300" />
              <span className="hidden md:inline">Laptop</span>
            </button>
          </div>

          {/* Specific Preset Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowPresetDropdown(!showPresetDropdown)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 text-xs font-medium text-slate-200 transition-colors cursor-pointer"
            >
              <span className="truncate max-w-[130px] font-mono">{activePreset.name}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {showPresetDropdown && (
              <div className="absolute top-full left-0 mt-1.5 w-56 bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl p-1.5 z-50 text-xs space-y-0.5">
                <div className="px-2 py-1 text-[10px] uppercase tracking-wider text-slate-400 font-mono font-bold">
                  Preset Perangkat
                </div>
                {DEVICE_PRESETS.map((p) => {
                  const isSelected = p.id === presetId;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => {
                        setPresetId(p.id);
                        setDeviceType(p.type);
                        setShowPresetDropdown(false);
                      }}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl text-left transition-colors cursor-pointer ${
                        isSelected ? 'bg-sky-500/20 text-sky-300 font-bold' : 'text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex flex-col">
                        <span>{p.name}</span>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {p.width} × {p.height} px
                        </span>
                      </div>
                      {isSelected && <Check className="w-3.5 h-3.5 text-sky-400" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Tengah: Dimensi & Tombol Kontrol Viewport */}
        <div className="hidden lg:flex items-center gap-2">
          {/* Badge Resolusi & Breakpoint Tailwind */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono">
            <span className="text-slate-300 font-bold">
              {simulatedWidth} × {simulatedHeight}
            </span>
            <span className="text-slate-500 text-[10px]">px</span>
            <div className={`px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${currentBreakpoint.color}`}>
              {currentBreakpoint.label}
            </div>
          </div>

          {/* Tombol Rotasi Layar */}
          <button
            type="button"
            onClick={() => setIsLandscape(!isLandscape)}
            title={isLandscape ? 'Ganti ke Orientasi Portrait' : 'Ganti ke Orientasi Landscape'}
            className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer ${
              isLandscape
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white'
            }`}
          >
            <RotateCw className="w-3.5 h-3.5" />
            <span className="text-[11px]">{isLandscape ? 'Landscape' : 'Portrait'}</span>
          </button>

          {/* Skala Zoom Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowScaleDropdown(!showScaleDropdown)}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs text-slate-300 font-mono transition-colors cursor-pointer"
            >
              <span>{scaleMode === 'fit' ? `Fit (${Math.round(calculatedScale * 100)}%)` : `${scaleMode}%`}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {showScaleDropdown && (
              <div className="absolute top-full left-0 mt-1.5 w-32 bg-slate-900 rounded-xl border border-slate-700 shadow-xl p-1 z-50 text-xs space-y-0.5 font-mono">
                {(['fit', '100', '75', '50'] as const).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => {
                      setScaleMode(s);
                      setShowScaleDropdown(false);
                    }}
                    className={`w-full text-left px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                      scaleMode === s ? 'bg-sky-500/20 text-sky-300 font-bold' : 'text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {s === 'fit' ? 'Auto Fit' : `${s}%`}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Toggle Bingkai Perangkat */}
          <button
            type="button"
            onClick={() => setShowFrame(!showFrame)}
            title="Sembunyikan / Tampilkan Bezel Bingkai Perangkat"
            className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
              showFrame
                ? 'bg-slate-800 text-slate-200 border-slate-700'
                : 'bg-slate-950 text-slate-400 border-slate-800'
            }`}
          >
            {showFrame ? 'Frame ON' : 'Frame OFF'}
          </button>
        </div>

        {/* Kanan: Navigasi Iframe & Tombol Tutup */}
        <div className="flex items-center gap-2">
          {/* Tombol Back / Forward / Refresh Iframe */}
          <div className="hidden md:flex items-center gap-1 bg-slate-950 p-0.5 rounded-xl border border-slate-800">
            <button
              type="button"
              onClick={handleBack}
              title="Kembali (Back)"
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={handleForward}
              title="Maju (Forward)"
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={handleReload}
              title="Muat Ulang Layar (Reload)"
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* URL Indicator & Quick Copy */}
          <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono max-w-[240px]">
            <span className="truncate text-slate-300">{currentIframeUrl}</span>
            <button
              type="button"
              onClick={handleCopyUrl}
              title="Salin tautan halaman saat ini"
              className="text-slate-500 hover:text-slate-300 cursor-pointer"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            </button>
          </div>

          <button
            type="button"
            onClick={handleOpenInNewTab}
            title="Buka halaman ini di Tab Browser Baru"
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 border border-transparent hover:border-slate-700 transition-all cursor-pointer"
          >
            <ExternalLink className="w-4 h-4" />
          </button>

          {/* Tombol Tutup Simulator (Kembali ke PC View) */}
          <button
            type="button"
            onClick={() => handleSelectDeviceType('desktop')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-md transition-all cursor-pointer ml-1"
          >
            <X className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Kembali ke PC</span>
          </button>
        </div>
      </header>

      {/* ----------------- WORKBENCH CANVAS AREA ----------------- */}
      <main className="flex-1 overflow-auto flex items-center justify-center p-4 sm:p-8 relative bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px]">
        {/* Wrapper Perangkat dengan CSS Transform Scale */}
        <div
          style={{
            transform: `scale(${calculatedScale})`,
            transformOrigin: 'center center',
            transition: 'transform 0.2s ease-out, width 0.3s ease, height 0.3s ease',
          }}
          className="shrink-0 flex items-center justify-center"
        >
          {/* FRAME CONTAINER */}
          <div
            style={{
              width: simulatedWidth + (showFrame ? (activePreset.bezel === 'phone' ? 24 : activePreset.bezel === 'tablet' ? 32 : 24) : 0),
              height: simulatedHeight + (showFrame ? (activePreset.bezel === 'phone' ? 24 : activePreset.bezel === 'tablet' ? 32 : 56) : 0),
            }}
            className={`transition-all duration-300 relative ${
              showFrame
                ? activePreset.bezel === 'phone'
                  ? 'bg-slate-900 p-3 rounded-[54px] shadow-[0_30px_90px_rgba(0,0,0,0.85)] ring-1 ring-slate-700/60 border border-slate-700/50'
                  : activePreset.bezel === 'tablet'
                  ? 'bg-slate-900 p-4 rounded-[36px] shadow-[0_30px_90px_rgba(0,0,0,0.85)] ring-1 ring-slate-700/60 border border-slate-700/50'
                  : 'bg-slate-800 p-3 pb-8 rounded-t-2xl rounded-b-md shadow-[0_35px_100px_rgba(0,0,0,0.9)] ring-1 ring-slate-600/50'
                : 'border border-slate-700 shadow-2xl rounded-xl'
            }`}
          >
            {/* Dynamic Island / Notch untuk Ponsel iPhone */}
            {showFrame && activePreset.bezel === 'phone' && !isLandscape && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-40 flex items-center justify-between px-3 pointer-events-none ring-1 ring-white/10 shadow-md">
                <div className="w-2.5 h-2.5 rounded-full bg-[#111] ring-1 ring-slate-700/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-900 ring-1 ring-slate-800 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-blue-500/80 animate-pulse" />
                </div>
              </div>
            )}

            {/* Notch Kamera Tablet */}
            {showFrame && activePreset.bezel === 'tablet' && (
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-slate-950 ring-1 ring-slate-700/80 z-40 pointer-events-none" />
            )}

            {/* Laptop Base / Deck Bar */}
            {showFrame && activePreset.bezel === 'laptop' && (
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[108%] h-5 bg-gradient-to-b from-slate-700 to-slate-800 rounded-b-xl border-t border-slate-600 shadow-xl flex items-center justify-center">
                <div className="w-16 h-1 rounded-full bg-slate-600/80" />
              </div>
            )}

            {/* Status Bar Mobile Simulation */}
            {showFrame && activePreset.bezel === 'phone' && !isLandscape && (
              <div className="absolute top-3 left-7 right-7 h-5 flex items-center justify-between text-[11px] font-bold text-slate-800 z-30 pointer-events-none px-2">
                <span>9:41</span>
                <div className="flex items-center gap-1.5 text-slate-800">
                  <Wifi className="w-3 h-3" />
                  <Battery className="w-3.5 h-3.5" />
                </div>
              </div>
            )}

            {/* SCREEN VIEWPORT CONTAINER */}
            <div
              style={{
                width: simulatedWidth,
                height: simulatedHeight,
              }}
              className={`bg-white overflow-hidden relative ${
                showFrame
                  ? activePreset.bezel === 'phone'
                    ? 'rounded-[42px]'
                    : activePreset.bezel === 'tablet'
                    ? 'rounded-[26px]'
                    : 'rounded-t-lg'
                  : 'rounded-xl'
              }`}
            >
              <iframe
                ref={iframeRef}
                src={window.location.origin + currentIframeUrl}
                title={`Device Simulation: ${activePreset.name}`}
                onLoad={handleIframeLoad}
                style={{
                  width: simulatedWidth,
                  height: simulatedHeight,
                }}
                className="w-full h-full border-0 bg-white"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DeviceSimulator;
