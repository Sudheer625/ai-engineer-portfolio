import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../../animations/index.js';
import GlassCard from '../../components/ui/GlassCard.jsx';
import SkillCard from './SkillCard.jsx';

function SkillCategory({ icon: Icon, title, description, skills }) {
  return (
    <motion.div variants={fadeUp}>
      <GlassCard className="skill-category">
        <div className="skill-category-header">
          <span className="skill-category-icon" aria-hidden="true">
            <Icon />
          </span>
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>

        <motion.div className="skill-grid" variants={stagger}>
          {skills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </motion.div>
      </GlassCard>
    </motion.div>
  );
}

export default SkillCategory;
