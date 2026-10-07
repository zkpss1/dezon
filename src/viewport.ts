export const belowNormalZoom = (startScale: number, gestureScale: number) => startScale * gestureScale < 1;

export function preventPinchBelowNormalSize() {
  if (!window.visualViewport) return;

  let startScale = 1;
  document.addEventListener('gesturestart', () => {
    startScale = window.visualViewport?.scale ?? 1;
  }, { passive: false });
  document.addEventListener('gesturechange', (event) => {
    const gestureScale = (event as Event & { scale?: number }).scale ?? 1;
    if (belowNormalZoom(startScale, gestureScale)) event.preventDefault();
  }, { passive: false });
}
