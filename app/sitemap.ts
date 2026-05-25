import type { MetadataRoute } from 'next';

const baseUrl = 'https://www.engineer-career.info';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/articles',
    '/articles/ses-exit',
    '/articles/sier-to-product',
    '/articles/market-value-check',
    '/articles/ses-to-freelance',
    '/freelance',
    '/privacy',
    '/operator'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/articles') ? 0.8 : 0.4
  }));
}
