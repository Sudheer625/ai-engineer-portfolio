import { motion } from 'framer-motion';
import { FiDownload, FiEye, FiGrid } from 'react-icons/fi';
import { fadeUp } from '../../animations/index.js';
import Button from '../../components/ui/Button.jsx';

function HeroButtons() {
  return (
    <motion.div className="hero-actions" variants={fadeUp}>
      <Button as="a" href="#projects" variant="primary">
        <FiGrid aria-hidden="true" />
        View Projects
      </Button>
      <Button as="a" href="/resume" variant="secondary">
        <FiEye aria-hidden="true" />
        Resume Preview
      </Button>
      <Button as="a" href="/resume.pdf" variant="outline" download>
        <FiDownload aria-hidden="true" />
        Download Resume
      </Button>
    </motion.div>
  );
}

export default HeroButtons;
