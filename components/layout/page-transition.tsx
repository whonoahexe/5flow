'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useLenis } from 'lenis/react';

type PageTransitionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function PageTransition({ children, className }: PageTransitionProps) {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const lenis = useLenis();

  const transition = { duration: 1, ease: [0.22, 1, 0.36, 1] } as const;

  const initial = reduced ? { opacity: 0 } : { opacity: 0, y: 12 };
  const animate = reduced ? { opacity: 1 } : { opacity: 1, y: 0 };

  useEffect(() => {
    const id = window.setTimeout(() => {
      const instance = lenis as unknown as
        | { scrollTo?: (to: number, opts?: { immediate?: boolean }) => void }
        | null
        | undefined;
      if (instance && typeof instance.scrollTo === 'function') {
        instance.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    }, 0);

    return () => window.clearTimeout(id);
  }, [pathname, lenis]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={pathname} initial={initial} animate={animate} transition={transition} className={className}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
