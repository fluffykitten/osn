import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { worksheetRealtimeService } from '../../services/worksheetRealtimeService';
import { questionBankService } from '../../services/questionBankService';
import { KaTeXRenderer } from '../../components/common/KaTeXRenderer';
import type {
  Worksheet,
  WorksheetLiveSession,
  LiveKeystrokePayload,
  LaserPointerEvent,
  TeacherLiveComment,
  Question,
} from '../../types/database';
import {
  ArrowLeft,
  Users,
  Copy,
  Check,
  Radio,
  Eye,
  Crosshair,
  MessageSquare,
  Sparkles,
  Award,
  Clock,
  Send,
  X,
  RefreshCw,
  HelpCircle,
  Maximize2,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export const LiveClassroomDashboard: React.FC = () => {
  const { token = '' } = useParams<{ token: string }>();
  const navigate = useNavigate();

  const [worksheet, setWorksheet] = useState<Worksheet | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [sessions, setSessions] = useState<WorksheetLiveSession[]>([]);
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);

  // Live state streams per student
  const [liveTypingMap, setLiveTypingMap] = useState<Record<string, LiveKeystrokePayload>>({});
  const [isLaserEnabled, setIsLaserEnabled] = useState(false);
  const [commentInput, setCommentInput] = useState('');
  const [copiedToken, setCopiedToken] = useState(false);
  const [isSendingComment, setIsSendingComment] = useState(false);

  // Student answer area container ref for calculating laser coordinates
  const studentAnswerAreaRef = useRef<HTMLDivElement | null>(null);

  const cleanToken = token.trim().toUpperCase();

  // 1. Initial Load: Worksheet & Questions
  useEffect(() => {
    const fetchWorksheetAndSessions = async () => {
      // Ambil worksheet berdasarkan token
      const allRes = await questionBankService.getQuestions();
      const allSavedWorksheets = questionBankService.getSavedWorksheets();
      const matched = allSavedWorksheets.find((w) => w.access_token?.toUpperCase() === cleanToken);

      if (matched) {
        setWorksheet(matched);
      } else {
        // Fallback default mock
        setWorksheet({
          id: 999,
          type: 'teacher_assignment',
          title: `Sesi Kelas Live [${cleanToken}]`,
          access_token: cleanToken,
          time_limit_minutes: 90,
          pass_score: 75,
          is_published: true,
        });
      }

      setQuestions(allRes.questions);

      // Ambil sesi murid aktif
      const activeSessions = await worksheetRealtimeService.getActiveSessions(cleanToken);
      setSessions(activeSessions);
      if (activeSessions.length > 0 && !selectedStudentId) {
        setSelectedStudentId(activeSessions[0].student_id);
      }
    };

    fetchWorksheetAndSessions();
  }, [cleanToken]);

  // 2. Realtime Listener: Keystrokes, Laser, Comments
  useEffect(() => {
    if (!cleanToken) return;

    const unsubscribe = worksheetRealtimeService.subscribeToClassroom(cleanToken, {
      onStudentTyping: (payload) => {
        setLiveTypingMap((prev) => ({
          ...prev,
          [payload.student_id]: payload,
        }));

        // Perbarui sesi murid di list jika ada perubahan
        setSessions((prev) => {
          const idx = prev.findIndex((s) => s.student_id === payload.student_id);
          if (idx !== -1) {
            const updated = [...prev];
            updated[idx] = {
              ...updated[idx],
              current_question_index: payload.question_index,
              last_active_at: new Date().toISOString(),
              live_draft: {
                ...updated[idx].live_draft,
                [payload.question_id]: {
                  steps: payload.steps,
                  finalAnswer: payload.finalAnswer,
                },
              },
            };
            return updated;
          } else {
            // Murid baru pertama kali mengetik
            return [
              ...prev,
              {
                worksheet_id: 0,
                access_token: cleanToken,
                student_id: payload.student_id,
                student_name: payload.student_name,
                current_question_index: payload.question_index,
                status: 'active',
                last_active_at: new Date().toISOString(),
                live_draft: {
                  [payload.question_id]: {
                    steps: payload.steps,
                    finalAnswer: payload.finalAnswer,
                  },
                },
              },
            ];
          }
        });
      },
    });

    return () => unsubscribe();
  }, [cleanToken]);

  // Selected student object
  const activeStudent = useMemo(() => {
    return sessions.find((s) => s.student_id === selectedStudentId) || sessions[0] || null;
  }, [sessions, selectedStudentId]);

  const currentQuestion = questions[selectedQuestionIndex] || questions[0];

  // Current student typed answer for this question
  const studentAnswer = useMemo(() => {
    if (!activeStudent) return { steps: '', finalAnswer: '' };
    const fromLiveMap = liveTypingMap[activeStudent.student_id];
    if (fromLiveMap && fromLiveMap.question_id === currentQuestion?.id) {
      return { steps: fromLiveMap.steps, finalAnswer: fromLiveMap.finalAnswer };
    }
    return activeStudent.live_draft?.[currentQuestion?.id] || { steps: '', finalAnswer: '' };
  }, [activeStudent, liveTypingMap, currentQuestion]);

  // Handle Laser movement
  const handleAnswerMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isLaserEnabled || !studentAnswerAreaRef.current || !activeStudent || !currentQuestion) return;

    const rect = studentAnswerAreaRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));

    worksheetRealtimeService.sendTeacherLaser({
      access_token: cleanToken,
      student_id: activeStudent.student_id,
      teacher_id: 'teacher-main',
      question_id: currentQuestion.id,
      x_percent: Number(x.toFixed(1)),
      y_percent: Number(y.toFixed(1)),
      is_laser_active: true,
      timestamp: Date.now(),
    });
  };

  const handleAnswerMouseLeave = () => {
    if (!isLaserEnabled || !activeStudent || !currentQuestion) return;
    worksheetRealtimeService.sendTeacherLaser({
      access_token: cleanToken,
      student_id: activeStudent.student_id,
      teacher_id: 'teacher-main',
      question_id: currentQuestion.id,
      x_percent: 0,
      y_percent: 0,
      is_laser_active: false,
      timestamp: Date.now(),
    });
  };

  // Send Teacher comment
  const handleSendComment = async (textToSend?: string) => {
    const text = (textToSend || commentInput).trim();
    if (!text || !activeStudent || !currentQuestion) return;

    setIsSendingComment(true);
    try {
      await worksheetRealtimeService.sendTeacherComment({
        access_token: cleanToken,
        student_id: activeStudent.student_id,
        teacher_id: 'teacher-main',
        teacher_name: 'Guru Pembina',
        question_id: currentQuestion.id,
        comment_text: text,
      });
      setCommentInput('');
    } catch (e) {
      console.error('Gagal mengirim komentar:', e);
    } finally {
      setIsSendingComment(false);
    }
  };

  const copyTokenToClipboard = () => {
    navigator.clipboard.writeText(cleanToken);
    setCopiedToken(true);
    setTimeout(() => setCopiedToken(false), 2000);
  };

  const quickHints = [
    '💡 Perhatikan koefisien stoikiometri',
    '⚖️ Periksa satuan standar (kJ vs J)',
    '🎯 Langkah sudah benar, lanjutkan!',
    '📐 Terapkan hukum gas ideal PV = nRT',
    '🔍 Cek kembali persamaan Nernst',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/teacher')}
            className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold font-mono">
                <Radio className="w-3 h-3 animate-pulse text-emerald-600" />
                <span>LIVE CLASSROOM MONITOR</span>
              </span>
              <h1 className="text-xl font-black text-slate-900 font-display">
                {worksheet?.title || 'Sesi Live Kolaborasi'}
              </h1>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Pantau aliran ketikan seluruh siswa, arahkan laser pointer, dan sematkan catatan bimbingan secara real-time.
            </p>
          </div>
        </div>

        {/* Big Token Badge with Copy */}
        <div className="flex items-center gap-3">
          <div className="bg-slate-900 text-white px-4 py-2 rounded-xl flex items-center gap-3 shadow-xs">
            <div>
              <span className="text-[10px] text-slate-400 block font-mono uppercase tracking-wider">
                KODE TOKEN SISWA:
              </span>
              <span className="text-lg font-black tracking-widest text-emerald-400 font-mono">
                {cleanToken}
              </span>
            </div>
            <button
              onClick={copyTokenToClipboard}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Salin Token"
            >
              {copiedToken ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          <button
            onClick={async () => {
              const res = await worksheetRealtimeService.getActiveSessions(cleanToken);
              setSessions(res);
            }}
            className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
            title="Muat Ulang Daftar Murid"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Grid: Left (Multi-student Cards) vs Right (Live Student Observation Studio) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column (4 Cols): Multi-student Grid */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-display flex items-center gap-1.5">
              <Users className="w-4 h-4 text-emerald-600" />
              <span>Daftar Siswa Terhubung ({sessions.length})</span>
            </h3>
            <span className="text-[11px] text-slate-500 font-mono">Real-time presence</span>
          </div>

          {sessions.length === 0 ? (
            <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-8 text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-slate-800">Menunggu Siswa Bergabung...</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed max-w-xs mx-auto">
                Bagikan kode token <strong className="font-mono text-emerald-700 font-bold">{cleanToken}</strong> ke siswa agar mereka dapat masuk ke sesi ini.
              </p>
            </div>
          ) : (
            <div className="space-y-2.5 max-h-[75vh] overflow-y-auto pr-1">
              {sessions.map((s) => {
                const isSelected = s.student_id === selectedStudentId;
                const isTypingNow = Boolean(liveTypingMap[s.student_id]);
                const answeredCount = Object.keys(s.live_draft || {}).length;

                return (
                  <div
                    key={s.student_id}
                    onClick={() => setSelectedStudentId(s.student_id)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer relative ${
                      isSelected
                        ? 'bg-emerald-50/50 border-emerald-400 ring-2 ring-emerald-500/20 shadow-xs'
                        : 'bg-white border-slate-200/90 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center font-display">
                          {s.student_name.charAt(0)}
                        </div>
                        <span className="text-xs font-bold text-slate-900">{s.student_name}</span>
                      </div>

                      {isTypingNow ? (
                        <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full font-mono animate-pulse">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                          <span>Mengetik</span>
                        </span>
                      ) : (
                        <span className="text-[10px] text-slate-400 font-mono">Aktif</span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
                      <span>Sedang di Soal #{s.current_question_index + 1}</span>
                      <span className="font-semibold text-emerald-800">
                        {answeredCount}/{questions.length} Dijawab
                      </span>
                    </div>

                    {/* Mini live snippet */}
                    {s.live_draft?.[questions[s.current_question_index]?.id]?.steps && (
                      <p className="text-[11px] text-slate-600 italic line-clamp-1 mt-1.5 bg-slate-50 px-2 py-1 rounded-lg border border-slate-100">
                        "{s.live_draft[questions[s.current_question_index].id].steps.slice(0, 50)}..."
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Right Column (8 Cols): Focused Live Student Observation Studio */}
        <div className="lg:col-span-8 space-y-4">
          {activeStudent ? (
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
              {/* Studio Header */}
              <div className="p-4 sm:p-5 border-b border-slate-200 bg-slate-50/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-2xl bg-emerald-600 text-white font-bold text-sm flex items-center justify-center font-display shadow-2xs">
                    {activeStudent.student_name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-slate-900 font-display">
                        Layar Pengerjaan: {activeStudent.student_name}
                      </h3>
                      <span className="px-2 py-0.2 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-bold font-mono">
                        Live Stream
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 font-mono">
                      ID: {activeStudent.student_id}
                    </span>
                  </div>
                </div>

                {/* Laser Pointer Toggle & Tools */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsLaserEnabled(!isLaserEnabled)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs ${
                      isLaserEnabled
                        ? 'bg-rose-600 text-white ring-2 ring-rose-400/40'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                    }`}
                    title="Arahkan Laser Pointer ke layar siswa"
                  >
                    <Crosshair className={`w-4 h-4 ${isLaserEnabled ? 'animate-spin' : ''}`} />
                    <span>{isLaserEnabled ? 'Laser Aktif (Arahkan Kursor)' : 'Nyalakan Laser'}</span>
                  </button>
                </div>
              </div>

              {/* Question Navigation Bar for Teacher */}
              <div className="px-5 py-3 border-b border-slate-100 bg-white flex items-center gap-2 overflow-x-auto">
                <span className="text-xs font-semibold text-slate-500 shrink-0">Pilih Soal:</span>
                {questions.map((q, idx) => (
                  <button
                    key={q.id}
                    onClick={() => setSelectedQuestionIndex(idx)}
                    className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition-all shrink-0 ${
                      selectedQuestionIndex === idx
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Soal #{idx + 1}
                  </button>
                ))}
              </div>

              {/* Split Body: Left Question & Rubric | Right Live Student Keystrokes */}
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                {/* Left: Question & Teacher Mark Scheme */}
                <div className="p-5 space-y-4 max-h-[60vh] overflow-y-auto">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-mono">
                        {currentQuestion.difficulty}
                      </span>
                      <span className="text-xs font-bold text-slate-700">
                        Topik #{currentQuestion.pillar_number}: {currentQuestion.subtopic}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mb-2 font-display">
                      {currentQuestion.title}
                    </h4>
                    <div className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                      <KaTeXRenderer content={currentQuestion.question_text} />
                    </div>
                  </div>

                  {/* Expected answer & rubric reference for teacher */}
                  {currentQuestion.expected_final_answer && (
                    <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs space-y-1">
                      <span className="font-bold text-emerald-900 block">Kunci Jawaban Akhir:</span>
                      <div className="font-mono font-bold text-emerald-800">
                        <KaTeXRenderer content={currentQuestion.expected_final_answer} />
                      </div>
                    </div>
                  )}

                  {currentQuestion.solution_rubric && (
                    <div className="text-xs space-y-1 text-slate-600">
                      <span className="font-bold text-slate-800 block">Panduan Rubrik Guru:</span>
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-[11px] leading-relaxed">
                        <KaTeXRenderer content={currentQuestion.solution_rubric} />
                      </div>
                    </div>
                  )}
                </div>

                {/* Right: Live Student Screen Area */}
                <div
                  ref={studentAnswerAreaRef}
                  onMouseMove={handleAnswerMouseMove}
                  onMouseLeave={handleAnswerMouseLeave}
                  className={`p-5 space-y-4 max-h-[60vh] overflow-y-auto relative ${
                    isLaserEnabled ? 'cursor-crosshair bg-rose-50/10' : 'bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800 font-display flex items-center gap-1.5">
                      <Eye className="w-4 h-4 text-emerald-600" />
                      <span>Hasil Pengerjaan Siswa (Live Keystrokes)</span>
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      Auto-syncing real-time
                    </span>
                  </div>

                  {/* Student Work Steps */}
                  <div>
                    <label className="text-[11px] font-semibold text-slate-500 block mb-1">
                      Langkah & Perhitungan yang Sedang Ditulis Siswa:
                    </label>
                    <div className="min-h-[160px] p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono text-slate-900 whitespace-pre-wrap leading-relaxed shadow-inner">
                      {studentAnswer.steps ? (
                        studentAnswer.steps
                      ) : (
                        <span className="text-slate-400 italic">
                          (Siswa belum mengetikkan langkah pengerjaan pada nomor ini...)
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Student Final Answer */}
                  <div>
                    <label className="text-[11px] font-semibold text-slate-500 block mb-1">
                      Jawaban Akhir Siswa:
                    </label>
                    <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-bold text-emerald-950">
                      {studentAnswer.finalAnswer ? (
                        studentAnswer.finalAnswer
                      ) : (
                        <span className="text-slate-400 italic font-normal">(Belum ada)</span>
                      )}
                    </div>
                  </div>

                  {/* Live Laser indicator hint */}
                  {isLaserEnabled && (
                    <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-xl text-[11px] text-rose-800 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                      <span>
                        Gerakkan kursor di area ini. Sorot laser akan langsung terlihat di layar {activeStudent.student_name}!
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Studio Footer: Instant Comment / Feedback Box */}
              <div className="p-4 border-t border-slate-200 bg-slate-50/70 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 font-display flex items-center gap-1.5">
                    <MessageSquare className="w-4 h-4 text-sky-600" />
                    <span>Kirim Catatan / Hint Instan ke Layar Siswa:</span>
                  </span>
                  <span className="text-[10px] text-slate-400">
                    Muncul langsung di layar pengerjaan {activeStudent.student_name}
                  </span>
                </div>

                {/* Quick Hint Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {quickHints.map((hint) => (
                    <button
                      key={hint}
                      onClick={() => handleSendComment(hint)}
                      className="px-2.5 py-1 rounded-lg bg-white hover:bg-sky-50 text-slate-700 hover:text-sky-800 border border-slate-200 text-[11px] transition-colors shadow-2xs"
                    >
                      {hint}
                    </button>
                  ))}
                </div>

                {/* Custom Comment Input */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendComment();
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="text"
                    placeholder={`Tulis catatan khusus untuk ${activeStudent.student_name}...`}
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                    className="flex-1 px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500"
                  />
                  <button
                    type="submit"
                    disabled={isSendingComment || !commentInput.trim()}
                    className="px-4 py-2 bg-sky-600 hover:bg-sky-700 disabled:opacity-50 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Kirim</span>
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center text-slate-400 space-y-2">
              <Eye className="w-8 h-8 mx-auto text-slate-300" />
              <h4 className="text-sm font-bold text-slate-700">Pilih Siswa untuk Mulai Memantau</h4>
              <p className="text-xs text-slate-400">
                Klik salah satu kartu siswa di sebelah kiri untuk melihat pengerjaan live mereka.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
