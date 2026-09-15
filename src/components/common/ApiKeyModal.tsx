import React, { useState, useEffect } from 'react';
import { Key, Check, X, Shield, Eye, EyeOff, Sparkles, ExternalLink, Cpu, Layers } from 'lucide-react';
import {
  getGeminiApiKey,
  getGeminiApiKeys,
  getGeminiModel,
  setGeminiApiKey,
  isGeminiKeyConfigured,
  hasMultipleApiKeys,
} from '../../lib/geminiClient';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onKeySaved?: () => void;
}

export const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ isOpen, onClose, onKeySaved }) => {
  const [apiKey, setApiKey] = useState('');
  const [showKey, setShowKey] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const isConfigured = isGeminiKeyConfigured();
  const allKeys = getGeminiApiKeys();
  const isMultiKey = hasMultipleApiKeys();
  const activeModel = getGeminiModel();

  useEffect(() => {
    if (isOpen) {
      setApiKey(getGeminiApiKey());
      setSavedSuccess(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    setGeminiApiKey(apiKey.trim());
    setSavedSuccess(true);
    if (onKeySaved) onKeySaved();
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 900);
  };

  const handleClear = () => {
    setGeminiApiKey('');
    setApiKey('');
    if (onKeySaved) onKeySaved();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-md w-full overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-sky-50 to-blue-50 border-b border-sky-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-500 text-white flex items-center justify-center shadow-xs">
              <Key className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Konfigurasi Gemini API (.env.local)</h3>
              <p className="text-[11px] text-slate-500">Arsitektur Multi-Key & Model Rotasi Otomatis</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Environment Status Banner */}
          <div className="p-3 bg-sky-50/70 border border-sky-200/80 rounded-xl space-y-2 text-xs text-sky-900">
            <div className="flex items-center justify-between">
              <span className="font-bold flex items-center gap-1.5 text-sky-950">
                <Shield className="w-4 h-4 text-sky-600" />
                <span>Status .env.local:</span>
              </span>
              {isConfigured ? (
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 border border-emerald-200 rounded-md font-bold font-mono text-[10px] flex items-center gap-1">
                  <Check className="w-3 h-3 text-emerald-600" />
                  <span>{allKeys.length} KUNCI TERDETEKSI</span>
                </span>
              ) : (
                <span className="px-2 py-0.5 bg-amber-100 text-amber-800 border border-amber-200 rounded-md font-bold text-[10px]">
                  BELUM DIISI
                </span>
              )}
            </div>

            <div className="space-y-1 text-[11px] text-slate-600 pt-1 border-t border-sky-200/50">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <Cpu className="w-3.5 h-3.5 text-sky-600" />
                  <span>Model Aktif:</span>
                </span>
                <span className="font-mono font-semibold text-slate-800">{activeModel}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5 text-sky-600" />
                  <span>Mode Rotasi:</span>
                </span>
                <span className="font-semibold text-slate-800">
                  {isMultiKey ? 'Dual-Key Turbo (Auto-Failover)' : 'Single Key Mode'}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700">Override Kunci API Browser (Opsional):</label>
              <a
                href="https://aistudio.google.com/app/apikey"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-sky-600 hover:text-sky-700 hover:underline flex items-center gap-1 font-semibold"
              >
                <span>Dapatkan API Key</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="relative">
              <input
                type={showKey ? 'text' : 'password'}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="AIzaSy... atau biarkan mengikuti .env.local"
                className="w-full pl-3 pr-10 py-2.5 text-xs font-mono text-slate-900 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
              />
              <button
                type="button"
                onClick={() => setShowKey(!showKey)}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
              >
                {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-500 space-y-1">
            <p className="font-semibold text-slate-700">💡 Pola Sama dengan testmaker:</p>
            <p>
              Kunci disimpan di file <code>.env.local</code> dengan variabel:
            </p>
            <code className="block bg-white p-2 rounded border border-slate-200 text-[10px] text-slate-800 font-mono">
              VITE_GEMINI_API_KEY=AIzaSy...<br />
              VITE_GEMINI_API_KEY_2=AIzaSy...<br />
              VITE_GEMINI_MODEL={activeModel}
            </code>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            type="button"
            onClick={handleClear}
            className="text-xs text-rose-600 hover:text-rose-700 hover:underline font-semibold"
            title="Hapus override localStorage dan gunakan .env.local"
          >
            Reset ke .env.local
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3.5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200/60 rounded-xl transition-colors"
            >
              Tutup
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white text-xs font-semibold rounded-xl transition-all shadow-xs active:scale-95"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>Tersimpan!</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                  <span>Simpan Kunci</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
