import React, { useState } from 'react';
import {
  Share2,
  Users,
  Lock,
  Unlock,
  Copy,
  Check,
  X,
  Shield,
  ArrowRight,
  LogOut,
  Plus,
} from 'lucide-react';
import type { SessionPermissionMode, WhiteboardParticipant } from '../../types/whiteboard';

interface WhiteboardSessionModalProps {
  isOpen: boolean;
  onClose: () => void;
  roomCode: string;
  isHost: boolean;
  sessionMode: SessionPermissionMode;
  onChangeSessionMode: (mode: SessionPermissionMode) => void;
  participants: WhiteboardParticipant[];
  onStartSession: (code: string) => void;
  onJoinSession: (code: string) => void;
  onLeaveSession?: () => void;
}

export const WhiteboardSessionModal: React.FC<WhiteboardSessionModalProps> = ({
  isOpen,
  onClose,
  roomCode,
  isHost,
  sessionMode,
  onChangeSessionMode,
  participants,
  onStartSession,
  onJoinSession,
  onLeaveSession,
}) => {
  const [inputCode, setInputCode] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    const inviteLink = `${window.location.origin}/whiteboard/room/${roomCode}`;
    navigator.clipboard.writeText(inviteLink);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleCreateNewCode = () => {
    const randomCode = `STEM-${Math.floor(1000 + Math.random() * 9000)}`;
    onStartSession(randomCode);
  };

  const handleJoin = (code: string) => {
    if (!code.trim()) return;
    onJoinSession(code.trim().toUpperCase());
    setInputCode('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150 select-none">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 w-full max-w-md text-slate-800 max-h-[90vh] overflow-y-auto">
        {/* Header Modal */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-blue-100 text-blue-600 rounded-xl">
              <Share2 size={20} />
            </div>
            <div>
              <h3 className="font-bold text-base text-slate-900">Sesi Bersama (Kolaborasi)</h3>
              <p className="text-xs text-slate-500">
                {roomCode ? `Terhubung ke ruangan ${roomCode}` : 'Mulai atau gabung ke sesi papan tulis'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-100 transition cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {roomCode ? (
          <div className="space-y-4 my-4">
            {/* Kode Ruangan Aktif */}
            <div className="p-4 bg-blue-50/70 border border-blue-100 rounded-2xl flex flex-col items-center justify-center text-center">
              <span className="text-[11px] font-bold text-blue-600 tracking-wider uppercase">
                Kode Ruangan Aktif
              </span>
              <div className="text-3xl font-black font-mono tracking-widest text-slate-900 my-1">
                {roomCode}
              </div>
              <div className="flex items-center gap-2 mt-1">
                <button
                  onClick={handleCopyLink}
                  className="px-3 py-1.5 bg-white border border-blue-200 text-blue-700 hover:bg-blue-50 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-2xs transition cursor-pointer"
                >
                  {isCopied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  <span>{isCopied ? 'Tautan Tersalin' : 'Salin Tautan'}</span>
                </button>
              </div>
            </div>

            {/* Mode Izin (Hanya untuk Host) */}
            {isHost && (
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <Shield size={14} className="text-blue-600" />
                  <span>Mode Izin Peserta (Anda Host):</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onChangeSessionMode('presentation')}
                    className={`p-2.5 rounded-xl border text-left flex flex-col transition cursor-pointer ${
                      sessionMode === 'presentation'
                        ? 'border-blue-500 bg-blue-50/80 text-blue-900 font-bold'
                        : 'border-slate-200 hover:bg-white text-slate-600'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 text-xs">
                      <Lock size={13} /> Mode Presentasi
                    </div>
                    <span className="text-[10px] font-normal text-slate-500 mt-1">
                      Peserta hanya melihat
                    </span>
                  </button>

                  <button
                    onClick={() => onChangeSessionMode('collaborative')}
                    className={`p-2.5 rounded-xl border text-left flex flex-col transition cursor-pointer ${
                      sessionMode === 'collaborative'
                        ? 'border-blue-500 bg-blue-50/80 text-blue-900 font-bold'
                        : 'border-slate-200 hover:bg-white text-slate-600'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 text-xs">
                      <Unlock size={13} /> Kolaboratif
                    </div>
                    <span className="text-[10px] font-normal text-slate-500 mt-1">
                      Semua bisa mencoret
                    </span>
                  </button>
                </div>
              </div>
            )}

            {/* Daftar Peserta Online */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
                <span className="flex items-center gap-1.5">
                  <Users size={14} className="text-emerald-600" />
                  Peserta Terhubung ({participants.length})
                </span>
              </div>
              <div className="max-h-32 overflow-y-auto space-y-1.5 pr-1">
                {participants.map((p) => (
                  <div
                    key={p.id}
                    className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: p.color }}
                      />
                      <span className="font-semibold text-slate-800">{p.name}</span>
                    </div>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                        p.role === 'teacher'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-emerald-100 text-emerald-700'
                      }`}
                    >
                      {p.role === 'teacher' ? 'Guru' : 'Siswa'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bagian Tindakan Sesi (Keluar, Masuk Kode Lain, Buat Sesi Baru) */}
            <div className="pt-3 border-t border-slate-100 space-y-2.5">
              <div className="text-[11px] font-bold text-slate-600">Opsi Sesi:</div>

              {/* Keluar dari Sesi Aktif */}
              <button
                onClick={() => {
                  if (onLeaveSession) {
                    onLeaveSession();
                  }
                  onClose();
                }}
                className="w-full py-2 px-3 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer"
                title="Tinggalkan sesi kelas saat ini"
              >
                <LogOut size={14} />
                <span>Keluar dari Sesi Ini</span>
              </button>

              {/* Ganti ke Kode Sesi Lain */}
              <div className="space-y-1.5 pt-1">
                <label className="text-[11px] font-bold text-slate-700 block">
                  Pindah ke Kode Sesi Lain:
                </label>
                <div className="flex gap-1.5">
                  <input
                    type="text"
                    value={inputCode}
                    onChange={(e) => setInputCode(e.target.value.toUpperCase())}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && inputCode.trim()) {
                        handleJoin(inputCode);
                      }
                    }}
                    placeholder="Misal: STEM-4092"
                    className="flex-1 px-3 py-1.5 text-xs font-mono font-bold uppercase rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 bg-slate-50/50"
                  />
                  <button
                    onClick={() => handleJoin(inputCode)}
                    disabled={!inputCode.trim()}
                    className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl flex items-center gap-1 transition disabled:opacity-40 cursor-pointer shadow-xs active:scale-95"
                  >
                    <span>Masuk</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>

              {/* Buat & Buka Sesi Baru Sendiri */}
              <button
                onClick={() => {
                  handleCreateNewCode();
                }}
                className="w-full py-2.5 px-3 bg-blue-50 hover:bg-blue-100/80 text-blue-700 border border-blue-200/80 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition cursor-pointer shadow-2xs active:scale-95"
                title="Buka ruangan sesi kolaborasi baru sebagai host"
              >
                <Plus size={14} />
                <span>Buka Sesi Baru Sendiri (Mulai Host)</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4 my-4">
            {/* Opsi 1: Buka Sesi Baru (Bisa untuk Guru maupun Siswa) */}
            <div className="p-4 bg-blue-50/60 border border-blue-100 rounded-2xl flex flex-col items-center text-center">
              <h4 className="font-bold text-sm text-slate-900">Buka Sesi Papan Tulis Baru</h4>
              <p className="text-xs text-slate-600 mt-1 mb-3">
                Buat kode ruangan unik agar siswa lain atau guru dapat bergabung dan belajar bersama secara langsung.
              </p>
              <button
                onClick={handleCreateNewCode}
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
              >
                <Plus size={15} />
                <span>Buat Kode Ruangan (Mulai Sesi)</span>
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <div className="flex-1 h-[1px] bg-slate-200" />
              <span>ATAU</span>
              <div className="flex-1 h-[1px] bg-slate-200" />
            </div>

            {/* Opsi 2: Gabung ke Ruangan dengan Kode */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 block">
                Punya Kode Ruangan dari Guru / Teman?
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value.toUpperCase())}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && inputCode.trim()) {
                      handleJoin(inputCode);
                    }
                  }}
                  placeholder="Misal: STEM-4092"
                  className="flex-1 px-3 py-2 text-xs font-mono font-bold tracking-wider rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 uppercase bg-slate-50/50"
                />
                <button
                  onClick={() => handleJoin(inputCode)}
                  disabled={!inputCode.trim()}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl flex items-center gap-1 transition disabled:opacity-40 cursor-pointer shadow-xs active:scale-95"
                >
                  <span>Gabung Sesi</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
