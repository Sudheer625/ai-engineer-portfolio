import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import IconButton from '../components/ui/IconButton.jsx';
import ThemeToggle from '../components/theme/ThemeToggle.jsx';
import { ROUTE_PATHS } from '../constants/routes.js';
import { useActiveSection } from '../hooks/useActiveSection.js';
import { useScrollDirection } from '../hooks/useScrollDirection.js';
import { cn } from '../utils/classNames.js';

const navItems = [
  { label: 'Home', to: ROUTE_PATHS.home, section: 'home' },
  { label: 'About', to: '/#about', section: 'about' },
  { label: 'Skills', to: '/#skills', section: 'skills' },
  { label: 'Projects', to: '/#projects', section: 'projects' },
  { label: 'Contact', to: '/#contact', section: 'contact' },
  { label: 'Resume', to: ROUTE_PATHS.resume, route: ROUTE_PATHS.resume },
];

const sectionIds = ['about', 'skills', 'education', 'experience', 'projects', 'contact'];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const { direction, isScrolled } = useScrollDirection({ threshold: 12 });
  const activeSection = useActiveSection(sectionIds);
  const location = useLocation();
  const isHomeRoute = location.pathname === ROUTE_PATHS.home;

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle('nav-open', isOpen);
    return () => document.body.classList.remove('nav-open');
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setIsAtTop(window.scrollY < 120);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'site-header',
        isScrolled && 'is-scrolled',
        direction === 'down' && isScrolled && !isOpen && 'is-hidden',
      )}
    >
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <nav className="site-nav container" aria-label="Primary navigation">
        <NavLink className="site-brand" to={ROUTE_PATHS.home} aria-label="AI Engineer Portfolio home">
          <span className="brand-mark" aria-hidden="true">
            AI
          </span>
          <span>Portfolio</span>
        </NavLink>

        <div className="desktop-nav">
          {navItems.map((item) => renderNavItem(item, activeSection, isHomeRoute, isAtTop))}
        </div>

        <div className="nav-actions" aria-label="Header actions">
          <ThemeToggle />
          <IconButton
            className="mobile-menu-button"
            label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsOpen((current) => !current)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </IconButton>
        </div>
      </nav>

      <div id="mobile-navigation" className={cn('mobile-nav-panel', isOpen && 'is-open')}>
        <div className="container mobile-nav-inner">
          {navItems.map((item) => renderNavItem(item, activeSection, isHomeRoute, isAtTop, true))}
        </div>
      </div>
    </header>
  );
}

function renderNavItem(item, activeSection, isHomeRoute, isAtTop, isMobile = false) {
  const className = isMobile ? 'mobile-nav-link' : 'nav-link';

  if (item.route) {
    return (
      <NavLink key={item.to} className={className} to={item.to}>
        {item.label}
      </NavLink>
    );
  }

  const isActive =
    isHomeRoute && (item.section === activeSection || (item.section === 'home' && isAtTop));

  return (
    <Link
      key={item.to}
      className={cn(className, isActive && 'is-section-active')}
      to={item.to}
      aria-current={isActive ? 'page' : undefined}
    >
      {item.label}
    </Link>
  );
}

export default Navbar;
