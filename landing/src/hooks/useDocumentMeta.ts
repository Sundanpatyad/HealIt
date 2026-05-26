import { useEffect } from 'react';

import { SITE } from '../constants/site';

interface PageMeta {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const JSON_LD_ID = 'route-jsonld';

export function useDocumentMeta({
  title,
  description,
  path,
  noindex,
  jsonLd,
}: PageMeta) {
  useEffect(() => {
    const fullTitle = title.includes(SITE.name)
      ? title
      : `${title} · ${SITE.name}`;
    const canonical = `${SITE.url}${path}`;

    document.title = fullTitle;

    setMeta('description', description);
    setMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1');

    setProperty('og:title', fullTitle);
    setProperty('og:description', description);
    setProperty('og:url', canonical);

    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);

    setLink('canonical', canonical);

    const existing = document.getElementById(JSON_LD_ID);
    if (existing) existing.remove();

    if (jsonLd) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = JSON_LD_ID;
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      const lingering = document.getElementById(JSON_LD_ID);
      if (lingering) lingering.remove();
    };
  }, [title, description, path, noindex, jsonLd]);
}

function setMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setProperty(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}
