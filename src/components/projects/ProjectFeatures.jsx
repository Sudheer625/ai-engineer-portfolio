import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { fadeUp, stagger } from '../../animations/index.js';
import GlassCard from '../ui/GlassCard.jsx';

function ProjectFeatures({ features }) {
  return (
    <motion.div className="project-feature-grid" variants={stagger}>
      {features.map((feature) => (
        <motion.div key={feature} variants={fadeUp}>
          <GlassCard className="project-feature-card" interactive>
            <FiCheckCircle aria-hidden="true" />
            <span>{feature}</span>
          </GlassCard>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ProjectFeatures;
