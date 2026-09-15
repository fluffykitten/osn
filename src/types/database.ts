export type UserRole = 'siswa' | 'guru';
export type QuestionDifficulty = 'OSK' | 'OSP' | 'OSN' | 'IChO';
export type GenerationVariant = 'manual' | 'pdf_extracted' | 'twin_parallel' | 'scaffolding' | 'challenging_extension';
export type WorksheetType = 'static_module' | 'teacher_assignment';
export type SubmissionStatus = 'in_progress' | 'submitted' | 'reviewed';
export type AiStatus = 'perfect' | 'partial_correct' | 'incorrect';

export interface Profile {
  id: string;
  full_name: string;
  role: UserRole;
  xp: number;
  level: number;
  current_streak: number;
  last_activity_date: string;
  avatar_url?: string;
  created_at: string;
}

export interface Classroom {
  id: number;
  teacher_id: string;
  name: string;
  code: string;
  description?: string;
  created_at: string;
  member_count?: number;
}

export interface ModuleItem {
  id: number;
  pillar_number: number;
  category: string;
  title: string;
  slug: string;
  description: string;
  order_index: number;
  content_markdown: string;
  created_at?: string;
  is_completed?: boolean;
}

export interface Tag {
  id: number;
  name: string;
  category: string;
}

export type QuestionStyle = 'structured' | 'mcq' | 'calculation' | 'data_analysis';

export interface DataTable {
  caption?: string;
  headers: string[];
  rows: (string | number)[][];
}

export interface SubQuestion {
  label: string; // e.g. "a", "b", "c"
  question_text: string;
  points: number;
  rubric?: string;
  expected_answer?: string;
  guidance?: string;
  common_misconceptions?: string[];
  diagram_url?: string;
}

export interface Question {
  id: number;
  module_id?: number | null;
  pillar_number: number;
  subtopic: string;
  difficulty: QuestionDifficulty;
  question_style?: QuestionStyle;
  title: string;
  question_text: string;
  sub_questions?: SubQuestion[];
  data_tables?: DataTable[];
  diagram_url?: string;
  diagram_box?: [number, number, number, number];
  parent_question_id?: number | null;
  generation_type: GenerationVariant;
  source_pdf_url?: string;
  source_event?: string; // e.g. "OSK Kimia 2024", "OSP 2023", "IChO 2022"
  year?: number;
  estimated_time_minutes?: number;
  total_points?: number;
  is_bookmarked?: boolean;
  custom_tags?: string[];
  common_misconceptions?: string[];
  created_by?: string;
  is_verified?: boolean;
  created_at?: string;
  tags?: string[];
  // Protected fields (only in teacher / AI context)
  solution_rubric?: string;
  expected_final_answer?: string;
  solution_framework_template?: string; // Metadata kerangka 4 langkah pengerjaan terpersonalisasi (scaffold)
}

export interface QuestionFilter {
  search?: string;
  difficulty?: QuestionDifficulty | 'ALL';
  pillarNumber?: number | 'ALL';
  questionStyle?: QuestionStyle | 'ALL';
  yearRange?: [number, number];
  sourceEvent?: string;
  bookmarkedOnly?: boolean;
  selectedTags?: string[];
  sortBy?: 'newest' | 'oldest' | 'difficulty' | 'pillar' | 'points';
}

export interface QuestionSolution {
  question_id: number;
  solution_rubric: string;
  expected_final_answer: string;
  grading_tolerances?: {
    numerical_tolerance_percent: number;
  };
  marking_criteria?: {
    point: string;
    points_weight: number;
    description: string;
  }[];
  common_misconceptions?: string[];
}

export interface Worksheet {
  id: number;
  type: WorksheetType;
  module_id?: number | null;
  classroom_id?: number | null;
  title: string;
  description?: string;
  created_by?: string;
  time_limit_minutes?: number;
  pass_score: number;
  is_published: boolean;
  access_token?: string;
  is_live_monitored?: boolean;
  created_at?: string;
  item_count?: number;
  items?: WorksheetItem[];
}

export interface WorksheetLiveSession {
  id?: string;
  worksheet_id: number;
  access_token: string;
  student_id: string;
  student_name: string;
  current_question_index: number;
  status: 'active' | 'idle' | 'submitted';
  live_draft: Record<number, { steps: string; finalAnswer: string }>;
  total_score?: number;
  max_score?: number;
  last_active_at?: string;
  created_at?: string;
}

