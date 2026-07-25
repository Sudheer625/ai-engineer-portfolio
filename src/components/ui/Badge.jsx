import { cn } from '../../utils/classNames.js';

function Badge({ children, variant = 'primary', className = '' }) {
  return <span className={cn('badge', `badge-${variant}`, className)}>{children}</span>;
}

export default Badge;
