import { motion } from 'framer-motion';
import { FiBookOpen, FiBriefcase, FiCode, FiCpu, FiTarget, FiTool } from 'react-icons/fi';
import { fadeUp, stagger } from '../../animations/index.js';
import { Timeline } from '../../components/timeline/index.js';
import Card from '../../components/ui/Card.jsx';

const timelineItems = [
  {
    icon: FiBookOpen,
    title: 'Started Computer Science journey',
    text: 'Built the foundation for software engineering, algorithms, and structured problem solving.',
  },
  {
    icon: FiCode,
    title: 'Learned Python and Web Development',
    text: 'Gained hands-on practice with Python, JavaScript, React, Flask, and practical web workflows.',
  },
  {
    icon: FiCpu,
    title: 'Entered AI and Machine Learning',
    text: 'Explored machine learning concepts, model development, data handling, and modern AI tooling.',
  },
  {
    icon: FiTool,
    title: 'Built Real-world AI Projects',
    text: 'Applied AI and full-stack skills to create intelligent applications and data-driven solutions.',
  },
  {
    icon: FiBriefcase,
    title: 'Internship Experience',
    text: 'Strengthened development discipline through collaborative work, implementation, and delivery.',
  },
  {
    icon: FiTarget,
    title: 'Now preparing for Junior AI Engineer opportunities',
    text: 'Focused on building production-minded AI skills and contributing to impactful software teams.',
  },
];

function AboutTimeline() {
  return (
    <motion.div variants={stagger}>
      <Timeline className="about-timeline" ariaLabel="About journey timeline">
        {timelineItems.map(({ icon: Icon, title, text }) => (
          <motion.li
            key={title}
            className="timeline-item about-timeline-item"
            variants={fadeUp}
          >
            <span className="timeline-marker about-timeline-marker" aria-hidden="true">
              <Icon />
            </span>
            <Card variant="timeline" className="timeline-card about-timeline-card" interactive>
              <h3>{title}</h3>
              <p>{text}</p>
            </Card>
          </motion.li>
        ))}
      </Timeline>
    </motion.div>
  );
}

export default AboutTimeline;
