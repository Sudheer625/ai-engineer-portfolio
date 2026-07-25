import { motion } from 'framer-motion';
import { FiCpu } from 'react-icons/fi';
import profileImage from '../../assets/images/pfp.jpg';

function HeroImage() {
  return (
    <motion.div
      className="hero-profile-card"
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="hero-profile-image-wrap">
        <img
          src={profileImage}
          alt="Singidi Sai Naga Sudheer"
          loading="lazy"
          decoding="async"
          className="hero-profile-image"
        />
      </div>
      <div className="hero-profile-chip" aria-hidden="true">
        <FiCpu />
        <span>AI Engineer</span>
      </div>
    </motion.div>
  );
}

export default HeroImage;
