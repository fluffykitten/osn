import React from 'react';
import { StudentProgressReport } from './StudentProgressReport';

/**
 * Profile component kept for backward compatibility.
 * Replaced by the comprehensive StudentProgressReport component.
 */
export const Profile: React.FC = () => {
  return <StudentProgressReport />;
};

export default Profile;
