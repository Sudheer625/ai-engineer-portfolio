import { FiAward, FiDownload, FiEye } from 'react-icons/fi';
import Badge from '../ui/Badge.jsx';
import Button from '../ui/Button.jsx';
import GlassCard from '../ui/GlassCard.jsx';

function CertificateCard({ title, provider, status, file }) {
  return (
    <GlassCard className="certificate-card" interactive>
      <div className="certificate-icon" aria-hidden="true">
        <FiAward />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{provider}</p>
      </div>
      <Badge variant="secondary">{status}</Badge>
      <div className="certificate-actions">
        {file ? (
          <>
            <Button as="a" href={file} target="_blank" rel="noreferrer" size="sm" variant="outline">
              <FiEye aria-hidden="true" />
              Preview
            </Button>
            <Button as="a" href={file} download size="sm" variant="ghost">
              <FiDownload aria-hidden="true" />
              Download
            </Button>
          </>
        ) : (
          <Button size="sm" variant="outline" disabled>
            Coming Soon
          </Button>
        )}
      </div>
    </GlassCard>
  );
}

export default CertificateCard;
