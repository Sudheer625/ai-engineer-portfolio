import { motion } from 'framer-motion';
import { FiAward, FiCode, FiCpu, FiStar, FiTrendingUp, FiUsers } from 'react-icons/fi';
import { fadeUp, stagger } from '../../animations/index.js';
import AnimatedGridBackground from '../../components/backgrounds/AnimatedGridBackground.jsx';
import AuroraBackground from '../../components/backgrounds/AuroraBackground.jsx';
import Container from '../../components/ui/Container.jsx';
import SectionTitle from '../../components/ui/SectionTitle.jsx';
import AchievementCard from './AchievementCard.jsx';

const achievements = [
  {
    icon: FiTrendingUp,
    label: 'AP PGECET State Rank',
    value: '296',
  },
  {
    icon: FiAward,
    label: '2nd Prize',
    detail: 'GEN-AI Hackathon, ZentroByte Solutions',
  },
  {
    icon: FiStar,
    label: 'Participant',
    detail: 'GenAIVersity 48-Hour Hackathon',
  },
  {
    icon: FiUsers,
    label: 'Conducted Programming Training',
    detail: 'C Language and Python',
  },
  {
    icon: FiCpu,
    label: 'Built Multiple AI and Full Stack Applications',
    detail: 'Applied AI workflows, software engineering, and deployment skills.',
  },
  {
    icon: FiCode,
    label: 'Real-world Development Practice',
    detail: 'Converted learning into portfolio-ready intelligent applications.',
  },
];

function Achievements() {
  return (
    <section className="journey-section achievements-section" id="achievements" aria-labelledby="achievements-title">
      <div className="section-background" aria-hidden="true">
        <AuroraBackground className="section-aurora" />
        <AnimatedGridBackground className="section-grid-bg" />
      </div>
      <Container>
        <SectionTitle
          eyebrow="Milestones"
          title="Achievements"
          subtitle="Recognition, competitive participation, teaching, and real-world project execution."
        />

        <motion.div
          className="achievement-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.14 }}
          variants={stagger}
        >
          {achievements.map((achievement) => (
            <motion.div key={achievement.label} variants={fadeUp}>
              <AchievementCard {...achievement} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

export default Achievements;
