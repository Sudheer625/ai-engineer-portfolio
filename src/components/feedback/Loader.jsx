import FullPageLoader from './FullPageLoader.jsx';
import Spinner from './Spinner.jsx';

function Loader({ fullPage = false, ...props }) {
  return fullPage ? <FullPageLoader {...props} /> : <Spinner {...props} />;
}

export default Loader;
