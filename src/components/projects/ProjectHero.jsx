import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { fadeLeft, fadeRight, stagger } from '../../animations/index.js';
import AnimatedGridBackground from '../backgrounds/AnimatedGridBackground.jsx';
import AuroraBackground from '../backgrounds/AuroraBackground.jsx';
import Badge from '../ui/Badge.jsx';
import Button from '../ui/Button.jsx';
import Container from '../ui/Container.jsx';
import Tag from '../ui/Tag.jsx';
import ProjectThumbnail from './ProjectThumbnail.jsx';

function ProjectHero({ project }) {
  return (
    <section className="project-detail-hero" aria-labelledby="project-detail-title">
      <div className="section-background" aria-hidden="true">
        <AuroraBackground className="section-aurora" />
        <AnimatedGridBackground className="section-grid-bg" />
      </div>
      <Container>
        <motion.div className="project-detail-hero-grid" initial="hidden" animate="visible" variants={stagger}>
          <motion.div className="project-detail-hero-copy" variants={fadeRight}>
            <Badge>{project.category}</Badge>
            <h1 id="project-detail-title">{project.title}</h1>
            <p>{project.description}</p>
            <div className="project-tech-list" aria-label={`${project.title} technologies`}>
              {project.tech.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
            <div className="project-actions">
              {project.github && (
                <Button as="a" href={project.github} target="_blank" rel="noreferrer" variant="primary">
                  <FiGithub aria-hidden="true" />
                  GitHub
                </Button>
              )}
              {project.live ? (
                <Button as="a" href={project.live} target="_blank" rel="noreferrer" variant="secondary">
                  <FiExternalLink aria-hidden="true" />
                  Live Demo
                </Button>
              ) : (
                <Button variant="outline" disabled>
                  Coming Soon
                </Button>
              )}
            </div>
          </motion.div>
          <motion.div variants={fadeLeft}>
            <ProjectThumbnail type={project.thumbnail} title={project.title} size="large" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export default ProjectHero;
