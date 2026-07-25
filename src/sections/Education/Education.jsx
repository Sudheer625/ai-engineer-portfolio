import AnimatedGridBackground from '../../components/backgrounds/AnimatedGridBackground.jsx';
import AuroraBackground from '../../components/backgrounds/AuroraBackground.jsx';
import Container from '../../components/ui/Container.jsx';
import SectionTitle from '../../components/ui/SectionTitle.jsx';
import EducationTimeline from './EducationTimeline.jsx';

function Education() {
  return (
    <section className="journey-section education-section" id="education" aria-labelledby="education-title">
      <div className="section-background" aria-hidden="true">
        <AuroraBackground className="section-aurora" />
        <AnimatedGridBackground className="section-grid-bg" />
      </div>
      <Container>
        <SectionTitle
          eyebrow="Education"
          title="Education"
          subtitle="Academic foundation shaped through computer science, mathematics, and consistent performance."
        />
        <EducationTimeline />
      </Container>
    </section>
  );
}

export default Education;
