import type { Metadata } from 'next';
import { ReactLenis } from 'lenis/react';
import { centuryGothic, metropolis } from '@/lib/fonts';
import { Cta, Footer } from '@/components/layout';
import { ServerNavigation } from '@/components/layout/navigation.server';
import { Toaster } from '@/components/ui/sonner';
import PageTransition from '@/components/layout/page-transition';
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
        <ReactLenis root />
        <ServerNavigation />
        <main className="relative flex-1">
          {/* <PatternOverlay side="both" margin="container" containerAlign="outside" /> */}
          <PageTransition>{children}</PageTransition>
        </main>
        <div className="pt-12 md:pt-20">
          <Cta
            leftTitle="Experience"
            leftSubtitle="What’s Next in"
            rightTitle="Artwork Management"
            rightDesc="Get a live demo of our advanced artwork management software by our product experts."
            buttonText="Book A Demo"
          />
        </div>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
