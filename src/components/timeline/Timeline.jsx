import { cn } from '../../utils/classNames.js';

function Timeline({ children, className = '', ariaLabel = 'Timeline' }) {
  return (
    <ol className={cn('timeline', className)} aria-label={ariaLabel}>
      {children}
    </ol>
  );
}

export default Timeline;
