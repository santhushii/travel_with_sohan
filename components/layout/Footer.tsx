import { Link } from "@/i18n/navigation";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

import Image from "next/image";

const LogoIcon = () => (
    <svg
        className="w-10 h-10 shrink-0 transition-all duration-500 hover:scale-110"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Glow Filters */}
        <defs>
            <filter id="wowGlowFooter" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
            
            <linearGradient id="ringGradFooter" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#22E6C5" />
                <stop offset="50%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#00E5FF" />
            </linearGradient>
            
            <linearGradient id="sunGradFooter" x1="30" y1="30" x2="70" y2="70" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFF9E6" />
                <stop offset="40%" stopColor="#FFB300" />
                <stop offset="100%" stopColor="#FF6D00" />
            </linearGradient>

            <linearGradient id="palmGradFooter" x1="45" y1="75" x2="55" y2="35" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0F2027" />
                <stop offset="50%" stopColor="#203A43" />
                <stop offset="100%" stopColor="#2c5364" />
            </linearGradient>

            <linearGradient id="leafGradFooter" x1="30" y1="30" x2="70" y2="70" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#22E6C5" />
                <stop offset="100%" stopColor="#00B0FF" />
            </linearGradient>

            <linearGradient id="waveGrad1Footer" x1="0" y1="70" x2="100" y2="70" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0F172A" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#1E293B" />
                <stop offset="100%" stopColor="#00B0FF" stopOpacity="0.8" />
            </linearGradient>

            <linearGradient id="waveGrad2Footer" x1="0" y1="80" x2="100" y2="80" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#22E6C5" />
                <stop offset="100%" stopColor="#00E5FF" />
            </linearGradient>

            <linearGradient id="planeTrailFooter" x1="15" y1="65" x2="85" y2="15" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#22E6C5" stopOpacity="0" />
                <stop offset="50%" stopColor="#FFD700" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
            </linearGradient>
        </defs>

        {/* Inner Space Shadow Ring */}
        <circle cx="50" cy="50" r="45" fill="#030712" stroke="url(#ringGradFooter)" strokeWidth="2.5" filter="url(#wowGlowFooter)" className="opacity-90" />
        <circle cx="50" cy="50" r="41" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />

        {/* Golden Sun */}
        <circle cx="50" cy="45" r="18" fill="url(#sunGradFooter)" filter="url(#wowGlowFooter)" className="opacity-95" />

        {/* Compass Cardinal Points */}
        <polygon points="50,6 52,12 48,12" fill="#FFD700" />
        <polygon points="50,94 52,88 48,88" fill="#22E6C5" />
        <polygon points="6,50 12,52 12,48" fill="#22E6C5" />
        <polygon points="94,50 88,52 88,48" fill="#22E6C5" />

        {/* Palm Tree Trunk */}
        <path d="M47 78 C47.5 65, 51.5 54, 55.5 44 C53.5 56, 50.5 68, 49 78 Z" fill="url(#palmGradFooter)" />

        {/* Palm Leaves */}
        <path d="M55.5 44 C49.5 42, 41.5 45, 35 51 C42 48, 50 46.5, 55.5 44 Z" fill="url(#leafGradFooter)" />
        <path d="M55.5 44 C50.5 38.5, 43 36.5, 37.5 39.5 C44 40.5, 51.5 42.5, 55.5 44 Z" fill="#22E6C5" />
        <path d="M55.5 44 C54.5 35, 51 29, 48.5 25.5 C50.5 31.5, 52.5 38.5, 55.5 44 Z" fill="#22E6C5" />
        <path d="M55.5 44 C60.5 38.5, 68 36.5, 73.5 39.5 C67 40.5, 59.5 42.5, 55.5 44 Z" fill="#22E6C5" />
        <path d="M55.5 44 C61.5 42, 69.5 45, 76 51 C69 48, 61 46.5, 55.5 44 Z" fill="url(#leafGradFooter)" />

        {/* Ocean Waves */}
        <path d="M10 74 C25 68, 40 80, 55 74 C70 68, 80 78, 90 74 L90 90 L10 90 Z" fill="url(#waveGrad1Footer)" />
        <path d="M10 77 C25 73, 40 83, 55 77 C70 71, 80 81, 90 77" stroke="url(#waveGrad2Footer)" strokeWidth="2" strokeLinecap="round" />

        {/* Glowing Jet Plane & Flight Trail */}
        <path d="M15 65 C32 50, 60 25, 82 15" stroke="url(#planeTrailFooter)" strokeWidth="3" strokeLinecap="round" filter="url(#wowGlowFooter)" />
        <path d="M80 12 L87 15 L84 22 L80 19 L72 24 L70 20 L77 17 L74 12 Z" fill="#FFFFFF" filter="url(#wowGlowFooter)" className="animate-pulse" />
    </svg>
);


