import { cn } from '../../utils/classNames.js';

function GradientBackground({ className = '', children }) {
  return <div className={cn('background background-gradient', className)}>{children}</div>;
}

export default GradientBackground;
