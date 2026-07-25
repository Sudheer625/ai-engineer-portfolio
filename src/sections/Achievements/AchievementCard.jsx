import GlassCard from '../../components/ui/GlassCard.jsx';

function AchievementCard({ icon: Icon, label, value, detail }) {
  return (
    <GlassCard className="journey-achievement-card" interactive>
      <span className="achievement-icon" aria-hidden="true">
        <Icon />
      </span>
      <div>
        {value && <strong className="achievement-value">{value}</strong>}
        <h3>{label}</h3>
        {detail && <p>{detail}</p>}
      </div>
    </GlassCard>
  );
}

export default AchievementCard;
