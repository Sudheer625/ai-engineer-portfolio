import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { fadeUp, stagger } from '../../animations/index.js';
import Button from '../../components/ui/Button.jsx';
import GlassCard from '../../components/ui/GlassCard.jsx';
import { directContacts } from './contactData.js';

function ContactCards() {
  return (
    <motion.div className="contact-card-grid" variants={stagger}>
      {directContacts.map(({ icon: Icon, title, description, actionLabel, href }) => (
        <motion.div key={title} variants={fadeUp}>
          <GlassCard className="direct-contact-card" interactive>
            <span className="contact-card-icon" aria-hidden="true">
              <Icon />
            </span>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <Button as="a" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} variant="outline" size="sm">
              {actionLabel}
              <FiArrowRight aria-hidden="true" />
            </Button>
          </GlassCard>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ContactCards;
