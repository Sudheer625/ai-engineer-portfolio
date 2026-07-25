import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import IconButton from '../ui/IconButton.jsx';

function ScrollToTop({ threshold = 480 }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > threshold);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <IconButton
      className={`scroll-to-top ${isVisible ? 'is-visible' : ''}`}
      label="Back to top"
      onClick={scrollToTop}
    >
      <FiArrowUp aria-hidden="true" />
    </IconButton>
  );
}

export default ScrollToTop;
