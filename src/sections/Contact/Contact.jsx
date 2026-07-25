import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../../animations/index.js';
import Container from '../../components/ui/Container.jsx';
import SectionTitle from '../../components/ui/SectionTitle.jsx';
import ContactCards from './ContactCards.jsx';
import ContactForm from './ContactForm.jsx';
import ContactHero from './ContactHero.jsx';
import FAQ from './FAQ.jsx';
import FinalCTA from './FinalCTA.jsx';
import StatusCards from './StatusCards.jsx';

function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <ContactHero />

      <Container>
        <motion.div
          className="contact-layout"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={stagger}
        >
          <ContactForm />
          <motion.div variants={fadeUp}>
            <SectionTitle
              eyebrow="Direct Contact"
              title="Connect directly"
              subtitle="Choose the channel that works best for recruiters, collaborators, or clients."
            />
            <ContactCards />
          </motion.div>
        </motion.div>
      </Container>

      <ContactBlock
        eyebrow="Status"
        title="Current Status"
        subtitle="Availability and preferred work areas at a glance."
      >
        <StatusCards />
      </ContactBlock>

      <ContactBlock
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        subtitle="Quick answers before starting a conversation."
      >
        <FAQ />
      </ContactBlock>

      <Container>
        <FinalCTA />
      </Container>
    </section>
  );
}

function ContactBlock({ eyebrow, title, subtitle, children }) {
  return (
    <section className="contact-block">
      <Container>
        <SectionTitle eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          {children}
        </motion.div>
      </Container>
    </section>
  );
}

export default Contact;
