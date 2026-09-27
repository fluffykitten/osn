/**
 * questService.ts
 * Layanan pelacakan, evaluasi status, dan klaim reward sistem Quest Belajar Berjenjang
 * terisolasi ketat per akun siswa dengan persistensi cloud Supabase & cache lokal.
 */

import { getSupabaseClient } from '../lib/supabaseClient';
import { gamificationService } from './gamificationService';
import { studentReadingService } from './studentReadingService';
import { OSN_MATERIALS } from '../data/materialsData';
import { getSmaTopicForOsnPillar } from '../utils/topicMapping';
import { PILLARS_DATA } from '../data/syllabusData';
import { SMA_TOPICS_META } from '../data/smaTopicsMeta';
import { questionBankService } from './questionBankService';
import { getSubmissionHistory, type SavedSubmissionRecord } from './submissionService';
import { getQuestionsForTopic, normalizeDifficultyTier } from '../utils/practiceDataUtils';
import type { PillarMasteryScore, Question } from '../types/database';

export type QuestType = 'sma_foundation' | 'olympiad_theory' | 'practice_drill' | 'milestone';
export type QuestStatus = 'not_started' | 'in_progress' | 'ready_to_claim' | 'completed';

export interface SmaQuestGroup {
  topicNumber: number;
  topicId: number;
  grade: 'Kelas 10' | 'Kelas 11' | 'Kelas 12';
  phase: 'Fase E' | 'Fase F';
  title: string;
  slug: string;
  summary: string;
  quests: LearningQuest[];
  totalXpAvailable: number;
  claimedXp: number;
  completedQuestsCount: number;
  isFullyCompleted: boolean;
  accuracyScore: number;
}

export interface LearningQuest {
  id: string; // e.g. "q-pillar-4-sma", "q-pillar-4-osn", "q-pillar-4-practice"
  pillarNumber: number;
  pillarName: string;
  type: QuestType;
  stepNumber: number;
  badgeLabel: string;
  title: string;
  targetTitle: string;
  description: string;
  xpReward: number;
  status: QuestStatus;
  progressPercent: number;
  actionUrl: string;
  actionLabel: string;
  isClaimed: boolean;
  claimedAt?: string;
  difficultyTier?: 'easy' | 'medium' | 'hard';
  solvedCount?: number;
  targetCount?: number;
}

export interface PillarQuestGroup {
  pillarNumber: number;
  pillarName: string;
  shortName: string;
  masteryScore: number;
  masteryLevel: 'not_started' | 'needs_remedial' | 'developing' | 'mastered';
  quests: LearningQuest[];
  totalXpAvailable: number;
  claimedXp: number;
  completedQuestsCount: number;
  isFullyCompleted: boolean;
}

export interface QuestBoardSummary {
  totalQuests: number;
  completedQuests: number;
  readyToClaimQuests: number;
  totalXpAvailable: number;
  totalXpClaimed: number;
  completionPercent: number;
}

export interface StoredQuestRecord {
  quest_id: string;
  pillar_number: number;
  quest_type: QuestType;
  status: QuestStatus;
  progress_percent: number;
  is_claimed: boolean;
  xp_reward: number;
  claimed_at?: string | null;
  updated_at?: string;
}

const LOCAL_STORAGE_CLAIMS_PREFIX = 'osn_quest_claims_';
const LOCAL_STORAGE_PROGRESS_PREFIX = 'osn_quest_progress_';

/**
 * Mengambil peta klaim reward quest dari cache lokal siswa
 */
