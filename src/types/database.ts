export type UserRole = 'siswa' | 'guru' | 'student' | 'teacher' | 'admin';
export type QuestionDifficulty = 'SMA-Mudah' | 'SMA-Sedang' | 'SMA-Sulit' | 'SMA' | 'OSK' | 'OSP' | 'OSN' | 'IChO';
export type GenerationVariant = 'manual' | 'pdf_extracted' | 'twin_parallel' | 'scaffolding' | 'challenging_extension';
export type WorksheetType = 'static_module' | 'teacher_assignment';
export type SubmissionStatus = 'in_progress' | 'submitted' | 'reviewed';
export type AiStatus = 'perfect' | 'partial_correct' | 'incorrect';

export type AccountStatus = 'pending_activation' | 'active' | 'suspended';

export interface Profile {
  id: string;
  email: string;
  full_name: string;
  role: UserRole;
  xp: number;
  level: number;
  current_streak: number;
  last_activity_date: string;
  avatar_url?: string;
  school_name?: string;
  grade_level?: string;
  target_olympiad?: 'OSK' | 'OSP' | 'OSN' | 'IChO' | string;
  phone_whatsapp?: string;
  membership_tier?: 'free' | 'pro' | 'school';
  account_status?: AccountStatus;
  is_suspended?: boolean;
  suspended_reason?: string;
  last_login_at?: string;
  created_at: string;
  updated_at?: string;
}

export interface Classroom {
  id: number;
  teacher_id: string;
  name: string;
  code: string;
  description?: string;
  created_at: string;
  updated_at?: string;
  member_count?: number;
  assignment_count?: number;
  teacher_name?: string;
  teacher_email?: string;
  user_membership_status?: ClassroomMemberStatus;
}

export type ClassroomMemberStatus = 'invited' | 'active' | 'pending_approval';

export interface JoinClassroomResult {
  success: boolean;
  message: string;
  status?: ClassroomMemberStatus;
  classroom?: Classroom;
  alreadyJoined?: boolean;
}

export interface ClassroomMember {
  id: number;
  classroom_id: number;
  student_email: string;
  student_id?: string | null;
  student_name?: string | null;
  status: ClassroomMemberStatus;
  invited_at: string;
  joined_at?: string | null;
}

export interface ClassroomAssignment {
  id: number;
  classroom_id: number;
  worksheet_id: number;
  assigned_at: string;
  due_date?: string | null;
  is_live_monitored?: boolean;
  classroom?: Classroom;
  worksheet?: Worksheet;
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

export type CurriculumTrack = 'ALL' | 'SMA' | 'OSN';
export type SmaGradeLevel = 'ALL' | 'Kelas 10' | 'Kelas 11' | 'Kelas 12';

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
  author?: string;
  institution?: string;
  is_verified?: boolean;
  created_at?: string;
  tags?: string[];
  // Metadata Kurikulum SMA (16 Topik Fase E & F) & Dual Mapping
  curriculum?: 'osn' | 'sma' | 'both';
  sma_topic_number?: number;          // 1 - 16
  sma_topic_id?: number;              // 101 - 116 (sesuai id SMA_MATERIALS)
  grade?: 'Kelas 10' | 'Kelas 11' | 'Kelas 12';
  curriculum_phase?: 'Fase E' | 'Fase F';
  // Protected fields (only in teacher / AI context)
  solution_rubric?: string;
  expected_final_answer?: string;
  solution_framework_template?: string; // Metadata kerangka 4 langkah pengerjaan terpersonalisasi (scaffold)
}

