import { FiSearch } from 'react-icons/fi';

function ProjectSearch({ value, onChange }) {
  return (
    <label className="project-search">
      <span className="sr-only">Search projects by title</span>
      <FiSearch aria-hidden="true" />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search projects"
        aria-label="Search projects by title"
      />
    </label>
  );
}

export default ProjectSearch;
