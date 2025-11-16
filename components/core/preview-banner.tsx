type Props = {
  message?: string;
  note?: string;
};

export default function PreviewBanner({ message = 'Preview mode is ON', note }: Props) {
  return (
    <div className="sticky top-0 z-50 w-full bg-amber-100 px-4 py-2 text-sm text-amber-900 shadow">
      <div className="container mx-auto flex items-center justify-between">
        <span>{message}</span>
        {note ? <span className="ml-4 opacity-80">{note}</span> : null}
      </div>
    </div>
  );
}
