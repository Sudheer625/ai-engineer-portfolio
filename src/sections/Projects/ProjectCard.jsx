import { FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi';
import Button from '../../components/ui/Button.jsx';
import GlassCard from '../../components/ui/GlassCard.jsx';
import Tag from '../../components/ui/Tag.jsx';
import ProjectThumbnail from './ProjectThumbnail.jsx';

function ProjectCard({ project }) {
  return (
    <GlassCard className="project-card" interactive>
      <ProjectThumbnail type={project.thumbnail} title={project.title} />
      <div className="project-card-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech-list" aria-label={`${project.title} technology stack`}>
          {project.tech.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
        <div className="project-actions project-card-actions">
          {project.github && (
            <Button as="a" href={project.github} target="_blank" rel="noreferrer" variant="ghost" size="sm">
              <FiGithub aria-hidden="true" />
              GitHub
            </Button>
          )}
          {project.live && (
            <Button as="a" href={project.live} target="_blank" rel="noreferrer" variant="outline" size="sm">
              <FiExternalLink aria-hidden="true" />
              Live
            </Button>
          )}
          <Button as="a" href={`/project/${project.id}`} variant="secondary" size="sm">
            <FiArrowRight aria-hidden="true" />
            Details
          </Button>
        </div>
      </div>
    </GlassCard>
  );
}

export default ProjectCard;
