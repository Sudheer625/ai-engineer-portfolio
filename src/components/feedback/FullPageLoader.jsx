import Spinner from './Spinner.jsx';

function FullPageLoader({ label = 'Loading page' }) {
  return (
    <div className="full-page-loader" role="status" aria-live="polite">
      <Spinner size="lg" label={label} />
    </div>
  );
}

export default FullPageLoader;
