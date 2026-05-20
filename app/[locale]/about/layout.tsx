import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";

const SEO_CONFIG = {
  en: {
    title: "About Sohan",
    description:
      "Meet Sohan Nallaperuma, a licensed National Tourist Guide Lecturer in Sri Lanka. Learn about his official guide credentials, 10+ years of experience, and passion for showing you the best of Sri Lanka.",
    keywords: [
      "Sohan Nallaperuma",
      "Sri Lanka guide",
      "national tourist guide lecturer",
      "licensed Sri Lanka guide",
      "about Sohan",
      "Travel With Sohan",
      "Sri Lanka private guide",
      "chauffeur guide Sri Lanka",
      "Sri Lanka tour expert",
    ],
  },
  es: {
    title: "Sobre Sohan",
    description:
      "Conoce a Sohan Nallaperuma, guía turístico nacional certificado en Sri Lanka. Descubre sus credenciales oficiales, más de 10 años de experiencia y su pasión por mostrarte lo mejor de Sri Lanka.",
    keywords: [
      "Sohan Nallaperuma",
      "guía de Sri Lanka",
      "guía turístico nacional",
      "guía certificado Sri Lanka",
      "sobre Sohan",
      "Travel With Sohan",
    ],
  },
  ja: {
    title: "ソハンについて",
    description:
      "スリランカ政府公認の国家ガイド、ソハン・ナラペルマをご紹介します。公式ガイド資格、10年以上の経験、スリランカの魅力をお伝えする情熱について。",
    keywords: [
      "ソハン・ナラペルマ",
      "スリランカ ガイド",
      "スリランカ 国家ガイド",
      "スリランカ 公認ガイド",
      "Travel With Sohan",
    ],
  },
};

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await paramsPromise;
  return generatePageMetadata(locale, "about", SEO_CONFIG);
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
