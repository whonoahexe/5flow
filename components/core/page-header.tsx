import FullBleedLines from './full-bleed-lines';

interface PageHeaderProps {
  title: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <FullBleedLines className="mt-32 flex w-full justify-end gap-8 md:mt-50">
      <b className="text-foreground text-4xl leading-none tracking-tight md:text-5xl">{title}</b>
      <div className="bg-primary h-10 w-10" />
    </FullBleedLines>
  );
};

export default PageHeader;
