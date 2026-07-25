import { motion } from 'framer-motion';
import { fadeUp } from '../../animations/index.js';
import { cn } from '../../utils/classNames.js';
import Container from './Container.jsx';
import SectionTitle from './SectionTitle.jsx';

function Section({
  as = motion.section,
  id,
  title,
  eyebrow,
  subtitle,
  children,
  className = '',
  containerClassName = '',
  animated = true,
  ...props
}) {
  const Component = as;
  const motionProps = animated
    ? {
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true, amount: 0.2 },
        variants: fadeUp,
      }
    : {};

  return (
    <Component id={id} className={cn('section-block', className)} {...motionProps} {...props}>
      <Container className={containerClassName}>
        {(title || subtitle || eyebrow) && (
          <SectionTitle eyebrow={eyebrow} title={title} subtitle={subtitle} />
        )}
        {children}
      </Container>
    </Component>
  );
}

export default Section;
