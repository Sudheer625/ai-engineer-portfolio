function VisuallyHidden({ as: Component = 'span', children, ...props }) {
  return (
    <Component className="sr-only" {...props}>
      {children}
    </Component>
  );
}

export default VisuallyHidden;
