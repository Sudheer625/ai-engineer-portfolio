function PageLayout({ children, className = '' }) {
  return <div className={`page-layout ${className}`.trim()}>{children}</div>;
}

export default PageLayout;
