import Card from './Card.jsx';

function InfoCard({ children, ...props }) {
  return (
    <Card variant="info" {...props}>
      {children}
    </Card>
  );
}

export default InfoCard;
