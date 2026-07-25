export const SITE_CONFIG = {
  name: 'Singidi Sai Naga Sudheer Portfolio',
  titleTemplate: '%s | AI Engineer Portfolio',
  defaultTitle: 'Singidi Sai Naga Sudheer | AI Engineer Portfolio',
  description:
    'Portfolio of Singidi Sai Naga Sudheer, a B.Tech Computer Science graduate focused on Python development, AI workflows, machine learning, and full-stack applications.',
  keywords:
    'Singidi Sai Naga Sudheer, Junior AI Engineer, Python Developer, Machine Learning Engineer, React Developer, AI Portfolio, B.Tech Computer Science',
  url: import.meta.env.VITE_SITE_URL || 'https://sudheer625.github.io',
  ogImage: '/og-image.svg',
  locale: 'en_US',
  themeColor: '#0f6fb8',
  author: 'Singidi Sai Naga Sudheer',
};

export const PAGE_SEO = {
  home: {
    title: 'Home',
    description: SITE_CONFIG.description,
    keywords: SITE_CONFIG.keywords,
    path: '/',
  },
  resume: {
    title: 'Resume',
    description:
      'Resume dashboard for Singidi Sai Naga Sudheer, including projects, internships, certifications, score cards, and professional highlights.',
    keywords:
      'Singidi Sai Naga Sudheer resume, AI Engineer resume, Python Developer resume, Machine Learning portfolio',
    path: '/resume',
  },
  notFound: {
    title: 'Page Not Found',
    description: 'The requested portfolio page could not be found.',
    keywords: SITE_CONFIG.keywords,
    path: '/404',
    robots: 'noindex, nofollow',
  },
};

export const THEME_STORAGE_KEY = 'portfolio-theme';
export const THEMES = {
  light: 'light',
  dark: 'dark',
};
