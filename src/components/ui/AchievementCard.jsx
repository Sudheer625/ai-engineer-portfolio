import Card from './Card.jsx';

function AchievementCard({ children, ...props }) {
  return (
    <Card variant="achievement" interactive {...props}>
      {children}
    </Card>
  );
}

export default AchievementCard;
