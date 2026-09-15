export interface ModalPosition {
  x: number;
  y: number;
}

// Global in-memory singleton position (persists across popup opens within session)
let sharedPosition: ModalPosition | null = null;
const positionListeners = new Set<(pos: ModalPosition) => void>();

export function getSharedModalPosition(width = 440, height = 380): ModalPosition {
  const vw = typeof window !== 'undefined' ? window.innerWidth : 1200;
  const vh = typeof window !== 'undefined' ? window.innerHeight : 800;

  if (sharedPosition) {
    // Clamp to ensure popup is never off-screen
    const clampedX = Math.max(10, Math.min(vw - width - 10, sharedPosition.x));
    const clampedY = Math.max(10, Math.min(vh - height - 10, sharedPosition.y));
    return { x: clampedX, y: clampedY };
  }

  // Initial default position: centered slightly towards the right for easy split view
  const initX = Math.max(20, Math.floor(vw / 2 - width / 2));
  const initY = Math.max(40, Math.floor(vh / 2 - height / 2));
  const initial = { x: initX, y: initY };
  sharedPosition = initial;
  return initial;
}

export function setSharedModalPosition(pos: ModalPosition): void {
  sharedPosition = pos;
  positionListeners.forEach((listener) => {
    try {
      listener(pos);
    } catch {
      // ignore
    }
  });
}

export function subscribeModalPosition(listener: (pos: ModalPosition) => void): () => void {
  positionListeners.add(listener);
  return () => positionListeners.delete(listener);
}
