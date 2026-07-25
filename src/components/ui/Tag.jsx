import { cn } from '../../utils/classNames.js';

function Tag({ children, className = '' }) {
  return <span className={cn('tag', className)}>{children}</span>;
}

export default Tag;