function getLocalClaims(userId?: string): Record<string, { isClaimed: boolean; claimedAt: string }> {
  if (typeof window === 'undefined') return {};
  const key = `${LOCAL_STORAGE_CLAIMS_PREFIX}${userId || 'default'}`;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

/**
 * Menyimpan status klaim reward quest ke cache lokal siswa
 */
function saveLocalClaim(userId: string | undefined, questId: string): void {
  if (typeof window === 'undefined') return;
  const key = `${LOCAL_STORAGE_CLAIMS_PREFIX}${userId || 'default'}`;
  try {
    const existing = getLocalClaims(userId);
    existing[questId] = {
      isClaimed: true,
      claimedAt: new Date().toISOString(),
    };
    localStorage.setItem(key, JSON.stringify(existing));
  } catch {}
}

/**
 * Mengambil peta progres quest tersimpan dari Supabase Cloud (dengan fallback ke cache lokal)
 */
export async function syncQuestProgressFromCloud(
  userId?: string
): Promise<Record<string, StoredQuestRecord>> {
  const safeUserId = userId || 'default-student';
  const localCacheKey = `${LOCAL_STORAGE_PROGRESS_PREFIX}${safeUserId}`;
  let localCache: Record<string, StoredQuestRecord> = {};

  try {
    if (typeof window !== 'undefined') {
      const raw = localStorage.getItem(localCacheKey);
      if (raw) localCache = JSON.parse(raw);
    }
  } catch {}

  const supabase = getSupabaseClient();
  if (!supabase || !userId || userId === 'default-student') {
    return localCache;
  }

  try {
    const { data, error } = await supabase
      .from('student_quest_progress')
      .select('*')
      .eq('user_id', userId);

    if (!error && data && Array.isArray(data)) {
      const cloudMap: Record<string, StoredQuestRecord> = { ...localCache };
      data.forEach((row: any) => {
        cloudMap[row.quest_id] = {
          quest_id: row.quest_id,
          pillar_number: row.pillar_number,
          quest_type: row.quest_type,
          status: row.status,
          progress_percent: row.progress_percent || 0,
          is_claimed: Boolean(row.is_claimed),
          xp_reward: row.xp_reward || 50,
          claimed_at: row.claimed_at,
          updated_at: row.updated_at,
        };
      });

      // Cache ke local storage
      try {
        if (typeof window !== 'undefined') {
          localStorage.setItem(localCacheKey, JSON.stringify(cloudMap));
        }
      } catch {}

      return cloudMap;
    }
  } catch (err) {
    console.warn('[questService] Gagal sinkronisasi progres quest dari Supabase:', err);
  }

  return localCache;
}

/**
 * Menyimpan progres satu atau banyak quest ke database Supabase per akun siswa
 */
export async function persistQuestProgressToCloud(
  userId: string | undefined,
  quests: LearningQuest[]
): Promise<void> {
  if (!userId || userId === 'default-student' || !quests || quests.length === 0) return;

  const supabase = getSupabaseClient();
  if (!supabase) return;

  try {
    const records = quests.map((q) => ({
      id: `${userId}_${q.id}`,
      user_id: userId,
      quest_id: q.id,
      pillar_number: q.pillarNumber,
      quest_type: q.type,
      status: q.status,
      progress_percent: q.progressPercent,
      is_claimed: q.isClaimed,
      xp_reward: q.xpReward,
      claimed_at: q.claimedAt || null,
      updated_at: new Date().toISOString(),
    }));

    await supabase.from('student_quest_progress').upsert(records, {
      onConflict: 'id',
    });
  } catch (err: any) {
    console.warn('[questService] Gagal persistensi progres quest ke Supabase:', err?.message);
  }
}

/**
 * Mengambil status klaim dari Supabase Cloud (dengan fallback ke cache lokal)
 * @deprecated gunakan syncQuestProgressFromCloud untuk mengambil data status & progres menyeluruh
 */
export async function syncClaimsFromCloud(userId?: string): Promise<Record<string, { isClaimed: boolean; claimedAt: string }>> {
  const progressMap = await syncQuestProgressFromCloud(userId);
  const claimsMap: Record<string, { isClaimed: boolean; claimedAt: string }> = {};

  Object.values(progressMap).forEach((rec) => {
    if (rec.is_claimed) {
      claimsMap[rec.quest_id] = {
        isClaimed: true,
        claimedAt: rec.claimed_at || new Date().toISOString(),
      };
    }
  });

  return claimsMap;
}

/**
 * Membangun daftar 3 Quest Berjenjang untuk 1 pilar spesifik
 */
export function buildPillarQuests(
  pillarNumber: number,
  userId?: string,
  pillarScore?: PillarMasteryScore,
  cloudData?: Record<string, StoredQuestRecord> | Record<string, { isClaimed: boolean; claimedAt?: string }>
): LearningQuest[] {
  const localClaims = getLocalClaims(userId);

  // Metadata Pilar & Materi
  const pillarDef = PILLARS_DATA.find((p) => p.pillar_number === pillarNumber) || {
    pillar_number: pillarNumber,
    title: `Pilar #${pillarNumber}`,
  };

  const osnMaterial =
    OSN_MATERIALS.find((m) => m.topic_number === pillarNumber) || OSN_MATERIALS[0];
  const smaMaterial = getSmaTopicForOsnPillar(pillarNumber);

  // --- QUEST 1: FONDASI MATERI KIMIA SMA ---
  const q1Id = `q-p${pillarNumber}-sma`;
  const localSmaProgress = smaMaterial ? studentReadingService.getMaterialProgress('sma', smaMaterial.id) : 0;
  const cloud1 = cloudData ? (cloudData[q1Id] as any) : undefined;
  const smaProgress = Math.max(localSmaProgress, cloud1?.progress_percent || 0);
  const isQ1Claimed = Boolean(cloud1?.is_claimed || localClaims[q1Id]?.isClaimed);

  let q1Status: QuestStatus = 'not_started';
  if (isQ1Claimed) {
    q1Status = 'completed';
  } else if (smaProgress >= 80) {
    q1Status = 'ready_to_claim';
  } else if (smaProgress > 0) {
    q1Status = 'in_progress';
  }

  const quest1: LearningQuest = {
    id: q1Id,
    pillarNumber,
    pillarName: pillarDef.title,
    type: 'sma_foundation',
    stepNumber: 1,
    badgeLabel: 'Tahap 1: Prasyarat',
    title: 'Fondasi Teori SMA',
    targetTitle: smaMaterial ? smaMaterial.title : 'Konsep Dasar Kurikulum',
    description: 'Kaji ulang hukum dasar kimia, definisi istilah, dan persamaan reaksi awal.',
    xpReward: 50,
    status: q1Status,
    progressPercent: smaProgress,
    actionUrl: smaMaterial ? `/materi/${smaMaterial.slug}?db=sma` : '/materi?db=sma',
    actionLabel: isQ1Claimed ? 'Baca Ulang Materi SMA' : smaProgress > 0 ? 'Lanjutkan Baca SMA' : 'Mulai Baca Teori',
    isClaimed: isQ1Claimed,
    claimedAt: cloud1?.claimed_at || localClaims[q1Id]?.claimedAt,
  };

  // --- QUEST 2: MATERI KIMIA OLIMPIADE ---
  const q2Id = `q-p${pillarNumber}-osn`;
  const localOsnProgress = osnMaterial ? studentReadingService.getMaterialProgress('osn', osnMaterial.id) : 0;
  const cloud2 = cloudData ? (cloudData[q2Id] as any) : undefined;
  const osnProgress = Math.max(localOsnProgress, cloud2?.progress_percent || 0);
  const isQ2Claimed = Boolean(cloud2?.is_claimed || localClaims[q2Id]?.isClaimed);

  let q2Status: QuestStatus = 'not_started';
  if (isQ2Claimed) {
    q2Status = 'completed';
  } else if (osnProgress >= 80) {
    q2Status = 'ready_to_claim';
  } else if (osnProgress > 0) {
    q2Status = 'in_progress';
  }

  const quest2: LearningQuest = {
    id: q2Id,
    pillarNumber,
    pillarName: pillarDef.title,
    type: 'olympiad_theory',
    stepNumber: 2,
    badgeLabel: 'Tahap 2: Inti OSN',
    title: 'Materi Kimia Olimpiade',
    targetTitle: osnMaterial.title,
    description: 'Penurunan rumus matematis, batasan termodinamika, dan analisis konsep lanjutan.',
    xpReward: 75,
    status: q2Status,
    progressPercent: osnProgress,
    actionUrl: `/materi/${osnMaterial.slug}?db=osn`,
    actionLabel: isQ2Claimed ? 'Buka Kembali Materi OSN' : osnProgress > 0 ? 'Lanjutkan Bedah Teori' : 'Mulai Bedah Teori',
    isClaimed: isQ2Claimed,
    claimedAt: cloud2?.claimed_at || localClaims[q2Id]?.claimedAt,
  };

  // --- QUEST 3: UJI MANDIRI DI BANK SOAL ---
  const q3Id = `q-p${pillarNumber}-practice`;
  const cloud3 = cloudData ? (cloudData[q3Id] as any) : undefined;
  const masteryScore = pillarScore?.score || 0;
  const submissionsCount = pillarScore?.submissionsCount || 0;
  const isQ3Claimed = Boolean(cloud3?.is_claimed || localClaims[q3Id]?.isClaimed);

  let q3Status: QuestStatus = 'not_started';
  if (isQ3Claimed) {
    q3Status = 'completed';
  } else if (masteryScore >= 75) {
    q3Status = 'ready_to_claim';
  } else if (submissionsCount > 0 || (cloud3 && cloud3.status === 'in_progress')) {
    q3Status = 'in_progress';
  }

  const practiceProgress = Math.min(100, Math.max(Math.round((masteryScore / 75) * 100), cloud3?.progress_percent || 0));

  const quest3: LearningQuest = {
    id: q3Id,
    pillarNumber,
    pillarName: pillarDef.title,
    type: 'practice_drill',
    stepNumber: 3,
    badgeLabel: 'Tahap 3: Target Skor',
    title: 'Uji Mandiri di Bank Soal',
    targetTitle: `Target Penguasaan Skor 75+`,
    description: 'Selesaikan latihan soal di Bank Soal hingga mencapai skor pemahaman tuntas 75%.',
    xpReward: 100,
    status: q3Status,
    progressPercent: practiceProgress,
    actionUrl: `/practice/${pillarNumber}`,
    actionLabel: isQ3Claimed ? 'Latihan Tambahan' : practiceProgress > 0 ? 'Lanjutkan Latihan' : 'Mulai Latihan Soal',
    isClaimed: isQ3Claimed,
    claimedAt: cloud3?.claimed_at || localClaims[q3Id]?.claimedAt,
  };

  return [quest1, quest2, quest3];
}

/**
 * Membangun seluruh Papan Misi 10 Pilar OSN Kimia (Total 30 Misi)
 */
export async function getAllPillarQuestGroups(
  userId?: string,
  pillarScores: PillarMasteryScore[] = []
): Promise<{
  groups: PillarQuestGroup[];
  summary: QuestBoardSummary;
}> {
  const cloudProgressMap = await syncQuestProgressFromCloud(userId);
  const scoreMap = new Map<number, PillarMasteryScore>();
  pillarScores.forEach((p) => scoreMap.set(p.pillarNumber, p));

  const groups: PillarQuestGroup[] = [];
  let totalQuestsCount = 0;
  let completedQuestsCount = 0;
  let readyToClaimCount = 0;
  let totalXpAvailable = 0;
  let totalXpClaimed = 0;

  for (let i = 1; i <= 10; i++) {
    const pScore = scoreMap.get(i);
    const quests = buildPillarQuests(i, userId, pScore, cloudProgressMap);

    const pillarDef = PILLARS_DATA.find((p) => p.pillar_number === i) || {
      pillar_number: i,
      title: `Pilar #${i}`,
    };

    let pClaimedXp = 0;
    let pCompletedCount = 0;
    let pTotalXp = 0;

    quests.forEach((q) => {
      totalQuestsCount++;
      pTotalXp += q.xpReward;
      totalXpAvailable += q.xpReward;

      if (q.isClaimed) {
        pClaimedXp += q.xpReward;
        totalXpClaimed += q.xpReward;
        pCompletedCount++;
        completedQuestsCount++;
      } else if (q.status === 'ready_to_claim') {
        readyToClaimCount++;
      }
    });

    groups.push({
      pillarNumber: i,
      pillarName: pillarDef.title,
      shortName: `T${i}`,
      masteryScore: pScore?.score || 0,
      masteryLevel: pScore?.masteryLevel || 'not_started',
      quests,
      totalXpAvailable: pTotalXp,
      claimedXp: pClaimedXp,
      completedQuestsCount: pCompletedCount,
      isFullyCompleted: pCompletedCount === quests.length,
    });
  }

  const completionPercent =
    totalQuestsCount > 0 ? Math.round((completedQuestsCount / totalQuestsCount) * 100) : 0;

  const summary: QuestBoardSummary = {
    totalQuests: totalQuestsCount,
    completedQuests: completedQuestsCount,
    readyToClaimQuests: readyToClaimCount,
    totalXpAvailable,
    totalXpClaimed,
    completionPercent,
  };

  return { groups, summary };
}

/**
 * Mengklaim hadiah XP dari quest yang telah selesai
 */
export async function claimQuestReward(
  quest: LearningQuest,
  userId?: string
): Promise<{ success: boolean; xpAwarded: number; newLevel?: number }> {
  const safeUserId = userId || 'default-student';

  // 1. Simpan klaim ke cache lokal segera
  saveLocalClaim(safeUserId, quest.id);

  // 2. Berikan XP ke akun siswa
  const awardRes = await gamificationService.awardXp(safeUserId, quest.xpReward, {
    reason: `Misi Selesai: ${quest.title} (Pilar #${quest.pillarNumber})`,
  });

  // 3. Simpan rekam jejak ke Supabase jika terhubung
  const supabase = getSupabaseClient();
  if (supabase && safeUserId !== 'default-student') {
    try {
      await supabase.from('student_quest_progress').upsert([
        {
          id: `${safeUserId}_${quest.id}`,
          user_id: safeUserId,
          quest_id: quest.id,
          pillar_number: quest.pillarNumber,
          quest_type: quest.type,
          status: 'completed',
          progress_percent: 100,
          is_claimed: true,
          xp_reward: quest.xpReward,
          claimed_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ]);
    } catch (err: any) {
      console.warn('[questService] Gagal persistensi klaim quest ke Supabase:', err?.message);
    }
  }

  // 4. Siarkan event klaim quest
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('osn_quest_claimed', {
        detail: {
          questId: quest.id,
          pillarNumber: quest.pillarNumber,
          xpReward: quest.xpReward,
          userId: safeUserId,
        },
      })
    );
  }

  return {
    success: true,
    xpAwarded: quest.xpReward,
    newLevel: awardRes.newLevel,
  };
}

