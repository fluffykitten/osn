import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { getLocalGamificationState } from '../../lib/gamification';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireRole?: 'teacher' | 'student';
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requireRole }) => {
  const { user, role, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-sky-200 border-t-sky-600 rounded-full animate-spin" />
          <span className="text-xs text-slate-500 font-medium font-mono">Memverifikasi sesi pengguna...</span>
        </div>
      </div>
    );
  }

  // Cek fallback legacy gamification role jika user belum login Supabase
  const legacyState = getLocalGamificationState();
  const effectiveRole = user ? role : legacyState.role === 'guru' ? 'teacher' : 'student';

  if (requireRole === 'teacher' && effectiveRole !== 'teacher') {
    // Siswa mencoba masuk ke ruang guru -> alihkan ke worksheet
    return <Navigate to="/worksheet" replace />;
  }

  return <>{children}</>;
};
