"use client";

import { useRef } from "react";
import SriLankaData from "@svg-maps/sri-lanka";
import { cn } from "@/lib/utils";

interface SriLankaMapProps {
    activeIndex?: number;
}

const REGION_DISTRICTS: Record<number, string[]> = {
    0: ["anuradhapura", "polonnaruwa", "matale", "kandy"], // Cultural Triangle
    1: ["nuwara-eliya", "kandy", "badulla", "kegalle"],   // Hill Country
    2: ["hambantota", "moneragala", "ampara", "polonnaruwa"], // Safari & Wildlife
    3: ["galle", "matara", "kalutara", "hambantota"],       // South Coast Beaches
    4: ["colombo", "gampaha", "kurunegala", "ratnapura"]     // Food & Village Life
};

export default function SriLankaMap({ activeIndex = 0 }: SriLankaMapProps) {
    const mapRef = useRef<SVGSVGElement>(null);

    return (
        <svg
            ref={mapRef}
            viewBox={SriLankaData.viewBox}
            className="hero-map w-full h-full will-change-transform drop-shadow-[0_0_15px_rgba(34,230,197,0.15)]"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="mapGradientDefault" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(34, 230, 197, 0.15)" />
                    <stop offset="100%" stopColor="rgba(34, 230, 197, 0.05)" />
                </linearGradient>
                <linearGradient id="mapGradientHover" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22E6C5" />
                    <stop offset="100%" stopColor="#3BB2E3" />
                </linearGradient>
            </defs>

            {/* Render all districts with a base fill so the map is "fully coloured/visible" */}
            <g stroke="#22E6C5" strokeWidth="0.5" strokeLinejoin="round">
                {SriLankaData.locations.map((location: any) => {
                    const isActive = REGION_DISTRICTS[activeIndex]?.includes(location.id);
                    return (
                        <path
                            key={location.id}
                            id={location.id}
                            name={location.name}
                            d={location.path}
                            className={cn(
                                "hero-map-path transition-all duration-700 ease-in-out cursor-pointer",
                                isActive 
                                    ? "fill-[url(#mapGradientHover)] stroke-[#22E6C5] stroke-[1.2] opacity-100 filter drop-shadow-[0_0_12px_rgba(34,230,197,0.7)]" 
                                    : "fill-[url(#mapGradientDefault)] stroke-[#22E6C5] stroke-[0.3] opacity-75 hover:opacity-100 hover:fill-[url(#mapGradientHover)] hover:stroke-[1]"
                            )}
                        />
                    );
                })}
            </g>
        </svg>
    );
}
