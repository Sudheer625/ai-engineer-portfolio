function Divider({ orientation = 'horizontal', decorative = true }) {
  return (
    <div
      className={`divider divider-${orientation}`}
      role={decorative ? 'presentation' : 'separator'}
      aria-orientation={orientation}
    />
  );
}

export default Divider;
