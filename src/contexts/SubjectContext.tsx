/**
 * Axioma Academy - Universal Subject Context Provider
 * Mengelola state subjek aktif, sinkronisasi URL (/:subject/...),
 * penegakan batasan hak akses role (Admin multi-subjek, Guru single-subjek,
 * dan Siswa multi-classroom subject unlock), serta preferensi kurikulum.
 */

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type {
  SubjectId,
  SubjectConfig,
  StandardCurriculumId,
} from '../types/subject';
import { isSubjectId, normalizeCurriculumId } from '../types/subject';
import {
  SUBJECT_CONFIGS,
  SUBJECT_LIST,
  getSubjectConfig,
} from '../config/subjectConfig';
import type { Classroom } from '../types/database';
import { classroomService } from '../services/classroomService';
import { useAuth } from './AuthContext';

interface SubjectContextType {
  currentSubject: SubjectId;
  currentConfig: SubjectConfig;
  activeCurriculum: StandardCurriculumId;
  availableSubjects: SubjectConfig[];
  unlockedSubjects: SubjectId[];
  isSubjectUnlocked: (subject: SubjectId) => boolean;
  studentClassrooms: Classroom[];
  activeSubjectClassroom: Classroom | undefined;
  refreshSubjectAccess: () => Promise<void>;
  isMultiSubjectAdmin: boolean;
  isSingleSubjectTeacher: boolean;
  teacherSubject: SubjectId | null;
  setSubject: (subject: SubjectId) => void;
  setCurrentSubject: (subject: SubjectId) => void;
  isCurrentSubjectUnlocked: boolean;
  setCurriculum: (curriculum: StandardCurriculumId) => void;
  canAccessSubject: (subject: SubjectId) => boolean;
  getSubjectUrl: (path: string, subjectOverride?: SubjectId) => string;
}

const SubjectContext = createContext<SubjectContextType | null>(null);

const STORAGE_KEY_SUBJECT = 'axioma_active_subject';
const STORAGE_KEY_CURRICULUM = 'axioma_active_curriculum';

