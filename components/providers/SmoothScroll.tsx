"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
    children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Respect system preferences for reduced motion
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) return;

        // Initialize Lenis with optimized settings for buttery smooth, luxurious scrolling
        const lenis = new Lenis({
            duration: 1.3,                  // Quintessential duration for slow, buttery smooth transition
            easing: (t) => 1 - Math.pow(1 - t, 4), // Quartic decelerating curve for organic, premium feel
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 0.9,           // Refined multiplier to prevent heavy/fast scroll steps
            touchMultiplier: 1.2,           // Natural mobile touch feel
            infinite: false,
        });

        lenisRef.current = lenis;

        // Synchronize Lenis scrolling with ScrollTrigger updates
        lenis.on("scroll", () => {
            ScrollTrigger.update();
        });

        // Use GSAP's high-performance ticker to update Lenis every frame
        const updateTicker = (time: number) => {
            lenis.raf(time * 1000); // GSAP's ticker time is in seconds, Lenis expects milliseconds
        };

        gsap.ticker.add(updateTicker);
        gsap.ticker.lagSmoothing(0); // Ensures ScrollTrigger doesn't lag/jump on frame drops

        // Clean up on unmount
        return () => {
            lenis.destroy();
            gsap.ticker.remove(updateTicker);
        };
    }, []);

    return <>{children}</>;
}
