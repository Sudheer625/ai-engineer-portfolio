import SEO from '../components/seo/SEO.jsx';
import { PAGE_SEO } from '../constants/site.js';
import PageLayout from '../layout/PageLayout.jsx';
import About from '../sections/About/index.js';
import Achievements from '../sections/Achievements/index.js';
import Contact from '../sections/Contact/index.js';
import Education from '../sections/Education/index.js';
import Experience from '../sections/Experience/index.js';
import Hero from '../sections/Hero/index.js';
import Leadership from '../sections/Leadership/index.js';
import Projects from '../sections/Projects/index.js';
import Skills from '../sections/Skills/index.js';

function HomePage() {
  return (
    <PageLayout className="home-page">
      <SEO {...PAGE_SEO.home} canonical={PAGE_SEO.home.path} />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Leadership />
      <Achievements />
      <Projects />
      <Contact />
    </PageLayout>
  );
}

export default HomePage;
