"use client";

import { useState } from "react";
import Image from "next/image";
import GlassCard from "@/components/ui/GlassCard";
import { Calendar, Clock, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { blurDataURL, IMAGE_QUALITY_DEFAULT } from "@/lib/image-utils";

const destinations = [
    {
        id: 1,
        name: "Ella",
        region: "Hill Country",
        image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800",
        story: "A charming hill station surrounded by tea plantations, waterfalls, and stunning viewpoints. Famous for Nine Arch Bridge and Little Adam's Peak.",
        bestSeason: "January - March",
        recommendedDays: "2-3 days",
        highlights: ["Nine Arch Bridge", "Little Adam's Peak", "Ravana Falls"],
    },
    {
        id: 2,
        name: "Sigiriya",
        region: "Cultural Triangle",
        image: "https://images.unsplash.com/photo-1588417865884-b2c1c8e9d5c5?q=80&w=800",
        story: "The iconic Lion Rock fortress, a UNESCO World Heritage site rising 200m above the jungle. Ancient frescoes and stunning panoramic views await.",
        bestSeason: "Year-round",
        recommendedDays: "1-2 days",
        highlights: ["Lion Rock Fortress", "Ancient Frescoes", "Water Gardens"],
    },
    {
        id: 3,
        name: "Kandy",
        region: "Central Province",
        image: "https://images.unsplash.com/photo-1604935310878-9b61e0b44c1e?q=80&w=800",
        story: "The last capital of ancient Sri Lankan kings, home to the sacred Temple of the Tooth Relic. A cultural hub with traditional dance and ceremonies.",
        bestSeason: "December - April",
        recommendedDays: "2 days",
        highlights: ["Temple of the Tooth", "Kandy Lake", "Cultural Shows"],
    },
    {
        id: 4,
        name: "Galle",
        region: "Southern Coast",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800",
        story: "A beautifully preserved colonial fort city with Dutch architecture, boutique shops, and ocean views. Perfect blend of history and coastal charm.",
        bestSeason: "November - April",
        recommendedDays: "1-2 days",
        highlights: ["Galle Fort", "Dutch Architecture", "Lighthouse"],
    },
    {
        id: 5,
        name: "Yala",
        region: "Southern Province",
        image: "https://images.unsplash.com/photo-1534567110243-e2c6ecf0d4c8?q=80&w=800",
        story: "Sri Lanka's most famous national park, home to the highest density of leopards in the world. Also spot elephants, sloth bears, and exotic birds.",
        bestSeason: "February - July",
        recommendedDays: "1-2 days",
        highlights: ["Leopard Safari", "Elephant Herds", "Bird Watching"],
    },
    {
        id: 6,
        name: "Mirissa",
        region: "Southern Coast",
        image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=800",
        story: "A tranquil beach paradise famous for whale watching, surfing, and stunning sunsets. Pristine golden sands and crystal-clear waters.",
        bestSeason: "November - April",
        recommendedDays: "2-3 days",
        highlights: ["Whale Watching", "Beach Relaxation", "Surfing"],
    },
    {
        id: 7,
        name: "Nuwara Eliya",
        region: "Hill Country",
        image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?q=80&w=800",
        story: "Known as 'Little England', this cool climate town is surrounded by tea estates, colonial bungalows, and beautiful gardens.",
        bestSeason: "April - September",
        recommendedDays: "2 days",
        highlights: ["Tea Plantations", "Gregory Lake", "Victoria Park"],
    },
    {
        id: 8,
        name: "Arugam Bay",
        region: "Eastern Coast",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800",
        story: "A world-renowned surf destination with laid-back vibes, pristine beaches, and incredible waves. Perfect for surfers and beach lovers.",
        bestSeason: "May - September",
        recommendedDays: "3-4 days",
        highlights: ["World-Class Surfing", "Beach Vibes", "Elephant Rock"],
    },
];

export default function DestinationsPage() {
    const [selectedDestination, setSelectedDestination] = useState<number | null>(null);

    return (
        <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl sm:text-6xl font-heading font-bold text-white mb-4">
                        Explore <span className="text-teal-400">Destinations</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Discover the diverse beauty and rich culture of Sri Lanka
                    </p>
                </div>

                {/* Destinations Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {destinations.map((destination) => (
                        <GlassCard
                            key={destination.id}
                            hover
                            className={cn(
                                "group overflow-hidden p-0 cursor-pointer transition-all duration-300",
                                selectedDestination === destination.id && "ring-2 ring-teal-400 scale-105"
                            )}
                            onClick={() => setSelectedDestination(
                                selectedDestination === destination.id ? null : destination.id
                            )}
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={destination.image}
                                    alt={destination.name}
                                    width={500}
                                    height={400}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    loading="lazy"
                                    quality={IMAGE_QUALITY_DEFAULT}
                                    placeholder="blur"
                                    blurDataURL={blurDataURL(500, 400)}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="text-2xl font-heading font-bold text-white mb-1">
                                        {destination.name}
                                    </h3>
                                    <p className="text-teal-400 text-sm flex items-center">
                                        <MapPin size={14} className="mr-1" />
                                        {destination.region}
                                    </p>
                                </div>
                            </div>

                            {/* Expanded Details */}
                            <div
                                className={cn(
                                    "overflow-hidden transition-all duration-300",
                                    selectedDestination === destination.id ? "max-h-96" : "max-h-0"
                                )}
                            >
                                <div className="p-6 space-y-4">
                                    <p className="text-gray-300 text-sm">{destination.story}</p>

                                    <div className="space-y-2">
                                        <div className="flex items-center text-sm">
                                            <Calendar size={16} className="text-teal-400 mr-2" />
                                            <span className="text-gray-400">Best: {destination.bestSeason}</span>
                                        </div>
                                        <div className="flex items-center text-sm">
                                            <Clock size={16} className="text-teal-400 mr-2" />
                                            <span className="text-gray-400">{destination.recommendedDays}</span>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-semibold text-white mb-2">Highlights:</h4>
                                        <ul className="space-y-1">
                                            {destination.highlights.map((highlight, index) => (
                                                <li key={index} className="text-sm text-gray-400 flex items-center">
                                                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2" />
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </main>
    );
}
