import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sohan",
  description: "Meet Sohan Nallaperuma, a licensed National Tourist Guide Lecturer in Sri Lanka. Learn about my official guide credentials, background, and passion for showing you the best of Sri Lanka.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
