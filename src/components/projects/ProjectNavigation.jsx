import { FiArrowLeft, FiArrowRight, FiGrid } from 'react-icons/fi';
import Button from '../ui/Button.jsx';
import GlassCard from '../ui/GlassCard.jsx';

function ProjectNavigation({ previous, next }) {
  return (
    <nav className="project-navigation" aria-label="Project navigation">
      <GlassCard className="project-nav-card">
        <Button as="a" href={`/project/${previous.id}`} variant="ghost">
          <FiArrowLeft aria-hidden="true" />
          {previous.title}
        </Button>
        <Button as="a" href="/#projects" variant="primary">
          <FiGrid aria-hidden="true" />
          Back to Projects
        </Button>
        <Button as="a" href={`/project/${next.id}`} variant="ghost">
          {next.title}
          <FiArrowRight aria-hidden="true" />
        </Button>
      </GlassCard>
    </nav>
  );
}

export default ProjectNavigation;
