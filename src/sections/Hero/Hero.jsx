import { motion } from 'framer-motion';
import { fadeLeft, fadeRight, stagger } from '../../animations/index.js';
import Container from '../../components/ui/Container.jsx';
import HeroBackground from './HeroBackground.jsx';
import HeroButtons from './HeroButtons.jsx';
import HeroContent from './HeroContent.jsx';
import HeroImage from './HeroImage.jsx';
import HeroScrollIndicator from './HeroScrollIndicator.jsx';
import HeroSocials from './HeroSocials.jsx';

function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <HeroBackground />
      <Container className="hero-container">
        <motion.div
          className="hero-grid"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div className="hero-copy" variants={fadeRight}>
            <HeroContent />
            <HeroButtons />
            <HeroSocials />
          </motion.div>

          <motion.div className="hero-visual" variants={fadeLeft}>
            <HeroImage />
          </motion.div>
        </motion.div>
      </Container>
      <HeroScrollIndicator />
    </section>
  );
}

export default Hero;
