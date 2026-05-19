"use client";

import { useState } from "react";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { generateWhatsAppURL } from "@/lib/utils";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "What areas do you cover?",
        answer: "I offer tours across all of Sri Lanka, including the Cultural Triangle, Hill Country, Southern Coast, Eastern Coast, and Northern regions.",
    },
    {
        question: "How do I book a tour?",
        answer: "Simply contact me via WhatsApp or email with your travel dates, interests, and group size. I'll create a personalized itinerary and details for you.",
    },
    {
        question: "What services are included in a tour?",
        answer: "My services typically include professional guiding, private transportation, and fuel. Accommodation, meals, and entrance fees can also be arranged based on your preferences.",
    },
    {
        question: "Can you customize tours?",
        answer: "Absolutely! Every traveler is unique, and I specialize in creating personalized itineraries based on your interests, duration preferences, and schedule.",
    },
];

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

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const whatsappMessage = `Hi Sohan,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        window.open(generateWhatsAppURL("+94715567211", whatsappMessage), "_blank");
    };

    return (
        <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl sm:text-6xl font-heading font-bold text-white mb-4">
                        Get In <span className="text-teal-400">Touch</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Ready to start planning your Sri Lankan adventure? Let&apos;s talk!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    {/* Contact Form */}
                    <GlassCard>
                        <h2 className="text-2xl font-heading font-bold text-white mb-6">
                            Send a Message
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-black/30 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-black/30 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-black/30 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none"
                                    placeholder="Tell me about your travel plans..."
                                />
                            </div>

                            <Button type="submit" variant="primary" className="w-full" icon={<Send size={18} />}>
                                Send via WhatsApp
                            </Button>
                        </form>
                    </GlassCard>

                    {/* Contact Info & Quick Contact */}
                    <div className="space-y-6">
                        <GlassCard>
                            <h2 className="text-2xl font-heading font-bold text-white mb-6">
                                Contact Information
                            </h2>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-teal-500/20 rounded-lg">
                                        <Phone size={24} className="text-teal-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">Phone / WhatsApp</p>
                                        <p className="text-white font-semibold">+94 71 556 7211</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-teal-500/20 rounded-lg">
                                        <Mail size={24} className="text-teal-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">Email</p>
                                        <p className="text-white font-semibold">sohan@example.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-teal-500/20 rounded-lg">
                                        <MapPin size={24} className="text-teal-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">Location</p>
                                        <p className="text-white font-semibold">Sri Lanka</p>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>

                        <GlassCard className="bg-gradient-to-br from-teal-500/20 to-gold-500/20">
                            <h3 className="text-xl font-heading font-bold text-white mb-4">
                                Quick Contact
                            </h3>
                            <p className="text-gray-300 mb-6">
                                For fastest response, reach out via WhatsApp. I&apos;m available 24/7 to
                                help plan your perfect Sri Lankan adventure!
                            </p>
                            <Button
                                variant="primary"
                                className="w-full"
                                icon={<WhatsAppIcon className="w-5 h-5" />}
                                onClick={() => window.open(generateWhatsAppURL(), "_blank")}
                            >
                                Chat on WhatsApp
                            </Button>
                        </GlassCard>

                        <GlassCard>
                            <h3 className="text-xl font-heading font-bold text-white mb-4">
                                Service Areas
                            </h3>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                                {[
                                    "Colombo",
                                    "Kandy",
                                    "Ella",
                                    "Sigiriya",
                                    "Galle",
                                    "Yala",
                                    "Mirissa",
                                    "Nuwara Eliya",
                                ].map((area) => (
                                    <div key={area} className="flex items-center text-gray-300">
                                        <span className="w-2 h-2 bg-teal-400 rounded-full mr-2" />
                                        {area}
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    </div>
                </div>

                {/* FAQs */}
                <div>
                    <h2 className="text-4xl font-heading font-bold text-white text-center mb-12">
                        Frequently Asked <span className="text-teal-400">Questions</span>
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <GlassCard
                                key={index}
                                className="cursor-pointer"
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-heading font-semibold text-white">
                                        {faq.question}
                                    </h3>
                                    <span className="text-teal-400 text-2xl">
                                        {openFaq === index ? "−" : "+"}
                                    </span>
                                </div>
                                <div
                                    className={cn(
                                        "overflow-hidden transition-all duration-300",
                                        openFaq === index ? "max-h-40 mt-4" : "max-h-0"
                                    )}
                                >
                                    <p className="text-gray-400">{faq.answer}</p>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
