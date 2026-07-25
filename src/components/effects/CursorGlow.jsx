import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.js';

function CursorGlow() {
  const glowRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || window.matchMedia('(pointer: coarse)').matches) {
      return undefined;
    }

    const glow = glowRef.current;
    let frameId = 0;
    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;
    let targetX = currentX;
    let targetY = currentY;

    const render = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      frameId = window.requestAnimationFrame(render);
    };

    const moveGlow = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    frameId = window.requestAnimationFrame(render);
    window.addEventListener('pointermove', moveGlow, { passive: true });

    return () => {
      window.removeEventListener('pointermove', moveGlow);
      window.cancelAnimationFrame(frameId);
    };
  }, [prefersReducedMotion]);

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
}

export default CursorGlow;
