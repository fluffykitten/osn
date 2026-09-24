import React, { useState } from 'react';
import {
  Palette,
  CheckCircle2,
  Sparkles,
  RotateCcw,
  Eye,
  Sliders,
  Layers,
  ArrowRight,
  BookOpen,
  Award,
  Zap,
  Info,
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import type { ThemePalette } from '../../types/theme';

export const AdminAppearanceSettings: React.FC = () => {
  const {
    activeThemeId,
    activePalette,
    allPalettes,
    setTheme,
    addCustomPalette,
    deleteCustomPalette,
    resetToDefault,
  } = useTheme();

  // Selected palette for interactive live preview (defaults to active palette)
  const [previewPalette, setPreviewPalette] = useState<ThemePalette>(activePalette);
  const [successToast, setSuccessToast] = useState<string | null>(null);

  // Custom Palette Form State
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [customName, setCustomName] = useState('Palet Kustom Saya');
  const [customCanvas, setCustomCanvas] = useState('#F0F8FF');
  const [customSurface, setCustomSurface] = useState('#FFFFF0');
  const [customPrimary, setCustomPrimary] = useState('#708090');
  const [customAccent, setCustomAccent] = useState('#B0C4DE');
  const [customBorder, setCustomBorder] = useState('#D3D3D3');
  const [customText, setCustomText] = useState('#2D3748');

  const handleApplyTheme = (palette: ThemePalette) => {
    setTheme(palette.id);
    setPreviewPalette(palette);
    setSuccessToast(`Palet "${palette.name}" berhasil diterapkan ke seluruh aplikasi!`);
    setTimeout(() => setSuccessToast(null), 3500);
  };

  const handleSaveCustom = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `custom-${Date.now()}`;
    const newCustomPalette: ThemePalette = {
      id,
      name: customName.trim() || 'Palet Kustom',
      subtitle: 'Kustom Buatan Admin',
      description: 'Palet warna yang dirancang khusus melalui form input admin.',
      tags: ['Custom', 'User Created'],
      swatches: [
        { name: 'Canvas', hex: customCanvas },
        { name: 'Surface', hex: customSurface },
        { name: 'Primary', hex: customPrimary },
        { name: 'Accent', hex: customAccent },
      ],
      tokens: {
        canvas: customCanvas,
        surface: customSurface,
        surfaceSecondary: customCanvas,
        border: customBorder,
        primary: customPrimary,
        primaryHover: customPrimary,
        primaryText: '#FFFFFF',
        accent: customAccent,
        accentText: customPrimary,
        text: customText,
        textMuted: customPrimary,
        hero: {
          from: customPrimary,
          via: customPrimary,
          to: customAccent,
          text: customSurface,
          desc: customCanvas,
          accent: customAccent,
        },
      },
    };

    addCustomPalette(newCustomPalette);
    setPreviewPalette(newCustomPalette);
    setShowCustomForm(false);
    setSuccessToast(`Palet kustom "${customName}" berhasil dibuat dan diterapkan!`);
    setTimeout(() => setSuccessToast(null), 3500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Toast Notification */}
      {successToast && (
        <div className="fixed top-20 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-2xl bg-emerald-600 text-white shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <span className="text-sm font-bold">{successToast}</span>
        </div>
      )}

      {/* Hero Header Section */}
      <div
        className="theme-hero-banner rounded-3xl p-6 sm:p-8 md:p-10 shadow-md border relative overflow-hidden space-y-6 transition-all duration-300"
        style={{
          background: `linear-gradient(135deg, ${activePalette.tokens.hero.from} 0%, ${activePalette.tokens.hero.via} 50%, ${activePalette.tokens.hero.to} 100%)`,
          color: activePalette.tokens.hero.text,
          borderColor: `${activePalette.tokens.accent}50`,
        }}
      >
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 backdrop-blur-md rounded-full text-xs font-semibold tracking-wide uppercase border"
              style={{
                color: activePalette.tokens.hero.text,
                borderColor: `${activePalette.tokens.accent}60`,
              }}
            >
              <Palette size={14} style={{ color: activePalette.tokens.hero.accent }} />
              <span>PENGATURAN TAMPILAN & SISTEM WARNA</span>
            </div>

            <h1
              className="text-3xl md:text-4xl font-black tracking-tight font-display"
              style={{ color: activePalette.tokens.hero.text }}
            >
              Studio Palet Warna & Desain UI
            </h1>

            <p
              className="text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed"
              style={{ color: activePalette.tokens.hero.desc }}
            >
              Pilih dan uji coba beragam kombinasi color palette secara langsung (real-time). 
              Perubahan tema akan otomatis diterapkan ke seluruh antarmuka Siswa, Guru, Admin, Papan Tulis, dan Bank Soal.
            </p>
          </div>

          {/* Quick Active Badge & Reset Button */}
          <div
            className="rounded-2xl p-4 border shadow-sm flex flex-col gap-3 sm:w-72 shrink-0 transition-all"
            style={{
              backgroundColor: activePalette.tokens.surface,
              borderColor: activePalette.tokens.border,
              color: activePalette.tokens.text,
            }}
          >
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold" style={{ color: activePalette.tokens.textMuted }}>
                Palet Aktif Saat Ini:
              </span>
              <span
                className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold"
                style={{
                  backgroundColor: `${activePalette.tokens.accent}35`,
                  color: activePalette.tokens.primary,
                }}
              >
                ACTIVE
              </span>
            </div>
            <div>
              <div className="font-extrabold text-sm" style={{ color: activePalette.tokens.text }}>
                {activePalette.name}
              </div>
              <div className="text-[11px]" style={{ color: activePalette.tokens.textMuted }}>
                {activePalette.subtitle}
              </div>
            </div>
            <div
              className="flex items-center gap-1.5 pt-1 border-t"
              style={{ borderColor: activePalette.tokens.border }}
            >
              {activePalette.swatches.map((swatch, idx) => (
                <div
                  key={idx}
                  className="w-5 h-5 rounded-full border border-black/10 shadow-2xs"
                  style={{ backgroundColor: swatch.hex }}
                  title={`${swatch.name} (${swatch.hex})`}
                />
              ))}
            </div>
            {activeThemeId !== 'serene-minimalist' && (
              <button
                onClick={() => {
                  resetToDefault();
                  setPreviewPalette(allPalettes[0]);
                  setSuccessToast('Berhasil dikembalikan ke palet bawaan (Serene Minimalist)!');
                  setTimeout(() => setSuccessToast(null), 3000);
                }}
                className="flex items-center justify-center gap-1.5 w-full py-1.5 text-xs font-bold text-[#708090] hover:text-[#2D3748] bg-[#F0F8FF] hover:bg-[#B0C4DE]/20 rounded-xl transition border border-[#D3D3D3] cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset ke Default</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* LIVE INTERACTIVE PREVIEW SECTION */}
      <div className="bg-[#FFFFF0] rounded-3xl p-6 sm:p-8 border border-[#D3D3D3] shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D3D3D3] pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#B0C4DE]/30 text-[#708090]">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#2D3748]">
                Pratinjau Interaktif: {previewPalette.name}
              </h2>
              <p className="text-xs text-[#708090]">
                Melihat simulasi penerapan warna pada Hero Banner, Kartu Materi, Tombol, dan Badge.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {previewPalette.id !== activeThemeId ? (
              <button
                onClick={() => handleApplyTheme(previewPalette)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs bg-[#708090] text-[#FFFFF0] hover:bg-[#5C6D7D] shadow-sm transition cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Terapkan Palet Ini Sekarang</span>
              </button>
            ) : (
              <span className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Sedang Digunakan di Sistem</span>
              </span>
            )}
          </div>
        </div>

        {/* Mockup Canvas */}
        <div
          className="p-6 rounded-2xl border transition-all duration-300 space-y-6"
          style={{
            backgroundColor: previewPalette.tokens.canvas,
            borderColor: previewPalette.tokens.border,
          }}
        >
          {/* Sample Hero Banner */}
          <div
            className="rounded-2xl p-6 shadow-md relative overflow-hidden space-y-4"
            style={{
              background: `linear-gradient(to right, ${previewPalette.tokens.hero.from}, ${previewPalette.tokens.hero.via}, ${previewPalette.tokens.hero.to})`,
              color: previewPalette.tokens.hero.text,
              borderColor: `${previewPalette.tokens.accent}40`,
            }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase backdrop-blur-md bg-white/15 border border-white/20">
              <Sparkles size={14} style={{ color: previewPalette.tokens.hero.accent }} />
              <span>Contoh Hero Banner Papan Tulis</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight" style={{ color: previewPalette.tokens.hero.text }}>
              Database Materi & Bank Soal Kimia
            </h3>
            <p className="text-xs sm:text-sm max-w-xl leading-relaxed" style={{ color: previewPalette.tokens.hero.desc }}>
              Ini adalah pratinjau tampilan header bernuansa gradien dengan ambient lighting dan kontras teks yang optimal.
            </p>
          </div>

          {/* Sample Cards & Elements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1: Sample Gamification Card */}
            <div
              className="p-5 rounded-2xl border shadow-xs space-y-3"
              style={{
                backgroundColor: previewPalette.tokens.surface,
                borderColor: previewPalette.tokens.border,
                color: previewPalette.tokens.text,
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold" style={{ color: previewPalette.tokens.textMuted }}>
                  Total Soal Diselesaikan
                </span>
                <div
                  className="p-1.5 rounded-lg text-xs"
                  style={{
                    backgroundColor: `${previewPalette.tokens.accent}30`,
                    color: previewPalette.tokens.primary,
                  }}
                >
                  <Award className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-black font-mono">
                124 <span className="text-xs font-normal" style={{ color: previewPalette.tokens.textMuted }}>/ 811 Butir</span>
              </div>
              <div className="w-full h-2 rounded-full overflow-hidden bg-black/10">
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: '65%',
                    backgroundColor: previewPalette.tokens.primary,
                  }}
                />
              </div>
            </div>

            {/* Card 2: Sample Actions & Buttons */}
            <div
              className="p-5 rounded-2xl border shadow-xs space-y-4 flex flex-col justify-between"
              style={{
                backgroundColor: previewPalette.tokens.surface,
                borderColor: previewPalette.tokens.border,
                color: previewPalette.tokens.text,
              }}
            >
              <div>
                <span className="text-xs font-bold block mb-1" style={{ color: previewPalette.tokens.textMuted }}>
                  Tombol & Komponen Aksi
                </span>
                <p className="text-xs">Uji keterbacaan teks tombol aksi:</p>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  className="w-full py-2 px-4 rounded-xl text-xs font-bold transition shadow-xs flex items-center justify-center gap-1.5"
                  style={{
                    backgroundColor: previewPalette.tokens.primary,
                    color: previewPalette.tokens.primaryText,
                  }}
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>Tombol Aksi Utama</span>
                </button>

                <button
                  type="button"
                  className="w-full py-2 px-4 rounded-xl text-xs font-bold transition border flex items-center justify-center gap-1.5"
                  style={{
                    borderColor: previewPalette.tokens.border,
                    color: previewPalette.tokens.primary,
                    backgroundColor: previewPalette.tokens.canvas,
                  }}
                >
                  <span>Tombol Sekunder (Outline)</span>
                </button>
              </div>
            </div>

            {/* Card 3: Sample Badges & KaTeX formula */}
            <div
              className="p-5 rounded-2xl border shadow-xs space-y-3"
              style={{
                backgroundColor: previewPalette.tokens.surface,
                borderColor: previewPalette.tokens.border,
                color: previewPalette.tokens.text,
              }}
            >
              <span className="text-xs font-bold" style={{ color: previewPalette.tokens.textMuted }}>
                Badge & Formula Kimia
              </span>
              <div className="flex flex-wrap gap-1.5">
                <span
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-bold"
                  style={{
                    backgroundColor: `${previewPalette.tokens.accent}35`,
                    color: previewPalette.tokens.primary,
                    border: `1px solid ${previewPalette.tokens.accent}70`,
                  }}
                >
                  Kurikulum Merdeka
                </span>
                <span
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-bold"
                  style={{
                    backgroundColor: `${previewPalette.tokens.primary}20`,
                    color: previewPalette.tokens.primary,
                  }}
                >
                  IChO Standard
                </span>
              </div>
              <div
                className="p-2.5 rounded-xl text-xs font-mono border"
                style={{
                  backgroundColor: previewPalette.tokens.canvas,
                  borderColor: previewPalette.tokens.border,
                }}
              >
                ΔG° = -RT ln K = -nFE°
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PRESET PALETTES GRID */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-black text-[#2D3748]">
              Koleksi Palet Warna Pilihan
            </h2>
            <p className="text-xs sm:text-sm text-[#708090]">
              Termasuk 5 palet warna yang Anda unggah plus palet bawaan Serene Minimalist.
            </p>
          </div>

          <button
            onClick={() => setShowCustomForm(!showCustomForm)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-[#FFFFF0] hover:bg-[#F0F8FF] text-[#708090] border border-[#D3D3D3] transition cursor-pointer self-start sm:self-auto"
          >
            <Sliders className="w-4 h-4" />
            <span>{showCustomForm ? 'Tutup Form Kustom' : 'Buat Palet Kustom Sendiri'}</span>
          </button>
        </div>

        {/* CUSTOM PALETTE BUILDER (COLLAPSIBLE) */}
        {showCustomForm && (
          <form
            onSubmit={handleSaveCustom}
            className="bg-[#FFFFF0] p-6 rounded-3xl border border-[#D3D3D3] shadow-sm space-y-5 animate-in fade-in slide-in-from-top-3 duration-200"
          >
            <div className="flex items-center gap-2 text-[#2D3748] font-bold text-sm border-b border-[#D3D3D3] pb-3">
              <Sliders className="w-4 h-4 text-[#708090]" />
              <span>Form Kustomisasi Palet Hex Baru</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#708090] mb-1">
                  Nama Palet:
                </label>
                <input
                  type="text"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  className="w-full px-3 py-2 bg-white rounded-xl border border-[#D3D3D3] text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#708090]"
                  placeholder="Misal: Sunset Glow"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#708090] mb-1">
                  Warna Canvas (Background):
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={customCanvas}
                    onChange={(e) => setCustomCanvas(e.target.value)}
                    className="w-9 h-9 rounded-lg border border-[#D3D3D3] cursor-pointer"
                  />
                  <input
                    type="text"
                    value={customCanvas}
                    onChange={(e) => setCustomCanvas(e.target.value)}
                    className="flex-1 px-3 py-2 bg-white rounded-xl border border-[#D3D3D3] text-xs font-mono uppercase"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#708090] mb-1">
                  Warna Surface (Kartu & Panel):
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={customSurface}
                    onChange={(e) => setCustomSurface(e.target.value)}
                    className="w-9 h-9 rounded-lg border border-[#D3D3D3] cursor-pointer"
                  />
                  <input
                    type="text"
                    value={customSurface}
                    onChange={(e) => setCustomSurface(e.target.value)}
                    className="flex-1 px-3 py-2 bg-white rounded-xl border border-[#D3D3D3] text-xs font-mono uppercase"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#708090] mb-1">
                  Warna Primary (Tombol & Header):
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={customPrimary}
                    onChange={(e) => setCustomPrimary(e.target.value)}
                    className="w-9 h-9 rounded-lg border border-[#D3D3D3] cursor-pointer"
                  />
                  <input
                    type="text"
                    value={customPrimary}
                    onChange={(e) => setCustomPrimary(e.target.value)}
                    className="flex-1 px-3 py-2 bg-white rounded-xl border border-[#D3D3D3] text-xs font-mono uppercase"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#708090] mb-1">
                  Warna Accent (Badge & Sorotan):
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={customAccent}
                    onChange={(e) => setCustomAccent(e.target.value)}
                    className="w-9 h-9 rounded-lg border border-[#D3D3D3] cursor-pointer"
                  />
                  <input
                    type="text"
                    value={customAccent}
                    onChange={(e) => setCustomAccent(e.target.value)}
                    className="flex-1 px-3 py-2 bg-white rounded-xl border border-[#D3D3D3] text-xs font-mono uppercase"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#708090] mb-1">
                  Warna Border (Garis Tepi):
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={customBorder}
                    onChange={(e) => setCustomBorder(e.target.value)}
                    className="w-9 h-9 rounded-lg border border-[#D3D3D3] cursor-pointer"
                  />
                  <input
                    type="text"
                    value={customBorder}
                    onChange={(e) => setCustomBorder(e.target.value)}
                    className="flex-1 px-3 py-2 bg-white rounded-xl border border-[#D3D3D3] text-xs font-mono uppercase"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowCustomForm(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-[#708090] text-[#FFFFF0] hover:bg-[#5C6D7D] shadow-xs"
              >
                Simpan & Terapkan Palet Kustom
              </button>
            </div>
          </form>
        )}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPalettes.map((palette) => {
            const isCurrentActive = activeThemeId === palette.id;
            const isBeingPreviewed = previewPalette.id === palette.id;

            return (
              <div
                key={palette.id}
                className={`bg-[#FFFFF0] rounded-3xl p-5 border transition-all duration-200 flex flex-col justify-between space-y-4 hover:shadow-md ${
                  isCurrentActive
                    ? 'ring-2 ring-[#708090] border-transparent shadow-md'
                    : isBeingPreviewed
                    ? 'border-[#708090] shadow-xs'
                    : 'border-[#D3D3D3]'
                }`}
              >
                <div className="space-y-3">
                  {/* Top Header */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-bold font-mono text-[#708090] uppercase tracking-wider">
                        {palette.subtitle}
                      </span>
                      <h3 className="text-base font-extrabold text-[#2D3748] leading-snug">
                        {palette.name}
                      </h3>
                    </div>

                    {isCurrentActive ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#708090] text-[#FFFFF0]">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>AKTIF</span>
                      </span>
                    ) : isBeingPreviewed ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#B0C4DE]/40 text-[#708090]">
                        <Eye className="w-3 h-3" />
                        <span>PREVIEW</span>
                      </span>
                    ) : null}
                  </div>

                  {/* Horizontal Stack Swatch Bar (Matching User's Uploaded Style) */}
                  <div className="rounded-2xl overflow-hidden border border-black/10 shadow-xs h-16 flex flex-col">
                    {palette.swatches.map((swatch, i) => (
                      <div
                        key={i}
                        className="flex-1 flex items-center justify-between px-3 text-[10px] font-mono font-bold"
                        style={{
                          backgroundColor: swatch.hex,
                          color: parseInt(swatch.hex.replace('#', ''), 16) > 0x888888 ? '#2D3748' : '#FFFFFF',
                        }}
                      >
                        <span className="opacity-90">{swatch.hex}</span>
                        <span className="text-[9px] opacity-75 hidden sm:inline">{swatch.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Description & Tags */}
                  <p className="text-xs text-[#708090] leading-relaxed line-clamp-2">
                    {palette.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {palette.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-lg text-[10px] font-medium bg-[#B0C4DE]/20 text-[#708090] border border-[#B0C4DE]/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-3 border-t border-[#D3D3D3] flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setPreviewPalette(palette)}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 border cursor-pointer ${
                      isBeingPreviewed
                        ? 'bg-[#B0C4DE]/30 text-[#708090] border-[#B0C4DE]'
                        : 'bg-white hover:bg-slate-50 text-[#708090] border-[#D3D3D3]'
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Lihat Preview</span>
                  </button>

                  <button
                    type="button"
                    disabled={isCurrentActive}
                    onClick={() => handleApplyTheme(palette)}
                    className={`py-2 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                      isCurrentActive
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
                        : 'bg-[#708090] text-[#FFFFF0] hover:bg-[#5C6D7D] shadow-xs'
                    }`}
                  >
                    <span>{isCurrentActive ? 'Terpasang' : 'Terapkan'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
