import type { Metadata } from "next";

const baseUrl = "https://travelwithsohan.com";

/**
 * Page-specific SEO configuration per locale.
 * Each page defines localized title, description, and keywords.
 */
interface PageSeoConfig {
  [locale: string]: {
    title: string;
    description: string;
    keywords: string[];
  };
}

/**
 * Generates comprehensive, locale-aware metadata for a given page.
 * Includes: title, description, keywords, canonical URL, alternate language links,
 * Open Graph, Twitter cards, and robots directives.
 */
export function generatePageMetadata(
  locale: string,
  pagePath: string, // e.g. "about", "tours", "" for home
  seoConfig: PageSeoConfig
): Metadata {
  const meta = seoConfig[locale] || seoConfig.en;
  const pageUrl = pagePath ? `${baseUrl}/${pagePath}` : baseUrl;
  const ogLocale = locale === "ja" ? "ja_JP" : locale === "es" ? "es_ES" : "en_US";

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: pageUrl,
      languages: {
        en: pagePath ? `${baseUrl}/${pagePath}` : baseUrl,
        "x-default": pagePath ? `${baseUrl}/${pagePath}` : baseUrl,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: pageUrl,
      siteName: "Travel With Sohan",
      locale: ogLocale,
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${meta.title} - Travel With Sohan`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },
  };
}
