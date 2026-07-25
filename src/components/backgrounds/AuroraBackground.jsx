import { cn } from '../../utils/classNames.js';

function AuroraBackground({ className = '', children }) {
  return (
    <div className={cn('background background-aurora', className)}>
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      {children}
    </div>
  );
}

export default AuroraBackground;
