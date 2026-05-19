"use client";

import { useRef } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { setupScrollReveal } from "@/lib/gsap-animations";
import { useTranslations } from "next-intl";
import { IMAGES } from "@/config/images";
import { useGSAP } from "@gsap/react";
import { Link } from "@/i18n/navigation";
import { gsap } from "gsap";

export default function DiscoverSection() {
    const t = useTranslations("Discover");
    const sectionRef = useRef<HTMLElement>(null);
    const floatRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const revealCtx = setupScrollReveal(sectionRef, ".discover-reveal");
        
        return () => {
            if (revealCtx) revealCtx.revert();
        };
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="discover-section relative w-full py-24 md:py-32 px-6 md:px-10 lg:px-20 overflow-hidden bg-black">
            {/* Elegant Background Gradient */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 rounded-full opacity-20 -z-10" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-blue-500/10 rounded-full opacity-20 -z-10" />

            <div className="relative max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    
                    {/* Left Side: Text and Content */}
                    <div className="order-2 lg:order-1 space-y-10">
                        <div className="discover-reveal space-y-6 will-change-transform">
                            <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.9] tracking-tighter uppercase font-heading">
                                {t("title1")}
                                <br />
                                <span className="text-white/50">{t("title2")} </span>
                                <span className="text-primary italic font-serif lowercase tracking-normal">{t("title3")}</span>
                            </h2>
                            
                            <p className="text-white/90 text-lg leading-relaxed max-w-md">
                                {t("description")}
                            </p>
                        </div>

                        {/* Interactive Buttons */}
                        <div className="discover-reveal flex flex-wrap items-center gap-6 will-change-transform">
                            <Link 
                                href="/tours"
                                className="group relative flex items-center justify-center bg-white text-black px-8 py-4 rounded-full transition-all duration-500 font-bold text-sm overflow-hidden min-h-[48px]"
                            >
                                <span className="relative z-10 uppercase tracking-widest">{t("exploreTours")}</span>
                                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                            </Link>
                            
                            <Link 
                                href="/gallery"
                                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 font-bold text-xs uppercase tracking-[0.2em] min-h-[48px]"
                            >
                                <span>{t("viewGallery")}</span>
                            </Link>
                        </div>

                        {/* Premium Quote Card */}
                        <div className="discover-reveal relative p-8 rounded-[2rem] glass-card border border-white/10 bg-white/[0.03] flex gap-6 will-change-transform">
                            <div className="shrink-0">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <Quote className="text-primary w-6 h-6 rotate-180" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <p className="text-white text-base md:text-lg italic font-medium leading-relaxed">
                                    &ldquo;{t("quote")}&rdquo;
                                </p>
                                <p className="text-primary text-[10px] font-bold uppercase tracking-[0.3em]">
                                    — {t("author")}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Cinematic Visuals */}
                    <div className="order-1 lg:order-2 relative">
                        {/* Main Image with Frame */}
                        <div className="discover-reveal relative z-10 aspect-[4/5] md:aspect-[3/4] rounded-[2.5rem] overflow-hidden group shadow-2xl border border-white/10 will-change-transform">
                            <Image
                                src={IMAGES.discovery.waterfall}
                                alt="Sri Lanka Nature"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            {/* Overlay Vignette */}
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/40 to-transparent" />
                        </div>

                        {/* Floating Sub-image */}
                        <div
                            ref={floatRef}
                            className="absolute -bottom-10 -left-10 md:-left-20 w-48 md:w-64 aspect-video rounded-3xl overflow-hidden border-4 border-black shadow-2xl z-20 hidden md:block will-change-transform"
                        >
                            <Image
                                src={IMAGES.tours.ella}
                                alt="Scenic Train"
                                fill
                                sizes="320px"
                                className="object-cover"
                            />
                        </div>
                        
                        {/* Abstract Shapes - Simple Glow */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
