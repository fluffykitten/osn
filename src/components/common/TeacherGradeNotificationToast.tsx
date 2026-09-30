import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, X, MessageSquare, ArrowRight, Award } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { getSupabaseClient } from '../../lib/supabaseClient';

export interface TeacherGradeEventDetail {
  submissionId?: string;
  studentId: string;
  teacherId?: string;
  teacherName: string;
  questionTitle: string;
  score: number;
  maxScore: number;
  teacherFeedback?: string;
  gradedAt?: string;
}

export const TeacherGradeNotificationToast: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [notification, setNotification] = useState<TeacherGradeEventDetail | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const showNotification = (detail: TeacherGradeEventDetail) => {
    setNotification(detail);
    setIsVisible(true);

    // Subtle audio chime via Web Audio API (graceful, no external mp3 needed)
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContext) {
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
        osc.frequency.setValueAtTime(880, ctx.currentTime + 0.12); // A5
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);
        osc.start();
        osc.stop(ctx.currentTime + 0.45);
      }
    } catch {
      // Audio playback blocked by browser policy, ignore safely
    }
  };

  useEffect(() => {
    // 1. Dengarkan event lokal window (in-app realtime dispatch)
    const handleGradePublished = (e: any) => {
      const detail = e.detail as TeacherGradeEventDetail;
      if (!detail) return;

      // Jika user sedang login, pastikan notifikasi hanya untuk siswa yang bersangkutan
      if (user?.id && detail.studentId && detail.studentId !== user.id && detail.studentId !== user.email) {
        return;
      }
      showNotification(detail);
    };

    window.addEventListener('osn_teacher_grade_published', handleGradePublished);

    // 2. Dengarkan Supabase Realtime broadcast jika user terautentikasi
    let channel: any = null;
    if (user?.id) {
      const supabase = getSupabaseClient();
      if (supabase) {
        channel = supabase
          .channel(`room:student:${user.id}`)
          .on('broadcast', { event: 'teacher_grade_published' }, (payload: any) => {
            if (payload?.payload) {
              showNotification(payload.payload);
            }
          })
          .subscribe();
      }
    }

    return () => {
      window.removeEventListener('osn_teacher_grade_published', handleGradePublished);
      if (channel) {
        channel.unsubscribe();
      }
    };
  }, [user?.id, user?.email]);

  // Auto-dismiss setelah 12 detik
  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 12000);
    return () => clearTimeout(timer);
  }, [isVisible, notification]);

  if (!isVisible || !notification) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 max-w-md w-full animate-in slide-in-from-bottom-5 duration-300 pointer-events-auto">
      <div className="bg-[#FFFFF0] border-2 border-[#B0C4DE] rounded-2xl shadow-xl p-4 sm:p-5 space-y-3 relative overflow-hidden">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#708090] via-[#B0C4DE] to-[#708090]" />

        {/* Header */}
        <div className="flex items-start justify-between gap-3 pt-1">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center shrink-0 shadow-2xs">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#2D3748] font-display">
                Lembar Kerja Selesai Dinilai! 🎉
              </h4>
              <p className="text-[11px] text-[#708090]">
                Dinilai oleh: <strong className="text-[#2D3748]">{notification.teacherName || 'Guru Pembina'}</strong>
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="p-1 text-[#708090] hover:text-[#2D3748] rounded-lg transition-colors cursor-pointer"
            title="Tutup Notifikasi"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Task & Score Card */}
        <div className="bg-[#F0F8FF] border border-[#B0C4DE]/60 rounded-xl p-3 space-y-2">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-bold text-[#2D3748] truncate max-w-[240px]">
              {notification.questionTitle || 'Lembar Kerja Kimia'}
            </span>
            <span className="px-2 py-0.5 rounded-lg bg-[#FFF2CC] border border-[#FFE599] text-[#806000] font-mono font-bold text-xs shrink-0">
              {notification.score} / {notification.maxScore || 10} Poin
            </span>
          </div>

          {/* Feedback snippet */}
          {notification.teacherFeedback && (
            <div className="text-[11px] text-[#2D3748] bg-white/80 p-2 rounded-lg border border-[#B0C4DE]/40 italic flex items-start gap-1.5 leading-relaxed">
              <MessageSquare className="w-3 h-3 text-[#708090] shrink-0 mt-0.5" />
              <span className="line-clamp-2">"{notification.teacherFeedback}"</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-2 pt-1">
          <button
            onClick={() => setIsVisible(false)}
            className="px-3 py-1.5 text-xs text-[#708090] hover:text-[#2D3748] font-semibold transition cursor-pointer"
          >
            Nanti Saja
          </button>
          <button
            onClick={() => {
              setIsVisible(false);
              navigate('/worksheet');
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#708090] hover:bg-[#5D6D7D] text-[#FFFFF0] text-xs font-bold rounded-xl transition shadow-xs cursor-pointer"
          >
            <span>Buka Lembar Kerja</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
