import { cn } from '@/lib/utils';

interface Props {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export default function Card({ children, title, className }: Props) {
  return (
    <div
      className={cn(
        'relative bg-primary-background w-full h-fit rounded-2xl border border-border p-3 xs:p-6 text-primary-foreground overflow-hidden',
        className
      )}
    >
      {title ? (
        <div className="flex flex-col gap-y-6">
          <div className="font-pixel">
            <p className="uppercase text-lg">{title}</p>
          </div>
          {children}
        </div>
      ) : (
        children
      )}
    </div>
  );
}
