import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../../animations/index.js';
import GlassCard from '../../components/ui/GlassCard.jsx';
import { statusCards } from './contactData.js';

function StatusCards() {
  return (
    <motion.div className="status-card-grid" variants={stagger}>
      {statusCards.map(({ icon: Icon, title, value }) => (
        <motion.div key={title} variants={fadeUp}>
          <GlassCard className="status-card" interactive>
            <Icon aria-hidden="true" />
            <span>{title}</span>
            <strong>{value}</strong>
          </GlassCard>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default StatusCards;
