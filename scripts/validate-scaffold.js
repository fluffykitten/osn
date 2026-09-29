/**
 * scripts/validate-scaffold.js
 * Script QA Otomatis untuk Memvalidasi Scaffolding 4 Langkah & Router Pedagogis:
 * 1. Validasi Pemetaan 10 Pilar Silabus OSN
 * 2. Validasi Pemetaan 16 Topik Kimia SMA (Fase E, F1, F2)
 * 3. Validasi Domain Baru (Kualitatif, Spektroskopi, Koordinasi)
 * 4. Validasi Mesin Anti-Cheat Regex (analyzeScaffoldWork)
 */

import {
  resolveScaffoldKey,
  getQuestionScaffold,
  getScaffoldDomainInfo,
  analyzeScaffoldWork,
  DOMAIN_SCAFFOLDS,
} from '../src/services/scaffoldService.ts';

console.log('🧪 Memulai Pengujian QA Scaffolding Engine 4 Langkah...\n');

let passedTests = 0;
let failedTests = 0;

function assert(condition, testName) {
  if (condition) {
    console.log(`  ✅ PASS: ${testName}`);
    passedTests++;
  } else {
    console.error(`  ❌ FAIL: ${testName}`);
    failedTests++;
  }
}

// =========================================================================
// 1. UJI ROUTING 10 PILAR SILABUS OSN (BASIS TOPIK UMUM)
// =========================================================================
console.log('📋 1. Menguji Routing 10 Pilar Silabus OSN:');

const osnPillarsTest = [
  { q: { pillar_number: 1, subtopic: 'Struktur Atom & Spektrum' }, expected: 'atomic_structure' },
  { q: { pillar_number: 2, subtopic: 'Ikatan Kimia Konseptual' }, expected: 'qualitative_reasoning' },
  { q: { pillar_number: 3, subtopic: 'Stoikiometri Gas' }, expected: 'stoichiometry' },
  { q: { pillar_number: 4, subtopic: 'Termodinamika Kimia' }, expected: 'thermodynamics' },
  { q: { pillar_number: 5, subtopic: 'Kesetimbangan Kimia Umum' }, expected: 'chemical_equilibrium' },
  { q: { pillar_number: 6, subtopic: 'Kinetika Kimia Lanjut' }, expected: 'kinetics' },
  { q: { pillar_number: 7, subtopic: 'Elektrokimia Umum' }, expected: 'electrochemistry' },
  { q: { pillar_number: 8, subtopic: 'Kimia Anorganik Kompleks' }, expected: 'inorganic_coordination' },
  { q: { pillar_number: 9, subtopic: 'Kimia Analitik Spektroskopi' }, expected: 'spectroscopy_analytical' },
  { q: { pillar_number: 10, subtopic: 'Kimia Organik & Sintesis' }, expected: 'organic_chemistry' },
];

for (const t of osnPillarsTest) {
  const resolved = resolveScaffoldKey(t.q);
  assert(resolved === t.expected, `Pilar ${t.q.pillar_number} (${t.q.subtopic}) -> ${t.expected} (hasil: ${resolved})`);
}

// =========================================================================
// 1B. UJI DETEKSI SUBTOPIK & KONSEP SPESIFIK TINGGI (FINE-GRAINED)
// =========================================================================
console.log('\n📋 1B. Menguji Deteksi Konsep Spesifik Tinggi (Anti-Generic):');

const specificConceptsTest = [
  {
    q: {
      id: 103006,
      title: 'Penentuan Kontributor Resonansi Mayor pada Anion Tiosianat (SCN-)',
      subtopic: 'Muatan Formal & Kestabilan Kontributor Resonansi',
      tags: ['muatan-formal', 'resonansi-struktur', 'tiosianat', 'elektronegativitas', 'kontributor-mayor'],
    },
    expected: 'formal_charge_resonance',
    name: 'Soal 103006 (Resonansi Tiosianat SCN-)',
  },
  {
    q: {
      title: 'Bentuk Molekul ClF3 dan Pasangan Elektron Bebas',
      subtopic: 'Teori VSEPR',
      tags: ['vsepr', 'domain-elektron', 'geometri-molekul'],
    },
    expected: 'molecular_geometry_vsepr',
    name: 'Soal VSEPR (Geometri Molekul)',
  },
  {
    q: {
      title: 'Anomali Titik Didih Hidrida Biner Akibat Ikatan Hidrogen',
      subtopic: 'Gaya Antarmolekul',
      tags: ['ikatan-hidrogen', 'gaya-antarmolekul', 'titik-didih'],
    },
    expected: 'intermolecular_forces',
    name: 'Soal Ikatan Hidrogen (Gaya Antarmolekul)',
  },
  {
    q: {
      title: 'Perhitungan Energi Kisi MgCl2 Menggunakan Siklus Born-Haber',
      subtopic: 'Siklus Born-Haber',
      tags: ['born-haber', 'energi-kisi'],
    },
    expected: 'born_haber_cycle',
    name: 'Soal Siklus Born-Haber (Energi Kisi)',
  },
  {
    q: {
      title: 'Penentuan Orde Ikatan dan Kemagnetan Spesi Isoelektronik NO+',
      subtopic: 'Teori Orbital Molekul',
      tags: ['mot', 'orbital-molekul', 'orde-ikatan'],
    },
    expected: 'molecular_orbital_theory',
    name: 'Soal MOT (Orbital Molekul)',
  },
  {
    q: {
      title: 'Perhitungan pH Larutan Penyangga Asetat',
      subtopic: 'Larutan Penyangga',
      tags: ['buffer', 'penyangga'],
    },
    expected: 'buffer_hydrolysis',
    name: 'Soal Buffer & Penyangga',
  },
  {
    q: {
      title: 'Penentuan Konsentrasi Cuka via Titrasi Asidimetri',
      subtopic: 'Titrasi Netralisasi',
      tags: ['titrasi', 'alkalimetri', 'titik-ekivalen'],
    },
    expected: 'titration_neutralization',
    name: 'Soal Titrasi Netralisasi',
  },
  {
    q: {
      title: 'Prediksi Pengendapan AgCl dan Hubungan Ksp',
      subtopic: 'Kelarutan Ksp',
      tags: ['ksp', 'kelarutan'],
    },
    expected: 'solubility_ksp',
    name: 'Soal Kelarutan & Ksp',
  },
];

