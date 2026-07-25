import { cn } from '../../utils/classNames.js';

function Container({ as: Component = 'div', size = 'default', className = '', children, ...props }) {
  return (
    <Component className={cn('container', size !== 'default' && `container-${size}`, className)} {...props}>
      {children}
    </Component>
  );
}

export default Container;
