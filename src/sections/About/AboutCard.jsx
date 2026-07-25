import { FiCpu, FiRefreshCw, FiUsers, FiZap } from 'react-icons/fi';
import GlassCard from '../../components/ui/GlassCard.jsx';

const values = [
  { icon: FiZap, label: 'Problem Solver' },
  { icon: FiRefreshCw, label: 'Continuous Learner' },
  { icon: FiUsers, label: 'Team Player' },
  { icon: FiCpu, label: 'AI Enthusiast' },
];

function AboutCard() {
  return (
    <GlassCard className="about-card">
      <div className="about-card-content">
        <div>
          <span className="about-card-label">Professional Introduction</span>
          <p>
            Singidi Sai Naga Sudheer is a Computer Science graduate with hands-on
            experience in Python development, Artificial Intelligence, Machine
            Learning, and Full-Stack Web Development. He is skilled in building
            intelligent applications, data-driven solutions, and AI-powered systems
            using modern frameworks and development tools.
          </p>
        </div>

        <div>
          <span className="about-card-label">Career Goal</span>
          <p>
            Become a Junior AI Engineer and build intelligent software solutions
            that solve real-world problems while continuously learning modern AI
            technologies.
          </p>
        </div>

        <div>
          <span className="about-card-label">Core Values</span>
          <div className="value-grid" aria-label="Core values">
            {values.map(({ icon: Icon, label }) => (
              <div className="value-card" key={label}>
                <Icon aria-hidden="true" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

export default AboutCard;
