import { useEffect } from 'react';
import { SITE_CONFIG } from '../constants/site.js';
import { buildCanonicalUrl, buildPersonSchema, buildTitle } from '../utils/seo.js';

export function usePageMeta({
  title,
  description,
  image,
  canonical,
  keywords,
  robots = 'index, follow',
  type = 'website',
  jsonLd,
} = {}) {
  useEffect(() => {
    const pageTitle = buildTitle(title);
    const pageDescription = description || SITE_CONFIG.description;
    const pageKeywords = keywords || SITE_CONFIG.keywords;
    const pageImage = buildCanonicalUrl(image || SITE_CONFIG.ogImage);
    const pageCanonical = buildCanonicalUrl(canonical || window.location.pathname);
    const structuredData = jsonLd || buildPersonSchema();

    document.title = pageTitle;

    setMetaTag('name', 'description', pageDescription);
    setMetaTag('name', 'keywords', pageKeywords);
    setMetaTag('name', 'author', SITE_CONFIG.author);
    setMetaTag('name', 'robots', robots);
    setMetaTag('name', 'theme-color', SITE_CONFIG.themeColor);
    setMetaTag('property', 'og:title', pageTitle);
    setMetaTag('property', 'og:description', pageDescription);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:url', pageCanonical);
    setMetaTag('property', 'og:image', pageImage);
    setMetaTag('property', 'og:site_name', SITE_CONFIG.name);
    setMetaTag('property', 'og:locale', SITE_CONFIG.locale);
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', pageTitle);
    setMetaTag('name', 'twitter:description', pageDescription);
    setMetaTag('name', 'twitter:image', pageImage);
    setCanonicalLink(pageCanonical);
    setJsonLd(structuredData);
  }, [canonical, description, image, jsonLd, keywords, robots, title, type]);
}

function setMetaTag(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function setCanonicalLink(href) {
  let element = document.head.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

function setJsonLd(data) {
  let element = document.head.querySelector('script[data-schema="person"]');

  if (!element) {
    element = document.createElement('script');
    element.type = 'application/ld+json';
    element.dataset.schema = 'person';
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
}
