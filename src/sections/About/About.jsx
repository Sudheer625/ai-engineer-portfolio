import { motion } from 'framer-motion';
import { fadeLeft, fadeRight, stagger } from '../../animations/index.js';
import AnimatedGridBackground from '../../components/backgrounds/AnimatedGridBackground.jsx';
import AuroraBackground from '../../components/backgrounds/AuroraBackground.jsx';
import Container from '../../components/ui/Container.jsx';
import SectionTitle from '../../components/ui/SectionTitle.jsx';
import AboutCard from './AboutCard.jsx';
import AboutTimeline from './AboutTimeline.jsx';

function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="section-background" aria-hidden="true">
        <AuroraBackground className="section-aurora" />
        <AnimatedGridBackground className="section-grid-bg" />
      </div>
      <Container>
        <SectionTitle
          eyebrow="About"
          title="About Me"
          subtitle="A focused Computer Science graduate building toward intelligent, real-world software."
        />

        <motion.div
          className="about-layout"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={stagger}
        >
          <motion.div variants={fadeRight}>
            <AboutTimeline />
          </motion.div>
          <motion.div variants={fadeLeft}>
            <AboutCard />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export default About;
