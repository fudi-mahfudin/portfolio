import { FOOTER_LINKS } from '@/config';
import { StarIcon } from 'lucide-react';
import Link from 'next/link';
import { linkVariants } from '../ui-local/link';
import { cn } from '@/lib/utils';
import { PROFILE_DATA } from '@/config';

export default function Footer() {
  return (
    <footer className="bg-background/30 shadow-xs relative mx-auto mb-6 flex w-full max-w-5xl flex-col rounded-2xl p-8 saturate-100 backdrop-blur-[10px]">
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3">
        {FOOTER_LINKS.map((list) => (
          <div
            key={list.id}
            className="mb-10 flex flex-col items-start gap-4 pr-4"
          >
            {list.links.map((link) => {
              const { href, key } = link;

              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    linkVariants({ variant: 'muted' }),
                    'capitalize'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {key}
                </Link>
              );
            })}
          </div>
        ))}
      </div>
      <div className="mt-20 flex items-center justify-between text-sm">
        <div>
          &copy; {new Date().getFullYear()} {PROFILE_DATA.name}
        </div>
        <Link
          href="https://git.new/fudi"
          className="flex items-center justify-center overflow-hidden rounded-md border"
        >
          <div className="bg-muted flex h-8 items-center gap-2 border-r px-2">
            <StarIcon className="size-4" />
            <span className="font-medium">Star</span>
          </div>
          <div className="bg-background flex h-8 items-center px-3">
            {Intl.NumberFormat('en', {
              notation: 'compact',
              minimumFractionDigits: 0,
              maximumFractionDigits: 1,
            }).format(123)}
          </div>
        </Link>
      </div>
    </footer>
  );
}
