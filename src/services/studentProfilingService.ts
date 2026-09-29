/**
 * studentProfilingService.ts
 * Layanan terpadu untuk agregasi data profil siswa binaan bagi Guru Pembina:
 * - Identitas & profil sekolah (Supabase public.profiles / fallback lokal)
 * - Pangkat & level gamifikasi (getLevelFromXp)
 * - Statistik & riwayat pengerjaan soal (worksheet_submissions)
 * - Analitik penguasaan 10 Pilar Silabus OSN Kimia (calculatePillarMastery)
 * - Progres literasi materi & modul (studentReadingService)
 * - Koleksi lencana & pencapaian (ACHIEVEMENTS & achievementService)
 * 
 * Mengutamakan keandalan (anti-hallucination) dengan resolusi identitas bertingkat
 * dan penanganan fallback aman (safe zero-division, offline cache).
 */

import { getSupabaseClient } from '../lib/supabaseClient';
import type {
  ClassroomMember,
  PillarMasteryScore,
  SavedSubmissionRecord,
} from '../types/database';
import { getSubmissionHistory, calculatePillarMastery } from './submissionService';
import {
  studentReadingService,
  type ReadingProgressSummary,
} from './studentReadingService';
import {
  getStudentAchievements,
  type StudentAchievementProgress,
} from './achievementService';
import {
  ACHIEVEMENTS,
  type AchievementDefinition,
} from '../utils/achievementConstants';
import {
  getLevelFromXp,
  type ChemistryLevelDefinition,
} from '../utils/gamificationConstants';

export interface StudentProfileData {
  userId: string;
  email: string;
  fullName: string;
  avatarUrl?: string;
  schoolName?: string;
  gradeLevel?: string;
  targetOlympiad?: string;
  joinedAt?: string;
  status: 'active' | 'invited' | 'pending_approval';

  // Gamifikasi
  xp: number;
  level: number;
  levelDefinition: ChemistryLevelDefinition;
  currentStreak: number;

  // Statistik Pengerjaan Soal
  totalQuestionsAttempted: number;
  perfectCount: number;
  partialCount: number;
  incorrectCount: number;
  accuracyRate: number; // 0 - 100%
  totalElapsedSeconds: number;
  averageScore: number; // Skala 0 - 10
  pillarMastery: PillarMasteryScore[]; // 10 Pilar Silabus OSN
  recentSubmissions: SavedSubmissionRecord[];

  // Literasi & Modul Terbaca
  readingSummary: {
    osnCompletedCount: number;
    osnTotalCount: number;
    smaCompletedCount: number;
    smaTotalCount: number;
    overallPercent: number;
    completedOsnTopicIds: number[];
    completedSmaTopicIds: number[];
  };

  // Pencapaian & Lencana
  unlockedAchievementsCount: number;
  totalAchievementsCount: number;
  achievements: Array<{
    definition: AchievementDefinition;
    progress: StudentAchievementProgress;
  }>;
}