export interface LiveKeystrokePayload {
  access_token: string;
  student_id: string;
  student_name: string;
  question_id: number;
  question_index: number;
  steps: string;
  finalAnswer: string;
  timestamp: number;
}

export interface LaserPointerEvent {
  access_token: string;
  student_id: string;
  teacher_id: string;
  question_id: number;
  x_percent: number; // 0.0 - 100.0%
  y_percent: number; // 0.0 - 100.0%
  is_laser_active: boolean;
  timestamp: number;
}

export interface TeacherLiveComment {
  id: number | string;
  access_token: string;
  student_id: string;
  teacher_id: string;
  teacher_name?: string;
  question_id: number;
  comment_text: string;
  is_read?: boolean;
  created_at: string;
}

export interface WorksheetItem {
  id: number;
  worksheet_id: number;
  question_id: number;
  order_index: number;
  points: number;
  question?: Question;
}

export interface WorksheetSubmission {
  id: number;
  worksheet_id: number;
  user_id: string;
  total_score: number;
  max_score: number;
  status: SubmissionStatus;
  overall_feedback?: string;
  started_at: string;
  submitted_at?: string;
  answers?: SubmissionAnswer[];
}

export interface AICriteriaPoint {
  point: string;
  achieved: boolean;
  examinerNote?: string;
}

export interface SubmissionAnswer {
  id?: number;
  submission_id?: number;
  question_id: number;
  student_work_steps: string;
  student_final_answer: string;
  ai_score?: number;
  ai_status?: AiStatus;
  ai_feedback?: {
    score: number;
    max_score: number;
    criteria_results: AICriteriaPoint[];
    strengths: string[];
    missing_key_points: string[];
    misconceptions_detected: string[];
    detailed_feedback: string;
  };
  teacher_notes?: string;
}

export interface Badge {
  id: number;
  slug: string;
  title: string;
  description: string;
  icon_name: string;
  xp_reward: number;
  is_earned?: boolean;
  earned_at?: string;
}

// AI Grading Engine Contracts
export interface GradingRequest {
  questionId: number;
  questionTitle: string;
  questionText: string;
  pillarNumber: number;
  subtopic: string;
  expectedFinalAnswer: string;
  solutionRubric: string;
  studentWorkSteps: string;
  studentFinalAnswer: string;
  elapsedSeconds: number;
  maxPoints?: number;
}

export interface GradingCriterionResult {
  stepNumber: number;
  criterionTitle: string;
  pointsEarned: number;
  maxPoints: number;
  achieved: boolean;
  examinerExplanation: string;
}

export interface GradingResponse {
  totalScore: number;
  maxScore: number;
  status: 'perfect' | 'partial_correct' | 'incorrect';
  criteriaBreakdown: GradingCriterionResult[];
  overallFeedback: string;
  strengths: string[];
  missingOrIncorrectPoints: string[];
  misconceptionDiagnosis?: string;
  suggestedReviewTopic?: string;
  xpAwarded: number;
  confidenceScore: number; // 0.0 - 1.0 (Jika < 0.70, beri catatan perlu verifikasi guru)
  elapsedSeconds?: number;
  gradedAt?: string;
  modelUsed?: string;
}

export interface SavedSubmissionRecord {
  id: string;
  userId: string;
  questionId: number;
  questionTitle: string;
  pillarNumber: number;
  subtopic: string;
  studentWorkSteps: string;
  studentFinalAnswer: string;
  totalScore: number;
  maxScore: number;
  scorePercentage: number;
  status: 'perfect' | 'partial_correct' | 'incorrect';
  criteriaBreakdown: GradingCriterionResult[];
  overallFeedback: string;
  strengths: string[];
  missingOrIncorrectPoints: string[];
  misconceptionDiagnosis?: string;
  suggestedReviewTopic?: string;
  xpAwarded: number;
  confidenceScore: number;
  elapsedSeconds: number;
  gradedAt: string;
  modelUsed?: string;
  syncedToCloud: boolean;
}

export interface PillarMasteryScore {
  pillarNumber: number;
  pillarName: string;
  shortName: string;
  score: number; // 0 - 100%
  submissionsCount: number;
  masteryLevel: 'mastered' | 'developing' | 'needs_remedial' | 'not_started';
  lastEvaluatedAt?: string;
}

export interface RemedialRecommendation {
  id: string;
  pillarNumber: number;
  subtopic: string;
  reason: string;
  misconceptionHint?: string;
  targetQuestionId: number;
  targetQuestionTitle: string;
  difficulty: QuestionDifficulty;
  generationType: GenerationVariant;
}

