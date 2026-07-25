import SEO from '../components/seo/SEO.jsx';
import { PAGE_SEO } from '../constants/site.js';
import PageLayout from '../layout/PageLayout.jsx';
import Button from '../components/ui/Button.jsx';

function NotFoundPage() {
  return (
    <PageLayout className="not-found-page">
      <SEO {...PAGE_SEO.notFound} canonical={PAGE_SEO.notFound.path} />
      <section className="empty-route-section">
        <div className="container">
          <div className="empty-state">
            <div className="empty-state-icon" aria-hidden="true">
              404
            </div>
            <h1>Page not found</h1>
            <p>The page you are looking for may have moved or does not exist.</p>
            <Button as="a" href="/" variant="primary">
              Back to Home
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default NotFoundPage;