class StudentProfilingService {
  /**
   * Mengambil data profil lengkap seorang siswa binaan secara paralel dan aman
   */
  public async getStudentFullProfile(
    member: ClassroomMember
  ): Promise<StudentProfileData> {
    const cleanEmail = (member.student_email || '').trim().toLowerCase();
    const candidateId = member.student_id || null;

    // 1. Resolusi Akun & Profil (Supabase public.profiles)
    const profile = await this.resolveUserProfile(cleanEmail, candidateId, member.student_name);
    const effectiveUserId = profile.id;

    // 2. Fetch data paralel (Submissions, Achievements, Reading) dengan Promise.allSettled
    const [submissionsResult, achievementsResult] = await Promise.allSettled([
      this.fetchStudentSubmissions([effectiveUserId, cleanEmail, candidateId].filter(Boolean) as string[]),
      getStudentAchievements(effectiveUserId),
    ]);

    const submissions = submissionsResult.status === 'fulfilled' ? submissionsResult.value : [];
    const achievementsMap = achievementsResult.status === 'fulfilled' ? achievementsResult.value : {};

    // 3. Kalkulasi Metrik Pengerjaan Soal
    const totalQuestionsAttempted = submissions.length;
    const perfectCount = submissions.filter((s) => s.status === 'perfect').length;
    const partialCount = submissions.filter((s) => s.status === 'partial_correct').length;
    const incorrectCount = submissions.filter((s) => s.status === 'incorrect').length;

    const accuracyRate =
      totalQuestionsAttempted > 0
        ? Math.round((perfectCount / totalQuestionsAttempted) * 100)
        : 0;

    const totalElapsedSeconds = submissions.reduce(
      (sum, s) => sum + (Number(s.elapsedSeconds) || 0),
      0
    );

    const sumScores = submissions.reduce(
      (sum, s) => sum + (Number(s.totalScore) || 0),
      0
    );
    const averageScore =
      totalQuestionsAttempted > 0
        ? Math.round((sumScores / totalQuestionsAttempted) * 10) / 10
        : 0;

    const pillarMastery = calculatePillarMastery(
      submissions.length > 0 ? submissions : undefined
    );

    // 4. Data Literasi Membaca
    const readingSummaryRaw = studentReadingService.getReadingProgressSummary(effectiveUserId);
    const { completedOsnTopicIds, completedSmaTopicIds } = this.getCompletedTopicIds();

    const readingSummary = {
      osnCompletedCount: Math.max(readingSummaryRaw.osnCompletedCount, completedOsnTopicIds.length),
      osnTotalCount: readingSummaryRaw.osnTotalCount || 10,
      smaCompletedCount: Math.max(readingSummaryRaw.smaCompletedCount, completedSmaTopicIds.length),
      smaTotalCount: readingSummaryRaw.smaTotalCount || 16,
      overallPercent: readingSummaryRaw.overallPercent,
      completedOsnTopicIds,
      completedSmaTopicIds,
    };

    // 5. Pencapaian & Lencana (Gamification)
    const achievementList = ACHIEVEMENTS.map((def) => {
      const prog = achievementsMap[def.id] || {
        achievementId: def.id,
        currentValue: 0,
        targetValue: def.targetValue,
        progress: 0,
        isUnlocked: false,
      };
      return {
        definition: def,
        progress: prog,
      };
    });

    const unlockedAchievementsCount = achievementList.filter(
      (a) => a.progress.isUnlocked
    ).length;

    // 6. Level & Gelar Gamifikasi
    const levelDefinition = getLevelFromXp(profile.xp);

    return {
      userId: effectiveUserId,
      email: cleanEmail,
      fullName: profile.full_name || member.student_name || 'Calon Medalis OSN',
      avatarUrl: profile.avatar_url,
      schoolName: profile.school_name,
      gradeLevel: profile.grade_level,
      targetOlympiad: profile.target_olympiad,
      joinedAt: member.joined_at || member.invited_at,
      status: member.status,

      xp: profile.xp,
      level: profile.level || levelDefinition.level,
      levelDefinition,
      currentStreak: profile.current_streak,

      totalQuestionsAttempted,
      perfectCount,
      partialCount,
      incorrectCount,
      accuracyRate,
      totalElapsedSeconds,
      averageScore,
      pillarMastery,
      recentSubmissions: submissions.slice(0, 10),

      readingSummary,

      unlockedAchievementsCount,
      totalAchievementsCount: ACHIEVEMENTS.length,
      achievements: achievementList,
    };
  }

  /**
   * Resolusi profil pengguna di Supabase (fallback ke member data jika offline)
   */
  private async resolveUserProfile(
    email: string,
    studentId: string | null,
    fallbackName?: string | null
  ): Promise<{
    id: string;
    full_name: string;
    email: string;
    xp: number;
    level: number;
    current_streak: number;
    avatar_url?: string;
    school_name?: string;
    grade_level?: string;
    target_olympiad?: string;
  }> {
    const supabase = getSupabaseClient();
    const fallbackId = studentId || `student-${email.replace(/[^a-zA-Z0-9]/g, '_')}`;

    if (supabase) {
      try {
        let query = supabase.from('profiles').select('*');
        if (studentId) {
          query = query.eq('id', studentId);
        } else {
          query = query.eq('email', email);
        }

        const { data, error } = await query.maybeSingle();
        if (data && !error) {
          return {
            id: data.id,
            full_name: data.full_name || fallbackName || email.split('@')[0],
            email: data.email || email,
            xp: Number(data.xp) || 0,
            level: Number(data.level) || 1,
            current_streak: Number(data.current_streak) || 1,
            avatar_url: data.avatar_url,
            school_name: data.school_name || 'SMA Mitra Binaan OSN',
            grade_level: data.grade_level || 'Kelas 11 SMA',
            target_olympiad: data.target_olympiad || 'OSN Tingkat Nasional',
          };
        }
      } catch (err) {
        console.warn('[studentProfilingService] Gagal fetch profil dari cloud:', err);
      }
    }

    // Fallback Offline / Local
    return {
      id: fallbackId,
      full_name: fallbackName || email.split('@')[0],
      email,
      xp: 0,
      level: 1,
      current_streak: 1,
      school_name: 'SMA Mitra Binaan OSN',
      grade_level: 'Kelas 11 SMA',
      target_olympiad: 'OSN Tingkat Nasional',
    };
  }

