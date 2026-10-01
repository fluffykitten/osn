import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  X,
  Send,
  Lightbulb,
  FlaskConical,
  Scale,
  AlertTriangle,
  Copy,
  Check,
  RotateCcw,
  Bot,
  User as UserIcon,
  Atom,
} from 'lucide-react';
import { KaTeXRenderer } from '../common/KaTeXRenderer';
import { callGemini, isGeminiKeyConfigured } from '../../lib/geminiClient';
import {
  evaluateQueryGuardrails,
  TUTOR_SYSTEM_INSTRUCTION,
  cleanAndFormatTutorResponse,
} from '../../lib/aiTutorGuardrails';

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  isGuardrailWarning?: boolean;
}

interface MaterialAiTutorModalProps {
  isOpen: boolean;
  onClose: () => void;
  conceptTag?: string;
  conceptTitle: string;
  conceptSummary?: string;
  conceptContent?: string;
  materialTitle?: string;
  topicNumber?: number;
}

export const MaterialAiTutorModal: React.FC<MaterialAiTutorModalProps> = ({
  isOpen,
  onClose,
  conceptTag,
  conceptTitle,
  conceptSummary = '',
  conceptContent = '',
  materialTitle = 'Materi Sains Kimia',
  topicNumber,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Quick Prompt Pills
  const promptPills = [
    {
      icon: Lightbulb,
      label: 'Analogi Sederhana',
      prompt: `Tolong jelaskan konsep "${conceptTitle}" menggunakan analogi kehidupan sehari-hari yang mudah dipahami dan visual.`,
    },
    {
      icon: FlaskConical,
      label: 'Contoh Eksperimen Nyata',
      prompt: `Berikan contoh fenomena nyata atau eksperimen laboratorium kimia yang menerapkan konsep "${conceptTitle}".`,
    },
    {
      icon: Scale,
      label: 'Turunkan Rumus (KaTeX)',
      prompt: `Bagaimana asal-usul atau penurunan matematis dari rumus utama pada konsep "${conceptTitle}"? Tuliskan secara runtut dengan KaTeX.`,
    },
    {
      icon: AlertTriangle,
      label: 'Jebakan Soal OSN',
      prompt: `Apa saja miskonsepsi umum atau jebakan yang sering muncul pada soal seleksi Olimpiade Kimia terkait "${conceptTitle}"?`,
    },
  ];

  // Inisialisasi sapaan AI saat pertama kali dibuka
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: 'welcome',
          sender: 'ai',
          text: `Halo, Calon Juara OSN! Saya **AI Chemistry Tutor** untuk materi **${materialTitle}**.\n\nSaat ini kita sedang mendalami konsep **${conceptTitle}**:\n> *${conceptSummary}*\n\nAda aspek yang ingin Anda perdalam? Gunakan opsi saran cepat di atas atau tanyakan apapun seputar konsep ini! 🧪✨`,
          timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }
  }, [isOpen, conceptTitle, conceptSummary, materialTitle]);

  // Auto scroll to bottom
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSendPrompt = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userQuery = textToSend.trim();
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: userQuery,
      timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');

    // =========================================================================
    // LAYER 1 GUARDRAIL CHECK: K3 Chemical Safety & Topic Scope Verification
    // =========================================================================
    const guardrailCheck = evaluateQueryGuardrails(userQuery, materialTitle, conceptTitle);
    if (!guardrailCheck.passed && guardrailCheck.refusalMessage) {
      const guardrailMsg: ChatMessage = {
        id: `ai-guardrail-${Date.now()}`,
        sender: 'ai',
        text: guardrailCheck.refusalMessage,
        timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
        isGuardrailWarning: true,
      };
      setMessages((prev) => [...prev, guardrailMsg]);
      return;
    }

    setIsLoading(true);

    try {
      let aiResponseText = '';

      if (isGeminiKeyConfigured()) {
        const userPrompt = `Materi Pokok: ${materialTitle}
Konsep yang Dibahas: ${conceptTitle}
Ringkasan Konsep: ${conceptSummary}
Konteks Pembahasan: ${conceptContent.slice(0, 1500)}

Pertanyaan/Instruksi Siswa:
${userQuery}

Instruksi Tambahan:
- Berikan penjelasan mendalam dengan format Markdown.
- JANGAN merespons dalam format JSON mentah.
- Tuliskan seluruh rumus kimia dan persamaan reaksi menggunakan format KaTeX ($...$ untuk inline, $$...$$ untuk display equation).`;

        // LAYER 2 GUARDRAIL: Strict systemInstruction & responseMimeType: 'text/plain'
        const res = await callGemini(userPrompt, {
          systemInstruction: TUTOR_SYSTEM_INSTRUCTION,
          responseMimeType: 'text/plain',
          temperature: 0.35,
          thinkingBudget: 0,
        });

        // Layer 3: Resilient formatter (converts any JSON accidentally returned into rich KaTeX Markdown)
        aiResponseText = cleanAndFormatTutorResponse(res.text);
      } else {
        // Fallback edukatif offline terstruktur dengan KaTeX
        await new Promise((resolve) => setTimeout(resolve, 700));
        aiResponseText = generateFallbackTutorResponse(conceptTitle, userQuery);
      }

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: aiResponseText,
        timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        {
          id: `ai-err-${Date.now()}`,
          sender: 'ai',
          text: `Maaf, terjadi kendala saat menghubungkan ke AI Tutor (${err?.message || 'Koneksi terputus'}).\n\nSebagai panduan cepat, ingat prinsip kunci konsep ini:\n> **${conceptSummary}**`,
          timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 'reset-welcome',
        sender: 'ai',
        text: `Obrolan telah dibersihkan. Silakan ajukan pertanyaan lain seputar konsep **${conceptTitle}**! 🧪`,
        timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-2 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-[#F8FAFC] text-slate-900 rounded-2xl sm:rounded-3xl max-w-2xl w-full h-[94vh] sm:h-[84vh] shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in zoom-in-95">
        
        {/* Header (Palet Papan Tulis / Slate Theme: #4A5A6A - #596A7A dengan Aksen Ivory #FFFFF0) */}
        <div className="px-4 sm:px-5 py-3.5 sm:py-4 bg-gradient-to-r from-[#4A5A6A] via-[#596A7A] to-[#425262] text-[#FFFFF0] border-b border-[#B0C4DE]/30 flex items-center justify-between shrink-0 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FFFFF0]/15 border border-[#B0C4DE]/30 flex items-center justify-center text-[#FFFFF0] shadow-sm">
              <Atom className="w-5 h-5 animate-spin-slow text-[#B0C4DE]" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-extrabold tracking-tight font-display text-[#FFFFF0]">
                Tanya AI Tutor Kimia
              </h3>
              <p className="text-[11px] text-[#FFFFF0]/80 truncate max-w-xs sm:max-w-md">
                Fokus Konsep: <b className="text-[#FFFFF0]">{conceptTitle}</b>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handleClearChat}
              className="p-2 text-[#FFFFF0]/80 hover:text-[#FFFFF0] hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
              title="Bersihkan riwayat tanya jawab"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-[#FFFFF0]/80 hover:text-[#FFFFF0] hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
              title="Tutup (ESC)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200 overflow-x-auto scrollbar-none shrink-0">
          <div className="flex items-center gap-2 min-w-max">
            <span className="text-[10px] uppercase font-bold text-slate-500 font-mono flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-emerald-600" />
              Saran Cepat:
            </span>
            {promptPills.map((pill, idx) => {
              const Icon = pill.icon;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSendPrompt(pill.prompt)}
                  disabled={isLoading}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 border border-slate-200 hover:border-emerald-300 rounded-xl text-xs font-semibold shadow-2xs transition-all cursor-pointer disabled:opacity-50 active:scale-95"
                >
                  <Icon className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{pill.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Chat Messages Body (Light Canvas Palette) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-[#F1F5F9]/70">
          {messages.map((msg) => {
            const isUser = msg.sender === 'user';
            return (
              <div
                key={msg.id}
                className={`flex gap-3 text-xs sm:text-sm leading-relaxed ${
                  isUser ? 'justify-end' : 'justify-start'
                }`}
              >
                {!isUser && (
                  <div
                    className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 mt-0.5 shadow-2xs ${
                      msg.isGuardrailWarning
                        ? 'bg-amber-500 text-white'
                        : 'bg-[#596A7A] text-[#FFFFF0]'
                    }`}
                  >
                    {msg.isGuardrailWarning ? (
                      <AlertTriangle className="w-4 h-4" />
                    ) : (
                      <Bot className="w-4 h-4" />
                    )}
                  </div>
                )}

                <div
                  className={`max-w-[85%] sm:max-w-[80%] rounded-2xl p-4 sm:p-5 shadow-xs space-y-1.5 relative group ${
                    isUser
                      ? 'bg-[#596A7A] text-[#FFFFF0] rounded-tr-xs shadow-sm font-medium'
                      : msg.isGuardrailWarning
                      ? 'bg-amber-50 text-amber-950 border border-amber-300 rounded-tl-xs'
                      : 'bg-white text-slate-900 border border-slate-200/90 rounded-tl-xs shadow-sm'
                  }`}
                >
                  <div className="break-words">
                    <KaTeXRenderer
                      content={msg.text}
                      className={isUser ? 'text-[#FFFFF0]' : 'text-slate-900'}
                    />
                  </div>

                  <div
                    className={`flex items-center justify-between gap-2 pt-1.5 border-t ${
                      isUser
                        ? 'border-white/15 text-[#FFFFF0]/70'
                        : 'border-slate-100 text-slate-400'
                    } text-[10px]`}
                  >
                    <span>{msg.timestamp}</span>
                    {!isUser && (
                      <button
                        type="button"
                        onClick={() => handleCopyText(msg.id, msg.text)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity p-1 text-slate-400 hover:text-slate-700 rounded cursor-pointer"
                        title="Salin penjelasan"
                      >
                        {copiedId === msg.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {isUser && (
                  <div className="w-7 h-7 rounded-xl bg-slate-300 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                    <UserIcon className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}

          {isLoading && (
            <div className="flex gap-3 text-xs text-slate-500">
              <div className="w-7 h-7 rounded-xl bg-[#596A7A] text-[#FFFFF0] flex items-center justify-center shrink-0 shadow-2xs">
                <Bot className="w-4 h-4 animate-spin" />
              </div>
              <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex items-center gap-2.5 text-slate-800 font-semibold">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span>Tutor sedang berpikir...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Footer (Crisp Light Palette) */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendPrompt(inputText);
          }}
          className="p-3 sm:p-4 bg-white border-t border-slate-200 shrink-0"
        >
          <div className="flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={`Tanyakan apa saja seputar ${conceptTitle}...`}
              className="flex-1 px-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#596A7A]/25 focus:border-[#596A7A]"
            />
            <button
              type="submit"
              disabled={isLoading || !inputText.trim()}
              className="px-5 py-2.5 bg-[#596A7A] hover:bg-[#4A5A6A] text-[#FFFFF0] text-xs sm:text-sm font-bold rounded-2xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50 active:scale-95 shrink-0"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">Kirim</span>
            </button>
          </div>
          <div className="flex items-center justify-end text-[11px] text-slate-400 mt-1.5 px-1">
            <span>Tekan Enter untuk mengirim</span>
          </div>
        </form>
      </div>
    </div>
  );
};

// Generator balasan cerdas offline jika belum ada API key
function generateFallbackTutorResponse(concept: string, query: string): string {
  const lower = query.toLowerCase();

  if (lower.includes('analogi') || lower.includes('sehari-hari')) {
    return `### 💡 Analogi Edukatif: ${concept}\n\nBayangkan konsep **${concept}** seperti sebuah **dapur restoran bintang lima berstandar tinggi**:\n\n- **Bahan Baku & Reaktan:** Seperti bumbu dan bahan mentah yang ditimbang presisi dalam resep (stoikiometri molar $\\ce{A + B -> C}$).\n- **Metode Ilmiah:** Koki tidak menebak-nebak rasa; mereka membuat hipotesis takaran, menguji dalam skala kecil (sampel eksperimen), mengamati perubahan tekstur/aroma, lalu mengevaluasi hasilnya secara terukur.\n- **Keselamatan Kerja (K3):** Dapur kimia memiliki bahaya nyata (api, asam, uap panas). Sama seperti koki memakai sarung tangan anti-panas dan apron, kimiawan wajib menggunakan jas lab, kacamata pelindung (*safety goggles*), dan bekerja di lemari asam (*fume hood*).\n\nKimia adalah sains eksperimental: pemahaman makroskopik berakar dari interaksi submikroskopik antar partikel!`;
  }

  if (lower.includes('rumus') || lower.includes('turunkan') || lower.includes('matematis') || lower.includes('katex')) {
    return `### 📐 Tinjauan Matematis & Notasi KaTeX: ${concept}\n\n1. **Persamaan Fundamental Energi Sistem:**\n   Pada suhu dan tekanan konstan, arah spontanitas ditentukan oleh Energi Bebas Gibbs:\n   $$\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$$\n\n2. **Keterkaitan dengan Tetapan Kesetimbangan ($K$):**\n   Kondisi kesetimbangan termodinamika ($\Delta G = 0$) menghasilkan relasi fundamental:\n   $$\\Delta G^\\circ = -RT \\ln K$$\n\n3. **Ketergantungan Suhu (Persamaan van 't Hoff):**\n   Mengkombinasikan kedua persamaan di atas:\n   $$\\ln K = -\\frac{\\Delta H^\\circ}{R}\\left(\\frac{1}{T}\\right) + \\frac{\\Delta S^\\circ}{R}$$\n\nBentuk ini membentuk persamaan garis linear $y = mx + c$ dengan gradien $-\\frac{\\Delta H^\\circ}{R}$.`;
  }

  if (lower.includes('jebakan') || lower.includes('miskonsepsi') || lower.includes('osn')) {
    return `### ⚠️ Jebakan & Miskonsepsi Khas Seleksi OSN: ${concept}\n\n1. **Ketidaksamaan Satuan Energi:**\n   Banyak peserta OSN keliru menjumlahkan $\\Delta H^\\circ$ (satuan $\\text{kJ/mol}$) langsung dengan $T\\Delta S^\\circ$ (satuan $\\text{J/mol}$). Jangan lupa bagi $1000$ agar keduanya setara dalam $\\text{kJ}$!\n\n2. **Aktivitas Fasa Padat dan Cair Murni:**\n   Zat berfasa padat murni ($\\text{s}$) dan cairan murni ($\\text{l}$) memiliki aktivitas $a = 1$, sehingga **tidak dimasukkan** ke dalam rumus kuosien $Q$ maupun tetapan kesetimbangan $K_c$ / $K_p$.\n\n3. **Faktor Pengubah Tetapan Kesetimbangan ($K$):**\n   Tetapan kesetimbangan $K$ **HANYA** berubah jika suhu ($T$) berubah. Penambahan katalis atau perubahan volume/tekanan hanya menggeser posisi kesetimbangan, bukan mengubah nilai $K$.`;
  }

  return `### 🧪 Penjelasan Konseptual: ${concept}\n\nKonsep **${concept}** merupakan landasan esensial dalam silabus seleksi Olimpiade Sains Nasional (OSN) Kimia.\n\n1. **Prinsip Dasar:** Menghubungkan interaksi mikroskopik partikel atomik dengan fenomena makroskopis yang terukur di laboratorium.\n2. **Analisis Kualitatif:** Identifikasi fasa pereaksi ($\\text{s, l, g, aq}$), perubahan bilangan oksidasi, serta stoikiometri reaksi.\n3. **Strategi Ujian:** Tuliskan selalu hipotesis awal, hukum dasar yang relevan, dan periksa kesesuaian satuan internasional (SI) sebelum melakukan perhitungan numerik.`;
}
