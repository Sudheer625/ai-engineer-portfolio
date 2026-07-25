import { motion } from 'framer-motion';
import { FiBriefcase, FiTarget, FiUsers } from 'react-icons/fi';
import { fadeUp, hoverLift } from '../../animations/index.js';
import AnimatedGridBackground from '../../components/backgrounds/AnimatedGridBackground.jsx';
import AuroraBackground from '../../components/backgrounds/AuroraBackground.jsx';
import Container from '../../components/ui/Container.jsx';
import GlassCard from '../../components/ui/GlassCard.jsx';
import SectionTitle from '../../components/ui/SectionTitle.jsx';

const roles = ['Founder', 'Mentor', 'Freelancer'];

function Leadership() {
  return (
    <section className="journey-section leadership-section" id="leadership" aria-labelledby="leadership-title">
      <div className="section-background" aria-hidden="true">
        <AuroraBackground className="section-aurora" />
        <AnimatedGridBackground className="section-grid-bg" />
      </div>
      <Container>
        <SectionTitle
          eyebrow="Leadership"
          title="Leadership & Entrepreneurship"
          subtitle="Building mentorship, services, and AI-powered education through Karna Solutions."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          whileHover={hoverLift}
        >
          <GlassCard className="leadership-card" interactive>
            <div className="leadership-icon" aria-hidden="true">
              <FiTarget />
            </div>
            <div className="leadership-content">
              <span className="journey-kicker">Karna Solutions</span>
              <h3>Founder, Mentor, Freelancer</h3>
              <p>
                Founded Karna Solutions to mentor students, provide software development
                services, and build AI-powered educational products.
              </p>
              <div className="leadership-roles" aria-label="Leadership roles">
                {roles.map((role) => (
                  <span key={role}>
                    {role === 'Mentor' ? <FiUsers aria-hidden="true" /> : <FiBriefcase aria-hidden="true" />}
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </Container>
    </section>
  );
}

export default Leadership;
