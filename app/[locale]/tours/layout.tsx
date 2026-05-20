import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Tours & Safaris",
  description: "Explore custom, privately guided Sri Lanka tours. Handcrafted itineraries covering the Cultural Triangle, Hill Country tea plantations, wildlife safaris, and southern beaches.",
};

export default function ToursLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
