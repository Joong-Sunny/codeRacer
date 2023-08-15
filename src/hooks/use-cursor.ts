import React, { useEffect, useState } from 'react';

export default function useCursor(ref: React.RefObject<HTMLElement>, userInputLength: number) {
  const [cursorPosition, setCursorPosition] = useState<{ top: number; left: number } | null>(null);

  useEffect(() => {
    if (ref.current) {
      const charElement = ref.current.querySelector(`[data-index="${userInputLength}"]`);
      if (charElement) {
        const rect = charElement.getBoundingClientRect();
        setCursorPosition({ top: rect.top, left: rect.left });
      }
    }
  }, [ref, userInputLength]);

  return cursorPosition;
}
