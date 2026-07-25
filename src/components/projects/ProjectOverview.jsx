import { motion } from 'framer-motion';
import { FiCpu, FiTarget, FiTool, FiUsers } from 'react-icons/fi';
import { fadeUp, stagger } from '../../animations/index.js';
import GlassCard from '../ui/GlassCard.jsx';

const overviewFields = [
  { key: 'purpose', label: 'Purpose', icon: FiTarget },
  { key: 'targetUsers', label: 'Target Users', icon: FiUsers },
  { key: 'mainTechnologies', label: 'Main Technologies', icon: FiCpu },
  { key: 'developmentType', label: 'Development Type', icon: FiTool },
];

function ProjectOverview({ overview }) {
  return (
    <motion.div className="project-overview-grid" variants={stagger}>
      {overviewFields.map(({ key, label, icon: Icon }) => (
        <motion.div key={key} variants={fadeUp}>
          <GlassCard className="project-overview-card" interactive>
            <Icon aria-hidden="true" />
            <span>{label}</span>
            <p>{overview[key]}</p>
          </GlassCard>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ProjectOverview;
