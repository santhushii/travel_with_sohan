import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";

const SEO_CONFIG = {
  en: {
    title: "Private Tours & Safaris",
    description:
      "Explore custom, privately guided Sri Lanka tours with Sohan. Handcrafted itineraries covering the Cultural Triangle, Hill Country tea plantations, wildlife safaris at Yala, and southern beaches.",
    keywords: [
      "Sri Lanka private tours",
      "Sri Lanka safari",
      "Yala safari",
      "cultural triangle tour",
      "hill country tour",
      "Sri Lanka itinerary",
      "Ella tour",
      "Sigiriya tour",
      "custom Sri Lanka tours",
      "Travel With Sohan tours",
      "beach tour Sri Lanka",
      "wildlife safari Sri Lanka",
    ],
  },
  es: {
    title: "Tours Privados y Safaris",
    description:
      "Descubre tours privados personalizados por Sri Lanka con Sohan. Itinerarios que cubren el Triángulo Cultural, plantaciones de té, safaris de vida silvestre en Yala y playas del sur.",
    keywords: [
      "tours privados Sri Lanka",
      "safari Sri Lanka",
      "safari Yala",
      "triángulo cultural",
      "tour Sri Lanka personalizado",
      "Travel With Sohan tours",
    ],
  },
  ja: {
    title: "プライベートツアー＆サファリ",
    description:
      "ソハンと行くスリランカ・プライベートツアー。文化三角地帯、ヒルカントリーの紅茶園、ヤラ国立公園のサファリ、南部ビーチをカバーするオーダーメイド旅程。",
    keywords: [
      "スリランカ プライベートツアー",
      "スリランカ サファリ",
      "ヤラ サファリ",
      "シーギリヤ ツアー",
      "エッラ ツアー",
      "Travel With Sohan ツアー",
    ],
  },
};

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await paramsPromise;
  return generatePageMetadata(locale, "tours", SEO_CONFIG);
}

export default function ToursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
