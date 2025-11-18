import { ArrowDown, ShieldCheck, TrendingUp, Users, UserStar } from 'lucide-react';
import FullBleedLines from '@/components/core/full-bleed-lines';
import InlineHighlight from '@/components/core/inline-highlight';

type ApartFeature = { title: string; description: string; iconKey?: string };
type ApartProps = { features?: ApartFeature[]; titleOverride?: string };

const iconMap: Record<string, any> = {
  customer: UserStar,
  team: Users,
  scale: TrendingUp,
  security: ShieldCheck,
  backed: ShieldCheck,
};

const fallbackFeatures: ApartFeature[] = [
  {
    title: 'Customer First',
    description:
      'We design around your needs, not ours. Every solution is built in partnership with the people who use it.',
    iconKey: 'customer',
  },
  {
    title: 'Strong & Experienced Team',
    description:
      'Decades of expertise in packaging, creative production, and workflow automation delivered by people who know how brands really work.',
    iconKey: 'team',
  },
  {
    title: 'Flexibility at Scale',
    description:
      'One size never fits all. Our platforms adapt to your workflows, with the ability to customize, scale, and integrate seamlessly.',
    iconKey: 'scale',
  },
  {
    title: 'Backed by Propelis',
    description:
      "As part of the Propelis Group, we're supported by the combined strength of global leaders SGK and SGS & Co.",
    iconKey: 'backed',
  },
];

const Apart = ({ features }: ApartProps) => {
  const data = features && features.length > 0 ? features : fallbackFeatures;

  return (
    <>
      <div className="flex w-full flex-col gap-8 px-4 sm:px-0">
        <FullBleedLines className="font-heading flex w-full flex-col items-center gap-4 px-2 sm:flex-row sm:items-start md:gap-8">
          <b className="text-foreground text-center text-4xl leading-none tracking-tighter sm:text-left sm:text-6xl sm:leading-none">
            <span>What Sets</span>
            <br />
            <span>{`Us `}</span>
            <span>
              <InlineHighlight className="text-background">Apart?</InlineHighlight>
            </span>
          </b>
          <ArrowDown className="text-accent1 h-16 w-16 sm:h-32 sm:w-32" strokeWidth={1.5} />
        </FullBleedLines>

        <FullBleedLines className="flex w-full flex-col justify-between gap-8 sm:flex-row sm:gap-0">
          {data.map((feature, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-0 px-4 text-center sm:items-start sm:text-left md:gap-4"
              >
                <div className="flex flex-col items-center gap-2 py-4 sm:items-start sm:py-7">
                  <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
                    {(() => {
                      const Icon = feature.iconKey && iconMap[feature.iconKey] ? iconMap[feature.iconKey] : UserStar;
                      return <Icon className="text-primary h-5 w-5" strokeWidth={2} />;
                    })()}
                  </div>
                  <b className="text-foreground relative text-xl leading-relaxed tracking-tight sm:text-2xl">
                    {feature.title}
                  </b>
                </div>
                <div className="flex items-center px-0 py-4 sm:py-7">
                  <p className="text-foreground text-sm leading-relaxed tracking-tight sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </FullBleedLines>
      </div>
    </>
  );
};

export default Apart;
