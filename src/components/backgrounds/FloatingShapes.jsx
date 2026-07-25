import { cn } from '../../utils/classNames.js';

function FloatingShapes({ count = 4, className = '' }) {
  return (
    <div className={cn('floating-shapes', className)} aria-hidden="true">
      {Array.from({ length: count }).map((_, index) => (
        <span key={index} />
      ))}
    </div>
  );
}

export default FloatingShapes;
