import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../../animations/index.js';
import GlassCard from '../../components/ui/GlassCard.jsx';
import { projectStats } from './projectsData.js';

function ProjectStats() {
  return (
    <motion.div className="project-stats" variants={stagger}>
      {projectStats.map((stat) => (
        <motion.div key={stat.label} variants={fadeUp}>
          <GlassCard className="project-stat-card" interactive>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </GlassCard>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ProjectStats;