/**
 * Membangun seluruh Misi Jalur Materi Kimia SMA (16 Modul Terstruktur)
 * Alur mirip OSN: 1 box terdiri atas 1 modul, berisi:
 * 1. Misi Membaca Materi Modul (+50 XP)
 * 2. Misi 3 Soal Tingkat Mudah (apabila ada, +40 XP)
 * 3. Misi 3 Soal Tingkat Sedang (+50 XP)
 * 4. Misi 3 Soal Tingkat Sulit (+75 XP)
 */
export async function getSmaQuestGroups(
  userId?: string,
  providedQuestions?: Question[],
  providedSubmissions?: SavedSubmissionRecord[]
): Promise<{
  groups: SmaQuestGroup[];
  summary: QuestBoardSummary;
}> {
  const [cloudProgressMap, qResult] = await Promise.all([
    syncQuestProgressFromCloud(userId),
    providedQuestions && providedQuestions.length > 0
      ? Promise.resolve({ questions: providedQuestions })
      : questionBankService.getQuestions(),
  ]);

  const allQuestions = qResult.questions || [];
  const submissions =
    providedSubmissions !== undefined
      ? providedSubmissions
      : getSubmissionHistory(userId);
  const localClaims = getLocalClaims(userId);

  // Set ID soal yang telah diselesaikan siswa dengan skor tuntas (>= 70% atau status perfect)
  const solvedQuestionIds = new Set<number>(
    submissions
      .filter((s) => s.status === 'perfect' || s.scorePercentage >= 70)
      .map((s) => s.questionId)
  );

  const groups: SmaQuestGroup[] = [];
  let totalQuestsCount = 0;
  let completedQuestsCount = 0;
  let readyToClaimCount = 0;
  let totalXpAvailable = 0;
  let totalXpClaimed = 0;

  // Urutkan 16 modul SMA berdasarkan topic_number (1 s/d 16)
  const sortedTopics = [...SMA_TOPICS_META].sort((a, b) => a.topic_number - b.topic_number);

  for (const topic of sortedTopics) {
    const topicNum = topic.topic_number;
    const modQuestions = getQuestionsForTopic(allQuestions, topicNum, 'sma');

    // Filter berdasarkan 3 tier kesulitan: easy, medium, hard
    const easyQuestions = modQuestions.filter((q) => normalizeDifficultyTier(q.difficulty) === 'easy');
    const mediumQuestions = modQuestions.filter((q) => normalizeDifficultyTier(q.difficulty) === 'medium');
    const hardQuestions = modQuestions.filter((q) => normalizeDifficultyTier(q.difficulty) === 'hard');

    const quests: LearningQuest[] = [];
    let stepCounter = 1;

    // --- QUEST 1: MEMBACA MATERI MODUL ---
    const q1Id = `q-sma-m${topicNum}-theory`;
    const legacyQId = `q-sma-${topic.id}`;
    const localReadingProgress = studentReadingService.getMaterialProgress('sma', topic.id);
    const cloudReadingItem = cloudProgressMap[q1Id] || cloudProgressMap[legacyQId];
    const readingProgress = Math.max(localReadingProgress, cloudReadingItem?.progress_percent || 0);
    const isQ1Claimed = Boolean(
      cloudReadingItem?.is_claimed ||
      localClaims[q1Id]?.isClaimed ||
      localClaims[legacyQId]?.isClaimed
    );

    let q1Status: QuestStatus = 'not_started';
    if (isQ1Claimed) {
      q1Status = 'completed';
    } else if (readingProgress >= 80) {
      q1Status = 'ready_to_claim';
    } else if (readingProgress > 0) {
      q1Status = 'in_progress';
    }

    quests.push({
      id: q1Id,
      pillarNumber: topicNum,
      pillarName: `Modul #${topicNum}: ${topic.title}`,
      type: 'sma_foundation',
      stepNumber: stepCounter++,
      badgeLabel: 'Teori Fondasi',
      title: 'Bedah Teori Modul',
      targetTitle: 'Konsep Inti & Rangkuman',
      description: 'Kaji tuntas ringkasan teori, hukum kimia, dan contoh pemahaman dasar.',
      xpReward: 50,
      status: q1Status,
      progressPercent: readingProgress,
      actionUrl: `/materi/${topic.slug}?db=sma`,
      actionLabel: isQ1Claimed
        ? 'Buka Ulang Teori'
        : readingProgress > 0
        ? 'Lanjutkan Membaca'
        : 'Mulai Baca Teori',
      isClaimed: isQ1Claimed,
      claimedAt: cloudReadingItem?.claimed_at || localClaims[q1Id]?.claimedAt,
      solvedCount: readingProgress >= 80 ? 1 : 0,
      targetCount: 1,
    });

    // --- QUEST 2: 3 SOAL TINGKAT MUDAH (APABILA ADA) ---
    if (easyQuestions.length > 0) {
      const q2Id = `q-sma-m${topicNum}-easy`;
      const cloudEasyItem = cloudProgressMap[q2Id];
      const isQ2Claimed = Boolean(cloudEasyItem?.is_claimed || localClaims[q2Id]?.isClaimed);

      const targetEasy = Math.min(3, easyQuestions.length);
      const solvedEasy = easyQuestions.filter((q) => solvedQuestionIds.has(q.id)).length;
      const easyProgress = targetEasy > 0 ? Math.min(100, Math.round((solvedEasy / targetEasy) * 100)) : 0;

      let q2Status: QuestStatus = 'not_started';
      if (isQ2Claimed) {
        q2Status = 'completed';
      } else if (solvedEasy >= targetEasy) {
        q2Status = 'ready_to_claim';
      } else if (solvedEasy > 0 || (cloudEasyItem && cloudEasyItem.status === 'in_progress')) {
        q2Status = 'in_progress';
      }

      const easyStepNumber = stepCounter++;
      quests.push({
        id: q2Id,
        pillarNumber: topicNum,
        pillarName: `Modul #${topicNum}: ${topic.title}`,
        type: 'practice_drill',
        stepNumber: easyStepNumber,
        difficultyTier: 'easy',
        badgeLabel: 'Level 1: Pemanasan',
        title: '3 Soal Mudah',
        targetTitle: 'Fondasi & Definisi',
        description: 'Latih pemahaman konsep awal lewat 3 soal berbobot mudah di Bank Soal.',
        xpReward: 40,
        status: q2Status,
        progressPercent: easyProgress,
        actionUrl: `/practice/sma/${topicNum}?difficulty=easy`,
        actionLabel: isQ2Claimed
          ? 'Buka Ulang Soal'
          : solvedEasy > 0
          ? 'Lanjutkan Latihan'
          : 'Mulai Soal Mudah',
        isClaimed: isQ2Claimed,
        claimedAt: cloudEasyItem?.claimed_at || localClaims[q2Id]?.claimedAt,
        solvedCount: solvedEasy,
        targetCount: targetEasy,
      });
    }

    // --- QUEST 3: 3 SOAL TINGKAT SEDANG ---
    const q3Id = `q-sma-m${topicNum}-medium`;
    const cloudMedItem = cloudProgressMap[q3Id];
    const isQ3Claimed = Boolean(cloudMedItem?.is_claimed || localClaims[q3Id]?.isClaimed);

    const targetMed = Math.min(3, mediumQuestions.length || 3);
    const solvedMed = mediumQuestions.filter((q) => solvedQuestionIds.has(q.id)).length;
    const medProgress = targetMed > 0 ? Math.min(100, Math.round((solvedMed / targetMed) * 100)) : 0;

    let q3Status: QuestStatus = 'not_started';
    if (isQ3Claimed) {
      q3Status = 'completed';
    } else if (solvedMed >= targetMed) {
      q3Status = 'ready_to_claim';
    } else if (solvedMed > 0 || (cloudMedItem && cloudMedItem.status === 'in_progress')) {
      q3Status = 'in_progress';
    }

    const medStepNumber = stepCounter++;
    quests.push({
      id: q3Id,
      pillarNumber: topicNum,
      pillarName: `Modul #${topicNum}: ${topic.title}`,
      type: 'practice_drill',
      stepNumber: medStepNumber,
      difficultyTier: 'medium',
      badgeLabel: 'Level 2: Pemantapan',
      title: '3 Soal Sedang',
      targetTitle: 'Aplikasi Rumus & Perhitungan',
      description: 'Uji penerapan rumus kuantitatif dan penalaran terstruktur modul.',
      xpReward: 50,
      status: q3Status,
      progressPercent: medProgress,
      actionUrl: `/practice/sma/${topicNum}?difficulty=medium`,
      actionLabel: isQ3Claimed
        ? 'Buka Ulang Soal'
        : solvedMed > 0
        ? 'Lanjutkan Latihan'
        : 'Mulai Soal Sedang',
      isClaimed: isQ3Claimed,
      claimedAt: cloudMedItem?.claimed_at || localClaims[q3Id]?.claimedAt,
      solvedCount: solvedMed,
      targetCount: targetMed,
    });

    // --- QUEST 4: 3 SOAL TINGKAT SULIT ---
    const q4Id = `q-sma-m${topicNum}-hard`;
    const cloudHardItem = cloudProgressMap[q4Id];
    const isQ4Claimed = Boolean(cloudHardItem?.is_claimed || localClaims[q4Id]?.isClaimed);

    const targetHard = Math.min(3, hardQuestions.length || 3);
    const solvedHard = hardQuestions.filter((q) => solvedQuestionIds.has(q.id)).length;
    const hardProgress = targetHard > 0 ? Math.min(100, Math.round((solvedHard / targetHard) * 100)) : 0;

    let q4Status: QuestStatus = 'not_started';
    if (isQ4Claimed) {
      q4Status = 'completed';
    } else if (solvedHard >= targetHard) {
      q4Status = 'ready_to_claim';
    } else if (solvedHard > 0 || (cloudHardItem && cloudHardItem.status === 'in_progress')) {
      q4Status = 'in_progress';
    }

    const hardStepNumber = stepCounter++;
    quests.push({
      id: q4Id,
      pillarNumber: topicNum,
      pillarName: `Modul #${topicNum}: ${topic.title}`,
      type: 'practice_drill',
      stepNumber: hardStepNumber,
      difficultyTier: 'hard',
      badgeLabel: 'Level 3: Bos Modul',
      title: '3 Soal Sulit',
      targetTitle: 'Tantangan Olimpiade & Analisis',
      description: 'Taklukkan problem analitis tingkat tinggi bertaraf kompetisi sains SMA.',
      xpReward: 75,
      status: q4Status,
      progressPercent: hardProgress,
      actionUrl: `/practice/sma/${topicNum}?difficulty=hard`,
      actionLabel: isQ4Claimed
        ? 'Buka Ulang Soal'
        : solvedHard > 0
        ? 'Lanjutkan Tantangan'
        : 'Mulai Soal Sulit',
      isClaimed: isQ4Claimed,
      claimedAt: cloudHardItem?.claimed_at || localClaims[q4Id]?.claimedAt,
      solvedCount: solvedHard,
      targetCount: targetHard,
    });

    // Ringkasan Modul
    let mClaimedXp = 0;
    let mCompletedCount = 0;
    let mTotalXp = 0;

    quests.forEach((q) => {
      totalQuestsCount++;
      mTotalXp += q.xpReward;
      totalXpAvailable += q.xpReward;

      if (q.isClaimed) {
        mClaimedXp += q.xpReward;
        totalXpClaimed += q.xpReward;
        mCompletedCount++;
        completedQuestsCount++;
      } else if (q.status === 'ready_to_claim') {
        readyToClaimCount++;
      }
    });

    // Hitung rata-rata skor akurasi pengerjaan siswa pada topik ini
    const topicSubmissions = submissions.filter((s) => modQuestions.some((q) => q.id === s.questionId));
    const accuracyScore =
      topicSubmissions.length > 0
        ? Math.round(topicSubmissions.reduce((acc, curr) => acc + curr.scorePercentage, 0) / topicSubmissions.length)
        : 0;

    groups.push({
      topicNumber: topicNum,
      topicId: topic.id,
      grade: topic.grade,
      phase: topic.curriculumPhase,
      title: topic.title,
      slug: topic.slug,
      summary: topic.summary,
      quests,
      totalXpAvailable: mTotalXp,
      claimedXp: mClaimedXp,
      completedQuestsCount: mCompletedCount,
      isFullyCompleted: mCompletedCount === quests.length,
      accuracyScore,
    });
  }

  const completionPercent =
    totalQuestsCount > 0 ? Math.round((completedQuestsCount / totalQuestsCount) * 100) : 0;

  const summary: QuestBoardSummary = {
    totalQuests: totalQuestsCount,
    completedQuests: completedQuestsCount,
    readyToClaimQuests: readyToClaimCount,
    totalXpAvailable,
    totalXpClaimed,
    completionPercent,
  };

  return { groups, summary };
}

export const questService = {
  buildPillarQuests,
  getAllPillarQuestGroups,
  getSmaQuestGroups,
  claimQuestReward,
  syncClaimsFromCloud,
  syncQuestProgressFromCloud,
  persistQuestProgressToCloud,
};
