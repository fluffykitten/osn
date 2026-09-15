import type { Question } from '../types/database';

export const DOMAIN_SCAFFOLDS = {
  stoichiometry: `1. Diketahui & Data Percobaan:
• Besaran terukur dari soal (massa / volume / tekanan / suhu): ....
• Nilai tetapan yang diperlukan ($R$, $Ar$, $Mr$): ....

2. Persamaan Reaksi Kimia Setara:
• Persamaan reaksi kimia 1: ....
• Persamaan reaksi kimia 2: ....
• Perbandingan koefisien reaksi (rasio stoikiometri): ....

3. Perhitungan Mol & Analisis Aljabar:
• Rumus konversi mol ($n = m/Mr$ atau $PV = nRT$): ....
• Substitusi data & penyusunan neraca mol: ....
• Pemodelan variabel ($x, y$) & langkah eliminasi/aljabar:
  ....

4. Jawaban Akhir & Kesimpulan:
• Nilai besaran yang ditanyakan: .... [Sertakan satuan]
• Verifikasi kelogisan hasil (fraksi mol / persen kemurnian): ....`,

  thermodynamics: `1. Data Termodinamika Standar ($298.15\\text{ K}$):
• Entalpi pembentukan standar ($\\Delta H_f^\\circ$): ....
• Entropi standar ($S^\\circ$) atau energi bebas ($\\Delta G_f^\\circ$): ....
• Suhu sistem ($T$) & tetapan gas ($R = 8.314\\text{ J/(mol}\\cdot\\text{K)}$): ....

2. Persamaan Reaksi & Siklus Termodinamika:
• Persamaan reaksi proses termal: ....
• Hukum Hess / Siklus termodinamika yang diterapkan: ....

3. Perhitungan $\\Delta H^\\circ$, $\\Delta S^\\circ$, $\\Delta G^\\circ$ & Tetapan Kesetimbangan ($K_p$):
• Rumus $\\Delta H^\\circ_{\\text{rxn}} = \\sum \\Delta H_f^\\circ(\\text{produk}) - \\sum \\Delta H_f^\\circ(\\text{reaktan})$: ....
• Rumus $\\Delta S^\\circ_{\\text{rxn}} = \\sum S^\\circ(\\text{produk}) - \\sum S^\\circ(\\text{reaktan})$: ....
• Rumus energi bebas Gibbs $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$: ....
• Hubungan tetapan kesetimbangan $\\Delta G^\\circ = -RT \\ln K_p$: ....
• Perhitungan nilai $K_p = e^{-\\Delta G^\\circ / RT}$: ....

4. Jawaban Akhir & Analisis Spontanitas:
• Nilai $\\Delta H^\\circ_{\\text{rxn}}$, $\\Delta S^\\circ_{\\text{rxn}}$, $\\Delta G^\\circ$: ....
• Nilai $K_p$: ....
• Kesimpulan kespontanan reaksi (spontan $\\Delta G < 0$ / kesetimbangan): ....`,

  electrochemistry: `1. Data Potensial Reduksi Standar ($E^\\circ$) & Spesies Sel:
• Setengah reaksi katoda (reduksi): ....
• Setengah reaksi anoda (oksidasi): ....
• Potensial sel terukur ($E_{\\text{sel}}$) atau standar ($E^\\circ$): ....
• Jumlah elektron yang terlibat ($n$): ....
• Tetapan Nernst ($\\frac{2.303 RT}{F}$): ....

2. Reaksi Sel & Potensial Sel Standar ($E^\\circ_{\\text{sel}}$):
• Persamaan reaksi sel keseluruhan: ....
• Perhitungan $E^\\circ_{\\text{sel}} = E^\\circ_{\\text{katoda}} - E^\\circ_{\\text{anoda}}$: ....

3. Aplikasi Persamaan Nernst / Hubungan Kelarutan ($K_{sp}$):
• Bentuk persamaan Nernst: ....
• Kuosien reaksi $Q$: ....
• Substitusi data & perhitungan aljabar konsentrasi ion:
  ....
• Perhitungan nilai $K_{sp}$ / $\\Delta G^\\circ_{\\text{sel}}$: ....

4. Jawaban Akhir & Kesimpulan:
• Persamaan reaksi sel bersih: ....
• Nilai potensial sel / konsentrasi ion / $K_{sp}$: ....
• Kesimpulan proses sel galvani / elektrolisis: ....`,

  kinetics: `1. Data Eksperimen Laju Reaksi:
• Tabel konsentrasi awal reaktan ($[A]_0, [B]_0$) dan laju awal ($v_0$): ....
• Suhu pengujian ($T$) & tetapan reaksi: ....

2. Penentuan Orde Reaksi & Persamaan Hukum Laju:
• Analisis rasio percobaan untuk mencari orde parsial ($m$ dan $n$): ....
• Bentuk persamaan hukum laju reaksi: ....

3. Perhitungan Tetapan Laju ($k$) & Waktu Paruh / Energi Aktivasi ($E_a$):
• Substitusi salah satu percobaan untuk menghitung nilai $k$ dan satuannya: ....
• Perhitungan waktu paruh ($t_{1/2}$) atau persamaan Arrhenius:
  ....

4. Jawaban Akhir & Usulan Mekanisme Reaksi:
• Nilai laju reaksi baru / tetapan $k$ / energi aktivasi $E_a$: ....
• Tahapan penentu laju (*rate-determining step* / RDS): ....`,

  equilibrium_acid_base: `1. Data Spesies Kimia & Tetapan Kesetimbangan:
• Konsentrasi awal dan volume masing-masing larutan: ....
• Nilai tetapan ($K_a, K_b, K_w$, atau $K_{sp}$): ....

2. Persamaan Kesetimbangan & Tabel M-R-S:
• Persamaan reaksi kesetimbangan: ....
• Tabel stoikiometri M-R-S (Mula-mula, Reaksi, Sisa/Setimbang):
  ....

3. Perhitungan Konsentrasi Ion $[\\ce{H+}]$, $[\\ce{OH-}]$ atau Kelarutan ($s$):
• Rumus yang relevan (asam/basa lemah, buffer, hidrolisis, $K_{sp}$): ....
• Substitusi nilai ke persamaan kesetimbangan:
  ....

4. Jawaban Akhir & Kesimpulan:
• Nilai pH, pOH, derajat disosiasi ($\\alpha$), atau kelarutan ($s$): ....
• Kesimpulan kondisi larutan (larut / tepat jenuh / mengendap): ....`,

  atomic_structure: `1. Data Partikel, Nomor Atom & Muatan:
• Nomor atom ($Z$), massa atom, nomor massa, atau muatan kation/anion: ....

2. Konfigurasi Elektron & Diagram Orbital:
• Prinsip Aufbau, Larangan Pauli, dan Aturan Hund:
  Konfigurasi elektron: ....
• Diagram orbital elektron valensi: ....

3. Penentuan Bilangan Kuantum & Geometri / Ikatan:
• 4 bilangan kuantum elektron terakhir ($n, l, m_l, m_s$): ....
• Analisis VSEPR / Domain Elektron / Hibridisasi: ....
• Muatan formal & struktur resonansi Lewis (jika relevan): ....

4. Jawaban Akhir & Sifat Fisik/Magnetik:
• Nilai set bilangan kuantum / nama geometri molekul: ....
• Kesimpulan kepolaran & sifat magnetik (paramagnetik/diamagnetik): ....`,

  organic_chemistry: `1. Identifikasi Rumus Molekul & Derajat Ketidakjenuhan:
• Rumus molekul teridentifikasi: ....
• Perhitungan derajat ketidakjenuhan (DBE / IHD): ....
• Analisis gugus fungsi berdasarkan data reagen / spektrum: ....

2. Analisis Stereokimia & Pusat Kiral:
• Identifikasi atom karbon kiral ($C^*$): ....
• Aturan prioritas Cahn-Ingold-Prelog (CIP): ....
• Penentuan konfigurasi stereoisomer ($R/S$ atau $E/Z$): ....

3. Jalur Mekanisme Reaksi & Pembentukan Zat Antara:
• Tipe mekanisme ($S_N1, S_N2, E1, E2$, adisi elektrofilik, substitusi): ....
• Struktur zat antara (karbokation, radikal, kompleks transisi):
  ....

4. Struktur Produk Akhir & Regioselektivitas:
• Struktur produk utama (mengikuti aturan Markovnikov / Zaitsev): ....
• Stereokimia produk akhir (inversi, rasemisasi, atau retensi): ....`,

  general: `1. Diketahui & Data Soal:
• Besaran yang diketahui dari soal: ....
• Nilai tetapan relevan ($R, Ar, Mr, K$, dll.): ....

2. Persamaan Reaksi / Prinsip Kimia Utama:
• Persamaan reaksi kimia setara atau hukum fundamental: ....
• Hubungan matematis antar variabel: ....

3. Analisis Perhitungan & Langkah Aljabar:
• Rumus yang digunakan: ....
• Substitusi data & kalkulasi bertahap:
  ....
• Model eliminasi / aljabar:
  ....

4. Jawaban Akhir & Kesimpulan:
• Nilai besaran yang ditanyakan: .... [Sertakan satuan]
• Kesimpulan logis: ....`,
};

