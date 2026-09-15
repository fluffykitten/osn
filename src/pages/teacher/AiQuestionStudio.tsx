import React, { useState } from 'react';
import { PILLARS_DATA } from '../../data/syllabusData';
import { KaTeXRenderer } from '../../components/common/KaTeXRenderer';
import { getQuestionScaffold } from '../../services/scaffoldService';
import {
  Sparkles,
  UploadCloud,
  FileText,
  CheckCircle2,
  Table,
  Plus,
  ArrowRight,
  Filter,
  Check,
  Edit3,
} from 'lucide-react';
import { questionBankService } from '../../services/questionBankService';
import type { QuestionDifficulty, GenerationVariant } from '../../types/database';

export const AiQuestionStudio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'variant' | 'pdf'>('variant');

  // Variant Generator State
  const [selectedPillar, setSelectedPillar] = useState(3);
  const [selectedDifficulty, setSelectedDifficulty] = useState<QuestionDifficulty>('OSK');
  const [variantType, setVariantType] = useState<GenerationVariant>('twin_parallel');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedDraft, setGeneratedDraft] = useState<any | null>(null);

  // PDF Extraction State
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [isExtracting, setIsExtracting] = useState(false);
  const [extractionProgress, setExtractionProgress] = useState(0);
  const [extractedStagingList, setExtractedStagingList] = useState<any[]>([]);
  const [savedCount, setSavedCount] = useState<number | null>(null);

  const handleGenerateVariant = () => {
    setIsGenerating(true);
    setGeneratedDraft(null);

    setTimeout(() => {
      setIsGenerating(false);
      const questionText = `Suatu bejana baja tertutup bervolume $12.5\\text{ L}$ pada suhu $27.0^\\circ\\text{C}$ dan tekanan $3.00\\text{ atm}$ diisi campuran gas etana ($\\ce{C2H6}$) dan butana ($\\ce{C4H10}$).

Campuran tersebut direaksikan dengan oksigen berlebih sesuai persamaan:
$$\\ce{2C2H6(g) + 7O2(g) -> 4CO2(g) + 6H2O(l)}$$
$$\\ce{2C4H10(g) + 13O2(g) -> 8CO2(g) + 10H2O(l)}$$

Gas $\\ce{CO2}$ dialirkan ke dalam air kapur ($\\ce{Ca(OH)2}$) berlebih sehingga menghasilkan endapan kalsium karbonat ($\\ce{CaCO3}$, $M_r = 100.09\\text{ g/mol}$) seberat $450.4\\text{ g}$.
Hitung fraksi mol gas etana dalam campuran awal!`;

      const scaffold = `1. Diketahui & Data Percobaan:
• Suhu sistem ($T$): ....
• Volume bejana ($V$): ....
• Tekanan total ($P$): ....
• Massa endapan yang terbentuk: ....

2. Persamaan Reaksi Pembakaran & Endapan:
• Reaksi pembakaran gas etana: ....
• Reaksi pembakaran gas butana: ....
• Reaksi pembentukan endapan kalsium karbonat: ....
• Rasio koefisien stoikiometri reaksi: ....

3. Perhitungan Mol & Analisis SPLDV:
• Persamaan gas ideal mol campuran ($n_{\\text{total}} = \\frac{PV}{RT}$): ....
• Perhitungan mol $\\ce{CO2}$ dari massa endapan: ....
• Pemodelan variabel ($x = \\text{mol etana}, y = \\text{mol butana}$): ....
• Persamaan 1 (mol campuran gas awal): ....
• Persamaan 2 (stoikiometri mol $\\ce{CO2}$): ....
• Langkah eliminasi/substitusi nilai $x$ dan $y$:
  ....

4. Jawaban Akhir & Kesimpulan:
• Fraksi mol gas etana ($X = \\frac{x}{x + y}$): ....
• Kesimpulan dan verifikasi kelogisan fraksi ($0 < X < 1$): ....`;

      setGeneratedDraft({
        title: 'Stoikiometri Campuran Gas Butana & Etana (Varian Paralel)',
        pillar_number: selectedPillar,
        difficulty: selectedDifficulty,
        subtopic: 'Stoikiometri Gas & Pembakaran Hidrokarbon',
        question_text: questionText,
        solution_rubric: `1. Mol gas total: $n = \\frac{PV}{RT} = \\frac{3.00 \\times 12.5}{0.08206 \\times 300.15} = 1.523\\text{ mol}$.
2. Mol CO2 terbentuk: $n = \\frac{450.4}{100.09} = 4.50\\text{ mol}$.
3. SPLDV:
   $x + y = 1.523$
   $2x + 4y = 4.50$
   $2y = 1.454 \\implies y = 0.727\\text{ mol}$ (butana)
   $x = 0.796\\text{ mol}$ (etana)
4. Fraksi mol etana: $X = \\frac{0.796}{1.523} = 0.522$.`,
        expected_final_answer: 'X_C2H6 = 0.522',
        solution_framework_template: scaffold,
        tags: ['stoikiometri', 'gas-ideal', 'twin-variant'],
      });
    }, 1500);
  };

  const handleSimulatePdfUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setPdfFile(file);
    setIsExtracting(true);
    setExtractionProgress(20);

    // Simulate Client-Side Chunker & Gemini Extraction
    setTimeout(() => setExtractionProgress(50), 600);
    setTimeout(() => setExtractionProgress(85), 1200);
    setTimeout(() => {
      setIsExtracting(false);
      setExtractionProgress(100);

      const q1 = {
        pillar_number: 1,
        difficulty: 'OSK' as const,
        subtopic: 'Konfigurasi Elektron & Bilangan Kuantum',
        title: 'Penentuan Set Bilangan Kuantum Ion Kompleks Fe3+',
        question_text: `Tuliskan konfigurasi elektron lengkap untuk atom besi ($_{26}\\ce{Fe}$) pada keadaan dasar, serta tentukan set bilangan kuantum ($n, l, m_l, m_s$) yang diperkenankan untuk elektron terakhir pada ion $\\ce{Fe^3+}$.`,
      };

      const q2 = {
        pillar_number: 4,
        difficulty: 'OSP' as const,
        subtopic: 'Siklus Born-Haber & Energi Kisi',
        title: 'Perhitungan Energi Kisi Magnesium Klorida',
        question_text: `Gunakan data termokimia berikut untuk menghitung energi kisi ($\\Delta H_{\\text{kisi}}$) kristal $\\ce{MgCl2(s)}$:
- $\\Delta H_f^\\circ(\\ce{MgCl2(s)}) = -641.6\\text{ kJ/mol}$
- $\\Delta H_{\\text{sub}}(\\ce{Mg}) = +147.1\\text{ kJ/mol}$
- $IE_1 + IE_2(\\ce{Mg}) = +2188.4\\text{ kJ/mol}$
- $\\Delta H_{\\text{dis}}(\\ce{Cl2}) = +242.6\\text{ kJ/mol}$
- $EA_1(\\ce{Cl}) = -349.0\\text{ kJ/mol}$`,
      };

      setExtractedStagingList([
        {
          id: 1,
          selected: true,
          original_number: 1,
          ...q1,
          rubric: `1. Konfigurasi $_{26}\\ce{Fe}$: $[\\ce{Ar}]\\, 3d^6\\, 4s^2$.
2. Ion $\\ce{Fe^3+}$ kehilangan 2 elektron dari 4s dan 1 elektron dari 3d: $[\\ce{Ar}]\\, 3d^5$.
3. Set bilangan kuantum elektron terakhir orbital 3d: $n = 3, l = 2, m_l = +2, m_s = +1/2$.`,
          solution_framework_template: getQuestionScaffold(q1),
          tags: ['struktur-atom', 'kuantum', 'aufbau'],
        },
        {
          id: 2,
          selected: true,
          original_number: 2,
          ...q2,
          rubric: `Siklus Born-Haber:
$\\Delta H_f^\\circ = \\Delta H_{\\text{sub}} + IE_1 + IE_2 + \\Delta H_{\\text{dis}} + 2(EA_1) + \\Delta H_{\\text{kisi}}$
$-641.6 = 147.1 + 2188.4 + 242.6 - 698.0 + \\Delta H_{\\text{kisi}}$
$-641.6 = 1880.1 + \\Delta H_{\\text{kisi}}$
$\\Delta H_{\\text{kisi}} = -2521.7\\text{ kJ/mol}$.`,
          solution_framework_template: getQuestionScaffold(q2),
          tags: ['born-haber', 'energi-kisi', 'termodinamika'],
        },
      ]);
    }, 1800);
  };

  const [isSavingDraft, setIsSavingDraft] = useState(false);

  const handleSaveGeneratedDraft = async () => {
    if (!generatedDraft) return;
    setIsSavingDraft(true);
    try {
      await questionBankService.createQuestion({
        pillar_number: generatedDraft.pillar_number,
        difficulty: generatedDraft.difficulty,
        subtopic: generatedDraft.subtopic,
        title: generatedDraft.title,
        question_text: generatedDraft.question_text,
        solution_rubric: generatedDraft.solution_rubric,
        expected_final_answer: generatedDraft.expected_final_answer,
        solution_framework_template: generatedDraft.solution_framework_template,
        generation_type: 'twin_parallel',
        tags: generatedDraft.tags || ['ai-generated', 'twin-variant'],
        is_verified: true,
      });
      alert('Soal beserta metadata Kerangka 4 Langkah berhasil disimpan ke Question Bank!');
    } catch (e) {
      console.error('Gagal menyimpan ke Question Bank:', e);
    } finally {
      setIsSavingDraft(false);
    }
  };

  const handleBulkSave = async () => {
    const selectedItems = extractedStagingList.filter((item) => item.selected);
    for (const item of selectedItems) {
      await questionBankService.createQuestion({
        pillar_number: item.pillar_number,
        difficulty: item.difficulty,
        subtopic: item.subtopic,
        title: item.title,
        question_text: item.question_text,
        solution_rubric: item.rubric,
        expected_final_answer: item.expected_final_answer || 'Terverifikasi Tim Juri',
        solution_framework_template: item.solution_framework_template,
        generation_type: 'pdf_extracted',
        tags: item.tags || ['pdf-extracted', 'osn'],
        is_verified: true,
      });
    }
    setSavedCount(selectedItems.length);
    setTimeout(() => setSavedCount(null), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 bg-sky-100 text-sky-800 text-[10px] font-bold rounded uppercase font-mono border border-sky-200">
              AI Question Studio
            </span>
            <span className="text-xs text-slate-500 font-medium">Gemini 2.5 Flash Multimodal & Scaffolding Engine</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
            AI Ingestion & Question Generator
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl">
            Ekstrak butir soal naskah PDF resmi OSK/OSP/OSN ke format KaTeX murni, serta sintesis otomatis metadata <strong>Kerangka 4 Langkah OSN</strong> yang dipersonalisasi sesuai jenis soal.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 text-xs font-semibold">
        <button
          onClick={() => setActiveTab('variant')}
          className={`flex items-center gap-2 px-5 py-3 border-b-2 transition-all ${
            activeTab === 'variant'
              ? 'border-sky-500 text-sky-700 font-bold bg-sky-50/50'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Sparkles className="w-4 h-4 text-sky-500" />
          <span>Generate Varian Soal & Scaffolding AI</span>
        </button>

        <button
          onClick={() => setActiveTab('pdf')}
          className={`flex items-center gap-2 px-5 py-3 border-b-2 transition-all ${
            activeTab === 'pdf'
              ? 'border-sky-500 text-sky-700 font-bold bg-sky-50/50'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <UploadCloud className="w-4 h-4 text-sky-500" />
          <span>Ekstraksi Naskah Soal PDF (OCR & Metadata)</span>
        </button>
      </div>

      {/* TAB 1: Variant Generator */}
      {activeTab === 'variant' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Settings */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-slate-900 font-display">
              Konfigurasi Generator Varian
            </h3>

            <div>
              <label className="text-xs font-semibold text-slate-600 block mb-1">Target Topik Silabus:</label>
              <select
                value={selectedPillar}
                onChange={(e) => setSelectedPillar(Number(e.target.value))}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
              >
                {PILLARS_DATA.map((p) => (
                  <option key={p.id} value={p.pillar_number}>
                    Topik #{p.pillar_number}: {p.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600 block mb-1">Tingkat Kesulitan:</label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value as any)}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
              >
                <option value="OSK">Tingkat OSK (Kabupaten/Kota)</option>
                <option value="OSP">Tingkat OSP (Provinsi)</option>
                <option value="OSN">Tingkat OSN (Nasional)</option>
                <option value="IChO">Tingkat IChO (Internasional)</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600 block mb-1">Model Varian AI:</label>
              <div className="space-y-2 text-xs">
                <label className="flex items-start gap-2 p-2.5 rounded-lg border border-slate-200 cursor-pointer hover:bg-sky-50/50 transition-colors">
                  <input
                    type="radio"
                    name="variantType"
                    checked={variantType === 'twin_parallel'}
                    onChange={() => setVariantType('twin_parallel')}
                    className="mt-0.5 text-sky-600 focus:ring-sky-500"
                  />
                  <div>
                    <span className="font-bold text-slate-900 block">Twin Parallel (Kembar)</span>
                    <span className="text-slate-500 text-[11px]">Konsep sama, variasi angka atau senyawa reaksi berbeda.</span>
                  </div>
                </label>

                <label className="flex items-start gap-2 p-2.5 rounded-lg border border-slate-200 cursor-pointer hover:bg-sky-50/50 transition-colors">
                  <input
                    type="radio"
                    name="variantType"
                    checked={variantType === 'scaffolding'}
                    onChange={() => setVariantType('scaffolding')}
                    className="mt-0.5 text-sky-600 focus:ring-sky-500"
                  />
                  <div>
                    <span className="font-bold text-slate-900 block">Scaffolding (Bertingkat)</span>
                    <span className="text-slate-500 text-[11px]">Dipecah menjadi sub-soal bertahap (a, b, c) untuk memandu penalaran.</span>
                  </div>
                </label>

                <label className="flex items-start gap-2 p-2.5 rounded-lg border border-slate-200 cursor-pointer hover:bg-sky-50/50 transition-colors">
                  <input
                    type="radio"
                    name="variantType"
                    checked={variantType === 'challenging_extension'}
                    onChange={() => setVariantType('challenging_extension')}
                    className="mt-0.5 text-sky-600 focus:ring-sky-500"
                  />
                  <div>
                    <span className="font-bold text-slate-900 block">Challenging Extension</span>
                    <span className="text-slate-500 text-[11px]">Ekstensi mendalam dengan parameter variabel non-standar.</span>
                  </div>
                </label>
              </div>
            </div>

            <button
              onClick={handleGenerateVariant}
              disabled={isGenerating}
              className="w-full py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Gemini 2.5 Flash Generating...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Hasilkan Draf Soal & Scaffolding</span>
                </>
              )}
            </button>
          </div>

          {/* Generated Result Preview */}
          <div className="lg:col-span-2 space-y-4">
            {generatedDraft ? (
              <div className="bg-white p-6 rounded-2xl border border-sky-200 shadow-xs space-y-5 animate-in fade-in">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-sky-100 text-sky-800 text-[10px] font-bold rounded font-mono border border-sky-200">
                      Draf Varian Terbentuk
                    </span>
                    <span className="text-xs font-bold text-slate-800">{generatedDraft.title}</span>
                  </div>
                  <span className="text-xs text-sky-700 font-bold px-2 py-0.5 bg-sky-50 border border-sky-200 rounded">{generatedDraft.difficulty}</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="font-bold text-slate-800">Teks Soal:</div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl leading-relaxed">
                    <KaTeXRenderer content={generatedDraft.question_text} />
                  </div>
                </div>

                {/* Scaffolding Metadata Preview & Edit */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sky-900">🪄 Kerangka 4 Langkah OSN (Metadata Scaffolding):</span>
                      <span className="text-[10px] text-sky-600 font-medium">Bimbingan siswa saat tombol ditekan</span>
                    </div>
                  </div>
                  <textarea
                    value={generatedDraft.solution_framework_template}
                    onChange={(e) =>
                      setGeneratedDraft({ ...generatedDraft, solution_framework_template: e.target.value })
                    }
                    rows={8}
                    className="w-full p-3 font-mono text-xs bg-sky-50/40 border border-sky-200 rounded-xl text-slate-800 focus:bg-white focus:ring-1 focus:ring-sky-500 focus:border-sky-500 resize-y leading-relaxed"
                  />
                </div>

                <div className="space-y-2 text-xs">
                  <div className="font-bold text-slate-800">Rubrik & Kunci Solusi:</div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl leading-relaxed font-mono text-[11px]">
                    <KaTeXRenderer content={generatedDraft.solution_rubric} />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <span className="text-xs text-slate-500 font-mono">
                    Jawaban Akhir: {generatedDraft.expected_final_answer}
                  </span>
                  <button
                    onClick={handleSaveGeneratedDraft}
                    disabled={isSavingDraft}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-sky-600 hover:bg-sky-700 disabled:opacity-50 text-white font-semibold text-xs rounded-lg transition-colors shadow-2xs"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>{isSavingDraft ? 'Menyimpan...' : 'Simpan ke Question Bank'}</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="h-full min-h-[320px] bg-slate-50/60 border border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center p-8 text-center text-slate-400">
                <Sparkles className="w-8 h-8 text-sky-300 mb-2" />
                <h4 className="text-sm font-bold text-slate-700">Belum Ada Soal yang Dihasilkan</h4>
                <p className="text-xs text-slate-500 max-w-sm mt-1">
                  Pilih konfigurasi topik dan model varian di sebelah kiri, lalu klik tombol Hasilkan Draf Soal.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: Multimodal PDF Extraction */}
      {activeTab === 'pdf' && (
        <div className="space-y-6">
          {/* Upload Dropzone */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-slate-300 hover:border-sky-400 rounded-xl p-8 text-center transition-colors bg-slate-50/50">
              <UploadCloud className="w-10 h-10 text-sky-500 mb-3" />
              <h3 className="text-sm font-bold text-slate-900">
                Unggah Berkas Naskah Soal PDF Ujian (Maks. 20 MB)
              </h3>
              <p className="text-xs text-slate-500 max-w-md mt-1 mb-4">
                Sistem mengadopsi teknik <em>Client-Side Chunker</em> dari testmaker: memotong PDF naskah otomatis per 3–5 halaman sebelum dikirim ke Gemini multimodal untuk diekstrak bersama scaffolding metadatanya.
              </p>

              <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold rounded-lg transition-all shadow-2xs">
                <FileText className="w-4 h-4" />
                <span>Pilih Berkas PDF Naskah</span>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handleSimulatePdfUpload}
                  className="hidden"
                />
              </label>

              {pdfFile && (
                <div className="mt-3 text-xs font-mono text-sky-700 font-semibold">
                  Berkas terpilih: {pdfFile.name} ({(pdfFile.size / 1024 / 1024).toFixed(2)} MB)
                </div>
              )}
            </div>

            {/* Progress Bar */}
            {isExtracting && (
              <div className="p-4 bg-sky-50 border border-sky-200 rounded-xl space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-sky-900">
                  <span>Memproses slicing chunk & ekstraksi OCR Gemini 2.5 Flash + Auto-Scaffolding...</span>
                  <span className="font-mono">{extractionProgress}%</span>
                </div>
                <div className="w-full bg-sky-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-sky-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${extractionProgress}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Staging Review Table */}
          {extractedStagingList.length > 0 && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4 animate-in fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-display">
                    Interactive Review Table (Staging Area)
                  </h3>
                  <p className="text-xs text-slate-500">
                    Tinjau formula KaTeX dan metadata Kerangka 4 Langkah hasil ekstraksi sebelum melakukan bulk import ke Question Bank utama.
                  </p>
                </div>

                <button
                  onClick={handleBulkSave}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors"
                >
                  <Check className="w-4 h-4" />
                  <span>Bulk Import Terpilih ({extractedStagingList.filter((i) => i.selected).length} Soal)</span>
                </button>
              </div>

              {savedCount !== null && (
                <div className="p-3 bg-sky-50 border border-sky-200 text-sky-800 text-xs rounded-lg font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  <span>Berhasil menyimpan {savedCount} butir soal baru beserta metadata Kerangka 4 Langkah ke Bank Soal!</span>
                </div>
              )}

              {/* Table List */}
              <div className="space-y-4">
                {extractedStagingList.map((item) => (
                  <div key={item.id} className="p-4 rounded-xl border border-slate-200 space-y-3 bg-slate-50/40">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <input
                          type="checkbox"
                          checked={item.selected}
                          onChange={(e) => {
                            const checked = e.target.checked;
                            setExtractedStagingList((prev) =>
                              prev.map((i) => (i.id === item.id ? { ...i, selected: checked } : i))
                            );
                          }}
                          className="rounded text-sky-600 focus:ring-sky-500"
                        />
                        <span className="font-bold font-mono text-xs text-slate-900">
                          Nomor Asli #{item.original_number}
                        </span>
                        <span className="px-2 py-0.5 bg-slate-200 text-slate-700 rounded text-[10px] font-bold">
                          Topik #{item.pillar_number}
                        </span>
                        <span className="text-xs font-semibold text-slate-800">{item.title}</span>
                      </div>

                      <span className="text-xs font-mono text-sky-700 font-bold">{item.difficulty}</span>
                    </div>

                    <div className="p-3 bg-white border border-slate-200 rounded-lg text-xs leading-relaxed">
                      <KaTeXRenderer content={item.question_text} />
                    </div>

                    {/* Editable Scaffolding Template */}
                    <div className="p-3 bg-sky-50/60 border border-sky-200 rounded-lg text-xs space-y-1.5">
                      <div className="flex items-center justify-between font-bold text-sky-900">
                        <span>🪄 Kerangka 4 Langkah OSN (Metadata Scaffolding):</span>
                        <span className="text-[10px] text-sky-600 font-normal">Dapat disunting oleh guru</span>
                      </div>
                      <textarea
                        value={item.solution_framework_template}
                        onChange={(e) => {
                          const val = e.target.value;
                          setExtractedStagingList((prev) =>
                            prev.map((i) => (i.id === item.id ? { ...i, solution_framework_template: val } : i))
                          );
                        }}
                        rows={6}
                        className="w-full p-2 font-mono text-[11px] bg-white border border-sky-200 rounded-md text-slate-700 focus:ring-1 focus:ring-sky-500 leading-relaxed"
                      />
                    </div>

                    <div className="p-3 bg-white border border-slate-200 rounded-lg text-[11px] font-mono text-slate-700 leading-relaxed">
                      <span className="font-bold font-sans text-slate-500 block mb-0.5">Rubrik Solusi Ekstraksi:</span>
                      <KaTeXRenderer content={item.rubric} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
