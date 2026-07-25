import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../../animations/index.js';
import { scoreCards } from '../../data/scorecards.js';
import GlassCard from '../ui/GlassCard.jsx';

function ScoreCards() {
  return (
    <motion.div className="score-card-grid" variants={stagger}>
      {scoreCards.map(({ title, label, value, icon: Icon }) => (
        <motion.div key={title} variants={fadeUp}>
          <GlassCard className="score-card" interactive>
            <span className="score-icon" aria-hidden="true">
              <Icon />
            </span>
            <div>
              <span>{label}</span>
              <strong>{value}</strong>
              <p>{title}</p>
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ScoreCards;
