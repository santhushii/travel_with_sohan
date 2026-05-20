'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useState, useTransition, useRef, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en', label: 'English' },
    // { code: 'es', label: 'Español' },
  ];

  const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0];

  function handleSelect(nextLocale: string) {
    setIsOpen(false);
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale as any });
    });
  }

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className={cn(
          "flex items-center gap-2 bg-white/5 border border-white/20 rounded-full px-4 py-2 hover:bg-white/10 hover:border-primary/40 transition-all min-h-[44px] text-sm font-bold text-white cursor-pointer select-none",
          isOpen && "border-primary bg-white/10"
        )}
        aria-label={t('label')}
      >
        <Globe size={16} className="text-primary shrink-0" />
        <span>{currentLanguage.label}</span>
        <ChevronDown 
          size={14} 
          className={cn("text-white/60 transition-transform duration-300", isOpen && "rotate-180 text-primary")} 
        />
      </button>

      {/* Custom Premium Dropdown Panel */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-[#0c141c]/95 border border-white/10 rounded-2xl p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl z-[9999] animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={cn(
                  "w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-between",
                  locale === lang.code
                    ? "bg-primary/20 text-primary"
                    : "text-white/80 hover:bg-white/5 hover:text-white"
                )}
              >
                <span>{lang.label}</span>
                {locale === lang.code && (
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
