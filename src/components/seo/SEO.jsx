import { usePageMeta } from '../../hooks/usePageMeta.js';

function SEO(props) {
  usePageMeta(props);
  return null;
}

export default SEO;
