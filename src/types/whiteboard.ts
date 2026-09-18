/**
 * Tipe Data & Kontrak Spesifikasi untuk Fitur Interaktif Whiteboard OSN (STEMBoard)
 * Mendukung Kimia, Fisika, Biologi, Matematika, Infinite & Paginated Canvas.
 */

export type CanvasLayoutMode = 'infinite' | 'paginated';

export type PageFormat = 'a4_portrait' | 'a4_landscape' | 'widescreen_16_9';

export interface PageFormatConfig {
  label: string;
  width: number;
  height: number;
}

export const PAGE_FORMATS: Record<PageFormat, PageFormatConfig> = {
  a4_portrait: {
    label: 'A4 Tegak (Portrait)',
    width: 1240,
    height: 1754,
  },
  a4_landscape: {
    label: 'A4 Lebar (Landscape)',
    width: 1754,
    height: 1240,
  },
  widescreen_16_9: {
    label: 'Widescreen 16:9',
    width: 1920,
    height: 1080,
  },
};

export type WhiteboardBackground = 
  | 'blank' 
  | 'chalkboard' 
  | 'grid' 
  | 'lined' 
  | 'dots' 
  | 'cartesian';

export interface PageDefinition {
  pageIndex: number;
  width: number;
  height: number;
  topOffsetY: number; // Posisi vertikal kumulatif di canvas
}

export type WhiteboardTool =
  | 'select'
  | 'pen'
  | 'highlighter'
  | 'fading_pen'
  | 'eraser'
  | 'laser'
  | 'line'
  | 'arrow'
  | 'rect'
  | 'ellipse'
  | 'text'
  | 'ruler'
  | 'compass'
  | 'protractor'
  | 'math'
  | 'physics'
  | 'chem'
  | 'bio';

export type EraserMode = 'brush' | 'object' | 'lasso';
export type EraserShape = 'circle' | 'square';

export interface EraserSettings {
  mode: EraserMode;
  shape: EraserShape;
  size: number;
}

export type ElementType =
  | 'stroke'
  | 'line'
  | 'arrow'
  | 'rect'
  | 'ellipse'
  | 'text'
  | 'image'
  | 'question_card'
  | 'math_function'
  | 'math_shape'
  | 'physics_symbol'
  | 'chem_molecule'
  | 'bio_stamp';

export interface QuestionSubQuestion {
  id?: string;
  label?: string;
  question_text: string;
  points?: number;
  rubric?: string;
  solution_outline?: string;
}

export interface QuestionCardPayload {
  questionId: number | string;
  title: string;
  pillarNumber?: number;
  subtopic?: string;
  difficulty?: string;
  questionStyle?: string;
  questionText: string;
  diagramUrl?: string;
  subQuestions?: QuestionSubQuestion[];
  totalPoints?: number;
  showRubric?: boolean;
  sourceEvent?: string;
  isCollapsed?: boolean;
}

export interface WhiteboardElement {
  id: string;
  type: ElementType;
  pageIndex?: number; // Halaman tempat elemen berada (pada mode paginated)
  x: number;          // Posisi X absolut (atau relatif thd halaman)
  y: number;          // Posisi Y absolut (atau relatif thd halaman)
  width?: number;
  height?: number;
  rotation?: number;  // Radian (0 - 2π)
  color: string;
  strokeWidth: number;
  opacity: number;
  isLocked: boolean;
  zIndex: number;
  points?: [number, number][]; // Untuk freehand bezier stroke
  text?: string;
  fontSize?: number;
  imageUrl?: string;
  payload?: any;      // Menyimpan data khusus (KaTeX, fungsi grafik, sirkuit, dll)
}

// Instrumen Pengukuran
export interface RulerState {
  x: number;
  y: number;
  angleDeg: number;
  lengthPx: number;
  isVisible: boolean;
}

export interface CompassState {
  centerX: number;
  centerY: number;
  radiusPx: number;
  angleDeg: number;
  isVisible: boolean;
}

export interface ProtractorState {
  x: number;
  y: number;
  angleDeg: number;
  radiusPx: number;
  isVisible: boolean;
}

// Kolaborasi Sesi & Realtime
export type SessionPermissionMode = 'presentation' | 'collaborative';

export interface WhiteboardSession {
  id: string;
  roomCode: string;
  title: string;
  hostId: string;
  hostName: string;
  mode: SessionPermissionMode;
  createdAt: string;
  updatedAt: string;
}

export interface WhiteboardParticipant {
  id: string;
  name: string;
  role: 'teacher' | 'student';
  color: string;
  cursorX: number;
  cursorY: number;
  pageIndex?: number;
  isLaserActive: boolean;
  lastActive: number;
}

export type RealtimeActionType =
  | 'element_added'
  | 'element_updated'
  | 'element_deleted'
  | 'elements_cleared'
  | 'page_added'
  | 'page_deleted'
  | 'pointer_moved'
  | 'session_settings_changed'
  | 'sync_request'
  | 'sync_response'
  | 'stroke_drawing'
  | 'stroke_finished'
  | 'background_changed';

export interface LiveStrokePayload {
  strokeId: string;
  points: [number, number][];
  color: string;
  strokeWidth: number;
  opacity?: number;
  tool?: WhiteboardTool;
}

export interface WhiteboardRealtimePayload {
  action: RealtimeActionType;
  roomCode: string;
  senderId: string;
  timestamp: number;
  element?: WhiteboardElement;
  elementId?: string;
  elements?: WhiteboardElement[];
  page?: PageDefinition;
  pages?: PageDefinition[];
  pageIndex?: number;
  pointer?: {
    x: number;
    y: number;
    pageIndex?: number;
    isLaserActive: boolean;
    name: string;
    role: 'teacher' | 'student';
    color: string;
  };
  sessionMode?: SessionPermissionMode;
  liveStroke?: LiveStrokePayload;
  strokeId?: string;
  backgroundType?: WhiteboardBackground;
  layoutMode?: CanvasLayoutMode;
}

// Dokumen Utama Papan Tulis
export interface WhiteboardDocument {
  id: string;
  title: string;
  layoutMode: CanvasLayoutMode;
  pageFormat: PageFormat;
  backgroundType: WhiteboardBackground;
  pages: PageDefinition[];
  elements: WhiteboardElement[];
  createdAt: string;
  updatedAt: string;
  thumbnailUrl?: string;
  r2StorageKey?: string;
  r2PublicUrl?: string;
}

// Preset Template STEM
export interface WhiteboardTemplatePreset {
  id: string;
  title: string;
  subject: 'Kimia' | 'Fisika' | 'Biologi' | 'Matematika' | 'Umum';
  description: string;
  layoutMode: CanvasLayoutMode;
  pageFormat: PageFormat;
  backgroundType: WhiteboardBackground;
  thumbnailBadge: string;
  initialElements: WhiteboardElement[];
}
