"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

// Hero entrance animation - fade and slide in navbar and hero content
export const animateHeroEntrance = (containerRef: React.RefObject<HTMLDivElement | null>) => {
    if (!containerRef.current) return;

    let ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.from(".hero-title-main", {
            opacity: 0,
            y: 80,
            duration: 1.2,
            stagger: 0.15,
            clearProps: "all"
        })
        .from(
            ".hero-subtitle",
            {
                opacity: 0,
                y: 30,
                duration: 0.8,
                clearProps: "all"
            },
            "-=1.0"
        )
        .from(
            ".hero-cta",
            {
                opacity: 0,
                y: 20,
                duration: 0.6,
                stagger: 0.1,
                clearProps: "all"
            },
            "-=0.6"
        )
        .from(
            ".hero-features",
            {
                opacity: 0,
                y: 20,
                duration: 0.8,
                stagger: 0.1,
                clearProps: "all"
            },
            "-=0.4"
        )
        .from(
            ".hero-visuals",
            {
                opacity: 0,
                scale: 0.95,
                duration: 1.2,
                clearProps: "all"
            },
            "-=1.2"
        );
    }, containerRef);

    return ctx;
};

// Parallax effect for element
export const setupParallax = (selector: string, speed: number = 0.2) => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
        gsap.to(selector, {
            scrollTrigger: {
                trigger: selector,
                start: "top bottom",
                end: "bottom top",
                scrub: 1, // Smoother scrub
            },
            y: (i, target) => -ScrollTrigger.maxScroll(window) * speed,
            ease: "none",
        });
    });

    return ctx;
};

// Parallax effect specifically for hero background
export const setupParallaxBackground = (selector: string) => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
        gsap.to(selector, {
            scrollTrigger: {
                trigger: selector,
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
            y: "20%",
            ease: "none",
        });
    });

    return ctx;
};

// Fade in sections on scroll with stagger and scale
export const setupScrollReveal = (containerRef: React.RefObject<HTMLElement | null>, selector: string) => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const ctx = gsap.context(() => {
        const elements = containerRef.current?.querySelectorAll(selector);
        
        elements?.forEach((el) => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                },
                opacity: 0,
                y: 30,
                scale: 0.98,
                duration: 1.0,
                ease: "power2.out",
                clearProps: "all"
            });
        });
    }, containerRef);

    return ctx;
};

// Magnetic effect for buttons
export const setupMagneticButton = (containerRef: React.RefObject<HTMLElement | null>, selector: string) => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const ctx = gsap.context(() => {
        const buttons = containerRef.current?.querySelectorAll(selector);
        
        buttons?.forEach((btn) => {
            const onMouseMove = (e: any) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                gsap.to(btn, {
                    x: x * 0.35,
                    y: y * 0.35,
                    duration: 0.4,
                    ease: "power2.out",
                });
            };

            const onMouseLeave = () => {
                gsap.to(btn, {
                    x: 0,
                    y: 0,
                    duration: 0.7,
                    ease: "elastic.out(1, 0.3)",
                });
            };

            btn.addEventListener("mousemove", onMouseMove);
            btn.addEventListener("mouseleave", onMouseLeave);
        });
    }, containerRef);

    return ctx;
};

// Cleanup function for ScrollTrigger
export const cleanupScrollTriggers = () => {
    if (typeof window !== "undefined") {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    }
};