for (const t of specificConceptsTest) {
  const resolved = resolveScaffoldKey(t.q);
  assert(resolved === t.expected, `${t.name} -> ${t.expected} (hasil: ${resolved})`);
}

// =========================================================================
// 2. UJI ROUTING 16 TOPIK KIMIA SMA
// =========================================================================
console.log('\n📋 2. Menguji Routing 16 Topik Kimia SMA:');

const smaTopicsTest = [
  { topicId: 101, expected: 'qualitative_reasoning', name: 'Hakikat Kimia & K3' },
  { topicId: 102, expected: 'qualitative_reasoning', name: 'Struktur Atom & SPU Kualitatif' },
  { topicId: 103, expected: 'qualitative_reasoning', name: 'Ikatan Kimia & VSEPR' },
  { topicId: 104, expected: 'stoichiometry', name: 'Tata Nama & Persamaan Reaksi' },
  { topicId: 105, expected: 'stoichiometry', name: 'Konsep Mol & Hukum Dasar' },
  { topicId: 106, expected: 'thermodynamics', name: 'Termokimia SMA' },
  { topicId: 107, expected: 'kinetics', name: 'Laju Reaksi SMA' },
  { topicId: 108, expected: 'equilibrium_acid_base', name: 'Kesetimbangan SMA' },
  { topicId: 109, expected: 'equilibrium_acid_base', name: 'Asam-Basa SMA' },
  { topicId: 110, expected: 'equilibrium_acid_base', name: 'Buffer & Hidrolisis' },
  { topicId: 111, expected: 'equilibrium_acid_base', name: 'Kelarutan & Ksp' },
  { topicId: 112, expected: 'qualitative_reasoning', name: 'Koloid SMA' },
  { topicId: 113, expected: 'thermodynamics', name: 'Sifat Koligatif SMA' },
  { topicId: 114, expected: 'electrochemistry', name: 'Redoks & Sel Elektrokimia' },
  { topicId: 115, expected: 'qualitative_reasoning', name: 'Kimia Unsur Sifat Periodik' },
  { topicId: 116, expected: 'organic_chemistry', name: 'Kimia Karbon & Makromolekul' },
];

for (const t of smaTopicsTest) {
  const resolved = resolveScaffoldKey({ sma_topic_id: t.topicId });
  assert(resolved === t.expected, `Topik ${t.topicId} (${t.name}) -> ${t.expected} (hasil: ${resolved})`);
}

// Uji khusus Topik 115 dengan ion kompleks
const topic115Complex = resolveScaffoldKey({
  sma_topic_id: 115,
  tags: ['logam-transisi', 'ion-kompleks', 'oktahedral', 'ligan'],
});
assert(
  topic115Complex === 'inorganic_coordination',
  `Topik 115 (Kompleks Transisi) -> inorganic_coordination (hasil: ${topic115Complex})`
);

// =========================================================================
// 3. UJI DOMAIN INFO & METADATA UI
// =========================================================================
console.log('\n📋 3. Menguji Metadata UI getScaffoldDomainInfo:');

const infoDefault = getScaffoldDomainInfo({ pillar_number: 9 });
assert(
  infoDefault.label === 'Elusidasi Spektroskopi & Analitik' && infoDefault.iconName === 'microscope',
  `Pilar 9 getScaffoldDomainInfo mengembalikan icon microscope dan label spektroskopi`
);

