import { MetadataRoute } from 'next';

const baseUrl = 'https://travelwithsohan.com';
const locales = ['en'/*, 'es'*/];
const pages = [
    { path: '', priority: 1, changeFrequency: 'monthly' as const },
    { path: 'about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: 'tours', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: 'gallery', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: 'contact', priority: 0.6, changeFrequency: 'yearly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
    return pages.map((page) => ({
        url: `${baseUrl}/${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
            languages: locales.reduce((acc, locale) => {
                acc[locale] = `${baseUrl}${page.path ? `/${page.path}` : ''}`;
                return acc;
            }, {} as Record<string, string>),
        },
    }));
}
