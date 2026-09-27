import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Bug,
  X,
  AlertTriangle,
  Send,
  Image as ImageIcon,
  CheckCircle2,
  Monitor,
  Code,
  Info,
  Trash2,
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { bugReportService } from '../../services/bugReportService';
import {
  getClientEnvironment,
  getRecentClientLogs,
} from '../../utils/clientErrorCollector';
import type { BugCategory, BugSeverity } from '../../types/database';

interface BugReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledSection?: string;
  prefilledError?: string;
}

export const BugReportModal: React.FC<BugReportModalProps> = ({
  isOpen,
  onClose,
  prefilledSection,
  prefilledError,
}) => {
  const location = useLocation();
  const { user, profile } = useAuth();

  const [title, setTitle] = useState('');
  const [section, setSection] = useState(prefilledSection || 'Tampilan Utama');
  const [isCustomSection, setIsCustomSection] = useState(false);
  const [customSectionInput, setCustomSectionInput] = useState('');
  const [category, setCategory] = useState<BugCategory>('ui_ux');
  const [severity, setSeverity] = useState<BugSeverity>('medium');
  const [description, setDescription] = useState('');
  const [expectedBehavior, setExpectedBehavior] = useState('');
  const [stepsToReproduce, setStepsToReproduce] = useState('');
  const [includeTechnicalLogs, setIncludeTechnicalLogs] = useState(true);
  const [screenshotData, setScreenshotData] = useState<string | null>(null);

  const [guestEmail, setGuestEmail] = useState('');
  const [guestName, setGuestName] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedReportId, setSubmittedReportId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Bagian halaman preset yang cerdas sesuai konteks
  const sectionOptions = [
    'Tampilan Utama / Layout Halaman',
    'Navigasi & Menu Header',
    'Materi Kimia & Teks KaTeX Rumus',
    'Lembar Kerja & Pengerjaan Soal',
    'Papan Tulis Interaktif (STEMBoard)',
    'Tabel Periodik & Kalkulator Molar',
    'Audio / Media Pembelajaran',
    'Tombol Aksi & Pengiriman Form',
    'Lainnya (Kustom)',
  ];

  // Set initial state saat dibuka
  useEffect(() => {
    if (isOpen) {
      setSubmittedReportId(null);
      setErrorMessage(null);
      if (prefilledSection) {
        setSection(prefilledSection);
      }
      if (prefilledError && !description) {
        setDescription(`Terjadi error pada halaman:\n${prefilledError}`);
        setCategory('performance_crash');
        setSeverity('high');
      }
    }
  }, [isOpen, prefilledSection, prefilledError]);

  // Tangani Paste Gambar (Ctrl + V) langsung ke modal
  useEffect(() => {
    if (!isOpen) return;

    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;

      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          const file = items[i].getAsFile();
          if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
              if (event.target?.result) {
                setScreenshotData(event.target.result as string);
              }
            };
            reader.readAsDataURL(file);
          }
          break;
        }
      }
    };

    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      alert('Ukuran file gambar maksimal 2MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setScreenshotData(event.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setErrorMessage('Mohon tulis judul ringkas masalah.');
      return;
    }
    if (!description.trim()) {
      setErrorMessage('Mohon berikan deskripsi apa yang terjadi.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const clientEnv = getClientEnvironment();
      const recentLogs = includeTechnicalLogs ? getRecentClientLogs() : [];
      const effectiveSection = isCustomSection
        ? customSectionInput.trim() || 'Bagian Kustom'
        : section;

      const reporterEmail = user?.email || guestEmail.trim() || 'anon@osnkimia.web.id';
      const reporterName = profile?.full_name || guestName.trim() || 'Pengunjung Web';
      const reporterRole = profile?.role || (user ? 'student' : 'guest');

      const res = await bugReportService.createBugReport({
        page_url: `${location.pathname}${location.search}${location.hash}`,
        page_title: document.title || 'OSN Kimia Platform',
        section: effectiveSection,
        category,
        severity,
        title: title.trim(),
        description: description.trim(),
        expected_behavior: expectedBehavior.trim() || undefined,
        steps_to_reproduce: stepsToReproduce.trim() || undefined,
        reporter_id: user?.id,
        reporter_email: reporterEmail,
        reporter_name: reporterName,
        reporter_role: reporterRole,
        user_agent: clientEnv.userAgent,
        viewport: clientEnv.viewport,
        recent_logs: recentLogs,
        screenshot_data: screenshotData || undefined,
      });

      if (res.success && res.data) {
        setSubmittedReportId(res.data.id);
      } else {
        setErrorMessage(res.error || 'Gagal mengirim laporan. Silakan coba kembali.');
      }
    } catch (err: any) {
      setErrorMessage(err?.message || 'Terjadi kesalahan saat memproses laporan.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setTitle('');
    setDescription('');
    setExpectedBehavior('');
    setStepsToReproduce('');
    setScreenshotData(null);
    setSubmittedReportId(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs select-none overflow-y-auto">
      <div className="bg-[#FFFFF0] border-2 border-[#708090] rounded-2xl max-w-2xl w-full p-5 sm:p-6 shadow-2xl space-y-4 my-auto text-[#2D3748] max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#CBD5E1] shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#708090] text-[#FFFFF0] flex items-center justify-center font-bold shadow-2xs">
              <Bug className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base font-display text-[#2D3748] leading-tight">
                Laporkan Kendala atau Bug
              </h3>
              <p className="text-[11px] text-[#708090]">
                Bantu kami menyempurnakan platform OSN Kimia Mastery
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            className="p-1.5 text-[#708090] hover:text-[#2D3748] hover:bg-[#F0F8FF] rounded-lg transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="overflow-y-auto flex-1 pr-1 space-y-4 text-xs">
          {submittedReportId ? (
            /* Success State */
            <div className="py-8 text-center space-y-3">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-xs border border-emerald-300">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-base font-bold text-[#2D3748]">
                Laporan Berhasil Terkirim!
              </h4>
              <p className="text-xs text-[#708090] max-w-md mx-auto leading-relaxed">
                Terima kasih atas kontribusi Anda. Laporan telah dicatat ke sistem dan siap
                dianalisis serta diekspor oleh tim admin untuk perbaikan kode.
              </p>
              <div className="inline-block px-3 py-1.5 bg-[#F0F8FF] border border-[#B0C4DE] rounded-lg text-xs font-mono font-bold text-[#708090]">
                ID: {submittedReportId}
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-5 py-2.5 bg-[#708090] hover:bg-[#5C6D7D] text-[#FFFFF0] font-bold rounded-xl transition shadow-xs cursor-pointer"
                >
                  Tutup Jendela
                </button>
              </div>
            </div>
          ) : (
            /* Form Input */
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-rose-500" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Konteks Otomatis Halaman */}
              <div className="p-3 bg-[#F0F8FF] border border-[#B0C4DE] rounded-xl space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-bold text-[#708090]">
                  <span className="flex items-center gap-1.5">
                    <Monitor className="w-3.5 h-3.5 text-[#708090]" />
                    <span>Konteks Halaman Aktif</span>
                  </span>
                  <span className="font-mono text-[10px] text-[#2D3748] bg-white px-2 py-0.5 rounded border border-[#B0C4DE]">
                    {window.innerWidth} x {window.innerHeight} px
                  </span>
                </div>
                <div className="text-[11px] text-[#2D3748] truncate font-mono bg-white/70 px-2 py-1 rounded border border-[#B0C4DE]/60">
                  {location.pathname}
                  {location.search}
                </div>
              </div>

              {/* Identitas Pengguna jika Tamu */}
              {!user && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-[#708090] mb-1">
                      Nama Anda (Opsional)
                    </label>
                    <input
                      type="text"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="e.g. Ahmad Siswa"
                      className="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded-lg text-xs focus:outline-none focus:border-[#708090]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-[#708090] mb-1">
                      Email Kontak (Opsional)
                    </label>
                    <input
                      type="email"
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      placeholder="email@sekolah.sch.id"
                      className="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded-lg text-xs focus:outline-none focus:border-[#708090]"
                    />
                  </div>
                </div>
              )}

              {/* Judul Bug */}
              <div>
                <label className="block text-[11px] font-bold text-[#708090] mb-1">
                  Judul Singkat Masalah <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Contoh: Rumus KaTeX soal No. 4 terpotong di layar HP"
                  className="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded-lg text-xs text-[#2D3748] placeholder-slate-400 focus:outline-none focus:border-[#708090]"
                />
              </div>

              {/* Bagian Halaman & Kategori */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-[#708090] mb-1">
                    Bagian / Komponen Halaman <span className="text-rose-500">*</span>
                  </label>
                  {!isCustomSection ? (
                    <select
                      value={section}
                      onChange={(e) => {
                        if (e.target.value === 'Lainnya (Kustom)') {
                          setIsCustomSection(true);
                          setSection('Lainnya (Kustom)');
                        } else {
                          setSection(e.target.value);
                        }
                      }}
                      className="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded-lg text-xs text-[#2D3748] focus:outline-none focus:border-[#708090]"
                    >
                      {sectionOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <div className="flex gap-1.5">
                      <input
                        type="text"
                        value={customSectionInput}
                        onChange={(e) => setCustomSectionInput(e.target.value)}
                        placeholder="Ketik nama komponen/bagian..."
                        className="flex-1 px-3 py-2 bg-white border border-[#CBD5E1] rounded-lg text-xs focus:outline-none focus:border-[#708090]"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setIsCustomSection(false);
                          setSection('Tampilan Utama / Layout Halaman');
                        }}
                        className="px-2 py-1 bg-slate-100 text-slate-600 rounded-lg text-[10px] hover:bg-slate-200"
                      >
                        Batal
                      </button>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#708090] mb-1">
                    Kategori Masalah
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as BugCategory)}
                    className="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded-lg text-xs text-[#2D3748] focus:outline-none focus:border-[#708090]"
                  >
                    <option value="ui_ux">Tampilan / Desain Rusak (UI/UX)</option>
                    <option value="logic_calculation">Hitungan / Logika Kimia Salah</option>
                    <option value="katex_formula">Formula KaTeX / Simbol Error</option>
                    <option value="content_typo">Koreksi Teks / Typo Materi</option>
                    <option value="audio_media">Audio / Video Pembelajaran</option>
                    <option value="auth_account">Akun / Login / Akses</option>
                    <option value="performance_crash">Halaman Lemot / Crash Blank</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>
              </div>

              {/* Tingkat Keparahan */}
              <div>
                <label className="block text-[11px] font-bold text-[#708090] mb-1.5">
                  Tingkat Keparahan (Severity)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'low', label: 'Rendah (Minor)', color: 'border-slate-300 hover:bg-slate-50', activeColor: 'bg-slate-100 border-slate-500 font-bold' },
                    { id: 'medium', label: 'Sedang (Normal)', color: 'border-amber-300 hover:bg-amber-50/50', activeColor: 'bg-amber-100/70 border-amber-500 font-bold text-amber-900' },
                    { id: 'high', label: 'Tinggi (Mayor)', color: 'border-orange-300 hover:bg-orange-50/50', activeColor: 'bg-orange-100 border-orange-500 font-bold text-orange-900' },
                    { id: 'critical', label: 'Kritis (Blokir)', color: 'border-rose-300 hover:bg-rose-50/50', activeColor: 'bg-rose-100 border-rose-500 font-bold text-rose-900' },
                  ].map((lvl) => (
                    <button
                      key={lvl.id}
                      type="button"
                      onClick={() => setSeverity(lvl.id as BugSeverity)}
                      className={`p-2 rounded-xl text-center border text-[11px] transition cursor-pointer ${
                        severity === lvl.id ? lvl.activeColor : `${lvl.color} bg-white text-slate-700`
                      }`}
                    >
                      {lvl.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Deskripsi Bug */}
              <div>
                <label className="block text-[11px] font-bold text-[#708090] mb-1">
                  Apa yang Terjadi? (Deskripsi Masalah) <span className="text-rose-500">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Ceritakan dengan jelas apa yang Anda alami saat menekan tombol atau membuka fitur tersebut..."
                  className="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded-lg text-xs text-[#2D3748] placeholder-slate-400 focus:outline-none focus:border-[#708090]"
                />
              </div>

              {/* Perilaku yang Diharapkan */}
              <div>
                <label className="block text-[11px] font-bold text-[#708090] mb-1">
                  Apa yang Seharusnya Terjadi? (Opsional)
                </label>
                <input
                  type="text"
                  value={expectedBehavior}
                  onChange={(e) => setExpectedBehavior(e.target.value)}
                  placeholder="Contoh: Rumus matematika seharusnya ter-render rapi di tengah layar"
                  className="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded-lg text-xs text-[#2D3748] placeholder-slate-400 focus:outline-none focus:border-[#708090]"
                />
              </div>

              {/* Tangkapan Layar / Attachment */}
              <div>
                <label className="block text-[11px] font-bold text-[#708090] mb-1">
                  Tangkapan Layar (Opsional: Tekan <span className="font-mono bg-slate-100 px-1 py-0.5 rounded border border-slate-300">Ctrl + V</span> untuk paste)
                </label>

                {screenshotData ? (
                  <div className="relative inline-block border-2 border-[#708090] rounded-xl overflow-hidden bg-slate-100">
                    <img
                      src={screenshotData}
                      alt="Tangkapan Layar Bug"
                      className="max-h-36 object-contain"
                    />
                    <button
                      type="button"
                      onClick={() => setScreenshotData(null)}
                      className="absolute top-1.5 right-1.5 p-1 bg-rose-600 hover:bg-rose-700 text-white rounded-lg shadow-sm cursor-pointer"
                      title="Hapus Tangkapan Layar"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <label className="inline-flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-[#F0F8FF] border border-[#CBD5E1] text-[#708090] rounded-lg text-xs font-semibold cursor-pointer shadow-2xs transition">
                      <ImageIcon className="w-4 h-4 text-[#708090]" />
                      <span>Unggah File Gambar</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                    <span className="text-[11px] text-slate-400">
                      atau ambil tangkapan layar lalu tekan <span className="font-mono text-slate-600 font-bold">Ctrl+V</span>
                    </span>
                  </div>
                )}
              </div>

              {/* Centang Log Teknis Otomatis */}
              <div className="pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeTechnicalLogs}
                    onChange={(e) => setIncludeTechnicalLogs(e.target.checked)}
                    className="w-4 h-4 rounded text-[#708090] focus:ring-[#708090]"
                  />
                  <span className="text-[11px] text-slate-600">
                    Lampirkan otomatis spesifikasi teknis browser dan rekaman konsol error terkini
                  </span>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-[#CBD5E1]">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-xl text-xs font-medium cursor-pointer transition"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-5 py-2 bg-[#708090] hover:bg-[#5C6D7D] text-[#FFFFF0] rounded-xl text-xs font-bold transition shadow-xs cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Mengirim Laporan...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Kirim Laporan Bug</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
