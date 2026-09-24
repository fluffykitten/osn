// scripts/sync_questions_to_supabase.cjs
/**
 * Skrip Sinkronisasi Bank Soal (800 Soal Modular) ke Supabase Cloud
 * 
 * Penggunaan:
 * node scripts/sync_questions_to_supabase.cjs
 */

const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

// 1. Baca kredensial dari .env.local
const envPath = path.resolve(__dirname, '../.env.local');
let supabaseUrl = '';
let supabaseAnonKey = '';

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  const urlMatch = envContent.match(/VITE_SUPABASE_URL\s*=\s*(.*)/);
  const keyMatch = envContent.match(/VITE_SUPABASE_ANON_KEY\s*=\s*(.*)/);
  if (urlMatch) supabaseUrl = urlMatch[1].trim();
  if (keyMatch) supabaseAnonKey = keyMatch[1].trim();
}

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Gagal membaca VITE_SUPABASE_URL atau VITE_SUPABASE_ANON_KEY dari .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 2. Daftar 56 file data modular
const files = [
  // SMA (16 Topik x 25 = 400 Soal)
  { path: 'src/data/smaQuestionsData.ts', defaultPillar: 1, defaultCurriculum: 'sma' },
  { path: 'src/data/smaQuestionsTopic2Data.ts', defaultPillar: 2, defaultCurriculum: 'sma' },
  { path: 'src/data/smaQuestionsTopic3Data.ts', defaultPillar: 3, defaultCurriculum: 'sma' },
  { path: 'src/data/smaQuestionsTopic4Data.ts', defaultPillar: 4, defaultCurriculum: 'sma' },
  { path: 'src/data/smaQuestionsTopic5Data.ts', defaultPillar: 5, defaultCurriculum: 'sma' },
  { path: 'src/data/smaQuestionsTopic6Data.ts', defaultPillar: 6, defaultCurriculum: 'sma' },
  { path: 'src/data/smaQuestionsTopic7Data.ts', defaultPillar: 7, defaultCurriculum: 'sma' },
  { path: 'src/data/smaQuestionsTopic8Data.ts', defaultPillar: 8, defaultCurriculum: 'sma' },
  { path: 'src/data/smaQuestionsTopic9Data.ts', defaultPillar: 9, defaultCurriculum: 'sma' },
  { path: 'src/data/smaQuestionsTopic10Data.ts', defaultPillar: 10, defaultCurriculum: 'sma' },
  { path: 'src/data/smaQuestionsTopic11Data.ts', defaultPillar: 11, defaultCurriculum: 'sma' },
  { path: 'src/data/smaQuestionsTopic12Data.ts', defaultPillar: 12, defaultCurriculum: 'sma' },
  { path: 'src/data/smaQuestionsTopic13Data.ts', defaultPillar: 13, defaultCurriculum: 'sma' },
  { path: 'src/data/smaQuestionsTopic14Data.ts', defaultPillar: 14, defaultCurriculum: 'sma' },
  { path: 'src/data/smaQuestionsTopic15Data.ts', defaultPillar: 15, defaultCurriculum: 'sma' },
  { path: 'src/data/smaQuestionsTopic16Data.ts', defaultPillar: 16, defaultCurriculum: 'sma' },
  // OSK (10 Pilar x 10 = 100 Soal)
  { path: 'src/data/oskQuestionsPillar1Data.ts', defaultPillar: 1, defaultCurriculum: 'osn' },
  { path: 'src/data/oskQuestionsPillar2Data.ts', defaultPillar: 2, defaultCurriculum: 'osn' },
  { path: 'src/data/oskQuestionsPillar3Data.ts', defaultPillar: 3, defaultCurriculum: 'osn' },
  { path: 'src/data/oskQuestionsPillar4Data.ts', defaultPillar: 4, defaultCurriculum: 'osn' },
  { path: 'src/data/oskQuestionsPillar5Data.ts', defaultPillar: 5, defaultCurriculum: 'osn' },
  { path: 'src/data/oskQuestionsPillar6Data.ts', defaultPillar: 6, defaultCurriculum: 'osn' },
  { path: 'src/data/oskQuestionsPillar7Data.ts', defaultPillar: 7, defaultCurriculum: 'osn' },
  { path: 'src/data/oskQuestionsPillar8Data.ts', defaultPillar: 8, defaultCurriculum: 'osn' },
  { path: 'src/data/oskQuestionsPillar9Data.ts', defaultPillar: 9, defaultCurriculum: 'osn' },
  { path: 'src/data/oskQuestionsPillar10Data.ts', defaultPillar: 10, defaultCurriculum: 'osn' },
  // OSP (10 Pilar x 10 = 100 Soal)
  { path: 'src/data/ospQuestionsPillar1Data.ts', defaultPillar: 1, defaultCurriculum: 'osn' },
  { path: 'src/data/ospQuestionsPillar2Data.ts', defaultPillar: 2, defaultCurriculum: 'osn' },
  { path: 'src/data/ospQuestionsPillar3Data.ts', defaultPillar: 3, defaultCurriculum: 'osn' },
  { path: 'src/data/ospQuestionsPillar4Data.ts', defaultPillar: 4, defaultCurriculum: 'osn' },
  { path: 'src/data/ospQuestionsPillar5Data.ts', defaultPillar: 5, defaultCurriculum: 'osn' },
  { path: 'src/data/ospQuestionsPillar6Data.ts', defaultPillar: 6, defaultCurriculum: 'osn' },
  { path: 'src/data/ospQuestionsPillar7Data.ts', defaultPillar: 7, defaultCurriculum: 'osn' },
  { path: 'src/data/ospQuestionsPillar8Data.ts', defaultPillar: 8, defaultCurriculum: 'osn' },
  { path: 'src/data/ospQuestionsPillar9Data.ts', defaultPillar: 9, defaultCurriculum: 'osn' },
  { path: 'src/data/ospQuestionsPillar10Data.ts', defaultPillar: 10, defaultCurriculum: 'osn' },
  // OSN (10 Pilar x 10 = 100 Soal)
  { path: 'src/data/osnQuestionsPillar1Data.ts', defaultPillar: 1, defaultCurriculum: 'osn' },
  { path: 'src/data/osnQuestionsPillar2Data.ts', defaultPillar: 2, defaultCurriculum: 'osn' },
  { path: 'src/data/osnQuestionsPillar3Data.ts', defaultPillar: 3, defaultCurriculum: 'osn' },
  { path: 'src/data/osnQuestionsPillar4Data.ts', defaultPillar: 4, defaultCurriculum: 'osn' },
  { path: 'src/data/osnQuestionsPillar5Data.ts', defaultPillar: 5, defaultCurriculum: 'osn' },
  { path: 'src/data/osnQuestionsPillar6Data.ts', defaultPillar: 6, defaultCurriculum: 'osn' },
  { path: 'src/data/osnQuestionsPillar7Data.ts', defaultPillar: 7, defaultCurriculum: 'osn' },
  { path: 'src/data/osnQuestionsPillar8Data.ts', defaultPillar: 8, defaultCurriculum: 'osn' },
  { path: 'src/data/osnQuestionsPillar9Data.ts', defaultPillar: 9, defaultCurriculum: 'osn' },
  { path: 'src/data/osnQuestionsPillar10Data.ts', defaultPillar: 10, defaultCurriculum: 'osn' },
  // IChO (10 Pilar x 10 = 100 Soal)
  { path: 'src/data/ichoQuestionsPillar1Data.ts', defaultPillar: 1, defaultCurriculum: 'osn' },
  { path: 'src/data/ichoQuestionsPillar2Data.ts', defaultPillar: 2, defaultCurriculum: 'osn' },
  { path: 'src/data/ichoQuestionsPillar3Data.ts', defaultPillar: 3, defaultCurriculum: 'osn' },
  { path: 'src/data/ichoQuestionsPillar4Data.ts', defaultPillar: 4, defaultCurriculum: 'osn' },
  { path: 'src/data/ichoQuestionsPillar5Data.ts', defaultPillar: 5, defaultCurriculum: 'osn' },
  { path: 'src/data/ichoQuestionsPillar6Data.ts', defaultPillar: 6, defaultCurriculum: 'osn' },
  { path: 'src/data/ichoQuestionsPillar7Data.ts', defaultPillar: 7, defaultCurriculum: 'osn' },
  { path: 'src/data/ichoQuestionsPillar8Data.ts', defaultPillar: 8, defaultCurriculum: 'osn' },
  { path: 'src/data/ichoQuestionsPillar9Data.ts', defaultPillar: 9, defaultCurriculum: 'osn' },
  { path: 'src/data/ichoQuestionsPillar10Data.ts', defaultPillar: 10, defaultCurriculum: 'osn' },
];

