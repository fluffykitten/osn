/**
 * aiTutorGuardrails.ts
 * Sistem Guardrail Komprehensif untuk AI Tutor Kimia OSN:
 * 1. Chemical Safety Guardrail (mencegah sintesis bahan peledak, senjata kimia, racun berbahaya, dan narkotika).
 * 2. Scope & Relevance Guardrail (menjaga fokus eksklusif pada ilmu kimia, sains, dan olimpiade).
 * 3. System Prompt Guardrail (instruksi ketat bagi model AI termasuk format KaTeX non-JSON).
 * 4. Resilient Response Formatter (auto-parse jika model tidak sengaja merespons dalam format JSON).
 */

export interface GuardrailResult {
  passed: boolean;
  type?: 'safety_violation' | 'off_topic';
  refusalMessage?: string;
}

// Pola kata kunci bahaya kimia tingkat tinggi (K3 & Non-Proliferation)
const DANGEROUS_PATTERNS: Array<{ regex: RegExp; label: string }> = [
  // Bahan Peledak & Bom
  { regex: /\b(cara\s+buat|bikin|sintesis|meracik)\s+(bom|peledak|tnt|rdx|tatp|dinamit|petasan\s+daya\s+ledak)\b/i, label: 'bahan peledak' },
  { regex: /\b(triaseton\s+triperoksida|nitrogliserin\s+murni|ammonium\s+nitrat\s+bom)\b/i, label: 'bahan peledak tinggi' },
  
  // Senjata Kimia & Gas Beracun Mematikan
  { regex: /\b(cara\s+buat|sintesis|membuat)\s+(gas\s+sarin|gas\s+mustard|tabun|soman|gas\s+vx|phosgene|fosgen)\b/i, label: 'senjata kimia' },
  { regex: /\b(senjata\s+biologis|senjata\s+kimia|racun\s+ricin|membuat\s+sianida\s+untuk\s+meracuni)\b/i, label: 'senjata kimia/racun mematikan' },

  // Narkotika & Psikotropika
  { regex: /\b(cara\s+buat|sintesis|memasak|meracik)\s+(sabu|metamfetamin|ekstasi|mdma|heroin|morfin\s+ilegal|narkoba)\b/i, label: 'narkotika ilegal' },
];

// Pola kata kunci pertanyaan yang sepenuhnya di luar topik sains kimia (Off-topic)
const OFF_TOPIC_PATTERNS: Array<{ regex: RegExp; label: string }> = [
  // Politik & Kontroversi Sosial
  { regex: /\b(siapa\s+presiden\s+terbaik|pemilu\s+2024|pilih\s+partai|debat\s+capres|kebijakan\s+pemerintah\s+buruk)\b/i, label: 'politik praktis' },
  
  // Entertainment / Gosip Selebriti
  { regex: /\b(gosip|skandal\s+artis|pacar\s+artis|siapa\s+istri|perceraian\s+artis)\b/i, label: 'gosip selebriti' },
  
  // Gaming / Cheat / Game Hacks
  { regex: /\b(cheat\s+game|script\s+roblox|diamond\s+ml\s+gratis|aimbot|hack\s+akun\s+ff)\b/i, label: 'cheat gaming' },
  
  // Software Coding Non-Sains (misal coding web app, hack wifi)
  { regex: /\b(hack\s+wifi|bobol\s+password|script\s+ddos|bikin\s+bot\s+telegram\s+slot)\b/i, label: 'aktivitas hacking' },
];

/**
 * Memeriksa apakah input siswa mematuhi batas keselamatan dan relevansi materi
 */
export function evaluateQueryGuardrails(
  query: string,
  materialTitle: string,
  conceptTitle: string
): GuardrailResult {
  const clean = query.trim();

  // 1. Periksa Pelanggaran Keselamatan Kimia (Safety Guardrail)
  for (const item of DANGEROUS_PATTERNS) {
    if (item.regex.test(clean)) {
      return {
        passed: false,
        type: 'safety_violation',
        refusalMessage: `### ⚠️ Peringatan Keselamatan Kimia (K3 & Etika Sains)\n\nSebagai **AI Tutor Kimia OSN**, saya berpegang teguh pada protokol keamanan sains dan etika akademik Puspresnas & IChO.\n\nSaya **tidak dapat** memberikan panduan langkah demi langkah, instruksi teknis, atau resep sintesis untuk **${item.label}**, zat berbahaya terlarang, maupun zat psikotropika ilegal.\n\n💡 **Alternatif Pembelajaran yang Aman & Legal:**\n- Anda dapat mempelajari teori kestabilan termal ikatan kimia dan termodinamika peruraian zat secara umum.\n- Menelaah prinsip dasar **Keselamatan Kerja Laboratorium (K3)** dan simbol bahaya bahan kimia (*GHS pictograms*).\n- Mempelajari stoikiometri dan kinetika reaksi dalam konteks reaksi kimia standar yang aman.`,
      };
    }
  }

  // 2. Periksa Pertanyaan di Luar Topik (Scope Guardrail)
  for (const item of OFF_TOPIC_PATTERNS) {
    if (item.regex.test(clean)) {
      return {
        passed: false,
        type: 'off_topic',
        refusalMessage: `### 🔬 Fokus Pembelajaran Sains Kimia\n\nPertanyaan Anda terdeteksi berkaitan dengan **${item.label}**, yang berada di luar cakupan ilmu kimia dan persiapan Olimpiade Sains Nasional (OSN).\n\nSebagai **AI Tutor Kimia OSN**, saya dirancang khusus untuk memandu Anda menguasai:\n- Konsep fundamental dan materi tingkat lanjut kimia (${conceptTitle})\n- Penurunan rumus matematis dan notasi KaTeX ilmiah\n- Pembahasan strategi analitis soal olimpiade Puspresnas & IChO\n\nYuk, kembali ke fokus materi **${materialTitle}**! Ada bagian konsep yang ingin Anda diskusikan? 🧪✨`,
      };
    }
  }

  return { passed: true };
}

