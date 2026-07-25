import { motion } from 'framer-motion';
import { FiFileText } from 'react-icons/fi';
import { fadeUp } from '../../animations/index.js';
import AnimatedGridBackground from '../backgrounds/AnimatedGridBackground.jsx';
import AuroraBackground from '../backgrounds/AuroraBackground.jsx';
import Badge from '../ui/Badge.jsx';
import Container from '../ui/Container.jsx';

function ResumeHero() {
  return (
    <section className="resume-hero" aria-labelledby="resume-title">
      <div className="section-background" aria-hidden="true">
        <AuroraBackground className="section-aurora" />
        <AnimatedGridBackground className="section-grid-bg" />
      </div>
      <Container>
        <motion.div
          className="resume-hero-content"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <Badge>Professional Profile</Badge>
          <div className="resume-hero-icon" aria-hidden="true">
            <FiFileText />
          </div>
          <h1 id="resume-title">Resume</h1>
          <p>View, download and explore my professional profile.</p>
        </motion.div>
      </Container>
    </section>
  );
}

export default ResumeHero;
