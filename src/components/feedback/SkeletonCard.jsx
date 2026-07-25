function SkeletonCard({ lines = 3 }) {
  return (
    <div className="skeleton-card" aria-hidden="true">
      <div className="skeleton skeleton-media" />
      <div className="skeleton-stack">
        {Array.from({ length: lines }).map((_, index) => (
          <div key={index} className="skeleton skeleton-line" />
        ))}
      </div>
    </div>
  );
}

export default SkeletonCard;
