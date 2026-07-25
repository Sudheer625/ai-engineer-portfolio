import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../../animations/index.js';
import AnimatedGridBackground from '../../components/backgrounds/AnimatedGridBackground.jsx';
import AuroraBackground from '../../components/backgrounds/AuroraBackground.jsx';
import Container from '../../components/ui/Container.jsx';
import SectionTitle from '../../components/ui/SectionTitle.jsx';
import ExperienceCard from './ExperienceCard.jsx';

const internships = [
  {
    company: 'Seaok Innovations Private Limited',
    role: 'Data Science with AI Intern',
    duration: 'February 2026 - June 2026',
    highlights: [
      'Developed Machine Learning dashboards',
      'Improved model efficiency by 70%',
      'Worked on predictive analytics',
      'Data preprocessing',
    ],
  },
  {
    company: 'Averixis Solutions',
    role: 'Web Development Intern',
    duration: 'October 2025 - December 2025',
    highlights: [
      'Built startup web applications',
      'Created LMS platform',
      'Integrated AI workflows',
      'Worked on React and backend development',
    ],
  },
];

function Experience() {
  return (
    <section className="journey-section experience-section" id="experience" aria-labelledby="experience-title">
      <div className="section-background" aria-hidden="true">
        <AuroraBackground className="section-aurora" />
        <AnimatedGridBackground className="section-grid-bg" />
      </div>
      <Container>
        <SectionTitle
          eyebrow="Internship"
          title="Experience"
          subtitle="Practical internship work across AI, data science, full-stack development, and product workflows."
        />

        <motion.div
          className="experience-list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={stagger}
        >
          {internships.map((internship, index) => (
            <motion.div key={internship.company} variants={fadeUp}>
              <ExperienceCard {...internship} align={index % 2 === 0 ? 'left' : 'right'} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

export default Experience;
