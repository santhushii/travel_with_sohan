"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useTranslations } from "next-intl";

export default function ReviewsSlider() {
    const t = useTranslations("Reviews");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const testimonials = [
        {
            name: t("testimonials.0.name"),
            country: t("testimonials.0.country"),
            rating: 5,
            text: t("testimonials.0.text")
        },
        {
            name: t("testimonials.1.name"),
            country: t("testimonials.1.country"),
            rating: 5,
            text: t("testimonials.1.text")
        },
        {
            name: t("testimonials.2.name"),
            country: t("testimonials.2.country"),
            rating: 5,
            text: t("testimonials.2.text")
        },
        {
            name: t("testimonials.3.name"),
            country: t("testimonials.3.country"),
            rating: 5,
            text: t("testimonials.3.text")
        },
        {
            name: t("testimonials.4.name"),
            country: t("testimonials.4.country"),
            rating: 5,
            text: t("testimonials.4.text")
        },
        {
            name: t("testimonials.5.name"),
            country: t("testimonials.5.country"),
            rating: 5,
            text: t("testimonials.5.text")
        }
    ];

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, [testimonials.length]);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useGSAP(() => {
        if (!containerRef.current) return;
        
        gsap.fromTo(".testimonial-card", 
            { opacity: 0, scale: 0.98 },
            { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
        );
    }, [currentIndex]);

    // Auto-play
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(handleNext, 6000);
        return () => clearInterval(interval);
    }, [isPaused, handleNext]);

    return (
        <section id="reviews" className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-[#050E16] relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-10 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[4rem] font-black text-white mb-3 tracking-tighter uppercase font-heading leading-tight">
                        {t("title")} <br className="md:hidden" />
                        <span className="text-primary italic">{t("titleHighlight")}</span>
                    </h2>
                    <p className="text-white/40 text-sm md:text-base uppercase tracking-[0.3em] font-medium mb-6">
                        {t("subtitle")}
                    </p>

                    {/* TripAdvisor Recommendation Badge */}
                    <a
                        href="https://www.tripadvisor.com/Attraction_Review-g293962-d17652201-Reviews-Travel_with_Sohan-Colombo_Western_Province.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/5 border border-primary/20 hover:border-primary/50 rounded-2xl px-6 py-4 transition-all duration-300 hover:bg-white/10 group cursor-pointer"
                    >
                        <div className="flex items-center gap-2">
                            {/* TripAdvisor Icon */}
                            <svg viewBox="0 0 24 24" fill="#34E0A1" className="w-8 h-8 group-hover:scale-110 transition-transform duration-300">
                                <path d="M12.039 0C6.545 0 2.091 4.545 2.091 10.15c0 5.498 4.218 10.035 9.61 10.147h.187v2.333c-3.136.216-5.591 2.825-5.591 6.037 0 .583.084 1.144.238 1.677H0v1.275h24.078v-1.275h-6.732c.154-.533.238-1.094.238-1.677 0-3.212-2.455-5.821-5.543-6.037v-2.333c5.44-.138 9.774-4.665 9.774-10.147C21.815 4.545 17.362 0 11.867 0h.172zm-6.28 17.185c-3.111 0-5.63-2.518-5.63-5.63s2.519-5.63 5.63-5.63 5.63 2.518 5.63 5.63-2.519 5.63-5.63 5.63zm12.592 0c-3.111 0-5.63-2.518-5.63-5.63s2.519-5.63 5.63-5.63 5.63 2.518 5.63 5.63-2.519 5.63-5.63 5.63zM5.76 17.01c.717 0 1.299-.582 1.299-1.299s-.582-1.299-1.299-1.299-1.299.582-1.299 1.299.582 1.299 1.299 1.299zm12.592 0c.717 0 1.299-.582 1.299-1.299s-.582-1.299-1.299-1.299-1.299.582-1.299 1.299.582 1.299 1.299 1.299z" />
                            </svg>
                            <span className="text-white font-bold text-base font-heading tracking-wide">{t("badgeTitle")}</span>
                        </div>
                        <div className="hidden sm:block h-8 w-px bg-white/10" />
                        <div className="flex flex-col items-center sm:items-start text-xs sm:text-sm font-semibold text-white/80 gap-0.5">
                            <div className="flex items-center gap-1.5">
                                <span className="text-[#34E0A1] font-bold">{t("badgeRating")}</span>
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className="w-2.5 h-2.5 rounded-full bg-[#34E0A1]" />
                                    ))}
                                </div>
                                <span className="text-white/40 font-normal">| {t("badgeCount")}</span>
                            </div>
                            <span className="text-primary group-hover:text-white transition-colors text-[10px] uppercase tracking-wider font-bold">
                                {t("badgeRank")}
                            </span>
                        </div>
                    </a>
                </div>

                {/* Slider Container */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                >
                    {/* Testimonial Cards */}
                    <div ref={containerRef} className="overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[0, 1, 2].map((offset) => {
                                const index = (currentIndex + offset) % testimonials.length;
                                const testimonial = testimonials[index];
                                return (
                                    <div
                                        key={`${testimonial.name}-${offset}`}
                                        className={`testimonial-card bg-white/5 border border-white/5 p-8 rounded-[2rem] glass-card transition-all duration-300 will-change-transform ${
                                            offset > 0 ? "hidden md:flex" : "flex"
                                        } ${offset > 1 ? "md:hidden lg:flex" : "flex"} flex-col justify-between h-full`}
                                    >
                                        <div className="space-y-6">
                                            {/* Stars */}
                                            <div className="flex items-center gap-1">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={14}
                                                        className="text-primary fill-primary"
                                                    />
                                                ))}
                                            </div>

                                            {/* Review Text */}
                                            <p className="text-white/80 text-base md:text-lg italic font-medium leading-relaxed">
                                                &ldquo;{testimonial.text}&rdquo;
                                            </p>
                                        </div>

                                        {/* Author */}
                                        <div className="pt-8 mt-8 border-t border-white/5">
                                            <p className="font-bold text-white text-base uppercase tracking-tighter">
                                                {testimonial.name}
                                            </p>
                                            <p className="text-[10px] text-primary font-black uppercase tracking-[0.2em]">
                                                {testimonial.country}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-6 mt-12">
                        <button
                            onClick={handlePrev}
                            className="w-12 h-12 rounded-full border border-white/10 hover:border-primary text-white flex items-center justify-center transition-all duration-500 hover:bg-primary hover:text-black"
                            aria-label="Previous review"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-1.5 rounded-full transition-all duration-500 ${index === currentIndex
                                        ? "bg-primary w-8"
                                        : "bg-white/20 w-3 hover:bg-white/40"
                                        }`}
                                    aria-label={`Go to review ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={handleNext}
                            className="w-12 h-12 rounded-full border border-white/10 hover:border-primary text-white flex items-center justify-center transition-all duration-500 hover:bg-primary hover:text-black"
                            aria-label="Next review"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
