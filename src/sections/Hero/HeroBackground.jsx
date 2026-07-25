import { FiActivity, FiCpu, FiDatabase, FiTerminal } from 'react-icons/fi';
import AnimatedGridBackground from '../../components/backgrounds/AnimatedGridBackground.jsx';
import AuroraBackground from '../../components/backgrounds/AuroraBackground.jsx';

const icons = [FiCpu, FiTerminal, FiDatabase, FiActivity];

function HeroBackground() {
  return (
    <div className="hero-background" aria-hidden="true">
      <AuroraBackground className="hero-aurora" />
      <AnimatedGridBackground className="hero-grid-bg" />
      <div className="hero-glow hero-glow-primary" />
      <div className="hero-glow hero-glow-secondary" />
      <div className="hero-floating-icons">
        {icons.map((Icon, index) => (
          <span key={index}>
            <Icon />
          </span>
        ))}
      </div>
    </div>
  );
}

export default HeroBackground;
