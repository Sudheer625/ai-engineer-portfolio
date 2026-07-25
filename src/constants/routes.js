import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage.jsx'));
const ResumePage = lazy(() => import('../pages/ResumePage.jsx'));
const ProjectDetailPage = lazy(() => import('../pages/ProjectDetailPage.jsx'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage.jsx'));

export const ROUTE_PATHS = {
  home: '/',
  resume: '/resume',
  projectDetail: '/project/:id',
  notFound: '*',
};

export const routes = [
  {
    path: ROUTE_PATHS.home,
    element: HomePage,
  },
  {
    path: ROUTE_PATHS.resume,
    element: ResumePage,
  },
  {
    path: ROUTE_PATHS.projectDetail,
    element: ProjectDetailPage,
  },
  {
    path: ROUTE_PATHS.notFound,
    element: NotFoundPage,
  },
];
