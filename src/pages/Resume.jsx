import { useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../animations/index.js';
import Certificates from '../components/resume/Certificates.jsx';
import ProfessionalHighlights from '../components/resume/ProfessionalHighlights.jsx';
import ResumeActions from '../components/resume/ResumeActions.jsx';
import ResumeHero from '../components/resume/ResumeHero.jsx';
import ResumeStats from '../components/resume/ResumeStats.jsx';
import ResumeViewer from '../components/resume/ResumeViewer.jsx';
import ScoreCards from '../components/resume/ScoreCards.jsx';
import SEO from '../components/seo/SEO.jsx';
import { PAGE_SEO } from '../constants/site.js';
import Container from '../components/ui/Container.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import PageLayout from '../layout/PageLayout.jsx';

function Resume() {
  const viewerRef = useRef(null);

  const scrollToViewer = () => {
    viewerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <PageLayout className="resume-page">
      <SEO {...PAGE_SEO.resume} canonical={PAGE_SEO.resume.path} />
      <ResumeHero />

      <ResumeSection title="Quick Statistics" subtitle="A fast snapshot of academic, project, and achievement milestones.">
        <ResumeStats />
      </ResumeSection>

      <ResumeSection title="Resume Actions" subtitle="Preview, download, print, or open the resume in a new tab.">
        <ResumeActions onPreview={scrollToViewer} />
      </ResumeSection>

      <ResumeSection
        title="Embedded Resume Preview"
        subtitle="A responsive PDF preview with a mobile-friendly open option."
        sectionRef={viewerRef}
      >
        <ResumeViewer />
      </ResumeSection>

      <ResumeSection title="Certificates" subtitle="Professional certificates and credentials.">
        <Certificates />
      </ResumeSection>

      <ResumeSection title="Score Cards" subtitle="Recruiter-friendly highlights across rankings, training, and project outcomes.">
        <ScoreCards />
      </ResumeSection>

      <ResumeSection title="Professional Highlights" subtitle="Core strengths reflected throughout the portfolio.">
        <ProfessionalHighlights />
      </ResumeSection>
    </PageLayout>
  );
}

function ResumeSection({ title, subtitle, children, sectionRef }) {
  return (
    <section className="resume-section" ref={sectionRef}>
      <Container>
        <SectionTitle title={title} subtitle={subtitle} />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>{children}</motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Resume;
