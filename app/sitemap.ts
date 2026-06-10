import type { MetadataRoute } from 'next';

const baseUrl = 'https://www.engineer-career.info';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/articles',
    '/articles/ses-company-selection',
    '/articles/ses-exit',
    '/articles/sier-to-product',
    '/articles/market-value-check',
    '/articles/ses-to-freelance',
    '/articles/ses-to-it-consultant',
    '/articles/engineer-800man-roadmap',
    '/articles/agent-comparison',
    '/articles/interview-questions-template',
    '/freelance',
    '/privacy',
    '/operator'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith('/articles') ? 'weekly' : 'monthly',
    priority:
      route === ''
        ? 1
        : route === '/articles'
        ? 0.95
        : route.startsWith('/articles')
        ? 0.85
        : 0.4
  }));
}
