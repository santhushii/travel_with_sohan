import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";

const SEO_CONFIG = {
  en: {
    title: "Photo Gallery & Tour Highlights",
    description:
      "Browse stunning photos from recent tours around Sri Lanka. Experience the breathtaking nature, ancient temples, wild animals, and authentic local experiences through Sohan's guided tours.",
    keywords: [
      "Sri Lanka photos",
      "Sri Lanka tour gallery",
      "Travel With Sohan gallery",
      "Sri Lanka wildlife photos",
      "Sri Lanka temple photos",
      "Sri Lanka scenery",
      "Sri Lanka travel photos",
      "Sigiriya photos",
      "Yala safari photos",
      "Ella train photos",
    ],
  },
  es: {
    title: "Galería de Fotos y Momentos de Tours",
    description:
      "Explora fotos impresionantes de tours recientes por Sri Lanka. Naturaleza, templos antiguos, animales salvajes y experiencias locales auténticas con Sohan.",
    keywords: [
      "fotos Sri Lanka",
      "galería Sri Lanka",
      "Travel With Sohan galería",
      "fotos safari Sri Lanka",
      "fotos tours Sri Lanka",
    ],
  },
  ja: {
    title: "フォトギャラリー＆ツアーハイライト",
    description:
      "スリランカの最新ツアーの美しい写真をご覧ください。壮大な自然、古代寺院、野生動物、地元の体験をソハンのガイドツアーでお届けします。",
    keywords: [
      "スリランカ 写真",
      "スリランカ ツアー ギャラリー",
      "Travel With Sohan ギャラリー",
      "スリランカ サファリ 写真",
    ],
  },
};

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await paramsPromise;
  return generatePageMetadata(locale, "gallery", SEO_CONFIG);
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
