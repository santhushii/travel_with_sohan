import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Booking",
  description: "Get in touch with Sohan to book your private tour of Sri Lanka. Quick response and 24/7 direct chat via WhatsApp.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
