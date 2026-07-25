import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../../animations/index.js';
import { professionalHighlights } from '../../data/resumeData.js';
import GlassCard from '../ui/GlassCard.jsx';

function ProfessionalHighlights() {
  return (
    <motion.div className="highlight-grid" variants={stagger}>
      {professionalHighlights.map(({ title, icon: Icon }) => (
        <motion.div key={title} variants={fadeUp}>
          <GlassCard className="highlight-card" interactive>
            <Icon aria-hidden="true" />
            <span>{title}</span>
          </GlassCard>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ProfessionalHighlights;
