import { cn } from '../../utils/classNames.js';

function AnimatedGridBackground({ className = '', children }) {
  return <div className={cn('background background-grid', className)}>{children}</div>;
}

export default AnimatedGridBackground;
