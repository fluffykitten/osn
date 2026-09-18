import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { classroomService } from '../../services/classroomService';
import { StudentLockedGate } from '../../pages/student/StudentLockedGate';

interface RequireClassroomProps {
  children: React.ReactNode;
}

export const RequireClassroom: React.FC<RequireClassroomProps> = ({ children }) => {
  const { user, profile, isTeacher, isAdmin, loading: authLoading } = useAuth();
  const [hasActiveClassroom, setHasActiveClassroom] = useState<boolean | null>(() => {
    // Optimistic check from sessionStorage
    const cached = sessionStorage.getItem('osn_has_active_classroom');
    if (cached !== null) {
      return cached === 'true';
    }
    return null;
  });
  const [checking, setChecking] = useState<boolean>(true);

  const checkClassroomStatus = async () => {
    if (!user?.email) {
      setChecking(false);
      return;
    }

    try {
      const classrooms = await classroomService.getStudentClassrooms(user.email, user.id);
      const hasActive = classrooms.some((c) => c.user_membership_status === 'active');
      setHasActiveClassroom(hasActive);
      sessionStorage.setItem('osn_has_active_classroom', hasActive ? 'true' : 'false');
    } catch (err) {
      console.error('Gagal memeriksa status kelas siswa:', err);
      // Fallback: check cached value or assume false if never joined
      const cached = sessionStorage.getItem('osn_has_active_classroom');
      setHasActiveClassroom(cached === 'true');
    } finally {
      setChecking(false);
    }
  };

  useEffect(() => {
    // If teacher or admin, immediately bypass
    if (isTeacher || isAdmin) {
      setHasActiveClassroom(true);
      setChecking(false);
      return;
    }

    if (!authLoading && user) {
      checkClassroomStatus();
    } else if (!authLoading && !user) {
      setChecking(false);
    }
  }, [user, profile, isTeacher, isAdmin, authLoading]);

  // If auth is still loading, show animated spinner
  if (authLoading || (checking && hasActiveClassroom === null)) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-3">
        <div className="relative">
          <div className="w-12 h-12 rounded-full border-4 border-sky-100 border-t-sky-600 animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-sky-700">
            OSN
          </div>
        </div>
        <p className="text-sm font-medium text-slate-500 animate-pulse">
          Memverifikasi akses kelas binaan...
        </p>
      </div>
    );
  }

  // Guru and Admin always have access
  if (isTeacher || isAdmin) {
    return <>{children}</>;
  }

  // If student has an active approved classroom, unlock full learning content
  if (hasActiveClassroom) {
    return <>{children}</>;
  }

  // Otherwise, lock access and render StudentLockedGate
  return <StudentLockedGate onClassStatusChanged={checkClassroomStatus} />;
};
