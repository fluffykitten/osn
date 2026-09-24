import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Layers,
  Radio,
  Search,
  Eye,
  Activity,
} from 'lucide-react';
import { questionBankService } from '../../services/questionBankService';
import { getSupabaseClient } from '../../lib/supabaseClient';
import type { Worksheet } from '../../types/database';

export const AdminWorksheetManagement: React.FC = () => {
  const [subTab, setSubTab] = useState<'worksheets' | 'live' | 'submissions'>('worksheets');
  const [worksheets, setWorksheets] = useState<Worksheet[]>([]);
  const [liveSessions, setLiveSessions] = useState<any[]>([]);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const loadData = async () => {
    setIsLoading(true);
    try {
      // 1. All worksheets
      const wsList = await questionBankService.getAllWorksheets();
      setWorksheets(wsList);

      // 2. Live sessions from Supabase & local registry
      const supabase = getSupabaseClient();
      let liveList: any[] = [];
      if (supabase) {
        try {
          const { data } = await supabase
            .from('worksheet_live_sessions')
            .select('*')
            .order('last_active_at', { ascending: false })
            .limit(30);
          if (data) liveList = data;
        } catch {}
      }

      if (liveList.length === 0) {
        // Mock demo live sessions
        liveList = [
          {
            id: 'live-1',
            access_token: 'LIVE-OSN-01',
            student_name: 'Ahmad Fauzan',
            student_id: 'student-demo-uuid',
            current_question_index: 2,
            status: 'active',
            last_active_at: new Date().toISOString(),
            total_score: 18,
            max_score: 25,
          },
          {
            id: 'live-2',
            access_token: 'LIVE-OSN-01',
            student_name: 'Kevin Sanjaya Pratama',
            student_id: 'student-demo-2',
            current_question_index: 3,
            status: 'active',
            last_active_at: new Date(Date.now() - 60000).toISOString(),
            total_score: 22,
            max_score: 25,
          },
        ];
      }
      setLiveSessions(liveList);

      // 3. Submissions feed
      let subs: any[] = [];
      try {
        const saved = localStorage.getItem('osn_student_submissions');
        if (saved) {
          subs = JSON.parse(saved);
        }
      } catch {}

      if (subs.length === 0) {
        subs = [
          {
            id: 'sub-1',
            questionTitle: 'Topologi Simpul Radial & Aturan Slater Z_eff',
            pillarNumber: 1,
            subtopic: 'Struktur Atom',
            scorePercentage: 92,
            studentFinalAnswer: 'Z_eff = 6.85; Simpul radial = 2',
            gradedAt: new Date(Date.now() - 3600000 * 2).toISOString(),
          },
          {
            id: 'sub-2',
            questionTitle: 'Dinamika Kesetimbangan Fasa & Kaedah Fasa Gibbs',
            pillarNumber: 5,
            subtopic: 'Kesetimbangan Kimia',
            scorePercentage: 85,
            studentFinalAnswer: 'F = 2; Derajat kebebasan = 1',
            gradedAt: new Date(Date.now() - 3600000 * 5).toISOString(),
          },
        ];
      }
      setSubmissions(subs);
    } catch (e) {
      console.warn('Gagal memuat data worksheet/live:', e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const filteredWorksheets = worksheets.filter((w) =>
    w.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    w.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    w.access_token?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 text-[10px] font-bold font-mono tracking-wider">
              CENTRAL EXAM OVERSIGHT
            </span>
            <span className="text-xs text-slate-500 font-medium">Pengawasan Ujian & Aktivitas Lintas Guru</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Pengawasan Worksheet & Live Classroom
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Observasi seluruh lembar kerja buatan guru, radar ujian berlangsung, dan riwayat aktivitas siswa.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center bg-slate-100 border border-slate-200 rounded-lg p-1 text-xs">
          <button
            onClick={() => setSubTab('worksheets')}
            className={`px-3.5 py-1.5 rounded-md font-medium transition cursor-pointer flex items-center gap-1.5 ${
              subTab === 'worksheets'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Layers size={13} />
            <span>Semua Worksheet ({worksheets.length})</span>
          </button>

          <button
            onClick={() => setSubTab('live')}
            className={`px-3.5 py-1.5 rounded-md font-medium transition cursor-pointer flex items-center gap-1.5 ${
              subTab === 'live'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Radio size={13} className="text-rose-500" />
            <span>Live Radar ({liveSessions.length})</span>
          </button>

          <button
            onClick={() => setSubTab('submissions')}
            className={`px-3.5 py-1.5 rounded-md font-medium transition cursor-pointer flex items-center gap-1.5 ${
              subTab === 'submissions'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Activity size={13} />
            <span>Aktivitas Siswa ({submissions.length})</span>
          </button>
        </div>
      </div>

      {/* SUB-TAB 1: SEMUA WORKSHEET GURU */}
      {subTab === 'worksheets' && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari judul worksheet, deskripsi, atau token..."
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-slate-400 transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {isLoading ? (
              <div className="col-span-full py-16 text-center text-slate-500">
                <div className="inline-block w-6 h-6 border-2 border-slate-900 border-t-transparent rounded-full animate-spin mb-2" />
                <div className="text-xs">Memuat paket worksheet...</div>
              </div>
            ) : filteredWorksheets.length === 0 ? (
              <div className="col-span-full py-16 text-center text-slate-500 text-xs">
                Tidak ada lembar kerja yang cocok.
              </div>
            ) : (
              filteredWorksheets.map((ws) => (
                <div
                  key={ws.id}
                  className="p-5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xs transition flex flex-col justify-between space-y-4 shadow-xs"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                        {ws.access_token ? `TOKEN: ${ws.access_token}` : 'NO TOKEN'}
                      </span>
                      {ws.is_live_monitored && (
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200 flex items-center gap-1 font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                          <span>LIVE</span>
                        </span>
                      )}
                    </div>

                    <h3 className="font-semibold text-slate-900 text-base leading-snug line-clamp-2">{ws.title}</h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {ws.description || 'Paket latihan soal kimia berbatas waktu.'}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span>{ws.item_count || (ws as any).selected_question_ids?.length || 5} Butir Soal</span>
                      <span>{ws.time_limit_minutes || 60} Menit</span>
                      <span className="text-emerald-700 font-bold">Pass: {ws.pass_score || 75}%</span>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      {ws.access_token && (
                        <Link
                          to={`/teacher/live/${ws.access_token}`}
                          className="flex-1 py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium transition flex items-center justify-center gap-1.5 shadow-xs"
                        >
                          <Radio size={12} className="text-rose-400" />
                          <span>Pantau Ujian</span>
                        </Link>
                      )}

                      <Link
                        to={`/worksheet/standalone/${ws.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition flex items-center gap-1"
                        title="Tinjau Lembar Kerja (Tab Baru)"
                      >
                        <Eye size={13} />
                        <span>Pratinjau</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* SUB-TAB 2: LIVE RADAR MULTI-KELAS */}
      {subTab === 'live' && (
        <div className="rounded-xl bg-white border border-slate-200 overflow-hidden shadow-xs">
          <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
              </span>
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                Radar Pengerjaan Siswa Secara Real-Time
              </span>
            </div>
            <button onClick={loadData} className="text-xs text-slate-600 hover:text-slate-900 font-medium cursor-pointer">
              Segarkan Sesi
            </button>
          </div>

          <div className="divide-y divide-slate-100">
            {liveSessions.length === 0 ? (
              <div className="py-16 text-center text-slate-500 text-xs">
                Tidak ada sesi live yang aktif saat ini.
              </div>
            ) : (
              liveSessions.map((session) => (
                <div key={session.id} className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 hover:bg-slate-50/70 transition">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                      {(session.student_name || 'S').charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-xs">{session.student_name}</div>
                      <div className="text-[10px] text-slate-500 font-mono">
                        Token Ujian: <span className="text-slate-800 font-bold">{session.access_token}</span> • Soal #{session.current_question_index + 1}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right font-mono text-xs">
                      <span className="text-emerald-700 font-bold">{session.total_score || 0} Poin</span>
                      <span className="text-slate-400 block text-[10px]">
                        Aktif: {new Date(session.last_active_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>

                    <Link
                      to={`/teacher/live/${session.access_token}`}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 text-xs font-medium transition flex items-center gap-1.5"
                    >
                      <Eye size={12} />
                      <span>Spectate</span>
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* SUB-TAB 3: LOG AKTIVITAS & SUBMISSION SISWA */}
      {subTab === 'submissions' && (
        <div className="rounded-xl bg-white border border-slate-200 overflow-hidden shadow-xs">
          <div className="p-4 bg-slate-50 border-b border-slate-200">
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
              Log Riwayat Pengumpulan Lembar Kerja Siswa
            </span>
          </div>

          <div className="divide-y divide-slate-100 text-xs">
            {submissions.map((sub, idx) => (
              <div key={idx} className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 hover:bg-slate-50/70 transition">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-mono text-[10px] font-semibold">
                      Pilar {sub.pillarNumber || 1}
                    </span>
                    <span className="font-semibold text-slate-900">{sub.questionTitle}</span>
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Subtopik: {sub.subtopic} • Jawaban: <span className="font-mono text-slate-700">{sub.studentFinalAnswer || '-'}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className={`font-mono text-xs font-bold px-2 py-0.5 rounded border ${
                      (sub.scorePercentage || 0) >= 75
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : 'bg-amber-50 text-amber-700 border-amber-200'
                    }`}
                  >
                    {sub.scorePercentage}%
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {sub.gradedAt ? new Date(sub.gradedAt).toLocaleDateString('id-ID') : 'Baru saja'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
