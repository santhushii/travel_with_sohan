import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";

const SEO_CONFIG = {
  en: {
    title: "Top Destinations to Visit",
    description:
      "Discover the best places to visit in Sri Lanka with a local guide. Detailed guide to Sigiriya Rock Fortress, Kandy Temple of the Tooth, Ella, Galle Fort, Yala National Park, and more.",
    keywords: [
      "Sri Lanka destinations",
      "Sigiriya Rock Fortress",
      "Kandy Temple",
      "Ella Sri Lanka",
      "Galle Fort",
      "Yala National Park",
      "best places Sri Lanka",
      "Sri Lanka travel guide",
      "top sights Sri Lanka",
      "Nuwara Eliya",
      "Dambulla cave temple",
      "Mirissa whale watching",
    ],
  },
  es: {
    title: "Principales Destinos para Visitar",
    description:
      "Descubre los mejores lugares para visitar en Sri Lanka con un guía local. Guía detallada de la Fortaleza de Sigiriya, Kandy, Ella, el Fuerte de Galle y el Parque Nacional de Yala.",
    keywords: [
      "destinos Sri Lanka",
      "Sigiriya",
      "Kandy",
      "Ella Sri Lanka",
      "Galle",
      "Yala",
      "mejores lugares Sri Lanka",
      "guía de viaje Sri Lanka",
    ],
  },
  ja: {
    title: "おすすめの観光スポット",
    description:
      "地元ガイドと巡るスリランカの人気観光地。シーギリヤ・ロック、キャンディ仏歯寺、エッラ、ゴール・フォート、ヤラ国立公園など詳細ガイド。",
    keywords: [
      "スリランカ 観光地",
      "シーギリヤ",
      "キャンディ",
      "エッラ",
      "ゴール",
      "ヤラ国立公園",
      "スリランカ 人気スポット",
    ],
  },
};

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await paramsPromise;
  return generatePageMetadata(locale, "destinations", SEO_CONFIG);
}

export default function DestinationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
