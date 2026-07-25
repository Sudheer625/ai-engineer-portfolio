import { FiAward, FiCalendar } from 'react-icons/fi';
import GlassCard from '../../components/ui/GlassCard.jsx';

function EducationCard({ degree, field, institution, duration, scoreLabel, score }) {
  return (
    <GlassCard className="education-card" interactive>
      <div>
        <span className="journey-kicker">{institution}</span>
        <h3>{degree}</h3>
        {field && <p>{field}</p>}
      </div>
      <div className="journey-meta-grid">
        <span>
          <FiCalendar aria-hidden="true" />
          {duration}
        </span>
        <span>
          <FiAward aria-hidden="true" />
          {scoreLabel}: <strong>{score}</strong>
        </span>
      </div>
    </GlassCard>
  );
}

export default EducationCard;
