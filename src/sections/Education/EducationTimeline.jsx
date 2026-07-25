import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar, FiCpu } from 'react-icons/fi';
import { fadeUp, stagger } from '../../animations/index.js';
import { Timeline } from '../../components/timeline/index.js';
import EducationCard from './EducationCard.jsx';

const educationItems = [
  {
    icon: FiCpu,
    degree: 'Bachelor of Technology',
    field: 'Computer Science and Engineering',
    institution: 'Sri Venkateswara College of Engineering and Technology',
    duration: '2022 - 2026',
    scoreLabel: 'SGPA',
    score: '8.0',
  },
  {
    icon: FiBookOpen,
    degree: 'Intermediate (MPC)',
    institution: 'Sri Chaitanya Junior College',
    duration: '2022',
    scoreLabel: 'Score',
    score: '73%',
  },
  {
    icon: FiCalendar,
    degree: 'Secondary School',
    institution: 'Bhashyam High School',
    duration: '2020',
    scoreLabel: 'CGPA',
    score: '10',
  },
];

function EducationTimeline() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
    >
      <Timeline className="education-timeline" ariaLabel="Education timeline">
        {educationItems.map((item) => (
          <motion.li key={item.degree} className="timeline-item education-timeline-item" variants={fadeUp}>
            <span className="timeline-marker journey-marker" aria-hidden="true">
              <item.icon />
            </span>
            <EducationCard {...item} />
          </motion.li>
        ))}
      </Timeline>
    </motion.div>
  );
}

export default EducationTimeline;
