'use client';

import Link from 'next/link';
import { Separator } from '../ui/separator';
import { Github, Instagram, Twitter } from 'lucide-react';
import Image from 'next/image';

const pageLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { href: '#', label: 'Instagram', Icon: Instagram },
  { href: '#', label: 'Twitter', Icon: Twitter },
  { href: '#', label: 'Github', Icon: Github },
];

const legalLinks = [
  { href: '/legal', label: 'Legal' },
  { href: '/feedback', label: 'Feedback' },
];

const policyLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
];

const otherLinks = [
  { href: '/cookie-policy', label: 'Cookie Policy' },
  { href: '/sitemap', label: 'Sitemap' },
];

export function Footer() {
  const footerLink =
    'inline-block w-auto text-background/80 hover:text-success transition-all duration-500 ease-[var(--easing-smooth)]';

  return (
    <footer className="bg-primary px-48 py-24">
      <div className="mx-auto flex flex-col gap-12">
        {/* Product Links */}
        <div className="flex flex-col justify-between gap-6 tracking-tight md:flex-row">
          <div className="flex min-w-36 flex-1 flex-col gap-6">
            <span className="text-background font-bold">Jump In</span>
            <div className="flex flex-col items-start gap-4">
              {pageLinks.map(l => (
                <Link key={l.href} href={l.href} className={footerLink}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex min-w-36 flex-1 flex-col gap-6">
            <span className="text-background font-bold">Stay Connected</span>
            <div className="flex gap-4">
              {socialLinks.map(s => {
                const Icon = s.Icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="text-background/80 hover:text-success inline-block transition-all duration-500 ease-[var(--easing-smooth)]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <Separator />

        {/* Other Links */}
        <div className="flex flex-col justify-between gap-6 tracking-tight md:flex-row">
          <div className="flex-1">
            <Image src="/brand-mini.svg" alt="5Flow Secondary Logo" width={32} height={32} className="h-8 w-8" />
          </div>
          <div className="flex min-w-36 flex-1 flex-col items-start gap-4">
            {legalLinks.map(l => (
              <Link key={l.href} href={l.href} className={footerLink}>
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex min-w-36 flex-1 flex-col items-start gap-4">
            {policyLinks.map(l => (
              <Link key={l.href} href={l.href} className={footerLink}>
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex min-w-36 flex-1 flex-col items-start gap-4">
            {otherLinks.map(l => (
              <Link key={l.href} href={l.href} className={footerLink}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <p className="text-background w-full text-center font-medium tracking-tight">
          © 5Flow {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
