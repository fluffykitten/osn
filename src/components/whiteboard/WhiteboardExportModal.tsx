import React, { useState } from 'react';
import {
  Download,
  FileText,
  Image as ImageIcon,
  Check,
  Copy,
  ExternalLink,
  X,
  CloudUpload,
  Loader2,
} from 'lucide-react';
import type { WhiteboardDocument } from '../../types/whiteboard';
import {
  exportWhiteboardToImage,
  exportWhiteboardToPdf,
  exportWhiteboardToSvg,
  triggerFileDownload,
} from '../../services/whiteboardExportService';
import { uploadWhiteboardToR2 } from '../../services/whiteboardStorageService';

interface WhiteboardExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  document: WhiteboardDocument;
  currentPageIndex?: number;
}

export const WhiteboardExportModal: React.FC<WhiteboardExportModalProps> = ({
  isOpen,
  onClose,
  document,
  currentPageIndex = 0,
}) => {
  const [isExporting, setIsExporting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [pageScope, setPageScope] = useState<'current' | 'all'>('current');
  const [r2Url, setR2Url] = useState<string | null>(document.r2PublicUrl || null);
  const [isCopied, setIsCopied] = useState(false);

  if (!isOpen) return null;

  const handleExportImage = async (format: 'image/png' | 'image/jpeg') => {
    try {
      setIsExporting(true);
      setStatusMessage('Memuat aset & merender gambar tajam...');
      const isSinglePage = document.layoutMode === 'paginated' && pageScope === 'current';
      const targetPageIndex = isSinglePage ? currentPageIndex : undefined;

      const blob = await exportWhiteboardToImage(document, format, 0.95, 2.0, targetPageIndex);
      const ext = format === 'image/png' ? 'png' : 'jpg';
      const pageSuffix = typeof targetPageIndex === 'number' ? `-hal-${targetPageIndex + 1}` : '';
      triggerFileDownload(blob, `${document.title || 'whiteboard'}${pageSuffix}.${ext}`);
    } catch (err) {
      console.error('Gagal ekspor gambar:', err);
      alert('Gagal mengekspor gambar.');
    } finally {
      setIsExporting(false);
      setStatusMessage('');
    }
  };

  const handleExportPdf = async () => {
    try {
      setIsExporting(true);
      setStatusMessage('Menyusun lembar dokumen PDF multi-halaman...');
      const blob = await exportWhiteboardToPdf(document);
      triggerFileDownload(blob, `${document.title || 'whiteboard'}.pdf`);
    } catch (err) {
      console.error('Gagal ekspor PDF:', err);
      alert('Gagal mengekspor PDF.');
    } finally {
      setIsExporting(false);
      setStatusMessage('');
    }
  };

  const handleExportSvg = () => {
    try {
      const svgString = exportWhiteboardToSvg(document);
      const blob = new Blob([svgString], { type: 'image/svg+xml' });
      triggerFileDownload(blob, `${document.title || 'whiteboard'}.svg`);
    } catch (err) {
      console.error('Gagal ekspor SVG:', err);
      alert('Gagal mengekspor SVG.');
    }
  };

  const handleUploadR2 = async () => {
    try {
      setIsExporting(true);
      setStatusMessage('Menyiapkan snapshot pratinjau & mengunggah ke Cloudflare R2...');
      const previewBlob = await exportWhiteboardToImage(document, 'image/jpeg', 0.8, 1.0);
      const res = await uploadWhiteboardToR2(document, previewBlob);

      if (res.success && res.jsonUrl) {
        setR2Url(res.jsonUrl);
      } else {
        alert('Gagal menyimpan ke Cloudflare R2.');
      }
    } catch (err) {
      console.error('Gagal upload ke R2:', err);
      alert('Gagal menyimpan ke Cloudflare R2.');
    } finally {
      setIsExporting(false);
      setStatusMessage('');
    }
  };

  const handleCopyLink = () => {
    if (r2Url) {
      navigator.clipboard.writeText(r2Url);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 w-full max-w-lg text-slate-800 overflow-hidden">
        {/* Loading Overlay saat proses ekspor / upload */}
        {isExporting && (
          <div className="absolute inset-0 bg-white/85 backdrop-blur-xs rounded-3xl flex flex-col items-center justify-center gap-3 z-20 animate-in fade-in">
            <Loader2 size={36} className="text-blue-600 animate-spin" />
            <p className="text-xs font-bold text-slate-700">{statusMessage || 'Sedang memproses...'}</p>
          </div>
        )}

        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-blue-100 text-blue-600 rounded-xl">
              <Download size={22} />
            </div>
            <div>
              <h3 className="font-bold text-base text-slate-900">Ekspor & Bagikan Kanvas</h3>
              <p className="text-xs text-slate-500">
                Pilih format dokumen cetak atau simpan ke Cloudflare R2
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-100 transition cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Pilihan Cakupan Halaman untuk Mode Paginated */}
        {document.layoutMode === 'paginated' && (
          <div className="mt-4 p-3 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col gap-1.5">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-1">
              Cakupan Ekspor Gambar (PNG / JPEG):
            </div>
            <div className="grid grid-cols-2 gap-1.5 bg-slate-200/70 p-1 rounded-xl">
              <button
                type="button"
                onClick={() => setPageScope('current')}
                className={`py-1.5 px-3 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                  pageScope === 'current'
                    ? 'bg-white text-blue-600 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>Halaman {currentPageIndex + 1} Saja</span>
              </button>
              <button
                type="button"
                onClick={() => setPageScope('all')}
                className={`py-1.5 px-3 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                  pageScope === 'all'
                    ? 'bg-white text-blue-600 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>Semua Halaman ({document.pages.length} Lembar)</span>
              </button>
            </div>
          </div>
        )}

        {/* Info Mode Infinite */}
        {document.layoutMode === 'infinite' && (
          <div className="mt-4 px-3 py-2 bg-blue-50 border border-blue-200 rounded-2xl flex items-center gap-2 text-xs text-blue-800">
            <span className="font-bold shrink-0">✨ Infinite Fit:</span>
            <span>Seluruh konten dan goresan akan dibingkai rapi tanpa ada bagian yang terpotong.</span>
          </div>
        )}

        {/* Opsi Ekspor Berkas */}
        <div className="grid grid-cols-2 gap-3 my-4">
          <button
            onClick={handleExportPdf}
            disabled={isExporting}
            className="p-4 rounded-2xl border-2 border-slate-200 hover:border-red-400 hover:bg-red-50/50 transition flex flex-col items-start gap-2 group text-left cursor-pointer"
          >
            <div className="p-2 bg-red-100 text-red-600 rounded-xl group-hover:scale-110 transition-transform">
              <FileText size={20} />
            </div>
            <div>
              <div className="font-bold text-xs text-slate-800 group-hover:text-red-600">
                Dokumen PDF Multi-Halaman
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {document.layoutMode === 'paginated'
                  ? `${document.pages.length} Halaman A4 tersinkron`
                  : 'Satu halaman PDF utuh beresolusi cetak'}
              </div>
            </div>
          </button>

          <button
            onClick={() => handleExportImage('image/png')}
            disabled={isExporting}
            className="p-4 rounded-2xl border-2 border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 transition flex flex-col items-start gap-2 group text-left cursor-pointer"
          >
            <div className="p-2 bg-blue-100 text-blue-600 rounded-xl group-hover:scale-110 transition-transform">
              <ImageIcon size={20} />
            </div>
            <div>
              <div className="font-bold text-xs text-slate-800 group-hover:text-blue-600">
                Gambar PNG (2x Retina)
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {document.layoutMode === 'paginated' && pageScope === 'current'
                  ? `Lembar Halaman ${currentPageIndex + 1} tajam`
                  : 'Kualitas ultra-tajam untuk materi soal'}
              </div>
            </div>
          </button>

          <button
            onClick={() => handleExportImage('image/jpeg')}
            disabled={isExporting}
            className="p-4 rounded-2xl border-2 border-slate-200 hover:border-amber-400 hover:bg-amber-50/50 transition flex flex-col items-start gap-2 group text-left cursor-pointer"
          >
            <div className="p-2 bg-amber-100 text-amber-600 rounded-xl group-hover:scale-110 transition-transform">
              <ImageIcon size={20} />
            </div>
            <div>
              <div className="font-bold text-xs text-slate-800 group-hover:text-amber-600">
                Gambar JPEG
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Ukuran berkas lebih ringan & hemat memori
              </div>
            </div>
          </button>

          <button
            onClick={handleExportSvg}
            disabled={isExporting}
            className="p-4 rounded-2xl border-2 border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/50 transition flex flex-col items-start gap-2 group text-left cursor-pointer"
          >
            <div className="p-2 bg-emerald-100 text-emerald-600 rounded-xl group-hover:scale-110 transition-transform">
              <FileText size={20} />
            </div>
            <div>
              <div className="font-bold text-xs text-slate-800 group-hover:text-emerald-600">
                Vektor SVG Murni
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Kurva Bezier presisi untuk Inkscape/AI
              </div>
            </div>
          </button>
        </div>

        {/* Cloudflare R2 Upload & Sharing */}
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
              <CloudUpload size={16} className="text-indigo-600" />
              <span>Simpan ke Cloudflare R2 Storage</span>
            </div>
            <button
              onClick={handleUploadR2}
              disabled={isExporting}
              className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold shadow-sm transition disabled:opacity-50 cursor-pointer"
            >
              {isExporting ? 'Mengunggah...' : 'Unggah ke R2'}
            </button>
          </div>

          {r2Url && (
            <div className="flex items-center gap-2 pt-2 border-t border-slate-200">
              <input
                type="text"
                readOnly
                value={r2Url}
                className="flex-1 px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-mono text-slate-600"
              />
              <button
                onClick={handleCopyLink}
                className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl text-xs font-semibold flex items-center gap-1 transition cursor-pointer"
              >
                {isCopied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
                <span>{isCopied ? 'Tersalin' : 'Salin'}</span>
              </button>
              <a
                href={r2Url}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl transition"
              >
                <ExternalLink size={14} />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
