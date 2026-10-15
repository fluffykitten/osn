/**
 * SubjectToolbar.tsx
 * Dynamic STEM Toolbar Switcher for Axioma Academy Worksheets
 * Routes to ChemToolbar, PhysicsToolbar, MathToolbar, or BioToolbar
 * based on question/worksheet subject or active user subject context.
 */

import React, { useState } from 'react';
import type { SubjectId } from '../../types/subject';
import { useSubject } from '../../contexts/SubjectContext';
import { ChemToolbar } from './ChemToolbar';
import { PhysicsToolbar } from './PhysicsToolbar';
import { MathToolbar } from './MathToolbar';
import { BioToolbar } from './BioToolbar';
import { SUBJECT_CONFIGS } from '../../config/subjectConfig';

interface SubjectToolbarProps {
  subject?: SubjectId;
  textareaRef: React.RefObject<HTMLTextAreaElement | null>;
  onValueChange?: (newValue: string) => void;
  onOpenPeriodicTable?: () => void;
  onOpenMolarMass?: () => void;
  onOpenScaffoldGuide?: () => void;
  isScaffoldGuideOpen?: boolean;
  className?: string;
  allowSubjectSwitch?: boolean;
}

export const SubjectToolbar: React.FC<SubjectToolbarProps> = ({
  subject: explicitSubject,
  textareaRef,
  onValueChange,
  onOpenPeriodicTable,
  onOpenMolarMass,
  onOpenScaffoldGuide,
  isScaffoldGuideOpen,
  className = '',
  allowSubjectSwitch = true,
}) => {
  const { currentSubject } = useSubject();
  const [activeSubject, setActiveSubject] = useState<SubjectId>(explicitSubject || currentSubject || 'kimia');

  // Sinkronkan jika explicitSubject berubah
  React.useEffect(() => {
    if (explicitSubject) {
      setActiveSubject(explicitSubject);
    }
  }, [explicitSubject]);

  return (
    <div className={`space-y-1.5 ${className}`}>
      {/* Optional Quick STEM Subject Selector Bar for Worksheet */}
      {allowSubjectSwitch && (
        <div className="flex items-center justify-between px-1 text-xs">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#708090]">
            Toolbar Sains Aktif
          </span>
          <div className="flex items-center gap-1">
            {(['kimia', 'fisika', 'matematika', 'biologi'] as SubjectId[]).map((subId) => {
              const conf = SUBJECT_CONFIGS[subId];
              const isSelected = activeSubject === subId;
              return (
                <button
                  key={subId}
                  type="button"
                  onClick={() => setActiveSubject(subId)}
                  className={`px-2 py-0.5 rounded-md text-[10px] font-bold transition-all cursor-pointer flex items-center gap-1 ${
                    isSelected
                      ? 'bg-[#708090] text-white shadow-2xs'
                      : 'bg-[#FFFFF0] hover:bg-slate-100 text-[#708090] border border-[#D3D3D3]'
                  }`}
                  title={`Ganti ke Toolbar ${conf.name}`}
                >
                  <span>{conf.symbolGlyph}</span>
                  <span className="hidden sm:inline">{conf.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Render Subject Specific Toolbar */}
      {activeSubject === 'fisika' ? (
        <PhysicsToolbar
          textareaRef={textareaRef}
          onValueChange={onValueChange}
        />
      ) : activeSubject === 'matematika' ? (
        <MathToolbar
          textareaRef={textareaRef}
          onValueChange={onValueChange}
        />
      ) : activeSubject === 'biologi' ? (
        <BioToolbar
          textareaRef={textareaRef}
          onValueChange={onValueChange}
        />
      ) : (
        <ChemToolbar
          textareaRef={textareaRef}
          onValueChange={onValueChange}
          onOpenPeriodicTable={onOpenPeriodicTable}
          onOpenMolarMass={onOpenMolarMass}
          onOpenScaffoldGuide={onOpenScaffoldGuide}
          isScaffoldGuideOpen={isScaffoldGuideOpen}
        />
      )}
    </div>
  );
};
