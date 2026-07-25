import { FiArrowRight, FiGithub } from 'react-icons/fi';
import Badge from '../../components/ui/Badge.jsx';
import Button from '../../components/ui/Button.jsx';
import GlassCard from '../../components/ui/GlassCard.jsx';
import Tag from '../../components/ui/Tag.jsx';
import ProjectThumbnail from './ProjectThumbnail.jsx';

function FeaturedProject({ project }) {
  return (
    <GlassCard className="featured-project-card" interactive>
      <ProjectThumbnail type={project.thumbnail} title={project.title} />
      <div className="featured-project-content">
        <Badge>{project.badge}</Badge>
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <div className="project-tech-list" aria-label={`${project.title} technology stack`}>
          {project.tech.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
        <div className="project-actions">
          <Button as="a" href={project.github} target="_blank" rel="noreferrer" variant="primary">
            <FiGithub aria-hidden="true" />
            GitHub
          </Button>
          <Button as="a" href={`/project/${project.id}`} variant="secondary">
            <FiArrowRight aria-hidden="true" />
            View Details
          </Button>
          <Button variant="outline" disabled>
            Coming Soon
          </Button>
        </div>
      </div>
    </GlassCard>
  );
}

export default FeaturedProject;
