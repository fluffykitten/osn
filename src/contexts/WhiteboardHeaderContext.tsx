import React, { createContext, useContext, useState } from 'react';
import type { SessionPermissionMode } from '../types/whiteboard';

export interface WhiteboardHeaderState {
  roomCode?: string;
  sessionMode: SessionPermissionMode;
  isHost: boolean;
  onOpenSession: () => void;
  onToggleSessionMode: () => void;
}

interface WhiteboardHeaderContextType {
  headerState: WhiteboardHeaderState | null;
  setHeaderState: (state: WhiteboardHeaderState | null) => void;
}

const WhiteboardHeaderContext = createContext<WhiteboardHeaderContextType>({
  headerState: null,
  setHeaderState: () => {},
});

export const WhiteboardHeaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [headerState, setHeaderState] = useState<WhiteboardHeaderState | null>(null);

  return (
    <WhiteboardHeaderContext.Provider value={{ headerState, setHeaderState }}>
      {children}
    </WhiteboardHeaderContext.Provider>
  );
};

export const useWhiteboardHeader = () => useContext(WhiteboardHeaderContext);
