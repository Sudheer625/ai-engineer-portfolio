import { FiBriefcase, FiCheckCircle } from 'react-icons/fi';
import GlassCard from '../../components/ui/GlassCard.jsx';

function ExperienceCard({ company, role, duration, highlights, align = 'left' }) {
  return (
    <GlassCard className={`experience-card experience-card-${align}`} interactive>
      <div className="experience-card-icon" aria-hidden="true">
        <FiBriefcase />
      </div>
      <div className="experience-card-content">
        <span className="journey-kicker">{company}</span>
        <h3>{role}</h3>
        <p className="experience-duration">{duration}</p>
        <ul className="highlight-list" aria-label={`${role} key contributions`}>
          {highlights.map((highlight) => (
            <li key={highlight}>
              <FiCheckCircle aria-hidden="true" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </GlassCard>
  );
}

export default ExperienceCard;
