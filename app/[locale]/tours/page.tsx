"use client";

import { useState, Suspense } from "react";
import Image from "next/image";
import { Clock, Filter, Search, ArrowRight } from "lucide-react";
import { generateTourWhatsAppMessage, generateWhatsAppURL } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { IMAGES } from "@/config/images";
import { Link } from "@/i18n/navigation";

const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg 
        viewBox="0 0 24 24" 
        className={className} 
        fill="currentColor" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.006c6.548 0 11.884-5.335 11.887-11.892a11.864 11.864 0 00-3.481-8.413z" />
    </svg>
);

function ToursList() {
    const t = useTranslations("Tours");
    const [selectedType, setSelectedType] = useState<string>("all");
    const [selectedDuration, setSelectedDuration] = useState<string>("all");

    const searchParams = useSearchParams();
    const searchQuery = searchParams.get("q")?.toLowerCase() || "";
    const tourParam = searchParams.get("tour");

    const tours = [
        {
            id: 1,
            title: "Cultural Triangle Explorer",
            description: "Ancient wonders of Sigiriya, Dambulla, and Polonnaruwa. UNESCO World Heritage sites and the iconic Lion Rock.",
            image: IMAGES.tours.sigiriya,
            duration: "3 Days",
            type: "culture",
        },
        {
            id: 2,
            title: "Hill Country Tea Trail",
            description: "Misty mountains, lush tea plantations, and the famous scenic train ride from Kandy to Ella.",
            image: IMAGES.tours.ella,
            duration: "4 Days",
            type: "culture",
        },
        {
            id: 3,
            title: "Wildlife Safari Adventure",
            description: "Thrilling safaris in Yala National Park. Spot leopards, elephants, and sloth bears in the wild.",
            image: IMAGES.tours.yala,
            duration: "2 Days",
            type: "safari",
        },
        {
            id: 4,
            title: "Coastal Paradise",
            description: "Historic Galle Fort, pristine beaches in Mirissa, and whale watching in the deep blue.",
            image: IMAGES.tours.galle,
            duration: "3 Days",
            type: "beach",
        },
        {
            id: 5,
            title: "Hiking & Adventure",
            description: "Trek through Knuckles Mountain Range and explore the breathtaking Horton Plains.",
            image: IMAGES.tours.hiking,
            duration: "5 Days",
            type: "hiking",
        },
        {
            id: 6,
            title: "Surf & Beach Escape",
            description: "Surf the waves of Arugam Bay and Weligama, and enjoy fresh seafood at sunset.",
            image: IMAGES.tours.surf,
            duration: "4 Days",
            type: "beach",
        },
    ];

    const handleRequestTour = (tour: typeof tours[0]) => {
        const message = generateTourWhatsAppMessage(tour.title, tour.duration);
        window.open(generateWhatsAppURL("+94715567211", message), "_blank");
    };

    // If single tour query param is provided, show that tour details ONLY, without filter option
    const singleTour = tourParam ? tours.find((tour) => tour.id === parseInt(tourParam)) : null;

    if (singleTour) {
        return (
            <main className="pt-28 md:pt-40 pb-20 md:pb-32 px-4 sm:px-10 lg:px-20 min-h-screen bg-black">
                {/* Background Glows */}
                <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-primary/10 blur-[150px] -z-10 opacity-30 pointer-events-none" />
                
                <div className="max-w-4xl mx-auto space-y-10">
                    {/* Back Button */}
                    <Link
                        href="/tours"
                        className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
                    >
                        <ArrowRight className="w-4 h-4 rotate-180" />
                        {t("backToAll", { fallback: "Back to All Tours" })}
                    </Link>

                    {/* Single Tour Card Layout */}
                    <div className="rounded-[2.5rem] overflow-hidden bg-neutral-900 border border-white/10 p-6 md:p-10 space-y-8 shadow-2xl">
                        <div className="relative h-64 sm:h-96 w-full rounded-[2rem] overflow-hidden">
                            <Image
                                src={singleTour.image}
                                alt={singleTour.title}
                                fill
                                className="object-cover animate-fade-in"
                                sizes="(max-width: 1024px) 100vw, 1000px"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                            <div className="absolute top-6 left-6">
                                <span className="bg-black/50 backdrop-blur-md text-xs text-white font-bold px-4 py-2 rounded-full border border-white/10 tracking-widest uppercase">
                                    {singleTour.type}
                                </span>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex flex-wrap items-center gap-4 text-primary font-bold text-xs uppercase tracking-widest">
                                <span className="flex items-center gap-1.5">
                                    <Clock size={14} strokeWidth={3} />
                                    {singleTour.duration}
                                </span>
                            </div>

                            <h1 className="text-3xl sm:text-5xl font-black text-white leading-none tracking-tighter uppercase font-heading">
                                {singleTour.title}
                            </h1>

                            <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                                {singleTour.description}
                            </p>

                            <button
                                onClick={() => handleRequestTour(singleTour)}
                                className="w-full sm:w-auto px-8 py-5 flex items-center justify-center gap-3 bg-white hover:bg-primary text-black rounded-2xl font-bold text-sm uppercase tracking-widest transition-all duration-500 shadow-lg"
                            >
                                <WhatsAppIcon className="w-5 h-5 text-[#25D366] transition-colors" />
                                {t("request")}
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    const filteredTours = tours.filter((tour) => {
        if (searchQuery) {
            const matchesSearch =
                tour.title.toLowerCase().includes(searchQuery) ||
                tour.description.toLowerCase().includes(searchQuery);
            if (!matchesSearch) return false;
        }

        if (selectedType !== "all" && tour.type !== selectedType) return false;
        if (selectedDuration !== "all") {
            const days = parseInt(tour.duration);
            if (selectedDuration === "short" && days > 3) return false;
            if (selectedDuration === "medium" && (days < 4 || days > 6)) return false;
            if (selectedDuration === "long" && days < 7) return false;
        }
        return true;
    });

    return (
        <main className="pt-28 md:pt-40 pb-20 md:pb-32 px-4 sm:px-10 lg:px-20 min-h-screen bg-black">
            {/* Background Glows */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-primary/10 blur-[150px] -z-10 opacity-30 pointer-events-none" />
            
            <div className="max-w-7xl mx-auto space-y-16">
                
                {/* Header */}
                <div className="space-y-6 max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase block">
                            {t("subtitle", { fallback: "Curated Experiences" })}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter uppercase font-heading">
                            {t("titlePrefix")} <span className="text-white/40 italic font-serif normal-case tracking-normal">{t("titleSuffix")}</span>
                        </h1>
                    </motion.div>
                </div>

                {/* Filter Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="p-8 pb-10 rounded-[2.5rem] glass-card border border-white/10 bg-white/[0.02] space-y-8"
                >
                    <div className="flex items-center gap-3 text-white font-bold text-xs uppercase tracking-widest">
                        <Filter size={14} className="text-primary" />
                        {t("filters.title", { fallback: "Filter By" })}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Type Filter */}
                        <div className="space-y-3">
                            <label className="block text-[10px] font-bold text-white/40 uppercase tracking-widest px-1">
                                {t("filters.type")}
                            </label>
                            <div className="relative">
                                <select
                                    value={selectedType}
                                    onChange={(e) => setSelectedType(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white appearance-none focus:outline-none focus:border-primary/40 transition-all text-sm font-medium"
                                >
                                    <option value="all" className="bg-[#0c141c] text-white">{t("filters.allTypes")}</option>
                                    <option value="culture" className="bg-[#0c141c] text-white">{t("filters.culture")}</option>
                                    <option value="beach" className="bg-[#0c141c] text-white">{t("filters.beach")}</option>
                                    <option value="safari" className="bg-[#0c141c] text-white">{t("filters.safari")}</option>
                                    <option value="hiking" className="bg-[#0c141c] text-white">{t("filters.hiking")}</option>
                                </select>
                                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
                                    <ArrowRight size={14} className="rotate-90" />
                                </div>
                            </div>
                        </div>

                        {/* Duration Filter */}
                        <div className="space-y-3">
                            <label className="block text-[10px] font-bold text-white/40 uppercase tracking-widest px-1">
                                {t("filters.duration")}
                            </label>
                            <div className="relative">
                                <select
                                    value={selectedDuration}
                                    onChange={(e) => setSelectedDuration(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white appearance-none focus:outline-none focus:border-primary/40 transition-all text-sm font-medium"
                                >
                                    <option value="all" className="bg-[#0c141c] text-white">{t("filters.allDurations")}</option>
                                    <option value="short" className="bg-[#0c141c] text-white">{t("filters.short")}</option>
                                    <option value="medium" className="bg-[#0c141c] text-white">{t("filters.medium")}</option>
                                    <option value="long" className="bg-[#0c141c] text-white">{t("filters.long")}</option>
                                </select>
                                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
                                    <ArrowRight size={14} className="rotate-90" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Tours Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredTours.map((tour, idx) => (
                            <motion.div
                                layout
                                key={tour.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                                className="group relative rounded-[2.5rem] overflow-hidden bg-neutral-900 border border-white/5 hover:border-primary/20 transition-all duration-700 h-full flex flex-col"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={tour.image}
                                        alt={tour.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
                                    
                                    <div className="absolute top-6 left-6 flex gap-2">
                                        <span className="bg-black/50 backdrop-blur-md text-[10px] text-white font-bold px-3 py-1 rounded-full border border-white/10 tracking-widest uppercase">
                                            {tour.type}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 pt-6 space-y-6 flex-1 flex flex-col justify-between">
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest">
                                                <Clock size={12} strokeWidth={3} />
                                                {tour.duration}
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white tracking-tight leading-tight group-hover:text-primary transition-colors">
                                            {tour.title}
                                        </h3>
                                        <p className="text-white/50 text-sm leading-relaxed line-clamp-2">
                                            {tour.description}
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => handleRequestTour(tour)}
                                        className="w-full flex items-center justify-center gap-3 bg-white hover:bg-primary text-black py-4 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all duration-500"
                                    >
                                        <WhatsAppIcon className="w-4 h-4 text-[#25D366] transition-colors" />
                                        {t("request")}
                                    </button>
                                </div>

                                {/* Hover Border Glow */}
                                <div className="absolute inset-0 rounded-[2.5rem] border-2 border-primary/0 group-hover:border-primary/30 transition-all duration-500 pointer-events-none" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredTours.length === 0 && (
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }}
                        className="text-center py-32 space-y-4"
                    >
                        <Search size={48} className="mx-auto text-white/10" />
                        <p className="text-white/40 font-medium italic">
                            {t("noTours")}
                        </p>
                    </motion.div>
                )}
            </div>
        </main>
    );
}

export default function ToursPage() {
    return (
        <Suspense fallback={
            <main className="pt-40 pb-32 px-6 sm:px-10 lg:px-20 min-h-screen bg-black flex items-center justify-center">
                <div className="text-white/40 animate-pulse text-xs uppercase tracking-[0.3em] font-bold">
                    Loading Tours...
                </div>
            </main>
        }>
            <ToursList />
        </Suspense>
    );
}
