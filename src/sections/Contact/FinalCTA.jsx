import { FiArrowRight, FiFileText, FiMail } from 'react-icons/fi';
import Button from '../../components/ui/Button.jsx';
import GlassCard from '../../components/ui/GlassCard.jsx';
import { contactLinks } from './contactData.js';

function FinalCTA() {
  return (
    <GlassCard className="contact-final-cta">
      <div>
        <h3>Interested in working together?</h3>
        <p>Let's build intelligent software that solves real-world problems.</p>
      </div>
      <div className="contact-cta-actions">
        <Button as="a" href={`mailto:${contactLinks.email}`} variant="primary">
          <FiMail aria-hidden="true" />
          Send Email
        </Button>
        <Button as="a" href="/resume" variant="secondary">
          <FiFileText aria-hidden="true" />
          View Resume
        </Button>
        <Button as="a" href="#projects" variant="outline">
          View Projects
          <FiArrowRight aria-hidden="true" />
        </Button>
      </div>
    </GlassCard>
  );
}

export default FinalCTA;
