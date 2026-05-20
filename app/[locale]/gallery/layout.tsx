import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery & Tour Highlights",
  description: "Browse beautiful photos from recent tours around Sri Lanka. Experience the stunning nature, historic temples, wild animals, and local experiences.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