/**
 * Returns a personalized OSN 4-step framework scaffold for a given question.
 * Prioritizes the question's AI/teacher-generated metadata `solution_framework_template`,
 * falling back to intelligent topic-based scaffold detection.
 */
export function getQuestionScaffold(question: Partial<Question>): string {
  if (question.solution_framework_template && question.solution_framework_template.trim().length > 0) {
    return question.solution_framework_template;
  }

  const tags = (question.tags || []).map((t) => t.toLowerCase());
  const subtopic = (question.subtopic || '').toLowerCase();
  const title = (question.title || '').toLowerCase();
  const pillar = question.pillar_number;

  // Check Organic & Bio
  if (
    pillar === 10 ||
    tags.some((t) => t.includes('organik') || t.includes('stereokimia') || t.includes('sn1') || t.includes('sn2') || t.includes('karbonil') || t.includes('alkena')) ||
    subtopic.includes('organik') ||
    subtopic.includes('stereokimia')
  ) {
    return DOMAIN_SCAFFOLDS.organic_chemistry;
  }

  // Check Electrochemistry
  if (
    pillar === 7 ||
    tags.some((t) => t.includes('elektrokimia') || t.includes('redoks') || t.includes('nernst') || t.includes('faraday') || t.includes('potensial')) ||
    subtopic.includes('elektrokimia') ||
    subtopic.includes('nernst')
  ) {
    return DOMAIN_SCAFFOLDS.electrochemistry;
  }

  // Check Thermodynamics
  if (
    pillar === 4 ||
    tags.some((t) => t.includes('termodinamika') || t.includes('entalpi') || t.includes('entropi') || t.includes('gibbs') || t.includes('born-haber') || t.includes('energi-kisi')) ||
    subtopic.includes('termodinamika') ||
    subtopic.includes('gibbs')
  ) {
    return DOMAIN_SCAFFOLDS.thermodynamics;
  }

  // Check Kinetics
  if (
    pillar === 5 ||
    tags.some((t) => t.includes('kinetika') || t.includes('orde') || t.includes('arrhenius') || t.includes('laju')) ||
    subtopic.includes('kinetika') ||
    subtopic.includes('laju')
  ) {
    return DOMAIN_SCAFFOLDS.kinetics;
  }

  // Check Equilibrium & Acid-Base / Solution
  if (
    pillar === 6 ||
    tags.some((t) => t.includes('kesetimbangan') || t.includes('larutan') || t.includes('asam-basa') || t.includes('buffer') || t.includes('ksp') || t.includes('kelarutan')) ||
    subtopic.includes('kesetimbangan') ||
    subtopic.includes('larutan') ||
    subtopic.includes('ksp')
  ) {
    return DOMAIN_SCAFFOLDS.equilibrium_acid_base;
  }

  // Check Atomic Structure & Quantum
  if (
    pillar === 1 ||
    tags.some((t) => t.includes('struktur-atom') || t.includes('kuantum') || t.includes('aufbau') || t.includes('hibridisasi') || t.includes('vsepr')) ||
    subtopic.includes('kuantum') ||
    subtopic.includes('konfigurasi')
  ) {
    return DOMAIN_SCAFFOLDS.atomic_structure;
  }

  // Check Stoichiometry & Gas
  if (
    pillar === 3 ||
    tags.some((t) => t.includes('stoikiometri') || t.includes('gas-ideal') || t.includes('fraksi-mol') || t.includes('titrasi') || t.includes('pembakaran')) ||
    subtopic.includes('stoikiometri') ||
    subtopic.includes('gas')
  ) {
    return DOMAIN_SCAFFOLDS.stoichiometry;
  }

  return DOMAIN_SCAFFOLDS.general;
}
