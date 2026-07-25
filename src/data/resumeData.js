import { FiCode, FiCpu, FiDownload, FiExternalLink, FiFileText, FiPrinter } from 'react-icons/fi';

export const RESUME_FILE = '/Singidi_Sai_Naga_Sudheer%20.pdf';

export const resumeStats = [
  { value: '4+', label: 'Projects' },
  { value: '2', label: 'Internships' },
  { value: '8.0', label: 'SGPA' },
  { value: '2nd', label: 'Hackathon' },
  { value: '296', label: 'PGECET Rank' },
];

export const resumeActions = [
  {
    label: 'Resume Preview',
    icon: FiFileText,
    action: 'preview',
    variant: 'primary',
  },
  {
    label: 'Download Resume',
    icon: FiDownload,
    action: 'download',
    variant: 'secondary',
  },
  {
    label: 'Print Resume',
    icon: FiPrinter,
    action: 'print',
    variant: 'outline',
  },
  {
    label: 'Open in New Tab',
    icon: FiExternalLink,
    action: 'open',
    variant: 'ghost',
  },
];

export const professionalHighlights = [
  { title: 'Python Development', icon: FiCode },
  { title: 'AI Workflows', icon: FiCpu },
  { title: 'Machine Learning', icon: FiCpu },
  { title: 'React Development', icon: FiCode },
  { title: 'Problem Solving', icon: FiFileText },
  { title: 'Continuous Learning', icon: FiExternalLink },
];
