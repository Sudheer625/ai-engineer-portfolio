import Card from '../ui/Card.jsx';

function TimelineItem({ marker, eyebrow, title, meta, children }) {
  return (
    <li className="timeline-item">
      <span className="timeline-marker" aria-hidden="true">
        {marker}
      </span>
      <Card variant="timeline" className="timeline-card">
        {eyebrow && <span className="timeline-eyebrow">{eyebrow}</span>}
        {title && <h3>{title}</h3>}
        {meta && <p className="timeline-meta">{meta}</p>}
        {children}
      </Card>
    </li>
  );
}

export default TimelineItem;
