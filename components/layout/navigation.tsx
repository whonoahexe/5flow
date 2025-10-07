'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

const navigationItems = [
  { href: '/about', label: '[ ABOUT ]' },
  { href: '/product/wave', label: '[ PRODUCTS ]' },
  { href: '/solutions', label: '[ SOLUTIONS ]' },
  { href: '/applications', label: '[ APPLICATIONS ]' },
];

export function Navigation() {
  const pathname = usePathname();
  const activeItem = navigationItems.find(item => item.href === pathname);

  const [footerVisible, setFooterVisible] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const footer = document.querySelector('footer');
    if (!footer) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          // When footer is intersecting viewport, hide the nav
          setFooterVisible(entry.isIntersecting);
        });
      },
      { root: null, threshold: 0.01 }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      ref={navRef}
      className={`bg-background border-border fixed top-0 z-[999] flex h-[88px] w-full items-center justify-between border-[1px] border-b border-solid px-28 py-4 transition-transform duration-500 ease-[var(--easing-smooth)] ${
        footerVisible ? '-translate-y-[120%]' : 'translate-y-0'
      }`}
      aria-hidden={footerVisible}
    >
      <Link href="/" className="cursor-pointer">
        <Image src="/brand.svg" width={103} height={24} alt="5Flow Brand Logo" />
      </Link>
      <div className="flex gap-6">
        {navigationItems.map(item => {
          const isActive = activeItem === item;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn('nav-pill px-4', isActive && 'nav-pill--active')}
              aria-current={isActive ? 'page' : undefined}
            >
              <span className="leading-[150%] font-bold tracking-tight">{item.label}</span>
            </Link>
          );
        })}
      </div>
      <Link href="/contact">
        <Button variant="success" className="rounded-none font-semibold tracking-tight">
          Book A Demo
          <ArrowRight className="h-4 w-4" />
        </Button>
      </Link>
    </nav>
  );
}
