import { useEffect, useState } from 'react';

const STORAGE_KEY = 'portfolio-loader-shown';

function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(() => {
    try {
      return window.sessionStorage?.getItem(STORAGE_KEY) !== 'true';
    } catch {
      return true;
    }
  });
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    if (!isVisible) {
      return undefined;
    }

    const leaveTimer = window.setTimeout(() => {
      setIsLeaving(true);
    }, 950);

    const removeTimer = window.setTimeout(() => {
      try {
        window.sessionStorage?.setItem(STORAGE_KEY, 'true');
      } catch {
        // The loader can still dismiss when session storage is unavailable.
      }

      setIsVisible(false);
    }, 1350);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
    };
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`loading-screen ${isLeaving ? 'is-leaving' : ''}`} role="status" aria-live="polite">
      <div className="loading-aurora" aria-hidden="true" />
      <div className="loading-logo" aria-hidden="true">
        SSNS
      </div>
      <span className="sr-only">Loading portfolio</span>
    </div>
  );
}

export default LoadingScreen;
