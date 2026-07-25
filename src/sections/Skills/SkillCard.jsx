import { motion } from 'framer-motion';
import { fadeUp, hoverLift } from '../../animations/index.js';
import Card from '../../components/ui/Card.jsx';

function SkillCard({ icon: Icon, name }) {
  return (
    <motion.div variants={fadeUp} whileHover={hoverLift}>
      <Card className="skill-card" interactive aria-label={name}>
        <span className="skill-icon" aria-hidden="true">
          <Icon />
        </span>
        <span>{name}</span>
      </Card>
    </motion.div>
  );
}

export default SkillCard;
