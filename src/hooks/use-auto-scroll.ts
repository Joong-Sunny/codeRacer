import { useEffect, RefObject } from 'react';

/**
 * Automatically scrolls the container so that the element at the given index is visible.
 *
 * @param containerRef - Ref of the container that should be scrolled
 * @param index - Index of the element that should be visible
 */
function useAutoScroll(containerRef: RefObject<HTMLDivElement>, index: number): void {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const targetElement = container.querySelector(`[data-index="${index}"]`) as HTMLElement;

    if (targetElement) {
      const rect = targetElement.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      console.log(rect.bottom, containerRect.bottom);
      if (rect.bottom > containerRect.bottom) {
        container.scrollTop += (rect.bottom - containerRect.bottom) * 2;
      }
    }
  }, [containerRef, index]);
}

export default useAutoScroll;
