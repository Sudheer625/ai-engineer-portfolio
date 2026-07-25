import { cn } from '../../utils/classNames.js';

function Button({
  as: Component = 'button',
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  type = 'button',
  ...props
}) {
  const buttonProps = Component === 'button' ? { type } : {};

  return (
    <Component
      className={cn('btn', `btn-${variant}`, `btn-${size}`, className)}
      {...buttonProps}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Button;
