import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  UploadCloud,
  Image as ImageIcon,
  CheckCircle2,
  AlertCircle,
  X,
  ExternalLink,
  Copy,
  Check,
  RefreshCw,
  FileText,
  Sparkles,
} from 'lucide-react';
import { storageService, MAX_STORAGE_FILE_SIZE_BYTES, type StorageCategory } from '../../services/storageService';

interface CloudflareImageUploaderProps {
  value?: string;
  onChange: (url: string, meta?: { key: string; filename: string; size: number }) => void;
  onRemove?: () => void;
  category?: StorageCategory;
  label?: string;
  helpText?: string;
  disabled?: boolean;
  className?: string;
}

export const CloudflareImageUploader: React.FC<CloudflareImageUploaderProps> = ({
  value,
  onChange,
  onRemove,
  category = 'diagrams',
  label = 'Unggah Diagram / Gambar Soal',
  helpText = 'Format: PNG, JPG, WEBP, SVG (Maks. 10 MB). Mendukung Drag & Drop atau Paste (Ctrl+V)',
  disabled = false,
  className = '',
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const isConfigured = storageService.isStorageConfigured();

  const handleProcessFile = useCallback(
    async (file: File) => {
      setErrorMessage(null);
      setSuccessMessage(null);

      if (file.size > MAX_STORAGE_FILE_SIZE_BYTES) {
        setErrorMessage(
          `Ukuran berkas (${(file.size / (1024 * 1024)).toFixed(2)} MB) melebihi batas 10 MB.`
        );
        return;
      }

      setIsUploading(true);
      setUploadProgress(10);

      try {
        const res = await storageService.uploadFile(file, {
          category,
          filename: file.name,
          onProgress: (percent) => {
            setUploadProgress(Math.max(15, percent));
          },
        });

        setUploadProgress(100);
        onChange(res.url, {
          key: res.key,
          filename: res.filename,
          size: res.size,
        });

        setSuccessMessage(`Berhasil diunggah ke Cloudflare R2 (${res.filename})!`);
        setTimeout(() => setSuccessMessage(null), 3000);
      } catch (err: any) {
        setErrorMessage(err?.message || 'Gagal mengunggah gambar ke storage.');
      } finally {
        setIsUploading(false);
        setUploadProgress(0);
      }
    },
    [category, onChange]
  );

  // Dukungan Paste dari Clipboard (Ctrl + V / Tangkapan Layar Diagram)
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      if (disabled || isUploading) return;
      const items = e.clipboardData?.items;
      if (!items) return;

      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.type.startsWith('image/')) {
          const blob = item.getAsFile();
          if (blob) {
            e.preventDefault();
            const filename = `screenshot-diagram-${Date.now()}.${item.type.split('/')[1] || 'png'}`;
            const file = new File([blob], filename, { type: blob.type });
            handleProcessFile(file);
            break;
          }
        }
      }
    };

    const node = containerRef.current;
    if (node) {
      node.addEventListener('paste', handlePaste);
      return () => node.removeEventListener('paste', handlePaste);
    }
  }, [disabled, isUploading, handleProcessFile]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled && !isUploading) {
      setIsDragging(true);
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (disabled || isUploading) return;

    const files = e.dataTransfer?.files;
    if (files && files.length > 0) {
      handleProcessFile(files[0]);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleProcessFile(files[0]);
      // Reset input agar dapat memilih file yang sama jika dibutuhkan
      e.target.value = '';
    }
  };

  const handleCopyUrl = async () => {
    if (!value) return;
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const handleClear = () => {
    setErrorMessage(null);
    setSuccessMessage(null);
    if (onRemove) {
      onRemove();
    } else {
      onChange('');
    }
  };

  const isPdf = value?.toLowerCase().includes('.pdf');

  return (
    <div ref={containerRef} className={`space-y-2 ${className}`} tabIndex={0}>
      {/* Header Label & Category Indicator */}
      <div className="flex items-center justify-between">
        <label className="block text-xs font-semibold text-slate-700 flex items-center gap-1.5">
          <ImageIcon className="w-3.5 h-3.5 text-sky-600" />
          <span>{label}</span>
        </label>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-mono border border-slate-200">
            Folder: {category}/
          </span>
          <span
            className={`text-[10px] px-2 py-0.5 rounded-full font-bold flex items-center gap-1 ${
              isConfigured
                ? 'bg-amber-50 text-amber-800 border border-amber-200'
                : 'bg-slate-100 text-slate-500 border border-slate-200'
            }`}
            title={isConfigured ? 'Terkoneksi ke Cloudflare R2' : 'Mode Fallback Data URL'}
          >
            <Sparkles className="w-2.5 h-2.5 text-amber-600" />
            <span>Cloudflare R2</span>
          </span>
        </div>
      </div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/svg+xml,image/gif,application/pdf"
        className="hidden"
        onChange={handleFileInputChange}
        disabled={disabled || isUploading}
      />

      {/* Upload Dropzone / Preview Area */}
      {!value ? (
        <div
          onClick={() => !disabled && !isUploading && fileInputRef.current?.click()}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`relative border-2 border-dashed rounded-xl p-5 text-center transition-all cursor-pointer select-none ${
            isDragging
              ? 'border-sky-500 bg-sky-50/80 scale-[1.01]'
              : 'border-slate-300 hover:border-sky-400 bg-slate-50/70 hover:bg-sky-50/30'
          } ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
        >
          {isUploading ? (
            <div className="py-3 space-y-3">
              <div className="w-9 h-9 mx-auto border-3 border-sky-200 border-t-sky-600 rounded-full animate-spin" />
              <div className="space-y-1">
                <p className="text-xs font-bold text-sky-900">Mengunggah ke Cloudflare R2...</p>
                <div className="max-w-xs mx-auto w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-sky-600 h-full transition-all duration-200 rounded-full"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
                <p className="text-[10px] text-slate-500 font-mono">{uploadProgress}%</p>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="w-10 h-10 mx-auto rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shadow-xs">
                <UploadCloud className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">
                  Klik untuk jelajahi atau seret gambar diagram ke sini
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">{helpText}</p>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-[10px] text-slate-600 shadow-2xs font-mono">
                <span>💡 Tip:</span>
                <span>Bisa langsung <strong>Paste (Ctrl+V)</strong> hasil screenshot</span>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Preview Card */
        <div className="border border-slate-200 rounded-xl bg-white p-3 shadow-xs space-y-3">
          <div className="flex items-start gap-3">
            {/* Thumbnail Box */}
            <div className="w-24 h-24 rounded-lg bg-slate-100 border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center relative group">
              {isPdf ? (
                <div className="flex flex-col items-center gap-1 text-rose-600">
                  <FileText className="w-8 h-8" />
                  <span className="text-[9px] font-bold">PDF Dokumen</span>
                </div>
              ) : (
                <img
                  src={value}
                  alt="Pratinjau Diagram"
                  className="w-full h-full object-contain p-1"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              )}
            </div>

            {/* Details & Actions */}
            <div className="flex-1 min-w-0 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900 truncate">
                  Diagram Tersemat
                </span>
                <button
                  type="button"
                  onClick={handleClear}
                  disabled={disabled}
                  className="p-1 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                  title="Hapus gambar diagram ini"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* URL String Display */}
              <div className="p-1.5 bg-slate-50 rounded-lg border border-slate-200 text-[10px] font-mono text-slate-600 truncate flex items-center justify-between gap-2">
                <span className="truncate">{value}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <button
                  type="button"
                  onClick={handleCopyUrl}
                  className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-[11px] font-medium flex items-center gap-1 transition-colors cursor-pointer"
                  title="Salin tautan publik diagram"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Tersalin!' : 'Salin URL'}</span>
                </button>

                <a
                  href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200 rounded-lg text-[11px] font-medium flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Buka Tab Baru</span>
                </a>

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={disabled || isUploading}
                  className="px-2.5 py-1 bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200 rounded-lg text-[11px] font-medium flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Ganti Berkas</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Messages */}
      {errorMessage && (
        <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 flex items-start gap-2 animate-in fade-in">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      {successMessage && (
        <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{successMessage}</span>
        </div>
      )}
    </div>
  );
};
