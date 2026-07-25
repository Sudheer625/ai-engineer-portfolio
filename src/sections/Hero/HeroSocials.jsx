import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { fadeUp } from '../../animations/index.js';
import IconButton from '../../components/ui/IconButton.jsx';

const socialLinks = [
  {
    label: 'GitHub profile',
    href: 'https://github.com/Sudheer625',
    icon: FiGithub,
  },
  {
    label: 'LinkedIn profile',
    href: 'https://www.linkedin.com/in/singidi-sai-naga-sudheer-9a701a2b1/',
    icon: FiLinkedin,
  },
  {
    label: 'Send email',
    href: 'mailto:singidisainagasudheer583@gmail.com',
    icon: FiMail,
  },
];

function HeroSocials() {
  return (
    <motion.nav className="hero-socials" aria-label="Social links" variants={fadeUp}>
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <IconButton
          key={label}
          as="a"
          href={href}
          label={label}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noreferrer' : undefined}
        >
          <Icon aria-hidden="true" />
        </IconButton>
      ))}
    </motion.nav>
  );
}

export default HeroSocials;
