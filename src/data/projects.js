import {
  FiBookOpen,
  FiCode,
  FiCpu,
  FiDatabase,
  FiGlobe,
  FiLayers,
  FiServer,
  FiShield,
} from 'react-icons/fi';
import {
  SiExpress,
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiVercel,
} from 'react-icons/si';

export const projectDetails = [
  {
    id: 'healthtrust-fl',
    title: 'HealthTrust-FL',
    category: 'Featured Project',
    status: 'Coming Soon',
    description:
      'HealthTrust-FL is a secure healthcare platform built using Machine Learning, Blockchain, and Federated Learning concepts to protect sensitive medical data while enabling intelligent disease prediction.',
    tech: ['Python', 'Machine Learning', 'Blockchain'],
    github:
      'https://github.com/Sudheer625/HealthTrust-FL-Secure-and-Compliant-Federated-Learning-/tree/main/health_trust_fl',
    live: null,
    thumbnail: 'health',
    icon: FiShield,
    overview: {
      purpose: 'Enable privacy-preserving healthcare intelligence without centralizing sensitive medical data.',
      targetUsers: 'Healthcare teams, researchers, and privacy-focused medical AI workflows.',
      mainTechnologies: 'Python, Machine Learning, Blockchain, Federated Learning',
      developmentType: 'AI research prototype and secure healthcare platform concept.',
    },
    problem:
      'Healthcare data is highly sensitive, but intelligent disease prediction usually requires access to large datasets. Centralizing medical records can introduce privacy, compliance, and security risks.',
    solution:
      'The project explores a federated learning workflow where intelligence can be trained across distributed data sources while blockchain concepts strengthen trust, auditability, and secure record handling.',
    features: [
      'Secure healthcare records',
      'Privacy-preserving learning',
      'Blockchain security',
      'Disease prediction',
      'Federated learning workflow',
    ],
    architecture: ['AI', 'Blockchain', 'API', 'Database / Storage'],
    challenges: [
      {
        challenge: 'Balancing privacy with model performance',
        solution: 'Used federated learning concepts to avoid direct centralization of sensitive data.',
        learning: 'Privacy-first AI requires system design thinking beyond model accuracy.',
      },
      {
        challenge: 'Representing trust in healthcare workflows',
        solution: 'Mapped blockchain concepts to secure records and verifiable interaction flows.',
        learning: 'Security and auditability are core parts of healthcare AI adoption.',
      },
    ],
  },
  {
    id: 'pantrychef-ai',
    title: 'PantryChef AI',
    category: 'AI Application',
    status: 'Live',
    description:
      "AI-powered recipe generation platform that creates recipes from ingredients available in a user's kitchen.",
    tech: ['Next.js', 'OpenRouter API', 'Vercel'],
    github: 'https://github.com/Sudheer625/pantrychefai',
    live: 'https://pantrychefai.vercel.app/',
    thumbnail: 'recipe',
    icon: FiCpu,
    overview: {
      purpose: 'Help users convert available kitchen ingredients into practical recipe ideas.',
      targetUsers: 'Home cooks, students, and anyone looking for quick ingredient-based meal suggestions.',
      mainTechnologies: 'Next.js, OpenRouter API, Vercel',
      developmentType: 'AI-powered web application.',
    },
    problem:
      'Users often have ingredients available but struggle to decide what to cook, especially when they want fast, personalized, and practical suggestions.',
    solution:
      'PantryChef AI accepts available ingredients and uses AI generation to suggest recipes, helping users reduce decision fatigue and make better use of what they already have.',
    features: ['Recipe Generation', 'Ingredient Analysis', 'AI Suggestions', 'Responsive UI'],
    architecture: ['Frontend', 'API', 'AI', 'Deployment'],
    challenges: [
      {
        challenge: 'Creating useful AI outputs from simple ingredient input',
        solution: 'Structured the prompt workflow around ingredients and recipe intent.',
        learning: 'Prompt design strongly affects product usefulness in AI applications.',
      },
      {
        challenge: 'Delivering a smooth public demo',
        solution: 'Deployed the app through Vercel for fast access and easy sharing.',
        learning: 'Deployment quality is part of product quality.',
      },
    ],
  },
  {
    id: 'karna-solutions',
    title: 'Karna Solutions',
    category: 'Startup Website',
    status: 'Live',
    description:
      'Official startup website showcasing mentorship programs, AI education, software services, and student learning resources.',
    tech: ['React', 'Lovable', 'Express'],
    github: null,
    live: 'https://karna-solutions.lovable.app/',
    thumbnail: 'startup',
    icon: FiCode,
    overview: {
      purpose: 'Present Karna Solutions as a mentorship and software services initiative.',
      targetUsers: 'Students, early learners, and clients seeking software or AI learning support.',
      mainTechnologies: 'React, Lovable, Express',
      developmentType: 'Startup landing and service website.',
    },
    problem:
      'Students and early-stage clients need a clear place to understand mentorship offerings, AI learning programs, and software service capabilities.',
    solution:
      'The website organizes the startup message into a professional digital presence with service positioning, mentorship focus, and inquiry-ready structure.',
    features: ['Landing Pages', 'Mentorship', 'Inquiry System', 'Responsive Design'],
    architecture: ['Frontend', 'Backend', 'API', 'Deployment'],
    challenges: [
      {
        challenge: 'Communicating multiple offerings clearly',
        solution: 'Structured the website around mentorship, education, and development services.',
        learning: 'A strong product page needs hierarchy as much as visual polish.',
      },
      {
        challenge: 'Building quickly while keeping polish',
        solution: 'Used Lovable and React workflows to iterate fast on the user-facing experience.',
        learning: 'Modern tools can speed up delivery when guided by clear product thinking.',
      },
    ],
  },
  {
    id: 'edufun-lms',
    title: 'EduFun LMS',
    category: 'Learning Platform',
    status: 'Live',
    description:
      'Learning Management System designed for higher education students to access learning resources and study materials.',
    tech: ['React', 'Express', 'Lovable Cloud'],
    github: 'https://github.com/Sudheer625/edu-fun-hub',
    live: 'https://edu-fun-hub.lovable.app/',
    thumbnail: 'education',
    icon: FiBookOpen,
    overview: {
      purpose: 'Provide students with a focused platform for learning resources and study materials.',
      targetUsers: 'Higher education students and learning communities.',
      mainTechnologies: 'React, Express, Lovable Cloud',
      developmentType: 'Full-stack learning management system.',
    },
    problem:
      'Students need organized access to study materials and learning resources instead of scattered files, links, and disconnected workflows.',
    solution:
      'EduFun LMS provides a responsive learning interface that structures resources, dashboards, and material access into one education-focused platform.',
    features: ['Study Materials', 'Learning Dashboard', 'Resource Management', 'Responsive Interface'],
    architecture: ['Frontend', 'Backend', 'API', 'Database / Storage'],
    challenges: [
      {
        challenge: 'Organizing learning resources clearly',
        solution: 'Designed a dashboard-led experience around study material access and management.',
        learning: 'Education tools work best when the interface reduces cognitive load.',
      },
      {
        challenge: 'Making the LMS responsive',
        solution: 'Built adaptive layouts so students can access resources across screen sizes.',
        learning: 'Accessibility and responsiveness are essential for student-facing tools.',
      },
    ],
  },
];

export const architectureIcons = {
  Frontend: FiGlobe,
  Backend: FiServer,
  AI: FiCpu,
  'Database / Storage': FiDatabase,
  Blockchain: FiShield,
  API: FiLayers,
  Deployment: SiVercel,
};

export const techIcons = {
  Python: SiPython,
  'Machine Learning': FiCpu,
  Blockchain: FiShield,
  'Next.js': SiNextdotjs,
  'OpenRouter API': FiCpu,
  Vercel: SiVercel,
  React: SiReact,
  Express: SiExpress,
  Lovable: FiCode,
  'Lovable Cloud': FiDatabase,
  JavaScript: SiJavascript,
  GitHub: SiGithub,
};

export function getProjectById(id) {
  return projectDetails.find((project) => project.id === id);
}

export function getAdjacentProjects(id) {
  const index = projectDetails.findIndex((project) => project.id === id);

  if (index < 0) {
    return { previous: null, next: null };
  }

  return {
    previous: projectDetails[(index - 1 + projectDetails.length) % projectDetails.length],
    next: projectDetails[(index + 1) % projectDetails.length],
  };
}
