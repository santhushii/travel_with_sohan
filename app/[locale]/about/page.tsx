"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useTranslations } from "next-intl";
import GlassCard from "@/components/ui/GlassCard";
import { Award, Globe, Heart, Star, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const timelineKeys = ["training", "travelers", "chauffeur", "national"];

const badgeKeys = [
    { icon: Award, key: "licensed" },
    { icon: Star, key: "rated" },
    { icon: Users, key: "travelers" },
    { icon: Globe, key: "countries" },
    { icon: Heart, key: "passionate" },
];

export default function AboutPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);
    const t = useTranslations("About");

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion || !containerRef.current) return;

        // 1. Header animation (fade in and slide down)
        gsap.fromTo(
            containerRef.current.querySelector(".about-header"),
            { opacity: 0, y: -30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
        );

        // 2. Profile animation (slide in from left & right)
        gsap.fromTo(
            containerRef.current.querySelector(".about-profile-card"),
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.2 }
        );
        gsap.fromTo(
            containerRef.current.querySelector(".about-welcome-content"),
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.2 }
        );

        // 3. Licenses animation (staggered slide up on scroll)
        const licensesSection = containerRef.current.querySelector(".about-licenses-section");
        const licenseCards = containerRef.current.querySelectorAll(".about-license-card");
        if (licensesSection && licenseCards.length) {
            gsap.fromTo(
                licenseCards,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: licensesSection,
                        start: "top 80%",
                    },
                }
            );
        }

        // 4. Badges animation (staggered pop on scroll)
        const badgesSection = containerRef.current.querySelector(".about-badges-section");
        const badgeCards = containerRef.current.querySelectorAll(".about-badge-card");
        if (badgesSection && badgeCards.length) {
            gsap.fromTo(
                badgeCards,
                { opacity: 0, scale: 0.8 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: badgesSection,
                        start: "top 85%",
                    },
                }
            );
        }

        // 5. Timeline animation
        if (timelineRef.current) {
            const items = timelineRef.current.querySelectorAll(".timeline-item");
            items.forEach((item, index) => {
                gsap.fromTo(
                    item,
                    { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 80%",
                        },
                    }
                );
            });
        }

        // 6. Why Travel With Me cards animation (staggered fade up on scroll)
        const whySection = containerRef.current.querySelector(".about-why-section");
        const whyCards = containerRef.current.querySelectorAll(".about-why-card");
        if (whySection && whyCards.length) {
            gsap.fromTo(
                whyCards,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: whySection,
                        start: "top 80%",
                    },
                }
            );
        }
    }, []);

    return (
        <main ref={containerRef} className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 about-header">
                    <h1 className="text-5xl sm:text-6xl font-heading font-bold text-white mb-4">
                        {t("headerTitle").replace(t("headerTitleHighlight"), "")}
                        <span className="text-teal-400">{t("headerTitleHighlight")}</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        {t("headerSubtitle")}
                    </p>
                </div>

                {/* Profile Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    <GlassCard className="flex flex-col items-center justify-center p-8 text-center about-profile-card">
                        <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-teal-400 to-blue-600 p-1 mb-4 overflow-hidden shadow-xl">
                            <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-800">
                                <Image
                                    src="/images/profile.jpeg"
                                    alt={`${t("profileName")} - ${t("profileTitle")}`}
                                    fill
                                    className="object-cover object-top"
                                    priority
                                    sizes="(max-width: 768px) 256px, 256px"
                                />
                            </div>
                        </div>
                        <h3 className="text-2xl font-heading font-bold text-white mb-1">{t("profileName")}</h3>
                        <p className="text-teal-400 font-medium text-sm">{t("profileTitle")}</p>
                    </GlassCard>

                    <div className="flex flex-col justify-center about-welcome-content">
                        <h2 className="text-3xl font-heading font-bold text-white mb-6">
                            {t("welcomeTitle")}
                        </h2>
                        <div className="space-y-4 text-text-secondary">
                            <p>{t("welcomeP1")}</p>
                            <p>{t("welcomeP2")}</p>
                            {t("welcomeP3") && <p>{t("welcomeP3")}</p>}
                        </div>
                    </div>
                </div>

                {/* Licenses & Accreditations */}
                <div className="mb-20 about-licenses-section">
                    <h2 className="text-3xl font-heading font-bold text-white text-center mb-10">
                        {t("licensesTitle").split(" ").slice(0, -1).join(" ")}{" "}
                        <span className="text-teal-400">{t("licensesTitle").split(" ").slice(-1)[0]}</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* National Tourist Guide Lecturer Card */}
                        <GlassCard className="about-license-card relative overflow-hidden border border-teal-500/20 hover:border-teal-500/40 transition-all duration-300">
                            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-teal-500/10 text-teal-400 rounded-lg shrink-0">
                                    <Award size={36} />
                                </div>
                                <div className="space-y-3 w-full">
                                    <h3 className="text-xl font-heading font-bold text-white tracking-wide">
                                        {t("nationalGuideLecturer")}
                                    </h3>
                                    <div className="h-px bg-white/10 w-full my-2" />
                                    <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
                                        <div>
                                            <p className="text-gray-400 text-xs uppercase tracking-wider">{t("licenseName")}</p>
                                            <p className="text-white font-medium">Sohan</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-xs uppercase tracking-wider">{t("guideType")}</p>
                                            <p className="text-white font-medium">{t("allIsland")}</p>
                                        </div>
                                        <div className="col-span-2">
                                            <p className="text-gray-400 text-xs uppercase tracking-wider">{t("guideNumber")}</p>
                                            <p className="text-teal-400 font-mono font-bold text-base">N-2355</p>
                                        </div>
                                    </div>
                                    <div className="pt-2">
                                        <p className="text-[11px] text-gray-500 uppercase tracking-widest font-semibold">
                                            {t("authorizedBy")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>

                        {/* Chauffeur Tourist Guide Lecturer Card */}
                        <GlassCard className="about-license-card relative overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg shrink-0">
                                    <Award size={36} />
                                </div>
                                <div className="space-y-3 w-full">
                                    <h3 className="text-xl font-heading font-bold text-white tracking-wide">
                                        {t("chauffeurGuideLecturer")}
                                    </h3>
                                    <div className="h-px bg-white/10 w-full my-2" />
                                    <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
                                        <div>
                                            <p className="text-gray-400 text-xs uppercase tracking-wider">{t("licenseName")}</p>
                                            <p className="text-white font-medium">Sohan</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-xs uppercase tracking-wider">{t("guideType")}</p>
                                            <p className="text-white font-medium">{t("allIsland")}</p>
                                        </div>
                                        <div className="col-span-2">
                                            <p className="text-gray-400 text-xs uppercase tracking-wider">{t("guideNumber")}</p>
                                            <p className="text-blue-400 font-mono font-bold text-base">C-1754</p>
                                        </div>
                                    </div>
                                    <div className="pt-2">
                                        <p className="text-[11px] text-gray-500 uppercase tracking-widest font-semibold">
                                            {t("authorizedBy")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    </div>
                </div>

                {/* Badges */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-20 about-badges-section">
                    {badgeKeys.map((badge, index) => {
                        const Icon = badge.icon;
                        return (
                            <GlassCard key={index} className="text-center about-badge-card" hover>
                                <div className="flex justify-center mb-3">
                                    <div className="p-3 bg-teal-500/20 rounded-full">
                                        <Icon size={28} className="text-teal-400" />
                                    </div>
                                </div>
                                <p className="text-sm font-semibold text-white">{t(`badges.${badge.key}`)}</p>
                            </GlassCard>
                        );
                    })}
                </div>

                {/* Timeline */}
                <div className="mb-20">
                    <h2 className="text-4xl font-heading font-bold text-white text-center mb-12">
                        {t("journeyTitle").split(" ").slice(0, -1).join(" ")}{" "}
                        <span className="text-teal-400">{t("journeyTitle").split(" ").slice(-1)[0]}</span>
                    </h2>
                    <div ref={timelineRef} className="space-y-8">
                        {timelineKeys.map((key, index) => (
                            <div
                                key={index}
                                className={`timeline-item flex flex-col md:flex-row gap-6 items-center ${
                                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                            >
                                <div className="md:w-1/2">
                                    <GlassCard hover>
                                        <div className="flex items-center gap-4 mb-3">
                                            <span className="text-3xl font-heading font-bold text-teal-400">
                                                {t(`timeline.${key}.year`)}
                                            </span>
                                            <h3 className="text-xl font-heading font-semibold text-white">
                                                {t(`timeline.${key}.title`)}
                                            </h3>
                                        </div>
                                        <p className="text-gray-400">{t(`timeline.${key}.description`)}</p>
                                    </GlassCard>
                                </div>
                                <div className="hidden md:block w-12 h-12 rounded-full bg-teal-500 flex-shrink-0 border-4 border-black" />
                                <div className="md:w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why Travel With Me */}
                <div className="about-why-section">
                    <h2 className="text-4xl font-heading font-bold text-white text-center mb-12">
                        {t("whyTitle").split(" ").slice(0, -1).join(" ")}{" "}
                        <span className="text-teal-400">{t("whyTitle").split(" ").slice(-1)[0]}</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <GlassCard hover className="about-why-card">
                            <h3 className="text-xl font-heading font-semibold text-white mb-3">
                                {t("why1Title")}
                            </h3>
                            <p className="text-gray-400">
                                {t("why1Desc")}
                            </p>
                        </GlassCard>
                        <GlassCard hover className="about-why-card">
                            <h3 className="text-xl font-heading font-semibold text-white mb-3">
                                {t("why2Title")}
                            </h3>
                            <p className="text-gray-400">
                                {t("why2Desc")}
                            </p>
                        </GlassCard>
                        <GlassCard hover className="about-why-card">
                            <h3 className="text-xl font-heading font-semibold text-white mb-3">
                                {t("why3Title")}
                            </h3>
                            <p className="text-gray-400">
                                {t("why3Desc")}
                            </p>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </main>
    );
}
