import React from 'react';
import { Award, Flame, Medal, Sparkles, TrendingUp } from 'lucide-react';
import { getLocalGamificationState } from '../../lib/gamification';

export const Leaderboard: React.FC = () => {
  const current = getLocalGamificationState();

  const MOCK_LEADERBOARD = [
    { rank: 1, name: 'Ahmad Fauzi (Pelatnas IChO)', school: 'SMA Labschool Jakarta', xp: 2850, streak: 28, level: 12 },
    { rank: 2, name: 'Nathania Kimberly', school: 'SMAK 1 PENABUR Jakarta', xp: 2420, streak: 21, level: 10 },
    { rank: 3, name: 'M. Raditya Pratama', school: 'SMAN 3 Semarang', xp: 1980, streak: 14, level: 8 },
    { rank: 4, name: 'Anda (Siswa OSN)', school: 'SMA Unggulan', xp: current.xp, streak: current.streak, level: current.level, isSelf: true },
    { rank: 5, name: 'Clarissa Valerie', school: 'SMA Sutomo 1 Medan', xp: 290, streak: 3, level: 2 },
    { rank: 6, name: 'Bima Satria', school: 'SMAN 1 Denpasar', xp: 210, streak: 2, level: 1 },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold rounded-full">
          <Award className="w-3.5 h-3.5" />
          <span>Papan Peringkat Mingguan OSN Kimia</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
          Top Olympian Kimia Indonesia
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
          Perolehan XP dihitung dari ketepatan penalaran langkah soal dan konsistensi daily streak latihan.
        </p>
      </div>

      {/* Top 3 Podium Cards */}
      <div className="grid grid-cols-3 gap-3 pt-4 items-end">
        {/* Rank 2 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 text-center space-y-2 shadow-xs">
          <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 font-bold mx-auto flex items-center justify-center text-sm border-2 border-slate-300">
            🥈 2
          </div>
          <div className="font-bold text-xs text-slate-800 truncate">{MOCK_LEADERBOARD[1].name}</div>
          <div className="text-[10px] text-slate-500 truncate">{MOCK_LEADERBOARD[1].school}</div>
          <div className="text-xs font-mono font-bold text-emerald-700">{MOCK_LEADERBOARD[1].xp} XP</div>
        </div>

        {/* Rank 1 */}
        <div className="bg-gradient-to-b from-amber-50 to-white border-2 border-amber-300 rounded-2xl p-5 text-center space-y-2 shadow-md -translate-y-2">
          <div className="w-12 h-12 rounded-full bg-amber-400 text-white font-bold mx-auto flex items-center justify-center text-base shadow-sm">
            🥇 1
          </div>
          <div className="font-extrabold text-sm text-slate-900 truncate">{MOCK_LEADERBOARD[0].name}</div>
          <div className="text-[11px] text-slate-500 truncate">{MOCK_LEADERBOARD[0].school}</div>
          <div className="text-sm font-mono font-bold text-amber-700">{MOCK_LEADERBOARD[0].xp} XP</div>
        </div>

        {/* Rank 3 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 text-center space-y-2 shadow-xs">
          <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-800 font-bold mx-auto flex items-center justify-center text-sm border-2 border-amber-200">
            🥉 3
          </div>
          <div className="font-bold text-xs text-slate-800 truncate">{MOCK_LEADERBOARD[2].name}</div>
          <div className="text-[10px] text-slate-500 truncate">{MOCK_LEADERBOARD[2].school}</div>
          <div className="text-xs font-mono font-bold text-emerald-700">{MOCK_LEADERBOARD[2].xp} XP</div>
        </div>
      </div>

      {/* Full Leaderboard Table */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs divide-y divide-slate-100">
        {MOCK_LEADERBOARD.map((user) => (
          <div
            key={user.rank}
            className={`p-4 flex items-center justify-between gap-3 text-xs transition-colors ${
              user.isSelf ? 'bg-emerald-50/60 font-semibold' : 'hover:bg-slate-50'
            }`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${
                  user.rank === 1
                    ? 'bg-amber-400 text-white'
                    : user.rank === 2
                    ? 'bg-slate-300 text-slate-800'
                    : user.rank === 3
                    ? 'bg-amber-200 text-amber-900'
                    : 'bg-slate-100 text-slate-600 font-mono'
                }`}
              >
                {user.rank}
              </span>

              <div>
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <span>{user.name}</span>
                  {user.isSelf && (
                    <span className="px-1.5 py-0.2 bg-emerald-600 text-white text-[9px] rounded uppercase font-bold">
                      Anda
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-slate-500">{user.school}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-right font-mono">
              <div className="flex items-center gap-1 text-amber-700">
                <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>{user.streak}d</span>
              </div>
              <div className="font-bold text-slate-900 min-w-[70px]">{user.xp} XP</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
