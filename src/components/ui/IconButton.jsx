import { cn } from '../../utils/classNames.js';

function IconButton({
  as: Component = 'button',
  size = 'md',
  variant = 'ghost',
  label,
  children,
  className = '',
  type = 'button',
  ...props
}) {
  const buttonProps = Component === 'button' ? { type } : {};

  return (
    <Component
      className={cn('icon-button', `icon-button-${size}`, `icon-button-${variant}`, className)}
      aria-label={label}
      title={label}
      {...buttonProps}
      {...props}
    >
      {children}
    </Component>
  );
}

export default IconButton;
