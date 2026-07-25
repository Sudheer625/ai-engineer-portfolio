import { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { RESUME_FILE } from '../../data/resumeData.js';
import Button from '../ui/Button.jsx';
import GlassCard from '../ui/GlassCard.jsx';

function ResumeViewer() {
  const [hasPreviewError, setHasPreviewError] = useState(false);

  return (
    <GlassCard className="resume-viewer-card">
      <div className="resume-viewer-header">
        <div>
          <span className="resume-kicker">Embedded Preview</span>
          <h2>Resume Preview</h2>
          <p>Review the PDF directly inside the portfolio dashboard.</p>
        </div>
        <Button as="a" href={RESUME_FILE} target="_blank" rel="noreferrer" variant="outline">
          <FiExternalLink aria-hidden="true" />
          Open Resume
        </Button>
      </div>

      {!hasPreviewError && (
        <div className="resume-frame-wrap">
          <iframe
            src={`${RESUME_FILE}#view=FitH`}
            title="Singidi Sai Naga Sudheer resume preview"
            loading="lazy"
            onError={() => setHasPreviewError(true)}
          />
        </div>
      )}

      <div className={`resume-mobile-fallback ${hasPreviewError ? 'is-visible' : ''}`}>
        <p>
          {hasPreviewError
            ? 'Resume preview could not be loaded here. Open the PDF in a new tab instead.'
            : 'PDF preview is easier to read in a separate tab on mobile devices.'}
        </p>
        <Button as="a" href={RESUME_FILE} target="_blank" rel="noreferrer" variant="primary">
          <FiExternalLink aria-hidden="true" />
          Open Resume
        </Button>
      </div>
    </GlassCard>
  );
}

export default ResumeViewer;
