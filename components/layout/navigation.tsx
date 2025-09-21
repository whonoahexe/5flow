'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

const navigationItems = [
  { href: '/about', label: '[ ABOUT ]' },
  { href: '/company', label: '[ COMPANY ]' },
  { href: '/solutions', label: '[ SOLUTIONS ]' },
  { href: '/careers', label: '[ CAREERS ]' },
];

export function Navigation() {
  const pathname = usePathname();
  const activeItem = navigationItems.find(item => item.href === pathname);

  return (
    <nav className="bg-background border-border sticky flex h-[88px] w-full items-center justify-between border-[1px] border-b border-solid px-28 py-4">
      <Link href="/" className="cursor-pointer">
        <Image src="/brand.svg" width={103} height={24} alt="5Flow Brand Logo" />
      </Link>
      <div className="flex gap-6">
        {navigationItems.map(item => (
          <Link key={item.href} href={item.href}>
            <div
              className={`flex items-center justify-center px-4 ${activeItem === item ? 'bg-success text-foreground' : 'text-foreground'}`}
            >
              <div className="leading-[150%] font-semibold tracking-tight">{item.label}</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex min-h-[36px] items-center justify-center gap-2 px-4 py-[7.5px] text-center text-sm">
        <Button variant="success" className="rounded-none font-semibold tracking-tight">
          Book A Demo
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </nav>
  );
}
