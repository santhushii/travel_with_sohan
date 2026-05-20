"use client";

import { useState, useEffect } from "react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Menu, X, Search, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { generateWhatsAppURL } from "@/lib/utils";
import LocaleSwitcher from "@/components/ui/LocaleSwitcher";

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg 
        viewBox="0 0 24 24" 
        className={className} 
        fill="currentColor" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.006c6.548 0 11.884-5.335 11.887-11.892a11.864 11.864 0 00-3.481-8.413z" />
    </svg>
);

import Image from "next/image";

const LogoIcon = ({ className = "w-14 h-14" }: { className?: string }) => (
    <svg
        className={cn("shrink-0 transition-all duration-500 hover:scale-110", className)}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Glow Filters */}
        <defs>
            <filter id="wowGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
            
            <linearGradient id="ringGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#22E6C5" />
                <stop offset="50%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#00E5FF" />
            </linearGradient>
            
            <linearGradient id="sunGrad" x1="30" y1="30" x2="70" y2="70" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFF9E6" />
                <stop offset="40%" stopColor="#FFB300" />
                <stop offset="100%" stopColor="#FF6D00" />
            </linearGradient>

            <linearGradient id="palmGrad" x1="45" y1="75" x2="55" y2="35" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0F2027" />
                <stop offset="50%" stopColor="#203A43" />
                <stop offset="100%" stopColor="#2c5364" />
            </linearGradient>

            <linearGradient id="leafGrad" x1="30" y1="30" x2="70" y2="70" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#22E6C5" />
                <stop offset="100%" stopColor="#00B0FF" />
            </linearGradient>

            <linearGradient id="waveGrad1" x1="0" y1="70" x2="100" y2="70" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0F172A" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#1E293B" />
                <stop offset="100%" stopColor="#00B0FF" stopOpacity="0.8" />
            </linearGradient>

            <linearGradient id="waveGrad2" x1="0" y1="80" x2="100" y2="80" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#22E6C5" />
                <stop offset="100%" stopColor="#00E5FF" />
            </linearGradient>

            <linearGradient id="planeTrail" x1="15" y1="65" x2="85" y2="15" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#22E6C5" stopOpacity="0" />
                <stop offset="50%" stopColor="#FFD700" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
            </linearGradient>
        </defs>

        {/* Inner Space Shadow Ring */}
        <circle cx="50" cy="50" r="45" fill="#030712" stroke="url(#ringGrad)" strokeWidth="2.5" filter="url(#wowGlow)" className="opacity-90" />
        <circle cx="50" cy="50" r="41" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />

        {/* Golden Sun */}
        <circle cx="50" cy="45" r="18" fill="url(#sunGrad)" filter="url(#wowGlow)" className="opacity-95" />

        {/* Compass Cardinal Points */}
        <polygon points="50,6 52,12 48,12" fill="#FFD700" />
        <polygon points="50,94 52,88 48,88" fill="#22E6C5" />
        <polygon points="6,50 12,52 12,48" fill="#22E6C5" />
        <polygon points="94,50 88,52 88,48" fill="#22E6C5" />

        {/* Palm Tree Trunk */}
        <path d="M47 78 C47.5 65, 51.5 54, 55.5 44 C53.5 56, 50.5 68, 49 78 Z" fill="url(#palmGrad)" />

        {/* Palm Leaves */}
        <path d="M55.5 44 C49.5 42, 41.5 45, 35 51 C42 48, 50 46.5, 55.5 44 Z" fill="url(#leafGrad)" />
        <path d="M55.5 44 C50.5 38.5, 43 36.5, 37.5 39.5 C44 40.5, 51.5 42.5, 55.5 44 Z" fill="#22E6C5" />
        <path d="M55.5 44 C54.5 35, 51 29, 48.5 25.5 C50.5 31.5, 52.5 38.5, 55.5 44 Z" fill="#22E6C5" />
        <path d="M55.5 44 C60.5 38.5, 68 36.5, 73.5 39.5 C67 40.5, 59.5 42.5, 55.5 44 Z" fill="#22E6C5" />
        <path d="M55.5 44 C61.5 42, 69.5 45, 76 51 C69 48, 61 46.5, 55.5 44 Z" fill="url(#leafGrad)" />

        {/* Ocean Waves */}
        <path d="M10 74 C25 68, 40 80, 55 74 C70 68, 80 78, 90 74 L90 90 L10 90 Z" fill="url(#waveGrad1)" />
        <path d="M10 77 C25 73, 40 83, 55 77 C70 71, 80 81, 90 77" stroke="url(#waveGrad2)" strokeWidth="2" strokeLinecap="round" />

        {/* Glowing Jet Plane & Flight Trail */}
        <path d="M15 65 C32 50, 60 25, 82 15" stroke="url(#planeTrail)" strokeWidth="3" strokeLinecap="round" filter="url(#wowGlow)" />
        <path d="M80 12 L87 15 L84 22 L80 19 L72 24 L70 20 L77 17 L74 12 Z" fill="#FFFFFF" filter="url(#wowGlow)" className="animate-pulse" />
    </svg>
);


