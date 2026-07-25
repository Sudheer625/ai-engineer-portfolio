import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../../animations/index.js';
import { architectureIcons } from '../../data/projects.js';
import GlassCard from '../ui/GlassCard.jsx';

function ProjectArchitecture({ items }) {
  return (
    <motion.div className="project-architecture-flow" variants={stagger}>
      {items.map((item) => {
        const Icon = architectureIcons[item];

        return (
          <motion.div key={item} variants={fadeUp}>
            <GlassCard className="architecture-node" interactive>
              {Icon && <Icon aria-hidden="true" />}
              <span>{item}</span>
            </GlassCard>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default ProjectArchitecture;
