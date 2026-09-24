import React, { useState, useEffect } from 'react';
import { Award, Flame, Medal, Sparkles, TrendingUp, Users, RefreshCw } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { getSupabaseClient } from '../../lib/supabaseClient';
import { getLocalGamificationState } from '../../lib/gamification';

interface LeaderboardUser {
  rank: number;
  id: string;
  name: string;
  school: string;
  xp: number;
  streak: number;
  level: number;
  isSelf: boolean;
}

export const Leaderboard: React.FC = () => {
  const { user, profile } = useAuth();
  const current = getLocalGamificationState();

  const [leaderboard, setLeaderboard] = useState<LeaderboardUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRealLeaderboard = async () => {
    setIsLoading(true);
    const supabase = getSupabaseClient();
    let loadedUsers: any[] = [];

    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('id, email, full_name, school_name, xp, current_streak, level, role')
          .in('role', ['student', 'siswa'])
          .order('xp', { ascending: false })
          .limit(30);

        if (!error && data && data.length > 0) {
          loadedUsers = data;
        }
      } catch (err) {
        console.warn('Gagal memuat leaderboard dari cloud:', err);
      }
    }

    // Format rankings
    const mapped: LeaderboardUser[] = loadedUsers.map((u, idx) => {
      const isSelf = Boolean(
        (user?.id && u.id === user.id) ||
        (user?.email && u.email?.toLowerCase() === user.email.toLowerCase())
      );
      return {
        rank: idx + 1,
        id: u.id,
        name: u.full_name || 'Peserta OSN',
        school: u.school_name || 'SMA Mitra',
        xp: Number(u.xp) || 0,
        streak: Number(u.current_streak) || 0,
        level: Number(u.level) || 1,
        isSelf,
      };
    });

    // Jika user login adalah siswa dan belum terdaftar di query (misal baru dibuat atau offline)
    const selfAlreadyInList = mapped.some((m) => m.isSelf);
    if (!selfAlreadyInList && user) {
      const selfUser: LeaderboardUser = {
        rank: mapped.length + 1,
        id: user.id,
        name: profile?.full_name || user.email?.split('@')[0] || 'Anda',
        school: profile?.school_name || 'Sekolah Anda',
        xp: profile?.xp ?? current.xp,
        streak: profile?.current_streak ?? current.streak,
        level: profile?.level ?? current.level,
        isSelf: true,
      };
      mapped.push(selfUser);
      // Re-sort berdasarkan XP
      mapped.sort((a, b) => b.xp - a.xp);
      mapped.forEach((u, i) => {
        u.rank = i + 1;
      });
    }

    setLeaderboard(mapped);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRealLeaderboard();
  }, [user?.id, profile?.xp]);

  const top1 = leaderboard[0];
  const top2 = leaderboard[1];
  const top3 = leaderboard[2];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 font-sans">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold rounded-full">
          <Award className="w-3.5 h-3.5" />
          <span>Papan Peringkat Prestasi Siswa OSN Kimia</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
          Top Olympian Kimia Indonesia
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
          Peringkat dihitung secara real-time dari akumulasi XP ketepatan penalaran soal dan konsistensi streak latihan.
        </p>
      </div>

      {isLoading ? (
        <div className="py-16 text-center text-slate-500 bg-white rounded-3xl border border-slate-200 shadow-2xs">
          <div className="inline-block w-8 h-8 border-2 border-slate-900 border-t-transparent rounded-full animate-spin mb-2" />
          <div className="text-xs font-semibold">Memuat peringkat siswa riil...</div>
        </div>
      ) : leaderboard.length === 0 ? (
        <div className="py-12 text-center text-slate-500 bg-white rounded-3xl border border-slate-200 shadow-2xs space-y-2">
          <Users className="w-8 h-8 text-slate-400 mx-auto" />
          <p className="font-semibold text-slate-700 text-sm">Belum ada siswa yang terdaftar di papan peringkat.</p>
          <p className="text-xs text-slate-400">Kerjakan soal latihan untuk menjadi peringkat pertama!</p>
        </div>
      ) : (
        <>
          {/* Top 3 Podium Cards jika ada minimal 2 peserta */}
          {leaderboard.length >= 2 && (
            <div className="grid grid-cols-3 gap-3 pt-4 items-end">
              {/* Rank 2 */}
              {top2 ? (
                <div className="bg-white border border-slate-200 rounded-2xl p-4 text-center space-y-2 shadow-xs">
                  <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 font-bold mx-auto flex items-center justify-center text-sm border-2 border-slate-300">
                    🥈 2
                  </div>
                  <div className="font-bold text-xs text-slate-800 truncate">{top2.name}</div>
                  <div className="text-[10px] text-slate-500 truncate">{top2.school}</div>
                  <div className="text-xs font-mono font-bold text-emerald-700">{top2.xp} XP</div>
                </div>
              ) : (
                <div />
              )}

              {/* Rank 1 */}
              {top1 && (
                <div className="bg-gradient-to-b from-amber-50 to-white border-2 border-amber-300 rounded-2xl p-5 text-center space-y-2 shadow-md -translate-y-2">
                  <div className="w-12 h-12 rounded-full bg-amber-400 text-white font-bold mx-auto flex items-center justify-center text-base shadow-sm">
                    🥇 1
                  </div>
                  <div className="font-extrabold text-sm text-slate-900 truncate">{top1.name}</div>
                  <div className="text-[11px] text-slate-500 truncate">{top1.school}</div>
                  <div className="text-sm font-mono font-bold text-amber-700">{top1.xp} XP</div>
                </div>
              )}

              {/* Rank 3 */}
              {top3 ? (
                <div className="bg-white border border-slate-200 rounded-2xl p-4 text-center space-y-2 shadow-xs">
                  <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-800 font-bold mx-auto flex items-center justify-center text-sm border-2 border-amber-200">
                    🥉 3
                  </div>
                  <div className="font-bold text-xs text-slate-800 truncate">{top3.name}</div>
                  <div className="text-[10px] text-slate-500 truncate">{top3.school}</div>
                  <div className="text-xs font-mono font-bold text-emerald-700">{top3.xp} XP</div>
                </div>
              ) : (
                <div />
              )}
            </div>
          )}

          {/* Full Leaderboard Table */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs divide-y divide-slate-100">
            {leaderboard.map((userItem) => (
              <div
                key={userItem.id}
                className={`p-4 flex items-center justify-between gap-3 text-xs transition-colors ${
                  userItem.isSelf ? 'bg-emerald-50/70 font-semibold' : 'hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${
                      userItem.rank === 1
                        ? 'bg-amber-400 text-white shadow-2xs'
                        : userItem.rank === 2
                        ? 'bg-slate-300 text-slate-800'
                        : userItem.rank === 3
                        ? 'bg-amber-200 text-amber-900'
                        : 'bg-slate-100 text-slate-600 font-mono'
                    }`}
                  >
                    {userItem.rank}
                  </span>

                  <div>
                    <div className="font-bold text-slate-900 flex items-center gap-1.5">
                      <span>{userItem.name}</span>
                      {userItem.isSelf && (
                        <span className="px-1.5 py-0.2 bg-emerald-600 text-white text-[9px] rounded uppercase font-bold">
                          Anda
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-slate-500">{userItem.school}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-right font-mono">
                  <div className="flex items-center gap-1 text-amber-700">
                    <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>{userItem.streak}d</span>
                  </div>
                  <div className="font-bold text-slate-900 min-w-[70px]">{userItem.xp} XP</div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
