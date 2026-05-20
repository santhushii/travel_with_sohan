import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Destinations to Visit",
  description: "Discover the best places to visit in Sri Lanka with a local guide. Information and guide to Sigiriya Rock, Kandy, Ella, Galle Fort, and Yala National Park.",
};

export default function DestinationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
