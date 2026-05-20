"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { blurDataURL, IMAGE_QUALITY_DEFAULT, IMAGE_QUALITY_HIGH } from "@/lib/image-utils";

const galleryImages = [
    {
        id: 1,
        url: "/images/Meomories/1.jpeg",
        category: "culture",
        title: "Sigiriya Ancient Rock Fortress",
    },
    {
        id: 2,
        url: "/images/Meomories/2.jpeg",
        category: "nature",
        title: "Nine Arch Bridge, Ella",
    },
    {
        id: 3,
        url: "/images/Meomories/3.jpeg",
        category: "wildlife",
        title: "Majestic Elephant in Yala National Park",
    },
    {
        id: 4,
        url: "/images/Meomories/4.jpeg",
        category: "beach",
        title: "Historic Galle Fort & Coast",
    },
    {
        id: 5,
        url: "/images/Meomories/5.jpeg",
        category: "culture",
        title: "Dambulla Golden Temple Caves",
    },
    {
        id: 6,
        url: "/images/Meomories/6.jpeg",
        category: "nature",
        title: "Famous Train Ride through Hill Country",
    },
    {
        id: 7,
        url: "/images/Meomories/7.jpeg",
        category: "beach",
        title: "Serene Beaches of Mirissa",
    },
    {
        id: 8,
        url: "/images/Meomories/8.jpeg",
        category: "wildlife",
        title: "Leopard Spotting in Yala Safari",
    },
    {
        id: 9,
        url: "/images/Meomories/9.jpeg",
        category: "nature",
        title: "Lush Tea Gardens of Nuwara Eliya",
    },
    {
        id: 10,
        url: "/images/Meomories/10.jpeg",
        category: "culture",
        title: "Historical Temple of Sacred Tooth",
    },
];

export default function GalleryPage() {
    const [lightboxImage, setLightboxImage] = useState<number | null>(null);

    const handlePrevious = () => {
        if (lightboxImage !== null) {
            const currentIndex = galleryImages.findIndex((img) => img.id === lightboxImage);
            const prevIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
            setLightboxImage(galleryImages[prevIndex].id);
        }
    };

    const handleNext = () => {
        if (lightboxImage !== null) {
            const currentIndex = galleryImages.findIndex((img) => img.id === lightboxImage);
            const nextIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
            setLightboxImage(galleryImages[nextIndex].id);
        }
    };

    return (
        <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl sm:text-6xl font-heading font-bold text-white mb-4">
                        Photo <span className="text-teal-400">Gallery</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Moments captured from unforgettable journeys across Sri Lanka
                    </p>
                </div>

                {/* Masonry Grid */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {galleryImages.map((image) => (
                        <div
                            key={image.id}
                            className="break-inside-avoid cursor-pointer group"
                            onClick={() => setLightboxImage(image.id)}
                        >
                            <div className="relative overflow-hidden rounded-xl border border-white/5 group-hover:border-primary/30 transition-colors duration-300">
                                <Image
                                    src={image.url}
                                    alt={image.title}
                                    width={600}
                                    height={800}
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    quality={IMAGE_QUALITY_DEFAULT}
                                    placeholder="blur"
                                    blurDataURL={blurDataURL(600, 800)}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {lightboxImage !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    onClick={() => setLightboxImage(null)}
                >
                    <button
                        onClick={() => setLightboxImage(null)}
                        className="absolute top-4 right-4 text-white hover:text-teal-400 transition-colors"
                        aria-label="Close lightbox"
                    >
                        <X size={32} />
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handlePrevious();
                        }}
                        className="absolute left-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleNext();
                        }}
                        className="absolute right-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                        aria-label="Next image"
                    >
                        <ChevronRight size={24} />
                    </button>

                    <Image
                        src={galleryImages.find((img) => img.id === lightboxImage)?.url || ""}
                        alt={galleryImages.find((img) => img.id === lightboxImage)?.title || "Sri Lanka Tour Memory"}
                        width={1200}
                        height={800}
                        className="max-w-full max-h-full object-contain"
                        onClick={(e) => e.stopPropagation()}
                        quality={IMAGE_QUALITY_HIGH}
                    />
                </div>
            )}
        </main>
    );
}
