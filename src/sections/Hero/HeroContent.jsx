import { motion } from 'framer-motion';
import { fadeUp } from '../../animations/index.js';

const careerGoals = [
  'Python Developer',
  'Junior AI Engineer',
  'Machine Learning Engineer',
  'Software Developer',
];

function HeroContent() {
  return (
    <div className="hero-content">
      <motion.p className="hero-greeting" variants={fadeUp}>
        Hello, I am
      </motion.p>
      <motion.h1 id="hero-title" variants={fadeUp}>
        Singidi Sai Naga Sudheer
      </motion.h1>
      <motion.p className="hero-tagline" variants={fadeUp}>
        B.Tech Graduate 🎓 | Python 🐍 | AI Workflows 🤖 | Freelancer 💸
      </motion.p>
      <motion.p className="hero-summary" variants={fadeUp}>
        Computer Science graduate with hands-on experience in Python development,
        Artificial Intelligence, Machine Learning, and Full-Stack Web Development.
        Skilled in building intelligent applications, data-driven solutions, and
        AI-powered systems using modern frameworks and development tools.
      </motion.p>
      <motion.div className="hero-goals" aria-label="Seeking opportunities as" variants={fadeUp}>
        <span>Seeking opportunities as</span>
        <ul>
          {careerGoals.map((goal) => (
            <li key={goal}>{goal}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default HeroContent;