export default function Navbar() {
    const t = useTranslations("Navbar");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const navLinks = [
        { name: t("home"), href: "/" },
        { name: t("about"), href: "/about" },
        { name: t("tours"), href: "/tours" },
        { name: t("gallery"), href: "/gallery" },
        { name: t("reviews"), href: "/#reviews" },
        { name: t("contact"), href: "/contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                isScrolled
                    ? "glass-navbar-scroll border-b border-white/10 shadow-lg"
                    : "glass-navbar"
            )}
            style={{ height: "72px" }}
        >
            <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-full gap-4">
                    {/* Logo - Transparent, Simple & Big */}
                    <Link 
                        href="/" 
                        className="flex items-center gap-3 group shrink-0 relative z-50 transition-all duration-300"
                    >
                        <div className="transform transition-transform duration-500 group-hover:scale-105">
                            <LogoIcon className="w-12 h-12 sm:w-14 sm:h-14" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl sm:text-2xl font-black tracking-tight font-heading leading-tight uppercase">
                                <span className="text-primary">Travel</span>
                                <br />
                                <span className="text-white -mt-0.5 block">With Sohan</span>
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation - Centered in flow */}
                    <div className={cn(
                        "hidden lg:flex items-center gap-5 transition-all duration-300 mx-auto",
                        isSearchOpen ? "opacity-0 pointer-events-none w-0 overflow-hidden" : "opacity-100"
                    )}>
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "relative group text-sm font-medium tracking-wider transition-colors duration-300",
                                        isActive ? "text-white" : "text-white/80 hover:text-white"
                                    )}
                                >
                                    {link.name}
                                    <span className={cn(
                                        "absolute -bottom-1 left-0 w-full h-[2px] bg-primary transform transition-transform duration-300 origin-left",
                                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                    )} />
                                </Link>
                            );
                        })}
                    </div>

                    {/* Right Side: Chat Button + Language + Search */}
                    <div className="hidden md:flex items-center gap-3 shrink-0">
                        {/* Language Switcher (Commented out for English-only site)
                        <LocaleSwitcher />
                        */}

                        {/* Search Bar Implementation */}
                        <div className="relative flex items-center">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const form = e.target as HTMLFormElement;
                                    const input = form.elements.namedItem("search") as HTMLInputElement;
                                    if (input.value.trim()) {
                                        router.push(`/tours?q=${encodeURIComponent(input.value.trim())}`);
                                    }
                                    setIsSearchOpen(false);
                                }}
                                className={cn(
                                    "flex items-center overflow-hidden transition-all duration-300 ease-in-out",
                                    isSearchOpen ? "w-64 opacity-100" : "w-0 opacity-0"
                                )}
                            >
                                <input
                                    name="search"
                                    type="text"
                                    placeholder="Search tours..."
                                    className="w-full bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-primary/50"
                                    autoFocus={isSearchOpen}
                                    onBlur={() => !isSearchOpen && setIsSearchOpen(false)}
                                />
                            </form>
                            <button
                                onClick={() => setIsSearchOpen(!isSearchOpen)}
                                className={cn(
                                    "text-text-secondary hover:text-primary transition-colors duration-300 p-2",
                                    isSearchOpen && "text-primary"
                                )}
                                aria-label="Search"
                            >
                                {isSearchOpen ? <X size={20} /> : <Search size={20} />}
                            </button>
                        </div>

                        <button
                            onClick={() => window.open(generateWhatsAppURL(), "_blank")}
                            className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full transition-all duration-300 font-medium text-sm"
                            aria-label="Chat on WhatsApp"
                        >
                            <WhatsAppIcon className="w-[18px] h-[18px]" />
                            <span>{t("chat")}</span>
                        </button>
                    </div>

                    {/* Mobile Controls */}
                    <div className="flex items-center gap-2 lg:hidden">
                        <button
                            onClick={() => window.open(generateWhatsAppURL(), "_blank")}
                            className="bg-primary/20 hover:bg-primary/30 p-2.5 rounded-full transition-all duration-300"
                            aria-label="Chat on WhatsApp"
                        >
                            <WhatsAppIcon className="w-[22px] h-[22px]" />
                        </button>
                        
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-white p-2"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Menu */}
            <div
                className={cn(
                    "fixed top-0 left-0 h-full w-80 max-w-[85vw] glass-navbar z-50 lg:hidden transform transition-transform duration-300 ease-in-out overflow-y-auto",
                    isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="p-6">
                    {/* Mobile Menu Header */}
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-2 text-xl font-bold font-heading uppercase">
                            <LogoIcon className="w-10 h-10" />
                            <div>
                                <span className="text-primary">Travel</span>
                                <span className="text-white"> With Sohan</span>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                            aria-label="Close menu"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Mobile Menu Links */}
                    <div className="space-y-2 pb-12">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                        "block font-medium py-3 px-4 rounded-lg transition-all duration-300",
                                        isActive
                                            ? "text-primary bg-white/10 border border-primary/30"
                                            : "text-text-secondary hover:text-primary hover:bg-white/10 border border-transparent hover:border-primary/30"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}

                        {/* Mobile Language Selector (Commented out for English-only site)
                        <div className="pt-6 border-t border-white/10 mt-6 space-y-3">
                            <p className="text-[10px] font-black text-primary tracking-[0.2em] uppercase px-4">Language / Idioma</p>
                            <div className="px-4">
                                <LocaleSwitcher />
                            </div>
                        </div>
                        */}

                        <button
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                window.open(generateWhatsAppURL(), "_blank");
                            }}
                            className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-3 rounded-lg transition-all duration-300 font-medium mt-6"
                        >
                            <WhatsAppIcon className="w-[18px] h-[18px]" />
                            <span>Chat on WhatsApp</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
