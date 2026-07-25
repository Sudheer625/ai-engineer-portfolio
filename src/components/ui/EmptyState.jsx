import { FiInbox } from 'react-icons/fi';
import Button from './Button.jsx';

function EmptyState({ icon: Icon = FiInbox, title, description, actionLabel, onAction }) {
  return (
    <div className="empty-state" role="status">
      <div className="empty-state-icon">
        <Icon aria-hidden="true" />
      </div>
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
      {actionLabel && (
        <Button variant="secondary" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}

export default EmptyState;
