import {
  FiClock,
  FiCode,
  FiCpu,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiTarget,
} from 'react-icons/fi';

export const contactLinks = {
  email: 'singidisainagasudheer583@gmail.com',
  github: 'https://github.com/Sudheer625',
  linkedin: 'https://www.linkedin.com/in/singidi-sai-naga-sudheer-9a701a2b1/',
  location: 'Srikakulam, Andhra Pradesh, India',
};

export const directContacts = [
  {
    icon: FiMail,
    title: 'Email',
    description: contactLinks.email,
    actionLabel: 'Send Email',
    href: `mailto:${contactLinks.email}`,
  },
  {
    icon: FiLinkedin,
    title: 'LinkedIn',
    description: 'Connect professionally and discuss opportunities.',
    actionLabel: 'Open LinkedIn',
    href: contactLinks.linkedin,
  },
  {
    icon: FiGithub,
    title: 'GitHub',
    description: 'Explore repositories, projects, and source code.',
    actionLabel: 'Open GitHub',
    href: contactLinks.github,
  },
  {
    icon: FiMapPin,
    title: 'Location',
    description: contactLinks.location,
    actionLabel: 'Open Maps',
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactLinks.location)}`,
  },
  {
    icon: FiTarget,
    title: 'Availability',
    description: 'Junior AI Engineer roles, Python development, freelancing, and AI projects.',
    actionLabel: 'Start Conversation',
    href: `mailto:${contactLinks.email}?subject=${encodeURIComponent('Opportunity for Singidi Sai Naga Sudheer')}`,
  },
];

export const statusCards = [
  {
    icon: FiTarget,
    title: 'Currently Looking For',
    value: 'Junior AI Engineer',
  },
  {
    icon: FiCode,
    title: 'Open to Freelancing',
    value: 'Available',
  },
  {
    icon: FiClock,
    title: 'Response Time',
    value: 'Usually within 24 Hours',
  },
  {
    icon: FiCpu,
    title: 'Preferred Technologies',
    value: 'Python, React, Machine Learning, AI Workflows',
  },
];

export const faqs = [
  {
    question: 'Are you available for full-time opportunities?',
    answer:
      'Yes. I am available for Junior AI Engineer, Python Developer, Machine Learning, and software development opportunities.',
  },
  {
    question: 'Do you accept freelance projects?',
    answer:
      'Yes. I am open to freelance work involving Python development, React applications, AI workflows, and intelligent software solutions.',
  },
  {
    question: 'Which technologies do you enjoy working with?',
    answer:
      'I enjoy working with Python, React, Machine Learning, AI workflows, APIs, and full-stack systems that solve real-world problems.',
  },
  {
    question: 'How quickly do you respond?',
    answer:
      'I usually respond within 24 hours, especially for relevant roles, collaborations, freelance work, or AI project discussions.',
  },
];
