import FullBleedLines from './full-bleed-lines';

interface PageHeaderProps {
  title: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <FullBleedLines className="mt-50 flex w-full justify-end gap-8">
      <b className="text-foreground text-5xl leading-none tracking-tight">{title}</b>
      <div className="bg-primary h-10 w-10" />
    </FullBleedLines>
  );
};

export default PageHeader;
