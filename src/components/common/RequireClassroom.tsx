import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { classroomService } from '../../services/classroomService';
const StudentLockedGate = React.lazy(() =>
  import('../../pages/student/StudentLockedGate').then((m) => ({ default: m.StudentLockedGate }))
);

interface RequireClassroomProps {
  children: React.ReactNode;
}

export const RequireClassroom: React.FC<RequireClassroomProps> = ({ children }) => {
  const { user, profile, isTeacher, isAdmin, loading: authLoading } = useAuth();
  const storageKey = user?.id ? `osn_has_active_classroom_${user.id}` : 'osn_has_active_classroom';

  const [hasActiveClassroom, setHasActiveClassroom] = useState<boolean | null>(() => {
    if (!user?.id) return null;
    const cached = sessionStorage.getItem(`osn_has_active_classroom_${user.id}`);
    if (cached !== null) {
      return cached === 'true';
    }
    return null;
  });
  const [checking, setChecking] = useState<boolean>(true);

  const checkClassroomStatus = async () => {
    if (!user?.email || !user?.id) {
      setHasActiveClassroom(false);
      setChecking(false);
      return;
    }

    const userStorageKey = `osn_has_active_classroom_${user.id}`;
    try {
      const classrooms = await classroomService.getStudentClassrooms(user.email, user.id);
      const hasActive = classrooms.some((c) => c.user_membership_status === 'active');
      setHasActiveClassroom(hasActive);
      sessionStorage.setItem(userStorageKey, hasActive ? 'true' : 'false');
      sessionStorage.setItem('osn_has_active_classroom', hasActive ? 'true' : 'false');
    } catch (err) {
      console.error('Gagal memeriksa status kelas siswa:', err);
      const cached = sessionStorage.getItem(userStorageKey);
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
      const cached = sessionStorage.getItem(storageKey);
      setHasActiveClassroom(cached !== null ? cached === 'true' : null);
      setChecking(true);
      checkClassroomStatus();
    } else if (!authLoading && !user) {
      setHasActiveClassroom(false);
      setChecking(false);
    }

    const handleUpdate = () => {
      checkClassroomStatus();
    };
    window.addEventListener('osn_classroom_updated', handleUpdate);
    return () => window.removeEventListener('osn_classroom_updated', handleUpdate);
  }, [user?.id, user?.email, profile?.role, isTeacher, isAdmin, authLoading, storageKey]);

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
  return (
    <React.Suspense
      fallback={
        <div className="min-h-[70vh] flex flex-col items-center justify-center gap-3">
          <div className="w-10 h-10 rounded-full border-4 border-emerald-100 border-t-emerald-600 animate-spin" />
        </div>
      }
    >
      <StudentLockedGate onClassStatusChanged={checkClassroomStatus} />
    </React.Suspense>
  );
};
