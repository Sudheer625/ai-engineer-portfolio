import { thumbnailAccents } from '../../sections/Projects/projectsData.js';

function ProjectThumbnail({ type, title, size = 'default' }) {
  const thumbnail = thumbnailAccents[type];
  const Icon = thumbnail.icon;

  return (
    <div className={`project-thumbnail project-thumbnail-${type} project-thumbnail-${size}`} aria-label={`${title} visual preview`}>
      <div className="thumbnail-grid" aria-hidden="true" />
      <span className="thumbnail-orbit thumbnail-orbit-one" aria-hidden="true" />
      <span className="thumbnail-orbit thumbnail-orbit-two" aria-hidden="true" />
      <div className="thumbnail-center">
        <Icon aria-hidden="true" />
        <span>{thumbnail.label}</span>
      </div>
    </div>
  );
}

export default ProjectThumbnail;