  /**
   * Mengambil riwayat submissions siswa dari Cloud & Local Storage
   */
  private async fetchStudentSubmissions(
    candidateIds: string[]
  ): Promise<SavedSubmissionRecord[]> {
    const matchedMap = new Map<string, SavedSubmissionRecord>();

    // 1. Ambil dari Supabase jika online
    const supabase = getSupabaseClient();
    if (supabase && candidateIds.length > 0) {
      try {
        const { data, error } = await supabase
          .from('worksheet_submissions')
          .select('*')
          .in('user_id', candidateIds)
          .order('created_at', { ascending: false });

        if (data && !error) {
          for (const row of data) {
            matchedMap.set(row.id, {
              id: row.id,
              userId: row.user_id,
              questionId: Number(row.question_id),
              questionTitle: row.subtopic || `Soal #${row.question_id}`,
              pillarNumber: Number(row.pillar_number) || 1,
              subtopic: row.subtopic || '',
              studentWorkSteps: row.student_work_steps || '',
              studentFinalAnswer: row.student_final_answer || '',
              totalScore: Number(row.total_score) || 0,
              maxScore: Number(row.max_score) || 10,
              scorePercentage: Math.round(((Number(row.total_score) || 0) / (Number(row.max_score) || 10)) * 100),
              status: row.status || 'in_progress',
              criteriaBreakdown: row.criteria_breakdown || [],
              overallFeedback: row.overall_feedback || '',
              strengths: row.strengths || [],
              missingOrIncorrectPoints: row.missing_points || [],
              misconceptionDiagnosis: row.misconception_diagnosis,
              suggestedReviewTopic: row.suggested_review_topic,
              xpAwarded: row.xp_awarded || 0,
              confidenceScore: row.confidence_score || 0.9,
              elapsedSeconds: Number(row.elapsed_seconds) || 0,
              gradedAt: row.created_at || new Date().toISOString(),
              modelUsed: row.model_used,
              syncedToCloud: true,
            });
          }
        }
      } catch (err) {
        console.warn('[studentProfilingService] Gagal fetch submissions dari cloud:', err);
      }
    }

    // 2. Ambil dari Local Submissions Cache
    const localAll = getSubmissionHistory();
    for (const sub of localAll) {
      const rawUserId = sub.userId || (sub as any).user_id;
      if (candidateIds.includes(rawUserId)) {
        if (!matchedMap.has(sub.id)) {
          matchedMap.set(sub.id, sub);
        }
      }
    }

    return Array.from(matchedMap.values()).sort(
      (a, b) => new Date(b.gradedAt).getTime() - new Date(a.gradedAt).getTime()
    );
  }

  /**
   * Helper untuk membaca array ID modul yang telah ditandai tuntas dari LocalStorage
   */
  private getCompletedTopicIds(): { completedOsnTopicIds: number[]; completedSmaTopicIds: number[] } {
    try {
      if (typeof window === 'undefined') {
        return { completedOsnTopicIds: [], completedSmaTopicIds: [] };
      }
      const rawOsn = localStorage.getItem('osn_completed_materials');
      const rawSma = localStorage.getItem('sma_completed_materials');

      const completedOsnTopicIds = rawOsn ? JSON.parse(rawOsn) : [];
      const completedSmaTopicIds = rawSma ? JSON.parse(rawSma) : [];

      return {
        completedOsnTopicIds: Array.isArray(completedOsnTopicIds) ? completedOsnTopicIds : [],
        completedSmaTopicIds: Array.isArray(completedSmaTopicIds) ? completedSmaTopicIds : [],
      };
    } catch {
      return { completedOsnTopicIds: [], completedSmaTopicIds: [] };
    }
  }
}

export const studentProfilingService = new StudentProfilingService();
