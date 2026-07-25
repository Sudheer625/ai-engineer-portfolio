import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CursorGlow } from '../components/effects/index.js';
import { ScrollProgress, ScrollToTop } from '../components/navigation/index.js';
import { useHashScroll } from '../hooks/useHashScroll.js';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';

function AppLayout() {
  useHashScroll();
  const location = useLocation();

  useEffect(() => {
    const main = document.getElementById('main-content');
    main?.focus({ preventScroll: true });
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main id="main-content" className="app-main" tabIndex="-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default AppLayout;
