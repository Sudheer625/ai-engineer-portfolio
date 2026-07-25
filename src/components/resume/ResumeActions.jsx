import Button from '../ui/Button.jsx';
import { RESUME_FILE, resumeActions } from '../../data/resumeData.js';

function ResumeActions({ onPreview }) {
  const handleAction = (action) => {
    if (action === 'preview') {
      onPreview();
      return;
    }

    if (action === 'open') {
      window.open(RESUME_FILE, '_blank', 'noopener,noreferrer');
      return;
    }

    if (action === 'print') {
      const printWindow = window.open(RESUME_FILE, '_blank', 'noopener,noreferrer');
      if (printWindow) {
        printWindow.addEventListener('load', () => printWindow.print(), { once: true });
      }
    }
  };

  return (
    <div className="resume-actions" aria-label="Resume actions">
      {resumeActions.map(({ label, icon: Icon, action, variant }) => {
        if (action === 'download') {
          return (
            <Button key={label} as="a" href={RESUME_FILE} download variant={variant}>
              <Icon aria-hidden="true" />
              {label}
            </Button>
          );
        }

        return (
          <Button key={label} variant={variant} onClick={() => handleAction(action)}>
            <Icon aria-hidden="true" />
            {label}
          </Button>
        );
      })}
    </div>
  );
}

export default ResumeActions;
