import type { Metadata } from 'next';
import PatternOverlay from '@/components/core/pattern-overlay';
import { centuryGothic, metropolis } from '@/lib/fonts';
import { Navigation, Footer } from '@/components/layout';
import '@/styles/globals.css';

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
      <body
        className={`${centuryGothic.variable} ${metropolis.variable} bg-background text-foreground flex min-h-screen flex-col font-sans antialiased`}
      >
        <Navigation />
        <main className="relative flex-1">
          <PatternOverlay side="both" margin="container" containerAlign="outside" />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
