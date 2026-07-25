import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import Button from '../components/ui/Button.jsx';
import Container from '../components/ui/Container.jsx';
import Divider from '../components/ui/Divider.jsx';
import IconButton from '../components/ui/IconButton.jsx';
import { ROUTE_PATHS } from '../constants/routes.js';

const quickLinks = [
  { label: 'Home', to: ROUTE_PATHS.home },
  { label: 'Projects', to: '/#projects' },
  { label: 'Resume', to: ROUTE_PATHS.resume },
  { label: 'Contact', to: '/#contact' },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Sudheer625', icon: FiGithub },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/singidi-sai-naga-sudheer-9a701a2b1/',
    icon: FiLinkedin,
  },
  { label: 'Email', href: 'mailto:singidisainagasudheer583@gmail.com', icon: FiMail },
];

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <Container className="footer-inner">
        <div className="footer-brand">
          <span className="brand-mark" aria-hidden="true">
            AI
          </span>
          <div>
            <strong>AI Engineer Portfolio</strong>
            <p>Built with React + Framer Motion.</p>
          </div>
        </div>

        <Divider />

        <div className="footer-grid">
          <div>
            <h2>Quick Links</h2>
            <nav className="footer-links" aria-label="Footer quick links">
              {quickLinks.map((link) => (
                <NavLink key={link.to} to={link.to}>
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>

          <div>
            <h2>Social Links</h2>
            <div className="footer-socials">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <IconButton
                  key={label}
                  as="a"
                  href={href}
                  label={label}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  <Icon aria-hidden="true" />
                </IconButton>
              ))}
            </div>
            <a className="footer-email" href="mailto:singidisainagasudheer583@gmail.com">
              singidisainagasudheer583@gmail.com
            </a>
          </div>

          <div>
            <h2>Back to Top</h2>
            <Button variant="outline" onClick={scrollToTop}>
              <FiArrowUp aria-hidden="true" />
              Top
            </Button>
          </div>
        </div>

        <div className="footer-bottom">
          <span>Copyright {new Date().getFullYear()} Singidi Sai Naga Sudheer.</span>
          <span>Built with React + Framer Motion.</span>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
