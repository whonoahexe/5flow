'use client';

import { useEffect, useState, useCallback, useMemo } from 'react';
import { Globe, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const languages = [
  { code: 'en', name: 'ENGLISH', flag: '🇬🇧' },
  { code: 'de', name: 'DEUTSCH', flag: '🇩🇪' },
  { code: 'fr', name: 'FRANÇAIS', flag: '🇫🇷' },
];

// Helper function to get language from cookie
const getCurrentLanguageFromCookie = (): string => {
  if (typeof document === 'undefined') return 'en';

  const googleCookie = document.cookie
    .split('; ')
    .find((row) => row.startsWith('googtrans='));

  if (googleCookie) {
    const langPair = googleCookie.split('=')[1];
    const targetLang = langPair.split('/')[2];
    return targetLang || 'en';
  }
  return 'en';
};

export default function GoogleTranslateSwitcher() {
  const [mounted, setMounted] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');

  useEffect(() => {
    setMounted(true);

    // Check once on mount
    const initialLang = getCurrentLanguageFromCookie();
    setCurrentLang(initialLang);

    // Listen for storage events (if another tab changes language)
    const handleStorageChange = () => {
      const newLang = getCurrentLanguageFromCookie();
      setCurrentLang(newLang);
    };

    window.addEventListener('storage', handleStorageChange);

    // Check periodically (reduced from 1s to 5s for performance)
    const interval = setInterval(() => {
      const newLang = getCurrentLanguageFromCookie();
      if (newLang !== currentLang) {
        setCurrentLang(newLang);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [currentLang]);

  const changeLanguage = useCallback((langCode: string) => {
    // Set the Google Translate cookie (fixed for localhost)
    const domain = window.location.hostname;

    // Don't set domain for localhost
    if (domain === 'localhost' || domain === '127.0.0.1') {
      document.cookie = `googtrans=/en/${langCode}; path=/`;
    } else {
      document.cookie = `googtrans=/en/${langCode}; path=/; domain=${domain}`;
      document.cookie = `googtrans=/en/${langCode}; path=/`;
    }

    // Update state immediately
    setCurrentLang(langCode);

    // Trigger the translation
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event('change'));
    } else {
      // Fallback: reload page with translation
      window.location.reload();
    }
  }, []);

  // Memoize current language lookup
  const currentLanguage = useMemo(
    () => languages.find((lang) => lang.code === currentLang) || languages[0],
    [currentLang]
  );

  if (!mounted) {
    return (
      <button className="nav-pill px-4" disabled>
        <Globe className="h-4 w-4" />
      </button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="nav-pill px-4 flex items-center gap-2">
          <span className="hidden sm:inline leading-[150%] font-bold tracking-tight">
            {currentLanguage.flag} {currentLanguage.name}
          </span>
          <span className="sm:hidden">{currentLanguage.flag}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={cn(
          'z-[999] mt-10 translate-y-2 p-2 opacity-0 transition-all duration-300 ease-[var(--easing-smooth)] data-[state=open]:translate-y-0 data-[state=open]:opacity-100',
          'w-72'
        )}
      >
        {languages.map((lang) => (
          <DropdownMenuItem asChild key={lang.code}>
            <button
              onClick={() => changeLanguage(lang.code)}
              className={cn(
                'group/item active:ring-primary/50 active:ring-offset-background flex h-12 w-full cursor-pointer items-stretch overflow-hidden bg-[#F4F4F5] p-0 no-underline transition-all duration-200 ease-[var(--easing-smooth)] active:translate-x-[1px] active:scale-[0.98] active:ring-2 active:ring-offset-2 active:outline-none'
              )}
            >
              <div className="bg-primary text-background flex h-full shrink-0 grow-0 basis-12 items-center justify-center transition-all duration-500 ease-[var(--easing-smooth)] group-hover/item:basis-1/2">
                <ArrowUpRight className="text-background !h-8 !w-8" strokeWidth={2} />
              </div>
              <span className="text-foreground bg-background flex h-full min-w-0 flex-1 items-center justify-start px-3 text-left font-semibold tracking-tight">
                {lang.flag} {lang.name}
                {lang.code === currentLang && ' ✓'}
              </span>
            </button>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
