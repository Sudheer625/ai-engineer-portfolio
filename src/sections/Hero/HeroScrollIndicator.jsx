import { FiChevronDown } from 'react-icons/fi';

function HeroScrollIndicator() {
  return (
    <a className="hero-scroll-indicator" href="#main-content" aria-label="Scroll to next section">
      <span className="hero-mouse" aria-hidden="true">
        <span />
      </span>
      <FiChevronDown aria-hidden="true" />
    </a>
  );
}

export default HeroScrollIndicator;