function extractQuestionsFromFile(fileMeta) {
  const fullPath = path.resolve(__dirname, '..', fileMeta.path);
  if (!fs.existsSync(fullPath)) return [];
  const content = fs.readFileSync(fullPath, 'utf8');

  // Split strictly by object root definition
  const parts = content.split(/\n\s*\{\s*\n\s*id:\s*(\d+),/);
  const results = [];

  for (let i = 1; i < parts.length; i += 2) {
    const id = parseInt(parts[i]);
    const block = parts[i + 1];

    const getStr = (re) => {
      const m = block.match(re);
      return m ? m[1].trim() : '';
    };

    const getNum = (re) => {
      const m = block.match(re);
      return m ? parseInt(m[1]) : null;
    };

    // Ambil question_text (bisa template string atau quote biasa)
    let questionText = '';
    const textBacktick = block.match(/question_text:\s*`([\s\S]*?)`,/);
    if (textBacktick) {
      questionText = textBacktick[1];
    } else {
      const textSingle = block.match(/question_text:\s*'([\s\S]*?)',/);
      if (textSingle) questionText = textSingle[1];
      else {
        const textDouble = block.match(/question_text:\s*"([\s\S]*?)",/);
        if (textDouble) questionText = textDouble[1];
      }
    }

    if (!questionText || questionText.trim() === '') {
      console.warn(`⚠️ Warning: Soal ID ${id} pada ${fileMeta.path} tidak memiliki question_text!`);
      continue;
    }

    // Ambil solution_rubric
    let solutionRubric = '';
    const rubBacktick = block.match(/solution_rubric:\s*`([\s\S]*?)`,/);
    if (rubBacktick) solutionRubric = rubBacktick[1];
    else {
      const rubSingle = block.match(/solution_rubric:\s*'([\s\S]*?)',/);
      if (rubSingle) solutionRubric = rubSingle[1];
    }

    // Ambil solution_framework_template
    let solutionFrameworkTemplate = '';
    const tmplBacktick = block.match(/solution_framework_template:\s*`([\s\S]*?)`,/);
    if (tmplBacktick) solutionFrameworkTemplate = tmplBacktick[1];

    const pillarNumber = getNum(/pillar_number:\s*(\d+)/) || fileMeta.defaultPillar;
    const moduleId = getNum(/module_id:\s*(\d+)/) || pillarNumber;
    const subtopic = getStr(/subtopic:\s*['"](.*?)['"]/) || 'Materi Kimia';
    const difficulty = getStr(/difficulty:\s*['"](.*?)['"]/) || (id < 200000 ? 'SMA-Sedang' : 'OSK');
    const questionStyle = getStr(/question_style:\s*['"](.*?)['"]/) || 'mcq';
    const title = getStr(/title:\s*['"](.*?)['"]/) || `Soal ${id}`;
    const expectedFinalAnswer = getStr(/expected_final_answer:\s*['"](.*?)['"]/) || null;
    const curriculum = getStr(/curriculum:\s*['"](.*?)['"]/) || fileMeta.defaultCurriculum;
    const grade = getStr(/grade:\s*['"](.*?)['"]/) || null;
    const curriculumPhase = getStr(/curriculum_phase:\s*['"](.*?)['"]/) || null;
    const smaTopicNumber = getNum(/sma_topic_number:\s*(\d+)/);
    const smaTopicId = getNum(/sma_topic_id:\s*(\d+)/);
    const totalPoints = getNum(/total_points:\s*(\d+)/) || 10;
    const estimatedTime = getNum(/estimated_time_minutes:\s*(\d+)/) || (difficulty === 'IChO' ? 25 : 15);

    results.push({
      id,
      pillar_number: pillarNumber,
      module_id: moduleId,
      subtopic,
      difficulty,
      question_style: questionStyle,
      title,
      question_text: questionText,
      curriculum,
      grade,
      curriculum_phase: curriculumPhase,
      sma_topic_number: smaTopicNumber,
      sma_topic_id: smaTopicId,
      total_points: totalPoints,
      estimated_time_minutes: estimatedTime,
      expected_final_answer: expectedFinalAnswer,
      solution_rubric: solutionRubric || null,
      solution_framework_template: solutionFrameworkTemplate || null,
      generation_type: 'manual',
      is_verified: true,
      tags: [curriculum, difficulty, `Pilar-${pillarNumber}`]
    });
  }

  return results;
}

async function runSync() {
  console.log('================================================================');
  console.log('🚀 SINKRONISASI BANK SOAL KE SUPABASE CLOUD (800 BUTIR MODULAR)');
  console.log('================================================================\n');

  // 1. Ekstrak seluruh butir soal dari berkas
  console.log('1. Membaca dan memvalidasi file modular...');
  let allQuestions = [];
  for (const f of files) {
    const questions = extractQuestionsFromFile(f);
    allQuestions = allQuestions.concat(questions);
  }

  console.log(`📊 Berhasil mengekstrak ${allQuestions.length} butir soal valid (Target: 800).\n`);

  if (allQuestions.length === 0) {
    console.error('❌ Tidak ada soal yang berhasil diekstrak.');
    return;
  }

  // 2. Periksa apakah kolom baru (curriculum, module_id, dll) sudah ada di Supabase
  console.log('2. Memeriksa ketersediaan skema kolom di Supabase...');
  let hasNewColumns = true;
  const probeQuestion = {
    id: 999999,
    pillar_number: 1,
    subtopic: 'Probe',
    difficulty: 'OSK',
    title: 'Probe Test',
    question_text: 'Probe question text',
    curriculum: 'osn',
    module_id: 1,
    grade: 'Kelas 10',
    sma_topic_number: 1,
    sma_topic_id: 101,
    curriculum_phase: 'Fase E'
  };

  const { error: probeErr } = await supabase.from('questions').insert([probeQuestion]);
  if (probeErr && probeErr.code === 'PGRST204') {
    hasNewColumns = false;
    console.log('ℹ️ Kolom baru (curriculum, module_id, dll) belum dibuat di Supabase.');
    console.log('  Data akan disesuaikan dengan skema dasar Supabase saat ini.');
    console.log('  👉 Untuk menyimpan metadata lengkap SMA, jalankan file:');
    console.log('     supabase/migration_add_question_curriculum_columns.sql\n');
  } else if (!probeErr) {
    console.log('✅ Skema tabel Supabase LENGKAP dengan seluruh kolom metadata baru!\n');
    await supabase.from('questions').delete().eq('id', 999999);
  }

  // Jika kolom baru belum ada di Supabase, hapus field tersebut agar tidak error PGRST204
  const payloadQuestions = allQuestions.map(q => {
    if (hasNewColumns) {
      return q;
    } else {
      const sanitized = { ...q };
      delete sanitized.curriculum;
      delete sanitized.module_id;
      delete sanitized.grade;
      delete sanitized.sma_topic_number;
      delete sanitized.sma_topic_id;
      delete sanitized.curriculum_phase;
      return sanitized;
    }
  });

  // 3. Batch Upload ke Supabase
  const BATCH_SIZE = 25;
  let successCount = 0;
  let errorCount = 0;

  console.log(`3. Memulai proses batch upload (${BATCH_SIZE} soal per batch)...`);

  for (let i = 0; i < payloadQuestions.length; i += BATCH_SIZE) {
    const batch = payloadQuestions.slice(i, i + BATCH_SIZE);
    const { error } = await supabase.from('questions').upsert(batch, { onConflict: 'id' });

    if (error) {
      console.error(`❌ Gagal batch ${i + 1} - ${i + batch.length}: ${error.message}`);
      errorCount += batch.length;
    } else {
      successCount += batch.length;
      process.stdout.write(`  ⬆️ Progress: ${successCount} / ${payloadQuestions.length} butir soal terunggah...\r`);
    }
  }

  console.log('\n\n================================================================');
  console.log(`🎉 HASIL AKHIR SINKRONISASI:`);
  console.log(`  • Berhasil diunggah ke Supabase : ${successCount} butir soal`);
  console.log(`  • Gagal                        : ${errorCount} butir soal`);
  console.log('================================================================');
}

runSync();
