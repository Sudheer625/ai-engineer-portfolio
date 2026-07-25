import Card from './Card.jsx';

function CertificateCard({ children, ...props }) {
  return (
    <Card variant="certificate" interactive {...props}>
      {children}
    </Card>
  );
}

export default CertificateCard;
