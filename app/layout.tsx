import type { Metadata } from 'next';
import { centuryGothic, metropolis } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: '5Flow | Brand & Artwork Management Solutions',
  description:
    'Your top service provider for artwork management solutions in Germany. Streamline tasks with brand and artwork management.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${centuryGothic.variable} ${metropolis.variable} antialiased`}>{children}</body>
    </html>
  );
}
