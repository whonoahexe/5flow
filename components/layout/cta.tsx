'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface CtaProps {
  leftTitle: string;
  leftSubtitle: string;
  rightTitle: string;
  rightDesc: string;
  buttonText: string;
}

export function Cta({ leftTitle, leftSubtitle, rightTitle, rightDesc }: CtaProps) {
  return (
    <>
      <div className="bg-primary flex h-[560px] w-full flex-col items-center justify-center px-48 py-30">
        <div className="text-background flex w-full justify-between">
          <div className="flex w-full max-w-md flex-col gap-4">
            <b className="text-5xl tracking-tighter">{leftTitle}</b>
            <div className="flex items-center justify-between">
              <ArrowRight size={48} />
              <b className="text-5xl tracking-tighter">{leftSubtitle}</b>
            </div>
          </div>

          <div className="flex w-full flex-col items-end justify-center gap-4">
            <b className="text-5xl tracking-tighter">{rightTitle}</b>
            <div className="flex w-full items-center justify-end gap-4">
              <p className="w-full max-w-96 text-right tracking-tight">{rightDesc}</p>
              <Button variant="success" className="rounded-none" size="lg">
                Book A Demo
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
