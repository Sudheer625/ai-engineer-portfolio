import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Badge from '../ui/Badge.jsx';
import Button from '../ui/Button.jsx';
import GlassCard from '../ui/GlassCard.jsx';

function ProjectLinks({ project }) {
  return (
    <GlassCard className="project-links-card">
      <div>
        <span className="case-study-kicker">Project Links</span>
        <h2>Explore the project</h2>
        <p>Open the source code, live deployment, or current project status.</p>
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
            Live Demo Coming Soon
          </Button>
        )}
        <Badge variant={project.status === 'Live' ? 'secondary' : 'primary'}>{project.status}</Badge>
      </div>
    </GlassCard>
  );
}

export default ProjectLinks;
