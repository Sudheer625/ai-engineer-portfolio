import { SITE_CONFIG } from '../constants/site.js';

export function buildTitle(title) {
  if (!title) {
    return SITE_CONFIG.defaultTitle;
  }

  return SITE_CONFIG.titleTemplate.replace('%s', title);
}

export function buildCanonicalUrl(path = '/') {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  const normalizedBase = SITE_CONFIG.url.replace(/\/$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  return `${normalizedBase}${normalizedPath}`;
}

export function buildPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Singidi Sai Naga Sudheer',
    jobTitle: ['Junior AI Engineer', 'Python Developer'],
    url: SITE_CONFIG.url,
    image: buildCanonicalUrl('/og-image.svg'),
    sameAs: [
      'https://github.com/Sudheer625',
      'https://www.linkedin.com/in/singidi-sai-naga-sudheer-9a701a2b1/',
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Sri Venkateswara College of Engineering and Technology',
    },
    knowsAbout: [
      'Python Development',
      'Artificial Intelligence',
      'Machine Learning',
      'React',
      'Full-Stack Web Development',
      'AI Workflows',
    ],
  };
}
