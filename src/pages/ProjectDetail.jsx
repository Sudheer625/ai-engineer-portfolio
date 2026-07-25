import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { fadeUp, pageTransition, stagger } from '../animations/index.js';
import ProjectArchitecture from '../components/projects/ProjectArchitecture.jsx';
import ProjectChallenges from '../components/projects/ProjectChallenges.jsx';
import ProjectFeatures from '../components/projects/ProjectFeatures.jsx';
import ProjectHero from '../components/projects/ProjectHero.jsx';
import ProjectLinks from '../components/projects/ProjectLinks.jsx';
import ProjectNavigation from '../components/projects/ProjectNavigation.jsx';
import ProjectOverview from '../components/projects/ProjectOverview.jsx';
import ProjectTechStack from '../components/projects/ProjectTechStack.jsx';
import SEO from '../components/seo/SEO.jsx';
import Container from '../components/ui/Container.jsx';
import GlassCard from '../components/ui/GlassCard.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import { getAdjacentProjects, getProjectById } from '../data/projects.js';
import PageLayout from '../layout/PageLayout.jsx';
import Button from '../components/ui/Button.jsx';

function ProjectDetail() {
  const { id } = useParams();
  const project = getProjectById(id);

  if (!project) {
    return (
      <PageLayout className="project-detail-page">
        <SEO
          title="Project Not Found"
          description="The requested project case study could not be found."
          robots="noindex, nofollow"
          canonical="/project/not-found"
        />
        <section className="case-study-section">
          <Container>
            <div className="empty-state">
              <div className="empty-state-icon" aria-hidden="true">
                404
              </div>
              <h1>Project not found</h1>
              <p>The project case study you requested is unavailable or may have moved.</p>
              <Button as="a" href="/#projects" variant="primary">
                Back to Projects
              </Button>
            </div>
          </Container>
        </section>
      </PageLayout>
    );
  }

  const { previous, next } = getAdjacentProjects(project.id);

  return (
    <PageLayout className="project-detail-page">
      <SEO
        title={project.title}
        description={project.description}
        keywords={`${project.title}, ${project.tech.join(', ')}, Singidi Sai Naga Sudheer project, AI Engineer portfolio`}
        canonical={`/project/${project.id}`}
        type="article"
      />
      <motion.div initial="initial" animate="animate" exit="exit" {...pageTransition}>
        <ProjectHero project={project} />

        <CaseStudySection
          eyebrow="Overview"
          title="Project Overview"
          subtitle="The core context behind the project, its audience, and the technical direction."
        >
          <ProjectOverview overview={project.overview} />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Problem"
          title="Problem Statement"
          subtitle="The real-world need this project is designed to address."
        >
          <GlassCard className="case-study-text-card">
            <p>{project.problem}</p>
          </GlassCard>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Solution"
          title="Solution"
          subtitle="How the project approaches the problem through software and AI/product thinking."
        >
          <GlassCard className="case-study-text-card">
            <p>{project.solution}</p>
          </GlassCard>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Features"
          title="Key Features"
          subtitle="The functional pieces that make the project useful and recruiter-readable."
        >
          <ProjectFeatures features={project.features} />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Stack"
          title="Technology Stack"
          subtitle="The primary tools and technologies used to build the project."
        >
          <ProjectTechStack tech={project.tech} />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Architecture"
          title="Project Architecture"
          subtitle="A clean placeholder architecture map that can later be replaced with a real diagram."
        >
          <ProjectArchitecture items={project.architecture} />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Learning"
          title="Challenges & Learnings"
          subtitle="How implementation challenges translated into practical engineering lessons."
        >
          <ProjectChallenges challenges={project.challenges} />
        </CaseStudySection>

        <CaseStudySection>
          <ProjectLinks project={project} />
          <ProjectNavigation previous={previous} next={next} />
        </CaseStudySection>
      </motion.div>
    </PageLayout>
  );
}

function CaseStudySection({ eyebrow, title, subtitle, children }) {
  return (
    <section className="case-study-section">
      <Container>
        {(eyebrow || title || subtitle) && (
          <SectionTitle eyebrow={eyebrow} title={title} subtitle={subtitle} />
        )}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>{children}</motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export default ProjectDetail;
