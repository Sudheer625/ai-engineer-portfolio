import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../../animations/index.js';
import { certificates } from '../../data/certificates.js';
import CertificateCard from './CertificateCard.jsx';

function Certificates() {
  return (
    <motion.div className="certificate-grid" variants={stagger}>
      {certificates.map((certificate) => (
        <motion.div key={certificate.title} variants={fadeUp}>
          <CertificateCard {...certificate} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Certificates;
