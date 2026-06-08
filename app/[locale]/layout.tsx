import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import SmoothScroll from "@/components/providers/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0f0d",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const baseUrl = "https://travelwithsohan.com";

const LOCALIZED_METADATA: Record<string, { title: string; description: string; keywords: string[] }> = {
  en: {
    title: "Travel With Sohan",
    description: "Travel With Sohan — Experience authentic Sri Lanka with Sohan Nallaperuma, a licensed National Tourist Guide Lecturer. Personalized private tours, wildlife safaris, and custom itineraries.",
    keywords: [
      "Travel With Sohan", "travel with sohan", "travelwithsohan", "Sohan Nallaperuma", "Sohan", 
      "Sri Lanka tours", "Sri Lanka guide", "travel Sri Lanka", "Sri Lanka tourism", 
      "private tours Sri Lanka", "cultural tours", "wildlife safari Sri Lanka", "beach tours", 
      "Sigiriya guide", "Ella tour guide", "Yala safari guide", "Galle guide"
    ]
  },
  es: {
    title: "Travel With Sohan",
    description: "Travel With Sohan — Vive el auténtico Sri Lanka con Sohan Nallaperuma, guía turístico nacional certificado. Viajes privados personalizados, safaris de vida silvestre e itinerarios a medida.",
    keywords: [
      "Travel With Sohan", "viajar con sohan", "guia de sri lanka", "sri lanka en español",
      "tours en sri lanka", "sri lanka turismo", "viajes privados sri lanka", "safari sri lanka",
      "guia de sigiriya", "guia de ella", "safari yala", "guia de galle"
    ]
  },
  ja: {
    title: "Travel With Sohan",
    description: "Travel With Sohan — スリランカ政府公認の国家ガイド、ソハン・ナラペルマと行く本物のスリランカ旅行。プライベートツアー、野生動物サファリ、オーダーメイドの旅程をご提案します。",
    keywords: [
      "スリランカ 旅行", "スリランカ 観光", "スリランカ ガイド", "スリランカ 日本語ガイド",
      "ソハン スリランカ", "シーギリヤ ガイド", "エッラ 観光", "ヤラ サファリ", "ゴール ガイド"
    ]
  }
};

const baseMetadata = {
  authors: [{ name: "Sohan Nallaperuma - Sri Lanka National Guide" }],
  creator: "Travel With Sohan",
  openGraph: {
    siteName: "Travel With Sohan",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Travel With Sohan - Sri Lanka Tours" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { 
      index: true, 
      follow: true, 
      "max-video-preview": -1, 
      "max-image-preview": "large", 
      "max-snippet": -1 
    },
  } as const,
};

export async function generateMetadata({ params: paramsPromise }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await paramsPromise;
  const meta = LOCALIZED_METADATA[locale] || LOCALIZED_METADATA.en;
  
  return {
    ...baseMetadata,
    metadataBase: new URL(baseUrl),
    keywords: meta.keywords,
    alternates: {
      canonical: baseUrl,
      languages: {
        en: baseUrl,
        'x-default': baseUrl,
      },
    },
    title: {
      default: meta.title,
      template: `%s | ${meta.title.split('|')[0].trim()}`,
    },
    description: meta.description,

    openGraph: {
      ...baseMetadata.openGraph,
      title: meta.title,
      description: meta.description,
      locale: locale === 'ja' ? 'ja_JP' : locale === 'es' ? 'es_ES' : 'en_US',
    } as any,
  };
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const locale = params.locale;
  const children = props.children;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  // JSON-LD Structured Data for Travel Agency SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Travel With Sohan",
    "alternateName": ["travelwithsohan", "Travelwithsohan", "Travel With Sohan Sri Lanka"],
    "image": "https://travelwithsohan.com/og-image.jpg",
    "logo": "https://travelwithsohan.com/favicon.ico",
    "description": "Travel With Sohan is a premier travel guide service in Sri Lanka, run by Sohan Nallaperuma, a licensed National Tourist Guide Lecturer offering personalized, authentic tours across the island.",
    "@id": "https://travelwithsohan.com",
    "url": "https://travelwithsohan.com",
    "telephone": "+94715567211",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Galle",
      "addressCountry": "LK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 6.0535,
      "longitude": 80.2210
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/share/1Ae5ayxpNh/",
      "https://www.instagram.com/travel_with_sohan",
      "https://www.tripadvisor.com/Attraction_Review-g293962-d17652201-Reviews-Travel_with_Sohan-Colombo_Western_Province.html"
    ]
  };

  return (
    <html lang={locale} className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-black text-white relative">
        <NextIntlClientProvider messages={messages}>
          <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
            <WhatsAppButton />
          </SmoothScroll>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
