'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type SimpleLink = { href: string; label: string };

type DropdownMenuConfig = {
  items?: SimpleLink[];
  offsetClass?: string;
  itemWidthClass?: string;
  columns?: number; // default 1
  groups?: { heading: string; items: SimpleLink[] }[];
};

type NavItemLink = {
  type: 'link';
  href: string;
  label: string;
};

type NavItemDropdown = {
  type: 'dropdown';
  href: string;
  label: string;
  menu: DropdownMenuConfig;
};

type NavItem = NavItemLink | NavItemDropdown;

const NAV_ITEMS: NavItem[] = [
  { type: 'link', href: '/about', label: '[ ABOUT ]' },
  {
    type: 'dropdown',
    href: '/products',
    label: '[ PRODUCTS ]',
    menu: {
      items: [
        { href: '/products/wave', label: '[ WAVE ]' },
        { href: '/products/dragonfly', label: '[ DRAGONFLY ]' },
        { href: '/products/mediabox', label: '[ MEDIABOX ]' },
        { href: '/products/wavestudio', label: '[ WAVESTUDIO ]' },
      ],
      offsetClass: 'ml-36',
      itemWidthClass: 'w-72',
      columns: 1,
    },
  },
  {
    type: 'dropdown',
    href: '/solutions',
    label: '[ SOLUTIONS ]',
    menu: {
      items: [
        { href: '/solutions/artwork-management', label: '[ ARTWORK MANAGEMENT ]' },
        { href: '/solutions/online-proofing', label: '[ ONLINE PROOFING ]' },
        { href: '/solutions/content-management', label: '[ CONTENT MANAGEMENT ]' },
        { href: '/solutions/asset-library', label: '[ ASSET LIBRARY ]' },
        { href: '/solutions/automated-artwork', label: '[ AUTOMATED ARTWORK ]' },
        { href: '/solutions/integration', label: '[ INTEGRATION ]' },
      ],
      offsetClass: 'ml-76',
      itemWidthClass: 'w-112',
      columns: 1,
    },
  },
  {
    type: 'dropdown',
    href: '/applications',
    label: '[ APPLICATIONS ]',
    menu: {
      groups: [
        {
          heading: 'ROLE',
          items: [
            { href: '/applications/role/brand-manager', label: '[ BRAND MANAGER ]' },
            { href: '/applications/role/quality-regulatory', label: '[ QUALITY & REGULATORY ]' },
            { href: '/applications/role/creative-studio', label: '[ CREATIVE / STUDIO ]' },
            { href: '/applications/role/procurement-sourcing', label: '[ PROCUREMENT & SOURCING ]' },
          ],
        },
        {
          heading: 'INDUSTRY',
          items: [
            { href: '/applications/industry/retail', label: '[ RETAIL ]' },
            { href: '/applications/industry/health-pharma', label: '[ HEALTH & PHARMA ]' },
            { href: '/applications/industry/food-beverages', label: '[ FOOD & BEVERAGES ]' },
            { href: '/applications/industry/beauty-cosmetics', label: '[ BEAUTY & COSMETICS ]' },
            { href: '/applications/industry/consumer-goods', label: '[ CONSUMER GOODS ]' },
          ],
        },
      ],
      offsetClass: 'ml-204',
      itemWidthClass: 'w-120',
      columns: 2,
    },
  },
];

function isActive(pathname: string, item: NavItem): boolean {
  if (item.type === 'link') return pathname === item.href;
  // Active when on parent base route or any child route
  if (pathname === item.href || pathname.startsWith(item.href + '/')) return true;

  // Check flat items if present
  if (item.menu.items && item.menu.items.some(i => pathname === i.href || pathname.startsWith(i.href + '/'))) {
    return true;
  }

  // Check grouped items if present
  if (
    item.menu.groups &&
    item.menu.groups.some(group => group.items.some(i => pathname === i.href || pathname.startsWith(i.href + '/')))
  ) {
    return true;
  }

  return false;
}

