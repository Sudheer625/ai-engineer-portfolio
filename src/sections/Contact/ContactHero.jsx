import { motion } from 'framer-motion';
import { fadeUp } from '../../animations/index.js';
import AnimatedGridBackground from '../../components/backgrounds/AnimatedGridBackground.jsx';
import AuroraBackground from '../../components/backgrounds/AuroraBackground.jsx';
import Badge from '../../components/ui/Badge.jsx';
import Container from '../../components/ui/Container.jsx';

function ContactHero() {
  return (
    <section className="contact-hero" aria-labelledby="contact-title">
      <div className="section-background" aria-hidden="true">
        <AuroraBackground className="section-aurora" />
        <AnimatedGridBackground className="section-grid-bg" />
      </div>
      <Container>
        <motion.div
          className="contact-hero-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
        >
          <Badge>Contact & Connect</Badge>
          <h2 id="contact-title">Let's Build Something Amazing Together</h2>
          <p>
            Whether you're looking for a Python Developer, Junior AI Engineer, or
            someone passionate about AI-powered software, I'd love to connect and
            discuss new opportunities.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

export default ContactHero;
