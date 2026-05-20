"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Award, MapPin, Phone, ChevronDown, ArrowRight } from "lucide-react";
import SriLankaMap from "./SriLankaMap";
import { animateHeroEntrance, setupParallaxBackground, cleanupScrollTriggers } from "@/lib/gsap-animations";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { IMAGES } from "@/config/images";
import { cn } from "@/lib/utils";
import QuickBookModal from "@/components/ui/QuickBookModal";

import { useGSAP } from "@gsap/react";

export default function Hero() {
    const t = useTranslations("Hero");
    const [activeIndex, setActiveIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        const ctx = animateHeroEntrance(heroRef);
        
        return () => {
            if (ctx) ctx.revert();
        };
    }, { scope: heroRef });

    const heroItems = [
        { number: "01", subtitle: t("item1") },
        { number: "02", subtitle: t("item2") },
        { number: "03", subtitle: t("item3") },
        { number: "04", subtitle: t("item4") },
        { number: "05", subtitle: t("item5") },
    ];

    // Auto-cycle hero content and reset interval when activeIndex is changed manually
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % heroItems.length);
        }, 6000); // 6 seconds auto-rotation for premium feel
        return () => clearInterval(timer);
    }, [heroItems.length, activeIndex]);

    const currentContent = heroItems[activeIndex];

    const features = [
        { icon: Award, label: t("feature1", { fallback: "Licensed National Guide" }), detail: "CERTIFIED" },
        { icon: MapPin, label: t("feature2", { fallback: "Custom Private Tours" }), detail: "PERSONALIZED" },
        { icon: Phone, label: t("feature3", { fallback: "24/7 WhatsApp Support" }), detail: "INSTANT" },
    ];

    return (
        <section ref={heroRef} className="relative w-full overflow-hidden bg-black min-h-[calc(100vh-72px)] flex flex-col justify-between py-12 md:py-16 lg:py-20">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={IMAGES.hero.background}
                    alt="Sri Lanka landscape"
                    fill
                    sizes="100vw"
                    className="hero-background-img object-cover scale-110"
                    priority
                    quality={90}
                />
                {/* Dark Gradient Overlay - More cinematic */}
                <div 
                    className="absolute inset-0 bg-black/50 bg-gradient-to-b from-black/70 via-transparent to-black"
                />
            </div>

            {/* Content Container */}
            <div className="relative w-full flex-1 flex flex-col justify-between z-10">
                {/* Main Content Area */}
                <div className="flex-1 flex items-center py-8 lg:py-12">
                    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,0.8fr] gap-10 lg:gap-16 items-center">
                            
                            {/* Left Column: Title and Subtitle */}
                            <div className="relative z-10 space-y-6 md:space-y-8 text-center lg:text-left">
                                <div className="will-change-transform">
                                    <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[4.5rem] xl:text-[5.5rem] font-black tracking-tighter uppercase leading-[0.85] font-heading mix-blend-lighten">
                                        <span className="hero-title-main block text-white/90 drop-shadow-2xl">{t("title1")}</span>
                                        <span className="hero-title-main block text-primary drop-shadow-[0_0_30px_rgba(34,230,197,0.4)]">{t("title2")}</span>
                                    </h1>
                                </div>
 
                                <div className="max-w-md mx-auto lg:mx-0 will-change-transform">
                                    <p className="hero-subtitle text-lg md:text-xl text-white/90 font-medium leading-relaxed mb-8">
                                        {currentContent.subtitle}
                                    </p>
 
                                    {/* Action Buttons */}
                                    <div className="hero-cta flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                                        <Link 
                                            href="/tours"
                                            className="group relative flex items-center gap-3 bg-primary hover:bg-white text-black px-8 py-4 min-h-[56px] rounded-full transition-all duration-500 font-bold text-base overflow-hidden w-full sm:w-auto justify-center shadow-lg shadow-primary/20"
                                        >
                                            <span className="relative z-10 uppercase tracking-widest">{t("cta")}</span>
                                            <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" />
                                            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-10 transition-opacity" />
                                        </Link>
 
                                        <button 
                                            onClick={() => setIsModalOpen(true)}
                                            className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 min-h-[56px] rounded-full transition-all duration-500 font-bold text-base border border-white/20 w-full sm:w-auto justify-center"
                                        >
                                            <span className="uppercase tracking-widest">Quick Book</span>
                                        </button>
                                    </div>
                                </div>
 
                                {/* Hero Navigator - Desktop */}
                                <div className="hidden lg:flex items-center gap-4 pt-4">
                                    {heroItems.map((item, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveIndex(idx)}
                                            className={cn(
                                                "w-12 h-1 bg-white/20 rounded-full transition-all duration-500 overflow-hidden relative",
                                                activeIndex === idx && "bg-primary w-20"
                                            )}
                                        >
                                            {activeIndex === idx && (
                                                <motion.div 
                                                    layoutId="heroNav"
                                                    className="absolute inset-0 bg-primary"
                                                    initial={false}
                                                />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
 
                            {/* Right Column: Sri Lanka Map (Gently Floating and Animating) */}
                            <div className="hero-visuals relative block w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-none mx-auto mt-4 lg:mt-0">
                                <div className="relative z-10 animate-float-gentle">
                                    <SriLankaMap activeIndex={activeIndex} />
                                </div>
                                
                                {/* Background Decorative Elements */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-[80px] lg:blur-[120px] -z-10" />
                            </div>
                        </div>
                    </div>
                </div>
 
                {/* Bottom Bar: Quick Features */}
                <div className="hero-features w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 mt-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                        {features.map((feature, idx) => (
                            <div 
                                key={idx}
                                className="flex items-center gap-4 p-4 lg:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                                    <feature.icon className="w-6 h-6 text-primary group-hover:text-black transition-colors" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-primary tracking-[0.2em] mb-0.5">{feature.detail}</p>
                                    <h3 className="text-xs lg:text-sm font-bold text-white leading-tight uppercase tracking-wide">{feature.label}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Scroll Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/30">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll</span>
                    <motion.div 
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-[1px] h-10 bg-gradient-to-b from-primary to-transparent" 
                    />
                </div>
            </div>

            <QuickBookModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </section>
    );
}
