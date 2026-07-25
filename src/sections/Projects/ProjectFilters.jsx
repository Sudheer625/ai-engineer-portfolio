import Button from '../../components/ui/Button.jsx';
import { filters } from './projectsData.js';

function ProjectFilters({ activeFilter, onChange }) {
  return (
    <div className="project-filters" role="list" aria-label="Project category filters">
      {filters.map((filter) => (
        <Button
          key={filter}
          variant={activeFilter === filter ? 'primary' : 'ghost'}
          size="sm"
          onClick={() => onChange(filter)}
          aria-pressed={activeFilter === filter}
        >
          {filter}
        </Button>
      ))}
    </div>
  );
}

export default ProjectFilters;