export interface QuestionFilter {
  search?: string;
  curriculum?: CurriculumTrack;        // 'ALL' | 'SMA' | 'OSN'
  difficulty?: QuestionDifficulty | 'ALL';
  pillarNumber?: number | 'ALL';      // 1 - 10 untuk Pilar Silabus OSN
  smaTopicNumber?: number | 'ALL';    // 1 - 16 untuk Topik Kimia SMA
  smaGrade?: SmaGradeLevel;            // Filter spesifik jenjang SMA
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
  teacher_id?: string;
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
  worksheet_title?: string;
  worksheet_type?: string; // 'teacher_assignment' | 'live' | 'static_module'
  classroom_id?: number;
  access_token: string;
  student_id: string;
  student_name: string;
  student_email?: string;
  current_question_index: number;
  current_question_title?: string;
  status: 'active' | 'idle' | 'submitted' | 'disconnected';
  live_draft: Record<string | number, any>;
  total_score?: number;
  max_score?: number;
  total_questions?: number;
  answered_count?: number;
  last_active_at?: string;
  created_at?: string;
}

export interface LiveKeystrokePayload {
  access_token: string;
  student_id: string;
  student_name: string;
  student_email?: string;
  worksheet_id?: number;
  worksheet_title?: string;
  classroom_id?: number;
  question_id: number;
  question_index: number;
  current_question_title?: string;
  steps: string;
  finalAnswer: string;
  timestamp: number;
}

export interface LaserPointerEvent {
  access_token: string;
  student_id: string;
  teacher_id: string;
  question_id: number;
  target_zone?: 'question_area' | 'student_render' | 'student_editor';
  anchor_type?: 'math' | 'katex' | 'block' | 'table_cell' | 'container';
  anchor_index?: number;
  rel_x_pct?: number; // 0.0 - 100.0% di dalam elemen anchor
  rel_y_pct?: number; // 0.0 - 100.0% di dalam elemen anchor
  scroll_top_pct?: number; // 0.0 - 100.0% posisi scroll container
  x_percent: number; // Global fallback 0.0 - 100.0%
  y_percent: number; // Global fallback 0.0 - 100.0%
  canvas_logical_x?: number; // Koordinat X dalam kanvas terstandarisasi (misal 0 - 640px)
  canvas_logical_y?: number; // Koordinat Y dalam kanvas terstandarisasi
  canvas_scale?: number; // Skala pengirim (0.75, 1.0, 1.25)
  is_laser_active: boolean;
  timestamp: number;
}

export type HighlightColor = 'yellow' | 'pink' | 'green' | 'blue';

export interface HighlightRect {
  left_pct: number;
  top_pct: number;
  width_pct: number;
  height_pct: number;
}

export interface LiveHighlightItem {
  id: string;
  question_id: number;
  target_zone: 'question_area' | 'student_render';
  selected_text?: string;
  rects: HighlightRect[];
  color: HighlightColor;
  created_at: number;
}

export interface LiveHighlightEvent {
  access_token: string;
  student_id: string;
  teacher_id: string;
  question_id: number;
  action: 'add' | 'clear' | 'remove';
  highlight?: LiveHighlightItem;
  highlight_id?: string;
  target_zone?: 'question_area' | 'student_render';
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

export interface AuditLog {
  id: number;
  actor_id: string;
  actor_email: string;
  action_type:
    | 'USER_CREATED'
    | 'USER_INVITED'
    | 'ACTIVATION_EMAIL_SENT'
    | 'USER_SUSPENDED'
    | 'USER_ACTIVATED'
    | 'PASSWORD_RESET'
    | 'ROLE_CHANGED'
    | 'MATERIAL_UPDATED'
    | 'QUESTION_CREATED'
    | 'QUESTION_UPDATED'
    | 'QUESTION_DELETED'
    | 'CLASSROOM_UPDATED'
    | 'CLASSROOM_DELETED';
  target_resource?: string;
  description: string;
  details?: Record<string, any>;
  ip_address?: string;
  created_at: string;
}

export interface MaterialOverride {
  id: number;
  material_type: 'osn' | 'sma';
  title: string;
  category?: string;
  level?: string;
  read_time_minutes?: number;
  summary?: string;
  all_tags?: string[];
  prerequisites?: any[];
  core_concepts?: any[];
  worked_examples?: any[];
  updated_by?: string;
  updated_at: string;
}


