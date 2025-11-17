'use client';

import { Mail, ArrowUp, PersonStanding } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FixedActions() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed top-1/2 right-0 z-50 flex -translate-y-1/2 flex-col gap-2">
      <Button
        asChild
        aria-label="Email us"
        title="Email us"
        className="bg-success text-foreground hover:bg-success/90 size-16 rounded-none"
      >
        <a href="mailto:info@5flow.com">
          <Mail className="size-8" />
        </a>
      </Button>
      <Button
        aria-label="Scan Eye"
        title="Scan Eye"
        className="bg-primary text-background hover:bg-primary/90 size-16 rounded-none"
      >
        <PersonStanding className="size-8" />
      </Button>
      <Button
        aria-label="Scroll to top"
        title="Scroll to top"
        className="bg-accent1 text-background hover:bg-accent1/90 size-16 rounded-none"
        onClick={handleScrollTop}
      >
        <ArrowUp className="size-8" />
      </Button>
    </div>
  );
}

export default FixedActions;