const infoCustom = getScaffoldDomainInfo({
  solution_framework_template: '1. Custom Step A\n2. Custom Step B',
});
assert(
  infoCustom.isCustomTemplate === true && infoCustom.label === 'Kerangka Khusus Butir Soal',
  `Soal dengan solution_framework_template ditandai isCustomTemplate: true`
);

// =========================================================================
// 4. UJI MESIN ANTI-CHEAT REGEX (analyzeScaffoldWork)
// =========================================================================
console.log('\n📋 4. Menguji Mesin Anti-Cheat analyzeScaffoldWork:');

// Kasus A: Template Kosong bawaan sistem (hanya titik-titik)
const emptyTemplate = DOMAIN_SCAFFOLDS.stoichiometry;
const analysisEmpty = analyzeScaffoldWork(emptyTemplate);
assert(
  analysisEmpty.isCompletelyUnfilled === true && analysisEmpty.status === 'completely_unfilled',
  `Template kosong terdeteksi status: completely_unfilled (placeholder: ${analysisEmpty.placeholderCount})`
);

// Kasus B: Template Kosong format "Langkah 1:", "Langkah 2:"
const emptyLangkahTemplate = `Langkah 1: Identifikasi basis....
• Nilai tetapan: ....
Langkah 2: Tentukan reaksi....
• Persamaan: ....
Langkah 3: Kalkulasi nilai....
• Substitusi: ....
Langkah 4: Kesimpulan....
• Hasil: ....`;
const analysisLangkahEmpty = analyzeScaffoldWork(emptyLangkahTemplate);
assert(
  analysisLangkahEmpty.isCompletelyUnfilled === true && analysisLangkahEmpty.status === 'completely_unfilled',
  `Format 'Langkah 1:' kosong terdeteksi status: completely_unfilled`
);

// Kasus C: Pengerjaan Sebagian (masih ada 3 placeholder)
const partialWork = `1. Diketahui & Data Percobaan:
• Massa terukur: 5.4 gram Al (Ar = 27 g/mol)
• Nilai tetapan: ....
2. Persamaan Reaksi Kimia Setara:
• 2Al + 6HCl -> 2AlCl3 + 3H2
• Rasio: ....
3. Perhitungan Mol:
• n Al = 5.4 / 27 = 0.2 mol
• n H2 = (3/2) * 0.2 = 0.3 mol
4. Jawaban Akhir:
• Volume gas: ....`;
const analysisPartial = analyzeScaffoldWork(partialWork);
assert(
  analysisPartial.isPartiallyFilled === true && analysisPartial.status === 'partially_filled',
  `Pengerjaan sebagian terdeteksi status: partially_filled`
);

// Kasus D: Pengerjaan Lengkap & Sah (Properly Filled)
const properWork = `1. Diketahui & Data Percobaan:
• Massa terukur: 5.4 gram Al (Ar = 27 g/mol), T = 273 K, P = 1 atm.
• Tetapan R = 0.08206 L atm / (mol K).
2. Persamaan Reaksi Kimia Setara:
• 2Al(s) + 6HCl(aq) -> 2AlCl3(aq) + 3H2(g)
• Koefisien rasio n(H2) : n(Al) = 3 : 2
3. Perhitungan Mol & Analisis Aljabar:
• n Al = 5.4 / 27 = 0.20 mol
• n H2 = (3/2) * 0.20 = 0.30 mol
• V = n * R * T / P = 0.30 * 0.08206 * 273 / 1 = 6.72 L
4. Jawaban Akhir & Kesimpulan:
• Volume gas hidrogen yang dihasilkan adalah 6.72 Liter pada kondisi STP.`;
const analysisProper = analyzeScaffoldWork(properWork);
assert(
  analysisProper.status === 'properly_filled' && !analysisProper.isCompletelyUnfilled,
  `Pengerjaan nyata terdeteksi status: properly_filled (teks bersih: ${analysisProper.cleanedLength} karakter)`
);

// Kasus E: Jawaban Bebas tanpa Scaffold
const rawAnswer = 'Volume gas hidrogen yang dihasilkan adalah 6.72 L dengan reaksi 2Al + 6HCl -> 2AlCl3 + 3H2.';
const analysisRaw = analyzeScaffoldWork(rawAnswer);
assert(
  analysisRaw.status === 'no_scaffold' && analysisRaw.hasScaffoldMarkers === false,
  `Jawaban bebas tanpa scaffold terdeteksi status: no_scaffold`
);

// =========================================================================
// REKAPITULASI
// =========================================================================
console.log('\n========================================');
console.log(`Total Pengujian: ${passedTests + failedTests}`);
console.log(`Lolos (PASS)  : ${passedTests}`);
console.log(`Gagal (FAIL)  : ${failedTests}`);
console.log('========================================');

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log('\n🎉 SELURUH PENGUJIAN SCAFFOLDING ENGINE BERHASIL 100%!');
  process.exit(0);
}
