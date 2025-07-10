import { cn } from '@/lib/utils';
import Link from 'next/link';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function ButtonFancy({
  children,
  className,
  ...props
}: Props & React.ComponentProps<typeof Link>) {
  return (
    <Link {...props} className="fancy-btn">
      <span
        className={cn(
          'bg-black text-primary-foreground rounded-full py-5 px-10 flex items-center gap-2 font-bold text-3xl cursor-pointer hover:bg-transparent hover:text-black transition-all duration-75',
          className
        )}
      >
        {children}
      </span>
    </Link>
  );
}
