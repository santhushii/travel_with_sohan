import Hero from "@/components/home/NewHero";
import PopularToursSection from "@/components/home/PopularToursSection";
import dynamic from "next/dynamic";

const DiscoverSection = dynamic(() => import("@/components/home/DiscoverSection"), { ssr: true });
const ReviewsSlider = dynamic(() => import("@/components/home/ReviewsSlider"), { ssr: true });
const CTABanner = dynamic(() => import("@/components/home/CTABanner"), { ssr: true });

export default function Home() {
    return (
        <main>
            <Hero />
            <PopularToursSection />
            <DiscoverSection />
            <ReviewsSlider />
            <CTABanner />
        </main>
    );
}
