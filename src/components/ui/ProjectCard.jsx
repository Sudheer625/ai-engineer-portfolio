import Card from './Card.jsx';

function ProjectCard({ children, ...props }) {
  return (
    <Card variant="project" interactive {...props}>
      {children}
    </Card>
  );
}

export default ProjectCard;
