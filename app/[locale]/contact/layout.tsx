import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";

const SEO_CONFIG = {
  en: {
    title: "Contact & Booking",
    description:
      "Get in touch with Sohan to book your private tour of Sri Lanka. Quick response guaranteed — reach out via WhatsApp, email, or the booking form for 24/7 direct chat.",
    keywords: [
      "book Sri Lanka tour",
      "contact Sohan",
      "Sri Lanka tour booking",
      "WhatsApp Sri Lanka guide",
      "hire Sri Lanka guide",
      "Travel With Sohan contact",
      "Sri Lanka tour inquiry",
      "private tour booking",
    ],
  },
  es: {
    title: "Contacto y Reservas",
    description:
      "Contacta a Sohan para reservar tu tour privado por Sri Lanka. Respuesta rápida garantizada — comunícate por WhatsApp, correo electrónico o formulario de reserva.",
    keywords: [
      "reservar tour Sri Lanka",
      "contactar Sohan",
      "reserva tour Sri Lanka",
      "WhatsApp guía Sri Lanka",
      "contratar guía Sri Lanka",
      "Travel With Sohan contacto",
    ],
  },
  ja: {
    title: "お問い合わせ＆予約",
    description:
      "スリランカのプライベートツアーを予約するには、ソハンにお問い合わせください。WhatsApp、メール、予約フォームで24時間対応。迅速な返信をお約束します。",
    keywords: [
      "スリランカ ツアー 予約",
      "ソハン 連絡",
      "スリランカ ガイド 予約",
      "WhatsApp スリランカ ガイド",
      "Travel With Sohan 連絡",
    ],
  },
};

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await paramsPromise;
  return generatePageMetadata(locale, "contact", SEO_CONFIG);
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
