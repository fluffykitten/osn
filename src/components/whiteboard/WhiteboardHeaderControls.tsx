import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Share2 } from 'lucide-react';
import type { SessionPermissionMode } from '../../types/whiteboard';

interface WhiteboardHeaderControlsProps {
  roomCode?: string;
  sessionMode?: SessionPermissionMode;
  isHost?: boolean;
  onOpenSession: () => void;
  onToggleSessionMode?: () => void;
}

export const WhiteboardHeaderControls: React.FC<WhiteboardHeaderControlsProps> = ({
  roomCode,
  sessionMode = 'collaborative',
  isHost = false,
  onOpenSession,
  onToggleSessionMode,
}) => {
  const [targetEl, setTargetEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Cari elemen slot portal di Navbar
    const el = document.getElementById('navbar-whiteboard-slot');
    setTargetEl(el);
  }, []);

  if (!targetEl) return null;

  return createPortal(
    <div className="flex items-center gap-2 animate-in fade-in">
      {/* Tombol Kode Whiteboard / Sesi */}
      <button
        onClick={onOpenSession}
        className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs transition active:scale-95 cursor-pointer"
        title="Pengaturan Sesi Bersama Guru & Siswa"
      >
        <Share2 size={13} />
        <span>{roomCode ? `Kode: ${roomCode}` : 'Sesi Bersama'}</span>
      </button>

      {/* Mode Izin Menggambar ("Bisa Gambar" / "Menyimak") */}
      {roomCode && (
        isHost ? (
          <button
            onClick={onToggleSessionMode}
            className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 border shadow-2xs cursor-pointer ${
              sessionMode === 'collaborative'
                ? 'bg-emerald-50 border-emerald-300 text-emerald-800 hover:bg-emerald-100'
                : 'bg-amber-50 border-amber-300 text-amber-800 hover:bg-amber-100'
            }`}
            title="Klik untuk ubah mode izin siswa (Kolaboratif / Presentasi)"
          >
            <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
            <span>{sessionMode === 'collaborative' ? 'Bisa Gambar ✏️' : 'Menyimak 🔒'}</span>
          </button>
        ) : (
          <span
            className={`px-2.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 border shadow-2xs ${
              sessionMode === 'collaborative'
                ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                : 'bg-amber-50 border-amber-300 text-amber-800'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
            <span>{sessionMode === 'collaborative' ? 'Bisa Gambar ✏️' : 'Menyimak 🔒'}</span>
          </span>
        )
      )}
    </div>,
    targetEl
  );
};
