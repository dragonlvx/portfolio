import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import routes from '../routeMetadata.json';

export default function PageMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const path = pathname.replace(/\/$/, '') || '/';
    const data = routes[path] || routes['/'];
    const url = `https://adasilva.ca${path === '/' ? '/' : path}`;
    document.title = data.title;
    const meta = (key, value, attribute = 'name') => {
      let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
      if (!element) { element = document.createElement('meta'); element.setAttribute(attribute, key); document.head.appendChild(element); }
      element.content = value;
    };
    meta('description', data.description);
    meta('og:title', data.title, 'property');
    meta('og:description', data.description, 'property');
    meta('og:url', url, 'property');
    meta('og:type', 'website', 'property');
    meta('og:image', `https://adasilva.ca${data.image}`, 'property');
    meta('twitter:card', 'summary_large_image');
    meta('twitter:title', data.title);
    meta('twitter:description', data.description);
    meta('twitter:image', `https://adasilva.ca${data.image}`);
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = url;
  }, [pathname]);
  return null;
}