export const SubjectProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, profile, isAdmin, isTeacher } = useAuth();

  // Evaluasi hak akses role
  const isMultiSubjectAdmin = Boolean(isAdmin || profile?.is_admin || profile?.role === 'admin');
  const isSingleSubjectTeacher = Boolean(isTeacher && !isMultiSubjectAdmin);
  const teacherSubject = (profile?.teaching_subject as SubjectId) || null;

  // State daftar kelas siswa untuk classroom-driven subject unlock
  const [studentClassrooms, setStudentClassrooms] = useState<Classroom[]>([]);

  // Inisialisasi state awal subjek dari storage atau default 'kimia'
  const [currentSubjectState, setCurrentSubjectState] = useState<SubjectId>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_SUBJECT);
    if (isSubjectId(saved)) return saved;
    return 'kimia';
  });

  // Inisialisasi state kurikulum
  const [activeCurriculum, setActiveCurriculum] = useState<StandardCurriculumId>(() => {
    if (profile?.target_curriculum) {
      return normalizeCurriculumId(profile.target_curriculum);
    }
    const saved = localStorage.getItem(STORAGE_KEY_CURRICULUM);
    if (saved) return normalizeCurriculumId(saved);
    return 'osn';
  });

  // Ekstrak subject dari URL path (misal: /fisika/practice -> 'fisika')
  const pathSubject = useMemo<SubjectId | null>(() => {
    const segments = location.pathname.split('/').filter(Boolean);
    if (segments.length > 0 && isSubjectId(segments[0])) {
      return segments[0];
    }
    return null;
  }, [location.pathname]);

  // Muat daftar kelas siswa secara mandiri untuk menentukan subjek yang terbuka
  const refreshSubjectAccess = useCallback(async () => {
    if (!user?.email || isTeacher || isMultiSubjectAdmin) {
      setStudentClassrooms([]);
      return;
    }
    try {
      const classes = await classroomService.getStudentClassrooms(user.email, user.id);
      setStudentClassrooms(classes);
    } catch (err) {
      console.warn('[SubjectContext] Gagal menyegarkan kelas siswa:', err);
      setStudentClassrooms([]);
    }
  }, [user?.email, user?.id, isTeacher, isMultiSubjectAdmin]);

  useEffect(() => {
    setStudentClassrooms([]);
    refreshSubjectAccess();
  }, [refreshSubjectAccess]);

  // Dengarkan event pembaruan kelas secara instan antar komponen
  useEffect(() => {
    const handleClassUpdate = () => {
      refreshSubjectAccess();
    };
    window.addEventListener('osn_classroom_updated', handleClassUpdate);
    return () => window.removeEventListener('osn_classroom_updated', handleClassUpdate);
  }, [refreshSubjectAccess]);

  // Evaluasi daftar subjek yang terbuka (Unlocked Subjects)
  const unlockedSubjects = useMemo<SubjectId[]>(() => {
    // 1. Admin memiliki seluruh 4 subjek terbuka
    if (isMultiSubjectAdmin) {
      return ['kimia', 'fisika', 'matematika', 'biologi'];
    }

    // 2. Guru hanya memiliki subjek keahliannya yang terbuka
    if (isSingleSubjectTeacher) {
      return teacherSubject ? [teacherSubject] : ['kimia'];
    }

    // 3. Siswa yang login: subjek terbuka HANYA dari kelas yang berstatus 'active' (disetujui Guru Pembina)
    if (user && !isTeacher && !isMultiSubjectAdmin) {
      const activeClasses = studentClassrooms.filter(
        (c) => c.user_membership_status === 'active'
      );
      const classSubjects = activeClasses.flatMap((c) =>
        Array.isArray(c.subjects) && c.subjects.length > 0 ? c.subjects : (['kimia'] as SubjectId[])
      );

      return Array.from(new Set(classSubjects)).filter(isSubjectId);
    }

    // 4. Tamu (Guest): tidak ada subjek materi internal yang terbuka sebelum masuk kelas
    return [];
  }, [
    isMultiSubjectAdmin,
    isSingleSubjectTeacher,
    teacherSubject,
    user,
    isTeacher,
    studentClassrooms,
  ]);

  // Cek apakah suatu subjek berstatus terbuka bagi pengguna saat ini
  const isSubjectUnlocked = useCallback(
    (subject: SubjectId): boolean => {
      return unlockedSubjects.includes(subject);
    },
    [unlockedSubjects]
  );

  // Evaluasi hak akses subjek (apakah boleh membuka materi / fitur interaktif subjek ini)
  const canAccessSubject = useCallback(
    (subject: SubjectId): boolean => {
      if (isMultiSubjectAdmin) return true;
      if (isSingleSubjectTeacher && teacherSubject) {
        return teacherSubject === subject;
      }
      return unlockedSubjects.includes(subject);
    },
    [isMultiSubjectAdmin, isSingleSubjectTeacher, teacherSubject, unlockedSubjects]
  );

  // Subjek aktif yang telah tervalidasi
  const currentSubject: SubjectId = useMemo(() => {
    // 1. Jika guru login, paksa gunakan subjek guru tersebut
    if (isSingleSubjectTeacher && teacherSubject) {
      return teacherSubject;
    }
    // 2. Jika di URL terdapat subject yang valid (misal: /fisika/practice atau /biologi/materi)
    if (pathSubject) {
      return pathSubject;
    }
    // 3. Jika subjek tersimpan saat ini valid
    if (currentSubjectState) {
      return currentSubjectState;
    }
    // 4. Jika profil siswa memiliki preferensi
    if (profile?.preferred_subject && isSubjectId(profile.preferred_subject)) {
      return profile.preferred_subject;
    }
    // 5. Fallback ke subjek pertama yang terbuka atau default 'kimia'
    return unlockedSubjects[0] || 'kimia';
  }, [
    isSingleSubjectTeacher,
    teacherSubject,
    pathSubject,
    currentSubjectState,
    profile?.preferred_subject,
    unlockedSubjects,
  ]);

  // Sinkronisasi saat guru mencoba membuka subjek lain secara ilegal lewat URL
  useEffect(() => {
    if (isSingleSubjectTeacher && teacherSubject && pathSubject && pathSubject !== teacherSubject) {
      // Ganti segmen URL path dengan subjek yang sah milik guru
      const newPath = location.pathname.replace(`/${pathSubject}`, `/${teacherSubject}`);
      navigate(newPath, { replace: true });
    }
  }, [isSingleSubjectTeacher, teacherSubject, pathSubject, location.pathname, navigate]);

  // Kelas aktif untuk subjek yang sedang dipilih (jika siswa mengikuti kelas untuk subjek ini)
  const activeSubjectClassroom = useMemo(() => {
    return studentClassrooms.find(
      (c) =>
        c.user_membership_status === 'active' &&
        (c.subjects?.includes(currentSubject) || (currentSubject === 'kimia' && (!c.subjects || c.subjects.length === 0)))
    );
  }, [studentClassrooms, currentSubject]);

  // Simpan subjek ke storage saat berganti
  const setSubject = useCallback(
    (subject: SubjectId) => {
      setCurrentSubjectState(subject);
      localStorage.setItem(STORAGE_KEY_SUBJECT, subject);
    },
    []
  );

  // Simpan kurikulum aktif
  const setCurriculum = useCallback((curriculum: StandardCurriculumId) => {
    setActiveCurriculum(curriculum);
    localStorage.setItem(STORAGE_KEY_CURRICULUM, curriculum);
  }, []);

  // Helper untuk membuat URL ter-prefix subjek secara otomatis
  const getSubjectUrl = useCallback(
    (path: string, subjectOverride?: SubjectId): string => {
      const targetSub = subjectOverride || currentSubject;
      const cleanPath = path.startsWith('/') ? path : `/${path}`;
      const segments = cleanPath.split('/').filter(Boolean);
      if (segments.length > 0 && isSubjectId(segments[0])) {
        segments[0] = targetSub;
        return `/${segments.join('/')}`;
      }
      return `/${targetSub}${cleanPath}`;
    },
    [currentSubject]
  );

  const currentConfig = useMemo(() => {
    return getSubjectConfig(currentSubject);
  }, [currentSubject]);

  const value = useMemo<SubjectContextType>(
    () => ({
      currentSubject,
      currentConfig,
      activeCurriculum,
      availableSubjects: SUBJECT_LIST,
      unlockedSubjects,
      isSubjectUnlocked,
      studentClassrooms,
      activeSubjectClassroom,
      refreshSubjectAccess,
      isMultiSubjectAdmin,
      isSingleSubjectTeacher,
      teacherSubject,
      setSubject,
      setCurrentSubject: setSubject,
      isCurrentSubjectUnlocked: isSubjectUnlocked(currentSubject),
      setCurriculum,
      canAccessSubject,
      getSubjectUrl,
    }),
    [
      currentSubject,
      currentConfig,
      activeCurriculum,
      unlockedSubjects,
      isSubjectUnlocked,
      studentClassrooms,
      activeSubjectClassroom,
      refreshSubjectAccess,
      isMultiSubjectAdmin,
      isSingleSubjectTeacher,
      teacherSubject,
      setSubject,
      setCurriculum,
      canAccessSubject,
      getSubjectUrl,
    ]
  );

  return (
    <SubjectContext.Provider value={value}>
      {children}
    </SubjectContext.Provider>
  );
};

export const useSubject = (): SubjectContextType => {
  const context = useContext(SubjectContext);
  if (!context) {
    throw new Error('useSubject must be used within a SubjectProvider');
  }
  return context;
};
