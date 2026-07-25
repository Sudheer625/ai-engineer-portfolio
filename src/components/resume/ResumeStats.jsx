import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../../animations/index.js';
import { resumeStats } from '../../data/resumeData.js';
import GlassCard from '../ui/GlassCard.jsx';

function ResumeStats() {
  return (
    <motion.div className="resume-stats-grid" variants={stagger}>
      {resumeStats.map((stat) => (
        <motion.div key={stat.label} variants={fadeUp}>
          <GlassCard className="resume-stat-card" interactive>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </GlassCard>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ResumeStats;