/**
 * System Instruction Guardrail untuk Gemini AI
 */
export const TUTOR_SYSTEM_INSTRUCTION = `Anda adalah "AI Tutor & Mentor Resmi Olimpiade Sains Nasional (OSN) Kimia Indonesia".
Karakter Anda: Ramah, suportif, berwawasan mendalam, sangat teliti, dan mengutamakan pemahaman konsep fundamental.

PROTOKOL GUARDRAIL & ATURAN KETAT:
1. ATURAN KEAMANAN KIMIA:
   - JANGAN PERNAH memberikan resep, rasio bahan, atau langkah sintesis bahan peledak, senjata kimia/gas beracun, racun berbahaya untuk manusia, atau narkoba ilegal.
   - Jika ditanya mengenai senyawa berbahaya, bahas HANYA dari aspek teori ilmiah murni, bahaya keselamatan, atau prosedur K3 laboratorium.

2. ATURAN FOKUS DAN RUANG LINGKUP:
   - Anda HANYA melayani konsultasi akademik seputar ilmu kimia, fisika/matematika terapan kimia, dan persiapan olimpiade kimia.
   - Jika pertanyaan siswa sama sekali tidak ada kaitannya dengan sains/kimia, tolak dengan sopan dan ajak kembali ke topik materi kimia.

3. ATURAN FORMAT OUTPUT (KRUSIAL):
   - JANGAN PERNAH merespons dalam format JSON mentah (misal jangan menggunakan { "peran": "...", "analogi": "..." }).
   - WAJIB merespons dalam format teks Markdown alami yang terstruktur rapi (gunakan judul ## / ###, poin-poin daftar numerik atau bullet, serta teks tebal).
   - SEMUA rumus kimia, persamaan reaksi, ion, dan variabel fisika-kimia WAJIB ditulis dengan notasi KaTeX:
     * Inline math: $...$ (contoh: $\\Delta H^\\circ$, $K_c = 1.8 \\times 10^{-5}$, $\\ce{H2SO4}$, $\\ce{Fe^{3+}}$).
     * Display equation: $$...$$ (contoh: $$\\Delta G^\\circ = -RT \\ln K$$ atau $$\\ln\\left(\\frac{K_2}{K_1}\\right) = -\\frac{\\Delta H^\\circ}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)$$).`;

/**
 * Format & Bersihkan Response:
 * Jika AI tetap mengembalikan format JSON (karena perilaku model), otomatis konversikan menjadi teks Markdown terstruktur dengan KaTeX!
 */
export function cleanAndFormatTutorResponse(raw: string): string {
  if (!raw) return '';
  const trimmed = raw.trim();

  // Cek apakah output terbungkus JSON
  if (trimmed.startsWith('{') && trimmed.endsWith('}')) {
    try {
      const parsed = JSON.parse(trimmed);
      let md = '';

      if (parsed.sapaan) {
        md += `${parsed.sapaan}\n\n`;
      }

      if (parsed.analogi_utama) {
        const title = typeof parsed.analogi_utama === 'object' ? parsed.analogi_utama.judul : 'Analogi Konsep';
        const desc = typeof parsed.analogi_utama === 'object' ? parsed.analogi_utama.deskripsi : parsed.analogi_utama;
        md += `### 💡 ${title || 'Analogi Konsep'}\n\n${desc}\n\n`;
      }

      if (parsed.penjelasan || parsed.konsep_utama) {
        md += `### 🧪 Penjelasan Konsep\n\n${parsed.penjelasan || parsed.konsep_utama}\n\n`;
      }

      if (parsed.rumus || parsed.formula || parsed.penurunan_rumus) {
        const formulaVal = parsed.rumus || parsed.formula || parsed.penurunan_rumus;
        md += `### 📐 Formula & Penurunan KaTeX\n\n${formulaVal}\n\n`;
      }

      if (parsed.jebakan || parsed.tips_osn || parsed.miskonsepsi) {
        md += `### ⚠️ Tips & Jebakan Soal OSN\n\n${parsed.jebakan || parsed.tips_osn || parsed.miskonsepsi}\n\n`;
      }

      if (parsed.kesimpulan) {
        md += `### 📌 Kesimpulan\n\n${parsed.kesimpulan}\n\n`;
      }

      if (md.trim()) {
        return md.trim();
      }

      // Fallback jika keys lain
      const keys = Object.keys(parsed);
      for (const k of keys) {
        if (k === 'peran') continue;
        const val = parsed[k];
        if (typeof val === 'string') {
          md += `**${k.replace(/_/g, ' ').toUpperCase()}:**\n${val}\n\n`;
        } else if (typeof val === 'object') {
          md += `**${k.replace(/_/g, ' ').toUpperCase()}:**\n${JSON.stringify(val, null, 2)}\n\n`;
        }
      }

      if (md.trim()) return md.trim();
    } catch {
      // bukan JSON valid, kembalikan teks asli
    }
  }

  // Jika response berupa markdown biasa, pastikan rumus LaTeX rapi
  return trimmed;
}
