import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { classroomService } from '../../services/classroomService';
import { useAuth } from '../../contexts/AuthContext';
import { DEFAULT_STUDENT_NAME } from '../../lib/supabaseClient';
import type { Classroom, ClassroomMemberStatus } from '../../types/database';
import {
  School,
  X,
  KeyRound,
  ArrowRight,
  CheckCircle2,
  Clock,
  AlertCircle,
} from 'lucide-react';

interface JoinClassroomModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (classroom: Classroom) => void;
}

export const JoinClassroomModal: React.FC<JoinClassroomModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const navigate = useNavigate();
  const { user, profile } = useAuth();

  const [code, setCode] = useState('');
  const [studentName, setStudentName] = useState(() => {
    return (
      user?.user_metadata?.full_name ||
      profile?.full_name ||
      localStorage.getItem('osn_student_name') ||
      DEFAULT_STUDENT_NAME
    );
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successInfo, setSuccessInfo] = useState<{
    message: string;
    status: ClassroomMemberStatus;
    classroom: Classroom;
  } | null>(null);

  if (!isOpen) return null;

  const handleClose = () => {
    setCode('');
    setErrorMessage(null);
    setSuccessInfo(null);
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCode = code.trim().toUpperCase();

    if (!cleanCode) {
      setErrorMessage('Harap masukkan kode kelas pembinaan.');
      return;
    }

    const effectiveEmail =
      user?.email ||
      profile?.email ||
      localStorage.getItem('osn_student_email') ||
      'siswa@gmail.com';

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      if (studentName.trim()) {
        localStorage.setItem('osn_student_name', studentName.trim());
      }

      const res = await classroomService.joinClassroomByCode(
        cleanCode,
        effectiveEmail,
        user?.id,
        studentName.trim() || undefined
      );

      if (!res.success || !res.classroom) {
        setErrorMessage(res.message);
        setIsSubmitting(false);
        return;
      }

      // Simpan konteks kelas aktif & email siswa ke localStorage
      localStorage.setItem('osn_student_classroom_id', String(res.classroom.id));
      localStorage.setItem('osn_student_email', effectiveEmail);

      setSuccessInfo({
        message: res.message,
        status: res.status || 'pending_approval',
        classroom: res.classroom,
      });

      if (onSuccess) {
        onSuccess(res.classroom);
      }

      // Auto redirect ke halaman kelas siswa setelah 1.6 detik
      setTimeout(() => {
        handleClose();
        navigate(`/student/classes/${res.classroom!.id}`);
      }, 1600);
    } catch (err: any) {
      setErrorMessage(err?.message || 'Terjadi kesalahan saat memproses kode kelas.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
      onClick={handleClose}
    >
      <div
        className="bg-white w-full max-w-md rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Modal */}
        <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 text-white p-6 relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-1 text-slate-400 hover:text-white rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-11 h-11 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 text-indigo-400 flex items-center justify-center mb-3">
            <School className="w-6 h-6" />
          </div>

          <h3 className="text-lg font-bold font-display tracking-tight">
            Gabung Kelas Binaan Guru
          </h3>
          <p className="text-xs text-indigo-200/90 mt-1 leading-relaxed">
            Masukkan kode kelas dari Guru Pembina OSN Anda. Permintaan masuk akan ditinjau dan disetujui oleh Guru.
          </p>
        </div>

        {/* Content & Form */}
        <div className="p-6 space-y-4">
          {successInfo ? (
            <div className="py-4 space-y-4 text-center animate-fadeIn">
              <div
                className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center ${
                  successInfo.status === 'active'
                    ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                    : 'bg-amber-50 text-amber-600 border border-amber-200'
                }`}
              >
                {successInfo.status === 'active' ? (
                  <CheckCircle2 className="w-8 h-8" />
                ) : (
                  <Clock className="w-8 h-8 animate-pulse" />
                )}
              </div>

              <div className="space-y-1">
                <h4 className="text-base font-bold text-slate-900">
                  {successInfo.status === 'active'
                    ? 'Berhasil Bergabung!'
                    : 'Permintaan Berhasil Dikirim!'}
                </h4>
                <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
                  {successInfo.message}
                </p>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-left space-y-1">
                <div className="text-[11px] text-slate-500 font-medium">Kelas Tujuan:</div>
                <div className="text-sm font-bold text-slate-900">{successInfo.classroom.name}</div>
                <div className="text-xs font-mono font-bold text-indigo-600">
                  Kode: {successInfo.classroom.code}
                </div>
              </div>

              <button
                onClick={() => {
                  handleClose();
                  navigate(`/student/classes/${successInfo.classroom.id}`);
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition-all shadow-xs cursor-pointer"
              >
                <span>Buka Halaman Kelas Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-2.5 text-xs text-rose-700 animate-fadeIn">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-500" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Input Kode Kelas */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-mono">
                  Kode Kelas Pembina <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    value={code}
                    onChange={(e) => setCode(e.target.value.toUpperCase())}
                    placeholder="CONTOH: PELATNAS-26"
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 focus:bg-white focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 rounded-xl text-sm font-mono font-extrabold tracking-widest text-slate-900 transition-all uppercase placeholder:normal-case placeholder:font-sans placeholder:font-normal placeholder:tracking-normal placeholder:text-slate-400"
                    autoFocus
                  />
                </div>
                <p className="text-[11px] text-slate-500">
                  Minta kode kelas 6-12 karakter ini kepada Guru Pembina OSN Anda.
                </p>
              </div>

              {/* Nama Siswa */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-700">
                  Nama Lengkap Siswa
                </label>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Masukkan nama lengkap Anda"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 focus:bg-white focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 rounded-xl text-xs text-slate-800 transition-all"
                />
              </div>

              {/* Approval Notice */}
              <div className="p-3 bg-indigo-50/70 border border-indigo-100 rounded-xl flex items-start gap-2 text-[11px] text-indigo-900 leading-relaxed">
                <Clock className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Persetujuan Guru:</strong> Setelah Anda mengirimkan kode, Guru Pembina akan mengonfirmasi permintaan bergabung sebelum Anda dapat mengakses pengerjaan tugas.
                </span>
              </div>

              {/* Modal Actions */}
              <div className="pt-2 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-800 rounded-xl hover:bg-slate-100 transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !code.trim()}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs font-bold rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Memverifikasi...</span>
                    </>
                  ) : (
                    <>
                      <span>Kirim Permintaan</span>
                      <ArrowRight className="w-3.5 h-3.5" />
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
