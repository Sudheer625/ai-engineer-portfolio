import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../../animations/index.js';
import { techIcons } from '../../data/projects.js';
import GlassCard from '../ui/GlassCard.jsx';

function ProjectTechStack({ tech }) {
  return (
    <motion.div className="project-tech-grid" variants={stagger}>
      {tech.map((item) => {
        const Icon = techIcons[item];

        return (
          <motion.div key={item} variants={fadeUp}>
            <GlassCard className="project-tech-card" interactive>
              {Icon && <Icon aria-hidden="true" />}
              <span>{item}</span>
            </GlassCard>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default ProjectTechStack;
