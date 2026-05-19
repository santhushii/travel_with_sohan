'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Calendar, Users, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { cn, generateCustomWhatsAppMessage, generateWhatsAppURL } from '@/lib/utils';

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

export default function QuickBookModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const t = useTranslations('QuickBook');
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    dates: '',
    people: 2,
    destination: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = generateCustomWhatsAppMessage({
        date: formData.dates,
        people: formData.people,
        message: `Plan for ${formData.destination}. ${formData.message}`
    });
    window.open(generateWhatsAppURL("+94715567211", message), "_blank");
    setStep(2);
    setTimeout(() => {
        onClose();
        setStep(1);
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop (visible on all screens for premium dialog contrast) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-[9998]"
          />
          
          {/* Mathematical Centering Wrapper */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-0 md:p-4 pointer-events-none">
              {/* Dedicated Booking Panel (Whole Screen on mobile, Centered Dialog Card on desktop) */}
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="relative w-full h-full md:h-auto md:max-w-lg bg-[#050E16]/98 md:bg-[#050E16]/80 md:backdrop-blur-2xl border-0 md:border md:border-white/10 md:rounded-[2.5rem] md:shadow-2xl overflow-y-auto overscroll-behavior-contain p-6 sm:p-10 flex flex-col justify-center pointer-events-auto"
              >
                <div className="relative w-full max-w-md mx-auto py-8">
                  {/* Close button - highly prominent and easy to tap */}
                  <button 
                    onClick={onClose}
                    className="absolute -top-4 right-0 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all z-10"
                    aria-label="Close"
                  >
                    <X size={24} />
                  </button>

                  {step === 1 ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-2 leading-tight uppercase">
                            {t("title", { fallback: "Plan Your Journey" })}
                        </h2>
                        <p className="text-white/50 text-sm sm:text-base">
                            {t("subtitle", { fallback: "Fill in the details and start your Sri Lankan adventure today." })}
                        </p>
                      </div>

                      <div className="space-y-4">
                        {/* Destination Input (Optimized text-base for zero iOS zoom) */}
                        <div className="relative group">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Preferred Destination"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white text-base placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-all"
                                value={formData.destination}
                                onChange={(e) => setFormData({...formData, destination: e.target.value})}
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Dates Input (Optimized text-base for zero iOS zoom) */}
                            <div className="relative">
                                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Travel Dates"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white text-base placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-all"
                                    value={formData.dates}
                                    onChange={(e) => setFormData({...formData, dates: e.target.value})}
                                />
                            </div>
                            {/* People Input (Optimized text-base for zero iOS zoom) */}
                            <div className="relative">
                                <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-5 h-5" />
                                <input
                                    type="number"
                                    placeholder="People"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white text-base placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-all"
                                    value={formData.people}
                                    onChange={(e) => setFormData({...formData, people: parseInt(e.target.value) || 2})}
                                />
                            </div>
                        </div>

                        {/* Textarea (Optimized text-base for zero iOS zoom) */}
                        <textarea
                            placeholder="Tell me more about your interests..."
                            rows={3}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-4 text-white text-base placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-all resize-none"
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-primary hover:bg-white text-black py-4 sm:py-5 rounded-2xl font-bold transition-all duration-500 flex items-center justify-center gap-3 uppercase tracking-widest text-sm sm:text-base shadow-lg shadow-primary/20"
                      >
                        <WhatsAppIcon className="w-5 h-5 text-[#25D366] group-hover:text-black transition-colors" />
                        {t("submit", { fallback: "Confirm via WhatsApp" })}
                      </button>
                    </form>
                  ) : (
                    <div className="py-12 text-center space-y-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6"
                      >
                        <CheckCircle2 className="w-10 h-10 text-primary" />
                      </motion.div>
                      <h2 className="text-3xl font-heading font-bold text-white uppercase">
                        {t("successTitle", { fallback: "Request Sent!" })}
                      </h2>
                      <p className="text-white/50 max-w-xs mx-auto text-sm sm:text-base">
                        {t("successDesc", { fallback: "I will get back to you on WhatsApp within 24 hours." })}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
