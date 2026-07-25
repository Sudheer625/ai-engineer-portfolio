function SectionTitle({ eyebrow, title, subtitle, align = 'left' }) {
  return (
    <div className={`section-title section-title-${align}`}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      {title && <h2>{title}</h2>}
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;
