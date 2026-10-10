/**
 * MaterialPdfModal.tsx
 * Modal Interaktif untuk Konfigurasi & Unduh PDF Materi Belajar
 */

import React, { useState } from 'react';
import type { MaterialItem } from '../../data/materialsData';
import type { SmaMaterialItem } from '../../data/smaMaterialsData';
import { materialPdfExportService, type MaterialPdfExportOptions } from '../../services/materialPdfExportService';
import {
  Printer,
  X,
  ExternalLink,
  BookOpen,
  Edit3,
  HelpCircle,
  FileCheck2,
  CheckCircle2,
  Layers,
} from 'lucide-react';

interface MaterialPdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  material: MaterialItem | SmaMaterialItem;
}

export const MaterialPdfModal: React.FC<MaterialPdfModalProps> = ({
  isOpen,
  onClose,
  material,
}) => {
  const [includeYourNotes, setIncludeYourNotes] = useState(true);
  const [includeWorkedExamples, setIncludeWorkedExamples] = useState(true);
  const [includeCheckpoints, setIncludeCheckpoints] = useState(true);

  if (!isOpen || !material) return null;

  const isSma = 'curriculumPhase' in material;
  const isIgcse = material.level === 'IGCSE' || material.level === 'AS' || material.level === 'A2';

  const exportOptions: MaterialPdfExportOptions = {
    includeYourNotesMargin: includeYourNotes,
    includeWorkedExamples: includeWorkedExamples,
    includeCheckpoints: includeCheckpoints,
  };

  const handlePrintPdf = () => {
    materialPdfExportService.exportMaterialToPrint(material, exportOptions);
  };

  const handleOpenNewTab = () => {
    const html = materialPdfExportService.generateMaterialHtml(material, exportOptions);
    const win = window.open('', '_blank');
    if (win) {
      win.document.open();
      win.document.write(html);
      win.document.close();
    }
  };

  const totalPrereq = material.prerequisites?.length || 0;
  const totalCore = material.core_concepts?.length || 0;
  const totalExamples = material.worked_examples?.length || 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER MODAL */}
        <div className="px-6 py-5 bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Unduh Modul Materi (PDF)</h2>
              <p className="text-xs text-slate-300 line-clamp-1">
                {material.title}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            title="Tutup dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* BODY MODAL */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-800">
          {/* Card Info Materi Aktif */}
          <div className="p-4 bg-gradient-to-br from-slate-50 via-sky-50/40 to-indigo-50/30 border border-slate-200/80 rounded-2xl space-y-2.5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span
                  className={`px-2.5 py-0.5 text-[11px] font-bold rounded-md font-mono ${
                    isIgcse
                      ? 'bg-purple-100 text-purple-800 border border-purple-200'
                      : isSma
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                      : 'bg-sky-100 text-sky-800 border border-sky-200'
                  }`}
                >
                  {isIgcse
                    ? `IGCSE #${material.topic_number}`
                    : isSma
                    ? `SMA #${material.topic_number} · ${(material as SmaMaterialItem).curriculumPhase}`
                    : `OSN #${material.topic_number} · ${material.level}`}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  {material.category}
                </span>
              </div>
              <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-slate-200/70 text-slate-700">
                Standar A4
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
              {material.title}
            </h3>

            <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-600 pt-1 font-mono">
              <span className="inline-flex items-center gap-1.5 bg-white/80 px-2.5 py-1 rounded-lg border border-slate-200/60 shadow-2xs">
                <span className="text-slate-400">Prasyarat:</span>
                <strong className="text-slate-800">{totalPrereq} Konsep</strong>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/80 px-2.5 py-1 rounded-lg border border-slate-200/60 shadow-2xs">
                <span className="text-slate-400">Konsep Inti:</span>
                <strong className="text-slate-800">{totalCore} Bagian</strong>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/80 px-2.5 py-1 rounded-lg border border-slate-200/60 shadow-2xs">
                <span className="text-slate-400">Contoh Soal:</span>
                <strong className="text-slate-800">{totalExamples} Butir</strong>
              </span>
            </div>
          </div>

          {/* Format & Kelengkapan Dokumen */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <FileCheck2 className="w-4 h-4 text-sky-600" />
              <span>Format & Kelengkapan Dokumen</span>
            </label>

            <div className="space-y-2">
              {/* Toggle 1: Kolom Catatan Siswa */}
              <div
                onClick={() => setIncludeYourNotes(!includeYourNotes)}
                className={`py-3 px-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                  includeYourNotes
                    ? 'border-sky-500 bg-sky-50/70 ring-2 ring-sky-500/20 shadow-2xs'
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  {includeYourNotes ? (
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border border-slate-300 shrink-0" />
                  )}
                  <div className="flex items-center gap-2">
                    <Edit3 className="w-3.5 h-3.5 text-sky-600" />
                    <span className="text-xs font-bold text-slate-900">
                      Kolom Catatan Siswa (Your Notes)
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-semibold text-slate-400">
                  {includeYourNotes ? 'Disertakan' : 'Dilewati'}
                </span>
              </div>

              {/* Toggle 2: Worked Examples */}
              <div
                onClick={() => setIncludeWorkedExamples(!includeWorkedExamples)}
                className={`py-3 px-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                  includeWorkedExamples
                    ? 'border-indigo-500 bg-indigo-50/70 ring-2 ring-indigo-500/20 shadow-2xs'
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  {includeWorkedExamples ? (
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border border-slate-300 shrink-0" />
                  )}
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                    <span className="text-xs font-bold text-slate-900">
                      Contoh Soal & Pembahasan (Worked Examples)
                    </span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-bold">
                  {includeWorkedExamples ? 'Rekomendasi' : 'Dilewati'}
                </span>
              </div>

              {/* Toggle 3: Checkpoint Quizzes */}
              <div
                onClick={() => setIncludeCheckpoints(!includeCheckpoints)}
                className={`py-3 px-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                  includeCheckpoints
                    ? 'border-purple-500 bg-purple-50/70 ring-2 ring-purple-500/20 shadow-2xs'
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  {includeCheckpoints ? (
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border border-slate-300 shrink-0" />
                  )}
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-3.5 h-3.5 text-purple-600" />
                    <span className="text-xs font-bold text-slate-900">
                      Kuis Uji Konseptual (Checkpoint Quizzes)
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-semibold text-slate-400">
                  {includeCheckpoints ? 'Disertakan' : 'Dilewati'}
                </span>
              </div>
            </div>
          </div>

          {/* Standar Dokumen Box */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-xs font-mono">
              <div>
                <span className="text-slate-400 block text-[10px]">TOTAL MATERI</span>
                <span className="text-slate-900 font-bold font-mono text-sm">
                  {totalCore} Konsep
                </span>
              </div>
              <div className="w-px h-8 bg-slate-200" />
              <div>
                <span className="text-slate-400 block text-[10px]">TATA LETAK</span>
                <span className="text-slate-900 font-bold font-mono text-sm flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5 text-sky-600" />
                  <span>2 Kolom Lembar Belajar</span>
                </span>
              </div>
              <div className="w-px h-8 bg-slate-200" />
              <div>
                <span className="text-slate-400 block text-[10px]">CONTOH SOAL</span>
                <span className="text-slate-900 font-bold font-mono text-sm">
                  {includeWorkedExamples ? totalExamples : 0} Butir
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-mono font-bold">
              <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                KaTeX Jernih
              </span>
              <span className="px-2 py-0.5 rounded bg-sky-100 text-sky-800">
                A4 Siap Cetak
              </span>
            </div>
          </div>
        </div>

        {/* FOOTER ACTIONS */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleOpenNewTab}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 rounded-xl transition-all cursor-pointer"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Buka di Tab Baru</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold transition-all cursor-pointer"
            >
              Batal
            </button>
            <button
              type="button"
              onClick={handlePrintPdf}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak / Simpan PDF (A4)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

