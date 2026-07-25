import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { fadeUp, stagger } from '../../animations/index.js';
import AnimatedGridBackground from '../../components/backgrounds/AnimatedGridBackground.jsx';
import AuroraBackground from '../../components/backgrounds/AuroraBackground.jsx';
import Button from '../../components/ui/Button.jsx';
import Container from '../../components/ui/Container.jsx';
import EmptyState from '../../components/ui/EmptyState.jsx';
import SectionTitle from '../../components/ui/SectionTitle.jsx';
import FeaturedProject from './FeaturedProject.jsx';
import ProjectCard from './ProjectCard.jsx';
import ProjectFilters from './ProjectFilters.jsx';
import ProjectSearch from './ProjectSearch.jsx';
import ProjectStats from './ProjectStats.jsx';
import { projects } from './projectsData.js';

const featuredProject = projects.find((project) => project.status === 'Featured');
const gridProjects = projects.filter((project) => project.id !== featuredProject.id);

function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return gridProjects.filter((project) => {
      const matchesSearch = project.title.toLowerCase().includes(normalizedSearch);
      const matchesFilter =
        activeFilter === 'All' || project.categories.includes(activeFilter);

      return matchesSearch && matchesFilter;
    });
  }, [activeFilter, searchTerm]);

  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <div className="section-background" aria-hidden="true">
        <AuroraBackground className="section-aurora" />
        <AnimatedGridBackground className="section-grid-bg" />
      </div>
      <Container>
        <SectionTitle
          eyebrow="Selected Work"
          title="Projects Showcase"
          subtitle="A focused collection of AI, full-stack, and product-oriented projects built with practical engineering intent."
        />

        <motion.div
          className="projects-showcase"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={stagger}
        >
          <ProjectStats />

          <motion.div variants={fadeUp}>
            <FeaturedProject project={featuredProject} />
          </motion.div>

          <motion.div className="project-toolbar" variants={fadeUp}>
            <ProjectSearch value={searchTerm} onChange={setSearchTerm} />
            <ProjectFilters activeFilter={activeFilter} onChange={setActiveFilter} />
          </motion.div>

          {filteredProjects.length > 0 ? (
            <motion.div className="projects-grid" variants={stagger}>
              {filteredProjects.map((project) => (
                <motion.div key={project.id} variants={fadeUp}>
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div variants={fadeUp}>
              <EmptyState
                title="No projects found"
                description="Try a different search term or category filter."
                actionLabel="Reset Filters"
                onAction={() => {
                  setSearchTerm('');
                  setActiveFilter('All');
                }}
              />
            </motion.div>
          )}

          <motion.div className="projects-cta" variants={fadeUp}>
            <h3>More intelligent systems are on the way.</h3>
            <p>
              This showcase will continue expanding with AI workflows, full-stack
              products, and machine learning experiments.
            </p>
            <Button as="a" href="https://github.com/Sudheer625" target="_blank" rel="noreferrer" variant="primary">
              Explore GitHub
              <FiArrowRight aria-hidden="true" />
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Projects;
