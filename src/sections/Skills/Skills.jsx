import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiLayout, FiServer, FiTool } from 'react-icons/fi';
import {
  SiFlask,
  SiGithub,
  SiGooglecolab,
  SiJavascript,
  SiNumpy,
  SiPandas,
  SiPytorch,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiTensorflow,
  SiVercel,
} from 'react-icons/si';
import { stagger } from '../../animations/index.js';
import AnimatedGridBackground from '../../components/backgrounds/AnimatedGridBackground.jsx';
import AuroraBackground from '../../components/backgrounds/AuroraBackground.jsx';
import Container from '../../components/ui/Container.jsx';
import SectionTitle from '../../components/ui/SectionTitle.jsx';
import SkillCategory from './SkillCategory.jsx';

const skillCategories = [
  {
    icon: FiCode,
    title: 'Programming Languages',
    description: 'Core languages used for logic, automation, and application development.',
    skills: [{ name: 'Python', icon: SiPython }, { name: 'JavaScript', icon: SiJavascript }],
  },
  {
    icon: FiLayout,
    title: 'Frontend',
    description: 'Interfaces built with reusable, responsive, component-driven systems.',
    skills: [{ name: 'ReactJS', icon: SiReact }],
  },
  {
    icon: FiServer,
    title: 'Backend',
    description: 'Server-side foundations for APIs, integrations, and intelligent web apps.',
    skills: [{ name: 'Flask', icon: SiFlask }],
  },
  {
    icon: FiCpu,
    title: 'AI / Machine Learning',
    description: 'Technologies for models, data workflows, experimentation, and AI systems.',
    skills: [
      { name: 'Machine Learning', icon: FiCpu },
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'PyTorch', icon: SiPytorch },
      { name: 'Scikit-Learn', icon: SiScikitlearn },
      { name: 'Pandas', icon: SiPandas },
      { name: 'NumPy', icon: SiNumpy },
      { name: 'Federated Learning', icon: FiCpu },
      { name: 'Prompt Engineering', icon: FiTool },
    ],
  },
  {
    icon: FiTool,
    title: 'Tools & Platforms',
    description: 'Daily development tools for coding, collaboration, deployment, and iteration.',
    skills: [
      { name: 'GitHub', icon: SiGithub },
      { name: 'VS Code', icon: FiCode },
      { name: 'Google Colab', icon: SiGooglecolab },
      { name: 'Lovable', icon: FiTool },
      { name: 'Vercel', icon: SiVercel },
    ],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-title">
      <div className="section-background" aria-hidden="true">
        <AuroraBackground className="section-aurora" />
        <AnimatedGridBackground className="section-grid-bg" />
      </div>
      <Container>
        <SectionTitle
          eyebrow="Skills"
          title="Technical Skills"
          subtitle="Technologies I use to build intelligent applications"
        />

        <motion.div
          className="skills-categories"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={stagger}
        >
          {skillCategories.map((category) => (
            <SkillCategory key={category.title} {...category} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

export default Skills;