const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/share/1Ae5ayxpNh/?mibextid=wwXIfr" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/travel_with_sohan?igsh=MWF1Y3ZraTgzcnp1NQ==" },
    { name: "TripAdvisor", icon: null, href: "https://www.tripadvisor.com/Attraction_Review-g293962-d17652201-Reviews-Travel_with_Sohan-Colombo_Western_Province.html" },
    // { name: "Email", icon: Mail, href: "mailto:sohan@example.com" },
];

export default function Footer() {
    const t = useTranslations("Footer");
    const tNav = useTranslations("Navbar");

    const quickLinks = [
        { name: tNav("home"), href: "/" },
        { name: tNav("tours"), href: "/tours" },
        { name: tNav("destinations"), href: "/destinations" },
        { name: tNav("gallery"), href: "/gallery" },
        { name: tNav("about"), href: "/about" },
        { name: tNav("contact"), href: "/contact" },
    ];

    return (
        <footer className="w-full bg-gradient-to-t from-gray-950 to-black relative overflow-hidden">
            {/* Top decorative line */}
            <div className="relative z-10 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-10">
                    {/* Brand Section */}
                    <div className="space-y-4 text-center sm:text-left flex flex-col items-center sm:items-start">
                        <div className="flex items-center gap-2 group">
                            <LogoIcon />
                            <h3 className="text-xl md:text-2xl font-bold tracking-tight font-heading uppercase">
                                <span className="text-primary">Travel</span>
                                <span className="text-white"> With Sohan</span>
                            </h3>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
                            {t("description")}
                        </p>
                        <div className="flex items-center justify-center sm:justify-start gap-2 text-white/50 text-sm">
                            <MapPin size={14} className="text-primary" />
                            <span>{t("location")}</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center sm:text-left">
                        <h4 className="text-base md:text-lg font-bold text-white mb-4 md:mb-6 uppercase tracking-widest">
                            {t("quickLinks")}
                        </h4>
                        <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 md:gap-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 hover:text-primary transition-colors duration-300 text-sm inline-flex items-center gap-1 font-medium"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-primary/50" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
                        <h4 className="text-base md:text-lg font-bold text-white mb-4 md:mb-6 uppercase tracking-widest">
                            {t("connect")}
                        </h4>
                        <div className="space-y-3 mb-6">
                            <a href="tel:+94715567211" className="flex items-center justify-center sm:justify-start gap-3 text-white/70 hover:text-primary text-sm transition-colors font-medium">
                                <Phone size={14} className="text-primary" />
                                <span>+94 71 556 7211</span>
                            </a>
                            {/* Commented out as email is not yet available
                            <a href="mailto:sohan@example.com" className="flex items-center justify-center sm:justify-start gap-3 text-white/70 hover:text-primary text-sm transition-colors font-medium">
                                <Mail size={14} className="text-primary" />
                                <span>sohan@example.com</span>
                            </a>
                            */}
                        </div>
                        <div className="flex justify-center sm:justify-start gap-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 flex items-center justify-center text-white/70 hover:text-primary transition-all duration-300"
                                        aria-label={social.name}
                                    >
                                        {social.name === "TripAdvisor" ? (
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[22px] h-[22px]">
                                                <path d="M12.039 0C6.545 0 2.091 4.545 2.091 10.15c0 5.498 4.218 10.035 9.61 10.147h.187v2.333c-3.136.216-5.591 2.825-5.591 6.037 0 .583.084 1.144.238 1.677H0v1.275h24.078v-1.275h-6.732c.154-.533.238-1.094.238-1.677 0-3.212-2.455-5.821-5.543-6.037v-2.333c5.44-.138 9.774-4.665 9.774-10.147C21.815 4.545 17.362 0 11.867 0h.172zm-6.28 17.185c-3.111 0-5.63-2.518-5.63-5.63s2.519-5.63 5.63-5.63 5.63 2.518 5.63 5.63-2.519 5.63-5.63 5.63zm12.592 0c-3.111 0-5.63-2.518-5.63-5.63s2.519-5.63 5.63-5.63 5.63 2.518 5.63 5.63-2.519 5.63-5.63 5.63zM5.76 17.01c.717 0 1.299-.582 1.299-1.299s-.582-1.299-1.299-1.299-1.299.582-1.299 1.299.582 1.299 1.299 1.299zm12.592 0c.717 0 1.299-.582 1.299-1.299s-.582-1.299-1.299-1.299-1.299.582-1.299 1.299.582 1.299 1.299 1.299z" />
                                            </svg>
                                        ) : (
                                            Icon && <Icon size={20} />
                                        )}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/40 text-xs md:text-sm uppercase tracking-widest font-bold">
                        {t("allRights", { year: new Date().getFullYear() })}
                    </p>
                    <p className="text-white/40 text-xs md:text-sm tracking-wide">
                        {t("crafted")} <span className="text-primary/85 font-semibold hover:text-primary transition-colors duration-300">Santhushie Nallaperuma</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
