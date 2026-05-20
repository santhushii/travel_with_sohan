"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { setupScrollReveal, setupMagneticButton, cleanupScrollTriggers } from "@/lib/gsap-animations";
import { useTranslations } from "next-intl";
import { IMAGES } from "@/config/images";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight, MapPin, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { blurDataURL, IMAGE_QUALITY_DEFAULT } from "@/lib/image-utils";

export default function PopularToursSection() {
    const t = useTranslations("PopularTours");
    const sectionRef = useRef<HTMLElement>(null);

    const tours = [
        {
            id: 1,
            label: "TOUR 01",
            title: t("tour1Title", { fallback: "Sigiriya & Dambulla" }),
            location: "Cultural Triangle",
            duration: "2 Days",
            image: IMAGES.tours.sigiriya,
            href: "/tours?q=cultural",
        },
        {
            id: 2,
            label: "TOUR 02",
            title: t("tour2Title", { fallback: "Ella & Nuwara Eliya" }),
            location: "Central Highlands",
            duration: "3 Days",
            image: IMAGES.tours.ella,
            href: "/tours?q=hill",
        },
        {
            id: 3,
            label: "TOUR 03",
            title: t("tour3Title", { fallback: "Yala Safari & Coast" }),
            location: "Southern Province",
            duration: "2 Days",
            image: IMAGES.tours.yala,
            href: "/tours?q=wildlife",
        },
        {
            id: 4,
            label: "TOUR 04",
            title: t("tour4Title", { fallback: "Galle & Mirissa" }),
            location: "South Coast",
            duration: "Whale Tour",
            image: IMAGES.tours.galle,
            href: "/tours?q=coastal",
        },
    ];

    useGSAP(() => {
        const revealCtx = setupScrollReveal(sectionRef, ".tour-card");
        
        return () => {
            if (revealCtx) revealCtx.revert();
        };
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="popular-tours-section w-full py-24 md:py-32 px-6 md:px-10 lg:px-20 relative overflow-hidden bg-black">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="space-y-4">
                        <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase block">
                            {t("overline", { fallback: "Curated Experiences" })}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase font-heading leading-none">
                            {t("title", { fallback: "MOST POPULAR TOURS" })}
                        </h2>
                    </div>
                    <Link 
                        href="/tours" 
                        className="group flex items-center gap-2 text-white hover:text-primary transition-all duration-300 font-black text-sm tracking-widest uppercase py-3 px-6 rounded-full border border-white/10 hover:border-primary/50 bg-white/5"
                    >
                        {t("viewAll", { fallback: "Explore All Tours" })}
                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tours.map((tour) => (
                        <Link
                            key={tour.id}
                            href={tour.href}
                            className="tour-card group relative h-[450px] rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/10 hover:border-primary/30 transition-all duration-700 will-change-transform block"
                        >
                            {/* Card Content ... */}
                            <div className="absolute inset-0">
                                <Image
                                    src={tour.image}
                                    alt={tour.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    className="object-cover transition-all duration-1000 group-hover:scale-105"
                                    loading="lazy"
                                    quality={IMAGE_QUALITY_DEFAULT}
                                    placeholder="blur"
                                    blurDataURL={blurDataURL(400, 450)}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent group-hover:via-black/60 transition-all duration-700" />
                            </div>

                            {/* Label */}
                            <div className="absolute top-6 left-6 z-20">
                                <span className="bg-black/80 text-[10px] text-white font-black px-4 py-1.5 rounded-full border border-white/20 tracking-widest uppercase">
                                    {tour.label}
                                </span>
                            </div>

                            {/* Text Info */}
                            <div className="absolute inset-x-0 bottom-0 p-8 z-20">
                                <div className="space-y-4">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-1.5 text-primary text-[10px] font-bold uppercase tracking-widest">
                                            <MapPin size={10} strokeWidth={3} />
                                            {tour.location}
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                                            {tour.title}
                                        </h3>
                                    </div>
                                    
                                    <div className="flex items-center justify-between pt-4 border-t border-white/10 opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-500">
                                        <div className="flex items-center gap-2 text-white/90 text-xs font-semibold">
                                            <Clock size={14} className="text-primary" />
                                            {tour.duration}
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-primary hover:bg-white flex items-center justify-center text-black shadow-lg transition-all duration-300">
                                            <ArrowUpRight size={18} strokeWidth={3} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Simple CSS-based Hover Glow */}
                            <div className="absolute inset-0 rounded-[2rem] border-2 border-primary/0 group-hover:border-primary/40 transition-all duration-500 z-30 pointer-events-none" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
