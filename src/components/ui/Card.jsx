import { cn } from '../../utils/classNames.js';

function Card({
  as: Component = 'article',
  variant = 'default',
  interactive = false,
  className = '',
  children,
  ...props
}) {
  return (
    <Component
      className={cn('card', `card-${variant}`, interactive && 'card-interactive', className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Card;
