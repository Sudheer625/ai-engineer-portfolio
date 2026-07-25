import { thumbnailAccents } from './projectsData.js';

function ProjectThumbnail({ type, title }) {
  const thumbnail = thumbnailAccents[type];
  const Icon = thumbnail.icon;

  return (
    <div className={`project-thumbnail project-thumbnail-${type}`} aria-label={`${title} project preview`}>
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
