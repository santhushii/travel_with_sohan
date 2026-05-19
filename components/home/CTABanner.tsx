"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { generateWhatsAppURL } from "@/lib/utils";
import QuickBookModal from "@/components/ui/QuickBookModal";

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

export default function CTABanner() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="w-full py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-900/20 via-black to-cyan-900/20 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />

            <div className="relative max-w-3xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight leading-tight font-heading uppercase">
                    Plan Your Sri Lanka Trip
                    <br />
                    <span className="text-primary italic">
                        in 2 Minutes
                    </span>
                </h2>

                <p className="text-white/70 text-base md:text-lg mb-8 md:mb-10 max-w-md mx-auto font-medium">
                    Get personalized tour recommendations instantly via WhatsApp
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        onClick={() => window.open(generateWhatsAppURL(), "_blank")}
                        className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 min-h-[56px] rounded-full transition-all duration-300 font-bold text-base w-full sm:w-auto shadow-lg shadow-green-500/20"
                    >
                        <WhatsAppIcon className="w-5 h-5 text-white" />
                        <span className="uppercase tracking-widest">Chat on WhatsApp</span>
                    </button>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 min-h-[56px] rounded-full transition-all duration-300 font-bold text-base w-full sm:w-auto border border-white/20"
                    >
                        <Mail size={20} />
                        <span className="uppercase tracking-widest">Request a Quote</span>
                    </button>
                </div>
            </div>

            <QuickBookModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </section>
    );
}
