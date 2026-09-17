import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { worksheetRealtimeService } from '../../services/worksheetRealtimeService';
import { studentWorksheetService } from '../../services/studentWorksheetService';
import { DEFAULT_STUDENT_NAME } from '../../lib/supabaseClient';
import { KeyRound, User, ArrowRight, X, AlertCircle, CheckCircle2, Sparkles } from 'lucide-react';

interface TokenJoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultToken?: string;
}

export const TokenJoinModal: React.FC<TokenJoinModalProps> = ({
  isOpen,
  onClose,
  defaultToken = '',
}) => {
  const navigate = useNavigate();
  const [tokenInput, setTokenInput] = useState(defaultToken);
  const [studentName, setStudentName] = useState(() => {
    return localStorage.getItem('osn_student_name') || DEFAULT_STUDENT_NAME;
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    const clean = tokenInput.trim().toUpperCase();
    if (!clean) {
      setErrorMessage('Harap masukkan kode token worksheet.');
      return;
    }

    if (!studentName.trim()) {
      setErrorMessage('Harap masukkan nama lengkap Anda.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // Simpan nama siswa ke localStorage
      localStorage.setItem('osn_student_name', studentName.trim());
      const studentId =
        localStorage.getItem('osn_student_id') ||
        `std-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
      localStorage.setItem('osn_student_id', studentId);

      const res = await worksheetRealtimeService.joinWorksheetByToken(clean, {
        id: studentId,
        name: studentName.trim(),
      });

      if (!res.success || !res.worksheet) {
        setErrorMessage(res.error || 'Token tidak valid.');
        setIsSubmitting(false);
        return;
      }

      // Daftarkan ke koleksi worksheet siswa agar muncul di daftar worksheet siswa
      studentWorksheetService.enrollWorksheet(res.worksheet, clean);

      // Berhasil bergabung, arahkan ke lembar kerja live
      onClose();
      navigate(`/worksheet/live/${clean}`);
    } catch (err: any) {
      setErrorMessage(err?.message || 'Terjadi kesalahan saat bergabung.');
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-md rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 text-slate-400 hover:text-white rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-400 flex items-center justify-center mb-3">
            <KeyRound className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold font-display">Gabung Sesi Worksheet Guru</h3>
          <p className="text-xs text-slate-300 mt-1">
            Masukkan kode token yang dibagikan oleh Guru Pembina untuk mulai mengerjakan secara live.
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleJoin} className="p-6 space-y-4">
          {errorMessage && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1.5">
              Nama Lengkap Siswa:
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Nama lengkap Anda..."
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1.5">
              Kode Token Worksheet:
            </label>
            <div className="relative">
              <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Contoh: OSN-7842"
                value={tokenInput}
                onChange={(e) => setTokenInput(e.target.value.toUpperCase())}
                className="w-full pl-10 pr-3 py-2.5 text-sm tracking-wider font-mono font-bold bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 uppercase"
                autoFocus
                required
              />
            </div>
            <span className="text-[11px] text-slate-400 mt-1 block">
              Dapatkan token 6 karakter ini dari guru atau pembina olimpiade Anda.
            </span>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting || !tokenInput.trim()}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white text-xs font-bold rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <span>Memvalidasi Token...</span>
              ) : (
                <>
                  <span>Mulai Pengerjaan Live</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
