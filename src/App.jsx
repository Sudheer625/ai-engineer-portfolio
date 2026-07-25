import { Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import { FullPageLoader, LoadingScreen } from './components/feedback/index.js';
import { pageTransition } from './animations/index.js';
import AppLayout from './layout/AppLayout.jsx';
import { routes } from './constants/routes.js';

function App() {
  const location = useLocation();

  return (
    <>
      <LoadingScreen />
      <Suspense fallback={<FullPageLoader />}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10, scale: 0.992 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.996 }}
            transition={pageTransition.transition}
          >
            <Routes location={location}>
              <Route element={<AppLayout />}>
                {routes.map(({ path, element: Element }) => (
                  <Route key={path} path={path} element={<Element />} />
                ))}
              </Route>
            </Routes>
          </motion.div>
        </AnimatePresence>
      </Suspense>
    </>
  );
}

export default App;
