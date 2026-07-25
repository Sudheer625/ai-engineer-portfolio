import { motion } from 'framer-motion';
import { FiBookOpen, FiCheckCircle, FiZap } from 'react-icons/fi';
import { fadeUp, stagger } from '../../animations/index.js';
import GlassCard from '../ui/GlassCard.jsx';

function ProjectChallenges({ challenges }) {
  return (
    <motion.div className="project-challenge-list" variants={stagger}>
      {challenges.map(({ challenge, solution, learning }) => (
        <motion.div key={challenge} variants={fadeUp}>
          <GlassCard className="project-challenge-card" interactive>
            <div>
              <FiZap aria-hidden="true" />
              <span>Challenge</span>
              <p>{challenge}</p>
            </div>
            <div>
              <FiCheckCircle aria-hidden="true" />
              <span>Solution</span>
              <p>{solution}</p>
            </div>
            <div>
              <FiBookOpen aria-hidden="true" />
              <span>Learning</span>
              <p>{learning}</p>
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ProjectChallenges;
