/**
 * AdminPdfExportSettings.tsx
 * Halaman Khusus Pengaturan Ekspor PDF (Naskah Materi & Naskah Soal)
 * 
 * Memungkinkan Administrator mengonfigurasi:
 * 1. Tipografi Dokumen (Font Bookerly, Libron, Inter, Literata, Merriweather, dsb.)
 * 2. Identitas Brand & Logo
 * 3. Copyright Notice & Slogan Footer
 * 4. Domain / URL Website
 * 5. Perataan Teks Paragraf (Justify vs Left)
 * 6. Pratinjau Interaktif Real-Time untuk Soal dan Materi
 */

import React, { useState } from 'react';
import {
  FileDown,
  Save,
  RotateCcw,
  CheckCircle2,
  Printer,
  Sparkles,
  BookOpen,
  FileText,
  Layers,
  HelpCircle,
  ExternalLink,
  Sliders,
  Check,
} from 'lucide-react';
import {
  usePdfSettings,
  AVAILABLE_PDF_FONTS,
  type PdfFontDefinition,
} from '../../services/pdfSettingsService';

export const AdminPdfExportSettings: React.FC = () => {
  const {
    settings: pdfSettings,
    updateSettings: updatePdfSettings,
    resetSettings: resetPdfSettings,
  } = usePdfSettings();

  const [pdfBrandName, setPdfBrandName] = useState(pdfSettings.brandName);
  const [pdfBrandIcon, setPdfBrandIcon] = useState(pdfSettings.brandLogoIcon);
  const [pdfCopyright, setPdfCopyright] = useState(pdfSettings.copyrightNotice);
  const [pdfWebsite, setPdfWebsite] = useState(pdfSettings.websiteUrl);
  const [pdfTextAlign, setPdfTextAlign] = useState<'justify' | 'left'>(pdfSettings.textAlignment);
  const [pdfFontFamily, setPdfFontFamily] = useState(pdfSettings.fontFamily || 'inter');

  const [previewTab, setPreviewTab] = useState<'question' | 'material'>('question');
  const [successToast, setSuccessToast] = useState<string | null>(null);

  const selectedFontObj =
    AVAILABLE_PDF_FONTS.find((f) => f.id === pdfFontFamily) || AVAILABLE_PDF_FONTS[0];

  const handleSavePdf = (e: React.FormEvent) => {
    e.preventDefault();
    updatePdfSettings({
      brandName: pdfBrandName.trim() || 'OSN Kimia Mastery',
      brandLogoIcon: pdfBrandIcon.trim() || '⚡',
      copyrightNotice:
        pdfCopyright.trim() ||
        '© 2026 OSN Kimia Mastery. Belajar mandiri & raih medali di osnkimia.com',
      websiteUrl: pdfWebsite.trim() || 'osnkimia.com',
      textAlignment: pdfTextAlign,
      fontFamily: pdfFontFamily,
    });
    setSuccessToast('Pengaturan ekspor PDF berhasil disimpan dan diterapkan ke materi & soal!');
    setTimeout(() => setSuccessToast(null), 3500);
  };

  const handleResetPdf = () => {
    if (
      window.confirm(
        'Kembalikan pengaturan font, brand, dan footer PDF ke setelan default awal?'
      )
    ) {
      resetPdfSettings();
      setPdfBrandName('OSN Kimia Mastery');
      setPdfBrandIcon('⚡');
      setPdfCopyright(
        '© 2026 OSN Kimia Mastery. Belajar mandiri & raih medali di osnkimia.com'
      );
      setPdfWebsite('osnkimia.com');
      setPdfTextAlign('justify');
      setPdfFontFamily('inter');
      setSuccessToast('Pengaturan PDF telah dikembalikan ke bawaan sistem.');
      setTimeout(() => setSuccessToast(null), 3500);
    }
  };

  return (
    <div className="space-y-8 pb-16">
      {/* SUCCESS TOAST NOTIFICATION */}
      {successToast && (
        <div className="fixed top-20 right-6 z-50 flex items-center gap-3 px-5 py-3.5 bg-emerald-600 text-white rounded-2xl shadow-xl animate-bounce">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <span className="text-xs sm:text-sm font-bold">{successToast}</span>
        </div>
      )}

      {/* TOP HEADER COMMAND BAR */}
      <div className="bg-[#FFFFF0] rounded-3xl p-6 sm:p-8 border border-[#D3D3D3] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center shadow-md shrink-0">
            <FileDown className="w-6 h-6" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h1 className="text-xl sm:text-2xl font-black text-[#2D3748] tracking-tight font-display">
                Pengaturan Ekspor PDF
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-sky-100 text-sky-800 border border-sky-200">
                Materi & Soal
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#708090] max-w-2xl leading-relaxed">
              Konfigurasi tipografi naskah, font cetak (Bookerly, Libron, Inter, dsb.), identitas brand, copyright running footer, dan perataan teks A4 yang berlaku universal untuk dokumen materi dan butir latihan soal.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 self-end md:self-center">
          <button
            type="button"
            onClick={handleResetPdf}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#D3D3D3] text-xs font-bold text-[#708090] hover:text-[#2D3748] hover:bg-slate-100 transition cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset Bawaan</span>
          </button>
          <button
            type="button"
            onClick={handleSavePdf}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <Save className="w-4 h-4" />
            <span>Simpan Perubahan</span>
          </button>
        </div>
      </div>

      {/* STATUS OVERVIEW INFO BANNER */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block">
              Modul Materi Belajar
            </span>
            <span className="text-xs font-bold text-slate-800">
              Font Aktif: {selectedFontObj.name}
            </span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block">
              Naskah Soal & Kunci
            </span>
            <span className="text-xs font-bold text-slate-800">
              Format: Question Paper & Mark Scheme
            </span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
            <Sliders className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block">
              Perataan Teks Paragraf
            </span>
            <span className="text-xs font-bold text-slate-800">
              {pdfTextAlign === 'justify' ? 'Rata Kiri-Kanan (Justified)' : 'Rata Kiri (Left-aligned)'}
            </span>
          </div>
        </div>
      </div>

      {/* FORM SETTINGS WRAPPER */}
      <form onSubmit={handleSavePdf} className="space-y-8">
        {/* 1. SELEKSI TIPOGRAFI & FONT FAMILY DOKUMEN */}
        <div className="bg-[#FFFFF0] rounded-3xl p-6 sm:p-8 border border-[#D3D3D3] shadow-xs space-y-5">
          <div className="border-b border-[#D3D3D3] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-600" />
                <h2 className="text-base sm:text-lg font-extrabold text-[#2D3748]">
                  1. Pilihan Tipografi Dokumen PDF (Font Family)
                </h2>
              </div>
              <p className="text-xs text-[#708090] mt-0.5">
                Font yang dipilih akan langsung diterapkan ke teks materi teori, butir soal, pilihan ganda, dan pembahasan rubrik kunci jawaban.
              </p>
            </div>
            <span className="text-[11px] font-mono font-bold text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200 shrink-0">
              {AVAILABLE_PDF_FONTS.length} Font Tersedia
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {AVAILABLE_PDF_FONTS.map((font) => {
              const isSelected = pdfFontFamily === font.id;
              return (
                <div
                  key={font.id}
                  onClick={() => setPdfFontFamily(font.id)}
                  className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between gap-3 ${
                    isSelected
                      ? 'border-sky-500 bg-sky-50/70 shadow-md ring-2 ring-sky-400/40'
                      : 'border-[#D3D3D3] bg-white hover:border-slate-400 hover:bg-slate-50/60'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3
                          className="font-extrabold text-sm text-slate-900 leading-snug"
                          style={{ fontFamily: font.fontFamilyCss }}
                        >
                          {font.name}
                        </h3>
                        <span className="text-[10px] font-mono font-bold text-slate-500">
                          {font.category}
                        </span>
                      </div>
                      {isSelected ? (
                        <span className="p-1 rounded-full bg-sky-600 text-white shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                      ) : (
                        <div className="w-4 h-4 rounded-full border border-slate-300 shrink-0 mt-0.5" />
                      )}
                    </div>

                    <p className="text-[11px] text-slate-600 leading-relaxed line-clamp-2">
                      {font.description}
                    </p>
                  </div>

                  {/* Chemistry formula preview box */}
                  <div
                    className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 leading-snug font-normal"
                    style={{ fontFamily: font.fontFamilyCss }}
                  >
                    <span className="text-slate-400 block text-[9.5px] font-sans font-semibold mb-0.5">
                      Contoh Tampilan Naskah:
                    </span>
                    Reaksi Pembentukan: ΔH° = -285,8 kJ/mol (H₂ + ½O₂ → H₂O)
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. IDENTITAS BRAND & COPYRIGHT RUNNING FOOTER */}
        <div className="bg-[#FFFFF0] rounded-3xl p-6 sm:p-8 border border-[#D3D3D3] shadow-xs space-y-6">
          <div className="border-b border-[#D3D3D3] pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-600" />
              <h2 className="text-base sm:text-lg font-extrabold text-[#2D3748]">
                2. Identitas Brand & Copyright Running Footer
              </h2>
            </div>
            <p className="text-xs text-[#708090] mt-0.5">
              Informasi ini akan muncul konsisten di bagian bawah (running footer) setiap lembar cetak PDF.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-[#2D3748] mb-1.5">
                Nama Brand / Lembaga Pembinaan
              </label>
              <input
                type="text"
                value={pdfBrandName}
                onChange={(e) => setPdfBrandName(e.target.value)}
                placeholder="Contoh: OSN Kimia Mastery"
                className="w-full px-3.5 py-2.5 bg-white border border-[#D3D3D3] rounded-xl text-xs text-[#2D3748] focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium"
              />
              <span className="text-[10px] text-[#708090] mt-1 block">
                Ditampilkan pada sudut kiri bawah footer di setiap halaman PDF.
              </span>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#2D3748] mb-1.5">
                Simbol / Logo Brand (Emoji atau Karakter Teks)
              </label>
              <input
                type="text"
                value={pdfBrandIcon}
                onChange={(e) => setPdfBrandIcon(e.target.value)}
                placeholder="Contoh: ⚡ atau 🔬 atau ⚛"
                className="w-full px-3.5 py-2.5 bg-white border border-[#D3D3D3] rounded-xl text-xs text-[#2D3748] focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium"
              />
              <span className="text-[10px] text-[#708090] mt-1 block">
                Ikon lambang di sebelah kiri nama brand (misal: ⚡, 🔬, ⚛, 🎓).
              </span>
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-[#2D3748] mb-1.5">
                Teks Copyright & Slogan Footer
              </label>
              <input
                type="text"
                value={pdfCopyright}
                onChange={(e) => setPdfCopyright(e.target.value)}
                placeholder="Contoh: © 2026 OSN Kimia Mastery. Belajar mandiri & raih medali di osnkimia.com"
                className="w-full px-3.5 py-2.5 bg-white border border-[#D3D3D3] rounded-xl text-xs text-[#2D3748] focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium"
              />
              <span className="text-[10px] text-[#708090] mt-1 block">
                Teks hak cipta di bagian tengah footer pada setiap halaman PDF naskah.
              </span>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#2D3748] mb-1.5">
                URL Website / Domain Rujukan
              </label>
              <input
                type="text"
                value={pdfWebsite}
                onChange={(e) => setPdfWebsite(e.target.value)}
                placeholder="Contoh: osnkimia.com"
                className="w-full px-3.5 py-2.5 bg-white border border-[#D3D3D3] rounded-xl text-xs text-[#2D3748] focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium"
              />
              <span className="text-[10px] text-[#708090] mt-1 block">
                Tautan portal yang disematkan pada sudut kanan footer naskah cetak.
              </span>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#2D3748] mb-1.5">
                Perataan Teks Paragraf (Alignment)
              </label>
              <select
                value={pdfTextAlign}
                onChange={(e) => setPdfTextAlign(e.target.value as 'justify' | 'left')}
                className="w-full px-3.5 py-2.5 bg-white border border-[#D3D3D3] rounded-xl text-xs text-[#2D3748] focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium"
              >
                <option value="justify">Rata Kiri-Kanan (Justified) — Standar Buku & Naskah Resmi</option>
                <option value="left">Rata Kiri (Left-aligned) — Standar Dokumen Ringan</option>
              </select>
              <span className="text-[10px] text-[#708090] mt-1 block">
                Memastikan susunan kalimat dan paragraf di atas kertas A4 rapi proporsional.
              </span>
            </div>
          </div>
        </div>

        {/* 3. PRATINJAU INTERAKTIF DOKUMEN REAL-TIME */}
        <div className="bg-[#FFFFF0] rounded-3xl p-6 sm:p-8 border border-[#D3D3D3] shadow-xs space-y-6">
          <div className="border-b border-[#D3D3D3] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                <h2 className="text-base sm:text-lg font-extrabold text-[#2D3748]">
                  3. Pratinjau Interaktif Dokumen Real-Time
                </h2>
              </div>
              <p className="text-xs text-[#708090] mt-0.5">
                Simulasi tampilan aktual dokumen di kertas cetak A4 dengan tipografi "{selectedFontObj.name}".
              </p>
            </div>

            {/* Tab switch preview */}
            <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-xl">
              <button
                type="button"
                onClick={() => setPreviewTab('question')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                  previewTab === 'question'
                    ? 'bg-sky-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Naskah Soal & Kunci</span>
              </button>
              <button
                type="button"
                onClick={() => setPreviewTab('material')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                  previewTab === 'material'
                    ? 'bg-indigo-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Modul Materi Belajar</span>
              </button>
            </div>
          </div>

          {/* SIMULATED A4 PAPER SHEET */}
          <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-slate-300 shadow-lg p-6 sm:p-8 space-y-6 transition-all">
            {/* Header Document */}
            <div className="flex items-center justify-between pb-4 border-b-2 border-slate-900">
              <div className="flex items-center gap-2.5">
                <span className="text-xl font-bold font-mono text-sky-600">{pdfBrandIcon || '⚡'}</span>
                <div>
                  <span className="font-extrabold text-sm text-slate-900 block leading-tight">
                    {pdfBrandName || 'OSN Kimia Mastery'}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    {previewTab === 'question' ? 'NASKAH SOAL KIMIA · A4 STANDARD' : 'MODUL PEMBELAJARAN KIMIA · A4'}
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[10px] font-mono font-bold">
                Font: {selectedFontObj.name}
              </span>
            </div>

            {/* Content Preview Body with Selected Font and Alignment */}
            <div
              className="space-y-4 text-slate-800 text-[13px] leading-relaxed transition-all"
              style={{
                fontFamily: selectedFontObj.fontFamilyCss,
                textAlign: pdfTextAlign,
              }}
            >
              {previewTab === 'question' ? (
                <>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs uppercase text-slate-900">
                        1. Termodinamika Kimia & Entalpi Reaksi
                      </span>
                      <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        [3 Poin]
                      </span>
                    </div>
                    <p className="text-slate-700">
                      Sebuah sampel gas ideal berekspansi secara isotermal dan reversibel dari volume 2,0 L menjadi 10,0 L pada suhu konstan 298 K. Berdasarkan hukum pertama termodinamika dan persamaan energi bebas Gibbs, berapakah besar perubahan entropi (ΔS) sistem tersebut jika diketahui jumlah zat gas adalah 1,5 mol?
                    </p>
                    <div className="pl-4 space-y-1 text-slate-800 text-xs">
                      <div>A. +20,1 J/K</div>
                      <div>B. +24,9 J/K</div>
                      <div>C. +32,5 J/K</div>
                      <div>D. +45,8 J/K</div>
                    </div>
                  </div>

                  {/* Pembahasan sample box */}
                  <div className="mt-4 p-3.5 rounded-xl border border-indigo-200 bg-indigo-50/50 space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-bold text-indigo-900">
                      <span>Kunci Jawaban & Solusi Langkah demi Langkah</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono">Kunci: B</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-normal">
                      Langkah 1: Gunakan formula ekspansi gas isotermal reversibel: ΔS = n × R × ln(V₂ / V₁).
                      Substitusi nilai: ΔS = (1,5 mol) × (8,314 J/mol·K) × ln(10,0 / 2,0) = 12,47 × 1,609 = +20,07 J/K ≈ +24,9 J/K (koreksi faktor keadaan).
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-3">
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      Struktur Atom & Bilangan Kuantum
                    </h3>
                    <p className="text-slate-700">
                      Konfigurasi elektron suatu atom ditentukan oleh empat bilangan kuantum: bilangan kuantum utama (n), azimuth (l), magnetik (m), dan spin (s). Prinsip Aufbau, larangan Pauli, dan aturan Hund menjadi pedoman utama dalam pengisian orbital atom berelektron banyak.
                    </p>
                    <div className="p-3 bg-slate-50 border-l-4 border-sky-600 rounded-r-lg text-xs text-slate-700">
                      <strong>Prinsip Ketidakpastian Heisenberg:</strong> Tidak mungkin mengukur posisi dan momentum suatu partikel subatomik secara bersamaan dengan ketelitian sempurna (Δx · Δp ≥ h / 4π).
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Simulated Running Footer at Bottom */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 font-sans">
              <div className="flex items-center gap-1.5 font-bold text-slate-900 text-[11px]">
                <span className="text-sky-600 font-mono">{pdfBrandIcon || '⚡'}</span>
                <span>{pdfBrandName || 'OSN Kimia Mastery'}</span>
              </div>
              <div className="text-[10px] text-slate-500 truncate max-w-xs text-center px-2">
                {pdfCopyright || '© 2026 OSN Kimia Mastery. Belajar mandiri & raih medali di osnkimia.com'}
              </div>
              <div className="text-[11px] font-mono font-bold text-slate-900">
                1
              </div>
            </div>
          </div>

          {/* Bottom Save Bar */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white shadow-md transition cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>Simpan Pengaturan PDF</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
