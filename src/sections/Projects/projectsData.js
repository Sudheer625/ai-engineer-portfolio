import { FiBookOpen, FiCode, FiCpu, FiDatabase, FiShield } from 'react-icons/fi';

export const projectStats = [
  { value: '4+', label: 'Projects' },
  { value: '2', label: 'Internships' },
  { value: '296', label: 'AP PGECET Rank' },
  { value: '2nd', label: 'Hackathon' },
];

export const filters = ['All', 'AI', 'Machine Learning', 'React', 'Python', 'Full Stack'];

export const projects = [
  {
    id: 'healthtrust-fl',
    title: 'HealthTrust-FL',
    badge: 'Featured Project',
    status: 'Featured',
    description:
      'A secure healthcare platform using Machine Learning and Blockchain concepts with Federated Learning for privacy-preserving intelligence.',
    tech: ['Python', 'Machine Learning', 'Blockchain'],
    categories: ['AI', 'Machine Learning', 'Python'],
    github:
      'https://github.com/Sudheer625/HealthTrust-FL-Secure-and-Compliant-Federated-Learning-/tree/main/health_trust_fl',
    live: null,
    icon: FiShield,
    thumbnail: 'health',
  },
  {
    id: 'pantrychef-ai',
    title: 'PantryChef AI',
    description:
      "AI-powered recipe generation platform that creates recipes using ingredients available in a user's kitchen.",
    tech: ['Next.js', 'OpenRouter API', 'Vercel'],
    categories: ['AI', 'React', 'Full Stack'],
    github: 'https://github.com/Sudheer625/pantrychefai',
    live: 'https://pantrychefai.vercel.app/',
    icon: FiCpu,
    thumbnail: 'recipe',
  },
  {
    id: 'karna-solutions',
    title: 'Karna Solutions',
    description:
      'Official startup website showcasing mentorship, AI learning programs, and software development services.',
    tech: ['React', 'Lovable', 'Express'],
    categories: ['React', 'Full Stack', 'AI'],
    github: null,
    live: 'https://karna-solutions.lovable.app/',
    icon: FiCode,
    thumbnail: 'startup',
  },
  {
    id: 'edufun-lms',
    title: 'EduFun LMS',
    description: 'Learning Management System for higher education students.',
    tech: ['React', 'Express', 'Lovable Cloud'],
    categories: ['React', 'Full Stack'],
    github: 'https://github.com/Sudheer625/edu-fun-hub',
    live: 'https://edu-fun-hub.lovable.app/',
    icon: FiBookOpen,
    thumbnail: 'education',
  },
];

export const thumbnailAccents = {
  health: {
    icon: FiShield,
    label: 'Secure FL',
  },
  recipe: {
    icon: FiCpu,
    label: 'Recipe AI',
  },
  startup: {
    icon: FiCode,
    label: 'Startup',
  },
  education: {
    icon: FiDatabase,
    label: 'LMS',
  },
};