export function Navigation() {
  const pathname = usePathname();
  const activeMap = useMemo(() => {
    const map = new Map<string, boolean>();
    for (const item of NAV_ITEMS) {
      map.set(item.href, isActive(pathname, item));
    }
    return map;
  }, [pathname]);

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
      {/* Logo */}
      <Link href="/" className="cursor-pointer">
        <Image src="/brand.svg" width={103} height={24} alt="5Flow Brand Logo" />
      </Link>

      {/* Nav links */}
      <div className="flex gap-6">
        {NAV_ITEMS.map(item => {
          const itemActive = activeMap.get(item.href) ?? false;

          if (item.type === 'dropdown') {
            const { menu } = item;
            const columns = menu.columns ?? 1;
            const listLayoutClass = menu.groups
              ? 'grid grid-cols-2 gap-4'
              : columns > 1
                ? 'grid grid-cols-' + columns
                : 'flex flex-col';
            const offsetClass = menu.offsetClass ?? '';
            const itemWidthClass = menu.itemWidthClass ?? '';

            return (
              <DropdownMenu key={item.href}>
                <DropdownMenuTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn('nav-pill px-4', itemActive && 'nav-pill--active')}
                    aria-current={itemActive ? 'page' : undefined}
                  >
                    <span className="leading-[150%] font-bold tracking-tight">{item.label}</span>
                  </Link>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  className={cn(
                    'z-[999] mt-10 translate-y-2 gap-2 p-2 opacity-0 transition-all duration-300 ease-[var(--easing-smooth)] data-[state=open]:translate-y-0 data-[state=open]:opacity-100',
                    listLayoutClass,
                    offsetClass
                  )}
                >
                  {menu.groups
                    ? // Render grouped columns with headings
                      menu.groups.map(group => (
                        <div key={group.heading} className="flex flex-col">
                          <div className="border-accent1 mb-4 border-l-4 bg-[#F4F4F5] p-2">
                            <div className="bg-background">
                              <DropdownMenuLabel className="text-accent1 text-base font-semibold tracking-tight">
                                {group.heading}
                              </DropdownMenuLabel>
                            </div>
                          </div>

                          <div className="flex flex-col gap-2">
                            {group.items.map(({ href, label }) => (
                              <DropdownMenuItem asChild key={href}>
                                <Link
                                  href={href}
                                  className={cn(
                                    'group/item active:ring-primary/50 active:ring-offset-background flex h-12 cursor-pointer items-stretch overflow-hidden bg-[#F4F4F5] p-0 no-underline transition-all duration-200 ease-[var(--easing-smooth)] active:translate-x-[1px] active:scale-[0.98] active:ring-2 active:ring-offset-2 active:outline-none',
                                    itemWidthClass
                                  )}
                                >
                                  <div className="bg-primary text-background flex h-full shrink-0 grow-0 basis-12 items-center justify-center transition-all duration-500 ease-[var(--easing-smooth)] group-hover/item:basis-1/2">
                                    <ArrowUpRight className="text-background !h-8 !w-8" strokeWidth={2} />
                                  </div>
                                  <span className="text-foreground bg-background flex h-full min-w-0 flex-1 items-center justify-start px-3 text-left font-semibold tracking-tight">
                                    {label}
                                  </span>
                                </Link>
                              </DropdownMenuItem>
                            ))}
                          </div>
                        </div>
                      ))
                    : (menu.items ?? []).map(({ href, label }) => (
                        <DropdownMenuItem asChild key={href}>
                          <Link
                            href={href}
                            className={cn(
                              'group/item active:ring-primary/50 active:ring-offset-background flex h-12 cursor-pointer items-stretch overflow-hidden bg-[#F4F4F5] p-0 no-underline transition-all duration-200 ease-[var(--easing-smooth)] active:translate-x-[1px] active:scale-[0.98] active:ring-2 active:ring-offset-2 active:outline-none',
                              itemWidthClass
                            )}
                          >
                            <div className="bg-primary text-background flex h-full shrink-0 grow-0 basis-12 items-center justify-center transition-all duration-500 ease-[var(--easing-smooth)] group-hover/item:basis-1/2">
                              <ArrowUpRight className="text-background !h-8 !w-8" strokeWidth={2} />
                            </div>
                            <span className="text-foreground bg-background flex h-full min-w-0 flex-1 items-center justify-start px-3 text-left font-semibold tracking-tight">
                              {label}
                            </span>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                </DropdownMenuContent>
              </DropdownMenu>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn('nav-pill px-4', itemActive && 'nav-pill--active')}
              aria-current={itemActive ? 'page' : undefined}
            >
              <span className="leading-[150%] font-bold tracking-tight">{item.label}</span>
            </Link>
          );
        })}
      </div>

      {/* Cta */}
      <Button
        asChild
        className="group/cta active:ring-primary/50 active:ring-offset-background inline-flex origin-left items-center justify-start gap-0 rounded-none !bg-transparent px-0 py-0 font-semibold tracking-tight transition-all duration-150 ease-[var(--easing-smooth)] active:translate-x-[1px] active:scale-[0.99] active:ring-2 active:ring-offset-2 has-[>svg]:px-0"
      >
        <Link href="/contact" aria-label="Book a demo">
          <span className="bg-success text-success-foreground group-hover/cta:bg-success/90 group-active/cta:bg-success/80 inline-flex h-9 items-center px-4 transition-all duration-300 ease-[var(--easing-smooth)] group-hover/cta:px-3">
            Book A Demo
          </span>
          <span
            className="bg-success text-success-foreground group-hover/cta:bg-success/90 group-active/cta:bg-success/80 ml-0 inline-flex h-9 w-9 items-center justify-center transition-all duration-300 ease-[var(--easing-smooth)] group-hover/cta:ml-2"
            aria-hidden="true"
          >
            <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      </Button>
    </nav>
  );
}
